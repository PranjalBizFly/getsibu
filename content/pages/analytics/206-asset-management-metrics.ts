/**
 * 206 · Asset Management Metrics — /analytics/asset-management-metrics
 *
 * Angle (cluster: reporting): the quantitative view of library activity, storage and collaboration — the forms
 * metrics take (counts, volumes, shares, rates, concentration) and how to handle numbers with care. No values are
 * given. Digital Asset KPIs (207) owns choosing measures; Creative Library Reporting (205) owns using them.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of measurement practice in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 206,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Analytics",
      lede: "Understand the kinds of metric that give a quantitative view of library activity, storage and collaboration, what each form of number is good for and how to read library figures without being misled by them.",
      visual: { diagram: "library-activity", focus: "storage" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 206 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Putting numbers to activity, storage and collaboration",
      body: [
        "Asset management metrics provide a quantitative view of library activity, storage and collaboration. Where an impression says a library feels busy or full, a metric states how much, in terms that can be compared from one period to the next.",
        "Numbers bring discipline and a risk at the same time. They make change visible and allow like-for-like comparison, which impressions never manage. They also look more certain than they are, because a metric is only as meaningful as its definition, the span it covers and the events that shaped it.",
        [
          "Each of the three areas has a familiar source. ",
          { text: "Upload analytics", page: 184 },
          " describe new content entering the library, ",
          { text: "storage analytics", page: 183 },
          " show how much space different asset categories consume. Collaboration shows up in the ",
          { text: "comments users leave directly on assets", page: 62 },
          ", which are among the library activity that analytics bring into view.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Activity, storage and collaboration", "Counts, volumes and shares", "Rates of change and concentration", "Definitions that stay stable", "Numbers read with context"],
      },
      highlight: {
        heading: "In practice",
        body: "A library manager looks past a healthy total of comments and notices that a handful of contributors account for most of the discussion, which changes what the figure says about collaboration.",
        tags: ["Library managers", "Definitions", "Comparison"],
      },
      glance: {
        heading: "Library metrics in brief",
        facts: [
          { label: "Area", value: "Analytics" },
          { label: "Quantifies", value: "Library activity, storage and collaboration" },
          { label: "Choosing measures", value: "Digital Asset KPIs", page: 207 },
          { label: "Using them", value: "Creative Library Reporting", page: 205 },
        ],
        actions: [{ kind: "page", page: 181, label: "Creative Asset Analytics" }]
      },
      sources: [{ kind: "pdf", page: 206 }, { kind: "pdf", page: 184 }, { kind: "pdf", page: 183 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 207 }, { kind: "pdf", page: 205 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "forms",
      eyebrow: "Kinds of metric",
      heading: "Five forms a library metric can take",
      intro: "Whatever produces them, quantitative measures of a creative library tend to take a small number of forms, each suited to different questions.",
      items: [
        {
          heading: "Counts",
          body: "How many times something happened or how many of something exist, such as uploads, comments or active contributors. Counts answer “how much” and very little else.",
          icon: "chart",
          points: ["Simple for anyone to grasp", "Easily inflated by a single event"],
        },
        {
          heading: "Volumes",
          body: "How much space material occupies, the natural form for storage. Volume and count often disagree, since a few large video files can outweigh thousands of small images.",
          icon: "database",
          points: ["Suited to capacity questions", "Independent of how many files there are"],
        },
        {
          heading: "Shares",
          body: "The proportion of a whole that belongs to one part, such as one asset category’s portion of storage. Shares reveal balance while hiding whether the whole has grown.",
          icon: "layers",
          points: ["Balance between parts", "Can move while totals stay flat"],
        },
        {
          heading: "Rates of change",
          body: "How quickly a measure rises or falls between one period and another. Rates capture momentum, and a single unusual period can distort them badly.",
          icon: "trend",
          points: ["Momentum rather than size", "Sensitive to one-off spikes"],
        },
        {
          heading: "Concentration",
          body: "How evenly activity is spread, for example across contributors or areas of the library. Concentration exposes reliance on a few people or places that a total conceals.",
          icon: "users",
          points: ["Dependence made visible", "Hidden by library-wide totals"],
        },
      ],
      sources: [{ kind: "pdf", page: 206 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "three-areas",
      eyebrow: "By area",
      heading: "Measuring activity, storage and collaboration",
      columns: ["Typical measures", "What they can hide"],
      rows: [
        { label: "Library activity", cells: ["Uploads, searches and interactions with assets", "A single import or campaign dominating a period"] },
        { label: "Storage", cells: ["Space consumed and each category’s share", "The value of what occupies the space"] },
        { label: "Collaboration", cells: ["Comments and the contributors taking part", "Whether discussion led to better decisions"] },
      ],
      sources: [{ kind: "pdf", page: 181 }, { kind: "pdf", page: 192 }, { kind: "pdf", page: 185 }, { kind: "pdf", page: 193 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "handling-numbers",
      eyebrow: "Considerations",
      heading: "Handling library numbers with care",
      items: [
        {
          heading: "Define a metric before comparing it",
          summary: "Two figures with the same name can count different things.",
          icon: "book",
          body: [
            "Find out and write down what a measure includes: whether a batch counts once or file by file, whether replaced versions are part of it, and which span of time it covers. Without that record, a change in the number may only be a change in how someone counted.",
          ],
        },
        {
          heading: "Avoid averages across unlike assets",
          summary: "An average that mixes footage with documents describes neither.",
          icon: "filter",
          body: [
            [
              "A typical file size or a typical amount of discussion across the whole library blends material that behaves in completely different ways. Breaking measures down first, as ",
              { text: "storage by category", page: 192 },
              " does across video, image, document and audio, keeps each figure tied to one kind of work.",
            ],
          ],
        },
        {
          heading: "Precision is not accuracy",
          summary: "A very exact figure can still be the wrong figure.",
          icon: "gauge",
          body: [
            "Numbers quoted to many digits sound authoritative, which makes readers less likely to question their definition. Round figures when presenting them and spend the space saved on what they mean and where they came from.",
          ],
        },
        {
          heading: "Small numbers swing widely",
          summary: "A share or rate built on a handful of items can change sharply for trivial reasons.",
          icon: "gauge",
          body: [
            "When a new area of the library holds only a few assets, one upload can double its share or its rate of change overnight. Wait until a measure rests on enough activity to be stable, or report the underlying count beside it, before treating a sharp movement as news.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 192 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about asset management metrics",
      items: [
        {
          question: "How do asset management metrics differ from digital asset KPIs?",
          answer: [
            "A metric is any quantitative measure of the library. ",
            { text: "Digital asset KPIs", page: 207 },
            " are the few metrics an organisation selects to follow its objectives, so every KPI is a metric but most metrics never become KPIs.",
          ],
        },
        {
          question: "Should asset management metrics be compared with other organisations?",
          answer: "Rarely with much benefit. Libraries differ in the work they hold, the way they count and the teams they serve, so a library’s own history is usually the more reliable comparison.",
        },
        {
          question: "Which asset management metrics suit a small creative team?",
          answer: "A handful of counts tied to questions the team genuinely asks, such as whether new work is reaching the library and whether storage is keeping pace. A small team gains little from tracking everything.",
        },
        {
          question: "How often are asset management metrics worth reviewing?",
          answer: [
            "At the rhythm of the decisions they inform. Day-to-day checks suit operational questions, while ",
            { text: "monthly library analytics", page: 190 },
            " help organisations identify longer-term trends in asset management.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 206 }, { kind: "pdf", page: 207 }, { kind: "pdf", page: 190 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on measuring a creative library",
      variant: "compact",
      pages: [207, 205, 183, 184, 192, 190],
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
