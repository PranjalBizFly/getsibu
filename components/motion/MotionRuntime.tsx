"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * The one client island behind the Sky9 motion system (docs/architecture/18-sky9-experience.md).
 *
 * Server-rendered markup opts in with attributes; this runtime only toggles attributes and CSS
 * variables React does not manage, so it never conflicts with hydration:
 *   - [data-reveal]        → data-revealed when the element enters the viewport or has been scrolled
 *                            past (once, 50px inset at the bottom),
 *                            then data-revealed="done" once its entrance has finished
 *   - .tw[data-typewriter] → types the heading into its aria-hidden overlay, then data-typed
 *   - .count[data-count]   → counts up to its value in an aria-hidden overlay, then data-counted
 *   - .spotlight           → --spot-x / --spot-y follow the pointer, data-spot while hovered
 *   - .scroll-progress     → --progress (0–1), eased toward the scroll position
 *
 * html[data-motion] is "on", "reduced" or "paused" (set before first paint in app/layout.tsx);
 * html[data-motion-ready] tells the CSS safety net that the runtime is running.
 */
const MOTION_ON = () => document.documentElement.dataset.motion === "on";

/** Sky9 types at 65ms a character after 200ms; long headings speed up so none takes over 1.8s. */
const TYPE_SPEED = 65;
const TYPE_DELAY = 200;
const TYPE_MAX = 1800;
/** Sky9's StatsBar count: easeOutExpo over 1.2s. */
const COUNT_DURATION = 1200;

const PENDING = "[data-reveal]:not([data-revealed]), .tw[data-typewriter]:not([data-typed]):not([data-typing]), .count[data-count]:not([data-counted]):not([data-counting])";

/** Shows everything at once: reduced motion, paused animations, or no observer. */
export function settleMotion(root: ParentNode = document) {
  root.querySelectorAll<HTMLElement>("[data-reveal]:not([data-revealed='done'])").forEach((el) => el.setAttribute("data-revealed", "done"));
  root.querySelectorAll<HTMLElement>(".tw[data-typewriter]:not([data-typed])").forEach((el) => {
    el.removeAttribute("data-typing");
    el.querySelector(".tw-type")?.replaceChildren();
    el.setAttribute("data-typed", "");
  });
  root.querySelectorAll<HTMLElement>(".count[data-count]:not([data-counted])").forEach((el) => {
    el.removeAttribute("data-counting");
    el.querySelector(".count-type")?.replaceChildren();
    el.setAttribute("data-counted", "");
  });
}

/** Longest transition (delay + duration) on an element, in milliseconds. */
function settleTime(el: HTMLElement) {
  const style = getComputedStyle(el);
  const ms = (value: string) => value.split(",").map((v) => (v.trim().endsWith("ms") ? parseFloat(v) : parseFloat(v) * 1000));
  const durations = ms(style.transitionDuration);
  const delays = ms(style.transitionDelay);
  return Math.max(0, ...durations.map((d, i) => d + (delays[i % delays.length] ?? 0)));
}

function reveal(el: HTMLElement) {
  el.setAttribute("data-revealed", "");
  window.setTimeout(() => el.setAttribute("data-revealed", "done"), settleTime(el) + 50);
}

/** A text node of the typed copy, split into the part already typed and the hidden rest. */
interface TypedRun {
  start: number;
  value: string;
  shown: Text;
  rest: Text;
  hidden: HTMLElement;
}

/**
 * Types a heading in place. The overlay holds a copy of the whole heading from the first frame, with
 * the untyped part laid out but invisible (.tw-rest), so every character appears exactly where it
 * ends up: centred lines do not slide, balanced lines do not re-wrap, and handing over to the real
 * text at the end moves nothing. Elements without text (the CTA arrow) appear once typing reaches
 * them.
 */
