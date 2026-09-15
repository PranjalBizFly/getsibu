/**
 * 204 · Asset Performance Insights — /analytics/asset-performance-insights
 *
 * Angle (cluster: usage-tracking): recurring patterns in asset usage — steady reliance, launch and fade, seasonal
 * return, slow build, revival — read as patterns rather than scores. Asset Usage Analytics (182) owns attention and
 * under-use; Asset Access Analytics (197) owns viewing versus using; Asset Usage Tracking (106) owns the lifecycle.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how creative assets are used over their life; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 204,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Analytics",
      lede: "Recognise the patterns that asset usage follows, from steady reliance to seasonal return, and use them to decide where upkeep, preparation and new production will make the most difference.",
      visual: { diagram: "library-activity", focus: "cadence" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 204 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "The recurring shapes that asset usage takes",
      body: [
        "Asset performance insights in GetSibu help teams identify patterns in asset usage. Rather than asking whether a single file is used, they look for the recurring shapes that use takes across a library.",
        "The word “performance” tempts people towards a score, and scores suit creative assets poorly. Much of a library’s value sits in material used rarely but at important moments, and a score built on frequency would place it last. A pattern is more honest: it describes how an asset is used without pretending that every asset should be used in the same way.",
        [
          "Patterns build on simpler views of use. ",
          { text: "Asset usage tracking", page: 106 },
          " helps teams understand which assets are being used and which remain inactive, and ",
          { text: "asset access analytics", page: 197 },
          " provide information about how content is viewed or used.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Recurring shapes of usage", "Patterns rather than scores", "Steady, seasonal and short-lived use", "Assets that return to use", "Upkeep that follows the pattern"],
      },
      highlight: {
        heading: "In practice",
        body: "A content lead notices a set of lifestyle images gradually gaining use after they were retagged, and makes sure the next brief points colleagues towards them.",
        tags: ["Content leads", "Lifestyle imagery", "Findability"],
      },
      glance: {
        heading: "Performance insights in brief",
        facts: [
          { label: "Area", value: "Analytics" },
          { label: "Identifies", value: "Patterns in asset usage" },
          { label: "Builds on", value: "Asset Usage Tracking", page: 106 },
          { label: "Feeds into", value: "Creative Library Reporting", page: 205 },
        ],
        actions: [{ kind: "page", page: 181, label: "Creative Asset Analytics" }]
      },
      sources: [{ kind: "pdf", page: 204 }, { kind: "pdf", page: 106 }, { kind: "pdf", page: 197 }, { kind: "pdf", page: 205 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "patterns",
      eyebrow: "Common patterns",
      heading: "Five usage patterns worth learning to recognise",
      items: [
        {
          heading: "Steady reliance",
          body: "Logos, core product photography and standard presentations are drawn on consistently from one project to the next. This pattern marks the working core of a library.",
          icon: "check",
          points: ["Deserves the most careful upkeep", "Any change here affects everyone"],
        },
        {
          heading: "Launch and fade",
          body: "Material is used intensively around a release or campaign, then drops away sharply. For time-bound content, the decline is the pattern working as intended.",
          icon: "zap",
          points: ["Expected for campaign material", "Worrying only for lasting assets"],
        },
        {
          heading: "Seasonal return",
          body: "Use recurs at the same point in the calendar: holiday imagery, annual event material, back-to-school campaigns. Demand of this kind can be anticipated rather than met in a rush.",
          icon: "calendar",
          points: ["Predictable demand", "Preparation before the season"],
        },
        {
          heading: "Slow build",
          body: "Some assets gain use gradually as more colleagues discover them, often after they are shared, retagged or mentioned in a brief. Value that was always there is being found.",
          icon: "trend",
          points: ["Discovery catching up with value", "A case for easier findability"],
        },
        {
          heading: "Revival",
          body: "Material that sat dormant for a long time suddenly returns to use, prompted by an anniversary, a returning product or a retrospective.",
          icon: "restore",
          points: ["Archive content regaining relevance", "Accuracy worth checking first"],
        },
      ],
      sources: [{ kind: "pdf", page: 204 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "reading-patterns",
      eyebrow: "Considerations",
      heading: "Reading usage patterns without turning them into rankings",
      items: [
        {
          heading: "Compare like with like",
          summary: "Patterns are most informative within one kind of asset.",
          icon: "layers",
          body: [
            "Setting a logo against a documentary clip reveals nothing, because each is used in a different way by different people. Compare product imagery with product imagery and campaign films with campaign films, and differences in pattern start to mean something.",
          ],
        },
        {
          heading: "When a pattern breaks, look for what changed",
          summary: "A steady asset that suddenly declines has usually been affected by something specific.",
          icon: "history",
          body: [
            [
              "A replaced version, a guideline update, a retagging exercise or a newer alternative can each interrupt an established pattern. ",
              { text: "Creative file history", page: 95 },
              " provides context around how an asset has changed over time, which is often where the explanation sits.",
            ],
          ],
        },
        {
          heading: "Patterns inform decisions; people make them",
          summary: "No pattern is a reason on its own to retire or replace an asset.",
          icon: "users",
          body: [
            "A fading pattern might mean an asset is obsolete or simply that its campaign has ended. The people who made and use the material know which, and a short conversation with them costs less than retiring something still in demand.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 95 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "Upkeep matched to the way product imagery is used",
      team: "An e-commerce brand team",
      situation: "An e-commerce brand keeps a large library of product images, seasonal campaign imagery and promotional banners. Its small team cannot keep every image equally up to date.",
      steps: [
        { heading: "Patterns are identified", body: "Reading asset performance insights, the team recognises steady reliance on core product shots, a seasonal return for gift imagery and a quick fade for flash-sale banners." },
        { heading: "Core imagery comes first", body: ["When products change, the steadily used shots are refreshed first, with ", { text: "image version management", page: 98 }, " keeping the different versions of each visual in one structured record."] },
        { heading: "Seasonal imagery is prepared early", body: ["Ahead of the gift season, the returning imagery goes through ", { text: "asset approval", page: 68 }, ", so its status history shows it has been reviewed before demand arrives."] },
        { heading: "Short-lived banners leave circulation", body: ["Once each sale ends, its banners are ", { text: "archived", page: 108 }, ", so they are retained for reference once the offer they carried has gone."] },
        { heading: "A revival is checked", body: "When a discontinued product returns, its older images begin to be used again, and the team checks prices, packaging and branding in them before colleagues rely on them." },
      ],
      outcome: "The team’s limited upkeep effort follows how each kind of image is used, rather than spreading evenly across images that nobody needs.",
      link: { page: 230, label: "GetSibu for E-Commerce Brands" },
      sources: [{ kind: "pdf", page: 204 }, { kind: "pdf", page: 98 }, { kind: "pdf", page: 68 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 230 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about asset performance insights",
      items: [
        {
          question: "Do asset performance insights measure how content performs with an audience?",
          answer: "No. Here the word describes how colleagues inside the organisation draw on material held in the library. How an audience responded to finished work is a separate question, answered wherever that work was published.",
        },
        {
          question: "How do asset performance insights differ from asset usage analytics?",
          answer: [
            { text: "Asset usage analytics", page: 182 },
            " show which assets receive attention and which remain underused. Performance insights look for the recurring shapes of that use, such as seasonal return or a steady decline.",
          ],
        },
        {
          question: "Can asset performance insights help plan new content production?",
          answer: "They can inform it, mainly by showing where existing material already meets a need that keeps returning, so new production can go to the gaps rather than to subjects the library already covers well.",
        },
        {
          question: "Where do asset performance insights fit in library reporting?",
          answer: [
            "Patterns make useful evidence in ",
            { text: "creative library reporting", page: 205 },
            ", which turns analytics into information that can support operational decisions about upkeep and production.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 204 }, { kind: "pdf", page: 182 }, { kind: "pdf", page: 205 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on patterns of asset use",
      variant: "compact",
      pages: [106, 197, 182, 205, 95, 230],
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
