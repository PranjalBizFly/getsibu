# E. URL System

Source of truth: `content/architecture/url-rules.ts` + `sections.ts`. Every URL is generated; none is typed by hand in a page.

## Pattern

```
/                                   Home (PDF p.1)
/<section>                          Section root: a PDF overview page, or a generated hub
/<section>/<slug>                   Every other canonical PDF page
/features/<category>                Feature category hubs (generated)
```

## Sections

| Section | Root | Root is | Leaves | Example leaf |
|---|---|---|---|---|
| Home | `/` | PDF 1 | — | — |
| Platform | `/platform` | PDF 2 "The Operating System for Creative Libraries" | 8 | `/platform/centralised-creative-asset-library` |
| Features | `/features` | generated hub (+ 4 category hubs) | 110 | `/features/asset-metadata-search`, `/features/ai-scene-detection` |
| Storage & Ingestion | `/storage` | generated hub | 30 | `/storage/google-drive`, `/storage/resumable-uploads` |
| Permissions & Multi-Tenancy | `/permissions` | generated hub | 30 | `/permissions/role-based-access-control` |
| Analytics | `/analytics` | generated hub | 30 | `/analytics/creative-asset-analytics` |
| Use Cases | `/use-cases` | generated hub | 30 | `/use-cases/production-studios` |
| Integrations | `/integrations` | PDF 241 "GetSibu Integrations" | 7 | `/integrations/adobe-premiere-pro` |
| Developers | `/developers` | PDF 280 "GetSibu for Developers" | 27 | `/developers/asset-metadata-api`, `/developers/api` |
| Migration | `/migration` | PDF 281 "Migrate to GetSibu" | 19 | `/migration/dam-migration-strategy` |
| Architecture & Performance | `/architecture` | PDF 301 "GetSibu Architecture" | 19 | `/architecture/edge-caching` |
| Security & Compliance | `/security` | PDF 321 "GetSibu Security" | 19 | `/security/aes-256-encryption` |
| Pricing | `/pricing` | PDF 341 "GetSibu Pricing" | 6 | `/pricing/free-plan` |
| Business Value | `/business-value` | generated hub | 13 | `/business-value/dam-business-case` |
| Resources | `/resources` | generated hub | 20 | `/resources/what-is-digital-asset-management` |
| FAQs | `/faq` | generated hub | 10 | `/faq/what-is-getsibu` |
| Get Started | `/get-started` | PDF 391 "Start Your Creative Library" | 9 | `/get-started/stop-searching-through-folders` |

Feature category hubs: `/features/search-and-discovery`, `/features/ai`, `/features/collaboration`, `/features/asset-management`.

**Totals:** 396 canonical page URLs + 12 generated hubs = **408 indexable URLs**, plus 4 redirects.

### Why a section root is sometimes a PDF page

When the PDF contains the overview of a whole section ("GetSibu Security", "GetSibu Pricing", "Migrate to GetSibu"), that page *is* the section root. A separate generated `/security` hub next to `/security/getsibu-security` would compete for the same query. Where no such page exists, the root is a generated hub whose lede is a cited PDF sentence.

### Why features share one flat namespace

`/features/<slug>` (not `/features/ai/<slug>`) follows the brief's examples, keeps AI slugs self-describing (`ai-scene-detection`), and means a page can move between feature categories without a URL change. Breadcrumbs still show the category: Home › Features › AI › AI Scene Detection. Hub slugs (`search-and-discovery`, `ai`, `collaboration`, `asset-management`) are reserved; the build fails on a collision.

## Slug rules

1. `slugify(title)`: NFKD → ASCII, lowercase, `&` → `and`, apostrophes removed, non-alphanumerics → `-`, leading `the-` removed, trimmed.
2. Section strip patterns remove words the section path already says:
   - `use-cases`: `getsibu-for-` → `/use-cases/production-studios`
   - `integrations`, `storage`: `-integration` → `/storage/google-drive`, `/integrations/frame-io`
   - `developers`, `migration`: `getsibu-` → `/developers/api`, `/migration/migration-support`
3. `SLUG_OVERRIDES` for exceptions — currently **empty**; every PDF title derives a clean slug.
4. Spelling follows the PDF (British): `/platform/creative-asset-organisation`, `/features/ai-colour-detection`.
5. No IDs, no dates, no trailing slashes, no uppercase. Validated by regex `^[a-z0-9]+(-[a-z0-9]+)*$`.

