/**
 * 38 · AI OCR — /features/ai-ocr
 *
 * Angle (cluster: ocr-search, primary): the extraction capability itself — where text extraction sits in an asset's
 * processing, what it finds in each kind of file, and what becomes part of the searchable asset information.
 * What Is OCR in DAM? (366) owns the vendor-neutral explanation (quality, languages, how OCR works); OCR-Powered
 * Asset Search (15) owns finding assets by their text; AI Document Discovery (53) and Searchable Document Library
 * (27) own the document angles; FAQ 384 the yes answer.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of text in creative files and how teams handle it; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 38,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "AI",
      lede: "What text extraction recovers from different kinds of creative file, why words held only as pixels stay out of a library’s reach until then, and how the extracted text becomes part of the searchable asset information in GetSibu.",
      visual: { diagram: "search-signals", focus: "ocr" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 38 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Text taken out of files and kept with the asset",
      body: [
        "OCR in GetSibu extracts text from images, documents, presentations and screenshots. When a file has been processed, the words recovered from it become part of that asset’s searchable information, next to what is already recorded about it.",
        "Text inside a creative file is an odd kind of information. Anyone who opens the file can read it at a glance, yet until it is extracted, software has only shapes to work with. Extraction is the step that converts those shapes into characters a library can keep, and its value shows up later, each time someone looks for words the file contains.",
        [
          "Extraction is the foundation other capabilities build on. ",
          { text: "OCR-powered asset search", page: 15 },
          " covers finding assets by the text inside them, ",
          { text: "AI document discovery", page: 53 },
          " combines OCR with metadata to locate documents, and ",
          { text: "What Is OCR in DAM?", page: 366 },
          " explains the technique in general terms.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Text extracted as files are processed", "Images, documents, presentations, screenshots", "Part of the searchable asset information", "Words recovered from pixels", "The groundwork for OCR-powered search"],
      },
      highlight: {
        heading: "In practice",
        body: "A screenshot of a partner’s announcement holds its headline as extracted text as well as pixels once processing is complete, so the words are no longer locked inside the picture.",
        tags: ["Images", "Documents", "Screenshots"],
      },
      glance: {
        heading: "Text extraction in brief",
        facts: [
          { label: "Area", value: "AI" },
          { label: "Reads text in", value: "Images, documents, presentations, screenshots" },
          { label: "Happens during", value: "Asset Processing", page: 143 },
          { label: "Supports", value: "Searchable Document Library", page: 27 },
        ],
        actions: [{ kind: "route", path: "/features/ai", label: "More in AI" }]
      },
      sources: [{ kind: "pdf", page: 38 }, { kind: "pdf", page: 15 }, { kind: "pdf", page: 53 }, { kind: "pdf", page: 366 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 27 }, EXPLAINS],
    },
    {
      kind: "workflow",
      id: "extraction-journey",
      eyebrow: "Step by step",
      heading: "Where text extraction sits in a file’s journey",
      stages: [
        { label: "Arrival", body: "An image, document, presentation or screenshot enters the library from a connected storage source or a direct upload." },
        { label: "Processing", body: "The file moves through processing stages, from metadata extraction and thumbnail generation to AI-related work." },
        { label: "Extraction", body: "Characters visible in the file are recognised and recovered as text rather than left as part of the image." },
        { label: "Searchable information", body: "The extracted text joins the asset’s information, where it can be searched alongside available metadata and tags.", page: 23 },
      ],
      sources: [{ kind: "pdf", page: 121 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 38 }, { kind: "pdf", page: 23 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "file-types",
      eyebrow: "By file type",
      heading: "What extraction recovers from each kind of file",
      tabs: [
        {
          label: "Images",
          heading: "Words that happen to appear in a picture",
          icon: "image",
          body: [
            "In photography, text is usually incidental: the name on a product label, a shop sign, a banner at an event, a date on a poster in the background. Nobody tagging the image thinks to record it, yet it is often exactly what identifies the shot.",
            ["Extracted information is one of the ways an image becomes findable in a ", { text: "searchable image library", page: 26 }, ", together with metadata, tags and visual characteristics."],
          ],
          points: ["Labels, signs and posters recovered", "Details no one thought to tag"],
        },
        {
          label: "Documents",
          heading: "Scans whose content is the whole point",
          icon: "document",
          body: [
            "Scanned agreements, signed releases, printed proofs and research papers carry all their meaning in their text. A scan saved as an image, though, is just a picture of a page until its words are extracted.",
            "Filenames for these files tend to record a date or a reference number, so the extracted text is often the only description that reflects what the document actually says.",
          ],
          points: ["Scans treated as text, not pictures", "Content that outlasts vague filenames"],
          link: { page: 384, label: "Can GetSibu Search Inside Documents?" },
        },
        {
          label: "Presentations",
          heading: "Slides with a great deal to say",
          icon: "layers",
          body: [
            "Pitch decks, campaign reports and strategy presentations pack headlines, figures and captions onto every slide. They are usually saved under the name of a meeting, not under what they argue.",
            "Extraction recovers the words on the slides, which matters most for decks that were exported as images or assembled from pasted screenshots.",
          ],
          points: ["Slide text recovered", "Decks exported as images included"],
        },
        {
          label: "Screenshots",
          heading: "Captured references that are pure image",
          icon: "scan",
          body: [
            "Teams capture social posts, competitor advertising, web pages and reports as screenshots for reference. Every word in them exists only as pixels, so without extraction their text would be invisible to the library.",
            "Once processed, the captured headline or caption travels with the screenshot as part of its asset information.",
          ],
          points: ["References kept with their wording", "No retyping of captured text"],
        },
      ],
      sources: [{ kind: "pdf", page: 38 }, { kind: "pdf", page: 26 }, { kind: "pdf", page: 384 }, EXPLAINS],
    },
    {
      kind: "before-after",
      id: "before-after",
      eyebrow: "The difference",
      heading: "One scanned brochure, before and after extraction",
      beforeLabel: "Before extraction",
      afterLabel: "After extraction",
      before: ["Described only by its filename and folder", "Its headline visible only to someone who opens it", "A phrase from inside it leads nowhere", "Found only by people who remember it exists"],
      after: ["Its text part of the searchable asset information", "A phrase from inside it can lead back to the file", "Metadata and tags still describe it as before", "Reachable by colleagues who never saw it filed"],
      sources: [{ kind: "pdf", page: 38 }, { kind: "pdf", page: 15 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A print archive whose words can be searched",
      team: "A brand team",
      situation: "A brand team keeps many years of scanned brochures, print proofs and signed-off artwork on a shared drive. Colleagues often ask whether a tagline has been used before, and nobody can answer without opening files.",
      steps: [
        { heading: "The archive is imported", body: ["The drive’s contents come across through ", { text: "bulk import", page: 130 }, ", and the existing folder structure is mirrored so everyone still recognises where things live."] },
        { heading: "Processing runs in the background", body: "Assets are indexed without anyone performing metadata or AI processing by hand, while the team carries on with current work." },
        { heading: "Readiness is confirmed", body: ["Before relying on a text search, the team checks ", { text: "media processing status", page: 145 }, " to see that the scanned files are fully indexed and searchable."] },
        { heading: "A tagline is traced", body: "A copywriter searches for the tagline and can find brochures and proofs where it was printed, rather than opening PDFs one at a time." },
        { heading: "Sensitive scans are placed deliberately", body: ["Because their contents are now easier to find, scanned agreements go into a folder whose access is controlled with ", { text: "folder-level permissions", page: 152 }, "."] },
      ],
      outcome: "Questions about where a line of copy has appeared are answered with a search, and the old archive becomes part of everyday brand work instead of a drive nobody visits.",
      link: { page: 214, label: "GetSibu for Brand Teams" },
      sources: [{ kind: "pdf", page: 130 }, { kind: "pdf", page: 133 }, { kind: "pdf", page: 311 }, { kind: "pdf", page: 145 }, { kind: "pdf", page: 15 }, { kind: "pdf", page: 38 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 214 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about AI OCR",
      items: [
        {
          question: "How is AI OCR related to OCR-powered asset search?",
          answer: ["AI OCR is the extraction. ", { text: "OCR-powered asset search", page: 15 }, " is what people do with the result: locating documents and visual assets when the information they need exists inside the file rather than in its filename."],
        },
        {
          question: "Is text extraction worth having for files that already have good filenames?",
          answer: "Usually. A filename summarises a file in a few words, while the text inside it holds the detail people later search for: a tagline, a product claim, a phrase from a report. Extraction brings that detail within reach.",
        },
        {
          question: "How is reading text in an image different from interpreting what the image shows?",
          answer: ["OCR recovers the characters printed in a file. Interpreting the visual content, such as what a photograph depicts, belongs to ", { text: "AI media understanding", page: 43 }, ". A product shot with a slogan across it can benefit from both."],
        },
      ],
      sources: [{ kind: "pdf", page: 38 }, { kind: "pdf", page: 15 }, { kind: "pdf", page: 43 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on text inside creative files",
      variant: "compact",
      pages: [15, 366, 53, 27, 384],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the OCR cluster." }],
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
