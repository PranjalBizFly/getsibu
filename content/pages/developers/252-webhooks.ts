/**
 * 252 · Webhooks — /developers/webhooks
 *
 * FRAMED (claim: webhook-events — event names and list conflict with the product). Context page: Webhook
 * Automation (257). Angle (cluster: webhooks): what webhooks are and how a delivery travels from a platform to
 * the software that needs to know, explained in general terms (HTTP callbacks, registered receivers, retries and
 * signatures as general practice). GetSibu statements are limited to 257, 278 and 388. No event names, no event
 * list, no signing or retry behaviour claimed for GetSibu, and the page's own PDF paragraph appears nowhere.
 * Webhook Automation (257) owns downstream workflows; Webhook Events (268) owns the event catalogue.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of webhook practice in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 252,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "API & Developers",
      lede: "What a webhook is, how a single delivery travels from the platform where something changed to the software that needs to know, and what a receiving application should be ready to handle.",
      visual: { diagram: "api-flow", focus: "webhooks" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 257 }, { kind: "pdf", page: 388 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A callback instead of a question asked over and over",
      body: [
        "A webhook is an HTTP callback. When something happens in one application, that application sends an HTTP request to a URL that another piece of software registered beforehand, and the body of the request describes what happened. The software at that URL then decides what, if anything, to do about it.",
        "The alternative is polling: asking an API at intervals whether anything has changed. Polling is easy to start with, but many of those requests come back empty and a change is only noticed at the next check. A webhook reverses the direction, so the software that cares about a change is told rather than having to keep asking.",
        [
          "As ",
          { text: "the answer to whether GetSibu has an API", page: 388 },
          " explains, GetSibu provides webhooks alongside its REST API capabilities and developer tooling. Used together with the API, webhooks let developers ",
          { text: "automate repetitive asset management workflows", page: 278 },
          ".",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["HTTP callbacks", "Receiving URLs registered in advance", "Being told instead of polling", "Receivers that verify what arrives", "Idempotent receivers", "Work that continues downstream"],
      },
      highlight: {
        heading: "In practice",
        body: "A developer’s first version of a receiver does two things well: it replies promptly and it keeps a record of what arrived. The slower work happens afterwards, away from the request.",
        tags: ["Developers", "Integration design", "Reliability"],
      },
      glance: {
        heading: "Webhooks in brief",
        facts: [
          { label: "Area", value: "API & Developers" },
          { label: "Direction", value: "From the platform to your software" },
          { label: "Put to work in", value: "Webhook Automation", page: 257 },
          { label: "Works alongside", value: "REST API", page: 253 },
        ],
        actions: [{ kind: "route", path: "/developers", label: "More in Developers" }]
      },
      sources: [{ kind: "pdf", page: 388 }, { kind: "pdf", page: 278 }, { kind: "pdf", page: 257 }, { kind: "pdf", page: 253 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "delivery",
      eyebrow: "Step by step",
      heading: "What happens during one webhook delivery",
      intro: "Described in general terms; how a particular platform handles each step belongs in its documentation.",
      steps: [
        { heading: "A receiver is registered", body: "The receiving software exposes a URL, and the sending application is given that address, often together with the kinds of event the receiver cares about.", icon: "network" },
        { heading: "Something changes", body: "An action in the sending application produces an event describing what changed and when.", icon: "zap" },
        { heading: "The callback is sent", body: "The sender makes an HTTP request, usually a POST, to the registered URL, with the details of the event carried in the request body.", icon: "webhook" },
        { heading: "The receiver checks and replies", body: "The receiver confirms that the request is genuine, answers promptly with a success status and places any longer work in a queue.", icon: "shield" },
        { heading: "Work continues downstream", body: "The queued event is processed: a record is updated, a job starts or a person is informed, which is the point where a webhook becomes automation.", icon: "workflow", page: 257 },
      ],
      sources: [{ kind: "pdf", page: 257 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "polling-versus-webhooks",
      eyebrow: "Side by side",
      heading: "Polling an API compared with receiving webhooks",
      columns: ["Polling", "Webhooks"],
      rows: [
        ["Who starts the exchange", "The software that wants to know", "The platform where the change happened"],
        ["When a change is noticed", "At the next scheduled check", "Shortly after the change"],
        ["Traffic when nothing changes", "Checks continue regardless", "Nothing is sent"],
        ["What the receiving side provides", "Credentials to call the API", "A reachable URL that accepts requests"],
        ["Main risk to plan for", "Load from frequent checks", "Deliveries that fail or repeat"],
        ["Best suited to", "Periodic reconciliation", "Reacting to individual changes"],
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "accordion",
      id: "receiver",
      eyebrow: "Considerations",
      heading: "What a webhook receiver should be ready for",
      items: [
        {
          heading: "Proving a delivery is genuine",
          summary: "Anyone who discovers a receiving URL could send requests to it.",
          icon: "shield",
          body: [
            "A common safeguard is a signature: the sender computes a value from the request body using a secret shared with the receiver, and the receiver repeats the calculation before trusting anything in the message. Requests that fail the check are rejected.",
            "Look in the sending platform’s documentation for whether and how its deliveries are signed, and store any shared secret with the same care as an API credential.",
          ],
        },
        {
          heading: "Answering quickly",
          summary: "Senders generally wait only a short time for a reply before treating a delivery as failed.",
          icon: "clock",
          body: [
            "Doing the real work inside the request, such as generating files or calling several other services, risks the sender giving up halfway. The dependable pattern is to validate, store the event, reply with success and let a separate worker take it from there.",
          ],
        },
        {
          heading: "Handling the same event twice",
          summary: "Where a sender retries failed deliveries, the same event can reach a receiver more than once.",
          icon: "copy",
          body: [
            "Receivers should be idempotent: processing an event a second time must not create a second record or start a second job. Keeping track of the identifiers already handled is the usual way to achieve that.",
          ],
        },
        {
          heading: "Events that arrive out of order",
          summary: "Deliveries do not always reach the receiver in the order the changes happened.",
          icon: "history",
          body: [
            "A retry of an earlier event can land after a later one. Treat each message as a prompt to look at the current state rather than as the final word on it.",
            ["Where the receiver needs up-to-date details, it can read them through the API, which ", { text: "can expose asset information", page: 264 }, " so that other software can work with metadata programmatically."],
          ],
        },
        {
          heading: "Protecting what arrives",
          summary: "Whatever a delivery carries may deserve the same care as the assets it concerns.",
          icon: "lock",
          body: [
            "Logs of incoming deliveries help with troubleshooting, but depending on what a platform sends, they may hold details about unreleased creative work. Limit who can read them and how long they are kept.",
            [{ text: "API security", page: 277 }, " is an important component of protecting automated access to creative assets, and the software on the receiving end of a webhook is part of that picture."],
          ],
        },
        {
          heading: "Noticing when deliveries stop",
          summary: "A receiver that fails silently leaves downstream work undone.",
          icon: "gauge",
          body: [
            "Monitor the receiver like any other service: track errors during processing and unusually long gaps between events, and decide in advance who looks into a receiver that has gone quiet.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 264 }, { kind: "pdf", page: 277 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about webhooks",
      items: [
        {
          question: "Should each automation have its own webhook receiver?",
          answer: ["Not necessarily. One receiver can verify deliveries in a single place and hand events to separate workers, while separate receivers make more sense when automations belong to different teams. What those workers go on to do is the subject of ", { text: "webhook automation", page: 257 }, "."],
        },
        {
          question: "Does a webhook receiver have to be reachable from the internet?",
          answer: "The sender has to be able to reach it, so a receiver needs an address the sending platform can call. Organisations that prefer not to expose internal software often place a small gateway in front of it that checks each delivery before passing it on.",
        },
        {
          question: "What should developers read before building a webhook receiver for GetSibu?",
          answer: ["Start with ", { text: "API documentation", page: 273 }, ", which provides the information required to build integrations against the platform, rather than assuming another product’s conventions apply."],
        },
      ],
      sources: [{ kind: "pdf", page: 257 }, { kind: "pdf", page: 273 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on webhooks and automation",
      variant: "compact",
      pages: [257, 268, 253, 278, 273, 388],
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
