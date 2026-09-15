/**
 * 131 · Large Library Migration — /storage/large-library-migration
 *
 * Angle (cluster: migration-overview): scale — large creative libraries migrated with important metadata
 * and folder relationships preserved; the storage and ingestion view of what arrives and in what shape.
 * Migrate to GetSibu (281) owns the overall move; Creative Migration (134) owns leaving fragmented storage.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of large-scale migration practice; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 131,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Storage & Ingestion",
      lede: "Plan the move of a creative library too large to check by eye: how to divide it, where scale makes the work harder, and how each asset can keep its context on the way into GetSibu.",
      visual: { diagram: "migration-map" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 131 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Scale changes what a migration has to protect",
      body: [
        "Large creative libraries can be migrated into GetSibu while important metadata and existing folder relationships are preserved. The aim is for files to arrive with the descriptions attached to them and still in the relationships that explained them.",
        "Size alters the nature of the job, not only its length. A small collection usually reflects one team’s habits and can be checked by eye. A large one is layered: conventions from different periods, folders created by people who have since left, keywords added in bursts and never finished. Nobody holds the whole picture, so the structure and metadata are often the only account of what the material is.",
        "Folder relationships deserve particular attention. A file’s parent folder, and that folder’s parent, often identify the client, campaign and stage the work belonged to. Keeping those relationships intact means a migrated asset still sits in context, rather than arriving as one item in an undifferentiated pile.",
        [
          { text: "Folder mapping", page: 133 },
          " decides how the existing structure is carried across, ",
          { text: "metadata preservation", page: 132 },
          " covers the fields that come with each file, and GetSibu’s ",
          { text: "migration capabilities", page: 281 },
          " are intended for libraries moving from shared drives, cloud storage or other asset management systems.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Libraries too large to check by eye", "Metadata preserved in the move", "Folder relationships kept intact", "Layers of past conventions", "Movement in manageable segments", "Verification by sampling"],
      },
      highlight: {
        heading: "In practice",
        body: "A media company moving a long-running archive keeps its client and year folders in their original relationships, so producers who knew the old drives still recognise where things belong.",
        tags: ["Media companies", "Archives", "Producers"],
      },
      glance: {
        heading: "Large migrations in brief",
        facts: [
          { label: "Area", value: "Storage & Ingestion" },
          { label: "Preserves", value: "Important metadata and folder relationships" },
          { label: "Arrangement", value: "Folder Mapping", page: 133 },
          { label: "Checked by", value: "Migration Verification", page: 296 },
        ],
        actions: [{ kind: "route", path: "/storage", label: "More in Storage & Ingestion" }]
      },
      sources: [{ kind: "pdf", page: 131 }, { kind: "pdf", page: 133 }, { kind: "pdf", page: 132 }, { kind: "pdf", page: 281 }, { kind: "pdf", page: 296 }, EXPLAINS],
    },
    {
      kind: "workflow",
      id: "segments",
      eyebrow: "At scale",
      heading: "Moving a large library in manageable segments",
      stages: [
        { label: "Survey", body: "Map the library’s major areas, such as brands, clients, periods or departments, and note which carry good metadata and which carry little." },
        { label: "Segment", body: "Divide the library along those lines so that each part can be planned, checked and signed off on its own terms." },
        { label: "Pilot", body: "Begin with a segment that contains the hard cases, such as deep folders, mixed media and inconsistent names, because problems are cheaper to fix before the rest follows." },
        { label: "Move with context", body: "Bring each segment in with its metadata and folder relationships preserved, keeping or reorganising the structure as planned." },
        { label: "Verify", body: "Confirm that the segment’s important content and metadata have transferred correctly before treating it as finished.", page: 296 },
      ],
      sources: [{ kind: "pdf", page: 131 }, { kind: "pdf", page: 133 }, { kind: "pdf", page: 296 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "harder-at-scale",
      eyebrow: "Worth planning for",
      heading: "Where scale makes a migration harder",
      surface: "muted",
      items: [
        {
          heading: "Conventions that changed over the years",
          summary: "A long-lived library contains several naming and filing systems at once.",
          icon: "history",
          body: [
            ["Early projects may be filed by date, later ones by client and the newest by campaign. Keeping the structure as it is preserves all of those systems side by side; reorganising can bring them together, but each old convention needs its own rule. ", { text: "Migration folder mapping", page: 294 }, " gives teams the flexibility to maintain existing organisation or create a new structure."],
          ],
        },
        {
          heading: "Copies accumulated across drives",
          summary: "The bigger the library, the more copies it has often gathered.",
          icon: "copy",
          body: [
            ["Backups, handovers and reorganisations each tend to leave copies behind, and scale multiplies them. ", { text: "Duplicate asset management", page: 112 }, " helps identify unnecessary copies once they are in the library, which can also support storage optimisation."],
          ],
        },
        {
          heading: "Metadata that is uneven rather than missing",
          summary: "Some areas arrive richly described while others carry almost nothing.",
          icon: "tag",
          body: [
            ["Preservation keeps what exists; it cannot supply what was never recorded. For the thinly described areas, ", { text: "AI asset classification", page: 42 }, " helps categorise assets according to their content and available metadata, reducing repetitive manual organisation work."],
          ],
        },
        {
          heading: "Checking without opening everything",
          summary: "No one can review every asset in a very large library, so the checks have to be designed.",
          icon: "check",
          body: [
            "Verification at scale relies on sampling: assets from each period, client and media type, including the most-used material and the oldest. Comparing a sample’s metadata and location before and after the move gives a reasonable picture of whether preservation held across the library, rather than only in the areas someone happened to look.",
          ],
        },
        {
          heading: "Creators who have moved on",
          summary: "In an old archive, a creator’s name may be the only lead on a piece of work.",
          icon: "user",
          body: [
            ["Many people who made the older material will no longer be with the organisation. ", { text: "Asset attribution", page: 116 }, " lets creators and contributors remain associated with assets during migration, so their names stay available when someone needs to know who made something."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 294 }, { kind: "pdf", page: 112 }, { kind: "pdf", page: 42 }, { kind: "pdf", page: 116 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about large library migration",
      items: [
        {
          question: "Does work have to stop while a large library migration runs?",
          answer: ["Not for the migration’s sake. GetSibu’s ", { text: "migration workflow", page: 292 }, " is designed to let organisations continue using existing storage while content is indexed in the background, so a long move need not hold up day-to-day production."],
        },
        {
          question: "Where should a large library migration start?",
          answer: ["With the library as it is. A successful DAM migration ", { text: "begins with understanding", page: 289 }, " existing storage, metadata, permissions and organisational requirements, and in a large library that survey also shows where to divide the move."],
        },
        {
          question: "Is a large library migration a good time to retire old material?",
          answer: ["It can be. Material that is rarely used but worth keeping can be archived, since ", { text: "asset archiving", page: 108 }, " retains historical content without letting it interfere with everyday discovery, and material nobody needs can simply stay behind."],
        },
      ],
      sources: [{ kind: "pdf", page: 292 }, { kind: "pdf", page: 289 }, { kind: "pdf", page: 108 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on moving large libraries",
      variant: "compact",
      pages: [281, 133, 132, 296, 289, 116],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
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
