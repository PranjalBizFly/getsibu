/**
 * 205 · Creative Library Reporting — /analytics/creative-library-reporting
 *
 * Angle (cluster: reporting, primary): turning analytics into information that supports operational decisions —
 * a report built around a decision, its evidence, context and follow-up. No exports, scheduling or report features
 * are claimed. Metrics (206), KPIs (207), workflow metrics (208), growth planning (209) and leaders (210) are siblings.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of operational reporting practice; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 205,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Analytics",
      lede: "Learn how to turn library analytics into reporting that supports an operational decision, by choosing the evidence that matters, explaining it and making sure somebody acts on it.",
      visual: { diagram: "library-activity", focus: "cadence" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 205 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "From analytics to information someone can act on",
      body: [
        "Creative library reporting turns analytics into information that can support operational decisions. Analytics describe what is happening in a library; reporting selects, explains and frames that description for a choice somebody has to make.",
        "Reports go unread when they show everything that can be measured and leave the reader to work out why any of it matters. A useful library report starts at the other end, with a decision about storage, taxonomy, review capacity or archiving, and brings only the evidence that bears on it, along with the context needed to read that evidence correctly.",
        [
          "The raw material is broad. ",
          { text: "Creative asset analytics", page: 181 },
          " provide visibility into uploads, comments, storage, contributors, tags and other library activity, and ",
          { text: "asset performance insights", page: 204 },
          " help teams identify patterns in asset usage that a report can then explain.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Analytics compared with reporting", "Storage, taxonomy, review and archiving", "Evidence matched to its reader", "Known causes behind changes", "Observation kept apart from opinion"],
      },
      highlight: {
        heading: "In practice",
        body: "Asked whether an archiving rule is needed, a library manager writes a short report pairing evidence of inactive content with a clear recommendation, instead of forwarding everything the analytics show.",
        tags: ["Library managers", "Archiving", "Decisions"],
      },
      glance: {
        heading: "Library reporting in brief",
        facts: [
          { label: "Area", value: "Analytics" },
          { label: "Purpose", value: "Information that supports operational decisions" },
          { label: "Draws on", value: "Creative Asset Analytics", page: 181 },
          { label: "For leaders", value: "Executive Asset Analytics", page: 210 },
        ],
      },
      sources: [{ kind: "pdf", page: 205 }, { kind: "pdf", page: 181 }, { kind: "pdf", page: 204 }, { kind: "pdf", page: 196 }, { kind: "pdf", page: 210 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "building-a-report",
      eyebrow: "Step by step",
      heading: "Building a library report around a decision",
      intro: "A sequence that keeps a report short, relevant and likely to change something.",
      steps: [
        { heading: "Name the decision", body: "State the operational choice the report supports, such as a storage request, a taxonomy change or an archiving policy, and who will make it.", icon: "flag" },
        { heading: "Choose the evidence", body: "Select only the signals that bear on that choice. Anything else, however interesting, belongs in a different report.", icon: "filter" },
        { heading: "Add the context", body: "Note the events behind notable changes, such as imports, launches and reorganisations, so a known cause is not mistaken for a trend.", icon: "book" },
        { heading: "Interpret and recommend", body: "Say what the evidence means and what should happen next, including the options that were considered and set aside.", icon: "compass" },
        { heading: "Assign and revisit", body: "Give the decision an owner and a point at which to look again, so a later report can show whether the change worked.", icon: "check" },
      ],
      sources: [{ kind: "pdf", page: 205 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "honest-reporting",
      eyebrow: "Considerations",
      heading: "Keeping library reporting honest and useful",
      items: [
        {
          heading: "Resist the impressive total",
          summary: "Large cumulative figures look good in a presentation and rarely decide anything.",
          icon: "gauge",
          body: [
            "The size of a library, or everything ever uploaded to it, suggests momentum without pointing to any choice. Prefer the narrower signal that connects to the decision at hand, even when it looks less striking.",
          ],
        },
        {
          heading: "Keep observation and interpretation apart",
          summary: "Readers should be able to tell what the analytics show from what the author concludes.",
          icon: "users",
          body: [
            "Mark which statements report what the analytics show and which are the author’s reading of them. A reader who disagrees with an interpretation can then still rely on the evidence, and argue about the conclusion instead of doubting the whole report.",
          ],
        },
        {
          heading: "Tell contributors what changed",
          summary: "Reporting earns trust when people see its effect.",
          icon: "message",
          body: [
            "When a report leads to a new tagging convention or an archiving rule, explain the reasoning to the people who add and use material. They are far more likely to follow a change whose evidence they have seen than one that simply appears.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 205 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A proposed tag overhaul narrowed to what needed fixing",
      team: "A brand consultancy",
      situation: "A brand consultancy’s partners are asked to fund a complete overhaul of the tags in the shared library. Its studio manager is asked to report on whether that is the right response.",
      steps: [
        { heading: "The decision is framed", body: "The manager narrows the question from whether to rebuild every tag to which parts of the vocabulary are failing the people who search." },
        { heading: "Evidence is chosen", body: ["The report draws on ", { text: "tag analytics", page: 186 }, ", which identify frequently used or searched tags, and leaves out measures unrelated to the choice."] },
        { heading: "Context is added", body: "The manager notes that one client’s rebrand has introduced a set of new terms, so the partners do not mistake that change for a vocabulary falling apart." },
        { heading: "A recommendation is made", body: ["Rather than an overhaul, the manager proposes consolidating competing terms for the subjects colleagues look for most, within the existing ", { text: "tag taxonomy", page: 8 }, "."] },
        { heading: "A follow-up is agreed", body: "One partner owns the decision, and the manager is asked to report again once the consolidated terms have been in use for a while." },
      ],
      outcome: "The partners approve a focused change instead of an overhaul, and the next report can show whether the consolidated terms are the ones colleagues now search for.",
      link: { page: 221, label: "GetSibu for Brand Consultancies" },
      sources: [{ kind: "pdf", page: 205 }, { kind: "pdf", page: 186 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 221 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about creative library reporting",
      items: [
        {
          question: "Is creative library reporting useful for capacity planning?",
          answer: [
            "Capacity is a natural subject, because it involves a choice with a cost and a deadline. ",
            { text: "Library growth reporting", page: 209 },
            " helps organisations anticipate storage and operational requirements, which gives such a report its starting evidence.",
          ],
        },
        {
          question: "How long should a creative library report be?",
          answer: "As short as the decision allows. If a reader cannot find the recommendation and the evidence behind it quickly, the report is carrying material that belongs somewhere else.",
        },
        {
          question: "Who should prepare creative library reports?",
          answer: "Usually whoever looks after the library day to day, because they know the events behind the activity. Where several teams share the library, a quick read by someone from each can catch a misreading before the report circulates.",
        },
        {
          question: "How does creative library reporting differ from executive asset analytics?",
          answer: [
            { text: "Executive asset analytics", page: 210 },
            " give leaders a higher-level picture of the library and how it is used. Reporting is the work of shaping analytics at any level for a particular operational choice, so an executive view can be one of its sources as well as one of its audiences.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 205 }, { kind: "pdf", page: 209 }, { kind: "pdf", page: 210 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on reporting and measurement",
      variant: "compact",
      pages: [181, 210, 207, 209, 195, 206],
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
