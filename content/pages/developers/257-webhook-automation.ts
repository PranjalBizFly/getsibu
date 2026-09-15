/**
 * 257 · Webhook Automation — /developers/webhook-automation
 *
 * Angle (cluster: webhooks, workflow-automation): automation — activity in the library (assets, comments,
 * approvals, other supported events) triggering downstream workflows in other systems, and how to design those
 * automations so they stay dependable. Webhooks (252) owns how a delivery works; Webhook Events (268) the event
 * catalogue; Developer Automation (278) APIs and webhooks together. No event names or event list, and no signing
 * or retry behaviour claimed for GetSibu.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of event-driven automation in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 257,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "API & Developers",
      lede: "How activity in a GetSibu library can set work in motion in other systems, which kinds of automation suit assets, comments and approvals, and how to keep those automations dependable.",
      visual: { diagram: "api-flow", focus: "webhooks" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 257 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Library activity that starts work somewhere else",
      body: [
        "In GetSibu, webhook events can trigger downstream workflows when assets, comments, approvals or other supported events occur. Something that happens in the library becomes the starting signal for a process that runs in another system.",
        "Much of the friction in creative operations sits in hand-offs. A cut is approved and someone has to tell the delivery team; a reviewer leaves a note while the project tracker still shows the task as waiting; new material lands and nobody starts the checks it needs. Each hand-off depends on a person noticing and remembering, and automation takes that watching off their hands.",
        [
          "Inside the library, GetSibu supports ",
          { text: "the movement of assets", page: 80 },
          " from upload through organisation, review and approval to final use. Webhook automation lets the steps that follow begin in other systems, and the mechanics of a single delivery are explained under ",
          { text: "Webhooks", page: 252 },
          ".",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Events as starting signals", "Downstream workflows in other systems", "Assets, comments and approvals", "Filtering to the events that matter", "People kept in the decisions", "Automations with named owners"],
      },
      glance: {
        heading: "Webhook automation in brief",
        facts: [
          { label: "Area", value: "API & Developers" },
          { label: "Triggered by", value: "Assets, comments, approvals and other supported events" },
          { label: "Mechanism", value: "Webhooks", page: 252 },
          { label: "Broader practice", value: "Developer Automation", page: 278 },
        ],
        actions: [{ kind: "route", path: "/developers", label: "More in Developers" }]
      },
      sources: [{ kind: "pdf", page: 257 }, { kind: "pdf", page: 80 }, { kind: "pdf", page: 278 }, EXPLAINS],
    },
    {
      kind: "workflow",
      id: "run",
      eyebrow: "How an automation runs",
      heading: "From activity in the library to finished work elsewhere",
      stages: [
        { label: "Activity takes place", body: "Something involving an asset, a comment or an approval happens in the library, which is the kind of activity automations are built around." },
        { label: "An event goes out", body: "A webhook event carries word of that activity from GetSibu to the service an organisation has set up to listen for it." },
        { label: "The receiver filters", body: "The listening service checks whether the event matters to a given automation and sets aside anything else, which keeps each automation narrowly focused." },
        { label: "Work starts downstream", body: "The relevant process begins in the other system: a task moves forward, a record is updated, a delivery is prepared or a person is brought in." },
        { label: "The result is visible", body: "The outcome is recorded where people will look for it, so the team can see that the automation ran instead of assuming it did." },
      ],
      sources: [{ kind: "pdf", page: 257 }, { kind: "pdf", page: 388 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "triggers",
      eyebrow: "What sets automations off",
      heading: "Automations grouped by the activity that starts them",
      tabs: [
        {
          label: "Assets",
          heading: "When the material itself is involved",
          icon: "image",
          body: [
            "Automations that start from asset activity usually prepare something for the next stage: checks before material is used, a copy for the system that publishes it, or a record in a tracker that follows the work.",
            "Library activity is rarely even, quiet for days and then busy around a launch, so design the receiving service to absorb a surge calmly rather than treating every event as urgent.",
          ],
          points: ["Preparation for the next stage", "Built to cope with busy periods"],
        },
        {
          label: "Comments",
          heading: "When a conversation needs a response elsewhere",
          icon: "message",
          body: [
            [{ text: "Comment-related events", page: 266 }, " can support custom collaboration workflows, such as keeping a project tracker aware that feedback is waiting on an asset."],
            ["The feedback itself belongs ", { text: "with the asset", page: 73 }, " rather than scattered across email, chat and project-management systems. A good automation points people back to it instead of copying the conversation somewhere new."],
          ],
          points: ["Other systems made aware of feedback", "The conversation left on the asset"],
        },
        {
          label: "Approvals",
          heading: "When a decision should move work on",
          icon: "approval",
          body: [
            [{ text: "Approval events", page: 267 }, " can be incorporated into external production and workflow systems, which makes sign-off a natural trigger for whatever comes next."],
            ["In the library, ", { text: "asset approval", page: 68 }, " comes with status history, and that record of the decision stays in GetSibu even when an automation acts on it elsewhere."],
          ],
          points: ["Sign-off as a trigger", "The decision recorded in the library"],
        },
        {
          label: "Other events",
          heading: "Confirming what else can start an automation",
          icon: "webhook",
          body: [
            "An automation idea sometimes depends on a less obvious kind of activity, and assumptions carried over from other products are an unreliable guide to what a platform sends.",
            ["Confirm the details with ", { text: "API documentation", page: 273 }, ", which provides the information required to build integrations against the platform, before any design work starts."],
          ],
          points: ["More than one kind of trigger", "Details confirmed before design"],
        },
      ],
      sources: [{ kind: "pdf", page: 257 }, { kind: "pdf", page: 266 }, { kind: "pdf", page: 73 }, { kind: "pdf", page: 267 }, { kind: "pdf", page: 68 }, { kind: "pdf", page: 273 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "Approved campaign assets reach the web team without a chaser",
      team: "A marketing team",
      situation: "A marketing team approves campaign assets in GetSibu. The web team, which publishes them, works from its own task board and often hears about approvals only when someone remembers to send a message.",
      steps: [
        { heading: "The hand-off is mapped", body: "The team writes down what should happen after approval: the web team needs a task pointing to the approved assets, and nothing more." },
        { heading: "Developers set up a listener", body: "The organisation’s developers build a small service that receives webhook events and passes on only the approvals the web team cares about." },
        { heading: "Approval opens the task", body: "When the brand lead approves a banner set, the service adds a task to the web team’s board that points to those assets." },
        { heading: "Questions stay on the asset", body: ["If the web team spots a problem, it leaves ", { text: "a comment on the asset", page: 62 }, " in GetSibu, keeping the feedback attached to the work instead of in a chat thread."] },
        { heading: "The automation has an owner", body: "One developer is named as the automation’s owner, so the marketing team knows whom to ask if a task fails to appear." },
      ],
      outcome: "Approved assets reach the people who publish them without anyone chasing, and the approval itself stays on record in the library.",
      link: { page: 213, label: "GetSibu for Marketing Teams" },
      sources: [{ kind: "pdf", page: 257 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 213 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about webhook automation",
      items: [
        {
          question: "Should the approval itself be automated with webhook events?",
          answer: ["Automate what follows a decision, not the decision. ", { text: "Approval history", page: 77 }, " provides a record of review activity that supports accountability, and that record only means something if a person made the call."],
        },
        {
          question: "How can a team stop webhook automations from triggering each other endlessly?",
          answer: "Watch for automations that change the library in response to an event, because the change can produce a new event. Filter out activity the automation caused itself, and test each new automation alongside the ones already running.",
        },
        {
          question: "Who should design a webhook automation?",
          answer: "The people who own the workflow decide what should happen and when, and developers build the service that carries it out. Agreeing the process before anything is built stops an automation from encoding steps nobody signed off.",
        },
        {
          question: "How does webhook automation relate to developer automation?",
          answer: ["Webhook automation starts work when something happens in the library. ", { text: "Developer automation", page: 278 }, " is the wider practice of using APIs and webhooks together to automate repetitive asset management workflows."],
        },
      ],
      sources: [{ kind: "pdf", page: 77 }, { kind: "pdf", page: 278 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on automating with GetSibu",
      variant: "compact",
      pages: [252, 278, 267, 266, 68, 273],
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
