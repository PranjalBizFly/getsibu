import type { CSSProperties, ReactNode } from "react";
import type { BreadcrumbItem, DiagramId, VisualRef } from "@/types/content";
import type { ResolvedAction } from "@/lib/content/links";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { ArrowLink, ButtonLink } from "@/components/primitives/Button";
import { Eyebrow } from "@/components/primitives/SectionHeader";
import { Diagram } from "@/components/diagrams/Diagram";

interface PageHeroProps {
  title: string;
  eyebrow?: string;
  lede?: string | null;
  /** When the lede is another page's statement: that page, linked under the lede. */
  context?: { title: string; href: string } | null;
  actions?: ResolvedAction[];
  breadcrumb?: BreadcrumbItem[];
  diagram?: DiagramId;
  visual?: VisualRef;
  /** Right-hand column for inner pages (topic context) when there is no diagram. */
  aside?: ReactNode;
  /** "display" for the homepage; "page" for every other page. */
  scale?: "display" | "page";
}

const stagger = (i: number) => ({ "--i": i }) as CSSProperties;

/**
 * The hero system. One component for every page: the homepage uses the display scale with a
 * diagram; inner pages use the page scale with breadcrumbs and an optional aside. Sized to its
 * content — never a full-viewport opener.
 */
export function PageHero({ title, eyebrow, lede, context, actions = [], breadcrumb, diagram, visual, aside, scale = "page" }: PageHeroProps) {
  const display = scale === "display";
  const figure = visual ?? (diagram ? { diagram } : null);
  const side = figure ? <Diagram visual={figure} framed={figure.diagram !== "library-search"} /> : aside;
  return (
    <section aria-labelledby="page-title" data-surface="hero" className="border-b border-line">
      <div
        className={`${display ? "container-wide" : "container-content"} grid items-center gap-x-12 gap-y-12 ${display ? "pt-10 pb-16 md:pt-16 lg:pb-24" : "pt-8 pb-14 md:pt-10 lg:pb-20"} ${side ? "lg:grid-cols-12" : ""}`}
      >
        <div className={`motion-enter flex flex-col items-start ${side ? (display ? "lg:col-span-6 xl:col-span-5" : "lg:col-span-7") : "max-w-4xl"}`}>
          {breadcrumb ? <Breadcrumbs items={breadcrumb} className="mb-8 md:mb-10" /> : null}
          {eyebrow ? (
            <div style={stagger(0)}>
              <Eyebrow>{eyebrow}</Eyebrow>
            </div>
          ) : null}
          <h1 id="page-title" style={stagger(1)} className={`${display ? "type-display max-w-[15ch]" : "type-h1 max-w-[22ch]"} mt-5 text-fg`}>
            {title}
          </h1>
          {lede ? (
            <p style={stagger(2)} className={`type-body-lg mt-6 text-fg-soft ${display ? "max-w-[44ch]" : "max-w-[60ch]"}`}>
              {lede}
            </p>
          ) : null}
          {lede && context ? (
            <p style={stagger(2)} className="type-body-sm mt-4 text-fg-muted">
              From{" "}
              <ArrowLink href={context.href}>
                {context.title}
              </ArrowLink>
            </p>
          ) : null}
          {actions.length ? (
            <div style={stagger(3)} className="mt-9 flex flex-wrap gap-3">
              {actions.map((action) => (
                <ButtonLink key={action.href} href={action.href} variant={action.emphasis === "primary" ? "primary" : "secondary"} arrow={action.emphasis === "primary"}>
                  {action.label}
                </ButtonLink>
              ))}
            </div>
          ) : null}
        </div>
        {side ? <div className={display ? "lg:col-span-6 xl:col-span-7" : "lg:col-span-5"}>{side}</div> : null}
      </div>
    </section>
  );
}
