/**
 * 16 · Search Across Creative Libraries — /features/search-across-creative-libraries
 *
 * Angle (cluster: creative-search): library-wide scope — searching everything at once instead of opening folders
 * one by one, what that scope reaches and what it asks of the library. Creative Asset Search (11) owns the
 * signals, Media Search Platform (13) owns keywords plus filters, Creative File Discovery (24) owns the unified
 * search across media types and reliance on folder knowledge, Creative Library Navigation (29) owns browsing.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of folder-based versus library-wide searching; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 16,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Search & Discovery",
      lede: "Search the whole creative library in one pass instead of opening folders one at a time, and see what changes when results can come from any part of the library and from more than one kind of information.",
      visual: { diagram: "search-signals" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 16 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "One search instead of a tour of folders",
      body: [
        "In GetSibu, teams can search their entire creative library rather than opening folders by hand, one after another. Results can bring together different sources of information, which makes discovery quicker and more flexible than looking in one place at a time.",
        "Folders answer one question well: where did someone put this? They struggle with almost everything else. A product photographed for three campaigns lives in three folders; a logo is copied into each project that used it; a film delivered by an agency sits wherever that agency’s files happened to land. Searching folder by folder means knowing in advance which folders are worth opening, and that is exactly the knowledge a newcomer or a colleague from another team lacks.",
        [
          "Library-wide search does not make structure pointless. ",
          { text: "Creative library navigation", page: 29 },
          " still moves between library views, folders, tags and collections, so people can browse broadly or search for something specific depending on what they know.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["The whole library in one search", "No need to know the folder", "Results from several information sources", "Folders kept for browsing", "Filters to tame broad results"],
      },
      highlight: {
        heading: "In practice",
        body: "A new designer asked for “whatever we have of the travel mug” searches once, instead of asking three colleagues which campaign folders to check.",
        tags: ["New starters", "Cross-team requests", "Reuse"],
      },
      glance: {
        heading: "Library-wide search in brief",
        facts: [
          { label: "Area", value: "Search & Discovery" },
          { label: "Scope", value: "The entire creative library" },
          { label: "Signals", value: "Creative Asset Search", page: 11 },
          { label: "Next step", value: "Asset Discovery Workflow", page: 30 },
        ],
        actions: [{ kind: "route", path: "/features/search-and-discovery", label: "More in Search & Discovery" }]
      },
      sources: [{ kind: "pdf", page: 16 }, { kind: "pdf", page: 29 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 30 }, EXPLAINS],
    },
    {
      kind: "layers",
      id: "scope",
      eyebrow: "Scope",
      heading: "What a library-wide search reaches",
      layers: [
        { label: "Across locations", body: "GetSibu gathers assets from connected drives, local infrastructure and direct uploads into one central location, which is what gives a single search something whole to work on.", page: 6 },
        { label: "Across folders", body: "Folder structures mirrored or remapped at import keep organising the library, but a search is not confined to any one branch of them." },
        { label: "Across asset types", body: "Images, video, audio and documents share one search experience, so a request about a campaign can return its film, its stills and its presentation together.", page: 24 },
        { label: "Without the clutter", body: "Archiving keeps historical content without letting it interfere with everyday discovery, and duplicate detection helps find unnecessary copies that would otherwise crowd a broad result list." },
      ],
      sources: [{ kind: "pdf", page: 6 }, { kind: "pdf", page: 133 }, { kind: "pdf", page: 24 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 112 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A flagship product’s history gathered in one search",
      team: "An in-house creative team",
      situation: "An in-house creative team is preparing an anniversary retrospective of the company’s best-known product. Its assets were made for many campaigns, by different teams and agencies, over several years.",
      steps: [
        { heading: "One search for the product", body: "A designer searches the whole library for the product’s name, rather than working out which campaign folders might contain it." },
        { heading: "Results arrive from everywhere", body: "Photography, launch films, presentations and packaging artwork come back together, including material from folders the designer had never opened." },
        { heading: "The set is narrowed", body: ["Filters for ", { text: "category and date", page: 19 }, " narrow the results to the kinds of media and the period the retrospective covers."] },
        { heading: "Old decks surface by their words", body: ["Early presentations with generic filenames appear because the product name is printed on their slides, and ", { text: "text inside files is searchable", page: 15 }, "."] },
        { heading: "The selection is shared", body: "The team saves the final search and shares its URL, so the copywriter and the project lead both work from the same results." },
      ],
      outcome: "The retrospective draws on material from the whole of the library’s history, found without anyone reconstructing where each campaign had once been filed.",
      link: { page: 222, label: "GetSibu for In-House Creative Teams" },
      sources: [{ kind: "pdf", page: 16 }, { kind: "pdf", page: 24 }, { kind: "pdf", page: 19 }, { kind: "pdf", page: 15 }, { kind: "pdf", page: 17 }, { kind: "pdf", page: 222 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "accordion",
      id: "considerations",
      eyebrow: "Considerations",
      heading: "What to weigh when searching everything at once",
      items: [
        {
          heading: "Broader scope means longer result lists",
          summary: "A search of the whole library will usually return more than a search of one folder.",
          icon: "filter",
          body: [
            "That is the point, but it changes how people work. Instead of looking hard for a result, they look through many and narrow them.",
            ["On the ", { text: "media search platform", page: 13 }, ", keywords are combined with filters for category, format, uploader, resolution and date, which is how a long list becomes a short one."],
          ],
        },
        {
          heading: "Consistent tags matter more across folders",
          summary: "Library-wide search rewards a shared vocabulary.",
          icon: "tag",
          body: [
            "When each team tags in its own style, a search that crosses team boundaries finds one team’s assets and misses another’s. A common taxonomy helps a single query work across the whole library.",
            ["GetSibu’s ", { text: "creative asset organisation", page: 8 }, " uses hierarchical tags, synonyms, colours and inheritance to build that kind of system."],
          ],
        },
        {
          heading: "Unfamiliar results need context",
          summary: "Finding an asset in a part of the library you never use raises the question of whether it is the right one.",
          icon: "check",
          body: [
            ["Before reusing something from another team, it helps to know where it stands. ", { text: "Review status", page: 76 }, " shows whether an asset still needs attention or has completed approval, and ", { text: "asset ownership", page: 115 }, " gives context about who created or uploaded it."],
          ],
        },
        {
          heading: "Folders still have a job",
          summary: "Browsing a known project is sometimes quicker than describing it.",
          icon: "folder",
          body: [
            "Someone working inside a single project all day may prefer its folder to any search. Library-wide search earns its place when the location is unknown, the request crosses projects, or the person asking is new.",
            "Keeping both routes open lets each person use whichever matches what they already know.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 13 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 76 }, { kind: "pdf", page: 115 }, { kind: "pdf", page: 29 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about searching across creative libraries",
      items: [
        {
          question: "What should I do when a library-wide search returns too many results?",
          answer: "Add a more distinctive detail, such as a campaign name or a phrase printed in the file, and combine the search with filters. A broad result list is where a library-wide search starts, not where it has to end.",
        },
        {
          question: "How can someone new find assets without learning the folder structure first?",
          answer: ["By searching for what they know about an asset, such as a product, a campaign or a phrase, across the whole library. GetSibu is designed to ", { text: "reduce the dependency on folder knowledge", page: 24 }, " and on colleagues remembering where files were stored."],
        },
        {
          question: "Can one search across creative libraries match different kinds of information at once?",
          answer: "Yes. Results can combine different information sources, so one asset may appear because of its metadata while another appears because of text printed inside it.",
        },
      ],
      sources: [{ kind: "pdf", page: 16 }, { kind: "pdf", page: 24 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on finding assets anywhere in the library",
      variant: "compact",
      pages: [11, 24, 29, 13, 30],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Stop Searching Through Folders",
      conversionPage: 393,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 393 }],
    },
  ],
};

export default page;
