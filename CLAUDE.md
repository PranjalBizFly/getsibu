# GetSibu website

Marketing website for GetSibu, an AI-aware digital asset management platform. Next.js 16 App Router, React 19, strict TypeScript, Tailwind CSS v4, fully static. Architecture docs: `docs/architecture/README.md`; design system: `docs/architecture/13-design-system.md`; page composition: `docs/architecture/14-page-experience.md`; quality pass: `docs/architecture/15-product-quality.md`; launch readiness: `docs/architecture/16-launch-readiness.md`; production configuration: `docs/architecture/17-production-configuration.md`; Sky9 experience mirror (templates, components, motion): `docs/architecture/18-sky9-experience.md`; authored topic content (audit, truth tiers, quality gate): `docs/architecture/19-topic-content.md`; per-topic audit of all 400 topics: `docs/architecture/21-topic-audit.md`; complete 400-topic verification of the built site (required counts, images, SEO, navigation, search, responsive, motion, build): `docs/architecture/22-complete-400-topic-audit.md`.

## Source rules (non-negotiable)

1. `docs/source/Getsibu.pdf` is the master blueprint: 400 topics → every page, title (H1), grouping and term. Do not reduce, rename or reorganise PDF pages without recording the decision in `content/architecture/`.
2. `docs/source/official-site-2026-09-14/` (getsibu.com) verifies positioning, CTAs and claims — but contains placeholders. Never reuse anything in `DO_NOT_USE` (`content/architecture/claims.ts`): "Lumen", the named testimonials/team, "trusted by" names, ROI percentages, counters, the 555 phone number.
3. Never invent testimonials, logos, customers, stats, awards, certifications, prices, integrations, endpoints or company facts. A factual claim is publishable only if `isPublishable(claim)` in `claims.ts` — high-risk claims need `client-confirmed`.
4. Keep PDF terminology and British English spelling.
5. Sky9 (sky9india1.netlify.app) is the **experience reference** (decision 2026-09-15, `docs/architecture/18-sky9-experience.md`): mirror its page templates, section flow, layouts, spacing, card/link behaviour, interactions and motion. Never take its branding, copy, images, numbers, testimonials or colours — content, brand, colours, Inter and assets stay GetSibu's, and Sky9 slots without verified GetSibu content are dropped.

## How the content works

- `content/source/pdf-pages.json` — generated from the PDF. Never edit.
- `content/architecture/*.ts` — hand-curated decisions (sections, url-rules, page-types, clusters, lexicon, claims, navigation). Only `import type` from `types/content.ts`, with `.ts` extensions, so Node can run scripts without compiling.
- `content/generated/inventory.json`, `search-index.json`, `page-sections.json` — generated. Never edit.
- `content/pages/<section>/<pdf-number>-<slug>.ts` — authored `PageContent`, one file per topic (the homepage is `content/pages/home.ts`). Every live topic is authored; held topics have drafts that render only once their claims are confirmed. `registry.ts` is generated: run `node scripts/build-content-registry.ts` after adding a file. Every section needs `sources`. Link to pages by PDF number, never by URL. Authored content replaces that page's composed sections.
- `scripts/compose-pages.ts` composes any live page that has no authored content (the fallback), from its recipe, using only sourced data: the page's PDF statement/paragraph (only if publishable), related PDF pages, and the curated sets in `content/architecture/storylines.ts` (storylines, comparisons, matrices, before/after — each with `sourcePages`). Figures are chosen in `content/architecture/visuals.ts`. See `docs/architecture/14-page-experience.md`.

## Authored topic content (2026-09-15)

