/**
 * 343 · Pro Plan — /pricing/pro-plan (HELD: storage-sources, pricing-tiers, pro-plan-contents)
 *
 * Angle (cluster: pricing-plans): the growing creative team — the needs PDF 343 names (larger storage, more users,
 * Google Drive synchronisation, comments, saved searches) and how to tell whether they match a team's work. Free
 * Plan (342) and page 344 are not linked or described. No prices, trials, quotas, seat counts, sync
 * details or providers beyond Google Drive.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how growing teams evaluate a plan; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 343,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "centered",
      eyebrow: "Pricing",
      lede: "What a creative team starts to need as it grows, why the GetSibu Pro plan is designed around those needs, and how to test each one against the way your team works today.",
      actions: [
        { kind: "global", cta: "primary" },
        { kind: "route", path: "/pricing", label: "More in Pricing" },
      ],
      sources: [{ kind: "pdf", page: 343 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Designed for the moment a team starts to grow",
      body: [
        "The Pro plan is designed for growing creative teams that need larger storage, more users, Google Drive synchronisation, comments and saved searches. Only one of those needs is about holding more; the rest concern how a team brings work in, discusses it and finds it again once several people depend on the same files.",
        "Growth changes what a team needs from its material before anyone decides it should. With a few people, asking a colleague where something is works well enough; with more, the answer has to live somewhere everyone can reach. Feedback that once happened across a desk starts to travel by email and chat, and different people rebuild the same searches without knowing it.",
        [
          "A team that wants to describe its needs precisely before choosing can start from ",
          { text: "creative team pricing", page: 345 },
          ", where a plan is chosen according to library size and collaboration requirements.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Designed for growing creative teams", "Larger storage and more users", "Google Drive synchronisation", "Comments on assets", "Saved searches"],
      },
      highlight: {
        heading: "In practice",
        body: "A small design team doubles in size over a busy year, and the question of where the latest brand files live starts arriving several times a day.",
        tags: ["Design teams", "Growth", "Brand"],
      },
      glance: {
        heading: "The Pro plan in brief",
        facts: [
          { label: "Area", value: "Pricing" },
          { label: "Designed for", value: "Growing creative teams" },
          { label: "Needs it answers", value: "Larger storage, more users, Google Drive synchronisation, comments, saved searches" },
          { label: "Sizing a team", value: "Creative Team Pricing", page: 345 },
        ],
      },
      sources: [{ kind: "pdf", page: 343 }, { kind: "pdf", page: 345 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "needs",
      eyebrow: "Need by need",
      heading: "How to test each need the Pro plan is designed around",
      items: [
        {
          heading: "Larger storage",
          summary: "Growth adds new material, and usually brings older material in as well.",
          icon: "database",
          body: [
            "A growing team produces more, and it also tends to gather up files scattered across personal drives and past projects. Estimate both before deciding that storage is the pressing need, and agree which older material is worth bringing in at all.",
          ],
        },
        {
          heading: "More users",
          summary: "Growth adds people in waves, and not all of them arrive as permanent hires.",
          icon: "users",
          body: [
            "A new hire, a freelancer for a busy season, a partner who joins for one campaign: each may need to reach the library. Estimate who will need access over the coming months as well as today, and check how users are counted before assuming the number fits.",
          ],
        },
        {
          heading: "Google Drive synchronisation",
          summary: "A connection to the place where much of the work already lives.",
          icon: "refresh",
          body: [
            "In general, synchronisation means a connection that is kept up over time rather than a single import, though what stays in step, in which direction and how often differs from one system to another. For a team whose work already sits in Google Drive, establish those details for its own folders before counting on them.",
            [
              "More broadly, GetSibu supports ",
              { text: "automated asset ingestion", page: 121 },
              " from connected storage sources and direct uploads, so teams can bring existing libraries in without rebuilding their storage workflow by hand.",
            ],
          ],
        },
        {
          heading: "Comments",
          summary: "Feedback moves out of messages and onto the work itself.",
          icon: "message",
          body: [
            [
              "The more reviewers a piece of work has, the harder it becomes to keep each remark beside the work it concerns. ",
              { text: "Asset comments", page: 62 },
              " let users leave comments directly on assets, keeping feedback attached to the work under discussion. Look at how your team gives feedback now before counting this as a need.",
            ],
          ],
        },
        {
          heading: "Saved searches",
          summary: "Recurring searches become shared starting points.",
          icon: "search",
          body: [
            [
              "When several people keep looking for the same campaign, client or product material, rebuilding the search each time wastes effort. ",
              { text: "Saved asset searches", page: 17 },
              " can be shared through a URL, turning a search the team repeats into a reusable view.",
            ],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 343 }, { kind: "pdf", page: 121 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 17 }, EXPLAINS],
    },
    {
      kind: "before-after",
      id: "signs",
      eyebrow: "Signs of growth",
      heading: "When a small set-up starts to hold a team back",
      beforeLabel: "A small group sharing files",
      afterLabel: "A growing team working from a library",
      before: ["Files passed around from personal drives", "Feedback lost in email and chat threads", "The same searches rebuilt by different people", "One person who knows where everything is", "New colleagues asking where things live"],
      after: ["Several contributors adding to one library", "Feedback left on the asset it concerns", "Searches saved once and shared", "Answers found in the library, not in one memory", "Newcomers finding work without asking"],
      sources: [{ kind: "pdf", page: 343 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 17 }, { kind: "pdf", page: 24 }, EXPLAINS],
    },
    {
      kind: "checklist",
      id: "weigh",
      eyebrow: "What to weigh",
      heading: "What a growing team should weigh",
      variant: "chips",
      items: [
        "New material the team produces",
        "Archive worth bringing in",
        "Freelancers and partners who need access",
        "What lives in Google Drive today",
        "How feedback travels now",
        "Searches several people repeat",
        "Who will look after the library",
        "How quickly the team is growing",
      ],
      sources: [{ kind: "pdf", page: 343 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about the GetSibu Pro plan",
      items: [
        {
          question: "Should everything in a team’s Google Drive belong in its creative library?",
          answer: "Think about what the drive actually holds first. Shared drives often mix finished work with drafts, personal documents and other teams’ material, and a library is most useful when it holds the work people come back to.",
        },
        {
          question: "What should a growing team agree before more people join its library?",
          answer: [
            "A few shared conventions: how folders are structured, how assets are named and tagged, and who looks after that structure. Agreed while the team is small, they spare each newcomer from inventing a system of their own. GetSibu helps teams with ",
            { text: "creative asset organisation", page: 8 },
            " through structured folders and scalable taxonomies, which is where such conventions take shape.",
          ],
        },
        {
          question: "How do saved searches help new members of a growing team?",
          answer: "A shared saved search hands a newcomer the same starting point as everyone else, whether that is a campaign, a client or a product line. It can shorten the time in which new colleagues depend on asking where things are.",
        },
      ],
      sources: [{ kind: "pdf", page: 8 }, { kind: "pdf", page: 17 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More for teams growing their creative library",
      variant: "compact",
      pages: [345, 62, 17, 121, 8, 24],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Start Your Creative Library",
      conversionPage: 391,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 391 }],
    },
  ],
};

export default page;
