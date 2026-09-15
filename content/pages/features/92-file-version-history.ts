/**
 * 92 · File Version History — /features/file-version-history
 *
 * Angle (cluster: versioning): the version record itself — what it holds, the questions it answers, and restoring an
 * older version from it. Creative Asset Versioning (91) owns replacing in place, Version Restore (94) the decision to
 * go back, Creative File History (95) the wider context of change, and Asset History (117) interactions in general.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of why teams keep version records; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 92,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Versioning & Asset Management",
      lede: "What a file’s version history holds, the questions it settles when someone needs an earlier file, and how an older version can be restored from that record instead of being rebuilt.",
      visual: { diagram: "version-record", focus: "versions" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 92 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A record of the files an asset used to be",
      body: [
        "Version history in GetSibu gives teams a record of an asset’s previous versions, and it allows an older version to be restored when that is required.",
        "A record like this earns its keep when something has already been questioned. A client asks for the headline from an earlier round; a reviewer asks precisely what was sent out; an editor needs the grade from before a colour change. Without a history, each request becomes a hunt through attachments and download folders, with no certainty that the file found is the one that was actually used.",
        [
          "Version history is the file-level part of a wider picture. ",
          { text: "Asset history", page: 117 },
          " covers relevant changes and interactions with an asset, ",
          { text: "creative file history", page: 95 },
          " is about the context of how it changed over time, and ",
          { text: "creative revision tracking", page: 100 },
          " is concerned with what changed between versions and which one is active.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Previous versions kept as a record", "One history per asset", "Older versions restorable", "Evidence of what existed before", "Separate from the audit trail"],
      },
      highlight: {
        heading: "In practice",
        body: "A stakeholder asks about the layout that was circulated before the latest changes. That earlier file is part of the asset’s version history, not something to dig out of somebody’s sent mail.",
        tags: ["Brand", "Marketing", "Agencies"],
      },
      glance: {
        heading: "Version history in brief",
        facts: [
          { label: "Records", value: "Previous versions of an asset" },
          { label: "Allows", value: "Restoring an older version" },
          { label: "Part of", value: "Creative Asset Versioning" },
          { label: "Broader record", value: "Asset History" },
        ],
        actions: [{ kind: "route", path: "/features/asset-management", label: "More in Versioning & Asset Management" }]
      },
      sources: [{ kind: "pdf", page: 92 }, { kind: "pdf", page: 117 }, { kind: "pdf", page: 95 }, { kind: "pdf", page: 100 }, { kind: "pdf", page: 91 }, EXPLAINS],
    },
    {
      kind: "timeline",
      id: "example-record",
      eyebrow: "An example record",
      heading: "How one brochure cover builds up a history",
      intro: "A hypothetical cover shows the record growing over a project, with each replacement adding to it.",
      items: [
        { label: "First upload", body: "The cover draft is added to the library. For now the asset has a current file and nothing behind it." },
        { label: "Revision after feedback", body: "The designer replaces the draft with a revised cover, and the draft becomes the first earlier version in the record." },
        { label: "Late copy change", body: "A line of copy changes before print, so the cover is replaced once more and the previous revision joins the history." },
        { label: "A change of heart", body: "Stakeholders decide the earlier image worked better, so that version is restored rather than recreated from memory." },
        { label: "After printing", body: "The rounds that led to the printed cover remain in the record, so the route to the final file can be retraced later." },
      ],
      sources: [{ kind: "pdf", page: 92 }, { kind: "pdf", page: 93 }, { kind: "pdf", page: 94 }, { kind: "editorial", note: "Illustrative example; the brochure and team are hypothetical." }],
    },
    {
      kind: "tabs",
      id: "questions",
      eyebrow: "Why it matters",
      heading: "Three questions a version history can answer",
      tabs: [
        {
          label: "What was there?",
          heading: "Keep a file as it was before a change",
          icon: "history",
          body: [
            "A later round can remove something that turns out to matter: a disclaimer, a photographer’s credit, a product that has since come back into the range. The history keeps earlier files as they were rather than as someone remembers them.",
            "That is especially useful when the person who made the change has moved on and nobody else knows what the previous file contained.",
          ],
          points: ["Earlier files as they were", "No dependence on memory or old attachments"],
        },
        {
          label: "What was used?",
          heading: "Narrow down which file went out",
          icon: "approval",
          body: [
            "When a question comes up after publication, the most useful answer is the file itself. Keeping earlier versions with the asset puts the candidates in one place instead of across inboxes.",
            ["Alongside the versions, ", { text: "approval history", page: 77 }, " provides a record of review activity that reduces confusion around which version was accepted."],
          ],
          points: ["Candidates kept together", "Review activity recorded separately"],
        },
        {
          label: "Can we go back?",
          heading: "Return to an earlier file without rebuilding it",
          icon: "restore",
          body: [
            "Recreating an old version from a layered source file or an exported copy is slow, and the result may not match what was approved. Restoring the version itself avoids both problems.",
            ["The decision of when to go back, and what to check first, is covered under ", { text: "version restore", page: 94 }, "."],
          ],
          points: ["The original earlier file, not a rebuild", "A deliberate choice, not a default"],
        },
      ],
      sources: [{ kind: "pdf", page: 92 }, { kind: "pdf", page: 386 }, { kind: "pdf", page: 77 }, { kind: "pdf", page: 94 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A retailer’s query settled from the record",
      team: "A brand team",
      situation: "Some time after a pack redesign, a retailer asks whether an older pack shot it holds is still correct. The brand team needs to know what the image looked like before the redesign.",
      steps: [
        { heading: "Start from the asset", body: "The pack shot is one asset, so the team opens it directly instead of searching old folders for exported copies." },
        { heading: "Check the record", body: "The version history is the record of the pack shot’s previous versions, including the image in use before the redesign." },
        { heading: "Understand why it changed", body: ["The discussion on the asset shows ", { text: "how the feedback evolved", page: 75 }, " during the redesign, which explains what was altered and why."] },
        { heading: "Reply from the record", body: "The team answers the retailer from what the asset’s history holds, rather than from a colleague’s best recollection." },
      ],
      outcome: "The query is settled from the asset’s own record, and the current pack shot stays in place because nothing needed to be restored.",
      link: { page: 214, label: "GetSibu for Brand Teams" },
      sources: [{ kind: "pdf", page: 92 }, { kind: "pdf", page: 75 }, { kind: "pdf", page: 214 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about file version history",
      items: [
        {
          question: "What does a file version history record?",
          answer: "It records an asset’s previous versions, so the files that came before the current one stay available and an older one can be restored when required.",
        },
        {
          question: "Does each asset keep a version history of its own?",
          answer: "Yes. Versions are maintained within the asset record, so the history belongs to the piece of work itself rather than to a folder, a project or the person who last saved it.",
        },
        {
          question: "Is file version history the same as an asset audit trail?",
          answer: ["No. Version history concerns the files themselves, while the ", { text: "asset audit trail", page: 119 }, " provides visibility into important actions performed on creative files."],
        },
        {
          question: "Why keep a file version history if only the current file is ever used?",
          answer: "Because questions about earlier files tend to arrive after the fact: a query about what was published, a request to revisit an abandoned direction, or a replacement that needs undoing.",
        },
      ],
      sources: [{ kind: "pdf", page: 92 }, { kind: "pdf", page: 93 }, { kind: "pdf", page: 386 }, { kind: "pdf", page: 119 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on version records",
      variant: "compact",
      pages: [91, 94, 95, 100, 117, 77],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Bring Order to Creative Chaos",
      conversionPage: 399,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 399 }],
    },
  ],
};

export default page;
