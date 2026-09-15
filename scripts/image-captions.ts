/**
 * Claim-safe alt text and captions for topic images.
 *
 *   node scripts/image-captions.ts [--sources <path-to-source-map.json>]
 *
 * Topic images (public/images/topics) are generated illustrations, not captures of GetSibu. Their alt
 * text and captions are visible copy, so they follow the same rules as page content: captions say
 * "Illustration", they describe the scene rather than a GetSibu capability, and they never quote a PDF
 * paragraph (a framed page's paragraph states an unconfirmed claim). Section captions may name the
 * section's reviewed, authored heading.
 *
 * Alt text describes what the image actually shows. Each image is a crop of a source photo, reviewed in
 * content/architecture/image-sources.ts. `--sources` takes a JSON map of image path → source photo file
 * (reproduced from scripts/generate-human-images.ts) and records each image's `source`; images whose source
 * is recorded get that photo's alt text and scene, others fall back to a neutral scene for their category.
 * For search and context, every alt also names GetSibu and, on live pages, the page's topic title.
 *
 * Run directly, this rewrites only the `alt`, caption (`purpose` / `heroPurpose`) and `source` fields of the
 * existing content/generated/image-matrix.json and image-inventory.json, keeping every path and prompt,
 * and fails if any resulting string contains an unpublishable claim or a placeholder, or an alt misses the
 * site name or its live topic. It then prints how
 * many live heroes use each source verdict.
 * scripts/build-image-inventory.ts uses the same functions when it regenerates the files.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import type { CategoryId, ImageInventoryEntry, PageContent, TopicImageMatrixRow } from "../types/content.ts";
import { CLAIMS, DO_NOT_USE, isPublishable } from "../content/architecture/claims.ts";
import { SOURCE_REVIEW } from "../content/architecture/image-sources.ts";

/** A neutral description of the kind of scene each category's illustrations show. No capability claims. */
const SCENE: Record<CategoryId, string> = {
  home: "a creative team working with a shared media library",
  platform: "a creative studio working across video, images and documents",
  "search-discovery": "a person looking through a large visual archive",
  ai: "a workspace where visual material is being reviewed",
  collaboration: "a creative team reviewing work together",
  "asset-management": "creative files being organised in an archive",
  "storage-ingestion": "media files arriving in a central library",
  "permissions-multi-tenancy": "separate project spaces within one organisation",
  analytics: "a team looking at how a creative library is used",
  "use-cases": "a professional creative working environment",
  integrations: "creative tools and a shared library in one workflow",
  developers: "a developer building software for creative teams",
  migration: "an existing archive being reorganised",
  "architecture-performance": "the infrastructure behind a media platform",
  "security-compliance": "people looking after access to valuable creative work",
  "pricing-plans": "a team weighing up the cost of a creative library",
  "business-value": "creative leaders planning how their team works",
  resources: "a reference library about managing creative assets",
  faq: "a person looking for a clear answer",
  conversion: "a creative team setting up a shared library",
};

const reviewed = (source?: string) => (source ? SOURCE_REVIEW[source] : undefined);

/** The source key of a photo file: its name without the generator's timestamp and extension. */
export const sourceKey = (file: string) => file.split(/[\\/]/).at(-1)!.replace(/(_\d+)?\.[a-z]+$/i, "");

export const heroCaption = (category: CategoryId, source?: string) => `Illustration: ${reviewed(source)?.scene ?? SCENE[category]}`;
export const sectionCaption = (category: CategoryId, heading?: string, source?: string) =>
  heading ? `Illustration accompanying “${heading}”` : heroCaption(category, source);

/**
 * Alt text names the site and the page's topic, then says what the image shows:
 *   GetSibu illustration for “<title>”: <the reviewed photo's alt, or a photograph of the category scene>
 * A section image adds its reviewed heading. The title and heading are quoted so the alt reads as an
 * illustration for that page, never as a GetSibu screen. Pass a title only for live pages: a held page's
 * title states its unconfirmed claim, so its images get "GetSibu illustration: …" alone.
 */
export const SITE_NAME = "GetSibu";
const shows = (category: CategoryId, source?: string) => {
  const photo = reviewed(source)?.alt;
  return photo ? photo.charAt(0).toLowerCase() + photo.slice(1) : `a photograph of ${SCENE[category]}`;
};
const illustrationFor = (title?: string, heading?: string) => {
  const named = [heading, title].some((t) => t?.includes(SITE_NAME));
  const lead = named ? "Illustration" : `${SITE_NAME} illustration`;
  if (title && heading) return `${lead} for “${heading}”, part of “${title}”`;
  if (title || heading) return `${lead} for “${title ?? heading}”`;
  return `${SITE_NAME} illustration`;
};
export const heroAlt = (category: CategoryId, source?: string, title?: string) => `${illustrationFor(title)}: ${shows(category, source)}`;
export const sectionAlt = (category: CategoryId, heading?: string, source?: string, title?: string) =>
  `${illustrationFor(title, heading)}: ${shows(category, source)}`;
/** Returns a problem with an image's alt text for SEO and context (site name, topic title), or null. */
export function altProblem(alt: string, title?: string): string | null {
  if (!alt.includes(SITE_NAME)) return `alt does not name ${SITE_NAME}`;
  if (title && !alt.includes(`“${title}”`)) return `alt does not name its topic “${title}”`;
  return null;
}

