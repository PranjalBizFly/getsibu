# Page Experience (Prompt 3)

Prompt 3 turns the 395 inner pages from one generic template into composed, page-specific stories, and implements every section kind in the content model. Nothing from Prompts 1–2 was rebuilt: routes, inventory, claims, tokens, header, navigation, search and homepage are unchanged.

> The Prompt 3 brief arrived truncated after §02 ("The final architecture must support ALL section types"). §01 (audit) and §02 (all section types) are complete.
>
> **Updated in Prompt 5** ([16-launch-readiness.md](16-launch-readiness.md)): held pages (titles stating unconfirmed claims) are not composed; overlapping sequences are resolved by keeping the one most relevant to the page; section roots add no topic list; FAQ answers and definitions carry inline links; CTA headings link their conversion page.
>
> **Updated in Prompt 4** (see [15-product-quality.md](15-product-quality.md)): pages that need verification are framed by verified context; composition runs repeat-free passes; reuse caps are tighter; the story scroller no longer dims text and is sticky on phones. Figures below reflect the current build.

## 1. Audit (before implementation)

| # | Question | Finding |
|---|---|---|
| 1 | Which section types exist? | 7 of 22 content kinds had components: `hero`, `statement`, `split`, `workflow`, `before-after`, `related`, `cta` (plus the homepage-only `category-explorer`). |
| 2 | Which are missing? | 15: `definition`, `editorial`, `story`, `process`, `timeline`, `capabilities`, `comparison`, `media`, `alternating`, `layers`, `matrix`, `plans`, `checklist`, `event-list`, `faq`. |
| 3 | Which page types use generic templates? | All 17 inner page types rendered through one `InventoryPageTemplate`; hubs were grouped link lists. |
| 4 | Which pages were only paragraph + related links + CTA? | All 395 non-home pages. The 59 pages with unconfirmed claims had no paragraph at all: a title, related links and a CTA. |
| 5 | Which pages need visual storytelling? | Every type, each with a different shape. Features and AI need story, process and workflow. Security, tenancy and architecture need layers and matrices. Versioning, lifecycle, analytics and migration need timelines. Search, storage, folders and duplicates need comparisons. Use cases need capabilities and alternating rows. Resources and FAQs need a definition first. Pricing and value need plans and before/after. |
| 6 | Which components can be reused? | `Section` surfaces, `SectionHeader`/`Eyebrow`, `ButtonLink`/`ArrowLink`, `Icon`, `Diagram` (9 figures), `WorkflowSection`, `SplitContentSection`, `BeforeAfterSection`, `StatementSection`, `RelatedPages`, `CTASection`, `HubGroups`, `PageHero`, the `data-reveal` motion. All were extended in place, not duplicated. |
| 7 | Which content fields are missing? | Visuals with focus (which part of a figure a page is about); per-item page links and a "this page" marker; hero lede and visual; comparison emphasis; linked checklist items; route actions; and, above all, a sourced dataset for multi-page sequences. The PDF gives one paragraph per page, so richer sections must be assembled from related PDF pages. |

## 2. How a page is built

```
inventory.json ──► scripts/compose-pages.ts ──► content/generated/page-sections.json ──► PageTemplate
      ▲                    ▲                                                                  ▲
 PDF pages         storylines.ts, visuals.ts,                                  content/pages/* (authored,
                   claims.ts, clusters.ts                                      overrides composed)
```

- **Authored content wins.** `getPageSections(n)` (`lib/content/sections.ts`) returns authored `PageContent` when it exists (today only the homepage); otherwise it returns the composed sections.
- **Composition is a build step.** `npm run pages:compose` runs inside `npm run inventory` and `prebuild`; the validator then checks the output.
- **`PageTemplate`** renders the story sections, then (section roots only) every child page grouped by topic, then the FAQ and related sections, previous/next within the category (leaf pages), and the CTA.
- **`HubTemplate`** renders the category figure, a "Start here" grid of publishable pillar pages (when there are at least 3), every page grouped by cluster, and the category's conversion page as the CTA.

## 3. The composition engine

`scripts/compose-pages.ts` turns each page's recipe (`content/architecture/page-types.ts`) into sections, using only sourced material.

