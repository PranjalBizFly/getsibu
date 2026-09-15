import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { InventoryPage } from "@/types/content";
import { pageSummary } from "@/lib/content/links";

/** Previous and next page within the category, in PDF order — a slim bar of two link cards. */
export function PreviousNext({ page }: { page: InventoryPage }) {
  if (!page.previous && !page.next) return null;
  const previous = page.previous ? pageSummary(page.previous) : null;
  const next = page.next ? pageSummary(page.next) : null;
  const card = "group flex min-w-0 items-center gap-3 rounded-xl border border-line-strong/70 bg-raised px-4 py-3 transition duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-md";
  return (
    <nav aria-label="More in this section" className="container-content py-6 sm:py-8">
      <div className="grid gap-3 sm:grid-cols-2">
        {previous ? (
          <Link href={previous.href} className={card}>
            <ArrowLeft aria-hidden="true" className="size-4 shrink-0 text-fg-muted transition-transform group-hover:-translate-x-1 group-hover:text-accent" />
            <span className="flex min-w-0 flex-col">
              <span className="type-eyebrow text-fg-muted">Previous</span>
              <span className="type-body-sm truncate font-bold text-fg group-hover:text-accent">{previous.title}</span>
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={next.href} className={`${card} justify-end text-right`}>
            <span className="flex min-w-0 flex-col">
              <span className="type-eyebrow text-fg-muted">Next</span>
              <span className="type-body-sm truncate font-bold text-fg group-hover:text-accent">{next.title}</span>
            </span>
            <ArrowRight aria-hidden="true" className="size-4 shrink-0 text-fg-muted transition-transform group-hover:translate-x-1 group-hover:text-accent" />
          </Link>
        ) : null}
      </div>
    </nav>
  );
}
