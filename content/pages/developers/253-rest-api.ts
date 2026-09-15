/**
 * 253 · REST API — /developers/rest-api
 *
 * Angle (cluster: api-platform): the architecture the interface itself uses — GetSibu's API-first REST API, with
 * the interface as one client among many, plus the REST ideas an evaluator needs to read it. API-First DAM (254)
 * owns building custom experiences; Developer API (255) owns which workflows developers integrate; GetSibu API
 * (261) the overview; Custom Asset Applications (279) whole applications. No endpoints, request examples,
 * versions, rate limits, client libraries, specifications or test consoles.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of REST and API-first design in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 253,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "API & Developers",
      lede: "Understand the REST API behind GetSibu: the REST ideas worth knowing before building against it, and what sharing one API with the product’s own interface means for developers, architects and security teams.",
      visual: { diagram: "api-flow" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 253 }, { kind: "pdf", page: 388 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "The interface is one client of the API, not the only one",
      body: [
        "GetSibu provides an API-first architecture, so developers interact with the same platform capabilities that its interface uses.",
        "REST is an architectural style for web APIs that builds on the conventions of HTTP rather than inventing its own. Because those conventions are widely understood, a developer can bring general experience to a new platform, while still relying on that platform’s documentation for the specifics.",
        [
          "The API is one layer of ",
          { text: "GetSibu’s layered architecture", page: 301 },
          ", which also takes in clients, edge services, search infrastructure and storage.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["API-first architecture", "The interface as one client", "Resources and standard methods", "Self-contained, stateless requests", "An API layer among other layers"],
      },
      glance: {
        heading: "The REST API in brief",
        facts: [
          { label: "Area", value: "API & Developers" },
          { label: "Design", value: "API-first" },
          { label: "Also used by", value: "The GetSibu interface" },
          { label: "Part of", value: "GetSibu Architecture", page: 301 },
        ],
        actions: [{ kind: "route", path: "/developers", label: "More in Developers" }]
      },
      sources: [{ kind: "pdf", page: 253 }, { kind: "pdf", page: 301 }, EXPLAINS],
    },
    {
      kind: "before-after",
      id: "api-first",
      eyebrow: "Why API-first matters",
      heading: "An API added later compared with one the interface is built on",
      beforeLabel: "API added after the interface",
      afterLabel: "API-first, as in GetSibu",
      before: ["Some actions may exist only for people using the product", "Integrations wait for features to be exposed", "Automation imitates what people do by hand", "Two routes into the platform that can drift apart"],
      after: ["Fewer actions reserved for people using the product", "The interface is one of many possible clients", "Automation that works with the platform rather than imitating people", "One API behind the product and your own tools"],
      surface: "muted",
      sources: [{ kind: "pdf", page: 253 }, { kind: "pdf", page: 261 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "rest-ideas",
      eyebrow: "Key terms",
      heading: "REST ideas worth knowing before building",
      items: [
        {
          heading: "Resources",
          summary: "Each thing the system manages is addressed as a resource.",
          icon: "database",
          body: [
            "In a REST API, a resource is anything a client can refer to: a single item, a collection of items, or something attached to an item. In a creative library the obvious candidates are files, the discussion around them and where they stand in review.",
            "Which resources a particular API exposes, and what each one contains, is a question for its documentation rather than for assumptions carried over from other products.",
          ],
        },
        {
          heading: "Methods",
          summary: "Standard HTTP methods separate reading from changing.",
          icon: "code",
          body: [
            "HTTP defines methods with agreed meanings. A read should never change anything, which makes it safe to repeat. Some changes are idempotent, so sending the same request twice leaves the same result; others create something new each time.",
            "Knowing which kind a request is tells a developer what can be retried safely after a network error and what needs checking first.",
          ],
        },
        {
          heading: "Statelessness",
          summary: "Each request stands on its own.",
          icon: "server",
          body: [
            ["A stateless server keeps no memory of a client between requests, so each request has to identify who is asking and what it wants. That lets any instance of a service answer any request, and ", { text: "a stateless API architecture", page: 316 }, " can support horizontal scaling and predictable application behaviour."],
          ],
        },
        {
          heading: "Representations",
          summary: "A client receives a description of a resource, not the resource itself.",
          icon: "document",
          body: [
            "When a client reads a resource, the server returns a representation of it: structured data describing its current state. Clients should rely on the fields they need and tolerate fields they do not recognise, which keeps an integration working as an API gains information over time.",
          ],
        },
        {
          heading: "Status codes",
          summary: "Every response says whether the request worked and, if not, where the problem lies.",
          icon: "flag",
          body: [
            "Responses carry a status code. Success, a problem with the request itself and a failure on the server side each call for different handling: carry on, correct and resend, or wait and try again.",
            ["Authentication failures are one case to plan for, since ", { text: "API requests use authenticated access", page: 256 }, " so that external applications work within appropriate security boundaries."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 316 }, { kind: "pdf", page: 256 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "evaluators",
      eyebrow: "Who it concerns",
      heading: "What an API-first REST API means to each evaluator",
      tabs: [
        {
          label: "Developers",
          heading: "Real tasks carried out by software",
          icon: "code",
          body: [
            "For a developer, the first test of any API is coverage: whether software can carry out the tasks people perform in the product, or only a convenient subset of them.",
            ["With GetSibu, developers can ", { text: "integrate asset upload, search, collaboration and other supported workflows", page: 255 }, " into custom applications, so the test starts from those everyday tasks."],
          ],
          points: ["Coverage checked against real tasks", "Upload, search and collaboration workflows"],
        },
        {
          label: "Architects",
          heading: "A layer that can grow with integration traffic",
          icon: "layers",
          body: [
            "Software rarely uses a platform the way people do. A batch job arrives in bursts, a synchronisation runs steadily through the night, and a busy campaign adds both at once.",
            ["The ", { text: "API layer is designed to scale independently", page: 315 }, " to support application and integration workloads, which is the property architects look for when integration traffic grows."],
          ],
          points: ["Bursty and steady workloads", "Scaling designed into the API layer"],
        },
        {
          label: "IT and security",
          heading: "Separation and protection for automated access",
          icon: "shield",
          body: [
            "Security teams ask whether software reaching the platform stays inside the same boundaries as the organisation it belongs to, and how the secrets it relies on are kept.",
            ["In multi-tenant environments, ", { text: "API access can include tenant context", page: 276 }, " so those environments remain properly separated, and API tokens can be protected using encrypted secret storage."],
          ],
          points: ["Tenant context on API access", "Encrypted storage for API tokens"],
        },
      ],
      sources: [{ kind: "pdf", page: 255 }, { kind: "pdf", page: 315 }, { kind: "pdf", page: 276 }, { kind: "pdf", page: 323 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about the GetSibu REST API",
      items: [
        {
          question: "Is the GetSibu REST API meant only for developers?",
          answer: ["It is aimed at people who write software. The ", { text: "GetSibu API", page: 261 }, " provides programmatic access to the platform for developers and technology teams, while people who do not write software work with the platform through the GetSibu interface."],
        },
        {
          question: "Does an application have to keep asking the REST API whether anything has changed?",
          answer: ["Not only that. GetSibu offers webhooks alongside its REST API capabilities and developer tooling, so software can also be told when something happens, which is where ", { text: "webhook automation", page: 257 }, " comes in."],
        },
        {
          question: "Where should a developer confirm what the GetSibu REST API covers?",
          answer: [{ text: "API documentation", page: 273 }, " provides the information developers need to build integrations against the platform, so it is the place to confirm what a given workflow involves before writing code."],
        },
      ],
      sources: [{ kind: "pdf", page: 261 }, { kind: "pdf", page: 388 }, { kind: "pdf", page: 257 }, { kind: "pdf", page: 273 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on the GetSibu API",
      variant: "compact",
      pages: [254, 255, 261, 273, 301, 388],
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
