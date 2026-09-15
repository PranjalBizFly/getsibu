/**
 * 376 · What Is a DAM Migration? — /resources/what-is-a-dam-migration
 *
 * Angle (cluster: dam-fundamentals; migration-overview): vendor-neutral explainer of what a migration has to carry
 * (files, metadata, structure, access, relationships and history), where migrations tend to go wrong and the ways
 * of switching over. Migrate to GetSibu (281) owns the section's phases and decisions; Large Library Migration
 * (131), Creative Migration (134), Creative Library Migration (282), Creative Data Migration (288), Creative Team
 * Migration (298) and Migration Support (300) own GetSibu's angles. Framed 295 and 297 are not paraphrased.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Vendor-neutral explanation of DAM migration practice; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 376,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "centered",
      eyebrow: "Resources",
      lede: "What a DAM migration involves beyond copying files, the layers of context it has to carry, where migrations tend to go wrong, the ways teams switch over, and how GetSibu approaches the move.",
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 376 }, { kind: "pdf", page: 281 }],
    },
    {
      kind: "definition",
      id: "definition",
      eyebrow: "Definition",
      term: "DAM migration",
      answer: "DAM migration is the process of moving an existing digital asset collection into another asset management environment. It moves the context around the files as well as the files themselves.",
      detail: "The collection might sit on shared drives, in general cloud storage or in an older asset management system. Whatever the source, a migration has to decide what comes across, how metadata and structure translate into the new environment, how people keep working during the move and how everyone will know the result is complete.",
      sources: [{ kind: "pdf", page: 376 }, EXPLAINS],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Why a migration is more than copying files",
      body: [
        "A DAM migration moves a collection, and everything that makes it useful, from one environment to another. Copying files is the simplest part; the value lies in the descriptions, structure, relationships and history attached to them.",
        "That value was built slowly and can be lost quickly. Keywords added over many years sit in fields the new system may name differently. Folder paths carry meaning nobody wrote down. Versions, comments and approvals may exist only in the old system’s database. A migration that moves files but drops their context leaves a team with tidier storage and a library it no longer trusts.",
        [
          "Two other ideas sit underneath every migration: ",
          { text: "asset metadata", page: 374 },
          ", the context most at risk, and ",
          { text: "asset taxonomy", page: 375 },
          ", which the new library’s structure should follow. GetSibu provides ",
          { text: "migration capabilities", page: 281 },
          " for teams moving an existing creative library into the platform.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Files together with their context", "Metadata mapped between systems", "Structure kept or redesigned", "Work continuing during the move", "Verification before switching over"],
      },
      highlight: {
        heading: "In practice",
        body: "A brand team leaving an older DAM maps each old metadata field to a new one before importing. It finds that “usage notes” has no obvious home and creates a custom field, rather than losing years of licensing detail.",
        tags: ["Brand", "Library managers", "Operations"],
      },
      glance: {
        heading: "DAM migration in brief",
        facts: [
          { label: "Moves", value: "Assets, metadata and structure" },
          { label: "From", value: "Shared drives, cloud storage or another DAM" },
          { label: "Ends with", value: "Verification and switch-over" },
          { label: "Starts with", value: "DAM Migration Strategy", page: 289 },
        ],
        actions: [{ kind: "route", path: "/resources", label: "More in Resources" }]
      },
      sources: [{ kind: "pdf", page: 376 }, { kind: "pdf", page: 374 }, { kind: "pdf", page: 375 }, { kind: "pdf", page: 281 }, { kind: "pdf", page: 289 }, { kind: "pdf", page: 290 }, { kind: "pdf", page: 291 }, { kind: "pdf", page: 296 }, EXPLAINS],
    },
    {
      kind: "layers",
      id: "what-moves",
      eyebrow: "What moves",
      heading: "The layers a DAM migration has to carry",
      intro: "The lower a layer sits in this list, the harder it tends to be to move and the easier it is to forget.",
      layers: [
        { label: "Files", body: "The original assets in their native formats, ideally the highest-quality masters rather than exports or previews." },
        { label: "Metadata", body: "Embedded fields such as EXIF and XMP, plus keywords, descriptions, credits and custom fields held by the old system." },
        { label: "Structure", body: "Folders, collections and the classification that tells people where things belong and how they relate." },
        { label: "Access", body: "Who could see and change what, which seldom maps one-to-one onto a new permission model." },
        { label: "Relationships and history", body: "Versions, links between related assets, comments, approvals and usage records, often held only in the source system’s database." },
      ],
      sources: [{ kind: "pdf", page: 376 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "pitfalls",
      eyebrow: "Considerations",
      heading: "Where DAM migrations tend to go wrong",
      items: [
        {
          heading: "Fields that do not match",
          summary: "Two systems rarely describe assets with the same fields.",
          icon: "tag",
          body: [
            "A metadata crosswalk, a table mapping each source field to its destination, shows early where fields merge, split or have no equivalent. Without one, information lands quietly in the wrong place or nowhere at all.",
          ],
        },
        {
          heading: "Masters left behind",
          summary: "Exports and previews are easy to move; originals are what matter.",
          icon: "image",
          body: [
            "Older systems and shared drives often hold several renditions of each asset. Migrating a compressed copy instead of the master saves time now and can lose quality for good once the old source is retired.",
          ],
        },
        {
          heading: "Duplicates carried across",
          summary: "Old locations often hold the same material more than once.",
          icon: "copy",
          body: [
            ["When content comes from several sources, its copies arrive together. Finding them before the move, or soon after it, keeps the new library from inheriting clutter, and the explainer on ", { text: "duplicate detection", page: 368 }, " shows how identical and visually equivalent files are identified."],
          ],
        },
        {
          heading: "Meaning hidden in paths and names",
          summary: "Folder names and filenames often encode client, season or status.",
          icon: "folder",
          body: [
            "A path such as “Clients › Retail brand › Spring › Approved” holds four facts. If they are not captured as metadata before the structure changes, they vanish with the old folders.",
          ],
        },
        {
          heading: "A long freeze",
          summary: "Stopping work until the move is finished rarely suits creative teams.",
          icon: "clock",
          body: [
            "Deadlines do not pause for a migration. Planning how new work is handled while content moves, and how changes in the old location are picked up, avoids a gap in which nobody knows which system is current.",
          ],
        },
        {
          heading: "No definition of done",
          summary: "Counting files is not the same as verifying a migration.",
          icon: "check",
          body: [
            "Agree beforehand what must be true before the old environment is retired: key metadata present, important collections findable, access correct and a sample of heavily used assets checked by the people who use them.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 368 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "switching-over",
      eyebrow: "Switching over",
      heading: "Three ways to move from the old library to the new",
      tabs: [
        {
          label: "All at once",
          heading: "A single cutover",
          icon: "zap",
          body: [
            "Everything moves in one planned window and the team switches on an agreed date. It is simple to communicate and avoids running two systems.",
            "The risk is concentrated: a problem affects everyone at once, and the window must be long enough to import, check and fix.",
          ],
          points: ["One switch date", "Risk concentrated in one window"],
        },
        {
          label: "In phases",
          heading: "Collection by collection",
          icon: "layers",
          body: [
            "Content moves in stages, such as one brand, department or archive at a time, and each phase teaches lessons the next can use.",
            "For a while people need to know which material has moved and which has not, so clear communication matters.",
          ],
          points: ["Lessons applied along the way", "Two locations for a period"],
        },
        {
          label: "Side by side",
          heading: "Old and new running in parallel",
          icon: "refresh",
          body: [
            "The existing storage stays in use while the new library is populated and indexed, and people switch once it is ready and verified.",
            ["GetSibu’s ", { text: "migration workflow", page: 292 }, " is designed to let organisations keep using existing storage while content is indexed in the background."],
          ],
          points: ["Work continues during the move", "Switch once verified"],
        },
      ],
      sources: [{ kind: "pdf", page: 292 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "in-getsibu",
      eyebrow: "In GetSibu",
      heading: "How GetSibu approaches a DAM migration",
      items: [
        {
          heading: "Metadata retained",
          body: "Metadata such as EXIF, XMP, creators and custom keywords can be retained during a migration to GetSibu.",
          icon: "tag",
          page: 286,
        },
        {
          heading: "Folders mirrored or remapped",
          body: "Folder mapping gives teams the flexibility to maintain their existing organisation or create a new structure.",
          icon: "folder",
          page: 294,
        },
        {
          heading: "Import in bulk",
          body: "Large collections can be brought in through bulk import instead of manual, file-by-file uploading.",
          icon: "upload",
          page: 291,
        },
        {
          heading: "Uploaded versus searchable",
          body: "Processing status helps teams tell an asset that has uploaded successfully from one that is fully indexed and searchable.",
          icon: "clock",
          page: 145,
        },
        {
          heading: "Verification",
          body: "Migration verification helps organisations confirm that important content and metadata have transferred correctly.",
          icon: "check",
          page: 296,
        },
      ],
      sources: [{ kind: "pdf", page: 286 }, { kind: "pdf", page: 294 }, { kind: "pdf", page: 291 }, { kind: "pdf", page: 145 }, { kind: "pdf", page: 296 }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about DAM migration",
      items: [
        {
          question: "How long does a DAM migration take?",
          answer: "There is no typical duration. The number of files matters less than the state of the metadata, how many sources are involved, how much structure is being redesigned and how thoroughly the result is checked, and preparing content can take longer than moving it.",
        },
        {
          question: "Is a DAM migration a good moment to reorganise folders?",
          answer: "It can be, since the content is being handled anyway, but changing the structure and the system at the same time adds risk. One compromise is to mirror the old structure first and reorganise once people trust the new library; another is to redesign only the areas everyone agrees are broken.",
        },
        {
          question: "Should a DAM migration happen all at once or in phases?",
          answer: "It depends on size and risk. Small, well-organised collections can often move in one cutover, while larger or less tidy libraries tend to benefit from phases or from running old and new side by side until the new library is verified.",
        },
        {
          question: "Can original file paths be kept when a library moves to GetSibu?",
          answer: ["Yes. File paths are among the metadata that ", { text: "can be preserved during migration", page: 132 }, ", so where an asset came from can remain part of its record after the move."],
        },
      ],
      sources: [{ kind: "pdf", page: 132 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on moving a library",
      variant: "compact",
      pages: [281, 289, 296, 131, 298, 300],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the migration topics." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Make Every Asset Discoverable",
      conversionPage: 394,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 394 }],
    },
  ],
};

export default page;
