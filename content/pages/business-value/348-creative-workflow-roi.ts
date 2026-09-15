/**
 * 348 · Creative Workflow ROI — /business-value/creative-workflow-roi
 *
 * Angle (cluster: roi): the workflow return — time lost to searching, recreating files and version confusion,
 * argued qualitatively and measured from the team's own baseline. Asset Discovery ROI (349) owns search time
 * returned to creating; Duplicate Reduction (350) owns copies; DAM Business Case (359) owns the case structure.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of creative workflow costs and how to evidence them; states no GetSibu capability beyond the cited pages and supplies no figures." } as const;

const page: PageContent = {
  page: 348,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "centered",
      eyebrow: "Business Value",
      lede: "Where a creative workflow quietly loses time to searching, recreating files and settling which version is current, what a centralised library changes about each loss, and why the losses are so often recorded as something else.",
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 348 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "The return hides in three everyday losses",
      body: [
        "A centralised creative library can reduce time spent searching for assets, recreating files and resolving version confusion. None of those losses has its own line in a budget, which is why the return on a creative workflow is easy to underestimate and just as easy to overstate.",
        "Each loss looks minor on the day it happens. A designer spends part of a morning looking for last year’s key visual, gives up and rebuilds it. An editor cuts from a file called “final-v2” while the approved cut sits in another folder. Repeated across a team and over a year, incidents like these become a steady drain on time that was meant for creative work.",
        "The three losses also feed one another. A file that cannot be found gets recreated, and the recreation becomes one more version competing with the original, so improving one of them tends to ease the others. How much that is worth depends on how often your own team meets each loss, and only your own records can show that.",
        ["Two related returns are examined on their own: ", { text: "asset discovery ROI", page: 349 }, " and ", { text: "duplicate reduction", page: 350 }, "."],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Time lost searching for assets", "Work recreated because it was not found", "Confusion over the current version", "Losses that feed one another", "Causes hidden in project reports"],
      },
      glance: {
        heading: "Workflow ROI in brief",
        facts: [
          { label: "Area", value: "Business value" },
          { label: "Losses addressed", value: "Searching, recreating files and version confusion" },
          { label: "Builds on", value: "Centralised Creative Asset Library", page: 6 },
          { label: "Feeds into", value: "DAM Business Case", page: 359 },
        ],
        actions: [{ kind: "route", path: "/business-value", label: "More in Business Value" }]
      },
      sources: [{ kind: "pdf", page: 348 }, { kind: "pdf", page: 349 }, { kind: "pdf", page: 350 }, { kind: "pdf", page: 6 }, { kind: "pdf", page: 359 }, EXPLAINS],
    },
    {
      kind: "before-after",
      id: "before-after",
      eyebrow: "Before and after",
      heading: "A creative workflow before and after a central library",
      beforeLabel: "Scattered storage",
      afterLabel: "A centralised GetSibu library",
      before: ["Folders opened one at a time to find a file", "Assets rebuilt when the original stays hidden", "Revisions saved as “final” and “final-v2”", "Colleagues asked which cut was signed off", "Old campaigns mixed in with current work"],
      after: ["One search across the whole creative library", "Existing work described the way people remember it", "Earlier versions retained inside one asset", "Approval history showing which version was accepted", "Historical content archived out of everyday discovery"],
      sources: [{ kind: "pdf", page: 16 }, { kind: "pdf", page: 18 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 77 }, { kind: "pdf", page: 108 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "losses",
      eyebrow: "Where time goes",
      heading: "Three workflow losses and how each one hides",
      items: [
        {
          heading: "Searching for assets",
          summary: "Time spent looking is the loss people notice first and record least.",
          icon: "search",
          body: [
            "Searching costs more than the minutes spent in a folder tree. It includes messages to colleagues who might know, downloads opened only to check what they contain and the attention lost while waiting for an answer.",
            ["Narrowing a search is where much of that time goes. GetSibu lets people ", { text: "combine keywords and filters", page: 13 }, " for file category, format, uploader, resolution and date, so a large result set can be narrowed to a shortlist rather than worked through by hand."],
          ],
        },
        {
          heading: "Recreating files",
          summary: "Work rebuilt because the original was not found is paid for twice.",
          icon: "copy",
          body: [
            "Recreation is the costliest of the three because it repeats creative effort, not just administration. A reshoot, a rebuilt layout or a re-edited cutdown often happens without anyone noticing, because nobody knew the earlier work existed or could be trusted.",
            ["Before anything is rebuilt, someone has to be able to look through what the library already holds. ", { text: "Creative library navigation", page: 29 }, " lets users move between broad exploration of the library and highly specific asset discovery, which suits the question “do we already have something like this?”"],
          ],
          points: ["List assets rebuilt during the last campaign", "Ask why each original was not used"],
        },
        {
          heading: "Resolving version confusion",
          summary: "Uncertainty over the current file causes rework and, occasionally, public mistakes.",
          icon: "history",
          body: [
            "Version confusion rarely wastes time in one visible block. It appears as a round of checking before every handover, a correction after the wrong cut reaches a client, or a pause while someone confirms which layout the brand lead approved.",
            [{ text: "Creative revision tracking", page: 100 }, " helps teams understand what changed between versions and which version is currently active, so the answer can come from the asset’s record instead of filenames and memory."],
          ],
          points: ["Record handovers delayed by version checks", "Note corrections caused by an outdated file"],
        },
        {
          heading: "Losses recorded under other names",
          summary: "Workflow losses rarely appear in project reports as what they are.",
          icon: "gauge",
          body: [
            "A missed deadline is put down to a late brief, a reshoot to a change of creative direction, a correction to a careless edit. Underneath, the cause may be an asset nobody could find or a version nobody could confirm, and the report never says so.",
            ["Rereading a few recent problems with the three losses in mind is a practical way to see how often they occur. What turns up can become one strand of a ", { text: "DAM business case", page: 359 }, "."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 13 }, { kind: "pdf", page: 29 }, { kind: "pdf", page: 100 }, { kind: "pdf", page: 359 }, EXPLAINS],
    },
    {
      kind: "checklist",
      id: "weigh",
      eyebrow: "What to weigh",
      heading: "What to weigh before claiming a workflow return",
      variant: "chips",
      items: ["How often files are searched for", "Who gets asked where things are", "Assets recreated instead of reused", "Handovers delayed by version checks", "Mistakes traced to outdated files", "Effort of moving the existing library", "Time for people to change habits"],
      sources: [{ kind: "pdf", page: 348 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about creative workflow ROI",
      items: [
        {
          question: "Can creative workflow ROI be expressed as a single figure?",
          answer: "It can be estimated, but any figure is only as reliable as the baseline behind it. Evidence from your own team, such as how often work is recreated or held up by version checks, persuades more than an industry percentage nobody in the room can verify.",
        },
        {
          question: "Which of the three workflow losses matters most for a creative team?",
          answer: "It depends on the work. Where footage dominates, searching and version problems are often the larger loss; where campaign material is reused heavily, recreation can outweigh both.",
        },
        {
          question: "Does a central library remove version confusion from a creative workflow entirely?",
          answer: ["No tool can stop someone saving a copy elsewhere. What changes is the default: ", { text: "file version history", page: 92 }, " keeps a record of previous versions and allows older ones to be restored, so there is less reason to keep private copies."],
        },
        {
          question: "Does creative workflow ROI depend on moving the whole library at once?",
          answer: ["Not necessarily. The three losses tend to gather around active, frequently reused material, so bringing that in first is a reasonable start. Older collections can follow, and ", { text: "bulk asset import", page: 130 }, " helps organisations move large existing libraries without manually uploading each file."],
        },
      ],
      sources: [{ kind: "pdf", page: 348 }, { kind: "pdf", page: 92 }, { kind: "pdf", page: 130 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on the return from a creative library",
      variant: "compact",
      pages: [359, 349, 350, 347, 16, 91],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the closest return-on-investment pages." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Build a Smarter Creative Workflow",
      conversionPage: 396,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 396 }],
    },
  ],
};

export default page;
