# GetSibu Website — Architecture

Audit, source analysis and complete architecture for the GetSibu website. Everything here is backed by data in `content/architecture/` and the generated inventory; the validator keeps docs, data and routes in step.

| Doc | Brief section |
|---|---|
| [01-project-audit.md](01-project-audit.md) | A. Project audit |
| [02-source-audit.md](02-source-audit.md) | B. Source audit — PDF, official site, placeholders, claims, questions for GetSibu |
| [03-page-inventory.md](03-page-inventory.md) · [../page-inventory.csv](../page-inventory.csv) | C. Master page inventory (generated, all 400) |
| [04-page-types.md](04-page-types.md) | D. Page type system and recipes |
| [05-url-system.md](05-url-system.md) | E. URL system, redirects, app coexistence |
| [06-navigation-and-search.md](06-navigation-and-search.md) | F. Navigation system + search architecture |
| [07-content-data-model.md](07-content-data-model.md) | G. Content data model |
| [08-visual-and-image-strategy.md](08-visual-and-image-strategy.md) | GetSibu visual direction, Sky9 principles, image strategy |
| [09-component-architecture.md](09-component-architecture.md) | H. Component architecture |
| [10-seo-aeo.md](10-seo-aeo.md) | I. SEO / AEO foundation |
| [11-internal-linking.md](11-internal-linking.md) | J. Internal linking model |
| [12-responsive-accessibility-performance.md](12-responsive-accessibility-performance.md) | K. Responsive foundation (+ accessibility, performance, QA) |
| [13-design-system.md](13-design-system.md) | **Prompt 2:** design system, header, navigation, search, homepage, templates, QA |
| [14-page-experience.md](14-page-experience.md) | **Prompt 3:** audit, composition engine, all 23 section kinds, figures with focus, validation, QA, limitations |
| [15-product-quality.md](15-product-quality.md) | **Prompt 4:** product-quality audit (10 areas), webhook pages, verified context for unconfirmed pages, repetition, accessibility, performance, QA results |
| [19-topic-content.md](19-topic-content.md) | **Topic content (2026-09-15):** audit of the 400-topic implementation against the PDF, getsibu.com and Sky9; authored content for every topic; new section kinds; truth tiers; quality gate; writing, review and held-draft workflow; results |
| [21-topic-audit.md](21-topic-audit.md) · [../topic-audit.csv](../topic-audit.csv) | **Topic audit (generated):** every PDF topic with URL, status, completeness, sources, validation, overlap and claim safety |
| [22-complete-400-topic-audit.md](22-complete-400-topic-audit.md) | **Complete 400-topic audit (2026-09-15):** every topic's status (LIVE / HELD / DUPLICATE-COVERED), content, FAQ, hero, SEO, links and result, verified on the built site; required counts; image, SEO, navigation, search, responsive, motion and build results; claims awaiting GetSibu confirmation |
| [18-sky9-experience.md](18-sky9-experience.md) | **Sky9 mirror (2026-09-15):** Sky9 audit (20 templates, chrome, section flows, tokens, motion), template mapping onto GetSibu's URLs, components, motion runtime, deliberate differences |
| [17-production-configuration.md](17-production-configuration.md) | **Prompt 5 (§23–§29):** contact form, security headers and CSP, production environment, route matrix, republish workflow test, `/analytics` decision, SEO/AEO content quality |
| [16-launch-readiness.md](16-launch-readiness.md) | **Prompt 5:** publication states (held pages), claim-leak regression, repetition to zero, navigation, FAQ links, SEO/AEO, sitemap and build verification, company pages, launch decisions |

## The 12 questions, answered

**1. What is GetSibu?**
An AI-aware digital asset management platform for storing, organising, searching, reviewing and collaborating on videos, images, documents and audio from one central workspace (PDF 1, 381). Officially positioned as "The operating system for your creative library".

**2. What content is authoritative?**
`Getsibu.pdf` for architecture, page inventory and terminology; the official site for positioning, CTAs and verification. Neither is proof of product facts: the official site contains template placeholders and claims the product contradicts. The claims register (`content/architecture/claims.ts`) decides what may be published; `DO_NOT_USE` blocks placeholders. → [02](02-source-audit.md)

**3. What pages need to exist?**
All 400 PDF topics: **396 canonical pages** (4 exact duplicates merged, with redirects) + **12 generated hubs** = **408 indexable URLs**, plus 7 supporting pages (contact, about, legal, sitemap, site search). → [03](03-page-inventory.md)

**4. How are the pages grouped?**
17 URL sections / 20 categories that follow the PDF's 18 groups (search & discovery, AI, collaboration and asset management share `/features`; pricing and business value are split). Across sections, 80 topic clusters group pages about the same topic. → [05](05-url-system.md), [11](11-internal-linking.md)

**5. What URL should each page use?**
`/<section>/<slug>` with slugs derived from PDF titles by fixed rules; section roots are PDF overview pages where one exists. Every URL is in `inventory.json` and the CSV. → [05](05-url-system.md)

**6. What page type should each page use?**
One of 19 types (A–Q + home + hub), assigned by category with documented overrides, each with 2–5 recipes rotated so neighbouring pages differ (4 of 368 adjacent pairs share a layout, all intentional). → [04](04-page-types.md)

**7. How should the pages connect?**
Breadcrumb hierarchy, hubs grouped by cluster, cluster-scored related rails (features / resources / FAQs / use cases), concept mentions detected in each PDF paragraph, and a contextual conversion page (391–400) per page. → [11](11-internal-linking.md)

