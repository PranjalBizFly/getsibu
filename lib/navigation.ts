/**
 * Serialisable navigation model for the header, drawer and footer.
 * Built on the server from content/architecture/navigation.ts; every internal href is checked
 * against the inventory so a broken navigation link fails the build.
 *
 * The model also carries what the Sky9-style panels show beside a link: an icon key and a one-line
 * description taken from the target page's publishable statement (null when not publishable).
 */
import { FOOTER_NAV, GLOBAL_CTAS, PRIMARY_NAV, type NavColumn, type NavItem, type NavLink } from "@/content/architecture/navigation";
import { resolvePath } from "@/lib/content/inventory";
import { DIRECTORY_PAGE, getDirectory } from "@/lib/content/directory";
import { SUPPORTING_PAGES } from "@/content/architecture/sections";

/** Built supporting pages (company pages, site search) are valid targets alongside the inventory. */
const SUPPORTING_ROUTES = new Set(SUPPORTING_PAGES.filter((s) => s.contentStatus === "generated" || s.contentStatus === "source-safe").map((s) => s.path));

export interface NavModelLink extends NavLink {
  /** "category:<id>", "section:<id>" or "label" — resolved to an icon on the client. */
  icon: string;
  description: string | null;
}

export interface NavModelColumn extends Omit<NavColumn, "links" | "hub"> {
  icon: string;
  hub: NavModelLink;
  links: NavModelLink[];
}

export interface NavModelItem extends Omit<NavItem, "columns"> {
  icon: string;
  columns?: NavModelColumn[];
}

export interface NavModel {
  items: NavModelItem[];
  ctas: { primary: { label: string; href: string }; signIn: { label: string; href: string } };
  contact: { label: string; href: string } | null;
  /** The page directory (/sitemap), offered from the search dialog with its page count. */
  directory: { label: string; href: string; count: number } | null;
}

function assertHref(href: string, label: string) {
  if (/^https?:/.test(href)) return;
  if (href === "/") return;
  if (!resolvePath(href) && !SUPPORTING_ROUTES.has(href)) throw new Error(`Navigation link "${label}" → ${href} is not an inventory route or built supporting page`);
}

/** Links marked onlyWhenLive are dropped here, on the server, while their page is held: they never reach the HTML or payload. */
const visible = (links: NavLink[]) => links.filter((link) => !link.onlyWhenLive || !!resolvePath(link.href));

function iconKey(href: string): string {
  const route = resolvePath(href);
  if (route?.kind === "page") return route.page.role === "leaf" ? "label" : `category:${route.page.category}`;
  if (route?.kind === "index") return route.index.category ? `category:${route.index.category}` : `section:${route.index.section}`;
  return "label";
}

function describe(href: string): string | null {
  const route = resolvePath(href);
  if (route?.kind === "page") return route.page.needsVerification ? null : route.page.keyStatement;
  if (route?.kind === "index") return route.index.lede;
  return null;
}

const modelLink = (link: NavLink): NavModelLink => {
  assertHref(link.href, link.label);
  return { ...link, icon: iconKey(link.href), description: describe(link.href) };
};

export function getNavModel(): NavModel {
  const items: NavModelItem[] = PRIMARY_NAV.map((item) => {
    assertHref(item.href, item.label);
    return {
      ...item,
      icon: iconKey(item.href),
      columns: item.columns?.map((column) => ({ ...column, icon: iconKey(column.hub.href), hub: modelLink(column.hub), links: visible(column.links).map(modelLink) })),
    };
  });
  const contact = SUPPORTING_ROUTES.has("/contact") ? { label: "Contact", href: "/contact" } : null;
  const directory = SUPPORTING_ROUTES.has(DIRECTORY_PAGE.path) ? { label: "Explore all pages", href: DIRECTORY_PAGE.path, count: getDirectory().total } : null;
  return {
    items,
    ctas: {
      primary: { label: GLOBAL_CTAS.primary.label, href: GLOBAL_CTAS.primary.href },
      signIn: { label: GLOBAL_CTAS.signIn.label, href: GLOBAL_CTAS.signIn.href },
    },
    contact,
    directory,
  };
}

export function getFooterNav() {
  const columns = FOOTER_NAV.map((column) => ({ ...column, links: visible(column.links) }));
  columns.forEach((column) => column.links.forEach((link) => assertHref(link.href, link.label)));
  return columns;
}
