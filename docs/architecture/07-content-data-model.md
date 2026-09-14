# G. Content Data Model

Source of truth: `types/content.ts`.

## Four layers, one owner each

```
Getsibu.pdf ──extract──▶ content/source/pdf-pages.json          (1) SOURCE        generated, never edited
                                   │
content/architecture/*.ts ─────────┤                            (2) ARCHITECTURE  hand-curated decisions
                                   ▼
                    scripts/build-inventory.ts
                                   │
                                   ▼
               content/generated/inventory.json                 (3) INVENTORY     generated, never edited
               content/generated/search-index.json
                                   │
content/pages/<section>/<slug>.ts ─┤                            (4) AUTHORED      Prompt 2+ (none yet)
                                   ▼
                  app/[...path]/page.tsx  →  page-type template → sections
```

| Layer | Answers | Changes when |
|---|---|---|
| Source | What the PDF says, verbatim | The PDF changes (`npm run source:extract`) |
| Architecture | Where a page lives, what type, which cluster, what's allowed to be claimed, navigation | A structural decision changes |
| Inventory | The fully resolved page: URL, breadcrumb, SEO, related links, CTA, recipe, claims | Rebuilt on every `prebuild` |
| Authored | The page body: sections with sourced copy and media | Content is written |

A page's **identity** (number, title, slug, URL, SEO title, H1) lives only in layers 1–3. Authored content cannot override it — this is what keeps 400 pages consistent.

## Source record

```ts
interface SourcePage {
  number: number;        // 1–400, stable identity
  sourceTitle: string;   // exactly as in the PDF
  title: string;         // typographic normalisation only ("--" → "—")
  text: string;          // the paragraph, verbatim
  group: { range: "31-60"; start: 31; end: 60; label: "AI Features"; headingInSource: true };
}
```

## Inventory record (`InventoryPage`)

Abbreviated real entry — PDF page 33:

```jsonc
{
  "number": 33,
  "title": "AI Scene Detection",
  "sourceText": "Scene detection automatically breaks video into structured scenes. Users can navigate…",
  "pdfGroup": { "range": "31-60", "label": "AI Features" },
  "status": "canonical",           // or "merged" + mergedInto
  "mergedSources": [],             // PDF duplicates folded into this page
  "section": "features",
  "category": "ai",
  "role": "leaf",                  // "home" | "section-root" | "leaf"
  "slug": "ai-scene-detection",
  "path": "/features/ai-scene-detection",
  "aliases": [],                   // paths that 308 here
  "parentPath": "/features/ai",
  "breadcrumb": [{ "label": "Home", "path": "/" }, { "label": "Features", … }, { "label": "AI", … }, { "label": "AI Scene Detection", … }],
  "pageType": "ai-feature",
  "recipe": "ai-input-output",
  "primaryTopic": "ai scene detection",
  "intent": "commercial",
  "purpose": "Show what GetSibu's AI analyses, what becomes searchable as a result, and how people stay in control of it.",
  "keyStatement": "Scene detection automatically breaks video into structured scenes.",
  "angle": "Video broken into structured scenes for navigation.",
  "clusters": ["ai-vision", "scene-detection"],
  "related": [32, 34, 35, 51, 212, 216],
  "mentions": [],
  "relatedFeatures": [32, 34, 35, 51],
  "relatedResources": [365],
  "relatedFaqs": [],
  "relatedUseCases": [212, 216, 217],
  "children": [],
  "previous": 32, "next": 34,
  "cta": {
    "primary":    { "target": "global:primary", "label": "Start free", "href": "https://getsibu.com/signup" },
    "contextual": { "target": "page:398", "label": "Turn Your Asset Library Into Intelligence", "href": "/get-started/turn-your-asset-library-into-intelligence" }
  },
  "seo": {
    "title": "AI Scene Detection | GetSibu",
    "h1": "AI Scene Detection",
    "description": "Scene detection automatically breaks video into structured scenes.",
    "canonicalPath": "/features/ai-scene-detection",
    "schemaTypes": ["WebPage", "BreadcrumbList"],
    "robots": "index,follow",
    "sitemap": true
  },
  "searchGroup": "AI",
  "visual": { "medium": ["diagram", "product-ui"], "concept": "Media in, understanding out: …", "avoid": ["glowing brains", …], "subject": "AI Scene Detection" },
  "claims": ["scene-detection"],
  "needsVerification": true
}
```

