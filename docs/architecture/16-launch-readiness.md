# Launch Readiness (Prompt 5)

The final production-readiness pass: claim safety across every output, repetition, navigation, FAQ linking, accessibility in both motion modes, keyboard use, SEO and AEO, URLs, the sitemap, robots, search, the 404 page, performance, images, responsiveness, content leftovers and company pages. Nothing was restarted or redesigned; the Prompt 1–4 architecture, design system and composition engine are the base.

> **Continued in [17-production-configuration.md](17-production-configuration.md)** (§23–§29: forms, security, environment, route matrix, republish workflow, `/analytics`, content quality).
>
> The Prompt 5 brief arrived truncated inside §22 ("… an appropriate CTA/state. Never"). §1–§21 are complete; §22 is handled conservatively (§11 below) and may need the missing rules.

## 1. Result at a glance

| Check | Result |
|---|---|
| Unconfirmed claims in built output (HTML, RSC payloads, metadata, JSON-LD, search index, sitemap, robots) | **0**, over 743 files; enforced after every build by `npm run verify:build` |
| Statements shown twice on a page | 309 (Prompt 4 start) → 57 (Prompt 4 end) → **0** |
| Repeated headings, figures or H1s; byte-identical pages | **0** |
| Navigation links to unverified pages | 6 → **0 unjustified**: 3 replaced, 1 retargeted, 2 kept with a recorded reason |
| axe (WCAG 2.2 AA + best practice), 64 pages × 1280/390px | **0 violations** with reduced motion and with normal motion |
| Keyboard walkthrough | **27 / 27** checks pass |
| Lighthouse, production-like build, 7 pages | mobile Performance 96–97, desktop 100; Accessibility, Best Practices and SEO **100** |
| Responsive sweep, 18 pages × 9 widths (320–1920px) | **No** overflow, clipped text, collisions or layout shift |
| Inventory ↔ routes ↔ sitemap ↔ redirects | **Match**: 370 routes, 368 sitemap URLs, 47 redirects, 367 pages' metadata |
| Internal links | 0 orphans, 0 broken or redirecting links, no generic anchors; every live page has at least one contextual inbound link (median 16) |
| Search | 367 documents = every live page and hub; held topics return the empty state |

## 2. Claim safety: publication states

A title can itself be a claim: "Figma Integration" (the app lists Figma as not supported), "SSO", "SOC 2 Readiness", "Free Plan". Prompt 4 hid unconfirmed statements in the body. Prompt 5 extends safety to every channel, including H1s, navigation, breadcrumbs, the sitemap and link labels.

Every canonical page now has a `publication` state (`scripts/build-inventory.ts`, decisions in `content/architecture/verified-context.ts`):

| State | Rule | Pages | Behaviour |
|---|---|---|---|
| **published** | No unconfirmed claim | 337 | Normal |
| **framed** | Needs verification, but the title is safe | 18 | Published with verified context (hero lede and meta description from a verified page, verified topics, topic list, next step) |
| **held** | The title states an unconfirmed claim | 41 | Not published anywhere: no page, navigation, hub, sitemap, search, related, previous/next or link entry. The URL returns a **307** to the page's verified context. |

- **Automatic hold:** a title containing a blocked claim term.
- **Held by decision** (`HELD_BY_DECISION`): the four webhook event pages (269–272) and S3 Migration (285), whose titles name claims in words the detect terms miss.
- **Republishing:** confirming a claim in `claims.ts` republishes its pages, links, sitemap entries and canonical URLs automatically. The storage connectors return to `/storage/google-drive` and the others, with `/integrations/*` aliases back to 308. The canonical URL decision is unchanged; it is only held.

**Held pages and where their URL redirects:**

| Group | Pages | Redirect destination |
|---|---|---|
| Storage sources | Google Drive, Dropbox, OneDrive, AWS S3, Local NAS integrations; Google Drive, Dropbox and S3 migrations | Centralised Media Storage; Migrate to GetSibu |
| Tool integrations | Slack, Zapier | Webhook Automation |
| Tool integrations | Figma, Premiere Pro, After Effects, Frame.io | Custom Integrations |
| Developer surface | Developer Playground, SDK Support, OpenAPI Specification | GetSibu API |
| Developer surface | Asset Created, Comment Added, Approval Requested webhooks; Billing Events | Webhook Automation |
| Security and compliance | AES-256, GDPR, DPA, SOC 2, backup, point-in-time restore, cross-region replication, SSO, SCIM; FAQ "Does GetSibu Support SSO?" | GetSibu Security |
| Security and compliance | Immutable Audit History | Asset Audit Trail |
| Plans | Free, Pro, Business | Creative Team Pricing |
| AI | Scene detection, face grouping (feature and explainer pages), auto collections | Practical AI for Creative Teams; What Is AI Asset Management?; AI Library Organisation |
| Uploads | 10 GB File Uploads | Media Upload Management |

