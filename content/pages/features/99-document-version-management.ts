/**
 * 99 · Document Version Management — /features/document-version-management
 *
 * Angle (cluster: versioning): documents and presentations — decks, guidelines, briefs and reports that change on their
 * own rhythm, the master-deck and source-versus-PDF questions, and documents that must stay as issued. Video (97) and
 * Image (98) Version Management own their media; Searchable Document Library (27) owns document search.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how teams maintain documents and presentations; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 99,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Versioning & Asset Management",
      lede: "How frequently updated documents and presentations, such as sales decks, brand guidelines and briefs, can be replaced while earlier versions are kept, and how to decide what counts as one document.",
      visual: { diagram: "media-library", focus: "document" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 99 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Decks and documents that change without multiplying",
      body: [
        "In GetSibu, documents and presentations can be replaced with updated files while their historical versions are retained.",
        "Documents change on a different rhythm from creative media. A sales presentation is revised whenever a product, an offer or a customer story changes; brand guidelines move through editions; a brief gathers comments until it is signed off. Because documents are so easy to copy and email, every change tends to leave a trail of attachments, and superseded editions keep circulating long after they were replaced.",
        [
          "Presentations are also among the most copied files a team owns, since people duplicate a master deck to tailor it and rarely come back. Teams whose work revolves around decks, such as ",
          { text: "corporate communications teams", page: 240 },
          " keeping a central source of truth for presentations and public-facing assets, feel this most.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Replace while keeping history", "Master decks and tailored copies", "Editable source and exported PDF", "Editions of guidelines", "Documents that stay as issued"],
      },
      highlight: {
        heading: "In practice",
        body: "When the brand guidelines reach a new edition, the brand team replaces the guidelines document. Colleagues searching for the guidelines find the new edition, and the previous one is retained among the document’s historical versions.",
        tags: ["Presentations", "Guidelines", "Briefs"],
      },
      glance: {
        heading: "Document versioning in brief",
        facts: [
          { label: "Works on", value: "Documents and presentations" },
          { label: "Keeps", value: "Historical versions on replacement" },
          { label: "Finding documents", value: "Searchable Document Library", page: 27 },
          { label: "Used by", value: "Presentation owners, brand and communications teams" },
        ],
        actions: [{ kind: "route", path: "/features/asset-management", label: "More in Versioning & Asset Management" }]
      },
      sources: [{ kind: "pdf", page: 99 }, { kind: "pdf", page: 240 }, { kind: "pdf", page: 27 }, EXPLAINS],
    },
    {
      kind: "before-after",
      id: "attachments-or-versions",
      eyebrow: "The difference",
      heading: "Updating documents by attachment compared with updating in place",
      beforeLabel: "Updating by attachment",
      afterLabel: "Replacing the document in GetSibu",
      before: [
        "“Deck_v7_FINAL_jm” sitting in several inboxes",
        "Superseded editions still being forwarded",
        "Unclear which PDF matches the editable file",
        "Feedback split across reply threads",
      ],
      after: [
        "One document asset under a plain name",
        "The updated file takes the current one’s place",
        "Earlier versions retained with the document",
        "No attachment trail to reconcile",
      ],
      sources: [{ kind: "pdf", page: 99 }, { kind: "pdf", page: 386 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "document-questions",
      eyebrow: "What to consider",
      heading: "Versioning questions that are specific to documents",
      items: [
        {
          heading: "Master deck or tailored copy?",
          summary: "A deck adapted for one audience is a new document; a correction to the master is a version.",
          icon: "document",
          body: [
            "Sales and pitch teams often copy a master presentation and tailor it for a client or event. The tailored deck has a life of its own and deserves an asset of its own.",
            "Changes that every audience should receive, such as a new product slide or corrected legal wording, belong in the master as a new version, which is what keeps the master worth copying.",
          ],
          points: ["Tailored for one audience: new asset", "Needed by every audience: new version"],
        },
        {
          heading: "Editable source and exported PDF",
          summary: "The file people edit and the file people send are frequently different formats.",
          icon: "layers",
          body: [
            "A presentation may be maintained in its editable format and distributed as a PDF. Keeping the two as separate assets, each replaced when it changes, avoids a version history that alternates between formats.",
            "Whatever a team chooses, the exported PDF needs refreshing whenever its source changes, or the two quietly drift apart.",
          ],
        },
        {
          heading: "Guidelines published in editions",
          summary: "Some documents are cited by edition, and people need to know which one applied when.",
          icon: "book",
          body: [
            "Brand guidelines, style guides and usage policies are referred to by edition. Replacing the document gives everyone a single place to find the current edition, while earlier editions are retained as historical versions of the same document.",
            "Recording the edition and its date inside the document itself, on the cover or in a footer, helps anyone who meets a printed or exported copy tell which edition they are holding.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 99 }, { kind: "pdf", page: 386 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "in-getsibu",
      eyebrow: "In GetSibu",
      heading: "What surrounds each new edition of a document",
      items: [
        { heading: "Feedback on the draft", body: "Comments left directly on a document keep review notes attached to the work being discussed.", icon: "message", points: ["No tracked changes across emailed copies"], page: 62 },
        { heading: "Sign-off before wider use", body: "An approval workflow lets a team request review, make changes and mark a document as approved.", icon: "approval", page: 67 },
        { heading: "Approved-only views", body: "Colleagues who only need finished material can use views of content that has completed the required review process.", icon: "check", page: 103 },
        { heading: "Reusable links to current decks", body: "A saved search for the team’s current presentations can be shared through a URL, so colleagues open it rather than asking for attachments.", icon: "filter", page: 17 },
      ],
      sources: [{ kind: "pdf", page: 62 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 17 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about document version management",
      items: [
        {
          question: "Who should look after a master presentation that many people copy?",
          answer: "One named person or team, who gathers the changes every audience needs and puts them into the master as new versions. Without that owner, tailored copies drift apart and the master stops being worth copying.",
        },
        {
          question: "Can a deck be found by the words on its slides?",
          answer: ["Yes. GetSibu ", { text: "extracts text from presentations and PDFs", page: 15 }, " so that their content becomes searchable, which helps when someone remembers a slide rather than a filename."],
        },
        {
          question: "Should a signed or published document ever be replaced with a new version?",
          answer: "Usually not. A signed agreement, a published report or a press statement records what went out at a particular moment; a correction is better issued as a new document that refers to the original, leaving the issued one untouched.",
        },
      ],
      sources: [{ kind: "pdf", page: 99 }, { kind: "pdf", page: 15 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on documents and presentations",
      variant: "compact",
      pages: [27, 15, 67, 103, 240, 91],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the versioning overview." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Bring Order to Creative Chaos",
      conversionPage: 399,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 399 }],
    },
  ],
};

export default page;
