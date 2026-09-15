/**
 * 13 · Media Search Platform — /features/media-search-platform
 *
 * Angle (clusters: creative-search, filters-saved-searches): the dedicated media search experience as a whole —
 * keywords combined with category, format, uploader, resolution and date filters to narrow large result sets,
 * and why media needs a different search from documents. Creative Asset Search (11) owns the signals,
 * Advanced Media Filters (19) owns each filter and progressive narrowing, Saved Asset Searches (17) owns saving.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how media search differs from general file search; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 13,
  metaDescription: "GetSibu provides a dedicated search experience for creative media: combine keywords with filters for category, format, uploader, resolution and date.",
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Search & Discovery",
      lede: "Learn what a search experience built for creative media involves: keywords paired with filters for category, format, uploader, resolution and date, so a long list of results comes down to the files that suit the job in hand.",
      visual: { diagram: "search-signals", focus: "metadata" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 13 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A search experience shaped around media",
      body: [
        "GetSibu provides a search experience dedicated to creative media. Users pair keywords with filters for file category, format, uploader, resolution, date and other available information, bringing large sets of results down to size quickly.",
        "General file search suits documents, where the words in a file and its name usually say what it is. Media behaves differently. A photograph has no words to match, two exports of the same film may differ only in format and resolution, and the right answer often depends on who delivered a file and when. A useful media search asks the questions that matter for pictures, footage and sound.",
        [
          "The platform draws on the signals described under ",
          { text: "creative asset search", page: 11 },
          ", and it forms the middle of the ",
          { text: "asset discovery workflow", page: 30 },
          ", which runs from a first search through filtering and previewing to the asset itself.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Keywords and filters together", "Category, format and resolution", "Uploader and date as context", "Previews to confirm a result", "Long result lists made workable"],
      },
      highlight: {
        heading: "In practice",
        body: "An editor needs the high-resolution export of a product film delivered last month. A keyword brings up the film; filters for resolution and date pick out the right file.",
        tags: ["Editors", "Designers", "Marketing"],
      },
      glance: {
        heading: "The media search platform in brief",
        facts: [
          { label: "Area", value: "Search & Discovery" },
          { label: "Combines", value: "Keywords with media filters" },
          { label: "Filters in depth", value: "Advanced Media Filters", page: 19 },
          { label: "Reuse", value: "Saved Asset Searches", page: 17 },
        ],
        actions: [{ kind: "route", path: "/features/search-and-discovery", label: "More in Search & Discovery" }]
      },
      sources: [{ kind: "pdf", page: 13 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 30 }, { kind: "pdf", page: 19 }, { kind: "pdf", page: 17 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "by-role",
      eyebrow: "Who it helps",
      heading: "What different people ask a media search to do",
      tabs: [
        {
          label: "Designers",
          heading: "The right file of the right image",
          icon: "palette",
          body: [
            "Designers often know which image they want but still need a particular file of it: the layered original rather than a flattened export, or a version large enough to hold up in print.",
            "Format and resolution answer that question directly, without opening each candidate to inspect its properties.",
          ],
          points: ["Originals separated from exports", "Resolution checked before download"],
          link: { page: 26, label: "Searchable Image Library" },
        },
        {
          label: "Video editors",
          heading: "One delivery among many exports",
          icon: "film",
          body: [
            "An edit leaves masters, review copies and versions for different channels behind it, frequently with near-identical names.",
            "Narrowing to video and then by resolution separates a master from lightweight review files, and the uploader shows whether a file came from the edit team or from someone reviewing the cut.",
          ],
          points: ["Masters apart from review copies", "Delivery traced to the person who uploaded it"],
          link: { page: 25, label: "Searchable Video Library" },
        },
        {
          label: "Marketing",
          heading: "What arrived for a campaign, and when",
          icon: "megaphone",
          body: [
            "Marketing coordinators tend to remember deliveries rather than files: the photography that came in after a shoot, or the documents a partner agency supplied before a launch.",
            "Date and uploader turn those memories into a query, and a keyword for the campaign keeps the results on topic.",
          ],
          points: ["Deliveries found by date", "Agency material found by uploader"],
        },
        {
          label: "Library managers",
          heading: "A view of what has entered the library",
          icon: "folder",
          body: [
            "For whoever looks after the library, the same filters offer a way to review recent arrivals by format or by contributor and to spot material that needs better description.",
            ["That fits the wider work of ", { text: "creative library maintenance", page: 111 }, ", which keeps a library from filling with duplicate, obsolete or poorly classified content."],
          ],
          points: ["Recent arrivals reviewed by format", "Poorly described material spotted early"],
        },
      ],
      sources: [{ kind: "pdf", page: 13 }, { kind: "pdf", page: 26 }, { kind: "pdf", page: 25 }, { kind: "pdf", page: 111 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "comparison",
      eyebrow: "Why a dedicated experience",
      heading: "General file search compared with media search in GetSibu",
      columns: ["Folder and file search", "GetSibu media search"],
      emphasis: 1,
      rows: [
        ["Where it looks", "One folder or drive at a time", "Across the whole creative library"],
        ["What it matches", "Filenames, sometimes document text", "Filenames, metadata, extracted text, tags, comments and meaning"],
        ["How results narrow", "Name, file type or date modified", "Category, format, uploader, resolution and date"],
        ["Checking a result", "Open or download the file", "Thumbnails and streaming previews"],
        ["Repeating the search", "Rebuild it from memory", "Save it and share the URL"],
      ],
      sources: [{ kind: "pdf", page: 16 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 13 }, { kind: "pdf", page: 146 }, { kind: "pdf", page: 147 }, { kind: "pdf", page: 17 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about the media search platform",
      items: [
        {
          question: "Which filters can be paired with keywords on the media search platform?",
          answer: ["File category, format, uploader, resolution and date, along with other available information. ", { text: "Advanced media filters", page: 19 }, " explains how combining filters narrows results step by step."],
        },
        {
          question: "Does the media search platform cover documents and audio as well as images and video?",
          answer: ["Yes. GetSibu is designed to help teams ", { text: "discover images, video, audio and documents through a unified search", page: 24 }, ", so the same experience reaches each kind of file."],
        },
        {
          question: "Can a media search start from a description rather than a keyword?",
          answer: ["Yes. Users can search for a specific asset or describe what they need in ", { text: "natural language", page: 18 }, " and let the platform interpret the request, then narrow what comes back with the same media filters."],
        },
        {
          question: "Can I find media by the person who uploaded it?",
          answer: ["Yes. Uploader is one of the available filters, and ", { text: "asset ownership", page: 115 }, " provides context about who created or uploaded content, which helps when you remember who sent files but not what they were called."],
        },
      ],
      sources: [{ kind: "pdf", page: 13 }, { kind: "pdf", page: 19 }, { kind: "pdf", page: 24 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 18 }, { kind: "pdf", page: 115 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on searching creative media",
      variant: "compact",
      pages: [19, 11, 17, 147, 24, 30],
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
