/**
 * URL rules.
 *
 *   /<section>/<slug>             every canonical PDF page
 *   /<section>                    section root: a PDF overview page, or a generated index
 *   /features/<category>          feature category hubs (generated)
 *
 * Slugs are derived from the PDF title by `slugify` + the section's `stripPattern`, then any
 * `SLUG_OVERRIDES`. They are lowercase ASCII, hyphenated, never contain ids, and never change once
 * published — a rename must add the old path to `aliases` so it 308-redirects.
 *
 * Spelling follows the PDF (British English: "organisation", "colour", "centralised").
 */
import type { CategoryId, SectionId } from "../../types/content.ts";

/** Words removed from slugs within a section because the section path already says them. */
export const SECTION_STRIP_PATTERNS: Partial<Record<SectionId, RegExp[]>> = {
  "use-cases": [/^getsibu-for-/],
  integrations: [/-integration$/],
  storage: [/-integration$/],
  migration: [/^getsibu-/],
  developers: [/^getsibu-/],
};

/** Hand-chosen slugs where the derived one is wrong or unclear. Keyed by PDF page number. */
export const SLUG_OVERRIDES: Record<number, string> = {
  // None needed: every PDF title derives a clean slug. Add entries here rather than special-casing
  // the build script, e.g. 123: "dropbox".
};

/**
 * Pages that live outside their PDF group's default section.
 * Keep this list short; every entry needs a reason that holds up to "why not follow the PDF?".
 */
export const SECTION_EXCEPTIONS: Record<number, { section: SectionId; category: CategoryId; reason: string }> = {
  252: { section: "developers", category: "developers", reason: "Webhooks are a developer surface; webhook events (268-272) already live in API & Developers." },
  253: { section: "developers", category: "developers", reason: "REST API belongs with the GetSibu API pages (261-280)." },
  254: { section: "developers", category: "developers", reason: "API-First DAM describes the API architecture, not a third-party integration." },
  255: { section: "developers", category: "developers", reason: "Developer API belongs with the GetSibu API pages." },
  256: { section: "developers", category: "developers", reason: "API Authentication sits beside Developer Authentication (275) and API Security (277)." },
  257: { section: "developers", category: "developers", reason: "Webhook Automation sits beside Webhook Events (268) and Developer Automation (278)." },
  258: { section: "developers", category: "developers", reason: "Developer Playground is a developer tool." },
  259: { section: "developers", category: "developers", reason: "SDK Support is a developer tool." },
};

/**
 * Exact duplicates in the PDF. The first occurrence is canonical; the later entry is kept in the
 * inventory (nothing is omitted), its paragraph becomes additional source material for the
 * canonical page, and its natural URL 308-redirects to the canonical URL.
 *
 * 122-125 are canonical because (a) they appear first, (b) they sit with Local NAS (126) as the
 * complete set of storage sources, and (c) the storage angle — connect, index, discover — is the
 * substance of both paragraphs. The Integrations root (241) cross-lists them.
 */
export const MERGES: Record<number, { into: number; alias: string }> = {
  242: { into: 122, alias: "/integrations/google-drive" },
  243: { into: 123, alias: "/integrations/dropbox" },
  244: { into: 124, alias: "/integrations/onedrive" },
  245: { into: 125, alias: "/integrations/aws-s3" },
};

/** Section roots and index hubs reserve these paths; no leaf slug may equal the last segment. */
export const RESERVED_FEATURE_SLUGS = ["search-and-discovery", "ai", "collaboration", "asset-management"];

export function slugify(title: string): string {
  return title
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^the-/, "")
    .replace(/^-+|-+$/g, "");
}

/**
 * Routes served by the GetSibu web app on getsibu.com today (from its router, audited 2026-09-14).
 *
 * If the marketing site and the app share getsibu.com behind a path-based proxy, no marketing path
 * may start with one of these segments. The decision (and the /analytics collision it resolves) is
 * recorded in route-decisions.ts; the validator enforces it.
 */
export const RESERVED_APP_ROUTES = [
  "/login", "/signup", "/register", "/forgot-password", "/twofa", "/reset-password", "/accept-invite",
  "/onboarding", "/verify-email", "/share", "/shares", "/dashboard", "/library", "/search", "/analytics",
  "/activity", "/team", "/upload", "/support", "/tickets", "/comments", "/tags", "/ai-tools", "/ai-usage",
  "/announcements", "/referral", "/notifications", "/asset", "/settings", "/admin", "/maintenance",
];

/** Marketing routes on the current site that this site replaces; keep them resolving. */
export const LEGACY_MARKETING_ROUTES = ["/", "/features", "/pricing", "/about", "/contact"];
