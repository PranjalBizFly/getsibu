/**
 * 177 · Client Workspace Access — /permissions/client-workspace-access
 *
 * Angle (cluster: multi-tenancy): the client workspace as the unit an agency organises around, and deciding which agency
 * people work in each workspace across an account’s life. Agency Multi-Tenancy (162) owns onboarding a client onto the
 * platform and the agency’s seats; Client Asset Isolation (167) owns mixing in workflows. Nothing is said about how client
 * users reach a workspace, how grants are made or whether people can switch between workspaces.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how agencies staff and govern access to client work; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 177,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Permissions & Multi-Tenancy",
      lede: "How client-specific workspaces give an agency one organising unit for each customer’s content, and how to decide which of the agency’s people work in each workspace, from the pitch to the end of the relationship.",
      visual: { diagram: "tenant-boundaries", focus: "tenants" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 177 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "The client workspace as the unit an agency organises around",
      body: [
        "Client-specific workspaces help agencies organise and isolate customer content. Each customer’s material has a workspace of its own, which gives the agency one clear place to organise that customer’s work and one clear boundary around it.",
        "Agencies are organised around clients far more than around departments. Account teams, budgets, timesheets and confidentiality agreements all attach to a client, so it makes sense for the creative library to follow the same line. The practical question then becomes one of access: which people in the agency should work in which client’s workspace, and how that should change as staffing on the account changes.",
        [
          "Workspaces are one part of how agencies keep clients apart. ",
          { text: "Client tenant isolation", page: 161 },
          " means each client environment can remain logically isolated, and ",
          { text: "per-client authentication", page: 165 },
          " options can support organisations that require separate access controls for different customers.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["A workspace for each customer", "Customer content organised and isolated", "Access decided account by account", "Access that follows staffing", "Folders and permissions inside"],
      },
      highlight: {
        heading: "In practice",
        body: "When a travel client asks where its campaign material is kept, the account lead can point to that client’s own workspace instead of listing folders spread across shared drives and inboxes.",
        tags: ["Account teams", "Producers", "Agency leads"],
      },
      glance: {
        heading: "Client workspaces in brief",
        facts: [
          { label: "Area", value: "Permissions & Multi-Tenancy" },
          { label: "Organising unit", value: "A workspace for each customer" },
          { label: "Separation", value: "Client Tenant Isolation", page: 161 },
          { label: "Day-to-day work", value: "Agency Asset Management", page: 168 },
        ],
        actions: [{ kind: "route", path: "/permissions", label: "More in Permissions & Multi-Tenancy" }]
      },
      sources: [{ kind: "pdf", page: 177 }, { kind: "pdf", page: 161 }, { kind: "pdf", page: 165 }, { kind: "pdf", page: 168 }, EXPLAINS],
    },
    {
      kind: "timeline",
      id: "account-life",
      eyebrow: "Over time",
      heading: "Access to a client workspace across an account’s life",
      items: [
        { label: "Pitch", body: "Before the work is won, a small pitch team needs the material the prospective client has shared, and nobody else in the agency does." },
        { label: "Account won", body: "The workspace becomes the home for the client’s brand material, and the account team who will work in it is agreed." },
        { label: "Work under way", body: "Inside the workspace, new folders can remain private until access is explicitly granted, so each new area of work opens only to the people it concerns.", page: 154 },
        { label: "Review rounds", body: "Client-specific review workflows keep feedback on this client’s work isolated from every other client.", page: 72 },
        { label: "Staff changes", body: "People join and leave the account, and their access to the workspace should follow their current assignment rather than their history at the agency." },
        { label: "Account closes", body: "Access to the workspace is wound down, and the client’s material is handled in the way agreed when the relationship began." },
      ],
      sources: [{ kind: "pdf", page: 154 }, { kind: "pdf", page: 72 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "who-works-where",
      eyebrow: "Considerations",
      heading: "Deciding who works in each client workspace",
      items: [
        {
          heading: "Staff who move between accounts",
          summary: "Designers, strategists and editors often work on several accounts over the course of a year.",
          icon: "users",
          body: [
            "What someone needs is set by the accounts they support now. Access to the workspace of a client someone last worked on long ago serves no purpose and adds risk, particularly once the agency takes on that client’s competitor.",
          ],
        },
        {
          heading: "Clients who compete",
          summary: "Some people should not work on rival accounts at the same time.",
          icon: "flag",
          body: [
            "Where two clients compete, agencies often agree to keep the teams apart. Workspace access is a natural place to reflect that agreement, so the separation between people matches the separation between the libraries.",
            [
              "The libraries have their own safeguard: ",
              { text: "client asset isolation", page: 167 },
              " prevents unrelated customer libraries from being mixed within the same workflow.",
            ],
          ],
        },
        {
          heading: "Sensitive projects within one client",
          summary: "Not everyone on an account needs every part of that client’s workspace.",
          icon: "lock",
          body: [
            [
              "A client may bring work that only part of the account team should see, such as an acquisition announcement or a product that has not been briefed widely even inside the client. Inside the workspace, ",
              { text: "folder-level permissions", page: 152 },
              " allow access to be controlled at a more detailed level than organisation-wide access.",
            ],
          ],
        },
        {
          heading: "Expectations set by the client",
          summary: "Some clients have rules about who may handle their material at the agency.",
          icon: "shield",
          body: [
            "A client’s security policy or contract may set conditions on which agency staff handle its material, such as named individuals or staff who have signed specific confidentiality terms. Confirm those expectations when the workspace is created, because they affect how the agency can staff the account.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 152 }, { kind: "pdf", page: 167 }, EXPLAINS],
    },
    {
      kind: "checklist",
      id: "settle",
      eyebrow: "What to weigh",
      heading: "What to settle for each new client workspace",
      variant: "chips",
      items: [
        "Who is on the account team",
        "Which shared staff support the client",
        "Conflicts with other clients",
        "Sensitive projects within the account",
        "The client’s own access expectations",
        "Who reviews workspace access",
        "What happens when the account ends",
      ],
      sources: [{ kind: "pdf", page: 177 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about client workspace access",
      items: [
        {
          question: "Should a pitch team keep its access if the agency wins the account?",
          answer: "Only the people who will work on the account. A pitch often involves more people than the eventual account team, so winning the work is the moment to redraw access around the team that has been agreed.",
        },
        {
          question: "Who in an agency should decide who works in a client workspace?",
          answer: "The account lead is best placed to say who is on the account and should confirm it whenever staffing changes. Putting that decision into effect is a job for whoever administers the library, which keeps the choice and its application in separate hands.",
        },
        {
          question: "Should agency leaders have access to every client workspace?",
          answer: "Only where their role on an account needs it. Seniority alone is not a reason, and a leader who rarely works on a client’s material adds risk to that workspace without adding much to the work.",
        },
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on client workspaces and separation",
      variant: "compact",
      pages: [161, 168, 167, 165, 152, 215],
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