**Inputs** (all in `content/architecture/storylines.ts`, each entry citing its PDF pages):

| Set | Count | What it is |
|---|---|---|
| `STORYLINES` | 36 | Curated sequences of PDF pages: 10 workflows, 9 processes, 7 timelines, 6 layer stacks, 4 scroll stories. Each step's copy is the step page's own PDF statement. |
| `COMPARISONS` | 4 | Search, storage, folder and duplicate comparisons, with rows taken from the cited pages |
| `MATRICES` | 5 | Metadata, access, analytics, asset record, tenant. A `null` cell means "use the row page's statement". |
| `BEFORE_AFTER` | 5 | Centralise, folders to search, chaos to order, value, feedback |

Each set declares where it applies (`pages`, `clusters` or `categories`).

**Rules:**

- **Claims first.**
  - A page statement or paragraph is used only when the page is publishable (`needsVerification` false).
  - Labels pass through `safe()`, which falls back to a neutral label when a label names an unconfirmed claim ("Face grouping", "Google Drive").
  - A final guard drops any section whose copy contains a blocked claim term. Today it drops 0 sections.
- **"This page" markers.** When a storyline contains the current page, its step is marked `current`: highlighted, badged, not self-linked, and it lights up the figure's focus.
- **Hero.**
  - Category eyebrow and PDF H1.
  - A lede only when publishable. A page that needs verification leads with the statement of its verified context page, linked under the lede ("From Webhook Automation"); see `content/architecture/verified-context.ts`.
  - A figure from `heroVisual()`: 15 figures × focus/label give 73 distinct hero visuals; 50 pages use a typographic hero.
  - Definition-first recipes get a centred hero.
  - Actions are Start free plus "More in {parent}".
- **Depth.**
  - Every page gets between 3 and 5 story sections, at least two of them more than a figure or a statement: the recipe's sections first, then fallbacks rotated by page number, then (only if still short) fallbacks with reuse caps lifted.
  - Pages that need verification also plan a context workflow, verified topics, their topic list with "This page" marked, and a next step.
  - The validator warns below 3 and fails below 2.
- **No repeats.** Each page is composed twice: the first pass finds the pages its fixed sequences show, the second reserves them so pool-based sections pick other pages. A final pass removes statements still shown twice while the page can spare the section. No figure appears twice below the hero, and no section heading repeats the H1 or another section's heading.
- **Variety.**
  - A set reaches at most 6 pages through a category match (`CATEGORY_REUSE_CAP`), and a storyline at most 10 pages through a cluster match when the page is not one of its steps (`CLUSTER_REUSE_CAP`). Pages that need verification take no category-level sets.
  - Sequence, grid and prose shapes alternate (`arrangeStory`).
  - No kind appears twice in a row.
  - Dense kinds sit on muted bands (never two in a row).
  - Layer stacks go on navy unless the CTA follows.
- **Frame.** FAQ, related and CTA always close the page, in that order. FAQ items are PDF FAQ pages (question = page title, answer = its PDF paragraph), only when publishable.

**Output today:** 395 pages, 2,476 sections (average 6.3). 371 pages have 3 story sections, 22 have 4 and 2 have 5; none has fewer than 3. The pages use 51 recipes across 17 page types.

## 4. Section kinds — all 23 implemented

`SectionRenderer` is an exhaustive switch with a `never` default: a kind without a component is a type error.

