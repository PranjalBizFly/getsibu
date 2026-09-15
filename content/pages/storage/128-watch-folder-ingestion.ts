/**
 * 128 · Watch Folder Ingestion — /storage/watch-folder-ingestion
 *
 * Angle (cluster: ingestion): watch folders scanned continuously so newly added content enters the GetSibu
 * workflow automatically; the hot-folder idea, what continuous intake changes, and how to run a watched
 * location well. How watch folders are configured is not stated in the sources and is not described.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of watched-folder practice in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 128,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Storage & Ingestion",
      lede: "Find out when a watched location is the right route into GetSibu, how it moves the care from uploading to deciding what goes in, and what to settle before a team relies on one.",
      visual: { diagram: "ingest-pipeline", focus: "sources" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 128 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A location the library keeps checking for new work",
      body: [
        "In GetSibu, watch folders can be scanned continuously so that content newly added to them can enter the workflow automatically. Placing a finished file in the watched location can then take the place of a separate upload that somebody has to remember.",
        "The idea is older than digital asset management. Print and broadcast operations have long relied on hot folders: designated locations that a system checks again and again, passing whatever appears to the next stage. Their appeal is that the handover becomes part of saving a file instead of an extra task, and extra tasks are the ones people forget at the end of a long day.",
        "Continuous scanning moves the need for discipline to a different place. Nobody has to remember to upload, but somebody has to decide what belongs in the folder, because a watched location exists to pass along what arrives in it. Clear purpose, sensible names and complete files matter more than they do when a person handles every transfer.",
        [
          "Watch folders sit alongside ",
          { text: "automated media import", page: 129 },
          ", which reduces the manual movement of files between storage locations. Content that enters this way then goes through ",
          { text: "asset processing", page: 143 },
          ", with stages such as metadata extraction and thumbnail generation.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["A location scanned continuously", "New content enters automatically", "Saving becomes the handover", "Only ready files in the folder", "Suited to steady streams of material"],
      },
      highlight: {
        heading: "In practice",
        body: "An animation studio’s render queue writes finished shots to a watched location overnight, and the new shots begin their way into the library without anyone having uploaded them.",
        tags: ["Animation", "Render output", "Continuous intake"],
      },
      glance: {
        heading: "Watch folders in brief",
        facts: [
          { label: "Area", value: "Storage & Ingestion" },
          { label: "Works by", value: "Scanning the folder continuously" },
          { label: "Brings in", value: "Newly added content" },
          { label: "Related route", value: "Automated Media Import", page: 129 },
        ],
        actions: [{ kind: "route", path: "/storage", label: "More in Storage & Ingestion" }]
      },
      sources: [{ kind: "pdf", page: 128 }, { kind: "pdf", page: 129 }, { kind: "pdf", page: 143 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "manual-or-watched",
      eyebrow: "What changes",
      heading: "Uploading every new file compared with a watched location",
      columns: ["Someone uploads each new file", "Watch folder ingestion"],
      emphasis: 1,
      rows: [
        ["What starts each transfer", "A person remembering to do it", "Continuous scanning of the folder"],
        ["Where care is needed", "At the end of every task", "In deciding what goes into the folder"],
        ["Best suited to", "Occasional files and one-off deliveries", "A steady stream of new material"],
        ["Typical weak point", "Work saved but never added", "Drafts placed there before they are ready"],
        ["Effort as output grows", "Rises with every extra file", "Shifts to reviewing what has arrived"],
      ],
      sources: [{ kind: "pdf", page: 128 }, { kind: "pdf", page: 127 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "running-it",
      eyebrow: "What to decide",
      heading: "Running a watched location well",
      surface: "muted",
      items: [
        {
          heading: "Give each folder one purpose",
          summary: "A watched location works best when everything in it has the same kind of future.",
          icon: "folder",
          body: [
            "A folder that receives final renders, retouched images and stray downloads mixes material that should be treated very differently. Giving each watched location a single job, such as deliveries from one retoucher or output from one production step, keeps arrivals predictable and makes an odd file easy to trace back to its origin.",
          ],
        },
        {
          heading: "Keep work in progress elsewhere",
          summary: "Only versions the team means to keep should appear where the library is looking.",
          icon: "check",
          body: [
            "A watched location is not a place to work on a file. Drafts, alternative exports and files still being corrected belong somewhere else until they are signed off, and only then move into the watched folder, so that what the library receives is work the team intends to keep.",
          ],
        },
        {
          heading: "Name files before they land",
          summary: "When nobody handles a file on the way in, its name does the explaining.",
          icon: "text",
          body: [
            ["The name given at export does the work a person uploading by hand would otherwise do. Conventions for project, date or version help, and embedded information such as EXIF, XMP, creators and custom keywords ", { text: "can be kept on the asset record", page: 22 }, ", so a carefully exported file carries its own context."],
          ],
        },
        {
          heading: "Expect more material than before",
          summary: "Automatic intake removes the natural brake that manual effort puts on volume.",
          icon: "trend",
          body: [
            ["When adding files takes effort, people add less. Once saving is enough, the amount arriving can climb, and so does the review that follows. ", { text: "Upload analytics", page: 184 }, " show how much new content is entering the library over time, which makes that change visible before it becomes a backlog."],
          ],
        },
        {
          heading: "Set access deliberately",
          summary: "Content that enters without a person handling it still needs considered access.",
          icon: "lock",
          body: [
            ["A continuous feed can bring sensitive work into the library as easily as routine material. ", { text: "Folder-level permissions", page: 152 }, " allow access to be controlled in more detail than organisation-wide access, which matters when the source of new files is a process rather than a person making a choice."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 22 }, { kind: "pdf", page: 184 }, { kind: "pdf", page: 152 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A print archive digitised without an upload rota",
      team: "A retail brand’s archive team",
      situation: "A retail brand is scanning decades of printed catalogues and campaign posters. An operator works through the boxes every day, and marketing wants to use the scans while the project is still under way rather than at the end.",
      steps: [
        { heading: "Scans get one destination", body: "The operator saves finished scans into a single watched location, with names that record the catalogue season and page." },
        { heading: "Nobody runs an upload", body: "The operator’s only job is scanning. New batches enter the GetSibu workflow by way of the watched folder instead of through a daily upload session." },
        { heading: "Printed words become searchable", body: ["Once processed, text printed on the catalogue pages can ", { text: "become part of the searchable asset information", page: 38 }, ", so searching for a product name from an old season can help turn up the right scan."] },
        { heading: "Readiness is checked, not assumed", body: "Before briefing an agency, marketing checks processing status to see which scans are fully indexed and searchable rather than only uploaded." },
        { heading: "Tags are reviewed in batches", body: "A librarian approves suggested tags in bulk each afternoon and overrides any that do not fit the archive’s taxonomy." },
      ],
      outcome: "Scans become usable while the project runs, and the operator’s day goes on scanning rather than on moving files into the library.",
      link: { page: 231, label: "GetSibu for Retail Brands" },
      sources: [{ kind: "pdf", page: 128 }, { kind: "pdf", page: 38 }, { kind: "pdf", page: 145 }, { kind: "pdf", page: 47 }, { kind: "pdf", page: 48 }, { kind: "pdf", page: 231 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about watch folder ingestion",
      items: [
        {
          question: "Is watch folder ingestion the right way to bring in an existing archive?",
          answer: ["A watch folder is for material that keeps arriving. For a collection that already exists, ", { text: "bulk asset import", page: 130 }, " is the route intended to move a large library in without uploading each file."],
        },
        {
          question: "Can colleagues still upload files by hand once a watch folder is in use?",
          answer: ["Yes. ", { text: "Drag and drop upload", page: 127 }, " remains a direct route for individual assets and small batches, which suits the occasional file that has no place in a watched location."],
        },
        {
          question: "Who should decide what goes into a watch folder?",
          answer: "Whoever owns the process feeding it, such as a production coordinator for renders or an archive lead for scans, ideally agreeing the folder’s purpose and naming conventions with the person who looks after the library.",
        },
      ],
      sources: [{ kind: "pdf", page: 127 }, { kind: "pdf", page: 130 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on continuous and automated intake",
      variant: "compact",
      pages: [129, 121, 127, 130, 145, 184],
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
