/**
 * 255 · Developer API — /developers/developer-api
 *
 * Angle (cluster: api-platform): what developers integrate — upload, search, metadata and tags, and collaboration
 * workflows brought into the applications people already use, the distinct integration problem each poses, and
 * how to integrate one workflow at a time. REST API (253) owns the architecture the interface uses; API-First DAM
 * (254) custom experiences for other audiences; 262–267 each API area in depth. No endpoints, request examples,
 * versions, rate limits, client libraries, specifications or code.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of API integration practice in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 255,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "API & Developers",
      lede: "Which library workflows developers can bring into their own applications through the GetSibu API, what makes each one a different integration problem, and how to integrate them one at a time.",
      visual: { diagram: "api-flow" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 255 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Library workflows carried into the applications people already use",
      body: [
        "Developers can use the GetSibu API to integrate asset upload, search, collaboration and other supported workflows into custom applications. Work that would otherwise mean switching to the library can take place inside the software a team already relies on.",
        "Each of those workflows is a separate piece of work, with its own starting point, its own users and its own ways to go wrong. Treating them separately makes an integration easier to plan, test and explain, and lets a team learn from the first before committing to the next.",
        [
          "Behind all of them, the ",
          { text: "GetSibu API", page: 261 },
          " provides programmatic access to the digital asset platform for developers and technology teams.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Upload from other applications", "Search inside custom interfaces", "Metadata and tags handled by software", "Comment and approval events", "Processing before discovery", "One workflow at a time"],
      },
      glance: {
        heading: "The Developer API in brief",
        facts: [
          { label: "Area", value: "API & Developers" },
          { label: "Integrates", value: "Upload, search, collaboration and other supported workflows" },
          { label: "Overview", value: "GetSibu API", page: 261 },
          { label: "Complete tools", value: "Custom Asset Applications", page: 279 },
        ],
        actions: [{ kind: "route", path: "/developers", label: "More in Developers" }]
      },
      sources: [{ kind: "pdf", page: 255 }, { kind: "pdf", page: 261 }, { kind: "pdf", page: 279 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "workflows",
      eyebrow: "What developers integrate",
      heading: "What each workflow asks of an integration",
      tabs: [
        {
          label: "Upload",
          heading: "Getting files in from where they are made",
          icon: "upload",
          body: [
            ["The ", { text: "asset upload API", page: 262 }, " allows external applications to send files into the GetSibu environment, so an export, a delivery or a capture need not end with someone uploading it by hand."],
            "After upload, assets move through processing stages such as metadata extraction, thumbnail generation and AI-related processing. An integration that sends a file and searches for it straight afterwards should allow for that gap.",
          ],
          points: ["Files sent by other applications", "Processing comes before discovery"],
        },
        {
          label: "Search",
          heading: "Library search inside another application",
          icon: "search",
          body: [
            ["Applications can ", { text: "integrate asset search", page: 263 }, " into custom interfaces and workflows, so people find assets from the tool they are already working in."],
            "Results shown in another application need careful presentation: enough preview and description to choose the right asset, without rebuilding the whole library around the search.",
          ],
          points: ["Search from the tool in use", "Results designed for their context"],
        },
        {
          label: "Metadata and tags",
          heading: "Descriptive information other systems can use",
          icon: "tag",
          body: [
            ["The API ", { text: "can expose asset information", page: 264 }, " so external systems can work with metadata programmatically, and developers can bring ", { text: "asset tagging workflows", page: 265 }, " into custom applications."],
            "Where more than one system maintains the same details, agree which one owns each field, or two applications will spend their time correcting each other.",
          ],
          points: ["Metadata used by other systems", "Tagging inside custom applications"],
        },
        {
          label: "Collaboration",
          heading: "Conversations and decisions other systems can follow",
          icon: "message",
          body: [
            [{ text: "Comment-related events", page: 266 }, " can support custom collaboration workflows, and ", { text: "approval events", page: 267 }, " can be incorporated into external production and workflow systems."],
            "The discussion itself is best left on the asset. What other systems usually need is the fact that something was said or decided, so they can act on it.",
          ],
          points: ["Comment-related events for custom workflows", "Approval events in production systems"],
        },
      ],
      sources: [{ kind: "pdf", page: 262 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 263 }, { kind: "pdf", page: 264 }, { kind: "pdf", page: 265 }, { kind: "pdf", page: 266 }, { kind: "pdf", page: 267 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "An agency brings its library into a production tracker",
      team: "An agency technology team",
      situation: "An agency’s producers work in an in-house production tracker. They switch to GetSibu to find assets, add deliveries and check approvals, then copy what they learn back into each job.",
      steps: [
        {
          heading: "One workflow first",
          body: "The technology team starts with search, the step producers repeat most often, instead of connecting everything at once.",
        },
        {
          heading: "Search appears beside each job",
          body: "Producers search the library from inside a job in the tracker and choose assets without opening a second application.",
        },
        {
          heading: "Deliveries go straight in",
          body: "Supplier files that arrive through the tracker are sent to GetSibu through the upload API, rather than downloaded and uploaded a second time.",
        },
        {
          heading: "Approvals move jobs on",
          body: "Approval events feed the tracker, so a job advances when its assets are approved rather than when a producer remembers to update it.",
        },
        {
          heading: "Clients stay separate",
          body: ["Because the agency runs several client libraries, the integration’s API access includes ", { text: "tenant context", page: 276 }, ", so each client environment remains properly separated."],
        },
      ],
      outcome: "Producers stop copying details between two systems, and job status in the tracker follows the approvals recorded in the library.",
      link: { page: 215, label: "GetSibu for Creative Agencies" },
      sources: [{ kind: "pdf", page: 263 }, { kind: "pdf", page: 262 }, { kind: "pdf", page: 267 }, { kind: "pdf", page: 276 }, { kind: "pdf", page: 215 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "process",
      id: "integrate-one",
      eyebrow: "Step by step",
      heading: "Integrating one workflow from plan to release",
      steps: [
        { heading: "Choose the workflow", body: "Pick one workflow, such as upload or search, and describe where it starts, where it ends and who benefits from it.", icon: "compass" },
        { heading: "Check the documentation", body: "API documentation provides the information required to build integrations against the platform, so confirm each part of the workflow there before building.", icon: "book", page: 273 },
        { heading: "Set up credentials", body: "Authenticate API requests using supported authentication credentials, and keep those credentials out of the application’s code.", icon: "key", page: 275 },
        { heading: "Test with realistic material", body: "Work with files, metadata and folders that resemble the real library, including large media and awkward file names.", icon: "layers" },
        { heading: "Plan for the unhappy path", body: "Decide what the application does when a request fails, a file is still processing or a search finds nothing.", icon: "flag" },
        { heading: "Release to a small group", body: "Let a few people use the workflow first and watch how they use it before extending it to everyone.", icon: "users" },
      ],
      sources: [{ kind: "pdf", page: 273 }, { kind: "pdf", page: 275 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about the Developer API",
      items: [
        {
          question: "Can the Developer API be called directly from a public website or mobile app?",
          answer: "Take care with that design. Credentials placed inside software that runs on other people’s devices can be extracted, so applications generally call an API from a server they control and pass only the results on.",
        },
        {
          question: "How does integrating workflows differ from building a custom asset application?",
          answer: ["Integration brings individual workflows into software you already have. ", { text: "Custom asset applications", page: 279 }, " are tools built around the GetSibu asset infrastructure in their own right, often combining several workflows."],
        },
        {
          question: "Can integrations built on the Developer API automate work, not only display it?",
          answer: ["Yes. ", { text: "Developer automation", page: 278 }, " describes how developers can use APIs and webhooks to automate repetitive asset management workflows."],
        },
        {
          question: "How does the Developer API relate to the GetSibu REST API?",
          answer: ["They look at the same API from different sides. ", { text: "REST API", page: 253 }, " explains the API-first architecture the interface itself relies on, while the Developer API is about the workflows developers bring into their own applications."],
        },
      ],
      sources: [{ kind: "pdf", page: 279 }, { kind: "pdf", page: 278 }, { kind: "pdf", page: 253 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on integrating GetSibu workflows",
      variant: "compact",
      pages: [261, 262, 263, 267, 273, 279],
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
