/**
 * 366 · What Is OCR in DAM? — /resources/what-is-ocr-in-dam
 *
 * Angle (cluster: ocr-search): vendor-neutral explainer of what OCR means in digital asset management —
 * what it reads, how it works in general, where it falls short and how it differs from neighbouring
 * techniques. AI OCR (38) owns the extraction capability, OCR-Powered Asset Search (15) the search angle,
 * Searchable Document Library (27) and AI Document Discovery (53) the document angles, FAQ 384 the yes/no answer.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Vendor-neutral explanation of OCR practice; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 366,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "centered",
      eyebrow: "Resources",
      lede: "What optical character recognition does in digital asset management, how it turns text inside images and documents into searchable information, where it falls short, and how GetSibu applies it.",
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 366 }, { kind: "pdf", page: 15 }],
    },
    {
      kind: "definition",
      id: "definition",
      eyebrow: "Definition",
      term: "OCR in DAM",
      answer: "OCR, or optical character recognition, converts text visible inside images and documents into searchable information. In a digital asset management system, that text becomes one more route to the right file.",
      detail: "Creative files often carry words that no filename or tag records: the headline on a poster, the copy on a pack shot, the title slide of a deck or the clauses of a scanned agreement. OCR reads those words from the image of the file and stores them with the asset, so a search for the words can return the file even though nobody typed them in.",
      sources: [{ kind: "pdf", page: 366 }, EXPLAINS],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Why words locked inside files matter to a library",
      body: [
        "OCR turns the words that appear inside an asset into information a library can search. Without it, a scanned brochure or a screenshot of a report is, as far as search is concerned, just a picture.",
        "Creative libraries hold a great deal of this material. Designers export slides as images, photographers capture packaging and signage, marketing teams keep scanned print proofs, and production offices file signed paperwork as PDFs. The details that identify these files are obvious to anyone who opens them, yet invisible to a search that only looks at filenames and manually entered metadata.",
        [
          "GetSibu applies OCR to formats creative teams routinely keep: it ",
          { text: "extracts text from images, PDFs, presentations and screenshots", page: 15 },
          " so that content becomes searchable, which lets someone locate a file when the information they need sits inside it rather than in its name. The extracted text then works alongside the other signals in ",
          { text: "creative asset search", page: 11 },
          ".",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Optical character recognition", "Text read from the image, not typed in", "Extracted text stored with the asset", "One search signal among several", "Quality depends on the source"],
      },
      highlight: {
        heading: "In practice",
        body: "Someone remembers a line from a campaign poster but not the file’s name. With OCR, searching for that line can surface the poster itself.",
        tags: ["Search", "Documents", "Images"],
      },
      glance: {
        heading: "Where OCR fits",
        facts: [
          { label: "Area", value: "AI and search" },
          { label: "Reads text in", value: "Images, PDFs, presentations, screenshots" },
          { label: "Feature page", value: "AI OCR", page: 38 },
          { label: "Search angle", value: "OCR-Powered Asset Search", page: 15 },
        ],
        actions: [{ kind: "route", path: "/resources", label: "More in Resources" }]
      },
      sources: [{ kind: "pdf", page: 366 }, { kind: "pdf", page: 15 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 38 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "key-terms",
      eyebrow: "Key terms",
      heading: "Terms and limits worth knowing",
      items: [
        {
          heading: "Embedded text and scanned text",
          summary: "Some files already contain machine-readable text; others hold only a picture of it.",
          icon: "document",
          body: [
            "A PDF exported from a word processor or a layout application usually carries a text layer that software can read directly. A scanned page, a photograph of a whiteboard or a slide saved as an image does not: its words exist only as shapes.",
            "OCR is what brings the second group into search. Knowing roughly how much of a library is scanned or image-based helps a team judge how much of its material depends on OCR.",
          ],
        },
        {
          heading: "Extracted text",
          summary: "The output of OCR: the words recognised in a file, kept as data.",
          icon: "text",
          body: [
            "In a DAM, extracted text is usually not a new version of the file. It sits behind the asset as information that search can use, in much the same way as metadata.",
            ["In GetSibu, once a file has been processed, the ", { text: "extracted text becomes part of the searchable asset information", page: 38 }, "."],
          ],
        },
        {
          heading: "Recognition quality",
          summary: "OCR is only as reliable as the image it reads.",
          icon: "eye",
          body: [
            "Low resolution, blur, heavy compression, steep angles, weak contrast and busy backgrounds all make characters harder to recognise. Highly stylised display type, lettering on curved packaging and handwriting are frequent sources of misread words.",
            "Because of this, extracted text is best treated as a strong aid to search rather than a perfect copy of what a file says.",
          ],
          points: ["Sharp, high-contrast sources read best", "Decorative type and handwriting are harder"],
        },
        {
          heading: "Language and script",
          summary: "Recognition depends on which languages and writing systems an engine is prepared for.",
          icon: "globe",
          body: [
            "OCR engines are trained or configured for particular scripts and languages. Mixed-language material, such as packaging printed for several markets, can be read unevenly.",
            "When evaluating any DAM, test OCR on real samples in the languages your team works with rather than assuming coverage.",
          ],
        },
        {
          heading: "OCR and AI tagging",
          summary: "OCR reads words that are present; tagging describes what an asset shows.",
          icon: "tag",
          body: [
            ["The two are often confused because both add searchable information without manual entry. ", { text: "AI tagging", page: 364 }, " suggests labels based on what a system detects in an asset. OCR does not interpret anything; it reports the characters that are there."],
            "A poster tagged for its imagery can also be found by the event name printed across it, but only once that text has been extracted.",
          ],
        },
        {
          heading: "OCR and search by meaning",
          summary: "Exact words from inside a file are different from a search that interprets intent.",
          icon: "search",
          body: [
            ["OCR gives search more words to match. ", { text: "Semantic search", page: 363 }, " works differently, matching by meaning and context rather than only by exact keywords."],
            "The two complement each other: one finds the file that contains a phrase, the other finds files that fit an idea.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 38 }, { kind: "pdf", page: 364 }, { kind: "pdf", page: 363 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "how-ocr-works",
      eyebrow: "In general",
      heading: "What happens when a file goes through OCR",
      intro: "The broad sequence is similar across systems, although tools differ in how they handle each stage.",
      steps: [
        { heading: "Prepare the image", body: "The page or image is analysed as pixels, and it may be straightened or cleaned so characters stand out from their background.", icon: "image" },
        { heading: "Find the text", body: "Areas that contain text are separated from photographs, illustrations and empty space, and lines and words are located within them.", icon: "scan" },
        { heading: "Recognise characters", body: "Shapes are matched to letters, numbers and symbols, often helped by knowledge of which words are likely in a given language.", icon: "text" },
        { heading: "Store the result", body: "The recognised words are saved as information linked to the asset, usually kept apart from the original file.", icon: "database" },
        { heading: "Index for search", body: "The text joins the search index, where queries can match it alongside filenames, tags and other metadata.", icon: "search" },
      ],
      sources: [{ kind: "pdf", page: 366 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "in-getsibu",
      eyebrow: "In GetSibu",
      heading: "How GetSibu applies OCR",
      items: [
        {
          heading: "Searched with other signals",
          body: "Extracted text is one of several sources GetSibu search draws on, together with filenames, metadata, AI-generated tags, comments and semantic information.",
          icon: "search",
          points: ["Words inside the file", "Words recorded about the file"],
          page: 11,
        },
        {
          heading: "Documents found by their content",
          body: "AI document discovery combines OCR and metadata to help users locate documents based on the information inside them.",
          icon: "document",
          points: ["Useful for contracts, briefs and reports", "No need to recall a document’s title"],
          page: 53,
        },
        {
          heading: "An indexed document library",
          body: "Documents can be indexed using extracted text, metadata and organisational tags, so PDFs and presentations need not be opened one at a time.",
          icon: "folder",
          points: ["Extracted text, metadata and tags together", "Presentations searchable by slide text"],
          page: 27,
        },
        {
          heading: "Processing you can follow",
          body: "Processing status helps a team tell an asset that has uploaded from one that is fully indexed and searchable.",
          icon: "clock",
          points: ["Uploaded is not the same as searchable", "Queued, processing or ready"],
          page: 145,
        },
        {
          heading: "AI with a practical purpose",
          body: "OCR is among the library problems GetSibu focuses its AI capabilities on, alongside discovery, organisation, tagging and duplicate detection.",
          icon: "sparkles",
          points: ["Less metadata entered by hand", "Part of the wider AI workflow"],
          page: 60,
        },
      ],
      sources: [{ kind: "pdf", page: 11 }, { kind: "pdf", page: 53 }, { kind: "pdf", page: 27 }, { kind: "pdf", page: 15 }, { kind: "pdf", page: 145 }, { kind: "pdf", page: 144 }, { kind: "pdf", page: 60 }, { kind: "pdf", page: 377 }, { kind: "pdf", page: 54 }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about OCR in digital asset management",
      items: [
        {
          question: "What does OCR stand for?",
          answer: "Optical character recognition. The name describes the method: characters are recognised from how they look in an image, rather than read from text already stored as data.",
        },
        {
          question: "Can GetSibu read text in photographs as well as in documents?",
          answer: ["Images are among the file types GetSibu extracts text from, together with PDFs, presentations and screenshots; the ", { text: "AI OCR", page: 38 }, " page covers the capability. How much text is recognised in a photograph depends on how clearly it appears."],
        },
        {
          question: "How accurate is OCR?",
          answer: "There is no single figure that holds across libraries. Clean, printed text in a sharp image reads well; stylised type, handwriting and poor scans read less reliably, so testing with your own files is the most useful measure.",
        },
        {
          question: "Does OCR make tagging and metadata unnecessary?",
          answer: ["No. OCR captures the words a file contains, while ", { text: "asset metadata", page: 374 }, " records information about the file, such as its creator, format and keywords. A library needs both to answer different questions."],
        },
      ],
      sources: [{ kind: "pdf", page: 15 }, { kind: "pdf", page: 38 }, { kind: "pdf", page: 374 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on text inside assets",
      variant: "compact",
      pages: [38, 15, 53, 27, 384, 364],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the matching FAQ." }],
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
