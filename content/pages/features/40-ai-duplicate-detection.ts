/**
 * 40 · AI Duplicate Detection — /features/ai-duplicate-detection
 *
 * Angle (cluster: duplicate-detection, primary): the technique — exact hashing plus perceptual hashing, what each
 * notices, and why the combination catches renamed and re-encoded copies; then what a match means for the team.
 * Duplicate Asset Management (112) owns housekeeping and storage optimisation, Duplicate Reduction (350) the
 * business value, What Is Duplicate Detection? (368) the vendor-neutral explainer.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of exact and perceptual hashing in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 40,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "AI",
      lede: "How GetSibu’s duplicate detection pairs exact hashing with perceptual hashing, what each technique notices, and why together they can catch copies that have been renamed or re-encoded.",
      visual: { diagram: "media-library" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 40 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Two kinds of fingerprint for one question",
      body: [
        "Duplicate detection in GetSibu uses exact hashing and perceptual hashing together. Between them, they identify files that are identical and copies that are visually equivalent, even when a copy has been renamed or re-encoded since the original was made.",
        "Duplicates in creative libraries rarely announce themselves. A photograph is exported again for the web, a file is re-encoded for another channel, a folder is copied to a new drive and renamed so it makes sense to a different team. Each copy looks like a new file to anything that only compares names or dates, and a folder-by-folder clean-up struggles to keep pace.",
        "A hash is a compact fingerprint calculated from what a file contains. The two kinds combined here answer different questions: an exact hash asks whether two files hold the same data, while a perceptual hash asks whether they look the same. Neither question is enough on its own.",
        [
          "Finding copies is the first half of the job. The business side is covered by ",
          { text: "duplicate reduction", page: 350 },
          ", and ",
          { text: "What Is Duplicate Detection?", page: 368 },
          " explains the idea without reference to any one product.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Exact hashing for identical files", "Perceptual hashing for visual equivalents", "Renamed copies can be caught", "Re-encoded copies can be caught", "Keeping a copy is a judgement"],
      },
      highlight: {
        heading: "In practice",
        body: "A campaign photograph saved again at lower quality for the web, then renamed by the social team, shares neither its data nor its name with the master. The perceptual comparison is what can still recognise it as the same image.",
        tags: ["Exports", "Renamed files", "Library hygiene"],
      },
      glance: {
        heading: "Duplicate detection in brief",
        facts: [
          { label: "Area", value: "AI" },
          { label: "Techniques", value: "Exact and perceptual hashing" },
          { label: "Identifies", value: "Identical files and visually equivalent copies" },
          { label: "Supports", value: "Duplicate Asset Management", page: 112 },
        ],
        actions: [{ kind: "route", path: "/features/ai", label: "More in AI" }]
      },
      sources: [{ kind: "pdf", page: 40 }, { kind: "pdf", page: 350 }, { kind: "pdf", page: 368 }, { kind: "pdf", page: 112 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "techniques",
      eyebrow: "Side by side",
      heading: "What each hashing technique notices",
      intro: "In general terms, the two fingerprints respond very differently to the ways a file can change.",
      columns: ["Exact hashing", "Perceptual hashing"],
      rows: [
        { label: "Fingerprint of", cells: ["The file’s data, bit for bit", "How the visual content looks"] },
        { label: "An identical copy", cells: ["Matches", "Matches"] },
        { label: "The same file renamed", cells: ["Matches: the data is unchanged", "Matches: the content is unchanged"] },
        { label: "A re-encoded copy", cells: ["No match: the data has changed", "Can match: it still looks the same"] },
        { label: "Separate shots of one subject", cells: ["No match", "Usually no match: the pictures differ"] },
        { label: "What a match means", cells: ["The data is the same", "The content looks equivalent"] },
      ],
      sources: [{ kind: "pdf", page: 40 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "how-copies-are-caught",
      eyebrow: "In general",
      heading: "How a pair of fingerprints catches a copy",
      intro: "A simplified picture of the technique; implementations vary in the detail.",
      steps: [
        { heading: "Fingerprint the data", body: "An exact hash is calculated from every byte of the file, and changing even one of them produces a completely different value.", icon: "key" },
        { heading: "Fingerprint the look", body: "A perceptual hash is calculated from a reduced summary of the picture itself, so technical changes such as re-compression move the value only slightly.", icon: "eye" },
        { heading: "Compare exact values", body: "Exact values either match or they do not. Equal values mean the two files hold the same data, so no judgement is involved.", icon: "copy" },
        { heading: "Compare visual values", body: "Perceptual values are compared by how far apart they are, and values that sit very close together point to visually equivalent copies an exact comparison would miss.", icon: "scan" },
        { heading: "Decide with context", body: "A match says that two files are the same or look the same; which of them a library should keep is a judgement for someone who knows the work.", icon: "users" },
      ],
      sources: [{ kind: "pdf", page: 40 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "what-a-match-means",
      eyebrow: "Considerations",
      heading: "Deciding what a match means for your library",
      items: [
        {
          heading: "Identical files",
          summary: "Exact matches are the simplest case, but context still matters.",
          icon: "copy",
          body: [
            "When two files share an exact hash, their content is the same, so the choice is about everything around it: which copy sits in the expected folder, which carries fuller information and which one colleagues already use.",
            ["Before removing a copy, check that nothing useful is recorded only against it, such as ", { text: "metadata and custom keywords", page: 22 }, " held in one copy’s asset record."],
          ],
        },
        {
          heading: "Visually equivalent copies",
          summary: "Looking the same is not always the same as serving the same purpose.",
          icon: "image",
          body: [
            "A re-encoded file may be a poorer copy of the original, or it may be the approved web version the team actually publishes. Visual equivalence tells you the content matches; it cannot tell you which file does which job.",
          ],
        },
        {
          heading: "Copies that were meant to be versions",
          summary: "Some copies exist because a new version was saved as a separate file.",
          icon: "history",
          body: [
            ["A file re-exported and saved as “final-v2” beside the original is a copy with a story: someone meant it to replace what came before. Where that is the case, the history belongs in one record, and GetSibu lets teams ", { text: "replace assets in place while retaining previous versions", page: 91 }, "."],
          ],
        },
        {
          heading: "Archive or remove",
          summary: "Getting rid of a copy is a governance decision.",
          icon: "archive",
          body: [
            ["A copy with historical value can be kept without cluttering everyday discovery through ", { text: "asset archiving", page: 108 }, ". Where a copy truly serves no purpose, authorised users can ", { text: "remove assets", page: 109 }, " according to organisational policies and permissions."],
          ],
        },
        {
          heading: "Imports and migrations",
          summary: "Bringing several old locations together is when copies multiply.",
          icon: "upload",
          body: [
            ["Drives, shared folders and earlier systems often hold overlapping copies of the same work. When a ", { text: "large library is migrated", page: 131 }, ", expect some of that overlap to travel with it, and plan time soon after the move to decide what should happen to the copies."],
          ],
        },
        {
          heading: "Watching for copies creeping back",
          summary: "A clean library does not stay clean on its own.",
          icon: "chart",
          body: [
            ["Over time, ", { text: "library health analytics", page: 196 }, " can reveal duplicates alongside growth and inactive content, which can show whether new copies are accumulating again."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 22 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 109 }, { kind: "pdf", page: 131 }, { kind: "pdf", page: 196 }, { kind: "pdf", page: 40 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about AI duplicate detection",
      items: [
        {
          question: "Can duplicate detection spot a copy that has been given a new filename?",
          answer: "Yes. Renaming a file does not change its content, so exact hashing can identify the renamed copy as identical to the original.",
        },
        {
          question: "What if a copy’s embedded metadata was edited?",
          answer: "Keywords or captions written into a file change its data, so its exact hash no longer matches the original’s. The picture itself is untouched, which makes it a question for the perceptual comparison instead.",
        },
        {
          question: "How does AI duplicate detection relate to duplicate asset management?",
          answer: ["Detection is the technique for identifying identical files and visually equivalent copies. ", { text: "Duplicate asset management", page: 112 }, " is the housekeeping it supports: identifying unnecessary copies, which can help with storage optimisation."],
        },
      ],
      sources: [{ kind: "pdf", page: 40 }, { kind: "pdf", page: 112 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on copies and library hygiene",
      variant: "compact",
      pages: [112, 350, 368, 91, 108, 196],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the duplicate detection cluster." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Turn Your Asset Library Into Intelligence",
      conversionPage: 398,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 398 }],
    },
  ],
};

export default page;
