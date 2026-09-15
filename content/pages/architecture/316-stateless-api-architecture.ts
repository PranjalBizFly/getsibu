/**
 * 316 · Stateless API Architecture — /architecture/stateless-api-architecture
 *
 * Angle (cluster: architecture-infrastructure): what statelessness means and where state goes instead, how it
 * supports horizontal scaling and predictable behaviour, and the design details it depends on (credentials on each
 * request, shared records for long operations, safe retries, deployments). API Scalability (315) owns independent
 * scaling and workloads; GetSibu Architecture (301) owns scaling out versus scaling up. Explains the pattern in
 * general terms and never describes GetSibu's deployment.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of stateless service design in general; states no GetSibu capability or deployment detail beyond the cited pages." } as const;

const page: PageContent = {
  page: 316,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Architecture & Performance",
      lede: "Learn what a stateless API is, where the information a request depends on lives instead, and why keeping API servers free of remembered state can support both horizontal scaling and behaviour that stays consistent from one request to the next.",
      visual: { diagram: "architecture-stack", focus: "api" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 316 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "API servers that keep nothing between requests",
      body: [
        "A stateless API architecture can support horizontal scaling and predictable application behaviour, and a stateless API tier is one of the layers in GetSibu’s architecture. The word describes the servers rather than the platform: a library plainly keeps its assets, comments and approvals, but no single API server holds on to anything from one request that a later request relies on.",
        "State is whatever a server must know to give the right answer: who is asking, what they did a moment ago, how far a longer operation has got. A stateful server keeps some of that in its own memory or on its own disk, so a person’s next request has to find its way back to that same machine. A stateless server receives what it needs with the request or looks it up in stores shared by every server, so any server can answer any request.",
        [
          "That property is what lets a request layer scale horizontally. Rather than giving one server more processor and memory, which eventually meets the limit of the largest machine available, more servers are added to share the work. How GetSibu’s API layer is designed to scale on its own is covered under ",
          { text: "API scalability", page: 315 },
          ".",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["State kept out of individual servers", "Each request carries its own context", "Any server can answer", "Shared stores for what must last", "Servers replaceable without losing work"],
      },
      highlight: {
        heading: "In practice",
        body: "In a stateless design, if the server that answered someone’s last request is taken out of service, their next request is simply answered by another. Nothing about what they were doing lived only on the machine that went.",
        tags: ["Developers", "IT teams", "Reliability"],
      },
      glance: {
        heading: "Stateless design in brief",
        facts: [
          { label: "Area", value: "Architecture & Performance" },
          { label: "Supports", value: "Horizontal scaling" },
          { label: "Also supports", value: "Predictable application behaviour" },
          { label: "Part of", value: "GetSibu Architecture", page: 301 },
        ],
        actions: [{ kind: "route", path: "/architecture", label: "More in Architecture & Performance" }]
      },
      sources: [{ kind: "pdf", page: 316 }, { kind: "pdf", page: 301 }, { kind: "pdf", page: 315 }, EXPLAINS],
    },
    {
      kind: "layers",
      id: "where-state-lives",
      eyebrow: "Where state goes",
      heading: "Where information lives when API servers hold none",
      intro: "Statelessness moves state to places better suited to it; it does not make state disappear.",
      layers: [
        {
          label: "The client",
          body: "The application a person is using keeps track of the moment: the view in front of them, the query being refined, a comment not yet posted. It sends whatever the server needs to know with each request.",
        },
        {
          label: "The request",
          body: "Each request carries the context a server needs to act on it, such as the terms of a search or the part of a file being sent, so no server has to recall an earlier exchange.",
        },
        {
          label: "The API servers",
          body: "A server checks the request, does the work and replies. Anything it holds while doing so is temporary and discarded afterwards, so the next request can go to any server at all.",
        },
        {
          label: "Shared stores",
          body: "Everything that must persist, from asset records and search indexes to the stored files themselves, lives in services that every API server can reach. They are where the lasting state of the library is kept.",
          page: 318,
        },
      ],
      sources: [{ kind: "pdf", page: 318 }, EXPLAINS],
    },
    {
      kind: "before-after",
      id: "stateful-or-stateless",
      eyebrow: "The difference in operation",
      heading: "Running servers that remember compared with servers that do not",
      beforeLabel: "Stateful API servers",
      afterLabel: "Stateless API servers",
      before: [
        "Each person tied to the server holding their session",
        "A restart or failure loses work in progress",
        "New servers relieve only newly arriving sessions",
        "Load piles up unevenly on busy servers",
      ],
      after: [
        "Any request can go to any server",
        "A server can be replaced without losing sessions",
        "Added servers share the load straight away",
        "Traffic spreads more evenly across the layer",
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "accordion",
      id: "details",
      eyebrow: "Design details",
      heading: "What a stateless API depends on to work well",
      items: [
        {
          heading: "Identity proven with every request",
          summary: "Without a server-side session, each request has to show who is making it.",
          body: [
            "Stateful systems often log a user in once and remember them on the server. A stateless design cannot rely on that memory, so each request presents credentials that any server can verify independently.",
            ["The practical consequence for developers is simple: every call carries its authentication. In GetSibu, developers ", { text: "authenticate API requests", page: 275 }, " using supported authentication credentials."],
          ],
          icon: "key",
        },
        {
          heading: "Long operations keep their progress in shared records",
          summary: "Work that spans many requests needs somewhere lasting to record how far it has got.",
          body: [
            "Some tasks cannot fit in one request: a large file sent in parts, an import of many assets, a job that runs in the background. If the progress of such a task lived in one server’s memory, a different server receiving the next part would know nothing about it.",
            "Stateless designs record that progress in a shared store instead, so the task can continue whichever server handles each step.",
          ],
          icon: "history",
        },
        {
          heading: "Repeating a request must be harmless",
          summary: "Retries can arrive at any server, so they need to be safe to process twice.",
          body: [
            "Networks sometimes lose a reply after the work was done. The client, seeing no answer, sends the request again, and in a stateless layer the retry may reach a different server that has no memory of the first attempt.",
            "Operations designed to be idempotent produce the same result however many times they are repeated. Where that is not natural, as with creating something new, a unique key sent with the request lets a service recognise a repeat instead of creating a duplicate.",
          ],
          icon: "refresh",
        },
        {
          heading: "Shared stores carry the weight",
          summary: "Statelessness makes servers simple by relocating state, which then has to be looked up.",
          body: [
            "Every request that needs lasting information must fetch it from a shared store, and that adds work compared with reading the server’s own memory. The trade is usually worthwhile.",
            "Keeping each lookup efficient, and fetching only what a request actually needs, prevents that extra work from eroding the benefit.",
          ],
          icon: "database",
        },
        {
          heading: "Servers can be replaced one at a time",
          summary: "Replacing servers one at a time is straightforward when none of them holds sessions.",
          body: [
            "Updating software on stateful servers means waiting for sessions to finish or moving them elsewhere. With stateless servers, old instances can be withdrawn and new ones added gradually while traffic continues to flow.",
            "For a short period, old and new versions may answer requests side by side, so changes to how requests and responses are shaped need to remain compatible across that overlap. Designing for that is part of what keeps behaviour predictable from the outside.",
          ],
          icon: "server",
        },
      ],
      sources: [{ kind: "pdf", page: 275 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about stateless API architecture",
      items: [
        {
          question: "Does a stateless API mean the GetSibu library forgets what I was doing?",
          answer: ["No. Statelessness applies to individual API servers, not to the library. What matters is kept in shared stores, and ", { text: "asset history", page: 117 }, " gives users a record of relevant changes and interactions; it is simply not held in the memory of whichever server answers a given request."],
        },
        {
          question: "Is a stateless API the same thing as a REST API?",
          answer: ["They are related rather than identical. Statelessness between requests is one of the constraints that define the REST architectural style, while REST also covers how resources are identified and manipulated. GetSibu provides a ", { text: "REST API", page: 253 }, " as part of its API-first architecture."],
        },
        {
          question: "What does predictable application behaviour mean for a stateless API?",
          answer: "The outcome of a request depends on the request itself and the shared data behind it, not on which server received it or what that server handled earlier. That makes problems easier to reproduce and behaviour easier to test.",
        },
        {
          question: "Can a stateless API architecture still use caching?",
          answer: "Yes. Servers can keep local caches, provided that losing one costs only speed and never correctness. A cache that some requests silently depend on would reintroduce the very state the design set out to remove.",
        },
      ],
      sources: [{ kind: "pdf", page: 117 }, { kind: "pdf", page: 253 }, { kind: "pdf", page: 388 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on how the API tier is designed",
      variant: "compact",
      pages: [315, 301, 253, 275, 318],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Scale Your Creative Library",
      conversionPage: 397,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 397 }],
    },
  ],
};

export default page;
