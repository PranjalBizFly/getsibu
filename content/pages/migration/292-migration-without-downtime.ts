/**
 * 292 · Migration Without Downtime — /migration/migration-without-downtime
 *
 * Angle (cluster: migration-planning): continuing to use existing storage while content is indexed in the
 * background. GetSibu statements about the overlap use PDF 292 only; nothing is said about synchronising changes
 * made in the old location, durations or guarantees. Tier B covers running an overlap period well.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how organisations manage a period in which old and new libraries overlap; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 292,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Migration",
      lede: "Understand a move to GetSibu designed around existing storage staying in use while content is indexed in the background, and what a team should agree so that the overlap between old and new stays orderly.",
      visual: { diagram: "migration-map", focus: "import" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 292 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Work carries on while the new library is prepared",
      body: [
        "GetSibu’s migration workflow is designed to allow organisations to continue using existing storage while content is indexed in the background. The old location does not have to be locked away while the new library takes shape.",
        "Downtime in a creative library is rarely a server switched off. It is the afternoon when nobody is sure where the latest cut lives, the agency that cannot get approved logos, or the launch that slips because files were frozen for a move. Creative deadlines do not pause, so a migration that asks everyone to stop is easy to keep postponing.",
        [
          "The decisions in a ",
          { text: "digital asset migration plan", page: 290 },
          " still need making. What changes is their setting: the move can be organised around live work instead of waiting for a quiet period that rarely comes.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Existing storage stays in use", "Indexing runs in the background", "Creative work need not be frozen", "An overlap period to manage", "A clear rule for new work", "A deliberate switch-over"],
      },
      highlight: {
        heading: "In practice",
        body: "An in-house video team keeps editing from its shared storage through a product launch while its archive is indexed into GetSibu, then moves its everyday searching to the new library once the launch is behind it.",
        tags: ["Video", "In-house teams", "Launches"],
      },
      glance: {
        heading: "Migration without downtime in brief",
        facts: [
          { label: "Area", value: "Migration" },
          { label: "During the move", value: "Existing storage stays in use" },
          { label: "Indexing", value: "Runs in the background" },
          { label: "Planned in", value: "Digital Asset Migration Planning", page: 290 },
        ],
        actions: [{ kind: "route", path: "/migration", label: "More in Migration" }]
      },
      sources: [{ kind: "pdf", page: 292 }, { kind: "pdf", page: 290 }, EXPLAINS],
    },
    {
      kind: "timeline",
      id: "overlap",
      eyebrow: "The overlap",
      heading: "What a migration period looks like when work carries on",
      items: [
        { label: "Before indexing starts", body: "The team agrees which collections are moving, where new work is saved in the meantime and who will declare the new library ready." },
        { label: "While content is indexed", body: "Existing storage remains the working location, and nobody has to stop what they are doing for the migration to make progress." },
        { label: "Checking readiness", body: "The people who know each collection confirm that its content and metadata came across correctly before anyone is asked to depend on it.", page: 296 },
        { label: "Trying the new library", body: "A few people from each team begin finding work in the new library for real tasks while the old location is still there as a fallback." },
        { label: "Switching over", body: "On an announced date, everyday finding and sharing move to the new library and new work stops being saved to the old location." },
        { label: "Retiring the old location", body: "The previous storage is archived or closed according to the organisation’s own policies once nobody depends on it." },
      ],
      sources: [{ kind: "pdf", page: 292 }, { kind: "pdf", page: 296 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "orderly-overlap",
      eyebrow: "Considerations",
      heading: "Keeping the overlap between old and new orderly",
      items: [
        {
          heading: "Agree where new work goes",
          summary: "Two usable locations need one clear rule.",
          icon: "folder",
          body: [
            "While both places exist, people need to know where today’s work belongs. Some teams keep saving to the old location until an agreed date; others start new projects in the new library at once. Either can work, and having no rule at all is what causes confusion.",
          ],
        },
        {
          heading: "Name the authoritative copy",
          summary: "People need to know which version of a collection to trust.",
          icon: "flag",
          body: [
            "During the overlap the same asset can exist in two places. Declaring one location the source of truth for each collection, and changing that only at switch-over, stops edits being made to a copy that is about to be left behind.",
          ],
        },
        {
          heading: "Give the overlap an end",
          summary: "Running side by side is a bridge, not a destination.",
          icon: "calendar",
          body: [
            "An overlap that drifts on turns into two libraries, each slightly out of date. Set the conditions for switching in advance, such as collections checked and search tried by the teams that depend on it, so ending the overlap is a decision rather than an accident.",
          ],
        },
        {
          heading: "Explain what is happening",
          summary: "Work done in the background is invisible unless someone describes it.",
          icon: "megaphone",
          body: [
            "Because indexing happens out of sight, colleagues may not realise a migration is under way, or may assume it has already finished. A short note on what is moving, what stays the same and when things will change keeps expectations aligned.",
          ],
        },
        {
          heading: "Settle reviews already in progress",
          summary: "Material halfway through review should finish somewhere definite.",
          icon: "approval",
          body: [
            ["Work in review is the easiest to lose track of during a move. Decide whether each review finishes where it started or begins again in GetSibu, where ", { text: "review status", page: 76 }, " gives a clear indication of whether an asset needs attention or has completed the approval process."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 76 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "who-it-helps",
      eyebrow: "Who it helps",
      heading: "What working through a migration means for each group",
      tabs: [
        {
          label: "Creative teams",
          heading: "Deadlines that do not move for the migration",
          icon: "palette",
          body: [
            "Designers, editors and producers go on working from the storage they know while the new library takes shape. Their part can wait until the library is ready to try, which is when their judgement about what they can find matters most.",
          ],
          points: ["Production work continues", "Involvement when it counts"],
        },
        {
          label: "Library managers",
          heading: "Time to check instead of rushing",
          icon: "database",
          body: [
            "Without a freeze creating its own deadline, the people responsible for the library can examine collections properly before declaring them ready. The pressure to switch comes from the plan, not from colleagues who are unable to work.",
          ],
          points: ["Readiness judged, not forced", "Checks finished before people depend on them"],
        },
        {
          label: "IT and operations",
          heading: "No single window that must succeed",
          icon: "server",
          body: [
            "Technical teams avoid a cutover that has to go right in one short window. The existing storage keeps running as it does now until the organisation decides to retire it, spreading risk across a period rather than concentrating it in one night.",
          ],
          points: ["Risk spread over time", "Retirement on the organisation’s timetable"],
        },
      ],
      sources: [{ kind: "pdf", page: 292 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about migration without downtime",
      items: [
        {
          question: "What happens to files saved in the old location during a migration without downtime?",
          answer: "Confirm this for your own migration rather than assuming an answer. Anything added to the old location after its collection was indexed needs a known route into the new library before that location is retired.",
        },
        {
          question: "What should happen to shared links into the old storage during a migration without downtime?",
          answer: "Leave them working through the overlap where possible, since colleagues may still rely on them. List the ones that matter, so each can be dealt with deliberately before the old location is retired rather than breaking without warning.",
        },
        {
          question: "Is running old and new side by side always the best approach?",
          answer: ["Not always. A small, tidy collection can be simpler to move in one step. ", { text: "What Is a DAM Migration?", page: 376 }, " compares a single cutover, a phased move and running old and new in parallel."],
        },
      ],
      sources: [{ kind: "pdf", page: 376 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on moving while work continues",
      variant: "compact",
      pages: [290, 296, 289, 376, 300],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the migration planning topics." }],
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
