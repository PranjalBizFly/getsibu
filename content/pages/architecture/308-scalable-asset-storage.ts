/**
 * 308 · Scalable Asset Storage — /architecture/scalable-asset-storage
 *
 * Angle (cluster: architecture-infrastructure): storage growth supported by the architecture — what scalable storage
 * means, what grows alongside the files in a creative library, and how growth is planned by IT, library managers and
 * operations. Storage Architecture (318) owns object storage and partitioning; Large Library Performance (309) owns
 * responsiveness at scale; Storage Analytics (183) owns what drives consumption. No quotas, limits or figures.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how storage for creative libraries grows and scales in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 308,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Architecture & Performance",
      lede: "Understand what storage growth involves for a creative library, why it rarely happens at a steady pace, and how GetSibu’s architecture and library tools support a collection that keeps expanding.",
      visual: { diagram: "architecture-stack", focus: "storage" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 308 }, { kind: "pdf", page: 209 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Storage for the library you will have, not only the one you have",
      body: [
        "GetSibu’s architecture supports large amounts of digital content and storage growth. The point is a design principle rather than a number: storage is meant to accommodate a library as it expands, instead of being sized once around the collection that exists today.",
        "Scalable storage, in general terms, is storage whose capacity grows by adding resources rather than by replacing the system or moving the library somewhere larger. Traditional file servers tend to meet hard edges as they fill: a volume reaches its maximum size, folders holding enormous numbers of files become slow to list, and expansion means copying everything somewhere larger. Architectures built for growth avoid those edges by spreading content across capacity that can be added to.",
        [
          "The storage layer in GetSibu can hold creative content on ",
          { text: "object-storage infrastructure with organisational partitioning", page: 318 },
          ". Growth is also something a team can observe: ",
          { text: "storage growth analytics", page: 149 },
          " provide historical context about how quickly a creative library is expanding.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Capacity that grows with the library", "Number of objects as well as size", "Originals plus versions and derived files", "Partitioned by organisation", "Growth measured, then planned"],
      },
      highlight: {
        heading: "In practice",
        body: "A studio importing years of archive footage in one go creates exactly the kind of step change that storage designed for growth has to absorb.",
        tags: ["Migration", "Video", "Capacity"],
      },
      glance: {
        heading: "Scalable storage in brief",
        facts: [
          { label: "Area", value: "Architecture & Performance" },
          { label: "Supports", value: "Large amounts of content and storage growth" },
          { label: "Stored on", value: "Object storage with organisational partitioning" },
          { label: "Planning", value: "Library Growth Reporting", page: 209 },
        ],
        actions: [{ kind: "route", path: "/architecture", label: "More in Architecture & Performance" }]
      },
      sources: [{ kind: "pdf", page: 308 }, { kind: "pdf", page: 318 }, { kind: "pdf", page: 149 }, { kind: "pdf", page: 209 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "what-grows",
      eyebrow: "What grows",
      heading: "What expands alongside the files in a creative library",
      items: [
        {
          heading: "Originals",
          body: "Camera originals, masters and high-resolution imagery are the most visible driver, and new cameras and formats tend to produce larger files than the ones before.",
          icon: "video",
          points: ["Heaviest individual files", "Larger with each change of format"],
        },
        {
          heading: "Versions",
          body: "Replacing an asset keeps its earlier versions within the asset record, which protects the history of the work and adds to what is stored.",
          icon: "history",
          points: ["History kept inside one record", "Previous versions retained"],
          page: 93,
        },
        {
          heading: "Derived files",
          body: "Thumbnails generated during processing are small one by one, but across a large library they form a sizeable collection of their own.",
          icon: "image",
          points: ["Created from each original", "Small individually, significant together"],
        },
        {
          heading: "Records and index entries",
          body: "Metadata becomes part of each asset record, and indexing builds a representation of the library for search, so information about the library grows with the library.",
          icon: "database",
          points: ["Asset records", "An indexed representation for search"],
          page: 21,
        },
        {
          heading: "Activity history",
          body: "Views, downloads, edits and approvals can become part of an asset’s activity history, so the record around assets lengthens as they are used.",
          icon: "audit",
          points: ["Grows with use, not uploads", "Part of each asset’s history"],
          page: 118,
        },
      ],
      sources: [{ kind: "pdf", page: 93 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 21 }, { kind: "pdf", page: 118 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "who-plans",
      eyebrow: "Who plans for growth",
      heading: "Storage growth seen from three positions",
      tabs: [
        {
          label: "IT and platform",
          heading: "Capacity and responsiveness are different questions",
          icon: "server",
          body: [
            "For IT, scalable storage raises two separate questions: whether capacity can keep growing, and whether the library stays responsive as it does. The first is about where content is kept; the second depends on indexing, previews and delivery as much as on storage.",
            ["For the second question, ", { text: "large library performance", page: 309 }, " names chunked I/O, edge caching and indexing as considerations that help support larger creative environments."],
          ],
          points: ["Capacity growth and responsiveness assessed separately", "Performance depends on more than storage"],
        },
        {
          label: "Library managers",
          heading: "Growth that stays purposeful",
          icon: "folder",
          body: [
            "Library managers care less about how much space exists than about what fills it. A library that grows with useful work is healthy; one that grows with abandoned drafts and forgotten copies becomes expensive clutter.",
            [{ text: "Asset archiving", page: 108 }, " retains historical content without letting it crowd everyday discovery, and authorised users can remove assets according to organisational policies and permissions."],
          ],
          points: ["Historical work kept out of the way", "Removal governed by policy"],
        },
        {
          label: "Operations leads",
          heading: "Planning capacity from evidence",
          icon: "trend",
          body: [
            "Operations and finance need to know what is coming, not only what has already happened. A one-off import and a steady rise in production call for very different plans.",
            [{ text: "Library growth reporting", page: 209 }, " helps organisations anticipate storage and operational requirements, while ", { text: "storage by category", page: 192 }, " shows how storage divides across video, image, document and audio."],
          ],
          points: ["Requirements anticipated", "Storage understood by asset category"],
        },
      ],
      sources: [{ kind: "pdf", page: 309 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 109 }, { kind: "pdf", page: 209 }, { kind: "pdf", page: 192 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "An agency grows its library by client and by archive",
      team: "An advertising agency",
      situation: "An advertising agency is taking on two new clients and, in the same quarter, bringing a large archive of past campaign work into its library.",
      steps: [
        { heading: "Each new client gets its own environment", body: ["The new clients are managed as ", { text: "separate client libraries", page: 162 }, " on the same platform, with separation maintained between tenants."] },
        { heading: "Capacity is considered per client", body: "Because client environments can have their own storage allocation and asset boundaries, the agency discusses capacity for each new client on its own terms." },
        { heading: "The archive is migrated", body: [{ text: "Large library migration", page: 131 }, " brings the archive across while preserving important metadata and existing folder relationships."] },
        { heading: "Unneeded copies are removed", body: "Duplicate detection identifies identical files and visually equivalent copies, including renamed or re-encoded ones, and authorised users remove those the agency’s policy says it does not need." },
      ],
      outcome: "The agency takes on new clients and a large archive without mixing either into another client’s library, and it plans capacity for each environment separately.",
      link: { page: 219, label: "GetSibu for Advertising Agencies" },
      sources: [{ kind: "pdf", page: 162 }, { kind: "pdf", page: 163 }, { kind: "pdf", page: 131 }, { kind: "pdf", page: 40 }, { kind: "pdf", page: 109 }, { kind: "pdf", page: 219 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about scalable asset storage",
      items: [
        {
          question: "Why does the number of files matter as well as their total size?",
          answer: "Many tasks grow with how many items there are rather than how much they weigh: listing, indexing and moving a collection all take longer as the count rises. A library of countless small stills can therefore call for as much planning as one holding a few very large films.",
        },
        {
          question: "How can a team see whether its creative library is growing in a healthy way?",
          answer: [
            { text: "Library health analytics", page: 196 },
            " can reveal growth, duplicates, inactive content and other organisational patterns, which together say more than a storage total alone.",
          ],
        },
        {
          question: "Should a team delete old material to keep storage growth under control?",
          answer: "Not by default. Finished work often has reuse or record value, and clearing space without a retention policy risks losing material that is hard to recreate. Removing genuine duplicates is usually the safer place to start.",
        },
      ],
      sources: [{ kind: "pdf", page: 196 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on growing a creative library",
      variant: "compact",
      pages: [318, 309, 149, 209, 163, 196],
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
