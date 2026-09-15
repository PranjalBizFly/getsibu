/**
 * 120 · Complete Asset Management — /features/complete-asset-management
 *
 * Angle (cluster: platform-positioning): organisation, metadata, AI analysis, collaboration, versioning, approvals and
 * auditability combined into one asset management workflow; how the parts depend on one another and how to judge
 * whether a workflow is really complete. The Operating System for Creative Libraries (2) owns the platform idea;
 * Modern Digital Asset Management (7) the contrast with file storage; Creative Asset Lifecycle (107) the stages.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how asset management capabilities depend on each other; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 120,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Versioning & Asset Management",
      lede: "Why the parts of asset management are stronger together than apart, what each one relies on the others for, and the questions that show whether a workflow is genuinely joined up or just a collection of tools.",
      visual: { diagram: "version-record", focus: "lifecycle" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 120 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Seven capabilities working on the same assets",
      body: [
        "GetSibu combines organisation, metadata, AI analysis, collaboration, versioning, approvals and auditability into one asset management workflow.",
        "Completeness is easy to claim with a checklist and harder to deliver in practice. A team can own a tool for each of those jobs and still lose time at the joins: feedback about a file nobody can find, an approval recorded against a version that has since changed, tags produced in one place and ignored in another. What makes asset management complete is less the number of capabilities than whether they act on the same assets.",
        [
          "Stages are one way to look at assets, and the ",
          { text: "creative asset lifecycle", page: 107 },
          " sets them out from ingestion to archival. Treating asset management as one workflow asks something else: how the capabilities at work across those stages rely on one another.",
        ],
      ],
      keyPoints: {
        heading: "What is combined",
        items: ["Organisation", "Metadata", "AI analysis", "Collaboration", "Versioning", "Approvals", "Auditability"],
      },
      highlight: {
        heading: "In practice",
        body: "A campaign visual is found through its tags, discussed in comments, replaced in place when revised and marked approved, all as the same asset. Nobody has to reconcile what three separate tools say about it.",
        tags: ["Campaigns", "Operations", "Governance"],
      },
      glance: {
        heading: "Complete asset management in brief",
        facts: [
          { label: "Combines", value: "Seven asset management capabilities" },
          { label: "Platform view", value: "The Operating System for Creative Libraries", page: 2 },
          { label: "Stages", value: "Creative Asset Lifecycle", page: 107 },
          { label: "Audience", value: "Who Is GetSibu For?", page: 382 },
        ],
        actions: [{ kind: "route", path: "/features/asset-management", label: "More in Versioning & Asset Management" }]
      },
      sources: [{ kind: "pdf", page: 120 }, { kind: "pdf", page: 107 }, { kind: "pdf", page: 2 }, { kind: "pdf", page: 382 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "dependencies",
      eyebrow: "How the parts connect",
      heading: "What each capability gives the workflow, and what it relies on",
      intro: "Each part is weaker on its own; the links between them are where a single workflow proves its worth.",
      columns: ["What it contributes", "What it relies on"],
      rows: [
        { label: "Organisation", page: 8, cells: ["Folders and taxonomies that stay useful as the library grows", "Metadata and AI analysis to keep tagging from falling behind"] },
        { label: "Metadata", page: 22, cells: ["Context such as creators, keywords and embedded details in the asset record", "A consistent taxonomy, so the same things are described the same way"] },
        { label: "AI analysis", page: 9, cells: ["Recommended tags and classifications for a growing library", "People who approve, override and stay in control of the result"] },
        { label: "Collaboration", page: 61, cells: ["Discussion held inside the library instead of in disconnected tools", "Organisation, so the asset under discussion is one everyone can find"] },
        { label: "Versioning", page: 91, cells: ["Replacement in place, with previous versions retained", "Approvals that make clear which version was accepted"] },
        { label: "Approvals", page: 67, cells: ["A way to request review, make changes and mark assets approved", "Collaboration for the review that comes before a decision"] },
        { label: "Auditability", page: 326, cells: ["A historical record of important actions", "The other parts taking place where actions can be recorded"] },
      ],
      sources: [{ kind: "pdf", page: 8 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 9 }, { kind: "pdf", page: 61 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 77 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 326 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "moments",
      eyebrow: "Where the connections pay off",
      heading: "Three moments when one workflow makes the difference",
      tabs: [
        {
          label: "A new starter",
          heading: "Learning a library from the assets themselves",
          icon: "compass",
          body: [
            "Someone joining a team needs to find material and understand it. When organisation, metadata and discussion sit on the same assets, those two needs are met in one place rather than through a series of introductions to different systems and people.",
            [{ text: "Creative library navigation", page: 29 }, " lets users move between broad exploration through library views, folders, tags and collections and highly specific searches, which suits someone still learning where things live."],
          ],
          points: ["Finding and understanding in one place", "Broad exploration before specific searches"],
        },
        {
          label: "An urgent fix",
          heading: "Correcting something everyone is using",
          icon: "zap",
          body: [
            "A mistake in a widely used asset needs correcting, checking and signing off quickly. When revision and approval happen on the asset colleagues already use, there is no new file to announce, and less chance of the correction and the sign-off referring to different things.",
            [{ text: "Creative approval management", page: 89 }, " provides a structured process for moving assets from draft to approved status, and following it matters most when time is short."],
          ],
          points: ["Correction and sign-off on the same asset", "No new file to circulate"],
        },
        {
          label: "A later question",
          heading: "Answering from one record months afterwards",
          icon: "history",
          body: [
            "Questions about past work, such as which version was accepted and what feedback shaped it, cut across several capabilities at once. Answering them is far easier when those capabilities kept their records in the same place.",
            [{ text: "Asset history", page: 117 }, " gives users a record of relevant changes and interactions, so more of the answer can come from the asset rather than from recollection."],
          ],
          points: ["Questions that span several capabilities", "Answers from the record, not from memory"],
        },
      ],
      sources: [{ kind: "pdf", page: 29 }, { kind: "pdf", page: 89 }, { kind: "pdf", page: 117 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "judging",
      eyebrow: "Judging completeness",
      heading: "Questions that test whether asset management is really one workflow",
      items: [
        {
          heading: "Does context survive each hand-over?",
          summary: "Every move between tools is a chance to lose what was known about an asset.",
          icon: "workflow",
          body: [
            ["Follow one asset from upload to approval and note each point where information has to be copied, re-entered or explained again. A ", { text: "creative team workspace", page: 90 }, " where teams search, review, organise and collaborate around the same assets removes many of those points."],
          ],
          points: ["Trace one asset end to end", "Count the places context is re-entered"],
        },
        {
          heading: "Is there one answer to “which version is approved?”",
          summary: "Versions and approvals held apart tend to produce two answers, or none.",
          icon: "approval",
          body: [
            ["If the approved file lives in one place and the current file in another, colleagues must work out whether they match. ", { text: "Review status", page: 76 }, " gives a clear indication of whether an asset still needs attention or has completed the approval process, on the asset people actually use."],
          ],
        },
        {
          heading: "Can important actions be seen afterwards?",
          summary: "Auditability depends on the work happening inside the workflow.",
          icon: "audit",
          body: [
            ["Actions taken in side tools leave no trace where the asset lives. The ", { text: "asset audit trail", page: 119 }, " provides visibility into important actions performed on creative files, which is only complete when the work itself stays in the library."],
          ],
        },
        {
          heading: "Do the same permissions apply throughout?",
          summary: "Access rules that differ from tool to tool leave gaps between them.",
          icon: "lock",
          body: [
            ["A file protected in storage but shared freely in a review tool is not really protected. ", { text: "Secure creative collaboration", page: 180 }, " combines collaboration with permissions, so teams can work together without giving up control over sensitive assets."],
          ],
        },
        {
          heading: "Can the workflow be built on?",
          summary: "A complete workflow still has to fit the software around it.",
          icon: "api",
          body: [
            ["An asset library rarely stands alone, and other systems usually need to work with the same assets. GetSibu’s ", { text: "REST API", page: 253 }, " follows an API-first architecture, so developers can interact with the same platform capabilities that the interface uses."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 90 }, { kind: "pdf", page: 76 }, { kind: "pdf", page: 119 }, { kind: "pdf", page: 180 }, { kind: "pdf", page: 253 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about complete asset management",
      items: [
        {
          question: "Does complete asset management mean replacing every other tool a team uses?",
          answer: ["No. ", { text: "GetSibu integrations", page: 241 }, " are about connecting with the tools teams already use, so an organisation does not need to rebuild its existing creative workflow from scratch."],
        },
        {
          question: "Where should a team start if it cannot adopt complete asset management all at once?",
          answer: "With organisation and versioning for the assets in active use, since those address much of the everyday confusion. Approvals can follow where the risk of using the wrong content is highest, and tagging and metadata can deepen as the library grows.",
        },
        {
          question: "How does complete asset management relate to the operating system idea behind GetSibu?",
          answer: [{ text: "The operating system for creative libraries", page: 2 }, " is the wider idea of a whole platform. Complete asset management is the narrower part of that picture concerned with how assets are organised, described, discussed, revised, approved and accounted for."],
        },
      ],
      sources: [{ kind: "pdf", page: 241 }, { kind: "pdf", page: 2 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on how GetSibu fits together",
      variant: "compact",
      pages: [2, 7, 107, 326, 91, 67],
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
