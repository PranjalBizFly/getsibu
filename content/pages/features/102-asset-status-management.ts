/**
 * 102 · Asset Status Management — /features/asset-status-management
 *
 * Angle (cluster: asset-lifecycle): statuses that tell drafts from approved content — what each workflow state signals
 * to people using the library, and how to keep statuses trustworthy. Asset Lifecycle Management (101) owns the stages,
 * Asset Approval (68) and Review Status (76) the approval record and indicator, Approved Asset Library (103) the views.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how teams use workflow states; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 102,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Versioning & Asset Management",
      lede: "How asset statuses let a team tell drafts from approved content, what each common workflow state signals to the people using the library, and how to keep those statuses worth trusting.",
      visual: { diagram: "timeline-review", focus: "status" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 102 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Telling a draft from approved content before anyone uses it",
      body: [
        "Asset statuses in GetSibu help teams tell drafts apart from approved content, as well as from the other workflow states an asset passes through.",
        "A draft and an approved file often look almost the same. The difference that matters, whether anyone has signed the work off, is not visible in the image or the deck itself. Without a status, people infer it from where a file sits, what it is called or who sent it, and each of those signals can mislead.",
        [
          "A status turns that guesswork into information attached to the asset. ",
          { text: "Creative approval management", page: 89 },
          " provides a structured process for moving assets from draft to approved status, and ",
          { text: "approved-only views", page: 103 },
          " give people access to content that has completed the required review.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Draft, awaiting review, requires changes, approved", "A status attached to the asset", "Status history as a record", "Workflow state versus processing state", "Statuses people can rely on"],
      },
      highlight: {
        heading: "In practice",
        body: "A regional marketer finds two similar flyer layouts. Rather than guessing from the filenames, they check each status: one is still a draft, the other is approved.",
        tags: ["Marketing", "Brand", "Regional teams"],
      },
      glance: {
        heading: "Asset statuses in brief",
        facts: [
          { label: "Distinguishes", value: "Drafts, approved content, other workflow states" },
          { label: "Record kept in", value: "Asset Approval" },
          { label: "Indicator", value: "Review Status" },
          { label: "Process", value: "Creative Approval Management" },
        ],
        actions: [{ kind: "route", path: "/features/asset-management", label: "More in Versioning & Asset Management" }]
      },
      sources: [{ kind: "pdf", page: 102 }, { kind: "pdf", page: 89 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 68 }, { kind: "pdf", page: 76 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "states",
      eyebrow: "Reading a status",
      heading: "What common workflow states tell the people using the library",
      intro: "Drafts come first; the other three are states that an approval process records.",
      columns: ["What it means", "Fine to use?", "Who acts next"],
      rows: [
        { label: "Draft", cells: ["Work in progress that has not been put forward", "Only for internal discussion", "The author"] },
        { label: "Awaiting review", cells: ["Put forward and waiting for a decision", "Not yet", "The reviewer or approver"] },
        { label: "Requires changes", cells: ["Reviewed and sent back with feedback", "No", "The author, working through the feedback"] },
        { label: "Approved", cells: ["Signed off through the approval process", "Yes, for its intended purpose", "Anyone reusing the asset"] },
      ],
      sources: [{ kind: "pdf", page: 102 }, { kind: "pdf", page: 68 }, { kind: "pdf", page: 89 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "trustworthy",
      eyebrow: "What to consider",
      heading: "Keeping statuses worth trusting",
      items: [
        {
          heading: "Agree what “approved” covers",
          summary: "A status is only as useful as the shared understanding behind it.",
          icon: "book",
          body: [
            "If one team approves for social use only and another approves for everything, the same word means different things to different readers.",
            "Writing down what approval covers, and for which channels, stops a single label carrying two meanings.",
          ],
          points: ["One definition per status", "Channels and purposes spelled out"],
        },
        {
          heading: "Stop assets waiting indefinitely",
          summary: "An asset stuck awaiting review is neither usable nor clearly rejected.",
          icon: "clock",
          body: [
            ["Items left awaiting review become a grey area that people work around, often by using the draft anyway. ", { text: "Review status", page: 76 }, " gives a clear indication of whether an asset needs attention, which makes stalled items easier to spot and chase."],
          ],
        },
        {
          heading: "Treat status history as evidence",
          summary: "The route an asset took to approval can matter as much as the result.",
          icon: "history",
          body: [
            ["When someone asks how a piece was signed off, the sequence of states is the answer. ", { text: "Asset approval", page: 68 }, " keeps that status history as a clear record of whether content was awaiting review, approved or required changes."],
          ],
        },
        {
          heading: "Back critical statuses with a gate",
          summary: "For brand-critical content, a label can be reinforced by separation.",
          icon: "shield",
          body: [
            ["Brand teams can use ", { text: "approval gates", page: 71 }, " to keep approved creative assets apart from drafts and work-in-progress materials, lowering the chance of a draft being picked up by mistake."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 76 }, { kind: "pdf", page: 68 }, { kind: "pdf", page: 71 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A seasonal flyer that nearly went out as a draft",
      team: "A retail marketing team",
      situation: "A retail marketing team produces regional flyers. A store manager asks for the autumn flyer while its design is still being reviewed.",
      steps: [
        { heading: "The layout is clearly a draft", body: "The designer’s latest layout sits in the library with a status that marks it as a draft, not a finished flyer." },
        { heading: "An early request arrives", body: "The store manager finds the flyer, sees its status and asks when it will be approved instead of sending it to print." },
        { heading: "Review sends it back", body: ["The brand reviewer marks it as requiring changes because the offer terms are missing, using the ", { text: "creative approval workflow", page: 67 }, "."] },
        { heading: "Approval, then use", body: "Once the terms are added and the flyer is approved, the store manager takes the approved layout to print." },
      ],
      outcome: "The only flyer that reaches the stores is the approved one, and its status history shows how it got there.",
      link: { page: 231, label: "GetSibu for Retail Brands" },
      sources: [{ kind: "pdf", page: 102 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 68 }, { kind: "pdf", page: 231 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about asset status management",
      items: [
        {
          question: "Does a status replace a conversation about the work?",
          answer: ["No. A status says where an asset stands; the reasons, such as what still needs changing, belong in ", { text: "comments on the asset", page: 62 }, ", where the person revising it will look."],
        },
        {
          question: "Does a processing status of ready mean an asset is approved?",
          answer: ["No. ", { text: "AI processing status", page: 144 }, " tells you whether an asset is queued, processing or ready. That says whether the file can be worked with, not whether anyone has approved it for use."],
        },
        {
          question: "Why mark drafts explicitly instead of keeping them out of the library?",
          answer: "Drafts are part of the work: reviewers need somewhere to see them and comment on them. A clear status lets drafts live in the library without being mistaken for finished content.",
        },
      ],
      sources: [{ kind: "pdf", page: 62 }, { kind: "pdf", page: 144 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on workflow states and approval",
      variant: "compact",
      pages: [68, 76, 89, 103, 71, 101],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the lifecycle overview." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Bring Order to Creative Chaos",
      conversionPage: 399,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 399 }],
    },
  ],
};

export default page;
