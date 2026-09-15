import { ChevronRight, ListChecks } from "lucide-react";
import Link from "next/link";
import type { CSSProperties } from "react";
import { pageSummary } from "@/lib/content/links";
import { SectionHeader } from "@/components/primitives/SectionHeader";

interface HubGroupsProps {
  groups: Array<{ label: string; pages: number[] }>;
  id?: string;
  heading?: string;
  eyebrow?: string;
  intro?: string;
  surface?: "default" | "muted";
}

/**
 * Every page in a hub, grouped by topic cluster — Sky9's "Specific Topic Modules": a bordered panel per
 * group, its pages as rows with a chevron that travels on hover.
 */
export function HubGroups({ groups, id = "topics", heading, eyebrow = "All topics", intro, surface = "muted" }: HubGroupsProps) {
  const total = groups.reduce((sum, g) => sum + g.pages.length, 0);
  return (
    <section id={id} aria-labelledby={heading ? `${id}-title` : undefined} aria-label={heading ? undefined : "Pages in this section"} data-surface={surface} className={`${surface === "muted" ? "surface-muted bg-bg" : ""} section-open`}>
      <div className="container-content">
        {heading ? <SectionHeader id={`${id}-title`} eyebrow={eyebrow} heading={heading} intro={intro ?? `${total} topics, grouped by what they cover.`} /> : null}
        <div className="flex flex-col gap-5 sm:gap-6">
          {groups.map((group, g) => (
            <div key={group.label} data-reveal="" style={{ "--i": Math.min(g, 3) * 0.5 } as CSSProperties} className="rounded-2xl border border-line-strong/70 bg-raised p-5 shadow-sm sm:p-6">
              <h3 className="type-h4 flex flex-wrap items-center justify-between gap-3 text-fg sm:text-lg">
                <span className="flex items-center gap-2.5">
                  <span aria-hidden="true" className="flex size-8 items-center justify-center rounded-lg border border-accent/20 bg-accent-soft text-accent">
                    <ListChecks className="size-4" strokeWidth={2} />
                  </span>
                  {group.label}
                </span>
                <span className="type-eyebrow rounded-full border border-line bg-sunken px-2.5 py-1 text-fg-muted">{group.pages.length} {group.pages.length === 1 ? "topic" : "topics"}</span>
              </h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {group.pages.map(pageSummary).map((page) => (
                  <li key={page.number}>
                    <Link href={page.href} className="group flex h-full items-center justify-between gap-3 rounded-xl border border-line bg-sunken px-4 py-3 transition duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-accent-soft hover:shadow-md">
                      <span className="flex min-w-0 flex-col">
                        <span className="type-body-sm font-bold text-fg transition-colors group-hover:text-accent">{page.title}</span>
                        {page.statement ? <span className="type-caption line-clamp-1 text-fg-muted">{page.statement}</span> : null}
                      </span>
                      <ChevronRight aria-hidden="true" className="size-4 shrink-0 text-fg-muted transition-transform group-hover:translate-x-1 group-hover:text-accent" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
