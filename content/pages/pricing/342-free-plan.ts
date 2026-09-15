/**
 * 342 · Free Plan — /pricing/free-plan (HELD: pricing-tiers, free-plan-limits)
 *
 * Angle (cluster: pricing-plans): who the free plan is positioned for (individuals and makers exploring GetSibu),
 * what PDF 342 says it provides, and how to judge whether that fits the work being tried. page 343 and Business
 * Plan (344) are not linked or described. Plan contents only as stated in PDF 342; no prices, trials or API call limits.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how to evaluate a plan; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 342,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "centered",
      eyebrow: "Pricing",
      lede: "What the GetSibu free plan provides, and how an individual or maker exploring the platform can tell whether its storage and seats fit the work worth trying first.",
      actions: [
        { kind: "global", cta: "primary" },
        { kind: "route", path: "/pricing", label: "More in Pricing" },
      ],
      sources: [{ kind: "pdf", page: 342 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Room for individuals and makers to explore",
      body: [
        "The free plan is positioned for individuals and makers exploring GetSibu. The people it addresses usually work alone or in a very small circle, and are deciding whether a searchable library belongs in the way they already work.",
        "Exploring a creative library is different from assessing one on paper. The questions that matter appear only with real material: whether search turns up the file you had in mind, whether uploading becomes a habit, whether collaborators actually join in. A plan meant for exploration earns its place when it lets someone put a representative share of their work in and find out.",
        [
          "Makers come in many forms. ",
          { text: "Freelancers", page: 226 },
          " can use GetSibu to organise personal creative libraries and quickly locate reusable assets, while ",
          { text: "content creators", page: 227 },
          " can organise videos, thumbnails, images and documents in one place.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Positioned for individuals and makers", "Exploring before committing", "A representative share of real work", "Storage and seats for trying things", "Judging by real results, not descriptions"],
      },
      highlight: {
        heading: "In practice",
        body: "Before uploading anything, a photographer writes down two searches she struggles with today, so that afterwards she can tell whether the library answered them.",
        tags: ["Photographers", "Makers", "Exploring"],
      },
      glance: {
        heading: "The free plan in brief",
        facts: [
          { label: "Area", value: "Pricing" },
          { label: "Positioned for", value: "Individuals and makers exploring GetSibu" },
          { label: "Individuals", value: "GetSibu for Freelancers", page: 226 },
          { label: "Building", value: "GetSibu API", page: 261 },
        ],
      },
      sources: [{ kind: "pdf", page: 342 }, { kind: "pdf", page: 226 }, { kind: "pdf", page: 227 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "contents",
      eyebrow: "Plan contents",
      heading: "What the free plan provides",
      items: [
        {
          heading: "5 GB of storage",
          body: "Storage for trying the library with real material, chosen with the formats involved in mind.",
          icon: "database",
          points: ["A selection rather than an archive", "Formats decide how far it goes"],
        },
        {
          heading: "Three seats",
          body: "Seats leave room for more than one person, so exploring can include shared work as well as personal habits.",
          icon: "users",
          points: ["Room for a small circle", "Shared work tested early"],
        },
        {
          heading: "API access",
          body: "A maker can try building against the platform as well as using it, since the GetSibu API provides programmatic access to the digital asset platform.",
          icon: "api",
          points: ["Programmatic access", "Space to prototype an idea"],
          page: 261,
        },
        {
          heading: "Drag-and-drop uploads",
          body: "Files can go in directly through drag and drop, which suits individual assets or small batches without configuring an integration.",
          icon: "upload",
          page: 127,
        },
        {
          heading: "Search capabilities",
          body: "Search capabilities are part of the plan, which matters because finding work again is what an exploration most needs to test.",
          icon: "search",
        },
      ],
      sources: [{ kind: "pdf", page: 342 }, { kind: "pdf", page: 261 }, { kind: "pdf", page: 127 }, EXPLAINS],
    },
    {
      kind: "checklist",
      id: "weigh",
      eyebrow: "What to weigh",
      heading: "What an individual or maker should weigh first",
      variant: "chips",
      items: [
        "How much of your work is video",
        "Files worth trying first",
        "Collaborators you would invite",
        "Whether you will build with the API",
        "How you look for work today",
        "What a good result would look like",
        "Material best left elsewhere for now",
        "When you will decide on next steps",
      ],
      sources: [{ kind: "pdf", page: 342 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A freelance motion designer tests a library with two collaborators",
      team: "A freelance motion designer",
      situation: "A freelance motion designer keeps years of project files across an external drive and a laptop. She wants to know whether a searchable library would change how she reuses her own work, and whether her regular sound designer and producer would use it too.",
      steps: [
        { heading: "One project goes in first", body: ["She uses ", { text: "drag and drop upload", page: 127 }, " to add a recent project and a handful of older pieces she often goes looking for."] },
        { heading: "Storage stays in view", body: "Mindful of the plan’s storage, she leaves the heaviest render files on her drive and adds finished cuts instead." },
        { heading: "Collaborators are invited", body: "She invites the sound designer and the producer, so the test covers shared projects and not only her own routine." },
        { heading: "Others find files unaided", body: ["The producer looks for the latest cut without asking where it was saved, a practical check on whether ", { text: "creative file discovery", page: 24 }, " reduces the team’s reliance on remembering where files were stored."] },
        { heading: "An API idea is noted", body: ["She notes an idea for connecting her portfolio site to the library, and lists what she would need to learn from the ", { text: "API documentation", page: 273 }, "."] },
      ],
      outcome: "She finishes with a clear view of whether a library suits the way she works, and of whether storage or seats would be the first limit to matter as her work grows.",
      link: { page: 226, label: "GetSibu for Freelancers" },
      sources: [{ kind: "pdf", page: 342 }, { kind: "pdf", page: 127 }, { kind: "pdf", page: 24 }, { kind: "pdf", page: 273 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about the GetSibu free plan",
      items: [
        {
          question: "How far does 5 GB of storage go for creative work?",
          answer: "For documents, images and design files it can hold a meaningful body of work. Video fills storage far faster, so a maker who works mainly in footage is better off testing with a sample than with a whole archive.",
        },
        {
          question: "What is a seat, and how should the free plan’s seats be used?",
          answer: "A seat generally stands for one person’s place in a workspace. Before inviting occasional collaborators, check how seats are counted, and give them to the people whose involvement the exploration most needs to test.",
        },
        {
          question: "How should a maker choose what to upload first on the free plan?",
          answer: "Choose material you genuinely come back to, in the formats you use most. It tests the library against real habits, and keeps storage for the files that can answer the question.",
        },
        {
          question: "When might an individual outgrow the free plan?",
          answer: [
            "When the work that matters no longer fits the storage, when more people need to take part than the seats allow, or when the library has become daily routine rather than an experiment. ",
            { text: "Creative team pricing", page: 345 },
            " looks at choosing a plan according to library size and collaboration requirements.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 342 }, { kind: "pdf", page: 345 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More for individuals weighing up a creative library",
      variant: "compact",
      pages: [226, 227, 127, 261, 345],
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
