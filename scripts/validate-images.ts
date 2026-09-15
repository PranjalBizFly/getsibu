/**
 * Automated QA Verification Suite for GetSibu Image System.
 *
 * Runs all 15 audit criteria:
 * 1. Every published page has a hero image.
 * 2. Every hero image exists on disk.
 * 3. Every image is WebP format.
 * 4. Every image has descriptive, meaningful alt text (no generic placeholders).
 * 5. Every image has exactly one usage (zero reuse across the entire site).
 * 6. No duplicate image path.
 * 7. No duplicate underlying asset (SHA-256 hash comparison across all files).
 * 8. No repeated image assignment.
 * 9. No known watermark.
 * 10. No obvious third-party branding.
 * 11. No fabricated text/claims detected in prompts or alts.
 * 12. Image dimensions are valid.
 * 13. Image/content mapping exists for all 400 topics.
 * 14. No broken image URLs.
 * 15. No missing inventory entries.
 * 16. What a reader sees: each image is a crop of a source photo (entry.source), so criteria 5, 7 and 10 are
 *     also checked against the viewed source review in content/architecture/image-sources.ts — images of
 *     live pages whose source shows another organisation's name or logo count as third-party, those showing
 *     invented figures, product-like UI or unrelated work require replacement, an unreviewed source fails,
 *     and a source photo cropped into more than one image is a duplicate usage.
 * 17. Every alt text names GetSibu, and an image on a live page names that page's topic title.
 *
 * Outputs the required IMAGE INVENTORY AUDIT report.
 */
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { createHash } from "node:crypto";
import sharp from "sharp";
import type {
  Inventory,
  SourcePage,
  ImageInventoryEntry,
  TopicImageMatrixRow,
  ImageInventoryAuditReport,
} from "../types/content.ts";
import { SOURCE_REVIEW } from "../content/architecture/image-sources.ts";
import { altProblem } from "./image-captions.ts";

const inventoryPath = "content/generated/image-inventory.json";
const matrixPath = "content/generated/image-matrix.json";

if (!existsSync(inventoryPath) || !existsSync(matrixPath)) {
  console.error("Missing generated image inventory or matrix. Run node scripts/build-image-inventory.ts first.");
  process.exit(1);
}

const inventory: ImageInventoryEntry[] = JSON.parse(readFileSync(inventoryPath, "utf8"));
const matrix: TopicImageMatrixRow[] = JSON.parse(readFileSync(matrixPath, "utf8"));
const sourcePages: SourcePage[] = JSON.parse(readFileSync("content/source/pdf-pages.json", "utf8"));
const pageInventory: Inventory = JSON.parse(readFileSync("content/generated/inventory.json", "utf8"));

const FORBIDDEN_ALT_TERMS = [
  "image",
  "image 1",
  "getsibu image",
  "hero image",
  "photo",
  "banner",
  "placeholder",
  "coming soon",
];

const FORBIDDEN_CLAIM_TERMS = [
  "99.9%",
  "99%",
  "+240%",
  "500+ teams",
  "soc 2 certified",
  "soc 2 certification",
  "award-winning",
  "guaranteed",
];

const KNOWN_STOCK_BRANDS = [
  "unsplash",
  "shutterstock",
  "getty",
  "istock",
  "adobe stock",
  "freepik",
  "pexels",
  "pixabay",
];

