/**
 * Validate the inventory against the architecture's invariants.
 *
 *   npm run inventory:validate
 *
 * Errors fail the command (and therefore `prebuild`). Warnings are reported but do not fail;
 * each warning category is a known open item documented in docs/architecture.
 */
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { basename, join } from "node:path";
import { generated } from "./pipeline-env.ts";
import type { Inventory, SourcePage } from "../types/content.ts";
import { CLUSTERS } from "../content/architecture/clusters.ts";
import { CLAIMS, DO_NOT_USE, isPublishable } from "../content/architecture/claims.ts";
import { FOOTER_NAV, FOOTER_STATEMENT, PRIMARY_NAV } from "../content/architecture/navigation.ts";
import { AUTHORED_PAGES } from "../content/pages/registry.ts";
import { VERIFIED_CONTEXT } from "../content/architecture/verified-context.ts";
import { CATEGORIES, SUPPORTING_PAGES } from "../content/architecture/sections.ts";
import { ABOUT_PAGE, CONTACT_PAGE } from "../content/architecture/company-pages.ts";
import { STORYLINES } from "../content/architecture/storylines.ts";
import { checkAuthoredContent } from "./content-quality.ts";
import { RESERVED_APP_ROUTES } from "../content/architecture/url-rules.ts";
import { APP_TOPOLOGY } from "../content/architecture/route-decisions.ts";

const inventory: Inventory = JSON.parse(readFileSync(generated("inventory.json"), "utf8"));
const source: SourcePage[] = JSON.parse(readFileSync("content/source/pdf-pages.json", "utf8"));

const errors: string[] = [];
const warnings = new Map<string, string[]>();
const error = (message: string) => errors.push(message);
const warn = (category: string, message: string) => warnings.set(category, [...(warnings.get(category) ?? []), message]);

// Search labels follow the PDF hierarchy: a page's search group is its category's label (home belongs to Platform).
for (const category of CATEGORIES) {
  const expected = category.id === "home" ? "Platform" : category.label;
  if (category.searchGroup !== expected) error(`Category ${category.id}: search group "${category.searchGroup}" should be its PDF-hierarchy label "${expected}"`);
}
for (const page of inventory.pages) {
  const category = CATEGORIES.find((c) => c.id === page.category);
  if (category && page.searchGroup !== category.searchGroup) error(`Page ${page.number}: search group "${page.searchGroup}" differs from its category's "${category.searchGroup}"`);
}

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
/** Returns the first problem found in a piece of copy: a placeholder, or a claim that is not publishable. */
function copyProblem(text: string, allowedClaims: ReadonlySet<string> = new Set()): string | null {
  for (const item of DO_NOT_USE) if (text.includes(item.text)) return `placeholder "${item.text}" — ${item.reason}`;
  for (const claim of CLAIMS.filter((c) => !isPublishable(c) && !allowedClaims.has(c.id))) {
    const hit = claim.detect.find((term) => new RegExp(`(?<![A-Za-z0-9-])${escapeRegExp(term)}(?![A-Za-z0-9-])`, "i").test(text));
    if (hit) return `unpublishable claim "${claim.id}" (matched "${hit}", status ${claim.status})`;
  }
  return null;
}

const pages = inventory.pages;
const byNumber = new Map(pages.map((p) => [p.number, p]));
const canonical = pages.filter((p) => p.status === "canonical");
const canonicalNumbers = new Set(canonical.map((p) => p.number));
/** Published or framed pages. Held pages (titles stating unconfirmed claims) are never linked or listed. */
const live = canonical.filter((p) => p.publication !== "held");
const liveNumbers = new Set(live.map((p) => p.number));
const held = canonical.filter((p) => p.publication === "held");

/* Completeness ----------------------------------------------------------------------------- */

if (source.length !== 400) error(`Source has ${source.length} pages, expected 400`);
if (pages.length !== source.length) error(`Inventory has ${pages.length} pages, source has ${source.length}`);
for (let n = 1; n <= source.length; n++) if (!byNumber.has(n)) error(`PDF page ${n} is missing from the inventory`);
for (const page of pages) {
  const src = source.find((s) => s.number === page.number)!;
  if (page.sourceText !== src.text) error(`Page ${page.number}: sourceText differs from the PDF extraction`);
  if (page.sourceTitle !== src.sourceTitle) error(`Page ${page.number}: sourceTitle differs from the PDF extraction`);
}

