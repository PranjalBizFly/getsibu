import { CircleCheck } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import type { LucideIcon } from "./icons";

/** Sky9's feature card: glass surface, lifts with a glow and accent border on hover, spotlight inside. */
export const CARD =
  "spotlight group relative flex h-full flex-col rounded-2xl border border-line-strong/80 bg-raised p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-accent/60 hover:shadow-xl hover:shadow-accent/15 has-[:focus-visible]:border-accent/60 sm:p-7";

/** A smaller interactive tile (links, chips, module rows). */
export const TILE =
  "group relative flex h-full rounded-xl border border-line bg-raised transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-md has-[:focus-visible]:border-accent/50";

/** The icon tile at the top of a card: scales and fills with the accent on hover. */
export function IconTile({ icon: Icon, size = "md", className = "" }: { icon: LucideIcon; size?: "sm" | "md" | "lg"; className?: string }) {
  const box = { sm: "size-10 rounded-xl", md: "size-14 rounded-2xl", lg: "size-16 rounded-2xl" }[size];
  const glyph = { sm: "size-5", md: "size-7", lg: "size-7" }[size];
  return (
    <span
      aria-hidden="true"
      className={`flex shrink-0 items-center justify-center border border-accent/20 bg-accent-soft text-accent shadow-sm transition duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-fg ${box} ${className}`}
    >
      <Icon className={`${glyph} transition-transform duration-300 group-hover:rotate-6`} strokeWidth={1.75} />
    </span>
  );
}

/** A checked point: icon + text in a soft bordered row. */
export function CheckItem({ children, className = "", tone = "row" }: { children: ReactNode; className?: string; tone?: "row" | "plain" }) {
  return tone === "plain" ? (
    <span className={`flex items-start gap-2.5 ${className}`}>
      <CircleCheck aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-signal-strong" strokeWidth={2} />
      <span>{children}</span>
    </span>
  ) : (
    <span className={`flex items-start gap-3 rounded-xl border border-line bg-sunken p-4 ${className}`}>
      <CircleCheck aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-signal-strong" strokeWidth={2} />
      <span className="type-body-sm font-semibold text-fg">{children}</span>
    </span>
  );
}

/** Staggered reveal wrapper for grid items. */
export function RevealItem({ index = 0, children, className = "", as: Tag = "li", variant }: { index?: number; children: ReactNode; className?: string; as?: "li" | "div"; variant?: "scale" | "left" | "fade" }) {
  return (
    <Tag data-reveal={variant ?? ""} style={{ "--i": index } as CSSProperties} className={className}>
      {children}
    </Tag>
  );
}
