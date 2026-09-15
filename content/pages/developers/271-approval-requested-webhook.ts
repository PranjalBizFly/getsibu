/**
 * 271 · Approval Requested Webhook — /developers/approval-requested-webhook (HELD draft; own claim: webhook-events)
 *
 * Angle (cluster: webhooks): the approval-requested event — connecting GetSibu with external review
 * systems at the moment work is put forward for a decision, before any outcome exists. Approval API
 * (267) owns approval events in production systems; Creative Approval Workflow (67) owns approval in
 * the library. No approver assignment, deadlines, multi-stage approval, payloads or timing claims.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of review practice and webhook design in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 271,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "API & Developers",
      lede: "Why the moment work is put forward for review matters to compliance queues, production schedules and client processes outside GetSibu, and how to connect them without creating a second place where decisions are made.",
      visual: { diagram: "api-flow", focus: "approvals" },
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 271 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "The moment work is put forward for a decision",
      body: [
        "Approval-requested events can connect GetSibu with external review systems. A request marks the start of review rather than its outcome: an asset is ready for someone to judge, and other systems may need to know that a decision is now pending.",
        "Many organisations review creative work in more than one place. Legal or regulatory checks may run in a compliance system, schedules in a traffic or project tool, and client sign-off through an account team’s own process. When those systems hear about a request only when someone remembers to pass it on, review time is lost before anyone has looked at the work.",
        [
          "Inside the library, a ",
          { text: "creative approval workflow", page: 67 },
          " lets teams request review, make changes and mark assets as approved, while ",
          { text: "review status", page: 76 },
          " shows whether an asset needs attention or has completed approval. More broadly, ",
          { text: "approval events", page: 267 },
          " can be incorporated into external production and workflow systems.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Review requested, decision pending", "External review systems", "Specialist checks started sooner", "Waiting time made visible", "One agreed record of the outcome"],
      },
      highlight: {
        heading: "In practice",
        body: "A compliance reviewer finds new items in her own queue when creative work is put forward, instead of learning about them from a weekly round-up email.",
        tags: ["Compliance", "Producers", "Developers"],
      },
      glance: {
        heading: "The approval-requested event in brief",
        facts: [
          { label: "Area", value: "API & Developers" },
          { label: "Signals", value: "Review requested for an asset" },
          { label: "In the library", value: "Creative Approval Workflow", page: 67 },
          { label: "Related events", value: "Approval API", page: 267 },
        ],
      },
      sources: [{ kind: "pdf", page: 271 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 76 }, { kind: "pdf", page: 267 }, EXPLAINS],
    },
    {
      kind: "workflow",
      id: "request-path",
      eyebrow: "Stage by stage",
      heading: "Where an approval request travels",
      stages: [
        { label: "Work is put forward", body: "Someone requests review of an asset in GetSibu, which is the moment an approval-requested event describes." },
        { label: "The external system hears of it", body: "A receiving service passes the request to the review system that needs it, such as a compliance queue or a production schedule." },
        { label: "Specialists review the work", body: "Reviewers who work in that system look at the work, ideally the asset itself rather than a copy exported for the purpose." },
        { label: "Changes are made", body: "If the work needs revising, the team makes the changes and puts it forward again." },
        { label: "The outcome is recorded", body: "Once the reviewers are satisfied, the decision is written down so colleagues can see the work has cleared review." },
      ],
      sources: [{ kind: "pdf", page: 271 }, { kind: "pdf", page: 67 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "review-systems",
      eyebrow: "Where requests go",
      heading: "External review systems an approval request can feed",
      tabs: [
        {
          label: "Compliance",
          heading: "Checks that have to happen before release",
          icon: "shield",
          body: [
            "Regulated claims, legal wording and licensed material often need a specialist’s decision recorded in a system built for that purpose. A request gives that queue its item when the work is ready, rather than after an internal sign-off that assumed the checks had already happened.",
            ["It helps to be clear about who may decide what, and ", { text: "creative asset governance", page: 114 }, " is where an organisation sets out who can approve assets, alongside who can upload, edit, download and manage them."],
          ],
          points: ["Specialist checks begin at the right time", "Clear lines on who approves"],
        },
        {
          label: "Production",
          heading: "Schedules that depend on review time",
          icon: "calendar",
          body: [
            "Traffic and production tools plan around how long review takes. Knowing when review began lets a producer see which work is waiting and for how long, and spot where a schedule is at risk before a deadline slips.",
            ["Inside the library, ", { text: "creative workflow metrics", page: 208 }, " help teams understand how assets move through upload, review and approval processes."],
          ],
          points: ["Waiting work visible to producers", "Review time planned, not guessed"],
        },
        {
          label: "Agencies",
          heading: "Client sign-off handled client by client",
          icon: "briefcase",
          body: [
            "Agencies often manage client approval through account teams and their own systems. A request for one client’s work should reach only that client’s process, and nothing about it should appear where another client’s team can see it.",
            ["GetSibu supports that separation on the library side: ", { text: "client review", page: 72 }, " lets agencies maintain client-specific libraries and review workflows while keeping different clients isolated."],
          ],
          points: ["Requests routed per client", "No overlap between client processes"],
        },
      ],
      sources: [{ kind: "pdf", page: 114 }, { kind: "pdf", page: 208 }, { kind: "pdf", page: 72 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "Compliance review that starts when the work is ready",
      team: "A regulated marketing team",
      situation: "A marketing team in a regulated industry must have customer-facing material checked by compliance, whose reviewers work in a separate compliance system. Assets used to wait in GetSibu until someone emailed the compliance desk.",
      steps: [
        { heading: "The hand-off is agreed", body: "Marketing and compliance agree that requesting review of a customer-facing asset in GetSibu should open an item in the compliance system, and that internal-only material should not." },
        { heading: "A receiver connects the two", body: "Developers build a service that receives approval-requested events, checks whether each asset is customer-facing and, if so, opens a compliance item that identifies it." },
        { heading: "Compliance reviews the asset itself", body: ["The compliance reviewer opens the asset in GetSibu and leaves ", { text: "comments directly on it", page: 62 }, " wherever wording needs to change."] },
        { heading: "Revisions keep their history", body: ["The designer replaces the artwork, and ", { text: "version history", page: 92 }, " keeps a record of the previous versions."] },
        { heading: "The decision is recorded in the library", body: ["Once compliance is satisfied, the marketing lead marks the asset approved, and ", { text: "approval history", page: 77 }, " keeps a record of the review activity that led there."] },
      ],
      outcome: "Compliance hears about work when it is ready rather than when someone remembers, and the decision and its history stay with the asset.",
      link: { page: 223, label: "GetSibu for Enterprise Marketing" },
      sources: [{ kind: "pdf", page: 271 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 92 }, { kind: "pdf", page: 77 }, { kind: "pdf", page: 223 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about the approval-requested webhook",
      items: [
        {
          question: "Why act on an approval request instead of waiting for the approval?",
          answer: "Because some reviews must happen before approval can be given at all. Acting when review is requested gives specialist reviewers the whole review period, not whatever time is left after an internal sign-off.",
        },
        {
          question: "Where should the outcome of an externally reviewed approval be recorded?",
          answer: ["In one agreed place, because two systems that can each record a decision will eventually disagree. When the library is chosen, ", { text: "asset approval", page: 68 }, " gives a status history showing whether content is awaiting review, approved or requires changes."],
        },
        {
          question: "Can approval requests reach reviewers who do not use GetSibu?",
          answer: ["An external system can tell them that review is needed, but reading the asset itself depends on the access your organisation gives them. ", { text: "Creative asset permissions", page: 151 }, " control who can access different areas of the library."],
        },
        {
          question: "Does every approval request need to reach an external review system?",
          answer: "No. Many requests are routine internal reviews. Pass on only the work that genuinely needs outside review, such as customer-facing material, so specialist queues hold nothing they do not have to check.",
        },
      ],
      sources: [{ kind: "pdf", page: 68 }, { kind: "pdf", page: 151 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on connecting review and approval",
      variant: "compact",
      pages: [67, 267, 76, 77, 72, 223],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Give Your Creative Team One Source of Truth",
      conversionPage: 395,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 395 }],
    },
  ],
};

export default page;
