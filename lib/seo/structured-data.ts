/**
 * schema.org JSON-LD per page type.
 *
 * Rule: structured data never asserts more than the page may publish. FAQ answers and article
 * bodies are emitted only for pages whose source claims are publishable (`needsVerification`
 * false), so answer engines never receive a claim GetSibu has not confirmed.
 */
import type { BreadcrumbItem, InventoryIndexPage, InventoryPage } from "@/types/content";
import { SITE_LOCALE, SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/site";
import { getPages } from "@/lib/content/inventory";
import { getPageSections } from "@/lib/content/sections";
import { plainText } from "@/lib/content/rich-text";

type JsonLd = Record<string, unknown>;

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const organization = (): JsonLd => ({
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: SITE_NAME,
  url: SITE_URL,
  logo: { "@type": "ImageObject", url: absoluteUrl("/brand/getsibu-logo.png"), width: 1257, height: 459 },
});

const website = (): JsonLd => ({
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: SITE_LOCALE,
  publisher: { "@id": ORGANIZATION_ID },
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/site-search?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
});

const breadcrumbList = (items: BreadcrumbItem[]): JsonLd => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({ "@type": "ListItem", position: i + 1, name: item.label, item: absoluteUrl(item.path) })),
});

/** The answer an FAQ page shows: its definition block (short answer, then detail), as plain text. */
function visibleAnswer(page: InventoryPage): string | null {
  const definition = getPageSections(page.number).sections.find((section) => section.kind === "definition");
  if (!definition || definition.kind !== "definition") return null;
  return [plainText(definition.answer), definition.detail ? plainText(definition.detail) : ""].filter(Boolean).join(" ");
}

export function pageJsonLd(page: InventoryPage): JsonLd {
  const url = absoluteUrl(page.path);
  const graph: JsonLd[] = [];
  const webPage: JsonLd = {
    "@type": page.pageType === "faq" ? "FAQPage" : "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: page.seo.title,
    description: page.seo.description,
    inLanguage: SITE_LOCALE,
    isPartOf: { "@id": WEBSITE_ID },
  };

  if (page.role === "home") {
    graph.push(organization(), website());
  } else {
    webPage.breadcrumb = breadcrumbList(page.breadcrumb);
  }

  // FAQPage only when the page shows an answer, and the answer in the markup is exactly the visible one.
  if (page.pageType === "faq") {
    const answer = visibleAnswer(page);
    if (answer) webPage.mainEntity = { "@type": "Question", name: page.seo.h1, acceptedAnswer: { "@type": "Answer", text: answer } };
    else webPage["@type"] = "WebPage";
  }

  graph.push(webPage);

  if (page.pageType === "resource" && !page.needsVerification) {
    graph.push({
      "@type": "Article",
      headline: page.title,
      description: page.seo.description,
      mainEntityOfPage: { "@id": `${url}#webpage` },
      author: { "@id": ORGANIZATION_ID },
      publisher: { "@id": ORGANIZATION_ID },
      inLanguage: SITE_LOCALE,
      about: { "@type": "DefinedTerm", name: page.title.replace(/^What Is (a |an )?/, "").replace(/\?$/, "") },
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

/** Company pages outside the inventory (/about). Names the organisation; states nothing about it. */
export function companyPageJsonLd(page: { type: "AboutPage" | "WebPage"; path: string; title: string; h1: string; description: string }): JsonLd {
  const url = absoluteUrl(page.path);
  return {
    "@context": "https://schema.org",
    "@graph": [
      organization(),
      {
        "@type": page.type,
        "@id": `${url}#webpage`,
        url,
        name: page.title,
        description: page.description,
        inLanguage: SITE_LOCALE,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ORGANIZATION_ID },
        breadcrumb: breadcrumbList([
          { label: "Home", path: "/" },
          { label: page.h1, path: page.path },
        ]),
      },
    ],
  };
}

export function indexJsonLd(index: InventoryIndexPage): JsonLd {
  const url = absoluteUrl(index.path);
  const pages = getPages(index.groups.flatMap((g) => g.pages));
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#webpage`,
        url,
        name: index.seo.title,
        description: index.seo.description,
        inLanguage: SITE_LOCALE,
        isPartOf: { "@id": WEBSITE_ID },
        breadcrumb: breadcrumbList(index.breadcrumb),
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: pages.length,
          itemListElement: pages.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.title, url: absoluteUrl(p.path) })),
        },
      },
    ],
  };
}
