# 18 — Sky9 experience mirror

**Decision (2026-09-15, user request):** GetSibu mirrors the Sky9 reference site (<https://sky9india1.netlify.app/>): its information structure per page level, section flow, layout patterns, interactions, animations, transitions, spacing and card/link behaviour. Only GetSibu's content, branding, colours, typography (Inter) and assets are kept.

This supersedes the "presentation principles only" rule in [08 §2](08-visual-and-image-strategy.md#sky9) and the motion rules in [13](13-design-system.md) where they conflict.

User decisions taken with the request:

| Question | Decision |
| --- | --- |
| Sky9 slots that need content GetSibu has not verified (stats counters, testimonials, "Most popular" badges, prices, dashboard metrics, team, generic FAQs, enquiry form, phone/WhatsApp bar) | **Verified content only.** Mirror the layout; fill it only with verified GetSibu/PDF content; drop the slot where no source exists. |
| Colour mode (Sky9 opens dark with a toggle) | **Deferred.** The site stays light for now; a GetSibu dark theme and toggle come later. |
| Motion | **Mirror all motion.** Reduced motion is honoured, and headings stay readable to assistive technology. |
| Information structure | **Keep GetSibu's PDF pages and URLs; mirror templates.** Each GetSibu page level gets the matching Sky9 template, navigation and linking pattern. |

The non-negotiable content rules in `CLAUDE.md` are unchanged: no invented claims, numbers, testimonials, logos, prices or integrations.

---

## 1. Sky9 audit (2026-09-15)

**Method:**
- Downloaded and read the full front-end: 52 JS chunks, CSS, sitemap.
- Rendered every template in headless Chrome at 1440 and 390 px, scrolling through to trigger reveals.
- Captured DOM outlines (sections, headings, grids, paddings, surfaces, cards, motion nodes) and segmented screenshots.
- Captured navigation states (mega panel, list panel, mobile drawer).
- Artefacts are in the gitignored `.tmp/sky9/`.

Sky9 is a React SPA (Vite, Tailwind v4, Framer Motion, lucide icons) that defaults to dark mode.

### 1.1 Information structure

The sitemap lists 392 URLs, served by 20 templates:

| Level | Sky9 route | Template | URLs |
| --- | --- | --- | --- |
| Home | `/` | Home (19 blocks) | 1 |
| Catalogue hub | `/courses` | CoursesHubPage | 1 |
| Course (area) | `/courses/:course`, `/business-owners/:slug` | CoursePage | 6 |
| Topic (module) | `/courses/:course/:topic` | TopicPage | 45 |
| Deep landing | `/courses/:course/:topic/:sub`, `/topics/:slug`, `/career/:cat/:role`, `/resources/guides/:slug` | SeoLandingPage | ≈ 280 |
| Overviews | `/career/…-overview`, `/internship/…`, `/certification/…` | Career / Internship / Certification | 3 |
| Categories | `/career/:cat`, `/internship/:cat`, `/certification/:cat` | CategoryPage | 15 |
| Company | `/about/about-overview`, `/about/:slug`, `/contact-us`, `/pricing`, `/locations/*` | About, GenericPage, Contact, PricingPage, LocationPage | 20 |
| Utility | `/resources/*`, `/resources/sitemap`, `*` | ResourcesPage, SitemapPage, NotFound | 8 |

### 1.2 Global chrome

- **Header**
  - Fixed, 64 px tall.
  - Translucent (`bg-white/85`, `backdrop-blur-xl`) with a hairline, shadow and a 1536 px container.
  - Nav items: Home, then items with chevrons; the active item gets the accent colour and an underline.
  - Right side: theme toggle, Contact, an outlined "Log In" pill and an accent "Enroll Now" pill with an arrow chip.
- **Dropdowns** open on hover (60 ms) and animate from y + 10 px and scale 0.98 over 0.18 s.
  - *Mega panel:* 920 px, 4 columns. Each column has an icon heading over a rule, an accent hub link, then its pages.
  - *List panel:* 385 px. Each row has an icon tile, a bold title and a one-line description.
- **Mobile drawer:** a right sheet with the logo and a close button. Items are accordions; open groups show accent uppercase group links on a left rail. "Log In" and "Enroll Now" are pinned at the bottom.
- **Scroll progress bar:** 3 px gradient along the top edge, spring-eased.
- **Floating controls:** scroll to top and scroll to bottom (right side), a dismissible enquiry banner, and a phone bar.
- **Footer**
  - Structure: a pill on the top edge, a brand column with highlight cards, six link columns, a company/highlights/CTA column and a bottom bar.
  - Size: 216 links in a 1720 px container.

### 1.3 Inner-page skeleton (every template)

1. **PageHero:** a dark band under the fixed header (`pt-24/28/32`, min-height 420–500 px). The photo is covered by left-to-right and bottom-up gradients. In front: breadcrumb (home icon, chevrons, current page in the accent), icon tile and badge, a typed H1 with caret, subtitle, fact chips, and a primary plus a glass secondary button.
2. Optional **StatsBar** as a floating glass panel of 4 tiles on overview pages.
3. **Content**
   - *Overview:* a text column plus a sticky summary card ("most popular program").
   - *Cards:* curriculum cards and topic module rows.
   - *Featured splits:* text beside a framed media card.
4. **ProcessSection:** a centred header over numbered icon cards (5 per row).
5. **Internal link engine:** course cards plus small "connected topics" cards.
6. **FAQ accordion:** 8 items, the first open, with round chevron buttons and a height animation.
7. Enquiry form (course, topic and pricing pages).
8. **CTA band:** a rounded 3xl gradient panel with glows, badge, typed H2, subtitle and two pill buttons.

**Leaf flow (SeoLandingPage):** hero → overview and learning framework (paragraph plus a 2×2 checked points grid) → associated program band → roadmap → link engine → FAQ → CTA.

**Course flow (CoursePage):** hero with chips → overview plus sticky summary card → curriculum cards → topic module rows → roadmap → career chips → FAQ → enquiry → related chips → CTA.

### 1.4 Layout tokens

| Token | Sky9 |
| --- | --- |
| Containers | content `max-w-7xl` (1280), header 1536, footer 1720; padding `px-4 sm:px-6 lg:px-8` |
| Section padding | `py-8 sm:py-10 md:py-14` (32/40/56 px); dense `py-6 sm:py-8 md:py-12` |
| Section header | badge → H2 (`text-3xl md:text-5xl`, extrabold, tight) → subtitle (`text-base sm:text-lg`), centred, `mb-5 sm:mb-8 md:mb-10` |
| Radius | buttons `rounded-xl`, cards `rounded-2xl`, CTA panel `rounded-3xl`, badges and pills `rounded-full` |
| Card | `p-6/7`, 1 px border, translucent surface with backdrop blur, `shadow-sm` |
| Card hover | `-translate-y-2`, `shadow-xl` with accent tint, accent border at 60 %; icon tile scales to 110 % and fills with the accent; icon rotates 6°; arrow `translate-x-1`; image scales to 105 % over 700 ms |

### 1.5 Motion

Values read from the Framer Motion props in Sky9's production bundle (`.tmp/sky9/index-*.js` and `chunks/*.js`; second audit 2026-09-15). The default ease everywhere is `[.22,1,.36,1]`.

| Effect | Sky9 implementation |
| --- | --- |
| Route entrance | every route renders inside a wrapper: `{opacity 0, y 8} → {1, 0}`, 0.28 s ease-out |
| Hero | inner `PageHero`: the text block fades up from y 24 over 0.5 s on load; home hero: children stagger by 0.05 s, each y 24 over 0.3 s; the hero visual scales 0.95 → 1 over 0.6 s after a 0.15 s delay |
| Section header | fades up from y 22 over 0.55 s (margin −60 px); the badge scales 0.9 → 1 over 0.4 s |
| Cards | `FeatureCard`, `CourseCard`: y 24 → 0 over 0.45–0.5 s, delay index × 0.08 s, margin −40 px |
| Sections and grids | `whileInView` once, `{opacity 0, y 30} → {1, 0}`, 0.5–0.6 s, margin −50 px; containers `staggerChildren` 0.1–0.12 s |
| List rows and small tiles | rows slide from x −10 over 0.3 s; tiles scale 0.95 → 1 over 0.3 s; both delay index × 0.08 s |
| FAQ items | y 16 → 0 over 0.4 s, delay index × 0.05 s |
| CTA panel | `{opacity 0, y 24, scale 0.98} → {1, 0, 1}` over 0.55 s |
| Typewriter | H1 (with caret) and every section H2: 65 ms per character after 200 ms, once in view (margin −40 px); reserved invisible text keeps layout stable; reduced motion shows the text |
| Stats count-up | `StatsBar` counts from 0 with easeOutExpo once in view |
| Button shimmer | a skewed light band sweeps across every 3 s (`btn-shimmer`) |
| Button feedback | CTAs `whileHover` scale 1.04, `whileTap` 0.96; round icon buttons 1.08 / 0.9 |
| Card hover | lift `-translate-y-2`, accent shadow and border; icon tile scale 1.1 and fill, icon rotate 6°; arrow `translate-x-1`; images scale 1.05 over 0.7 s |
| Marquee | course pills, `x: 0 → −50 %`, 25 s linear, infinite |
| Float | hero badges and glows, y ±6–12 px, 4–6 s |
| Border beam | a gradient runs around featured card borders, 8 s |
| Spotlight | a radial light follows the pointer inside cards |
| Accordion | height 0 → auto with opacity over 0.3 s; the chevron turns and fills |
| Dropdown | `AnimatePresence`: y 10 and scale 0.98 over 0.18 s, in and out; opens after 60 ms of hover |
| Active nav item | one underline shared by all items (`layoutId`), moved by a spring (stiffness 380) |
| Mobile drawer | slides in from the right (spring, damping 26, stiffness 220) and out again; backdrop fades over 0.2 s; groups open with height 0 → auto |
| Modals | `{opacity 0, scale 0.95, y 20} → {1, 1, 0}` over 0.2–0.25 s, and back on exit |
| Progress bar | `scaleX` driven by scroll through a spring (stiffness 280, damping 30) |
| Theme toggle | the sun/moon icon rotates ±90° as it swaps |
| Enquiry success | confetti burst, pulsing rings and a check mark that draws itself |

---

## 2. How GetSibu mirrors it

### 2.1 Template mapping (URLs unchanged)

| GetSibu level | Sky9 template mirrored | Implementation |
| --- | --- | --- |
| `/` | Home | `app/page.tsx`: authored sections plus Sky9's area **marquee** under the hero |
| Section index with several categories (`/features`) | CoursesHubPage | `components/templates/HubTemplate.tsx`: hero → area cards (icon, arrow, summary, topic count, key topics, full-width action) → CTA band |
| Category hubs (`/features/ai`, `/storage`, `/permissions`, …) | CoursePage | `HubTemplate`: hero with fact chips → capability strip (StatsBar without invented numbers) → "start here" cards → grouped topic modules → related-area chips → CTA band |
| Section roots (`/platform`, `/developers`, `/security`, …) | CoursePage / overview pages | `PageTemplate`: hero → capability strip → sections → grouped topic modules → closing → CTA band |
| Topic pages (391 leaf pages) | SeoLandingPage / TopicPage | `PageTemplate`: authored sections render in their own order (hero → overview with sticky glance card → process/tabs/accordion/scenario… → FAQ → compact related → CTA band). Composed pages keep their order and a slim previous/next bar |
| `/about` | About | hero → capability strip → who it is for → why GetSibu (feature cards) → how it works (roadmap) → CTA band |
| `/contact` | Contact | hero → form (only when configured) → route cards |
| 404 | NotFound | dark hero with badge, typed H1 and two actions → popular pages |
| `/site-search` | Search utility | dark hero → results |
| `/sitemap` | Mengo sitemap structure (<https://mengoengine-website.vercel.app/sitemap/>, user request 2026-09-15) | dark hero with page and area counts → sticky controls (filter, live count, Clear, Collapse/Expand all, area chips) → one collapsible group per category (hub-linked H2, page count, links in 1–3 columns). Static HTML of every live route from `lib/content/directory.ts`; `DirectoryControls` adds filtering. Reached from the search dialog's "Explore all pages" row, its no-results message and the footer; `verify:build` checks it lists exactly the live routes |

### 2.2 Components

| Sky9 | GetSibu component |
| --- | --- |
| Header, dropdowns, drawer | `components/layout/SiteHeader.tsx`, `HeaderNavigation.tsx`, `NavPanel.tsx`, `MobileMenu.tsx`; model with icons and descriptions in `lib/navigation.ts` |
| Progress bar, floating scroll | `SiteHeader.tsx` (bar), `components/layout/FloatingScroll.tsx` |
| Footer | `components/layout/SiteFooter.tsx` |
| Badge, SectionHeader, TypewriterHeading | `components/primitives/SectionHeader.tsx` |
| Button (shimmer, glass, white, outline pills) | `components/primitives/Button.tsx` |
| FeatureCard, icon tile, check rows | `components/primitives/Card.tsx`, `icons.tsx` |
| PageHero | `components/sections/PageHero.tsx` (inner navy band; light home split with a floating frame) |
| StatsBar | `components/templates/CapabilityStrip.tsx` |
| Course overview and summary card | `OverviewSection` in `components/sections/TopicSections.tsx` |
| Filter tabs | `TopicTabsSection`, `CategoryExplorer` + `ExplorerTabs` |
| Curriculum and FAQ accordion | `components/sections/Accordion.tsx` (`TopicAccordionSection`, `FaqSection`) |
| ProcessSection roadmap | `ProcessSection` in `StorySections.tsx`; methodology stages in `WorkflowSection.tsx` |
| Featured program split | `SplitContentSection.tsx`, `AlternatingRows` |
| Internal link engine | `RelatedPages.tsx` (`cards`, `compact`, `index`) |
| Topic modules | `components/templates/HubGroups.tsx`, `ChecklistSection` |
| CTASection | `components/sections/CTASection.tsx` |
| Marquee | `components/sections/MarqueeStrip.tsx` + `MarqueePause.tsx` |

### 2.3 Motion system (no motion library)

`components/motion/MotionRuntime.tsx` is one client island mounted in `app/layout.tsx`. Markup opts in with attributes, and the runtime only toggles attributes and CSS variables that React does not manage. Timings are Sky9's (§1.5); the tokens (`--motion-micro` 180 ms, `--motion-base` 300 ms, `--motion-page` 280 ms, `--motion-reveal` 550 ms, `--motion-stagger` 80 ms, `--motion-distance` 24 px, `--ease-out` = Sky9's curve, `--ease-spring`) and every rule live in the motion section of `app/globals.css`.

| Attribute / class | Behaviour | Sky9 source |
| --- | --- | --- |
| `.page-enter` (`app/template.tsx`) | after a client navigation the new page fades up 8 px over 280 ms; the first load is left to the hero | route wrapper |
| `.motion-enter` children with `--i` | hero items rise 24 px in turn (90 ms apart), CSS only, independent of hydration | `PageHero` |
| `.motion-pop` | the hero visual scales 0.95 → 1 over 600 ms after the text | hero visual |
| `data-reveal=""` | cards and blocks: opacity + y 24 px over 550 ms, delay `--i` × 80 ms | `FeatureCard`, sections |
| `data-reveal="header"` | section headers: y 22 px | `SectionHeader` |
| `data-reveal="badge"` | badges: scale 0.9 → 1 over 400 ms | `SectionHeader` badge |
| `data-reveal="scale"` | tiles and figures: scale 0.95 → 1 | tiles, featured media |
| `data-reveal="panel"` | the CTA band: y 24 px and scale 0.98 | `CTASection` |
| `data-reveal="left"` | rows: x −10 px over 300 ms | list rows |
| `data-reveal="fade"` | opacity only | — |
| `data-revealed="done"` | set once an entrance has finished; drops the stagger delay so the element's own hover transitions respond at once | — |
| `.tw[data-typewriter]` (`TypewriterHeading`) | the heading keeps its full text (transparent while typing); an aria-hidden overlay types it at 65 ms per character after 200 ms, faster for long headings so none takes over 1.8 s. The overlay is an inert copy of the whole heading whose untyped part stays laid out but invisible, so each character appears where it stays (centred lines do not slide, balanced lines do not re-wrap, the hand-over moves nothing); `data-caret` adds a glowing caret that takes no width | `TypewriterHeading` |
| `.count[data-count]` (`components/motion/CountUp.tsx`) | verified numbers only (topic counts in `CapabilityStrip`): the value stays in the DOM, an aria-hidden overlay counts up with easeOutExpo over 1.2 s | `StatsBar` |
| `.tab-panel` | the panel that becomes visible rises 10 px over 350 ms; explorer cards stagger by 50 ms (`--tab-i`) | filtered grids |
| `.accordion-panel` | grid-rows height and content opacity over 300 ms; the chevron button turns and fills | FAQ accordion |
| `.nav-panel[data-open]` | dropdowns rise from 10 px and 0.98 over 180 ms and leave the same way; closed panels are invisible and `inert`; moving between triggers swaps instantly (`data-switching`) | nav `AnimatePresence` |
| `.nav-indicator` (`HeaderNavigation`) | one bar under the current section, measured, sliding with `--ease-spring` over 450 ms; before measurement the item's own underline shows | `layoutId` indicator |
| `dialog.search-dialog`, `dialog.menu-sheet` | the search palette rises from 20 px and 0.95 over 250 ms, the drawer slides in over 450 ms, the backdrop fades; both leave with a transition (`overlay`/`display` `allow-discrete`, Chromium); drawer groups open with a height ease (`::details-content`, where supported) | modals, drawer |
| `.btn-shimmer`, `.motion-float`, `.marquee-track`, `.border-beam` | CSS keyframes | same |
| Buttons | `active:scale-[0.97]` (CTA band 0.95); header search and floating scroll buttons grow to 1.08 on hover and press to 0.9 | `whileHover` / `whileTap` |
| `.spotlight` | the runtime sets `--spot-x/--spot-y` and `data-spot` from the pointer (card position measured once per card) | `SpotlightCard` |
| `.scroll-progress` | the runtime sets `--progress`, eased toward the scroll position | progress spring |

`html[data-motion]` is decided before first paint by an inline script (`MOTION_BOOT`):

| Value | When | Effect |
| --- | --- | --- |
| `on` | default | full motion |
| `reduced` | `prefers-reduced-motion` | nothing hides, loops stop |
| `paused` | the visitor used **Pause animations** (footer; remembered in `localStorage`) | nothing hides, loops stop |

Content is hidden for an entrance only when motion is `on`, so without JavaScript every section is visible. If the inline script ran but the runtime never starts (a chunk failed to load), `html:not([data-motion-ready])` reveals hidden content after 3 s, and typed headings and counts show after 4 s. These fallbacks apply only while the runtime is not ready; otherwise a heading below the fold would already show when it is typed. A change to the reduced-motion setting while a page is open applies immediately, and **Pause animations** settles every pending entrance, typewriter and count (`settleMotion`).

**Coverage.** Motion lives in shared components, so every page type gets it without per-page code:

| Pattern | Components |
| --- | --- |
| Route entrance | `app/template.tsx` (every route) |
| Hero entrance, typed H1 | `PageHero` (inner and home), `app/not-found.tsx`, `app/site-search/page.tsx` |
| Section header (rise, badge, typed H2) | `SectionHeader` in `ContentSections`, `TopicSections`, `StorySections`, `WorkflowSection`, `BeforeAfterSection`, `CategoryExplorer`, `RelatedPages`, `HubGroups`, `HubTemplate` |
| Card and block entrances | `CapabilityBreakdown`, `PlanComparison`, `RelatedPages`, `HubTemplate`, `HubGroups`, `ProcessSection`, `WorkflowSection`, `EditorialSection`, `EventListSection`, `OverviewSection`, `DefinitionBlock`, `StatementSection`, `ComparisonTable`, `MatrixSection`, `ChecklistSection`, `BeforeAfterSection`, `ScenarioSection`, 404 popular pages |
| Row slide-ins | `TimelineSection`, `LayersSection`, `ScenarioSection` steps |
| Scale-ins | `CapabilityStrip` tiles, `SplitContentSection` and `MediaContentSection` figures, `AlternatingRows` figures, glance card |
| CTA panel | `CTASection` |
| Count-up | `CapabilityStrip` |
| Tabs | `TabsIsland` (`TopicTabsSection`), `ExplorerTabs` (`CategoryExplorer`) |
| Accordion | `Accordion` (`TopicAccordionSection`, `FaqSection`) |
| Card hover (lift, glow, icon tile, arrow, spotlight) | `CARD`, `TILE`, `IconTile` and the link rows in `RelatedPages`, `HubGroups`, `ChecklistSection`, `PreviousNext`, `MarqueeStrip`, `NavPanel`, footer highlights |
| Header | `HeaderNavigation` (dropdowns, indicator, search button, CTA), `NavPanel`, `MobileMenu`, `SearchDialog`, scroll progress in `SiteHeader` |
| Loops | `btn-shimmer` on primary buttons, `MarqueeStrip`, border beams, CTA and scenario glows, home hero badge |

**Sky9 motion not reproduced:** the theme-toggle icon rotation (the dark theme is deferred), and the enquiry-success confetti, rings and self-drawing check (GetSibu has no enquiry flow; the contact form shows success only when the configured endpoint accepts a submission). Sky9's stats counters count invented figures; GetSibu counts only topic totals from the inventory.

**QA** (`.tmp/sky9-motion-qa.mjs`, headless Chrome): 18 representative pages scrolled end to end at 1440 px (every reveal, typewriter and count completes; nothing left hidden; no horizontal overflow; CLS under 0.1; no console errors); interactions (indicator position and slide, dropdown in/switch/out and keyboard, page transition only after navigation, tabs, accordion, search dialog in/out, count-up, card hover); mobile drawer in/out and group expand at 390 px; a width sweep from 320 to 2560 px; reduced motion, paused, and a runtime blocked from loading.

### 2.4 Where GetSibu deliberately differs

| Sky9 | GetSibu | Why |
| --- | --- | --- |
| Dark by default, theme toggle | Light only (toggle deferred) | User decision |
| Poppins headings | Inter (weights 700/800) | GetSibu typography |
| Emerald accent | Indigo actions, olive signal and graphics, navy bands | GetSibu brand |
| Stats counters ("5000+") | Capability strip: area names and topic counts | Verified content only |
| "Most popular" badges, prices, dashboard metrics | Omitted | Unverified |
| Testimonials, team, logos | Omitted | Unverified |
| Enquiry form, phone bar, "Enquire Now" banner, "Book a demo" | Omitted; the contact form only renders when an endpoint and privacy notice are configured | No verified channel |
| 8 generated FAQs per page | FAQ sections only with sourced or authored Q&A | Content rules |
| Photos in heroes | The topic's assigned photo, composed per page type (§2.5), captioned "Illustration"; pages without a photo keep the diagram frame | GetSibu assets |
| Client-only rendering | Static HTML for every route | Performance, SEO |
| Menus clip off-screen (panels centred on the trigger) | Panels centred on the navigation | Same look, no clipping |
| Footer: pill on the top edge, highlight cards, six link columns, company/highlights/CTA column, bottom bar with links | Footer (2026-09-15) follows a user-supplied reference layout: an olive tab hanging from the top edge, a brand column (logo, statement, badge-style highlight links), five link columns under olive headings with the Sign In pill and primary action under Company, a centred copyright line with the motion control. Diagonal panels in the background are decorative. No social icons, app badges, memberships, payment marks or legal links | User decision; those slots have no verified GetSibu content |
| Infinite loops with no control | Loops pause with the footer control; the marquee has its own pause button | WCAG 2.2.2 |
| Framer Motion ignores reduced motion | Reduced motion honoured everywhere | WCAG 2.3.3 |
| Typewriter duplicates heading text in the DOM | One text node; the typed overlay is aria-hidden | Assistive technology, SEO |

### 2.5 Photo presentation (second pass, 2026-09-15)

A second Sky9 audit (home, about, courses, course and module pages, career, internship, certification, pricing, locations, resources, audience and contact pages) looked only at how Sky9 presents photos. The recurring patterns:

| Sky9 pattern | What it does | GetSibu before | GetSibu now |
| --- | --- | --- | --- |
| Inner-page banner: a full-width photo about 500 px tall behind two gradient overlays (left to right, bottom up), copy left | The photo sets the scene; the copy stays readable | Small framed photo on the right (33 % wide), hidden on phones | **Backdrop hero** on topic pages; **bleed hero** (crisp panel off the right edge) on section roots; **editorial hero** (framed card beside the copy) on resources and FAQs |
| Intro split: copy left, a large framed photo right with a glass caption bar | The first content section has a visual anchor | No section photos rendered (only `split`/`media` kinds looked them up; authored pages use neither) | Overview: photo right with the "At a glance" card overlapping its foot |
| Featured-programme panel: photo leading a card | Examples feel concrete | Text-only situation card | Scenario: the photo leads the situation card and fades into it |
| Framework band: wide photo under the steps | The process has a picture | Stage cards only | Workflow: wide photo band with the stage cards rising over its lower edge |
| Feature visual beside a section header | Important sections get emphasis | Centred header only | Capabilities: header beside the section photo, then the cards |
| Bands alternate tone | Sections read as one sequence | Almost every body section on white | `rhythm.ts`: body sections alternate page ground and tinted band; authored surfaces win; the related strip joins the band before it |

Rules:

- Photos come only from `content/generated/image-matrix.json` through `lib/content/images.ts` (hero, and one image per section kind: overview, capabilities, scenario, workflow). Components never choose, rename or reassign an image. `images.ts` withholds a section image whose source photo is already on the page, so that section renders its image-free layout; every section pattern has one.
- `TopicImage.tsx` holds the primitives: `FramedImage` (rounded frame, reveal zoom, hover zoom, caption pill) and `CaptionChip`. Every caption starts with "Illustration".
- Text never depends on photo contrast. Wherever copy overlaps a photo the overlay is at least 88 % navy; caption pills are 85 % navy. On phones the copy sits on the solid band and the photo rises out of it below.
- Motion stays in the existing system and uses transform only: `.hero-settle` (hero photo settles from a 6 % zoom on load), `.reveal-zoom` (a section photo settles as its frame scrolls in), hover zoom. Nothing animates while motion is reduced or paused.
- The hero photo is the LCP candidate: `preload`, explicit `sizes`, no opacity animation.

## 3. Checks

- `npm run build` must pass, including `verify:build`: route matrix, metadata, H1 text, heading order, FAQPage answers, claims and placeholders in every built file.
- **QA scripts** (`.tmp/`): axe in both motion modes, keyboard suite, responsive sweep (9 widths). Entrances hide content, so these tests must scroll through a page (or run with reduced motion) before asserting contrast.
- **Visual comparison:** `.tmp/sky9/capture.mjs` captures Sky9 templates; capture GetSibu with the same script against `http://127.0.0.1:3200`.
