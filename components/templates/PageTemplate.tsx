import type { InventoryPage } from "@/types/content";
import { sectionById } from "@/content/architecture/sections";
import { getPageSections } from "@/lib/content/sections";
import { SectionRenderer } from "@/components/sections/SectionRenderer";
import { CapabilityStrip } from "./CapabilityStrip";
import { HubGroups } from "./HubGroups";
import { PreviousNext } from "./PreviousNext";

const CLOSING = new Set(["faq", "related", "cta"]);

/**
 * Every inventory page, in the Sky9 skeleton: hero → content → (section roots: capability strip after
 * the hero and the grouped topic modules) → closing FAQ / related → CTA band.
 *
 * Authored pages (content/pages) render exactly their own sections in their own order — the template
 * adds nothing. Composed pages keep a slim previous/next bar before the CTA.
 */
export function PageTemplate({ page }: { page: InventoryPage }) {
  const { sections, source } = getPageSections(page.number);
  const hero = sections[0]?.kind === "hero" ? sections.slice(0, 1) : [];
  const rest = sections.slice(hero.length);
  const closingIndex = rest.findIndex((s) => CLOSING.has(s.kind));
  const split = closingIndex === -1 ? rest.length : closingIndex;
  const ctaIndex = rest.findIndex((s) => s.kind === "cta");
  const story = rest.slice(0, split);
  const closing = rest.slice(split, ctaIndex === -1 ? rest.length : ctaIndex);
  const cta = ctaIndex === -1 ? [] : rest.slice(ctaIndex);
  const root = page.role === "section-root" && page.childGroups.length > 0;

  return (
    <>
      <SectionRenderer sections={hero} page={page} all={sections} />
      {root ? <CapabilityStrip groups={page.childGroups} /> : null}
      <SectionRenderer sections={story} page={page} all={sections} />
      {root ? <HubGroups groups={page.childGroups} heading={`Explore ${sectionById.get(page.section)!.label}`} /> : null}
      <SectionRenderer sections={closing} page={page} all={sections} />
      {page.role === "leaf" && source === "composed" ? <PreviousNext page={page} /> : null}
      <SectionRenderer sections={cta} page={page} all={sections} />
    </>
  );
}
