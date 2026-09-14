# Visual Direction, Sky9 Principles and Image Strategy

Category visual directions are data (`CategoryDef.visual` in `content/architecture/sections.ts`) and flow into every inventory entry (`visual`), so the image brief for all 396 pages already exists.

## 1. GetSibu identity (from the official brand, not from Sky9)

| Element | Direction |
|---|---|
| Logo | Official files in `docs/source/official-site-2026-09-14/brand/`. The olive "g" symbol (a circle over an open bowl) is the brand's distinctive shape; it can inspire a restrained motif (concentric rings for "focus / found"), never a decorative blob. |
| Colour | **Indigo `#2B296E`** — primary, text on light, trust. **Olive `#97AC3B`** — accent, used sparingly for emphasis, active states, the moment something is *found*. Neutral navy `#0F1729` for inverse bands. Off-white `#F3F4F7` ground. Prompt 2 derives tints and checks every text/background pair against WCAG AA. Note: white on olive `#97AC3B` is ~2.5:1 — olive cannot carry white body text or small button labels; use indigo or navy text on olive, or olive on navy. |
| Type | Inter is the declared brand face (not actually loaded on the current site). Recommendation: Inter variable, self-hosted via `next/font`, two weights for UI (400/600) plus one display weight — not 11 weights across two families. |
| Tone | Premium B2B, calm, precise, editorial. The official "about" values — "Calm software", "Tenant trust", "Real workflows" — are the right temperature (the values themselves are unverified copy; the tone is the takeaway). |
| Language | British English, PDF terminology, no superlatives the sources don't make. |

**Avoid** (from the brief, reinforced by both audits): generic gradients and mesh blobs, glassmorphism, stacked shadows, icon grids standing in for explanation, arrow-heavy layouts, dashboard mock-ups everywhere, fake product screenshots, repeated card grids, unrelated stock imagery, decoration without meaning.

## 2. Sky9 — what we take and what we don't {#sky9}

Audited 2026-09-14 (headless Chrome at 1440/390 px, CSS/JS bundles). Sky9 is a React SPA with Tailwind v4 and Framer Motion; 392 URLs from 20 templates — structurally similar to GetSibu's scale.

### Adopt as principles

| Principle | Sky9 evidence | GetSibu application |
|---|---|---|
| **A single section-header formula** | eyebrow → H2 → one-line subtitle (max ~768 px) everywhere | `SectionHeader` component; subtitle max ~65ch; centred only on catalogue/hub sections, left-aligned in splits |
| **One inner-page skeleton, many pages** | shared hero → content → process → FAQ → CTA band across 390 pages | Page types + recipes; the skeleton is shared, the section order varies by recipe |
| **Breadcrumb inside the hero** on every inner page | ✓ with BreadcrumbList JSON-LD | Same; already emitted |
| **Framed media with a caption bar** | image in a padded frame with an overlaid caption | For product captures and diagrams: frame + caption stating what is shown (and that diagrams are illustrative) |
| **Mega menu columns: heading → bold overview link → children** | 4-column panel | Adopted; positioned against the header container |
| **Mobile drawer done right** | dialog, focus trap/restore, Escape, scroll lock | Adopted |
| **Global focus-visible style** | 2 px accent outline, 2 px offset | Adopted with indigo/olive pair that passes 3:1 on all surfaces |
| **Deliberate stacking order** on mobile; orphan-card handling | splits stack text-first; last odd card spans | Adopted in grid primitives |
| **CTA context passed to the lead form** | modal receives source page + CTA id | `/contact?from=<pdfNumber>&cta=<id>` for attribution, no modal |

### Explicitly avoid

| Sky9 weakness (measured) | GetSibu rule |
|---|---|
| Client-only rendering: blank HTML, ~260 KB JS before first paint | Static HTML for every route; JS only for islands (search, nav panels, drawer) |
| 19 home blocks, **five identical split rows back to back**, cards inside panels, 24–56 px section padding (35 mobile screens) | ≤ 8–10 sections per page; recipes forbid repeated adjacent kinds; generous but not empty spacing (see [12](12-responsive-accessibility-performance.md)) |
| Typewriter on most headings (duplicated heading text in the DOM), 19 shimmer buttons, perpetual loops, tilt, cursor spotlight, sheens | One signature motion (a restrained reveal), played once, CSS-only, disabled under `prefers-reduced-motion` |
| Framer Motion ignoring reduced-motion | Reduced motion honoured by every animation, JS or CSS |
| 154 `backdrop-filter` elements, large blur glows | No backdrop blur except the sticky header (optional), no glow effects |
| White on brand green at 2.54:1 on primary buttons | Every text/background pair tokenised and contrast-tested |
| Unsized WebP images, single size, no `srcset` | `next/image` with explicit dimensions, responsive sizes, AVIF/WebP |
| Three container widths (1280/1536/1720) | One content container + one wide container, shared by header, body and footer |
| Floating widgets covering content (sticky bars, scroll buttons, chat) | None |
| Fake UI chips pasted on stock photos, "most popular" badges, hard-coded counters | No fabricated UI, no badges without a source, no counters |
| 8 FAQs generated per template (thin, duplicate content) | FAQ sections only where authored Q&A exists |
| No skip link; broken heading order (H1 → H3 → H5 before any H2) | Skip link; strictly sequential headings per section |