/* URLs ------------------------------------------------------------------------------------- */

const pathOwners = new Map<string, string>();
const claimPath = (path: string, owner: string) => {
  if (pathOwners.has(path)) error(`Duplicate URL ${path}: ${pathOwners.get(path)} and ${owner}`);
  pathOwners.set(path, owner);
};
for (const p of canonical) claimPath(p.path, `page ${p.number}`);
for (const i of inventory.indexes) claimPath(i.path, `index ${i.id}`);
// Supporting pages that are built (company pages, site search) are routes too.
for (const s of SUPPORTING_PAGES) if (s.contentStatus === "generated" || s.contentStatus === "source-safe") claimPath(s.path, `supporting page ${s.title}`);
for (const r of inventory.redirects) {
  // Sources that are also live pages are checked below, once publication is known.
  if (!pathOwners.has(r.destination)) error(`Redirect ${r.source} → ${r.destination} points nowhere`);
}

const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
for (const p of canonical) {
  if (p.role === "leaf" && !SLUG.test(p.slug)) error(`Page ${p.number}: slug "${p.slug}" is not clean`);
  if (/\/\d+$/.test(p.path) && p.pageType !== "storage") error(`Page ${p.number}: path ${p.path} ends in a bare number`);
  if (p.path !== "/" && p.path.endsWith("/")) error(`Page ${p.number}: trailing slash in ${p.path}`);
}

// App topology (route-decisions.ts): one URL never means two things.
for (const route of RESERVED_APP_ROUTES) {
  const hits = [...pathOwners.keys()].filter((path) => path === route || path.startsWith(`${route}/`));
  if (!hits.length || APP_TOPOLOGY === "app-on-subdomain") continue;
  const detail = `${route}: ${hits.length} marketing path(s), e.g. ${hits[0]}`;
  if (APP_TOPOLOGY === "undecided") warn("Launch dependency: app route collisions while the app topology is undecided (route-decisions.ts)", detail);
  else if (APP_TOPOLOGY === "marketing-owns-analytics" && route === "/analytics") continue;
  else error(`App route collision under topology "${APP_TOPOLOGY}": ${detail}`);
}

/* SEO -------------------------------------------------------------------------------------- */

const indexable = [
  ...live.map((p) => ({ owner: `page ${p.number}`, seo: p.seo })),
  ...inventory.indexes.map((i) => ({ owner: `index ${i.id}`, seo: i.seo })),
];
for (const field of ["title", "h1", "description"] as const) {
  const seen = new Map<string, string>();
  for (const { owner, seo } of indexable) {
    const value = seo[field].toLowerCase();
    if (seen.has(value)) error(`Duplicate ${field} "${seo[field]}": ${seen.get(value)} and ${owner}`);
    seen.set(value, owner);
  }
}
for (const { owner, seo } of indexable) {
  if (seo.description.length > 160) error(`${owner}: description is ${seo.description.length} chars`);
  if (seo.description.length < 50) warn("Short meta descriptions (< 50 chars; refine in content phase)", `${owner}: "${seo.description}"`);
  if (seo.description.endsWith("…")) warn("Truncated meta descriptions (refine in content phase)", owner);
  if (seo.title.length > 60) warn("Titles over 60 characters", `${owner}: ${seo.title.length}`);
}

/* Clusters & links ------------------------------------------------------------------------- */

const clusterIds = new Set<string>();
for (const cluster of CLUSTERS) {
  if (clusterIds.has(cluster.id)) error(`Duplicate cluster id ${cluster.id}`);
  clusterIds.add(cluster.id);
  if (!cluster.members.includes(cluster.primary)) error(`Cluster ${cluster.id}: primary ${cluster.primary} is not a member`);
  for (const m of cluster.members) if (!canonicalNumbers.has(m)) error(`Cluster ${cluster.id}: member ${m} is not a canonical page`);
  for (const key of Object.keys(cluster.angles ?? {})) {
    if (!cluster.members.includes(Number(key))) error(`Cluster ${cluster.id}: angle for non-member ${key}`);
  }
  if (cluster.overlapRisk === "high") {
    const missing = cluster.members.filter((m) => !cluster.angles?.[m]);
    if (missing.length) warn("High-overlap clusters with members lacking an angle", `${cluster.id}: ${missing.join(", ")}`);
  }
}

