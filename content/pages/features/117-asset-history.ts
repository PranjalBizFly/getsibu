/**
 * 117 · Asset History — /features/asset-history
 *
 * Angle (cluster: audit-history): a record of relevant changes and interactions, read to find out what happened to
 * an asset and in what order. File Version History (92) owns earlier files; Creative File History (95) owns context
 * for understanding the work; Asset Activity (118) owns views, downloads, edits and approvals; Asset Audit Trail (119)
 * owns visibility into important actions.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of asset histories and how to read them; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 117,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Versioning & Asset Management",
      lede: "How changes to an asset differ from interactions with it, why a useful history leaves trivial events out, and how a trade marketing team used an asset’s record to find out why posters went to print with an old price.",
      visual: { diagram: "version-record", focus: "versions" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 117 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "One record of what has happened to an asset",
      body: [
        "Asset history in GetSibu gives users a record of the relevant changes and interactions in an asset’s life.",
        "Questions about an asset rarely concern the file alone. People want to know when something changed, who was involved, what was said and in what order it all happened, and the answers are usually scattered across inboxes, chat threads and recollections. A record held with the asset gives them somewhere to start that does not depend on anyone’s memory.",
        [
          "Narrower records sit within the idea, each covering part of the story, from the files an asset used to be to the conversation around it. ",
          { text: "Creative file history", page: 95 },
          " draws on them for context about how an asset has changed over time.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Relevant changes", "Relevant interactions", "Changes explained by interactions", "A record kept with the asset", "Reading instead of reconstructing"],
      },
      highlight: {
        heading: "In practice",
        body: "A designer back from leave opens a key visual and reads its history and discussion before touching the file, rather than asking around the team for an update.",
        tags: ["Designers", "Hand-overs", "Campaigns"],
      },
      glance: {
        heading: "Asset history in brief",
        facts: [
          { label: "Records", value: "Relevant changes and interactions" },
          { label: "Earlier files", value: "File Version History", page: 92 },
          { label: "Feedback", value: "Asset Discussion History", page: 75 },
          { label: "Accountability", value: "Asset Audit Trail", page: 119 },
        ],
        actions: [{ kind: "route", path: "/features/asset-management", label: "More in Versioning & Asset Management" }]
      },
      sources: [{ kind: "pdf", page: 117 }, { kind: "pdf", page: 95 }, { kind: "pdf", page: 92 }, { kind: "pdf", page: 75 }, { kind: "pdf", page: 119 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "reconstruct-or-read",
      eyebrow: "Two ways to find out what happened",
      heading: "Piecing an asset’s past together compared with reading its history",
      columns: ["Pieced together from inboxes and memory", "Read from the asset in GetSibu"],
      emphasis: 1,
      rows: [
        ["Picking up someone else’s work", "A briefing call and forwarded emails", "A record of relevant changes and interactions"],
        ["Finding an earlier state of the work", "A hunt through attachments and downloads", "Previous versions maintained within the asset record"],
        ["Understanding how feedback evolved", "Asking whoever was in the thread", "Discussion history kept with the asset"],
        ["Checking what was signed off", "Trusting someone’s recollection", "Approval history as a record of review activity"],
        ["When the people involved have moved on", "The context leaves with them", "The record stays with the asset"],
      ],
      sources: [{ kind: "pdf", page: 117 }, { kind: "pdf", page: 93 }, { kind: "pdf", page: 75 }, { kind: "pdf", page: 77 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "reading-history",
      eyebrow: "Reading a history well",
      heading: "Changes, interactions and what counts as relevant",
      tabs: [
        {
          label: "Changes",
          heading: "What was done to the asset",
          icon: "refresh",
          body: [
            "In general, changes alter the asset itself: a new file taking the old one’s place, a correction to its keywords, a move from one review state to another. Together they explain how the asset came to be as it is now.",
            "When reading changes, look first for the ones that altered meaning rather than form. A re-export at a different quality matters far less than a new headline, even though both are replacements.",
          ],
          points: ["How it reached its current state", "Changes of meaning before changes of form"],
        },
        {
          label: "Interactions",
          heading: "What was done with the asset",
          icon: "message",
          body: [
            "Interactions leave the asset as it is but involve it: a colleague comments on it, approves it or downloads it for a presentation. They answer different questions, such as whether others have been relying on the asset and what was said and decided along the way.",
            "Interactions also explain changes. A replacement usually follows a comment asking for it, and reading the two side by side shows cause and effect rather than a bare list of events.",
          ],
          points: ["Whether others rely on it", "Why the changes were made"],
        },
        {
          label: "Relevance",
          heading: "Why a useful history leaves things out",
          icon: "filter",
          body: [
            "A record of every trivial event would bury the ones that matter. The word “relevant” does real work here: a history earns its keep when someone can read it quickly and understand what happened.",
            "The same principle applies to what people add themselves. One comment explaining why a version was replaced is worth more than several that only say “updated”.",
          ],
          points: ["Readable rather than exhaustive", "Notes that explain, not just announce"],
        },
      ],
      sources: [{ kind: "pdf", page: 117 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "Posters printed with an old price, and a history that shows why",
      team: "A drinks brand’s trade marketing team",
      situation: "Point-of-sale posters for a promotion have gone to print showing the previous price. The trade marketing lead needs to understand how that happened before ordering a reprint.",
      steps: [
        {
          heading: "Start from the poster asset",
          body: "The lead opens the poster itself instead of working back through the printer’s email chain.",
        },
        {
          heading: "Read what changed",
          body: ["The poster has been replaced with a file carrying the corrected price, and its ", { text: "earlier versions", page: 92 }, " include the one with the old price that the printer received."],
        },
        {
          heading: "Read what was said",
          body: ["The ", { text: "discussion on the asset", page: 75 }, " shows how the feedback evolved: the price correction was only requested once the promotion’s terms changed."],
        },
        {
          heading: "Find the gap in the process",
          body: "The print files had already been emailed to the printer by then, and nobody told the printer that a correction was on its way.",
        },
        {
          heading: "Change the habit",
          body: ["The team agrees that print files are sent only once the poster’s ", { text: "review status", page: 76 }, " shows it has completed the approval process."],
        },
      ],
      outcome: "The reprint goes out with the right price, and the team fixes the step that failed instead of arguing about who was to blame.",
      link: { page: 213, label: "GetSibu for Marketing Teams" },
      sources: [{ kind: "pdf", page: 117 }, { kind: "pdf", page: 92 }, { kind: "pdf", page: 75 }, { kind: "pdf", page: 76 }, { kind: "pdf", page: 213 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about asset history",
      items: [
        {
          question: "What should you do when an asset’s history does not explain a change?",
          answer: ["Ask the people involved, then leave a ", { text: "comment on the asset", page: 62 }, " recording the answer, so the next person with the same question can read it instead of asking again."],
        },
        {
          question: "Who gets the most value from reading an asset’s history?",
          answer: "Account leads answering a client’s question about past work, reviewers returning to an asset several rounds after they last saw it, and library managers weighing whether an asset can be retired.",
        },
        {
          question: "How does asset history relate to the asset audit trail?",
          answer: ["They serve different purposes. Asset history is for understanding what happened to an asset, while the ", { text: "asset audit trail", page: 119 }, " provides visibility into important actions performed on creative files, which is the view to use when accountability is the question."],
        },
      ],
      sources: [{ kind: "pdf", page: 62 }, { kind: "pdf", page: 119 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on the records kept with an asset",
      variant: "compact",
      pages: [92, 75, 95, 118, 119, 213],
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
