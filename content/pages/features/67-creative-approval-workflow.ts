/**
 * 67 · Creative Approval Workflow — /features/creative-approval-workflow
 *
 * Angle (cluster: approvals, primary): the workflow itself — request review, make changes, mark approved — as a
 * loop, the stages of one round and who is responsible for what. Asset Approval (68) owns statuses with history,
 * Brand Asset Approval (71) approval gates, Review Status (76) the indicator, Approval History (77) the record,
 * Creative Approval Management (89) the process across the library, Creative Review (69) the review space.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how creative approval workflows typically run; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 67,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Collaboration",
      lede: "How an approval workflow in GetSibu takes creative work from a request for review, through the changes reviewers ask for, to an asset marked as approved, and how to run that loop so it keeps moving.",
      visual: { diagram: "timeline-review", focus: "status" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 67 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A loop from request to approval, kept on the asset",
      body: [
        "GetSibu provides approval workflows that allow teams to request review, make changes and mark assets as approved. Together those actions form a loop: work goes out for review, returns with feedback, is revised, and goes round again until it is ready.",
        "Without an agreed workflow, approval tends to stay implicit. Someone says a draft “looks fine” in a meeting, a colleague takes that as sign-off, and a third person keeps waiting for a decision they believe is still pending. A defined loop makes every transition deliberate: somebody asks for review, somebody asks for changes, somebody confirms approval.",
        [
          "Each pass around the loop leaves a trace. ",
          { text: "Asset approval", page: 68 },
          " keeps a status history of whether content is awaiting review, approved or requires changes, and ",
          { text: "approval history", page: 77 },
          " provides a record of review activity that reduces confusion over which version was accepted.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Request review", "Make the requested changes", "Mark the asset as approved", "Repeat until the work is ready", "A record of review activity"],
      },
      highlight: {
        heading: "In practice",
        body: "A motion designer requests review of a social animation, the brand lead asks for a slower ending, and once the revised file is in place the lead marks it as approved, all on the same asset.",
        tags: ["Designers", "Marketing leads", "Producers"],
      },
      glance: {
        heading: "The approval workflow in brief",
        facts: [
          { label: "Area", value: "Collaboration" },
          { label: "Actions", value: "Request review, make changes, mark approved" },
          { label: "Part of", value: "Creative Workflow Management", page: 80 },
          { label: "Records", value: "Status history on each asset" },
        ],
        actions: [{ kind: "route", path: "/features/collaboration", label: "More in Collaboration" }]
      },
      sources: [{ kind: "pdf", page: 67 }, { kind: "pdf", page: 68 }, { kind: "pdf", page: 77 }, { kind: "pdf", page: 80 }, EXPLAINS],
    },
    {
      kind: "workflow",
      id: "one-round",
      eyebrow: "Step by step",
      heading: "Stages of one approval round",
      stages: [
        { label: "Prepare the work", body: "The creator finishes a version that is genuinely worth judging, so reviewers spend their time on decisions rather than on obvious gaps." },
        { label: "Request review", body: "Review is requested on the asset itself, marking the point at which the work is ready to be assessed." },
        { label: "Review and discuss", body: "Reviewers inspect the work, comment on the asset and settle open questions in threads organised by issue.", page: 69 },
        { label: "Make changes", body: "The creator works through the feedback and replaces the asset in place, with previous versions retained in its record." },
        { label: "Approve or go round again", body: "Reviewers check the revision; if more is needed the loop repeats, and if not the asset is marked as approved." },
      ],
      sources: [{ kind: "pdf", page: 67 }, { kind: "pdf", page: 69 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 91 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "responsibilities",
      eyebrow: "Who does what",
      heading: "What each person in the approval loop is responsible for",
      tabs: [
        {
          label: "Creators",
          heading: "Ask for review when the work can be judged",
          icon: "palette",
          body: [
            "For the person who made the work, requesting review says that a version is ready to be assessed. Asking too early invites comments on things that were never finished; asking too late means changes arrive when they are costly.",
            "A short note with the request, saying what this version is meant to settle, such as the layout only or the final copy, helps reviewers aim their feedback at the right questions.",
          ],
          points: ["Review requested at a meaningful point", "Reviewers told what the version should settle"],
        },
        {
          label: "Reviewers",
          heading: "Ask for changes clearly and in one go",
          icon: "eye",
          body: [
            "A reviewer’s most useful contribution is a complete, specific set of requested changes. Feedback that trickles in over several days forces a string of small revisions and blurs which version dealt with what.",
            "Checking the whole piece in each round also matters, so the next round is not spent on points that could have been raised the first time.",
          ],
          points: ["Specific, complete feedback per round", "The whole piece checked each time"],
        },
        {
          label: "Approvers",
          heading: "Confirm that the work is ready for use",
          icon: "approval",
          body: [
            ["Approving is a different act from reviewing. Several people may comment, but the approver confirms that content is ready to be used, which is the essence of ", { text: "creative approval", page: 370 }, ": authorised users reviewing assets and confirming readiness."],
            "The asset should be marked as approved only once the approver has seen the version that will actually go out.",
          ],
          points: ["Readiness confirmed, not just comments given", "Approval given on the final version"],
        },
        {
          label: "Workflow owners",
          heading: "Set the rules and keep work moving",
          icon: "workflow",
          body: [
            ["Someone has to decide which assets need approval, who is authorised to give it and what happens to work that stalls. ", { text: "Creative asset governance", page: 114 }, " is where those decisions about who can upload, edit, approve and download belong."],
            ["Looking across many assets, ", { text: "creative workflow metrics", page: 208 }, " help show how work moves through upload, review and approval."],
          ],
          points: ["Clear rules on who can approve", "A view of how assets move through review"],
        },
      ],
      sources: [{ kind: "pdf", page: 67 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 370 }, { kind: "pdf", page: 114 }, { kind: "pdf", page: 208 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "An event brochure through two review rounds",
      team: "A marketing design team",
      situation: "A marketing team is producing a brochure for an industry event. The designer owns the layout, the product manager checks the specifications and the head of marketing approves the finished piece.",
      steps: [
        { heading: "Review is requested", body: "The designer completes the first full layout and requests review on the brochure asset, instead of emailing a PDF to each reviewer." },
        { heading: "Changes are asked for", body: "The product manager comments on two outdated specifications and the head of marketing asks for a stronger cover image, each on the brochure asset." },
        { heading: "The layout is revised", body: "The designer updates the layout and replaces the file in place, so the first draft remains available as a previous version." },
        { heading: "Review is requested again", body: "The designer requests review of the revised layout; the product manager checks the corrected specifications and has nothing further to add." },
        { heading: "The brochure is approved", body: "The head of marketing marks the brochure as approved." },
      ],
      outcome: "The brochure moves from first layout to approval on one asset, without PDFs sent round by email or a separate chain of sign-off messages.",
      link: { page: 82, label: "Marketing Collaboration" },
      sources: [{ kind: "pdf", page: 67 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 82 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about the creative approval workflow",
      items: [
        {
          question: "How many review rounds should a piece of creative work need?",
          answer: "There is no fixed number. High-visibility or complex work may need several rounds and routine assets only one. Repeated rounds on the same issue usually point to unclear feedback or an unresolved disagreement rather than a need for more review.",
        },
        {
          question: "Can approval events from GetSibu feed other production systems?",
          answer: ["Yes. The ", { text: "approval API", page: 267 }, " describes how approval events can be incorporated into external production and workflow systems."],
        },
        {
          question: "How is an approval workflow different from approval management?",
          answer: ["The workflow is the loop a single asset goes through. ", { text: "Creative approval management", page: 89 }, " is the structured process for moving assets from draft to approved status."],
        },
      ],
      sources: [{ kind: "pdf", page: 67 }, { kind: "pdf", page: 267 }, { kind: "pdf", page: 89 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on approving creative work",
      variant: "compact",
      pages: [68, 76, 77, 69, 89, 370],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the closest approval topics." }],
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
