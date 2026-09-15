import { ArrowRight, CircleCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import type { BreadcrumbItem, DiagramId, VisualRef } from "@/types/content";
import type { ResolvedAction } from "@/lib/content/links";
import type { LucideIcon } from "@/components/primitives/icons";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { ButtonLink } from "@/components/primitives/Button";
import { Badge, TypewriterHeading } from "@/components/primitives/SectionHeader";
import { Diagram, diagramCaption } from "@/components/diagrams/Diagram";
import { CaptionChip, type TopicImageRef } from "./TopicImage";

export interface HeroChip {
  label: string;
  icon?: LucideIcon;
  href?: string;
}

/**
 * How an inner hero presents its photo:
 * - "backdrop" (topic pages): the Sky9 banner, with the photo filling the right of the band behind gradient overlays;
 * - "bleed" (section roots): the photo as a crisp panel running off the right edge beside the copy;
 * - "editorial" (resources and FAQs): the copy leads and the photo sits beside it in a framed card.
 * On phones every layout recomposes: the copy first, the photo rising out of the band beneath it.
 */
export type HeroLayout = "backdrop" | "bleed" | "editorial";

interface PageHeroProps {
  title: string;
  eyebrow?: string;
  lede?: string | null;
  /** When the lede is another page's statement: that page, linked under the lede. */
  context?: { title: string; href: string } | null;
  actions?: ResolvedAction[];
  breadcrumb?: BreadcrumbItem[];
  diagram?: DiagramId;
  visual?: VisualRef;
  image?: TopicImageRef | null;
  layout?: HeroLayout;
  aside?: ReactNode;
  icon?: LucideIcon;
  chips?: HeroChip[];
  /** Up to three short checked items under the actions (Sky9 home hero). */
  points?: string[];
  /** "display" for the homepage; "page" for every other page. */
  scale?: "display" | "page";
}

const stagger = (i: number) => ({ "--i": i }) as CSSProperties;

/**
 * The hero system (Sky9 PageHero). Inner pages open on a deep navy band under the fixed header with the
 * breadcrumb, icon tile and badge, the typed H1 with a caret, the lede, fact chips and actions, and the
 * page photo composed with the copy (see HeroLayout). The homepage uses the light split hero with the
 * photo in a window frame.
 */
export function PageHero(props: PageHeroProps) {
  if (props.scale === "display") return <HomeHero {...props} />;
  if (props.image && !props.aside) {
    return props.layout === "editorial" ? <EditorialHero {...props} image={props.image} /> : <PhotoHero {...props} image={props.image} bleed={props.layout === "bleed"} />;
  }
  return <InnerHero {...props} />;
}

function Points({ points, onDark }: { points: string[]; onDark: boolean }) {
  if (!points.length) return null;
  return (
    <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1">
      {points.slice(0, 3).map((point) => (
        <li key={point} className={`type-body-sm flex items-center gap-1.5 font-medium ${onDark ? "text-fg-soft" : "text-fg-muted"}`}>
          <CircleCheck aria-hidden="true" className="size-4 shrink-0 text-signal-strong" strokeWidth={2.25} />
          {point}
        </li>
      ))}
    </ul>
  );
}

function Actions({ actions, onDark }: { actions: ResolvedAction[]; onDark: boolean }) {
  if (!actions.length) return null;
  return (
    <div className="flex flex-wrap items-center gap-3 pt-1 sm:gap-4">
      {actions.map((action) => (
        <ButtonLink key={action.href} href={action.href} variant={action.emphasis === "primary" ? "primary" : onDark ? "glass" : "secondary"} arrow={action.emphasis === "primary"}>
          {action.label}
        </ButtonLink>
      ))}
    </div>
  );
}

/** The navy band's ground: soft brand glows and a faint grid. */
function HeroGround() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-20">
      <div className="absolute inset-0 bg-[radial-gradient(60rem_30rem_at_85%_20%,rgb(102_100_194/0.28),transparent_60%),radial-gradient(40rem_24rem_at_10%_110%,rgb(151_172_59/0.16),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:3rem_3rem] [mask-image:radial-gradient(ellipse_at_center,#000_40%,transparent_80%)]" />
    </div>
  );
}

