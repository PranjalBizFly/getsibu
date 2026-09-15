/**
 * 207 · Digital Asset KPIs — /analytics/digital-asset-kpis
 *
 * Angle (cluster: reporting): which KPIs — uploads, storage, searches, contributors, comments and asset activity —
 * how to choose them from objectives, and how each can mislead. No targets or values. Asset Management Metrics (206)
 * owns the forms of measurement; Creative Library Reporting (205) owns turning evidence into decisions.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of choosing performance indicators in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 207,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Analytics",
      lede: "Start from what your creative library is meant to achieve, then pick the indicators that follow it and learn in advance how each one could lead you astray.",
      visual: { diagram: "library-activity", focus: "tags" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 207 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "The few measures chosen to follow what matters",
      body: [
        "Digital asset KPIs can include uploads, storage, searches, contributors, comments and asset activity. A KPI is more than any one of those measures: it is a measure an organisation deliberately follows because it tracks an objective the library is supposed to serve.",
        "The candidates cover different sides of a library: what enters it, the space it occupies, how people look for and use material, and who takes part in adding and discussing it. The right selection depends on which of those sides an organisation’s current objectives concern.",
        [
          "KPIs sit between measurement and decisions. ",
          { text: "Asset management metrics", page: 206 },
          " provide the quantitative view of activity, storage and collaboration that KPIs are drawn from, and ",
          { text: "creative library reporting", page: 205 },
          " is where they help inform operational choices.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Six candidate KPIs", "An objective behind every KPI", "A short, deliberate list", "Known ways each can mislead", "Measures that check each other"],
      },
      highlight: {
        heading: "In practice",
        body: "Asked to track the library, a creative operations manager first agrees the objective, keeping storage predictable, and only then chooses storage and uploads as the indicators that follow it.",
        tags: ["Operations", "Adoption", "Objectives"],
      },
      glance: {
        heading: "Digital asset KPIs in brief",
        facts: [
          { label: "Area", value: "Analytics" },
          { label: "Candidates", value: "Uploads, storage, searches, contributors, comments and asset activity" },
          { label: "Drawn from", value: "Asset Management Metrics", page: 206 },
          { label: "Used in", value: "Creative Library Reporting", page: 205 },
        ],
        actions: [{ kind: "page", page: 181, label: "Creative Asset Analytics" }]
      },
      sources: [{ kind: "pdf", page: 207 }, { kind: "pdf", page: 206 }, { kind: "pdf", page: 205 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "candidates",
      eyebrow: "The candidates",
      heading: "What each candidate KPI can follow, and how it can mislead",
      items: [
        {
          heading: "Uploads",
          summary: "A fitting indicator when the objective is getting new work into the shared library.",
          icon: "upload",
          page: 184,
          body: [
            "Uploads suit adoption goals: they show whether finished work lands in the library rather than on personal drives.",
            "They mislead when imports, repeated uploads or duplicate copies inflate them, or when a team shifts to fewer but larger deliveries. More arriving can also simply mean more to organise.",
          ],
          points: ["Follows: adoption and inflow", "Misleads: imports and copies inflate it"],
        },
        {
          heading: "Storage",
          summary: "A fitting indicator when the objective is predictable capacity.",
          icon: "database",
          page: 183,
          body: [
            "Storage suits planning goals, because it follows the space the library needs and how that need develops.",
            "It misleads because it is blind to what fills the space. Rising storage may reflect a sensible move towards video, and a stable figure can hide copies accumulating while older material is cleared.",
          ],
          points: ["Follows: capacity", "Misleads: says nothing about value"],
        },
        {
          heading: "Searches",
          summary: "A fitting indicator when the objective is colleagues relying on the library to find material.",
          icon: "search",
          page: 193,
          body: [
            "Searches suit discovery goals, showing that people turn to the library when they need something.",
            "They mislead when repeated searching is really frustration, since someone who cannot find an asset may try many times. Reading the measure beside what people look for, and asking colleagues whether they found it, keeps the number honest.",
          ],
          points: ["Follows: reliance on discovery", "Misleads: repeated searching can mean frustration"],
        },
        {
          heading: "Contributors",
          summary: "A fitting indicator when the objective is participation across the organisation.",
          icon: "users",
          page: 185,
          body: [
            "Contributors suit goals about shared ownership, showing whether the library is fed by many people rather than a few.",
            "They mislead when one coordinator adds material on behalf of a whole team, and a count of people taking part never reveals who is missing.",
          ],
          points: ["Follows: breadth of participation", "Misleads: proxies hide absent teams"],
        },
        {
          heading: "Comments",
          summary: "A fitting indicator when the objective is review taking place on the assets themselves.",
          icon: "message",
          page: 73,
          body: [
            "Comments suit collaboration goals, because feedback that stays connected to the asset shows review has moved out of email and chat.",
            "They mislead in both directions. A surge may signal work in difficulty, and a decline may mean review quietly returned to inboxes rather than that fewer changes were needed.",
          ],
          points: ["Follows: review in the library", "Misleads: volume is not quality"],
        },
        {
          heading: "Asset activity",
          summary: "A fitting indicator when the objective is material actually being used.",
          icon: "eye",
          page: 182,
          body: [
            "Asset activity suits reuse goals, showing whether content in the library is put to work at all.",
            "It misleads when a handful of heavily used assets dominates and hides a large body of material nobody touches, or when a quick look is read as reliance.",
          ],
          points: ["Follows: use and reuse", "Misleads: a few assets can dominate"],
        },
      ],
      sources: [{ kind: "pdf", page: 207 }, { kind: "pdf", page: 184 }, { kind: "pdf", page: 183 }, { kind: "pdf", page: 193 }, { kind: "pdf", page: 185 }, { kind: "pdf", page: 73 }, { kind: "pdf", page: 182 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "selecting",
      eyebrow: "Step by step",
      heading: "Selecting digital asset KPIs for your library",
      steps: [
        { heading: "Start from an objective", body: "Write down what the library is meant to achieve in the coming period, such as wider adoption, easier discovery or controlled storage, before looking at any measure.", icon: "flag" },
        { heading: "Match candidates to it", body: "For each objective, choose the one or two candidate measures that should move when the objective is being met.", icon: "map" },
        { heading: "Add a counterweight", body: "Pair each KPI with a second signal that exposes its most likely distortion, such as uploads read alongside duplicates.", icon: "shield" },
        { heading: "Keep the list short", body: "Hold the set to a handful of indicators, so each receives real attention and discussion instead of a passing glance.", icon: "filter" },
        { heading: "Revisit the choice", body: "Review the KPIs whenever objectives change; an indicator that served the launch of a library may matter little once it is established.", icon: "refresh" },
      ],
      sources: [{ kind: "pdf", page: 207 }, { kind: "pdf", page: 196 }, EXPLAINS],
    },
    {
      kind: "checklist",
      id: "weigh",
      eyebrow: "What to weigh",
      heading: "Questions to ask of any proposed KPI",
      variant: "chips",
      items: ["Which objective does it follow?", "How easily is it inflated?", "Can it fall for good reasons?", "What counterweight checks it?", "Who acts when it moves?", "Could it change behaviour?", "Is its definition stable?"],
      sources: [{ kind: "editorial", note: "Practical considerations for choosing indicators; no GetSibu capability stated." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about digital asset KPIs",
      items: [
        {
          question: "Are digital asset KPIs the same as what the asset activity dashboard shows?",
          answer: [
            "Not necessarily. The ",
            { text: "asset activity dashboard", page: 191 },
            " provides a visual overview of important library interactions; KPIs are the smaller selection an organisation commits to following against its objectives.",
          ],
        },
        {
          question: "Should digital asset KPIs come with fixed goals?",
          answer: "Be cautious about it. Once a number becomes the aim, people can move it without improving anything, for instance by uploading material that did not need to be added. Direction and explanation are often more useful than a fixed figure.",
        },
        {
          question: "Can a single digital asset KPI describe the health of a library?",
          answer: [
            "No. ",
            { text: "Library health analytics", page: 196 },
            " can reveal growth, duplicates, inactive content and other organisational patterns, which is a reminder that condition depends on several signals read together.",
          ],
        },
        {
          question: "Which digital asset KPIs suit a library that has only just been introduced?",
          answer: "Indicators of adoption, such as contributors and uploads, usually come first. As the library settles, searches and asset activity become more telling, because the question shifts from whether people add material to whether they rely on it.",
        },
      ],
      sources: [{ kind: "pdf", page: 207 }, { kind: "pdf", page: 196 }, { kind: "pdf", page: 191 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on measures and indicators",
      variant: "compact",
      pages: [206, 205, 185, 193, 196, 184],
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
