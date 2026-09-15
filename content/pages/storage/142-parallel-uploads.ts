/**
 * 142 · Parallel Uploads — /storage/parallel-uploads
 *
 * Angle (cluster: uploads): parallel upload workflows for batch efficiency — where a batch's time goes, which
 * part sending files side by side affects, and how the make-up of a batch changes the benefit. Chunked Uploads
 * (138) owns single large files and reliability; Resumable Uploads (137) owns interruptions; Media Upload
 * Management (136) owns the workflow as a whole; High-Volume Media Uploads (139) owns busy environments.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how batches of files are transferred in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 142,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Storage & Ingestion",
      lede: "See why sending several files side by side can help a batch of assets reach the library more efficiently, which kinds of batch stand to gain most, and where the rest of a batch’s time goes.",
      visual: { diagram: "ingest-pipeline", focus: "upload" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 142 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Several files in transit at the same time",
      body: [
        "Parallel upload workflows can improve the efficiency of batch asset ingestion in GetSibu. In general terms, a parallel upload keeps more than one file in transit at once, rather than making every file in a batch wait for the one before it.",
        "Sending strictly one file after another wastes time in a particular way. Each file carries some work beyond its contents, because every transfer has to be started, acknowledged and completed. In a batch of many small images that fixed cost repeats again and again, so a one-at-a-time send can spend a noticeable share of its time on the handling around each file rather than on the data itself.",
        "Sending in parallel does not make a connection any larger. It puts more of the existing capacity to work at once, and how much that helps depends on what the batch contains, how big its files are and what else is using the network.",
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["More than one file in transit", "Efficiency for batches of assets", "Handling repeated for every file", "Capacity used, not enlarged", "Batch time beyond the transfer"],
      },
      glance: {
        heading: "Parallel uploads in brief",
        facts: [
          { label: "Area", value: "Storage & Ingestion" },
          { label: "Can improve", value: "Efficiency of batch asset ingestion" },
          { label: "Works on", value: "Batches of files" },
          { label: "Upload workflow", value: "Media Upload Management", page: 136 },
        ],
        actions: [{ kind: "route", path: "/storage", label: "More in Storage & Ingestion" }]
      },
      sources: [{ kind: "pdf", page: 142 }, { kind: "pdf", page: 136 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "batch-shapes",
      eyebrow: "Batch shapes",
      heading: "How the make-up of a batch changes the benefit",
      tabs: [
        {
          label: "Many small files",
          heading: "Packshots, social graphics and slide exports",
          icon: "image",
          body: [
            "A set of product images, a week of social graphics or a folder of presentation exports is the kind of batch where sending in parallel tends to help most.",
            "These are also the batches people send most often, which is why small improvements to how they travel add up over a working month.",
          ],
          points: ["Frequent, everyday batches", "Where the gain is usually clearest"],
        },
        {
          label: "A few large files",
          heading: "Long recordings and finished masters",
          icon: "film",
          body: [
            "When a batch holds only a couple of long recordings, nearly all of the time goes on moving data rather than starting transfers, and each file already asks a lot of the connection. Sending them side by side may help less than people expect.",
            ["For material this heavy, dependability matters more than side-by-side sending: ", { text: "resumable uploads", page: 137 }, " help prevent a large transfer from starting again after a network interruption."],
          ],
          points: ["Data, not handling, takes the time", "Dependability comes first"],
        },
        {
          label: "Mixed deliveries",
          heading: "Stills, clips and documents in one send",
          icon: "layers",
          body: [
            "Agency deliveries and shoot handovers often combine everything at once, so one send holds both the files that gain most from travelling side by side and the files that gain least.",
            "Splitting such a delivery into one batch of stills and documents and another of footage lets each travel in the way that suits it, and makes both easier to follow.",
          ],
          points: ["Light and heavy files in one send", "Separate batches for separate media"],
        },
        {
          label: "Whole libraries",
          heading: "A collection that should not be sent batch by batch",
          icon: "archive",
          body: [
            "However efficiently each batch travels, a person sending an entire back catalogue one batch at a time is still doing the job by hand, with every risk of missed or repeated folders that brings.",
            ["For that job the route is different: ", { text: "bulk asset import", page: 130 }, " helps organisations move large existing libraries into GetSibu without manually uploading each file."],
          ],
          points: ["Batches suit ongoing work", "Archives suit a planned import"],
        },
      ],
      sources: [{ kind: "pdf", page: 137 }, { kind: "pdf", page: 130 }, EXPLAINS],
    },
    {
      kind: "workflow",
      id: "batch-time",
      eyebrow: "End to end",
      heading: "Where a batch’s time goes, and the stage parallel sending touches",
      stages: [
        { label: "Choosing the files", body: "Selecting, naming and grouping a batch happens before anything is transferred, and no upload method shortens the time it takes." },
        { label: "Moving the files", body: "The stage that parallel upload workflows set out to make more efficient for a batch of assets." },
        { label: "Waiting on the heaviest file", body: "A batch is complete only when its largest file lands, so one long recording can set the finishing time for everything sent alongside it." },
        { label: "Checking what arrived", body: "Someone still confirms that the batch is complete and is the one that was meant to be sent, a human stage untouched by how the files travelled." },
      ],
      sources: [{ kind: "pdf", page: 142 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "considerations",
      eyebrow: "Considerations",
      heading: "What to weigh before counting on parallel uploads",
      items: [
        {
          heading: "More at once asks more of the network",
          summary: "Side-by-side sending draws on more of a connection at the same moment.",
          icon: "network",
          body: [
            "On a line shared by a team, a big parallel batch can leave less room for everything else, from video calls to colleagues’ own uploads. Starting heavy batches when the line is quieter, or agreeing who sends what on deadline days, stops one person’s efficient batch from slowing everybody else down.",
          ],
        },
        {
          heading: "Arrival order may differ from selection order",
          summary: "Files travelling together seldom finish in the sequence they were chosen.",
          icon: "workflow",
          body: [
            "When files move side by side, smaller ones usually land before larger ones, whatever order they were picked in. Anyone relying on sequence, such as a numbered set of storyboard frames or pages of a layout, should name files so the order can be recovered from the names rather than from when each one arrived.",
          ],
        },
        {
          heading: "Judge the batch, not a single file",
          summary: "Any benefit shows in how soon a whole batch is through, not in one transfer.",
          icon: "check",
          body: [
            "Watching one file is a poor test, because an individual file may move no faster at all. The comparison that means something is how long a typical batch takes from its first file to its last, set against how long similar batches took before.",
          ],
        },
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about parallel uploads",
      items: [
        {
          question: "Is it worth zipping many small files into one archive instead of relying on parallel uploads?",
          answer: "Usually not for this purpose. Packing small files into a single archive turns the batch back into one large transfer, the kind that gains least from side-by-side sending, and an archive is one file rather than the separate assets colleagues will want to find.",
        },
        {
          question: "Do parallel uploads make new assets searchable sooner?",
          answer: ["Not necessarily. Arriving is only part of becoming findable: after upload, assets move through ", { text: "processing stages", page: 143 }, " such as metadata extraction, thumbnail generation and AI-related processing, and ", { text: "media processing status", page: 145 }, " distinguishes an asset that has uploaded successfully from one that is fully indexed and searchable."],
        },
        {
          question: "How do parallel uploads relate to high-volume media uploads?",
          answer: ["They are separate topics that often meet in busy teams. Parallel workflows can make batch ingestion more efficient, while ", { text: "high-volume media uploads", page: 139 }, " concern environments producing large amounts of video and imagery."],
        },
      ],
      sources: [{ kind: "pdf", page: 143 }, { kind: "pdf", page: 145 }, { kind: "pdf", page: 139 }, { kind: "pdf", page: 142 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on getting batches into the library",
      variant: "compact",
      pages: [136, 141, 138, 139, 130, 143],
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
