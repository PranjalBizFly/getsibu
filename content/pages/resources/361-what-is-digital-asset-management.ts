/**
 * 361 · What Is Digital Asset Management? — /resources/what-is-digital-asset-management
 *
 * Angle (cluster: dam-fundamentals, primary): the discipline as a whole — the five activities in the definition
 * (storing, organising, finding, managing, distributing), what separates managed assets from stored files, and
 * where GetSibu extends the traditional approach. Creative Library (373) owns the repository itself, Asset
 * Metadata (374) and Asset Taxonomy (375) their concepts, DAM Migration (376) the move; Modern Digital Asset
 * Management (7) is the platform-side page.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Vendor-neutral explanation of digital asset management practice; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 361,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "centered",
      eyebrow: "Resources",
      lede: "A plain explanation of digital asset management: the work it covers, how it differs from keeping files in shared storage, the terms worth knowing before choosing a system, and where GetSibu extends the traditional approach.",
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 361 }, { kind: "pdf", page: 7 }],
    },
    {
      kind: "definition",
      id: "definition",
      eyebrow: "Definition",
      term: "Digital asset management (DAM)",
      answer: "Digital asset management is the structured process of storing, organising, finding, managing and distributing digital content. A DAM system is the software that gives that process one shared home.",
      detail: "The word “asset” carries the meaning. A file becomes an asset when an organisation treats it as something worth finding again, reusing, controlling and accounting for: a campaign image, a product film, a brand guideline, a licensed music track. DAM combines software, structure and agreed practice so those assets stay usable long after the project that produced them has ended.",
      sources: [{ kind: "pdf", page: 361 }, EXPLAINS],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Why organisations manage assets rather than files",
      body: [
        "DAM gathers five activities around the content an organisation intends to use again, instead of leaving each one to a different tool or a different person. GetSibu extends traditional DAM with AI-assisted tagging, semantic search and collaboration.",
        "Ordinary file storage answers one question well: is the file still there? Creative organisations need answers to harder questions. Which of these images is approved? Who shot this footage, and may it be used in another market? Is this deck the current one? As a library grows and more people depend on it, those answers can no longer live in someone’s memory; they have to live in the system.",
        [
          "That is the gap DAM fills. Rather than relying on folder paths and filenames to carry meaning, a DAM attaches ",
          { text: "asset metadata", page: 374 },
          " to each file, arranges content with an agreed ",
          { text: "asset taxonomy", page: 375 },
          " and controls who can see, change and share it. The result is a ",
          { text: "creative library", page: 373 },
          " that people search and trust, instead of a set of drives they have to navigate from memory.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Assets, not just files", "Store, organise, find, manage, distribute", "Metadata as the asset’s context", "Control over access and approval", "One shared source of truth"],
      },
      highlight: {
        heading: "In practice",
        body: "Asked for last year’s launch imagery, a designer searches the library for the campaign and narrows the results to approved content, rather than messaging whoever happened to save the files.",
        tags: ["Marketing", "Production", "Brand"],
      },
      glance: {
        heading: "DAM in brief",
        facts: [
          { label: "Short for", value: "Digital asset management" },
          { label: "Covers", value: "Storing, organising, finding, managing, distributing" },
          { label: "Typical content", value: "Images, video, audio, documents" },
          { label: "In GetSibu", value: "Modern Digital Asset Management", page: 7 },
        ],
        actions: [{ kind: "route", path: "/resources", label: "More in Resources" }]
      },
      sources: [{ kind: "pdf", page: 361 }, { kind: "pdf", page: 374 }, { kind: "pdf", page: 375 }, { kind: "pdf", page: 373 }, { kind: "pdf", page: 7 }, EXPLAINS],
    },
    {
      kind: "layers",
      id: "five-jobs",
      eyebrow: "In general",
      heading: "The five jobs a DAM system does",
      intro: "Each job depends on the one before it: content that is not organised is hard to find, and content nobody can find is rarely managed well.",
      layers: [
        { label: "Store", body: "Keep master files in one governed place, with previews so people can inspect content without pulling down the original." },
        { label: "Organise", body: "Give assets structure through folders, tags, collections and descriptive fields, so related content is grouped and labelled consistently." },
        { label: "Find", body: "Let people locate assets by whatever they know about them: a filename, a keyword, a date, a creator or what the file actually contains." },
        { label: "Manage", body: "Look after assets across their life, from versions, review and approval to ownership, expiry and eventual archiving or deletion." },
        { label: "Distribute", body: "Put the right, approved asset in front of the people and channels that need it, without scattering uncontrolled copies along the way." },
      ],
      sources: [{ kind: "pdf", page: 361 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "storage-vs-dam",
      eyebrow: "The difference",
      heading: "How DAM differs from shared file storage",
      intro: "Storage keeps files available; asset management adds the structure that makes them usable.",
      columns: ["Shared file storage", "Digital asset management"],
      emphasis: 1,
      rows: [
        ["What gives a file meaning", "Its folder path and filename", "Metadata, tags and context on the asset"],
        ["How people find things", "Browsing folders they remember", "Search across the whole library"],
        ["What counts as current", "Whichever copy was saved last", "A version history in one asset record"],
        ["Feedback and sign-off", "Email and chat, apart from the file", "Review and approval kept with the asset"],
        ["Who can see what", "Broad access to shared folders", "Permissions set by area of the library"],
      ],
      sources: [{ kind: "pdf", page: 7 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "key-terms",
      eyebrow: "Key terms",
      heading: "Terms you will meet when evaluating DAM",
      items: [
        {
          heading: "Asset",
          summary: "Any piece of digital content an organisation wants to find, reuse or control.",
          icon: "image",
          body: [
            "Images, video, audio, documents, presentations, design files and fonts can all be assets. What makes something an asset is not its format but the intention to use it again, which is why one library often holds finished work alongside the source material behind it.",
          ],
        },
        {
          heading: "Renditions and previews",
          summary: "Lighter files derived from a master, made for viewing or for a particular use.",
          icon: "eye",
          body: [
            "A DAM usually keeps one original and generates derived files from it: thumbnails for browsing, previews for inspection and, in many systems, converted formats for particular channels. People who only need to look at an asset work from the derived file, and the large original stays where it is.",
          ],
        },
        {
          heading: "Versions",
          summary: "Successive states of the same asset, kept together.",
          icon: "history",
          body: [
            ["When a file is revised, a DAM can keep the new state and the earlier ones in a single record instead of creating unrelated copies. ", { text: "Asset versioning", page: 369 }, " is what lets a team see that history and return to an earlier state."],
          ],
        },
        {
          heading: "Approval",
          summary: "The point where authorised people confirm content is ready for use.",
          icon: "approval",
          body: [
            ["Approval separates work in progress from content that may be published or shared. ", { text: "Creative approval", page: 370 }, " is ideally recorded against a specific version, so nobody has to guess what was signed off."],
          ],
        },
        {
          heading: "Governance",
          summary: "The rules for who may upload, change, approve, share and remove assets.",
          icon: "shield",
          body: [
            ["Governance is what turns a shared folder into something an organisation can rely on. ", { text: "Creative governance", page: 371 }, " sets those rules across ownership, permissions, approvals, retention and usage."],
          ],
        },
        {
          heading: "Asset lifecycle",
          summary: "The path an asset takes from creation to retirement.",
          icon: "refresh",
          body: [
            "Assets are ingested, described, reviewed, approved, used, reused and eventually archived or deleted. Thinking in lifecycles helps a team decide what should happen at each stage, and who is responsible once an asset should no longer be used.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 369 }, { kind: "pdf", page: 370 }, { kind: "pdf", page: 371 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "in-getsibu",
      eyebrow: "In GetSibu",
      heading: "How GetSibu extends traditional DAM",
      items: [
        {
          heading: "AI-assisted tagging",
          body: "GetSibu can suggest tags during asset processing, so teams do not have to classify every file by hand; authorised users review, approve or override them.",
          icon: "sparkles",
          points: ["Suggested tags approved in bulk", "Overrides when a tag does not fit"],
          page: 31,
        },
        {
          heading: "Semantic search",
          body: "Search interprets meaning rather than relying only on exact words, so people can describe the creative concept or visual they are after.",
          icon: "search",
          points: ["Natural language requests", "Alongside filenames, metadata and OCR"],
          page: 39,
        },
        {
          heading: "Collaboration on the asset",
          body: "Comments sit directly on assets, which keeps discussion attached to the creative work rather than moving it into disconnected tools.",
          icon: "message",
          points: ["Threaded discussions", "Mentions that bring in the right collaborator"],
          page: 61,
        },
        {
          heading: "Approval workflows",
          body: "Teams can request review, make changes and mark assets as approved, with status history showing what is awaiting review or requires changes.",
          icon: "approval",
          points: ["A structured path from draft to approved", "A record of review activity"],
          page: 67,
        },
        {
          heading: "Version history",
          body: "Assets can be replaced in place while previous versions are retained, and an older version can be restored when a team needs it.",
          icon: "history",
          points: ["One record for each asset", "Earlier states kept, not overwritten"],
          page: 91,
        },
        {
          heading: "Permission controls",
          body: "Granular permissions control who can access different areas of the creative library, and access can be set for individual folders rather than only across the whole organisation.",
          icon: "lock",
          points: ["Folder-level access", "New folders private until access is granted"],
          page: 151,
        },
        {
          heading: "Library analytics",
          body: "Analytics provide visibility into uploads, comments, storage, contributors, tags and other activity across the library.",
          icon: "chart",
          points: ["Which assets receive attention", "How storage is growing"],
          page: 181,
        },
      ],
      sources: [{ kind: "pdf", page: 361 }, { kind: "pdf", page: 7 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 47 }, { kind: "pdf", page: 48 }, { kind: "pdf", page: 39 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 61 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 86 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 68 }, { kind: "pdf", page: 89 }, { kind: "pdf", page: 77 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 94 }, { kind: "pdf", page: 151 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 154 }, { kind: "pdf", page: 181 }, { kind: "pdf", page: 182 }, { kind: "pdf", page: 149 }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about digital asset management",
      items: [
        {
          question: "What is the difference between digital asset management and cloud storage?",
          answer: "Cloud storage keeps files available and shareable. Digital asset management adds what makes them usable at scale: descriptive metadata, consistent organisation, search across the whole collection, versions, approvals and permissions.",
        },
        {
          question: "Does a small creative team need digital asset management?",
          answer: "Size matters less than reuse. A small team that produces a lot of content, works with outside contributors or keeps returning to past campaigns can feel the cost of lost and duplicated files long before it becomes a large organisation.",
        },
        {
          question: "How is a DAM different from a content management system?",
          answer: "A content management system publishes pages to a website or an app. A DAM looks after the files behind many channels at once, including print, social, video and those same web pages, and keeps the masters, versions and rights details that a website never needs to hold.",
        },
        {
          question: "Where should an organisation start with digital asset management?",
          answer: ["Begin with what already exists: where files live, which metadata people rely on and who needs access. Moving that content into a new system is a project of its own, covered in ", { text: "What Is a DAM Migration?", page: 376 }, "."],
        },
      ],
      sources: [{ kind: "pdf", page: 376 }, { kind: "pdf", page: 289 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More DAM fundamentals",
      variant: "compact",
      pages: [373, 374, 375, 376, 7, 31],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the other DAM fundamentals." }],
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
