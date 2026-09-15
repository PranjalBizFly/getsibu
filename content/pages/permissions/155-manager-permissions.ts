/**
 * 155 · Manager Permissions — /permissions/manager-permissions
 *
 * Angle (cluster: access-control): a manager's access drawn around their remit — specific folders or teams,
 * restricted elsewhere — and what happens when remits differ, overlap or change. Editor Permissions (156) owns
 * working access without administration, Individual Permissions (157) targeted exceptions, Organisation Admin
 * Controls (158) organisation-wide administration, Team Access Management (175) group consistency. Never says who
 * grants a manager's access or how.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of scoping managers' access to their responsibilities; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 155,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Permissions & Multi-Tenancy",
      lede: "How manager permissions let a manager reach the specific folders or teams they are responsible for, while the parts of the library outside that remit stay out of reach.",
      visual: { diagram: "folder-access", focus: "team" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 155 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A manager’s access drawn around their remit",
      body: [
        "Managers in GetSibu can receive access to specific folders or teams while remaining restricted from areas outside their responsibilities. What a manager can reach matches what they look after, not the organisation as a whole.",
        "In many libraries, “manager” quietly turns into shorthand for “sees everything”, because that is simpler than working out where someone’s responsibility ends. The shortcut spreads. A regional lead can browse other regions’ launch plans, a team lead gains a department they only sit next to, and the circle of people who can see sensitive work widens with every promotion.",
        [
          "Tying access to a responsibility is the idea behind ",
          { text: "role-based access control", page: 153 },
"; manager permissions apply that idea to the people who look after one part of the library on everyone else’s behalf.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Access to specific folders or teams", "Restricted outside the remit", "Responsibility sets the boundary", "Managing an area is not administration", "Scope revisited when remits change"],
      },
      highlight: {
        heading: "In practice",
        body: "A regional marketing manager looks after the folders for their own market and the team that works there, without reaching the campaign plans of neighbouring regions.",
        tags: ["Managers", "Teams", "Folders"],
      },
      glance: {
        heading: "Manager permissions in brief",
        facts: [
          { label: "Area", value: "Permissions & Multi-Tenancy" },
          { label: "Scope", value: "Specific folders or teams" },
          { label: "Idea behind it", value: "Role-Based Access Control" },
          { label: "Distinct from", value: "Organisation Admin Controls" },
        ],
        actions: [{ kind: "route", path: "/permissions", label: "More in Permissions & Multi-Tenancy" }]
      },
      sources: [{ kind: "pdf", page: 155 }, { kind: "pdf", page: 325 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "remits",
      eyebrow: "By remit",
      heading: "Different remits a manager can hold",
      tabs: [
        {
          label: "Team lead",
          heading: "Responsible for a team",
          icon: "users",
          body: [
            "Some managers are defined by the people they lead. Their access naturally centres on the areas that team works in and the material the team shares.",
            ["The team’s own access is usually decided at the same time, and ", { text: "team access management", page: 175 }, " establishes consistent permissions across the group itself."],
          ],
          points: ["Access centred on the team’s areas", "Decided alongside the team’s access"],
        },
        {
          label: "Market lead",
          heading: "Responsible for a market or region",
          icon: "globe",
          body: [
            "In organisations that work across countries, a manager’s remit is often geographical. They need everything for their market and very little from anyone else’s.",
            ["That fits how ", { text: "multi-market teams", page: 225 }, " can separate content by region while keeping governance centralised."],
          ],
          points: ["One market’s folders", "Neighbouring markets out of reach"],
        },
        {
          label: "Project lead",
          heading: "Responsible for a project or campaign",
          icon: "calendar",
          body: [
            "A project manager’s responsibility has a start and an end. Their access matters most while the work is live, and it is the kind most often left in place long after the project closes.",
            ["Structured access across projects is part of ", { text: "enterprise permissions", page: 169 }, ", which apply controls across departments, projects and folders."],
          ],
          points: ["Access tied to live work", "Worth revisiting at project close"],
        },
      ],
      sources: [{ kind: "pdf", page: 175 }, { kind: "pdf", page: 225 }, { kind: "pdf", page: 169 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "scoped-versus-broad",
      eyebrow: "Side by side",
      heading: "A manager with broad access compared with a scoped one",
      columns: ["Manager with broad access", "Manager permissions in GetSibu"],
      emphasis: 1,
      rows: [
        ["What they can reach", "Much of the library", "Specific folders or teams"],
        ["Other teams’ material", "Open to browse", "Restricted outside their responsibilities"],
        ["An unannounced launch", "Visible to every manager", "Visible to the managers responsible for it"],
        ["Who can see sensitive work", "Grows with every promotion", "Limited to the areas a manager looks after"],
      ],
      sources: [{ kind: "pdf", page: 155 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A manager’s remit changes during a reorganisation",
      team: "A marketing department",
      situation: "A consumer brand’s marketing department reorganises. One manager hands over the European markets to a new colleague and takes on a newly launched product line.",
      steps: [
        {
          heading: "The new remits are agreed",
          body: "The head of marketing confirms which folders and teams belong to the product line, and which remain with the European markets.",
        },
        {
          heading: "Access follows the product line",
          body: "The manager receives access to the product line’s folders and its team, scoped to the remit they now hold rather than the one they are handing over.",
        },
        {
          heading: "The incoming lead is scoped to Europe",
          body: "The colleague taking over Europe receives access to those markets’ folders and teams, and nothing beyond them.",
        },
        {
          heading: "The changes leave a record",
          body: ["The permission changes made during the reorganisation can be ", { text: "recorded in the audit history", page: 170 }, ", so the department can see how access was reshaped."],
        },
      ],
      outcome: "Each manager’s access reflects the remit they hold after the reorganisation, and the department has a record of how it changed.",
      link: { page: 224, label: "GetSibu for Global Brands" },
      sources: [{ kind: "pdf", page: 155 }, { kind: "pdf", page: 170 }, { kind: "pdf", page: 224 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "accordion",
      id: "considerations",
      eyebrow: "Considerations",
      heading: "Getting manager access right",
      items: [
        {
          heading: "Define the remit before the access",
          summary: "If nobody can say what a manager is responsible for, nobody can say what they should reach.",
          icon: "compass",
          body: [
            "Write the remit in plain terms first: which teams, which markets, which clients, which projects. The folders and teams a manager needs usually follow directly from that description, and disagreements surface before any access is set.",
          ],
        },
        {
          heading: "Plan for remits that overlap",
          summary: "Two managers may share responsibility for some material.",
          icon: "layers",
          body: [
            "Brand guidelines used by every market, or footage shared by two campaigns, belong to more than one remit. Giving shared material its own folder is usually clearer than widening either manager’s access to the other’s area.",
            [{ text: "Permission hierarchies", page: 178 }, " help here by combining broad organisational roles with more detailed folder-level controls."],
          ],
        },
        {
          heading: "Keep discussion working across boundaries",
          summary: "Scoped access should not stop managers talking to the people they depend on.",
          icon: "mention",
          body: [
            ["Managers still need colleagues from other areas in their discussions. ", { text: "Team mentions", page: 66 }, " use folder-aware autocomplete, which helps ensure the people mentioned have appropriate visibility of the asset being discussed."],
          ],
        },
        {
          heading: "Look at which areas actually get attention",
          summary: "A remit on paper and a remit in practice can drift apart.",
          icon: "chart",
          body: [
            [{ text: "Folder access analytics", page: 198 }, " help organisations understand which areas of the library receive attention, which is a useful check when deciding whether a manager’s scope still reflects their work."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 178 }, { kind: "pdf", page: 66 }, { kind: "pdf", page: 198 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about manager permissions",
      items: [
        {
          question: "Can manager permissions cover a whole team rather than individual folders?",
          answer: "Yes. Managers can receive access to specific folders or to teams, so a remit defined by the people someone leads can be expressed as directly as one defined by material.",
        },
        {
          question: "How do manager permissions differ from organisation admin controls?",
          answer: ["Manager permissions cover the folders or teams a manager is responsible for. ", { text: "Organisation administrators", page: 158 }, " manage access policies, users, folders and organisational settings for the organisation as a whole. Keeping the two apart keeps the group who can reshape the library small."],
        },
        {
          question: "When should a manager’s access be reviewed?",
          answer: "Whenever the remit changes: a reorganisation, a new market, a project that closes. Those are the moments when access matched to yesterday’s responsibilities is most likely to linger.",
        },
      ],
      sources: [{ kind: "pdf", page: 155 }, { kind: "pdf", page: 158 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on scoping access to responsibilities",
      variant: "compact",
      pages: [153, 158, 175, 178, 170],
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
