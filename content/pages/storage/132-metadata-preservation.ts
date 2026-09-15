/**
 * 132 · Metadata Preservation — /storage/metadata-preservation
 *
 * Angle (cluster: metadata-preservation, primary): the ingestion view of which fields are kept when assets
 * are imported — where EXIF, XMP, creators, file paths and custom keywords live, who writes them and how
 * everyday habits keep them in the files. Media Metadata Management (22) owns what each field means
 * on the record; Metadata Migration (286) and Migration Metadata Preservation (293) own the migration views.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how file metadata is stored and lost in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 132,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Storage & Ingestion",
      lede: "See which metadata fields GetSibu can preserve when assets are imported, where each one comes from, and the everyday habits that keep those fields inside the files that reach the library.",
      visual: { diagram: "migration-map", focus: "metadata" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 132 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "What a file knows about itself, kept through the move",
      body: [
        "Metadata such as EXIF, XMP, creators, file paths and custom keywords can be preserved when assets are imported or migrated into GetSibu. The description a file has gathered over its life can arrive with it rather than stay behind in the old location.",
        "Each of those fields comes from a different place. EXIF is written by the device that captured an image, XMP is added by creative applications and the people using them, and a file path belongs to the storage around a file rather than to the file itself. Creators and custom keywords may be embedded, or held in an earlier system’s records. Knowing where a field sits is the first step in making sure it is present when an import begins.",
        [
          "Once kept, the fields ",
          { text: "can become part of the asset record", page: 22 },
          ", where ",
          { text: "asset metadata search", page: 23 },
          " lets people search them alongside tags and extracted content.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["EXIF from cameras and phones", "XMP inside or beside the file", "Creators kept with their work", "File paths as a record of origin", "Custom keywords from earlier systems", "Fields written at the source"],
      },
      glance: {
        heading: "Preserved fields",
        facts: [
          { label: "Area", value: "Storage & Ingestion" },
          { label: "Fields", value: "EXIF, XMP, creators, file paths, custom keywords" },
          { label: "Held on", value: "Media Metadata Management", page: 22 },
          { label: "Confirmed by", value: "Migration Verification", page: 296 },
        ],
        actions: [{ kind: "route", path: "/storage", label: "More in Storage & Ingestion" }]
      },
      sources: [{ kind: "pdf", page: 132 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 23 }, { kind: "pdf", page: 296 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "where-fields-live",
      eyebrow: "Field by field",
      heading: "Where each field lives and who writes it",
      columns: ["Where it usually lives", "Who or what usually writes it"],
      rows: [
        { label: "EXIF", cells: ["Inside image files", "The camera or phone that captured the image"] },
        { label: "XMP", cells: ["Inside the file, or in a sidecar file stored beside it", "Creative applications, and the people using them"] },
        { label: "Creators", cells: ["Embedded credit fields, an earlier system’s records or a folder name", "Photographers, designers, editors or whoever catalogued the work"] },
        { label: "File paths", cells: ["The storage structure around a file, not the file itself", "Whoever saved the file and named its folders"] },
        { label: "Custom keywords", cells: ["Embedded fields or a previous system’s database", "Library managers and teams describing their own material"] },
      ],
      sources: [{ kind: "pdf", page: 132 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "by-origin",
      eyebrow: "At the source",
      heading: "Habits that keep fields in the files a library receives",
      surface: "muted",
      tabs: [
        {
          label: "Exports",
          heading: "Export settings decide what leaves the application",
          icon: "palette",
          body: [
            "Creative applications often store titles, descriptions, credits and keywords as XMP, so details filled in while the work is being made can travel inside the file without anyone typing them again.",
            "The weak point is the export. Presets designed to make files smaller or ready for the web can remove embedded information, so the settings used for deliverables headed to the library are worth checking once and then sharing as a team standard.",
          ],
          points: ["Descriptions written where the work is made", "Export presets checked, then shared"],
        },
        {
          label: "Credits",
          heading: "Credit written into the file, not the email",
          icon: "user",
          body: [
            "Credit often travels beside a file rather than inside it: in a delivery email, a spreadsheet or a message saying who shot what. Once the file and that note part company, nobody can say who made the work.",
            ["Asking photographers, illustrators and agencies to complete creator fields in their own tools keeps credit inside the file, and ", { text: "asset attribution", page: 116 }, " lets creators and contributors remain associated with assets once they are in the library."],
          ],
          points: ["Creator fields completed at source", "Credit that does not depend on a note"],
        },
        {
          label: "Folders",
          heading: "A path records only what folder names say",
          icon: "folder",
          body: [
            "File paths are one of the fields that can be preserved, which keeps a record of where each file was kept. That record is only as informative as the names along it: a path through a client, a campaign and a “Retouched” folder explains a file, while one through “New folder” and “misc” explains nothing.",
            "Renaming vague folders before an import is a small job that makes every preserved path more useful afterwards, whatever is later decided about the folders themselves.",
          ],
          points: ["Paths as a record of origin", "Folder names made meaningful first"],
        },
      ],
      sources: [{ kind: "pdf", page: 132 }, { kind: "pdf", page: 116 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about metadata preservation",
      items: [
        {
          question: "Is metadata preservation only relevant when leaving another asset management system?",
          answer: "No. The same fields matter whenever an existing collection is brought in, including files from shared drives and cloud storage, and whenever new work arrives carrying details its makers recorded.",
        },
        {
          question: "How is metadata preservation different from metadata migration?",
          answer: ["Metadata preservation looks at which fields come in with each asset. ", { text: "Metadata migration", page: 286 }, " treats carrying metadata over from a previous system as one workstream within a planned move."],
        },
        {
          question: "Does preserving file paths mean the old folder structure is kept?",
          answer: ["Not by itself. A preserved path records where a file used to be; whether the folders themselves are mirrored or remapped is decided through ", { text: "folder mapping", page: 133 }, "."],
        },
        {
          question: "Does preserved metadata remove the need for AI-assisted tagging?",
          answer: ["They do different jobs. Preserved metadata records what people and devices wrote about a file, while ", { text: "AI-assisted tagging", page: 383 }, " can suggest tags based on the content of supported media, which helps most where the recorded description is thin."],
        },
      ],
      sources: [{ kind: "pdf", page: 132 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 286 }, { kind: "pdf", page: 133 }, { kind: "pdf", page: 383 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on keeping metadata intact",
      variant: "compact",
      pages: [22, 286, 293, 133, 296, 131],
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
