/**
 * 291 · Bulk Import — /migration/bulk-import
 *
 * Angle (cluster: bulk-import): the migration step — moving large quantities of media without manual uploads as
 * part of a planned migration, run batch by batch with a check between batches. Bulk Asset Import (130) owns the
 * ingestion mechanics. No upload mechanism (resumable, chunked, parallel) is attributed to bulk import.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how bulk import is run within a migration project; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 291,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Migration",
      lede: "Run the bulk import stage of a migration with care: preparing each source collection, dividing the library into batches people can check, and confirming every batch before the next one moves into GetSibu.",
      visual: { diagram: "migration-map", focus: "import" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 291 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "The step where the plan meets the volume",
      body: [
        "Bulk import allows organisations to move large quantities of media without manually uploading individual files. Within a migration, it is the moment when decisions about scope, metadata and folders stop being discussed and are applied to the collection itself.",
        "Uploading a real library by hand does not hold up. It is slow, it depends on people’s attention late in a working day, and it invites small inconsistencies: a folder skipped, a set of files added twice, names changed along the way. Taking the individual upload out of the process reduces those chances for error and moves the effort into preparation and checking.",
        [
          "A batch can only be as clean as the collection prepared for it, which is why ",
          { text: "digital asset migration planning", page: 290 },
          " comes first. Seen from the ingestion side, ",
          { text: "bulk asset import", page: 130 },
          " is how large existing libraries enter GetSibu without file-by-file uploading.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["No file-by-file uploading", "Batches that follow the plan", "Sources checked before import", "Processing after arrival", "A check between batches", "Masters rather than renditions"],
      },
      highlight: {
        heading: "In practice",
        body: "A production company imports its archive one production at a time. Each production’s producer checks the arrival before the next begins, so a mapping problem appears in one batch instead of across the entire archive.",
        tags: ["Production", "Archives", "Batches"],
      },
      glance: {
        heading: "Bulk import in brief",
        facts: [
          { label: "Area", value: "Migration" },
          { label: "Moves", value: "Large quantities of media" },
          { label: "Replaces", value: "Uploading individual files" },
          { label: "Ingestion view", value: "Bulk Asset Import", page: 130 },
        ],
        actions: [{ kind: "route", path: "/migration", label: "More in Migration" }]
      },
      sources: [{ kind: "pdf", page: 291 }, { kind: "pdf", page: 290 }, { kind: "pdf", page: 130 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "batch-loop",
      eyebrow: "Step by step",
      heading: "Running bulk import batch by batch",
      intro: "Every batch follows the same loop, so the last collection gets the same care as the first.",
      steps: [
        { heading: "Confirm the source", body: "Check that the folders set for this batch are the ones the plan names and that their contents match what the plan expects.", icon: "folder" },
        { heading: "Name who checks it", body: "Agree who knows this collection well enough to confirm its arrival, and when they will do it, before anything moves.", icon: "users" },
        { heading: "Import the batch", body: "Bring the collection in through bulk import, with nobody uploading its files one at a time.", icon: "upload" },
        { heading: "Let processing run", body: "After upload, assets move through processing stages such as metadata extraction, thumbnail generation and AI-related processing.", icon: "refresh", page: 143 },
        { heading: "Check before moving on", body: "Confirm the batch arrived as planned, including metadata and where it sits in the folder structure, before the next collection starts.", icon: "check", page: 296 },
        { heading: "Adjust the plan", body: "Note anything that surprised the team, such as a field that landed somewhere odd, and correct the approach for the batches still to come.", icon: "document" },
      ],
      sources: [{ kind: "pdf", page: 291 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 296 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "batch-boundaries",
      eyebrow: "Dividing the library",
      heading: "Ways to draw the boundaries of an import batch",
      intro: "A batch works best when someone recognises it as a unit and can say what it should contain.",
      columns: ["Suits", "Watch for"],
      rows: [
        { label: "By client or brand", cells: ["Libraries whose ownership already follows clients or brands", "Shared material, such as templates, that belongs to several"] },
        { label: "By production or campaign", cells: ["Work that people remember as distinct projects", "Assets reused across more than one project"] },
        { label: "By period", cells: ["Archives whose conventions changed over the years", "Batches that no single person feels responsible for"] },
        { label: "By source location", cells: ["Drives or older systems that each have their own quirks", "The same work stored in more than one location"] },
        { label: "By demand", cells: ["Getting everyday material into use early", "Rarely requested material left waiting indefinitely"] },
      ],
      sources: [{ kind: "pdf", page: 291 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "decisions",
      eyebrow: "Considerations",
      heading: "Decisions that shape a bulk import",
      items: [
        {
          heading: "Folders that are still in use",
          summary: "A source that changes during import is hard to check afterwards.",
          icon: "folder",
          body: [
            "Where people are still saving into a folder scheduled for a batch, agree a cut-off first: import it last, or ask its users to hold new additions until the batch has been checked. Otherwise the arrival is compared with a source that no longer matches it.",
          ],
        },
        {
          heading: "Masters rather than every rendition",
          summary: "Old locations often hold several versions of the same image.",
          icon: "image",
          body: [
            ["Shared drives frequently keep a master next to web exports, previews and email-sized copies, and importing all of them fills search with near-identical results. Since ", { text: "thumbnails", page: 146 }, " provide fast visual previews without anyone downloading the original, preview-sized copies made only for quick browsing rarely need to come across."],
          ],
        },
        {
          heading: "Timing around busy periods",
          summary: "A large arrival competes with everyday work for attention.",
          icon: "calendar",
          body: [
            "Each import creates checking work for the people who know the content, so large batches sit better away from launches and deadlines. Agree with each team’s lead when its batch will land, so the time to check it is set aside rather than squeezed between other work.",
          ],
        },
        {
          heading: "A short record for each batch",
          summary: "Questions about a migration often arrive long after it has finished.",
          icon: "document",
          body: [
            "Note for every batch which source it came from, what was deliberately left out, who checked it and anything that had to be corrected. When someone later asks why a folder is missing or where a set of files came from, the answer is a line in that record rather than a guess.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 146 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about bulk import",
      items: [
        {
          question: "Is bulk import only useful during a migration?",
          answer: ["No. It suits any large existing collection, including one found after the main move. For material that keeps arriving, ", { text: "watch folder ingestion", page: 128 }, " means a location can be scanned continuously so newly added content can enter the workflow automatically."],
        },
        {
          question: "How large should each bulk import batch be?",
          answer: "Large enough to be meaningful and small enough for its checker to get through before the next batch is due. When checks start to lag behind imports, the batches have outgrown their purpose.",
        },
        {
          question: "What decides the folders and metadata a bulk import brings with it?",
          answer: ["The migration’s earlier choices. Existing ", { text: "folder structures can be mirrored or remapped", page: 133 }, " during import, and metadata such as EXIF, XMP, creators, file paths and custom keywords can be preserved during migration."],
        },
      ],
      sources: [{ kind: "pdf", page: 128 }, { kind: "pdf", page: 133 }, { kind: "pdf", page: 132 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on moving large collections",
      variant: "compact",
      pages: [130, 290, 296, 133, 146, 128],
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
