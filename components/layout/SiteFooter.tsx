import Link from "next/link";
import { FOOTER_STATEMENT, GLOBAL_CTAS } from "@/content/architecture/navigation";
import { getFooterNav } from "@/lib/navigation";
import { ButtonLink } from "@/components/primitives/Button";
import { Logo } from "./Logo";

/**
 * Global footer on the navy surface. Links every hub. No contact details, social links or legal
 * links until GetSibu supplies real ones (the official versions are placeholders or dead links).
 */
export function SiteFooter() {
  const columns = getFooterNav();
  const year = new Date().getFullYear();
  return (
    <footer className="surface-inverse border-t border-line bg-bg text-fg">
      <div className="container-wide pt-16 pb-10 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="flex flex-col items-start gap-5 lg:col-span-4">
            <Logo tone="white" height={28} />
            <p className="type-body max-w-[34ch] text-fg-muted">{FOOTER_STATEMENT.text}</p>
            <div className="mt-2 flex flex-wrap gap-3">
              <ButtonLink href={GLOBAL_CTAS.primary.href}>{GLOBAL_CTAS.primary.label}</ButtonLink>
              <ButtonLink href={GLOBAL_CTAS.signIn.href} variant="secondary">
                {GLOBAL_CTAS.signIn.label}
              </ButtonLink>
            </div>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-5 lg:col-span-8">
            {columns.map((column) => (
              <div key={column.heading}>
                <h2 className="type-eyebrow text-fg-muted">{column.heading}</h2>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="type-body-sm text-fg-soft transition-colors hover:text-fg hover:underline hover:underline-offset-4">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="type-caption mt-16 border-t border-line pt-6 text-fg-muted">
          <p>© {year} GetSibu</p>
        </div>
      </div>
    </footer>
  );
}
