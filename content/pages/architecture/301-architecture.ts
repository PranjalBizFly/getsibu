/**
 * 301 · GetSibu Architecture — /architecture (section root)
 *
 * Angle (cluster: architecture-infrastructure, primary): the layered architecture itself — clients, edge services,
 * APIs, search infrastructure and storage, what each layer is responsible for, and the ideas that make the rest of
 * the category readable (design intent versus measured results, scaling out, delivery copies versus stored
 * originals, observability). The template adds the section's areas and the list of child topics, so this page has
 * no capabilities grid of children and no related strip. No technologies, regions, figures or service levels.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of layered platform design in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 301,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Architecture & Performance",
      lede: "Understand the five layers GetSibu is built around, what each one is responsible for, and how the design aims to keep search, previews and uploads responsive as a creative library grows.",
      visual: { diagram: "architecture-stack" },
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 301 }, { kind: "pdf", page: 302 }, { kind: "pdf", page: 320 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Five layers, each responsible for one part of the platform",
      body: [
        "GetSibu is built around a layered architecture made up of clients, edge services, APIs, search infrastructure and storage. Each layer carries one kind of responsibility, from the applications people and systems use to reach a library down to the infrastructure that holds its creative content.",
        "Layering matters for creative work because the demands on a library are so uneven. A reviewer scrubbing through a long cut, an integration sending a steady stream of searches, an editor adding a day of rushes and a collection that swells after a migration each stress a system in a different way. When responsibilities are separated, each of those demands can be designed for and investigated in its own place instead of competing inside one undivided application.",
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Clients and integrations", "Edge services for delivery", "A stateless API tier", "Text and embedding-based search", "Object storage partitioned by organisation", "Monitoring by platform operators"],
      },
      highlight: {
        heading: "In practice",
        body: "When a preview feels slow for a reviewer abroad, a layered design lets the investigation start with the layer that delivers media rather than with the whole platform at once.",
        tags: ["IT teams", "Developers", "Platform operators"],
      },
      glance: {
        heading: "The architecture in brief",
        facts: [
          { label: "Area", value: "Architecture & Performance" },
          { label: "Layers", value: "Clients, edge services, APIs, search infrastructure, storage" },
          { label: "API tier", value: "Stateless, designed to scale independently" },
          { label: "Designed for", value: "Large collections of creative content" },
        ],
      },
      sources: [{ kind: "pdf", page: 301 }, { kind: "pdf", page: 315 }, { kind: "pdf", page: 316 }, { kind: "pdf", page: 317 }, { kind: "pdf", page: 318 }, { kind: "pdf", page: 302 }, { kind: "pdf", page: 319 }, EXPLAINS],
    },
    {
      kind: "layers",
      id: "layers",
      eyebrow: "How the parts fit together",
      heading: "What each layer contributes, from clients to storage",
      intro: "The applications people use sit at the top of the stack; the creative content itself is held at the bottom.",
      layers: [
        {
          label: "Clients",
          body: "Organisations reach their creative libraries through supported clients and integrations. The interface is one of those clients, because GetSibu’s API-first design gives developers the same platform capabilities the interface uses.",
          page: 303,
        },
        {
          label: "Edge services",
          body: "CDN delivery helps provide fast access to previews and media around the world, and edge caching reduces the distance between users and the content they open most often.",
          page: 304,
        },
        {
          label: "APIs",
          body: "The API layer is designed to scale independently to support application and integration workloads, and its stateless design can support horizontal scaling and predictable application behaviour.",
          page: 315,
        },
        {
          label: "Search infrastructure",
          body: "Text search is combined with embedding-based retrieval to support multiple discovery methods, so a search can work from exact words as well as from meaning.",
          page: 317,
        },
        {
          label: "Storage",
          body: "Creative content can be kept on object-storage infrastructure with organisational partitioning, and the architecture supports large amounts of digital content and storage growth.",
          page: 318,
        },
      ],
      sources: [{ kind: "pdf", page: 303 }, { kind: "pdf", page: 253 }, { kind: "pdf", page: 304 }, { kind: "pdf", page: 305 }, { kind: "pdf", page: 315 }, { kind: "pdf", page: 316 }, { kind: "pdf", page: 317 }, { kind: "pdf", page: 318 }, { kind: "pdf", page: 308 }],
    },
    {
      kind: "tabs",
      id: "readers",
      eyebrow: "Who it concerns",
      heading: "What the architecture means for the people assessing it",
      tabs: [
        {
          label: "IT and security",
          heading: "Boundaries, protection and where content is held",
          icon: "shield",
          body: [
            "IT teams tend to start with boundaries: how one organisation’s content is kept apart from another’s, how credentials are protected, and whether security was designed in or added around the edges later.",
            [
              { text: "Security in GetSibu", page: 321 },
              " is built into the architecture through encryption, authentication, access control, tenant isolation and audit logging. OAuth credentials, SMTP passwords and API tokens can be protected using encrypted secret storage.",
            ],
          ],
          points: ["Security designed into the architecture", "Encrypted storage for secrets"],
        },
        {
          label: "Developers",
          heading: "An API that is part of the platform, not bolted on",
          icon: "code",
          body: [
            "Developers want to know whether an API is a first-class route into a platform or a thin addition to an application built for something else.",
            [
              "Developers can use the API to integrate ",
              { text: "asset upload, search, collaboration and other supported workflows", page: 255 },
              " into custom applications. API requests use authenticated access, so external applications interact with the platform within appropriate security boundaries.",
            ],
          ],
          points: ["Upload, search and collaboration from custom applications", "Authenticated access for external applications"],
        },
        {
          label: "Library leads",
          heading: "A library that keeps working as it grows",
          icon: "database",
          body: [
            "Library and operations leads think in volumes: years of campaigns, a back catalogue waiting to be imported, more contributors every season.",
            "Their question is whether the platform keeps pace as that volume builds up. Performance considerations such as chunked I/O, edge caching and indexing help GetSibu support larger creative environments.",
          ],
          points: ["Chunked I/O, edge caching and indexing", "Designed with larger environments in mind"],
          link: { page: 309, label: "Large Library Performance" },
        },
        {
          label: "Creative teams",
          heading: "What the layers feel like from inside the library",
          icon: "users",
          body: [
            "Creative teams rarely think about architecture, yet they notice its effects every day: how soon a search answers, whether a long video can be checked without a download, whether a large upload survives a dropped connection.",
            "For them the layers are experienced as whole tasks rather than as components: bringing material in, finding it and checking it. A task feels only as quick as its slowest part, which is why the capabilities are judged together rather than one by one.",
          ],
          points: ["Architecture felt through everyday tasks", "Capabilities judged together"],
          link: { page: 320, label: "High-Performance DAM" },
        },
      ],
      sources: [{ kind: "pdf", page: 321 }, { kind: "pdf", page: 323 }, { kind: "pdf", page: 255 }, { kind: "pdf", page: 256 }, { kind: "pdf", page: 309 }, { kind: "pdf", page: 320 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "ideas",
      eyebrow: "Before choosing a topic",
      heading: "Four ideas that run through a layered platform",
      items: [
        {
          heading: "Architecture describes design, not measured results",
          summary: "Statements about how a platform is built explain its structure and intent; they are not performance figures.",
          icon: "book",
          body: [
            "Phrases such as “designed to scale independently” or “designed around low-latency search” describe how a system is put together and what it is meant to achieve. They do not state response times, capacity figures or commitments, and none should be read into them.",
            "Where an evaluation depends on specific numbers, those are questions to put to a vendor directly.",
          ],
        },
        {
          heading: "Different work stresses different layers",
          summary: "Searching, previewing and uploading each lean on a different part of the stack.",
          icon: "layers",
          body: [
            "In a layered platform, a search is mostly work for the search layer: finding candidate matches in prepared information and ranking them. A preview is mostly a delivery problem, moving media from where it is stored to the person watching. An upload travels the other way, and its main risk is a long transfer failing partway through.",
            "Keeping those concerns apart means a slowdown in one of them can be traced to a specific place.",
          ],
        },
        {
          heading: "Separation between organisations runs through the stack",
          summary: "In a multi-tenant platform, isolation is a property of every layer rather than a single gate.",
          icon: "building",
          body: [
            "When several organisations share one platform, keeping their content apart cannot rest on a single check at the entrance. Each request, each stored object and each lookup needs to carry the organisation it belongs to, so that no layer can mix one tenant’s assets with another’s.",
            ["GetSibu’s architecture is designed around ", { text: "tenant-scoped data access", page: 324 }, ", the principle that multi-tenant organisations need strict separation between customer environments."],
          ],
        },
        {
          heading: "Operators need to see inside the system",
          summary: "With several layers involved in one request, a problem can start anywhere along the path.",
          icon: "gauge",
          body: [
            "Operators therefore need signals that let them follow work from one layer to the next and see where time or errors accumulate.",
            [
              "In GetSibu, ",
              { text: "observability", page: 319 },
              " allows platform operators to monitor application and infrastructure behaviour.",
            ],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 315 }, { kind: "pdf", page: 307 }, { kind: "pdf", page: 324 }, { kind: "pdf", page: 319 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about the GetSibu architecture",
      items: [
        {
          question: "Where do integrations connect in the GetSibu architecture?",
          answer: [
            "At the top of the stack, alongside other clients. ",
            { text: "GetSibu integrations", page: 241 },
            " connect with tools teams already use, and organisations can request integrations for tools that are not yet part of the supported ecosystem.",
          ],
        },
        {
          question: "What happens in the GetSibu architecture after an asset is uploaded?",
          answer: [
            "Background processing allows the asset to be indexed without anyone carrying out metadata or AI processing by hand, and the ",
            { text: "AI processing queue", page: 144 },
            " shows whether it is queued, processing or ready.",
          ],
        },
        {
          question: "Does a layered architecture mean GetSibu is several separate products?",
          answer: "No. The layers are parts of one platform, each responsible for one kind of work, and the people and applications using a library reach all of them through the clients at the top of the stack.",
        },
      ],
      sources: [{ kind: "pdf", page: 241 }, { kind: "pdf", page: 260 }, { kind: "pdf", page: 311 }, { kind: "pdf", page: 144 }, EXPLAINS],
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
