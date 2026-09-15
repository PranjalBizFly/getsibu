import { Sparkles } from "lucide-react";
import type { ReactNode } from "react";

/**
 * Badge pill — Sky9's eyebrow: an uppercase label in a rounded pill with a small spark. It names
 * something true about what follows (a category, a step, a section).
 */
export function Badge({ children, className = "", tone = "accent" }: { children: ReactNode; className?: string; tone?: "accent" | "onDark" | "onBrand" | "neutral" }) {
  const tones = {
    accent: "border-accent/20 bg-accent-soft text-accent",
    onDark: "border-signal/35 bg-signal/10 text-signal-strong",
    onBrand: "border-white/25 bg-white/15 text-white",
    neutral: "border-line bg-sunken text-fg-soft",
  } as const;
  return (
    <span className={`type-eyebrow inline-flex items-center gap-1.5 rounded-full border px-3 py-1 ${tones[tone]} ${className}`}>
      <Sparkles aria-hidden="true" className="size-3 shrink-0" strokeWidth={2.25} />
      {children}
    </span>
  );
}

/** Eyebrow kept for places that need a quiet label rather than a pill (figure notes, footers). */
export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`type-eyebrow flex items-center gap-2.5 text-fg-muted ${className}`}>
      <span className="ring-marker" aria-hidden="true" />
      {children}
    </p>
  );
}

type HeadingTag = "h1" | "h2" | "h3";

interface TypewriterProps {
  as?: HeadingTag;
  id?: string;
  text: string;
  className?: string;
  caret?: boolean;
  /** Milliseconds per character. */
  speed?: number;
}

/**
 * A heading that types itself when it enters the viewport (Sky9's TypewriterHeading). The heading
 * element always contains its full text; the typed characters are drawn in an aria-hidden overlay by
 * components/motion/MotionRuntime.tsx, so assistive technology, search engines and no-JS visitors
 * read the heading normally, and the reserved text keeps the layout from shifting.
 */
export function TypewriterHeading({ as: Tag = "h2", id, text, className = "", caret = false, speed }: TypewriterProps) {
  return (
    <Tag id={id} className={`tw ${className}`} data-typewriter="" data-caret={caret ? "" : undefined} data-speed={speed}>
      <span className="tw-text">{text}</span>
      <span className="tw-type" aria-hidden="true" />
    </Tag>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  intro?: ReactNode;
  id?: string;
  align?: "start" | "center";
  size?: "lg" | "sm";
  className?: string;
}

/**
 * The one section-header formula: badge → H2 (typed) → subtitle. Centred by default, as on Sky9.
 * Motion follows Sky9's SectionHeader: the header rises 22px over 550ms, the badge scales in from
 * 0.9, and the heading types itself once in view.
 */
export function SectionHeader({ eyebrow, heading, intro, id, align = "center", size = "lg", className = "" }: SectionHeaderProps) {
  const centered = align === "center";
  return (
    <header data-reveal="header" className={`mb-5 flex flex-col gap-3 sm:mb-8 sm:gap-4 md:mb-10 ${centered ? "mx-auto max-w-3xl items-center text-center" : "items-start"} ${className}`}>
      {eyebrow ? (
        <span data-reveal="badge">
          <Badge>{eyebrow}</Badge>
        </span>
      ) : null}
      <TypewriterHeading id={id} text={heading} className={`${size === "lg" ? "type-h2" : "type-h2-sm"} text-fg`} />
      {intro ? <p className={`type-body-lg max-w-2xl text-fg-muted ${centered ? "mx-auto" : ""}`}>{intro}</p> : null}
    </header>
  );
}
