/**
 * 4 · Creative Library Management — /platform/creative-library-management
 *
 * Angle (cluster: library-organisation): structure for a growing library — folders, tags, collections, metadata
 * and permissions as five tools used together, how the demands on structure change as a collection grows, and
 * what keeps it dependable as a source of truth. Creative Asset Organisation (8) owns the taxonomy detail;
 * Creative Library Navigation (29) owns moving through the library; AI Library Organisation (57) owns AI keeping
 * order.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how creative libraries are structured as they grow; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 4,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Platform",
      lede: "How folders, tags, collections, metadata and permissions give a growing creative library a structure that still works when it holds thousands of files, and what keeps that structure dependable over time.",
      visual: { diagram: "media-library", focus: "video,image,document,audio" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 4 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Structure that keeps pace with a growing library",
      body: [
        "Creative teams accumulate files quickly: a few campaigns and shoots can leave a growing team with thousands of videos, images, documents and audio files. GetSibu gives those assets a structured environment in which folders, tags, collections, metadata and permissions organise them, so the library can serve as a reliable source of truth for the whole organisation.",
        "Growth breaks structure in familiar ways. The folder tree set up by the first designer reflects how that person thought; each new team adds branches that follow its own logic; filenames carry more and more information because nothing else can. Eventually anyone who wants a file has to ask the person who stored it, and that is the moment a library stops being a shared resource.",
        [
          "Structure only helps if people can move through it. ",
          { text: "Creative library navigation", page: 29 },
          " covers moving between broad exploration and highly specific discovery, and ",
          { text: "AI library organisation", page: 57 },
          " helps maintain order as material arrives, instead of relying on a major manual clean-up after every campaign.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["A structure several teams can share", "Five organising tools used together", "Context kept in the asset record", "Access designed into the structure", "Order maintained, not restored"],
      },
      highlight: {
        heading: "In practice",
        body: "A producer who joined last month finds a previous campaign through its tags and metadata, without being walked through a folder tree someone else designed.",
        tags: ["Growing teams", "Library managers"],
      },
      glance: {
        heading: "Library management in brief",
        facts: [
          { label: "Area", value: "Platform" },
          { label: "Organises with", value: "Folders, tags, collections, metadata, permissions" },
          { label: "Taxonomy detail", value: "Creative Asset Organisation", page: 8 },
          { label: "Kept tidy by", value: "Creative Library Maintenance", page: 111 },
        ],
        actions: [{ kind: "route", path: "/platform", label: "More in Platform" }]
      },
      sources: [{ kind: "pdf", page: 4 }, { kind: "pdf", page: 29 }, { kind: "pdf", page: 57 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 111 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "structural-tools",
      eyebrow: "The structural tools",
      heading: "Five tools that give a library its shape",
      items: [
        {
          heading: "Folders",
          body: "Structured folders give assets a clear location, and they remain the most familiar way into a library for anyone joining the team.",
          icon: "folder",
          points: ["A recognisable starting point", "Boundaries between teams and projects"],
        },
        {
          heading: "Tags",
          body: "Tags describe what an asset is rather than where it sits, and hierarchical tags let the vocabulary grow without turning into one long, flat list.",
          icon: "tag",
          points: ["Several descriptions for one asset", "Suggested by AI, confirmed by people"],
          page: 8,
        },
        {
          heading: "Collections",
          body: "In asset management generally, a collection is a set of related assets. In GetSibu, collections are one of the structures the library is organised and navigated through, alongside folders, tags and search.",
          icon: "collection",
          points: ["Part of the library’s structure", "A route for navigating the library"],
          page: 29,
        },
        {
          heading: "Metadata",
          body: "Metadata such as EXIF, XMP, file paths, creators and custom keywords can become part of the asset record, preserving where a file came from and who made it.",
          icon: "database",
          points: ["Context that survives a move", "Searchable alongside tags and extracted content"],
          page: 22,
        },
        {
          heading: "Permissions",
          body: "Folder-level permissions control access at a more detailed level than organisation-wide access, so one library can be shared without everything being visible to everyone.",
          icon: "lock",
          points: ["Access decided where the assets sit", "New folders private until access is granted"],
          page: 152,
        },
      ],
      sources: [{ kind: "pdf", page: 8 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 4 }, { kind: "pdf", page: 29 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 23 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 154 }, EXPLAINS],
    },
    {
      kind: "timeline",
      id: "growth",
      eyebrow: "As the library grows",
      heading: "How structure has to change as a collection grows",
      intro: "The same library asks different things of its structure at different sizes.",
      items: [
        { label: "A single team", body: "A few people who know every file can manage with folders and memory. This is the cheapest moment to agree naming and a first set of tags, while changing them costs little." },
        { label: "Several campaigns", body: "Material from finished work starts to crowd current projects. Tags and collections begin to matter more than folder position, because one asset is now relevant to more than one piece of work." },
        { label: "More teams", body: "Marketing, production and brand arrive with their own habits. Shared metadata and deliberate permissions keep the structure common without giving everyone access to everything." },
        { label: "Thousands of assets", body: "Nobody can browse the whole library any more. Hierarchical tags, consistent metadata and search carry the load, and gaps in description become much harder to fill afterwards." },
        { label: "Years of history", body: "Finished work now outnumbers current work. The challenge shifts from organising what arrives to stopping older material from getting in the way of what people need today." },
      ],
      sources: [{ kind: "pdf", page: 4 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 152 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "dependable",
      eyebrow: "Considerations",
      heading: "Keeping a library dependable as a source of truth",
      items: [
        {
          heading: "Decide what folders are for",
          summary: "Folders work best when they answer one question consistently.",
          icon: "folder",
          body: [
            "Trouble starts when folders try to record everything at once: client, year, format and status in a single path. A library is easier to manage when folders follow one stable dimension, such as team or client, and tags and metadata carry the rest.",
            ["If an inherited tree does not fit, an import is a natural moment to change it, because ", { text: "folder mapping", page: 133 }, " allows an existing structure to be mirrored or remapped."],
          ],
        },
        {
          heading: "Treat metadata as part of the structure",
          summary: "Context that is never recorded disappears when people move on.",
          icon: "database",
          body: [
            "Creators, sources and keywords feel optional on a busy day, yet they are what let someone unfamiliar with a project make sense of an asset years later.",
            [{ text: "Asset ownership", page: 115 }, " gives context about who created or uploaded content, and ", { text: "asset attribution", page: 116 }, " keeps creators and contributors associated with their work through collaboration and migration."],
          ],
        },
        {
          heading: "Separate approved content from work in progress",
          summary: "A source of truth has to show which files are ready to use.",
          icon: "approval",
          body: [
            "A library that mixes drafts with final files forces everyone to double-check before they use anything, and some people will stop checking.",
            [{ text: "Asset statuses", page: 102 }, " help distinguish drafts from approved content, and approved-only views give users access to content that has completed the required review process."],
          ],
        },
        {
          heading: "Plan for clutter before it arrives",
          summary: "Duplicates and obsolete files erode trust faster than missing ones.",
          icon: "archive",
          body: [
            "When a search returns three copies of the same image, people start keeping private copies elsewhere, and the library loses its authority.",
            [{ text: "Duplicate asset management", page: 112 }, " helps identify unnecessary copies, and ", { text: "asset archiving", page: 108 }, " retains historical content without letting it interfere with everyday discovery."],
          ],
        },
        {
          heading: "Make someone responsible for the structure",
          summary: "Structures drift unless an owner reviews them.",
          icon: "user",
          body: [
            "Tags multiply, near-identical folders appear and permissions collect exceptions. A named owner who reviews the structure from time to time keeps those changes deliberate rather than accidental.",
            [{ text: "Creative asset governance", page: 114 }, " defines who can upload, edit, approve, download and manage assets, which is where that responsibility gets written down."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 133 }, { kind: "pdf", page: 115 }, { kind: "pdf", page: 116 }, { kind: "pdf", page: 102 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 112 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 114 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about creative library management",
      items: [
        {
          question: "How is creative library management different from creative asset organisation?",
          answer: ["Library management covers the whole structure: folders, tags, collections, metadata and permissions working together. ", { text: "Creative asset organisation", page: 8 }, " concentrates on one part of it, a taxonomy of hierarchical tags, synonyms, colours and inheritance designed to scale."],
        },
        {
          question: "When does a creative library need more structure than folders alone?",
          answer: "Once people other than the original uploader need to find files regularly, or when the same asset belongs to several projects. From then on, tags, collections and metadata carry information a single folder path cannot.",
        },
        {
          question: "How do permissions fit into managing a creative library?",
          answer: ["They are part of the structure rather than an afterthought. ", { text: "Permission hierarchies", page: 178 }, " combine broad organisational roles with more detailed folder-level controls, so access can follow the way the library is arranged."],
        },
        {
          question: "Where does AI help with managing a growing creative library?",
          answer: ["Mostly in the first description of new material. Tags can be suggested while assets are processed, which spares the team from describing each new file from scratch, and", { text: "AI-aware asset management", page: 9 }, " keeps the team in charge by letting it approve those suggestions in bulk or override them."],
        },
      ],
      sources: [{ kind: "pdf", page: 4 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 178 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 9 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on structuring a creative library",
      variant: "compact",
      pages: [8, 29, 57, 22, 375, 114],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the taxonomy explainer." }],
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