/** The copy column shared by every inner hero: icon and badge, typed H1, lede, chips, actions. */
function HeroCopy({ title, eyebrow, lede, context, actions = [], icon: Icon, chips = [], points = [] }: PageHeroProps) {
  const shownChips = chips.filter((chip) => chip.label !== eyebrow);
  return (
    <div className="motion-enter flex flex-col items-start gap-4 sm:gap-5">
      {Icon || eyebrow ? (
        <div style={stagger(0)} className="flex flex-wrap items-center gap-3">
          {Icon ? (
            <span aria-hidden="true" className="flex size-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-signal shadow-lg backdrop-blur-md">
              <Icon className="size-5" strokeWidth={2} />
            </span>
          ) : null}
          {eyebrow ? <Badge tone="onDark">{eyebrow}</Badge> : null}
        </div>
      ) : null}
      <div style={stagger(1)}>
        <TypewriterHeading as="h1" id="page-title" text={title} caret className="type-h1 max-w-[22ch] text-white drop-shadow-[0_3px_12px_rgb(0_0_0/0.6)]" />
      </div>
      {lede ? (
        <p style={stagger(2)} className="type-body-lg max-w-2xl text-fg-soft sm:text-lg md:text-xl">
          {lede}
        </p>
      ) : null}
      {lede && context ? (
        <p style={stagger(2)} className="type-body-sm -mt-1 text-fg-muted">
          From{" "}
          <Link href={context.href} className="group inline-flex items-center gap-1 font-semibold text-signal-strong underline-offset-4 hover:underline">
            {context.title}
            <ArrowRight aria-hidden="true" className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </p>
      ) : null}
      {shownChips.length ? (
        <ul style={stagger(3)} className="flex flex-wrap gap-2.5 pt-1">
          {shownChips.map((chip) => {
            const ChipIcon = chip.icon;
            const inner = (
              <>
                {ChipIcon ? <ChipIcon aria-hidden="true" className="size-4 shrink-0 text-signal" strokeWidth={2} /> : null}
                {chip.label}
              </>
            );
            const cls = "type-body-sm flex items-center gap-2 rounded-lg border border-line-strong/80 bg-navy/80 px-3.5 py-1.5 text-fg-soft backdrop-blur-md";
            return (
              <li key={chip.label}>
                {chip.href ? (
                  <Link href={chip.href} className={`${cls} transition-colors hover:border-signal/60 hover:text-white`}>
                    {inner}
                  </Link>
                ) : (
                  <span className={cls}>{inner}</span>
                )}
              </li>
            );
          })}
        </ul>
      ) : null}
      <div style={stagger(4)} className="flex flex-col gap-4">
        <Actions actions={actions} onDark />
        <Points points={points} onDark />
      </div>
    </div>
  );
}

/**
 * Backdrop and bleed heroes. Desktop: the photo occupies the right of the band, either behind the
 * left-to-right and bottom-up overlays (backdrop) or as a crisp panel off the right edge (bleed). The
 * overlays stay near-opaque wherever copy sits, so text contrast never depends on the photo. Phones and
 * tablets: the copy sits on the solid band and the photo rises out of it below.
 */
function PhotoHero(props: PageHeroProps & { image: TopicImageRef; bleed: boolean }) {
  const { image, bleed, breadcrumb } = props;
  return (
    <section
      aria-labelledby="page-title"
      data-surface="hero"
      data-hero-layout={bleed ? "bleed" : "backdrop"}
      className="surface-inverse surface-hero relative isolate overflow-hidden bg-bg text-fg [--hero-media:min(64vw,22rem)] sm:[--hero-media:min(50vw,26rem)] lg:[--hero-media:0rem]"
    >
      <HeroGround />
      <figure
        className={`absolute inset-x-0 bottom-0 -z-10 h-(--hero-media) overflow-hidden lg:h-auto ${
          bleed
            ? "lg:top-[calc(var(--header-height)+2.5rem)] lg:right-0 lg:bottom-10 lg:left-[54%] lg:rounded-l-[2rem] lg:border lg:border-r-0 lg:border-white/15 lg:shadow-2xl lg:shadow-black/50"
            : "lg:top-(--header-height) lg:right-0 lg:bottom-0 lg:left-[38%] xl:left-[32%]"
        }`}
      >
        <div className="hero-settle absolute inset-0">
          <Image src={image.src} alt={image.alt} fill preload sizes={bleed ? "(min-width: 1024px) 46vw, 100vw" : "(min-width: 1280px) 68vw, (min-width: 1024px) 62vw, 100vw"} className="object-cover" />
        </div>
        <div aria-hidden="true" className="absolute inset-0 bg-linear-to-b from-navy-950 via-navy-950/35 via-40% to-navy-950/10 lg:hidden" />
        {bleed ? (
          <div aria-hidden="true" className="absolute inset-0 hidden bg-linear-to-r from-navy-950/45 to-transparent to-40% lg:block" />
        ) : (
          <>
            <div aria-hidden="true" className="absolute inset-0 hidden bg-linear-to-r from-navy-950 via-navy-950/90 via-40% to-navy-950/0 lg:block" />
            <div aria-hidden="true" className="absolute inset-0 hidden bg-linear-to-t from-navy-950 via-navy-950/0 via-35% lg:block" />
          </>
        )}
        <CaptionChip image={image} className={`absolute bottom-3 left-(--gutter) sm:bottom-4 ${bleed ? "lg:bottom-5 lg:left-5" : "lg:right-(--gutter) lg:bottom-6 lg:left-auto"}`} />
      </figure>

      <div className="container-content relative flex flex-col pt-24 pb-[calc(var(--hero-media)-1.5rem)] sm:pt-28 lg:min-h-[35rem] lg:justify-center lg:pt-32 lg:pb-20 xl:min-h-[37rem]">
        {breadcrumb ? <Breadcrumbs items={breadcrumb} className="mb-4 sm:mb-6" onDark /> : null}
        <div className={`max-w-3xl ${bleed ? "lg:max-w-[min(40rem,calc(54vw-var(--gutter)-3rem))]" : "lg:max-w-[min(46rem,calc(58vw-var(--gutter)))]"}`}>
          <HeroCopy {...props} />
        </div>
      </div>
    </section>
  );
}

