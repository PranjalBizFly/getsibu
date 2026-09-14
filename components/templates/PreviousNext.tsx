import Link from "next/link";
import type { InventoryPage } from "@/types/content";
import { pageSummary } from "@/lib/content/links";

/** Previous and next page within the category, in PDF order. */
export function PreviousNext({ page }: { page: InventoryPage }) {
  if (!page.previous && !page.next) return null;
  const previous = page.previous ? pageSummary(page.previous) : null;
  const next = page.next ? pageSummary(page.next) : null;
  return (
    <nav aria-label="More in this section" className="container-content py-12">
      <div className="grid gap-4 border-t border-line pt-8 sm:grid-cols-2">
        {previous ? (
          <Link href={previous.href} className="group -m-3 flex flex-col gap-1 rounded-md p-3 hover:bg-sunken">
            <span className="type-eyebrow text-fg-muted">Previous</span>
            <span className="type-body font-medium text-fg group-hover:text-accent">{previous.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={next.href} className="group -m-3 flex flex-col gap-1 rounded-md p-3 hover:bg-sunken sm:items-end sm:text-right">
            <span className="type-eyebrow text-fg-muted">Next</span>
            <span className="type-body font-medium text-fg group-hover:text-accent">{next.title}</span>
          </Link>
        ) : null}
      </div>
    </nav>
  );
}
