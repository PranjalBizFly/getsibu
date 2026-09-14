import type { CategoryId, DiagramId } from "@/types/content";
import { categoryById } from "@/content/architecture/sections";
import { countCanonicalPages } from "@/lib/content/inventory";
import { pageSummary } from "@/lib/content/links";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { Diagram } from "@/components/diagrams/Diagram";
import { ExplorerTabs, type ExplorerTab } from "./ExplorerTabs";
import { Section, type Surface } from "./Section";

interface CategoryExplorerProps {
  id: string;
  eyebrow?: string;
  heading: string;
  intro?: string;
  categories: Array<{ category: CategoryId; summary: string; pages: number[]; diagram: DiagramId }>;
  surface?: Surface;
}

/**
 * The interactive capability explorer: one tab per category, each with its summary, key pages, a
 * link to the category hub and a diagram. All panels are server-rendered, so every link is in the
 * HTML; the client island only switches which panel is visible.
 */
export function CategoryExplorer({ id, eyebrow, heading, intro, categories, surface }: CategoryExplorerProps) {
  const tabs: ExplorerTab[] = categories.map((entry) => {
    const category = categoryById.get(entry.category)!;
    return {
      id: entry.category,
      label: category.label,
      shortLabel: category.shortLabel,
      pageCount: countCanonicalPages(entry.category),
      summary: entry.summary,
      hub: { href: category.hubPath, label: `Explore ${category.label.toLowerCase()}` },
      links: entry.pages.map((n) => {
        const page = pageSummary(n);
        return { href: page.href, title: page.title };
      }),
      visual: <Diagram id={entry.diagram} animate={false} />,
    };
  });

  return (
    <Section id={id} surface={surface} labelledBy={`${id}-title`}>
      <div className="container-wide">
        <SectionHeader id={`${id}-title`} eyebrow={eyebrow} heading={heading} intro={intro} />
        <ExplorerTabs tabs={tabs} label={heading} />
      </div>
    </Section>
  );
}
