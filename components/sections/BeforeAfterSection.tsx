import type { CSSProperties } from "react";
import type { PageLinkRef } from "@/types/content";
import { pageSummary } from "@/lib/content/links";
import { ArrowLink } from "@/components/primitives/Button";
import { Icon } from "@/components/primitives/Icon";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { Section, type Surface } from "./Section";

interface BeforeAfterSectionProps {
  id: string;
  eyebrow?: string;
  heading: string;
  intro?: string;
  beforeLabel: string;
  afterLabel: string;
  before: string[];
  after: string[];
  link?: PageLinkRef;
  surface?: Surface;
}

/** The filenames GetSibu's versioning replaces, as written in the PDF (p.91). */
const VERSION_FILENAMES = ["final", "final-v2", "final-final"];

export function BeforeAfterSection({ id, eyebrow, heading, intro, beforeLabel, afterLabel, before, after, link, surface }: BeforeAfterSectionProps) {
  const target = link ? pageSummary(link.page) : null;
  const mentionsFilenames = before.some((item) => item.includes("final-v2"));
  return (
    <Section id={id} surface={surface} labelledBy={`${id}-title`}>
      <div className="container-content grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col items-start lg:col-span-5">
          <SectionHeader id={`${id}-title`} eyebrow={eyebrow} heading={heading} intro={intro} />
          {target ? (
            <ArrowLink href={target.href} className="mt-8">
              {link?.label ?? target.title}
            </ArrowLink>
          ) : null}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          <div data-reveal className="flex flex-col rounded-lg bg-sunken p-6 md:p-7">
            <h3 className="type-eyebrow text-fg-muted">{beforeLabel}</h3>
            {mentionsFilenames ? (
              <div className="mt-5 flex flex-wrap gap-2" aria-hidden="true">
                {VERSION_FILENAMES.map((name) => (
                  <span key={name} className="rounded-xs border border-line-strong bg-bg px-2 py-1 font-mono text-[0.8125rem] text-fg-muted line-through decoration-fg-muted/60">
                    {name}
                  </span>
                ))}
              </div>
            ) : null}
            <ul className="mt-5 flex flex-col gap-3.5">
              {before.map((item) => (
                <li key={item} className="type-body-sm flex gap-3 text-fg-muted">
                  <Icon name="minus" size={18} className="mt-0.5 shrink-0 text-line-strong" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal style={{ "--i": 1 } as CSSProperties} className="flex flex-col rounded-lg border border-line bg-raised p-6 shadow-raise md:p-7">
            <h3 className="type-eyebrow text-signal-strong">{afterLabel}</h3>
            <ul className="mt-5 flex flex-col gap-3.5">
              {after.map((item) => (
                <li key={item} className="type-body-sm flex gap-3 text-fg">
                  <Icon name="check" size={18} strokeWidth={2.25} className="mt-0.5 shrink-0 text-signal-strong" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
