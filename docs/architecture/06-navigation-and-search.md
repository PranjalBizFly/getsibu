# F. Navigation System (and Search Architecture)

Source of truth: `content/architecture/navigation.ts`. The validator fails if any navigation link does not resolve to a live page or hub.

## Principles

1. **Derived from the PDF's 18 groups**, compressed into 7 primary items. The official site's 4-item header (Features, Pricing, About, Contact) cannot carry 400 pages; Sky9's 8 items with a mega menu that clips off-screen is the opposite failure.
2. **Three clicks to any page:** header → section or category hub → page. Every hub lists all of its pages.
3. **PDF terminology** for every label ("Versioning & Asset Management", "Permissions & Multi-Tenancy"), shortened only in column headings.
4. **The footer links every hub**, so every hub is one click from any page and every page is at most two.
5. **Official CTA wording**: "Start free" (primary), "Sign In", "Book a demo".

## Primary navigation

```
[GetSibu logo]  Platform▾  Features▾  Use Cases▾  Integrations▾  Developers▾  Resources▾  Pricing     [Search ⌘K]  Sign In  [Start free]
```

| Item | Panel | Columns → hub · featured pages |
|---|---|---|
| **Platform** | mega (4 col) | Platform → `/platform` · Architecture & Performance → `/architecture` · Security & Compliance → `/security` · Migration → `/migration` |
| **Features** | mega (7 col, 2 rows) | Search & Discovery · AI · Collaboration · Asset Management · Storage & Ingestion · Permissions · Analytics — each with its hub ("All AI features") and 3–4 pages |
| **Use Cases** | mega (4 col) | Video & Production · Marketing & Brand · Agencies · Organisations → `/use-cases` |
| **Integrations** | list | `/integrations` + Google Drive, Dropbox, AWS S3, Premiere Pro, Figma, Slack, Custom Integrations |
| **Developers** | list | `/developers` + GetSibu API, Webhooks, API Documentation, OpenAPI Specification, API Security |
| **Resources** | mega (3 col) | Learn → `/resources` · Business Value → `/business-value` · FAQs → `/faq` |
| **Pricing** | link | `/pricing` |

Featured links inside panels are editorial choices of the most central page per cluster (usually the cluster `primary`). Before launch, links to pages with blocked claims (e.g. Figma, Premiere Pro, AI Scene Detection) should be swapped for confirmed ones if GetSibu cannot confirm them — the page still exists, but the header should not promote an unconfirmed capability.

### Panel anatomy (adopted from Sky9 as a principle, not a layout)

