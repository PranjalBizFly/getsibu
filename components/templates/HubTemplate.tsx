import type { InventoryIndexPage } from "@/types/content";
import { sectionById } from "@/content/architecture/sections";
import { CATEGORY_CONVERSION, clusterById } from "@/content/architecture/clusters";
import { CATEGORY_VISUAL } from "@/content/architecture/visuals";
import { getPage } from "@/lib/content/inventory";
import { resolveActions } from "@/lib/content/links";
import { PageHero } from "@/components/sections/PageHero";
import { CapabilityBreakdown } from "@/components/sections/ContentSections";
import { CTASection } from "@/components/sections/CTASection";
import { HubGroups } from "./HubGroups";

/**
 * The generated hubs (/features, /features/ai, /storage…): the category's system figure, its pillar
 * pages as a starting point, every page grouped by topic, and the category's conversion page.
 */
export function HubTemplate({ index }: { index: InventoryIndexPage }) {
  const section = sectionById.get(index.section)!;
  const visual = index.category ? CATEGORY_VISUAL[index.category] : undefined;
  const pageCount = index.groups.reduce((sum, g) => sum + g.pages.length, 0);

  // Start here: the pillar page of each grouped cluster, when its statement is publishable.
  const pillars = index.groups
    .map((g) => (g.clusterId ? clusterById.get(g.clusterId)!.primary : null))
    .filter((n): n is number => n !== null && !getPage(n).needsVerification && getPage(n).status === "canonical")
    .filter((n, i, all) => all.indexOf(n) === i)
    .slice(0, 6);

  const conversionNumber = CATEGORY_CONVERSION[index.category ?? ""] ?? null;
  const conversion = conversionNumber ? getPage(conversionNumber) : null;
  const primary = resolveActions([{ kind: "global", cta: "primary" }]);


  return (
    <>
      <PageHero breadcrumb={index.breadcrumb} eyebrow={index.path === section.basePath ? `${pageCount} pages` : section.label} title={index.h1} lede={index.lede} visual={visual} actions={primary} />
      {pillars.length >= 3 ? (
        <CapabilityBreakdown
          id="start-here"
          eyebrow="Start here"
          heading={`Key topics in ${index.title}`}
          items={pillars.map((n) => ({ heading: getPage(n).title, body: getPage(n).keyStatement, page: n }))}
          surface="muted"
        />
      ) : null}
      <HubGroups groups={index.groups} heading={`All ${index.title.toLowerCase()} pages`} />
      <CTASection
        id="cta"
        heading={conversion ? conversion.title : "Start Your Creative Library"}
        headingHref={conversion?.path ?? null}
        body={conversion && !conversion.needsVerification ? conversion.sourceText : null}
        actions={primary}
      />
    </>
  );
}
