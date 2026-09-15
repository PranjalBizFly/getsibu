"use client";

import { useId, useRef, useState, type CSSProperties, type ReactNode } from "react";

export interface ExplorerTab {
  id: string;
  label: string;
  card: ReactNode;
  visual: ReactNode;
}

/**
 * Sky9 course filter: "All" plus one pill per category over a card grid. Choosing a category shows its
 * card beside the category's illustration. WAI-ARIA tabs; every card is in the server HTML.
 */
export function ExplorerTabs({ tabs, label }: { tabs: ExplorerTab[]; label: string }) {
  const [active, setActive] = useState(-1);
  const refs = useRef<Array<HTMLButtonElement | null>>([]);
  const id = useId();
  const options = [{ id: "all", label: "All areas" }, ...tabs.map((t) => ({ id: t.id, label: t.label }))];

  const move = (index: number) => {
    const next = (index + options.length) % options.length;
    setActive(next - 1);
    refs.current[next]?.focus();
  };

  return (
    <div>
      <div className="no-scrollbar -mx-(--gutter) overflow-x-auto px-(--gutter) pb-1 sm:mx-0 sm:px-0">
        <div role="tablist" aria-label={label} className="mx-auto mb-8 flex w-max gap-2.5 sm:mb-10 sm:w-auto sm:flex-wrap sm:justify-center">
          {options.map((option, i) => {
            const selected = i - 1 === active;
            return (
              <button
                key={option.id}
                ref={(node) => {
                  refs.current[i] = node;
                }}
                role="tab"
                id={`${id}-tab-${i}`}
                aria-selected={selected}
                aria-controls={`${id}-panel`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i - 1)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowRight") (e.preventDefault(), move(i + 1));
                  if (e.key === "ArrowLeft") (e.preventDefault(), move(i - 1));
                  if (e.key === "Home") (e.preventDefault(), move(0));
                  if (e.key === "End") (e.preventDefault(), move(options.length - 1));
                }}
                className={`type-caption inline-flex min-h-9 items-center rounded-full border px-4 font-bold whitespace-nowrap transition duration-300 active:scale-95 sm:text-[0.8125rem] ${selected ? "border-accent bg-accent text-accent-fg shadow-glow" : "border-line-strong bg-raised text-fg-soft hover:border-accent/50 hover:text-accent"}`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>

      <div role="tabpanel" id={`${id}-panel`} aria-labelledby={`${id}-tab-${active + 1}`}>
        {active === -1 ? (
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tabs.map((tab, i) => (
              <li key={tab.id} className="tab-panel" style={{ "--tab-i": i } as CSSProperties}>
                {tab.card}
              </li>
            ))}
          </ul>
        ) : (
          <div className="tab-panel grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">{tabs[active].card}</div>
            <div className="lg:col-span-7">{tabs[active].visual}</div>
          </div>
        )}
      </div>
    </div>
  );
}
