/**
 * Sequence sections in Sky9's patterns: process (the numbered roadmap cards), timeline (a rail of
 * glass cards) and story (steps beside a sticky figure that follows the reader).
 */
import type { CSSProperties } from "react";
import type { MediaRef, TopicIcon, VisualRef } from "@/types/content";
import { iconForLabel } from "@/components/primitives/icons";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { Diagram } from "@/components/diagrams/Diagram";
import { CurrentBadge, ItemTitle } from "./items";
import { Section, type Surface } from "./Section";
import { StoryScroller } from "./StoryScroller";
import { TOPIC_ICON } from "./topic-icons";

interface Step {
  heading: string;
  body: string;
  page?: number;
  current?: boolean;
  icon?: TopicIcon;
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

/** Sky9 ProcessSection: centred icon cards with a numbered badge, wrapping five to a row. */
export function ProcessSection({ id, eyebrow, heading, intro, steps, surface, density }: SequenceProps & { steps: Step[] }) {
  const width = steps.length >= 5 ? "lg:w-[calc(20%-1.2rem)]" : steps.length === 4 ? "lg:w-[calc(25%-1.125rem)]" : "lg:w-[calc(33.333%-1rem)]";
  return (
    <Section id={id} surface={surface ?? "muted"} density={density} labelledBy={`${id}-title`}>
      <div className="container-content">
        <SectionHeader id={`${id}-title`} eyebrow={eyebrow ?? "Step by step"} heading={heading} intro={intro} />
        <ol className="relative flex flex-wrap justify-center gap-6 pt-4">
          {steps.map((step, i) => {
            const Icon = step.icon ? TOPIC_ICON[step.icon] : iconForLabel(step.heading, i);
            return (
              <li key={step.heading} data-reveal="" style={{ "--i": i } as CSSProperties} className={`w-full sm:w-[calc(50%-0.75rem)] ${width}`}>
                <div
                  className={`spotlight group relative flex h-full flex-col items-center rounded-2xl border p-5 text-center shadow-md backdrop-blur-xl transition duration-300 hover:shadow-xl ${step.current ? "border-accent bg-accent-soft" : "border-line-strong bg-raised/80 hover:border-accent/60"}`}
                >
                  <span className="relative z-10 flex size-16 items-center justify-center rounded-2xl border-2 border-accent/40 bg-accent-soft shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:border-accent">
                    <Icon aria-hidden="true" className="size-7 text-accent" strokeWidth={1.75} />
                    <span aria-hidden="true" className="absolute -top-2 -right-2 rounded-full bg-accent px-2 py-0.5 font-mono text-[0.6875rem] font-extrabold text-accent-fg shadow">
                      {pad(i)}
                    </span>
                  </span>
                  <div className="mt-5 flex flex-col items-center gap-2">
                    <ItemTitle page={step.page} current={step.current} className="type-h4 text-fg transition-colors group-hover:text-accent">
                      {step.heading}
                    </ItemTitle>
                    {step.current ? <CurrentBadge /> : null}
                    <p className="type-caption mx-auto max-w-xs text-fg-soft sm:text-[0.8125rem]">{step.body}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}

/** A vertical rail of glass cards: the order over time is the information. */
export function TimelineSection({ id, eyebrow, heading, intro, items, surface, density }: SequenceProps & { items: Array<{ label: string; body: string; page?: number; current?: boolean }> }) {
  return (
    <Section id={id} surface={surface} density={density} labelledBy={`${id}-title`}>
      <div className="container-content grid gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <SectionHeader id={`${id}-title`} eyebrow={eyebrow ?? "Over time"} heading={heading} intro={intro} align="start" size="sm" className="lg:sticky lg:top-28" />
        </div>
        <ol className="relative flex flex-col gap-4 lg:col-span-8">
          <span aria-hidden="true" className="absolute top-4 bottom-4 left-[1.1875rem] w-0.5 rounded-full bg-linear-to-b from-accent via-indigo-300 to-olive" />
          {items.map((item, i) => (
            <li key={item.label} data-reveal="left" style={{ "--i": i % 4 } as CSSProperties} className="relative grid grid-cols-[2.5rem_1fr] gap-x-4">
              <span aria-hidden="true" className={`relative z-10 mt-4 flex size-10 items-center justify-center rounded-full border-2 font-mono text-xs font-bold shadow-md ${item.current ? "border-accent bg-accent text-accent-fg" : "border-accent/40 bg-raised text-accent"}`}>
                {pad(i)}
              </span>
              <div className={`group rounded-2xl border p-5 transition duration-300 ${item.current ? "border-accent bg-accent-soft shadow-glow" : "border-line-strong/70 bg-raised shadow-sm hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-lg"}`}>
                <div className="flex flex-wrap items-center gap-2">
                  <ItemTitle page={item.page} current={item.current} className="type-h4 text-fg sm:text-lg">
                    {item.label}
                  </ItemTitle>
                  {item.current ? <CurrentBadge /> : null}
                </div>
                <p className="type-body-sm mt-1.5 text-fg-soft sm:type-body">{item.body}</p>
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
 * Stepping text beside a figure. Each step can light up a different part of the figure; the figures
 * for every step are rendered on the server and the client island only swaps which one is visible.
 */
export function StorySection({ id, eyebrow, heading, intro, visual, steps, surface }: StorySectionProps) {
  const focuses = [...new Set(steps.map((s) => s.focus ?? visual.focus ?? ""))];
  const visuals = focuses.map((focus) => ({
    focus,
    node: (
      <div className="rounded-2xl border border-line-strong/70 bg-raised p-3 shadow-xl sm:p-5">
        <Diagram visual={{ ...visual, focus: focus || undefined }} animate={false} />
      </div>
    ),
  }));
  return (
    <Section id={id} surface={surface} labelledBy={`${id}-title`}>
      <div className="container-content">
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
