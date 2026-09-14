import type { Metadata } from "next";
import { Suspense } from "react";
import { SITE_NAME } from "@/lib/site";
import { SiteSearchResults } from "@/components/search/SiteSearchResults";

export const metadata: Metadata = {
  title: { absolute: `Search | ${SITE_NAME}` },
  description: "Search every GetSibu page: features, AI, integrations, developers, security, resources and FAQs.",
  robots: { index: false, follow: true },
};

/** "Explore all results" destination. Not /search, which the GetSibu app uses. */
export default function SiteSearchPage() {
  return (
    // Results arrive after the index loads: the section reserves a viewport of height so the footer
    // never jumps into view and back (layout shift).
    <section aria-labelledby="page-title" className="min-h-[calc(100svh-var(--header-height))] border-b border-line">
      <div className="container-content pt-10 pb-20 md:pt-14">
        <h1 id="page-title" className="type-h1 text-fg">
          Search GetSibu
        </h1>
        <Suspense fallback={<p className="type-body mt-8 text-fg-muted">Loading search…</p>}>
          <SiteSearchResults />
        </Suspense>
      </div>
    </section>
  );
}
