/**
 * 294 · Migration Folder Mapping — /migration/migration-folder-mapping
 *
 * Angle (cluster: folder-mapping): using the flexibility branch by branch — keep, adjust or redesign parts of an
 * existing organisation, and give any new structure a shape that lasts. Folder Structure Migration (287) owns the
 * overall mirror-or-remap decision; Folder Mapping (133) owns the import option and the mechanics of a folder map.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of folder design practice in migrations; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 294,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Migration",
      lede: "Use folder mapping selectively: keep the parts of your current organisation that still work, redesign the parts that do not, and give any new structure a shape that will hold up once teams start filling it.",
      visual: { diagram: "migration-map", focus: "folders" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 294 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Neither a copy of the old tree nor a blank page",
      body: [
        "Folder mapping gives teams the flexibility to maintain existing organisation or create a new structure. That flexibility pays off most when it is used area by area, because few libraries are uniformly sound or uniformly broken.",
        "An inherited tree usually mixes branches that still describe the work with branches that record finished projects, departed colleagues and conventions nobody follows any more. Treating the whole tree as one decision forces an awkward compromise: either the sound parts are discarded along with the rest, or the confusing parts are carried into a library that was supposed to be clearer.",
        [
          "Whether a move should broadly mirror or remap is weighed under ",
          { text: "folder structure migration", page: 287 },
          ", and the import option itself is described under ",
          { text: "folder mapping", page: 133 },
          ". Detailed mapping is where those choices become concrete: a destination for every branch, and a reason anyone can read for each one.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Keep, adjust or redesign each branch", "A destination and a reason for every area", "Stable ideas at the top level", "Folders drawn around audiences", "Room for work not yet started", "A structure tested before content moves"],
      },
      highlight: {
        heading: "In practice",
        body: "An agency keeps its client folders exactly as they are, because every account team navigates by them, but redesigns what sits inside each client so that campaigns follow one pattern instead of a dozen.",
        tags: ["Agencies", "Client folders", "Hybrid mapping"],
      },
      glance: {
        heading: "Folder mapping in a migration",
        facts: [
          { label: "Area", value: "Migration" },
          { label: "Choice", value: "Maintain the existing organisation or create a new structure" },
          { label: "Import option", value: "Folder Mapping", page: 133 },
          { label: "Whole structure", value: "Folder Structure Migration", page: 287 },
        ],
        actions: [{ kind: "route", path: "/migration", label: "More in Migration" }]
      },
      sources: [{ kind: "pdf", page: 294 }, { kind: "pdf", page: 287 }, { kind: "pdf", page: 133 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "branch-outcomes",
      eyebrow: "Branch by branch",
      heading: "What can happen to each branch of an inherited tree",
      intro: "Most mappings use several of these outcomes side by side.",
      columns: ["When it fits", "What to watch for"],
      rows: [
        { label: "Keep as it is", cells: ["The branch matches how people look for this work today", "Oddities inside it travel across unchanged"] },
        { label: "Keep and rename", cells: ["The grouping is right but the names are cryptic or inconsistent", "Colleagues still looking for the old names in the first weeks"] },
        { label: "Merge", cells: ["Several branches hold the same kind of work under different names", "Conflicting conventions meeting inside one branch"] },
        { label: "Split", cells: ["One branch has grown to hold unrelated kinds of work", "Assets that genuinely belong to both halves"] },
        { label: "Move under a new parent", cells: ["The branch is sound but sits in the wrong part of the tree", "Audiences that used to follow the old parent"] },
        { label: "Set aside as history", cells: ["Finished work kept for reference rather than daily use", "Material someone still relies on every week"] },
      ],
      sources: [{ kind: "pdf", page: 294 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "new-structure",
      eyebrow: "Designing a new structure",
      heading: "Principles for a structure that holds up after the move",
      items: [
        {
          heading: "Build the top level from what rarely changes",
          summary: "The highest folders should outlast campaigns, projects and reorganisations.",
          icon: "folder",
          body: [
            "Brands, clients, markets and business areas tend to stay stable for years, while campaigns, seasons and project teams come and go. When the top level rests on stable ideas, new work finds an obvious home and the tree does not need redrawing every time the organisation shifts.",
            "Short-lived groupings belong further down, where opening or closing one disturbs nobody else.",
          ],
        },
        {
          heading: "Give each level one kind of distinction",
          summary: "Mixing clients, years and statuses at the same depth makes a tree impossible to predict.",
          icon: "layers",
          body: [
            "A tree is easy to guess when every level answers a single question: which brand, then which campaign, then which kind of material. Trouble starts when one level holds a client beside a year beside a folder called “Old”.",
            "Before approving a design, read each level as a question and check that every folder at that depth answers it.",
          ],
        },
        {
          heading: "Draw boundaries where audiences differ",
          summary: "Folders are the natural place to separate material meant for different people.",
          icon: "lock",
          body: [
            [
              "With ",
              { text: "folder-level permissions", page: 152 },
              ", access can be controlled in more detail than organisation-wide access, so a structure that follows real audiences keeps permissions simple. A confidential launch, one client’s work or a set of contracts each deserves a branch of its own rather than a corner of a shared one.",
            ],
          ],
        },
        {
          heading: "Leave room for work that has not started",
          summary: "A good structure already has an obvious place for next year’s clients and campaigns.",
          icon: "compass",
          body: [
            "Test a proposed tree against work that does not exist yet: a new market, a product line, a client won next quarter. If each would need a debate about where it belongs, the design describes the present rather than organising the future.",
            "Shallow, predictable patterns usually absorb growth better than a detailed hierarchy tailored to this year’s projects.",
          ],
        },
        {
          heading: "Agree names before anyone creates folders",
          summary: "Naming conventions decide whether the new tree is still tidy after its first busy month.",
          icon: "text",
          body: [
            "Settle how folders are named: full or short client names, how campaigns carry a date, which words are reserved for finished work. Write the conventions in a few lines and give them an owner.",
            "New structures tend to decay at their edges first, where people add folders in a hurry without knowing the pattern.",
          ],
        },
        {
          heading: "Try the design on real requests",
          summary: "Before content moves, ask colleagues where they would look for specific pieces of work.",
          icon: "search",
          body: [
            "Take recent requests from different teams and ask people to point to where each item should live in the proposed tree, without prompting. Where their answers disagree, the design is ambiguous; where nobody can answer, a branch is missing.",
            "Fixing a structure on paper costs far less than discovering it confuses people after the assets have landed.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 152 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "Two teams, two trees, one library",
      team: "A merged marketing department",
      situation: "After a reorganisation, a brand team and a product marketing team are moving into one GetSibu library. The brand team’s tree is tidy and well understood; the product team’s grew project by project and nobody fully trusts it.",
      steps: [
        { heading: "Both trees are read branch by branch", body: "The two library leads list every top-level branch from each tree and mark which still describe current work and which only describe history." },
        { heading: "The brand tree is largely kept", body: "Guidelines, logos and campaign masters keep their existing organisation, since the whole department already looks for them there." },
        { heading: "Product material gets a new shape", body: "The product team’s project folders are redesigned around product lines, an idea that will still make sense after today’s projects have finished." },
        { heading: "Finished projects step aside", body: ["Completed project work is kept through ", { text: "asset archiving", page: 108 }, ", so it remains available without cluttering everyday discovery."] },
        { heading: "Audiences are settled per branch", body: ["The leads decide who needs each product line, and ", { text: "team-based access", page: 175 }, " gives both former teams consistent permissions on the shared brand areas."] },
      ],
      outcome: "The department ends up with one library that keeps what the brand team had already got right and replaces the product team’s accidental structure, without asking either team to relearn everything at once.",
      link: { page: 213, label: "GetSibu for Marketing Teams" },
      sources: [{ kind: "pdf", page: 294 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 175 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about migration folder mapping",
      items: [
        {
          question: "What should migration folder mapping do with branches nobody claims or that sit empty?",
          answer: "Treat them as questions before giving them a destination. Find who last used each one: if nobody relies on it, set it aside rather than recreating it, and if someone does, that person becomes the obvious owner of its new place.",
        },
        {
          question: "What happens to access when a branch is merged or moved during folder mapping?",
          answer: [
            "Treat it as a fresh access decision. A merged branch may serve a wider audience than either original, and a moved branch no longer sits under the parent that once shaped who could see it. ",
            { text: "Migration Permission Mapping", page: 295 },
            " looks at settling those audiences before content arrives.",
          ],
        },
        {
          question: "Is a hybrid folder mapping harder to verify?",
          answer: "A little, because every branch has its own expected destination rather than one rule for all. Keeping the map as a two-column list, old location beside new, turns the check into a comparison anyone on the team can carry out.",
        },
      ],
      sources: [{ kind: "pdf", page: 294 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on shaping folders in a migration",
      variant: "compact",
      pages: [287, 133, 295, 152, 108, 175],
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
