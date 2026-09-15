# Production Configuration (Prompt 5, §23–§29)

Forms, security, environment, the route matrix, the republish workflow, the `/analytics` collision and a final SEO/AEO content-quality pass. It continues [16-launch-readiness.md](16-launch-readiness.md).

> The brief arrived truncated at "29. SEO / AEO FINAL CONTENT QUALITY — Perform". §23–§28 are complete; §29 was handled as a content-quality pass on titles, descriptions, headings and answers (§8) and may need the missing instructions.

## 1. Results at a glance

| Check | Result |
|---|---|
| Contact form QA (mock endpoint) | **23 / 23**: labels, validation, error summary, pending state, one delivery per message, honest failure, keyboard, 390px, axe in every state |
| Fake success possible? | **No**. Success appears only after the configured endpoint answers 2xx; with no endpoint the form is not rendered and the action refuses submissions |
| Security headers | CSP, `nosniff`, `Referrer-Policy`, `X-Frame-Options: DENY`, `Permissions-Policy`, COOP on every route; HSTS on production HTTPS; checked after every build |
| CSP compatibility (production build, 13 pages) | No CSP violations, console errors or failed requests; search, menus and hydration work; keyboard 27/27; Lighthouse Best Practices 100 |
| Dependencies / secrets | `npm audit`: 0 vulnerabilities; no secrets in the repository; no source maps, local paths, development URLs or server-only variables in browser files (checked after every build) |
| Production environment | `SITE_ENV=production` without `NEXT_PUBLIC_SITE_URL` fails the build. On `https://getsibu.com`: production canonicals, sitemap, robots, Open Graph URLs and HSTS verified. Local builds stay `noindex`. |
| Route matrix | 417 routes: 349 LIVE, 21 SAFE-LIVE, 41 HELD, 6 REDIRECT. The build and an HTTP test of every row both match. |
| Republish workflow | `npm run test:publication`: **187 checks** over 8 scenarios pass; real generated files untouched |
| `/analytics` collision | Configurable decision (`route-decisions.ts`), default "undecided", reported as a launch dependency |
| Headings | Heading order verified on every page after each build: one H1, no skipped levels |
| Truncated meta descriptions | 10 → 4 |

## 2. Forms (§23)

| Form | Where | Notes |
|---|---|---|
| Site search | `/site-search` | `<form role="search">` with a label, live results (Enter does not reload), load-error and empty states, `enterkeyhint="search"`, a 3:1 field border |
| Search dialog | Header | Combobox with a label, arrow keys, Escape and focus return (tested in §9 of doc 16) |
| **Contact form** (new) | `/contact`, **only when configured** | Below |

**Contact form** (`components/forms/ContactForm.tsx`, `app/contact/actions.ts`, `lib/forms/contact.ts`, `lib/forms/contact-config.ts`, `lib/forms/contact-delivery.ts`):

- **Nothing invented.**
  - The fields mirror the official site's form: first name, last name, work email, company, phone, subject and message (5–5,000 characters).
  - No address, CRM or email destination is defined. The destination is `CONTACT_FORM_ENDPOINT`, a server-only JSON POST URL that must be HTTPS in production. The form also requires `CONTACT_FORM_PRIVACY_URL`, because it collects personal data.
  - Until both are set the form is not rendered, `/contact` keeps its plain "not published yet" state, and the server action returns "unavailable".
- **Validation** runs the same rules in the browser and in the server action (`validateContact`):
  - required fields, length limits, email and phone formats;
  - an error summary that takes focus, with links to each field;
  - `aria-invalid` and `aria-describedby` on each field;
  - values kept after a failure.
- **Submission:**
  - The button is disabled and shows "Sending…" while pending.
  - Each message carries a submission id, so a repeated submit is never delivered twice (tested: one delivery).
  - A hidden honeypot field makes automated submissions fail, never appear sent.
  - Deliveries time out after 10 seconds; logs record the HTTP status only, never the visitor's details.
