import { ArrowRight, CircleCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";
import type { DiagramId, PageLinkRef, VisualRef } from "@/types/content";
import { pageSummary } from "@/lib/content/links";
import { Badge, TypewriterHeading } from "@/components/primitives/SectionHeader";
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
  image?: { src: string; alt: string; caption?: string } | null;
}

/**
 * Sky9 "Featured program" split: badge, heading, body and a two-column list of checked key points,
 * an outlined button — beside a floating framed figure. On small screens the text comes first.
 */
export function SplitContentSection({ id, eyebrow, heading, intro, body, points, links, diagram, visual, mediaSide, surface, image }: SplitContentSectionProps) {
  const figure = visual ?? (diagram ? { diagram } : null);
  return (
    <Section id={id} surface={surface} labelledBy={`${id}-title`}>
      <div className="container-content grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div data-reveal="" className={`flex min-w-0 flex-col items-start ${mediaSide === "start" ? "lg:order-last" : ""}`}>
          {eyebrow ? <Badge>{eyebrow}</Badge> : null}
          <TypewriterHeading id={`${id}-title`} text={heading} className="type-h2-sm mt-4 text-fg" />
          {intro ? <p className="type-body-lg mt-3 text-fg-muted">{intro}</p> : null}
          <div className="mt-4 flex flex-col gap-3">
            {body.map((paragraph) => (
              <p key={paragraph} className="type-body text-fg-soft">
                {paragraph}
              </p>
            ))}
          </div>
          {points?.length ? (
            <>
              <p className="type-h4 mt-6 text-fg">Key points:</p>
              <ul className="mt-3 grid w-full gap-x-6 gap-y-2.5 sm:grid-cols-2">
                {points.map((point, i) => (
                  <li key={point} data-reveal="" style={{ "--i": i * 0.5 } as CSSProperties} className="type-body-sm flex items-start gap-2.5 text-fg-soft">
                    <CircleCheck aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-signal-strong" strokeWidth={2.25} />
                    {point}
                  </li>
                ))}
              </ul>
            </>
          ) : null}
          {links?.length ? (
            <div className="mt-7 flex flex-wrap gap-3">
              {links.map((link) => {
                const page = pageSummary(link.page);
                return (
                  <Link key={link.page} href={page.href} className="group type-button inline-flex items-center gap-2 rounded-xl border border-line-strong bg-raised px-5 py-3 text-fg shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent hover:shadow-md">
                    {link.label ?? page.title}
                    <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                );
              })}
            </div>
          ) : null}
        </div>
        {image ? (
          <div data-reveal="scale" className="min-w-0">
            <div className="spotlight relative overflow-hidden rounded-2xl border border-line-strong/70 bg-raised p-2.5 shadow-2xl shadow-indigo/10 transition duration-500 hover:-translate-y-1 sm:p-3.5">
              <div className="relative aspect-16/9 w-full overflow-hidden rounded-xl bg-navy-950">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        ) : figure ? (
          <div data-reveal="scale" className="min-w-0">
            <div className="spotlight relative rounded-2xl border border-line-strong/70 bg-raised p-3 shadow-2xl shadow-indigo/10 transition duration-500 hover:-translate-y-1 sm:p-5">
              <Diagram visual={figure} animate={false} />
            </div>
          </div>
        ) : null}
      </div>
    </Section>
  );
}
