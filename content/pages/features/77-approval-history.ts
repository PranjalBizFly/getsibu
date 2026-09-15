/**
 * 77 · Approval History — /features/approval-history
 *
 * Angle (clusters: approvals, audit-history): the record of review activity — accountability for creative decisions
 * and less confusion over which version was accepted. Asset Approval (68) owns the states and their sequence, Review
 * Status (76) the needs-attention indicator, Asset Discussion History (75) how feedback evolved, Asset Audit Trail (119)
 * important actions in general.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of approval records and accountability in creative work; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 77,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Collaboration",
      lede: "Why a record of review activity matters long after work is signed off, how teams use it when a past decision is questioned, and the habits that keep it worth relying on.",
      visual: { diagram: "timeline-review", focus: "status" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 77 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Evidence of what was accepted, not a memory of it",
      body: [
        "Approval history in GetSibu provides a record of review activity. That record supports accountability for creative decisions and reduces confusion around which version of an asset was accepted.",
        "Doubt about the accepted version tends to surface late, when it is hardest to untangle. A printer receives a file that differs from the proof people remember; an account lead is sure a different cut was agreed; a query arrives about wording that changed twice before launch. By then the people involved have moved on to other work, the messages are spread across inboxes, and recollection is the weakest evidence available.",
        [
          "Its scope is narrower than the ",
          { text: "asset audit trail", page: 119 },
          ", which provides visibility into important actions performed on creative files in general. Approval history keeps to review, and to the decision that ended it.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["A record of review activity", "Accountability for creative decisions", "Which version was accepted", "Evidence instead of recollection", "Useful long after launch"],
      },
      highlight: {
        heading: "In practice",
        body: "When a distributor asks why a product film differs from an earlier preview, the producer turns to the film’s approval history instead of hunting through old email for the sign-off.",
        tags: ["Producers", "Account leads", "Legal reviewers"],
      },
      glance: {
        heading: "Approval history in brief",
        facts: [
          { label: "Area", value: "Collaboration" },
          { label: "Records", value: "Review activity on an asset" },
          { label: "Helps settle", value: "Which version was accepted" },
          { label: "Sits beside", value: "Asset Approval", page: 68 },
        ],
        actions: [{ kind: "route", path: "/features/collaboration", label: "More in Collaboration" }]
      },
      sources: [{ kind: "pdf", page: 77 }, { kind: "pdf", page: 119 }, { kind: "pdf", page: 68 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "memory-or-record",
      eyebrow: "Why a record matters",
      heading: "Sign-off remembered, or sign-off on record",
      columns: ["Approval held in memory and messages", "Approval history in GetSibu"],
      emphasis: 1,
      rows: [
        ["Which version was accepted", "Inferred from attachment names and dates", "A record that reduces the confusion"],
        ["What happened in review", "Pieced together from several inboxes", "Review activity recorded for the asset"],
        ["Accountability", "Depends on who recalls the conversation", "Supported by a record the team can consult"],
        ["The version in question", "Possibly overwritten or deleted", "Kept among the asset’s previous versions"],
        ["A colleague moving on", "Their knowledge of past sign-offs goes too", "The record does not rely on anyone’s memory"],
        ["The reasoning behind a decision", "Buried in a thread nobody can find", "Read in the asset’s discussion history"],
      ],
      sources: [{ kind: "pdf", page: 77 }, { kind: "pdf", page: 93 }, { kind: "pdf", page: 92 }, { kind: "pdf", page: 75 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A removed line in a recruitment film, explained from the record",
      team: "A corporate communications team",
      situation: "A corporate communications team made a recruitment film that went through several review rounds with HR, legal and an executive sponsor. Some weeks after launch, HR asks why a line about working arrangements is missing from the published film.",
      steps: [
        { heading: "The question arrives", body: "The HR lead believes the original line had been approved and wants to know why the film that went out is different." },
        { heading: "The record is checked first", body: "Rather than searching old email, the communications manager looks at the film’s approval history, the record of review activity that led to the accepted version." },
        { heading: "The earlier cut is watched again", body: ["The cut that still contained the line remains in the ", { text: "version history associated with the film", page: 97 }, ", so the team can watch exactly what HR remembers."] },
        { heading: "The reasoning is found", body: ["The film’s ", { text: "discussion history", page: 75 }, " shows the legal reviewer asking for the line to come out and the sponsor agreeing in the same thread."] },
        { heading: "The answer is given", body: "The manager explains which version was accepted and why the line changed, and HR updates the briefing it gives to hiring managers." },
      ],
      outcome: "The finished film did not have to be reopened, and HR left with the reason for the change as well as the answer.",
      link: { page: 240, label: "GetSibu for Corporate Communications" },
      sources: [{ kind: "pdf", page: 77 }, { kind: "pdf", page: 97 }, { kind: "pdf", page: 75 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 240 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "accordion",
      id: "worth-relying-on",
      eyebrow: "Good practice",
      heading: "Keeping an approval history worth relying on",
      items: [
        {
          heading: "Treat accountability as clarity, not blame",
          summary: "A record of decisions helps a team understand what happened; used to find fault, it discourages honest review.",
          icon: "shield",
          body: [
            "Accountability means that decisions can be traced and explained. When the record is used mainly to find fault, people start approving cautiously, late or not at all, and the history fills with hesitation rather than decisions.",
            "Teams get more from an approval history when they use it to answer questions and improve the process, and treat an occasional wrong call as something the record helps correct.",
          ],
        },
        {
          heading: "Bring approvals given elsewhere onto the asset",
          summary: "A sign-off by email or on a call belongs in the record as much as one given in the library.",
          icon: "message",
          body: [
            "Senior stakeholders often give their decision away from the library, and a client’s approval usually reaches an agency through its account lead. It may arrive in a reply, a message or a spoken yes at the end of a meeting.",
            ["Whoever receives that decision should record it on the asset, with a ", { text: "comment", page: 62 }, " saying where it came from, before marking the work as approved. Otherwise the history shows an approval without the context that made it legitimate."],
          ],
        },
        {
          heading: "Look across many histories, not only one",
          summary: "Patterns across assets reveal more about the approval process than any single record.",
          icon: "trend",
          body: [
            "One asset’s history explains one decision. Reading several side by side shows how the process behaves: kinds of work that always need an extra round, or kinds that seldom need changes at all.",
            ["For the organisation as a whole, ", { text: "creative library reporting", page: 205 }, " turns analytics into information that can support operational decisions, which puts those patterns in a wider context."],
          ],
        },
        {
          heading: "Check the record again before reuse",
          summary: "An approval was given for a purpose, and a new use may raise new questions.",
          icon: "refresh",
          body: [
            "A film approved for an internal event, or an image cleared for one market, carries a history of that particular review. Before the asset is used somewhere quite different, looking back at that review helps a team decide whether the new use deserves a round of its own.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 77 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 205 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about approval history",
      items: [
        {
          question: "Who relies on approval history apart from the people who approve?",
          answer: "Producers answering delivery queries, account leads handling a client’s questions, reviewers checking what was cleared before, and anyone who inherits the work once the original team has moved on.",
        },
        {
          question: "How does approval history help when someone disputes a creative sign-off?",
          answer: "Separate the two questions. Establish from the record what was accepted first, then discuss whether that decision should still stand, so facts and opinions are not argued at the same time.",
        },
        {
          question: "What makes an approval decision easy to understand from the record later?",
          answer: [
            "A short ",
            { text: "comment", page: 62 },
            " giving the reason whenever the decision was not obvious, such as an agreed exception to a brand rule. An outcome rarely explains itself a year later.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 77 }, { kind: "pdf", page: 62 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on approval records",
      variant: "compact",
      pages: [68, 76, 67, 119, 92, 75],
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
