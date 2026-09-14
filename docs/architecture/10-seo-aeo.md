# I. SEO / AEO Foundation

Every SEO field is generated into the inventory and validated before each build. Pages never define their own metadata.

## Per-page fields

| Field | Rule | Where |
|---|---|---|
| **Title** | PDF title + ` \| GetSibu`; brand not appended when the title already contains "GetSibu" ("GetSibu Security", "GetSibu for Video Teams"). Longest: 53 chars. | `seo.title` |
| **H1** | PDF title verbatim (terminology preserved). One per page. Recorded exceptions live in `content/architecture/identity.ts` — currently only the homepage, whose H1 is the official positioning "The operating system for your creative library" while its `<title>` stays the PDF title. | `seo.h1` |
| **Meta description** | Drafted from the page's first PDF sentence; a very short first sentence (< 40 chars, e.g. "Yes.") gains the next; ≤ 160 chars. Authored content may refine it via `PageContent.metaDescription`. | `seo.description` |
| **Canonical** | Absolute URL of the canonical path; merged duplicates point to their canonical. | `seo.canonicalPath` → `alternates.canonical` |
| **Breadcrumb** | Home › Section › (Category hub) › Page; rendered and emitted as BreadcrumbList. | `breadcrumb` |
| **Open Graph / Twitter** | `og:type website`, url, title, description, site name, `en_GB`; `summary_large_image`. Per-page OG images are generated in Prompt 3 from title + section (no stock photo). | `lib/seo/metadata.ts` |
| **Structured data** | By page type, see below. | `lib/seo/structured-data.ts` |
| **Robots** | `index,follow` for canonical pages in production; `noindex,follow` everywhere when `SITE_ENV ≠ production`; merged duplicates never indexed. | `seo.robots` + env |
| **Sitemap** | All 408 canonical pages and hubs; merged pages and redirects excluded; `lastModified` = inventory build time (Prompt 5: per-page `lastReviewed`). | `app/sitemap.ts` |

### Uniqueness (validator errors, not warnings)

- No two indexable pages share a title, H1 or meta description (case-insensitive).
- Hub descriptions are written from PDF terminology rather than copied from a page, so they cannot collide.
- No duplicate URLs; no redirect whose source is a live page.

### Current warnings (content-phase work, tracked on every run)

- **10 truncated descriptions** (first PDF sentence > 160 chars): pages 1, 2, 28, 40, 48, 60, 211, 360, 390, 392 → write `metaDescription` in the content phase.
- **59 pages with unpublishable claims** → copy must avoid the claim until confirmed.
- **`/analytics` app-route collision** → topology decision.

## robots.txt

```
# production
User-agent: *
Allow: /
Disallow: /site-search
Sitemap: https://getsibu.com/sitemap.xml

# any other environment
User-agent: *
Disallow: /
```

## Structured data by page type

| Type | JSON-LD |
|---|---|
| home | `Organization` (name, url — logo added when the brand file is in `/public`), `WebSite` + `SearchAction` → `/site-search`, `WebPage` |
| all non-home pages | `WebPage` with `BreadcrumbList` |
| faq | `FAQPage` with `Question`/`acceptedAnswer` — **only if the answer's claims are publishable**; otherwise plain `WebPage` |
| resource | `Article` + `about: DefinedTerm` — only if publishable |
| developer, architecture | `WebPage` (+ `TechArticle` once authored content exists) |
| hubs (generated + section roots) | `CollectionPage` + `ItemList` of every listed page |
| pricing | `WebPage`; `Offer` data **only** after the plan-list conflict is resolved and prices are client-confirmed |

Never emitted: `AggregateRating`, `Review`, `SoftwareApplication` ratings, `Organization` founding/employee data — no source exists.

**Rule:** structured data never asserts more than the visible page may publish. Answer engines get exactly what readers get.

## AEO (answer-engine optimisation)

The PDF already gives most pages a direct statement as their first sentence. The architecture preserves and structures it:

| Pattern | Applies to | Implementation |
|---|---|---|
| **Definition first** | 16 "What Is…?" resources, 10 FAQs | `definition` section is the first thing after the H1: one-sentence answer (from the PDF), then one supporting sentence |
| **Direct answer** | FAQs | First words answer the question ("Yes. GetSibu supports comments attached to specific points in a video timeline.") |
| **Semantic headings** | all | H2s phrased as the sub-question they answer ("How scene detection works", "What becomes searchable") |
| **Steps** | process, workflow, timeline, migration phases | Ordered lists (`<ol>`) with one idea per step |
| **Entity consistency** | all | PDF terms used identically everywhere (never "smart tagging" for AI-Assisted Tagging) |
| **Cross-referenced answers** | FAQ ↔ feature ↔ resource | `relatedFaqs` / `relatedResources` / cluster primaries (see [11](11-internal-linking.md)) |
| **FAQ sections only where genuine** | any type | Appended only when authored Q&A exists — never generated per template |

## Duplicate-content defence

1. Exact PDF duplicates → merged with redirects (4).
2. Near-duplicates → 37 high-overlap clusters with per-page angles; authors write to the angle; the pillar (`primary`) takes the general query and others link to it.
3. Section roots are the PDF overview page where one exists, so no generated hub competes with it.
4. Hubs describe groups with a distinct meta description and list pages with their key statements, not their full paragraphs.

## Internationalisation

Single locale `en-GB` (British spelling, consistent with both sources). `hreflang` is unnecessary until a second locale exists; the data model has no locale assumptions in paths, so `/en-us/...` could be added later.
