import type { Metadata } from "next";
import { LayoutList, ListTree } from "lucide-react";
import { DIRECTORY_PAGE, getDirectory } from "@/lib/content/directory";
import { SITE_NAME } from "@/lib/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { companyPageJsonLd } from "@/lib/seo/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { PageDirectory } from "@/components/search/PageDirectory";

const seo = {
  title: `${DIRECTORY_PAGE.title} | ${SITE_NAME}`,
  h1: "Every GetSibu page, in one place",
  description: "Every published GetSibu page in one list, grouped by area: platform, features, use cases, developers, security, pricing, resources, FAQs and getting started.",
  canonicalPath: DIRECTORY_PAGE.path,
  schemaTypes: ["CollectionPage", "BreadcrumbList"],
  robots: DIRECTORY_PAGE.indexable ? ("index,follow" as const) : ("noindex,follow" as const),
  sitemap: DIRECTORY_PAGE.indexable,
};

export const metadata: Metadata = buildMetadata(seo);

/**
 * Human-readable sitemap (Mengo sitemap structure in the Sky9 hero): the search dialog's "Explore all
 * pages" destination. Built from the inventory, so it lists exactly the live routes; scripts/verify-build.ts
 * checks that every live route appears here.
 */
export default function SitemapPage() {
  const directory = getDirectory();
  return (
    <>
      <JsonLd data={companyPageJsonLd({ type: "CollectionPage", path: seo.canonicalPath, title: seo.title, h1: seo.h1, description: seo.description, breadcrumbLabel: DIRECTORY_PAGE.title })} />
      <PageHero
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: DIRECTORY_PAGE.title, path: DIRECTORY_PAGE.path },
        ]}
        eyebrow={DIRECTORY_PAGE.title}
        icon={ListTree}
        title={seo.h1}
        lede="Built from the same page inventory as the navigation and the XML sitemap, so it always matches what is published. Filter by name, show one area, or collapse the groups to scan them."
        chips={[
          { label: `${directory.total} pages`, icon: LayoutList },
          { label: `${directory.groups.length} areas`, icon: ListTree },
        ]}
      />
      <PageDirectory directory={directory} />
    </>
  );
}
