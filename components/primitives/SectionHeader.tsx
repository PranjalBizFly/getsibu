import type { ReactNode } from "react";

/** Eyebrow — a true label for what follows (a category, a step), set in the mono utility face. */
export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`type-eyebrow flex items-center gap-2.5 text-fg-muted ${className}`}>
      <span className="ring-marker" aria-hidden="true" />
      {children}
    </p>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  intro?: string;
  id?: string;
  align?: "start" | "center";
  className?: string;
}

/** The one section-header formula: eyebrow → H2 → one short intro. */
export function SectionHeader({ eyebrow, heading, intro, id, align = "start", className = "" }: SectionHeaderProps) {
  const centered = align === "center";
  return (
    <header className={`flex flex-col gap-4 ${centered ? "items-center text-center" : ""} ${className}`}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 id={id} className="type-h2 max-w-[22ch] text-fg">
        {heading}
      </h2>
      {intro ? <p className={`type-body-lg max-w-[60ch] text-fg-muted ${centered ? "mx-auto" : ""}`}>{intro}</p> : null}
    </header>
  );
}
