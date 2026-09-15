/**
 * Topic audit: one row per PDF topic (all 400), from the inventory, the authored content and the
 * quality gate.
 *
 *   node scripts/audit-topics.ts
 *
 * Writes docs/topic-audit.csv and docs/architecture/21-topic-audit.md. Read-only otherwise.
 *
 * Columns per topic: PDF number and title, URL, publication status, content source (authored page,
 * held draft, merged into a canonical page, or composed fallback), completeness, source coverage,
 * validation result, maximum prose overlap, claim safety, link-list share and PDF-paragraph reliance.
 */
import { readFileSync, writeFileSync } from "node:fs";
import type { ContentSection, Inventory, InventoryPage, SourcePage } from "../types/content.ts";
import { AUTHORED_PAGES } from "../content/pages/registry.ts";
import { CLAIMS, DO_NOT_USE, isPublishable } from "../content/architecture/claims.ts";
import { checkAuthoredContent } from "./content-quality.ts";

const inventory: Inventory = JSON.parse(readFileSync("content/generated/inventory.json", "utf8"));
const source: SourcePage[] = JSON.parse(readFileSync("content/source/pdf-pages.json", "utf8"));
const composed: Record<string, { sections: ContentSection[] }> = JSON.parse(readFileSync("content/generated/page-sections.json", "utf8")).pages;
const searchIndex: { documents: Array<{ id: string }> } = JSON.parse(readFileSync("content/generated/search-index.json", "utf8"));
const searchable = new Set(searchIndex.documents.map((d) => d.id));

const byNumber = new Map(inventory.pages.map((p) => [p.number, p]));
const authored = new Map(AUTHORED_PAGES.map((c) => [c.page, c]));
const report = checkAuthoredContent(AUTHORED_PAGES, inventory, source);

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const blocked = CLAIMS.filter((c) => !isPublishable(c)).map((c) => ({ id: c.id, patterns: c.detect.map((t) => new RegExp(`(?<![A-Za-z0-9-])${escapeRegExp(t)}(?![A-Za-z0-9-])`, "i")) }));
/** Unconfirmed claims or placeholders in a live page's visible identity and body (held pages: none of this is published). */
function claimLeaks(p: InventoryPage): string[] {
  if (p.publication === "held") return [];
  const content = authored.get(p.number);
  const body = content ? JSON.stringify(content.sections.map(({ sources: _s, ...rest }) => rest)) : JSON.stringify(composed[String(p.number)]?.sections ?? []);
  const text = [p.title, p.seo.h1, p.seo.title, p.seo.description, p.breadcrumb.map((b) => b.label).join(" "), body].join(" | ");
  const hits = blocked.filter((b) => b.patterns.some((re) => re.test(text))).map((b) => b.id);
  for (const item of DO_NOT_USE) if (text.includes(item.text)) hits.push(`placeholder:${item.text}`);
  return hits;
}

const LINK_LIST = (s: ContentSection) =>
  s.kind === "related" || (s.kind === "checklist" && s.items.every((i) => typeof i === "object" && !!i.page)) || (s.kind === "capabilities" && /^More in /.test(s.heading));

interface Row {
  n: number;
  title: string;
  url: string;
  status: string;
  content: string;
  completeness: string;
  words: number;
  bodySections: number;
  faq: number;
  pdfSources: number;
  sourceCoverage: string;
  validation: string;
  errors: number;
  overlap: string;
  claimSafety: string;
  linkListShare: string;
  pdfReliance: string;
  manualReview: string;
}

const rows: Row[] = [];
for (const src of source) {
  const p = byNumber.get(src.number)!;
  const canonical = p.status === "merged" ? byNumber.get(p.mergedInto!)! : p;
  const content = authored.get(canonical.number);
  const stats = report.stats.get(canonical.number);
  const errs = p.status === "merged" ? [] : report.pageErrors.get(p.number) ?? [];
  const weak = stats?.weakStatements ?? 0;
  const sections = content?.sections ?? composed[String(canonical.number)]?.sections ?? [];
  const linkShare = sections.length ? sections.filter(LINK_LIST).length / Math.max(1, sections.filter((s) => !["hero", "cta"].includes(s.kind)).length) : 0;
  const overlap = report.maxOverlap.get(canonical.number);
  const leaks = p.status === "merged" ? [] : claimLeaks(p);

  let status: string = p.status === "merged" ? `merged into ${canonical.number}` : p.publication;
  if (p.status === "merged") status += ` (${canonical.publication})`;
  let contentSource = "none";
  if (content) contentSource = canonical.publication === "held" ? "authored draft (held)" : "authored";
  else if (composed[String(canonical.number)]) contentSource = "composed fallback";
  if (p.status === "merged") contentSource = `served by ${canonical.number} (${contentSource}); paragraph used as source`;

  let completeness = "missing";
  if (content && stats) {
    // The homepage is a bespoke composition (identity.ts); it is complete when it validates.
    const complete = canonical.role === "home" ? errs.length === 0 : stats.words >= (canonical.pageType === "faq" ? 450 : 650) && stats.bodySections >= 3 && stats.faqQuestions >= 3 && errs.length === 0;
    completeness = complete ? (canonical.publication === "held" ? "complete draft, awaiting claim" : "complete") : "incomplete";
  } else if (contentSource.startsWith("composed")) completeness = "composed only (not developed)";
  if (p.status === "merged") completeness = `see ${canonical.number}`;

  const inSearch = searchable.has(`page-${canonical.number}`);
  const heldLeak = canonical.publication === "held" && inSearch ? ["held page in search index"] : [];
  rows.push({
    n: src.number,
    title: src.title,
    url: canonical.path,
    status,
    content: contentSource,
    completeness,
    words: stats?.words ?? 0,
    bodySections: stats?.bodySections ?? 0,
    faq: stats?.faqQuestions ?? 0,
    pdfSources: stats?.pdfSourcesCited ?? 0,
    sourceCoverage: stats ? `${stats.pdfSourcesCited} PDF pages cited${stats.editorialCited ? " + editorial" : ""}` : "",
    validation: p.status === "merged" ? "n/a (merged)" : content ? (errs.length ? "FAIL" : "pass") : "not authored",
    errors: errs.length,
    overlap: overlap ? `${overlap.jaccard.toFixed(2)} with ${overlap.page}` : "",
    claimSafety: [...leaks, ...heldLeak].length ? `LEAK: ${[...leaks, ...heldLeak].join(", ")}` : canonical.publication === "held" ? "held: unpublished, excluded" : "safe",
    linkListShare: `${Math.round(linkShare * 100)}%`,
    pdfReliance: stats ? `${Math.round(stats.pdfShare * 100)}%` : "",
    manualReview: [weak ? `${weak} weakly supported statement(s)` : "", canonical.publication === "framed" ? "framed: verify claim-free framing" : ""].filter(Boolean).join("; "),
  });
}

