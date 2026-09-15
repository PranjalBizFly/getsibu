/**
 * 196 · Library Health Analytics — /analytics/library-health-analytics
 *
 * Angle (clusters: library-analytics, library-maintenance): the diagnostic view of a library's condition —
 * growth, duplicates, inactive content and other organisational patterns — and how to turn it into focused
 * upkeep. Creative Library Maintenance (111) owns the upkeep itself; Asset Usage Analytics (182) owns attention.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of library upkeep practice; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 196,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Analytics",
      lede: "Use library health analytics to notice growth, duplicate copies and inactive content before they turn into clutter, and to decide which kind of upkeep your creative library needs next.",
      visual: { diagram: "library-activity", focus: "cadence" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 196 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Is the library staying in good order as it grows?",
      body: [
        "Library health analytics in GetSibu can reveal growth, duplicates, inactive content and other organisational patterns. Where most views of activity answer a question about what people did, a health view asks about the condition of the library itself.",
        "Libraries seldom decline through a single bad decision. Copies pile up because saving another is quicker than finding the original, campaigns close without their material being retired, and tags drift as new people join. Each habit is harmless in isolation. Together they produce a library in which search returns too much and the right asset hides among near-identical ones.",
        [
          "Health is where analytics meet upkeep. ",
          { text: "Creative library maintenance", page: 111 },
          " helps prevent a library from becoming cluttered with duplicate, obsolete or poorly classified content, and ",
          { text: "AI duplicate detection", page: 40 },
          " combines exact and perceptual hashing to identify identical files and visually equivalent copies, including renamed or re-encoded ones.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Growth set against organisation effort", "Copies competing for attention", "Inactive content crowding results", "Classification that drifts", "Diagnosis before clean-up"],
      },
      highlight: {
        heading: "In practice",
        body: "Before a planned clean-up, a library manager uses the health picture to decide whether duplicates, inactive campaign material or the pace of growth deserves the team’s limited time first.",
        tags: ["Library managers", "Upkeep", "Priorities"],
      },
      glance: {
        heading: "Library health in brief",
        facts: [
          { label: "Area", value: "Analytics" },
          { label: "Reveals", value: "Growth, duplicates, inactive content and organisational patterns" },
          { label: "Upkeep", value: "Creative Library Maintenance", page: 111 },
          { label: "Part of", value: "Creative Asset Analytics", page: 181 },
        ],
      },
      sources: [{ kind: "pdf", page: 196 }, { kind: "pdf", page: 111 }, { kind: "pdf", page: 40 }, { kind: "pdf", page: 181 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "signals",
      eyebrow: "What health covers",
      heading: "Five questions about a library’s condition",
      items: [
        {
          heading: "Is growth outpacing organisation?",
          body: "Expansion only becomes a health concern when describing and arranging new material falls behind it. Storage growth analytics add historical context about how quickly the library is expanding.",
          icon: "trend",
          points: ["Pace of expansion compared with upkeep", "Description that keeps up or falls behind"],
          page: 149,
        },
        {
          heading: "Are copies splitting attention?",
          body: "Near-identical files divide use between them and occupy space nobody intended to fill. Duplicate asset management helps identify unnecessary copies and can support storage optimisation.",
          icon: "copy",
          points: ["Renamed and re-exported versions of one file", "Space that may be reclaimable"],
          page: 112,
        },
        {
          heading: "Is inactive material in the way?",
          body: "Content nobody uses still competes with current work whenever someone searches. Usage tracking helps teams understand which assets are being used and which remain inactive.",
          icon: "archive",
          points: ["Closed campaigns still surfacing", "Candidates for archiving or expiry"],
          page: 106,
        },
        {
          heading: "Does the vocabulary still fit?",
          body: "A health review also considers how well the library is described. Tag analytics identify frequently used or searched tags, which can help show whether the terms on assets match the terms people look for.",
          icon: "tag",
          points: ["Competing terms for one idea", "Assets described too thinly to surface"],
          page: 186,
        },
        {
          heading: "Can people tell what is ready?",
          body: "Material without a clear state leaves colleagues unsure what they may use. Asset statuses help teams distinguish drafts, approved content and other workflow states.",
          icon: "approval",
          points: ["Drafts mistaken for finished work", "Approved material that looks provisional"],
          page: 102,
        },
      ],
      sources: [{ kind: "pdf", page: 196 }, { kind: "pdf", page: 149 }, { kind: "pdf", page: 112 }, { kind: "pdf", page: 106 }, { kind: "pdf", page: 186 }, { kind: "pdf", page: 102 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "health-check",
      eyebrow: "Step by step",
      heading: "A library health check your team can repeat",
      intro: "A short review that turns health signals into a modest, focused amount of upkeep.",
      steps: [
        { heading: "Set the growth context", body: "Begin with how much the library has grown since the previous check, and note any imports or large productions so their effect is not read as a problem.", icon: "trend" },
        { heading: "Settle the duplicates", body: "Turn to copies next, and agree with the people who own the material which version should remain before anyone removes the others.", icon: "copy" },
        { heading: "Retire or archive quiet material", body: "Decide whether inactive content is finished or simply seldom needed; archiving keeps historical material without letting it interfere with everyday discovery.", icon: "archive", page: 108 },
        { heading: "Tidy the vocabulary", body: "Where several tags describe the same idea, decide which term the team prefers and whether the others belong as synonyms or as narrower tags in a hierarchy.", icon: "tag", page: 8 },
        { heading: "Record what changed", body: "Write down the actions taken, so the next check shows whether the library has improved or the same problems have returned.", icon: "history" },
      ],
      sources: [{ kind: "pdf", page: 108 }, { kind: "pdf", page: 8 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "reading",
      eyebrow: "Considerations",
      heading: "Reading health signals without overreacting",
      items: [
        {
          heading: "Growth is not a symptom",
          summary: "A library that expands quickly can be in excellent condition.",
          icon: "trend",
          body: [
            "Growth reflects how much work an organisation produces. It turns into a concern only when the effort of describing, reviewing and retiring material falls behind. Read expansion alongside classification and use before treating it as something to fix.",
          ],
        },
        {
          heading: "Some copies are deliberate",
          summary: "Not every duplicate is waste.",
          icon: "copy",
          body: [
            "A file prepared for one channel can look almost identical to the original it came from and still serve a separate purpose. Before removing anything, ask whether the copy exists by accident or by design, and whether anyone still depends on it.",
          ],
        },
        {
          heading: "Inactivity depends on purpose",
          summary: "Reference material can stay untouched for long periods and remain essential.",
          icon: "clock",
          body: [
            [
              "Brand guidelines, signed agreements and archive footage may go unopened for a long time, then matter enormously on the day they are needed. Low activity alone is a weak reason to retire them. ",
              { text: "Expiry information", page: 104 },
              " can help teams identify content that should no longer be used after a specified period, which is a firmer basis for retirement.",
            ],
          ],
        },
        {
          heading: "Condition is a direction, not a verdict",
          summary: "One check describes the library today; several show whether upkeep keeps pace.",
          icon: "gauge",
          body: [
            [
              "A single review can make a library look worse than it is, especially straight after a migration or a busy season. Comparing checks over time is more telling, and ",
              { text: "creative library trends", page: 187 },
              " help organisations understand how the library changes across that span.",
            ],
          ],
        },
        {
          heading: "Removal is a governance decision",
          summary: "Clean-up affects other teams, so decide who may act before acting.",
          icon: "shield",
          body: [
            [
              { text: "Asset deletion", page: 109 },
              " lets authorised users remove assets according to organisational policies and permissions. Agree those policies before a health check becomes a clean-up, so nobody removes material another team still relies on.",
            ],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 104 }, { kind: "pdf", page: 187 }, { kind: "pdf", page: 109 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about library health analytics",
      items: [
        {
          question: "What counts as an organisational pattern in library health analytics?",
          answer: [
            "Growth, duplicates and inactive content are the examples named. Other questions about how a library is arranged, such as whether its folders still fit the work, may call for a neighbouring view: ",
            { text: "folder access analytics", page: 198 },
            " help show which areas of the library receive attention.",
          ],
        },
        {
          question: "How do library health analytics differ from library maintenance?",
          answer: [
            "Health analytics point to where attention is needed; ",
            { text: "maintenance", page: 111 },
            " is the ongoing work that follows. A good health view makes that work smaller, because effort goes to the problems that actually exist.",
          ],
        },
        {
          question: "Can library health analytics support a case for reclaiming storage?",
          answer: [
            "They can start one. Once duplicates are visible, ",
            { text: "duplicate reduction", page: 350 },
            " can help cut unnecessary storage consumption and remove the confusion that several copies of one file cause.",
          ],
        },
        {
          question: "When is a good moment for a library health check?",
          answer: "The close of a campaign or production is a natural point, because finished material is easiest to judge while the people who made it still remember its purpose.",
        },
        {
          question: "Who should act on what library health analytics show?",
          answer: "A library manager usually leads, with the owners of the material involved in any decision to archive or remove it, since they know whether an apparently idle file still serves a purpose.",
        },
      ],
      sources: [{ kind: "pdf", page: 196 }, { kind: "pdf", page: 198 }, { kind: "pdf", page: 111 }, { kind: "pdf", page: 350 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on keeping a library in good order",
      variant: "compact",
      pages: [111, 112, 106, 108, 187, 181],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Scale Your Creative Library",
      conversionPage: 397,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 397 }],
    },
  ],
};

export default page;
