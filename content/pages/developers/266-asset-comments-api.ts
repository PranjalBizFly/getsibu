/**
 * 266 · Asset Comments API — /developers/asset-comments-api
 *
 * Angle (cluster api-endpoints): comment-related events supporting custom collaboration workflows — the kinds of
 * workflow feedback activity can inform, the forms of feedback in the library such workflows must respect, and
 * principles for building on it. No payloads, methods, event names or notification claims.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of feedback-driven workflow design in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 266,
  metaDescription: "How comment-related events in GetSibu can support custom collaboration workflows, which workflows they suit, and how to act on feedback beside the work.",
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "API & Developers",
      lede: "How comment-related activity in GetSibu can support collaboration workflows an organisation designs for itself, which kinds of workflow it suits, and how to build on feedback without pulling the conversation away from the work.",
      visual: { diagram: "api-flow", focus: "comments" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 266 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Feedback as a signal for the systems that plan the work",
      body: [
        "Comment-related events can support custom collaboration workflows. When feedback is left on an asset, that activity can matter well beyond the library: to a production schedule, to an account team’s records or to the planning tool a department runs.",
        "Feedback is one of the clearest signs in creative work that something has to happen next. A note on a draft usually means a revision, a question means somebody is waiting, and a long discussion on one asset can expose a brief that was never clear. Organisations that plan work in other systems often miss those signs, because they sit with the asset rather than in the plan.",
        [
          "GetSibu keeps ",
          { text: "feedback connected to the asset", page: 73 },
          " instead of scattering it across email, chat and project-management systems. A custom workflow serves people best when it respects that arrangement, helping other systems take feedback into account while ",
          { text: "communication stays close to the asset", page: 85 },
          " it concerns.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Comment-related events", "Custom collaboration workflows", "Feedback as a sign of next steps", "Discussion kept on the asset", "Only the activity a workflow needs"],
      },
      highlight: {
        heading: "In practice",
        body: "A producer plans the week’s revisions from the studio schedule, then reads and answers the notes themselves on the assets in GetSibu.",
        tags: ["Producers", "Agencies", "Developers"],
      },
      glance: {
        heading: "Comment events in brief",
        facts: [
          { label: "Area", value: "API & Developers" },
          { label: "Support", value: "Custom collaboration workflows" },
          { label: "Feedback lives in", value: "Asset Comments", page: 62 },
          { label: "Wider practice", value: "Webhook Automation", page: 257 },
        ],
        actions: [{ kind: "route", path: "/developers", label: "More in Developers" }]
      },
      sources: [{ kind: "pdf", page: 266 }, { kind: "pdf", page: 73 }, { kind: "pdf", page: 85 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 257 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "workflows",
      eyebrow: "What organisations build",
      heading: "Collaboration workflows that comment activity can inform",
      intro: "Examples an organisation might design around its own systems; check what each would need before planning it.",
      items: [
        { heading: "Revision planning", body: "A production schedule takes account of new feedback on a deliverable, so the next round of changes is planned instead of discovered late.", icon: "calendar", points: ["Feedback reflected in schedules", "Changes planned, not stumbled on"] },
        { heading: "Account oversight", body: "An account team’s records show that a client project’s assets are attracting discussion, helping managers see where attention is needed.", icon: "briefcase", points: ["Discussion visible to account leads", "Attention directed early"] },
        { heading: "Workload balance", body: "Leads see where feedback is gathering across a busy project, which shows where revision work is starting to pile up.", icon: "gauge", points: ["Pressure points made visible", "Work shared out sooner"] },
        { heading: "Queue routing", body: "Work prompted by feedback lands in the queue of the team that handles it, such as localisation or legal review, instead of waiting to be forwarded.", icon: "workflow", points: ["The right team sees it", "No manual forwarding"] },
      ],
      sources: [{ kind: "pdf", page: 266 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "feedback-forms",
      eyebrow: "Forms of feedback",
      heading: "What a custom workflow should respect about feedback in the library",
      tabs: [
        {
          label: "Asset comments",
          heading: "Feedback attached to the work itself",
          icon: "message",
          body: [
            ["Users can ", { text: "leave comments directly on assets", page: 62 }, ", so the creative work is always the reference point for the feedback about it."],
            "Any task created elsewhere should identify the asset concerned clearly enough that a person can go straight to the discussion.",
          ],
          points: ["The asset as reference point", "Tasks that lead back to it"],
        },
        {
          label: "Threads",
          heading: "Conversations organised by issue",
          icon: "thread",
          body: [
            ["", { text: "Threaded discussions", page: 63 }, " keep conversations organised around specific issues rather than one long stream of unrelated feedback."],
            "Where a workflow measures feedback at all, counting issues gives a truer picture of the effort involved than counting individual messages.",
          ],
          points: ["Issues, not individual replies", "A truer view of effort"],
        },
        {
          label: "Timeline notes",
          heading: "Feedback tied to a moment in a video",
          icon: "video",
          body: [
            ["On video, ", { text: "comments can be attached to specific points on the timeline", page: 64 }, ", so every note has an exact place in the footage."],
            "That precision belongs with the footage, so a schedule or task list elsewhere works best as a prompt to open the video rather than as a summary of the notes.",
          ],
          points: ["Precision kept in the library", "Editors sent back to the footage"],
        },
        {
          label: "Mentions",
          heading: "Named collaborators brought into a discussion",
          icon: "mention",
          body: [
            ["", { text: "Team mentions", page: 66 }, " let users bring teammates into asset discussions, and folder-aware autocomplete helps ensure those people have appropriate visibility."],
            "Mentions already involve the right person inside the library. A custom workflow adds most value where it links feedback to systems and teams that do not work in the library every day.",
          ],
          points: ["People involved within the library", "Workflows reach beyond it"],
        },
      ],
      sources: [{ kind: "pdf", page: 62 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 64 }, { kind: "pdf", page: 66 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "principles",
      eyebrow: "Considerations",
      heading: "Principles for building on comment activity",
      items: [
        {
          heading: "Handle comment text with care",
          summary: "Feedback on unreleased work can be sensitive.",
          icon: "shield",
          body: [
            "Comments may discuss unannounced products, disagreements with a client or a colleague’s work. Anything a workflow copies out of the library deserves the same care as the discussion itself, and the less another system holds, the less there is to protect.",
          ],
        },
        {
          heading: "Expect bursts during review",
          summary: "One review session can produce a great deal of feedback in a short time.",
          icon: "zap",
          body: [
            "Design the receiving system so that a single busy afternoon of review does not turn into a long list of separate tasks that nobody can prioritise.",
          ],
        },
        {
          heading: "Keep the history in one place",
          summary: "The account of how feedback developed belongs with the asset.",
          icon: "history",
          body: [
            ["", { text: "Asset discussion history", page: 75 }, " allows teams to understand how feedback evolved over time. Partial copies of discussions in other systems fragment that account, so link back to it instead of rebuilding it elsewhere."],
          ],
        },
        {
          heading: "Agree what the workflow must never do",
          summary: "Clear limits stop a helpful tool from becoming noisy or intrusive.",
          icon: "flag",
          body: [
            "Write down the actions the workflow will not take, such as contacting clients directly or changing a project’s status without a person agreeing. Limits are far easier to agree before launch than to impose after complaints.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 75 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about the asset comments API",
      items: [
        {
          question: "How can a team tell whether a custom collaboration workflow built on comment activity is helping?",
          answer: "Ask the people it serves whether plans now reflect feedback sooner, and whether anyone has stopped paying attention to what it produces. A workflow people ignore adds noise without adding help.",
        },
        {
          question: "How do comment-related events fit with webhook automation?",
          answer: ["Comment activity is one of the kinds of activity ", { text: "webhook automation", page: 257 }, " is concerned with, since webhook events can be used to trigger downstream workflows when comments and other supported events occur."],
        },
        {
          question: "Who should decide which comment activity a custom collaboration workflow responds to?",
          answer: "The people who run the review process, working with the developers who build the workflow. Reviewers and producers know which feedback changes plans; developers know what the workflow can reliably act on.",
        },
      ],
      sources: [{ kind: "pdf", page: 266 }, { kind: "pdf", page: 257 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on feedback and the GetSibu API",
      variant: "compact",
      pages: [62, 63, 75, 257, 267, 261],
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
