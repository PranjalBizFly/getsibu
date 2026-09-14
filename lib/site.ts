/**
 * Site-wide constants. Environment variables:
 *   NEXT_PUBLIC_SITE_URL  canonical origin (default https://getsibu.com)
 *   SITE_ENV              "production" enables indexing; anything else sends noindex + Disallow: /
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://getsibu.com").replace(/\/$/, "");
export const SITE_NAME = "GetSibu";
/** The PDF and the official site both use British English spelling. */
export const SITE_LOCALE = "en-GB";
export const IS_PRODUCTION = process.env.SITE_ENV === "production";

export const absoluteUrl = (path: string) => `${SITE_URL}${path === "/" ? "" : path}`;

/** Site-wide social image (public/og/getsibu.png): the official logo and verified positioning line. */
export const SOCIAL_IMAGE = { path: "/og/getsibu.png", width: 1200, height: 630, alt: "GetSibu — The operating system for your creative library" };
