/**
 * The remaining section kinds: definition, editorial, capabilities, comparison, media, alternating,
 * layers, matrix, plans, checklist, event list and FAQ. Server Components; FAQ uses native
 * <details>, so no section here needs client JavaScript.
 */
import Link from "next/link";
import type { CSSProperties } from "react";
import type { RichText as RichTextValue, VisualRef } from "@/types/content";
import { pageSummary } from "@/lib/content/links";
import { Eyebrow, SectionHeader } from "@/components/primitives/SectionHeader";
import { ArrowLink } from "@/components/primitives/Button";
import { Icon } from "@/components/primitives/Icon";
import { Diagram, diagramCaption } from "@/components/diagrams/Diagram";
import { CurrentBadge, ItemTitle, MatrixCell } from "./items";
import { RichText } from "./RichText";
import { Section, type Surface } from "./Section";

interface Base {
  id: string;
  eyebrow?: string;
  intro?: string;
  surface?: Surface;
  density?: "open" | "dense";
}

/* Definition — the direct answer first (AEO) ------------------------------------------------------ */

export function DefinitionBlock({ id, eyebrow = "Definition", term, answer, detail, surface }: Base & { term: string; answer: RichTextValue; detail?: RichTextValue }) {
  return (
    <Section id={id} surface={surface} label={`${eyebrow}: ${term}`} className="!pt-10 md:!pt-14">
      <div className="container-content grid gap-6 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-3 lg:pt-2">
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
        <div className="lg:col-span-9">
          <p className="type-statement max-w-[40ch] text-fg">
            <RichText value={answer} />
          </p>
          {detail ? (
            <p className="type-body-lg mt-6 max-w-[60ch] text-fg-soft">
              <RichText value={detail} />
            </p>
          ) : null}
        </div>
      </div>
    </Section>
  );
}

/* Editorial — a readable column, with linked lead-ins ---------------------------------------------- */

type EditorialParagraph = string | { lead: string; text: string; page?: number; current?: boolean };

export function EditorialSection({ id, eyebrow, heading, intro, body, surface }: Base & { heading: string; body: EditorialParagraph[] }) {
  return (
    <Section id={id} surface={surface} labelledBy={`${id}-title`}>
      <div className="container-content grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeader id={`${id}-title`} eyebrow={eyebrow} heading={heading} intro={intro} className="lg:sticky lg:top-28" />
        </div>
        <div className="flex flex-col lg:col-span-8">
          {body.map((paragraph, i) =>
            typeof paragraph === "string" ? (
              <p key={i} className="type-body-lg max-w-[62ch] border-b border-line pb-7 text-fg-soft [&:not(:first-child)]:pt-7">
                {paragraph}
              </p>
            ) : (
              <div key={i} data-reveal style={{ "--i": i % 3 } as CSSProperties} className="border-b border-line py-7 first:pt-0 last:border-b-0">
                <ItemTitle page={paragraph.page} current={paragraph.current} className="type-h3 text-fg">
                  {paragraph.lead}
                </ItemTitle>
                <p className="type-body-lg mt-3 max-w-[62ch] text-fg-soft">{paragraph.text}</p>
              </div>
            ),
          )}
        </div>
      </div>
    </Section>
  );
}

/* Capabilities — the one card grid ------------------------------------------------------------------ */

