/**
 * 270 · Comment Added Webhook — /developers/comment-added-webhook (HELD draft; own claim: webhook-events)
 *
 * Angle (cluster: webhooks): the comment-added event — triggering external communication or workflow
 * automation when feedback is left on an asset, while the conversation itself stays with the work.
 * Asset Comments API (266) owns comment-related events for custom collaboration workflows; Webhook
 * Automation (257) owns downstream workflows in general. No event identifiers, payloads or timing.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of webhook practice and of how teams handle creative feedback; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 270,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "API & Developers",
      lede: "How feedback left on an asset can start communication or automation in other systems through a comment-added event, and how to design for it without drawing the conversation away from the work it concerns.",
      visual: { diagram: "api-flow", focus: "comments" },
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 270 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "When feedback on an asset needs to reach beyond the library",
      body: [
        "A comment-added event can be used to trigger external communication or workflow automation. Leaving a comment is a small act with consequences elsewhere: someone may need to know, a task may need to change state, or a process may be waiting for feedback before it can move on.",
        "Comments are the most conversational activity in a creative library. They come in clusters during a review, they are often brief, and they can include frank remarks about unreleased work. That makes them useful signals but awkward cargo: the fact that feedback exists travels well, while the words themselves are usually best read beside the asset they describe.",
        [
          "In GetSibu, users can ",
          { text: "leave comments directly on assets", page: 62 },
          ", and video comments can be attached to ",
          { text: "specific points on the timeline", page: 64 },
          ". For developers designing around that feedback, ",
          { text: "comment-related events", page: 266 },
          " can support custom collaboration workflows.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Feedback as a trigger", "External communication", "Workflow automation", "Pointing back to the asset", "Frank remarks handled with care"],
      },
      highlight: {
        heading: "In practice",
        body: "An account lead who follows a campaign from the project system hears that brand feedback has arrived, then reads it on the asset instead of in a forwarded copy.",
        tags: ["Account leads", "Producers", "Developers"],
      },
      glance: {
        heading: "The comment-added event in brief",
        facts: [
          { label: "Area", value: "API & Developers" },
          { label: "Signals", value: "A new comment on an asset" },
          { label: "Where feedback lives", value: "Asset Comments", page: 62 },
          { label: "Collaboration workflows", value: "Asset Comments API", page: 266 },
        ],
      },
      sources: [{ kind: "pdf", page: 270 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 64 }, { kind: "pdf", page: 266 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "copy-or-point",
      eyebrow: "Two designs",
      heading: "Copying a comment elsewhere compared with pointing back to it",
      intro: "An integration built on comments can take either approach, and the choice shapes where the conversation continues.",
      columns: ["Copy the comment text out", "Signal that feedback is waiting"],
      emphasis: 1,
      rows: [
        ["Where the discussion continues", "Often splits between two places", "In the thread on the asset where it began"],
        ["Context for the reader", "Words without the work they refer to", "The note read beside the work itself"],
        ["Sensitive remarks", "Spread wherever the copy travels", "Kept within the library’s permissions"],
        ["Replies", "Written where the copy happened to land", "Grouped under the original comment"],
        ["Best suited to", "Audiences who cannot open the library", "Recipients who can reach the asset"],
      ],
      sources: [{ kind: "pdf", page: 63 }, { kind: "pdf", page: 151 }, { kind: "pdf", page: 73 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "responses",
      eyebrow: "Uses",
      heading: "Three ways to respond when a comment is added",
      tabs: [
        {
          label: "Communication",
          heading: "Let the right people know feedback exists",
          icon: "message",
          body: [
            "The most direct use is telling someone outside the library that a comment is waiting: a producer who plans from a tracker, an account lead following a project, a group watching a campaign. The message says that feedback has arrived and where, and the reading happens on the asset.",
            ["Inside the library, ", { text: "team mentions", page: 66 }, " already bring a colleague into an asset discussion. External communication is for the audiences who follow the work from somewhere else."],
          ],
          points: ["A short signal, not the full wording", "Aimed at people who will act"],
        },
        {
          label: "Automation",
          heading: "Move a process on when feedback arrives",
          icon: "workflow",
          body: [
            "Workflow automation treats a new comment as a change of state. A task moves from “in review” to “feedback received”, a record notes that a reviewer has responded, or a timer that measures how long feedback takes comes to a stop.",
            "Keep the rule simple and based on the fact that a comment exists. Automations that try to interpret what a comment says tend to misread tone, shorthand and jokes.",
          ],
          points: ["Comments as changes of state", "No guessing at meaning"],
        },
        {
          label: "Record keeping",
          heading: "Keep project records aware of discussion",
          icon: "audit",
          body: [
            "Some organisations want a project system to show that discussion took place on each deliverable, for reporting or later reference. A count or a dated entry usually serves that purpose better than a copy of every remark.",
            ["GetSibu keeps its own account: ", { text: "audit logs", page: 326 }, " provide a historical record of important actions including permissions, comments, asset changes and other platform events."],
          ],
          points: ["Evidence that discussion happened", "The library’s own record left in place"],
        },
      ],
      sources: [{ kind: "pdf", page: 66 }, { kind: "pdf", page: 326 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "Brand feedback that reaches designers through their job board",
      team: "A retail brand’s in-house studio",
      situation: "A retail brand’s in-house studio keeps campaign artwork in GetSibu, where brand and legal reviewers leave comments. Designers plan their day from a job board in a separate project system and often find feedback late.",
      steps: [
        { heading: "The studio agrees one rule", body: "The studio lead decides that a new comment on artwork should move the matching job to “feedback waiting”, and that the comment itself stays in GetSibu." },
        { heading: "A receiver is built", body: "Developers build a service that receives comment-added events and updates the job linked to each piece of artwork, ignoring assets that belong to no active job." },
        { heading: "Designers read feedback in context", body: ["A designer sees the change on the board, opens the artwork in GetSibu and answers the reviewer in a ", { text: "threaded discussion", page: 63 }, " under the original note."] },
        { heading: "Approval stays a separate decision", body: ["When the artwork is ready, the brand reviewer marks it approved through the ", { text: "creative approval workflow", page: 67 }, ", and the studio lead closes the job."] },
      ],
      outcome: "Designers learn about feedback from the board they already use, and every note is still read and answered on the artwork it concerns.",
      link: { page: 231, label: "GetSibu for Retail Brands" },
      sources: [{ kind: "pdf", page: 270 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 231 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about the comment-added webhook",
      items: [
        {
          question: "Should every comment-added event produce a message for someone?",
          answer: "Rarely. A busy review produces many comments in a short time, and a message for each one soon goes unread. Filter to the assets and people that matter, or combine several comments into a single update.",
        },
        {
          question: "Can a comment-added event be taken as a sign that an asset is approved?",
          answer: ["No. A comment records feedback, even when it sounds positive. Approval is a separate step, and ", { text: "asset approval", page: 68 }, " comes with status history that shows whether content is awaiting review, approved or requires changes."],
        },
        {
          question: "Does a comment-added event say where on a video timeline the comment sits?",
          answer: ["Do not assume either way. Check ", { text: "API documentation", page: 273 }, " for what an integration can learn about a comment, and point recipients back to the video so they see the note in place."],
        },
        {
          question: "Who should receive external messages about comments on restricted assets?",
          answer: ["Only people who could already open the asset in the library. ", { text: "Secure creative collaboration", page: 180 }, " combines collaboration with permissions, and a message sent elsewhere should not undo that control."],
        },
      ],
      sources: [{ kind: "pdf", page: 68 }, { kind: "pdf", page: 273 }, { kind: "pdf", page: 180 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on acting on feedback",
      variant: "compact",
      pages: [62, 266, 64, 63, 326, 180],
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
