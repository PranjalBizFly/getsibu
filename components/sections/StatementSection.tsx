import { ArrowRight, Quote } from "lucide-react";
import Link from "next/link";
import type { PageLinkRef } from "@/types/content";
import { pageSummary } from "@/lib/content/links";
import { Badge } from "@/components/primitives/SectionHeader";
import { Section, type Surface } from "./Section";

interface StatementSectionProps {
  id: string;
  eyebrow?: string;
  text: string;
  link?: PageLinkRef;
  surface?: Surface;
}

/** Sky9's mission quote block: a badge, the statement set large beside an accent rule, a link on. */
export function StatementSection({ id, eyebrow, text, link, surface }: StatementSectionProps) {
  const target = link ? pageSummary(link.page) : null;
  return (
    <Section id={id} surface={surface} label={eyebrow}>
      <div className="container-content">
        <div data-reveal="" className="mx-auto flex max-w-5xl flex-col items-center text-center">
          {eyebrow ? <Badge>{eyebrow}</Badge> : null}
          <blockquote className="relative mt-5 w-full rounded-3xl border border-line bg-linear-to-br from-accent-soft via-raised to-raised px-6 py-8 sm:px-12 sm:py-10">
            <Quote aria-hidden="true" className="absolute -top-4 left-1/2 size-9 -translate-x-1/2 rounded-full bg-accent p-2 text-accent-fg shadow-glow" />
            <p className="type-statement text-fg sm:text-[1.625rem] md:text-3xl md:leading-snug">{text}</p>
          </blockquote>
          {target ? (
            <Link href={target.href} className="btn-shimmer group type-button mt-7 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-accent-fg shadow-glow transition duration-300 hover:-translate-y-0.5 hover:bg-accent-hover">
              {link?.label ?? target.title}
              <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
