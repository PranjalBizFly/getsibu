/**
 * Recorded exceptions to "the PDF title is the H1".
 *
 * Each override keeps the PDF title as the SEO <title> and changes only the visible H1, with the
 * source that justifies it. Keep this list to pages where a verified official statement communicates
 * the page's purpose better than a document heading does.
 */
import type { SourceRef } from "../../types/content.ts";

export const H1_OVERRIDES: Record<number, { h1: string; source: SourceRef; reason: string }> = {
  1: {
    h1: "The operating system for your creative library",
    source: { kind: "site", url: "https://getsibu.com/", retrieved: "2026-09-14" },
    reason:
      "Official homepage H1 and GetSibu's verified positioning (matches PDF p.2). The PDF title " +
      "\"GetSibu — Creative Asset Management Platform\" stays the <title> and appears as the hero eyebrow. " +
      "/platform keeps its PDF H1 \"The Operating System for Creative Libraries\" and goes deeper on the idea.",
  },
};
