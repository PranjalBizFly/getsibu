/**
 * 141 · Upload Progress — /storage/upload-progress
 *
 * Angle (cluster: uploads): progress indicators that show how many files are currently being processed — what
 * that count is for, how to read it, and how it sits beside the other signals about new material. Media Upload
 * Management (136) owns visibility and recovery as a whole; Media Processing Status (145) owns readiness; AI
 * Processing Queue (144) owns queue states; Upload Analytics (184) owns the inflow over time.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of progress information during file transfers; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 141,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Storage & Ingestion",
      lede: "Tell where a batch you have added stands from the number of files still going through, and learn to read that figure alongside the other signals that say when new material can be used.",
      visual: { diagram: "ingest-pipeline", focus: "upload" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 141 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A figure that shows a batch is still moving",
      body: [
        "Upload progress indicators in GetSibu allow users to understand how many files are currently being processed. A count of files is how people naturally think about the batch they have just sent.",
        "Uncertainty during an upload is costly in quiet ways. Without some sign of progress, nobody can tell a slow batch from one that has stopped, so people keep checking back or message a colleague to ask whether anything has arrived. Each of those reactions takes attention away from the work, and on a busy day they multiply across everyone waiting.",
        "Counting in files suits the way creative work is grouped. A photographer thinks in selects from a shoot, an editor in the exports for a review round and a coordinator in the finals from an agency. A number of files maps straight onto those units, so a sender can relate what they see to the work they chose to send.",
        [
          "Progress information belongs to ",
          { text: "media upload management", page: 136 },
          ", which also covers resumable transfers for unreliable networks. Whether colleagues can already find and use the new files is a separate question, with signals of its own.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Files currently being processed", "Counts that match how work is grouped", "Movement people can see", "Less checking and chasing", "Readiness is a separate question"],
      },
      highlight: {
        heading: "In practice",
        body: "A photographer sending selects just before a client call can see how many files are still going through, and decide whether to start the call or give the batch a little longer.",
        tags: ["Photographers", "Client deadlines", "Batches"],
      },
      glance: {
        heading: "Upload progress in brief",
        facts: [
          { label: "Area", value: "Storage & Ingestion" },
          { label: "Shows", value: "How many files are currently being processed" },
          { label: "Related signal", value: "Media Processing Status", page: 145 },
          { label: "Part of", value: "Media Upload Management", page: 136 },
        ],
        actions: [{ kind: "route", path: "/storage", label: "More in Storage & Ingestion" }]
      },
      sources: [{ kind: "pdf", page: 141 }, { kind: "pdf", page: 136 }, { kind: "pdf", page: 145 }, EXPLAINS],
    },
    {
      kind: "layers",
      id: "signals",
      eyebrow: "Where progress fits",
      heading: "Four signals about new files, from this minute to this season",
      intro: "Each signal answers a different question about material entering the library, over a different span of time.",
      layers: [
        {
          label: "Upload progress",
          body: "The question of the moment: is the batch I have just added still going through? This is the signal closest to the person sending, and the one that matters while they are still waiting.",
        },
        {
          label: "AI processing queue",
          body: "Where does a particular asset stand in AI processing? Status information shows whether it is queued, processing or ready, which is a question about individual assets rather than a whole batch.",
          page: 144,
        },
        {
          label: "Processing status",
          body: "Can colleagues rely on it yet? Processing status separates an asset that has uploaded successfully from one that is fully indexed and searchable, the point at which a search can be expected to find it.",
          page: 145,
        },
        {
          label: "Upload analytics",
          body: "How much has been arriving lately? Upload analytics show how much new content is entering the library over time, a question for weeks and months rather than for one afternoon’s batch.",
          page: 184,
        },
      ],
      sources: [{ kind: "pdf", page: 144 }, { kind: "pdf", page: 145 }, { kind: "pdf", page: 184 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "reading",
      eyebrow: "Practical reading",
      heading: "Reading upload progress without misreading it",
      items: [
        {
          heading: "Know roughly what you sent",
          summary: "A figure is only informative when you know roughly what it should be.",
          icon: "check",
          body: [
            "Before starting, note roughly how many files you selected and which of them are heavy. That context turns the count of files being processed into something you can interpret, rather than a number you watch without knowing what it ought to say.",
          ],
        },
        {
          heading: "A figure that stops changing",
          summary: "A number that holds steady for a while raises a question; it is not yet an answer.",
          icon: "clock",
          body: [
            "Files in one batch rarely take equal time, so an unchanged figure may simply mean that a long recording or a finished master is taking longer than the rest. Check whether the batch included material of that kind and, on a shaky connection, whether it is still up, before assuming anything has failed.",
            ["Where the network did drop, ", { text: "resumable uploads", page: 137 }, " help prevent large transfers from having to restart from the beginning."],
          ],
        },
        {
          heading: "Movement is not proof of the right selection",
          summary: "A batch can travel smoothly and still be the wrong batch.",
          icon: "flag",
          body: [
            "Last week’s exports, the unretouched frames or a folder missing its final file all go through just as readily as the intended set. A progress figure speaks to how many files are being processed, not to whether they were the ones the job needed, so a quick look at the selection before sending saves a batch that has to be sent again.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 137 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "Launch photographs sent while journalists wait",
      team: "A PR team",
      situation: "A PR team is covering a product launch. Journalists have been promised approved images soon after the presentation, and the communications lead is out front while the photographer uploads from a side room.",
      steps: [
        { heading: "The urgent images go first", body: "The photographer sends the speaker shots as one batch and the product shots as another, so the pictures needed earliest are not waiting behind the rest." },
        { heading: "One update replaces many messages", body: "Rather than the lead asking every few minutes, the photographer reads the upload progress indicator and sends a single update saying how many files are still going through, and the lead gets on with preparing the release." },
        { heading: "Chosen images are approved", body: ["Once the photographs are through, the lead reviews them and marks the chosen ones as approved through the team’s ", { text: "creative approval workflow", page: 67 }, ", so only reviewed pictures go out."] },
      ],
      outcome: "Journalists receive approved images while the launch is still news, and the communications lead spends the wait on the release instead of chasing the photographer for updates.",
      link: { page: 235, label: "GetSibu for PR Teams" },
      sources: [{ kind: "pdf", page: 141 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 235 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about upload progress",
      items: [
        {
          question: "Does upload progress matter when adding only a few files?",
          answer: ["Less so. With a handful of files, such as a few added by ", { text: "drag and drop upload", page: 127 }, ", there is little to follow and little doubt about what was sent, so progress information earns its place mainly with larger batches and heavier media."],
        },
        {
          question: "How can upload progress help avoid duplicate assets?",
          answer: ["Uncertainty is a common reason for people to send the same material twice, so visible progress removes a motive for resending. Where copies still arrive, ", { text: "duplicate detection", page: 40 }, " identifies identical files and visually equivalent copies."],
        },
        {
          question: "Is upload progress enough to confirm that a large import succeeded?",
          answer: ["No. The count helps a sender follow how many files are being processed, but confirming that important content and metadata have transferred correctly is the job of ", { text: "migration verification", page: 296 }, "."],
        },
      ],
      sources: [{ kind: "pdf", page: 127 }, { kind: "pdf", page: 40 }, { kind: "pdf", page: 296 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on following uploads through",
      variant: "compact",
      pages: [136, 145, 144, 184, 137, 142],
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
