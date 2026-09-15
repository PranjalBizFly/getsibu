/**
 * 87 · Collaborative Asset Review — /features/collaborative-asset-review
 *
 * Angle (cluster: team-collaboration): distributed teams reviewing creative material without being in the same physical
 * location — what the review room provided and how a distributed review provides it. Remote Creative Collaboration (88)
 * owns remote working beyond review; Creative Review (69) owns the central review location.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how distributed teams run creative reviews; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 87,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Collaboration",
      lede: "How distributed teams can review creative material in GetSibu without sharing a physical location, which review patterns suit them, and the habits that keep a review moving when nobody is in the same room.",
      visual: { diagram: "timeline-review", focus: "comments" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 87 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Reviewing together without sitting together",
      body: [
        "Collaborative review in GetSibu helps distributed teams review creative material without requiring everyone to be in the same physical location. Reviewers take part from wherever they work.",
        "The traditional review happened in a room: the work on one screen, the people who mattered around it, a discussion and a decision before anyone left. It had genuine strengths, such as a shared view of the work, immediate clarification and a clear ending. It also had limits. It depended on diaries aligning, it favoured whoever spoke most confidently, and its conclusions lived in the memories of the people present.",
        [
          "Reviewing from different places depends on reaching the work quickly wherever each reviewer is. ",
          { text: "Streaming previews", page: 147 },
          " help people inspect large media files without waiting for complete downloads, and ",
          { text: "CDN-based delivery", page: 314 },
          " can support teams working across different geographical regions.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Review without a shared room", "The same asset for every reviewer", "On a call or in reviewers’ own time", "Notes that outlast any meeting", "Reviewers across regions"],
      },
      highlight: {
        heading: "In practice",
        body: "A brand reviewer in one time zone leaves notes on a campaign film at the end of their working day, and the editor in another picks them up at the start of the next.",
        tags: ["Brand reviewers", "Editors", "Regional teams"],
      },
      glance: {
        heading: "Collaborative review in brief",
        facts: [
          { label: "Area", value: "Collaboration" },
          { label: "For", value: "Distributed teams" },
          { label: "Removes", value: "The need to share a physical location" },
          { label: "Review space", value: "Creative Review", page: 69 },
        ],
        actions: [{ kind: "route", path: "/features/collaboration", label: "More in Collaboration" }]
      },
      sources: [{ kind: "pdf", page: 87 }, { kind: "pdf", page: 147 }, { kind: "pdf", page: 314 }, { kind: "pdf", page: 69 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "room-or-distributed",
      eyebrow: "What changes",
      heading: "What the review room gave, and how a distributed review provides it",
      columns: ["In the review room", "Distributed review in GetSibu"],
      emphasis: 1,
      rows: [
        ["Seeing the work", "One screen that everyone watches", "Each reviewer opens the same asset"],
        ["Pointing at a problem", "A finger on the screen", "A comment at that point on the timeline"],
        ["Talking it through", "The conversation around the table", "Threaded replies on each issue"],
        ["Bringing in an absent expert", "A phone call during the meeting", "A mention in the asset’s discussion"],
        ["Reaching a decision", "A nod before everyone leaves", "The asset marked as approved"],
        ["People who could not attend", "A summary sent afterwards, if at all", "The comments themselves, left on the asset"],
      ],
      sources: [{ kind: "pdf", page: 87 }, { kind: "pdf", page: 64 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 86 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 62 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "patterns",
      eyebrow: "Review patterns",
      heading: "Three ways distributed teams run a review",
      tabs: [
        {
          label: "Own time",
          heading: "Everyone reviews when their day allows",
          icon: "clock",
          body: [
            "Reviewers watch and comment in their own time within an agreed period. The pattern suits teams across time zones and busy stakeholders, and it tends to produce considered notes rather than first reactions.",
            "The cost is pace, since a question asked in one time zone may wait overnight for its answer. Asking complete questions, and naming who should answer them, keeps that wait to a single round.",
          ],
          points: ["Considered notes over first reactions", "Complete questions to avoid extra rounds"],
        },
        {
          label: "Call and comments",
          heading: "Talk on a call, record on the asset",
          icon: "message",
          body: [
            "Some decisions still benefit from conversation. A video call with every participant looking at the same asset keeps the discussion focused, while one person writes the conclusions onto the asset as comments during or straight after the call.",
            "The call supplies the momentum of a meeting; the comments make sure its outcome outlives it.",
          ],
          points: ["Conversation where it helps", "Conclusions written where the work is"],
        },
        {
          label: "Notes, then a call",
          heading: "Written notes first, a short call for disagreements",
          icon: "thread",
          body: [
            "Reviewers leave their comments on the asset in their own time, and a short call follows only for the points where they want different things. Everything already agreed stays in writing and is not discussed a second time.",
            "The threads where views conflict become the agenda, so the call is short and ends when those points are settled.",
          ],
          points: ["Call time spent on disagreements", "Agreed points left in writing"],
        },
      ],
      sources: [{ kind: "pdf", page: 87 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 63 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "keeping-it-moving",
      eyebrow: "Good practice",
      heading: "Keeping a distributed review moving",
      items: [
        {
          heading: "Agree the review period in advance",
          summary: "Reviewers in different places need to know when their input still counts.",
          icon: "calendar",
          body: [
            "Without a room and a meeting time, a review has no natural start or finish. Telling reviewers when the period opens and when comments will be acted on lets each of them plan their contribution, and lets the creator start revising without worrying that notes are still on the way.",
          ],
        },
        {
          heading: "Write for a reader hours away",
          summary: "A note that needs a follow-up question can cost a day when reviewers are far apart.",
          icon: "text",
          body: [
            "Give each comment everything the reader needs to act without asking: what you noticed, what you would like changed, why, and whether it is essential or a preference. Brevity that works across a desk becomes a delay across time zones.",
          ],
        },
        {
          heading: "Give quieter reviewers an equal voice",
          summary: "Written review takes away the advantage of the most confident speaker.",
          icon: "users",
          body: [
            "In a room, junior colleagues and people working in a second language often hold back. A distributed review gives everyone the same space to leave considered notes. Leads get the benefit only if they read every comment before any call, rather than letting the loudest note set the agenda.",
          ],
        },
        {
          heading: "Confirm access before the review opens",
          summary: "Access problems tend to surface at the worst moment in a distributed review.",
          icon: "lock",
          body: [
            [
              "A reviewer who cannot open the asset on the day loses their slot in the review. Because ",
              { text: "new folders can remain private until access is explicitly granted", page: 154 },
              ", it is worth confirming that everyone expected to review can reach the work before the period begins.",
            ],
          ],
        },
        {
          heading: "Close the review clearly",
          summary: "Without a room to leave, reviews can drift on.",
          icon: "flag",
          body: [
            ["Announce when a review has finished and what happens next. Afterwards, ", { text: "review status", page: 76 }, " shows which assets still need attention and which have completed the approval process, so latecomers can tell whether their notes can still be acted on."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 87 }, { kind: "pdf", page: 154 }, { kind: "pdf", page: 76 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about collaborative asset review",
      items: [
        {
          question: "How many reviewers should a distributed review include?",
          answer: "As few as the decision needs. Each extra reviewer adds notes that someone has to reconcile, and in a written review nobody can see the others nodding along, so the same point is often made several times over.",
        },
        {
          question: "How is collaborative asset review different from remote creative collaboration?",
          answer: [
            "Collaborative review concerns reviewing creative material across locations. ",
            { text: "Remote creative collaboration", page: 88 },
            " is broader: remote teams working around the same assets through comments, mentions, approvals and shared searches, whether or not a review is taking place.",
          ],
        },
        {
          question: "How long should a distributed review period last?",
          answer: "Long enough for every reviewer to have a full working day in their own time zone, and short enough that the work keeps its momentum. Pieces that need several specialist checks deserve longer than routine assets.",
        },
        {
          question: "What happens to the notes from a distributed review once it has finished?",
          answer: ["They remain on the asset, and ", { text: "asset discussion history", page: 75 }, " helps the team understand later how that feedback evolved, including for colleagues who were not part of the review."],
        },
      ],
      sources: [{ kind: "pdf", page: 87 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 88 }, { kind: "pdf", page: 75 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on reviewing across locations",
      variant: "compact",
      pages: [88, 69, 64, 147, 314, 67],
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
