"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState, type CSSProperties, type ReactNode } from "react";

export interface AccordionEntry {
  key: string;
  title: ReactNode;
  /** Shown under the title whether open or not. */
  summary?: ReactNode;
  /** Number shown before the title ("01."), as on the Sky9 home curriculum. */
  number?: string;
  icon?: ReactNode;
  body: ReactNode;
}

/**
 * Sky9 accordion: rounded glass items, a round chevron button that turns and fills when open, the
 * panel height animating open. Every panel is server-rendered (search engines and the FAQPage check
 * read the text); closed panels are inert and hidden from assistive technology. Without JavaScript
 * (no html[data-motion]) every panel shows.
 */
export function Accordion({ items, initiallyOpen = 0, headingLevel = 3 }: { items: AccordionEntry[]; initiallyOpen?: number | null; headingLevel?: 3 | 4 }) {
  const [open, setOpen] = useState<number | null>(initiallyOpen);
  const id = useId();
  const Heading = headingLevel === 3 ? "h3" : "h4";

  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      {items.map((item, i) => {
        const expanded = open === i;
        return (
          <div key={item.key} data-reveal="" style={{ "--i": Math.min(i, 6) * 0.6 } as CSSProperties}>
          <div className={`overflow-hidden rounded-2xl border transition duration-300 ${expanded ? "border-accent/40 bg-raised shadow-lg" : "border-line-strong/70 bg-raised/80 hover:border-accent/30 hover:shadow-md"}`}>
            <Heading className="m-0">
              <button
                type="button"
                id={`${id}-trigger-${i}`}
                aria-expanded={expanded}
                aria-controls={`${id}-panel-${i}`}
                onClick={() => setOpen(expanded ? null : i)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
              >
                <span className="flex min-w-0 items-start gap-3">
                  {item.number ? <span className={`type-body-sm pt-0.5 font-mono font-semibold ${expanded ? "text-accent" : "text-fg-muted"}`}>{item.number}.</span> : null}
                  {item.icon ?? null}
                  <span className="flex min-w-0 flex-col gap-1">
                    <span className={`type-h4 transition-colors sm:text-lg ${expanded ? "text-accent" : "text-fg"}`}>{item.title}</span>
                    {item.summary ? <span className="type-body-sm font-normal text-fg-muted">{item.summary}</span> : null}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className={`flex size-8 shrink-0 items-center justify-center rounded-full border transition duration-300 ${expanded ? "border-accent bg-accent text-accent-fg shadow-md shadow-accent/30" : "border-line-strong text-fg-muted"}`}
                >
                  <ChevronDown className={`size-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} strokeWidth={2.25} />
                </span>
              </button>
            </Heading>
            <div
              id={`${id}-panel-${i}`}
              role="region"
              aria-labelledby={`${id}-trigger-${i}`}
              inert={!expanded}
              aria-hidden={!expanded}
              data-open={expanded ? "" : undefined}
              className="accordion-panel grid transition-[grid-template-rows] duration-300 ease-(--ease-out)"
            >
              <div className="min-h-0 overflow-hidden">
                <div className="type-body-sm mx-5 mt-1 border-t border-line pt-4 pb-5 text-fg-soft sm:mx-6 sm:type-body sm:pb-6">{item.body}</div>
              </div>
            </div>
          </div>
          </div>
        );
      })}
    </div>
  );
}
