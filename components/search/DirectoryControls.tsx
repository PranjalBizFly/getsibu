"use client";

import { Search } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

const ALL = "__all__";

export interface DirectoryFacet {
  id: string;
  heading: string;
  count: number;
}

/**
 * Filter, area chips and collapse controls for the server-rendered page directory (PageDirectory).
 * The list is complete HTML without JavaScript; this island only toggles `hidden`, `aria-expanded` and
 * count text on those nodes, which React does not render on the client.
 */
export function DirectoryControls({ listId, facets, total }: { listId: string; facets: DirectoryFacet[]; total: number }) {
  const [query, setQuery] = useState("");
  const [facet, setFacet] = useState(ALL);
  const [collapsed, setCollapsed] = useState<Set<string>>(() => new Set());
  const [shown, setShown] = useState(total);
  const barRef = useRef<HTMLDivElement>(null);
  const reveal = useRef(false);
  const inputId = useId();

  const termKey = query.trim().toLowerCase().split(/[\s/&-]+/).filter(Boolean).join(" ");
  const searching = termKey.length > 0;
  const filtered = shown !== total;
  const allCollapsed = collapsed.size === facets.length;
  const facetHeading = facets.find((f) => f.id === facet)?.heading;

  useEffect(() => {
    const root = document.getElementById(listId);
    if (!root) return;
    const terms = termKey ? termKey.split(" ") : [];
    let visible = 0;
    for (const group of root.querySelectorAll<HTMLElement>("[data-category]")) {
      const id = group.dataset.category ?? "";
      const inFacet = facet === ALL || facet === id;
      let matches = 0;
      for (const entry of group.querySelectorAll<HTMLElement>("[data-entry]")) {
        const words = entry.dataset.keywords ?? "";
        const match = inFacet && terms.every((term) => words.includes(term));
        entry.hidden = !match;
        if (match) matches += 1;
      }
      group.hidden = matches === 0;
      // A search always shows its matches, so collapsing is only offered while not searching.
      const open = searching || !collapsed.has(id);
      const list = group.querySelector<HTMLElement>("[data-entries]");
      if (list) list.hidden = !open;
      const toggle = group.querySelector<HTMLElement>("[data-toggle]");
      if (toggle) {
        toggle.setAttribute("aria-expanded", String(open));
        toggle.hidden = searching;
      }
      const count = group.querySelector<HTMLElement>("[data-category-count]");
      if (count) {
        const all = Number(count.dataset.categoryCount);
        count.textContent = matches === all ? `${all} pages` : `${matches} of ${all}`;
      }
      visible += matches;
    }
    setShown(visible);

    // After a filter change, bring the top of the list back under the sticky controls if it scrolled away.
    if (reveal.current && barRef.current) {
      reveal.current = false;
      const target = window.scrollY + root.getBoundingClientRect().top - barRef.current.getBoundingClientRect().bottom - 24;
      if (target < window.scrollY) window.scrollTo({ top: target, behavior: document.documentElement.dataset.motion === "on" ? "smooth" : "auto" });
    }
  }, [listId, termKey, searching, facet, collapsed]);

  useEffect(() => {
    const root = document.getElementById(listId);
    if (!root) return;
    root.dataset.filterable = "true";
    const onClick = (event: MouseEvent) => {
      const id = (event.target as Element | null)?.closest<HTMLElement>("[data-toggle]")?.dataset.toggle;
      if (!id) return;
      setCollapsed((current) => {
        const next = new Set(current);
        if (next.has(id)) next.delete(id);
        else next.add(id);
        return next;
      });
    };
    root.addEventListener("click", onClick);
    return () => {
      root.removeEventListener("click", onClick);
      delete root.dataset.filterable;
    };
  }, [listId]);

  const clear = () => {
    reveal.current = true;
    setQuery("");
    setFacet(ALL);
    setCollapsed(new Set());
  };

  const choose = (id: string) => {
    reveal.current = true;
    setFacet((current) => (current === id ? ALL : id));
    setCollapsed((current) => {
      if (!current.has(id)) return current;
      const next = new Set(current);
      next.delete(id);
      return next;
    });
  };

  const textButton = "type-eyebrow shrink-0 text-fg-muted underline decoration-line-strong decoration-[1.5px] underline-offset-4 transition-colors hover:text-accent hover:decoration-accent";

  return (
    <div ref={barRef} className="grid gap-4">
      <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
        <label htmlFor={inputId} className="sr-only">
          Filter pages
        </label>
        <div className="relative min-w-0 flex-1 basis-full sm:max-w-[30rem] sm:basis-auto">
          <Search aria-hidden="true" className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-fg-muted" strokeWidth={2} />
          <input
            id={inputId}
            type="search"
            value={query}
            onChange={(event) => {
              reveal.current = true;
              setQuery(event.target.value);
            }}
            placeholder="Filter pages by name"
            autoComplete="off"
            spellCheck={false}
            aria-controls={listId}
            className="type-body h-12 w-full rounded-full border border-line-input bg-raised pr-4 pl-11 text-fg outline-none transition-colors placeholder:text-fg-muted focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/25"
          />
        </div>
        <p aria-live="polite" className="type-eyebrow shrink-0 text-fg tabular-nums">
          {filtered ? `${shown} of ${total} pages` : `${total} pages`}
          {filtered && facetHeading ? ` · ${facetHeading}` : ""}
        </p>
        {filtered ? (
          <button type="button" onClick={clear} className={textButton}>
            Clear
          </button>
        ) : null}
        {searching ? null : (
          <button type="button" onClick={() => setCollapsed(allCollapsed ? new Set() : new Set(facets.map((f) => f.id)))} className={textButton}>
            {allCollapsed ? "Expand all" : "Collapse all"}
          </button>
        )}
      </div>

      <div role="group" aria-label="Show one area" className="-mx-(--gutter) flex items-center gap-1.5 overflow-x-auto px-(--gutter) pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden">
        <Chip label="All" active={facet === ALL} onClick={() => choose(ALL)} />
        {facets.map((f) => (
          <Chip key={f.id} label={f.heading} count={f.count} active={facet === f.id} onClick={() => choose(f.id)} />
        ))}
      </div>

      {shown === 0 ? (
        <p className="type-body-lg border-t border-line pt-6 pb-2 text-center text-fg-muted">
          Nothing matches “{query.trim()}”.{" "}
          <button type="button" onClick={clear} className="font-semibold text-accent underline underline-offset-4">
            Clear the filter
          </button>{" "}
          to see all {total} pages.
        </p>
      ) : null}
    </div>
  );
}

function Chip({ label, count, active, onClick }: { label: string; count?: number; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`type-body-sm inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full border px-3.5 font-medium whitespace-nowrap transition-colors duration-300 ${
        active ? "border-accent bg-accent-soft text-accent" : "border-line bg-raised text-fg-soft hover:border-accent/50 hover:text-fg"
      }`}
    >
      {label}
      {typeof count === "number" ? <span className={`type-caption tabular-nums ${active ? "text-accent" : "text-fg-muted"}`}>{count}</span> : null}
    </button>
  );
}