| Kind | Component (file) | Pattern | Mobile | Composed uses |
|---|---|---|---|---|
| `hero` | `PageHero` | split with figure, centred, or typographic | stacks, figure below | 395 |
| `definition` | `DefinitionBlock` (ContentSections) | the answer as a large statement, then the rest | same | 24 |
| `editorial` | `EditorialSection` | sticky header; lead-in items link to their pages | stacks | 142 |
| `split` | `SplitContentSection` | text + figure with focus | stacks | 152 |
| `story` | `StorySection` + `StoryScroller` (client) | sticky figure follows the step in the viewport centre (or the step holding keyboard focus); the active step gets a rail, never dimmed text | figure sticky under the header on phones taller than 700px | 46 |
| `workflow` | `WorkflowSection` | up to 5 joined stage cards, current stage tinted | stacks | 151 |
| `process` | `ProcessSection` (StorySections) | numbered nodes on a horizontal rail | vertical rail | 78 |
| `timeline` | `TimelineSection` (StorySections) | sticky header, vertical rail | stacks | 84 |
| `capabilities` | `CapabilityBreakdown` | the one card grid | 1 column | 74 |
| `comparison` | `ComparisonTable` | 3-column table, emphasis column tinted | fits 320px; scrolls in its own box if needed | 45 |
| `before-after` | `BeforeAfterSection` | two lists | stacks | 26 |
| `statement` | `StatementSection` | large quiet statement | same | 48 |
| `media` | `MediaContentSection` | figure with its caption as the text column | stacks | 81 |
| `alternating` | `AlternatingRows` | up to 3 numbered rows with figures, alternating sides | stacks | 8 |
| `layers` | `LayersSection` | staircase of labelled layers, current layer tinted | no indent | 72 |
| `matrix` | `MatrixSection` | table, current row tinted | each row stacks, with column names | 63 |
| `plans` | `PlanComparison` | plan cards; details only when confirmed | 1 column | 4 |
| `checklist` | `ChecklistSection` | two-column linked list; the current page badged | 1 column | 113 |
| `event-list` | `EventListSection` | event name + description | same | 0 (webhook claims unconfirmed) |
| `faq` | `FaqSection` | native `<details>`, first open, "Read the full answer" | same | 80 |
| `related` | `RelatedPages` | cards with statements (three or more), otherwise a compact title list | 1 column | 395 |
| `cta` | `CTASection` | navy band, contextual conversion page | stacks | 395 |
| `category-explorer` | `CategoryExplorer` | tabbed explorer (homepage) | scrollable tabs | homepage |

Shared item helpers live in `components/sections/items.tsx`: `ItemTitle` (links unless current), `CurrentBadge` and `MatrixCell` ("Yes" → check icon, "—" → "Not included" for screen readers).

## 5. Figures with focus

`components/diagrams/` holds 15 data-driven SVG figures. Each has an `aria-label` and a caption that says it is an illustration, and they never mimic GetSibu's UI or use real-looking numbers. A `VisualRef { diagram, focus?, label? }` dims everything except the part a page is about, so pages in one cluster share a figure but not the same picture.

| Figure | Focus keys |
|---|---|
| `library-search` | — (homepage card) |
| `search-signals` | filename, metadata, ocr, tags, comments, semantic (each with its own query) |
| `ai-review` | object, colour, mood, confidence, approve, override, tags |
| `timeline-review` | comments, timeline, status |
| `version-record` | files, versions, restore, lifecycle, audit |
| `folder-access` | folders, team, individual, private, client |
| `library-activity` | uploads, storage, tags, cadence |
| `tenant-boundaries` | tenants, audit |
| `api-flow` | upload, search, metadata, tags, comments, approvals, webhooks, auth |
| `ingest-pipeline` | sources, upload, processing, index, preview |
| `architecture-stack` | clients, edge, api, search, storage |
| `migration-map` | folders, metadata, permissions, import, verify |
| `connector-flow` | `label` = connector name, only when publishable; otherwise "Your tools" |
| `control-map` | encryption, authentication, access, tenant, audit |
| `media-library` | comma-separated media types detected in the page text |

`content/architecture/visuals.ts` chooses figures: `heroVisual(page)` by category, cluster and title; `secondaryVisual()` picks a different figure for `split`/`media`.

## 6. Storytelling by page type

Most frequent story sections per type in the current composition:

| Page type | Pages | Recipes | Leading sections |
|---|---|---|---|
| platform | 10 | 3 | layers, statement, split, story, comparison |
| feature | 44 | 3 | story, capabilities, workflow, split, editorial |
| ai-feature | 30 | 5 | workflow, split, layers, editorial, process |
| workflow | 38 | 4 | workflow, timeline, split, matrix |
| storage | 19 | 4 | workflow, split, timeline, process |
| integration | 13 | 2 | process, media, workflow |
| migration | 24 | 3 | workflow, comparison, timeline, checklist |
| analytics | 33 | 3 | timeline, split, media, editorial, checklist |
| access-security | 47 | 4 | matrix, process, split, layers |
| use-case | 30 | 3 | capabilities, media, story, editorial |
| developer | 28 | 4 | workflow, layers, editorial, statement |
| architecture | 20 | 2 | workflow, layers, editorial, timeline |
| pricing | 7 | 2 | before-after, plans, comparison |
| business-value | 12 | 2 | before-after, editorial, checklist |
| resource | 20 | 3 | definition, editorial, timeline, comparison |
| faq | 10 | 2 | definition, related FAQs, media |
| conversion | 10 | 2 | layers, before-after, story, alternating |