**Other leaks closed:**
- Hub meta descriptions for `/features/ai` and `/faq` named scene detection, face grouping and SSO.
- Search keywords taken from cluster labels ("Scene detection and video") now pass the claim check.
- The pricing page no longer lists plan names.
- The mega menu no longer links named storage sources.

**Verified** by `scripts/verify-build.ts` (claim and placeholder scan of all built output) and by `scripts/validate-inventory.ts`. The validator now errors on:
- a live title, H1, breadcrumb or meta description stating a claim;
- a navigation link to a held page, or to a framed page without a reason;
- a hub, search document, composed section or authored link that lists or links a held page.

## 3. Repetition (§4)

- **Classification** (`.tmp/repetition-report.mjs`):
  - **A — shared terminology:** structural labels ("Related", "How it works", "At a glance"). Kept.
  - **B — essential shared copy:** the 10 conversion CTAs, 8 FAQ entries reused in FAQ sections, and sequences shared by pages of one topic, each marking its own step as "This page". Kept.
  - **C — genuinely duplicated page content:** **0**. No statement, heading or figure repeats on a page, no two pages have identical story sections, and no H1 repeats.
- **Content angle, not rewording.** When two sequences on a page share steps, the composer keeps the one most relevant to the page's own topic and excludes the other for that page.
  - Relevance order: a set naming the page, then its primary cluster, another of its clusters, its category.
  - The page is then recomposed with the kept sequence's pages reserved, so split, editorial and capability sections choose other pages. The best attempt wins: full depth first, then fewest repeats.
  - Example: API-First DAM now tells the architecture story ("How the platform is layered"), while the developer hub keeps "The developer surface".
- **Section roots** list every page in their section, so they no longer add a topic list, and their related rail points outside the section.
- **Validator warnings** fire on any statement shown twice on a page and on identical story sections across pages.

## 4. Navigation (§5)

| Link | Before | Decision |
|---|---|---|
| Integrations → Google Drive / Dropbox / AWS S3 | Held pages | Replaced by **Automated Asset Ingestion** and **Watch Folder Ingestion** (verified) |
| Integrations → Webhooks | Framed page | Retargeted to **Webhook Automation** (verified) |
| Header and footer → Pricing | Framed page | Kept, with a recorded `framedReason`: the pricing page exists on the official site; plan names and prices stay unpublished |
| Footer | — | New **Company** column: About GetSibu, Contact |

## 5. FAQ 390 and in-text links (§6, §15)

- **FAQ 390, "Can GetSibu Integrate With Existing Tools?"**
  - Its PDF answer lists unconfirmed integrations, so its answer is built from five verified statements (241, 121, 255, 260, 281).
  - Each sentence is quoted verbatim and links a phrase within it to its source page: "connects with the tools teams already use", "asset ingestion from connected storage sources", "use the API", "request integrations", "migration capabilities".
  - Its FAQPage JSON-LD carries exactly that visible answer.
- **Verified answers and definitions** (FAQ pages, resource definitions, FAQ sections) link up to three concepts from the lexicon to live pages, never to the page itself. The lexicon gained "REST API".
- **Generic anchors removed:**
  - Editorial "Read more" is gone; the linked title names the destination.
  - FAQ items link by the question title.
  - The CTA "Learn more" button is gone; the CTA heading links to its conversion page.
  - Plan cards name the plan.
  - The built HTML has no generic anchor text.
- **Linking:**
  - Related links backfill two hops away, then from the nearest live pages in the category, when neighbours are held.
  - A reciprocity pass adds any page with no contextual inbound link to its closest related page's list.
  - Result: 0 orphans.

## 6. Accessibility, motion and keyboard (§7–§9)

- **Motion without contrast loss.**
  - Scroll reveals and panel entrances animate position only (`gs-rise`, `gs-panel-in`); nothing containing text changes opacity, so contrast holds at every frame. Reduced motion still disables all animation.
  - Figure parts (inside `role="img"`) keep a soft fade that settles at each part's own opacity.
  - The 5 motion-mode violations are gone: **0 in both modes**.
- **Search dialog:**
  - Escape closes it in one press; a search input would otherwise spend the first Escape clearing its text.
  - The scrollable results region is keyboard-reachable.
