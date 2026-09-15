/**
 * 80 · Creative Workflow Management — /features/creative-workflow-management
 *
 * Angle (cluster: creative-workflow): the movement of assets from upload through organisation, review, approval and
 * final use — managed as a flow with handovers between stages. Asset Lifecycle Management (101) owns the whole span
 * to deletion and its decisions; Creative Approval Workflow (67) owns the review loop.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how creative work moves between stages and where it stalls; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 80,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Collaboration",
      lede: "Learn what moves a creative asset on from each stage to the next, where work tends to stall between them, and how to see the flow as a whole rather than one stage at a time.",
      visual: { diagram: "timeline-review", focus: "comments" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 80 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Keeping work moving from first upload to finished piece",
      body: [
        "GetSibu supports the movement of creative assets from upload through organisation, review and approval to final use. Managing a creative workflow means keeping that movement steady: knowing where each asset is, and what it needs before it can reach the next stage.",
        "Creative workflows rarely break down inside a stage. Designers design, reviewers review and marketers use what they are given. The trouble sits at the handovers: footage that arrives but is never described, drafts waiting for a reviewer who does not know they exist, approved work nobody can find when it is wanted. Each gap looks small, yet together they decide how long a file takes to travel from being made to being used.",
        [
          "Managing the flow draws on several parts of the platform. ",
          { text: "Asset processing", page: 143 },
          " takes uploads through stages such as metadata extraction and thumbnail generation, and the ",
          { text: "creative approval workflow", page: 67 },
          " carries work through review and sign-off.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Upload, organisation, review, approval, use", "Handovers between stages", "A clear next step for each asset", "Stalls spotted at the handovers", "One workflow across the library"],
      },
      highlight: {
        heading: "In practice",
        body: "A creative operations lead finds that many approved pieces remain underused, and shifts attention from review to how finished work reaches the teams that asked for it.",
        tags: ["Creative operations", "Producers", "Library managers"],
      },
      glance: {
        heading: "Workflow management in brief",
        facts: [
          { label: "Area", value: "Collaboration" },
          { label: "Covers", value: "Upload, organisation, review, approval and final use" },
          { label: "Review stage", value: "Creative Approval Workflow", page: 67 },
          { label: "Longer view", value: "Asset Lifecycle Management", page: 101 },
        ],
        actions: [{ kind: "route", path: "/features/collaboration", label: "More in Collaboration" }]
      },
      sources: [{ kind: "pdf", page: 80 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 101 }, { kind: "pdf", page: 182 }, EXPLAINS],
    },
    {
      kind: "workflow",
      id: "stages",
      eyebrow: "The flow",
      heading: "What carries an asset from one stage to the next",
      stages: [
        { label: "Upload", body: "Files arrive through direct uploads or connected storage sources and move through processing. The handover comes when processing status shows the asset is fully indexed and searchable, not merely uploaded.", page: 145 },
        { label: "Organisation", body: "Folders, tags and metadata give the asset its place in the library. It is ready to move on once the people who will look for it would find it." },
        { label: "Review", body: "Once review is requested, colleagues inspect the work in one central location and discuss changes on the asset. Review has done its job when the feedback has been dealt with and the work can be judged.", page: 69 },
        { label: "Approval", body: "With the requested changes made, the asset is marked as approved, and that decision is the handover to everyone who will use the work." },
        { label: "Final use", body: "Approved content reaches the people who need it, through approved-only views or saved views shared by URL.", page: 103 },
      ],
      sources: [{ kind: "pdf", page: 121 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 145 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 69 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 79 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "bottlenecks",
      eyebrow: "Common bottlenecks",
      heading: "Where creative workflows tend to stall",
      items: [
        {
          heading: "Between upload and organisation",
          summary: "Files that arrive in a rush are often never properly described.",
          icon: "tag",
          body: [
            "After a shoot or a large delivery, getting the files in feels like the finish line. Assets left without useful tags or metadata are in the library in a technical sense, but nobody will come across them when they are needed.",
            [
              { text: "AI-assisted tagging", page: 31 },
              " can suggest tags during processing, and teams can ",
              { text: "approve suggested tags in bulk", page: 47 },
              ", so organisation begins from suggestions to confirm rather than an empty record.",
            ],
          ],
        },
        {
          heading: "Between organisation and review",
          summary: "Work that is ready for feedback does not always reach the people who should give it.",
          icon: "mention",
          body: [
            "Creators sometimes hold work back until it feels perfect, and reviewers cannot respond to drafts they have not heard about. Days can pass with nobody at fault and nothing moving.",
            ["Agreeing when work is ready and requesting review on the asset at that point makes the handover a deliberate step, and a ", { text: "mention", page: 86 }, " makes it easier to bring a particular reviewer into the discussion when their view is the one needed."],
          ],
        },
        {
          heading: "Between review and approval",
          summary: "Feedback rounds can carry on long after the work is good enough.",
          icon: "approval",
          body: [
            "Review without a clear approver tends to drift: one more tweak, one more opinion, one more round. The work improves only marginally while everything downstream waits.",
            ["Agreeing who decides before review starts keeps rounds purposeful, and ", { text: "review status", page: 76 }, " shows a producer which assets still need attention and which have completed the approval process."],
          ],
        },
        {
          heading: "Between approval and final use",
          summary: "Approved work that nobody can find is not really finished.",
          icon: "search",
          body: [
            "Finished assets left in project folders are easy for their makers to locate and invisible to everyone else, so channel teams improvise or ask for something to be made again.",
            [
              { text: "Asset usage analytics", page: 182 },
              " help teams understand which assets receive attention and which remain underused, a useful check on whether approved work is reaching anyone at all.",
            ],
          ],
        },
        {
          heading: "Across the whole workflow",
          summary: "Without a view of the flow, bottlenecks tend to be discovered through complaints.",
          icon: "chart",
          body: [
            [
              "Individual stages look healthy to the people inside them. ",
              { text: "Creative workflow metrics", page: 208 },
              " help teams understand how assets move through upload, review and approval, which can help an operations lead notice a pattern before anyone raises it.",
            ],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 31 }, { kind: "pdf", page: 47 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 86 }, { kind: "pdf", page: 76 }, { kind: "pdf", page: 182 }, { kind: "pdf", page: 208 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "Trade show material taken from shoot to stand",
      team: "An in-house creative team",
      situation: "An in-house creative team is preparing for a trade show: new product photography, a short film for the stand and a printed brochure, all needed by the sales team when the doors open.",
      steps: [
        { heading: "Photography comes in", body: ["The studio photographer saves the selects into a ", { text: "watch folder", page: 128 }, ", which is scanned continuously so the new files can enter the GetSibu workflow."] },
        { heading: "The shots are organised", body: "A designer reviews the suggested tags, approves the suitable ones in bulk and overrides the few that do not fit the team’s taxonomy." },
        { heading: "The film and brochure go to review", body: "The designer requests review of both, and the product manager answers two specification questions in threads on the brochure." },
        { heading: "The film and brochure are approved", body: "After one round of changes, the marketing lead marks both as approved, and nothing in the trade show set still needs attention." },
        { heading: "Sales takes the finished set", body: "Sales colleagues take the approved pieces from an approved-only view instead of waiting for files to arrive by email." },
      ],
      outcome: "Every piece reached the stand through the same stages, and whenever something ran late, the team knew which stage it was waiting in.",
      link: { page: 222, label: "GetSibu for In-House Creative Teams" },
      sources: [{ kind: "pdf", page: 128 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 47 }, { kind: "pdf", page: 48 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 76 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 222 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about creative workflow management",
      items: [
        {
          question: "How is creative workflow management different from asset lifecycle management?",
          answer: [
            "Workflow management concentrates on keeping work moving from upload to final use and on the handovers between stages. ",
            { text: "Asset lifecycle management", page: 101 },
            " takes the longer view, from initial upload through review and approval to reuse and eventual deletion.",
          ],
        },
        {
          question: "Should reference material follow the same workflow as finished work?",
          answer: "Not always. Mood references, raw footage and archive material may be uploaded and organised without ever going to review. Agreeing which kinds of asset take the full route through review and approval stops people waiting for a sign-off nobody intended to give.",
        },
        {
          question: "Who should own a team’s creative workflow?",
          answer: "Someone with a view across stages, such as a creative operations lead or senior producer. Each stage has its own owners; the workflow owner watches the handovers between them.",
        },
      ],
      sources: [{ kind: "pdf", page: 80 }, { kind: "pdf", page: 101 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on moving work through the library",
      variant: "compact",
      pages: [67, 101, 208, 76, 143, 90],
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
