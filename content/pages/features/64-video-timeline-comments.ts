/**
 * 64 · Video Timeline Comments — /features/video-timeline-comments
 *
 * Angle (clusters: video-review): comments attached to points on the timeline. Frame-Accurate Review
 * (65) owns the practice of discussing exact moments; Asset Comments (62) owns comments in general.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of video review practice; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 64,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Collaboration",
      lede: "Attach feedback to the exact point in a video it is about, so editors and reviewers discuss the moment itself instead of trying to describe where it is.",
      visual: { diagram: "timeline-review", focus: "timeline" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 64 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Feedback that sits at the moment it refers to",
      body: [
        "Video comments in GetSibu can be attached to specific points on the timeline. A note about an abrupt transition sits where the transition happens, which gives editors and reviewers a precise location for the feedback.",
        "Written feedback on video is hard to act on because the thing being discussed only exists for a moment. Phrases such as “near the end” or “the second wide shot” are read differently by each person, and an editor has to find the moment before they can even start on the change.",
        [
          "Because the comment belongs to the asset, it stays with the video rather than in an email or a chat channel — ",
          { text: "feedback remains connected to the work", page: 73 },
          ". When one note needs more than a single reply, it can grow into a ",
          { text: "threaded discussion", page: 63 },
          " about that one issue.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Comments at points on the timeline", "Feedback kept with the video asset", "A thread for each issue", "Mentions for the right reviewer", "Review status beside the feedback"],
      },
      highlight: {
        heading: "In practice",
        body: "A reviewer watching a cut leaves each note where it applies. The editor sees exactly which moment every note is about, instead of reconciling a separate list of approximate descriptions.",
        tags: ["Editors", "Reviewers", "Video"],
      },
      glance: {
        heading: "Where timeline comments fit",
        facts: [
          { label: "Area", value: "Collaboration" },
          { label: "Works on", value: "Video assets" },
          { label: "Builds on", value: "Asset Comments", page: 62 },
          { label: "Supports", value: "Frame-Accurate Review", page: 65 },
        ],
        actions: [{ kind: "route", path: "/features/collaboration", label: "More in Collaboration" }]
      },
      sources: [{ kind: "pdf", page: 64 }, { kind: "pdf", page: 73 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 66 }, { kind: "pdf", page: 76 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "review-steps",
      eyebrow: "Step by step",
      heading: "How a timeline comment moves a review forward",
      intro: "From the first viewing to a recorded decision, the feedback stays on the video it is about.",
      steps: [
        { heading: "Watch the cut", body: "Streaming previews let the reviewer inspect the video in the library without waiting for a complete download.", icon: "video", page: 147 },
        { heading: "Comment at the point", body: "Wherever something needs attention, the reviewer attaches a comment to that point on the timeline.", icon: "message" },
        { heading: "Bring in the editor", body: "A mention brings the right collaborator into the discussion, with autocomplete that is aware of who can see the folder.", icon: "mention", page: 66 },
        { heading: "Talk it through", body: "Replies stay grouped under the original comment, so a question about pacing never gets mixed up with a note about colour.", icon: "thread", page: 63 },
        { heading: "Record the decision", body: "After the changes, the asset moves through approval and its review status shows whether it is approved or still requires changes.", icon: "approval", page: 68 },
      ],
      sources: [{ kind: "pdf", page: 147 }, { kind: "pdf", page: 64 }, { kind: "pdf", page: 66 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 68 }, { kind: "pdf", page: 76 }],
    },
    {
      kind: "tabs",
      id: "roles",
      eyebrow: "Who it helps",
      heading: "What changes for each person in a video review",
      tabs: [
        {
          label: "Reviewers",
          heading: "Point at the problem instead of describing it",
          icon: "eye",
          body: [
            "A reviewer no longer has to write a description that somebody else must decode. The comment is the location: it sits at the point in the video where the issue appears.",
            "That makes it natural to leave several short notes rather than one long message, because each note carries its own place in the video.",
          ],
          points: ["No approximate descriptions to interpret", "One note per issue, each at its own point"],
        },
        {
          label: "Editors",
          heading: "Respond where the change belongs",
          icon: "film",
          body: [
            "For an editor, the value is precision. Each comment identifies where a change is needed, which removes the back-and-forth of confirming which shot a reviewer meant.",
            "If a note needs clarifying, the editor replies in its thread, so the answer sits next to the question that prompted it.",
          ],
          points: ["Feedback located before work starts", "Clarifications kept beside the original note"],
          link: { page: 65, label: "Frame-Accurate Review" },
        },
        {
          label: "Producers",
          heading: "Follow the review without chasing messages",
          icon: "users",
          body: [
            "Producers and project leads get feedback that lives on the asset rather than spread across email, chat and project-management systems.",
            "Discussion history shows how the feedback evolved, which helps when a creative decision is revisited later in the project.",
          ],
          points: ["One place to see what reviewers asked for", "A history of how each decision was reached"],
          link: { page: 75, label: "Asset Discussion History" },
        },
      ],
      sources: [{ kind: "pdf", page: 64 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 73 }, { kind: "pdf", page: 75 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A product film reviewed without timestamps in an inbox",
      team: "A video team",
      situation: "A video team is finishing a product film for a campaign launch. The editor works in one office; reviewers from marketing and brand are elsewhere.",
      steps: [
        { heading: "The editor shares the new cut", body: ["The cut replaces the previous one in place, and earlier cuts stay in the ", { text: "version history", page: 97 }, " of the same asset."] },
        { heading: "Reviewers comment where they are", body: ["Each reviewer attaches notes to the points on the timeline where they see an issue — ", { text: "nobody needs to be in the same room", page: 87 }, "."] },
        { heading: "Open questions get answered in threads", body: "Where a note is unclear, the editor replies under it and mentions the reviewer, who answers in the same thread." },
        { heading: "The film goes to approval", body: ["Once the changes are made, the team requests review and the ", { text: "approval record", page: 68 }, " shows whether the film is approved or needs more work."] },
      ],
      outcome: "The team ends the review with its feedback, decisions and versions attached to one video asset, rather than a folder of exported files and a separate trail of messages.",
      link: { page: 211, label: "GetSibu for Production Studios" },
      sources: [{ kind: "pdf", page: 64 }, { kind: "pdf", page: 97 }, { kind: "pdf", page: 87 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 66 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 68 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about video timeline comments",
      items: [
        {
          question: "What is a video timeline comment?",
          answer: "It is a comment attached to a specific point on a video's timeline rather than to the video as a whole, so the feedback carries its own location.",
        },
        {
          question: "How do timeline comments relate to frame-accurate review?",
          answer: [
            "Timeline comments are how the feedback is attached. ",
            { text: "Frame-accurate review", page: 65 },
            " is the practice they make possible: discussing specific moments in a video instead of describing approximate locations through messages.",
          ],
        },
        {
          question: "Can a comment on the timeline become a longer discussion?",
          answer: ["Yes. Replies form a ", { text: "threaded discussion", page: 63 }, " under the comment, which keeps the conversation organised around that one issue."],
        },
        {
          question: "Who can I mention in a video comment?",
          answer: ["You can ", { text: "mention teammates", page: 66 }, " in asset discussions. Folder-aware autocomplete helps make sure the people you mention have appropriate visibility of the asset."],
        },
        {
          question: "Does the feedback stay available after the video is approved?",
          answer: [
            { text: "Asset discussion history", page: 75 },
            " lets teams understand how feedback evolved over time, and ",
            { text: "approval history", page: 77 },
            " keeps a record of the review activity that led to the decision.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 64 }, { kind: "pdf", page: 385 }, { kind: "pdf", page: 65 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 66 }, { kind: "pdf", page: 75 }, { kind: "pdf", page: 77 }],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on reviewing video",
      variant: "compact",
      pages: [65, 63, 66, 68, 385],
      sources: [{ kind: "editorial", note: "Links to the pages cited on this page." }],
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
