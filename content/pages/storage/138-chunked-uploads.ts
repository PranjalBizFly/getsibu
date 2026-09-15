/**
 * 138 · Chunked Uploads — /storage/chunked-uploads
 *
 * Angle (cluster: uploads): transferring large files reliably by dividing them into pieces — what chunking
 * is in general terms, why it helps reliability, and what it does not change (it is not resuming, not
 * automatically faster). Resumable Uploads (137) owns recovery after interruption; Parallel Uploads (142)
 * owns batch efficiency. No chunk sizes, file size limits or GetSibu implementation details are stated.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "General explanation of chunked file transfer; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 138,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Storage & Ingestion",
      lede: "Understand what moving a large file in pieces changes, why the approach is associated with reliability rather than speed, and what it leaves exactly as it was.",
      visual: { diagram: "ingest-pipeline", focus: "upload" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 138 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Large files moved in pieces, for reliability",
      body: [
        "In GetSibu, large files can be transferred through chunked upload workflows that are designed for reliability. Rather than travelling as one unbroken stream, a big file is handled in smaller parts.",
        "Creative work is where the approach earns its place. A long master, a card of raw camera footage or a layered print file can take a long time to send, and the longer a single transfer runs, the more chances there are for something along the way to interrupt it.",
        [
          "Chunking is one of the approaches ",
          { text: "large file performance", page: 312 },
          " names, together with resumable uploads, for improving reliability when working with large creative files.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Large files divided into pieces", "Pieces reassembled in order", "A failure confined to one piece", "Designed for reliability", "Distinct from resuming and parallel sending"],
      },
      glance: {
        heading: "Chunked uploads in brief",
        facts: [
          { label: "Area", value: "Storage & Ingestion" },
          { label: "Used for", value: "Large files" },
          { label: "Designed for", value: "Reliability" },
          { label: "Upload workflow", value: "Media Upload Management", page: 136 },
        ],
        actions: [{ kind: "route", path: "/storage", label: "More in Storage & Ingestion" }]
      },
      sources: [{ kind: "pdf", page: 138 }, { kind: "pdf", page: 312 }, { kind: "pdf", page: 136 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "one-stream-or-pieces",
      eyebrow: "In general terms",
      heading: "One continuous transfer compared with a chunked transfer",
      intro: "How the two approaches tend to behave, independent of any particular platform.",
      columns: ["Single continuous transfer", "Chunked transfer"],
      emphasis: 1,
      rows: [
        ["How the file travels", "As one unbroken stream", "As a sequence of smaller pieces"],
        ["Effect of a failure", "The whole attempt is spoilt", "Usually limited to the piece in transit"],
        ["Exposure to time limits", "Grows with the length of the transfer", "Each piece is a short exchange"],
        ["Checking what has arrived", "Only once the whole file lands", "Possible piece by piece"],
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A long master delivered over a shared studio line",
      team: "A post-production team",
      situation: "A small post-production team finishes a long documentary master late in the week. The studio’s connection copes with everyday work but is shared by several editors, and the producer’s review is booked for the next morning.",
      steps: [
        { heading: "Check the export first", body: "The editor plays the final export through before uploading it, so a reliable transfer is not spent on a file with a fault in it." },
        { heading: "Give it a clear line", body: "Other editors hold back their own large sends while the master travels, leaving it the steadiest share of the connection." },
        { heading: "Let the transfer run", body: ["A master of this size is the kind of large creative file for which ", { text: "resumable and chunked uploads", page: 312 }, " help improve reliability, so the editor leaves the send to finish rather than restarting it at the first sign of trouble."] },
        { heading: "Check its status", body: "Once the upload completes, the master moves through processing stages such as metadata extraction and thumbnail generation, so the editor checks its status rather than assuming it is ready." },
        { heading: "Review from a preview", body: ["The producer inspects the master through a ", { text: "streaming preview", page: 147 }, " the next morning, without waiting for a complete download of a very large file."] },
      ],
      outcome: "The review goes ahead with the master already in the library, instead of on a drive waiting to be collected or a download still in progress.",
      link: { page: 216, label: "GetSibu for Post-Production Teams" },
      sources: [{ kind: "pdf", page: 312 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 145 }, { kind: "pdf", page: 147 }, { kind: "pdf", page: 216 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "accordion",
      id: "misunderstandings",
      eyebrow: "Common misunderstandings",
      heading: "What chunking does and does not change",
      surface: "muted",
      items: [
        {
          heading: "It is not the same as resuming",
          summary: "Chunking divides a file for the journey; resuming continues a journey after a break.",
          icon: "refresh",
          body: [
            ["The two ideas are often mentioned together, and sending a file in pieces is one common way of making resumption possible. They still answer different questions, and GetSibu describes them separately: large files can move through chunked workflows, while ", { text: "resumable uploads", page: 137 }, " help prevent restarts after a network interruption."],
          ],
        },
        {
          heading: "It is not automatically faster",
          summary: "Reliability and speed are separate goals.",
          icon: "gauge",
          body: [
            "Dividing a file adds a little work at each end, so pieces sent one after another are not in themselves quicker than a single stream. What chunking is designed for is a transfer that is more likely to complete, which matters more than speed when a failed attempt would mean sending a very large file again.",
          ],
        },
        {
          heading: "Piece size is a trade-off",
          summary: "Smaller pieces waste less on failure; larger pieces need fewer exchanges.",
          icon: "layers",
          body: [
            "In general, small pieces mean less to resend when something fails but more back-and-forth between sender and receiver. Large pieces reduce that overhead at the cost of repeating more data after each failure. Where the balance sits is a design decision about the network conditions a system expects to meet.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 138 }, { kind: "pdf", page: 137 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about chunked uploads",
      items: [
        {
          question: "Does a chunked upload change the file that arrives in the library?",
          answer: ["No. The pieces exist only for the journey and are reassembled into the file that was sent. Work done to the asset afterwards, such as ", { text: "thumbnail generation and metadata extraction", page: 143 }, ", belongs to processing rather than to the transfer."],
        },
        {
          question: "Do chunked uploads help when a batch holds many smaller files?",
          answer: ["Chunking addresses the size of a single file. A batch of many smaller files raises a different question, which is how efficiently they are sent together, and ", { text: "parallel upload workflows", page: 142 }, " can improve the efficiency of batch asset ingestion."],
        },
        {
          question: "Do people sending files need to understand how chunked uploads work?",
          answer: "The mechanics matter most to developers and IT. For people sending files, the practical point is that large files can be transferred through a workflow designed for reliability, which is worth knowing when deciding whether to upload a big file or send it on a drive.",
        },
      ],
      sources: [{ kind: "pdf", page: 138 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 142 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on moving large files",
      variant: "compact",
      pages: [137, 136, 312, 142, 147],
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
