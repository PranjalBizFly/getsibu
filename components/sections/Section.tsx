import type { ReactNode } from "react";

export type Surface = "default" | "muted" | "inverse";

const SURFACE: Record<Surface, string> = {
  default: "",
  muted: "surface-muted bg-bg",
  inverse: "surface-inverse bg-bg text-fg",
};

interface SectionProps {
  id?: string;
  surface?: Surface;
  density?: "open" | "dense";
  labelledBy?: string;
  label?: string;
  className?: string;
  children: ReactNode;
}

/**
 * A section band. Surface sets the colour tokens for everything inside; density sets vertical
 * rhythm. Two adjacent default-surface sections share one gap instead of doubling it (globals.css).
 */
export function Section({ id, surface = "default", density = "open", labelledBy, label, className = "", children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      aria-label={labelledBy ? undefined : label}
      data-surface={surface}
      className={`${SURFACE[surface]} ${density === "dense" ? "section-dense" : "section-open"} ${className}`}
    >
      {children}
    </section>
  );
}
