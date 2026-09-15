import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "glass" | "white" | "outlineLight" | "quiet";
type Size = "sm" | "md" | "lg";

const BASE =
  "type-button group inline-flex items-center justify-center gap-2 text-center max-w-full sm:whitespace-nowrap font-semibold transition duration-300 active:scale-[0.97] [&>svg]:shrink-0 disabled:cursor-not-allowed disabled:opacity-60";

const SIZES: Record<Size, string> = {
  sm: "min-h-9 rounded-xl px-4 py-2",
  md: "min-h-11 rounded-xl px-6 py-3 sm:px-7",
  lg: "min-h-12 rounded-full px-8 py-4",
};

/**
 * Sky9's button set in GetSibu colours: the primary action shimmers and lifts with a glow; the
 * secondary is outlined; glass sits on the navy hero; white and outlineLight sit on the brand band.
 */
const VARIANTS: Record<Variant, string> = {
  primary: "btn-shimmer bg-accent text-accent-fg shadow-glow hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-glow-strong active:translate-y-0",
  secondary: "border border-line-strong bg-raised text-fg hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent hover:shadow-md active:translate-y-0",
  glass: "border border-white/20 bg-white/10 text-white backdrop-blur-md hover:-translate-y-0.5 hover:border-signal/60 hover:bg-white/15 active:translate-y-0",
  white: "btn-shimmer bg-white text-indigo shadow-lg hover:scale-105 active:scale-95",
  outlineLight: "border border-white/40 text-white backdrop-blur-sm hover:scale-105 hover:bg-white/10 active:scale-95",
  quiet: "px-3 text-fg hover:bg-sunken",
};

export function buttonClass(variant: Variant = "primary", extra = "", size: Size = "md") {
  return `${BASE} ${SIZES[size]} ${VARIANTS[variant]} ${extra}`.trim();
}

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
}

/** Navigation that looks like a button. External (app) links use a plain anchor. */
export function ButtonLink({ href, children, variant = "primary", size = "md", arrow = false, className = "" }: ButtonLinkProps) {
  const content = (
    <>
      {children}
      {arrow ? <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-200 group-hover:translate-x-1 sm:size-[1.125rem]" /> : null}
    </>
  );
  const classes = buttonClass(variant, className, size);
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
      {String.fromCharCode(160)}
      <ArrowRight aria-hidden="true" className="inline-block size-4 align-[-0.2em]" />
    </Link>
  );
}
