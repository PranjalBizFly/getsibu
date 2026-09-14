# A. Project Audit

Audited 2026-09-14, before any code was written.

## Starting state

| Item | Finding |
|---|---|
| Repository | `c:\Projects\getsibu`, git initialised on `main`, **no commits, no files**. |
| Framework / versions | None. |
| Routes, components, layouts, header, footer, navigation, forms | None. |
| CSS architecture, design tokens, fonts | None. |
| Media folders | None. |
| Content/data files | None. `Getsibu.pdf` was outside the repo (`Downloads`). |
| SEO, sitemap, robots, metadata | None. |
| Dependencies, scripts, build config | None. |

There was no existing infrastructure to preserve, so nothing was deleted or replaced.

## Conventions taken from sibling projects

The same organisation's projects in `c:\Projects` (`mengoengine-website`, `Bizzfly-website`) establish a house stack and workflow, which this project follows so the team works the same way across sites:

- Next.js App Router + React 19 + strict TypeScript, `@/*` path alias.
- Content as structured data with validation scripts that run before `next build` (`prebuild`).
- Generated inventories (`page-inventory.csv`) and audit scripts rather than hand-kept spreadsheets.

## What this phase added

| Path | Purpose |
|---|---|
| `docs/source/Getsibu.pdf`, `Getsibu.txt` | The master blueprint, in the repo, with its text extraction. |
| `docs/source/official-site-2026-09-14/` | Snapshot of getsibu.com text, pricing API response, app-code evidence and brand files. |
| `types/content.ts` | The whole content model (source → architecture → inventory → authored content). |
| `content/source/pdf-pages.json` | 400 PDF pages, verbatim, generated. |
| `content/architecture/*.ts` | Every architecture decision as data: sections, URL rules, page types, clusters, lexicon, claims, navigation. |
| `content/generated/inventory.json` | The master inventory (routes, SEO, links, CTAs, recipes, claims) — generated. |
| `content/generated/search-index.json` | Global search documents, grouped by content type — generated. |
| `scripts/` | `extract-pdf-source`, `build-inventory`, `validate-inventory`, `export-inventory`. |
| `app/`, `lib/`, `components/` | Minimal Next.js 16 scaffold: one data-driven catch-all route, metadata, JSON-LD, sitemap, robots, redirects. Unstyled architecture preview only. |
| `docs/architecture/` | This documentation (A–K). |
| `docs/page-inventory.csv` | Every inventory field for all 400 PDF pages. |

## Stack decisions

| Decision | Choice | Why |
|---|---|---|
| Framework | Next.js 16.3.5 (App Router), React 19.3.0 | Static generation of ~410 routes, first-class metadata/sitemap/robots APIs, house stack. |
| Language | TypeScript 5.9.3, `strict`, `erasableSyntaxOnly` | Type-safe content model; `erasableSyntaxOnly` keeps every `.ts` script runnable by Node's built-in type stripping (no build step for scripts). TypeScript 7 exists on npm but is not yet a safe pairing with Next's tooling. |
| Node | ≥ 22.18 (tested on 24.20) | Native TypeScript type stripping for scripts. |
| Rendering | Fully static (`generateStaticParams`, `dynamicParams = false`) | 400 marketing pages need no server; unknown paths 404 at build. The official site's client-only SPA (empty HTML, soft-404s) is the problem this avoids. |
| Styling | **Deferred to Prompt 2.** Recommendation: Tailwind CSS v4 over CSS custom-property tokens (house stack) | No visual implementation in this phase. |
| Content format | Generated JSON for the inventory; typed TS modules for architecture and (later) authored content | JSON is the right shape for machine output; TS gives compile-time checking for hand-written content. |
| Trailing slashes | Off | Clean URLs as specified. |

## Problems found

1. **The official site is a client-rendered SPA** with identical `<title>`/description on every route, no canonical, no OG, no JSON-LD, no sitemap, and HTTP 200 for unknown URLs. The new site fixes all of these by construction.
2. **The GetSibu app and the marketing pages share `getsibu.com`.** The app router owns `/login`, `/signup`, `/library`, `/search`, `/analytics`, `/settings`, `/admin` and more. See the topology decision in [05-url-system.md](05-url-system.md#app-coexistence).
3. **Official-site content is partly placeholder** (see [02-source-audit.md](02-source-audit.md)). This limits what can be reused far more than the empty repo does.

## Reusable infrastructure now in place

- `lib/content/inventory.ts` — `resolvePath`, `allPaths`, `getPage(s)`, merged-duplicate resolution.
- `lib/seo/metadata.ts` — `buildMetadata(seo)` with environment-aware robots.
- `lib/seo/structured-data.ts` — JSON-LD per page type, gated on claim publishability.
- `components/seo/JsonLd.tsx`, `components/navigation/Breadcrumbs.tsx` — production-ready semantics, unstyled.
- `app/[...path]/page.tsx`, `app/sitemap.ts`, `app/robots.ts`, `next.config.ts` redirects — all driven by the inventory.
- `scripts/validate-inventory.ts` — the guardrail every later prompt runs (`prebuild`).
