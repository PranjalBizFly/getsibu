/**
 * 149 · Storage Growth Analytics — /storage/storage-growth-analytics
 *
 * Angle (cluster: storage-analytics): historical context on how quickly a library is expanding, read from the
 * storage-management side — the shapes growth takes, what they suggest, and how history is used to make and judge
 * storage decisions. Storage Analytics (183) owns space per category; Library Growth Reporting (209) owns planning
 * ahead; Creative Library Trends (187), Weekly Library Analytics (189) and Asset Usage Tracking (106) own change
 * over time, weekly reading and usage.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how storage growth in creative libraries is read and used; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 149,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Storage & Ingestion",
      lede: "Look back at how quickly your creative library has been expanding, recognise the shapes that growth takes, and use that history to judge the storage decisions already made and the ones still ahead.",
      visual: { diagram: "library-activity", focus: "storage" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 149 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "The pace of expansion, seen in hindsight",
      body: [
        "Storage growth analytics in GetSibu provide historical context around how quickly a creative library is expanding. The emphasis is the pace of change over time, which a figure for today’s storage cannot show by itself.",
        "Two libraries of the same size can be in very different positions. One reached its size years ago through a single migration and has hardly moved since; the other has grown rapidly over the last season and is still gathering speed. A storage decision that suits the first would be a mistake for the second, and only their histories tell them apart.",
        [
          "Growth history feeds forward into planning: ",
          { text: "library growth reporting", page: 209 },
          " helps organisations anticipate storage and operational requirements, while ",
          { text: "upload analytics", page: 184 },
          " show how much new content is entering the library over time, one of the main forces behind expansion.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Historical context on expansion", "Pace rather than a single total", "Step changes and steady climbs", "Actions judged by what followed", "History handed on to planning"],
      },
      glance: {
        heading: "Storage growth in brief",
        facts: [
          { label: "Area", value: "Storage & Ingestion" },
          { label: "Provides", value: "Historical context on library expansion" },
          { label: "Space by category", value: "Storage Analytics", page: 183 },
          { label: "Looking ahead", value: "Library Growth Reporting", page: 209 },
        ],
        actions: [{ kind: "route", path: "/storage", label: "More in Storage & Ingestion" }]
      },
      sources: [{ kind: "pdf", page: 149 }, { kind: "pdf", page: 209 }, { kind: "pdf", page: 184 }, { kind: "pdf", page: 183 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "shapes",
      eyebrow: "Reading the shape",
      heading: "Shapes that storage growth takes, and what each suggests",
      tabs: [
        {
          label: "Steady climb",
          heading: "Growth that follows the rhythm of production",
          icon: "trend",
          body: [
            "A library expanding at a fairly even pace usually reflects consistent output: regular shoots, campaigns and deliveries. The storage question is less whether to act than whether the pace fits the organisation’s plans, and whether what is being added is worth keeping.",
          ],
          points: ["Consistent output behind it", "The pace judged, not the fact of growth"],
        },
        {
          label: "Step change",
          heading: "A single jump, then the old pace again",
          icon: "archive",
          body: [
            "A sharp rise followed by a return to the earlier rate usually marks one event, such as an archive being brought in or a new client arriving with past work. Treating the jump as part of the trend would overstate the pace at which the library normally grows, and plans built on it would ask for more than routine work needs.",
          ],
          points: ["One event rather than a new rate", "The cause noted beside the jump"],
        },
        {
          label: "Acceleration",
          heading: "Each period adding more than the last",
          icon: "zap",
          body: [
            "When each period adds more than the one before, something about the work has changed: a new video series, another team adopting the library, a move from stills towards footage. Finding the change matters more than reacting to the curve, because the cause tells a team whether the acceleration will last.",
            ["Knowing how storage currently divides across categories such as video, image, document and audio, through ", { text: "storage by category", page: 192 }, ", helps a team judge whether heavier media could be part of the explanation."],
          ],
          points: ["A change in the work behind it", "Heavier media considered as a cause"],
        },
        {
          label: "Flattening",
          heading: "Growth that slows or stops",
          icon: "gauge",
          body: [
            "A library whose growth levels off may be in good order, with production steady and copies under control. It may equally be a warning that people have stopped adding work and are saving it somewhere else.",
            ["Reading the storage history next to ", { text: "contributor analytics", page: 185 }, ", which help show who is adding content, helps tell those two very different explanations apart."],
          ],
          points: ["Healthy restraint or quiet avoidance", "Contributors checked before concluding"],
        },
      ],
      sources: [{ kind: "pdf", page: 192 }, { kind: "pdf", page: 185 }, { kind: "pdf", page: 149 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "misreadings",
      eyebrow: "Cautions",
      heading: "Misreadings that lead to poor storage decisions",
      items: [
        {
          heading: "Crediting the wrong action",
          summary: "Growth that slowed after a clean-up may have slowed for another reason.",
          icon: "flag",
          body: [
            ["If a round of duplicate removal coincides with the end of a production season, the gentler growth that follows could owe more to the calendar than to the clean-up. ", { text: "Duplicate reduction", page: 350 }, " can help reduce unnecessary storage consumption, but a slowdown that began before the clean-up, or that ends with the next busy season, points to another cause."],
          ],
        },
        {
          heading: "Overlooking retained versions",
          summary: "Revisions kept within assets can add to growth without adding new assets.",
          icon: "history",
          body: [
            ["Revision-heavy work, such as successive cuts of a film, can add to storage without adding many new assets. Where teams ", { text: "replace assets in place while retaining previous versions", page: 91 }, ", it is worth asking how much of the growth comes from revisions rather than from new material."],
          ],
        },
        {
          heading: "Projecting from a young library",
          summary: "The first months of a library’s life are a poor guide to the years after.",
          icon: "calendar",
          body: [
            "Early growth is dominated by moving existing collections in and by teams starting to use the library, and neither repeats in the same way. Projections built on that period overstate what routine use will need; the history becomes a dependable guide once ordinary production shows through.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 350 }, { kind: "pdf", page: 91 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "using-history",
      eyebrow: "Step by step",
      heading: "Using growth history in a storage decision",
      steps: [
        { heading: "Read a fair span", body: "Look across enough history to take in ordinary busy and quiet stretches, and compare like with like rather than a launch season with a holiday month.", icon: "calendar" },
        { heading: "Recognise the shape", body: "Decide whether the history resembles a steady climb, a step change, acceleration or flattening before drawing conclusions from its most recent stretch.", icon: "trend" },
        { heading: "Separate the causes", body: "Set the growth beside how much new content entered the library over the same period, then consider whether expansion came from more material or from heavier material.", icon: "layers" },
        { heading: "Decide, then look back again", body: "Once the decision is made, the growth that follows becomes part of the history, and reading it later shows whether the change had the effect intended.", icon: "check" },
      ],
      sources: [{ kind: "pdf", page: 149 }, { kind: "pdf", page: 184 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about storage growth analytics",
      items: [
        {
          question: "Do storage growth analytics show which assets are worth archiving?",
          answer: ["Not directly. Growth history describes how quickly the library is expanding, not the value of individual assets; ", { text: "asset usage analytics", page: 182 }, " help show which assets receive attention and which remain underused."],
        },
        {
          question: "Is rapid storage growth a sign that a creative library is badly managed?",
          answer: ["Not in itself, since a library supporting more production should grow. ", { text: "Library health analytics", page: 196 }, " can reveal growth, duplicates and inactive content, which can help show whether the expansion is the useful kind."],
        },
        {
          question: "Which storage decisions benefit most from growth history?",
          answer: "Decisions that are expensive to reverse: committing to more capacity, changing which stages of footage enter the library, or retiring an old storage location once a move is complete.",
        },
      ],
      sources: [{ kind: "pdf", page: 182 }, { kind: "pdf", page: 196 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on storage and how libraries grow",
      variant: "compact",
      pages: [183, 209, 184, 192, 185, 196],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Bring Your Creative Assets Together",
      conversionPage: 392,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 392 }],
    },
  ],
};

export default page;
