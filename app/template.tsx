"use client";

import { useEffect, useState, type ReactNode } from "react";

/** True once the first page has mounted in the browser. */
let hasMounted = false;

/**
 * Page entrance after a client navigation. Sky9 wraps every route in a fade that rises 8px over
 * 280ms (docs/architecture/18-sky9-experience.md). Next.js remounts a template whenever the route
 * changes, so each new page gets the entrance; the first page load is left to the hero's own
 * entrance, so nothing animates twice. The animation is CSS (.page-enter in app/globals.css) and
 * runs only when html[data-motion="on"].
 */
export default function Template({ children }: { children: ReactNode }) {
  const [enter] = useState(() => typeof window !== "undefined" && hasMounted);
  useEffect(() => {
    hasMounted = true;
  }, []);
  return <div className={enter ? "page-enter" : undefined}>{children}</div>;
}
