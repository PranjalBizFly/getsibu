/**
 * Verifies the built site against the inventory. Runs after `next build` (npm run build → postbuild).
 *
 *   npm run verify:build
 *
 * Fails on any mismatch between:
 *   - inventory ↔ prerendered routes: every live page, hub and built company page is generated;
 *     held pages, merged duplicates and redirect sources are not
 *   - inventory ↔ sitemap.xml: exactly the indexable live pages, hubs and indexable company pages,
 *     as absolute URLs on SITE_URL, without duplicates
 *   - inventory ↔ redirects: every inventory redirect is served with its status (308 permanent,
 *     307 temporary), lands on a generated route, and never chains
 *   - page metadata: title, description, canonical, Open Graph, Twitter, robots, one H1 matching the
 *     inventory, breadcrumb JSON-LD, FAQPage answers equal to the visible answer
 *   - claim safety: no unpublishable claim term and no placeholder anywhere in the HTML, the RSC
 *     payloads, the search index or the sitemap
 *   - robots.txt: crawlable in production with a sitemap reference; closed elsewhere
 */
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import type { Inventory, RouteMatrixRow } from "../types/content.ts";
import { CLAIMS, DO_NOT_USE, isPublishable } from "../content/architecture/claims.ts";
import { ABOUT_PAGE, CONTACT_PAGE } from "../content/architecture/company-pages.ts";
import { SUPPORTING_PAGES } from "../content/architecture/sections.ts";

const APP = ".next/server/app";
const IS_PRODUCTION = process.env.SITE_ENV === "production";
if (IS_PRODUCTION && !process.env.NEXT_PUBLIC_SITE_URL) throw new Error("SITE_ENV=production requires NEXT_PUBLIC_SITE_URL");
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://getsibu.com").replace(/\/$/, "");
const inventory: Inventory = JSON.parse(readFileSync("content/generated/inventory.json", "utf8"));
const errors: string[] = [];
const error = (message: string) => errors.push(message);
const absolute = (path: string) => `${SITE_URL}${path === "/" ? "" : path}`;
const fileFor = (path: string, ext: string) => join(APP, path === "/" ? `index${ext}` : `${path.slice(1)}${ext}`);
const decode = (s: string) => s.replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;|&#xA0;/g, " ");
const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const canonical = inventory.pages.filter((p) => p.status === "canonical");
const live = canonical.filter((p) => p.publication !== "held");
const held = canonical.filter((p) => p.publication === "held");
const company = [ABOUT_PAGE, CONTACT_PAGE];
/** Generated utility pages: /site-search and the /sitemap directory. */
const utility = SUPPORTING_PAGES.filter((s) => s.contentStatus === "generated");

/* Routes ------------------------------------------------------------------------------------------ */

const manifest = JSON.parse(readFileSync(".next/prerender-manifest.json", "utf8")) as { routes: Record<string, unknown> };
const generated = new Set(Object.keys(manifest.routes).filter((route) => !route.startsWith("/_") && !/\.(xml|txt|json|png)$/.test(route)));
const expected = new Set(["/", ...live.map((p) => p.path), ...inventory.indexes.map((i) => i.path), ...company.map((c) => c.path), ...utility.map((u) => u.path)]);
for (const path of expected) if (!generated.has(path)) error(`Route ${path} is in the inventory but was not generated`);
for (const path of generated) if (!expected.has(path)) error(`Route ${path} was generated but is not a live inventory page, hub or company page`);
for (const p of held) if (generated.has(p.path)) error(`Held page ${p.number} (${p.path}) was generated`);

/* Sitemap ----------------------------------------------------------------------------------------- */

