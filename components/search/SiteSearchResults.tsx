"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Icon } from "@/components/primitives/Icon";
import { groupHits, loadSearchIndex, search, type SearchGroup, type SearchIndex } from "@/lib/search/engine";

/** Full results for a query, grouped by content type, with a group filter. The query lives in the URL. */
export function SiteSearchResults() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const initial = params.get("q") ?? "";
  const [query, setQuery] = useState(initial);
  const [filter, setFilter] = useState<SearchGroup | "all">("all");
  const [index, setIndex] = useState<SearchIndex | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    loadSearchIndex().then(setIndex).catch(() => setFailed(true));
  }, []);

  // Keep the URL shareable without adding a history entry per keystroke.
  useEffect(() => {
    const handle = window.setTimeout(() => {
      const next = query.trim();
      if (next === (params.get("q") ?? "")) return;
      router.replace(next ? `${pathname}?q=${encodeURIComponent(next)}` : pathname, { scroll: false });
    }, 250);
    return () => window.clearTimeout(handle);
  }, [query, params, pathname, router]);

  const groups = useMemo(() => (index && query.trim() ? groupHits(search(index, query), index.groups) : []), [index, query]);
  const total = groups.reduce((sum, g) => sum + g.hits.length, 0);
  const visible = filter === "all" ? groups : groups.filter((g) => g.group === filter);

  useEffect(() => {
    if (filter !== "all" && !groups.some((g) => g.group === filter)) setFilter("all");
  }, [groups, filter]);

  return (
    <div className="mt-8">
      <form role="search" onSubmit={(e) => e.preventDefault()} className="flex items-center gap-3 rounded-md border border-line-input bg-raised px-4 focus-within:border-accent">
        <Icon name="search" size={20} className="text-fg-muted" />
        <label htmlFor="site-search-input" className="sr-only">
          Search GetSibu
        </label>
        <input
          id="site-search-input"
          type="search"
          enterKeyHint="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search features, AI, resources and FAQs"
          autoComplete="off"
          autoFocus
          className="type-body-lg h-14 min-w-0 flex-1 bg-transparent outline-none placeholder:text-fg-muted"
        />
      </form>

      <p className="type-body-sm mt-5 text-fg-muted" aria-live="polite">
        {failed ? "Search could not load. Check your connection and try again." : !index ? "Loading the page index…" : query.trim() ? `${total} ${total === 1 ? "page" : "pages"} match “${query.trim()}”.` : `Type to search all ${index.documents.length} pages.`}
      </p>

      {groups.length > 1 ? (
        <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Filter results">
          {[{ group: "all" as const, count: total }, ...groups.map((g) => ({ group: g.group, count: g.hits.length }))].map(({ group, count }) => {
            const selected = filter === group;
            return (
              <button
                key={group}
                type="button"
                aria-pressed={selected}
                onClick={() => setFilter(group)}
                className={`type-body-sm inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 transition-colors ${selected ? "border-accent bg-accent text-accent-fg" : "border-line bg-raised text-fg-soft hover:border-line-strong"}`}
              >
                {group === "all" ? "All" : group}
                <span className={`font-mono text-[0.75rem] ${selected ? "text-accent-fg/80" : "text-fg-muted"}`}>{count}</span>
              </button>
            );
          })}
        </div>
      ) : null}

      <div className="mt-10 flex flex-col gap-12">
        {visible.map((group) => (
          <section key={group.group} aria-labelledby={`group-${group.group.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
            <h2 id={`group-${group.group.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="type-eyebrow border-b border-line pb-3 text-fg-muted">
              {group.group} · {group.hits.length}
            </h2>
            <ul>
              {group.hits.map(({ doc }) => (
                <li key={doc.id} className="border-b border-line">
                  <Link href={doc.path} className="group flex items-start justify-between gap-6 py-4">
                    <span className="flex min-w-0 flex-col gap-1">
                      <span className="type-body font-medium text-fg group-hover:text-accent">{doc.title}</span>
                      <span className="type-body-sm text-fg-muted">
                        {doc.section}
                        {doc.publishable && doc.type !== "section-index" ? ` · ${doc.summary}` : ""}
                      </span>
                    </span>
                    <Icon name="arrowRight" size={17} className="mt-1 shrink-0 text-fg-muted group-hover:text-accent" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
