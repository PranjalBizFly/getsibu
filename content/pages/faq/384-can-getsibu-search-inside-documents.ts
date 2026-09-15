/**
 * 384 · Can GetSibu Search Inside Documents? — /faq/can-getsibu-search-inside-documents
 *
 * Angle (cluster: ocr-search): the direct yes, what decides whether a document turns up, and a short trial an
 * evaluator can run on their own files. AI OCR (38) owns the extraction, OCR-Powered Asset Search (15) the
 * search angle, 27 and 53 the document angles, What Is OCR in DAM? (366) the technique.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Practical explanation of searching document text in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 384,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "centered",
      eyebrow: "FAQ",
      lede: "The short answer on finding documents in GetSibu by the words inside them, what affects whether a document turns up, and a simple way to try it with your own files.",
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 384 }],
    },
    {
      kind: "definition",
      id: "short-answer",
      eyebrow: "Short answer",
      term: "Can GetSibu Search Inside Documents?",
      answer: "Yes. OCR lets supported documents and images become searchable by the text extracted from them.",
      detail: "A search can therefore reach a file through words printed inside it, such as a clause in a scanned agreement or a heading on a slide, even when its filename says nothing of the kind. Once the file has been processed, the extracted text becomes part of the asset’s searchable information.",
      sources: [{ kind: "pdf", page: 384 }, { kind: "pdf", page: 38 }, EXPLAINS],
    },
    {
      kind: "overview",
      id: "longer-answer",
      heading: "When the words you remember are inside the file",
      body: [
        "Extracted text is one of several routes to a file. Users can search available metadata alongside tags and extracted content, so a document may be found through what it says, how it is tagged or what is recorded about it.",
        "This matters most for documents a creative organisation holds but seldom names well: signed releases, supplier quotes, research summaries, brand guidelines and decks exported for a single meeting. People tend to remember a phrase or a detail from them, not the filename somebody chose on the day they were saved.",
        [
          { text: "AI Document Discovery", page: 53 },
          " looks at locating documents through OCR combined with metadata, and ",
          { text: "Searchable Document Library", page: 27 },
          " at indexing them so nobody has to open each PDF or presentation in turn. For the technique itself, see ",
          { text: "What Is OCR in DAM?", page: 366 },
          ".",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Optical character recognition (OCR)", "Supported documents and images", "Text searched with metadata and tags", "The document’s own wording", "Searchable once processed"],
      },
      highlight: {
        heading: "In practice",
        body: "A producer recalls that a location release mentioned a particular street, but not what the file was called. Searching for the street name can bring the scanned release back.",
        tags: ["Production", "Paperwork", "Search"],
      },
      glance: {
        heading: "Document search in brief",
        facts: [
          { label: "Area", value: "Search & Discovery" },
          { label: "Extraction", value: "AI OCR", page: 38 },
          { label: "File types", value: "Documents, presentations, screenshots, images" },
          { label: "Matched with", value: "Metadata and tags" },
        ],
        actions: [{ kind: "route", path: "/faq", label: "More in FAQs" }]
      },
      sources: [{ kind: "pdf", page: 384 }, { kind: "pdf", page: 23 }, { kind: "pdf", page: 53 }, { kind: "pdf", page: 27 }, { kind: "pdf", page: 366 }, { kind: "pdf", page: 38 }, { kind: "pdf", page: 15 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "what-it-depends-on",
      eyebrow: "What it depends on",
      heading: "What decides whether a document turns up",
      items: [
        {
          heading: "Legible text in the file",
          summary: "Recognition can only recover what is clear enough to read.",
          icon: "eye",
          body: [
            "Sharp scans and clean exports give OCR its best material. Faint photocopies, handwritten notes and words set at an angle or over busy imagery are harder, so the text recovered from them may be incomplete.",
          ],
        },
        {
          heading: "Pictures that contain words",
          summary: "The answer is not limited to PDFs and slide decks.",
          icon: "image",
          page: 26,
          body: [
            "Images become searchable through metadata, tags, visual characteristics and extracted information. A photographed event poster or a packshot with printed copy can therefore be found through its words as well as its appearance.",
          ],
        },
        {
          heading: "Search terms that match the page",
          summary: "Searching with the document’s own terms gives its extracted text the most direct match.",
          icon: "text",
          body: [
            [
              "Extracted text holds the words that appear, not a summary of them. If an agreement says “licensor” rather than “rights holder”, searching for the agreement’s own term is the safer choice. Searching by meaning rather than exact wording is a different technique, described under ",
              { text: "semantic search", page: 39 },
              ".",
            ],
          ],
        },
        {
          heading: "Metadata still does its part",
          summary: "Recorded information separates files that read almost the same.",
          icon: "database",
          page: 22,
          body: [
            "Two regional editions of a brochure can share nearly every sentence. Metadata such as creators, file paths and custom keywords, which can become part of the asset record, is what tells them apart when the extracted text cannot.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 26 }, { kind: "pdf", page: 39 }, { kind: "pdf", page: 22 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "try-it",
      eyebrow: "Try it yourself",
      heading: "Testing document search with your own files",
      intro: "A short trial answers the question for your material more reliably than any description.",
      steps: [
        { heading: "Gather a mixed sample", body: "Choose some scans, exported PDFs, slide decks and screenshots whose contents you know well, including a few with unhelpful filenames.", icon: "document" },
        { heading: "Upload the sample", body: "Add the files by drag and drop, which suits a small trial batch like this one.", icon: "upload", page: 127 },
        { heading: "Let indexing finish", body: "An upload that has succeeded is not yet the same as a file that is fully indexed and searchable, and processing status tells the two apart.", icon: "clock", page: 145 },
        { heading: "Search for inside phrases", body: "Look for words that appear only inside the files, never in their names, and note which documents come back.", icon: "search", page: 15 },
        { heading: "Share what worked", body: "A search worth repeating can be saved and shared through a URL, so colleagues can check the results for themselves.", icon: "users", page: 17 },
      ],
      sources: [{ kind: "pdf", page: 127 }, { kind: "pdf", page: 145 }, { kind: "pdf", page: 15 }, { kind: "pdf", page: 17 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Follow-up questions about searching inside documents",
      items: [
        {
          question: "Can a search for words inside documents be narrowed to one file format?",
          answer: [
            "Yes. ",
            { text: "Advanced media filters", page: 19 },
            " for categories, formats and dates can be combined with a text search, so a phrase can be looked for among one kind of file at a time.",
          ],
        },
        {
          question: "What can be done about documents whose text cannot be read reliably?",
          answer: "Give them the words that recognition cannot recover. Tags carrying the terms people will search for help, and where a clean export of the same document exists, it gives OCR far better material than a faint scan.",
        },
        {
          question: "Can searching inside documents help find decks that still repeat an outdated claim?",
          answer: "It can help. Searching for the claim’s exact wording can bring back presentations and PDFs whose extracted text contains it, so a team can review them before they are reused. Files whose text could not be read will not appear, so treat the results as a starting point.",
        },
        {
          question: "Can asset search be built into another application, such as an intranet?",
          answer: [
            "Applications can integrate asset search into custom interfaces and workflows through the ",
            { text: "Asset Search API", page: 263 },
            ", and ",
            { text: "API documentation", page: 273 },
            " gives developers the information they need to build against the platform.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 19 }, { kind: "pdf", page: 13 }, { kind: "pdf", page: 15 }, { kind: "pdf", page: 263 }, { kind: "pdf", page: 273 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on text inside documents",
      variant: "compact",
      pages: [38, 15, 53, 27, 366, 19],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Start Your Creative Library",
      conversionPage: 391,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 391 }],
    },
  ],
};

export default page;
