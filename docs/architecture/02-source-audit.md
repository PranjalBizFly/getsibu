# B. Source Audit

## Source hierarchy

| Priority | Source | Role | Location in repo |
|---|---|---|---|
| 1 | `Getsibu.pdf` | **Master blueprint**: page inventory, topics, terminology, content direction | `docs/source/Getsibu.pdf` → `content/source/pdf-pages.json` |
| 2 | https://getsibu.com | Verify positioning, terminology, CTAs, claims | `docs/source/official-site-2026-09-14/` |
| 3 | Neutral UX/content-structure knowledge | Structure only (section order, AEO form, accessibility) — never facts | — |
| Reference only | https://sky9india1.netlify.app | Presentation patterns, never content or branding | [08-visual-and-image-strategy.md](08-visual-and-image-strategy.md#sky9) |

Competitor sites are not used as sources.

---

## 1. What comes from `Getsibu.pdf`

**Structure.** 400 numbered topics, each a title plus one paragraph (1–3 sentences), in 18 groups. The PDF ends with a note ("This gives you the 400-page foundation in paragraph format…"), which is excluded from the inventory.

| Range | PDF heading | Pages |
|---|---|---|
| 1–10 | *(no heading — platform positioning)* | 10 |
| 11–30 | Core Product Pages *(all search & discovery)* | 20 |
| 31–60 | AI Features | 30 |
| 61–90 | Collaboration | 30 |
| 91–120 | Versioning and Asset Management | 30 |
| 121–150 | Storage and Ingestion | 30 |
| 151–180 | Permissions and Multi-Tenancy | 30 |
| 181–210 | Analytics | 30 |
| 211–240 | Use Cases | 30 |
| 241–260 | Integrations | 20 |
| 261–280 | API and Developer Pages | 20 |
| 281–300 | Migration | 20 |
| 301–320 | Architecture and Performance | 20 |
| 321–340 | Security and Compliance | 20 |
| 341–360 | Pricing, Plans and Business Value | 20 |
| 361–380 | Resources and Education | 20 |
| 381–390 | FAQ Pages | 10 |
| 391–400 | Final Conversion Pages | 10 |

**Authoritative from the PDF:** every page title (used verbatim as H1), the page's core statement, the terminology (AI-Assisted Tagging, Asset Lifecycle, Approved Asset Library, Brand Guardrail Tags, Client Tenant Isolation, API Tenant Isolation, Creative Library Migration…), the grouping, and British English spelling.

**What the PDF is not.** It was produced from "supplied website content" (its own words on p.389–390), and it hedges several claims ("GetSibu's stated performance positioning…", "stated developer direction…"). It is authoritative for *architecture and terminology*, not proof of product facts.

### PDF quirks the architecture handles

