# GetSibu Website

Data-driven marketing website for [GetSibu](https://getsibu.com), built from the 400-topic `Getsibu.pdf` blueprint.

**Status:** Prompt 5 (launch readiness) complete for §1–§21. Claim-safe publication states, zero same-page repetition and source-safe company pages are in place. Every build now verifies inventory ↔ routes ↔ sitemap ↔ redirects ↔ metadata ↔ claims (see [`docs/architecture/16-launch-readiness.md`](docs/architecture/16-launch-readiness.md)). Earlier, Prompt 4 was a product-quality pass over the Prompt 3 page experience:

- accessibility (axe: 0 violations with reduced motion);
- performance (Lighthouse mobile: Performance 96–97, Accessibility 100, CLS 0);
- no repeated statements where a page can spare them;
- claim-safe framing for pages GetSibu has not confirmed.

Every inner page is composed at build time from the PDF, on the Prompt 2 design system and the Prompt 1 architecture.

```bash
npm install
npm run inventory      # build the inventory, compose page sections, validate, export
npm run pages:compose  # recompose page sections only (content/generated/page-sections.json)
npm run dev            # http://localhost:3000
npm run build          # inventory → compose → validate → next build → verify the built site
npm run verify:build   # re-run the post-build verification only
npm run test:publication  # simulate claim confirmations: held pages republish, nothing real changes
```

- Architecture: [`docs/architecture/README.md`](docs/architecture/README.md)
- Page experience (how pages are composed): [`docs/architecture/14-page-experience.md`](docs/architecture/14-page-experience.md)
- Product-quality audit and results: [`docs/architecture/15-product-quality.md`](docs/architecture/15-product-quality.md)
- Launch readiness and decisions for GetSibu: [`docs/architecture/16-launch-readiness.md`](docs/architecture/16-launch-readiness.md)
- Production configuration (environment, headers, forms, route matrix, app topology): [`docs/architecture/17-production-configuration.md`](docs/architecture/17-production-configuration.md) · [`docs/route-matrix.csv`](docs/route-matrix.csv) · [`.env.example`](.env.example)
- Page inventory: [`docs/architecture/03-page-inventory.md`](docs/architecture/03-page-inventory.md) · [`docs/page-inventory.csv`](docs/page-inventory.csv)
- Source rules for contributors and AI agents: [`CLAUDE.md`](CLAUDE.md)

Environment:

| Variable | Default | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://getsibu.com` outside production; **required** when `SITE_ENV=production` | Canonical origin |
| `NEXT_PUBLIC_APP_ORIGIN` | `https://getsibu.com` | App origin for Start free (/signup) and Sign In (/login) |
| `CONTACT_FORM_ENDPOINT` | — (server-only) | Contact form destination; the form renders only when this and `CONTACT_FORM_PRIVACY_URL` are set |
| `CONTACT_FORM_PRIVACY_URL` | — | Privacy notice linked from the contact form |
| `SITE_ENV` | — | `production` enables indexing; otherwise `noindex` + `Disallow: /` |