## Section exceptions

Pages whose URL section differs from their PDF group — kept deliberately short:

| PDF | Title | PDF group | Lives in | Reason |
|---|---|---|---|---|
| 252 | Webhooks | Integrations | `/developers/webhooks` | Webhook events (268–272) are in API & Developers |
| 253 | REST API | Integrations | `/developers/rest-api` | Belongs with the API pages |
| 254 | API-First DAM | Integrations | `/developers/api-first-dam` | API architecture, not a third-party integration |
| 255 | Developer API | Integrations | `/developers/developer-api` | Belongs with the API pages |
| 256 | API Authentication | Integrations | `/developers/api-authentication` | Beside Developer Authentication (275), API Security (277) |
| 257 | Webhook Automation | Integrations | `/developers/webhook-automation` | Beside Webhook Events (268) |
| 258 | Developer Playground | Integrations | `/developers/developer-playground` | Developer tool |
| 259 | SDK Support | Integrations | `/developers/sdk-support` | Developer tool |

The Integrations root (241) cross-lists Webhooks and REST API, and all five storage sources.

Pages 131–134 (migration topics in Storage & Ingestion) and 148–149 (analytics in Storage) keep their PDF section; only their page *type* changes.

## Duplicates and redirects

| PDF | Canonical | Redirect |
|---|---|---|
| 242 Google Drive Integration | 122 → `/storage/google-drive` | `/integrations/google-drive` → 308 |
| 243 Dropbox Integration | 123 → `/storage/dropbox` | `/integrations/dropbox` → 308 |
| 244 OneDrive Integration | 124 → `/storage/onedrive` | `/integrations/onedrive` → 308 |
| 245 AWS S3 Integration | 125 → `/storage/aws-s3` | `/integrations/aws-s3` → 308 |

Canonical = first occurrence, grouped with Local NAS (126) as the complete set of storage sources. Redirects are emitted by `build-inventory` and read by `next.config.ts`, so they cannot drift from the data.

## URL stability

A published slug never changes silently. To rename: add the new slug in `SLUG_OVERRIDES` and add the old path as a redirect (extend `MERGES`-style aliases in the build). The validator fails if a redirect source is also a live page or a redirect points nowhere.

## App coexistence {#app-coexistence}

The GetSibu web app currently runs on `getsibu.com` and owns these top-level paths: `/login`, `/signup`, `/register`, `/forgot-password`, `/twofa`, `/reset-password`, `/accept-invite`, `/onboarding`, `/verify-email`, `/share`, `/shares`, `/dashboard`, `/library`, `/search`, `/analytics`, `/activity`, `/team`, `/upload`, `/support`, `/tickets`, `/comments`, `/tags`, `/ai-tools`, `/ai-usage`, `/announcements`, `/referral`, `/notifications`, `/asset`, `/settings`, `/admin`, `/maintenance` (`RESERVED_APP_ROUTES`).

**Recommendation:** serve this site on `getsibu.com` and the app on its own origin (e.g. `app.getsibu.com`), updating `APP_ORIGIN` in `navigation.ts`. That is the standard SaaS topology and needs no URL compromises.

**Decision now recorded in `content/architecture/route-decisions.ts`** (see [17 §7](17-production-configuration.md#7-analytics-collision-28)); the text below is the Prompt 1 analysis. **If they must share the domain behind a path proxy**, exactly one marketing section collides: `/analytics` (31 paths). The fallback is to move the Analytics section to `/features/analytics/...` — a one-line change to `SECTIONS`/`CATEGORIES`, with redirects. The validator reports this collision as a warning on every run until the topology is decided. Global search results deliberately use `/site-search`, not `/search`.

Legacy marketing routes on the current site — `/`, `/features`, `/pricing`, `/about`, `/contact` — all keep resolving (`/about` and `/contact` as supporting pages once GetSibu supplies content).

## Supporting pages (not in the PDF)

| Path | Status | Notes |
|---|---|---|
| `/contact` | needs client content | Target of "Book a demo" / "Talk to sales" |
| `/about` | needs client content | Official version is placeholder |
| `/legal/privacy`, `/legal/terms` | needs client content | Official links are dead |
| `/legal/dpa` | needs client content | Legal document; distinct from `/security/data-processing-agreement` |
| `/sitemap` | generated | Human-readable sitemap from the inventory |
| `/site-search` | generated, noindex | "Explore all results" for global search |
