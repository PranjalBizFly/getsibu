/**
 * 181 · Creative Asset Analytics — /analytics/creative-asset-analytics
 *
 * Angle (cluster: library-analytics, primary): the pillar for the category — the signals library analytics
 * cover (uploads, comments, storage, contributors, tags, activity), the question each one answers, how the
 * time windows, visual overview and reporting fit together, and what analytics cannot tell a team. Each
 * signal's detail belongs to its own page (182–186, 191, 193, 194); the hub /analytics is generated.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of reading creative library analytics; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 181,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Analytics",
      lede: "A guide to what GetSibu analytics reveal about a creative library, from uploads and comments to storage, contributors and tags, and the practical question each of those signals helps a team answer.",
      visual: { diagram: "library-activity", focus: "uploads" },
      actions: [
        { kind: "global", cta: "primary" },
        { kind: "page", page: 191, label: "Asset Activity Dashboard" },
      ],
      sources: [{ kind: "pdf", page: 181 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Seeing how a creative library is actually used",
      body: [
        "GetSibu analytics provide visibility into uploads, comments, storage, contributors, tags and other library activity. Taken together, they describe the library as people use it, not only as it was organised on paper.",
        "Without that visibility, questions about a shared library get settled by impression. A producer is convinced the footage folders are filling with material nobody opens; a designer is sure nobody searches the brand area; an administrator cannot say who has been adding most of the new material. Any of those impressions might be right, yet none can be checked, so decisions about storage, taxonomy or access end up resting on whoever argues most persuasively.",
        [
          "Analytics sit inside the same platform as the rest of the library. GetSibu is positioned as an ",
          { text: "operating system for creative libraries", page: 2 },
          " that brings storage, organisation, AI tagging, search, collaboration, permissions and analytics together, so the activity being measured happens in one place rather than across disconnected tools.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Uploads and new content", "Comments as a trace of review", "Storage across asset categories", "Contributors and participation", "Tags used and searched", "Attention and under-use"],
      },
      highlight: {
        heading: "In practice",
        body: "Before proposing a new folder structure, a library manager checks which tags colleagues search for and which areas of the library receive attention, so the change starts from how people already work.",
        tags: ["Library managers", "Creative leads", "Operations"],
      },
      glance: {
        heading: "Where analytics fit",
        facts: [
          { label: "Area", value: "Analytics" },
          { label: "Covers", value: "Uploads, comments, storage, contributors, tags and activity" },
          { label: "Visual overview", value: "Asset Activity Dashboard", page: 191 },
          { label: "Supports decisions", value: "Creative Library Reporting", page: 205 },
        ],
      },
      sources: [{ kind: "pdf", page: 181 }, { kind: "pdf", page: 2 }, { kind: "pdf", page: 191 }, { kind: "pdf", page: 186 }, { kind: "pdf", page: 198 }, { kind: "pdf", page: 205 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "signals",
      eyebrow: "What it covers",
      heading: "Six signals and the question behind each",
      items: [
        {
          heading: "Uploads",
          body: "Is material reaching the library at the pace the work suggests? Upload analytics show how much new content enters the library over time.",
          icon: "upload",
          points: ["Shoots, imports and handovers arriving", "Inflow as the first sign of growth"],
          page: 184,
        },
        {
          heading: "Comments",
          body: "Is review happening where the work lives? Because feedback stays on the asset instead of in email or chat, discussion becomes something a team can see.",
          icon: "message",
          points: ["Review traced to assets, not inboxes", "Quiet periods in feedback show too"],
          page: 73,
        },
        {
          heading: "Storage",
          body: "Where is capacity going? Storage analytics show how much space different asset categories consume.",
          icon: "database",
          points: ["Video, image, document and audio compared", "A starting point for capacity planning"],
          page: 183,
        },
        {
          heading: "Contributors",
          body: "Is the whole team taking part? Contributor analytics help reveal who adds content and who participates in library activity.",
          icon: "users",
          points: ["Adoption beyond the usual few people", "Where library knowledge is concentrated"],
          page: 185,
        },
        {
          heading: "Tags",
          body: "How do colleagues find things? Tag analytics identify frequently used or searched tags, which reflects how the library is being discovered.",
          icon: "tag",
          points: ["The vocabulary people depend on", "Pointers for refining the taxonomy"],
          page: 186,
        },
        {
          heading: "Asset usage",
          body: "Which assets earn their place? Usage analytics help teams understand which assets receive attention and which remain underused.",
          icon: "eye",
          points: ["Material worth reusing again", "Content that may need a second look"],
          page: 182,
        },
      ],
      sources: [{ kind: "pdf", page: 184 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 73 }, { kind: "pdf", page: 183 }, { kind: "pdf", page: 192 }, { kind: "pdf", page: 185 }, { kind: "pdf", page: 186 }, { kind: "pdf", page: 182 }, EXPLAINS],
    },
    {
      kind: "layers",
      id: "structure",
      eyebrow: "How it fits together",
      heading: "From single signals to operational decisions",
      layers: [
        {
          label: "Individual signals",
          body: "Each signal answers one narrow question, such as how much material arrives or who takes part, and none of them tells the whole story alone.",
        },
        {
          label: "Time windows",
          body: "The same activity read over different spans: daily analytics for a short-term view, weekly for a broader perspective on growth and usage, monthly for longer-term trends in asset management.",
          page: 187,
        },
        {
          label: "Visual overview",
          body: "The asset activity dashboard provides a visual overview of important library interactions: the broad picture, in visual form.",
          page: 191,
        },
        {
          label: "Library health",
          body: "Library health analytics can reveal growth, duplicates, inactive content and other organisational patterns, a sign of whether the library stays usable as it expands.",
          page: 196,
        },
        {
          label: "Reporting and planning",
          body: "Reporting turns analytics into information that can support operational decisions, including anticipating storage and operational requirements as the library grows.",
          page: 205,
        },
      ],
      sources: [{ kind: "pdf", page: 181 }, { kind: "pdf", page: 187 }, { kind: "pdf", page: 188 }, { kind: "pdf", page: 189 }, { kind: "pdf", page: 190 }, { kind: "pdf", page: 191 }, { kind: "pdf", page: 196 }, { kind: "pdf", page: 205 }, { kind: "pdf", page: 209 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "readers",
      eyebrow: "Who it helps",
      heading: "What each part of a creative organisation looks for",
      tabs: [
        {
          label: "Library managers",
          heading: "Keep the library in order as it grows",
          icon: "folder",
          body: [
            "For whoever looks after the library, analytics replace guesswork about upkeep. Knowing which tags colleagues use and search for most is a fair test of whether the taxonomy fits how people work, and a category view of storage points to the kinds of asset that take the most space.",
            ["Those signals lead to concrete work, such as adding synonyms to ", { text: "hierarchical tags", page: 8 }, " or finding unnecessary copies through ", { text: "duplicate asset management", page: 112 }, "."],
          ],
          points: ["A taxonomy shaped by real searches", "Storage reviewed category by category"],
        },
        {
          label: "Creative leads",
          heading: "Know whether work is arriving and being discussed",
          icon: "film",
          body: [
            "Creative and production leads want two reassurances: that material from shoots and projects is reaching the library, and that feedback is happening on the assets rather than in side conversations.",
            "Upload and comment activity speak to both. Contributor analytics add a third view, showing whether a whole team is involved or a handful of people are carrying the library for everyone else.",
          ],
          points: ["Delivery from shoots and projects", "Participation across the team"],
        },
        {
          label: "Marketing and brand",
          heading: "Learn which content earns its place",
          icon: "megaphone",
          body: [
            "Marketing and brand teams care most about use. Knowing which campaign assets attract attention, and which were produced and then forgotten, shapes what gets briefed, reshot or retired.",
            ["Brand teams can narrow the question further and look at ", { text: "which approved assets are accessed and reused", page: 203 }, ", a direct test of whether the approved library is doing its job."],
          ],
          points: ["Attention compared with under-use", "Reuse of approved material"],
        },
        {
          label: "Leaders",
          heading: "Judge how well the library serves the organisation",
          icon: "compass",
          body: [
            "Leaders seldom need to see individual uploads. They need to know whether the shared library is being used the way it was intended when the organisation adopted it.",
            [{ text: "Creative operations analytics", page: 195 }, " help leaders understand how efficiently the asset library is used, while ", { text: "executive asset analytics", page: 210 }, " give a higher-level view of the library and its usage."],
          ],
          points: ["Efficiency of everyday library use", "A view above the detail"],
        },
      ],
      sources: [{ kind: "pdf", page: 186 }, { kind: "pdf", page: 192 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 112 }, { kind: "pdf", page: 184 }, { kind: "pdf", page: 185 }, { kind: "pdf", page: 201 }, { kind: "pdf", page: 182 }, { kind: "pdf", page: 200 }, { kind: "pdf", page: 203 }, { kind: "pdf", page: 195 }, { kind: "pdf", page: 210 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "limits",
      eyebrow: "Considerations",
      heading: "What analytics can and cannot tell you",
      items: [
        {
          heading: "Activity is not the same as value",
          summary: "A busy asset or folder is not automatically an important one.",
          icon: "gauge",
          body: [
            "Activity records what people do, not why they do it. A brand guideline may be opened rarely and still matter enormously on the day it is needed, while a folder of rough drafts can attract plenty of activity and leave little behind.",
            "Use activity to find the questions worth asking, then answer them with knowledge of the work itself.",
          ],
        },
        {
          heading: "Only work done in the library leaves a trace",
          summary: "Feedback in email and files kept on laptops never reach the analytics.",
          icon: "folder",
          body: [
            "Analytics can only reflect what happens in the library. Notes sent by email, files saved to personal drives and decisions taken in a meeting all leave the picture incomplete, so a quiet signal may describe where the work happens rather than how much of it there is.",
            ["Before reading a gap as a lack of activity, ask whether the work moved somewhere else. When the question is whether something has really shifted, ", { text: "creative library trends", page: 187 }, " look at how the library changes over time."],
          ],
        },
        {
          heading: "Tags reflect the taxonomy behind them",
          summary: "Tag analytics are only as informative as the tags people apply.",
          icon: "tag",
          body: [
            "When one idea is tagged in several different ways, its activity is split between them and each tag looks less important than the idea really is.",
            "Consistent classification helps. AI-assisted tagging can suggest tags during asset processing, and authorised users can review, approve or override those suggestions so the vocabulary stays deliberate.",
          ],
        },
        {
          heading: "Patterns are not an audit record",
          summary: "Trends across the library and a record of specific actions answer different questions.",
          icon: "audit",
          body: [
            ["Analytics describe patterns. When the question is what happened to one particular file, the ", { text: "asset audit trail", page: 119 }, " provides visibility into important actions, and ", { text: "audit logs", page: 326 }, " keep a historical record of events such as permission changes, comments and asset changes."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 187 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 119 }, { kind: "pdf", page: 326 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about creative asset analytics",
      items: [
        {
          question: "Can creative asset analytics show what colleagues search for?",
          answer: ["At the level of tags. ", { text: "Most-searched tags", page: 193 }, " give insight into what users are frequently looking for, a sensible starting point before any change to the taxonomy."],
        },
        {
          question: "How do creative asset analytics support planning for storage?",
          answer: [{ text: "Library growth reporting", page: 209 }, " helps organisations anticipate storage and operational requirements, and ", { text: "storage growth analytics", page: 149 }, " add historical context about how quickly the library is expanding."],
        },
        {
          question: "Do creative asset analytics identify the most active contributors?",
          answer: [{ text: "Top contributor analytics", page: 194 }, " show which users contribute the most content or activity. Read them alongside the broader contributor view, which looks at who is taking part at all."],
        },
        {
          question: "Where should a team new to library analytics begin?",
          answer: "Start with one question the team already argues about, such as whether a folder is used or whether storage is running ahead of plans, and look at the single signal that answers it before exploring the rest.",
        },
      ],
      sources: [{ kind: "pdf", page: 193 }, { kind: "pdf", page: 209 }, { kind: "pdf", page: 149 }, { kind: "pdf", page: 194 }, { kind: "pdf", page: 185 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on library analytics",
      variant: "compact",
      pages: [184, 185, 186, 182, 183, 191],
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
