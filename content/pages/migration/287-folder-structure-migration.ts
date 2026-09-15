/**
 * 287 · Folder Structure Migration — /migration/folder-structure-migration
 *
 * Angle (cluster: folder-mapping): the fate of an existing folder structure as a whole — mirroring versus
 * remapping as a project decision, with its costs, signals and owner. Folder Mapping (133) owns the import option,
 * Migration Folder Mapping (294) owns drawing up the map and the flexibility to mix approaches.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how organisations decide between keeping and redesigning a folder structure during a move; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 287,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Migration",
      lede: "Treat the future of your folder tree as a project decision: when mirroring it into GetSibu is the sensible choice, when remapping repays the extra work, and what either route asks of the people who use it.",
      visual: { diagram: "migration-map", focus: "folders" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 287 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Mirror the tree or redraw it, decided before the move",
      body: [
        "Existing folder structures can be mirrored or remapped during migration. Mirroring recreates the tree people already know inside the new library; remapping moves content into a structure designed around how the organisation works today.",
        "A folder tree is usually the most visible part of a library and the most personal. Producers navigate by it, sharing has grown around it and its oddities record years of reorganisations. Changing it while also changing the system alters two things at once for everyone, which is why the choice is better made early and deliberately than left as a last-minute preference.",
        [
          "The same option appears at import as ",
          { text: "folder mapping", page: 133 },
          ", which lets organisations adapt their previous organisation system. Once the direction is set, working out the new arrangement branch by branch is the job of ",
          { text: "migration folder mapping", page: 294 },
          ".",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Mirroring keeps the familiar tree", "Remapping redesigns the structure", "One change or two at once", "Folders that double as access boundaries", "Meaning stored in folder names", "A decision with an owner"],
      },
      highlight: {
        heading: "In practice",
        body: "A marketing department whose top-level folders still follow a restructure from long ago chooses to remap into campaigns and regions, because nobody can explain the old arrangement to new joiners any more.",
        tags: ["Marketing", "Remapping", "Project leads"],
      },
      glance: {
        heading: "Folder structure migration in brief",
        facts: [
          { label: "Area", value: "Migration" },
          { label: "Choices", value: "Mirror the tree or remap it" },
          { label: "Affects", value: "Navigation, access and metadata" },
          { label: "Mapping in detail", value: "Migration Folder Mapping", page: 294 },
        ],
        actions: [{ kind: "route", path: "/migration", label: "More in Migration" }]
      },
      sources: [{ kind: "pdf", page: 287 }, { kind: "pdf", page: 133 }, { kind: "pdf", page: 294 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "two-routes",
      eyebrow: "Two routes",
      heading: "What mirroring and remapping each ask of a project",
      columns: ["Mirroring the existing tree", "Remapping into a new structure"],
      rows: [
        ["Planning effort", "Light, since the tree already exists", "Heavier: a structure must be designed and agreed"],
        ["What people relearn", "The new library, not where things live", "Both the library and the layout"],
        ["Existing problems", "Carried across with the files", "A chance to retire them"],
        ["Access boundaries", "Old outlines kept for reference", "New areas with no earlier boundary"],
        ["Risk during the move", "Lower and easy to explain", "Higher, spread across more decisions"],
        ["Best fit", "A structure that still matches the work", "A tree nobody can justify any more"],
      ],
      sources: [{ kind: "pdf", page: 287 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "signals",
      eyebrow: "Deciding",
      heading: "Signals that point towards mirroring or remapping",
      items: [
        {
          heading: "Can anyone explain the top level?",
          summary: "A structure nobody can justify is a strong case for redesign.",
          icon: "compass",
          body: [
            "Ask colleagues from different teams why the top-level folders are arranged as they are. If their answers agree and still describe the organisation, mirroring is easy to defend. If the explanation begins with a past restructure or someone who has since left, the tree is recording history rather than serving work.",
          ],
        },
        {
          heading: "How people find things now",
          summary: "Heavy reliance on memorised paths raises the cost of change.",
          icon: "search",
          body: [
            ["Where colleagues navigate by paths they know by heart, remapping disrupts habits exactly when they are also learning a new system. Once people can ", { text: "search across the whole creative library", page: 16 }, " instead of opening folders one at a time, that dependence tends to loosen, which can make a later redesign less disruptive than an early one."],
          ],
        },
        {
          heading: "Where sharing follows folders",
          summary: "A folder tree is often an access map as well.",
          icon: "lock",
          body: [
            ["Old shared locations frequently granted access folder by folder, so the tree also describes who could see what. A mirrored tree keeps those old outlines easy to consult, while remapping creates areas that never had a boundary of their own. Either way, access in the new library deserves its own decision, and in GetSibu ", { text: "folder-level permissions", page: 152 }, " allow it to be controlled at a finer level than organisation-wide access."],
          ],
        },
        {
          heading: "What folder names are really storing",
          summary: "Folders often stand in for information that belongs elsewhere.",
          icon: "tag",
          body: [
            ["Old storage offered nowhere else to record status, season or client, so folder names did the job. Before remapping, separate the meanings that mark a boundary, which suit folders, from those that describe content, which suit a ", { text: "hierarchical tag taxonomy", page: 8 }, ". The new tree then carries less and stays simpler."],
          ],
        },
        {
          heading: "How much change the team can absorb",
          summary: "A migration already asks a great deal of busy people.",
          icon: "users",
          body: [
            "A season of heavy deadlines, a newly formed team or a merger in progress all reduce the appetite for relearning. When capacity is low, mirroring is a legitimate choice, because it limits the move to one change for people who are already stretched.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 16 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 8 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A brand team retires a regional split nobody uses",
      team: "A global brand team",
      situation: "A global brand team is moving a shared drive whose top level still follows a regional split the business abandoned. Brand managers want familiar folders; the library lead wants a structure that matches how campaigns now run.",
      steps: [
        { heading: "Both cases are written down", body: "Brand managers list what remapping would cost them, mainly memorised paths; the library lead lists what mirroring would keep, mainly folders nobody can explain." },
        { heading: "The tree is put to the test", body: "Asked why the top level is still arranged by the old regions, nobody offers a reason that applies today, and the team agrees to remap." },
        { heading: "Meaning leaves the folder names", body: "Campaign and market details that the old names implied are planned as tags, so the new tree only has to express boundaries." },
        { heading: "Content lands in the new structure", body: ["The content is remapped into the new tree during migration, and each asset’s ", { text: "old file path", page: 132 }, " can stay with it as a record of where it came from."] },
        { heading: "Brand managers check their assets", body: "Before the shared drive is retired, brand managers look for the material they use most and flag anything that landed somewhere unexpected." },
      ],
      outcome: "The team changes its structure once, for a reason everyone heard, instead of carrying an obsolete regional split into a new library.",
      link: { page: 224, label: "GetSibu for Global Brands" },
      sources: [{ kind: "pdf", page: 287 }, { kind: "pdf", page: 132 }, { kind: "pdf", page: 224 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about folder structure migration",
      items: [
        {
          question: "Does mirroring a folder structure during migration rule out changing it later?",
          answer: "No. Mirroring settles how the library looks on arrival. A later redesign is still a project in its own right and will affect people who have learned the mirrored tree by then, so it is worth scheduling rather than leaving open.",
        },
        {
          question: "Who should decide the approach in a folder structure migration?",
          answer: "Someone accountable for the library as a whole, working with the leads of the teams that navigate it most. The decision needs a stated reason, because people who lose familiar folders will ask for one.",
        },
        {
          question: "Should shortcuts and duplicate folders be kept when a folder structure is mirrored?",
          answer: "Treat each one as a decision rather than something to reproduce by default. Shortcuts, aliases and parallel copies of a folder usually exist because old storage offered no other way to show one piece of work in two places, so settle which location is the real one before the tree is recreated.",
        },
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on moving a folder structure",
      variant: "compact",
      pages: [294, 133, 286, 132, 152, 8],
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