- Every sentence is one of three tiers (`docs/architecture/19-topic-content.md`): **Tier A** says what GetSibu does and must be traceable to a publishable PDF statement or publishable claim, cited in the section's `sources`, with the source's hedges kept and nothing added (no mechanism, interface, automation, notification, limit, format, role list, provider, plan or accuracy the source does not state); **Tier B** is vendor-neutral, claim-free explanation of the concept and practice; **Tier C** is an illustrative, unnamed scenario whose GetSibu actions are Tier A. Unknowns are not implied through examples or the order of steps either.
- Page shape follows the topic, not a template: hero → overview (or definition first on resource and FAQ pages) → 3–5 body sections chosen by meaning (process, capabilities, tabs, accordion, scenario, comparison, before-after, workflow, timeline, matrix, layers) → one FAQ with authored questions → at most one compact related strip (2–6 pages; none on section roots, whose template lists every child) → CTA. The overview's `glance` card carries the category link.
- `scripts/content-quality.ts` is the quality gate (run by `inventory:validate`): shape and per-kind limits, depth (650 words; FAQ pages 450), claims (held drafts may state only their own claims), framed pages never state or rebuild their withheld paragraph, no figures with units, no interface wording, no superlatives or stock filler, British spelling, specific headings, no self-reference, one point made once per page, no sentence or FAQ question reused across pages, prose overlap under 0.2 between any two pages, and PDF sentences under 35% of a page's prose. Fix content rather than weakening a rule; improve a rule only for a demonstrated false positive.
- The gate cannot see invented capabilities: authored pages are fact-checked against the fact bank by a reviewer who did not write them before they are registered. `node scripts/audit-topics.ts` writes the per-topic audit (`docs/topic-audit.csv`, `docs/architecture/21-topic-audit.md`).

## Composition rules (Prompt 3; fallback for pages without authored content)

- Add material by adding a sourced set to `storylines.ts`, never by writing copy in the composer. Every step, row and item must be the text of a cited PDF page.
- Labels shown on a page go through `safe()`: cluster labels and connector names can name unconfirmed claims ("Face grouping", "Google Drive").
- Publication states (`publication` in the inventory): **held** pages — a title that states an unconfirmed claim (automatic via claim detect terms, or `HELD_BY_DECISION`) — are published nowhere: no route (307 to their context page), navigation, hub, sitemap, search, related, previous/next, topic list or link. Anything that lists or links pages must use live pages only (`isLivePage`, `live()` in the composer). **Framed** pages publish with verified context.
- Pages with `needsVerification` contribute titles and links only (framed) or nothing (held), never their statements — not in the body, meta description, JSON-LD or search index. They are framed by a publishable `contextPage` (`content/architecture/verified-context.ts`): curate the context where a neighbour would imply the unconfirmed capability, and never build a list (events, integrations) that re-asserts a blocked claim from other pages' statements.
- A statement appears once per page; no figure appears twice below the hero; no section heading repeats the H1 or another heading (compose passes and validator).
- Figures are illustrations: no GetSibu UI mimicry, no real-looking numbers, captions say "Illustration". Page-specific emphasis comes from `focus`, not from new figures.

## Commands

- `npm run inventory` — build → compose → validate → export (CSV + `docs/architecture/03-page-inventory.md`)
- `npm run pages:compose` — recompose `content/generated/page-sections.json` only
- `npm run inventory:validate` — must pass; errors fail `prebuild`
- `npm run build` — runs inventory build + compose + validate, then `next build`, then `verify:build`
- `npm run test:publication` — runs the pipeline in temp dirs with simulated claim statuses and app topologies; must pass after any change to publication, claims, navigation or routes
- `npm run verify:build` — checks the built site (including `content/generated/route-matrix.json`, security headers, heading order and browser files for secrets/local paths): inventory ↔ routes ↔ sitemap ↔ redirects, every page's metadata/H1/JSON-LD, and no claim or placeholder in any built file
- `npm run test:http` — after a build: serves `.next` on a free local port and checks every route-matrix status and destination, trailing-slash 308s, 404s, 405s on `/search-index.json`, 400 for malformed percent-encoding (`proxy.ts`), no 5xx, and contact delivery status handling; must pass after any change to routes, redirects, `proxy.ts` or the contact form
- `npm run typecheck`
- `node scripts/build-content-registry.ts` — regenerate `content/pages/registry.ts` after adding or moving an authored page
- `node scripts/audit-topics.ts` — per-topic audit of all 400 PDF topics (completeness, sources, validation, overlap, claim safety)
- `npm run images:validate` — image audit, including what each image shows (its source photo, reviewed in `content/architecture/image-sources.ts`); fails while live pages render photos with other organisations' names or logos, invented figures, product-like screens or unrelated work
- `npm run source:extract` — only if the PDF changes (`pdftotext -layout docs/source/Getsibu.pdf docs/source/Getsibu.txt` first)

