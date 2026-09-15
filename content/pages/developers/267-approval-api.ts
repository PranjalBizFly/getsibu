/**
 * 267 · Approval API — /developers/approval-api
 *
 * Angle (clusters approvals, api-endpoints): approval events incorporated into external production and workflow
 * systems — what each approval state can mean elsewhere, how to map states onto another system's stages, and
 * which decisions stay in the library. 257 owns approval as an automation trigger. No payloads or methods.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of approval hand-overs between systems in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 267,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "API & Developers",
      lede: "What bringing GetSibu approval events into external production and workflow systems involves, how each approval state can translate into another system’s stages, and which decisions should stay in the library.",
      visual: { diagram: "api-flow", focus: "approvals" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 267 }, { kind: "pdf", page: 68 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Sign-off that reaches the systems which act on it",
      body: [
        "Approval events can be incorporated into external production and workflow systems. A decision recorded against an asset can then shape what happens in the systems that schedule, deliver and publish work, rather than travelling between teams by word of mouth.",
        "Approval is where creative work changes hands. Before it, material belongs to the people making it; afterwards, schedulers, traffic managers, web teams and distributors take over. Those teams seldom work in the same system as reviewers, so sign-off is exactly where delays and mistakes creep in: work released before it was cleared, or cleared work left idle because nobody passed on the news.",
        [
          "In GetSibu, the ",
          { text: "creative approval workflow", page: 67 },
          " lets teams request review, make changes and mark assets as approved, while ",
          { text: "asset approval", page: 68 },
          " keeps a status history showing whether content is awaiting review, approved or requires changes.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Approval events in external systems", "Sign-off as a hand-over point", "States mapped to production stages", "Decisions kept in the library", "A record of what was accepted"],
      },
      highlight: {
        heading: "In practice",
        body: "A broadcaster’s traffic team keeps an advert’s airtime booking provisional until the creative is approved, then confirms it without waiting for an email.",
        tags: ["Production", "Advertising", "Developers"],
      },
      glance: {
        heading: "Approval events in brief",
        facts: [
          { label: "Area", value: "API & Developers" },
          { label: "Incorporated into", value: "External production and workflow systems" },
          { label: "Workflow", value: "Creative Approval Workflow", page: 67 },
          { label: "Record", value: "Approval History", page: 77 },
        ],
        actions: [{ kind: "route", path: "/developers", label: "More in Developers" }]
      },
      sources: [{ kind: "pdf", page: 267 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 68 }, { kind: "pdf", page: 77 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "states",
      eyebrow: "States and stages",
      heading: "What each approval state can mean outside the library",
      intro: "The rows follow the states recorded in GetSibu asset approval; how another system responds to each one is the organisation’s own design.",
      columns: ["In a production schedule", "In a publishing or distribution system"],
      rows: [
        { label: "Awaiting review", cells: ["Reviewer time is needed before the next stage can begin", "Nothing is released; the asset is not yet a candidate"] },
        { label: "Requires changes", cells: ["Revision work returns to the makers’ plan", "Any expected release is held back"] },
        { label: "Approved", cells: ["The next stage, such as finishing or delivery, can start", "The asset becomes eligible for release under the organisation’s own rules"] },
      ],
      sources: [{ kind: "pdf", page: 68 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "mapping",
      eyebrow: "Step by step",
      heading: "Mapping an approval workflow onto a production system",
      steps: [
        { heading: "List the states in use", body: "Start from the approval states the team really uses and what each one means to the people doing the reviewing.", icon: "approval" },
        { heading: "Match them to stages", body: "Find the stage in the production or workflow system that each state should correspond to, and note any state that has no match.", icon: "map" },
        { heading: "Agree what moves by itself", body: "Decide which stage changes the external system may make on its own and which still need a person to confirm them.", icon: "workflow" },
        { heading: "Test with a real review", body: "Run one genuine review round through the mapping and compare what the external system shows with what reviewers actually decided.", icon: "check" },
        { heading: "Name an owner", body: "Give the mapping an owner who revises it whenever the approval workflow or the production stages change.", icon: "user" },
      ],
      sources: [{ kind: "pdf", page: 267 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "design",
      eyebrow: "Considerations",
      heading: "Designing around approval events",
      items: [
        {
          heading: "The decision stays where it was made",
          summary: "External systems act on approvals; they should not become a second place to grant them.",
          icon: "approval",
          body: [
            ["", { text: "Creative approval management", page: 89 }, " creates a structured process for moving assets from draft to approved status. If another system can also declare work approved, the two will sooner or later disagree about what was signed off."],
          ],
        },
        {
          heading: "Know which version was accepted",
          summary: "Creative files often change after review has begun.",
          icon: "history",
          body: [
            ["", { text: "Approval history", page: 77 }, " keeps a record of review activity and helps reduce confusion about which version was accepted. Before a distribution system acts on an approval, make sure it can identify the exact file that was reviewed, and confirm how approvals relate to any later replacement."],
          ],
        },
        {
          heading: "Separate eligible from released",
          summary: "Approval makes material usable; it does not always mean it should go out today.",
          icon: "calendar",
          body: [
            "Embargoes, launch dates and market-by-market rules often apply after sign-off. Keep those decisions in the system responsible for release, so an approval opens the door rather than pushing content through it.",
            ["Inside the library, teams can provide ", { text: "approved-only views", page: 103 }, " for people who should reach only content that has completed review."],
          ],
        },
        {
          heading: "Plan for decisions that are revisited",
          summary: "New information can reopen material that seemed finished.",
          icon: "refresh",
          body: [
            "A legal concern, a client’s second thoughts or a factual error can send work back after it was cleared. Decide beforehand how the external system should respond if something it treated as ready needs further work, and who in the organisation deals with it.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 89 }, { kind: "pdf", page: 77 }, { kind: "pdf", page: 103 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about the approval API",
      items: [
        {
          question: "Does bringing approval events into another system change how reviewers work in GetSibu?",
          answer: "It should not need to. Reviewers carry on reviewing in the library; what changes is that the teams downstream stop waiting to be told the outcome.",
        },
        {
          question: "How do review status and approval history differ for an external system?",
          answer: ["", { text: "Review status", page: 76 }, " indicates whether an asset needs attention or has completed the approval process: its position now. History is the account of how it got there, which matters when a decision is questioned later."],
        },
        {
          question: "Do approval events matter to teams without production software?",
          answer: "Yes, wherever another system acts on sign-off, such as a website publishing tool or a campaign planning board. The underlying question is simply where work goes once it is approved.",
        },
      ],
      sources: [{ kind: "pdf", page: 76 }, { kind: "pdf", page: 77 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on approvals and the GetSibu API",
      variant: "compact",
      pages: [67, 68, 77, 89, 370, 266],
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
