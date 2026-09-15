/**
 * Authored topic sections (content/pages/**): overview, tabs, accordion and scenario — rendered in
 * the Sky9 patterns they correspond to (course overview with a sticky summary card, filter tabs,
 * curriculum accordion, a worked example).
 */
import { ArrowRight, CircleCheck, Lightbulb, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { ActionRef, PageLinkRef, RichText as RichTextValue, TopicIcon, VisualRef } from "@/types/content";
import { pageSummary, resolveActions } from "@/lib/content/links";
import { Badge, SectionHeader, TypewriterHeading } from "@/components/primitives/SectionHeader";
import { ButtonLink } from "@/components/primitives/Button";
import { IconTile } from "@/components/primitives/Card";
import { Diagram } from "@/components/diagrams/Diagram";
import { Accordion } from "./Accordion";
import { RichText } from "./RichText";
import { Section, type Surface } from "./Section";
import { TabsIsland } from "./TabsIsland";
import { CaptionChip, FramedImage, type TopicImageRef } from "./TopicImage";
import { TOPIC_ICON } from "./topic-icons";

interface Base {
  id: string;
  eyebrow?: string;
  intro?: string;
  surface?: Surface;
  density?: "open" | "dense";
}

const reveal = (i: number) => ({ "--i": i }) as CSSProperties;

function Paragraphs({ body, className = "" }: { body: RichTextValue[]; className?: string }) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {body.map((paragraph, i) => (
        <p key={i}>
          <RichText value={paragraph} />
        </p>
      ))}
    </div>
  );
}

/* Overview — Sky9 "Course / Module Overview" with the sticky summary card ------------------------- */

