# J. Internal Linking Model

Every link between pages is computed from the PDF's own structure: its grouping, its topic overlaps, and the concepts each paragraph names. No link is random or hand-typed as a URL.

## Relationship fields (per inventory page)

| Field | Meaning | Source |
|---|---|---|
| `parentPath` / `breadcrumb` | Structural parent chain | Section + category |
| `children` | Pages listed on a section root, grouped by cluster | Section membership + `ROOT_LISTINGS` cross-listings |
| `previous` / `next` | Neighbours in PDF order within the category | PDF order |
| `clusters` | Topic clusters the page belongs to | `content/architecture/clusters.ts` (80 clusters) |
| `mentions` | Pages whose concept the source paragraph names | `content/architecture/lexicon.ts` scanned over the PDF text |
| `related` | Top 6 related pages (excluding FAQs and conversion pages) | Scored, see below |
| `relatedFeatures` | Top 4 capability pages | Scored, filtered to capability types |
| `relatedResources` | Top 3 explainers | Scored, `resource` type |
| `relatedFaqs` | Top 3 FAQs | Scored, `faq` type |
| `relatedUseCases` | Top 3 use cases | Scored, `use-case` type |
| `cta.contextual` | The conversion page (391–400) sharing a cluster, else the category default | Clusters + `CATEGORY_CONVERSION` |

## 1. Topic clusters

80 clusters group pages about one topic **across sections**, which is where the valuable links are: a feature page, its explainer, its FAQ, its use cases, its API and its business case.

Example — **Semantic and natural language search** (`primary`: 39)

```
14 Semantic Creative Search      /features/semantic-creative-search
18 Natural Language Asset Search /features/natural-language-asset-search
39 AI Semantic Search  ◀ pillar  /features/ai-semantic-search
49 AI Creative Search            /features/ai-creative-search
317 Search Infrastructure        /architecture/search-infrastructure
363 What Is Semantic Search?     /resources/what-is-semantic-search
```

Example — **AI vision analysis** (the chain from the brief)

```
AI Scene Detection (33) ─┬─ AI Vision Analysis (32, pillar)
                         ├─ AI Object Detection (34) · AI Mood Detection (35)
                         ├─ AI-Powered Video Discovery (51)
                         ├─ GetSibu for Video Teams (212) · Post-Production (216) · Documentary (217)
                         └─ What Is Scene Detection? (365)
```

## 2. Mentions (concept links from the source text)

The lexicon maps 79 concepts to their explaining page (e.g. "scene detection" → 33, "OCR" → 38, "Google Drive" → 122, "webhooks" → 252, "default-deny" → 154). Each PDF paragraph (plus merged duplicates) is scanned with word-boundary matching; hits become `mentions` in order of first appearance.

Example — **212 GetSibu for Video Teams**: *"Video teams can search footage, identify **scenes**, apply **AI-generated tags** and collaborate directly on the **timeline**."* → mentions 33 AI Scene Detection, 31 AI-Assisted Tagging, 64 Video Timeline Comments.

This is how use cases link to exactly the features the PDF says those teams use, and how conversion pages (398) link to the capabilities they promise.

## 3. Scoring `related`

For page *A* and every canonical candidate *B*:

| Signal | Points |
|---|---|
| Each shared cluster | +5 |
| *B* is the primary of a shared cluster | +2 |
| *A*'s paragraph mentions *B* | +3 |
| *B*'s paragraph mentions *A* | +1 |
| Same category and within 2 positions in PDF order | +1 |

Ties break by PDF-number proximity. Scores of 0 are never linked. Home is never a related target (it's in the header).

Resulting link graph: every leaf has ≥ 3 related links (average 5.9); average contextual inbound links per page ≈ 12; every page is listed on at least one hub (validator error otherwise).

## 4. Overlap: writing to the angle {#overlap}

37 clusters are `overlapRisk: "high"`: their members' PDF paragraphs say nearly the same thing. They stay as separate pages because each sits in a different place in the PDF, which means a different reader intent. Each member carries an **angle** (copied into `InventoryPage.angle`):

| Cluster | Page | Angle |
|---|---|---|
| Metadata preservation | 22 Media Metadata Management | Everyday metadata on the asset record |
| | 132 Metadata Preservation | Ingestion: which fields are kept on import |
| | 286 Metadata Migration | Migration workstream from a previous system |
| | 293 Migration Metadata Preservation | Why losing metadata in the move destroys context |
| Previews and delivery | 147 Streaming Media Preview | In the library: inspect large media without downloading |
| | 306 Streaming Previews | Architecture: how streaming previews are delivered |
| | 313 Media Preview Performance | Generation + streaming reduce review friction |
| Access control | 153 Role-Based Access Control | Roles: owners, administrators, managers, editors, users |
| | 325 RBAC Security | Security angle: limiting what users can perform |
| Webhooks | 252 Webhooks | What webhooks are in GetSibu |
| | 257 Webhook Automation | Triggering downstream workflows |
| | 268 Webhook Events | The event catalogue |

Rules for content authors:
1. Write the page to its angle; don't restate the pillar's general explanation — link to it.
2. The pillar (`primary`) owns the broad query. The computed rails already link 415 of 432 cluster memberships to their pillar (the rest are members of very large clusters, e.g. access control); authored copy links the remainder inline.
3. If a page can't be differentiated with sourced material, record it and propose a merge (add to `MERGES` with a redirect) rather than publishing near-duplicate copy.

## 5. Placement of links on a page

| Link type | Where it renders |
|---|---|
| Breadcrumb | Top of hero |
| Mentions | Inline, first mention only, in authored copy (`Link page={33}`) |
| Workflow/process stages | A stage may link to its page (`stage.page`) |
| `relatedFeatures` / `related` | "Related" section near the end |
| `relatedUseCases` | "Who uses this" row on capability pages |
| `relatedResources` / `relatedFaqs` | "Learn more" / "Questions" blocks, only when non-empty |
| `previous` / `next` | Compact section navigation above the footer on leaf pages |
| `cta.contextual` | The CTA band headline (e.g. "Turn Your Asset Library Into Intelligence") + primary CTA |
| Hubs | Every page, grouped by cluster, with its key statement |

Links always reference PDF page numbers in data and resolve to URLs through the inventory, so a slug change or merge never produces a broken link.
