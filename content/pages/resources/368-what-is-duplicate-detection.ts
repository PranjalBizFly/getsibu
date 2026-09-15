/**
 * 368 · What Is Duplicate Detection? — /resources/what-is-duplicate-detection
 *
 * Angle (cluster: duplicate-detection; ai-explainers): vendor-neutral explainer of what counts as a duplicate, how
 * exact and perceptual comparison work in general, what each tends to catch or miss, and how to decide what a
 * match means. AI Duplicate Detection (40) owns GetSibu's technique, Duplicate Asset Management (112) library
 * housekeeping and Duplicate Reduction (350) the business value.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Vendor-neutral explanation of duplicate detection; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 368,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "centered",
      eyebrow: "Resources",
      lede: "What counts as a duplicate, how exact and perceptual hashing identify identical files and visually equivalent copies, where each method falls short, how to judge a match, and how GetSibu applies duplicate detection.",
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 368 }, { kind: "pdf", page: 40 }],
    },
    {
      kind: "definition",
      id: "definition",
      eyebrow: "Definition",
      term: "Duplicate detection",
      answer: "Duplicate detection identifies files that are identical or visually equivalent, including some renamed or re-encoded copies. It compares what files contain, not what they are called.",
      detail: "Libraries collect copies without anyone meaning to: the same photograph exported twice, a video recompressed for sharing, an image saved from an email and uploaded again under a new name. Filenames, dates and folders are poor guides to whether two files are the same, so detection works from fingerprints calculated from the content itself.",
      sources: [{ kind: "pdf", page: 368 }, EXPLAINS],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "How one asset ends up in a library several times",
      body: [
        "Duplicate detection searches a library for files that are the same, either byte for byte or to the eye. A match is information rather than a verdict: it tells a team that two files are alike and leaves the decision about what to do to people.",
        "Duplicates are a by-product of ordinary creative work. Files travel between drives, inboxes, shared links and editing software, and every hop is a chance to create another copy under another name. Over time the copies inflate storage, fill search results with the same picture, and raise doubt about which copy carries the correct keywords or approval.",
        [
          "Clear vocabulary helps. An exact duplicate is an identical file. A visually equivalent copy looks the same but differs in its data, perhaps because it was resized or saved in another format. A version is a deliberate revision and a variant is a deliberate alternative; those belong together rather than in the bin, which is where ",
          { text: "asset versioning", page: 369 },
          " comes in.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Identical files", "Visually equivalent copies", "Exact and perceptual hashes", "A match is not a verdict", "Duplicates versus versions"],
      },
      highlight: {
        heading: "In practice",
        body: "A designer downloads a logo, renames it for a pitch and adds it to the library again. Nothing in the new name links the two files, yet their data is identical, so an exact comparison pairs them regardless of what either is called.",
        tags: ["Renamed files", "Exact hashing", "Housekeeping"],
      },
      glance: {
        heading: "Duplicate detection in brief",
        facts: [
          { label: "Area", value: "AI and library maintenance" },
          { label: "Compares", value: "File content, not filenames" },
          { label: "Methods", value: "Exact and perceptual hashing" },
          { label: "In GetSibu", value: "AI Duplicate Detection", page: 40 },
        ],
        actions: [{ kind: "route", path: "/resources", label: "More in Resources" }]
      },
      sources: [{ kind: "pdf", page: 368 }, { kind: "pdf", page: 369 }, { kind: "pdf", page: 40 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "what-each-catches",
      eyebrow: "In general",
      heading: "What exact and perceptual comparison tend to catch",
      intro: "Results depend on the algorithm and the similarity threshold, so read this as typical behaviour rather than a rule.",
      columns: ["Exact hash", "Perceptual hash"],
      rows: [
        { label: "Identical file under a new name", cells: ["Matched", "Matched"] },
        { label: "Same image with edited embedded metadata", cells: ["Usually missed", "Matched"] },
        { label: "Same image saved at a smaller size", cells: ["Missed", "Usually matched"] },
        { label: "Recompressed or converted to another format", cells: ["Missed", "Usually matched"] },
        { label: "Heavily cropped, rotated or mirrored", cells: ["Missed", "Often missed"] },
        { label: "A different photograph from the same shoot", cells: ["Not matched", "Not matched unless nearly identical"] },
      ],
      sources: [{ kind: "pdf", page: 368 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "deciding",
      eyebrow: "Considerations",
      heading: "Deciding what a match really means",
      items: [
        {
          heading: "Duplicate or revision?",
          summary: "Two files can look alike because one is a later state of the other.",
          icon: "history",
          body: [
            "A retouched photograph and its original may be similar enough to match. When both matter, they belong together as versions of one asset, so the match points to a relationship worth recording rather than a copy to remove.",
          ],
        },
        {
          heading: "Deliberate variants",
          summary: "Crops, sizes and language editions look alike by design.",
          icon: "layers",
          body: [
            "A square crop for social channels, a banner size and an edition with localised text can register as near-duplicates. They are separate deliverables, so a team needs a rule for keeping variants and a way of showing how they relate to the master.",
          ],
        },
        {
          heading: "Which copy survives",
          summary: "When copies really are redundant, keep the most complete one.",
          icon: "check",
          body: [
            "Prefer the highest-quality original, the copy with the richest metadata and the one carrying approval or usage history. Before removing the others, check whether any holds information the survivor lacks, such as keywords added by a different team.",
          ],
        },
        {
          heading: "Thresholds and false matches",
          summary: "Similarity is a sliding scale, and someone decides where a match begins.",
          icon: "gauge",
          body: [
            "A strict threshold misses copies that were lightly edited; a loose one flags different photographs with similar compositions, such as product shots on the same plain background. Reviewing matches before acting on them guards against both.",
          ],
        },
        {
          heading: "Video and documents",
          summary: "Moving images and text files call for their own kinds of comparison.",
          icon: "video",
          body: [
            "Video fingerprints are typically built from sampled frames, so a re-encoded copy of a clip can still be recognised. Documents are usually compared by their data or their extracted text, because a picture of a page says little about whether its words have changed.",
          ],
        },
        {
          heading: "When detection runs",
          summary: "Some systems compare files as they arrive; others scan content already in the library.",
          icon: "upload",
          body: [
            ["Checking new material against the existing library can catch a copy before it spreads into collections, shares and search results, while a scan of stored content finds copies already in place. Both matter during a ", { text: "DAM migration", page: 376 }, ", when several old locations often hold the same files, so ask which approach any system takes."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 376 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "in-getsibu",
      eyebrow: "In GetSibu",
      heading: "How GetSibu applies duplicate detection",
      items: [
        {
          heading: "Two kinds of hashing",
          body: "GetSibu combines exact and perceptual hashing, which lets it identify identical files as well as copies that are visually equivalent.",
          icon: "copy",
          points: ["Renamed copies", "Re-encoded copies"],
          page: 40,
        },
        {
          heading: "Unnecessary copies identified",
          body: "Duplicate asset management helps identify copies a team does not need, and can support storage optimisation.",
          icon: "filter",
          page: 112,
        },
        {
          heading: "Storage consumption understood",
          body: "Duplicate detection and storage analytics can help teams understand how their storage is being consumed.",
          icon: "database",
          page: 357,
        },
        {
          heading: "A signal of library health",
          body: "Library health analytics can reveal duplicates alongside growth, inactive content and other organisational patterns.",
          icon: "gauge",
          page: 196,
        },
      ],
      sources: [{ kind: "pdf", page: 40 }, { kind: "pdf", page: 112 }, { kind: "pdf", page: 357 }, { kind: "pdf", page: 196 }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about duplicate detection",
      items: [
        {
          question: "What is perceptual hashing?",
          answer: "It is a way of fingerprinting an image from its visual structure rather than its exact data. Images that look alike produce similar fingerprints, so a resized or recompressed copy can be matched to its original by measuring how far apart the two fingerprints are.",
        },
        {
          question: "How is duplicate detection different from searching for similar images?",
          answer: "Both compare content, but they answer different questions. Duplicate detection looks for files that are, for practical purposes, the same asset; a similarity search looks for assets that merely resemble one another, such as other photographs in the same style, and serves discovery rather than housekeeping.",
        },
        {
          question: "Should duplicate files be deleted automatically?",
          answer: "Reviewing first is safer. A match may be a deliberate variant or a revision, and the copy you would remove might hold metadata, comments or approvals that the other lacks.",
        },
        {
          question: "How does duplicate detection help with storage?",
          answer: ["It identifies copies that may be redundant, so a team can decide which ones it no longer needs. ", { text: "Duplicate reduction", page: 350 }, " can also ease the confusion caused by several copies of one asset circulating at once."],
        },
      ],
      sources: [{ kind: "pdf", page: 350 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on duplicates and library housekeeping",
      variant: "compact",
      pages: [40, 112, 350, 196, 111, 369],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the library maintenance topic." }],
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
