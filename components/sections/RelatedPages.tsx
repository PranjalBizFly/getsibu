import Link from "next/link";
import type { CSSProperties } from "react";
import { pageSummary } from "@/lib/content/links";
import { Icon } from "@/components/primitives/Icon";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { Section, type Surface } from "./Section";

interface RelatedPagesProps {
  id: string;
  eyebrow?: string;
  heading: string;
  intro?: string;
  pages: number[];
  variant?: "index" | "cards";
  surface?: Surface;
  density?: "open" | "dense";
}

/**
 * Links to other pages, by PDF number. "index" is an editorial list with the header beside it;
 * "cards" is a grid for a handful of peers. Statements are shown only when publishable.
 */
export function RelatedPages({ id, eyebrow, heading, intro, pages, variant = "cards", surface, density }: RelatedPagesProps) {
  const items = pages.map(pageSummary);

  if (variant === "index") {
    return (
      <Section id={id} surface={surface} density={density} labelledBy={`${id}-title`}>
        <div className="container-content grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeader id={`${id}-title`} eyebrow={eyebrow} heading={heading} intro={intro} className="lg:sticky lg:top-28" />
          </div>
          <ul className="border-t border-line lg:col-span-8">
            {items.map((item, i) => (
              <li key={item.number} data-reveal style={{ "--i": i % 3 } as CSSProperties} className="border-b border-line">
                <Link href={item.href} className="group grid grid-cols-[1fr_auto] items-start gap-6 py-6">
                  <span className="flex flex-col gap-1.5">
                    <span className="type-h4 text-fg transition-colors group-hover:text-accent">{item.shortTitle}</span>
                    {item.statement ? <span className="type-body-sm line-clamp-2 max-w-[62ch] text-fg-muted">{item.statement}</span> : null}
                  </span>
                  <Icon name="arrowRight" size={20} className="mt-0.5 text-fg-muted transition-transform group-hover:translate-x-1 group-hover:text-accent" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    );
  }

  // Cards need a statement to be worth a card; pages without one (unconfirmed claims) are listed.
  // A single card or two beside a list look unfinished: below three, everything is listed.
  const withStatement = items.filter((item) => item.statement);
  const cards = withStatement.length >= 3 ? withStatement : [];
  const listed = items.filter((item) => !cards.includes(item));
  return (
    <Section id={id} surface={surface} density={density} labelledBy={`${id}-title`}>
      <div className="container-content">
        <SectionHeader id={`${id}-title`} eyebrow={eyebrow} heading={heading} intro={intro} />
        {cards.length ? (
        <ul className={`mt-10 grid gap-4 sm:grid-cols-2 ${cards.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
          {cards.map((item, i) => (
            <li
              key={item.number}
              data-reveal
              style={{ "--i": i } as CSSProperties}
              className="group relative flex flex-col rounded-md border border-line bg-raised p-6 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-line-strong"
            >
              <p className="type-eyebrow text-fg-muted">{item.sectionLabel}</p>
              <h3 className="type-h4 mt-4 text-fg">
                <Link href={item.href} className="after:absolute after:inset-0 after:rounded-md after:content-['']">
                  {item.title}
                </Link>
              </h3>
              {item.statement ? <p className="type-body-sm mt-2.5 line-clamp-3 text-fg-muted">{item.statement}</p> : null}
              <Icon name="arrowRight" size={18} className="mt-auto pt-5 text-fg-muted transition-transform group-hover:translate-x-1 group-hover:text-accent" />
            </li>
          ))}
        </ul>
        ) : null}
        {listed.length ? (
          <div className={cards.length ? "mt-8" : "mt-10"}>
            {cards.length ? <p className="type-eyebrow text-fg-muted">Also in this area</p> : null}
            <ul className={`${cards.length ? "mt-3" : ""} grid border-t border-line sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3`}>
              {listed.map((item) => (
                <li key={item.number} className="border-b border-line">
                  <Link href={item.href} className="group flex items-center justify-between gap-4 py-4">
                    <span className="flex flex-col">
                      <span className="type-caption text-fg-muted">{item.sectionLabel}</span>
                      <span className="type-body font-medium text-fg transition-colors group-hover:text-accent">{item.title}</span>
                    </span>
                    <Icon name="arrowRight" size={18} className="shrink-0 text-fg-muted transition-transform group-hover:translate-x-1 group-hover:text-accent" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </Section>
  );
}
