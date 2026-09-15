"use client";

import { ArrowRight, ChevronDown, Search, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import type { NavModel } from "@/lib/navigation";
import { Logo } from "./Logo";

interface MobileMenuProps {
  model: NavModel;
  open: boolean;
  onClose: () => void;
  onSearch: () => void;
}

/**
 * Tablet and mobile navigation (Sky9 drawer): a right-hand sheet built on <dialog> — focus trap,
 * Escape and inert background come natively. Items expand as accordions; inside, each column is an
 * accent group label (its hub) over its pages on a left rail. Account actions sit at the bottom.
 */
export function MobileMenu({ model, open, onClose, onSearch }: MobileMenuProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  const row = "type-h4 flex min-h-14 w-full items-center justify-between rounded-lg text-left text-fg transition-colors hover:text-accent";

  return (
    <dialog
      ref={dialogRef}
      aria-label="Menu"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
        if ((event.target as HTMLElement).closest("a")) onClose();
      }}
      className="menu-sheet fixed inset-y-0 right-0 left-auto m-0 h-dvh max-h-dvh w-[min(100%,21rem)] max-w-none border-l border-line bg-bg p-0 text-fg shadow-2xl"
    >
      <div className="flex h-full flex-col">
        <div className="flex h-(--header-height) shrink-0 items-center justify-between border-b border-line px-5">
          <Logo height={24} />
          <button type="button" onClick={onClose} aria-label="Close menu" className="inline-flex size-11 items-center justify-center rounded-lg text-fg-muted hover:bg-sunken hover:text-fg">
            <X aria-hidden="true" className="size-5" strokeWidth={2} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain px-4 pb-6">
          <button type="button" onClick={onSearch} className="type-body-sm mt-4 flex h-12 w-full items-center gap-3 rounded-xl border border-line bg-sunken px-4 text-left text-fg-muted">
            <Search aria-hidden="true" className="size-4" strokeWidth={2} />
            Search GetSibu
          </button>

          <nav aria-label="Mobile" className="mt-3">
            <ul className="flex flex-col">
              <li className="border-b border-line px-3">
                <Link href="/" className={row}>
                  Home
                </Link>
              </li>
              {model.items.map((item) => (
                <li key={item.href} className="border-b border-line px-3">
                  {item.kind === "link" ? (
                    <Link href={item.href} className={row}>
                      {item.label}
                    </Link>
                  ) : (
                    <details className="group">
                      <summary className={`${row} cursor-pointer group-open:text-accent`}>
                        {item.label}
                        <ChevronDown aria-hidden="true" className="size-4 transition-transform duration-200 group-open:rotate-180" strokeWidth={2.25} />
                      </summary>
                      <div className="mb-4 ml-1 flex flex-col gap-5 border-l-2 border-accent/40 pl-4">
                        {(item.columns ?? []).map((column) => (
                          <div key={column.heading} className="flex flex-col">
                            <Link href={column.hub.href} className="type-eyebrow group/hub flex items-center gap-1 py-1.5 text-accent">
                              {column.heading}
                              <ArrowRight aria-hidden="true" className="size-3 transition-transform group-hover/hub:translate-x-0.5" strokeWidth={2.5} />
                            </Link>
                            {column.links.map((link) => (
                              <Link key={link.href} href={link.href} className="type-body-sm py-1.5 text-fg-soft transition-colors hover:text-accent">
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </details>
                  )}
                </li>
              ))}
              {model.contact ? (
                <li className="px-3">
                  <Link href={model.contact.href} className={row}>
                    {model.contact.label}
                  </Link>
                </li>
              ) : null}
            </ul>
          </nav>
        </div>

        <div className="grid shrink-0 gap-3 border-t border-line p-4">
          <a href={model.ctas.signIn.href} className="type-button flex min-h-12 items-center justify-center rounded-xl border border-line-strong text-fg transition-colors hover:border-accent/60 hover:text-accent">
            {model.ctas.signIn.label}
          </a>
          <a href={model.ctas.primary.href} className="btn-shimmer type-button flex min-h-12 items-center justify-center gap-2 rounded-xl bg-accent text-accent-fg shadow-glow">
            {model.ctas.primary.label}
            <ArrowRight aria-hidden="true" className="size-4" strokeWidth={2.25} />
          </a>
        </div>
      </div>
    </dialog>
  );
}
