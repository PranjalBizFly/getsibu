import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { CSSProperties } from "react";
import { pageSummary } from "@/lib/content/links";
import { iconForLabel } from "@/components/primitives/icons";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { CurrentBadge } from "./items";
import { Section, type Surface } from "./Section";
import { FramedImage, type TopicImageRef } from "./TopicImage";

interface WorkflowSectionProps {
  id: string;
  eyebrow?: string;
  heading: string;
  intro?: string;
  stages: Array<{ label: string; body: string; page?: number; current?: boolean }>;
  image?: TopicImageRef | null;
  surface?: Surface;
  density?: "open" | "dense";
}

/**
 * Sky9 "Learn, Practice, Apply, Grow": numbered stage tiles over a connecting line, each a card that
 * lifts on hover and links on to its page. The order is the information. With a photo, the photo is a
 * wide band under the header and the stage cards rise over its lower edge.
 */
export function WorkflowSection({ id, eyebrow, heading, intro, stages, image, surface, density }: WorkflowSectionProps) {
  const cols = stages.length >= 5 ? "lg:grid-cols-5" : stages.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";
  return (
    <Section id={id} surface={surface} density={density} labelledBy={`${id}-title`}>
      <div className="container-content">
        <SectionHeader id={`${id}-title`} eyebrow={eyebrow ?? "How it works"} heading={heading} intro={intro} />
        {image ? (
          <FramedImage image={image} sizes="(min-width: 1280px) 80rem, 100vw" aspect="aspect-4/3 sm:aspect-2/1 lg:aspect-3/1" captionAt="top" className="rounded-3xl" />
        ) : null}
        <ol className={`relative grid gap-4 sm:grid-cols-2 ${cols} ${image ? "z-10 -mt-8 px-3 sm:-mt-16 sm:px-6 lg:-mt-24 lg:px-8" : ""}`}>
          <span aria-hidden="true" className="absolute top-8 right-[8%] left-[8%] hidden h-0.5 rounded-full bg-linear-to-r from-accent/20 via-accent/60 to-olive/60 lg:block" />
          {stages.map((stage, i) => {
            const page = stage.page && !stage.current ? pageSummary(stage.page) : null;
            const Icon = iconForLabel(stage.label, i);
            return (
              <li key={stage.label} data-reveal="" style={{ "--i": i } as CSSProperties} className="relative">
                <div
                  className={`spotlight group relative flex h-full flex-col rounded-2xl border p-5 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:p-6 ${stage.current ? "border-accent bg-accent-soft shadow-glow" : "border-line-strong/80 bg-raised shadow-sm hover:border-accent/60"}`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="relative z-10 flex size-12 items-center justify-center rounded-2xl border border-accent/30 bg-raised font-mono text-lg font-extrabold text-accent shadow-md transition duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-fg">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Icon aria-hidden="true" className="size-5 text-fg-muted transition-colors group-hover:text-accent" strokeWidth={1.75} />
                  </div>
                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    <h3 className="type-h3 text-fg transition-colors group-hover:text-accent">{stage.label}</h3>
                    {stage.current ? <CurrentBadge /> : null}
                  </div>
                  <p className="type-body-sm mt-2 text-fg-soft">{stage.body}</p>
                  {page ? (
                    <Link href={page.href} className="type-body-sm mt-auto inline-flex items-center gap-1.5 pt-5 font-semibold text-accent after:absolute after:inset-0 after:z-10 after:rounded-2xl after:content-['']">
                      {page.title}
                      <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
