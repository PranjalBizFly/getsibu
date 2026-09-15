/**
 * 296 · Migration Verification — /migration/migration-verification
 *
 * Angle (cluster: migration-planning): confirming that important content and metadata transferred correctly —
 * what a verification pass checks, which methods catch which problems, and how discrepancies are handled.
 * Planning (290) owns the list being checked against; Bulk Import (291) owns the check between batches;
 * Migration Without Downtime (292) owns the switch-over.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of verification practice in migrations; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 296,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Migration",
      lede: "Prove a migration delivered what the library needs before the old location is retired: what to check, how to sample a large collection sensibly, and what to do when something turns out to be missing.",
      visual: { diagram: "migration-map", focus: "verify" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 296 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Proof that the move worked, gathered before anyone relies on it",
      body: [
        "Migration verification helps organisations confirm that important content and metadata have transferred correctly. The word “important” carries weight: nobody can inspect every file in a large collection, so verification is a deliberate choice about what must be proven and how.",
        "Transfers rarely fail loudly. A move can look complete while a subfolder was skipped, files arrive but will not open, keywords land in the wrong field, or a credit line is quietly cut short. Each problem is cheap to fix while the source still exists and expensive once it has gone, which is why verification belongs between arrival and switch-over rather than somewhere after it.",
        [
          "Checks are only as good as the plan they test. ",
          { text: "Digital asset migration planning", page: 290 },
          " records what should move and what it should carry, which gives verification a list to compare against instead of an impression.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Checked against a written plan", "Counts first, then contents", "Samples drawn from every source", "Owners confirming their own material", "Uploaded is not yet searchable", "Discrepancies logged and resolved"],
      },
      highlight: {
        heading: "In practice",
        body: "A brand team does not stop at matching file totals. It opens logos from each old location and checks that usage notes and credits came across, because those notes decide whether a logo may be used at all.",
        tags: ["Brand", "Sampling", "Metadata"],
      },
      glance: {
        heading: "Verification in brief",
        facts: [
          { label: "Area", value: "Migration" },
          { label: "Confirms", value: "Important content and metadata" },
          { label: "Checked against", value: "The migration plan" },
          { label: "Before", value: "The old location is retired" },
        ],
        actions: [{ kind: "route", path: "/migration", label: "More in Migration" }]
      },
      sources: [{ kind: "pdf", page: 296 }, { kind: "pdf", page: 290 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "what-to-check",
      eyebrow: "What gets checked",
      heading: "Six questions a verification pass should answer",
      items: [
        {
          heading: "Did everything arrive?",
          body: "Compare what the plan said would move with what the library now holds, collection by collection, so a skipped folder appears as a gap now rather than a surprise months later.",
          icon: "check",
          points: ["Totals per collection, not only overall", "Exclusions confirmed as deliberate"],
        },
        {
          heading: "Do the files open and look right?",
          body: "A file can arrive at the expected size and still be unusable. Open examples of each format, play part of any long media and look for truncated documents or damaged artwork.",
          icon: "eye",
          points: ["Every format represented", "Long media played, not merely listed"],
        },
        {
          heading: "Did the metadata come with it?",
          body: "Compare the fields people rely on with the originals, value by value, starting with kinds that can become part of the asset record, such as creators and custom keywords.",
          icon: "tag",
          page: 22,
          points: ["Values compared, not just presence", "Fields that protect rights checked first"],
        },
        {
          heading: "Did each item land where planned?",
          body: "Trace assets from different parts of the old tree to their new homes and compare the result with the agreed folder map, branch by branch.",
          icon: "folder",
          points: ["Several branches traced", "Merged and renamed areas included"],
        },
        {
          heading: "Can people find it yet?",
          body: "Processing status separates an asset that has uploaded successfully from one that is fully indexed and searchable, so confirm readiness before judging whether search works.",
          icon: "search",
          points: ["Readiness confirmed before search tests", "Queued material not mistaken for missing"],
        },
        {
          heading: "Can the right people reach it?",
          body: "Ask members of each audience to open their own areas, and ask someone outside a restricted area to confirm that it stays closed to them.",
          icon: "lock",
          points: ["Each audience checks its own areas", "Restricted areas tested from outside"],
        },
      ],
      sources: [{ kind: "pdf", page: 22 }, { kind: "pdf", page: 145 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "methods",
      eyebrow: "Methods",
      heading: "Ways to verify a migration and what each one catches",
      tabs: [
        {
          label: "Reconciliation",
          heading: "Counting before looking",
          icon: "chart",
          body: [
            "Reconciliation compares totals, such as files per collection, per format and per source, against the inventory made before the move. It is quick and catches wholesale gaps: a missing folder, or a batch that stopped partway.",
            "Its blind spot is quality, since a total can match while records are incomplete, so a matching count is where verification starts rather than where it ends.",
          ],
          points: ["Catches missing folders and stalled batches", "Blind to damaged files and thin records"],
        },
        {
          label: "Sampling",
          heading: "Looking closely at a representative few",
          icon: "filter",
          body: [
            "A sample should reflect the variety of the collection rather than its most convenient corner: different sources, periods, formats and uploaders, including the areas everyone knows are messy.",
            ["Filters can help assemble that spread. On the ", { text: "media search platform", page: 13 }, ", keywords can be combined with filters for file category, format, uploader, resolution and date, so each slice of the library can be pulled up in turn."],
          ],
          points: ["Variety ahead of volume", "Messy areas included on purpose"],
        },
        {
          label: "Owner review",
          heading: "Asking the people who know the material",
          icon: "users",
          body: [
            "Nobody spots a missing shoot or a wrongly credited image faster than the people who made or commissioned it. Give each content owner a short brief: find the material you use most, check its details and report anything unexpected.",
            "Owner review catches errors of meaning that no count can see, such as the right file filed under the wrong campaign.",
          ],
          points: ["Errors of meaning caught", "A specific brief for each owner"],
        },
        {
          label: "Search tests",
          heading: "Proving the library answers real requests",
          icon: "search",
          body: [
            "Gather genuine requests from each team before the move and keep them as a fixed test set, so the same questions can be asked of the old location and the new library and the answers compared.",
            ["For presentations and scanned documents, include a phrase that appears only inside a file. With ", { text: "AI OCR", page: 38 }, ", extracted text becomes part of the searchable asset information once processed, so a match shows the document has arrived and been processed."],
          ],
          points: ["The same questions asked of old and new", "Text inside documents used as a probe"],
        },
      ],
      sources: [{ kind: "pdf", page: 13 }, { kind: "pdf", page: 38 }, EXPLAINS],
    },
    {
      kind: "workflow",
      id: "discrepancies",
      eyebrow: "When something is wrong",
      heading: "Handling a discrepancy found during verification",
      stages: [
        { label: "Log it", body: "Record what was expected, what was found and where, so the problem can be traced and nobody fixes the same gap twice." },
        { label: "Classify it", body: "Decide whether the asset is missing, damaged, undescribed or misplaced, since each points to a different cause and a different remedy." },
        { label: "Trace the cause", body: "Establish whether it is isolated or a pattern: one broken file is an accident, but a whole folder without credits usually means an export or mapping problem." },
        { label: "Fix at the right level", body: "Correct patterns in the source preparation or the plan and move the affected material again; handle genuinely isolated cases one at a time." },
        { label: "Check again, wider", body: "Repeat the original check on the corrected material and widen the sample around it, in case the pattern reaches further than first seen." },
        { label: "Close with a note", body: "Mark the discrepancy resolved with a line on what changed, so the final sign-off rests on a complete record rather than recollection." },
      ],
      sources: [{ kind: "pdf", page: 296 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about migration verification",
      items: [
        {
          question: "How should migration verification findings be shared with teams?",
          answer: "Briefly and plainly: what was checked, what turned up and what was fixed. A team told about a gap that has already been closed tends to trust the new library more than one that stumbles on the gap alone.",
        },
        {
          question: "Should the people who ran the transfer also carry out migration verification?",
          answer: "Not on their own. People who performed a move tend to check for the problems they anticipated, while colleagues who did not take part are more likely to notice the ones nobody expected.",
        },
        {
          question: "When is migration verification complete?",
          answer: "When every check in the plan has been run, each discrepancy is either resolved or knowingly accepted, and the owners of the most important material have signed off.",
        },
        {
          question: "Should migration verification continue after the old storage is retired?",
          answer: "Lightly, for a while. Give colleagues a simple way to report assets they expected to find, because the rare gap that slipped through tends to surface only when someone needs it.",
        },
      ],
      sources: [{ kind: "pdf", page: 296 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on checking a migrated library",
      variant: "compact",
      pages: [290, 145, 22, 293, 291, 13],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Bring Your Creative Assets Together",
      conversionPage: 392,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 392 }],
    },
  ],
};

export default page;
