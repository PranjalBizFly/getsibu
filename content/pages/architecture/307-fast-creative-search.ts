/**
 * 307 · Fast Creative Search — /architecture/fast-creative-search
 *
 * Angle (clusters: search-speed, performance): low-latency search as a design goal of the infrastructure — why
 * latency matters in iterative creative searching, where the time in one query goes, the architectural choices
 * that keep it low, and how it shows up in different kinds of search. Fast Asset Discovery (20, framed) owns the
 * whole effort of finding a file; Search Performance (310, framed) owns the wider qualities of search (relevance,
 * freshness, consistency); Search Infrastructure (317) owns the retrieval methods. No figures or speed claims.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of search latency and how search systems are built in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 307,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Architecture & Performance",
      lede: "See why GetSibu treats low latency as a design goal for search, where the time in a single query goes, and which architectural choices help keep retrieval quick when a creative library is large.",
      visual: { diagram: "architecture-stack", focus: "search" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 307 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Search built to answer while the thought is still fresh",
      body: [
        "GetSibu is designed around low-latency search so users can quickly retrieve assets from large libraries. Latency here means the delay between asking and seeing results, and the aim is to keep that delay small even when there is a great deal to search.",
        "Latency matters because creative searching is iterative. Someone tries a term, glances at what comes back, adds a filter, swaps the keyword for a description and tries again. Every round trip is a pause in that loop: when pauses are long, people make fewer attempts, settle for a weaker match or go back to asking a colleague; when they are short, exploring the library costs almost nothing.",
        [
          "Several parts of the architecture are relevant. ",
          { text: "Creative asset indexing", page: 21 },
          " prepares an indexed representation of the library that can support faster discovery, and the ",
          { text: "search infrastructure", page: 317 },
          " combines text search with embedding-based retrieval.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Latency: from query to results", "Searching as an iterative loop", "Prepared index instead of file scans", "Text and embedding-based retrieval", "Results light enough to scan", "Designed for large libraries"],
      },
      highlight: {
        heading: "In practice",
        body: "A designer looking for a product shot tries three phrasings in quick succession. When each answer comes back promptly, the third attempt feels like part of the same thought rather than a fresh start.",
        tags: ["Designers", "Search", "Large libraries"],
      },
      glance: {
        heading: "Fast search in brief",
        facts: [
          { label: "Area", value: "Architecture & Performance" },
          { label: "Design goal", value: "Low-latency search" },
          { label: "Retrieval", value: "Text search and embeddings" },
          { label: "Discovery outcome", value: "Fast Asset Discovery", page: 20 },
        ],
        actions: [{ kind: "route", path: "/architecture", label: "More in Architecture & Performance" }]
      },
      sources: [{ kind: "pdf", page: 307 }, { kind: "pdf", page: 21 }, { kind: "pdf", page: 317 }, EXPLAINS],
    },
    {
      kind: "layers",
      id: "anatomy",
      eyebrow: "Anatomy of a query",
      heading: "Where the time goes in a single search",
      intro: "Every search system spends its time in broadly the same places; design decides how much each one costs.",
      layers: [
        { label: "Reaching the platform", body: "The query travels from the client to the service that answers it. Distance and connection quality add delay before any searching has started." },
        { label: "Understanding the query", body: "The request is put into the forms each retrieval method needs, so that exact words and a written description can both be matched." },
        { label: "Finding candidates", body: "Structures prepared in advance are consulted instead of the files themselves. How text search and embedding-based retrieval each find their candidates belongs to the search infrastructure.", page: 317 },
        { label: "Combining and ranking", body: "Candidates from different methods, together with any filters, are merged into one ordered list with the most relevant results first." },
        { label: "Returning something recognisable", body: "Results travel back with enough information to recognise each asset, which for creative work usually means a small visual preview beside the name." },
      ],
      sources: [{ kind: "pdf", page: 307 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "design-choices",
      eyebrow: "Design choices",
      heading: "Choices that keep search latency low as a library grows",
      items: [
        {
          heading: "Prepare at arrival, not at query time",
          summary: "Work done when an asset enters the library is work no search has to wait for.",
          icon: "database",
          body: [
            "A system that read files, extracted details or ran analysis at the moment someone searched would make every query wait for that work. Doing it once, as each asset arrives, moves the cost to a time when nobody is waiting for results.",
            ["In GetSibu, ", { text: "background processing", page: 311 }, " allows assets to be indexed without anyone manually performing metadata or AI processing."],
          ],
        },
        {
          heading: "Give search a layer of its own",
          summary: "Finding and ranking matches is a workload unlike storing files or delivering media.",
          icon: "layers",
          body: [
            "Looking up candidates and ranking them is memory-hungry, compute-heavy work with its own pattern of demand. Keeping it in a dedicated layer means it can be designed and tuned for that workload rather than for storage or delivery.",
            "Search infrastructure is one of the five layers GetSibu is built around, distinct from storage and from the edge services that deliver media.",
          ],
        },
        {
          heading: "Measure latency where people feel it",
          summary: "A typical response time can hide the searches that feel slow.",
          icon: "gauge",
          body: [
            "Latency is best judged by its slower cases as well as its typical ones, because a few sluggish searches shape how people feel about the whole system.",
            "An average that looks healthy can conceal the handful of queries, often the broadest or the most complex, that people remember.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 311 }, { kind: "pdf", page: 301 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "kinds-of-search",
      eyebrow: "Kinds of search",
      heading: "How low latency shows up in different kinds of search",
      tabs: [
        {
          label: "Exact terms",
          heading: "Checking names, codes and phrases",
          icon: "text",
          body: [
            "Many searches are precise: a campaign code, a product name, a word printed on a slide. People often try several spellings or variants, and prompt answers make that trial and error painless.",
            ["GetSibu makes assets searchable through ", { text: "filenames, metadata, OCR, AI-generated tags, comments and semantic information", page: 11 }, ", so an exact term has more than one place where it can match."],
          ],
          points: ["Variants tried in quick succession", "Several kinds of information to match"],
        },
        {
          label: "Descriptions",
          heading: "Describing what an asset shows",
          icon: "sparkles",
          body: [
            "A request such as “rain on a shopfront window at night” names no file and no tag. Matching by meaning compares the request with representations of a great many assets, work that has to be organised carefully to stay quick at scale.",
            ["", { text: "Semantic creative search", page: 14 }, " lets people describe the asset they want in natural language, interpreted according to available embeddings and AI-generated media information."],
          ],
          points: ["Requests without a filename or tag", "Meaning compared across the library"],
        },
        {
          label: "Narrowing",
          heading: "Refining a long list one decision at a time",
          icon: "filter",
          body: [
            "Broad searches return long lists, and people narrow them step by step: only video, only high resolution, only this year. Each refinement is another round trip, so its speed decides whether narrowing feels natural.",
            [{ text: "Advanced media filters", page: 19 }, " narrow results by category, format, source, resolution and date, and can be combined to reduce a large library progressively."],
          ],
          points: ["One refinement at a time", "Filters combined progressively"],
        },
        {
          label: "Applications",
          heading: "Search called by other software",
          icon: "api",
          body: [
            "When an internal tool or website runs searches on behalf of its users, query volume multiplies, and a view that makes several search calls adds their delays together.",
            ["Applications can ", { text: "integrate asset search into custom interfaces and workflows", page: 263 }, ", which makes latency a concern for developers as well as for people searching directly."],
          ],
          points: ["Volume multiplied by integrations", "Delays that add up across calls"],
        },
      ],
      sources: [{ kind: "pdf", page: 11 }, { kind: "pdf", page: 14 }, { kind: "pdf", page: 19 }, { kind: "pdf", page: 263 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about fast creative search",
      items: [
        {
          question: "Is fast creative search the same as fast asset discovery?",
          answer: [
            "Not quite. Fast creative search is about the search itself being designed for low latency. ",
            { text: "Fast Asset Discovery", page: 20 },
            " looks at the whole effort of reaching the right asset, including how well files are described and how easily results can be checked.",
          ],
        },
        {
          question: "Why can a search feel slow even when results arrive promptly?",
          answer: "Because people judge a search by the moment they can recognise what came back. If previews in the list arrive late, or several refinements are needed before the right asset appears, the whole search feels slow however quickly the first answer returned.",
        },
        {
          question: "Does low-latency search mean a new upload can be found straight away?",
          answer: ["Not by itself. Latency concerns how quickly a query is answered, while whether a new asset can be matched depends on preparation: ", { text: "processing status", page: 145 }, " helps teams tell an asset that has uploaded successfully from one that is fully indexed and searchable."],
        },
      ],
      sources: [{ kind: "pdf", page: 20 }, { kind: "pdf", page: 145 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on quick retrieval from large libraries",
      variant: "compact",
      pages: [21, 317, 311, 145, 263, 20],
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
