import type { CSSProperties } from "react";
import { Boxes, Compass, Layers, Lightbulb, Zap } from "lucide-react";
import { iconForLabel, type LucideIcon } from "@/components/primitives/icons";
import { CountUp } from "@/components/motion/CountUp";

const SPARE: LucideIcon[] = [Compass, Layers, Zap, Lightbulb, Boxes];

/**
 * Sky9's StatsBar, without invented numbers: a floating glass panel of up to four tiles, each an icon
 * over the name of an area this page covers and how many topics it holds (a fact about the site).
 * As on Sky9 the panel rises in, the tiles scale in one after another and the counts count up.
 */
export function CapabilityStrip({ groups, showCounts = true }: { groups: Array<{ label: string; pages: number[] }>; showCounts?: boolean }) {
  const tiles = groups.slice(0, 4);
  const used = new Set<LucideIcon>();
  const icons = tiles.map((group, i) => {
    let icon = iconForLabel(group.label, i);
    if (used.has(icon)) icon = SPARE.find((s) => !used.has(s)) ?? icon;
    used.add(icon);
    return icon;
  });
  if (tiles.length < 2) return null;
  return (
    <section aria-label="Areas covered" className="surface-muted relative z-20 bg-bg py-3 sm:py-6 md:py-8">
      <div className="container-content">
        <div data-reveal="" className="glass-panel rounded-2xl px-3 py-4 shadow-xl sm:rounded-3xl sm:px-4 sm:py-6 md:px-8">
          <ul className={`grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 md:divide-x md:divide-line ${tiles.length === 4 ? "md:grid-cols-4" : tiles.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
            {tiles.map((group, i) => {
              const Icon = icons[i];
              return (
                <li key={group.label} data-reveal="scale" style={{ "--i": i } as CSSProperties} className="group flex flex-col items-center p-3 text-center sm:p-4">
                  <span aria-hidden="true" className="mb-3.5 flex size-14 items-center justify-center rounded-2xl border border-accent/20 bg-accent-soft text-accent shadow-sm transition duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-fg sm:size-16">
                    <Icon className="size-7" strokeWidth={1.75} />
                  </span>
                  <p className="type-h4 text-fg transition-colors group-hover:text-accent sm:text-lg">{group.label}</p>
                  {showCounts ? (
                    <p className="type-caption mt-1 font-medium text-fg-muted">
                      <CountUp value={group.pages.length} /> {group.pages.length === 1 ? "topic" : "topics"}
                    </p>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
