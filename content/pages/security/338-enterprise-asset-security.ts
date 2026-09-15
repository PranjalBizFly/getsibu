/**
 * 338 · Enterprise Asset Security — /security/enterprise-asset-security
 *
 * Angle (cluster: security-foundations): the enterprise combination of identity management, encryption, permissions,
 * auditability and data isolation, seen through ownership. In a large organisation each part sits with a different
 * team, and security holds only where those parts meet. GetSibu Security (321) owns the platform's own elements;
 * Enterprise Asset Governance (179) owns the rules they put into effect.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how enterprise security responsibilities are typically divided; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 338,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Security",
      lede: "Why security for creative assets in a large organisation is a combination rather than a single control, who tends to own each part of it, and where the parts have to meet for the whole to hold.",
      visual: { diagram: "control-map" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 338 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Five parts, usually looked after by five different teams",
      body: [
        "Enterprise security combines identity management, encryption, permissions, auditability and data isolation. Taken together, the five answer different questions: who is acting, how sensitive information is kept unreadable, what each person may reach, what can be shown afterwards and which bodies of data must stay apart.",
        "What makes this an enterprise concern is ownership. In a single creative team, one person may look after all five. In a large organisation, identity usually sits with IT, access decisions with department and brand leads, records with security or risk teams, and the arrangement of separate environments with whoever designs the wider platform. Brands, markets and connected systems add further parties. Each group can do its own part well while the gaps between them go unnoticed.",
        [
          "The same elements run through the platform itself: ",
          { text: "GetSibu security", page: 321 },
          " is built into the architecture through encryption, authentication, access control, tenant isolation and audit logging. The organisational rules those controls put into effect belong to ",
          { text: "enterprise asset governance", page: 179 },
          ".",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Identity management for people and applications", "Encryption of sensitive information", "Permissions across a large structure", "Auditability that can be demonstrated", "Data isolation between environments", "Owners who have to work together"],
      },
      glance: {
        heading: "Enterprise security in brief",
        facts: [
          { label: "Area", value: "Security" },
          { label: "Combines", value: "Identity, encryption, permissions, auditability and isolation" },
          { label: "Concern of", value: "IT, security, risk and brand leads" },
          { label: "Access at scale", value: "Enterprise Permissions", page: 169 },
        ],
        actions: [{ kind: "route", path: "/security", label: "More in Security" }]
      },
      sources: [{ kind: "pdf", page: 338 }, { kind: "pdf", page: 321 }, { kind: "pdf", page: 179 }, { kind: "pdf", page: 169 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "ownership",
      eyebrow: "Who owns what",
      heading: "Each part of enterprise security, its usual owner and its platform side",
      intro: "The owners shown are typical rather than fixed; what matters is that every part has one.",
      columns: ["Usually looked after by", "What GetSibu provides"],
      rows: [
        { label: "Identity management", page: 336, cells: ["IT or identity teams, working with administrators", "Multi-factor authentication for accounts and authenticated API requests"] },
        { label: "Encryption", page: 323, cells: ["IT security and the developers who build integrations", "Encrypted secret storage for OAuth credentials, SMTP passwords and API tokens"] },
        { label: "Permissions", page: 169, cells: ["Department, brand and project leads", "Structured access controls across departments, projects and folders"] },
        { label: "Auditability", page: 326, cells: ["Security, risk and governance leads", "Audit logs recording important actions across the platform"] },
        { label: "Data isolation", page: 324, cells: ["Architects and the owners of each separate environment", "An architecture designed around tenant-scoped data access"] },
      ],
      sources: [{ kind: "pdf", page: 336 }, { kind: "pdf", page: 256 }, { kind: "pdf", page: 323 }, { kind: "pdf", page: 169 }, { kind: "pdf", page: 326 }, { kind: "pdf", page: 324 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "seams",
      eyebrow: "Where the parts meet",
      heading: "Places where one part of enterprise security depends on another",
      tabs: [
        {
          label: "Identity and access",
          heading: "Permissions trust whoever has signed in",
          icon: "key",
          body: [
            "Every access decision assumes that the account in use belongs to the person it was granted to. A carefully designed permission structure offers little protection if a department lead’s password is reused on another service or lent to a colleague to save time.",
            [
              "Identity and permissions therefore need owners who talk to each other. IT decides how strongly people must prove who they are, and those deciding access need confidence that the expectation is met, above all for accounts with the widest reach, such as ",
              { text: "organisation administrators", page: 158 },
              ".",
            ],
          ],
          points: ["Access decisions rest on identity", "Widest-reaching accounts first"],
        },
        {
          label: "Integrations",
          heading: "Connected systems carry keys of their own",
          icon: "plug",
          body: [
            "Enterprises often connect a creative library to other internal systems. Each connection acts without a person present, using credentials that someone created and someone else may later inherit.",
            [
              "Encryption and identity meet at this point: the credentials a connection depends on need protecting wherever they are held, while ",
              { text: "API authentication", page: 256 },
              " means external applications interact with the platform within appropriate security boundaries. What remains is an organisational question: who approves a new connection, and who ends it when it is no longer needed.",
            ],
          ],
          points: ["Credentials protected where they are held", "Connections approved and ended on purpose"],
        },
        {
          label: "Isolation",
          heading: "Isolation and permissions answer different needs",
          icon: "network",
          body: [
            "Large organisations sometimes hold bodies of creative data that must never meet, such as the work of a subsidiary with clients of its own, or of agencies inside one group that serve competitors. Other divisions, such as those between departments or markets, usually sit comfortably inside one environment with permissions between them.",
            [
              "The seam is the decision itself. Choosing isolation where permissions would do adds administration; choosing permissions where isolation is needed leaves a single mistaken grant between data that must stay apart. ",
              { text: "What Is Multi-Tenant DAM?", page: 372 },
              " explains how one platform can support multiple isolated organisations.",
            ],
          ],
          points: ["Isolation for data that must never meet", "Permissions for divisions within one body"],
        },
      ],
      sources: [{ kind: "pdf", page: 158 }, { kind: "pdf", page: 256 }, { kind: "pdf", page: 372 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A group-wide rollout that starts with a security review",
      team: "A multinational’s brand operations team",
      situation: "A multinational group wants to extend a creative library, first used by one of its brands, to every brand in the group. Group IT will not approve the rollout until each part of the security picture has a named owner and an answer.",
      steps: [
        { heading: "The review is divided", body: "The brand operations lead splits the review into identity management, encryption, permissions, auditability and data isolation, and asks which team inside the group should answer for each." },
        { heading: "Brands get their own areas", body: ["Using ", { text: "department access", page: 176 }, ", each brand’s teams receive access only to the creative libraries relevant to their work, instead of the whole group’s material."] },
        { heading: "One brand gets an environment apart", body: ["A brand the group is preparing to sell is set up separately, because GetSibu is ", { text: "designed for organisations that need multiple isolated environments", page: 160 }, "."] },
        { heading: "Access changes are watched", body: ["The risk team agrees to read the permission changes that ", { text: "permission auditing", page: 170 }, " can record in the audit history for each brand’s launch folders, rather than waiting for a problem."] },
        { heading: "The owners meet on a schedule", body: "IT, the brand leads and the risk team agree to review the five parts together at regular intervals, so a change in one area is discussed with the owners of the others." },
      ],
      outcome: "The rollout is approved with a named owner for every part, and later security questions from any brand go straight to the team able to answer them.",
      link: { page: 224, label: "GetSibu for Global Brands" },
      sources: [{ kind: "pdf", page: 338 }, { kind: "pdf", page: 176 }, { kind: "pdf", page: 160 }, { kind: "pdf", page: 170 }, { kind: "pdf", page: 224 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about enterprise asset security",
      items: [
        {
          question: "What should an enterprise ask about encryption when assessing a creative asset platform?",
          answer: "Ask which kinds of information are encrypted, who is able to use the keys and how credentials for connected systems are held. Encryption bears on whether stored information can be read without authorisation, so pair those questions with ones about identity and access.",
        },
        {
          question: "How is securing a creative library different from securing other enterprise systems?",
          answer: "The parts are the same, but the material behaves differently. Creative files pass through many hands, are reused long after they were made and are often more sensitive before release than after, so questions about access and records arise with every campaign rather than once a year.",
        },
        {
          question: "Who should sign off enterprise asset security for a creative library?",
          answer: "The person accountable for security risk across the organisation, usually in IT or a security function, once each part has an owner who has answered for it. Sign-off by a single brand or marketing lead tends to miss the parts that sit outside that person’s remit.",
        },
      ],
      sources: [{ kind: "pdf", page: 338 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on securing a large creative library",
      variant: "compact",
      pages: [321, 179, 169, 324, 326, 336],
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