const inbound = new Map<number, number>();
for (const p of live) {
  if (!p.clusters.length) error(`Page ${p.number} (${p.title}) belongs to no cluster`);
  for (const field of ["related", "mentions", "relatedFeatures", "relatedResources", "relatedFaqs", "relatedUseCases", "children"] as const) {
    for (const n of p[field]) {
      if (!liveNumbers.has(n)) error(`Page ${p.number}: ${field} references page ${n}, which is not live (merged or held)`);
      if (n === p.number) error(`Page ${p.number}: ${field} references itself`);
      if (field !== "children") inbound.set(n, (inbound.get(n) ?? 0) + 1);
    }
  }
  const ctaTarget = p.cta.contextual?.target.startsWith("page:") ? Number(p.cta.contextual.target.slice(5)) : null;
  if (ctaTarget) inbound.set(ctaTarget, (inbound.get(ctaTarget) ?? 0) + 1);
  if (p.role === "leaf" && p.related.length < 3) warn("Pages with fewer than 3 related links", `${p.number} ${p.title}: ${p.related.length}`);
}
for (const p of live) {
  if (p.role !== "home" && (inbound.get(p.number) ?? 0) === 0) {
    warn("Pages with no contextual inbound links (reachable only via hubs/nav)", `${p.number} ${p.title}`);
  }
}

// Every canonical page must be listed on at least one hub.
const listed = new Set<number>();
for (const i of inventory.indexes) for (const g of i.groups) g.pages.forEach((n) => listed.add(n));
for (const p of live) p.children.forEach((n) => listed.add(n));
for (const p of live) {
  if (p.role === "leaf" && !listed.has(p.number)) error(`Page ${p.number} (${p.path}) is not listed on any hub`);
}
for (const n of listed) if (!liveNumbers.has(n)) error(`Hub listing includes page ${n}, which is not live`);
for (const p of canonical) for (const n of [p.previous, p.next]) if (n !== null && !liveNumbers.has(n)) error(`Page ${p.number}: previous/next page ${n} is not live`);

// Held pages: not routable, redirected temporarily to a live page, absent from the sitemap and search.
const redirectBySource = new Map(inventory.redirects.map((r) => [r.source, r]));
const livePaths = new Set([...live.map((p) => p.path), ...inventory.indexes.map((i) => i.path)]);
for (const p of held) {
  const redirect = redirectBySource.get(p.path);
  if (!redirect || redirect.permanent) error(`Held page ${p.number} (${p.path}) needs a temporary redirect`);
  else if (!livePaths.has(redirect.destination)) error(`Held page ${p.number}: redirect destination ${redirect.destination} is not a live page`);
  if (p.seo.sitemap || p.seo.robots !== "noindex,follow") error(`Held page ${p.number} must be noindex and out of the sitemap`);
  if (!p.contextPage || !liveNumbers.has(p.contextPage)) error(`Held page ${p.number}: context page must be live`);
}
for (const r of inventory.redirects) {
  if (livePaths.has(r.source)) error(`Redirect source ${r.source} is also a live page`);
  if (redirectBySource.has(r.destination)) error(`Redirect chain: ${r.source} → ${r.destination} → ${redirectBySource.get(r.destination)!.destination}`);
}
// A live page's title, H1 and breadcrumb never state an unconfirmed claim.
for (const p of live) {
  for (const [field, value] of [["title", p.title], ["H1", p.seo.h1], ["meta title", p.seo.title], ["description", p.seo.description], ["breadcrumb", p.breadcrumb.map((b) => b.label).join(" / ")]] as const) {
    const problem = copyProblem(value);
    if (problem) error(`Live page ${p.number}: ${field} contains ${problem}`);
  }
}
for (const index of inventory.indexes) {
  for (const [field, value] of [["title", index.title], ["lede", index.lede], ["description", index.description], ["groups", index.groups.map((g) => g.label).join(" / ")]] as const) {
    const problem = copyProblem(value);
    if (problem) error(`Hub ${index.path}: ${field} contains ${problem}`);
  }
}
{
  const searchDocs: { documents: Array<{ id: string; title: string; summary: string; keywords: string[] }> } = JSON.parse(readFileSync(generated("search-index.json"), "utf8"));
  for (const doc of searchDocs.documents) {
    const n = doc.id.startsWith("page-") ? Number(doc.id.slice(5)) : null;
    if (n !== null && !liveNumbers.has(n)) error(`Search index includes page ${n}, which is not live`);
    const problem = copyProblem([doc.title, doc.summary, ...doc.keywords].join(" | "));
    if (problem) error(`Search document ${doc.id} contains ${problem}`);
  }
}

