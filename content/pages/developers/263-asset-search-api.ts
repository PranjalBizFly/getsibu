/**
 * 263 · Asset Search API — /developers/asset-search-api
 *
 * Angle (cluster api-endpoints): asset search built into custom interfaces and workflows — search for people inside
 * another tool, search that software runs for itself, and how to design either. No query syntax, endpoints or claims
 * about which library signals an integration can reach.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of embedded search design in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 263,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "API & Developers",
      lede: "What it takes to integrate GetSibu asset search into custom interfaces and automated workflows, and how to design a search integration that the people and systems using it can rely on.",
      visual: { diagram: "api-flow", focus: "search" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 263 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Finding assets at the point where the need arises",
      body: [
        "Applications can integrate asset search into custom interfaces and workflows. Looking for an asset can then happen inside a planning tool, a publishing system or a process that runs with nobody present, rather than always beginning with a visit to the library.",
        "People seldom look for an asset for its own sake. A web editor wants an image for the article in front of them; a producer wants last season’s cut to brief an editor. Sending them off to a separate application breaks their concentration and invites the familiar shortcut of reusing whatever file is already on their desktop.",
        [
          "Inside the library, ",
          { text: "creative asset search", page: 11 },
          " draws on filenames, metadata, OCR, AI-generated tags, comments and semantic information. Which of those an integration can use, and in what way, is something to confirm in ",
          { text: "API documentation", page: 273 },
          " rather than assume.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Search inside custom interfaces", "Search inside automated workflows", "Results shown in another tool", "Queries shaped by the task", "Empty results planned for"],
      },
      highlight: {
        heading: "In practice",
        body: "A publisher’s article editor offers library search beside the text being written, so the writer picks an archive image without leaving the story.",
        tags: ["Publishing", "Editors", "Developers"],
      },
      glance: {
        heading: "Search by API in brief",
        facts: [
          { label: "Area", value: "API & Developers" },
          { label: "Brings search into", value: "Custom interfaces and workflows" },
          { label: "In the library", value: "Creative Asset Search", page: 11 },
          { label: "Part of", value: "GetSibu API", page: 261 },
        ],
        actions: [{ kind: "route", path: "/developers", label: "More in Developers" }]
      },
      sources: [{ kind: "pdf", page: 263 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 273 }, { kind: "pdf", page: 261 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "who-searches",
      eyebrow: "Two kinds of searcher",
      heading: "Search for people and search for processes",
      tabs: [
        {
          label: "Custom interfaces",
          heading: "A search box where the work already happens",
          icon: "search",
          body: [
            "In an interface, a person types or chooses what they want and then judges the results. The integration’s job is to fit the task in hand: an e-commerce editor looking for product imagery thinks in product names, not in the library’s folders.",
            "An embedded search should do less than the library, not more. Its value lies in answering the one question the host application is built around.",
          ],
          points: ["A person judges the results", "Fitted to the task in hand"],
        },
        {
          label: "Workflows",
          heading: "Searches that software runs for itself",
          icon: "workflow",
          body: [
            "In a workflow, nobody reads the list of results. A process might check whether material already exists for a product before a new shoot is commissioned, or gather assets for a brief. The query has to be precise, because software cannot recognise a near miss the way a person can.",
            "Decide in advance what the process does with no result, one result or many, since each calls for a different next step.",
          ],
          points: ["No person reading the list", "Every outcome handled on purpose"],
        },
        {
          label: "Shared views",
          heading: "When a link does the job instead",
          icon: "collection",
          body: [
            ["Not every need justifies an integration. ", { text: "Saved asset searches", page: 17 }, " can be shared through a URL, giving a team a reusable view for a campaign, client or product without any development work."],
            "Build a search integration when people need to search from inside another tool, not simply to return to the same set of results.",
          ],
          points: ["Reusable views without building", "Integration for searching inside other tools"],
        },
      ],
      sources: [{ kind: "pdf", page: 263 }, { kind: "pdf", page: 17 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "design",
      eyebrow: "Step by step",
      heading: "Designing an asset search integration",
      intro: "The same sequence serves a search box for people and a lookup run by software.",
      steps: [
        { heading: "Name who is searching", body: "Identify the person or process that needs assets, and the task they are in the middle of when that need appears.", icon: "user" },
        { heading: "Collect their words", body: "Gather the terms people actually use, from product codes and campaign names to loose visual descriptions, because they show what the search must reach.", icon: "text" },
        { heading: "Pick the distinctions", body: "Choose the few distinctions that matter to people using the host tool, such as product line, campaign or season, and treat the rest as noise.", icon: "filter" },
        { heading: "Design the result", body: "Work out what someone needs to see in order to choose between near-identical assets before deciding how results are laid out.", icon: "image" },
        { heading: "Plan for no match", body: "Decide what happens when nothing is found, such as suggesting other wording or offering a route into the library itself.", icon: "help" },
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "accordion",
      id: "questions",
      eyebrow: "Considerations",
      heading: "Questions to settle before search leaves the library",
      items: [
        {
          heading: "Whose view of the library does the search reflect?",
          summary: "Search inside another tool still has to respect who may see what.",
          icon: "lock",
          body: [
            "Whoever uses the host tool will see the results, so the audience of that tool matters as much as the search itself.",
            ["API requests use ", { text: "authenticated access", page: 256 }, " within appropriate security boundaries. Before offering results to a wide audience, confirm exactly how access applies to searches made through the API."],
          ],
        },
        {
          heading: "How current do results need to be?",
          summary: "New material takes a little while to become searchable.",
          icon: "clock",
          body: [
            ["An integration that promises the latest assets should allow for files still being processed. ", { text: "Processing status", page: 145 }, " separates an asset that has uploaded successfully from one that is fully indexed and searchable."],
          ],
        },
        {
          heading: "What if people’s words differ from the library’s?",
          summary: "People outside the library team rarely know its vocabulary.",
          icon: "tag",
          body: [
            ["A sales team’s product names may not match the tags a library team chose. Library teams can organise with ", { text: "hierarchical tags and synonyms", page: 8 }, ", so talk to them before inventing a separate vocabulary inside the host application."],
          ],
        },
        {
          heading: "How much of each result should leave the library?",
          summary: "Showing a result is different from copying its file.",
          icon: "eye",
          body: [
            "Pulling original files into another system to display them creates copies that drift out of date. A search integration usually needs to show what an asset is, not to take it, and a file is best copied out only once someone has chosen it and has a use for it.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 256 }, { kind: "pdf", page: 145 }, { kind: "pdf", page: 8 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about the asset search API",
      items: [
        {
          question: "Can an automated workflow act on asset search results without a person checking them?",
          answer: "It can, but weigh the cost of a wrong choice first. Where picking the wrong asset would be expensive or public, let software gather candidates and keep a person responsible for the final choice.",
        },
        {
          question: "How can a team tell whether an embedded asset search is serving people well?",
          answer: "Ask the people who use it which searches let them down, and keep a short list of real requests to try again after any change to the integration or to how the library is organised.",
        },
        {
          question: "Which teams gain most from asset search inside their own tools?",
          answer: "Often those who need assets without managing them, such as sales, support and product teams. Searching from software they already use suits them better than learning a whole library.",
        },
      ],
      sources: [{ kind: "pdf", page: 263 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on search and the GetSibu API",
      variant: "compact",
      pages: [261, 11, 17, 273, 264, 255],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Build a Smarter Creative Workflow",
      conversionPage: 396,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 396 }],
    },
  ],
};

export default page;
