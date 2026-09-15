/**
 * 161 · Client Tenant Isolation — /permissions/client-tenant-isolation
 *
 * Angle (cluster: multi-tenancy): logical isolation between client environments — what “logically isolated”
 * means, where the separation is described across GetSibu, and what it does not replace. Multi-Tenant DAM (160)
 * owns the overview, Agency Multi-Tenancy (162) the agency's operation, Client Asset Isolation (167) the outcome
 * inside workflows, Tenant Isolation (324) the security architecture. PDF wording only for per-client items.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of logical isolation between client environments; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 161,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Permissions & Multi-Tenancy",
      lede: "What it means for client environments in GetSibu to be logically isolated, where that separation appears across the platform, and what it does not replace when keeping one client’s assets out of another’s library.",
      visual: { diagram: "tenant-boundaries", focus: "tenants" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 161 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A boundary drawn around each client’s environment",
      body: [
        "Each client environment in GetSibu can remain logically isolated, so assets that belong to one client are not mixed with another client’s library. The boundary sits around the environment as a whole, not around individual folders in a library that every client shares.",
        "“Logical” isolation is a precise term. In general it describes separation achieved by how software scopes data and access, as opposed to physically separate systems. What matters to the client is the effect: their assets belong to their own environment instead of a pool shared with other clients.",
        [
          "For an agency, this is what makes ",
          { text: "agency multi-tenancy", page: 162 },
          " workable, with many client libraries running from one platform and none of them spilling into another.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Each client environment logically isolated", "No shared pool of client assets", "Separation by software, not hardware", "The boundary around the whole environment", "Permissions still matter within it"],
      },
      highlight: {
        heading: "In practice",
        body: "Two competing sportswear brands can both be clients of the same agency, each with its own environment and neither brand’s assets mixed into the other’s library.",
        tags: ["Agencies", "Competing clients"],
      },
      glance: {
        heading: "Client isolation in brief",
        facts: [
          { label: "Area", value: "Permissions & Multi-Tenancy" },
          { label: "Isolation", value: "Logical, per client environment" },
          { label: "Architecture", value: "Tenant Isolation" },
          { label: "Overview", value: "Multi-Tenant Digital Asset Management" },
        ],
        actions: [{ kind: "route", path: "/permissions", label: "More in Permissions & Multi-Tenancy" }]
      },
      sources: [{ kind: "pdf", page: 161 }, { kind: "pdf", page: 162 }, { kind: "pdf", page: 324 }, { kind: "pdf", page: 160 }, EXPLAINS],
    },
    {
      kind: "layers",
      id: "where",
      eyebrow: "Layer by layer",
      heading: "Where the separation between clients applies",
      intro: "Separation between tenants appears at more than one layer of the platform.",
      layers: [
        { label: "Data access", body: "Multi-tenant organisations need strict separation between customer environments, and GetSibu’s architecture is designed around data access scoped to the tenant.", page: 324 },
        { label: "Storage architecture", body: "Creative content can be stored on object-storage infrastructure with organisational partitioning.", page: 318 },
        { label: "Asset boundaries", body: "Each client environment can have asset boundaries of its own, marking where its library ends.", page: 163 },
        { label: "API requests", body: "API access can include tenant context, so separation between environments holds when applications connect as well.", page: 276 },
      ],
      sources: [{ kind: "pdf", page: 324 }, { kind: "pdf", page: 318 }, { kind: "pdf", page: 163 }, { kind: "pdf", page: 276 }],
    },
    {
      kind: "before-after",
      id: "shared-versus-isolated",
      eyebrow: "The difference",
      heading: "Clients in one shared library, and clients in isolated environments",
      beforeLabel: "Clients sharing one library",
      afterLabel: "Isolated client environments",
      before: ["Every client’s assets in a single pool", "Separation that depends on every folder being right", "A misfiled asset landing in another client’s area", "Confidentiality resting on habit"],
      after: ["Each client’s assets kept to its own environment", "A boundary around the whole environment", "Less riding on perfect filing", "A clearer answer when a client asks about separation"],
      sources: [{ kind: "pdf", page: 161 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "not-replaced",
      eyebrow: "Considerations",
      heading: "What isolation between clients does not replace",
      items: [
        {
          heading: "Permissions inside each environment",
          summary: "Isolation keeps clients apart; it does not decide who sees what within one client’s material.",
          icon: "folder",
          body: [
            "A single client can still have confidential projects, embargoed launches and teams that should not see each other’s work.",
            ["Within an environment, ", { text: "folder-level permissions", page: 152 }, " allow access to be controlled at a more detailed level than access across the whole organisation."],
          ],
        },
        {
          heading: "Care with people who work across clients",
          summary: "Agency staff who serve several clients are where separation is most easily undermined by habit.",
          icon: "users",
          body: [
            "A designer working for several clients in a week can carry a file from one to another without thinking, by way of a desktop folder or a reused export.",
            "Keeping each client’s work inside that client’s library, rather than in personal working folders shared across accounts, removes the easiest route for material to cross over.",
          ],
        },
        {
          heading: "Rules for agency-owned material",
          summary: "Templates and agency resources are not client assets, and should not pretend to be.",
          icon: "copy",
          body: [
            "Agencies often reuse their own templates, pitch material and process documents with every client. Keep them clearly separate from anything a client owns, so reusing agency material never becomes a route for one client’s work to reach another.",
          ],
        },
        {
          heading: "Discipline in integrations",
          summary: "Connected applications need to respect client boundaries too.",
          icon: "code",
          body: [
            "Automation written for one client is often copied for the next. Keeping credentials and configuration separate for each client, and reviewing them each time an integration is reused, stops a copied script from pointing at the wrong library.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 152 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about client tenant isolation",
      items: [
        {
          question: "What can an agency tell a client who asks how its assets are kept apart?",
          answer: ["That its environment can remain logically isolated from other clients’ libraries, and that isolation is one part of a wider picture: ", { text: "GetSibu security", page: 321 }, " is built into the architecture through encryption, authentication, access control, tenant isolation and audit logging."],
        },
        {
          question: "How does client tenant isolation relate to client workspaces?",
          answer: ["They work towards the same goal from different sides. Isolation is the boundary between client environments, while ", { text: "client workspace access", page: 177 }, " describes client-specific workspaces that help agencies organise and isolate customer content."],
        },
        {
          question: "Does isolation between clients matter for a small agency?",
          answer: "Often just as much. In a small agency the same few people serve every client, so separation that does not depend on habit matters with a handful of clients as much as with many.",
        },
      ],
      sources: [{ kind: "pdf", page: 161 }, { kind: "pdf", page: 321 }, { kind: "pdf", page: 177 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on keeping clients apart",
      variant: "compact",
      pages: [160, 324, 276, 167],
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
