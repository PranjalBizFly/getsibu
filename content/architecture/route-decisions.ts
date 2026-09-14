/**
 * Route decisions that depend on how GetSibu deploys the marketing site and the web app.
 *
 * Today the web app runs on getsibu.com and owns top-level paths (RESERVED_APP_ROUTES in
 * url-rules.ts), including /login, /signup and /analytics. This site's PDF architecture also has an
 * Analytics section at /analytics (31 pages). One URL must not mean two things, so the choice is
 * recorded here — it is GetSibu's to make:
 *
 *   "undecided"                    Marketing /analytics as planned. The validator reports the
 *                                  collision as a launch dependency on every run.
 *   "marketing-owns-analytics"     The app gives up /analytics on this domain (a path proxy sends
 *                                  /analytics to this site). No other collision is allowed.
 *   "app-on-subdomain"             The app moves to its own origin (e.g. app.getsibu.com). Set
 *                                  NEXT_PUBLIC_APP_ORIGIN so "Start free" and "Sign In" follow it.
 *   "marketing-analytics-renamed"  The app keeps /analytics; the marketing section moves to
 *                                  ANALYTICS_RENAMED_PATH. No redirects from /analytics: the app
 *                                  serves it. No collision is allowed.
 *
 * Changing the decision changes every analytics URL through sections.ts and navigation.ts; the
 * inventory, sitemap, redirects and build verification follow automatically.
 */

export type AppTopology = "undecided" | "marketing-owns-analytics" | "app-on-subdomain" | "marketing-analytics-renamed";

/** GetSibu's decision. Leave "undecided" until it is made. */
const DECISION: AppTopology = "undecided";

/** Marketing Analytics section path when the decision is "marketing-analytics-renamed". */
export const ANALYTICS_RENAMED_PATH = "/features/analytics";

const TOPOLOGIES: AppTopology[] = ["undecided", "marketing-owns-analytics", "app-on-subdomain", "marketing-analytics-renamed"];

/**
 * scripts/test-publication.ts may try another topology in a temporary output directory; the
 * pipeline refuses the override for real builds (scripts/pipeline-env.ts).
 */
const testOverride = typeof process !== "undefined" && process.env.GETSIBU_GENERATED_DIR ? process.env.GETSIBU_APP_TOPOLOGY : undefined;
if (testOverride && !TOPOLOGIES.includes(testOverride as AppTopology)) throw new Error(`Unknown GETSIBU_APP_TOPOLOGY "${testOverride}"`);

export const APP_TOPOLOGY: AppTopology = (testOverride as AppTopology | undefined) ?? DECISION;

/** Base path of the marketing Analytics section under the current decision. */
export const ANALYTICS_PATH = APP_TOPOLOGY === "marketing-analytics-renamed" ? ANALYTICS_RENAMED_PATH : "/analytics";

/** Paths inside the marketing Analytics section. */
export const analyticsPath = (slug?: string) => (slug ? `${ANALYTICS_PATH}/${slug}` : ANALYTICS_PATH);
