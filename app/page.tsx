import type { Metadata } from "next";
import { resolvePath } from "@/lib/content/inventory";
import { getAuthoredContent } from "@/lib/content/authored";
import { buildMetadata } from "@/lib/seo/metadata";
import { pageJsonLd } from "@/lib/seo/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";
import { SectionRenderer } from "@/components/sections/SectionRenderer";

const route = resolvePath("/");
if (route?.kind !== "page") throw new Error("Inventory has no homepage (PDF page 1)");
const home = route.page;
const content = getAuthoredContent(home.number);
if (!content) throw new Error("content/pages/home.ts is not registered");

export const metadata: Metadata = buildMetadata(home.seo);

export default function HomePage() {
  return (
    <>
      <JsonLd data={pageJsonLd(home)} />
      <SectionRenderer sections={content!.sections} page={home} />
    </>
  );
}
