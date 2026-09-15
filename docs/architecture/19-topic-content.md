# Topic Content (all 400 PDF topics)

This document records the audit of the 400-topic implementation and the authored-content system that replaces composed pages with topic-specific GetSibu pages. The presentation layer (the Sky9-derived layout, interactions and motion) is documented separately in [18-sky9-experience.md](18-sky9-experience.md). The two were delivered in parallel by two sessions with a strict file split: presentation (`app/**`, `components/**`, `app/globals.css`) and content (`content/**`, `types/content.ts`, `scripts/**`).

> Status: complete (2026-09-15). All 355 live topics are authored and fact-checked. All 41 held topics have reviewed drafts that publish when their claims are confirmed. Results are in §4; the per-topic audit is [21-topic-audit.md](21-topic-audit.md).

## 1. Audit of the existing implementation (2026-09-15)

Inputs: `Getsibu.pdf` (via `content/source/pdf-pages.json`), the official site capture (`docs/source/official-site-2026-09-14/`), the Sky9 capture (22 page outlines at 1440 px and 390 px, rendered screenshots and the formatted page components, in the gitignored `.tmp/sky9/`), the composed pages in `content/generated/page-sections.json` at the initial commit, and the PDF compliance audit ([PDF-WEBSITE-COMPLIANCE-AUDIT.md](PDF-WEBSITE-COMPLIANCE-AUDIT.md)).

### 1.1 Against the PDF

| Question | Finding |
|---|---|
| Are all 400 topics accounted for? | Yes. 396 canonical pages (4 exact duplicates, 242–245, merged into 122–125). 355 live, 41 held because their title states a claim GetSibu has not confirmed. |
| Does every live page develop its topic, as the PDF directs ("Hero → Introduction → Features → Benefits → Workflow → Use Case → FAQ → CTA, while avoiding repetitive copy")? | No. The compliance audit found 61 of 355 pages developed, 205 introduced, 71 thin, and 3 that do not discuss their topic (56, 217, 297). |
| Where does page copy come from? | Only PDF paragraphs, which run 7–58 words (median 15). 312 of 354 composed heroes are the page's own paragraph verbatim. Every other sentence on a page is another topic's paragraph. |
| How much is each page about its topic? | The median composed page has 198 words of body copy, most of it belonging to other topics. The median topic-specific word count is 24. |
| Is copy repeated? | Yes. 95 live pages are near-duplicates of a sibling; 13 PDF statements appear on more than 30 pages; identical storyline sections recur ("Who access applies to" on 23 pages, "Library activity over time" on 21). |
| Are FAQs topic-specific? | No. 68 pages have an FAQ section, with 88 questions in total; every one is a PDF FAQ page (381–390) reused on other pages ("Does GetSibu Support Multiple Clients?" appears on 16). |
| Benefits and use cases? | Rare: 67 pages have a benefits-type section and 38 a use-case section. |

### 1.2 Against getsibu.com

The official site adds positioning ("The operating system for your creative library"), CTAs and a set of capability statements, most already mirrored in the PDF. It also contains template placeholders and claims the product's own code contradicts; `content/architecture/claims.ts` records each one. Nothing there changes the page list. It contributes wording for publishable claims (for example timecoded comments, saved searches shared by URL, hierarchical tags with synonyms and inheritance).

### 1.3 Against Sky9 (information presentation)

Sky9's subpages follow one consistent, information-dense flow (measured from the page outlines):

| Sky9 block | What it does | Existing GetSibu equivalent |
|---|---|---|
| Hero with badge, H1, subtitle, two actions and breadcrumbs | Frames the page | `hero` (present) |
| "Module overview": long intro, **key concepts as check-chips**, a highlighted "hands-on" card, **sticky summary card** | Explains the topic before anything else | **Missing.** Pages opened with a figure or another page's statement |
| "What you'll learn": icon cards with bullet lists | Breaks the topic into parts | `capabilities` without points or icons; mostly other pages' statements |
| Numbered roadmap (5 icon cards) | Shows the sequence | `process`/`workflow` (present, but mostly cross-topic sequences) |
| Tabs, accordions, progressive reveal | Lets a reader choose depth | **Missing** from inner pages; FAQ was the only expandable content |
| Practical component / career paths chips | Grounds the topic in real work | **Missing**; no scenario section |
| FAQ accordion, 8 page-specific questions | Answers the reader's next questions | Reused PDF FAQs on 68 pages |
| "Other topics" compact link grid and "internal link engine" | Onward navigation, secondary | Heavy: a related card grid on 351 pages; 22% of all composed sections (489 of 2,208) were link directories (related grids, page-link checklists, "More in …" grids); previous/next on every leaf page; section roots listed every child |
| CTA band | Conversion | `cta` (present) |

