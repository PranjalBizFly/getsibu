/**
 * 164 · Per-Client AI Keys — /permissions/per-client-ai-keys
 *
 * Angle (cluster: multi-tenancy): client-specific AI key management where required — what an AI key is, why some
 * clients require their own arrangement, and what an agency should settle with a client. PDF wording only: “can
 * support client-specific AI key management where required”. Names no AI provider or service, claims no key storage,
 * rotation or configuration feature, and does not state which AI features use a key.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Vendor-neutral explanation of AI keys and client AI requirements; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 164,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Permissions & Multi-Tenancy",
      lede: "What client-specific AI key management means in a multi-tenant GetSibu setup, why some clients require it, and what an agency should settle with a client before it applies.",
      visual: { diagram: "tenant-boundaries", focus: "tenants" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 164 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "AI key arrangements for the clients that require them",
      body: [
        "Multi-tenant configurations in GetSibu can support client-specific AI key management where required. In a setup that serves several clients, the AI key arrangement for one client does not have to be the arrangement for all of them.",
        "Wherever AI services are used, keys tend to settle whose agreement applies, where usage is counted and who can withdraw access. For an agency working on behalf of several clients those are practical questions: a client may hold its own agreement for AI services, have its own policy on how its content is processed, or simply want AI usage on its material attributed to its own account.",
        [
          "The words “where required” matter, because many clients will never raise the question. The wider picture of what a multi-tenant setup involves is set out under ",
          { text: "multi-tenant digital asset management", page: 160 },
          ".",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Client-specific AI key management", "Only where a client requires it", "AI usage tied to the right account", "Room for a client’s own AI arrangements", "One of several per-client options"],
      },
      highlight: {
        heading: "In practice",
        body: "A client with its own agreement for AI services asks for key management specific to its environment, and the agency can support that without changing the arrangements of any other client.",
        tags: ["Agencies", "Regulated clients", "AI"],
      },
      glance: {
        heading: "Per-client AI keys in brief",
        facts: [
          { label: "Area", value: "Permissions & Multi-Tenancy" },
          { label: "Applies", value: "Where a client requires it" },
          { label: "Part of", value: "Multi-tenant configurations" },
          { label: "Overview", value: "Multi-Tenant Digital Asset Management" },
        ],
        actions: [{ kind: "route", path: "/permissions", label: "More in Permissions & Multi-Tenancy" }]
      },
      sources: [{ kind: "pdf", page: 164 }, { kind: "pdf", page: 160 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "key-terms",
      eyebrow: "Key terms",
      heading: "Terms and questions behind per-client AI keys",
      items: [
        {
          heading: "AI key",
          summary: "A credential that authorises use of an AI service on behalf of an account.",
          icon: "key",
          body: [
            "Like any credential, an AI key is only as safe as the way it is handled. Whoever holds the key can use the service under the account it belongs to, which is why keys are shared as narrowly as possible and treated as confidential.",
          ],
        },
        {
          heading: "Key management",
          summary: "Everything that happens to a key over its life, from issue to replacement.",
          icon: "refresh",
          body: [
            "In general, key management covers who issues a key, where it is kept, who may use or change it, how it is replaced when someone leaves or a key is exposed, and how it is withdrawn when an agreement ends. Agreeing these points with a client matters as much as the key itself.",
          ],
        },
        {
          heading: "Client-specific",
          summary: "An arrangement that belongs to one client environment rather than to the platform as a whole.",
          icon: "building",
          body: [
            "In a multi-tenant setup, a client-specific arrangement is tied to that client’s environment rather than applied across every client the platform serves. That is what lets one client’s requirement be met without becoming everyone’s.",
          ],
        },
        {
          heading: "Keys and human control are separate questions",
          summary: "Which arrangement AI usage falls under is different from who decides what AI output is kept.",
          icon: "check",
          body: [
            [{ text: "AI-powered asset management", page: 45 }, " combines automated analysis with human approval, so teams retain control over what AI contributes to the library. A client concerned about accuracy is asking about that control, not about keys."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 164 }, { kind: "pdf", page: 45 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "settling",
      eyebrow: "Step by step",
      heading: "Settling AI key arrangements with a client",
      intro: "A general sequence for agencies; the details depend on each client’s own agreements.",
      steps: [
        { heading: "Ask at onboarding", body: "Raise the question of AI arrangements before any of the client’s material enters its library, not once work is under way.", icon: "help" },
        { heading: "Find the client’s position", body: "Establish whether the client has its own agreement for AI services, a policy on AI processing, or no requirement at all.", icon: "document" },
        { heading: "Decide what applies", body: "Where the client has no requirement, the question can be closed; where it does, client-specific key management is the route to discuss.", icon: "key" },
        { heading: "Agree responsibilities", body: "Settle who is responsible for the arrangement on each side, and whom to contact if it has to change.", icon: "users" },
        { heading: "Write it down", body: "Record the arrangement in the client’s onboarding notes or contract, so the next person on the account knows it exists.", icon: "book" },
        { heading: "Revisit at renewal", body: "Client policies on AI can change, so review the arrangement whenever the contract is renewed or the client updates its policy.", icon: "calendar" },
      ],
      sources: [{ kind: "pdf", page: 164 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A pharmaceutical client asks for its own AI arrangement",
      team: "A healthcare communications agency",
      situation: "A healthcare communications agency is onboarding a pharmaceutical client whose compliance team has approved a single agreement for AI services across the company’s content.",
      steps: [
        {
          heading: "The question is raised early",
          body: "During onboarding, before any assets are added, the agency asks how the client wants AI handled for its library.",
        },
        {
          heading: "The requirement is confirmed",
          body: "The client’s compliance team confirms that AI usage on its material must fall under the company’s own agreement.",
        },
        {
          heading: "An arrangement for this client alone",
          body: "The agency arranges key management specific to the pharmaceutical client’s environment, as the compliance team asked.",
        },
        {
          heading: "Other clients carry on unchanged",
          body: "The agency’s other client environments keep their existing arrangements and remain logically isolated from the new client’s library.",
        },
      ],
      outcome: "The client’s AI requirement is met within its own environment, the agency’s other clients see no change, and the arrangement is written into the account notes for the next renewal.",
      link: { page: 215, label: "GetSibu for Creative Agencies" },
      sources: [{ kind: "pdf", page: 164 }, { kind: "pdf", page: 161 }, { kind: "pdf", page: 215 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about per-client AI keys",
      items: [
        {
          question: "Who at a client usually raises AI key arrangements?",
          answer: "Often procurement, legal, compliance or IT colleagues, who hold the company’s agreements and policies on AI services, rather than the brand or marketing teams who use the library day to day.",
        },
        {
          question: "Is an AI key the same as the credentials developers use for the API?",
          answer: ["No. An AI key authorises use of an AI service; the credentials developers use to reach the GetSibu API are a separate matter, covered under ", { text: "developer authentication", page: 275 }, "."],
        },
        {
          question: "What should happen to a client’s AI key arrangement when the work ends?",
          answer: "Settle it in the contract rather than at the end: note whose agreement the key belongs to, and who confirms that the arrangement has been withdrawn once the work stops.",
        },
      ],
      sources: [{ kind: "pdf", page: 275 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on per-client configuration",
      variant: "compact",
      pages: [160, 163, 165, 45],
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
