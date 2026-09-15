import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ResolvedAction } from "@/lib/content/links";
import { buttonClass } from "@/components/primitives/Button";
import { Badge, TypewriterHeading } from "@/components/primitives/SectionHeader";
import type { Surface } from "./Section";

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

/**
 * Closing call to action (Sky9 CTASection): a rounded brand-gradient panel with soft glows, a badge,
 * the typed headline, one line of body and two pill buttons. Headline and body come from the page's
 * contextual conversion page (PDF 391–400).
 */
export function CTASection({ id, heading, headingHref, body, eyebrow = "Get started", actions }: CTASectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} data-surface="brand" className="px-(--gutter) py-8 sm:py-10 md:py-14">
      <div data-reveal="panel" className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-linear-to-br from-indigo-900 via-indigo to-indigo-700 shadow-2xl shadow-indigo/30">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="motion-float-slow absolute -top-12 -left-12 size-48 rounded-full bg-white/10 blur-2xl" />
          <div className="motion-float absolute -right-12 -bottom-12 size-48 rounded-full bg-olive/30 blur-2xl" />
          <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:1.25rem_1.25rem]" />
        </div>
        <div className="relative z-10 px-5 py-8 text-center sm:py-10 md:px-12 md:py-14">
          <div className="mb-3 sm:mb-4">
            <Badge tone="onBrand">{eyebrow}</Badge>
          </div>
          {headingHref ? (
            <h2 id={`${id}-title`} className="tw type-h2 mx-auto max-w-[22ch] text-white" data-typewriter="">
              <span className="tw-text">
                <Link href={headingHref} className="group underline decoration-white/30 decoration-2 underline-offset-[0.18em] transition-colors hover:decoration-olive">
                  {heading}
                  {String.fromCharCode(160)}
                  <ArrowRight aria-hidden="true" className="inline-block size-7 align-[-0.08em] transition-transform group-hover:translate-x-1 md:size-9" />
                </Link>
              </span>
              <span className="tw-type" aria-hidden="true" />
            </h2>
          ) : (
            <TypewriterHeading id={`${id}-title`} text={heading} className="type-h2 mx-auto max-w-[22ch] text-white" />
          )}
          {body ? <p className="type-body-lg mx-auto mt-3 mb-6 max-w-2xl text-indigo-100 sm:mt-5 sm:mb-10 md:text-xl">{body}</p> : <div className="mb-6 sm:mb-10" />}
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            {actions.map((action) =>
              /^https?:/.test(action.href) ? (
                <a key={action.href} href={action.href} className={buttonClass(action.emphasis === "primary" ? "white" : "outlineLight", "", "lg")}>
                  {action.label}
                  {action.emphasis === "primary" ? <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-200 group-hover:translate-x-1" /> : null}
                </a>
              ) : (
                <Link key={action.href} href={action.href} className={buttonClass(action.emphasis === "primary" ? "white" : "outlineLight", "", "lg")}>
                  {action.label}
                  {action.emphasis === "primary" ? <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-200 group-hover:translate-x-1" /> : null}
                </Link>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
