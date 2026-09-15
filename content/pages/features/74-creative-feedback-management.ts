/**
 * 74 · Creative Feedback Management — /features/creative-feedback-management
 *
 * Angle (cluster: comments-feedback): feedback as an organised workflow attached to the asset — the management
 * questions feedback raises (what was asked, who owns it, is it done, what was decided), at the scale of one asset,
 * a project and the library. Team Feedback (73) owns the scattering problem, Threaded Comments (63) threads,
 * Asset Discussion History (75) how feedback evolved, Creative Approval Workflow (67) the approval loop.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how creative teams manage feedback; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 74,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Collaboration",
      lede: "Why creative feedback needs managing rather than just collecting, the questions a well-run feedback process has to answer, and how that work looks on one asset, across a project and across the library.",
      visual: { diagram: "timeline-review", focus: "comments" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 74 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "From a pile of comments to feedback a team can manage",
      body: [
        "GetSibu turns creative feedback into an organised workflow by attaching discussions directly to the relevant asset. Feedback stops being a heap of messages to sort through and becomes something a team can run.",
        "Feedback needs managing because it arrives unevenly. One reviewer sends a considered set of notes; another adds remarks over several days. Some points are essential, some are preferences and a few contradict each other. Whoever is responsible for the work has to know, at any moment, what has been asked, what has been addressed and what is still waiting on a decision.",
        [
          "The structure comes from the asset. Discussions attached to the work can be ",
          { text: "organised into threads by issue", page: 63 },
          ", the colleagues who need to act can be ",
          { text: "mentioned in the discussion", page: 66 },
          ", and each piece moves towards a recorded decision.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Discussions attached to the relevant asset", "Organised, not just collected", "Each point answered or decided", "A visible state for each asset", "A record to learn from"],
      },
      highlight: {
        heading: "In practice",
        body: "A creative lead running feedback on a product launch checks which assets still need attention, then reads the discussion on those assets, instead of rereading every message.",
        tags: ["Creative leads", "Producers", "Project managers"],
      },
      glance: {
        heading: "Feedback management in brief",
        facts: [
          { label: "Area", value: "Collaboration" },
          { label: "Organised around", value: "The relevant asset" },
          { label: "Problem it answers", value: "Team Feedback", page: 73 },
          { label: "Record", value: "Asset Discussion History", page: 75 },
        ],
        actions: [{ kind: "route", path: "/features/collaboration", label: "More in Collaboration" }]
      },
      sources: [{ kind: "pdf", page: 74 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 66 }, { kind: "pdf", page: 76 }, { kind: "pdf", page: 73 }, { kind: "pdf", page: 75 }, EXPLAINS],
    },
    {
      kind: "workflow",
      id: "questions",
      eyebrow: "The workflow",
      heading: "Six questions organised feedback has to answer",
      stages: [
        { label: "What was said?", body: "Every remark is written on the asset it concerns, so there is one complete place to read the feedback rather than several partial ones." },
        { label: "What is each point about?", body: "Separate issues run as separate threads, which stops a note about copy from being mistaken for a reply about imagery." },
        { label: "Who needs to act?", body: "The discussion should make clear who is expected to respond or make the change, so nothing waits for somebody to volunteer." },
        { label: "Has it been dealt with?", body: "A reply saying what was changed, together with a revised version of the asset, shows that a point has been handled rather than forgotten." },
        { label: "What was decided?", body: "Approval turns the outcome into a recorded state: approved, or still requiring changes.", page: 68 },
        { label: "What can we learn?", body: "Afterwards, the history of the discussion helps the team understand how the feedback evolved." },
      ],
      sources: [{ kind: "pdf", page: 74 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 68 }, { kind: "pdf", page: 75 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "scales",
      eyebrow: "By scale",
      heading: "Managing feedback at three scales",
      tabs: [
        {
          label: "One asset",
          heading: "Keep every point on a single piece under control",
          icon: "image",
          body: [
            "On a single asset, management means knowing what has been asked and what has already been answered. With each issue in its own thread, the creator can work through the feedback like a list without losing the conversation behind any item.",
            "Once the points are handled, the asset’s approval state records whether the piece can move on.",
          ],
          points: ["A thread for each issue raised", "A recorded state for the piece"],
        },
        {
          label: "A project",
          heading: "See where feedback stands across a set of assets",
          icon: "collection",
          body: [
            "A campaign or production can have many assets in review at the same time. The question shifts from “what did they say?” to “which pieces are still waiting?”",
            ["A ", { text: "shared creative view", page: 79 }, " lets the project’s recurring set of assets be shared through a URL, and ", { text: "review status", page: 76 }, " indicates for each one whether it needs attention or has completed the approval process."],
          ],
          points: ["One view of the project’s assets", "Attention directed to pieces still waiting"],
        },
        {
          label: "The library",
          heading: "Understand how feedback flows across the organisation",
          icon: "chart",
          body: [
            "Across the whole library the questions become operational: where is review activity concentrated, and how do assets move from upload to approval?",
            [{ text: "Creative workflow metrics", page: 208 }, " help teams understand how assets move through upload, review and approval, and ", { text: "contributor analytics", page: 185 }, " help show who is adding content and taking part in library activity."],
          ],
          points: ["Review activity seen in aggregate", "Patterns in how work moves over time"],
        },
      ],
      sources: [{ kind: "pdf", page: 63 }, { kind: "pdf", page: 68 }, { kind: "pdf", page: 79 }, { kind: "pdf", page: 76 }, { kind: "pdf", page: 208 }, { kind: "pdf", page: 185 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "problems",
      eyebrow: "Considerations",
      heading: "Feedback problems an organised workflow helps with",
      items: [
        {
          heading: "Points that were already handled",
          summary: "A request repeated after it was dealt with costs a round of work.",
          icon: "history",
          body: [
            ["A reviewer who missed an earlier exchange may ask again for something that has already changed. Before acting on it, check what the revision did: ", { text: "revision tracking", page: 100 }, " helps teams understand what changed between versions and which version is currently active."],
          ],
        },
        {
          heading: "Feedback after sign-off",
          summary: "A late comment on approved work needs a deliberate response.",
          icon: "flag",
          body: [
            "Late feedback is not always wrong, but it should not quietly reopen finished work. Deciding in advance how late changes are handled, as a new round of review or as input for the next piece, keeps approvals meaningful.",
          ],
        },
        {
          heading: "A flood of minor remarks",
          summary: "Many small notes can hide the few that matter.",
          icon: "filter",
          body: [
            "When everything is raised at once, priorities blur. Settling the substantial questions first, such as message, structure and accuracy, before turning to polish keeps the important feedback in view.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 74 }, { kind: "pdf", page: 100 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about creative feedback management",
      items: [
        {
          question: "How is managing creative feedback different from commenting on assets?",
          answer: ["Commenting captures feedback; management is what follows, from organising the points to reaching a decision. ", { text: "Asset comments", page: 62 }, " are the raw material the workflow is built from."],
        },
        {
          question: "Who should manage feedback on a creative project?",
          answer: "Usually the person accountable for delivery, such as a producer, project lead or creative lead. Their job is not to answer every point but to make sure each one is answered, decided or deliberately set aside.",
        },
        {
          question: "How can a team tell whether its feedback process is working?",
          answer: ["Fewer rounds on the same issue and fewer late surprises are good signs. At library level, ", { text: "digital asset KPIs", page: 207 }, " can include comments and asset activity alongside uploads, storage, searches and contributors."],
        },
      ],
      sources: [{ kind: "pdf", page: 74 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 207 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on organising creative feedback",
      variant: "compact",
      pages: [73, 63, 75, 67, 76, 85],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the closest feedback topics." }],
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
