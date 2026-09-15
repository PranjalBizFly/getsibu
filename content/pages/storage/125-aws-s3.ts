/**
 * 125 · AWS S3 Integration — /storage/aws-s3 (also serves merged 245)
 *
 * HELD draft (claim: storage-sources). Angle: S3 as object storage that technical teams use for large volumes of
 * media; connecting it as a storage source makes a collection built for software useful to creative teams.
 * No setup steps, authentication, sync behaviour, file types, permission translation or limits.
 * page 285 owns moving a large library off S3; this page owns connecting it as a source.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "General explanation of object storage and how media collections accumulate in it; states no GetSibu or AWS S3 capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 125,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Storage & Ingestion",
      lede: "What using AWS S3 as a storage source means for an organisation that holds large amounts of media in object storage, and how a collection built for applications can become useful to the creative people who might reuse it.",
      visual: { diagram: "connector-flow", label: "AWS S3" },
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 125 }, { kind: "pdf", page: 245 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Large media collections in object storage, connected as a source",
      body: [
        "AWS S3 can be used as a storage source for organisations managing large amounts of media and creative content. It offers scalable storage connectivity for organisations whose asset collections are large, where a library is measured in volume rather than in a few shared folders.",
        "Media usually reaches S3 by technical routes rather than creative ones. Engineering teams choose it for volumes that would overwhelm shared drives, render and transcoding systems write their output there, websites and apps serve product imagery from it, and whole archives move there when older storage fills up. The people who made the material rarely see it again.",
        "Object storage is designed with software in mind. Files are stored as objects in buckets and addressed by keys, and although keys containing slashes resemble folder paths, the tools around them are made for engineers rather than for a designer or producer looking for footage. A collection can be well kept in engineering terms and effectively invisible to everyone who could reuse it.",
        [
          "At that scale, preparation is what makes material usable. ",
          { text: "Creative asset indexing", page: 21 },
          " readies assets for search and organisation as they enter the platform, and indexing appears with chunked I/O and edge caching among the ",
          { text: "performance considerations for larger creative environments", page: 309 },
          ".",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["AWS S3 as a storage source", "Scalable storage connectivity", "Large media and asset collections", "Built for software, not browsing", "Keys that only resemble folders"],
      },
      highlight: {
        heading: "In practice",
        body: "An e-commerce brand’s product platform has written every packshot to S3 for years. Connected as a source, that imagery can reach the brand’s designers, who previously had to ask engineers to retrieve it.",
        tags: ["E-commerce", "Engineering", "Product imagery"],
      },
      glance: {
        heading: "The AWS S3 integration in brief",
        facts: [
          { label: "Area", value: "Storage & Ingestion" },
          { label: "Connects", value: "AWS S3 as a storage source" },
          { label: "Suited to", value: "Large media and asset collections" },
          { label: "At scale", value: "Large Library Performance", page: 309 },
        ],
      },
      sources: [{ kind: "pdf", page: 125 }, { kind: "pdf", page: 245 }, { kind: "pdf", page: 21 }, { kind: "pdf", page: 309 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "bucket-or-library",
      eyebrow: "Two views of one collection",
      heading: "A bucket on its own compared with a connected library",
      columns: ["The bucket on its own", "Connected to GetSibu"],
      emphasis: 1,
      rows: [
        ["Made for", "Applications and the engineers who run them", "Creative workflows and the teams behind them"],
        ["How material is found", "Knowing the key or its prefix", "Searching across the creative library"],
        ["What describes a file", "Its key and whatever the writing system recorded", "Metadata, tags and extracted content together"],
        ["Volume", "Built to hold very large amounts of data", "Scalable storage connectivity for large asset collections"],
      ],
      sources: [{ kind: "pdf", page: 125 }, { kind: "pdf", page: 245 }, { kind: "pdf", page: 7 }, { kind: "pdf", page: 16 }, { kind: "pdf", page: 23 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "collections",
      eyebrow: "By kind of collection",
      heading: "What organisations keep in S3, and why creative teams care",
      tabs: [
        {
          label: "Archives",
          heading: "Material moved out of everyday storage",
          icon: "archive",
          body: [
            "When shared drives and studio storage fill up, older projects are often moved to object storage to free space. The move keeps the files but tends to cut them off from the people who used to browse them.",
            ["Bringing an archive back into view need not mean mixing it with current work: ", { text: "asset archiving", page: 108 }, " is a way to retain historical content without letting it interfere with everyday discovery."],
          ],
          points: ["Old projects out of sight", "History kept apart from current work"],
        },
        {
          label: "Pipeline output",
          heading: "Renders and transcodes written by systems",
          icon: "server",
          body: [
            "Render farms, transcoding services and automated edit systems produce large numbers of files, typically named by job identifiers rather than descriptions. They sit in object storage because software put them there, not because a person filed them.",
            ["For output like this, ", { text: "background processing", page: 311 }, " allows assets to be indexed without users performing metadata or AI processing by hand."],
          ],
          points: ["Files named for machines", "Indexing without manual processing"],
        },
        {
          label: "Product imagery",
          heading: "Images served to websites and apps",
          icon: "store",
          body: [
            "Retail and e-commerce organisations often keep product photography where their sites and apps can serve it. Those images are exactly what marketing and design teams want for campaigns, yet they are arranged for delivery rather than for reuse.",
            ["E-commerce brands can ", { text: "centralise product images, videos, campaign assets and marketing documents", page: 230 }, ", so imagery that supports the shop can also serve the people planning campaigns."],
          ],
          points: ["Arranged for delivery, wanted for campaigns", "Product and campaign material together"],
        },
        {
          label: "Footage",
          heading: "Camera originals and masters kept at volume",
          icon: "film",
          body: [
            "Production companies accumulate camera originals, masters and deliverables too large to keep on local drives indefinitely, and object storage is a common home for that volume. A researcher looking for a single shot should not need an engineer to find it.",
            ["Media companies can ", { text: "manage large collections of video, image, audio and document assets", page: 232 }, ", which is the situation a large footage store represents."],
          ],
          points: ["Originals too big for local drives", "Shots found without an engineer"],
        },
      ],
      sources: [{ kind: "pdf", page: 108 }, { kind: "pdf", page: 311 }, { kind: "pdf", page: 230 }, { kind: "pdf", page: 232 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "before-connecting",
      eyebrow: "Worth knowing",
      heading: "What to understand about a collection held in S3",
      items: [
        {
          heading: "Storage classes affect how quickly objects can be read",
          summary: "Material kept in archival storage classes is cheaper to hold and slower to reach.",
          icon: "archive",
          body: [
            "Organisations often move rarely used objects into archival storage classes to save cost, and objects there generally have to be restored before anyone can read them. Ask the engineers which classes hold which parts of a collection, so creative teams know what to expect from older material.",
          ],
        },
        {
          heading: "One bucket often serves several systems",
          summary: "A website, a render pipeline and an archive may all rely on the same storage.",
          icon: "network",
          body: [
            "Applications read and write objects in the places they expect to find them, so the layout of a bucket is part of how those systems work. Talk to the engineers who look after them before any creative use of the collection is planned, so that it stays compatible with the technical uses it already serves.",
          ],
        },
        {
          heading: "Keys can be the only description",
          summary: "In collections written by software, the key may be all that records a file’s client, job or date.",
          icon: "text",
          body: [
            "Engineers often encode meaning in key structures: a client code, a job number, a date, a rendition name. Ask for that scheme to be written down in words the creative team uses, because a code only helps the people who can read it.",
          ],
        },
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about the AWS S3 integration",
      items: [
        {
          question: "Does the AWS S3 integration suit an organisation with a modest amount of media?",
          answer: ["A small collection with no technical pipeline behind it is usually simpler to add by ", { text: "drag and drop upload", page: 127 }, " or ", { text: "bulk asset import", page: 130 }, ". Object storage comes into its own where volume and automated output make those routes impractical."],
        },
        {
          question: "Can product imagery that a website serves from S3 also be used in campaigns?",
          answer: "Often it is the best photography an organisation has, but check the terms first. Images cleared for a product listing are not always cleared for advertising, social channels or print, and the licence rarely travels with the file.",
        },
        {
          question: "Can creative teams find S3 material without knowing its keys?",
          answer: ["That is the reason to connect it to a library. ", { text: "Creative file discovery", page: 24 }, " in GetSibu is designed to reduce dependence on folder knowledge and on individuals remembering where files were stored."],
        },
      ],
      sources: [{ kind: "pdf", page: 125 }, { kind: "pdf", page: 127 }, { kind: "pdf", page: 130 }, { kind: "pdf", page: 24 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on large collections and where they live",
      variant: "compact",
      pages: [309, 21, 311, 230, 108, 24],
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
