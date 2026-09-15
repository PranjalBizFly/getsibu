/**
 * 72 · Client Review — /features/client-review
 *
 * Angle (clusters: approvals, multi-tenancy): client-specific review with clients kept isolated — how agencies run
 * review inside client-specific libraries so work, discussion and approvals never mix between accounts.
 * Built only on client-specific libraries, multi-tenancy and isolation (PDF 72, 160–168, 177); no client portals,
 * guest access or external review links are described. Agency Collaboration (84) owns agencies in general.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how agencies typically run client work and review; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 72,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Collaboration",
      lede: "How agencies can run review workflows inside client-specific libraries in GetSibu, keeping each client’s work, discussion and approvals apart from every other client’s.",
      visual: { diagram: "folder-access", focus: "client" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 72 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Reviewing work for many clients without mixing them up",
      body: [
        "Agencies can use GetSibu to maintain client-specific libraries and review workflows while keeping different clients isolated. Each client’s creative work is reviewed inside that client’s own environment.",
        "Agency review carries a risk that in-house teams seldom face. One studio may be producing work for competing brands in the same month, with the same designers and editors moving between accounts. A draft attached to the wrong email, a note left on the wrong client’s file or a shared folder with too wide an audience is more than untidy: it can expose one client’s unreleased work to another.",
        [
          "Isolation is therefore the foundation rather than an extra. GetSibu’s ",
          { text: "multi-tenant design", page: 160 },
          " is intended for organisations such as agencies managing many clients, and ",
          { text: "client asset isolation", page: 167 },
          " prevents unrelated customer libraries from being mixed within the same workflow. Review takes place inside those boundaries.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Client-specific libraries", "A review workflow for each client", "Clients kept isolated", "One platform, many accounts", "Feedback and approvals kept per client"],
      },
      highlight: {
        heading: "In practice",
        body: "An editor cutting films for two drinks brands in the same week reviews each brand’s footage in that client’s library, so each brand’s notes and approvals stay within its own environment.",
        tags: ["Account leads", "Producers", "Studio teams"],
      },
      glance: {
        heading: "Client review in brief",
        facts: [
          { label: "Area", value: "Collaboration" },
          { label: "For", value: "Agencies working for several clients" },
          { label: "Kept apart by", value: "Client environments that can remain isolated" },
          { label: "Also for", value: "GetSibu for Advertising Agencies", page: 219 },
        ],
        actions: [{ kind: "route", path: "/features/collaboration", label: "More in Collaboration" }]
      },
      sources: [{ kind: "pdf", page: 72 }, { kind: "pdf", page: 160 }, { kind: "pdf", page: 167 }, { kind: "pdf", page: 219 }, EXPLAINS],
    },
    {
      kind: "layers",
      id: "boundaries",
      eyebrow: "How it is structured",
      heading: "The boundaries a client review sits inside",
      intro: "From the agency’s platform down to a single approval, each layer keeps one client’s work apart from the next.",
      layers: [
        { label: "The agency platform", body: "Agencies can manage multiple client libraries from one platform while maintaining separation between tenants.", page: 162 },
        { label: "The client environment", body: "Each client environment can remain logically isolated, so one client’s assets are not mixed with another client’s library.", page: 161 },
        { label: "Storage and asset boundaries", body: "Client environments can have their own storage allocation and asset boundaries.", page: 163 },
        { label: "The review workflow", body: "Inside the client library, the team discusses assets, makes changes and marks work as approved, as it would for any other material." },
      ],
      sources: [{ kind: "pdf", page: 162 }, { kind: "pdf", page: 161 }, { kind: "pdf", page: 163 }, { kind: "pdf", page: 72 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 67 }],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "Two competing accounts reviewed in the same week",
      team: "A creative agency",
      situation: "A creative agency is delivering launch campaigns for two clients in the same product category. Several designers and one video editor work on both accounts.",
      steps: [
        { heading: "Each client has its own library", body: ["The agency keeps each client’s material in a ", { text: "client-specific workspace", page: 177 }, ", so the two campaigns never share a folder."] },
        { heading: "Drafts are reviewed in the right place", body: "Account teams and creative leads comment on each client’s drafts inside that client’s library, and the editor answers in threads on each brand’s footage." },
        { heading: "Revisions come back as versions", body: "Revised drafts replace earlier ones in place, and every asset keeps its previous versions within its own client environment." },
        { heading: "Approvals are recorded per client", body: "Each piece is marked as approved within its client’s library, giving the account lead a clear record of what each campaign has cleared." },
        { heading: "Delivery draws on approved work", body: "Finished deliverables are gathered from each client’s approved material, rather than from a shared folder where the two accounts could meet." },
      ],
      outcome: "Both launches go ahead with their reviews, versions and approvals held in separate environments, and the agency’s attention stays on the work rather than on keeping two accounts apart.",
      link: { page: 215, label: "GetSibu for Creative Agencies" },
      sources: [{ kind: "pdf", page: 177 }, { kind: "pdf", page: 72 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 161 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 215 }, { kind: "editorial", note: "Illustrative scenario; the agency and its clients are hypothetical and unnamed." }],
    },
    {
      kind: "accordion",
      id: "before-client-reviews",
      eyebrow: "Considerations",
      heading: "What to settle before running client reviews",
      items: [
        {
          heading: "Who works across clients",
          summary: "People who move between accounts need access that matches their assignments.",
          icon: "users",
          body: [
            "Designers, editors and producers often serve several clients at once. Their access should reflect the accounts they are actually working on, and it should change when they move off one.",
            ["", { text: "Creative access governance", page: 159 }, " helps organisations maintain control over sensitive creative content, which for an agency means reviewing who can reach each client as teams change."],
          ],
        },
        {
          heading: "Where client feedback is written down",
          summary: "Feedback that arrives in a call or an email still belongs on the client’s asset.",
          icon: "message",
          body: [
            "Clients often respond in meetings, on calls or by email to the account lead. Recording that feedback on the relevant asset in the client’s library, rather than leaving it in an inbox, keeps the review record complete and puts each request where the studio will act on it.",
          ],
        },
        {
          heading: "What belongs to the agency and what belongs to the client",
          summary: "Shared templates and references can blur the boundary.",
          icon: "folder",
          body: [
            "Agencies reuse their own templates, stock and past work. Deciding before work starts which material is the agency’s and which is the client’s avoids a client’s assets being treated as a general resource for other accounts.",
          ],
        },
        {
          heading: "How activity is watched across accounts",
          summary: "An agency needs a view of all its clients as well as each one.",
          icon: "chart",
          body: [
            ["", { text: "Agency analytics", page: 202 }, " can help agencies understand asset activity across client environments, which is useful when deciding where review work is concentrating and where support is needed."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 159 }, { kind: "pdf", page: 72 }, { kind: "pdf", page: 202 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about client review",
      items: [
        {
          question: "Does client review suit video agencies as well as design agencies?",
          answer: ["Yes. ", { text: "Video agencies", page: 229 }, " can manage client footage, versions, reviews and approved deliverables from one platform, and keeping one client’s material apart from another’s matters as much for footage as for artwork."],
        },
        {
          question: "How is client review different from agency collaboration?",
          answer: [{ text: "Agency collaboration", page: 84 }, " is about operating multiple client libraries in a multi-tenant environment. Client review is the part of that work where each client’s creative is inspected, discussed and approved within its own library."],
        },
        {
          question: "What does multi-tenant DAM mean for client review?",
          answer: [{ text: "Multi-tenant DAM", page: 372 }, " allows one platform to support multiple isolated organisations or clients. For client review, that isolation is what lets an agency run reviews for different accounts side by side without mixing them."],
        },
      ],
      sources: [{ kind: "pdf", page: 72 }, { kind: "pdf", page: 229 }, { kind: "pdf", page: 84 }, { kind: "pdf", page: 372 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on reviewing work for clients",
      variant: "compact",
      pages: [160, 84, 215, 67, 177, 387],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the agency use case." }],
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