/** Editorial hero (resources, FAQs): the copy leads; the photo sits beside it in a framed card. */
function EditorialHero(props: PageHeroProps & { image: TopicImageRef }) {
  const { image, breadcrumb } = props;
  return (
    <section aria-labelledby="page-title" data-surface="hero" data-hero-layout="editorial" className="surface-inverse surface-hero relative isolate overflow-hidden bg-bg pt-24 pb-12 text-fg sm:pt-28 sm:pb-14 md:pt-32 md:pb-16">
      <HeroGround />
      <div className="container-content relative">
        {breadcrumb ? <Breadcrumbs items={breadcrumb} className="mb-4 sm:mb-6" onDark /> : null}
        <div className="grid items-center gap-10 lg:grid-cols-12 xl:gap-14">
          <div className="lg:col-span-7">
            <HeroCopy {...props} />
          </div>
          <div className="relative lg:col-span-5">
            <div aria-hidden="true" className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-linear-to-br from-indigo/45 via-transparent to-olive/30 blur-2xl" />
            <figure className="motion-pop relative overflow-hidden rounded-3xl border border-white/15 bg-navy-950 shadow-2xl shadow-black/50">
              <div className="relative aspect-16/10 w-full lg:aspect-5/4">
                <div className="hero-settle absolute inset-0">
                  <Image src={image.src} alt={image.alt} fill preload sizes="(min-width: 1280px) 30rem, (min-width: 1024px) 40vw, 100vw" className="object-cover" />
                </div>
                <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-navy-950/70 to-transparent" />
              </div>
              <CaptionChip image={image} className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Inner hero without a photo: the copy, with an optional aside or diagram figure on the right. */
function InnerHero({ breadcrumb, diagram, visual, aside, ...props }: PageHeroProps) {
  const figure = visual ?? (diagram ? { diagram } : null);
  return (
    <section aria-labelledby="page-title" data-surface="hero" className="surface-inverse surface-hero relative isolate flex min-h-[26.25rem] items-center overflow-hidden bg-bg pt-24 pb-12 text-fg sm:min-h-[28.75rem] sm:pt-28 sm:pb-14 md:min-h-[31.25rem] md:pt-32 md:pb-16">
      <HeroGround />
      <div aria-hidden="true" className="absolute inset-y-0 left-0 -z-10 w-full bg-linear-to-r from-navy-950 via-navy-950/70 via-45% to-transparent" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-t from-navy-950 via-transparent via-60% to-navy-950/40" />

      <div className="container-content relative w-full">
        {breadcrumb ? <Breadcrumbs items={breadcrumb} className="mb-4 sm:mb-6" onDark /> : null}
        <div className={`grid items-center gap-10 ${aside || figure ? "lg:grid-cols-12 xl:gap-14" : ""}`}>
          <div className={`max-w-3xl ${aside || figure ? "lg:col-span-7" : ""}`}>
            <HeroCopy {...props} />
          </div>
          {aside ? (
            <div className="lg:col-span-5">{aside}</div>
          ) : figure ? (
            <figure className="motion-pop hidden lg:col-span-5 lg:block">
              <div className="motion-float">
                <div className="surface-paper rounded-2xl border border-white/15 bg-raised p-3 shadow-2xl shadow-black/40 ring-8 ring-white/5 xl:p-4">
                  <Diagram visual={figure} caption={false} animate={false} />
                </div>
              </div>
              <figcaption className="type-caption mt-3 text-right text-fg-muted">
                {diagramCaption(figure.diagram).note}: {diagramCaption(figure.diagram).text.charAt(0).toLowerCase() + diagramCaption(figure.diagram).text.slice(1)}
              </figcaption>
            </figure>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function HomeHero({ title, eyebrow, lede, actions = [], diagram, visual, image, points = [] }: PageHeroProps) {
  const figure = visual ?? (diagram ? { diagram } : null);
  const caption = figure ? diagramCaption(figure.diagram) : null;
  return (
    <section aria-labelledby="page-title" data-surface="hero" className="relative isolate overflow-hidden bg-bg pt-[calc(var(--header-height)+1.5rem)] pb-10 sm:pt-[calc(var(--header-height)+2.5rem)] sm:pb-14 lg:pb-16">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(50rem_28rem_at_80%_10%,rgb(102_100_194/0.12),transparent_60%),radial-gradient(36rem_22rem_at_0%_100%,rgb(151_172_59/0.12),transparent_60%)]" />
      <div className="container-content grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="motion-enter flex flex-col items-start gap-5 sm:gap-6 lg:col-span-6">
          {eyebrow ? (
            <div style={stagger(0)}>
              <Badge>{eyebrow}</Badge>
            </div>
          ) : null}
          <div style={stagger(1)}>
            <TypewriterHeading as="h1" id="page-title" text={title} className="type-display max-w-[16ch] text-fg" />
          </div>
          {lede ? (
            <p style={stagger(2)} className="type-body-lg max-w-[46ch] text-fg-soft">
              {lede}
            </p>
          ) : null}
          <div style={stagger(3)} className="flex flex-col gap-5">
            <Actions actions={actions} onDark={false} />
            <Points points={points} onDark={false} />
          </div>
        </div>
        {image ? (
          <div className="relative lg:col-span-6">
            <div aria-hidden="true" className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-linear-to-br from-indigo/20 via-transparent to-olive/25 blur-2xl" />
            <div className="motion-pop relative rounded-2xl border border-line-strong/80 bg-raised p-2.5 shadow-2xl shadow-indigo/15 sm:p-3.5">
              <div aria-hidden="true" className="mb-2.5 flex items-center gap-1.5 px-1">
                <span className="size-2.5 rounded-full bg-[#f87171]" />
                <span className="size-2.5 rounded-full bg-[#fbbf24]" />
                <span className="size-2.5 rounded-full bg-olive" />
              </div>
              <figure className="relative overflow-hidden rounded-xl bg-navy-950">
                <div className="relative aspect-16/10 w-full">
                  <div className="hero-settle absolute inset-0">
                    <Image src={image.src} alt={image.alt} fill preload sizes="(min-width: 1280px) 38rem, (min-width: 1024px) 50vw, 100vw" className="object-cover" />
                  </div>
                  <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-navy-950/70 to-transparent" />
                </div>
                <CaptionChip image={image} className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4" />
              </figure>
            </div>
          </div>
        ) : figure && caption ? (
          <div className="relative lg:col-span-6">
            <figure className="motion-pop relative">
              <div className="rounded-2xl border border-line-strong/80 bg-raised p-3 shadow-2xl shadow-indigo/15 sm:p-4">
                <div aria-hidden="true" className="mb-3 flex items-center gap-1.5 px-1">
                  <span className="size-2.5 rounded-full bg-[#f87171]" />
                  <span className="size-2.5 rounded-full bg-[#fbbf24]" />
                  <span className="size-2.5 rounded-full bg-olive" />
                </div>
                <Diagram visual={figure} caption={false} framed={false} />
              </div>
              <figcaption className="type-caption mt-3 text-fg-muted">
                {caption.note}: {caption.text.charAt(0).toLowerCase() + caption.text.slice(1)}
              </figcaption>
              <span aria-hidden="true" className="motion-float type-eyebrow absolute -top-3 right-4 inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-raised px-3 py-1.5 text-accent shadow-lg">
                <Sparkles className="size-3.5" strokeWidth={2.25} />
                {caption.note}
              </span>
            </figure>
          </div>
        ) : null}
      </div>
    </section>
  );
}
