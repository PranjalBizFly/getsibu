/**
 * 256 · API Authentication — /developers/api-authentication
 *
 * Angle (cluster: api-security): applications reaching GetSibu through authenticated access within appropriate
 * security boundaries — authentication versus authorisation, what it asks of each role, and how to look after
 * the credentials an integration uses. Developer Authentication (275) owns the supported credentials; API Tenant
 * Isolation (276) tenant context; API Security (277) why protecting automated access matters. No token formats,
 * authorisation flows, key rotation or credential lifetimes are described for GetSibu.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of API authentication and credential practice in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 256,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "API & Developers",
      lede: "Why software connecting to GetSibu has to identify itself, what working inside security boundaries means for the applications you connect, and how to look after the credentials involved.",
      visual: { diagram: "api-flow", focus: "auth" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 256 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Proving who is asking before anything is shared",
      body: [
        "API requests to GetSibu use authenticated access, so external applications can interact with the platform within appropriate security boundaries. Software that connects to the library is identified rather than treated as an anonymous caller.",
        "Proving identity is only the first thing a platform asks of a request. An application that authenticates successfully has not thereby earned access to everything, and the boundaries it works within stop a connected tool from becoming a way around the rules people follow.",
        [
          "People signing in can add ",
          { text: "multi-factor authentication", page: 336 },
          " as another layer of account protection, but software cannot answer a prompt on a phone. That is one reason ",
          { text: "API security", page: 277 },
          " is an important component of protecting automated access to creative assets.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Authenticated API requests", "Identity is not permission", "Appropriate security boundaries", "Credentials treated as secrets", "An owner for every connected application"],
      },
      glance: {
        heading: "API authentication in brief",
        facts: [
          { label: "Area", value: "API & Developers" },
          { label: "Applies to", value: "API requests from external applications" },
          { label: "Credentials", value: "Developer Authentication", page: 275 },
          { label: "Part of", value: "GetSibu Security", page: 321 },
        ],
        actions: [{ kind: "route", path: "/developers", label: "More in Developers" }]
      },
      sources: [{ kind: "pdf", page: 256 }, { kind: "pdf", page: 336 }, { kind: "pdf", page: 277 }, { kind: "pdf", page: 275 }, { kind: "pdf", page: 321 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "authn-authz",
      eyebrow: "Key distinction",
      heading: "Authentication compared with authorisation",
      columns: ["Authentication", "Authorisation"],
      rows: [
        ["The question it answers", "Who is making this request?", "What may this identity do?"],
        ["What it relies on", "Credentials presented with the request", "Rules about access to content"],
        ["When it fails", "The request is not accepted at all", "The request is refused for that content"],
        ["Typical mistake", "Credentials shared or exposed", "Access granted more widely than needed"],
        ["Usually looked after by", "Developers and IT", "Administrators and content owners"],
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "tabs",
      id: "roles",
      eyebrow: "Who is involved",
      heading: "What API authentication asks of each role",
      tabs: [
        {
          label: "Developers",
          heading: "Applications that fail safely when authentication does",
          icon: "code",
          body: [
            "An application should treat a refused request as a signal rather than a glitch: stop, report it clearly and avoid retrying in a loop that looks like an attack. Credentials also belong nowhere near logs or error messages, where they are easily copied.",
            ["Developers authenticate requests with ", { text: "supported authentication credentials", page: 275 }, "; whatever form those take, handle them with the care due to a password."],
          ],
          points: ["Refused requests reported, not retried blindly", "No credentials in logs or errors"],
        },
        {
          label: "Administrators",
          heading: "Deciding which applications should exist",
          icon: "user",
          body: [
            "Every connected application is an identity with a route into the library, so its purpose deserves approval before it is set up, much as a new colleague’s access would.",
            [{ text: "Organisation administrators", page: 158 }, " in GetSibu can manage access policies, users, folders and organisational settings, which puts them in a good position to ask what a new integration is for."],
          ],
          points: ["Purpose agreed before setup", "Access decisions kept with administrators"],
        },
        {
          label: "Security teams",
          heading: "Authentication as one control among several",
          icon: "shield",
          body: [
            ["Security teams judge authentication alongside the controls around it. In GetSibu, authentication is one of several ", { text: "protections built into the architecture", page: 321 }, ", together with encryption, access control, tenant isolation and audit logging."],
            "GetSibu can keep API tokens, OAuth credentials and SMTP passwords in encrypted secret storage.",
          ],
          points: ["Authentication within layered controls", "Encrypted storage for secrets"],
        },
        {
          label: "Agencies",
          heading: "Keeping each client’s access apart",
          icon: "building",
          body: [
            "An agency connecting tools to several client libraries has to be sure that an integration built for one client never reaches another client’s content.",
            [{ text: "API access can include tenant context", page: 276 }, " so that multi-tenant environments remain properly separated. More broadly, client-specific authentication options can support organisations that need separate access controls for different customers."],
          ],
          points: ["Tenant context on API access", "Client-specific authentication options"],
        },
      ],
      sources: [{ kind: "pdf", page: 275 }, { kind: "pdf", page: 158 }, { kind: "pdf", page: 321 }, { kind: "pdf", page: 323 }, { kind: "pdf", page: 276 }, { kind: "pdf", page: 165 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "credentials",
      eyebrow: "Good practice",
      heading: "Looking after the credentials an integration uses",
      items: [
        {
          heading: "Keep integrations distinguishable",
          summary: "When several tools share credentials, nobody can tell which one did what.",
          icon: "users",
          body: [
            "Shared credentials tie tools together: withdrawing access from one disrupts all of them, and any record of activity cannot say which tool was responsible. Separate credentials for separate integrations, where the platform allows it, keep both questions answerable.",
          ],
        },
        {
          heading: "Size access to the task",
          summary: "A leaked credential exposes whatever its application could reach.",
          icon: "lock",
          body: [
            "The damage a stolen credential can do is set by the access behind it, not by the tool it was meant for. Settling what an application must read or change before it is connected keeps that exposure as small as the task allows.",
          ],
        },
        {
          heading: "Store secrets where they cannot wander",
          summary: "Tickets, chat messages and shared documents are where credentials leak.",
          icon: "key",
          body: [
            "A credential pasted into a ticket or a message outlives the conversation it was shared in. Use a dedicated secret store, limit who can read it, and give colleagues access to the store rather than a copy of the secret.",
          ],
        },
        {
          heading: "Retire credentials with the tool",
          summary: "A connection that no longer exists should leave nothing behind.",
          icon: "trash",
          body: [
            "Integrations are replaced more often than anyone plans for. Make withdrawing credentials part of retiring a tool, so an abandoned connection cannot quietly keep its route into the library.",
          ],
        },
        {
          heading: "Notice unexpected use",
          summary: "A credential behaving differently from its integration deserves a look.",
          icon: "eye",
          body: [
            "A credential that suddenly makes many more requests than usual, or touches content its integration never needed, may have leaked. Decide in advance who investigates and how the credential would be withdrawn.",
          ],
        },
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about API authentication",
      items: [
        {
          question: "Why does an internal tool still need authenticated access to the GetSibu API?",
          answer: "Because a place on the network is not an identity. An internal tool can be misconfigured, copied or compromised like any other software, and authentication is what ties each request to a known application.",
        },
        {
          question: "What should happen to API credentials when the developer who set them up leaves?",
          answer: "Treat any credential they could read as exposed and replace it through your normal process, then confirm that each affected integration still works.",
        },
        {
          question: "Where do developers find how to authenticate requests to the GetSibu API?",
          answer: [{ text: "API documentation", page: 273 }, " provides the information required to build integrations against the platform, which is the place to confirm how requests should be authenticated."],
        },
      ],
      sources: [{ kind: "pdf", page: 256 }, { kind: "pdf", page: 273 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on securing API access",
      variant: "compact",
      pages: [275, 276, 277, 321, 273, 165],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Build a Smarter Creative Workflow",
      conversionPage: 396,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 396 }],
    },
  ],
};

export default page;
