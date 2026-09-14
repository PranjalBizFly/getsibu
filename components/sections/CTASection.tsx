import Link from "next/link";
import type { ResolvedAction } from "@/lib/content/links";
import { Icon } from "@/components/primitives/Icon";
import { ButtonLink } from "@/components/primitives/Button";
import { Eyebrow } from "@/components/primitives/SectionHeader";
import { Section, type Surface } from "./Section";

interface CTASectionProps {
  id: string;
  heading: string;
  /** The conversion page the heading names; the heading links to it. */
  headingHref?: string | null;
  body?: string | null;
  eyebrow?: string;
  actions: ResolvedAction[];
  surface?: Surface;
}

/** Closing call to action. Headline and body come from the page's contextual conversion page. */
export function CTASection({ id, heading, headingHref, body, eyebrow = "Get started", actions, surface = "inverse" }: CTASectionProps) {
  return (
    <Section id={id} surface={surface} labelledBy={`${id}-title`}>
      <div className="container-content grid items-end gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7" data-reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 id={`${id}-title`} className="type-h1 mt-5 max-w-[20ch] text-fg">
            {headingHref ? (
              <Link href={headingHref} className="group underline decoration-line-strong decoration-2 underline-offset-[0.18em] transition-colors hover:text-accent hover:decoration-accent">
                {heading}
                {String.fromCharCode(160)}
                <Icon name="arrowRight" size={28} className="inline-block align-[-0.08em] transition-transform group-hover:translate-x-1" />
              </Link>
            ) : (
              heading
            )}
          </h2>
          {body ? <p className="type-body-lg mt-5 max-w-[58ch] text-fg-soft">{body}</p> : null}
        </div>
        <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
          {actions.map((action) => (
            <ButtonLink key={action.href} href={action.href} variant={action.emphasis === "primary" ? "primary" : "secondary"} arrow={action.emphasis === "primary"}>
              {action.label}
            </ButtonLink>
          ))}
        </div>
      </div>
    </Section>
  );
}
