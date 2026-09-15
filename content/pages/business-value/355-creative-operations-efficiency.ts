/**
 * 355 · Creative Operations Efficiency — /business-value/creative-operations-efficiency
 *
 * Angle (cluster: productivity): predictability as the form efficiency takes for the people who plan and run
 * creative work — centralised search, metadata, approvals and analytics each remove a source of variation, and
 * a team can judge the change by the spread of ordinary tasks. Creative Operations Analytics (195) owns the
 * analytics view; Creative Workflow Metrics (208) owns movement through review; Creative Productivity (351)
 * owns makers' time.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of operational predictability and how to assess it; states no GetSibu capability beyond the cited pages and supplies no figures." } as const;

const page: PageContent = {
  page: 355,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "centered",
      eyebrow: "Business Value",
      lede: "What centralised search, metadata, approvals and analytics can each steady in creative operations, the defensive habits that unpredictable work creates, and the signs that planning around the library has become easier.",
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 355 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Steadier operations rather than occasional speed",
      body: [
        "Centralised search, metadata, approvals and analytics can make creative operations more predictable. For the people who schedule campaigns, brief studios and promise delivery dates, that is the useful meaning of efficiency: ordinary tasks taking a familiar amount of effort, and the state of the work being known without a round of messages.",
        "Unpredictable operations are expensive in indirect ways. When finding an existing asset can take a moment or an afternoon, and sign-off can arrive today or next week, people protect themselves. They pad schedules, keep private copies, chase colleagues early and escalate just in case. Each defence is sensible on its own; together they use up the capacity they were meant to protect.",
        [
          "The four capabilities each address a different source of variation. How they fit into the movement of assets from upload to final use is described under ",
          { text: "creative workflow management", page: 80 },
          ", and the view operations leaders use to see whether the library is doing its job is set out under ",
          { text: "creative operations analytics", page: 195 },
          ".",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Predictability as operational efficiency", "Variation, not only the typical case", "Defensive habits that consume capacity", "Status known without asking", "Patterns seen before they become problems"],
      },
      glance: {
        heading: "Operations efficiency in brief",
        facts: [
          { label: "Area", value: "Business value" },
          { label: "Aim", value: "More predictable creative operations" },
          { label: "Draws on", value: "Search, metadata, approvals and analytics" },
          { label: "Movement view", value: "Creative Workflow Metrics", page: 208 },
        ],
        actions: [{ kind: "route", path: "/business-value", label: "More in Business Value" }]
      },
      sources: [{ kind: "pdf", page: 355 }, { kind: "pdf", page: 80 }, { kind: "pdf", page: 195 }, { kind: "pdf", page: 208 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "sources-of-variation",
      eyebrow: "Sources of variation",
      heading: "Weekly operational questions, answered by chance or by the library",
      columns: ["Answered by chance", "Answered in GetSibu"],
      emphasis: 1,
      rows: [
        ["Do we already have this asset?", "Depends on who is around to ask", "A search of the whole library, not a round of questions"],
        ["Where did this file come from?", "Whatever the filename suggests", "Creators, EXIF, XMP and keywords with the asset"],
        ["Is the new upload ready to find?", "Assumed once the transfer ends", "Processing status shows when it is searchable"],
        ["Where does this piece stand in review?", "Found out by chasing people", "Status history on the asset"],
        ["Who is adding to the library?", "Nobody is quite sure", "Contributor analytics on who adds content"],
        ["What will the library need next?", "Discovered when space runs short", "Growth reporting to anticipate requirements"],
      ],
      sources: [{ kind: "pdf", page: 16 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 145 }, { kind: "pdf", page: 68 }, { kind: "pdf", page: 185 }, { kind: "pdf", page: 209 }, EXPLAINS],
    },
    {
      kind: "checklist",
      id: "weigh",
      eyebrow: "What to weigh",
      heading: "What to weigh when judging operational predictability",
      variant: "chips",
      surface: "muted",
      items: [
        "Requests that depend on one person",
        "Schedules padded for finding and sign-off",
        "Files whose origin nobody can confirm",
        "Reviews tracked by chasing",
        "Storage needs discovered late",
        "Exceptions that disrupt plans",
      ],
      sources: [{ kind: "pdf", page: 355 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "measuring",
      eyebrow: "Build the case yourself",
      heading: "How to tell whether operations are becoming more predictable",
      items: [
        {
          heading: "Record the spread, not just the typical case",
          summary: "Predictability shows in how much ordinary tasks vary, which a typical case hides.",
          icon: "gauge",
          body: [
            "Pick a few recurring tasks, such as locating a past campaign asset, confirming that a piece is approved or preparing a delivery, and note how each instance went: straightforward, delayed or derailed. A typical case can look acceptable while the occasional derailment causes most of the disruption.",
            "Keep the same notes once the library is in everyday use. Fewer derailments is the result to look for, even if the straightforward cases barely change.",
          ],
          points: ["Straightforward, delayed or derailed", "The same tasks before and after"],
        },
        {
          heading: "Ask planners where they add contingency",
          summary: "Padding in a schedule records what people have learnt not to rely on.",
          icon: "calendar",
          body: [
            "Producers and project managers know which stages they allow extra time for, and why. Ask them stage by stage and note the reasons: waiting for sign-off, hunting for source files, uncertainty about whether material has arrived.",
            "When those reasons weaken, contingency tends to shrink without anyone being told to cut it, which is a more trustworthy sign than a claimed saving.",
          ],
        },
        {
          heading: "Watch how steadily work moves through review",
          summary: "Review is a common place for creative schedules to lose their shape.",
          icon: "workflow",
          body: [
            [
              { text: "Creative workflow metrics", page: 208 },
              " help teams understand how assets move through upload, review and approval. Read beside the planners’ own notes, they give a view of the review stage that does not depend on anyone’s recollection.",
            ],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 208 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about creative operations efficiency",
      items: [
        {
          question: "Does more predictable creative operations mean less room for creative flexibility?",
          answer: "It tends to mean more. When routine tasks behave consistently, the changes that genuinely need attention, such as a late brief or a new creative direction, are not competing with delays the operation caused itself.",
        },
        {
          question: "Which capability should an operations team centralise first to make work more predictable?",
          answer: "Start where variation hurts most. If requests for existing material dominate the week, begin with search and metadata; if launches slip while decisions are awaited, begin with approvals. Analytics become more telling once there is shared activity to read.",
        },
        {
          question: "Does creative operations efficiency need a dedicated operations team?",
          answer: "No, but it needs an owner. In a smaller organisation a producer or library manager can take the role, keeping the vocabulary consistent and noticing where work waits.",
        },
        {
          question: "How does creative operations efficiency support decisions by leaders?",
          answer: [
            "Steadier operations make commitments easier to give. ",
            { text: "Creative library reporting", page: 205 },
            " turns analytics into information that can support operational decisions, such as where to put effort before a busy season.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 205 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on running creative operations",
      variant: "compact",
      pages: [195, 208, 205, 80, 22, 68],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Build a Smarter Creative Workflow",
      conversionPage: 396,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 396 }],
    },
  ],
};

export default page;
