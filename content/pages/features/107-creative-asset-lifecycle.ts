/**
 * 107 · Creative Asset Lifecycle — /features/creative-asset-lifecycle
 *
 * Angle (cluster: asset-lifecycle): the stages enumerated (ingestion, metadata processing, AI tagging, review,
 * approval, distribution, archival) and what each contributes to the asset. Asset Lifecycle Management (101)
 * owns governing the transitions (upload, review, approval, reuse, deletion) and who decides.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of the stages of a creative asset's life; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 107,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Versioning & Asset Management",
      lede: "A stage-by-stage account of what happens to a creative asset between arriving in the library and being archived, what each stage adds to it, and where teams tend to skip a step.",
      visual: { diagram: "version-record", focus: "lifecycle" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 107 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Seven stages between a new file and a piece of history",
      body: [
        "In GetSibu, the lifecycle of an asset can include ingestion, metadata processing, AI tagging, review, approval, distribution and archival. Each stage contributes something, so that by the end the asset is much more than the file that first arrived.",
        "The stages are easier to reason about in three phases. The first three make an asset findable: it arrives, its embedded information is read and it gains descriptive tags. Review and approval make it trustworthy, turning work in progress into content someone has signed off. Distribution and archival cover its working life and what becomes of it afterwards.",
        [
          "Knowing what each stage contributes is a different question from governing them. How a team manages the transitions, and who decides when an asset moves on, belongs to ",
          { text: "asset lifecycle management", page: 101 },
          ", while ",
          { text: "creative workflow management", page: 80 },
          " describes the wider movement of work from upload through organisation and review to final use.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Ingestion and metadata processing", "AI tagging before review", "Review, then approval", "Distribution to the people who use it", "Archival as the closing stage", "Something added at every stage"],
      },
      highlight: {
        heading: "In practice",
        body: "A product shoot is uploaded at the start of the week. By the time the images reach regional teams, the camera details that came inside the files have been joined by descriptive tags, feedback and an approval.",
        tags: ["Photography", "Campaigns", "Library managers"],
      },
      glance: {
        heading: "The lifecycle in brief",
        facts: [
          { label: "Starts with", value: "Ingestion" },
          { label: "Ends with", value: "Archival" },
          { label: "Governed through", value: "Asset Lifecycle Management", page: 101 },
          { label: "Movement of work", value: "Creative Workflow Management", page: 80 },
        ],
        actions: [{ kind: "route", path: "/features/asset-management", label: "More in Versioning & Asset Management" }]
      },
      sources: [{ kind: "pdf", page: 107 }, { kind: "pdf", page: 101 }, { kind: "pdf", page: 80 }, { kind: "pdf", page: 22 }, EXPLAINS],
    },
    {
      kind: "layers",
      id: "stages",
      eyebrow: "Stage by stage",
      heading: "What the asset gains at each stage of its life",
      intro: "Read from top to bottom, each stage adds a layer to what is known about the asset.",
      layers: [
        { label: "Ingestion", body: "Assets enter from connected storage sources or through direct uploads. What the asset gains is a place in the shared library, rather than a spot on one person’s drive.", page: 121 },
        { label: "Metadata processing", body: "After upload, processing includes stages such as metadata extraction and thumbnail generation. The asset gains the embedded information that came with the file and a preview people can look at without downloading the original.", page: 143 },
        { label: "AI tagging", body: "Tags can be suggested during processing, so the asset gains descriptive terms without someone classifying every file by hand. Those suggestions stay open to review by authorised users.", page: 31 },
        { label: "Review", body: "Colleagues inspect the work and discuss changes in one central location. The asset gains the feedback that explains how it developed.", page: 69 },
        { label: "Approval", body: "The asset moves through an approval process with status history, gaining a clear record of whether it is awaiting review, approved or requires changes.", page: 68 },
        { label: "Distribution", body: "Approved content reaches the people who use it, with permissions and approval workflows helping to ensure they access and distribute the right material. The asset gains an audience beyond the team that made it.", page: 10 },
        { label: "Archival", body: "When active use is over, archiving keeps the asset as historical content without letting it interfere with everyday discovery. The asset gains a place in the organisation’s history instead of being lost or left in the way.", page: 108 },
      ],
      sources: [{ kind: "pdf", page: 107 }, { kind: "pdf", page: 121 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 146 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 69 }, { kind: "pdf", page: 68 }, { kind: "pdf", page: 10 }, { kind: "pdf", page: 108 }],
    },
    {
      kind: "tabs",
      id: "by-medium",
      eyebrow: "By kind of media",
      heading: "How the same stages play out for different media",
      tabs: [
        {
          label: "Video",
          heading: "Heavy at ingestion, long in review",
          icon: "video",
          body: [
            ["Video tests the early stages first, because the files are large. ", { text: "Resumable uploads", page: 137 }, " help prevent a large transfer from starting again after a network interruption, which matters when a day of footage is on its way in."],
            ["Review is usually the longest stage for a film, with several cuts watched by several people. ", { text: "Streaming previews", page: 147 }, " help reviewers inspect large media files quickly, without waiting for a complete download each round."],
          ],
          points: ["Large transfers at ingestion", "Several review rounds per film"],
        },
        {
          label: "Images",
          heading: "Description decides whether they are ever found",
          icon: "image",
          body: [
            "A shoot can produce far more images than any one campaign uses, and most look alike at thumbnail size. For images, the tagging stage does much of the work that decides whether a picture is found again later.",
            ["Visual characteristics help here: ", { text: "colour information", page: 36 }, " can be extracted from visual assets and used in discovery."],
          ],
          points: ["Tagging carries most of the weight", "Visual characteristics as a way in"],
        },
        {
          label: "Documents",
          heading: "Processing turns their words into something searchable",
          icon: "document",
          body: [
            ["For documents, the useful information is the text inside them. ", { text: "OCR", page: 38 }, " extracts text from documents, presentations and screenshots, and once processed that text becomes part of the searchable asset information."],
            "Decks and briefs also tend to cycle between review and approval more often than other media, because their content changes whenever an offer, a product or a message does.",
          ],
          points: ["Extracted text joins the asset", "Frequent returns to review"],
        },
        {
          label: "Audio",
          heading: "The same lifecycle as everything else",
          icon: "audio",
          body: [
            ["Audio is often kept apart from other creative work, which gives it a lifecycle of its own that nobody manages. ", { text: "Audio assets", page: 28 }, " can be managed alongside other creative formats, so music beds, voice-overs and sound effects pass through the same stages as the films and campaigns that use them."],
            "Licensed music is a common reason to plan the archival stage around the end of a licence term rather than waiting for use to fade.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 137 }, { kind: "pdf", page: 147 }, { kind: "pdf", page: 36 }, { kind: "pdf", page: 38 }, { kind: "pdf", page: 28 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "skipped-stages",
      eyebrow: "Common gaps",
      heading: "Stages that get skipped, and what that costs later",
      items: [
        {
          heading: "Never entering the library at all",
          summary: "The stage skipped most often is the first, when files go straight from a desktop to their audience.",
          icon: "upload",
          body: [
            ["A designer exports a file and emails it to a client; an editor shares a cut from a personal drive. That asset has no lifecycle anyone can manage, because it never arrived. ", { text: "Drag and drop upload", page: 127 }, " makes it easy to add individual assets or small batches without configuring an integration, which removes the usual excuse for skipping ingestion."],
          ],
          points: ["Work shared straight from personal drives", "No record, no review, no archive"],
        },
        {
          heading: "Approval with no review behind it",
          summary: "A sign-off given in a hurry records a decision nobody properly made.",
          icon: "approval",
          body: [
            ["Under deadline pressure, approval is sometimes given on the strength of a thumbnail or a verbal assurance. The asset then carries a status that others trust, even though nobody inspected the work. ", { text: "Review status", page: 76 }, " is only as meaningful as the review that set it, which is why the review stage deserves its own time."],
          ],
        },
        {
          heading: "Review held somewhere else",
          summary: "Feedback given by email leaves the asset without its own story.",
          icon: "message",
          body: [
            ["When review happens in inboxes, the asset reaches approval with no trace of why it looks the way it does. Keeping ", { text: "feedback connected to the asset", page: 73 }, " rather than scattered across email, chat and project tools gives the review stage a lasting result."],
          ],
        },
        {
          heading: "Distribution by attachment",
          summary: "Sending files out creates copies that the lifecycle no longer reaches.",
          icon: "copy",
          body: [
            ["An approved file sent as an attachment is outside the library the moment it leaves, and any later correction will not follow it. ", { text: "Team asset sharing", page: 78 }, " lets teams share saved searches and library views without creating duplicate copies of the same files."],
          ],
        },
        {
          heading: "No archival stage at all",
          summary: "Without an ending, finished work either crowds the library or gets deleted to make room.",
          icon: "archive",
          body: [
            ["Libraries that never archive fill everyday results with old campaigns, and the usual reaction is a hurried purge that removes history along with clutter. ", { text: "Creative library maintenance", page: 111 }, " treats this as an ongoing job, which keeps the final stage from becoming an occasional emergency."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 127 }, { kind: "pdf", page: 76 }, { kind: "pdf", page: 73 }, { kind: "pdf", page: 78 }, { kind: "pdf", page: 111 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about the creative asset lifecycle",
      items: [
        {
          question: "Can an asset move backwards through the creative asset lifecycle?",
          answer: "In practice, often. Work that fails review goes round again before it reaches approval, and a distributed piece that needs correcting returns to review. The stages describe an order, not a one-way street.",
        },
        {
          question: "Does every asset pass through every stage of the creative asset lifecycle?",
          answer: "Not necessarily. Reference material may never need approval, and a draft that is rejected may never be distributed. The stages describe what a lifecycle can include, and a team decides which ones each kind of content needs.",
        },
        {
          question: "Why does metadata processing matter so early in the creative asset lifecycle?",
          answer: ["Because reviewers, approvers and colleagues looking for material all reach an asset through what is known about it. An upload that has finished is not yet an asset anyone can find, and ", { text: "processing status", page: 145 }, " helps a team tell the two apart before the later stages begin."],
        },
        {
          question: "Where does distribution fit in the creative asset lifecycle?",
          answer: ["After approval, when content goes to the people who will use it. Distributing through the library keeps control in place, since ", { text: "secure asset sharing", page: 172 }, " can be governed through permissions rather than relying only on unrestricted links."],
        },
      ],
      sources: [{ kind: "pdf", page: 107 }, { kind: "pdf", page: 145 }, { kind: "pdf", page: 172 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on the stages of an asset’s life",
      variant: "compact",
      pages: [101, 80, 143, 68, 108, 111],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Build a Smarter Creative Workflow",
      conversionPage: 396,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 396 }],
    },
  ],
};

export default page;
