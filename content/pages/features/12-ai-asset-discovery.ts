/**
 * 12 · AI Asset Discovery — /features/ai-asset-discovery
 *
 * Angle (cluster: ai-discovery, primary): finding files by what appears inside them rather than depending
 * entirely on manual metadata, and why that matters in large libraries of visually similar files.
 * Searchable Video/Image Library (25, 26) own the media-type angles, AI Creative Search (49) the outcome of
 * describing an asset, AI-Powered Image Discovery (52) and AI Document Discovery (53) their media.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of content-based discovery in creative libraries; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 12,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Search & Discovery",
      lede: "Understand how AI helps you find files by what they contain rather than only by the keywords someone remembered to enter, and why that matters most when a library is full of images and footage that look almost the same.",
      visual: { diagram: "library-search" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 12 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Discovery that starts from the content itself",
      body: [
        "AI asset discovery helps people find files through what appears inside an asset, instead of relying entirely on metadata entered by hand. GetSibu positions it as particularly useful for large libraries that hold thousands of visually similar files.",
        "Manual metadata fails in familiar ways. Uploaders are busy, so keywords are sparse or missing. Two people describe the same picture differently. A keyword chosen for one campaign says nothing about the next use someone finds for the file. And when a shoot produces dozens of frames that differ only in angle, crop or lighting, shared keywords stop telling them apart at all.",
        [
          "Content-aware discovery rests on ",
          { text: "AI media understanding", page: 43 },
          ", which interprets the content of visual assets and makes that information available to search and organisation. The same principle runs through a ",
          { text: "searchable image library", page: 26 },
          " and through ",
          { text: "documents located by the information inside them", page: 53 },
          ".",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Found by what the asset contains", "Less dependence on manual keywords", "Objects, mood and colour as detail", "Confidence information on suggestions", "People approve what AI proposes", "Useful in look-alike libraries"],
      },
      highlight: {
        heading: "In practice",
        body: "A picture editor hunting for an untagged shot from an old launch can search for what is in the frame, rather than for keywords that nobody added at the time.",
        tags: ["Picture editors", "E-commerce", "Photography"],
      },
      glance: {
        heading: "Where AI discovery fits",
        facts: [
          { label: "Area", value: "Search & Discovery" },
          { label: "Works from", value: "What appears inside an asset" },
          { label: "Builds on", value: "AI Media Indexing", page: 50 },
          { label: "Leads to", value: "AI Creative Search", page: 49 },
        ],
        actions: [{ kind: "route", path: "/features/search-and-discovery", label: "More in Search & Discovery" }]
      },
      sources: [{ kind: "pdf", page: 12 }, { kind: "pdf", page: 43 }, { kind: "pdf", page: 44 }, { kind: "pdf", page: 26 }, { kind: "pdf", page: 53 }, { kind: "pdf", page: 50 }, { kind: "pdf", page: 49 }, EXPLAINS],
    },
    {
      kind: "before-after",
      id: "before-after",
      eyebrow: "What changes",
      heading: "From keyword-dependent to content-aware discovery",
      beforeLabel: "Metadata entered by hand only",
      afterLabel: "Content-aware discovery",
      before: [
        "Files without keywords are effectively invisible",
        "Results depend on who uploaded a file",
        "Similar frames told apart by opening each one",
        "Different words for one thing split the results",
        "A tagging backlog after every shoot",
      ],
      after: [
        "Processing adds information about what assets show",
        "Objects, visual mood and colour become searchable detail",
        "Manual keywords still count alongside AI information",
        "Fewer files classified by hand",
        "Library order kept up as the collection grows",
      ],
      sources: [{ kind: "pdf", page: 12 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 34 }, { kind: "pdf", page: 35 }, { kind: "pdf", page: 36 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 57 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "how-assets-become-discoverable",
      eyebrow: "Step by step",
      heading: "How an asset becomes discoverable by its content",
      intro: "Content-based information is added as part of the asset workflow rather than as a separate job.",
      steps: [
        { heading: "The asset arrives", body: "Files enter the library from connected storage sources or direct uploads, often in large batches after a shoot.", icon: "upload" },
        { heading: "Processing begins", body: "Each asset moves through stages such as metadata extraction, thumbnail generation and AI-related processing.", icon: "refresh", page: 143 },
        { heading: "Signals are prepared", body: "AI media indexing processes supported visual, textual and metadata signals so the content is ready for intelligent discovery.", icon: "layers", page: 50 },
        { heading: "People review suggestions", body: "Authorised users review the suggested tags and keep the ones that fit how the team classifies its work.", icon: "approval", page: 31 },
        { heading: "Search uses the result", body: "Someone describes the asset they need and receives results drawn from available semantic and visual information.", icon: "search" },
      ],
      sources: [{ kind: "pdf", page: 121 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 50 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 49 }, { kind: "pdf", page: 54 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "look-alike-libraries",
      eyebrow: "Considerations",
      heading: "Working with libraries full of look-alike files",
      items: [
        {
          heading: "Near-identical frames from one shoot",
          summary: "A session can produce many images that share a subject, a set and a filename pattern.",
          icon: "camera",
          body: [
            "Product, fashion and event photography all generate long runs of alternates. To a keyword search they are the same file repeated; to the person choosing, the difference between them is the whole point.",
            ["Content detail narrows those runs. ", { text: "Object detection", page: 34 }, " can identify objects in supported media, and the resulting tags can later contribute to discovery, which can help separate a frame showing the product beside a cup from one showing it alone."],
          ],
        },
        {
          heading: "Similar is not the same as duplicate",
          summary: "Alternates are legitimate choices; copies are clutter.",
          icon: "copy",
          body: [
            "A library of similar files usually contains both. Alternates from a shoot deserve to stay, while the same image exported twice under different names only adds noise to every result list.",
            ["", { text: "Duplicate detection", page: 40 }, " combines exact and perceptual hashing to identify identical files and visually equivalent copies, including re-encoded or renamed ones, so genuine alternates are easier to see."],
          ],
        },
        {
          heading: "Confidence helps judge a match",
          summary: "Not every AI suggestion is equally certain.",
          icon: "gauge",
          body: [
            ["", { text: "Tag confidence", page: 46 }, " indicates how strongly the system associates a tag with an asset. When many files look alike, that information helps reviewers decide which suggestions to accept quickly and which deserve a closer look."],
          ],
        },
        {
          heading: "Text is content too",
          summary: "Packaging, labels and slides often differ only in their words.",
          icon: "text",
          body: [
            "Two pack shots of a product range can be visually identical apart from the flavour printed on the label. Two decks can share every image and differ in a single market name.",
            ["", { text: "AI OCR", page: 38 }, " extracts text from images, documents, presentations and screenshots, and the extracted text becomes part of the searchable asset information."],
          ],
        },
        {
          heading: "Where manual metadata still matters",
          summary: "Some context cannot be seen in the asset at all.",
          icon: "database",
          body: [
            "Which client commissioned a shoot, what usage was agreed and which campaign a file belongs to are facts about an asset rather than things visible in it. AI analysis reduces the typing needed to describe content, not the need to record context.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 34 }, { kind: "pdf", page: 40 }, { kind: "pdf", page: 46 }, { kind: "pdf", page: 38 }, { kind: "pdf", page: 12 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A product photography archive searched by content",
      team: "An e-commerce team",
      situation: "An e-commerce team holds years of product photography shot on the same set under the same lighting. Keywords were added by whoever uploaded each batch, and many were never added at all.",
      steps: [
        { heading: "The archive comes in", body: ["The team moves the existing collection across with ", { text: "bulk import", page: 130 }, " rather than uploading each file by hand."] },
        { heading: "Suggestions arrive with processing", body: "Tags are suggested while the images are processed, so nobody has to classify the archive from scratch." },
        { heading: "The team reviews in bulk", body: "A merchandiser approves suggestions across whole product ranges and overrides the handful that use the wrong product term." },
        { heading: "A request is answered from content", body: "Asked for the mug shown with a folded tea towel, a designer describes the shot and works through results based on what the images show." },
        { heading: "Copies are cleared away", body: "Duplicate detection identifies renamed and re-encoded copies, leaving the genuine alternates for the team to choose between." },
      ],
      outcome: "Old product photography becomes usable again, and the team no longer needs to remember which uploader tagged which season to find a shot.",
      link: { page: 230, label: "GetSibu for E-Commerce Brands" },
      sources: [{ kind: "pdf", page: 130 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 47 }, { kind: "pdf", page: 48 }, { kind: "pdf", page: 49 }, { kind: "pdf", page: 40 }, { kind: "pdf", page: 112 }, { kind: "pdf", page: 230 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about AI asset discovery",
      items: [
        {
          question: "Why is AI asset discovery particularly useful in libraries of similar files?",
          answer: "When many files look alike, filenames and shared keywords no longer distinguish them. Information about what each file actually shows gives a search something specific to match.",
        },
        {
          question: "Does AI asset discovery help with video footage as well as stills?",
          answer: ["Yes. Footage has to be played before it can be judged, which makes describing it by hand slow. In a ", { text: "searchable video library", page: 25 }, ", AI-generated information added during indexing helps relevant clips surface without anyone watching each one first."],
        },
        {
          question: "Which kinds of assets does AI asset discovery work with?",
          answer: ["AI analysis applies to supported media. ", { text: "AI-powered image discovery", page: 52 }, " covers photographs, product shots and campaign images, while documents are located through OCR combined with metadata."],
        },
      ],
      sources: [{ kind: "pdf", page: 12 }, { kind: "pdf", page: 25 }, { kind: "pdf", page: 52 }, { kind: "pdf", page: 53 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on finding files by their content",
      variant: "compact",
      pages: [43, 34, 46, 40, 52, 49],
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
