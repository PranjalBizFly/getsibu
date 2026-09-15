/**
 * 309 · Large Library Performance — /architecture/large-library-performance
 *
 * Angle (cluster: performance): the three considerations the PDF names for larger creative environments — chunked
 * I/O, edge caching and indexing — and the specific pressure each relieves as a library grows in file size,
 * audience and number of assets. Creative Asset Infrastructure (302) owns creative content as a workload; Fast
 * Creative Search (307) owns latency; Scalable Asset Storage (308) owns storage growth; Large File Performance (312)
 * owns individual heavy files. No file size limits, figures or speed claims.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how libraries come under strain as they grow; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 309,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Architecture & Performance",
      lede: "See why a creative library strains in more than one way as it grows, and which of GetSibu’s performance considerations helps with each pressure: heavier files, a wider audience or simply more assets.",
      visual: { diagram: "architecture-stack" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 309 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Three pressures that arrive with a larger library",
      body: [
        "Chunked I/O, edge caching and indexing are among the performance considerations GetSibu names as helping to support larger creative environments. Each one answers a different way in which a library comes under strain as it grows.",
        "Libraries grow along several dimensions at once. There are more assets to find, individual files get heavier, and more people in more places open them. Software that feels quick at a small scale can slow down on each dimension for its own reason: long transfers of heavy files fail partway, the same popular previews travel repeatedly from far away, and finding anything means consulting more material than before.",
        [
          "Size puts pressure on capacity as well, which ",
          { text: "scalable asset storage", page: 308 },
          " addresses, while individual heavy files raise the reliability questions examined in ",
          { text: "large file performance", page: 312 },
          ".",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Chunked I/O for heavy transfers", "Edge caching for repeated requests", "Indexing for finding at scale", "Growth in count, weight and audience", "Background processing for busy arrivals"],
      },
      highlight: {
        heading: "In practice",
        body: "Bringing in a back catalogue, moving to a higher-resolution camera and opening an office abroad are three different kinds of growth, even though each is described as the library getting bigger.",
        tags: ["IT teams", "Library managers", "Large libraries"],
      },
      glance: {
        heading: "Large library performance in brief",
        facts: [
          { label: "Area", value: "Architecture & Performance" },
          { label: "Considerations", value: "Chunked I/O, edge caching, indexing" },
          { label: "Applies to", value: "Larger creative environments" },
          { label: "Transfers", value: "Chunked Uploads", page: 138 },
        ],
        actions: [{ kind: "route", path: "/architecture", label: "More in Architecture & Performance" }]
      },
      sources: [{ kind: "pdf", page: 309 }, { kind: "pdf", page: 308 }, { kind: "pdf", page: 312 }, { kind: "pdf", page: 138 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "pressure-and-response",
      eyebrow: "Pressure and response",
      heading: "Which consideration answers which kind of growth",
      columns: ["What strains", "Consideration", "What it changes"],
      rows: [
        { label: "Heavier files", cells: ["Long transfers exposed to failure from start to finish", "Chunked I/O", "Large files handled as a series of smaller parts"] },
        { label: "A wider audience", cells: ["Popular content fetched repeatedly from far away", "Edge caching", "Nearby copies answer repeat requests without the long trip"] },
        { label: "More assets", cells: ["Every search consults more material", "Indexing", "Prepared entries are consulted instead of the files themselves"] },
        { label: "More arrivals at once", cells: ["Metadata and AI work piling up behind uploads", "Background processing", "Assets indexed without anyone processing them by hand"] },
      ],
      sources: [{ kind: "pdf", page: 309 }, { kind: "pdf", page: 311 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "inside",
      eyebrow: "Deep dives",
      heading: "Inside each consideration",
      items: [
        {
          heading: "Chunked I/O: moving data in pieces",
          summary: "Handling a large file as a series of smaller parts makes transfers sturdier and easier to manage.",
          icon: "upload",
          body: [
            "I/O is shorthand for input and output: reading data from, and writing data to, storage or a network. Chunked I/O treats a large file as a sequence of smaller parts rather than as one continuous stream.",
            ["For uploads, large files can be transferred through ", { text: "chunked upload workflows designed for reliability", page: 138 }, "."],
          ],
        },
        {
          heading: "Edge caching: answering repeats nearby",
          summary: "The more people use a library, the more often its popular content is requested again.",
          icon: "globe",
          page: 305,
          body: [
            "Growth in audience is lopsided: the same key visuals, templates and current cuts attract a large share of new requests. When copies of that content are held close to where requests come from, each additional viewer adds little load on the origin and little distance to cover.",
            "Content nobody has opened recently still comes from storage, and in a large library with a long tail of rarely opened material that is expected rather than a fault.",
          ],
        },
        {
          heading: "Indexing: finding without scanning",
          summary: "An index stops the cost of a search from rising in step with the size of the library.",
          icon: "search",
          body: [
            "Scanning files at search time gets slower with every asset added. An index turns that around: each search consults structures organised for lookup, whose cost grows far more gently than the collection does.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 138 }, { kind: "pdf", page: 309 }, { kind: "pdf", page: 305 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A retail brand separates three complaints about a growing library",
      team: "A retail brand",
      situation: "A retail brand’s creative library has grown for years with seasonal campaigns, product photography for every range and video for each market. Teams complain that big video uploads fail, launch visuals feel slow abroad and current product shots are hard to find.",
      steps: [
        { heading: "Uploads stop starting over", body: [{ text: "Resumable uploads", page: 137 }, " help prevent a campaign film interrupted by a network drop from having to be sent again from the beginning."] },
        { heading: "Inactive seasons move aside", body: "Usage analytics help the team see which assets remain inactive, and past seasons are archived so they stay available without interfering with everyday discovery." },
        { heading: "Product shots are found, not browsed", body: ["With assets ", { text: "indexed as they enter the library", page: 21 }, ", a merchandiser searches for the range name and filters by date instead of opening folder after folder."] },
        { heading: "Launch visuals reach every market", body: "During launch week, regional teams open the same key visuals, and edge caching reduces the distance between them and that frequently accessed content." },
      ],
      outcome: "Each complaint is traced to its own cause, and the team treats transfers, repeated viewing and finding as separate problems instead of blaming the size of the library.",
      link: { page: 231, label: "GetSibu for Retail Brands" },
      sources: [{ kind: "pdf", page: 231 }, { kind: "pdf", page: 137 }, { kind: "pdf", page: 106 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 21 }, { kind: "pdf", page: 19 }, { kind: "pdf", page: 305 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about large library performance",
      items: [
        {
          question: "At what point does a creative library count as large for performance purposes?",
          answer: "There is no fixed line. A library becomes large in this sense when approaches that worked at a smaller size start to strain, and the strain usually shows in one place well before the others.",
        },
        {
          question: "How can a team see growth coming before performance suffers?",
          answer: [{ text: "Upload analytics", page: 184 }, " show how much new content is entering the library over time, and ", { text: "trend analysis", page: 187 }, " helps organisations understand how their library changes, which gives warning of growth rather than a surprise."],
        },
        {
          question: "Does a very large library need a different organisation system from a small one?",
          answer: [
            "It needs one that scales. ",
            { text: "Hierarchical tags, synonyms, colours and inheritance", page: 8 },
            " make it possible to create an organisation system that remains useful even when a library grows to thousands or millions of assets.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 184 }, { kind: "pdf", page: 187 }, { kind: "pdf", page: 8 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on keeping large libraries responsive",
      variant: "compact",
      pages: [138, 305, 21, 312, 308, 311],
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
