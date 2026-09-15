/**
 * 251 · Zapier Integration — /integrations/zapier (HELD draft; own claim: zapier)
 *
 * Angle (cluster: workflow-automation): GetSibu events connected with other business applications and
 * automation workflows, usually configured by the teams that own a process. page 246 owns team
 * communication; Webhook Automation (257) and Developer Automation (278) own developer-built routes.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of business process automation in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 251,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Integrations",
      lede: "How Zapier can carry activity in a GetSibu library into the other business applications an organisation runs, and what to decide before an automation workflow is trusted with real work.",
      visual: { diagram: "connector-flow", label: "Zapier" },
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 251 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Library events as the opening step of wider business processes",
      body: [
        "Zapier can connect GetSibu events with other business applications and automation workflows. Something that happens in the creative library becomes the first step of a process that continues in software used by other parts of the organisation.",
        "Creative work touches systems well beyond the creative team: spreadsheets that track campaign deliverables, customer records that note what was sent to whom, intranets, request queues and project trackers. Keeping those systems in step with the library by hand means someone retyping what has already happened, usually later than it happened and occasionally not at all.",
        [
          "Developers reach a similar result by other routes. Through ",
          { text: "webhook automation", page: 257 },
          ", they build services that start downstream work from activity in the library, and ",
          { text: "developer automation", page: 278 },
          " covers the wider use of APIs and webhooks to automate repetitive asset management workflows.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["GetSibu events as starting points", "Other business applications", "Automation workflows", "Only the details the next step needs", "An owner for every workflow"],
      },
      highlight: {
        heading: "In practice",
        body: "An operations coordinator lists the updates she makes by hand after activity in the library, then marks the most repetitive ones as candidates for an automation workflow.",
        tags: ["Operations", "Marketing", "IT"],
      },
      glance: {
        heading: "The Zapier integration in brief",
        facts: [
          { label: "Area", value: "Integrations" },
          { label: "Connects", value: "GetSibu events and other business applications" },
          { label: "Developer route", value: "Webhook Automation", page: 257 },
          { label: "Wider practice", value: "Developer Automation", page: 278 },
        ],
      },
      sources: [{ kind: "pdf", page: 251 }, { kind: "pdf", page: 257 }, { kind: "pdf", page: 278 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "design",
      eyebrow: "Step by step",
      heading: "Designing an automation workflow around a library event",
      intro: "A general sequence for any workflow that begins with activity in the library.",
      steps: [
        { heading: "Name the manual step", body: "Write down an update someone currently makes by hand after something happens in the library, and the application where they make it.", icon: "document" },
        { heading: "Choose the starting event", body: "Pick the activity in GetSibu that should begin the workflow, and the single change it ought to cause elsewhere.", icon: "zap" },
        { heading: "Limit what is passed on", body: "Decide which details the receiving application needs for its next step, and leave everything else where it already lives.", icon: "filter" },
        { heading: "Try it on harmless material", body: "Run the workflow with test assets and a copy of the receiving record, so an early mistake cannot alter live business data.", icon: "check" },
        { heading: "Record an owner", body: "Note who built the workflow, what it does and who takes over when that person changes role.", icon: "user" },
        { heading: "Review it at agreed intervals", body: "Check that the workflow still matches the process, because the library and the business application will both change over time.", icon: "calendar" },
      ],
      sources: [{ kind: "pdf", page: 251 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "routes",
      eyebrow: "Two routes",
      heading: "An automation workflow compared with a developer-built service",
      intro: "Both can start work elsewhere from activity in the library; they differ in who builds and looks after them.",
      columns: ["Automation workflow in Zapier", "Service built by developers"],
      rows: [
        ["Who usually builds it", "The team that owns the process, often with IT aware of it", "Developers, working from what the process owner needs"],
        ["Best suited to", "Straightforward hand-offs between business applications", "Complex logic, large volumes or internal systems"],
        ["Where it runs", "On the automation platform", "On infrastructure the organisation looks after"],
        ["Changing it", "Adjusted by the people who configured it", "A development change that is tested and released"],
        ["Main risk", "Workflows nobody remembers creating", "A service that needs upkeep for as long as it runs"],
      ],
      sources: [{ kind: "pdf", page: 251 }, { kind: "pdf", page: 257 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "care",
      eyebrow: "Considerations",
      heading: "Keeping business automation around the library dependable",
      items: [
        {
          heading: "Information that leaves the library",
          summary: "Each step that copies details into another application extends where those details live.",
          icon: "lock",
          body: [
            "A file name, a campaign title or a client’s name can be commercially sensitive before launch. Once copied into a spreadsheet or a shared tracker, it is governed by that application’s access rules, not the library’s.",
            ["Treat each workflow as part of ", { text: "creative access governance", page: 159 }, ", which helps organisations maintain control over sensitive creative content, and agree what may leave the library before the first workflow runs."],
          ],
        },
        {
          heading: "The access an automation is given",
          summary: "A workflow can do whatever its access allows, whether or not its builder intended it.",
          icon: "key",
          body: [
            "Give each workflow no more access than its task needs, and revisit that access when the task changes. A workflow that only has to read activity has no reason to be able to alter records.",
            "When someone who built workflows leaves the organisation, review what those workflows can reach and who now answers for them.",
          ],
        },
        {
          heading: "Failures nobody sees",
          summary: "A broken workflow rarely announces itself to the people who relied on it.",
          icon: "flag",
          body: [
            "The first sign of a stopped workflow is usually a record that should exist and does not: a tracker row never updated, a request never opened. Decide who hears about failures, and look through the receiving application now and then for gaps.",
            "Where accuracy matters, compare the business application with the library from time to time instead of assuming every event was handled.",
          ],
        },
        {
          heading: "References rather than copies",
          summary: "A business application should point to assets, not become a second home for them.",
          icon: "collection",
          body: [
            "Workflows that copy files or long descriptions into other applications create duplicates that fall out of date as soon as an asset changes. A reference back to the library keeps people looking at the work as it currently stands.",
            ["That keeps the library a ", { text: "shared source of truth", page: 10 }, " for creative, marketing, production and brand teams, instead of one copy among many."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 159 }, { kind: "pdf", page: 10 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about the Zapier integration",
      items: [
        {
          question: "Which GetSibu events can start a Zapier workflow?",
          answer: "Confirm the events available to the integration when you plan a workflow, and design around those rather than around activity you assume will be offered. A workflow built on an event that does not exist fails before it starts.",
        },
        {
          question: "Can agencies use the Zapier integration across several client libraries?",
          answer: ["Only with the same separation the libraries have. ", { text: "Agency multi-tenancy", page: 162 }, " lets agencies manage multiple client libraries from one platform while maintaining separation between tenants, so keep each client’s workflows, and the records they write to, just as distinct."],
        },
        {
          question: "Should a Zapier workflow be used to count library activity for reports?",
          answer: ["Look at what the library already measures first. ", { text: "Creative asset analytics", page: 181 }, " provide visibility into uploads, comments, storage, contributors, tags and other library activity, so a workflow is better spent on records that live outside GetSibu."],
        },
        {
          question: "How can a team tell whether a Zapier workflow is still worth keeping?",
          answer: "Ask whether anyone would notice if it stopped. If nobody reads the records it updates any more, retire it deliberately and note that it has gone, rather than leaving it running out of habit.",
        },
      ],
      sources: [{ kind: "pdf", page: 162 }, { kind: "pdf", page: 181 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on automating around the library",
      variant: "compact",
      pages: [257, 278, 159, 10, 162, 181],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Build a Smarter Creative Workflow",
      conversionPage: 396,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 396 }],
    },
  ],
};

export default page;
