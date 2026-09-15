/**
 * 43 · AI Media Understanding — /features/ai-media-understanding
 *
 * Angle (clusters: ai-vision, ai-intelligence primary): interpretation — GetSibu interpreting the content of visual
 * assets and delivering it to the search and organisation workflows people already use. AI Creative Intelligence
 * (44) owns the information layer and searchable meaning; AI Media Indexing (50) the signals prepared for discovery;
 * AI Asset Intelligence (58) the combination with metadata and search; AI Vision Analysis (32) the attributes.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of what machine interpretation of media means in practice; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 43,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "AI",
      lede: "How GetSibu’s AI interprets the content of visual assets, and how that interpretation reaches the search and organisation work your team already does.",
      visual: { diagram: "ingest-pipeline", focus: "processing" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 43 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Interpretation that ends up where people work",
      body: [
        "AI media understanding allows GetSibu to interpret what visual assets contain and to make that information available through search and organisation workflows. It is not presented as an isolated feature to visit, but as part of the operational layer that runs across the library.",
        "“Understanding” is a helpful word as long as it is not taken literally. Software does not appreciate a photograph the way a person does. What it can do is produce descriptions of visual content that people can search and sort by, and its value depends entirely on whether those descriptions help someone find or arrange the right asset.",
        [
          { text: "AI vision analysis", page: 32 },
          " looks at what it means for software to read visual content, and ",
          { text: "AI media indexing", page: 50 },
          " explains how supported visual, textual and metadata signals are prepared for discovery.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Visual content interpreted", "Results delivered to search", "Results delivered to organisation", "Descriptions rather than comprehension", "People act on what is found"],
      },
      highlight: {
        heading: "In practice",
        body: "An art director describing a shot and a library manager tidying a folder of unlabelled images both rely on the same interpretation of those images, without treating it as a separate tool.",
        tags: ["Search", "Organisation", "Visual assets"],
      },
      glance: {
        heading: "Media understanding in brief",
        facts: [
          { label: "Area", value: "AI" },
          { label: "Works on", value: "Visual assets" },
          { label: "Feeds", value: "Search and organisation workflows" },
          { label: "Operates as", value: "AI Creative Workflow", page: 54 },
        ],
        actions: [{ kind: "route", path: "/features/ai", label: "More in AI" }]
      },
      sources: [{ kind: "pdf", page: 43 }, { kind: "pdf", page: 54 }, { kind: "pdf", page: 32 }, { kind: "pdf", page: 50 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "to-a-workflow",
      eyebrow: "Step by step",
      heading: "From a visual asset to something a workflow can use",
      intro: "Interpretation matters only once it reaches the places where people look for and arrange assets.",
      steps: [
        { heading: "The asset is processed", body: "After upload, an asset moves through its processing stages, including AI-related processing.", icon: "upload" },
        { heading: "Content is interpreted", body: "The visual content is analysed, so the asset can be described by what it shows as well as by its name.", icon: "eye" },
        { heading: "Search puts it to use", body: "People can find a file by what appears inside it, rather than depending entirely on manually entered metadata.", icon: "search", page: 12 },
        { heading: "Organisation puts it to use", body: "Classification that draws on content and available metadata can reduce the repetitive categorising that would otherwise be done by hand.", icon: "folder", page: 42 },
      ],
      sources: [{ kind: "pdf", page: 143 }, { kind: "pdf", page: 43 }, { kind: "pdf", page: 12 }, { kind: "pdf", page: 42 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "workflows",
      eyebrow: "Where it lands",
      heading: "The workflows that interpretation feeds",
      tabs: [
        {
          label: "Search",
          heading: "Reach assets by what they show",
          icon: "search",
          body: [
            "For the person searching, interpretation widens the vocabulary the library responds to. A request can describe the content of an image rather than guess at the words someone else used when filing it.",
            ["That is the idea behind ", { text: "AI creative search", page: 49 }, ", where people describe the asset they want and receive results based on semantic and visual information."],
          ],
          points: ["Descriptions instead of filenames", "Helpful for material filed long ago"],
        },
        {
          label: "Organisation",
          heading: "Keep structure without sorting every file",
          icon: "folder",
          body: [
            "For the people who look after the library, interpretation is a head start. Knowing what an asset contains makes it easier to decide where it belongs and how it should be described.",
            ["During processing, ", { text: "AI-assisted tagging", page: 31 }, " can suggest tags, and authorised users can review, approve or override them."],
          ],
          points: ["A starting point for placement", "Suggestions reviewed, not imposed"],
        },
      ],
      sources: [{ kind: "pdf", page: 49 }, { kind: "pdf", page: 31 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "An unlabelled photography archive put back to work",
      team: "An in-house creative team",
      situation: "An in-house creative team inherits a large archive of product and event photography from a previous agency. The files arrived with filenames that describe nothing and almost no metadata.",
      steps: [
        { heading: "The archive is processed", body: ["Once uploaded, the images move through processing, and ", { text: "AI processing status", page: 144 }, " shows which are still queued and which are ready."] },
        { heading: "Classification helps with the bulk", body: "AI classification helps categorise product photography and event coverage, sparing someone the job of doing it file by file." },
        { heading: "Suggestions are checked", body: "A library manager approves suggested tags in bulk where a batch looks right and overrides those that do not fit the team’s taxonomy." },
        { heading: "Designers search by content", body: "Instead of browsing folders named by date, designers describe the shots they need and reach images through what was interpreted in them." },
        { heading: "Useful searches are kept", body: ["Requests that recur, such as a particular product range, become ", { text: "saved searches", page: 17 }, " colleagues can open by URL."] },
      ],
      outcome: "An archive that was effectively invisible becomes material the team can find and organise, with its own judgement applied to everything the AI interpreted.",
      link: { page: 222, label: "GetSibu for In-House Creative Teams" },
      sources: [{ kind: "pdf", page: 143 }, { kind: "pdf", page: 144 }, { kind: "pdf", page: 43 }, { kind: "pdf", page: 49 }, { kind: "pdf", page: 42 }, { kind: "pdf", page: 47 }, { kind: "pdf", page: 48 }, { kind: "pdf", page: 17 }, { kind: "pdf", page: 222 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about AI media understanding",
      items: [
        {
          question: "Does AI media understanding cover the text inside documents?",
          answer: ["In GetSibu, media understanding concerns visual assets. Words inside images, documents, presentations and screenshots are handled by ", { text: "AI OCR", page: 38 }, ", which makes extracted text part of the searchable asset information."],
        },
        {
          question: "How does AI media understanding differ from AI creative intelligence?",
          answer: ["Media understanding is the interpretation of visual content and its delivery to search and organisation. ", { text: "AI creative intelligence", page: 44 }, " describes the wider result: stored files becoming a more understandable information layer with searchable meaning attached."],
        },
        {
          question: "Does AI media understanding decide how our library is organised?",
          answer: "No. It informs organisation, and people decide. Teams retain control, approving what fits and overriding what does not.",
        },
      ],
      sources: [{ kind: "pdf", page: 43 }, { kind: "pdf", page: 38 }, { kind: "pdf", page: 44 }, { kind: "pdf", page: 45 }, { kind: "pdf", page: 48 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on how GetSibu interprets media",
      variant: "compact",
      pages: [44, 32, 50, 49, 42, 222],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the intelligence cluster." }],
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
