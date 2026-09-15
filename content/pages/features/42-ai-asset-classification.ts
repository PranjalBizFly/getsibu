/**
 * 42 · AI Asset Classification — /features/ai-asset-classification
 *
 * Angle (cluster: ai-tagging): classification — categorising assets by their content and available metadata to
 * reduce repetitive manual organisation, and how categories differ from tags within a taxonomy the team owns.
 * AI-Assisted Tagging (31) owns suggested tags; Tag Override (48) the correction mechanism; Asset Taxonomy (375)
 * the vendor-neutral explainer; AI Library Organisation (57) ongoing order as the library grows.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of classification and taxonomy practice; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 42,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "AI",
      lede: "What assisted classification changes about organising a creative library, how a category differs from a tag, and why the taxonomy behind it remains a decision for your team.",
      visual: { diagram: "ai-review", focus: "tags" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 42 }, { kind: "pdf", page: 9 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Categorising assets with less work by hand",
      body: [
        "AI classification in GetSibu helps categorise assets according to what they contain and the metadata available for them. The practical gain is less repetitive organisation work: fewer assets categorised one at a time by hand.",
        "Classification answers a different question from tagging. A tag describes something about an asset, such as an object, a colour or a campaign, and one asset can carry many. A category says what kind of asset it is, and a team usually works with far fewer of them: product photography or event coverage, brand guidelines or campaign reporting.",
        "Sorting by hand is where organisation systems tend to break. Each person applies the categories slightly differently, a busy week leaves a batch unsorted, and before long the structure describes how the library was meant to work rather than how it does.",
        [
          "Keeping categories consistent is what keeps a growing library usable. ",
          { text: "AI library organisation", page: 57 },
          " is about maintaining that order as the library grows, instead of facing a major manual clean-up after every campaign.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Categories from content and metadata", "Less repetitive sorting", "Categories are not tags", "A taxonomy the team defines", "Overrides when a category is wrong"],
      },
      highlight: {
        heading: "In practice",
        body: "A batch from a conference arrives mixed: venue photographs, presentation slides and printed signage. Classification can help categorise it, so the person organising the batch checks and adjusts instead of starting from nothing.",
        tags: ["Organisation", "Taxonomy", "Library managers"],
      },
      glance: {
        heading: "Classification in brief",
        facts: [
          { label: "Area", value: "AI" },
          { label: "Draws on", value: "Content and available metadata" },
          { label: "Metadata", value: "Media Metadata Management", page: 22 },
          { label: "Approach", value: "AI-Aware Asset Management", page: 9 },
        ],
        actions: [{ kind: "route", path: "/features/ai", label: "More in AI" }]
      },
      sources: [{ kind: "pdf", page: 42 }, { kind: "pdf", page: 57 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 9 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "key-terms",
      eyebrow: "Key terms",
      heading: "How classification, tags and taxonomy fit together",
      items: [
        {
          heading: "Category",
          summary: "The kind of asset something is.",
          icon: "folder",
          body: [
            "A category groups assets that belong together for a purpose, such as a type of content. It answers the question someone browsing a library asks first: what kind of thing am I looking at?",
          ],
        },
        {
          heading: "Tag",
          summary: "A descriptive label, many of which can sit on one asset.",
          icon: "tag",
          body: [
            ["Tags describe attributes rather than kind: what an asset shows, which campaign it served, which market it suits. Suggested tags are covered under ", { text: "AI-assisted tagging", page: 31 }, ", and they complement categories rather than replacing them."],
          ],
        },
        {
          heading: "Taxonomy",
          summary: "The agreed structure that defines the categories and labels.",
          icon: "book",
          body: [
            ["An ", { text: "asset taxonomy", page: 375 }, " is a structured classification system that defines how digital content is grouped and labelled. Any classification, human or assisted, is only as useful as the taxonomy it works within."],
          ],
        },
        {
          heading: "Hierarchy and inheritance",
          summary: "Broad groupings contain narrower ones.",
          icon: "layers",
          body: [
            ["A hierarchy lets a library record that social cut-downs are a kind of video content, and that video content is one kind of campaign material. ", { text: "Hierarchical tags, synonyms and inheritance", page: 8 }, " help that kind of structure stay useful as the collection expands."],
          ],
        },
        {
          heading: "Metadata",
          summary: "Recorded facts about a file, beyond what it looks like.",
          icon: "database",
          body: [
            ["Classification can take available metadata into account as well as content. In GetSibu, ", { text: "EXIF, XMP, file paths, creators and custom keywords", page: 22 }, " can become part of the asset record, which is context that pixels alone cannot provide."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 31 }, { kind: "pdf", page: 375 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 42 }, { kind: "pdf", page: 22 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "setting-up",
      eyebrow: "Step by step",
      heading: "Preparing a library for assisted classification",
      intro: "Classification can reduce repetitive work; the taxonomy its results are checked against stays a team decision.",
      steps: [
        { heading: "Agree the categories", body: "Decide which groupings people actually use to find and manage work, and write down what belongs in each one, so there is a clear standard to check results against.", icon: "compass" },
        { heading: "Give them a structure", body: "Arrange broad and narrow groupings so the taxonomy can absorb new campaigns and formats without being rebuilt.", icon: "layers" },
        { heading: "Keep the context on import", body: "When an existing library moves in, preserve the metadata that carries context, because classification can draw on available metadata.", icon: "upload", page: 132 },
        { heading: "Correct what does not fit", body: "Where a classification does not match the intended taxonomy, authorised users override it, so the library stays organised on the team’s terms.", icon: "refresh", page: 48 },
        { heading: "Browse the result", body: "Library views, folders, tags and collections let people move from broad exploration to a specific asset, which is the real test of any structure.", icon: "map", page: 29 },
      ],
      sources: [{ kind: "pdf", page: 132 }, { kind: "pdf", page: 42 }, { kind: "pdf", page: 48 }, { kind: "pdf", page: 29 }, EXPLAINS],
    },
    {
      kind: "before-after",
      id: "before-after",
      eyebrow: "The difference",
      heading: "A batch of assets, before and after classification",
      beforeLabel: "Sorted by hand",
      afterLabel: "With AI classification",
      before: ["Every file categorised individually", "Categories applied differently by each person", "Batches left unsorted in busy weeks", "Structure drifting from the agreed taxonomy"],
      after: ["Categorisation helped by content and metadata", "People checking and correcting instead of sorting", "Less repetitive organisation work", "Structure checked against the agreed taxonomy"],
      sources: [{ kind: "pdf", page: 42 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about AI asset classification",
      items: [
        {
          question: "How is AI asset classification different from AI tagging?",
          answer: "Classification helps say what kind of asset something is. Tagging adds descriptive labels, and an asset can carry many tags while belonging to only a few categories.",
        },
        {
          question: "How many categories should an asset library use?",
          answer: "As few as people can tell apart without hesitating. When categories overlap, people choose between them inconsistently, and checking classification results against the taxonomy becomes harder as well.",
        },
        {
          question: "Does AI classification remove the need to organise a library manually?",
          answer: "It reduces repetitive manual organisation work rather than removing people from it. Deciding the categories, reviewing results and correcting mismatches remain human tasks.",
        },
      ],
      sources: [{ kind: "pdf", page: 42 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on organising assets with AI",
      variant: "compact",
      pages: [31, 48, 375, 8, 57, 9],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Turn Your Asset Library Into Intelligence",
      conversionPage: 398,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 398 }],
    },
  ],
};

export default page;
