import type { Metadata } from "next";
import { resolvePath } from "@/lib/content/inventory";
import { getAuthoredContent } from "@/lib/content/authored";
import { buildMetadata } from "@/lib/seo/metadata";
import { pageJsonLd } from "@/lib/seo/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";
import { MarqueeStrip } from "@/components/sections/MarqueeStrip";
import { SectionRenderer } from "@/components/sections/SectionRenderer";

const route = resolvePath("/");
if (route?.kind !== "page") throw new Error("Inventory has no homepage (PDF page 1)");
const home = route.page;
const content = getAuthoredContent(home.number);
if (!content) throw new Error("content/pages/home.ts is not registered");

export const metadata: Metadata = buildMetadata(home.seo);

/** Homepage: the authored sections, with Sky9's area marquee under the hero. */
export default function HomePage() {
  const sections = content!.sections;
  const heroCount = sections[0]?.kind === "hero" ? 1 : 0;
  return (
    <>
      <JsonLd data={pageJsonLd(home)} />
      <SectionRenderer sections={sections.slice(0, heroCount)} page={home} all={sections} />
      <MarqueeStrip />
      <SectionRenderer sections={sections.slice(heroCount)} page={home} all={sections} />
    </>
  );
}
