/**
 * Quality checks for authored topic content (content/pages/**).
 *
 * Used by scripts/validate-inventory.ts for registered content, and by the authoring workflow to
 * check drafts before they are registered. Errors block; warnings are reported.
 *
 * What is checked (docs/architecture/19-topic-content.md):
 *   - shape: hero first, CTA last, an overview or definition, enough body sections, one FAQ with
 *     authored questions, at most one short related strip, no two identical kinds in a row
 *   - depth: body copy long enough to develop the topic
 *   - claims: every visible string passes the claims register; a held page may state only the claims
 *     that hold it (it renders nowhere until they are confirmed)
 *   - honesty: no invented figures, no interface mimicry, no marketing superlatives, no placeholders
 *   - language: British spelling, link text that names its destination
 *   - repetition: no sentence reused across pages (PDF statements aside), no FAQ question asked twice,
 *     and low prose overlap between any two pages
 */
import type { ContentSection, Inventory, InventoryPage, PageContent, SourcePage } from "../types/content.ts";
import { CLAIMS, DO_NOT_USE, isPublishable } from "../content/architecture/claims.ts";

export interface QualityReport {
  errors: string[];
  warnings: Map<string, string[]>;
  stats: Map<number, PageStats>;
  /** Errors and warnings attributed to each page they concern. */
  pageErrors: Map<number, string[]>;
  pageWarnings: Map<number, string[]>;
  /** The page each page overlaps most with (5-word shingles, Jaccard). */
  maxOverlap: Map<number, { page: number; jaccard: number }>;
}

export interface PageStats {
  words: number;
  sections: number;
  kinds: string[];
  bodySections: number;
  faqQuestions: number;
  relatedLinks: number;
  /** Share of prose words that are sentences copied from any PDF paragraph. */
  pdfShare: number;
  /** GetSibu statements whose wording is weakly supported by the section's cited PDF pages. */
  weakStatements: number;
  pdfSourcesCited: number;
  editorialCited: boolean;
}

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const wordBounded = (term: string) => new RegExp(`(?<![A-Za-z0-9-])${escapeRegExp(term)}(?![A-Za-z0-9-])`, "i");

/** Keys whose string values are data, not visible copy. */
const NON_COPY = new Set(["kind", "id", "layout", "surface", "density", "variant", "diagram", "focus", "icon", "cta", "path", "sources", "assetId", "aspect"]);

/** Visible strings of a section, rich text joined into one string per value. */
export function sectionStrings(section: ContentSection): string[] {
  const out: string[] = [];
  const isRich = (v: unknown) =>
    Array.isArray(v) && v.some((x) => !!x && typeof x === "object") && v.every((x) => typeof x === "string" || (!!x && typeof x === "object" && typeof (x as { text?: unknown }).text === "string" && Object.keys(x).length === 2));
  const visit = (value: unknown, key = ""): void => {
    if (NON_COPY.has(key)) return;
    if (typeof value === "string") return void out.push(value);
    if (isRich(value)) return void out.push((value as Array<string | { text: string }>).map((x) => (typeof x === "string" ? x : x.text)).join(""));
    if (Array.isArray(value)) return value.forEach((v) => visit(v));
    if (value && typeof value === "object") for (const [k, v] of Object.entries(value)) visit(v, k);
  };
  visit(section);
  return out;
}

/** Prose strings: sentences a reader reads (headings, labels and chips excluded). */
function proseStrings(section: ContentSection): string[] {
  const out: string[] = [];
  const PROSE = new Set(["lede", "intro", "body", "text", "answer", "detail", "summary", "situation", "outcome"]);
  const isRich = (v: unknown) => Array.isArray(v) && v.some((x) => !!x && typeof x === "object") && v.every((x) => typeof x === "string" || (!!x && typeof x === "object" && typeof (x as { text?: unknown }).text === "string" && Object.keys(x).length === 2));
  const join = (v: unknown) => (v as Array<string | { text: string }>).map((x) => (typeof x === "string" ? x : x.text)).join("");
  const visit = (value: unknown, key = ""): void => {
    if (NON_COPY.has(key)) return;
    if (PROSE.has(key)) {
      if (typeof value === "string") return void out.push(value);
      if (isRich(value)) return void out.push(join(value));
      if (Array.isArray(value)) return value.forEach((v) => (typeof v === "string" ? out.push(v) : isRich(v) ? out.push(join(v)) : visit(v)));
    }
    if (key === "points" && Array.isArray(value)) return value.forEach((v) => typeof v === "string" && out.push(v));
    if (Array.isArray(value)) return value.forEach((v) => visit(v));
    if (value && typeof value === "object") for (const [k, v] of Object.entries(value)) visit(v, k);
  };
  visit(section);
  return out;
}

