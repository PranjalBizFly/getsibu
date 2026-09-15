/**
 * 11 · Creative Asset Search — /features/creative-asset-search
 *
 * Angle (cluster: creative-search, primary): the signals search uses — filenames, metadata, OCR, AI-generated
 * tags, comments and semantic information — and how they serve an exact lookup, a description or a half-memory.
 * Media Search Platform (13) owns keywords plus filters, Search Across Creative Libraries (16) owns library-wide
 * scope, Asset Metadata Search (23) owns metadata as a search path, Creative File Discovery (24) owns media types.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how search signals work in a creative library; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 11,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Search & Discovery",
      lede: "See which kinds of information GetSibu search can draw on, from filenames and metadata to text inside files, AI-generated tags, comments and meaning, and how each helps you reach an asset whether you can name it or only describe it.",
      visual: { diagram: "search-signals" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 11 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Six kinds of information behind one search",
      body: [
        "GetSibu makes creative assets searchable through filenames, metadata, OCR, AI-generated tags, comments and semantic information. A user can look for one specific asset, or describe what they need in natural language and leave the platform to interpret the request.",
        "Each of those signals holds a different memory of a file. A filename records what someone called it on the day it was exported; metadata records how and by whom it was made. The words printed inside it, the tags describing what it shows and the discussion around it capture details nobody thought to put in the name. A search that consults only one of them fails whenever the person searching remembers a different detail from the person who saved the file.",
        [
          "Because search can produce ",
          { text: "results that combine different information sources", page: 16 },
          ", one poster might be found through the phrase printed on it and another through a tag describing its imagery. The descriptive side of searching is developed further in ",
          { text: "natural language asset search", page: 18 },
          ".",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Filenames and recorded metadata", "Text extracted from inside files", "AI-generated tags", "Comments left on assets", "Semantic information", "Exact lookups or open descriptions"],
      },
      highlight: {
        heading: "In practice",
        body: "A designer who cannot recall a banner’s filename can search for the offer printed on it, the product it shows or the note a reviewer left on it.",
        tags: ["Designers", "Marketing", "Production"],
      },
      glance: {
        heading: "Where creative asset search fits",
        facts: [
          { label: "Area", value: "Search & Discovery" },
          { label: "Draws on", value: "Six kinds of asset information" },
          { label: "Narrowed with", value: "Advanced Media Filters", page: 19 },
          { label: "Repeated with", value: "Saved Asset Searches", page: 17 },
        ],
        actions: [{ kind: "route", path: "/features/search-and-discovery", label: "More in Search & Discovery" }]
      },
      sources: [{ kind: "pdf", page: 11 }, { kind: "pdf", page: 16 }, { kind: "pdf", page: 18 }, { kind: "pdf", page: 19 }, { kind: "pdf", page: 17 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "signals",
      eyebrow: "The signals",
      heading: "What each signal contributes to a result",
      items: [
        {
          heading: "Filenames",
          body: "The name a file was saved under is the most direct match when someone knows it, and the least dependable when naming has been left to habit.",
          icon: "document",
          points: ["Project codes and exact names", "Weak when naming is inconsistent"],
        },
        {
          heading: "Metadata",
          body: "Recorded information such as EXIF, XMP, creators, file paths and custom keywords can form part of the asset record, where search can reach it.",
          icon: "database",
          points: ["Who made a file and how", "Keywords carried over from a previous system"],
          page: 23,
        },
        {
          heading: "Text inside files",
          body: "Text extracted from images, PDFs, presentations and screenshots turns printed words into something a query can match.",
          icon: "scan",
          points: ["Headlines, slide titles, packaging copy", "Useful when the filename says nothing"],
          page: 15,
        },
        {
          heading: "AI-generated tags",
          body: "Tags suggested while assets are processed describe what they contain, and authorised users can review, approve or override them.",
          icon: "tag",
          points: ["Objects, mood and colour", "Kept in line with the team’s taxonomy"],
          page: 31,
        },
        {
          heading: "Comments",
          body: "Feedback left on an asset stays attached to it, so what reviewers wrote about a file becomes one more way back to it.",
          icon: "message",
          points: ["Reviewer notes and decisions", "Context nobody typed into a field"],
          page: 62,
        },
        {
          heading: "Semantic information",
          body: "Meaning is interpreted rather than exact wording alone, so a description can reach assets that were never labelled with the words used.",
          icon: "sparkles",
          points: ["Creative concepts and visual descriptions", "Helpful when vocabulary differs"],
          page: 39,
        },
      ],
      sources: [{ kind: "pdf", page: 11 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 23 }, { kind: "pdf", page: 132 }, { kind: "pdf", page: 15 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 34 }, { kind: "pdf", page: 35 }, { kind: "pdf", page: 36 }, { kind: "pdf", page: 48 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 39 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "search-modes",
      eyebrow: "Ways in",
      heading: "Naming an asset, describing it or recalling a fragment",
      tabs: [
        {
          label: "Known asset",
          heading: "When you can name exactly what you want",
          icon: "search",
          body: [
            "Some searches are lookups: the current logo lockup, the release form for a particular shoot, the film with a known project code. The person searching holds a precise term and wants the one file that matches it.",
            "Filenames, metadata fields and extracted document text suit this kind of request, because they hold the literal words and codes people use to refer to a specific file.",
          ],
          points: ["Product names and project codes", "An exact phrase from inside a document"],
        },
        {
          label: "Described need",
          heading: "When you only know what it should look like",
          icon: "sparkles",
          body: [
            "Other searches begin from a brief rather than a file. Someone needs a product shown in use, or a presentation about a market launch, and has no idea whether such an asset exists or what it might be called.",
            "Here tags and semantic information carry most of the weight, because they describe content instead of preserving the words one uploader happened to choose.",
          ],
          points: ["Starts from a brief, not a filename", "Reaches assets that fit an idea"],
          link: { page: 14, label: "Semantic Creative Search" },
        },
        {
          label: "Partial memory",
          heading: "When you remember one detail and nothing else",
          icon: "thread",
          body: [
            "A third kind of search sits between the two. The searcher recalls a fragment, such as a line of copy, a colleague’s remark or the campaign an asset was made for, but nothing that identifies the file directly.",
            "This is where several signals pay off. Because search draws on more than one kind of information, a fragment held in extracted text, a comment thread or a keyword gives the search something to work with.",
          ],
          points: ["A single fragment is enough to begin", "Different details lead to the same file"],
        },
      ],
      sources: [{ kind: "pdf", page: 11 }, { kind: "pdf", page: 14 }, { kind: "pdf", page: 23 }, { kind: "pdf", page: 15 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "considerations",
      eyebrow: "Considerations",
      heading: "Keeping every signal useful as the library grows",
      items: [
        {
          heading: "Signals are only as good as their inputs",
          summary: "Search can match only what has been recorded, extracted or described.",
          icon: "tag",
          body: [
            "A folder of files named by a camera, with no keywords, offers search very little until processing has added information about it. Careful metadata at import and a consistent taxonomy afterwards make every later search more dependable.",
            ["When a library moves across, ", { text: "metadata such as creators and custom keywords can be preserved", page: 132 }, ", so years of manual description stay searchable in the new environment."],
          ],
        },
        {
          heading: "A new upload may not be searchable yet",
          summary: "A file that has just arrived may still be working through processing.",
          icon: "clock",
          body: [
            ["Assets pass through stages such as metadata extraction, thumbnail generation and AI-related processing. ", { text: "Media processing status", page: 145 }, " separates a file that has uploaded successfully from one that is fully indexed and searchable, which explains why a file from minutes ago may not match a text or tag query."],
          ],
        },
        {
          heading: "Tags should speak the team’s language",
          summary: "Suggested tags help most when their vocabulary matches the words people search with.",
          icon: "layers",
          body: [
            "If designers search for “packshot” while tags say “product on white background”, results depend on luck. Reviewing suggestions against an agreed taxonomy keeps the words in tags close to the words in queries.",
            "Hierarchical tags, synonyms and inheritance give that taxonomy a structure that can stay useful as the library grows into many thousands of assets.",
          ],
        },
        {
          heading: "Feedback kept in email is invisible to search",
          summary: "Comments often hold the most distinctive words anyone has used about an asset.",
          icon: "message",
          body: [
            "Review discussions record the client’s nickname for a concept, the reason a version was rejected and the channel a cut was made for. When those conversations happen in inboxes, that context never reaches the library.",
            ["Keeping ", { text: "feedback connected to the asset", page: 73 }, " rather than scattered across email, chat and project-management systems leaves it where search can use it."],
          ],
        },
        {
          heading: "Exact words and meaning answer different questions",
          summary: "Interpreting meaning complements keyword matching rather than replacing it.",
          icon: "search",
          body: [
            "A product code should match precisely and should not return assets that merely feel similar. A request for a relaxed summer picnic benefits from interpretation, because nobody will have tagged an image with that phrase.",
            ["GetSibu’s ", { text: "search infrastructure", page: 317 }, " combines text search with embedding-based retrieval, supporting both kinds of request."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 132 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 145 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 73 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 317 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about creative asset search",
      items: [
        {
          question: "Do I need to know a file’s name to use creative asset search?",
          answer: "No. A filename is only one of the signals, so you can start from a keyword, a phrase printed inside the file, a tag or a plain description of what you need.",
        },
        {
          question: "Can creative asset search find an asset by what reviewers wrote about it?",
          answer: ["Yes. Comments are among the information GetSibu search draws on, which is a good reason to keep ", { text: "asset comments", page: 62 }, " on the asset rather than in separate tools."],
        },
        {
          question: "How does creative asset search relate to AI semantic search?",
          answer: ["Semantic information is one of the signals creative asset search uses. ", { text: "AI semantic search", page: 39 }, " is the capability that interprets meaning; creative asset search brings it together with the other five signals."],
        },
        {
          question: "Can the results of a creative asset search be narrowed further?",
          answer: "Yes. Filters for categories, formats, sources, resolutions and dates can be combined with a search, reducing a long list of results to the assets that fit the job.",
        },
      ],
      sources: [{ kind: "pdf", page: 11 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 39 }, { kind: "pdf", page: 19 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on the signals search uses",
      variant: "compact",
      pages: [15, 39, 23, 31, 18, 13],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and its closest sibling." }],
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
