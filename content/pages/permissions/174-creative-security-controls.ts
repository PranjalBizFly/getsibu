/**
 * 174 · Creative Security Controls — /permissions/creative-security-controls
 *
 * Angle (clusters: secure-collaboration, security-foundations): controls against two different problems — unnecessary
 * access (more than the work needs) and unauthorised access (no right to be there) — and which controls address each.
 * GetSibu Security (321) owns the security architecture; Per-Client Authentication (165) owns authentication layers.
 * Only publishable controls: MFA, default-deny, permissions, RBAC, tenant isolation, encrypted secret storage (PDF 323
 * wording) and audit logs. No asset encryption specifics, no identity-provider terms.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of access risks in creative libraries; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 174,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Permissions & Multi-Tenancy",
      lede: "How security controls guard creative assets against two different problems, access people do not need and access they should never have, and which controls in GetSibu address each one.",
      visual: { diagram: "folder-access", focus: "private" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 174 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Two kinds of access worth guarding against",
      body: [
        "Security controls help protect creative assets from unnecessary or unauthorised access. The two words name different problems, and a creative library needs an answer to both.",
        "Unauthorised access is the familiar one: someone with no right to be in the library, or in a particular part of it, such as an outsider using a stolen password or a former employee whose account was never closed. Unnecessary access is quieter. It belongs to people who are legitimately in the library but can reach far more than their work requires, so an unreleased campaign is visible to a wide circle of well-meaning colleagues. It rarely causes one dramatic incident; it makes every other mistake more likely to spread.",
        [
          "In GetSibu these controls are part of a wider design: ",
          { text: "GetSibu security", page: 321 },
          " is built into the architecture through encryption, authentication, access control, tenant isolation and audit logging.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Unnecessary access: more than the work needs", "Unauthorised access: no right to be there", "A control for each kind of risk", "Protected accounts and credentials", "A record that supports accountability"],
      },
      highlight: {
        heading: "In practice",
        body: "A design agency keeps unreleased client work within reach of the teams producing it and adds multi-factor authentication as another layer of account protection, dealing with both kinds of access rather than only one.",
        tags: ["Security", "Agencies", "IT"],
      },
      glance: {
        heading: "Security controls in brief",
        facts: [
          { label: "Area", value: "Permissions & Multi-Tenancy" },
          { label: "Protects against", value: "Unnecessary or unauthorised access" },
          { label: "Foundations", value: "GetSibu Security", page: 321 },
          { label: "Sharing", value: "Secure Asset Sharing", page: 172 },
        ],
        actions: [{ kind: "route", path: "/permissions", label: "More in Permissions & Multi-Tenancy" }]
      },
      sources: [{ kind: "pdf", page: 174 }, { kind: "pdf", page: 321 }, { kind: "pdf", page: 336 }, { kind: "pdf", page: 172 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "controls",
      eyebrow: "Controls",
      heading: "Which controls address which kind of access",
      columns: ["Mainly guards against", "What it contributes"],
      rows: [
        { label: "Multi-factor authentication", page: 336, cells: ["Unauthorised access", "Another layer of account protection"] },
        { label: "Default-deny folders", page: 337, cells: ["Unnecessary access", "New content not automatically exposed to every user"] },
        { label: "Folder-level permissions", page: 152, cells: ["Unnecessary access", "Access controlled more finely than organisation-wide rules"] },
        { label: "Role-based access control", page: 325, cells: ["Unnecessary actions", "Limits on what users can perform, set by responsibility"] },
        { label: "Tenant isolation", page: 324, cells: ["Access across customers", "An architecture designed around tenant-scoped data access"] },
        { label: "Encrypted secret storage", page: 323, cells: ["Misused credentials", "Protection for OAuth credentials, SMTP passwords and API tokens"] },
        { label: "Audit logs", page: 326, cells: ["Unaccountable changes", "A historical record of important actions"] },
      ],
      sources: [{ kind: "pdf", page: 336 }, { kind: "pdf", page: 337 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 325 }, { kind: "pdf", page: 324 }, { kind: "pdf", page: 323 }, { kind: "pdf", page: 326 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "risks",
      eyebrow: "Risks and responses",
      heading: "Common ways creative assets reach the wrong people",
      tabs: [
        {
          label: "Over-broad access",
          heading: "Everyone can see everything",
          icon: "eye",
          body: [
            "Libraries that start small often give everyone access to everything, and nobody revisits the decision as the library grows. The outcome is a wide audience for material only a few people need, including work that has not been announced.",
            ["Revisiting it means deciding which areas need a smaller audience and giving them structure of their own. ", { text: "Permission hierarchies", page: 178 }, " combine broad organisational roles with more detailed folder-level controls."],
          ],
          points: ["Wide audiences for sensitive work", "Narrower access where it matters"],
        },
        {
          label: "Weak accounts",
          heading: "A password as the only barrier",
          icon: "key",
          body: [
            "Creative teams work from shoots, hotels and shared machines, and a single password is a thin barrier for an account that can reach unreleased work. Protection deserves the most attention on the accounts with the widest reach, such as administrators and people who look after client libraries.",
          ],
          points: ["Accounts with the widest reach first", "More than a password"],
          link: { page: 336, label: "MFA" },
        },
        {
          label: "Leavers",
          heading: "Access that outlives the job",
          icon: "user",
          body: [
            "Projects finish, roles change and employees move on. Access left in place afterwards is unauthorised in all but name, because the reason for it has gone.",
            ["Reviewing access at the end of each engagement, with ", { text: "permission auditing", page: 170 }, " helping to show how it changed along the way, keeps that gap small."],
          ],
          points: ["Access ended with the work", "Reviews at natural end points"],
        },
        {
          label: "Integrations",
          heading: "Credentials left where they should not be",
          icon: "api",
          body: [
            "Automations and connected services need credentials, and those credentials tend to end up in scripts, shared documents and old configuration. Anyone who finds them may be able to act with the same reach as the integration.",
            [{ text: "API authentication", page: 256 }, " means requests use authenticated access, so external applications interact with the platform within appropriate security boundaries."],
          ],
          points: ["Credentials treated as sensitive", "Applications within boundaries"],
        },
        {
          label: "Forwarded files",
          heading: "Work travelling beyond its audience",
          icon: "copy",
          body: [
            "A file sent to one person can be passed to many, and nobody can call it back once it has gone. Control is far easier to keep when people share by giving access to the library instead of sending the work itself.",
          ],
          points: ["Copies that escape control", "Sharing through access instead"],
          link: { page: 172, label: "Secure Asset Sharing" },
        },
      ],
      sources: [{ kind: "pdf", page: 178 }, { kind: "pdf", page: 170 }, { kind: "pdf", page: 256 }, { kind: "pdf", page: 172 }, EXPLAINS],
    },
    {
      kind: "checklist",
      id: "review-questions",
      eyebrow: "What to weigh",
      heading: "Questions for a review of creative security controls",
      variant: "chips",
      items: [
        "Who can reach unreleased work",
        "Which accounts have the widest reach",
        "How new folders start out",
        "When access ends after a project",
        "Where integration credentials are kept",
        "How client environments are separated",
        "Who reads the record of changes",
        "How files leave the team",
      ],
      sources: [{ kind: "pdf", page: 174 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about creative security controls",
      items: [
        {
          question: "Which security controls should a creative library prioritise?",
          answer: [
            "The ones that match its risks, which usually means protecting accounts, narrowing access to sensitive areas and keeping a record of changes. ",
            { text: "Enterprise asset security", page: 338 },
            " describes the broader combination of identity management, encryption, permissions, auditability and data isolation.",
          ],
        },
        {
          question: "Should unreleased and finished work get the same security controls?",
          answer: "Not usually. Controls that protect accounts apply to everyone, but the audience for each area can differ: approved material may be meant for wide use, while unreleased launches and licensed footage justify the smallest circle the work allows.",
        },
        {
          question: "How do security controls extend to an agency working for several clients?",
          answer: [
            "Alongside the controls every library needs, each client environment can remain ",
            { text: "logically isolated", page: 161 },
            " from the others, and ",
            { text: "client-specific authentication options", page: 165 },
            " can support separate access controls for different customers.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 338 }, { kind: "pdf", page: 161 }, { kind: "pdf", page: 165 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on protecting creative assets",
      variant: "compact",
      pages: [321, 336, 323, 172, 180, 338],
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
