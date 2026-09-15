/**
 * 195 · Creative Operations Analytics — /analytics/creative-operations-analytics
 *
 * Angle (cluster: team-analytics): the operations lens for leaders — how efficiently the asset library is used,
 * which operational questions library analytics can inform, and how to measure efficiency without distorting
 * creative work. Creative Team Analytics (199) owns how groups interact, Executive Asset Analytics (210) the
 * higher-level view, Creative Workflow Metrics (208) movement through upload, review and approval.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of creative operations practice; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 195,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Analytics",
      lede: "What leaders responsible for creative operations can learn about the way the organisation uses its asset library, and where finding, reusing and reviewing work runs into friction.",
      visual: { diagram: "library-activity", focus: "uploads" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 195 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Is the library making creative work easier?",
      body: [
        "Creative operations analytics help leaders understand how efficiently the organisation’s asset library is being used. The question is less about any single signal than about whether the library is doing the job it was brought in to do.",
        "Creative operations sits between the people who make work and the systems that hold it. Its leaders are asked why a campaign needed a reshoot when similar material existed, why approvals stall before launches, or why storage keeps growing. These are efficiency questions that cut across teams, tools and budgets, which is exactly why no single team can answer them from its own vantage point.",
        [
          "Centralised search, metadata, approvals and analytics can make ",
          { text: "creative operations more predictable", page: 355 },
          ". Analytics are how a leader sees whether that is happening, and ",
          { text: "creative workflow metrics", page: 208 },
          " help teams understand how assets move through upload, review and approval.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Efficiency of library use", "Friction in finding and reusing work", "Movement from upload to approval", "Storage that reflects the work", "Evidence for operational decisions"],
      },
      highlight: {
        heading: "In practice",
        body: "Preparing for a planning review, an operations director looks at how assets move through upload, review and approval, and sees that review is where campaign work tends to wait.",
        tags: ["Operations leaders", "Review flow", "Planning"],
      },
      glance: {
        heading: "Operations analytics in brief",
        facts: [
          { label: "Area", value: "Analytics" },
          { label: "For", value: "Leaders responsible for creative operations" },
          { label: "Workflow view", value: "Creative Workflow Metrics", page: 208 },
          { label: "Higher-level view", value: "Executive Asset Analytics", page: 210 },
        ],
        actions: [{ kind: "page", page: 181, label: "Creative Asset Analytics" }]
      },
      sources: [{ kind: "pdf", page: 195 }, { kind: "pdf", page: 355 }, { kind: "pdf", page: 208 }, { kind: "pdf", page: 210 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "questions",
      eyebrow: "Operational questions",
      heading: "Efficiency questions and the signals that inform them",
      columns: ["Signals to look at", "Where to act"],
      rows: [
        { label: "Are people finding what already exists?", cells: ["Most-searched tags and asset usage", "Tagging, synonyms and shared views"] },
        { label: "Is existing work being reused?", cells: ["Assets receiving attention or left underused", "Approved-only views and retagging"] },
        { label: "Where does work wait?", cells: ["Movement through upload, review and approval", "Reviewer capacity and responsibility"] },
        { label: "Does storage match the work?", cells: ["Storage by category, growth and duplicates", "Duplicate clean-up and archiving"] },
        { label: "Is the whole organisation involved?", cells: ["Contributors and activity by team", "Folder access for teams that are missing"] },
      ],
      sources: [{ kind: "pdf", page: 193 }, { kind: "pdf", page: 182 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 78 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 208 }, { kind: "pdf", page: 192 }, { kind: "pdf", page: 196 }, { kind: "pdf", page: 112 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 185 }, { kind: "pdf", page: 199 }, { kind: "pdf", page: 152 }, EXPLAINS],
    },
    {
      kind: "before-after",
      id: "anecdote-evidence",
      eyebrow: "What changes",
      heading: "Creative operations run on anecdote compared with evidence",
      beforeLabel: "Running on anecdote",
      afterLabel: "Running on library evidence",
      before: ["Reshoots ordered without checking the library", "Approval delays blamed on whoever complains", "Storage requests argued case by case", "Adoption assumed once the library launches", "Decisions settled by seniority"],
      after: ["Existing material checked through search and usage", "Waiting points located in the review workflow", "Storage explained by category and growth", "Participation visible across teams", "Decisions supported by library reporting"],
      sources: [{ kind: "pdf", page: 182 }, { kind: "pdf", page: 208 }, { kind: "pdf", page: 183 }, { kind: "pdf", page: 149 }, { kind: "pdf", page: 185 }, { kind: "pdf", page: 205 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "measuring",
      eyebrow: "Considerations",
      heading: "Measuring efficiency without distorting the work",
      items: [
        {
          heading: "Efficiency is not the only aim",
          summary: "A library that is quick to use can still hold the wrong material.",
          icon: "compass",
          body: [
            "Creative work involves exploration, false starts and discarded ideas. Use efficiency analytics to remove friction that helps nobody, such as hunting for files or chasing approvals, never as pressure to make creative judgements faster.",
          ],
        },
        {
          heading: "Keep each team in its own context",
          summary: "Teams with different work produce different patterns of activity.",
          icon: "users",
          body: [
            "A video team and a brand team will never look alike, and neither is less efficient for that.",
            ["Production teams can ", { text: "analyse media activity, uploads and video-related workflows", page: 201 }, ", while brand teams can use analytics to ", { text: "understand which approved assets are accessed and reused", page: 203 }, ". Judging each team against its own work keeps comparisons meaningful."],
          ],
        },
        {
          heading: "Look for friction, not blame",
          summary: "Slow stages usually reflect the process rather than the people in it.",
          icon: "workflow",
          body: [
            "When work waits in review, the cause is often too few reviewers, unclear responsibility or every approval routed through one person. Changing the route tends to help more than pressing the individuals on it.",
          ],
        },
        {
          heading: "Agree the questions before choosing measures",
          summary: "Analytics answer questions; they cannot choose them.",
          icon: "help",
          body: [
            ["Start from the operational decisions actually in front of the organisation, then pick the signals that inform them. ", { text: "Digital asset KPIs", page: 207 }, " can include uploads, storage, searches, contributors, comments and asset activity, and the right selection depends on those decisions."],
          ],
        },
        {
          heading: "Share what you find with the teams involved",
          summary: "Operational evidence works best when the people doing the work see it too.",
          icon: "message",
          body: [
            "Teams frequently know the reason behind a pattern before their leaders do. Showing them what the analytics reveal invites that explanation and makes any change easier to agree.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 195 }, { kind: "pdf", page: 201 }, { kind: "pdf", page: 203 }, { kind: "pdf", page: 207 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about creative operations analytics",
      items: [
        {
          question: "In creative operations analytics, what does efficient library use look like?",
          answer: "People find existing material instead of recreating it, work moves through review without long waits, storage reflects the work being done and teams across the organisation take part. Efficiency shows up as an absence of friction more than in any one measure.",
        },
        {
          question: "How do creative operations analytics differ from executive asset analytics?",
          answer: ["One is a working view for the people who run creative operations day to day. ", { text: "Executive asset analytics", page: 210 }, " provide a higher-level view of the organisation’s creative library and its usage."],
        },
        {
          question: "Can creative operations analytics support a business case for a DAM?",
          answer: ["They can supply evidence. A ", { text: "DAM business case", page: 359 }, " can be built around faster discovery, improved organisation, stronger governance and more efficient collaboration, and operations analytics show whether the library is being used in the ways that case describes."],
        },
        {
          question: "Which teams should creative operations analytics take into account?",
          answer: "Every team that relies on the shared library, including those that contribute rarely. Operational friction often sits at the boundaries between teams, such as a handover from production to marketing.",
        },
      ],
      sources: [{ kind: "pdf", page: 195 }, { kind: "pdf", page: 210 }, { kind: "pdf", page: 359 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on analytics for operations and leadership",
      variant: "compact",
      pages: [208, 210, 199, 355, 205, 207],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the closest team analytics pages." }],
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
