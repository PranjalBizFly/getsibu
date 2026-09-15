# Complete 400-Topic Audit

Verification of the full GetSibu website against the PDF's 400 topics, run on 2026-09-15 against one production build (`npm run build`, which ran prebuild, `next build` and `verify:build`, finishing at 18:30). The figures come from the built HTML, a running `next start` server and headless Chrome, not from source files alone. Per-topic content detail: [21-topic-audit.md](21-topic-audit.md). Content rules: [19-topic-content.md](19-topic-content.md).

## Verdict

**Not ready to launch.** Every topic is accounted for. All 355 live pages pass on content, FAQ, SEO, links, routing, navigation, search and motion, and 60 pass every check. **3 pages overflow horizontally on small phones** (320 and 360px), caused by one component. **Images fail.** Every topic image is a crop of one of 29 source photos. Most of those photos show another organisation's name or logo, invented figures, unrelated work or screens that look like a GetSibu interface. 295 of 355 live pages render at least one such image, including 238 heroes. The 41 held topics also need GetSibu to confirm their claims before they can publish.

| Area | Result |
|---|---|
| Topics accounted for | **400 / 400**: 355 LIVE + 41 HELD + 4 DUPLICATE-COVERED |
| Content, FAQ, SEO, links, routing | **pass**: 0 of 355 live pages fail any of these |
| Live pages passing every check | **60 / 355**: 292 fail only on images; 3 fail on responsive layout (plus images) |
| Images | **fail**: 295 live pages render 582 of 995 topic images that need replacing |
| Responsive (14 widths) | **fail**: 5,194 checks, 5 with horizontal overflow |
| Build | **pass**: Build verified (non-production, https://getsibu.com): route matrix of 417 (349 LIVE, 21 SAFE-LIVE, 41 HELD, 6 REDIRECT), 370 routes, 368 sitemap URLs, 47 redirects, 367 pages' metadata, 743 files scanned for claims and placeholders |

## Required counts

| Measure | Count | How it was measured |
|---|---|---|
| Total PDF topics | 400 | `content/source/pdf-pages.json` → inventory |
| LIVE | 355 | canonical pages with publication `published` (337) or `framed` (18) |
| HELD | 41 | canonical pages whose title states an unconfirmed claim (307 to a context page) |
| DUPLICATE-COVERED | 4 | PDF pages 242–245 repeat 122–125 exactly; they redirect to the canonical page |
| Missing pages | **0** | every topic has an inventory row, and every live route has built HTML |
| Duplicate pages | **0** | no two routes for one topic; the 4 PDF duplicates are covered, not rebuilt |
| Broken URLs | **0** | All 417 route-matrix rows served as specified {"LIVE":349,"SAFE-LIVE":21,"REDIRECT":6,"HELD":41} |
| Duplicate metadata | **0** | titles, meta descriptions and H1s compared across all 370 built routes |
| Content overlap | **max 0.028** (#241 vs #390); 0 pages ≥ 0.05 | shingle Jaccard over authored prose (quality gate) |
| Missing sections | **0** | quality gate shape rules: hero, overview or definition, 3–5 body sections, FAQ, CTA; 0 errors |
| Missing images | **0** | 400 / 400 topics have a hero image file |
| Broken images | **0** | every `<img>` in built HTML resolves to a file |
| Broken links | **0** | internal links in built HTML: 0 to missing routes, 0 to held pages, 0 to redirects |
| Claim violations | **0** | quality gate plus `verify:build`, which scans 743 built files for unpublishable claims and placeholders |
| Build errors | **0** | `npm run build` exit 0; typecheck clean |
| Image content failures | **582** rendered on 295 live pages | viewed source review, `content/architecture/image-sources.ts` |

## Checks by area

### Content quality (live pages)
- Authored words per page: min 722, median 1,081, max 1,766. 0 pages are under 617 and 108 are under 1,000. Median rendered words in `<main>`: 1,220.
- FAQ: every live page has at least 3 authored questions; 0 pages have none.
- PDF reliance: median 0.1% of prose, max 8.2% (limit 35%).
- Quality gate: 0 errors. Warnings are advisory: 84 GetSibu statements with loose wording against their cited pages (each fact-checked during review), and 13 authored pages close to (but above) the minimum length.

### Images
The image validator (`npm run images:validate`) now checks what a reader actually sees. Every image records the source photo it was cropped from, and all 29 sources were viewed and reviewed in `content/architecture/image-sources.ts`.

| Measure | Result |
|---|---|
| Hero images | 400 / 400, WebP, 0 missing files, 0 identical files |
| Source photos behind 1,118 images | 29 (most images cropped from one photo: 227) |
| Live-page heroes by source verdict | usable 117 · product-ui 36 · third-party-brand 150 · off-topic 26 · invented-figures 26 |
| Rendered topic images on live pages | 995 checked, 582 need replacing |
| Validator result | FAILED: third-party 349, replacement 233, duplicate usages 1089 |
| Alt text | describes what the photo shows, with the live topic's title; held pages name no title |
| Files outside the inventory | 309 orphan WebP files (200 folders), plus 123 images for held or merged topics under claim-naming paths (for example `soc-2-readiness/`, `free-plan/`, `sso/`) that deploy as public static files |
| Reproducibility | `scripts/generate-human-images.ts` reads its source photos from absolute paths on one machine, outside the repository (`C:\Users\…\.gemini\antigravity-ide\brain\…`), so the images cannot be regenerated elsewhere. Several source files are named for other projects (`home_why_bizzfly`, `indian_web_dev_*`, `company_about_team`) |

[20-image-inventory.md](20-image-inventory.md) reports zero duplication and no fabricated logos or metrics. Those statements describe the generation prompts, not the files, and the files contradict them.

### SEO
- 370 built routes: unique `<title>`, meta description and single H1 on every route; canonical and Open Graph (title, description, url, image, type) and Twitter card on every route; canonical origin https://getsibu.com.
- JSON-LD on every route except `/contact` (company page, no schema).
- Sitemap: 368 URLs, live pages only. Held pages are excluded from sitemap, search and links.
- Robots: builds without `SITE_ENV=production` are `noindex` by design (`lib/seo/metadata.ts`). The production build is indexable.

### Navigation and search
- Desktop primary navigation reaches 88 links across 6 menus. The mobile drawer reaches all of them (0 desktop-only) and adds `/contact`, `https://getsibu.com/login`, `https://getsibu.com/signup`. No navigation link points to a held page.
- The `/features` overview hub is linked from breadcrumbs, but not from the header, drawer or footer (header mega items render as panel buttons).
- Search index: 367 documents (355 live pages + 12 hubs), 0 held or merged pages. Result groups follow the PDF hierarchy: 19 groups, one per category, in PDF order (Platform, Search & Discovery, AI, Collaboration, Versioning & Asset Management, Storage & Ingestion, Permissions & Multi-Tenancy, Analytics, Use Cases, Integrations, API & Developers, Migration, Architecture & Performance, Security & Compliance, Pricing & Plans, Business Value, Resources, FAQs, Get Started). `inventory:validate` fails if a page's search group differs from its category label.

### Responsive
5,194 checks: 371 routes (every live page, hub, company page, search and 404) × 14 widths (320, 360, 375, 390, 414, 480, 768, 820, 1024, 1280, 1440, 1600, 1920, 2560). Horizontal overflow was measured against `documentElement.clientWidth`, and the probe was confirmed to detect an injected 900px element at 320px.
- Horizontal overflow: **5** checks on 3 pages: `/features/creative-asset-versioning` at 320px; `/permissions/editor-permissions` at 320 and 360px; `/business-value/production-productivity` at 320 and 360px. It reproduces on the later build (18:43). **Cause:** the before-after section's card heading (`type-eyebrow inline-flex w-max`) keeps a long label on one line, for example "Editors given administrative privileges" at 301px. The single-column mobile grid (`grid … md:grid-cols-2`, with no explicit one-column track) grows to fit it, and the fixed header stretches to the document width. The fix is in `components/sections/BeforeAfterSection.tsx`: let the label wrap (`max-w-full` instead of `w-max`), or give the grid `grid-cols-1` below md. Content is not the cause.
- Header: menu button up to 1024px, full desktop navigation from 1280px; 0 views without either.

### Motion
- Reduced motion (10 sample routes): `html[data-motion="reduced"]` on every page, 0 running infinite animations, 0 elements left hidden.
- Motion on: 383 scroll-reveal elements, 0 still hidden after scrolling. 0 infinite loops running on these routes; any loop stops under reduced motion or with the footer "Pause animations" control.

### Build and QA commands
| Command | Result |
|---|---|
| `npm run build` | pass: Build verified (non-production, https://getsibu.com): route matrix of 417 (349 LIVE, 21 SAFE-LIVE, 41 HELD, 6 REDIRECT), 370 routes, 368 sitemap URLs, 47 redirects, 367 pages' metadata, 743 files scanned for claims and placeholders |
| `npm run typecheck` | pass |
| `npm run inventory:validate` | pass (warnings only) |
| `npm run test:publication` | pass: 187 checks, 8 scenarios |
| `npm run images:validate` | **fail**: source-photo content (see Images) |
| Lint | not configured: the project has no ESLint config or lint script |

## Needs GetSibu confirmation

41 held topics (and 4 duplicates of held topics) publish only once GetSibu confirms these claims in writing (`client-confirmed` in `content/architecture/claims.ts`). Their drafts are complete and pass the quality gate.

| Claim | Statement to confirm | Held PDF pages |
|---|---|---|
| `storage-sources` | Connectable storage sources: Google Drive, Dropbox, OneDrive, AWS S3 and local NAS. | 122, 123, 124, 125, 126, 283, 284, 285, 343 |
| `webhook-events` | Webhook events such as asset created, comment added, approval requested and billing events. | 269, 270, 271, 272 |
| `sso-scim` | SSO and SCIM, and which plan includes them. | 334, 335, 344, 389 |
| `pricing-tiers` | Free, Pro and Business plans. | 342, 343, 344, 389 |
| `scene-detection` | Automatic scene detection in video. | 33, 365 |
| `face-grouping` | Face grouping clusters people across the library. | 37, 367 |
| `adobe-premiere-after-effects` | Adobe Premiere Pro and After Effects integrations. | 248, 249 |
| `openapi` | OpenAPI 3.1 specification. | 259, 274 |
| `backups-pitr` | Backup redundancy and point-in-time restore. | 331, 332 |
| `auto-collections` | AI-proposed collections approved by users. | 41 |
| `upload-10gb` | Resumable, chunked uploads for files up to 10 GB. | 140 |
| `slack` | Slack integration. | 246 |
| `figma` | Figma integration. | 247 |
| `frame-io` | Frame.io integration. | 250 |
| `zapier` | Zapier integration. | 251 |
| `developer-playground` | Built-in API playground. | 258 |
| `sdks` | TypeScript, Python and Go SDKs. | 259 |
| `aes-256` | AES-256 encryption at rest. | 322 |
| `immutable-audit` | Immutable audit log of privileged actions. | 327 |
| `gdpr` | GDPR controls: EU-region storage and right-to-erasure. | 328 |
| `dpa` | Data Processing Agreement support. | 329 |
| `soc2` | Security architecture positioned as SOC 2 Type II ready. | 330 |
| `multi-tenant` | Multi-tenant design with each organisation isolated. | 330 |
| `cross-region-replication` | Cross-region replication on higher plans. | 333 |
| `free-plan-limits` | Free plan: 5 GB storage, 3 seats, 10k API calls per month, drag-and-drop upload, search and tags. | 342 |
| `pro-plan-contents` | Pro plan: 500 GB, 20 seats, 1M API calls/month, Google Drive sync, threaded comments and mentions, saved searches; 3-day trial. | 343 |
| `business-plan-contents` | Business plan: 2 TB, 100 seats, 5M API calls/month, SSO & SCIM, audit log export, priority support. | 344 |

## Every topic

| PDF # | Topic | URL | Status | Content | FAQ | Hero | SEO | Internal Links | Result |
|---|---|---|---|---|---|---|---|---|---|
| 1 | GetSibu — Creative Asset Management Platform | `/` | LIVE | 1,766 words · 8 body sections · pass | 5 Q | OK | OK | 368 inbound · 0 broken | PASS |
| 2 | The Operating System for Creative Libraries | `/platform` | LIVE | 1,491 words · 4 body sections · pass | 5 Q | OK | OK | 20 inbound · 0 broken | FAIL: images (1 of 3 need replacing) |
| 3 | AI-Powered Digital Asset Management | `/platform/ai-powered-digital-asset-management` | LIVE | framed · 1,206 words · 4 body sections · pass | 4 Q | replace: looks like a product screen | OK | 1 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 4 | Creative Library Management | `/platform/creative-library-management` | LIVE | 1,220 words · 4 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 18 inbound · 0 broken | FAIL: images (1 of 3 need replacing) |
| 5 | Intelligent Media Library | `/platform/intelligent-media-library` | LIVE | framed · 1,108 words · 4 body sections · pass | 3 Q | OK | OK | 1 inbound · 0 broken | PASS |
| 6 | Centralised Creative Asset Library | `/platform/centralised-creative-asset-library` | LIVE | 1,284 words · 4 body sections · pass | 4 Q | OK | OK | 23 inbound · 0 broken | PASS |
| 7 | Modern Digital Asset Management | `/platform/modern-digital-asset-management` | LIVE | 1,220 words · 4 body sections · pass | 4 Q | OK | OK | 8 inbound · 0 broken | FAIL: images (1 of 3 need replacing) |
| 8 | Creative Asset Organisation | `/platform/creative-asset-organisation` | LIVE | 1,346 words · 4 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 66 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 9 | AI-Aware Asset Management | `/platform/ai-aware-asset-management` | LIVE | 1,148 words · 4 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 15 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 10 | One Source of Truth for Creative Teams | `/platform/one-source-of-truth-for-creative-teams` | LIVE | 1,086 words · 4 body sections · pass | 4 Q | OK | OK | 15 inbound · 0 broken | FAIL: images (1 of 4 need replacing) |
| 11 | Creative Asset Search | `/features/creative-asset-search` | LIVE | 1,352 words · 4 body sections · pass | 4 Q | replace: looks like a product screen | OK | 46 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 12 | AI Asset Discovery | `/features/ai-asset-discovery` | LIVE | 1,175 words · 5 body sections · pass | 3 Q | replace: looks like a product screen | OK | 20 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 13 | Media Search Platform | `/features/media-search-platform` | LIVE | 820 words · 3 body sections · pass | 4 Q | replace: looks like a product screen | OK | 13 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 14 | Semantic Creative Search | `/features/semantic-creative-search` | LIVE | 942 words · 4 body sections · pass | 3 Q | replace: looks like a product screen | OK | 13 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 15 | OCR-Powered Asset Search | `/features/ocr-powered-asset-search` | LIVE | 1,061 words · 4 body sections · pass | 3 Q | replace: unrelated work | OK | 20 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 16 | Search Across Creative Libraries | `/features/search-across-creative-libraries` | LIVE | 1,029 words · 4 body sections · pass | 3 Q | replace: unrelated work | OK | 18 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 17 | Saved Asset Searches | `/features/saved-asset-searches` | LIVE | 1,018 words · 4 body sections · pass | 4 Q | replace: unrelated work | OK | 42 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 18 | Natural Language Asset Search | `/features/natural-language-asset-search` | LIVE | 1,047 words · 4 body sections · pass | 4 Q | replace: looks like a product screen | OK | 19 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 19 | Advanced Media Filters | `/features/advanced-media-filters` | LIVE | 1,036 words · 4 body sections · pass | 3 Q | replace: unrelated work | OK | 30 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 20 | Fast Asset Discovery | `/features/fast-asset-discovery` | LIVE | framed · 1,133 words · 4 body sections · pass | 4 Q | replace: unrelated work | OK | 4 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 21 | Creative Asset Indexing | `/features/creative-asset-indexing` | LIVE | 1,317 words · 4 body sections · pass | 4 Q | OK | OK | 22 inbound · 0 broken | PASS |
| 22 | Media Metadata Management | `/features/media-metadata-management` | LIVE | 1,335 words · 4 body sections · pass | 3 Q | replace: unrelated work | OK | 51 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 23 | Asset Metadata Search | `/features/asset-metadata-search` | LIVE | 1,163 words · 4 body sections · pass | 3 Q | replace: unrelated work | OK | 33 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 24 | Creative File Discovery | `/features/creative-file-discovery` | LIVE | 1,096 words · 4 body sections · pass | 3 Q | replace: looks like a product screen | OK | 23 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 25 | Searchable Video Library | `/features/searchable-video-library` | LIVE | 1,144 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 23 inbound · 0 broken | FAIL: images (1 of 3 need replacing) |
| 26 | Searchable Image Library | `/features/searchable-image-library` | LIVE | 1,262 words · 4 body sections · pass | 4 Q | replace: unrelated work | OK | 19 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 27 | Searchable Document Library | `/features/searchable-document-library` | LIVE | 1,151 words · 4 body sections · pass | 3 Q | replace: unrelated work | OK | 24 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 28 | Searchable Audio Library | `/features/searchable-audio-library` | LIVE | 1,364 words · 4 body sections · pass | 4 Q | replace: unrelated work | OK | 21 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 29 | Creative Library Navigation | `/features/creative-library-navigation` | LIVE | 1,072 words · 4 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 21 inbound · 0 broken | FAIL: images (1 of 3 need replacing) |
| 30 | Asset Discovery Workflow | `/features/asset-discovery-workflow` | LIVE | 1,165 words · 4 body sections · pass | 3 Q | replace: unrelated work | OK | 13 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 31 | AI-Assisted Tagging | `/features/ai-assisted-tagging` | LIVE | 1,221 words · 4 body sections · pass | 5 Q | replace: another organisation's name or logo | OK | 49 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 32 | AI Vision Analysis | `/features/ai-vision-analysis` | LIVE | framed · 1,023 words · 4 body sections · pass | 3 Q | replace: looks like a product screen | OK | 6 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 33 | AI Scene Detection | `/features/ai-scene-detection` → 307 to `/features/practical-ai-for-creative-teams` | HELD | draft · 1,393 words · pass | 4 Q (draft) | not rendered | not published (no route, sitemap or search) | none, by design | HELD: awaiting confirmation of `scene-detection` |
| 34 | AI Object Detection | `/features/ai-object-detection` | LIVE | 1,173 words · 4 body sections · pass | 4 Q | replace: looks like a product screen | OK | 16 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 35 | AI Mood Detection | `/features/ai-mood-detection` | LIVE | 993 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 15 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 36 | AI Colour Detection | `/features/ai-colour-detection` | LIVE | 1,104 words · 4 body sections · pass | 3 Q | replace: looks like a product screen | OK | 21 inbound · 0 broken | FAIL: images (4 of 4 need replacing) |
| 37 | AI Face Grouping | `/features/ai-face-grouping` → 307 to `/features/practical-ai-for-creative-teams` | HELD | draft · 1,421 words · pass | 4 Q (draft) | not rendered | not published (no route, sitemap or search) | none, by design | HELD: awaiting confirmation of `face-grouping` |
| 38 | AI OCR | `/features/ai-ocr` | LIVE | 1,129 words · 5 body sections · pass | 3 Q | replace: looks like a product screen | OK | 29 inbound · 0 broken | FAIL: images (4 of 4 need replacing) |
| 39 | AI Semantic Search | `/features/ai-semantic-search` | LIVE | 1,019 words · 4 body sections · pass | 3 Q | replace: looks like a product screen | OK | 19 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 40 | AI Duplicate Detection | `/features/ai-duplicate-detection` | LIVE | 1,055 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 51 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 41 | AI Auto Collections | `/features/ai-auto-collections` → 307 to `/features/ai-library-organisation` | HELD | draft · 960 words · pass | 3 Q (draft) | not rendered | not published (no route, sitemap or search) | none, by design | HELD: awaiting confirmation of `auto-collections` |
| 42 | AI Asset Classification | `/features/ai-asset-classification` | LIVE | 854 words · 4 body sections · pass | 3 Q | replace: looks like a product screen | OK | 20 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 43 | AI Media Understanding | `/features/ai-media-understanding` | LIVE | 823 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 15 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 44 | AI Creative Intelligence | `/features/ai-creative-intelligence` | LIVE | 969 words · 4 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 7 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 45 | AI-Powered Asset Management | `/features/ai-powered-asset-management` | LIVE | 974 words · 4 body sections · pass | 3 Q | replace: looks like a product screen | OK | 16 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 46 | AI Tag Confidence | `/features/ai-tag-confidence` | LIVE | 1,123 words · 4 body sections · pass | 3 Q | replace: looks like a product screen | OK | 15 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 47 | AI Tag Approval | `/features/ai-tag-approval` | LIVE | 1,072 words · 4 body sections · pass | 3 Q | replace: looks like a product screen | OK | 37 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 48 | AI Tag Override | `/features/ai-tag-override` | LIVE | 1,168 words · 4 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 30 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 49 | AI Creative Search | `/features/ai-creative-search` | LIVE | 1,104 words · 4 body sections · pass | 3 Q | replace: looks like a product screen | OK | 10 inbound · 0 broken | FAIL: images (4 of 4 need replacing) |
| 50 | AI Media Indexing | `/features/ai-media-indexing` | LIVE | 1,033 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 11 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 51 | AI-Powered Video Discovery | `/features/ai-powered-video-discovery` | LIVE | framed · 951 words · 4 body sections · pass | 3 Q | OK | OK | 1 inbound · 0 broken | FAIL: images (1 of 2 need replacing) |
| 52 | AI-Powered Image Discovery | `/features/ai-powered-image-discovery` | LIVE | 1,033 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 11 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 53 | AI Document Discovery | `/features/ai-document-discovery` | LIVE | 1,020 words · 4 body sections · pass | 4 Q | replace: looks like a product screen | OK | 16 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 54 | AI Creative Workflow | `/features/ai-creative-workflow` | LIVE | 892 words · 4 body sections · pass | 3 Q | replace: looks like a product screen | OK | 8 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 55 | AI Media Automation | `/features/ai-media-automation` | LIVE | 1,030 words · 4 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 5 inbound · 0 broken | FAIL: images (4 of 4 need replacing) |
| 56 | AI Asset Recommendations | `/features/ai-asset-recommendations` | LIVE | framed · 933 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 1 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 57 | AI Library Organisation | `/features/ai-library-organisation` | LIVE | 998 words · 4 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 13 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 58 | AI Asset Intelligence | `/features/ai-asset-intelligence` | LIVE | 923 words · 4 body sections · pass | 3 Q | replace: looks like a product screen | OK | 5 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 59 | AI Creative Operations | `/features/ai-creative-operations` | LIVE | 962 words · 4 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 5 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 60 | Practical AI for Creative Teams | `/features/practical-ai-for-creative-teams` | LIVE | 1,011 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 10 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 61 | Creative Team Collaboration | `/features/creative-team-collaboration` | LIVE | 941 words · 4 body sections · pass | 3 Q | OK | OK | 14 inbound · 0 broken | FAIL: images (2 of 3 need replacing) |
| 62 | Asset Comments | `/features/asset-comments` | LIVE | 1,017 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 48 inbound · 0 broken | FAIL: images (3 of 4 need replacing) |
| 63 | Threaded Comments | `/features/threaded-comments` | LIVE | 1,056 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 25 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 64 | Video Timeline Comments | `/features/video-timeline-comments` | LIVE | 976 words · 4 body sections · pass | 5 Q | replace: another organisation's name or logo | OK | 33 inbound · 0 broken | FAIL: images (2 of 3 need replacing) |
| 65 | Frame-Accurate Review | `/features/frame-accurate-review` | LIVE | 1,126 words · 4 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 14 inbound · 0 broken | FAIL: images (1 of 3 need replacing) |
| 66 | Team Mentions | `/features/team-mentions` | LIVE | 1,122 words · 4 body sections · pass | 3 Q | OK | OK | 29 inbound · 0 broken | FAIL: images (1 of 2 need replacing) |
| 67 | Creative Approval Workflow | `/features/creative-approval-workflow` | LIVE | 1,046 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 55 inbound · 0 broken | FAIL: images (2 of 4 need replacing) |
| 68 | Asset Approval | `/features/asset-approval` | LIVE | 944 words · 4 body sections · pass | 3 Q | OK | OK | 38 inbound · 0 broken | PASS |
| 69 | Creative Review | `/features/creative-review` | LIVE | 1,000 words · 4 body sections · pass | 4 Q | OK | OK | 13 inbound · 0 broken | PASS |
| 70 | Campaign Review | `/features/campaign-review` | LIVE | 928 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 14 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 71 | Brand Asset Approval | `/features/brand-asset-approval` | LIVE | 963 words · 4 body sections · pass | 3 Q | OK | OK | 19 inbound · 0 broken | FAIL: images (1 of 3 need replacing) |
| 72 | Client Review | `/features/client-review` | LIVE | 961 words · 4 body sections · pass | 3 Q | OK | OK | 18 inbound · 0 broken | FAIL: images (1 of 3 need replacing) |
| 73 | Team Feedback | `/features/team-feedback` | LIVE | 1,004 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 17 inbound · 0 broken | FAIL: images (1 of 2 need replacing) |
| 74 | Creative Feedback Management | `/features/creative-feedback-management` | LIVE | 944 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 8 inbound · 0 broken | FAIL: images (1 of 3 need replacing) |
| 75 | Asset Discussion History | `/features/asset-discussion-history` | LIVE | 895 words · 4 body sections · pass | 3 Q | OK | OK | 27 inbound · 0 broken | FAIL: images (1 of 2 need replacing) |
| 76 | Review Status | `/features/review-status` | LIVE | 1,273 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 51 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 77 | Approval History | `/features/approval-history` | LIVE | 1,084 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 40 inbound · 0 broken | FAIL: images (2 of 3 need replacing) |
| 78 | Team Asset Sharing | `/features/team-asset-sharing` | LIVE | 1,035 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 15 inbound · 0 broken | FAIL: images (1 of 2 need replacing) |
| 79 | Shared Creative Views | `/features/shared-creative-views` | LIVE | 1,135 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 19 inbound · 0 broken | FAIL: images (1 of 3 need replacing) |
| 80 | Creative Workflow Management | `/features/creative-workflow-management` | LIVE | 1,167 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 11 inbound · 0 broken | FAIL: images (1 of 4 need replacing) |
| 81 | Production Collaboration | `/features/production-collaboration` | LIVE | 1,286 words · 4 body sections · pass | 3 Q | OK | OK | 9 inbound · 0 broken | FAIL: images (1 of 3 need replacing) |
| 82 | Marketing Collaboration | `/features/marketing-collaboration` | LIVE | 943 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 6 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 83 | Brand Collaboration | `/features/brand-collaboration` | LIVE | 1,253 words · 4 body sections · pass | 3 Q | OK | OK | 9 inbound · 0 broken | FAIL: images (1 of 2 need replacing) |
| 84 | Agency Collaboration | `/features/agency-collaboration` | LIVE | 996 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 7 inbound · 0 broken | FAIL: images (1 of 2 need replacing) |
| 85 | Creative Team Communication | `/features/creative-team-communication` | LIVE | 1,053 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 8 inbound · 0 broken | FAIL: images (1 of 3 need replacing) |
| 86 | Asset Mentions | `/features/asset-mentions` | LIVE | 1,108 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 18 inbound · 0 broken | FAIL: images (1 of 3 need replacing) |
| 87 | Collaborative Asset Review | `/features/collaborative-asset-review` | LIVE | 1,134 words · 4 body sections · pass | 4 Q | OK | OK | 14 inbound · 0 broken | FAIL: images (1 of 2 need replacing) |
| 88 | Remote Creative Collaboration | `/features/remote-creative-collaboration` | LIVE | 983 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 15 inbound · 0 broken | FAIL: images (1 of 3 need replacing) |
| 89 | Creative Approval Management | `/features/creative-approval-management` | LIVE | 1,108 words · 4 body sections · pass | 4 Q | OK | OK | 17 inbound · 0 broken | PASS |
| 90 | Creative Team Workspace | `/features/creative-team-workspace` | LIVE | 978 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 13 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 91 | Creative Asset Versioning | `/features/creative-asset-versioning` | LIVE | 1,072 words · 4 body sections · pass | 3 Q | OK | OK | 38 inbound · 0 broken | FAIL: responsive (overflow at 320px); images (1 of 2 need replacing) |
| 92 | File Version History | `/features/file-version-history` | LIVE | 979 words · 4 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 25 inbound · 0 broken | FAIL: images (2 of 3 need replacing) |
| 93 | Asset Replacement | `/features/asset-replacement` | LIVE | 909 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 14 inbound · 0 broken | FAIL: images (2 of 3 need replacing) |
| 94 | Version Restore | `/features/version-restore` | LIVE | 958 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 17 inbound · 0 broken | FAIL: images (1 of 3 need replacing) |
| 95 | Creative File History | `/features/creative-file-history` | LIVE | 1,000 words · 4 body sections · pass | 3 Q | OK | OK | 9 inbound · 0 broken | FAIL: images (1 of 3 need replacing) |
| 96 | Campaign Asset Versioning | `/features/campaign-asset-versioning` | LIVE | 835 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 8 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 97 | Video Version Management | `/features/video-version-management` | LIVE | 978 words · 4 body sections · pass | 3 Q | OK | OK | 25 inbound · 0 broken | FAIL: images (1 of 4 need replacing) |
| 98 | Image Version Management | `/features/image-version-management` | LIVE | 998 words · 4 body sections · pass | 3 Q | OK | OK | 17 inbound · 0 broken | PASS |
| 99 | Document Version Management | `/features/document-version-management` | LIVE | 852 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 18 inbound · 0 broken | FAIL: images (1 of 3 need replacing) |
| 100 | Creative Revision Tracking | `/features/creative-revision-tracking` | LIVE | 978 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 17 inbound · 0 broken | FAIL: images (4 of 4 need replacing) |
| 101 | Asset Lifecycle Management | `/features/asset-lifecycle-management` | LIVE | 1,018 words · 4 body sections · pass | 3 Q | OK | OK | 13 inbound · 0 broken | FAIL: images (1 of 2 need replacing) |
| 102 | Asset Status Management | `/features/asset-status-management` | LIVE | 869 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 25 inbound · 0 broken | FAIL: images (1 of 3 need replacing) |
| 103 | Approved Asset Library | `/features/approved-asset-library` | LIVE | 811 words · 4 body sections · pass | 3 Q | OK | OK | 61 inbound · 0 broken | PASS |
| 104 | Expiring Creative Assets | `/features/expiring-creative-assets` | LIVE | 922 words · 4 body sections · pass | 3 Q | OK | OK | 48 inbound · 0 broken | PASS |
| 105 | Brand Guardrail Tags | `/features/brand-guardrail-tags` | LIVE | 1,008 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 22 inbound · 0 broken | FAIL: images (4 of 4 need replacing) |
| 106 | Asset Usage Tracking | `/features/asset-usage-tracking` | LIVE | 1,190 words · 4 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 13 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 107 | Creative Asset Lifecycle | `/features/creative-asset-lifecycle` | LIVE | 1,427 words · 4 body sections · pass | 4 Q | OK | OK | 8 inbound · 0 broken | FAIL: images (1 of 2 need replacing) |
| 108 | Asset Archiving | `/features/asset-archiving` | LIVE | 1,206 words · 4 body sections · pass | 3 Q | OK | OK | 57 inbound · 0 broken | PASS |
| 109 | Asset Deletion | `/features/asset-deletion` | LIVE | 1,106 words · 4 body sections · pass | 4 Q | OK | OK | 24 inbound · 0 broken | FAIL: images (1 of 2 need replacing) |
| 110 | Asset Recovery | `/features/asset-recovery` | LIVE | 1,099 words · 4 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 6 inbound · 0 broken | FAIL: images (1 of 3 need replacing) |
| 111 | Creative Library Maintenance | `/features/creative-library-maintenance` | LIVE | 1,196 words · 4 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 18 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 112 | Duplicate Asset Management | `/features/duplicate-asset-management` | LIVE | 1,020 words · 4 body sections · pass | 4 Q | OK | OK | 27 inbound · 0 broken | PASS |
| 113 | Asset Quality Management | `/features/asset-quality-management` | LIVE | 1,117 words · 4 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 5 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 114 | Creative Asset Governance | `/features/creative-asset-governance` | LIVE | 1,384 words · 4 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 45 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 115 | Asset Ownership | `/features/asset-ownership` | LIVE | 919 words · 4 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 25 inbound · 0 broken | FAIL: images (1 of 4 need replacing) |
| 116 | Asset Attribution | `/features/asset-attribution` | LIVE | 1,023 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 29 inbound · 0 broken | FAIL: images (1 of 3 need replacing) |
| 117 | Asset History | `/features/asset-history` | LIVE | 988 words · 4 body sections · pass | 3 Q | OK | OK | 13 inbound · 0 broken | FAIL: images (1 of 3 need replacing) |
| 118 | Asset Activity | `/features/asset-activity` | LIVE | 980 words · 4 body sections · pass | 4 Q | OK | OK | 12 inbound · 0 broken | PASS |
| 119 | Asset Audit Trail | `/features/asset-audit-trail` | LIVE | 929 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 19 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 120 | Complete Asset Management | `/features/complete-asset-management` | LIVE | 1,188 words · 4 body sections · pass | 3 Q | OK | OK | 4 inbound · 0 broken | PASS |
| 121 | Automated Asset Ingestion | `/storage/automated-asset-ingestion` | LIVE | 1,302 words · 4 body sections · pass | 4 Q | OK | OK | 21 inbound · 0 broken | PASS |
| 122 | Google Drive Integration | `/storage/google-drive` → 307 to `/storage/centralised-media-storage` | HELD | draft · 1,194 words · pass | 3 Q (draft) | not rendered | not published (no route, sitemap or search) | none, by design | HELD: awaiting confirmation of `storage-sources` |
| 123 | Dropbox Integration | `/storage/dropbox` → 307 to `/storage/centralised-media-storage` | HELD | draft · 1,051 words · pass | 4 Q (draft) | not rendered | not published (no route, sitemap or search) | none, by design | HELD: awaiting confirmation of `storage-sources` |
| 124 | OneDrive Integration | `/storage/onedrive` → 307 to `/storage/centralised-media-storage` | HELD | draft · 1,196 words · pass | 3 Q (draft) | not rendered | not published (no route, sitemap or search) | none, by design | HELD: awaiting confirmation of `storage-sources` |
| 125 | AWS S3 Integration | `/storage/aws-s3` → 307 to `/storage/centralised-media-storage` | HELD | draft · 1,157 words · pass | 3 Q (draft) | not rendered | not published (no route, sitemap or search) | none, by design | HELD: awaiting confirmation of `storage-sources` |
| 126 | Local NAS Integration | `/storage/local-nas` → 307 to `/storage/centralised-media-storage` | HELD | draft · 1,119 words · pass | 3 Q (draft) | not rendered | not published (no route, sitemap or search) | none, by design | HELD: awaiting confirmation of `storage-sources` |
| 127 | Drag and Drop Upload | `/storage/drag-and-drop-upload` | LIVE | 1,258 words · 4 body sections · pass | 3 Q | OK | OK | 28 inbound · 0 broken | PASS |
| 128 | Watch Folder Ingestion | `/storage/watch-folder-ingestion` | LIVE | 1,131 words · 4 body sections · pass | 3 Q | OK | OK | 22 inbound · 0 broken | PASS |
| 129 | Automated Media Import | `/storage/automated-media-import` | LIVE | 1,006 words · 4 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 7 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 130 | Bulk Asset Import | `/storage/bulk-asset-import` | LIVE | 1,121 words · 4 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 34 inbound · 0 broken | FAIL: images (1 of 2 need replacing) |
| 131 | Large Library Migration | `/storage/large-library-migration` | LIVE | 910 words · 3 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 13 inbound · 0 broken | FAIL: images (2 of 3 need replacing) |
| 132 | Metadata Preservation | `/storage/metadata-preservation` | LIVE | 828 words · 3 body sections · pass | 4 Q | replace: looks like a product screen | OK | 33 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 133 | Folder Mapping | `/storage/folder-mapping` | LIVE | 1,115 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 26 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 134 | Creative Migration | `/storage/creative-migration` | LIVE | 1,241 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 4 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 135 | Digital Asset Import | `/storage/digital-asset-import` | LIVE | 959 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 6 inbound · 0 broken | FAIL: images (1 of 3 need replacing) |
| 136 | Media Upload Management | `/storage/media-upload-management` | LIVE | 1,027 words · 4 body sections · pass | 3 Q | OK | OK | 10 inbound · 0 broken | PASS |
| 137 | Resumable Uploads | `/storage/resumable-uploads` | LIVE | 800 words · 4 body sections · pass | 3 Q | OK | OK | 14 inbound · 0 broken | PASS |
| 138 | Chunked Uploads | `/storage/chunked-uploads` | LIVE | 892 words · 4 body sections · pass | 3 Q | OK | OK | 10 inbound · 0 broken | PASS |
| 139 | High-Volume Media Uploads | `/storage/high-volume-media-uploads` | LIVE | 1,412 words · 4 body sections · pass | 4 Q | OK | OK | 11 inbound · 0 broken | PASS |
| 140 | 10 GB File Uploads | `/storage/10-gb-file-uploads` → 307 to `/storage/media-upload-management` | HELD | draft · 1,075 words · pass | 3 Q (draft) | not rendered | not published (no route, sitemap or search) | none, by design | HELD: awaiting confirmation of `upload-10gb` |
| 141 | Upload Progress | `/storage/upload-progress` | LIVE | 1,056 words · 4 body sections · pass | 3 Q | OK | OK | 10 inbound · 0 broken | PASS |
| 142 | Parallel Uploads | `/storage/parallel-uploads` | LIVE | 1,087 words · 4 body sections · pass | 3 Q | OK | OK | 8 inbound · 0 broken | PASS |
| 143 | Asset Processing | `/storage/asset-processing` | LIVE | 1,147 words · 4 body sections · pass | 3 Q | OK | OK | 33 inbound · 0 broken | PASS |
| 144 | AI Processing Queue | `/storage/ai-processing-queue` | LIVE | 1,011 words · 4 body sections · pass | 3 Q | replace: looks like a product screen | OK | 19 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 145 | Media Processing Status | `/storage/media-processing-status` | LIVE | 953 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 37 inbound · 0 broken | FAIL: images (1 of 3 need replacing) |
| 146 | Asset Thumbnail Generation | `/storage/asset-thumbnail-generation` | LIVE | 1,050 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 24 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 147 | Streaming Media Preview | `/storage/streaming-media-preview` | LIVE | 953 words · 4 body sections · pass | 3 Q | OK | OK | 35 inbound · 0 broken | FAIL: images (1 of 3 need replacing) |
| 148 | Creative Storage Management | `/storage/creative-storage-management` | LIVE | 1,128 words · 4 body sections · pass | 3 Q | OK | OK | 6 inbound · 0 broken | PASS |
| 149 | Storage Growth Analytics | `/storage/storage-growth-analytics` | LIVE | 1,030 words · 4 body sections · pass | 3 Q | OK | OK | 17 inbound · 0 broken | PASS |
| 150 | Centralised Media Storage | `/storage/centralised-media-storage` | LIVE | 1,176 words · 4 body sections · pass | 3 Q | OK | OK | 9 inbound · 0 broken | PASS |
| 151 | Creative Asset Permissions | `/permissions/creative-asset-permissions` | LIVE | 1,314 words · 4 body sections · pass | 4 Q | replace: invented figures | OK | 20 inbound · 0 broken | FAIL: images (4 of 4 need replacing) |
| 152 | Folder-Level Permissions | `/permissions/folder-level-permissions` | LIVE | 910 words · 4 body sections · pass | 3 Q | replace: invented figures | OK | 60 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 153 | Role-Based Access Control | `/permissions/role-based-access-control` | LIVE | framed · 1,193 words · 4 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 6 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 154 | Default-Deny Access | `/permissions/default-deny-access` | LIVE | 909 words · 4 body sections · pass | 3 Q | OK | OK | 44 inbound · 0 broken | FAIL: images (1 of 2 need replacing) |
| 155 | Manager Permissions | `/permissions/manager-permissions` | LIVE | 1,051 words · 5 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 16 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 156 | Editor Permissions | `/permissions/editor-permissions` | LIVE | 882 words · 4 body sections · pass | 3 Q | OK | OK | 13 inbound · 0 broken | FAIL: responsive (overflow at 320, 360px); images (1 of 3 need replacing) |
| 157 | Individual Permissions | `/permissions/individual-permissions` | LIVE | 971 words · 5 body sections · pass | 3 Q | replace: invented figures | OK | 23 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 158 | Organisation Admin Controls | `/permissions/organisation-admin-controls` | LIVE | 835 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 24 inbound · 0 broken | FAIL: images (2 of 3 need replacing) |
| 159 | Creative Access Governance | `/permissions/creative-access-governance` | LIVE | 1,102 words · 5 body sections · pass | 3 Q | replace: invented figures | OK | 12 inbound · 0 broken | FAIL: images (4 of 4 need replacing) |
| 160 | Multi-Tenant Digital Asset Management | `/permissions/multi-tenant-digital-asset-management` | LIVE | 821 words · 4 body sections · pass | 3 Q | OK | OK | 23 inbound · 0 broken | PASS |
| 161 | Client Tenant Isolation | `/permissions/client-tenant-isolation` | LIVE | 808 words · 4 body sections · pass | 3 Q | OK | OK | 31 inbound · 0 broken | FAIL: images (1 of 2 need replacing) |
| 162 | Agency Multi-Tenancy | `/permissions/agency-multi-tenancy` | LIVE | 956 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 20 inbound · 0 broken | FAIL: images (1 of 3 need replacing) |
| 163 | Per-Client Storage | `/permissions/per-client-storage` | LIVE | 909 words · 4 body sections · pass | 3 Q | OK | OK | 18 inbound · 0 broken | PASS |
| 164 | Per-Client AI Keys | `/permissions/per-client-ai-keys` | LIVE | 992 words · 4 body sections · pass | 3 Q | replace: looks like a product screen | OK | 12 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 165 | Per-Client Authentication | `/permissions/per-client-authentication` | LIVE | 990 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 14 inbound · 0 broken | FAIL: images (1 of 2 need replacing) |
| 166 | White-Label Asset Management | `/permissions/white-label-asset-management` | LIVE | 1,070 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 8 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 167 | Client Asset Isolation | `/permissions/client-asset-isolation` | LIVE | 1,204 words · 4 body sections · pass | 3 Q | OK | OK | 12 inbound · 0 broken | FAIL: images (1 of 3 need replacing) |
| 168 | Agency Asset Management | `/permissions/agency-asset-management` | LIVE | 1,242 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 5 inbound · 0 broken | FAIL: images (2 of 3 need replacing) |
| 169 | Enterprise Permissions | `/permissions/enterprise-permissions` | LIVE | 1,180 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 15 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 170 | Permission Auditing | `/permissions/permission-auditing` | LIVE | 988 words · 4 body sections · pass | 3 Q | replace: invented figures | OK | 27 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 171 | Access History | `/permissions/access-history` | LIVE | 1,168 words · 4 body sections · pass | 3 Q | OK | OK | 13 inbound · 0 broken | FAIL: images (1 of 3 need replacing) |
| 172 | Secure Asset Sharing | `/permissions/secure-asset-sharing` | LIVE | 1,003 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 19 inbound · 0 broken | FAIL: images (1 of 2 need replacing) |
| 173 | Folder Access Maps | `/permissions/folder-access-maps` | LIVE | 978 words · 4 body sections · pass | 3 Q | OK | OK | 11 inbound · 0 broken | FAIL: images (1 of 2 need replacing) |
| 174 | Creative Security Controls | `/permissions/creative-security-controls` | LIVE | 934 words · 4 body sections · pass | 3 Q | replace: invented figures | OK | 12 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 175 | Team Access Management | `/permissions/team-access-management` | LIVE | 933 words · 4 body sections · pass | 3 Q | OK | OK | 25 inbound · 0 broken | PASS |
| 176 | Department Access | `/permissions/department-access` | LIVE | 1,198 words · 4 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 20 inbound · 0 broken | FAIL: images (1 of 2 need replacing) |
| 177 | Client Workspace Access | `/permissions/client-workspace-access` | LIVE | 906 words · 4 body sections · pass | 3 Q | OK | OK | 13 inbound · 0 broken | PASS |
| 178 | Permission Hierarchies | `/permissions/permission-hierarchies` | LIVE | 937 words · 4 body sections · pass | 3 Q | replace: unrelated work | OK | 17 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 179 | Enterprise Asset Governance | `/permissions/enterprise-asset-governance` | LIVE | 999 words · 4 body sections · pass | 3 Q | replace: unrelated work | OK | 14 inbound · 0 broken | FAIL: images (4 of 4 need replacing) |
| 180 | Secure Creative Collaboration | `/permissions/secure-creative-collaboration` | LIVE | 942 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 13 inbound · 0 broken | FAIL: images (2 of 3 need replacing) |
| 181 | Creative Asset Analytics | `/analytics/creative-asset-analytics` | LIVE | 1,440 words · 5 body sections · pass | 4 Q | replace: invented figures | OK | 39 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 182 | Asset Usage Analytics | `/analytics/asset-usage-analytics` | LIVE | 1,310 words · 4 body sections · pass | 4 Q | replace: invented figures | OK | 28 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 183 | Storage Analytics | `/analytics/storage-analytics` | LIVE | 1,060 words · 4 body sections · pass | 4 Q | OK | OK | 24 inbound · 0 broken | PASS |
| 184 | Upload Analytics | `/analytics/upload-analytics` | LIVE | 1,058 words · 4 body sections · pass | 3 Q | OK | OK | 20 inbound · 0 broken | PASS |
| 185 | Contributor Analytics | `/analytics/contributor-analytics` | LIVE | 1,034 words · 4 body sections · pass | 4 Q | replace: looks like a product screen | OK | 22 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 186 | Tag Analytics | `/analytics/tag-analytics` | LIVE | 952 words · 4 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 30 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 187 | Creative Library Trends | `/analytics/creative-library-trends` | LIVE | 1,026 words · 4 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 10 inbound · 0 broken | FAIL: images (2 of 3 need replacing) |
| 188 | Daily Library Analytics | `/analytics/daily-library-analytics` | LIVE | 1,091 words · 4 body sections · pass | 5 Q | replace: another organisation's name or logo | OK | 5 inbound · 0 broken | FAIL: images (4 of 4 need replacing) |
| 189 | Weekly Library Analytics | `/analytics/weekly-library-analytics` | LIVE | 1,195 words · 4 body sections · pass | 4 Q | replace: looks like a product screen | OK | 6 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 190 | Monthly Library Analytics | `/analytics/monthly-library-analytics` | LIVE | 961 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 7 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 191 | Asset Activity Dashboard | `/analytics/asset-activity-dashboard` | LIVE | 868 words · 4 body sections · pass | 3 Q | OK | OK | 5 inbound · 0 broken | FAIL: images (1 of 2 need replacing) |
| 192 | Storage by Category | `/analytics/storage-by-category` | LIVE | 1,079 words · 4 body sections · pass | 4 Q | OK | OK | 18 inbound · 0 broken | PASS |
| 193 | Most Searched Tags | `/analytics/most-searched-tags` | LIVE | 1,094 words · 4 body sections · pass | 4 Q | replace: looks like a product screen | OK | 17 inbound · 0 broken | FAIL: images (4 of 4 need replacing) |
| 194 | Top Contributors | `/analytics/top-contributors` | LIVE | 1,091 words · 4 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 4 inbound · 0 broken | FAIL: images (2 of 3 need replacing) |
| 195 | Creative Operations Analytics | `/analytics/creative-operations-analytics` | LIVE | 903 words · 4 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 11 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 196 | Library Health Analytics | `/analytics/library-health-analytics` | LIVE | 1,163 words · 4 body sections · pass | 5 Q | replace: invented figures | OK | 18 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 197 | Asset Access Analytics | `/analytics/asset-access-analytics` | LIVE | 1,123 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 9 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 198 | Folder Access Analytics | `/analytics/folder-access-analytics` | LIVE | 1,091 words · 4 body sections · pass | 3 Q | replace: looks like a product screen | OK | 9 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 199 | Creative Team Analytics | `/analytics/creative-team-analytics` | LIVE | 1,129 words · 4 body sections · pass | 3 Q | replace: invented figures | OK | 12 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 200 | Marketing Asset Analytics | `/analytics/marketing-asset-analytics` | LIVE | 1,098 words · 4 body sections · pass | 3 Q | replace: looks like a product screen | OK | 7 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 201 | Production Analytics | `/analytics/production-analytics` | LIVE | 1,054 words · 4 body sections · pass | 3 Q | replace: looks like a product screen | OK | 8 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 202 | Agency Analytics | `/analytics/agency-analytics` | LIVE | 961 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 12 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 203 | Brand Asset Analytics | `/analytics/brand-asset-analytics` | LIVE | 988 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 14 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 204 | Asset Performance Insights | `/analytics/asset-performance-insights` | LIVE | 1,009 words · 4 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 6 inbound · 0 broken | FAIL: images (2 of 4 need replacing) |
| 205 | Creative Library Reporting | `/analytics/creative-library-reporting` | LIVE | 970 words · 4 body sections · pass | 4 Q | replace: invented figures | OK | 15 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 206 | Asset Management Metrics | `/analytics/asset-management-metrics` | LIVE | 962 words · 4 body sections · pass | 4 Q | replace: invented figures | OK | 4 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 207 | Digital Asset KPIs | `/analytics/digital-asset-kpis` | LIVE | 1,044 words · 4 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 8 inbound · 0 broken | FAIL: images (1 of 2 need replacing) |
| 208 | Creative Workflow Metrics | `/analytics/creative-workflow-metrics` | LIVE | 994 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 11 inbound · 0 broken | FAIL: images (4 of 4 need replacing) |
| 209 | Library Growth Reporting | `/analytics/library-growth-reporting` | LIVE | 1,067 words · 4 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 17 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 210 | Executive Asset Analytics | `/analytics/executive-asset-analytics` | LIVE | 931 words · 4 body sections · pass | 3 Q | OK | OK | 10 inbound · 0 broken | PASS |
| 211 | GetSibu for Production Studios | `/use-cases/production-studios` | LIVE | 1,202 words · 5 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 20 inbound · 0 broken | FAIL: images (2 of 4 need replacing) |
| 212 | GetSibu for Video Teams | `/use-cases/video-teams` | LIVE | framed · 1,234 words · 4 body sections · pass | 3 Q | OK | OK | 1 inbound · 0 broken | FAIL: images (1 of 4 need replacing) |
| 213 | GetSibu for Marketing Teams | `/use-cases/marketing-teams` | LIVE | 1,315 words · 4 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 26 inbound · 0 broken | FAIL: images (2 of 4 need replacing) |
| 214 | GetSibu for Brand Teams | `/use-cases/brand-teams` | LIVE | 1,320 words · 5 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 23 inbound · 0 broken | FAIL: images (3 of 4 need replacing) |
| 215 | GetSibu for Creative Agencies | `/use-cases/creative-agencies` | LIVE | 1,095 words · 5 body sections · pass | 3 Q | OK | OK | 22 inbound · 0 broken | FAIL: images (1 of 4 need replacing) |
| 216 | GetSibu for Post-Production Teams | `/use-cases/post-production-teams` | LIVE | framed · 1,150 words · 4 body sections · pass | 3 Q | OK | OK | 3 inbound · 0 broken | FAIL: images (1 of 3 need replacing) |
| 217 | GetSibu for Documentary Teams | `/use-cases/documentary-teams` | LIVE | framed · 1,241 words · 4 body sections · pass | 4 Q | OK | OK | 2 inbound · 0 broken | FAIL: images (1 of 4 need replacing) |
| 218 | GetSibu for Film Production | `/use-cases/film-production` | LIVE | 1,325 words · 5 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 6 inbound · 0 broken | FAIL: images (2 of 5 need replacing) |
| 219 | GetSibu for Advertising Agencies | `/use-cases/advertising-agencies` | LIVE | 1,203 words · 5 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 13 inbound · 0 broken | FAIL: images (1 of 4 need replacing) |
| 220 | GetSibu for Creative Studios | `/use-cases/creative-studios` | LIVE | 1,204 words · 5 body sections · pass | 3 Q | OK | OK | 11 inbound · 0 broken | PASS |
| 221 | GetSibu for Brand Consultancies | `/use-cases/brand-consultancies` | LIVE | 1,283 words · 5 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 7 inbound · 0 broken | FAIL: images (2 of 4 need replacing) |
| 222 | GetSibu for In-House Creative Teams | `/use-cases/in-house-creative-teams` | LIVE | 1,169 words · 5 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 18 inbound · 0 broken | FAIL: images (2 of 4 need replacing) |
| 223 | GetSibu for Enterprise Marketing | `/use-cases/enterprise-marketing` | LIVE | 1,314 words · 5 body sections · pass | 4 Q | replace: invented figures | OK | 13 inbound · 0 broken | FAIL: images (4 of 4 need replacing) |
| 224 | GetSibu for Global Brands | `/use-cases/global-brands` | LIVE | 1,180 words · 5 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 13 inbound · 0 broken | FAIL: images (1 of 4 need replacing) |
| 225 | GetSibu for Multi-Market Teams | `/use-cases/multi-market-teams` | LIVE | 1,113 words · 5 body sections · pass | 3 Q | OK | OK | 11 inbound · 0 broken | FAIL: images (1 of 3 need replacing) |
| 226 | GetSibu for Freelancers | `/use-cases/freelancers` | LIVE | 1,419 words · 4 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 6 inbound · 0 broken | FAIL: images (1 of 4 need replacing) |
| 227 | GetSibu for Content Creators | `/use-cases/content-creators` | LIVE | 1,179 words · 4 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 5 inbound · 0 broken | FAIL: images (1 of 4 need replacing) |
| 228 | GetSibu for Photography Teams | `/use-cases/photography-teams` | LIVE | 1,142 words · 4 body sections · pass | 4 Q | OK | OK | 7 inbound · 0 broken | PASS |
| 229 | GetSibu for Video Agencies | `/use-cases/video-agencies` | LIVE | 1,293 words · 5 body sections · pass | 4 Q | OK | OK | 12 inbound · 0 broken | FAIL: images (1 of 5 need replacing) |
| 230 | GetSibu for E-Commerce Brands | `/use-cases/e-commerce-brands` | LIVE | 1,295 words · 4 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 11 inbound · 0 broken | FAIL: images (2 of 3 need replacing) |
| 231 | GetSibu for Retail Brands | `/use-cases/retail-brands` | LIVE | 1,243 words · 5 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 12 inbound · 0 broken | FAIL: images (4 of 4 need replacing) |
| 232 | GetSibu for Media Companies | `/use-cases/media-companies` | LIVE | 1,271 words · 5 body sections · pass | 4 Q | OK | OK | 7 inbound · 0 broken | PASS |
| 233 | GetSibu for Newsrooms | `/use-cases/newsrooms` | LIVE | 1,333 words · 5 body sections · pass | 4 Q | OK | OK | 3 inbound · 0 broken | PASS |
| 234 | GetSibu for Social Media Teams | `/use-cases/social-media-teams` | LIVE | 1,239 words · 4 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 6 inbound · 0 broken | FAIL: images (2 of 4 need replacing) |
| 235 | GetSibu for PR Teams | `/use-cases/pr-teams` | LIVE | 1,161 words · 4 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 7 inbound · 0 broken | FAIL: images (1 of 4 need replacing) |
| 236 | GetSibu for Event Companies | `/use-cases/event-companies` | LIVE | 1,046 words · 4 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 11 inbound · 0 broken | FAIL: images (2 of 4 need replacing) |
| 237 | GetSibu for Education Teams | `/use-cases/education-teams` | LIVE | 1,266 words · 5 body sections · pass | 4 Q | OK | OK | 6 inbound · 0 broken | FAIL: images (1 of 5 need replacing) |
| 238 | GetSibu for Nonprofits | `/use-cases/nonprofits` | LIVE | 1,241 words · 4 body sections · pass | 4 Q | OK | OK | 6 inbound · 0 broken | FAIL: images (1 of 4 need replacing) |
| 239 | GetSibu for Internal Communications | `/use-cases/internal-communications` | LIVE | 1,230 words · 5 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 6 inbound · 0 broken | FAIL: images (1 of 4 need replacing) |
| 240 | GetSibu for Corporate Communications | `/use-cases/corporate-communications` | LIVE | 1,176 words · 5 body sections · pass | 4 Q | OK | OK | 9 inbound · 0 broken | FAIL: images (1 of 4 need replacing) |
| 241 | GetSibu Integrations | `/integrations` | LIVE | 869 words · 3 body sections · pass | 4 Q | replace: invented figures | OK | 12 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 242 | Google Drive Integration | `/storage/google-drive` | DUPLICATE-COVERED | exact duplicate of #122 | — | — | — | — | covered by #122 Google Drive Integration (HELD) |
| 243 | Dropbox Integration | `/storage/dropbox` | DUPLICATE-COVERED | exact duplicate of #123 | — | — | — | — | covered by #123 Dropbox Integration (HELD) |
| 244 | OneDrive Integration | `/storage/onedrive` | DUPLICATE-COVERED | exact duplicate of #124 | — | — | — | — | covered by #124 OneDrive Integration (HELD) |
| 245 | AWS S3 Integration | `/storage/aws-s3` | DUPLICATE-COVERED | exact duplicate of #125 | — | — | — | — | covered by #125 AWS S3 Integration (HELD) |
| 246 | Slack Integration | `/integrations/slack` → 307 to `/developers/webhook-automation` | HELD | draft · 1,259 words · pass | 4 Q (draft) | not rendered | not published (no route, sitemap or search) | none, by design | HELD: awaiting confirmation of `slack` |
| 247 | Figma Integration | `/integrations/figma` → 307 to `/integrations/custom-integrations` | HELD | draft · 1,347 words · pass | 4 Q (draft) | not rendered | not published (no route, sitemap or search) | none, by design | HELD: awaiting confirmation of `figma` |
| 248 | Adobe Premiere Pro Integration | `/integrations/adobe-premiere-pro` → 307 to `/integrations/custom-integrations` | HELD | draft · 1,189 words · pass | 4 Q (draft) | not rendered | not published (no route, sitemap or search) | none, by design | HELD: awaiting confirmation of `adobe-premiere-after-effects` |
| 249 | Adobe After Effects Integration | `/integrations/adobe-after-effects` → 307 to `/integrations/custom-integrations` | HELD | draft · 1,194 words · pass | 4 Q (draft) | not rendered | not published (no route, sitemap or search) | none, by design | HELD: awaiting confirmation of `adobe-premiere-after-effects` |
| 250 | Frame.io Integration | `/integrations/frame-io` → 307 to `/integrations/custom-integrations` | HELD | draft · 1,278 words · pass | 4 Q (draft) | not rendered | not published (no route, sitemap or search) | none, by design | HELD: awaiting confirmation of `frame-io` |
| 251 | Zapier Integration | `/integrations/zapier` → 307 to `/developers/webhook-automation` | HELD | draft · 1,068 words · pass | 4 Q (draft) | not rendered | not published (no route, sitemap or search) | none, by design | HELD: awaiting confirmation of `zapier` |
| 252 | Webhooks | `/developers/webhooks` | LIVE | framed · 1,072 words · 4 body sections · pass | 3 Q | replace: invented figures | OK | 6 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 253 | REST API | `/developers/rest-api` | LIVE | 983 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 13 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 254 | API-First DAM | `/developers/api-first-dam` | LIVE | 1,152 words · 4 body sections · pass | 3 Q | replace: invented figures | OK | 11 inbound · 0 broken | FAIL: images (2 of 3 need replacing) |
| 255 | Developer API | `/developers/developer-api` | LIVE | 1,009 words · 4 body sections · pass | 4 Q | replace: invented figures | OK | 12 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 256 | API Authentication | `/developers/api-authentication` | LIVE | 961 words · 4 body sections · pass | 3 Q | replace: unrelated work | OK | 15 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 257 | Webhook Automation | `/developers/webhook-automation` | LIVE | 1,080 words · 4 body sections · pass | 4 Q | OK | OK | 15 inbound · 0 broken | FAIL: images (1 of 4 need replacing) |
| 258 | Developer Playground | `/developers/developer-playground` → 307 to `/developers/api` | HELD | draft · 1,069 words · pass | 4 Q (draft) | not rendered | not published (no route, sitemap or search) | none, by design | HELD: awaiting confirmation of `developer-playground` |
| 259 | SDK Support | `/developers/sdk-support` → 307 to `/developers/api` | HELD | draft · 1,070 words · pass | 4 Q (draft) | not rendered | not published (no route, sitemap or search) | none, by design | HELD: awaiting confirmation of `openapi`, `sdks` |
| 260 | Custom Integrations | `/integrations/custom-integrations` | LIVE | 1,067 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 8 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 261 | GetSibu API | `/developers/api` | LIVE | 1,081 words · 4 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 16 inbound · 0 broken | FAIL: images (1 of 3 need replacing) |
| 262 | Asset Upload API | `/developers/asset-upload-api` | LIVE | 1,202 words · 4 body sections · pass | 4 Q | OK | OK | 17 inbound · 0 broken | PASS |
| 263 | Asset Search API | `/developers/asset-search-api` | LIVE | 1,064 words · 4 body sections · pass | 3 Q | replace: unrelated work | OK | 10 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 264 | Asset Metadata API | `/developers/asset-metadata-api` | LIVE | 1,065 words · 4 body sections · pass | 3 Q | replace: unrelated work | OK | 18 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 265 | Asset Tags API | `/developers/asset-tags-api` | LIVE | 1,038 words · 4 body sections · pass | 3 Q | replace: looks like a product screen | OK | 6 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 266 | Asset Comments API | `/developers/asset-comments-api` | LIVE | 1,043 words · 4 body sections · pass | 3 Q | replace: invented figures | OK | 8 inbound · 0 broken | FAIL: images (2 of 3 need replacing) |
| 267 | Approval API | `/developers/approval-api` | LIVE | 879 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 9 inbound · 0 broken | FAIL: images (1 of 2 need replacing) |
| 268 | Webhook Events | `/developers/webhook-events` | LIVE | framed · 917 words · 4 body sections · pass | 3 Q | replace: invented figures | OK | 2 inbound · 0 broken | FAIL: images (1 of 2 need replacing) |
| 269 | Asset Created Webhook | `/developers/asset-created-webhook` → 307 to `/developers/webhook-automation` | HELD | draft · 1,279 words · pass | 4 Q (draft) | not rendered | not published (no route, sitemap or search) | none, by design | HELD: awaiting confirmation of `webhook-events` |
| 270 | Comment Added Webhook | `/developers/comment-added-webhook` → 307 to `/developers/webhook-automation` | HELD | draft · 1,042 words · pass | 4 Q (draft) | not rendered | not published (no route, sitemap or search) | none, by design | HELD: awaiting confirmation of `webhook-events` |
| 271 | Approval Requested Webhook | `/developers/approval-requested-webhook` → 307 to `/developers/webhook-automation` | HELD | draft · 1,065 words · pass | 4 Q (draft) | not rendered | not published (no route, sitemap or search) | none, by design | HELD: awaiting confirmation of `webhook-events` |
| 272 | Billing Events | `/developers/billing-events` → 307 to `/developers/webhook-automation` | HELD | draft · 1,117 words · pass | 4 Q (draft) | not rendered | not published (no route, sitemap or search) | none, by design | HELD: awaiting confirmation of `webhook-events` |
| 273 | API Documentation | `/developers/api-documentation` | LIVE | 1,055 words · 4 body sections · pass | 4 Q | replace: invented figures | OK | 22 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 274 | OpenAPI Specification | `/developers/openapi-specification` → 307 to `/developers/api` | HELD | draft · 1,168 words · pass | 4 Q (draft) | not rendered | not published (no route, sitemap or search) | none, by design | HELD: awaiting confirmation of `openapi` |
| 275 | Developer Authentication | `/developers/developer-authentication` | LIVE | 945 words · 4 body sections · pass | 3 Q | replace: invented figures | OK | 12 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 276 | API Tenant Isolation | `/developers/api-tenant-isolation` | LIVE | 1,012 words · 4 body sections · pass | 3 Q | replace: invented figures | OK | 19 inbound · 0 broken | FAIL: images (2 of 3 need replacing) |
| 277 | API Security | `/developers/api-security` | LIVE | 971 words · 4 body sections · pass | 3 Q | replace: invented figures | OK | 8 inbound · 0 broken | FAIL: images (2 of 3 need replacing) |
| 278 | Developer Automation | `/developers/developer-automation` | LIVE | 995 words · 4 body sections · pass | 3 Q | replace: invented figures | OK | 11 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 279 | Custom Asset Applications | `/developers/custom-asset-applications` | LIVE | 1,077 words · 4 body sections · pass | 3 Q | OK | OK | 12 inbound · 0 broken | PASS |
| 280 | GetSibu for Developers | `/developers` | LIVE | 933 words · 3 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 25 inbound · 0 broken | FAIL: images (2 of 3 need replacing) |
| 281 | Migrate to GetSibu | `/migration` | LIVE | 1,031 words · 3 body sections · pass | 5 Q | OK | OK | 26 inbound · 0 broken | FAIL: images (1 of 2 need replacing) |
| 282 | Creative Library Migration | `/migration/creative-library-migration` | LIVE | 1,218 words · 4 body sections · pass | 5 Q | replace: another organisation's name or logo | OK | 2 inbound · 0 broken | FAIL: images (2 of 3 need replacing) |
| 283 | Google Drive Migration | `/migration/google-drive-migration` → 307 to `/migration` | HELD | draft · 1,018 words · pass | 3 Q (draft) | not rendered | not published (no route, sitemap or search) | none, by design | HELD: awaiting confirmation of `storage-sources` |
| 284 | Dropbox Migration | `/migration/dropbox-migration` → 307 to `/migration` | HELD | draft · 1,023 words · pass | 3 Q (draft) | not rendered | not published (no route, sitemap or search) | none, by design | HELD: awaiting confirmation of `storage-sources` |
| 285 | S3 Migration | `/migration/s3-migration` → 307 to `/migration` | HELD | draft · 1,116 words · pass | 3 Q (draft) | not rendered | not published (no route, sitemap or search) | none, by design | HELD: awaiting confirmation of `storage-sources` |
| 286 | Metadata Migration | `/migration/metadata-migration` | LIVE | 1,242 words · 4 body sections · pass | 3 Q | replace: unrelated work | OK | 14 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 287 | Folder Structure Migration | `/migration/folder-structure-migration` | LIVE | 1,141 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 9 inbound · 0 broken | FAIL: images (2 of 3 need replacing) |
| 288 | Creative Data Migration | `/migration/creative-data-migration` | LIVE | 1,205 words · 4 body sections · pass | 3 Q | OK | OK | 1 inbound · 0 broken | PASS |
| 289 | DAM Migration Strategy | `/migration/dam-migration-strategy` | LIVE | 1,206 words · 4 body sections · pass | 4 Q | OK | OK | 14 inbound · 0 broken | FAIL: images (1 of 2 need replacing) |
| 290 | Digital Asset Migration Planning | `/migration/digital-asset-migration-planning` | LIVE | 959 words · 4 body sections · pass | 4 Q | OK | OK | 13 inbound · 0 broken | FAIL: images (1 of 2 need replacing) |
| 291 | Bulk Import | `/migration/bulk-import` | LIVE | 968 words · 4 body sections · pass | 3 Q | OK | OK | 10 inbound · 0 broken | FAIL: images (1 of 2 need replacing) |
| 292 | Migration Without Downtime | `/migration/migration-without-downtime` | LIVE | 1,085 words · 4 body sections · pass | 3 Q | OK | OK | 19 inbound · 0 broken | PASS |
| 293 | Migration Metadata Preservation | `/migration/migration-metadata-preservation` | LIVE | 967 words · 4 body sections · pass | 3 Q | replace: looks like a product screen | OK | 5 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 294 | Migration Folder Mapping | `/migration/migration-folder-mapping` | LIVE | 1,317 words · 4 body sections · pass | 3 Q | OK | OK | 12 inbound · 0 broken | PASS |
| 295 | Migration Permission Mapping | `/migration/migration-permission-mapping` | LIVE | framed · 1,129 words · 4 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 4 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 296 | Migration Verification | `/migration/migration-verification` | LIVE | 1,242 words · 4 body sections · pass | 4 Q | OK | OK | 21 inbound · 0 broken | FAIL: images (1 of 4 need replacing) |
| 297 | DAM Onboarding | `/migration/dam-onboarding` | LIVE | framed · 1,096 words · 4 body sections · pass | 4 Q | OK | OK | 3 inbound · 0 broken | FAIL: images (1 of 2 need replacing) |
| 298 | Creative Team Migration | `/migration/creative-team-migration` | LIVE | 1,384 words · 4 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 8 inbound · 0 broken | FAIL: images (1 of 3 need replacing) |
| 299 | DAM Implementation | `/migration/dam-implementation` | LIVE | 1,162 words · 4 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 7 inbound · 0 broken | FAIL: images (1 of 3 need replacing) |
| 300 | GetSibu Migration Support | `/migration/migration-support` | LIVE | 1,141 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 3 inbound · 0 broken | FAIL: images (1 of 2 need replacing) |
| 301 | GetSibu Architecture | `/architecture` | LIVE | 1,260 words · 4 body sections · pass | 3 Q | OK | OK | 23 inbound · 0 broken | FAIL: images (1 of 2 need replacing) |
| 302 | Creative Asset Infrastructure | `/architecture/creative-asset-infrastructure` | LIVE | 998 words · 4 body sections · pass | 4 Q | OK | OK | 3 inbound · 0 broken | PASS |
| 303 | Cloud-Based Asset Management | `/architecture/cloud-based-asset-management` | LIVE | 1,074 words · 4 body sections · pass | 4 Q | OK | OK | 5 inbound · 0 broken | PASS |
| 304 | CDN Asset Delivery | `/architecture/cdn-asset-delivery` | LIVE | 1,301 words · 4 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 7 inbound · 0 broken | FAIL: images (1 of 2 need replacing) |
| 305 | Edge Caching | `/architecture/edge-caching` | LIVE | 1,175 words · 4 body sections · pass | 4 Q | OK | OK | 6 inbound · 0 broken | FAIL: images (1 of 3 need replacing) |
| 306 | Streaming Previews | `/architecture/streaming-previews` | LIVE | 965 words · 4 body sections · pass | 3 Q | OK | OK | 9 inbound · 0 broken | PASS |
| 307 | Fast Creative Search | `/architecture/fast-creative-search` | LIVE | 1,168 words · 4 body sections · pass | 3 Q | replace: unrelated work | OK | 9 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 308 | Scalable Asset Storage | `/architecture/scalable-asset-storage` | LIVE | 1,039 words · 4 body sections · pass | 3 Q | OK | OK | 8 inbound · 0 broken | PASS |
| 309 | Large Library Performance | `/architecture/large-library-performance` | LIVE | 944 words · 4 body sections · pass | 3 Q | OK | OK | 8 inbound · 0 broken | FAIL: images (1 of 3 need replacing) |
| 310 | Search Performance | `/architecture/search-performance` | LIVE | framed · 1,011 words · 4 body sections · pass | 3 Q | replace: unrelated work | OK | 2 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 311 | Asset Processing Performance | `/architecture/asset-processing-performance` | LIVE | 1,340 words · 4 body sections · pass | 4 Q | OK | OK | 14 inbound · 0 broken | FAIL: images (1 of 3 need replacing) |
| 312 | Large File Performance | `/architecture/large-file-performance` | LIVE | 1,269 words · 4 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 9 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 313 | Media Preview Performance | `/architecture/media-preview-performance` | LIVE | 1,189 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 9 inbound · 0 broken | FAIL: images (2 of 3 need replacing) |
| 314 | Global Asset Access | `/architecture/global-asset-access` | LIVE | 1,205 words · 4 body sections · pass | 4 Q | OK | OK | 11 inbound · 0 broken | FAIL: images (1 of 3 need replacing) |
| 315 | API Scalability | `/architecture/api-scalability` | LIVE | 1,182 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 7 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 316 | Stateless API Architecture | `/architecture/stateless-api-architecture` | LIVE | 1,254 words · 4 body sections · pass | 4 Q | OK | OK | 4 inbound · 0 broken | FAIL: images (1 of 2 need replacing) |
| 317 | Search Infrastructure | `/architecture/search-infrastructure` | LIVE | 931 words · 3 body sections · pass | 3 Q | replace: unrelated work | OK | 9 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 318 | Storage Architecture | `/architecture/storage-architecture` | LIVE | 1,190 words · 4 body sections · pass | 4 Q | OK | OK | 7 inbound · 0 broken | PASS |
| 319 | Observability | `/architecture/observability` | LIVE | 1,161 words · 4 body sections · pass | 4 Q | OK | OK | 1 inbound · 0 broken | PASS |
| 320 | High-Performance DAM | `/architecture/high-performance-dam` | LIVE | 1,042 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 3 inbound · 0 broken | FAIL: images (1 of 3 need replacing) |
| 321 | GetSibu Security | `/security` | LIVE | 1,282 words · 4 body sections · pass | 3 Q | replace: invented figures | OK | 21 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 322 | AES-256 Encryption | `/security/aes-256-encryption` → 307 to `/security` | HELD | draft · 1,134 words · pass | 4 Q (draft) | not rendered | not published (no route, sitemap or search) | none, by design | HELD: awaiting confirmation of `aes-256` |
| 323 | Secret Encryption | `/security/secret-encryption` | LIVE | 1,180 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 6 inbound · 0 broken | FAIL: images (1 of 2 need replacing) |
| 324 | Tenant Isolation | `/security/tenant-isolation` | LIVE | 1,099 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 15 inbound · 0 broken | FAIL: images (1 of 3 need replacing) |
| 325 | RBAC Security | `/security/rbac-security` | LIVE | 1,128 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 12 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 326 | Audit Logs | `/security/audit-logs` | LIVE | 1,158 words · 4 body sections · pass | 3 Q | replace: unrelated work | OK | 22 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 327 | Immutable Audit History | `/security/immutable-audit-history` → 307 to `/features/asset-audit-trail` | HELD | draft · 1,213 words · pass | 3 Q (draft) | not rendered | not published (no route, sitemap or search) | none, by design | HELD: awaiting confirmation of `immutable-audit` |
| 328 | GDPR Support | `/security/gdpr-support` → 307 to `/security` | HELD | draft · 1,410 words · pass | 5 Q (draft) | not rendered | not published (no route, sitemap or search) | none, by design | HELD: awaiting confirmation of `gdpr` |
| 329 | Data Processing Agreement | `/security/data-processing-agreement` → 307 to `/security` | HELD | draft · 1,076 words · pass | 4 Q (draft) | not rendered | not published (no route, sitemap or search) | none, by design | HELD: awaiting confirmation of `dpa` |
| 330 | SOC 2 Readiness | `/security/soc-2-readiness` → 307 to `/security` | HELD | draft · 1,060 words · pass | 4 Q (draft) | not rendered | not published (no route, sitemap or search) | none, by design | HELD: awaiting confirmation of `soc2`, `multi-tenant` |
| 331 | Backup Redundancy | `/security/backup-redundancy` → 307 to `/security` | HELD | draft · 1,033 words · pass | 3 Q (draft) | not rendered | not published (no route, sitemap or search) | none, by design | HELD: awaiting confirmation of `backups-pitr` |
| 332 | Point-in-Time Restore | `/security/point-in-time-restore` → 307 to `/security` | HELD | draft · 1,302 words · pass | 4 Q (draft) | not rendered | not published (no route, sitemap or search) | none, by design | HELD: awaiting confirmation of `backups-pitr` |
| 333 | Cross-Region Replication | `/security/cross-region-replication` → 307 to `/security` | HELD | draft · 1,020 words · pass | 3 Q (draft) | not rendered | not published (no route, sitemap or search) | none, by design | HELD: awaiting confirmation of `cross-region-replication` |
| 334 | SSO | `/security/sso` → 307 to `/security` | HELD | draft · 1,292 words · pass | 4 Q (draft) | not rendered | not published (no route, sitemap or search) | none, by design | HELD: awaiting confirmation of `sso-scim` |
| 335 | SCIM | `/security/scim` → 307 to `/security` | HELD | draft · 982 words · pass | 4 Q (draft) | not rendered | not published (no route, sitemap or search) | none, by design | HELD: awaiting confirmation of `sso-scim` |
| 336 | MFA | `/security/mfa` | LIVE | 1,113 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 18 inbound · 0 broken | FAIL: images (1 of 2 need replacing) |
| 337 | Default-Deny Security | `/security/default-deny-security` | LIVE | 1,392 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 7 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 338 | Enterprise Asset Security | `/security/enterprise-asset-security` | LIVE | 1,157 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 4 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 339 | Creative Data Governance | `/security/creative-data-governance` | LIVE | 1,461 words · 4 body sections · pass | 4 Q | replace: unrelated work | OK | 15 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 340 | Secure Digital Asset Management | `/security/secure-digital-asset-management` | LIVE | 1,162 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 1 inbound · 0 broken | FAIL: images (1 of 3 need replacing) |
| 341 | GetSibu Pricing | `/pricing` | LIVE | framed · 816 words · 3 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 3 inbound · 0 broken | FAIL: images (1 of 2 need replacing) |
| 342 | Free Plan | `/pricing/free-plan` → 307 to `/pricing/creative-team-pricing` | HELD | draft · 894 words · pass | 4 Q (draft) | not rendered | not published (no route, sitemap or search) | none, by design | HELD: awaiting confirmation of `pricing-tiers`, `free-plan-limits` |
| 343 | Pro Plan | `/pricing/pro-plan` → 307 to `/pricing/creative-team-pricing` | HELD | draft · 931 words · pass | 3 Q (draft) | not rendered | not published (no route, sitemap or search) | none, by design | HELD: awaiting confirmation of `storage-sources`, `pricing-tiers`, `pro-plan-contents` |
| 344 | Business Plan | `/pricing/business-plan` → 307 to `/pricing/creative-team-pricing` | HELD | draft · 1,202 words · pass | 4 Q (draft) | not rendered | not published (no route, sitemap or search) | none, by design | HELD: awaiting confirmation of `sso-scim`, `pricing-tiers`, `business-plan-contents` |
| 345 | Creative Team Pricing | `/pricing/creative-team-pricing` | LIVE | 1,078 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 3 inbound · 0 broken | FAIL: images (1 of 2 need replacing) |
| 346 | DAM Pricing for Agencies | `/pricing/dam-pricing-for-agencies` | LIVE | 1,125 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 7 inbound · 0 broken | FAIL: images (1 of 3 need replacing) |
| 347 | Enterprise Asset Management Cost | `/pricing/enterprise-asset-management-cost` | LIVE | 949 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 6 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 348 | Creative Workflow ROI | `/business-value/creative-workflow-roi` | LIVE | 1,046 words · 4 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 10 inbound · 0 broken | FAIL: images (1 of 2 need replacing) |
| 349 | Asset Discovery ROI | `/business-value/asset-discovery-roi` | LIVE | 1,096 words · 5 body sections · pass | 4 Q | replace: unrelated work | OK | 7 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 350 | Duplicate Reduction | `/business-value/duplicate-reduction` | LIVE | 843 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 13 inbound · 0 broken | FAIL: images (1 of 3 need replacing) |
| 351 | Creative Productivity | `/business-value/creative-productivity` | LIVE | 1,002 words · 4 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 4 inbound · 0 broken | FAIL: images (2 of 3 need replacing) |
| 352 | Marketing Productivity | `/business-value/marketing-productivity` | LIVE | 1,108 words · 5 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 5 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 353 | Production Productivity | `/business-value/production-productivity` | LIVE | 977 words · 5 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 5 inbound · 0 broken | FAIL: responsive (overflow at 320, 360px); images (2 of 2 need replacing) |
| 354 | Agency Efficiency | `/business-value/agency-efficiency` | LIVE | 1,190 words · 5 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 7 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 355 | Creative Operations Efficiency | `/business-value/creative-operations-efficiency` | LIVE | 860 words · 4 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 6 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 356 | Asset Management Efficiency | `/business-value/asset-management-efficiency` | LIVE | 1,143 words · 4 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 8 inbound · 0 broken | FAIL: images (1 of 2 need replacing) |
| 357 | Storage Efficiency | `/business-value/storage-efficiency` | LIVE | 860 words · 4 body sections · pass | 3 Q | OK | OK | 7 inbound · 0 broken | PASS |
| 358 | Collaboration Efficiency | `/business-value/collaboration-efficiency` | LIVE | 999 words · 4 body sections · pass | 3 Q | OK | OK | 5 inbound · 0 broken | PASS |
| 359 | DAM Business Case | `/business-value/dam-business-case` | LIVE | 1,155 words · 4 body sections · pass | 5 Q | OK | OK | 8 inbound · 0 broken | PASS |
| 360 | Why Invest in GetSibu | `/business-value/why-invest-in-getsibu` | LIVE | 1,070 words · 4 body sections · pass | 4 Q | OK | OK | 5 inbound · 0 broken | PASS |
| 361 | What Is Digital Asset Management? | `/resources/what-is-digital-asset-management` | LIVE | 1,407 words · 6 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 4 inbound · 0 broken | FAIL: images (1 of 3 need replacing) |
| 362 | What Is AI Asset Management? | `/resources/what-is-ai-asset-management` | LIVE | 1,377 words · 5 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 5 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 363 | What Is Semantic Search? | `/resources/what-is-semantic-search` | LIVE | 1,228 words · 6 body sections · pass | 4 Q | replace: looks like a product screen | OK | 8 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 364 | What Is AI Tagging? | `/resources/what-is-ai-tagging` | LIVE | 1,171 words · 6 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 10 inbound · 0 broken | FAIL: images (4 of 4 need replacing) |
| 365 | What Is Scene Detection? | `/resources/what-is-scene-detection` → 307 to `/resources/what-is-ai-asset-management` | HELD | draft · 1,088 words · pass | 4 Q (draft) | not rendered | not published (no route, sitemap or search) | none, by design | HELD: awaiting confirmation of `scene-detection` |
| 366 | What Is OCR in DAM? | `/resources/what-is-ocr-in-dam` | LIVE | 1,318 words · 5 body sections · pass | 4 Q | OK | OK | 9 inbound · 0 broken | FAIL: images (1 of 3 need replacing) |
| 367 | What Is Face Grouping? | `/resources/what-is-face-grouping` → 307 to `/resources/what-is-ai-asset-management` | HELD | draft · 1,324 words · pass | 4 Q (draft) | not rendered | not published (no route, sitemap or search) | none, by design | HELD: awaiting confirmation of `face-grouping` |
| 368 | What Is Duplicate Detection? | `/resources/what-is-duplicate-detection` | LIVE | 1,109 words · 5 body sections · pass | 4 Q | replace: looks like a product screen | OK | 6 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 369 | What Is Asset Versioning? | `/resources/what-is-asset-versioning` | LIVE | 1,097 words · 6 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 8 inbound · 0 broken | FAIL: images (2 of 3 need replacing) |
| 370 | What Is Creative Approval? | `/resources/what-is-creative-approval` | LIVE | 1,326 words · 6 body sections · pass | 4 Q | OK | OK | 8 inbound · 0 broken | PASS |
| 371 | What Is Creative Governance? | `/resources/what-is-creative-governance` | LIVE | 1,112 words · 6 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 11 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 372 | What Is Multi-Tenant DAM? | `/resources/what-is-multi-tenant-dam` | LIVE | 1,213 words · 6 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 8 inbound · 0 broken | FAIL: images (1 of 3 need replacing) |
| 373 | What Is a Creative Library? | `/resources/what-is-a-creative-library` | LIVE | 1,365 words · 6 body sections · pass | 4 Q | OK | OK | 8 inbound · 0 broken | FAIL: images (1 of 3 need replacing) |
| 374 | What Is Asset Metadata? | `/resources/what-is-asset-metadata` | LIVE | 1,224 words · 6 body sections · pass | 4 Q | replace: unrelated work | OK | 8 inbound · 0 broken | FAIL: images (4 of 4 need replacing) |
| 375 | What Is Asset Taxonomy? | `/resources/what-is-asset-taxonomy` | LIVE | 1,220 words · 6 body sections · pass | 4 Q | OK | OK | 25 inbound · 0 broken | PASS |
| 376 | What Is a DAM Migration? | `/resources/what-is-a-dam-migration` | LIVE | 1,298 words · 6 body sections · pass | 4 Q | OK | OK | 9 inbound · 0 broken | FAIL: images (1 of 3 need replacing) |
| 377 | How AI Changes DAM | `/resources/how-ai-changes-dam` | LIVE | 1,324 words · 6 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 7 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 378 | Future of Digital Asset Management | `/resources/future-of-digital-asset-management` | LIVE | 1,264 words · 6 body sections · pass | 3 Q | OK | OK | 5 inbound · 0 broken | PASS |
| 379 | Future of Creative Collaboration | `/resources/future-of-creative-collaboration` | LIVE | 1,336 words · 6 body sections · pass | 4 Q | OK | OK | 5 inbound · 0 broken | FAIL: images (1 of 3 need replacing) |
| 380 | Future of AI-Powered Creative Libraries | `/resources/future-of-ai-powered-creative-libraries` | LIVE | 1,358 words · 6 body sections · pass | 4 Q | replace: looks like a product screen | OK | 7 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 381 | What Is GetSibu? | `/faq/what-is-getsibu` | LIVE | 945 words · 3 body sections · pass | 4 Q | OK | OK | 3 inbound · 0 broken | FAIL: images (1 of 2 need replacing) |
| 382 | Who Is GetSibu For? | `/faq/who-is-getsibu-for` | LIVE | 1,032 words · 4 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 5 inbound · 0 broken | FAIL: images (2 of 3 need replacing) |
| 383 | Does GetSibu Support AI Tagging? | `/faq/does-getsibu-support-ai-tagging` | LIVE | 891 words · 4 body sections · pass | 4 Q | replace: looks like a product screen | OK | 4 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 384 | Can GetSibu Search Inside Documents? | `/faq/can-getsibu-search-inside-documents` | LIVE | 895 words · 4 body sections · pass | 4 Q | replace: unrelated work | OK | 6 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 385 | Does GetSibu Support Video Comments? | `/faq/does-getsibu-support-video-comments` | LIVE | 962 words · 4 body sections · pass | 4 Q | OK | OK | 3 inbound · 0 broken | FAIL: images (1 of 3 need replacing) |
| 386 | Does GetSibu Support Versioning? | `/faq/does-getsibu-support-versioning` | LIVE | 1,100 words · 4 body sections · pass | 4 Q | OK | OK | 3 inbound · 0 broken | PASS |
| 387 | Does GetSibu Support Multiple Clients? | `/faq/does-getsibu-support-multiple-clients` | LIVE | 788 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 7 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 388 | Does GetSibu Have an API? | `/faq/does-getsibu-have-an-api` | LIVE | 722 words · 4 body sections · pass | 3 Q | replace: invented figures | OK | 7 inbound · 0 broken | FAIL: images (2 of 3 need replacing) |
| 389 | Does GetSibu Support SSO? | `/faq/does-getsibu-support-sso` → 307 to `/security` | HELD | draft · 617 words · pass | 3 Q (draft) | not rendered | not published (no route, sitemap or search) | none, by design | HELD: awaiting confirmation of `sso-scim`, `pricing-tiers` |
| 390 | Can GetSibu Integrate With Existing Tools? | `/faq/can-getsibu-integrate-with-existing-tools` | LIVE | framed · 764 words · 4 body sections · pass | 3 Q | OK | OK | 2 inbound · 0 broken | FAIL: images (1 of 3 need replacing) |
| 391 | Start Your Creative Library | `/get-started` | LIVE | 1,229 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 30 inbound · 0 broken | FAIL: images (1 of 2 need replacing) |
| 392 | Bring Your Creative Assets Together | `/get-started/bring-your-creative-assets-together` | LIVE | 1,206 words · 4 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 46 inbound · 0 broken | FAIL: images (1 of 3 need replacing) |
| 393 | Stop Searching Through Folders | `/get-started/stop-searching-through-folders` | LIVE | 1,200 words · 4 body sections · pass | 3 Q | replace: unrelated work | OK | 21 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 394 | Make Every Asset Discoverable | `/get-started/make-every-asset-discoverable` | LIVE | 1,285 words · 4 body sections · pass | 4 Q | replace: looks like a product screen | OK | 18 inbound · 0 broken | FAIL: images (3 of 3 need replacing) |
| 395 | Give Your Creative Team One Source of Truth | `/get-started/give-your-creative-team-one-source-of-truth` | LIVE | 1,188 words · 4 body sections · pass | 3 Q | OK | OK | 78 inbound · 0 broken | FAIL: images (1 of 2 need replacing) |
| 396 | Build a Smarter Creative Workflow | `/get-started/build-a-smarter-creative-workflow` | LIVE | 981 words · 4 body sections · pass | 3 Q | replace: another organisation's name or logo | OK | 70 inbound · 0 broken | FAIL: images (2 of 3 need replacing) |
| 397 | Scale Your Creative Library | `/get-started/scale-your-creative-library` | LIVE | 1,442 words · 5 body sections · pass | 3 Q | OK | OK | 57 inbound · 0 broken | PASS |
| 398 | Turn Your Asset Library Into Intelligence | `/get-started/turn-your-asset-library-into-intelligence` | LIVE | framed · 806 words · 3 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 28 inbound · 0 broken | FAIL: images (1 of 2 need replacing) |
| 399 | Bring Order to Creative Chaos | `/get-started/bring-order-to-creative-chaos` | LIVE | 1,251 words · 4 body sections · pass | 4 Q | replace: another organisation's name or logo | OK | 32 inbound · 0 broken | FAIL: images (2 of 2 need replacing) |
| 400 | The Future of Creative Asset Management | `/get-started/future-of-creative-asset-management` | LIVE | 1,045 words · 3 body sections · pass | 3 Q | OK | OK | 4 inbound · 0 broken | PASS |
