import type { Metadata } from "next";
import { ABOUT_PAGE } from "@/content/architecture/company-pages";
import { STORYLINES } from "@/content/architecture/storylines";
import { getPage } from "@/lib/content/inventory";
import { pageSummary, resolveActions } from "@/lib/content/links";
import { buildMetadata } from "@/lib/seo/metadata";
import { companyPageJsonLd } from "@/lib/seo/structured-data";
import { Building2 } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { StatementSection } from "@/components/sections/StatementSection";
import { CapabilityBreakdown } from "@/components/sections/ContentSections";
import { ProcessSection } from "@/components/sections/StorySections";
import { CTASection } from "@/components/sections/CTASection";
import { CapabilityStrip } from "@/components/templates/CapabilityStrip";

const lede = getPage(ABOUT_PAGE.lede).keyStatement;
const seo = {
  title: ABOUT_PAGE.metaTitle,
  h1: ABOUT_PAGE.title,
  description: lede,
  canonicalPath: ABOUT_PAGE.path,
  schemaTypes: ["AboutPage", "BreadcrumbList"],
  robots: "index,follow" as const,
  sitemap: true,
};

export const metadata: Metadata = buildMetadata(seo);

/**
 * About GetSibu in Sky9's About flow — hero, areas strip, who it is for, why GetSibu (the platform
 * layers as feature cards), how it works (the approach as a roadmap), CTA band — from verified PDF
 * statements only (content/architecture/company-pages.ts). No team, history, address, counters or
 * customers: the official site's versions of those are placeholders.
 */
export default function AboutPage() {
  const layers = STORYLINES.find((s) => s.id === ABOUT_PAGE.layers)!;
  const conversion = getPage(ABOUT_PAGE.conversion);
  return (
    <>
      <JsonLd data={companyPageJsonLd({ type: "AboutPage", path: ABOUT_PAGE.path, title: seo.title, h1: seo.h1, description: seo.description })} />
      <PageHero
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: ABOUT_PAGE.title, path: ABOUT_PAGE.path },
        ]}
        eyebrow="About GetSibu"
        icon={Building2}
        title={ABOUT_PAGE.title}
        lede={lede}
        visual={{ diagram: "media-library" }}
        actions={resolveActions([{ kind: "global", cta: "primary" }, { kind: "route", path: "/platform", label: "Explore the platform" }])}
      />
      <CapabilityStrip groups={layers.items.slice(0, 4).map((item) => ({ label: item.label, pages: [item.page] }))} showCounts={false} />
      <StatementSection id="audience" eyebrow="Who it is for" text={getPage(ABOUT_PAGE.audience).keyStatement} link={{ page: ABOUT_PAGE.audience }} />
      <CapabilityBreakdown
        id="layers"
        eyebrow="Why GetSibu"
        heading={layers.heading}
        intro={layers.intro}
        surface="muted"
        items={layers.items.map((item) => ({ heading: item.label, body: getPage(item.page).keyStatement, page: item.page }))}
      />
      <ProcessSection
        id="approach"
        eyebrow="How GetSibu works"
        heading="Where to go deeper"
        surface="default"
        steps={ABOUT_PAGE.approach.map((n) => ({ heading: pageSummary(n).title, body: getPage(n).keyStatement, page: n }))}
      />
      <CTASection id="cta" heading={conversion.title} headingHref={conversion.path} body={conversion.sourceText} actions={resolveActions([{ kind: "global", cta: "primary" }])} />
    </>
  );
}
