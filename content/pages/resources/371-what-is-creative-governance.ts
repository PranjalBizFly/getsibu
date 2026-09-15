/**
 * 371 · What Is Creative Governance? — /resources/what-is-creative-governance
 *
 * Angle (cluster: workflow-explainers; governance): vendor-neutral explainer of governance as the rule set for a
 * creative library — the five areas it decides (ownership, permissions, approvals, retention, usage), how to keep it
 * proportionate and what changes when rules move into the library. Creative Asset Governance (114) owns who may
 * upload, edit, approve, download and manage; Creative Access Governance (159) sensitive content; Enterprise Asset
 * Governance (179) the enterprise combination; Creative Data Governance (339) data rules.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Vendor-neutral explanation of creative governance practice; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 371,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "centered",
      eyebrow: "Resources",
      lede: "What creative governance covers, the five areas of decision it brings together, how to keep rules proportionate for creative teams, and how GetSibu supports it through permissions, audit records, archiving and expiry information.",
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 371 }, { kind: "pdf", page: 114 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 170 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 104 }],
    },
    {
      kind: "definition",
      id: "definition",
      eyebrow: "Definition",
      term: "Creative governance",
      answer: "Creative governance establishes rules around asset ownership, permissions, approvals, retention and usage. It decides how a creative library is allowed to work, not only what it holds.",
      detail: "Every library runs on rules, written down or not: someone decides who can upload, who can see client work, who signs off a campaign and when old material is removed. Governance makes those rules explicit, gives each one an owner and places it where the work happens, so it applies consistently instead of depending on who happens to be asked.",
      sources: [{ kind: "pdf", page: 371 }, EXPLAINS],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "The rules that let many people share one library",
      body: [
        "Governance sits above the tools. Permissions and approval workflows are how rules are applied; governance is the prior decision about what those rules should be, who owns them and how anyone will know they were followed.",
        "The need grows with the number of people and the value of the content. A small studio can govern by conversation. An organisation with several teams, agencies, markets and freelancers cannot, because informal rules fail exactly where the risk is highest: unreleased product imagery shared too widely, an expired licence still in use, a draft published as final, or nobody knowing who may delete an old campaign.",
        [
          "Governance is also what makes neighbouring practices trustworthy. ",
          { text: "Creative approval", page: 370 },
          " only means something if the right people are authorised to give it, and a ",
          { text: "multi-tenant DAM", page: 372 },
          " applies governance at the boundary between clients or organisations.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Rules made explicit", "An owner for every rule", "Permissions and approvals as controls", "Limits on retention and usage", "Evidence of what happened"],
      },
      highlight: {
        heading: "In practice",
        body: "Before a product launch, only the launch team can see the new imagery. On launch day access widens to regional teams, and the previous product shots are archived rather than left where someone might reuse them by mistake.",
        tags: ["Brand", "Legal", "Library managers"],
      },
      glance: {
        heading: "Creative governance in brief",
        facts: [
          { label: "Area", value: "Asset management and access" },
          { label: "Covers", value: "Ownership, permissions, approvals, retention, usage" },
          { label: "Applied through", value: "Permissions, workflows and audit records" },
          { label: "Feature page", value: "Creative Asset Governance", page: 114 },
        ],
        actions: [{ kind: "route", path: "/resources", label: "More in Resources" }]
      },
      sources: [{ kind: "pdf", page: 371 }, { kind: "pdf", page: 370 }, { kind: "pdf", page: 372 }, { kind: "pdf", page: 114 }, EXPLAINS],
    },
    {
      kind: "layers",
      id: "five-areas",
      eyebrow: "The five areas",
      heading: "What creative governance has to decide",
      layers: [
        { label: "Ownership", body: "Who is responsible for each asset and its metadata, and who answers questions about where it came from." },
        { label: "Permissions", body: "Who may upload, view, edit, download, share or delete, and in which parts of the library." },
        { label: "Approvals", body: "Which content needs sign-off, who gives it and what state an asset must reach before anyone uses it." },
        { label: "Retention", body: "How long assets and their earlier versions are kept, when they are archived and when they are removed." },
        { label: "Usage", body: "Where, when and by whom assets may be used, including licence terms, territories, channels and end dates." },
      ],
      sources: [{ kind: "pdf", page: 371 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "workable",
      eyebrow: "Considerations",
      heading: "Keeping governance workable for creative teams",
      items: [
        {
          heading: "Proportionate rules",
          summary: "Controls should match the risk of the content they protect.",
          icon: "gauge",
          body: [
            "Unreleased product imagery, client work and licensed material deserve tight rules; mood boards and internal sketches rarely do. Applying the strictest rules everywhere pushes people to work around the library, the opposite of what governance is for.",
          ],
        },
        {
          heading: "Safe defaults",
          summary: "What happens when nobody has made a decision matters most.",
          icon: "lock",
          body: [
            ["New folders, new users and new projects are where exposure usually begins. With a default-deny approach, in which ", { text: "new folders remain private until access is explicitly granted", page: 154 }, ", forgetting to set permissions leads to too little access rather than too much."],
          ],
        },
        {
          heading: "Named owners",
          summary: "Every rule, and every important collection, needs a person accountable for it.",
          icon: "user",
          body: [
            "Governance fails quietly when responsibility belongs to everyone. A named owner for each area of the library, and for the taxonomy and retention rules, gives questions somewhere to go.",
          ],
        },
        {
          heading: "Evidence, not assumption",
          summary: "Records show whether the rules were actually followed.",
          icon: "audit",
          body: [
            ["Accountability depends on seeing who changed access, approved an asset or removed content. ", { text: "Audit logs", page: 326 }, " provide a historical record of important actions, including permissions, comments and asset changes."],
          ],
        },
        {
          heading: "Rules that keep pace",
          summary: "Teams, clients and markets change, and governance has to follow.",
          icon: "refresh",
          body: [
            "Review access when people change roles or projects close, and revisit retention and usage rules when contracts or markets change. Governance written once and never reviewed drifts away from how the organisation really works.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 154 }, { kind: "pdf", page: 326 }, EXPLAINS],
    },
    {
      kind: "before-after",
      id: "difference",
      eyebrow: "The difference",
      heading: "What changes when governance moves into the library",
      beforeLabel: "Rules in people’s heads",
      afterLabel: "Rules applied where assets live",
      before: ["Access granted on request and never removed", "Sign-off given in email or chat", "Licensed material reused after its term", "Nobody sure who may delete a campaign"],
      after: ["Access set by area and reviewed", "Approval recorded against the asset", "Usage terms recorded with the asset", "Deletion limited to authorised people"],
      sources: [EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "in-getsibu",
      eyebrow: "In GetSibu",
      heading: "How GetSibu supports creative governance",
      items: [
        {
          heading: "Who can do what",
          body: "In GetSibu, governance defines who can upload, edit, approve, download and manage assets.",
          icon: "shield",
          page: 114,
        },
        {
          heading: "Folder-level permissions",
          body: "Access can be controlled at a more detailed level than organisation-wide access, and managers can be restricted to the folders or teams they are responsible for.",
          icon: "folder",
          page: 152,
        },
        {
          heading: "Ownership and attribution",
          body: "Asset ownership provides context about who created or uploaded content, and creators and contributors can remain associated with their assets.",
          icon: "user",
          page: 116,
        },
        {
          heading: "Permission changes recorded",
          body: "Changes to permissions can be recorded in the audit history, creating accountability around access management.",
          icon: "audit",
          page: 170,
        },
        {
          heading: "Archiving and deletion",
          body: "Archiving retains historical content without letting it interfere with everyday discovery, and authorised users can remove assets according to organisational policies and permissions.",
          icon: "archive",
          page: 108,
        },
        {
          heading: "Expiry and guardrail tags",
          body: "Expiry information can help identify content that should no longer be used, and brand teams can use structured tags to mark assets that comply with specific organisational requirements.",
          icon: "flag",
          page: 105,
        },
      ],
      sources: [{ kind: "pdf", page: 114 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 155 }, { kind: "pdf", page: 115 }, { kind: "pdf", page: 116 }, { kind: "pdf", page: 170 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 109 }, { kind: "pdf", page: 104 }, { kind: "pdf", page: 105 }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about creative governance",
      items: [
        {
          question: "How does creative governance relate to data governance?",
          answer: ["They overlap. ", { text: "Creative data governance", page: 339 }, " establishes rules around access, retention, usage and asset management; creative governance applies that thinking to creative work in particular, adding concerns such as brand sign-off, licences for images and music, and credit for the people who made an asset."],
        },
        {
          question: "Who is responsible for creative governance in an organisation?",
          answer: "Normally several people: a library owner who maintains the rules, brand and legal leads who set standards for approval and usage, and team leads who decide access to their areas.",
        },
        {
          question: "Does creative governance slow creative teams down?",
          answer: "It can when rules are heavier than the risk requires. Proportionate governance can speed work up, because people spend less time asking whether an asset is approved, current or allowed in their market.",
        },
        {
          question: "How does enterprise governance differ from governance for a single team?",
          answer: ["Mainly in scope and formality. ", { text: "Enterprise asset governance", page: 179 }, " combines roles, permissions, audit logs, authentication and organisational policies, whereas a single team may need little more than clear folder access and an approval step."],
        },
      ],
      sources: [{ kind: "pdf", page: 179 }, { kind: "pdf", page: 339 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on governance and control",
      variant: "compact",
      pages: [114, 179, 159, 339, 151, 119],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the other governance topics." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Make Every Asset Discoverable",
      conversionPage: 394,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 394 }],
    },
  ],
};

export default page;