- **States:** "Your message has been sent." appears only after a 2xx response from the endpoint itself. Redirects are not followed (2026-09-15): following a 301, 302 or 303 turns the POST into a GET without the message, so the target's 200 proved nothing, and following a 307 or 308 re-sent the visitor's details to another URL. A 3xx now fails like any other non-2xx; `npm run test:http` covers 2xx, 3xx, 4xx, 5xx, timeouts and refused connections. "Your message could not be sent. Nothing was sent." appears on any failure. "The contact form is not available at the moment." appears when unconfigured.
- **Mobile and accessibility:**
  - `autocomplete` and `type`/`inputmode` for email and phone, fields at least 48px tall, visible "(required)"/"(optional)" labels;
  - new `danger` colour tokens (text 7.6:1) and a `line-input` token for field borders (3.6:1, WCAG 1.4.11).
- **Before enabling in production:** GetSibu provides the endpoint and a privacy notice. Then consider making `/contact` indexable (`CONTACT_PAGE.indexable`) and turning on "Book a demo" (`GLOBAL_CTAS.secondary.channelConfirmed`) if the endpoint handles demo requests.

## 3. Security (§24)

**Environment variables** (`.env.example`):

| Variable | Exposure | Purpose |
|---|---|---|
| `SITE_ENV` | Build time | `production` enables indexing and HSTS; anything else is a closed preview |
| `NEXT_PUBLIC_SITE_URL` | Public | Canonical origin; required for production |
| `NEXT_PUBLIC_APP_ORIGIN` | Public | App origin for Start free and Sign In (default `https://getsibu.com`, where the app runs today) |
| `CONTACT_FORM_ENDPOINT` | **Server-only** | Contact form destination (verified absent from browser files after each build) |
| `CONTACT_FORM_PRIVACY_URL` | Server-rendered | Privacy notice linked from the form |

No secret is needed to build the site. `.env` and `.env*.local` are gitignored.

**Headers** (`next.config.ts`, every route):

| Header | Value | Why |
|---|---|---|
| Content-Security-Policy | `default-src 'self'`; scripts and styles `'self' 'unsafe-inline'`; images and fonts `'self' data:`; `connect-src 'self'`; `object-src`, `frame-src`, `frame-ancestors` `'none'`; `base-uri`, `form-action` `'self'`; plus `upgrade-insecure-requests` on production HTTPS | Blocks third-party scripts, frames, objects and form targets. Statically generated pages cannot carry per-request nonces and Next inlines hydration scripts, so `'unsafe-inline'` is required. Tested in production mode with no violations. |
| X-Content-Type-Options | `nosniff` | MIME sniffing protection |
| Referrer-Policy | `strict-origin-when-cross-origin` | No full URLs to other origins |
| X-Frame-Options | `DENY` | Clickjacking protection (with `frame-ancestors`) |
| Permissions-Policy | `camera=(), microphone=(), geolocation=(), payment=(), usb=()` | The site uses none of these |
| Cross-Origin-Opener-Policy | `same-origin` | Isolates the browsing context |
| Strict-Transport-Security | `max-age=31536000`, production HTTPS only | HTTPS enforcement without `includeSubDomains` or `preload` |

**Other settings:**
- `poweredByHeader: false`, `productionBrowserSourceMaps: false` and `reactStrictMode`.
- No debug logging.
- The only server log is the contact form's delivery status.

**Deliberately not enabled (needs production testing first):**
- **CSP nonces or hashes:** would need dynamic rendering or a hash pipeline for Next's inline scripts.
- **COEP/CORP:** would block future third-party media.
- **HSTS `includeSubDomains`/`preload`:** first confirm every subdomain, including a future app subdomain, is HTTPS-only.

Adding analytics, a tag manager, embedded video or an external form means extending `script-src`/`connect-src`/`frame-src`, deliberately.

## 4. Production environment and domain (§25)

- **Production:** `SITE_ENV=production NEXT_PUBLIC_SITE_URL=https://<confirmed production origin>`. `getsibu.com` is the official site's domain today; confirm the marketing site's deployment hostname before launch. A production build without the URL fails.
- **Verified builds:**
  - **On `https://getsibu.com`:** canonical, Open Graph and sitemap URLs on that origin; robots allowing `/`, disallowing `/site-search` and referencing the sitemap; pages `index, follow`; HSTS and `upgrade-insecure-requests` present.
  - **Local production-like build (`http://127.0.0.1:3200`):** verified with a warning that non-HTTPS origins are for local testing only.
