/**
 * Section kinds in Sky9's patterns: definition, editorial, capabilities, comparison, media,
 * alternating, layers, matrix, plans, checklist, event list and FAQ.
 */
import { ArrowRight, CircleCheck, CircleHelp, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";
import type { RichText as RichTextValue, TopicIcon, VisualRef } from "@/types/content";
import { pageSummary } from "@/lib/content/links";
import { iconForLabel } from "@/components/primitives/icons";
import { Badge, SectionHeader, TypewriterHeading } from "@/components/primitives/SectionHeader";
import { ArrowLink } from "@/components/primitives/Button";
import { CARD, IconTile } from "@/components/primitives/Card";
import { Diagram, diagramCaption } from "@/components/diagrams/Diagram";
import { Accordion } from "./Accordion";
import { CurrentBadge, ItemTitle, MatrixCell } from "./items";
import { RichText } from "./RichText";
import { Section, type Surface } from "./Section";
import { FramedImage, type TopicImageRef } from "./TopicImage";
import { TOPIC_ICON } from "./topic-icons";

interface Base {
  id: string;
  eyebrow?: string;
  intro?: string;
  surface?: Surface;
  density?: "open" | "dense";
}

const reveal = (i: number) => ({ "--i": i }) as CSSProperties;

/* Definition — the direct answer first (AEO), in Sky9's overview panel -------------------------- */

export function DefinitionBlock({ id, eyebrow = "Definition", term, answer, detail, surface }: Base & { term: string; answer: RichTextValue; detail?: RichTextValue }) {
  return (
    <Section id={id} surface={surface} label={`${eyebrow}: ${term}`}>
      <div className="container-content">
        <div data-reveal className="spotlight relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-line-strong/80 bg-raised p-6 shadow-lg sm:p-10">
          <span className="border-beam" aria-hidden="true" />
          <div className="flex flex-col gap-5 sm:flex-row sm:gap-8">
            <span aria-hidden="true" className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-accent text-accent-fg shadow-glow">
              <Quote className="size-6" strokeWidth={2} />
            </span>
            <div className="min-w-0">
              <Badge>{eyebrow}</Badge>
              <p className="type-statement mt-4 text-fg">
                <RichText value={answer} />
              </p>
              {detail ? (
                <p className="type-body-lg mt-5 text-fg-soft">
                  <RichText value={detail} />
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* Editorial — Sky9's "In context" split: header left, bordered stack of entries right ---------- */

type EditorialParagraph = string | { lead: string; text: string; page?: number; current?: boolean };

export function EditorialSection({ id, eyebrow, heading, intro, body, surface }: Base & { heading: string; body: EditorialParagraph[] }) {
  return (
    <Section id={id} surface={surface} labelledBy={`${id}-title`}>
      <div className="container-content grid gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <SectionHeader id={`${id}-title`} eyebrow={eyebrow} heading={heading} intro={intro} align="start" size="sm" className="lg:sticky lg:top-28" />
        </div>
        <div className="flex flex-col gap-4 lg:col-span-8">
          {body.map((paragraph, i) =>
            typeof paragraph === "string" ? (
              <p key={i} data-reveal="" style={reveal(i)} className="type-body-lg rounded-2xl border border-line bg-raised p-6 text-fg-soft">
                {paragraph}
              </p>
            ) : (
              <div key={i} data-reveal="" style={reveal(i)} className="spotlight group relative flex gap-4 rounded-2xl border border-line-strong/70 bg-raised p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg sm:p-6">
                <IconTile icon={iconForLabel(paragraph.lead, i)} size="sm" />
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <ItemTitle page={paragraph.page} current={paragraph.current} className="type-h4 text-fg sm:text-lg">
                      {paragraph.lead}
                    </ItemTitle>
                    {paragraph.current ? <CurrentBadge /> : null}
                  </div>
                  <p className="type-body-sm mt-1.5 text-fg-soft sm:type-body">{paragraph.text}</p>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </Section>
  );
}

/* Capabilities — Sky9 feature cards (icon tile, title, body, optional bullets) --------------------- */

export function CapabilityBreakdown({
  id,
  eyebrow,
  heading,
  intro,
  items,
  image,
  surface,
  density,
}: Base & { heading: string; items: Array<{ heading: string; body: string; page?: number; icon?: TopicIcon; points?: string[]; current?: boolean }>; image?: TopicImageRef | null }) {
  // Sky9 keeps rows full: counts that leave an orphan row centre the last row instead (flex wrap).
  const perRow = items.length === 4 ? 4 : items.length === 2 ? 2 : 3;
  const orphan = items.length % perRow !== 0;
  const width = perRow === 4 ? "lg:w-[calc(25%-1.5rem)]" : perRow === 2 ? "lg:w-[calc(50%-1rem)]" : "lg:w-[calc(33.333%-1.334rem)]";
  return (
    <Section id={id} surface={surface} density={density} labelledBy={`${id}-title`}>
      <div className="container-content">
        {image ? (
          // Feature visual: the header beside the section photo, then the cards it introduces.
          <div className="mb-8 grid items-center gap-8 sm:mb-10 lg:mb-14 lg:grid-cols-12 lg:gap-12">
            <SectionHeader id={`${id}-title`} eyebrow={eyebrow} heading={heading} intro={intro} align="start" className="mb-0! lg:col-span-5" />
            <FramedImage image={image} sizes="(min-width: 1280px) 46rem, (min-width: 1024px) 56vw, 100vw" aspect="aspect-16/10 lg:aspect-21/9" className="lg:col-span-7" />
          </div>
        ) : (
          <SectionHeader id={`${id}-title`} eyebrow={eyebrow} heading={heading} intro={intro} />
        )}
        <ul className={orphan ? "flex flex-wrap justify-center gap-5 sm:gap-6 lg:gap-8" : `grid gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-8 ${perRow === 4 ? "lg:grid-cols-4" : perRow === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3"}`}>
          {items.map((item, i) => {
            const Icon = item.icon ? TOPIC_ICON[item.icon] : iconForLabel(item.heading, i);
            const target = item.page && !item.current ? pageSummary(item.page) : null;
            const namedByHeading = target !== null && target.title.toLowerCase() === item.heading.toLowerCase();
            const stretched = "after:absolute after:inset-0 after:z-10 after:rounded-2xl after:content-['']";
            return (
              <li key={item.heading} data-reveal="" style={reveal(i % 3)} className={orphan ? `w-full sm:w-[calc(50%-0.75rem)] ${width}` : ""}>
                <div className={CARD}>
                  <IconTile icon={Icon} className="mb-6" />
                  <h3 className="type-h3 text-fg transition-colors group-hover:text-accent">
                    {target && namedByHeading ? (
                      <Link href={target.href} className={stretched}>
                        {item.heading}
                      </Link>
                    ) : (
                      item.heading
                    )}
                  </h3>
                  <p className="type-body-sm mt-3 text-fg-soft">{item.body}</p>
                  {item.points?.length ? (
                    <ul className="mt-5 flex flex-col gap-2 border-t border-line pt-4">
                      {item.points.map((point) => (
                        <li key={point} className="type-body-sm flex items-start gap-2.5 font-medium text-fg">
                          <CircleCheck aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-signal-strong" strokeWidth={2.25} />
                          {point}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {target && namedByHeading ? (
                    <span aria-hidden="true" className="type-body-sm mt-auto inline-flex items-center gap-1.5 pt-5 font-semibold text-accent">
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  ) : target ? (
                    <Link href={target.href} className={`type-body-sm mt-auto inline-flex items-center gap-1.5 self-start pt-5 font-semibold text-accent ${stretched}`}>
                      {target.title}
                      <ArrowRight aria-hidden="true" className="size-4 shrink-0 transition-transform group-hover:translate-x-1" />
                    </Link>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}

/* Comparison — Sky9 "side-by-side comparison" table ------------------------------------------------ */

export function ComparisonTable({
  id,
  eyebrow,
  heading,
  intro,
  columns,
  rows,
  emphasis = 1,
  surface,
  density,
}: Base & { heading: string; columns: [string, string]; rows: Array<[string, string, string]>; emphasis?: 0 | 1 }) {
  return (
    <Section id={id} surface={surface} density={density} labelledBy={`${id}-title`}>
      <div className="container-content">
        <SectionHeader id={`${id}-title`} eyebrow={eyebrow ?? "Compared"} heading={heading} intro={intro} />
        <div data-reveal className="mx-auto max-w-5xl overflow-x-auto rounded-2xl border border-line-strong/80 bg-raised shadow-lg">
          <table className="w-full min-w-[20rem] border-collapse text-left">
            <caption className="sr-only">{heading}</caption>
            <thead>
              <tr className="border-b border-line bg-sunken">
                <td className="w-2/5 p-4 md:p-5" />
                {columns.map((column, i) => (
                  <th key={column} scope="col" className={`type-eyebrow p-4 align-bottom md:p-5 ${i === emphasis ? "bg-accent text-accent-fg" : "text-fg-muted"}`}>
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, a, b]) => (
                <tr key={label} className="border-b border-line transition-colors last:border-b-0 hover:bg-accent-soft/60">
                  <th scope="row" className="type-body-sm p-4 font-semibold text-fg md:p-5">
                    {label}
                  </th>
                  {[a, b].map((value, i) => (
                    <td key={i} className={`type-body-sm p-4 md:p-5 ${i === emphasis ? "bg-accent-soft/50" : ""}`}>
                      <MatrixCell value={value} emphasise={i === emphasis} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
}

/* Media — a framed figure with its caption as the heading (Sky9 "learning by doing" frame) -------- */

export function MediaContentSection({ id, eyebrow, intro, visual, surface, image }: Base & { visual?: VisualRef; image?: { src: string; alt: string; caption?: string } | null }) {
  if (!visual && !image) return null;
  const note = image ? "Illustration" : diagramCaption(visual!.diagram).note;
  const text = image ? (image.caption ?? image.alt) : diagramCaption(visual!.diagram).text;
  return (
    <Section id={id} surface={surface} labelledBy={`${id}-title`}>
      <div className="container-content">
        <div data-reveal="scale" className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-line-strong/70 bg-linear-to-br from-indigo-50 via-raised to-olive-100/40 p-4 shadow-xl sm:p-6">
          <div className="grid items-center gap-6 lg:grid-cols-12 lg:gap-10">
            <div className="flex flex-col items-start gap-3 p-2 lg:col-span-4">
              {eyebrow ? <Badge>{eyebrow}</Badge> : null}
              <h2 id={`${id}-title`} className="type-h3 text-fg">
                {text}
              </h2>
              {intro ? <p className="type-body-sm text-fg-soft">{intro}</p> : null}
              <p className="type-caption text-fg-muted">{note}.</p>
            </div>
            <div className="rounded-2xl border border-line bg-raised p-2.5 sm:p-3.5 lg:col-span-8">
              {image ? (
                <div className="relative aspect-16/9 w-full overflow-hidden rounded-xl bg-navy-950">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              ) : (
                <Diagram visual={visual!} animate={false} caption={false} framed={false} />
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* Alternating — Sky9 "featured program" rows: text beside a framed figure, sides alternating ------- */

export function AlternatingRows({ id, eyebrow, heading, intro, rows, surface }: Base & { heading: string; rows: Array<{ heading: string; body: string; visual?: VisualRef; page?: number; current?: boolean }> }) {
  return (
    <Section id={id} surface={surface} labelledBy={`${id}-title`}>
      <div className="container-content">
        <SectionHeader id={`${id}-title`} eyebrow={eyebrow} heading={heading} intro={intro} />
        <div className="flex flex-col gap-10 sm:gap-14">
          {rows.map((row, i) => (
            <div key={row.heading} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
              <div data-reveal="" className={`flex flex-col items-start ${i % 2 ? "lg:order-last" : ""}`}>
                <Badge>{String(i + 1).padStart(2, "0")}</Badge>
                <ItemTitle page={row.page} current={row.current} className="type-h2-sm mt-4 text-fg">
                  {row.heading}
                </ItemTitle>
                <p className="type-body-lg mt-3 text-fg-soft">{row.body}</p>
                {row.page && !row.current ? (
                  <Link href={pageSummary(row.page).href} className="group type-button mt-6 inline-flex items-center gap-2 rounded-xl border border-line-strong bg-raised px-5 py-3 text-fg shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent">
                    {pageSummary(row.page).title}
                    <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                ) : null}
              </div>
              {row.visual ? (
                <div data-reveal="scale" className="rounded-2xl border border-line-strong/70 bg-raised p-3 shadow-xl transition duration-500 hover:shadow-2xl sm:p-5">
                  <Diagram visual={row.visual} animate={false} />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* Layers — Sky9 "ecosystem" stack: numbered glass rows, indented ----------------------------------- */

export function LayersSection({ id, eyebrow, heading, intro, layers, surface }: Base & { heading: string; layers: Array<{ label: string; body: string; page?: number; current?: boolean }> }) {
  return (
    <Section id={id} surface={surface} labelledBy={`${id}-title`}>
      <div className="container-content grid gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <SectionHeader id={`${id}-title`} eyebrow={eyebrow} heading={heading} intro={intro} align="start" size="sm" className="lg:sticky lg:top-28" />
        </div>
        <ol className="flex flex-col gap-3 lg:col-span-8">
          {layers.map((layer, i) => (
            <li
              key={layer.label}
              data-reveal="left"
              style={{ "--i": i % 4, "--indent": `${Math.min(i, 4) * 0.75}rem` } as CSSProperties}
              className={`group grid items-start gap-3 rounded-2xl border p-4 transition duration-300 sm:ms-(--indent) sm:grid-cols-[auto_11rem_1fr] sm:gap-5 sm:p-5 ${layer.current ? "border-accent bg-accent-soft shadow-glow" : "border-line-strong/70 bg-raised hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-md"}`}
            >
              <span aria-hidden="true" className={`flex size-9 items-center justify-center rounded-xl font-mono text-xs font-bold ${layer.current ? "bg-accent text-accent-fg" : "border border-accent/20 bg-accent-soft text-accent"}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-wrap items-center gap-2 sm:pt-1.5">
                <ItemTitle page={layer.page} current={layer.current} className="type-h4 text-fg">
                  {layer.label}
                </ItemTitle>
                {layer.current ? <CurrentBadge /> : null}
              </div>
              <p className="type-body-sm text-fg-soft sm:pt-1">{layer.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

/* Matrix — rows × columns in a rounded table ------------------------------------------------------- */

export function MatrixSection({ id, eyebrow, heading, intro, columns, rows, surface, density }: Base & { heading: string; columns: string[]; rows: Array<{ label: string; cells: string[]; page?: number; current?: boolean }> }) {
  const wide = columns.length === 1;
  return (
    <Section id={id} surface={surface} density={density} labelledBy={`${id}-title`}>
      <div className="container-content">
        <SectionHeader id={`${id}-title`} eyebrow={eyebrow ?? "At a glance"} heading={heading} intro={intro} />
        <div data-reveal className="mx-auto max-w-5xl overflow-x-auto rounded-2xl border border-line-strong/80 bg-raised shadow-lg">
          <table className="w-full border-collapse text-left max-md:block">
            <caption className="sr-only">{heading}</caption>
            <thead className="max-md:sr-only">
              <tr className="border-b border-line bg-sunken">
                <td className={`p-4 md:px-6 ${wide ? "w-1/4" : "w-1/3"}`} />
                {columns.map((column) => (
                  <th key={column} scope="col" className="type-eyebrow p-4 text-fg-muted md:px-6">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="max-md:block">
              {rows.map((row) => (
                <tr key={row.label} className={`border-b border-line transition-colors last:border-b-0 max-md:block max-md:py-2 ${row.current ? "bg-accent-soft" : "hover:bg-sunken"}`}>
                  <th scope="row" className="p-4 align-top max-md:block max-md:pb-1 md:px-6">
                    <span className="flex flex-wrap items-center gap-2">
                      <ItemTitle as="span" page={row.page} current={row.current} className="type-body-sm font-bold text-fg">
                        {row.label}
                      </ItemTitle>
                      {row.current ? <CurrentBadge /> : null}
                    </span>
                  </th>
                  {row.cells.map((cell, i) => (
                    <td key={i} className="type-body-sm p-4 align-top max-md:flex max-md:items-baseline max-md:justify-between max-md:gap-4 max-md:py-1 md:px-6">
                      {wide ? null : (
                        <span aria-hidden="true" className="type-caption text-fg-muted md:hidden">
                          {columns[i]}
                        </span>
                      )}
                      <MatrixCell value={cell} emphasise={!wide} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
}

/* Plans — plan pages as Sky9 pricing cards, details only when confirmed ---------------------------- */

export function PlanComparison({ id, eyebrow, heading, intro, planPages, surface }: Base & { heading: string; planPages: number[] }) {
  const plans = planPages.map(pageSummary);
  return (
    <Section id={id} surface={surface} labelledBy={`${id}-title`}>
      <div className="container-content">
        <SectionHeader id={`${id}-title`} eyebrow={eyebrow} heading={heading} intro={intro} />
        <ul className="grid gap-5 md:grid-cols-3 md:gap-6">
          {plans.map((plan, i) => (
            <li key={plan.number} data-reveal="" style={reveal(i)}>
              <div className={CARD}>
                <p className="type-eyebrow text-signal-strong">Plan</p>
                <h3 className="type-h3 mt-3 text-fg">
                  <Link href={plan.href} className="after:absolute after:inset-0 after:z-10 after:rounded-2xl after:content-['']">
                    {plan.title.replace(/ Plan$/, "")}
                  </Link>
                </h3>
                {plan.statement ? <p className="type-body-sm mt-3 text-fg-soft">{plan.statement}</p> : null}
                <span aria-hidden="true" className="btn-shimmer type-button mt-auto flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-accent-fg shadow-glow">
                  {plan.title}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* Checklist — Sky9 "specific modules" rows, or chips ------------------------------------------------ */

type ChecklistItem = string | { label?: string; page?: number; current?: boolean };

export function ChecklistSection({ id, eyebrow, heading, intro, items, variant = "list", surface, density }: Base & { heading: string; items: ChecklistItem[]; variant?: "list" | "chips" }) {
  const entries = items.map((item) => {
    const entry = typeof item === "string" ? { label: item } : item;
    return { ...entry, label: entry.label ?? (entry.page ? pageSummary(entry.page).title : "") };
  });
  if (variant === "chips") {
    return (
      <Section id={id} surface={surface} density={density ?? "dense"} labelledBy={`${id}-title`}>
        <div className="container-content">
          <SectionHeader id={`${id}-title`} eyebrow={eyebrow} heading={heading} intro={intro} size="sm" />
          <ul data-reveal className="mx-auto flex max-w-5xl flex-wrap justify-center gap-2.5 sm:gap-3">
            {entries.map((entry) => (
              <li key={entry.label}>
                {entry.page && !entry.current ? (
                  <Link href={pageSummary(entry.page).href} className="type-body-sm inline-flex items-center gap-2 rounded-full border border-line-strong bg-raised px-4 py-2 font-semibold text-fg shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent">
                    <CircleCheck aria-hidden="true" className="size-4 shrink-0 text-signal-strong" strokeWidth={2.25} />
                    {entry.label}
                  </Link>
                ) : (
                  <span className={`type-body-sm inline-flex items-center gap-2 rounded-full border px-4 py-2 font-semibold ${entry.current ? "border-accent bg-accent text-accent-fg" : "border-line-strong bg-raised text-fg"}`}>
                    <CircleCheck aria-hidden="true" className={`size-4 shrink-0 ${entry.current ? "" : "text-signal-strong"}`} strokeWidth={2.25} />
                    {entry.label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Section>
    );
  }
  return (
    <Section id={id} surface={surface} density={density ?? "dense"} labelledBy={`${id}-title`}>
      <div className="container-content">
        <div className="mb-5 flex flex-col gap-2 sm:mb-6">
          {eyebrow ? (
            <div data-reveal="">
              <Badge>{eyebrow}</Badge>
            </div>
          ) : null}
          <TypewriterHeading id={`${id}-title`} text={heading} className="type-h3 text-fg sm:text-2xl" />
          {intro ? <p className="type-body-sm text-fg-muted">{intro}</p> : null}
        </div>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {entries.map((entry, i) => (
            <li key={entry.label} data-reveal="" style={reveal(Math.min(i, 8) * 0.4)}>
              {entry.page && !entry.current ? (
                <Link href={pageSummary(entry.page).href} className="group flex h-full items-center justify-between gap-4 rounded-xl border border-line-strong/70 bg-raised px-4 py-3.5 transition duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-md">
                  <span className="type-body-sm font-bold text-fg transition-colors group-hover:text-accent">{entry.label}</span>
                  <ArrowRight aria-hidden="true" className="size-4 shrink-0 text-fg-muted transition-transform group-hover:translate-x-1 group-hover:text-accent" />
                </Link>
              ) : (
                <span className={`flex h-full items-center justify-between gap-3 rounded-xl border px-4 py-3.5 ${entry.current ? "border-accent bg-accent-soft" : "border-line bg-sunken"}`}>
                  <span className="type-body-sm flex items-center gap-2.5 font-bold text-fg">
                    <CircleCheck aria-hidden="true" className="size-4 shrink-0 text-signal-strong" strokeWidth={2.25} />
                    {entry.label}
                  </span>
                  {entry.current ? <CurrentBadge /> : null}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* Event list ---------------------------------------------------------------------------------------- */

export function EventListSection({ id, eyebrow, heading, intro, events, surface, density }: Base & { heading: string; events: Array<{ name: string; body: string; page?: number; current?: boolean }> }) {
  return (
    <Section id={id} surface={surface} density={density} labelledBy={`${id}-title`}>
      <div className="container-content">
        <SectionHeader id={`${id}-title`} eyebrow={eyebrow} heading={heading} intro={intro} />
        <ul className="mx-auto grid max-w-5xl gap-3 sm:grid-cols-2">
          {events.map((event, i) => (
            <li key={event.name} data-reveal="" style={reveal(i % 2)} className="rounded-2xl border border-line-strong/70 bg-raised p-5 shadow-sm transition duration-300 hover:border-accent/50 hover:shadow-md">
              <ItemTitle as="p" page={event.page} current={event.current} className="font-mono text-sm font-semibold text-accent">
                {event.name}
              </ItemTitle>
              <p className="type-body-sm mt-2 text-fg-soft">{event.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* FAQ — Sky9 accordion, sourced answers only ---------------------------------------------------------- */

export function FaqSection({ id, eyebrow = "FAQ", heading, intro, items, surface, density }: Base & { heading: string; items: Array<{ question: string; answer: RichTextValue; page?: number }> }) {
  return (
    <Section id={id} surface={surface} density={density} labelledBy={`${id}-title`}>
      <div className="container-content">
        <SectionHeader id={`${id}-title`} eyebrow={eyebrow} heading={heading} intro={intro} />
        <div className="mx-auto max-w-4xl">
          <Accordion
            initiallyOpen={0}
            items={items.map((item, i) => ({
              key: `${item.question}-${i}`,
              title: item.question,
              icon: (
                <span aria-hidden="true" className="hidden size-8 shrink-0 items-center justify-center rounded-lg border border-accent/20 bg-accent-soft text-accent sm:flex">
                  <CircleHelp className="size-4" strokeWidth={2} />
                </span>
              ),
              body: (
                <>
                  <p>
                    <RichText value={item.answer} />
                  </p>
                  {item.page ? (
                    <p className="type-caption mt-4 text-fg-muted">
                      <span aria-hidden="true">FAQ · </span>
                      <ArrowLink href={pageSummary(item.page).href}>{pageSummary(item.page).title}</ArrowLink>
                    </p>
                  ) : null}
                </>
              ),
            }))}
          />
        </div>
      </div>
    </Section>
  );
}