const sitemapXml = readFileSync(join(APP, "sitemap.xml.body"), "utf8");
const sitemapUrls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const expectedSitemap = new Set(
  [
    ...live.filter((p) => p.seo.sitemap).map((p) => p.path),
    ...inventory.indexes.filter((i) => i.seo.sitemap).map((i) => i.path),
    ...company.filter((c) => c.indexable).map((c) => c.path),
    ...utility.filter((u) => u.indexable).map((u) => u.path),
  ].map(absolute),
);
if (new Set(sitemapUrls).size !== sitemapUrls.length) error("sitemap.xml contains duplicate URLs");
for (const url of sitemapUrls) {
  if (!url.startsWith(SITE_URL)) error(`sitemap.xml URL ${url} is not on ${SITE_URL}`);
  if (!expectedSitemap.has(url)) error(`sitemap.xml lists ${url}, which is not an indexable live page`);
}
for (const url of expectedSitemap) if (!sitemapUrls.includes(url)) error(`sitemap.xml is missing ${url}`);

/* Redirects --------------------------------------------------------------------------------------- */

const routesManifest = JSON.parse(readFileSync(".next/routes-manifest.json", "utf8")) as { redirects: Array<{ source: string; destination: string; statusCode: number; internal?: boolean }> };
const served = new Map(routesManifest.redirects.filter((r) => !r.internal).map((r) => [r.source, r]));
for (const r of inventory.redirects) {
  const s = served.get(r.source);
  if (!s) error(`Redirect ${r.source} is in the inventory but not served`);
  else {
    if (s.destination !== r.destination) error(`Redirect ${r.source} serves ${s.destination}, inventory says ${r.destination}`);
    if (s.statusCode !== (r.permanent ? 308 : 307)) error(`Redirect ${r.source} serves ${s.statusCode}, expected ${r.permanent ? 308 : 307}`);
  }
  if (!generated.has(r.destination)) error(`Redirect ${r.source} → ${r.destination} does not land on a generated route`);
  if (served.has(r.destination)) error(`Redirect chain from ${r.source} through ${r.destination}`);
  if (generated.has(r.source)) error(`Redirect source ${r.source} is also a generated route`);
}
for (const p of held) if (served.get(p.path)?.statusCode !== 307) error(`Held page ${p.path} is not served as a temporary redirect`);

/* Metadata ---------------------------------------------------------------------------------------- */