- **Overlays under axe:** the open mega panel, the search dialog (with results and in the empty state) and the open mobile menu all pass with 0 violations.
- **Keyboard (27 checks, all pass):**
  - skip link to `<main>`, and header order;
  - mega menu: Enter opens, Tab enters the panel, arrows move, Escape closes and returns focus;
  - search: Ctrl+K opens, arrows move, Enter opens the result, Escape closes and returns focus, empty state;
  - mobile menu: focus trap, Escape, focus return;
  - explorer tabs: arrows, Home and End;
  - FAQ: Enter and Space toggle;
  - story: focus drives the figure;
  - a full Tab walk to the footer with no trap and a visible focus indicator on every stop.

## 7. SEO and AEO (§10–§14)

- **Per page (verified on every live page and hub after each build):**
  - one `<title>` and one meta description from the inventory, unique across indexable pages;
  - an absolute canonical URL, and `og:title`, `og:description` and `og:url` equal to them;
  - `og:image` and a complete Twitter card, using the new site-wide social image `public/og/getsibu.png` (official logo, positioning line and footer statement);
  - robots indexable only in production; exactly one H1 equal to the inventory H1;
  - breadcrumb JSON-LD equal to the visible breadcrumb.
- **Structured data:**
  - **Organization:** now with its logo.
  - **WebSite:** with SearchAction.
  - **BreadcrumbList.**
  - **FAQPage:** only on FAQ pages that show an answer, generated from the visible answer.
  - **Article:** on publishable resources.
  - **AboutPage:** on `/about`.
  - No reviews, ratings, authors or statistics.
- **URLs:**
  - 47 redirects: 2 permanent (`/about-us`, `/contact-us`) and 45 temporary (41 held pages, plus 4 merged aliases whose canonical is held). None chains or loops.
  - Unknown URLs return a real **404**; `/api/*` is not a marketing path; trailing slashes 308 to the slashless URL.
- **Sitemap:** the live indexable pages, hubs and `/about`; no redirects, held or noindex pages, or duplicates; absolute URLs on `NEXT_PUBLIC_SITE_URL`. The build fails on any mismatch with the inventory or generated routes.
- **robots.txt:** production allows `/`, disallows only `/site-search` and references the sitemap. Every other environment disallows `/`, verified per build. Local `noindex` is by design, so Lighthouse SEO was measured on a production-like build (100).
- **Meta descriptions** are cut at a clause boundary that keeps their meaning ("such as", "including", "so that", "rather than", "through"; never at a condition). Truncated descriptions fell from 22 to 10.

## 8. Search, 404, performance, images, responsiveness (§16–§20)

- **Search:**
  - The index covers all 355 live pages and 12 hubs, with no duplicates or stale entries; every result resolves to 200.
  - Summaries are claim-safe.
  - "Google Drive", "Figma", "SSO" and "scene detection" return the empty state.
- **404:** "Page not found | GetSibu", H1, explanation, GetSibu home and search buttons, section links, `noindex`, HTTP 404. Unknown URLs are never redirected home.
- **Lighthouse** (production-like, `SITE_ENV=production`):

| Page | Mobile | Desktop | LCP mobile / desktop |
|---|---|---|---|
| `/` | 97 / 100 / 100 / 100 | 100 / 100 / 100 / 100 | 2.7s / 0.6s |
| `/features/ocr-powered-asset-search` | 97 / 100 / 100 / 100 | 100 / 100 / 100 / 100 | 2.7s / 0.6s |
| `/features/ai-assisted-tagging` | 97 / 100 / 100 / 100 | 100 / 100 / 100 / 100 | 2.7s / 0.6s |
| `/storage/automated-asset-ingestion` | 97 / 100 / 100 / 100 | 100 / 100 / 100 / 100 | 2.7s / 0.6s |
| `/developers/asset-upload-api` | 97 / 100 / 100 / 100 | 100 / 100 / 100 / 100 | 2.7s / 0.6s |
| `/resources/what-is-digital-asset-management` | 97 / 100 / 100 / 100 | 100 / 100 / 100 / 100 | 2.7s / 0.6s |
| `/faq/does-getsibu-have-an-api` | 96 / 100 / 100 / 100 | 100 / 100 / 100 / 100 | 2.7s / 0.6s |

Scores read Performance / Accessibility / Best Practices / SEO. CLS is 0 on every page. Inline CSS stays off: Prompt 4 measured it as larger HTML and slower LCP.

