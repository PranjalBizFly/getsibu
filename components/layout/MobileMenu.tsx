"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import type { NavModel } from "@/lib/navigation";
import { Icon } from "@/components/primitives/Icon";
import { buttonClass } from "@/components/primitives/Button";

interface MobileMenuProps {
  model: NavModel;
  open: boolean;
  onClose: () => void;
  onSearch: () => void;
}

/**
 * Tablet and mobile navigation: a modal side sheet built on <dialog>, which provides the focus trap,
 * Escape handling and inert background natively. Sections are native <details> disclosures.
 */
export function MobileMenu({ model, open, onClose, onSearch }: MobileMenuProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      aria-label="Menu"
      onClose={onClose}
      onClick={(event) => {
        // A click on the backdrop targets the dialog element itself.
        if (event.target === event.currentTarget) onClose();
        if ((event.target as HTMLElement).closest("a")) onClose();
      }}
      className="menu-sheet fixed inset-y-0 right-0 left-auto m-0 h-dvh max-h-dvh w-[min(100%,26rem)] max-w-none bg-bg p-0 text-fg"
    >
      <div className="flex h-full flex-col">
        <div className="flex h-(--header-height) shrink-0 items-center justify-between border-b border-line px-5">
          <p className="type-eyebrow text-fg-muted">Menu</p>
          <button type="button" onClick={onClose} aria-label="Close menu" className="inline-flex size-11 items-center justify-center rounded-sm hover:bg-sunken">
            <Icon name="close" size={22} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain px-5 pb-6">
          <button
            type="button"
            onClick={onSearch}
            className="type-body-sm mt-5 flex h-12 w-full items-center gap-3 rounded-sm border border-line bg-raised px-4 text-left text-fg-muted"
          >
            <Icon name="search" size={18} />
            Search GetSibu
          </button>

          <nav aria-label="Mobile" className="mt-4">
            <ul className="flex flex-col">
              {model.items.map((item) => (
                <li key={item.href} className="border-b border-line">
                  {item.kind === "link" ? (
                    <Link href={item.href} className="type-h4 flex min-h-14 items-center text-fg">
                      {item.label}
                    </Link>
                  ) : (
                    <details className="group">
                      <summary className="type-h4 flex min-h-14 cursor-pointer items-center justify-between text-fg">
                        {item.label}
                        <Icon name="chevronDown" size={18} className="text-fg-muted transition-transform duration-200 group-open:rotate-180" />
                      </summary>
                      <div className="flex flex-col gap-1 pb-4">
                        {(item.columns ?? []).length === 1
                          ? (item.columns ?? []).flatMap((column) => [
                              <Link key={column.hub.href} href={column.hub.href} className="flex flex-col rounded-sm px-3 py-2.5 hover:bg-sunken">
                                <span className="type-nav text-fg">{column.hub.label}</span>
                                <span className="type-caption mt-0.5 text-fg-muted">{column.description}</span>
                              </Link>,
                              ...column.links.map((link) => (
                                <Link key={link.href} href={link.href} className="type-nav rounded-sm px-3 py-2.5 text-fg-soft hover:bg-sunken">
                                  {link.label}
                                </Link>
                              )),
                            ])
                          : (item.columns ?? []).map((column) => (
                              <Link key={column.hub.href} href={column.hub.href} className="flex flex-col rounded-sm px-3 py-2.5 hover:bg-sunken">
                                <span className="type-nav text-fg">{column.heading}</span>
                                <span className="type-caption mt-0.5 text-fg-muted">{column.description}</span>
                              </Link>
                            ))}
                      </div>
                    </details>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="grid shrink-0 grid-cols-2 gap-3 border-t border-line p-5">
          <a href={model.ctas.signIn.href} className={buttonClass("secondary")}>
            {model.ctas.signIn.label}
          </a>
          <a href={model.ctas.primary.href} className={buttonClass("primary")}>
            {model.ctas.primary.label}
          </a>
        </div>
      </div>
    </dialog>
  );
}
