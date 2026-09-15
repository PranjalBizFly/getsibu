/**
 * 50 · AI Media Indexing — /features/ai-media-indexing
 *
 * Angle (clusters indexing-metadata, ai-intelligence): AI's contribution to indexing — supported visual,
 * textual and metadata signals prepared for discovery. Creative Asset Indexing (21) owns metadata processed
 * on entry; Media Understanding (43) owns interpretation; Asset Intelligence (58) owns the combination.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of search indexes and signal types in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 50,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "AI",
      lede: "See what AI adds to an index of creative media, which kinds of request each signal can answer, who relies on what the index holds, and what decides how useful it turns out to be.",
      visual: { diagram: "ingest-pipeline", focus: "index" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 50 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Preparing media so a search has something to consult",
      body: [
        "AI media indexing is how GetSibu readies creative content for intelligent discovery. It works by processing the supported visual, textual and metadata signals that assets carry.",
        "What a search can match is limited to what has been prepared for it. The subject of a photograph, the atmosphere of a campaign image or a phrase printed on a slide may be obvious to anyone who opens the file, yet if none of it reaches the index, a request has nothing to be compared with. So much of what people remember about an asset is of that kind that leaving it out makes a library far harder to search than its size suggests.",
        [
          "Traditional indexing starts from recorded information: when assets enter GetSibu, ",
          { text: "available metadata is processed into an indexed representation", page: 21 },
          " of the library. AI indexing widens what that representation can hold, so the content of images and documents contributes alongside the details written about them.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["What reaches the index can be found", "Visual signals from content", "Textual signals from inside files", "Metadata signals from the record", "Supported signals, not every detail"],
      },
      highlight: {
        heading: "In practice",
        body: "A scanned event poster enters the library with a meaningless filename. Its printed title, its visual content and its recorded creator can each become something a later search is able to match.",
        tags: ["Search", "Processing", "Metadata"],
      },
      glance: {
        heading: "Media indexing in brief",
        facts: [
          { label: "Area", value: "AI" },
          { label: "Processes", value: "Supported visual, textual and metadata signals" },
          { label: "Builds on", value: "Creative Asset Indexing", page: 21 },
          { label: "Serves", value: "AI Asset Discovery", page: 12 },
        ],
        actions: [{ kind: "route", path: "/features/ai", label: "More in AI" }]
      },
      sources: [{ kind: "pdf", page: 50 }, { kind: "pdf", page: 21 }, { kind: "pdf", page: 12 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "signals",
      eyebrow: "What gets indexed",
      heading: "Signal types and the requests each can answer",
      intro: "Each kind of signal describes a different aspect of the same asset.",
      columns: ["Examples", "Where it comes from", "A request it helps with"],
      rows: [
        { label: "Metadata signals", page: 22, cells: ["EXIF, XMP, file paths, creators, custom keywords", "Written by devices, applications or earlier systems", "Work by a particular photographer"] },
        { label: "Textual signals", page: 38, cells: ["Words in images, documents, presentations, screenshots", "Text extracted by OCR", "The deck that mentions a market"] },
        { label: "Visual signals", page: 43, cells: ["Objects, visual mood, colour", "AI analysis of supported visual media", "A calm photograph with a bicycle"] },
        { label: "Meaning", page: 317, cells: ["Embeddings used for retrieval", "Representations of what content is about", "A description in everyday words"] },
      ],
      sources: [{ kind: "pdf", page: 22 }, { kind: "pdf", page: 38 }, { kind: "pdf", page: 34 }, { kind: "pdf", page: 35 }, { kind: "pdf", page: 36 }, { kind: "pdf", page: 43 }, { kind: "pdf", page: 317 }, { kind: "pdf", page: 14 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "intake",
      eyebrow: "Who it serves",
      heading: "Who relies on what the index holds",
      tabs: [
        {
          label: "Searchers",
          heading: "Descriptions need something to meet",
          icon: "search",
          body: [
            ["Someone asking for a calm image of an empty workspace is relying on content signals, not on anything a person typed. ", { text: "Semantic creative search", page: 14 }, " can interpret a request like that according to available embeddings and AI-generated media information rather than exact keyword matching."],
            "That interpretation has material to work with only where indexing has prepared it, which is why a thin index tends to show first in descriptive searches.",
          ],
          points: ["Descriptions met by content signals", "A thin index shows in descriptive searches"],
        },
        {
          label: "Agencies",
          heading: "Client requirements for AI processing",
          icon: "building",
          body: [
            ["Agencies handling work for several clients may find that each client has its own expectations about how AI processing of its material is arranged. Multi-tenant configurations can support ", { text: "client-specific AI key management", page: 164 }, " where required, and ", { text: "client tenant isolation", page: 161 }, " keeps each client environment logically separate."],
            "The practical point is to settle those arrangements before a client archive is imported, since preparation for search begins as assets enter the library.",
          ],
          points: ["Client-specific AI keys where required", "Arrangements settled before import"],
        },
        {
          label: "Developers",
          heading: "Search built into other tools",
          icon: "code",
          body: [
            ["The ", { text: "API-first architecture", page: 253 }, " lets developers interact with the same platform capabilities the interface uses, and ", { text: "applications can integrate asset search", page: 263 }, " into custom interfaces and workflows."],
            "A search built into a brand portal or a production tool is therefore only as good as what indexing has prepared, so decisions about metadata and file types matter beyond the library itself.",
          ],
          points: ["The same capabilities as the interface", "Index quality reaches custom tools"],
        },
      ],
      sources: [{ kind: "pdf", page: 14 }, { kind: "pdf", page: 164 }, { kind: "pdf", page: 161 }, { kind: "pdf", page: 21 }, { kind: "pdf", page: 253 }, { kind: "pdf", page: 263 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "index-quality",
      eyebrow: "Considerations",
      heading: "What decides how useful an index becomes",
      items: [
        {
          heading: "The source material",
          summary: "An index can only hold what a file makes available.",
          icon: "image",
          body: [
            "A blurred scan yields less readable text than a crisp export, and a tiny thumbnail gives visual analysis less to work with than a full-resolution master. Where both versions of an asset exist, the better original is usually the more valuable one to keep in the library.",
          ],
        },
        {
          heading: "Which signals are supported",
          summary: "Different kinds of media carry different signals.",
          icon: "layers",
          body: [
            "A photograph has visual content and perhaps a little text; a contract is almost all text; an audio file has neither in visual form. Indexing processes the signals that are supported for each asset, so it is sensible to test representative files of every type your team relies on rather than assume the same depth everywhere.",
          ],
        },
        {
          heading: "Context only people can supply",
          summary: "Some of the most searched details are never visible in the file.",
          icon: "user",
          body: [
            ["The client, the campaign, the usage agreement: none of these can be read from pixels or printed text. They reach search only once they are recorded, for example in metadata that travels with a file, and ", { text: "asset metadata search", page: 23 }, " lets users search that information alongside tags and extracted content."],
          ],
        },
        {
          heading: "Indexing is not organisation",
          summary: "A well-indexed library still benefits from a clear structure.",
          icon: "folder",
          body: [
            ["An index makes assets findable by search, but many people also browse. ", { text: "Creative library navigation", page: 29 }, " through library views, folders, tags and collections remains the way to explore a library broadly before narrowing to a specific asset."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 50 }, { kind: "pdf", page: 23 }, { kind: "pdf", page: 29 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about AI media indexing",
      items: [
        {
          question: "Is AI media indexing worth having in a library that is already carefully tagged?",
          answer: "Yes. Tags describe what someone chose to record, and even careful tagging leaves out secondary subjects, printed phrases and qualities nobody thought to name. Signals drawn from the content give later searches routes the people tagging never anticipated.",
        },
        {
          question: "Do people have to start AI media indexing themselves?",
          answer: ["No. ", { text: "Background processing", page: 311 }, " allows assets to be indexed without users manually performing metadata or AI processing."],
        },
        {
          question: "Does AI media indexing make assets easier to organise as well as to find?",
          answer: ["Its first job is preparing content for discovery. Organisation benefits as well: ", { text: "AI media understanding", page: 43 }, " makes the interpreted content of visual assets available through organisation workflows as well as search."],
        },
      ],
      sources: [{ kind: "pdf", page: 50 }, { kind: "pdf", page: 311 }, { kind: "pdf", page: 43 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on preparing media for discovery",
      variant: "compact",
      pages: [21, 22, 43, 58, 317, 14],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Turn Your Asset Library Into Intelligence",
      conversionPage: 398,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 398 }],
    },
  ],
};

export default page;
