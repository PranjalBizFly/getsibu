/**
 * 30 · Asset Discovery Workflow — /features/asset-discovery-workflow
 *
 * Angle (cluster: discovery-workflow): discovery as a repeatable sequence — search, filter, preview, locate — what
 * each stage is for, how to go back a stage when one stalls, and how saved searches and AI-assisted discovery make
 * recurring requests easier to repeat. Advanced Media Filters (19) owns filtering, Saved Asset Searches (17) owns
 * saving and sharing, Media Search Platform (13) owns the keyword-plus-filter experience, Creative Library
 * Navigation (29) owns browsing. Nothing is said about saved searches refreshing with new assets.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of discovery as a team routine; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 30,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Search & Discovery",
      lede: "Turn a request for an asset into a routine the whole team can follow, and know what to do when a stage of that routine does not give you what you need.",
      visual: { diagram: "library-search" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 30 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Four stages between a request and the right file",
      body: [
        "In GetSibu, the asset discovery workflow starts with a search, continues through filtering and previewing, and ends when the user locates the correct asset. Saved searches and AI-assisted discovery make recurring searches easier to repeat.",
        "Seeing discovery as a workflow rather than a single query changes what people do when it goes wrong. An empty result becomes a reason to go back a stage instead of a dead end, and a preview showing a near miss suggests which filter to adjust. Teams that share the sequence also share a way of helping each other: “have you filtered by date?” is a quicker conversation than “where did you look?”",
        [
          "Two of the stages have more depth of their own: ",
          { text: "advanced media filters", page: 19 },
          " for narrowing a large set, and ",
          { text: "saved asset searches", page: 17 },
          " for keeping a search that works.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Search, filter, preview, locate", "A sequence a team can share", "Going back a stage when stuck", "Confirming before using", "Recurring searches made repeatable"],
      },
      highlight: {
        heading: "In practice",
        body: "A request for “the blue product shot from last spring” becomes a search for the product, a date filter for the spring, a quick look through thumbnails and a check that the chosen image has been approved.",
        tags: ["Coordinators", "Designers", "Everyday requests"],
      },
      glance: {
        heading: "Discovery workflow in brief",
        facts: [
          { label: "Area", value: "Search & Discovery" },
          { label: "Stages", value: "Search, filter, preview, locate" },
          { label: "Made repeatable by", value: "Saved searches and AI-assisted discovery" },
          { label: "Recurring sets shared as", value: "Shared Creative Views", page: 79 },
        ],
        actions: [{ kind: "route", path: "/features/search-and-discovery", label: "More in Search & Discovery" }]
      },
      sources: [{ kind: "pdf", page: 30 }, { kind: "pdf", page: 19 }, { kind: "pdf", page: 17 }, { kind: "pdf", page: 79 }, { kind: "pdf", page: 146 }, { kind: "pdf", page: 76 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "stages",
      eyebrow: "Step by step",
      heading: "What each stage of discovery is for",
      intro: "Each stage answers a different question, and each has a sign that it is finished.",
      steps: [
        { heading: "Search", body: "Turn the request into words: a name, a detail or a description. This stage is done when the right asset is probably somewhere among the results.", icon: "search", page: 11 },
        { heading: "Filter", body: "Remove whatever cannot be right, such as the wrong format or period. It is done when the remaining set is small enough to look through.", icon: "filter" },
        { heading: "Preview", body: "Inspect candidates without downloading them, using thumbnails for a first visual check and streaming previews for large media. It is done when one candidate stands out.", icon: "eye", page: 147 },
        { heading: "Locate", body: "Confirm that the candidate is the correct asset, including whether its review status shows completed approval, before it goes into the work.", icon: "check", page: 76 },
      ],
      sources: [{ kind: "pdf", page: 30 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 19 }, { kind: "pdf", page: 146 }, { kind: "pdf", page: 147 }, { kind: "pdf", page: 76 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "stalls",
      eyebrow: "When a stage stalls",
      heading: "Going back a stage when discovery gets stuck",
      items: [
        {
          heading: "The search returns nothing",
          summary: "An empty result usually means the words, not the library, are the problem.",
          icon: "search",
          body: [
            "Try the words an uploader would have used rather than your own, or describe the asset instead of naming it. One distinctive detail is often a better start than a long query packed with details.",
            ["It is also worth checking readiness, since an asset can have uploaded without yet being fully indexed, and ", { text: "media processing status", page: 145 }, " tells the two apart."],
          ],
        },
        {
          heading: "Too many results to review",
          summary: "A long list is a filtering problem before it is a searching problem.",
          icon: "filter",
          body: [
            "Before rewording anything, ask which property of the asset is already settled, whether a format, a date range or a resolution, and let that decide the order in which the list is cut down.",
            "If every sensible filter still leaves hundreds of candidates, the request itself may be too vague, and a question back to whoever asked usually saves more time than narrowing further.",
          ],
        },
        {
          heading: "Previews show near misses",
          summary: "Candidates that are almost right reveal what the search is still missing.",
          icon: "eye",
          body: [
            "If every preview shows the right product in the wrong setting, the setting belongs in the query. If they show the right shoot in the wrong format, a format filter is missing. Each near miss points to the earlier stage worth revisiting.",
            ["Some near misses are simply copies of each other, and ", { text: "duplicate asset management", page: 112 }, " helps identify unnecessary copies, which is the first step towards clearing them out."],
          ],
        },
        {
          heading: "The right asset in the wrong state",
          summary: "Finding the file is not the same as being able to use it.",
          icon: "history",
          body: [
            ["A located asset may turn out to be a draft or a superseded version. ", { text: "File version history", page: 92 }, " gives a record of previous versions, and a team that runs into this regularly can direct colleagues to ", { text: "approved-only views", page: 103 }, " so the workflow starts from finished content."],
          ],
        },
        {
          heading: "Last time’s keywords are forgotten",
          summary: "A request can return long after anyone remembers how it was answered.",
          icon: "refresh",
          body: [
            "Not every repeat is weekly. A request may come back a year later, when nobody recalls the words that found the right asset and the person who found it has moved on.",
            ["", { text: "AI-assisted discovery", page: 12 }, " helps here, because finding files by what appears inside them depends less on manually entered metadata and on recalling the exact keywords that worked before."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 145 }, { kind: "pdf", page: 19 }, { kind: "pdf", page: 112 }, { kind: "pdf", page: 92 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 12 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A weekly request for social content turned into a routine",
      team: "A social media team",
      situation: "Every Monday, a social media team is asked for material to support the week’s posts: product imagery, short video and anything approved from the current campaign.",
      steps: [
        { heading: "Describe what the posts need", body: ["In the first week, a content producer describes the kind of image the posts need and receives results based on the ", { text: "semantic and visual information available", page: 49 }, ", not only on exact keywords."] },
        { heading: "Filter to the week’s needs", body: "Filters for date and format narrow the results to the campaign period and to the kinds of file the posts use." },
        { heading: "Preview before choosing", body: "Thumbnails let the producer rule out weak candidates quickly, and streaming previews show whether a short video really opens on the product." },
        { heading: "Take only what is approved", body: "Only assets whose review status shows completed approval go into the week’s posting plan." },
        { heading: "Keep the search for next Monday", body: "The producer saves the search and shares its URL with the colleagues who cover the same request in other weeks, so nobody has to work out the wording and filters again." },
      ],
      outcome: "Monday’s request becomes a routine the whole rota can follow, and the time goes into choosing strong posts rather than rebuilding the search.",
      link: { page: 234, label: "GetSibu for Social Media Teams" },
      sources: [{ kind: "pdf", page: 49 }, { kind: "pdf", page: 19 }, { kind: "pdf", page: 146 }, { kind: "pdf", page: 147 }, { kind: "pdf", page: 76 }, { kind: "pdf", page: 17 }, { kind: "pdf", page: 234 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about the asset discovery workflow",
      items: [
        {
          question: "Does the asset discovery workflow always run in the same order?",
          answer: "Not always. A first attempt usually follows it, while someone returning to a familiar request often knows the filters already and moves quickly on to previewing.",
        },
        {
          question: "Should a request for an asset say how it will be used?",
          answer: ["It helps a great deal. Knowing whether an image is for print, a web page or a social post tells the person searching which ", { text: "format and resolution filters", page: 19 }, " matter, and whether approval must be checked, before the first search is typed."],
        },
        {
          question: "How does a very large library change the asset discovery workflow?",
          answer: "Mostly by putting weight on the middle stages. More candidates survive the first search, so filtering does more of the narrowing, and previewing matters more because many files can share a subject, a shoot or most of a name.",
        },
      ],
      sources: [{ kind: "pdf", page: 30 }, { kind: "pdf", page: 19 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on each stage of discovery",
      variant: "compact",
      pages: [17, 19, 12, 29, 147, 76],
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
