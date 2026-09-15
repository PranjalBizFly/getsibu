/**
 * 153 · Role-Based Access Control — /permissions/role-based-access-control
 *
 * FRAMED (claim: rbac-roles). The PDF paragraph for this page is withheld and never paraphrased, and no role set
 * (complete, partial or counted) appears. Angle (cluster: access-control): role-based access control as a concept —
 * access organised around responsibilities — with RBAC Security (325) as the security statement, Permission
 * Hierarchies (178) for roles plus folders, and Creative Asset Permissions (151) as verified context.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Vendor-neutral explanation of role-based access control; states no GetSibu capability beyond the cited pages and no role set." } as const;

const page: PageContent = {
  page: 153,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Permissions & Multi-Tenancy",
      lede: "What role-based access control means for a creative library, why access tied to responsibilities is easier to manage than person-by-person decisions, and how GetSibu combines broad roles with folder-level control.",
      visual: { diagram: "folder-access", focus: "team" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 151 }, { kind: "pdf", page: 325 }, { kind: "pdf", page: 178 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Access that follows responsibilities, not names",
      body: [
        "Role-based access control, often shortened to RBAC, ties access to the work people do rather than to who they are. Access is worked out once for a kind of responsibility and then applies to everyone who carries it, instead of being decided person by person.",
        [
          "From a security perspective, ",
          { text: "RBAC security", page: 325 },
          " limits what users can perform according to their organisational responsibilities. The practical gain is consistency: two people doing the same job end up with the same access, and a change of job is simpler to reflect than a trail of separate grants.",
        ],
        [
          "Roles are broad by design, so in a creative library they rarely work alone. ",
          { text: "Permission hierarchies", page: 178 },
          " combine broad organisational roles with more detailed folder-level controls, which lets a role describe the general shape of someone’s access while individual folders handle the specifics.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Permissions grouped by responsibility", "One role shared by many people", "Actions limited by responsibility", "Roles combined with folder controls", "Few roles, clear exceptions"],
      },
      highlight: {
        heading: "In practice",
        body: "When a designer moves from the brand team to a product team, the useful question is what the new responsibility needs, not which of many one-off grants still apply.",
        tags: ["Roles", "Responsibilities", "Folders"],
      },
      glance: {
        heading: "Role-based access in brief",
        facts: [
          { label: "Area", value: "Permissions & Multi-Tenancy" },
          { label: "Organises access by", value: "Responsibility" },
          { label: "Security angle", value: "RBAC Security" },
          { label: "Finer control", value: "Folder-Level Permissions", page: 152 },
        ],
        actions: [{ kind: "route", path: "/permissions", label: "More in Permissions & Multi-Tenancy" }]
      },
      sources: [{ kind: "pdf", page: 325 }, { kind: "pdf", page: 178 }, { kind: "pdf", page: 152 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "key-terms",
      eyebrow: "Key terms",
      heading: "Terms that come up in role-based access",
      items: [
        {
          heading: "Role",
          summary: "A named bundle of access tied to a responsibility rather than to a person.",
          icon: "users",
          body: [
            "A role answers the question “what does someone doing this job need?” once, so the answer can be reused for everyone in that position. People come and go; the responsibility, and therefore the role, usually stays.",
          ],
        },
        {
          heading: "Permission",
          summary: "A single allowance: reaching an area of the library or carrying out a particular kind of action.",
          icon: "key",
          body: [
            "Permissions are the building blocks; roles are how they are grouped. Thinking in permissions is useful when designing a role, but assigning them one at a time to each person is exactly what role-based access sets out to avoid.",
          ],
        },
        {
          heading: "Scope",
          summary: "Where a role’s access applies, from the whole organisation down to a team or a folder.",
          icon: "compass",
          body: [
            "Two people can hold similar responsibilities for different parts of the library. Scope is what keeps a regional lead in their own region.",
            ["Groups are a common way to express scope: ", { text: "team-based access", page: 175 }, " allows organisations to establish consistent permissions across groups of users."],
          ],
        },
        {
          heading: "Least privilege",
          summary: "Giving each responsibility the access it needs and nothing beyond it.",
          icon: "shield",
          body: [
            "Access that exceeds a responsibility is rarely noticed until something goes wrong: an unreleased asset shared too early, or a folder reorganised by someone who did not need to touch it.",
            [{ text: "Creative security controls", page: 174 }, " exist for the same reason, helping to protect creative assets from unnecessary or unauthorised access."],
          ],
        },
        {
          heading: "Role sprawl",
          summary: "What happens when every exception is turned into a new role.",
          icon: "copy",
          body: [
            "In any role-based model, a role created for one freelancer, another for one campaign and a third for one client soon leaves more roles than anyone can explain. At that point the model has lost the clarity it was adopted for.",
            "A healthier pattern keeps roles few and handles genuine exceptions separately, where they are easy to see and easy to remove.",
          ],
        },
        {
          heading: "Default-deny",
          summary: "The starting point before anyone has been given access to something new.",
          icon: "lock",
          body: [
            ["Roles describe who should have access; a default decides what happens before anyone has decided. With ", { text: "default-deny access", page: 154 }, ", new folders can remain private until access is explicitly granted."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 175 }, { kind: "pdf", page: 174 }, { kind: "pdf", page: 154 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "settings",
      eyebrow: "In different organisations",
      heading: "How responsibility-based access plays out in practice",
      tabs: [
        {
          label: "Small studios",
          heading: "A handful of responsibilities, applied consistently",
          icon: "palette",
          body: [
            "In a small studio most people do similar work, so the benefit of thinking in roles is consistency rather than managing complexity. A new designer starts with the same access as the designer before them, without anyone reconstructing it from memory.",
            "Exceptions still arise, such as a photographer brought in for one shoot, and they are easier to spot when everyone else follows the same pattern.",
          ],
          points: ["Consistent access for similar work", "Exceptions that stand out"],
        },
        {
          label: "Large organisations",
          heading: "The same responsibilities across many departments",
          icon: "building",
          body: [
            "In a large organisation the same kind of work happens in many departments and markets. Describing access by responsibility, and then applying it area by area, keeps a marketing lead in one region comparable with a marketing lead in another.",
            [{ text: "Enterprise permissions", page: 169 }, " let teams apply structured access controls across departments, projects and folders."],
          ],
          points: ["One description of each kind of work", "Applied separately to each area"],
        },
        {
          label: "Agencies",
          heading: "Responsibilities repeated for every client",
          icon: "briefcase",
          body: [
            "Agency staff often do the same job for several clients. A responsibility describes the job; on its own it does not keep one client’s material apart from another’s.",
            ["That boundary is a matter of tenancy rather than roles: ", { text: "client tenant isolation", page: 161 }, " means each client environment can remain logically isolated from the others."],
          ],
          points: ["The job described once", "Client separation handled by tenancy"],
        },
      ],
      sources: [{ kind: "pdf", page: 169 }, { kind: "pdf", page: 161 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "designing-roles",
      eyebrow: "In general",
      heading: "Planning access around responsibilities",
      intro: "A general sequence for planning responsibility-based access in any creative library.",
      steps: [
        { heading: "Describe the work", body: "List what people actually do with the library, such as producing assets, reviewing them, coordinating projects or simply finding approved material to use.", icon: "book" },
        { heading: "Match access to each responsibility", body: "For each kind of work, note only the access it needs, rather than starting from full access and trying to remove what is risky.", icon: "shield" },
        { heading: "Keep similar work alike", body: "People with the same responsibility should end up with the same access, so any difference between them is deliberate rather than accidental.", icon: "users" },
        { heading: "Narrow with folders", body: "Where broad access is too wide for particular material, use folder-level control for that material instead of widening or multiplying roles.", icon: "folder" },
        { heading: "Revisit as people move", body: "Check access when people change jobs or projects close; changes to permissions can be recorded in the audit history, which makes that review easier.", icon: "audit", page: 170 },
      ],
      sources: [{ kind: "pdf", page: 152 }, { kind: "pdf", page: 170 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about role-based access control",
      items: [
        {
          question: "What is the difference between a role and a permission in access control?",
          answer: "A permission is a single allowance, such as reaching a folder. A role groups the permissions a responsibility needs, so it can be given to everyone with that responsibility at once.",
        },
        {
          question: "Why use role-based access control in a creative library rather than individual grants?",
          answer: "Individual grants multiply quickly and are easy to forget once a project ends. Thinking in responsibilities keeps access consistent for people doing the same work and makes a change of job easier to reflect.",
        },
        {
          question: "Where do exceptions fit in a role-based model?",
          answer: ["Alongside the roles rather than inside them. ", { text: "Individual permissions", page: 157 }, " let a user receive targeted access when organisational roles alone do not provide enough granularity, so one person’s needs do not reshape access for everyone else."],
        },
        {
          question: "How does role-based access control fit into GetSibu security?",
          answer: [{ text: "GetSibu security", page: 321 }, " is built into the architecture through encryption, authentication, access control, tenant isolation and audit logging; role-based access is one form of that access control."],
        },
      ],
      sources: [{ kind: "pdf", page: 157 }, { kind: "pdf", page: 321 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on roles and access",
      variant: "compact",
      pages: [151, 325, 178, 154],
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
