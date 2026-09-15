/**
 * 378 · Future of Digital Asset Management — /resources/future-of-digital-asset-management
 *
 * Angle (cluster: future-of-dam, primary): essay on the direction of the category — DAM moving from systems that keep
 * and catalogue files toward systems that understand content, automate organisation and provide contextual search;
 * the pressures behind that direction and what it means when evaluating a DAM. How AI Changes DAM (377) owns the
 * present-day shift in effort, Future of Creative Collaboration (379) collaboration, Future of AI-Powered Creative
 * Libraries (380) knowledge environments, The Future of Creative Asset Management (400) the conversion manifesto.
 * Direction only: no dates, adoption rates, market figures or analysts.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Essay: vendor-neutral argument about the direction of DAM; states no GetSibu capability beyond the cited pages and makes no predictions." } as const;

const page: PageContent = {
  page: 378,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "centered",
      eyebrow: "Resources",
      lede: "An essay on where digital asset management is heading: away from systems that only keep files and toward systems that understand content, organise it as it arrives and answer requests in context, and what that means when choosing one.",
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 378 }, { kind: "pdf", page: 7 }],
    },
    {
      kind: "definition",
      id: "definition",
      eyebrow: "In short",
      term: "The future of digital asset management",
      answer: "The future of DAM is moving toward intelligent systems that understand content, automate organisation and provide more contextual search. The emphasis is shifting from where an asset is kept to what it is.",
      detail: "Asset management grew up around storing and cataloguing files. That foundation still matters, but it is no longer where the hard problems are. As libraries grow and more people rely on them, the systems that serve them well are those that can work out what their assets contain, keep them in order as they arrive and answer requests framed the way people actually think.",
      sources: [{ kind: "pdf", page: 378 }, EXPLAINS],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "From keeping files to understanding them",
      body: [
        "The direction of DAM is easiest to see in the questions libraries are asked. “Where is the file?” is a storage question. “Which images show the new packaging outdoors?” and “Are these two files really the same photograph?” are questions about content, and the category is moving toward systems built to answer them.",
        "None of this makes storage, folders or metadata obsolete; it changes their role. Storage becomes the foundation rather than the product. Folders express ownership and access more than meaning. Metadata can be produced by analysis and refined by people instead of being typed from scratch. If the direction holds, what distinguishes one DAM from another will be how much it understands about its assets and how well that understanding reaches the person searching.",
        [
          "This is a direction rather than a finish line. The practical shift already under way is described in ",
          { text: "How AI Changes DAM", page: 377 },
          ", and the idea of a library as an organisation’s creative memory in ",
          { text: "Future of AI-Powered Creative Libraries", page: 380 },
          ".",
        ],
      ],
      keyPoints: {
        heading: "The argument",
        items: ["Content understood, not only stored", "Organisation that keeps pace", "Search that reads context", "Storage as the foundation", "People setting the rules"],
      },
      highlight: {
        heading: "In practice",
        body: "A team imports years of product photography in one go. A system that only stores files leaves the collection exactly as it arrived; a content-aware one suggests labels and categories and identifies copies as the material is processed, so sorting starts from suggestions rather than from nothing.",
        tags: ["Imports", "Organisation", "Search"],
      },
      glance: {
        heading: "The direction in brief",
        facts: [
          { label: "Moving from", value: "Storing and cataloguing files" },
          { label: "Moving toward", value: "Understanding, automated organisation, contextual search" },
          { label: "Still essential", value: "Governance and human judgement" },
        ],
        actions: [{ kind: "route", path: "/resources", label: "More in Resources" }]
      },
      sources: [{ kind: "pdf", page: 378 }, { kind: "pdf", page: 377 }, { kind: "pdf", page: 380 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "forces",
      eyebrow: "Forces",
      heading: "Pressures pushing DAM in this direction",
      items: [
        {
          heading: "More content than anyone can describe",
          summary: "Creative output keeps multiplying across formats and channels.",
          icon: "layers",
          body: [
            ["Campaigns need more variants, sizes and edits for more channels. As organisations produce more, their ", { text: "libraries become increasingly difficult to manage", page: 397 }, ", and describing everything by hand stops being realistic, which moves description from people toward software."],
          ],
        },
        {
          heading: "More people outside the creative team",
          summary: "Sales, regional, partner and agency colleagues need assets too.",
          icon: "users",
          body: [
            "The people searching a library increasingly include colleagues who never saw the files being made. They cannot lean on folder knowledge or insider vocabulary, so the library has to meet them with search that understands plain descriptions.",
          ],
        },
        {
          heading: "Software that can read media",
          summary: "Analysis of images, text and meaning has become practical to use.",
          icon: "sparkles",
          body: [
            "Techniques such as AI tagging, text extraction and embedding-based search have moved from research into everyday tools. Content understanding can therefore be part of a DAM’s normal workflow rather than a specialist add-on.",
          ],
        },
        {
          heading: "Expectations set by everyday search",
          summary: "People expect to type what they mean and get something useful back.",
          icon: "search",
          body: [
            "Outside work, people search in plain language and expect relevant results. A library that demands exact filenames or the right folder path feels broken by comparison, however much it holds.",
          ],
        },
        {
          heading: "More destinations for each asset",
          summary: "Assets flow into websites, shops, apps and production tools, not only into people’s hands.",
          icon: "network",
          body: [
            "An asset is often picked up by other software rather than downloaded by a person. That software cannot ask a colleague what a file is, so what the library knows about each asset has to be available to systems as well as to the people who search.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 397 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "directions",
      eyebrow: "Three directions",
      heading: "What each direction means in practice",
      tabs: [
        {
          label: "Understanding",
          heading: "Systems that know what their assets contain",
          icon: "eye",
          body: [
            "The first direction is analysis of content itself: what an image shows, what a document says, which files are copies of one another. Understanding becomes a layer of information over the files instead of something held in people’s heads.",
            "Recognising objects and reading text are within the reach of software; knowing what a piece of work means to a brand is not, and that gap marks where this direction meets people.",
          ],
          points: ["Visual and textual analysis", "Meaning still judged by people"],
          link: { page: 43, label: "AI Media Understanding" },
        },
        {
          label: "Organisation",
          heading: "Order that keeps pace with growth",
          icon: "layers",
          body: [
            "The second direction is organisation that happens as content arrives rather than in occasional clean-ups. Suggested classifications, duplicate detection and a consistent vocabulary keep a library usable while it grows.",
            "A practical test is whether a library stays usable through a large import without a clean-up project afterwards.",
          ],
          points: ["Organised on arrival", "Fewer clean-ups after campaigns"],
          link: { page: 57, label: "AI Library Organisation" },
        },
        {
          label: "Context",
          heading: "Search that reads intent and circumstance",
          icon: "search",
          body: [
            "The third direction is search that interprets what someone means and shows enough around each result to judge it: which version it is, which campaign it belongs to and how it has been used.",
            "The aim is fewer results that have to be opened one by one before the right one becomes clear.",
          ],
          points: ["Meaning as well as keywords", "Context beside each result"],
          link: { page: 14, label: "Semantic Creative Search" },
        },
      ],
      sources: [{ kind: "pdf", page: 378 }, { kind: "pdf", page: 43 }, { kind: "pdf", page: 57 }, { kind: "pdf", page: 14 }, EXPLAINS],
    },
    {
      kind: "checklist",
      id: "evaluate",
      eyebrow: "When evaluating a DAM",
      heading: "Questions that test a DAM against this direction",
      variant: "chips",
      items: ["Can it describe assets nobody has tagged?", "Can people review and correct AI output?", "Does search accept plain descriptions?", "Do results show enough context to judge them?", "Does organisation keep up with imports?", "Who controls the vocabulary?"],
      sources: [EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "in-getsibu",
      eyebrow: "In GetSibu",
      heading: "Where GetSibu stands on this direction",
      items: [
        {
          heading: "More than keeping files available",
          body: "Where traditional file storage focuses on availability, GetSibu adds AI-assisted organisation, contextual search, collaboration, approvals, version history, analytics and permission controls.",
          icon: "layers",
          page: 7,
        },
        {
          heading: "Meaning attached to files",
          body: "Creative intelligence turns stored files into a more understandable information layer, attaching searchable meaning instead of treating each asset as anonymous.",
          icon: "sparkles",
          page: 44,
        },
        {
          heading: "Automation with approval",
          body: "AI-powered asset management pairs automated analysis with human approval, so teams keep control while repetitive administration shrinks.",
          icon: "approval",
          page: 45,
        },
        {
          heading: "Search across many signals",
          body: "Assets are searchable through filenames, metadata, OCR, AI-generated tags, comments and semantic information, and people can describe what they need in natural language.",
          icon: "search",
          page: 11,
        },
        {
          heading: "Built to be extended",
          body: "As an API-first DAM, GetSibu allows organisations to build custom experiences around the underlying asset system.",
          icon: "api",
          page: 254,
        },
      ],
      sources: [{ kind: "pdf", page: 7 }, { kind: "pdf", page: 44 }, { kind: "pdf", page: 45 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 254 }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about the future of DAM",
      items: [
        {
          question: "Is AI a replacement for digital asset management?",
          answer: "No. AI is moving into DAM rather than replacing it. Analysis needs somewhere to keep its results, rules to work within and people to review it, which is exactly what asset management provides.",
        },
        {
          question: "What does a content-aware DAM mean?",
          answer: "It describes a DAM that forms its own view of what each asset contains rather than waiting to be told. The practical sign is that a newly imported file can be found by what it shows or says before anyone has written a description.",
        },
        {
          question: "How is contextual search different from semantic search?",
          answer: ["Semantic search interprets what a request means. Contextual search goes a step further and weighs what surrounds each asset too, so relevance depends on the circumstances of the work and not only on the words typed. ", { text: "What Is Semantic Search?", page: 363 }, " explains the first of the two in depth."],
        },
      ],
      sources: [{ kind: "pdf", page: 363 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More essays on where creative libraries are heading",
      variant: "compact",
      pages: [377, 379, 380, 7, 44, 43],
      sources: [{ kind: "editorial", note: "Links to the other essays and pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "The Future of Creative Asset Management",
      conversionPage: 400,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 400 }],
    },
  ],
};

export default page;
