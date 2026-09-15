/**
 * 20 · Fast Asset Discovery — /features/fast-asset-discovery
 *
 * FRAMED (claim: sub-second-search). The PDF paragraph for this page is withheld and never paraphrased; no speed
 * figures appear. Angle (cluster: search-speed, primary): the discovery outcome — what shortens the path from
 * needing an asset to using the right one: preparation on arrival, several routes to a match, filters, previews
 * and searches kept for reuse. Fast Creative Search (307) owns low-latency search as architecture, Search
 * Performance (310, framed) is not paraphrased, Asset Discovery ROI (349) owns the business value.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of where time goes when teams look for files; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 20,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Search & Discovery",
      lede: "What makes finding a creative asset quick in practice: files prepared for search as they arrive, searches that start from what people remember, filters that shorten the list, previews that confirm a choice and searches nobody has to rebuild.",
      visual: { diagram: "search-signals" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 21 }, { kind: "pdf", page: 393 }, { kind: "pdf", page: 19 }, { kind: "pdf", page: 146 }, { kind: "pdf", page: 17 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Where the time goes when someone looks for a file",
      body: [
        "Fast asset discovery is about the whole effort of finding a file, not only how long a search takes to respond. It covers how quickly someone can form a useful query, reach a short list, confirm the right asset and do the same again next time.",
        "In a disorganised library, much of that effort has nothing to do with waiting for software. It goes on guessing folder names, asking colleagues, downloading files just to check them, recreating assets that could not be found and rebuilding searches somebody ran last week.",
        [
          "Response matters too: GetSibu is designed around ",
          { text: "low-latency search", page: 307 },
          " so that users can quickly retrieve assets from large libraries. The rest of the difference comes from preparation before anyone searches, from how a search can begin and from not repeating work that has already been done.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Assets prepared for search on arrival", "Searching by what people remember", "Shorter lists through filters", "Previews instead of downloads", "Searches kept for next time", "Low-latency search by design"],
      },
      highlight: {
        heading: "In practice",
        body: "For a creative team, finding an asset takes as long as the gap between needing it and working with the right file, and most of that gap is not the search itself.",
        tags: ["Preparation", "Previews", "Reuse"],
      },
      glance: {
        heading: "Fast discovery in brief",
        facts: [
          { label: "Area", value: "Search & Discovery" },
          { label: "Depends on", value: "Preparation, routes to a match, previews" },
          { label: "Starts with", value: "Assets indexed as they arrive" },
          { label: "Business value", value: "Asset Discovery ROI", page: 349 },
        ],
        actions: [{ kind: "route", path: "/features/search-and-discovery", label: "More in Search & Discovery" }]
      },
      sources: [{ kind: "pdf", page: 307 }, { kind: "pdf", page: 21 }, { kind: "pdf", page: 349 }, EXPLAINS],
    },
    {
      kind: "layers",
      id: "what-shortens-the-path",
      eyebrow: "From arrival to reuse",
      heading: "Five things that shorten the path to the right asset",
      layers: [
        { label: "Prepared on arrival", body: "As assets enter GetSibu, available metadata is processed and they are prepared for search and organisation, and background processing allows them to be indexed without anyone performing metadata or AI processing by hand.", page: 21 },
        { label: "Starting from memory", body: "Creative professionals should not have to remember complicated folder structures to find important files; natural language search lets them describe an asset the way they recall it.", page: 18 },
        { label: "Shorter lists", body: "Filters for category, format, source, resolution and date cut a broad set of results down before anyone starts looking through it.", page: 19 },
        { label: "Checked without downloading", body: "Thumbnails give a visual preview of each result, so an asset can be judged without downloading the original file.", page: 146 },
        { label: "Nothing rebuilt twice", body: "Saved searches make recurring searches easier to repeat, and a URL passes them to the colleagues who need them.", page: 17 },
      ],
      sources: [{ kind: "pdf", page: 21 }, { kind: "pdf", page: 311 }, { kind: "pdf", page: 393 }, { kind: "pdf", page: 18 }, { kind: "pdf", page: 19 }, { kind: "pdf", page: 146 }, { kind: "pdf", page: 17 }, { kind: "pdf", page: 30 }],
    },
    {
      kind: "tabs",
      id: "by-team",
      eyebrow: "Who it helps",
      heading: "What quicker discovery changes for different teams",
      tabs: [
        {
          label: "Marketing",
          heading: "Urgent requests answered sooner",
          icon: "megaphone",
          body: [
            "Marketing requests tend to be urgent and repetitive: the product image for a partner, the current logo, last year’s launch film for reference.",
            ["Marketing teams can ", { text: "reduce the time needed to locate approved campaign content", page: 352 }, " and the creative material that supports it, which can shorten the gap between a request and a reply."],
          ],
          points: ["Urgent requests answered from the library", "Approved material easier to reach"],
        },
        {
          label: "Production",
          heading: "Less time spent working through footage",
          icon: "film",
          body: [
            "Production teams gather far more footage than any edit uses, and it tends to be spread across drives and delivery folders.",
            ["Production teams can ", { text: "cut the time spent reviewing large amounts of footage", page: 353 }, " and searching through disconnected storage, which can leave more of the schedule for the edit itself."],
          ],
          points: ["Less footage to review by eye", "Fewer disconnected places to search"],
        },
        {
          label: "Freelancers",
          heading: "Reusable work from a personal library",
          icon: "user",
          body: [
            "A freelancer’s library doubles as a memory of past projects: templates, graphic elements, earlier edits and reference material that could be useful again on the next job.",
            ["GetSibu can help freelancers ", { text: "organise personal creative libraries and quickly locate reusable assets", page: 226 }, ", so earlier work is a resource rather than an archive nobody opens."],
          ],
          points: ["Earlier work easy to reuse", "No colleague to ask, so search matters more"],
        },
        {
          label: "Creative leads",
          heading: "Time handed back to the work itself",
          icon: "trend",
          body: [
            "For creative leaders, the value of quicker discovery is rarely the search. It is the time professionals get back for the work they were brought in to do.",
            "Faster discovery of assets can help creative professionals give more of their time to creating and less to working through folders.",
          ],
          points: ["Less effort spent looking for files", "More attention on creative output"],
        },
      ],
      sources: [{ kind: "pdf", page: 352 }, { kind: "pdf", page: 353 }, { kind: "pdf", page: 226 }, { kind: "pdf", page: 349 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "staying-quick",
      eyebrow: "Considerations",
      heading: "Keeping discovery quick as a library grows",
      items: [
        {
          heading: "A vocabulary that scales",
          summary: "Inconsistent tags slow every search, and the effect grows with the library.",
          icon: "tag",
          body: [
            "When one team writes “lifestyle” and another writes “in use”, every search has to guess. The larger the library, the more assets fall between the two terms.",
            ["", { text: "Hierarchical tags, synonyms, colours and inheritance", page: 8 }, " make it possible to build an organisation system that stays useful even as a library reaches thousands or millions of assets."],
          ],
        },
        {
          heading: "Old material out of the everyday path",
          summary: "Historic content does not have to compete with current work in results.",
          icon: "archive",
          body: [
            ["", { text: "Archiving", page: 108 }, " retains historical content without letting old material interfere with everyday asset discovery, so last decade’s campaigns stay available without crowding this season’s."],
          ],
        },
        {
          heading: "Fewer copies to sort through",
          summary: "Every duplicate is one more result someone has to rule out.",
          icon: "copy",
          body: [
            ["Copies accumulate through exports, re-uploads and files shared by email and brought back. ", { text: "Duplicate asset management", page: 112 }, " helps identify unnecessary copies, which can keep result lists shorter and choices clearer."],
          ],
        },
        {
          heading: "A direct route to approved content",
          summary: "People who only need finished material should not have to wade through drafts.",
          icon: "approval",
          body: [
            ["Teams can create ", { text: "approved-only views", page: 103 }, ", giving colleagues access to content that has completed the required review process without sifting it from work in progress."],
          ],
        },
        {
          heading: "Learning what people look for",
          summary: "Search behaviour shows where the library needs attention.",
          icon: "chart",
          body: [
            ["", { text: "Most-searched tags", page: 193 }, " provide insight into what users are frequently looking for. A tag searched often but applied to few assets points to material that is missing or poorly described."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 8 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 112 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 193 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about fast asset discovery",
      items: [
        {
          question: "Is fast asset discovery only a matter of search speed?",
          answer: "No. A responsive search helps, but the time it takes to reach the right asset also depends on how well files are described, how easily results can be narrowed and checked, and whether searches have to be rebuilt.",
        },
        {
          question: "Why can finding assets slow down as a creative library grows?",
          answer: "More assets mean more candidates for every query, more near-duplicates and more outdated material. Without consistent tags, archiving and duplicate management, people spend longer sorting results even when the search itself responds promptly.",
        },
        {
          question: "How do previews make asset discovery quicker?",
          answer: ["They let people confirm a result without downloading it. ", { text: "Streaming media previews", page: 147 }, " help users inspect large media files without waiting for complete downloads."],
        },
        {
          question: "Where does the time saved by faster asset discovery go?",
          answer: "Back into creative work. Time not spent searching, asking around or recreating lost files is available for producing the work itself.",
        },
      ],
      sources: [{ kind: "pdf", page: 307 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 112 }, { kind: "pdf", page: 147 }, { kind: "pdf", page: 349 }, { kind: "pdf", page: 348 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on reaching the right asset sooner",
      variant: "compact",
      pages: [307, 21, 311, 30, 349],
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
