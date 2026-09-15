"use client";

import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import type { NavModelColumn, NavModelItem, NavModelLink } from "@/lib/navigation";
import { navIcon } from "./nav-icons";

function SmallTile({ link, index }: { link: { icon: string; label: string }; index: number }) {
  const Icon = navIcon(link.icon, link.label, index);
  return (
    <span aria-hidden="true" className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-accent/20 bg-accent-soft text-accent transition duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-fg">
      <Icon className="size-4" strokeWidth={2} />
    </span>
  );
}

/**
 * Sky9 mega panel: a centred card, four columns — an icon heading over a rule, the column's hub link
 * in the accent colour, then its pages.
 */
function MegaGrid({ item }: { item: NavModelItem }) {
  const columns = item.columns ?? [];
  const perRow = Math.min(4, columns.length);
  return (
    <div className="grid gap-x-6 gap-y-7" style={{ gridTemplateColumns: `repeat(${perRow}, minmax(0, 1fr))` }}>
      {columns.map((column: NavModelColumn, i) => {
        const Icon = navIcon(column.icon, column.heading, i);
        return (
          <div key={column.heading} className="min-w-0">
            <p className="flex items-center gap-2.5 border-b border-line pb-3">
              <span aria-hidden="true" className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-accent/20 bg-accent-soft text-accent">
                <Icon className="size-4" strokeWidth={2} />
              </span>
              <span className="type-nav text-fg">{column.heading}</span>
            </p>
            <Link href={column.hub.href} className="type-caption mt-3 block font-bold text-accent transition-colors hover:text-accent-hover hover:underline hover:underline-offset-4">
              {column.hub.label}
            </Link>
            <ul className="mt-2 flex flex-col">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="group type-caption flex items-center gap-1 py-1.5 text-fg-soft transition-colors hover:text-accent">
                    <span className="min-w-0">{link.label}</span>
                    <ChevronRight aria-hidden="true" className="size-3 shrink-0 -translate-x-1 opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

/** Sky9 list panel: rows with an icon tile, a bold title and a one-line description. */
function ListRows({ item }: { item: NavModelItem }) {
  const rows: NavModelLink[] = (item.columns ?? []).flatMap((column) => column.links);
  const hub = item.columns?.[0]?.hub;
  return (
    <div>
      <ul className={`grid gap-1 ${rows.length > 5 ? "grid-cols-2" : "grid-cols-1"}`}>
        {rows.map((link, i) => (
          <li key={link.href}>
            <Link href={link.href} className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-sunken">
              <SmallTile link={link} index={i} />
              <span className="flex min-w-0 flex-col">
                <span className="type-body-sm font-semibold text-fg transition-colors group-hover:text-accent">{link.label}</span>
                {link.description ? <span className="type-caption line-clamp-1 text-fg-muted">{link.description}</span> : null}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      {hub ? (
        <Link href={hub.href} className="group type-caption mt-2 flex items-center justify-between gap-3 rounded-xl border-t border-line px-3 pt-3 font-bold text-accent">
          {hub.label}
          <ArrowRight aria-hidden="true" className="size-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      ) : null}
    </div>
  );
}

export function NavPanel({ item }: { item: NavModelItem }) {
  return item.kind === "mega" ? <MegaGrid item={item} /> : <ListRows item={item} />;
}

/** Panel width, as on Sky9: 920px for mega panels, 385px (two columns: 640px) for lists. */
export function panelWidth(item: NavModelItem) {
  if (item.kind === "mega") return (item.columns?.length ?? 0) >= 4 ? "w-[57.5rem]" : "w-[44rem]";
  const count = (item.columns ?? []).reduce((sum, c) => sum + c.links.length, 0);
  return count > 5 ? "w-[40rem]" : "w-[24rem]";
}
