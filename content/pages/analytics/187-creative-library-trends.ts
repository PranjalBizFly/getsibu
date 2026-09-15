/**
 * 187 · Creative Library Trends — /analytics/creative-library-trends
 *
 * Angle (cluster: analytics-cadence, primary): how the library changes over time — the dimensions in which it
 * changes, how to tell a lasting trend from a passing event and how the daily, weekly and monthly spans relate.
 * Daily (188) owns short-term checks, Weekly (189) growth and usage side by side, Monthly (190) the planning
 * horizon; Library Growth Reporting (209) owns planning for storage and operations.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of reading change over time in a creative library; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 187,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Analytics",
      lede: "Understand how your digital asset library changes over time, which kinds of change are worth following, and how to tell a lasting trend from a one-off event.",
      visual: { diagram: "library-activity", focus: "cadence" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 187 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A library understood as something that moves",
      body: [
        "Trend analysis helps organisations understand how their digital asset library changes over time. Where most analytics describe what is happening, trends describe the direction the library is taking.",
        "Libraries rarely change in a single step. A team that once shot mostly stills begins producing video; a product line is discontinued and its tags go quiet; a department that ignored the library becomes one of its busiest users. None of these shifts stands out on any given day, yet each one affects how the library should be organised, resourced and governed.",
        [
          "Change tends to show up in several places at once, and ",
          { text: "library health analytics", page: 196 },
          " can reveal growth, duplicates, inactive content and other organisational patterns as they build up. Following trends is how those patterns become visible early enough to act on.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Change over time, not a snapshot", "Size, mix, participation, discovery and use", "Lasting trends versus one-off events", "Choosing the right span of time", "Direction as a basis for planning"],
      },
      highlight: {
        heading: "In practice",
        body: "A studio notices video taking a larger part of its library season after season, and begins planning storage and review around footage rather than stills.",
        tags: ["Planning", "Video", "Studios"],
      },
      glance: {
        heading: "Library trends in brief",
        facts: [
          { label: "Area", value: "Analytics" },
          { label: "Shows", value: "How the library changes over time" },
          { label: "Health view", value: "Library Health Analytics", page: 196 },
          { label: "Planning", value: "Library Growth Reporting", page: 209 },
        ],
        actions: [{ kind: "page", page: 181, label: "Creative Asset Analytics" }]
      },
      sources: [{ kind: "pdf", page: 187 }, { kind: "pdf", page: 196 }, { kind: "pdf", page: 192 }, { kind: "pdf", page: 209 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "dimensions",
      eyebrow: "Dimensions of change",
      heading: "Five ways a creative library changes over time",
      items: [
        {
          heading: "Size",
          body: "How much content arrives and how fast the library expands. Uploads show new material entering, and storage growth adds historical context about the pace of expansion.",
          icon: "trend",
          points: ["Inflow of new content", "Pace of expansion"],
          page: 149,
        },
        {
          heading: "Content mix",
          body: "The balance between video, image, document and audio. When that balance shifts, storage needs, review work and the searches people run shift with it.",
          icon: "layers",
          points: ["Balance across asset categories", "Knock-on effects for storage and review"],
          page: 192,
        },
        {
          heading: "Participation",
          body: "Who adds content and takes part in library activity. Widening or narrowing participation shows whether the library is becoming more central to the organisation or less.",
          icon: "users",
          points: ["Teams joining or drifting away", "Reliance on a few people"],
          page: 185,
        },
        {
          heading: "Discovery",
          body: "Which tags people use and search for. As campaigns, products and priorities move on, the vocabulary of search moves with them.",
          icon: "search",
          points: ["New terms gaining attention", "Old terms falling quiet"],
          page: 186,
        },
        {
          heading: "Use",
          body: "Which assets receive attention and which remain underused. Material that was central to one campaign can fade into the background, while older content can become relevant again.",
          icon: "eye",
          points: ["Attention moving between assets", "Archive material finding new uses"],
          page: 182,
        },
      ],
      sources: [{ kind: "pdf", page: 184 }, { kind: "pdf", page: 149 }, { kind: "pdf", page: 192 }, { kind: "pdf", page: 185 }, { kind: "pdf", page: 186 }, { kind: "pdf", page: 182 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "trend-or-event",
      eyebrow: "Considerations",
      heading: "Telling a lasting trend from a passing event",
      items: [
        {
          heading: "Look for persistence",
          summary: "A trend holds across several periods; an event appears once and fades.",
          icon: "trend",
          body: [
            "One large delivery lifts activity for a moment. A trend keeps the same direction period after period, even when individual weeks are noisy.",
            "Wait for the pattern to repeat before reorganising anything around it.",
          ],
        },
        {
          heading: "Keep a record of known events",
          summary: "Imports, launches and reorganisations explain many apparent shifts.",
          icon: "flag",
          body: [
            "Keep a simple log of events that affect the library, such as a new team joining, a product launch or a change of agency. Reading trends against it stops a step change from a known cause being mistaken for momentum.",
            ["A ", { text: "large library migration", page: 131 }, " is the clearest case: it brings a great deal of material in at once and says nothing about the pace of new work."],
          ],
        },
        {
          heading: "Watch relationships between signals",
          summary: "A growing library can still be becoming less useful.",
          icon: "gauge",
          body: [
            "If storage keeps growing while fewer people take part, the library may be expanding into clutter rather than into use. The relationship between two signals often says more than either measure alone.",
          ],
        },
        {
          heading: "Name the decision first",
          summary: "A trend is worth following only if it could change what the team does.",
          icon: "compass",
          body: [
            "Before tracking a trend closely, name the decision it might inform, whether that is a storage budget, a change to the taxonomy, time for library upkeep or an archiving policy.",
            [{ text: "Creative library reporting", page: 205 }, " turns analytics into information that can support operational decisions like these."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 131 }, { kind: "pdf", page: 205 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "spans",
      eyebrow: "Choosing a span",
      heading: "The same library read over three spans of time",
      tabs: [
        {
          label: "Daily",
          heading: "Confirm what has just happened",
          icon: "clock",
          body: [
            [{ text: "Daily library analytics", page: 188 }, " provide a short-term view of uploads, comments and storage activity."],
            "A single day is too short to show direction, but it is the right span for checking that an expected event, such as a delivery or the start of a review, really took place.",
          ],
          points: ["Operational checks", "Too short to reveal direction"],
        },
        {
          label: "Weekly",
          heading: "Watch growth and usage find a rhythm",
          icon: "calendar",
          body: [
            [{ text: "Weekly library analytics", page: 189 }, " provide a broader perspective on library growth and usage."],
            "A week absorbs the uneven arrival of creative work, so the first hints of a trend tend to surface here, often before they are clear enough to act on.",
          ],
          points: ["The rhythm of production", "Early hints of direction"],
        },
        {
          label: "Monthly",
          heading: "Recognise the longer direction",
          icon: "trend",
          body: [
            [{ text: "Monthly library analytics", page: 190 }, " help organisations identify longer-term asset management trends."],
            "Planning decisions about storage, taxonomy and upkeep sit comfortably at this span, where one exceptional week no longer dominates the picture.",
          ],
          points: ["A planning horizon", "Exceptions kept in proportion"],
        },
      ],
      sources: [{ kind: "pdf", page: 188 }, { kind: "pdf", page: 189 }, { kind: "pdf", page: 190 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about creative library trends",
      items: [
        {
          question: "Do creative library trends predict what will happen next?",
          answer: "No. They describe the direction a library has been taking, which is a sound basis for planning but not a forecast. Treat a trend as a reason to prepare, and check it again as circumstances change.",
        },
        {
          question: "Are creative library trends useful for a small library?",
          answer: "Yes, although patterns take longer to emerge when activity is light. Smaller libraries often gain most from watching participation and discovery, where a change in a few people’s habits has a visible effect.",
        },
        {
          question: "How do creative library trends feed into growth planning?",
          answer: ["Trends describe how the library changes. ", { text: "Library growth reporting", page: 209 }, " puts that understanding to work, helping organisations anticipate storage and operational requirements."],
        },
        {
          question: "Who gains most from following creative library trends?",
          answer: ["People who plan for the library rather than only using it: operations leads deciding on storage, library managers looking after the taxonomy, and leaders who want ", { text: "a higher-level view of the library and its usage", page: 210 }, "."],
        },
      ],
      sources: [{ kind: "pdf", page: 187 }, { kind: "pdf", page: 209 }, { kind: "pdf", page: 210 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on reading change over time",
      variant: "compact",
      pages: [188, 189, 190, 196, 209, 205],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the other analytics cadences." }],
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
