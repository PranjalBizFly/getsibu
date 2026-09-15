/**
 * 273 · API Documentation — /developers/api-documentation
 *
 * Angle (cluster api-platform): documentation as the resource for building integrations — how to plan with it, what
 * different readers need from it, and which questions to take to it. Never claims where documentation is published
 * or what it contains.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how teams use API documentation in general; describes no documentation contents and states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 273,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "API & Developers",
      lede: "What API documentation is for, how different readers use it while planning and maintaining integrations with GetSibu, and which questions are worth taking to it before any code is written.",
      visual: { diagram: "api-flow" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 273 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "The reference that turns a plan into something buildable",
      body: [
        "API documentation provides developers with the information required to build integrations against the platform. It is what turns a plan such as “send finished files to the library” into work a developer can build, test and explain.",
        "Integrations built on assumptions tend to fail at the edges. Developers who know other products bring expectations about how requests, errors and data behave, and those expectations are often close enough to seem right until something unusual happens. Reading about the specific platform, instead of recalling a different one, is how those differences are caught before release.",
        [
          "Documentation serves the whole developer area. The ",
          { text: "GetSibu API", page: 261 },
          " provides programmatic access to the platform for developers and technology teams, and everything from a small script to ",
          { text: "a custom asset application", page: 279 },
          " depends on knowing what that access supports.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Information required to build integrations", "A reference for one specific platform", "Questions answered before code", "Readers beyond developers", "Assumptions from other products set aside"],
      },
      highlight: {
        heading: "In practice",
        body: "Before building starts, a developer reads up first on the one step the plan depends on most, since a surprise there would change the whole design.",
        tags: ["Developers", "Architects", "Planning"],
      },
      glance: {
        heading: "API documentation in brief",
        facts: [
          { label: "Area", value: "API & Developers" },
          { label: "Provides", value: "Information required to build integrations" },
          { label: "Written for", value: "Developers" },
          { label: "Supports", value: "GetSibu Integrations", page: 241 },
        ],
        actions: [{ kind: "route", path: "/developers", label: "More in Developers" }]
      },
      sources: [{ kind: "pdf", page: 273 }, { kind: "pdf", page: 261 }, { kind: "pdf", page: 279 }, { kind: "pdf", page: 241 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "planning",
      eyebrow: "Step by step",
      heading: "Planning an integration with the documentation open",
      steps: [
        { heading: "Write the task plainly", body: "Describe what the integration must achieve in everyday language, including which system sets it off and who benefits.", icon: "text" },
        { heading: "Break it into steps", body: "List each thing the software must do, such as sending a file, finding an asset or reading its details.", icon: "workflow" },
        { heading: "Match steps to the reference", body: "Find where the documentation covers each step, and mark any step it does not clearly describe.", icon: "book" },
        { heading: "Trace what access needs", body: "Note what the integration requires in order to be allowed to act, including its credentials and, where relevant, tenant context.", icon: "key" },
        { heading: "Record the unknowns", body: "Keep a short list of open questions and settle each one before building, rather than finding the answers during testing.", icon: "help" },
        { heading: "Reread before release", body: "Go back over the relevant material before launch, because the plan has usually shifted since it was first read.", icon: "refresh" },
      ],
      sources: [{ kind: "pdf", page: 275 }, { kind: "pdf", page: 276 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "readers",
      eyebrow: "Who reads it",
      heading: "What different readers look for in API documentation",
      tabs: [
        {
          label: "Developers",
          heading: "How to build each step correctly",
          icon: "code",
          body: [
            "Developers read in order to build. They need to know how each step of an integration is carried out and what success and failure look like, so their software behaves sensibly either way.",
            "The most valuable habit is reading about failure as carefully as success, because that is where integrations cause the most trouble once they are live.",
          ],
          points: ["How each step is carried out", "Failure read as closely as success"],
        },
        {
          label: "Architects",
          heading: "Whether a design suits the platform",
          icon: "layers",
          body: [
            "Architects read to judge fit: whether a proposed integration can be built as designed, and whether it will stay manageable as volumes grow.",
            ["They weigh the documentation alongside architectural facts, such as the ", { text: "API layer being designed to scale independently", page: 315 }, " for application and integration workloads."],
          ],
          points: ["Designs checked before commitment", "Growth considered early"],
        },
        {
          label: "Security",
          heading: "What automated access will be able to do",
          icon: "shield",
          body: [
            "Security reviewers read to understand exposure: how software proves who it is, what it could reach and how separation between environments is kept.",
            ["Their questions follow from ", { text: "API security", page: 277 }, ", which is an important part of protecting automated access to creative assets."],
          ],
          points: ["Identity and reach understood", "Separation examined"],
        },
        {
          label: "Maintainers",
          heading: "Why an integration was built the way it was",
          icon: "history",
          body: [
            "Whoever inherits an integration reads the documentation next to the code, trying to reconstruct decisions made by someone who has since moved on.",
            "Noting which parts of the documentation informed each design choice gives that person a considerable head start.",
          ],
          points: ["Decisions traceable later", "Handovers made easier"],
        },
      ],
      sources: [{ kind: "pdf", page: 315 }, { kind: "pdf", page: 277 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "questions",
      eyebrow: "What to ask",
      heading: "Questions worth taking to the documentation",
      items: [
        {
          heading: "Sending files",
          summary: "How should an application deliver files?",
          icon: "upload",
          body: [["The ", { text: "asset upload API", page: 262 }, " allows external applications to send files into the GetSibu environment. Before building, find out how an upload is made, whether any details can accompany a file and how the sending application learns the outcome."]],
        },
        {
          heading: "Searching",
          summary: "Which ways of searching can an integration use?",
          icon: "search",
          body: [["Applications can ", { text: "integrate asset search", page: 263 }, " into custom interfaces and workflows. Check which ways of searching and narrowing are open to an integration, and what each result includes."]],
        },
        {
          heading: "Asset information",
          summary: "Which details about an asset can another system read?",
          icon: "database",
          body: [["Because the API ", { text: "can expose asset information", page: 264 }, ", confirm that every field a planned integration relies on is available, and what each one means."]],
        },
        {
          heading: "Activity elsewhere",
          summary: "Which library activity can start work in another system?",
          icon: "webhook",
          body: [["Before designing an automation around a particular kind of activity, confirm that it can ", { text: "trigger downstream workflows", page: 257 }, ", instead of assuming so because a different product offers it."]],
        },
        {
          heading: "Authentication",
          summary: "How should an integration authenticate its requests?",
          icon: "key",
          body: [["Developers ", { text: "authenticate API requests", page: 275 }, " using supported authentication credentials. Establish which credentials are supported and how your organisation will keep them safe."]],
        },
        {
          heading: "Tenant context",
          summary: "How does access stay within the right environment?",
          icon: "building",
          body: [["For organisations with several isolated environments, ", { text: "API access can include tenant context", page: 276 }, ". Confirm how an integration serving such an organisation should make sure each request belongs to the correct one."]],
        },
      ],
      sources: [{ kind: "pdf", page: 262 }, { kind: "pdf", page: 263 }, { kind: "pdf", page: 264 }, { kind: "pdf", page: 257 }, { kind: "pdf", page: 275 }, { kind: "pdf", page: 276 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about API documentation",
      items: [
        {
          question: "When should a team return to API documentation after an integration launches?",
          answer: "Whenever the integration changes, starts to misbehave or passes to a new owner. Each of those moments raises questions that are cheaper to answer from the reference than by experiment.",
        },
        {
          question: "Does reading API documentation remove the need to test an integration?",
          answer: "No. Documentation explains how a platform is meant to be used, while testing with realistic material shows how your particular integration behaves. A dependable project needs both.",
        },
        {
          question: "Does API documentation replace talking to the teams an integration affects?",
          answer: "No. Documentation says what the platform supports; only the people whose work will change can say what the integration should do, which rules it must follow and how to tell that it is working.",
        },
        {
          question: "How does API documentation relate to requesting a custom integration?",
          answer: ["Documentation supports integrations your own developers build. For a tool outside the supported integration ecosystem that you would rather not build for yourself, organisations can ", { text: "request custom integrations", page: 260 }, "."],
        },
      ],
      sources: [{ kind: "pdf", page: 260 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on building integrations with GetSibu",
      variant: "compact",
      pages: [261, 241, 279, 275, 276, 260],
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
