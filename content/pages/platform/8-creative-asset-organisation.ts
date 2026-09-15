/**
 * 8 · Creative Asset Organisation — /platform/creative-asset-organisation
 *
 * Angle (cluster: library-organisation, primary): taxonomy that scales — hierarchical tags, synonyms, colours and
 * inheritance alongside structured folders, how each building block works in taxonomy practice, and how to design
 * a vocabulary before the library outgrows it. Creative Library Management (4) owns the five structural tools;
 * What Is Asset Taxonomy? (375) owns the vendor-neutral definition; AI Colour Detection (36) owns colour inside
 * images. The PDF names the building blocks but not their mechanics, so their behaviour is explained as general
 * taxonomy practice (Tier B) rather than stated as GetSibu implementation detail.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of taxonomy design practice; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 8,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Platform",
      lede: "How structured folders and a taxonomy of hierarchical tags, synonyms, colours and inheritance help a creative library stay organised as it grows from thousands of assets towards millions, and how to design that taxonomy well.",
      visual: { diagram: "media-library", focus: "image" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 8 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A taxonomy that still works at a much larger scale",
      body: [
        "GetSibu helps teams organise creative assets with structured folders and taxonomies built to scale. The building blocks are hierarchical tags, synonyms, colours and inheritance, and together they make it possible to create an organisation system that remains useful when the library reaches thousands or even millions of assets.",
        "Organisation systems rarely fail all at once. A flat list of tags grows until nobody can scan it; two colleagues describe the same subject with different words; a new campaign needs a category that fits nowhere. Each problem is small, but together they turn every search into a guess about which variant somebody used.",
        [
          "A taxonomy is the remedy for that drift. ",
          { text: "What Is Asset Taxonomy?", page: 375 },
          " defines it as a structured classification system for how content is grouped and labelled. The question here is what lets such a system hold up at scale, while ",
          { text: "creative library management", page: 4 },
          " covers how it works alongside collections, metadata and permissions.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Structured folders", "Hierarchical tags", "Synonyms", "Colours", "Inheritance", "A vocabulary that scales"],
      },
      highlight: {
        heading: "In practice",
        body: "In a taxonomy, a synonym records once that “footwear” and “shoes” mean the same thing, instead of leaving each colleague to pick a word and hoping the others guess it.",
        tags: ["Library managers", "Brand teams", "Designers"],
      },
      glance: {
        heading: "Taxonomy in brief",
        facts: [
          { label: "Area", value: "Platform" },
          { label: "Building blocks", value: "Hierarchical tags, synonyms, colours, inheritance" },
          { label: "Meant to stay useful at", value: "Thousands or millions of assets" },
          { label: "Tag usage shown by", value: "Tag Analytics", page: 186 },
        ],
        actions: [{ kind: "route", path: "/platform", label: "More in Platform" }]
      },
      sources: [{ kind: "pdf", page: 8 }, { kind: "pdf", page: 375 }, { kind: "pdf", page: 4 }, { kind: "pdf", page: 186 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "building-blocks",
      eyebrow: "Building blocks",
      heading: "Four building blocks, and how taxonomies generally use them",
      intro: "How each part of a taxonomy generally works, and what it asks of the team designing it.",
      items: [
        {
          heading: "Hierarchical tags",
          summary: "Broad terms at the top and specific ones beneath, so the vocabulary has a shape.",
          icon: "layers",
          body: [
            "A hierarchy arranges tags from general to specific. A broad term such as “Products” can hold narrower terms for each product line, and beneath those the individual products. In a hierarchy built this way, someone unsure of the exact word can start from the broad term and work down.",
            "Hierarchy also keeps a large vocabulary readable. A flat list of several hundred tags is hard to scan; the same tags grouped under a handful of parents are not.",
          ],
          points: ["General terms hold specific ones", "A route in when the exact word is unknown"],
        },
        {
          heading: "Synonyms",
          summary: "In a taxonomy, different words for the same thing point to one preferred tag.",
          icon: "text",
          body: [
            "Creative organisations seldom share one vocabulary. Designers, marketers and regional colleagues may call a subject by several names, and abbreviations add further variants.",
            "In taxonomy terms, a synonym records that relationship once. Rather than tagging an asset with every variant, or accepting that some searches will miss it, the vocabulary keeps one preferred tag and treats the alternatives as equivalent.",
          ],
          points: ["One preferred term, several routes to it", "Fewer near-duplicate tags"],
        },
        {
          heading: "Colours",
          summary: "GetSibu lists colours with hierarchical tags, synonyms and inheritance as parts of a scalable taxonomy.",
          icon: "palette",
          body: [
            "In tagging practice, colour can serve as a visual cue rather than a description of an asset: a consistent colour for a group of related terms, for instance, can make a long vocabulary easier to read. Whatever role colour is given, it helps only when a team agrees what each colour stands for and keeps to that meaning.",
            ["Colour can also describe the content of visual assets themselves, which is different information: ", { text: "AI colour detection", page: 36 }, " extracts colour information from visual assets so it can be used as part of asset discovery."],
          ],
          points: ["Agree what each colour stands for", "Apply that meaning consistently"],
        },
        {
          heading: "Inheritance",
          summary: "In taxonomy design, inheritance describes what is defined at a broader term carrying through to the narrower terms beneath it.",
          icon: "workflow",
          body: [
            "Inheritance is what makes a hierarchy more than an outline. In taxonomy design, the term generally describes something defined once at a parent carrying through to its children, so that a specific term always sits within the context of the broader ones above it.",
            "A team planning its vocabulary can use that idea to decide what belongs at each level: what a whole group shares is settled at the top, and only what is distinctive is added lower down. That keeps the hierarchy consistent and avoids restating the same information at every level.",
          ],
          points: ["Shared context settled at the broader term", "Only what is distinctive added lower down"],
        },
      ],
      sources: [{ kind: "pdf", page: 8 }, { kind: "pdf", page: 36 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "design-steps",
      eyebrow: "Step by step",
      heading: "Designing a taxonomy before the library outgrows it",
      intro: "A sequence for building, or rebuilding, a tag vocabulary that will scale.",
      steps: [
        { heading: "Learn how people search", body: "Start from the words colleagues actually use: tag analytics identify frequently used or searched tags, which shows how the library is being discovered.", icon: "chart", page: 186 },
        { heading: "Choose the top level", body: "Pick a small number of broad groups likely to stay meaningful for years, such as products, campaigns, regions and content types.", icon: "layers" },
        { heading: "Build down, not across", body: "Add narrower tags beneath an existing group before creating new top-level terms, so growth deepens the hierarchy instead of flattening it.", icon: "workflow" },
        { heading: "Record the variants", body: "Collect the alternative names, abbreviations and regional terms for each tag and treat them as synonyms rather than separate tags.", icon: "text" },
        { heading: "Fix the naming conventions", body: "Agree singular or plural forms, capitalisation and how abbreviations are written before the list grows, because inconsistent forms quietly create near-duplicate tags.", icon: "text" },
        { heading: "Check suggestions against it", body: "When an AI-suggested tag does not match the intended taxonomy, authorised users can override it, which keeps the vocabulary consistent.", icon: "approval", page: 48 },
      ],
      sources: [{ kind: "pdf", page: 186 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 48 }, { kind: "pdf", page: 375 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "by-team",
      eyebrow: "By team",
      heading: "One taxonomy, read differently by each team",
      tabs: [
        {
          label: "Brand teams",
          heading: "Tags that mark what meets the standard",
          icon: "shield",
          body: [
            "Brand teams need to know not only what an asset shows but whether it can be used, which makes compliance as much a classification question as an approval one.",
            [{ text: "Brand guardrail tags", page: 105 }, " use structured tags to identify assets that comply with specific organisational requirements, and brand teams can organise approved assets by campaign, region or market."],
          ],
          points: ["Requirements recorded as structured tags", "Approved assets organised by campaign, region or market"],
          link: { page: 214, label: "GetSibu for Brand Teams" },
        },
        {
          label: "Marketing teams",
          heading: "A vocabulary for campaigns and products",
          icon: "megaphone",
          body: [
            "Marketing material is reused across launches, channels and seasons, so one image may need to be found under a product, a campaign and a channel.",
            ["Hierarchy and synonyms matter most here, and a search built on consistent tags can become one of the ", { text: "saved asset searches", page: 17 }, " that serve as reusable views for campaigns, clients, products and content categories."],
          ],
          points: ["One asset reachable from several angles", "Recurring searches kept as views"],
          link: { page: 213, label: "GetSibu for Marketing Teams" },
        },
        {
          label: "Production teams",
          heading: "Consistent terms across long projects",
          icon: "film",
          body: [
            "Productions generate large volumes of similar-looking material over long periods, often tagged by different people at different stages.",
            ["A shared vocabulary keeps early and late material consistent, and ", { text: "AI asset classification", page: 42 }, " helps categorise assets by their content and available metadata, reducing repetitive manual organisation when footage arrives in quantity."],
          ],
          points: ["Terms that mean the same at every stage", "Classification that keeps up with volume"],
          link: { page: 211, label: "GetSibu for Production Studios" },
        },
      ],
      sources: [{ kind: "pdf", page: 105 }, { kind: "pdf", page: 83 }, { kind: "pdf", page: 214 }, { kind: "pdf", page: 17 }, { kind: "pdf", page: 213 }, { kind: "pdf", page: 42 }, { kind: "pdf", page: 211 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about creative asset organisation",
      items: [
        {
          question: "What is the difference between hierarchical tags and folders in creative asset organisation?",
          answer: "A folder decides where an asset is kept. Hierarchical tags describe what the asset is, arranged from broad to specific, so an asset that belongs to more than one theme can be described by more than one tag.",
        },
        {
          question: "Should colours and inheritance be planned before tagging begins?",
          answer: "It helps. Deciding what each colour stands for, and what belongs at each level of the hierarchy, is far easier while the vocabulary is small than once many assets already carry tags.",
        },
        {
          question: "How do AI-suggested tags fit an organisation’s own taxonomy?",
          answer: ["The team’s taxonomy stays the reference. In ", { text: "AI-aware asset management", page: 9 }, ", teams can approve suggestions in bulk or override them, keeping control over how the library is organised."],
        },
        {
          question: "Can a tag taxonomy become too detailed?",
          answer: "Yes. A hierarchy with more levels than people can remember slows tagging down and invites inconsistent choices. Add depth where searches need precision, and stop where a broad term does the job.",
        },
      ],
      sources: [{ kind: "pdf", page: 8 }, { kind: "pdf", page: 9 }, { kind: "pdf", page: 31 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on organising creative assets",
      variant: "compact",
      pages: [375, 4, 186, 105, 57, 29],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the closest organisation topics." }],
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
