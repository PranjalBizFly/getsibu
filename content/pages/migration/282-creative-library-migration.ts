/**
 * 282 · Creative Library Migration — /migration/creative-library-migration
 *
 * Angle (cluster: migration-overview): the result of a migration — arriving in a more searchable, structured
 * environment, and what makes the destination better than the location left behind. Creative Data Migration (288)
 * owns the context carried across, Creative Team Migration (298) the people side, the section root (281) the phases.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how creative libraries are organised and found after a move; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 282,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Migration",
      lede: "What a creative library gains by moving into GetSibu: the difference between files that are merely stored somewhere new and a collection people can search, browse and rely on, and how to keep the result that way.",
      visual: { diagram: "migration-map" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 282 }, { kind: "pdf", page: 4 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A destination worth moving to, not a copy of the old drive",
      body: [
        "Creative library migration transfers existing assets into a more searchable and structured environment. The measure of the move is what people can do with the collection afterwards, not only whether every file arrived.",
        "Libraries that grow inside shared drives and ageing systems are organised by accident. Their structure reflects whoever created the first folders, finding anything depends on a filename, and knowing where work lives becomes a skill held by a few long-serving colleagues. Relocating those files without changing how they are found simply moves the problem to new storage.",
        [
          "GetSibu offers the arriving collection a ",
          { text: "structured environment", page: 4 },
          " where assets can be organised through folders, tags, collections, metadata and permissions, intended as a reliable source of truth for the whole organisation. That is the shape the migrated library is moving into.",
        ],
        [
          "How good the result feels is decided earlier than it appears. Which ",
          { text: "metadata comes across", page: 286 },
          " sets how much search has to work with, and whether folders are ",
          { text: "kept or redesigned", page: 294 },
          " sets how familiar the structure is on the first morning.",
        ],
      ],
      keyPoints: {
        heading: "What the destination offers",
        items: ["Search that goes beyond filenames", "Structure that does not rely on memory", "Folders, tags and collections together", "Context kept on the asset record", "Access decided folder by folder", "A chance to leave clutter behind"],
      },
      highlight: {
        heading: "In practice",
        body: "A designer who used to ask a colleague where last spring’s product shots were kept now searches the migrated library for the product instead, and can find images that were once filed in several different places.",
        tags: ["Designers", "Marketing", "Shared drives"],
      },
      glance: {
        heading: "Library migration in brief",
        facts: [
          { label: "Area", value: "Migration" },
          { label: "Result", value: "A more searchable, structured environment" },
          { label: "Organised through", value: "Folders, tags, collections, metadata and permissions" },
          { label: "Builds on", value: "Creative Library Management", page: 4 },
        ],
        actions: [{ kind: "route", path: "/migration", label: "More in Migration" }]
      },
      sources: [{ kind: "pdf", page: 282 }, { kind: "pdf", page: 4 }, { kind: "pdf", page: 286 }, { kind: "pdf", page: 294 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "before-and-after-the-move",
      eyebrow: "What changes",
      heading: "The old location and the migrated library side by side",
      columns: ["Where the assets used to be", "The migrated GetSibu library"],
      emphasis: 1,
      rows: [
        ["Finding a file", "Remembering its path or exact name", "Searching metadata, tags and extracted text"],
        ["Asking for something vague", "Guessing the words in a filename", "Describing the asset in natural language"],
        ["Where a file’s context lives", "Often stripped or left in the old system", "On the asset record"],
        ["Who can open what", "Broad sharing that grew by habit", "Permissions set at folder level"],
        ["Moving through the collection", "Opening folders one at a time", "Views, folders, tags, collections and search"],
      ],
      sources: [{ kind: "pdf", page: 23 }, { kind: "pdf", page: 18 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 29 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "what-makes-it-searchable",
      eyebrow: "In GetSibu",
      heading: "What makes a migrated library searchable and structured",
      items: [
        {
          heading: "Prepared for search on entry",
          body: "When assets enter GetSibu, the platform processes the metadata available and builds an indexed representation of the library for search and organisation to work from.",
          icon: "refresh",
          page: 21,
          points: ["Indexing without manual metadata work", "One indexed view of the whole collection"],
        },
        {
          heading: "Found by what it contains",
          body: "Filenames stop being the only route to a migrated file, because metadata, OCR, AI-generated tags, comments and semantic information can all make it searchable.",
          icon: "search",
          page: 11,
          points: ["Text inside documents and images", "Requests phrased as people remember them"],
        },
        {
          heading: "Context on the record",
          body: "EXIF, XMP, file paths, creators and custom keywords can become part of each asset record, so what the old location knew about a file can travel with it.",
          icon: "tag",
          page: 22,
          points: ["Credits and keywords carried forward", "An old path kept as a clue to origin"],
        },
        {
          heading: "A taxonomy that scales",
          body: "Hierarchical tags, synonyms, colours and inheritance make it possible to build an organisation system that stays useful as the migrated collection keeps growing.",
          icon: "layers",
          page: 8,
          points: ["Classification that cuts across folders", "One vocabulary for a growing library"],
        },
        {
          heading: "More than one way through",
          body: "Library views, folders, tags, collections and search let people move between broad exploration and pinpointing a single asset.",
          icon: "compass",
          page: 29,
          points: ["Browse when the need is loose", "Search when it is precise"],
        },
        {
          heading: "History out of the way",
          body: "Archiving retains historical content without letting old material interfere with everyday discovery, which suits the long tail of old work that migrated libraries tend to bring along.",
          icon: "archive",
          page: 108,
          points: ["Old work kept without crowding discovery", "Everyday searches stay relevant"],
        },
      ],
      sources: [{ kind: "pdf", page: 21 }, { kind: "pdf", page: 311 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 15 }, { kind: "pdf", page: 18 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 29 }, { kind: "pdf", page: 108 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "keeping-it-structured",
      eyebrow: "Considerations",
      heading: "Keeping the new structure from inheriting the old disorder",
      items: [
        {
          heading: "Give folders, tags and collections separate jobs",
          summary: "Each organising tool suits a different kind of grouping.",
          icon: "folder",
          body: [
            "Folders are good at boundaries, such as a department, a client or an area with its own audience. Tags describe what cuts across those boundaries, like a product that appears in several campaigns. Collections gather material for a purpose. Agreeing these roles before the move stops one piece of information being recorded in three different ways.",
            ["The explainer ", { text: "What Is Asset Taxonomy?", page: 375 }, " sets out how a classification vocabulary is designed and kept consistent."],
          ],
        },
        {
          heading: "Share views instead of copying files",
          summary: "Old locations gave each audience its own set by duplicating folders.",
          icon: "collection",
          body: [
            "On a shared drive, the usual way to give a team “its” campaign folder was to copy the files somewhere new, and each copy then drifted from the original. Carrying that habit into a new library quietly rebuilds the sprawl the move was meant to end.",
            ["With ", { text: "team asset sharing", page: 78 }, ", teams can share saved searches and relevant library views without creating duplicate copies of the same files, so one structure can serve several audiences."],
          ],
        },
        {
          heading: "Stop versioning by filename",
          summary: "Files named “final-v2” are a habit the new library does not need.",
          icon: "history",
          body: [
            ["Old locations often record revisions in filenames because there was nowhere else to put them. In GetSibu, teams can ", { text: "replace an asset in place while retaining previous versions", page: 91 }, ", so new work can drop the naming conventions that made the old location confusing."],
          ],
        },
        {
          heading: "Name an owner for the structure",
          summary: "Order fades when nobody is responsible for keeping it.",
          icon: "user",
          body: [
            ["A migration creates a tidy moment, and tidiness does not last on its own. Someone should look after folders and tags and review them after busy periods; ", { text: "creative library maintenance", page: 111 }, " is the ongoing work that stops a collection filling with duplicate, obsolete or poorly classified content."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 375 }, { kind: "pdf", page: 78 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 111 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about creative library migration",
      items: [
        {
          question: "What makes a migrated creative library feel structured to a newcomer?",
          answer: "Predictability. When folders follow one pattern, tags come from one vocabulary and names describe what a file is, a newcomer can guess where something lives before looking, which is the practical test of structure.",
        },
        {
          question: "Can people still browse by folder after a creative library migration?",
          answer: ["Yes. Folders remain part of the library, and existing ", { text: "folder structures can be mirrored or remapped", page: 287 }, " during migration, so the team decides whether its familiar tree stays as it is."],
        },
        {
          question: "How does a creative library keep growing after the migration is complete?",
          answer: ["New work joins the same structure instead of returning to the old location. For individual assets or small batches, ", { text: "drag and drop upload", page: 127 }, " needs no integration to be configured first."],
        },
        {
          question: "Can one migrated library hold video, images, documents and audio together?",
          answer: ["Yes. GetSibu is designed to help teams store, organise and search videos, images, documents and audio from one central workspace, and a ", { text: "centralised creative asset library", page: 6 }, " reduces the confusion of keeping each type in a different location."],
        },
        {
          question: "Does creative library migration suit a team that has never used a DAM?",
          answer: ["It often matters most for that team, since it replaces folder knowledge with search and structure at once. The human side of that change is covered under ", { text: "Creative Team Migration", page: 298 }, "."],
        },
      ],
      sources: [{ kind: "pdf", page: 282 }, { kind: "pdf", page: 287 }, { kind: "pdf", page: 127 }, { kind: "pdf", page: 1 }, { kind: "pdf", page: 6 }, { kind: "pdf", page: 298 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on arriving in a structured library",
      variant: "compact",
      pages: [281, 298, 286, 294, 21, 11],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the migration section." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Bring Your Creative Assets Together",
      conversionPage: 392,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 392 }],
    },
  ],
};

export default page;
