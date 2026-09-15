import { ChevronDown } from "lucide-react";
import Link from "next/link";
import type { Directory } from "@/lib/content/directory";
import { DirectoryControls } from "./DirectoryControls";

const LIST_ID = "page-directory";

/**
 * Every live page as grouped link lists (Mengo sitemap structure): sticky filter controls, then one
 * collapsible group per area with its hub in the heading and a page count. The complete list is static
 * HTML; DirectoryControls adds filtering, area chips and collapsing on top of it.
 */
export function PageDirectory({ directory }: { directory: Directory }) {
  const { groups, total } = directory;
  return (
    <section aria-label="All pages" className="pt-6 pb-20 md:pb-24">
      <div className="container-content">
        <div className="sticky top-(--header-height) z-30 -mx-(--gutter) mb-10 border-b border-line bg-bg/90 px-(--gutter) py-4 backdrop-blur-xl sm:py-5 md:mb-14">
          <DirectoryControls listId={LIST_ID} total={total} facets={groups.map((group) => ({ id: group.id, heading: group.heading, count: group.entries.length }))} />
        </div>

        <div id={LIST_ID} className="grid gap-12 md:gap-16">
          {groups.map((group) => {
            const id = `pages-${group.id}`;
            return (
              <section key={group.id} id={id} data-category={group.id} aria-labelledby={`${id}-title`}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-line pb-4">
                  <h2 id={`${id}-title`} className="type-h2-sm text-fg">
                    {group.href ? (
                      <Link href={group.href} prefetch={false} className="transition-colors hover:text-accent">
                        {group.heading}
                      </Link>
                    ) : (
                      group.heading
                    )}
                  </h2>
                  <div className="flex shrink-0 items-center gap-3">
                    <p data-category-count={group.entries.length} className="type-eyebrow text-fg-muted tabular-nums">
                      {group.entries.length} pages
                    </p>
                    <button
                      type="button"
                      data-toggle={group.id}
                      aria-expanded="true"
                      aria-controls={`${id}-list`}
                      className="group hidden size-8 items-center justify-center rounded-full text-fg-muted transition-colors hover:bg-sunken hover:text-accent [[data-filterable=true]_&]:inline-flex"
                    >
                      <span className="sr-only">Show or hide {group.heading}</span>
                      <ChevronDown aria-hidden="true" className="size-4 transition-transform duration-200 group-aria-[expanded=false]:-rotate-90" strokeWidth={2.25} />
                    </button>
                  </div>
                </div>
                <ul id={`${id}-list`} data-entries="" className="mt-5 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
                  {group.entries.map((entry) => (
                    <li key={entry.href} data-entry="" data-keywords={entry.keywords}>
                      <Link
                        href={entry.href}
                        prefetch={false}
                        className="type-body block rounded-xs py-1.5 text-fg-soft transition-[color,translate] duration-300 hover:text-accent motion-safe:hover:translate-x-1"
                      >
                        {entry.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