Index hubs (`InventoryIndexPage`) carry `lede` + `ledeSource` (a cited PDF sentence or claim-free editorial text), a distinct meta `description`, `breadcrumb`, and `groups: [{ clusterId, label, pages[] }]`.

## Authored content (`PageContent`)

Written in Prompt 2+ as one typed module per page:

```ts
// content/pages/features/ai-scene-detection.ts
import type { PageContent } from "@/types/content";

export default {
  page: 33,
  lastReviewed: "2026-10-01",
  sections: [
    {
      kind: "hero", id: "hero", layout: "split",
      lede: "Scene detection automatically breaks video into structured scenes.",
      sources: [{ kind: "pdf", page: 33 }],
      media: { assetId: "scene-detection-timeline", alt: "…", provenance: { kind: "editorial", note: "Diagram" }, aspect: "16:9" },
    },
    {
      kind: "workflow", id: "how-it-works", heading: "…",
      stages: [ … ],
      sources: [{ kind: "pdf", page: 33 }, { kind: "pdf", page: 365 }],
    },
    { kind: "related", id: "related", heading: "Related capabilities", pages: [32, 34, 51], sources: [{ kind: "editorial" }] },
    { kind: "cta", id: "cta", heading: "Turn Your Asset Library Into Intelligence", conversionPage: 398, sources: [{ kind: "pdf", page: 398 }] },
  ],
} satisfies PageContent;
```

### Section kinds (the whole vocabulary)

`hero` · `definition` · `editorial` · `split` · `story` · `workflow` · `process` · `timeline` · `capabilities` · `comparison` · `before-after` · `statement` · `media` · `alternating` · `layers` · `matrix` · `plans` · `checklist` · `event-list` · `faq` · `related` · `cta`

Every section has `id`, `sources: SourceRef[]`, optional `density` (`dense` / `open`) and `surface` (`default` / `muted` / `inverse`). Sections that link to other pages reference PDF numbers (`page: 34`), never URLs — URLs always resolve through the inventory, so a slug change cannot break a link.

### Provenance is mandatory

```ts
type SourceRef =
  | { kind: "pdf"; page: number }
  | { kind: "site"; url: string; retrieved: string }
  | { kind: "editorial"; note?: string };   // connective, claim-free copy only
```

The validator (extended in Prompt 2) will fail authored content that:
- contains any `DO_NOT_USE` placeholder string (already enforced),
- states a claim that is not publishable (already enforced, by `detect` phrases),
- has a section with no `sources`,
- references a page number that is not canonical,
- has a `statement` with an `attribution` (quotes/testimonials are not in the model at all).

There is deliberately **no testimonial, logo-wall, stat-counter or customer section kind**. Adding one requires confirmed source material and a type change.

## Rendering

1. `app/[...path]/page.tsx` resolves the path through `lib/content/inventory.ts` (`resolvePath`).
2. `generateMetadata` → `buildMetadata(page.seo)`; `JsonLd` → `pageJsonLd(page)`.
3. The page-type template (Prompt 2) loads `content/pages/<section>/<slug>.ts` if present and renders its sections through a `SectionRenderer` switch on `kind`.
4. With no authored content yet, the architecture preview renders the PDF paragraph, relationships and CTA — no invented copy ever appears as a fallback.

## Rebuild commands

| Command | Does |
|---|---|
| `npm run source:extract` | PDF text → `content/source/pdf-pages.json` (fails unless exactly 400 pages) |
| `npm run inventory:build` | Source × architecture → inventory + search index |
| `npm run inventory:validate` | Invariants (errors fail, warnings report) |
| `npm run inventory:export` | CSV + Markdown inventory for humans |
| `npm run inventory` | build → validate → export |
| `npm run build` | `prebuild` runs build + validate, then `next build` |
