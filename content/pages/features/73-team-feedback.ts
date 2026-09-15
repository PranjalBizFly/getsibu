/**
 * 73 · Team Feedback — /features/team-feedback
 *
 * Angle (cluster: comments-feedback, problem framing): feedback that stays connected to the asset instead of
 * scattering across email, chat and project-management systems — where it leaks and how a team brings it back.
 * Creative Team Collaboration (61) owns collaboration in the library, Asset Comments (62) the single comment,
 * Creative Feedback Management (74) feedback as a workflow, Creative Team Communication (85) context clarity.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how feedback on creative work scatters and how teams consolidate it; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 73,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Collaboration",
      lede: "Why feedback on creative work ends up spread across tools, where it most often gets lost, and how a team can bring it back onto the assets it concerns.",
      visual: { diagram: "timeline-review", focus: "comments" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 73 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Feedback that stays with the work instead of scattering",
      body: [
        "In GetSibu, feedback stays connected to the asset rather than being scattered across email, chat and project-management systems. What someone thinks about a piece of work is recorded on that piece of work.",
        "Scattering is rarely a choice; it happens because every tool invites a reply. A reviewer answers the email the file arrived in, a colleague adds a thought in the team chat, a manager leaves a note on the project task and someone else mentions a change in a meeting. Each channel makes sense on its own. Together they hand the person doing the work several partial lists to reconcile, and no way of knowing whether any of them is complete.",
        [
          "Connected feedback begins with ",
          { text: "comments left directly on assets", page: 62 },
          ". With the note and the file side by side, nobody has to work out which attachment a message meant, and ",
          { text: "contextual comments and approvals", page: 358 },
          " reduce the need to carry asset-specific feedback between disconnected tools.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Feedback kept on the asset", "Fewer channels to reconcile", "No guessing which file was meant", "Feedback that can be found again", "One record for reviewers anywhere"],
      },
      highlight: {
        heading: "In practice",
        body: "Rather than forwarding a chat message to the designer, a product manager writes the correction on the image it concerns, where the designer is already working.",
        tags: ["Designers", "Product managers", "Project leads"],
      },
      glance: {
        heading: "Where team feedback fits",
        facts: [
          { label: "Area", value: "Collaboration" },
          { label: "Replaces", value: "Feedback spread over email, chat and trackers" },
          { label: "Organised as", value: "Creative Feedback Management", page: 74 },
          { label: "Looked back on", value: "Asset Discussion History", page: 75 },
        ],
        actions: [{ kind: "route", path: "/features/collaboration", label: "More in Collaboration" }]
      },
      sources: [{ kind: "pdf", page: 73 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 358 }, { kind: "pdf", page: 74 }, { kind: "pdf", page: 75 }, EXPLAINS],
    },
    {
      kind: "before-after",
      id: "scattered-or-connected",
      eyebrow: "The difference",
      heading: "What changes when feedback stops scattering",
      beforeLabel: "Scattered across tools",
      afterLabel: "Connected to the asset",
      before: ["Notes spread over email, chat and task comments", "Attachments that may already be out of date", "The creator compiling feedback from several places", "Older feedback lost when conversations are archived", "Newcomers missing what was said before they joined"],
      after: ["Feedback written on the asset it concerns", "The note kept beside the work itself", "One place to read what reviewers asked for", "Comments included in the asset’s searchable information", "Discussion history there for whoever picks the work up"],
      sources: [{ kind: "pdf", page: 73 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 75 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "leaks",
      eyebrow: "Common leaks",
      heading: "Where feedback usually gets lost",
      items: [
        {
          heading: "Email",
          summary: "Replies branch, attachments age and people drop off the conversation.",
          icon: "message",
          body: [
            "Email feedback splits as soon as someone replies to an older message or forwards it to a colleague. Attachments are frozen copies, so a note may describe a version that has since been replaced.",
            "With the file in the library and the feedback on the asset, the conversation is attached to the work itself rather than to an emailed copy of it.",
          ],
        },
        {
          heading: "Chat channels",
          summary: "Quick reactions scroll out of sight before anyone acts on them.",
          icon: "thread",
          body: [
            "Chat suits fast questions and coordination, which is precisely why feedback posted there vanishes. A useful remark about a layout can sink beneath an hour of unrelated conversation, and finding it later means remembering roughly when it was said.",
            ["Comments on assets, by contrast, are among the signals ", { text: "creative asset search", page: 11 }, " draws on."],
          ],
        },
        {
          heading: "Project-management tools",
          summary: "Tasks track work well but make a poor home for creative detail.",
          icon: "workflow",
          body: [
            "A task can record that a banner needs changes; it is far less suited to explaining which part of the banner and why. Creative detail written into tickets is separated from the file and often duplicated when tasks are copied or closed.",
            "A practical division is to let the project tool track who is doing what by when, while the substance of the feedback lives on the asset.",
          ],
        },
        {
          heading: "Meetings and calls",
          summary: "Spoken feedback is remembered differently by each person present.",
          icon: "users",
          body: [
            "Review meetings are valuable for discussion, but their conclusions only survive if someone writes them down. Recording the outcome on each asset discussed, straight after the meeting, turns a conversation into feedback the creator can act on.",
          ],
        },
        {
          heading: "Reviewers in different places",
          summary: "The further apart reviewers are, the more channels they tend to use.",
          icon: "globe",
          body: [
            ["Remote and hybrid teams reach for whatever tool is nearest. ", { text: "Remote creative collaboration", page: 88 }, " lets people in different locations work around the same assets through comments, mentions, approvals and shared searches, giving everyone one destination for feedback."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 73 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 88 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "bringing-it-back",
      eyebrow: "Step by step",
      heading: "Bringing a team’s feedback back onto its assets",
      intro: "Changing where feedback goes is a habit as much as a feature, so it helps to introduce it deliberately.",
      steps: [
        { heading: "Agree the rule", body: "Decide as a team that feedback about a specific file is written on that file, and name the kinds of conversation that can stay elsewhere.", icon: "flag" },
        { heading: "Send links, not attachments", body: "Point reviewers to the assets, or to a saved view shared through a URL, so nobody reviews an out-of-date copy.", icon: "collection", page: 79 },
        { heading: "Comment on the work", body: "Reviewers leave their notes on the asset itself, one issue at a time, so replies can gather into threads.", icon: "message" },
        { heading: "Bring people to the file", body: "When a colleague needs to weigh in, mention them in the asset discussion instead of forwarding the feedback to them.", icon: "mention", page: 86 },
        { heading: "Move stray feedback across", body: "If a note still arrives by email or chat, copy its substance onto the relevant asset so the record stays complete.", icon: "refresh" },
        { heading: "Record the outcome", body: "End each round with the approval workflow, so the decision is recorded on the same asset as the feedback that led to it.", icon: "approval", page: 67 },
      ],
      sources: [{ kind: "pdf", page: 79 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 86 }, { kind: "pdf", page: 66 }, { kind: "pdf", page: 67 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about team feedback",
      items: [
        {
          question: "How does connected feedback help someone who joins a project late?",
          answer: ["They can read what was asked for on each asset instead of requesting old emails, and ", { text: "asset discussion history", page: 75 }, " helps them understand how that feedback evolved."],
        },
        {
          question: "Is keeping feedback on assets worthwhile for a small team?",
          answer: "Yes. Even a handful of people lose feedback across channels; the difference is only how long it takes to notice. With fewer tools and habits to change, a small team may also find the switch simpler.",
        },
        {
          question: "Can feedback activity on assets be seen in analytics?",
          answer: ["Comments are part of what ", { text: "creative asset analytics", page: 181 }, " give visibility into, together with uploads, storage, contributors and tags."],
        },
      ],
      sources: [{ kind: "pdf", page: 73 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 75 }, { kind: "pdf", page: 181 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on keeping feedback connected",
      variant: "compact",
      pages: [62, 74, 75, 85, 88, 61],
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
