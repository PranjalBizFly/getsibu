/**
 * 327 · Immutable Audit History — /security/immutable-audit-history (HELD: immutable-audit)
 *
 * Angle (cluster: audit-history): immutability of the records of privileged actions — why the accounts with the
 * most authority must not be able to rewrite the evidence of what they did. Audit Logs (326) owns the platform-wide
 * record, Asset Audit Trail (119) actions on files, Permission Auditing (170) access changes. States the claim only
 * in PDF 327 wording.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of audit record practice in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 327,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Security",
      lede: "Why the record of what administrators and other privileged accounts do has to stay out of their own reach, what makes an audit record unalterable in general, and what even a record nobody can change leaves unanswered.",
      visual: { diagram: "version-record", focus: "audit" },
      actions: [
        { kind: "global", cta: "primary" },
        { kind: "route", path: "/security", label: "More in Security" },
      ],
      sources: [{ kind: "pdf", page: 327 }, { kind: "pdf", page: 326 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A record the most powerful accounts cannot rewrite",
      body: [
        "Immutable audit records help organisations maintain reliable historical information about privileged actions. Immutable means an entry cannot be altered or removed once it has been written. Privileged actions are those taken by accounts with authority over other people’s access, the structure of the library or the way the platform is configured.",
        "Any ordinary log carries a conflict of interest. The accounts able to do the most harm are usually the same accounts trusted to run the system, and an administrator who could edit the record could also erase the evidence of a mistake or of misuse. A history is only as dependable as its protection from the people whose actions it describes.",
        [
          "In GetSibu, ",
          { text: "audit logs", page: 326 },
          " keep a historical record of important actions such as permission changes, comments and asset changes, and ",
          { text: "permission auditing", page: 170 },
          " means changes to permissions can be recorded, creating accountability around access. Immutability adds a different quality to that picture: confidence that the history of privileged actions still says what it originally said.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Entries that cannot be edited or removed", "Actions taken by privileged accounts", "Evidence beyond an administrator’s reach", "Tamper resistance and tamper evidence", "History that holds up to later questions"],
      },
      highlight: {
        heading: "In practice",
        body: "When an administrator is asked why a client folder was opened to a wider group, the answer can rest on entries the administrator had no way to change. That protects the organisation, and it protects an administrator who acted properly.",
        tags: ["Administrators", "Security", "Agencies"],
      },
      glance: {
        heading: "Immutable audit history in brief",
        facts: [
          { label: "Area", value: "Security" },
          { label: "Concerns", value: "Privileged actions" },
          { label: "Purpose", value: "Reliable historical information" },
          { label: "Wider record", value: "Audit Logs", page: 326 },
        ],
      },
      sources: [{ kind: "pdf", page: 327 }, { kind: "pdf", page: 326 }, { kind: "pdf", page: 170 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "key-terms",
      eyebrow: "Key terms",
      heading: "Ideas behind a record nobody can alter",
      items: [
        {
          heading: "Privileged action",
          summary: "An action that changes what other people can do, see or rely on.",
          icon: "key",
          body: [
            "Granting or withdrawing access, adding or removing users, changing organisation-wide settings and deleting content in bulk are typical examples in any system. What they share is reach: a single action affects many people or a large body of material.",
            [
              { text: "Organisation administrators", page: 158 },
              " hold wide authority in GetSibu, over access policies, users, folders and organisational settings together. Authority of that breadth is exactly what a reliable history of privileged actions exists to account for.",
            ],
          ],
        },
        {
          heading: "Append-only",
          summary: "New entries are added, but existing ones are never rewritten.",
          icon: "history",
          body: [
            "An append-only record grows in one direction. A mistake is corrected by adding a further entry that refers to the earlier one, so the original and the correction both stay visible. Bookkeepers corrected ledgers this way long before computers, for the same reason: nothing about the past is quietly replaced.",
          ],
        },
        {
          heading: "Tamper resistance and tamper evidence",
          summary: "One makes changing the record very hard; the other makes any change detectable.",
          icon: "shield",
          body: [
            "Tamper resistance comes from storage and access rules that do not allow entries to be modified. Tamper evidence adds a way of showing whether anything has changed, often by linking each entry cryptographically to the one before it, so that altering or removing an entry breaks the chain.",
            "Well-designed records generally combine the two. A barrier against change is far more persuasive when there is also a means of demonstrating that it held.",
          ],
        },
        {
          heading: "Separation of duties",
          summary: "The ability to act and the ability to manage evidence of acting belong with different people.",
          icon: "users",
          body: [
            "If whoever administers a system also administers its record, the record’s integrity depends on that person’s restraint. Placing the two responsibilities with different people, and letting someone other than the administrator read the history, removes that dependence and gives the record an independent reader.",
          ],
        },
        {
          heading: "Retention",
          summary: "A record that cannot be changed still needs a decision about how long it is kept.",
          icon: "clock",
          body: [
            [
              "Immutability says entries cannot change while they exist; it says nothing about how long they exist. That period is a matter for each organisation’s policies, contracts and legal obligations, and ",
              { text: "creative data governance", page: 339 },
              " is where rules around access, retention, usage and asset management are established.",
            ],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 158 }, { kind: "pdf", page: 339 }, EXPLAINS],
    },
    {
      kind: "workflow",
      id: "path-to-evidence",
      eyebrow: "In general",
      heading: "From a privileged action to evidence people can rely on",
      intro: "How a dependable record of privileged actions generally comes about, in any system that keeps one.",
      stages: [
        { label: "The action", body: "An account with elevated authority changes access, users, settings or content in a way that affects other people." },
        { label: "The entry", body: "The action is written down as it happens, with who acted, what changed and when, rather than reconstructed from memory afterwards." },
        { label: "The protection", body: "From then on the entry is beyond the reach of the account that caused it, however much authority that account holds." },
        { label: "The reading", body: "The history is consulted, either as a routine check or because a question about a particular change has been raised." },
        { label: "The conclusion", body: "Findings rest on entries that nobody involved could have edited, which makes them far easier to put in front of a client or a manager." },
      ],
      sources: [{ kind: "pdf", page: 327 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A former client questions who reopened its archive",
      team: "An agency’s operations team",
      situation: "A creative agency’s contract with a client has ended on poor terms. The former client alleges that an agency administrator reopened its archive to staff after the end date, and asks for proof either way.",
      steps: [
        { heading: "The question is narrowed", body: "The operations lead separates two things: whether access to the archive changed after the end date, and which account made any change." },
        { heading: "The access record is read", body: ["Because ", { text: "changes to permissions can be recorded in the audit history", page: 170 }, ", the lead can look for any change to the archive’s access after the end date."] },
        { heading: "Reliability becomes the point", body: "The administrator named in the complaint helps run the library, so the answer carries weight only if nobody in that position could have rewritten the history of what they did." },
        { heading: "The findings are shared", body: "The lead tells the former client what the history shows about the period in question, and explains that records of privileged actions are immutable." },
        { heading: "The archive is closed properly", body: "Whatever the entries show, the archive is closed to everyone who no longer needs it, and that change can be recorded in the history too." },
      ],
      outcome: "The discussion turns on a record both sides can examine, instead of on two competing recollections of what happened.",
      link: { page: 215, label: "GetSibu for Creative Agencies" },
      sources: [{ kind: "pdf", page: 327 }, { kind: "pdf", page: 170 }, { kind: "pdf", page: 215 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about immutable audit history",
      items: [
        {
          question: "Does immutable audit history help if an attacker takes over an administrator account?",
          answer: [
            "It does not stop what the attacker does, but it changes what they can hide. In general, entries that cannot be edited or removed keep a record of the attacker’s privileged actions even if they try to cover their tracks. Preventing the takeover is a separate job, where ",
            { text: "multi-factor authentication", page: 336 },
            " adds another layer of account protection.",
          ],
        },
        {
          question: "How does immutable audit history differ from the asset audit trail?",
          answer: [
            "The ",
            { text: "asset audit trail", page: 119 },
            " gives visibility into important actions performed on creative files. Immutability is about trust in a record: whether the history of privileged actions still holds when a person with authority is the subject of the question.",
          ],
        },
        {
          question: "What should a security review ask about immutable audit records?",
          answer: "Who, if anyone, can alter or remove entries; whether an attempted change would be detectable; which privileged actions are recorded; and how long the history is kept.",
        },
      ],
      sources: [{ kind: "pdf", page: 327 }, { kind: "pdf", page: 119 }, { kind: "pdf", page: 336 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on records and accountability for administrators",
      variant: "compact",
      pages: [326, 170, 119, 158, 339],
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
