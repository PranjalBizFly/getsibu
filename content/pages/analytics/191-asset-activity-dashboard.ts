/**
 * 191 · Asset Activity Dashboard — /analytics/asset-activity-dashboard
 *
 * Angle (cluster: library-analytics): the dashboard as a visual overview of important library interactions — a
 * starting point for orientation, how it differs from the detailed records behind it (asset activity, audit trail,
 * access history, audit logs) and how to move from a first glance to the detail. It describes no widgets, figures
 * or data beyond PDF 191. Creative Asset Analytics (181) owns the signals; the signal pages own each measure.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of using a visual overview of library activity; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 191,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Analytics",
      lede: "What a visual overview of important library interactions is for, how it differs from the detailed record kept on each asset, and how to move from a first look to the detail that explains it.",
      visual: { diagram: "library-activity", focus: "uploads" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 191 }, { kind: "pdf", page: 118 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "One visual starting point for library activity",
      body: [
        "The asset activity dashboard in GetSibu provides a visual overview of important library interactions. An overview of that kind helps a team get its bearings before it examines any single signal or asset.",
        "A creative library produces interactions all the time, as material arrives, drafts are discussed and files are opened and reused. Each leaves a trace somewhere, but together they are too many and too scattered to take in one by one. A visual overview trades detail for orientation, so the person looking after the library can decide quickly where a closer look is needed.",
        [
          "Other analytics look at single signals in depth. ",
          { text: "Upload analytics", page: 184 },
          " follow new content entering the library, ",
          { text: "contributor analytics", page: 185 },
          " help show who takes part and ",
          { text: "tag analytics", page: 186 },
          " identify frequently used or searched tags.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["A visual overview of interactions", "Orientation before detail", "Library-wide rather than per asset", "A starting point, not a record", "Follow-up in the detailed views"],
      },
      highlight: {
        heading: "In practice",
        body: "A library manager begins the working day with the overview, notices activity that looks unusual and turns to the detailed analytics to find out why.",
        tags: ["Library managers", "Orientation", "Routine"],
      },
      glance: {
        heading: "The dashboard in brief",
        facts: [
          { label: "Area", value: "Analytics" },
          { label: "Provides", value: "A visual overview of important library interactions" },
          { label: "Part of", value: "Creative Asset Analytics", page: 181 },
          { label: "Health view", value: "Library Health Analytics", page: 196 },
        ],
      },
      sources: [{ kind: "pdf", page: 191 }, { kind: "pdf", page: 184 }, { kind: "pdf", page: 185 }, { kind: "pdf", page: 186 }, { kind: "pdf", page: 181 }, { kind: "pdf", page: 196 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "views-of-activity",
      eyebrow: "Different views of activity",
      heading: "How the overview differs from the records behind it",
      columns: ["What it covers", "The question it answers"],
      rows: [
        { label: "Asset activity dashboard", cells: ["Important interactions across the library", "What is happening, and where should I look?"] },
        { label: "Asset activity", page: 118, cells: ["Views, downloads, edits and approvals on one asset", "What has happened to this file?"] },
        { label: "Asset audit trail", page: 119, cells: ["Important actions performed on creative files", "Which actions were taken on this work?"] },
        { label: "Access history", page: 171, cells: ["Important user interactions with the library", "How have people used their access?"] },
        { label: "Audit logs", page: 326, cells: ["Permissions, comments, asset changes and other events", "What does the historical record show?"] },
      ],
      sources: [{ kind: "pdf", page: 191 }, { kind: "pdf", page: 118 }, { kind: "pdf", page: 119 }, { kind: "pdf", page: 171 }, { kind: "pdf", page: 326 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "using-the-overview",
      eyebrow: "Considerations",
      heading: "Getting real value from a visual overview",
      items: [
        {
          heading: "Learn what normal looks like",
          summary: "An overview only becomes informative once its usual shape is familiar.",
          icon: "eye",
          body: [
            "Look at the overview regularly for a while before reacting to it. Familiarity with ordinary activity is what makes an unusual stretch stand out, and it saves effort otherwise spent chasing movements that recur every week.",
          ],
        },
        {
          heading: "Treat it as a question, not an answer",
          summary: "An overview can prompt a question, but it rarely explains itself.",
          icon: "help",
          body: [
            "A visual overview compresses a great deal of detail into very little space. When something looks different, the next step is the detailed view or the people involved, not a conclusion drawn from the overview alone.",
          ],
        },
        {
          heading: "Match the follow-up to the role",
          summary: "Different people need different next steps from the same overview.",
          icon: "users",
          body: [
            ["A library manager may follow a change into tags and storage, and a creative lead into review activity. A leader is more likely to ask how well the library is used overall, the question ", { text: "creative operations analytics", page: 195 }, " help answer."],
          ],
        },
        {
          heading: "Remember what an overview leaves out",
          summary: "Important interactions are a selection, not a complete account.",
          icon: "filter",
          body: [
            "An overview of important interactions is, by definition, a selection. When a question depends on completeness, such as confirming a particular action on a particular file, go to the record kept for that purpose.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 191 }, { kind: "pdf", page: 195 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "glance-to-detail",
      eyebrow: "Step by step",
      heading: "From a first look to the detail that explains it",
      intro: "A simple habit for turning the overview into action.",
      steps: [
        { heading: "Scan the overview", body: "Start with the visual overview of important library interactions and note anything that looks different from usual.", icon: "eye" },
        { heading: "Name the kind of activity", body: "Work out which kind of activity seems to be involved and turn to the analytics that cover it, such as uploads, contributors or tags.", icon: "filter" },
        { heading: "Find the work behind it", body: "Connect the change to the work that caused it, such as a delivery, a campaign or a team that has become more or less active.", icon: "search" },
        { heading: "Open the asset itself", body: "When one file sits at the centre of the change, its own history holds the detail the overview leaves out.", icon: "document" },
        { heading: "Ask the people involved", body: "Activity shows what happened; the contributors and reviewers concerned can usually explain why.", icon: "message" },
        { heading: "Act, and note what you did", body: "Make the change the situation calls for and record it, so the next unusual pattern can be read against it.", icon: "check" },
      ],
      sources: [{ kind: "pdf", page: 191 }, { kind: "pdf", page: 117 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about the asset activity dashboard",
      items: [
        {
          question: "Does the asset activity dashboard replace the detailed analytics views?",
          answer: ["No, it is a starting point. Questions about one kind of activity are answered in views such as ", { text: "storage analytics", page: 183 }, " or ", { text: "most-searched tags", page: 193 }, ", which look at a single signal in depth."],
        },
        {
          question: "How often is it worth looking at the asset activity dashboard?",
          answer: "Often enough to know what normal looks like. For a library manager that may be part of each working day; for leaders, an occasional look alongside longer-term trends is usually enough.",
        },
        {
          question: "Can the asset activity dashboard confirm that a migration went well?",
          answer: ["An overview is not the place to confirm it. That is the job of ", { text: "migration verification", page: 296 }, ", which helps organisations check that important content and metadata transferred correctly."],
        },
      ],
      sources: [{ kind: "pdf", page: 191 }, { kind: "pdf", page: 183 }, { kind: "pdf", page: 193 }, { kind: "pdf", page: 296 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on library activity",
      variant: "compact",
      pages: [181, 118, 119, 184, 185, 196],
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
