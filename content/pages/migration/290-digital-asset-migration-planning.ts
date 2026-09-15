/**
 * 290 · Digital Asset Migration Planning — /migration/digital-asset-migration-planning
 *
 * Angle (cluster: migration-planning): the plan itself — assets, metadata and permissions considered before the
 * transfer begins, what the plan records and how it comes together. DAM Migration Strategy (289) owns understanding
 * what exists; Migration Permission Mapping (295) owns access in depth; Bulk Import (291) owns the transfer step.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how organisations plan a digital asset migration; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 290,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Migration",
      lede: "Put the decisions about assets, metadata and permissions on paper before a single file moves, so the transfer follows a plan that anyone on the project can read, question and check against.",
      visual: { diagram: "migration-map" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 290 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A plan that settles three questions before any transfer",
      body: [
        "Migration planning ensures that assets, metadata and permissions are considered before the transfer begins. Each answers a different question: what moves, what it carries with it, and who will be able to reach it once it arrives.",
        "Permissions are the part most often left until last, because files are visible and access is not. A plan that leaves access undecided hands the question to whoever happens to be setting up the destination, at the very moment content is arriving and everyone is busy.",
        [
          "Planning follows a ",
          { text: "DAM migration strategy", page: 289 },
          ", which establishes what exists and what the organisation requires. For access, the plan can work area by area, since ",
          { text: "department access", page: 176 },
          " lets departments receive access to only the creative libraries relevant to their work.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Assets: scope, sources and order", "Metadata: fields and destinations", "Permissions: an audience for each area", "Decisions made before transfer", "A pilot collection to test the plan", "Sign-off before the main move"],
      },
      highlight: {
        heading: "In practice",
        body: "A retail marketing team writes one page of plan per collection: which folders move, which fields come with them and which teams will see each area. The same page becomes the checklist when that collection arrives.",
        tags: ["Retail", "Marketing", "Planning"],
      },
      glance: {
        heading: "Migration planning in brief",
        facts: [
          { label: "Area", value: "Migration" },
          { label: "Considers", value: "Assets, metadata and permissions" },
          { label: "Follows", value: "DAM Migration Strategy", page: 289 },
          { label: "Ends with", value: "A signed-off plan for the transfer" },
        ],
        actions: [{ kind: "route", path: "/migration", label: "More in Migration" }]
      },
      sources: [{ kind: "pdf", page: 290 }, { kind: "pdf", page: 289 }, { kind: "pdf", page: 176 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "what-the-plan-records",
      eyebrow: "What the plan records",
      heading: "The decisions a migration plan writes down",
      columns: ["Decisions to record", "Questions to answer first"],
      rows: [
        { label: "Assets", cells: ["Scope, sources, masters versus copies, order of collections", "What stays behind? Which file is the master? What moves first?"] },
        { label: "Metadata", cells: ["Fields to keep, how each travels, values to tidy", "Which fields matter? Who resolves inconsistent values?"] },
        { label: "Folders", cells: ["Mirror or remap, and where each branch goes", "Does the tree still fit the work? What do folder names encode?"] },
        { label: "Permissions", cells: ["The audience for each area, restricted material, exceptions", "Who needs each area? What must stay closed? Who decides access?"] },
        { label: "Verification", cells: ["Checks and samples agreed in advance", "What will prove each collection arrived correctly?"] },
      ],
      sources: [{ kind: "pdf", page: 290 }, EXPLAINS],
    },
    {
      kind: "timeline",
      id: "plan-comes-together",
      eyebrow: "Before the transfer",
      heading: "How a migration plan comes together",
      items: [
        { label: "Scope agreed", body: "Collections, sources and exclusions are written down, together with the order in which collections will move and the reason for that order." },
        { label: "Metadata mapped", body: "Each valued field is written down with the kind of metadata it will travel as, and any field whose route is unclear is marked for the pilot rather than assumed.", page: 286 },
        { label: "Access drafted", body: "An audience is written down for every area of the new library, starting from who needs it rather than from who could open it before.", page: 295 },
        { label: "Pilot collection moved", body: "A small, varied collection goes first, so field mapping and access decisions are tried on real assets before the plan is trusted with everything." },
        { label: "Plan signed off", body: "Library owners, team leads and whoever answers for rights confirm the plan, which becomes the reference for the transfer and for checking the result." },
        { label: "Main transfer begins", body: "Only then does the main move start, with large collections brought in through bulk import instead of uploading individual files.", page: 291 },
      ],
      sources: [{ kind: "pdf", page: 286 }, { kind: "pdf", page: 295 }, { kind: "pdf", page: 291 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "by-organisation",
      eyebrow: "By organisation",
      heading: "Where planning effort goes in different organisations",
      tabs: [
        {
          label: "Small studio",
          heading: "One short plan, still written down",
          icon: "users",
          body: [
            "In a small studio the plan can be brief, and the danger is informality: decisions made in conversation and never recorded. The habit worth keeping is writing down the few choices about fields, folders and access, so whoever checks the result is not relying on memory.",
          ],
          points: ["Brief, but on paper", "Few decisions, clearly recorded"],
        },
        {
          label: "Enterprise",
          heading: "Many departments, many owners",
          icon: "building",
          body: [
            "Across departments, a plan becomes a set of agreements: each department owns its collections, fields and audiences, within rules everyone shares.",
            [{ text: "Enterprise permissions", page: 169 }, " let organisations apply structured access controls across departments, projects and folders, which gives those agreements a consistent place to land."],
          ],
          points: ["An owner for every collection", "Shared rules, local decisions"],
        },
        {
          label: "Agency",
          heading: "Planned client by client",
          icon: "briefcase",
          body: [
            "For an agency, the natural unit of planning is the client. Each client’s assets, fields and permitted people are planned on their own, which also makes it easier to move one client without waiting for all of them.",
            ["With ", { text: "client tenant isolation", page: 161 }, ", each client environment can remain logically isolated, so the plan can treat every client as a separate destination."],
          ],
          points: ["A plan for each client", "Separation built into the destination"],
        },
      ],
      sources: [{ kind: "pdf", page: 169 }, { kind: "pdf", page: 161 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about digital asset migration planning",
      items: [
        {
          question: "How detailed should a digital asset migration plan be?",
          answer: "Detailed enough that someone other than its author could run the transfer without asking what was meant. A plan that needs its author in the room tends to stall on the first day that person is unavailable.",
        },
        {
          question: "Should a digital asset migration plan be shared with the teams whose material is moving?",
          answer: "Yes, at least the parts that affect them: what moves, when, and who will be able to reach it. Teams reading their own collection’s entry often spot a missing folder or a wrongly drawn audience before the transfer does.",
        },
        {
          question: "Can a migration plan change once the transfer has started?",
          answer: "It can, and sometimes it should, but changes deserve the same care as the original decisions. Record what changed and why, so that later checks compare the result with the plan as it finally stood.",
        },
        {
          question: "How does migration planning deal with work still in progress?",
          answer: ["Set a clear rule, such as finishing live projects where they are or moving them at an agreed milestone. The rule can be practical rather than a freeze, because the ", { text: "migration workflow in GetSibu", page: 292 }, " is designed around organisations carrying on with existing storage while indexing runs in the background."],
        },
      ],
      sources: [{ kind: "pdf", page: 292 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on getting a migration ready",
      variant: "compact",
      pages: [289, 286, 295, 291, 292, 176],
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
