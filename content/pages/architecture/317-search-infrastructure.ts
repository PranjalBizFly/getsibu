/**
 * 317 · Search Infrastructure — /architecture/search-infrastructure
 *
 * Angle (clusters: semantic-search, architecture-infrastructure): why the search layer pairs text search with
 * embedding-based retrieval — what each approach needs from the infrastructure, and what
 * a two-approach layer has to manage. Owns the inverted and vector index explanation in 301–320;
 * What Is Semantic Search? (363) owns searching by meaning; Fast Creative Search (307) owns latency. No
 * technologies, providers or figures are named.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Vendor-neutral explanation of text search and embedding-based retrieval; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 317,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Architecture & Performance",
      lede: "See why GetSibu’s search layer pairs text search with embedding-based retrieval, what each approach needs from the infrastructure behind it, and what a layer that runs both has to manage.",
      visual: { diagram: "architecture-stack", focus: "search" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 317 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Two ways of matching inside one search layer",
      body: [
        "GetSibu combines text search and embedding-based retrieval to support multiple discovery methods. The two approaches answer different kinds of question, and a creative library receives both kinds all day long.",
        ["Text search works with words: in general it finds items containing the terms of a query, often allowing for variations such as plurals. Embedding-based retrieval works with meaning, comparing representations of content and queries so that a description can reach assets that share few of its words. The idea of searching by meaning is explained in general terms under ", { text: "What Is Semantic Search?", page: 363 }, "; running both approaches side by side is a matter for infrastructure."],
        [
          "The information a query can match is set out under ",
          { text: "creative asset search", page: 11 },
          ": filenames, metadata, OCR, AI-generated tags, comments and semantic information. How promptly a query is answered is a separate design goal, examined under ",
          { text: "fast creative search", page: 307 },
          ".",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Inverted indexes", "Vector indexes", "Approximate nearest neighbours", "Blending two kinds of score", "Embeddings tied to their model", "Several discovery methods, one layer"],
      },
      highlight: {
        heading: "In practice",
        body: "A producer searches for a campaign code and wants exact matches; a moment later a designer types “calm morning light over water” and hopes for images described in quite different words. Both requests arrive at the same search layer.",
        tags: ["Producers", "Designers", "Search"],
      },
      glance: {
        heading: "Search infrastructure in brief",
        facts: [
          { label: "Area", value: "Architecture & Performance" },
          { label: "Combines", value: "Text search and embedding-based retrieval" },
          { label: "Supports", value: "Multiple discovery methods" },
          { label: "One layer of", value: "GetSibu Architecture", page: 301 },
        ],
        actions: [{ kind: "route", path: "/architecture", label: "More in Architecture & Performance" }]
      },
      sources: [{ kind: "pdf", page: 317 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 307 }, { kind: "pdf", page: 301 }, { kind: "pdf", page: 363 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "two-indexes",
      eyebrow: "Side by side",
      heading: "What each approach needs from the infrastructure behind it",
      intro: "General characteristics of the two approaches, whatever platform they sit in.",
      columns: ["Text search", "Embedding-based retrieval"],
      rows: [
        { label: "What is prepared in advance", cells: ["A list of terms and the items each appears in", "A numerical representation of each item"] },
        { label: "The structure consulted", cells: ["An inverted index, mapping each term to its items", "A vector index, organised by closeness between representations"] },
        { label: "How a query is prepared", cells: ["Split into terms and normalised in the same way as the content", "Passed through the same model that represented the content"] },
        { label: "How candidates are found", cells: ["Looking up each term and combining the lists", "Searching for the nearest representations"] },
        { label: "How candidates are scored", cells: ["By how well and how distinctively terms match", "By how close each representation sits to the query"] },
      ],
      sources: [{ kind: "pdf", page: 317 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "design-questions",
      eyebrow: "Inside the infrastructure",
      heading: "What a search layer with two approaches has to manage",
      intro: "These are general design questions for any search layer that combines the two approaches.",
      items: [
        {
          heading: "Blending two kinds of result",
          summary: "Scores from word matching and from closeness in meaning are not directly comparable.",
          icon: "layers",
          body: [
            "A word match yields a relevance score built from terms; an embedding comparison yields a measure of closeness. The two sit on different scales, so search systems generally combine them by rank position or with weightings rather than simply adding them together.",
            "How that blend is tuned decides whether an exact code match outranks a loosely related image, and people usually expect the exact match first.",
          ],
        },
        {
          heading: "Filters meet nearest-neighbour search",
          summary: "Narrowing by a condition works differently for words and for meaning.",
          icon: "filter",
          body: [
            "An inverted index can intersect a filter with the items matching a term exactly. A vector index looks for the nearest representations, so a filter applied only afterwards can leave few results standing, while one applied first changes the space being searched.",
            "Search systems generally have to choose between those orders or balance them, which is one reason combined queries are an infrastructure question rather than a detail of the search box.",
          ],
        },
        {
          heading: "Embeddings belong to the model that made them",
          summary: "Representations produced by different models cannot be compared with one another.",
          icon: "database",
          body: [
            "An embedding only means something relative to the model that produced it. In any system built on embeddings, moving to a different model generally means computing fresh representations for the whole collection, which is a substantial job in a large library.",
            "That dependency is one reason embedding-based retrieval is treated as infrastructure to be planned, not as a feature added to a search box.",
          ],
        },
        {
          heading: "Results people can make sense of",
          summary: "Trust in search grows when people can see why something appeared.",
          icon: "eye",
          body: [
            "With word matches the reason is visible, because the term appears in a name, tag or passage of text. With matches by meaning the connection is less obvious, and an unexpected result can look like a mistake.",
            "A result list that mixes evidently relevant items with useful discoveries tends to keep people trusting search, where a list of puzzling near-misses teaches them to give up.",
          ],
        },
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about search infrastructure",
      items: [
        {
          question: "Is search infrastructure the same thing as semantic search?",
          answer: ["No. Semantic search is one way of searching, one that ", { text: "interprets meaning rather than relying exclusively on exact words", page: 39 }, ". Search infrastructure is what sits behind every way of searching, including the exact matches that searching by meaning is not designed for."],
        },
        {
          question: "What is approximate nearest-neighbour search?",
          answer: "A way of finding the representations closest to a query without comparing it with every item in a collection. Vector indexes organise representations so that a search visits only promising regions, accepting that an occasional close item may be missed in return for far less work.",
        },
        {
          question: "Is embedding-based retrieval useful only for images and video?",
          answer: "No. Anything that can be described can be represented this way, including document text, descriptions, tags and information generated about visual media. Its value is greatest wherever people search by idea rather than by name.",
        },
      ],
      sources: [{ kind: "pdf", page: 39 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on how search is built",
      variant: "compact",
      pages: [307, 363, 39, 14, 11, 301],
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
