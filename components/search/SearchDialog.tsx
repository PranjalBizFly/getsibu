"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { Icon } from "@/components/primitives/Icon";
import { groupHits, loadSearchIndex, search, type SearchDocument, type SearchIndex } from "@/lib/search/engine";

const PER_GROUP = 4;
/** Shown before typing: the main hubs, so the dialog is useful at rest. */
const BROWSE_IDS = ["index-features", "index-ai", "index-search-discovery", "page-241", "page-280", "page-321", "index-use-cases", "index-resources"];

interface Option {
  doc: SearchDocument;
  group: string;
}

export function SearchDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState<SearchIndex | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const [active, setActive] = useState(0);
  const id = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      inputRef.current?.select();
    }
    if (!open && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    if (!open || index) return;
    setStatus("loading");
    loadSearchIndex()
      .then((loaded) => {
        setIndex(loaded);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, [open, index]);

  const trimmed = query.trim();

  const { groups, options } = useMemo(() => {
    if (!index) return { groups: [], options: [] as Option[] };
    if (!trimmed) {
      const docs = BROWSE_IDS.map((docId) => index.documents.find((d) => d.id === docId)).filter((d): d is SearchDocument => !!d);
      return { groups: [{ label: "Browse", options: docs.map((doc) => ({ doc, group: "Browse" })) }], options: docs.map((doc) => ({ doc, group: "Browse" })) };
    }
    const grouped = groupHits(search(index, trimmed), index.groups, PER_GROUP).slice(0, 6);
    const list = grouped.map((g) => ({ label: g.group, options: g.hits.map((h) => ({ doc: h.doc, group: g.group })) }));
    return { groups: list, options: list.flatMap((g) => g.options) };
  }, [index, trimmed]);

  useEffect(() => setActive(0), [trimmed]);

  useEffect(() => {
    listRef.current?.querySelector(`[data-index="${active}"]`)?.scrollIntoView({ block: "nearest" });
  }, [active]);

  const go = (doc: SearchDocument) => {
    onClose();
    router.push(doc.path);
  };

  const exploreHref = `/site-search?q=${encodeURIComponent(trimmed)}`;
  let optionIndex = -1;

  return (
    <dialog
      ref={dialogRef}
      aria-label="Search GetSibu"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className="search-dialog mx-auto mt-[8vh] mb-auto max-h-[min(80vh,42rem)] w-[min(100%-1.5rem,44rem)] max-w-none overflow-hidden rounded-lg border border-line bg-raised p-0 text-fg shadow-panel"
    >
      <div className="flex max-h-[min(80vh,42rem)] flex-col">
        <div className="flex items-center gap-3 border-b border-line px-4 focus-within:shadow-[inset_0_-2px_0_var(--accent)] sm:px-5">
          <Icon name="search" size={20} className="shrink-0 text-fg-muted" />
          <input
            ref={inputRef}
            type="search"
            enterKeyHint="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search features, AI, resources and FAQs"
            aria-label="Search GetSibu"
            role="combobox"
            aria-expanded={options.length > 0}
            aria-controls={`${id}-list`}
            aria-activedescendant={options.length ? `${id}-option-${active}` : undefined}
            aria-autocomplete="list"
            autoComplete="off"
            spellCheck={false}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setActive((a) => (options.length ? (a + 1) % options.length : 0));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setActive((a) => (options.length ? (a - 1 + options.length) % options.length : 0));
              } else if (e.key === "Enter" && options[active]) {
                e.preventDefault();
                go(options[active].doc);
              } else if (e.key === "Escape") {
                // A search input would spend the first Escape clearing its text: close in one press.
                e.preventDefault();
                onClose();
              }
            }}
            className="type-body-lg h-16 min-w-0 flex-1 bg-transparent text-fg outline-none placeholder:text-fg-muted"
          />
          <button type="button" onClick={onClose} aria-label="Close search (Esc)" className="type-caption shrink-0 rounded-xs border border-line px-2 py-1 font-mono text-fg-muted hover:text-fg">
            Esc
          </button>
        </div>

        {/* Keyboard users can Tab to the list to scroll it; arrow keys in the input move the selection. */}
        <div role="region" aria-label="Scrollable results" tabIndex={0} className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-2 py-3 sm:px-3">
          <p className="sr-only" aria-live="polite">
            {status === "ready" && trimmed ? `${options.length} results shown` : ""}
          </p>
          {status === "loading" ? <p className="type-body-sm px-3 py-6 text-fg-muted">Loading the page index…</p> : null}
          {status === "error" ? <p className="type-body-sm px-3 py-6 text-fg-muted">Search could not load. Check your connection and try again.</p> : null}
          {status === "ready" && trimmed && !options.length ? (
            <div className="px-3 py-8">
              <p className="type-h4 text-fg">No pages match “{trimmed}”.</p>
              <p className="type-body-sm mt-1 text-fg-muted">Try a broader term, such as “search”, “permissions” or “migration”.</p>
            </div>
          ) : null}

          <ul ref={listRef} id={`${id}-list`} role="listbox" aria-label="Search results" className="flex flex-col gap-4">
            {groups.map((group) => (
              <li key={group.label} role="presentation">
                <p aria-hidden="true" className="type-eyebrow px-3 pb-1.5 text-fg-muted">
                  {group.label}
                </p>
                <ul role="group" aria-label={group.label} className="flex flex-col">
                  {group.options.map(({ doc }) => {
                    optionIndex += 1;
                    const current = optionIndex;
                    const selected = current === active;
                    return (
                      <li key={doc.id} role="presentation">
                        <Link
                          id={`${id}-option-${current}`}
                          role="option"
                          aria-selected={selected}
                          data-index={current}
                          href={doc.path}
                          tabIndex={-1}
                          onClick={onClose}
                          onPointerMove={() => setActive(current)}
                          className={`flex items-center gap-3 rounded-sm px-3 py-2.5 ${selected ? "bg-sunken" : ""}`}
                        >
                          <span className="flex min-w-0 flex-1 flex-col">
                            <span className="type-body-sm truncate font-medium text-fg">{doc.title}</span>
                            <span className="type-caption truncate text-fg-muted">
                              {doc.section}
                              {doc.publishable && doc.type !== "section-index" ? ` · ${doc.summary}` : ""}
                            </span>
                          </span>
                          <Icon name="enter" size={16} className={`shrink-0 text-fg-muted ${selected ? "opacity-100" : "opacity-0"}`} />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-line px-5 py-3">
          <p className="type-caption hidden items-center gap-3 text-fg-muted sm:flex">
            <span>
              <kbd className="font-mono">↑</kbd> <kbd className="font-mono">↓</kbd> to move
            </span>
            <span>
              <kbd className="font-mono">Enter</kbd> to open
            </span>
          </p>
          {trimmed ? (
            <Link href={exploreHref} onClick={onClose} className="arrow-link type-body-sm ml-auto inline-flex items-center gap-1.5 font-semibold text-accent">
              Explore all results
              <Icon name="arrowRight" size={16} />
            </Link>
          ) : (
            <span className="type-caption ml-auto text-fg-muted">{index ? `${index.documents.length} pages indexed` : ""}</span>
          )}
        </div>
      </div>
    </dialog>
  );
}
