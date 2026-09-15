/**
 * 84 · Agency Collaboration — /features/agency-collaboration
 *
 * Angle (clusters: team-collaboration, multi-tenancy): agencies operating multiple client libraries through a
 * multi-tenant environment — how an agency's people, practices and lessons move across client accounts while client
 * material and conversations stay inside each library. Agency Multi-Tenancy (162) owns running the tenants; Client
 * Review (72) owns review inside each client library; GetSibu for Creative Agencies (215) owns per-client configuration.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how agency teams collaborate across client accounts; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 84,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Collaboration",
      lede: "How an agency team can collaborate across the multiple client libraries it operates through a multi-tenant environment, carrying methods and lessons between accounts while each client’s material stays in its own library.",
      visual: { diagram: "tenant-boundaries", focus: "tenants" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 84 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "One agency team working across many client libraries",
      body: [
        "Agencies can operate multiple client libraries in GetSibu through a multi-tenant environment. For the people inside the agency, that means collaborating across accounts every day while each client’s library remains its own.",
        "An agency is one team serving many clients. Creative leads oversee several brands, specialists move between projects as deadlines demand, and an approach that worked for one client becomes the starting point for the next pitch. The skills are shared on purpose. The clients’ material must not be, and agency collaboration has to respect both facts at once.",
        [
          "The separation itself comes from the environment. ",
          { text: "Agency multi-tenancy", page: 162 },
          " keeps tenants apart while the agency manages its client libraries from one platform, and ",
          { text: "client review", page: 72 },
          " runs review workflows inside each client’s library. What remains is for the agency to collaborate well across those boundaries without carrying client material over them.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Multiple client libraries, one agency", "Skills shared, client material separated", "Methods carried across accounts", "Conversations kept with each client", "A home for pitch work"],
      },
      glance: {
        heading: "Agency collaboration in brief",
        facts: [
          { label: "Area", value: "Collaboration" },
          { label: "Operates", value: "Multiple client libraries" },
          { label: "Through", value: "Multi-Tenant Digital Asset Management", page: 160 },
          { label: "Use case", value: "GetSibu for Creative Agencies", page: 215 },
        ],
        actions: [{ kind: "route", path: "/features/collaboration", label: "More in Collaboration" }]
      },
      sources: [{ kind: "pdf", page: 84 }, { kind: "pdf", page: 162 }, { kind: "pdf", page: 72 }, { kind: "pdf", page: 160 }, { kind: "pdf", page: 215 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "inside-or-across",
      eyebrow: "Where the line falls",
      heading: "What stays with one client and what the agency shares",
      intro: "Collaboration crosses client accounts; client material does not.",
      columns: ["Kept within each client", "Shared across the agency"],
      rows: [
        { label: "Creative assets", cells: ["Held in the client’s own environment, which can remain logically isolated", "Not moved between clients; comparable work is made afresh"], page: 161 },
        { label: "Storage", cells: ["Client environments can have their own allocation and asset boundaries", "Planned per client rather than as one pool"], page: 163 },
        { label: "Feedback and approvals", cells: ["Review workflows inside the client’s library", "The agency’s standards for how reviews are run"] },
        { label: "Workspace and team", cells: ["A client-specific workspace that organises and isolates the customer’s content", "The agency’s own people and the craft they bring to every account"], page: 177 },
        { label: "Knowledge", cells: ["Client decisions recorded on that client’s assets", "Lessons described in general terms, without client files"] },
      ],
      sources: [{ kind: "pdf", page: 84 }, { kind: "pdf", page: 161 }, { kind: "pdf", page: 163 }, { kind: "pdf", page: 72 }, { kind: "pdf", page: 177 }, { kind: "pdf", page: 62 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "relationships",
      eyebrow: "Who works with whom",
      heading: "Agency collaboration, relationship by relationship",
      tabs: [
        {
          label: "Account and studio",
          heading: "Pass the client’s context to the people making the work",
          icon: "briefcase",
          body: [
            "Account teams carry context the studio rarely hears directly: a client’s internal sensitivities, the history behind a brand rule, the stakeholder who always asks for a bigger logo. Designers and editors produce better first drafts when that context reaches them before the work starts.",
            "Writing it as a comment on the brief or key assets in the client’s library, rather than passing it on in conversation, means the next person to pick up the account finds it there too.",
          ],
          points: ["Client context shared before drafting", "Context kept in the client’s library"],
        },
        {
          label: "Across accounts",
          heading: "Share what worked without sharing what was made",
          icon: "network",
          body: [
            "Agencies improve by carrying lessons between accounts: a review rhythm that shortened approvals, a way of arranging a campaign library, a tagging convention that people actually followed. Methods like these transfer freely.",
            [
              "The work itself does not. ",
              { text: "Client asset isolation", page: 167 },
              " prevents unrelated customer libraries from being mixed within the same workflow, so an agency describes its lessons in its own terms rather than by passing one client’s files to another team.",
            ],
          ],
          points: ["Methods move between accounts", "Client work stays where it belongs"],
        },
      ],
      sources: [{ kind: "pdf", page: 84 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 167 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "risks",
      eyebrow: "What to watch for",
      heading: "Collaboration risks that are particular to agencies",
      items: [
        {
          heading: "Notes left in the wrong client’s library",
          summary: "Working on several accounts in one day makes a misplaced remark an easy mistake.",
          icon: "message",
          body: [
            "Agency people often move from one account’s work to another’s within a day, and context from the last piece can slip into a note on the next. The consequence is worse than confusion if the comment names a campaign or product the other client should never hear about.",
            "Simple habits help: open client work from the links that account’s team circulates, start each note by naming what is being reviewed, and keep client names out of comments that do not concern that client.",
          ],
        },
        {
          heading: "Pitch work with no clear home",
          summary: "Material for a prospective client exists before any client library does.",
          icon: "folder",
          body: [
            "Pitch concepts, mood boards and sample edits are created before a client relationship begins. Left in personal folders, they are hard for the pitch team to collaborate on and awkward to hand over if the pitch is won.",
            "Decide at the outset where pitch material lives inside the agency, keep it well away from any existing client in the same sector, and agree which pieces become the new client’s if the work goes ahead.",
          ],
        },
        {
          heading: "Clients with different requirements",
          summary: "A way of working that suits one account may not be permitted on another.",
          icon: "lock",
          body: [
            [
              "Some clients bring their own conditions. ",
              { text: "Per-client authentication", page: 165 },
              " options can support organisations that require separate access controls for different customers, and a client with such expectations may also have views on who reviews its work and how.",
            ],
            "Recording each client’s conditions where the account team can see them stops an agency-wide habit being applied to the one account where it does not fit.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 84 }, { kind: "pdf", page: 165 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about agency collaboration",
      items: [
        {
          question: "How can a new agency hire learn the house style without seeing other clients’ work?",
          answer: "Through the agency’s own examples, such as internal projects and written conventions, rather than a tour of client libraries. Their access can then begin with the account they are joining.",
        },
        {
          question: "Do mentions help keep client discussions among the right people?",
          answer: [
            "They can help. ",
            { text: "Folder-aware autocomplete", page: 66 },
            " helps ensure that users can mention people who have appropriate visibility, which suits an agency’s aim of keeping each client’s discussions among the people working on that account.",
          ],
        },
        {
          question: "How can an agency keep its ways of working consistent across client libraries?",
          answer: [
            "Agree agency-wide conventions for how a client library is arranged, tagged and reviewed, then apply them in each new environment. ",
            { text: "Structured folders and scalable taxonomies", page: 8 },
            " give those conventions something concrete to follow.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 66 }, { kind: "pdf", page: 8 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More for agencies working across clients",
      variant: "compact",
      pages: [162, 72, 215, 177, 167, 387],
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
