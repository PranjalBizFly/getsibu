import type { ContentSection, InventoryPage } from "@/types/content";
import { pageSummary, resolveActions } from "@/lib/content/links";
import { BeforeAfterSection } from "./BeforeAfterSection";
import { CategoryExplorer } from "./CategoryExplorer";
import {
  AlternatingRows,
  CapabilityBreakdown,
  ChecklistSection,
  ComparisonTable,
  DefinitionBlock,
  EditorialSection,
  EventListSection,
  FaqSection,
  LayersSection,
  MatrixSection,
  MediaContentSection,
  PlanComparison,
} from "./ContentSections";
import { CTASection } from "./CTASection";
import { PageHero } from "./PageHero";
import { RelatedPages } from "./RelatedPages";
import { SplitContentSection } from "./SplitContentSection";
import { StatementSection } from "./StatementSection";
import { ProcessSection, StorySection, TimelineSection } from "./StorySections";
import { WorkflowSection } from "./WorkflowSection";

/**
 * Renders sections in order — authored (content/pages) or composed (content/generated/page-sections.json).
 * The switch is exhaustive over ContentSection["kind"]: a new kind without a component is a type error.
 */
export function SectionRenderer({ sections, page }: { sections: ContentSection[]; page: InventoryPage }) {
  return sections.map((section) => {
    switch (section.kind) {
      case "hero":
        return (
          <PageHero
            key={section.id}
            scale={page.role === "home" ? "display" : "page"}
            title={page.seo.h1}
            eyebrow={section.eyebrow}
            lede={section.lede}
            context={section.context ? { title: pageSummary(section.context.page).title, href: pageSummary(section.context.page).href } : null}
            diagram={section.diagram}
            visual={section.visual}
            actions={resolveActions(section.actions)}
            breadcrumb={page.role === "home" ? undefined : page.breadcrumb}
          />
        );
      case "definition":
        return <DefinitionBlock key={section.id} {...section} />;
      case "statement":
        return <StatementSection key={section.id} id={section.id} eyebrow={section.eyebrow} text={section.text} link={section.link} surface={section.surface} />;
      case "editorial":
        return <EditorialSection key={section.id} {...section} />;
      case "split":
        return <SplitContentSection key={section.id} {...section} />;
      case "story":
        return <StorySection key={section.id} {...section} />;
      case "workflow":
        return <WorkflowSection key={section.id} {...section} />;
      case "process":
        return <ProcessSection key={section.id} {...section} />;
      case "timeline":
        return <TimelineSection key={section.id} {...section} />;
      case "capabilities":
        return <CapabilityBreakdown key={section.id} {...section} />;
      case "category-explorer":
        return <CategoryExplorer key={section.id} {...section} />;
      case "comparison":
        return <ComparisonTable key={section.id} {...section} />;
      case "before-after":
        return <BeforeAfterSection key={section.id} {...section} />;
      case "media":
        return <MediaContentSection key={section.id} {...section} />;
      case "alternating":
        return <AlternatingRows key={section.id} {...section} />;
      case "layers":
        return <LayersSection key={section.id} {...section} />;
      case "matrix":
        return <MatrixSection key={section.id} {...section} />;
      case "plans":
        return <PlanComparison key={section.id} {...section} />;
      case "checklist":
        return <ChecklistSection key={section.id} {...section} />;
      case "event-list":
        return <EventListSection key={section.id} {...section} />;
      case "faq":
        return <FaqSection key={section.id} {...section} />;
      case "related":
        return <RelatedPages key={section.id} {...section} />;
      case "cta": {
        const conversion = section.conversionPage ? pageSummary(section.conversionPage) : null;
        return (
          <CTASection
            key={section.id}
            id={section.id}
            eyebrow={section.eyebrow}
            heading={section.heading}
            headingHref={conversion && section.conversionPage !== page.number ? conversion.href : null}
            body={section.body ?? conversion?.statement}
            actions={resolveActions(section.actions)}
            surface={section.surface}
          />
        );
      }
      default: {
        const unhandled: never = section;
        throw new Error(`Unknown section ${JSON.stringify(unhandled)}`);
      }
    }
  });
}
