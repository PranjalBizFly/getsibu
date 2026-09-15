/**
 * 363 · What Is Semantic Search? — /resources/what-is-semantic-search
 *
 * Angle (cluster: semantic-search; ai-explainers): vendor-neutral explainer of searching by meaning — embeddings,
 * similarity and ranking in plain terms, how it differs from keyword search, and when exact words still win.
 * Semantic Creative Search (14) owns the search-box example, Natural Language Asset Search (18) how people
 * remember assets, AI Semantic Search (39) the capability, AI Creative Search (49) the outcome and Search
 * Infrastructure (317) the architecture.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Vendor-neutral explanation of semantic search; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 363,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "centered",
      eyebrow: "Resources",
      lede: "How searching by meaning works, why it suits the way people remember creative assets, where exact keywords still do better, and how GetSibu combines the two.",
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 363 }, { kind: "pdf", page: 317 }],
    },
    {
      kind: "definition",
      id: "definition",
      eyebrow: "Definition",
      term: "Semantic search",
      answer: "Semantic search allows users to search by meaning and context rather than relying only on exact keyword matches. It looks for results that are about the same thing as the request, even when they share none of its words.",
      detail: "A keyword index treats “car”, “automobile” and “vehicle” as unrelated strings unless someone has listed them as synonyms. A semantic model has learned from large amounts of text, and often from images, that those words point to one idea, so it can connect a request to content described in different terms, or not described in words at all.",
      sources: [{ kind: "pdf", page: 363 }, EXPLAINS],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Why exact words fail in a creative library",
      body: [
        "Semantic search matches a request to content by meaning. Instead of asking which assets contain these words, it asks which assets are closest to what the person is describing, and ranks the library by that closeness.",
        "Creative libraries are where keyword search struggles most. People remember assets as impressions — a moody product shot, a bright summer campaign, a crowded street at dusk — while the files were named by a camera or tagged in somebody else’s vocabulary. Searches fail in the gap between how an asset is remembered and how it was recorded.",
        [
          "Semantic search narrows that gap rather than closing it, and it works best alongside conventional signals such as filenames, metadata, ",
          { text: "AI-suggested tags", page: 364 },
          " and ",
          { text: "text extracted by OCR", page: 366 },
          ", so a description and an exact term can both lead to the right file.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Meaning rather than exact words", "Embeddings as representations of meaning", "Results ranked by similarity", "Combined with keyword search", "Requests in everyday language"],
      },
      highlight: {
        heading: "In practice",
        body: "A search for “calm workspace, soft daylight” can surface a photograph tagged only “office interior”, because the request and the image sit close together in meaning.",
        tags: ["Search", "Images", "Descriptions"],
      },
      glance: {
        heading: "Semantic search in brief",
        facts: [
          { label: "Area", value: "Search and discovery" },
          { label: "Matches on", value: "Meaning and context" },
          { label: "Often paired with", value: "Keyword search and filters" },
          { label: "In GetSibu", value: "AI Semantic Search", page: 39 },
        ],
        actions: [{ kind: "route", path: "/resources", label: "More in Resources" }]
      },
      sources: [{ kind: "pdf", page: 363 }, { kind: "pdf", page: 364 }, { kind: "pdf", page: 366 }, { kind: "pdf", page: 39 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "keyword-vs-semantic",
      eyebrow: "The difference",
      heading: "Keyword search and semantic search side by side",
      intro: "Neither approach wins in every case, which is why many systems combine them.",
      columns: ["Keyword search", "Semantic search"],
      emphasis: 1,
      rows: [
        ["What it matches", "The exact words in the index", "Content close in meaning to the request"],
        ["Synonyms", "Only those someone has listed", "Related wording understood without a list"],
        ["Content with few words", "Found by filename or text alone", "Reachable if its content was analysed"],
        ["Product codes and names", "Exact and easy to verify", "May drift towards similar terms"],
        ["An unmatched request", "No results", "A ranked list of the nearest items"],
        ["Best when you", "Know exactly what to type", "Know what the asset is like"],
      ],
      sources: [{ kind: "pdf", page: 363 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "how-semantic-search-works",
      eyebrow: "In general",
      heading: "How a semantic query reaches its results",
      intro: "Implementations differ in detail, although the broad sequence is similar.",
      steps: [
        { heading: "Represent the content", body: "As assets are indexed, a model converts their descriptions, extracted text or visual content into embeddings: long lists of numbers that represent meaning.", icon: "database" },
        { heading: "Represent the request", body: "The query passes through a compatible model, so the words someone types land in the same numerical space as the content.", icon: "text" },
        { heading: "Measure closeness", body: "The system compares the request’s embedding with those in the index, using a similarity measure to find the nearest neighbours.", icon: "compass" },
        { heading: "Blend other signals", body: "Similarity scores are often combined with keyword matches, filters and metadata, so an exact product name still counts when it appears.", icon: "layers" },
        { heading: "Rank the results", body: "Assets come back in order of relevance, closest first, rather than as a simple list of matches and non-matches.", icon: "search" },
      ],
      sources: [{ kind: "pdf", page: 363 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "when-it-helps",
      eyebrow: "Considerations",
      heading: "When meaning helps and when exact words win",
      items: [
        {
          heading: "Descriptive, visual requests",
          summary: "Semantic matching is strongest when someone can describe an asset but not name it.",
          icon: "eye",
          body: [
            "Requests about mood, setting, subject or style, such as “rainy street at night” or “minimal flat lay on white”, suit semantic matching because they describe what content is like rather than what it is called.",
          ],
        },
        {
          heading: "Codes, names and references",
          summary: "Identifiers need exact matching, not approximate meaning.",
          icon: "code",
          body: [
            "A campaign code, a product reference or a contract number has no useful “nearby” meaning. Keyword search is more dependable here, and a well-designed hybrid system lets the exact match rank first.",
          ],
        },
        {
          heading: "Negation and precise conditions",
          summary: "Requests such as “no text” or “high resolution only” are hard to express as meaning.",
          icon: "filter",
          body: [
            "Embeddings capture what a request is about, so words like “not” and “without” are often weakly represented. Conditions on format, resolution or date are better handled by filters than by the wording of the query.",
          ],
        },
        {
          heading: "There is always a nearest match",
          summary: "A similarity search returns its closest items even when none of them is relevant.",
          icon: "help",
          body: [
            "Because results are ranked by closeness, a request for something the library does not hold still produces a list. Reading the top results critically, and refining the description, matters more than with keyword search, where no match simply means no results.",
          ],
        },
        {
          heading: "Only what was indexed can be found",
          summary: "A model can compare only the meaning the index captured.",
          icon: "scan",
          body: [
            "If a document’s text was never extracted or an image never analysed, a semantic model has little to work with. Coverage of indexing matters as much as the quality of the model: a strong model over a half-analysed library still misses much of it.",
          ],
        },
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "in-getsibu",
      eyebrow: "In GetSibu",
      heading: "How GetSibu applies semantic search",
      items: [
        {
          heading: "Describe the asset you need",
          body: "People can describe the type of asset they want in natural language, and the request can be interpreted according to available embeddings and AI-generated media information rather than exact keywords alone.",
          icon: "message",
          points: ["Creative concepts as queries", "Visual descriptions as queries"],
          page: 14,
        },
        {
          heading: "Text search with embeddings",
          body: "GetSibu’s search infrastructure combines text search and embedding-based retrieval, so more than one discovery method is available.",
          icon: "server",
          points: ["Exact terms still matter", "Meaning adds reach"],
          page: 317,
        },
        {
          heading: "Search by what people remember",
          body: "Users do not need an exact filename when they remember characteristics of an asset, such as its colour, subject, location or campaign context.",
          icon: "sparkles",
          page: 18,
        },
        {
          heading: "Filters for precise conditions",
          body: "Filters for categories, formats, sources, resolutions and dates can be combined to narrow a large set of results, covering conditions that a description expresses poorly.",
          icon: "filter",
          page: 19,
        },
      ],
      sources: [{ kind: "pdf", page: 14 }, { kind: "pdf", page: 39 }, { kind: "pdf", page: 317 }, { kind: "pdf", page: 18 }, { kind: "pdf", page: 19 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about semantic search",
      items: [
        {
          question: "Does semantic search work across languages?",
          answer: "It can, when the model behind it was trained on several languages: a request written in one language may then sit close to content described in another. Coverage differs between models and between languages, so test with the languages your team actually works in.",
        },
        {
          question: "How is semantic search different from fuzzy keyword matching?",
          answer: "Fuzzy matching tolerates typing errors and spelling variations, but it still compares letters. Semantic search compares meaning, so it can connect “sofa” with “couch”, a pair that no amount of spelling tolerance would ever join.",
        },
        {
          question: "Why do semantic search results change when a request is reworded?",
          answer: "Each wording produces its own embedding. Adding a detail about setting or mood moves the request to a different point among the meanings the model knows, so the nearest items change with it; a small rewording shifts results a little, a new emphasis can shift them a lot.",
        },
        {
          question: "Can semantic search find assets that have no tags?",
          answer: ["It can reach assets whose meaning was captured during indexing, from visual content, extracted text or other information. In GetSibu, ", { text: "AI asset discovery", page: 12 }, " helps people find files based on what appears inside them rather than depending entirely on manually entered metadata."],
        },
      ],
      sources: [{ kind: "pdf", page: 12 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on searching by meaning",
      variant: "compact",
      pages: [39, 14, 18, 317, 364, 366],
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
