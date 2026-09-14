import { ArrowLink, ButtonLink } from "@/components/primitives/Button";
import { Eyebrow } from "@/components/primitives/SectionHeader";

export default function NotFound() {
  return (
    <section aria-labelledby="page-title" className="container-content section-open">
      <title>Page not found | GetSibu</title>
      <Eyebrow>404</Eyebrow>
      <h1 id="page-title" className="type-h1 mt-5 max-w-[20ch] text-fg">
        This page does not exist
      </h1>
      <p className="type-body-lg mt-5 max-w-[52ch] text-fg-soft">The address may be mistyped, or the page may have moved. Search the site or start from one of the main sections.</p>
      <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
        <ButtonLink href="/">GetSibu home</ButtonLink>
        <ButtonLink href="/site-search" variant="secondary">
          Search GetSibu
        </ButtonLink>
        <ArrowLink href="/features">Features</ArrowLink>
        <ArrowLink href="/resources">Resources</ArrowLink>
      </div>
    </section>
  );
}