function typeHeading(el: HTMLElement) {
  const source = el.querySelector<HTMLElement>(".tw-text");
  const overlay = el.querySelector<HTMLElement>(".tw-type");
  const total = source?.textContent?.length ?? 0;
  if (!source || !overlay || !total) return el.setAttribute("data-typed", "");

  const copy = source.cloneNode(true) as HTMLElement;
  copy.removeAttribute("class");
  copy.setAttribute("inert", "");
  copy.querySelectorAll("[id]").forEach((node) => node.removeAttribute("id"));
  const runs: TypedRun[] = [];
  const boxes: { at: number; el: Element }[] = [];
  let offset = 0;
  const split = (parent: Node) => {
    for (const node of Array.from(parent.childNodes)) {
      if (node instanceof Text && node.data) {
        const shown = document.createTextNode("");
        const hidden = document.createElement("span");
        hidden.className = "tw-rest";
        const value = node.data;
        node.replaceWith(shown, hidden);
        hidden.append(node);
        runs.push({ start: offset, value, shown, rest: node, hidden });
        offset += value.length;
      } else if (node instanceof Element) {
        if (node.textContent) split(node);
        else boxes.push({ at: offset, el: node });
      }
    }
  };
  split(copy);
  if (!runs.length) return el.setAttribute("data-typed", "");

  // The caret is an empty inline (its bar is absolutely positioned), so it never shifts the text.
  const caret = el.dataset.caret !== undefined ? document.createElement("span") : null;
  if (caret) caret.className = "tw-caret";
  const show = (count: number) => {
    let current = runs[0];
    for (const run of runs) {
      const n = Math.max(0, Math.min(run.value.length, count - run.start));
      if (run.shown.data.length !== n) {
        run.shown.data = run.value.slice(0, n);
        run.rest.data = run.value.slice(n);
      }
      if (run.start < count) current = run;
    }
    for (const box of boxes) box.el.classList.toggle("tw-rest", count < box.at || count === 0);
    if (caret && caret.nextSibling !== current.hidden) current.hidden.before(caret);
  };
  show(0);
  overlay.replaceChildren(copy);
  el.setAttribute("data-typing", "");

  const speed = Number(el.dataset.speed ?? Math.max(20, Math.min(TYPE_SPEED, TYPE_MAX / total)));
  const delay = Number(el.dataset.delay ?? TYPE_DELAY);
  let start: number | undefined;
  // Timed from the clock rather than counted in ticks, so a busy main thread never slows the typing.
  const frame = (now: number) => {
    if (el.hasAttribute("data-typed")) return; // settled meanwhile (Pause animations, reduced motion)
    start ??= now + delay;
    const count = Math.max(0, Math.floor((now - start) / speed));
    if (count >= total || !MOTION_ON()) {
      el.setAttribute("data-typed", "");
      el.removeAttribute("data-typing");
      overlay.replaceChildren();
      return;
    }
    show(count);
    requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
}

function countUp(el: HTMLElement) {
  const target = Number(el.dataset.count);
  const overlay = el.querySelector<HTMLElement>(".count-type");
  if (!overlay || !Number.isFinite(target)) return el.setAttribute("data-counted", "");
  el.setAttribute("data-counting", "");
  const format = new Intl.NumberFormat("en-GB");
  let start = 0;
  const step = (now: number) => {
    start ||= now;
    const t = Math.min((now - start) / COUNT_DURATION, 1);
    const eased = t === 1 ? 1 : 1 - 2 ** (-10 * t);
    overlay.textContent = format.format(Math.round(target * eased));
    if (t < 1 && MOTION_ON()) requestAnimationFrame(step);
    else {
      el.setAttribute("data-counted", "");
      el.removeAttribute("data-counting");
      overlay.replaceChildren();
    }
  };
  requestAnimationFrame(step);
}

export function MotionRuntime() {
  const pathname = usePathname();

  // The CSS safety net stands down, and a change to the reduced-motion setting applies at once.
  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-motion-ready", "");
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => {
      if (query.matches) {
        html.dataset.motion = "reduced";
        settleMotion();
      } else if (html.dataset.motion === "reduced") {
        let paused = false;
        try {
          paused = localStorage.getItem("gs-motion") === "paused";
        } catch {}
        html.dataset.motion = paused ? "paused" : "on";
      }
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  // Reveals, typewriters and counters: observe everything on the page, and anything added later.
  useEffect(() => {
    if (!MOTION_ON()) {
      settleMotion();
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          observer.unobserve(el);
          try {
            if (!MOTION_ON()) settleMotion(el.parentNode ?? document);
            else if (el.hasAttribute("data-typewriter")) typeHeading(el);
            else if (el.hasAttribute("data-count")) countUp(el);
            else reveal(el);
          } catch (error) {
            // One failing element must never strand the rest of the batch: the observer will not
            // report them again, so they would stay hidden. Show this one in full and carry on.
            el.removeAttribute("data-typing");
            el.removeAttribute("data-counting");
            el.setAttribute(el.hasAttribute("data-typewriter") ? "data-typed" : el.hasAttribute("data-count") ? "data-counted" : "data-revealed", el.hasAttribute("data-reveal") ? "done" : "");
            console.error("MotionRuntime:", error);
          }
        }
      },
      // Sky9's margin (−50px) at the bottom; the area extends far above the viewport, so anything
      // scrolled past without being seen (a fling, the End key, an anchor jump) is revealed too.
      { rootMargin: "100000px 0px -50px 0px", threshold: 0 },
    );
    const scan = (root: ParentNode) => {
      if (root instanceof HTMLElement && root.matches(PENDING)) observer.observe(root);
      root.querySelectorAll<HTMLElement>(PENDING).forEach((el) => observer.observe(el));
    };
    scan(document);
    const mutations = new MutationObserver((records) => {
      for (const record of records) record.addedNodes.forEach((node) => node instanceof HTMLElement && scan(node));
    });
    mutations.observe(document.body, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, [pathname]);

  // Spotlight cards and the scroll progress bar.
  useEffect(() => {
    let active: HTMLElement | null = null;
    let rect: DOMRect | null = null;
    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      const card = (event.target as Element | null)?.closest<HTMLElement>(".spotlight") ?? null;
      if (card !== active) {
        active?.removeAttribute("data-spot");
        active = card;
        rect = null;
      }
      if (!card) return;
      // Measured once per card (and again after scrolling), not on every pointer move.
      rect ??= card.getBoundingClientRect();
      card.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
      card.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
      card.setAttribute("data-spot", "");
    };
    const onLeave = () => {
      active?.removeAttribute("data-spot");
      active = null;
      rect = null;
    };

    const bar = document.querySelector<HTMLElement>(".scroll-progress");
    let current = 0;
    let frame = 0;
    const tick = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const target = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      // Spring-like easing toward the scroll position (Sky9: stiffness 280, damping 30); jump when motion is off.
      current = MOTION_ON() ? current + (target - current) * 0.22 : target;
      if (Math.abs(target - current) < 0.001) current = target;
      bar?.style.setProperty("--progress", current.toFixed(4));
      document.documentElement.toggleAttribute("data-scrolled", window.scrollY > 320);
      frame = current === target ? 0 : requestAnimationFrame(tick);
    };
    const onScroll = () => {
      rect = null;
      if (!frame) frame = requestAnimationFrame(tick);
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();
    return () => {
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return null;
}

/** Inline, before first paint: decides html[data-motion] so entrances never flash. */
export const MOTION_BOOT = `(function(){try{var d=document.documentElement;var r=window.matchMedia("(prefers-reduced-motion: reduce)").matches;var p=localStorage.getItem("gs-motion")==="paused";d.dataset.motion=r?"reduced":p?"paused":"on";}catch(e){}})();`;