- **Local and preview builds:** remain `noindex`, with `Disallow: /`, no HSTS and no upgrade directive (verified).
- **App topology:** Start free and Sign In point at `/signup` and `/login` on `NEXT_PUBLIC_APP_ORIGIN`. If the marketing site replaces getsibu.com without a path proxy for app routes, these CTAs need the app's origin (see §7).

## 5. Route matrix (§26)

`content/generated/route-matrix.json` (with the inventory) and `docs/route-matrix.csv` (with `npm run inventory:export`) list every URL the site answers, one row each:

| Class | Count | Rule |
|---|---|---|
| LIVE | 349 | Published inventory pages, the home page and hubs: 200, indexable, canonical, in the sitemap and search |
| SAFE-LIVE | 21 | 18 framed pages (indexable), `/about` (indexable), `/contact` and `/site-search` (noindex, not in the sitemap) |
| HELD | 41 | Pages whose titles state unconfirmed claims: 307 to verified context; no page, navigation, sitemap or search entry; kept in the inventory with their claim ids |
| REDIRECT | 6 | `/about-us` and `/contact-us` (308); four merged storage-connector aliases (307 while their canonical is held, 308 once published) |

The row fields are: path, class, kind, PDF page, title, status, destination, indexable, sitemap, search, navigation, blocked claims and note.

**Verified two ways:**
- **After every build** (`verify:build`), every row is checked against the generated routes, sitemap, search index, served redirects (status and destination), robots meta and navigation model. HELD and REDIRECT paths must not be linked from any built page, and every generated route and served redirect must appear in the matrix.
- **Against the running server** (`npm run test:http`, after a build): `next start` serves `.next` on a free local port, and every row must answer with its status and `Location`.

**Statuses outside the matrix** (also `npm run test:http`):

| Request | Status |
|---|---|
| Trailing slash (`/features/`) | 308 to the slashless URL |
| Unknown URL, including `/api/*` | 404 with the noindex not-found page; never redirected home |
| `/search-index.json` with POST, PUT, PATCH or DELETE | 405 with `Allow: GET, HEAD` |
| Malformed percent-encoding (`/%E0%A4%A`, `/%ZZ`) | 400 `Bad Request`, from `proxy.ts`, with the security headers |
| Any request in the test | Never 5xx |

**Why `proxy.ts` exists (2026-09-15).** Next.js 16.3.5 fails to decode a malformed path while matching `[...path]`. It then looks for a 400 page, which the App Router does not have, and serves 500. The proxy's matcher runs only for paths containing `%`, which no published URL does, so pages stay static. It answers 400 when the path cannot be decoded and passes every other request through. Remove it once Next.js serves a 400 itself (the test will show this).

**Framework behaviour left as is:**
- **PUT, PATCH, DELETE or a plain POST to a page** are served the page with 200. Pages must accept POST for server actions. Refusing the other methods in the app would mean running the proxy on every request. If this matters, allow only GET, HEAD and POST at the CDN or reverse proxy.
- **OPTIONS to a page** answers 400.

## 6. Republish workflow (§27)

**Single source of truth:** `content/architecture/claims.ts`. Everything else derives from it at build time:

| Derived | How |
|---|---|
| `needsVerification` | Any claim detected in the page's PDF text is not publishable |
| `publication` | Held if the title contains a blocked claim term, or a `HELD_BY_DECISION` entry names a claim that is still blocked; framed if it needs verification with a safe title; otherwise published |
| Redirects | Held pages get a 307 to their context page; merged aliases skip a held canonical (307), then return to 308 |
| Sitemap / robots / metadata | Held pages are `noindex`; framed pages use a context description; published pages describe themselves from their PDF statement |
| Search index | Live pages only; keywords and summaries pass the claim check |
| Navigation | Links marked `onlyWhenLive` (Google Drive, Dropbox, AWS S3) are dropped on the server while their page is held and appear once it publishes; the validator errors on any other link to a held page |
| Composition | Held pages are not composed and never listed or linked |

`HELD_BY_DECISION` now names its claim instead of holding a page unconditionally. No publication status is stored twice.

**Test** (`npm run test:publication`, about 8 seconds). The real pipeline (build, compose, validate) runs in temporary directories with simulated claim statuses. Overrides are refused against `content/generated`.

