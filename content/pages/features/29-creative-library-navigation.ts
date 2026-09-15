/**
 * 29 · Creative Library Navigation — /features/creative-library-navigation
 *
 * Angle (clusters: library-organisation, discovery-workflow): moving through the library by views, folders, tags,
 * collections and search, between broad exploration and specific discovery — which route suits which question,
 * how different people navigate, and how one task moves from browsing to a single asset. Creative Library
 * Management (4) owns the structure, Creative Asset Organisation (8) owns the taxonomy, Search Across Creative
 * Libraries (16) owns folders versus library-wide search, Asset Discovery Workflow (30) owns search → locate.
 * Collections are named only; how they are created or behave is not stated.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how people browse and search creative libraries; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 29,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Search & Discovery",
      lede: "Move through a creative library the way a task demands, from browsing views, folders, tags and collections to searching for one exact asset, and change route as the task changes.",
      visual: { diagram: "library-search" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 29 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "From looking around the library to landing on one asset",
      body: [
        "GetSibu provides structured navigation through library views, folders, tags, collections and search. Users can move between broad exploration of the library and highly specific asset discovery.",
        "People look for creative assets in two different frames of mind. Sometimes they know exactly what they want and only need to reach it. Just as often they are exploring: seeing what exists for a product, gathering references for a brief, checking what an earlier campaign produced. Real tasks switch between the two, and a library that supports only one of them pushes people into workarounds.",
        [
          "The organising tools that navigation moves through are described under ",
          { text: "creative library management", page: 4 },
          ". When the goal narrows to one asset, the ",
          { text: "asset discovery workflow", page: 30 },
          " describes the steps that follow.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Five routes through the library", "Broad exploration and precise discovery", "Changing route mid-task", "Structure for browsing, search for pinpointing", "Different people, different starting points"],
      },
      highlight: {
        heading: "In practice",
        body: "A brand manager planning an anniversary campaign starts in a heritage collection, follows a tag back to material from the early years, and finishes by searching for one photograph she half remembers.",
        tags: ["Brand managers", "Designers", "Library managers"],
      },
      glance: {
        heading: "Navigation in brief",
        facts: [
          { label: "Area", value: "Search & Discovery" },
          { label: "Routes", value: "Views, folders, tags, collections, search" },
          { label: "Ranges from", value: "Broad exploration to specific discovery" },
          { label: "Taxonomy explained", value: "What Is Asset Taxonomy?", page: 375 },
        ],
        actions: [{ kind: "route", path: "/features/search-and-discovery", label: "More in Search & Discovery" }]
      },
      sources: [{ kind: "pdf", page: 29 }, { kind: "pdf", page: 4 }, { kind: "pdf", page: 30 }, { kind: "pdf", page: 375 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "routes",
      eyebrow: "Choosing a route",
      heading: "Which route suits which kind of question",
      intro: "Each route begins from something different that a person already knows.",
      columns: ["Starts from", "Suits"],
      rows: [
        { label: "Views", cells: ["A set defined for a recurring need", "Returning to the same material without rebuilding it"] },
        { label: "Folders", cells: ["Where work was stored", "A known client, team or project"] },
        { label: "Tags", cells: ["A subject, type or campaign term", "Exploring a theme across many projects"] },
        { label: "Collections", cells: ["A grouping of related assets", "Coming back to a set rather than a single file"] },
        { label: "Search", cells: ["A name, a detail or a description", "One specific asset, or anything that fits a need"] },
      ],
      sources: [{ kind: "pdf", page: 29 }, { kind: "pdf", page: 4 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "people",
      eyebrow: "Who navigates how",
      heading: "How people with different needs move through the library",
      tabs: [
        {
          label: "Newcomers",
          heading: "Learning a library by walking through it",
          icon: "compass",
          body: [
            "Someone new to a team does not yet know the folder logic, the tag vocabulary or which campaigns matter. Broad exploration is how they learn, following top-level tags, looking through collections and opening views that colleagues share.",
            ["Moving from broad tags to narrower ones teaches the shape of the library while the newcomer looks for things, and a taxonomy built on ", { text: "hierarchical tags", page: 8 }, " can give that route a structure to follow."],
          ],
          points: ["Exploration as a way of learning", "Broad terms before narrow ones"],
        },
        {
          label: "Occasional users",
          heading: "A direct way to a defined set",
          icon: "eye",
          body: [
            "Colleagues in sales, HR or regional offices visit the library now and then, usually for the same few things: approved logos, current product images, the latest presentation template. They should not have to learn folders or tags to reach them.",
            ["Views serve them best. ", { text: "Shared creative views", page: 79 }, " allow recurring collections of assets to be shared through a URL, and ", { text: "approved-only views", page: 103 }, " give access to content that has completed the required review process."],
          ],
          points: ["No structure to learn first", "Views shared through a URL"],
        },
        {
          label: "Creatives",
          heading: "Browsing for ideas before there is a target",
          icon: "palette",
          body: [
            "Designers and art directors often begin without a particular asset in mind. They browse to see what has worked, what now looks tired and what has never been used, and that looking is part of the creative process rather than a delay before it.",
            "Tags suit this kind of looking because they cut across projects: a tag for a product range or a visual style gathers work from many shoots, where a folder shows the output of one.",
          ],
          points: ["Exploration with no fixed target", "Tags that cut across projects"],
        },
        {
          label: "Library managers",
          heading: "Navigating to find what is missing",
          icon: "map",
          body: [
            "Whoever looks after the library navigates for a different reason: to see where the structure is thin. A tag with almost nothing beneath it, or a folder that has become a dumping ground, shows where description or organisation needs attention.",
            ["", { text: "Tag analytics", page: 186 }, " identify frequently used or searched tags, which can help show whether the routes people actually take through the library match the ones its structure offers."],
          ],
          points: ["Thin areas found by browsing", "Search behaviour set against structure"],
        },
      ],
      sources: [{ kind: "pdf", page: 8 }, { kind: "pdf", page: 79 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 186 }, { kind: "pdf", page: 29 }, EXPLAINS],
    },
    {
      kind: "workflow",
      id: "broad-to-specific",
      eyebrow: "Broad to specific",
      heading: "One task moving from exploration to a single asset",
      stages: [
        { label: "Orient", body: "Start from a view or a top-level folder to get a sense of what exists for a client, a brand or a period." },
        { label: "Follow a theme", body: "Move from a broad tag to narrower ones, building a picture of the material before deciding which asset might be chosen." },
        { label: "Open a set", body: "Look through a collection of related assets to weigh candidates against one another." },
        { label: "Pinpoint", body: "Search for the specific detail that has emerged, whether a name, a product or a description, and narrow the results with filters.", page: 19 },
        { label: "Step back out", body: "Return to a broader route when the result raises a new question, such as what else came from the same shoot or campaign." },
      ],
      sources: [{ kind: "pdf", page: 29 }, { kind: "pdf", page: 19 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about creative library navigation",
      items: [
        {
          question: "What makes a tag work as a route to browse, not just a word to search?",
          answer: "A name that people other than its creator recognise, and enough material beneath it to be worth opening. Tags that differ only in spelling, or that each cover a single asset, add clutter to a route without helping anyone reach a file.",
        },
        {
          question: "How deep should folders go in a creative library that people navigate?",
          answer: "Deep enough to separate what people browse by, such as client, brand or year, and little further. Every extra level is one more choice someone must get right to reach a file, so detail that cuts across projects, such as subject or style, usually works better as a tag.",
        },
        {
          question: "How should a library manager decide which navigation routes to invest in?",
          answer: "By watching how people actually look for things. If most requests begin with campaigns, campaign tags and shared views deserve the most care; if teams work inside projects all day, a clear folder structure matters more.",
        },
        {
          question: "Is creative library navigation the same as the asset discovery workflow?",
          answer: ["Not quite. Navigation covers every route through the library, including open-ended browsing. The ", { text: "asset discovery workflow", page: 30 }, " is the focused sequence for reaching one correct asset: search, filter, preview and locate."],
        },
      ],
      sources: [{ kind: "pdf", page: 29 }, { kind: "pdf", page: 30 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on moving through a creative library",
      variant: "compact",
      pages: [30, 4, 8, 79, 103, 186],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Make Every Asset Discoverable",
      conversionPage: 394,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 394 }],
    },
  ],
};

export default page;
