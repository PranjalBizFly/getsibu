/**
 * Build the master inventory: PDF source × architecture decisions.
 *
 *   npm run inventory:build
 *
 * Output
 *   content/generated/inventory.json     every page, index hub, route, SEO field and link
 *   content/generated/search-index.json  documents for global search, grouped by content type
 *
 * The build is deterministic: same inputs, byte-identical output (except `generatedAt`).
 */
import { readFileSync, writeFileSync } from "node:fs";
import { generated } from "./pipeline-env.ts";
import type {
  BreadcrumbItem,
  CategoryDef,
  CtaRef,
  Inventory,
  InventoryIndexPage,
  InventoryPage,
  PageTypeId,
  RouteMatrixRow,
  SearchGroup,
  SearchIntent,
  SourcePage,
} from "../types/content.ts";
import { CATEGORIES, INDEX_PAGES, ROOT_LISTINGS, SUPPORTING_REDIRECTS, categoryById, sectionById } from "../content/architecture/sections.ts";
import { MERGES, RESERVED_FEATURE_SLUGS, SECTION_EXCEPTIONS, SECTION_STRIP_PATTERNS, SLUG_OVERRIDES, slugify } from "../content/architecture/url-rules.ts";
import { PAGE_TYPE_OVERRIDES, RECIPE_PINS, pageTypeById } from "../content/architecture/page-types.ts";
import { CATEGORY_CONVERSION, CLUSTERS, clusterById } from "../content/architecture/clusters.ts";
import { CLAIMS, claimById, isPublishable } from "../content/architecture/claims.ts";
import { LEXICON } from "../content/architecture/lexicon.ts";
import { FOOTER_NAV, GLOBAL_CTAS, PRIMARY_NAV } from "../content/architecture/navigation.ts";
import { ABOUT_PAGE, CONTACT_PAGE } from "../content/architecture/company-pages.ts";
import { H1_OVERRIDES } from "../content/architecture/identity.ts";
import { HELD_BY_DECISION, verifiedContextFor } from "../content/architecture/verified-context.ts";

const SOURCE_FILE = "content/source/pdf-pages.json";
const BRAND = "GetSibu";
const DESCRIPTION_MAX = 160;
const RELATED_MAX = 6;

const source: SourcePage[] = JSON.parse(readFileSync(SOURCE_FILE, "utf8"));

/* ------------------------------------------------------------------------------------------ */
/* Helpers                                                                                     */
/* ------------------------------------------------------------------------------------------ */

const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const wordPattern = (term: string) => new RegExp(`(?<![A-Za-z0-9-])${escapeRegExp(term)}(?![A-Za-z0-9-])`, "i");

