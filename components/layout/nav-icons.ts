import { CATEGORY_ICON, iconForLabel, SECTION_ICON, type LucideIcon } from "@/components/primitives/icons";
import type { CategoryId, SectionId } from "@/types/content";

/** Resolves a navigation icon key ("category:ai", "section:features", "label") on the client. */
export function navIcon(key: string, label: string, index = 0): LucideIcon {
  const [kind, id] = key.split(":");
  if (kind === "category" && id in CATEGORY_ICON) return CATEGORY_ICON[id as CategoryId];
  if (kind === "section" && id in SECTION_ICON) return SECTION_ICON[id as SectionId];
  return iconForLabel(label, index);
}
