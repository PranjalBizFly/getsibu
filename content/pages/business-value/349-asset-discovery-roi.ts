/**
 * 349 · Asset Discovery ROI — /business-value/asset-discovery-roi
 *
 * Angle (clusters: search-speed, roi): the business value of discovery — creative time returned, the hidden
 * costs of slow or failed searches (interruptions, dependence on one person's memory, downstream rework) and
 * how to evidence the return. Fast Asset Discovery (20) owns what makes finding quick; Creative Workflow ROI
 * (348) owns the wider workflow losses.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of discovery costs and how to evidence them; states no GetSibu capability beyond the cited pages and supplies no figures." } as const;

const page: PageContent = {
  page: 349,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "centered",
      eyebrow: "Business Value",
      lede: "The case for asset discovery as a business return: who bears the cost when existing work cannot be found, how a searchable library moves that cost, and how to record the change without inventing a saving.",
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 349 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Every search takes time from making",
      body: [
        "Faster asset discovery can help creative professionals spend more time creating and less time searching through folders. As a business argument, that places the value of discovery in creative hours returned, not in how quickly a list of results appears.",
        "Slow discovery is expensive in ways a stopwatch misses. The person searching loses time, but so does the colleague interrupted to answer “where is that file?”, and the project waits while both of them look. When the search fails altogether, the cost moves downstream: an asset is recreated, a weaker substitute is used or a deadline slips.",
        ["Discovery that depends on memory is also fragile. GetSibu is designed to ", { text: "reduce the dependency on folder knowledge", page: 24 }, " and on individual team members remembering where files were stored, which matters most when those people are busy, on leave or gone. What makes finding quick in practice is explained under ", { text: "fast asset discovery", page: 20 }, "."],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Creative time returned, not search speed", "Interruptions to colleagues who know", "Failed searches that turn into rework", "Discovery that outlasts individual memory", "Evidence from your own searches"],
      },
      glance: {
        heading: "Discovery ROI in brief",
        facts: [
          { label: "Area", value: "Business value" },
          { label: "Return measured in", value: "Creative time given back" },
          { label: "Main cost", value: "Searching, asking and rework after failed searches" },
          { label: "Wider return", value: "Creative Workflow ROI", page: 348 },
        ],
        actions: [{ kind: "route", path: "/business-value", label: "More in Business Value" }]
      },
      sources: [{ kind: "pdf", page: 349 }, { kind: "pdf", page: 24 }, { kind: "pdf", page: 20 }, { kind: "pdf", page: 348 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "memory-or-search",
      eyebrow: "Side by side",
      heading: "Who pays when discovery relies on memory",
      columns: ["Discovery by memory", "A searchable GetSibu library"],
      emphasis: 1,
      rows: [
        ["The person searching", "Time lost to folders and guesswork", "One search across the entire creative library"],
        ["The colleague who knows", "Interrupted to say where a file lives", "Metadata searched when filename and folder are unknown"],
        ["The project", "Waits, or settles for a weaker substitute", "Files found by what appears inside them"],
        ["The next person with the same need", "Starts the hunt again", "A saved search shared through a URL"],
        ["The organisation when people move on", "Knowledge of the archive leaves too", "Creators and contributors kept with the assets"],
      ],
      sources: [{ kind: "pdf", page: 16 }, { kind: "pdf", page: 23 }, { kind: "pdf", page: 12 }, { kind: "pdf", page: 17 }, { kind: "pdf", page: 116 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "The archive expert is away during a busy stretch",
      team: "A marketing team",
      situation: "A marketing team relies on one long-serving coordinator who knows where every past campaign asset lives. The coordinator is away for several weeks just as regional teams start asking for material.",
      steps: [
        { heading: "Requests go to the library first", body: "Regional marketers look in the library before asking anyone, starting from the product and campaign names they already use." },
        { heading: "A half-remembered image is described", body: ["One marketer remembers only “the rooftop shot at dusk” and ", { text: "describes it in natural language", page: 18 }, " instead of guessing at a filename."] },
        { heading: "A brief is located by its contents", body: ["A phrase from last year’s campaign brief is enough to start from, because ", { text: "AI document discovery", page: 53 }, " combines OCR and metadata to locate documents by the information inside them."] },
        { heading: "What one person knew is written down", body: ["On return, the coordinator adds the campaign names they had carried in their head to the assets as ", { text: "custom keywords", page: 22 }, ", which can become part of each asset record."] },
      ],
      outcome: "The coordinator comes back to a shorter queue, and the next absence matters less because more of what they knew now sits with the assets rather than with them.",
      link: { page: 213, label: "GetSibu for Marketing Teams" },
      sources: [{ kind: "pdf", page: 18 }, { kind: "pdf", page: 53 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 213 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "accordion",
      id: "measuring",
      eyebrow: "Building the evidence",
      heading: "How to measure the return on asset discovery yourself",
      items: [
        {
          heading: "Log searches before anything changes",
          summary: "A baseline recorded in advance is worth more than a recollection afterwards.",
          icon: "clock",
          body: [
            "Ask a few people in different roles to note, for a short period, each time they look for an existing asset: what they wanted, where they looked, whether they found it and what happened if they did not. Keep the exercise light, or nobody will keep it up.",
          ],
          points: ["Record the outcome, not only the effort", "Include searches that were abandoned"],
        },
        {
          heading: "Count the questions as well as the searches",
          summary: "Interruptions to colleagues are part of what discovery costs.",
          icon: "message",
          body: [
            "Requests such as “do we have a photo of…” or “where did the final deck go?” cost the person asked as much as the person asking. Counting them over the same period shows how much of the library currently lives in people’s heads.",
          ],
        },
        {
          heading: "Follow where failed searches lead",
          summary: "The largest costs sit downstream of a search that did not succeed.",
          icon: "refresh",
          body: [
            "A failed search may end in a recreated asset, a substitute that is not quite right or a delayed handover. Record those consequences separately, because they are what finance and operations readers recognise as cost.",
          ],
        },
        {
          heading: "Compare like with like after adoption",
          summary: "Repeat the same exercise once the library has settled in.",
          icon: "gauge",
          body: [
            ["Run the log again with the same roles once habits have had time to change, and read the two side by side. Library data adds a second view: ", { text: "asset usage analytics", page: 182 }, " help teams understand which assets receive attention and which remain underused."],
          ],
        },
        {
          heading: "Translate recovered time with care",
          summary: "Time saved is only a return if it goes somewhere useful.",
          icon: "compass",
          body: [
            "Resist converting every saved moment into money. Discovery pays back when the time goes into creative output, fewer reshoots or quicker answers to requests, so describe those outcomes rather than multiplying minutes by a salary.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 182 }, EXPLAINS],
    },
    {
      kind: "checklist",
      id: "weigh",
      eyebrow: "What to weigh",
      heading: "What to weigh when valuing faster discovery",
      variant: "chips",
      items: ["Roles that search most often", "Colleagues who act as the archive", "Searches that end in rework", "Material that is hard to describe", "Documents found only by opening them", "Time needed for habits to change"],
      sources: [{ kind: "pdf", page: 349 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about asset discovery ROI",
      items: [
        {
          question: "How does asset discovery ROI differ from creative workflow ROI?",
          answer: ["Discovery ROI concentrates on one loss: time spent looking for existing work. ", { text: "Creative workflow ROI", page: 348 }, " takes a wider view that also includes recreating files and resolving version confusion."],
        },
        {
          question: "Does asset discovery ROI depend on AI-assisted search?",
          answer: ["Not entirely. Part of the return comes from searching one library instead of several places. AI adds routes to material nobody described: ", { text: "AI-powered image discovery", page: 52 }, " helps teams locate photographs, product shots and campaign images through AI-generated metadata."],
        },
        {
          question: "Can analytics show the return on asset discovery?",
          answer: ["Partly. ", { text: "Executive asset analytics", page: 210 }, " provide a higher-level view of the creative library and its usage, which shows whether the library is being used. Whether that use replaced hunting elsewhere is something only the teams themselves can report."],
        },
        {
          question: "Does asset discovery ROI change as a library grows?",
          answer: "The need for good discovery grows with the library, because every new asset adds another candidate to every search. Whether the return grows as well depends on how consistently assets are described as they arrive.",
        },
      ],
      sources: [{ kind: "pdf", page: 348 }, { kind: "pdf", page: 52 }, { kind: "pdf", page: 210 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on the value of finding work quickly",
      variant: "compact",
      pages: [20, 30, 348, 359, 18, 53],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the closest discovery pages." }],
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
