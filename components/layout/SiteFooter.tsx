import { ArrowRight, FolderLock, History, Search, Sparkles } from "lucide-react";
import Link from "next/link";
import { FOOTER_STATEMENT, GLOBAL_CTAS } from "@/content/architecture/navigation";
import { getFooterNav } from "@/lib/navigation";
import { getPage, isLivePage } from "@/lib/content/inventory";
import { MotionToggle } from "@/components/motion/MotionToggle";
import { buttonClass } from "@/components/primitives/Button";
import { Logo } from "./Logo";

/**
 * Global footer on the deep navy surface (user decision 2026-09-15): an olive tab hanging from the
 * top edge; a brand column with the logo, statement and four badge-style highlight links; five link
 * columns under olive headings, the last carrying the sign-in pill and the primary action; a centred
 * bottom line. No social links, app badges, memberships, payment marks or legal links until GetSibu
 * supplies real ones (the official versions are placeholders or dead links).
 */
const HIGHLIGHTS = [
  { page: 31, badge: "AI", icon: Sparkles },
  { page: 14, badge: "Search", icon: Search },
  { page: 91, badge: "Versions", icon: History },
  { page: 152, badge: "Access", icon: FolderLock },
] as const;

type FooterColumn = ReturnType<typeof getFooterNav>[number];

function LinkColumn({ column }: { column: FooterColumn }) {
  return (
    <div>
      <h2 className="type-h4 text-signal sm:text-lg">{column.heading}</h2>
      <ul className="mt-4 flex flex-col gap-2">
        {column.links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="type-body-sm text-fg transition-colors hover:text-signal-strong">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  const columns = getFooterNav();
  const year = new Date().getFullYear();
  const highlights = HIGHLIGHTS.filter((h) => isLivePage(h.page)).map((h) => ({ ...h, href: getPage(h.page).path, label: getPage(h.page).title }));
  const company = columns.find((c) => c.heading === "Company");
  const linkColumns = columns.filter((c) => c !== company);

  return (
    <footer className="surface-inverse relative isolate overflow-hidden bg-navy-950 text-fg">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 hidden md:block">
        <div className="absolute inset-0 bg-white/[0.025] [clip-path:polygon(64%_0,100%_0,100%_100%,90%_100%)]" />
        <div className="absolute inset-0 bg-white/[0.025] [clip-path:polygon(80%_0,100%_0,100%_58%)]" />
      </div>

      <div className="flex justify-center px-4">
        <p className="type-h3 w-full max-w-xl rounded-b-[2rem] bg-linear-to-r from-accent-hover via-accent to-olive px-6 py-3 text-center font-extrabold tracking-tight text-accent-fg italic shadow-lg shadow-accent/15 sm:rounded-b-[2.5rem] sm:py-4 sm:text-2xl">
          One searchable creative library
        </p>
      </div>

      <div className="container-footer pt-12 pb-10 sm:pt-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] xl:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] xl:gap-16">
          <div className="flex flex-col gap-6">
            <Link href="/" aria-label="GetSibu home" className="w-max rounded-xs">
              <Logo tone="white" height={44} />
            </Link>
            <p className="type-body-sm max-w-sm text-fg-muted">{FOOTER_STATEMENT.text}</p>
            <ul className="grid gap-3 min-[26rem]:grid-cols-2 lg:mt-4 lg:grid-cols-1">
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <li key={h.page} className="lg:max-w-60">
                    <Link
                      href={h.href}
                      className="group flex h-full items-center gap-3 rounded-lg border border-fg/60 bg-sunken px-3 py-2 transition duration-300 hover:-translate-y-0.5 hover:border-signal hover:bg-raised"
                    >
                      <Icon aria-hidden="true" className="size-6 shrink-0 text-signal" strokeWidth={1.75} />
                      <span className="flex min-w-0 flex-col">
                        <span className="type-eyebrow text-fg-muted">{h.badge}</span>
                        <span className="type-body-sm leading-snug font-semibold text-fg">{h.label}</span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 xl:grid-cols-5">
            {linkColumns.map((column) => (
              <LinkColumn key={column.heading} column={column} />
            ))}
            {company ? (
              <div className="col-span-2 sm:col-span-1">
                <LinkColumn column={company} />
                <div className="mt-8 flex flex-wrap items-center gap-3 sm:flex-col sm:items-start">
                  <a
                    href={GLOBAL_CTAS.signIn.href}
                    className="type-button group inline-flex min-h-11 items-center gap-3 rounded-full border border-line-strong bg-raised py-1.5 pr-1.5 pl-5 font-semibold text-fg transition duration-300 hover:-translate-y-0.5 hover:border-signal/60"
                  >
                    {GLOBAL_CTAS.signIn.label}
                    <span aria-hidden="true" className="flex size-7 items-center justify-center rounded-full bg-fg text-bg transition-transform duration-200 group-hover:translate-x-0.5">
                      <ArrowRight className="size-4" />
                    </span>
                  </a>
                  <a href={GLOBAL_CTAS.primary.href} className={buttonClass("primary", "shadow-accent/25 hover:shadow-accent/40")}>
                    {GLOBAL_CTAS.primary.label}
                  </a>
                </div>
              </div>
            ) : null}
          </nav>
        </div>
      </div>

      <div className="container-footer flex flex-col items-center justify-center gap-3 pt-4 pb-10 text-center sm:flex-row sm:gap-6">
        <p className="type-body-sm font-medium text-fg-soft">© {year} GetSibu. All rights reserved.</p>
        <MotionToggle className="type-caption text-fg-muted" />
      </div>
    </footer>
  );
}
