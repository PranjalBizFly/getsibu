/**
 * 53 · AI Document Discovery — /features/ai-document-discovery
 *
 * Angle (clusters ocr-search, ai-discovery): OCR combined with metadata to locate documents by the
 * information inside them. Extraction itself is 38; text search technique is 15; the document library is 27.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how creative organisations look for documents; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 53,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "AI",
      lede: "See how text read from inside a file and the details recorded about it work as a pair, which everyday requests each half answers, and what keeps a document search from landing on the wrong draft.",
      visual: { diagram: "search-signals", focus: "ocr" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 53 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Two kinds of clue brought to one search",
      body: [
        "AI document discovery in GetSibu brings OCR and metadata together. The combination helps users locate documents on the strength of information contained inside them, not just what they are called.",
        "People rarely recall a document completely. A producer remembers that a release mentioned a particular harbour and was sent over by the location manager; a strategist knows the deck contained a phrase about younger audiences and dates from last autumn. Each memory is half about the words inside the file and half about its circumstances. A search that can use only one half leaves the other unused, and the result list either stays too long or misses the file altogether.",
        [
          "The inside half comes from ",
          { text: "text extraction", page: 38 },
          ", which makes the words in images, documents, presentations and screenshots searchable. The outside half comes from ",
          { text: "asset metadata search", page: 23 },
          ", which lets users search available metadata alongside tags and extracted content.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Words from inside the document", "Facts recorded about the document", "Partial memories combined", "Shorter, more precise result lists", "Briefs, releases, decks and reports"],
      },
      highlight: {
        heading: "In practice",
        body: "A search for a remembered phrase returns a dozen presentations. Narrowing to those that came from the strategy team’s old project folder leaves the single deck that was needed.",
        tags: ["Strategists", "Producers", "Documents"],
      },
      glance: {
        heading: "Document discovery in brief",
        facts: [
          { label: "Area", value: "AI" },
          { label: "Combines", value: "OCR and metadata" },
          { label: "Extraction by", value: "AI OCR", page: 38 },
          { label: "Library view", value: "Searchable Document Library", page: 27 },
        ],
        actions: [{ kind: "route", path: "/features/ai", label: "More in AI" }]
      },
      sources: [{ kind: "pdf", page: 53 }, { kind: "pdf", page: 38 }, { kind: "pdf", page: 23 }, { kind: "pdf", page: 27 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "clues",
      eyebrow: "Inside and outside",
      heading: "Everyday document requests and the clues that answer them",
      intro: "Most requests mix a detail from the text with a detail about the file.",
      columns: ["Clue from inside the text", "Clue from the metadata"],
      rows: [
        { label: "A campaign brief", cells: ["The campaign name or a key message", "Who created it and where it was filed"] },
        { label: "A signed location release", cells: ["The name of the location", "The production’s custom keywords"] },
        { label: "Brand guidelines", cells: ["A section heading such as typography", "The creator and the file path"] },
        { label: "A scanned call sheet", cells: ["The shoot address printed on the page", "The uploader and the upload folder"] },
        { label: "A research report", cells: ["A phrase from the findings", "The author recorded as creator"] },
      ],
      sources: [{ kind: "pdf", page: 53 }, { kind: "pdf", page: 15 }, { kind: "pdf", page: 22 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "reliable-results",
      eyebrow: "Considerations",
      heading: "What helps document searches land on the right file",
      items: [
        {
          heading: "Folder paths are context worth keeping",
          summary: "Where a document used to live often records what it belonged to.",
          icon: "folder",
          body: [
            ["Old folder names such as a client, a year or a project code are exactly the circumstances people remember. During migration, ", { text: "file paths can be preserved", page: 132 }, " along with EXIF, XMP, creators and custom keywords, so that context is not lost in the move."],
          ],
        },
        {
          heading: "Common words need a second clue",
          summary: "Phrases that appear in every document narrow nothing on their own.",
          icon: "filter",
          body: [
            "Company names, standard disclaimers and template headings appear across hundreds of files. When the remembered wording is that ordinary, pair it with something recorded about the document, such as its date or where it was filed, or with a rarer word from the same page.",
          ],
        },
        {
          heading: "Drafts belong with their final",
          summary: "Documents revised many times can crowd results with near-identical text.",
          icon: "history",
          body: [
            ["A contract negotiated through several rounds shares most of its wording across every draft. ", { text: "Document version management", page: 99 }, " lets documents and presentations be replaced while their historical versions are retained, rather than living on as separate files with similar text."],
          ],
        },
        {
          heading: "Sensitive content is easier to find, too",
          summary: "Once text is searchable, where a document lives matters more.",
          icon: "shield",
          body: [
            ["Contracts, releases and pricing proposals become more discoverable once their words can be searched. GetSibu supports a ", { text: "default-deny model", page: 154 }, " in which new folders can remain private until access is explicitly granted, which suits material of that kind."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 132 }, { kind: "pdf", page: 99 }, { kind: "pdf", page: 154 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A location release traced before a campaign extends",
      team: "An advertising agency",
      situation: "An advertising agency’s client wants to run last year’s coastal campaign in a new market. The account lead must confirm the location release before anything is agreed, but nobody remembers where the scanned release was filed.",
      steps: [
        { heading: "The printed name is searched", body: ["A production coordinator searches for the name of the harbour, which appears in the release itself; ", { text: "OCR-powered search", page: 15 }, " can locate documents when the information exists inside the file rather than its filename."] },
        { heading: "The recorded details narrow it", body: "Many shoot documents mention the harbour, so the coordinator focuses on files created by the production’s location manager." },
        { heading: "The re-signed version is checked", body: "The release was re-signed after the shoot, and the earlier version is kept in the asset’s history, so the coordinator can compare the two before answering." },
        { heading: "The account lead is brought in", body: ["The coordinator ", { text: "mentions the account lead", page: 66 }, " in a discussion on the document, so the question about the new market is answered next to the release itself."] },
      ],
      outcome: "The agency answers its client with the actual release in hand, found through a detail printed inside it and a detail about who filed it.",
      link: { page: 219, label: "GetSibu for Advertising Agencies" },
      sources: [{ kind: "pdf", page: 15 }, { kind: "pdf", page: 23 }, { kind: "pdf", page: 99 }, { kind: "pdf", page: 66 }, { kind: "pdf", page: 219 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about AI document discovery",
      items: [
        {
          question: "How is AI document discovery different from OCR-powered asset search?",
          answer: [{ text: "OCR-powered asset search", page: 15 }, " finds images, PDFs, presentations and screenshots by the words inside them. Document discovery applies that to documents and adds what is recorded about each file, such as its creator or folder, as a second clue."],
        },
        {
          question: "What if I only half remember the wording inside a document?",
          answer: ["Search for the most distinctive part you are sure of, such as a name, a product code or a place, rather than a paraphrase of a whole sentence. Then let a recorded detail do the rest: ", { text: "creators, file paths and custom keywords", page: 22 }, " can all be part of the asset record."],
        },
        {
          question: "Which documents gain most from AI document discovery?",
          answer: "Those saved under unhelpful names and reopened long afterwards: scanned releases and agreements, briefs, call sheets, research reports and presentations exported as images.",
        },
        {
          question: "Is AI document discovery useful for a large library of existing documents?",
          answer: ["Especially so. In a ", { text: "searchable document library", page: 27 }, ", documents can be indexed using extracted text, metadata and organisational tags, so nobody has to open every PDF or presentation to find one."],
        },
      ],
      sources: [{ kind: "pdf", page: 53 }, { kind: "pdf", page: 15 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 27 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on finding documents",
      variant: "compact",
      pages: [38, 15, 27, 23, 366, 384],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
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
