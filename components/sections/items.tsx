import Link from "next/link";
import type { ReactNode } from "react";
import { pageSummary } from "@/lib/content/links";

/** Marks the item in a set that is the page being read. */
export function CurrentBadge() {
  return <span className="type-eyebrow inline-flex items-center rounded-full bg-signal-soft px-2 py-1 text-[0.625rem] text-signal-strong">This page</span>;
}

/**
 * An item title that links to its page — unless it is the current page, which is labelled instead.
 * Links resolve PDF numbers through the inventory.
 */
export function ItemTitle({ page, current, children, className = "", as: Tag = "h3" }: { page?: number; current?: boolean; children: ReactNode; className?: string; as?: "h3" | "h4" | "p" | "span" }) {
  if (!page || current) return <Tag className={className}>{children}</Tag>;
  return (
    <Tag className={className}>
      <Link href={pageSummary(page).href} className="underline decoration-line-strong decoration-1 underline-offset-[0.2em] transition-colors hover:text-accent hover:decoration-accent">
        {children}
      </Link>
    </Tag>
  );
}

/** "Yes"-style cells become a check with the word kept for screen readers; em dashes read as "Not included". */
export function MatrixCell({ value, emphasise = false }: { value: string; emphasise?: boolean }) {
  if (value === "—") {
    return (
      <span className="text-fg-muted">
        <span aria-hidden="true">—</span>
        <span className="sr-only">Not included</span>
      </span>
    );
  }
  if (["Yes", "Added", "Included"].includes(value)) {
    return (
      <span className={`inline-flex items-center gap-2 ${emphasise ? "font-semibold text-fg" : "text-fg-soft"}`}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
          <circle cx="12" cy="12" r="9" strokeWidth="2" className={emphasise ? "fill-signal-soft stroke-signal" : "fill-none stroke-line-strong"} />
          <path d="m8 12.5 2.5 2.5L16 9.5" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" className={emphasise ? "stroke-signal-strong" : "stroke-fg-muted"} />
        </svg>
        {value}
      </span>
    );
  }
  return <span className={emphasise ? "text-fg" : "text-fg-soft"}>{value}</span>;
}