/** The authored heading of the first section of a kind on a page, if any. */
export function authoredHeading(content: PageContent | undefined, kind: string): string | undefined {
  const section = content?.sections.find((s) => s.kind === kind);
  return section && "heading" in section && typeof section.heading === "string" ? section.heading : undefined;
}

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const blocked = CLAIMS.filter((c) => !isPublishable(c)).flatMap((c) => c.detect.map((t) => ({ id: c.id, re: new RegExp(`(?<![A-Za-z0-9-])${escapeRegExp(t)}(?![A-Za-z0-9-])`, "i") })));
/** Returns a problem with a caption or alt string, or null. */
export function captionProblem(text: string): string | null {
  for (const item of DO_NOT_USE) if (text.includes(item.text)) return `placeholder "${item.text}"`;
  const hit = blocked.find((b) => b.re.test(text));
  if (hit) return `unpublishable claim "${hit.id}"`;
  return null;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const { AUTHORED_PAGES } = await import("../content/pages/registry.ts");
  const authored = new Map(AUTHORED_PAGES.map((c) => [c.page, c]));
  const inventory: { pages: Array<{ number: number; title: string; category: CategoryId; status: string; mergedInto?: number; publication: string }> } = JSON.parse(readFileSync("content/generated/inventory.json", "utf8"));
  const byNumber = new Map(inventory.pages.map((p) => [p.number, p]));
  const matrix: TopicImageMatrixRow[] = JSON.parse(readFileSync("content/generated/image-matrix.json", "utf8"));
  const entries: ImageInventoryEntry[] = JSON.parse(readFileSync("content/generated/image-inventory.json", "utf8"));
  const byPath = new Map(entries.map((e) => [e.path, e]));
  const flag = process.argv.indexOf("--sources");
  if (flag > 0) {
    const map: Record<string, string> = JSON.parse(readFileSync(process.argv[flag + 1], "utf8"));
    for (const [path, file] of Object.entries(map)) {
      const entry = byPath.get(path);
      if (entry) entry.source = sourceKey(file);
    }
  }
  const problems: string[] = [];
  const unreviewed = new Set<string>();
  const check = (where: string, text: string) => {
    const problem = captionProblem(text);
    if (problem) problems.push(`${where}: ${problem} in "${text}"`);
  };
  const checkAlt = (where: string, alt: string, title?: string) => {
    const problem = altProblem(alt, title);
    if (problem) problems.push(`${where}: ${problem} in "${alt}"`);
  };
  const liveHeroes = new Map<string, number>();
  for (const row of matrix) {
    const page = byNumber.get(row.topicNumber);
    const canonical = page?.status === "merged" ? byNumber.get(page.mergedInto!) : page;
    const category = (canonical ?? page)?.category ?? row.category;
    // Held pages render nowhere; their captions never name a heading (a held draft's heading may state its claim).
    const content = canonical?.publication === "held" ? undefined : authored.get(canonical?.number ?? row.topicNumber);
    // Likewise only a live page's title is named in alt text.
    const title = canonical && canonical.publication !== "held" ? canonical.title : undefined;
    const heroEntry = byPath.get(row.heroImage);
    const heroSource = heroEntry?.source;
    if (heroSource && !SOURCE_REVIEW[heroSource]) unreviewed.add(heroSource);
    row.heroAlt = heroAlt(category, heroSource, title);
    row.heroPurpose = heroCaption(category, heroSource);
    if (heroEntry) Object.assign(heroEntry, { alt: row.heroAlt, purpose: row.heroPurpose });
    check(`topic ${row.topicNumber} hero`, `${row.heroAlt} | ${row.heroPurpose}`);
    checkAlt(`topic ${row.topicNumber} hero`, row.heroAlt, title);
    if (page && page.status !== "merged" && page.publication !== "held") {
      const verdict = heroSource ? (SOURCE_REVIEW[heroSource]?.verdict ?? "unreviewed") : "unknown source";
      liveHeroes.set(verdict, (liveHeroes.get(verdict) ?? 0) + 1);
    }
    for (const image of row.sectionImages) {
      const entry = byPath.get(image.path);
      if (entry?.source && !SOURCE_REVIEW[entry.source]) unreviewed.add(entry.source);
      const heading = authoredHeading(content, image.section);
      image.alt = sectionAlt(category, heading, entry?.source, title);
      image.purpose = sectionCaption(category, heading, entry?.source);
      if (entry) Object.assign(entry, { alt: image.alt, purpose: image.purpose });
      check(`topic ${row.topicNumber} ${image.section}`, `${image.alt} | ${image.purpose}`);
      checkAlt(`topic ${row.topicNumber} ${image.section}`, image.alt, title);
    }
  }
  for (const [key, review] of Object.entries(SOURCE_REVIEW)) check(`source ${key}`, `${review.alt} | ${review.scene}`);
  if (problems.length) {
    console.error(`✖ ${problems.length} caption problem(s)`);
    for (const p of problems.slice(0, 20)) console.error(`   ${p}`);
    process.exit(1);
  }
  writeFileSync("content/generated/image-matrix.json", JSON.stringify(matrix, null, 2));
  writeFileSync("content/generated/image-inventory.json", JSON.stringify(entries, null, 2));
  console.log(`✔ Claim-safe captions and alt text for ${matrix.length} topics (${entries.length} images); paths and prompts unchanged`);
  if (unreviewed.size) console.log(`⚠ ${unreviewed.size} source photo(s) not reviewed in image-sources.ts: ${[...unreviewed].join(", ")}`);
  console.log(`Live hero images by source verdict: ${[...liveHeroes].map(([v, n]) => `${v} ${n}`).join(", ")}`);
}
