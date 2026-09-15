/**
 * 194 · Top Contributors — /analytics/top-contributors
 *
 * Angle (cluster: library-analytics): the ranking of users who contribute the most content or activity — the
 * different reasons someone reaches the top, practical uses such as finding library champions, and how to use a
 * ranking fairly. Contributor Analytics (185) owns breadth of participation and adoption; Creative Team Analytics
 * (199) owns how groups interact.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of interpreting contributor rankings in creative libraries; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 194,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Analytics",
      lede: "What a ranking of the people who contribute the most content or activity can tell you, the different reasons someone reaches the top, and how to use it without turning it into a league table.",
      visual: { diagram: "library-activity", focus: "uploads" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 194 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "The people at the top of a library’s activity",
      body: [
        "Top contributor analytics show which users contribute the most content or activity. Where a broader view of contributors asks who takes part at all, the ranking asks whose work the library leans on most.",
        "Rankings are easy to read and just as easy to misread. Because the ranking covers content or activity, a high place can come from delivering a great deal of material, from taking part in a great deal of what happens in the library, or from one unusually large delivery. Each carries a different lesson for how the library is run.",
        [
          "A ranking means most with context around it. ",
          { text: "Contributor analytics", page: 185 },
          " show how widely participation is spread, and ",
          { text: "asset attribution", page: 116 },
          " keeps creators and contributors associated with their assets, so the work behind a high position stays easy to see.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Users who contribute the most", "Content and activity as routes to the top", "Library champions", "Context behind every position", "Recognition, not league tables"],
      },
      highlight: {
        heading: "In practice",
        body: "After a busy season, a head of marketing looks at the top contributors and thanks the coordinators whose steady activity kept the library useful, work that otherwise goes unnoticed.",
        tags: ["Recognition", "Coordinators", "Marketing"],
      },
      glance: {
        heading: "Top contributors in brief",
        facts: [
          { label: "Area", value: "Analytics" },
          { label: "Shows", value: "Users who contribute the most content or activity" },
          { label: "Broader view", value: "Contributor Analytics", page: 185 },
          { label: "Context", value: "Asset Ownership", page: 115 },
        ],
        actions: [{ kind: "page", page: 181, label: "Creative Asset Analytics" }]
      },
      sources: [{ kind: "pdf", page: 194 }, { kind: "pdf", page: 185 }, { kind: "pdf", page: 116 }, { kind: "pdf", page: 115 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "profiles",
      eyebrow: "Behind a ranking",
      heading: "Different reasons someone reaches the top",
      tabs: [
        {
          label: "Producers",
          heading: "People who add a great deal of content",
          icon: "camera",
          body: [
            "Photographers, editors and designers who deliver material regularly rank highly on content. Their position confirms that finished work is reaching the shared library rather than staying on local drives.",
            "They are also the people whose naming and tagging habits shape how new material is described, so their conventions influence how findable a large part of the library becomes.",
          ],
          points: ["Confirms work is reaching the library", "Their tagging habits travel furthest"],
        },
        {
          label: "Reviewers",
          heading: "People whose contribution is discussion",
          icon: "message",
          body: [
            "Some colleagues add little content but shape a great deal: reviewing drafts, answering questions and moving work towards approval. A ranking of content or activity is not designed to measure that kind of influence, so do not expect it to show it.",
            ["Their value lies in the decisions they help reach, and ", { text: "approval history", page: 77 }, " provides a record of review activity."],
          ],
          points: ["Contribution through feedback", "Influence best seen elsewhere"],
        },
        {
          label: "Large deliveries",
          heading: "People who added a lot at once",
          icon: "upload",
          body: [
            "A colleague who uploads a large back catalogue can rise high in a ranking of content without creating any new work. That position records an event, not a habit.",
            "Acknowledge the effort, then look at the ranking again once the delivery is behind you to see who contributes in ordinary periods.",
          ],
          points: ["An event rather than a habit", "Worth rereading afterwards"],
        },
        {
          label: "Custodians",
          heading: "People who keep the library usable",
          icon: "folder",
          body: [
            "Library managers and coordinators often combine a steady flow of additions with plenty of other activity. They are frequently the first people colleagues ask when something cannot be found.",
            "A high position for them signals care, and also hints at how much the library relies on their continued attention.",
          ],
          points: ["The first person colleagues ask", "Care that deserves recognition"],
        },
      ],
      sources: [{ kind: "pdf", page: 194 }, { kind: "pdf", page: 77 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A production company finds champions for a tagging convention",
      team: "A production company",
      situation: "A production company is introducing a consistent way of tagging footage by project, location and shot type, and needs people across its teams to lead by example.",
      steps: [
        {
          heading: "The ranking is consulted",
          body: "The production manager looks down the list of top contributors and notes the editors, assistants and coordinators near the top.",
        },
        {
          heading: "Context is added",
          body: "The production manager sets aside one name that ranks highly only because of a single large upload of old material, and adds a reviewer whose notes shape most edits.",
        },
        {
          heading: "Champions agree to lead",
          body: "Those colleagues apply the new convention first and answer questions about it from the people who work alongside them.",
        },
        {
          heading: "Suggestions are corrected",
          body: ["As new footage arrives, the champions review suggested tags and use ", { text: "AI tag override", page: 48 }, " wherever a suggestion does not match the convention."],
        },
        {
          heading: "Uptake is checked",
          body: ["Some time later, ", { text: "tag analytics", page: 186 }, " show whether the convention’s terms are being used and searched across the library."],
        },
      ],
      outcome: "The convention spreads through the people colleagues already watch and ask, rather than through a guidance document nobody opens.",
      link: { page: 211, label: "GetSibu for Production Studios" },
      sources: [{ kind: "pdf", page: 194 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 48 }, { kind: "pdf", page: 186 }, { kind: "pdf", page: 211 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "accordion",
      id: "fair-use",
      eyebrow: "Considerations",
      heading: "Using a contributor ranking fairly",
      items: [
        {
          heading: "Rank to understand, not to judge",
          summary: "A ranking reflects volume, not value.",
          icon: "gauge",
          body: [
            "One thoughtful review can matter more than a long run of routine uploads. Use the ranking to learn how the library works and who holds it together, not as an appraisal of individuals.",
          ],
        },
        {
          heading: "Compare like roles with like",
          summary: "Producers, reviewers and administrators contribute in different ways.",
          icon: "users",
          body: [
            "Setting a photographer who delivers every week against a brand manager who mainly approves work reveals nothing useful. If comparisons are needed at all, make them between people whose work is similar.",
          ],
        },
        {
          heading: "Mind the incentives",
          summary: "A widely shared ranking can change behaviour, not always for the better.",
          icon: "flag",
          body: [
            "Once a ranking is shared widely, some people may add drafts or near-duplicates simply to climb it. Share it thoughtfully, and pair any recognition with the quality of what was contributed.",
          ],
        },
        {
          heading: "Look beyond the top of the list",
          summary: "People outside the leading positions matter for adoption.",
          icon: "layers",
          body: [
            ["A ranking concentrates attention on the most active users. For the wider organisation, including occasional participants, ", { text: "creative team analytics", page: 199 }, " provide visibility into how different groups interact with the library."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 194 }, { kind: "pdf", page: 199 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about top contributors",
      items: [
        {
          question: "Should colleagues know that top contributors are being looked at?",
          answer: "Yes. Explain why the organisation looks at contribution and what it will and will not be used for, so that a helpful view does not come to feel like monitoring.",
        },
        {
          question: "What should a team do if one person dominates the top contributors?",
          answer: "Treat it as a sign of dependency as much as dedication. Make sure that person’s conventions are shared with others, and encourage colleagues to take on more of the adding and organising.",
        },
        {
          question: "How do top contributors differ from asset ownership?",
          answer: [{ text: "Asset ownership", page: 115 }, " provides context about who created or uploaded a particular piece of content. Top contributors look across the whole library to show who contributes the most."],
        },
        {
          question: "Are top contributor analytics useful for a small team?",
          answer: "Less for comparison and more for continuity. In a small team the ranking mainly shows who holds the library together, which is worth knowing before responsibilities change.",
        },
      ],
      sources: [{ kind: "pdf", page: 194 }, { kind: "pdf", page: 115 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on people and participation",
      variant: "compact",
      pages: [185, 199, 115, 116, 186, 211],
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