- **Images:**
  - The only raster images are the two logos. The header logo loads eagerly with `fetchpriority="high"`, the footer logo lazily; both are sized and served as AVIF.
  - Every SVG figure has an accessible name, and decorative icons are `aria-hidden`.
  - The favicon is now square (512px, padded, not redrawn), with a 180px Apple touch icon; the original stays in `docs/source/official-site-2026-09-14/brand/FAVICON_01.png`.
- **Responsive:** 18 pages at 320, 360, 390, 430, 768, 1024, 1280, 1440 and 1920px. Checked: horizontal overflow, clipped text, header collisions, hero heading/figure overlap, figure width, the sticky story figure under the header, and layout shift while loading and scrolling. The one issue found was `/site-search` shifting (CLS ≈ 0.57, results load after the index); its section now reserves the viewport height.

## 9. Content leftovers (§21)

- **Built HTML** (372 pages): no Lorem ipsum, placeholders, "New York", 555 numbers, testimonials, ratings, "years of experience", "Lumen", "coming soon", certifications or template brands.
- **`DO_NOT_USE` strings** are scanned in all built output after every build.
- **Source-code hits** are guidance notes ("avoid lorem ipsum results") and the claims register's own list of placeholders, none rendered.

## 10. Build verification (§12)

`scripts/verify-build.ts` runs as `postbuild` (`npm run build` fails if it fails) and on demand (`npm run verify:build`). It checks:
- inventory ↔ prerendered routes;
- inventory ↔ `sitemap.xml`;
- inventory ↔ served redirects, with statuses, destinations and chains;
- every page's metadata, H1, robots, canonical, Open Graph, Twitter and JSON-LD (breadcrumb, FAQ answer);
- claims and placeholders in all built output;
- `robots.txt` for the environment.

## 11. Company pages (§22)

The official About and Contact pages are placeholders: stock-photo team, an unverified origin story, template emails, a 555 number, an unverified HQ. Nothing from them is reused (`content/architecture/company-pages.ts`).

- **`/about`** (indexable, AboutPage JSON-LD):
  - what GetSibu is (PDF 381), who it is for (382), what the platform brings together (the verified platform layers), and where to go deeper (AI approach, security, API-first, migration);
  - the "Bring Your Creative Assets Together" CTA.
  - No team, history, address, values, customers or certifications.
- **`/contact`** (`noindex`, not in the sitemap):
  - states plainly that direct contact details are not published yet;
  - routes to Custom Integrations, Migrate to GetSibu, API Documentation and GetSibu Security, plus the official Start free and Sign In.
  - **"Book a demo"** stays suppressed (`GLOBAL_CTAS.secondary.channelConfirmed: false`) until a real channel exists.
- **Redirects:** `/about-us` → `/about`, `/contact-us` → `/contact` (308).
- **Legal pages** (privacy, terms, DPA) are not built: they need GetSibu's legal content.

## 12. Decisions and actions for GetSibu before launch

| # | Needed | Effect when done |
|---|---|---|
| 1 | Confirm or reject the blocked claims in `claims.ts`: storage sources, tool integrations, webhook events, OpenAPI, SDKs, playground, SSO/SCIM, compliance, backups, plans, AI features | Each confirmed claim republishes its held pages (41) and restores framed pages' own statements (18) |
| 2 | Provide a contact channel (email, form endpoint or demo booking) | `/contact` becomes indexable; "Book a demo" returns |
| 3 | Provide company information (team, history) | `/about` can grow beyond product facts |
| 4 | Provide privacy policy, terms and DPA | Legal pages and footer links |
| 5 | Decide app topology (`/analytics` collides with 31 marketing paths if the app shares getsibu.com) | Validator warning resolved |
| 6 | Set `SITE_ENV=production` and `NEXT_PUBLIC_SITE_URL` on the production host | Indexing, canonicals and sitemap on the real origin (verified by the build) |

## Remaining limitations

- **Sequences shared across one topic:** pages in one cluster still share sequences and matrices (category B), each marking its own row or step; authored `PageContent` is the way to deepen them.
- **Truncated descriptions:** 10 meta descriptions still end in an ellipsis (content phase).
- **Mobile LCP:** 2.7s under simulated slow 4G, dominated by web-font timing; real-render LCP is the hero text at first paint.
- **Framework JavaScript:** 26 KB of unused and 13 KB of legacy JavaScript belong to Next's framework chunk.
- **QA tooling:** axe, Lighthouse and the browser suites live in the gitignored `.tmp/` (not project dependencies): `axe-run.mjs`, `keyboard.mjs`, `responsive.mjs`, `http-checks.mjs`, `search-audit.mjs`, `link-audit.mjs`, `claim-leak.mjs`, `repetition-report.mjs`. `verify-build.ts` is the committed guarantee.
