import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "./Icon";

type Variant = "primary" | "secondary" | "quiet";

const BASE =
  "type-button inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-5 text-center max-w-full sm:whitespace-nowrap [&>svg]:shrink-0 transition-colors duration-200 ease-(--ease-out)";

const VARIANTS: Record<Variant, string> = {
  primary: "bg-accent text-accent-fg hover:bg-accent-hover",
  secondary: "border border-line-strong text-fg hover:border-fg-muted hover:bg-raised",
  quiet: "px-3 text-fg hover:bg-sunken",
};

export function buttonClass(variant: Variant = "primary", extra = "") {
  return `${BASE} ${VARIANTS[variant]} ${extra}`.trim();
}

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
}

/** Navigation that looks like a button. External (app) links use a plain anchor. */
export function ButtonLink({ href, children, variant = "primary", arrow = false, className = "" }: ButtonLinkProps) {
  const content = (
    <>
      {children}
      {arrow ? <Icon name="arrowRight" size={16} /> : null}
    </>
  );
  const classes = buttonClass(variant, `${arrow ? "arrow-link" : ""} ${className}`);
  return /^https?:/.test(href) ? (
    <a href={href} className={classes}>
      {content}
    </a>
  ) : (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

/** Inline text link with a travelling arrow. */
export function ArrowLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link href={href} className={`arrow-link type-body-sm inline self-start font-semibold text-accent underline-offset-4 hover:underline ${className}`}>
      {children}
      {/* A no-break space keeps the arrow on the same line as the last word. */}
      {String.fromCharCode(160)}
      <Icon name="arrowRight" size={16} className="inline-block align-[-0.2em]" />
    </Link>
  );
}