- Column heading → **bold hub link** ("All AI features") → 3–4 child links.
- List panels: label + one-line description taken from the PDF paragraph's first clause.
- Panels are positioned against the header container, never centred on their trigger (avoids Sky9's off-screen clipping).
- Open on click and on keyboard focus + Enter/Space/ArrowDown; hover-intent open on pointer devices only; Escape closes and returns focus; one panel open at a time.

### Header behaviour

- Sticky; condenses height after scroll (no scroll-progress bar, no shadows stacked on blur).
- Desktop nav from **1200 px** (the `nav` breakpoint — seven items, search and two CTAs do not fit cleanly at 1024 px); below that a side-sheet drawer. *Updated in Prompt 2.*
- Right side: search trigger, Sign In (text), Start free (filled). "Book a demo" lives in CTA sections and on `/pricing`, not in the header — three header CTAs dilute the primary.

### Mobile drawer

- Search field first, then accordion per primary item (column headings become group labels), Pricing as a plain link.
- Sign In and Start free pinned at the drawer bottom.
- `role="dialog"`, `aria-modal`, focus trap, focus restore, Escape to close, body scroll lock; 44 × 44 px minimum targets.

## Footer

| Platform | Features | Solutions | Resources | Company (pending content) |
|---|---|---|---|---|
| Platform · Architecture & Performance · Security & Compliance · Migration · Pricing | Search & Discovery · AI · Collaboration · Versioning & Asset Management · Storage & Ingestion · Permissions & Multi-Tenancy · Analytics | Use Cases · Integrations · Developers | Resources · Business Value · FAQs · Get Started | About · Contact · Privacy · Terms · Sitemap |

The Company column is added when those supporting pages have real content (see [05-url-system.md](05-url-system.md#supporting-pages-not-in-the-pdf)). No social links (none exist officially), no fake address or phone.

## Category hierarchy

```
Home
├── Platform (/platform = PDF 2)
├── Features (/features)
│   ├── Search & Discovery (/features/search-and-discovery)   11–30
│   ├── AI (/features/ai)                                      31–60
│   ├── Collaboration (/features/collaboration)                61–90
│   └── Versioning & Asset Management (/features/asset-management) 91–120
├── Storage & Ingestion (/storage)                             121–150
├── Permissions & Multi-Tenancy (/permissions)                 151–180
├── Analytics (/analytics)                                     181–210
├── Use Cases (/use-cases)                                     211–240
├── Integrations (/integrations = PDF 241)                     241–251, 260
├── Developers (/developers = PDF 280)                          252–259, 261–279
├── Migration (/migration = PDF 281)                           282–300
├── Architecture & Performance (/architecture = PDF 301)        302–320
├── Security & Compliance (/security = PDF 321)                 322–340
├── Pricing (/pricing = PDF 341)                               342–347
├── Business Value (/business-value)                           348–360
├── Resources (/resources)                                     361–380
├── FAQs (/faq)                                                381–390
└── Get Started (/get-started = PDF 391)                       392–400
```

Inside each hub, pages are grouped by topic cluster (e.g. the AI hub: AI-assisted tagging · AI vision analysis · Face grouping · Duplicate detection · AI collections · AI-powered discovery · AI media understanding · Practical, human-controlled AI).

Breadcrumbs mirror this hierarchy: `Home › Features › AI › AI Scene Detection`, `Home › Security & Compliance › SOC 2 Readiness`.

---

## Search architecture

### Data

`content/generated/search-index.json` (≈165 KB, generated with the inventory):

```ts
{
  groups: ["Platform", "Search & Discovery", "AI", … "FAQs", "Get Started"], // 19 category labels, PDF order
  documents: Array<{
    id: string;          // "page-33" | "index-ai"
    title: string;       // PDF title
    path: string;        // canonical URL
    group: SearchGroup;  // result group
    type: PageTypeId;
    section: string;     // "Features"
    summary: string;     // meta description
    keywords: string[];  // cluster labels + redirect aliases ("/integrations/google-drive")
  }>
}
```

367 documents: the 355 live pages + 12 hubs (held and merged pages are never indexed). **Groups follow the PDF hierarchy** (decision 2026-09-15): a result's group is its category label, the same as its breadcrumb and hub (Permissions & Multi-Tenancy, not Security; Analytics, not Features). There are 19 groups in PDF order. `inventory:validate` fails if a category's `searchGroup` differs from its label. *Changed from the earlier 10 page-type groups* (Features, AI, Integrations, Developers, Security, Platform, Use Cases, Pricing, Resources, FAQs), which labelled pages outside their PDF group.

### Experience

```
┌ Search GetSibu ─────────────────────────── ⌘K ┐
│ semantic                                       │
├────────────────────────────────────────────────┤
│ AI          AI Semantic Search                 │
│ Features    Semantic Creative Search           │
│             Natural Language Asset Search      │
│ Resources   What Is Semantic Search?           │
│ Developers  Search Infrastructure              │
│                                                │
│ Explore all results →   (/site-search?q=…)     │
└────────────────────────────────────────────────┘
```

- Trigger in header (button with visible label on desktop, icon + label for screen readers on mobile), `⌘K` / `Ctrl K`, and `/`.
- Dialog (`role="dialog"`) containing a combobox (`role="combobox"` + `listbox`), arrow-key navigation, Enter to open, Escape to close; results announced via `aria-live="polite"` count.
- Max 4 results per group in the dialog (6 groups), empty groups hidden; "Explore all results" opens `/site-search?q=` (noindex, all results with group filters).
- Before typing, the dialog lists the main hubs, so it is useful at rest.

### Implemented (Prompt 2)

- **Engine:** `lib/search/engine.ts`, no library. Normalises and lightly stems terms (tag / tags / tagging), treats "DAM" and "digital asset management" as the same phrase, and ignores stopwords.
- **Scoring:**
  - Per term: title word 60, title prefix 36, cluster keyword 18, keyword prefix 10, section 8, summary 6. Every term must match (one may miss for 3+ terms).
  - Bonuses: exact title +1000, title starts with the query +300, title contains the query +120, pillar page (cluster primary or hub) +25.
- **Group order:** groups are ordered by their best hit's match quality — title equals or starts with the query, then all terms in the title, then partial, then summary only. Ties follow PDF order (`index.groups`).
  - *Changed from Prompt 1's fixed-only order,* which put weak matches first; for example, "AI tagging" now leads with AI → AI-Assisted Tagging.
- **Index delivery:** served as a static file at `/search-index.json` (≈ 145 KB, ≈ 26 KB gzipped), fetched on first open and cached for the page view. Documents carry `publishable` (summaries with unconfirmed claims are hidden) and `pillar`.
- **Accessibility:** native `<dialog>` (focus trap, Escape, inert background), combobox with `aria-activedescendant`, grouped listbox, live result count.
- `WebSite` JSON-LD declares `SearchAction` → `/site-search?q={search_term_string}`.
