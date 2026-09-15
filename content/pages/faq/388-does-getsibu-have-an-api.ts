/**
 * 388 · Does GetSibu Have an API? — /faq/does-getsibu-have-an-api
 *
 * Angle (cluster: api-platform): the direct yes, the three parts of that answer (REST API, webhooks, developer
 * tooling) and what applications can do with the API. GetSibu API (261) owns the overview, REST API (253)
 * and API-First DAM (254) the architecture, API Documentation (273) the docs, 262–267 each endpoint area.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of API design and integration practice in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 388,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "centered",
      eyebrow: "FAQ",
      lede: "The short answer on the GetSibu API, what its REST API, webhooks and developer tooling each refer to, and what developers can build against the asset platform.",
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 388 }],
    },
    {
      kind: "definition",
      id: "short-answer",
      eyebrow: "Short answer",
      term: "Does GetSibu Have an API?",
      answer: "Yes. GetSibu is positioned as an API-first DAM and provides REST API capabilities, webhooks and developer tooling.",
      detail: "The API gives developers and technology teams programmatic access to the digital asset platform. Because the architecture is API-first, developers interact with the same platform capabilities that the GetSibu interface uses.",
      sources: [{ kind: "pdf", page: 388 }, { kind: "pdf", page: 261 }, { kind: "pdf", page: 253 }],
    },
    {
      kind: "overview",
      id: "longer-answer",
      heading: "An asset system designed to be reached by software",
      body: [
        "API-first describes the order in which a platform is designed. GetSibu is built as an API-first digital asset management platform, which allows organisations to build custom experiences around the underlying asset system instead of working only through the product’s own interface.",
        "For a technology team the difference is practical. An API added to a product after its interface tends to trail behind it, exposing some actions late or not at all. Designing the API first is meant to keep that gap from opening in the first place.",
        [
          "Developers can start with ",
          { text: "GetSibu for Developers", page: 280 },
          ", which frames the platform for organisations integrating asset management into existing software, or go straight to the ",
          { text: "GetSibu API", page: 261 },
          " overview.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["API-first design", "REST API capabilities", "Webhook events", "Developer tooling", "Authenticated access"],
      },
      highlight: {
        heading: "In practice",
        body: "Before committing to a build, a developer lists every step the integration needs, from sending a file in to reading its metadata, and checks each one against the API documentation.",
        tags: ["Developers", "Planning", "Integrations"],
      },
      glance: {
        heading: "The API in brief",
        facts: [
          { label: "Area", value: "Developers" },
          { label: "Positioning", value: "API-First DAM", page: 254 },
          { label: "Answer covers", value: "REST API, webhooks, developer tooling" },
        ],
        actions: [{ kind: "route", path: "/faq", label: "More in FAQs" }]
      },
      sources: [{ kind: "pdf", page: 388 }, { kind: "pdf", page: 254 }, { kind: "pdf", page: 280 }, { kind: "pdf", page: 261 }, { kind: "pdf", page: 279 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "three-parts",
      eyebrow: "The three parts of the answer",
      heading: "REST API, webhooks and developer tooling",
      tabs: [
        {
          label: "REST API",
          heading: "Requests your applications send",
          icon: "api",
          body: [
            "The REST API is the route by which an application calls into GetSibu, whether to add something, find something or read information about it.",
            "REST is a widely used style for web APIs, in which applications work with named resources through standard web requests. Developers who have built against other REST APIs will recognise the approach.",
          ],
          points: ["Calls made by your software", "A widely used style of web API"],
          link: { page: 253, label: "REST API" },
        },
        {
          label: "Webhooks",
          heading: "Events sent out when something happens",
          icon: "webhook",
          body: [
            "Webhooks work in the opposite direction. Rather than an application repeatedly asking whether anything has changed, webhook events can trigger downstream workflows when assets, comments, approvals or other supported events occur.",
            "That suits processes that should follow an event in the library. Approval events, for example, can be incorporated into external production and workflow systems.",
          ],
          points: ["Events pushed to other systems", "Assets, comments and approvals"],
          link: { page: 257, label: "Webhook Automation" },
        },
        {
          label: "Tooling",
          heading: "What helps developers build",
          icon: "book",
          body: [
            "Tooling covers what a developer needs around the API itself. API documentation provides the information required to build integrations against the platform.",
            "Requests are authenticated, with developers using supported authentication credentials for their API calls.",
          ],
          points: ["Documentation for building integrations", "Authenticated requests"],
          link: { page: 273, label: "API Documentation" },
        },
      ],
      sources: [{ kind: "pdf", page: 253 }, { kind: "pdf", page: 255 }, { kind: "pdf", page: 262 }, { kind: "pdf", page: 263 }, { kind: "pdf", page: 264 }, { kind: "pdf", page: 257 }, { kind: "pdf", page: 267 }, { kind: "pdf", page: 273 }, { kind: "pdf", page: 275 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "what-applications-can-do",
      eyebrow: "What it reaches",
      heading: "What applications can do with the GetSibu API",
      items: [
        {
          heading: "Send files in",
          body: "The asset upload API allows external applications to send files into the GetSibu environment.",
          icon: "upload",
          page: 262,
        },
        {
          heading: "Search from elsewhere",
          body: "Asset search can be built into custom interfaces and workflows, so people can reach library content from inside the software they already use.",
          icon: "search",
          page: 263,
        },
        {
          heading: "Work with metadata",
          body: "The API can expose asset information, letting external systems handle metadata programmatically.",
          icon: "database",
          page: 264,
        },
        {
          heading: "Handle tags",
          body: "Developers can bring asset tagging workflows into their own custom applications.",
          icon: "tag",
          page: 265,
        },
        {
          heading: "Follow the conversation",
          body: "Comment-related events can support custom collaboration workflows around the assets a team discusses.",
          icon: "message",
          page: 266,
        },
        {
          heading: "Automate repetitive work",
          body: "APIs and webhooks give developers a way to automate the repetitive parts of asset management.",
          icon: "zap",
          page: 278,
        },
      ],
      sources: [{ kind: "pdf", page: 262 }, { kind: "pdf", page: 263 }, { kind: "pdf", page: 264 }, { kind: "pdf", page: 265 }, { kind: "pdf", page: 266 }, { kind: "pdf", page: 278 }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Follow-up questions about the GetSibu API",
      items: [
        {
          question: "Is the GetSibu API built for heavy integration workloads?",
          answer: [
            "It is designed with them in mind. The ",
            { text: "API layer is designed to scale independently", page: 315 },
            " to support application and integration workloads, and a stateless API architecture can support horizontal scaling and predictable application behaviour.",
          ],
        },
        {
          question: "How are API tokens protected in GetSibu?",
          answer: [
            "API tokens, along with OAuth credentials and SMTP passwords, can be protected using ",
            { text: "encrypted secret storage", page: 323 },
            ". More broadly, API security is treated as an important part of protecting automated access to creative assets.",
          ],
        },
        {
          question: "Where does the API sit in GetSibu’s architecture?",
          answer: [
            "It is one layer of a ",
            { text: "layered architecture", page: 301 },
            " made up of clients, edge services, APIs, search infrastructure and storage.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 315 }, { kind: "pdf", page: 316 }, { kind: "pdf", page: 323 }, { kind: "pdf", page: 277 }, { kind: "pdf", page: 301 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More for developers",
      variant: "compact",
      pages: [261, 253, 254, 273, 257, 280],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Start Your Creative Library",
      conversionPage: 391,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 391 }],
    },
  ],
};

export default page;