/* Outputs ------------------------------------------------------------------------------------------ */

const csvCell = (v: unknown) => `"${String(v).replace(/"/g, '""')}"`;
const columns = Object.keys(rows[0]) as Array<keyof Row>;
writeFileSync("docs/topic-audit.csv", [columns.join(","), ...rows.map((r) => columns.map((c) => csvCell(r[c])).join(","))].join("\n") + "\n");

const live = rows.filter((r) => r.status === "published" || r.status === "framed");
const count = (f: (r: Row) => boolean) => rows.filter(f).length;
const summary = {
  topics: rows.length,
  accounted: count((r) => !!r.url),
  canonical: inventory.pages.filter((p) => p.status === "canonical").length,
  merged: count((r) => r.status.startsWith("merged")),
  live: live.length,
  held: count((r) => r.status === "held"),
  completeLive: live.filter((r) => r.completeness === "complete").length,
  heldDrafts: count((r) => r.completeness === "complete draft, awaiting claim"),
  validationFailures: count((r) => r.validation === "FAIL"),
  overlapIssues: live.filter((r) => r.overlap && Number(r.overlap.split(" ")[0]) >= 0.2).length,
  claimLeaks: count((r) => r.claimSafety.startsWith("LEAK")),
  linkListHeavy: live.filter((r) => Number(r.linkListShare.replace("%", "")) > 25).length,
  pdfReliant: live.filter((r) => r.pdfReliance && Number(r.pdfReliance.replace("%", "")) > 35).length,
  notDeveloped: live.filter((r) => r.completeness !== "complete").length,
  manualReview: live.filter((r) => r.manualReview).length,
};

const md = [
  "# Topic Audit — all 400 PDF topics",
  "",
  `Generated by \`node scripts/audit-topics.ts\` on ${new Date().toISOString().slice(0, 10)} from the inventory, the authored content in \`content/pages\` and the quality gate (\`scripts/content-quality.ts\`). Machine-readable copy: [../topic-audit.csv](../topic-audit.csv). Method and rules: [19-topic-content.md](19-topic-content.md).`,
  "",
  "## Summary",
  "",
  "| Measure | Result |",
  "|---|---|",
  `| PDF topics accounted for | **${summary.accounted} / ${summary.topics}** (${summary.canonical} canonical pages, ${summary.merged} exact duplicates merged) |`,
  `| Live pages (published + framed) | ${summary.live} |`,
  `| Live pages with complete authored content | **${summary.completeLive} / ${summary.live}** |`,
  `| Live pages not yet complete | ${summary.notDeveloped} |`,
  `| Held pages (unconfirmed claim in the title) | ${summary.held}, of which complete drafts awaiting confirmation: ${summary.heldDrafts} |`,
  `| Pages failing validation | ${summary.validationFailures} |`,
  `| Live pages with prose overlap ≥ 0.20 against another page | ${summary.overlapIssues} |`,
  `| Pages leaking an unconfirmed claim or placeholder (title, H1, meta, breadcrumb, body) | ${summary.claimLeaks} |`,
  `| Live pages where link lists exceed 25% of body sections | ${summary.linkListHeavy} |`,
  `| Live pages relying on copied PDF sentences (> 35% of prose) | ${summary.pdfReliant} |`,
  `| Live pages flagged for manual review | ${summary.manualReview} |`,
  "",
  "Manual review flags are not failures. They mark framed pages, whose claim-free framing a person should confirm, and sentences naming GetSibu whose wording has little overlap with the PDF pages cited next to them. Each flagged sentence was fact-checked during authoring; the flag stays so a reviewer can see where paraphrase is loosest.",
  "",
  "## Every topic",
  "",
  "| PDF | Topic | URL | Status | Content | Completeness | Words | Body sections | FAQ | Sources | Validation | Max overlap | Claim safety | Link lists | PDF reliance | Review |",
  "|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|",
  ...rows.map((r) => `| ${r.n} | ${r.title.replace(/\|/g, "\\|")} | \`${r.url}\` | ${r.status} | ${r.content} | ${r.completeness} | ${r.words || ""} | ${r.bodySections || ""} | ${r.faq || ""} | ${r.sourceCoverage} | ${r.validation} | ${r.overlap} | ${r.claimSafety} | ${r.linkListShare} | ${r.pdfReliance} | ${r.manualReview} |`),
  "",
];
writeFileSync("docs/architecture/21-topic-audit.md", md.join("\n"));
console.log(JSON.stringify(summary, null, 1));
