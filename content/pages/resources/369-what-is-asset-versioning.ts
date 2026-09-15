/**
 * 369 · What Is Asset Versioning? — /resources/what-is-asset-versioning
 *
 * Angle (cluster: workflow-explainers, primary; versioning): vendor-neutral explainer of the concept — the asset
 * versus the file, the vocabulary around versions (current version, revision, variant, rendition, copy), how a
 * history builds up and which decisions to settle. The versioning feature pages (91–100) own GetSibu's
 * capabilities by angle and asset type; FAQ 386 owns the yes answer.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Vendor-neutral explanation of asset versioning; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 369,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "centered",
      eyebrow: "Resources",
      lede: "What asset versioning means, how it differs from saving copies or making variants, how an asset’s history builds up, the decisions to settle before relying on it, and how GetSibu retains previous versions when an asset is replaced.",
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 369 }, { kind: "pdf", page: 91 }],
    },
    {
      kind: "definition",
      id: "definition",
      eyebrow: "Definition",
      term: "Asset versioning",
      answer: "Asset versioning maintains previous versions of a file so teams can understand its history and restore earlier versions when necessary. Each revision becomes a new state of one asset rather than a separate file.",
      detail: "Without versioning, every change produces another file with another name: the draft, the one with the client’s changes, the one with the new logo. With versioning, the asset keeps a single identity while the file inside it changes, and the earlier files stay available behind it.",
      sources: [{ kind: "pdf", page: 369 }, EXPLAINS],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "One identity for an asset, many states over time",
      body: [
        "Versioning separates two things that shared folders treat as one: the asset and the file. The asset is what people refer to, such as the spring hero image. The file is whatever that asset looks like today. Versioning lets the file change while the asset itself stays in place.",
        "The distinction matters because creative work is iterative. A brochure passes through rounds of copy changes, a film through several cuts, a product image through retouching and colour correction. If each round creates a new file, the discussion, tags and approvals from earlier rounds end up attached to files nobody opens, and colleagues keep sharing whichever copy they found first.",
        [
          "Versioning sits close to two other ideas. ",
          { text: "Creative approval", page: 370 },
          " records which state of an asset was accepted, and ",
          { text: "creative governance", page: 371 },
          " decides who may replace a file and how long earlier states are kept.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["The asset versus the file", "Current and earlier versions", "History kept, not overwritten", "Restoring an earlier state", "Versions versus variants"],
      },
      highlight: {
        heading: "In practice",
        body: "When a client asks for the previous colour grade back, the editor restores the earlier version of the same asset instead of hunting for an old export on somebody’s desktop.",
        tags: ["Editors", "Designers", "Account teams"],
      },
      glance: {
        heading: "Versioning in brief",
        facts: [
          { label: "Area", value: "Asset management" },
          { label: "Keeps", value: "Previous versions of a file" },
          { label: "Allows", value: "Restoring an earlier state" },
          { label: "In GetSibu", value: "Creative Asset Versioning", page: 91 },
        ],
        actions: [{ kind: "route", path: "/resources", label: "More in Resources" }]
      },
      sources: [{ kind: "pdf", page: 369 }, { kind: "pdf", page: 370 }, { kind: "pdf", page: 371 }, { kind: "pdf", page: 91 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "key-terms",
      eyebrow: "Key terms",
      heading: "Words that get confused around versions",
      items: [
        {
          heading: "Version",
          summary: "A saved state of an asset at one point in its history.",
          icon: "history",
          body: [
            "Whenever an asset’s file is replaced by a revised one, the previous file becomes an earlier version. Versions are ordered in time, and together they make up the asset’s version history.",
          ],
        },
        {
          heading: "Current version",
          summary: "The state people see and use by default.",
          icon: "check",
          body: [
            "Search results, previews and shares typically show the current version, with earlier ones reached through the history. Knowing which version is current reduces the temptation to write status into filenames.",
          ],
        },
        {
          heading: "Revision",
          summary: "The change that turns one version into the next.",
          icon: "refresh",
          body: [
            "The two words are often used interchangeably, but separating the change from its result is useful. A short note on what each revision altered makes a long history far easier to read later.",
          ],
        },
        {
          heading: "Variant",
          summary: "A deliberate alternative that exists alongside the original, not after it.",
          icon: "layers",
          body: [
            "A portrait crop, an edition with French copy or a cut-down edit for social channels is a variant, used in its own right. Stacking variants as versions hides them, because only one version can be current at a time.",
          ],
        },
        {
          heading: "Rendition",
          summary: "A derived file generated from a version for a particular use.",
          icon: "image",
          body: [
            "Thumbnails, previews and converted formats are renditions. They belong to a version and are normally regenerated when the version changes, so they are rarely versioned themselves.",
          ],
        },
        {
          heading: "Copy",
          summary: "An independent duplicate with no link to the original’s history.",
          icon: "copy",
          body: [
            "A copy starts a life of its own the moment it is made. Later changes to the original never reach it, which is why copies are a common source of outdated material in circulation.",
          ],
        },
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "timeline",
      id: "history",
      eyebrow: "In general",
      heading: "How one asset’s history builds up",
      items: [
        { label: "First upload", body: "A designer adds the initial layout. As the only version, it is also the current one." },
        { label: "Revision after feedback", body: "Comments ask for a new headline. The revised file replaces the first, which moves into the history." },
        { label: "Approved state", body: "A reviewer signs off the second version. Recorded carefully, that approval refers to this specific state of the asset." },
        { label: "Later update", body: "Months later a legal line changes. A third version becomes current and may need approving again." },
        { label: "Restored", body: "An error slips into the update, so the team restores the second version while the fix is prepared." },
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "checklist",
      id: "decisions",
      eyebrow: "Before you rely on it",
      heading: "Versioning decisions worth settling early",
      variant: "chips",
      items: ["What counts as a new version", "Who may replace a file", "When a variant needs its own asset", "Whether approval carries to a new version", "How long earlier versions are kept", "What shared links point to"],
      sources: [EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "in-getsibu",
      eyebrow: "In GetSibu",
      heading: "How GetSibu applies asset versioning",
      items: [
        {
          heading: "Replacement without losing history",
          body: "Replacing an asset does not have to mean losing previous work, because GetSibu maintains versions within the asset record.",
          icon: "refresh",
          points: ["Replace in place", "Earlier files retained"],
          page: 93,
        },
        {
          heading: "Version history and restore",
          body: "Version history gives teams a record of previous versions, and an older version can be restored when the work needs to return to an earlier creative state.",
          icon: "restore",
          page: 92,
        },
        {
          heading: "Which version is active",
          body: "Revision tracking helps teams understand what changed between versions and which version is currently active.",
          icon: "check",
          page: 100,
        },
        {
          heading: "History as context",
          body: "File history provides context around how an asset has changed over time.",
          icon: "history",
          page: 95,
        },
        {
          heading: "The accepted version on record",
          body: "Approval history keeps a record of review activity, reducing confusion about which version was accepted.",
          icon: "approval",
          page: 77,
        },
      ],
      sources: [{ kind: "pdf", page: 93 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 92 }, { kind: "pdf", page: 94 }, { kind: "pdf", page: 100 }, { kind: "pdf", page: 95 }, { kind: "pdf", page: 77 }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about asset versioning",
      items: [
        {
          question: "Is asset versioning the same as the version history in a file-sharing tool?",
          answer: "They share an idea but serve different purposes. File-sharing history mainly protects a single file against unwanted changes. Asset versioning treats each revision as a state of something people search for, review and approve, so the history is part of how the asset is used rather than only a safety net.",
        },
        {
          question: "Should every small change to an asset create a new version?",
          answer: "Not usually. A version earns its place when someone might need to see or return to the earlier state, such as a round of client changes or a new cut. A typo corrected before anyone has reviewed the work rarely justifies one, and fewer trivial versions keep a history readable.",
        },
        {
          question: "Does asset versioning take up more storage?",
          answer: "Generally, yes, since earlier files are kept. Teams manage it by deciding how long earlier versions are worth keeping, which is a governance choice more than a technical one.",
        },
        {
          question: "Can GetSibu keep versions of videos and documents?",
          answer: ["Yes. ", { text: "Video version management", page: 97 }, " keeps cuts and revisions associated with the asset, and documents and presentations can be replaced while their historical versions are retained."],
        },
      ],
      sources: [{ kind: "pdf", page: 97 }, { kind: "pdf", page: 99 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on versions and file history",
      variant: "compact",
      pages: [91, 92, 94, 100, 386, 370],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page, the matching FAQ and the approval explainer." }],
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
