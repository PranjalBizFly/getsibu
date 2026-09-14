import type { PageLinkRef } from "@/types/content";
import { pageSummary } from "@/lib/content/links";
import { ArrowLink } from "@/components/primitives/Button";
import { Eyebrow } from "@/components/primitives/SectionHeader";
import { Section, type Surface } from "./Section";

interface StatementSectionProps {
  id: string;
  eyebrow?: string;
  text: string;
  link?: PageLinkRef;
  surface?: Surface;
}

/** A single quiet statement: the page's idea in one paragraph, set large, with room around it. */
export function StatementSection({ id, eyebrow, text, link, surface }: StatementSectionProps) {
  const target = link ? pageSummary(link.page) : null;
  return (
    <Section id={id} surface={surface} label={eyebrow}>
      <div className="container-content grid gap-6 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-3 lg:pt-2.5">{eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}</div>
        <div className="lg:col-span-9" data-reveal>
          <p className="type-statement max-w-[38ch] text-fg">{text}</p>
          {target ? (
            <ArrowLink href={target.href} className="mt-8">
              {link?.label ?? target.title}
            </ArrowLink>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
