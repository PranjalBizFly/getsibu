/**
 * The global search index as a static JSON file (/search-index.json), fetched by the search dialog
 * on first use so it never weighs on the initial page load.
 */
import index from "@/content/generated/search-index.json";

export const dynamic = "force-static";

export function GET() {
  return Response.json(index);
}
