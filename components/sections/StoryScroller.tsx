"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface ScrollerStep {
  key: string;
  number: string;
  focus: string;
  title: ReactNode;
  body: string;
}

/**
 * Tracks which step is under the middle of the viewport and shows the figure for that step; keyboard
 * focus inside a step selects it too. The figure is sticky beside the steps on large screens and
 * sticky under the header on tall phones. The page's own step is selected until the reader moves.
 *
 * Selection never changes text contrast: the active step gains a rail and a coloured number, and
 * every step stays fully readable (also without JavaScript).
 */
export function StoryScroller({ steps, visuals, initial = 0 }: { steps: ScrollerStep[]; visuals: Array<{ focus: string; node: ReactNode }>; initial?: number }) {
  const [active, setActive] = useState(initial);
  const refs = useRef<Array<HTMLLIElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        // The step under the middle of the viewport wins; two steps can touch the band at once.
        const middle = window.innerHeight / 2;
        let best = -1;
        let distance = Infinity;
        refs.current.forEach((node, i) => {
          if (!node) return;
          const { top, bottom } = node.getBoundingClientRect();
          const d = top <= middle && bottom >= middle ? 0 : Math.min(Math.abs(top - middle), Math.abs(bottom - middle));
          if (d < distance) [best, distance] = [i, d];
        });
        if (best !== -1) setActive(best);
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const activeFocus = steps[active]?.focus ?? "";

  return (
    <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-16">
      <div className="z-10 -mx-(--gutter) bg-bg px-(--gutter) pb-4 max-lg:[@media(min-height:700px)]:sticky max-lg:[@media(min-height:700px)]:top-(--header-height) max-lg:[@media(min-height:700px)]:pt-3 lg:order-last lg:col-span-7 lg:mx-0 lg:bg-transparent lg:px-0 lg:pb-0">
        <div className="mx-auto grid max-w-[24rem] sm:max-w-[30rem] lg:sticky lg:top-28 lg:max-w-none">
          {visuals.map((visual) => {
            const shown = visual.focus === activeFocus;
            return (
              <div key={visual.focus} aria-hidden={!shown} className={`[grid-area:1/1] transition-opacity duration-500 motion-reduce:transition-none ${shown ? "opacity-100" : "invisible opacity-0"}`}>
                {visual.node}
              </div>
            );
          })}
        </div>
      </div>
      <ol className="flex flex-col lg:col-span-5 lg:py-[6vh]">
        {steps.map((step, i) => {
          const selected = i === active;
          return (
            <li
              key={step.key}
              ref={(node) => {
                refs.current[i] = node;
              }}
              data-index={i}
              onFocusCapture={() => setActive(i)}
              className="relative grid grid-cols-[2.5rem_1fr] border-t border-line py-7 first:border-t-0 lg:min-h-[24vh] lg:py-9"
            >
              <span
                aria-hidden="true"
                className={`absolute top-7 bottom-7 -left-3 w-0.5 rounded-full transition-colors duration-300 motion-reduce:transition-none lg:top-9 lg:bottom-9 ${selected ? "bg-signal" : "bg-transparent"}`}
              />
              <span aria-hidden="true" className={`type-eyebrow pt-1.5 transition-colors duration-300 ${selected ? "text-signal-strong" : "text-fg-muted"}`}>
                {step.number}
              </span>
              <div>
                {step.title}
                <p className={`type-body-lg mt-3 transition-colors duration-300 ${selected ? "text-fg-soft" : "text-fg-muted"}`}>{step.body}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
