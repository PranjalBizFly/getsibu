"use client";

import Link from "next/link";
import { useId, useRef, useState, type ReactNode } from "react";
import { Icon } from "@/components/primitives/Icon";
import { ArrowLink } from "@/components/primitives/Button";

export interface ExplorerTab {
  id: string;
  label: string;
  shortLabel: string;
  pageCount: number;
  summary: string;
  hub: { href: string; label: string };
  links: Array<{ href: string; title: string }>;
  visual: ReactNode;
}

/** WAI-ARIA tabs with automatic activation: arrow keys, Home and End move between categories. */
export function ExplorerTabs({ tabs, label }: { tabs: ExplorerTab[]; label: string }) {
  const [active, setActive] = useState(0);
  const refs = useRef<Array<HTMLButtonElement | null>>([]);
  const id = useId();

  const move = (index: number) => {
    const next = (index + tabs.length) % tabs.length;
    setActive(next);
    refs.current[next]?.focus();
  };

  return (
    <div className="mt-12">
      <div className="-mx-(--gutter) overflow-x-auto px-(--gutter) pt-1 [scrollbar-width:none] lg:mx-0 lg:overflow-visible lg:px-0 lg:pt-0">
        <div role="tablist" aria-label={label} className="flex min-w-max gap-1 border-b border-line lg:min-w-0">
          {tabs.map((tab, i) => {
            const selected = i === active;
            return (
              <button
                key={tab.id}
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
                className={`type-nav relative flex flex-1 flex-col items-start gap-1 px-4 pt-3 pb-4 text-left transition-colors lg:px-5 ${selected ? "text-fg" : "text-fg-muted hover:text-fg"}`}
              >
                <span className="whitespace-nowrap">{tab.shortLabel}</span>
                <span className="font-mono text-[0.6875rem] tracking-wide text-fg-muted">{tab.pageCount} pages</span>
                <span aria-hidden="true" className={`absolute inset-x-0 -bottom-px h-[3px] rounded-t-sm transition-colors ${selected ? "bg-accent" : "bg-transparent"}`} />
              </button>
            );
          })}
        </div>
      </div>

      {tabs.map((tab, i) => (
        <div key={tab.id} role="tabpanel" id={`${id}-panel-${i}`} aria-labelledby={`${id}-tab-${i}`} hidden={i !== active} className="pt-10 lg:pt-12">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="flex flex-col lg:col-span-5">
              <h3 className="type-h3 text-fg">{tab.label}</h3>
              <p className="type-body-lg mt-3 text-fg-soft">{tab.summary}</p>
              <ul className="mt-7 border-t border-line">
                {tab.links.map((link) => (
                  <li key={link.href} className="border-b border-line">
                    <Link href={link.href} className="group flex items-center justify-between gap-4 py-3.5">
                      <span className="type-body font-medium text-fg transition-colors group-hover:text-accent">{link.title}</span>
                      <Icon name="arrowRight" size={17} className="shrink-0 text-fg-muted transition-transform group-hover:translate-x-0.5 group-hover:text-accent" />
                    </Link>
                  </li>
                ))}
              </ul>
              <ArrowLink href={tab.hub.href} className="mt-6">
                {tab.hub.label}
              </ArrowLink>
            </div>
            <div className="lg:col-span-7">{tab.visual}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
