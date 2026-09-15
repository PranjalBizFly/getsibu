/**
 * 197 · Asset Access Analytics — /analytics/asset-access-analytics
 *
 * Angle (clusters: usage-tracking, access-audit): how content is viewed or used — the difference between looking
 * at material and putting it to work, and what shapes access. Asset Usage Analytics (182) owns attention and
 * under-use; Access History (171) owns the accountability record; Folder Access Analytics (198) owns library areas.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how creative assets are accessed in practice; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 197,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Analytics",
      lede: "Understand how content in your library is viewed or used, why looking at an asset and relying on it mean different things, and how to read access without jumping to conclusions.",
      visual: { diagram: "folder-access", focus: "team" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 197 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Knowing whether content is looked at or put to work",
      body: [
        "Asset access analytics in GetSibu provide information about how content is being viewed or used. Those two words cover quite different things, since material can be looked at, put to work or both.",
        "The difference shows up in everyday work. A designer may open many product shots to choose a single one, while a salesperson may take the same presentation every week without browsing anything else. Reading every access as the same kind of interest can blur the difference between material people consider and material they genuinely depend on.",
        [
          "Access sits beside two neighbouring views of the library. ",
          { text: "Asset usage analytics", page: 182 },
          " concentrate on which assets receive attention and which stay underused, and ",
          { text: "asset performance insights", page: 204 },
          " help teams identify patterns in how assets are used.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Viewed or used: different meanings", "Looking before choosing", "Material taken into work", "Access shaped by what is shared", "Access bounded by permissions"],
      },
      highlight: {
        heading: "In practice",
        body: "A brand manager notices that a family of presentation templates draws steady access while colleagues keep building slides from scratch, a sign that something about the templates needs attention.",
        tags: ["Brand", "Templates", "Adoption"],
      },
      glance: {
        heading: "Access analytics in brief",
        facts: [
          { label: "Area", value: "Analytics" },
          { label: "Shows", value: "How content is viewed or used" },
          { label: "Attention view", value: "Asset Usage Analytics", page: 182 },
          { label: "Library areas", value: "Folder Access Analytics", page: 198 },
        ],
        actions: [{ kind: "page", page: 181, label: "Creative Asset Analytics" }]
      },
      sources: [{ kind: "pdf", page: 197 }, { kind: "pdf", page: 182 }, { kind: "pdf", page: 204 }, { kind: "pdf", page: 198 }, EXPLAINS],
    },
    {
      kind: "layers",
      id: "depths",
      eyebrow: "Kinds of access",
      heading: "From a first glance to lasting reuse",
      intro: "Access to a creative asset runs from a passing look to repeated reliance; keeping those depths in mind helps a team read access patterns with care.",
      layers: [
        {
          label: "Judged at a glance",
          body: "Much creative material is accepted or rejected in a moment. Thumbnails provide fast visual previews without requiring anyone to download the original, so an asset can be ruled out before it is ever opened.",
          page: 146,
        },
        {
          label: "Inspected closely",
          body: "A shortlisted asset gets a proper look: the full image, the whole cut, every page of the deck. Streaming previews let people inspect large media files without waiting for a complete download.",
          page: 147,
        },
        {
          label: "Considered with others",
          body: "When colleagues start commenting directly on an asset, it has moved from browsing into discussion about whether and how to use it.",
          page: 62,
        },
        {
          label: "Taken into work",
          body: "Once an asset goes into a live project, it has moved from being considered to being relied on, and any flaw in it now travels into finished work.",
        },
        {
          label: "Returned to again",
          body: "Material that people come back to across projects has become part of how the organisation works, and deserves the most care in tagging, approval and versioning.",
        },
      ],
      sources: [{ kind: "pdf", page: 146 }, { kind: "pdf", page: 147 }, { kind: "pdf", page: 62 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "Product demos that colleagues kept asking for in chat",
      team: "A product marketing team",
      situation: "A product marketing team keeps demo videos and product walkthroughs in its library for sales colleagues. Requests for “the latest demo” keep arriving in chat even though the videos are there to be found.",
      steps: [
        { heading: "Access is examined", body: "Asset access analytics show the demo videos being reached regularly, which makes the continuing requests for them hard to explain." },
        { heading: "Colleagues explain the gap", body: "Talking to a few salespeople uncovers the cause: several demos show an earlier release of the product, so colleagues watch the opening, doubt it is current and ask in chat instead." },
        { heading: "New portraits are approved", body: ["Re-recorded demos go through the ", { text: "creative approval workflow", page: 67 }, ", where the team requests review, makes changes and marks each finished video as approved."] },
        { heading: "Old cuts are replaced in place", body: ["Each updated demo replaces its predecessor within the same asset, and ", { text: "the earlier version is retained", page: 91 }, " instead of sitting beside it as a second file with a similar name."] },
        { heading: "Access is checked again", body: "Looking at access some weeks later, the team sees the updated demos being reached, and the requests in chat have eased." },
      ],
      outcome: "The team learns that regular access combined with repeated requests signalled doubt about whether material was current, and it fixes the videos rather than reminding colleagues where to look.",
      link: { page: 213, label: "GetSibu for Marketing Teams" },
      sources: [{ kind: "pdf", page: 197 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 91 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "accordion",
      id: "interpreting",
      eyebrow: "Reading the signal",
      heading: "Interpreting how content is viewed or used",
      items: [
        {
          heading: "Looked at, then passed over",
          summary: "When people keep considering material and then choose something else, something is stopping them.",
          icon: "eye",
          body: [
            [
              "The obstacle is usually doubt: the asset may look outdated, be in the wrong format or carry no clear sign of approval. ",
              { text: "Review status", page: 76 },
              " gives a clear indication of whether an asset still needs attention or has already completed the approval process, which can answer one common reason to hesitate.",
            ],
          ],
        },
        {
          heading: "Access follows sharing",
          summary: "Heavy access can reflect who was sent a view, not what people prefer.",
          icon: "collection",
          body: [
            [
              "When a set of assets is circulated, access concentrates on that set whether or not it contains the best material. ",
              { text: "Shared creative views", page: 79 },
              " let recurring collections travel through a URL, so it is worth knowing which views were shared before reading preference into the pattern.",
            ],
          ],
        },
        {
          heading: "Access is bounded by permissions",
          summary: "People can only view or use what they are able to reach.",
          icon: "lock",
          body: [
            [
              "Low access to a new area of the library may mean nobody has been given entry to it yet. With ",
              { text: "default-deny access", page: 154 },
              ", new folders can remain private until access is explicitly granted, so check who can reach content before concluding that nobody wants it.",
            ],
          ],
        },
        {
          heading: "Ruling an asset out is useful",
          summary: "A look that ends without use often means the search did its job.",
          icon: "check",
          body: [
            "Someone who opens an asset and moves on has often confirmed it was wrong for the task, which is a success for the library rather than a failure of the asset. Only when the same material is repeatedly considered and set aside does that pattern become a question worth asking.",
          ],
        },
        {
          heading: "Insight is not accountability",
          summary: "Patterns of access and a record of specific interactions answer different questions.",
          icon: "audit",
          body: [
            [
              "Access analytics help a team improve its library. When the question is instead who reached a sensitive file, ",
              { text: "access history", page: 171 },
              " provides information about important user interactions with the library, which suits accountability rather than planning.",
            ],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 76 }, { kind: "pdf", page: 79 }, { kind: "pdf", page: 154 }, { kind: "pdf", page: 171 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about asset access analytics",
      items: [
        {
          question: "How do asset access analytics relate to upload analytics?",
          answer: [
            { text: "Upload analytics", page: 184 },
            " show how much new content is entering the library over time, while access analytics look at what becomes of content once it is there. Read together, they can suggest whether new material is reaching the people it was made for.",
          ],
        },
        {
          question: "How do asset access analytics differ from folder access analytics?",
          answer: [
            "Asset access analytics concern how content is viewed or used, whereas ",
            { text: "folder access analytics", page: 198 },
            " step back to show which areas of the library receive attention.",
          ],
        },
        {
          question: "Can asset access analytics explain why content goes unused?",
          answer: "They show how content is accessed, not the reasons behind it. Pair the pattern with a conversation with the people involved, who can usually explain a hesitation in a sentence.",
        },
      ],
      sources: [{ kind: "pdf", page: 197 }, { kind: "pdf", page: 198 }, { kind: "pdf", page: 184 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on how content is reached and used",
      variant: "compact",
      pages: [182, 204, 198, 184, 171, 147],
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
