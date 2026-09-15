/**
 * 57 · AI Library Organisation — /features/ai-library-organisation
 *
 * Angle (clusters library-organisation, ai-collections): AI-assisted organisation that keeps a library in
 * order as it grows, instead of a major manual clean-up after every campaign. Structure and taxonomy are
 * owned by 4 and 8; recommendations by 56.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how creative libraries drift out of order and how teams maintain them; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 57,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "AI",
      lede: "Why creative libraries slide into disorder between campaigns, and how AI assistance helps a team keep order a little at a time instead of scheduling the big clean-up nobody ever finishes.",
      visual: { diagram: "media-library" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 57 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Order kept up as material arrives",
      body: [
        "AI-assisted organisation in GetSibu helps teams maintain order as their library grows. The alternative it is meant to replace is familiar: a major manual clean-up after every campaign.",
        "Libraries rarely become disorganised through carelessness. They do it through deadlines. During a campaign, files are saved wherever is quickest, described later if at all, and exported in several versions that all look final. Afterwards the clean-up competes with the next brief and usually loses, so the backlog carries over and grows. After a few cycles, the structure on paper and the library in practice have little in common.",
        [
          "AI assistance changes the economics of that upkeep. ",
          { text: "Suggested tags", page: 31 },
          " and ",
          { text: "classification", page: 42 },
          " reduce the effort of describing and categorising each arrival, and ",
          { text: "duplicate detection", page: 40 },
          " identifies identical files and visually equivalent copies. The organisation system itself, with its ",
          { text: "hierarchical tags, synonyms and inheritance", page: 8 },
          ", remains something the team designs.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Order maintained, not restored", "No clean-up after every campaign", "Description and sorting assisted", "Copies identified", "A structure the team designs"],
      },
      highlight: {
        heading: "In practice",
        body: "At the end of a campaign, the library already holds reviewed descriptions of most of what was produced, so the wrap-up is a set of checks rather than a long sorting exercise.",
        tags: ["Campaigns", "Library managers", "Upkeep"],
      },
      glance: {
        heading: "Library organisation in brief",
        facts: [
          { label: "Area", value: "AI" },
          { label: "Helps with", value: "Keeping order as the library grows" },
          { label: "Works within", value: "Creative Asset Organisation", page: 8 },
          { label: "Explained in", value: "What Is Asset Taxonomy?", page: 375 },
        ],
        actions: [{ kind: "route", path: "/features/ai", label: "More in AI" }]
      },
      sources: [{ kind: "pdf", page: 57 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 42 }, { kind: "pdf", page: 40 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 375 }, EXPLAINS],
    },
    {
      kind: "before-after",
      id: "before-after",
      heading: "The clean-up cycle compared with continuous upkeep",
      beforeLabel: "Periodic clean-ups",
      afterLabel: "AI-assisted upkeep",
      before: ["Files saved wherever is quickest during a rush", "Descriptions postponed until later", "Copies accumulate unnoticed", "A clean-up that loses to the next brief"],
      after: ["Suggestions reviewed little and often", "Categorising helped by content and metadata", "Copies identified by duplicate detection", "Small, regular checks instead of a backlog"],
      sources: [{ kind: "pdf", page: 57 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 42 }, { kind: "pdf", page: 40 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "library-stages",
      eyebrow: "As the library grows",
      heading: "What staying organised involves at each stage of growth",
      tabs: [
        {
          label: "Starting out",
          heading: "Set the vocabulary before the volume arrives",
          icon: "compass",
          body: [
            "A new library is the cheapest moment to decide how things will be described. Every term agreed now is a term reviewers can check suggestions against later, and every one left undecided becomes an argument during the first big import.",
            ["If the library starts with a migration, ", { text: "folder structures can be mirrored or remapped", page: 133 }, " during import, which is a chance to keep what worked in the old arrangement and retire what did not."],
          ],
          points: ["Terms agreed before the first import", "The old arrangement kept or remapped"],
        },
        {
          label: "Growing",
          heading: "More contributors, more ways to describe one thing",
          icon: "trend",
          body: [
            "Growth usually means more people adding material, each with their own habits of naming and describing. Left alone, those habits produce several words for one subject and several homes for one kind of file.",
            ["Suggested tags give every contributor a common starting point instead of an empty record, and ", { text: "bulk approval", page: 47 }, " keeps review manageable when many of those suggestions fit."],
          ],
          points: ["Many contributors, many habits", "A common starting description"],
        },
        {
          label: "Mature",
          heading: "Keep history without letting it crowd today",
          icon: "archive",
          body: [
            ["A library holding years of material has a different problem: too much that is correct but no longer current. ", { text: "Asset archiving", page: 108 }, " retains historical content without letting old material interfere with everyday discovery."],
            ["Ongoing ", { text: "creative library maintenance", page: 111 }, " helps prevent the library from becoming cluttered with duplicate, obsolete or poorly classified content."],
          ],
          points: ["Old campaigns kept but out of the way", "Obsolete and poorly classified content addressed"],
        },
      ],
      sources: [{ kind: "pdf", page: 133 }, { kind: "pdf", page: 47 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 111 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "habits",
      eyebrow: "Habits",
      heading: "Small habits that make the big clean-up unnecessary",
      items: [
        {
          heading: "Close each campaign lightly",
          summary: "A short wrap-up while memories are fresh beats a long one months later.",
          icon: "check",
          body: [
            ["When a campaign ends, mark what was final and set aside what was not. ", { text: "Asset statuses", page: 102 }, " help teams distinguish drafts, approved content and other workflow states, so the distinction survives after the people involved move on."],
          ],
        },
        {
          heading: "Give the vocabulary an owner",
          summary: "Taxonomies decay when everyone can change them and nobody looks after them.",
          icon: "user",
          body: [
            "Someone should decide when a new term is needed, which of two competing words wins and when an old term is retired. Without that role, reviewers make those calls independently and the library drifts even with AI assistance.",
          ],
        },
        {
          heading: "Let searches reveal the gaps",
          summary: "What people look for shows where the organisation falls short.",
          icon: "search",
          body: [
            ["If a term is searched often but few assets carry it, either the material is missing or it is described differently. ", { text: "Most-searched tags", page: 193 }, " provide insight into what users are frequently looking for."],
          ],
        },
        {
          heading: "Watch the growth curve",
          summary: "A sudden jump in intake is the moment disorder usually starts.",
          icon: "chart",
          body: [
            ["Big intakes, such as a new client or a major production, stretch any review routine. ", { text: "Storage growth analytics", page: 149 }, " provide historical context around how quickly a creative library is expanding, which helps a team see a surge coming and plan review time for it."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 102 }, { kind: "pdf", page: 193 }, { kind: "pdf", page: 149 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about AI library organisation",
      items: [
        {
          question: "What should happen to the duplicates AI library organisation turns up?",
          answer: ["Decide case by case. Identical copies saved in a rush are usually unnecessary, while a visually equivalent file at another resolution may be the version a particular channel needs. ", "Once the unnecessary ones are clear, ", { text: "duplicate asset management", page: 112 }, " can also support storage optimisation."],
        },
        {
          question: "Can AI library organisation rescue a library that is already in disarray?",
          answer: "It can make catching up lighter, since processed assets arrive at review with suggestions rather than blank records. The backlog still deserves a planned pass; the lasting benefit is that a new one need not build up behind it.",
        },
        {
          question: "Does AI library organisation make folders and a taxonomy unnecessary?",
          answer: ["No. ", { text: "Creative library management", page: 4 }, " still relies on a structured environment of folders, tags, metadata and permissions; AI assistance helps keep that environment in order as it fills up."],
        },
        {
          question: "How can a team tell whether its library is staying organised over time?",
          answer: ["Follow how the library changes. ", { text: "Creative library trends", page: 187 }, " help organisations understand how their digital asset library changes over time."],
        },
      ],
      sources: [{ kind: "pdf", page: 57 }, { kind: "pdf", page: 112 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 4 }, { kind: "pdf", page: 187 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on keeping a library in order",
      variant: "compact",
      pages: [8, 4, 375, 111, 108, 42],
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
