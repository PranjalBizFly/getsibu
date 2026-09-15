/**
 * 18 · Natural Language Asset Search — /features/natural-language-asset-search
 *
 * Angle (cluster: semantic-search): how people remember assets — colour, subject, location, campaign context —
 * and searching that way without knowing the filename. Semantic Creative Search (14) owns how a description is
 * interpreted (embeddings, AI media information, the PDF's example query), AI Semantic Search (39) the AI
 * capability, AI Creative Search (49) the outcome, What Is Semantic Search? (363) the neutral explainer.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how people recall creative assets; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 18,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Search & Discovery",
      lede: "Search for an asset with the details you actually remember about it, such as its colour, its subject, where it was made or the campaign it belonged to, without first having to know what the file is called.",
      visual: { diagram: "search-signals", focus: "semantic" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 18 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Searching the way memory works",
      body: [
        "Natural language search lets people describe an asset in the way they naturally remember it. Someone who can recall an asset’s colour, its subject, its location or its campaign context does not have to know the exact filename.",
        "Memory for creative work is visual and associative. Nobody recalls that a photograph was named with a string of camera letters and numbers in a folder called Selects; they recall a yellow jacket against a grey wall, a shoot by the river, the launch the client was nervous about. Conventional search asks them to translate that memory into the vocabulary of whoever saved the file, and the translation is where searches go wrong.",
        [
          "A description is only useful if something interprets it. That work belongs to ",
          { text: "semantic creative search", page: 14 },
          ", while the information being matched, from metadata and extracted text to tags and comments, is set out under ",
          { text: "creative asset search", page: 11 },
          ".",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Describe what you remember", "No filename needed", "Colour, subject, location, campaign", "Everyday words, not system vocabulary", "Vague memories refined step by step"],
      },
      highlight: {
        heading: "In practice",
        body: "“The orange packaging shot from the festival sponsorship” can be a complete search. It holds a colour, a subject and a campaign, and no filename at all.",
        tags: ["Colour", "Subject", "Campaign"],
      },
      glance: {
        heading: "Natural language search in brief",
        facts: [
          { label: "Area", value: "Search & Discovery" },
          { label: "Starts from", value: "What people remember about an asset" },
          { label: "Interpreted by", value: "AI Semantic Search", page: 39 },
          { label: "Explained in", value: "What Is Semantic Search?", page: 363 },
        ],
        actions: [{ kind: "route", path: "/features/search-and-discovery", label: "More in Search & Discovery" }]
      },
      sources: [{ kind: "pdf", page: 18 }, { kind: "pdf", page: 14 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 39 }, { kind: "pdf", page: 363 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "memory-cues",
      eyebrow: "By memory cue",
      heading: "Four details people remember, and how search can use them",
      tabs: [
        {
          label: "Colour",
          heading: "“The blue one”",
          icon: "palette",
          body: [
            "Colour is often the first detail people recall, even when the subject has gone hazy. It is also rarely typed into keywords, because to the person uploading it seemed too obvious to mention.",
            ["GetSibu can extract ", { text: "colour information from visual assets", page: 36 }, " and use it as part of discovery, so a colour named in a request has something to be compared with where that is appropriate."],
          ],
          points: ["Name the dominant colour", "Pair it with a subject for precision"],
        },
        {
          label: "Subject",
          heading: "“The one with the bicycle”",
          icon: "image",
          body: [
            "The subject is what an asset is about: a product, an object, a landmark, an activity. People describe it in their own words, which may not be the words used in any tag.",
            ["", { text: "Object detection", page: 34 }, " can identify objects appearing in supported media and attach confidence information, and those tags can later contribute to search."],
          ],
          points: ["Describe the main thing shown", "Ordinary words rather than tag terms"],
        },
        {
          label: "Location",
          heading: "“The shoot at the harbour”",
          icon: "map",
          body: [
            "Place is remembered in two ways: as somewhere visible in the asset, and as somewhere written down about it, in a project folder, a shoot’s keywords or a call sheet.",
            ["Where a place has been recorded, search can reach it. File paths and custom keywords can form part of the asset record, and ", { text: "asset metadata search", page: 23 }, " looks through that metadata alongside tags and extracted content."],
          ],
          points: ["Place names in keywords and paths", "Places named in project folders"],
        },
        {
          label: "Campaign",
          heading: "“Something from the spring launch”",
          icon: "megaphone",
          body: [
            "Marketing and brand colleagues often think in campaigns, even when their files are organised by date or format.",
            ["Campaign names tend to live in folder paths, tags, comments and the text of briefs and presentations, all of which search can consult. For a campaign asked about again and again, a ", { text: "saved search", page: 17 }, " keeps the answer ready."],
          ],
          points: ["Campaign names in tags and comments", "Briefs found by the words inside them"],
        },
      ],
      sources: [{ kind: "pdf", page: 18 }, { kind: "pdf", page: 36 }, { kind: "pdf", page: 34 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 23 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 15 }, { kind: "pdf", page: 17 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "what-you-need-to-know",
      eyebrow: "Side by side",
      heading: "What each way of searching asks you to know",
      columns: ["Filename and folder search", "Natural language search"],
      emphasis: 1,
      rows: [
        ["Starting point", "The name the file was saved under", "What you remember about the asset"],
        ["Vocabulary", "The uploader’s words", "Your own description"],
        ["Knowledge required", "Where the file was stored", "Its colour, subject, place or campaign"],
        ["A vague memory", "Usually a dead end", "A first query to refine with filters"],
        ["Exact names and codes", "Direct and precise", "Filenames remain searchable too"],
      ],
      sources: [{ kind: "pdf", page: 18 }, { kind: "pdf", page: 19 }, { kind: "pdf", page: 11 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A photograph found from a second-hand description",
      team: "A PR team",
      situation: "A journalist asks a PR team for a photograph from a product event held some time ago. The press officer on duty did not attend and has only a colleague’s description: a red backdrop, the new product on a plinth and the event’s name on a banner.",
      steps: [
        { heading: "Search with the description", body: "The press officer types the description as it was passed on, naming the colour, the product and the event." },
        { heading: "The banner narrows it", body: ["The event’s name is printed on the banner in the photographs, so ", { text: "text extracted from images", page: 15 }, " gives the search a precise match."] },
        { heading: "Filters clear the noise", body: "Keeping only images from around the date of the event leaves a set small enough to look through." },
        { heading: "The right frame is chosen", body: "Previewing the candidates, the officer picks a frame in which the product is clearly visible." },
        { heading: "Its status is checked", body: ["Before sending, the officer confirms from its ", { text: "review status", page: 76 }, " that the photograph has completed approval."] },
      ],
      outcome: "The journalist receives an approved photograph, and nobody had to track down the colleague who ran the event to ask where the files were kept.",
      link: { page: 235, label: "GetSibu for PR Teams" },
      sources: [{ kind: "pdf", page: 18 }, { kind: "pdf", page: 15 }, { kind: "pdf", page: 19 }, { kind: "pdf", page: 30 }, { kind: "pdf", page: 76 }, { kind: "pdf", page: 235 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about natural language asset search",
      items: [
        {
          question: "Do I need special wording for natural language asset search?",
          answer: "No. Ordinary words work, the kind you would use when asking a colleague to help you track something down.",
        },
        {
          question: "What if I remember only one detail about an asset?",
          answer: "Start with that detail and add filters for category or date to narrow what comes back. A single colour, place or campaign name is often enough to begin.",
        },
        {
          question: "What if my memory of an asset is wrong?",
          answer: "A description cannot correct a mistaken memory: if the colour or place you recall is wrong, the results will follow the wrong detail. Lead with the details you are surest of, and drop the doubtful ones if nothing suitable comes back.",
        },
        {
          question: "Which details make a natural language asset search most effective?",
          answer: "Details that are either visible or recorded: a dominant colour, the main subject, a named place or a campaign. Words such as “nice” or “strong” on their own give the search little to interpret.",
        },
      ],
      sources: [{ kind: "pdf", page: 18 }, { kind: "pdf", page: 19 }, { kind: "pdf", page: 39 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on describing the assets you need",
      variant: "compact",
      pages: [14, 39, 36, 34, 363, 49],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the AI creative search outcome." }],
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
