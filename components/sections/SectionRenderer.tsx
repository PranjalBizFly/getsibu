import type { ContentSection, InventoryPage } from "@/types/content";
import { pageSummary, resolveActions } from "@/lib/content/links";
import { categoryById, sectionById } from "@/content/architecture/sections";
import { CATEGORY_ICON, iconForLabel, PAGE_TYPE_ICON, SECTION_ICON } from "@/components/primitives/icons";
import { getHeroImageForTopic, getSectionImage } from "@/lib/content/images";
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
import { PageHero, type HeroLayout } from "./PageHero";
import { RelatedPages } from "./RelatedPages";
import { SplitContentSection } from "./SplitContentSection";
import { StatementSection } from "./StatementSection";
import { ProcessSection, StorySection, TimelineSection } from "./StorySections";
import { WorkflowSection } from "./WorkflowSection";
import { sectionSurfaces } from "./rhythm";
import { OverviewSection, ScenarioSection, TopicAccordionSection, TopicTabsSection } from "./TopicSections";

/**
 * Renders sections in order — authored (content/pages) or composed (content/generated/page-sections.json).
 * The switch is exhaustive over ContentSection["kind"]: a new kind without a component is a type error.
 */
export function SectionRenderer({ sections, page, all }: { sections: ContentSection[]; page: InventoryPage; all?: ContentSection[] }) {
  // Band rhythm is decided over the whole page, so a template can render it in slices.
  const surfaces = sectionSurfaces(all ?? sections);
  const surfaceOf = (section: ContentSection) => surfaces.get(section.id);
  return sections.map((section) => {
    switch (section.kind) {
      case "hero": {
        const home = page.role === "home";
        const category = categoryById.get(page.category);
        const pageSection = sectionById.get(page.section);
        const icon = page.role === "leaf" ? (PAGE_TYPE_ICON[page.pageType] ?? iconForLabel(page.title)) : category ? CATEGORY_ICON[category.id] : SECTION_ICON[page.section];
        const chips = home || !category || !pageSection ? [] : [
          { label: category.label, icon: CATEGORY_ICON[category.id], href: page.path === category.hubPath ? undefined : category.hubPath },
          ...(pageSection.label !== category.label ? [{ label: pageSection.label, icon: SECTION_ICON[page.section] }] : []),
        ];
        const heroImage = getHeroImageForTopic(page.number);
        const layout: HeroLayout = page.role === "section-root" ? "bleed" : page.pageType === "resource" || page.pageType === "faq" ? "editorial" : "backdrop";
        return (
          <PageHero
            key={section.id}
            scale={home ? "display" : "page"}
            title={page.seo.h1}
            eyebrow={section.eyebrow}
            lede={section.lede}
            context={section.context ? { title: pageSummary(section.context.page).title, href: pageSummary(section.context.page).href } : null}
            diagram={section.diagram}
            visual={section.visual}
            image={heroImage}
            layout={layout}
            icon={home ? undefined : icon}
            chips={chips}
            points={section.points}
            actions={resolveActions(section.actions)}
            breadcrumb={home ? undefined : page.breadcrumb}
          />
        );
      }
      case "definition":
        return <DefinitionBlock key={section.id} {...section} surface={surfaceOf(section)} />;
      case "overview":
        return <OverviewSection key={section.id} {...section} surface={surfaceOf(section)} image={getSectionImage(page.number, "overview")} />;
      case "tabs":
        return <TopicTabsSection key={section.id} {...section} surface={surfaceOf(section)} />;
      case "accordion":
        return <TopicAccordionSection key={section.id} {...section} surface={surfaceOf(section)} />;
      case "scenario":
        return <ScenarioSection key={section.id} {...section} surface={surfaceOf(section)} image={getSectionImage(page.number, "scenario")} />;
      case "statement":
        return <StatementSection key={section.id} id={section.id} eyebrow={section.eyebrow} text={section.text} link={section.link} surface={surfaceOf(section)} />;
      case "editorial":
        return <EditorialSection key={section.id} {...section} surface={surfaceOf(section)} />;
      case "split":
        return <SplitContentSection key={section.id} {...section} surface={surfaceOf(section)} image={getSectionImage(page.number, "split")} />;
      case "story":
        return <StorySection key={section.id} {...section} surface={surfaceOf(section)} />;
      case "workflow":
        return <WorkflowSection key={section.id} {...section} surface={surfaceOf(section)} image={getSectionImage(page.number, "workflow")} />;
      case "process":
        return <ProcessSection key={section.id} {...section} surface={surfaceOf(section)} />;
      case "timeline":
        return <TimelineSection key={section.id} {...section} surface={surfaceOf(section)} />;
      case "capabilities":
        return <CapabilityBreakdown key={section.id} {...section} surface={surfaceOf(section)} image={getSectionImage(page.number, "capabilities")} />;
      case "category-explorer":
        return <CategoryExplorer key={section.id} {...section} surface={surfaceOf(section)} />;
      case "comparison":
        return <ComparisonTable key={section.id} {...section} surface={surfaceOf(section)} />;
      case "before-after":
        return <BeforeAfterSection key={section.id} {...section} surface={surfaceOf(section)} />;
      case "media":
        return <MediaContentSection key={section.id} {...section} surface={surfaceOf(section)} image={getSectionImage(page.number, "media")} />;
      case "alternating":
        return <AlternatingRows key={section.id} {...section} surface={surfaceOf(section)} />;
      case "layers":
        return <LayersSection key={section.id} {...section} surface={surfaceOf(section)} />;
      case "matrix":
        return <MatrixSection key={section.id} {...section} surface={surfaceOf(section)} />;
      case "plans":
        return <PlanComparison key={section.id} {...section} surface={surfaceOf(section)} />;
      case "checklist":
        return <ChecklistSection key={section.id} {...section} surface={surfaceOf(section)} />;
      case "event-list":
        return <EventListSection key={section.id} {...section} surface={surfaceOf(section)} />;
      case "faq":
        return <FaqSection key={section.id} {...section} surface={surfaceOf(section)} />;
      case "related":
        return <RelatedPages key={section.id} {...section} surface={surfaceOf(section)} />;
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
