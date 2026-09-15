/**
 * Compose every page's sections from its recipe.
 *
 *   npm run pages:compose      (part of `npm run inventory` and `prebuild`)
 *
 * Output: content/generated/page-sections.json — the ordered ContentSection[] for every canonical
 * page. Pages with authored content (content/pages) render that instead.
 *
 * Every word on a composed page comes from one of:
 *   - a PDF paragraph whose claims are publishable (the page's own, or a related page's)
 *   - a storyline, comparison, matrix or before/after set (content/architecture/storylines.ts)
 *   - claim-free structural labels ("Common questions", cluster and category names)
 * The validator scans this output for placeholders and unpublishable claims.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { generated } from "./pipeline-env.ts";
import type { ActionRef, ContentSection, Inventory, InventoryPage, RichText, SectionKind, SourceRef, VisualRef } from "../types/content.ts";
import { LEXICON } from "../content/architecture/lexicon.ts";
import { pageTypeById } from "../content/architecture/page-types.ts";
import { CATEGORY_CONVERSION, clusterById } from "../content/architecture/clusters.ts";
import { INDEX_PAGES, categoryById, sectionById } from "../content/architecture/sections.ts";
import { BEFORE_AFTER, COMPARISONS, MATRICES, STORYLINES, type Storyline } from "../content/architecture/storylines.ts";
import { heroVisual, secondaryVisual } from "../content/architecture/visuals.ts";
import { AUTHORED_PAGES } from "../content/pages/registry.ts";
import { CLAIMS, isPublishable } from "../content/architecture/claims.ts";
import { verifiedContextFor } from "../content/architecture/verified-context.ts";

const OUTPUT = generated("page-sections.json");
const inventory: Inventory = JSON.parse(readFileSync(generated("inventory.json"), "utf8"));
const byNumber = new Map(inventory.pages.map((p) => [p.number, p]));
const canonical = inventory.pages.filter((p) => p.status === "canonical");

/* ---------------------------------------------------------------------------------------------- */
/* Helpers                                                                                          */
/* ---------------------------------------------------------------------------------------------- */

