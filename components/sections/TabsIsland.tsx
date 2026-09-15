"use client";

import { useId, useRef, useState, type ReactNode } from "react";

export interface TabEntry {
  key: string;
  label: string;
  icon?: ReactNode;
  panel: ReactNode;
}

/**
 * Sky9 filter-pill tabs: a row of rounded pills (the selected one filled with the accent) over the
 * panels. WAI-ARIA tabs with automatic activation; every panel is server-rendered.
 */
export function TabsIsland({ tabs, label }: { tabs: TabEntry[]; label: string }) {
  const [active, setActive] = useState(0);
  const refs = useRef<Array<HTMLButtonElement | null>>([]);
  const id = useId();

  const move = (index: number) => {
    const next = (index + tabs.length) % tabs.length;
    setActive(next);
    refs.current[next]?.focus();
  };

  return (
    <div>
      <div className="no-scrollbar -mx-(--gutter) overflow-x-auto px-(--gutter) pb-1 sm:mx-0 sm:px-0">
        <div role="tablist" aria-label={label} className="mx-auto flex w-max gap-2 sm:flex-wrap sm:justify-center">
          {tabs.map((tab, i) => {
            const selected = i === active;
            return (
              <button
                key={tab.key}
                ref={(node) => {
                  refs.current[i] = node;
                }}
                role="tab"
                id={`${id}-tab-${i}`}
                aria-selected={selected}
                aria-controls={`${id}-panel-${i}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowRight") (e.preventDefault(), move(i + 1));
                  if (e.key === "ArrowLeft") (e.preventDefault(), move(i - 1));
                  if (e.key === "Home") (e.preventDefault(), move(0));
                  if (e.key === "End") (e.preventDefault(), move(tabs.length - 1));
                }}
                className={`type-nav inline-flex min-h-10 items-center gap-2 rounded-full border px-4 whitespace-nowrap transition duration-300 active:scale-95 ${selected ? "border-accent bg-accent text-accent-fg shadow-glow" : "border-line-strong bg-raised text-fg-soft hover:border-accent/50 hover:text-accent"}`}
              >
                {tab.icon}
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
      {tabs.map((tab, i) => (
        <div key={tab.key} role="tabpanel" id={`${id}-panel-${i}`} aria-labelledby={`${id}-tab-${i}`} hidden={i !== active} className="tab-panel pt-8 sm:pt-10">
          {tab.panel}
        </div>
      ))}
    </div>
  );
}
