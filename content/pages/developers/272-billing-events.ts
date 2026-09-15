/**
 * 272 · Billing Events — /developers/billing-events (HELD draft; own claim: webhook-events)
 *
 * Angle (cluster: webhooks): billing-related events supporting automated administrative workflows —
 * who acts on them and why they are handled apart from creative activity. States no event list,
 * plan, price, quota, seat count or payment detail; event identifiers are never used.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of administrative automation and webhook practice in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 272,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "API & Developers",
      lede: "Who in an organisation acts on billing-related events from GetSibu, which administrative tasks they can start, and why they deserve different handling from events about creative work.",
      visual: { diagram: "api-flow", focus: "webhooks" },
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 272 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Administrative work that follows the account, not the assets",
      body: [
        "Billing-related events can support automated administrative workflows. They concern the organisation’s commercial relationship with the platform rather than the creative work inside it, so the people who act on them usually sit in finance, procurement, IT or operations rather than in creative teams.",
        "Administrative tasks around any paid software service are easy to overlook until something goes wrong: an invoice nobody expected, a budget owner surprised by a commercial change, a cost centre never updated after a reorganisation. Each is typically handled by whoever happens to notice an email. Events can give those tasks a consistent starting point in the systems where finance and operations already work.",
        [
          "Billing is one input among several when an organisation thinks about the platform’s place in its budget. The ",
          { text: "cost of digital asset management", page: 347 },
          " should be considered alongside storage, productivity, collaboration and administrative savings, and ",
          { text: "library growth reporting", page: 209 },
          " helps organisations anticipate storage and operational requirements.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Billing-related events", "Automated administrative workflows", "Finance and operations as recipients", "Sensitive details handled apart", "Invoices and agreements as the record"],
      },
      highlight: {
        heading: "In practice",
        body: "An operations manager routes billing-related events into the finance team’s request system, so an account matter becomes a tracked task instead of an email waiting in one person’s inbox.",
        tags: ["Finance", "Operations", "IT"],
      },
      glance: {
        heading: "Billing events in brief",
        facts: [
          { label: "Area", value: "API & Developers" },
          { label: "Supports", value: "Automated administrative workflows" },
          { label: "Planning input", value: "Library Growth Reporting", page: 209 },
          { label: "Cost context", value: "Enterprise Asset Management Cost", page: 347 },
        ],
      },
      sources: [{ kind: "pdf", page: 272 }, { kind: "pdf", page: 347 }, { kind: "pdf", page: 209 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "roles",
      eyebrow: "By role",
      heading: "Who acts on billing-related events, and how",
      tabs: [
        {
          label: "Finance",
          heading: "Records that match what was agreed",
          icon: "chart",
          body: [
            "Finance teams reconcile what a service charges against purchase orders and budgets. An event can open a reconciliation task or update a record in the finance system, while the authoritative figures remain in the invoices and agreements themselves.",
            "The value lies in consistency: each matter reaches the same team by the same route, ready to be checked against the documents that govern it.",
          ],
          points: ["Reconciliation started promptly", "Source documents stay authoritative"],
        },
        {
          label: "Procurement",
          heading: "Commercial decisions taken deliberately",
          icon: "briefcase",
          body: [
            "Procurement teams plan reviews of software agreements around their own calendars. An event routed into the procurement system gives a review a recorded starting point, with room to gather usage and involve stakeholders rather than improvising.",
            ["Those reviews go better when the value is already written down, and the ", { text: "DAM business case", page: 359 }, " can be built around faster discovery, improved organisation, stronger governance and more efficient collaboration."],
          ],
          points: ["Reviews planned, not rushed", "Value documented before it is questioned"],
        },
        {
          label: "IT and admins",
          heading: "Ownership of the account kept current",
          icon: "key",
          body: [
            "Administrative events are a natural prompt to confirm who looks after the account and whether the people listed for it still hold those roles.",
            ["Within the platform, ", { text: "organisation administrators", page: 158 }, " can manage access policies, users, folders and organisational settings, which makes them the obvious people to involve when an administrative question touches the account."],
          ],
          points: ["Account owners confirmed", "Administrators kept in the loop"],
        },
        {
          label: "Agencies",
          heading: "Costs understood across client work",
          icon: "building",
          body: [
            ["Agencies serving several clients from one platform often want to understand costs in relation to that client work. ", { text: "DAM pricing for agencies", page: 346 }, " notes that agencies can evaluate GetSibu based on the number of clients, users, storage requirements and multi-tenant needs."],
            "Whether a particular billing-related event distinguishes between client environments is a detail to confirm before designing any per-client process around it.",
          ],
          points: ["Client work considered in cost reviews", "Per-client assumptions checked first"],
        },
      ],
      sources: [{ kind: "pdf", page: 359 }, { kind: "pdf", page: 158 }, { kind: "pdf", page: 346 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "care",
      eyebrow: "Considerations",
      heading: "Handling billing-related events with appropriate care",
      items: [
        {
          heading: "Keep billing and creative events apart",
          summary: "Commercial details should not travel the same route as activity on assets.",
          icon: "lock",
          body: [
            "A receiver built for creative activity often posts into widely read project spaces. Billing-related information belongs with the people who handle finance, so give it its own receiver, its own destination and its own access list.",
          ],
        },
        {
          heading: "Let the event open a task, and the invoice settle it",
          summary: "Automated messages start administrative work; source documents decide it.",
          icon: "document",
          body: [
            "Use a billing-related event to create a task, refresh a record or alert an owner. Before money moves or a budget changes, check the details against the invoice or agreement they relate to.",
          ],
        },
        {
          heading: "Give every kind of event an owner",
          summary: "An administrative message that nobody is responsible for is only noise.",
          icon: "user",
          body: [
            "For each billing-related event the organisation acts on, name the team that responds and what a response looks like. Where no team would act, do not route the event anywhere at all.",
          ],
        },
        {
          heading: "Protect what the receiver stores",
          summary: "Logs of billing-related deliveries can reveal commercial information.",
          icon: "shield",
          body: [
            "Records of incoming events help with troubleshooting, and they may also hold whatever commercial details the events carry. Restrict who can read them, keep them only as long as troubleshooting requires and exclude them from general-purpose monitoring dashboards.",
          ],
        },
        {
          heading: "Test away from real finance systems",
          summary: "Administrative automations are awkward to rehearse against live records.",
          icon: "check",
          body: [
            "Build and test the workflow against a test copy of the finance or procurement system, with invented records, before connecting it to real accounts. A mistake in an administrative automation can be slower to spot, and harder to reverse, than one in a creative workflow.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 272 }, EXPLAINS],
    },
    {
      kind: "before-after",
      id: "what-changes",
      eyebrow: "What changes",
      heading: "Administrative follow-up with and without event-driven workflows",
      beforeLabel: "Handled from an inbox",
      afterLabel: "Started by billing-related events",
      before: ["Account emails read by whoever receives them", "Tasks remembered, or quietly forgotten", "Records updated when someone has time", "Knowledge held by a single person"],
      after: ["Tasks opened in the responsible team’s own system", "A named owner for each kind of event", "Records refreshed from a consistent starting point", "Handovers that survive a change of staff"],
      sources: [{ kind: "pdf", page: 272 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about billing events",
      items: [
        {
          question: "Which billing-related events does GetSibu send?",
          answer: ["Confirm the current events in ", { text: "API documentation", page: 273 }, " before designing a workflow, and build around the events that exist rather than those other services happen to offer."],
        },
        {
          question: "Should billing events change who can use GetSibu automatically?",
          answer: "Keep access decisions with people. An administrative workflow can prompt an administrator to review the account, but changing access automatically on the strength of a billing message risks cutting off teams in the middle of a project.",
        },
        {
          question: "Who should run the service that receives billing events?",
          answer: "Usually IT or a platform team, because it is software to operate and secure. Finance or operations should own what the service does with each event, so the people who understand the process decide how it behaves.",
        },
        {
          question: "How do billing events relate to planning for library growth?",
          answer: ["They answer different questions. Billing-related events concern the commercial relationship, while ", { text: "storage growth analytics", page: 149 }, " provide historical context around how quickly a creative library is expanding, which is what capacity planning draws on."],
        },
      ],
      sources: [{ kind: "pdf", page: 273 }, { kind: "pdf", page: 149 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on the administrative side of GetSibu",
      variant: "compact",
      pages: [273, 209, 347, 158, 346, 149],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Scale Your Creative Library",
      conversionPage: 397,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 397 }],
    },
  ],
};

export default page;