Sky9's weaknesses stay rejected in the content model: generated FAQs that repeat across pages, invented stats and testimonials, and pages that are mostly links.

### 1.4 Conclusion

The architecture is sound: routes, inventory, claims, publication states, navigation and SEO. The pages, though, are assemblies of other topics' sentences inside a template. Composition cannot fix that, because the PDF gives each topic one short paragraph. The fix is **authored content for every topic**. Each page explains its topic from publishable GetSibu facts plus claim-free explanation, laid out in Sky9's information pattern, with link directories reduced to one short strip.

## 2. The authored-content system

### 2.1 Section kinds added (types/content.ts)

| Kind / field | Sky9 pattern | Content rules |
|---|---|---|
| `overview` | Module overview + key concepts + hands-on card + sticky summary | 2–4 paragraphs; 3–8 key-concept chips; optional "in practice" highlight; `glance` facts are visible claims: sourced and never numeric |
| `tabs` | Filter tabs | 2–5 perspectives on the same topic (by role, asset type, stage); every panel in the HTML |
| `accordion` | Expandable detail | 3–8 deep dives with a one-sentence summary |
| `scenario` | Practical component | An unnamed, illustrative team; every GetSibu action cited |
| `capabilities.items[].icon/points` | "What you'll learn" cards | 3–9 items |
| `process.steps[].icon` | Numbered roadmap | 3–6 steps |
| `checklist.variant: "chips"` | Career-path chips | Short labels, never a list of page links |
| `related.variant: "compact"` | "Other topics" strip | 2–6 pages, at most one per page |
| `TopicIcon` | Icon tiles | Semantic names; the presentation layer maps them to glyphs |

### 2.2 Truth tiers

Every sentence on an authored page is one of:

- **Tier A — GetSibu statements.** Traceable to a publishable PDF paragraph or a publishable claim in `claims.ts`, and cited in the section's `sources`. Paraphrase is allowed; added specifics are not: no numbers, limits, formats, roles, plans, prices, integrations, interface elements, automation, accuracy or compliance.
- **Tier B — explanation.** Vendor-neutral, claim-free explanation of the concept, the problem and the practice. No statistics, studies, named organisations or quotes. Cited as `editorial`.
- **Tier C — illustrative scenarios.** Hypothetical unnamed teams; qualitative outcomes; every GetSibu action is Tier A.

Framed pages never state or paraphrase their own unconfirmed paragraph. Held pages may have drafts that state the claims holding them. A held page renders nowhere, so its draft publishes only when the claim is confirmed.

### 2.3 Quality gate (scripts/content-quality.ts)

Run by `npm run inventory:validate` for every registered page:

- **Shape:** hero first, CTA last; an overview or definition; at least 3 body sections; exactly one FAQ (3–8 authored questions); at most one related strip (2–6 pages); no two identical kinds in a row; no checklist made only of page links; per-kind item limits.
- **Depth:** at least 650 words of copy per topic page (450 for FAQ pages).
- **Claims:** every visible string passes the claims register (held drafts may state only their own claims); framed pages never repeat their own PDF statement.
- **Honesty:** no figures with units or percentages, no interface mimicry ("click", "button", "menu"…), no superlatives ("seamless", "revolutionary"…), no placeholders.
- **Language:** British spelling; link text names its destination; headings are specific (not "Overview", "Features", "How it works").
- **Repetition:** no sentence of nine or more words reused on two pages (PDF sentences aside), no FAQ question asked on two pages, and prose overlap under 0.2 (5-word shingles, Jaccard) between any two pages.

### 2.4 Pipeline changes

- `scripts/build-content-registry.ts` regenerates `content/pages/registry.ts` from `content/pages/<section>/<pdf-number>-<slug>.ts`.
- `scripts/build-inventory.ts` uses an authored `metaDescription` when present (still length-, uniqueness- and claim-checked) and adds overview key concepts to the site-search keywords.
- `scripts/validate-inventory.ts` runs the quality gate and allows held drafts their own claims.
- `scripts/compose-pages.ts` already skips authored pages; composition remains the fallback for any live page without authored content.

## 3. How the pages were written

