import type { Metadata } from "next";
import { Search } from "lucide-react";
import { Suspense, type CSSProperties } from "react";
import { SITE_NAME } from "@/lib/site";
import { Badge, TypewriterHeading } from "@/components/primitives/SectionHeader";
import { SiteSearchResults } from "@/components/search/SiteSearchResults";

export const metadata: Metadata = {
  title: { absolute: `Search | ${SITE_NAME}` },
  description: "Search every GetSibu page: features, AI, integrations, developers, security, resources and FAQs.",
  robots: { index: false, follow: true },
};

/** "Explore all results" destination. Not /search, which the GetSibu app uses. */
export default function SiteSearchPage() {
  return (
    <>
      <section aria-labelledby="page-title" className="surface-inverse surface-hero relative isolate overflow-hidden bg-bg pt-28 pb-10 text-fg sm:pt-32 sm:pb-12">
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(50rem_26rem_at_80%_0%,rgb(102_100_194/0.28),transparent_60%)]" />
        <div className="container-content motion-enter flex flex-col items-start gap-4">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="flex size-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-signal">
              <Search className="size-5" strokeWidth={2} />
            </span>
            <Badge tone="onDark">Site search</Badge>
          </div>
          <div style={{ "--i": 1 } as CSSProperties}>
            <TypewriterHeading as="h1" id="page-title" text="Search GetSibu" caret className="type-h1 text-white" />
          </div>
        </div>
      </section>
      {/* Results arrive after the index loads: the section reserves height so the footer never jumps. */}
      <section aria-label="Results" className="min-h-[calc(100svh-var(--header-height)-12rem)]">
        <div className="container-content pt-8 pb-20 md:pt-10">
          <Suspense fallback={<p className="type-body text-fg-muted">Loading search…</p>}>
            <SiteSearchResults />
          </Suspense>
        </div>
      </section>
    </>
  );
}
