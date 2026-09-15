/**
 * 329 · Data Processing Agreement — /security/data-processing-agreement (HELD: dpa)
 *
 * Angle (cluster: compliance): what a data processing agreement is, what it usually sets out and how to prepare for
 * one when a creative library holds personal data. page 328 owns the regulation and its named controls and
 * is not named here; page 330 owns attestation. States the claim only in PDF 329 wording; no legal advice.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "General explanation of data-processing arrangements; not legal advice, and states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 329,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Security",
      lede: "What a data processing agreement is, why organisations ask their service providers for one, what such an agreement usually sets out, and how to prepare before arranging one for a creative library.",
      visual: { diagram: "tenant-boundaries", focus: "tenants" },
      actions: [
        { kind: "global", cta: "primary" },
        { kind: "route", path: "/security", label: "More in Security" },
      ],
      sources: [{ kind: "pdf", page: 329 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A written basis for trusting a provider with personal data",
      body: [
        "The platform provides DPA support for organisations requiring formal data-processing arrangements. A data processing agreement, or DPA, is a contract between an organisation that decides how personal data is used and a provider that handles that data on its behalf. It sets out what the provider may do with the data and what it must do to protect it.",
        "Data protection laws in many jurisdictions expect that relationship to be put in writing. A creative library can hold photographs of people, signed releases, contributor details and user accounts, and the organisation stays answerable for that information even while a provider stores and processes it. The agreement records how the provider will support the organisation in meeting that responsibility.",
        [
          "Commitments on paper are worth reading beside evidence of how a platform behaves. In GetSibu, ",
          { text: "RBAC security", page: 325 },
          " limits what users can perform according to their organisational responsibilities, and ",
          { text: "audit logs", page: 326 },
          " provide a historical record of important actions.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Controller and processor roles", "Instructions the provider must follow", "Security measures set down in writing", "Sub-processors further down the chain", "Deletion or return when the service ends"],
      },
      highlight: {
        heading: "In practice",
        body: "An agency about to keep a client’s talent releases in its asset library is asked which providers will handle that data, and on what written terms. Answering begins with the agency knowing where it sits in the chain itself.",
        tags: ["Agencies", "Legal", "Procurement"],
      },
      glance: {
        heading: "DPA support in brief",
        facts: [
          { label: "Area", value: "Security" },
          { label: "Provides", value: "DPA support" },
          { label: "For", value: "Organisations requiring formal data-processing arrangements" },
          { label: "Rules for data", value: "Creative Data Governance", page: 339 },
        ],
      },
      sources: [{ kind: "pdf", page: 329 }, { kind: "pdf", page: 325 }, { kind: "pdf", page: 326 }, { kind: "pdf", page: 339 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "contents",
      eyebrow: "Typical contents",
      heading: "What a data processing agreement usually sets out",
      items: [
        {
          heading: "The processing itself",
          summary: "Which data is handled, whom it concerns, why, and for how long.",
          icon: "document",
          body: [
            "Agreements typically describe the subject matter and duration of the processing, its nature and purpose, the types of personal data involved and the categories of people it relates to. For a creative library that could mean images and footage of talent, details of contributors and the accounts of the organisation’s own users.",
          ],
        },
        {
          heading: "Documented instructions",
          summary: "The provider acts on the customer’s directions, not for purposes of its own.",
          icon: "check",
          body: [
            "A central commitment is that the provider processes personal data only on the customer’s documented instructions. Using the data for anything else, such as the provider’s own projects, would fall outside the agreement.",
          ],
        },
        {
          heading: "Confidentiality and security measures",
          summary: "People with access are bound to confidentiality, and the protections are described.",
          icon: "lock",
          body: [
            "Agreements commonly require the people who handle the data to be bound by confidentiality, and they describe the technical and organisational measures that protect it: limits on access, separation between customers, records of important actions and similar controls.",
            "A description is only as good as the controls behind it, which is why reviewers ask how each measure works in practice.",
          ],
        },
        {
          heading: "Sub-processors",
          summary: "Other services the provider relies on are approved and bound by the same terms.",
          icon: "network",
          body: [
            "Providers often depend on other services, for hosting for example. An agreement normally explains how such sub-processors are approved, how customers hear about changes to them and how equivalent obligations pass down the chain.",
          ],
        },
        {
          heading: "Requests and incidents",
          summary: "The provider helps when people exercise their rights or when something goes wrong.",
          icon: "help",
          body: [
            "If someone asks to see or remove their personal data, the customer may need the provider’s help to answer. Agreements also say how the provider will inform the customer of a personal data breach, so the customer can meet its own obligations in time.",
          ],
        },
        {
          heading: "The end of the service",
          summary: "Personal data is returned or deleted when the relationship ends.",
          icon: "archive",
          body: [
            "When a service ends, the customer usually chooses whether personal data is returned or deleted, unless the law requires it to be kept. For a creative library the question is practical as well as legal, because the organisation will still need its assets afterwards.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 329 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "preparing",
      eyebrow: "Step by step",
      heading: "Preparing to arrange data-processing terms",
      intro: "A general sequence for any organisation agreeing terms with an asset management provider.",
      steps: [
        { heading: "Map the personal data", body: "List the personal data the library will hold, from images of people to user accounts, so the agreement describes processing that will really happen.", icon: "map" },
        { heading: "Settle the roles", body: "Work out who decides how the data is used and who processes it for them, including where an agency handles a client’s material through a provider of its own.", icon: "users" },
        { heading: "Take advice on the terms", body: "Ask a legal or data protection adviser to check the agreement against your obligations and your existing contracts with clients and talent.", icon: "document" },
        { heading: "Compare terms with controls", body: "Set the security measures the agreement describes against what the platform demonstrably provides, such as separation between customers and limits on access.", icon: "shield" },
        { heading: "Keep it current", body: "File the signed agreement with your records of processing, and revisit it when the library, the provider’s sub-processors or the law change.", icon: "refresh" },
      ],
      sources: [{ kind: "pdf", page: 329 }, EXPLAINS],
    },
    {
      kind: "checklist",
      id: "have-ready",
      eyebrow: "What to weigh",
      heading: "What to have ready before requesting a DPA",
      variant: "chips",
      items: [
        "People the data concerns",
        "Purpose of each use",
        "Places data may be transferred",
        "How long material is kept",
        "A named data protection contact",
        "Existing talent and client contracts",
      ],
      sources: [{ kind: "pdf", page: 329 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about data processing agreements",
      items: [
        {
          question: "Does a data processing agreement transfer responsibility for personal data to the provider?",
          answer: "No. The organisation that decides how personal data is used remains responsible for that decision. The agreement records what its provider has undertaken to do, which helps the organisation meet its responsibilities without handing them over.",
        },
        {
          question: "Do agencies need data-processing terms with clients as well as with providers?",
          answer: "Frequently. An agency handling a client’s personal data on that client’s behalf may be processing it for the client, while the agency’s own providers process it further down the chain. Each link can need terms of its own, so take legal advice on your particular arrangements.",
        },
        {
          question: "When should a DPA be arranged for a creative library?",
          answer: [
            "Before personal data goes in, not after a migration has finished. ",
            { text: "Digital asset migration planning", page: 290 },
            " is a natural moment to raise it, because assets, metadata and permissions are considered there before the transfer begins.",
          ],
        },
        {
          question: "Is a DPA enough evidence for a security review of an asset platform?",
          answer: [
            "It shows what a provider has committed to, not how well the commitments are met. Pair it with evidence about the controls themselves, such as how ",
            { text: "tenant isolation", page: 324 },
            " in GetSibu is designed around tenant-scoped data access.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 290 }, { kind: "pdf", page: 324 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on the controls behind data-processing terms",
      variant: "compact",
      pages: [324, 325, 326, 339, 290],
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