type PageMeta = { path: string; title: string; description: string; h1: string; robots: "index,follow" | "noindex,follow"; breadcrumb?: Array<{ label: string; path: string }>; faq?: boolean };
const metas: PageMeta[] = [
  ...live.map((p) => ({ path: p.path, title: p.seo.title, description: p.seo.description, h1: p.seo.h1, robots: p.seo.robots, breadcrumb: p.role === "home" ? undefined : p.breadcrumb, faq: p.pageType === "faq" })),
  ...inventory.indexes.map((i) => ({ path: i.path, title: i.seo.title, description: i.seo.description, h1: i.seo.h1, robots: i.seo.robots, breadcrumb: i.breadcrumb })),
];
const titles = new Map<string, string>();
const descriptions = new Map<string, string>();
const attr = (html: string, pattern: RegExp) => {
  const m = html.match(pattern);
  return m ? decode(m[1]) : null;
};
for (const meta of metas) {
  const file = fileFor(meta.path, ".html");
  if (!existsSync(file)) continue; // reported as a missing route above
  const html = readFileSync(file, "utf8");
  const where = `${meta.path}`;
  const title = attr(html, /<title>([^<]*)<\/title>/);
  if (title !== meta.title) error(`${where}: <title> is "${title}", inventory says "${meta.title}"`);
  const description = attr(html, /<meta name="description" content="([^"]*)"/);
  if (description !== meta.description) error(`${where}: meta description differs from the inventory`);
  if (attr(html, /<link rel="canonical" href="([^"]*)"/) !== absolute(meta.path)) error(`${where}: canonical is not ${absolute(meta.path)}`);
  if (attr(html, /<meta property="og:title" content="([^"]*)"/) !== meta.title) error(`${where}: og:title differs from the title`);
  if (attr(html, /<meta property="og:description" content="([^"]*)"/) !== meta.description) error(`${where}: og:description differs from the description`);
  if (attr(html, /<meta property="og:url" content="([^"]*)"/) !== absolute(meta.path)) error(`${where}: og:url is not canonical`);
  if (!attr(html, /<meta property="og:image" content="([^"]*)"/)) error(`${where}: no og:image`);
  if (attr(html, /<meta name="twitter:card" content="([^"]*)"/) !== "summary_large_image" || !attr(html, /<meta name="twitter:image" content="([^"]*)"/)) error(`${where}: incomplete Twitter card`);
  const robots = attr(html, /<meta name="robots" content="([^"]*)"/) ?? "";
  const wantIndex = IS_PRODUCTION && meta.robots === "index,follow";
  if (wantIndex ? /noindex/.test(robots) : !/noindex/.test(robots)) error(`${where}: robots "${robots}" (expected ${wantIndex ? "indexable" : "noindex"})`);
  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => decode(m[1].replace(/<[^>]+>/g, "")).trim());
  if (h1s.length !== 1 || h1s[0] !== meta.h1) error(`${where}: expected one H1 "${meta.h1}", found ${JSON.stringify(h1s)}`);
  if (meta.robots === "index,follow") {
    if (titles.has(meta.title)) error(`${where}: title duplicates ${titles.get(meta.title)}`);
    titles.set(meta.title, where);
    if (descriptions.has(meta.description)) error(`${where}: description duplicates ${descriptions.get(meta.description)}`);
    descriptions.set(meta.description, where);
  }
  // Structured data: valid JSON; breadcrumb matches the inventory; FAQ answers match the visible answer.
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  let graph: Array<Record<string, unknown>> = [];
  for (const block of blocks) {
    try {
      graph = graph.concat((JSON.parse(block) as { "@graph": Array<Record<string, unknown>> })["@graph"] ?? []);
    } catch {
      error(`${where}: invalid JSON-LD`);
    }
  }
  const webPage = graph.find((node) => ["WebPage", "FAQPage", "CollectionPage", "AboutPage"].includes(String(node["@type"]))) as Record<string, unknown> | undefined;
  if (!webPage) error(`${where}: no page node in JSON-LD`);
  if (meta.breadcrumb && webPage) {
    const items = ((webPage.breadcrumb as { itemListElement?: Array<{ name: string; item: string }> })?.itemListElement ?? []).map((i) => `${i.name}|${i.item}`);
    const want = meta.breadcrumb.map((b) => `${b.label}|${absolute(b.path)}`);
    if (JSON.stringify(items) !== JSON.stringify(want)) error(`${where}: breadcrumb JSON-LD does not match the inventory breadcrumb`);
  }
  if (webPage?.["@type"] === "FAQPage") {
    const answer = (webPage.mainEntity as { acceptedAnswer?: { text?: string } })?.acceptedAnswer?.text ?? "";
    // Tags become spaces (separate paragraphs, inline links); spaces before punctuation are closed up.
    const normalise = (text: string) => text.replace(/\s+/g, " ").replace(/ ([.,;:!?])/g, "$1").trim();
    const visible = normalise(decode(html.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<[^>]+>/g, " ")));
    if (!answer || !visible.includes(normalise(answer))) error(`${where}: FAQPage answer is not the visible answer`);
  }
  if (meta.faq === false && webPage?.["@type"] === "FAQPage") error(`${where}: FAQPage on a page that is not an FAQ`);
  // Heading order in the page content: one H1 first, then no level skipped (h2 → h4) on the way down.
  const main = html.match(/<main[\s\S]*<\/main>/)?.[0] ?? "";
  const levels = [...main.matchAll(/<h([1-6])[\s>]/g)].map((m) => Number(m[1]));
  if (levels[0] !== 1) error(`${where}: the first heading in <main> is h${levels[0]}, not h1`);
  levels.forEach((level, i) => {
    if (i > 0 && level > levels[i - 1] + 1) error(`${where}: heading level skips from h${levels[i - 1]} to h${level}`);
  });
}

