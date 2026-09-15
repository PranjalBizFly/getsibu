/**
 * 165 · Per-Client Authentication — /permissions/per-client-authentication
 *
 * Angle (cluster: multi-tenancy): client-specific authentication options for organisations that need separate
 * access controls for different customers — authentication as distinct from permissions, what each side of an
 * agency relationship needs, and where authentication sits among GetSibu's security layers. PDF wording only:
 * “client-specific authentication options”. Names no authentication protocol, standard or identity product, and
 * claims no user provisioning or sign-in feature.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of authentication in client libraries; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 165,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Permissions & Multi-Tenancy",
      lede: "Why different customers can expect different ways of verifying the people who reach their material, how that question differs from permissions, and what an agency should agree with each client before work begins.",
      visual: { diagram: "tenant-boundaries", focus: "tenants" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 165 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Separate access controls for different customers",
      body: [
        "Client-specific authentication options in GetSibu can support organisations that require separate access controls for different customers. When one platform serves several clients, the way people are verified need not be identical in every client environment.",
        "Authentication and permissions are easily confused. Authentication answers “who is this person?”; permissions answer “what may they reach, now that we know?”. Customers often care most about the first question. A bank, a public body and a young consumer brand can hold very different expectations about how their own people, and their agency’s people, are verified before anyone reaches their material, and one approach for every client rarely satisfies them all.",
        [
          "The need usually arises in ",
          { text: "agency multi-tenancy", page: 162 },
          ", where multiple client libraries are managed from one platform while separation between tenants is maintained, and each client arrives with its own security policy.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Client-specific authentication options", "Separate access controls per customer", "Authentication is not permission", "One security layer among several", "Different customers, different expectations"],
      },
      highlight: {
        heading: "In practice",
        body: "An agency serves a financial services client with strict access expectations and a lifestyle brand with lighter ones; client-specific options can support both without forcing one approach on each.",
        tags: ["Agencies", "Security teams", "Clients"],
      },
      glance: {
        heading: "Per-client authentication in brief",
        facts: [
          { label: "Area", value: "Permissions & Multi-Tenancy" },
          { label: "Supports", value: "Separate access controls for different customers" },
          { label: "Account protection", value: "MFA" },
          { label: "For applications", value: "API Authentication", page: 256 },
        ],
        actions: [{ kind: "route", path: "/permissions", label: "More in Permissions & Multi-Tenancy" }]
      },
      sources: [{ kind: "pdf", page: 165 }, { kind: "pdf", page: 162 }, { kind: "pdf", page: 336 }, { kind: "pdf", page: 256 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "perspectives",
      eyebrow: "Perspectives",
      heading: "Per-client authentication from each side of the relationship",
      tabs: [
        {
          label: "The agency",
          heading: "Meeting each client’s expectations without a patchwork",
          icon: "briefcase",
          body: [
            "When clients set different access requirements and the platform cannot vary between them, agencies tend to fall back on separate systems for the most demanding clients. That brings back the scattered arrangements a shared platform was meant to remove.",
            "The aim is the opposite: one platform, with differences between clients handled only where they genuinely exist.",
          ],
          points: ["Different requirements, one platform", "Fewer one-off arrangements"],
        },
        {
          label: "Client security",
          heading: "What a client’s security team will want to know",
          icon: "shield",
          body: [
            "Security reviewers typically ask how users are verified, how agency staff are told apart from client staff, what happens when someone leaves, and what protects accounts beyond a password.",
            [{ text: "Enterprise asset security", page: 338 }, " frames the wider answer, combining identity management, encryption, permissions, auditability and data isolation."],
          ],
          points: ["How people are verified", "What else protects the library"],
        },
        {
          label: "Client users",
          heading: "What people at the client actually notice",
          icon: "users",
          body: [
            "For a client’s brand or marketing team, good authentication is mostly invisible. Access works in line with what their organisation expects, and nothing about it feels improvised or borrowed from another client.",
            "When it goes wrong, it is very visible: people locked out before a deadline, or colleagues who left months ago still able to get in.",
          ],
          points: ["Access in line with their organisation’s expectations", "No borrowed arrangements"],
        },
      ],
      sources: [{ kind: "pdf", page: 338 }, EXPLAINS],
    },
    {
      kind: "layers",
      id: "security-layers",
      eyebrow: "Layer by layer",
      heading: "Where authentication sits among the security layers",
      intro: "GetSibu security is built from several parts, and authentication is only one of them.",
      layers: [
        { label: "Authentication", body: "Establishes who someone is; client-specific authentication options belong to this layer." },
        { label: "Account protection", body: "Multi-factor authentication adds another layer of protection to the accounts people use.", page: 336 },
        { label: "Tenant isolation", body: "Strict separation between customer environments, with an architecture designed around tenant-scoped data access.", page: 324 },
        { label: "Access control", body: "Role-based access control limits what users can do according to their organisational responsibilities.", page: 325 },
        { label: "Default-deny folders", body: "Default-deny folder access ensures new content is not automatically exposed to every user.", page: 337 },
        { label: "Audit", body: "Audit logs keep a historical record of important actions, including changes to permissions.", page: 326 },
      ],
      sources: [{ kind: "pdf", page: 321 }, { kind: "pdf", page: 165 }, { kind: "pdf", page: 336 }, { kind: "pdf", page: 324 }, { kind: "pdf", page: 325 }, { kind: "pdf", page: 337 }, { kind: "pdf", page: 326 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "before-configuring",
      eyebrow: "Considerations",
      heading: "What to settle before agreeing authentication with a client",
      items: [
        {
          heading: "Start from the client’s written requirements",
          summary: "A client’s security policy or questionnaire is a better starting point than assumptions.",
          icon: "document",
          body: [
            "Ask for the client’s requirements in writing early in onboarding. It prevents the common pattern of setting up access one way and redoing it after the client’s security team reviews it.",
          ],
        },
        {
          heading: "Remember that agency staff are users too",
          summary: "A client’s expectations usually cover the agency’s people as well as its own.",
          icon: "user",
          body: [
            "Designers, producers and account managers who work in a client’s library are subject to that client’s expectations. Agree what the client expects of agency staff, and apply it to everyone on the account rather than case by case.",
          ],
        },
        {
          heading: "Plan for people leaving on either side",
          summary: "Departures are a frequent weak point for access controls.",
          icon: "clock",
          body: [
            "Agree who tells whom when someone leaves the client or the agency, and how quickly their access should end. A clear routine matters more than any single setting.",
          ],
        },
        {
          heading: "Do not let authentication stand in for permissions",
          summary: "Knowing who someone is does not tell you what they should reach.",
          icon: "lock",
          body: [
            ["Strong verification of a person who has access to everything is still too much access. ", { text: "Creative asset permissions", page: 151 }, " are what control who can access the different areas of a creative library once people are in."],
          ],
        },
        {
          heading: "Keep integration credentials apart from people’s accounts",
          summary: "Applications should authenticate as applications, not as borrowed staff logins.",
          icon: "api",
          body: [
            ["Automation that uses a person’s account breaks when that person leaves, and hides what the application is doing. With ", { text: "developer authentication", page: 275 }, ", developers authenticate API requests using supported authentication credentials instead."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 151 }, { kind: "pdf", page: 275 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about per-client authentication",
      items: [
        {
          question: "Which clients tend to ask for separate access controls?",
          answer: "Usually those with formal security policies of their own, such as financial services firms, public bodies and healthcare organisations, whose security teams review how anyone reaching their material is verified.",
        },
        {
          question: "How does per-client authentication relate to client tenant isolation?",
          answer: [{ text: "Client tenant isolation", page: 161 }, " keeps client environments logically apart, while authentication options concern how people are verified before they reach one. A client with strict expectations will usually ask about both."],
        },
        {
          question: "Does per-client authentication replace multi-factor authentication?",
          answer: "No. Client-specific options concern how access controls can differ between customers, whereas multi-factor authentication protects each person’s account. A demanding client may expect both.",
        },
      ],
      sources: [{ kind: "pdf", page: 165 }, { kind: "pdf", page: 161 }, { kind: "pdf", page: 336 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on access for client environments",
      variant: "compact",
      pages: [160, 163, 164],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the multi-tenancy overview." }],
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
