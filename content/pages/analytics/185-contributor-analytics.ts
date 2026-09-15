/**
 * 185 · Contributor Analytics — /analytics/contributor-analytics
 *
 * Angle (cluster: library-analytics): who adds content and participates — the breadth of participation, adoption
 * across teams, knowledge concentrated in a few people and the context contributors hold. Top Contributors (194)
 * owns the ranking of the most active users; Creative Team Analytics (199) owns how groups interact.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of participation in shared creative libraries; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 185,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Analytics",
      lede: "See who adds content to your library and who takes part in its activity, so adoption, shared ownership and gaps in participation become visible instead of assumed.",
      visual: { diagram: "library-activity", focus: "uploads" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 185 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Who keeps a shared library alive",
      body: [
        "Contributor analytics help organisations understand who is adding content and participating in library activity. The point is breadth: whether the library is a genuinely shared resource or one that quietly depends on a handful of people.",
        "Participation in a creative library takes several forms. Photographers and editors deliver material, designers add working files, reviewers discuss what they see and coordinators organise what arrives. A library can look busy while most of the organisation only ever takes from it, or while everything flows through one conscientious person whose absence would stall the rest.",
        [
          "Knowing who contributes also preserves context. ",
          { text: "Asset ownership", page: 115 },
          " provides context about who created or uploaded content, and through ",
          { text: "asset attribution", page: 116 },
          " creators and contributors can remain associated with their assets during collaboration and migration.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Who adds content", "Who takes part in activity", "Adoption across teams", "Knowledge held by a few people", "Context through ownership"],
      },
      highlight: {
        heading: "In practice",
        body: "A while after a library is introduced, an operations lead checks whether contributors now include people beyond the team that championed the change.",
        tags: ["Operations", "Adoption", "Teams"],
      },
      glance: {
        heading: "Contributor analytics in brief",
        facts: [
          { label: "Area", value: "Analytics" },
          { label: "Shows", value: "Who adds content and takes part in library activity" },
          { label: "Ranked view", value: "Top Contributors", page: 194 },
          { label: "Group view", value: "Creative Team Analytics", page: 199 },
        ],
        actions: [{ kind: "page", page: 181, label: "Creative Asset Analytics" }]
      },
      sources: [{ kind: "pdf", page: 185 }, { kind: "pdf", page: 115 }, { kind: "pdf", page: 116 }, { kind: "pdf", page: 194 }, { kind: "pdf", page: 199 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "questions",
      eyebrow: "What it reveals",
      heading: "What a team learns from knowing who contributes",
      items: [
        {
          heading: "Whether the library has been adopted",
          summary: "Contributions from across the organisation show a library has replaced old habits.",
          icon: "users",
          body: [
            "A library announced to everyone but fed by one department has not really been adopted. Contributors drawn from many teams show that new work is landing in the shared library rather than in personal drives.",
            ["Where a team is missing, look at access before assuming reluctance. ", { text: "Folder-level permissions", page: 152 }, " control access more finely than organisation-wide access, and people who were never granted a folder are unlikely to be adding to it."],
          ],
        },
        {
          heading: "Whether knowledge sits with too few people",
          summary: "A library that depends on one person is only as available as that person.",
          icon: "user",
          body: [
            "When one coordinator adds and organises most material, the library inherits that person’s habits: their tag choices, their folder logic and their memory of where things are. Holidays, new roles and departures then become risks to the library itself.",
            "Spreading contribution across several people, with conventions everyone applies, makes the library less fragile without making it less consistent.",
          ],
        },
        {
          heading: "Whether the right people are contributing",
          summary: "Actual contribution should match the governance the organisation intends.",
          icon: "shield",
          body: [
            [{ text: "Creative asset governance", page: 114 }, " defines who can upload, edit, approve, download and manage assets. Comparing the people who really contribute with the people expected to shows whether that intention holds in everyday work."],
          ],
        },
        {
          heading: "Who to ask about a part of the library",
          summary: "Contributors are often the quickest route to an asset’s background.",
          icon: "help",
          body: [
            "When an asset needs explaining, such as which campaign it served, whether a licence still applies or which take was preferred, the person who added it is often the fastest source of an answer.",
            "Knowing who contributes to an area of the library tells a newcomer whom to ask before they guess.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 185 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 114 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "An in-house team checks whether the whole company moved in",
      team: "An in-house creative team",
      situation: "An in-house creative team has moved the company’s creative work from shared drives into GetSibu. A few weeks on, the head of creative wants to know whether marketing, product and communications colleagues are adding to the library or still keeping files elsewhere.",
      steps: [
        {
          heading: "Contributors are reviewed",
          body: "Contributor analytics show who has been adding content. The head of creative recognises most of the names as designers, a few as marketing colleagues and none from communications.",
        },
        {
          heading: "Access is checked before anything else",
          body: ["The team finds that the communications folders ", { text: "remained private", page: 154 }, " because access was never explicitly granted, so colleagues there could not have contributed even if they wanted to."],
        },
        {
          heading: "A useful first view is shared",
          body: ["Communications colleagues are pointed to an ", { text: "approved-only view", page: 103 }, " of brand photography, so their first visit to the library finds material they can use straight away."],
        },
        {
          heading: "Discussion moves onto the assets",
          body: ["They begin commenting on draft announcements and ", { text: "mentioning teammates", page: 66 }, " in those discussions instead of emailing attachments around."],
        },
        {
          heading: "Participation is checked again",
          body: "When the head of creative next looks, communications colleagues appear among the people adding content, starting with press photography.",
        },
      ],
      outcome: "The library becomes a company resource rather than the design team’s archive, and the remedy turned out to be access and a useful first view rather than persuasion.",
      link: { page: 222, label: "GetSibu for In-House Creative Teams" },
      sources: [{ kind: "pdf", page: 185 }, { kind: "pdf", page: 154 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 66 }, { kind: "pdf", page: 222 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "before-after",
      id: "shared-library",
      eyebrow: "Why it matters",
      heading: "A library carried by a few compared with one the organisation shares",
      beforeLabel: "Carried by a few people",
      afterLabel: "Shared across teams",
      before: ["Everything routed through one coordinator", "Tags that reflect one person’s habits", "Asset questions with nobody left to ask", "Absences that stall the library", "Teams that take without adding"],
      after: ["New work added by the people who make it", "Conventions several people apply", "Creators still associated with their assets", "Participation that survives a holiday", "Feedback left on the assets it concerns"],
      sources: [{ kind: "pdf", page: 116 }, { kind: "pdf", page: 62 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about contributor analytics",
      items: [
        {
          question: "How do contributor analytics differ from the top contributors view?",
          answer: ["Contributor analytics look at who is adding content and taking part at all, which is a question of breadth. ", { text: "Top contributors", page: 194 }, " show which users contribute the most content or activity, which is a question of ranking."],
        },
        {
          question: "How do contributor analytics differ from upload analytics?",
          answer: [{ text: "Upload analytics", page: 184 }, " show how much new content is entering the library over time. Contributor analytics are about who is adding it, so the same volume can be recognised as the work of a whole team or of a single coordinator."],
        },
        {
          question: "Can contributor analytics help new team members settle in?",
          answer: "Indirectly. Seeing who contributes to an area of the library shows a newcomer whose conventions to follow, and seeing the newcomer begin to contribute is a sign they have joined the shared way of working.",
        },
        {
          question: "When is a good moment to review contributor analytics?",
          answer: "After a library is introduced, after teams are reorganised and before someone central to the library changes role. Each is a point at which participation is likely to shift.",
        },
      ],
      sources: [{ kind: "pdf", page: 185 }, { kind: "pdf", page: 194 }, { kind: "pdf", page: 184 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on participation in the library",
      variant: "compact",
      pages: [194, 199, 116, 114, 152, 222],
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
