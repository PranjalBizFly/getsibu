/**
 * 280 · GetSibu for Developers — /developers (section root)
 *
 * Angle (cluster api-platform, section root): the developer category itself — a developer-oriented foundation for
 * integrating DAM into existing software environments, how the developer topics fit into an integration's life,
 * and what the foundation means to each team. The template adds the section's areas and the list of child topics,
 * so there is no capabilities grid of children, no child list and no related strip. Held pages (258, 259,
 * 269–272, 274) are never linked or described.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of integrating asset management into existing software in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 280,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "API & Developers",
      lede: "How GetSibu gives organisations a developer-oriented foundation for bringing digital asset management into the software they already run, and how its API, events, access controls and documentation fit together.",
      visual: { diagram: "api-flow" },
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 280 }, { kind: "pdf", page: 388 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Asset management that reaches the software an organisation already runs",
      body: [
        "GetSibu provides a developer-oriented foundation for organisations that want to integrate digital asset management into existing software environments. Rather than asking every system and team to move into one more application, the library can become part of the tools, processes and products an organisation has already built.",
        "Organisations that manage creative assets typically run plenty of other software: content management systems, product information systems, production trackers, intranets and internal tools. The asset library is useful to all of them, but only if they can reach it. Developer work is about that reach: how software sends, finds and follows assets, and how it does so safely.",
        [
          "When evaluators ask ",
          { text: "whether GetSibu has an API", page: 388 },
          ", the answer is yes, with REST API capabilities, webhooks and developer tooling that together make up this foundation.",
        ],
      ],
      keyPoints: {
        heading: "What the area covers",
        items: ["A developer-oriented foundation", "Asset management inside existing software", "Requests and events", "Authenticated, separated access", "Documentation for building", "Automation and custom applications"],
      },
      highlight: {
        heading: "In practice",
        body: "An organisation mapping its systems draws a line from each one to the library and labels it: files in, search out, information shared or activity followed. The labels show which developer topics matter first.",
        tags: ["Architects", "IT", "Developers"],
      },
      glance: {
        heading: "Developers in brief",
        facts: [
          { label: "Area", value: "API & Developers" },
          { label: "Foundation for", value: "Integrating DAM into existing software" },
          { label: "Design", value: "API-first" },
          { label: "Wider picture", value: "GetSibu Integrations", page: 241 },
        ],
      },
      sources: [{ kind: "pdf", page: 280 }, { kind: "pdf", page: 388 }, { kind: "pdf", page: 254 }, { kind: "pdf", page: 241 }, EXPLAINS],
    },
    {
      kind: "workflow",
      id: "how-it-fits",
      eyebrow: "How the parts fit",
      heading: "The developer topics across the life of an integration",
      stages: [
        { label: "Understand the design", body: "Integration starts with how the platform is meant to be used: an API-first architecture through which developers reach the same capabilities the interface relies on.", page: 253 },
        { label: "Establish access", body: "Requests are authenticated so that external applications stay within appropriate security boundaries, whichever workflow they carry.", page: 256 },
        { label: "Bring in workflows", body: "Asset upload, search, collaboration and other supported workflows can be integrated into the custom applications people already use.", page: 255 },
        { label: "Follow activity", body: "Webhook events can be used to trigger downstream workflows in other systems when assets, comments, approvals or other supported events occur.", page: 257 },
        { label: "Automate or build", body: "Routines that repeat can be automated with APIs and webhooks, and complete applications can be built around the asset infrastructure.", page: 279 },
        { label: "Work from the reference", body: "Documentation gives developers the information required to build integrations against the platform, from the first plan to later changes.", page: 273 },
      ],
      sources: [{ kind: "pdf", page: 253 }, { kind: "pdf", page: 256 }, { kind: "pdf", page: 255 }, { kind: "pdf", page: 257 }, { kind: "pdf", page: 278 }, { kind: "pdf", page: 279 }, { kind: "pdf", page: 273 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "teams",
      eyebrow: "By team",
      heading: "What a developer foundation means to each team",
      tabs: [
        {
          label: "Developers",
          heading: "A foundation to build on, not around",
          icon: "code",
          body: [
            "Developers want confidence that a platform will not force workarounds: that the capabilities they need can be reached, that requests are authenticated in a supported way and that the reference material answers their questions.",
            "Starting with one small, useful workflow is usually the quickest way to learn a platform’s shape before committing to anything larger.",
          ],
          points: ["No workarounds forced", "One workflow before many"],
        },
        {
          label: "Product and web",
          heading: "Assets inside the products you run",
          icon: "globe",
          body: [
            "Teams responsible for websites, apps and catalogues need assets and their details wherever customers see them. For them, the foundation means reaching the library from their own systems instead of copying files and descriptions across by hand.",
            "Their first questions are practical ones: how material reaches their systems, and how it stays up to date once it is there.",
          ],
          points: ["Assets reach customer-facing systems", "Fewer copied files and descriptions"],
        },
        {
          label: "IT and security",
          heading: "Connections that stay governed",
          icon: "shield",
          body: [
            ["IT and security teams see every connection as a new route to sensitive material. ", { text: "API security", page: 277 }, " is an important component of protecting automated access to creative assets, and their part is making sure each integration is authenticated, has a clear purpose and has an owner."],
            "They also keep the list of connected software current, so that a tool built for a campaign that ended long ago does not keep a route into the library nobody remembers.",
          ],
          points: ["Every connection reviewed", "A purpose and an owner for each"],
        },
        {
          label: "Creative operations",
          heading: "Fewer hand-offs between systems",
          icon: "workflow",
          body: [
            "Operations leads see the effort lost between systems: files moved by hand, approvals relayed by message, trackers updated from memory. They are often the people who spot what developers should connect first.",
            "Sign-off is a common candidate, since approval events can be incorporated into external production and workflow systems.",
          ],
          points: ["Lost effort made visible", "Priorities set by the work"],
        },
        {
          label: "Agencies",
          heading: "Several clients, one set of tools",
          icon: "building",
          body: [
            ["Agencies building internal tools across client libraries need the same software to respect every boundary between clients. ", { text: "API access can include tenant context", page: 276 }, " so that multi-tenant environments remain properly separated, which matters as soon as one tool serves more than one client."],
            "Clients may well ask how their material is protected when agency software handles it, and a clear account of that separation answers the question directly.",
          ],
          points: ["Boundaries respected by software", "Shared tools planned with care"],
        },
      ],
      sources: [{ kind: "pdf", page: 277 }, { kind: "pdf", page: 267 }, { kind: "pdf", page: 276 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about GetSibu for developers",
      items: [
        {
          question: "Does an organisation need developers to get value from GetSibu?",
          answer: "Not to use the library, which works through its own interface. Developers, in-house or from a partner, become necessary when assets need to reach other software or when work in other systems should follow what happens in the library.",
        },
        {
          question: "Where should a developer new to GetSibu begin?",
          answer: ["With the ", { text: "GetSibu API", page: 261 }, " overview of programmatic access for developers and technology teams, and then ", { text: "API documentation", page: 273 }, " before building a first workflow."],
        },
        {
          question: "How does the developer foundation relate to GetSibu integrations?",
          answer: ["", { text: "GetSibu integrations", page: 241 }, " describe how the platform connects with the tools teams already use. The developer foundation is the part of that picture where organisations build connections of their own."],
        },
      ],
      sources: [{ kind: "pdf", page: 261 }, { kind: "pdf", page: 273 }, { kind: "pdf", page: 241 }, { kind: "pdf", page: 280 }, EXPLAINS],
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
