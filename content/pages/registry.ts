/**
 * Registry of authored page content. Every file in content/pages must be imported here; the
 * validator fails if a content file exists that is not registered.
 */
import type { PageContent } from "../../types/content.ts";
import home from "./home.ts";

export const AUTHORED_PAGES: PageContent[] = [home];
