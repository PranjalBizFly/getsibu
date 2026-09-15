/**
 * 330 · SOC 2 Readiness — /security/soc-2-readiness (HELD: soc2)
 *
 * Angle (cluster: compliance): what SOC 2 and a Type II report are, what a readiness position does and does not
 * mean, and the three control areas the PDF names (access, auditability, tenant isolation). page 328 and
 * page 329 own legal and contractual questions. States the claim only in PDF 330 wording:
 * never a badge, never an upgrade from "ready", no scope, dates or examining firms.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "General explanation of SOC 2 reporting; states no GetSibu capability or report beyond the cited pages." } as const;

const page: PageContent = {
  page: 330,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Security",
      lede: "What SOC 2 and a Type II report are, what it means for a security architecture to be positioned as ready for one, and how to read a readiness statement without mistaking it for a finished report.",
      visual: { diagram: "control-map" },
      actions: [
        { kind: "global", cta: "primary" },
        { kind: "route", path: "/security", label: "More in Security" },
      ],
      sources: [{ kind: "pdf", page: 330 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "An architecture prepared for independent examination",
      body: [
        "GetSibu positions its security architecture as SOC 2 Type II ready, including controls related to access, auditability and tenant isolation. SOC 2 is a widely used framework for reporting on the controls a service organisation operates to protect the information it holds for its customers.",
        "Ready describes preparation. A readiness position says an architecture was built with the framework’s expectations in mind; it is not a report, and it should not be read as one. What a customer can rely on at any moment is the specific status a provider states when asked.",
        [
          "SOC 2 examinations are organised around trust services criteria: security, availability, processing integrity, confidentiality and privacy. Security is always part of the examination, and the others are included where they matter to the service. The security criteria alone reach well beyond access and records, into areas such as risk assessment, change management and incident response. Within the platform itself, ",
          { text: "GetSibu security", page: 321 },
          " is built into the architecture through encryption, authentication, access control, tenant isolation and audit logging.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["A report on a service’s controls", "Design at a date, operation over a period", "Readiness is not a report", "Access, auditability and tenant isolation", "Trust services criteria"],
      },
      highlight: {
        heading: "In practice",
        body: "A procurement questionnaire asks for a SOC 2 Type II report. An accurate reply keeps what a provider is positioned as ready for apart from any report that exists, so the buyer’s file records the real status.",
        tags: ["Procurement", "Security reviews", "IT"],
      },
      glance: {
        heading: "SOC 2 readiness in brief",
        facts: [
          { label: "Area", value: "Security" },
          { label: "Positioning", value: "SOC 2 Type II ready" },
          { label: "Controls named", value: "Access, auditability and tenant isolation" },
          { label: "Wider design", value: "GetSibu Security", page: 321 },
        ],
      },
      sources: [{ kind: "pdf", page: 330 }, { kind: "pdf", page: 321 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "report-types",
      eyebrow: "Two kinds of report",
      heading: "What separates a Type I report from a Type II report",
      columns: ["Type I report", "Type II report"],
      rows: [
        ["Question answered", "Are the controls suitably designed?", "Did the controls also operate effectively?"],
        ["Time covered", "A single date", "A period of operation"],
        ["Evidence examined", "How controls are described and designed", "Design, plus testing of controls in use over the period"],
        ["What it tells a customer", "Intended safeguards exist in the design", "Safeguards were followed consistently in practice"],
        ["Where it tends to fit", "An early step for a newer service", "Continuing assurance for customers who depend on the service"],
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "layers",
      id: "control-areas",
      eyebrow: "What the positioning names",
      heading: "The three control areas the readiness statement names",
      layers: [
        {
          label: "Access",
          body: "Examinations look at how a service decides who can reach systems and data, and how that access is granted and withdrawn. In GetSibu, role-based access control limits what users can perform according to their organisational responsibilities, and new folders can remain private until access is explicitly granted.",
          page: 325,
        },
        {
          label: "Auditability",
          body: "Examinations need evidence that important activity is recorded and can be looked at later. GetSibu audit logs keep a historical record of important actions, from permission changes and comments to asset changes and other platform events.",
          page: 326,
        },
        {
          label: "Tenant isolation",
          body: "For a service shared by many customers, an examination considers how one customer’s data is kept away from another’s. The GetSibu architecture is designed around tenant-scoped data access, with each organisation isolated.",
          page: 324,
        },
      ],
      sources: [{ kind: "pdf", page: 330 }, { kind: "pdf", page: 325 }, { kind: "pdf", page: 154 }, { kind: "pdf", page: 326 }, { kind: "pdf", page: 324 }, { kind: "pdf", page: 160 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "reading-readiness",
      eyebrow: "Before you rely on it",
      heading: "How to read a readiness statement carefully",
      items: [
        {
          heading: "Ask for the current status",
          summary: "Whether a report exists is a question with a plain, factual answer.",
          icon: "flag",
          body: [
            "A report exists only after an independent firm has examined the controls and, for Type II, tested them across a period. When a purchasing or client decision depends on a report, ask directly whether one exists, which period it covers and when the answer was last confirmed.",
          ],
        },
        {
          heading: "Scope decides what a report says",
          summary: "A report covers a defined system and set of criteria, not everything a provider does.",
          icon: "compass",
          body: [
            "Every SOC 2 report describes the system that was examined and the criteria applied to it. Parts of a service can fall outside that description, so reading it is how a reviewer learns whether the part they care about was included at all.",
          ],
        },
        {
          heading: "Customers keep controls of their own",
          summary: "Reports set out responsibilities that remain with the customer.",
          icon: "users",
          body: [
            [
              "SOC 2 reports commonly list complementary controls that customers are expected to operate, such as managing their own users and reviewing who has access. Sound design on the provider’s side does nothing for an organisation that shares logins or never removes leavers, which is where ",
              { text: "creative access governance", page: 159 },
              " helps organisations maintain control over sensitive creative content.",
            ],
          ],
        },
        {
          heading: "Suppliers further down the chain",
          summary: "The services a provider relies on can matter as much as the provider.",
          icon: "network",
          body: [
            "Hosting and other supporting services may be included in a report or carved out of it and covered by assurance of their own. A reviewer should know which suppliers are relevant and what evidence exists for each.",
          ],
        },
        {
          heading: "Assurance describes the past",
          summary: "Even a Type II report covers a period that has already closed.",
          icon: "history",
          body: [
            "Controls can change once a report period ends. A report is strongest as one input among several, read together with current documentation, direct questions to the provider and whatever testing the customer can do itself.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 159 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about SOC 2 readiness",
      items: [
        {
          question: "Is SOC 2 a certification?",
          answer: "No. A SOC 2 examination produces an attestation report written by an independent firm, not a certificate or a pass mark. That is why the exact wording matters: readiness, a Type I report and a Type II report each mean something different.",
        },
        {
          question: "Who in an organisation should read a provider’s SOC 2 materials?",
          answer: "Security or IT normally leads, with procurement and the owner of the creative library taking part. The security reviewer studies scope and exceptions; the library owner checks the customer responsibilities the organisation will have to carry out.",
        },
        {
          question: "Why do agency clients ask about SOC 2 readiness?",
          answer: [
            "Clients handing unreleased work to an agency want assurance about every service that will hold it, and separation from other clients is a natural first question. ",
            { text: "Client tenant isolation", page: 161 },
            " describes how each client environment can remain logically isolated from the rest.",
          ],
        },
        {
          question: "Does SOC 2 readiness on its own make a creative library secure?",
          answer: "It is useful evidence about how controls were designed. Security still depends on how those controls are used day to day, including by the customer’s own people, and on questions the framework does not examine in depth.",
        },
      ],
      sources: [{ kind: "pdf", page: 330 }, { kind: "pdf", page: 161 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on the controls a security review examines",
      variant: "compact",
      pages: [321, 325, 326, 324, 161, 159],
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
