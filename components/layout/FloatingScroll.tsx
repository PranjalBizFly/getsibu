"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Sky9's floating scroll controls: back to top once scrolled, jump to the end until near it. They
 * fade and slide in and out, grow slightly on hover and press in on tap (Sky9: 1.08 / 0.9).
 */
export function FloatingScroll() {
  const [state, setState] = useState({ top: false, bottom: false });

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setState({ top: window.scrollY > 480, bottom: max > 1200 && window.scrollY < max - 900 });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const behavior = (): ScrollBehavior => (document.documentElement.dataset.motion === "on" ? "smooth" : "auto");
  const button =
    "pointer-events-auto flex size-11 items-center justify-center rounded-full border border-line bg-white/90 text-fg-soft shadow-lg backdrop-blur-md transition duration-300 hover:scale-[1.08] hover:border-accent/60 hover:text-accent active:scale-90";

  return (
    <div className="pointer-events-none fixed right-4 bottom-6 z-40 flex flex-col items-center gap-2 sm:right-6 sm:bottom-8">
      <button type="button" aria-label="Scroll to top" onClick={() => window.scrollTo({ top: 0, behavior: behavior() })} className={`${button} ${state.top ? "" : "invisible translate-y-2 opacity-0"}`}>
        <ChevronUp aria-hidden="true" className="size-5" strokeWidth={2.25} />
      </button>
      <button
        type="button"
        aria-label="Scroll to bottom"
        onClick={() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: behavior() })}
        className={`${button} ${state.bottom ? "" : "invisible -translate-y-2 opacity-0"}`}
      >
        <ChevronDown aria-hidden="true" className="size-5" strokeWidth={2.25} />
      </button>
    </div>
  );
}
