/**
 * 39 · AI Semantic Search — /features/ai-semantic-search
 *
 * Angle (cluster: semantic-search, primary): the AI capability — interpreting meaning rather than exact words, so
 * creative concepts and visual descriptions can be searched, and how it complements literal signals. Semantic
 * Creative Search (14) owns the search experience and its example, Natural Language Asset Search (18) how people
 * remember, AI Creative Search (49) the outcome, Search Infrastructure (317) the plumbing, 363 the explainer.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of meaning-based and keyword search in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 39,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "AI",
      lede: "What it means for GetSibu’s search to interpret meaning instead of matching exact words, which requests benefit, and when a literal search is still the better tool.",
      visual: { diagram: "search-signals", focus: "semantic" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 39 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Search that works from what a request means",
      body: [
        "Semantic search in GetSibu interprets the meaning of a request rather than relying exclusively on the exact words typed. That makes it possible to search for creative concepts and visual descriptions, not only for terms that happen to sit in a filename or a tag.",
        "Keyword search fails in a predictable way: the searcher’s words are not the library’s words. Someone types seaside while the tags say beach and coast; someone wants celebration imagery while the files are tagged party, confetti and toast. Every synonym nobody thought to add is a gap, and in a large creative library those gaps add up to assets that exist but never appear.",
        [
          "Meaning-based retrieval is designed to narrow that gap. In general, it compares what a request is about with what an asset is about, rather than checking whether they share words. In GetSibu it is one signal among several, because ",
          { text: "creative asset search", page: 11 },
          " also draws on filenames, metadata, OCR, AI-generated tags and comments.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Meaning rather than exact words", "Creative concepts as queries", "Visual descriptions as queries", "One signal among several", "Literal searches still matter"],
      },
      highlight: {
        heading: "In practice",
        body: "A planner looking for imagery about “new beginnings” is not hoping to find those two words in a filename. A search that interprets meaning gives that request somewhere to go.",
        tags: ["Concepts", "Descriptions", "Search"],
      },
      glance: {
        heading: "Semantic search in brief",
        facts: [
          { label: "Area", value: "AI" },
          { label: "Interprets", value: "Meaning, not only exact words" },
          { label: "In the search experience", value: "Semantic Creative Search", page: 14 },
          { label: "Explained in", value: "What Is Semantic Search?", page: 363 },
        ],
        actions: [{ kind: "route", path: "/features/ai", label: "More in AI" }]
      },
      sources: [{ kind: "pdf", page: 39 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 14 }, { kind: "pdf", page: 363 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "comparison",
      eyebrow: "Side by side",
      heading: "Exact-word matching compared with meaning-based search",
      columns: ["Exact words only", "With semantic search"],
      emphasis: 1,
      rows: [
        ["What is compared", "Typed characters against stored words", "The meaning of a request"],
        ["An untagged synonym", "Usually missed", "Can still be interpreted"],
        ["Abstract ideas", "Found only if someone tagged the idea", "Creative concepts can be searched"],
        ["Describing a look", "Needs every keyword stored", "Visual descriptions can be searched"],
        ["Codes and references", "Precise and dependable", "Literal signals remain searchable"],
      ],
      sources: [{ kind: "pdf", page: 39 }, { kind: "pdf", page: 11 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "query-types",
      eyebrow: "Kinds of request",
      heading: "Three kinds of query and what meaning does for each",
      tabs: [
        {
          label: "Concepts",
          heading: "Search for an idea, not an inventory",
          icon: "sparkles",
          body: [
            "Concept queries name something no camera records directly: freedom, craftsmanship, sustainability, togetherness. Assets rarely carry those words, because they describe an interpretation rather than content.",
            ["Searching by meaning gives such queries a route to material. ", { text: "AI creative search", page: 49 }, " shows what that looks like in creative work: describe the asset, then assess results drawn from semantic and visual information."],
          ],
          points: ["Abstract briefs become searchable", "Helpful early in a creative process"],
        },
        {
          label: "Descriptions",
          heading: "Describe the picture you have in mind",
          icon: "image",
          body: [
            "Description queries read like a line from a brief: a bicycle leaning on a wet railing at night, breakfast laid out on marble. Exact matching would need every one of those words stored against the asset.",
            ["People tend to remember assets by their characteristics rather than their names, which is the premise of ", { text: "natural language asset search", page: 18 }, "."],
          ],
          points: ["A sentence instead of a keyword", "No need to guess the tags used"],
        },
        {
          label: "Exact references",
          heading: "Know when meaning is the wrong tool",
          icon: "text",
          body: [
            "Some searches must be literal. A product code, a campaign reference or a quoted clause should match exactly, and a result that is merely close in meaning is a wrong result.",
            ["For those, rely on what is stored word for word: ", { text: "OCR-powered asset search", page: 15 }, " finds files by the text inside them, and ", { text: "asset metadata search", page: 23 }, " covers what is recorded about them."],
          ],
          points: ["Codes and references kept literal", "Quoted text found through extraction"],
        },
      ],
      sources: [{ kind: "pdf", page: 49 }, { kind: "pdf", page: 18 }, { kind: "pdf", page: 15 }, { kind: "pdf", page: 23 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "better-results",
      eyebrow: "Considerations",
      heading: "Getting useful results from meaning-based search",
      items: [
        {
          heading: "Describe rather than abbreviate",
          summary: "A fuller description leaves less to guess.",
          icon: "message",
          body: [
            "A single word such as summer can stand for a season, a mood or a campaign name. A few extra words about what should be seen or felt tend to steer the interpretation towards what you have in mind.",
          ],
        },
        {
          heading: "Closest is not the same as correct",
          summary: "Meaning-based results are interpretations, so treat them as candidates.",
          icon: "eye",
          body: [
            "Retrieval by meaning surfaces assets judged similar to the request, and similarity is a judgement. Preview the first results, and rephrase if the interpretation has drifted from what you meant.",
          ],
        },
        {
          heading: "Interpretation needs information to work with",
          summary: "An asset still being processed has less for a search to draw on.",
          icon: "clock",
          body: [
            ["Meaning-based search works from what is known about each asset. New material may not be ready yet, and ", { text: "media processing status", page: 145 }, " shows when an asset is fully indexed and searchable rather than merely uploaded."],
          ],
        },
        {
          heading: "Add the facts a description leaves open",
          summary: "A description says what an asset shows, rarely the format or date a job needs.",
          icon: "filter",
          body: [
            ["Practical constraints are better handled explicitly. ", { text: "Advanced media filters", page: 19 }, " for category, format, source, resolution and date can be combined to reduce a large set of assets progressively to a relevant one."],
          ],
        },
        {
          heading: "Organisation still matters",
          summary: "Meaning-based search complements a good taxonomy rather than replacing it.",
          icon: "tag",
          body: [
            ["Tags remain one of the signals behind search, so a tidy vocabulary still pays off. ", { text: "Most searched tags", page: 193 }, " provide insight into what users frequently look for, which is a useful prompt when that vocabulary needs attention."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 145 }, { kind: "pdf", page: 19 }, { kind: "pdf", page: 193 }, { kind: "pdf", page: 11 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about AI semantic search",
      items: [
        {
          question: "How does GetSibu interpret the meaning of a search request?",
          answer: ["A request can be interpreted according to available embeddings and AI-generated media information, and GetSibu’s ", { text: "search infrastructure", page: 317 }, " combines text search with embedding-based retrieval to support more than one discovery method."],
        },
        {
          question: "What is an embedding, in general terms?",
          answer: "An embedding represents what a piece of content or a request is about as a set of numerical values, arranged so that things with similar meanings sit close together. Comparing those values lets a search find related material even when the words differ.",
        },
        {
          question: "Does AI semantic search always understand what I mean?",
          answer: "No, and it is not meant to be the only route. Any interpretation can drift from what the searcher had in mind, so rephrasing a request is part of using it well, and the literal signals search draws on remain available alongside it.",
        },
      ],
      sources: [{ kind: "pdf", page: 39 }, { kind: "pdf", page: 14 }, { kind: "pdf", page: 317 }, { kind: "pdf", page: 11 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on searching by meaning",
      variant: "compact",
      pages: [14, 363, 49, 18, 317, 15],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the semantic search cluster." }],
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
