/**
 * Sequence sections: process (numbered steps), timeline (vertical rail) and story (stepping text
 * beside a figure that follows the reader). The order in each is the information.
 */
import type { CSSProperties } from "react";
import type { MediaRef, VisualRef } from "@/types/content";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { Diagram } from "@/components/diagrams/Diagram";
import { CurrentBadge, ItemTitle } from "./items";
import { Section, type Surface } from "./Section";
import { StoryScroller } from "./StoryScroller";

interface Step {
  heading: string;
  body: string;
  page?: number;
  current?: boolean;
}

interface SequenceProps {
  id: string;
  eyebrow?: string;
  heading: string;
  intro?: string;
  surface?: Surface;
  density?: "open" | "dense";
}

const pad = (i: number) => String(i + 1).padStart(2, "0");

export function ProcessSection({ id, eyebrow, heading, intro, steps, surface, density = "dense" }: SequenceProps & { steps: Step[] }) {
  return (
    <Section id={id} surface={surface} density={density} labelledBy={`${id}-title`}>
      <div className="container-content">
        <SectionHeader id={`${id}-title`} eyebrow={eyebrow} heading={heading} intro={intro} />
        <ol className={`relative mt-12 grid gap-8 md:gap-6 ${steps.length >= 5 ? "md:grid-cols-5" : steps.length === 4 ? "md:grid-cols-4" : "md:grid-cols-3"}`}>
          <span aria-hidden="true" className="absolute top-[1.1rem] right-0 left-0 hidden h-px bg-line-strong md:block" />
          <span aria-hidden="true" className="absolute top-0 bottom-0 left-[1.1rem] w-px bg-line-strong md:hidden" />
          {steps.map((step, i) => (
            <li key={step.heading} data-reveal style={{ "--i": i } as CSSProperties} className="relative flex gap-5 md:flex-col md:gap-0">
              <span
                aria-hidden="true"
                className={`relative z-10 flex size-9 shrink-0 items-center justify-center rounded-full border-2 font-mono text-[0.75rem] ${step.current ? "border-signal bg-signal text-navy" : "border-line-strong bg-bg text-fg-muted"}`}
              >
                {pad(i)}
              </span>
              <div className="flex flex-col md:mt-5">
                <div className="flex flex-wrap items-center gap-2">
                  <ItemTitle page={step.page} current={step.current} className="type-h4 text-fg">
                    {step.heading}
                  </ItemTitle>
                  {step.current ? <CurrentBadge /> : null}
                </div>
                <p className="type-body-sm mt-2 text-fg-muted">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

export function TimelineSection({ id, eyebrow, heading, intro, items, surface, density = "dense" }: SequenceProps & { items: Array<{ label: string; body: string; page?: number; current?: boolean }> }) {
  return (
    <Section id={id} surface={surface} density={density} labelledBy={`${id}-title`}>
      <div className="container-content grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeader id={`${id}-title`} eyebrow={eyebrow} heading={heading} intro={intro} className="lg:sticky lg:top-28" />
        </div>
        <ol className="relative lg:col-span-8">
          <span aria-hidden="true" className="absolute top-2 bottom-2 left-[0.6875rem] w-px bg-line-strong" />
          {items.map((item, i) => (
            <li key={item.label} data-reveal style={{ "--i": i % 3 } as CSSProperties} className="relative grid grid-cols-[1.375rem_1fr] gap-x-6 pb-9 last:pb-0">
              <span aria-hidden="true" className={`relative z-10 mt-1.5 size-[1.375rem] rounded-full border-2 ${item.current ? "border-signal bg-signal" : "border-line-strong bg-bg"}`}>
                <span className={`absolute inset-[5px] rounded-full ${item.current ? "bg-bg" : "bg-line-strong"}`} />
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <ItemTitle page={item.page} current={item.current} className="type-h3 text-fg">
                    {item.label}
                  </ItemTitle>
                  {item.current ? <CurrentBadge /> : null}
                </div>
                <p className="type-body mt-2 max-w-[58ch] text-fg-soft">{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

interface StorySectionProps extends SequenceProps {
  visual: VisualRef;
  steps: Array<Step & { focus?: string; media?: MediaRef }>;
}

/**
 * Stepping text beside a figure. Each step can light up a different part of the figure; the
 * figures for every step are rendered here on the server and the client island only swaps which
 * one is visible as the reader moves through the steps.
 */
export function StorySection({ id, eyebrow, heading, intro, visual, steps, surface }: StorySectionProps) {
  const focuses = [...new Set(steps.map((s) => s.focus ?? visual.focus ?? ""))];
  const visuals = focuses.map((focus) => ({ focus, node: <Diagram visual={{ ...visual, focus: focus || undefined }} animate={false} /> }));
  return (
    <Section id={id} surface={surface} labelledBy={`${id}-title`}>
      <div className="container-wide">
        <SectionHeader id={`${id}-title`} eyebrow={eyebrow} heading={heading} intro={intro} />
        <StoryScroller
          steps={steps.map((step, i) => ({
            key: `${step.heading}-${i}`,
            number: pad(i),
            focus: step.focus ?? visual.focus ?? "",
            title: (
              <div className="flex flex-wrap items-center gap-2">
                <ItemTitle page={step.page} current={step.current} className="type-h3 text-fg">
                  {step.heading}
                </ItemTitle>
                {step.current ? <CurrentBadge /> : null}
              </div>
            ),
            body: step.body,
          }))}
          visuals={visuals}
          initial={Math.max(0, steps.findIndex((s) => s.current))}
        />
      </div>
    </Section>
  );
}
