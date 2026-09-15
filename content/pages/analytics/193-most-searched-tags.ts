/**
 * 193 · Most Searched Tags — /analytics/most-searched-tags
 *
 * Angle (cluster: library-analytics): the most-searched tags as a record of demand — what colleagues keep looking
 * for, what that demand does and does not show, and how a team can respond with content planning, approved material
 * and tagging priorities. Tag Analytics (186) owns taxonomy maintenance from tags used against tags searched.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of reading search demand in a creative library; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 193,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Analytics",
      lede: "Read the tags people search for most as a record of demand: what colleagues keep looking for, what that reveals about the work ahead, and how to make sure the library can answer.",
      visual: { diagram: "library-activity", focus: "tags" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 193 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A record of what colleagues keep looking for",
      body: [
        "Most-searched tags provide insight into what users are frequently looking for. Each search is a small request, and together those requests describe demand on the library more directly than asking people what they need.",
        "Demand and supply seldom match by themselves. A library fills with whatever teams happen to produce, while colleagues search for what their current work requires: a product about to launch, a market joining a campaign, a season coming round again. When the two drift apart, people spend time hunting for material that is scarce or filed under other names, and eventually commission something new.",
        [
          "Search demand is one side of that balance. ",
          { text: "Upload analytics", page: 184 },
          " show how much new content is entering the library over time, the supply to set against it, and ",
          { text: "asset usage analytics", page: 182 },
          " help show which assets receive attention once people find them.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Search as a record of demand", "What colleagues look for most", "Demand set against what exists", "Interest that follows the calendar", "In-demand material within easy reach"],
      },
      highlight: {
        heading: "In practice",
        body: "A studio manager notices a city’s tag among the most searched and learns that several teams are pitching work set there, so relevant location footage is reviewed before the requests arrive.",
        tags: ["Demand", "Planning", "Search"],
      },
      glance: {
        heading: "Most-searched tags in brief",
        facts: [
          { label: "Area", value: "Analytics" },
          { label: "Shows", value: "What users are frequently looking for" },
          { label: "Wider tag view", value: "Tag Analytics", page: 186 },
          { label: "After the search", value: "Asset Usage Analytics", page: 182 },
        ],
        actions: [{ kind: "page", page: 181, label: "Creative Asset Analytics" }]
      },
      sources: [{ kind: "pdf", page: 193 }, { kind: "pdf", page: 184 }, { kind: "pdf", page: 182 }, { kind: "pdf", page: 186 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "reading-demand",
      eyebrow: "Reading demand",
      heading: "What search demand does and does not tell you",
      items: [
        {
          heading: "Searched is not the same as found",
          summary: "A popular search may still be ending in frustration.",
          icon: "search",
          body: [
            "A tag among the most searched shows that people are looking; it does not show that they left with what they needed. Run those searches yourself and look at what comes back before assuming the demand is being met.",
          ],
        },
        {
          heading: "Repeated requests deserve a standing view",
          summary: "Colleagues who search for the same thing again and again may need a shortcut.",
          icon: "collection",
          body: [
            "When the same request recurs, rebuilding the search each time wastes a little effort on every occasion.",
            [{ text: "Saved asset searches", page: 17 }, " can be kept and shared through a URL, turning a recurring request into a reusable view for campaigns, clients or products."],
          ],
        },
        {
          heading: "Demand follows the calendar",
          summary: "Interest rises and falls with launches, seasons and campaigns.",
          icon: "calendar",
          body: [
            "Interest in a subject tends to build before a launch and fade once it has passed. Read demand against what the organisation is working on, and expect it to move as priorities do.",
          ],
        },
        {
          heading: "Low demand is not low value",
          summary: "Material nobody searches for can still be essential.",
          icon: "shield",
          body: [
            "Some assets are reached through shared links, views or folders rather than search, and some are needed rarely but urgently, such as legal documents or material held for a crisis. Absence from the most-searched tags is never, on its own, a reason to archive anything.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 193 }, { kind: "pdf", page: 17 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "responses",
      eyebrow: "Acting on demand",
      heading: "What search demand can shape in a creative library",
      items: [
        {
          heading: "Content planning",
          body: "Frequent searches for subjects the library holds little of point to what is worth briefing, shooting or licensing next.",
          icon: "calendar",
          points: ["Briefs grounded in real requests", "Fewer last-minute commissions"],
        },
        {
          heading: "Approved answers to popular requests",
          body: "Where demand concentrates, approved-only views help colleagues reach content that has completed the required review process.",
          icon: "approval",
          points: ["Drafts kept out of popular requests", "Finished work easy to choose"],
          page: 103,
        },
        {
          heading: "Tagging priorities",
          body: "Tagging effort goes furthest on the subjects people search for most, and suggested tags can be approved in bulk where a popular subject is under-described.",
          icon: "tag",
          points: ["Effort focused where demand is", "Under-described subjects fixed first"],
          page: 47,
        },
        {
          heading: "Onboarding newcomers",
          body: "The most-searched tags make a practical introduction to a library, showing a new colleague the subjects and terms the rest of the team relies on.",
          icon: "graduation",
          points: ["A shortcut to the shared vocabulary", "A sense of what the team is working on"],
        },
        {
          heading: "Connecting teams",
          body: "Frequent searches for a subject that one team produces suggest wider interest in its work, and pointing others to that material helps existing work get reused rather than remade.",
          icon: "users",
          points: ["Producers learn their work is wanted", "Reuse across departments"],
        },
      ],
      sources: [{ kind: "pdf", page: 193 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 47 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A retail brand readies its library for a seasonal campaign",
      team: "A retail brand team",
      situation: "A retail brand’s creative team is a few weeks from its seasonal campaign, and colleagues in stores, social and e-commerce are already searching the library for material.",
      steps: [
        {
          heading: "Demand is checked",
          body: "Most-searched tags show strong interest in the season’s lead product and in outdoor lifestyle imagery.",
        },
        {
          heading: "The searches are tried",
          body: "Running those searches, the team finds plenty of product shots but very little approved lifestyle photography.",
        },
        {
          heading: "Older shoots are surfaced",
          body: ["Earlier lifestyle shoots appear when the team searches by ", { text: "colour information", page: 36 }, ", and the strongest images are put through review and marked as approved."],
        },
        {
          heading: "The gap is briefed",
          body: "The brief for the new campaign shoot is narrowed to the lifestyle settings the library still cannot supply.",
        },
        {
          heading: "Colleagues are pointed to the material",
          body: "Store and e-commerce teams are told where the approved campaign assets sit, instead of emailing the creative team for files.",
        },
      ],
      outcome: "Colleagues searching for the season’s material find approved assets ready, and the new shoot fills a gap that demand revealed rather than one the team had to guess at.",
      link: { page: 231, label: "GetSibu for Retail Brands" },
      sources: [{ kind: "pdf", page: 193 }, { kind: "pdf", page: 36 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 231 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about most-searched tags",
      items: [
        {
          question: "What can most-searched tags reveal about the people using a library?",
          answer: "What they are working on and how they think about the material. Frequent searches reflect current projects, and the terms themselves show the vocabulary colleagues rely on.",
        },
        {
          question: "Should a team act on every tag that appears among the most searched?",
          answer: "No. Most entries reflect steady needs the library already meets. Attention is better kept for terms tied to upcoming work, or for searches that turn up little, since those are where a response changes something.",
        },
        {
          question: "Can most-searched tags help improve a library’s taxonomy?",
          answer: ["Yes, as one input. Terms people search for often deserve clear, consistently applied tags, and ", { text: "tag analytics", page: 186 }, " look at frequently used tags as well as searched ones, which helps guide changes to the taxonomy."],
        },
        {
          question: "What should a team do when a most-searched tag leads to few suitable assets?",
          answer: ["First check whether suitable material exists under other terms or without tags; ", { text: "AI asset discovery", page: 12 }, " helps people find files based on what appears inside them rather than depending entirely on manually entered metadata. If the material really is missing, the demand makes the case for new work."],
        },
      ],
      sources: [{ kind: "pdf", page: 193 }, { kind: "pdf", page: 186 }, { kind: "pdf", page: 12 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on search and demand",
      variant: "compact",
      pages: [186, 182, 17, 103, 12, 231],
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
