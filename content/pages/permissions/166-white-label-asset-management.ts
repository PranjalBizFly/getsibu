/**
 * 166 · White-Label Asset Management — /permissions/white-label-asset-management
 *
 * Angle (cluster: multi-tenancy): the white-label approach for client-facing asset management experiences —
 * what the approach is, why agencies want it and what to confirm before offering it. PDF wording only:
 * no domains, logos, theming or branding controls are described, and nothing is said about how clients sign in
 * or what they can do inside the experience.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of the white-label idea and agency practice; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 166,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Permissions & Multi-Tenancy",
      lede: "What a white-label approach to client-facing asset management means for an agency, the reasons agencies consider one, and the questions to settle before describing it to a client.",
      visual: { diagram: "tenant-boundaries", focus: "tenants" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 166 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Asset management presented as part of the agency’s service",
      body: [
        "Agencies can use a white-label approach for client-facing asset management experiences in GetSibu. The idea is an old one in services: one company provides the underlying product, and another offers it to its own customers as part of what it delivers.",
        "For an agency, the client relationship is the business. Clients hire an agency for its judgement, its craft and its care with their brand. When a client-facing experience feels like a separate vendor’s product, it can read as a detour away from that relationship. In general, a white-label approach aims to keep the client’s attention on the agency and on the work rather than on the software in between.",
        [
          "White-label sits among the capabilities GetSibu describes for agency work. ",
          { text: "GetSibu for creative agencies", page: 215 },
          " covers agencies using multi-tenant capabilities to manage multiple clients while keeping their libraries separated, and ",
          { text: "client review", page: 72 },
          " covers client-specific libraries and review workflows. Agencies tend to weigh all three together when deciding how to run a client relationship.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["A white-label approach for agencies", "Experiences that face the client", "The agency’s relationship kept in front", "Presentation distinct from separation", "One consistent offer across accounts"],
      },
      highlight: {
        heading: "In practice",
        body: "An agency that looks after brand libraries for several retailers presents client-facing asset management as part of its own service, while every retailer’s library stays in an environment of its own.",
        tags: ["Agencies", "Account teams", "Clients"],
      },
      glance: {
        heading: "White-label in brief",
        facts: [
          { label: "Area", value: "Permissions & Multi-Tenancy" },
          { label: "Used by", value: "Agencies" },
          { label: "Applies to", value: "Client-facing asset management experiences" },
          { label: "Wider topic", value: "Multi-Tenant Digital Asset Management", page: 160 },
        ],
        actions: [{ kind: "route", path: "/permissions", label: "More in Permissions & Multi-Tenancy" }]
      },
      sources: [{ kind: "pdf", page: 166 }, { kind: "pdf", page: 215 }, { kind: "pdf", page: 72 }, { kind: "pdf", page: 160 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "why-agencies",
      eyebrow: "Why it matters",
      heading: "Reasons agencies take a white-label approach",
      items: [
        {
          heading: "The relationship stays with the agency",
          summary: "Clients buy an agency’s service, and the tools around that service shape how it feels.",
          icon: "briefcase",
          body: [
            "Every touchpoint an agency offers says something about how it works. When client-facing asset management is presented as part of the agency’s own offering, the client can experience it as one continuous service rather than a hand-off to a company it has never dealt with.",
          ],
        },
        {
          heading: "One approach across every account",
          summary: "A repeatable client-facing experience is easier to run than a different improvised arrangement for each client.",
          icon: "layers",
          body: [
            [
              "When each client-facing arrangement is designed from scratch, every account team ends up explaining a different set-up, and winning a client means designing another. One approach, offered the same way to each client, gives account teams a single description to stand behind. On the library side, ",
              { text: "agency multi-tenancy", page: 162 },
              " lets agencies manage multiple client libraries from one platform while keeping tenants separate.",
            ],
          ],
        },
        {
          heading: "Less for busy client teams to get used to",
          summary: "People on the client side rarely want to think about which software their agency relies on.",
          icon: "users",
          body: [
            "Brand and marketing teams at a client are busy, and many of them deal with their agency only now and then. Framing the experience around the agency they already know, rather than around an unfamiliar product, is one way to ask less of them.",
          ],
        },
        {
          heading: "Stewardship offered as a service",
          summary: "Some agencies look after a client’s library for years, not just for one campaign.",
          icon: "archive",
          body: [
            [
              "An agency that keeps a client’s brand material organised across many campaigns is providing a service in its own right, and a white-label approach can help it present that stewardship as its own. ",
              { text: "Agency efficiency", page: 354 },
              " is the operational side: managing multiple client libraries from a structured platform rather than separate, disconnected systems.",
            ],
          ],
        },
        {
          heading: "Presentation does not replace separation",
          summary: "How an experience looks to a client and how that client’s content is kept apart are two different questions.",
          icon: "shield",
          body: [
            [
              "A polished client-facing experience would mean little if client material were mixed together underneath it. ",
              { text: "Client asset isolation", page: 167 },
              " prevents unrelated customer libraries from being mixed within the same workflow, and ",
              { text: "per-client authentication", page: 165 },
              " options can support organisations that need separate access controls for different customers.",
            ],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 166 }, { kind: "pdf", page: 162 }, { kind: "pdf", page: 354 }, { kind: "pdf", page: 167 }, { kind: "pdf", page: 165 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "preparing",
      eyebrow: "Step by step",
      heading: "Preparing to offer a client-facing experience",
      intro: "A general sequence for agencies deciding whether, and for which clients, to take a white-label approach.",
      steps: [
        { heading: "Choose the accounts", body: "Not every relationship calls for a client-facing experience, so start with the clients who expect one rather than offering it to every account by default.", icon: "briefcase" },
        { heading: "Ask what the client expects", body: "Find out what the client hopes a client-facing experience will give it, and whether its brand or security policies set conditions, before anything is promised.", icon: "help" },
        { heading: "Organise the client’s workspace", body: "Client-specific workspaces help agencies organise and isolate customer content; settling that organisation early avoids tidying up once the relationship is under way.", icon: "folder", page: 177 },
        { heading: "Write down what is offered", body: "Record what the agency offers each client, so every account team describes it in the same words and a new team member can pick it up quickly.", icon: "document" },
        { heading: "Revisit as the account changes", body: "Look at the arrangement again when the client’s circumstances shift, such as after a rebrand, a merger or the launch of a new line of business.", icon: "refresh" },
      ],
      sources: [{ kind: "pdf", page: 177 }, { kind: "pdf", page: 166 }, EXPLAINS],
    },
    {
      kind: "checklist",
      id: "confirm",
      eyebrow: "What to weigh",
      heading: "What to confirm when evaluating a white-label approach",
      variant: "chips",
      items: [
        "Which clients need a client-facing experience",
        "How each client environment stays isolated",
        "Each client’s access control requirements",
        "Who maintains each client library",
        "What procurement reviews will ask about suppliers",
        "How the offer is described in contracts",
        "Which account teams present the experience",
      ],
      sources: [{ kind: "pdf", page: 166 }, { kind: "pdf", page: 161 }, { kind: "pdf", page: 165 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about white-label asset management",
      items: [
        {
          question: "Which parts of a client-facing experience does the white-label approach cover?",
          answer: "Treat that as a question for your evaluation. Agencies often assume a white-label offer matches ones they have met elsewhere, and confirming the specifics first avoids promising a client something that is not part of it.",
        },
        {
          question: "Should an agency tell clients which platform sits behind the experience?",
          answer: "That is a matter for the agency’s contracts and its honesty with clients. Procurement and security reviews often ask which suppliers handle a client’s material, so agree internally how you will answer before offering a white-label experience.",
        },
        {
          question: "When might an agency not need a white-label approach?",
          answer: "When a client deals with its agency only through finished deliverables, how a client-facing experience is presented may never come up. The approach earns its place in relationships where a client-facing experience is part of what the client expects.",
        },
      ],
      sources: [{ kind: "pdf", page: 166 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on client-facing and multi-client work",
      variant: "compact",
      pages: [160, 167, 177, 165, 162, 215],
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
