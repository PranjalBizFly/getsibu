import Link from "next/link";
import type { BreadcrumbItem } from "@/types/content";
import { Icon } from "@/components/primitives/Icon";

/** Accessible breadcrumb trail; the current page is text with aria-current. */
export function Breadcrumbs({ items, className = "" }: { items: BreadcrumbItem[]; className?: string }) {
  if (items.length < 2) return null;
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="type-caption flex flex-wrap items-center gap-x-1.5 gap-y-1 text-fg-muted">
        {items.map((item, i) => {
          const current = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {i > 0 ? <Icon name="chevronRight" size={13} className="text-line-strong" /> : null}
              {current ? (
                <span aria-current="page" className="text-fg-soft">
                  {item.label}
                </span>
              ) : (
                <Link href={item.path} className="rounded-xs underline-offset-4 hover:text-accent hover:underline">
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
