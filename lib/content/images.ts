import imageInventory from "@/content/generated/image-inventory.json";
import imageMatrix from "@/content/generated/image-matrix.json";
import type { ImageInventoryEntry, TopicImageMatrixRow } from "@/types/content";

const rows = imageMatrix as TopicImageMatrixRow[];
const byTopicNumber = new Map<number, TopicImageMatrixRow>(
  rows.map((row) => [row.topicNumber, row])
);

/**
 * Each topic image is a crop of a source photo (image-inventory.json `source`, see
 * content/architecture/image-sources.ts), so different files can show the same photograph.
 */
const sourceByPath = new Map((imageInventory as ImageInventoryEntry[]).map((entry) => [entry.path, entry.source ?? entry.path]));
const photoOf = (path: string) => sourceByPath.get(path) ?? path;

/** Section kinds SectionRenderer shows a photo for; each shows the first image of its kind. */
export const SECTION_IMAGE_KINDS = ["overview", "scenario", "split", "workflow", "capabilities", "media"] as const;

/**
 * The section images a page shows. No photograph appears twice on one page: a section image whose source
 * photo is already shown, by the hero or an earlier section, is dropped and that section renders without a
 * photo. scripts/verify-build.ts checks the built pages.
 */
const shownSectionImages = new Map<number, TopicImageMatrixRow["sectionImages"]>();
for (const row of rows) {
  const seen = new Set(row.heroImage ? [photoOf(row.heroImage)] : []);
  const kinds = new Set<string>();
  const shown: TopicImageMatrixRow["sectionImages"] = [];
  for (const image of row.sectionImages ?? []) {
    if (!(SECTION_IMAGE_KINDS as readonly string[]).includes(image.section) || kinds.has(image.section)) continue;
    kinds.add(image.section);
    const photo = photoOf(image.path);
    if (seen.has(photo)) continue;
    seen.add(photo);
    shown.push(image);
  }
  shownSectionImages.set(row.topicNumber, shown);
}

export function getImageForTopic(topicNumber: number): TopicImageMatrixRow | undefined {
  return byTopicNumber.get(topicNumber);
}

export function getHeroImageForTopic(topicNumber: number): { src: string; alt: string; caption?: string } | null {
  const row = byTopicNumber.get(topicNumber);
  if (!row || !row.heroImage) return null;
  return {
    src: row.heroImage,
    alt: row.heroAlt,
    caption: row.heroPurpose,
  };
}

export function getSectionImage(
  topicNumber: number,
  sectionKind: string
): { src: string; alt: string; caption?: string } | null {
  const match = shownSectionImages.get(topicNumber)?.find((s) => s.section === sectionKind);
  if (!match) return null;
  return {
    src: match.path,
    alt: match.alt,
    caption: match.purpose,
  };
}
