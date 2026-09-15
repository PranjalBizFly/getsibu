import { ArrowRight, CircleCheck, Layers, ListChecks } from "lucide-react";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { CategoryId, InventoryIndexPage } from "@/types/content";
import { categoryById, CATEGORIES, sectionById } from "@/content/architecture/sections";
import { CATEGORY_CONVERSION, clusterById } from "@/content/architecture/clusters";
import { CATEGORY_VISUAL } from "@/content/architecture/visuals";
import { getIndexes, getPage } from "@/lib/content/inventory";
import { pageSummary, resolveActions } from "@/lib/content/links";
import { CATEGORY_ICON, SECTION_ICON } from "@/components/primitives/icons";
import { CARD, IconTile } from "@/components/primitives/Card";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { PageHero } from "@/components/sections/PageHero";
import { CapabilityBreakdown } from "@/components/sections/ContentSections";
import { CTASection } from "@/components/sections/CTASection";
import { Section } from "@/components/sections/Section";
import { CapabilityStrip } from "./CapabilityStrip";
import { HubGroups } from "./HubGroups";

/**
 * Generated hubs in Sky9's patterns.
 *   Category hubs (/features/ai, /storage…) — the course page: hero with facts, the areas strip,
 *   "start here" topic cards, every topic grouped as modules, related areas, the CTA band.
 *   Multi-category indexes (/features) — the courses hub: hero, one course-style card per category,
 *   the CTA band.
 */
export function HubTemplate({ index }: { index: InventoryIndexPage }) {
  const section = sectionById.get(index.section)!;
  const total = index.groups.reduce((sum, g) => sum + g.pages.length, 0);
  const primary = resolveActions([{ kind: "global", cta: "primary" }]);
  const conversionNumber = CATEGORY_CONVERSION[index.category ?? ""] ?? null;
  const conversion = conversionNumber ? getPage(conversionNumber) : null;
  const icon = index.category ? CATEGORY_ICON[index.category] : SECTION_ICON[index.section];
  const visual = index.category ? CATEGORY_VISUAL[index.category] : undefined;
  const indexCategories = index.category ? [] : CATEGORIES.filter((c) => c.section === index.section);

  const chips = [
    { label: `${total} topics`, icon: ListChecks },
    { label: `${index.category ? index.groups.length : indexCategories.length} ${index.category ? "topic groups" : "areas"}`, icon: Layers },
  ];

  return (
    <>
      <PageHero
        breadcrumb={index.breadcrumb}
        eyebrow={index.path === section.basePath && !index.category ? `${section.label} overview` : section.label}
        title={index.h1}
        lede={index.lede}
        visual={visual}
        icon={icon}
        chips={chips}
        actions={[...primary, { label: "Browse all topics", href: `${index.path}#topics`, external: false, emphasis: "secondary" }]}
      />

      {index.category ? <CategoryHubBody index={index} /> : <SectionIndexBody index={index} categories={indexCategories.map((c) => c.id)} />}

      <CTASection
        id="cta"
        heading={conversion ? conversion.title : "Start Your Creative Library"}
        headingHref={conversion?.path ?? null}
        body={conversion && !conversion.needsVerification ? conversion.sourceText : null}
        actions={primary}
      />
    </>
  );
}