/* Claim safety and placeholders ------------------------------------------------------------------- */

const blocked = CLAIMS.filter((c) => !isPublishable(c)).flatMap((c) => c.detect.map((term) => ({ claim: c.id, term, pattern: new RegExp(`(?<![A-Za-z0-9-])${escapeRegExp(term)}(?![A-Za-z0-9-])`, "i") })));
const scanTargets = [
  ...[...generated].flatMap((path) => [fileFor(path, ".html"), fileFor(path, ".rsc")]),
  join(APP, "search-index.json.body"),
  join(APP, "sitemap.xml.body"),
  join(APP, "robots.txt.body"),
].filter((file) => existsSync(file));
const leaks = new Map<string, Set<string>>();
for (const file of scanTargets) {
  const text = decode(readFileSync(file, "utf8"));
  for (const b of blocked) {
    if (b.pattern.test(text)) {
      const key = `claim "${b.term}" (${b.claim})`;
      leaks.set(key, (leaks.get(key) ?? new Set()).add(file));
    }
  }
  for (const item of DO_NOT_USE) {
    if (text.includes(item.text)) {
      const key = `placeholder "${item.text}"`;
      leaks.set(key, (leaks.get(key) ?? new Set()).add(file));
    }
  }
}
for (const [key, files] of leaks) error(`Built output contains ${key} in ${files.size} file(s), e.g. ${[...files][0]}`);

/* Route matrix ------------------------------------------------------------------------------------ */

// Every URL the site answers behaves as its row in content/generated/route-matrix.json says.
const matrix: RouteMatrixRow[] = JSON.parse(readFileSync("content/generated/route-matrix.json", "utf8")).rows;
const searchIndex: { documents: Array<{ path: string }> } = JSON.parse(readFileSync(join(APP, "search-index.json.body"), "utf8"));
const searchPaths = new Set(searchIndex.documents.map((d) => d.path));
const sitemapPaths = new Set(sitemapUrls.map((url) => url.slice(SITE_URL.length) || "/"));
const matrixPaths = new Set(matrix.map((r) => r.path));
const homeHtml = readFileSync(fileFor("/", ".html"), "utf8");
const chromeHtml = (homeHtml.match(/<header[\s\S]*?<\/header>/)?.[0] ?? "") + (homeHtml.match(/<footer[\s\S]*?<\/footer>/)?.[0] ?? "");
const builtText = scanTargets.filter((file) => /\.(html|rsc)$/.test(file)).map((file) => readFileSync(file, "utf8")).join("\n");
for (const path of generated) if (!matrixPaths.has(path)) error(`Route ${path} is generated but missing from the route matrix`);
for (const r of routesManifest.redirects.filter((x) => !x.internal)) if (!matrixPaths.has(r.source)) error(`Redirect ${r.source} is served but missing from the route matrix`);
for (const row of matrix) {
  const where = `Route matrix ${row.class} ${row.path}`;
  if (row.class === "LIVE" || row.class === "SAFE-LIVE") {
    if (!generated.has(row.path)) error(`${where}: not generated`);
    const html = existsSync(fileFor(row.path, ".html")) ? readFileSync(fileFor(row.path, ".html"), "utf8") : "";
    const robots = html.match(/<meta name="robots" content="([^"]*)"/)?.[1] ?? "";
    if (html && (IS_PRODUCTION && row.indexable) === /noindex/.test(robots)) error(`${where}: robots "${robots}" does not match indexable=${row.indexable}`);
    if (row.class === "LIVE" && !row.indexable) error(`${where}: LIVE routes must be indexable`);
  } else {
    if (generated.has(row.path)) error(`${where}: must not be generated`);
    const served = routesManifest.redirects.find((r) => r.source === row.path && !r.internal);
    if (!served || served.statusCode !== row.status || served.destination !== row.destination) error(`${where}: expected ${row.status} → ${row.destination}`);
    if (row.indexable || row.sitemap || row.search || row.navigation) error(`${where}: must not be indexable, in the sitemap, in search or in navigation`);
    if (builtText.includes(`href="${row.path}"`) || builtText.includes(`"href":"${row.path}"`)) error(`${where}: a built page still links to it`);
  }
  if (sitemapPaths.has(row.path) !== row.sitemap) error(`${where}: sitemap membership is ${sitemapPaths.has(row.path)}, matrix says ${row.sitemap}`);
  if (searchPaths.has(row.path) !== row.search) error(`${where}: search membership is ${searchPaths.has(row.path)}, matrix says ${row.search}`);
  // Mega-menu columns render one at a time; the others travel in the page payload as the navigation model.
  if (row.navigation && !chromeHtml.includes(`href="${row.path}"`) && !homeHtml.includes(`\\"href\\":\\"${row.path}\\"`)) error(`${where}: marked as navigation but not in the header, footer or navigation model`);
  if (row.class === "HELD" && row.claims.length === 0) error(`${where}: held without an unconfirmed claim`);
}

