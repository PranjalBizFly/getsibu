/**
 * 210 · Executive Asset Analytics — /analytics/executive-asset-analytics
 *
 * Angle (clusters: team-analytics, reporting): the higher-level view of the creative library and its usage for
 * leaders — the questions it should answer, how it differs from operational views and how to present it honestly.
 * Creative Operations Analytics (195) owns efficiency; Creative Library Reporting (205) owns building reports.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of leadership reporting practice; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 210,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Analytics",
      lede: "Give leaders a view of the creative library they can act on: whether the organisation has adopted it, whether growth is planned for and whether approved work is reaching the people who need it.",
      visual: { diagram: "library-activity", focus: "cadence" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 210 }, { kind: "pdf", page: 199 }, { kind: "pdf", page: 209 }, { kind: "pdf", page: 203 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "The library seen from where organisational decisions are made",
      body: [
        "Executive analytics in GetSibu provide a higher-level view of the organisation’s creative library and its usage. They exchange the detail a library manager needs for the breadth a leader needs: the library as a whole and the way the organisation relies on it.",
        "Leaders seldom act on individual assets, tags or folders. Their decisions concern investment, risk, organisational change and priorities, such as whether to extend the library to more teams or whether a budget for storage and people is justified. A view built for those decisions has to be brief, consistent over time and candid about what it leaves out.",
        [
          "A leadership view rests on more detailed analytics beneath it. ",
          { text: "Creative operations analytics", page: 195 },
          " help leaders understand how efficiently the asset library is being used, and ",
          { text: "creative library reporting", page: 205 },
          " turns analytics into information that can support operational decisions.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["The library as a whole", "Usage across the organisation", "Adoption, growth, reuse and control", "Direction over detail", "Evidence for investment decisions"],
      },
      highlight: {
        heading: "In practice",
        body: "Ahead of a budget round, a chief marketing officer asks for one view of how widely the library is used and how it is developing, not the operational detail behind it.",
        tags: ["Leaders", "Budgets", "Direction"],
      },
      glance: {
        heading: "Executive analytics in brief",
        facts: [
          { label: "Area", value: "Analytics" },
          { label: "Provides", value: "A higher-level view of the library and its usage" },
          { label: "Operational lens", value: "Creative Operations Analytics", page: 195 },
          { label: "Behind the view", value: "Creative Library Reporting", page: 205 },
        ],
        actions: [{ kind: "page", page: 181, label: "Creative Asset Analytics" }]
      },
      sources: [{ kind: "pdf", page: 210 }, { kind: "pdf", page: 195 }, { kind: "pdf", page: 205 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "leadership-questions",
      eyebrow: "Leadership questions",
      heading: "Five questions a leadership view of the library should answer",
      items: [
        {
          heading: "Has the organisation adopted it?",
          body: "Leaders want to know whether the library has become how the organisation works or remains one team’s tool. Team analytics provide visibility into how different groups interact with the library.",
          icon: "users",
          points: ["Breadth across the organisation", "Groups not yet on board"],
          page: 199,
        },
        {
          heading: "Is growth planned for?",
          body: "Growth signals activity; the leadership concern is whether its consequences are foreseen. Library growth reporting helps organisations anticipate storage and operational requirements.",
          icon: "trend",
          points: ["Requirements foreseen, not discovered", "Budgets that follow the work"],
          page: 209,
        },
        {
          heading: "Is approved work reaching the business?",
          body: "A controlled library matters only if colleagues draw on it. Brand teams can use analytics to understand which approved assets are being accessed and reused.",
          icon: "approval",
          points: ["Approved material in use", "Consistency beyond the creative team"],
          page: 203,
        },
        {
          heading: "Is existing work reused?",
          body: "Material that is found and used again is material the organisation avoids making a second time. Usage analytics help teams understand which assets receive attention and which remain underused.",
          icon: "refresh",
          points: ["Reuse before recreation", "Investment in content that keeps working"],
          page: 182,
        },
        {
          heading: "Is the library governed?",
          body: "Usage says nothing about control on its own. Enterprise governance combines roles, permissions, audit logs, authentication and organisational policies, and leaders need confidence those are in place.",
          icon: "shield",
          points: ["Access matched to responsibility", "Accountability for important actions"],
          page: 179,
        },
      ],
      sources: [{ kind: "pdf", page: 199 }, { kind: "pdf", page: 209 }, { kind: "pdf", page: 203 }, { kind: "pdf", page: 182 }, { kind: "pdf", page: 179 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "two-views",
      eyebrow: "Two levels of view",
      heading: "How an executive view differs from the operational one",
      columns: ["Operational view", "Executive view"],
      emphasis: 1,
      rows: [
        ["Audience", "Library managers and operations leads", "Leaders and budget holders"],
        ["Unit of attention", "Assets, tags, folders and teams", "The library as a whole"],
        ["Typical question", "What needs attention now?", "Is the library serving the organisation?"],
        ["Rhythm", "The working week", "Planning and budget cycles"],
        ["Leads to", "Actions for the library team", "Decisions on investment and priorities"],
      ],
      sources: [{ kind: "pdf", page: 210 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "presenting",
      eyebrow: "Considerations",
      heading: "Presenting library analytics to leadership",
      items: [
        {
          heading: "Anchor the view to the original purpose",
          summary: "Leaders judge the library against what it was adopted to achieve.",
          icon: "compass",
          body: [
            "If the library was introduced to end duplicated shoots, lead with reuse; if it was introduced to control brand exposure, lead with approved material in use. A view that ignores the original purpose leaves leaders to supply their own, and they may choose a different one.",
          ],
        },
        {
          heading: "Keep the view the same from one review to the next",
          summary: "Continuity is what lets leaders see direction.",
          icon: "calendar",
          body: [
            "Changing what is shown at every review makes each one a fresh introduction and hides the direction leaders care about. Settle on a small set of views, add to them sparingly and explain any change in how something is measured.",
          ],
        },
        {
          heading: "Share difficulties as readily as progress",
          summary: "A view that only ever improves stops being believed.",
          icon: "flag",
          body: [
            "A group that has not adopted the library, or growth that is outrunning the plan, belongs in front of leaders early, together with what is being done about it. Credibility earned on bad news makes the good news persuasive.",
          ],
        },
        {
          heading: "Claim only what usage can support",
          summary: "Usage evidence is not proof of financial return.",
          icon: "gauge",
          body: [
            [
              "A higher-level view shows how the library is used, not a figure for money saved. A centralised library ",
              { text: "can reduce time spent searching", page: 348 },
              ", recreating files and resolving version confusion, and presenting usage as support for that argument is more defensible than presenting it as a calculated return.",
            ],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 348 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about executive asset analytics",
      items: [
        {
          question: "Which leaders gain most from executive asset analytics?",
          answer: "Those whose decisions shape the library without their using it every day: heads of marketing, creative and brand, operations directors, agency principals and the budget holders who fund storage and people.",
        },
        {
          question: "How much detail should sit behind an executive view?",
          answer: "Enough that any point in it can be explained when a leader asks. Leaders rarely ask, but a view whose supporting detail cannot be produced loses trust quickly, so keep the operational analytics behind each point within reach.",
        },
        {
          question: "Should executive asset analytics name individual contributors?",
          answer: [
            "Rarely. A leadership view concerns the organisation, and naming people shifts attention towards individual performance. Rankings such as ",
            { text: "top contributors", page: 194 },
            " are better used by those who run the library day to day.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 210 }, { kind: "pdf", page: 194 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on analytics for leaders",
      variant: "compact",
      pages: [195, 205, 199, 209, 203, 182],
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
