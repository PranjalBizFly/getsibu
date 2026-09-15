/**
 * 276 · API Tenant Isolation — /developers/api-tenant-isolation
 *
 * Angle (clusters multi-tenancy, api-security): tenant context on API access, seen from the software that carries it —
 * integration designs for several tenants and the places tenant context gets lost in code. 324 owns tenant-scoped
 * data access as security architecture; 372 the concept of multi-tenant DAM.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of multi-tenant integration design in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 276,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "API & Developers",
      lede: "What tenant context on API access means for software working with multi-tenant GetSibu environments, how integration designs keep each environment apart, and where that context most often goes missing.",
      visual: { diagram: "api-flow", focus: "auth" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 276 }, { kind: "pdf", page: 160 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Automated access that stays within one environment",
      body: [
        "API access can include tenant context so that multi-tenant environments remain properly separated. Tenant context is the information that places a request within one isolated environment, so that work carried out by software can be kept to the right client’s library.",
        "People seldom mistake one client for another: they sign in, they see that client’s assets, and a mismatch would be obvious. Software has no such instinct. A script that ran correctly for one client will run just as confidently against the wrong one if its configuration says so, which is why separation for automated access has to be designed rather than assumed.",
        [
          "It is one expression of a broader design. ",
          { text: "Multi-tenant digital asset management", page: 160 },
          " is intended for organisations that need multiple isolated environments, and the ",
          { text: "GetSibu architecture is designed around tenant-scoped data access", page: 324 },
          ".",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Tenant context on API access", "Requests tied to one environment", "Software without human instinct", "Separation designed, not assumed", "Shared tools serving several clients"],
      },
      highlight: {
        heading: "In practice",
        body: "Before a shared tool goes live, an agency asks its developers to show where, for every request, the client environment is decided.",
        tags: ["Agencies", "Developers", "Security"],
      },
      glance: {
        heading: "API tenant isolation in brief",
        facts: [
          { label: "Area", value: "API & Developers" },
          { label: "Keeps separated", value: "Multi-tenant environments" },
          { label: "Wider design", value: "Multi-Tenant Digital Asset Management", page: 160 },
          { label: "Architecture", value: "Tenant Isolation", page: 324 },
        ],
        actions: [{ kind: "route", path: "/developers", label: "More in Developers" }]
      },
      sources: [{ kind: "pdf", page: 276 }, { kind: "pdf", page: 160 }, { kind: "pdf", page: 324 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "designs",
      eyebrow: "Two designs",
      heading: "A separate integration per tenant compared with one shared integration",
      intro: "Both designs can respect tenant boundaries; they place the work of doing so in different places.",
      columns: ["A separate integration for each tenant", "One integration serving several tenants"],
      rows: [
        ["Where separation lives", "In separate deployments and configuration", "In the tenant context of every request"],
        ["Adding a client", "Another copy to set up and maintain", "A new entry in shared configuration"],
        ["Risk of crossing environments", "Low, unless configuration is copied carelessly", "Higher, if any request loses its context"],
        ["Changing the integration", "Each copy updated in turn", "One change reaches every client"],
        ["Suits", "A few clients with very different needs", "Many clients sharing one workflow"],
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "accordion",
      id: "where-lost",
      eyebrow: "Considerations",
      heading: "Where tenant context goes missing in integration code",
      items: [
        {
          heading: "Defaults",
          summary: "A default environment is an accident waiting to happen.",
          icon: "flag",
          body: ["Code that falls back to a default tenant when none is supplied will one day send a request to the wrong place without complaint. Treat a missing tenant as an error, never as a reason to fall back."],
        },
        {
          heading: "Caches and stored copies",
          summary: "Remembered data must also remember whose it is.",
          icon: "database",
          body: ["An integration that keeps asset information to save time must label it by tenant. A cache keyed only by asset or file name can hand one client’s details to a request made on behalf of another."],
        },
        {
          heading: "Queued and scheduled work",
          summary: "Work that runs later still needs to know whom it runs for.",
          icon: "clock",
          body: ["A job queued during one client’s request may run much later, perhaps on a different machine. Store the tenant with the job itself instead of relying on whatever happened to be in memory when it was created."],
        },
        {
          heading: "Logs and error reports",
          summary: "Troubleshooting records can mix clients together.",
          icon: "audit",
          body: ["When logs from every tenant land in one place, an engineer investigating one client may read another client’s file names. Label entries by tenant and limit who can read across them."],
        },
        {
          heading: "Incoming messages",
          summary: "A message from a platform must be matched to its environment before anything happens.",
          icon: "webhook",
          body: [["A receiver serving several environments has to establish which one each message concerns before acting on it. ", { text: "Webhooks", page: 252 }, " explains in general terms how such deliveries reach receiving software."]],
        },
        {
          heading: "Copied configuration",
          summary: "Setting up a new client by copying an old one brings the old one along.",
          icon: "copy",
          body: ["Copying a working configuration is the quickest way to add a client and the easiest way to leave the previous client’s settings behind in it. Build each tenant’s configuration from a clean template and check it before first use."],
        },
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A new client joins an agency’s shared delivery tool",
      team: "An agency technology team",
      situation: "A creative agency runs several client libraries in GetSibu and has built one internal tool that sends finished work to each client’s environment. A new client is about to start.",
      steps: [
        { heading: "The environment is created", body: ["The client gets an environment of its own, since ", { text: "agency multi-tenancy", page: 162 }, " lets agencies manage multiple client libraries from one platform while keeping tenants separate."] },
        { heading: "Configuration starts clean", body: "The developers create the client’s configuration from a blank template instead of copying the most similar existing client." },
        { heading: "Requests carry the tenant", body: ["The developers make sure every delivery the tool sends through the ", { text: "asset upload API", page: 262 }, " includes the new client’s tenant context."] },
        { heading: "A mismatch is rehearsed", body: "Before launch, the team runs a delivery with the tenant deliberately left out and confirms that its own tool stops instead of guessing." },
        { heading: "The first deliveries are checked", body: "The account lead looks through the first deliveries in the new client’s library before telling the client the tool is ready." },
      ],
      outcome: "The client joins the shared tool without a separate deployment, and the agency can describe to the client how its tool keeps deliveries within the right environment.",
      link: { page: 215, label: "GetSibu for Creative Agencies" },
      sources: [{ kind: "pdf", page: 162 }, { kind: "pdf", page: 262 }, { kind: "pdf", page: 276 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about API tenant isolation",
      items: [
        {
          question: "Is API tenant isolation the same thing as folder-level permissions?",
          answer: ["No. Tenant context keeps whole environments apart, whereas ", { text: "folder-level permissions", page: 152 }, " allow access to be controlled at a more detailed level than organisation-wide access. The two work at different scales."],
        },
        {
          question: "Does an organisation with a single GetSibu library need to plan for API tenant isolation?",
          answer: "Less in everyday work, since every request belongs to the one environment. Plan for it anyway if separate client environments are likely later, because tenant context is far easier to design in from the start than to add to finished code.",
        },
        {
          question: "How does API tenant isolation relate to per-client authentication?",
          answer: ["They answer different questions. Tenant context concerns which environment a request belongs to, while ", { text: "per-client authentication", page: 165 }, " options can support organisations that need separate access controls for different customers."],
        },
      ],
      sources: [{ kind: "pdf", page: 152 }, { kind: "pdf", page: 165 }, { kind: "pdf", page: 276 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on keeping tenants apart",
      variant: "compact",
      pages: [160, 324, 162, 165, 277, 215],
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
