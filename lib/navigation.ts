/**
 * Serialisable navigation model for the header, drawer and footer.
 * Built on the server from content/architecture/navigation.ts; every internal href is checked
 * against the inventory so a broken navigation link fails the build.
 */
import { FOOTER_NAV, GLOBAL_CTAS, PRIMARY_NAV, type NavItem, type NavLink } from "@/content/architecture/navigation";
import { resolvePath } from "@/lib/content/inventory";
import { SUPPORTING_PAGES } from "@/content/architecture/sections";

/** Built supporting pages (company pages, site search) are valid targets alongside the inventory. */
const SUPPORTING_ROUTES = new Set(SUPPORTING_PAGES.filter((s) => s.contentStatus === "generated" || s.contentStatus === "source-safe").map((s) => s.path));

export interface NavModel {
  items: NavItem[];
  ctas: { primary: { label: string; href: string }; signIn: { label: string; href: string } };
}

function assertHref(href: string, label: string) {
  if (/^https?:/.test(href)) return;
  if (!resolvePath(href) && !SUPPORTING_ROUTES.has(href)) throw new Error(`Navigation link "${label}" → ${href} is not an inventory route or built supporting page`);
}

/** Links marked onlyWhenLive are dropped here, on the server, while their page is held: they never reach the HTML or payload. */
const visible = (links: NavLink[]) => links.filter((link) => !link.onlyWhenLive || !!resolvePath(link.href));

export function getNavModel(): NavModel {
  const items = PRIMARY_NAV.map((item) => ({ ...item, columns: item.columns?.map((column) => ({ ...column, links: visible(column.links) })) }));
  for (const item of items) {
    assertHref(item.href, item.label);
    for (const column of item.columns ?? []) {
      assertHref(column.hub.href, column.hub.label);
      column.links.forEach((link) => assertHref(link.href, link.label));
    }
  }
  return {
    items,
    ctas: {
      primary: { label: GLOBAL_CTAS.primary.label, href: GLOBAL_CTAS.primary.href },
      signIn: { label: GLOBAL_CTAS.signIn.label, href: GLOBAL_CTAS.signIn.href },
    },
  };
}

export function getFooterNav() {
  const columns = FOOTER_NAV.map((column) => ({ ...column, links: visible(column.links) }));
  columns.forEach((column) => column.links.forEach((link) => assertHref(link.href, link.label)));
  return columns;
}
