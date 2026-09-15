/**
 * 318 · Storage Architecture — /architecture/storage-architecture
 *
 * Angle (cluster: architecture-infrastructure): object storage and organisational partitioning explained in general
 * terms — what an object store is, how it differs from a file share, and what dividing stored content by
 * organisation achieves. Scalable Asset Storage (308) owns growth. No providers, regions, durability figures,
 * replication or encryption-at-rest statements.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Vendor-neutral explanation of object storage and partitioning; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 318,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Architecture & Performance",
      lede: "Learn what object storage is, why it suits large creative files better than a traditional file share, and what it means for GetSibu to divide stored content according to the organisation it belongs to.",
      visual: { diagram: "architecture-stack", focus: "storage" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 318 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Content held as objects and divided by organisation",
      body: [
        "Creative content can be stored using object-storage infrastructure with organisational partitioning, which brings together a way of holding files and a way of dividing them.",
        "Object storage keeps each file as an object: the data itself, descriptive information about it and a unique key used to retrieve it. Rather than a tree of directories that computers mount and browse, objects sit in a large flat space and are fetched by key through a programmatic interface. The model suits content that is mostly written once and read many times, which describes a great deal of finished creative media.",
        "Partitioning divides that space. With organisational partitioning, stored content is separated according to the organisation it belongs to, so separation between organisations is part of how content is kept, not only of how it is displayed.",
        [
          "Storage is one of the layers in the ",
          { text: "GetSibu architecture", page: 301 },
          ", and how that layer copes with a library that keeps expanding is the subject of ",
          { text: "scalable asset storage", page: 308 },
          ".",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Files kept as objects with keys", "A flat space instead of a directory tree", "Suited to write-once, read-many media", "Content divided by organisation", "Separation that begins in storage", "Partitions and permissions as separate tools"],
      },
      highlight: {
        heading: "In practice",
        body: "In a partitioned design, a mistake made inside one organisation’s area of storage has a natural edge: it concerns that organisation’s content rather than every library held on the platform.",
        tags: ["Tenants", "Isolation", "Storage"],
      },
      glance: {
        heading: "Storage architecture in brief",
        facts: [
          { label: "Area", value: "Architecture & Performance" },
          { label: "Stored on", value: "Object-storage infrastructure" },
          { label: "Divided by", value: "Organisation" },
          { label: "Growth", value: "Scalable Asset Storage", page: 308 },
        ],
        actions: [{ kind: "route", path: "/architecture", label: "More in Architecture & Performance" }]
      },
      sources: [{ kind: "pdf", page: 318 }, { kind: "pdf", page: 301 }, { kind: "pdf", page: 308 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "files-and-objects",
      eyebrow: "Two storage models",
      heading: "How object storage differs from a traditional file share",
      intro: "General characteristics of each model; individual implementations vary in detail.",
      columns: ["Traditional file share", "Object storage"],
      rows: [
        { label: "How content is addressed", cells: ["A path through nested directories", "A unique key within a flat space"] },
        { label: "How a file changes", cells: ["Edited in place, part by part", "Usually written again as a whole object"] },
        { label: "Descriptive information", cells: ["A limited set of file-system attributes", "Metadata kept alongside each object"] },
        { label: "How it is reached", cells: ["Mounted as a drive on each computer", "Requested by software through an interface"] },
        { label: "Best suited to", cells: ["Working files edited by many people at once", "Large media written once and read often"] },
      ],
      sources: [{ kind: "pdf", page: 318 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "partitioning",
      eyebrow: "Organisational partitioning",
      heading: "What dividing storage by organisation achieves",
      items: [
        {
          heading: "A boundary every route meets",
          summary: "Separation built into storage does not depend on which application is asking.",
          icon: "shield",
          body: [
            "Stored content can be reached by more than one route: an interface, an integration, a custom application. In general, when content is partitioned by organisation, every route meets the same boundary instead of each one having to recreate it.",
            ["Partitioned storage sits alongside other boundaries in GetSibu: ", { text: "tenant isolation", page: 324 }, " rests on an architecture designed around tenant-scoped data access, while requests made through the API can carry tenant context to keep multi-tenant environments separated."],
          ],
        },
        {
          heading: "A natural unit for allocation",
          summary: "A partition gathers everything one organisation holds in one measurable place.",
          icon: "gauge",
          body: [
            "In general, a partition collects an organisation’s content in one place, which makes it a natural unit for understanding how much space that organisation uses.",
            ["Separately, with ", { text: "per-client storage", page: 163 }, ", client environments can have their own storage allocation and asset boundaries."],
          ],
        },
        {
          heading: "Isolation that matches how agencies work",
          summary: "For an agency, the organisation in question is often a client.",
          icon: "building",
          body: [
            ["Agencies hold libraries for many clients, each expecting its material to be kept to itself. ", { text: "Client tenant isolation", page: 161 }, " lets each client environment remain logically isolated, so assets from one client are not mixed with another client’s library."],
          ],
        },
        {
          heading: "Partitions and permissions do different jobs",
          summary: "Partitioning separates organisations; permissions govern people within one.",
          icon: "lock",
          body: [
            ["Organisational partitioning settles which organisation content belongs to. Who inside that organisation may open it is a separate matter, handled by controls such as ", { text: "folder-level permissions", page: 152 }, "."],
            "Mixing the two up causes confusion: a department is normally an area of one organisation’s library, governed by permissions, rather than a partition of its own.",
          ],
        },
        {
          heading: "Choosing the unit of division",
          summary: "Divide too coarsely and boundaries blur; divide too finely and management multiplies.",
          icon: "layers",
          body: [
            "Storage designs generally draw partition lines at the strongest separation a business requires. Dividing by organisation aligns storage with the boundary that multi-tenant platforms care about most, while finer groupings such as projects or campaigns are usually left to the structure of the library above.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 324 }, { kind: "pdf", page: 276 }, { kind: "pdf", page: 163 }, { kind: "pdf", page: 161 }, { kind: "pdf", page: 152 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "readers",
      eyebrow: "Who it matters to",
      heading: "What object storage with partitioning means for different readers",
      tabs: [
        {
          label: "IT and security",
          heading: "A boundary to ask precise questions about",
          icon: "shield",
          body: [
            "Security reviewers want to know where separation is enforced and whether every access route respects it. A design that partitions stored content by organisation gives those questions a concrete starting point, to be read alongside isolation at the data-access and API levels.",
            ["Storage is one part of that picture. ", { text: "Creative security controls", page: 174 }, " help protect creative assets from unnecessary or unauthorised access across the platform."],
          ],
          points: ["Where separation is enforced", "Every access route considered"],
        },
        {
          label: "Library managers",
          heading: "Why storage design rarely touches daily work",
          icon: "folder",
          body: [
            "Library managers seldom deal with storage directly. In asset management platforms generally, folders, tags and collections are how people organise work, and they belong to the library rather than to the storage underneath it.",
            "Storage design reaches them indirectly, through how comfortably a collection can keep growing.",
          ],
          points: ["Organisation lives in the library", "Storage kept in the background"],
        },
        {
          label: "Developers",
          heading: "Working through the platform, not around it",
          icon: "code",
          body: [
            ["Developers building on an asset platform usually work through its API rather than with the underlying storage. The ", { text: "asset upload API", page: 262 }, " allows external applications to send files into the GetSibu environment."],
            "Working at that level keeps an application concerned with assets and their information, and leaves the details of how content is held to the platform.",
          ],
          points: ["Assets handled through the API", "Storage details left to the platform"],
        },
      ],
      sources: [{ kind: "pdf", page: 174 }, { kind: "pdf", page: 308 }, { kind: "pdf", page: 262 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about storage architecture",
      items: [
        {
          question: "Is object storage the same thing as cloud storage?",
          answer: "Not exactly. Object storage is a model for holding data as objects with keys and metadata, whereas cloud storage describes how storage is provided. Many cloud services use the object model, but the two terms answer different questions.",
        },
        {
          question: "Why is object storage called flat when keys can look like folder paths?",
          answer: "Because the store itself treats each key simply as a name. Keys often contain separators that resemble folder paths, and many tools display them as folders, but nothing in the store depends on that structure.",
        },
        {
          question: "Does organisational partitioning mean a separate storage system for each organisation?",
          answer: "Not necessarily. Partitioning describes a logical division of stored content, and designs differ in how the line is drawn, for example as separate containers or as distinct areas within shared infrastructure. How the division is enforced is a sound question for any security review.",
        },
        {
          question: "Where do thumbnails fit in an object-storage design?",
          answer: [
            "In object-storage designs generally, derived files are content like any other and can be held as objects of their own. For the people using a library, ",
            { text: "thumbnails", page: 146 },
            " provide fast visual previews without anyone downloading the original file.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 146 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on where creative content is held",
      variant: "compact",
      pages: [308, 163, 161, 324, 301, 317],
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
