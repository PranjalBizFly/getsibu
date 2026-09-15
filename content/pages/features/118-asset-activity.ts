/**
 * 118 · Asset Activity — /features/asset-activity
 *
 * Angle (cluster: audit-history): views, downloads, edits and approvals as an asset's activity history; what each kind
 * says and the patterns worth noticing when they are read together on one asset. Asset History (117) owns changes and
 * interactions in general; Asset Audit Trail (119) owns important actions; Asset Activity Dashboard (191) and Access
 * History (171) own library-wide views.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of reading activity on creative assets; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 118,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Versioning & Asset Management",
      lede: "What views, downloads, edits and approvals each reveal about a single asset, and the patterns worth noticing when those kinds of activity are read together instead of one at a time.",
      visual: { diagram: "version-record", focus: "audit" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 118 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "What an asset’s activity says about how it is used",
      body: [
        "In GetSibu, views, downloads, edits and approvals can become part of an asset’s activity history.",
        "On their own, these are small facts about a single file. Read together, and set against what the asset was made for, they start to show whether it is doing its job and where a question needs asking. That makes activity most useful to the people responsible for particular assets, rather than as a measure of the library as a whole.",
        [
          "Across the library as a whole, the ",
          { text: "asset activity dashboard", page: 191 },
          " provides a visual overview of important library interactions, and ",
          { text: "access history", page: 171 },
          " provides information about important user interactions with the library. Asset activity looks at the same kind of information from one asset outwards.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Views", "Downloads", "Edits", "Approvals", "Patterns across activity", "One asset at a time"],
      },
      glance: {
        heading: "Asset activity in brief",
        facts: [
          { label: "Can include", value: "Views, downloads, edits and approvals" },
          { label: "Scope", value: "A single asset" },
          { label: "Broader record", value: "Asset History", page: 117 },
          { label: "Library-wide view", value: "Asset Activity Dashboard", page: 191 },
        ],
        actions: [{ kind: "route", path: "/features/asset-management", label: "More in Versioning & Asset Management" }]
      },
      sources: [{ kind: "pdf", page: 118 }, { kind: "pdf", page: 191 }, { kind: "pdf", page: 171 }, { kind: "pdf", page: 117 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "four-kinds",
      eyebrow: "Four kinds of activity",
      heading: "What each kind of activity tells you about an asset",
      items: [
        {
          heading: "Views",
          body: "Someone looked at the asset, perhaps while searching, reviewing or checking a detail. A view signals interest, which is not the same thing as use.",
          icon: "eye",
          points: ["Interest rather than use", "Shows assets considered and passed over"],
        },
        {
          heading: "Downloads",
          body: "A copy has been taken for use somewhere: a presentation, a print run or a partner. Of the four kinds, it is the closest sign of real use.",
          icon: "download",
          points: ["Closest to actual use", "A copy now outside the library"],
        },
        {
          heading: "Edits",
          body: "The asset itself has changed. An edit to approved work is worth a second look, because what was approved may differ from what people now open.",
          icon: "text",
          points: ["Changes to the asset", "Changes to approved work deserve a look"],
        },
        {
          heading: "Approvals",
          body: "Someone accountable judged the asset ready for use. It is the decision colleagues who never saw the review rely on when they choose to use the asset.",
          icon: "approval",
          page: 68,
          points: ["A judgement of readiness", "A decision others rely on"],
        },
      ],
      sources: [{ kind: "pdf", page: 118 }, { kind: "pdf", page: 68 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A new product overview that sales looked at and set aside",
      team: "A product marketing team",
      situation: "A product marketing team produced a new product overview for the sales team, yet sales managers keep sending prospects an older deck.",
      steps: [
        {
          heading: "Check the new overview’s activity",
          body: "Its activity history includes views, but downloads are rare.",
        },
        {
          heading: "Compare it with the old deck",
          body: "The older deck’s activity, by contrast, still includes regular downloads.",
        },
        {
          heading: "Ask what the pattern means",
          body: "Sales managers explain that the new overview lacks the implementation section prospects ask about, so they read it and fall back on the old deck.",
        },
        {
          heading: "Revise and replace",
          body: ["The team adds the missing section and ", { text: "replaces the document", page: 99 }, ", keeping its earlier versions on record."],
        },
        {
          heading: "Retire the old deck",
          body: ["The older deck is ", { text: "archived", page: 108 }, ", and the team keeps an eye on whether downloads now move to the revised overview."],
        },
      ],
      outcome: "Prospects start receiving current material, and the team learned what was missing from the activity on two assets rather than from a lost opportunity.",
      link: { page: 222, label: "GetSibu for In-House Creative Teams" },
      sources: [{ kind: "pdf", page: 118 }, { kind: "pdf", page: 99 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 222 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "accordion",
      id: "patterns",
      eyebrow: "Reading activity together",
      heading: "Patterns in an asset’s activity worth a closer look",
      items: [
        {
          heading: "Downloads of a draft",
          summary: "Copies of work still marked as a draft are leaving the library.",
          icon: "flag",
          body: [
            ["When a draft is downloaded repeatedly, people may not realise it is unfinished, or they may be too pressed for time to wait. ", { text: "Asset statuses", page: 102 }, " help teams tell drafts from approved content, and a clearly marked draft is the first defence against this pattern."],
          ],
          points: ["Check the status is clear", "Find out what people need it for"],
        },
        {
          heading: "Approved work that nobody opens",
          summary: "An approved asset with little activity has not started to pay off.",
          icon: "clock",
          body: [
            ["Approved work that shows few views or downloads often means the people who need the asset do not know it exists. ", { text: "Approved-only views", page: 103 }, " give colleagues access to content that has completed the required review, which is one way to close that gap."],
          ],
        },
        {
          heading: "Renewed interest in an old asset",
          summary: "Downloads of old material may be welcome reuse, or a mistake.",
          icon: "trend",
          body: [
            ["Someone may have rediscovered the asset for a new campaign, or picked up something out of date because it looked right. ", { text: "Expiry information", page: 104 }, " can help identify content that should no longer be used after a specified period, which quickly separates the two cases."],
          ],
        },
        {
          heading: "Edits that never settle",
          summary: "An asset that keeps changing may not have a settled brief.",
          icon: "refresh",
          body: [
            ["Repeated edits to an asset that is under review suggest the requirements are unclear rather than the work being careless. ", { text: "Creative review", page: 69 }, " provides a central place to inspect work, discuss changes and confirm final assets, which is where an unsettled brief is best resolved."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 102 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 104 }, { kind: "pdf", page: 69 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about asset activity",
      items: [
        {
          question: "How is asset activity different from asset history?",
          answer: ["Asset activity concentrates on four kinds of use and action: views, downloads, edits and approvals. ", { text: "Asset history", page: 117 }, " is the broader record of relevant changes and interactions in an asset’s life."],
        },
        {
          question: "Who should keep an eye on an asset’s activity?",
          answer: "Whoever is accountable for the asset, reviewers while it is moving through approval, and library managers for the assets many colleagues depend on.",
        },
        {
          question: "How does asset activity help when content has to be withdrawn?",
          answer: "It suggests how far the withdrawal has to reach. Retiring the asset deals with everyone who looks for it in the library; where its activity includes downloads, the teams likely to hold those copies also need to be told.",
        },
        {
          question: "Can asset activity replace asking people how they use an asset?",
          answer: "No. Activity records that something happened, not why, or whether the result was any good. Treat it as a prompt for a conversation with the people involved, especially before changing or retiring an asset others may depend on.",
        },
      ],
      sources: [{ kind: "pdf", page: 118 }, { kind: "pdf", page: 117 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on how assets are used and changed",
      variant: "compact",
      pages: [117, 191, 171, 102, 103, 104],
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
