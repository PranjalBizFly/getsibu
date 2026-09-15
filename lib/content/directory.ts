/**
 * The page directory behind /sitemap and the search dialog's "Explore all pages" link: every live
 * route, grouped by category in site order. Server-only (it reads the inventory).
 *
 * Entries carry titles and links only, never statements, so framed pages can be listed; held pages
 * have no route in the inventory reader and are absent by construction.
 */
import { ABOUT_PAGE, CONTACT_PAGE } from "@/content/architecture/company-pages";
import { CATEGORIES, SUPPORTING_PAGES } from "@/content/architecture/sections";
import { allPaths, resolvePath } from "@/lib/content/inventory";
import type { InventoryIndexPage, InventoryPage } from "@/types/content";

export interface DirectoryEntry {
  label: string;
  href: string;
  /** Lower-case words the directory filter matches against: title, group and URL segments. */
  keywords: string;
}

export interface DirectoryGroup {
  id: string;
  heading: string;
  /** The group's hub, linked from its heading; null for the "Main" group. */
  href: string | null;
  entries: DirectoryEntry[];
}

export interface Directory {
  groups: DirectoryGroup[];
  total: number;
}

export const DIRECTORY_PAGE = SUPPORTING_PAGES.find((page) => page.path === "/sitemap")!;

const keywords = (...parts: string[]) =>
  parts
    .join(" ")
    .toLowerCase()
    .replace(/[-/&]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

function buildDirectory(): Directory {
  const routes = allPaths().map((path) => resolvePath(path)!);
  const pages = routes.flatMap((route) => (route.kind === "page" ? [route.page] : []));
  const indexes = routes.flatMap((route) => (route.kind === "index" ? [route.index] : []));

  const main: DirectoryGroup = { id: "main", heading: "Main", href: null, entries: [] };
  const groups = new Map<string, DirectoryGroup>(
    CATEGORIES.filter((category) => category.id !== "home").map((category) => [
      category.id,
      { id: category.id, heading: category.label, href: resolvePath(category.hubPath) ? category.hubPath : null, entries: [] },
    ]),
  );
  const add = (group: DirectoryGroup, label: string, href: string) => group.entries.push({ label, href, keywords: keywords(label, group.heading, href) });

  // Main: the homepage, section indexes without a category, the company pages and this directory.
  const home = pages.find((page) => page.role === "home");
  if (home) add(main, "Home", home.path);
  for (const index of indexes.filter((i) => !i.category)) add(main, index.title, index.path);
  for (const company of [ABOUT_PAGE, CONTACT_PAGE]) add(main, company.title, company.path);
  add(main, DIRECTORY_PAGE.title, DIRECTORY_PAGE.path);

  // Each category: its generated hub, then its section root, then its pages in PDF order.
  const categoryIndexes = indexes.filter((i): i is InventoryIndexPage & { category: string } => !!i.category);
  for (const index of categoryIndexes) add(groups.get(index.category)!, index.title, index.path);
  const order = (page: InventoryPage) => (page.role === "section-root" ? 0 : 1);
  for (const page of pages.filter((p) => p.role !== "home").sort((a, b) => order(a) - order(b) || a.number - b.number)) {
    add(groups.get(page.category)!, page.title, page.path);
  }

  const list = [main, ...groups.values()].filter((group) => group.entries.length > 0);
  return { groups: list, total: list.reduce((sum, group) => sum + group.entries.length, 0) };
}

let cached: Directory | null = null;

export function getDirectory(): Directory {
  cached ??= buildDirectory();
  return cached;
}
