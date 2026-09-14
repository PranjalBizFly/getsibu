import type { PageContent } from "@/types/content";
import { AUTHORED_PAGES } from "@/content/pages/registry";

const byPage = new Map<number, PageContent>(AUTHORED_PAGES.map((content) => [content.page, content]));

/** Authored content for a PDF page, if it has been written. */
export const getAuthoredContent = (page: number) => byPage.get(page);