## Conventions

- URLs come only from the inventory (`lib/content/inventory.ts`). Never hardcode a page URL in a component.
- Metadata only through `buildMetadata(seo)`; JSON-LD only through `lib/seo/structured-data.ts`.
- Images are WebP (`public/`, `images.formats`); only `app/icon.png`, `app/apple-icon.png` and the social card stay PNG. Topic image alt text comes only from `scripts/image-captions.ts`: `GetSibu illustration for “<live topic>”: <what the photo shows>` (held pages name no title); `node scripts/validate-images.ts` checks it. Diagram SVGs get "GetSibu illustration: …" through `Svg` in `components/diagrams/parts.tsx`.
- No FAQ, testimonial, stat or logo sections as filler. FAQ sections only with authored Q&A or publishable PDF FAQ pages (question = page title, answer = its PDF paragraph).
- `claims.ts` is the only place publication is decided. Never store a page's held/published state elsewhere; `HELD_BY_DECISION` entries must name their claim. Navigation links to pages that may be held use `onlyWhenLive`.
- App topology (`/analytics`, app origin) lives in `content/architecture/route-decisions.ts`; never hardcode `/analytics` or the app origin.
- Forms never show success unless the configured endpoint accepted the submission (a 2xx from the endpoint itself; `lib/forms/contact-delivery.ts` never follows redirects); destinations come from server-only environment variables (`lib/forms/contact-config.ts`), never from code.
- `proxy.ts` only turns undecodable paths into 400s (Next.js would serve 500) and its matcher only runs on paths containing `%`; don't widen it to every request or add routing or auth to it (doc 17 §5).
- Security headers and CSP live in `next.config.ts`; adding any third-party script, frame, font or connection requires extending the CSP deliberately.
- Link text names its destination: no "Read more", "Learn more" or bare "Explore". FAQ answers and definitions carry inline links (`RichText`); FAQPage JSON-LD is generated from the visible answer.
- Company pages (`/about`, `/contact`) are built from verified PDF statements only (`content/architecture/company-pages.ts`); never reuse the official site's placeholder team, story or contact details. "Book a demo" stays off until `GLOBAL_CTAS.secondary.channelConfirmed`.
- Mobile-first; WCAG 2.2 AA; Server Components by default. Grid or flex children that hold tables or wide content need `min-w-0`, or phones overflow.
- Recorded H1 exceptions live in `content/architecture/identity.ts` (homepage only).
- Writing files: avoid literal `\u` escape sequences in source (tooling can convert them); use `String.fromCharCode` or split the string. Tooling has also dropped backslashes from regex literals and from shell heredocs; after writing a regex, check the bytes on disk. In `String.replace` replacement strings, `$&` is special: use a function replacer.

## Design system (Prompt 2, Sky9 mirror 2026-09-15)

