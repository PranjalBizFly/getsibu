/**
 * 145 · Media Processing Status — /storage/media-processing-status
 *
 * Angle (cluster: processing): the difference between an asset that has uploaded successfully and one that is
 * fully indexed and searchable — why the gap misleads people, and which decisions are worth holding until it
 * closes. Asset Processing (143) owns the stages; AI Processing Queue (144) owns queued, processing and ready;
 * Creative Asset Indexing (21) owns the indexed outcome.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of the gap between uploading and searchability in creative libraries; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 145,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Storage & Ingestion",
      lede: "Tell an asset that has simply arrived from one that is fully indexed and searchable, and learn which decisions, from briefing colleagues to retiring old storage, are worth holding until that difference is settled.",
      visual: { diagram: "ingest-pipeline", focus: "index" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 145 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Arriving is one milestone and being findable is another",
      body: [
        "Processing status in GetSibu helps teams distinguish between an asset that has uploaded successfully and one that is fully indexed and searchable. From the outside the two moments can look alike, and telling them apart is what lets a team know when searching for new material is worth doing.",
        "The gap matters because people act on assumptions. Someone who has just finished an upload reasonably believes the job is done, searches for the file to check and, if it does not turn up as expected, concludes that search is unreliable or the upload failed. Often neither is true; the asset may simply not be fully indexed yet. Repeated a few times, that experience teaches a team to distrust its own library.",
        [
          "Indexing is what closes the gap. As assets enter GetSibu, available metadata is processed and each asset is prepared for search and organisation, contributing to an ",
          { text: "indexed representation of the library", page: 21 },
          " that supports discovery.",
        ],
        [
          "The ",
          { text: "AI processing queue", page: 144 },
          " answers a related but separate question: whether an asset’s AI work is queued, processing or ready.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Uploaded successfully", "Fully indexed and searchable", "A gap between arrival and search", "Decisions that are worth holding", "Trust in search protected"],
      },
      glance: {
        heading: "Processing status in brief",
        facts: [
          { label: "Area", value: "Storage & Ingestion" },
          { label: "Distinguishes", value: "Uploaded from fully indexed and searchable" },
          { label: "Builds on", value: "Creative Asset Indexing", page: 21 },
          { label: "Related states", value: "AI Processing Queue", page: 144 },
        ],
        actions: [{ kind: "route", path: "/storage", label: "More in Storage & Ingestion" }]
      },
      sources: [{ kind: "pdf", page: 145 }, { kind: "pdf", page: 21 }, { kind: "pdf", page: 144 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "two-milestones",
      eyebrow: "Two milestones",
      heading: "Uploaded successfully compared with fully indexed and searchable",
      columns: ["Uploaded successfully", "Fully indexed and searchable"],
      emphasis: 1,
      rows: [
        ["What has happened", "The file has reached the library", "The asset is prepared for search and organisation"],
        ["A search for it", "May not return it yet", "Can be expected to return it"],
        ["Telling colleagues to look", "Premature", "Reasonable"],
        ["Good enough for", "Confirming a transfer finished", "Briefing, sharing and checking a move"],
        ["The question it settles", "Did the upload work?", "Can people rely on finding it?"],
      ],
      sources: [{ kind: "pdf", page: 145 }, { kind: "pdf", page: 21 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "hold-until-searchable",
      eyebrow: "Timing decisions",
      heading: "Decisions worth holding until assets can be found",
      items: [
        {
          heading: "Retiring an old storage location",
          summary: "An old location remains the fallback until the library can answer for its contents.",
          icon: "archive",
          body: [
            ["During a move, a ", { text: "migration without downtime", page: 292 }, " is designed to let organisations keep using existing storage while content is indexed in the background. Switching off the old location before the moved material is fully indexed and searchable risks a stretch in which content is safely stored yet hard for anyone to find."],
          ],
        },
        {
          heading: "Deciding whether search works",
          summary: "First impressions of search are often formed on assets that are not ready.",
          icon: "search",
          body: [
            "People trying a library for the first time tend to upload a few files and search for them straight away. Judging search on assets still being prepared produces a misleading verdict, so evaluations are fairer when they use material that has finished processing.",
          ],
        },
        {
          heading: "Reporting a missing asset",
          summary: "Checking status first often saves a support conversation.",
          icon: "flag",
          body: [
            "An asset that cannot be found shortly after upload can simply be a matter of timing rather than a fault. Looking at its processing status before raising the issue lets the people who look after the library spend their time on real problems.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 292 }, { kind: "pdf", page: 145 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A launch set shared once every region could find it",
      team: "A marketing team",
      situation: "A marketing team receives final product photography and a launch film on the morning it is due to brief regional colleagues. The coordinator wants every region working from the same set, without a round of emailed attachments.",
      steps: [
        { heading: "The files go in", body: "The studio adds the photography and the film to the library and lets the coordinator know once the uploads have completed." },
        { heading: "The briefing waits for status", body: "Instead of sending the briefing immediately, the coordinator checks the processing status of the new assets and holds the message until it shows they are fully indexed and searchable." },
        { heading: "Access is confirmed", body: ["Because ", { text: "departments can receive access", page: 176 }, " to only the creative libraries relevant to their work, the coordinator checks with the library administrator that the regional teams can reach the launch material."] },
        { heading: "One view for every region", body: ["The briefing includes a ", { text: "saved search", page: 17 }, " shared through its URL, giving each region a reusable view of the launch assets."] },
        { heading: "Questions stay with the assets", body: ["When one region asks which cut of the film to use, the reply is left as a ", { text: "comment on the film itself", page: 62 }, " rather than in a separate email thread."] },
      ],
      outcome: "Every region starts from the same complete set at the first attempt, and the library gains colleagues’ trust on launch morning instead of losing it.",
      link: { page: 213, label: "GetSibu for Marketing Teams" },
      sources: [{ kind: "pdf", page: 145 }, { kind: "pdf", page: 176 }, { kind: "pdf", page: 17 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 213 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about media processing status",
      items: [
        {
          question: "How is media processing status different from upload progress?",
          answer: ["They answer different questions. ", { text: "Upload progress", page: 141 }, " indicators help users understand how many files are currently being processed, while processing status is what tells a team whether a particular asset has only uploaded successfully or is already fully indexed and searchable."],
        },
        {
          question: "Does media processing status matter for content that arrives through watch folders?",
          answer: ["Arguably more than for manual uploads. Content newly added to ", { text: "watch folders", page: 128 }, " can enter the GetSibu workflow automatically, so there may be nobody waiting at the end of a transfer, and knowing whether new material is fully indexed and searchable falls to whoever expects to use it."],
        },
        {
          question: "What does search draw on to find a media asset?",
          answer: ["GetSibu ", { text: "makes assets searchable", page: 11 }, " through filenames, metadata, OCR, AI-generated tags, comments and semantic information. How many of those routes lead to a particular asset depends on what it carries: a photograph with rich capture details gives search more to work with than an untitled graphic with no text."],
        },
      ],
      sources: [{ kind: "pdf", page: 141 }, { kind: "pdf", page: 128 }, { kind: "pdf", page: 11 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on when new assets become findable",
      variant: "compact",
      pages: [21, 144, 141, 292, 128, 11],
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
