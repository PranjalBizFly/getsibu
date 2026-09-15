/**
 * 190 · Monthly Library Analytics — /analytics/monthly-library-analytics
 *
 * Angle (cluster: analytics-cadence): the monthly span as the planning and upkeep horizon — longer-term asset
 * management trends and the hard-to-reverse decisions they justify (storage, taxonomy, archiving, duplicates,
 * access, leadership updates). Daily (188) owns short-term checks, Weekly (189) growth against usage in the
 * working rhythm, Creative Library Trends (187) the dimensions of change and trend versus event.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of planning library upkeep from longer-term patterns; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 190,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Analytics",
      lede: "Step back to a monthly view to identify longer-term trends in how your assets are managed, and turn them into the upkeep and planning decisions that one busy week could never justify.",
      visual: { diagram: "library-activity", focus: "cadence" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 190 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Where lasting patterns in asset management show",
      body: [
        "Monthly analytics help organisations identify longer-term asset management trends. At this distance, individual deliveries and review rounds recede, and the underlying direction of the library comes into view.",
        "Decisions about a library are often costly to reverse. Restructuring a taxonomy, changing an archiving policy or committing to more storage affects everyone who uses the library, so each deserves evidence that holds beyond a single campaign. A month is long enough to smooth over ordinary unevenness, yet short enough to act before a problem becomes entrenched.",
        [
          "A monthly view pairs naturally with ",
          { text: "storage by category", page: 192 },
          ", which shows how storage divides across video, image, document and audio, and with ",
          { text: "creative operations analytics", page: 195 },
          ", which help leaders understand how efficiently the asset library is being used.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Longer-term asset management trends", "Evidence for hard-to-reverse decisions", "Seasons across the creative calendar", "A regular rhythm for upkeep", "Direction shared with leadership"],
      },
      highlight: {
        heading: "In practice",
        body: "A brand operations manager looks at the month’s trends before agreeing any change to tags, archiving or storage, so changes follow evidence rather than the most recent request.",
        tags: ["Brand operations", "Governance", "Planning"],
      },
      glance: {
        heading: "Monthly analytics in brief",
        facts: [
          { label: "Area", value: "Analytics" },
          { label: "Shows", value: "Longer-term asset management trends" },
          { label: "Shorter view", value: "Weekly Library Analytics", page: 189 },
          { label: "Change over time", value: "Creative Library Trends", page: 187 },
        ],
        actions: [{ kind: "page", page: 181, label: "Creative Asset Analytics" }]
      },
      sources: [{ kind: "pdf", page: 190 }, { kind: "pdf", page: 192 }, { kind: "pdf", page: 195 }, { kind: "pdf", page: 189 }, { kind: "pdf", page: 187 }, EXPLAINS],
    },
    {
      kind: "before-after",
      id: "react-or-plan",
      eyebrow: "Why step back",
      heading: "Reacting to busy weeks compared with planning from monthly trends",
      beforeLabel: "Reacting week by week",
      afterLabel: "Planning from monthly trends",
      before: ["Storage added once it runs short", "Tags renamed after one complaint", "Clean-ups prompted by frustration", "Leaders briefed with anecdotes", "Busy seasons treated as surprises"],
      after: ["Storage requirements anticipated from growth", "Tag changes grounded in search patterns", "Upkeep on a regular rhythm", "Leaders shown the library’s direction", "Busy seasons expected and prepared for"],
      sources: [{ kind: "pdf", page: 190 }, { kind: "pdf", page: 209 }, { kind: "pdf", page: 186 }, { kind: "pdf", page: 210 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "decisions",
      eyebrow: "What it informs",
      heading: "Decisions that belong on a monthly horizon",
      items: [
        {
          heading: "Storage planning",
          body: "Growth measured over months sets a pace that future capacity can be judged against, and library growth reporting helps organisations anticipate storage and operational requirements.",
          icon: "database",
          points: ["A pace of growth, not one-off jumps", "Capacity arranged ahead of need"],
          page: 209,
        },
        {
          heading: "Taxonomy revision",
          body: "Shifts in which tags are used or searched can show where the vocabulary has drifted from the way colleagues look for material.",
          icon: "tag",
          points: ["Terms gaining and losing relevance", "Changes timed for quieter periods"],
          page: 186,
        },
        {
          heading: "Archiving and expiry",
          body: "A regular moment to identify content that should no longer be used, and to retain historical material without letting it clutter everyday discovery.",
          icon: "archive",
          points: ["Expired content identified", "Finished work retained, not lost"],
          page: 108,
        },
        {
          heading: "Duplicate clean-up",
          body: "Unnecessary copies build up gradually, and duplicate asset management helps identify them and can support storage optimisation before they grow into a larger problem.",
          icon: "copy",
          points: ["Copies found before they multiply", "Space kept for content that matters"],
          page: 112,
        },
        {
          heading: "Access review",
          body: "As teams and projects change, access that once made sense can stop fitting. Folder access maps help show which areas of the library receive attention.",
          icon: "lock",
          points: ["Areas that attract attention", "Access that matches current work"],
          page: 198,
        },
        {
          heading: "Leadership updates",
          body: "Reporting turns analytics into information that can support operational decisions, and a monthly span gives leaders direction instead of one week’s events.",
          icon: "briefcase",
          points: ["Direction rather than detail", "Decisions rather than updates"],
          page: 205,
        },
      ],
      sources: [{ kind: "pdf", page: 209 }, { kind: "pdf", page: 186 }, { kind: "pdf", page: 104 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 112 }, { kind: "pdf", page: 198 }, { kind: "pdf", page: 205 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "reading",
      eyebrow: "Considerations",
      heading: "Reading a month of library activity well",
      items: [
        {
          heading: "Read against the creative calendar",
          summary: "Launches, festive campaigns and summer breaks make some months busier by design.",
          icon: "calendar",
          body: [
            "Before judging a month, set it beside what the organisation’s calendar predicted. A heavy month in launch season may be entirely normal, while the same level of activity in a usually quiet month would be worth understanding.",
          ],
        },
        {
          heading: "Mind the month boundaries",
          summary: "A project that spans two months can look smaller in each than it really was.",
          icon: "layers",
          body: [
            "Creative work ignores the calendar. A production that begins late in one month and wraps early in the next splits its activity between them, so check whether a dip followed by a rise belongs to the same project before reading either as a change.",
          ],
        },
        {
          heading: "Ask the same questions each month",
          summary: "Trends only become visible when the same things are compared over time.",
          icon: "refresh",
          body: [
            "Settle on a short set of recurring questions, for example about growth, participation, search and storage, and return to them every month rather than chasing whatever looked interesting last time.",
          ],
        },
        {
          heading: "Look beneath the library-wide picture",
          summary: "An organisation-wide trend can hide opposite movements in different teams.",
          icon: "users",
          body: [
            "Library-wide growth may combine one department expanding quickly with another that has stopped contributing altogether.",
            [{ text: "Creative team analytics", page: 199 }, " provide visibility into how different groups interact with the library, which helps separate one movement from the other."],
          ],
        },
        {
          heading: "Give every trend an owner",
          summary: "A trend nobody is responsible for rarely changes anything.",
          icon: "user",
          body: [
            "Assign each recurring question to someone able to act on it: storage to operations, tags to the library manager, participation to team leads. The monthly review then ends with decisions rather than observations.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 190 }, { kind: "pdf", page: 199 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about monthly library analytics",
      items: [
        {
          question: "What counts as a longer-term trend in monthly library analytics?",
          answer: "A pattern that holds across months rather than appearing in a single week, for example steady growth in one kind of content or a lasting change in who takes part. One-off imports and isolated busy weeks are events, not trends.",
        },
        {
          question: "Should monthly library analytics be shared beyond the library team?",
          answer: ["Often, yes. Leaders and budget holders rarely need weekly detail, but they benefit from direction, and ", { text: "executive asset analytics", page: 210 }, " provide a higher-level view of the organisation’s creative library and its usage."],
        },
        {
          question: "How are monthly library analytics different from creative library trends?",
          answer: [{ text: "Creative library trends", page: 187 }, " concern how the library changes over time in general. Monthly analytics apply one particular span, long enough to reveal lasting patterns and regular enough to plan around."],
        },
      ],
      sources: [{ kind: "pdf", page: 190 }, { kind: "pdf", page: 210 }, { kind: "pdf", page: 187 }, { kind: "pdf", page: 189 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on longer-term library patterns",
      variant: "compact",
      pages: [187, 189, 209, 192, 210, 205],
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