**8. How should content be stored?**
Four layers: verbatim PDF source → architecture decisions (TS) → generated inventory (JSON) → authored `PageContent` modules with mandatory source references per section. Identity and SEO live only in the inventory. → [07](07-content-data-model.md)

**9. Which reusable components are required?**
Layout (header, mega nav, drawer, footer), a page template and a hub template driven by recipes, 23 section components behind an exhaustive `SectionRenderer`, 15 data-driven SVG figures with focus, primitives, search island. → [09](09-component-architecture.md), [14](14-page-experience.md)

**10. How will the UI take inspiration from Sky9 without copying it?**
*Superseded 2026-09-15:* the site now mirrors Sky9's templates, layouts, interactions and motion while keeping GetSibu's content, brand, colours and typography — see [18](18-sky9-experience.md). Original answer, for the record — principles only: one section-header formula, a shared inner-page skeleton, breadcrumb-in-hero, framed captioned media, mega-menu column anatomy, an accessible drawer. Sky9's failures — client-only rendering, five identical splits in a row, typewriter and shimmer effects, contrast failures, clipped menus — are explicit rules to avoid. Identity comes from GetSibu's own indigo/olive brand and Inter. → [08](08-visual-and-image-strategy.md)

**11. How will the site scale to hundreds of pages?**
One catch-all route statically generates every inventory path; adding or moving a page is a data change validated before build; links reference PDF numbers, not URLs; recipes and clusters prevent sameness and duplication at scale. Build today: 415 static pages, no type errors.

**12. How are SEO/AEO and responsive behaviour supported?**
Generated, validated unique titles/H1s/descriptions, canonicals, breadcrumbs, JSON-LD gated on claim publishability, sitemap and environment-aware robots — all live in the scaffold. Definition-first sections for resources and FAQs. Mobile-first section behaviour, fluid type, WCAG 2.2 AA and performance budgets are specified per section kind. → [10](10-seo-aeo.md), [12](12-responsive-accessibility-performance.md)

## Open decisions

| # | Decision | Owner | Default until decided |
|---|---|---|---|
| 1 | Confirm product claims (capabilities, integrations, plans, security, performance, developer surface) | GetSibu | 41 pages whose titles state a claim are held (307 to verified context); 18 publish framed by verified context |
| 2 | App topology: app on its own origin vs shared domain | GetSibu | `route-decisions.ts` = "undecided": marketing `/analytics` kept, collision reported as a launch dependency; the options are implemented and tested |
| 3 | Plan list and pricing (public page vs signup API disagree) | GetSibu | Pricing pages render no prices |
| 4 | Real company, contact and legal content | GetSibu | `/about` from verified statements; `/contact` routes only (noindex, no "Book a demo"); `/legal/*` not generated |
| 5 | Product screenshots | GetSibu | Diagrams instead of UI captures |
| 6 | High-overlap pages that cannot be differentiated | Content phase | Keep separate, write to angle; propose merges case by case |

## Status

- **Prompt 1** — architecture, inventory, validation, static scaffold. Complete.
- **Prompt 2** — design system, global header with mega navigation, mobile menu, working global search, footer, homepage, and styled templates for every inner page and hub. Complete; see [13-design-system.md](13-design-system.md).
- **Prompt 3** (§01–§02; the brief arrived truncated after §02) — implementation audit, all 23 section kinds, 15 figures with page-specific focus, and a build-time composition engine. It gives all 395 inner pages sourced, claim-safe sections (2,440 sections, 3–5 story sections each), plus validator checks for composed pages. See [14-page-experience.md](14-page-experience.md).
- **Prompt 4** (§01–§02; the brief arrived truncated at §03) — audit across 10 areas, then fixes:
  - pages that need verification are framed by verified context, and their metadata no longer publishes the unconfirmed statement;
  - the webhook pages are source-safe technical pages;
  - statements shown twice on a page fell from 309 to 57, and every page has at least three story sections;
  - WCAG fixes: story contrast, mega-menu focus order, search listbox, tabs, link purpose;
  - a sticky story figure on phones, and LCP-friendly entrances.
  - Checked with axe (0 violations with reduced motion) and Lighthouse (Accessibility 100, Performance 96–97). See [15-product-quality.md](15-product-quality.md).
- **Prompt 5** (§1–§21; the brief arrived truncated inside §22) — launch readiness:
  - Every page has a publication state: 41 pages whose titles state unconfirmed claims are held (a 307 to verified context, and absent from every list, the sitemap and search), and 18 are framed.
  - Built output scans clean for claims and placeholders.
  - Same-page repetition is 0; navigation is source-safe; FAQ answers link naturally; there are source-safe `/about` and `/contact` pages.
  - Checks: axe 0 in both motion modes, 27/27 keyboard checks, Lighthouse mobile 96–97 and desktop 100 (Accessibility, Best Practices and SEO 100), and `npm run build` verifies routes, sitemap, redirects and metadata. See [16-launch-readiness.md](16-launch-readiness.md).
- **Prompt 5 continuation** (§23–§28; §29 truncated) — a contact form that renders only with a configured endpoint and never shows a fake success; production security headers with a tested CSP; production environment guard; a machine-checked route matrix (417 routes); an automated republish-workflow test (187 checks); and the `/analytics` collision as a recorded, configurable decision. See [17-production-configuration.md](17-production-configuration.md).
- **Next** — GetSibu decisions ([17 §9](17-production-configuration.md#9-launch-dependencies-updated)): claim confirmations, a contact channel, company and legal content, app topology, production environment variables; then authored `PageContent` per section group.