/* Navigation ------------------------------------------------------------------------------- */

const navLinks = [
  ...PRIMARY_NAV.flatMap((item) => [{ label: item.label, href: item.href, framedReason: item.framedReason }, ...(item.columns ?? []).flatMap((c) => [c.hub, ...c.links])]),
  ...FOOTER_NAV.flatMap((col) => col.links),
];
const pageByPath = new Map(canonical.map((p) => [p.path, p]));
for (const link of navLinks) {
  if (/^https?:/.test(link.href)) continue;
  if (!pathOwners.has(link.href)) error(`Navigation link "${link.label}" → ${link.href} does not resolve`);
  const target = pageByPath.get(link.href);
  // A link shown only while its target is live is not rendered while the target is held.
  if ("onlyWhenLive" in link && link.onlyWhenLive && target?.publication === "held") continue;
  const labelProblem = copyProblem(link.label);
  if (labelProblem) error(`Navigation label "${link.label}" contains ${labelProblem}`);
  if (target?.publication === "held") error(`Navigation link "${link.label}" → ${link.href} targets a held page`);
  else if (target?.publication === "framed" && !("framedReason" in link && link.framedReason)) {
    error(`Navigation link "${link.label}" → ${link.href} targets a framed page without a recorded framedReason`);
  }
}
for (const item of PRIMARY_NAV) {
  for (const column of item.columns ?? []) {
    const problem = copyProblem(column.description);
    if (problem) error(`Navigation description for "${column.heading}" contains ${problem}`);
    for (const n of column.descriptionSource) if (!byNumber.has(n)) error(`Navigation "${column.heading}" cites missing PDF page ${n}`);
  }
}
{
  const problem = copyProblem(FOOTER_STATEMENT.text);
  if (problem) error(`Footer statement contains ${problem}`);
}

/* Company pages ------------------------------------------------------------------------------ */

{
  const aboutLayers = STORYLINES.find((set) => set.id === ABOUT_PAGE.layers);
  if (!aboutLayers) error(`About page: storyline ${ABOUT_PAGE.layers} does not exist`);
  const statements = [ABOUT_PAGE.lede, ABOUT_PAGE.audience, ...ABOUT_PAGE.approach, ABOUT_PAGE.conversion, ...(aboutLayers?.items.map((i) => i.page) ?? []), ...CONTACT_PAGE.routes];
  for (const n of statements) {
    const p = byNumber.get(n);
    if (!p || p.status !== "canonical" || p.publication === "held" || p.needsVerification) error(`Company pages: PDF page ${n} is not a live, publishable page`);
  }
  const problem = copyProblem(readFileSync("content/architecture/company-pages.ts", "utf8"));
  if (problem) error(`content/architecture/company-pages.ts contains ${problem}`);
}

/* Claims ----------------------------------------------------------------------------------- */

