/**
 * Company pages that are not PDF topics: /about and /contact.
 *
 * The official site's versions are placeholders (a stock-photo team, an unverified origin story,
 * template email addresses, a fictional phone number, an unverified headquarters), so none of it is
 * reused. These pages are built only from verified PDF statements, referenced by page number and
 * checked by scripts/validate-inventory.ts (live, publishable pages only). They state no team,
 * history, address, contact channel, certification or customer.
 *
 * When GetSibu supplies real company information, extend ABOUT_PAGE; when a verified contact channel
 * exists, add it to CONTACT_PAGE, make /contact indexable and enable GLOBAL_CTAS.secondary.
 */

export const ABOUT_PAGE = {
  path: "/about",
  title: "About GetSibu",
  metaTitle: "About GetSibu | GetSibu",
  /** What GetSibu is (PDF 381); also the hero lede and meta description. */
  lede: 381,
  /** Who GetSibu is for (PDF 382). */
  audience: 382,
  /** Storyline id for "What the platform brings together". */
  layers: "platform-layers",
  /** How GetSibu works: AI approach, security, API-first, migration. */
  approach: [60, 321, 254, 281],
  /** Conversion page for the closing call to action. */
  conversion: 392,
  indexable: true,
} as const;

export const CONTACT_PAGE = {
  path: "/contact",
  title: "Contact GetSibu",
  metaTitle: "Contact | GetSibu",
  description: "Routes to getting started with GetSibu: integration requests, migration, API documentation, security and frequently asked questions.",
  /** A plain statement of the page's state. Not a product claim. */
  state: "Direct contact details are not published on this site yet. These pages cover the most common reasons to get in touch.",
  /** Shown instead of the state once a contact form endpoint is configured (lib/forms/contact-config.ts). Not a product claim. */
  formLede: "Send GetSibu a message with the form below, or start with one of the pages that cover the most common questions.",
  /** Verified pages that answer the common reasons to make contact. */
  routes: [260, 281, 273, 321],
  /** Until a verified contact channel exists the page is not indexed and not in the sitemap. */
  indexable: false,
} as const;
