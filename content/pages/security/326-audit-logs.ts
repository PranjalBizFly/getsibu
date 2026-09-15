/**
 * 326 · Audit Logs — /security/audit-logs
 *
 * Angle (cluster: audit-history): the platform-wide record of important actions — permissions, comments, asset
 * changes and other events — as a security control: what each kind of recorded action answers and what keeps the
 * record useful. 119 owns actions on files, 170 permission changes, 171 user interactions. Never an unconfirmed audit-retention claim,
 * exports or retention periods (held 327).
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how audit records support security; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 326,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Security",
      lede: "Why knowing what happened is as much a part of security as deciding what can happen, which questions a platform-wide record helps answer, and the habits that keep it worth reading.",
      visual: { diagram: "control-map", focus: "audit" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 326 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A record of important actions across the platform",
      body: [
        "Audit logs in GetSibu keep a historical record of important actions, including changes to permissions, comments, changes to assets and other platform events. It is the broad record, not confined to a single file or a single kind of change.",
        "Security depends on looking back as well as on keeping the wrong people out. Controls decide what can happen; a record shows what did happen. That is how an organisation confirms its controls worked, investigates when they did not, and answers a manager’s questions about how sensitive material was handled. A record can encourage care as well, since people tend to act more deliberately when important actions are on record.",
        [
          "Narrower records sit alongside it. The ",
          { text: "asset audit trail", page: 119 },
          " gives visibility into important actions performed on creative files, and ",
          { text: "permission auditing", page: 170 },
          " concentrates on changes to access, while the audit logs remain the wider account of platform activity.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["A historical record of important actions", "Changes to permissions", "Comments and asset changes", "Other platform events", "Evidence when questions arise"],
      },
      glance: {
        heading: "Audit logs in brief",
        facts: [
          { label: "Area", value: "Security" },
          { label: "Keeps", value: "A historical record of important actions" },
          { label: "Includes", value: "Permissions, comments, asset changes, other events" },
          { label: "Actions on files", value: "Asset Audit Trail", page: 119 },
        ],
        actions: [{ kind: "route", path: "/security", label: "More in Security" }]
      },
      sources: [{ kind: "pdf", page: 326 }, { kind: "pdf", page: 119 }, { kind: "pdf", page: 170 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "coverage",
      eyebrow: "Coverage",
      heading: "What each kind of recorded action helps answer",
      tabs: [
        {
          label: "Permissions",
          heading: "How the boundaries around work changed",
          icon: "lock",
          body: [
            "Changes to permissions can reach further than almost any other action, because one change can alter who reaches an entire area of the library. A record of them answers questions such as whether a folder was opened more widely just before material escaped, and whether access widened for one project was later narrowed again.",
            "With those changes on record, access reviews can work from what actually changed rather than from people’s recollection of it.",
          ],
          points: ["Widened access traced to its moment", "Access that was never narrowed again"],
          link: { page: 151, label: "Creative Asset Permissions" },
        },
        {
          label: "Comments",
          heading: "What was said, and on which asset",
          icon: "message",
          body: [
            "Comments carry decisions as well as opinions: a warning that a licence does not cover a market, or an agreement to use a different image.",
            "When comments form part of the same record as permission and asset changes, the reasoning behind a change can be read beside the change itself.",
          ],
          points: ["Decisions as well as opinions", "Reasons read beside changes"],
          link: { page: 62, label: "Asset Comments" },
        },
        {
          label: "Asset changes",
          heading: "When the work itself was altered",
          icon: "refresh",
          body: [
            "Replacements, removals and other changes to assets are where accidental and deliberate damage usually shows itself. Recorded changes help establish when a file that was later delivered was put in place, so the response can begin from the moment things went wrong.",
            "Knowing that moment also shows which later work may have relied on the altered file.",
          ],
          points: ["The moment a file changed", "A starting point for putting it right"],
          link: { page: 92, label: "File Version History" },
        },
        {
          label: "Other events",
          heading: "Beyond the three named categories",
          icon: "audit",
          body: [
            "The record is not limited to permissions, comments and asset changes; other platform events belong to it as well.",
            "When a particular concern depends on a specific kind of event being recorded, confirm that directly during evaluation rather than assuming either way. A precise question gets a precise answer, and the answer becomes part of your own security documentation.",
          ],
          points: ["Coverage confirmed, not assumed", "Answers kept with your documentation"],
        },
      ],
      sources: [{ kind: "pdf", page: 326 }, { kind: "pdf", page: 151 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 92 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A required legal line disappears from a film",
      team: "A consumer brand’s marketing team",
      situation: "Shortly before a product launch, a marketing team notices that a legal line its lawyers asked to keep is missing from the main film, and nobody can remember agreeing to remove it.",
      steps: [
        { heading: "The questions are set out", body: "The marketing lead writes down what needs answering: when the film changed, and what instruction the change followed." },
        { heading: "The record is read", body: "The lead looks through the audit logs for the period since the legal review, where comments and asset changes form part of one historical record." },
        { heading: "A sequence emerges", body: ["The record shows a comment asking for the line to be shortened, a ", { text: "threaded reply", page: 63 }, " agreeing a shorter wording, and then a replacement of the film that dropped the line altogether."] },
        { heading: "The instruction is settled", body: "The editor and the legal reviewer read the thread together and agree that the shorter wording, not a removal, was what had been decided." },
        { heading: "The film is corrected", body: ["A corrected film replaces the current one, and ", { text: "earlier versions stay in the asset record", page: 91 }, " for reference."] },
      ],
      outcome: "The launch goes ahead with the agreed wording, and the disagreement is settled from the recorded sequence rather than from anyone’s memory of it.",
      link: { page: 213, label: "GetSibu for Marketing Teams" },
      sources: [{ kind: "pdf", page: 326 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 91 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "accordion",
      id: "useful",
      eyebrow: "Considerations",
      heading: "What keeps an audit log useful in practice",
      items: [
        {
          heading: "One account for each person",
          summary: "A record can only be as specific as the accounts behind it.",
          icon: "user",
          body: [
            "A shared login turns every entry into an action by “someone who had the password”. Everyone who works in the library, including colleagues who join for a single project, needs an account of their own.",
            ["A record also assumes each account is used by its owner. ", { text: "Multi-factor authentication", page: 336 }, " adds another layer of account protection, which makes that assumption safer."],
          ],
        },
        {
          heading: "Know what the record cannot show",
          summary: "A log shows actions on the platform, not intentions or what happened elsewhere.",
          icon: "eye",
          body: [
            "A file that leaves the library may travel onwards by email or on a memory stick, and a decision may be agreed in a corridor before anyone writes a comment. The record marks where the platform’s part of the story ends.",
            "Treat the audit log as the beginning of an investigation. The people involved, and the context they can give, complete the picture.",
          ],
        },
        {
          heading: "Treat the record as sensitive in its own right",
          summary: "A record of comments, access changes and asset changes can reveal as much as the assets do.",
          icon: "lock",
          body: [
            "Entries can name a product that has not been announced, show who worked on a confidential project or mark the moment an area was opened more widely.",
            "Agreeing which roles should look at the record, and for what reasons, deserves the same care as deciding who can open a sensitive folder.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 336 }, { kind: "pdf", page: 326 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about audit logs",
      items: [
        {
          question: "Do audit logs replace version history?",
          answer: ["No. ", { text: "Version history", page: 92 }, " keeps previous versions and lets an older one be brought back when required, whereas audit logs keep a record that important actions took place. One puts work back; the other helps explain what happened to it."],
        },
        {
          question: "How do audit logs support enterprise asset governance?",
          answer: ["They supply its accountability. ", { text: "Enterprise asset governance", page: 179 }, " combines roles, permissions, audit logs, authentication and organisational policies, and the record is how an organisation checks whether the other parts were respected."],
        },
        {
          question: "Where should a team look to see who viewed or downloaded a particular asset?",
          answer: ["At the asset’s own activity history. With ", { text: "asset activity", page: 118 }, ", views, downloads, edits and approvals can become part of that history, while audit logs keep the wider record of important actions across the platform."],
        },
      ],
      sources: [{ kind: "pdf", page: 92 }, { kind: "pdf", page: 179 }, { kind: "pdf", page: 118 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on records and accountability",
      variant: "compact",
      pages: [119, 170, 118, 92, 179],
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
