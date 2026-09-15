/**
 * 68 · Asset Approval — /features/asset-approval
 *
 * Angle (cluster: approvals): the approval process with status history — what the states awaiting review, approved
 * and requires changes tell a team, and why the history of those states matters as well as the current one.
 * Creative Approval Workflow (67) owns the loop of actions, Brand Asset Approval (71) approval gates, Review Status
 * (76) the needs-attention indicator, Approval History (77) accountability and which version was accepted.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of approval states and how teams read them; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 68,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Collaboration",
      lede: "What each approval state tells the people around a piece of creative work, how to read the history those states leave behind, and why that record matters long after the decision.",
      visual: { diagram: "timeline-review", focus: "status" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 68 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Knowing where an asset stands, and how it got there",
      body: [
        "In GetSibu, assets can move through an approval process that keeps a status history. That history forms a clear record of whether a piece of content is awaiting review, approved or requires changes.",
        "Approval states exist because creative work rarely passes review in a single step. Without a recorded state, whether a file is ready depends on whom you ask and when you last heard; with one, the answer sits on the asset itself.",
        [
          "Where the ",
          { text: "creative approval workflow", page: 67 },
          " is about the actions people take, asset approval is about the record those actions leave. Approval states also sit within the broader ",
          { text: "asset statuses", page: 102 },
          " that help teams distinguish drafts, approved content and other workflow states.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Awaiting review", "Requires changes", "Approved", "History as well as current state", "A clear record for the team"],
      },
      highlight: {
        heading: "In practice",
        body: "Before a product image goes into a catalogue, a merchandiser checks its approval record and sees not only that it is approved, but that it was sent back for changes once along the way.",
        tags: ["Merchandisers", "Brand teams", "Producers"],
      },
      glance: {
        heading: "Asset approval in brief",
        facts: [
          { label: "Area", value: "Collaboration" },
          { label: "States", value: "Awaiting review, approved, requires changes" },
          { label: "Driven by", value: "Creative Approval Workflow", page: 67 },
          { label: "Related indicator", value: "Review Status", page: 76 },
        ],
        actions: [{ kind: "route", path: "/features/collaboration", label: "More in Collaboration" }]
      },
      sources: [{ kind: "pdf", page: 68 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 102 }, { kind: "pdf", page: 76 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "states",
      eyebrow: "The three states",
      heading: "What each approval state tells the team",
      tabs: [
        {
          label: "Awaiting review",
          heading: "The work is ready to be judged",
          icon: "clock",
          body: [
            "An asset awaiting review has been put forward for assessment and is waiting on the people who need to look at it. For reviewers it is a prompt; for everyone else it is a caution that the content has not yet been confirmed.",
            "A long stay in this state is worth noticing. It often means nobody has picked the review up, or that the team never agreed whose review it was.",
          ],
          points: ["A prompt for reviewers", "Not yet confirmed for use"],
        },
        {
          label: "Requires changes",
          heading: "Feedback has to be acted on",
          icon: "refresh",
          body: [
            "This state records that reviewers want revisions. What exactly they want belongs in the comments and threads on the asset; the status simply says the work is back with its creator.",
            "It is not a mark of failure. Plenty of good work passes through it more than once, and its appearance in the history is an ordinary part of making creative work.",
          ],
          points: ["Work returned to the creator", "The detail lives in the comments"],
        },
        {
          label: "Approved",
          heading: "The content has been confirmed",
          icon: "approval",
          body: [
            "Approved means the review process for this asset is complete. It is the state colleagues outside the review care about, because it tells them the content can be relied on.",
          ],
          points: ["Review completed", "The state other teams look for"],
        },
      ],
      sources: [{ kind: "pdf", page: 68 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 63 }, EXPLAINS],
    },
    {
      kind: "timeline",
      id: "status-history",
      eyebrow: "Status history",
      heading: "An illustrative status history for one campaign image",
      intro: "One hypothetical image, followed from its first request for review to approval.",
      items: [
        { label: "First request", body: "Review is requested, and the image is awaiting review while the brand lead and the product owner look at it." },
        { label: "Sent back", body: "The product owner notices an outdated pack design, so the image is marked as requiring changes." },
        { label: "Corrected version", body: "The designer replaces the image with the current pack and requests review again, so it is awaiting review once more." },
        { label: "Second look", body: "The brand lead asks for a tighter crop for social channels, and the image requires changes again." },
        { label: "Approved", body: "With the crop adjusted the image is approved, and its history shows two rounds of changes before that decision." },
      ],
      sources: [{ kind: "pdf", page: 68 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 91 }, { kind: "editorial", note: "Illustrative sequence; the asset and team are hypothetical." }],
    },
    {
      kind: "accordion",
      id: "reading-history",
      eyebrow: "Considerations",
      heading: "Reading and using an approval status history",
      items: [
        {
          heading: "The history explains how the decision was reached",
          summary: "The sequence of states shows how much work an approval took.",
          icon: "history",
          body: [
            "An asset approved at the first attempt and one sent back several times can look identical today. The history tells them apart, which helps when a similar piece of work is being planned or when someone asks why the work took longer than planned.",
          ],
        },
        {
          heading: "Statuses and versions tell different stories",
          summary: "A status describes the review; a version describes the file.",
          icon: "layers",
          body: [
            ["When an asset is replaced, ", { text: "version history", page: 92 }, " keeps a record of the previous versions. Read alongside the status history, it helps show which revision a decision concerned."],
          ],
        },
        {
          heading: "A state is no substitute for the discussion",
          summary: "The status says where the asset is; the comments say why.",
          icon: "message",
          body: [
            "“Requires changes” with no explanation leaves the creator guessing. Every change of state is easier to act on when the feedback that caused it is written on the asset, so the history and the discussion can be read together.",
          ],
        },
        {
          heading: "Agree what approved means before relying on it",
          summary: "A shared definition stops two people reading the same state differently.",
          icon: "flag",
          body: [
            "For one team, approved might mean ready for any channel; for another, cleared for internal use only. Writing down what the state means for each kind of asset helps stop approved content turning up somewhere it was never meant to go.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 68 }, { kind: "pdf", page: 92 }, { kind: "pdf", page: 62 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about asset approval",
      items: [
        {
          question: "How is asset approval different from review status?",
          answer: [{ text: "Review status", page: 76 }, " gives a simple indication of whether an asset needs attention or has already completed the approval process. Asset approval covers the history behind that indication, which is what people turn to when a decision is questioned."],
        },
        {
          question: "Can approved assets be kept apart from content still in review?",
          answer: ["Brand teams can use ", { text: "approval gates", page: 71 }, " to ensure that approved creative assets are separated from drafts and work-in-progress materials."],
        },
        {
          question: "What should happen when an already approved asset needs to change?",
          answer: "Treat the change as a new round of review. Replacing an asset keeps its previous versions within the asset record, and requesting review again confirms the revised content before anyone relies on it.",
        },
      ],
      sources: [{ kind: "pdf", page: 68 }, { kind: "pdf", page: 76 }, { kind: "pdf", page: 71 }, { kind: "pdf", page: 93 }, { kind: "pdf", page: 67 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on approval states and records",
      variant: "compact",
      pages: [67, 76, 77, 102, 103, 71],
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
