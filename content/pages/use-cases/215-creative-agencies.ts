/**
 * 215 · GetSibu for Creative Agencies — /use-cases/creative-agencies
 *
 * Angle (clusters: uc-agencies primary, multi-tenancy): the agency as the operator of many client libraries — a separate,
 * isolated environment per client with its own storage, authentication options, AI keys and a white-label approach for
 * client-facing experiences. Advertising Agencies (219) owns campaign revisions inside client libraries; Brand
 * Consultancies (221) owns strategy material; Video Agencies (229) owns client footage and deliverables.
 * White-label is described only as "a white-label approach for client-facing asset management experiences".
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of why agencies separate client material; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 215,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Use Cases",
      lede: "How a creative agency can run a separate, isolated library for each client from one platform, and what that separation means for storage, authentication, AI keys and client-facing access.",
      visual: { diagram: "media-library" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 215 }, { kind: "pdf", page: 163 }, { kind: "pdf", page: 164 }, { kind: "pdf", page: 165 }, { kind: "pdf", page: 166 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Every client in its own library, all run by one agency",
      body: [
        "Creative agencies can use GetSibu’s multi-tenant capabilities to manage many clients at once while each client’s library stays apart from the others.",
        "Agencies carry obligations that in-house teams do not. Clients expect their unreleased work to be invisible to other clients, some of whom may compete in the same sector. Account teams change, freelancers rotate between accounts, and a folder shared on the wrong drive can put a relationship at risk. On a single shared file server, separation depends on discipline rather than design.",
        [
          "Multi-tenancy builds that separation into the structure. GetSibu is ",
          { text: "designed for organisations that need multiple isolated environments", page: 160 },
          ", and each ",
          { text: "client environment can remain logically isolated", page: 161 },
          ", so assets from one client are not mixed with another client’s library.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["A tenant for each client", "Logical isolation between libraries", "Storage boundaries per client", "Client-specific authentication options", "A white-label approach where needed"],
      },
      highlight: {
        heading: "In practice",
        body: "When a client asks how its unreleased campaign is kept away from other accounts, the agency can point to libraries that are isolated by design rather than by folder naming.",
        tags: ["Agency leads", "Account teams", "Operations"],
      },
      glance: {
        heading: "Creative agencies in brief",
        facts: [
          { label: "Team", value: "Creative agencies" },
          { label: "Typical material", value: "Client campaign assets, brand files, pitch work" },
          { label: "Builds on", value: "Multi-Tenant Digital Asset Management", page: 160 },
          { label: "Supports", value: "Client Review", page: 72 },
        ],
        actions: [{ kind: "route", path: "/use-cases", label: "More in Use Cases" }]
      },
      sources: [{ kind: "pdf", page: 215 }, { kind: "pdf", page: 160 }, { kind: "pdf", page: 161 }, { kind: "pdf", page: 72 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "comparison",
      eyebrow: "Compared",
      heading: "One shared agency drive versus a library per client",
      columns: ["Shared agency storage", "GetSibu client environments"],
      emphasis: 1,
      rows: [
        ["Separation", "Folders and naming conventions", "Logically isolated client environments"],
        ["Storage", "One pool for every account", "Allocation and asset boundaries per client"],
        ["Authentication", "One access route for everyone", "Client-specific authentication options"],
        ["AI keys", "Not separated by client", "Client-specific AI key management where required"],
        ["Client-facing access", "Links into the agency’s folders", "A white-label approach for client-facing experiences"],
      ],
      sources: [{ kind: "pdf", page: 161 }, { kind: "pdf", page: 163 }, { kind: "pdf", page: 165 }, { kind: "pdf", page: 164 }, { kind: "pdf", page: 166 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "capabilities",
      eyebrow: "What the agency uses",
      heading: "Working inside separate client libraries",
      items: [
        {
          heading: "Client workspaces",
          body: "Client-specific workspaces give the agency an organising unit for each customer’s content.",
          icon: "briefcase",
          points: ["A clear home for each account", "Customer content kept distinct"],
          page: 177,
        },
        {
          heading: "Client review",
          body: "Review workflows run inside each client’s library, so feedback and approvals for one account stay isolated from the rest.",
          icon: "approval",
          points: ["Feedback kept with the account", "Clients kept isolated"],
          page: 72,
        },
        {
          heading: "Agency collaboration",
          body: "Agency teams can operate several client libraries through the multi-tenant environment instead of juggling separate systems.",
          icon: "users",
          points: ["One platform for the roster", "Separate libraries within it"],
          page: 84,
        },
        {
          heading: "Agency analytics",
          body: "Analytics help the agency understand asset activity across its client environments.",
          icon: "chart",
          points: ["Activity across client environments", "Evidence for account planning"],
          page: 202,
        },
        {
          heading: "Tenant context in the API",
          body: "When the agency builds its own tools on the API, requests can include tenant context so client environments remain properly separated.",
          icon: "api",
          points: ["Custom tools respect tenants", "Separation beyond the interface"],
          page: 276,
        },
        {
          heading: "Tenant-scoped architecture",
          body: "The platform’s architecture is designed around tenant-scoped data access, which is what strict separation between client environments depends on.",
          icon: "shield",
          points: ["Isolation designed in", "Not left to folder conventions"],
          page: 324,
        },
      ],
      sources: [{ kind: "pdf", page: 177 }, { kind: "pdf", page: 72 }, { kind: "pdf", page: 84 }, { kind: "pdf", page: 354 }, { kind: "pdf", page: 202 }, { kind: "pdf", page: 276 }, { kind: "pdf", page: 324 }],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "Taking on a new client without touching the others",
      team: "A creative agency",
      situation: "A creative agency wins a retail client whose competitor is already on its roster. The new client requires separate access controls for its own people and would like a client-facing experience rather than links into the agency’s storage.",
      steps: [
        {
          heading: "A separate environment",
          body: ["The agency sets up a new client environment, and ", { text: "client asset isolation", page: 167 }, " keeps the retailer’s library from being mixed with the competitor’s workflow."],
        },
        {
          heading: "Storage and sign-in for the client",
          body: "The new tenant receives its own storage allocation, and the client’s requirement for separate access controls is met with client-specific authentication options.",
        },
        {
          heading: "The existing brand library moves in",
          body: ["The client’s current brand files come across through ", { text: "large library migration", page: 131 }, ", with important metadata and folder relationships preserved."],
        },
        {
          heading: "A client-facing experience",
          body: ["For the client’s own team, the agency uses a ", { text: "white-label approach", page: 166 }, " for the client-facing asset management experience."],
        },
        {
          heading: "Rough concepts stay with the agency",
          body: ["While concepts are still rough, they sit in folders that ", { text: "remain private until access is explicitly granted", page: 154 }, ", so work reaches the client’s team only when the agency decides it is ready."],
        },
      ],
      outcome: "The agency serves two competing clients from one platform, and the separation between them is part of how the libraries are built rather than a rule the team has to remember.",
      link: { page: 162, label: "Agency Multi-Tenancy" },
      sources: [{ kind: "pdf", page: 167 }, { kind: "pdf", page: 161 }, { kind: "pdf", page: 163 }, { kind: "pdf", page: 165 }, { kind: "pdf", page: 131 }, { kind: "pdf", page: 166 }, { kind: "pdf", page: 154 }, { kind: "pdf", page: 162 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "tabs",
      id: "perspectives",
      eyebrow: "Who it helps",
      heading: "What multi-tenancy means for each side of the relationship",
      tabs: [
        {
          label: "Agency leaders",
          heading: "Grow the roster without adding systems",
          icon: "building",
          body: [
            "For agency leadership, the question is whether each new client brings another disconnected system to maintain.",
            [
              { text: "Agency efficiency", page: 354 },
              " comes from managing client libraries on a structured platform instead of in separate systems, and ",
              { text: "DAM pricing for agencies", page: 346 },
              " can be weighed on the number of clients, users, storage requirements and multi-tenant needs.",
            ],
          ],
          points: ["One platform as the roster grows", "Evaluation based on clients and storage"],
          link: { page: 372, label: "What Is Multi-Tenant DAM?" },
        },
        {
          label: "Account teams",
          heading: "Stay within the account you are working on",
          icon: "users",
          body: [
            "A file from the wrong account can cost an agency a client. What account and production teams need is certainty that the material in front of them belongs to the client it was made for.",
            [{ text: "Agency asset management", page: 168 }, " keeps structured separation between customers while the agency handles creative assets for all of them."],
          ],
          points: ["Client material kept distinct", "Less risk of sending the wrong file"],
          link: { page: 161, label: "Client Tenant Isolation" },
        },
        {
          label: "Clients",
          heading: "Confidence that the work stays theirs",
          icon: "shield",
          body: [
            "Clients care less about how an agency organises itself than about knowing their material is handled carefully and kept to their account.",
            ["Where a client’s AI use needs to be kept separate, ", { text: "per-client AI keys", page: 164 }, " support client-specific key management in multi-tenant configurations."],
          ],
          points: ["Assets kept to their own environment", "Material handled with care"],
          link: { page: 387, label: "Does GetSibu Support Multiple Clients?" },
        },
      ],
      sources: [{ kind: "pdf", page: 354 }, { kind: "pdf", page: 346 }, { kind: "pdf", page: 372 }, { kind: "pdf", page: 168 }, { kind: "pdf", page: 161 }, { kind: "pdf", page: 164 }, { kind: "pdf", page: 72 }, { kind: "pdf", page: 387 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about GetSibu for creative agencies",
      items: [
        {
          question: "Can a creative agency keep competing clients’ assets apart in GetSibu?",
          answer: ["Yes. That is what the multi-tenant design is for: it is ", { text: "intended to support agencies and organisations that need isolated client environments", page: 387 }, ", so one client’s library is not part of another’s environment."],
        },
        {
          question: "Is multi-tenant asset management only useful to agencies?",
          answer: ["No. ", { text: "Multi-tenant DAM", page: 372 }, " allows one platform to support multiple isolated organisations or clients, which can suit any organisation serving several customers that need separate environments."],
        },
        {
          question: "Can an agency limit its own freelancers to particular work?",
          answer: [{ text: "Individual permissions", page: 157 }, " give targeted access when organisational roles alone do not provide enough granularity, and ", { text: "folder-level permissions", page: 152 }, " control access more finely than organisation-wide access."],
        },
      ],
      sources: [{ kind: "pdf", page: 387 }, { kind: "pdf", page: 372 }, { kind: "pdf", page: 157 }, { kind: "pdf", page: 152 }],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on running client libraries",
      variant: "compact",
      pages: [160, 162, 166, 72, 219, 229],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page, and the closest agency use cases." }],
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
