import Link from "next/link";
import { pageSummary } from "@/lib/content/links";
import { Icon } from "@/components/primitives/Icon";

interface HubGroupsProps {
  groups: Array<{ label: string; pages: number[] }>;
  id?: string;
  heading?: string;
}

/** Every page in a hub, grouped by topic cluster. Titles always; statements when publishable. */
export function HubGroups({ groups, id = "pages", heading }: HubGroupsProps) {
  const total = groups.reduce((sum, g) => sum + g.pages.length, 0);
  return (
    <section id={id} aria-label={heading ?? "Pages in this section"} data-surface="default" className="section-dense">
      <div className="container-content">
        {heading ? (
          <div className="mb-10 flex items-baseline justify-between gap-6 border-b border-line pb-5">
            <h2 className="type-h2 text-fg">{heading}</h2>
            <p className="type-eyebrow shrink-0 text-fg-muted">{total} pages</p>
          </div>
        ) : null}
        <div className="flex flex-col gap-14">
          {groups.map((group) => (
            <div key={group.label} className="grid gap-5 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-3">
                <h3 className="type-h4 text-fg lg:sticky lg:top-28">
                  {group.label}
                  <span className="type-eyebrow mt-2 block text-fg-muted">{group.pages.length} pages</span>
                </h3>
              </div>
              <ul className="grid border-t border-line sm:grid-cols-2 sm:gap-x-10 lg:col-span-9">
                {group.pages.map(pageSummary).map((page) => (
                  <li key={page.number} className="border-b border-line">
                    <Link href={page.href} className="group flex h-full items-start justify-between gap-4 py-4">
                      <span className="flex flex-col gap-1">
                        <span className="type-body font-medium text-fg transition-colors group-hover:text-accent">{page.title}</span>
                        {page.statement ? <span className="type-body-sm line-clamp-2 text-fg-muted">{page.statement}</span> : null}
                      </span>
                      <Icon name="arrowRight" size={17} className="mt-1 shrink-0 text-fg-muted transition-transform group-hover:translate-x-0.5 group-hover:text-accent" />
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