export function OverviewSection({
  id,
  eyebrow,
  intro,
  heading,
  body,
  keyPoints,
  highlight,
  glance,
  image,
  surface,
}: Base & {
  heading: string;
  body: RichTextValue[];
  keyPoints: { heading: string; items: string[] };
  highlight?: { heading: string; body: RichTextValue; tags?: string[] };
  glance?: { heading: string; facts: Array<{ label: string; value: string; page?: number }>; actions?: ActionRef[] };
  image?: TopicImageRef | null;
}) {
  const actions = resolveActions(glance?.actions);
  const split = Boolean(glance || image);
  return (
    <Section id={id} surface={surface} labelledBy={`${id}-title`}>
      {/* Sky9 intro split. Phones: copy, photo, key points, summary. Desktop: copy and key points on the
          left; the photo with the summary card overlapping its foot on the right. */}
      <div className={`container-content grid items-start gap-8 ${split ? "lg:grid-cols-12 lg:gap-12" : ""}`}>
        <div className={split ? "contents lg:col-span-7 lg:flex lg:min-w-0 lg:flex-col lg:gap-8" : "mx-auto flex min-w-0 max-w-4xl flex-col gap-6 sm:gap-8"}>
          <div data-reveal className="order-1 flex min-w-0 flex-col items-start gap-4">
            {eyebrow ? <Badge>{eyebrow}</Badge> : null}
            <TypewriterHeading id={`${id}-title`} text={heading} className="type-h2-sm text-fg" />
            {intro ? <p className="type-body-lg font-semibold text-accent">{intro}</p> : null}
          </div>
          <div data-reveal className={`order-3 min-w-0 ${split ? (image ? "lg:-mt-4" : "-mt-4") : "-mt-2 sm:-mt-4"}`}>
            <Paragraphs body={body} className="type-body-lg text-fg-soft" />
          </div>

          <div data-reveal style={reveal(1)} className="order-4 min-w-0 rounded-2xl border border-line-strong/80 bg-raised p-5 shadow-sm sm:p-6">
            <h3 className="type-h4 flex items-center gap-2 text-fg">
              <CircleCheck aria-hidden="true" className="size-5 text-signal-strong" strokeWidth={2} />
              {keyPoints.heading}
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {keyPoints.items.map((item, i) => (
                <li key={item} data-reveal="" style={reveal(Math.min(i, 5) * 0.5)} className={`flex items-start gap-3 rounded-xl border border-line bg-sunken p-3.5 transition duration-300 hover:border-accent/40 hover:bg-accent-soft ${i === keyPoints.items.length - 1 && keyPoints.items.length % 2 ? "sm:col-span-2" : ""}`}>
                  <CircleCheck aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-signal-strong" strokeWidth={2.25} />
                  <span className="type-body-sm font-semibold text-fg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {highlight ? (
            <div data-reveal style={reveal(2)} className="spotlight relative order-5 min-w-0 overflow-hidden rounded-2xl border border-accent/20 bg-linear-to-br from-accent-soft via-raised to-raised p-5 sm:p-7">
              <span className="border-beam" aria-hidden="true" />
              <div className="flex items-start gap-4">
                <span aria-hidden="true" className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-fg shadow-glow">
                  <Lightbulb className="size-5" strokeWidth={2} />
                </span>
                <div className="min-w-0">
                  <h3 className="type-h3 text-fg">{highlight.heading}</h3>
                  <p className="type-body mt-2 text-fg-soft">
                    <RichText value={highlight.body} />
                  </p>
                  {highlight.tags?.length ? (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {highlight.tags.map((tag) => (
                        <li key={tag} className="type-caption rounded-full border border-line-strong bg-raised px-3 py-1 font-semibold text-fg-soft">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            </div>
          ) : null}
        </div>

        {split ? (
          <div className="contents lg:col-span-5 lg:block lg:self-stretch">
            <div className="contents sticky-tall lg:flex lg:flex-col">
              {image ? <FramedImage image={image} sizes="(min-width: 1280px) 30rem, (min-width: 1024px) 40vw, 100vw" captionAt={glance ? "top" : "bottom"} className="order-2 min-w-0" /> : null}
              {glance ? (
          <aside aria-labelledby={`${id}-glance`} className={`order-6 min-w-0 ${image ? "relative z-10 lg:mx-5 lg:-mt-16" : ""}`}>
            <div data-reveal="scale" className="relative overflow-hidden rounded-2xl border-2 border-accent/40 bg-raised p-6 shadow-xl shadow-accent/10">
              <span className="border-beam" aria-hidden="true" />
              <p className="type-eyebrow text-signal-strong">At a glance</p>
              <h3 id={`${id}-glance`} className="type-h3 mt-1.5 text-fg">
                {glance.heading}
              </h3>
              <dl className="mt-5 flex flex-col divide-y divide-line border-y border-line">
                {glance.facts.map((fact) => (
                  <div key={fact.label} className={fact.value.length > 26 ? "flex flex-col gap-0.5 py-3" : "flex items-baseline justify-between gap-4 py-3"}>
                    <dt className="type-body-sm text-fg-muted">{fact.label}</dt>
                    <dd className={`type-body-sm font-semibold text-fg ${fact.value.length > 26 ? "" : "text-right"}`}>
                      {fact.page ? (
                        <Link href={pageSummary(fact.page).href} className="underline decoration-line-strong underline-offset-4 hover:text-accent hover:decoration-accent">
                          {fact.value}
                        </Link>
                      ) : (
                        fact.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
              {actions.length ? (
                <div className="mt-6 flex flex-col gap-2.5">
                  {actions.map((action) => (
                    <ButtonLink key={action.href} href={action.href} variant={action.emphasis === "primary" ? "primary" : "secondary"} arrow={action.emphasis === "primary"} className="h-auto w-full py-3 text-center whitespace-normal sm:whitespace-normal!">
                      {action.label}
                    </ButtonLink>
                  ))}
                </div>
              ) : null}
            </div>
          </aside>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    </Section>
  );
}

/* Tabs — Sky9 filter pills over panels ------------------------------------------------------------- */

export function TopicTabsSection({
  id,
  eyebrow,
  heading,
  intro,
  tabs,
  surface,
}: Base & {
  heading: string;
  tabs: Array<{ label: string; heading: string; body: RichTextValue[]; points?: string[]; icon?: TopicIcon; visual?: VisualRef; link?: PageLinkRef }>;
}) {
  return (
    <Section id={id} surface={surface} labelledBy={`${id}-title`}>
      <div className="container-content">
        <SectionHeader id={`${id}-title`} eyebrow={eyebrow} heading={heading} intro={intro} />
        <div data-reveal>
          <TabsIsland
            label={heading}
            tabs={tabs.map((tab, i) => {
              const Icon = tab.icon ? TOPIC_ICON[tab.icon] : null;
              const target = tab.link ? pageSummary(tab.link.page) : null;
              return {
                key: `${tab.label}-${i}`,
                label: tab.label,
                icon: Icon ? <Icon aria-hidden="true" className="size-4" strokeWidth={2} /> : undefined,
                panel: (
                  <div className={`grid items-center gap-8 rounded-3xl border border-line-strong/70 bg-raised p-6 shadow-lg sm:p-8 ${tab.visual ? "lg:grid-cols-12 lg:gap-12" : ""}`}>
                    <div className={`flex min-w-0 flex-col items-start ${tab.visual ? "lg:col-span-6" : ""}`}>
                      {Icon ? <IconTile icon={Icon} size="sm" /> : null}
                      <h3 className="type-h2-sm mt-4 text-fg">{tab.heading}</h3>
                      <Paragraphs body={tab.body} className="type-body mt-3 text-fg-soft" />
                      {tab.points?.length ? (
                        <ul className="mt-5 grid w-full gap-2.5 sm:grid-cols-2">
                          {tab.points.map((point) => (
                            <li key={point} className="type-body-sm flex items-start gap-2.5 font-medium text-fg">
                              <CircleCheck aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-signal-strong" strokeWidth={2.25} />
                              {point}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                      {target ? (
                        <Link href={target.href} className="group type-body-sm mt-6 inline-flex items-center gap-1.5 font-semibold text-accent">
                          {tab.link?.label ?? target.title}
                          <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      ) : null}
                    </div>
                    {tab.visual ? (
                      <div className="min-w-0 lg:col-span-6">
                        <Diagram visual={tab.visual} animate={false} />
                      </div>
                    ) : null}
                  </div>
                ),
              };
            })}
          />
        </div>
      </div>
    </Section>
  );
}

/* Accordion — Sky9 curriculum ---------------------------------------------------------------------- */

export function TopicAccordionSection({
  id,
  eyebrow,
  heading,
  intro,
  items,
  surface,
}: Base & {
  heading: string;
  items: Array<{ heading: string; summary: string; body: RichTextValue[]; points?: string[]; icon?: TopicIcon; page?: number }>;
}) {
  return (
    <Section id={id} surface={surface} labelledBy={`${id}-title`}>
      <div className="container-content">
        <SectionHeader id={`${id}-title`} eyebrow={eyebrow} heading={heading} intro={intro} />
        <div className="mx-auto max-w-4xl">
          <Accordion
            initiallyOpen={0}
            items={items.map((item, i) => {
              const Icon = item.icon ? TOPIC_ICON[item.icon] : null;
              const target = item.page ? pageSummary(item.page) : null;
              return {
                key: `${item.heading}-${i}`,
                number: String(i + 1).padStart(2, "0"),
                title: item.heading,
                summary: item.summary,
                icon: Icon ? (
                  <span aria-hidden="true" className="hidden size-8 shrink-0 items-center justify-center rounded-lg border border-accent/20 bg-accent-soft text-accent sm:flex">
                    <Icon className="size-4" strokeWidth={2} />
                  </span>
                ) : undefined,
                body: (
                  <>
                    <Paragraphs body={item.body} />
                    {item.points?.length ? (
                      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                        {item.points.map((point) => (
                          <li key={point} className="flex items-start gap-2.5 font-medium text-fg">
                            <CircleCheck aria-hidden="true" className="mt-1 size-4 shrink-0 text-signal-strong" strokeWidth={2.25} />
                            {point}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {target ? (
                      <Link href={target.href} className="group mt-4 inline-flex items-center gap-1.5 font-semibold text-accent">
                        {target.title}
                        <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    ) : null}
                  </>
                ),
              };
            })}
          />
        </div>
      </div>
    </Section>
  );
}

/* Scenario — a worked example: situation, steps, outcome ------------------------------------------- */

export function ScenarioSection({
  id,
  eyebrow,
  heading,
  intro,
  team,
  situation,
  steps,
  outcome,
  link,
  image,
  surface,
}: Base & { heading: string; team: string; situation: RichTextValue; steps: Array<{ heading: string; body: RichTextValue }>; outcome: RichTextValue; link?: PageLinkRef; image?: TopicImageRef | null }) {
  const target = link ? pageSummary(link.page) : null;
  return (
    <Section id={id} surface={surface ?? "muted"} labelledBy={`${id}-title`}>
      <div className="container-content">
        <SectionHeader id={`${id}-title`} eyebrow={eyebrow ?? "In practice"} heading={heading} intro={intro} />
        <div className="mx-auto grid max-w-6xl items-stretch gap-6 lg:grid-cols-12">
          <div data-reveal className="relative flex flex-col overflow-hidden rounded-3xl bg-linear-to-br from-indigo-950 via-indigo-900 to-indigo p-6 text-white shadow-2xl sm:p-8 lg:col-span-5">
            <span aria-hidden="true" className="motion-float-slow absolute -top-12 -right-12 size-44 rounded-full bg-olive/25 blur-2xl" />
            {image ? (
              // Sky9 featured-programme panel: the photo leads the card and fades into it.
              <figure className="group/img relative -mx-6 -mt-6 mb-6 overflow-hidden sm:-mx-8 sm:-mt-8 sm:mb-7">
                <div className="relative aspect-16/10 w-full">
                  <div className="reveal-zoom absolute inset-0">
                    <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 30rem, 100vw" className="object-cover transition-transform duration-700 ease-out group-hover/img:scale-105" />
                  </div>
                  <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-indigo-950 via-indigo-950/10 via-45% to-indigo-950/25" />
                </div>
                <CaptionChip image={image} className="absolute bottom-3 left-4 sm:left-6" />
              </figure>
            ) : null}
            <span className="relative type-eyebrow inline-flex max-w-full items-center gap-2 self-start rounded-full border border-white/25 bg-white/10 px-3 py-1 text-white">
              <Users aria-hidden="true" className="size-3.5" />
              {team}
            </span>
            <h3 className="type-h3 mt-5 text-white">The situation</h3>
            <p className="type-body mt-2 text-indigo-100">
              <RichText value={situation} />
            </p>
            <div className="mt-auto pt-8">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                <p className="type-eyebrow text-olive-300">The outcome</p>
                <p className="type-body mt-2 text-white">
                  <RichText value={outcome} />
                </p>
              </div>
              {target ? (
                <Link href={target.href} className="group type-body-sm mt-5 inline-flex items-center gap-1.5 font-semibold text-olive-300">
                  {link?.label ?? target.title}
                  <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              ) : null}
            </div>
          </div>
          <ol className="relative flex flex-col gap-4 lg:col-span-7">
            {steps.map((step, i) => (
              <li key={step.heading} data-reveal="left" style={reveal(i)} className="spotlight group relative flex gap-4 rounded-2xl border border-line-strong/80 bg-raised p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg sm:p-6">
                <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent font-mono text-sm font-bold text-accent-fg shadow-glow transition-transform duration-300 group-hover:scale-110">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="type-h4 text-fg transition-colors group-hover:text-accent">{step.heading}</h3>
                  <p className="type-body-sm mt-1.5 text-fg-soft">
                    <RichText value={step.body} />
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
