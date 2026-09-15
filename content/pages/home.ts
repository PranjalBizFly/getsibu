/**
 * Homepage — PDF page 1.
 *
 * Follows the Sky9 home flow agreed with the presentation layer (hero → overview → category explorer →
 * capabilities → process → featured rows → before/after → teams → accordion → FAQ → CTA), written only
 * from publishable PDF statements and site claims (content/architecture/claims.ts). The H1 exception is
 * recorded in content/architecture/identity.ts.
 */
import type { PageContent } from "../../types/content.ts";

const SITE_HOME = { kind: "site", url: "https://getsibu.com/", retrieved: "2026-09-14" } as const;
const EXPLAINS = { kind: "editorial", note: "Explanation of how creative libraries work; states no GetSibu capability beyond the cited pages." } as const;

const home = {
  page: 1,
  metaDescription: "GetSibu is an intelligent creative asset management platform where teams store, organise, search, review and collaborate on videos, images, documents and audio.",
  lastReviewed: "2026-09-15",
  recipeOverride: {
    recipe: "home",
    reason: "Bespoke homepage composition following the Sky9 home flow: capability explorer, principles, process, featured rows, teams and a migration accordion.",
  },
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Creative asset management platform",
      lede: "GetSibu helps teams store, organise, search, review and collaborate on videos, images, documents and audio from one central workspace, so the right asset is quick to find and its context comes with it.",
      diagram: "library-search",
      actions: [
        { kind: "global", cta: "primary" },
        { kind: "page", page: 2, label: "See how the platform fits together" },
      ],
      points: ["Video, image, document and audio assets", "AI suggestions your team approves", "Feedback kept on the work itself"],
      sources: [{ kind: "pdf", page: 1 }, { kind: "pdf", page: 9 }, { kind: "pdf", page: 62 }, SITE_HOME],
    },
    {
      kind: "overview",
      id: "about",
      eyebrow: "About GetSibu",
      heading: "A creative library that understands what it holds",
      body: [
        "Creative teams rarely lose files because they were careless. They lose them because the work outgrows the system: a drive per project, a folder per client, naming conventions that made sense to whoever invented them, and versions that multiply faster than anyone can label them.",
        [
          "GetSibu replaces that patchwork with one searchable creative library. It brings ",
          { text: "storage, organisation, AI tagging, search, collaboration, permissions and analytics", page: 2 },
          " into a single platform, so a team can connect the sources it already has, let assets be processed and indexed, and give authorised colleagues one place to work from.",
        ],
        [
          "The difference shows when someone needs something. Instead of recalling a filename or a folder path, they can ",
          { text: "describe the asset the way they remember it", page: 18 },
          ", and the feedback, versions and approvals around that asset are already attached to it.",
        ],
      ],
      keyPoints: {
        heading: "What changes",
        items: ["One library instead of scattered drives", "Search by what people remember", "AI that suggests, people who decide", "Comments and approvals on the asset", "Versions kept in one record", "Access controlled folder by folder"],
      },
      glance: {
        heading: "GetSibu in brief",
        facts: [
          { label: "Manages", value: "Videos, images, documents and audio" },
          { label: "Built for", value: "Production, marketing, brand and agency teams" },
          { label: "Platform", value: "The Operating System for Creative Libraries", page: 2 },
          { label: "Get started", value: "Start Your Creative Library", page: 391 },
        ],
        actions: [{ kind: "page", page: 381, label: "What Is GetSibu?" }],
      },
      sources: [{ kind: "pdf", page: 1 }, { kind: "pdf", page: 2 }, { kind: "pdf", page: 18 }, { kind: "pdf", page: 382 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 9 }, EXPLAINS],
    },
    {
      kind: "category-explorer",
      id: "capabilities",
      eyebrow: "Capabilities",
      heading: "What GetSibu adds to your library",
      intro: "Traditional file storage keeps files available. GetSibu adds organisation, search, collaboration, version history, access control and analytics designed around creative work.",
      categories: [
        {
          category: "search-discovery",
          summary: "Search by filename, metadata, extracted text, AI-generated tags and comments, or describe the asset you remember in natural language.",
          pages: [11, 18, 15, 17],
          diagram: "search-signals",
        },
        {
          category: "ai",
          summary: "AI suggests tags and classifications while assets are processed. Your team approves suggestions in bulk or overrides them, so the library stays organised on your terms.",
          pages: [31, 47, 38, 40],
          diagram: "ai-review",
        },
        {
          category: "collaboration",
          summary: "Keep feedback attached to the work: threaded comments on assets, comments at points on a video timeline, and approvals with a clear status history.",
          pages: [63, 64, 67, 68],
          diagram: "timeline-review",
        },
        {
          category: "asset-management",
          summary: "Replace an asset in place while previous versions stay in its history, then manage status, lifecycle and the audit trail in the same record.",
          pages: [91, 94, 103, 119],
          diagram: "version-record",
        },
        {
          category: "permissions-multi-tenancy",
          summary: "Control access folder by folder. New folders stay private until access is granted, and each client environment can stay isolated from the others.",
          pages: [152, 154, 160, 161],
          diagram: "folder-access",
        },
        {
          category: "analytics",
          summary: "See uploads, storage by category, contributors and tag activity across the library, with daily, weekly and monthly views.",
          pages: [181, 183, 186, 189],
          diagram: "library-activity",
        },
      ],
      sources: [{ kind: "pdf", page: 7 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 18 }, { kind: "pdf", page: 9 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 47 }, { kind: "pdf", page: 48 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 64 }, { kind: "pdf", page: 68 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 101 }, { kind: "pdf", page: 119 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 154 }, { kind: "pdf", page: 161 }, { kind: "pdf", page: 181 }, { kind: "pdf", page: 188 }, { kind: "pdf", page: 189 }, { kind: "pdf", page: 190 }],
    },
    {
      kind: "capabilities",
      id: "principles",
      eyebrow: "Why it works",
      heading: "Six ideas behind a library teams keep using",
      intro: "Features matter less than whether a library still works a year later, when it is bigger and more people depend on it.",
      items: [
        {
          heading: "One source of truth",
          body: "Creative, marketing, production and brand teams work from the same organised library, with permissions and approvals deciding who can use what.",
          icon: "layers",
          points: ["The same library for every team", "Approved content easy to tell apart"],
          page: 10,
        },
        {
          heading: "Structure that scales",
          body: "Hierarchical tags, synonyms, colours and inheritance make it possible to build an organisation system that stays useful as the library grows.",
          icon: "tag",
          points: ["A shared vocabulary", "Folders and tags that complement each other"],
          page: 8,
        },
        {
          heading: "AI with a job to do",
          body: "AI is aimed at practical library problems such as discovery, tagging, OCR and duplicate detection rather than features without a workflow purpose.",
          icon: "sparkles",
          points: ["Less manual classification", "People stay in control of the result"],
          page: 60,
        },
        {
          heading: "Context stays attached",
          body: "Comments, versions, creators and approvals remain associated with the asset, so its history is still there when someone reuses it.",
          icon: "history",
          points: ["Feedback on the file, not in an inbox", "Attribution carried through migration"],
          page: 116,
        },
        {
          heading: "Governance from the start",
          body: "Governance defines who can upload, edit, approve, download and manage assets, and new folders can remain private until access is explicitly granted.",
          icon: "shield",
          points: ["Folder-level permissions", "Audit history of important actions"],
          page: 114,
        },
        {
          heading: "Open to other systems",
          body: "As an API-first platform, GetSibu lets organisations build custom experiences around the underlying asset system and request integrations for tools they rely on.",
          icon: "api",
          points: ["Programmatic access for developers", "Integration requests for missing tools"],
          page: 254,
        },
      ],
      sources: [{ kind: "pdf", page: 10 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 60 }, { kind: "pdf", page: 116 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 114 }, { kind: "pdf", page: 154 }, { kind: "pdf", page: 326 }, { kind: "pdf", page: 254 }, { kind: "pdf", page: 260 }, { kind: "pdf", page: 261 }, SITE_HOME],
    },
    {
      kind: "process",
      id: "how-it-works",
      eyebrow: "How it works",
      heading: "From scattered storage to a searchable library",
      intro: "The same four stages apply whether a team starts with one folder or years of accumulated material.",
      steps: [
        { heading: "Connect", body: "Bring assets in from connected storage sources, or upload files directly with drag and drop.", icon: "plug", page: 121 },
        { heading: "Process", body: "Assets move through metadata extraction, thumbnail generation and AI-related processing until they are indexed and searchable.", icon: "refresh", page: 143 },
        { heading: "Organise", body: "Folders, tags, collections and metadata give the library a structure, with AI suggestions reviewed by the team.", icon: "folder", page: 4 },
        { heading: "Collaborate", body: "Search, comment, review and approve directly on assets instead of moving the conversation into other tools.", icon: "users", page: 61 },
      ],
      sources: [SITE_HOME, { kind: "pdf", page: 121 }, { kind: "pdf", page: 127 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 4 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 61 }],
    },
    {
      kind: "alternating",
      id: "featured",
      eyebrow: "In focus",
      heading: "Three things a scattered library cannot do",
      rows: [
        {
          heading: "Treat every format as part of one library",
          body: "Images, video, audio and documents are discovered through one unified search, so nobody has to remember which system holds which kind of file or which colleague stored it.",
          visual: { diagram: "media-library", focus: "video,image,document,audio" },
          page: 24,
        },
        {
          heading: "Keep every client in its own environment",
          body: "For agencies, each client environment can remain logically isolated, with its own storage allocation and asset boundaries, while the agency manages all of them from one platform.",
          visual: { diagram: "tenant-boundaries", focus: "tenants" },
          page: 162,
        },
        {
          heading: "Connect the library to the rest of the business",
          body: "Developers can integrate asset upload, search, collaboration and other supported workflows into custom applications, and webhook events can trigger downstream workflows when supported events occur.",
          visual: { diagram: "api-flow", focus: "webhooks" },
          page: 255,
        },
      ],
      sources: [{ kind: "pdf", page: 24 }, { kind: "pdf", page: 161 }, { kind: "pdf", page: 162 }, { kind: "pdf", page: 163 }, { kind: "pdf", page: 255 }, { kind: "pdf", page: 257 }],
    },
    {
      kind: "before-after",
      id: "creative-chaos",
      eyebrow: "Why it matters",
      heading: "Where creative chaos comes from, and what replaces it",
      intro: "Chaos rarely arrives all at once. It builds from scattered storage, inconsistent filenames, duplicate files and unclear versions.",
      beforeLabel: "Without a central library",
      afterLabel: "With GetSibu",
      before: ["Assets spread across drives, folders and uploads", "Filenames like final, final-v2 and final-final", "Copies of the same file nobody can reconcile", "Feedback lost across email, chat and project tools"],
      after: ["One library across connected sources and direct uploads", "Previous versions kept inside a single asset record", "Duplicates identified, including renamed and re-encoded copies", "Comments and approvals attached to the asset itself"],
      link: { page: 399, label: "Bring Order to Creative Chaos" },
      sources: [{ kind: "pdf", page: 399 }, { kind: "pdf", page: 6 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 40 }, { kind: "pdf", page: 73 }, { kind: "pdf", page: 74 }],
    },
    {
      kind: "tabs",
      id: "teams",
      eyebrow: "Who it's for",
      heading: "The same library, used differently by each team",
      tabs: [
        {
          label: "Marketing",
          heading: "Campaign material that stays usable",
          icon: "megaphone",
          body: [
            "Marketing teams juggle campaign assets, product imagery, videos and presentations, often for several launches at once. A central library keeps that material in one place and makes last season's work a starting point rather than something to recreate.",
            ["Asset-level discussions and approvals let the team review campaign materials before distribution, and ", { text: "approved-only views", page: 103 }, " help colleagues pick content that has completed review."],
          ],
          points: ["Campaign libraries in one place", "Approved content easy to find"],
          link: { page: 213, label: "GetSibu for Marketing Teams" },
        },
        {
          label: "Production",
          heading: "Footage, cuts and feedback together",
          icon: "film",
          body: [
            "Production studios gather far more footage than any edit uses. Organising it in one library means editors search for material instead of opening drives one by one.",
            ["Feedback can be attached to ", { text: "specific points on a video timeline", page: 64 }, ", and video teams can manage different cuts and revisions while the version history stays with the asset."],
          ],
          points: ["Frame-specific feedback", "Cuts managed as versions"],
          link: { page: 211, label: "GetSibu for Production Studios" },
        },
        {
          label: "Agencies",
          heading: "Many clients, clearly separated",
          icon: "briefcase",
          body: [
            "Agencies need to serve several clients without their material ever meeting. Multi-tenant capabilities let an agency manage multiple clients while keeping each library separate.",
            ["Client environments can have their own storage allocation, and multi-tenant configurations can support ", { text: "client-specific AI key management", page: 164 }, " where a client requires it."],
          ],
          points: ["Isolated client environments", "One platform for the whole roster"],
          link: { page: 215, label: "GetSibu for Creative Agencies" },
        },
        {
          label: "Brand",
          heading: "A controlled source of approved assets",
          icon: "shield",
          body: [
            "Brand teams care less about volume than about whether the right version of the logo, the photography and the guidelines is the one people use.",
            ["They can organise approved assets, apply brand-specific tags and manage ", { text: "expiry information", page: 104 }, " so content that should no longer be used is easier to identify."],
          ],
          points: ["Approval gates for brand assets", "Expiry information on content"],
          link: { page: 214, label: "GetSibu for Brand Teams" },
        },
      ],
      sources: [{ kind: "pdf", page: 213 }, { kind: "pdf", page: 70 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 211 }, { kind: "pdf", page: 64 }, { kind: "pdf", page: 97 }, { kind: "pdf", page: 215 }, { kind: "pdf", page: 163 }, { kind: "pdf", page: 164 }, { kind: "pdf", page: 214 }, { kind: "pdf", page: 71 }, { kind: "pdf", page: 104 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "moving-in",
      eyebrow: "Before you move",
      heading: "What to settle when bringing an existing library into GetSibu",
      intro: "Most teams arrive with years of material. These decisions make the difference between a copied mess and a library people trust.",
      items: [
        {
          heading: "Which metadata to keep",
          summary: "Fields someone spent years filling in are worth carrying across.",
          icon: "tag",
          body: [["Metadata such as EXIF, XMP, creators, file paths and custom keywords ", { text: "can be preserved during migration", page: 132 }, ". Listing the fields your team actually searches on helps you check later that they arrived."]],
        },
        {
          heading: "Whether to keep the folder structure",
          summary: "Mirroring is familiar; remapping is a chance to fix what no longer fits.",
          icon: "folder",
          body: [["You can ", { text: "mirror the old folders or remap them", page: 133 }, " on the way in. Remapping takes more planning, but it can retire structures that only made sense to whoever built them."]],
        },
        {
          heading: "Who should see what",
          summary: "Access is easier to design before content arrives than to repair afterwards.",
          icon: "lock",
          body: [["Old shared drives often grant broad access by default. In GetSibu, ", { text: "folder-level permissions", page: 152 }, " give finer control than organisation-wide access, and new folders can stay private until access is granted."]],
        },
        {
          heading: "What to do about duplicates",
          summary: "Years of exports and re-uploads leave copies behind.",
          icon: "copy",
          body: [["Duplicate detection combines exact and perceptual hashing to identify identical files and visually equivalent copies, and ", { text: "duplicate asset management", page: 112 }, " helps a team decide which copies it no longer needs."]],
        },
        {
          heading: "How to keep working during the move",
          summary: "A migration should not force the team to stop.",
          icon: "refresh",
          body: [["The ", { text: "migration workflow", page: 292 }, " is built so a team can keep working from its current storage while GetSibu indexes the content in the background."]],
        },
        {
          heading: "How you will know it worked",
          summary: "Define success before the first file moves.",
          icon: "check",
          body: [["Totals are the easy check. The meaningful ones are whether keywords survived and whether the assets people use most can be found, which is what ", { text: "migration verification", page: 296 }, " is for."]],
        },
      ],
      sources: [{ kind: "pdf", page: 132 }, { kind: "pdf", page: 133 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 154 }, { kind: "pdf", page: 40 }, { kind: "pdf", page: 112 }, { kind: "pdf", page: 292 }, { kind: "pdf", page: 296 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions teams ask before choosing GetSibu",
      items: [
        {
          question: "What kinds of creative files can a GetSibu library hold?",
          answer: ["Videos, images, documents and audio, managed and searched together. ", { text: "Audio assets", page: 28 }, " sit alongside other formats rather than in a separate system."],
        },
        {
          question: "How do existing assets get into a GetSibu library?",
          answer: ["Through ", { text: "connected storage sources and direct uploads", page: 121 }, ", watch folders that are scanned continuously, and bulk import for large existing collections."],
        },
        {
          question: "Does the AI in GetSibu organise the library without anyone checking it?",
          answer: ["No. AI suggests tags and classifications, and authorised users can ", { text: "approve suggestions in bulk or override them", page: 9 }, ", so the team decides how its library is organised."],
        },
        {
          question: "Can a GetSibu library keep sensitive folders private?",
          answer: ["Yes. Access can be controlled at folder level, and ", { text: "new folders can remain private", page: 154 }, " until access is explicitly granted."],
        },
        {
          question: "Can developers connect GetSibu to their own applications?",
          answer: ["Yes. The ", { text: "GetSibu API", page: 261 }, " gives developers and technology teams programmatic access to the platform, including asset upload and search."],
        },
      ],
      sources: [{ kind: "pdf", page: 1 }, { kind: "pdf", page: 28 }, { kind: "pdf", page: 121 }, { kind: "pdf", page: 128 }, { kind: "pdf", page: 130 }, { kind: "pdf", page: 9 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 154 }, { kind: "pdf", page: 254 }, { kind: "pdf", page: 261 }, { kind: "pdf", page: 262 }, { kind: "pdf", page: 263 }],
    },
    {
      kind: "cta",
      id: "get-started",
      heading: "Bring Your Creative Assets Together",
      conversionPage: 392,
      surface: "inverse",
      actions: [
        { kind: "global", cta: "primary" },
        { kind: "page", page: 391, label: "Start Your Creative Library" },
      ],
      sources: [{ kind: "pdf", page: 392 }, { kind: "pdf", page: 391 }, SITE_HOME],
    },
  ],
} satisfies PageContent;

export default home;
