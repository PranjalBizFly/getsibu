/**
 * 277 · API Security — /developers/api-security
 *
 * Angle (cluster api-security, primary): why protecting automated access to creative assets needs its own thinking —
 * what is different about software reaching a library, how an organisation approves an integration's access, and a
 * sensitive launch as an example. 256 (authentication), 275 (credentials) and 276 (tenant context) own the parts.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of securing automated access in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 277,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "API & Developers",
      lede: "Why automated access to creative assets calls for security thinking of its own, which GetSibu protections it rests on, and how an organisation can decide what an integration should be allowed to reach.",
      visual: { diagram: "api-flow", focus: "auth" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 277 }, { kind: "pdf", page: 321 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "When software, not a person, reaches the library",
      body: [
        "API security is an important component of protecting automated access to creative assets. Whenever software reaches the library in place of a person, the protections around that access decide whether an integration stays a convenience or becomes a way in.",
        "Creative assets are easy to underestimate as a security concern. An unreleased campaign, a product photographed before launch or footage under embargo can be commercially sensitive for a period, and once seen it cannot be unseen. Integrations add routes to that material that nobody watches as they are used, often with generous access because generous access was quicker to set up.",
        [
          "In GetSibu, ",
          { text: "security is built into the architecture", page: 321 },
          " through encryption, authentication, access control, tenant isolation and audit logging, and ",
          { text: "creative security controls", page: 174 },
          " help protect creative assets from unnecessary or unauthorised access.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Protecting automated access", "Routes nobody watches", "Sensitive work before release", "Access sized to the task", "Protections in several layers"],
      },
      highlight: {
        heading: "In practice",
        body: "Before connecting a supplier’s tool, a brand’s IT lead asks which outside components it is built from, as well as what it is for.",
        tags: ["IT", "Brand teams", "Security"],
      },
      glance: {
        heading: "API security in brief",
        facts: [
          { label: "Area", value: "API & Developers" },
          { label: "Protects", value: "Automated access to creative assets" },
          { label: "Part of", value: "GetSibu Security", page: 321 },
          { label: "Credentials", value: "Developer Authentication", page: 275 },
        ],
        actions: [{ kind: "route", path: "/developers", label: "More in Developers" }]
      },
      sources: [{ kind: "pdf", page: 277 }, { kind: "pdf", page: 321 }, { kind: "pdf", page: 174 }, { kind: "pdf", page: 275 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "different",
      eyebrow: "Why it differs",
      heading: "What sets automated access apart from people using a library",
      items: [
        {
          heading: "Nobody notices in the moment",
          summary: "A colleague browsing strangely might be questioned; a script is not.",
          icon: "eye",
          body: ["People notice when someone opens folders they never normally use. Software doing the same raises no eyebrows, so unusual automated behaviour has to be caught by design rather than by chance."],
        },
        {
          heading: "Reach and pace",
          summary: "Software can reach far more material, far faster, than any person.",
          icon: "gauge",
          body: ["A misconfigured or compromised integration can read or change a great deal before anyone looks. A mistake a person might make once, software can repeat across a whole library in a very short time."],
        },
        {
          heading: "Code written by others",
          summary: "Integrations usually depend on software the organisation did not write.",
          icon: "code",
          body: ["Open-source libraries, plug-ins and outside services built into an integration all run with its access. Knowing what an integration is made of is part of knowing what could misuse it."],
        },
        {
          heading: "Boundaries between clients",
          summary: "Automated access must respect the same boundaries as people do.",
          icon: "building",
          body: [["For agencies and groups with several environments, a slip in software could expose one client’s work to another. ", { text: "API tenant isolation", page: 276 }, " explains how tenant context keeps multi-tenant environments separated."]],
        },
        {
          heading: "Secrets as targets",
          summary: "The credentials an integration relies on are valuable in their own right.",
          icon: "key",
          body: [["Whoever holds them can act as the integration. GetSibu can keep sensitive credentials in ", { text: "encrypted secret storage", page: 323 }, ", and the same seriousness belongs wherever integrations keep their own."]],
        },
      ],
      sources: [{ kind: "pdf", page: 276 }, { kind: "pdf", page: 323 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "approving",
      eyebrow: "Step by step",
      heading: "Approving an integration’s access to the library",
      intro: "A short, repeatable sequence keeps approval consistent however many integrations an organisation runs.",
      steps: [
        { heading: "State the purpose", body: "Write down what the integration is for and which team depends on it, in terms a non-developer would recognise.", icon: "flag" },
        { heading: "Weigh what it could reach", body: "Identify the most sensitive material the integration could come near, not only the material it is meant to use, and decide whether that exposure is acceptable.", icon: "filter" },
        { heading: "Settle its credentials", body: "Agree how requests will be authenticated with supported credentials and who is responsible for keeping them safe.", icon: "key", page: 275 },
        { heading: "Confirm its environment", body: "Where several isolated environments exist, make sure the integration’s access carries the tenant context it needs.", icon: "building" },
        { heading: "Record the decision", body: "Add the integration to the organisation’s list of connected software, noting its purpose, its owner and the material it was approved to use.", icon: "calendar" },
      ],
      sources: [{ kind: "pdf", page: 275 }, { kind: "pdf", page: 276 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "An embargoed launch and a partner’s request for access",
      team: "A brand team",
      situation: "A consumer brand is preparing a product launch under embargo. A partner agency asks for an integration so its own tools can use the launch imagery.",
      steps: [
        { heading: "Sensitivity comes first", body: "The brand’s IT lead notes that the imagery would cause real harm if seen early, so the question is not only what the partner needs but when it needs it." },
        { heading: "Timing shapes the plan", body: "The team agrees the integration will be switched on only after the embargo lifts, instead of being connected early and trusted to wait." },
        { heading: "Folders stay private", body: ["Until launch, the imagery sits in folders that remain private to the core team, since ", { text: "default-deny access", page: 154 }, " means new folders can stay private until access is explicitly granted."] },
        { heading: "Changes are checked", body: ["Shortly before launch, the team reviews ", { text: "audit logs", page: 326 }, ", a historical record of important actions including permission changes, to confirm nobody widened access unexpectedly."] },
        { heading: "Ownership is shared", body: "The integration is given an owner at the brand and another at the agency, so either side can raise a concern about it." },
      ],
      outcome: "The partner receives what the launch requires once it is public, and no outside tool was connected to the imagery before then.",
      link: { page: 214, label: "GetSibu for Brand Teams" },
      sources: [{ kind: "pdf", page: 154 }, { kind: "pdf", page: 326 }, { kind: "pdf", page: 170 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about API security",
      items: [
        {
          question: "Is API security only the responsibility of developers?",
          answer: "No. Developers build integrations securely, but deciding what an integration should reach, and whether it should exist at all, belongs to the people responsible for the material and for the organisation’s security.",
        },
        {
          question: "Do integrations built in-house need the same scrutiny as those from suppliers?",
          answer: "Yes. An internal tool reaches the same material and is often the one built fastest and documented least, so it deserves the same approval steps as anything a supplier provides.",
        },
        {
          question: "How often should the integrations that reach a GetSibu library be reviewed?",
          answer: "Whenever a workflow, supplier or owner changes, and at regular intervals in between. A review that removes nothing is still worthwhile, because it confirms each connection still has a current purpose.",
        },
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on securing automated access",
      variant: "compact",
      pages: [321, 256, 275, 276, 323, 154],
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