const page = (n: number) => {
  const p = byNumber.get(n);
  if (!p) throw new Error(`Unknown PDF page ${n}`);
  return p.mergedInto ? byNumber.get(p.mergedInto)! : p;
};
const publishable = (n: number) => !page(n).needsVerification;
/** Published or framed: held pages are never linked, listed or named. */
const live = (n: number) => page(n).status === "canonical" && page(n).publication !== "held";
const statement = (n: number) => (publishable(n) ? page(n).keyStatement : null);
const paragraph = (n: number) => (publishable(n) ? page(n).sourceText : null);
const sentences = (text: string) => text.split(/(?<=[.!?])\s+(?=["A-Z])/);
const pdf = (...pages: number[]): SourceRef[] => [...new Set(pages)].map((n) => ({ kind: "pdf", page: n }));
const EDITORIAL: SourceRef = { kind: "editorial", note: "Structural label; linked content carries its own PDF source." };
const shortTitle = (n: number) => page(n).title.replace(/^GetSibu for /, "");

/* Claim safety: labels such as cluster names can name a capability GetSibu has not confirmed. */
const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const BLOCKED_TERMS = CLAIMS.filter((c) => !isPublishable(c)).flatMap((c) => c.detect.map((term) => new RegExp(`(?<![A-Za-z0-9-])${escapeRegExp(term)}(?![A-Za-z0-9-])`, "i")));
const blockedIn = (text: string) => BLOCKED_TERMS.some((pattern) => pattern.test(text));
/** The label if it names no unconfirmed claim, otherwise the fallback. */
const safe = (label: string | undefined, fallback: string) => (label && !blockedIn(label) ? label : fallback);
const categoryLabel = (p: InventoryPage) => categoryById.get(p.category)!.label;
/* Inline links --------------------------------------------------------------------------------- */

const plain = (rich: RichText) => (typeof rich === "string" ? rich : rich.map((part) => (typeof part === "string" ? part : part.text)).join(""));
const lexicon = LEXICON.map((entry) => ({ page: entry.page, patterns: entry.terms.map((term) => new RegExp(`(?<![A-Za-z0-9-])${escapeRegExp(term)}(?![A-Za-z0-9-])`, "i")) }));

/** Links a phrase that appears in the text to a page. */
function linkPhrase(text: string, phrase: string, target: number): RichText {
  const at = text.indexOf(phrase);
  if (at === -1) throw new Error(`Phrase "${phrase}" is not in "${text}"`);
  return [text.slice(0, at), { text: phrase, page: target }, text.slice(at + phrase.length)].filter((part) => part !== "");
}

/**
 * Links the first mention of up to `max` lexicon concepts in a text to the pages that explain them —
 * live pages only, never the page itself, each page once. Used for answers and definitions, where a
 * link helps the reader go deeper.
 */
function autolink(text: string, p: InventoryPage, max = 3, skip = new Set<number>()): RichText {
  const matches: Array<{ index: number; length: number; page: number }> = [];
  for (const entry of lexicon) {
    const target = page(entry.page).number;
    if (target === p.number || skip.has(target) || !live(target)) continue;
    let best: RegExpExecArray | null = null;
    for (const pattern of entry.patterns) {
      const match = pattern.exec(text);
      if (match && (!best || match.index < best.index || (match.index === best.index && match[0].length > best[0].length))) best = match;
    }
    if (best) matches.push({ index: best.index, length: best[0].length, page: target });
  }
  const chosen: typeof matches = [];
  for (const m of matches.sort((a, b) => a.index - b.index || b.length - a.length)) {
    if (chosen.length === max) break;
    if (chosen.some((c) => c.page === m.page || (m.index < c.index + c.length && c.index < m.index + m.length))) continue;
    chosen.push(m);
  }
  if (!chosen.length) return text;
  const parts: Array<string | { text: string; page: number }> = [];
  let cursor = 0;
  for (const m of chosen.sort((a, b) => a.index - b.index)) {
    if (m.index > cursor) parts.push(text.slice(cursor, m.index));
    parts.push({ text: text.slice(m.index, m.index + m.length), page: m.page });
    cursor = m.index + m.length;
  }
  if (cursor < text.length) parts.push(text.slice(cursor));
  return parts;
}
const linkedPages = (rich: RichText) => new Set(typeof rich === "string" ? [] : rich.flatMap((part) => (typeof part === "string" ? [] : [part.page])));

/** A heading must not repeat the page's H1; use the fallback when it would. */
const notTitle = (p: InventoryPage, heading: string, fallback: string) => (heading.toLowerCase() === p.seo.h1.toLowerCase() ? fallback : heading);

interface Applies {
  pages?: number[];
  clusters?: string[];
  categories?: string[];
}

/** How many pages a set may reach through a category-level match alone. */
const CATEGORY_REUSE_CAP = 6;
/** How many pages a storyline may reach through a cluster match when the page is not one of its steps. */
const CLUSTER_REUSE_CAP = 10;
const categoryUses = new Map<string, number>();
const clusterUses = new Map<string, number>();
/** Lifted for a page that would otherwise fall below MIN_STORY_SECTIONS. */
let capsLifted = false;
/** Sets excluded for the page being composed, because they repeat a more relevant sequence. */
const excludedSets = new Set<string>();

/**
 * How closely a set fits a page: 3 when it names the page (as a step or in `pages`), 2 when it matches
 * the page's primary cluster, 1 for another of its clusters, 0 for its category.
 */
function relevance(set: Applies & { items?: Array<{ page: number }> }, p: InventoryPage): number {
  if (set.pages?.includes(p.number) || set.items?.some((i) => i.page === p.number)) return 3;
  if (set.clusters?.includes(p.clusters[0])) return 2;
  if (p.clusters.some((c) => set.clusters?.includes(c))) return 1;
  return 0;
}
/** Which set a composed fixed section came from, and how relevant it is to the page. */
const setOf = new WeakMap<object, { id: string; relevance: number }>();
const tag = <S extends ContentSection>(section: S, set: Applies & { id: string; items?: Array<{ page: number }> }, p: InventoryPage): S => {
  setOf.set(section, { id: set.id, relevance: relevance(set, p) });
  return section;
};

/**
 * First set that names the page, then one sharing its first matching cluster, then — while it has
 * category reuse left — one for its category. The cap keeps a single storyline from repeating
 * across dozens of pages that are only loosely related to it.
 */
function pick<T extends Applies & { id: string; items?: Array<{ page: number }> }>(sets: T[], p: InventoryPage): T | undefined {
  sets = sets.filter((s) => !excludedSets.has(s.id));
  const named = sets.find((s) => s.pages?.includes(p.number) || s.items?.some((i) => i.page === p.number));
  if (named) return named;
  // A cluster match reaches a page that is not a step of the set: capped for storylines, so one
  // sequence does not appear across dozens of loosely related pages.
  const byCluster = p.clusters
    .flatMap((c) => sets.filter((s) => s.clusters?.includes(c)))
    .find((s) => !s.items || capsLifted || (clusterUses.get(s.id) ?? 0) < CLUSTER_REUSE_CAP);
  if (byCluster) {
    if (byCluster.items) clusterUses.set(byCluster.id, (clusterUses.get(byCluster.id) ?? 0) + 1);
    return byCluster;
  }
  // Pages that need verification take no category-level sets: a loose match would imply the capability.
  if (p.needsVerification) return undefined;
  const byCategory = sets.find((s) => s.categories?.includes(p.category) && (capsLifted || (categoryUses.get(s.id) ?? 0) < CATEGORY_REUSE_CAP));
  if (byCategory) categoryUses.set(byCategory.id, (categoryUses.get(byCategory.id) ?? 0) + 1);
  return byCategory;
}

/** Canonical, non-conversion pages that share a cluster with p, best relationships first. */
function siblings(p: InventoryPage): number[] {
  const members = new Set<number>();
  for (const id of p.clusters) for (const m of clusterById.get(id)!.members) members.add(m);
  const ordered = [...p.related, ...p.mentions, ...members];
  return [...new Set(ordered)].filter((n) => n !== p.number && live(n) && page(n).pageType !== "conversion" && page(n).pageType !== "faq" && page(n).role !== "home");
}

const primaryCluster = (p: InventoryPage) => clusterById.get(p.clusters[0]);

/** The best few candidates rotated by page number, so pages sharing a cluster lead with different pages. */
function rotate(pool: number[], p: InventoryPage, window = 4): number[] {
  const head = pool.slice(0, window);
  const shift = head.length ? p.number % head.length : 0;
  return [...head.slice(shift), ...head.slice(0, shift), ...pool.slice(window)];
}

function parentAction(p: InventoryPage): ActionRef | null {
  const parent = p.breadcrumb.length > 2 ? p.breadcrumb[p.breadcrumb.length - 2] : null;
  if (!parent || parent.path === "/") return null;
  return { kind: "route", path: parent.path, label: `More in ${parent.label}` };
}

/* ---------------------------------------------------------------------------------------------- */
/* Builders — one per section kind. Each returns null when it has no sourced material.              */
/* ---------------------------------------------------------------------------------------------- */

interface Context {
  p: InventoryPage;
  hero: VisualRef | null;
  /** Pages already featured on this page, so sections do not repeat each other. */
  used: Set<number>;
  /** Figures already shown below the hero, so no figure appears twice (a story may explore the hero's figure). */
  diagrams: Set<string>;
  kinds: SectionKind[];
}

function storyline(kind: Storyline["kind"], ctx: Context) {
  const set = pick(STORYLINES.filter((s) => s.kind === kind), ctx.p);
  if (!set) return null;
  const items = set.items
    .map((item) => ({ ...item, body: statement(item.page) }))
    .filter((item): item is typeof item & { body: string } => !!item.body);
  if (items.length < 3) return null;
  items.forEach((item) => ctx.used.add(item.page));
  return { set, items };
}

const builders: Partial<Record<SectionKind, (ctx: Context) => ContentSection | null>> = {
  hero: ({ p, hero, used }) => {
    const definitionFirst = pageTypeById.get(p.pageType)!.recipes.find((r) => r.id === p.recipe)?.sections[0] === "definition";
    const actions: ActionRef[] = [{ kind: "global", cta: "primary" }];
    const parent = p.pageType === "conversion" ? ({ kind: "route", path: "/platform", label: "Explore the platform" } as const) : parentAction(p);
    if (parent) actions.push(parent);
    // A page that needs verification leads with the statement of its verified context page.
    const verifiedAnswer = p.needsVerification && !!verifiedContextFor(p.number)?.answer;
    const context = p.needsVerification && !verifiedAnswer && p.contextPage && statement(p.contextPage) ? p.contextPage : null;
    if (context) used.add(context);
    const showVisual = !!hero && (context !== null || !definitionFirst);
    return {
      kind: "hero",
      id: "hero",
      layout: showVisual ? "split" : "centered",
      eyebrow: p.pageType === "faq" ? "FAQ" : categoryById.get(p.category)!.label,
      lede: context ? statement(context)! : definitionFirst ? undefined : (paragraph(p.number) ?? undefined),
      context: context ? { page: context } : undefined,
      visual: showVisual ? hero! : undefined,
      actions,
      sources: pdf(p.number, ...(context ? [context] : [])),
    };
  },

  definition: ({ p, used }) => {
    const term = p.pageType === "faq" ? p.title : p.title.replace(/^What Is (a |an )?/, "").replace(/\?$/, "");
    const eyebrow = p.pageType === "faq" ? "Short answer" : "Definition";
    const verified = p.needsVerification ? verifiedContextFor(p.number)?.answer : undefined;
    if (verified) {
      // Each sentence is a verified page's own statement, linked to that page by a phrase in it.
      const [first, ...rest] = verified.map((part) => linkPhrase(statement(part.page)!, part.link, part.page));
      verified.forEach((part) => used.add(part.page));
      const detail = rest.flatMap((sentence, i) => (i ? [" ", ...(sentence as Array<string | { text: string; page: number }>)] : (sentence as Array<string | { text: string; page: number }>)));
      return { kind: "definition", id: "definition", eyebrow, term, answer: first, detail: detail.length ? detail : undefined, sources: pdf(...verified.map((part) => part.page)) };
    }
    const text = paragraph(p.number);
    if (!text) return null;
    const [answer, ...rest] = sentences(text);
    const linkedAnswer = autolink(answer, p, 2);
    const detail = rest.length ? autolink(rest.join(" "), p, 3 - linkedPages(linkedAnswer).size, linkedPages(linkedAnswer)) : undefined;
    return { kind: "definition", id: "definition", eyebrow, term, answer: linkedAnswer, detail, sources: pdf(p.number) };
  },

  statement: ({ p, used }) => {
    const next = p.needsVerification ? verifiedContextFor(p.number)?.next : undefined;
    if (next && statement(next) && !used.has(next)) {
      used.add(next);
      return { kind: "statement", id: "statement", eyebrow: "Next step", text: statement(next)!, link: { page: next }, sources: pdf(next) };
    }
    const cluster = primaryCluster(p);
    if (cluster && cluster.primary !== p.number && statement(cluster.primary) && !used.has(cluster.primary)) {
      used.add(cluster.primary);
      return { kind: "statement", id: "statement", eyebrow: safe(cluster.label, categoryLabel(p)), text: statement(cluster.primary)!, link: { page: cluster.primary }, sources: pdf(cluster.primary) };
    }
    const root = sectionById.get(p.section)!.rootPage;
    if (root && root !== p.number && statement(root) && !used.has(root)) {
      used.add(root);
      return { kind: "statement", id: "statement", eyebrow: sectionById.get(p.section)!.label, text: statement(root)!, link: { page: root }, sources: pdf(root) };
    }
    const index = INDEX_PAGES.find((i) => i.category === p.category);
    if (index && index.ledeSource.every((s) => s.kind === "pdf" && !used.has(s.page))) {
      return { kind: "statement", id: "statement", eyebrow: index.title, text: index.lede, sources: index.ledeSource };
    }
    return null;
  },

  layers: (ctx) => {
    const found = storyline("layers", ctx);
    if (!found) return null;
    return tag({
      kind: "layers",
      id: "layers",
      eyebrow: sectionById.get(ctx.p.section)!.label,
      heading: found.set.heading,
      intro: found.set.intro,
      layers: found.items.map((i) => ({ label: i.label, body: i.body, page: i.page, current: i.page === ctx.p.number })),
      sources: pdf(...found.set.sourcePages, ...found.items.map((i) => i.page)),
    } as ContentSection, found.set, ctx.p);
  },

  workflow: (ctx) => {
    const found = storyline("workflow", ctx);
    if (found) {
      return tag({
        kind: "workflow",
        id: "workflow",
        eyebrow: "How it works",
        heading: found.set.heading,
        intro: found.set.intro,
        stages: found.items.map((i) => ({ label: i.label, body: i.body, page: i.page, current: i.page === ctx.p.number })),
        sources: pdf(...found.set.sourcePages, ...found.items.map((i) => i.page)),
      } as ContentSection, found.set, ctx.p);
    }
    // Use cases and other pages that name capabilities: the capabilities their own paragraph mentions.
    const mentioned = ctx.p.mentions.filter((n) => statement(n) && page(n).pageType !== "conversion").slice(0, 4);
    if (mentioned.length < 3) return null;
    mentioned.forEach((n) => ctx.used.add(n));
    return {
      kind: "workflow",
      id: "workflow",
      eyebrow: "Named in this page",
      heading: `What ${shortTitle(ctx.p.number).replace(/^The /, "")} ${ctx.p.pageType === "use-case" ? "work with" : "brings together"}`,
      stages: mentioned.map((n) => ({ label: page(n).title, body: statement(n)!, page: n })),
      sources: pdf(ctx.p.number, ...mentioned),
    };
  },

  process: (ctx) => {
    const found = storyline("process", ctx);
    if (!found) return null;
    return tag({
      kind: "process",
      id: "process",
      eyebrow: "Step by step",
      heading: found.set.heading,
      intro: found.set.intro,
      steps: found.items.map((i) => ({ heading: i.label, body: i.body, page: i.page, current: i.page === ctx.p.number })),
      sources: pdf(...found.set.sourcePages, ...found.items.map((i) => i.page)),
    } as ContentSection, found.set, ctx.p);
  },

  timeline: (ctx) => {
    const found = storyline("timeline", ctx);
    if (!found) return null;
    return tag({
      kind: "timeline",
      id: "timeline",
      eyebrow: "Over time",
      heading: found.set.heading,
      intro: found.set.intro,
      items: found.items.map((i) => ({ label: i.label, body: i.body, page: i.page, current: i.page === ctx.p.number })),
      sources: pdf(...found.set.sourcePages, ...found.items.map((i) => i.page)),
    } as ContentSection, found.set, ctx.p);
  },

  story: (ctx) => {
    const found = storyline("story", ctx);
    if (!found || !found.set.diagram || (ctx.diagrams.has(found.set.diagram) && found.set.diagram !== ctx.hero?.diagram)) return null;
    ctx.diagrams.add(found.set.diagram);
    return tag({
      kind: "story",
      id: "story",
      eyebrow: categoryById.get(ctx.p.category)!.label,
      heading: found.set.heading,
      visual: { diagram: found.set.diagram },
      steps: found.items.map((i) => ({ heading: i.label, body: i.body, page: i.page, focus: i.focus, current: i.page === ctx.p.number })),
      sources: pdf(...found.set.sourcePages, ...found.items.map((i) => i.page)),
    } as ContentSection, found.set, ctx.p);
  },

  split: (ctx) => {
    const { p, used } = ctx;
    const cluster = primaryCluster(p);
    const pool = rotate(siblings(p).filter((n) => statement(n) && !used.has(n)), p);
    const lead = cluster && cluster.primary !== p.number && pool.includes(cluster.primary) && p.number % 2 === 0 ? cluster.primary : pool[0];
    if (!lead) return null;
    used.add(lead);
    const points = pool.filter((n) => n !== lead).slice(0, 4);
    points.forEach((n) => used.add(n));
    const candidate = secondaryVisual(p, ctx.hero);
    const visual = candidate && !ctx.diagrams.has(candidate.diagram) ? candidate : null;
    if (visual) ctx.diagrams.add(visual.diagram);
    return {
      kind: "split",
      id: "split",
      eyebrow: safe(cluster?.label, categoryLabel(p)),
      heading: page(lead).title,
      body: [statement(lead)!],
      points: points.map((n) => page(n).title),
      links: [{ page: lead, label: `Read about ${page(lead).title}` }],
      visual: visual ?? undefined,
      mediaSide: ctx.kinds.filter((k) => k === "split").length % 2 === 0 ? "end" : "start",
      sources: pdf(lead, ...points),
    };
  },

  editorial: (ctx) => {
    const { p, used } = ctx;
    const merged = p.needsVerification ? [] : p.mergedSources.filter((n) => !byNumber.get(n)!.needsVerification);
    const pool = rotate(siblings(p).filter((n) => statement(n) && !used.has(n)), p, 5).slice(0, 3);
    if (pool.length < 2 && !merged.length) return null;
    pool.forEach((n) => used.add(n));
    const second = ctx.kinds.includes("editorial");
    return {
      kind: "editorial",
      id: second ? "editorial-more" : "editorial",
      eyebrow: second ? "Further reading" : "In context",
      heading: second ? "Related perspectives" : notTitle(p, safe(primaryCluster(p)?.label, `More on ${categoryLabel(p)}`), `More on ${categoryLabel(p)}`),
      body: [
        ...merged.map((n) => byNumber.get(n)!.sourceText),
        ...pool.map((n) => ({ lead: page(n).title, text: statement(n)!, page: n })),
      ],
      sources: [...pdf(...merged, ...pool), EDITORIAL],
    };
  },

  capabilities: (ctx) => {
    const { p, used } = ctx;
    const topics = p.needsVerification ? verifiedContextFor(p.number)?.topics : undefined;
    if (topics) {
      const items = topics.pages.filter((n) => statement(n) && !used.has(n)).slice(0, 6);
      if (items.length >= 3) {
        items.forEach((n) => used.add(n));
        return {
          kind: "capabilities",
          id: "capabilities",
          eyebrow: categoryLabel(p),
          heading: topics.heading,
          items: items.map((n) => ({ heading: page(n).title, body: statement(n)!, page: n })),
          sources: [...pdf(...items), EDITORIAL],
        };
      }
    }
    const pool = rotate(siblings(p).filter((n) => statement(n) && !used.has(n)), p, 8).slice(0, 6);
    if (pool.length < 3) return null;
    pool.forEach((n) => used.add(n));
    const cluster = primaryCluster(p);
    return {
      kind: "capabilities",
      id: "capabilities",
      eyebrow: safe(cluster?.label, "Related capabilities"),
      heading: `More in ${categoryLabel(p)}`,
      items: pool.map((n) => ({ heading: page(n).title, body: statement(n)!, page: n })),
      sources: [...pdf(...pool), EDITORIAL],
    };
  },

  comparison: ({ p }) => {
    const set = pick(COMPARISONS, p);
    if (!set) return null;
    return { kind: "comparison", id: "comparison", eyebrow: "Compared", heading: set.heading, intro: set.intro, columns: set.columns, rows: set.rows, emphasis: set.emphasis, sources: pdf(...set.sourcePages) };
  },

  "before-after": ({ p }) => {
    const set = pick(BEFORE_AFTER, p);
    if (!set) return null;
    return {
      kind: "before-after",
      id: "before-after",
      eyebrow: "The difference",
      heading: set.heading,
      intro: set.intro,
      beforeLabel: set.beforeLabel,
      afterLabel: set.afterLabel,
      before: set.before,
      after: set.after,
      sources: pdf(...set.sourcePages),
    };
  },

  media: (ctx) => {
    const visual = [secondaryVisual(ctx.p, ctx.hero), ctx.hero].find((v): v is VisualRef => !!v && !ctx.diagrams.has(v.diagram));
    if (!visual) return null;
    ctx.diagrams.add(visual.diagram);
    return { kind: "media", id: "media", eyebrow: safe(primaryCluster(ctx.p)?.label, categoryLabel(ctx.p)), visual, sources: [EDITORIAL] };
  },

  alternating: (ctx) => {
    const { p, used } = ctx;
    const seen = new Set<string | undefined>([ctx.hero?.diagram, ...ctx.diagrams]);
    const rows: Array<{ n: number; visual: VisualRef }> = [];
    for (const n of [...p.mentions, ...siblings(p)]) {
      if (rows.length === 3) break;
      if (used.has(n) || !statement(n) || page(n).pageType === "conversion" || page(n).pageType === "faq") continue;
      const visual = heroVisual(page(n));
      if (!visual || seen.has(visual.diagram)) continue;
      seen.add(visual.diagram);
      rows.push({ n, visual });
    }
    if (rows.length < 2) return null;
    rows.forEach((r) => used.add(r.n));
    rows.forEach((r) => ctx.diagrams.add(r.visual.diagram));
    return {
      kind: "alternating",
      id: "alternating",
      eyebrow: p.pageType === "use-case" ? "Capabilities for this team" : "How it comes together",
      heading: p.pageType === "use-case" ? `Where GetSibu fits for ${shortTitle(p.number).toLowerCase()}` : "The capabilities behind it",
      rows: rows.map((r) => ({ heading: page(r.n).title, body: statement(r.n)!, visual: r.visual, page: r.n })),
      sources: [...pdf(p.number, ...rows.map((r) => r.n)), EDITORIAL],
    };
  },

  matrix: ({ p }) => {
    const set = pick(MATRICES, p);
    if (!set) return null;
    const rows = set.rows
      .filter((row) => live(row.page))
      .map((row) => ({ label: row.label, page: row.page, current: row.page === p.number, cells: row.cells.map((c) => c ?? statement(row.page)) }))
      .filter((row) => row.cells.every((c) => c !== null)) as Array<{ label: string; page: number; current: boolean; cells: string[] }>;
    if (rows.length < 3) return null;
    return tag({ kind: "matrix", id: "matrix", eyebrow: "At a glance", heading: set.heading, intro: set.intro, columns: set.columns, rows, sources: pdf(...set.sourcePages, ...rows.map((r) => r.page)) } as ContentSection, { ...set, items: set.rows }, p);
  },

  plans: ({ p }) => {
    // Plan names are themselves a claim: the section appears only for plans that are published.
    const planPages = [342, 343, 344].filter((n) => n !== p.number && live(n));
    return planPages.length >= 2 ? { kind: "plans", id: "plans", eyebrow: "Plans", heading: "GetSibu plans", planPages, sources: pdf(341, ...planPages) } : null;
  },

  checklist: ({ p, used }) => {
    if (p.needsVerification) {
      // The whole topic, this page included and marked: titles and links only.
      const topic = p.clusters
        .map((id) => clusterById.get(id)!)
        .map((cluster) => ({ cluster, items: [...new Set([p.number, ...cluster.members])].filter((n) => byNumber.get(n)!.status === "canonical" && live(n) && page(n).pageType !== "conversion") }))
        .sort((a, b) => b.items.length - a.items.length)[0];
      if (topic && topic.items.length >= 3) {
        const items = [p.number, ...topic.items.filter((n) => n !== p.number)].slice(0, 8).sort((a, b) => a - b);
        items.forEach((n) => used.add(n));
        return {
          kind: "checklist",
          id: "checklist",
          eyebrow: "In this topic",
          heading: notTitle(p, safe(topic.cluster.label, `In ${categoryLabel(p)}`), `In ${categoryLabel(p)}`),
          items: items.map((n) => ({ page: n, current: n === p.number })),
          sources: [...pdf(...items), EDITORIAL],
        };
      }
    }
    const best = p.clusters
      .map((id) => clusterById.get(id)!)
      .map((cluster) => ({ cluster, items: cluster.members.filter((n) => n !== p.number && page(n).status === "canonical" && publishable(n) && !["faq", "conversion", "resource"].includes(page(n).pageType)) }))
      .sort((a, b) => b.items.length - a.items.length)[0];
    if (!best || best.items.length < 3) return null;
    const items = best.items.slice(0, 8);
    items.forEach((n) => used.add(n));
    return {
      kind: "checklist",
      id: "checklist",
      eyebrow: "Covered here",
      heading: safe(best.cluster.label, `In ${categoryLabel(p)}`),
      items: items.map((n) => ({ label: page(n).title, page: n })),
      sources: [...pdf(...items), EDITORIAL],
    };
  },

  "event-list": ({ p }) => {
    const events = [268, 269, 270, 271, 272, 257].filter((n) => n !== p.number && statement(n));
    if (events.length < 2) return null;
    return { kind: "event-list", id: "events", eyebrow: "Events", heading: "Webhook events", events: events.map((n) => ({ name: page(n).title.replace(/ Webhook$/, ""), body: statement(n)!, page: n })), sources: pdf(...events) };
  },

  faq: ({ p, used }) => {
    const fromClusters = p.clusters.flatMap((id) => clusterById.get(id)!.members).filter((n) => page(n).pageType === "faq");
    const curated = p.needsVerification ? (verifiedContextFor(p.number)?.faqs ?? []) : [];
    const faqs = [...new Set([...curated, ...p.relatedFaqs, ...fromClusters])].filter((n) => n !== p.number && publishable(n) && !used.has(n)).slice(0, 4);
    if (!faqs.length) return null;
    return {
      kind: "faq",
      id: "faq",
      eyebrow: "FAQ",
      heading: "Common questions",
      items: faqs.map((n) => ({ question: page(n).title, answer: autolink(page(n).sourceText, page(n), 2, new Set([p.number])), page: n })),
      sources: pdf(...faqs),
    };
  },

  related: ({ p, used }) => {
    // Publishable pages first, pages not yet featured before those that are; a page that needs
    // verification also draws on its context page's related pages.
    const backfill = p.contextPage ? page(p.contextPage).related : [];
    // A section root lists its own pages in its hub groups; its related links point outside the section.
    const children = new Set(p.childGroups.flatMap((g) => g.pages));
    const pool = [...new Set([...p.related, ...backfill])].filter((n) => n !== p.number && live(n) && !children.has(n));
    const rank = (n: number) => (publishable(n) ? 0 : 2) + (used.has(n) ? 1 : 0);
    const ordered = pool.map((n, i) => ({ n, i })).sort((a, b) => rank(a.n) - rank(b.n) || a.i - b.i).map((x) => x.n);
    const pages = ordered.slice(0, ordered.length >= 6 ? 6 : 3);
    if (!pages.length) return null;
    return { kind: "related", id: "related", eyebrow: "Related", heading: "Related topics", pages, variant: "cards", density: "dense", sources: [EDITORIAL] };
  },

  cta: ({ p }) => {
    let conversion = p.cta.contextual ? Number(p.cta.contextual.target.replace("page:", "")) : (CATEGORY_CONVERSION[p.category] ?? 391);
    if (conversion === p.number) conversion = p.number === 391 ? 395 : 391;
    const target = page(conversion);
    // The heading names and links the conversion page; the only button is the primary CTA.
    const actions: ActionRef[] = [{ kind: "global", cta: "primary" }];
    return {
      kind: "cta",
      id: "cta",
      heading: target.title,
      body: paragraph(conversion) ?? undefined,
      conversionPage: conversion,
      surface: "inverse",
      actions,
      sources: pdf(conversion),
    };
  },
};

/* ---------------------------------------------------------------------------------------------- */
/* Composition                                                                                      */
/* ---------------------------------------------------------------------------------------------- */

const DENSE = new Set<SectionKind>(["workflow", "process", "timeline", "matrix", "checklist", "event-list", "capabilities", "comparison", "faq"]);
/** Tried when a recipe's own sections lack sourced material; rotated per page so neighbours differ. */
const FALLBACKS: SectionKind[] = ["workflow", "process", "timeline", "layers", "story", "matrix", "comparison", "before-after", "capabilities", "editorial", "alternating", "media", "checklist"];
const FRAME = new Set<SectionKind>(["hero", "faq", "related", "cta"]);
const MIN_STORY_SECTIONS = 3;
/** Section shapes. Neighbouring story sections should not share one, so a page never reads as three lists in a row. */
const FAMILY: Partial<Record<SectionKind, "sequence" | "grid" | "prose">> = {
  workflow: "sequence", process: "sequence", timeline: "sequence", story: "sequence",
  capabilities: "grid", checklist: "grid", matrix: "grid", comparison: "grid", layers: "grid", plans: "grid", "event-list": "grid",
  split: "prose", editorial: "prose", media: "prose", alternating: "prose", statement: "prose", "before-after": "prose", definition: "prose",
};
const MAX_STORY_SECTIONS = 5;

const dropped = new Set<string>();

/**
 * Composes a page twice. The first pass finds the pages its fixed sequences (storylines, matrices)
 * will show; the second reserves them, so pool-based sections (split, editorial, capabilities,
 * alternating, checklist, statement, FAQ) choose other pages. Reuse counters are restored between
 * passes. A final pass removes any statement still shown twice.
 */
function compose(p: InventoryPage): ContentSection[] {
  const counters = [new Map(categoryUses), new Map(clusterUses)];
  const restore = () => {
    categoryUses.clear();
    counters[0].forEach((v, k) => categoryUses.set(k, v));
    clusterUses.clear();
    counters[1].forEach((v, k) => clusterUses.set(k, v));
  };
  let reserved = new Set<number>();
  type Attempt = { reserved: Set<number>; excluded: Set<string>; story: number; repeats: number };
  let best: Attempt | null = null;
  const better = (a: Attempt, b: Attempt) =>
    (a.story >= MIN_STORY_SECTIONS ? 1 : 0) - (b.story >= MIN_STORY_SECTIONS ? 1 : 0) || b.repeats - a.repeats || a.story - b.story;
  // After an exclusion, one more pass is needed to reserve the pages of the sequences that remain.
  let settled = false;
  excludedSets.clear();
  // Each pass reserves the pages fixed sequences show, or — when two sequences still share steps —
  // excludes the one less relevant to this page, so the page keeps the sequence about its own topic.
  for (let pass = 0; pass < 8; pass++) {
    if (pass > 0) restore();
    const raw = composeOnce(p, reserved);
    const result = withoutRepeats(p, raw);
    const story = result.sections.filter((section) => !FRAME.has(section.kind)).length;
    const attempt: Attempt = { reserved: new Set(reserved), excluded: new Set(excludedSets), story, repeats: countRepeats(result.sections) };
    if (!best || better(attempt, best) > 0) best = attempt;
    const loser = result.overlaps
      .map(([earlier, later]) => [setOf.get(earlier), setOf.get(later)] as const)
      .map(([a, b]) => (a && b ? (b.relevance <= a.relevance ? b : a) : (b ?? a)))
      .find((set) => set && !excludedSets.has(set.id));
    if (story >= MIN_STORY_SECTIONS && loser) {
      excludedSets.add(loser.id);
      reserved = new Set();
      settled = false;
      continue;
    }
    const next = new Set([...reserved, ...fixedPages(raw)]);
    if (settled && (attempt.repeats === 0 || story < MIN_STORY_SECTIONS || next.size === reserved.size)) break;
    settled = true;
    reserved = next;
  }
  // Recompose the best attempt so reuse counters match what the page actually shows.
  restore();
  excludedSets.clear();
  best!.excluded.forEach((id) => excludedSets.add(id));
  const { sections } = withoutRepeats(p, composeOnce(p, best!.reserved));
  excludedSets.clear();
  return applyRhythm(sections);
}

const FIXED = new Set<SectionKind>(["layers", "workflow", "process", "timeline", "story", "matrix"]);

/** Statements shown more than once on a page (a sequence's own "This page" step excepted). */
function countRepeats(sections: ContentSection[]): number {
  const seen = new Set<string>();
  let repeats = 0;
  const visit = (value: unknown, current: boolean): void => {
    if (Array.isArray(value)) return value.forEach((v) => visit(v, current));
    if (!value || typeof value !== "object") return;
    const record = value as Record<string, unknown>;
    if (typeof record.page === "number" && typeof record.text === "string" && Object.keys(record).length === 2) return;
    const isCurrent = current || record.current === true;
    for (const key of ["lede", "text", "answer", "body", "detail"]) {
      const v = record[key];
      const text = typeof v === "string" ? v : Array.isArray(v) && v.every((x) => typeof x === "string" || (x && typeof x === "object" && "page" in x)) ? plain(v as RichText) : null;
      if (!text || isCurrent) continue;
      if (seen.has(text)) repeats++;
      else seen.add(text);
    }
    for (const [key, v] of Object.entries(record)) if (typeof v === "object" && key !== "sources") visit(v, key === "context" ? true : isCurrent);
  };
  sections.filter((section) => section.kind !== "cta").forEach((section) => visit(section, false));
  return repeats;
}

/** Pages whose statements a page's fixed sections show. */
function fixedPages(sections: ContentSection[]): Set<number> {
  const pages = new Set<number>();
  for (const section of sections) {
    if (!FIXED.has(section.kind)) continue;
    for (const match of JSON.stringify(section).matchAll(/"page":(\d+)/g)) pages.add(Number(match[1]));
  }
  return pages;
}

/** Removes statements already shown higher on the page; drops sections left too small to stand. */
function withoutRepeats(p: InventoryPage, sections: ContentSection[]): { sections: ContentSection[]; overlaps: Array<[ContentSection, ContentSection]> } {
  const shown = new Set<number>();
  /** The fixed section that first showed each page. */
  const shownBy = new Map<number, ContentSection>();
  const overlaps: Array<[ContentSection, ContentSection]> = [];
  const shownText = new Set<string>();
  // A sequence that overlaps an earlier one is dropped only while the page keeps enough story sections.
  let storyLeft = sections.filter((section) => !FRAME.has(section.kind)).length;
  const spare = () => storyLeft > MIN_STORY_SECTIONS;
  const out: ContentSection[] = [];
  // The page's own step in a sequence ("This page") may restate its lede; everything else is shown once.
  const fresh = <T extends { page?: number; current?: boolean; body?: string; text?: string }>(item: T) =>
    item.current || ((item.page === undefined || !shown.has(item.page)) && !shownText.has(item.body ?? item.text ?? ""));
  for (const section of sections) {
    let keep: ContentSection | null = section;
    switch (section.kind) {
      case "hero":
        if (section.context) shown.add(section.context.page);
        if (section.lede) shownText.add(section.lede);
        break;
      case "definition":
        shownText.add(plain(section.answer));
        if (section.detail) shownText.add(plain(section.detail));
        break;
      case "story": {
        const steps = section.steps.filter(fresh);
        if (steps.length >= 3) keep = { ...section, steps };
        else if (steps.length < section.steps.length && spare()) keep = null;
        else if (steps.length < section.steps.length && spare()) keep = null;
        break;
      }
      case "layers": {
        const layers = section.layers.filter(fresh);
        if (layers.length >= 3) keep = { ...section, layers };
        else if (layers.length < section.layers.length && spare()) keep = null;
        break;
      }
      case "workflow": {
        const stages = section.stages.filter(fresh);
        if (stages.length >= 3) keep = { ...section, stages };
        else if (stages.length < section.stages.length && spare()) keep = null;
        break;
      }
      case "process": {
        const steps = section.steps.filter(fresh);
        if (steps.length >= 3) keep = { ...section, steps };
        break;
      }
      case "timeline": {
        const items = section.items.filter(fresh);
        if (items.length >= 3) keep = { ...section, items };
        else if (items.length < section.items.length && spare()) keep = null;
        break;
      }
      case "capabilities": {
        const items = section.items.filter(fresh);
        keep = items.length >= 2 ? { ...section, items } : spare() ? null : section;
        break;
      }
      case "alternating": {
        const rows = section.rows.filter(fresh);
        keep = rows.length >= 2 ? { ...section, rows } : spare() ? null : section;
        break;
      }
      case "editorial": {
        const body = section.body.filter((b) => typeof b === "string" || fresh(b));
        keep = body.length ? { ...section, body } : spare() ? null : section;
        break;
      }
      case "split": {
        const lead = section.links?.[0]?.page;
        keep = lead !== undefined && shown.has(lead) && spare() ? null : section;
        break;
      }
      case "statement":
        keep = ((section.link && shown.has(section.link.page)) || shownText.has(section.text)) && spare() ? null : section;
        break;
      case "faq": {
        const items = section.items.filter((item) => (item.page === undefined || !shown.has(item.page)) && !shownText.has(plain(item.answer)));
        keep = items.length ? { ...section, items } : null;
        break;
      }
      default:
        break;
    }
    if (!keep) {
      if (!FRAME.has(section.kind)) storyLeft -= 1;
      dropped.add(`${p.number} ${section.id} (repeated statements)`);
      continue;
    }
    // A fixed sequence kept whole although it repeats an earlier one: report the pair.
    if (FIXED.has(section.kind) && keep === section) {
      const items = ["layers", "stages", "steps", "items", "rows"].flatMap((key) => ((section as unknown as Record<string, unknown>)[key] as Array<{ page?: number; current?: boolean }> | undefined) ?? []);
      const earlier = items.filter((item) => !item.current && item.page !== undefined).map((item) => shownBy.get(item.page!)).find(Boolean);
      if (earlier) overlaps.push([earlier, section]);
    }
    if (FIXED.has(keep.kind)) for (const match of JSON.stringify(keep).matchAll(/"page":(\d+)/g)) if (!shownBy.has(Number(match[1]))) shownBy.set(Number(match[1]), section);
    if (keep.kind !== "related" && keep.kind !== "cta" && keep.kind !== "checklist") {
      for (const match of JSON.stringify(keep).matchAll(/"page":(\d+)/g)) shown.add(Number(match[1]));
      if (keep.kind === "statement" && keep.link) shown.add(keep.link.page);
      for (const match of JSON.stringify(keep).matchAll(/"(?:body|text|answer)":"((?:[^"\\]|\\.)*)"/g)) shownText.add(JSON.parse(`"${match[1]}"`));
    }
    out.push(keep);
  }
  // Removing a section can leave two of a kind, or two muted bands, side by side: re-check rhythm.
  return { sections: out.filter((section, i) => i === 0 || section.kind !== out[i - 1].kind), overlaps };
}

function composeOnce(p: InventoryPage, reserved: Set<number>): ContentSection[] {
  const type = pageTypeById.get(p.pageType)!;
  const recipe = type.recipes.find((r) => r.id === p.recipe)!;
  const hero = heroVisual(p);
  // A named tool in a connector figure asserts the integration; keep it generic until confirmed.
  if (hero?.label && p.needsVerification) delete hero.label;
  const ctx: Context = { p, hero, used: new Set([p.number, ...reserved]), diagrams: new Set(hero ? [hero.diagram] : []), kinds: [] };

  // Pages that need verification cannot tell their own story: they show the verified topics around
  // them, where they sit in their topic, and where to go next.
  const unverified: SectionKind[] = p.needsVerification ? ["workflow", "capabilities", "checklist", "statement"] : [];
  const plan: SectionKind[] = ["hero", ...recipe.sections.filter((k) => !FRAME.has(k)), ...unverified];
  const sections: ContentSection[] = [];
  // A section root already lists every page in its section ("Explore …" groups): no topic list of its own.
  const listsChildren = p.role === "section-root" && p.childGroups.length > 0;
  const add = (kind: SectionKind) => {
    if (kind !== "editorial" && ctx.kinds.includes(kind)) return false;
    if (kind === "checklist" && listsChildren) return false;
    const section = builders[kind]?.(ctx);
    if (!section) return false;
    const { sources: _sources, ...copy } = section;
    if (kind !== "hero" && "heading" in section && typeof section.heading === "string" && section.heading.toLowerCase() === p.seo.h1.toLowerCase()) {
      dropped.add(`${p.number} ${kind} (heading repeats the H1)`);
      return false;
    }
    // Two sections can take the same cluster label as their heading; the later one is renamed.
    if ("heading" in section && typeof section.heading === "string") {
      const taken = new Set(sections.map((s) => ("heading" in s && typeof s.heading === "string" ? s.heading.toLowerCase() : "")));
      if (taken.has(section.heading.toLowerCase())) {
        const alternatives: Partial<Record<SectionKind, string>> = {
          editorial: `More on ${categoryLabel(p)}`,
          checklist: `Also in ${categoryLabel(p)}`,
          capabilities: `More in ${categoryLabel(p)}`,
        };
        const alternative = alternatives[kind];
        if (!alternative || taken.has(alternative.toLowerCase())) {
          dropped.add(`${p.number} ${kind} (heading already used on the page)`);
          return false;
        }
        (section as { heading: string }).heading = alternative;
      }
    }
    if (blockedIn(JSON.stringify(copy))) {
      dropped.add(`${p.number} ${kind}`);
      return false;
    }
    sections.push(section);
    ctx.kinds.push(kind);
    return true;
  };

  const storyCount = () => ctx.kinds.filter((k) => !FRAME.has(k)).length;
  // Media and statements support a story but cannot carry one: at least two other story sections.
  const substantive = () => ctx.kinds.filter((k) => !FRAME.has(k) && k !== "media" && k !== "statement").length;
  const enough = () => storyCount() >= MIN_STORY_SECTIONS && substantive() >= 2;
  plan.forEach((kind) => storyCount() < MAX_STORY_SECTIONS && add(kind));
  // Every page tells its story in at least three sections between the hero and the closing links.
  // Fallbacks rotate per page and prefer a different shape from the last section added.
  const offset = p.number % 7;
  const fallbacks = [...FALLBACKS.slice(offset, 8), ...FALLBACKS.slice(0, offset), ...FALLBACKS.slice(8)];
  for (const pass of ["shape", "any", "uncapped"] as const) {
    capsLifted = pass === "uncapped";
    for (const kind of fallbacks) {
      if (enough()) break;
      const last = ctx.kinds[ctx.kinds.length - 1];
      if (pass === "shape" && FAMILY[kind] && FAMILY[kind] === FAMILY[last]) continue;
      add(kind);
    }
  }
  capsLifted = false;
  for (const kind of type.appendWhenAvailable) if (!FRAME.has(kind)) add(kind);
  arrangeStory(sections);
  add("faq");
  add("related");
  add("cta");

  return sections;
}

/**
 * Rhythm: dense sections sit on the muted band, never two muted bands in a row; layers go navy
 * unless the closing CTA (also navy) follows directly. Applied after repeats are removed.
 */
function applyRhythm(sections: ContentSection[]): ContentSection[] {
  sections.forEach((section, i) => {
    if (section.kind === "cta" || section.kind === "hero") return;
    delete section.surface;
    const previous = sections[i - 1];
    if (section.kind === "layers" && sections[i + 1]?.kind !== "cta" && previous?.surface !== "inverse") section.surface = "inverse";
    else if (DENSE.has(section.kind) && previous?.surface !== "muted") section.surface = "muted";
  });
  return sections;
}

/** Reorders story sections (after the hero) so adjacent ones differ in shape where possible. */
function arrangeStory(sections: ContentSection[]) {
  for (let i = 2; i < sections.length; i++) {
    const family = FAMILY[sections[i].kind];
    if (!family || family !== FAMILY[sections[i - 1].kind]) continue;
    const swap = sections.findIndex((candidate, j) => j > i && FAMILY[candidate.kind] !== family);
    if (swap > i) [sections[i], sections[swap]] = [sections[swap], sections[i]];
  }
}

const authored = new Set(AUTHORED_PAGES.map((c) => c.page));
const output: Record<number, { recipe: string; sections: ContentSection[] }> = {};
const kindCounts: Record<string, number> = {};
let thin = 0;
const storyCounts: Record<number, number> = {};
for (const p of canonical) {
  if (authored.has(p.number) || p.publication === "held") continue;
  const sections = compose(p);
  output[p.number] = { recipe: p.recipe, sections };
  sections.forEach((s) => (kindCounts[s.kind] = (kindCounts[s.kind] ?? 0) + 1));
  const story = sections.filter((s) => !FRAME.has(s.kind)).length;
  storyCounts[story] = (storyCounts[story] ?? 0) + 1;
  if (story < MIN_STORY_SECTIONS) thin++;
}

writeFileSync(OUTPUT, `${JSON.stringify({ pages: output }, null, 1)}\n`);
const total = Object.values(output).reduce((sum, entry) => sum + entry.sections.length, 0);
console.log(`Composed ${Object.keys(output).length} pages, ${total} sections (avg ${Object.keys(output).length ? (total / Object.keys(output).length).toFixed(1) : "—"}); story sections per page ${JSON.stringify(storyCounts)}; ${thin} below ${MIN_STORY_SECTIONS}`);
if (dropped.size) console.log(`Dropped ${dropped.size} section(s): ${[...dropped].join(", ")}`);
console.log(Object.entries(kindCounts).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k} ${v}`).join(" · "));