const normalise = (s: string) =>
  s
    .toLowerCase()
    .replace(/[‘’]/g, "'")
    .replace(/[^a-z0-9' ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
const words = (s: string) => normalise(s).split(" ").filter(Boolean);
const sentences = (s: string) => s.split(/(?<=[.!?])\s+(?=[A-Z"“(])/).map((x) => x.trim()).filter(Boolean);

/* Language and honesty rules ------------------------------------------------------------------------ */

/** American spellings that have a British form in PDF terminology. */
const AMERICAN: Array<[RegExp, string]> = [
  [/\b(?!(?:size|sized|sizes|sizing|seize|seized|prize|citizen|citizens|capsize|oversized|resize|resized|resizing|downsize)\b)[a-z]{2,}iz(?:e|es|ed|ing|ation|ations|er|ers)\b/i, "-ise/-isation"],
  [/\b(?:analyz|paralyz|catalyz)\w*/i, "-yse"],
  [/\bcolor(?:s|ed|ful|ing)?\b/i, "colour"],
  [/\bbehavior(?:s|al)?\b/i, "behaviour"],
  [/\bcent(?:er|ers|ered|ering)\b/i, "centre"],
  [/\bfavor(?:s|ed|ite|ites|able)?\b/i, "favour"],
  [/\bcatalog(?:s|ed|ing)?\b/i, "catalogue"],
  [/\blabel(?:ed|ing)\b/i, "labelled/labelling"],
  [/\bmodel(?:ed|ing)\b/i, "modelled/modelling"],
  [/\btravel(?:ed|ing)\b/i, "travelled/travelling"],
  [/\bcancel(?:ed|ing)\b/i, "cancelled/cancelling"],
  [/\bfulfill(?:s|ment)?\b/i, "fulfil"],
  [/\benroll(?:s|ment)?\b/i, "enrol"],
  [/\bgray\b/i, "grey"],
  [/\bdefense\b/i, "defence"],
  [/\blicense\b(?= (?:is|to|for|of)\b)/i, "licence (noun)"],
];

/** Words that invent an interface GetSibu has not described. */
const UI_MIMICRY = /\b(?:click(?:s|ed|ing)?|button|buttons|dropdown|drop-down|checkbox|toggle|modal|pop-up|popup|sidebar|hover over|right-click|keyboard shortcut|settings page|menu item)\b/i;

/** Superlatives and filler the sources never make. */
const FLUFF = /\b(?:revolutionary|revolutionise|cutting-edge|game[- ]changer|game[- ]changing|world-class|best-in-class|industry-leading|market-leading|unparalleled|unrivalled|supercharge|turbocharge|blazing|lightning-fast|effortless(?:ly)?|seamless(?:ly)?|next-generation|state-of-the-art|guaranteed?|certified|compliant|trusted by|loved by|award-winning|magic(?:al)?|10x|instantly)\b/i;

/** Figures that look like facts: percentages, sizes, durations, multipliers, prices. */
const FIGURE = /(?:\d+(?:[.,]\d+)?\s*(?:%|percent|per cent|x\b|×|gb\b|tb\b|mb\b|ms\b|seconds?\b|minutes?\b|hours?\b|days?\b|weeks?\b|months?\b|years?\b|times\b))|[$£€₹]\s*\d/i;

const PLACEHOLDER = /\b(?:lorem|ipsum|todo|tbd|tbc|coming soon|placeholder|xxx)\b|\{\{|\[\[/i;

/** Link text that does not name its destination. */
const VAGUE_LINK = /^(?:read more|learn more|explore|click here|more|see more|find out more|details|here)$/i;

/** Stock phrases that could sit on any page and say nothing about its topic. */
const FILLER = /\b(?:in today's|fast-paced|ever-growing|ever-changing|digital landscape|at the end of the day|take (?:it|your \w+) to the next level|one-stop|whether you're|look no further|without further ado|in a nutshell|it goes without saying|a wide range of|cutting through the noise|the power of|unlock(?:s|ing)? the|harness(?:es|ing)? the power)\b/i;

/** Words ignored when measuring how much of a sentence its sources support. */
const STOPWORDS = new Set(
  "a an the and or but if then than that this these those it its it's is are was were be been being to of in on at by for with from as into onto over under about across through their them they there here your you we our can could may might will would should so such not no do does did has have had which who whom whose what when where why how each every all any more most less other another one two three also only just very same own getsibu".split(" "),
);
const stem = (w: string) => w.replace(/(?:ing|ed|es|s|ly)$/, "");

/** Headings too generic to tell a reader what a section says. */
const GENERIC_HEADING = /^(?:overview|features|benefits|introduction|details|more information|related|related pages|related topics|other topics|use cases?|workflow|how it works|key features)$/i;

/* Checks ---------------------------------------------------------------------------------------------- */

const FRAME = new Set(["hero", "faq", "related", "cta"]);

export function checkAuthoredContent(contents: PageContent[], inventory: Inventory, source: SourcePage[]): QualityReport {
  const allErrors: string[] = [];
  const warnings = new Map<string, string[]>();
  const stats: QualityReport["stats"] = new Map();
  const pageErrors = new Map<number, string[]>();
  const pageWarnings = new Map<number, string[]>();
  const maxOverlap: QualityReport["maxOverlap"] = new Map();
  /** Messages name their pages ("authored page 64", "pages 64, 63", "Pages 64 and 63"); each page gets its share. */
  const attribute = (target: Map<number, string[]>, message: string) => {
    for (const m of message.matchAll(/\b(?:page|pages|Pages) ([\d, and]+)/g)) {
      for (const n of m[1].split(/[^\d]+/).filter(Boolean).map(Number)) target.set(n, [...(target.get(n) ?? []), message]);
    }
  };
  const errors = {
    push(message: string) {
      allErrors.push(message);
      attribute(pageErrors, message);
    },
  };
  const warn = (category: string, message: string) => {
    warnings.set(category, [...(warnings.get(category) ?? []), message]);
    attribute(pageWarnings, message);
  };
  const byNumber = new Map(inventory.pages.map((p) => [p.number, p]));
  const sourceByNumber = new Map(source.map((s) => [s.number, s]));

  const pdfSentences = new Set(source.flatMap((s) => sentences(s.text)).map(normalise));
  const blockedClaims = CLAIMS.filter((c) => !isPublishable(c)).map((c) => ({ claim: c, patterns: c.detect.map((t) => ({ term: t, re: wordBounded(t) })) }));

  const claimProblem = (text: string, page: InventoryPage): string | null => {
    for (const item of DO_NOT_USE) if (text.includes(item.text)) return `placeholder "${item.text}"`;
    // A held page renders nowhere; its draft may state the claims that hold it, and nothing else unconfirmed.
    const own = page.publication === "held" ? new Set(page.claims) : new Set<string>();
    for (const { claim, patterns } of blockedClaims) {
      if (own.has(claim.id)) continue;
      const hit = patterns.find((p) => p.re.test(text));
      if (hit) return `unpublishable claim "${claim.id}" (matched "${hit.term}")`;
    }
    return null;
  };

  const sentenceOwners = new Map<string, Set<number>>();
  const questionOwners = new Map<string, number[]>();
  const shingles = new Map<number, Set<string>>();
  const headingOwners = new Map<string, Set<number>>();

  for (const content of contents) {
    const page = byNumber.get(content.page);
    const owner = `authored page ${content.page}`;
    if (!page) {
      errors.push(`${owner}: not in the inventory`);
      continue;
    }
    const home = page.role === "home";
    const where = (id: string) => `${owner} (${page.title}), section "${id}"`;
    const sections = content.sections;
    const kinds = sections.map((s) => s.kind);

    /* Shape */
    if (kinds[0] !== "hero") errors.push(`${owner}: first section must be the hero`);
    if (kinds.at(-1) !== "cta") errors.push(`${owner}: last section must be the CTA`);
    const ids = new Set<string>();
    sections.forEach((s, i) => {
      if (ids.has(s.id)) errors.push(`${where(s.id)}: duplicate section id`);
      ids.add(s.id);
      if (!home && i > 0 && s.kind === kinds[i - 1]) errors.push(`${where(s.id)}: two "${s.kind}" sections in a row`);
    });
    if (!home) {
      if (!kinds.includes("overview") && !kinds.includes("definition")) errors.push(`${owner}: needs an overview or a definition section`);
      const body = kinds.filter((k) => !FRAME.has(k));
      if (body.length < 3) errors.push(`${owner}: only ${body.length} body section(s); a topic page needs at least 3`);
      const faqs = sections.filter((s) => s.kind === "faq");
      if (faqs.length !== 1) errors.push(`${owner}: needs exactly one FAQ section (found ${faqs.length})`);
      for (const faq of faqs) if (faq.kind === "faq" && (faq.items.length < 3 || faq.items.length > 8)) errors.push(`${where(faq.id)}: ${faq.items.length} questions; use 3–8`);
      const related = sections.filter((s) => s.kind === "related");
      if (related.length > 1) errors.push(`${owner}: ${related.length} related sections; use at most one`);
      for (const r of related) if (r.kind === "related" && (r.pages.length < 2 || r.pages.length > 6)) errors.push(`${where(r.id)}: ${r.pages.length} related pages; use 2–6`);
      const checklists = sections.filter((s) => s.kind === "checklist" && s.items.every((item) => typeof item === "object" && item.page));
      if (checklists.length) errors.push(`${owner}: checklist "${checklists[0].id}" is only a list of page links; write information, not a directory`);
    }

    // App topology is a decision (route-decisions.ts): authored content links analytics by page, never by path.
    const serialised = JSON.stringify(sections);
    if (serialised.includes('"path":"/analytics"') || serialised.includes('"path":"/analytics/')) errors.push(`${owner}: hardcodes a route under /analytics; link a page by PDF number instead`);

    /* Per-section limits */
    for (const s of sections) {
      if (!s.sources?.length) errors.push(`${where(s.id)}: has no sources`);
      for (const src of s.sources ?? []) if (src.kind === "pdf" && !byNumber.has(src.page)) errors.push(`${where(s.id)}: cites missing PDF page ${src.page}`);
      switch (s.kind) {
        case "overview":
          if (s.body.length < 2) errors.push(`${where(s.id)}: overview needs at least 2 paragraphs`);
          if (s.keyPoints.items.length < 3 || s.keyPoints.items.length > 8) errors.push(`${where(s.id)}: ${s.keyPoints.items.length} key points; use 3–8`);
          for (const item of s.keyPoints.items) if (item.length > 64) errors.push(`${where(s.id)}: key point too long for a chip: "${item}"`);
          break;
        case "tabs":
          if (s.tabs.length < 2 || s.tabs.length > 5) errors.push(`${where(s.id)}: ${s.tabs.length} tabs; use 2–5`);
          for (const t of s.tabs) if (t.label.length > 28) errors.push(`${where(s.id)}: tab label too long: "${t.label}"`);
          break;
        case "accordion":
          if (s.items.length < 3 || s.items.length > 8) errors.push(`${where(s.id)}: ${s.items.length} accordion items; use 3–8`);
          break;
        case "scenario":
          if (s.steps.length < 3 || s.steps.length > 6) errors.push(`${where(s.id)}: ${s.steps.length} scenario steps; use 3–6`);
          break;
        case "process":
          if (s.steps.length < 3 || s.steps.length > 6) errors.push(`${where(s.id)}: ${s.steps.length} process steps; use 3–6`);
          break;
        case "capabilities":
          if (s.items.length < 3 || s.items.length > 9) errors.push(`${where(s.id)}: ${s.items.length} capability items; use 3–9`);
          break;
      }
      const heading = (s as { heading?: string }).heading;
      if (heading) {
        if (heading.toLowerCase() === page.seo.h1.toLowerCase()) errors.push(`${where(s.id)}: heading repeats the H1`);
        if (GENERIC_HEADING.test(heading.trim())) errors.push(`${where(s.id)}: heading "${heading}" is too generic; say what the section tells the reader`);
        const others = sections.filter((o) => o !== s && (o as { heading?: string }).heading?.toLowerCase() === heading.toLowerCase());
        if (others.length) errors.push(`${where(s.id)}: heading "${heading}" is used twice on the page`);
        if (s.kind !== "cta" && s.kind !== "faq" && s.kind !== "related") {
          const key = normalise(heading);
          headingOwners.set(key, (headingOwners.get(key) ?? new Set()).add(content.page));
        }
      }
    }

    // The introduction is the page's own explanation, not its PDF paragraph pasted in.
    const hero = sections[0];
    if (!home && hero?.kind === "hero" && hero.lede) {
      const lede = normalise(hero.lede);
      const ownText = normalise(page.sourceText);
      if (lede === ownText || sentences(hero.lede).every((s) => pdfSentences.has(normalise(s)))) errors.push(`${owner}: hero lede repeats PDF text; write the page's own introduction`);
      else if (ownText.length > 40 && lede.includes(ownText)) errors.push(`${owner}: hero lede contains the whole PDF paragraph`);
    }

    /* Copy: claims, honesty, language, links */
    let pageWords = 0;
    let weakStatements = 0;
    const prose: string[] = [];
    for (const s of sections) {
      const strings = sectionStrings(s);
      // Support: a sentence that names GetSibu should reuse the wording of the PDF pages its section cites.
      const cited = (s.sources ?? []).flatMap((src) => (src.kind === "pdf" ? [sourceByNumber.get(src.page)?.text ?? ""] : []));
      const citedWords = new Set(words(cited.join(" ")).map(stem));
      for (const sentence of proseStrings(s).flatMap(sentences)) {
        if (!/\bGetSibu\b/.test(sentence) || s.kind === "cta") continue;
        const content = words(sentence).filter((w) => !STOPWORDS.has(w) && w.length > 2);
        if (content.length < 4) continue;
        const supported = content.filter((w) => citedWords.has(stem(w))).length / content.length;
        if (supported < 0.34) {
          weakStatements++;
          warn("GetSibu statements weakly supported by the cited PDF pages (fact-check these)", `page ${page.number} "${sentence.slice(0, 110)}" (${Math.round(supported * 100)}% of its words appear in the cited pages)`);
        }
      }
      for (const text of strings) {
        const filler = text.match(FILLER);
        if (filler) errors.push(`${where(s.id)}: stock phrase "${filler[0]}" says nothing about the topic`);
        const claim = claimProblem(text, page);
        if (claim) errors.push(`${where(s.id)}: ${claim} in "${text.slice(0, 90)}"`);
        if (PLACEHOLDER.test(text)) errors.push(`${where(s.id)}: placeholder text in "${text.slice(0, 90)}"`);
        const ui = text.match(UI_MIMICRY);
        if (ui) errors.push(`${where(s.id)}: describes an interface ("${ui[0]}") in "${text.slice(0, 90)}"`);
        const fluff = text.match(FLUFF);
        if (fluff) errors.push(`${where(s.id)}: superlative or unsupported word "${fluff[0]}" in "${text.slice(0, 90)}"`);
        const figure = text.match(FIGURE);
        // A held draft may state the figures its own unconfirmed claims make (it publishes only once they are confirmed).
        const ownFigure = figure && page.publication === "held" && CLAIMS.some((c) => page.claims.includes(c.id) && c.detect.some((t) => wordBounded(t).test(figure[0].trim()) || figure[0].trim().toLowerCase().startsWith(t.toLowerCase())));
        if (figure && !ownFigure) errors.push(`${where(s.id)}: figure "${figure[0]}" looks like a fact; state figures only from confirmed claims`);
        for (const [re, british] of AMERICAN) {
          const m = text.match(re);
          if (m) errors.push(`${where(s.id)}: American spelling "${m[0]}" (use ${british})`);
        }
        if (/[—]\s*$/.test(text)) warn("Copy ending in a dash", `${where(s.id)}: "${text.slice(-40)}"`);
      }
      // Labels on links and actions must name their destination.
      const labels: string[] = [];
      const collect = (v: unknown): void => {
        if (Array.isArray(v)) return v.forEach(collect);
        if (v && typeof v === "object") {
          const r = v as Record<string, unknown>;
          if (typeof r.label === "string" && (typeof r.page === "number" || r.kind === "route" || r.kind === "page")) labels.push(r.label);
          Object.values(r).forEach(collect);
        }
      };
      collect(s);
      for (const label of labels) if (VAGUE_LINK.test(label.trim())) errors.push(`${where(s.id)}: link text "${label}" does not name its destination`);

      if (s.kind === "cta" || s.kind === "related") continue;
      const sectionProse = proseStrings(s);
      prose.push(...sectionProse);
      pageWords += sectionStrings(s).reduce((n, text) => n + words(text).length, 0);
      if (s.kind === "faq") {
        for (const item of s.items) {
          const key = normalise(item.question);
          questionOwners.set(key, [...(questionOwners.get(key) ?? []), content.page]);
        }
      }
    }

    // Framed pages never publish their own PDF statement, verbatim or rebuilt from other pages' facts.
    const contentWords = (text: string) => new Set(words(text).filter((w) => !STOPWORDS.has(w) && w.length > 2).map(stem));
    if (page.publication === "framed") {
      const own = normalise(page.sourceText).slice(0, 60);
      if (prose.some((p) => normalise(p).includes(own))) errors.push(`${owner}: framed page repeats its own unconfirmed PDF statement`);
      const ownWords = contentWords(page.sourceText);
      for (const sentence of prose.flatMap(sentences)) {
        const sw = contentWords(sentence);
        const covered = [...ownWords].filter((w) => sw.has(w)).length / Math.max(1, ownWords.size);
        if (ownWords.size >= 6 && covered >= 0.6) errors.push(`${owner}: framed page rebuilds its withheld PDF paragraph in "${sentence.slice(0, 90)}"`);
      }
    }

    // Self-reference describes the page instead of the topic.
    for (const text of prose) {
      const self = text.match(/\b(?:this page|on this page|the page below|in this article|this guide covers)\b/i);
      if (self) errors.push(`${owner}: "${self[0]}" describes the page instead of the topic`);
    }

    // One fact, one place: near-identical sentences within a page restate a fact instead of developing the topic.
    const pageSentences = prose.flatMap(sentences).map((s) => ({ s, w: contentWords(s) })).filter((x) => x.w.size >= 6);
    for (let i = 0; i < pageSentences.length; i++) {
      for (let j = i + 1; j < pageSentences.length; j++) {
        const a = pageSentences[i].w;
        const b = pageSentences[j].w;
        const shared = [...a].filter((w) => b.has(w)).length;
        const similarity = shared / (a.size + b.size - shared);
        if (similarity >= 0.6) errors.push(`${owner}: the same point is made twice ("${pageSentences[i].s.slice(0, 60)}" / "${pageSentences[j].s.slice(0, 60)}")`);
        else if (similarity >= 0.45) warn("Sentences on one page that restate the same point", `page ${content.page}: "${pageSentences[i].s.slice(0, 60)}" / "${pageSentences[j].s.slice(0, 60)}"`);
      }
    }

    const minimum = home ? 0 : page.pageType === "faq" ? 450 : 650;
    if (pageWords < minimum) errors.push(`${owner}: ${pageWords} words of body copy; a ${page.pageType} page needs at least ${minimum}`);
    else if (!home && pageWords < minimum + 200) warn("Authored pages near the minimum length", `page ${content.page} ${page.title}: ${pageWords} words`);

    // How much of the prose is PDF sentences (this page's or other topics'): the page must explain, not assemble.
    let proseWords = 0;
    let pdfWords = 0;
    for (const text of prose) {
      for (const sentence of sentences(text)) {
        const n = words(sentence).length;
        proseWords += n;
        if (pdfSentences.has(normalise(sentence))) pdfWords += n;
      }
    }
    const pdfShare = proseWords ? pdfWords / proseWords : 0;
    if (!home && pdfShare > 0.35) errors.push(`${owner}: ${Math.round(pdfShare * 100)}% of its prose is copied PDF sentences; explain the topic in the page's own words`);
    else if (!home && pdfShare > 0.2) warn("Pages leaning on copied PDF sentences (20–35% of prose)", `page ${content.page} ${page.title}: ${Math.round(pdfShare * 100)}%`);

    const faq = sections.find((s) => s.kind === "faq");
    const related = sections.find((s) => s.kind === "related");
    const pdfCited = new Set(sections.flatMap((s) => (s.sources ?? []).flatMap((src) => (src.kind === "pdf" ? [src.page] : []))));
    stats.set(content.page, {
      words: pageWords,
      sections: sections.length,
      kinds,
      bodySections: kinds.filter((k) => !FRAME.has(k)).length,
      faqQuestions: faq?.kind === "faq" ? faq.items.length : 0,
      relatedLinks: related?.kind === "related" ? related.pages.length : 0,
      pdfShare,
      weakStatements,
      pdfSourcesCited: pdfCited.size,
      editorialCited: sections.some((s) => (s.sources ?? []).some((src) => src.kind === "editorial")),
    });

    for (const text of prose) {
      for (const sentence of sentences(text)) {
        const key = normalise(sentence);
        if (key.split(" ").length < 9 || pdfSentences.has(key)) continue;
        sentenceOwners.set(key, (sentenceOwners.get(key) ?? new Set()).add(content.page));
      }
    }
    const tokens = words(prose.filter((p) => !pdfSentences.has(normalise(p))).join(" "));
    const set = new Set<string>();
    for (let i = 0; i + 5 <= tokens.length; i++) set.add(tokens.slice(i, i + 5).join(" "));
    shingles.set(content.page, set);
  }

  /* Repetition across pages */
  for (const [sentence, owners] of sentenceOwners) {
    if (owners.size > 1) errors.push(`Sentence reused on pages ${[...owners].join(", ")}: "${sentence.slice(0, 100)}"`);
  }
  for (const [question, owners] of questionOwners) {
    if (owners.length > 1) errors.push(`FAQ question asked on more than one page (${owners.join(", ")}): "${question}"`);
  }
  for (const [heading, owners] of headingOwners) {
    if (owners.size > 3) warn("Section headings used on more than three pages", `"${heading}" on ${owners.size} pages`);
  }
  const entries = [...shingles.entries()];
  for (let i = 0; i < entries.length; i++) {
    for (let j = i + 1; j < entries.length; j++) {
      const [a, sa] = entries[i];
      const [b, sb] = entries[j];
      if (!sa.size || !sb.size) continue;
      let shared = 0;
      for (const s of sa) if (sb.has(s)) shared++;
      const jaccard = shared / (sa.size + sb.size - shared);
      for (const [x, y] of [[a, b], [b, a]]) if (jaccard > (maxOverlap.get(x)?.jaccard ?? -1)) maxOverlap.set(x, { page: y, jaccard });
      if (jaccard >= 0.2) errors.push(`Pages ${a} and ${b} overlap (${jaccard.toFixed(2)} prose overlap); give each its own angle`);
      else if (jaccard >= 0.1) warn("Page pairs with noticeable prose overlap", `Pages ${a} and ${b}: ${jaccard.toFixed(2)}`);
    }
  }
  return { errors: allErrors, warnings, stats, pageErrors, pageWarnings, maxOverlap };
}
