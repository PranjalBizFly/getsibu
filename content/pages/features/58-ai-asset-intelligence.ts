/**
 * 58 · AI Asset Intelligence — /features/ai-asset-intelligence
 *
 * Angle (cluster ai-intelligence): the combination of AI analysis with metadata and search capabilities that
 * makes a media library more informative. Interpretation is 43, the information layer is 44, indexing is 50.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how content analysis, metadata and search complement each other in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 58,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "AI",
      lede: "Why AI analysis, recorded metadata and search are each incomplete on their own, and how bringing the three together gives a media library answers about individual assets and about the collection as a whole.",
      visual: { diagram: "search-signals" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 58 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Three sources of knowledge, one informative library",
      body: [
        "Asset intelligence in GetSibu brings AI analysis together with metadata and search capabilities. The aim is a media library that is more informative: one that can tell people more about what it holds.",
        "Each of the three is incomplete on its own, and the gaps fall in different places. A real request rarely concerns only what an asset shows or only where it came from, so a library that can draw on both kinds of knowledge at once can answer the question people actually ask, rather than half of it.",
        [
          "The analysis half is explained in ",
          { text: "AI media understanding", page: 43 },
          ", and the recorded half in ",
          { text: "media metadata management", page: 22 },
          ", where EXIF, XMP, file paths, creators and custom keywords can become part of the asset record. Search ties them together, because ",
          { text: "search across creative libraries", page: 16 },
          " can combine different information sources.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["AI analysis of content", "Metadata about the file", "Search that combines sources", "Each covers another’s blind spot", "Informative about assets and the library"],
      },
      highlight: {
        heading: "In practice",
        body: "Before commissioning a new product shoot, a brand manager checks what the library already holds for the range, who made it and what it shows, and briefs the photographer only on the gaps.",
        tags: ["Brand managers", "Planning", "Collections"],
      },
      glance: {
        heading: "Asset intelligence in brief",
        facts: [
          { label: "Area", value: "AI" },
          { label: "Combines", value: "AI analysis, metadata and search" },
          { label: "Analysis from", value: "AI Media Understanding", page: 43 },
          { label: "Broader idea", value: "AI Creative Intelligence", page: 44 },
        ],
        actions: [{ kind: "route", path: "/features/ai", label: "More in AI" }]
      },
      sources: [{ kind: "pdf", page: 58 }, { kind: "pdf", page: 43 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 16 }, { kind: "pdf", page: 44 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "blind-spots",
      eyebrow: "Why combine them",
      heading: "What each source can and cannot tell you about an asset",
      intro: "Read across a row to see where one source fills another’s gap.",
      columns: ["AI analysis", "Metadata", "Search across both"],
      rows: [
        { label: "What the asset shows", cells: ["Objects, visual mood, colour", "Only what someone typed", "Found by content"] },
        { label: "Who made it, and when", cells: ["Not visible in the content", "Creators and capture details", "Narrowed by origin"] },
        { label: "Words printed inside it", cells: ["Extracted text from OCR", "Rarely recorded", "Found by a remembered phrase"] },
        { label: "Why it exists", cells: ["Not visible in the content", "Campaign or client keywords", "Found by project context"] },
      ],
      sources: [{ kind: "pdf", page: 34 }, { kind: "pdf", page: 35 }, { kind: "pdf", page: 36 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 38 }, { kind: "pdf", page: 23 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "levels",
      eyebrow: "Two levels",
      heading: "Informative about each asset and about the whole library",
      tabs: [
        {
          label: "Each asset",
          heading: "A fuller account of a single file",
          icon: "document",
          body: [
            "At the level of one asset, intelligence means a file can be found and understood through more than its name and size. What it shows, the words it contains and where it came from all give a search something to match, so a colleague who has never seen the file can still reach it.",
            ["Human input still counts: ", { text: "comments", page: 11 }, " are among the sources creative asset search draws on, so what reviewers wrote about an asset can help it be found too."],
          ],
          points: ["Content, text and origin together", "Reviewers’ notes as part of the picture"],
        },
        {
          label: "The collection",
          heading: "A view of what the library holds",
          icon: "chart",
          body: [
            ["Individual records add up to knowledge about the collection. ", { text: "Storage by category", page: 192 }, " shows how storage is split between video, images, documents and audio, which is a first answer to what a library is actually made of."],
            "That view helps a team decide where describing and reviewing effort will pay off most.",
          ],
          points: ["A picture of the collection’s make-up", "Effort directed where the material is"],
        },
        {
          label: "People’s needs",
          heading: "What colleagues keep looking for",
          icon: "search",
          body: [
            ["A library also learns from how it is used. ", { text: "Tag analytics", page: 186 }, " identify frequently used or searched tags, helping teams understand how their library is being discovered."],
            "When what people search for and what the library describes diverge, the gap tells the team which descriptions to improve next.",
          ],
          points: ["Search behaviour as a signal", "Descriptions improved where demand is"],
        },
      ],
      sources: [{ kind: "pdf", page: 11 }, { kind: "pdf", page: 192 }, { kind: "pdf", page: 186 }, { kind: "pdf", page: 58 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "An archive request answered by combining clues",
      team: "A media company",
      situation: "A media company’s archive team is asked for photographs of a city bridge taken before its restoration, by staff photographers, for a feature marking the reopening.",
      steps: [
        { heading: "Content narrows the subject", body: "The archivist searches for photographs of the bridge, reaching images through what analysis identified in them rather than through captions that may never have been written." },
        { heading: "Metadata narrows the origin", body: ["Using ", { text: "asset metadata search", page: 23 }, ", the archivist limits results to files whose recorded creators are staff photographers."] },
        { heading: "Dates narrow the period", body: ["A date ", { text: "filter", page: 19 }, " removes photographs taken after the restoration began."] },
        { heading: "Printed words confirm the detail", body: "A few images show a sign with the bridge’s old name, and the extracted text helps confirm they belong to the earlier period." },
      ],
      outcome: "The feature team receives a focused set of archive photographs that fit on subject, photographer and period, assembled from three kinds of information working together.",
      link: { page: 232, label: "GetSibu for Media Companies" },
      sources: [{ kind: "pdf", page: 58 }, { kind: "pdf", page: 12 }, { kind: "pdf", page: 23 }, { kind: "pdf", page: 19 }, { kind: "pdf", page: 38 }, { kind: "pdf", page: 232 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about AI asset intelligence",
      items: [
        {
          question: "How is AI asset intelligence different from AI creative intelligence?",
          answer: [{ text: "AI creative intelligence", page: 44 }, " is the broader idea: stored files turned into a more understandable information layer, with searchable meaning attached to their content. Asset intelligence is narrower and more practical, concerned with answering specific requests and describing the collection as a whole."],
        },
        {
          question: "Does AI asset intelligence apply to documents as well as imagery?",
          answer: ["For documents, the same principle works through their words. ", { text: "AI document discovery", page: 53 }, " combines OCR and metadata to help users locate documents based on information contained inside them."],
        },
        {
          question: "Which kind of information is usually weakest in an older library?",
          answer: ["Recorded metadata. Files that passed through several drives and exports often lose creators, keywords and original paths, leaving analysis of the content to carry more of the description. That is why ", { text: "metadata preservation", page: 132 }, " during a migration matters to asset intelligence long after the move."],
        },
      ],
      sources: [{ kind: "pdf", page: 44 }, { kind: "pdf", page: 58 }, { kind: "pdf", page: 53 }, { kind: "pdf", page: 132 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on making a library informative",
      variant: "compact",
      pages: [43, 44, 50, 22, 186, 380],
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
