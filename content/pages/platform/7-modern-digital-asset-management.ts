/**
 * 7 · Modern Digital Asset Management — /platform/modern-digital-asset-management
 *
 * Angle (clusters: platform-positioning, dam-fundamentals): the contrast with traditional file storage — what
 * each capability GetSibu adds (AI-assisted organisation, contextual search, collaboration, approvals, version
 * history, analytics, permission controls) changes for creative work. What Is Digital Asset Management? (361)
 * owns the vendor-neutral definition; Complete Asset Management (120) owns everything combined as one workflow.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how file storage and digital asset management differ; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 7,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Platform",
      lede: "What traditional file storage leaves out and modern digital asset management adds, taking in turn each capability GetSibu brings to creative workflows, from AI-assisted organisation and search to approvals, version history, analytics and permission controls.",
      visual: { diagram: "library-search" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 7 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Beyond keeping files available",
      body: [
        "Traditional file storage is built mainly to keep files available: somewhere to put them and a path to get them back. GetSibu takes that as its starting point and adds AI-assisted organisation, contextual search, collaboration, approvals, version history, analytics and permission controls, each shaped around creative workflows.",
        "File storage suits documents that change rarely and are retrieved by the person who saved them. Creative work behaves differently. One piece of content passes through drafts, reviews and approvals; it is reused by people who did not make it; it exists in several formats and versions at the same time. A drive can hold all of that, but it cannot explain any of it.",
        [
          "That gap is what digital asset management fills. The general practice is set out in ",
          { text: "What Is Digital Asset Management?", page: 361 },
          ", and the way GetSibu combines its capabilities into one workflow is described in ",
          { text: "complete asset management", page: 120 },
          ".",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Storage as the starting point", "Context around every file", "Work that happens on the asset", "Decisions recorded, not remembered", "Access set deliberately"],
      },
      highlight: {
        heading: "In practice",
        body: "A shared drive can confirm that a file exists. A DAM can also show whether it was approved, which version is current and what has been said about it.",
        tags: ["Creative teams", "Marketing", "Production"],
      },
      glance: {
        heading: "Modern DAM in brief",
        facts: [
          { label: "Area", value: "Platform" },
          { label: "Compared with", value: "Traditional file storage" },
          { label: "Designed for", value: "Creative workflows" },
          { label: "Adds", value: "Organisation, search, collaboration, approvals, versions, analytics, permissions" },
        ],
        actions: [{ kind: "route", path: "/platform", label: "More in Platform" }]
      },
      sources: [{ kind: "pdf", page: 7 }, { kind: "pdf", page: 361 }, { kind: "pdf", page: 120 }, { kind: "pdf", page: 68 }, { kind: "pdf", page: 100 }, { kind: "pdf", page: 62 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "storage-and-dam",
      eyebrow: "Side by side",
      heading: "File storage and modern DAM, job by job",
      columns: ["Traditional file storage", "GetSibu"],
      emphasis: 1,
      rows: [
        ["Purpose", "Keeping files available", "Moving assets from upload through organisation, review, approval and final use"],
        ["Finding a file", "Filename and folder path", "Filenames, metadata, extracted text, AI tags, comments and meaning"],
        ["Feedback", "Email, chat and separate tools", "Comments and threads attached to the asset"],
        ["Revisions", "Copies saved under new names", "Replaced in place, earlier versions retained"],
        ["Knowing what happens", "Little beyond file dates", "Activity across uploads, comments, contributors and tags"],
        ["Access", "Shared folders and open links", "Folder-level permissions and controlled sharing"],
      ],
      sources: [{ kind: "pdf", page: 7 }, { kind: "pdf", page: 80 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 73 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 181 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 172 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "additions",
      eyebrow: "What each addition changes",
      heading: "Seven additions and the creative problems they address",
      items: [
        {
          heading: "AI-assisted organisation",
          summary: "Classification that starts when a file arrives, not when someone finds the time.",
          icon: "sparkles",
          body: [
            "In file storage, a file is described by its name and location and nothing more, unless someone adds to it. At the volume creative teams produce, that extra description is the first thing to be skipped.",
            ["GetSibu can ", { text: "suggest tags during asset processing", page: 31 }, ", so teams do not have to classify every file by hand, and authorised users can still review, approve or override each suggestion."],
          ],
        },
        {
          heading: "Contextual search",
          summary: "Search that uses what is known about an asset, not only its name.",
          icon: "search",
          body: [
            "Searching a drive means guessing the words someone once chose for a filename.",
            [{ text: "Natural language asset search", page: 18 }, " lets people describe assets the way they remember them, and ", { text: "saved asset searches", page: 17 }, " turn a frequent query into a reusable view shared through a URL."],
          ],
        },
        {
          heading: "Collaboration",
          summary: "Conversations about a file happen where the file is.",
          icon: "message",
          body: [
            "Storage has no room for discussion, so feedback moves to email and chat, where it loses its link to the file it concerns.",
            [{ text: "Creative team collaboration", page: 61 }, " puts discussion inside the asset library itself, and ", { text: "video timeline comments", page: 64 }, " attach notes to specific points in a video."],
          ],
        },
        {
          heading: "Approvals",
          summary: "A clear answer to whether an asset is ready to use.",
          icon: "approval",
          body: [
            "A folder named “Approved” is only as reliable as the last person who moved a file into it.",
            [{ text: "Asset approval", page: 68 }, " moves content through a process with status history, recording whether it is awaiting review, approved or requires changes, so the answer comes from a record rather than a folder name."],
          ],
        },
        {
          heading: "Version history",
          summary: "One asset record instead of a trail of renamed copies.",
          icon: "history",
          body: [
            "When storage is the only tool, every revision becomes a new file, and the question of which is current gets settled by modification date or by asking around.",
            [{ text: "File version history", page: 92 }, " keeps a record of previous versions and allows older ones to be restored, while ", { text: "creative revision tracking", page: 100 }, " helps teams see what changed and which version is active."],
          ],
        },
        {
          heading: "Analytics",
          summary: "Visibility into how the library grows and what gets used.",
          icon: "chart",
          body: [
            "Storage reports how full a disk is. It says nothing about which assets people rely on and which have never been opened.",
            [{ text: "Asset usage analytics", page: 182 }, " show which assets receive attention and which remain underused, and ", { text: "storage analytics", page: 183 }, " show how much space each asset category consumes."],
          ],
        },
        {
          heading: "Permission controls",
          summary: "Access decided by design, not inherited from whoever shared a link.",
          icon: "lock",
          body: [
            "Shared storage leans towards all-or-nothing access, and links forwarded beyond their intended audience are hard to keep track of.",
            [{ text: "Default-deny access", page: 154 }, " keeps new folders private until access is explicitly granted, and ", { text: "permission auditing", page: 170 }, " records changes to access in the audit history."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 31 }, { kind: "pdf", page: 18 }, { kind: "pdf", page: 17 }, { kind: "pdf", page: 61 }, { kind: "pdf", page: 64 }, { kind: "pdf", page: 68 }, { kind: "pdf", page: 92 }, { kind: "pdf", page: 100 }, { kind: "pdf", page: 182 }, { kind: "pdf", page: 183 }, { kind: "pdf", page: 154 }, { kind: "pdf", page: 170 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A studio that outgrew its shared drive",
      team: "A creative studio",
      situation: "A small creative studio has kept everything on one shared drive since it opened. With more clients and more staff, finding the right file now depends on who happens to be in the office.",
      steps: [
        {
          heading: "The drive moves into the library",
          body: ["The studio imports the drive in bulk, mirrors its familiar top-level folders and keeps ", { text: "metadata such as creators and custom keywords", page: 132 }, " along the way."],
        },
        {
          heading: "Tags take over from filenames",
          body: "Instead of packing client, year and status into every filename, the team reviews AI-suggested tags and uses asset statuses to tell drafts from approved work.",
        },
        {
          heading: "Feedback moves onto the work",
          body: "Review notes that once arrived by email are now left on the assets themselves, and approvals record which designs were signed off.",
        },
        {
          heading: "Access follows the account",
          body: "Each client’s folders are opened only to the people working on that account, where previously the whole drive was visible to everyone.",
        },
        {
          heading: "The studio sees its library",
          body: "Usage analytics show which assets receive attention and which sit unused, which shapes what the studio keeps up to date.",
        },
      ],
      outcome: "The studio still stores its files, but it now also knows what they are, where each stands in review and who can reach them, which the drive on its own never told it.",
      link: { page: 220, label: "GetSibu for Creative Studios" },
      sources: [{ kind: "pdf", page: 130 }, { kind: "pdf", page: 132 }, { kind: "pdf", page: 133 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 102 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 182 }, { kind: "pdf", page: 220 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about modern digital asset management",
      items: [
        {
          question: "Is modern digital asset management a replacement for file storage?",
          answer: "It builds on storage rather than discarding it. Files still need somewhere to live; a modern DAM adds the layer that describes them, governs them and connects them to the work.",
        },
        {
          question: "What are the signs that a creative team has outgrown shared file storage?",
          answer: "Colleagues asking where files are, several copies of one asset under different names, feedback lost in email threads and uncertainty over which version was approved. Each is a problem storage alone was never designed to solve.",
        },
        {
          question: "How does GetSibu go further than traditional DAM, not just file storage?",
          answer: "GetSibu extends traditional digital asset management with AI-assisted tagging, semantic search and collaboration, on top of the storing, organising, finding and distributing that DAM has always covered.",
        },
        {
          question: "Is modern digital asset management only for large organisations?",
          answer: ["No. GetSibu is designed for production, marketing, brand and agency teams and creative studios, and ", { text: "freelancers", page: 226 }, " can also use it to organise personal creative libraries and locate reusable assets."],
        },
      ],
      sources: [{ kind: "pdf", page: 7 }, { kind: "pdf", page: 361 }, { kind: "pdf", page: 382 }, { kind: "pdf", page: 226 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on what DAM adds to storage",
      variant: "compact",
      pages: [361, 120, 91, 68, 181, 151],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the permissions overview." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Give Your Creative Team One Source of Truth",
      conversionPage: 395,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 395 }],
    },
  ],
};

export default page;
