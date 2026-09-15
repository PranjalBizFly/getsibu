import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import type { CSSProperties } from "react";
import { getPage } from "@/lib/content/inventory";
import { pageSummary } from "@/lib/content/links";
import { CATEGORY_ICON, iconForLabel } from "@/components/primitives/icons";
import { CARD, IconTile } from "@/components/primitives/Card";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { Section, type Surface } from "./Section";

interface RelatedPagesProps {
  id: string;
  eyebrow?: string;
  heading: string;
  intro?: string;
  pages: number[];
  variant?: "index" | "cards" | "compact";
  surface?: Surface;
  density?: "open" | "dense";
}

const reveal = (i: number) => ({ "--i": i }) as CSSProperties;

function iconFor(number: number, index: number) {
  const page = getPage(number);
  return page.role === "leaf" ? iconForLabel(page.title, index) : CATEGORY_ICON[page.category];
}

/**
 * Links to other pages, by PDF number, in Sky9's link patterns:
 *   cards   — the "Related learning pathways" cards: icon tile, arrow button, title, statement
 *   compact — the "Connected specializations & topics" strip of small link cards (at most six)
 *   index   — the "Specific topic modules" grid of bordered rows
 */
export function RelatedPages({ id, eyebrow = "Related", heading, intro, pages, variant = "cards", surface, density }: RelatedPagesProps) {
  const items = pages.map(pageSummary);

  if (variant === "compact") {
    return (
      <Section id={id} surface={surface} density={density ?? "dense"} labelledBy={`${id}-title`}>
        <div className="container-content">
          <div data-reveal className="rounded-2xl border border-line-strong/70 bg-raised p-5 shadow-sm sm:p-7">
            <h2 id={`${id}-title`} className="type-h3 flex items-center gap-2 text-fg">
              <span aria-hidden="true" className="flex size-8 items-center justify-center rounded-lg bg-accent-soft text-accent">
                <ArrowUpRight className="size-4" strokeWidth={2.25} />
              </span>
              {heading}
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {items.slice(0, 6).map((item, i) => (
                <li key={item.number} data-reveal="" style={reveal(i * 0.5)}>
                  <Link
                    href={item.href}
                    className="group flex h-full flex-col justify-between rounded-xl border border-line bg-sunken p-4 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-accent-soft hover:shadow-md"
                  >
                    <span>
                      <span className="type-eyebrow block text-signal-strong">{item.categoryLabel}</span>
                      <span className="type-body-sm mt-1 line-clamp-2 block font-bold text-fg transition-colors group-hover:text-accent">{item.title}</span>
                    </span>
                    <span aria-hidden="true" className="type-caption mt-3 inline-flex items-center gap-1 font-semibold text-accent transition-transform group-hover:translate-x-1">
                      Open topic
                      <ArrowRight className="size-3.5" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    );
  }

  if (variant === "index") {
    return (
      <Section id={id} surface={surface} density={density ?? "dense"} labelledBy={`${id}-title`}>
        <div className="container-content">
          <h2 id={`${id}-title`} data-reveal className="type-h3 text-fg">
            {heading}
          </h2>
          {intro ? <p className="type-body-sm mt-1 text-fg-muted">{intro}</p> : null}
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, i) => (
              <li key={item.number} data-reveal="" style={reveal(Math.min(i, 8) * 0.4)}>
                <Link href={item.href} className="group flex h-full items-center justify-between gap-4 rounded-xl border border-line-strong/70 bg-raised px-4 py-3.5 transition duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-md">
                  <span className="flex min-w-0 flex-col">
                    <span className="type-body-sm font-bold text-fg transition-colors group-hover:text-accent">{item.shortTitle}</span>
                    {item.statement ? <span className="type-caption line-clamp-1 text-fg-muted">{item.statement}</span> : null}
                  </span>
                  <ChevronRight aria-hidden="true" className="size-4 shrink-0 text-fg-muted transition-transform group-hover:translate-x-1 group-hover:text-accent" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    );
  }

  // Cards need a statement to be worth a card; pages without one are listed as compact rows.
  const withStatement = items.filter((item) => item.statement);
  const cards = withStatement.length >= 3 ? withStatement : [];
  const listed = items.filter((item) => !cards.includes(item));
  return (
    <Section id={id} surface={surface} density={density} labelledBy={`${id}-title`}>
      <div className="container-content">
        <SectionHeader id={`${id}-title`} eyebrow={eyebrow} heading={heading} intro={intro} />
        {cards.length ? (
          <ul className={`grid gap-5 sm:grid-cols-2 sm:gap-6 ${cards.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
            {cards.map((item, i) => (
              <li key={item.number} data-reveal="" style={reveal(i)}>
                <div className={CARD}>
                  <div className="flex items-start justify-between gap-3">
                    <IconTile icon={iconFor(item.number, i)} size="sm" />
                    <span aria-hidden="true" className="flex size-8 items-center justify-center rounded-full border border-line text-fg-muted transition duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-fg">
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.25} />
                    </span>
                  </div>
                  <p className="type-eyebrow mt-5 text-signal-strong">{item.categoryLabel}</p>
                  <h3 className="type-h3 mt-1.5 text-fg transition-colors group-hover:text-accent">
                    <Link href={item.href} className="after:absolute after:inset-0 after:z-10 after:rounded-2xl after:content-['']">
                      {item.title}
                    </Link>
                  </h3>
                  {item.statement ? <p className="type-body-sm mt-2.5 line-clamp-3 text-fg-muted">{item.statement}</p> : null}
                </div>
              </li>
            ))}
          </ul>
        ) : null}
        {listed.length ? (
          <ul className={`grid gap-3 sm:grid-cols-2 lg:grid-cols-3 ${cards.length ? "mt-6" : ""}`}>
            {listed.map((item, i) => (
              <li key={item.number} data-reveal="" style={reveal(i * 0.5)}>
                <Link href={item.href} className="group flex h-full items-center justify-between gap-4 rounded-xl border border-line-strong/70 bg-raised px-4 py-3.5 transition duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-md">
                  <span className="flex min-w-0 flex-col">
                    <span className="type-caption text-fg-muted">{item.sectionLabel}</span>
                    <span className="type-body-sm font-bold text-fg transition-colors group-hover:text-accent">{item.title}</span>
                  </span>
                  <ChevronRight aria-hidden="true" className="size-4 shrink-0 text-fg-muted transition-transform group-hover:translate-x-1 group-hover:text-accent" />
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </Section>
  );
}
