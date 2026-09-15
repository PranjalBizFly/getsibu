/**
 * 112 · Duplicate Asset Management — /features/duplicate-asset-management
 *
 * Angle (clusters: duplicate-detection, library-maintenance): library housekeeping, identifying unnecessary copies
 * to support storage optimisation: judging which copies matter, a storage-led review, and what copies cost.
 * AI Duplicate Detection (40) owns the technique; What Is Duplicate Detection? (368) the explainer; Duplicate
 * Reduction (350) the business value.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of managing duplicate copies in creative libraries; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 112,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Versioning & Asset Management",
      lede: "How to decide which copies in a creative library are unnecessary, where to start when storage is the concern, and how identifying those copies can support storage optimisation without removing files that still do a job.",
      visual: { diagram: "media-library", focus: "video,image" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 112 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Finding the copies a library does not need",
      body: [
        "In GetSibu, duplicate detection helps identify unnecessary copies of assets, and doing so can support storage optimisation.",
        "Duplicate asset management is the housekeeping that follows. A library holding the same film master in several places pays for that storage several times, and shows the film several times in results. Not every copy is a mistake, though. Some exist because a partner needs a different format, or because two clients’ libraries are deliberately kept apart, and the work lies in telling those from the rest.",
        [
          "How copies are identified, using exact and perceptual hashing, is explained under ",
          { text: "AI duplicate detection", page: 40 },
          ". Deciding what each match means, and acting on it as routine rather than as a one-off purge, is part of wider ",
          { text: "creative library maintenance", page: 111 },
          ".",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Unnecessary copies identified", "Storage optimisation", "Copies that still do a job", "Priorities led by storage", "An accountable choice of which copy stays"],
      },
      highlight: {
        heading: "In practice",
        body: "A production company finds the same large video masters stored under several projects. Clearing the unneeded copies can help reduce the storage those masters take up, and it leaves one record of each master to keep up to date.",
        tags: ["Video", "Storage", "Production"],
      },
      glance: {
        heading: "Duplicate management in brief",
        facts: [
          { label: "Identifies", value: "Unnecessary copies of assets" },
          { label: "Supports", value: "Storage optimisation" },
          { label: "Technique", value: "AI Duplicate Detection", page: 40 },
          { label: "Storage view", value: "Storage Analytics", page: 183 },
        ],
        actions: [{ kind: "route", path: "/features/asset-management", label: "More in Versioning & Asset Management" }]
      },
      sources: [{ kind: "pdf", page: 112 }, { kind: "pdf", page: 40 }, { kind: "pdf", page: 111 }, { kind: "pdf", page: 183 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "necessary-or-not",
      eyebrow: "Judging a copy",
      heading: "Whether a copy is unnecessary depends on its purpose",
      intro: "Detection shows that two files match; what each one is for decides whether both should stay.",
      columns: ["Usually", "Why"],
      rows: [
        { label: "Identical file uploaded again to the same area", cells: ["Unnecessary", "It adds nothing the original does not already provide"] },
        { label: "Copy saved just in case before a revision", cells: ["Unnecessary", "Earlier versions can be retained within the asset instead"] },
        { label: "Same work scattered across old project folders", cells: ["Usually unnecessary", "Merged storage often brings one piece of work in several times"] },
        { label: "Lower-quality export of a master", cells: ["Depends on use", "A deliverable for a channel stays; a stray export does not"] },
        { label: "Same file held in two clients’ libraries", cells: ["Often necessary", "Each client environment can remain logically isolated"] },
        { label: "Crop or resize of an image", cells: ["Not a duplicate", "It serves a different use, however similar it looks"] },
      ],
      sources: [{ kind: "pdf", page: 91 }, { kind: "pdf", page: 161 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "storage-led-review",
      eyebrow: "Step by step",
      heading: "A duplicate review that starts from storage",
      intro: "When the aim is storage optimisation, begin where copies take up the most space.",
      steps: [
        { heading: "See where storage goes", body: "Storage analytics provide a view of how much space different asset categories, such as video, image, document and audio, consume.", icon: "chart", page: 183 },
        { heading: "Start with the heaviest media", body: "Copies of long video files take up far more room than copies of small images, so large categories are the natural place to begin.", icon: "video" },
        { heading: "Identify the copies", body: "Identical files and visually equivalent copies are the candidates, and the largest of them are the ones to look at first.", icon: "scan", page: 40 },
        { heading: "Decide copy by copy", body: "For each file and its copies, choose which one stays by its purpose and its use rather than by filename or upload date.", icon: "check" },
        { heading: "Clear what is not needed", body: "Authorised users remove unnecessary copies according to policy, while anything with historical value is archived instead.", icon: "trash", page: 109 },
        { heading: "Keep an eye on growth", body: "Storage growth analytics give historical context on how quickly the library is expanding, and an unexpected change is a prompt to look for copies again.", icon: "trend", page: 149 },
      ],
      sources: [{ kind: "pdf", page: 183 }, { kind: "pdf", page: 40 }, { kind: "pdf", page: 109 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 149 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "costs",
      eyebrow: "What copies cost",
      heading: "Three ways unnecessary copies weigh on a library",
      tabs: [
        {
          label: "Storage",
          heading: "Space paid for more than once",
          icon: "database",
          body: [
            ["Creative files are large, and a copied video master or photo shoot takes as much room as the original. ", { text: "Storage efficiency", page: 357 }, " starts with understanding that consumption, and duplicate detection and storage analytics can help teams better understand how their storage is being consumed."],
            "Proxies and review copies deserve a separate thought. A lightweight copy made so people can preview a film is doing a job, while a second full-size master is usually not.",
          ],
          points: ["Large media multiplies the cost", "Working copies judged apart from masters"],
        },
        {
          label: "Search",
          heading: "The same picture, again and again",
          icon: "search",
          body: [
            "Every copy is another result. When one image appears several times, colleagues scroll past repeats, other relevant material gets pushed further down, and the copy someone picks may be the poorest of the set.",
            "Done carefully, clearing unnecessary copies shortens results without taking away anything a searcher needed, so duplicate management is worthwhile even where storage is not the main concern.",
          ],
          points: ["Repeats crowd out other material", "The weakest copy is easy to pick"],
        },
        {
          label: "Confidence",
          heading: "Which copy is the real one?",
          icon: "shield",
          body: [
            "Copies drift apart over time. One gains accurate tags, another is the one that went through approval, and a third is the one colleagues actually use. Soon nobody can say which holds the correct tags or the sign-off.",
            ["Consolidating to a single asset gives the team one ", { text: "workflow status", page: 102 }, " to rely on, rather than several copies each telling a slightly different story."],
          ],
          points: ["Tags and approvals split across copies", "One asset, one status to check"],
        },
      ],
      sources: [{ kind: "pdf", page: 357 }, { kind: "pdf", page: 102 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about duplicate asset management",
      items: [
        {
          question: "How is duplicate asset management different from duplicate reduction?",
          answer: ["Duplicate asset management is the housekeeping practice: judging which copies are unnecessary and dealing with them. ", { text: "Duplicate reduction", page: 350 }, " describes the business result, less unnecessary storage consumption and less confusion from multiple copies."],
        },
        {
          question: "How do unnecessary copies end up in a creative library?",
          answer: ["Mostly through ordinary file movement: several old drives brought together during ", { text: "bulk asset import", page: 130 }, ", downloads uploaded again by someone who could not find the original, and exports made for one purpose and later shared as if they were masters."],
        },
        {
          question: "When is the right time to review duplicate assets?",
          answer: "After any large import or migration, at the end of major productions, and whenever storage grows faster than the amount of new work would explain.",
        },
        {
          question: "Who should decide which duplicate asset to keep?",
          answer: ["Whoever is accountable for that area of the library, ideally after a word with the people who added the copies. ", { text: "Asset ownership", page: 115 }, " provides context about who created or uploaded content, which shows whom to ask."],
        },
      ],
      sources: [{ kind: "pdf", page: 350 }, { kind: "pdf", page: 130 }, { kind: "pdf", page: 115 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on copies and storage",
      variant: "compact",
      pages: [40, 350, 111, 183, 357, 149],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
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
