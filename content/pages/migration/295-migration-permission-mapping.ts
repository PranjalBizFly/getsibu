/**
 * 295 · Migration Permission Mapping — /migration/migration-permission-mapping
 *
 * FRAMED (claim: permission-translation). The PDF paragraph for this page is withheld and never paraphrased; the
 * page never says access imports, carries over or converts automatically, and names no identity provider or
 * directory. Angle (clusters: access-control, migration-planning): permission mapping as the team's own work —
 * reading current access as evidence, agreeing an audience for each destination and expressing it through
 * GetSibu's published permission model (152, 155, 156, 157, 158, 159, 161, 169, 170, 172, 175, 176, 178).
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of access planning in migrations; states no GetSibu capability beyond the cited pages and nothing about how access moves between systems." } as const;

const page: PageContent = {
  page: 295,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Migration",
      lede: "Work out, area by area, who should reach a migrated library and why, and which parts of GetSibu’s folder-level and team-based permissions give those decisions a home.",
      visual: { diagram: "migration-map", focus: "permissions" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 152 }, { kind: "pdf", page: 175 }, { kind: "pdf", page: 289 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Access decided on purpose, not inherited by accident",
      body: [
        "Permission mapping is the part of a migration that works out, area by area, who needs to reach material once it sits in the new library. The result is a set of audiences, one for each destination, that someone has agreed and written down.",
        "Access in shared drives and older systems grows by accretion. A folder is opened to a whole department to meet a deadline, a link goes to an agency and is never withdrawn, a group made for one project outlives the project, and people who change roles keep what they had. A new library modelled on that picture unchanged would keep every accident alongside every good decision.",
        [
          "GetSibu’s permission model gives the map somewhere clear to land: ",
          { text: "permission hierarchies", page: 178 },
          " combine broad organisational roles with more detailed folder-level controls. Understanding current permissions is part of a ",
          { text: "DAM migration strategy", page: 289 },
          " from the outset; mapping turns that understanding into a decision for every destination.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Audiences agreed, not assumed", "Intended grants told apart from accidents", "An audience for every destination", "Groups first, individuals as exceptions", "Sensitive areas signed off by their owners", "Decisions written down for later review"],
      },
      highlight: {
        heading: "In practice",
        body: "A studio finds that its footage drive was opened to the whole company years ago for a single event. The permission map gives that area an audience of editors and producers instead of repeating the old grant.",
        tags: ["Studios", "Access review", "Audiences"],
      },
      glance: {
        heading: "Permission mapping in brief",
        facts: [
          { label: "Area", value: "Migration" },
          { label: "Decides", value: "Who can reach each area of the migrated library" },
          { label: "Structure", value: "Broad roles with folder-level controls" },
          { label: "Groundwork", value: "DAM Migration Strategy", page: 289 },
        ],
        actions: [{ kind: "route", path: "/migration", label: "More in Migration" }]
      },
      sources: [{ kind: "pdf", page: 178 }, { kind: "pdf", page: 289 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "building-the-map",
      eyebrow: "Step by step",
      heading: "Building a permission map during a migration",
      intro: "The map is a document first and becomes configuration only once its audiences are agreed.",
      steps: [
        { heading: "Record who can reach what", body: "List every area that is moving and note who can open it today, including shared links and whole-department grants.", icon: "audit" },
        { heading: "Separate intent from accident", body: "For each grant, ask whether anyone can still explain it. Keep the ones tied to current work and mark the rest for a deliberate decision rather than silent removal.", icon: "filter" },
        { heading: "Group people by responsibility", body: "Team-based access establishes consistent permissions across groups of users, so the map can describe teams instead of long lists of named people.", icon: "users", page: 175 },
        { heading: "Give each destination an audience", body: "For every folder in the planned structure, write down which groups need it and whether they only need to find material or also to work on it.", icon: "folder" },
        { heading: "Note genuine exceptions", body: "Where one person needs something their group does not, targeted individual access fills the gap; record the reason so the exception can be revisited.", icon: "user", page: 157 },
        { heading: "Sign off before the transfer", body: "Owners of sensitive areas confirm their audiences in advance, so that access in the new library follows an agreed list rather than memory.", icon: "approval" },
      ],
      sources: [{ kind: "pdf", page: 175 }, { kind: "pdf", page: 157 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "hard-cases",
      eyebrow: "Hard cases",
      heading: "Access patterns that need a fresh decision",
      items: [
        {
          heading: "Areas that everyone could open",
          summary: "Whole-organisation access is often a shortcut rather than a choice.",
          icon: "globe",
          body: [
            "On an old shared drive, the quickest way to unblock someone was frequently to open a folder to everybody. Before mapping such an area, ask who actually uses it: brand guidelines may genuinely suit a wide audience, while unreleased work almost never does.",
            ["With ", { text: "department access", page: 176 }, ", departments can receive access to only the creative libraries relevant to their work, which is often the honest replacement for a grant to everyone."],
          ],
        },
        {
          heading: "Links that outlived their purpose",
          summary: "Shared links are the least visible part of old access.",
          icon: "network",
          body: [
            "Links created for a single job keep working long after it ends, and nobody holds a list of them. Rather than trying to account for each one, ask whether the need behind it still exists at all.",
            ["Where sharing is still needed, ", { text: "secure asset sharing", page: 172 }, " in GetSibu can be controlled through permissions instead of depending only on unrestricted links."],
          ],
        },
        {
          heading: "People who have moved on",
          summary: "Old access lists remember everyone who ever needed something.",
          icon: "user",
          body: [
            "A permission map is a natural moment to leave out accounts for people who have left and to check whether colleagues who moved teams still need their previous areas.",
            "Mapping from present responsibilities, rather than from historic lists, handles both cases at once.",
          ],
        },
        {
          heading: "Administrative rights handed out too widely",
          summary: "In older systems, full control was often given to save time.",
          icon: "key",
          body: [
            ["Many people who hold administrative rights in an old system only ever needed to work with assets. ", { text: "Editor permissions", page: 156 }, " can provide the access required to work with creative assets without unnecessary administrative privileges."],
          ],
        },
        {
          heading: "Client work that must stay apart",
          summary: "For agencies, some boundaries matter more than any folder.",
          icon: "building",
          body: [
            ["When one platform will hold work for several clients, settle those boundaries first and map everything else inside them. Through ", { text: "client tenant isolation", page: 161 }, ", each client environment can remain logically isolated, so every client’s audiences can be worked out on their own terms."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 176 }, { kind: "pdf", page: 172 }, { kind: "pdf", page: 156 }, { kind: "pdf", page: 161 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "old-and-new-habits",
      eyebrow: "Two models of access",
      heading: "Access habits in shared storage compared with GetSibu’s model",
      columns: ["Typical shared storage", "GetSibu permissions"],
      emphasis: 1,
      rows: [
        ["Across a large organisation", "Rules that differ from drive to drive", "Structured controls across departments, projects and folders"],
        ["Level of control", "A whole drive or a single link", "Folder-level control, finer than organisation-wide"],
        ["Oversight of one area", "Whoever happened to create the folder", "Managers limited to their own folders or teams"],
        ["Sensitive material", "Protected mainly by being hard to find", "Access governance for sensitive creative content"],
        ["Access policies", "Scattered across anyone with admin rights", "Managed by organisation administrators"],
      ],
      sources: [{ kind: "pdf", page: 169 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 155 }, { kind: "pdf", page: 159 }, { kind: "pdf", page: 158 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about migration permission mapping",
      items: [
        {
          question: "Should a migration permission map start from people or from folders?",
          answer: "From folders, in most cases. Deciding the audience for each destination keeps the map short and readable, whereas starting from every person’s current rights tends to rebuild the old sprawl one account at a time.",
        },
        {
          question: "How does a migration permission map relate to the new folder structure?",
          answer: ["The two are best drafted side by side. An audience needs a folder to attach to, and a folder that mixes material for different audiences forces a compromise either way, so questions raised by the map often lead to a small change in ", { text: "migration folder mapping", page: 294 }, "."],
        },
        {
          question: "How can access decisions made during a migration be reviewed later?",
          answer: [
            "Keep the permission map with the migration records, including the reason for each exception. From then on, ",
            { text: "permission auditing", page: 170 },
            " means changes to permissions can be recorded in the audit history.",
          ],
        },
        {
          question: "Is a migration a good moment to tighten access?",
          answer: "Usually, since every area is being examined anyway. Tighten with care, though: removing something a team still depends on the day the new library opens undermines confidence in the move, so confirm with each team before narrowing what they can reach.",
        },
      ],
      sources: [{ kind: "pdf", page: 170 }, { kind: "pdf", page: 294 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on access during a migration",
      variant: "compact",
      pages: [289, 152, 176, 178, 170, 294],
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
