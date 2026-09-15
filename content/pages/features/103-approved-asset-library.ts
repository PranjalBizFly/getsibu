/**
 * 103 · Approved Asset Library — /features/approved-asset-library
 *
 * Angle (clusters: approvals; brand-control): approved-only views — who they serve, what content needs before it belongs
 * in them, and how they differ from access control and from a shared “final” folder. Creative Approval Workflow (67)
 * owns the process, Brand Asset Approval (71) the gates, Asset Status Management (102) the workflow states.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how organisations share approved creative content; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 103,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Versioning & Asset Management",
      lede: "How approved-only views give colleagues access to content that has completed the required review, what an asset needs before it belongs there, and why the views suit people who use creative work rather than make it.",
      visual: { diagram: "folder-access", focus: "folders" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 103 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A view of the library where everything has been signed off",
      body: [
        "GetSibu lets teams create approved-only views, so users can reach content that has completed the required review process without wading through drafts.",
        "Many of the people who rely on a creative library never make anything for it. Sales teams, regional marketers and communications colleagues need a logo, a product shot or a deck they can use straight away. For them, a library full of work in progress is worse than unhelpful: every result raises the question of whether it is cleared, and the easiest answer is to email the creative team.",
        [
          "An approved-only view answers that question before it is asked. Content gets to the approved side through the ",
          { text: "creative approval workflow", page: 67 },
          ", where a team requests review, makes changes and marks assets as approved.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Only content that completed review", "Built for people who use, not make", "Fewer “is this cleared?” emails", "Review decides what belongs", "Drafts kept in the library for review"],
      },
      highlight: {
        heading: "In practice",
        body: "A sales colleague preparing a customer presentation opens the approved view and takes product images from there, instead of asking the design team which ones are cleared.",
        tags: ["Sales", "Communications", "Brand"],
      },
      glance: {
        heading: "Approved library in brief",
        facts: [
          { label: "Shows", value: "Content that has completed review" },
          { label: "Depends on", value: "Creative Approval Workflow" },
          { label: "Not the same as", value: "Folder-Level Permissions" },
          { label: "Used by", value: "Sales, communications, marketing and brand teams" },
        ],
        actions: [{ kind: "route", path: "/features/asset-management", label: "More in Versioning & Asset Management" }]
      },
      sources: [{ kind: "pdf", page: 103 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 214 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "route-to-approved",
      eyebrow: "Step by step",
      heading: "How an asset earns its place in the approved view",
      steps: [
        { heading: "Work is added", body: "New work enters the library for review; until that review is complete, it is not approved content.", icon: "upload" },
        { heading: "Review is requested", body: "The creator puts the asset forward, and its status history records that it is awaiting review.", icon: "flag", page: 68 },
        { heading: "Changes are discussed", body: "Reviewers inspect the work and discuss changes in one place, and the creator revises it.", icon: "message", page: 69 },
        { heading: "The asset is approved", body: "Once the work meets the requirements, the team marks the asset as approved.", icon: "approval" },
        { heading: "It is ready for wider use", body: "Having completed the required review process, the asset is the kind of content an approved-only view exists to show.", icon: "check" },
      ],
      sources: [{ kind: "pdf", page: 103 }, { kind: "pdf", page: 68 }, { kind: "pdf", page: 69 }, { kind: "pdf", page: 67 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "audiences",
      eyebrow: "Who it helps",
      heading: "Who an approved asset library is for",
      tabs: [
        {
          label: "Wider teams",
          heading: "Use material without asking whether it is cleared",
          icon: "users",
          body: [
            "Sales, communications and regional teams want to move quickly and cannot judge whether a file is final. An approved view takes that judgement out of their day.",
            ["Marketing teams feel the difference too, because ", { text: "marketing productivity", page: 352 }, " can improve when less time goes into locating approved campaign content and supporting materials."],
          ],
          points: ["No need to judge whether a file is final", "Less time locating approved content"],
        },
        {
          label: "Brand teams",
          heading: "Keep a controlled source of truth",
          icon: "shield",
          body: [
            ["For brand teams, the approved library is where consistency is protected or lost. Brand teams can ", { text: "organise approved assets", page: 214 }, " and maintain a controlled source of truth, arranging them by campaign, region or market."],
            [{ text: "Brand asset analytics", page: 203 }, " then show which approved assets are being accessed and reused, and which are not."],
          ],
          points: ["Approved assets organised by market", "Visibility of what gets reused"],
        },
        {
          label: "Creative teams",
          heading: "Stop fielding the same file requests",
          icon: "palette",
          body: [
            "Designers and producers are often interrupted by requests for files that already exist. When colleagues can help themselves to approved content, those requests become less frequent.",
            "Drafts can then stay in the library for review, with less risk of an unfinished file escaping into a presentation or a post.",
          ],
          points: ["Fewer interruptions for existing files", "Drafts kept for review, not distribution"],
        },
      ],
      sources: [{ kind: "pdf", page: 103 }, { kind: "pdf", page: 352 }, { kind: "pdf", page: 214 }, { kind: "pdf", page: 83 }, { kind: "pdf", page: 203 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "final-folder-or-view",
      eyebrow: "The difference",
      heading: "A shared “final” folder compared with an approved-only view",
      columns: ["A shared “final” folder", "An approved-only view in GetSibu"],
      emphasis: 1,
      rows: [
        ["What belongs there", "Whatever someone decided to drop in", "Content that has completed the required review"],
        ["Drafts", "Slip in under hopeful filenames", "Not included until review is complete"],
        ["Checking a file is cleared", "Ask whoever saved it", "Its review status shows it"],
        ["Who it serves", "Whoever knows the folder exists", "People who need finished content"],
      ],
      sources: [{ kind: "pdf", page: 103 }, { kind: "pdf", page: 76 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about the approved asset library",
      items: [
        {
          question: "What makes an approved asset library trustworthy?",
          answer: "The review behind it. A view of approved content is only as reliable as the decisions that put content on the approved side, so the requirements for approval need to be agreed and applied consistently.",
        },
        {
          question: "Does an approved asset library replace folder permissions?",
          answer: ["No. ", { text: "Folder-level permissions", page: 152 }, " control access at a more detailed level than organisation-wide access; an approved-only view concerns whether content has completed review. They answer different questions."],
        },
        {
          question: "How do approved-only views relate to brand approval gates?",
          answer: [{ text: "Brand asset approval", page: 71 }, " describes gates that separate approved creative assets from drafts and work in progress; approved-only views give users access to the content on the approved side of that line."],
        },
      ],
      sources: [{ kind: "pdf", page: 103 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 71 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on approval and approved content",
      variant: "compact",
      pages: [67, 71, 102, 152, 214, 203],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the asset status page." }],
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
