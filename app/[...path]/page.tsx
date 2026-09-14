/**
 * One route for every inventory page and index hub.
 *
 * Paths come only from content/generated/inventory.json; `dynamicParams = false` makes any other
 * path a 404 at build time, so the site can never serve an unplanned URL. Pages render their
 * authored sections or, failing that, the sections composed from their recipe.
 */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allPaths, resolvePath } from "@/lib/content/inventory";
import { buildMetadata } from "@/lib/seo/metadata";
import { indexJsonLd, pageJsonLd } from "@/lib/seo/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";
import { HubTemplate } from "@/components/templates/HubTemplate";
import { PageTemplate } from "@/components/templates/PageTemplate";

type Props = { params: Promise<{ path: string[] }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return allPaths()
    .filter((path) => path !== "/")
    .map((path) => ({ path: path.slice(1).split("/") }));
}

const routeFor = async (params: Props["params"]) => resolvePath(`/${(await params).path.join("/")}`);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const route = await routeFor(params);
  if (!route) return {};
  return buildMetadata(route.kind === "page" ? route.page.seo : route.index.seo);
}

export default async function InventoryRoute({ params }: Props) {
  const route = await routeFor(params);
  if (!route) notFound();

  if (route.kind === "index") {
    return (
      <>
        <JsonLd data={indexJsonLd(route.index)} />
        <HubTemplate index={route.index} />
      </>
    );
  }

  return (
    <>
      <JsonLd data={pageJsonLd(route.page)} />
      <PageTemplate page={route.page} />
    </>
  );
}