1. **Source packs** (gitignored tooling in `.tmp/content/`). Each page got a packet: PDF title and paragraph, publication state, own claims, cluster angle, siblings' angles and live related pages. All writers shared one fact bank of publishable statements, publishable site claims and blocked claims with their forbidden terms.
2. **Guide and pilot.** A writing guide set out truth tiers, page anatomy by page type, per-kind specs, voice, links and a self-review checklist. A reference page (64) and a five-page pilot (use case 213, framed use case 217, explainer 366, analytics 188, section root 281) were reviewed before scaling. The pilot led to guide changes: glance headings, section roots, link counts, centred heroes and scenario links.
3. **Batches.** Writers worked in batches of 7–17 pages, split along PDF order so cluster siblings stayed together. Writers of the second half of a category read the first half before planning. Every page ran through the quality gate as it was written.
4. **Independent fact-check.** Every batch was reviewed by an agent that did not write it, sentence by sentence against the fact bank. Reviews changed roughly 4–15 statements per page. Their findings became guide sections §10 "Known unknowns" and §11 "What review found", and two new automatic checks: the same point made twice on a page, and framed pages rebuilding their withheld paragraph.
5. **Promotion.** Only reviewed pages were copied into `content/pages` and registered. A final pass moved each page's category link from the hero into the overview's glance card, the associated-programme card of the Sky9 pattern.
6. **Held drafts.** A separate brief (own claims only, in the PDF's hedged wording; links only to live pages) and their own reviews. A held draft file may name only its own claims, even in comments.

### Recurring writer mistakes found in review (now rules)

- **Unknowns implied through examples or step order.** Examples: approval before search implying unapproved tags are not searchable; threads carried into new versions; outside users in the library; analytics split by team or client; saved searches that refresh.
- **Dropped hedges and overstatement:** "can help" became "does"; "every", "anyone", "never".
- **Repetition:** FAQ answers and highlights restating the page's own sections; the same general advice on several siblings.
- **Framed pages** assembling their withheld claim from neighbouring facts.

## 4. Results

| Measure | Before (composed pages, 2026-09-14) | After (authored pages) |
|---|---|---|
| Live topics with content written for that topic | 61 of 355 developed (17%) | **355 of 355** (all reviewed) |
| Held topics | 41, no content | 41, reviewed drafts ready for confirmation |
| Pages not discussing their own topic | 3 (56, 217, 297) | 0. All three rewritten around their topic from publishable facts and re-reviewed |
| Hero introduction = the PDF paragraph | 312 pages | 0 (a gate error) |
| Copied PDF sentences as a share of prose | most prose | at most 11% on any page (gate limit 35%) |
| Body copy per page | median 198 words, mostly other topics' statements | median 1,087 words (range 617–1,766), counted across headings, chips and prose |
| Link-directory sections | 22% of all sections; related grids on 351 pages; previous/next on every leaf | one compact strip per page (346 pages, 5.9 links on average; none on section roots); 0 pages where link lists exceed 25% of body sections |
| Duplicate / near-duplicate pages | 7 duplicates, 95 near-duplicates (≥ 0.6) | highest prose overlap between any two pages 0.03 (gate limit 0.20); no sentence of nine or more words, and no FAQ question, used on two pages |
| FAQ content | 88 reused PDF FAQ questions on 68 pages | 1,222 authored questions on 354 pages, each unique site-wide |
| Benefits and use cases | 67 and 38 pages | 148 practical scenarios, 64 comparisons, 49 before/after sections; every use case has a team-specific scenario |
| Interactive depth | FAQ only | 273 accordions and 191 tab sets |
| Unsupported claims | 0 leaks | 0 leaks. `verify:build` scans 743 built files; the claim gate covers every authored string, including glance facts, chips and captions |

Section kinds on live topic pages (354, excluding the homepage): overview 354, FAQ 354, CTA 354, related 346, accordion 273, tabs 191, scenario 148, capabilities 98, process 85, comparison 64, matrix 57, before/after 49, workflow 38, layers 33, checklist 28, definition 27, timeline 22.

**Verification (2026-09-15):**
- `npm run build` passes: prebuild validation of 396 authored pages, `next build`, and `verify:build` (route matrix of 417: 349 LIVE, 21 SAFE-LIVE, 41 HELD, 6 REDIRECT; 368 sitemap URLs; 367 pages' metadata).
- `npm run test:publication` passes 187 checks in 8 scenarios. Confirming a claim publishes its held draft; revoking one holds its page again.

### Topic images (outside this system)

A separate image layer (`lib/content/images.ts`, `content/generated/image-matrix.json`, `public/images/topics`) was added to rendering by another tool during this work. Its generated captions quoted PDF paragraphs, including framed pages' withheld claims, and described unconfirmed interfaces, which failed `verify:build`. With the user's approval, only its alt text and captions were rewritten, using `scripts/image-captions.ts` (also used by `scripts/build-image-inventory.ts`): "Illustration: <neutral scene>" or "Illustration accompanying “<reviewed heading>”". Paths, prompts and the images themselves are unchanged. Open decisions on that layer are listed in the final report: generated photographs versus the figure rules, image files for held topics under claim-naming paths in `public/`, a "Product Visual" label, and local paths in `scripts/generate-all-images.ts`.
