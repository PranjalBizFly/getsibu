import type { ContentSection } from "@/types/content";
import type { Surface } from "./Section";

/**
 * Sky9's band rhythm: after the dark hero, body sections alternate between the page ground and a
 * tinted band, so a page reads as one sequence of bands rather than stacked white blocks. An authored
 * surface always wins and the alternation continues from it; the related strip joins the band before
 * it; the CTA and hero keep their own treatment.
 */
export function sectionSurfaces(sections: ContentSection[]): Map<string, Surface> {
  const surfaces = new Map<string, Surface>();
  let previous: Surface | null = null;
  for (const section of sections) {
    if (section.kind === "hero" || section.kind === "cta") continue;
    const authored = "surface" in section ? section.surface : undefined;
    let surface: Surface;
    if (authored) surface = authored;
    else if (previous === null) surface = "default";
    else if (section.kind === "related") surface = previous;
    else surface = previous === "muted" ? "default" : "muted";
    surfaces.set(section.id, surface);
    previous = surface === "inverse" ? "muted" : surface;
  }
  return surfaces;
}