function CategoryHubBody({ index }: { index: InventoryIndexPage }) {
  const category = categoryById.get(index.category!)!;
  // Start here: the pillar page of each grouped cluster, when its statement is publishable.
  const pillars = index.groups
    .map((g) => (g.clusterId ? clusterById.get(g.clusterId)!.primary : null))
    .filter((n): n is number => n !== null && !getPage(n).needsVerification && getPage(n).status === "canonical" && getPage(n).publication !== "held")
    .filter((n, i, all) => all.indexOf(n) === i)
    .slice(0, 6);
  const siblings = CATEGORIES.filter((c) => c.section === category.section && c.id !== category.id);
  const related = siblings.length ? siblings : CATEGORIES.filter((c) => c.id !== category.id && !["home", "conversion"].includes(c.id)).slice(0, 6);

  return (
    <>
      <CapabilityStrip groups={index.groups} />
      {pillars.length >= 3 ? (
        <CapabilityBreakdown
          id="start-here"
          eyebrow="Start here"
          heading={`Key topics in ${index.title}`}
          intro="The page that anchors each group — a good first read before the details."
          items={pillars.map((n) => ({ heading: getPage(n).title, body: getPage(n).keyStatement, page: n }))}
        />
      ) : null}
      <HubGroups groups={index.groups} heading={`All topics in ${index.title}`} />
      <Section id="related-areas" density="dense" label="Related areas">
        <div className="container-content text-center">
          <h2 data-reveal="" className="type-h3 text-fg sm:text-2xl">
            Explore related areas
          </h2>
          <ul data-reveal="" className="mt-5 flex flex-wrap justify-center gap-2.5">
            {related.map((c) => {
              const Icon = CATEGORY_ICON[c.id];
              return (
                <li key={c.id}>
                  <Link href={c.hubPath} className="type-body-sm inline-flex items-center gap-2 rounded-xl border border-line-strong bg-raised px-4 py-2.5 font-semibold text-fg shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent">
                    <Icon aria-hidden="true" className="size-4 text-accent" strokeWidth={2} />
                    {c.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Section>
    </>
  );
}

function SectionIndexBody({ index, categories }: { index: InventoryIndexPage; categories: CategoryId[] }) {
  const hubs = getIndexes();
  return (
    <Section id="topics" surface="muted" labelledBy="topics-title">
      <div className="container-content">
        <SectionHeader id="topics-title" eyebrow="Key areas" heading={`${sectionById.get(index.section)!.label} by area`} intro="Choose an area to see every topic it covers." />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((id, i) => {
            const category = categoryById.get(id)!;
            const hub = hubs.find((h) => h.category === id);
            const group = index.groups.find((g) => g.label === category.label || g.label === category.shortLabel);
            const pages = (group?.pages ?? hub?.groups.flatMap((g) => g.pages) ?? []).filter((n) => !getPage(n).needsVerification).slice(0, 4);
            const count = hub?.groups.reduce((sum, g) => sum + g.pages.length, 0) ?? group?.pages.length ?? 0;
            return (
              <li key={id} data-reveal="" style={{ "--i": i } as CSSProperties}>
                <div className={CARD}>
                  <div className="flex items-start justify-between gap-3">
                    <IconTile icon={CATEGORY_ICON[id]} size="sm" />
                    <span aria-hidden="true" className="flex size-8 items-center justify-center rounded-full border border-line text-fg-muted transition duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-fg">
                      <ArrowRight className="size-4" strokeWidth={2.25} />
                    </span>
                  </div>
                  <h3 className="type-h3 mt-5 text-fg transition-colors group-hover:text-accent">{category.label}</h3>
                  {hub ? <p className="type-body-sm mt-2 line-clamp-3 text-fg-soft">{hub.lede}</p> : null}
                  <p className="type-body-sm mt-4 flex items-center justify-between border-y border-line py-3">
                    <span className="flex items-center gap-2 text-fg-muted">
                      <ListChecks aria-hidden="true" className="size-4" />
                      Topics
                    </span>
                    <span className="font-bold text-fg">{count}</span>
                  </p>
                  {pages.length ? (
                    <>
                      <p className="type-eyebrow mt-4 text-fg-muted">Key topics</p>
                      <ul className="mt-2.5 flex flex-col gap-2">
                        {pages.map((n) => {
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
                    </>
                  ) : null}
                  <Link href={category.hubPath} className="btn-shimmer group/button type-button relative z-20 mt-auto flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-accent-fg shadow-glow transition duration-300 hover:-translate-y-0.5 hover:bg-accent-hover">
                    {`Explore ${category.label}`}
                    <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover/button:translate-x-1" />
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
