/**
 * 21 · Creative Asset Indexing — /features/creative-asset-indexing
 *
 * Angle (clusters: indexing-metadata, processing): what happens on entry — available metadata processed into an
 * indexed representation of the library, and why that preparation decides later findability. Media Metadata
 * Management (22) owns the fields, Asset Metadata Search (23) owns searching them, Asset Processing (143) owns the
 * stages, Media Processing Status (145) owns readiness, AI Media Indexing (50) owns AI's contribution.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how indexes work in asset libraries; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 21,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Search & Discovery",
      lede: "Follow what happens to an asset as it enters GetSibu, from the metadata it brings with it to the indexed entry that search and organisation work from, and see why that preparation shapes how findable a library is later.",
      visual: { diagram: "search-signals", focus: "metadata" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 21 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "An indexed picture of the library, built as assets arrive",
      body: [
        "As assets enter GetSibu, the platform processes the metadata available for each one and prepares it for search and organisation. The result is an indexed representation of the library that can support faster discovery.",
        "An index does its reading in advance. The index at the back of a book lets someone find every mention of a subject without turning each page, because the pages were listed once. A library index follows the same principle: the effort of reading names and recorded details is spent when a file arrives, so a later search can consult prepared entries instead of examining files one after another.",
        [
          "Indexing is an outcome of ",
          { text: "asset processing", page: 143 },
          ", in which files pass through stages such as metadata extraction, thumbnail generation and AI-related processing. The recorded fields an index can begin from are set out under ",
          { text: "media metadata management", page: 22 },
          ".",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Preparation happens on entry", "Available metadata processed", "An indexed representation of the library", "Searches consult entries, not files", "AI signals beside recorded details", "Richer input makes a richer index"],
      },
      highlight: {
        heading: "In practice",
        body: "A photographer’s delivery lands on a busy afternoon. Nobody retypes capture details or opens each frame; the information the images carry is prepared for search as part of processing.",
        tags: ["Library managers", "Photographers", "Search"],
      },
      glance: {
        heading: "Where indexing fits",
        facts: [
          { label: "Area", value: "Search & Discovery" },
          { label: "Happens when", value: "Assets enter the library" },
          { label: "Part of", value: "Asset Processing", page: 143 },
          { label: "Fields it starts from", value: "Media Metadata Management", page: 22 },
        ],
        actions: [{ kind: "route", path: "/features/search-and-discovery", label: "More in Search & Discovery" }]
      },
      sources: [{ kind: "pdf", page: 21 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 50 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "index-or-files",
      eyebrow: "Why an index matters",
      heading: "Reading files at search time compared with searching an index",
      columns: ["Files examined when someone searches", "An indexed GetSibu library"],
      emphasis: 1,
      rows: [
        ["When the work is done", "Again for every search", "In advance, as assets enter"],
        ["What a query is checked against", "The files, one at a time", "A prepared representation of the library"],
        ["Words printed inside a scan", "Missed by a filename match", "Extracted text made searchable"],
        ["Details nobody typed in", "Only what the filename says", "Added through AI-related processing"],
      ],
      sources: [{ kind: "pdf", page: 21 }, { kind: "pdf", page: 15 }, { kind: "pdf", page: 143 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "moments",
      eyebrow: "When indexing matters",
      heading: "Indexing at four moments in a library’s life",
      tabs: [
        {
          label: "New uploads",
          heading: "A file that has arrived but is not yet ready",
          icon: "upload",
          visual: { diagram: "ingest-pipeline", focus: "index" },
          body: [
            ["Adding files, whether by ", { text: "drag and drop", page: 127 }, " or from a connected storage source, starts processing rather than finishing the job. Until the stages have run, an asset can have uploaded successfully without yet matching a search."],
            ["That gap explains why a file someone has only just added may not turn up in a search yet, and why ", { text: "media processing status", page: 145 }, " is worth checking before anyone concludes that something has gone missing."],
          ],
          points: ["Upload and indexing are separate moments", "Readiness checked before a file is presumed lost"],
        },
        {
          label: "Migration",
          heading: "An existing library indexed while people keep working",
          icon: "refresh",
          body: [
            "Moving a large collection is where indexing does its heaviest lifting. GetSibu’s migration workflow is designed to let organisations continue using existing storage while content is indexed in the background.",
            ["For a team in the middle of a campaign, that means the move need not wait for a quiet month. What the new index can offer depends on what travels with the files, which is why ", { text: "metadata migration", page: 286 }, " belongs in the plan rather than being left to chance."],
          ],
          points: ["Existing storage stays in use", "Metadata planned into the move"],
          link: { page: 292, label: "Migration Without Downtime" },
        },
        {
          label: "Continuous intake",
          heading: "Material that keeps arriving without an upload",
          icon: "folder",
          body: [
            ["Some libraries never stop growing. ", { text: "Watch folders", page: 128 }, " can be scanned continuously, so newly added content can enter the GetSibu workflow automatically rather than waiting for someone to upload it."],
            "Where editors export into a watched location throughout the day, that addresses a familiar weak point: material that exists on a drive but never reaches search because nobody remembered to add it.",
          ],
          points: ["Watch folders scanned continuously", "No reliance on remembering to upload"],
        },
        {
          label: "Scale",
          heading: "Why a larger collection depends on preparation",
          icon: "database",
          body: [
            "With a few hundred files, almost any way of finding things works. With hundreds of thousands, only information prepared in advance keeps searching practical.",
            "Indexing is among the performance considerations, together with chunked I/O and edge caching, that help GetSibu support larger creative environments. For a growing team, the practical consequence is that what gets prepared on entry matters more with every delivery, because nobody can fall back on opening the files to check.",
          ],
          points: ["Indexing as a performance consideration", "Preparation matters more as volume grows"],
          link: { page: 309, label: "Large Library Performance" },
        },
      ],
      sources: [{ kind: "pdf", page: 127 }, { kind: "pdf", page: 121 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 145 }, { kind: "pdf", page: 292 }, { kind: "pdf", page: 286 }, { kind: "pdf", page: 128 }, { kind: "pdf", page: 309 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "limits",
      eyebrow: "Limits worth knowing",
      heading: "What an index can and cannot know about an asset",
      items: [
        {
          heading: "It starts from what is available",
          summary: "Files that arrive carrying little information give indexing little to prepare.",
          icon: "database",
          body: [
            "The word “available” matters. A photograph straight from a camera carries capture details; a graphic exported for the web may have had its embedded information stripped; a screenshot may carry little beyond its size and the moment it was taken. Indexing can only work with what exists.",
            ["That is a reason to look after metadata before files move rather than afterwards. Exports that keep their embedded fields, and an import in which ", { text: "EXIF, XMP, creators, file paths and custom keywords can be preserved", page: 132 }, ", give every later search more to match."],
          ],
        },
        {
          heading: "AI adds signals nobody entered",
          summary: "Information drawn from the content sits beside recorded metadata rather than replacing it.",
          icon: "sparkles",
          body: [
            ["Recorded fields describe a file from the outside: who made it, when, and where it was kept. ", { text: "AI media indexing", page: 50 }, " processes supported visual, textual and metadata signals to prepare content for intelligent discovery."],
            ["The two layers then work together. Because ", { text: "metadata can be searched alongside tags and extracted content", page: 23 }, ", one query can meet a creator’s name on one asset and a descriptive tag on another."],
          ],
        },
        {
          heading: "Indexing prepares; people still organise",
          summary: "An index makes assets ready for organisation, but it does not decide how a team classifies its work.",
          icon: "layers",
          body: [
            "Which folders exist, which terms the taxonomy allows and what counts as approved remain team decisions. Indexing readies assets for those decisions without making them.",
            ["A well-prepared index paired with an inconsistent vocabulary still produces uneven results, because an index can hold only the descriptions it is given. Building a vocabulary that stays useful as the library grows is the subject of ", { text: "creative asset organisation", page: 8 }, "."],
          ],
        },
        {
          heading: "Background work, not a manual step",
          summary: "Nobody has to trigger metadata or AI processing one file at a time.",
          icon: "clock",
          body: [
            "Where cataloguing is manual, making files searchable means someone completing fields for every upload, and the backlog grows fastest exactly when a team is busiest.",
            ["GetSibu relies on ", { text: "background processing", page: 311 }, " to index assets without users performing metadata or AI processing themselves, so the index is not waiting on anybody’s spare time."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 21 }, { kind: "pdf", page: 132 }, { kind: "pdf", page: 50 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 23 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 311 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about creative asset indexing",
      items: [
        {
          question: "Are thumbnails part of creative asset indexing?",
          answer: [
            "They are a separate result of processing with a different job. ",
            { text: "Asset thumbnail generation", page: 146 },
            " provides fast visual previews without downloading the original, which helps a person judge a result by eye; indexing prepares the information a search is matched against.",
          ],
        },
        {
          question: "How is creative asset indexing different from AI media indexing?",
          answer: [
            "Creative asset indexing is the overall preparation of assets for search and organisation as they enter the library. ",
            { text: "AI media indexing", page: 50 },
            " is the part AI contributes to that preparation, working from the content of supported files as well as from what is recorded about them.",
          ],
        },
        {
          question: "Is indexing the same as tagging an asset?",
          answer: [
            "No. A tag is a descriptive label, one of the things an index can hold. ",
            { text: "AI-assisted tagging", page: 31 },
            " can propose such labels while assets are processed, and authorised users decide which of them stay.",
          ],
        },
        {
          question: "Does creative asset indexing cover video and documents as well as images?",
          answer: [
            "Indexing is part of how assets enter GetSibu, but what it can prepare depends on the kind of file. ",
            { text: "Documents can be indexed", page: 27 },
            " using extracted text, metadata and organisational tags, while ",
            { text: "videos can be indexed", page: 25 },
            " and enriched with AI-generated information.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 21 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 146 }, { kind: "pdf", page: 50 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 27 }, { kind: "pdf", page: 25 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on preparing assets for discovery",
      variant: "compact",
      pages: [143, 145, 22, 50, 311, 23],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Stop Searching Through Folders",
      conversionPage: 393,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 393 }],
    },
  ],
};

export default page;
