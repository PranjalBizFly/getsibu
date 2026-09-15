/**
 * 22 · Media Metadata Management — /features/media-metadata-management
 *
 * Angle (clusters: indexing-metadata, metadata-preservation): the recorded fields that become part of the asset
 * record — EXIF, XMP, file paths, creators, custom keywords — what context each keeps, and how that serves migrated
 * and newly created libraries day to day. Creative Asset Indexing (21) owns what happens on entry, Asset Metadata
 * Search (23) owns searching the fields, Metadata Preservation (132) owns import, and What Is Asset Metadata? (374)
 * explains the standards vendor-neutrally.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how teams look after metadata; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 22,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Search & Discovery",
      lede: "See which recorded details can become part of a GetSibu asset record, from EXIF and XMP to file paths, creators and custom keywords, and how keeping them makes a migrated or newly built library easier for everyone to understand.",
      visual: { diagram: "search-signals", focus: "metadata" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 22 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "The context a file carries, kept on its asset record",
      body: [
        "In GetSibu, metadata such as EXIF, XMP, file paths, creators and custom keywords can become part of an asset’s record. Holding that information with the asset helps preserve its context and improves the usefulness of the library, whether it was migrated from elsewhere or created from new.",
        "A file’s context is usually scattered. The camera wrote some of it, the design application added more, the folder it sat in implied a client and a year, and the person who made it knows the rest. Copy the file into another system carelessly and much of that disappears: the path is lost, authorship shrinks to whoever uploaded it, and keywords a previous team spent years adding are left behind.",
        [
          "The record earns its keep at two moments. When a library moves, ",
          { text: "metadata preservation", page: 132 },
          " means these fields can be kept through the migration; afterwards, ",
          { text: "asset metadata search", page: 23 },
          " can use them to reach assets whose names and locations nobody remembers.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["EXIF and XMP kept with the asset", "File paths as a record of origin", "Creators stay associated", "Custom keywords carried forward", "Context for migrated and new libraries"],
      },
      highlight: {
        heading: "In practice",
        body: "A marketing manager opens a product image that came across from a retired system. Its old path still names the agency and the launch it was made for, and the photographer’s credit is on the record.",
        tags: ["Migrated libraries", "Photography", "Marketing"],
      },
      glance: {
        heading: "Metadata on the record",
        facts: [
          { label: "Area", value: "Search & Discovery" },
          { label: "Fields include", value: "EXIF, XMP, file paths, creators, custom keywords" },
          { label: "Prepared for search by", value: "Creative Asset Indexing", page: 21 },
          { label: "Explainer", value: "What Is Asset Metadata?", page: 374 },
        ],
        actions: [{ kind: "route", path: "/features/search-and-discovery", label: "More in Search & Discovery" }]
      },
      sources: [{ kind: "pdf", page: 22 }, { kind: "pdf", page: 132 }, { kind: "pdf", page: 23 }, { kind: "pdf", page: 21 }, { kind: "pdf", page: 374 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "fields",
      eyebrow: "On the asset record",
      heading: "Five kinds of recorded information and the context each keeps",
      items: [
        {
          heading: "EXIF",
          icon: "camera",
          body: "Capture details written by cameras and phones can remain with an image on its record, which helps when a question is about how or when a photograph was taken rather than what it shows.",
          points: ["When and with what an image was captured", "Written by the device, not typed in"],
        },
        {
          heading: "XMP",
          icon: "document",
          body: "Information that creative applications store as XMP, which often includes captions, credits and keywords, can join the record instead of staying buried inside the file.",
          points: ["Often where captions and credits live", "Useful beyond the application that wrote it"],
        },
        {
          heading: "File paths",
          icon: "folder",
          body: "The location a file came from can be kept as information about it. Old folder names often encode a client, a year or a project, so the path stays a useful clue after the library’s structure has changed.",
          points: ["Client and project names hidden in old paths", "A trace of the previous structure"],
        },
        {
          heading: "Creators",
          icon: "user",
          body: "The people who made an asset can stay associated with it through collaboration and migration, rather than authorship being reduced to whoever happened to upload the file.",
          points: ["Credit that survives an upload", "Someone to ask about the work"],
          page: 116,
        },
        {
          heading: "Custom keywords",
          icon: "tag",
          body: "Keywords an organisation added in earlier systems and tools can be carried into the record, so the vocabulary a team built up is not lost at the point of moving.",
          points: ["A team’s own terms, not a standard’s", "Description built up over years"],
          page: 286,
        },
      ],
      sources: [{ kind: "pdf", page: 22 }, { kind: "pdf", page: 116 }, { kind: "pdf", page: 286 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "library-types",
      eyebrow: "Why it pays off",
      heading: "What the record does for migrated, new and shared libraries",
      tabs: [
        {
          label: "Migrated library",
          heading: "Years of description that survive the move",
          icon: "refresh",
          body: [
            "For a library arriving from shared drives or another asset management system, the metadata is often the most valuable thing being moved. Files can be re-exported or reshot; knowledge of who made them, for which client and under which keywords usually cannot be rebuilt.",
            "Keeping those fields means early searches in the new environment benefit from much of what the old one knew, instead of relying on filenames that were never meant to explain anything.",
          ],
          points: ["Knowledge that is hard to recreate", "Searches that start from what the old system knew"],
          link: { page: 293, label: "Migration Metadata Preservation" },
        },
        {
          label: "New library",
          heading: "Good habits set while the collection is small",
          icon: "upload",
          body: [
            "A newly created library has one advantage: nothing needs repairing yet. Files coming from cameras, design applications and editing software bring embedded information with them, and credits embedded at export never have to be reconstructed.",
            ["It is also the cheapest time to agree conventions for credits and keywords. Assets entering through ", { text: "direct uploads or connected storage sources", page: 121 }, " will carry whatever those conventions produce, good or bad."],
          ],
          points: ["Nothing to repair yet", "Conventions agreed early"],
        },
        {
          label: "Shared library",
          heading: "Context for people who never met the file",
          icon: "users",
          body: [
            "As more teams use one library, more assets are opened by someone other than their maker. A designer reusing a product shot, a producer checking archive footage and a new joiner exploring past campaigns all depend on the record to explain what a file is.",
            ["Recorded metadata does that work together with ", { text: "asset ownership", page: 115 }, ", which gives context about who created or uploaded content, so “where did this come from?” can be answered from the asset’s record rather than from memory."],
          ],
          points: ["The record explains the file", "Fewer questions for the original maker"],
        },
      ],
      sources: [{ kind: "pdf", page: 22 }, { kind: "pdf", page: 281 }, { kind: "pdf", page: 293 }, { kind: "pdf", page: 121 }, { kind: "pdf", page: 115 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "problems",
      eyebrow: "Everyday care",
      heading: "Metadata problems worth managing before they spread",
      items: [
        {
          heading: "Credits written several ways",
          summary: "One creator recorded under different spellings splits their work into separate groups.",
          icon: "user",
          body: [
            "A photographer might appear as a full name on one shoot, as initials on another and under a studio name on a third. Each variant is accurate, yet a search for one can miss the others.",
            "Agreeing a standard form for creator names, and asking agencies and freelancers to use it in their exports, prevents a problem that is tedious to correct once it runs through a large collection.",
          ],
        },
        {
          heading: "Keywords from a vocabulary nobody uses now",
          summary: "Carried-over keywords preserve history, but they may not match how the team describes its work today.",
          icon: "tag",
          body: [
            "A retired system may have used codes, abbreviations or category names that meant something only to the team that invented them. Keeping them is right, because they are part of the record; treating them as the current vocabulary is not.",
            ["In taxonomy design, old terms that colleagues still reach for are often recorded as synonyms of current ones. Synonyms are one of the building blocks of ", { text: "GetSibu’s tag taxonomy", page: 8 }, ", together with hierarchical tags, colours and inheritance."],
          ],
        },
        {
          heading: "Paths that describe a structure that has changed",
          summary: "A file path records where something was, which may no longer be where anything is.",
          icon: "folder",
          body: [
            "After a reorganisation, a path might name a department that has since merged or a folder convention that was abandoned. That history still helps trace a file’s origin, but it should not be read as the current organisation.",
            ["Because existing folder structures can be ", { text: "mirrored or remapped during import", page: 133 }, ", a path kept from the old system and the folders people browse today may well differ, and that difference is expected rather than an error."],
          ],
        },
        {
          heading: "Assuming a migration kept everything",
          summary: "Preserved metadata is reassuring only once someone has confirmed it arrived.",
          icon: "check",
          body: [
            ["Sampling assets from different periods, teams and formats shows whether creators, keywords and paths came through as expected. ", { text: "Migration verification", page: 296 }, " helps organisations confirm that important content and metadata have transferred correctly."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 8 }, { kind: "pdf", page: 133 }, { kind: "pdf", page: 296 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about media metadata management",
      items: [
        {
          question: "Do recorded metadata and tags do the same job?",
          answer: [
            "No. Recorded metadata mostly says where a file came from and how it was made, while tags classify what it is and what it is for. GetSibu organises assets through ",
            { text: "folders, tags, collections, metadata and permissions", page: 4 },
            " together, so each can do its own part of the work.",
          ],
        },
        {
          question: "Why does XMP go missing more easily than EXIF?",
          answer: "Because XMP does not always live inside the file it describes. Some applications write it to a separate sidecar file, which is easily left behind when only the media files are copied, so it is worth confirming that sidecars travel with an export before a library moves.",
        },
        {
          question: "Can other systems work with the metadata on a GetSibu asset record?",
          answer: ["Yes. The ", { text: "asset metadata API", page: 264 }, " can expose asset information, so external systems can work with metadata programmatically."],
        },
      ],
      sources: [{ kind: "pdf", page: 22 }, { kind: "pdf", page: 4 }, { kind: "pdf", page: 264 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on metadata and where it goes",
      variant: "compact",
      pages: [132, 23, 21, 286, 116, 374],
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
