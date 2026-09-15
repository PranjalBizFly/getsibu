/**
 * 346 · DAM Pricing for Agencies — /pricing/dam-pricing-for-agencies
 *
 * Angle (cluster: pricing-plans): the four factors an agency can evaluate GetSibu on (clients, users, storage
 * requirements, multi-tenant needs), described client by client for a roster that keeps changing. No plans, prices or
 * figures. Agency Multi-Tenancy (162) owns running client libraries; Per-Client Storage (163) owns storage by client
 * type; Creative Team Pricing (345) owns a single team's library and collaboration.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Practical guidance on how an agency can describe its needs before a pricing conversation; states no GetSibu capability beyond the cited pages, names no plan or price and supplies no figures." } as const;

const page: PageContent = {
  page: 346,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "centered",
      eyebrow: "Pricing",
      lede: "The factors an agency can use to evaluate a creative asset platform, what to establish about each before a pricing conversation, and why a client roster that keeps changing belongs in the description.",
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 346 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "An agency’s needs are counted client by client",
      body: [
        "Agencies can evaluate GetSibu based on the number of clients, users, storage requirements and multi-tenant needs. Each factor is a question about the agency’s client portfolio rather than about the agency as a single organisation.",
        "An in-house team describes one library. An agency describes several at once, and they rarely look alike: a long-standing client with years of footage, a new client with little more than a brand kit, a client whose security team has firm views on how people sign in. The roster also changes as pitches are won and accounts end, so an evaluation that only describes today’s clients captures a moment rather than the business.",
        [
          "Behind the multi-tenant factor sits a design intended for agencies. ",
          { text: "Agency multi-tenancy", page: 162 },
          " lets agencies manage multiple client libraries from one platform while maintaining separation between tenants, and ",
          { text: "agency efficiency", page: 354 },
          " describes the benefit of a structured platform over separate disconnected systems.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Clients now and clients ahead", "People mapped to accounts", "Storage that differs by client", "Conditions some clients bring", "A roster that keeps changing"],
      },
      highlight: {
        heading: "In practice",
        body: "An agency sorts its clients into rough groups, heavy video, mainly images and mainly documents, before any pricing conversation, and finds that its storage needs are concentrated in its production clients.",
        tags: ["Agencies", "Account planning"],
      },
      glance: {
        heading: "Agency pricing factors in brief",
        facts: [
          { label: "Area", value: "Pricing" },
          { label: "Evaluated on", value: "Clients, users, storage requirements and multi-tenant needs" },
          { label: "Built on", value: "Multi-Tenant Digital Asset Management", page: 160 },
          { label: "For single teams", value: "Creative Team Pricing", page: 345 },
        ],
        actions: [{ kind: "route", path: "/pricing", label: "More in Pricing" }]
      },
      sources: [{ kind: "pdf", page: 346 }, { kind: "pdf", page: 162 }, { kind: "pdf", page: 354 }, { kind: "pdf", page: 160 }, { kind: "pdf", page: 345 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "factors",
      eyebrow: "Evaluation factors",
      heading: "What to establish for each agency evaluation factor",
      items: [
        {
          heading: "Number of clients",
          summary: "Count the clients the library must serve, and the ones it is likely to serve next.",
          icon: "briefcase",
          body: [
            "Start with active clients, then add those being pitched or brought on board, and those whose work must be kept even though the relationship has ended. Former clients matter because their material often has to remain available for a period set out in a contract.",
            "Note, too, which clients need entirely separate libraries and which belong together, such as several brands owned by one parent company.",
          ],
          points: ["Active, incoming and former clients", "Clients that belong together"],
        },
        {
          heading: "Users",
          summary: "Describe who works in each client’s library, not only how many people the agency employs.",
          icon: "users",
          body: [
            "Agency staff rarely work on every account. Map the account, creative and production people attached to each client, and the studio teams that move between clients.",
            [
              "The same map helps later with access. ",
              { text: "Client workspace access", page: 177 },
              " uses client-specific workspaces to help agencies organise and isolate customer content, which is far easier to set up when it is already clear who works on which account.",
            ],
          ],
          points: ["People attached to each account", "Studio teams shared between clients"],
        },
        {
          heading: "Storage requirements",
          summary: "Estimate storage client by client, because clients differ far more than an agency average suggests.",
          icon: "database",
          body: [
            "A single production client can need more space than several clients working mainly in documents. Group clients by the material they produce, note which have long archives, and ask how much of each archive genuinely needs to come across.",
            [
              "On the platform side, ",
              { text: "per-client storage", page: 163 },
              " gives each client environment its own asset boundaries.",
            ],
          ],
          points: ["Clients grouped by material", "Archives trimmed before moving"],
        },
        {
          heading: "Multi-tenant needs",
          summary: "List the requirements that make one client’s environment different from another’s.",
          icon: "layers",
          body: [
            [
              "Some clients only need their material kept apart. Others bring conditions of their own, which can include ",
              { text: "client-specific AI key management", page: 164 },
              " where required, ",
              { text: "client-specific authentication options", page: 165 },
              ", or a ",
              { text: "white-label approach", page: 166 },
              " for client-facing asset management experiences.",
            ],
            "Recording these conditions per client early prevents familiar mistakes: assuming every client needs the same arrangement, and discovering an unusual requirement only when a client’s security team asks about it.",
          ],
          points: ["Separation for every client", "Extra conditions for some"],
        },
      ],
      sources: [{ kind: "pdf", page: 346 }, { kind: "pdf", page: 177 }, { kind: "pdf", page: 163 }, { kind: "pdf", page: 164 }, { kind: "pdf", page: 165 }, { kind: "pdf", page: 166 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "An agency describes its roster before evaluating a platform",
      team: "An integrated creative agency",
      situation: "An integrated agency keeps client work on shared drives, in a separate system built for one large client and in a folder structure nobody fully understands. Before any talk of pricing, its operations director wants a written description of what the agency actually needs.",
      steps: [
        { heading: "Clients are listed in groups", body: "The director lists active clients, clients being brought on board and former clients whose work must be kept, and marks the brands that share a parent company." },
        { heading: "People are mapped to accounts", body: "Each account lead names their client team, and the studio manager adds everyone who works across several accounts, which turns a single headcount into a picture of who really needs what." },
        { heading: "Storage is estimated per client", body: "Production-heavy clients are separated from those working mainly in documents, and each archive is trimmed to what the agency is obliged, or wants, to keep." },
        { heading: "Client conditions are recorded", body: ["The large client expects its work to be kept strictly apart from every other client, which the director notes against ", { text: "client tenant isolation", page: 161 }, ", where each client environment can remain logically isolated."] },
        { heading: "The description leads the conversation", body: "The agency begins the pricing discussion with its needs written down, so every answer can be checked against its own situation." },
      ],
      outcome: "The agency enters the pricing discussion knowing which clients drive its needs, including the clients it expects to win and the archives it has to keep.",
      link: { page: 215, label: "GetSibu for Creative Agencies" },
      sources: [{ kind: "pdf", page: 346 }, { kind: "pdf", page: 161 }, { kind: "pdf", page: 215 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "checklist",
      id: "weigh",
      eyebrow: "What to weigh",
      heading: "What to weigh before an agency pricing conversation",
      variant: "chips",
      items: ["Clients typically won and lost", "Former clients whose work must stay", "Accounts sharing a parent company", "Clients whose archives must come across", "Clients with heavy video archives", "Clients with their own security rules", "Clients expecting their own branding", "Brands that may need separate environments"],
      sources: [{ kind: "pdf", page: 346 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about DAM pricing for agencies",
      items: [
        {
          question: "How should an agency account for a changing client roster when evaluating DAM pricing?",
          answer: "Describe the roster over a realistic planning horizon rather than a single day: the clients typically won, the accounts typically ending and the work that must be kept afterwards. Then ask how adding and closing client environments would be handled.",
        },
        {
          question: "Is multi-tenant asset management worth considering for a small agency?",
          answer: [
            "Often, if its clients must be kept strictly apart or bring conditions of their own. The need for separation begins as soon as one client’s work must never mix with another’s, and ",
            { text: "client asset isolation", page: 167 },
            " prevents unrelated customer libraries from being mixed within the same workflow.",
          ],
        },
        {
          question: "Should brands owned by the same parent company share an environment?",
          answer: [
            "Not necessarily. Shared ownership suggests they belong together, but check whether each brand’s agreements or confidentiality needs call for separation. Where they do not, one environment with ",
            { text: "folder-level permissions", page: 152 },
            " between the brands can be simpler to run.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 346 }, { kind: "pdf", page: 167 }, { kind: "pdf", page: 152 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More for agencies weighing a creative asset platform",
      variant: "compact",
      pages: [162, 160, 163, 215, 354, 345],
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
