/**
 * 162 · Agency Multi-Tenancy — /permissions/agency-multi-tenancy
 *
 * Angle (cluster: multi-tenancy): the agency's operating model — running many client libraries from one platform
 * with separation between tenants, from bringing a client on board to overseeing the portfolio. Multi-Tenant DAM
 * (160) owns the overview, Client Tenant Isolation (161) the isolation itself, Agency Asset Management (168)
 * everyday asset work across customers, GetSibu for Creative Agencies (215) the use case. Never says how a tenant is
 * created, and names no identity or AI provider.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how agencies run client libraries; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 162,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Permissions & Multi-Tenancy",
      lede: "Why agencies drift into a patchwork of client arrangements, how running client libraries as separate tenants on one platform changes that, and what to settle each time a new client joins.",
      visual: { diagram: "tenant-boundaries", focus: "tenants" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 162 }, { kind: "pdf", page: 202 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Many client libraries run as one agency operation",
      body: [
        "Agencies can manage multiple client libraries from one GetSibu platform while separation between tenants is maintained. The agency works in a single place, and each client’s library remains its own.",
        "Agencies tend to collect systems one client at a time. One client insists on its own storage, another shares a folder from its drive, a third sends everything by email. Each arrangement makes sense on its own; together they leave the agency maintaining a patchwork, with a different place to look for every client and no consistent answer to how any client’s work is protected.",
        [
          { text: "Agency efficiency", page: 354 },
          " is the business side of the same idea: managing client libraries from a structured platform rather than separate, disconnected systems.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Multiple client libraries, one platform", "Separation between tenants", "The same approach for every client", "Configuration where a client needs it", "A view across the client portfolio"],
      },
      highlight: {
        heading: "In practice",
        body: "When an agency wins a new client, that client’s library joins the platform the agency already runs, separate from the others, instead of arriving as one more system to maintain.",
        tags: ["Agencies", "Account teams", "Studios"],
      },
      glance: {
        heading: "Agency multi-tenancy in brief",
        facts: [
          { label: "Area", value: "Permissions & Multi-Tenancy" },
          { label: "Runs", value: "Multiple client libraries from one platform" },
          { label: "Separation", value: "Client Tenant Isolation" },
          { label: "Use case", value: "GetSibu for Creative Agencies" },
        ],
        actions: [{ kind: "route", path: "/permissions", label: "More in Permissions & Multi-Tenancy" }]
      },
      sources: [{ kind: "pdf", page: 162 }, { kind: "pdf", page: 354 }, { kind: "pdf", page: 161 }, { kind: "pdf", page: 215 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "new-client",
      eyebrow: "Step by step",
      heading: "Bringing a new client into a multi-tenant setup",
      intro: "Questions worth settling with every new client, whatever the size of the agency.",
      steps: [
        { heading: "Agree what the library holds", body: "Decide which of the client’s assets, and which of the agency’s working files, belong in the client’s environment before anything is added.", icon: "folder" },
        { heading: "Note the client’s own expectations", body: "Find out early whether the client has requirements about storage, AI processing or how its people are verified, so client-specific arrangements can be considered before work starts.", icon: "flag" },
        { heading: "Shape access inside", body: "Within the client’s library, the folder structure and permissions decide which people reach each area of the client’s work.", icon: "users" },
        { heading: "Plan how review will work", body: "Agencies can maintain client-specific libraries and review workflows while keeping different clients isolated, so agree early who reviews what.", icon: "approval", page: 72 },
      ],
      sources: [{ kind: "pdf", page: 163 }, { kind: "pdf", page: 164 }, { kind: "pdf", page: 165 }, { kind: "pdf", page: 151 }, { kind: "pdf", page: 72 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "seats",
      eyebrow: "By role",
      heading: "Agency multi-tenancy from each seat in the agency",
      tabs: [
        {
          label: "Account leads",
          heading: "A dependable home for each client relationship",
          icon: "briefcase",
          body: [
            "An account lead’s credibility depends on handling a client’s material carefully. Being able to say where that material lives, and that it is kept apart from other clients, is part of the relationship.",
            "The same answer serves every account, which is easier to give with confidence than a different explanation for each client’s improvised arrangement.",
          ],
          points: ["A clear answer to where work is kept", "Separation a client can understand"],
        },
        {
          label: "Producers",
          heading: "Several clients in a day, without mixing them",
          icon: "calendar",
          body: [
            "Producers juggle deadlines for several clients at once, which is exactly when files end up in the wrong place.",
            [{ text: "Agency collaboration", page: 84 }, " describes agencies operating multiple client libraries through a multi-tenant environment, which gives each client’s files a home of their own rather than a corner of a shared folder tree."],
          ],
          points: ["Each client in its own environment", "Less risk from busy days"],
        },
        {
          label: "Studio teams",
          heading: "One platform to learn, many clients to serve",
          icon: "palette",
          body: [
            "Designers and editors who move between clients no longer have to learn a different system for each one. The platform stays the same while the client library changes.",
            "That matters most for freelancers and new starters, who would otherwise spend their first days learning where each client keeps its files.",
          ],
          points: ["The same platform for every client", "Less to learn for new team members"],
        },
        {
          label: "Leadership",
          heading: "An overview of the whole client portfolio",
          icon: "chart",
          body: [
            "Agency leaders need to see the operation as a whole, even though each client’s library is kept apart.",
            [{ text: "Agency analytics", page: 202 }, " let agencies understand asset activity across their client environments."],
          ],
          points: ["Activity across client environments", "Separation kept for the clients"],
        },
      ],
      sources: [{ kind: "pdf", page: 84 }, { kind: "pdf", page: 162 }, { kind: "pdf", page: 202 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "An agency brings three improvised client setups onto one platform",
      team: "A creative agency",
      situation: "A creative agency works for a food brand, a bank and a fashion label. One client’s material sits on a shared drive, another’s arrives as emailed links, and the third lives in a folder the studio maintains by hand.",
      steps: [
        {
          heading: "Each client gets its own environment",
          body: "The food brand, the bank and the fashion label each have a library on the platform, logically isolated from the other two.",
        },
        {
          heading: "Existing work is brought across",
          body: [{ text: "Bulk import", page: 130 }, " moves each client’s existing library into its environment without anyone uploading files one at a time."],
        },
        {
          heading: "Review moves onto the assets",
          body: "Review of each client’s campaign material takes place inside that client’s library, rather than over emailed attachments.",
        },
      ],
      outcome: "The agency runs one platform instead of three improvised arrangements, and every client’s work sits in an environment of its own.",
      link: { page: 215, label: "GetSibu for Creative Agencies" },
      sources: [{ kind: "pdf", page: 161 }, { kind: "pdf", page: 130 }, { kind: "pdf", page: 72 }, { kind: "pdf", page: 215 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about agency multi-tenancy",
      items: [
        {
          question: "How is agency multi-tenancy different from client tenant isolation?",
          answer: ["Isolation is the boundary around each client environment; ", { text: "client tenant isolation", page: 161 }, " explains what that boundary means. Agency multi-tenancy is the way an agency runs many of those environments as a single operation."],
        },
        {
          question: "How should an agency weigh the cost of multi-tenant asset management?",
          answer: [{ text: "DAM pricing for agencies", page: 346 }, " suggests evaluating GetSibu against the number of clients, users, storage requirements and multi-tenant needs rather than a single headline figure."],
        },
        {
          question: "What happens to a client’s library when the agency relationship ends?",
          answer: "That is best agreed at the start of the relationship: which assets belong to the client, which belong to the agency, and how the client’s material will be handed over. Deciding it early stops the end of a contract from becoming a scramble.",
        },
      ],
      sources: [{ kind: "pdf", page: 161 }, { kind: "pdf", page: 162 }, { kind: "pdf", page: 346 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More for agencies running client libraries",
      variant: "compact",
      pages: [161, 160, 163, 215, 202, 354],
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
