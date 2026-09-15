/**
 * 347 · Enterprise Asset Management Cost — /pricing/enterprise-asset-management-cost
 *
 * Angle (cluster: pricing-plans): cost considered alongside storage, productivity, collaboration and administrative
 * savings, in an enterprise where those savings are scattered across budgets. A whole-cost view against a price-only
 * view; no plans, prices, percentages or ROI figures. Creative Workflow ROI (348) and Asset Discovery ROI (349) own
 * the returns themselves; DAM Business Case (359) owns how the case is built.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how organisations weigh the cost of digital asset management; states no GetSibu capability beyond the cited pages, names no plan or price and supplies no figures." } as const;

const page: PageContent = {
  page: 347,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "centered",
      eyebrow: "Pricing",
      lede: "How to weigh what digital asset management costs against what it can save across a large organisation, which costs sit outside any price, and how to present the balance to the people who approve the spend.",
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 347 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A cost only makes sense beside what it replaces",
      body: [
        "The cost of digital asset management should be considered alongside storage, productivity, collaboration and administrative savings. In an enterprise those savings are spread across many budgets, which is exactly why they are easy to leave out.",
        "A platform’s price arrives as one clear line in one budget. The costs a library can reduce are scattered: storage paid for by IT, time lost searching charged to marketing and production, feedback chased across email by every team, and administrators maintaining folders and access by hand. Comparing the single visible cost with none of the scattered ones makes almost any investment look expensive; comparing it with optimistic guesses makes almost any investment look cheap.",
        [
          "A sound comparison sits between those extremes and rests on the organisation’s own evidence. ",
          { text: "Creative workflow ROI", page: 348 },
          " and ",
          { text: "asset discovery ROI", page: 349 },
          " look at where time can be returned, and a ",
          { text: "DAM business case", page: 359 },
          " brings that evidence together for decision-makers.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Cost set beside savings", "Savings spread across budgets", "Storage, productivity, collaboration, administration", "Costs that sit outside the price", "Evidence from your own organisation"],
      },
      highlight: {
        heading: "In practice",
        body: "An IT lead and a marketing director compare notes and realise that the storage costs a library could reduce sit in IT’s budget, while the search time it could return belongs to marketing. Neither sees the full case alone.",
        tags: ["IT", "Marketing", "Finance"],
      },
      glance: {
        heading: "Enterprise DAM cost in brief",
        facts: [
          { label: "Area", value: "Pricing" },
          { label: "Weighed against", value: "Storage, productivity, collaboration and administrative savings" },
          { label: "Common blind spot", value: "Savings held in other departments’ budgets" },
          { label: "Case for investment", value: "Why Invest in GetSibu", page: 360 },
        ],
        actions: [{ kind: "route", path: "/pricing", label: "More in Pricing" }]
      },
      sources: [{ kind: "pdf", page: 347 }, { kind: "pdf", page: 348 }, { kind: "pdf", page: 349 }, { kind: "pdf", page: 359 }, { kind: "pdf", page: 360 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "savings",
      eyebrow: "Kinds of saving",
      heading: "Where the savings from a library usually sit",
      tabs: [
        {
          label: "Storage",
          heading: "Space spent on copies and forgotten material",
          icon: "database",
          body: [
            "Enterprise storage fills with duplicates, superseded exports and archives kept in several places at once. Its cost is real but usually pooled with everything else IT pays for, so nobody attributes a share of it to creative work.",
            [
              "Understanding comes before reduction. ",
              { text: "Storage efficiency", page: 357 },
              " draws on duplicate detection and storage analytics, which can help teams better understand how their storage is being consumed; the finding belongs in the cost comparison even when the saving lands in another department’s budget.",
            ],
          ],
          points: ["Duplicates and superseded exports", "Savings that land in IT’s budget"],
        },
        {
          label: "Productivity",
          heading: "Time returned from finding and recreating",
          icon: "clock",
          body: [
            "Productivity savings tend to be the hardest to evidence. They appear as fewer requests asking where a file is, fewer assets rebuilt because the original stayed hidden, and less time spent looking through footage for a single shot.",
            [
              "The aim is described in ",
              { text: "creative productivity", page: 351 },
              ": by reducing manual organisation and asset-search work, GetSibu can help teams focus on higher-value creative activities. Estimates should come from observing your own teams over a representative period, not from assumptions.",
            ],
          ],
          points: ["Fewer where-is-it requests", "Less recreated work"],
        },
        {
          label: "Collaboration",
          heading: "Feedback that no longer travels between tools",
          icon: "message",
          body: [
            "Every note sent by email, repeated in chat and copied into a tracker costs time at each step, and every approval confirmed twice costs more. Across many teams and agencies the effort is considerable, yet it rarely appears in any report.",
            [
              { text: "Collaboration efficiency", page: 358 },
              " comes from contextual comments and approvals, which reduce the need to communicate asset-specific feedback across multiple disconnected tools.",
            ],
          ],
          points: ["Fewer messages about one asset", "Approvals confirmed once"],
        },
        {
          label: "Administration",
          heading: "Upkeep that automation and structure reduce",
          icon: "workflow",
          body: [
            "Administrators in large organisations spend time maintaining folder structures, correcting names and tags, and tidying up after each campaign. Much of that work is repetitive, which makes it a natural place to look for savings.",
            [
              "In ",
              { text: "asset management efficiency", page: 356 },
              ", automation helps reduce the repetitive work associated with tagging, organising and locating assets.",
            ],
          ],
          points: ["Tagging and organising by hand", "Tidying after every campaign"],
        },
      ],
      sources: [{ kind: "pdf", page: 347 }, { kind: "pdf", page: 357 }, { kind: "pdf", page: 351 }, { kind: "pdf", page: 358 }, { kind: "pdf", page: 356 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "whole-cost",
      eyebrow: "The full picture",
      heading: "A price-only view compared with a whole-cost view",
      columns: ["Price-only view", "Whole-cost view"],
      emphasis: 1,
      rows: [
        ["What is counted", "The platform’s price", "Price, moving in and running the library"],
        ["Existing costs", "Treated as nothing", "Storage, time and tools already paid for"],
        ["Moving in", "Left out", "Migration and changing habits included"],
        ["Savings", "Ignored or guessed", "Evidenced from the organisation’s own records"],
        ["Who takes part", "The budget holder alone", "IT, creative teams and administrators together"],
        ["Result", "A figure that is easy to challenge", "A balance decision-makers can test"],
      ],
      sources: [{ kind: "pdf", page: 347 }, EXPLAINS],
    },
    {
      kind: "checklist",
      id: "weigh",
      eyebrow: "What to weigh",
      heading: "What to weigh in an enterprise DAM cost comparison",
      variant: "chips",
      items: ["Storage spent on duplicate copies", "Time spent finding assets", "Work recreated instead of reused", "Feedback rounds across separate tools", "Manual tagging and tidying", "Effort of migrating existing libraries", "Time for teams to change habits", "Budgets where savings would land"],
      sources: [{ kind: "pdf", page: 347 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about enterprise asset management cost",
      items: [
        {
          question: "Does moving an enterprise library have to disrupt work while it happens?",
          answer: [
            "Not necessarily. ",
            { text: "Migration without downtime", page: 292 },
            " is designed to let organisations keep using existing storage while content is indexed in the background. The move still needs planning, so it stays in the cost comparison either way.",
          ],
        },
        {
          question: "How can savings be evidenced when they fall in other departments’ budgets?",
          answer: "Agree a shared measure with each department before the evaluation starts, such as a sample of requests for assets or a record of work recreated during a campaign. Evidence gathered jointly is harder to dismiss than a figure produced by the team that wants the investment.",
        },
        {
          question: "Can predictability count in an enterprise cost comparison?",
          answer: [
            "It can, even though it is hard to price. ",
            { text: "Creative operations efficiency", page: 355 },
            " describes how centralised search, metadata, approvals and analytics can make creative operations more predictable, and fewer surprises in delivery are worth describing in a business case without a figure attached.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 292 }, { kind: "pdf", page: 355 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on weighing the cost of a creative library",
      variant: "compact",
      pages: [359, 348, 349, 357, 345, 346],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the closest pricing pages." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Start Your Creative Library",
      conversionPage: 391,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 391 }],
    },
  ],
};

export default page;