| Quirk | Handling |
|---|---|
| **Exact duplicate titles**: Google Drive / Dropbox / OneDrive / AWS S3 Integration appear at 122–125 *and* 242–245. | One canonical page each at `/storage/*`; 242–245 stay in the inventory as `merged`, their paragraphs become extra source material, and `/integrations/<name>` 308-redirects. Nothing is omitted. |
| **Near-duplicates** (different titles, near-identical paragraphs), e.g. Metadata Preservation (132) / Metadata Migration (286) / Migration Metadata Preservation (293); Streaming Media Preview (147) / Streaming Previews (306); Default-Deny Access (154) / Default-Deny Security (337); RBAC (153) / RBAC Security (325). | Kept as separate pages (distinct search intents), grouped into **37 high-overlap clusters**, each page assigned an *angle* from where the PDF places it. Content must be written to the angle. See [11-internal-linking.md](11-internal-linking.md#overlap). |
| Pages 1–10 have no group heading. | Labelled "Platform". |
| "Core Product Pages" is a document heading, not a reader label. | Category labelled "Search & Discovery" (every page in it is about search/discovery). |
| Page 1 title uses `--`. | `sourceTitle` keeps it; `title` normalises to "—". |
| p.389 and p.390 contain meta-language ("according to the supplied website content", "The supplied platform content lists…"). | Must be rewritten in the content phase; these pages are also claim-blocked. |
| p.390's first sentence is "Yes." | Meta description drafting adds the next sentence. |

---

## 2. What comes from the official website

Audited 2026-09-14 by rendering every public route in headless Chrome (the site is a Vite/React SPA whose HTML is empty), stepping through the demo modal and FAQs, and reading the JS bundles. Evidence snapshot: `docs/source/official-site-2026-09-14/`.

### Confirmed and reusable

| Area | Official wording / value |
|---|---|
| **Brand name** | GetSibu (also "GetSibu DAM" in title/footer) |
| **Positioning** | H1: "The operating system for your creative library" — matches PDF p.2 |
| **Sub-headline** | "GetSibu scans, indexes and organises every video, image and document — across Drive, local servers and uploads. Search by anything, comment anywhere, collaborate in real time." |
| **Primary CTA** | "Start free" → `/signup` (header, hero, pricing, footer) |
| **Secondary CTAs** | "Book a demo" / "Talk to sales" → `/contact`; "Sign In" → `/login` |
| **Spelling** | British ("organises", "colour", "Organisation") — same as PDF |
| **Logo** | Olive-green "g" symbol (concentric circle over an open bowl) + dark-indigo lowercase geometric "etsibu" wordmark. Files: `brand/GET_SIBU_LOGO.png`, `White_Logo.png`, `FAVICON_01.png` |
| **Colours** | Primary indigo `#2B296E` (hsl 242 46% 30%); secondary olive `#97AC3B` (hsl 71 49% 45%); dark mode uses olive `hsl 71 45% 56%` on navy `#0F1729`; light background `#F3F4F7` |
| **Typeface** | Inter (declared; not actually loaded as a webfont) |
| **Feature language** | "Auto-ingest from anywhere", "AI-assisted tagging", "Search by anything", "Comments in context", "Taxonomies that scale", "Multi-tenant by design", "Granular permissions", "Built for speed"; walkthrough "Folder permissions you can actually trust" |
| **How it works** | Connect → Ingest → Organise → Collaborate |
| **Migration steps** | Bulk import · Metadata preserved · Folder mapping · Onboarding included |
| **Pricing (public page)** | Free $0 forever · Pro $99/month · Business $299/month — full feature lists in `claims.ts` |

### Placeholders and template leftovers — never reuse

The official site contains content that is demonstrably not real. The validator (`DO_NOT_USE` in `content/architecture/claims.ts`) fails any authored content that contains these.

| What | Evidence |
|---|---|
| Template brand **"Lumen"** | `lumen.app/library` in the hero mock-up; `api.lumendam.io` in the code sample; `hello@lumendam.io` (FAQ) and `hello@lumen.app` (Contact) |
| **Testimonials** | Maya Park, Jordan Reyes, Priya Shah — the same names are the About-page CEO, CTO and Head of Product, with Unsplash photos, attributed to different companies |
| **Team** | Four names with stock photos |
| **"Trusted by" strip** | PixelForge, Studio Nova, MotionLab, North Pier, GetSibu Labs, Atlas Films — plain text, includes GetSibu itself |
| **ROI figures** | "78% faster discovery", "12 hrs/wk saved", "4× fewer duplicates", "1.8 TB indexed in beta across 12 studios" — hard-coded |
| **Social proof** | "Trusted by 1,200+ creative teams" (contradicts "12 studios") |
| **Counters / mock-up data** | "14,250 video frames analysed in the last hour", "142 results · 38ms", "+47% MoM" |
| **Contact details** | Phone +1 (628) 555-0144 (fictional range); San Francisco HQ unverified |
| **Origin story** | "started inside a media studio drowning in 50 TB of unsorted footage" |

Also missing: Privacy, Terms, Security, DPA, Documentation, API reference, Status and Changelog all link to `#`. `docs.`, `status.`, `app.` and `www.getsibu.com` do not resolve. `blog.getsibu.com` is an empty WordPress install.

### Claims: stated, but not proven

Almost every checklist claim in the PDF *does* appear on the website — but several are contradicted by the site itself or by the product's own code (publicly downloadable app bundles). The full register with wording, conflicts and evidence is `content/architecture/claims.ts`. Summary:

| Status | Meaning | Claims |
|---|---|---|
| **conflicting** | Site states it; site or product contradicts | Scene detection (app: "coming soon") · Figma, Premiere Pro, After Effects (app: "Not supported") · SSO/SCIM plan tier · DPA plan tier · cross-region replication tier · role set (3 different descriptions) · webhook event names · OpenAPI 3.1 (no public spec) · SDKs · developer playground · plan list (API also returns Starter, Enterprise, Lifetime, "TestJM") · Business plan contents |
| **site-stated, high risk** | Stated consistently, but a number/certification/third party that needs GetSibu's written confirmation | Sub-second search (<200 ms p95) · 10 GB uploads · CDN latency · 99.99% uptime · AES-256 at rest · SOC 2 Type II *ready* · GDPR/EU region · data regions · immutable audit log · point-in-time restore (7 days) · face grouping · auto collections · transcription · storage sources · Slack · Zapier · Frame.io · self-hosting · onboarding · G Suite permission translation · plan prices and limits |
| **site-stated, standard** | Descriptive capability, consistent — publishable in PDF/site wording | Encrypted secrets · MFA · default-deny folders · multi-tenancy · per-client SSO/storage/AI keys · white-label · AI-assisted tagging with confidence/bulk approve/override · vision attributes · OCR · semantic search · duplicate detection (perceptual + exact hash) · timeline comments · saved searches by URL · hierarchical taxonomy · watch folders · metadata preserved · API-first REST · CDN/edge |
| **pdf-stated, standard** | PDF only, descriptive | Frame-accurate review · folder-aware mentions · migration without downtime |

**Publishing rule** (`isPublishable` in `claims.ts`): `client-confirmed` → publish; standard-risk and PDF- or site-stated → publish in source wording; everything else → blocked.

**59 of 396 canonical pages** currently have a blocked claim in their source paragraph (marked `needsVerification` / "✓?" in the inventory). They still exist and are routed; copy must not assert the blocked claim until GetSibu confirms it.

Pages affected: 3, 5, 20, 32, 33, 37, 41, 51, 56, 122–126, 140, 153, 212, 216, 217, 246–252, 258, 259, 268–272, 274, 283–285, 295, 297, 310, 322, 327–335, 341–344, 365, 367, 389, 390, 398.

---

## 3. What must not be invented

Never write, unless GetSibu confirms it in writing (then set the claim to `client-confirmed`):

- Customer names, logos, testimonials, reviews, case studies, "trusted by" counts
- Awards, certifications, compliance *status* (SOC 2 "ready" ≠ certified), audit reports, badges
- Performance numbers, latency, uptime, benchmark charts, user/asset/storage counts
- ROI or productivity percentages, time-saved figures, calculators with default values
- Prices, plan limits, trials, discounts beyond the published pricing page — and those only after the plan-list conflict is resolved
- Integration availability beyond what is confirmed per integration; no partnership language
- API endpoint paths, payloads, event names or SDK code that is not in published documentation
- Company facts: founding date, team, headcount, location, funding, origin story
- Any capability not in the PDF or on the official site (e.g. do not add pages for the site-only "subtitle generation" or "self-hosting")

When information is missing, the component renders without it — no placeholder copy, no lorem ipsum, no "coming soon" filler.

## 4. Questions for GetSibu

These unblock the 59 flagged pages and several global elements. Ordered by impact.

1. **Which capabilities are generally available today?** Especially scene detection, face grouping, auto collections, OCR, semantic search.
2. **Which integrations exist?** Slack, Zapier, Frame.io, Figma, Premiere Pro, After Effects, OneDrive, local NAS, and how each works (native, extension, via Zapier).
3. **Plans:** the current list (Free/Pro/Business only, or also Starter/Enterprise/Lifetime), prices, limits, trial, and which plan includes SSO, SCIM, DPA, cross-region replication and onboarding.
4. **Security & compliance:** encryption scope, SOC 2 status and wording, GDPR/EU region, data regions, backup/restore windows, audit-log immutability.
5. **Performance figures** they are willing to stand behind, and how measured.
6. **Developer surface:** public API docs URL, OpenAPI availability, SDKs, webhook event catalogue, playground.
7. **Role model:** the definitive list of built-in roles.
8. **Company page and contact details**, legal pages (privacy, terms, DPA).
9. **Product screenshots** for use on feature pages (current product, no Lumen branding).
10. **Hosting topology:** will the app move to its own origin (e.g. `app.getsibu.com`)?
