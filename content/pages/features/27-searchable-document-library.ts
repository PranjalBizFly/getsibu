/**
 * 27 · Searchable Document Library — /features/searchable-document-library
 *
 * Angle (clusters: ocr-search, media-libraries): the document library as a whole — documents indexed by extracted
 * text, metadata and organisational tags so they are located without opening every PDF or presentation, and the
 * tagging and organising decisions that make that work. OCR-Powered Asset Search (15) owns searching the text,
 * AI OCR (38) owns extraction, What Is OCR in DAM? (366) explains the technique, Document Version Management (99)
 * owns editions and versions.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how creative teams keep and use documents; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 27,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Search & Discovery",
      lede: "Organise the paperwork of creative work, from briefs and guidelines to decks, scripts and agreements, so each document can be located by its content, its origin or its purpose and kept beside the media it belongs to.",
      visual: { diagram: "media-library", focus: "document" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 27 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "The paperwork of creative work, findable without opening it",
      body: [
        "Documents in GetSibu can be indexed using extracted text, metadata and organisational tags. Users can then locate important documents without manually opening every PDF or presentation.",
        "Every campaign, shoot and production generates documents as well as media: the brief that started it, the guidelines it followed, the decks that sold it, the call sheets, scripts and releases that made it possible, and the report that judged it. Such files usually live somewhere other than the media, carry names built from dates and initials, and get opened one by one whenever someone needs to check a detail.",
        [
          "Finding a file by a phrase it contains is explored in depth under ",
          { text: "OCR-powered asset search", page: 15 },
          ", and keeping decks and guidelines current as they change belongs to ",
          { text: "document version management", page: 99 },
          ". A document library adds the organising layer around both, so documents can be found by what they are for as well as by what they say.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Indexed by extracted text", "Indexed by metadata", "Indexed by organisational tags", "No opening file after file", "Documents beside their media"],
      },
      highlight: {
        heading: "In practice",
        body: "A producer planning a return visit to a location needs the agreement signed last time. Instead of opening every PDF in an old production folder, they search for the location’s name together with the tag the team uses for agreements.",
        tags: ["Producers", "Brand managers", "Account teams"],
      },
      glance: {
        heading: "Document library in brief",
        facts: [
          { label: "Area", value: "Search & Discovery" },
          { label: "Indexed by", value: "Extracted text, metadata, organisational tags" },
          { label: "Works on", value: "PDFs, presentations and other documents" },
          { label: "Discovery angle", value: "AI Document Discovery", page: 53 },
        ],
        actions: [{ kind: "route", path: "/features/search-and-discovery", label: "More in Search & Discovery" }]
      },
      sources: [{ kind: "pdf", page: 27 }, { kind: "pdf", page: 15 }, { kind: "pdf", page: 99 }, { kind: "pdf", page: 53 }, EXPLAINS],
    },
    {
      kind: "layers",
      id: "layers",
      eyebrow: "How a document is described",
      heading: "What makes each document findable",
      layers: [
        { label: "What it says", body: "Extracted text lets a search match words inside a PDF or presentation, which is how a clause, a product name or a slide heading can lead back to the file.", page: 38 },
        { label: "Where it came from", body: "Metadata can record origin, such as who created a document, where it was stored before it arrived and the keywords it already carried, answering questions its contents never mention.", page: 22 },
        { label: "What it is for", body: "Organisational tags state what kind of document it is and what it belongs to, such as a brief for one campaign or guidelines for one brand, which the text alone rarely makes plain." },
        { label: "What it sits beside", body: "Documents share one search experience with images, video and audio, so a campaign’s brief and its finished media can be discovered in the same library.", page: 24 },
      ],
      sources: [{ kind: "pdf", page: 27 }, { kind: "pdf", page: 38 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 4 }, { kind: "pdf", page: 24 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "decisions",
      eyebrow: "Decisions worth making",
      heading: "Tagging and organising choices for a document library",
      items: [
        {
          heading: "Tag by document type",
          summary: "Text alone struggles to tell a brief from a report about the same campaign.",
          icon: "tag",
          body: [
            "A search for a campaign name can return every document that mentions it: the brief, the agency’s response, several progress decks and the wrap report. All of them match, and only one is what the person wanted.",
            "A small, stable set of document-type tags, such as brief, guidelines, presentation, agreement and report, turns that list into something readable. Keep the set short enough that everyone applies it the same way.",
          ],
        },
        {
          heading: "Keep documents with the work they govern",
          summary: "A brief or a usage agreement is most useful when it can be found alongside the media it describes.",
          icon: "layers",
          body: [
            "Usage terms filed in a legal folder, far from the photography they cover, are easily forgotten when that photography is reused. The same happens to scripts separated from their footage and briefs separated from the artwork that answered them.",
            "Giving a document the same campaign, product or client tags as its media means one search can surface both, so the question of what was agreed about an asset is answered close to the asset itself.",
          ],
        },
        {
          heading: "Treat templates as their own class",
          summary: "Templates exist to be copied, so the danger is people copying an old one.",
          icon: "copy",
          body: [
            "Presentation templates, letterheads and document masters are reused constantly, and a superseded template can keep spreading an old logo or layout long after a rebrand.",
            ["Directing colleagues to ", { text: "approved-only views", page: 103 }, ", which hold content that has completed the required review process, helps steer them towards the template they are meant to start from."],
          ],
        },
        {
          heading: "Place sensitive paperwork deliberately",
          summary: "Once agreements and release forms are easy to find, where they are stored matters more.",
          icon: "lock",
          body: [
            ["Contracts, fee schedules and signed releases deserve a considered home. ", { text: "Folder-level permissions", page: 152 }, " control access at a more detailed level than organisation-wide access, and new folders can remain private until access is explicitly granted."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 27 }, { kind: "pdf", page: 24 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 154 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A returning client’s paperwork picked up by a new account lead",
      team: "An advertising agency",
      situation: "An advertising agency has been rehired by a client it last worked with some years ago. The new account lead was not part of the earlier engagement and needs to understand what was briefed, agreed and delivered.",
      steps: [
        { heading: "Start from the client’s tags", body: "The lead searches for the client and looks first at documents tagged as briefs and guidelines, setting aside meeting notes and old internal decks." },
        { heading: "Find the terms by their wording", body: "Searching for the product line’s name surfaces the usage agreement that covered its photography, because the name appears in the agreement’s text, and nobody opens the contracts folder file by file." },
        { heading: "Identify the edition that applied", body: ["The client’s guidelines have changed since then. Because ", { text: "earlier versions are retained when a document is replaced", page: 99 }, ", the lead can look back at the edition the earlier work followed."] },
        { heading: "Read the deck that was approved", body: ["Several drafts of the final presentation exist, and ", { text: "review status", page: 76 }, " shows which one completed the approval process."] },
        { heading: "File the new brief beside the old", body: "The brief for the new engagement is added with the same client tags as the earlier paperwork, so whoever picks up the account next finds both engagements together." },
      ],
      outcome: "The team begins the engagement knowing what was briefed, agreed and approved last time, from documents located in the library rather than recalled by whoever is still around.",
      link: { page: 219, label: "GetSibu for Advertising Agencies" },
      sources: [{ kind: "pdf", page: 27 }, { kind: "pdf", page: 15 }, { kind: "pdf", page: 99 }, { kind: "pdf", page: 76 }, { kind: "pdf", page: 219 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about searchable document libraries",
      items: [
        {
          question: "Can documents in the library be commented on and approved?",
          answer: ["Yes. Comments can be left directly on assets, and a ", { text: "creative approval workflow", page: 67 }, " lets a team request review, make changes and mark a document as approved."],
        },
        {
          question: "Does a searchable document library work for scanned paperwork?",
          answer: ["It can. ", { text: "OCR in a DAM", page: 366 }, " converts text visible inside images and documents into searchable information, so a supported scan of a signed agreement or a call sheet can be located by the words printed on it."],
        },
        {
          question: "Should an editable deck and its PDF both be kept in a document library?",
          answer: ["Usually, when both are in use: the editable file is what the next revision starts from, and the PDF is what gets circulated. ", { text: "Filtering by format", page: 19 }, " can then separate the two when a search returns both."],
        },
      ],
      sources: [{ kind: "pdf", page: 27 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 15 }, { kind: "pdf", page: 366 }, { kind: "pdf", page: 19 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on documents in the creative library",
      variant: "compact",
      pages: [53, 15, 99, 38, 24, 384],
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
