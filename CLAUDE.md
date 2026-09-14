# GetSibu website

Marketing website for GetSibu, an AI-aware digital asset management platform. Next.js 16 App Router, React 19, strict TypeScript, Tailwind CSS v4, fully static. Architecture docs: `docs/architecture/README.md`; design system: `docs/architecture/13-design-system.md`; page composition: `docs/architecture/14-page-experience.md`; quality pass: `docs/architecture/15-product-quality.md`; launch readiness: `docs/architecture/16-launch-readiness.md`; production configuration: `docs/architecture/17-production-configuration.md`.

## Source rules (non-negotiable)

1. `docs/source/Getsibu.pdf` is the master blueprint: 400 topics → every page, title (H1), grouping and term. Do not reduce, rename or reorganise PDF pages without recording the decision in `content/architecture/`.
2. `docs/source/official-site-2026-09-14/` (getsibu.com) verifies positioning, CTAs and claims — but contains placeholders. Never reuse anything in `DO_NOT_USE` (`content/architecture/claims.ts`): "Lumen", the named testimonials/team, "trusted by" names, ROI percentages, counters, the 555 phone number.
3. Never invent testimonials, logos, customers, stats, awards, certifications, prices, integrations, endpoints or company facts. A factual claim is publishable only if `isPublishable(claim)` in `claims.ts` — high-risk claims need `client-confirmed`.
4. Keep PDF terminology and British English spelling.
5. Sky9 (sky9india1.netlify.app) is a presentation reference only — no branding, copy, images or layouts.

## How the content works

- `content/source/pdf-pages.json` — generated from the PDF. Never edit.
- `content/architecture/*.ts` — hand-curated decisions (sections, url-rules, page-types, clusters, lexicon, claims, navigation). Only `import type` from `types/content.ts`, with `.ts` extensions, so Node can run scripts without compiling.
- `content/generated/inventory.json`, `search-index.json`, `page-sections.json` — generated. Never edit.
- `content/pages/**` — authored `PageContent` (register in `registry.ts`); every section needs `sources`. Link to pages by PDF number, never by URL. Authored content replaces that page's composed sections.
- `scripts/compose-pages.ts` composes every other page from its recipe, using only sourced data: the page's PDF statement/paragraph (only if publishable), related PDF pages, and the curated sets in `content/architecture/storylines.ts` (storylines, comparisons, matrices, before/after — each with `sourcePages`). Figures are chosen in `content/architecture/visuals.ts`. See `docs/architecture/14-page-experience.md`.

## Composition rules (Prompt 3)

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
- `npm run typecheck`
- `npm run source:extract` — only if the PDF changes (`pdftotext -layout docs/source/Getsibu.pdf docs/source/Getsibu.txt` first)

## Conventions

- URLs come only from the inventory (`lib/content/inventory.ts`). Never hardcode a page URL in a component.
- Metadata only through `buildMetadata(seo)`; JSON-LD only through `lib/seo/structured-data.ts`.
- No FAQ, testimonial, stat or logo sections as filler. FAQ sections only with authored Q&A or publishable PDF FAQ pages (question = page title, answer = its PDF paragraph).
- `claims.ts` is the only place publication is decided. Never store a page's held/published state elsewhere; `HELD_BY_DECISION` entries must name their claim. Navigation links to pages that may be held use `onlyWhenLive`.
- App topology (`/analytics`, app origin) lives in `content/architecture/route-decisions.ts`; never hardcode `/analytics` or the app origin.
- Forms never show success unless the configured endpoint accepted the submission; destinations come from server-only environment variables (`lib/forms/contact-config.ts`), never from code.
- Security headers and CSP live in `next.config.ts`; adding any third-party script, frame, font or connection requires extending the CSP deliberately.
- Link text names its destination: no "Read more", "Learn more" or bare "Explore". FAQ answers and definitions carry inline links (`RichText`); FAQPage JSON-LD is generated from the visible answer.
- Company pages (`/about`, `/contact`) are built from verified PDF statements only (`content/architecture/company-pages.ts`); never reuse the official site's placeholder team, story or contact details. "Book a demo" stays off until `GLOBAL_CTAS.secondary.channelConfirmed`.
- Mobile-first; WCAG 2.2 AA; Server Components by default. Grid or flex children that hold tables or wide content need `min-w-0`, or phones overflow.
- Recorded H1 exceptions live in `content/architecture/identity.ts` (homepage only).
- Writing files: avoid literal `\u` escape sequences in source (tooling can convert them); use `String.fromCharCode` or split the string. Tooling has also dropped backslashes from regex literals and from shell heredocs; after writing a regex, check the bytes on disk. In `String.replace` replacement strings, `$&` is special: use a function replacer.

## Design system (Prompt 2)

- Colour: semantic token utilities only (`text-fg`, `text-fg-muted`, `bg-raised`, `border-line`, `bg-accent text-accent-fg`, `text-signal-strong`). Never hex values in components. Surfaces (`surface-muted`, `surface-inverse`) redefine the tokens; use `<Section surface>`.
- Olive (`signal`) is graphics-only on light surfaces; olive text on paper uses `text-signal-strong`. Never white text on olive.
- Type: the `type-*` utilities (`type-display` is homepage-only; nothing above 64px). Layout: `container-content` / `container-wide`, `section-open` / `section-dense`.
- Section headers always use `SectionHeader` (eyebrow → H2 → intro). Eyebrows name something true.
- Sections render through `SectionRenderer`, an exhaustive switch: all 23 kinds are implemented, and a new kind needs a component there (otherwise a type error).
- Visuals are `Diagram` figures drawn from cited PDF concepts and captioned as illustrations — no fake product screenshots, no invented numbers.
- Motion: CSS only (`motion-enter`, `data-reveal`), played once, disabled by `prefers-reduced-motion`. No loops, parallax or typewriter effects. Animations that hold text move but never change opacity (contrast stays valid at every frame); above-the-fold entrances never start from opacity 0 (it delays LCP); figure keyframes animating opacity give only a start state so classes like `opacity-35` survive.
- Never convey state by dimming text with opacity (contrast); use a rail, colour of a non-text marker, or weight.
- Client islands: `HeaderNavigation` (menus, drawer, search), `ExplorerTabs`, `SiteSearchResults`, `StoryScroller`. Everything else is a Server Component.
- Local visual QA (gitignored `.tmp/`, not part of the repo): build, `next start -p 3200`, headless Chrome on :9333, `node .tmp/qa-shots.mjs <scenario>`. Overflow checks must compare against `document.documentElement.clientWidth`: under mobile emulation `innerWidth` grows with the content.
