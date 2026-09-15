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
 * focus inside a step selects it too. The figure is sticky beside the steps on large screens. The
 * active step card fills with the accent tint and gains a rail; every step stays readable.
 */
export function StoryScroller({ steps, visuals, initial = 0 }: { steps: ScrollerStep[]; visuals: Array<{ focus: string; node: ReactNode }>; initial?: number }) {
  const [active, setActive] = useState(initial);
  const refs = useRef<Array<HTMLLIElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
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
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
      <div className="z-10 -mx-(--gutter) bg-bg px-(--gutter) pb-4 max-lg:[@media(min-height:700px)]:sticky max-lg:[@media(min-height:700px)]:top-(--header-height) max-lg:[@media(min-height:700px)]:pt-3 lg:order-last lg:col-span-7 lg:mx-0 lg:bg-transparent lg:px-0 lg:pb-0">
        <div className="mx-auto grid max-w-[24rem] sm:max-w-[30rem] lg:sticky lg:top-28 lg:max-w-none">
          {visuals.map((visual) => {
            const shown = visual.focus === activeFocus;
            return (
              <div key={visual.focus} aria-hidden={!shown} className={`[grid-area:1/1] transition duration-500 motion-reduce:transition-none ${shown ? "scale-100 opacity-100" : "invisible scale-[0.98] opacity-0"}`}>
                {visual.node}
              </div>
            );
          })}
        </div>
      </div>
      <ol className="flex flex-col gap-3 lg:col-span-5 lg:py-[4vh]">
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
              className={`relative grid grid-cols-[2.75rem_1fr] rounded-2xl border p-5 transition duration-300 motion-reduce:transition-none lg:min-h-[20vh] lg:p-6 ${selected ? "border-accent/50 bg-accent-soft shadow-lg" : "border-line bg-raised"}`}
            >
              <span aria-hidden="true" className={`absolute top-5 bottom-5 left-0 w-1 rounded-r-full transition-colors duration-300 ${selected ? "bg-accent" : "bg-transparent"}`} />
              <span aria-hidden="true" className={`flex size-9 items-center justify-center rounded-xl font-mono text-xs font-bold transition-colors duration-300 ${selected ? "bg-accent text-accent-fg" : "border border-accent/20 bg-accent-soft text-accent"}`}>
                {step.number}
              </span>
              <div>
                {step.title}
                <p className="type-body mt-2 text-fg-soft">{step.body}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
