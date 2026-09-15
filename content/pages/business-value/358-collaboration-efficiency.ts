/**
 * 358 · Collaboration Efficiency — /business-value/collaboration-efficiency
 *
 * Angle (cluster: productivity): the coordination cost of feedback that must carry its own context between
 * disconnected tools — which parts of that cost contextual comments and approvals reduce in a review round, and
 * how a team measures the change in its own reviews. Team Feedback (73) owns why feedback scatters; Creative Team
 * Collaboration (61) owns the features.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of review coordination and how to assess it; states no GetSibu capability beyond the cited pages and supplies no figures." } as const;

const page: PageContent = {
  page: 358,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "centered",
      eyebrow: "Business Value",
      lede: "What asset-specific feedback costs when it has to travel between disconnected tools, which parts of that cost contextual comments and approvals take away, and how that cost changes between still images, video and larger groups of reviewers.",
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 358 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "The effort of explaining which file you mean",
      body: [
        "Contextual comments and approvals reduce the need to communicate asset-specific feedback across multiple disconnected tools. The efficiency lies less in any single message than in the coordination around each one, which is where the reduction is felt.",
        "Feedback sent outside the file has to carry its own context. The sender must say which asset, which version and which part, and whether the note is a suggestion, a request or a decision. The recipient then translates all of that back onto the work. That coordination is paid on both sides of every exchange, and it multiplies with each reviewer added to a round.",
        [
          "Why feedback scatters in the first place is explained under ",
          { text: "team feedback", page: 73 },
          ", and the collaboration features themselves under ",
          { text: "creative team collaboration", page: 61 },
          ". Collaboration efficiency is the business view of both: how much coordination a review round still needs once comments and approvals sit with the asset.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Coordination paid on every exchange", "Context carried by the asset", "Fewer notes to collect and reconcile", "Decisions recorded, not inferred", "Different costs in different kinds of review"],
      },
      glance: {
        heading: "Collaboration efficiency in brief",
        facts: [
          { label: "Area", value: "Business value" },
          { label: "Reduces", value: "Feedback carried between disconnected tools" },
          { label: "Starts with", value: "Asset Comments", page: 62 },
          { label: "Decisions on record", value: "Approval History", page: 77 },
        ],
        actions: [{ kind: "route", path: "/business-value", label: "More in Business Value" }]
      },
      sources: [{ kind: "pdf", page: 358 }, { kind: "pdf", page: 73 }, { kind: "pdf", page: 61 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 77 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "review-situations",
      eyebrow: "By kind of review",
      heading: "Where coordination builds up in different kinds of review",
      tabs: [
        {
          label: "Layouts and images",
          heading: "Establishing which file a note concerns",
          icon: "image",
          body: [
            "Feedback on a layout or photograph is often short on substance and long on reference: which of the three banners, which draft, the version sent yesterday or the one from this morning. Every note sent separately has to settle that before it can say anything useful.",
            [{ text: "Asset comments", page: 62 }, " are left directly on assets, keeping feedback attached to the creative work being discussed, so that part of the explanation is no longer needed."],
          ],
          points: ["Feedback attached to the work", "Less effort spent on references"],
        },
        {
          label: "Video",
          heading: "Locating a moment in footage",
          icon: "video",
          body: [
            "Video notes depend on time: the second shot, the frame where the logo appears, the pause before the end card. Described in a message, each one has to be found again by the editor before it can be acted on.",
            [{ text: "Video timeline comments", page: 64 }, " can be attached to specific points on the timeline, which gives editors and reviewers a precise location for feedback."],
          ],
          points: ["Notes tied to points on the timeline", "Less searching for the moment meant"],
        },
        {
          label: "Several reviewers",
          heading: "Keeping separate issues separate",
          icon: "thread",
          body: [
            "When several people review the same piece separately, their notes overlap, repeat and occasionally contradict one another, and the person making changes has to sort them before starting.",
            [{ text: "Threaded comments", page: 63 }, " keep conversations organised around specific issues instead of one long stream of unrelated feedback, and ", { text: "asset mentions", page: 86 }, " make it easier to bring the right collaborator into an asset-specific discussion."],
          ],
          points: ["One thread per issue", "The right colleague brought in"],
        },
        {
          label: "Distributed",
          heading: "Reviewing without sharing a room",
          icon: "globe",
          body: [
            "Reviewers in different places, and often on different hours, cannot settle a question in passing, so every unclear note costs a message and a wait.",
            [{ text: "Collaborative asset review", page: 87 }, " helps distributed teams review creative material without requiring everyone to be in the same physical location."],
          ],
          points: ["Review without a shared location", "Discussion held with the asset"],
        },
      ],
      sources: [{ kind: "pdf", page: 62 }, { kind: "pdf", page: 64 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 86 }, { kind: "pdf", page: 87 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "signs",
      eyebrow: "Warning signs",
      heading: "Signs that coordination is slowing reviews",
      items: [
        {
          heading: "Messages that only establish context",
          summary: "Questions about which file, which version or which moment improve nothing in the work.",
          icon: "help",
          body: [
            "In an ordinary round, look at how many messages exist only to establish what someone meant: which attachment, which draft, which part of the video. None of them improves the work, and all of them delay it.",
            "A high share of such messages is a dependable sign that feedback is travelling without its context, whatever the quality of the feedback itself.",
          ],
          points: ["Which file, which version, which moment", "Context rebuilt message by message"],
        },
        {
          heading: "Rounds that reopen after sign-off",
          summary: "Approval that has to be chased or interpreted adds a round nobody planned.",
          icon: "approval",
          body: [
            "When approval arrives as a supportive reply rather than a clear decision, work that seemed finished comes back. Ambiguous sign-off is where rounds quietly reopen.",
            ["An ", { text: "approval workflow", page: 67 }, " lets teams request review, make changes and mark assets as approved, and ", { text: "review status", page: 76 }, " gives a clear indication of whether an asset still needs attention or has completed the approval process."],
          ],
        },
        {
          heading: "Repeated rounds that are not about coordination",
          summary: "Contextual collaboration reduces coordination, not unclear briefs or conflicting opinions.",
          icon: "flag",
          body: [
            "If reviewers disagree, or the brief left too much open, rounds will still repeat however well the feedback is organised. Keep those causes apart when judging collaboration efficiency, so the tools are neither blamed nor credited for them.",
            ["Clarity about who decides matters too, and ", { text: "creative asset governance", page: 114 }, " defines who can upload, edit, approve, download and manage assets."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 67 }, { kind: "pdf", page: 76 }, { kind: "pdf", page: 114 }, EXPLAINS],
    },
    {
      kind: "checklist",
      id: "weigh",
      eyebrow: "What to weigh",
      heading: "What to weigh when valuing collaboration efficiency",
      variant: "chips",
      items: [
        "Channels feedback arrives through today",
        "Reviewers involved in a typical round",
        "Questions asked only to establish context",
        "Notes collected from several places",
        "Sign-off that has to be chased",
        "Reviewers working in different places",
      ],
      sources: [{ kind: "pdf", page: 358 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about collaboration efficiency",
      items: [
        {
          question: "Does collaboration efficiency mean fewer people giving feedback?",
          answer: "No. It means each reviewer’s contribution costs less to deliver and to act on. Who genuinely needs to review is a separate question, although with less coordination to absorb it, an oversized review group becomes easier to notice.",
        },
        {
          question: "Who benefits most from collaboration efficiency?",
          answer: "Usually the person who acts on the feedback, such as the designer, editor or producer, because they carry most of the reconciling. Reviewers gain too, since a note written beside the work needs less explanation than one written somewhere else.",
        },
        {
          question: "Can comment activity extend collaboration efficiency into other systems?",
          answer: [
            "Where a team has development support, ",
            { text: "comment-related events", page: 266 },
            " can support custom collaboration workflows, such as connecting asset discussions to systems a production already relies on.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 266 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on reviewing work efficiently",
      variant: "compact",
      pages: [73, 61, 62, 67, 77, 87],
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
