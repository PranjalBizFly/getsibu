/**
 * 381 · What Is GetSibu? — /faq/what-is-getsibu
 *
 * Angle (cluster: platform-positioning): the one-sentence definition, then each phrase of it unpacked and
 * pointed at the page that covers it. The homepage (1) and platform pages (2–10) own the pitch, the
 * operating-system idea and the storage contrast; Who Is GetSibu For? (382) owns the audiences.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of digital asset management in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 381,
  metaDescription: "A plain answer to “What is GetSibu?”: an AI-aware digital asset management platform for videos, images, documents and audio, and what each part means.",
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "centered",
      eyebrow: "FAQ",
      lede: "A plain definition of GetSibu, followed by what each part of that definition refers to and where to read about it in depth.",
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 381 }],
    },
    {
      kind: "definition",
      id: "short-answer",
      eyebrow: "Short answer",
      term: "What Is GetSibu?",
      answer: "GetSibu is an AI-aware digital asset management platform for storing, organising, searching and collaborating around videos, images, documents and audio.",
      detail: "Instead of depending on scattered folders, disconnected drives and complicated naming systems, a team using GetSibu works from one searchable creative library, where the right asset can be located and understood in context. Storage, organisation, AI tagging, search, collaboration, permissions and analytics are brought together in that single platform.",
      sources: [{ kind: "pdf", page: 381 }, { kind: "pdf", page: 1 }, { kind: "pdf", page: 2 }],
    },
    {
      kind: "overview",
      id: "longer-answer",
      heading: "A system for the media creative organisations reuse",
      body: [
        "GetSibu sits in the category of software called digital asset management, usually shortened to DAM. Its focus is creative media: the footage, photography, artwork, presentations and recordings that creative, marketing and production teams make and then keep coming back to.",
        "That focus matters because creative files are awkward to manage with general-purpose storage. They are large, they look alike in a folder listing, and they change through rounds of feedback. The facts that make them usable, such as what they show, which version is current and who signed them off, are rarely visible from a filename.",
        [
          "For a fuller picture, ",
          { text: "The Operating System for Creative Libraries", page: 2 },
          " shows how the parts of the platform fit together, ",
          { text: "Modern Digital Asset Management", page: 7 },
          " sets GetSibu against traditional file storage, and ",
          { text: "Why Invest in GetSibu", page: 360 },
          " summarises the case for decision makers.",
        ],
      ],
      keyPoints: {
        heading: "Key terms in the answer",
        items: ["Digital asset management (DAM)", "AI that recommends, people who decide", "Four kinds of media in one library", "Search beyond the filename", "Feedback kept with the asset"],
      },
      highlight: {
        heading: "In practice",
        body: "A new starter asks where the product film lives. Instead of a colleague’s name or a drive path, the answer is the library, where the film can be searched for and its streaming preview watched without a full download.",
        tags: ["Creative teams", "Marketing", "Production"],
      },
      glance: {
        heading: "The answer in brief",
        facts: [
          { label: "Category", value: "Digital asset management" },
          { label: "Works with", value: "Videos, images, documents and audio" },
          { label: "Approach to AI", value: "AI-aware" },
          { label: "Designed for", value: "Who Is GetSibu For?", page: 382 },
        ],
        actions: [{ kind: "route", path: "/faq", label: "More in FAQs" }]
      },
      sources: [{ kind: "pdf", page: 381 }, { kind: "pdf", page: 1 }, { kind: "pdf", page: 7 }, { kind: "pdf", page: 2 }, { kind: "pdf", page: 360 }, { kind: "pdf", page: 147 }, { kind: "pdf", page: 382 }, { kind: "pdf", page: 361 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "phrase-by-phrase",
      eyebrow: "Key terms",
      heading: "The definition of GetSibu, phrase by phrase",
      intro: "Each part of the one-sentence answer points to a capability with a page of its own.",
      items: [
        {
          heading: "AI-aware",
          summary: "AI does the analysis and recommendation work, while people keep the final say.",
          icon: "sparkles",
          page: 9,
          body: [
            "The word describes a division of labour rather than full automation. GetSibu analyses media and recommends tags and classifications; teams can approve those suggestions in bulk or override them, and stay in control of how their library is organised.",
          ],
        },
        {
          heading: "Digital asset management",
          summary: "The discipline of keeping digital content findable, controlled and reusable.",
          icon: "database",
          page: 120,
          body: [
            [
              { text: "Digital asset management", page: 361 },
              " as a discipline covers storing, organising, finding, managing and distributing content. GetSibu combines organisation, metadata, AI analysis, collaboration, versioning, approvals and auditability into one asset management workflow.",
            ],
          ],
        },
        {
          heading: "Platform",
          summary: "The asset system can be built on, not only used through its own interface.",
          icon: "api",
          page: 254,
          body: [
            "Calling GetSibu a platform reflects its API-first design. Organisations can build custom experiences around the underlying asset system, so the library can serve their own applications as well as GetSibu’s interface.",
          ],
        },
        {
          heading: "Storing",
          summary: "Assets from different locations gathered into one central library.",
          icon: "folder",
          page: 6,
          body: [
            "Connected drives, local infrastructure and direct uploads can all feed one central location in GetSibu. An existing collection can be brought in without rebuilding the whole storage workflow by hand.",
          ],
        },
        {
          heading: "Organising",
          summary: "Structure meant to stay useful when the library is many times larger.",
          icon: "tag",
          page: 8,
          body: [
            "Organisation rests on structured folders and a scalable taxonomy. Hierarchical tags, synonyms, colours and inheritance are there to help a team build a system that remains useful as a collection grows into thousands or millions of assets.",
          ],
        },
        {
          heading: "Searching",
          summary: "More ways to reach a file than remembering what it was called.",
          icon: "search",
          page: 11,
          body: [
            "Search can draw on filenames, metadata, text extracted by OCR, AI-generated tags, comments and semantic information. Someone can look up an asset they already know, or describe the one they need in everyday language.",
          ],
        },
        {
          heading: "Collaborating around",
          summary: "The conversation about a file happens where the file is.",
          icon: "message",
          page: 61,
          body: [
            [
              "Collaboration features sit inside the asset library, so teams can discuss files without moving the conversation into disconnected tools. Comments can be left directly on assets, including at ",
              { text: "specific points on a video timeline", page: 64 },
              ", and approval workflows let a team request review, make changes and mark work as approved.",
            ],
          ],
        },
        {
          heading: "Videos, images, documents and audio",
          summary: "Four kinds of media handled together instead of in separate systems.",
          icon: "layers",
          page: 24,
          body: [
            "Images, video, audio and documents can be discovered through one unified search experience. Audio in particular is managed alongside the other formats, rather than being kept in a separate library of its own.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 9 }, { kind: "pdf", page: 361 }, { kind: "pdf", page: 120 }, { kind: "pdf", page: 254 }, { kind: "pdf", page: 6 }, { kind: "pdf", page: 121 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 61 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 64 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 24 }, { kind: "pdf", page: 28 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions to ask after the definition of GetSibu",
      items: [
        {
          question: "Is GetSibu a place to make creative work or to manage it?",
          answer: [
            "Mainly to manage it. Artwork, edits and documents are still made in the applications a team already works in, and GetSibu is where those files go next, so they can be found, reviewed and reused. How GetSibu ",
            { text: "connects with the tools teams already use", page: 241 },
            " is a question of integrations.",
          ],
        },
        {
          question: "Can GetSibu show how a creative library is being used?",
          answer: [
            "Yes. ",
            { text: "Creative asset analytics", page: 181 },
            " give visibility into uploads, comments, storage, contributors, tags and other library activity, and usage analytics help a team see which assets receive attention and which remain underused.",
          ],
        },
        {
          question: "Does GetSibu keep a record of what happens to an asset?",
          answer: [
            "It can. ",
            { text: "Asset history", page: 117 },
            " gives users a record of relevant changes and interactions, and the ",
            { text: "asset audit trail", page: 119 },
            " provides visibility into important actions performed on creative files.",
          ],
        },
        {
          question: "What does GetSibu do to keep a creative library secure?",
          answer: [
            "Security is built into its architecture through encryption, authentication, access control, tenant isolation and audit logging, as ",
            { text: "GetSibu Security", page: 321 },
            " explains.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 241 }, { kind: "pdf", page: 1 }, { kind: "pdf", page: 181 }, { kind: "pdf", page: 182 }, { kind: "pdf", page: 117 }, { kind: "pdf", page: 119 }, { kind: "pdf", page: 321 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on what GetSibu is",
      variant: "compact",
      pages: [2, 7, 120, 360, 382, 361],
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
