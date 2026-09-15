/**
 * 279 · Custom Asset Applications — /developers/custom-asset-applications
 *
 * Angle (cluster api-platform): whole applications built around GetSibu asset infrastructure — when a dedicated tool
 * is the right answer, what building around the infrastructure spares, and the kinds of application organisations
 * build. 253 owns the API-first REST design, 254 custom experiences for audiences, 255 single workflows.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of build decisions for asset applications in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 279,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "API & Developers",
      lede: "When a dedicated tool built around GetSibu asset infrastructure is the right answer, what building around that infrastructure saves an organisation from recreating, and the kinds of application teams tend to need.",
      visual: { diagram: "api-flow" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 279 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A dedicated tool with the library underneath",
      body: [
        "The API allows organisations to build custom applications around the GetSibu asset infrastructure. A custom asset application is a tool in its own right, designed for one department or process, which relies on the library beneath it instead of reproducing what a DAM already does.",
        "Organisations seldom set out to build an asset application. More often a team’s process outgrows the general tools around it and someone proposes a dedicated one. The costly mistake is building that tool from the ground up, storage, previews and search for large media included, when the difficult infrastructure already exists.",
        [
          "",
          { text: "API-First DAM", page: 254 },
          " explains the design that makes this kind of building possible, and the ",
          { text: "GetSibu API", page: 261 },
          " sets out the programmatic access such applications depend on.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Applications around asset infrastructure", "Tools for one department or process", "Infrastructure used, not rebuilt", "The library remains the record", "Lighter routes considered first"],
      },
      highlight: {
        heading: "In practice",
        body: "A rights team’s proposed tool is sketched on a single page: what it shows, what it records and what it leaves to the library.",
        tags: ["Product owners", "Rights teams", "Developers"],
      },
      glance: {
        heading: "Custom asset applications in brief",
        facts: [
          { label: "Area", value: "API & Developers" },
          { label: "Built around", value: "GetSibu asset infrastructure" },
          { label: "Positioning", value: "API-First DAM", page: 254 },
          { label: "Lighter route", value: "Developer API", page: 255 },
        ],
        actions: [{ kind: "route", path: "/developers", label: "More in Developers" }]
      },
      sources: [{ kind: "pdf", page: 279 }, { kind: "pdf", page: 254 }, { kind: "pdf", page: 261 }, { kind: "pdf", page: 255 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "right-answer",
      eyebrow: "Before building",
      heading: "Is a custom application the right answer?",
      items: [
        {
          heading: "Could the GetSibu workspace do the job?",
          summary: "Many needs are already met by the library itself.",
          icon: "folder",
          body: [["", { text: "The creative team workspace", page: 90 }, " gives teams one place to search, review, organise and collaborate around digital assets. If the people involved could simply work there, a new application adds upkeep without adding much else."]],
        },
        {
          heading: "Would a feature in an existing tool be enough?",
          summary: "Bringing one workflow into familiar software is smaller than a new application.",
          icon: "plug",
          body: [["When the need is a single step, such as searching or sending files from a tool people already use, integrating that workflow through the ", { text: "Developer API", page: 255 }, " is usually the lighter choice."]],
        },
        {
          heading: "Is the need really about something happening?",
          summary: "Some requirements are about starting work, not about a new tool.",
          icon: "webhook",
          body: [["If people mainly want work to begin after an approval or a comment, ", { text: "webhook automation", page: 257 }, " may meet the need without anyone opening another application."]],
        },
        {
          heading: "Is the gap a missing connection?",
          summary: "Sometimes a product the organisation already owns just needs linking up.",
          icon: "network",
          body: [["When the requirement is to connect a tool outside the supported integration ecosystem, organisations can ", { text: "request a custom integration", page: 260 }, " instead of building an application around the problem."]],
        },
        {
          heading: "Does the process genuinely stand apart?",
          summary: "An application earns its place when a process has needs no general tool meets.",
          icon: "compass",
          body: ["A clearance process with its own steps and records, or a production task that combines several library actions in a set order, can justify a tool of its own. Write down what makes the process different before deciding to build."],
        },
      ],
      sources: [{ kind: "pdf", page: 90 }, { kind: "pdf", page: 255 }, { kind: "pdf", page: 257 }, { kind: "pdf", page: 260 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "rebuild-or-build-around",
      eyebrow: "Build or build around",
      heading: "An application that builds everything compared with one built around GetSibu",
      intro: "What a given application can use is confirmed in API documentation; the difference lies in how much is recreated.",
      columns: ["An application that builds everything itself", "An application built around GetSibu asset infrastructure"],
      rows: [
        ["Large media collections", "Storage to design, run and pay for", "Infrastructure designed to support large collections of creative content"],
        ["Previews and processing", "A pipeline for thumbnails and extraction", "Assets processed through stages such as metadata extraction and thumbnail generation"],
        ["Finding assets", "An index to build and tune", "Asset search integrated into the application’s interface"],
        ["Where the record lives", "A second copy of every asset", "The library, where teams keep organising and reviewing"],
      ],
      emphasis: 1,
      sources: [{ kind: "pdf", page: 302 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 263 }, { kind: "pdf", page: 273 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "kinds",
      eyebrow: "Examples",
      heading: "Kinds of custom asset application organisations build",
      tabs: [
        {
          label: "Clearance",
          heading: "A tool for rights and clearance work",
          icon: "shield",
          body: [
            "Legal and rights teams track permissions, releases and restrictions through a process of their own. An application built for them can present assets beside the clearance steps they follow, without asking them to learn the whole library.",
            "Keeping its records focused on clearance, and leaving organisation to the library, stops the tool from turning into a rival catalogue.",
          ],
          points: ["Assets beside clearance steps", "No rival catalogue"],
        },
        {
          label: "Production",
          heading: "A tool shaped around one production stage",
          icon: "film",
          body: [
            "A post-production supervisor may want one view of the latest deliveries for a programme, where each stands in review and what is still outstanding.",
            ["A tool like that can concentrate on its stage while the library remains the record, and ", { text: "approval events", page: 267 }, " can be incorporated into external production and workflow systems of this kind."],
          ],
          points: ["One stage, one focused view", "The library stays the record"],
        },
        {
          label: "Merchandising",
          heading: "A tool that starts from the product range",
          icon: "store",
          body: [
            "Merchandising and e-commerce teams think in products and seasons rather than folders. An application built for them can present the library from that point of view, so a range review begins with the products instead of a hunt through campaigns.",
            ["An ", { text: "asset taxonomy", page: 375 }, " is a structured classification system that defines how content is grouped and labelled, and building on the one the library team already keeps saves the application from inventing a rival scheme."],
          ],
          points: ["Organised around the product range", "The existing classification reused"],
        },
        {
          label: "Localisation",
          heading: "A tool for adapting assets to markets",
          icon: "globe",
          body: [
            "Teams adapting campaign material for different regions need to see a source asset beside its market adaptations and know which markets are still waiting.",
            ["In the library, ", { text: "multi-market teams", page: 225 }, " can separate content by region while keeping governance central, and an application for localisation should reflect that structure rather than invent a new one."],
          ],
          points: ["Source and adaptations together", "The library’s regional structure respected"],
        },
      ],
      sources: [{ kind: "pdf", page: 267 }, { kind: "pdf", page: 375 }, { kind: "pdf", page: 225 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about custom asset applications",
      items: [
        {
          question: "How should a custom asset application be tested before people rely on it?",
          answer: "Run it with the team it serves, on real but non-sensitive material, through a full cycle of their process including the awkward cases, before retiring whatever they used before.",
        },
        {
          question: "Can one custom asset application work across several client environments?",
          answer: ["Only if keeping each client apart is treated as a core requirement rather than a later addition. ", { text: "API tenant isolation", page: 276 }, " explains the part tenant context plays in keeping multi-tenant environments apart."],
        },
        {
          question: "Who should help design a custom asset application?",
          answer: "The team whose process it serves, the library team who look after the assets it uses, developers and whoever reviews security. Leaving out the library team is an easy mistake, and it produces a tool that works against the library’s own organisation.",
        },
      ],
      sources: [{ kind: "pdf", page: 276 }, { kind: "pdf", page: 279 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on building applications with GetSibu",
      variant: "compact",
      pages: [254, 255, 261, 273, 260, 276],
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
