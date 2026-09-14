# Product-Quality Pass (Prompt 4)

Prompt 4 takes the site from functionally complete to production quality: accessible, fast, visually consistent, and honest about what GetSibu has not confirmed. Nothing was restarted or redesigned. All 415 static routes, the architecture, the design system and verified copy are unchanged.

> **Superseded in part by Prompt 5** ([16-launch-readiness.md](16-launch-readiness.md)): the 57 remaining repeats are now 0; 41 pages whose titles state claims are held rather than framed; navigation to unverified pages, FAQ 390's links and the motion-mode axe readings are resolved.
>
> The Prompt 4 brief arrived truncated at "03. IMPROVE THE SC…". This pass covers §01 (audit, then fixes) and §02 (the two thin webhook pages). The mobile story scroller, a likely §03 subject, was improved as part of the responsive fixes.

## 1. Audit

Measured on the production build before any change: axe-core 4.13 (WCAG 2.2 AA plus best practice) on 60 pages at 1280px and 390px; Lighthouse 13.4 (mobile) on 6 representative pages; a static code review of every component; content metrics computed from `content/generated/`; reduced-scale full-page screenshots.

| # | Area | Findings |
|---|---|---|
| 1 | Visual consistency | Unverified pages showed an H1 with no supporting text beside a large figure. Related rails showed empty title-only cards. The same figure could appear twice on a page (split and media). Two sections could share one heading. Figma, Premiere Pro and After Effects pages showed storage-ingestion sequences. |
| 2 | Accessibility | Story steps were dimmed to 45% opacity (text at 1.95–2.94:1). The mega-menu panels sat outside their list items, so Tab skipped them. The current process step had white text on olive (2.54:1). The 404 page had no `<title>`. Selected tab indicators were under 3:1. Search group ids contained spaces, so `aria-labelledby` broke. Links inside `role="option"`. The search close button was named "Esc". The media section title was a `<p>`. Repeated generic links ("Read more", "Learn more", "Read the full answer"). |
| 3 | Responsive | The story figure sat above the steps on phones, not sticky, so it changed while scrolled out of view. |
| 4 | Interaction | A click handler on story `<li>` elements with no keyboard route. A bare "/" shortcut (WCAG 2.1.4). No visible focus cue on the search input. The explorer tab strip clipped focus rings. Layer cards had hover borders but no link. |
| 5 | Performance | Lighthouse Performance 96–99, CLS 0, TBT 20–70ms. LCP 2.3–2.7s (simulated slow 4G); on phones the LCP element was the header logo, which lacked `fetchpriority`. Hero text and figures faded in from opacity 0, delaying paint. 13 KB of legacy JavaScript and 26 KB of unused JavaScript are in Next's framework chunk. |
| 6 | Content repetition | 309 statements appeared twice on the same page. Storylines matched loosely through categories (up to 12 pages each). 15 page pairs had story sections identical apart from "This page" markers. |
| 7 | Thin pages | Webhook pages 269 and 271 had 2 story sections. Pages 323, 329 and 340 were carried by a figure and a statement. |
| 8 | Unconfirmed content | On all 59 pages that need verification, nothing below the H1 was about the page. Their meta description, Open Graph and Twitter tags, WebPage JSON-LD and public `/search-index.json` summary still published the unconfirmed statement the body hid. |
| 9 | SEO | The unverified descriptions above (59). Section H2s repeating the page H1 (4 pages). Duplicate H2s on one page. No 404 title. Lighthouse link-text failures. SEO score 61–69, mostly the intended `noindex` outside production. |
| 10 | Navigation relationships | FAQ pages 389 and 390 had no in-content links. Webhook Automation (257) had only unverified related pages. Related rails led with cards that had nothing to say. |

## 2. Webhook pages 269 and 271 (§02)

**What is verified.** The claim `webhook-events` is *conflicting*: the product's webhook settings show different example events, and no comment or approval events. Pages 252 and 268–272 therefore cannot publish their own statements. Publishable neighbours:

- 257 Webhook Automation — webhook events can trigger downstream workflows when assets, comments, approvals or other supported events occur.
- 278 Developer Automation, 262 Asset Upload API, 266 Asset Comments API, 267 Approval API, 256 API Authentication, 277 API Security, 273 API Documentation.
- FAQ 388 "Does GetSibu Have an API?", whose answer mentions webhooks.
- The ingestion (121, 127, 143…) and approval (67, 68, 76, 103, 77) sequences.

**Decision.** There is not enough verified material for a definition, event catalogue or payload description of a specific event. So the pages are deliberate, source-safe technical pages:

| Section | 269 Asset Created Webhook | 271 Approval Requested Webhook |
|---|---|---|
| Hero | Webhook Automation statement as lede, "From Webhook Automation", API figure focused on webhooks | same |
| Context workflow | "From source to searchable" (how content enters the library) | "From draft to approved" (the approval process) |
| API topics | "Building with the GetSibu API": Developer Automation, Upload, Comments, Approval, Authentication and Security APIs | same |
| Next step | API Documentation | same |
| Topic list | Every webhook page, this one marked "This page" | same |
| FAQ | Does GetSibu Have an API? | same |
| Related, CTA | publishable pages first, the rest as a compact list | same |

