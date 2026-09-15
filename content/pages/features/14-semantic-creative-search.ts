/**
 * 14 · Semantic Creative Search — /features/semantic-creative-search
 *
 * Angle (cluster: semantic-search): in the search box — describing a creative need such as “warm urban evening
 * footage” and how embeddings and AI-generated media information interpret it. Natural Language Asset Search (18)
 * owns how people remember assets, AI Semantic Search (39) the AI capability, AI Creative Search (49) the outcome,
 * Search Infrastructure (317) the retrieval architecture, What Is Semantic Search? (363) the neutral explainer.
 * This is the only page in the batch that uses the example query.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of descriptive search requests and embeddings in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 14,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Search & Discovery",
      lede: "Take one descriptive request apart to see how semantic search reads a creative need written in everyday words, and learn when describing an asset works better than matching exact keywords.",
      visual: { diagram: "search-signals", focus: "semantic" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 14 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Asking for a look, a mood or a setting in plain words",
      body: [
        "With semantic search, users describe the type of asset they want in natural language. GetSibu can interpret a request such as “warm urban evening footage” using available embeddings and AI-generated media information, instead of depending only on exact keyword matches.",
        "Creative briefs are written in qualities, not filenames. An art director asks for something that feels warm, a place that reads as a city, light that suggests the end of the day. Few of those words appear in any file’s metadata, so a search that insists on them returns nothing, or only the few assets someone happened to describe in exactly those terms.",
        [
          "An embedding represents meaning as a position in a mathematical space, so that a description and an asset with related meanings sit close together even when they share no words. ",
          { text: "What Is Semantic Search?", page: 363 },
          " explains the idea without reference to any product.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Describe the asset you need", "Meaning ahead of exact wording", "Embeddings compare meanings", "AI-generated media information", "Keywords still suit codes and names"],
      },
      highlight: {
        heading: "In practice",
        body: "A social editor types a description of the clip they have in mind rather than guessing which keywords an uploader chose, then keeps only video in the results.",
        tags: ["Art directors", "Editors", "Social teams"],
      },
      glance: {
        heading: "Semantic search in brief",
        facts: [
          { label: "Area", value: "Search & Discovery" },
          { label: "Interprets", value: "Descriptions written in natural language" },
          { label: "Capability", value: "AI Semantic Search", page: 39 },
          { label: "Starts from", value: "Natural Language Asset Search", page: 18 },
        ],
        actions: [{ kind: "route", path: "/features/search-and-discovery", label: "More in Search & Discovery" }]
      },
      sources: [{ kind: "pdf", page: 14 }, { kind: "pdf", page: 363 }, { kind: "pdf", page: 39 }, { kind: "pdf", page: 18 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "reading-the-request",
      eyebrow: "One request, four ideas",
      heading: "Reading “warm urban evening footage” word by word",
      items: [
        {
          heading: "Warm",
          summary: "A quality of colour and feeling, not a keyword anyone typed.",
          icon: "palette",
          body: [
            "“Warm” can describe colour temperature, a palette of ambers and oranges, or an emotional tone. A person searching rarely means only one of those, and would almost never find the word in a filename.",
            ["Information about ", { text: "colour", page: 36 }, " and ", { text: "visual mood", page: 35 }, " can be extracted from visual assets and made searchable, which gives a word like this something in the library to be compared with."],
          ],
        },
        {
          heading: "Urban",
          summary: "A setting that many different assets can show in different ways.",
          icon: "building",
          body: [
            "A city appears as streets, traffic, shopfronts, towers or a view across rooftops. No single tag covers every version of it, and an asset tagged “downtown” or “street” should still count as a candidate.",
            ["Interpreting meaning rather than exact words is what can let related vocabulary like this connect, and ",{ text: "object detection", page: 34 }, " adds tags for objects in supported media that can feed into discovery."],
          ],
        },
        {
          heading: "Evening",
          summary: "A time of day conveyed by light rather than stored as data.",
          icon: "clock",
          body: [
            "Evening is usually something you see: low sun, long shadows, lit windows. It may have little to do with the time a camera recorded, and footage filmed at dusk might carry only the name of its location.",
            "Qualities like this are why descriptions help. The thing wanted lives in how an asset looks, not in a field anyone completed.",
          ],
        },
        {
          heading: "Footage",
          summary: "The one word that names a kind of asset rather than a quality.",
          icon: "video",
          body: [
            "“Footage” tells the search that the request is for video. It is a category, not a feeling, and it is often clearer to express it as one: pairing the description with a category filter keeps out stills and documents that happen to share the mood.",
            ["GetSibu ", { text: "media filters", page: 19 }, " narrow results by category, format, source, resolution and date."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 14 }, { kind: "pdf", page: 36 }, { kind: "pdf", page: 35 }, { kind: "pdf", page: 34 }, { kind: "pdf", page: 39 }, { kind: "pdf", page: 19 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "keywords-and-meaning",
      eyebrow: "Side by side",
      heading: "Keyword matching compared with semantic interpretation",
      columns: ["Keyword matching alone", "Semantic creative search"],
      emphasis: 1,
      rows: [
        ["What a query must contain", "The words stored with the asset", "A description of what you need"],
        ["Different wording", "“City” misses assets tagged “urban”", "Related meanings can still connect"],
        ["Qualities nobody typed", "Out of reach", "Interpreted from AI-generated media information"],
        ["Product codes and filenames", "Precise and dependable", "Still handled by text search"],
        ["Best suited to", "Known items", "Creative concepts and visual descriptions"],
      ],
      sources: [{ kind: "pdf", page: 14 }, { kind: "pdf", page: 39 }, { kind: "pdf", page: 317 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "where-meaning-comes-from",
      eyebrow: "In GetSibu",
      heading: "Where the meaning in a semantic search comes from",
      items: [
        {
          heading: "Embedding-based retrieval",
          body: "GetSibu’s search infrastructure combines text search with embedding-based retrieval, so matching by meaning is one discovery method among several.",
          icon: "network",
          points: ["Meaning compared, not only words", "Text search kept alongside"],
          page: 317,
        },
        {
          heading: "Understanding of visual content",
          body: "AI media understanding interprets what visual assets contain and makes that information available to search and organisation.",
          icon: "eye",
          points: ["More than anonymous files", "Content described without manual entry"],
          page: 43,
        },
        {
          heading: "Reviewed tags",
          body: "Tags suggested during processing, which authorised users can review, approve or override, add descriptive words that a request can meet.",
          icon: "tag",
          points: ["Descriptive words for a request to meet", "Kept in line with the team’s taxonomy"],
          page: 31,
        },
        {
          heading: "Results for creative work",
          body: "AI creative search returns relevant results from available semantic and visual information when someone describes the asset they want.",
          icon: "sparkles",
          points: ["A description in, candidates out", "Refined with filters afterwards"],
          page: 49,
        },
      ],
      sources: [{ kind: "pdf", page: 317 }, { kind: "pdf", page: 43 }, { kind: "pdf", page: 44 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 47 }, { kind: "pdf", page: 48 }, { kind: "pdf", page: 49 }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about semantic creative search",
      items: [
        {
          question: "What kind of request suits semantic creative search best?",
          answer: "Descriptions of qualities that are seen or felt rather than recorded: a mood, a palette, a setting, a kind of light. For a known filename or product code, a plain keyword is usually the more direct route.",
        },
        {
          question: "Must assets be tagged with my exact words for semantic search to find them?",
          answer: "No. Semantic search interprets meaning rather than relying only on exact words, so assets described in different terms can still be relevant. Well-reviewed tags do give it more to work with.",
        },
        {
          question: "How does semantic creative search differ from natural language asset search?",
          answer: ["", { text: "Natural language asset search", page: 18 }, " is about describing an asset the way you remember it. Semantic creative search is how that description is read, using embeddings and AI-generated information about the media."],
        },
      ],
      sources: [{ kind: "pdf", page: 14 }, { kind: "pdf", page: 39 }, { kind: "pdf", page: 18 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on searching by meaning",
      variant: "compact",
      pages: [39, 18, 317, 363, 49, 36],
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
