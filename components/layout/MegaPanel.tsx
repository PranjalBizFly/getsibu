"use client";

import Link from "next/link";
import { useId, useRef, useState } from "react";
import type { NavColumn, NavItem } from "@/content/architecture/navigation";
import { ArrowLink } from "@/components/primitives/Button";

const RAIL_THRESHOLD = 5;

function ColumnLinks({ column, className = "" }: { column: NavColumn; className?: string }) {
  return (
    <ul className={`flex flex-col ${className}`}>
      {column.links.map((link) => (
        <li key={link.href}>
          <Link href={link.href} className="type-nav block rounded-xs py-2 text-fg-soft transition-colors hover:text-accent">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Up to four categories side by side: heading, one-line description, key pages, explore link. */
function ColumnsPanel({ item }: { item: NavItem }) {
  const columns = item.columns ?? [];
  if (columns.length === 1) {
    const [column] = columns;
    return (
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-4 flex flex-col gap-3 border-r border-line pr-10">
          <p className="type-h4 text-fg">{column.heading}</p>
          <p className="type-body-sm text-fg-muted">{column.description}</p>
          <ArrowLink href={column.hub.href} className="mt-2">
            {column.hub.label}
          </ArrowLink>
        </div>
        <ColumnLinks column={column} className="col-span-8 grid grid-cols-2 gap-x-10" />
      </div>
    );
  }
  return (
    <div className="grid gap-10" style={{ gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` }}>
      {columns.map((column) => (
        <div key={column.heading} className="flex flex-col">
          <p className="type-h4 text-fg">{column.heading}</p>
          <p className="type-body-sm mt-1.5 min-h-[3.1em] text-fg-muted">{column.description}</p>
          <ColumnLinks column={column} className="mt-4 border-t border-line pt-3" />
          <ArrowLink href={column.hub.href} className="mt-3">
            {column.hub.label}
          </ArrowLink>
        </div>
      ))}
    </div>
  );
}

/**
 * Many categories (Features): a rail of categories and one detail area, so the panel shows one
 * category's pages at a time instead of a wall of links. Implemented as a vertical tab list.
 */
function RailPanel({ item }: { item: NavItem }) {
  const columns = item.columns ?? [];
  const [active, setActive] = useState(0);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const id = useId();
  const column = columns[active];

  const move = (next: number) => {
    const index = (next + columns.length) % columns.length;
    setActive(index);
    tabs.current[index]?.focus();
  };

  return (
    <div className="grid grid-cols-12 gap-10">
      <div role="tablist" aria-orientation="vertical" aria-label={`${item.label} categories`} className="col-span-5 flex flex-col gap-0.5 xl:col-span-4">
        {columns.map((c, i) => (
          <button
            key={c.heading}
            ref={(node) => {
              tabs.current[i] = node;
            }}
            role="tab"
            id={`${id}-tab-${i}`}
            aria-selected={i === active}
            aria-controls={`${id}-panel`}
            tabIndex={i === active ? 0 : -1}
            onPointerEnter={(e) => e.pointerType === "mouse" && setActive(i)}
            onFocus={() => setActive(i)}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") (e.preventDefault(), move(i + 1));
              if (e.key === "ArrowUp") (e.preventDefault(), move(i - 1));
              if (e.key === "Home") (e.preventDefault(), move(0));
              if (e.key === "End") (e.preventDefault(), move(columns.length - 1));
            }}
            className={`flex items-start gap-3 rounded-sm px-4 py-3 text-left transition-colors ${i === active ? "bg-sunken shadow-[inset_3px_0_0_var(--accent)]" : "hover:bg-sunken/60"}`}
          >
            <span className={`ring-marker mt-1.5 transition-opacity ${i === active ? "opacity-100" : "opacity-0"}`} aria-hidden="true" />
            <span className="flex flex-col gap-0.5">
              <span className={`type-nav ${i === active ? "text-fg" : "text-fg-soft"}`}>{c.heading}</span>
            </span>
          </button>
        ))}
      </div>
      <div role="tabpanel" id={`${id}-panel`} aria-labelledby={`${id}-tab-${active}`} className="col-span-7 flex flex-col xl:col-span-8">
        <p className="type-h3 text-fg">{column.heading}</p>
        <p className="type-body mt-2 max-w-[52ch] text-fg-muted">{column.description}</p>
        <ColumnLinks column={column} className="mt-5 grid grid-cols-2 gap-x-10 border-t border-line pt-3" />
        <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-6">
          <ArrowLink href={column.hub.href}>{column.hub.label}</ArrowLink>
          <Link href={item.href} className="type-body-sm text-fg-muted underline-offset-4 hover:text-accent hover:underline">
            All {item.label.toLowerCase()}
          </Link>
        </div>
      </div>
    </div>
  );
}

export function MegaPanel({ item }: { item: NavItem }) {
  const columns = item.columns ?? [];
  return (
    <div className="container-wide py-9">
      {columns.length >= RAIL_THRESHOLD ? <RailPanel item={item} /> : <ColumnsPanel item={item} />}
    </div>
  );
}
