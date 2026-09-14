import type { DiagramId, PageLinkRef, VisualRef } from "@/types/content";
import { pageSummary } from "@/lib/content/links";
import { ArrowLink } from "@/components/primitives/Button";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { Diagram } from "@/components/diagrams/Diagram";
import { Section, type Surface } from "./Section";

interface SplitContentSectionProps {
  id: string;
  eyebrow?: string;
  heading: string;
  intro?: string;
  body: string[];
  points?: string[];
  links?: PageLinkRef[];
  diagram?: DiagramId;
  visual?: VisualRef;
  mediaSide: "start" | "end";
  surface?: Surface;
}

/** Concept and visual side by side. On small screens the text always comes first. */
export function SplitContentSection({ id, eyebrow, heading, intro, body, points, links, diagram, visual, mediaSide, surface }: SplitContentSectionProps) {
  const figure = visual ?? (diagram ? { diagram } : null);
  return (
    <Section id={id} surface={surface} labelledBy={`${id}-title`}>
      <div className="container-wide grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className={`flex flex-col items-start lg:col-span-5 ${mediaSide === "start" ? "lg:order-last" : ""}`}>
          <SectionHeader id={`${id}-title`} eyebrow={eyebrow} heading={heading} intro={intro} />
          <div className="mt-6 flex flex-col gap-4">
            {body.map((paragraph) => (
              <p key={paragraph} className="type-body max-w-[58ch] text-fg-soft">
                {paragraph}
              </p>
            ))}
          </div>
          {points?.length ? (
            <ul className="mt-7 flex w-full flex-col border-t border-line">
              {points.map((point) => (
                <li key={point} className="type-body-sm flex items-center gap-3.5 border-b border-line py-3.5 text-fg">
                  <span className="ring-marker" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          ) : null}
          {links?.length ? (
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              {links.map((link) => {
                const page = pageSummary(link.page);
                return (
                  <ArrowLink key={link.page} href={page.href}>
                    {link.label ?? page.title}
                  </ArrowLink>
                );
              })}
            </div>
          ) : null}
        </div>
        {figure ? (
          <div data-reveal className="lg:col-span-7">
            <Diagram visual={figure} animate={false} />
          </div>
        ) : null}
      </div>
    </Section>
  );
}