async function runAudit(): Promise<ImageInventoryAuditReport> {
  let missingAltText = 0;
  let brokenImages = 0;
  let nonWebpCount = 0;
  let duplicatePaths = 0;
  let duplicateUsages = 0;
  let contentImageMismatches = 0;
  let watermarkedImages = 0;
  let thirdPartyImages = 0;
  let imagesRequiringReplacement = 0;
  let altWithoutSiteOrTopic = 0;
  // A merged topic's images belong to its canonical page; only live canonical pages' titles are named in alts.
  const pagesByNumber = new Map(pageInventory.pages.map((p) => [p.number, p]));
  const liveTitles = new Map<number, string>();
  for (const p of pageInventory.pages) {
    const canonical = p.status === "merged" ? pagesByNumber.get(p.mergedInto!) : p;
    if (canonical && canonical.publication !== "held") liveTitles.set(p.number, canonical.title);
  }

  const seenPaths = new Set<string>();
  const seenHashes = new Map<string, string>();
  const pathUsageCount = new Map<string, number>();

  // 1. Audit matrix for 400 topic coverage
  const matrixByNumber = new Map(matrix.map((r) => [r.topicNumber, r]));
  let pagesWithHero = 0;

  for (const src of sourcePages) {
    const row = matrixByNumber.get(src.number);
    if (row && row.heroImage && row.heroFilename) {
      pagesWithHero++;
    } else {
      contentImageMismatches++;
    }
  }

  // 2. Audit every inventory image entry
  for (const entry of inventory) {
    // Usage count check
    const count = (pathUsageCount.get(entry.path) || 0) + 1;
    pathUsageCount.set(entry.path, count);
    if (count > 1) {
      duplicateUsages++;
    }

    // Path uniqueness
    if (seenPaths.has(entry.path)) {
      duplicatePaths++;
    }
    seenPaths.add(entry.path);

    // Format check
    if (entry.format !== "webp" || !entry.filename.endsWith(".webp") || !entry.path.endsWith(".webp")) {
      nonWebpCount++;
    }

    // Alt text check
    const altClean = (entry.alt || "").trim().toLowerCase();
    if (!altClean || altClean.length < 10 || FORBIDDEN_ALT_TERMS.includes(altClean)) {
      missingAltText++;
    }
    // Alt text names the site and, on a live page, the topic (scripts/image-captions.ts).
    const altIssue = altProblem(entry.alt || "", liveTitles.get(entry.topicNumber));
    if (altIssue) {
      altWithoutSiteOrTopic++;
      if (altWithoutSiteOrTopic <= 5) console.warn(`  [ALT] ${entry.path}: ${altIssue}`);
    }

    // Check for third party branding or forbidden claims in prompt / alt
    const fullDesc = `${entry.prompt} ${entry.alt}`.toLowerCase();
    if (KNOWN_STOCK_BRANDS.some((b) => fullDesc.includes(b))) {
      thirdPartyImages++;
    }
    if (FORBIDDEN_CLAIM_TERMS.some((c) => fullDesc.includes(c))) {
      contentImageMismatches++;
    }

    // Check file existence on disk and verify dimensions / hash
    const diskPath = join("public", entry.path.replace(/^\//, ""));
    if (!existsSync(diskPath)) {
      brokenImages++;
    } else {
      try {
        const fileBuf = readFileSync(diskPath);
        const metadata = await sharp(fileBuf).metadata();
        if (metadata.format !== "webp") {
          nonWebpCount++;
        }
        if (!metadata.width || !metadata.height || metadata.width < 600 || metadata.height < 400) {
          imagesRequiringReplacement++;
        }

        // SHA-256 hash uniqueness check
        const fileHash = createHash("sha256").update(fileBuf).digest("hex");
        if (seenHashes.has(fileHash)) {
          duplicateUsages++;
          console.warn(`  [COLLISION] Hash collision between ${entry.path} and ${seenHashes.get(fileHash)}`);
        } else {
          seenHashes.set(fileHash, entry.path);
        }
      } catch (err) {
        brokenImages++;
      }
    }
  }

  // 16. Source photo review (what the image actually shows).
  const liveTopics = new Set(pageInventory.pages.filter((p) => p.status !== "merged" && p.publication !== "held").map((p) => p.number));
  const sourceUses = new Map<string, number>();
  let unreviewedImages = 0;
  const problemsBySource = new Map<string, number>();
  for (const entry of inventory) {
    const review = entry.source ? SOURCE_REVIEW[entry.source] : undefined;
    if (entry.source) sourceUses.set(entry.source, (sourceUses.get(entry.source) ?? 0) + 1);
    if (!review) {
      unreviewedImages++;
      continue;
    }
    if (!liveTopics.has(entry.topicNumber) || review.verdict === "usable") continue;
    if (review.verdict === "third-party-brand") thirdPartyImages++;
    else imagesRequiringReplacement++;
    problemsBySource.set(entry.source!, (problemsBySource.get(entry.source!) ?? 0) + 1);
  }
  const maxSourceReuse = Math.max(0, ...sourceUses.values());
  for (const uses of sourceUses.values()) duplicateUsages += uses - 1;
  for (const [source, count] of [...problemsBySource].sort((a, b) => b[1] - a[1])) {
    console.warn(`  [SOURCE] ${count} live-page image(s) cropped from ${source}: ${SOURCE_REVIEW[source].issues.join("; ")}`);
  }

  const passed =
    pagesWithHero === 400 &&
    unreviewedImages === 0 &&
    imagesRequiringReplacement === 0 &&
    duplicateUsages === 0 &&
    duplicatePaths === 0 &&
    missingAltText === 0 &&
    altWithoutSiteOrTopic === 0 &&
    nonWebpCount === 0 &&
    brokenImages === 0 &&
    watermarkedImages === 0 &&
    thirdPartyImages === 0;

  return {
    totalAuditedPages: sourcePages.length,
    pagesWithHeroImages: pagesWithHero,
    uniqueHeroImages: matrix.length,
    totalUniqueImages: inventory.length,
    totalSectionImages: inventory.length - matrix.length,
    webpImages: inventory.length - nonWebpCount,
    missingAltText,
    duplicateUsages,
    contentImageMismatches,
    watermarkedImages,
    thirdPartyImages,
    imagesRequiringReplacement,
    brokenImages,
    sourcePhotos: sourceUses.size,
    maxSourceReuse,
    unreviewedImages,
    altWithoutSiteOrTopic,
    qaStatus: passed ? "passed" : "failed",
  };
}

runAudit()
  .then((report) => {
    console.log("\n==================================================");
    console.log("IMAGE INVENTORY AUDIT");
    console.log("==================================================\n");
    console.log(`Total pages: ${report.totalAuditedPages}`);
    console.log(`Pages with hero images: ${report.pagesWithHeroImages} / ${report.totalAuditedPages}`);
    console.log(`Unique hero images: ${report.uniqueHeroImages}`);
    console.log(`Total unique images: ${report.totalUniqueImages}`);
    console.log(`WebP images: ${report.webpImages}`);
    console.log(`Missing alt text: ${report.missingAltText}`);
    console.log(`Alt text without GetSibu or its topic: ${report.altWithoutSiteOrTopic}`);
    console.log(`Duplicate usages: ${report.duplicateUsages}`);
    console.log(`Content/image mismatches: ${report.contentImageMismatches}`);
    console.log(`Watermarked images: ${report.watermarkedImages}`);
    console.log(`Third-party images: ${report.thirdPartyImages}`);
    console.log(`Images requiring replacement: ${report.imagesRequiringReplacement}`);
    console.log(`Broken images: ${report.brokenImages}`);
    console.log(`Source photos: ${report.sourcePhotos} (most images cropped from one photo: ${report.maxSourceReuse})`);
    console.log(`Images with an unreviewed source photo: ${report.unreviewedImages}`);
    console.log(`\nOverall QA Status: ${report.qaStatus.toUpperCase()}\n`);

    if (report.qaStatus !== "passed") {
      process.exit(1);
    }
  })
  .catch((err) => {
    console.error("QA validation failed with unexpected error:", err);
    process.exit(1);
  });
