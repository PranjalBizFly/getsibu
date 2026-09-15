/**
 * 269 · Asset Created Webhook — /developers/asset-created-webhook (HELD draft; own claim: webhook-events)
 *
 * Angle (cluster: webhooks): the asset-created event — notifying external systems when new content
 * enters the library, the work that typically starts at that moment and what a receiver should weigh
 * before acting on it. Webhooks (252) owns delivery mechanics; Webhook Automation (257) owns
 * downstream workflows in general. No event identifiers, payloads, timing or retry claims.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of webhook practice and of how organisations respond to new content; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 269,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "API & Developers",
      lede: "Which kinds of work tend to begin when new material lands in a GetSibu library, how an asset-created event can bring them into motion elsewhere, and what a receiving system should think about before it acts.",
      visual: { diagram: "api-flow", focus: "webhooks" },
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 269 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "News that something new has entered the library",
      body: [
        "An asset-created event can notify external systems when new content enters the library. It marks a beginning: the point at which a file becomes an asset that other systems may need to record, check or prepare for.",
        "New content rarely matters only to the person who added it. A catalogue may need an entry, a production tracker may be waiting on a delivery, and whoever looks after rights or brand checks may want to see material before anyone reuses it. Without a signal, those systems either keep asking whether anything has arrived or depend on someone remembering to tell them.",
        [
          "Content can reach a GetSibu library by several routes, including ",
          { text: "drag and drop upload", page: 127 },
          " of individual assets or small batches and the ",
          { text: "asset upload API", page: 262 },
          " for files sent by external applications. If a receiver’s design depends on how an asset arrived, confirm how the event relates to each route rather than assuming it."
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["New content entering the library", "External systems notified", "A starting point for downstream work", "Arriving is not the same as ready", "Receivers that absorb bursts"],
      },
      highlight: {
        heading: "In practice",
        body: "A production coordinator stops messaging suppliers to ask whether footage has landed; the tracker records each delivery once the library reports the new content.",
        tags: ["Production", "Operations", "Developers"],
      },
      glance: {
        heading: "The asset-created event in brief",
        facts: [
          { label: "Area", value: "API & Developers" },
          { label: "Signals", value: "New content entering the library" },
          { label: "Mechanism", value: "Webhooks", page: 252 },
          { label: "Put to work in", value: "Webhook Automation", page: 257 },
        ],
      },
      sources: [{ kind: "pdf", page: 269 }, { kind: "pdf", page: 127 }, { kind: "pdf", page: 262 }, { kind: "pdf", page: 252 }, { kind: "pdf", page: 257 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "uses",
      eyebrow: "Typical uses",
      heading: "Work that often starts when new content arrives",
      intro: "Common responses to new material, described in general terms.",
      items: [
        { heading: "Acknowledge a delivery", icon: "check", body: "A production or project tracker marks expected material as received, so nobody has to confirm the delivery by message.", points: ["Deliveries recorded as they land", "Fewer chasing messages"] },
        { heading: "Open a catalogue entry", icon: "book", body: "A cataloguing or content-planning system creates a record for the new material, ready for descriptions to be added while its context is fresh.", points: ["Records started early", "Context captured sooner"] },
        { heading: "Queue a check before reuse", icon: "shield", body: "A rights, legal or brand review queue gains an item, so someone looks at the material before a colleague relies on it.", points: ["Checks begin on arrival", "Less risk of premature reuse"] },
        { heading: "Tell whoever asked for it", icon: "users", body: "The person or team that requested the material learns that it exists, through the system they already watch.", points: ["Requests closed without chasing", "No need to keep checking"] },
        { heading: "Keep another system in step", icon: "database", body: "An intranet, publishing tool or product catalogue elsewhere in the organisation learns that the library holds something new.", points: ["Other systems stay current", "No manual lists of additions"] },
        { heading: "Measure arrivals in the library", icon: "chart", body: "Upload analytics in GetSibu show how much new content enters the library over time, while an event suits systems that must respond to each arrival individually.", points: ["Trends from upload analytics", "Individual responses from events"], page: 184 },
      ],
      sources: [{ kind: "pdf", page: 184 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "before-acting",
      eyebrow: "Considerations",
      heading: "What a receiver should weigh before acting on a new asset",
      items: [
        {
          heading: "Arriving and being ready are different moments",
          summary: "A newly created asset may still be moving through processing.",
          icon: "clock",
          body: [
            ["Once uploaded, assets move through ", { text: "processing stages", page: 143 }, " such as metadata extraction, thumbnail generation and AI-related processing. Depending on when the event is sent, a receiver that immediately searches for the new asset, or expects its preview and extracted information, could find them incomplete."],
            "Confirm that timing before building, and design the receiver so it copes with either answer.",
          ],
        },
        {
          heading: "Large imports arrive in bursts",
          summary: "Moving a whole collection can create a great many assets in a short time.",
          icon: "upload",
          body: [
            ["Organisations use ", { text: "bulk import", page: 291 }, " to move large quantities of media without manually uploading individual files. If imported assets produce events, a receiver built for a steady trickle of uploads could be overwhelmed."],
            "Ask whether imports generate events before a migration starts, and queue downstream work so a surge is processed steadily rather than all at once.",
          ],
        },
        {
          heading: "Not every new asset concerns every system",
          summary: "Most receivers care about a subset of what arrives.",
          icon: "filter",
          body: [
            "A rights queue may care only about licensed material, and a product catalogue only about product imagery. Decide what makes a new asset relevant to each receiving system, and ignore the rest without treating it as an error.",
            ["When the event alone does not say enough, consult ", { text: "API documentation", page: 273 }, " for how an integration can find out more about the asset before deciding."],
          ],
        },
        {
          heading: "New content may be meant for a small audience",
          summary: "An external system should not reveal what the library deliberately restricts.",
          icon: "lock",
          body: [
            ["In GetSibu, ", { text: "default-deny access", page: 154 }, " means new folders can remain private until access is explicitly granted. A receiver that posts details of every arrival somewhere widely read could expose material that was never meant to circulate."],
            "Match the audience of each destination to the sensitivity of the content that might reach it, and prefer brief references over detailed descriptions.",
          ],
        },
        {
          heading: "Each client’s arrivals stay with that client",
          summary: "Agencies need downstream systems to keep the separation their libraries have.",
          icon: "building",
          body: [
            ["Each client environment can remain logically isolated, so assets from one client are not mixed with another’s library, as ", { text: "client tenant isolation", page: 161 }, " describes. Pooling every client’s new material into one downstream list would undo that separation outside the library."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 143 }, { kind: "pdf", page: 291 }, { kind: "pdf", page: 273 }, { kind: "pdf", page: 154 }, { kind: "pdf", page: 161 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "An archive that catalogues material while memories are fresh",
      team: "A media company’s archive team",
      situation: "A media company adds footage, photography and documents to GetSibu from several desks every week. Its archive team catalogues material in a separate archive system, usually long after it arrives, when nobody remembers the details.",
      steps: [
        { heading: "The need is framed as a starting signal", body: "The archive lead asks for each new asset to open a cataloguing task, instead of waiting for someone to compile a list of recent additions." },
        { heading: "Developers build a receiver", body: "The company’s developers build a small service that receives asset-created events and opens a task in the archive system for each one." },
        { heading: "Tasks start from what the library knows", body: ["Rather than relying on the event alone, the service reads the asset’s details through the ", { text: "asset metadata API", page: 264 }, ", which can expose asset information so external systems can work with it programmatically."] },
        { heading: "Sensitive desks are handled carefully", body: "The archive lead and IT agree which parts of the archive system may show tasks for restricted material, so the cataloguing queue reveals no more than the library does." },
        { heading: "Descriptions return to the library", body: ["Archivists add tags to the new assets while contributors can still answer questions, and colleagues later ", { text: "search that information alongside metadata and extracted content", page: 23 }, "."] },
      ],
      outcome: "Cataloguing happens while context is still available, and the archive no longer depends on someone remembering to report what arrived.",
      link: { page: 232, label: "GetSibu for Media Companies" },
      sources: [{ kind: "pdf", page: 269 }, { kind: "pdf", page: 264 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 23 }, { kind: "pdf", page: 232 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about the asset-created webhook",
      items: [
        {
          question: "What should a receiving system do first when an asset-created event arrives?",
          answer: ["Acknowledge the delivery promptly and hand the real work to a queue. ", { text: "Webhooks", page: 252 }, " explains in general terms why receivers keep replying separate from processing."],
        },
        {
          question: "Can asset-created events replace a periodic report of new additions?",
          answer: "For responding to each arrival, often yes. For confirming that nothing was missed, keep an occasional comparison between the receiving system and the library, because any delivery can fail.",
        },
        {
          question: "Who should decide which external systems hear about new assets?",
          answer: ["The people responsible for the content, working with IT. ", { text: "Creative access governance", page: 159 }, " helps organisations maintain control over sensitive creative content, and choosing where news of new material goes is part of that control."],
        },
        {
          question: "How does the asset-created event relate to webhook automation?",
          answer: ["It is one possible starting signal among several. ", { text: "Webhook automation", page: 257 }, " describes how webhook events can trigger downstream workflows when assets, comments, approvals or other supported events occur."],
        },
      ],
      sources: [{ kind: "pdf", page: 252 }, { kind: "pdf", page: 159 }, { kind: "pdf", page: 257 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on reacting to new content",
      variant: "compact",
      pages: [257, 252, 264, 143, 184, 232],
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
