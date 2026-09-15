/**
 * 15 · OCR-Powered Asset Search — /features/ocr-powered-asset-search
 *
 * Angle (cluster: ocr-search): the search angle — finding images, PDFs, presentations and screenshots by the
 * text inside them, and how to search for that text well. AI OCR (38) owns the extraction capability,
 * What Is OCR in DAM? (366) the neutral explainer (how OCR works, recognition quality, language), Searchable
 * Document Library (27) and AI Document Discovery (53) the document angles, FAQ 384 the yes/no answer.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of searching for text inside creative files; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 15,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Search & Discovery",
      lede: "Find images, PDFs, presentations and screenshots by the words that appear inside them, and learn how to search for that text so a remembered headline, slide title or line of small print leads you back to the file.",
      visual: { diagram: "search-signals", focus: "ocr" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 15 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "When the words you remember are inside the file",
      body: [
        "GetSibu extracts the text in images, PDFs, presentations and screenshots so that it can be searched. People can then locate documents and visual assets when the detail they need sits inside a file rather than in its name.",
        "Colleagues often remember what a file said long after they have forgotten what it was called. A marketer recalls the headline on last spring’s poster; a producer knows the permit mentioned a particular street; a designer remembers the title of the slide about brand colours. None of that is likely to be in the filename, and little of it will be in the keywords.",
        [
          "Words inside files are one of the signals of ",
          { text: "creative asset search", page: 11 },
          ". The extraction behind them is covered under ",
          { text: "AI OCR", page: 38 },
          ", and the technique itself is explained in ",
          { text: "What Is OCR in DAM?", page: 366 },
          ".",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Search the words printed inside files", "Images, PDFs, presentations, screenshots", "No filename required", "Distinctive phrases work best", "Text search paired with filters"],
      },
      highlight: {
        heading: "In practice",
        body: "Asked for “the deck with the regional launch dates”, a coordinator searches for a phrase from its title slide instead of guessing what the file was named.",
        tags: ["Presentations", "Documents", "Screenshots"],
      },
      glance: {
        heading: "Text search in brief",
        facts: [
          { label: "Area", value: "Search & Discovery" },
          { label: "Searches text from", value: "Images, PDFs, presentations and screenshots" },
          { label: "Short answer", value: "Can GetSibu Search Inside Documents?", page: 384 },
          { label: "For documents", value: "AI Document Discovery", page: 53 },
        ],
        actions: [{ kind: "route", path: "/features/search-and-discovery", label: "More in Search & Discovery" }]
      },
      sources: [{ kind: "pdf", page: 15 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 38 }, { kind: "pdf", page: 366 }, { kind: "pdf", page: 384 }, { kind: "pdf", page: 53 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "by-file-type",
      eyebrow: "By file type",
      heading: "What people look for inside each kind of file",
      tabs: [
        {
          label: "Images",
          heading: "Words that appear in a picture",
          icon: "image",
          body: [
            "Photographs and graphics carry text more often than their filenames suggest: a headline on a campaign visual, a product name on packaging, a sign in a location photograph, an offer on a shelf strip.",
            "For finished artwork the copy is often the most distinctive thing about it, so searching for the words can be the shortest route to the right version.",
          ],
          points: ["Campaign headlines and offers", "Product names on packaging"],
          link: { page: 26, label: "Searchable Image Library" },
        },
        {
          label: "PDFs",
          heading: "Documents that were never given useful names",
          icon: "document",
          body: [
            "Briefs, guidelines, call sheets, contracts and print proofs tend to be saved as PDFs called “scan” or “final”. The words on the page are what identify them: a client’s name, a project reference, a clause or an address.",
            "Searching for one of those words can bring back the document without anyone first recalling where it was filed.",
          ],
          points: ["Project references and client names", "Scanned proofs and signed paperwork"],
          link: { page: 27, label: "Searchable Document Library" },
        },
        {
          label: "Presentations",
          heading: "Slides remembered by their headings",
          icon: "layers",
          body: [
            "A presentation is usually recalled through one slide: a chart title, a section heading or the name of a market. Decks are also copied and adapted, so several files can share a filename while saying different things.",
            "Searching the slide text can pick out the version that mentions the right market from its near-identical relatives.",
          ],
          points: ["Chart titles and section headings", "Adapted decks told apart by their words"],
        },
        {
          label: "Screenshots",
          heading: "Captures of things that may no longer exist",
          icon: "camera",
          body: [
            "Screenshots record web pages, social posts, store listings and sign-off messages exactly as they appeared. They are saved in a hurry, named by timestamp and seldom tagged.",
            "The text they hold, whether a caption, a page heading or a quoted message, is often the only practical way to find one again.",
          ],
          points: ["Captions and page headings", "Evidence of how something looked"],
        },
      ],
      sources: [{ kind: "pdf", page: 15 }, { kind: "pdf", page: 26 }, { kind: "pdf", page: 27 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "searching-for-text",
      eyebrow: "Step by step",
      heading: "Running a search for text inside a file",
      intro: "Good results come from choosing words the file really contains, then confirming the match.",
      steps: [
        { heading: "Recall the wording", body: "Start from words you are fairly sure appear in the file, such as a headline, a heading, a product name or a reference.", icon: "text" },
        { heading: "Prefer rare words", body: "Names and unusual phrases narrow results far more than common words; a campaign slogan makes a far better query than “summer”.", icon: "search" },
        { heading: "Filter by format", body: "If you know it was a presentation or a PDF, a format filter keeps images that share the same words out of the way.", icon: "filter", page: 19 },
        { heading: "Check the match", body: "Preview a result to confirm it is the file you meant, since the same phrase often appears in several drafts.", icon: "eye" },
        { heading: "Keep a recurring search", body: "If the same wording will be needed again, such as a standard legal line, save the search and share it through a URL.", icon: "collection", page: 17 },
      ],
      sources: [{ kind: "pdf", page: 15 }, { kind: "pdf", page: 19 }, { kind: "pdf", page: 30 }, { kind: "pdf", page: 17 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "Tracking down a retired tagline",
      team: "A brand team",
      situation: "A brand team has retired a campaign tagline. Before anyone reuses old material, it needs to find the artwork, decks and documents in the library that still carry the line.",
      steps: [
        { heading: "Search for the old line", body: "The tagline is printed on posters and title slides rather than written into filenames, so a brand manager searches for its exact wording." },
        { heading: "Sort what comes back", body: "Filters for format and date separate recent presentations, the most likely to be reused, from older print artwork." },
        { heading: "Confirm each result", body: "Each match is previewed to check whether the line appears in final artwork or only in an early draft." },
        { heading: "Retire what should stay out of use", body: ["Files worth keeping for the record are ", { text: "archived", page: 108 }, ", which retains them without letting them interfere with everyday discovery."] },
        { heading: "Replace what is still needed", body: ["Artwork that remains in use is updated and ", { text: "replaced in place", page: 91 }, ", with the earlier version kept in the asset’s history."] },
      ],
      outcome: "The old line is less likely to reappear in new work, and the team found its files through the words they contained rather than by reopening every campaign folder.",
      link: { page: 214, label: "GetSibu for Brand Teams" },
      sources: [{ kind: "pdf", page: 15 }, { kind: "pdf", page: 19 }, { kind: "pdf", page: 30 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 214 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about OCR-powered asset search",
      items: [
        {
          question: "Can OCR-powered asset search find text inside a screenshot?",
          answer: "Yes. Screenshots are among the file types GetSibu extracts text from, together with images, PDFs and presentations, so the words they capture can be searched.",
        },
        {
          question: "Does a search for text inside files also match filenames and tags?",
          answer: "Yes. Extracted text is only one of the kinds of information GetSibu search draws on, alongside filenames, metadata and AI-generated tags, so a result can appear for a reason other than the words inside it.",
        },
        {
          question: "When does the text in a newly uploaded file become searchable?",
          answer: ["After processing. Once an asset has been processed, its ", { text: "extracted text becomes part of the searchable asset information", page: 38 }, ", and processing status shows whether a file is fully indexed yet."],
        },
      ],
      sources: [{ kind: "pdf", page: 15 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 38 }, { kind: "pdf", page: 145 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on searching the text in assets",
      variant: "compact",
      pages: [38, 366, 27, 53, 384, 11],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
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
