import Link from "next/link";
import { CATEGORIES } from "@/content/architecture/sections";
import { countCanonicalPages } from "@/lib/content/inventory";
import { CATEGORY_ICON } from "@/components/primitives/icons";
import { MarqueePause } from "./MarqueePause";

/**
 * Sky9's course marquee under the home hero: a strip of area pills sliding left, pausing on hover and
 * focus, with a pause button (WCAG 2.2.2). The second copy of the track is hidden from assistive
 * technology and keyboard focus, so every link is announced once.
 */
export function MarqueeStrip() {
  const areas = CATEGORIES.filter((c) => !["home", "conversion", "faq", "pricing-plans"].includes(c.id));
  const track = (copy: boolean) => (
    <ul aria-hidden={copy || undefined} className="flex shrink-0 items-center gap-4 pr-4">
      {areas.map((area) => {
        const Icon = CATEGORY_ICON[area.id];
        return (
          <li key={area.id}>
            <Link
              href={area.hubPath}
              tabIndex={copy ? -1 : undefined}
              className="group flex items-center gap-3 rounded-xl border border-line-strong/70 bg-raised px-4 py-2.5 whitespace-nowrap shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-md"
            >
              <span aria-hidden="true" className="flex size-8 items-center justify-center rounded-lg bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-accent-fg">
                <Icon className="size-4" strokeWidth={2} />
              </span>
              <span className="flex flex-col">
                <span className="type-body-sm font-bold text-fg">{area.label}</span>
                <span className="type-caption text-fg-muted">{countCanonicalPages(area.id)} {countCanonicalPages(area.id) === 1 ? "topic" : "topics"}</span>
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
  return (
    <section aria-label="Explore by area" className="marquee relative w-full overflow-hidden border-y border-line/70 bg-sunken py-3 sm:py-3.5">
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-sunken to-transparent sm:w-32" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-sunken to-transparent sm:w-32" />
      <div className="marquee-track" style={{ ["--marquee-duration" as string]: "40s" }}>
        {track(false)}
        {track(true)}
      </div>
      <MarqueePause />
    </section>
  );
}
