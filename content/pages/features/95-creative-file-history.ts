/**
 * 95 · Creative File History — /features/creative-file-history
 *
 * Angle (cluster: versioning): context — how an asset changed over time and why that story matters to the next person
 * who uses it. File Version History (92) owns the record of files, Creative Revision Tracking (100) the difference
 * between versions, and 115–119 ownership, attribution, history, activity and the audit trail in their own right.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of why context around creative files matters; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 95,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Versioning & Asset Management",
      lede: "How the history of a creative file gives the asset in front of you its context: how it changed over time, and where to look for the feedback and decisions that shaped it.",
      visual: { diagram: "version-record", focus: "audit" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 95 }, { kind: "pdf", page: 75 }, { kind: "pdf", page: 77 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "The story behind the file you are about to change",
      body: [
        "Creative file history in GetSibu gives an asset context: a sense of how it has changed over the course of its life, rather than only what it looks like today.",
        "A finished asset hides its past. A logo lock-up looks settled, yet it may be the third attempt after a legal objection; a product shot may have been retouched to remove a detail that was later reinstated. Someone who picks up the asset without that context can undo a hard-won decision in good faith, or reopen a debate the team already closed.",
        "Context matters most when the people who made the decisions are no longer the ones using the asset: after a hand-over, a reorganisation or a change of agency. At that point, whatever was not kept with the asset has usually left with the people who knew it.",
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["How an asset changed over time", "Decisions behind the current file", "Feedback kept with the work", "Who created or uploaded it", "Context for newcomers to the work"],
      },
      highlight: {
        heading: "In practice",
        body: "A designer new to a brand wonders why a mascot is drawn without its usual hat. The notes on the asset show the choice was settled in review, so the designer leaves it alone.",
        tags: ["Hand-overs", "Brand", "Agencies"],
      },
      glance: {
        heading: "File history in brief",
        facts: [
          { label: "Provides", value: "Context on how an asset changed" },
          { label: "Earlier files", value: "File Version History" },
          { label: "Feedback", value: "Asset Discussion History", page: 75 },
          { label: "Broader record", value: "Asset History" },
        ],
        actions: [{ kind: "route", path: "/features/asset-management", label: "More in Versioning & Asset Management" }]
      },
      sources: [{ kind: "pdf", page: 95 }, { kind: "pdf", page: 92 }, { kind: "pdf", page: 75 }, { kind: "pdf", page: 117 }, EXPLAINS],
    },
    {
      kind: "layers",
      id: "layers-of-context",
      eyebrow: "What makes up the story",
      heading: "The layers of context around one asset",
      intro: "Each record answers a different question; read together, they explain why an asset is the way it is.",
      layers: [
        { label: "Origin", body: "Where the asset began: asset ownership provides context about who created or uploaded the content.", page: 115 },
        { label: "Earlier files", body: "What the asset used to be: its previous versions, kept as a record next to the current file." },
        { label: "Feedback", body: "Why it changed: discussion history lets a team understand how feedback on the asset evolved." },
        { label: "Decisions", body: "What was accepted: approval history records review activity and supports accountability for the outcome.", page: 77 },
        { label: "Handling", body: "What has happened to it since: views, downloads, edits and approvals can become part of its activity history.", page: 118 },
        { label: "Embedded detail", body: "What it carried in: metadata such as EXIF, XMP, file paths, creators and custom keywords can join the asset record." },
      ],
      sources: [{ kind: "pdf", page: 115 }, { kind: "pdf", page: 92 }, { kind: "pdf", page: 75 }, { kind: "pdf", page: 77 }, { kind: "pdf", page: 118 }, { kind: "pdf", page: 22 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A packaging refresh that starts by reading the history",
      team: "An in-house creative team",
      situation: "An in-house team begins refreshing a set of packaging illustrations. The designers who made the originals have moved on, and nobody remembers why certain choices were made.",
      steps: [
        { heading: "Start from the live assets", body: "The team opens each illustration as it stands today, rather than digging out old working files from a shared drive." },
        { heading: "Check the version record", body: "One illustration’s version history shows it was replaced several times before it reached its current form." },
        { heading: "Read the reasoning", body: "The discussion kept on the asset explains that an earlier, more detailed style was dropped because fine lines disappeared at small print sizes." },
        { heading: "Find someone to ask", body: "Ownership information points to the colleague who uploaded the files, who can still explain the original brief." },
        { heading: "Brief with the context", body: "The refresh brief notes which past decisions to keep and which to revisit, so the new work does not repeat an abandoned direction." },
      ],
      outcome: "The refresh builds on what the team learned the first time round instead of rediscovering it through another set of rejected drafts.",
      link: { page: 222, label: "GetSibu for In-House Creative Teams" },
      sources: [{ kind: "pdf", page: 92 }, { kind: "pdf", page: 75 }, { kind: "pdf", page: 115 }, { kind: "pdf", page: 222 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "accordion",
      id: "getting-context",
      eyebrow: "What to consider",
      heading: "Making file history worth reading later",
      items: [
        {
          heading: "Write feedback for a future reader",
          summary: "Comments that make sense in the moment can be cryptic a year later.",
          icon: "message",
          body: [
            "“Make it pop” or “as discussed” records that something changed without saying why. Naming the problem, the audience or the constraint turns a comment into context someone else can use.",
            "Because feedback stays connected to the asset rather than scattered across email and chat, those notes are there for whoever picks up the work next.",
          ],
          points: ["Say why, not only what", "Name the constraint behind a change"],
        },
        {
          heading: "Keep one piece of work in one asset",
          summary: "A story only hangs together if its rounds are not split across copies.",
          icon: "layers",
          body: [
            ["A history divided between “logo-final” and “logo-final-2” tells two half-stories. ", { text: "Replacing an asset in place", page: 91 }, " while previous versions are retained keeps the whole sequence in one record."],
          ],
        },
        {
          heading: "Protect context when libraries move",
          summary: "Migration is the moment history is most easily stripped away.",
          icon: "upload",
          body: [
            ["Files copied between systems often arrive without the details that explained them. ", { text: "Asset attribution", page: 116 }, " helps creators and contributors remain associated with assets during collaboration and migration, so the question of who made something can still be answered."],
          ],
        },
        {
          heading: "Use the right record for the question",
          summary: "Understanding the work and accounting for actions are different jobs.",
          icon: "audit",
          body: [
            ["File history is for understanding a piece of creative work. When the question is about accountability instead, the ", { text: "asset audit trail", page: 119 }, " provides visibility into important actions performed on creative files."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 73 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 116 }, { kind: "pdf", page: 119 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about creative file history",
      items: [
        {
          question: "Does creative file history replace a written brief?",
          answer: "No. A brief says what the work set out to do, while file history gives context on how the asset actually reached its current form. Read together, they give the fullest picture when the work is picked up again.",
        },
        {
          question: "How does creative file history differ from file version history?",
          answer: ["The ", { text: "file version history", page: 92 }, " is the record of previous files. Understanding how an asset changed usually also means reading the discussion kept on the asset, not only knowing that earlier versions exist."],
        },
        {
          question: "Why does the history of a creative file matter once a project is finished?",
          answer: "Because the next person to use the asset may not know what was tried and rejected. With that context to hand, they can build on those decisions rather than repeat them.",
        },
      ],
      sources: [{ kind: "pdf", page: 95 }, { kind: "pdf", page: 92 }, { kind: "pdf", page: 62 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on the history of an asset",
      variant: "compact",
      pages: [92, 75, 115, 116, 117, 119],
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
