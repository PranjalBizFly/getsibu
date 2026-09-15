/**
 * 70 · Campaign Review — /features/campaign-review
 *
 * Angle (cluster: approvals): campaign materials reviewed before distribution — reviewing a multi-format set
 * piece by piece and as a whole, and where campaign reviews go wrong. Creative Approval Workflow (67) owns the
 * loop, Creative Review (69) the review space, Brand Asset Approval (71) approval gates, Marketing Collaboration
 * (82) marketing teams in general, GetSibu for Marketing Teams (213) the use case.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how campaign materials are typically reviewed; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 70,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Collaboration",
      lede: "What makes reviewing a whole campaign different from reviewing a single file, where campaign reviews tend to go wrong, and how marketing teams can check material in GetSibu before it goes out.",
      visual: { diagram: "timeline-review", focus: "status" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 70 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Checking a campaign before it reaches its audience",
      body: [
        "Marketing teams can use asset-level discussions and approvals in GetSibu to review campaign materials before distribution. Each banner, film, image and document can be discussed and approved on its own asset.",
        "A campaign is rarely a single file. One idea becomes a hero film, shorter edits for social channels, display banners in several sizes, retail posters and a sales presentation, often produced by different people on overlapping schedules. Reviewing the pieces in isolation risks inconsistency, reviewing them only as a set risks missing the error on one small banner, and once material has been distributed any mistake is repeated wherever it was sent.",
        [
          "The practical answer is to review each piece where it lives and gather the set for a view of the whole. A ",
          { text: "saved search", page: 17 },
          " can collect a campaign’s assets into a reusable view, ",
          { text: "campaign asset versioning", page: 96 },
          " keeps revisions from becoming disconnected copies, and approval marks the pieces that are ready to go out.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Review before distribution", "Discussion on each campaign asset", "Approval piece by piece", "The campaign seen as a set", "Versions without disconnected copies"],
      },
      highlight: {
        heading: "In practice",
        body: "Before a launch, the campaign manager confirms that every banner, film and poster in the campaign has completed approval before the set is handed to the channel teams.",
        tags: ["Campaign managers", "Brand reviewers", "Channel teams"],
      },
      glance: {
        heading: "Campaign review in brief",
        facts: [
          { label: "Area", value: "Collaboration" },
          { label: "Used by", value: "Marketing teams" },
          { label: "Relies on", value: "Creative Approval Workflow", page: 67 },
          { label: "Team view", value: "Marketing Collaboration", page: 82 },
        ],
        actions: [{ kind: "route", path: "/features/collaboration", label: "More in Collaboration" }]
      },
      sources: [{ kind: "pdf", page: 70 }, { kind: "pdf", page: 17 }, { kind: "pdf", page: 96 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 76 }, { kind: "pdf", page: 82 }, EXPLAINS],
    },
    {
      kind: "checklist",
      id: "what-gets-checked",
      eyebrow: "What gets checked",
      heading: "What reviewers look for in campaign material",
      variant: "chips",
      items: [
        "One message across every format",
        "Correct product details",
        "Current logo and brand elements",
        "Offer and pricing wording",
        "Legal lines present and readable",
        "Right sizes for each channel",
        "Imagery cleared for the intended use",
        "Localised copy for each market",
        "Calls to action that match the campaign",
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "process",
      id: "before-distribution",
      eyebrow: "Step by step",
      heading: "Reviewing a campaign before it goes out",
      steps: [
        { heading: "Gather the campaign", body: "Save the search that finds the campaign’s assets, so reviewers and managers open the same set instead of a folder of attachments.", icon: "collection" },
        { heading: "Review each piece", body: "Reviewers comment directly on the banners, films and documents, so every note stays with the piece it concerns.", icon: "message" },
        { heading: "Check the set together", body: "Look across the whole campaign for consistency of message, imagery and product detail, and raise any mismatch on the assets involved.", icon: "layers" },
        { heading: "Revise without new copies", body: "Changes are made as new versions of the same campaign files, so the set does not fill up with competing copies of a banner.", icon: "history" },
        { heading: "Approve what is ready", body: "Each piece is approved on its own, and its status history shows whether anything is still awaiting review or requires changes.", icon: "approval", page: 68 },
        { heading: "Distribute the approved set", body: "Channel teams take material from an approved-only view, so what goes out is content that has completed the required review.", icon: "megaphone", page: 103 },
      ],
      sources: [{ kind: "pdf", page: 17 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 70 }, { kind: "pdf", page: 96 }, { kind: "pdf", page: 68 }, { kind: "pdf", page: 103 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "pitfalls",
      eyebrow: "Considerations",
      heading: "Where campaign reviews tend to go wrong",
      items: [
        {
          heading: "Small formats get less attention",
          summary: "Reviewers focus on the hero pieces and skim the rest.",
          icon: "eye",
          body: [
            "The film and the key visual attract the closest scrutiny, while the smallest banner or the email header is approved in passing. Mistakes in those pieces can still reach a large audience. Reviewing each asset in its own right, rather than waving a set through, keeps attention on every format.",
          ],
        },
        {
          heading: "Late changes miss some variants",
          summary: "A correction made on one asset has to be carried into every version of the idea.",
          icon: "refresh",
          body: [
            ["When an offer or a date changes late, it is easy to fix the poster and forget the social edit. Reopening the ", { text: "shared campaign view", page: 79 }, " after the change and checking each variant is the simplest way to catch the one that was missed."],
          ],
        },
        {
          heading: "Reviewers are spread across teams and places",
          summary: "Brand, product and regional reviewers rarely sit in the same room.",
          icon: "globe",
          body: [
            ["Campaign reviews involve people with different schedules and locations. ", { text: "Collaborative asset review", page: 87 }, " helps distributed teams review creative material without everyone being in one physical location, which suits a review that has to fit around several diaries."],
          ],
        },
        {
          heading: "Approval in one market is not approval everywhere",
          summary: "Regional variants deserve their own checks.",
          icon: "map",
          body: [
            ["Copy, offers and imagery often change from market to market. ", { text: "Global brands", page: 224 }, " can organise assets across markets with appropriate folder permissions and approval workflows. Treat each regional variant as an asset to approve in its own right, rather than assuming the original’s approval carries over."],
          ],
        },
        {
          heading: "Distribution is not the end of the story",
          summary: "What happens after launch shows what to review differently next time.",
          icon: "chart",
          body: [
            ["Once material is live, ", { text: "marketing asset analytics", page: 200 }, " help the team understand campaign content usage and library activity. A short look back after each launch often reveals which checks caught problems and which were a formality."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 79 }, { kind: "pdf", page: 87 }, { kind: "pdf", page: 224 }, { kind: "pdf", page: 200 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about campaign review",
      items: [
        {
          question: "Should a campaign be approved as one set or piece by piece?",
          answer: "Piece by piece, then checked as a set. Approving each asset keeps attention on every format, and a final look across the whole campaign catches inconsistencies between them.",
        },
        {
          question: "Who should sign off campaign material before it is distributed?",
          answer: "Whoever the organisation has authorised to confirm that content is ready for use, often a campaign or brand owner, with specialists checking product details, legal wording or regional copy on the assets that concern them.",
        },
        {
          question: "How can a team avoid using campaign material after it should be retired?",
          answer: [{ text: "Asset expiry information", page: 104 }, " can help teams identify content that should no longer be used after a specified period, which matters for offers and seasonal material that date quickly."],
        },
      ],
      sources: [{ kind: "pdf", page: 70 }, { kind: "pdf", page: 370 }, { kind: "pdf", page: 104 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on reviewing campaign work",
      variant: "compact",
      pages: [67, 82, 213, 17, 103, 87],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the marketing use case." }],
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
