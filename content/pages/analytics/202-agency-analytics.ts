/**
 * 202 · Agency Analytics — /analytics/agency-analytics
 *
 * Angle (clusters: team-analytics, uc-agencies): what asset activity across client environments tells an agency
 * about its roster — relationship stages, resourcing and discretion. Claims nothing beyond "asset activity across
 * client environments" (no per-tenant breakdowns). GetSibu for Creative Agencies (215) owns running client libraries.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of agency account management practice; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 202,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Analytics",
      lede: "Understand asset activity across the client environments your agency runs, and use that perspective, together with what account teams know, when planning people and attention across the roster.",
      visual: { diagram: "library-activity", focus: "uploads" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 202 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Activity across a roster of separate client libraries",
      body: [
        "Agencies can use analytics in GetSibu to understand asset activity across client environments. The perspective belongs to the agency: not a single client’s library in isolation, but the whole set of environments it looks after.",
        "An agency’s workload seldom mirrors its client list. A retained client may generate modest, steady activity for years, a project client one short and intense burst, and a pitch a flurry that ends in a new account or in nothing. Without evidence, people and attention tend to follow the most urgent emails rather than the work the libraries actually record.",
        [
          "A view across clients depends on their libraries living on one platform. ",
          { text: "Agency collaboration", page: 84 },
          " lets agencies operate multiple client libraries through a multi-tenant environment, and ",
          { text: "agency efficiency", page: 354 },
          " comes from managing those libraries in a structured platform instead of separate, disconnected systems.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Activity across client environments", "Retainers, projects and pitches", "Resourcing that follows the work", "Client separation kept intact", "Insight handled with discretion"],
      },
      highlight: {
        heading: "In practice",
        body: "Before agreeing next season’s resourcing, an agency operations lead reviews asset activity across client environments with the account leads, rather than relying on which account feels busiest.",
        tags: ["Agency operations", "Resourcing", "Roster"],
      },
      glance: {
        heading: "Agency analytics in brief",
        facts: [
          { label: "Area", value: "Analytics" },
          { label: "Shows", value: "Asset activity across client environments" },
          { label: "Separation", value: "Agency Multi-Tenancy", page: 162 },
          { label: "Use case", value: "GetSibu for Creative Agencies", page: 215 },
        ],
        actions: [{ kind: "page", page: 181, label: "Creative Asset Analytics" }]
      },
      sources: [{ kind: "pdf", page: 202 }, { kind: "pdf", page: 84 }, { kind: "pdf", page: 354 }, { kind: "pdf", page: 162 }, { kind: "pdf", page: 215 }, EXPLAINS],
    },
    {
      kind: "timeline",
      id: "relationship-stages",
      eyebrow: "Across a client relationship",
      heading: "How asset activity changes over the life of a client account",
      items: [
        { label: "Pitch", body: "Work for a prospective client produces a short, concentrated burst of references, concepts and mood material. Whether any of it continues depends entirely on the result." },
        { label: "Onboarding", body: "A new client often arrives with an existing library, and large creative libraries can be migrated while preserving important metadata and folder relationships. Early activity may therefore reflect an import more than new creative work.", page: 131 },
        { label: "Campaigns", body: "Work rises and falls with the client’s calendar. Review can take place in the client-specific library, with different clients kept isolated from one another.", page: 72 },
        { label: "Steady service", body: "Between campaigns, activity settles into adaptations, updates and reuse of approved work. A calmer environment at this stage is normal rather than a warning sign." },
        { label: "Transition", body: "When an account changes scope or ends, activity winds down. What then happens to the client’s library is a matter for the agreement between the agency and its client." },
      ],
      sources: [{ kind: "pdf", page: 131 }, { kind: "pdf", page: 72 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "responsible-reading",
      eyebrow: "Considerations",
      heading: "Reading activity across clients responsibly",
      items: [
        {
          heading: "Activity is not account value",
          summary: "A quiet environment may belong to one of the agency’s most important relationships.",
          icon: "briefcase",
          body: [
            "A client that commissions a few substantial productions can generate far less library activity than one that orders a constant stream of small social assets. Use activity to plan effort, never to rank clients by importance.",
          ],
        },
        {
          heading: "Keep each client’s patterns to yourself",
          summary: "What the agency learns across environments is its own operational knowledge.",
          icon: "lock",
          body: [
            [
              "One client’s activity should never become a talking point with another client, even informally. GetSibu’s ",
              { text: "tenant isolation", page: 324 },
              " rests on an architecture designed around tenant-scoped data access, and the agency’s conversations deserve the same discipline.",
            ],
          ],
        },
        {
          heading: "Account structures shape the pattern",
          summary: "Different commissioning habits produce very different activity.",
          icon: "layers",
          body: [
            "Some clients ask for many small pieces at short notice; others plan large campaigns months ahead. Judge each client against its own way of commissioning rather than against a client whose habits are entirely different.",
          ],
        },
        {
          heading: "Team changes affect activity",
          summary: "A quieter spell after an account team changes may reflect learning, not less work.",
          icon: "users",
          body: [
            [
              "New people need time to learn a client’s library, its vocabulary and where its approved material sits. Handing over the searches the previous team relied on shortens that period: ",
              { text: "saved asset searches", page: 17 },
              " can be kept and shared through a URL for clients, campaigns and products.",
            ],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 324 }, { kind: "pdf", page: 17 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "Resourcing a roster around where the work really is",
      team: "An advertising agency",
      situation: "An advertising agency is planning its creative resourcing for the year ahead. Leadership assumes the largest account generates most of the production work.",
      steps: [
        { heading: "Activity across environments is reviewed", body: "Before meeting the account leads, the operations lead uses agency analytics to understand asset activity across client environments, so the conversation starts from the libraries rather than from assumptions." },
        { heading: "Account leads supply the context", body: "Two mid-sized clients turn out to run frequent retail and social campaigns, whereas the largest client commissions a small number of major productions." },
        { heading: "Designers follow the work", body: ["Additional designers move onto the busier accounts and work in those clients’ ", { text: "client workspaces", page: 177 }, ", which help agencies organise and isolate customer content."] },
        { heading: "Capacity is discussed account by account", body: ["With one client’s campaign calendar growing, the operations lead reviews that client’s ", { text: "storage allocation", page: 163 }, " with the account lead rather than treating storage as one agency-wide pool."] },
      ],
      outcome: "Resourcing is grounded in evidence and in the account leads’ knowledge rather than in assumption, and every client’s library stays separate while the agency plans around them.",
      link: { page: 219, label: "GetSibu for Advertising Agencies" },
      sources: [{ kind: "pdf", page: 202 }, { kind: "pdf", page: 177 }, { kind: "pdf", page: 163 }, { kind: "pdf", page: 219 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about agency analytics",
      items: [
        {
          question: "Does looking across client environments weaken the separation between clients?",
          answer: [
            "Separation is a property of the libraries themselves. ",
            { text: "Agency multi-tenancy", page: 162 },
            " maintains separation between tenants, and each ",
            { text: "client environment can remain logically isolated", page: 161 },
            ", so assets from one client are not mixed with another client’s library.",
          ],
        },
        {
          question: "How should an agency read a client environment with little asset activity?",
          answer: "Ask where the work is happening. If a campaign is in progress, little activity can mean files and feedback are travelling outside the client’s library, which is worth raising with the account team before it becomes a habit.",
        },
        {
          question: "What can agency analytics not tell an agency?",
          answer: "Profitability, client satisfaction or the quality of the work. Activity describes what happens in the libraries; fees, contracts and conversations with clients answer the rest.",
        },
      ],
      sources: [{ kind: "pdf", page: 202 }, { kind: "pdf", page: 162 }, { kind: "pdf", page: 161 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on analytics and client libraries",
      variant: "compact",
      pages: [215, 162, 84, 219, 163, 72],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Scale Your Creative Library",
      conversionPage: 397,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 397 }],
    },
  ],
};

export default page;
