import { ChevronRight, House } from "lucide-react";
import Link from "next/link";
import type { BreadcrumbItem } from "@/types/content";

/** Accessible breadcrumb trail (Sky9 style: home icon, chevrons, current page in the accent). */
export function Breadcrumbs({ items, className = "", onDark = false }: { items: BreadcrumbItem[]; className?: string; onDark?: boolean }) {
  if (items.length < 2) return null;
  const link = onDark ? "text-fg-muted hover:text-signal-strong" : "text-fg-muted hover:text-accent";
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="type-body-sm flex flex-wrap items-center gap-x-1 gap-y-1 font-medium md:gap-x-2">
        {items.map((item, i) => {
          const current = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1 md:gap-2">
              {i > 0 ? <ChevronRight aria-hidden="true" className="size-4 text-fg-muted/70" /> : null}
              {current ? (
                <span aria-current="page" className={onDark ? "text-signal-strong" : "text-accent"}>
                  {item.label}
                </span>
              ) : (
                <Link href={item.path} className={`inline-flex items-center gap-1.5 rounded-xs transition-colors ${link}`}>
                  {i === 0 ? <House aria-hidden="true" className="size-4" /> : null}
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
