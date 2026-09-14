/**
 * Read access to the generated inventory. Server-only: the JSON is large and never shipped to
 * the client. Every route, SEO field and relationship comes from here — pages never hardcode them.
 */
import inventoryJson from "@/content/generated/inventory.json";
import type { Inventory, InventoryIndexPage, InventoryPage } from "@/types/content";

const inventory = inventoryJson as unknown as Inventory;

export type ResolvedRoute = { kind: "page"; page: InventoryPage } | { kind: "index"; index: InventoryIndexPage };

const pageByNumber = new Map(inventory.pages.map((p) => [p.number, p]));
const routes = new Map<string, ResolvedRoute>();
// Held pages (a title stating an unconfirmed claim) have no route: next.config redirects their URL.
for (const page of inventory.pages) {
  if (page.status === "canonical" && page.publication !== "held") routes.set(page.path, { kind: "page", page });
}
for (const index of inventory.indexes) routes.set(index.path, { kind: "index", index });

export const resolvePath = (path: string) => routes.get(path);

export const allPaths = () => [...routes.keys()];

export function getPage(number: number): InventoryPage {
  const page = pageByNumber.get(number);
  if (!page) throw new Error(`No PDF page ${number} in the inventory`);
  // Merged duplicates resolve to their canonical page.
  return page.mergedInto ? getPage(page.mergedInto) : page;
}

export const getPages = (numbers: number[]) => numbers.map(getPage);

/** Inventory entries exactly as stored, without resolving merged duplicates. */
export const getRawPages = (numbers: number[]) => numbers.map((n) => pageByNumber.get(n)!);

export const inventoryGeneratedAt = () => inventory.generatedAt;

/** Number of canonical pages in a category (merged duplicates excluded). */
export const countCanonicalPages = (category: string) => inventory.pages.filter((p) => p.status === "canonical" && p.publication !== "held" && p.category === category).length;

/** True when a page is published or framed — the only pages anything may link to. */
export const isLivePage = (number: number) => {
  const page = getPage(number);
  return page.status === "canonical" && page.publication !== "held";
};

export const getIndexes = () => inventory.indexes;
