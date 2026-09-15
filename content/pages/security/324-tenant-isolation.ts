/**
 * 324 · Tenant Isolation — /security/tenant-isolation
 *
 * Angle (clusters: multi-tenancy, security-foundations): tenant-scoped data access as a security design — why
 * separation between customers must be strict, the routes where it is tested, and how a security review examines
 * it. 160 owns the multi-tenant setup, 161 logical isolation per client, 372 the vendor-neutral explainer.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of tenant isolation as a security practice; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 324,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Security",
      lede: "What tenant-scoped data access means as a security design, the routes by which separation between customers can be tested, and the questions a review should put to any multi-tenant platform.",
      visual: { diagram: "control-map", focus: "tenant" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 324 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Separation between customers built into the design",
      body: [
        "Multi-tenant organisations need strict separation between the environments of different customers, and the GetSibu architecture is designed around tenant-scoped data access. In general, tenant-scoped access means every request for data is made in the context of a single tenant, so what comes back belongs to that tenant’s environment.",
        "Strictness matters because of what a failure looks like. An access mistake inside one organisation exposes material to a colleague, where a quick correction and a conversation can often contain the damage. A failure between tenants exposes one customer’s work to a different customer, possibly a direct competitor, and nothing done afterwards can undo what they have seen.",
        [
          "Tenant isolation is the security side of a broader design. ",
          { text: "Multi-tenant digital asset management", page: 160 },
          " explains why agencies and similar organisations need several isolated environments, and ",
          { text: "client tenant isolation", page: 161 },
          " covers what logical separation means for each client environment.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Tenant-scoped data access", "Strict separation between customers", "Every request tied to one tenant", "Failures that reach another customer", "Every route into the data"],
      },
      glance: {
        heading: "Tenant isolation in brief",
        facts: [
          { label: "Area", value: "Security" },
          { label: "Architecture", value: "Designed around tenant-scoped data access" },
          { label: "Separates", value: "Customer environments" },
          { label: "Wider design", value: "Multi-Tenant Digital Asset Management", page: 160 },
        ],
        actions: [{ kind: "route", path: "/security", label: "More in Security" }]
      },
      sources: [{ kind: "pdf", page: 324 }, { kind: "pdf", page: 160 }, { kind: "pdf", page: 161 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "routes",
      eyebrow: "Where it is tested",
      heading: "The routes a boundary between tenants has to cover",
      intro: "Separation has to hold on every path to the data, not only at the point where people sign in.",
      tabs: [
        {
          label: "Search",
          heading: "Results drawn from one environment only",
          icon: "search",
          body: [
            "Search gathers information from across a library, which is precisely what makes it sensitive on a shared platform. A result list, a suggested term or even a count of matches can reveal that material exists.",
            "When assessing any multi-tenant platform, check that results, suggestions and counts all come from the tenant making the request.",
          ],
          points: ["Results, suggestions and counts", "Scoped to the requesting tenant"],
        },
        {
          label: "Previews",
          heading: "Copies of assets need the same boundary",
          icon: "image",
          body: [
            "Thumbnails and streamed previews are generated from the originals and are often delivered by a separate route designed for speed. A preview of an unreleased product reveals nearly as much as the file it was made from.",
            "A review should therefore treat previews as assets in their own right and ask how access to them is tied to the tenant that owns the original.",
          ],
          points: ["Previews reveal what files contain", "Delivery routes included in the review"],
        },
        {
          label: "Processing",
          heading: "Work done with nobody watching",
          icon: "refresh",
          body: [
            "On asset platforms, indexing and analysis typically run in the background once a file has been uploaded. Every piece of that work needs to know which tenant it is doing it for, so that what it produces is attached to the right environment.",
            "Background work is easy to overlook in a review because no person initiates it directly. Ask how it is scoped in the same way as requests made by people.",
          ],
          points: ["Output returned to the right environment", "Reviewed alongside human requests"],
        },
        {
          label: "API requests",
          heading: "The tenant travels with the request",
          icon: "api",
          body: [
            ["Applications reach data without a person present, so the boundary cannot rely on anyone noticing a mistake. In GetSibu, ", { text: "API access can include tenant context", page: 276 }, " so that multi-tenant environments remain properly separated when applications connect."],
            "A useful test for any platform is whether a credential issued for one tenant can be used to reach another. The answer should be no.",
          ],
          points: ["Tenant context in API access", "Credentials confined to their tenant"],
        },
      ],
      sources: [{ kind: "pdf", page: 276 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "review",
      eyebrow: "Evaluating any platform",
      heading: "Reviewing separation between tenants step by step",
      intro: "A general sequence a security reviewer can adapt to any multi-tenant service.",
      steps: [
        { heading: "Decide what must never cross", body: "Work out which information would cause harm if another customer saw it; in creative work that reaches well beyond the files themselves.", icon: "flag" },
        { heading: "Trace each route in", body: "List every way data can be reached, including the automated ones, before judging any single route.", icon: "map" },
        { heading: "Ask how scoping is designed", body: "For each route, ask whether access is defined per tenant from the outset or depends on a check added later, since added checks are the easiest to miss.", icon: "help" },
        { heading: "Test with two environments", body: "Where possible, set up two test environments holding deliberately similar material and confirm that nothing from one appears in the other.", icon: "check" },
        { heading: "Confirm credentials stay put", body: "Check that credentials issued for one environment, including those used by integrations, cannot reach any other environment.", icon: "key" },
        { heading: "Keep the findings", body: "Record what was asked, tested and answered, so the next review starts from evidence instead of memory.", icon: "document" },
      ],
      sources: [{ kind: "pdf", page: 324 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A tender that asks about separation from a competitor",
      team: "A content agency",
      situation: "A content agency is tendering for work with a financial services firm while already serving one of that firm’s competitors. The tender includes a security questionnaire about how the firm’s material would be kept apart from other customers.",
      steps: [
        { heading: "The question is pinned down", body: "The agency’s operations lead notes that the firm is asking about separation between customers, which is a different matter from who inside the agency can open which folders." },
        { heading: "The design is explained", body: ["The lead explains that the GetSibu architecture is designed around tenant-scoped data access and that each client environment can remain ", { text: "logically isolated", page: 161 }, " from the others."] },
        { heading: "Access inside the environment follows", body: ["As a separate point, the lead describes access within the environment the agency would set up for the firm: new folders can stay private until access is granted, and ", { text: "folder-level permissions", page: 152 }, " give finer control than organisation-wide access, so work on the firm’s material can be kept to its account team."] },
      ],
      outcome: "The firm’s reviewers receive an answer that keeps the boundary between customers distinct from access decisions inside the agency, and the tender moves on to the work itself.",
      link: { page: 215, label: "GetSibu for Creative Agencies" },
      sources: [{ kind: "pdf", page: 324 }, { kind: "pdf", page: 161 }, { kind: "pdf", page: 154 }, { kind: "pdf", page: 152 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about tenant isolation",
      items: [
        {
          question: "Does tenant-scoped data access mean every tenant has its own hardware?",
          answer: ["Tenant-scoped access describes how access to data is defined, and does not by itself say anything about hardware. The explainer ", { text: "What Is Multi-Tenant DAM?", page: 372 }, " sets out how multi-tenant platforms differ from separate installations."],
        },
        {
          question: "Does tenant isolation matter for organisations that are not agencies?",
          answer: "Yes. Any organisation that manages creative material for separate customers, or needs subsidiaries and brands kept strictly apart, has the same need for separation between environments.",
        },
        {
          question: "Where does tenant isolation sit among the elements of GetSibu security?",
          answer: [{ text: "GetSibu security", page: 321 }, " is built on encryption, authentication, access control, tenant isolation and audit logging. Tenant isolation is the element concerned with the boundary between whole organisations rather than with individual people, credentials or records."],
        },
      ],
      sources: [{ kind: "pdf", page: 372 }, { kind: "pdf", page: 160 }, { kind: "pdf", page: 321 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on keeping customer environments apart",
      variant: "compact",
      pages: [160, 161, 276, 372, 387],
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
