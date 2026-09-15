/**
 * 189 · Weekly Library Analytics — /analytics/weekly-library-analytics
 *
 * Angle (cluster: analytics-cadence): the broader weekly perspective on growth and usage — the week as the unit of
 * creative work, reading growth and usage side by side, and a short weekly review routine. Daily (188) owns the
 * short-term operational check, Monthly (190) the planning horizon and longer-term trends, Creative Library Trends
 * (187) how the library changes over time.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of reviewing library growth and usage week by week; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 189,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Analytics",
      lede: "Read your library across a working week, where uneven days even out and growth can be judged against usage, and use that view to keep the library in step with the work your team produces.",
      visual: { diagram: "library-activity", focus: "cadence" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 189 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A week’s distance from the daily noise",
      body: [
        "Weekly analytics in GetSibu offer a broader perspective on how the library grows and how it is used. Across a week, the pace of the library begins to read as a pattern rather than a run of spikes and lulls.",
        "A week is the natural unit of a great deal of creative work. Briefs, shoots, edits and review rounds are planned in weeks, and it is the span over which people can still remember what they did. That makes weekly activity easy to connect with real events: the week a campaign went into production, the week an edit locked, the week the team was away at a trade show.",
        [
          "A weekly perspective covers both growth and usage, and the two mean most when read against each other. Growth alone says the library is getting bigger; set against ",
          { text: "asset usage analytics", page: 182 },
          ", which help show which assets receive attention and which remain underused, it suggests whether that growth is being put to work.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Growth and usage in one perspective", "The week as a unit of creative work", "Uneven days evened out", "Content added against content used", "A routine for library upkeep"],
      },
      highlight: {
        heading: "In practice",
        body: "At the end of the week, a production coordinator sets how much the library grew against how actively it was used, and raises any gap with the team on Monday.",
        tags: ["Coordinators", "Growth", "Usage"],
      },
      glance: {
        heading: "Weekly analytics in brief",
        facts: [
          { label: "Area", value: "Analytics" },
          { label: "Shows", value: "A broader perspective on library growth and usage" },
          { label: "Shorter view", value: "Daily Library Analytics", page: 188 },
          { label: "Longer view", value: "Monthly Library Analytics", page: 190 },
        ],
        actions: [{ kind: "page", page: 181, label: "Creative Asset Analytics" }]
      },
      sources: [{ kind: "pdf", page: 189 }, { kind: "pdf", page: 182 }, { kind: "pdf", page: 188 }, { kind: "pdf", page: 190 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "patterns",
      eyebrow: "Growth meets usage",
      heading: "Four ways a week of growth and usage can look",
      tabs: [
        {
          label: "Growing and used",
          heading: "Material arrives and is put to work",
          icon: "check",
          body: [
            "The healthiest weekly pattern: new content lands, and colleagues find and use it. The task is making sure organisation keeps pace, so the pattern survives busier weeks.",
            "Note what made the week work, such as a delivery that arrived well described or a team told where to look, because those habits are worth repeating.",
          ],
          points: ["Keep tagging in step with inflow", "Repeat what made the week work"],
        },
        {
          label: "Growing, little used",
          heading: "The library fills faster than it is used",
          icon: "flag",
          body: [
            "Content is arriving, but attention is not following it. That can be expected, for instance when footage lands before an edit begins. When it persists, new material may be hard to find or unknown to the people who need it.",
            ["If the new work is well described and still ignored, the likely gap is awareness, and ", { text: "shared creative views", page: 79 }, " can put a recurring collection of assets in front of those colleagues through a URL."],
          ],
          points: ["Expected before an edit or launch", "A concern when it persists"],
        },
        {
          label: "Steady and used",
          heading: "The library is being drawn on for reuse",
          icon: "refresh",
          body: [
            "Little new content, plenty of use: colleagues are working from what the library already holds. Between campaigns, that usually means reuse is doing its job.",
            "It is also a good week for upkeep, because a light inflow leaves room to tidy tags and review older material without a backlog building behind.",
          ],
          points: ["Reuse between busy periods", "Room for tidying tags"],
        },
        {
          label: "Quiet on both",
          heading: "Little arriving and little being used",
          icon: "clock",
          body: [
            "A quiet week can simply reflect holidays or a pause between projects. Several in a row are worth raising with the teams involved before the quiet becomes a habit.",
            [{ text: "Contributor analytics", page: 185 }, " help show whether the usual contributors have stopped taking part, which narrows down whom to ask."],
          ],
          points: ["Holidays and pauses explain many", "Persistent quiet merits a conversation"],
        },
      ],
      sources: [{ kind: "pdf", page: 189 }, { kind: "pdf", page: 79 }, { kind: "pdf", page: 185 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "weekly-review",
      eyebrow: "Step by step",
      heading: "A short weekly review of growth and usage",
      intro: "A routine a library manager or coordinator can run at the close of each working week.",
      steps: [
        { heading: "Recall the week", body: "Note what happened, such as deliveries, launches, review rounds and absences, since the analytics only make sense against that context.", icon: "calendar" },
        { heading: "Read growth", body: "Check how much the library grew and whether that matches the work the week was supposed to produce.", icon: "trend" },
        { heading: "Read usage", body: "Check how actively the library was used, and whether that fits what the team was working on.", icon: "eye" },
        { heading: "Name the pattern", body: "Decide which combination of growth and usage the week resembles, and whether it continues the previous week or breaks from it.", icon: "layers" },
        { heading: "Choose one action", body: "Pick a single follow-up, such as reviewing tags on a new delivery, sharing a view with a team that has missed new work, or archiving finished material.", icon: "check" },
        { heading: "Pass on the longer questions", body: "Take questions about direction or capacity to the monthly view, which helps identify longer-term trends.", icon: "compass", page: 190 },
      ],
      sources: [{ kind: "pdf", page: 189 }, { kind: "pdf", page: 190 }, { kind: "pdf", page: 108 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A social team keeps a fast-growing library usable",
      team: "A social media team",
      situation: "A social media team produces short videos, graphics and post copy for several channels every week, so its library grows quickly. The team lead wants to be sure that growth stays useful.",
      steps: [
        {
          heading: "The week’s growth is read",
          body: "Weekly analytics show a large week of growth after a product launch, in line with what the team produced.",
        },
        {
          heading: "Usage lags behind",
          body: "Usage shows the launch graphics in heavy use while most of the short videos remain underused.",
        },
        {
          heading: "The cause turns out to be naming",
          body: "The videos had been uploaded under working filenames with almost no tags, so colleagues searching by product never came across them. The team tags them by product and campaign.",
        },
        {
          heading: "Regional colleagues get one set",
          body: ["Colleagues in other regions who repost the content are sent a ", { text: "shared view of the launch assets", page: 78 }, ", so everyone works from the same set without anyone creating duplicate copies."],
        },
        {
          heading: "The next week confirms the fix",
          body: "A week later, the videos are in use, and the team adds tagging to its routine for every delivery.",
        },
      ],
      outcome: "Growth stays useful because the team treats the weekly view as a prompt: when the library grows faster than it is used, the gap gets a cause and a fix before it turns into a backlog.",
      link: { page: 234, label: "GetSibu for Social Media Teams" },
      sources: [{ kind: "pdf", page: 189 }, { kind: "pdf", page: 182 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 78 }, { kind: "pdf", page: 234 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about weekly library analytics",
      items: [
        {
          question: "Can weekly library analytics show whether a fix has worked?",
          answer: "They can give an early sign. After a delivery is retagged or a view is shared, the following week’s usage suggests whether colleagues have found the material, although one week is a hint rather than proof.",
        },
        {
          question: "Are weekly library analytics enough for storage planning?",
          answer: ["They provide useful context, but capacity decisions benefit from a longer span. ", { text: "Storage growth analytics", page: 149 }, " give historical context on how quickly the library is expanding, and ", { text: "library growth reporting", page: 209 }, " helps anticipate storage and operational requirements."],
        },
        {
          question: "What if a team’s work does not follow a weekly rhythm?",
          answer: "Some work runs on longer cycles, such as a documentary edit or an annual report. The weekly view still helps with upkeep, but judgements about direction are better made from the monthly view.",
        },
        {
          question: "How do weekly library analytics differ from monthly library analytics?",
          answer: "The weekly view sets growth against usage close enough to the work to act on straight away. The monthly view steps further back, to help an organisation identify longer-term trends in how its assets are managed.",
        },
      ],
      sources: [{ kind: "pdf", page: 189 }, { kind: "pdf", page: 149 }, { kind: "pdf", page: 209 }, { kind: "pdf", page: 190 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on reading the library over time",
      variant: "compact",
      pages: [188, 190, 187, 182, 185, 234],
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
