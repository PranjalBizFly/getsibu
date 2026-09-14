/**
 * Page links for components. Components refer to pages by PDF number; this resolves the URL, the
 * display title and — only when the page's claims are publishable — its key statement.
 */
import type { ActionRef } from "@/types/content";
import { categoryById, sectionById } from "@/content/architecture/sections";
import { GLOBAL_CTAS } from "@/content/architecture/navigation";
import { getPage, resolvePath } from "@/lib/content/inventory";

export interface PageSummary {
  number: number;
  title: string;
  /** Title without the "GetSibu for" prefix used by use-case pages. */
  shortTitle: string;
  href: string;
  /** First PDF sentence, or null when it contains a claim that is not publishable yet. */
  statement: string | null;
  sectionLabel: string;
  categoryLabel: string;
}

export function pageSummary(number: number): PageSummary {
  const page = getPage(number);
  return {
    number: page.number,
    title: page.title,
    shortTitle: page.title.replace(/^GetSibu for /, ""),
    href: page.path,
    statement: page.needsVerification ? null : page.keyStatement,
    sectionLabel: sectionById.get(page.section)!.label,
    categoryLabel: categoryById.get(page.category)!.label,
  };
}

export interface ResolvedAction {
  label: string;
  href: string;
  external: boolean;
  emphasis: "primary" | "secondary";
}

/** Resolves hero/CTA actions. A global CTA whose channel is not confirmed ("Book a demo") is dropped. */
export function resolveActions(actions: ActionRef[] = []): ResolvedAction[] {
  return actions.flatMap((action, i): ResolvedAction[] => {
    const emphasis = i === 0 ? "primary" : "secondary";
    if (action.kind === "page") {
      const page = pageSummary(action.page);
      return [{ label: action.label ?? page.title, href: page.href, external: false, emphasis }];
    }
    if (action.kind === "route") {
      if (!resolvePath(action.path)) throw new Error(`Action "${action.label}" → ${action.path} is not an inventory route`);
      return [{ label: action.label, href: action.path, external: false, emphasis }];
    }
    const cta = GLOBAL_CTAS[action.cta];
    if (cta.channelConfirmed === false) return [];
    const internal = cta.href.startsWith("/");
    if (internal && !resolvePath(cta.href)) return [];
    return [{ label: cta.label, href: cta.href, external: !internal, emphasis }];
  });
}