const sentences = (text: string) => text.split(/(?<=[.!?])\s+(?=["A-Z])/);

/**
 * Fits a description to DESCRIPTION_MAX. A long sentence ends before an example list or purpose
 * clause (", including", "such as", "so that", "rather than", "through"), which keeps its meaning;
 * conditions ("when", "if", "only") are never cut. Only when no clause boundary fits is it truncated.
 */
function fitDescription(text: string): string {
  if (text.length <= DESCRIPTION_MAX) return text;
  // Each boundary starts a detail, example or purpose clause; dropping it leaves a true, narrower sentence.
  for (const marker of [", including ", " such as ", " so that ", " so organisations ", " rather than ", " through ", " by bringing ", ", allowing ", " without relying ", " designed specifically for ", " designed to ", " where teams "]) {
    const at = text.lastIndexOf(marker, DESCRIPTION_MAX - 1);
    if (at > 70) return `${text.slice(0, at).replace(/[,;:]$/, "")}.`;
  }
  const cut = text.slice(0, DESCRIPTION_MAX - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:]$/, "")}…`;
}

function draftDescription(text: string): string {
  const parts = sentences(text);
  let description = parts[0];
  // A very short first sentence ("Yes.") is not a usable snippet on its own: always add the next.
  // A moderately short one gains the next sentence only when both fit.
  if (parts[1] && (description.length < 40 || (description.length < 90 && description.length + 1 + parts[1].length <= DESCRIPTION_MAX))) {
    description = `${description} ${parts[1]}`;
  }
  return fitDescription(description);
}

function categoryFor(page: SourcePage): CategoryDef {
  const exception = SECTION_EXCEPTIONS[page.number];
  if (exception) return categoryById.get(exception.category)!;
  const match = CATEGORIES.find((c) => c.pdfRanges.some(([a, b]) => page.number >= a && page.number <= b));
  if (!match) throw new Error(`No category covers PDF page ${page.number}`);
  return match;
}

function searchGroupFor(type: PageTypeId, category: CategoryDef): SearchGroup {
  const byType: Partial<Record<PageTypeId, SearchGroup>> = {
    "ai-feature": "AI",
    integration: "Integrations",
    developer: "Developers",
    "access-security": "Security",
    pricing: "Pricing",
    "use-case": "Use Cases",
    resource: "Resources",
    faq: "FAQs",
  };
  return byType[type] ?? category.searchGroup;
}

/** Visual direction follows the page's type when the type belongs to a different category. */
function visualCategoryFor(type: PageTypeId, category: CategoryDef): CategoryDef {
  if (category.pageType === type) return category;
  const borrowFrom: Partial<Record<PageTypeId, string>> = {
    integration: "integrations",
    analytics: "analytics",
    migration: "migration",
    developer: "developers",
  };
  const id = borrowFrom[type];
  return id ? categoryById.get(id as CategoryDef["id"])! : category;
}

function primaryTopicFor(page: SourcePage, type: PageTypeId): string {
  const title = page.title.replace(/\?$/, "");
  if (type === "use-case") return `digital asset management for ${title.replace(/^GetSibu for /, "").toLowerCase()}`;
  return title.toLowerCase();
}

/* ------------------------------------------------------------------------------------------ */
/* Pass 1: identity, placement, URL                                                            */
/* ------------------------------------------------------------------------------------------ */

type Draft = Omit<InventoryPage, "related" | "mentions" | "relatedFeatures" | "relatedResources" | "relatedFaqs" | "relatedUseCases" | "children" | "childGroups" | "previous" | "next" | "cta" | "recipe">;

const drafts = new Map<number, Draft>();

for (const page of source) {
  const category = categoryFor(page);
  const section = sectionById.get(category.section)!;
  const merge = MERGES[page.number];
  const role: InventoryPage["role"] = page.number === 1 ? "home" : section.rootPage === page.number ? "section-root" : "leaf";

  let slug = SLUG_OVERRIDES[page.number] ?? slugify(page.title);
  for (const pattern of SECTION_STRIP_PATTERNS[section.id] ?? []) slug = slug.replace(pattern, "");
  if (section.id === "features" && RESERVED_FEATURE_SLUGS.includes(slug)) {
    throw new Error(`Page ${page.number} slug "${slug}" collides with a reserved feature hub`);
  }

  const path = role === "home" ? "/" : role === "section-root" ? section.basePath : `${section.basePath}/${slug}`;
  const type = PAGE_TYPE_OVERRIDES[page.number] ?? category.pageType;
  const pageType = pageTypeById.get(type)!;
  const visualCategory = visualCategoryFor(type, category);

  const breadcrumb: BreadcrumbItem[] = [{ label: "Home", path: "/" }];
  if (role !== "home") {
    if (section.rootPage && role === "leaf") {
      breadcrumb.push({ label: section.label, path: section.basePath });
    } else if (!section.rootPage) {
      breadcrumb.push({ label: section.label, path: section.basePath });
      if (category.hubPath !== section.basePath) breadcrumb.push({ label: category.label, path: category.hubPath });
    }
    breadcrumb.push({ label: page.title, path });
  }

  const clusters = CLUSTERS.filter((c) => c.members.includes(page.number)).map((c) => c.id);
  const angles = CLUSTERS.flatMap((c) => (c.angles?.[page.number] ? [c.angles[page.number]] : []));

  const claims = CLAIMS.filter((claim) => claim.pdfPages.includes(page.number) || claim.detect.some((term) => wordPattern(term).test(page.text))).map((c) => c.id);

  const title = page.title;
  drafts.set(page.number, {
    number: page.number,
    title,
    sourceTitle: page.sourceTitle,
    sourceText: page.text,
    pdfGroup: page.group,
    status: merge ? "merged" : "canonical",
    ...(merge ? { mergedInto: merge.into } : {}),
    mergedSources: [],
    section: section.id,
    category: category.id,
    role,
    slug: role === "home" ? "" : slug,
    path,
    aliases: [],
    parentPath: breadcrumb.length > 1 ? breadcrumb[breadcrumb.length - 2].path : null,
    breadcrumb,
    pageType: type,
    primaryTopic: primaryTopicFor(page, type),
    intent: pageType.intent as SearchIntent,
    purpose: pageType.purpose,
    keyStatement: sentences(page.text)[0],
    clusters,
    seo: {
      title: title.includes(BRAND) ? title : `${title} | ${BRAND}`,
      h1: H1_OVERRIDES[page.number]?.h1 ?? title,
      description: draftDescription(page.text),
      canonicalPath: path,
      schemaTypes: [...pageType.schemaTypes, ...(role === "home" ? [] : ["BreadcrumbList"])],
      robots: merge ? "noindex,follow" : "index,follow",
      sitemap: !merge,
    },
    searchGroup: searchGroupFor(type, category),
    visual: { ...visualCategory.visual, subject: title },
    claims,
    needsVerification: claims.some((id) => !isPublishable(claimById.get(id)!)),
    contextPage: null,
    publication: "published",
    angle: angles.length ? angles.join(" / ") : null,
  });
}

// Resolve merges: merged entries point at the canonical URL; canonical entries gain aliases.
const redirects: Inventory["redirects"] = [];
for (const [numberKey, merge] of Object.entries(MERGES)) {
  const merged = drafts.get(Number(numberKey))!;
  const canonical = drafts.get(merge.into)!;
  merged.path = canonical.path;
  merged.seo.canonicalPath = canonical.path;
  merged.clusters = canonical.clusters;
  canonical.aliases.push(merge.alias);
  canonical.mergedSources.push(merged.number);
  redirects.push({ source: merge.alias, destination: canonical.path, permanent: true });
}

for (const alias of SUPPORTING_REDIRECTS) redirects.push({ ...alias, permanent: true });

const canonicalDrafts = [...drafts.values()].filter((d) => d.status === "canonical");

/*
 * Pages that need verification never publish their own statement, including in metadata and the
 * search index. They are framed by a publishable page instead (content/architecture/verified-context.ts):
 * a curated choice, else the first publishable cluster primary, publishable cluster member, or the
 * section root. The meta description becomes "{Title}: {context statement}".
 */
const publishableCanonical = (n: number) => drafts.get(n)?.status === "canonical" && !drafts.get(n)!.needsVerification;
function contextPageFor(d: Draft): number | null {
  const curated = verifiedContextFor(d.number)?.context;
  if (curated !== undefined) return curated;
  const clusters = d.clusters.map((id) => clusterById.get(id)!);
  const primary = clusters.map((c) => c.primary).find(publishableCanonical);
  const member = clusters.flatMap((c) => c.members).find((n) => publishableCanonical(n) && drafts.get(n)!.pageType !== "faq");
  const root = sectionById.get(d.section)!.rootPage;
  return primary ?? member ?? (root !== undefined && publishableCanonical(root) ? root : null);
}
function contextDescription(title: string, context: Draft): string {
  const statement = context.keyStatement;
  // Lower-case the first word unless it is a name or acronym ("GetSibu", "AI", "OCR").
  const body = /^[A-Z][a-z]/.test(statement) && !/^GetSibu\b/.test(statement) ? statement.charAt(0).toLowerCase() + statement.slice(1) : statement;
  // A question title is followed by the statement as its own sentence.
  return fitDescription(title.endsWith("?") ? `${title} ${statement}` : `${title}: ${body}`);
}
const blockedTerms = CLAIMS.filter((c) => !isPublishable(c)).flatMap((c) => c.detect.map(wordPattern));
/** A title that states an unconfirmed claim cannot be published source-safely: the page is held. */
const titleStatesClaim = (d: Draft) => {
  if (blockedTerms.some((pattern) => pattern.test(d.title))) return true;
  const decision = HELD_BY_DECISION[d.number];
  return !!decision && !isPublishable(claimById.get(decision.claim)!);
};
for (const d of drafts.values()) {
  const owner = d.status === "merged" ? drafts.get(d.mergedInto!)! : d;
  if (!owner.needsVerification) continue;
  const context = contextPageFor(owner);
  if (context === null) throw new Error(`PDF page ${d.number} needs verification but has no publishable context page`);
  d.contextPage = context;
  d.seo.description = contextDescription(d.title, drafts.get(context)!);
  d.publication = titleStatesClaim(owner) ? "held" : "framed";
  if (d.publication === "held") {
    d.seo.robots = "noindex,follow";
    d.seo.sitemap = false;
  }
}
// While a canonical page is held, its merged aliases skip it and redirect temporarily to where it does.
for (const redirect of redirects) {
  const target = [...drafts.values()].find((d) => d.status === "canonical" && d.path === redirect.destination);
  if (target?.publication === "held") {
    redirect.destination = drafts.get(target.contextPage!)!.path;
    redirect.permanent = false;
  }
}
for (const d of canonicalDrafts) {
  if (d.publication === "held") redirects.push({ source: d.path, destination: drafts.get(d.contextPage!)!.path, permanent: false });
}
/** Canonical pages that are published or framed: the only pages anything may link to or list. */
const liveDrafts = canonicalDrafts.filter((d) => d.publication !== "held");
const isLive = (n: number) => drafts.get(n)?.status === "canonical" && drafts.get(n)!.publication !== "held";
const resolveCanonical = (n: number) => drafts.get(n)!.mergedInto ?? n;

/* ------------------------------------------------------------------------------------------ */
/* Pass 2: links                                                                               */
/* ------------------------------------------------------------------------------------------ */

const lexicon = LEXICON.map((entry) => ({ page: entry.page, patterns: entry.terms.map(wordPattern) }));

function mentionsFor(draft: Draft): number[] {
  const texts = [draft.sourceText, ...draft.mergedSources.map((n) => drafts.get(n)!.sourceText)];
  const hits: Array<{ page: number; index: number }> = [];
  for (const entry of lexicon) {
    const target = resolveCanonical(entry.page);
    if (target === draft.number || !isLive(target)) continue;
    let best = Infinity;
    for (const text of texts) {
      for (const pattern of entry.patterns) {
        const match = pattern.exec(text);
        if (match && match.index < best) best = match.index;
      }
    }
    if (best !== Infinity) hits.push({ page: target, index: best });
  }
  return [...new Map(hits.sort((a, b) => a.index - b.index).map((h) => [h.page, h])).keys()];
}

const mentions = new Map(canonicalDrafts.map((d) => [d.number, mentionsFor(d)]));

const categoryOrder = new Map<string, number[]>();
for (const d of liveDrafts) {
  if (d.role !== "leaf") continue;
  const list = categoryOrder.get(d.category) ?? [];
  list.push(d.number);
  categoryOrder.set(d.category, list);
}

function score(from: Draft, to: Draft): number {
  if (from.number === to.number || to.status !== "canonical" || to.role === "home") return 0;
  let s = 0;
  const shared = from.clusters.filter((c) => to.clusters.includes(c));
  s += shared.length * 5;
  if (shared.some((c) => clusterById.get(c)!.primary === to.number)) s += 2;
  if (mentions.get(from.number)!.includes(to.number)) s += 3;
  if (mentions.get(to.number)!.includes(from.number)) s += 1;
  if (from.category === to.category) {
    const order = categoryOrder.get(from.category) ?? [];
    const distance = Math.abs(order.indexOf(from.number) - order.indexOf(to.number));
    if (order.includes(from.number) && order.includes(to.number) && distance <= 2) s += 1;
  }
  return s;
}

function ranked(from: Draft, filter: (d: Draft) => boolean, max: number): number[] {
  return liveDrafts
    .filter((d) => filter(d))
    .map((d) => ({ n: d.number, s: score(from, d) }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s || Math.abs(a.n - from.number) - Math.abs(b.n - from.number))
    .slice(0, max)
    .map((x) => x.n);
}

/** Ranked related pages; when fewer than three remain (neighbours held), the nearest live pages in the category fill in. */
function relatedFor(d: Draft): number[] {
  const related = ranked(d, (x) => x.pageType !== "faq" && x.pageType !== "conversion", RELATED_MAX);
  if (related.length >= 3 || d.role === "home") return related;
  // Two hops: the related pages of this page's related pages, then the nearest live pages in its category.
  const secondHop = related.flatMap((n) => ranked(drafts.get(n)!, (x) => x.pageType !== "faq" && x.pageType !== "conversion" && x.number !== d.number, RELATED_MAX)).filter((n) => !related.includes(n));
  if (related.length + new Set(secondHop).size >= 3) return [...related, ...new Set(secondHop)].slice(0, 3);
  const order = liveDrafts.filter((x) => x.category === d.category && x.number !== d.number && x.pageType !== "faq" && x.pageType !== "conversion" && !related.includes(x.number));
  const nearest = order.sort((a, b) => Math.abs(a.number - d.number) - Math.abs(b.number - d.number)).map((x) => x.number);
  return [...related, ...nearest].slice(0, 3);
}

const FEATURE_TYPES: PageTypeId[] = ["platform", "feature", "ai-feature", "workflow", "storage", "integration", "access-security", "analytics", "developer", "migration", "architecture"];

function childrenFor(draft: Draft): Array<{ clusterId: string | null; label: string; pages: number[] }> {
  if (draft.role !== "section-root") return [];
  const listing = ROOT_LISTINGS[draft.number];
  const scope = [
    ...liveDrafts.filter((d) => d.section === draft.section && d.number !== draft.number).map((d) => d.number),
    ...(listing?.crossListings ?? []).filter(isLive),
  ];
  return groupPages([...new Set(scope)], listing?.groupBy ?? [], `More in ${sectionById.get(draft.section)!.label}`);
}

function groupPages(pages: number[], groupBy: string[], restLabel: string) {
  const remaining = new Set(pages.sort((a, b) => a - b));
  const groups: Array<{ clusterId: string | null; label: string; pages: number[] }> = [];
  for (const clusterId of groupBy) {
    const cluster = clusterById.get(clusterId);
    if (!cluster) throw new Error(`Unknown cluster "${clusterId}" in groupBy`);
    const members = [...remaining].filter((n) => cluster.members.includes(n));
    if (!members.length) continue;
    members.forEach((n) => remaining.delete(n));
    groups.push({ clusterId, label: cluster.label, pages: members });
  }
  if (remaining.size) groups.push({ clusterId: null, label: restLabel, pages: [...remaining] });
  return groups;
}

function ctaFor(draft: Draft): InventoryPage["cta"] {
  const primary: CtaRef = { target: "global:primary", label: GLOBAL_CTAS.primary.label, href: GLOBAL_CTAS.primary.href };
  if (draft.category === "conversion") return { primary, contextual: null };
  const viaCluster = CLUSTERS.find((c) => c.id === "conversion")!.members.find((n) => {
    const conversion = drafts.get(n)!;
    return conversion.clusters.some((c) => c !== "conversion" && draft.clusters.includes(c));
  });
  const target = viaCluster ?? CATEGORY_CONVERSION[draft.category];
  if (!target || target === draft.number) return { primary, contextual: null };
  const page = drafts.get(target)!;
  return { primary, contextual: { target: `page:${target}`, label: page.title, href: page.path } };
}

/* ------------------------------------------------------------------------------------------ */
/* Pass 3: recipes (rotate within category so neighbours differ)                               */
/* ------------------------------------------------------------------------------------------ */

const recipes = new Map<number, string>();
for (const category of CATEGORIES) {
  const members = canonicalDrafts.filter((d) => d.category === category.id).sort((a, b) => a.number - b.number);
  const cursors = new Map<string, number>();
  members.forEach((d, i) => {
    const all = pageTypeById.get(d.pageType)!.recipes;
    const pin = RECIPE_PINS[d.number];
    const family = pin ? (Array.isArray(pin) ? pin : [pin]) : all.filter((r) => !r.pinOnly).map((r) => r.id);
    for (const id of family) {
      if (!all.some((r) => r.id === id)) throw new Error(`Recipe "${id}" is not valid for page ${d.number} (${d.pageType})`);
    }
    // Avoid the previous page's recipe, and the next page's recipe when that one is a single pin.
    const previous = i > 0 ? recipes.get(members[i - 1].number) : undefined;
    const nextPin = members[i + 1] ? RECIPE_PINS[members[i + 1].number] : undefined;
    const avoid = new Set([previous, typeof nextPin === "string" ? nextPin : undefined]);
    const key = `${d.pageType}:${family.join("|")}`;
    let cursor = cursors.get(key) ?? 0;
    let recipe = family[cursor % family.length];
    for (let tries = 0; tries < family.length && avoid.has(recipe); tries++) recipe = family[++cursor % family.length];
    cursors.set(key, cursor + 1);
    recipes.set(d.number, recipe);
  });
}

/* ------------------------------------------------------------------------------------------ */
/* Assemble                                                                                    */
/* ------------------------------------------------------------------------------------------ */

const pages: InventoryPage[] = [...drafts.values()].map((d) => {
  if (d.status === "merged") {
    return {
      ...d,
      recipe: "",
      related: [d.mergedInto!],
      mentions: [],
      relatedFeatures: [],
      relatedResources: [],
      relatedFaqs: [],
      relatedUseCases: [],
      children: [],
      childGroups: [],
      previous: null,
      next: null,
      cta: ctaFor(drafts.get(d.mergedInto!)!),
    };
  }
  const order = categoryOrder.get(d.category) ?? [];
  const i = order.indexOf(d.number);
  const childGroups = childrenFor(d);
  const children = childGroups.flatMap((g) => g.pages);
  return {
    ...d,
    recipe: recipes.get(d.number)!,
    related: relatedFor(d),
    mentions: mentions.get(d.number)!,
    relatedFeatures: ranked(d, (x) => FEATURE_TYPES.includes(x.pageType), 4),
    relatedResources: ranked(d, (x) => x.pageType === "resource", 3),
    relatedFaqs: ranked(d, (x) => x.pageType === "faq", 3),
    relatedUseCases: ranked(d, (x) => x.pageType === "use-case", 3),
    children,
    childGroups,
    previous: i > 0 ? order[i - 1] : null,
    next: i >= 0 && i < order.length - 1 ? order[i + 1] : null,
    cta: ctaFor(d),
  };
});

// Reciprocity: a live page nothing links to contextually is added to the related list of its closest
// related page (replacing that list's weakest entry), so no page is reachable only through hubs.
{
  const live = pages.filter((p) => p.status === "canonical" && p.publication !== "held");
  const inboundCount = new Map<number, number>();
  for (const p of live) for (const n of [...p.related, ...p.mentions]) inboundCount.set(n, (inboundCount.get(n) ?? 0) + 1);
  for (const p of live) {
    if (p.role !== "leaf" || (inboundCount.get(p.number) ?? 0) > 0) continue;
    const host = p.related.map((n) => pages.find((x) => x.number === n)!).find((x) => !x.related.includes(p.number));
    if (!host) continue;
    host.related = host.related.length >= RELATED_MAX ? [...host.related.slice(0, RELATED_MAX - 1), p.number] : [...host.related, p.number];
    inboundCount.set(p.number, 1);
  }
}

const indexes: InventoryIndexPage[] = INDEX_PAGES.map((index) => {
  const section = sectionById.get(index.section)!;
  const scope = liveDrafts
    .filter((d) => d.section === index.section && (!index.category || d.category === index.category) && d.role === "leaf")
    .map((d) => d.number)
    .concat((index.crossListings ?? []).filter(isLive));

  let groups: InventoryIndexPage["groups"];
  if (index.id === "features") {
    groups = section.categories.map((id) => ({
      clusterId: null,
      label: categoryById.get(id)!.label,
      pages: liveDrafts.filter((d) => d.category === id).map((d) => d.number),
    }));
  } else {
    groups = groupPages([...new Set(scope)], index.groupBy, index.category ? `More ${categoryById.get(index.category)!.label}` : `More ${section.label}`);
  }

  const breadcrumb: BreadcrumbItem[] = [{ label: "Home", path: "/" }];
  if (index.path !== section.basePath) breadcrumb.push({ label: section.label, path: section.basePath });
  breadcrumb.push({ label: index.title, path: index.path });

  return {
    ...index,
    seo: {
      title: `${index.title} | ${BRAND}`,
      h1: index.h1,
      description: index.description,
      canonicalPath: index.path,
      schemaTypes: ["CollectionPage", "ItemList", "BreadcrumbList"],
      robots: "index,follow",
      sitemap: true,
    },
    breadcrumb,
    groups,
  };
});

const inventory: Inventory = {
  generatedAt: new Date().toISOString(),
  source: { file: "docs/source/Getsibu.pdf", pages: source.length },
  pages,
  indexes,
  redirects,
};

writeFileSync(generated("inventory.json"), `${JSON.stringify(inventory, null, 2)}\n`);

/* ------------------------------------------------------------------------------------------ */
/* Search index                                                                                */
/* ------------------------------------------------------------------------------------------ */

const SEARCH_GROUP_ORDER: SearchGroup[] = ["Features", "AI", "Integrations", "Developers", "Security", "Platform", "Use Cases", "Pricing", "Resources", "FAQs"];

const searchDocuments = [
  ...pages
    .filter((p) => p.status === "canonical" && p.publication !== "held")
    .map((p) => ({
      id: `page-${p.number}`,
      title: p.title,
      path: p.path,
      group: p.searchGroup,
      type: p.pageType,
      section: sectionById.get(p.section)!.label,
      summary: p.seo.description,
      // Summaries are always publishable: pages that need verification use their context description.
      publishable: true,
      // Pillar pages (cluster primaries) rank above other members for the same terms.
      pillar: CLUSTERS.some((c) => c.primary === p.number),
      // Cluster labels can name an unconfirmed claim ("Scene detection and video"): those stay out of the index.
      keywords: [...new Set([...p.clusters.map((c) => clusterById.get(c)!.label), ...p.aliases])].filter((k) => !blockedTerms.some((pattern) => pattern.test(k))),
    })),
  ...indexes.map((i) => ({
    id: `index-${i.id}`,
    title: i.title,
    path: i.path,
    group: (i.category ? categoryById.get(i.category)!.searchGroup : "Platform") as SearchGroup,
    type: "section-index" as PageTypeId,
    section: sectionById.get(i.section)!.label,
    summary: i.description,
    publishable: true,
    pillar: true,
    keywords: [],
  })),
];

writeFileSync(
  generated("search-index.json"),
  `${JSON.stringify({ groups: SEARCH_GROUP_ORDER, documents: searchDocuments }, null, 2)}\n`,
);

/* ------------------------------------------------------------------------------------------ */
/* Route matrix                                                                                */
/* ------------------------------------------------------------------------------------------ */

const searchPaths = new Set(searchDocuments.map((d) => d.path));
const livePathSet = new Set(pages.filter((p) => p.status === "canonical" && p.publication !== "held").map((p) => p.path));
const navPaths = new Set(
  [...PRIMARY_NAV.flatMap((item) => [item, ...(item.columns ?? []).flatMap((c) => [c.hub, ...c.links])]), ...FOOTER_NAV.flatMap((c) => c.links)]
    .filter((link) => !("onlyWhenLive" in link && link.onlyWhenLive) || livePathSet.has(link.href))
    .map((link) => link.href),
);
const blockedClaims = (p: InventoryPage) => p.claims.filter((id) => !isPublishable(claimById.get(id)!));
const routeMatrix: RouteMatrixRow[] = [];
for (const p of pages.filter((x) => x.status === "canonical")) {
  const held = p.publication === "held";
  const redirect = held ? redirects.find((r) => r.source === p.path)! : null;
  routeMatrix.push({
    path: p.path,
    class: held ? "HELD" : p.publication === "framed" ? "SAFE-LIVE" : "LIVE",
    kind: held ? "held-page" : p.role === "home" ? "home" : "page",
    pdfPage: p.number,
    title: p.title,
    status: held ? 307 : 200,
    destination: redirect?.destination ?? null,
    indexable: !held && p.seo.robots === "index,follow",
    sitemap: p.seo.sitemap,
    search: searchPaths.has(p.path),
    navigation: navPaths.has(p.path),
    claims: blockedClaims(p),
    note: held ? "Title states an unconfirmed claim; republished when the claim is confirmed in claims.ts." : p.publication === "framed" ? "Published with verified context only." : "",
  });
}
for (const i of indexes) {
  routeMatrix.push({ path: i.path, class: "LIVE", kind: "hub", pdfPage: null, title: i.title, status: 200, destination: null, indexable: i.seo.robots === "index,follow", sitemap: i.seo.sitemap, search: searchPaths.has(i.path), navigation: navPaths.has(i.path), claims: [], note: "" });
}
for (const company of [ABOUT_PAGE, CONTACT_PAGE]) {
  routeMatrix.push({ path: company.path, class: "SAFE-LIVE", kind: "company", pdfPage: null, title: company.title, status: 200, destination: null, indexable: company.indexable, sitemap: company.indexable, search: false, navigation: navPaths.has(company.path), claims: [], note: "Built from verified PDF statements only (company-pages.ts)." });
}
routeMatrix.push({ path: "/site-search", class: "SAFE-LIVE", kind: "utility", pdfPage: null, title: "Search results", status: 200, destination: null, indexable: false, sitemap: false, search: false, navigation: false, claims: [], note: "Search results page; noindex and disallowed in robots.txt." });
const heldSources = new Set(routeMatrix.filter((r) => r.class === "HELD").map((r) => r.path));
for (const r of redirects) {
  if (heldSources.has(r.source)) continue;
  const merged = pages.find((p) => p.status === "merged" && MERGES[p.number]?.alias === r.source);
  routeMatrix.push({
    path: r.source,
    class: "REDIRECT",
    kind: merged ? "merged-alias" : "supporting-alias",
    pdfPage: merged?.number ?? null,
    title: merged?.title ?? "",
    status: r.permanent ? 308 : 307,
    destination: r.destination,
    indexable: false,
    sitemap: false,
    search: false,
    navigation: false,
    claims: merged ? blockedClaims(merged) : [],
    note: merged ? (r.permanent ? "Merged PDF duplicate." : "Merged PDF duplicate whose canonical page is held: temporarily skips to verified context.") : "Common alternative URL.",
  });
}
routeMatrix.sort((a, b) => a.path.localeCompare(b.path));
writeFileSync(generated("route-matrix.json"), `${JSON.stringify({ rows: routeMatrix }, null, 1)}\n`);

const canonicalCount = pages.filter((p) => p.status === "canonical").length;
const heldCount = pages.filter((p) => p.status === "canonical" && p.publication === "held").length;
console.log(`Inventory: ${pages.length} PDF pages → ${canonicalCount} canonical pages (${canonicalCount - heldCount} live, ${heldCount} held) + ${indexes.length} index hubs, ${redirects.length} redirects`);
console.log(`Search index: ${searchDocuments.length} documents`);
const classCounts = routeMatrix.reduce<Record<string, number>>((m, r) => ((m[r.class] = (m[r.class] ?? 0) + 1), m), {});
console.log(`Route matrix: ${routeMatrix.length} routes ${JSON.stringify(classCounts)}`);