## 7. Validation added

`npm run inventory:validate` (runs before every build) now also checks each composed page:

- **Shape:** it exists; hero first and CTA last; no two sections of the same kind in a row.
- **Depth:** at least 2 story sections (error), or 3 (warning).
- **Provenance:** every section has sources.
- **Copy:** no placeholder or blocked claim text.
- **Links:** page links and page lists point only at canonical pages; route actions resolve to inventory paths.

It also scans `components/diagrams/` and `storylines.ts` for placeholder copy. Prompt 4 added checks for unverified pages' metadata, repeated figures, headings and statements — see [15-product-quality.md](15-product-quality.md#validation-added).

## 8. QA performed

Production build (415 static pages), `next start`, and headless Chrome over the DevTools protocol (`.tmp/qa-shots.mjs`, not committed):

- **Screenshots:** one sample of every section kind at 1280px; story, matrix, comparison, layers, process and timeline at 390px; a live story scroll; hero variants; the AI hub.
- **Overflow:**
  - The sweep covers 20 pages at 320, 375, 768, 1024, 1280 and 1920px, plus one page per recipe (55 pages) at 320 and 390px.
  - It now measures against `clientWidth`. The earlier `innerWidth` check grows with the content under mobile emulation, so it missed real overflow.
- **Issues found and fixed:**
  - Story figure: it started on step 1 instead of the page's own step; two steps touching the centre band picked the wrong one; too much whitespace. It now crossfades between focus states.
  - The media section was a bare eyebrow over an oversized figure; it now has a caption-led text column.
  - Overlapping tag chips (library activity) and colliding region labels (AI review).
  - Comparison grid tracks stretched to the table's minimum width, making pages 530px wide on phones.
  - The matrix truncated text on phones (now stacks); the layers indent wasted width on phones.
  - The header overflowed by 4px at 320px; long hero buttons forced overflow (they now wrap below 640px).
  - Validator: the canonical-link regex had lost its `\d` and never matched. The composer's `escapeRegExp` had lost its backslashes. Both are fixed; recomposition is unchanged and validation passes.
  - From the first composition pass: duplicate CTAs, the FAQ mid-page, thin pages (3-section minimum), storyline over-repetition (reuse cap and shape alternation), and 22 claim leaks through cluster and connector labels (`safe()` plus the blocked-term guard).

## 9. Limitations and next steps

- **Depth is bounded by the PDF.**
  - A composed page can only say what its own PDF paragraph and related PDF pages say, and storylines repeat within a cluster: "Who access applies to" appears on 24 pages, "Building on the API" on 23.
  - Differentiation now comes from focus, "this page" markers and recipe rotation. Authored `PageContent` per page is the real fix and overrides composition automatically.
- **Unconfirmed claims hide content.** 59 pages publish without their claims: plan cards show titles only, `event-list` is unused (webhook event names conflict with the product), and connector names are replaced by "Your tools".
- **Diagram text** is still small on phones; simplified phone variants would help.
- **Still missing:** `/contact`, `/about` and legal pages await GetSibu content.

## Extending

- **New storyline:** add an entry to `STORYLINES` with `sourcePages` and where it applies; run `npm run inventory`.
- **New figure:** add a component to `figures-*.tsx`, register it with a caption in `Diagram.tsx`, add the id to `DiagramId`, and map it in `visuals.ts`.
- **Hand-written page:** add a module under `content/pages/` whose default export is `PageContent` (see `home.ts`), then add it to `AUTHORED_PAGES` in `registry.ts`. Every section needs `sources`, links use PDF page numbers, and the composed sections for that page stop being used.
