/**
 * 259 · SDK Support — /developers/sdk-support (HELD draft; own claims: sdks, openapi)
 *
 * Angle (cluster: api-platform): the stated SDK direction — what an SDK adds over the REST API, what
 * each named language tends to suit and what generated SDKs mean for an integration. Keeps the PDF
 * hedge ("stated developer direction"); never states availability. page 274 owns
 * the specification itself; page 258 owns testing requests.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of software development kits and client libraries in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 259,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "API & Developers",
      lede: "What GetSibu’s stated SDK direction means for developers: what an SDK adds on top of calling the API directly, where each named language tends to fit, and what to check before an integration relies on one.",
      visual: { diagram: "api-flow" },
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 259 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Working with the API in the languages teams already write",
      body: [
        "GetSibu’s stated developer direction includes TypeScript, Python and Go SDKs generated from the OpenAPI specification.",
        "An SDK, or software development kit, is a library that presents an API in the conventions of a programming language. Instead of assembling HTTP requests, attaching credentials and interpreting responses by hand, a developer calls functions and works with the language’s own data structures, while the library takes care of the repetitive parts of talking to the API.",
        [
          "Whatever the language, an SDK is a convenience layered over the API rather than a separate way in. Underneath sits the ",
          { text: "REST API", page: 253 },
          ", through which developers interact with the same platform capabilities that the GetSibu interface itself uses.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["TypeScript, Python and Go in the stated direction", "SDKs generated from a specification", "Language conventions instead of raw requests", "The REST API underneath", "A stated developer direction"],
      },
      highlight: {
        heading: "In practice",
        body: "An architect choosing a language for a new integration notes which languages appear in the stated direction and structures the first prototype so it could move onto a client library later.",
        tags: ["Developers", "Architects", "Technology teams"],
      },
      glance: {
        heading: "SDK support in brief",
        facts: [
          { label: "Area", value: "API & Developers" },
          { label: "Stated direction", value: "TypeScript, Python and Go SDKs" },
          { label: "Generated from", value: "The OpenAPI specification" },
          { label: "Underneath", value: "REST API", page: 253 },
        ],
      },
      sources: [{ kind: "pdf", page: 259 }, { kind: "pdf", page: 253 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "languages",
      eyebrow: "By language",
      heading: "Where each language in the stated direction tends to fit",
      intro: "Descriptions of the languages in general, as a guide to which integrations each suits.",
      tabs: [
        {
          label: "TypeScript",
          heading: "Web services and tools built with web technologies",
          icon: "code",
          body: [
            "TypeScript adds static types to JavaScript and is common in web back ends, serverless functions and internal tools built with web technologies. A client library that carries types lets an editor flag a misspelt field or a missing value before the code ever runs.",
            ["It is a natural choice when library features belong inside a web application, for instance when teams ", { text: "integrate asset search into custom interfaces", page: 263 }, " and workflows."],
          ],
          points: ["Web back ends and internal tools", "Types that catch mistakes early"],
        },
        {
          label: "Python",
          heading: "Scripts, scheduled jobs and data work",
          icon: "workflow",
          body: [
            "Python is widely used for scripts, scheduled jobs and data processing. Operations and data teams often reach for it when a task looks more like a batch job than an application, such as preparing a report on what a library holds or tidying up after a project closes.",
            ["That makes it a comfortable fit for ", { text: "developer automation", page: 278 }, ", where developers use APIs and webhooks to automate repetitive asset management workflows."],
          ],
          points: ["Short scripts and scheduled jobs", "Tasks shaped like batch work"],
        },
        {
          label: "Go",
          heading: "Long-running services and command-line tools",
          icon: "server",
          body: [
            "Go compiles to self-contained programs and handles many concurrent tasks well, which suits long-running services and command-line tools. A service that receives events and passes work on, or a tool that moves a large volume of files, plays to those strengths.",
            ["File-moving tools are a typical example: the ", { text: "asset upload API", page: 262 }, " allows external applications to send files into the GetSibu environment."],
          ],
          points: ["Services that run continuously", "Tools that handle many files at once"],
        },
      ],
      sources: [{ kind: "pdf", page: 259 }, { kind: "pdf", page: 263 }, { kind: "pdf", page: 278 }, { kind: "pdf", page: 262 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "generated",
      eyebrow: "Worth understanding",
      heading: "What generated SDKs mean for an integration",
      items: [
        {
          heading: "Generated rather than handwritten",
          summary: "Code produced from a specification mirrors the structure of the API closely.",
          icon: "layers",
          body: [
            "A generator reads the machine-readable description of an API and produces a client library from it. The result tends to follow the API’s own organisation, operation by operation, which makes it predictable and consistent across languages.",
            "Handwritten libraries can feel more natural in a given language, but they have to be updated by hand whenever the API changes, and different languages can drift apart. Generation trades some polish for that consistency.",
          ],
        },
        {
          heading: "Versions travel together",
          summary: "A generated library reflects the version of the description it came from.",
          icon: "history",
          body: [
            "When a client library is generated from a description of the API, each release of the library usually corresponds to a particular state of that description. Pin the version an integration is built against, and read the change notes before upgrading rather than accepting whatever is newest.",
          ],
        },
        {
          heading: "The requests are still there underneath",
          summary: "Knowing what an SDK sends makes its errors far easier to understand.",
          icon: "api",
          body: [
            "An SDK hides the details of each request until something goes wrong. At that point, knowing which request was made and what the response said is what turns an unhelpful error into a fixable problem.",
            ["Every call made through a library is still an API request, and ", { text: "API requests use authenticated access", page: 256 }, " so that external applications work within appropriate security boundaries."],
          ],
        },
        {
          heading: "A dependency like any other",
          summary: "Adding an SDK adds something your integration has to keep up to date.",
          icon: "shield",
          body: [
            "A client library brings its own dependencies, release schedule and security updates. Include it in the same review and update process as the other libraries your software relies on, and decide who notices when a new release matters.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 259 }, { kind: "pdf", page: 256 }, EXPLAINS],
    },
    {
      kind: "checklist",
      id: "confirm",
      eyebrow: "Before relying on an SDK",
      heading: "What to confirm before planning an integration around an SDK",
      variant: "chips",
      items: [
        "Whether a library exists for your language yet",
        "Which state of the API it was generated from",
        "How it reports errors and failed requests",
        "How credentials are supplied to it",
        "How new releases are announced",
        "Where its reference material lives",
      ],
      sources: [{ kind: "editorial", note: "Questions to ask of any client library; states no GetSibu capability." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about GetSibu SDK support",
      items: [
        {
          question: "Are GetSibu SDKs for TypeScript, Python and Go available today?",
          answer: ["Those languages are part of GetSibu’s stated developer direction, so check current availability before an integration depends on one. Either way, start with ", { text: "API documentation", page: 273 }, ", the resource developers use to build integrations against the platform."],
        },
        {
          question: "Can developers use the GetSibu API from a language outside the SDK direction?",
          answer: "Yes, by calling the REST API directly. Any language with a dependable HTTP client can send requests and read responses; an SDK only removes some of the repetitive work involved.",
        },
        {
          question: "Does using an SDK change what an integration is allowed to reach?",
          answer: "In general, no. A client library is a way of making API requests rather than a separate kind of access, so the credentials and boundaries behind each request still decide what succeeds.",
        },
        {
          question: "Should a short script use an SDK or call the GetSibu API directly?",
          answer: "For a one-off job, calling the API directly keeps the script free of extra dependencies. When the same code will run for months or grow into a service, a maintained library for your language usually repays the dependency.",
        },
      ],
      sources: [{ kind: "pdf", page: 259 }, { kind: "pdf", page: 273 }, { kind: "pdf", page: 253 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on developing against the GetSibu API",
      variant: "compact",
      pages: [253, 273, 256, 263, 278, 262],
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
