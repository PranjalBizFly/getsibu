/**
 * 173 · Folder Access Maps — /permissions/folder-access-maps
 *
 * Angle (cluster: access-audit): the permissions angle on analytics — how folders are accessed across teams, used to
 * check that permissions and folder structure still match real use. Folder Access Analytics (198) owns which areas
 * receive attention; Access History (171) owns user interactions. No figures, breakdowns, alerts or exports described.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of reading access patterns to review permissions; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 173,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Permissions & Multi-Tenancy",
      lede: "How understanding which teams use which folders helps an organisation check whether its permissions and folder structure still match the way people really work, and what to do with the patterns it reveals.",
      visual: { diagram: "library-activity" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 173 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A picture of which teams rely on which folders",
      body: [
        "Analytics in GetSibu can help organisations understand how folders are accessed across their teams. The word “map” fits: it relates two things usually looked at separately, the folder structure and the teams working in it.",
        "Permissions are designed from assumptions about who needs what, and those assumptions age quietly. Teams change shape, campaigns end, and material made for one purpose finds a different audience. The permission settings record none of this: they describe what is allowed, not whether the allowance still matches the work.",
        [
          "Folder access maps take the permissions angle on library activity. ",
          { text: "Creative asset analytics", page: 181 },
          " provide the broader view of uploads, comments, storage, contributors and tags, and ",
          { text: "access history", page: 171 },
          " provides information about important user interactions with the library.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["How folders are accessed across teams", "Permissions checked against real use", "The structure seen through its teams", "Patterns as prompts, not verdicts", "Decisions about access and structure"],
      },
      highlight: {
        heading: "In practice",
        body: "Before a reorganisation, a head of marketing looks at how each campaign folder is accessed across teams, so the new structure starts from how people really work rather than from the old organisation chart.",
        tags: ["Library owners", "Department heads", "Administrators"],
      },
      glance: {
        heading: "Folder access maps in brief",
        facts: [
          { label: "Area", value: "Permissions & Multi-Tenancy" },
          { label: "Shows", value: "How folders are accessed across teams" },
          { label: "Analytics overview", value: "Creative Asset Analytics", page: 181 },
          { label: "Attention by area", value: "Folder Access Analytics", page: 198 },
        ],
        actions: [{ kind: "route", path: "/permissions", label: "More in Permissions & Multi-Tenancy" }]
      },
      sources: [{ kind: "pdf", page: 173 }, { kind: "pdf", page: 181 }, { kind: "pdf", page: 171 }, { kind: "pdf", page: 198 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "patterns",
      eyebrow: "What to look for",
      heading: "Patterns worth noticing in how folders are accessed",
      intro: "Each pattern is a reason to ask a question, not a conclusion in itself.",
      items: [
        {
          heading: "Access that nobody seems to use",
          summary: "A team can reach a folder that it shows no sign of using.",
          icon: "lock",
          body: [
            "Unused access does no harm on its own, but it widens the circle of people who could see sensitive material for no benefit. It is usually left over from an earlier project or a structure that has since changed, which makes it an obvious candidate for narrowing.",
          ],
        },
        {
          heading: "Folders used well beyond their intended team",
          summary: "A folder designed for one team may have become important to several.",
          icon: "users",
          body: [
            "When other teams depend on a folder, its contents have usually outgrown their original purpose. Moving the widely used material to an area meant for a wider audience is often cleaner than granting access to the original folder, with its working files, to more and more people.",
          ],
        },
        {
          heading: "Use that no team-level access explains",
          summary: "A team that clearly relies on a folder may be reaching it through a collection of individual exceptions.",
          icon: "key",
          body: [
            [
              "When a team’s use of a folder is not reflected in any access given to the team, find out how its members reach it. If the answer is a series of personal grants, ",
              { text: "team access management", page: 175 },
              " allows organisations to establish consistent permissions across groups of users, which is simpler to maintain.",
            ],
          ],
        },
        {
          heading: "Folders that have gone quiet",
          summary: "Areas no team appears to visit any more often hold finished work.",
          icon: "archive",
          body: [
            [
              "Quiet folders are frequently past campaigns or retired products. ",
              { text: "Asset archiving", page: 108 },
              " retains historical content without letting old material interfere with everyday discovery, which may suit them better than a place in the active structure.",
            ],
          ],
        },
        {
          heading: "Sensitive areas reached by many teams",
          summary: "A confidential folder used across many teams deserves a closer look.",
          icon: "shield",
          body: [
            "Broad use of a folder holding unreleased or client work can be entirely legitimate during a busy launch. It is still worth confirming that each team involved has a current reason, especially once the busiest phase is over.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 175 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 173 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "map-to-decision",
      eyebrow: "Step by step",
      heading: "From how folders are accessed to an access decision",
      steps: [
        { heading: "Bring a question", body: "Decide what you want to learn first, such as whether a department’s access still fits or whether a campaign area can be closed.", icon: "help" },
        { heading: "Look at the relevant folders", body: "Study how those folders are accessed across teams, and note anything that differs from what you expected.", icon: "map" },
        { heading: "Compare with current permissions", body: "Set what you see against the folder-level permissions that apply to those folders today.", icon: "folder", page: 152 },
        { heading: "Talk to the owners", body: "Speak to the people responsible for the teams and folders involved; they usually know why a pattern exists.", icon: "users" },
        { heading: "Adjust access or structure", body: "Narrow unused access, give a team the access its members already rely on, or move material to a folder that suits its real audience.", icon: "refresh" },
        { heading: "Look again later", body: "After access or structure has changed, return to the same folders once teams have had time to adjust, to see whether their use has shifted as intended.", icon: "refresh" },
      ],
      sources: [{ kind: "pdf", page: 152 }, EXPLAINS],
    },
    {
      kind: "before-after",
      id: "assumptions",
      eyebrow: "The difference",
      heading: "Access based on assumptions, and access checked against use",
      beforeLabel: "Permissions from assumptions",
      afterLabel: "Permissions checked against use",
      before: ["Access set once and seldom revisited", "Unused access left in place", "Personal exceptions multiplying unseen", "A folder structure frozen at launch"],
      after: ["A view of how teams use each folder", "Candidates for narrowing spotted", "Team access where a team relies on a folder", "Structure adjusted to real audiences"],
      sources: [{ kind: "pdf", page: 173 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about folder access maps",
      items: [
        {
          question: "How are folder access maps different from folder access analytics?",
          answer: [
            "They are closely related views. ",
            { text: "Folder access analytics", page: 198 },
            " describe folder access maps as helping organisations understand which areas of the library receive attention; read from the permissions side, the same kind of view helps check whether each folder’s audience still fits.",
          ],
        },
        {
          question: "Should a folder access map be used to judge individual colleagues?",
          answer: "It concerns folders and teams, and it is best suited to structural questions. Anything about an individual belongs in a conversation with the people involved, not in a reading of team-level patterns.",
        },
        {
          question: "Who should look at folder access maps?",
          answer: "The people who can act on what they show: whoever designs the folder structure, and the leads who know what their teams need. Reading them without the ability to change access or structure tends to produce observations rather than decisions.",
        },
      ],
      sources: [{ kind: "pdf", page: 173 }, { kind: "pdf", page: 198 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on reading access patterns",
      variant: "compact",
      pages: [198, 181, 171, 175, 152, 108],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Give Your Creative Team One Source of Truth",
      conversionPage: 395,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 395 }],
    },
  ],
};

export default page;
