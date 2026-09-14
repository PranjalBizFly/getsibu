import type { CSSProperties } from "react";
import { pageSummary } from "@/lib/content/links";
import { ArrowLink } from "@/components/primitives/Button";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { CurrentBadge } from "./items";
import { Section, type Surface } from "./Section";

interface WorkflowSectionProps {
  id: string;
  eyebrow?: string;
  heading: string;
  intro?: string;
  stages: Array<{ label: string; body: string; page?: number; current?: boolean }>;
  surface?: Surface;
  density?: "open" | "dense";
}

/** An ordered sequence of stages. Numbered because the order is the information. */
export function WorkflowSection({ id, eyebrow, heading, intro, stages, surface, density }: WorkflowSectionProps) {
  return (
    <Section id={id} surface={surface} density={density} labelledBy={`${id}-title`}>
      <div className="container-content">
        <SectionHeader id={`${id}-title`} eyebrow={eyebrow} heading={heading} intro={intro} />
        <ol className={`mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 ${stages.length >= 5 ? "lg:grid-cols-5" : stages.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
          {stages.map((stage, i) => {
            const page = stage.page && !stage.current ? pageSummary(stage.page) : null;
            return (
              <li key={stage.label} data-reveal style={{ "--i": i } as CSSProperties} className={`flex flex-col p-6 lg:p-7 ${stage.current ? "bg-signal-soft" : "bg-raised"}`}>
                <p className="type-eyebrow flex items-center gap-3 text-signal-strong">
                  <span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  <span className="h-px flex-1 bg-line" aria-hidden="true" />
                  {stage.current ? <CurrentBadge /> : null}
                </p>
                <h3 className="type-h3 mt-5 text-fg">{stage.label}</h3>
                <p className="type-body-sm mt-2.5 text-fg-muted">{stage.body}</p>
                {page ? (
                  <ArrowLink href={page.href} className="mt-auto pt-6">
                    {page.title}
                  </ArrowLink>
                ) : null}
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