1. **Today's register:** the 41 pages stay held, the Google Drive alias is a 307, and nothing appears in navigation.
2. **Figma confirmed:** its page publishes (indexable, searchable, composed, no redirect, its own description). FAQ 390 stays framed because it names other claims; Premiere Pro stays held.
3. **Storage sources confirmed:** all eight connector and migration pages publish, `/integrations/google-drive` returns to a 308 to `/storage/google-drive`, and Google Drive appears in navigation.
4. **Webhook events confirmed:** the decision-held pages 269–272 publish, and so do 252 and 268.
5. **SSO/SCIM confirmed:** 334 and 335 publish; FAQ 389 still states plan claims, so it becomes framed.
6. **A claim revoked (OCR):** its pages stop being published.
7. **Topology "marketing-analytics-renamed":** no marketing path remains under `/analytics`, the hub moves to `/features/analytics`, and the collision warning clears. "Undecided" reports it.
8. **Guard:** overrides against the real build are refused, and `content/generated` is unchanged.

**To publish a confirmed claim:**
1. Set its status to `client-confirmed` in `claims.ts`.
2. Run `npm run build`. The validator and build verification check the result, and `docs/route-matrix.csv` shows what changed.

## 7. `/analytics` collision (§28)

**The collision:**
- Today the GetSibu web app serves `/analytics` on getsibu.com (`RESERVED_APP_ROUTES`). The PDF architecture puts the marketing Analytics section (31 pages) at `/analytics/*`. One URL must not have two meanings.
- The same topology decides whether `/signup` and `/login`, the targets of Start free and Sign In, keep working on this domain.

**Decision recorded in `content/architecture/route-decisions.ts`**, currently `"undecided"`. The Analytics section path, its hub, the navigation links, the inventory, the sitemap, the route matrix and the validator all follow the setting:

| Decision | Effect |
|---|---|
| `undecided` (current) | Marketing `/analytics` as planned; the validator reports "Launch dependency: app route collisions" on every run |
| `marketing-owns-analytics` | Marketing keeps `/analytics`; the app gives it up on this domain; any other app-route collision is an error |
| `app-on-subdomain` | The app moves to its own origin; set `NEXT_PUBLIC_APP_ORIGIN` so the CTAs follow; no collision checks needed |
| `marketing-analytics-renamed` | The app keeps `/analytics`; marketing analytics moves to `/features/analytics` (tested), with no redirects from `/analytics`, which the app serves; any collision is an error |

## 8. SEO and AEO content quality (§29)

- **Titles:** 367 indexable titles, all unique, taken from the PDF topic with the brand suffix; none exceeds 60 characters. Short titles such as "AI OCR | GetSibu" are kept, because they are specific.
- **Descriptions:**
  - All unique and written from each page's own statement, or from a verified context for framed pages.
  - Long sentences now end at clause boundaries that only drop examples or purpose ("designed to", "by bringing", "allowing", "without relying", "where teams", "so organisations"), never conditions.
  - Truncated descriptions: 10 → 4. The remaining four are the home and platform lists, and pages 28 and 48, where a cut would shorten meaning or drop a condition.
- **Headings:** `verify:build` now fails on a page whose `<main>` does not start with its single H1 or skips a level; all 367 pages pass.
- **Answers:**
  - FAQ pages lead with a short answer; resources lead with a definition.
  - Answers carry inline links to the pages that explain their concepts.
  - FAQPage JSON-LD equals the visible answer on every FAQ page.
- **Not in scope without further instructions:** rewriting PDF-derived copy for keyword targeting, and per-page social images.

## 9. Launch dependencies (updated)

| # | Needed from GetSibu | Where it goes |
|---|---|---|
| 1 | Confirmed production origin | `NEXT_PUBLIC_SITE_URL`, with `SITE_ENV=production` |
| 2 | App topology decision (`/analytics`, `/signup`, `/login`) | `route-decisions.ts`; `NEXT_PUBLIC_APP_ORIGIN` if the app moves |
| 3 | Claim confirmations (41 held, 18 framed pages) | `claims.ts` |
| 4 | Contact endpoint and privacy notice | `CONTACT_FORM_ENDPOINT`, `CONTACT_FORM_PRIVACY_URL` |
| 5 | Privacy policy, terms, DPA | Legal pages (not built) |
| 6 | Company information | `/about` (`company-pages.ts`) |
| 7 | Future third-party scripts or embeds (analytics, video) | CSP in `next.config.ts` |
