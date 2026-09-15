"use client";

import { ArrowRight, ChevronDown, Menu, Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import type { NavModel } from "@/lib/navigation";
import { SearchDialog } from "@/components/search/SearchDialog";
import { NavPanel, panelWidth } from "./NavPanel";
import { MobileMenu } from "./MobileMenu";

const HOVER_OPEN_DELAY = 60;
const HOVER_CLOSE_DELAY = 180;

/** `underline` draws the item's own underline: an open dropdown, or the current section until the sliding indicator is measured. */
const itemClass = (highlight: boolean, underline: boolean) =>
  `type-nav relative inline-flex h-10 items-center gap-1 rounded-lg px-2 whitespace-nowrap transition-colors hover:text-accent xl:px-2.5 after:absolute after:inset-x-2 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-accent after:transition-transform after:duration-300 ${highlight ? "text-accent" : "text-fg-soft"} ${underline ? "after:scale-x-100" : "after:scale-x-0"}`;

/** The current section's indicator, measured against the navigation region. */
interface Indicator {
  x: number;
  y: number;
  width: number;
  visible: boolean;
}

export function HeaderNavigation({ model }: { model: NavModel }) {
  const pathname = usePathname();
  const [open, setOpen] = useState<number | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [indicator, setIndicator] = useState<Indicator | null>(null);
  const [indicatorReady, setIndicatorReady] = useState(false);

  const regionRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const panelRefs = useRef<Array<HTMLDivElement | null>>([]);
  const openTimer = useRef<number | undefined>(undefined);
  const closeTimer = useRef<number | undefined>(undefined);
  const hoverOpenedAt = useRef(0);
  const openRef = useRef<number | null>(null);

  useEffect(() => {
    openRef.current = open;
  }, [open]);

  const clearTimers = () => {
    window.clearTimeout(openTimer.current);
    window.clearTimeout(closeTimer.current);
  };

  const close = useCallback((returnFocus = false) => {
    const current = openRef.current;
    setOpen(null);
    if (returnFocus && current !== null) triggerRefs.current[current]?.focus();
  }, []);

  useEffect(() => {
    clearTimers();
    setOpen(null);
    setMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  // Sky9's active-section indicator (a layoutId spring): one bar that slides to the current item.
  useEffect(() => {
    const list = listRef.current;
    const region = regionRef.current;
    if (!list || !region) return;
    const measure = () => {
      const current = list.querySelector<HTMLElement>("[data-nav-current]");
      if (!current || !current.offsetWidth) {
        setIndicator((previous) => (previous ? { ...previous, visible: false } : null));
        return;
      }
      const item = current.getBoundingClientRect();
      const base = region.getBoundingClientRect();
      setIndicator({ x: item.left - base.left + 8, y: item.bottom - base.top, width: item.width - 16, visible: true });
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(list);
    return () => observer.disconnect();
  }, [pathname]);

  // The first measurement places the bar without travelling; later ones slide.
  useEffect(() => {
    if (!indicator || indicatorReady) return;
    const frame = requestAnimationFrame(() => setIndicatorReady(true));
    return () => cancelAnimationFrame(frame);
  }, [indicator, indicatorReady]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
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
        className="relative hidden flex-1 justify-center nav:flex"
        onBlur={(event) => {
          if (!regionRef.current?.contains(event.relatedTarget as Node | null)) setOpen(null);
        }}
      >
        <nav aria-label="Primary">
          <ul ref={listRef} className="flex items-center gap-0.5">
            <li>
              <Link href="/" aria-current={pathname === "/" ? "page" : undefined} data-nav-current={pathname === "/" || undefined} className={itemClass(pathname === "/", pathname === "/" && !indicatorReady)}>
                Home
              </Link>
            </li>
            {model.items.map((item, index) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              if (item.kind === "link") {
                return (
                  <li key={item.href}>
                    <Link href={item.href} aria-current={pathname === item.href ? "page" : undefined} data-nav-current={active || undefined} className={itemClass(active, active && !indicatorReady)}>
                      {item.label}
                    </Link>
                  </li>
                );
              }
              const expanded = open === index;
              return (
                <li key={item.href} className="static" onPointerLeave={(e) => e.pointerType === "mouse" && hoverClose()}>
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
                    data-nav-current={active || undefined}
                    className={itemClass(expanded || active, expanded || (active && !indicatorReady))}
                  >
                    {item.label}
                    <ChevronDown aria-hidden="true" className={`size-3.5 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} strokeWidth={2.25} />
                  </button>
                  {/* Panels are positioned against the navigation, centred, so they never clip off-screen. Closed panels stay */}
                  {/* rendered, invisible and inert, so they animate out (globals.css .nav-panel); switching panels is instant. */}
                  <div
                    id={`nav-panel-${index}`}
                    ref={(node) => {
                      panelRefs.current[index] = node;
                    }}
                    data-open={expanded || undefined}
                    data-switching={(!expanded && open !== null) || undefined}
                    inert={!expanded}
                    onPointerEnter={() => window.clearTimeout(closeTimer.current)}
                    className={`nav-panel absolute top-full left-1/2 mt-3 max-w-[95vw] -translate-x-1/2 rounded-2xl border border-line/90 bg-white/95 p-6 text-fg shadow-2xl backdrop-blur-xl ${item.kind === "list" ? "p-3" : ""} ${panelWidth(item)}`}
                  >
                    <NavPanel item={item} />
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>
        {indicator ? (
          <span
            aria-hidden="true"
            data-ready={indicatorReady || undefined}
            className={`nav-indicator pointer-events-none absolute top-0 left-0 h-0.5 w-px rounded-full bg-accent ${indicator.visible ? "opacity-100" : "opacity-0"}`}
            style={{ transform: `translate(${indicator.x}px, ${indicator.y}px) scaleX(${Math.max(indicator.width, 0)})` }}
          />
        ) : null}
      </div>

      <div className="flex items-center gap-1.5 nav:gap-2">
        <button
          type="button"
          onClick={() => setSearchOpen(true)}
          aria-label="Search GetSibu"
          className="inline-flex size-10 items-center justify-center rounded-full text-fg-soft transition duration-200 hover:scale-[1.08] hover:bg-sunken hover:text-accent active:scale-90"
        >
          <Search aria-hidden="true" className="size-[1.125rem]" strokeWidth={2} />
        </button>
        {model.contact ? (
          <Link href={model.contact.href} className="type-nav hidden h-10 items-center rounded-lg px-2.5 text-fg-soft transition-colors hover:text-accent min-[87.5rem]:inline-flex">
            {model.contact.label}
          </Link>
        ) : null}
        <a
          href={model.ctas.signIn.href}
          className="type-nav hidden h-10 items-center rounded-full border border-line-strong px-4 whitespace-nowrap text-fg transition duration-300 hover:border-accent/60 hover:text-accent sm:inline-flex"
        >
          {model.ctas.signIn.label}
        </a>
        <a
          href={model.ctas.primary.href}
          className="btn-shimmer group type-nav hidden h-10 items-center gap-2 rounded-full bg-accent py-1 pr-1.5 pl-4 whitespace-nowrap text-accent-fg shadow-glow transition duration-300 hover:-translate-y-0.5 hover:bg-accent-hover active:translate-y-0 active:scale-[0.96] xs:inline-flex"
        >
          {model.ctas.primary.label}
          <span aria-hidden="true" className="flex size-7 items-center justify-center rounded-full bg-white/20">
            <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2.25} />
          </span>
        </a>
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-haspopup="dialog"
          className="inline-flex size-11 items-center justify-center rounded-lg text-fg hover:bg-sunken nav:hidden"
        >
          <Menu aria-hidden="true" className="size-6" strokeWidth={2} />
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
      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} directory={model.directory} />
    </div>
  );
}
