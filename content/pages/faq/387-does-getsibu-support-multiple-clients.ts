/**
 * 387 · Does GetSibu Support Multiple Clients? — /faq/does-getsibu-support-multiple-clients
 *
 * Angle (cluster: multi-tenancy): the direct yes, how far separation between clients reaches, and what to work
 * out for each client before choosing a setup. Multi-Tenant DAM (160) owns the overview, 161–168 each part,
 * What Is Multi-Tenant DAM? (372) the concept, GetSibu for Creative Agencies (215) the agency use case.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how organisations serving several clients typically separate their work; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 387,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "centered",
      eyebrow: "FAQ",
      lede: "The short answer on looking after several clients in GetSibu, how far the separation between them reaches, and what to work out for each client before settling on a setup.",
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 387 }],
    },
    {
      kind: "definition",
      id: "short-answer",
      eyebrow: "Short answer",
      term: "Does GetSibu Support Multiple Clients?",
      answer: "Yes. GetSibu’s multi-tenant design is intended to support agencies and other organisations that need isolated client environments.",
      detail: "Client environments can remain logically isolated from one another, which keeps one client’s assets out of another client’s library. An agency can manage multiple client libraries from one platform while separation between tenants is maintained.",
      sources: [{ kind: "pdf", page: 387 }, { kind: "pdf", page: 161 }, { kind: "pdf", page: 162 }],
    },
    {
      kind: "overview",
      id: "longer-answer",
      heading: "Separate environments for organisations that work for several clients",
      body: [
        "GetSibu is designed for organisations that need multiple isolated environments, and its architecture is built around tenant-scoped data access. Separation between clients is part of how the platform is built.",
        "Agencies are the obvious case, but the need arises wherever one organisation looks after creative material for others that must not see each other’s work: a design studio handling campaigns for rival retailers, or a content producer working for several publishers. Each of those clients expects its material to stay with its own account, whatever else the studio or producer is working on.",
        [
          { text: "What Is Multi-Tenant DAM?", page: 372 },
          " explains the idea in general terms, and ",
          { text: "GetSibu for Creative Agencies", page: 215 },
          " follows it through the working life of an agency.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Multi-tenant design", "Isolated client environments", "Tenant-scoped data access", "Many client libraries on one platform", "Arrangements that can differ by client"],
      },
      highlight: {
        heading: "In practice",
        body: "When a production company takes on a second broadcaster as a client, that broadcaster’s footage and review work go into a new environment, and nothing about the first broadcaster’s library has to change.",
        tags: ["Production companies", "Account teams", "Studios"],
      },
      glance: {
        heading: "Multiple clients, briefly",
        facts: [
          { label: "Area", value: "Permissions & Multi-Tenancy" },
          { label: "Designed for", value: "Agencies and organisations with client environments" },
          { label: "Architecture", value: "Tenant Isolation", page: 324 },
          { label: "Overview", value: "Multi-Tenant Digital Asset Management", page: 160 },
        ],
        actions: [{ kind: "route", path: "/faq", label: "More in FAQs" }]
      },
      sources: [{ kind: "pdf", page: 387 }, { kind: "pdf", page: 160 }, { kind: "pdf", page: 324 }, { kind: "pdf", page: 372 }, { kind: "pdf", page: 215 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "how-far-separation-reaches",
      eyebrow: "How far it reaches",
      heading: "Where the separation between clients applies",
      items: [
        {
          heading: "Everyday workflows",
          summary: "Unrelated customer libraries are kept out of each other’s work.",
          icon: "workflow",
          page: 167,
          body: [
            "Isolation matters most in routine work, when people are busy and deadlines are close. Client asset isolation is meant to stop one customer’s library from being mixed into a workflow that belongs to another.",
          ],
        },
        {
          heading: "Client workspaces",
          summary: "Each customer’s content has a workspace of its own.",
          icon: "building",
          page: 177,
          body: [
            "Client-specific workspaces help agencies organise customer content and keep it isolated, which gives account teams an obvious home for each client’s material.",
          ],
        },
        {
          heading: "Reviews and approvals",
          summary: "Feedback rounds stay with the client they belong to.",
          icon: "approval",
          page: 72,
          body: [
            "Client work is reviewed constantly, and review is where a mix-up would be most visible. Client-specific libraries and review workflows let an agency run each client’s reviews while the clients themselves stay isolated.",
          ],
        },
        {
          heading: "Integrations and the API",
          summary: "Automated access carries tenant context as well.",
          icon: "api",
          page: 276,
          body: [
            "Scripts and connected applications need the same boundaries as people do. API access can include tenant context, which keeps a multi-tenant environment properly separated when software rather than a person makes the request.",
          ],
        },
        {
          heading: "The agency’s overall view",
          summary: "Seeing across the agency without merging client libraries.",
          icon: "chart",
          page: 202,
          body: [
            "Leaders still need to understand their operation as a whole. Agency analytics help them understand asset activity across client environments.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 167 }, { kind: "pdf", page: 177 }, { kind: "pdf", page: 72 }, { kind: "pdf", page: 276 }, { kind: "pdf", page: 202 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "each-clients-needs",
      eyebrow: "Before you choose",
      heading: "Working out what each client will need",
      intro: "Clients rarely ask for identical arrangements, so it helps to take their needs one at a time.",
      steps: [
        { heading: "List clients and people", body: "Note each client you look after, who works on each account, and which clients must never come near one another’s material.", icon: "users" },
        { heading: "Estimate storage per client", body: "Client environments can have their own storage allocation and asset boundaries, so each library can be sized on its own terms.", icon: "database", page: 163 },
        { heading: "Check authentication needs", body: "Some customers expect separate access controls, and client-specific authentication options can support organisations in that position.", icon: "key", page: 165 },
        { heading: "Settle AI key arrangements", body: "Where a client requires it, multi-tenant configurations can support client-specific AI key management.", icon: "sparkles", page: 164 },
        { heading: "Consider a white-label approach", body: "Agencies can use a white-label approach for client-facing asset management experiences, so weigh whether a given client calls for one.", icon: "palette", page: 166 },
      ],
      sources: [{ kind: "pdf", page: 163 }, { kind: "pdf", page: 165 }, { kind: "pdf", page: 164 }, { kind: "pdf", page: 166 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Follow-up questions about multiple clients in GetSibu",
      items: [
        {
          question: "What does pricing depend on when an agency has several clients?",
          answer: [
            "Agencies can evaluate GetSibu based on the number of clients, users, storage requirements and multi-tenant needs, as ",
            { text: "DAM Pricing for Agencies", page: 346 },
            " sets out.",
          ],
        },
        {
          question: "Does multi-client support change how an agency’s teams collaborate?",
          answer: [
            "It shapes how they work. ",
            { text: "Agency collaboration", page: 84 },
            " looks at how agencies operate multiple client libraries through a multi-tenant environment, carrying methods between accounts while each client’s material stays in its own library.",
          ],
        },
        {
          question: "Are important actions recorded when several clients share the platform?",
          answer: [
            "Security in GetSibu combines tenant isolation with audit logging, and ",
            { text: "audit logs", page: 326 },
            " provide a historical record of important actions, including permissions, comments and asset changes.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 346 }, { kind: "pdf", page: 84 }, { kind: "pdf", page: 321 }, { kind: "pdf", page: 326 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on running several client libraries",
      variant: "compact",
      pages: [160, 161, 324, 372, 215, 72],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Start Your Creative Library",
      conversionPage: 391,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 391 }],
    },
  ],
};

export default page;
