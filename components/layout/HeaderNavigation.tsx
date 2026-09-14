"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import type { NavModel } from "@/lib/navigation";
import { Icon } from "@/components/primitives/Icon";
import { buttonClass } from "@/components/primitives/Button";
import { SearchDialog } from "@/components/search/SearchDialog";
import { MegaPanel } from "./MegaPanel";
import { MobileMenu } from "./MobileMenu";

const HOVER_OPEN_DELAY = 90;
const HOVER_CLOSE_DELAY = 220;

export function HeaderNavigation({ model }: { model: NavModel }) {
  const pathname = usePathname();
  const [open, setOpen] = useState<number | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [shortcut, setShortcut] = useState<string | null>(null);

  const regionRef = useRef<HTMLDivElement>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const panelRefs = useRef<Array<HTMLDivElement | null>>([]);
  const openTimer = useRef<number | undefined>(undefined);
  const closeTimer = useRef<number | undefined>(undefined);
  const hoverOpenedAt = useRef(0);

  const clearTimers = () => {
    window.clearTimeout(openTimer.current);
    window.clearTimeout(closeTimer.current);
  };

  const openRef = useRef<number | null>(null);
  useEffect(() => {
    openRef.current = open;
  }, [open]);

  const close = useCallback((returnFocus = false) => {
    const current = openRef.current;
    setOpen(null);
    if (returnFocus && current !== null) triggerRefs.current[current]?.focus();
  }, []);

  // Close everything on navigation.
  useEffect(() => {
    clearTimers();
    setOpen(null);
    setMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  // Escape, outside pointer and global search shortcuts.
  useEffect(() => {
    setShortcut(/Mac|iPhone|iPad/.test(navigator.platform) ? "⌘K" : "Ctrl K");
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const typing = !!target && (target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName));
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(null);
        setSearchOpen(true);
      } else if (event.key === "Escape") {
        close(true);
      }
    };
    const onPointer = (event: PointerEvent) => {
      if (regionRef.current && !regionRef.current.contains(event.target as Node)) close();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [close]);

  const hoverOpen = (index: number) => {
    window.clearTimeout(closeTimer.current);
    if (open !== null) {
      setOpen(index);
      return;
    }
    openTimer.current = window.setTimeout(() => {
      hoverOpenedAt.current = Date.now();
      setOpen(index);
    }, HOVER_OPEN_DELAY);
  };

  const hoverClose = () => {
    window.clearTimeout(openTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(null), HOVER_CLOSE_DELAY);
  };

  const toggle = (index: number) => {
    clearTimers();
    // A click right after hover-open should not immediately close the panel.
    if (open === index && Date.now() - hoverOpenedAt.current < 500) return;
    setOpen(open === index ? null : index);
  };

  const focusFirstLink = (index: number) => {
    setOpen(index);
    requestAnimationFrame(() => panelRefs.current[index]?.querySelector<HTMLElement>("a, button")?.focus());
  };

  return (
    <div className="flex flex-1 items-center justify-end gap-2 nav:justify-between">
      <div
        ref={regionRef}
        className="hidden nav:block"
        onBlur={(event) => {
          if (!regionRef.current?.contains(event.relatedTarget as Node | null)) setOpen(null);
        }}
      >
        <nav aria-label="Primary">
          <ul className="flex items-center gap-0.5">
            {model.items.map((item, index) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              if (item.kind === "link") {
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={pathname === item.href ? "page" : undefined}
                      className={`type-nav inline-flex h-10 items-center rounded-sm px-2.5 whitespace-nowrap transition-colors hover:text-accent xl:px-3 ${active ? "text-accent" : "text-fg-soft"}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }
              const expanded = open === index;
              return (
                <li key={item.href} onPointerLeave={(e) => e.pointerType === "mouse" && hoverClose()}>
                  <button
                    ref={(node) => {
                      triggerRefs.current[index] = node;
                    }}
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={`nav-panel-${index}`}
                    onPointerEnter={(e) => e.pointerType === "mouse" && hoverOpen(index)}
                    onClick={() => toggle(index)}
                    onKeyDown={(e) => {
                      if (e.key === "ArrowDown") {
                        e.preventDefault();
                        focusFirstLink(index);
                      }
                    }}
                    className={`type-nav group inline-flex h-10 items-center gap-1 rounded-sm px-2.5 whitespace-nowrap transition-colors hover:text-accent xl:px-3 ${expanded || active ? "text-accent" : "text-fg-soft"}`}
                  >
                    {item.label}
                    <Icon name="chevronDown" size={15} className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} />
                  </button>
                  {/* The panel follows its trigger, so Tab moves from the trigger into the open panel. */}
                  <div
                    id={`nav-panel-${index}`}
                    ref={(node) => {
                      panelRefs.current[index] = node;
                    }}
                    hidden={!expanded}
                    onPointerEnter={() => window.clearTimeout(closeTimer.current)}
                    className="mega-panel absolute inset-x-0 top-full border-y border-line bg-raised shadow-panel"
                  >
                    <MegaPanel item={item} />
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

      </div>

      <div className="flex items-center gap-1.5 nav:gap-2">
        <button
          type="button"
          onClick={() => setSearchOpen(true)}
          aria-label="Search GetSibu"
          className="type-nav hidden h-10 items-center gap-2.5 rounded-sm border border-line bg-raised px-2.5 whitespace-nowrap text-fg-muted transition-colors hover:border-line-strong hover:text-fg nav:inline-flex xl:px-3"
        >
          <Icon name="search" size={17} />
          <span className="hidden xl:inline">Search</span>
          {shortcut ? (
            <kbd className="hidden rounded-xs border border-line px-1.5 py-1 font-mono text-[0.6875rem] leading-none whitespace-nowrap text-fg-muted 2xl:inline">{shortcut}</kbd>
          ) : null}
        </button>
        <button
          type="button"
          onClick={() => setSearchOpen(true)}
          aria-label="Search GetSibu"
          className="inline-flex size-11 items-center justify-center rounded-sm text-fg-soft hover:bg-sunken nav:hidden"
        >
          <Icon name="search" size={20} />
        </button>
        <a href={model.ctas.signIn.href} className="type-nav hidden h-10 items-center rounded-sm px-2.5 whitespace-nowrap text-fg-soft transition-colors hover:text-accent nav:inline-flex xl:px-3">
          {model.ctas.signIn.label}
        </a>
        <a href={model.ctas.primary.href} className={buttonClass("primary", "hidden min-h-10 px-4 xs:inline-flex")}>
          {model.ctas.primary.label}
        </a>
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-haspopup="dialog"
          className="inline-flex size-11 items-center justify-center rounded-sm text-fg hover:bg-sunken nav:hidden"
        >
          <Icon name="menu" size={22} />
        </button>
      </div>

      <MobileMenu
        model={model}
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onSearch={() => {
          setMenuOpen(false);
          setSearchOpen(true);
        }}
      />
      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
