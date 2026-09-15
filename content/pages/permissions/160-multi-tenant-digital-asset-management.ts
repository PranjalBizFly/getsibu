/**
 * 160 · Multi-Tenant Digital Asset Management — /permissions/multi-tenant-digital-asset-management
 *
 * Angle (cluster: multi-tenancy, overview): what multi-tenancy means in GetSibu — one platform holding multiple
 * isolated environments — who needs it, how it differs from folder boundaries, and what to weigh. Client Tenant
 * Isolation (161) owns logical isolation, Agency Multi-Tenancy (162) the agency's operation, Per-Client Storage /
 * AI Keys / Authentication (163–165) per-client configuration, White-Label (166) client-facing experiences,
 * Client Asset Isolation (167) the workflow outcome, Agency Asset Management (168) separation in asset work.
 * PDF wording only for per-client configuration; no identity or AI providers named.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of multi-tenant asset management; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 160,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Permissions & Multi-Tenancy",
      lede: "How multiple isolated environments on one platform differ from separating teams inside a single library, which organisations need them, such as agencies managing multiple clients, and the parts a multi-tenant setup involves.",
      visual: { diagram: "tenant-boundaries", focus: "tenants" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 160 }, { kind: "pdf", page: 372 }, { kind: "pdf", page: 161 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "One platform, several isolated environments",
      body: [
        "GetSibu is designed for organisations that need multiple isolated environments, and agencies managing multiple clients are the clearest example. Rather than one library shared by everyone, the idea is a set of separate environments whose contents are kept apart.",
        "A typical asset library assumes a single organisation: one set of users, one folder tree, one set of policies. That assumption breaks for an agency producing work for competing brands, or for any business that manages creative material on behalf of different customers. Folders and permissions are the right tool for separating teams inside one organisation; separating whole customers is a different kind of boundary.",
        [
          "The ",
          { text: "multi-tenant DAM explainer", page: 372 },
          " describes the idea in general terms: one platform supporting multiple isolated organisations or clients. From a security perspective, ",
          { text: "tenant isolation", page: 324 },
          " covers GetSibu’s architecture, which is designed around tenant-scoped data access.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Multiple isolated environments", "Designed with agencies in mind", "A different boundary from folders", "Configuration per client environment", "Tenant context in API access"],
      },
      highlight: {
        heading: "In practice",
        body: "An agency runs the libraries of two competing drinks brands on the same platform, and neither client’s material is mixed into the other’s environment.",
        tags: ["Agencies", "Clients", "Environments"],
      },
      glance: {
        heading: "Multi-tenancy in brief",
        facts: [
          { label: "Area", value: "Permissions & Multi-Tenancy" },
          { label: "Designed for", value: "Organisations needing multiple isolated environments" },
          { label: "Isolation", value: "Client Tenant Isolation" },
          { label: "Security angle", value: "Tenant Isolation" },
        ],
        actions: [{ kind: "route", path: "/permissions", label: "More in Permissions & Multi-Tenancy" }]
      },
      sources: [{ kind: "pdf", page: 160 }, { kind: "pdf", page: 372 }, { kind: "pdf", page: 324 }, { kind: "pdf", page: 161 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "includes",
      eyebrow: "What it covers",
      heading: "The parts of a multi-tenant setup in GetSibu",
      intro: "Isolation is the core; the other parts concern how an agency runs, configures and presents the environments it looks after.",
      items: [
        {
          heading: "Isolation between clients",
          body: "Each client environment can remain logically isolated, so assets from one client are not mixed with another client’s library.",
          icon: "shield",
          points: ["Logical separation of environments", "No shared pool of client assets"],
          page: 161,
        },
        {
          heading: "Many clients, one platform",
          body: "Agencies can manage multiple client libraries from a single platform while separation between tenants is maintained.",
          icon: "briefcase",
          points: ["One operation for the agency", "Separate libraries for its clients"],
          page: 162,
        },
        {
          heading: "Storage for each client",
          body: "Client environments can have their own storage allocation and their own asset boundaries.",
          icon: "database",
          points: ["Storage considered client by client", "Clear edges around each library"],
          page: 163,
        },
        {
          heading: "Client-specific AI keys",
          body: "Multi-tenant configurations can support client-specific AI key management where required.",
          icon: "key",
          points: ["Only where required"],
          page: 164,
        },
        {
          heading: "Client-specific authentication",
          body: "Client-specific authentication options can support organisations that need separate access controls for different customers.",
          icon: "lock",
          points: ["Different customers, different needs", "Separate access controls"],
          page: 165,
        },
        {
          heading: "White-label experiences",
          body: "Agencies can take a white-label approach to the asset management experiences their clients see.",
          icon: "palette",
          points: ["Experiences aimed at clients"],
          page: 166,
        },
        {
          heading: "Tenant context in the API",
          body: "API access can include tenant context, so multi-tenant environments remain properly separated when applications connect.",
          icon: "api",
          points: ["Separation extends to integrations", "Requests tied to a tenant"],
          page: 276,
        },
      ],
      sources: [{ kind: "pdf", page: 161 }, { kind: "pdf", page: 162 }, { kind: "pdf", page: 163 }, { kind: "pdf", page: 164 }, { kind: "pdf", page: 165 }, { kind: "pdf", page: 166 }, { kind: "pdf", page: 276 }],
    },
    {
      kind: "accordion",
      id: "boundary",
      eyebrow: "Considerations",
      heading: "Choosing between a tenant boundary and a folder boundary",
      items: [
        {
          heading: "Different customers call for different environments",
          summary: "When material belongs to separate customers, the boundary belongs around the whole library.",
          icon: "building",
          body: [
            "A client’s assets, users and expectations are that client’s own. Keeping them in an environment of their own means the separation does not depend on every folder in a shared library being set up correctly.",
          ],
        },
        {
          heading: "Teams inside one organisation usually need folders",
          summary: "Departments and markets that share an employer rarely need fully separate environments.",
          icon: "folder",
          body: [
            ["Inside a single organisation, ", { text: "folder-level permissions", page: 152 }, " control access at a more detailed level than organisation-wide access, which is usually the right tool for keeping one department’s work away from another’s."],
          ],
        },
        {
          heading: "Clients may bring requirements of their own",
          summary: "Storage, AI processing and authentication are common areas where clients differ.",
          icon: "flag",
          body: [
            "One client may have strict expectations about how its content is processed; another may insist that its people reach the library in a particular way. When those expectations vary between clients, configuration at the level of each client environment matters more than any single platform-wide choice.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 152 }, EXPLAINS],
    },
    {
      kind: "checklist",
      id: "weigh",
      eyebrow: "What to weigh",
      heading: "What to weigh when evaluating multi-tenant asset management",
      variant: "chips",
      items: ["How many clients you manage", "Users in each client environment", "Storage each client needs", "Your overall multi-tenant needs", "Client rules on AI processing", "Client authentication requirements", "Whose brand clients should see", "Integrations for each client"],
      sources: [{ kind: "pdf", page: 346 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about multi-tenant digital asset management",
      items: [
        {
          question: "Can an agency still see across its client environments?",
          answer: ["Yes. ", { text: "Agency analytics", page: 202 }, " let agencies understand asset activity across their client environments, so separation between clients and an overview of the agency’s own operation can coexist."],
        },
        {
          question: "Does multi-tenancy replace permissions?",
          answer: ["No. They solve different problems: tenancy separates whole client environments, while ", { text: "creative asset permissions", page: 151 }, " control who can access the different areas of a library."],
        },
        {
          question: "Is multi-tenancy the same as white-label asset management?",
          answer: "No. Multi-tenancy is about keeping client environments separate; a white-label approach concerns how the asset management experience is presented to those clients. An agency may need the first without the second.",
        },
      ],
      sources: [{ kind: "pdf", page: 202 }, { kind: "pdf", page: 151 }, { kind: "pdf", page: 166 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on running multiple client environments",
      variant: "compact",
      pages: [372, 387, 215],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page, the explainer, the FAQ answer and the agency use case." }],
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
