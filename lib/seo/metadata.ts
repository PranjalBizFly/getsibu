import type { Metadata } from "next";
import type { SeoData } from "@/types/content";
import { IS_PRODUCTION, SITE_LOCALE, SITE_NAME, SOCIAL_IMAGE, absoluteUrl } from "@/lib/site";

/** Next.js metadata for any inventory page or index. Titles are absolute: the inventory owns them. */
export function buildMetadata(seo: SeoData): Metadata {
  const url = absoluteUrl(seo.canonicalPath);
  const image = { url: absoluteUrl(SOCIAL_IMAGE.path), width: SOCIAL_IMAGE.width, height: SOCIAL_IMAGE.height, alt: SOCIAL_IMAGE.alt };
  const indexable = IS_PRODUCTION && seo.robots === "index,follow";
  return {
    title: { absolute: seo.title },
    description: seo.description,
    alternates: { canonical: url },
    robots: indexable ? { index: true, follow: true } : { index: false, follow: true },
    openGraph: {
      type: "website",
      url,
      title: seo.title,
      description: seo.description,
      siteName: SITE_NAME,
      locale: SITE_LOCALE.replace("-", "_"),
      images: [image],
    },
    twitter: { card: "summary_large_image", title: seo.title, description: seo.description, images: [image] },
  };
}
