/**
 * 179 · Enterprise Asset Governance — /permissions/enterprise-asset-governance
 *
 * Angle (cluster: governance): the combination of roles, permissions, audit logs, authentication and organisational policies,
 * and how those parts apply at each stage of an asset’s life (workflow page type). Creative Asset Governance (114) owns who
 * can upload, edit, approve, download and manage; Creative Access Governance (159) owns sensitive content over time; the
 * explainer (371) owns the vendor-neutral definition. Authentication limited to MFA and API authentication.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of enterprise governance practice; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 179,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Permissions & Multi-Tenancy",
      lede: "How roles, permissions, audit logs, authentication and organisational policies work as one system of governance, and where each of them applies as an asset moves from upload to use and, eventually, removal.",
      visual: { diagram: "folder-access", focus: "folders" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 179 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Five controls that only work together",
      body: [
        "Enterprise governance combines roles, permissions, audit logs, authentication and organisational policies. None of the five is enough on its own; governance is the arrangement in which each covers what the others cannot.",
        "Consider what happens when one is missing. Policies without permissions are intentions nobody enforces. Permissions without authentication protect an account that anyone might be using. Roles without audit logs leave no way to show that responsibilities were respected, and audit logs without policies record activity with nothing to judge it against. Large organisations feel these gaps most, because many teams, departments and markets share the same library.",
        [
          "Enterprise governance builds on narrower practices. ",
          { text: "Creative asset governance", page: 114 },
          " defines who can upload, edit, approve, download and manage assets, and ",
          { text: "creative access governance", page: 159 },
          " helps organisations maintain control over sensitive creative content.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Roles and permissions", "Audit logs for accountability", "Authentication for people and applications", "Organisational policies as the reference", "Controls across an asset’s life"],
      },
      highlight: {
        heading: "In practice",
        body: "A global organisation writes a policy that unreleased product imagery stays with the launch team. Roles and folder permissions put it into effect, authentication protects the accounts involved, and the audit logs give reviewers a record to check it against.",
        tags: ["Governance", "IT", "Legal"],
      },
      glance: {
        heading: "Enterprise governance in brief",
        facts: [
          { label: "Area", value: "Permissions & Multi-Tenancy" },
          { label: "Combines", value: "Roles, permissions, audit logs, authentication, policies" },
          { label: "Foundation", value: "Creative Asset Governance", page: 114 },
          { label: "Explainer", value: "What Is Creative Governance?", page: 371 },
        ],
        actions: [{ kind: "route", path: "/permissions", label: "More in Permissions & Multi-Tenancy" }]
      },
      sources: [{ kind: "pdf", page: 179 }, { kind: "pdf", page: 114 }, { kind: "pdf", page: 159 }, { kind: "pdf", page: 371 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "five-parts",
      eyebrow: "What it combines",
      heading: "The parts of enterprise governance in GetSibu",
      items: [
        {
          heading: "Roles",
          body: "Role-based access control limits what users can perform according to their organisational responsibilities, so authority follows the job rather than the person.",
          icon: "users",
          points: ["Actions matched to responsibility", "Consistent for people in the same job"],
          page: 325,
        },
        {
          heading: "Permissions",
          body: "Structured access controls can be applied across departments, projects and folders, deciding which areas of the library each group reaches.",
          icon: "lock",
          points: ["Departments, projects and folders", "Areas matched to audiences"],
          page: 169,
        },
        {
          heading: "Audit logs",
          body: "A historical record of important actions, including permissions, comments and asset changes, supports accountability after the event.",
          icon: "audit",
          points: ["Important actions on record", "Evidence for reviews"],
          page: 326,
        },
        {
          heading: "Account protection",
          body: "Multi-factor authentication adds another layer of account protection for the people using the library.",
          icon: "key",
          points: ["More than a password", "Accounts protected as well as areas"],
          page: 336,
        },
        {
          heading: "Application access",
          body: "API requests use authenticated access, so external applications can interact with the platform within appropriate security boundaries.",
          icon: "api",
          points: ["Integrations authenticated too", "Boundaries for automation"],
          page: 256,
        },
        {
          heading: "Organisational policies",
          body: "Organisation administrators can manage access policies, users, folders and organisational settings, which gives the organisation’s agreed rules a place inside the library.",
          icon: "book",
          points: ["Access policies managed in the library", "Organisational settings in one remit"],
          page: 158,
        },
      ],
      sources: [{ kind: "pdf", page: 325 }, { kind: "pdf", page: 169 }, { kind: "pdf", page: 326 }, { kind: "pdf", page: 336 }, { kind: "pdf", page: 256 }, { kind: "pdf", page: 158 }, EXPLAINS],
    },
    {
      kind: "workflow",
      id: "lifecycle",
      eyebrow: "Asset lifecycle",
      heading: "Where governance applies as an asset moves through its life",
      stages: [
        { label: "Arrival", body: "Policy decides who may add material and where it belongs, and a new folder can remain private until access is explicitly granted.", page: 154 },
        { label: "Organisation", body: "Tags follow the organisation’s agreed taxonomy, and authorised users can override AI-generated tags whenever a classification does not fit it.", page: 48 },
        { label: "Review", body: "Assets move through an approval process with status history, recording whether content is awaiting review, approved or in need of changes.", page: 68 },
        { label: "Distribution", body: "Permissions decide who reaches approved work, and sharing can be controlled through them rather than relying only on unrestricted links.", page: 172 },
        { label: "Use over time", body: "Where an asset carries expiry information, that information can help teams spot material that should stop being used once its period has passed.", page: 104 },
        { label: "Removal", body: "Authorised users can remove assets according to organisational policies and permissions, which keeps deletion a governed act.", page: 109 },
      ],
      sources: [{ kind: "pdf", page: 154 }, { kind: "pdf", page: 48 }, { kind: "pdf", page: 68 }, { kind: "pdf", page: 172 }, { kind: "pdf", page: 104 }, { kind: "pdf", page: 109 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "together",
      eyebrow: "Considerations",
      heading: "Making the five parts work as one",
      items: [
        {
          heading: "Write the policies before configuring anything",
          summary: "Roles and permissions are only as coherent as the policy they put into practice.",
          icon: "book",
          body: [
            "Start with short, plain statements: what counts as sensitive, who approves material before it is published, how long temporary project access lasts. Configuration then has something to follow, and later disagreements can be settled by pointing to the policy rather than to whoever argues hardest.",
          ],
        },
        {
          heading: "Change policy and configuration together",
          summary: "A policy updated on paper but not in the library leaves a gap between the rule and the practice.",
          icon: "refresh",
          body: [
            "When a policy changes, for example to narrow who may see unreleased product imagery, the roles and permissions that put it into effect need to change at the same time. Treat every policy revision as a task with two parts, the wording and the configuration, and do not consider it finished until both are done.",
          ],
        },
        {
          heading: "Read the record, not just keep it",
          summary: "A log nobody consults provides very little accountability.",
          icon: "audit",
          body: [
            [
              "Agree who looks at the record, how often, and what they look for, such as changes to access in sensitive areas. ",
              { text: "Permission auditing", page: 170 },
              " concentrates on exactly that part of the history.",
            ],
          ],
        },
        {
          heading: "Govern integrations like people",
          summary: "Automations act on the library too, and need the same boundaries.",
          icon: "plug",
          body: [
            [
              "Service credentials and connected tools should follow policy in the same way staff accounts do. OAuth credentials, SMTP passwords and API tokens can be protected using ",
              { text: "encrypted secret storage", page: 323 },
              ".",
            ],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 170 }, { kind: "pdf", page: 323 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about enterprise asset governance",
      items: [
        {
          question: "Where do approvals fit in enterprise asset governance?",
          answer: [
            "The five parts decide who can act on the library; approvals decide whether a particular asset is ready for use. ",
            { text: "Approval history", page: 77 },
            " provides a record of review activity that supports accountability, which sits alongside the audit logs rather than replacing them.",
          ],
        },
        {
          question: "Can enterprise governance be applied to a library that is already in use?",
          answer: [
            "Yes, although it means working backwards from access that already exists, and taking the most sensitive areas first keeps the task manageable. For content still to be moved in, ",
            { text: "migration planning", page: 290 },
            " ensures that assets, metadata and permissions are considered before the transfer begins.",
          ],
        },
        {
          question: "How does enterprise asset governance relate to creative data governance?",
          answer: [
            "Rules about access, retention, usage and asset management are what ",
            { text: "creative data governance", page: 339 },
            " sets out. Enterprise asset governance is the combination of controls, from roles to audit logs and authentication, that puts rules like those into effect.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 77 }, { kind: "pdf", page: 290 }, { kind: "pdf", page: 339 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on governing an enterprise library",
      variant: "compact",
      pages: [114, 159, 339, 326, 371, 223],
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
