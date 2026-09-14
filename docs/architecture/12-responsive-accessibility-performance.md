# K. Responsive, Accessibility and Performance Foundation

Designed mobile-first: every section kind below defines its small-screen form first. Exact token values are set in Prompt 2; the structure here is binding.

## 1. Breakpoints

| Name | Min width | Target devices | Container side padding |
|---|---|---|---|
| base | 0 | small mobile (320–374) | fluid 16 px → |
| `xs` | 375 | large mobile | fluid |
| `sm` | 640 | small tablet | fluid |
| `md` | 768 | tablet portrait | fluid |
| `lg` | 1024 | tablet landscape / small laptop | fluid |
| `nav` | 1200 | **desktop navigation starts** | fluid |
| `xl` | 1280 | laptop / standard desktop | 40 px |
| `2xl` | 1536 | large desktop | 40 px, content stops growing |

*Updated in Prompt 2 to Tailwind-aligned values plus `xs` and `nav`; the side gutter is `clamp(1rem, 0.4rem + 2.4vw, 2.5rem)`. Implemented values: [13-design-system.md](13-design-system.md).*

Two containers only: **content** (max ≈ 1200 px) and **wide** (max ≈ 1440 px, for full-bleed media and diagrams). Header, sections and footer share them.

## 2. Fluid type and space

- Type scale uses `clamp()` between `base` and `xl` (Sky9 steps sizes at breakpoints, producing jumps). Implemented: display 40→64 px, H1 34→52, H2 28→40, H3 20→24, body 16→17, small 15. Line length ≤ 68ch for body, ≤ 20ch for display.
- Section padding scales fluidly: **open** sections ≈ 64 px → 128 px, **dense** sections ≈ 48 px → 96 px. Sky9's 24 px mobile padding is the lower bound to avoid; so is 200 px desktop emptiness.
- Vertical rhythm on a 4 px base; spacing tokens only.

## 3. Section behaviour across devices

| Section | Mobile (base–md) | Tablet (md–lg) | Desktop (lg+) |
|---|---|---|---|
| hero `split` | text, then visual (visual ≤ 60vh) | text over visual | 6/6 or 7/5 split |
| hero `statement` | left-aligned large statement | same | centred up to 20ch |
| `split` | text first, visual after (order set by content, not by `mediaSide`) | stacked | side by side; `mediaSide` respected |
| `story` | each step: text + its own visual | same | sticky visual column + scrolling steps |
| `workflow` | vertical stages with a rail | 2-up grid | horizontal stages |
| `process` / `timeline` | vertical, numbered | vertical | process horizontal ≤ 5 steps; timeline vertical |
| `capabilities` | 1 column | 2 columns (odd last item spans) | 3 columns max |
| `comparison` / `matrix` | own `overflow-x: auto` container, sticky first column, visible scroll affordance | same | full table |
| `alternating` | stacked, text first | stacked | alternating sides |
| `layers` diagram | stacked labels | same | same, wider |
| `media` | full-bleed within gutters, caption below | same | wide container |
| `faq` | `<details>` list | same | 2/3 width column |
| `related` | 1-column list | 2 columns | 3 columns |
| `cta` | stacked buttons, full width | inline | inline |
| Mega navigation | drawer + accordions | drawer | panels |
| Search | full-screen dialog | dialog | centred dialog |

Tables, diagrams and code blocks are the only elements allowed to scroll horizontally, each inside its own container. The page body never scrolls sideways.

## 4. Accessibility

Target: **WCAG 2.2 AA**.

| Area | Requirement | Where it's enforced |
|---|---|---|
| Landmarks | `header`, `nav` (labelled: Primary, Breadcrumb, Footer, Next steps), `main#main`, `footer` | Layout ✓ |
| Skip link | First focusable element → `#main` | Layout ✓ |
| Headings | One H1 (PDF title); sections start at H2; `Heading` primitive computes level from nesting so order cannot skip | Primitive (Prompt 2) |
| Language | `<html lang="en-GB">` | Layout ✓ |
| Links | Descriptive text (page titles), no "click here"; external links marked; current page `aria-current="page"` in breadcrumbs and nav | Breadcrumbs ✓, nav (Prompt 2) |
| Buttons | Native `<button>` for actions, `<a>` for navigation; visible label or `aria-label` | Primitives |
| Focus | Visible `:focus-visible` ring ≥ 3:1 against every surface (indigo on light, olive on inverse); never removed | Tokens |
| Keyboard | Mega menu: Enter/Space/ArrowDown open, Escape closes and restores focus; drawer and search: focus trap + restore; no hover-only content | Components |
| Contrast | Every token pair tested; body text ≥ 4.5:1, large text and UI ≥ 3:1. White text on olive `#97AC3B` (~2.5:1) is forbidden | Token test script (Prompt 2) |
| Images | `Media` requires `alt` (empty only for decorative); diagrams are SVG `role="img"` with `<title>`/`<desc>` | Types ✓ (`MediaRef.alt` required) |
| Motion | All animation behind `@media (prefers-reduced-motion: no-preference)`; no autoplaying loops; no parallax; no typewriter headings | CSS + review |
| Touch | Targets ≥ 44 × 44 px; spacing between adjacent targets | Tokens |
| Forms (contact) | Visible labels, error text linked by `aria-describedby`, no placeholder-only labels | Prompt 4 |
| Tables | `<th scope>`, captions | Section components |
| Zoom | Works at 200% and 400% (reflow at 320 CSS px) | QA |

## 5. Performance

Targets per page at p75 mobile: **LCP < 2.0 s, CLS < 0.05, INP < 200 ms**, HTML-first render.

| Lever | Decision |
|---|---|
| Rendering | All 408 routes statically generated (`generateStaticParams`, `dynamicParams = false`) ✓ |
| Client JS | Server Components by default; client islands only for nav panels, drawer, search. Budget < 50 KB gz first-party. No animation library. |
| Data | `inventory.json` (≈ 1.3 MB) is imported only by server code and never reaches the client; the search index (≈ 165 KB, ≈ 25 KB gz) loads on first search open. |
| Images | `next/image`, AVIF/WebP ✓ (config), explicit `width`/`height` or `aspect-ratio` on every media frame, responsive `sizes`, lazy by default, `priority` only on the hero visual. |
| Fonts | Self-hosted Inter variable via `next/font`, `display: swap`, subset Latin, ≤ 2 files. |
| CSS | Utility CSS from tokens; no runtime CSS-in-JS. |
| Motion | CSS transforms/opacity only; one reveal pattern; `content-visibility: auto` for long hubs. |
| Third parties | None at launch (no chat widget, no sticky bars). Analytics, if added, loads after interaction or via a lightweight server-side option. |
| Layout stability | Header height reserved; media frames sized; no late-injected banners. |
| Caching | Static assets immutable; HTML revalidated on deploy. |

## 6. QA plan (Prompt 5)

- `inventory:validate` (exists) — structure, SEO uniqueness, links, claims, placeholders.
- Route audit: every inventory path returns 200 with correct `<title>`, canonical and one H1; every redirect returns 308.
- Responsive screenshots at 320, 375, 768, 1024, 1280, 1536 for one page per recipe (≈ 50 recipes × 6 widths).
- axe-core on one page per recipe + hubs + search dialog.
- Lighthouse CI budgets on home, one hub, one page per template.
- Link checker over the built site (no 404s, no redirects in internal links).