export function CapabilityBreakdown({ id, eyebrow, heading, intro, items, surface, density = "dense" }: Base & { heading: string; items: Array<{ heading: string; body: string; page?: number }> }) {
  return (
    <Section id={id} surface={surface} density={density} labelledBy={`${id}-title`}>
      <div className="container-content">
        <SectionHeader id={`${id}-title`} eyebrow={eyebrow} heading={heading} intro={intro} />
        <ul className={`mt-10 grid gap-4 sm:grid-cols-2 ${items.length % 3 === 0 || items.length > 4 ? "lg:grid-cols-3" : "lg:grid-cols-2"}`}>
          {items.map((item, i) => (
            <li key={item.heading} data-reveal style={{ "--i": i % 3 } as CSSProperties} className="group relative flex flex-col rounded-md border border-line bg-raised p-6 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-line-strong">
              <span className="ring-marker" aria-hidden="true" />
              <h3 className="type-h4 mt-5 text-fg">
                {item.page ? (
                  <Link href={pageSummary(item.page).href} className="after:absolute after:inset-0 after:rounded-md after:content-['']">
                    {item.heading}
                  </Link>
                ) : (
                  item.heading
                )}
              </h3>
              <p className="type-body-sm mt-2.5 line-clamp-4 text-fg-muted">{item.body}</p>
              {item.page ? <Icon name="arrowRight" size={18} className="mt-auto pt-5 text-fg-muted transition-transform group-hover:translate-x-1 group-hover:text-accent" /> : null}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* Comparison — two columns, one of them GetSibu's -------------------------------------------------- */

export function ComparisonTable({
  id,
  eyebrow,
  heading,
  intro,
  columns,
  rows,
  emphasis = 1,
  surface,
  density = "dense",
}: Base & { heading: string; columns: [string, string]; rows: Array<[string, string, string]>; emphasis?: 0 | 1 }) {
  return (
    <Section id={id} surface={surface} density={density} labelledBy={`${id}-title`}>
      <div className="container-content grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-4">
          <SectionHeader id={`${id}-title`} eyebrow={eyebrow} heading={heading} intro={intro} />
        </div>
        <div className="min-w-0 lg:col-span-8">
          <div className="overflow-x-auto rounded-lg border border-line bg-raised">
            <table className="w-full min-w-[19rem] border-collapse text-left">
              <caption className="sr-only">{heading}</caption>
              <thead>
                <tr className="border-b border-line">
                  <td className="w-2/5 p-4 md:p-5" />
                  {columns.map((column, i) => (
                    <th key={column} scope="col" className={`type-eyebrow p-4 align-bottom md:p-5 ${i === emphasis ? "bg-signal-soft/50 text-signal-strong" : "text-fg-muted"}`}>
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map(([label, a, b]) => (
                  <tr key={label} className="border-b border-line last:border-b-0">
                    <th scope="row" className="type-body-sm p-4 font-medium text-fg md:p-5">
                      {label}
                    </th>
                    {[a, b].map((value, i) => (
                      <td key={i} className={`type-body-sm p-4 md:p-5 ${i === emphasis ? "bg-signal-soft/50" : ""}`}>
                        <MatrixCell value={value} emphasise={i === emphasis} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* Media — one wide figure -------------------------------------------------------------------------- */

export function MediaContentSection({ id, eyebrow, intro, visual, surface }: Base & { visual?: VisualRef }) {
  if (!visual) return null;
  const { note, text } = diagramCaption(visual.diagram);
  return (
    <Section id={id} surface={surface} labelledBy={`${id}-title`}>
      <div className="container-content grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <h2 id={`${id}-title`} className="type-h3 mt-4 text-balance text-fg">
            {text}
          </h2>
          {intro ? <p className="type-body-lg mt-4 text-fg-soft">{intro}</p> : null}
          <p className="type-caption mt-6 text-fg-muted">{note}.</p>
        </div>
        <div data-reveal className="lg:col-span-8">
          <Diagram visual={visual} animate={false} caption={false} />
        </div>
      </div>
    </Section>
  );
}

/* Alternating — up to three concept + figure rows --------------------------------------------------- */

export function AlternatingRows({ id, eyebrow, heading, intro, rows, surface }: Base & { heading: string; rows: Array<{ heading: string; body: string; visual?: VisualRef; page?: number; current?: boolean }> }) {
  return (
    <Section id={id} surface={surface} labelledBy={`${id}-title`}>
      <div className="container-wide">
        <SectionHeader id={`${id}-title`} eyebrow={eyebrow} heading={heading} intro={intro} />
        <div className="mt-12 flex flex-col gap-14 lg:gap-20">
          {rows.map((row, i) => (
            <div key={row.heading} className="grid items-center gap-8 lg:grid-cols-12 lg:gap-16">
              <div className={`lg:col-span-5 ${i % 2 ? "lg:order-last" : ""}`}>
                <p className="type-eyebrow text-fg-muted" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <ItemTitle page={row.page} current={row.current} className="type-h3 mt-3 text-fg">
                  {row.heading}
                </ItemTitle>
                <p className="type-body-lg mt-3 max-w-[48ch] text-fg-soft">{row.body}</p>
                {row.page && !row.current ? (
                  <ArrowLink href={pageSummary(row.page).href} className="mt-5">
                    {`Explore ${row.heading}`}
                  </ArrowLink>
                ) : null}
              </div>
              {row.visual ? (
                <div data-reveal className="lg:col-span-7">
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

/* Layers — a stack, not a sequence ------------------------------------------------------------------ */

export function LayersSection({ id, eyebrow, heading, intro, layers, surface }: Base & { heading: string; layers: Array<{ label: string; body: string; page?: number; current?: boolean }> }) {
  return (
    <Section id={id} surface={surface} labelledBy={`${id}-title`}>
      <div className="container-content grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeader id={`${id}-title`} eyebrow={eyebrow} heading={heading} intro={intro} className="lg:sticky lg:top-28" />
        </div>
        <ul className="flex flex-col gap-2 lg:col-span-8">
          {layers.map((layer, i) => (
            <li
              key={layer.label}
              data-reveal
              style={{ "--i": i % 4, "--indent": `${Math.min(i, 4) * 0.75}rem` } as CSSProperties}
              className={`grid gap-2 sm:ms-(--indent) rounded-md border p-5 transition-colors sm:grid-cols-[11rem_1fr] sm:gap-6 md:p-6 ${layer.current ? "border-signal bg-signal-soft" : layer.page ? "border-line bg-raised hover:border-line-strong" : "border-line bg-raised"}`}
            >
              <div className="flex flex-wrap items-center gap-2 self-start">
                <ItemTitle page={layer.page} current={layer.current} className="type-h4 text-fg">
                  {layer.label}
                </ItemTitle>
                {layer.current ? <CurrentBadge /> : null}
              </div>
              <p className="type-body-sm text-fg-soft">{layer.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* Matrix — rows × columns --------------------------------------------------------------------------- */

export function MatrixSection({ id, eyebrow, heading, intro, columns, rows, surface, density = "dense" }: Base & { heading: string; columns: string[]; rows: Array<{ label: string; cells: string[]; page?: number; current?: boolean }> }) {
  const wide = columns.length === 1;
  return (
    <Section id={id} surface={surface} density={density} labelledBy={`${id}-title`}>
      <div className="container-content">
        <SectionHeader id={`${id}-title`} eyebrow={eyebrow} heading={heading} intro={intro} />
        <div className="mt-10 overflow-x-auto rounded-lg border border-line bg-raised">
          <table className="w-full border-collapse text-left max-md:block">
            <caption className="sr-only">{heading}</caption>
            <thead className="max-md:sr-only">
              <tr className="border-b border-line">
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
                <tr key={row.label} className={`border-b border-line last:border-b-0 max-md:block max-md:py-2 ${row.current ? "bg-signal-soft/60" : ""}`}>
                  <th scope="row" className="p-4 align-top max-md:block max-md:pb-1 md:px-6">
                    <span className="flex flex-wrap items-center gap-2">
                      <ItemTitle as="span" page={row.page} current={row.current} className="type-body-sm font-semibold text-fg">
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

/* Plans — plan pages, with details only when confirmed ---------------------------------------------- */

export function PlanComparison({ id, eyebrow, heading, intro, planPages, surface }: Base & { heading: string; planPages: number[] }) {
  const plans = planPages.map(pageSummary);
  return (
    <Section id={id} surface={surface} labelledBy={`${id}-title`}>
      <div className="container-content">
        <SectionHeader id={`${id}-title`} eyebrow={eyebrow} heading={heading} intro={intro} />
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {plans.map((plan) => (
            <li key={plan.number} className="group relative flex flex-col rounded-lg border border-line bg-raised p-7">
              <p className="type-eyebrow text-fg-muted">Plan</p>
              <h3 className="type-h3 mt-4 text-fg">
                <Link href={plan.href} className="after:absolute after:inset-0 after:rounded-lg after:content-['']">
                  {plan.title.replace(/ Plan$/, "")}
                </Link>
              </h3>
              {plan.statement ? <p className="type-body-sm mt-3 text-fg-muted">{plan.statement}</p> : null}
              <span aria-hidden="true" className="type-body-sm mt-auto inline-flex items-center gap-1.5 pt-8 font-semibold text-accent">
                {plan.title}
                <Icon name="arrowRight" size={16} className="transition-transform group-hover:translate-x-1" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* Checklist — what an area covers ------------------------------------------------------------------- */

type ChecklistItem = string | { label?: string; page?: number; current?: boolean };

export function ChecklistSection({ id, eyebrow, heading, intro, items, surface, density = "dense" }: Base & { heading: string; items: ChecklistItem[] }) {
  return (
    <Section id={id} surface={surface} density={density} labelledBy={`${id}-title`}>
      <div className="container-content grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeader id={`${id}-title`} eyebrow={eyebrow} heading={heading} intro={intro} />
        </div>
        <ul className="grid content-start gap-x-8 border-t border-line sm:grid-cols-2 lg:col-span-8">
          {items.map((item) => {
            const entry = typeof item === "string" ? { label: item } : item;
            const label = entry.label ?? (entry.page ? pageSummary(entry.page).title : "");
            return (
              <li key={label} className={`type-body flex flex-wrap items-center gap-x-3.5 gap-y-1.5 border-b border-line py-4 text-fg ${entry.current ? "font-semibold" : ""}`}>
                <span className={`ring-marker ${entry.current ? "bg-signal" : ""}`} aria-hidden="true" />
                <ItemTitle as="span" page={entry.page} current={entry.current} className="font-medium">
                  {label}
                </ItemTitle>
                {entry.current ? <CurrentBadge /> : null}
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}

/* Event list ---------------------------------------------------------------------------------------- */

export function EventListSection({ id, eyebrow, heading, intro, events, surface, density = "dense" }: Base & { heading: string; events: Array<{ name: string; body: string; page?: number; current?: boolean }> }) {
  return (
    <Section id={id} surface={surface} density={density} labelledBy={`${id}-title`}>
      <div className="container-content">
        <SectionHeader id={`${id}-title`} eyebrow={eyebrow} heading={heading} intro={intro} />
        <ul className="mt-10 border-t border-line">
          {events.map((event) => (
            <li key={event.name} className="grid gap-2 border-b border-line py-5 md:grid-cols-[16rem_1fr] md:gap-8">
              <ItemTitle as="p" page={event.page} current={event.current} className="font-mono text-[0.875rem] text-accent">
                {event.name}
              </ItemTitle>
              <p className="type-body-sm text-fg-soft">{event.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* FAQ — sourced answers only ------------------------------------------------------------------------- */

export function FaqSection({ id, eyebrow = "FAQ", heading, intro, items, surface, density = "dense" }: Base & { heading: string; items: Array<{ question: string; answer: RichTextValue; page?: number }> }) {
  return (
    <Section id={id} surface={surface} density={density} labelledBy={`${id}-title`}>
      <div className="container-content grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeader id={`${id}-title`} eyebrow={eyebrow} heading={heading} intro={intro} />
        </div>
        <div className="border-t border-line lg:col-span-8">
          {items.map((item, i) => (
            <details key={item.question} open={i === 0} className="group border-b border-line">
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-left">
                <span className="type-h4 text-fg">{item.question}</span>
                <span aria-hidden="true" className="relative size-5 shrink-0 text-fg-muted">
                  <span className="absolute top-1/2 left-0 h-0.5 w-5 -translate-y-1/2 rounded bg-current" />
                  <span className="absolute top-0 left-1/2 h-5 w-0.5 -translate-x-1/2 rounded bg-current transition-transform duration-200 group-open:scale-y-0" />
                </span>
              </summary>
              <div className="pb-6">
                <p className="type-body max-w-[62ch] text-fg-soft">
                  <RichText value={item.answer} />
                </p>
                {item.page ? (
                  <p className="type-caption mt-4 text-fg-muted">
                    <span aria-hidden="true">FAQ · </span>
                    <ArrowLink href={pageSummary(item.page).href}>{pageSummary(item.page).title}</ArrowLink>
                  </p>
                ) : null}
              </div>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