for (const claim of CLAIMS) for (const n of claim.pdfPages) if (!byNumber.has(n)) error(`Claim ${claim.id}: PDF page ${n} does not exist`);
const blocked = canonical.filter((p) => p.needsVerification);
// A page that needs verification never publishes its own statement: not in metadata, structured data
// or the search index (all read seo.description). It is framed by a publishable context page.
const searchIndex: { documents: Array<{ id: string; summary: string }> } = JSON.parse(readFileSync(generated("search-index.json"), "utf8"));
const summaries = new Map(searchIndex.documents.map((d) => [d.id, d.summary]));
for (const p of blocked) {
  const own = p.keyStatement.slice(0, 48).toLowerCase();
  if (p.seo.description.toLowerCase().includes(own)) error(`Page ${p.number} (${p.title}) needs verification but its meta description repeats its own statement`);
  const summary = summaries.get(`page-${p.number}`);
  if (summary && summary.toLowerCase().includes(own)) error(`Page ${p.number} (${p.title}) needs verification but its search summary repeats its own statement`);
  const context = p.contextPage === null ? undefined : byNumber.get(p.contextPage);
  if (!context) error(`Page ${p.number} (${p.title}) needs verification but has no context page`);
  else if (context.status !== "canonical" || context.needsVerification) error(`Page ${p.number}: context page ${context.number} must be canonical and publishable`);
}
for (const entry of VERIFIED_CONTEXT) {
  for (const n of [entry.context, entry.next, ...(entry.topics?.pages ?? []), ...(entry.faqs ?? [])]) {
    if (n === undefined) continue;
    const target = byNumber.get(n);
    if (!target || target.status !== "canonical" || target.needsVerification) error(`Verified context "${entry.id}": page ${n} is not a canonical, publishable page`);
  }
  for (const n of entry.pages) if (!byNumber.get(n)?.needsVerification) warn("Verified context entries for pages that no longer need verification", `${entry.id}: ${n}`);
  if (entry.topics) {
    const problem = copyProblem(entry.topics.heading);
    if (problem) error(`Verified context "${entry.id}": topics heading contains ${problem}`);
  }
}
warn(
  "Pages whose source paragraph contains a claim that is not publishable yet",
  `${blocked.length} of ${canonical.length} pages — see docs/architecture/02-source-audit.md`,
);

// Authored content (Prompt 2+): no placeholders, no unpublishable claims.
const walk = (dir: string): string[] =>
  existsSync(dir) ? readdirSync(dir).flatMap((f) => (statSync(join(dir, f)).isDirectory() ? walk(join(dir, f)) : [join(dir, f)])) : [];
// A held page renders nowhere until its claims are confirmed, so its draft may state those claims (and no others).
// Topic files are named <pdf-number>-<slug>.ts.
for (const file of walk("content/pages")) {
  const number = Number(basename(file).split("-")[0]);
  const page = Number.isInteger(number) ? byNumber.get(number) : undefined;
  const allowed = page?.publication === "held" ? new Set(page.claims) : new Set<string>();
  const problem = copyProblem(readFileSync(file, "utf8"), allowed);
  if (problem) error(`${file}: contains ${problem}`);
}

// Structure of authored content: registered, sourced, and linking only to canonical pages.
const registeredFiles = new Set<string>();
for (const content of AUTHORED_PAGES) {
  const owner = `content for page ${content.page}`;
  if (!canonicalNumbers.has(content.page)) error(`${owner}: page is not canonical`);
  if (registeredFiles.has(String(content.page))) error(`${owner}: registered twice`);
  registeredFiles.add(String(content.page));
  content.sections.forEach((section, i) => {
    const where = `${owner}, section "${section.id}"`;
    if (!section.sources.length) error(`${where}: has no sources`);
    for (const source of section.sources) {
      if (source.kind === "pdf" && !byNumber.has(source.page)) error(`${where}: cites missing PDF page ${source.page}`);
    }
    if (section.kind === "hero" && i !== 0) error(`${where}: hero must be the first section`);
    const { sources: _sources, ...linkable } = section;
    const referenced = JSON.stringify(linkable).match(/"(?:page|conversionPage)":(\d+)/g) ?? [];
    const pageLists = [
      ...("pages" in section && Array.isArray(section.pages) ? section.pages : []),
      ...(section.kind === "category-explorer" ? section.categories.flatMap((c) => c.pages) : []),
    ];
    for (const n of [...referenced.map((r) => Number(r.split(":")[1])), ...pageLists]) {
      if (!liveNumbers.has(n)) error(`${where}: links to page ${n}, which is not live`);
      else if (byNumber.get(n)!.needsVerification) warn("Authored sections linking to framed pages", `${where} → ${n} ${byNumber.get(n)!.title}`);
    }
  });
}
{
  // Depth, honesty, language and repetition of authored topic pages (scripts/content-quality.ts).
  const quality = checkAuthoredContent(AUTHORED_PAGES, inventory, source);
  quality.errors.forEach(error);
  for (const [category, items] of quality.warnings) items.forEach((item) => warn(category, item));
  const words = [...quality.stats.values()].map((s) => s.words);
  if (words.length) console.log(`Authored pages checked: ${words.length}, median ${words.sort((a, b) => a - b)[Math.floor(words.length / 2)]} words`);
}
const authoredFiles = walk("content/pages").filter((file) => !file.endsWith("registry.ts"));
if (authoredFiles.length !== AUTHORED_PAGES.length) {
  error(`content/pages has ${authoredFiles.length} content file(s) but registry.ts registers ${AUTHORED_PAGES.length}`);
}

