/**
 * 241 · GetSibu Integrations — /integrations (section root)
 *
 * Angle (cluster: integrations-overview, primary): what integrating a DAM into an existing toolset involves, and
 * how GetSibu's publishable routes fit together — connected storage sources (121), the API (253–255), webhook
 * automation (257), integration requests (260) and migration (281). The template adds the section's areas and
 * the list of child topics, so this page has no capabilities grid of children and no related strip. No tool,
 * service or provider is named; no turnaround is promised; held integration pages are never linked.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of integrating a DAM with existing tools in general; names no tool or provider and states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 241,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Integrations",
      lede: "Understand how GetSibu can work alongside the storage, software and systems a team already depends on, how the different kinds of connection relate, and what to settle before building or requesting any of them.",
      visual: { diagram: "connector-flow", label: "Your tools" },
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 241 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Joining the workflow a team already runs",
      body: [
        "GetSibu connects with the tools teams already use, which means adopting a central creative library does not require an organisation to rebuild its existing creative workflow from the ground up.",
        "Integrating a DAM is rarely one connection. Files arrive from places where they are already stored, other software needs to find and use what the library holds, systems elsewhere need to hear when something has changed, and an existing collection may have to move across once. Each of those is a different kind of link, with different people involved and different ways to fail.",
        [
          "Those links depend on the platform underneath. A ",
          { text: "cloud-based architecture", page: 303 },
          " gives organisations access to their creative libraries through supported clients and integrations, and ",
          { text: "GetSibu for Developers", page: 280 },
          " describes a developer-oriented foundation for organisations that want asset management inside their existing software environments.",
        ],
      ],
      keyPoints: {
        heading: "Kinds of connection",
        items: ["Connected storage sources", "An API shared with the interface", "Webhook events that start downstream work", "Requests for tools outside the ecosystem", "Migration of existing libraries"],
      },
      glance: {
        heading: "Integrations in brief",
        facts: [
          { label: "Area", value: "Integrations" },
          { label: "Connects", value: "Storage, applications and downstream systems" },
          { label: "For developers", value: "REST API", page: 253 },
          { label: "Tools outside the ecosystem", value: "Custom Integrations", page: 260 },
        ],
      },
      sources: [{ kind: "pdf", page: 241 }, { kind: "pdf", page: 303 }, { kind: "pdf", page: 280 }, { kind: "pdf", page: 121 }, { kind: "pdf", page: 253 }, { kind: "pdf", page: 257 }, { kind: "pdf", page: 260 }, { kind: "pdf", page: 281 }, EXPLAINS],
    },
    {
      kind: "workflow",
      id: "routes",
      eyebrow: "How the parts fit together",
      heading: "One sensible order for connecting GetSibu",
      intro: "Not every organisation needs every route; this is one practical sequence rather than a rule.",
      stages: [
        {
          label: "Move what already exists",
          body: "A collection held in shared drives, cloud storage or another asset management system comes across as a planned migration, often the first piece of integration work.",
          page: 281,
        },
        {
          label: "Connect the storage in use",
          body: "Storage the team already relies on can be connected as a source, and GetSibu supports asset ingestion from connected storage sources as well as from direct uploads.",
          page: 121,
        },
        {
          label: "Build the library into software",
          body: "Developers can bring asset upload, search, collaboration and other supported workflows into custom applications, through an API-first architecture that offers the platform capabilities the interface itself uses.",
          page: 255,
        },
        {
          label: "Let events start the next step",
          body: "Webhook events can set downstream workflows in motion when assets, comments, approvals or other supported events occur, so activity in the library can start work in another system.",
          page: 257,
        },
        {
          label: "Ask for what is missing",
          body: "Where a tool the team relies on sits outside the supported integration ecosystem, the organisation can request an integration for it.",
          page: 260,
        },
      ],
      sources: [{ kind: "pdf", page: 281 }, { kind: "pdf", page: 121 }, { kind: "pdf", page: 255 }, { kind: "pdf", page: 253 }, { kind: "pdf", page: 257 }, { kind: "pdf", page: 260 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "questions",
      eyebrow: "Before choosing a route",
      heading: "Questions that shape any integration",
      items: [
        {
          heading: "Is this a one-off move or a lasting connection?",
          summary: "Moving a collection once and keeping two systems in contact are different projects with different owners.",
          icon: "refresh",
          body: [
            "A migration has a start and an end: files, metadata and folders arrive, the result is checked, and the old location is retired or kept for reference. A lasting connection has no end date, so somebody has to look after it for as long as both systems stay in use.",
            ["Treating the two as one project blurs responsibility for both. For the move itself, ", { text: "DAM migration strategy", page: 289 }, " begins with understanding existing storage, metadata, permissions and organisational requirements."],
          ],
        },
        {
          heading: "Which system holds the master copy?",
          summary: "Two systems that can both change the same information will sooner or later disagree.",
          icon: "database",
          body: [
            "For each kind of information that crosses a connection, such as the file, its descriptive metadata or its approval state, decide which system is authoritative. The others read it or receive a copy, but never quietly overwrite it.",
            ["Settling this early helps a library act as ", { text: "a shared source of truth", page: 10 }, " instead of becoming one more place holding a slightly different account of the same asset."],
          ],
        },
        {
          heading: "Who looks after it when something changes?",
          summary: "Every connection depends on two systems that keep evolving.",
          icon: "users",
          body: [
            "Tools are upgraded, folders are reorganised and the people who built a connection move on. An integration without a named owner tends to fail quietly, and the first sign is often a missing file or a step that never ran.",
            ["Keep a short record for each integration: what it does, which systems it touches, who owns it and where its reference material lives. For connections built by developers, ", { text: "API documentation", page: 273 }, " provides the information required to build integrations against the platform."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 289 }, { kind: "pdf", page: 10 }, { kind: "pdf", page: 273 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about GetSibu integrations",
      items: [
        {
          question: "Which GetSibu integration routes involve developers?",
          answer: "Anything built against the API or driven by webhook events needs developers, both to build it and to look after it afterwards. Migration and storage connections lean as heavily on the people who know the library, its metadata and where its files are kept today.",
        },
        {
          question: "Where do integrations fit in a GetSibu implementation?",
          answer: ["They are one strand of ", { text: "DAM implementation", page: 299 }, ", which also covers users, folders, permissions, metadata and workflows. Decisions about access and folders affect every connection, so plan integrations alongside them rather than afterwards."],
        },
        {
          question: "Can GetSibu pass library information to other systems as well as receive files?",
          answer: ["Yes. Besides bringing files in, ", { text: "the API can expose asset information", page: 264 }, " so that external systems can work with metadata programmatically."],
        },
        {
          question: "How are applications connected to GetSibu kept within security boundaries?",
          answer: ["Requests from connected applications use ", { text: "authenticated access", page: 256 }, ", which keeps them within appropriate security boundaries. The credentials developers use for those requests are covered under ", { text: "Developer Authentication", page: 275 }, "."],
        },
      ],
      sources: [{ kind: "pdf", page: 255 }, { kind: "pdf", page: 257 }, { kind: "pdf", page: 299 }, { kind: "pdf", page: 264 }, { kind: "pdf", page: 256 }, { kind: "pdf", page: 275 }, EXPLAINS],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Bring Your Creative Assets Together",
      conversionPage: 392,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 392 }],
    },
  ],
};

export default page;