- Presentation mirrors Sky9 (doc 18): fixed blurred header with Sky9 dropdown panels and drawer, navy inner heroes with breadcrumb/icon/badge/typed H1/chips/two actions, centred badge → typed H2 → subtitle section headers, `rounded-2xl` cards that lift with an accent border and glow, numbered roadmap cards, accordion FAQs, gradient CTA band, multi-column footer. Light mode only for now (dark theme and toggle deferred).
- Colour: semantic token utilities only (`text-fg`, `text-fg-muted`, `bg-raised`, `border-line`, `bg-accent text-accent-fg`, `text-signal-strong`). Never hex values in components. Surfaces (`surface-muted`, `surface-inverse`, `surface-hero`, `surface-paper`) redefine the tokens; use `<Section surface>`.
- Olive (`signal`) is graphics-only on light surfaces; olive text on paper uses `text-signal-strong`. Never white text on olive.
- Type: the `type-*` utilities (Sky9 scale in Inter; `type-display` is homepage-only). Layout: `container-content` (1280) / `container-wide` (header) / `container-footer`, `section-open` / `section-dense`.
- Primitives: `Badge`, `SectionHeader`, `TypewriterHeading` (`components/primitives/SectionHeader.tsx`), `ButtonLink` variants, `CARD` / `IconTile` / `CheckItem` (`Card.tsx`), icons from `lucide-react` via `components/primitives/icons.tsx` and `components/sections/topic-icons.ts` (authored `TopicIcon` names). Eyebrows name something true.
- Sections render through `SectionRenderer`, an exhaustive switch: a new kind needs a component there (otherwise a type error). Authored pages render their sections in order; the template adds nothing to them.
- Visuals are `Diagram` figures drawn from cited PDF concepts and captioned as illustrations — no fake product screenshots, no invented numbers. Containers frame figures; `Diagram` is unframed by default.
- No photograph twice on one page. Topic images are crops of a few source photos (`source` in `image-inventory.json`), so different files can show the same photo: `lib/content/images.ts` drops a section image whose photo the hero or an earlier section already shows, and `verify:build` fails on any page that repeats one. Truly different images need new source photos reviewed in `content/architecture/image-sources.ts`.
- Topic photos (`content/generated/image-matrix.json` via `lib/content/images.ts`) are presented, never chosen, by components: hero layouts backdrop / bleed / editorial by page type, and overview, capabilities, scenario and workflow sections with `FramedImage` / `CaptionChip` (`components/sections/TopicImage.tsx`); body sections alternate bands via `rhythm.ts` (doc 18 §2.5). Captions start with "Illustration"; text never sits on a photo without a near-opaque overlay.
- Motion mirrors Sky9 (all of it, timings read from its bundle; inventory and coverage in doc 18 §1.5 and §2.3): route entrance (`app/template.tsx`), scroll reveals (`data-reveal` variants `""`/`header`/`badge`/`scale`/`panel`/`left`/`fade`), CSS hero entrances (`motion-enter`, `motion-pop`), typewriter headings, count-up for verified numbers only (`CountUp`), dropdowns and dialogs that animate in and out, the sliding nav indicator, tab and accordion transitions, button press feedback, button shimmer, marquee, float, border beam, spotlight, scroll progress — driven by `components/motion/MotionRuntime.tsx` and `html[data-motion]` ("on" / "reduced" / "paused", set before paint). Use the motion tokens and variants in `app/globals.css`, not new per-component animations. Content hides for an entrance only when motion is "on"; reduced motion and the footer "Pause animations" control stop every loop (WCAG 2.2.2); the marquee has its own pause. A typed heading keeps its full text in one node (the typed overlay is aria-hidden).
- Client islands: `HeaderNavigation` (menus, drawer, search), `MotionRuntime`, `MotionToggle`, `FloatingScroll`, `Accordion`, `TabsIsland`, `ExplorerTabs`, `MarqueePause`, `SiteSearchResults`, `DirectoryControls` (the `/sitemap` filter), `StoryScroller`. Everything else is a Server Component.
- Local visual QA (gitignored `.tmp/`, not part of the repo): build, `next start -p 3200`, headless Chrome on :9333, `node .tmp/qa-shots.mjs <scenario>`. Overflow checks must compare against `document.documentElement.clientWidth`: under mobile emulation `innerWidth` grows with the content.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
