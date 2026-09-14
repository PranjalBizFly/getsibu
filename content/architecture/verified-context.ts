/**
 * Verified context for pages whose own claims GetSibu has not confirmed (`needsVerification`).
 *
 * Such a page keeps its PDF title and route, but its own statement is never published — not in the
 * body, the meta description, structured data or the search index. It is framed by verified pages
 * instead:
 *
 *   - `context` — a publishable page whose statement becomes the hero lede and meta description.
 *     Chosen so that it does not imply the unconfirmed capability (Figma, Premiere Pro and After
 *     Effects are framed by "request an integration", not "connects with the tools you use").
 *   - `next` — a publishable page to send readers to (a statement section with a link).
 *   - `topics` — publishable pages for a related-topics grid, under a claim-free heading.
 *   - `faqs` — publishable FAQ pages that answer the surrounding question.
 *
 * Pages not listed fall back to: the first publishable cluster primary → a publishable member of one
 * of their clusters → their section's root page (scripts/build-inventory.ts, `contextPage`).
 */

export interface VerifiedContext {
  id: string;
  pages: number[];
  context?: number;
  next?: number;
  topics?: { heading: string; pages: number[] };
  faqs?: number[];
  /**
   * FAQ pages only: an answer made of verified statements, in order. Each sentence is the page's own
   * statement, and `link` is the exact phrase in it that links to that page.
   */
  answer?: Array<{ page: number; link: string }>;
  /** Why this framing was chosen (for reviewers). */
  note: string;
}

export const VERIFIED_CONTEXT: VerifiedContext[] = [
  {
    id: "webhooks",
    pages: [252, 268, 269, 270, 271, 272],
    context: 257,
    next: 273,
    topics: { heading: "Building with the GetSibu API", pages: [278, 262, 266, 267, 256, 277] },
    faqs: [388],
    note: "Webhook event names conflict with the product (claim webhook-events). Webhook Automation, the API pages and FAQ 388 are publishable. Comment and approval API pages appear as API topics, never as a list of webhook events.",
  },
  {
    id: "automation-tools",
    pages: [246, 251],
    context: 257,
    next: 260,
    topics: { heading: "Other ways to automate", pages: [278, 255, 279, 273] },
    faqs: [388],
    note: "Slack and Zapier are unconfirmed; automation through webhooks and the API is publishable.",
  },
  {
    id: "creative-tools",
    pages: [247, 248, 249, 250],
    context: 260,
    next: 279,
    topics: { heading: "Connecting your tools", pages: [241, 255, 279, 121] },
    note: "The app lists Figma, Premiere Pro and After Effects as not supported. Frame the pages with requesting an integration and building on the API, never with 'connects with the tools you use'.",
  },
  {
    id: "developer-tooling",
    pages: [258, 259, 274],
    context: 261,
    next: 273,
    faqs: [388],
    note: "Playground, SDKs and OpenAPI are unconfirmed; the GetSibu API and its documentation page are publishable.",
  },
  {
    id: "ai-unconfirmed",
    pages: [33, 37],
    context: 60,
    next: 57,
    topics: { heading: "Related AI capabilities", pages: [43, 34, 31, 12, 54] },
    faqs: [383],
    note: "Scene detection is 'coming soon' in the app and face grouping is unconfirmed: frame with GetSibu's stated AI approach rather than a neighbouring detection feature.",
  },
  {
    id: "video-use-cases",
    pages: [212, 216],
    context: 97,
    note: "These use cases name scene detection; video version management is the publishable statement about video teams.",
  },
  {
    id: "documentary-use-case",
    pages: [217],
    context: 25,
    note: "Searchable video library is the publishable statement closest to documentary footage.",
  },
  {
    id: "integrations-faq",
    pages: [390],
    context: 241,
    answer: [
      { page: 241, link: "connects with the tools teams already use" },
      { page: 121, link: "asset ingestion from connected storage sources" },
      { page: 255, link: "use the API" },
      { page: 260, link: "request integrations" },
      { page: 281, link: "migration capabilities" },
    ],
    note: "The PDF answer lists named integrations GetSibu has not confirmed. The answer is assembled from verified statements about integrations, ingestion, the API, integration requests and migration, each linked to its page.",
  },
  {
    id: "pricing",
    pages: [341],
    context: 345,
    next: 359,
    topics: { heading: "What teams weigh alongside cost", pages: [348, 349, 350, 355, 360, 346] },
    note: "The plan list and prices conflict between the pricing page and the signup API. The pricing page names no plans; it points to verified pricing and business-value pages.",
  },
  {
    id: "security-unconfirmed",
    pages: [331, 332, 333, 334, 335, 389],
    context: 321,
    note: "Backup, restore, replication, SSO and SCIM tiers are unconfirmed. Frame with GetSibu Security, not with version restore or per-client authentication, which describe different things.",
  },
];

export const verifiedContextFor = (page: number) => VERIFIED_CONTEXT.find((c) => c.pages.includes(page));

/**
 * Publication of pages that need verification.
 *
 *   framed — the title is safe; the page publishes with the verified context above.
 *   held   — the title itself states an unconfirmed claim (a named integration, storage source,
 *            certification, plan, event or capability). A held page is not published anywhere: no
 *            rendered page, navigation, hub, sitemap, search, related, previous/next or link entry,
 *            and no metadata. Its URL redirects temporarily (307) to its context page. Confirming the
 *            claim in claims.ts republishes the page, its links and its sitemap entry automatically.
 *
 * Titles containing a blocked claim term are held automatically (scripts/build-inventory.ts). These
 * decisions add titles that state a claim in words the detect terms do not cover. Each names its claim:
 * the page is held only while that claim is not publishable, so the claims register stays the single
 * source of truth and confirming the claim republishes the page.
 */
export const HELD_BY_DECISION: Record<number, { claim: string; reason: string }> = {
  269: { claim: "webhook-events", reason: "Names a specific webhook event; the event list is conflicting." },
  270: { claim: "webhook-events", reason: "Names a specific webhook event; comment events were not found in the product." },
  271: { claim: "webhook-events", reason: "Names a specific webhook event; approval events were not found in the product." },
  272: { claim: "webhook-events", reason: "Names billing webhook events; the event list is conflicting." },
  285: { claim: "storage-sources", reason: "Names S3 as a migration source." },
};
