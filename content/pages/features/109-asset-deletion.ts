/**
 * 109 · Asset Deletion — /features/asset-deletion
 *
 * Angle (cluster: asset-lifecycle): authorised users removing assets according to organisational policies and
 * permissions; the checks before removal and when deletion is the wrong tool. No retention periods, recycle bins
 * or recovery windows. Asset Archiving (108) owns retaining history; Asset Recovery (110) owns getting content back.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of deletion policy and practice in shared creative libraries; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 109,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Versioning & Asset Management",
      lede: "Who should be able to remove assets from a shared creative library, what an organisation’s policy needs to say about it, and the checks that keep a deletion from removing something other people still depend on.",
      visual: { diagram: "version-record", focus: "files" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 109 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Removing assets with authority, not by accident",
      body: [
        "Authorised users in GetSibu can remove assets according to organisational policies and permissions. Two conditions stand behind every removal, then: a person entitled to carry it out, and a rule that says it should happen.",
        "Of all the decisions in an asset’s life, deletion is the hardest to take back. An image removed by someone tidying a folder may be the only approved copy a regional team relied on; a film deleted to free space may be the master its cutdowns were made from. In shared libraries the risk is rarely bad intent. It is well-meaning people removing files without knowing who else needed them.",
        [
          "Permissions and policy answer different questions. ",
          { text: "Creative asset permissions", page: 151 },
          " control who can access different areas of the library, and ",
          { text: "creative asset governance", page: 114 },
          " defines who can upload, edit, approve, download and manage assets. Policy decides when content should go at all, which is the territory of ",
          { text: "creative data governance", page: 339 },
          ".",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Removal by authorised users", "Organisational policies", "Permissions set the boundary", "Checks before anything is removed", "Archive when history matters", "Replace rather than delete"],
      },
      highlight: {
        heading: "In practice",
        body: "A coordinator tidying a campaign folder wants to remove what look like spare exports. She checks first with the campaign owner, who is authorised for that area and knows that one “spare” is the version a retail partner is still using.",
        tags: ["Library managers", "Campaign owners", "Governance"],
      },
      glance: {
        heading: "Deletion in brief",
        facts: [
          { label: "Carried out by", value: "Authorised users" },
          { label: "Governed by", value: "Organisational policies and permissions" },
          { label: "Access rules", value: "Creative Asset Permissions", page: 151 },
          { label: "Alternative", value: "Asset Archiving", page: 108 },
        ],
        actions: [{ kind: "route", path: "/features/asset-management", label: "More in Versioning & Asset Management" }]
      },
      sources: [{ kind: "pdf", page: 109 }, { kind: "pdf", page: 151 }, { kind: "pdf", page: 114 }, { kind: "pdf", page: 339 }, { kind: "pdf", page: 108 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "before-removal",
      eyebrow: "Step by step",
      heading: "Checks worth making before an asset is removed",
      intro: "Asking a handful of questions first prevents most of the deletions people later regret.",
      steps: [
        { heading: "State the reason", body: "Name why the asset should go: a mistaken upload, an unnecessary copy, content that must be withdrawn, or work with no further value.", icon: "flag" },
        { heading: "Check whether it is used", body: "Usage analytics help teams understand which assets are still used and which remain inactive, and signs of use are the quickest warning that somebody depends on a file.", icon: "chart", page: 106 },
        { heading: "Consider what it represents", body: "An approved piece, or the only record of something that was published, is often better archived than removed.", icon: "approval" },
        { heading: "Keep the best copy", body: "When the asset is one of several copies, make sure the one that stays carries the fullest tags and metadata before the others go.", icon: "copy", page: 112 },
        { heading: "Confirm the authority", body: "Make sure removing it falls within the remover’s responsibilities for that part of the library, rather than being done by whoever last opened the folder.", icon: "key" },
        { heading: "Give people a chance to object", body: "Mentioning the uploader and the colleagues who work with the asset in its discussion brings them into the decision before anything is removed.", icon: "mention" },
      ],
      sources: [{ kind: "pdf", page: 106 }, { kind: "pdf", page: 112 }, { kind: "pdf", page: 109 }, { kind: "pdf", page: 86 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "right-tool",
      eyebrow: "Deletion or something else",
      heading: "When removal is the right tool, and when it is not",
      items: [
        {
          heading: "Mistaken and test uploads",
          summary: "Files that should never have entered the library are the clearest case for removal.",
          icon: "upload",
          body: [
            "Test exports, personal files and material dropped into the wrong project add nothing and mislead anyone who finds them. The sooner they go, the fewer people pick them up.",
            ["For agencies, a file in the wrong client’s library is more than clutter. ", { text: "Client tenant isolation", page: 161 }, " means each client environment can remain logically isolated, and removing a misplaced file promptly respects that separation."],
          ],
          points: ["Remove soon after the mistake", "Treat misplaced client files as a priority"],
        },
        {
          heading: "Unnecessary copies",
          summary: "Removing true duplicates can reduce storage use and removes doubt about which file is right.",
          icon: "copy",
          body: [
            ["Copies split attention and fill results with the same picture. ", { text: "Duplicate reduction", page: 350 }, " can help cut unnecessary storage consumption and the confusion that several copies of one file create."],
          ],
        },
        {
          heading: "Superseded files",
          summary: "An improved file is a reason to replace the asset, not to delete it.",
          icon: "refresh",
          body: [
            ["Deleting an old file and uploading its successor as a new asset breaks the link between them. ", { text: "Asset replacement", page: 93 }, " keeps versions within the asset record, so the earlier file is kept without adding clutter."],
          ],
        },
        {
          heading: "Finished work that still has a history",
          summary: "Content can be finished with and still be worth keeping.",
          icon: "archive",
          body: [
            "A past campaign that nobody uses today may be exactly what someone needs to answer a question about what was published, or to find material for a retrospective. Removal is final in intent; archiving retains the work while taking it out of everyday discovery.",
          ],
        },
        {
          heading: "Content involved in a dispute",
          summary: "An asset under discussion should not disappear while the discussion is going on.",
          icon: "shield",
          body: [
            ["When a usage claim, a complaint or a legal request concerns an asset, removing it destroys the thing everyone needs to look at and can appear evasive. Hold off on deletion until legal or rights owners confirm what should happen, since the ", { text: "asset audit trail", page: 119 }, " and the file itself are part of what that conversation relies on."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 161 }, { kind: "pdf", page: 350 }, { kind: "pdf", page: 93 }, { kind: "pdf", page: 119 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "open-or-governed",
      eyebrow: "Two ways to run removal",
      heading: "Deletion left to anyone compared with deletion under policy",
      columns: ["A shared drive anyone can tidy", "GetSibu, under policy and permissions"],
      emphasis: 1,
      rows: [
        ["Who removes assets", "Whoever happens to be tidying", "Authorised users"],
        ["Grounds for removal", "It looked old or unused", "Organisational policy"],
        ["Assets others rely on", "Found missing after the fact", "Usage analytics consulted before acting"],
        ["Finished work with a history", "Deleted to reduce clutter", "Archived out of everyday discovery"],
        ["A file that has been improved", "Old file deleted, new one uploaded", "Replaced in place, versions retained"],
      ],
      sources: [{ kind: "pdf", page: 109 }, { kind: "pdf", page: 106 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 91 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about asset deletion",
      items: [
        {
          question: "Should the right to delete assets follow the right to edit them?",
          answer: ["Not necessarily. Someone who revises files every day may still not see every use of them, so it is often sensible to keep removal narrower than editing. ", { text: "Editor permissions", page: 156 }, " can give people the access required to work with creative assets without unnecessary administrative privileges."],
        },
        {
          question: "What should an asset deletion policy set out?",
          answer: "The reasons removal is allowed, who may remove content in each area of the library, the checks to make first, and the kinds of content that should be archived instead of deleted.",
        },
        {
          question: "Is removing a whole folder different from removing single assets?",
          answer: "The stakes are higher. A folder can hold work from several uploaders and teams, so check with each of them, and look inside for approved or published pieces that belong in the archive, before the folder goes.",
        },
        {
          question: "What if an asset is deleted by mistake?",
          answer: ["Raise it with whoever manages that part of the library. ", { text: "Asset recovery", page: 110 }, " covers what can help when content has been removed by accident, but careful checks before removal remain the better protection."],
        },
      ],
      sources: [{ kind: "pdf", page: 109 }, { kind: "pdf", page: 156 }, { kind: "pdf", page: 110 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on removing content responsibly",
      variant: "compact",
      pages: [151, 114, 108, 110, 112, 93],
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
