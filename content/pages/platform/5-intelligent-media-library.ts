/**
 * 5 · Intelligent Media Library — /platform/intelligent-media-library
 *
 * FRAMED (claim: scene-detection). The PDF paragraph for this page is withheld and never paraphrased.
 * Angle (clusters: platform-positioning, creative-search): the media library as an information system — the
 * layers of information a file gathers (recorded, read, analysed, contributed by the team) so assets can be found
 * by what they contain. Creative Asset Search (11) owns the search signals; Media Search Platform (13) the filter
 * experience; AI Creative Intelligence (44) the information-layer statement used here as verified context.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how media libraries hold information about files; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 5,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Platform",
      lede: "How a media library can hold meaning about its files as well as the files themselves, what kinds of information an asset gathers there, and why that matters to the people who look for, review and look after creative work.",
      visual: { diagram: "search-signals", focus: "semantic" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 44 }, { kind: "pdf", page: 58 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "When the library knows what its files contain",
      body: [
        "An intelligent media library treats each file as something with meaning, not as an anonymous item with a name and a date. GetSibu can attach searchable meaning to the content of stored files, turning them into a more understandable layer of information, and asset intelligence combines that AI analysis with metadata and search so the library itself becomes more informative.",
        "A basic file library knows only what it is told. It records a filename, a folder, a format and perhaps a few keywords typed by whoever uploaded the file. Everything else, what an image shows, what a slide says, how a piece of footage feels, lives in the memory of the people who made it and leaves with them.",
        [
          "The difference shows at the moment of search. ",
          { text: "AI asset discovery", page: 12 },
          " helps users find files based on what appears inside them rather than relying entirely on manually entered metadata, which matters most when a library holds thousands of visually similar files.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Files with meaning, not just names", "An information layer over stored media", "Visual, textual and metadata signals", "Discovery by what an asset contains", "Team knowledge kept with the file"],
      },
      highlight: {
        heading: "In practice",
        body: "A campaign image carries its creator, the words printed on it and the comments from its review. In an intelligent media library, that context stays with the file for whoever needs it next.",
        tags: ["Designers", "Editors", "Marketers"],
      },
      glance: {
        heading: "The intelligent library in brief",
        facts: [
          { label: "Area", value: "Platform" },
          { label: "Signals", value: "Visual, textual and metadata" },
          { label: "Prepared by", value: "AI Media Indexing", page: 50 },
          { label: "Idea behind it", value: "AI Creative Intelligence", page: 44 },
        ],
        actions: [{ kind: "route", path: "/platform", label: "More in Platform" }]
      },
      sources: [{ kind: "pdf", page: 44 }, { kind: "pdf", page: 58 }, { kind: "pdf", page: 12 }, { kind: "pdf", page: 50 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 38 }, { kind: "pdf", page: 62 }, EXPLAINS],
    },
    {
      kind: "layers",
      id: "information-layers",
      eyebrow: "How it is built",
      heading: "The kinds of information a file gathers in the library",
      intro: "Each layer adds a different way to find and understand the same asset.",
      layers: [
        {
          label: "What the file records about itself",
          body: "Embedded metadata such as EXIF and XMP, the file path, creators and custom keywords can become part of the asset record when the file enters the library.",
          page: 22,
        },
        {
          label: "What can be read from it",
          body: "Text visible inside images, documents, presentations and screenshots is extracted and becomes part of the searchable asset information.",
          page: 38,
        },
        {
          label: "What AI can see in it",
          body: "AI analysis can interpret visual content: objects appearing in supported media can be identified with confidence information, colour information can be extracted and visual mood characteristics made searchable.",
          page: 43,
        },
        {
          label: "What the team knows about it",
          body: "Comments, approvals and version history supply context only people can add: what an asset was for, what was decided about it and which version was accepted.",
        },
        {
          label: "How it is prepared for discovery",
          body: "AI media indexing processes supported visual, textual and metadata signals, preparing creative content for intelligent discovery.",
          page: 50,
        },
      ],
      sources: [{ kind: "pdf", page: 22 }, { kind: "pdf", page: 38 }, { kind: "pdf", page: 34 }, { kind: "pdf", page: 35 }, { kind: "pdf", page: 36 }, { kind: "pdf", page: 43 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 68 }, { kind: "pdf", page: 77 }, { kind: "pdf", page: 92 }, { kind: "pdf", page: 50 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "media-types",
      eyebrow: "By media type",
      heading: "What the library can know about each kind of file",
      tabs: [
        {
          label: "Images",
          heading: "Found by how they look, not only by name",
          icon: "image",
          body: [
            "Photographs, product shots and campaign images often have near-identical names and very different content. Their value in a library depends on being told apart.",
            ["In GetSibu, metadata, tags, visual characteristics and extracted information all make an image searchable, and ", { text: "colour information", page: 36 }, " can be used when a brief is about a particular palette."],
          ],
          points: ["Visual characteristics as search terms", "Colour when the brief calls for it"],
          link: { page: 52, label: "AI-Powered Image Discovery" },
        },
        {
          label: "Video",
          heading: "Footage found without watching every clip",
          icon: "video",
          body: [
            "Video is the hardest format to catalogue by hand, because its content only reveals itself during playback.",
            ["Videos can be indexed and enriched with AI-generated information, so relevant footage can be found without reviewing every file manually, and ", { text: "streaming previews", page: 147 }, " let someone inspect a clip before waiting for a complete download."],
          ],
          points: ["AI-generated information on indexed video", "A preview before the download"],
          link: { page: 25, label: "Searchable Video Library" },
        },
        {
          label: "Documents",
          heading: "Documents found by the words inside them",
          icon: "document",
          body: [
            "Briefs, decks and scanned agreements tend to be named by date or author, while the detail someone remembers sits somewhere in the middle of the file.",
            [{ text: "AI document discovery", page: 53 }, " combines OCR and metadata to locate documents by the information they contain, so nobody has to open PDFs and presentations one by one."],
          ],
          points: ["Text inside the file as a search route", "Metadata and tags alongside it"],
          link: { page: 27, label: "Searchable Document Library" },
        },
        {
          label: "Audio",
          heading: "Audio in the same information system",
          icon: "audio",
          body: [
            "Audio is often kept apart from everything else, in a separate archive with its own naming habits, which cuts recordings off from the projects they belong to.",
            ["In GetSibu, audio assets can be managed alongside the other creative formats, so recordings sit in the same library as the work they belong to, and ", { text: "asset metadata search", page: 23 }, " lets users search available metadata alongside tags."],
          ],
          points: ["Recordings beside images, video and documents", "Described by metadata and tags"],
          link: { page: 28, label: "Searchable Audio Library" },
        },
      ],
      sources: [{ kind: "pdf", page: 26 }, { kind: "pdf", page: 36 }, { kind: "pdf", page: 52 }, { kind: "pdf", page: 25 }, { kind: "pdf", page: 147 }, { kind: "pdf", page: 53 }, { kind: "pdf", page: 27 }, { kind: "pdf", page: 28 }, { kind: "pdf", page: 23 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "An old campaign image found from a description",
      team: "A brand team",
      situation: "A brand team is asked for an image from an autumn campaign several years back: outdoors, warm light, the product on a wooden table. Nobody on the current team worked on that campaign.",
      steps: [
        {
          heading: "The request goes straight to search",
          body: ["A designer types a description close to the brief, and ", { text: "semantic search", page: 39 }, " interprets its meaning rather than waiting for an exact keyword match."],
        },
        {
          heading: "Visual characteristics narrow the field",
          body: "The designer searches by colour characteristics and adds filters for format and date, leaving a short set of images from that season.",
        },
        {
          heading: "Metadata confirms the origin",
          body: "Creators and custom keywords recorded with each file show which of the images came from the original campaign shoot.",
        },
        {
          heading: "Team knowledge settles the choice",
          body: "Comments on the shortlisted image explain how it was used, and its approval history shows which version was accepted.",
        },
      ],
      outcome: "The team traced the image and its history without help from anyone who worked on the original campaign, because the file carried its own context.",
      link: { page: 214, label: "GetSibu for Brand Teams" },
      sources: [{ kind: "pdf", page: 39 }, { kind: "pdf", page: 14 }, { kind: "pdf", page: 36 }, { kind: "pdf", page: 19 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 77 }, { kind: "pdf", page: 214 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about intelligent media libraries",
      items: [
        {
          question: "What makes a media library intelligent rather than simply well organised?",
          answer: "A well-organised library arranges files sensibly; an intelligent one also holds information about what those files contain, gathered through analysis rather than typed by hand, so assets can be found and understood by their content.",
        },
        {
          question: "Does an intelligent media library still need folders, tags and metadata?",
          answer: ["Yes. Analysis adds to what people record rather than replacing it, and ", { text: "creative library management", page: 4 }, " explains how folders, tags, collections, metadata and permissions keep the library structured."],
        },
        {
          question: "Is the information an intelligent media library gathers only useful for search?",
          answer: ["No. It can also help with organisation: ", { text: "AI asset classification", page: 42 }, " helps categorise assets according to their content and available metadata, which reduces repetitive manual organisation work."],
        },
      ],
      sources: [{ kind: "pdf", page: 44 }, { kind: "pdf", page: 377 }, { kind: "pdf", page: 4 }, { kind: "pdf", page: 42 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on finding assets by their content",
      variant: "compact",
      pages: [12, 44, 50, 42, 53, 25],
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
