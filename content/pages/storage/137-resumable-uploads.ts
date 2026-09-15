/**
 * 137 · Resumable Uploads — /storage/resumable-uploads
 *
 * Angle (cluster: uploads): not restarting after a network interruption — what resuming means, what a
 * restart costs, how resumable transfers recover in general terms, and where creative teams meet
 * interruptions. Chunked Uploads (138) owns dividing files; Media Upload Management (136) owns the
 * workflow. Nothing here states file size limits or how GetSibu implements resuming.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "General explanation of resumable file transfer; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 137,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Storage & Ingestion",
      lede: "Understand the idea behind resumable transfers, the places creative teams meet the unreliable connections that make them matter, and what resuming leaves unchanged.",
      visual: { diagram: "ingest-pipeline", focus: "upload" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 137 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "An interruption that costs a pause, not the whole transfer",
      body: [
        "Resumable uploads in GetSibu help prevent large transfers from needing to restart from the beginning after a network interruption. The part of a file already sent need not be thrown away because a connection dropped.",
        "The cost of restarting grows with the size of the file. A small image that fails is resent before anyone notices. A long piece of high-resolution footage that fails near the end loses everything sent so far, and on a connection that drops repeatedly, a large enough file might never complete at all.",
        [
          "Resumable transfers are part of ",
          { text: "media upload management", page: 136 },
          ", alongside progress information, and resumable and chunked uploads are both named among the ways GetSibu approaches ",
          { text: "large file performance", page: 312 },
          ".",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Transfers that continue after a drop", "Progress kept, not discarded", "Restart cost grows with file size", "Made for interrupted networks", "A different question from chunking"],
      },
      highlight: {
        heading: "In practice",
        body: "An editor sends a cut over a patchy mobile connection on a train. Each dropout interrupts the upload, but the transfer need not start again from the beginning after every one.",
        tags: ["Editors", "Travel", "Mobile connections"],
      },
      glance: {
        heading: "Resumable uploads in brief",
        facts: [
          { label: "Area", value: "Storage & Ingestion" },
          { label: "Helps prevent", value: "Large transfers restarting from the beginning" },
          { label: "Matters after", value: "A network interruption" },
          { label: "Related technique", value: "Chunked Uploads", page: 138 },
        ],
        actions: [{ kind: "route", path: "/storage", label: "More in Storage & Ingestion" }]
      },
      sources: [{ kind: "pdf", page: 137 }, { kind: "pdf", page: 136 }, { kind: "pdf", page: 312 }, { kind: "pdf", page: 138 }, EXPLAINS],
    },
    {
      kind: "before-after",
      id: "cost-of-a-drop",
      eyebrow: "What changes",
      heading: "What a dropped connection costs with and without resuming",
      beforeLabel: "An upload that restarts",
      afterLabel: "A resumable upload",
      before: ["Everything sent so far is lost", "The whole file goes again", "Large sends put off until a good connection", "Repeated failures on weak networks"],
      after: ["Progress already made is kept", "Sending continues instead of restarting", "Large sends started where the work is", "Interruptions that become pauses"],
      sources: [{ kind: "pdf", page: 137 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "general-pattern",
      eyebrow: "In general terms",
      heading: "How a resumable transfer recovers from a break",
      intro: "The broad pattern behind resumable file transfer, described independently of any one product’s implementation.",
      surface: "muted",
      steps: [
        { heading: "The upload begins", body: "The sending side starts transferring a file, and the receiving side begins storing what arrives.", icon: "upload" },
        { heading: "Progress is tracked", body: "A record is kept of how much of the file has been received, so the transfer is never just a stream with no memory.", icon: "history" },
        { heading: "The connection breaks", body: "A network interruption stops the transfer part-way through, leaving an incomplete file at the receiving end.", icon: "network" },
        { heading: "The network returns", body: "Once a connection is available again, the sender establishes how much of the file had already arrived.", icon: "refresh" },
        { heading: "Only the rest is sent", body: "Transfer continues with the remainder of the file rather than repeating the portion that already made it.", icon: "zap" },
        { heading: "The file is completed", body: "When the final portion arrives, the file is whole and can move on to whatever comes next.", icon: "check" },
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "tabs",
      id: "where-connections-fail",
      eyebrow: "In the field",
      heading: "Where creative work meets unreliable connections",
      tabs: [
        {
          label: "On location",
          heading: "Footage sent from wherever the shoot is",
          icon: "camera",
          body: [
            "Shoots happen in venues, fields and hotels with connections nobody chose. Crews often need to send selects or daily footage before they pack up, using whatever the location offers.",
            "Sending the selects first and the full footage later, or from a steadier connection, keeps the most urgent material moving when the signal is weakest.",
          ],
          points: ["Connections nobody chose", "Urgent selects sent first"],
        },
        {
          label: "Working from home",
          heading: "Broadband shared with everyone else",
          icon: "user",
          body: [
            "Home connections are shared with video calls, streaming and other people’s devices, and routers restart at inconvenient moments. A freelancer delivering a large project file may experience several brief drops in one evening without noticing any of them.",
          ],
          points: ["Shared, unpredictable capacity", "Brief drops that go unnoticed"],
        },
        {
          label: "Busy studios",
          heading: "Large sends on a crowded line",
          icon: "building",
          body: [
            "In a studio where everyone sends big files before leaving, the shared connection is under most pressure exactly when large transfers start, and congestion makes interruptions more likely.",
            "A laptop closed as someone heads home ends a transfer however good the line is, so large sends are better left running on a machine that stays awake until they finish.",
          ],
          points: ["Pressure at the busiest moment", "Transfers halted by a closed laptop"],
        },
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about resumable uploads",
      items: [
        {
          question: "Should a file be uploaded while it is still being exported?",
          answer: "It is safer not to. Resuming continues sending a file on the assumption that it is the same file, so export the final version completely and upload that, rather than sending something that was still being written.",
        },
        {
          question: "Do resumable uploads make a slow connection any faster?",
          answer: "No. They reduce the work lost to interruptions, not the time a transfer takes on a connection that stays up. A steadier or less congested connection remains the way to shorten a large upload.",
        },
        {
          question: "Once a resumed upload completes, is the file ready to use?",
          answer: ["Not necessarily straight away. ", { text: "Media processing status", page: 145 }, " helps teams distinguish an asset that has uploaded successfully from one that is fully indexed and searchable."],
        },
      ],
      sources: [{ kind: "pdf", page: 145 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on reliable uploads",
      variant: "compact",
      pages: [136, 138, 312, 145],
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
