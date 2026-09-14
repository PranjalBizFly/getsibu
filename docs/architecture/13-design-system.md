# Design System (Prompt 2)

Implemented in `app/globals.css` (Tailwind CSS v4.3.3 with `@theme` tokens) and `components/`. This page is the reference; the CSS is the source of truth.

## Principles

1. **GetSibu's brand, not a template.** Indigo and olive come from the official logo and site CSS; Inter is the declared brand face. Sky9 contributes presentation principles only (see [08](08-visual-and-image-strategy.md#sky9)).
2. **One bold idea: the olive ring.** The circle in the GetSibu symbol becomes the "found" marker — eyebrow bullets, the active tab underline, the matched asset in the hero, list markers. Everything else stays quiet.
3. **Semantic tokens only.** Components use `text-fg`, `bg-raised`, `border-line`, `bg-accent`… never raw hex values, so one component works on paper, muted and navy bands.
4. **Diagrams, not fake screenshots.** Visuals are SVG figures drawn from cited PDF concepts, captioned as illustrations.
5. **Content sets the height.** No full-viewport heroes, no filler sections, no decorative gradients.

## Colour

### Brand palette (fixed)

| Token | Hex | Use |
|---|---|---|
| `indigo` | `#2B296E` | Brand primary (logo wordmark). Primary actions and links on light surfaces. |
| `indigo-700` / `-500` / `-300` / `-100` / `-50` | `#3C3A8F` / `#6664C2` / `#A9A7E3` / `#E4E3F6` / `#F1F1FA` | Hover, diagram fills, soft backgrounds |
| `olive` | `#97AC3B` | Brand secondary (logo symbol). Graphics and markers only on light surfaces. |
| `olive-700` / `-300` / `-100` | `#5C6B1C` / `#C9D78A` / `#EDF2D5` | Olive text on light, highlights, soft fills |
| `navy` | `#0F1729` | Inverse bands and footer (the official site's dark ground) |
| `navy-800` / `-700` / `-950` | `#172139` / `#243049` / `#0B1120` | Raised and sunken inverse surfaces |

### Semantic tokens and contrast

| Token | Paper (default) | On paper | Inverse (navy) | On navy |
|---|---|---|---|---|
| `--bg` | `#F7F7FA` | — | `#0F1729` | — |
| `--bg-raised` | `#FFFFFF` | — | `#172139` | — |
| `--bg-sunken` | `#EFEFF5` | — | `#0B1120` | — |
| `--fg` | `#131330` | 16.9:1 | `#E9EBF3` | 15.0:1 |
| `--fg-soft` | `#3A3A58` | 10.2:1 | `#C9CEDC` | 11.4:1 |
| `--fg-muted` | `#5E5E7A` | 5.8:1 (5.5:1 on muted) | `#A5ADC2` | 8.0:1 (7.1:1 on raised) |
| `--accent` | `#2B296E` indigo | 11.9:1 | `#AFC15C` olive | 9.0:1 |
| `--accent-fg` (text on accent) | `#FFFFFF` | 12.8:1 | `#0F1729` | 9.0:1 |
| `--signal` | `#97AC3B` olive | 2.4:1 — **graphics only** | `#AFC15C` | 9.0:1 |
| `--signal-strong` | `#5C6B1C` | 5.5:1 (5.1:1 on signal-soft) | `#C9D78A` | 11.6:1 |
| `--line` / `--line-strong` | `#DFDFE8` / `#C5C5D4` | borders | `#26314B` / `#38456A` | borders |
| `--focus` | indigo | ≥ 3:1 | olive-300 | ≥ 3:1 |

Surfaces: default (paper), `.surface-muted` (a cooler band for dense sections), `.surface-inverse` (navy). The primary button is indigo on paper and olive with navy text on navy — the same `bg-accent text-accent-fg` classes.

**Rule:** white text on olive is forbidden (2.4:1); navy text on olive is fine (7.0:1). There is no global dark mode; navy bands give the site its contrast rhythm.

## Typography

Inter (variable, with the `opsz` optical-size axis) for everything; IBM Plex Mono 500 for eyebrows, labels and technical detail. Both self-hosted through `next/font`.

| Utility | Size (mobile → desktop) | Line height | Tracking | Weight | Use |
|---|---|---|---|---|---|
| `type-display` | 40 → 64px | 1.04 | −0.034em | 600 | Homepage H1 only |
| `type-h1` | 34 → 52px | 1.08 | −0.030em | 600 | Page H1, CTA headline |
| `type-h2` | 28 → 40px | 1.12 | −0.024em | 600 | Section headings |
| `type-h3` | 20 → 24px | 1.25 | −0.014em | 600 | Sub-sections, panels |
| `type-h4` | 17px | 1.35 | −0.008em | 600 | List titles, cards |
| `type-statement` | 24 → 34px | 1.30 | −0.020em | 500 | Statement sections |
| `type-body-lg` | 17 → 20px | 1.55 | −0.006em | 400 | Ledes, intros |
| `type-body` | 16 → 17px | 1.65 | — | 400 | Running text |
| `type-body-sm` | 15px | 1.55 | — | 400 | Lists, cards |
| `type-eyebrow` | 12px mono, uppercase | 1.2 | 0.08em | 500 | Eyebrows, labels |
| `type-caption` | 13px | 1.45 | — | 400 | Captions, breadcrumbs |
| `type-nav` | 15px | 1.2 | −0.006em | 500 | Navigation |
| `type-button` | 15px | 1 | −0.006em | 600 | Buttons |

Sizes are fluid (`clamp()`), never stepped. Nothing exceeds 64px. Measures: body ≤ 64ch, ledes 44–60ch, headings 15–22ch, `text-wrap: balance` on headings and `pretty` on paragraphs.

## Spacing and layout

| Token | Value |
|---|---|
| Base unit | 4px (Tailwind spacing scale) |
| `--gutter` | `clamp(1rem, 0.4rem + 2.4vw, 2.5rem)` — 16px → 40px |
| `container-content` | max 1200px — text-led sections, inner-page heroes |
| `container-wide` | max 1440px — header, homepage hero, explorer, split sections, footer |
| `section-open` | `clamp(4rem, 2.8rem + 4.6vw, 7rem)` — 64 → 112px block padding |
| `section-dense` | `clamp(3rem, 2.2rem + 3.2vw, 5.25rem)` — 48 → 84px |
| Section header → content | 40–48px |
| `--header-height` | 68px (constant; the header never resizes, so no layout shift) |

Two adjacent bands on the same surface share one gap (`[data-surface=x] + [data-surface=x] { padding-top: 0 }`), which prevents the "heading, huge gap, tiny paragraph, huge gap" pattern.

### Breakpoints

| Name | Min width | Notes |
|---|---|---|
| base | 0 | Small phones (tested at 320) |
| `xs` | 375 | Header shows "Start free" |
| `sm` | 640 | Two-column grids |
| `md` | 768 | Tablet portrait |
| `lg` | 1024 | Twelve-column layouts, split sections side by side |
| `nav` | 1200 | Desktop navigation (drawer below) |
| `xl` | 1280 | Search label in header, wider nav spacing |
| `2xl` | 1536 | Search shortcut hint |

## Radius, borders, shadows

| Token | Value | Use |
|---|---|---|
| `rounded-xs` | 4px | Chips, keyboard hints, focus rings |
| `rounded-sm` | 6px | Buttons, inputs, nav items |
| `rounded-md` | 10px | Cards |
| `rounded-lg` | 16px | Diagram frames, dialogs, comparison panels |
| `rounded-full` | — | Filter pills only |
| `shadow-raise` | subtle | The "after" panel, raised emphasis |
| `shadow-panel` | deep, soft | Mega menu and search dialog only |

Hairline borders (`border-line`) separate most things; lists use rules, not cards. Cards appear only for peer items (resources, related topics).

## Motion

| Pattern | Implementation | Timing |
|---|---|---|
| Hero entry | `.motion-enter > *` staggered rise (transform only since Prompt 4, so text paints immediately for LCP) | 800ms, 90ms stagger, `--ease-out` |
| Scroll reveal | `[data-reveal]`, CSS scroll-driven (`animation-timeline: view()`) where supported; fully visible elsewhere | entry 4–38% of viewport |
| Hero diagram | parts fade in from 0.2 opacity to their own opacity (focus dimming survives); the olive ring draws once (`stroke-dashoffset`) | 600ms parts, 1.1s ring |
| Mega menu / search | fade + 6px drop | 200–220ms |
| Mobile sheet | slide from right | 320ms |
| Hover | arrow nudge 3px, card lift 2px, colour transitions | 200ms |

No loops, parallax, typewriter, shimmer or tilt. `prefers-reduced-motion: reduce` disables every animation and transition globally; all motion is CSS (no animation library).

## Components built in Prompt 2

| Area | Components |
|---|---|
| Primitives | `Icon`, `ButtonLink` / `buttonClass` (primary, secondary, quiet), `ArrowLink`, `Eyebrow`, `SectionHeader` |
| Layout | `SiteHeader` (server) + `HeaderNavigation` (client island), `MegaPanel`, `MobileMenu`, `SiteFooter`, `Logo` |
| Search | `lib/search/engine.ts`, `SearchDialog`, `SiteSearchResults`, `app/search-index.json/route.ts`, `app/site-search/page.tsx` |
| Sections | `Section`, `PageHero`, `StatementSection`, `WorkflowSection`, `CategoryExplorer` + `ExplorerTabs`, `BeforeAfterSection`, `RelatedPages` (index, cards), `SplitContentSection`, `CTASection`, `SectionRenderer` |
| Diagrams | `Diagram` with 9 figures: library-search, search-signals, ai-review, timeline-review, version-record, folder-access, library-activity, tenant-boundaries, api-flow |
| Templates | `InventoryPageTemplate` (every page without authored content), `HubTemplate`, `HubGroups` |

## Header and navigation behaviour

- **Desktop (≥ 1200px):** seven items from `navigation.ts`. Panels open on click, on hover intent (90ms open, 220ms close) and on ArrowDown, which moves focus into the panel. Escape closes and returns focus. A click outside, focus leaving the header, or navigation closes the panel.
- **Panels:** up to four categories show side by side (heading, one-line sourced description, key pages, explore link). Features (seven categories) uses a category rail — a vertical tab list — with one detail area, so it never becomes a wall of links. Integrations and Developers use a single-column panel.
- **Below 1200px:** search icon, "Start free" (from 375px) and a menu button opening a `<dialog>` side sheet with native `<details>` sections, pinned Sign In / Start free, focus trap, Escape and backdrop close.
- **Search:** header button, ⌘K / Ctrl K, or `/`. A modal `<dialog>` with a combobox. The index loads on first open; results are grouped by content type, groups ordered by best match quality then a fixed order. Arrow keys, Enter and "Explore all results" → `/site-search?q=` (noindex, with group filters). Summaries of pages with unconfirmed claims are hidden.
- `scrollbar-gutter: stable` keeps the layout still when a modal locks scrolling.

## Homepage composition

| # | Section | Kind | Surface | Sources |
|---|---|---|---|---|
| 1 | Hero — H1 "The operating system for your creative library", lede, Start free / Explore the platform, library-search diagram | hero | paper | PDF 1, official site (H1 override recorded in `content/architecture/identity.ts`) |
| 2 | One searchable library | statement | paper | PDF 1, 2 |
| 3 | How it works: Connect → Ingest → Organise → Collaborate | workflow | muted | official site steps; PDF 121, 127, 143, 4, 8, 61 |
| 4 | Capability explorer: six categories with key pages and diagrams | category-explorer | paper | PDF 7, 11, 18, 9, 31, 47, 48, 62–64, 68, 91, 101, 119, 152, 154, 161, 181, 188–190 |
| 5 | Bring order to creative chaos (before / after) | before-after | paper | PDF 399, 6, 91, 40, 73, 74 |
| 6 | Built for the teams behind the work | related (index) | paper | PDF 382 + six use-case pages |
| 7 | Collaboration without losing control | split | paper | PDF 180, 152, 154, 161, 170, 175, 176 |
| 8 | An API-first platform you can build on | split | navy | PDF 252, 254, 255, 262–267 |
| 9 | Understand modern asset management | related (cards) | paper | four resource pages |
| 10 | Bring Your Creative Assets Together | cta | navy | PDF 392, 121 |

The rhythm alternates open and dense, text-led and visual, paper and navy: statement → steps → interactive → comparison → editorial list → split → inverse split → cards → inverse CTA. The validator confirms the page uses only publishable claims and no placeholders.

## Inner pages (all 395 other pages)

> **Superseded in Prompt 3.** `InventoryPageTemplate` was replaced by `PageTemplate` (composed, page-specific sections) and a richer `HubTemplate`. See [14-page-experience.md](14-page-experience.md). The Prompt 2 behaviour is kept below for the record.

`InventoryPageTemplate` rendered what the inventory knows:

- **Hero:** breadcrumb, category eyebrow, PDF H1. The PDF paragraph is the lede — but only when its claims are publishable. Actions are Start free and "More in {section}", with a topic aside listing section, topic clusters and mentioned pages.
- **Section roots:** child pages, grouped by topic cluster.
- **Related topics** (cards), then "Who uses this", "Learn more" and "Questions" lists.
- **Previous / next** within the category.
- **CTA band** from the contextual conversion page.

`HubTemplate` renders the 12 generated hubs with every page grouped by cluster. Pages with unconfirmed claims show their title only, never the claim.

## QA performed

Local production build (`next build`, 415 static pages), served with `next start` and driven by headless Chrome over the DevTools protocol:

- **Screenshots and fixes:**
  - Homepage checked at 1440, 820 and 390px; inner page, hub, section root and claim-blocked page at 1280 and 1440px; mega menus (Features, Platform, Developers), search dialog on desktop and mobile, mobile menu, `/site-search` and 404.
  - Issues found and fixed: a missing band gap after the hero, diagram labels overflowing their boxes, header items wrapping at 1280px, arrow links detaching from their text, CTA buttons stacking, and a layout shift when modals open.
- **Horizontal overflow sweep:** `/`, an inner page, a hub and `/site-search` at 320, 375, 768, 1024, 1280 and 1920px — no overflow.
- **Header fit:** no wrapped items at 1200, 1280 or 1440px.
- **Keyboard:**
  - ArrowDown into the Features panel, then arrows through its rail; Escape closes and returns focus.
  - Arrow keys switch explorer tabs.
  - Ctrl+K opens search with focus in the input; ArrowDown and Enter navigate and close the dialog.
- **Headings:** one H1, then H2 per section and H3 within, with no skipped levels on the homepage.

## Known gaps (next prompts)

- ~~Section kinds without components yet.~~ All implemented in Prompt 3 — see [14-page-experience.md](14-page-experience.md).
- Diagram text becomes small on phones (SVG scales down). The figures carry full `aria-label`s; phone-specific simplified versions would improve legibility.
- The favicon is the official non-square file (352×461); a square export from GetSibu is needed.
- No automated axe or Lighthouse run yet (planned for QA in Prompt 5).
- `/contact`, `/about` and legal pages still await GetSibu content; "Book a demo" is suppressed until `/contact` exists.