**Deliberately not built:** an event list. Presenting the Comments and Approval API statements as webhook events would re-assert exactly the conflicting claim, so they appear only as API topics. `event-list` stays unused until GetSibu confirms an event catalogue. The same treatment covers 252, 268, 270 (feedback workflow) and 272.

## 3. Pages that need verification

`content/architecture/verified-context.ts` frames each unverified page with verified pages; `scripts/build-inventory.ts` records the choice as `contextPage`.

- **Context page:** curated where a neighbour would imply the capability, otherwise the first publishable cluster primary, cluster member or section root.
  - Curated: creative tools → Custom Integrations (the app lists those tools as not supported); scene detection and face grouping → Practical AI for Creative Teams; backup, restore, replication, SSO and SCIM → GetSibu Security.
  - The validator requires every context page to be canonical and publishable.
- **Metadata:**
  - The description becomes "{Title}: {context statement}". It is cut at a clause boundary ("such as", "including", "so that", "rather than", "through"), never at a condition. Question titles are followed by the statement as its own sentence.
  - Open Graph, Twitter, JSON-LD and the search index all read it, so none repeats the unconfirmed statement (validator error).
- **Hero:** the context statement as lede, with a "From {page}" link naming its source.
- **Sections:**
  - a subject-specific workflow where one exists;
  - verified topics (curated per group);
  - the page's whole topic as a list with "This page" marked, titles resolved at render so claim terms stay out of composed copy;
  - a verified next step;
  - curated FAQs.
  - No category-level storylines: a loose match would imply the capability.
- **Related:** publishable pages first, backfilled from the context page. Cards appear only when three or more have statements; otherwise every related page is a compact title list.

## 4. Repetition and depth

- **Two passes per page.** The first finds the pages its fixed sequences (storylines, matrices) show; the second reserves them so split, editorial, capabilities, alternating, checklist, statement and FAQ sections choose other pages. Reuse counters are restored between passes, and composition repeats while a page is short and there is more to reserve.
- **Final pass.** It removes statements and pages already shown higher up. It drops a section only while the page keeps three story sections; a sequence's own "This page" step may restate the lede.
- **Caps.** A category match reaches at most 6 pages per set (was 12). A cluster match reaches at most 10 pages for a storyline when the page is not one of its steps. Caps lift only for a page that would otherwise be short.
- **Variety among siblings.** Pool-based sections rotate their best candidates by page number, so pages in one cluster lead with different pages.
- **Figures and headings.**
  - No figure appears twice below the hero; a story may explore the hero's own figure.
  - No heading repeats the H1 or another section's heading. Editorial, checklist and capability sections fall back to "More on {category}" and similar; otherwise the section is dropped.
- **Depth.** At least three story sections, at least two of them more than a figure or a statement.

| Metric | Before | After |
|---|---|---|
| Statements shown twice on a page | 309 | 57 (warned; overlapping sequences on pages with no spare section) |
| Pages with fewer than 3 story sections | 2 | 0 |
| Pages carried by a figure and a statement | 5 | 0 |
| Unverified pages with nothing about the page below the H1 | 59 | 0 |
| Pages with byte-identical story sections | — | 0 |
| Sections whose H2 repeats the H1 | 4 | 0 (validator error) |
| Composed sections | 2,440 | 2,475 |

Pages in one cluster can still share sequences and matrices, differing by their "This page" row or step, hero, lede and figure focus: for example the access-control pages, or Google Drive, OneDrive and Local NAS. Authored `PageContent` is the fix for those.

## 5. Accessibility and interaction fixes

- **Story scroller:**
  - Text is never dimmed. The active step gains an olive rail and a coloured number, and inactive bodies use `fg-muted` (5.8:1).
  - Keyboard focus inside a step selects it; the `<li>` click handler is gone.
  - Server HTML shows the page's own step.
- **Header:** each mega panel is rendered inside its `<li>`, straight after its trigger. Verified: Tab from an open Features trigger lands in the panel, and Escape closes it and returns focus. The "/" shortcut was removed; Ctrl/⌘K remains.
- **Search dialog:**
  - Options are the links themselves (`role="option"` on `<a>`), and groups are named with `aria-label`.
  - The close button is named "Close search (Esc)", and the input row shows a focus bar.
  - Verified: axe finds no violations with results open, and `aria-activedescendant` resolves.
- **Site search:** group ids are slugified.
- **Tabs:** the explorer indicator is a 3px accent bar, the mega rail marks the selected column with an accent edge, and the explorer strip no longer clips focus rings.
- **Process sections:** the current node uses navy text on olive.
- **Headings:** the media section title is an `<h2>`. Headings are unique per page, which also fixes axe `landmark-unique`.
- **Link purpose:**
  - "Read more", "Read the full answer" and CTA "Learn more" carry the destination in screen-reader text.
  - Linked item titles are underlined at rest, not only on hover.
  - Layer cards without a link no longer have hover borders.
