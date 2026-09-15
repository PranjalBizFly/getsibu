"use client";

import { Pause, Play } from "lucide-react";
import { useRef, useState } from "react";

/** Pause/play for the nearest marquee strip. */
export function MarqueePause() {
  const [paused, setPaused] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);
  return (
    <button
      ref={ref}
      type="button"
      aria-pressed={paused}
      aria-label={paused ? "Play the scrolling areas" : "Pause the scrolling areas"}
      onClick={() => {
        const strip = ref.current?.closest(".marquee");
        strip?.toggleAttribute("data-paused", !paused);
        setPaused(!paused);
      }}
      className="absolute top-1/2 right-2 z-20 flex size-8 -translate-y-1/2 items-center justify-center rounded-full border border-line-strong bg-raised text-fg-soft shadow-md transition-colors hover:border-accent/50 hover:text-accent sm:right-4"
    >
      {paused ? <Play aria-hidden="true" className="size-3.5" /> : <Pause aria-hidden="true" className="size-3.5" />}
    </button>
  );
}
