import { ArrowDown, ArrowRight, CircleCheck, CircleX, Sparkles } from "lucide-react";
import { Fragment, type CSSProperties } from "react";
import type { PageLinkRef } from "@/types/content";
import { pageSummary } from "@/lib/content/links";
import { ButtonLink } from "@/components/primitives/Button";
import { CARD, IconTile } from "@/components/primitives/Card";
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

const stagger = (i: number) => ({ "--i": i }) as CSSProperties;

/** Feature-card widths in a centred wrap (Sky9's course grid): four across only where the text fits. */
const cardWidth = (count: number) =>
  count === 4 ? "w-full sm:w-[calc(50%-0.75rem)] xl:w-[calc(25%-1.125rem)]" : "w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]";

/**
 * Sky9's "Why Choose" block turned into a contrast: the situation before as compact cards, a floating
 * arrow, then the GetSibu side as feature cards (icon tile, lift, accent border and glow). The two
 * lists are not assumed to pair up row by row, so each group stands on its own under its label.
 */
export function BeforeAfterSection({ id, eyebrow, heading, intro, beforeLabel, afterLabel, before, after, link, surface }: BeforeAfterSectionProps) {
  const target = link ? pageSummary(link.page) : null;
  return (
    <Section id={id} surface={surface} labelledBy={`${id}-title`}>
      <div className="container-content">
        <SectionHeader id={`${id}-title`} eyebrow={eyebrow ?? "The difference"} heading={heading} intro={intro} />

        <div className="mx-auto max-w-3xl">
          <GroupLabel tone="before">{beforeLabel}</GroupLabel>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 [&>*]:min-w-0">
            {before.map((item, i) => (
              <li key={item} data-reveal="" style={stagger(i)} className={i === before.length - 1 && before.length % 2 ? "sm:col-span-2" : ""}>
                <div className="group flex h-full items-center gap-4 rounded-2xl border border-line-strong/80 bg-raised/85 p-5 shadow-lg backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-xl sm:p-6">
                  <span aria-hidden="true" className="shrink-0 rounded-xl border border-line-strong bg-sunken p-3 text-fg-muted transition-transform duration-300 group-hover:scale-110">
                    <CircleX className="size-6" strokeWidth={1.75} />
                  </span>
                  <div className="min-w-0">
                    <p className="type-body-sm font-semibold text-fg-soft">{item}</p>
                    {item.includes("final-v2") ? (
                      <div className="mt-2 flex flex-wrap items-center gap-1.5" aria-hidden="true">
                        {VERSION_FILENAMES.map((name, n) => (
                          <Fragment key={name}>
                            {n ? <ArrowRight className="size-3 text-fg-muted" strokeWidth={2.25} /> : null}
                            <span className="rounded-md border border-line-strong bg-raised px-2 py-0.5 font-mono text-xs font-semibold text-fg-muted line-through decoration-fg-muted/60 shadow-xs">{name}</span>
                          </Fragment>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div aria-hidden="true" className="my-6 flex justify-center sm:my-8 md:my-10">
          <span className="motion-float flex size-12 items-center justify-center rounded-full border border-accent/30 bg-raised text-accent shadow-lg shadow-accent/20">
            <ArrowDown className="size-5" strokeWidth={2.25} />
          </span>
        </div>

        <GroupLabel tone="after">{afterLabel}</GroupLabel>
        <ul className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {after.map((item, i) => (
            <li key={item} data-reveal="" style={stagger(i)} className={cardWidth(after.length)}>
              <div className={CARD}>
                <IconTile icon={CircleCheck} className="mb-5 sm:mb-6" />
                <p className="type-h4 text-fg transition-colors duration-300 group-hover:text-accent">{item}</p>
              </div>
            </li>
          ))}
        </ul>

        {target ? (
          <div data-reveal="" className="mt-8 flex justify-center sm:mt-10">
            <ButtonLink href={target.href} arrow>
              {link?.label ?? target.title}
            </ButtonLink>
          </div>
        ) : null}
      </div>
    </Section>
  );
}

/** A group heading between rules, like Sky9's section divider line. */
function GroupLabel({ tone, children }: { tone: "before" | "after"; children: string }) {
  const after = tone === "after";
  const Icon = after ? Sparkles : CircleX;
  return (
    <h3 data-reveal="fade" className={`type-eyebrow mb-5 flex items-center justify-center gap-3 text-center sm:mb-6 ${after ? "text-accent" : "text-fg-muted"}`}>
      <span aria-hidden="true" className={`h-px w-8 shrink-0 sm:w-12 ${after ? "bg-accent/40" : "bg-line-strong"}`} />
      <span className="inline-flex items-center gap-1.5">
        <Icon aria-hidden="true" className="size-3.5 shrink-0" strokeWidth={2.25} />
        {children}
      </span>
      <span aria-hidden="true" className={`h-px w-8 shrink-0 sm:w-12 ${after ? "bg-accent/40" : "bg-line-strong"}`} />
    </h3>
  );
}
