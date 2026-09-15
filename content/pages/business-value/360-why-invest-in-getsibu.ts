/**
 * 360 · Why Invest in GetSibu — /business-value/why-invest-in-getsibu
 *
 * Angle (clusters: platform-positioning, roi): the combined investment case for decision makers — a creative
 * library as protection for work the organisation has already paid for, what each of the five combined parts
 * protects, and how the investment looks from each seat at the decision table. Modern Digital Asset Management (7)
 * owns the contrast with file storage; Complete Asset Management (120) owns how capabilities rely on each other;
 * DAM Business Case (359) owns the case structure.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how decision makers weigh a platform investment; states no GetSibu capability beyond the cited pages and supplies no figures." } as const;

const page: PageContent = {
  page: 360,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "centered",
      eyebrow: "Business Value",
      lede: "The combined case for decision makers: what an organisation is really investing in, what each part of the platform protects, how the investment looks from each seat at the decision table, and what to settle before committing.",
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 360 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "An investment in work already paid for",
      body: [
        "GetSibu brings AI-powered discovery, centralised asset management, collaboration, analytics and security together in one platform, designed specifically for creative workflows. For a decision maker, the question is less what each part does than what the combination is worth to the organisation.",
        "Much creative spending happens once: a shoot, a campaign, an edit, a brand refresh. Whether that work keeps its value depends on whether people can later find it, trust it and use it within the rules. The creative library is where that value is either kept or quietly lost, which makes investing in it closer to protecting past spending than to buying one more tool.",
        [
          "The platform is designed for ",
          { text: "organisations managing large creative libraries", page: 382 },
          ", from production and marketing teams to agencies, brand teams and creative studios, where the volume of past work makes the question pressing.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Five capabilities in one platform", "Designed for creative workflows", "Past creative spending kept useful", "Control as more people gain access", "The investment seen from each seat"],
      },
      glance: {
        heading: "The investment case in brief",
        facts: [
          { label: "Area", value: "Business value" },
          { label: "Combines", value: "Discovery, asset management, collaboration, analytics and security" },
          { label: "Designed for", value: "Creative workflows" },
          { label: "Building the case", value: "DAM Business Case", page: 359 },
        ],
        actions: [{ kind: "route", path: "/business-value", label: "More in Business Value" }]
      },
      sources: [{ kind: "pdf", page: 360 }, { kind: "pdf", page: 382 }, { kind: "pdf", page: 359 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "what-it-protects",
      eyebrow: "What the investment protects",
      heading: "Five parts of the platform and what each one protects",
      items: [
        {
          heading: "AI-powered discovery",
          body: "AI asset discovery helps people find files by what appears inside them rather than depending entirely on manually entered metadata, so past work stays reachable even where descriptions are thin.",
          icon: "sparkles",
          page: 12,
          points: ["Reuse of work already paid for", "Less reliance on perfect descriptions"],
        },
        {
          heading: "Centralised asset management",
          body: "Assets from connected drives, local infrastructure and direct uploads are gathered in one central location, which can reduce the confusion of several storage places and disconnected versions of one file.",
          icon: "database",
          page: 6,
          points: ["One library to invest in", "Fewer competing versions"],
        },
        {
          heading: "Collaboration",
          body: "A shared workspace lets teams search, review, organise and collaborate around the same digital assets, so conversations about the work stay close to it.",
          icon: "message",
          page: 90,
          points: ["Discussion kept close to assets", "Fewer side channels to maintain"],
        },
        {
          heading: "Analytics",
          body: "Executive analytics offer a higher-level view of the creative library and how it is used, which helps leaders judge whether the library is being used as intended.",
          icon: "chart",
          page: 210,
          points: ["Usage visible to leaders", "Evidence for later decisions"],
        },
        {
          heading: "Security",
          body: "Encryption, authentication, access control, tenant isolation and audit logging are part of the platform’s architecture, and collaboration is combined with permissions, so opening the library to more people need not mean losing control of sensitive assets.",
          icon: "shield",
          page: 321,
          points: ["Access controlled as use widens", "Important actions on record"],
        },
      ],
      sources: [{ kind: "pdf", page: 12 }, { kind: "pdf", page: 6 }, { kind: "pdf", page: 90 }, { kind: "pdf", page: 210 }, { kind: "pdf", page: 321 }, { kind: "pdf", page: 180 }, { kind: "pdf", page: 85 }, { kind: "pdf", page: 326 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "decision-table",
      eyebrow: "Around the decision table",
      heading: "How the investment looks from each seat",
      tabs: [
        {
          label: "Creative leaders",
          heading: "Consistency, and time for the work",
          icon: "palette",
          body: [
            "Creative and marketing leaders judge an investment by what it does for the work and the brand. Their concern is whether teams spend their attention on making rather than on managing files, and whether what goes out is consistent.",
            [
              "A shared creative library gives production, marketing, brand and agency teams ",
              { text: "one source of truth", page: 395 },
              " to work from, and ",
              { text: "AI creative operations", page: 59 },
              " help production and marketing teams spend less time managing files and more time using them in creative work.",
            ],
          ],
          points: ["Consistency across teams", "Attention returned to creative work"],
        },
        {
          label: "Finance and operations",
          heading: "Costs that can be explained and planned",
          icon: "briefcase",
          body: [
            "Finance and operations readers want to know what the platform will cost, what it will change and whether the effects can be seen. They distrust figures they cannot trace back to the organisation’s own activity.",
            [
              "The cost of digital asset management is best weighed ",
              { text: "alongside storage, productivity, collaboration and administrative savings", page: 347 },
              ", and ",
              { text: "library growth reporting", page: 209 },
              " helps anticipate the storage and operational requirements that follow as the library expands.",
            ],
          ],
          points: ["Cost set against wider savings", "Requirements anticipated, not discovered"],
        },
        {
          label: "IT and security",
          heading: "A platform that fits and stays governed",
          icon: "lock",
          body: [
            "IT and security leads ask whether the platform fits the existing estate and whether it can be governed. A creative library that stands apart from everything else, or exposes content by default, soon becomes their problem.",
            [
              "GetSibu is designed as an ",
              { text: "API-first DAM", page: 254 },
              ", so organisations can build custom experiences around the underlying asset system. New folders can stay private until access is explicitly granted, and ",
              { text: "multi-factor authentication", page: 336 },
              " adds another layer of account protection.",
            ],
          ],
          points: ["Custom experiences built on the API", "Content private until access is granted"],
        },
        {
          label: "Agency leaders",
          heading: "Growth without a new system per client",
          icon: "building",
          body: [
            "Agency principals judge a platform by how it copes with change in the client list: accounts won, accounts that end and clients whose requirements differ from the rest.",
            [
              "GetSibu is designed for organisations that need ",
              { text: "multiple isolated environments", page: 160 },
              ", such as agencies managing multiple clients, which underpins the argument for ",
              { text: "agency efficiency", page: 354 },
              ".",
            ],
          ],
          points: ["Isolated environments for clients", "One platform as the roster grows"],
        },
      ],
      sources: [{ kind: "pdf", page: 395 }, { kind: "pdf", page: 59 }, { kind: "pdf", page: 347 }, { kind: "pdf", page: 209 }, { kind: "pdf", page: 254 }, { kind: "pdf", page: 154 }, { kind: "pdf", page: 336 }, { kind: "pdf", page: 160 }, { kind: "pdf", page: 354 }, EXPLAINS],
    },
    {
      kind: "checklist",
      id: "weigh",
      eyebrow: "What to weigh",
      heading: "What to settle before investing in GetSibu",
      variant: "chips",
      surface: "muted",
      items: [
        "Size and growth of the creative library",
        "Teams and client accounts it must serve",
        "Existing storage and tools to connect",
        "Security and access requirements",
        "Effort of migration and adoption",
        "Who will own the library day to day",
      ],
      sources: [{ kind: "pdf", page: 360 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about investing in GetSibu",
      items: [
        {
          question: "What should decision makers look for before investing in GetSibu?",
          answer: "A clear view of how the platform would handle their own material and ways of working: how their kinds of assets would be found, how access would be arranged and how review would run. Questions framed around real examples from the organisation get more useful answers than general ones.",
        },
        {
          question: "Does investing in GetSibu mean rebuilding how assets are stored today?",
          answer: [
            "Not necessarily. ",
            { text: "Automated asset ingestion", page: 121 },
            " works with connected storage sources as well as direct uploads, so an existing library can be brought in without rebuilding the whole storage workflow by hand.",
          ],
        },
        {
          question: "How will leaders know whether an investment in GetSibu is working?",
          answer: [
            { text: "Digital asset KPIs", page: 207 },
            " can include uploads, storage, searches, contributors, comments and asset activity. Leaders can pick the few that correspond to what the investment was meant to change, such as searches for a discovery problem or comments for a review problem.",
          ],
        },
        {
          question: "Does investing in GetSibu limit an organisation to the tools it supports today?",
          answer: [
            "Organisations can ",
            { text: "request custom integrations", page: 260 },
            " for tools that are not already part of the supported integration ecosystem, and the API allows them to build ",
            { text: "custom asset applications", page: 279 },
            " around the GetSibu asset infrastructure.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 121 }, { kind: "pdf", page: 207 }, { kind: "pdf", page: 260 }, { kind: "pdf", page: 279 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More for decision makers",
      variant: "compact",
      pages: [359, 382, 321, 210, 347, 354],
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
