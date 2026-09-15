/**
 * 315 · API Scalability — /architecture/api-scalability
 *
 * Angle (cluster: architecture-infrastructure): the API layer scaling independently, and the two kinds of
 * workload it serves — people working through applications and software running integrations — with what
 * independent scaling does and does not solve, and how integrations can behave well at volume. Stateless API
 * Architecture (316) owns statelessness and horizontal scaling; GetSibu Architecture (301) owns the layers as a
 * whole. No deployment details, autoscaling specifics, rate limits or figures.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of API workloads and scaling practice in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 315,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Architecture & Performance",
      lede: "Understand what it means for GetSibu’s API layer to scale on its own, why people working in applications and software running integrations place such different demands on it, and how to build integrations that behave well at volume.",
      visual: { diagram: "architecture-stack", focus: "api" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 315 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A request layer that grows with the software calling it",
      body: [
        "The API layer in GetSibu is designed to scale independently, supporting both the workloads of applications and those of integrations. In architectural terms, the layer that receives requests can be scaled on its own, rather than only alongside storage or search.",
        "The distinction matters because requests do not rise in step with the size of a library. A modest collection can attract heavy traffic when several systems synchronise with it, while a very large archive can receive little. A design that could only add request capacity by adding storage, or the reverse, would always be oversized in one respect and short in the other.",
        [
          "Integration traffic has many sources. Organisations build ",
          { text: "custom applications", page: 279 },
          " around the GetSibu asset infrastructure, and developers use APIs to ",
          { text: "automate repetitive asset management workflows", page: 278 },
          ". Why statelessness matters when servers are added is explained under ",
          { text: "stateless API architecture", page: 316 },
          ".",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["One layer scaled on its own", "People and software as callers", "Bursts from scheduled jobs", "Bottlenecks that move downstream", "Integrations that behave well"],
      },
      highlight: {
        heading: "In practice",
        body: "A retailer’s overnight catalogue sync and a designer’s first search of the morning place very different demands on a request layer. Being able to scale that layer on its own is one way platforms keep the first from getting in the way of the second.",
        tags: ["Developers", "IT teams", "Integrations"],
      },
      glance: {
        heading: "API scalability in brief",
        facts: [
          { label: "Area", value: "Architecture & Performance" },
          { label: "Scales", value: "Independently of other layers" },
          { label: "Serves", value: "Application and integration workloads" },
          { label: "Programmatic access", value: "GetSibu API", page: 261 },
        ],
        actions: [{ kind: "route", path: "/architecture", label: "More in Architecture & Performance" }]
      },
      sources: [{ kind: "pdf", page: 315 }, { kind: "pdf", page: 279 }, { kind: "pdf", page: 278 }, { kind: "pdf", page: 316 }, { kind: "pdf", page: 261 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "workloads",
      eyebrow: "Two kinds of traffic",
      heading: "How application and integration workloads differ",
      intro: "General characteristics of the traffic an API-first platform receives from each kind of caller.",
      columns: ["Application workloads", "Integration workloads"],
      rows: [
        { label: "Who is calling", cells: ["People working through an interface", "Software acting on its own schedule"] },
        { label: "Pace of requests", cells: ["Human pace, many small actions", "Machine pace, often in large batches"] },
        { label: "Shape across a day", cells: ["Follows working hours in each time zone", "Bursts at scheduled times or after events"] },
        { label: "What matters most", cells: ["A prompt response to each action", "Getting through a volume of work dependably"] },
        { label: "When capacity runs short", cells: ["Someone notices straight away", "Jobs back up and finish late"] },
        { label: "Typical requests", cells: ["Searching, previewing, commenting", "Bulk uploads, metadata updates, synchronisation"] },
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "accordion",
      id: "what-it-solves",
      eyebrow: "Scope and limits",
      heading: "What scaling the API layer by itself does and does not solve",
      items: [
        {
          heading: "The bottleneck can move further in",
          summary: "More request capacity sends more work to the layers behind it.",
          body: [
            "An API layer mostly passes work on: queries go to search, files and records go to storage. Adding request capacity lets more of that work through, and if the layers behind cannot keep pace, the slowdown simply appears one step further in.",
            "When evaluating any platform, it is fair to ask how search and storage cope with the traffic an expanded request layer allows through.",
          ],
          icon: "layers",
        },
        {
          heading: "Long jobs should not hold requests open",
          summary: "Requests that start heavy work are best answered quickly and finished elsewhere.",
          body: [
            "A request that stays open while a large job completes ties up capacity that could answer many quick requests. The common pattern is to accept the work, reply promptly, and let the job continue in the background with a way to check on it.",
            "That pattern keeps request handling light, which is what makes adding capacity to it effective in the first place.",
          ],
          icon: "clock",
        },
        {
          heading: "Shared capacity needs fairness",
          summary: "One aggressive integration should not crowd out everyone else.",
          body: [
            "When many callers share a layer, a single misconfigured script can generate more traffic than a whole department of people. Platforms in general protect shared capacity with measures such as request limits, and integrations designed for volume expect to meet them.",
            "Whether and how such limits apply is worth confirming with any vendor before building a high-volume integration, so the design can account for them from the start.",
          ],
          icon: "users",
        },
        {
          heading: "Organisation boundaries travel with each request",
          summary: "Adding capacity must never blur the separation between tenants.",
          body: [
            ["In a multi-tenant platform, whichever part of the layer handles a request has to know which organisation it belongs to. GetSibu’s ", { text: "API access can include tenant context", page: 276 }, " so that multi-tenant environments remain properly separated."],
          ],
          icon: "shield",
        },
      ],
      sources: [{ kind: "pdf", page: 276 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "integration-practice",
      eyebrow: "For developers",
      heading: "Habits that keep an integration dependable at volume",
      tabs: [
        {
          label: "Batching",
          heading: "Break bulk work into measured batches",
          icon: "upload",
          body: [
            "A migration script or a catalogue sync can generate an enormous number of requests. Sending them all at once invites errors and makes failures hard to untangle; sending them in batches, and checking the results of each before starting the next, keeps the job understandable.",
            ["The ", { text: "asset upload API", page: 262 }, " lets external applications send files into GetSibu, and bulk sends are exactly where measured batches pay off."],
          ],
          points: ["Results checked batch by batch", "Failures easier to isolate"],
        },
        {
          label: "Retries",
          heading: "Expect transient failures and back off",
          icon: "refresh",
          body: [
            "Any networked system produces occasional failures that succeed on a second attempt. Retrying immediately and repeatedly, from many workers at once, can turn a brief problem into a flood.",
            "The usual remedy is exponential backoff: wait a little before the first retry and progressively longer after each failure, with some randomness so that many clients do not retry in lockstep.",
          ],
          points: ["Progressively longer waits", "Randomness to avoid retries in lockstep"],
        },
        {
          label: "Events",
          heading: "React to changes instead of asking repeatedly",
          icon: "webhook",
          body: [
            "Polling means asking again and again whether anything has changed, and most of the answers are no. It generates steady load for little result, and the load grows with every integration that polls.",
            ["Event-driven designs avoid that. ", { text: "Webhook automation", page: 257 }, " lets events for assets, comments, approvals and other supported activity trigger downstream workflows when they occur."],
          ],
          points: ["Less load from unchanged answers", "Work triggered when something happens"],
        },
        {
          label: "Planning",
          heading: "Read before building for volume",
          icon: "book",
          body: [
            ["High-volume integrations are cheaper to design correctly than to fix after launch. ", { text: "API documentation", page: 273 }, " gives developers the information required to build integrations against the platform, and requests are made with ", { text: "supported authentication credentials", page: 275 }, "."],
            "Where a platform allows separate credentials for separate integrations, using them makes it easier to see which system is responsible for a surge and to change one without disturbing the rest.",
          ],
          points: ["Design informed by the documentation", "Integrations distinguishable from one another"],
        },
      ],
      sources: [{ kind: "pdf", page: 262 }, { kind: "pdf", page: 257 }, { kind: "pdf", page: 273 }, { kind: "pdf", page: 275 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about API scalability",
      items: [
        {
          question: "Does API scalability matter to GetSibu users who never touch the API?",
          answer: ["Yes. GetSibu’s ", { text: "API-first architecture", page: 253 }, " means developers interact with the same platform capabilities that the interface uses, so the layer carrying integration traffic also carries everyday work in the library."],
        },
        {
          question: "Does a scalable API layer make each request faster?",
          answer: "Not by itself. Scaling adds room for more requests at once, while the time any single request takes still depends on the work behind it, such as a search or a file transfer. That is why capacity and latency are judged separately.",
        },
        {
          question: "How does API scalability relate to the GetSibu API itself?",
          answer: ["The ", { text: "GetSibu API", page: 261 }, " provides programmatic access to the digital asset platform for developers and technology teams. Scalability describes how the layer answering those requests is designed to grow, not what the API offers."],
        },
      ],
      sources: [{ kind: "pdf", page: 253 }, { kind: "pdf", page: 261 }, { kind: "pdf", page: 315 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on the API layer and integrations",
      variant: "compact",
      pages: [316, 261, 253, 257, 276, 301],
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
