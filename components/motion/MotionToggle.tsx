"use client";

import { Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { settleMotion } from "./MotionRuntime";

/**
 * Pauses every perpetual animation site-wide (shimmer, marquee, float, beam, caret) and skips
 * entrances — the WCAG 2.2.2 mechanism for moving content. Remembered in localStorage. Hidden when
 * the visitor already prefers reduced motion (nothing moves then).
 */
export function MotionToggle({ className = "" }: { className?: string }) {
  const [state, setState] = useState<string | null>(null);

  useEffect(() => {
    setState(document.documentElement.dataset.motion ?? "on");
  }, []);

  if (state === null || state === "reduced") return null;
  const paused = state === "paused";

  return (
    <button
      type="button"
      aria-pressed={paused}
      onClick={() => {
        const next = paused ? "on" : "paused";
        document.documentElement.dataset.motion = next;
        // Anything still waiting for an entrance, a typewriter or a count shows in full.
        if (next === "paused") settleMotion();
        try {
          localStorage.setItem("gs-motion", next);
        } catch {}
        setState(next);
      }}
      className={`inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 transition-colors hover:border-line-strong hover:text-fg ${className}`}
    >
      {paused ? <Play aria-hidden="true" className="size-3.5" /> : <Pause aria-hidden="true" className="size-3.5" />}
      {paused ? "Play animations" : "Pause animations"}
    </button>
  );
}
