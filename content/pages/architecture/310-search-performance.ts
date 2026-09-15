/**
 * 310 · Search Performance — /architecture/search-performance
 *
 * FRAMED (claim: sub-second-search). The PDF paragraph for this page is withheld and never paraphrased; no speed
 * figures appear. Angle (clusters: search-speed, performance): what search performance means in a creative library
 * beyond speed (responsiveness, relevance, freshness, consistency at scale), the library factors that raise or lower
 * it, and what to include when testing it. GetSibu statements carry no speed claims and are limited to
 * indexing (21), search infrastructure (317), processing (145, 311) and neighbouring publishable facts. Fast Creative Search (307) owns
 * where latency comes from; Fast Asset Discovery (20, framed) owns the whole effort of finding a file.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of search performance in creative libraries in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 310,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Architecture & Performance",
      lede: "Understand what good search performance means in a creative library, from responsiveness and relevance to how soon new material can be found, which factors shape it, and how to judge it against your own collection.",
      visual: { diagram: "architecture-stack", focus: "search" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 21 }, { kind: "pdf", page: 145 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "More than how quickly results appear",
      body: [
        "Search performance describes how well a search system does its job under real conditions. Speed is one dimension of it, but a fast answer that misses the right asset, overlooks yesterday’s upload or slows as the collection grows is not performing well.",
        "Creative libraries make good search harder to achieve than a store of text documents does. Much of what people look for is visual and was never written down, collections hold many near-identical files, material arrives in bursts, and one word can mean different things to a designer and to a producer. Each of those pressures pulls on a different aspect of performance.",
        [
          "On the design side, ",
          { text: "creative asset indexing", page: 21 },
          " prepares an indexed representation of the library as assets enter it, and the ",
          { text: "search infrastructure", page: 317 },
          " combines text search with embedding-based retrieval to support more than one way of looking.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Responsiveness", "Relevance of what comes back", "Freshness after upload", "Consistency as the library grows", "Library quality shapes results", "Judged against your own collection"],
      },
      highlight: {
        heading: "In practice",
        body: "A query that answers promptly but ranks a superseded logo above the current one has a performance problem, even though nobody would describe it as slow.",
        tags: ["Brand teams", "Library managers", "Search"],
      },
      glance: {
        heading: "Search performance in brief",
        facts: [
          { label: "Area", value: "Architecture & Performance" },
          { label: "Dimensions", value: "Responsiveness, relevance, freshness, consistency" },
          { label: "Retrieval", value: "Search Infrastructure", page: 317 },
          { label: "Readiness", value: "Media Processing Status", page: 145 },
        ],
        actions: [{ kind: "route", path: "/architecture", label: "More in Architecture & Performance" }]
      },
      sources: [{ kind: "pdf", page: 21 }, { kind: "pdf", page: 317 }, { kind: "pdf", page: 145 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "qualities",
      eyebrow: "What it covers",
      heading: "Four qualities that together make search perform well",
      items: [
        {
          heading: "Responsiveness",
          body: "How long a query takes to return results, including the time needed to show enough of each result to recognise it. It is the quality people notice first, and seldom the only one that matters.",
          icon: "zap",
          points: ["Time from query to results", "Previews in the list count too"],
        },
        {
          heading: "Relevance",
          body: "Whether the right assets come back, and whether they appear near the top. A system can be quick and still bury the file someone needs beneath a list of near-misses.",
          icon: "search",
          points: ["The right asset found", "Ranked where people will notice it"],
        },
        {
          heading: "Freshness",
          body: "How soon a newly added asset can be found. Because an index is built from the library, there is always some gap between a file arriving and a query being able to match it.",
          icon: "clock",
          points: ["Time from arrival to findable", "Arrival and findability are different moments"],
        },
        {
          heading: "Consistency at scale",
          body: "Whether responsiveness and relevance hold as the collection, the number of people looking and the volume of integrations grow, instead of degrading quietly over months.",
          icon: "trend",
          points: ["Behaviour as volume rises", "Busy periods as well as quiet ones"],
        },
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "accordion",
      id: "factors",
      eyebrow: "What shapes it",
      heading: "Factors in a creative library that raise or lower search performance",
      items: [
        {
          heading: "How much assets say about themselves",
          summary: "A query can only match information that exists.",
          icon: "tag",
          body: [
            "A file with a meaningless name and no metadata gives any search engine very little to work with. Richer descriptions widen the ways an asset can be found.",
            [
              { text: "Metadata such as EXIF, XMP, file paths, creators and custom keywords", page: 22 },
              " can become part of the asset record. Beyond that, GetSibu makes assets findable through filenames, metadata, OCR, AI-generated tags, comments and semantic information.",
            ],
          ],
        },
        {
          heading: "Words hidden inside the content",
          summary: "Text on slides, packaging and scans is invisible to a filename search.",
          icon: "scan",
          body: [
            "Presentations, scanned documents and screenshots often hold exactly the words people remember, yet none of those words appears in the file name.",
            [{ text: "OCR-powered asset search", page: 15 }, " extracts text from images, PDFs, presentations and screenshots so that the content becomes searchable."],
          ],
        },
        {
          heading: "A shared vocabulary",
          summary: "When teams use different words for the same thing, relevance suffers.",
          icon: "text",
          body: [
            "One producer says “cutdown”, another “short edit”, a third “social version”. Unless the vocabulary connects those terms, a query for one of them misses assets described with the others.",
            ["A structured ", { text: "asset taxonomy", page: 375 }, " defines how digital content is grouped and labelled, which gives queries consistent terms to match against."],
          ],
        },
        {
          heading: "Near-duplicates and outdated material",
          summary: "Every extra copy or superseded file is one more result to rule out.",
          icon: "copy",
          body: [
            "Relevance is about more than finding the right asset; it is also about not surrounding it with the wrong ones. Re-exports, renamed copies and old campaign material push current work further down a list.",
            [{ text: "Asset archiving", page: 108 }, " retains historical content without letting it interfere with everyday discovery, and ", { text: "AI duplicate detection", page: 40 }, " identifies identical files and visually equivalent copies."],
          ],
        },
        {
          heading: "Processing that has not finished",
          summary: "A new asset may have uploaded without yet being ready to find.",
          icon: "refresh",
          body: [
            "Freshness depends on how quickly new material moves from arrival into the index. During a large import or a busy delivery day, that gap is when people most often conclude that a query has missed something.",
            ["Processing status separates an asset that has uploaded successfully from one that is fully indexed and searchable, and ", { text: "background processing", page: 311 }, " allows assets to be indexed without anyone performing metadata or AI processing by hand."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 22 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 15 }, { kind: "pdf", page: 375 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 40 }, { kind: "pdf", page: 145 }, { kind: "pdf", page: 311 }, EXPLAINS],
    },
    {
      kind: "checklist",
      id: "what-to-test",
      eyebrow: "Evaluating",
      heading: "What to include when testing search performance",
      variant: "chips",
      items: [
        "Queries your team really runs",
        "Exact names and codes",
        "Descriptions of what an asset shows",
        "Filters combined step by step",
        "Assets added moments earlier",
        "Near-duplicate and superseded files",
        "A library of realistic size",
        "Queries from remote locations",
        "Busy periods, not only quiet ones",
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about search performance",
      items: [
        {
          question: "Who should own search performance in a creative organisation?",
          answer: "It is shared. Platform design and infrastructure decide responsiveness and consistency, while library managers influence relevance through metadata, vocabulary and housekeeping. Evaluations work best when both sides are in the room.",
        },
        {
          question: "How can tag analytics help improve search performance over time?",
          answer: [
            "They show where demand and description meet. ",
            { text: "Most-searched tags", page: 193 },
            " provide insight into what people frequently look for, and comparing those searches with how often each tag is applied shows where descriptions are thin.",
          ],
        },
        {
          question: "Does semantic search improve the relevance of creative search results?",
          answer: [
            "It can for requests described in natural language, because ",
            { text: "semantic search", page: 39 },
            " interprets meaning rather than relying exclusively on exact words. It complements exact matching, which remains the most direct route to a known name or code.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 193 }, { kind: "pdf", page: 186 }, { kind: "pdf", page: 39 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on finding the right asset reliably",
      variant: "compact",
      pages: [307, 21, 145, 311, 193, 20],
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
