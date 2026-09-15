/**
 * 268 · Webhook Events — /developers/webhook-events (framed)
 *
 * Angle (cluster webhooks, primary): the webhook event as a unit of news — how it differs from current state, how
 * receiving software can respond in proportion, and how to choose which activity to follow. Framed by 257: the
 * page's own paragraph and the event catalogue (claim webhook-events) appear nowhere; no event names or lists.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of event-driven integration design in general; states no GetSibu capability beyond the cited pages and names no events." } as const;

const page: PageContent = {
  page: 268,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "API & Developers",
      lede: "A general guide to webhook events as pieces of news: how they differ from a reading of current state, what weight of response each deserves and how to choose the few worth following.",
      visual: { diagram: "api-flow", focus: "webhooks" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 257 }, { kind: "pdf", page: 388 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A single message about something that has just happened",
      body: [
        [
          "In event-driven integration, an event is a short message saying that something has happened. It is news about the past rather than an instruction or a full picture of how things now stand. For what GetSibu supports in this area, start with ",
          { text: "Webhook Automation", page: 257 },
          ".",
        ],
        [
          "It helps to keep three ideas apart. The event is the news; the webhook is the delivery mechanism that carries it, explained under ",
          { text: "Webhooks", page: 252 },
          "; and automation is whatever an organisation decides to do once the news arrives. Many design mistakes come from treating the arrival of news as though it were the finished piece of work.",
        ],
        "Events are easy to misread. A message saying that something changed does not say whether it has changed again since, so dependable integrations take a fresh look at the current state before acting on anything important.",
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["An event as a message about the past", "News kept apart from the work", "Responses in proportion", "Few kinds of event followed", "Support confirmed before design"],
      },
      highlight: {
        heading: "In practice",
        body: "A developer writes down, for each kind of event an integration might follow, the decision it would change. Anything that changes nothing stays off the list.",
        tags: ["Developers", "Integration design", "Planning"],
      },
      glance: {
        heading: "Webhook events in brief",
        facts: [
          { label: "Area", value: "API & Developers" },
          { label: "Put to work in", value: "Webhook Automation", page: 257 },
          { label: "Delivered by", value: "Webhooks", page: 252 },
          { label: "Offered alongside", value: "REST API", page: 253 },
        ],
        actions: [{ kind: "route", path: "/developers", label: "More in Developers" }]
      },
      sources: [{ kind: "pdf", page: 257 }, { kind: "pdf", page: 388 }, { kind: "pdf", page: 253 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "event-or-state",
      eyebrow: "Two kinds of information",
      heading: "An event compared with a reading of current state",
      intro: "Each answers a different question about the same change.",
      columns: ["A webhook event", "A reading of current state"],
      rows: [
        ["What it describes", "Something that happened", "How things stand now"],
        ["When it is accurate", "At the moment it was produced", "At the moment it was read"],
        ["When it arrives", "Soon after the change", "Whenever the software asks"],
        ["Its weakness", "Can arrive late or go astray", "Says nothing about what changed in between"],
        ["Best used for", "Knowing something needs attention", "Knowing exactly what to act on"],
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "tabs",
      id: "responses",
      eyebrow: "Responding in proportion",
      heading: "Four weights of response to the same news",
      tabs: [
        {
          label: "Inform people",
          heading: "Letting the right person know",
          icon: "megaphone",
          body: [
            "The lightest response is to tell someone. An entry in a team’s task list asks a person to take a look, without software deciding anything on their behalf.",
            "It suits news that calls for judgement, such as a change that may or may not alter a plan.",
          ],
          points: ["No decision taken by software", "Suits activity needing judgement"],
        },
        {
          label: "Update a record",
          heading: "Keeping another system’s picture current",
          icon: "database",
          body: [
            "A planning tool, catalogue or tracker changes one detail to match what happened in the system that sent the event.",
            "Keep updates of this kind small and easy to undo, so a mistaken message does little lasting harm.",
          ],
          points: ["Small, targeted changes", "Easy to put right"],
        },
        {
          label: "Start a job",
          heading: "Setting a piece of work in motion",
          icon: "zap",
          body: [
            "Heavier responses begin a process: preparing files for delivery, compiling a report or opening a task for another department.",
            "Because a job commits time and effort, it deserves the strictest rules about which events may start it.",
          ],
          points: ["Effort committed on arrival", "The strictest starting rules"],
        },
        {
          label: "Keep a log",
          heading: "Recording what was heard",
          icon: "audit",
          body: [
            "Some receiving systems simply note each message, building an account of activity they can use for troubleshooting.",
            "That account is a working aid for troubleshooting, never a substitute for the records the sending system keeps for itself.",
          ],
          points: ["Useful for troubleshooting", "The sender’s records stay authoritative"],
        },
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "accordion",
      id: "choosing",
      eyebrow: "Considerations",
      heading: "Choosing which activity an integration should follow",
      items: [
        {
          heading: "Start from a decision, not from what is on offer",
          summary: "A long menu of possibilities invites integrations that try to do too much.",
          icon: "compass",
          body: [
            "Begin with the decision or task the integration exists to support, then ask which activity changes it. Following activity simply because it can be followed adds traffic, testing and failure without adding value.",
          ],
        },
        {
          heading: "Give every response an owner",
          summary: "Someone should answer for what happens after each kind of activity.",
          icon: "user",
          body: [
            "When a response misbehaves, the first question is who can change it. An integration that follows several kinds of activity may need a different owner for each response it makes.",
          ],
        },
        {
          heading: "Test with realistic activity",
          summary: "Real use produces messages in patterns that tidy test data misses.",
          icon: "gauge",
          body: [
            "Bulk changes, busy working days and quiet weekends produce very different flows of messages. Try a new integration against conditions resembling all three before anyone depends on it.",
          ],
        },
        {
          heading: "Revisit the list as workflows change",
          summary: "Activity worth following last year may not be worth following now.",
          icon: "refresh",
          body: [
            "Teams reorganise, tools are replaced and processes gain or lose steps. Review what each integration follows whenever the workflow it serves changes, and retire responses that nobody relies on any more.",
          ],
        },
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about webhook events",
      items: [
        {
          question: "Where should developers start before designing around GetSibu webhook events?",
          answer: ["With ", { text: "API documentation", page: 273 }, ", which provides developers with the information required to build integrations against the platform. Read it before planning around any particular kind of event."],
        },
        {
          question: "Are webhook events the same as notifications to people?",
          answer: "No. A webhook event is a message between pieces of software; whether a person ever hears about it depends entirely on what the receiving system has been built to do.",
        },
        {
          question: "Who should be involved when an integration starts following webhook events?",
          answer: "The developers who build the receiver, the team whose work its responses affect and whoever looks after security, since a service that accepts incoming messages is a new way into an organisation’s systems.",
        },
      ],
      sources: [{ kind: "pdf", page: 273 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on webhooks and events",
      variant: "compact",
      pages: [252, 257, 273, 253, 278, 388],
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
