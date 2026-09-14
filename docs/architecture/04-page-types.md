# D. Page Type System

Source of truth: `content/architecture/page-types.ts`.

A **page type** is a contract, not an implementation: what the page must achieve, its search intent, its schema.org types, and the **recipes** (ordered section sequences) it may use. All 396 canonical pages render through one section system (see [07-content-data-model.md](07-content-data-model.md)); page types only choose and order sections.

## Types

| Letter | Type | Pages | Intent | Purpose | Schema |
|---|---|---|---|---|---|
| — | `home` | 1 | navigational | Establish what GetSibu is; route each audience | WebPage, Organization, WebSite |
| A | `platform` | 10 | commercial | A platform-level idea and how the parts combine | WebPage |
| B | `feature` | 44 | commercial | One capability: what, how, where it fits | WebPage |
| C | `ai-feature` | 30 | commercial | What the AI analyses, what becomes searchable, how people stay in control | WebPage |
| D | `storage` | 19 | commercial | How content gets in and becomes searchable | WebPage |
| E | `workflow` (governance / lifecycle) | 38 | commercial | Versions, statuses, lifecycle stages, the record kept | WebPage |
| F | `access-security` | 47 | commercial | A control: who, what it restricts, how it is recorded | WebPage |
| G | `analytics` | 33 | commercial | What a view shows and which decision it supports — no invented figures | WebPage |
| H | `developer` | 28 | commercial | A developer capability; specifics link to API docs | WebPage, TechArticle |
| I | `migration` | 24 | commercial | Moving a library: what is preserved, mapped, verified | WebPage |
| J | `resource` | 20 | informational | Answer the question directly, then explain with structure | Article, DefinedTerm |
| K | `faq` | 10 | informational | Direct sourced answer first, link to the full explanation | FAQPage |
| L | `conversion` | 10 | transactional | One promise from the PDF, one action | WebPage |
| M | `integration` | 13 | commercial | What connecting a tool/source does and what flows | WebPage |
| N | `architecture` | 20 | commercial | How the platform keeps search/previews/uploads responsive | WebPage, TechArticle |
| O | `use-case` | 30 | commercial | A team's material + the capabilities the PDF names for them | WebPage |
| P | `pricing` | 7 | commercial | Choose a plan using confirmed plan details only | WebPage |
| Q | `business-value` | 12 | commercial | Qualitative case — no ROI figures | WebPage |
| — | `section-index` | 12 hubs | navigational | List every page, grouped by cluster | CollectionPage, ItemList |

Types M–Q extend the brief's A–L because the PDF has whole groups (Use Cases, Integrations, Architecture, Pricing, Business Value) whose content shape differs from any A–L type.

### How a page gets its type

1. The category default (e.g. Analytics → `analytics`).
2. `PAGE_TYPE_OVERRIDES` where the content shape differs from the group. Examples: approvals inside Collaboration (67, 68, 71, 76, 77, 89) are `workflow`; storage sources (122–126) are `integration`; migration topics inside Storage (131–134) are `migration`; storage analytics (148, 149) and Folder Access Maps (173) are `analytics`; governance inside Permissions (159, 179) is `workflow`; "Why Invest in GetSibu" (360) is `platform`.

## Recipes

Each type has 2–4 recipes. A recipe is an ordered list of section kinds. Full list in `page-types.ts`; highlights:

| Type | Recipes (sections) |
|---|---|
| platform | **statement** hero → statement → layers → split · **contrast** hero → before-after → alternating · **story** hero → story → media |
| feature | **split** hero → split → process · **story** hero → story → editorial · **media** hero → media → capabilities |
| ai-feature | **input-output** hero → workflow → split → editorial · **detection-overlay** hero → media → before-after · **control** hero → statement → process → split · **discovery** hero → before-after → media · **operations** hero → editorial → layers |
| workflow | **timeline** hero → timeline → split · **record** hero → split → timeline · **states** hero → workflow → editorial · **governance** hero → statement → matrix |
| storage | **pipeline** hero → workflow → split · **transfer** hero → split → timeline · **reliability** hero → process → editorial · **overview** hero → media → capabilities |
| access-security | **model** hero → matrix → split · **boundaries** hero → layers → editorial · **assurance** hero → statement → checklist · **assurance-detail** hero → split → editorial |
| analytics | **view** hero → media → editorial · **questions** hero → split → checklist · **trend** hero → timeline → split |
| developer | **flow** hero → workflow → editorial · **events** hero → event-list → split · **event-flow** hero → workflow → event-list · **foundation** hero → statement → layers |
| migration | **phases** hero → timeline → checklist · **mapping** hero → comparison → split · **source** hero → workflow → editorial |
| use-case | **material** hero → split → story · **workflow** hero → workflow → alternating · **organisation** hero → editorial → capabilities |
| resource | **definition** definition → editorial → process → faq · **visual** definition → split → layers → faq · **essay** hero → editorial → timeline → editorial |
| faq | **answer** definition → related → cta · **answer-visual** definition → media → related → cta |

Every recipe ends with `related` and (except resources) `cta`. Types list `appendWhenAvailable: ["faq"]` — an FAQ section is added **only** when authored Q&A exists for that page, never as filler.

### Recipe assignment (anti-sameness)

`scripts/build-inventory.ts` assigns a recipe to every page:

1. **Pins** (`RECIPE_PINS`) for topics that clearly need a layout. A pin is either one recipe or a **family** the builder alternates through — e.g. AI detection pages 33–38 alternate `ai-input-output` / `ai-detection-overlay`; security controls alternate `access-assurance` / `access-assurance-detail`.
2. **Rotation** for everything else, through the type's non-`pinOnly` recipes, in PDF order within the category.
3. In both cases the builder avoids the previous page's recipe and the next page's single pin.

Result: of 368 adjacent leaf pairs, **4** share a recipe — the intentional series of Free/Pro/Business plan pages (342–344) and the three pricing-guidance pages (345–347), where a consistent layout helps comparison. Before families and look-ahead it was 111.

### Rhythm rules for recipes

- No two dense sections back to back (`matrix`, `capabilities`, `checklist`, `event-list` are dense; `statement`, `media`, `split` are open).
- `capabilities` (the only card-grid) appears at most once per recipe and in only 4 recipes.
- Content may change recipe via `PageContent.recipeOverride` with a written reason; the validator records it.

## What varies besides the recipe

Two pages on the same recipe still differ, by data:

- **Section surface** (`default` / `muted` / `inverse`) and **density** hints per authored section.
- **Visual medium** per category and page (diagram vs product UI vs photography vs data visual vs typographic), see [08-visual-and-image-strategy.md](08-visual-and-image-strategy.md).
- **Hero layout**: `split`, `centered`, `statement`.
- Related rails are computed per page; FAQ and use-case rails only appear where relationships exist.
