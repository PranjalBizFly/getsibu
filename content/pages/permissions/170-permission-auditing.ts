/**
 * 170 · Permission Auditing — /permissions/permission-auditing
 *
 * Angle (clusters: audit-history, access-audit): changes to access recorded in the audit history for accountability —
 * the moments that record matters and how to review access with it. Access History (171) owns user interactions;
 * Asset Audit Trail (119) and Asset Activity (118) own actions on files; Audit Logs (326) the platform record.
 * No exports, immutability or recorded fields are described.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of access accountability and review practice; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 170,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Permissions & Multi-Tenancy",
      lede: "Why a record of how access has changed matters, the moments when an organisation needs it most, and how to turn it into a routine review of permissions instead of a scramble after something goes wrong.",
      visual: { diagram: "tenant-boundaries", focus: "audit" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 170 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A record of how access has changed over time",
      body: [
        "In GetSibu, changes to permissions can be recorded in the audit history, creating accountability around access management. The subject is access itself: not what happened to an asset, but how the rules about who can reach it have changed.",
        "Permissions are rarely wrong on the day they are set. They become wrong later, as projects end, people move on and exceptions accumulate. Without a record, the current state of access is all anyone can see, and nobody can say whether a folder has always been open this widely or was widened along the way for a reason that has since been forgotten.",
        [
          "Other records have different subjects. ",
          { text: "Audit logs", page: 326 },
          " provide a historical record of important actions that includes permissions alongside comments and asset changes, while ",
          { text: "access history", page: 171 },
          " provides information about important user interactions with the library.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Permission changes kept in the audit history", "Accountability for access decisions", "How access changed, not only how it stands", "A starting point for access reviews", "Separate from actions on assets"],
      },
      highlight: {
        heading: "In practice",
        body: "When a client asks how access to its campaign folder has changed, the agency can start from the permission changes recorded in the audit history instead of reconstructing events from old email.",
        tags: ["Security", "Library owners", "Agencies"],
      },
      glance: {
        heading: "Permission auditing in brief",
        facts: [
          { label: "Area", value: "Permissions & Multi-Tenancy" },
          { label: "Records", value: "Changes to permissions" },
          { label: "Kept in", value: "The audit history" },
          { label: "Wider record", value: "Audit Logs", page: 326 },
        ],
        actions: [{ kind: "route", path: "/permissions", label: "More in Permissions & Multi-Tenancy" }]
      },
      sources: [{ kind: "pdf", page: 170 }, { kind: "pdf", page: 326 }, { kind: "pdf", page: 171 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "moments",
      eyebrow: "When it helps",
      heading: "Moments when a record of access changes matters",
      items: [
        {
          heading: "A folder turns out to be wider open than expected",
          summary: "Finding far more people with access than anyone intended raises the question of how it happened.",
          icon: "eye",
          body: [
            "A routine look at a folder sometimes shows an audience much larger than its owner meant. Recorded changes can help show whether that happened in one step or crept up through a series of small grants, and the two call for different fixes: a conversation with one person, or a change to the way access decisions are made.",
          ],
        },
        {
          heading: "Someone leaves the organisation",
          summary: "A departure is the moment to confirm that access granted along the way has really been dealt with.",
          icon: "user",
          body: [
            "Closing an account is only part of a departure. Access that was widened for that person during a project may still be in place, and so may access they arranged for colleagues in the areas they looked after. Reviewing the recorded permission changes that concern those areas helps confirm that nothing has been left behind.",
          ],
        },
        {
          heading: "Sensitive work reaches the wrong people",
          summary: "After an exposure, one of the first questions is how access came to be the way it was.",
          icon: "flag",
          body: [
            "If unreleased work turns up somewhere it should not, the history of permission changes can help establish whether access to that area was widened. Whether that widening was an agreed decision or a shortcut taken under pressure is then a question for the people responsible.",
          ],
        },
        {
          heading: "A reorganisation reshapes teams",
          summary: "Large structural changes produce many access changes in a short time.",
          icon: "building",
          body: [
            "Merging departments, moving managers or creating new teams can touch permissions across much of the library at once. A record of those changes lets someone confirm afterwards that the new structure was applied as intended, instead of trusting that nothing was missed.",
          ],
        },
        {
          heading: "An exception has to be justified",
          summary: "A targeted grant made for a good reason can look alarming out of context.",
          icon: "key",
          body: [
            [
              "A colleague from another department with access to a single campaign folder may be entirely appropriate. ",
              { text: "Individual permissions", page: 157 },
              " exist for targeted access where organisational roles alone are not granular enough, and recording the change brings that exception within the same accountability as every other access decision.",
            ],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 157 }, { kind: "pdf", page: 170 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "review",
      eyebrow: "Step by step",
      heading: "Reviewing access with the audit history",
      intro: "A general routine any team can adapt; how often to run it depends on how sensitive the library is.",
      steps: [
        { heading: "Choose the areas", body: "Begin with the folders holding the most sensitive material, such as unreleased campaigns, client work and licensed assets.", icon: "folder" },
        { heading: "Read what changed", body: "Go through the recorded permission changes that concern those areas, noting any that widened who can reach the material.", icon: "audit" },
        { heading: "Compare with today’s responsibilities", body: "Check each change against the people and projects as they stand now, not as they stood when the access was granted.", icon: "users" },
        { heading: "Ask about anything unexplained", body: "Where access grew and nobody can say why, speak to the person responsible for that area before altering anything.", icon: "help" },
        { heading: "Bring access back into line", body: "Narrow or remove access that no longer matches a responsibility; each correction is itself a change to permissions.", icon: "lock" },
        { heading: "Note what was decided", body: "Keep a short summary of the findings and decisions, so the following review starts from a known position.", icon: "document" },
      ],
      sources: [{ kind: "pdf", page: 170 }, EXPLAINS],
    },
    {
      kind: "before-after",
      id: "accountability",
      eyebrow: "The difference",
      heading: "Managing access without a record, and with one",
      beforeLabel: "No record of changes",
      afterLabel: "Permission changes on record",
      before: ["Only today’s access is visible", "Past decisions depend on memory", "Departures checked by guesswork", "Exceptions nobody can account for"],
      after: ["Changes to access recorded in the audit history", "Accountability around access decisions", "A trail for reviews to follow", "Exceptions with a documented place"],
      sources: [{ kind: "pdf", page: 170 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about permission auditing",
      items: [
        {
          question: "What details does a recorded permission change include?",
          answer: "Changes to permissions can be recorded in the audit history, but the detail each entry holds is worth confirming for your own setup before you design a review routine that depends on it.",
        },
        {
          question: "Who should review recorded changes to permissions?",
          answer: [
            "Usually the people responsible for access policy, together with those who know each area’s audience. ",
            { text: "Organisation administrators", page: 158 },
            " look after access policies and users, while team and department leads can confirm whether a change made sense.",
          ],
        },
        {
          question: "Can permission auditing replace regular access reviews?",
          answer: "No. A record makes reviews quicker and more dependable, but someone still has to read it and decide whether each change still fits the organisation’s responsibilities.",
        },
      ],
      sources: [{ kind: "pdf", page: 170 }, { kind: "pdf", page: 158 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on accountability for access",
      variant: "compact",
      pages: [326, 171, 119, 157, 158, 159],
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
