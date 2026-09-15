/**
 * 136 · Media Upload Management — /storage/media-upload-management
 *
 * Angle (cluster: uploads, primary): managing uploads as a workflow — progress information and resumable
 * transfers for unreliable networks, seen as visibility and recoverability, plus what senders, receivers,
 * library managers and IT need. Resumable Uploads (137) owns recovery after interruption; Chunked Uploads
 * (138) owns large-file transfer; Upload Progress (141) and Parallel Uploads (142) own their mechanisms.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of upload practice on real-world networks; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 136,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Storage & Ingestion",
      lede: "See what managing uploads involves when connections are unreliable: what senders and the people waiting each need, the pieces that surround a transfer, and when an uploaded file is ready to use.",
      visual: { diagram: "ingest-pipeline", focus: "upload" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 136 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Uploads a team can see and recover",
      body: [
        ["In GetSibu, uploads come with ", { text: "progress information", page: 141 }, " and with support for ", { text: "resumable transfers", page: 137 }, " when the network cannot be relied on. An upload becomes something people can follow and recover, instead of a transfer they start and hope will finish."],
        "Creative teams rarely upload in ideal conditions. Photographers send selects over hotel connections, editors push large renders across a busy office line before heading home, and freelancers deliver from home broadband shared with the rest of the household. In those conditions the real question is not whether something will go wrong, but whether anyone will know when it does and how much work will be lost.",
        "Managing uploads therefore means two things beyond the transfer itself: visibility, so the person sending knows where things stand and can tell the people waiting, and recoverability, so an interruption does not have to mean starting again.",
        "It is also a matter of ownership. Somebody should know which transfers are expected and who is sending them, so that material which has not arrived is chased before anyone needs it.",
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Progress information during uploads", "Resumable transfers on unreliable networks", "Visibility for the sender", "Interruptions that need not mean restarting", "Arrived is not the same as ready"],
      },
      glance: {
        heading: "Upload management in brief",
        facts: [
          { label: "Area", value: "Storage & Ingestion" },
          { label: "Provides", value: "Progress information" },
          { label: "Supports", value: "Resumable transfers for unreliable networks" },
          { label: "Hands over to", value: "Asset Processing", page: 143 },
        ],
        actions: [{ kind: "route", path: "/storage", label: "More in Storage & Ingestion" }]
      },
      sources: [{ kind: "pdf", page: 136 }, { kind: "pdf", page: 137 }, { kind: "pdf", page: 143 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "pieces",
      eyebrow: "The pieces",
      heading: "What surrounds an upload, from transfer to readiness",
      items: [
        { heading: "Chunked workflows", body: "Large files can be moved through chunked upload workflows that are designed for reliability.", icon: "layers", points: ["Built around large files", "Designed with reliability in mind"], page: 138 },
        { heading: "Parallel batches", body: "Parallel upload workflows can make batch asset ingestion more efficient when many files are sent together.", icon: "zap", points: ["Batches rather than single files", "Efficiency for bigger sends"], page: 142 },
        { heading: "Processing after transfer", body: "Once uploaded, assets move through stages such as metadata extraction, thumbnail generation and AI-related processing.", icon: "workflow", points: ["Metadata extracted", "Thumbnails generated"], page: 143 },
        { heading: "Readiness status", body: "Processing status helps a team distinguish an asset that uploaded successfully from one that is fully indexed and searchable.", icon: "check", points: ["Arrived versus ready", "No surprise when search misses a new file"], page: 145 },
      ],
      sources: [{ kind: "pdf", page: 138 }, { kind: "pdf", page: 142 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 145 }],
    },
    {
      kind: "accordion",
      id: "imperfect-connections",
      eyebrow: "Good practice",
      heading: "Managing uploads on imperfect connections",
      surface: "muted",
      items: [
        {
          heading: "Start large sends early",
          summary: "A big transfer begun just before a deadline leaves no room for problems.",
          icon: "clock",
          body: [
            "A delivery started an hour before it is due has no margin for a slow or interrupted connection. Starting large sends as soon as the material is ready leaves time to recover if something does go wrong.",
          ],
        },
        {
          heading: "Keep originals until arrival is confirmed",
          summary: "The source copy is the safety net until the library holds the file.",
          icon: "shield",
          body: [
            "Wiping a camera card or clearing a disk as soon as an upload begins leaves nothing to fall back on if something goes wrong. Waiting until the upload has completed, and ideally until processing has finished, is a small delay that protects material nobody can shoot again.",
          ],
        },
        {
          heading: "Check before resending",
          summary: "Sending a batch again just to be safe fills the library with copies.",
          icon: "copy",
          body: [
            "When nobody can tell whether a transfer finished, the instinct is to send everything again. Checking the progress information first, and asking the receiving side what has arrived, usually settles the question without adding copies to the library.",
          ],
        },
        {
          heading: "Batch in meaningful units",
          summary: "A batch per shoot, day or delivery is easier to follow than one enormous send.",
          icon: "folder",
          body: [
            "Grouping uploads by shoot, day or delivery makes progress easier to read and problems easier to isolate. If one batch needs attention, it is obvious which material the problem concerns and who should be told about it.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 141 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "perspectives",
      eyebrow: "Perspectives",
      heading: "What each person needs from an upload",
      tabs: [
        {
          label: "Senders",
          heading: "Freedom to stop watching a transfer",
          icon: "upload",
          body: [
            "Once a sender can see how a batch is progressing, the transfer no longer needs someone sitting beside it. The useful habits are a quick look before disconnecting and a short message to the receiving side when a large send is under way, so nobody has to ask whether it was ever started.",
          ],
          points: ["A check before disconnecting", "The receiving side told in advance"],
        },
        {
          label: "Receivers",
          heading: "A first look at what has arrived",
          icon: "users",
          body: [
            ["Producers, editors and marketers waiting on material care less about the transfer than about checking what came. ", { text: "Thumbnails", page: 146 }, " provide fast visual previews without anyone downloading the original, and ", { text: "streaming previews", page: 147 }, " help people inspect large media files without waiting for complete downloads."],
          ],
          points: ["A first look without downloading", "Large media inspected without waiting"],
        },
        {
          label: "Library managers",
          heading: "Seeing the inflow as a whole",
          icon: "chart",
          body: [
            ["For whoever looks after the library, individual uploads matter less than the pattern they form. ", { text: "Upload analytics", page: 184 }, " show how much new content is entering over time, and ", { text: "contributor analytics", page: 185 }, " help reveal who is adding it."],
          ],
          points: ["The pattern rather than the single send", "Who is contributing"],
        },
        {
          label: "IT and operations",
          heading: "Knowing which connections to trust",
          icon: "server",
          body: [
            "Technical teams usually know which sites, lines and times of day give the steadiest connection, and which locations depend on mobile data. Sharing that knowledge with the people who send large files helps them decide when and where to start, and keeps big sends away from the moments a shared line is busiest.",
          ],
          points: ["Steadier lines identified", "Big sends kept off busy periods"],
        },
      ],
      sources: [{ kind: "pdf", page: 146 }, { kind: "pdf", page: 147 }, { kind: "pdf", page: 184 }, { kind: "pdf", page: 185 }, { kind: "pdf", page: 141 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about media upload management",
      items: [
        {
          question: "Is media upload management only a concern for large video files?",
          answer: ["No. Large files make an interruption more costly, but a batch of many smaller images raises the same questions about what has gone and what has not. Teams working with large amounts of video and imagery can also use ", { text: "ingestion workflows designed around high-volume environments", page: 139 }, "."],
        },
        {
          question: "Does a finished upload mean colleagues can see the file?",
          answer: ["Seeing a file depends on access as well as arrival. ", { text: "Folder-level permissions", page: 152 }, " allow access to be controlled more precisely than organisation-wide access, so the people waiting on material need access to the place it was uploaded to."],
        },
        {
          question: "How can someone tell whether an uploaded asset is still being worked on?",
          answer: ["Look at its status rather than guessing. ", { text: "AI processing status", page: 144 }, " helps users understand whether an asset is queued, processing or ready."],
        },
      ],
      sources: [{ kind: "pdf", page: 139 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 144 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on getting uploads through",
      variant: "compact",
      pages: [137, 138, 141, 142, 145, 139],
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