### Presentation rhythm

Pages alternate density deliberately. A typical feature page on the `feature-split` recipe:

```
hero (open, statement + visual) → split (visual explanation) → process (dense, steps) → related (open) → cta (inverse band)
```

Recipes already prevent dense-after-dense; surfaces alternate `default` → `muted` → `default` → `inverse` so section boundaries read through tone and spacing rather than borders and boxes.

## 3. Image strategy

### Media types, in order of preference

1. **Real GetSibu product captures** (supplied by GetSibu, current UI, no "Lumen" traces, no fabricated numbers in view). Required for claims about the interface. Until supplied, those slots render a diagram instead — never a mock-up that imitates the product.
2. **Explanatory diagrams** built as SVG/React from source facts — e.g. the approval states "awaiting review / approved / requires changes" (PDF 68), the layered architecture "clients, edge services, APIs, search infrastructure, storage" (PDF 301), roles "owners, administrators, managers, editors, individual users" (PDF 153, pending role confirmation). Labelled as illustrations where they could be mistaken for UI.
3. **Photography** only where the subject is a *team and its material* (use cases, business value): licensed, conceptually exact (a colourist's timeline for post-production, a product shoot for e-commerce, a newsroom archive for newsrooms), never people looking at a laptop.
4. **Typographic** treatments for FAQs, pricing and conversion statements.

### Direction by category

| Category | Medium | Concept | Avoid |
|---|---|---|---|
| Home | product UI, diagram | One library: video, image, document, audio arriving from sources and becoming searchable | dashboard collages, gradient blobs |
| Platform | diagram, product UI | Storage, organisation, AI tagging, search, collaboration, permissions, analytics as connected layers (PDF 2) | icon grids, fake metrics |
| Search & Discovery | product UI, diagram | A query resolving: filters narrowing, the matched signal (filename / metadata / OCR text / tag) made visible | magnifying-glass art, lorem results |
| AI | diagram, product UI | Media in → understanding out: the detected signal overlaid (object, scene, mood, colour, face, text) → the tag and its approval state | robots, brains, neural wallpaper, implied accuracy |
| Collaboration | product UI, diagram | Feedback on the work: a comment pinned to a timeline frame, a thread beside an image, a status change | chat-bubble collages, meeting stock |
| Versioning & Asset Management | diagram, product UI | The asset record over time: stacked versions, status changes, lifecycle stages, audit trail | filing cabinets, clocks |
| Storage & Ingestion | diagram, product UI | Sources → upload → processing → indexed and searchable | server racks, raining files |
| Permissions & Multi-Tenancy | diagram | Folder tree with role scopes, private-by-default folders, tenant boundaries | padlocks and shields as the hero, hacker imagery |
| Analytics | data visual, product UI | Uploads, storage by category, top tags, contributors over time — illustrative, unlabelled scales | invented numbers, KPI tiles with growth % |
| Use Cases | photography, product UI | The team's real material and environment + the capabilities the PDF names for that team | customer logos, testimonials |
| Integrations | diagram | The connection and what flows (assets, events, notifications); third-party marks only per vendor guidelines and only for confirmed integrations | logo walls implying partnership |
| Developers | code concept, diagram | Request/event flow; code only when it matches published docs | invented endpoints/payloads |
| Migration | diagram | Existing folder tree + metadata mapped into the library, with verification checkpoints | trucks, rockets |
| Architecture & Performance | diagram | Precise layered technical drawing | speed lines, stopwatches, benchmark charts |
| Security & Compliance | diagram, typographic | Controls as structure: tenant boundaries, encryption at rest, identity, audit history | unconfirmed certification badges |
| Pricing | typographic | Plans compared plainly | illustration, unfounded "most popular" |
| Business Value | diagram, photography | Where time and storage go without vs with a central library, qualitatively | ROI %, calculators |
| Resources | diagram, typographic | Figures that teach the concept (metadata anatomy, taxonomy nesting, scene boundaries) | decorative hero photos |
| FAQs | typographic | Answer-first; one supporting visual only if it shows the answer | question-mark art |
| Get Started | product UI, photography, typographic | One statement + one visual of the promised outcome | countdowns, urgency, fake social proof |

Pages whose type differs from their category borrow the matching category's direction (storage sources use the Integrations direction, storage analytics the Analytics direction, and so on).

### Uniqueness and relevance rules (enforced by a media registry in Prompt 3)

- Every image has an `assetId` registered once with subject, source, licence and the pages it is approved for. One asset → one page, unless marked `shared` with a reason (e.g. the logo).
- Alt text describes what the image shows *for this page's point*, not keywords.
- No image is chosen because it is attractive; each maps to a `visual.concept` and `visual.subject` in the inventory.
- Diagrams are generated per page from the page's own data (stage names, roles, layers), so 30 AI pages yield 30 different figures rather than one reused illustration.
