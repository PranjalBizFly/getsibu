/**
 * 157 · Individual Permissions — /permissions/individual-permissions
 *
 * Angle (cluster: access-control): the exception layer — targeted access for one user when organisational roles
 * are not granular enough — and how to keep such exceptions few, bounded and visible. Role-Based Access Control
 * (153) owns the role concept, Manager (155) and Editor (156) Permissions their responsibilities, Team Access
 * Management (175) group consistency. Never describes how a grant is made or removed.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of individual access exceptions; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 157,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Permissions & Multi-Tenancy",
      lede: "When a role is too broad for one person’s needs, individual permissions give that user targeted access. Here is when that fits, and how to keep such exceptions from quietly taking over.",
      visual: { diagram: "folder-access", focus: "individual" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 157 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Precise access for the person a role does not fit",
      body: [
        "Individual users in GetSibu can receive targeted access when organisational roles alone do not provide enough granularity. Rather than stretching a role around one person’s needs, access can be aimed at that person.",
        "Roles describe typical responsibilities, and creative work is full of untypical ones. A freelance photographer needs the folder for one shoot. A lawyer checks one campaign before launch. A colleague from finance helps on one investor presentation. Putting any of them into a full role opens far more than they need, while inventing a new role for each buries the role model under one-offs.",
        [
          "Individual access works best as the detailed layer on top of broader structures. ",
          { text: "Permission hierarchies", page: 178 },
          " describe how broad organisational roles combine with more detailed folder-level controls; targeted individual access covers the cases those layers still leave out, and ideally only those.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Targeted access for one user", "For needs roles cannot express", "No new role for every exception", "Exceptions kept few and bounded", "Access changes on record"],
      },
      highlight: {
        heading: "In practice",
        body: "An outside retoucher needs one folder of selects for a single campaign. Targeted access covers that need without placing them in a role that reaches the rest of the brand’s work.",
        tags: ["Freelancers", "Reviewers", "Specialists"],
      },
      glance: {
        heading: "Individual permissions in brief",
        facts: [
          { label: "Area", value: "Permissions & Multi-Tenancy" },
          { label: "Used for", value: "Needs that roles alone cannot express" },
          { label: "Broader layer", value: "Permission Hierarchies" },
          { label: "Group alternative", value: "Team Access Management" },
        ],
        actions: [{ kind: "route", path: "/permissions", label: "More in Permissions & Multi-Tenancy" }]
      },
      sources: [{ kind: "pdf", page: 157 }, { kind: "pdf", page: 178 }, EXPLAINS],
    },
    {
      kind: "checklist",
      id: "when-it-fits",
      eyebrow: "When it fits",
      heading: "Situations where targeted individual access tends to fit",
      variant: "chips",
      items: ["A freelancer on a single project", "An outside reviewer for one campaign", "A specialist brought in for one shoot", "A colleague seconded from another department", "A legal check before launch", "Cover for someone on leave"],
      sources: [EXPLAINS],
    },
    {
      kind: "comparison",
      id: "comparison",
      eyebrow: "Side by side",
      heading: "Stretching a role compared with a targeted grant",
      columns: ["Stretching a role to fit", "Targeted individual access"],
      emphasis: 1,
      rows: [
        ["What the person receives", "Everything the role reaches", "Access aimed at their actual need"],
        ["Everyone else in the role", "May gain access they did not need", "Unaffected by one person’s exception"],
        ["Number of roles over time", "Grows with every exception", "Stays short and understandable"],
        ["When the need ends", "A role to unpick or leave in place", "One exception to review"],
      ],
      sources: [{ kind: "pdf", page: 157 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A freelance photographer joins one product shoot",
      team: "A retail studio team",
      situation: "A retail brand’s in-house studio books a freelance photographer for a seasonal product shoot. The photographer needs to work in the shoot’s folder, while the brand’s other campaigns remain confidential.",
      steps: [
        {
          heading: "The shoot gets its own folder",
          body: ["The studio creates a folder for the shoot, and it ", { text: "remains private", page: 154 }, " until access is explicitly granted."],
        },
        {
          heading: "The photographer gets that folder only",
          body: "Instead of joining a studio role, the photographer receives targeted access to the shoot folder and nothing else in the library.",
        },
        {
          heading: "Feedback reaches the photographer",
          body: ["The art director comments on the selects and mentions the photographer; ", { text: "folder-aware autocomplete", page: 66 }, " helps ensure the people mentioned can see the material."],
        },
        {
          heading: "The exception is closed out",
          body: ["Once the shoot is delivered, the studio reviews the photographer’s access, and the resulting ", { text: "permission change can be recorded", page: 170 }, " in the audit history."],
        },
      ],
      outcome: "The photographer had exactly what the shoot needed, the brand’s other campaigns stayed out of reach, and the exception ended as cleanly as it began.",
      link: { page: 231, label: "GetSibu for Retail Brands" },
      sources: [{ kind: "pdf", page: 154 }, { kind: "pdf", page: 157 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 66 }, { kind: "pdf", page: 170 }, { kind: "pdf", page: 231 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "accordion",
      id: "keeping-control",
      eyebrow: "Considerations",
      heading: "Keeping individual exceptions under control",
      items: [
        {
          heading: "Ask whether a group would do",
          summary: "If several people need the same exception, it is probably not an exception.",
          icon: "users",
          body: [
            "Three freelancers on the same campaign with identical individual access are really a temporary team. Treating them as one group makes their access easier to understand and easier to review together.",
            [{ text: "Team access management", page: 175 }, " exists for that situation, establishing consistent permissions across a group of users."],
          ],
        },
        {
          heading: "Give every exception an end point",
          summary: "Individual access granted for a project should not outlive the project.",
          icon: "calendar",
          body: [
            "Link each exception to something that finishes: a contract, a campaign launch, a period of cover. Reviewing individual access at those moments stops yesterday’s contributors from keeping access to today’s work.",
          ],
        },
        {
          heading: "Keep a view of who holds exceptions",
          summary: "An exception nobody remembers is the one that causes trouble.",
          icon: "audit",
          body: [
            [{ text: "Access history", page: 171 }, " provides information about important user interactions with the library, a helpful reference when deciding whether a person’s targeted access is still needed."],
          ],
        },
        {
          heading: "Share through permissions, not open links",
          summary: "Outside contributors are exactly the people most likely to receive a forwarded link.",
          icon: "lock",
          body: [
            "Sending a freelancer a link can feel quicker than setting up access, but a link travels wherever it is forwarded.",
            ["Controlling sharing through permissions, instead of relying only on unrestricted links, is the idea behind ", { text: "secure asset sharing", page: 172 }, "."],
          ],
        },
        {
          heading: "Take extra care with sensitive material",
          summary: "People outside the organisation deserve the narrowest access that still lets them work.",
          icon: "shield",
          body: [
            ["Unreleased products, embargoed announcements and licensed material call for the tightest exceptions. ", { text: "Creative access governance", page: 159 }, " helps organisations maintain control over sensitive creative content of this kind."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 175 }, { kind: "pdf", page: 171 }, { kind: "pdf", page: 172 }, { kind: "pdf", page: 159 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about individual permissions",
      items: [
        {
          question: "How can you tell that a role is too broad for someone?",
          answer: "When giving them the role would open areas they have no reason to reach. If the role fits apart from that, targeted access to the one area they need is usually the cleaner answer.",
        },
        {
          question: "Are individual permissions a good fit for freelancers and outside contributors?",
          answer: "They suit that case well. A contributor can receive access aimed at the material they are working on, without being given a role that reaches the rest of the library.",
        },
        {
          question: "Are individual permissions a security risk?",
          answer: "Not in themselves. The risk lies in exceptions nobody remembers; kept few, tied to a purpose and reviewed, targeted access is often narrower than the alternative of a broader role.",
        },
      ],
      sources: [{ kind: "pdf", page: 157 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on access exceptions",
      variant: "compact",
      pages: [178, 175, 172, 153],
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
