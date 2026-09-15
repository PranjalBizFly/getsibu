/**
 * 220 · GetSibu for Creative Studios — /use-cases/creative-studios
 *
 * Angle (cluster: uc-studios-creators, primary): the multidisciplinary studio whose projects mix images, video, audio and
 * documents made by different specialists — one searchable environment across formats, so finding work depends less on
 * who remembers where it was saved. In-House Creative Teams (222) owns the company-wide source of truth; Freelancers
 * (226), Content Creators (227) and Photography Teams (228) own their own material.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how multidisciplinary studios typically work; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 220,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Use Cases",
      lede: "How a multidisciplinary studio can keep the images, video, audio and documents of each project in one searchable environment, so work is found by what it is rather than by who remembers where it was saved.",
      visual: { diagram: "media-library", focus: "image,video,audio,document" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 220 }, { kind: "pdf", page: 24 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Design, motion, sound and documents under one search",
      body: [
        "Creative studios can manage images, videos, audio and documents in one searchable environment with GetSibu, instead of splitting the work of a single project across tools and drives according to file type.",
        "Studio projects cross disciplines. An identity project might produce logo artwork, a motion sting, a sound signature, photography and a guidelines document, each made by a different specialist in a different application. Files land wherever each specialist saves them, and the studio’s knowledge of where things are ends up living in a handful of people.",
        [
          "That dependency is what GetSibu is designed to reduce. ",
          { text: "Creative file discovery", page: 24 },
          " brings images, video, audio and documents into a unified search, so finding a file relies less on folder knowledge and on colleagues remembering where it went, while ",
          { text: "creative library navigation", page: 29 },
          " lets people move between exploring a whole project and pinpointing one file.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Four formats in one environment", "Search that spans formats", "Less reliance on folder memory", "Work found by look, mood and colour", "Text inside documents searchable"],
      },
      highlight: {
        heading: "In practice",
        body: "A motion designer looking for the sound signature made for an identity project finds it beside the logo animation, rather than asking who produced the audio.",
        tags: ["Designers", "Motion designers", "Studio leads"],
      },
      glance: {
        heading: "Creative studios in brief",
        facts: [
          { label: "Team", value: "Creative studios" },
          { label: "Typical material", value: "Images, video, audio and documents" },
          { label: "Builds on", value: "Creative Asset Search", page: 11 },
          { label: "Supports", value: "Creative Team Workspace", page: 90 },
        ],
        actions: [{ kind: "route", path: "/use-cases", label: "More in Use Cases" }]
      },
      sources: [{ kind: "pdf", page: 220 }, { kind: "pdf", page: 24 }, { kind: "pdf", page: 29 }, { kind: "pdf", page: 28 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 90 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "formats",
      eyebrow: "By format",
      heading: "How each format becomes findable in a studio library",
      columns: ["Typical studio material", "What makes it searchable"],
      rows: [
        { label: "Images", page: 26, cells: ["Photography, illustration, artwork exports", "Metadata, tags, visual characteristics and extracted information"] },
        { label: "Video", page: 25, cells: ["Motion pieces, animations, edits", "Indexing enriched with AI-generated information"] },
        { label: "Documents", page: 27, cells: ["Guidelines, proposals, presentations", "Extracted text, metadata and organisational tags"] },
        { label: "Audio", page: 28, cells: ["Sound design, music, voice recordings", "Managed with the other formats and found through filenames and metadata"] },
      ],
      sources: [{ kind: "pdf", page: 26 }, { kind: "pdf", page: 25 }, { kind: "pdf", page: 27 }, { kind: "pdf", page: 28 }, { kind: "pdf", page: 11 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A new designer joins an identity project halfway through",
      team: "A creative studio",
      situation: "A small studio brings a freelance designer onto a brand identity project that is already several weeks in. The lead designer is busy with a pitch and cannot walk the newcomer through the files.",
      steps: [
        {
          heading: "Access to the project, nothing more",
          body: ["The studio gives the freelancer ", { text: "editor permissions", page: 156 }, " for the project’s folders, enough to work with its assets without administrative privileges."],
        },
        {
          heading: "The work so far appears in one search",
          body: ["A ", { text: "search across the library", page: 16 }, " for the project brings up the logo explorations, the motion tests and the draft guidelines together."],
        },
        {
          heading: "A reference is found by description",
          body: ["The designer remembers a reference image only as “moody green interiors” and finds it through ", { text: "semantic search", page: 39 }, ", which interprets meaning rather than exact words."],
        },
        {
          heading: "The guidelines are checked",
          body: "A phrase from the draft guidelines about clear space around the logo leads to the PDF, because its text has been extracted and made searchable.",
        },
        {
          heading: "Questions go to the right person",
          body: ["Where a logo file is unclear, the designer comments on the asset and ", { text: "mentions the lead", page: 66 }, ", who answers once the pitch is over."],
        },
      ],
      outcome: "The freelancer is productive without a tour of the file server, and what the studio knows about the project sits in the library rather than in the lead designer’s memory.",
      link: { page: 24, label: "Creative File Discovery" },
      sources: [{ kind: "pdf", page: 156 }, { kind: "pdf", page: 16 }, { kind: "pdf", page: 39 }, { kind: "pdf", page: 15 }, { kind: "pdf", page: 27 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 66 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "capabilities",
      id: "capabilities",
      eyebrow: "What the studio uses",
      heading: "What a creative studio uses across its disciplines",
      items: [
        {
          heading: "Colour detection",
          body: "Colour information extracted from visual assets can support discovery, which helps when a client asks for work in a particular palette.",
          icon: "palette",
          points: ["Find work by palette", "Useful across images and artwork"],
          page: 36,
        },
        {
          heading: "Mood detection",
          body: "Visual mood characteristics become searchable information, so work can be found by the feeling it was meant to create.",
          icon: "eye",
          points: ["Search by intended feeling", "Helpful for pitches and references"],
          page: 35,
        },
        {
          heading: "Object detection",
          body: "Objects appearing in supported media can be identified with confidence information and then contribute to search.",
          icon: "scan",
          points: ["Content-based tags", "Confidence information attached"],
          page: 34,
        },
        {
          heading: "Processing and thumbnails",
          body: "After upload, assets pass through metadata extraction, thumbnail generation and AI-related processing, and thumbnails give a quick visual preview of each asset.",
          icon: "image",
          points: ["Previews without downloading originals", "AI processing as part of intake"],
          page: 143,
        },
        {
          heading: "Hierarchical tags",
          body: "A taxonomy with hierarchy, synonyms, colours and inheritance helps a studio keep one vocabulary as projects accumulate.",
          icon: "tag",
          points: ["Shared terms across disciplines", "Synonyms for different habits"],
          page: 8,
        },
        {
          heading: "Asset ownership",
          body: "Ownership gives context about who created or uploaded each file, which matters when specialists hand work to one another.",
          icon: "user",
          points: ["Know who made a file", "Ask the right person"],
          page: 115,
        },
        {
          heading: "Drag and drop upload",
          body: "Individual files or small batches can be added by drag and drop, with no integration to configure first.",
          icon: "upload",
          points: ["Quick additions mid-project", "Single files or small batches"],
          page: 127,
        },
      ],
      sources: [{ kind: "pdf", page: 36 }, { kind: "pdf", page: 35 }, { kind: "pdf", page: 34 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 146 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 115 }, { kind: "pdf", page: 127 }],
    },
    {
      kind: "accordion",
      id: "considerations",
      eyebrow: "Considerations",
      heading: "What a studio should think about when every format shares one library",
      items: [
        {
          heading: "A shared vocabulary across disciplines",
          summary: "Designers, animators and sound designers describe the same project differently.",
          icon: "text",
          body: [
            "A designer might file work under the client’s name, an animator under the campaign and a sound designer under the brief’s working title. Agreeing a small set of shared terms matters more than any one naming convention.",
            [{ text: "Asset taxonomy", page: 375 }, " is the structured classification system that defines how content is grouped and labelled, and it is worth designing before the library fills up."],
          ],
        },
        {
          heading: "Working files versus deliverables",
          summary: "Layered source files and final exports serve different people.",
          icon: "layers",
          body: [
            "Source files are large and only useful to specialists; exports are what clients and colleagues need. Keeping both is common, but they should be easy to tell apart.",
            [{ text: "Asset status management", page: 102 }, " helps distinguish drafts, approved content and other workflow states."],
          ],
        },
        {
          heading: "Versions in every discipline",
          summary: "Artwork, edits and documents all get revised.",
          icon: "history",
          body: [
            ["Revision is not only a video problem. ", { text: "Image version management", page: 98 }, " keeps different versions of visual assets in one structured record, and ", { text: "document version management", page: 99 }, " retains earlier versions when presentations and documents are replaced."],
          ],
        },
        {
          heading: "Moving the existing file server",
          summary: "A studio rarely starts from an empty library.",
          icon: "server",
          body: [
            "Years of projects already sit on a file server or a shelf of drives, organised by whoever set them up. Deciding what to bring across, and in what structure, is the first real decision.",
            [{ text: "Folder structure migration", page: 287 }, " lets existing structures be mirrored or remapped, and ", { text: "metadata migration", page: 286 }, " retains EXIF, XMP, creators and custom keywords during the move."],
          ],
        },
        {
          heading: "Knowing what the library holds",
          summary: "How storage divides between formats is easy to guess wrong.",
          icon: "chart",
          body: [
            [{ text: "Creative storage management", page: 148 }, " draws on storage analytics, which help organisations understand how a library is distributed across videos, images, documents and audio: useful when planning around the heaviest formats."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 375 }, { kind: "pdf", page: 102 }, { kind: "pdf", page: 98 }, { kind: "pdf", page: 99 }, { kind: "pdf", page: 287 }, { kind: "pdf", page: 286 }, { kind: "pdf", page: 148 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about GetSibu for creative studios",
      items: [
        {
          question: "How does a creative studio spot near-identical exports of the same artwork?",
          answer: [{ text: "Duplicate detection", page: 40 }, " combines exact and perceptual hashing to identify identical files and visually equivalent copies, including files that have been renamed or re-encoded on export."],
        },
        {
          question: "Can a creative studio share a set of project work without copying files?",
          answer: ["Yes. ", { text: "Team asset sharing", page: 78 }, " lets teams share saved searches and relevant library views without creating duplicate copies of the same files."],
        },
        {
          question: "Can a studio give feedback on motion work at a precise moment?",
          answer: ["Yes. ", { text: "Video timeline comments", page: 64 }, " can be attached to specific points on the timeline, which gives an animator a precise location for each note."],
        },
      ],
      sources: [{ kind: "pdf", page: 40 }, { kind: "pdf", page: 78 }, { kind: "pdf", page: 64 }],
    },
    {
      kind: "related",
      id: "related",
      heading: "More for multidisciplinary studios",
      variant: "compact",
      pages: [24, 26, 28, 27, 222, 221],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page, and the closest studio and consultancy use cases." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Give Your Creative Team One Source of Truth",
      conversionPage: 395,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 395 }],
    },
  ],
};

export default page;
