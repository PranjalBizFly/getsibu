# H. Component Architecture

Components exist because the page architecture needs them: 22 section kinds, 19 page types, 7 navigation panels, one search. Nothing below is abstraction for its own sake; each maps to a data structure in `types/content.ts`.

## Layers

```
app/                      routes only: resolve path → pick template → render
components/
  layout/                 SiteHeader, MegaNavigation, MobileNavigation, SiteFooter, SkipLink, Container
  navigation/             Breadcrumbs ✓, SectionNav (prev/next), HubGroups
  search/                 GlobalSearch (client island), SearchResults
  templates/              one per page type, each a thin recipe runner
  sections/               one per ContentSection kind + SectionRenderer
  primitives/             Heading, Text, Button, Link, Media, Figure, Grid, Stack, Surface, Badge
  diagrams/               data-driven SVG figures (Layers, Flow, StateMachine, FolderTree, Timeline)
  seo/                    JsonLd ✓
  scaffold/               ArchitecturePreview (temporary, deleted in Prompt 2)
lib/
  content/                inventory access ✓, authored-content loader, media registry
  seo/                    metadata ✓, structured data ✓
  site.ts ✓
```

✓ = exists now. **Prompt 2 status:** layout, navigation, search, primitives, diagrams, 8 section kinds and the inventory/hub templates are built — see [13-design-system.md](13-design-system.md#components-built-in-prompt-2).

**Prompt 3 status:** all 23 section kinds, 15 focusable figures, the composition engine, `PageTemplate` and `HubTemplate` are built. The tables below record the Prompt 1 plan; [14-page-experience.md](14-page-experience.md) lists what was built and where.

## Server vs client

Everything is a **React Server Component** except these client islands:

| Island | Why client-side |
|---|---|
| `MegaNavigation` panel state | open/close, focus management, Escape |
| `MobileNavigation` drawer | dialog, focus trap, scroll lock |
| `GlobalSearch` | lazy-loads the search index on first open |
| `FaqSection` disclosure (optional) | can be native `<details>` — prefer that, zero JS |
| `MediaVideo` (if used) | play/pause control |
| `StoryScroller` (Prompt 3) | tracks the step in the viewport centre and swaps the figure's focus; server-rendered figures are passed in |

Target: < 50 KB gzipped of first-party client JS on any page.

## Layout components

| Component | Data | Notes |
|---|---|---|
| `SiteHeader` | `PRIMARY_NAV`, `GLOBAL_CTAS` | Sticky, condenses on scroll (CSS `scroll-timeline` or a single IntersectionObserver), logo, 7 items, search trigger, Sign In, Start free |
| `MegaNavigation` | `NavItem.columns` | Column heading → bold hub link → 3–4 links; keyboard pattern documented in [06](06-navigation-and-search.md) |
| `MobileNavigation` | same | Accordion groups, pinned CTAs, 44 px targets |
| `SiteFooter` | `FOOTER_NAV` | Every hub; no social links or contact details until confirmed |
| `SkipLink` | — | First focusable element |
| `Container` | `size: "content" \| "wide"` | The only two widths on the site |

## Templates (one per page type)

> **As built (Prompt 3):** two templates rather than one per page type. `PageTemplate` renders the page's authored or composed sections, and the page type decides the recipe the composer follows (`scripts/compose-pages.ts`); `HubTemplate` renders generated hubs. Page-type differences live in data, so a new type needs no new template. See [14-page-experience.md](14-page-experience.md#2-how-a-page-is-built).

The original plan: a template is ~30 lines: it reads the inventory entry and the authored `PageContent`, then renders sections in the recipe order. Shared frame for every template:

```tsx
<PageFrame page={page}>                // breadcrumb, JSON-LD, <article>
  <SectionRenderer sections={content.sections} page={page} />
  <RelatedRail page={page} />          // only if not already in the recipe
</PageFrame>
```

| Template | Types | Special behaviour |
|---|---|---|
| `HomeTemplate` | home | Bespoke composition allowed (Prompt 2) |
| `FeatureTemplate` | platform, feature, ai-feature, workflow, storage, integration, access-security, analytics, developer, migration, architecture | Hero visual slot resolves by `visual.medium` |
| `UseCaseTemplate` | use-case | "Capabilities for this team" built from `mentions` (the features the PDF names for the team) |
| `ResourceTemplate` | resource | Definition-first; table of contents for long articles; Article JSON-LD |
| `FaqTemplate` | faq | Answer in the first paragraph; link to the page that explains it (`related[0]`) |
| `PricingTemplate` | pricing | `plans` section reads confirmed plan data only; renders nothing when unconfirmed |
| `ValueTemplate` | business-value | No numeric sections allowed |
| `ConversionTemplate` | conversion | Minimal header variant optional; one primary action |
| `HubTemplate` | section roots + generated indexes | Groups by cluster; each item: title + key statement |

## Section components (one per `ContentSection.kind`)

| Kind | Component | Density | Visual pattern | Used for |
|---|---|---|---|---|
| `hero` | `PageHero` | open | split / centered / statement | every page |
| `definition` | `DefinitionBlock` | open | large direct answer + supporting line | resources, FAQs (AEO) |
| `editorial` | `EditorialSection` | open | readable column, ≤ 68ch | explanation |
| `split` | `SplitContentSection` | open | text + one visual, side configurable | concept + visual |
| `story` | `FeatureStorySection` | open | sticky visual + stepping text (desktop), stacked (mobile) | multi-step capabilities |
| `workflow` | `WorkflowSection` | dense | horizontal stages, vertical on mobile; stages may link to pages | ingestion, approvals, AI pipeline |
| `process` | `ProcessSection` | dense | numbered steps | how-to |
| `timeline` | `TimelineSection` | dense | vertical rail | versions, lifecycle, migration phases |
| `capabilities` | `CapabilityBreakdown` | dense | the one card grid (max once per page) | capability sets |
| `comparison` | `ComparisonTable` | dense | 2-column table, scrolls in its own container on mobile | mapping, before/after systems |
| `before-after` | `BeforeAfterSection` | open | two columns of short lines | scattered vs central |
| `statement` | `StatementSection` | open | large quiet statement, no attribution | positioning |
| `media` | `MediaContentSection` | open | full-width figure + caption | product capture, diagram |
| `alternating` | `AlternatingRows` | open | ≤ 3 rows, alternating sides | use cases, conversion proof |
| `layers` | `LayersDiagram` | open | stacked labelled layers | architecture, boundaries |
| `matrix` | `AccessMatrix` | dense | role × capability table | RBAC, plans |
| `plans` | `PlanComparison` | dense | plan cards from confirmed data | pricing |
| `checklist` | `Checklist` | dense | two-column list | assurance, planning |
| `event-list` | `EventList` | dense | event name + description | webhooks |
| `faq` | `FaqSection` | dense | `<details>` list + FAQPage JSON-LD when publishable | only with authored Q&A |
| `related` | `RelatedPages` | open | title + key statement links | every page |
| `cta` | `CTASection` | open (inverse surface) | contextual conversion headline + primary/secondary CTA | every page |

`SectionRenderer` is an exhaustive `switch` on `kind` — adding a kind without a component is a type error.

**As built:** every kind above is implemented, plus `category-explorer` (homepage). Component names differ in places: `story` → `StorySection` + `StoryScroller`, `layers` → `LayersSection`, `matrix` → `MatrixSection`, `checklist` → `ChecklistSection`, `event-list` → `EventListSection`. Most live in `components/sections/ContentSections.tsx` and `StorySections.tsx`; items that link to pages share `ItemTitle` and `CurrentBadge` from `items.tsx`. Full table with mobile behaviour: [14-page-experience.md](14-page-experience.md#4-section-kinds--all-23-implemented).

## Primitives

`Heading` (enforces level passed from the section's position, so heading order can't break), `Text`, `Button` (primary / secondary / text; only three), `Link` (internal links take a PDF page number and resolve through the inventory), `Figure` + `Media` (wraps `next/image`, requires `alt` and `provenance`), `Surface` (default / muted / inverse), `Grid`, `Stack`, `Eyebrow`.

## Diagrams

Diagrams are components fed by page data, not image files:

| Diagram | Input | Pages |
|---|---|---|
| `LayersDiagram` | ordered labels | 2, 301, 318, 321… |
| `FlowDiagram` | stages | 121, 143, 107, AI input-output pages |
| `StateMachine` | states + transitions | 67, 68, 76, 102 |
| `FolderTree` | tree + scopes | 152, 154, 178, 133, 287 |
| `TimelineRail` | items | 91–100, 289–299 |
| `BoundaryDiagram` | tenants | 160–168, 324 |

Each renders accessible SVG (`role="img"`, `<title>`, `<desc>`), scales without reflow, and reads in light and dark surfaces.

**As built:** 15 figures in `components/diagrams/` (`figures-core.tsx`, `figures-systems.tsx`), registered with captions in `Diagram.tsx`. Instead of one diagram per shape, each figure takes a `focus` that highlights the part of the system a page is about, chosen in `content/architecture/visuals.ts`. Focus keys: [14-page-experience.md](14-page-experience.md#5-figures-with-focus).

## Build order for Prompts 2–5 (suggested)

1. Tokens + primitives + `Container` + `Surface` → `SiteHeader`/`MegaNavigation`/`MobileNavigation`/`SiteFooter`.
2. `SectionRenderer` + the 8 most-used sections (hero, split, workflow, editorial, related, cta, definition, timeline) → `FeatureTemplate` + `HubTemplate`.
3. Remaining sections, diagrams, `ResourceTemplate`, `FaqTemplate`, `UseCaseTemplate`.
4. `GlobalSearch`, `/site-search`, `/sitemap`, pricing and supporting pages.
5. Authored content per section group, media registry, QA scripts.
