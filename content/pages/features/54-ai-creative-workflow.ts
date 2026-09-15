/**
 * 54 · AI Creative Workflow — /features/ai-creative-workflow
 *
 * Angle (clusters ai-approach, creative-workflow): AI as an operational layer running from ingestion through
 * organisation to discovery, rather than an isolated feature. The division of work between AI and people is
 * 45; the tasks automated are 55.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how tools fit into creative workflows in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 54,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "AI",
      lede: "What changes when AI stops being a separate tool someone has to remember to use and becomes part of how assets arrive, get organised and are found, and who notices the difference.",
      visual: { diagram: "ingest-pipeline" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 54 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "AI woven through the library, not parked beside it",
      body: [
        "In GetSibu, AI features are part of the asset workflow from ingestion through organisation and discovery. AI is therefore not presented as an isolated feature, but as an operational layer that runs across the library.",
        "The distinction decides whether AI gets used at all. A capability that lives in its own corner depends on someone remembering it, exporting files to it and copying results back. Busy teams do that for a pilot and then stop, and the library returns to its old state. A capability built into the route every asset already travels needs no extra habit, so its effect accumulates quietly with every upload.",
        [
          "The route itself is the one described in ",
          { text: "creative workflow management", page: 80 },
          ": assets move from upload through organisation, review, approval and final use. Seen that way, the useful question about AI is not which tool to open but which stage of that route it makes lighter.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["An operational layer, not a side tool", "Ingestion, organisation, discovery", "No extra step to remember", "Effects that build with every upload", "Human stages start better prepared"],
      },
      highlight: {
        heading: "In practice",
        body: "A designer uploads finished artwork and moves on. By the time a colleague searches for it, the file has been processed in the background, without anyone starting the analysis by hand.",
        tags: ["Contributors", "Library managers", "Search"],
      },
      glance: {
        heading: "The AI creative workflow in brief",
        facts: [
          { label: "Area", value: "AI" },
          { label: "Spans", value: "Ingestion, organisation and discovery" },
          { label: "Runs within", value: "Creative Workflow Management", page: 80 },
          { label: "Principle", value: "Practical AI for Creative Teams", page: 60 },
        ],
        actions: [{ kind: "route", path: "/features/ai", label: "More in AI" }]
      },
      sources: [{ kind: "pdf", page: 54 }, { kind: "pdf", page: 80 }, { kind: "pdf", page: 311 }, { kind: "pdf", page: 60 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "tool-or-layer",
      eyebrow: "Side by side",
      heading: "AI as a separate tool compared with AI as a layer",
      columns: ["AI as a separate tool", "AI as a layer in GetSibu"],
      emphasis: 1,
      rows: [
        ["Where it is used", "Somewhere files must be taken to", "Inside the asset workflow itself"],
        ["When it runs", "When someone thinks to run it", "As part of processing after upload"],
        ["Where results go", "Into a report or spreadsheet", "Into search and organisation workflows"],
        ["Who benefits", "Whoever operated the tool", "Everyone who searches the library"],
        ["Manual effort", "Exporting, running, copying back", "Indexing without manual AI processing"],
      ],
      sources: [{ kind: "pdf", page: 54 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 43 }, { kind: "pdf", page: 311 }, EXPLAINS],
    },
    {
      kind: "layers",
      id: "layer-by-stage",
      eyebrow: "Stage by stage",
      heading: "What the AI layer contributes at each stage",
      intro: "Each stage hands something more useful to the next one.",
      layers: [
        { label: "Ingestion", body: "Material arrives from connected storage sources and direct uploads, which is the moment the layer first meets an asset.", page: 121 },
        { label: "Processing", body: "After upload, assets pass through metadata extraction, thumbnail generation and AI-related processing, and a status shows whether each is queued, processing or ready.", page: 144 },
        { label: "Organisation", body: "Tags and classifications are recommended from analysis of the media, giving the people who organise the library a first draft to accept or correct.", page: 9 },
        { label: "Discovery", body: "What processing learned about each asset becomes something to search by, so people can find files based on what appears inside them.", page: 12 },
        { label: "Review and use", body: "Here the layer steps back: teams request review, make changes and mark assets as approved through their own judgement.", page: 67 },
      ],
      sources: [{ kind: "pdf", page: 121 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 144 }, { kind: "pdf", page: 9 }, { kind: "pdf", page: 12 }, { kind: "pdf", page: 67 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "who-notices",
      eyebrow: "Who notices",
      heading: "How an AI layer feels to different people",
      tabs: [
        {
          label: "Contributors",
          heading: "Nothing extra to do at upload",
          icon: "upload",
          body: [
            ["For the photographer or editor adding work, the best AI layer is almost invisible. They add files through the routes they already use, such as ", { text: "drag and drop upload", page: 127 }, ", and do not have to launch a separate analysis."],
            "Their remaining job is the context only they know: which client, which campaign, which usage terms.",
          ],
          points: ["The usual upload routes", "Time kept for context only people know"],
        },
        {
          label: "Library managers",
          heading: "Review built into organising",
          icon: "tag",
          body: [
            ["Library managers meet the layer as a stream of suggestions to judge. They can ", { text: "approve suggested tags in bulk", page: 47 }, " when many suggestions fit, so review becomes part of keeping the library in order rather than a separate AI project."],
          ],
          points: ["Review as part of organising", "Judgement applied across many assets"],
        },
        {
          label: "Searchers",
          heading: "Better results without thinking about AI",
          icon: "search",
          body: [
            ["Most people who benefit never consider the AI at all. They type a request, and ", { text: "creative asset search", page: 11 }, " draws on AI-generated tags alongside filenames, metadata, OCR, comments and semantic information."],
            "When AI is a layer, its value shows up inside ordinary searches rather than in a separate tool.",
          ],
          points: ["No separate AI search to learn", "More requests answered from the library"],
        },
        {
          label: "Operations leads",
          heading: "Seeing the workflow as a whole",
          icon: "chart",
          body: [
            ["Leads responsible for creative operations care about flow. ", { text: "Creative workflow metrics", page: 208 }, " help teams understand how assets move through upload, review and approval, which shows where the prepared material still gets stuck."],
          ],
          points: ["Flow viewed end to end", "Bottlenecks found in the human stages"],
        },
      ],
      sources: [{ kind: "pdf", page: 127 }, { kind: "pdf", page: 311 }, { kind: "pdf", page: 47 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 208 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about the AI creative workflow",
      items: [
        {
          question: "Does every stage of an AI creative workflow involve AI?",
          answer: ["No, and it does not need to. The ", { text: "lifecycle of an asset", page: 107 }, " can include ingestion, metadata processing, AI tagging, review, approval, distribution and archival; AI tagging is one stage among them, while review and approval stay with people."],
        },
        {
          question: "Can new material join the AI creative workflow without anyone uploading it by hand?",
          answer: ["It can when it lands in a monitored location. ", { text: "Watch folders", page: 128 }, " are scanned continuously, so content added to them can enter the GetSibu workflow automatically."],
        },
        {
          question: "How can a team tell whether its AI creative workflow is keeping the library healthy?",
          answer: ["Look at the library over time. ", { text: "Library health analytics", page: 196 }, " can reveal growth, duplicates, inactive content and other organisational patterns."],
        },
      ],
      sources: [{ kind: "pdf", page: 54 }, { kind: "pdf", page: 107 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 128 }, { kind: "pdf", page: 196 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on AI across the asset workflow",
      variant: "compact",
      pages: [80, 45, 55, 60, 208, 107],
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