/* Composed pages (scripts/compose-pages.ts) ------------------------------------------------------ */

const composedFile = generated("page-sections.json");
if (!existsSync(composedFile)) {
  error(`${composedFile} is missing; run npm run pages:compose`);
} else {
  const composed: Record<string, { recipe: string; sections: Array<Record<string, unknown> & { kind: string; id: string; sources: unknown[] }> }> =
    JSON.parse(readFileSync(composedFile, "utf8")).pages;
  const authoredPages = new Set(AUTHORED_PAGES.map((c) => c.page));
  const FRAME = new Set(["hero", "faq", "related", "cta"]);
  let storyTotal = 0;
  for (const n of Object.keys(composed)) if (!liveNumbers.has(Number(n))) error(`${composedFile} composes page ${n}, which is not live`);
  for (const p of live) {
    if (authoredPages.has(p.number)) continue;
    const entry = composed[String(p.number)];
    const owner = `composed page ${p.number} (${p.title})`;
    if (!entry) {
      error(`${owner}: missing from ${composedFile}`);
      continue;
    }
    const kinds = entry.sections.map((section) => section.kind);
    if (kinds[0] !== "hero") error(`${owner}: first section is ${kinds[0]}, not hero`);
    if (kinds[kinds.length - 1] !== "cta") error(`${owner}: last section is not a CTA`);
    kinds.forEach((kind, i) => i > 0 && kind === kinds[i - 1] && error(`${owner}: two "${kind}" sections in a row`));
    const story = kinds.filter((kind) => !FRAME.has(kind)).length;
    storyTotal += story;
    if (story < 2) error(`${owner}: only ${story} story section(s)`);
    else if (story < 3) warn("Composed pages with fewer than 3 story sections (not enough publishable material)", `${p.number} ${p.title}`);
    const substantive = kinds.filter((kind) => !FRAME.has(kind) && kind !== "media" && kind !== "statement").length;
    if (substantive < 2) warn("Composed pages carried mostly by media and statements", `${p.number} ${p.title}`);
    // Figures: the hero's figure may be explored by a story, but no other figure appears twice.
    const heroDiagram = (entry.sections[0] as { visual?: { diagram: string } }).visual?.diagram;
    const seenDiagrams = new Set<string>();
    for (const section of entry.sections.slice(1)) {
      const figures = [(section as { visual?: { diagram: string } }).visual?.diagram, ...((section as { rows?: Array<{ visual?: { diagram: string } }> }).rows ?? []).map((r) => r.visual?.diagram)];
      for (const diagram of figures) {
        if (!diagram) continue;
        if ((diagram === heroDiagram && section.kind !== "story") || seenDiagrams.has(diagram)) error(`${owner}, section "${section.id}": figure ${diagram} already appears on the page`);
        seenDiagrams.add(diagram);
      }
      const heading = (section as { heading?: string }).heading;
      if (heading && heading.toLowerCase() === p.seo.h1.toLowerCase()) error(`${owner}, section "${section.id}": heading repeats the H1`);
      if (heading && entry.sections.some((other) => other !== section && (other as { heading?: string }).heading?.toLowerCase() === heading.toLowerCase())) {
        error(`${owner}, section "${section.id}": heading "${heading}" is used by another section on the page`);
      }
    }
    // A statement appears once per page; a sequence's own "This page" step may restate the lede.
    const seenText = new Map<string, string>();
    for (const section of entry.sections) {
      if (section.kind === "cta") continue;
      const { sources: _s, ...rest } = section;
      const texts: string[] = [];
      const visit = (value: unknown, current = false): void => {
        if (Array.isArray(value)) return value.forEach((v) => visit(v, current));
        if (!value || typeof value !== "object") return;
        const record = value as Record<string, unknown>;
        const isCurrent = current || record.current === true;
        const rich = (v: unknown) => Array.isArray(v) && v.length > 0 && v.every((x) => typeof x === "string" || (!!x && typeof x === "object" && typeof (x as { text?: unknown }).text === "string" && typeof (x as { page?: unknown }).page === "number"));
        if (typeof record.page === "number" && typeof record.text === "string" && Object.keys(record).length === 2) return; // an inline link
        for (const key of ["lede", "text", "answer", "body", "detail"]) {
          if (isCurrent) continue;
          if (typeof record[key] === "string") texts.push(record[key] as string);
          else if (rich(record[key])) texts.push((record[key] as Array<string | { text: string }>).map((x) => (typeof x === "string" ? x : x.text)).join(""));
        }
        for (const [key, v] of Object.entries(record)) if (typeof v === "object") visit(v, key === "context" ? true : isCurrent);
      };
      visit(rest);
      for (const text of texts) {
        const first = seenText.get(text);
        if (first && first !== section.id) warn("Statements shown twice on one page (overlapping sequences; the page has no spare section)", `${p.number} ${section.id} repeats ${first}: ${text.slice(0, 50)}…`);
        else seenText.set(text, section.id);
      }
    }
    // The hero of a page that needs verification carries its context statement or nothing.
    const hero = entry.sections[0] as { lede?: string; context?: { page: number } };
    if (p.needsVerification && hero.lede && hero.context?.page !== p.contextPage) error(`${owner}: hero lede on a page that needs verification must come from its context page`);
    for (const section of entry.sections) {
      if (!section.sources?.length) error(`${owner}, section "${section.id}": has no sources`);
      const { sources: _sources, ...copy } = section;
      const text = JSON.stringify(copy);
      const problem = copyProblem(text);
      if (problem) error(`${owner}, section "${section.id}": contains ${problem}`);
      for (const match of text.matchAll(/"(?:page|conversionPage)":(\d+)/g)) {
        if (!liveNumbers.has(Number(match[1]))) error(`${owner}, section "${section.id}": links to page ${match[1]}, which is not live`);
      }
      for (const key of ["pages", "planPages"]) {
        const list = (section as Record<string, unknown>)[key];
        if (Array.isArray(list)) for (const n of list) if (!liveNumbers.has(n)) error(`${owner}, section "${section.id}": lists page ${n}, which is not live`);
      }
      for (const match of text.matchAll(/"kind":"route","path":"([^"]+)"/g)) {
        if (!pathOwners.has(match[1])) error(`${owner}, section "${section.id}": route action ${match[1]} does not resolve`);
      }
    }
  }
  // Two pages must not tell the same story: identical story sections mean one should take another angle.
  const bySignature = new Map<string, number[]>();
  for (const [n, entry] of Object.entries(composed)) {
    const signature = entry.sections.filter((section) => !FRAME.has(section.kind)).map((section) => JSON.stringify({ ...section, sources: undefined, surface: undefined })).sort().join("|");
    bySignature.set(signature, [...(bySignature.get(signature) ?? []), Number(n)]);
  }
  for (const group of bySignature.values()) if (group.length > 1) warn("Pages whose story sections are identical (give one a different angle in storylines.ts)", group.map((n) => `${n} ${byNumber.get(n)!.title}`).join(" = "));
  const composedCount = live.filter((p) => !authoredPages.has(p.number)).length;
  console.log(`Composed pages checked: ${composedCount}, average ${composedCount ? (storyTotal / composedCount).toFixed(1) : "—"} story sections per page`);
}

// Figure labels and storyline text are copy too.
for (const file of [...walk("components/diagrams"), "content/architecture/storylines.ts"]) {
  const problem = copyProblem(readFileSync(file, "utf8"));
  if (problem) error(`${file}: contains ${problem}`);
}

/* Report ----------------------------------------------------------------------------------- */

for (const [category, items] of warnings) {
  console.warn(`\n⚠ ${category} (${items.length})`);
  for (const item of items.slice(0, 12)) console.warn(`   ${item}`);
  if (items.length > 12) console.warn(`   … ${items.length - 12} more`);
}
if (errors.length) {
  console.error(`\n✖ ${errors.length} error(s)`);
  for (const e of errors) console.error(`   ${e}`);
  process.exit(1);
}
console.log(`\n✔ Inventory valid: ${pages.length} PDF pages, ${canonical.length} canonical pages (${live.length} live, ${held.length} held), ${inventory.indexes.length} hubs, ${inventory.redirects.length} redirects, ${CLUSTERS.length} clusters`);
