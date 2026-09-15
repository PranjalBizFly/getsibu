/**
 * 223 · GetSibu for Enterprise Marketing — /use-cases/enterprise-marketing
 *
 * Angle (cluster: uc-marketing-brand): governance at scale — many marketing teams, agencies and contractors sharing one
 * library, with governance, permissions, search, approvals and analytics combined so the organisation can answer who
 * did what, who may use what and whether content is used. Marketing Teams (213) owns the everyday campaign library;
 * Brand Teams (214) owns brand controls; Global Brands (224) and Multi-Market Teams (225) own markets and regions.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how large marketing organisations typically govern shared assets; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 223,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Use Cases",
      lede: "How a large marketing organisation can combine governance, permissions, search, approvals and analytics in one library, so many teams move quickly while the organisation keeps track of what is approved and how the library is used.",
      visual: { diagram: "media-library" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 223 }, { kind: "pdf", page: 179 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Many marketing teams, one set of rules",
      body: [
        "Enterprise marketing teams can use GetSibu to combine asset governance, permissions, search, approvals and analytics in one environment rather than spreading them across separate systems.",
        "Scale changes the nature of the problem. A large marketing organisation has brand, product, digital, events and communications teams, each with agencies and freelancers of its own. The question is no longer only whether an asset can be found, but who put it there, who is allowed to use it, whether it was approved and whether anyone uses it at all.",
        [
          "Those are governance questions, and they belong inside the library rather than in a policy document. ",
          { text: "Enterprise asset governance", page: 179 },
          " combines roles, permissions, audit logs, authentication and organisational policies, while ",
          { text: "executive asset analytics", page: 210 },
          " give leadership a higher-level view of the creative library and its usage.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Rules for who can do what", "Access across departments and projects", "Approval before distribution", "Audit history for accountability", "Analytics for leaders and teams"],
      },
      highlight: {
        heading: "In practice",
        body: "When the events team asks why it cannot open an embargoed launch folder, the answer is in the folder’s permissions rather than in someone’s memory.",
        tags: ["Marketing operations", "Team leads", "Leadership"],
      },
      glance: {
        heading: "Enterprise marketing in brief",
        facts: [
          { label: "Team", value: "Enterprise marketing teams" },
          { label: "Typical material", value: "Campaign, product, brand and event assets" },
          { label: "Builds on", value: "Creative Asset Governance", page: 114 },
          { label: "Supports", value: "Creative Operations Analytics", page: 195 },
        ],
        actions: [{ kind: "route", path: "/use-cases", label: "More in Use Cases" }]
      },
      sources: [{ kind: "pdf", page: 223 }, { kind: "pdf", page: 179 }, { kind: "pdf", page: 210 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 114 }, { kind: "pdf", page: 195 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "capabilities",
      eyebrow: "What the organisation uses",
      heading: "The parts enterprise marketing combines",
      items: [
        {
          heading: "Asset governance",
          body: "Governance settles which people may upload, edit, approve, download and manage assets, so every team works within stated rules.",
          icon: "shield",
          points: ["Rights defined per activity", "The same rules across teams"],
          page: 114,
        },
        {
          heading: "Enterprise permissions",
          body: "Structured access controls apply across departments, projects and folders, and broad organisational roles can be combined with folder-level detail.",
          icon: "lock",
          points: ["Departments, projects and folders", "Roles refined by folder"],
          page: 169,
        },
        {
          heading: "Search across the library",
          body: "Teams search the entire creative library instead of opening folders one by one, and results can draw on several information sources at once.",
          icon: "search",
          points: ["One search for every team", "Several signals combined"],
          page: 16,
        },
        {
          heading: "Approval workflows",
          body: "Assets move through requested review and changes before they are marked as approved for use.",
          icon: "approval",
          points: ["Review requested on the asset", "Approval recorded, not assumed"],
          page: 67,
        },
        {
          heading: "Audit logs",
          body: "A historical record captures important actions, including permission changes, comments and asset changes.",
          icon: "audit",
          points: ["Permissions, comments and edits", "Evidence for later questions"],
          page: 326,
        },
        {
          heading: "Creative operations analytics",
          body: "Leaders can understand how efficiently the organisation’s asset library is being used.",
          icon: "chart",
          points: ["Library use at organisational level", "Input for operational decisions"],
          page: 195,
        },
      ],
      sources: [{ kind: "pdf", page: 114 }, { kind: "pdf", page: 169 }, { kind: "pdf", page: 178 }, { kind: "pdf", page: 16 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 68 }, { kind: "pdf", page: 326 }, { kind: "pdf", page: 195 }, { kind: "pdf", page: 205 }],
    },
    {
      kind: "tabs",
      id: "roles",
      eyebrow: "By role",
      heading: "How governance looks from each seat",
      tabs: [
        {
          label: "Marketing operations",
          heading: "Set the structure once and keep it consistent",
          icon: "workflow",
          body: [
            "Marketing operations teams own the library’s structure: which folders exist, which teams can reach them and which policies apply.",
            [{ text: "Organisation admin controls", page: 158 }, " cover access policies, users, folders and organisational settings, and ", { text: "team access management", page: 175 }, " establishes consistent permissions across groups of users."],
          ],
          points: ["Policies, users and folders together", "Consistent permissions per group"],
        },
        {
          label: "Team leads",
          heading: "Lead a team within clear boundaries",
          icon: "users",
          body: [
            "Product, events and digital leads need full access to their own material and confidence that other teams’ unreleased work stays out of view.",
            [{ text: "Manager permissions", page: 155 }, " give access to specific folders or teams while restricting areas beyond a lead’s responsibilities, and ", { text: "creative workflow metrics", page: 208 }, " help them understand how assets move through upload, review and approval."],
          ],
          points: ["Access matched to responsibility", "Workflow progress in view"],
        },
        {
          label: "Leadership",
          heading: "See the library as an operating asset",
          icon: "trend",
          body: [
            "Leaders want to know whether the organisation’s investment in content is being used, not how many files exist.",
            [{ text: "Creative library reporting", page: 205 }, " turns analytics into information that supports operational decisions, and ", { text: "creative team analytics", page: 199 }, " show how different groups interact with the library."],
          ],
          points: ["Reporting for decisions", "Group-by-group activity"],
        },
        {
          label: "Legal and risk",
          heading: "Answer questions about access with evidence",
          icon: "audit",
          body: [
            "Legal and risk teams ask how people interacted with a file, what happened to it and whether its release was approved.",
            [{ text: "Access history", page: 171 }, " provides information about important user interactions with the library, and the ", { text: "asset audit trail", page: 119 }, " gives visibility into important actions performed on creative files."],
          ],
          points: ["Interactions on record", "Actions on files traceable"],
        },
      ],
      sources: [{ kind: "pdf", page: 158 }, { kind: "pdf", page: 175 }, { kind: "pdf", page: 155 }, { kind: "pdf", page: 208 }, { kind: "pdf", page: 205 }, { kind: "pdf", page: 199 }, { kind: "pdf", page: 171 }, { kind: "pdf", page: 119 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A quarterly review of the marketing library",
      team: "A marketing operations lead",
      situation: "The marketing operations lead at a large organisation reviews the shared library each quarter, looking at access, approvals and whether content is being used.",
      steps: [
        {
          heading: "Access changes are checked",
          body: [{ text: "Permission auditing", page: 170 }, " means access changes can be recorded in the audit history, and the lead finds access still in place for campaigns that have since finished."],
        },
        {
          heading: "Folder attention is compared",
          body: [{ text: "Folder access maps", page: 173 }, " help show how folders are accessed across teams, and a folder for a discontinued product line stands out for receiving little attention."],
        },
        {
          heading: "Library health is read",
          body: [{ text: "Library health analytics", page: 196 }, " can reveal growth, duplicates and inactive content, pointing the lead towards the areas most in need of tidying."],
        },
        {
          heading: "An approval is traced",
          body: ["For a campaign that went out with an error, ", { text: "approval history", page: 77 }, " provides the record of review activity behind the version that was accepted."],
        },
        {
          heading: "Findings reach leadership",
          body: "The lead shares the executive view of the library with the marketing director, as a higher-level picture of the library and how it is used.",
        },
      ],
      outcome: "The review becomes a routine check on evidence the library already holds, rather than a one-off audit assembled from spreadsheets and interviews.",
      link: { page: 179, label: "Enterprise Asset Governance" },
      sources: [{ kind: "pdf", page: 170 }, { kind: "pdf", page: 173 }, { kind: "pdf", page: 196 }, { kind: "pdf", page: 77 }, { kind: "pdf", page: 210 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "accordion",
      id: "decisions",
      eyebrow: "Considerations",
      heading: "Governance questions to answer before scaling up",
      items: [
        {
          heading: "Responsibilities before folders",
          summary: "Decide what kinds of work people do in the library before designing its structure.",
          icon: "users",
          body: [
            "Enterprise libraries become hard to govern when folders mirror today’s organisation chart and access is granted person by person. Starting from the kinds of work people do, such as contributing, approving and using, gives a model that survives reorganisation.",
            [{ text: "RBAC security", page: 325 }, " limits what users can do according to their organisational responsibilities."],
          ],
        },
        {
          heading: "Where approval is mandatory",
          summary: "Not every asset needs the same gate.",
          icon: "approval",
          body: [
            "Requiring approval for everything slows teams down; requiring it for nothing lets drafts escape. One workable approach is to gate external-facing assets and leave internal working files ungated.",
            ["An ", { text: "approved asset library", page: 103 }, " then gives colleagues views of content that has completed the required review."],
          ],
        },
        {
          heading: "Retention and usage rules",
          summary: "Governance covers how long assets stay and how they may be used.",
          icon: "calendar",
          body: [
            [{ text: "Creative data governance", page: 339 }, " establishes rules around access, retention, usage and asset management. ", { text: "Expiring creative assets", page: 104 }, " add a practical tool, helping teams identify content that should no longer be used after a specified period."],
          ],
        },
        {
          heading: "Access for one campaign",
          summary: "People brought in for a single project need access that ends when their work does.",
          icon: "briefcase",
          body: [
            "Large campaigns borrow people from other teams for a few busy weeks. Their access is easy to grant during the rush and easy to forget afterwards.",
            [{ text: "Individual permissions", page: 157 }, " provide targeted access where organisational roles are not granular enough, which suits someone involved in one project only."],
          ],
        },
        {
          heading: "Whether governance is helping",
          summary: "Controls should make work more predictable, not only safer.",
          icon: "gauge",
          body: [
            [{ text: "Creative operations efficiency", page: 355 }, " is the aim: centralised search, metadata, approvals and analytics can make creative operations more predictable. ", { text: "Digital asset KPIs", page: 207 }, " such as uploads, searches, contributors and asset activity show whether that is happening."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 325 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 339 }, { kind: "pdf", page: 104 }, { kind: "pdf", page: 157 }, { kind: "pdf", page: 355 }, { kind: "pdf", page: 207 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about GetSibu for enterprise marketing",
      items: [
        {
          question: "Can enterprise marketing teams limit access by department?",
          answer: ["Yes. Through ", { text: "department access", page: 176 }, ", departments can receive access to only the creative libraries relevant to their work."],
        },
        {
          question: "Can launch material be kept private by default in an enterprise marketing library?",
          answer: ["New folders can remain private until access is explicitly granted, a ", { text: "default-deny model", page: 154 }, " rather than one that automatically exposes new content."],
        },
        {
          question: "What can enterprise marketing leaders measure about their creative library?",
          answer: [{ text: "Asset management metrics", page: 206 }, " give leaders a quantitative view of library activity, storage and collaboration to set beside what teams report."],
        },
        {
          question: "Is multi-factor authentication available for an enterprise marketing library?",
          answer: ["Yes. ", { text: "MFA", page: 336 }, " adds another layer of account protection, and it can be enforced for an organisation."],
        },
      ],
      sources: [{ kind: "pdf", page: 176 }, { kind: "pdf", page: 154 }, { kind: "pdf", page: 206 }, { kind: "pdf", page: 336 }],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on governing marketing assets at scale",
      variant: "compact",
      pages: [179, 114, 169, 210, 213, 224],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page, and the closest marketing use cases." }],
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