// The /sitemap directory lists exactly the live routes (the search results page aside) and nothing else.
if (utility.some((u) => u.path === "/sitemap") && existsSync(fileFor("/sitemap", ".html"))) {
  const html = readFileSync(fileFor("/sitemap", ".html"), "utf8");
  const list = html.slice(html.indexOf('id="page-directory"'), html.indexOf("</main>"));
  const listed = new Set([...list.matchAll(/<a[^>]*href="([^"]+)"/g)].map((m) => m[1]));
  const want = new Set(matrix.filter((r) => (r.class === "LIVE" || r.class === "SAFE-LIVE") && r.path !== "/site-search").map((r) => r.path));
  if (!listed.size) error("/sitemap: the page directory is missing");
  for (const path of want) if (!listed.has(path)) error(`/sitemap does not list the live route ${path}`);
  for (const path of listed) if (!want.has(path)) error(`/sitemap lists ${path}, which is not a live route`);
}

// No photograph twice on one page: topic images are crops of source photos (image-inventory.json `source`),
// so two different image files on a page must not come from the same photo (lib/content/images.ts).
{
  const imageSources: Array<{ path: string; source?: string }> = JSON.parse(readFileSync("content/generated/image-inventory.json", "utf8"));
  const photoOf = new Map(imageSources.map((entry) => [entry.path, entry.source ?? entry.path]));
  const imagePattern = /(?:\/|%2F)images(?:\/|%2F)topics(?:\/|%2F)[A-Za-z0-9%._-]+?\.webp/g;
  let repeats = 0;
  for (const path of generated) {
    const file = fileFor(path, ".html");
    if (!existsSync(file)) continue;
    const main = readFileSync(file, "utf8").match(/<main[\s\S]*<\/main>/)?.[0] ?? "";
    const images = new Set([...main.matchAll(imagePattern)].map((m) => decodeURIComponent(m[0])));
    const byPhoto = new Map<string, string[]>();
    for (const image of images) byPhoto.set(photoOf.get(image) ?? image, [...(byPhoto.get(photoOf.get(image) ?? image) ?? []), image]);
    for (const [photo, files] of byPhoto) {
      if (files.length < 2) continue;
      repeats += 1;
      if (repeats <= 10) error(`${path}: ${files.length} images show the same photo (${photo}): ${files.join(", ")}`);
    }
  }
  if (repeats > 10) error(`… and ${repeats - 10} more repeated photos`);
}

/* Security headers -------------------------------------------------------------------------------- */

const headerRules = (routesManifest as unknown as { headers?: Array<{ source: string; headers: Array<{ key: string; value: string }> }> }).headers ?? [];
const siteHeaders = new Map(headerRules.filter((rule) => rule.source === "/:path*").flatMap((rule) => rule.headers.map((h) => [h.key.toLowerCase(), h.value] as const)));
const requiredHeaders: Record<string, (value: string) => boolean> = {
  "content-security-policy": (v) => v.includes("default-src 'self'") && v.includes("frame-ancestors 'none'") && v.includes("object-src 'none'") && !v.includes("unsafe-eval"),
  "x-content-type-options": (v) => v === "nosniff",
  "referrer-policy": (v) => v === "strict-origin-when-cross-origin",
  "x-frame-options": (v) => v === "DENY",
  "permissions-policy": (v) => v.includes("camera=()") && v.includes("microphone=()"),
  "cross-origin-opener-policy": (v) => v === "same-origin",
};
for (const [key, valid] of Object.entries(requiredHeaders)) {
  const value = siteHeaders.get(key);
  if (!value || !valid(value)) error(`Security header ${key} is missing or weakened: ${value ?? "absent"}`);
}
const wantsHsts = IS_PRODUCTION && SITE_URL.startsWith("https://");
if (wantsHsts !== siteHeaders.has("strict-transport-security")) error(`Strict-Transport-Security should be ${wantsHsts ? "sent" : "absent"} for ${IS_PRODUCTION ? "production" : "non-production"} on ${SITE_URL}`);
if (IS_PRODUCTION && !SITE_URL.startsWith("https://")) console.warn(`⚠ Production build on a non-HTTPS origin (${SITE_URL}): acceptable only for local production-like testing`);

// No development URLs, local filesystem paths or source maps in anything served to browsers.
{
  const walk = (dir: string): string[] => (existsSync(dir) ? readdirSync(dir, { withFileTypes: true }).flatMap((d) => (d.isDirectory() ? walk(join(dir, d.name)) : [join(dir, d.name)])) : []);
  const staticFiles = walk(".next/static");
  if (staticFiles.some((f) => f.endsWith(".map"))) error("Source maps are published in .next/static");
  const leak = /[A-Z]:[\\/](?:Projects|Users)|\/home\/[a-z]|localhost:\d|127\.0\.0\.1(?!:3200)/;
  for (const f of [...staticFiles.filter((x) => x.endsWith(".js") || x.endsWith(".css")), ...scanTargets]) {
    if (leak.test(readFileSync(f, "utf8"))) error(`${f} contains a local path or development URL`);
  }
  for (const f of staticFiles.filter((x) => x.endsWith(".js"))) {
    const text = readFileSync(f, "utf8");
    if (/CONTACT_FORM_ENDPOINT|GETSIBU_CLAIM_OVERRIDES/.test(text)) error(`${f} references a server-only environment variable`);
  }
}

/* robots.txt -------------------------------------------------------------------------------------- */

const robotsTxt = readFileSync(join(APP, "robots.txt.body"), "utf8");
if (IS_PRODUCTION) {
  if (/Disallow: \/\s*$/m.test(robotsTxt)) error("robots.txt disallows the whole site in production");
  if (!robotsTxt.includes(`Sitemap: ${SITE_URL}/sitemap.xml`)) error("robots.txt does not reference the production sitemap");
} else if (!/Disallow: \/\s*$/m.test(robotsTxt)) error("robots.txt allows crawling outside production");

/* Report ------------------------------------------------------------------------------------------ */

if (errors.length) {
  console.error(`\n✖ Build verification failed: ${errors.length} error(s)`);
  for (const e of errors.slice(0, 60)) console.error(`   ${e}`);
  if (errors.length > 60) console.error(`   … ${errors.length - 60} more`);
  process.exit(1);
}
console.log(
  `✔ Build verified (${IS_PRODUCTION ? "production" : "non-production"}, ${SITE_URL}): route matrix of ${matrix.length} (${["LIVE", "SAFE-LIVE", "HELD", "REDIRECT"].map((c) => `${matrix.filter((r) => r.class === c).length} ${c}`).join(", ")}), ${generated.size} routes, ${sitemapUrls.length} sitemap URLs, ${inventory.redirects.length} redirects, ${metas.length} pages' metadata, ${scanTargets.length} files scanned for claims and placeholders`,
);
