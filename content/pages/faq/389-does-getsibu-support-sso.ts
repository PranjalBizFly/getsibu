/**
 * 389 · Does GetSibu Support SSO? — /faq/does-getsibu-support-sso (HELD: sso-scim, pricing-tiers)
 *
 * Angle (clusters: identity; pricing-plans): the short answer in PDF 389 wording with its provenance hedge, what the
 * answer covers and leaves to confirm, and the published protections around sign-in. page 334, page 335 and
 * page 344 are held and not linked. Per-client authentication (165) appears only as a separate question.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of identity and evaluation practice; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 389,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "centered",
      eyebrow: "FAQ",
      lede: "Which GetSibu plan includes SSO and SCIM capabilities, and what else shapes how people sign in to a creative library and what they can reach once inside.",
      actions: [
        { kind: "global", cta: "primary" },
        { kind: "route", path: "/faq", label: "More in FAQs" },
      ],
      sources: [{ kind: "pdf", page: 389 }],
    },
    {
      kind: "definition",
      id: "short-answer",
      eyebrow: "Short answer",
      term: "Does GetSibu Support SSO?",
      answer: "The Business plan includes SSO and SCIM capabilities according to the supplied website content.",
      detail: "In general, single sign-on lets people sign in through an organisation’s central identity provider, and SCIM is a standard for keeping application accounts in step with a directory. The answer rests on website content rather than a detailed specification, so confirm the specifics that matter to you before relying on them.",
      sources: [{ kind: "pdf", page: 389 }, EXPLAINS],
    },
    {
      kind: "overview",
      id: "longer-answer",
      heading: "What the answer covers, and what it leaves to confirm",
      body: [
        "The answer names two capabilities and places them in one plan. The pairing makes sense: organisations that manage identity centrally tend to want both halves, one place where people sign in and a directory that keeps accounts in step as staff join and leave.",
        "Its source matters as well. An answer drawn from website content is a sound starting point for an evaluation, not a substitute for testing it against the identity arrangements your own organisation already has.",
        [
          "Where a plan decision turns on identity requirements, weigh them together with everything else the organisation needs. ",
          { text: "Creative team pricing", page: 345 },
          " looks at library size and collaboration requirements, and ",
          { text: "enterprise asset management cost", page: 347 },
          " sets cost beside storage, productivity, collaboration and administrative savings.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Single sign-on and SCIM together", "Placed in the Business plan", "Drawn from website content", "Details to confirm for your organisation", "Access still set inside the library"],
      },
      highlight: {
        heading: "In practice",
        body: "An IT manager shortlisting asset platforms records the answer with its source beside it, and turns the details her organisation depends on into questions for a call with the vendor.",
        tags: ["IT", "Evaluation", "Procurement"],
      },
      glance: {
        heading: "The SSO answer in brief",
        facts: [
          { label: "Area", value: "FAQ" },
          { label: "Answer", value: "SSO and SCIM in the Business plan" },
          { label: "Source", value: "Supplied website content" },
          { label: "Wider design", value: "GetSibu Security", page: 321 },
        ],
      },
      sources: [{ kind: "pdf", page: 389 }, { kind: "pdf", page: 345 }, { kind: "pdf", page: 347 }, { kind: "pdf", page: 321 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "around-sign-in",
      eyebrow: "Around sign-in",
      heading: "What else protects access to a GetSibu library",
      items: [
        {
          heading: "Multi-factor authentication",
          body: "A further layer of protection for the accounts people use, beyond a password alone.",
          icon: "key",
          page: 336,
        },
        {
          heading: "New content kept closed",
          body: "Default-deny folder access ensures that new content is not automatically exposed to every user who signs in.",
          icon: "lock",
          page: 337,
        },
        {
          heading: "Limits on what people can do",
          body: "Role-based access control restricts what users can perform according to their organisational responsibilities.",
          icon: "shield",
          page: 325,
        },
        {
          heading: "Separation between customers",
          body: "Multi-tenant organisations require strict separation between customer environments, and the architecture is designed around tenant-scoped data access.",
          icon: "building",
          page: 324,
        },
        {
          heading: "A record of important actions",
          body: "Permission changes, comments and asset changes form part of a historical record kept in the audit logs.",
          icon: "audit",
          page: 326,
        },
      ],
      sources: [{ kind: "pdf", page: 336 }, { kind: "pdf", page: 337 }, { kind: "pdf", page: 325 }, { kind: "pdf", page: 324 }, { kind: "pdf", page: 326 }],
    },
    {
      kind: "checklist",
      id: "confirm",
      eyebrow: "What to weigh",
      heading: "Details worth confirming when SSO is a requirement",
      variant: "chips",
      items: [
        "Identity providers supported",
        "Standards used for sign-in",
        "Accounts for freelancers",
        "What deprovisioning does",
        "Emergency administrator access",
        "How sessions end after a departure",
      ],
      sources: [{ kind: "pdf", page: 389 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Follow-up questions about SSO in GetSibu",
      items: [
        {
          question: "Can agency clients have authentication arrangements of their own in GetSibu?",
          answer: [
            "That is a separate question from single sign-on. ",
            { text: "Client-specific authentication options", page: 165 },
            " can support organisations that require separate access controls for different customers.",
          ],
        },
        {
          question: "What happens to someone’s access when they leave an organisation that uses SSO?",
          answer: "The detail varies with how sign-in and provisioning are arranged, so confirm it for your own set-up. In general, disabling a person at the identity provider stops new sign-ins through single sign-on, while closing the account inside each application is the part SCIM exists to automate.",
        },
        {
          question: "Does signing in through SSO decide which folders someone can open?",
          answer: [
            "No. Signing in establishes who someone is, and what they can reach is a matter of permissions. ",
            { text: "Folder-level permissions", page: 152 },
            " allow access to be controlled at a more detailed level than organisation-wide access.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 165 }, { kind: "pdf", page: 152 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on signing in and access",
      variant: "compact",
      pages: [336, 337, 325, 165, 152, 321],
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