- **404:** titled "Page not found | GetSibu"; Next adds `noindex`.

## 6. Responsive

- On phones taller than 700px the story figure is sticky under the header (max 24rem wide), with the steps scrolling beneath. Verified at 390×844: the figure stays at 80–390px and follows the centred step.
- Related title lists collapse to one column; the topic list keeps its "This page" badge on wrap.
- The overflow sweep (20 pages at 320–1920px, plus one page per recipe and the changed unverified pages, 56 in all, at 320 and 390px) finds no horizontal overflow.

## 7. Performance

- **Header logo:** it preloads with `fetchpriority="high"` and eager loading, using `preload` in place of the deprecated `priority`.
- **Entrance animations:**
  - Above-the-fold entrances never start fully transparent, because a fade from 0 delays the element's paint. Hero text now rises (`gs-lift`, transform only).
  - Figure parts fade from 0.2 opacity (`gs-fade-soft`) with only a start keyframe.
  - This also fixed a latent bug: the old `to { opacity: 1 }` with `fill-mode: both` overrode focus dimming, so hero figures lost their page-specific focus whenever motion was allowed. Verified: dimmed parts now settle at 0.35.
- **Tried and reverted: `experimental.inlineCss`.** It removed the stylesheet request but more than doubled HTML transfer (21 KB → 54 KB on the webhook page), and simulated LCP worsened (2.6s → 2.9s).
- **Not changed:** the 13 KB legacy and 26 KB unused JavaScript belong to Next's framework chunk. Next already targets modern browsers by default.

Lighthouse mobile, final build (before → after):

| Page | Performance | Accessibility | Best practices | SEO* | LCP (simulated) | CLS |
|---|---|---|---|---|---|---|
| `/` | 99 → 97 | 100 | 100 | 69 | 2.3 → 2.7s | 0 |
| `/features/ocr-powered-asset-search` | 97 → 97 | 100 | 100 | 61 → 69 | 2.7 → 2.7s | 0 |
| `/features/ai` | 97 → 96 | 100 | 100 | 61 → 69 | 2.7 → 2.7s | 0 |
| `/pricing` | 97 → 97 | 100 | 100 | 69 | 2.7 → 2.7s | 0 |
| `/resources/what-is-digital-asset-management` | 96 → 97 | 100 | 100 | 61 → 69 | 2.6 → 2.7s | 0 |
| `/developers/asset-created-webhook` | 97 → 97 | 100 | 100 | 61 → 69 | 2.6 → 2.7s | 0 |

\* The only remaining SEO failure is `is-crawlable`: builds without `SITE_ENV=production` are `noindex` by design.

The LCP element is now the hero H1 or lede, painted with the first render (observed render delay 125–210ms, Speed Index 0.9s). The remaining simulated LCP is dominated by web-font timing on throttled 4G. The homepage's lower score reflects that its LCP element changed from a figure label to the larger display H1.

## Validation added

`npm run inventory:validate` now also fails the build when:

- an unverified page's meta description or search summary repeats its own statement, or it has no canonical, publishable context page;
- a verified-context entry points at a missing or unpublishable page, or its topics heading contains a blocked term;
- a composed section repeats a figure (other than a story exploring the hero figure), repeats the H1, or reuses another section's heading;
- an unverified page's hero lede does not come from its context page.

It warns on statements shown twice on a page (57, overlapping sequences), on pages carried by media and statements, and on verified-context entries for pages that no longer need verification.

## QA performed

Production build (415 static pages), `next start`, headless Chrome over the DevTools protocol; tools are installed in the gitignored `.tmp/` (not project dependencies).

- **axe:** 60 pages (one per recipe, hubs, home, search, 404, unverified pages) at 1280 and 390px.
  - With reduced motion: 0 violations.
  - With motion: 0 violations apart from 5 contrast readings on elements caught mid scroll-reveal, which are fully opaque once in view.
- **Interaction:** mega-menu Tab order and Escape; "/" no longer opens search; Ctrl+K opens it; search dialog axe run; story focus sync; figure dimming with motion allowed.
- **Lighthouse:** the six pages above, before and after.
- **Screenshots:** unverified webhook, integration and security pages at 1280px; the webhook page at 390px; the sticky phone story.
- **Overflow:** as in §6.
- **Validation:** passes; `npm run build` passes.

## Remaining issues and decisions

- **Unverified claims (GetSibu):** webhook event catalogue, integrations (Slack, Figma, Premiere Pro, After Effects, Frame.io, Zapier, storage connectors), SSO/SCIM tiers, resilience, plans. Confirming them in `claims.ts` restores each page's own statement automatically.
- **Navigation:** six navigation links still point at unverified pages (validator warning). FAQ 390 has no in-content links; hubs, navigation and the sitemap reach it.
- **Same-cluster pages** still share sequences and matrices (§4); authored `PageContent` is the fix.
- **Descriptions:** 22 meta descriptions are still truncated (content phase).
- **Figures on phones:** diagram text remains small; the figures carry full `aria-label`s.
- **Content still missing:** `/contact`, `/about` and legal pages await GetSibu content; the favicon needs a square export.
