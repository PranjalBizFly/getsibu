/**
 * 115 · Asset Ownership — /features/asset-ownership
 *
 * Angle (cluster: audit-history): ownership as context on who created or uploaded content, the questions that
 * context answers, and how creator, uploader and accountable owner differ. Asset Attribution (116) owns creators and
 * contributors kept through collaboration and migration; Asset History (117) the record of changes and interactions.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of asset ownership in shared creative libraries; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 115,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Versioning & Asset Management",
      lede: "Why knowing who created or uploaded an asset matters, how creator, uploader and accountable owner differ, and the everyday questions about reuse, problems and provenance that ownership context helps a team answer.",
      visual: { diagram: "version-record", focus: "audit" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 115 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Knowing where an asset came from, and whom to ask",
      body: [
        "Asset ownership in GetSibu provides context about who created or uploaded a piece of content.",
        "Every asset eventually raises a question only a person can answer: whether a photograph may be used in a new market, why a layout breaks the grid, whether a newer delivery exists somewhere. Without ownership context, the question goes to whoever seems likely to know, then to the next person, until someone gives up and uses the file anyway or commissions it again.",
        [
          "Ownership is where an asset’s story starts, not the whole of it. ",
          { text: "Asset attribution", page: 116 },
          " keeps creators and contributors associated with assets through collaboration and migration, and ",
          { text: "asset history", page: 117 },
          " gives users a record of relevant changes and interactions.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Who created the content", "Who uploaded it", "Creator and uploader can differ", "A person to ask", "Accountability agreed by the team"],
      },
      highlight: {
        heading: "In practice",
        body: "A marketer finds a striking illustration with no campaign attached. The designer who uploaded it explains that it was drawn for a pitch the client turned down, so the marketer looks elsewhere.",
        tags: ["Marketing", "Design", "Reuse"],
      },
      glance: {
        heading: "Ownership in brief",
        facts: [
          { label: "Provides", value: "Context on who created or uploaded content" },
          { label: "Area", value: "Versioning & Asset Management" },
          { label: "Contributors", value: "Asset Attribution", page: 116 },
          { label: "Wider record", value: "Asset History", page: 117 },
        ],
        actions: [{ kind: "route", path: "/features/asset-management", label: "More in Versioning & Asset Management" }]
      },
      sources: [{ kind: "pdf", page: 115 }, { kind: "pdf", page: 116 }, { kind: "pdf", page: 117 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "three-meanings",
      eyebrow: "Three different people",
      heading: "Creator, uploader and accountable owner are not always one person",
      intro: "Ownership context covers who created or uploaded content; who is accountable for it now is something a team agrees for itself.",
      columns: ["Who it is", "Typical example", "The question it answers"],
      rows: [
        { label: "Creator", cells: ["The person who made the work", "A photographer, illustrator or editor", "Who knows how and why it was made?"] },
        { label: "Uploader", cells: ["The person who added it to the library", "A coordinator bringing in an agency delivery", "Where did this file come from?"] },
        { label: "Accountable owner", cells: ["The person or team responsible for it today", "The brand lead for identity assets", "Who decides what happens to it next?"] },
      ],
      sources: [{ kind: "pdf", page: 115 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A designer changes role without taking the library’s memory along",
      team: "A creative studio",
      situation: "The senior designer who looked after a client’s packaging artwork is moving to a different team inside the studio. Much of what the studio knows about those files is in her head.",
      steps: [
        {
          heading: "Find what she brought in",
          body: ["The studio narrows the library using ", { text: "search filters", page: 13 }, " that include the uploader, which shows the packaging assets she added over the years."],
        },
        {
          heading: "Separate live work from finished work",
          body: "Together they sort those assets into artwork still in production and packaging that has already been printed.",
        },
        {
          heading: "Write down what only she knows",
          body: ["On the live assets she leaves ", { text: "comments", page: 62 }, " explaining unusual decisions, such as a colour held back for a printer’s limits, and which typefaces are licensed for the client."],
        },
        {
          heading: "Name who is accountable now",
          body: "A colleague takes on responsibility for the packaging area, while the ownership context continues to show who created or uploaded each file.",
        },
        {
          heading: "Keep her within reach",
          body: "When a question about an old decision comes up, her successor asks her directly rather than guessing, since she is still in the studio.",
        },
      ],
      outcome: "The client’s packaging keeps its continuity through the change, and the designer’s knowledge stays attached to the artwork rather than leaving with her.",
      link: { page: 220, label: "GetSibu for Creative Studios" },
      sources: [{ kind: "pdf", page: 115 }, { kind: "pdf", page: 13 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 220 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "capabilities",
      id: "questions",
      eyebrow: "Where ownership context helps",
      heading: "Everyday questions that start with “whose is this?”",
      items: [
        {
          heading: "Can we use it again?",
          body: "Reuse depends on terms agreed with whoever made or supplied the work, so knowing the creator is the first step towards finding them. Expiry information can help identify content that should no longer be used after a specified period.",
          icon: "refresh",
          page: 104,
          points: ["Licences and releases traced to a source", "Terms checked before reuse"],
        },
        {
          heading: "Where did this delivery come from?",
          body: "Embedded details such as EXIF, XMP and creators can become part of the asset record, which helps explain a file that arrived from an agency or a shoot.",
          icon: "document",
          page: 22,
          points: ["Details carried in the file itself"],
        },
        {
          heading: "Something is wrong with it",
          body: "A mistake is usually easiest to fix with the person who made or added the asset, and mentions bring the right collaborator into an asset-specific discussion.",
          icon: "flag",
          page: 86,
        },
        {
          heading: "What should happen to it now?",
          body: "Decisions late in an asset’s life, such as archiving or removal, go better when someone can speak for the work and the people who rely on it.",
          icon: "archive",
          page: 101,
        },
      ],
      sources: [{ kind: "pdf", page: 104 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 86 }, { kind: "pdf", page: 101 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about asset ownership",
      items: [
        {
          question: "Does asset ownership mean only the owner can change an asset?",
          answer: ["No. Ownership gives context about where content came from. What anyone may do with an asset, including editing or approving it, is decided through ", { text: "creative asset governance", page: 114 }, " and the permissions that apply to it."],
        },
        {
          question: "How is asset ownership different from contributor analytics?",
          answer: ["Ownership is context on an individual asset. ", { text: "Contributor analytics", page: 185 }, " look across the whole library to help organisations understand who is adding content and taking part in library activity."],
        },
        {
          question: "Who owns assets delivered by an agency or a freelance photographer?",
          answer: "The contract decides that, not the library. Legal ownership and usage rights sit in the agreement with the agency or photographer, so record its key terms alongside the delivered files where colleagues will see them before any reuse.",
        },
        {
          question: "What goes wrong with assets that have no clear owner?",
          answer: "Nobody corrects them, vouches for them or decides when they should be retired, so they stay in circulation by default. Orphaned assets are often the ones behind outdated material turning up in new work.",
        },
      ],
      sources: [{ kind: "pdf", page: 114 }, { kind: "pdf", page: 185 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on the people behind an asset",
      variant: "compact",
      pages: [116, 117, 185, 114, 104, 220],
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
