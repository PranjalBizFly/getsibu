import { ArrowRight, BookOpen, CodeXml, LayoutGrid, SearchX, Search } from "lucide-react";
import Link from "next/link";
import { getIndexes, resolvePath } from "@/lib/content/inventory";
import type { CSSProperties } from "react";
import { ButtonLink } from "@/components/primitives/Button";
import { Badge, TypewriterHeading } from "@/components/primitives/SectionHeader";

const stagger = (i: number) => ({ "--i": i }) as CSSProperties;

/** Sky9's not-found page: a dark hero with a badge, the typed heading and two actions, then popular pages. */
export default function NotFound() {
  const popular = [
    { path: "/features", icon: LayoutGrid },
    { path: "/developers", icon: CodeXml },
    { path: "/resources", icon: BookOpen },
    { path: "/site-search", icon: Search },
  ]
    .map((p) => {
      const route = resolvePath(p.path);
      const index = getIndexes().find((i) => i.path === p.path);
      const title = route?.kind === "page" ? route.page.title : index?.title ?? (p.path === "/site-search" ? "Search GetSibu" : null);
      return title ? { ...p, title } : null;
    })
    .filter((p): p is NonNullable<typeof p> => p !== null);

  return (
    <>
      <title>Page not found | GetSibu</title>
      <section aria-labelledby="page-title" className="surface-inverse surface-hero relative isolate overflow-hidden bg-bg pt-32 pb-16 text-fg sm:pt-40 sm:pb-20">
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(50rem_26rem_at_50%_0%,rgb(102_100_194/0.3),transparent_60%)]" />
        <div className="container-content motion-enter flex flex-col items-center text-center">
          <span aria-hidden="true" className="mb-6" style={stagger(0)}>
            <span className="motion-float flex size-16 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-signal shadow-xl">
              <SearchX className="size-8" strokeWidth={1.75} />
            </span>
          </span>
          <span style={stagger(1)}>
            <Badge tone="onDark">404 error · page not found</Badge>
          </span>
          <div style={stagger(2)}>
            <TypewriterHeading as="h1" id="page-title" text="This page does not exist" caret className="type-h1 mt-5 max-w-[20ch] text-white" />
          </div>
          <p style={stagger(3)} className="type-body-lg mt-5 max-w-[52ch] text-fg-soft">The address may be mistyped, or the page may have moved. Search the site or start from one of the main sections.</p>
          <div style={stagger(4)} className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href="/" arrow>
              GetSibu home
            </ButtonLink>
            <ButtonLink href="/site-search" variant="glass">
              Search GetSibu
            </ButtonLink>
          </div>
        </div>
      </section>
      <section aria-labelledby="popular-title" className="section-dense">
        <div className="container-content">
          <h2 id="popular-title" data-reveal="header" className="type-h3 text-center text-fg">
            Popular pages
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {popular.map((p, i) => {
              const Icon = p.icon;
              return (
                <li key={p.path} data-reveal="" style={stagger(i)}>
                  <Link href={p.path} className="group flex items-center gap-3 rounded-xl border border-line-strong/70 bg-raised p-4 transition duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-md">
                    <span aria-hidden="true" className="flex size-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
                      <Icon className="size-4" strokeWidth={2} />
                    </span>
                    <span className="type-body-sm flex-1 font-bold text-fg group-hover:text-accent">{p.title}</span>
                    <ArrowRight aria-hidden="true" className="size-4 text-fg-muted transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
