import type { InventoryPage } from "@/types/content";
import { sectionById } from "@/content/architecture/sections";
import { getPageSections } from "@/lib/content/sections";
import { SectionRenderer } from "@/components/sections/SectionRenderer";
import { HubGroups } from "./HubGroups";
import { PreviousNext } from "./PreviousNext";

const CLOSING = new Set(["faq", "related", "cta"]);

/**
 * Every page: its sections (authored or composed from its recipe), then — for section roots — the
 * full grouped list of pages in the section, then previous/next within the category and the CTA.
 */
export function PageTemplate({ page }: { page: InventoryPage }) {
  const { sections } = getPageSections(page.number);
  const closingIndex = sections.findIndex((s, i) => i > 0 && CLOSING.has(s.kind));
  const split = closingIndex === -1 ? sections.length : closingIndex;
  const beforeCta = sections.findIndex((s) => s.kind === "cta");
  const story = sections.slice(0, split);
  const closing = sections.slice(split, beforeCta === -1 ? sections.length : beforeCta);
  const cta = beforeCta === -1 ? [] : sections.slice(beforeCta);

  return (
    <>
      <SectionRenderer sections={story} page={page} />
      {page.role === "section-root" && page.childGroups.length ? (
        <HubGroups groups={page.childGroups} heading={`Explore ${sectionById.get(page.section)!.label}`} />
      ) : null}
      <SectionRenderer sections={closing} page={page} />
      {page.role === "leaf" ? <PreviousNext page={page} /> : null}
      <SectionRenderer sections={cta} page={page} />
    </>
  );
}
