/**
 * 362 · What Is AI Asset Management? — /resources/what-is-ai-asset-management
 *
 * Angle (cluster: ai-explainers, primary; ai-approach): vendor-neutral map of AI in asset management — what it
 * means for software to analyse and classify content, the family of techniques it covers, and the limits a team
 * should understand. The technique explainers own the detail (363 semantic search, 364 AI tagging, 366 OCR,
 * 368 duplicate detection); How AI Changes DAM (377) owns the essay; 45 and 60 own GetSibu's stance.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Vendor-neutral explanation of AI in asset management; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 362,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "centered",
      eyebrow: "Resources",
      lede: "What it means for an asset library to analyse and classify its own content, the techniques that sit under the AI label, the limits worth knowing before relying on them, and how GetSibu keeps people in control.",
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 362 }, { kind: "pdf", page: 45 }],
    },
    {
      kind: "definition",
      id: "definition",
      eyebrow: "Definition",
      term: "AI asset management",
      answer: "AI asset management uses machine intelligence to analyse and classify digital content, making large libraries easier to search and organise. The models work on the files themselves, not only on what people typed about them.",
      detail: "Conventional asset management depends on what someone records at upload: a filename, a folder, a few keywords. AI adds a second source of description by examining the content — the objects and colours in a photograph, the words on a scanned page, the likeness between two copies of an image — and turning what it finds into data the library can search, sort and review.",
      sources: [{ kind: "pdf", page: 362 }, EXPLAINS],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "What changes when software can read the content",
      body: [
        "In practical terms, the library examines each file and produces information about it: suggested labels, categories, extracted text or signals that two files are alike. That information is then used where metadata has always been used, in search, filters, organisation and housekeeping.",
        "The reason it matters is volume. Describing a few hundred files by hand is tedious but possible. Describing every product shot, every hour of raw footage and years of presentations is not, so much of that material stays barely described and, as far as search is concerned, invisible. Machine analysis can give files a baseline description, including the ones nobody had time to tag.",
        [
          "The word “management” is doing real work. A well-designed system does not simply attach whatever a model outputs; it lets people review, correct and approve the results. In GetSibu, AI-powered asset management ",
          { text: "combines automated analysis with human approval", page: 45 },
          ", so teams retain control while spending less time on repetitive library administration.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Analysis of the file itself", "Classification into categories", "Suggestions people can review", "Confidence behind a result", "AI as part of the workflow"],
      },
      highlight: {
        heading: "In practice",
        body: "A library brought over from old drives arrives with almost no keywords. Analysis gives its images suggested tags and its scanned brochures searchable text, and the team reviews suggestions in batches instead of describing files one by one.",
        tags: ["Library managers", "Tagging", "Search"],
      },
      glance: {
        heading: "AI asset management in brief",
        facts: [
          { label: "Area", value: "AI and organisation" },
          { label: "Works on", value: "File content and existing metadata" },
          { label: "Techniques", value: "Tagging, OCR, semantic search, duplicate detection" },
          { label: "In GetSibu", value: "Practical AI for Creative Teams", page: 60 },
        ],
        actions: [{ kind: "route", path: "/resources", label: "More in Resources" }]
      },
      sources: [{ kind: "pdf", page: 362 }, { kind: "pdf", page: 45 }, { kind: "pdf", page: 60 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "techniques",
      eyebrow: "The techniques",
      heading: "Four techniques under the AI label",
      tabs: [
        {
          label: "Tagging",
          heading: "Suggesting labels from what is detected",
          icon: "tag",
          body: [
            "Tagging models examine an image or a video frame and propose descriptive labels, such as the objects present, the dominant colours or the overall mood. Classification works one level up, placing an asset in a category rather than listing what it contains.",
            "Both produce suggestions rather than certainties, which is why a review step belongs in the process.",
          ],
          points: ["Objects, colours and mood as labels", "Categories for broad grouping"],
          link: { page: 364, label: "What Is AI Tagging?" },
        },
        {
          label: "Text in files",
          heading: "Reading the words inside images and documents",
          icon: "text",
          body: [
            "Optical character recognition finds text that exists only as pixels — on a poster, a scanned contract, a slide exported as an image — and converts it into characters a search index can match.",
            "It interprets nothing. It reports what is written, which makes it the most literal of the techniques and the easiest to check against the original.",
          ],
          points: ["Scans, screenshots and exported slides", "Exact words, not interpretations"],
          link: { page: 366, label: "What Is OCR in DAM?" },
        },
        {
          label: "Meaning",
          heading: "Matching a request by what it means",
          icon: "search",
          body: [
            "Semantic search represents both content and queries as lists of numbers, usually called embeddings, which a model produces so that related meanings end up close together. A request for “quiet morning by the sea” can then return a calm coastal photograph that nobody tagged with those words.",
            "It widens what a search can reach, at the cost of some of the precision an exact keyword gives.",
          ],
          points: ["Descriptions instead of exact keywords", "Useful when nobody knows the filename"],
          link: { page: 363, label: "What Is Semantic Search?" },
        },
        {
          label: "Duplicates",
          heading: "Recognising the same asset twice",
          icon: "copy",
          body: [
            "Duplicate detection compares fingerprints of files. Exact fingerprints match byte-for-byte copies whatever they are called; perceptual fingerprints can match copies that still look the same after resizing, recompression or conversion.",
            "It is housekeeping rather than discovery, although dealing with the copies it finds keeps search results from showing the same image several times over.",
          ],
          points: ["Renamed copies", "Recompressed or resized copies"],
          link: { page: 368, label: "What Is Duplicate Detection?" },
        },
      ],
      sources: [{ kind: "pdf", page: 364 }, { kind: "pdf", page: 366 }, { kind: "pdf", page: 363 }, { kind: "pdf", page: 368 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "limits",
      eyebrow: "Considerations",
      heading: "Limits to understand before relying on AI",
      items: [
        {
          heading: "Suggestions, not certainties",
          summary: "Every model output is a probability, however confident it looks.",
          icon: "gauge",
          body: [
            "A model that labels a photograph “beach” is reporting a strong statistical association, not a verified fact. Many systems attach a confidence value to each result, and the level at which a suggestion is accepted is a decision the team should make on purpose.",
          ],
        },
        {
          heading: "Generic words versus your words",
          summary: "Models describe content in general vocabulary, not in your organisation’s terms.",
          icon: "tag",
          body: [
            ["A model may say “shoe” where a retailer needs the product line, or “outdoor event” where a brand team needs the campaign name. AI description works best alongside an ", { text: "asset taxonomy", page: 375 }, " that people own, with suggestions corrected to fit it."],
          ],
        },
        {
          heading: "Context the file cannot show",
          summary: "Rights, ownership and approval are not visible in the pixels.",
          icon: "document",
          body: [
            "Analysis can say what an image contains, but not whether its licence has lapsed, which client it belongs to or whether anyone signed it off. That knowledge still comes from people and from the workflow around the asset, which is why AI supplements metadata rather than replacing it.",
          ],
        },
        {
          heading: "Who manages the models and keys",
          summary: "AI processing relies on services and credentials that someone has to control.",
          icon: "key",
          body: [
            ["Organisations should know which service analyses their content and who holds the credentials. For agencies this can differ by client, and GetSibu’s multi-tenant configurations can support ", { text: "client-specific AI key management", page: 164 }, " where required."],
          ],
        },
        {
          heading: "Analysis follows upload",
          summary: "A file that has just uploaded may not carry any AI information yet.",
          icon: "clock",
          body: [
            ["Analysis usually runs as a stage after upload, so new content may not carry suggestions yet. Status that shows whether an asset is ", { text: "queued, processing or ready", page: 144 }, " helps people tell a file still being analysed from one that search has genuinely missed."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 375 }, { kind: "pdf", page: 164 }, { kind: "pdf", page: 144 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "in-getsibu",
      eyebrow: "In GetSibu",
      heading: "How GetSibu applies AI to the library",
      items: [
        {
          heading: "Suggested tags with confidence",
          body: "GetSibu can suggest tags during asset processing, and those tags can include confidence information about how strongly each one is associated with an asset.",
          icon: "sparkles",
          points: ["Reviewed by authorised users", "Confidence information on tags"],
          page: 31,
        },
        {
          heading: "Bulk approval and override",
          body: "Suggested tags can be approved in bulk, and authorised users can override tags whenever a classification does not match the team’s intended taxonomy.",
          icon: "approval",
          points: ["Large batches reviewed together", "The team’s taxonomy stays in charge"],
          page: 47,
        },
        {
          heading: "Classification by content",
          body: "AI classification helps categorise assets according to their content and available metadata, which reduces repetitive manual organisation.",
          icon: "layers",
          page: 42,
        },
        {
          heading: "Search by description",
          body: "People can describe the asset they want and receive results based on the semantic and visual information available.",
          icon: "search",
          page: 49,
        },
        {
          heading: "Duplicate detection",
          body: "Exact hashing is paired with perceptual hashing, so both identical files and visually equivalent copies can be identified.",
          icon: "copy",
          page: 40,
        },
        {
          heading: "An operational layer",
          body: "AI features are part of the asset workflow from ingestion through organisation and discovery, rather than an isolated feature.",
          icon: "workflow",
          page: 54,
        },
      ],
      sources: [{ kind: "pdf", page: 31 }, { kind: "pdf", page: 46 }, { kind: "pdf", page: 47 }, { kind: "pdf", page: 48 }, { kind: "pdf", page: 9 }, { kind: "pdf", page: 42 }, { kind: "pdf", page: 49 }, { kind: "pdf", page: 40 }, { kind: "pdf", page: 54 }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about AI asset management",
      items: [
        {
          question: "Is AI asset management the same as generative AI?",
          answer: "No. Generative AI creates new images, text or video. AI asset management analyses content that already exists so that it can be described, classified and found. One makes material; the other helps an organisation keep track of what it has.",
        },
        {
          question: "How is AI asset management different from AI tagging?",
          answer: "Tagging is one technique within it. AI asset management is the wider practice of applying analysis across a library, which also includes reading text inside files, searching by meaning and spotting duplicates.",
        },
        {
          question: "Can AI asset management work on a library that already exists?",
          answer: ["Yes. Teams can import existing assets into GetSibu, and ", { text: "asset processing", page: 143 }, " then takes them through stages such as metadata extraction, thumbnail generation and AI-related processing."],
        },
        {
          question: "What should a team test before trusting AI-generated asset information?",
          answer: "Try it on your own material. Check how well suggestions match your vocabulary, how confidence relates to accuracy on your files and how easily people can correct results, because those factors decide whether search improves or fills with noise.",
        },
      ],
      sources: [{ kind: "pdf", page: 2 }, { kind: "pdf", page: 143 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on AI in the asset library",
      variant: "compact",
      pages: [60, 45, 364, 363, 368, 377],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page, the AI explainers and the essay on how AI changes DAM." }],
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
