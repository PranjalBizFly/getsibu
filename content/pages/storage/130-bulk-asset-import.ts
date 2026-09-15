/**
 * 130 · Bulk Asset Import — /storage/bulk-asset-import
 *
 * Angle (clusters: ingestion; bulk-import, primary): the ingestion mechanics of bringing a large existing
 * library in without uploading file by file — scope, arrangement, processing and what the import reveals.
 * Bulk Import (291) owns the migration-step view. Nothing here says how the import transfers files.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of large-import practice; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 130,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Storage & Ingestion",
      lede: "Move a large existing library into GetSibu without uploading each file by hand, and prepare for what bringing a whole collection across at once will show you about it.",
      visual: { diagram: "migration-map", focus: "import" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 130 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "An existing collection brought in as a whole",
      body: [
        "Bulk import helps organisations move large existing libraries into GetSibu without manually uploading each file. It is the route for the collection a team already owns, as opposed to the new work it produces week by week.",
        "Existing collections reach a library at more moments than a migration. A company acquires a brand along with its photography, a production wraps and its material needs a permanent home, or a department that kept its own drive finally joins the shared library. Each is a large, finished body of work arriving at once rather than a trickle of new files.",
        "Treating that collection as one movement gives it a defined scope: this archive, this production, these drives. The practical questions become what belongs in the import, how it should be arranged when it arrives and who should be able to see it once it is there.",
        [
          "Arrangement is where ",
          { text: "folder mapping", page: 133 },
          " comes in, and the metadata an import carries across is covered by ",
          { text: "metadata preservation", page: 132 },
          ". Everyday additions take other routes into the library, which ",
          { text: "automated asset ingestion", page: 121 },
          " sets out.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Large existing libraries", "No file-by-file uploading", "A defined scope for each import", "Arrangement decided before arrival", "Access settled for what arrives"],
      },
      glance: {
        heading: "Bulk import in brief",
        facts: [
          { label: "Area", value: "Storage & Ingestion" },
          { label: "Suits", value: "Large existing libraries" },
          { label: "Arranged by", value: "Folder Mapping", page: 133 },
          { label: "As a migration step", value: "Bulk Import", page: 291 },
        ],
        actions: [{ kind: "route", path: "/storage", label: "More in Storage & Ingestion" }]
      },
      sources: [{ kind: "pdf", page: 130 }, { kind: "pdf", page: 133 }, { kind: "pdf", page: 132 }, { kind: "pdf", page: 121 }, { kind: "pdf", page: 291 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "everyday-or-bulk",
      eyebrow: "Where it fits",
      heading: "Everyday intake compared with a bulk import",
      columns: ["Everyday intake", "Bulk asset import"],
      emphasis: 1,
      rows: [
        ["What arrives", "New work as it is produced", "A collection that already exists"],
        ["Usual route", "Drag and drop or a watch folder", "One planned import, with no file-by-file uploading"],
        ["Scope", "Open-ended", "Agreed before the import starts"],
        ["Folder structure", "Wherever files happen to be saved", "Mirrored or remapped during import"],
        ["Knowing it is done", "Each addition seen as it happens", "Uploaded and fully indexed assets told apart"],
      ],
      sources: [{ kind: "pdf", page: 130 }, { kind: "pdf", page: 127 }, { kind: "pdf", page: 128 }, { kind: "pdf", page: 133 }, { kind: "pdf", page: 145 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "collections",
      eyebrow: "By kind of collection",
      heading: "Collections that arrive in bulk, and what each one asks for",
      surface: "muted",
      tabs: [
        {
          label: "A client’s history",
          heading: "Past campaigns kept apart from other clients",
          icon: "briefcase",
          body: [
            "An agency taking on a client’s back catalogue needs that material separate from every other client’s work from the first day, not tidied into place afterwards.",
            ["In GetSibu, ", { text: "client-specific workspaces", page: 177 }, " help agencies organise and isolate customer content, so settle where the client’s material will live before the import begins."],
          ],
          points: ["Separation settled before import", "A home decided for the client’s work"],
        },
        {
          label: "An acquired brand",
          heading: "Access decided before the collection is visible",
          icon: "lock",
          body: [
            "Material inherited from another organisation can include work under embargo, unfamiliar usage terms or campaigns that were never released. Nobody on the receiving team yet knows which is which.",
            ["Because ", { text: "new folders can remain private", page: 154 }, " until access is explicitly granted, an imported brand can wait in a closed area while someone who knows its history decides who should see it."],
          ],
          points: ["Unknown terms treated with care", "A closed area until access is agreed"],
        },
        {
          label: "A finished production",
          heading: "A large volume of footage in one go",
          icon: "film",
          body: [
            "When a production wraps, rushes, selects, graphics and masters all need a permanent home at the same time, and much of that material is video.",
            ["Teams working with large amounts of video and imagery can use ", { text: "ingestion workflows designed around high-volume asset environments", page: 139 }, ", which suits a collection of that shape better than a series of separate uploads."],
          ],
          points: ["Mostly video, all at once", "Workflows designed for high volume"],
        },
        {
          label: "A department’s drive",
          heading: "Work that only its owners could navigate",
          icon: "users",
          body: [
            "A team joining the shared library brings folders its own members understand and nobody else has opened. Asking one of them to check a sample after the import catches misplaced material that an outsider would not notice.",
            ["Once the drive is in a shared library, ", { text: "asset attribution", page: 116 }, " lets creators and contributors remain associated with their work, so colleagues elsewhere can see whom to ask."],
          ],
          points: ["A member of the team checks the result", "Creators still associated with their work"],
        },
      ],
      sources: [{ kind: "pdf", page: 177 }, { kind: "pdf", page: 154 }, { kind: "pdf", page: 139 }, { kind: "pdf", page: 116 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "what-it-reveals",
      eyebrow: "Before and after",
      heading: "What a large import tends to reveal about a collection",
      items: [
        {
          heading: "Copies from overlapping drives",
          summary: "Collections built over years often hold the same files in several places.",
          icon: "copy",
          body: [
            "Old project drives are often partial copies of one another, and preparing an import is frequently the first time anyone compares them side by side. Deciding which drive holds the reference copy of each project before the import is simpler than untangling the overlap later.",
          ],
        },
        {
          heading: "Thin descriptions on older material",
          summary: "The oldest parts of an archive usually carry the least information.",
          icon: "search",
          body: [
            ["Files from years ago may have generic names and little embedded metadata, which makes them hard to find by filename alone. ", { text: "Asset metadata search", page: 23 }, " lets users search available metadata alongside tags and extracted content, giving more than one way into material whose names say little."],
          ],
        },
        {
          heading: "Meaning held in folder names",
          summary: "A folder called “Final approved” is information, not only a location.",
          icon: "folder",
          body: [
            ["Old structures encode client, year and status in the names of folders. File paths are among the metadata that ", { text: "can be preserved during migration", page: 132 }, ", which can keep the old location as part of each asset’s context."],
          ],
        },
        {
          heading: "The order people need things in",
          summary: "A large collection becomes usable over time, not all at the same moment.",
          icon: "clock",
          body: [
            "In any system that prepares assets for search, the work grows with the amount that arrives. Deciding which part of the collection people will reach for first, and bringing that part across early, gives the team something useful while the rest is still being prepared.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 23 }, { kind: "pdf", page: 132 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about bulk asset import",
      items: [
        {
          question: "How large does a collection need to be before bulk asset import makes sense?",
          answer: "There is no fixed threshold. The signal is practical: once adding a collection would mean days of repeated uploading, or its structure is worth keeping, importing in bulk is the better route.",
        },
        {
          question: "How is bulk asset import different from bulk import during a migration?",
          answer: ["They describe the same kind of movement from different directions. Bulk asset import is the ingestion route for bringing an existing library in, while ", { text: "bulk import", page: 291 }, " treats moving large quantities of media as one step within a planned migration."],
        },
        {
          question: "Can a team keep working while a bulk asset import is under way?",
          answer: ["When the import is part of a migration, GetSibu’s ", { text: "migration workflow", page: 292 }, " is designed to let organisations continue using existing storage while content is indexed in the background."],
        },
        {
          question: "What should happen to the original storage after a bulk asset import?",
          answer: "Keeping the source until the imported collection has been checked is a sensible safeguard. Whether it is then archived or retired is the organisation’s own decision, made according to its policies.",
        },
      ],
      sources: [{ kind: "pdf", page: 130 }, { kind: "pdf", page: 291 }, { kind: "pdf", page: 292 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on importing existing libraries",
      variant: "compact",
      pages: [291, 133, 132, 139, 177, 145],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Start Your Creative Library",
      conversionPage: 391,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 391 }],
    },
  ],
};

export default page;
