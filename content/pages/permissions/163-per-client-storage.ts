/**
 * 163 · Per-Client Storage — /permissions/per-client-storage
 *
 * Angle (cluster: multi-tenancy): storage as a per-client matter — each client environment with its own storage
 * allocation and asset boundaries — and how agencies plan for clients with very different footprints. Multi-Tenant
 * DAM (160) owns the overview, Client Tenant Isolation (161) logical isolation, Per-Client AI Keys (164) and
 * Authentication (165) other per-client configuration. PDF wording only: no quotas, limits, alerts, billing or
 * per-client analytics are claimed; storage analytics are described at library level.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of planning storage for client libraries; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 163,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Permissions & Multi-Tenancy",
      lede: "Why giving each client environment its own storage allocation and asset boundaries helps an agency plan storage one client at a time and keep every client’s assets within clear edges.",
      visual: { diagram: "tenant-boundaries", focus: "tenants" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 163 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Storage considered one client at a time",
      body: [
        "Per-client storage means that each client environment in GetSibu can be given a storage allocation and asset boundaries of its own. Storage is no longer a single pool shared by every client; it becomes something an agency can think about client by client.",
        "Clients use storage in very different ways. A broadcast client can deliver more raw footage in one production than a professional services client creates in years of presentations and photography. When all of it sits in one pool, the heaviest client dominates everyone’s picture of the library, and nobody can easily say how much storage a particular relationship depends on.",
        [
          "Allocation is a planning question as much as a technical one. At the infrastructure level, GetSibu’s ",
          { text: "storage architecture", page: 318 },
          " describes object-storage infrastructure with organisational partitioning.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["A storage allocation per client environment", "Asset boundaries around each library", "Clients with very different footprints", "Planning storage client by client", "One way of keeping clients distinct"],
      },
      highlight: {
        heading: "In practice",
        body: "A video production client and a consultancy client can each have their own storage allocation, so the first client’s footage is planned for separately from the second client’s decks.",
        tags: ["Agencies", "Storage", "Clients"],
      },
      glance: {
        heading: "Per-client storage in brief",
        facts: [
          { label: "Area", value: "Permissions & Multi-Tenancy" },
          { label: "Per client", value: "Storage allocation and asset boundaries" },
          { label: "Separation", value: "Client Tenant Isolation" },
          { label: "Library-wide view", value: "Storage Analytics" },
        ],
        actions: [{ kind: "route", path: "/permissions", label: "More in Permissions & Multi-Tenancy" }]
      },
      sources: [{ kind: "pdf", page: 163 }, { kind: "pdf", page: 161 }, { kind: "pdf", page: 318 }, { kind: "pdf", page: 183 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "client-types",
      eyebrow: "By client type",
      heading: "How storage needs differ from client to client",
      tabs: [
        {
          label: "Video-heavy",
          heading: "Clients whose work is built on footage",
          icon: "video",
          body: [
            "Production clients bring camera originals, rushes and many cuts of every film. Their storage tends to grow in large steps around each shoot rather than steadily.",
            "Retention decisions weigh most here: rushes that will never be used again take up as much space as the footage that will.",
          ],
          points: ["Growth in large steps", "Retention decisions that matter"],
        },
        {
          label: "Image-heavy",
          heading: "Clients whose work is built on photography",
          icon: "camera",
          body: [
            "Product and fashion clients generate large numbers of very similar images: every angle, every colourway, every retouched and unretouched variant.",
            ["Much of that volume is repetition, which is where ", { text: "duplicate asset management", page: 112 }, " helps, identifying unnecessary copies and supporting storage optimisation."],
          ],
          points: ["Many near-identical frames", "Unnecessary copies worth finding"],
        },
        {
          label: "Document-heavy",
          heading: "Clients whose work is built on decks and documents",
          icon: "document",
          body: [
            "Consultancies and corporate clients produce presentations, reports and brand guidelines. The asset count can be high while the storage used stays comparatively modest.",
            ["Looking at ", { text: "storage by category", page: 192 }, " across video, image, document and audio helps explain how differently a document-heavy library uses space compared with one full of footage."],
          ],
          points: ["Many assets, modest storage", "Long-lived reference material"],
        },
        {
          label: "Long-running",
          heading: "Clients with years of accumulated history",
          icon: "archive",
          body: [
            "Clients who have worked with an agency for many years carry old campaigns that still matter for reference but rarely for daily work.",
            [{ text: "Asset archiving", page: 108 }, " provides a way to retain that historical content without letting it interfere with everyday asset discovery."],
          ],
          points: ["History kept for reference", "Current work left uncluttered"],
        },
      ],
      sources: [{ kind: "pdf", page: 112 }, { kind: "pdf", page: 192 }, { kind: "pdf", page: 108 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "pool-versus-allocation",
      eyebrow: "Side by side",
      heading: "A shared storage pool compared with per-client allocation",
      columns: ["One pool for every client", "Per-client storage in GetSibu"],
      emphasis: 1,
      rows: [
        ["Where a client’s assets sit", "Alongside every other client’s", "Within that client’s asset boundaries"],
        ["Planning for a new client", "Guesswork about the whole pool", "An allocation considered for that client"],
        ["A client with heavy footage", "Shapes the picture for everyone", "Accounted for within its own allocation"],
        ["Discussing storage with a client", "Hard to relate to their work", "Tied to their own environment"],
      ],
      sources: [{ kind: "pdf", page: 163 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "planning",
      eyebrow: "Considerations",
      heading: "Planning storage for each client",
      items: [
        {
          heading: "Estimate from the material, not the client’s size",
          summary: "A small client with a video habit can need more storage than a large one that works in documents.",
          icon: "gauge",
          body: [
            "Ask what the client actually produces and keeps: how much footage, how many shoots, how long material must be retained. Those answers predict storage far better than headcount or budget.",
          ],
        },
        {
          heading: "Expect growth to be uneven",
          summary: "Client storage often jumps around campaigns and productions rather than rising smoothly.",
          icon: "trend",
          body: [
            "A quiet quarter followed by a major launch is normal. Plan for the peaks in each client’s calendar, not the average, and ask about productions that are coming rather than only those already delivered.",
          ],
        },
        {
          heading: "Agree the end of an asset’s life early",
          summary: "Storage is easier to manage when retention has been discussed before it becomes a problem.",
          icon: "clock",
          body: [
            ["Decide with the client how long material should be kept and when it can go. GetSibu can support ", { text: "the asset lifecycle", page: 101 }, " from initial upload to review, approval, reuse and eventual deletion."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 101 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about per-client storage",
      items: [
        {
          question: "Is per-client storage the same as client tenant isolation?",
          answer: ["They are related but answer different questions. ", { text: "Client tenant isolation", page: 161 }, " is about keeping client environments logically apart; per-client storage is about each environment’s allocation and the boundaries of its library."],
        },
        {
          question: "Why do asset boundaries matter as much as the storage allocation?",
          answer: "An allocation answers how much; a boundary answers where a client’s library ends. That second answer keeps planning, housekeeping and conversations about storage tied to the client’s own material.",
        },
        {
          question: "When should a client’s storage be revisited?",
          answer: ["Whenever the shape of the client’s work changes: a first video production, a new product range or the end of a long campaign. ", { text: "Storage growth analytics", page: 149 }, " provide historical context about how quickly a creative library is expanding, which is sounder evidence than memory."],
        },
      ],
      sources: [{ kind: "pdf", page: 161 }, { kind: "pdf", page: 163 }, { kind: "pdf", page: 149 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on storage for client libraries",
      variant: "compact",
      pages: [160, 162, 318, 183],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the multi-tenancy overview." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Give Your Creative Team One Source of Truth",
      conversionPage: 395,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 395 }],
    },
  ],
};

export default page;
