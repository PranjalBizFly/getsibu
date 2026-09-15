import { ArrowRight, CircleCheck, Layers, ListChecks } from "lucide-react";
import Link from "next/link";
import type { CategoryId, DiagramId } from "@/types/content";
import { categoryById, sectionById } from "@/content/architecture/sections";
import { countCanonicalPages } from "@/lib/content/inventory";
import { pageSummary } from "@/lib/content/links";
import { CATEGORY_ICON } from "@/components/primitives/icons";
import { CARD, IconTile } from "@/components/primitives/Card";
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
 * Sky9's course explorer: filter pills over course-style cards — icon tile and arrow, title, summary,
 * facts (topics, section), key topics with checks and a full-width action. Every card and figure is
 * server-rendered; the client island only filters.
 */
export function CategoryExplorer({ id, eyebrow, heading, intro, categories, surface }: CategoryExplorerProps) {
  const tabs: ExplorerTab[] = categories.map((entry) => {
    const category = categoryById.get(entry.category)!;
    const section = sectionById.get(category.section)!;
    const count = countCanonicalPages(entry.category);
    return {
      id: entry.category,
      label: category.shortLabel,
      card: (
        <div className={CARD}>
          <div className="flex items-start justify-between gap-3">
            <IconTile icon={CATEGORY_ICON[entry.category]} size="sm" />
            <span aria-hidden="true" className="flex size-8 items-center justify-center rounded-full border border-line text-fg-muted transition duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-fg">
              <ArrowRight className="size-4" strokeWidth={2.25} />
            </span>
          </div>
          <h3 className="type-h3 mt-5 text-fg transition-colors group-hover:text-accent">{category.label}</h3>
          <p className="type-body-sm mt-2 line-clamp-3 text-fg-soft">{entry.summary}</p>
          <dl className="type-body-sm mt-5 flex flex-col gap-2 border-y border-line py-4">
            <div className="flex items-center justify-between gap-3">
              <dt className="flex items-center gap-2 text-fg-muted">
                <ListChecks aria-hidden="true" className="size-4" />
                Topics
              </dt>
              <dd className="font-bold text-fg">{count}</dd>
            </div>
            <div className="flex items-center justify-between gap-3">
              <dt className="flex items-center gap-2 text-fg-muted">
                <Layers aria-hidden="true" className="size-4" />
                Section
              </dt>
              <dd className="font-bold text-fg">{section.label}</dd>
            </div>
          </dl>
          <p className="type-eyebrow mt-4 text-fg-muted">Key topics</p>
          <ul className="mt-2.5 flex flex-col gap-2">
            {entry.pages.map((n) => {
              const page = pageSummary(n);
              return (
                <li key={n} className="relative z-20">
                  <Link href={page.href} className="type-body-sm flex items-start gap-2 font-medium text-fg-soft transition-colors hover:text-accent">
                    <CircleCheck aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-signal-strong" strokeWidth={2.25} />
                    {page.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href={category.hubPath}
            className="btn-shimmer group/button type-button relative z-20 mt-6 flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-accent-fg shadow-glow transition duration-300 hover:-translate-y-0.5 hover:bg-accent-hover"
          >
            {`Explore ${category.label}`}
            <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover/button:translate-x-1" />
          </Link>
        </div>
      ),
      visual: (
        <div className="rounded-2xl border border-line-strong/70 bg-raised p-3 shadow-xl sm:p-5">
          <Diagram id={entry.diagram} animate={false} />
        </div>
      ),
    };
  });

  return (
    <Section id={id} surface={surface} labelledBy={`${id}-title`}>
      <div className="container-content">
        <SectionHeader id={`${id}-title`} eyebrow={eyebrow} heading={heading} intro={intro} />
        <div data-reveal="">
          <ExplorerTabs tabs={tabs} label={heading} />
        </div>
      </div>
    </Section>
  );
}
