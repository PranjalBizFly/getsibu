import type { MetadataRoute } from "next";
import { allPaths, inventoryGeneratedAt, resolvePath } from "@/lib/content/inventory";
import { absoluteUrl } from "@/lib/site";
import { ABOUT_PAGE, CONTACT_PAGE } from "@/content/architecture/company-pages";
import { SUPPORTING_PAGES } from "@/content/architecture/sections";

/**
 * Every live canonical page and hub, plus indexable company and generated utility pages (the /sitemap
 * directory). Merged duplicates, held pages, redirects and noindex pages are excluded by construction;
 * scripts/verify-build.ts checks the output.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(inventoryGeneratedAt());
  const company = [ABOUT_PAGE, CONTACT_PAGE].filter((page) => page.indexable).map((page) => page.path);
  const utility = SUPPORTING_PAGES.filter((page) => page.contentStatus === "generated" && page.indexable).map((page) => page.path);
  return [
    ...allPaths().filter((path) => {
      const route = resolvePath(path)!;
      return route.kind === "index" ? route.index.seo.sitemap : route.page.seo.sitemap;
    }),
    ...company,
    ...utility,
  ]
    .sort()
    .map((path) => ({ url: absoluteUrl(path), lastModified }));
}
