/**
 * 75 · Asset Discussion History — /features/asset-discussion-history
 *
 * Angle (cluster: comments-feedback): discussion history as the record of how feedback evolved — what it reveals
 * that the latest comment or the approval does not, when it is worth reading, and how it differs from version,
 * approval and activity records. Asset Comments (62) owns the comment, Threaded Comments (63) threads, Approval
 * History (77) the approval record, Asset History (117) changes and interactions in general.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how teams use the history of feedback on creative work; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 75,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Collaboration",
      lede: "What asset discussion history shows a team about how feedback on a piece of work evolved, when that history is worth reading, and how it differs from the version, approval and activity records an asset also carries.",
      visual: { diagram: "version-record", focus: "audit" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 75 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "The reasoning behind a finished asset",
      body: [
        "Asset discussion history allows teams to understand how feedback evolved over time. A reader can follow how the conversation about a piece of work developed, from first reactions to the points that shaped the final result.",
        "Finished creative work hides its reasoning. A banner in the library shows the choices that were made, not the alternatives that were rejected, the concern that led to a different headline or the constraint that ruled out the first image. When the same questions return months later, from a new colleague, a client or a brand check, a team without that history can only guess or hold the debate again.",
        [
          "The history begins as ",
          { text: "comments on the asset", page: 62 },
          " and grows through ",
          { text: "threaded discussions", page: 63 },
          " about individual issues. Discussion history is what that conversation becomes once time has passed and the work has moved on.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["How feedback evolved over time", "Reasoning behind creative decisions", "Context for people who arrive later", "Different from version history", "Useful long after approval"],
      },
      highlight: {
        heading: "In practice",
        body: "A year after a packaging redesign, a new brand manager wonders why the product name moved. The asset’s discussion shows the retail feedback that prompted the change.",
        tags: ["Brand managers", "New team members", "Account leads"],
      },
      glance: {
        heading: "Discussion history in brief",
        facts: [
          { label: "Area", value: "Collaboration" },
          { label: "Shows", value: "How feedback on an asset evolved" },
          { label: "Sits beside", value: "Asset History", page: 117 },
          { label: "Kept organised by", value: "Creative Feedback Management", page: 74 },
        ],
        actions: [{ kind: "route", path: "/features/collaboration", label: "More in Collaboration" }]
      },
      sources: [{ kind: "pdf", page: 75 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 117 }, { kind: "pdf", page: 74 }, EXPLAINS],
    },
    {
      kind: "timeline",
      id: "evolution",
      eyebrow: "An illustration",
      heading: "How the discussion on one asset might evolve",
      intro: "A hypothetical product film, followed from its first cut to a question raised long after release.",
      items: [
        { label: "First viewing", body: "Early comments react to tone: the music feels slow and the opening shot does not show the product clearly." },
        { label: "Change of direction", body: "A thread about the opening grows into a wider debate, and the team agrees to open on the product in use rather than in its packaging." },
        { label: "Refinement", body: "Later rounds narrow to detail: the timing of the end card, the grade of one sequence, the wording of a claim." },
        { label: "Approval", body: "Remarks taper off, the remaining threads end with confirmations and the film is approved." },
        { label: "Months later", body: "A regional team asks why the film no longer opens on the pack. The discussion shows the reasoning, so the decision is explained instead of reopened." },
      ],
      sources: [{ kind: "pdf", page: 75 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 67 }, { kind: "editorial", note: "Illustrative sequence; the asset and team are hypothetical." }],
    },
    {
      kind: "matrix",
      id: "records",
      eyebrow: "Different records",
      heading: "Discussion history beside the other records an asset keeps",
      columns: ["What it holds", "The question it answers"],
      rows: [
        { label: "Asset discussion history", cells: ["How feedback on the asset evolved over time", "Why did the work change?"] },
        { label: "Version history", cells: ["Previous versions, which can be restored when required", "What did the work look like before?"], page: 92 },
        { label: "Approval history", cells: ["Review activity and which version was accepted", "Which version was signed off?"], page: 77 },
        { label: "Asset activity", cells: ["Views, downloads, edits and approvals", "What has been done with the asset?"], page: 118 },
      ],
      sources: [{ kind: "pdf", page: 75 }, { kind: "pdf", page: 92 }, { kind: "pdf", page: 77 }, { kind: "pdf", page: 118 }],
    },
    {
      kind: "tabs",
      id: "moments",
      eyebrow: "Moments of use",
      heading: "When discussion history earns its place",
      tabs: [
        {
          label: "Mid-project",
          heading: "Avoid reopening settled questions",
          icon: "refresh",
          body: [
            "In a long project the same point can resurface when a new reviewer joins or a stakeholder forgets what was agreed. Pointing to the earlier discussion settles it more quickly than rehearsing the argument again.",
            "It helps the creator too: seeing how a request developed over several rounds makes it easier to understand what the reviewer is really after.",
          ],
          points: ["Earlier agreements easy to point to", "Requests understood in full context"],
        },
        {
          label: "Handover",
          heading: "Pass on the reasoning, not just the files",
          icon: "user",
          body: [
            "When a designer moves on or an account changes hands, the files are the easy part to transfer. The judgement behind them usually lives in people’s heads.",
            ["Discussion history keeps that judgement with the asset, and ", { text: "asset attribution", page: 116 }, " keeps creators and contributors associated with the work, so a new owner can see what was decided and who was involved."],
          ],
          points: ["Reasoning handed over with the asset", "Contributors still linked to the work"],
        },
        {
          label: "Reuse",
          heading: "Check a decision before repeating it",
          icon: "copy",
          body: [
            "Reusing an approved asset somewhere new raises questions the original team may already have answered. Was this image avoided for a reason? Was this claim altered for a particular market?",
            "Reading the discussion first can stop a problem that was solved once from returning in a new campaign.",
          ],
          points: ["Past constraints visible before reuse", "Earlier fixes not undone by accident"],
        },
        {
          label: "Retrospective",
          heading: "Learn how the team gives feedback",
          icon: "trend",
          body: [
            "Looking back across several projects reveals patterns: points raised late every time, reviewers whose requests regularly conflict, rounds spent on issues a clearer brief would have prevented.",
            "Those observations improve the next brief and the next review in a way no single approval can.",
          ],
          points: ["Recurring late feedback spotted", "Clearer briefs next time"],
        },
      ],
      sources: [{ kind: "pdf", page: 75 }, { kind: "pdf", page: 116 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about asset discussion history",
      items: [
        {
          question: "How does asset discussion history relate to asset history?",
          answer: ["Discussion history concentrates on the conversation about the work. ", { text: "Asset history", page: 117 }, " gives users a broader record of relevant changes and interactions."],
        },
        {
          question: "Does asset discussion history still matter once an asset is approved?",
          answer: "Often more than before. Approval records the outcome, while the discussion records the reasoning, which is what people need when the work is questioned, reused or updated later.",
        },
        {
          question: "Is asset discussion history the same as the audit log?",
          answer: ["No. ", { text: "Audit logs", page: 326 }, " provide a historical record of important platform actions, including comments, permission changes and asset changes. Discussion history is about the substance of the feedback and how it developed."],
        },
      ],
      sources: [{ kind: "pdf", page: 75 }, { kind: "pdf", page: 117 }, { kind: "pdf", page: 68 }, { kind: "pdf", page: 326 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on the history of creative work",
      variant: "compact",
      pages: [63, 74, 77, 92, 117, 86],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the closest history and feedback topics." }],
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
