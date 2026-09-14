/** Shared drawing parts for the diagram figures. */
import type { CSSProperties, ReactNode } from "react";

export const MONO = "font-mono";

/** Marks a group for the one-time fade-in, staggered by index. */
export const part = (i: number) => ({ "data-part": "", style: { "--i": i } as CSSProperties });

/**
 * Focus dimming: when a figure has a focus, parts that are not about it recede so the page's own
 * part of the system reads first. With no focus everything is shown at full strength.
 */
export const dim = (focus: string | undefined, ...keys: string[]) =>
  focus && !keys.includes(focus) ? "opacity-35 transition-opacity" : "transition-opacity";

export const isOn = (focus: string | undefined, ...keys: string[]) => !!focus && keys.includes(focus);

export interface FigureProps {
  focus?: string;
  label?: string;
}

export function Svg({ label, viewBox, children }: { label: string; viewBox: string; children: ReactNode }) {
  return (
    <svg viewBox={viewBox} role="img" aria-label={label} className="block h-auto w-full" xmlns="http://www.w3.org/2000/svg">
      {children}
    </svg>
  );
}

export function Chip({ x, y, width, label, on = false, height = 30 }: { x: number; y: number; width: number; label: string; on?: boolean; height?: number }) {
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} rx={6} className={on ? "fill-signal-soft stroke-signal" : "fill-bg stroke-line"} strokeWidth={1.25} />
      <text x={x + width / 2} y={y + height / 2 + 4.5} textAnchor="middle" fontSize={13} fontWeight={on ? 600 : 500} className={on ? "fill-signal-strong" : "fill-fg-muted"}>
        {label}
      </text>
    </g>
  );
}

/** A focus ring drawn around a highlighted element. */
export function FocusRing({ x, y, width, height, rx = 10, show }: { x: number; y: number; width: number; height: number; rx?: number; show: boolean }) {
  if (!show) return null;
  return <rect x={x - 5} y={y - 5} width={width + 10} height={height + 10} rx={rx + 4} fill="none" strokeWidth={2.5} className="stroke-signal" />;
}

export type MediaType = "video" | "image" | "document" | "audio";

/** A stylised thumbnail for one media type: never a real-looking screenshot. */
export function MediaTile({ type, x, y, width, height }: { type: MediaType; x: number; y: number; width: number; height: number }) {
  switch (type) {
    case "video":
      return (
        <g>
          <rect x={x} y={y} width={width} height={height} rx={7} className="fill-indigo" />
          <path d={`M${x + width / 2 - 9} ${y + height / 2 - 13} l20 13 -20 13z`} className="fill-white/85" />
          <rect x={x + 12} y={y + height - 14} width={width - 24} height={3} rx={1.5} className="fill-white/25" />
          <rect x={x + 12} y={y + height - 14} width={(width - 24) * 0.35} height={3} rx={1.5} className="fill-olive" />
        </g>
      );
    case "image":
      return (
        <g>
          <rect x={x} y={y} width={width} height={height} rx={7} className="fill-accent-soft" />
          <circle cx={x + width * 0.72} cy={y + height * 0.3} r={Math.min(width, height) * 0.12} className="fill-olive-300" />
          <path
            d={`M${x} ${y + height * 0.84} l${width * 0.27} ${-height * 0.35} ${width * 0.19} ${height * 0.23} ${width * 0.17} ${-height * 0.19} ${width * 0.37} ${height * 0.4} v${height * 0.07} a7 7 0 0 1 -7 7 h${-(width - 14)} a7 7 0 0 1 -7 -7z`}
            className="fill-indigo-300"
          />
        </g>
      );
    case "document":
      return (
        <g>
          <rect x={x + 0.5} y={y + 0.5} width={width - 1} height={height - 1} rx={7} className="fill-bg stroke-line" />
          {[0.21, 0.37, 0.53, 0.69].map((ly, j) => (
            <rect key={ly} x={x + width * 0.13} y={y + height * ly} width={width * [0.72, 0.63, 0.75, 0.44][j]} height={Math.max(4, height * 0.07)} rx={3} className="fill-line-strong" />
          ))}
        </g>
      );
    case "audio":
      return (
        <g>
          <rect x={x} y={y} width={width} height={height} rx={7} className="fill-sunken" />
          {[0.16, 0.3, 0.46, 0.26, 0.56, 0.35, 0.21, 0.42, 0.28, 0.14].map((h, j) => (
            <rect key={j} x={x + width * 0.14 + j * width * 0.075} y={y + height / 2 - (height * h) / 2} width={Math.max(3, width * 0.032)} height={height * h} rx={2} className="fill-indigo-500" />
          ))}
        </g>
      );
  }
}

export function Arrow({ d, className = "stroke-fg-muted", dashed = false }: { d: string; className?: string; dashed?: boolean }) {
  return <path d={d} fill="none" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={dashed ? "6 5" : undefined} className={className} />;
}
