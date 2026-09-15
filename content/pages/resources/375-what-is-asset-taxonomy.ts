/**
 * 375 · What Is Asset Taxonomy? — /resources/what-is-asset-taxonomy
 *
 * Angle (cluster: dam-fundamentals; library-organisation): vendor-neutral explainer of classification — controlled
 * vocabulary, hierarchy, facets, synonyms, thesaurus and folksonomy — how a faceted taxonomy differs from a single
 * folder tree and how a usable one is designed. Creative Asset Organisation (8) owns GetSibu's hierarchical tags,
 * Creative Library Management (4) structure, Creative Library Navigation (29) moving through the library and AI
 * Library Organisation (57) AI keeping order.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Vendor-neutral explanation of taxonomy and classification practice; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 375,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "centered",
      eyebrow: "Resources",
      lede: "What an asset taxonomy is, the vocabulary of classification from controlled terms to facets, why a single folder tree is not enough, how a usable taxonomy is designed, and how GetSibu supports one.",
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 375 }, { kind: "pdf", page: 8 }],
    },
    {
      kind: "definition",
      id: "definition",
      eyebrow: "Definition",
      term: "Asset taxonomy",
      answer: "An asset taxonomy is a structured classification system that defines how digital content is grouped and labelled. It gives everyone using a library the same words for the same things.",
      detail: "A taxonomy sets out the categories a library uses — asset type, brand, product, campaign, market, usage — and the approved terms within each, usually arranged from broad to narrow. When people tag, filter or browse, they draw on that shared structure instead of inventing labels, which is what keeps results consistent from one person to the next.",
      sources: [{ kind: "pdf", page: 375 }, EXPLAINS],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Shared words for a shared library",
      body: [
        "A taxonomy is the agreed map of how a library’s content is classified: which categories exist, which terms belong in each and how those terms relate to one another.",
        "Without one, every contributor improvises. One person tags a shoot “autumn”, another “fall”, a third “AW campaign”; one team files by client, another by year. Each choice is sensible on its own, yet a search for any single term now finds only part of the material. The cost stays invisible until someone relies on the library and it returns less than it holds.",
        [
          "A taxonomy supplies the vocabulary that ",
          { text: "asset metadata", page: 374 },
          " fields and tags draw on. Its importance grows once ",
          { text: "AI tagging", page: 364 },
          " suggests labels at volume, because suggestions need a target vocabulary to be checked against.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Categories and approved terms", "Broader and narrower terms", "Facets for separate dimensions", "Synonyms that lead to one term", "Rules for changing the vocabulary"],
      },
      highlight: {
        heading: "In practice",
        body: "A retailer’s taxonomy keeps product, season, channel and market in separate facets. A merchandiser can combine “footwear”, “summer” and “social” in one search, instead of hoping someone once created a folder for exactly that combination.",
        tags: ["Retail", "Marketing", "Library managers"],
      },
      glance: {
        heading: "Asset taxonomy in brief",
        facts: [
          { label: "Area", value: "Organisation" },
          { label: "Defines", value: "How content is grouped and labelled" },
          { label: "Built from", value: "Categories, terms, hierarchy and synonyms" },
          { label: "In GetSibu", value: "Creative Asset Organisation", page: 8 },
        ],
        actions: [{ kind: "route", path: "/resources", label: "More in Resources" }]
      },
      sources: [{ kind: "pdf", page: 375 }, { kind: "pdf", page: 374 }, { kind: "pdf", page: 364 }, { kind: "pdf", page: 8 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "key-terms",
      eyebrow: "Key terms",
      heading: "The vocabulary of classification",
      items: [
        {
          heading: "Controlled vocabulary",
          summary: "An agreed list of terms, each with one preferred form.",
          icon: "book",
          body: [
            "A controlled vocabulary settles which word the library uses for each concept, for example “autumn/winter” rather than “AW” or “fall-winter”. It can be a simple list; a taxonomy arranges such terms into a structure.",
          ],
        },
        {
          heading: "Hierarchy",
          summary: "Terms arranged from broader to narrower.",
          icon: "layers",
          body: [
            "“Footwear” sits above “boots” and “trainers”; “Europe” above “France” and “Germany”. A hierarchy lets people work at the level that suits the task, from a broad category down to a precise term.",
          ],
        },
        {
          heading: "Facets",
          summary: "Independent dimensions, each describing a different aspect of an asset.",
          icon: "filter",
          body: [
            "Asset type, product, campaign, market and usage rights are separate questions, so they belong in separate facets rather than one deep tree. Facets can be combined freely in a search, something a single folder path cannot offer.",
          ],
        },
        {
          heading: "Synonyms",
          summary: "Alternative words that lead to the preferred term.",
          icon: "search",
          body: [
            "People will always search in their own words. Recording synonyms, abbreviations and former names against the preferred term means a search for any of them reaches the same assets without cluttering the vocabulary.",
          ],
        },
        {
          heading: "Thesaurus and ontology",
          summary: "Richer structures that add relationships beyond broader and narrower.",
          icon: "network",
          body: [
            "A thesaurus adds links between related terms and scope notes explaining when to use each one. An ontology goes further, defining types of things and the relationships between them. A faceted taxonomy with synonyms serves many creative libraries well without that extra complexity.",
          ],
        },
        {
          heading: "Folksonomy",
          summary: "Free tagging, where contributors add whatever words they like.",
          icon: "tag",
          body: [
            "Free tags capture language a formal taxonomy misses, but they drift quickly into duplicates and misspellings. They are most useful as a source of candidate terms for the controlled vocabulary, not as a replacement for it.",
          ],
        },
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "comparison",
      id: "folders-vs-facets",
      eyebrow: "The difference",
      heading: "A single folder tree versus a faceted taxonomy",
      intro: "Folders still have a job, such as expressing access and ownership; the difference lies in what they are asked to carry.",
      columns: ["Single folder tree", "Faceted taxonomy"],
      emphasis: 1,
      rows: [
        ["Where an asset can sit", "In one place only", "Under a term in every relevant facet"],
        ["An asset used in two campaigns", "Copied, or filed under one of them", "Tagged with both campaigns"],
        ["Combining criteria", "Only along the path someone built", "Any facets together in one search"],
        ["When the organisation changes", "Folders move and links break", "Terms are renamed or merged"],
        ["What people must remember", "The path to the file", "The terms, helped by synonyms"],
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "process",
      id: "designing",
      eyebrow: "In general",
      heading: "How a usable taxonomy is designed",
      intro: "Good taxonomies start from how people ask for assets, not from how files happen to be stored.",
      steps: [
        { heading: "Listen to requests", body: "Collect the words people really use when they ask for assets, from briefs, search histories and conversations with each team.", icon: "message" },
        { heading: "Choose the facets", body: "Identify the independent questions people ask, such as type, product, campaign and market, and give each its own facet.", icon: "filter" },
        { heading: "Draft the terms", body: "Write preferred terms for each facet, arrange them from broad to narrow, and record synonyms and abbreviations.", icon: "book" },
        { heading: "Test on real assets", body: "Classify a sample of the library and run typical searches; gaps and overlapping terms show up quickly.", icon: "check" },
        { heading: "Agree how it changes", body: "Name an owner and a light process for adding, merging and retiring terms, so the vocabulary grows without splintering.", icon: "refresh" },
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "in-getsibu",
      eyebrow: "In GetSibu",
      heading: "How GetSibu supports an asset taxonomy",
      items: [
        {
          heading: "Hierarchical tags",
          body: "GetSibu helps teams organise assets with structured folders and scalable taxonomies, using hierarchical tags, synonyms, colours and inheritance.",
          icon: "layers",
          page: 8,
        },
        {
          heading: "AI that answers to the taxonomy",
          body: "AI recommendations are not permanent: authorised users can override tags when a generated classification does not match the taxonomy the team intends.",
          icon: "approval",
          page: 48,
        },
        {
          heading: "Categorised by content",
          body: "AI classification can place assets in categories according to what they contain and the metadata available, so less organising is left to be done by hand.",
          icon: "sparkles",
          page: 42,
        },
        {
          heading: "Order as the library grows",
          body: "AI-assisted organisation helps teams keep order as the library grows, instead of needing a major manual clean-up after every campaign.",
          icon: "refresh",
          page: 57,
        },
        {
          heading: "What people search for",
          body: "Most-searched tags provide insight into what users are frequently looking for, which shows the terms a taxonomy most needs to serve well.",
          icon: "chart",
          page: 193,
        },
      ],
      sources: [{ kind: "pdf", page: 8 }, { kind: "pdf", page: 48 }, { kind: "pdf", page: 42 }, { kind: "pdf", page: 57 }, { kind: "pdf", page: 193 }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about asset taxonomy",
      items: [
        {
          question: "How does an asset taxonomy handle different markets and languages?",
          answer: "Usually through labels and synonyms rather than separate branches. One concept keeps one preferred term, with translations and local names recorded against it, so each market can keep its own word without splitting the vocabulary. Where markets genuinely classify things differently, a market facet is clearer than parallel trees.",
        },
        {
          question: "Should an asset taxonomy mirror the folder structure?",
          answer: ["Rarely in full. Folders are good at expressing access and ownership, while a taxonomy expresses what assets are about. Existing ", { text: "folder structures can be mirrored or remapped", page: 133 }, " when a library is imported into GetSibu, which is a good moment to decide which classifications belong in folders at all."],
        },
        {
          question: "How often should an asset taxonomy change?",
          answer: "Small additions, such as a new campaign or product term, can happen whenever they are needed. Structural changes, such as new facets or merged branches, deserve a deliberate review, because they affect every tag already applied.",
        },
        {
          question: "How detailed should an asset taxonomy be?",
          answer: "Detailed enough that searches return useful sets of assets, and no deeper. If people often cannot choose between two terms, or a branch holds only a handful of assets, the structure is probably too fine.",
        },
      ],
      sources: [{ kind: "pdf", page: 133 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on organising a library",
      variant: "compact",
      pages: [8, 42, 57, 29, 374, 364],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the navigation topic." }],
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
