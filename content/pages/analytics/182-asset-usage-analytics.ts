/**
 * 182 · Asset Usage Analytics — /analytics/asset-usage-analytics
 *
 * Angle (cluster: usage-tracking, primary): attention and under-use — the contrast between assets people rely
 * on and assets left behind, why good material goes underused and what a team can do about it. Asset Usage
 * Tracking (106) owns the lifecycle angle, Asset Access Analytics (197) how content is viewed or used, and
 * Asset Performance Insights (204) patterns in usage.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of reading asset usage in a creative library; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 182,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Analytics",
      lede: "How usage analytics separate the assets that draw attention from the ones that sit untouched, and what a team can do when material it worked hard to produce is going underused.",
      visual: { diagram: "library-activity", focus: "uploads" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 182 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Which assets earn attention, and which are left behind",
      body: [
        "Usage analytics in GetSibu help teams understand which assets receive attention and which remain underused. The value lies in looking at both ends of the library, not only at the material everyone already knows about.",
        "Creative organisations make far more than they reuse. A shoot yields many more selects than a campaign needs, a film is cut for several channels, and a deck is revised while its predecessors linger. Some of what goes unused is genuinely surplus. Some is good material nobody realised was there, and the difference matters when the next brief arrives and the team books a new shoot instead of looking.",
        [
          "Usage is one angle on a wider question. ",
          { text: "Asset usage tracking", page: 106 },
          " places it in the lifecycle of an asset, from active use to inactivity, while ",
          { text: "asset access analytics", page: 197 },
          " look at how content is being viewed or used and ",
          { text: "asset performance insights", page: 204 },
          " help teams identify patterns in asset usage.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Assets that receive attention", "Assets that remain underused", "Reasons material goes unnoticed", "Reuse before recreation", "Archiving what has served its purpose"],
      },
      highlight: {
        heading: "In practice",
        body: "A campaign manager sees that last season’s lifestyle photography is barely used, opens the set and finds most of it was never described beyond the name of the shoot.",
        tags: ["Campaign assets", "Product imagery", "Reuse"],
      },
      glance: {
        heading: "Usage analytics in brief",
        facts: [
          { label: "Area", value: "Analytics" },
          { label: "Shows", value: "Assets receiving attention and assets left underused" },
          { label: "Lifecycle view", value: "Asset Usage Tracking", page: 106 },
          { label: "Closer look", value: "Asset Access Analytics", page: 197 },
        ],
        actions: [{ kind: "page", page: 181, label: "Creative Asset Analytics" }]
      },
      sources: [{ kind: "pdf", page: 182 }, { kind: "pdf", page: 106 }, { kind: "pdf", page: 197 }, { kind: "pdf", page: 204 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "groups",
      eyebrow: "Reading the results",
      heading: "Three groups of assets that usage analytics bring into view",
      tabs: [
        {
          label: "Well used",
          heading: "Look after what people rely on",
          icon: "check",
          body: [
            "Assets with steady attention are the ones colleagues depend on. They deserve accurate tags, an unambiguous approval state and an obvious current version, because any confusion around them spreads further and faster than confusion around a file nobody opens.",
            ["Keeping heavily used material in an ", { text: "approved asset library", page: 103 }, " helps colleagues choose content that has completed the required review, and ", { text: "file version history", page: 92 }, " keeps earlier versions on record when one of those assets is replaced."],
          ],
          points: ["Confirm the approval state first", "Keep the current version unmistakable"],
        },
        {
          label: "Underused",
          heading: "Find out why good material is overlooked",
          icon: "search",
          body: [
            "An underused asset is a question, not a verdict. It may be outdated or off-brand, or it may be excellent and simply out of reach of the searches colleagues run.",
            "The causes are worth checking one at a time before anything is archived, retagged or removed, because each one calls for a different response.",
          ],
          points: ["A prompt to investigate", "Different causes, different remedies"],
        },
        {
          label: "Newly added",
          heading: "Give new arrivals time before judging them",
          icon: "upload",
          body: [
            "Material that arrived recently has had little opportunity to be used. Reading it by attention alone would make every fresh delivery look like a disappointment.",
            ["It also needs to be ready. After upload, ", { text: "asset processing", page: 143 }, " moves files through stages such as metadata extraction, thumbnail generation and AI-related processing, so allow for that before treating quiet as a lack of interest."],
          ],
          points: ["Too early to call underused", "Processing comes before discovery"],
        },
      ],
      sources: [{ kind: "pdf", page: 182 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 92 }, { kind: "pdf", page: 143 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "causes",
      eyebrow: "Common causes",
      heading: "Why an asset ends up underused",
      items: [
        {
          heading: "Search cannot surface it",
          summary: "Material that never appears in results is effectively invisible.",
          icon: "search",
          body: [
            "An asset known only by its filename, or by a folder somebody else created, will not meet a colleague who searches by subject, campaign or mood.",
            ["More descriptive information widens the ways in: assets can be found through filenames, metadata, extracted text, AI-generated tags, comments and ", { text: "semantic information", page: 11 }, "."],
          ],
        },
        {
          heading: "Its tags are thin or inconsistent",
          summary: "Hurried or idiosyncratic tagging hides assets from the people looking for them.",
          icon: "tag",
          body: [
            "Tags applied in a rush, or by several people with different habits, leave assets outside the terms colleagues actually use.",
            ["Comparing underused material with ", { text: "tag analytics", page: 186 }, " can show whether tags colleagues use and search for often are missing from those assets."],
          ],
        },
        {
          heading: "Nobody is sure it is approved",
          summary: "Doubt about approval stops people using material they have already found.",
          icon: "approval",
          body: [
            "Colleagues who cannot tell a draft from a finished asset tend to play safe and ask for something new, which leaves perfectly usable work untouched.",
            [{ text: "Review status", page: 76 }, " gives a clear indication of whether an asset still needs attention or has already completed the approval process."],
          ],
        },
        {
          heading: "It should no longer be used",
          summary: "Some assets are underused for good reason.",
          icon: "clock",
          body: [
            "Retired branding, discontinued products and lapsed licences leave material that is rightly ignored. Low use here is the library working as intended.",
            [{ text: "Asset expiry information", page: 104 }, " can help teams identify content that should no longer be used after a specified period, and ", { text: "asset archiving", page: 108 }, " retains it without letting it interfere with everyday discovery."],
          ],
        },
        {
          heading: "Copies share the attention",
          summary: "Duplicates split use between near-identical files.",
          icon: "copy",
          body: [
            "When one image exists as several renamed or re-exported copies, each copy looks less used than the picture really is.",
            [{ text: "Duplicate detection", page: 40 }, " identifies identical files and visually equivalent copies, including re-encoded or renamed ones, which gives a team what it needs to decide which copy to keep."],
          ],
        },
        {
          heading: "Other teams never heard of it",
          summary: "Material made for one team rarely reaches another unprompted.",
          icon: "collection",
          body: [
            "A product film made for a launch may be exactly what a sales or social team needs later on, provided somebody tells them it exists.",
            ["A ", { text: "saved search", page: 17 }, " can be shared through a URL, turning a set of relevant assets into a view another team can open for itself."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 11 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 186 }, { kind: "pdf", page: 76 }, { kind: "pdf", page: 104 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 40 }, { kind: "pdf", page: 17 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A product shoot rediscovered before a reshoot is booked",
      team: "A marketing team",
      situation: "A marketing team is planning new product photography for its next range. Before booking a studio, the brand manager wants to know how the previous shoot has been used.",
      steps: [
        {
          heading: "Usage is checked",
          body: "Usage analytics show that a few hero images from the previous shoot receive attention, while most of the selects remain underused.",
        },
        {
          heading: "The quiet selects are reviewed",
          body: [{ text: "Thumbnails", page: 146 }, " give the team a quick visual pass across the set without downloading originals, and many turn out to be strong images nobody had looked at since the shoot."],
        },
        {
          heading: "The set’s tags are tidied",
          body: ["The team works through the suggested tags for the set, ", { text: "approves them in bulk", page: 47 }, " and overrides the few that do not match its product taxonomy."],
        },
        {
          heading: "Sales gets a saved search",
          body: "A saved search for the range goes to the sales team by URL, answering a request for product imagery they had made twice already.",
        },
        {
          heading: "The reshoot is narrowed",
          body: "The brand manager books a smaller shoot that covers only the products and settings the existing images leave out.",
        },
      ],
      outcome: "The team reshoots only what it lacks, and a set of images that had been overlooked joins the working library.",
      link: { page: 200, label: "Marketing Asset Analytics" },
      sources: [{ kind: "pdf", page: 182 }, { kind: "pdf", page: 146 }, { kind: "pdf", page: 47 }, { kind: "pdf", page: 48 }, { kind: "pdf", page: 17 }, { kind: "pdf", page: 79 }, { kind: "pdf", page: 200 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about asset usage analytics",
      items: [
        {
          question: "What does “underused” mean in asset usage analytics?",
          answer: "It refers to assets that receive little attention. Whether that is a problem depends on purpose: a campaign image ignored during its own campaign deserves a look, while a historical record opened rarely may be doing exactly what it should.",
        },
        {
          question: "How do asset usage analytics differ from asset usage tracking?",
          answer: ["Both concern whether assets are used. Usage analytics focus on attention and under-use across the library, while ", { text: "asset usage tracking", page: 106 }, " treats the same question as part of an asset’s lifecycle, telling active assets from inactive ones."],
        },
        {
          question: "Should underused assets found through usage analytics be deleted?",
          answer: ["Not by default. Check why they are underused first. Content that should no longer be used can be archived, and ", { text: "asset deletion", page: 109 }, " lets authorised users remove assets according to organisational policies and permissions."],
        },
        {
          question: "Can asset usage analytics help a team avoid recreating content?",
          answer: ["They can help. Knowing what already exists and goes unused gives a team the chance to reuse it before commissioning something new, and a centralised library can reduce the time spent ", { text: "searching for assets and recreating files", page: 348 }, "."],
        },
      ],
      sources: [{ kind: "pdf", page: 182 }, { kind: "pdf", page: 106 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 109 }, { kind: "pdf", page: 348 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on how assets are used",
      variant: "compact",
      pages: [106, 197, 204, 186, 108, 200],
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
