# GetSibu website — PDF-to-website compliance audit

> **Audit only.** No page, component, content, URL, CSS or SEO setting was changed to produce this report. The only files added are this report and [`pdf-page-mapping.csv`](pdf-page-mapping.csv).
>
> **Date:** 2026-09-14 · **Source of truth:** `docs/source/Getsibu.pdf` (extracted as `content/source/pdf-pages.json`, 400 topics) · **Build audited:** the current production build in `.next` (`BUILD_ID` 2026-09-14 17:52), served locally with `next start`.
>
> **Question answered:** *If we take `Getsibu.pdf` in hand and check every topic/page, is the current website really built the way the PDF defines it?*

---

## 1. Executive summary

**Short answer: the website follows the PDF's *architecture* almost exactly, but it does not yet follow the PDF's *content direction* for most pages.**

What the evidence shows, topic by topic (all 400 rows are in §4 and in `pdf-page-mapping.csv`):

| Question | Result | Evidence |
| --- | --- | --- |
| Is every PDF topic accounted for? | **Yes — 400 / 400.** None silently omitted. | 355 live pages (337 published + 18 framed), 41 held, 4 merged duplicates; all 400 in the inventory, all 396 canonical URLs in the route matrix |
| Is each live topic its own page (no fake coverage)? | **Yes.** One PDF topic = one URL; no topic is represented only by a generic page. | 396 canonical URLs, 0 duplicate paths; the only redirects are held topics (45) and 2 legacy aliases |
| Is the PDF hierarchy preserved? | **Yes.** Every PDF group maps to one section; the 20 exceptions are recorded decisions. | §10.1 |
| Can a reader tell what each page is about without its title? | **Yes for 352 of 355 live pages.** 3 live pages fail. | §9 |
| Does each page *develop* its topic (the PDF's "expand each topic into Hero → Introduction → Features → Benefits → Workflow → Use Case → FAQ → CTA")? | **Only 61 of 355 live pages (17 %).** | §8, §9 |
| Is copy repeated across pages (the PDF says "while avoiding repetitive copy across pages")? | **Yes, substantially.** 95 live pages are near-duplicates of a sibling; 7 are duplicates. | §14 |
| Were claims or content invented? | **No.** 0 unsupported product claims, 0 placeholders, 0 blocked-claim leaks. | §6, §7 |

**Why the content gap exists.** The PDF gives each topic a title and one paragraph of **7–58 words (median 15)**. Its closing note says each paragraph "can then be expanded into a consistent page structure such as Hero → Introduction → Features → Benefits → Workflow → Use Case → FAQ → CTA, while avoiding repetitive copy across pages." The project's non-negotiable rule is never to invent product copy. The composer therefore expanded pages only with *other* PDF paragraphs. The result is honest, but:

- on **71 pages** the only topic-specific text is the page's own PDF paragraph (THIN);
- on **205 pages** the topic is introduced and then touched in at most one further section; the rest is related-topic context;
- the most reused PDF statements appear on up to **66 pages**.

These pages are finished, accurate and well linked, but many of them read as "a PDF paragraph placed inside a template". This is exactly the failure mode the audit brief asks about. Closing the gap needs **per-topic source material from GetSibu**; the site cannot invent it (§20, F1).

**Overall topic status (400 PDF topics):**

| PASS | PARTIAL | FAIL | BLOCKED — UNCONFIRMED CLAIM |
| --- | --- | --- | --- |
| **39** (9.8 %) | **313** (78.3 %) | **3** (0.8 %) | **45** (11.3 %) |

A topic is PASS only when its page is live, identifiable without the title, *develops* the topic in at least two sections, has an appropriate structure, and is not a near-duplicate. PARTIAL almost always means "correct and identifiable, but thin, repetitive or framed".

---

## 2. Final verdict

### 🟡 MOSTLY PDF-COMPLIANT

**Why not 🟢:**

- Only 39 of 400 topics fully pass.
- The PDF's explicit content direction (expand each topic, avoid repetitive copy) is met by a minority of pages: 61 pages develop their topic, and 95 are near-duplicates.
- 3 live pages do not discuss the topic named in their title.
- 7 pages are duplicates of a sibling.

**Why not 🔴:**

- **Architecture:** every one of the 400 PDF topics is accounted for, with the correct hierarchy, semantic URLs, navigation, hubs and internal links (0 orphans).
- **Content:** every published page carries its own PDF paragraph in full (336). Every other body sentence also comes from the PDF; only headings and labels are editorial. Nothing is generic SaaS filler or invented.
- **Blocked topics:** the 45 unconfirmed-claim topics are held safely and remain republishable.
- **Nature of the gap:** major portions are not missing or replaced. The gap is one of *depth and repetition*, concentrated in identifiable pages (lists in §9, §14 and the CSV).

**The verdict is at the lower edge of 🟡.** The content correction is systemic, affecting roughly 3 in 4 live pages, not a handful. The site should **not** be described as "following the PDF" on content until at least the critical fixes in §17 are done.

---

## 3. PDF topic coverage

### 3.1 Method (how every topic was checked)

All checks are reproducible scripts over the real build. They are not committed; they live in the gitignored `.tmp/audit/`.

1. **PDF extraction.** All 400 topics were read from `content/source/pdf-pages.json` (generated from `Getsibu.pdf`). Each has a number, title, paragraph and PDF group, and the 18 group headings match `docs/source/Getsibu.txt`.
2. **Implementation data.** Each topic was joined to:
   - its inventory entry (`content/generated/inventory.json`);
   - its composed sections (`page-sections.json`);
   - its route-matrix row;
   - the sitemap (`.next/server/app/sitemap.xml.body`);
   - the search index;
   - the navigation model;
   - **the built HTML page** (`.next/server/app/**.html`).
3. **Rendered checks per live page:** title, H1, meta description, canonical, JSON-LD types, breadcrumb, whether the page's own PDF paragraph is rendered, and inbound links from every other built page.
4. **Topic match — the "remove the title" test.** Two parts:
   - **Automated screen:** every distinctive word of the PDF title (stemmed, acronyms expanded) must appear in the page's rendered content with the H1, breadcrumb, related links and CTA removed, **and** the page's own PDF paragraph must be rendered.
   - **Manual adjudication:** every page the screen flagged (25) and every framed page (18) was read by hand.
5. **Content match — topic depth.** Each content section beyond the hero was examined item by item. An item counts as *topic-specific* only if it is the page's own PDF text, or it names the full topic concept (all distinctive title terms; for 3+ terms, all but one).
   - **developed** = topic-specific material in ≥ 2 sections beyond the hero, with ≥ 40 topic-specific words → PASS.
   - **introduced** = the hero plus at most one further topic section → PARTIAL.
   - **thin** = the topic appears only in the hero paragraph → PARTIAL, flagged.
   - **withheld** = framed page (own paragraph not publishable) → PARTIAL.
   - **absent** = topic not identifiable → FAIL.
   - *Calibration:* 16 pages were read manually against the automated depth class. 15 agreed. In 1 (Asset Recovery) the automated class was *harsher*: it said "thin" where a reader would say "introduced", because the page's "Restore" step is a synonym the term match does not catch. Both classes map to PARTIAL, so no status changed.
6. **Structure match.** Sections were mapped to the eight PDF elements:
   - **Hero:** hero.
   - **Introduction:** the page's own paragraph, or a definition or statement section.
   - **Features:** capabilities, split, alternating, matrix, layers, media or editorial.
   - **Benefits:** before/after or comparison.
   - **Workflow:** workflow, process, timeline or story.
   - **Use case:** a content section citing PDF 211–240, or the page is a use case.
   - **FAQ** and **CTA.**

   **PASS** = hero + introduction + CTA + at least 2 of the 5 middle elements (the brief says not to require all eight mechanically). **PARTIAL** = introduction or ≥ 2 middle elements, not both. **FAIL** = otherwise.
7. **Duplication.** 5-word shingle overlap (Jaccard) of each page's rendered prose, excluding figures, related links and CTA, against every other live page (62,835 pairs).
   - **Duplicate:** overlap ≥ 0.8.
   - **Near-duplicate:** overlap ≥ 0.6.
8. **Status.**
   - **BLOCKED — UNCONFIRMED CLAIM:** held (or merged into a held page).
   - **FAIL:** topic not identifiable.
   - **PASS:** topic, content and structure all PASS, and not a (near-)duplicate.
   - **PARTIAL:** otherwise.

### 3.2 Coverage by PDF group

| PDF group | Topics | Published | Framed | Held / merged | PASS | PARTIAL | FAIL | BLOCKED | Thin | (Near-)duplicate | Website section (topics) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1-10 Platform | 10 | 8 | 2 | 0 | 1 | 9 | 0 | 0 | 3 | 2 | `/` (1), `/platform` (9) |
| 11-30 Core Product Pages | 20 | 19 | 1 | 0 | 5 | 15 | 0 | 0 | 2 | 1 | `/features/search-and-discovery` (20) |
| 31-60 AI Features | 30 | 24 | 3 | 3 | 2 | 24 | 1 | 3 | 3 | 7 | `/features/ai` (30) |
| 61-90 Collaboration | 30 | 30 | 0 | 0 | 8 | 22 | 0 | 0 | 4 | 2 | `/features/collaboration` (30) |
| 91-120 Versioning and Asset Management | 30 | 30 | 0 | 0 | 1 | 29 | 0 | 0 | 11 | 21 | `/features/asset-management` (30) |
| 121-150 Storage and Ingestion | 30 | 24 | 0 | 6 | 3 | 21 | 0 | 6 | 5 | 7 | `/storage` (30) |
| 151-180 Permissions and Multi-Tenancy | 30 | 29 | 1 | 0 | 0 | 30 | 0 | 0 | 4 | 18 | `/permissions` (30) |
| 181-210 Analytics | 30 | 30 | 0 | 0 | 3 | 27 | 0 | 0 | 6 | 7 | `/analytics` (30) |
| 211-240 Use Cases | 30 | 27 | 3 | 0 | 2 | 27 | 1 | 0 | 11 | 9 | `/use-cases` (30) |
| 241-260 Integrations | 20 | 7 | 1 | 12 | 2 | 6 | 0 | 12 | 0 | 2 | `/integrations` (8), `/storage` (4), `/developers` (8) |
| 261-280 API and Developer Pages | 20 | 14 | 1 | 5 | 1 | 14 | 0 | 5 | 0 | 5 | `/developers` (20) |
| 281-300 Migration | 20 | 15 | 2 | 3 | 2 | 14 | 1 | 3 | 1 | 7 | `/migration` (20) |
| 301-320 Architecture and Performance | 20 | 19 | 1 | 0 | 3 | 17 | 0 | 0 | 3 | 2 | `/architecture` (20) |
| 321-340 Security and Compliance | 20 | 10 | 0 | 10 | 1 | 9 | 0 | 10 | 1 | 0 | `/security` (20) |
| 341-360 Pricing, Plans and Business Value | 20 | 16 | 1 | 3 | 0 | 17 | 0 | 3 | 12 | 3 | `/pricing` (7), `/business-value` (13) |
| 361-380 Resources and Education | 20 | 18 | 0 | 2 | 4 | 14 | 0 | 2 | 0 | 0 | `/resources` (20) |
| 381-390 FAQ Pages | 10 | 8 | 1 | 1 | 1 | 8 | 0 | 1 | 0 | 0 | `/faq` (10) |
| 391-400 Final Conversion Pages | 10 | 9 | 1 | 0 | 0 | 10 | 0 | 0 | 5 | 2 | `/get-started` (10) |
| **Total** | **400** | **337** | **18** | **45** | **39** | **313** | **3** | **45** | **71** | **95** | |


### 3.3 The topics named in the audit brief

Every topic named in the brief exists in the PDF, with one exception. "Asset Version Management" is not a PDF title; the nearest are 91 Creative Asset Versioning and 97–99 Video, Image and Document Version Management. Several brief topics exist twice in the PDF (Bulk Import 130/291, Metadata Preservation 132/293, Folder Mapping 133/294, Storage Analytics 183 and Storage Growth Analytics 149, Google Drive/Dropbox/OneDrive/AWS S3 122–125/242–245); both copies are listed.


**Discovery**

| Brief topic | PDF page → title | Website URL | Status |
| --- | --- | --- | --- |
| Asset Metadata Search | 23 Asset Metadata Search | `/features/asset-metadata-search` | PARTIAL |
| Creative File Discovery | 24 Creative File Discovery | `/features/creative-file-discovery` | PARTIAL |
| Searchable Video Library | 25 Searchable Video Library | `/features/searchable-video-library` | PARTIAL |
| Searchable Image Library | 26 Searchable Image Library | `/features/searchable-image-library` | PARTIAL |
| Searchable Document Library | 27 Searchable Document Library | `/features/searchable-document-library` | PASS |
| Searchable Audio Library | 28 Searchable Audio Library | `/features/searchable-audio-library` | PARTIAL |
| Creative Library Navigation | 29 Creative Library Navigation | `/features/creative-library-navigation` | PARTIAL |
| Asset Discovery Workflow | 30 Asset Discovery Workflow | `/features/asset-discovery-workflow` | PARTIAL |

**AI**

| Brief topic | PDF page → title | Website URL | Status |
| --- | --- | --- | --- |
| AI-Assisted Tagging | 31 AI-Assisted Tagging | `/features/ai-assisted-tagging` | PASS |
| AI Vision Analysis | 32 AI Vision Analysis | `/features/ai-vision-analysis` | PARTIAL |
| AI Scene Detection | 33 AI Scene Detection | `/features/ai-scene-detection` | BLOCKED — UNCONFIRMED CLAIM |
| AI Object Detection | 34 AI Object Detection | `/features/ai-object-detection` | PARTIAL |
| AI Mood Detection | 35 AI Mood Detection | `/features/ai-mood-detection` | PARTIAL |
| AI Colour Detection | 36 AI Colour Detection | `/features/ai-colour-detection` | PARTIAL |
| AI Face Grouping | 37 AI Face Grouping | `/features/ai-face-grouping` | BLOCKED — UNCONFIRMED CLAIM |
| AI OCR | 38 AI OCR | `/features/ai-ocr` | PARTIAL |
| AI Semantic Search | 39 AI Semantic Search | `/features/ai-semantic-search` | PARTIAL |
| AI Duplicate Detection | 40 AI Duplicate Detection | `/features/ai-duplicate-detection` | PARTIAL |
| AI Auto Collections | 41 AI Auto Collections | `/features/ai-auto-collections` | BLOCKED — UNCONFIRMED CLAIM |
| AI Asset Classification | 42 AI Asset Classification | `/features/ai-asset-classification` | PARTIAL |

**Versioning / Lifecycle / Governance**

| Brief topic | PDF page → title | Website URL | Status |
| --- | --- | --- | --- |
| Asset Version Management *(not a PDF title; nearest)* | 91 Creative Asset Versioning<br>97 Video Version Management<br>98 Image Version Management<br>99 Document Version Management | `/features/creative-asset-versioning`<br>`/features/video-version-management`<br>`/features/image-version-management`<br>`/features/document-version-management` | PARTIAL<br>PARTIAL<br>PARTIAL<br>PARTIAL |
| Creative Revision Tracking | 100 Creative Revision Tracking | `/features/creative-revision-tracking` | PARTIAL |
| Asset Lifecycle | 101 Asset Lifecycle Management<br>107 Creative Asset Lifecycle | `/features/asset-lifecycle-management`<br>`/features/creative-asset-lifecycle` | PARTIAL<br>PARTIAL |
| Asset Status | 102 Asset Status Management | `/features/asset-status-management` | PARTIAL |
| Approved Asset Library | 103 Approved Asset Library | `/features/approved-asset-library` | PASS |
| Expiring Assets | 104 Expiring Creative Assets | `/features/expiring-creative-assets` | PARTIAL |
| Brand Guardrail Tags | 105 Brand Guardrail Tags | `/features/brand-guardrail-tags` | PARTIAL |
| Usage Tracking | 106 Asset Usage Tracking | `/features/asset-usage-tracking` | PARTIAL |
| Archiving | 108 Asset Archiving | `/features/asset-archiving` | PARTIAL |
| Deletion | 109 Asset Deletion | `/features/asset-deletion` | PARTIAL |
| Recovery | 110 Asset Recovery | `/features/asset-recovery` | PARTIAL |
| Ownership | 115 Asset Ownership | `/features/asset-ownership` | PARTIAL |
| Attribution | 116 Asset Attribution | `/features/asset-attribution` | PARTIAL |
| History | 117 Asset History | `/features/asset-history` | PARTIAL |
| Activity | 118 Asset Activity | `/features/asset-activity` | PARTIAL |
| Audit Trail | 119 Asset Audit Trail | `/features/asset-audit-trail` | PARTIAL |
| Complete Asset Management | 120 Complete Asset Management | `/features/complete-asset-management` | PARTIAL |

**Storage / Ingestion**

| Brief topic | PDF page → title | Website URL | Status |
| --- | --- | --- | --- |
| Automated Asset Ingestion | 121 Automated Asset Ingestion | `/storage/automated-asset-ingestion` | PARTIAL |
| Google Drive | 122 Google Drive Integration<br>242 Google Drive Integration | `/storage/google-drive`<br>`/storage/google-drive` | BLOCKED — UNCONFIRMED CLAIM<br>BLOCKED — UNCONFIRMED CLAIM |
| Dropbox | 123 Dropbox Integration<br>243 Dropbox Integration | `/storage/dropbox`<br>`/storage/dropbox` | BLOCKED — UNCONFIRMED CLAIM<br>BLOCKED — UNCONFIRMED CLAIM |
| OneDrive | 124 OneDrive Integration<br>244 OneDrive Integration | `/storage/onedrive`<br>`/storage/onedrive` | BLOCKED — UNCONFIRMED CLAIM<br>BLOCKED — UNCONFIRMED CLAIM |
| AWS S3 | 125 AWS S3 Integration<br>245 AWS S3 Integration | `/storage/aws-s3`<br>`/storage/aws-s3` | BLOCKED — UNCONFIRMED CLAIM<br>BLOCKED — UNCONFIRMED CLAIM |
| Local NAS | 126 Local NAS Integration | `/storage/local-nas` | BLOCKED — UNCONFIRMED CLAIM |
| Drag & Drop Upload | 127 Drag and Drop Upload | `/storage/drag-and-drop-upload` | PARTIAL |
| Watch Folder | 128 Watch Folder Ingestion | `/storage/watch-folder-ingestion` | PARTIAL |
| Automated Media Import | 129 Automated Media Import | `/storage/automated-media-import` | PARTIAL |
| Bulk Import | 130 Bulk Asset Import<br>291 Bulk Import | `/storage/bulk-asset-import`<br>`/migration/bulk-import` | PARTIAL<br>PASS |
| Large Library Migration | 131 Large Library Migration | `/storage/large-library-migration` | PARTIAL |
| Metadata Preservation | 132 Metadata Preservation<br>293 Migration Metadata Preservation | `/storage/metadata-preservation`<br>`/migration/migration-metadata-preservation` | PARTIAL<br>PARTIAL |
| Folder Mapping | 133 Folder Mapping<br>294 Migration Folder Mapping | `/storage/folder-mapping`<br>`/migration/migration-folder-mapping` | PARTIAL<br>PARTIAL |
| Resumable Uploads | 137 Resumable Uploads | `/storage/resumable-uploads` | PARTIAL |
| Chunked Uploads | 138 Chunked Uploads | `/storage/chunked-uploads` | PARTIAL |
| High-Volume Uploads | 139 High-Volume Media Uploads | `/storage/high-volume-media-uploads` | PARTIAL |
| 10 GB File Uploads | 140 10 GB File Uploads | `/storage/10-gb-file-uploads` | BLOCKED — UNCONFIRMED CLAIM |
| Upload Progress | 141 Upload Progress | `/storage/upload-progress` | PARTIAL |
| Parallel Uploads | 142 Parallel Uploads | `/storage/parallel-uploads` | PARTIAL |
| Asset Processing | 143 Asset Processing | `/storage/asset-processing` | PASS |
| AI Processing Queue | 144 AI Processing Queue | `/storage/ai-processing-queue` | PARTIAL |
| Thumbnail Generation | 146 Asset Thumbnail Generation | `/storage/asset-thumbnail-generation` | PARTIAL |
| Streaming Preview | 147 Streaming Media Preview<br>306 Streaming Previews | `/storage/streaming-media-preview`<br>`/architecture/streaming-previews` | PASS<br>PARTIAL |
| Storage Analytics | 183 Storage Analytics<br>149 Storage Growth Analytics | `/analytics/storage-analytics`<br>`/storage/storage-growth-analytics` | PASS<br>PARTIAL |
| Centralised Media Storage | 150 Centralised Media Storage | `/storage/centralised-media-storage` | PARTIAL |

**Permissions / Multi-Tenancy**

| Brief topic | PDF page → title | Website URL | Status |
| --- | --- | --- | --- |
| Creative Asset Permissions | 151 Creative Asset Permissions | `/permissions/creative-asset-permissions` | PARTIAL |
| Folder-Level Permissions | 152 Folder-Level Permissions | `/permissions/folder-level-permissions` | PARTIAL |
| RBAC | 153 Role-Based Access Control<br>325 RBAC Security | `/permissions/role-based-access-control`<br>`/security/rbac-security` | PARTIAL<br>PARTIAL |
| Default-Deny | 154 Default-Deny Access<br>337 Default-Deny Security | `/permissions/default-deny-access`<br>`/security/default-deny-security` | PARTIAL<br>PARTIAL |
| Manager Permissions | 155 Manager Permissions | `/permissions/manager-permissions` | PARTIAL |
| Editor Permissions | 156 Editor Permissions | `/permissions/editor-permissions` | PARTIAL |
| Individual Permissions | 157 Individual Permissions | `/permissions/individual-permissions` | PARTIAL |
| Organisation Admin Controls | 158 Organisation Admin Controls | `/permissions/organisation-admin-controls` | PARTIAL |
| Multi-Tenant DAM | 160 Multi-Tenant Digital Asset Management | `/permissions/multi-tenant-digital-asset-management` | PARTIAL |
| Client Tenant Isolation | 161 Client Tenant Isolation | `/permissions/client-tenant-isolation` | PARTIAL |
| Agency Multi-Tenancy | 162 Agency Multi-Tenancy | `/permissions/agency-multi-tenancy` | PARTIAL |
| Per-Client Storage | 163 Per-Client Storage | `/permissions/per-client-storage` | PARTIAL |
| Per-Client AI Keys | 164 Per-Client AI Keys | `/permissions/per-client-ai-keys` | PARTIAL |
| Per-Client Authentication | 165 Per-Client Authentication | `/permissions/per-client-authentication` | PARTIAL |
| White-Label | 166 White-Label Asset Management | `/permissions/white-label-asset-management` | PARTIAL |
| Client Asset Isolation | 167 Client Asset Isolation | `/permissions/client-asset-isolation` | PARTIAL |
| Agency Asset Management | 168 Agency Asset Management | `/permissions/agency-asset-management` | PARTIAL |
| Enterprise Permissions | 169 Enterprise Permissions | `/permissions/enterprise-permissions` | PARTIAL |
| Permission Auditing | 170 Permission Auditing | `/permissions/permission-auditing` | PARTIAL |
| Access History | 171 Access History | `/permissions/access-history` | PARTIAL |
| Secure Asset Sharing | 172 Secure Asset Sharing | `/permissions/secure-asset-sharing` | PARTIAL |

**Analytics**

| Brief topic | PDF page → title | Website URL | Status |
| --- | --- | --- | --- |
| Creative Asset Analytics | 181 Creative Asset Analytics | `/analytics/creative-asset-analytics` | PASS |
| Asset Usage Analytics | 182 Asset Usage Analytics | `/analytics/asset-usage-analytics` | PARTIAL |
| Storage Analytics | 183 Storage Analytics | `/analytics/storage-analytics` | PASS |
| Upload Analytics | 184 Upload Analytics | `/analytics/upload-analytics` | PARTIAL |
| Contributor Analytics | 185 Contributor Analytics | `/analytics/contributor-analytics` | PARTIAL |
| Tag Analytics | 186 Tag Analytics | `/analytics/tag-analytics` | PARTIAL |
| Trend Analytics | 187 Creative Library Trends | `/analytics/creative-library-trends` | PARTIAL |
| Daily / Weekly / Monthly Analytics | 188 Daily Library Analytics<br>189 Weekly Library Analytics<br>190 Monthly Library Analytics | `/analytics/daily-library-analytics`<br>`/analytics/weekly-library-analytics`<br>`/analytics/monthly-library-analytics` | PARTIAL<br>PARTIAL<br>PARTIAL |
| Activity Dashboard | 191 Asset Activity Dashboard | `/analytics/asset-activity-dashboard` | PARTIAL |
| Storage by Category | 192 Storage by Category | `/analytics/storage-by-category` | PARTIAL |
| Most Searched Tags | 193 Most Searched Tags | `/analytics/most-searched-tags` | PARTIAL |
| Top Contributors | 194 Top Contributors | `/analytics/top-contributors` | PARTIAL |
| Creative Operations Analytics | 195 Creative Operations Analytics | `/analytics/creative-operations-analytics` | PARTIAL |
| Library Health | 196 Library Health Analytics | `/analytics/library-health-analytics` | PARTIAL |
| Asset Access | 197 Asset Access Analytics | `/analytics/asset-access-analytics` | PARTIAL |
| Folder Access | 198 Folder Access Analytics | `/analytics/folder-access-analytics` | PARTIAL |
| Team Analytics | 199 Creative Team Analytics | `/analytics/creative-team-analytics` | PASS |
| Marketing Analytics | 200 Marketing Asset Analytics | `/analytics/marketing-asset-analytics` | PARTIAL |
| Production Analytics | 201 Production Analytics | `/analytics/production-analytics` | PARTIAL |
| Agency Analytics | 202 Agency Analytics | `/analytics/agency-analytics` | PARTIAL |
| Brand Analytics | 203 Brand Asset Analytics | `/analytics/brand-asset-analytics` | PARTIAL |
| Performance Insights | 204 Asset Performance Insights | `/analytics/asset-performance-insights` | PARTIAL |
| Reporting | 205 Creative Library Reporting<br>209 Library Growth Reporting | `/analytics/creative-library-reporting`<br>`/analytics/library-growth-reporting` | PARTIAL<br>PARTIAL |
| KPIs | 207 Digital Asset KPIs | `/analytics/digital-asset-kpis` | PARTIAL |
| Workflow Metrics | 208 Creative Workflow Metrics | `/analytics/creative-workflow-metrics` | PARTIAL |

**API / Developer**

| Brief topic | PDF page → title | Website URL | Status |
| --- | --- | --- | --- |
| Asset Metadata API | 264 Asset Metadata API | `/developers/asset-metadata-api` | PARTIAL |
| Asset Tags API | 265 Asset Tags API | `/developers/asset-tags-api` | PARTIAL |
| Asset Comments API | 266 Asset Comments API | `/developers/asset-comments-api` | PARTIAL |
| Approval API | 267 Approval API | `/developers/approval-api` | PARTIAL |
| Webhooks | 252 Webhooks | `/developers/webhooks` | PARTIAL |
| API Documentation | 273 API Documentation | `/developers/api-documentation` | PARTIAL |
| OpenAPI | 274 OpenAPI Specification | `/developers/openapi-specification` | BLOCKED — UNCONFIRMED CLAIM |
| Developer Authentication | 275 Developer Authentication | `/developers/developer-authentication` | PARTIAL |
| API Tenant Isolation | 276 API Tenant Isolation | `/developers/api-tenant-isolation` | PARTIAL |
| API Security | 277 API Security | `/developers/api-security` | PARTIAL |
| Developer Automation | 278 Developer Automation | `/developers/developer-automation` | PARTIAL |
| Custom Asset Applications | 279 Custom Asset Applications | `/developers/custom-asset-applications` | PARTIAL |
| GetSibu for Developers | 280 GetSibu for Developers | `/developers` | PASS |

**Migration**

| Brief topic | PDF page → title | Website URL | Status |
| --- | --- | --- | --- |
| Migrate to GetSibu | 281 Migrate to GetSibu | `/migration` | PARTIAL |
| Creative Library Migration | 282 Creative Library Migration | `/migration/creative-library-migration` | PARTIAL |
| Google Drive Migration | 283 Google Drive Migration | `/migration/google-drive-migration` | BLOCKED — UNCONFIRMED CLAIM |
| Dropbox Migration | 284 Dropbox Migration | `/migration/dropbox-migration` | BLOCKED — UNCONFIRMED CLAIM |
| S3 Migration | 285 S3 Migration | `/migration/s3-migration` | BLOCKED — UNCONFIRMED CLAIM |
| Metadata Migration | 286 Metadata Migration | `/migration/metadata-migration` | PASS |
| Folder Structure Migration | 287 Folder Structure Migration | `/migration/folder-structure-migration` | PARTIAL |
| Creative Data Migration | 288 Creative Data Migration | `/migration/creative-data-migration` | PARTIAL |
| DAM Migration Strategy | 289 DAM Migration Strategy | `/migration/dam-migration-strategy` | PARTIAL |
| Migration Planning | 290 Digital Asset Migration Planning | `/migration/digital-asset-migration-planning` | PARTIAL |
| Bulk Import | 291 Bulk Import | `/migration/bulk-import` | PASS |
| Migration Without Downtime | 292 Migration Without Downtime | `/migration/migration-without-downtime` | PARTIAL |
| Metadata Preservation | 293 Migration Metadata Preservation | `/migration/migration-metadata-preservation` | PARTIAL |
| Folder Mapping | 294 Migration Folder Mapping | `/migration/migration-folder-mapping` | PARTIAL |
| Permission Mapping | 295 Migration Permission Mapping | `/migration/migration-permission-mapping` | PARTIAL |
| Migration Verification | 296 Migration Verification | `/migration/migration-verification` | PARTIAL |

**Resources / Education (all PDF topics)**

| Brief topic | PDF page → title | Website URL | Status |
| --- | --- | --- | --- |
| What Is Digital Asset Management? | 361 What Is Digital Asset Management? | `/resources/what-is-digital-asset-management` | PASS |
| What Is AI Asset Management? | 362 What Is AI Asset Management? | `/resources/what-is-ai-asset-management` | PASS |
| What Is Semantic Search? | 363 What Is Semantic Search? | `/resources/what-is-semantic-search` | PARTIAL |
| What Is AI Tagging? | 364 What Is AI Tagging? | `/resources/what-is-ai-tagging` | PARTIAL |
| What Is Scene Detection? | 365 What Is Scene Detection? | `/resources/what-is-scene-detection` | BLOCKED — UNCONFIRMED CLAIM |
| What Is OCR in DAM? | 366 What Is OCR in DAM? | `/resources/what-is-ocr-in-dam` | PARTIAL |
| What Is Face Grouping? | 367 What Is Face Grouping? | `/resources/what-is-face-grouping` | BLOCKED — UNCONFIRMED CLAIM |
| What Is Duplicate Detection? | 368 What Is Duplicate Detection? | `/resources/what-is-duplicate-detection` | PASS |
| What Is Asset Versioning? | 369 What Is Asset Versioning? | `/resources/what-is-asset-versioning` | PASS |
| What Is Creative Approval? | 370 What Is Creative Approval? | `/resources/what-is-creative-approval` | PARTIAL |
| What Is Creative Governance? | 371 What Is Creative Governance? | `/resources/what-is-creative-governance` | PARTIAL |
| What Is Multi-Tenant DAM? | 372 What Is Multi-Tenant DAM? | `/resources/what-is-multi-tenant-dam` | PARTIAL |
| What Is a Creative Library? | 373 What Is a Creative Library? | `/resources/what-is-a-creative-library` | PARTIAL |
| What Is Asset Metadata? | 374 What Is Asset Metadata? | `/resources/what-is-asset-metadata` | PARTIAL |
| What Is Asset Taxonomy? | 375 What Is Asset Taxonomy? | `/resources/what-is-asset-taxonomy` | PARTIAL |
| What Is a DAM Migration? | 376 What Is a DAM Migration? | `/resources/what-is-a-dam-migration` | PARTIAL |
| How AI Changes DAM | 377 How AI Changes DAM | `/resources/how-ai-changes-dam` | PARTIAL |
| Future of Digital Asset Management | 378 Future of Digital Asset Management | `/resources/future-of-digital-asset-management` | PARTIAL |
| Future of Creative Collaboration | 379 Future of Creative Collaboration | `/resources/future-of-creative-collaboration` | PARTIAL |
| Future of AI-Powered Creative Libraries | 380 Future of AI-Powered Creative Libraries | `/resources/future-of-ai-powered-creative-libraries` | PARTIAL |

**FAQ (all PDF topics)**

| Brief topic | PDF page → title | Website URL | Status |
| --- | --- | --- | --- |
| What Is GetSibu? | 381 What Is GetSibu? | `/faq/what-is-getsibu` | PARTIAL |
| Who Is GetSibu For? | 382 Who Is GetSibu For? | `/faq/who-is-getsibu-for` | PARTIAL |
| Does GetSibu Support AI Tagging? | 383 Does GetSibu Support AI Tagging? | `/faq/does-getsibu-support-ai-tagging` | PARTIAL |
| Can GetSibu Search Inside Documents? | 384 Can GetSibu Search Inside Documents? | `/faq/can-getsibu-search-inside-documents` | PARTIAL |
| Does GetSibu Support Video Comments? | 385 Does GetSibu Support Video Comments? | `/faq/does-getsibu-support-video-comments` | PARTIAL |
| Does GetSibu Support Versioning? | 386 Does GetSibu Support Versioning? | `/faq/does-getsibu-support-versioning` | PARTIAL |
| Does GetSibu Support Multiple Clients? | 387 Does GetSibu Support Multiple Clients? | `/faq/does-getsibu-support-multiple-clients` | PASS |
| Does GetSibu Have an API? | 388 Does GetSibu Have an API? | `/faq/does-getsibu-have-an-api` | PARTIAL |
| Does GetSibu Support SSO? | 389 Does GetSibu Support SSO? | `/faq/does-getsibu-support-sso` | BLOCKED — UNCONFIRMED CLAIM |
| Can GetSibu Integrate With Existing Tools? | 390 Can GetSibu Integrate With Existing Tools? | `/faq/can-getsibu-integrate-with-existing-tools` | PARTIAL |

**CTA / positioning**

| Brief topic | PDF page → title | Website URL | Status |
| --- | --- | --- | --- |
| Make Every Asset Discoverable | 394 Make Every Asset Discoverable | `/get-started/make-every-asset-discoverable` | PARTIAL |
| One Source of Truth | 395 Give Your Creative Team One Source of Truth<br>10 One Source of Truth for Creative Teams | `/get-started/give-your-creative-team-one-source-of-truth`<br>`/platform/one-source-of-truth-for-creative-teams` | PARTIAL<br>PARTIAL |
| Smarter Creative Workflow | 396 Build a Smarter Creative Workflow | `/get-started/build-a-smarter-creative-workflow` | PARTIAL |
| Scale Your Creative Library | 397 Scale Your Creative Library | `/get-started/scale-your-creative-library` | PARTIAL |
| Asset Library Intelligence | 398 Turn Your Asset Library Into Intelligence | `/get-started/turn-your-asset-library-into-intelligence` | PARTIAL |
| Bring Order to Creative Chaos | 399 Bring Order to Creative Chaos | `/get-started/bring-order-to-creative-chaos` | PARTIAL |
| Future of Creative Asset Management | 400 The Future of Creative Asset Management | `/get-started/future-of-creative-asset-management` | PARTIAL |
| (other conversion topics) | 391 Start Your Creative Library<br>392 Bring Your Creative Assets Together<br>393 Stop Searching Through Folders | `/get-started`<br>`/get-started/bring-your-creative-assets-together`<br>`/get-started/stop-searching-through-folders` | PARTIAL<br>PARTIAL<br>PARTIAL |


---

## 4. Page-by-page mapping

One row per PDF topic. **Evidence** abbreviations:
- **own** — words of topic-specific text rendered.
- **thin / introduced / developed / withheld** — content depth (§3.1).
- **≈ N (0.xx)** — prose overlap with PDF page N.
- **→ path** — held redirect target.

Full columns (sitemap, search, navigation, inbound links, structure elements, hero visual, claims, notes) are in [`pdf-page-mapping.csv`](pdf-page-mapping.csv).


### 1-10 Platform

| PDF Page | PDF Topic | Website URL | Exists | Published | Topic Match | Content Match | Structure Match | Status | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | GetSibu — Creative Asset Management Platform | `/` | Yes | Yes | PASS | PASS | PASS | PASS | authored homepage |
| 2 | The Operating System for Creative Libraries | `/platform` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 46w |
| 3 | AI-Powered Digital Asset Management | `/platform/ai-powered-digital-asset-management` | Yes | Framed | PARTIAL | PARTIAL | PARTIAL | PARTIAL | framed: paragraph withheld |
| 4 | Creative Library Management | `/platform/creative-library-management` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 71w |
| 5 | Intelligent Media Library | `/platform/intelligent-media-library` | Yes | Framed | PARTIAL | PARTIAL | PASS | PARTIAL | framed: paragraph withheld |
| 6 | Centralised Creative Asset Library | `/platform/centralised-creative-asset-library` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 37w |
| 7 | Modern Digital Asset Management | `/platform/modern-digital-asset-management` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 32w; ≈ 360 (0.65) |
| 8 | Creative Asset Organisation | `/platform/creative-asset-organisation` | Yes | Yes | PASS | PASS | PASS | PARTIAL | developed, 114w; ≈ 395 (0.601) |
| 9 | AI-Aware Asset Management | `/platform/ai-aware-asset-management` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 34w |
| 10 | One Source of Truth for Creative Teams | `/platform/one-source-of-truth-for-creative-teams` | Yes | Yes | PASS | PARTIAL | PARTIAL | PARTIAL | introduced, 39w |

### 11-30 Core Product Pages

| PDF Page | PDF Topic | Website URL | Exists | Published | Topic Match | Content Match | Structure Match | Status | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 11 | Creative Asset Search | `/features/creative-asset-search` | Yes | Yes | PASS | PASS | PASS | PASS | developed, 96w |
| 12 | AI Asset Discovery | `/features/ai-asset-discovery` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 37w |
| 13 | Media Search Platform | `/features/media-search-platform` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 33w |
| 14 | Semantic Creative Search | `/features/semantic-creative-search` | Yes | Yes | PASS | PASS | PASS | PASS | developed, 68w |
| 15 | OCR-Powered Asset Search | `/features/ocr-powered-asset-search` | Yes | Yes | PASS | PASS | PASS | PARTIAL | developed, 66w; ≈ 53 (0.621) |
| 16 | Search Across Creative Libraries | `/features/search-across-creative-libraries` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 32w |
| 17 | Saved Asset Searches | `/features/saved-asset-searches` | Yes | Yes | PASS | PASS | PASS | PASS | developed, 59w |
| 18 | Natural Language Asset Search | `/features/natural-language-asset-search` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 50w |
| 19 | Advanced Media Filters | `/features/advanced-media-filters` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 46w |
| 20 | Fast Asset Discovery | `/features/fast-asset-discovery` | Yes | Framed | PARTIAL | PARTIAL | PARTIAL | PARTIAL | framed: paragraph withheld |
| 21 | Creative Asset Indexing | `/features/creative-asset-indexing` | Yes | Yes | PASS | PASS | PASS | PASS | developed, 82w |
| 22 | Media Metadata Management | `/features/media-metadata-management` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 50w |
| 23 | Asset Metadata Search | `/features/asset-metadata-search` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 45w |
| 24 | Creative File Discovery | `/features/creative-file-discovery` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 55w |
| 25 | Searchable Video Library | `/features/searchable-video-library` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 42w |
| 26 | Searchable Image Library | `/features/searchable-image-library` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 36w |
| 27 | Searchable Document Library | `/features/searchable-document-library` | Yes | Yes | PASS | PASS | PASS | PASS | developed, 48w |
| 28 | Searchable Audio Library | `/features/searchable-audio-library` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 42w |
| 29 | Creative Library Navigation | `/features/creative-library-navigation` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 24w |
| 30 | Asset Discovery Workflow | `/features/asset-discovery-workflow` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 33w |

### 31-60 AI Features

| PDF Page | PDF Topic | Website URL | Exists | Published | Topic Match | Content Match | Structure Match | Status | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 31 | AI-Assisted Tagging | `/features/ai-assisted-tagging` | Yes | Yes | PASS | PASS | PASS | PASS | developed, 77w |
| 32 | AI Vision Analysis | `/features/ai-vision-analysis` | Yes | Framed | PARTIAL | PARTIAL | PASS | PARTIAL | framed: paragraph withheld |
| 33 | AI Scene Detection | `/features/ai-scene-detection` | Held | No | — | — | — | BLOCKED — UNCONFIRMED CLAIM | → `/features/practical-ai-for-creative-teams` (scene-detection) |
| 34 | AI Object Detection | `/features/ai-object-detection` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 24w |
| 35 | AI Mood Detection | `/features/ai-mood-detection` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 40w |
| 36 | AI Colour Detection | `/features/ai-colour-detection` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 27w |
| 37 | AI Face Grouping | `/features/ai-face-grouping` | Held | No | — | — | — | BLOCKED — UNCONFIRMED CLAIM | → `/features/practical-ai-for-creative-teams` (face-grouping) |
| 38 | AI OCR | `/features/ai-ocr` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 21w |
| 39 | AI Semantic Search | `/features/ai-semantic-search` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 37w |
| 40 | AI Duplicate Detection | `/features/ai-duplicate-detection` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 32w |
| 41 | AI Auto Collections | `/features/ai-auto-collections` | Held | No | — | — | — | BLOCKED — UNCONFIRMED CLAIM | → `/features/ai-library-organisation` (auto-collections) |
| 42 | AI Asset Classification | `/features/ai-asset-classification` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 18w; ≈ 46 (0.706) |
| 43 | AI Media Understanding | `/features/ai-media-understanding` | Yes | Yes | PASS | PASS | PASS | PARTIAL | developed, 59w; ≈ 50 (0.689) |
| 44 | AI Creative Intelligence | `/features/ai-creative-intelligence` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 45w |
| 45 | AI-Powered Asset Management | `/features/ai-powered-asset-management` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 23w |
| 46 | AI Tag Confidence | `/features/ai-tag-confidence` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 40w; ≈ 42 (0.706) |
| 47 | AI Tag Approval | `/features/ai-tag-approval` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 56w |
| 48 | AI Tag Override | `/features/ai-tag-override` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 47w |
| 49 | AI Creative Search | `/features/ai-creative-search` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 37w |
| 50 | AI Media Indexing | `/features/ai-media-indexing` | Yes | Yes | PASS | PASS | PASS | PARTIAL | developed, 56w; ≈ 43 (0.689) |
| 51 | AI-Powered Video Discovery | `/features/ai-powered-video-discovery` | Yes | Framed | PARTIAL | PARTIAL | PASS | PARTIAL | framed: paragraph withheld |
| 52 | AI-Powered Image Discovery | `/features/ai-powered-image-discovery` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 18w |
| 53 | AI Document Discovery | `/features/ai-document-discovery` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 18w; ≈ 15 (0.621) |
| 54 | AI Creative Workflow | `/features/ai-creative-workflow` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 60w |
| 55 | AI Media Automation | `/features/ai-media-automation` | Yes | Yes | PASS | PASS | PASS | PARTIAL | developed, 46w; ≈ 59 (0.714) |
| 56 | AI Asset Recommendations | `/features/ai-asset-recommendations` | Yes | Framed | FAIL | FAIL | PASS | FAIL | **topic absent** |
| 57 | AI Library Organisation | `/features/ai-library-organisation` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 53w |
| 58 | AI Asset Intelligence | `/features/ai-asset-intelligence` | Yes | Yes | PASS | PASS | PASS | PASS | developed, 53w |
| 59 | AI Creative Operations | `/features/ai-creative-operations` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 23w; ≈ 55 (0.714) |
| 60 | Practical AI for Creative Teams | `/features/practical-ai-for-creative-teams` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 28w |

### 61-90 Collaboration

| PDF Page | PDF Topic | Website URL | Exists | Published | Topic Match | Content Match | Structure Match | Status | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 61 | Creative Team Collaboration | `/features/creative-team-collaboration` | Yes | Yes | PASS | PASS | PASS | PASS | developed, 70w |
| 62 | Asset Comments | `/features/asset-comments` | Yes | Yes | PASS | PASS | PASS | PASS | developed, 55w |
| 63 | Threaded Comments | `/features/threaded-comments` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 40w |
| 64 | Video Timeline Comments | `/features/video-timeline-comments` | Yes | Yes | PASS | PASS | PASS | PASS | developed, 58w |
| 65 | Frame-Accurate Review | `/features/frame-accurate-review` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 36w |
| 66 | Team Mentions | `/features/team-mentions` | Yes | Yes | PASS | PASS | PASS | PASS | developed, 40w |
| 67 | Creative Approval Workflow | `/features/creative-approval-workflow` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 17w |
| 68 | Asset Approval | `/features/asset-approval` | Yes | Yes | PASS | PASS | PASS | PASS | developed, 132w |
| 69 | Creative Review | `/features/creative-review` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 106w |
| 70 | Campaign Review | `/features/campaign-review` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 14w |
| 71 | Brand Asset Approval | `/features/brand-asset-approval` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 19w |
| 72 | Client Review | `/features/client-review` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 16w |
| 73 | Team Feedback | `/features/team-feedback` | Yes | Yes | PASS | PASS | PASS | PASS | developed, 80w |
| 74 | Creative Feedback Management | `/features/creative-feedback-management` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 52w |
| 75 | Asset Discussion History | `/features/asset-discussion-history` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 12w; **dup** 86 (0.814) |
| 76 | Review Status | `/features/review-status` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 64w |
| 77 | Approval History | `/features/approval-history` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 60w |
| 78 | Team Asset Sharing | `/features/team-asset-sharing` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 44w |
| 79 | Shared Creative Views | `/features/shared-creative-views` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 16w |
| 80 | Creative Workflow Management | `/features/creative-workflow-management` | Yes | Yes | PASS | PASS | PASS | PASS | developed, 60w |
| 81 | Production Collaboration | `/features/production-collaboration` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 14w |
| 82 | Marketing Collaboration | `/features/marketing-collaboration` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 15w |
| 83 | Brand Collaboration | `/features/brand-collaboration` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 14w |
| 84 | Agency Collaboration | `/features/agency-collaboration` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 10w |
| 85 | Creative Team Communication | `/features/creative-team-communication` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 17w |
| 86 | Asset Mentions | `/features/asset-mentions` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 13w; **dup** 75 (0.814) |
| 87 | Collaborative Asset Review | `/features/collaborative-asset-review` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 34w |
| 88 | Remote Creative Collaboration | `/features/remote-creative-collaboration` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 15w |
| 89 | Creative Approval Management | `/features/creative-approval-management` | Yes | Yes | PASS | PASS | PASS | PASS | developed, 172w |
| 90 | Creative Team Workspace | `/features/creative-team-workspace` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 16w |

### 91-120 Versioning and Asset Management

| PDF Page | PDF Topic | Website URL | Exists | Published | Topic Match | Content Match | Structure Match | Status | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 91 | Creative Asset Versioning | `/features/creative-asset-versioning` | Yes | Yes | PASS | PASS | PASS | PARTIAL | developed, 115w; ≈ 97 (0.78) |
| 92 | File Version History | `/features/file-version-history` | Yes | Yes | PASS | PASS | PASS | PARTIAL | developed, 50w; ≈ 93 (0.699) |
| 93 | Asset Replacement | `/features/asset-replacement` | Yes | Yes | PASS | PASS | PASS | PARTIAL | developed, 59w; ≈ 92 (0.699) |
| 94 | Version Restore | `/features/version-restore` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 16w |
| 95 | Creative File History | `/features/creative-file-history` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 26w; ≈ 99 (0.761) |
| 96 | Campaign Asset Versioning | `/features/campaign-asset-versioning` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 13w; ≈ 115 (0.625) |
| 97 | Video Version Management | `/features/video-version-management` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 17w; ≈ 91 (0.78) |
| 98 | Image Version Management | `/features/image-version-management` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 15w; ≈ 97 (0.629) |
| 99 | Document Version Management | `/features/document-version-management` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 10w; ≈ 95 (0.761) |
| 100 | Creative Revision Tracking | `/features/creative-revision-tracking` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 30w; ≈ 99 (0.636) |
| 101 | Asset Lifecycle Management | `/features/asset-lifecycle-management` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 18w; ≈ 109 (0.678) |
| 102 | Asset Status Management | `/features/asset-status-management` | Yes | Yes | PASS | PASS | PASS | PARTIAL | developed, 48w; ≈ 108 (0.716) |
| 103 | Approved Asset Library | `/features/approved-asset-library` | Yes | Yes | PASS | PASS | PASS | PASS | developed, 122w |
| 104 | Expiring Creative Assets | `/features/expiring-creative-assets` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 36w |
| 105 | Brand Guardrail Tags | `/features/brand-guardrail-tags` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 34w |
| 106 | Asset Usage Tracking | `/features/asset-usage-tracking` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 14w; ≈ 187 (0.639) |
| 107 | Creative Asset Lifecycle | `/features/creative-asset-lifecycle` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 17w |
| 108 | Asset Archiving | `/features/asset-archiving` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 36w; ≈ 102 (0.716) |
| 109 | Asset Deletion | `/features/asset-deletion` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 22w; ≈ 102 (0.703) |
| 110 | Asset Recovery | `/features/asset-recovery` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 13w |
| 111 | Creative Library Maintenance | `/features/creative-library-maintenance` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 15w; ≈ 113 (0.658) |
| 112 | Duplicate Asset Management | `/features/duplicate-asset-management` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 39w |
| 113 | Asset Quality Management | `/features/asset-quality-management` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 11w; ≈ 109 (0.674) |
| 114 | Creative Asset Governance | `/features/creative-asset-governance` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 11w |
| 115 | Asset Ownership | `/features/asset-ownership` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 10w; ≈ 96 (0.625) |
| 116 | Asset Attribution | `/features/asset-attribution` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 14w; ≈ 118 (0.678) |
| 117 | Asset History | `/features/asset-history` | Yes | Yes | PASS | PASS | PASS | PARTIAL | developed, 73w; ≈ 119 (0.706) |
| 118 | Asset Activity | `/features/asset-activity` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 28w; ≈ 116 (0.678) |
| 119 | Asset Audit Trail | `/features/asset-audit-trail` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 13w; ≈ 117 (0.706) |
| 120 | Complete Asset Management | `/features/complete-asset-management` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 16w |

### 121-150 Storage and Ingestion

| PDF Page | PDF Topic | Website URL | Exists | Published | Topic Match | Content Match | Structure Match | Status | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 121 | Automated Asset Ingestion | `/storage/automated-asset-ingestion` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 39w |
| 122 | Google Drive Integration | `/storage/google-drive` | Held | No | — | — | — | BLOCKED — UNCONFIRMED CLAIM | → `/storage/centralised-media-storage` (storage-sources) |
| 123 | Dropbox Integration | `/storage/dropbox` | Held | No | — | — | — | BLOCKED — UNCONFIRMED CLAIM | → `/storage/centralised-media-storage` (storage-sources) |
| 124 | OneDrive Integration | `/storage/onedrive` | Held | No | — | — | — | BLOCKED — UNCONFIRMED CLAIM | → `/storage/centralised-media-storage` (storage-sources) |
| 125 | AWS S3 Integration | `/storage/aws-s3` | Held | No | — | — | — | BLOCKED — UNCONFIRMED CLAIM | → `/storage/centralised-media-storage` (storage-sources) |
| 126 | Local NAS Integration | `/storage/local-nas` | Held | No | — | — | — | BLOCKED — UNCONFIRMED CLAIM | → `/storage/centralised-media-storage` (storage-sources) |
| 127 | Drag and Drop Upload | `/storage/drag-and-drop-upload` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 23w |
| 128 | Watch Folder Ingestion | `/storage/watch-folder-ingestion` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 17w |
| 129 | Automated Media Import | `/storage/automated-media-import` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 11w |
| 130 | Bulk Asset Import | `/storage/bulk-asset-import` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 30w |
| 131 | Large Library Migration | `/storage/large-library-migration` | Yes | Yes | PASS | PARTIAL | PARTIAL | PARTIAL | introduced, 14w; ≈ 289 (0.767) |
| 132 | Metadata Preservation | `/storage/metadata-preservation` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 16w |
| 133 | Folder Mapping | `/storage/folder-mapping` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 18w |
| 134 | Creative Migration | `/storage/creative-migration` | Yes | Yes | PASS | PASS | PASS | PASS | developed, 45w |
| 135 | Digital Asset Import | `/storage/digital-asset-import` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 43w |
| 136 | Media Upload Management | `/storage/media-upload-management` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 12w; ≈ 142 (0.775) |
| 137 | Resumable Uploads | `/storage/resumable-uploads` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 34w |
| 138 | Chunked Uploads | `/storage/chunked-uploads` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 37w; ≈ 142 (0.782) |
| 139 | High-Volume Media Uploads | `/storage/high-volume-media-uploads` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 19w; ≈ 141 (0.642) |
| 140 | 10 GB File Uploads | `/storage/10-gb-file-uploads` | Held | No | — | — | — | BLOCKED — UNCONFIRMED CLAIM | → `/storage/media-upload-management` (upload-10gb) |
| 141 | Upload Progress | `/storage/upload-progress` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 26w; ≈ 139 (0.642) |
| 142 | Parallel Uploads | `/storage/parallel-uploads` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 22w; ≈ 138 (0.782) |
| 143 | Asset Processing | `/storage/asset-processing` | Yes | Yes | PASS | PASS | PASS | PASS | developed, 82w |
| 144 | AI Processing Queue | `/storage/ai-processing-queue` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 33w |
| 145 | Media Processing Status | `/storage/media-processing-status` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 20w |
| 146 | Asset Thumbnail Generation | `/storage/asset-thumbnail-generation` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 29w |
| 147 | Streaming Media Preview | `/storage/streaming-media-preview` | Yes | Yes | PASS | PASS | PASS | PASS | developed, 41w |
| 148 | Creative Storage Management | `/storage/creative-storage-management` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 55w |
| 149 | Storage Growth Analytics | `/storage/storage-growth-analytics` | Yes | Yes | PASS | PASS | PASS | PARTIAL | developed, 63w; ≈ 187 (0.608) |
| 150 | Centralised Media Storage | `/storage/centralised-media-storage` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 48w |

### 151-180 Permissions and Multi-Tenancy

| PDF Page | PDF Topic | Website URL | Exists | Published | Topic Match | Content Match | Structure Match | Status | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 151 | Creative Asset Permissions | `/permissions/creative-asset-permissions` | Yes | Yes | PASS | PARTIAL | PARTIAL | PARTIAL | introduced, 48w |
| 152 | Folder-Level Permissions | `/permissions/folder-level-permissions` | Yes | Yes | PASS | PASS | PASS | PARTIAL | developed, 44w; ≈ 159 (0.635) |
| 153 | Role-Based Access Control | `/permissions/role-based-access-control` | Yes | Framed | PARTIAL | PARTIAL | FAIL | PARTIAL | framed: paragraph withheld |
| 154 | Default-Deny Access | `/permissions/default-deny-access` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 31w |
| 155 | Manager Permissions | `/permissions/manager-permissions` | Yes | Yes | PASS | PARTIAL | PARTIAL | PARTIAL | introduced, 17w; ≈ 157 (0.623) |
| 156 | Editor Permissions | `/permissions/editor-permissions` | Yes | Yes | PASS | PARTIAL | PARTIAL | PARTIAL | **thin**, 17w; ≈ 158 (0.627) |
| 157 | Individual Permissions | `/permissions/individual-permissions` | Yes | Yes | PASS | PARTIAL | PARTIAL | PARTIAL | **thin**, 15w; ≈ 155 (0.623) |
| 158 | Organisation Admin Controls | `/permissions/organisation-admin-controls` | Yes | Yes | PASS | PARTIAL | PARTIAL | PARTIAL | introduced, 24w; ≈ 156 (0.627) |
| 159 | Creative Access Governance | `/permissions/creative-access-governance` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 10w; ≈ 152 (0.635) |
| 160 | Multi-Tenant Digital Asset Management | `/permissions/multi-tenant-digital-asset-management` | Yes | Yes | PASS | PASS | PASS | PARTIAL | developed, 46w; ≈ 162 (0.748) |
| 161 | Client Tenant Isolation | `/permissions/client-tenant-isolation` | Yes | Yes | PASS | PASS | PASS | PARTIAL | developed, 90w; **dup** 167 (0.808) |
| 162 | Agency Multi-Tenancy | `/permissions/agency-multi-tenancy` | Yes | Yes | PASS | PASS | PASS | PARTIAL | developed, 46w; ≈ 168 (0.774) |
| 163 | Per-Client Storage | `/permissions/per-client-storage` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 22w; ≈ 165 (0.649) |
| 164 | Per-Client AI Keys | `/permissions/per-client-ai-keys` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 20w |
| 165 | Per-Client Authentication | `/permissions/per-client-authentication` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 28w; ≈ 163 (0.649) |
| 166 | White-Label Asset Management | `/permissions/white-label-asset-management` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 11w; ≈ 168 (0.777) |
| 167 | Client Asset Isolation | `/permissions/client-asset-isolation` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 14w; **dup** 161 (0.808) |
| 168 | Agency Asset Management | `/permissions/agency-asset-management` | Yes | Yes | PASS | PASS | PASS | PARTIAL | developed, 44w; ≈ 166 (0.777) |
| 169 | Enterprise Permissions | `/permissions/enterprise-permissions` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 12w |
| 170 | Permission Auditing | `/permissions/permission-auditing` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 15w; ≈ 118 (0.639) |
| 171 | Access History | `/permissions/access-history` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 11w |
| 172 | Secure Asset Sharing | `/permissions/secure-asset-sharing` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 14w; ≈ 180 (0.683) |
| 173 | Folder Access Maps | `/permissions/folder-access-maps` | Yes | Yes | PASS | PARTIAL | PARTIAL | PARTIAL | introduced, 25w |
| 174 | Creative Security Controls | `/permissions/creative-security-controls` | Yes | Yes | PASS | PARTIAL | PARTIAL | PARTIAL | introduced, 11w |
| 175 | Team Access Management | `/permissions/team-access-management` | Yes | Yes | PASS | PASS | PASS | PARTIAL | developed, 87w; ≈ 159 (0.617) |
| 176 | Department Access | `/permissions/department-access` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 25w |
| 177 | Client Workspace Access | `/permissions/client-workspace-access` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 23w |
| 178 | Permission Hierarchies | `/permissions/permission-hierarchies` | Yes | Yes | PASS | PARTIAL | PARTIAL | PARTIAL | introduced, 14w |
| 179 | Enterprise Asset Governance | `/permissions/enterprise-asset-governance` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 11w |
| 180 | Secure Creative Collaboration | `/permissions/secure-creative-collaboration` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 16w; ≈ 172 (0.683) |

### 181-210 Analytics

| PDF Page | PDF Topic | Website URL | Exists | Published | Topic Match | Content Match | Structure Match | Status | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 181 | Creative Asset Analytics | `/analytics/creative-asset-analytics` | Yes | Yes | PASS | PASS | PASS | PASS | developed, 101w |
| 182 | Asset Usage Analytics | `/analytics/asset-usage-analytics` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 13w |
| 183 | Storage Analytics | `/analytics/storage-analytics` | Yes | Yes | PASS | PASS | PASS | PASS | developed, 55w |
| 184 | Upload Analytics | `/analytics/upload-analytics` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 39w; ≈ 186 (0.63) |
| 185 | Contributor Analytics | `/analytics/contributor-analytics` | Yes | Yes | PASS | PARTIAL | PARTIAL | PARTIAL | introduced, 28w |
| 186 | Tag Analytics | `/analytics/tag-analytics` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 17w; ≈ 184 (0.63) |
| 187 | Creative Library Trends | `/analytics/creative-library-trends` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 35w; ≈ 189 (0.692) |
| 188 | Daily Library Analytics | `/analytics/daily-library-analytics` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 24w |
| 189 | Weekly Library Analytics | `/analytics/weekly-library-analytics` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 22w; ≈ 187 (0.692) |
| 190 | Monthly Library Analytics | `/analytics/monthly-library-analytics` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 18w |
| 191 | Asset Activity Dashboard | `/analytics/asset-activity-dashboard` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 12w |
| 192 | Storage by Category | `/analytics/storage-by-category` | Yes | Yes | PASS | PARTIAL | PARTIAL | PARTIAL | introduced, 14w |
| 193 | Most Searched Tags | `/analytics/most-searched-tags` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 11w |
| 194 | Top Contributors | `/analytics/top-contributors` | Yes | Yes | PASS | PARTIAL | PARTIAL | PARTIAL | **thin**, 12w |
| 195 | Creative Operations Analytics | `/analytics/creative-operations-analytics` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 15w |
| 196 | Library Health Analytics | `/analytics/library-health-analytics` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 13w |
| 197 | Asset Access Analytics | `/analytics/asset-access-analytics` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 13w |
| 198 | Folder Access Analytics | `/analytics/folder-access-analytics` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 13w |
| 199 | Creative Team Analytics | `/analytics/creative-team-analytics` | Yes | Yes | PASS | PASS | PASS | PASS | developed, 72w |
| 200 | Marketing Asset Analytics | `/analytics/marketing-asset-analytics` | Yes | Yes | PASS | PARTIAL | PARTIAL | PARTIAL | introduced, 14w |
| 201 | Production Analytics | `/analytics/production-analytics` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 10w |
| 202 | Agency Analytics | `/analytics/agency-analytics` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 11w |
| 203 | Brand Asset Analytics | `/analytics/brand-asset-analytics` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 15w |
| 204 | Asset Performance Insights | `/analytics/asset-performance-insights` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 10w |
| 205 | Creative Library Reporting | `/analytics/creative-library-reporting` | Yes | Yes | PASS | PARTIAL | PARTIAL | PARTIAL | **thin**, 12w |
| 206 | Asset Management Metrics | `/analytics/asset-management-metrics` | Yes | Yes | PASS | PARTIAL | PARTIAL | PARTIAL | introduced, 25w; ≈ 208 (0.629) |
| 207 | Digital Asset KPIs | `/analytics/digital-asset-kpis` | Yes | Yes | PASS | PARTIAL | PARTIAL | PARTIAL | **thin**, 13w |
| 208 | Creative Workflow Metrics | `/analytics/creative-workflow-metrics` | Yes | Yes | PASS | PARTIAL | PARTIAL | PARTIAL | introduced, 14w; ≈ 206 (0.629) |
| 209 | Library Growth Reporting | `/analytics/library-growth-reporting` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 20w; ≈ 187 (0.675) |
| 210 | Executive Asset Analytics | `/analytics/executive-asset-analytics` | Yes | Yes | PASS | PARTIAL | PARTIAL | PARTIAL | introduced, 14w |

### 211-240 Use Cases

| PDF Page | PDF Topic | Website URL | Exists | Published | Topic Match | Content Match | Structure Match | Status | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 211 | GetSibu for Production Studios | `/use-cases/production-studios` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 26w |
| 212 | GetSibu for Video Teams | `/use-cases/video-teams` | Yes | Framed | PARTIAL | PARTIAL | PASS | PARTIAL | framed: paragraph withheld |
| 213 | GetSibu for Marketing Teams | `/use-cases/marketing-teams` | Yes | Yes | PASS | PASS | PASS | PASS | developed, 68w |
| 214 | GetSibu for Brand Teams | `/use-cases/brand-teams` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 82w |
| 215 | GetSibu for Creative Agencies | `/use-cases/creative-agencies` | Yes | Yes | PASS | PASS | PASS | PASS | developed, 74w |
| 216 | GetSibu for Post-Production Teams | `/use-cases/post-production-teams` | Yes | Framed | PARTIAL | PARTIAL | PASS | PARTIAL | framed: paragraph withheld |
| 217 | GetSibu for Documentary Teams | `/use-cases/documentary-teams` | Yes | Framed | FAIL | FAIL | PASS | FAIL | **topic absent** |
| 218 | GetSibu for Film Production | `/use-cases/film-production` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 15w |
| 219 | GetSibu for Advertising Agencies | `/use-cases/advertising-agencies` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 13w |
| 220 | GetSibu for Creative Studios | `/use-cases/creative-studios` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 13w |
| 221 | GetSibu for Brand Consultancies | `/use-cases/brand-consultancies` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 11w |
| 222 | GetSibu for In-House Creative Teams | `/use-cases/in-house-creative-teams` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 13w |
| 223 | GetSibu for Enterprise Marketing | `/use-cases/enterprise-marketing` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 12w |
| 224 | GetSibu for Global Brands | `/use-cases/global-brands` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 15w |
| 225 | GetSibu for Multi-Market Teams | `/use-cases/multi-market-teams` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 11w; ≈ 231 (0.682) |
| 226 | GetSibu for Freelancers | `/use-cases/freelancers` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 14w |
| 227 | GetSibu for Content Creators | `/use-cases/content-creators` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 16w |
| 228 | GetSibu for Photography Teams | `/use-cases/photography-teams` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 13w |
| 229 | GetSibu for Video Agencies | `/use-cases/video-agencies` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 14w |
| 230 | GetSibu for E-Commerce Brands | `/use-cases/e-commerce-brands` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 12w; ≈ 231 (0.622) |
| 231 | GetSibu for Retail Brands | `/use-cases/retail-brands` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 12w; ≈ 234 (0.711) |
| 232 | GetSibu for Media Companies | `/use-cases/media-companies` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 13w; ≈ 238 (0.71) |
| 233 | GetSibu for Newsrooms | `/use-cases/newsrooms` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 16w |
| 234 | GetSibu for Social Media Teams | `/use-cases/social-media-teams` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 13w; ≈ 231 (0.711) |
| 235 | GetSibu for PR Teams | `/use-cases/pr-teams` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 14w |
| 236 | GetSibu for Event Companies | `/use-cases/event-companies` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 11w |
| 237 | GetSibu for Education Teams | `/use-cases/education-teams` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 11w; ≈ 240 (0.704) |
| 238 | GetSibu for Nonprofits | `/use-cases/nonprofits` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 11w; ≈ 232 (0.71) |
| 239 | GetSibu for Internal Communications | `/use-cases/internal-communications` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 12w; ≈ 240 (0.672) |
| 240 | GetSibu for Corporate Communications | `/use-cases/corporate-communications` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 17w; ≈ 237 (0.704) |

### 241-260 Integrations

| PDF Page | PDF Topic | Website URL | Exists | Published | Topic Match | Content Match | Structure Match | Status | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 241 | GetSibu Integrations | `/integrations` | Yes | Yes | PASS | PASS | PASS | PASS | developed, 81w |
| 242 | Google Drive Integration | `/storage/google-drive` | Merged | No | — | — | — | BLOCKED — UNCONFIRMED CLAIM | merged into 122; → `/storage/centralised-media-storage` (storage-sources) |
| 243 | Dropbox Integration | `/storage/dropbox` | Merged | No | — | — | — | BLOCKED — UNCONFIRMED CLAIM | merged into 123; → `/storage/centralised-media-storage` (storage-sources) |
| 244 | OneDrive Integration | `/storage/onedrive` | Merged | No | — | — | — | BLOCKED — UNCONFIRMED CLAIM | merged into 124; → `/storage/centralised-media-storage` (storage-sources) |
| 245 | AWS S3 Integration | `/storage/aws-s3` | Merged | No | — | — | — | BLOCKED — UNCONFIRMED CLAIM | merged into 125; → `/storage/centralised-media-storage` (storage-sources) |
| 246 | Slack Integration | `/integrations/slack` | Held | No | — | — | — | BLOCKED — UNCONFIRMED CLAIM | → `/developers/webhook-automation` (slack) |
| 247 | Figma Integration | `/integrations/figma` | Held | No | — | — | — | BLOCKED — UNCONFIRMED CLAIM | → `/integrations/custom-integrations` (figma) |
| 248 | Adobe Premiere Pro Integration | `/integrations/adobe-premiere-pro` | Held | No | — | — | — | BLOCKED — UNCONFIRMED CLAIM | → `/integrations/custom-integrations` (adobe-premiere-after-effects) |
| 249 | Adobe After Effects Integration | `/integrations/adobe-after-effects` | Held | No | — | — | — | BLOCKED — UNCONFIRMED CLAIM | → `/integrations/custom-integrations` (adobe-premiere-after-effects) |
| 250 | Frame.io Integration | `/integrations/frame-io` | Held | No | — | — | — | BLOCKED — UNCONFIRMED CLAIM | → `/integrations/custom-integrations` (frame-io) |
| 251 | Zapier Integration | `/integrations/zapier` | Held | No | — | — | — | BLOCKED — UNCONFIRMED CLAIM | → `/developers/webhook-automation` (zapier) |
| 252 | Webhooks | `/developers/webhooks` | Yes | Framed | PARTIAL | PARTIAL | PASS | PARTIAL | framed: paragraph withheld |
| 253 | REST API | `/developers/rest-api` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 35w; ≈ 279 (0.759) |
| 254 | API-First DAM | `/developers/api-first-dam` | Yes | Yes | PASS | PASS | PASS | PASS | developed, 54w |
| 255 | Developer API | `/developers/developer-api` | Yes | Yes | PASS | PASS | PASS | PARTIAL | developed, 83w; ≈ 253 (0.741) |
| 256 | API Authentication | `/developers/api-authentication` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 34w |
| 257 | Webhook Automation | `/developers/webhook-automation` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 30w |
| 258 | Developer Playground | `/developers/developer-playground` | Held | No | — | — | — | BLOCKED — UNCONFIRMED CLAIM | → `/developers/api` (developer-playground) |
| 259 | SDK Support | `/developers/sdk-support` | Held | No | — | — | — | BLOCKED — UNCONFIRMED CLAIM | → `/developers/api` (openapi sdks) |
| 260 | Custom Integrations | `/integrations/custom-integrations` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 16w |

### 261-280 API and Developer Pages

| PDF Page | PDF Topic | Website URL | Exists | Published | Topic Match | Content Match | Structure Match | Status | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 261 | GetSibu API | `/developers/api` | Yes | Yes | PASS | PASS | PASS | PARTIAL | developed, 121w; ≈ 278 (0.693) |
| 262 | Asset Upload API | `/developers/asset-upload-api` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 28w |
| 263 | Asset Search API | `/developers/asset-search-api` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 20w |
| 264 | Asset Metadata API | `/developers/asset-metadata-api` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 28w; ≈ 266 (0.628) |
| 265 | Asset Tags API | `/developers/asset-tags-api` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 9w |
| 266 | Asset Comments API | `/developers/asset-comments-api` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 7w; ≈ 264 (0.628) |
| 267 | Approval API | `/developers/approval-api` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 28w |
| 268 | Webhook Events | `/developers/webhook-events` | Yes | Framed | PARTIAL | PARTIAL | PASS | PARTIAL | framed: paragraph withheld |
| 269 | Asset Created Webhook | `/developers/asset-created-webhook` | Held | No | — | — | — | BLOCKED — UNCONFIRMED CLAIM | → `/developers/webhook-automation` (webhook-events) |
| 270 | Comment Added Webhook | `/developers/comment-added-webhook` | Held | No | — | — | — | BLOCKED — UNCONFIRMED CLAIM | → `/developers/webhook-automation` (webhook-events) |
| 271 | Approval Requested Webhook | `/developers/approval-requested-webhook` | Held | No | — | — | — | BLOCKED — UNCONFIRMED CLAIM | → `/developers/webhook-automation` (webhook-events) |
| 272 | Billing Events | `/developers/billing-events` | Held | No | — | — | — | BLOCKED — UNCONFIRMED CLAIM | → `/developers/webhook-automation` (webhook-events) |
| 273 | API Documentation | `/developers/api-documentation` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 28w |
| 274 | OpenAPI Specification | `/developers/openapi-specification` | Held | No | — | — | — | BLOCKED — UNCONFIRMED CLAIM | → `/developers/api` (openapi) |
| 275 | Developer Authentication | `/developers/developer-authentication` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 9w |
| 276 | API Tenant Isolation | `/developers/api-tenant-isolation` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 26w |
| 277 | API Security | `/developers/api-security` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 30w |
| 278 | Developer Automation | `/developers/developer-automation` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 24w; ≈ 261 (0.693) |
| 279 | Custom Asset Applications | `/developers/custom-asset-applications` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 23w; ≈ 253 (0.759) |
| 280 | GetSibu for Developers | `/developers` | Yes | Yes | PASS | PASS | PASS | PASS | developed, 77w |

### 281-300 Migration

| PDF Page | PDF Topic | Website URL | Exists | Published | Topic Match | Content Match | Structure Match | Status | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 281 | Migrate to GetSibu | `/migration` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 20w |
| 282 | Creative Library Migration | `/migration/creative-library-migration` | Yes | Yes | PASS | PASS | PASS | PARTIAL | developed, 106w; ≈ 296 (0.678) |
| 283 | Google Drive Migration | `/migration/google-drive-migration` | Held | No | — | — | — | BLOCKED — UNCONFIRMED CLAIM | → `/migration` (storage-sources) |
| 284 | Dropbox Migration | `/migration/dropbox-migration` | Held | No | — | — | — | BLOCKED — UNCONFIRMED CLAIM | → `/migration` (storage-sources) |
| 285 | S3 Migration | `/migration/s3-migration` | Held | No | — | — | — | BLOCKED — UNCONFIRMED CLAIM | → `/migration` (storage-sources) |
| 286 | Metadata Migration | `/migration/metadata-migration` | Yes | Yes | PASS | PASS | PASS | PASS | developed, 71w |
| 287 | Folder Structure Migration | `/migration/folder-structure-migration` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 22w |
| 288 | Creative Data Migration | `/migration/creative-data-migration` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 12w |
| 289 | DAM Migration Strategy | `/migration/dam-migration-strategy` | Yes | Yes | PASS | PARTIAL | PARTIAL | PARTIAL | introduced, 28w; **dup** 299 (0.822) |
| 290 | Digital Asset Migration Planning | `/migration/digital-asset-migration-planning` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 28w |
| 291 | Bulk Import | `/migration/bulk-import` | Yes | Yes | PASS | PASS | PASS | PASS | developed, 45w |
| 292 | Migration Without Downtime | `/migration/migration-without-downtime` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 20w |
| 293 | Migration Metadata Preservation | `/migration/migration-metadata-preservation` | Yes | Yes | PASS | PASS | PARTIAL | PARTIAL | developed, 71w; **dup** 299 (0.817) |
| 294 | Migration Folder Mapping | `/migration/migration-folder-mapping` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 27w |
| 295 | Migration Permission Mapping | `/migration/migration-permission-mapping` | Yes | Framed | PARTIAL | PARTIAL | PASS | PARTIAL | framed: paragraph withheld |
| 296 | Migration Verification | `/migration/migration-verification` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 26w; ≈ 282 (0.678) |
| 297 | DAM Onboarding | `/migration/dam-onboarding` | Yes | Framed | FAIL | FAIL | PARTIAL | FAIL | **topic absent** |
| 298 | Creative Team Migration | `/migration/creative-team-migration` | Yes | Yes | PASS | PASS | PASS | PARTIAL | developed, 84w; ≈ 300 (0.775) |
| 299 | DAM Implementation | `/migration/dam-implementation` | Yes | Yes | PASS | PARTIAL | PARTIAL | PARTIAL | introduced, 20w; **dup** 289 (0.822) |
| 300 | GetSibu Migration Support | `/migration/migration-support` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 13w; ≈ 298 (0.775) |

### 301-320 Architecture and Performance

| PDF Page | PDF Topic | Website URL | Exists | Published | Topic Match | Content Match | Structure Match | Status | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 301 | GetSibu Architecture | `/architecture` | Yes | Yes | PASS | PASS | PASS | PASS | developed, 54w |
| 302 | Creative Asset Infrastructure | `/architecture/creative-asset-infrastructure` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 34w |
| 303 | Cloud-Based Asset Management | `/architecture/cloud-based-asset-management` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 28w |
| 304 | CDN Asset Delivery | `/architecture/cdn-asset-delivery` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 36w; ≈ 306 (0.747) |
| 305 | Edge Caching | `/architecture/edge-caching` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 22w |
| 306 | Streaming Previews | `/architecture/streaming-previews` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 38w; ≈ 304 (0.747) |
| 307 | Fast Creative Search | `/architecture/fast-creative-search` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 15w |
| 308 | Scalable Asset Storage | `/architecture/scalable-asset-storage` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 22w |
| 309 | Large Library Performance | `/architecture/large-library-performance` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 15w |
| 310 | Search Performance | `/architecture/search-performance` | Yes | Framed | PARTIAL | PARTIAL | PASS | PARTIAL | framed: paragraph withheld |
| 311 | Asset Processing Performance | `/architecture/asset-processing-performance` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 17w |
| 312 | Large File Performance | `/architecture/large-file-performance` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 25w |
| 313 | Media Preview Performance | `/architecture/media-preview-performance` | Yes | Yes | PASS | PASS | PASS | PASS | developed, 67w |
| 314 | Global Asset Access | `/architecture/global-asset-access` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 20w |
| 315 | API Scalability | `/architecture/api-scalability` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 28w |
| 316 | Stateless API Architecture | `/architecture/stateless-api-architecture` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 12w |
| 317 | Search Infrastructure | `/architecture/search-infrastructure` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 36w |
| 318 | Storage Architecture | `/architecture/storage-architecture` | Yes | Yes | PASS | PASS | PASS | PASS | developed, 50w |
| 319 | Observability | `/architecture/observability` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 10w |
| 320 | High-Performance DAM | `/architecture/high-performance-dam` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 17w |

### 321-340 Security and Compliance

| PDF Page | PDF Topic | Website URL | Exists | Published | Topic Match | Content Match | Structure Match | Status | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 321 | GetSibu Security | `/security` | Yes | Yes | PASS | PASS | PASS | PASS | developed, 71w |
| 322 | AES-256 Encryption | `/security/aes-256-encryption` | Held | No | — | — | — | BLOCKED — UNCONFIRMED CLAIM | → `/security` (aes-256) |
| 323 | Secret Encryption | `/security/secret-encryption` | Yes | Yes | PASS | PARTIAL | PARTIAL | PARTIAL | introduced, 28w |
| 324 | Tenant Isolation | `/security/tenant-isolation` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 40w |
| 325 | RBAC Security | `/security/rbac-security` | Yes | Yes | PASS | PARTIAL | PARTIAL | PARTIAL | introduced, 26w |
| 326 | Audit Logs | `/security/audit-logs` | Yes | Yes | PASS | PARTIAL | PARTIAL | PARTIAL | introduced, 18w |
| 327 | Immutable Audit History | `/security/immutable-audit-history` | Held | No | — | — | — | BLOCKED — UNCONFIRMED CLAIM | → `/features/asset-audit-trail` (immutable-audit) |
| 328 | GDPR Support | `/security/gdpr-support` | Held | No | — | — | — | BLOCKED — UNCONFIRMED CLAIM | → `/security` (gdpr) |
| 329 | Data Processing Agreement | `/security/data-processing-agreement` | Held | No | — | — | — | BLOCKED — UNCONFIRMED CLAIM | → `/security` (dpa) |
| 330 | SOC 2 Readiness | `/security/soc-2-readiness` | Held | No | — | — | — | BLOCKED — UNCONFIRMED CLAIM | → `/security` (soc2 multi-tenant) |
| 331 | Backup Redundancy | `/security/backup-redundancy` | Held | No | — | — | — | BLOCKED — UNCONFIRMED CLAIM | → `/security` (backups-pitr) |
| 332 | Point-in-Time Restore | `/security/point-in-time-restore` | Held | No | — | — | — | BLOCKED — UNCONFIRMED CLAIM | → `/security` (backups-pitr) |
| 333 | Cross-Region Replication | `/security/cross-region-replication` | Held | No | — | — | — | BLOCKED — UNCONFIRMED CLAIM | → `/security` (cross-region-replication) |
| 334 | SSO | `/security/sso` | Held | No | — | — | — | BLOCKED — UNCONFIRMED CLAIM | → `/security` (sso-scim) |
| 335 | SCIM | `/security/scim` | Held | No | — | — | — | BLOCKED — UNCONFIRMED CLAIM | → `/security` (sso-scim) |
| 336 | MFA | `/security/mfa` | Yes | Yes | PASS | PARTIAL | PARTIAL | PARTIAL | introduced, 16w |
| 337 | Default-Deny Security | `/security/default-deny-security` | Yes | Yes | PASS | PARTIAL | PARTIAL | PARTIAL | **thin**, 14w |
| 338 | Enterprise Asset Security | `/security/enterprise-asset-security` | Yes | Yes | PASS | PARTIAL | PARTIAL | PARTIAL | introduced, 11w |
| 339 | Creative Data Governance | `/security/creative-data-governance` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 11w |
| 340 | Secure Digital Asset Management | `/security/secure-digital-asset-management` | Yes | Yes | PASS | PARTIAL | PARTIAL | PARTIAL | introduced, 32w |

### 341-360 Pricing, Plans and Business Value

| PDF Page | PDF Topic | Website URL | Exists | Published | Topic Match | Content Match | Structure Match | Status | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 341 | GetSibu Pricing | `/pricing` | Yes | Framed | PARTIAL | PARTIAL | PARTIAL | PARTIAL | framed: paragraph withheld |
| 342 | Free Plan | `/pricing/free-plan` | Held | No | — | — | — | BLOCKED — UNCONFIRMED CLAIM | → `/pricing/creative-team-pricing` (pricing-tiers free-plan-limits) |
| 343 | Pro Plan | `/pricing/pro-plan` | Held | No | — | — | — | BLOCKED — UNCONFIRMED CLAIM | → `/pricing/creative-team-pricing` (storage-sources pricing-tiers pro-plan-contents) |
| 344 | Business Plan | `/pricing/business-plan` | Held | No | — | — | — | BLOCKED — UNCONFIRMED CLAIM | → `/pricing/creative-team-pricing` (sso-scim pricing-tiers business-plan-contents) |
| 345 | Creative Team Pricing | `/pricing/creative-team-pricing` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 16w |
| 346 | DAM Pricing for Agencies | `/pricing/dam-pricing-for-agencies` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 16w |
| 347 | Enterprise Asset Management Cost | `/pricing/enterprise-asset-management-cost` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 16w |
| 348 | Creative Workflow ROI | `/business-value/creative-workflow-roi` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 17w |
| 349 | Asset Discovery ROI | `/business-value/asset-discovery-roi` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 17w |
| 350 | Duplicate Reduction | `/business-value/duplicate-reduction` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 15w |
| 351 | Creative Productivity | `/business-value/creative-productivity` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 16w |
| 352 | Marketing Productivity | `/business-value/marketing-productivity` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 16w; ≈ 356 (0.765) |
| 353 | Production Productivity | `/business-value/production-productivity` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 17w |
| 354 | Agency Efficiency | `/business-value/agency-efficiency` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 16w |
| 355 | Creative Operations Efficiency | `/business-value/creative-operations-efficiency` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 12w |
| 356 | Asset Management Efficiency | `/business-value/asset-management-efficiency` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 12w; ≈ 352 (0.765) |
| 357 | Storage Efficiency | `/business-value/storage-efficiency` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 16w |
| 358 | Collaboration Efficiency | `/business-value/collaboration-efficiency` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 30w |
| 359 | DAM Business Case | `/business-value/dam-business-case` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 19w |
| 360 | Why Invest in GetSibu | `/business-value/why-invest-in-getsibu` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 19w; ≈ 7 (0.65) |

### 361-380 Resources and Education

| PDF Page | PDF Topic | Website URL | Exists | Published | Topic Match | Content Match | Structure Match | Status | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 361 | What Is Digital Asset Management? | `/resources/what-is-digital-asset-management` | Yes | Yes | PASS | PASS | PASS | PASS | developed, 61w |
| 362 | What Is AI Asset Management? | `/resources/what-is-ai-asset-management` | Yes | Yes | PASS | PASS | PASS | PASS | developed, 48w |
| 363 | What Is Semantic Search? | `/resources/what-is-semantic-search` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 18w |
| 364 | What Is AI Tagging? | `/resources/what-is-ai-tagging` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 30w |
| 365 | What Is Scene Detection? | `/resources/what-is-scene-detection` | Held | No | — | — | — | BLOCKED — UNCONFIRMED CLAIM | → `/resources/what-is-ai-asset-management` (scene-detection) |
| 366 | What Is OCR in DAM? | `/resources/what-is-ocr-in-dam` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 11w |
| 367 | What Is Face Grouping? | `/resources/what-is-face-grouping` | Held | No | — | — | — | BLOCKED — UNCONFIRMED CLAIM | → `/resources/what-is-ai-asset-management` (face-grouping) |
| 368 | What Is Duplicate Detection? | `/resources/what-is-duplicate-detection` | Yes | Yes | PASS | PASS | PASS | PASS | developed, 48w |
| 369 | What Is Asset Versioning? | `/resources/what-is-asset-versioning` | Yes | Yes | PASS | PASS | PASS | PASS | developed, 83w |
| 370 | What Is Creative Approval? | `/resources/what-is-creative-approval` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 35w |
| 371 | What Is Creative Governance? | `/resources/what-is-creative-governance` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 12w |
| 372 | What Is Multi-Tenant DAM? | `/resources/what-is-multi-tenant-dam` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 38w |
| 373 | What Is a Creative Library? | `/resources/what-is-a-creative-library` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 36w |
| 374 | What Is Asset Metadata? | `/resources/what-is-asset-metadata` | Yes | Yes | PASS | PARTIAL | PARTIAL | PARTIAL | introduced, 34w |
| 375 | What Is Asset Taxonomy? | `/resources/what-is-asset-taxonomy` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 29w |
| 376 | What Is a DAM Migration? | `/resources/what-is-a-dam-migration` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 17w |
| 377 | How AI Changes DAM | `/resources/how-ai-changes-dam` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 46w |
| 378 | Future of Digital Asset Management | `/resources/future-of-digital-asset-management` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 19w |
| 379 | Future of Creative Collaboration | `/resources/future-of-creative-collaboration` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 30w |
| 380 | Future of AI-Powered Creative Libraries | `/resources/future-of-ai-powered-creative-libraries` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 20w |

### 381-390 FAQ Pages

| PDF Page | PDF Topic | Website URL | Exists | Published | Topic Match | Content Match | Structure Match | Status | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 381 | What Is GetSibu? | `/faq/what-is-getsibu` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 20w |
| 382 | Who Is GetSibu For? | `/faq/who-is-getsibu-for` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 20w |
| 383 | Does GetSibu Support AI Tagging? | `/faq/does-getsibu-support-ai-tagging` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 30w |
| 384 | Can GetSibu Search Inside Documents? | `/faq/can-getsibu-search-inside-documents` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 14w |
| 385 | Does GetSibu Support Video Comments? | `/faq/does-getsibu-support-video-comments` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 23w |
| 386 | Does GetSibu Support Versioning? | `/faq/does-getsibu-support-versioning` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 14w |
| 387 | Does GetSibu Support Multiple Clients? | `/faq/does-getsibu-support-multiple-clients` | Yes | Yes | PASS | PASS | PASS | PASS | developed, 67w |
| 388 | Does GetSibu Have an API? | `/faq/does-getsibu-have-an-api` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 17w |
| 389 | Does GetSibu Support SSO? | `/faq/does-getsibu-support-sso` | Held | No | — | — | — | BLOCKED — UNCONFIRMED CLAIM | → `/security` (sso-scim pricing-tiers) |
| 390 | Can GetSibu Integrate With Existing Tools? | `/faq/can-getsibu-integrate-with-existing-tools` | Yes | Framed | PARTIAL | PARTIAL | PASS | PARTIAL | framed: paragraph withheld |

### 391-400 Final Conversion Pages

| PDF Page | PDF Topic | Website URL | Exists | Published | Topic Match | Content Match | Structure Match | Status | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 391 | Start Your Creative Library | `/get-started` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 33w |
| 392 | Bring Your Creative Assets Together | `/get-started/bring-your-creative-assets-together` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 30w |
| 393 | Stop Searching Through Folders | `/get-started/stop-searching-through-folders` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 33w |
| 394 | Make Every Asset Discoverable | `/get-started/make-every-asset-discoverable` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 24w |
| 395 | Give Your Creative Team One Source of Truth | `/get-started/give-your-creative-team-one-source-of-truth` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 29w; ≈ 397 (0.629) |
| 396 | Build a Smarter Creative Workflow | `/get-started/build-a-smarter-creative-workflow` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 29w |
| 397 | Scale Your Creative Library | `/get-started/scale-your-creative-library` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 31w; ≈ 395 (0.629) |
| 398 | Turn Your Asset Library Into Intelligence | `/get-started/turn-your-asset-library-into-intelligence` | Yes | Framed | PARTIAL | PARTIAL | PARTIAL | PARTIAL | framed: paragraph withheld |
| 399 | Bring Order to Creative Chaos | `/get-started/bring-order-to-creative-chaos` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | **thin**, 33w |
| 400 | The Future of Creative Asset Management | `/get-started/future-of-creative-asset-management` | Yes | Yes | PASS | PARTIAL | PASS | PARTIAL | introduced, 69w |


---

## 5. Missing topics

**No PDF topic is silently omitted.** Every one of the 400 has an inventory entry; every canonical URL (396) has a route-matrix row. What is *missing from the rendered website* is listed below.

### MISSING FROM WEBSITE

| PDF Page | Topic | Reason Missing | Recommended Action |
| --- | --- | --- | --- |
| 33 | AI Scene Detection | Page held — claim(s) `scene-detection` not client-confirmed; PDF paragraph not rendered; URL 307 → `/features/practical-ai-for-creative-teams` | Obtain GetSibu confirmation in `claims.ts`; the page then republishes automatically |
| 37 | AI Face Grouping | Page held — claim(s) `face-grouping` not client-confirmed; PDF paragraph not rendered; URL 307 → `/features/practical-ai-for-creative-teams` | Obtain GetSibu confirmation in `claims.ts`; the page then republishes automatically |
| 41 | AI Auto Collections | Page held — claim(s) `auto-collections` not client-confirmed; PDF paragraph not rendered; URL 307 → `/features/ai-library-organisation` | Obtain GetSibu confirmation in `claims.ts`; the page then republishes automatically |
| 122 | Google Drive Integration | Page held — claim(s) `storage-sources` not client-confirmed; PDF paragraph not rendered; URL 307 → `/storage/centralised-media-storage` | Obtain GetSibu confirmation in `claims.ts`; the page then republishes automatically |
| 123 | Dropbox Integration | Page held — claim(s) `storage-sources` not client-confirmed; PDF paragraph not rendered; URL 307 → `/storage/centralised-media-storage` | Obtain GetSibu confirmation in `claims.ts`; the page then republishes automatically |
| 124 | OneDrive Integration | Page held — claim(s) `storage-sources` not client-confirmed; PDF paragraph not rendered; URL 307 → `/storage/centralised-media-storage` | Obtain GetSibu confirmation in `claims.ts`; the page then republishes automatically |
| 125 | AWS S3 Integration | Page held — claim(s) `storage-sources` not client-confirmed; PDF paragraph not rendered; URL 307 → `/storage/centralised-media-storage` | Obtain GetSibu confirmation in `claims.ts`; the page then republishes automatically |
| 126 | Local NAS Integration | Page held — claim(s) `storage-sources` not client-confirmed; PDF paragraph not rendered; URL 307 → `/storage/centralised-media-storage` | Obtain GetSibu confirmation in `claims.ts`; the page then republishes automatically |
| 140 | 10 GB File Uploads | Page held — claim(s) `upload-10gb` not client-confirmed; PDF paragraph not rendered; URL 307 → `/storage/media-upload-management` | Obtain GetSibu confirmation in `claims.ts`; the page then republishes automatically |
| 242 | Google Drive Integration | Duplicate of PDF 122 (same topic); held with it — claim(s) `storage-sources` not client-confirmed; PDF paragraph not rendered; URL 307 → `/storage/centralised-media-storage` | Obtain GetSibu confirmation in `claims.ts`; the page then republishes automatically |
| 243 | Dropbox Integration | Duplicate of PDF 123 (same topic); held with it — claim(s) `storage-sources` not client-confirmed; PDF paragraph not rendered; URL 307 → `/storage/centralised-media-storage` | Obtain GetSibu confirmation in `claims.ts`; the page then republishes automatically |
| 244 | OneDrive Integration | Duplicate of PDF 124 (same topic); held with it — claim(s) `storage-sources` not client-confirmed; PDF paragraph not rendered; URL 307 → `/storage/centralised-media-storage` | Obtain GetSibu confirmation in `claims.ts`; the page then republishes automatically |
| 245 | AWS S3 Integration | Duplicate of PDF 125 (same topic); held with it — claim(s) `storage-sources` not client-confirmed; PDF paragraph not rendered; URL 307 → `/storage/centralised-media-storage` | Obtain GetSibu confirmation in `claims.ts`; the page then republishes automatically |
| 246 | Slack Integration | Page held — claim(s) `slack` not client-confirmed; PDF paragraph not rendered; URL 307 → `/developers/webhook-automation` | Obtain GetSibu confirmation in `claims.ts`; the page then republishes automatically |
| 247 | Figma Integration | Page held — claim(s) `figma` not client-confirmed; PDF paragraph not rendered; URL 307 → `/integrations/custom-integrations` | Obtain GetSibu confirmation in `claims.ts`; the page then republishes automatically |
| 248 | Adobe Premiere Pro Integration | Page held — claim(s) `adobe-premiere-after-effects` not client-confirmed; PDF paragraph not rendered; URL 307 → `/integrations/custom-integrations` | Obtain GetSibu confirmation in `claims.ts`; the page then republishes automatically |
| 249 | Adobe After Effects Integration | Page held — claim(s) `adobe-premiere-after-effects` not client-confirmed; PDF paragraph not rendered; URL 307 → `/integrations/custom-integrations` | Obtain GetSibu confirmation in `claims.ts`; the page then republishes automatically |
| 250 | Frame.io Integration | Page held — claim(s) `frame-io` not client-confirmed; PDF paragraph not rendered; URL 307 → `/integrations/custom-integrations` | Obtain GetSibu confirmation in `claims.ts`; the page then republishes automatically |
| 251 | Zapier Integration | Page held — claim(s) `zapier` not client-confirmed; PDF paragraph not rendered; URL 307 → `/developers/webhook-automation` | Obtain GetSibu confirmation in `claims.ts`; the page then republishes automatically |
| 258 | Developer Playground | Page held — claim(s) `developer-playground` not client-confirmed; PDF paragraph not rendered; URL 307 → `/developers/api` | Obtain GetSibu confirmation in `claims.ts`; the page then republishes automatically |
| 259 | SDK Support | Page held — claim(s) `openapi sdks` not client-confirmed; PDF paragraph not rendered; URL 307 → `/developers/api` | Obtain GetSibu confirmation in `claims.ts`; the page then republishes automatically |
| 269 | Asset Created Webhook | Page held — claim(s) `webhook-events` not client-confirmed; PDF paragraph not rendered; URL 307 → `/developers/webhook-automation` | Obtain GetSibu confirmation in `claims.ts`; the page then republishes automatically |
| 270 | Comment Added Webhook | Page held — claim(s) `webhook-events` not client-confirmed; PDF paragraph not rendered; URL 307 → `/developers/webhook-automation` | Obtain GetSibu confirmation in `claims.ts`; the page then republishes automatically |
| 271 | Approval Requested Webhook | Page held — claim(s) `webhook-events` not client-confirmed; PDF paragraph not rendered; URL 307 → `/developers/webhook-automation` | Obtain GetSibu confirmation in `claims.ts`; the page then republishes automatically |
| 272 | Billing Events | Page held — claim(s) `webhook-events` not client-confirmed; PDF paragraph not rendered; URL 307 → `/developers/webhook-automation` | Obtain GetSibu confirmation in `claims.ts`; the page then republishes automatically |
| 274 | OpenAPI Specification | Page held — claim(s) `openapi` not client-confirmed; PDF paragraph not rendered; URL 307 → `/developers/api` | Obtain GetSibu confirmation in `claims.ts`; the page then republishes automatically |
| 283 | Google Drive Migration | Page held — claim(s) `storage-sources` not client-confirmed; PDF paragraph not rendered; URL 307 → `/migration` | Obtain GetSibu confirmation in `claims.ts`; the page then republishes automatically |
| 284 | Dropbox Migration | Page held — claim(s) `storage-sources` not client-confirmed; PDF paragraph not rendered; URL 307 → `/migration` | Obtain GetSibu confirmation in `claims.ts`; the page then republishes automatically |
| 285 | S3 Migration | Page held — claim(s) `storage-sources` not client-confirmed; PDF paragraph not rendered; URL 307 → `/migration` | Obtain GetSibu confirmation in `claims.ts`; the page then republishes automatically |
| 322 | AES-256 Encryption | Page held — claim(s) `aes-256` not client-confirmed; PDF paragraph not rendered; URL 307 → `/security` | Obtain GetSibu confirmation in `claims.ts`; the page then republishes automatically |
| 327 | Immutable Audit History | Page held — claim(s) `immutable-audit` not client-confirmed; PDF paragraph not rendered; URL 307 → `/features/asset-audit-trail` | Obtain GetSibu confirmation in `claims.ts`; the page then republishes automatically |
| 328 | GDPR Support | Page held — claim(s) `gdpr` not client-confirmed; PDF paragraph not rendered; URL 307 → `/security` | Obtain GetSibu confirmation in `claims.ts`; the page then republishes automatically |
| 329 | Data Processing Agreement | Page held — claim(s) `dpa` not client-confirmed; PDF paragraph not rendered; URL 307 → `/security` | Obtain GetSibu confirmation in `claims.ts`; the page then republishes automatically |
| 330 | SOC 2 Readiness | Page held — claim(s) `soc2 multi-tenant` not client-confirmed; PDF paragraph not rendered; URL 307 → `/security` | Obtain GetSibu confirmation in `claims.ts`; the page then republishes automatically |
| 331 | Backup Redundancy | Page held — claim(s) `backups-pitr` not client-confirmed; PDF paragraph not rendered; URL 307 → `/security` | Obtain GetSibu confirmation in `claims.ts`; the page then republishes automatically |
| 332 | Point-in-Time Restore | Page held — claim(s) `backups-pitr` not client-confirmed; PDF paragraph not rendered; URL 307 → `/security` | Obtain GetSibu confirmation in `claims.ts`; the page then republishes automatically |
| 333 | Cross-Region Replication | Page held — claim(s) `cross-region-replication` not client-confirmed; PDF paragraph not rendered; URL 307 → `/security` | Obtain GetSibu confirmation in `claims.ts`; the page then republishes automatically |
| 334 | SSO | Page held — claim(s) `sso-scim` not client-confirmed; PDF paragraph not rendered; URL 307 → `/security` | Obtain GetSibu confirmation in `claims.ts`; the page then republishes automatically |
| 335 | SCIM | Page held — claim(s) `sso-scim` not client-confirmed; PDF paragraph not rendered; URL 307 → `/security` | Obtain GetSibu confirmation in `claims.ts`; the page then republishes automatically |
| 342 | Free Plan | Page held — claim(s) `pricing-tiers free-plan-limits` not client-confirmed; PDF paragraph not rendered; URL 307 → `/pricing/creative-team-pricing` | Obtain GetSibu confirmation in `claims.ts`; the page then republishes automatically |
| 343 | Pro Plan | Page held — claim(s) `storage-sources pricing-tiers pro-plan-contents` not client-confirmed; PDF paragraph not rendered; URL 307 → `/pricing/creative-team-pricing` | Obtain GetSibu confirmation in `claims.ts`; the page then republishes automatically |
| 344 | Business Plan | Page held — claim(s) `sso-scim pricing-tiers business-plan-contents` not client-confirmed; PDF paragraph not rendered; URL 307 → `/pricing/creative-team-pricing` | Obtain GetSibu confirmation in `claims.ts`; the page then republishes automatically |
| 365 | What Is Scene Detection? | Page held — claim(s) `scene-detection` not client-confirmed; PDF paragraph not rendered; URL 307 → `/resources/what-is-ai-asset-management` | Obtain GetSibu confirmation in `claims.ts`; the page then republishes automatically |
| 367 | What Is Face Grouping? | Page held — claim(s) `face-grouping` not client-confirmed; PDF paragraph not rendered; URL 307 → `/resources/what-is-ai-asset-management` | Obtain GetSibu confirmation in `claims.ts`; the page then republishes automatically |
| 389 | Does GetSibu Support SSO? | Page held — claim(s) `sso-scim pricing-tiers` not client-confirmed; PDF paragraph not rendered; URL 307 → `/security` | Obtain GetSibu confirmation in `claims.ts`; the page then republishes automatically |
| 3 | AI-Powered Digital Asset Management | Page live, but its PDF paragraph is withheld (claims `ai-tagging scene-detection face-grouping ocr semantic-search duplicate-detection`); hero shows verified context from PDF 1 | Confirm the claim, or keep the framed page |
| 5 | Intelligent Media Library | Page live, but its PDF paragraph is withheld (claims `scene-detection`); hero shows verified context from PDF 1 | Confirm the claim, or keep the framed page |
| 20 | Fast Asset Discovery | Page live, but its PDF paragraph is withheld (claims `sub-second-search`); hero shows verified context from PDF 307 | Confirm the claim, or keep the framed page |
| 32 | AI Vision Analysis | Page live, but its PDF paragraph is withheld (claims `ai-vision-attributes scene-detection`); hero shows verified context from PDF 34 | Confirm the claim, or keep the framed page |
| 51 | AI-Powered Video Discovery | Page live, but its PDF paragraph is withheld (claims `scene-detection`); hero shows verified context from PDF 12 | Confirm the claim, or keep the framed page |
| 56 | AI Asset Recommendations | Page live, but its PDF paragraph is withheld (claims `auto-collections`); hero shows verified context from PDF 57; **the page does not discuss the topic** | Hold the page until confirmed (F2) or confirm the claim |
| 153 | Role-Based Access Control | Page live, but its PDF paragraph is withheld (claims `rbac-roles`); hero shows verified context from PDF 151 | Confirm the claim, or keep the framed page |
| 212 | GetSibu for Video Teams | Page live, but its PDF paragraph is withheld (claims `scene-detection`); hero shows verified context from PDF 97 | Confirm the claim, or keep the framed page |
| 216 | GetSibu for Post-Production Teams | Page live, but its PDF paragraph is withheld (claims `scene-detection`); hero shows verified context from PDF 97 | Confirm the claim, or keep the framed page |
| 217 | GetSibu for Documentary Teams | Page live, but its PDF paragraph is withheld (claims `scene-detection`); hero shows verified context from PDF 25; **the page does not discuss the topic** | Hold the page until confirmed (F2) or confirm the claim |
| 252 | Webhooks | Page live, but its PDF paragraph is withheld (claims `webhook-events`); hero shows verified context from PDF 257 | Confirm the claim, or keep the framed page |
| 268 | Webhook Events | Page live, but its PDF paragraph is withheld (claims `webhook-events`); hero shows verified context from PDF 257 | Confirm the claim, or keep the framed page |
| 295 | Migration Permission Mapping | Page live, but its PDF paragraph is withheld (claims `permission-translation`); hero shows verified context from PDF 289 | Confirm the claim, or keep the framed page |
| 297 | DAM Onboarding | Page live, but its PDF paragraph is withheld (claims `onboarding-assistance`); hero shows verified context from PDF 289; **the page does not discuss the topic** | Hold the page until confirmed (F2) or confirm the claim |
| 310 | Search Performance | Page live, but its PDF paragraph is withheld (claims `sub-second-search`); hero shows verified context from PDF 320 | Confirm the claim, or keep the framed page |
| 341 | GetSibu Pricing | Page live, but its PDF paragraph is withheld (claims `pricing-tiers`); hero shows verified context from PDF 345 | Confirm the claim, or keep the framed page |
| 390 | Can GetSibu Integrate With Existing Tools? | Page live, but its PDF paragraph is withheld (claims `storage-sources slack zapier frame-io figma adobe-premiere-after-effects`); hero shows verified context from PDF 241 | Confirm the claim, or keep the framed page |
| 398 | Turn Your Asset Library Into Intelligence | Page live, but its PDF paragraph is withheld (claims `scene-detection face-grouping ocr semantic-search`); hero shows verified context from PDF 43 | Confirm the claim, or keep the framed page |


**Also missing across the site** (PDF direction, not PDF text):

| PDF expectation | Missing on | Reason missing | Recommended action |
| --- | --- | --- | --- |
| Per-topic Features / Benefits / Use Case / FAQ expansion | 294 live pages that are not *developed* (71 thin, 205 introduced, 15 withheld, 3 absent) | The PDF provides one 7–58-word paragraph per topic; inventing expansion copy is prohibited | F1: obtain per-topic source material from GetSibu |
| Benefits element | 288 of 355 live pages | Only 67 pages have a before/after or comparison section; the sets exist for a few clusters only | F1, M3 |
| Use Case element | 317 of 355 live pages | Only 38 pages have a use-case section; use cases are otherwise linked only from related cards | M3 |
| FAQ element | 287 of 355 live pages | The PDF has only 10 FAQ topics (9 live), reused across 68 pages | F1: request topic FAQs from GetSibu |

---

## 6. Extra / unsupported content

Built routes and copy that do not come from a PDF topic paragraph. **No unsupported product claim was found.** Evidence:
- `npm run verify:build` passed: 743 built files scanned for claim terms and `DO_NOT_USE` placeholders.
- `.tmp/claim-leak.mjs`: 2,225 files, 0 hits.
- A grep of all built HTML for lorem ipsum, TODO/TBD, "coming soon", Lumen, 555, acme and testimonial found 0 hits.
- No numeric percentages or customer counts appear in visible prose.

### EXTRA / UNSUPPORTED WEBSITE CONTENT

| URL | Content | Source | Risk | Action |
| --- | --- | --- | --- | --- |
| `/features`, `/features/search-and-discovery`, `/features/ai`, `/features/collaboration`, `/features/asset-management`, `/storage`, `/permissions`, `/analytics`, `/use-cases`, `/resources`, `/faq`, `/business-value` (12 section/category indexes) | Hub H1, lede and grouped topic lists | Approved architecture (`content/architecture/sections.ts`); ledes cite PDF pages (`ledeSource`) | None | Keep |
| `/about` | About GetSibu | `content/architecture/company-pages.ts`: PDF 381, 382, 60, 321, 254, 281, 392 only; no team, history, logos or addresses | Low | Keep; replace with GetSibu-supplied company facts when available |
| `/contact` | Contact routes; no form unless an endpoint is configured; `noindex` | `company-pages.ts`; verified PDF pages 260, 281, 273, 321 | Low | Keep; configure the endpoint when GetSibu confirms a channel |
| `/site-search`, 404 page | Search UI, not-found page | Generic UX | None | Keep |
| `/` (homepage) | Authored copy (`content/pages/home.ts`) and H1 "The operating system for your creative library" | PDF 1, 2, 4, 7–11, 18, 31, 47, 48, 61–64, 121, 127, 143; official getsibu.com hero and CTAs; H1 exception recorded in `identity.ts` | Low | Keep |
| All composed pages | 400 non-PDF strings, mostly structural: 68 eyebrows ("How it works", "In context"), 123 headings ("Common questions", "Who access applies to"), 109 link labels ("Read about <page title>"), 19 hero action labels ("More in AI"), 10 section intros | Editorial labels and paraphrases of the cited PDF pages (`storylines.ts`) | None (generic UX copy) | Keep |
| 10 comparison / matrix / before-after sets | 27 interpretive items and cells, e.g. "Asking whoever stored the file", "Filename-only search — Yes/—", "Traditional file storage — Primary focus / Included / Added", "Kept during migration — Yes" | Each checked against its cited pages in this audit: PDF 24; PDF 5, 11, 18; PDF 7; PDF 22, 132, 286, 116 — all faithful paraphrases | Low | Keep; get GetSibu sign-off on the comparison framing |
| Illustrations (15 diagram types) | Example queries ("warm urban evening footage" — PDF 14; "spring campaign, outdoor, blue sky"), sample chart bars | Captioned "Illustration" or "Illustration with sample data"; no real-looking numbers or product UI | Low | Keep |
| Header, footer | "Start free", "Sign In" CTAs | Official getsibu.com (verified 2026-09-14) | None | Keep |

---

## 7. Blocked claims

All **45** BLOCKED topics: 41 held canonical pages plus 4 merged duplicates (PDF 242–245, which repeat 122–125). Each was checked against ten exclusion rules on the real build:

1. not built as a page;
2. not linked from any built page (content, header, footer, payload);
3. not in the sitemap;
4. not in the search index;
5. not in rendered navigation (Google Drive, Dropbox and AWS S3 menu links are `onlyWhenLive` and absent from the HTML and RSC payload);
6. not in any hub index;
7. `noindex` in the inventory;
8. redirects **307 (temporary)**;
9. to its verified context page;
10. its PDF paragraph is not rendered anywhere on the site.

**Result: 45 / 45 pass all ten checks.** All topics remain in the inventory, and `npm run test:publication` passed: **187 checks, 8 scenarios**, `content/generated` unchanged. The scenarios confirm Figma, storage sources, webhook events and SSO, revoke OCR, and switch the app topology. Each held page republishes (route, sitemap, search, navigation) when its claim is confirmed, and is held again when the claim is revoked.

| PDF | Topic | Held URL | Claim(s) | 307 → context | Not built | Not linked | Not in sitemap | Not in search | Not in nav | Not in hubs | noindex | Text not on site |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 33 | AI Scene Detection | `/features/ai-scene-detection` | scene-detection | ✔ `/features/practical-ai-for-creative-teams` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 37 | AI Face Grouping | `/features/ai-face-grouping` | face-grouping | ✔ `/features/practical-ai-for-creative-teams` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 41 | AI Auto Collections | `/features/ai-auto-collections` | auto-collections | ✔ `/features/ai-library-organisation` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 122 | Google Drive Integration | `/storage/google-drive` | storage-sources | ✔ `/storage/centralised-media-storage` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 123 | Dropbox Integration | `/storage/dropbox` | storage-sources | ✔ `/storage/centralised-media-storage` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 124 | OneDrive Integration | `/storage/onedrive` | storage-sources | ✔ `/storage/centralised-media-storage` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 125 | AWS S3 Integration | `/storage/aws-s3` | storage-sources | ✔ `/storage/centralised-media-storage` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 126 | Local NAS Integration | `/storage/local-nas` | storage-sources | ✔ `/storage/centralised-media-storage` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 140 | 10 GB File Uploads | `/storage/10-gb-file-uploads` | upload-10gb | ✔ `/storage/media-upload-management` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 242 | Google Drive Integration | `/storage/google-drive` (merged) | storage-sources | ✔ `/storage/centralised-media-storage` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 243 | Dropbox Integration | `/storage/dropbox` (merged) | storage-sources | ✔ `/storage/centralised-media-storage` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 244 | OneDrive Integration | `/storage/onedrive` (merged) | storage-sources | ✔ `/storage/centralised-media-storage` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 245 | AWS S3 Integration | `/storage/aws-s3` (merged) | storage-sources | ✔ `/storage/centralised-media-storage` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 246 | Slack Integration | `/integrations/slack` | slack | ✔ `/developers/webhook-automation` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 247 | Figma Integration | `/integrations/figma` | figma | ✔ `/integrations/custom-integrations` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 248 | Adobe Premiere Pro Integration | `/integrations/adobe-premiere-pro` | adobe-premiere-after-effects | ✔ `/integrations/custom-integrations` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 249 | Adobe After Effects Integration | `/integrations/adobe-after-effects` | adobe-premiere-after-effects | ✔ `/integrations/custom-integrations` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 250 | Frame.io Integration | `/integrations/frame-io` | frame-io | ✔ `/integrations/custom-integrations` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 251 | Zapier Integration | `/integrations/zapier` | zapier | ✔ `/developers/webhook-automation` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 258 | Developer Playground | `/developers/developer-playground` | developer-playground | ✔ `/developers/api` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 259 | SDK Support | `/developers/sdk-support` | openapi, sdks | ✔ `/developers/api` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 269 | Asset Created Webhook | `/developers/asset-created-webhook` | webhook-events | ✔ `/developers/webhook-automation` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 270 | Comment Added Webhook | `/developers/comment-added-webhook` | webhook-events | ✔ `/developers/webhook-automation` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 271 | Approval Requested Webhook | `/developers/approval-requested-webhook` | webhook-events | ✔ `/developers/webhook-automation` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 272 | Billing Events | `/developers/billing-events` | webhook-events | ✔ `/developers/webhook-automation` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 274 | OpenAPI Specification | `/developers/openapi-specification` | openapi | ✔ `/developers/api` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 283 | Google Drive Migration | `/migration/google-drive-migration` | storage-sources | ✔ `/migration` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 284 | Dropbox Migration | `/migration/dropbox-migration` | storage-sources | ✔ `/migration` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 285 | S3 Migration | `/migration/s3-migration` | storage-sources | ✔ `/migration` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 322 | AES-256 Encryption | `/security/aes-256-encryption` | aes-256 | ✔ `/security` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 327 | Immutable Audit History | `/security/immutable-audit-history` | immutable-audit | ✔ `/features/asset-audit-trail` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 328 | GDPR Support | `/security/gdpr-support` | gdpr | ✔ `/security` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 329 | Data Processing Agreement | `/security/data-processing-agreement` | dpa | ✔ `/security` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 330 | SOC 2 Readiness | `/security/soc-2-readiness` | soc2, multi-tenant | ✔ `/security` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 331 | Backup Redundancy | `/security/backup-redundancy` | backups-pitr | ✔ `/security` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 332 | Point-in-Time Restore | `/security/point-in-time-restore` | backups-pitr | ✔ `/security` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 333 | Cross-Region Replication | `/security/cross-region-replication` | cross-region-replication | ✔ `/security` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 334 | SSO | `/security/sso` | sso-scim | ✔ `/security` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 335 | SCIM | `/security/scim` | sso-scim | ✔ `/security` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 342 | Free Plan | `/pricing/free-plan` | pricing-tiers, free-plan-limits | ✔ `/pricing/creative-team-pricing` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 343 | Pro Plan | `/pricing/pro-plan` | storage-sources, pricing-tiers, pro-plan-contents | ✔ `/pricing/creative-team-pricing` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 344 | Business Plan | `/pricing/business-plan` | sso-scim, pricing-tiers, business-plan-contents | ✔ `/pricing/creative-team-pricing` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 365 | What Is Scene Detection? | `/resources/what-is-scene-detection` | scene-detection | ✔ `/resources/what-is-ai-asset-management` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 367 | What Is Face Grouping? | `/resources/what-is-face-grouping` | face-grouping | ✔ `/resources/what-is-ai-asset-management` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 389 | Does GetSibu Support SSO? | `/faq/does-getsibu-support-sso` | sso-scim, pricing-tiers | ✔ `/security` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |


**Framed pages (18) — published, but with the PDF paragraph withheld.** These pages live under their PDF title while the paragraph states an unconfirmed claim. The hero shows a verified paragraph from a related page instead. This is safe (no claim leaks), but 3 of the 18 do not discuss their topic at all (FAIL, §17), and 2 pairs share an identical hero (216 = 212, 268 = 252).

---

## 8. Page structure audit

The PDF's reusable structure is **Hero → Introduction → Features → Benefits → Workflow → Use Case → FAQ → CTA**. Presence on the 355 live pages:

| Element | Live pages with it | % |
| --- | --- | --- |
| Hero | 355 | 100.0 % |
| Introduction (own paragraph / definition / statement) | 352 | 99.2 % |
| Features | 349 | 98.3 % |
| Benefits (before/after, comparison) | 67 | 18.9 % |
| Workflow (workflow, process, timeline, story) | 276 | 77.7 % |
| Use case | 38 | 10.7 % |
| FAQ | 68 | 19.2 % |
| CTA | 355 | 100.0 % |

- **Structure match:** PASS 319 · PARTIAL 35 · FAIL 1. Every live page has a hero, and all but the homepage have a breadcrumb. Every page ends with a PDF conversion CTA (PDF 391–400) and has previous/next navigation where it belongs to a sequence.
- **Where structure looks right but the page is still thin.** Structure is mostly *present*; it is the *content inside* it that is often not topic-specific:
  - **Workflow sections** are among the most reused: "Library activity over time" appears on 21 pages and "Building on the API" on 19.
  - **FAQ sections** reuse the 9 live PDF FAQs: "Does GetSibu Support Multiple Clients?" appears on 16 pages.
  - **Benefits (67) and Use Case (38)** are rare.
- **Functionally thin pages (71):** technically complete, but the topic appears only in the hero paragraph. 2, 6, 7, 29, 30, 34, 36, 53, 79, 85, 86, 90, 94, 101, 107, 110, 111, 113, 114, 115, 116, 119, 120, 127, 128, 129, 139, 145, 156, 157, 166, 172, 193, 194, 198, 204, 205, 207, 211, 220, 221, 222, 226, 228, 233, 234, 235, 237, 238, 281, 316, 319, 320, 337, 345, 346, 347, 349, 351, 352, 353, 355, 356, 357, 359, 360, 391, 395, 396, 397, 399.
- **Text-only heroes:** all 17 pricing and business-value pages, 18 resources pages and 9 FAQ pages (44 in total) have no hero visual. This is a deliberate definition/answer layout for resources and FAQ, but it leaves the business-value pages visually plain.

---

## 9. Content relevance audit

| Measure | Result |
| --- | --- |
| Topic identifiable without the title (Topic match PASS) | **337 / 355 (94.9 %)** |
| Topic identifiable, including partially (framed pages) | **352 / 355 (99.2 %)** |
| Topic not identifiable (FAIL) | **3** — see below |
| Own PDF paragraph rendered in full | 336 (every published page); framed: 17 not rendered, 1 first sentence only |
| Topic-specific words per composed page (min / Q1 / median / Q3 / max) | 0 / 14 / 24 / 40 / 172 |
| PDF paragraph length (min / Q1 / median / Q3 / max) | 7 / 13 / 15 / 19 / 58 |
| Content depth: developed / introduced / thin / withheld / absent | 61 / 205 / 71 / 15 / 3 |
| Off-topic sections (no own item, nothing naming the topic, mostly from other PDF groups) | **100 sections on 85 pages** |

**FAIL — the topic is not discussed on the page (all framed):**

| PDF | Topic | URL | What the page actually shows |
| --- | --- | --- | --- |
| 56 | AI Asset Recommendations | `/features/ai-asset-recommendations` | AI organisation and intelligence context (PDF 57, 58, 55, 54); nothing about recommendations |
| 217 | GetSibu for Documentary Teams | `/use-cases/documentary-teams` | Searchable video library hero (PDF 25), film-production card; nothing about documentaries (confirmed in screenshot) |
| 297 | DAM Onboarding | `/migration/dam-onboarding` | Migration-strategy hero and migration phases (PDF 289); nothing about onboarding, rollout or training |

**Examples the brief asked about:**

| Brief example | Page | Finding |
| --- | --- | --- |
| AI OCR must explain OCR | `/features/ai-ocr` (38) | Hero explains OCR (PDF 38) and the figure highlights "OCR text", but the three sections that follow are generic AI and ingestion context. The OCR step ("Text inside files") is the second story step. → PARTIAL (introduced) |
| Asset Metadata Search must discuss metadata discovery | `/features/asset-metadata-search` (23) | Hero plus the "Metadata that travels with the asset" matrix and the indexing card are on topic. → PARTIAL (introduced, 45 topic words) |
| Bulk Import must discuss bulk ingestion | `/storage/bulk-asset-import` (130), `/migration/bulk-import` (291) | 130: hero plus a "Bulk Import" card (PDF 291's near-identical sentence); the rest is generic ingestion and folder mapping → PARTIAL. 291 → PASS |
| Permission Auditing must discuss auditing permissions | `/permissions/permission-auditing` (170) | Hero and audit-history figure are on topic; the asset-record matrix and audit-trail card are relevant; **"An asset's history" (versioning timeline) is off-topic**; near-duplicate of 118 (0.64) → PARTIAL |
| Migration Verification must discuss verification | `/migration/migration-verification` (296) | Hero, migration map "Content and metadata verified" and the phases timeline ("Verification — This page") are on topic; the mirror/remap comparison is not about verification; near-duplicate of 282 (0.68) → PARTIAL |

**Most frequent off-topic sections** (section → pages where it is off-topic):

| Section | Pages where off-topic |
| --- | --- |
| workflow: The lifecycle of an asset | 13 |
| story: One library for every format | 13 |
| layers: What the platform brings together | 10 |
| matrix: Who access applies to | 5 |
| story: Every way an asset can be found | 4 |
| alternating: The capabilities behind it | 3 |
| matrix: Metadata that travels with the asset | 2 |
| layers: AI as a layer across the library | 2 |
| editorial: Practical, human-controlled AI | 2 |
| capabilities: More in Versioning & Asset Management | 2 |

---

## 10. URL architecture audit

| Check | Result |
| --- | --- |
| Canonical topic URLs | 396 (400 − 4 merged duplicates); **0 duplicate paths** |
| Hierarchy | `/` (1) · section roots `/platform`, `/integrations`, `/developers`, `/migration`, `/architecture`, `/security`, `/pricing`, `/get-started` (8) · every other topic at `/<section>/<slug>` (387). Consistent two-level hierarchy |
| Section prefixes | `/features` 110 · `/storage` 30 · `/permissions` 30 · `/analytics` 30 · `/use-cases` 30 · `/developers` 28 · `/migration` 20 · `/architecture` 20 · `/security` 20 · `/resources` 20 · `/business-value` 13 · `/faq` 10 · `/get-started` 10 · `/platform` 9 · `/integrations` 8 · `/pricing` 7 · `/` 1 |
| Semantic slugs | 343 of 395 non-home slugs are the slugified PDF title. **52 differ, all by recorded, meaningful shortening**: "GetSibu for X" → `/use-cases/x` (30); "X Integration" → `/storage/x`, `/integrations/x` (11); section roots use the section name (`/platform`, `/integrations`, `/developers`, `/migration`, `/architecture`, `/security`, `/pricing`, `/get-started`, `/developers/api`); "GetSibu Migration Support" → `/migration/migration-support`; "The Future of…" → `future-of-creative-asset-management` |
| Canonical tags | 355 / 355 live pages have a canonical equal to their own path |
| Redirects | 47: **45** held topics → verified context page (307, no chains); **2** legacy aliases `/about-us`, `/contact-us` (308). All 417 route-matrix rows served as specified over HTTP (`.tmp/matrix-http.mjs`, re-run in this audit) and verified against the build (`npm run verify:build`) |
| Merged topics | 4 exact PDF duplicates: 242–245 (Integrations group) repeat 122–125 (Storage group) → one URL each under `/storage/`. Recorded in `content/architecture/url-rules.ts` |
| Orphans | 0 (§12) |
| Section placement | 20 cross-placements, all recorded with reasons (§12). No incorrect placement found |
| Brief examples | `/features/ai-scene-detection` exists as a **held** topic (307 → `/features/practical-ai-for-creative-teams`, claim `scene-detection`) · `/storage/google-drive` **held** (307 → `/storage/centralised-media-storage`, claim `storage-sources`) · `/faq/what-is-getsibu` **live** · security topics under `/security/…` |

**No genuine URL architecture problem was found; no renames are recommended.**

### 10.1 PDF hierarchy (PDF section → topic group → topic → page)

Each of the PDF's 18 groups becomes one site section or category, in PDF order; every topic's breadcrumb is Home → section → category → topic. Example: `AI Features` → `AI Semantic Search` → `/features/ai-semantic-search` (breadcrumb Home › Features › AI › AI Semantic Search).

| PDF group | Website section/category | Recorded exceptions |
| --- | --- | --- |
| 1–10 Platform | `/` (PDF 1 = homepage) · `/platform` (2–10) | Homepage H1 exception in `identity.ts` |
| 11–30 Core Product Pages | `/features/search-and-discovery` | Labelled "Search & Discovery" (`sections.ts`: every page in the group is about search) |
| 31–60 AI Features | `/features/ai` | — |
| 61–90 Collaboration | `/features/collaboration` | — |
| 91–120 Versioning and Asset Management | `/features/asset-management` | — |
| 121–150 Storage and Ingestion | `/storage` | — |
| 151–180 Permissions and Multi-Tenancy | `/permissions` | — |
| 181–210 Analytics | `/analytics` | Path depends on the app-topology decision (`route-decisions.ts`) |
| 211–240 Use Cases | `/use-cases` | — |
| 241–260 Integrations | `/integrations` (241, 246–251, 260) | 242–245 merged into Storage 122–125 (exact duplicates); 252–259 (webhooks, REST and Developer API, API-first, authentication, playground, SDK) placed in `/developers` — reasons in `url-rules.ts` |
| 261–280 API and Developer Pages | `/developers` | — |
| 281–300 Migration | `/migration` | — |
| 301–320 Architecture and Performance | `/architecture` | — |
| 321–340 Security and Compliance | `/security` | — |
| 341–360 Pricing, Plans and Business Value | `/pricing` (341–347) · `/business-value` (348–360) | Split recorded in `sections.ts` (different intents) |
| 361–380 Resources and Education | `/resources` | — |
| 381–390 FAQ Pages | `/faq` | — |
| 391–400 Final Conversion Pages | `/get-started` | Also used as the closing CTA of every page |

**Result:** the hierarchy is preserved. 20 topics are placed outside their PDF group's section, all recorded: 1, 242–245, 252–259, 341–347 (the last is a split of one group into two sections). The only hierarchy inconsistency is in **search-result labels** (M8).


---

## 11. Navigation audit

| Surface | Coverage | Findings |
| --- | --- | --- |
| Header | 7 items: Platform, Features, Use Cases, Integrations, Developers, Resources (mega or list), Pricing (link) | Labels use PDF group names; Pricing is framed with a recorded reason |
| Mega menus | 20 columns, one per PDF group or category, each with an "Explore all" hub link; 70 featured topic links (3 are `onlyWhenLive` and correctly absent while their pages are held) | 94 / 94 rendered hrefs resolve to live routes; **0 blocked pages exposed**. Labels equal the PDF title, except 12 use-case labels shortened ("Production Studios" for "GetSibu for Production Studios") — acceptable. **1 duplicate**: "Automated Asset Ingestion" appears in two columns (Storage and Integrations) |
| Mobile navigation | Same items and hubs as desktop | **Parity gap:** for multi-column menus the drawer lists only the column hubs, so the **38 featured topic links** shown on desktop are not in the mobile drawer (`components/layout/MobileMenu.tsx`, lines 87–92). Every topic is still two taps away through its hub, and search is in the drawer |
| Footer | 21 links: every section and category hub, About, Contact | Every hub is one click from any page |
| Section hubs | 12 index pages plus 8 section-root pages list every live topic in their section, grouped by PDF sub-cluster | 351 / 355 live topics are linked from a hub; the other 4 are section roots (hubs themselves, linked from header and footer) |
| Topic hubs | "More in <category>" hero action on category topic pages; "Covered here" / "In this topic" checklists on 63 pages | — |
| Search | Search index holds **367 documents: all 355 live topics + 12 hubs**; **0 held topics** | `.tmp/search-audit.mjs` re-run: no coverage, duplicate, link, freshness or claim-term issues; queries for held topics (Google Drive, Figma, SSO, scene detection) return the empty state. **Group labels** do not follow the PDF hierarchy (M8): e.g. "Editor Permissions [Security]", "Storage Architecture [Developers]", "Storage Efficiency [Resources]" |

**Is every important live topic discoverable?** Yes. Every live topic is reachable through its hub (header or footer → hub → topic), through search, and through contextual links (median 10 inbound contextual links).

---

## 12. Internal linking audit

| Check | Result |
| --- | --- |
| Live pages with zero inbound links | **0** |
| Inbound contextual links per live page (min / Q1 / median / Q3 / max) | 1 / 7 / 10 / 17 / 348 unique linking pages (link occurrences: median 16, `.tmp/link-audit.mjs`) |
| Hub → topic | 351 / 355 (the other 4 are hubs) |
| Topic → parent hub link | Every topic page has a breadcrumb and a "More in <category>" action; 5 section roots (`/integrations`, `/migration`, `/architecture`, `/pricing`, `/get-started`) are not linked from the homepage *body* (they are in header and footer) |
| Previous / next | 345 / 355 (the other 10 are home and section roots, where a sequence does not apply) |
| Related topics | 351 / 354 composed pages (the section roots `/developers`, `/architecture` and `/security` list their topics as a hub instead); **26 %** of related links cross PDF groups (e.g. use cases ↔ features), the rest stay in the topic's group |
| Generic anchors ("Read more", "Learn more", "Click here") | **0** — every link names its destination ("Read about AI OCR") |
| Within-page repetition | **230 / 354 composed pages** show ≥ 3 related cards whose destinations are already linked in the page body (e.g. `/migration/dam-implementation`: the checklist and related cards list the same 4 pages) |
| Irrelevant related content | None found in the spot checks; related sets come from the PDF group and cluster |

---

## 13. Visual relevance audit

| Check | Result |
| --- | --- |
| Illustration system | 15 diagram types, every one captioned "Illustration…", drawn from PDF concepts; no fake product screenshots, no real-looking numbers |
| Hero visual matches the PDF group | Search → search-signals; AI → ai-review / processing; Collaboration → timeline review; Versioning → version record; Storage → ingest pipeline; Permissions → folder access; Multi-tenancy → tenant boundaries; Analytics → library activity; Use cases → media library; Integrations → connector / API flow; Developers → API flow with the page's endpoint highlighted; Migration → migration map with the page's stage highlighted; Architecture → architecture stack; Security → control map. **Topic-level focus** (e.g. "OCR text", "Metadata", "verified") is set on 242 of 310 heroes with a visual |
| Hero without visual | **44** (pricing and business value 17, resources 18, FAQ 9) |
| Repetition | 73 distinct hero diagram+focus combinations across 310 visual heroes; the most common hero (media library) is on 24 pages. Caption "one library for videos, images, documents and audio" appears **146 times** across live pages; **33 pages show the same diagram type twice** |
| Figures used as filler | 68 pages have a stand-alone "media" section (figure only, no text), e.g. the ingest-pipeline figure on `/features/ai-ocr` and the media grid on `/analytics/storage-analytics` |
| Mismatches seen in screenshots | `/features/creative-asset-versioning`: the "Image Version Management" card shows a *video* review player. `/storage/bulk-asset-import`: the "Bulk Import" card shows an *analytics* chart. `/resources/what-is-ocr-in-dam`: the "AI OCR" card shows object/colour/mood tag suggestions, not text extraction. `/features/ai-ocr`: the story figure opens on "Metadata" before "Text inside files" |
| Workflow / AI / storage / permission / analytics / API / migration pages communicate their concept visually | **Yes** at the hero for every group with a visual hero (see first row); weaker in secondary figures, which follow the cited card's page rather than the topic |

### 13.1 Visual page-by-page spot check

Full-page screenshots at 1280 px of 20 representative pages (every PDF category plus known problem pages), a 390 px mobile check, and a normal-viewport check of the scroll-driven story section. Screenshots are in the gitignored `.tmp/audit/shots/` and `.tmp/full/`.

Columns answer the brief's six questions:
1. **Finished?** Does it look like a finished GetSibu page?
2. **Topic clear?** Does it clearly communicate the PDF topic?
3. **Content belongs?** Does the content belong to that topic?
4. **Structure?** Is the structure appropriate?
5. **Distinct from neighbours?**
6. **Missing?** Is anything missing?

| Category | Page | 1 Finished? | 2 Topic clear? | 3 Content belongs? | 4 Structure | 5 Distinct from neighbours? | 6 Missing | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Home | `/` | Yes: polished hero with search illustration, 9 sections, dark API band, CTA | Yes (PDF 1–10 positioning) | Yes (authored from PDF + official site) | Hero, statement, how it works, capability explorer, before/after, teams, control, developers, resources, CTA | Yes | FAQ block | PASS |
| Discovery | `/features/asset-metadata-search` (23) | Yes | Yes: hero figure highlights "Metadata" | Mostly: indexing card and metadata matrix on topic; search process generic | Hero, split, process, matrix, related, CTA | Yes (max overlap 0.20) | Topic development beyond hero + matrix | PARTIAL |
| AI | `/features/ai-ocr` (38) | Yes (story section verified at a normal viewport) | Yes: hero figure highlights "OCR text" | Partly: ingest-pipeline figure section and "AI as a layer" are generic AI; OCR step is second in the story | Hero, media, layers, story, FAQ, related, CTA | Yes (0.36) | What OCR covers, how extracted text is used | PARTIAL |
| Versioning | `/features/creative-asset-versioning` (91) | Yes, but the 6-card lifecycle grid leaves an empty cell | Yes: version-record hero; "An asset's history" timeline marks "This page" | Yes, except the "Image Version Management" card shows a video review player | Hero, timeline, split, workflow, FAQ, related, CTA | **No: 0.78 overlap with 97 Video Version Management** | Differentiation from 97/98 | PARTIAL |
| Lifecycle | `/features/asset-lifecycle-management` (101) | Yes | Yes in the hero; the status → deletion timeline is on topic | Mostly; approval-workflow card uses a video player figure | Hero, timeline, split, workflow, related, CTA | **No: 0.68 with 109; cluster of 6 lifecycle pages** | Lifecycle-specific material (thin: 18 topic words) | PARTIAL |
| Storage | `/storage/bulk-asset-import` (130) | Yes | Yes: ingest hero, upload stage highlighted | Partly: "Bulk Import" card repeats PDF 291 and uses an analytics chart; ingestion workflow generic | Hero, workflow, split, comparison, related, CTA | Yes (0.42) | Bulk-specific workflow | PARTIAL |
| Integration | `/integrations/custom-integrations` (260) | Yes | Yes: connector illustration | Weak: two consecutive generic ingestion sections ("Connecting existing storage", "From source to searchable") | Hero, split, process, workflow, related (3), CTA | Yes (0.40) | How to request an integration (not in PDF) | PARTIAL |
| Permissions | `/permissions/permission-auditing` (170) | Yes | Yes: audit-history hero figure ("Folder permission changed") | Partly: asset-record matrix and audit-trail card fit; **versioning timeline is off-topic** | Hero, matrix, split, timeline, related, CTA | **No: 0.64 with 118** | Permission-change auditing detail | PARTIAL |
| Multi-tenant | `/permissions/client-tenant-isolation` (161) | Yes | Yes: tenant-boundaries figure; "What each client environment keeps separate" marks "This page" | Yes | Hero, layers, editorial, process, FAQ, related, CTA | **No: 0.81 duplicate of 167 Client Asset Isolation** | Differentiation from 167 | PARTIAL |
| Analytics | `/analytics/storage-analytics` (183) | Yes | Yes: storage-by-category chart | Yes: cadence timeline and storage-growth cards | Hero, media (figure only), timeline, editorial, related, CTA | Yes (0.38) | — (the figure-only section is filler) | PASS |
| API | `/developers/asset-metadata-api` (264) | Yes | Yes: API figure highlights "Metadata"; workflow marks "This page" | Yes (API family) | Hero, workflow, editorial, layers, related, CTA | **No: 0.63 with 266 Asset Comments API** | Endpoint-level detail (unconfirmed, not in PDF) | PARTIAL |
| Developer | `/developers` (280) | Yes: strong hub | Yes | Yes | Hero, statement, layers, workflow, grouped list of 24 pages, FAQ, CTA | Yes | — | PASS |
| Migration | `/migration/migration-verification` (296) | Yes | Yes: migration map "Content and metadata verified"; phases timeline marks "This page" | Partly: mirror/remap comparison is not about verification | Hero, comparison, split, timeline, related, CTA | **No: 0.68 with 282** | What is verified and how | PARTIAL |
| Resource | `/resources/what-is-ocr-in-dam` (366) | Yes, but plain: text-only hero, 12-word definition | Yes (definition) | **No for "Where creative libraries are heading" (future-of-DAM timeline)**; "AI OCR" card figure shows object/colour/mood tags | Hero, definition, timeline, split, FAQ, related, CTA | Yes (0.41) | An OCR explanation beyond one sentence | PARTIAL |
| FAQ | `/faq/what-is-getsibu` (381) | Yes (text-only hero by design) | Yes: short answer | Yes | Hero, answer, layers, editorial, FAQ, related, CTA | Yes (0.50) | — | PARTIAL |
| CTA / positioning | `/get-started/make-every-asset-discoverable` (394) | Yes | Yes | Generic: "What the platform brings together" (on 20 pages) | Hero, layers, story, related, CTA | Yes (0.48) | Positioning-specific support | PARTIAL |
| *Duplicate check* | `/migration/dam-migration-strategy` (289) vs `/migration/dam-implementation` (299) | Yes | Only through the hero sentence | Identical sections; both screenshots exactly 4,051 px tall | Identical | **No: 0.82** | Distinct content | PARTIAL |
| *Framed page* | `/use-cases/documentary-teams` (217) | Yes; hero honestly says "From Searchable Video Library" | **No** | No (film production, generic video library) | Hero, split, checklist, statement, related, CTA | Yes | The topic itself | **FAIL** |
| *Thin page* | `/architecture/observability` (319) | Yes | Only the 10-word hero sentence | No: architecture and CDN delivery sections; "More in" and related cards list the same pages twice | Hero, editorial, workflow, capabilities, related, CTA | Yes (0.52) | Anything about observability | PARTIAL |

**Mobile (390 px), `/migration/dam-implementation`:** the content order stays hero → figure → timeline → checklist → workflow → related → previous/next → CTA → footer. No overflow; the checklist and related cards repeat the same four destinations.


---

## 14. Duplicate content audit

| Measure | Result |
| --- | --- |
| Identical H1 / title / meta description | **0 / 0 / 0** |
| Max prose overlap per live page | ≥ 0.8: **7** · 0.6–0.8: **88** · 0.4–0.6: 144 · 0.2–0.4: 103 · < 0.2: 13 |
| Duplicate pages (≥ 0.8) | **7** pages in 5 pairs (below) |
| Near-duplicate pages (≥ 0.6) | **95** pages in **34 clusters** (below) |
| Identical section-heading sequences | 43 pairs/groups of pages share the exact same sequence of section headings |
| Identical workflow sequences | 40 groups of pages share an identical workflow/timeline/story item sequence |
| PDF statements reused on other pages | 0 other pages: 67 · 1–5: 165 · 6–15: 97 · 16–30: 50 · > 30: **13** |
| Identical CTA copy | By design, the 10 PDF conversion pages (391–400) are the CTAs for 355 pages: "Give Your Creative Team One Source of Truth" closes 75 pages, "Build a Smarter Creative Workflow" 67 |
| Identical FAQ blocks | "Does GetSibu Support Multiple Clients?" on 16 pages; "Does GetSibu Support Versioning?" on 11 |

**Duplicate pairs (≥ 0.8 prose overlap — the pages differ essentially only in the hero paragraph):**

| Page A | Page B | Prose overlap (Jaccard) | Share of the smaller page contained in the other |
| --- | --- | --- | --- |
| 289 DAM Migration Strategy `/migration/dam-migration-strategy` | 299 DAM Implementation `/migration/dam-implementation` | 0.822 | 0.903 |
| 289 DAM Migration Strategy `/migration/dam-migration-strategy` | 293 Migration Metadata Preservation `/migration/migration-metadata-preservation` | 0.817 | 0.929 |
| 293 Migration Metadata Preservation `/migration/migration-metadata-preservation` | 299 DAM Implementation `/migration/dam-implementation` | 0.817 | 0.929 |
| 75 Asset Discussion History `/features/asset-discussion-history` | 86 Asset Mentions `/features/asset-mentions` | 0.814 | 0.899 |
| 161 Client Tenant Isolation `/permissions/client-tenant-isolation` | 167 Client Asset Isolation `/permissions/client-asset-isolation` | 0.808 | 0.907 |

**Near-duplicate clusters (≥ 0.6):**

| # | Pages | Size |
| --- | --- | --- |
| 1 | 101 Asset Lifecycle Management; 102 Asset Status Management; 108 Asset Archiving; 109 Asset Deletion; 111 Creative Library Maintenance; 113 Asset Quality Management | 6 |
| 2 | 92 File Version History; 93 Asset Replacement; 95 Creative File History; 99 Document Version Management; 100 Creative Revision Tracking | 5 |
| 3 | 116 Asset Attribution; 117 Asset History; 118 Asset Activity; 119 Asset Audit Trail; 170 Permission Auditing | 5 |
| 4 | 106 Asset Usage Tracking; 149 Storage Growth Analytics; 187 Creative Library Trends; 189 Weekly Library Analytics; 209 Library Growth Reporting | 5 |
| 5 | 152 Folder-Level Permissions; 159 Creative Access Governance; 172 Secure Asset Sharing; 175 Team Access Management; 180 Secure Creative Collaboration | 5 |
| 6 | 131 Large Library Migration; 289 DAM Migration Strategy; 293 Migration Metadata Preservation; 299 DAM Implementation | 4 |
| 7 | 160 Multi-Tenant Digital Asset Management; 162 Agency Multi-Tenancy; 166 White-Label Asset Management; 168 Agency Asset Management | 4 |
| 8 | 225 GetSibu for Multi-Market Teams; 230 GetSibu for E-Commerce Brands; 231 GetSibu for Retail Brands; 234 GetSibu for Social Media Teams | 4 |
| 9 | 136 Media Upload Management; 138 Chunked Uploads; 142 Parallel Uploads | 3 |
| 10 | 91 Creative Asset Versioning; 97 Video Version Management; 98 Image Version Management | 3 |
| 11 | 253 REST API; 255 Developer API; 279 Custom Asset Applications | 3 |
| 12 | 237 GetSibu for Education Teams; 239 GetSibu for Internal Communications; 240 GetSibu for Corporate Communications | 3 |
| 13 | 8 Creative Asset Organisation; 395 Give Your Creative Team One Source of Truth; 397 Scale Your Creative Library | 3 |
| 14 | 75 Asset Discussion History; 86 Asset Mentions | 2 |
| 15 | 161 Client Tenant Isolation; 167 Client Asset Isolation | 2 |
| 16 | 298 Creative Team Migration; 300 GetSibu Migration Support | 2 |
| 17 | 352 Marketing Productivity; 356 Asset Management Efficiency | 2 |
| 18 | 304 CDN Asset Delivery; 306 Streaming Previews | 2 |
| 19 | 55 AI Media Automation; 59 AI Creative Operations | 2 |
| 20 | 232 GetSibu for Media Companies; 238 GetSibu for Nonprofits | 2 |
| 21 | 42 AI Asset Classification; 46 AI Tag Confidence | 2 |
| 22 | 261 GetSibu API; 278 Developer Automation | 2 |
| 23 | 43 AI Media Understanding; 50 AI Media Indexing | 2 |
| 24 | 282 Creative Library Migration; 296 Migration Verification | 2 |
| 25 | 7 Modern Digital Asset Management; 360 Why Invest in GetSibu | 2 |
| 26 | 163 Per-Client Storage; 165 Per-Client Authentication | 2 |
| 27 | 139 High-Volume Media Uploads; 141 Upload Progress | 2 |
| 28 | 184 Upload Analytics; 186 Tag Analytics | 2 |
| 29 | 206 Asset Management Metrics; 208 Creative Workflow Metrics | 2 |
| 30 | 264 Asset Metadata API; 266 Asset Comments API | 2 |
| 31 | 156 Editor Permissions; 158 Organisation Admin Controls | 2 |
| 32 | 96 Campaign Asset Versioning; 115 Asset Ownership | 2 |
| 33 | 155 Manager Permissions; 157 Individual Permissions | 2 |
| 34 | 15 OCR-Powered Asset Search; 53 AI Document Discovery | 2 |

**Most reused PDF statements:**

| PDF | Statement from | Other live pages rendering it |
| --- | --- | --- |
| 31 | AI-Assisted Tagging | 66 |
| 143 | Asset Processing | 42 |
| 67 | Creative Approval Workflow | 41 |
| 21 | Creative Asset Indexing | 37 |
| 147 | Streaming Media Preview | 34 |
| 121 | Automated Asset Ingestion | 33 |
| 11 | Creative Asset Search | 32 |
| 152 | Folder-Level Permissions | 32 |
| 175 | Team Access Management | 32 |
| 62 | Asset Comments | 31 |
| 157 | Individual Permissions | 31 |
| 158 | Organisation Admin Controls | 31 |
| 181 | Creative Asset Analytics | 31 |
| 64 | Video Timeline Comments | 30 |
| 17 | Saved Asset Searches | 29 |

**Most repeated sections:**

| Section (kind: heading [cited PDF pages]) | Pages |
| --- | --- |
| timeline: Library activity over time [188,189,190,187,209] | 21 |
| story: One library for every format [25,26,27,28] | 20 |
| layers: What the platform brings together [150,8,31,11,61,151,181] | 17 |
| process: Access, from organisation to individual [158,175,152,157,154] | 14 |
| timeline: An asset's history [91,93,92,100,94] | 13 |
| workflow: What happens to an asset [143,43,31,47,12] | 11 |
| workflow: The lifecycle of an asset [121,21,31,69,68,108] | 11 |
| workflow: Building on the API [256,262,263,264,278] | 11 |
| layers: AI as a layer across the library [143,50,57,12] | 9 |
| workflow: Feedback that stays with the asset [62,63,66,64,67] | 9 |
| layers: What each client environment keeps separate [161,163,164,165,166] | 9 |
| timeline: The phases of a migration [289,290,292,296,299] | 9 |
| matrix: Who access applies to | 23 |
| comparison: Keep your structure, or design a new one | 16 |
| comparison: More ways to find an asset than its filename | 15 |
| matrix: What the asset record keeps | 13 |
| before-after: Where time and storage go | 13 |
| comparison: Beyond keeping files available | 12 |

---

## 15. Responsive audit

**Result: no issues — 27 representative pages × 9 widths (243 renders).**

- **Pages checked** (one or more per PDF group):
  - Homepage and hubs: `/`, `/platform`, `/features`, `/features/ai`.
  - Discovery and AI: `/features/asset-metadata-search`, `/features/ocr-powered-asset-search`.
  - Versioning and lifecycle: `/features/creative-asset-versioning`, `/features/asset-lifecycle-management`.
  - Storage and integrations: `/storage/automated-asset-ingestion`, `/storage/bulk-asset-import`, `/integrations/custom-integrations`.
  - Permissions: `/permissions/role-based-access-control`, `/permissions/client-tenant-isolation`, `/permissions/permission-auditing`.
  - Analytics and developers: `/analytics/storage-analytics`, `/developers/asset-upload-api`, `/developers/webhooks`.
  - Migration: `/migration/metadata-migration`, `/migration/migration-verification`.
  - Security and architecture: `/security/tenant-isolation`, `/architecture/observability`.
  - Resources, FAQ and use cases: `/resources/what-is-digital-asset-management`, `/faq/can-getsibu-integrate-with-existing-tools`, `/use-cases/video-teams`.
  - Pricing, business value and conversion: `/pricing`, `/business-value/storage-efficiency`, `/get-started/make-every-asset-discoverable`.
- **Widths:** 320, 360, 390, 430, 768, 1024, 1280, 1440 and 1920 px (mobile emulation below 1024 px).

| Check (automated, per page and width) | Result |
| --- | --- |
| Horizontal page overflow (against `documentElement.clientWidth`) | None |
| Elements overflowing the viewport (outside intentional scrollers) | None |
| Clipped text (headings, paragraphs, links, buttons, list items, table cells in overflow-hidden boxes) | None |
| Header items colliding | None |
| Hero H1 overlapping its figure | None |
| Figures wider than their column (broken diagrams) | None |
| Sticky story figure hidden under the sticky header | None |
| Cumulative layout shift while scrolling the whole page (> 0.02) | None |

**Manual checks:**
- **Mobile, 390 px** (`/migration/dam-implementation`, `/features/ai-ocr`): content order is logical (hero → figure → sections → related → previous/next → CTA → footer), tables and matrices stack, and typography stays readable.
- **Desktop story sections** checked at a normal 1280 × 900 viewport: steps stack beside a sticky figure as designed.
- **Earlier keyboard and drawer QA:** the mobile navigation drawer opens and works (27/27 keyboard checks, doc 16).
- **Images remain relevant at every width:** figures are responsive SVG illustrations, not cropped photos.

Responsive layout is **compliant**. The only mobile content note is navigation parity (§11, M6), not layout.


---

## 16. SEO / AEO audit

| Check (355 live topic pages) | Result |
| --- | --- |
| Unique `<title>` | 355 / 355; none over 60 characters |
| Unique H1, one per page, equal to the PDF title (or the recorded homepage exception) | 355 / 355 |
| Unique meta description | 355 / 355; all 50–160 characters. Written from the page's own PDF paragraph; 4 still end with a trimmed clause (validator warning: pages 1, 2, 28, 48) |
| Semantic URL | 355 / 355 (§10) |
| Canonical | 355 / 355 equal to their own path |
| Breadcrumb | 354 / 354 non-home pages: visible breadcrumb **and** `BreadcrumbList` JSON-LD |
| Structured data | `WebPage` 346; `Article` + `DefinedTerm` on 18 resources; `FAQPage` on the 9 live FAQ topics, generated from the visible answer; `Organization` + `WebSite` + `SearchAction` on home. The 59 other pages with an FAQ section have **no** `FAQPage` (deliberate: FAQPage only where the FAQ is the page's primary content) |
| Indexable in production | 355 / 355 `index,follow`; 45 blocked `noindex` and absent from the sitemap (§7). The local audit build is `noindex` by environment; the production build was verified separately (doc 17) |
| Sitemap / search membership | 355 / 355 / 355 |
| Unconfirmed claims in metadata, Open Graph, JSON-LD | **0** (`npm run verify:build`, 743 files) |
| Relevant FAQ where appropriate | 68 pages; limited by the PDF's 10 FAQ topics (§5) |
| Topic identifiable to search engines | Yes: the title, H1, description and first paragraph are the PDF topic. **Risk:** 95 near-duplicate pages can be treated as duplicate or thin content by search engines (§14) |

---

## 17. Critical failures

| # | Failure | Scope | Evidence |
| --- | --- | --- | --- |
| C1 | **Topics are not expanded as the PDF directs.** Most pages are the PDF paragraph plus related PDF paragraphs, with copy repeated across pages | 294 of 355 live pages not *developed* (71 thin); 13 PDF statements reused on more than 30 pages | §8, §9, §14; CSV `content_depth` |
| C2 | **Three live pages do not discuss their topic** (the title promises content the page cannot show) | PDF 56, 217, 297 | §9 |
| C3 | **Duplicate pages** (≥ 0.8 prose overlap) | 7 pages: 289/293/299, 75/86, 161/167 | §14 |

## 18. Medium issues

| # | Issue | Scope |
| --- | --- | --- |
| M1 | Near-duplicate pages (≥ 0.6) | 88 further pages in 34 clusters (§14) |
| M2 | Off-topic sections (e.g. versioning timeline on Permission Auditing; "Where creative libraries are heading" on What Is OCR in DAM?; media-delivery workflow on Observability; platform layers on Creative Library Navigation) | 100 sections on 85 pages |
| M3 | PDF structure elements under-represented: Benefits, Use Case, FAQ | 67 / 38 / 68 of 355 pages |
| M4 | Framed pages show another page's paragraph as their hero; two pairs share an identical hero (212/216, 252/268) | 15 framed PARTIAL pages |
| M5 | Visual repetition and mismatched secondary figures; text-only heroes on business-value pages | §13 |
| M6 | Mobile drawer omits the 38 featured topic links shown in desktop mega menus | `MobileMenu.tsx` |
| M7 | Related cards repeat destinations already linked in the page body | 230 pages |
| M8 | Search-result group labels do not follow the PDF hierarchy: Permissions & Multi-Tenancy topics are labelled "Security", Architecture & Performance "Developers", Business Value "Resources", Migration and conversion pages "Platform" | 90 live pages (`searchGroup` in `scripts/build-inventory.ts` / `sections.ts`) |

## 19. Minor issues

| # | Issue |
| --- | --- |
| m1 | "Automated Asset Ingestion" linked twice in the mega menus (Storage and Integrations columns) |
| m2 | 5 section roots are not linked from the homepage body (header and footer only) |
| m3 | 4 meta descriptions end with a trimmed clause (pages 1, 2, 28, 48) |
| m4 | `/pricing` related section contains a single link (GetSibu API) |
| m5 | Lifecycle workflow grid on `/features/creative-asset-versioning` wraps its 6th card and leaves an empty grey cell at 1280 px |
| m6 | Duplicate PDF topics appear together: `/storage/bulk-asset-import` (130) shows PDF 291's almost identical sentence as a card |
| m7 | On `/features/ai-ocr` the story section opens on "Metadata" before the OCR step |
| m8 | Use-case navigation labels drop the PDF's "GetSibu for" prefix (acceptable shortening; recorded here for completeness) |
| m9 | 59 pages with an FAQ section have no `FAQPage` JSON-LD (deliberate; revisit only if FAQ content becomes page-specific) |

---

## 20. Exact recommended fixes

**Nothing below has been applied.** Fixes are ordered by impact; each names the file or mechanism.

**F1 — Topic expansion (C1, M3). Needs GetSibu input; cannot be done by composition alone.**

1. **Ask GetSibu for per-topic source material** for the 71 thin pages first, then the 95 near-duplicates, then the remaining introduced pages. Suggested request per topic:
   - 3–5 capability statements;
   - 2–3 concrete benefits;
   - workflow steps (if any);
   - one use case;
   - 1–3 FAQs;
   - an owner who confirms each statement.
2. **Record each confirmed statement** as a source (a claim in `content/architecture/claims.ts` for factual claims; new sourced sets in `content/architecture/storylines.ts`, or authored `content/pages/<topic>.ts` registered in `content/pages/registry.ts`).
3. **Re-run** `npm run inventory` and `npm run build`, then re-run this audit (`.tmp/audit/*.mjs`). Target: thin = 0; developed ≥ 80 % of live pages.

**F2 — The three FAIL pages (C2).**

1. **Hold them** until their claims are confirmed, so no live page promises content it cannot show:
   - add `56: { claim: "auto-collections", … }`, `217: { claim: "scene-detection", … }` and `297: { claim: "onboarding-assistance", … }` to `HELD_BY_DECISION` in `content/architecture/verified-context.ts`;
   - alternatively, ask GetSibu to confirm those claims.
2. **Run** `npm run inventory`, `npm run test:publication` and `npm run build`. Expected effect: 3 more 307 redirects to their context pages; they drop out of the sitemap, search and hubs; they republish automatically when the claim is confirmed.

**F3 — Duplicate pages (C3) and near-duplicates (M1).**

1. **Add a sibling-overlap guard** in `scripts/compose-pages.ts`: after composing a category, compute prose shingle overlap between siblings. Where it is ≥ 0.6, the later page must swap out shared story sets (`storylines.ts` pages lists) for alternatives, or drop them.
2. **Add a validator warning** in `scripts/validate-inventory.ts` so overlap regressions are visible.
3. **Pair-specific changes:**
   - 289/293/299: give each only one of "The phases of a migration" and "Moving a library into GetSibu"; 293 keeps the metadata matrix.
   - 75/86: split the comments sets.
   - 161/167: give 167 the client-review and agency sets instead of the isolation layers.
4. **If GetSibu source material (F1) does not arrive:** prefer a shorter, distinct page over a duplicate one. Don't merge PDF topics (the PDF defines one page per topic).

**F4 — Off-topic sections (M2).** Add a relevance floor in `scripts/compose-pages.ts`: a content section must contain the page's own statement, an item naming the topic, or at least 50 % items from the page's own PDF group. The 100 affected sections are listed by `node .tmp/audit/extra.mjs`.

**F5 — Framed heroes (M4).** In `content/architecture/verified-context.ts`, give 216 and 268 a different verified hero source from 212 and 252 respectively. For framed pages, show the context source in the hero, as 217 already does ("From Searchable Video Library").

**F6 — Visuals (M5).**
1. In `content/architecture/visuals.ts`, choose secondary-figure diagrams by the cited card's topic (image version → version record; bulk import → ingest pipeline; OCR → `search-signals:ocr`).
2. Add hero visuals to the business-value pages.
3. Remove "media" figure-only sections from pages that already show the same diagram type.

**F7 — Mobile navigation parity (M6).** In `components/layout/MobileMenu.tsx`, render each column's `links` under its hub, as the single-column branch already does.

**F8 — Related repetition (M7).** In `scripts/compose-pages.ts` (related builder), exclude pages already linked in the body and backfill from the cluster.

**F9 — Minor.**
1. Remove the second "Automated Asset Ingestion" link in `content/architecture/navigation.ts`.
2. Give `/pricing` a related set of at least 3 verified pages.
3. Balance the 6-card lifecycle grid (render it as 3 × 2).
4. Order the AI OCR story so the OCR step comes first.

---

## 21. Final scorecard

| Metric | Formula | Result |
| --- | --- | --- |
| **PDF Topic Coverage** | implemented valid topics (live and identifiable) / total PDF topics | **352 / 400 = 88.0 %** (+ 45 blocked = 11.3 %, 3 FAIL = 0.8 %) |
| Fully compliant topics | PASS / total PDF topics | 39 / 400 = 9.8 % |
| **Page Structure Coverage** | pages following an appropriate PDF structure / live pages | **319 / 355 = 89.9 %** |
| **Content Relevance** | topic-relevant pages / live pages | **337 / 355 = 94.9 %** (352 = 99.2 % including partially relevant) |
| Content Depth | pages that develop their topic / live pages | **61 / 355 = 17.2 %** |
| **Unsupported Content** | unsupported pages or claims | **0** product claims (0 %); 15 non-PDF routes, all traceable to approved architecture |
| **Duplicate Content** | duplicate / near-duplicate pages / live pages | **7 = 2.0 %** duplicates; **95 = 26.8 %** near-duplicates or duplicates |
| **Orphan Pages** | pages with zero inbound links / live pages | **0 = 0 %** |
| **Blocked Claim Safety** | blocked claim leaks | **0 leaks (0 %)**; 45 / 45 blocked topics pass all exclusion checks (100 %) |

**Verdict: 🟡 MOSTLY PDF-COMPLIANT.**

- **Architecture, coverage, hierarchy, URLs, navigation, linking, SEO and claim safety:** compliant.
- **Per-topic content depth and non-repetition, as the PDF directs:** not yet compliant for most pages.

**Priority fixes:**
- **F1** (topic expansion) needs GetSibu input.
- **F2** (three FAIL pages) and **F3** (duplicates) can be done now.
