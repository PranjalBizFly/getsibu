/**
 * 167 · Client Asset Isolation — /permissions/client-asset-isolation
 *
 * Angle (cluster: multi-tenancy): the outcome inside daily work — unrelated customer libraries are not mixed within the
 * same workflow. What mixing looks like at each stage of agency work, what it puts at risk and what pushes libraries
 * together. Client Tenant Isolation (161) owns the logical boundary itself; Agency Multi-Tenancy (162) the operation.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how customer material gets mixed in agency work and what that risks; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 167,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Permissions & Multi-Tenancy",
      lede: "What it looks like when separate customers’ assets end up in the same piece of work, what that mixing puts at risk for an agency, and how isolation keeps unrelated libraries apart while the work moves.",
      visual: { diagram: "tenant-boundaries", focus: "tenants" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 167 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Keeping customers’ assets out of each other’s work",
      body: [
        "Client asset isolation prevents unrelated customer libraries from being mixed within the same workflow. The emphasis falls on work in motion: bringing material in, organising it, reviewing it and delivering it, which are the moments when one customer’s files could otherwise end up beside another’s.",
        "Mixing rarely looks dramatic. It is a product shot from one retailer sitting in another retailer’s review round, a batch of rushes imported into the wrong account, or a tag named after one client turning up in a different client’s library. Each slip is small and easy to make on a busy day. Each can also reveal something a customer expected to stay private: an unannounced product, a campaign direction, or simply the fact that the agency works for a competitor.",
        [
          "Isolation in daily work rests on the structure underneath it. Each ",
          { text: "client environment can remain logically isolated", page: 161 },
          ", and GetSibu’s ",
          { text: "tenant isolation", page: 324 },
          " describes an architecture designed around tenant-scoped data access.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Unrelated customer libraries kept apart", "Isolation while work is in motion", "Small slips, serious consequences", "Deliberate reuse, not accidental mixing", "Pressures that push libraries together"],
      },
      highlight: {
        heading: "In practice",
        body: "An agency producing packaging for two rival snack brands keeps each brand’s artwork and review rounds within that brand’s own library, so a label designed for one does not surface in the other’s workflow.",
        tags: ["Designers", "Producers", "Account teams"],
      },
      glance: {
        heading: "Client asset isolation in brief",
        facts: [
          { label: "Area", value: "Permissions & Multi-Tenancy" },
          { label: "Prevents", value: "Unrelated customer libraries mixing in one workflow" },
          { label: "Environment boundary", value: "Client Tenant Isolation", page: 161 },
          { label: "For developers", value: "API Tenant Isolation", page: 276 },
        ],
        actions: [{ kind: "route", path: "/permissions", label: "More in Permissions & Multi-Tenancy" }]
      },
      sources: [{ kind: "pdf", page: 167 }, { kind: "pdf", page: 161 }, { kind: "pdf", page: 324 }, { kind: "pdf", page: 276 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "where-mixing-happens",
      eyebrow: "In practice",
      heading: "Where customer material gets mixed, and what each slip risks",
      intro: "Typical points in agency work where one customer’s assets can meet another’s.",
      columns: ["What mixing looks like", "What it puts at risk"],
      rows: [
        { label: "Bringing work in", cells: ["Files from two customers imported in one batch", "One customer’s material stored in another’s library"] },
        { label: "Organising", cells: ["Tags or folder names borrowed from another account", "Clues about who else the agency works for"] },
        { label: "Finding assets", cells: ["Searching a pool that holds several customers’ files", "The wrong customer’s image placed in a layout"] },
        { label: "Reviewing", cells: ["A draft for one customer in another customer’s review round", "An unreleased product seen by the wrong people"] },
        { label: "Delivering", cells: ["A final file taken from the wrong account", "Work handed to a client who does not own it"] },
        { label: "Reporting", cells: ["A results deck built from several customers’ work", "One customer’s performance shown to another"] },
      ],
      sources: [{ kind: "pdf", page: 167 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "pressures",
      eyebrow: "What to watch",
      heading: "Pressures that push customer libraries together",
      items: [
        {
          heading: "Material inherited from old shared drives",
          summary: "Files that arrive from an agency’s previous storage are often mixed before the move even starts.",
          icon: "folder",
          body: [
            "Agencies that grew on shared storage usually have folders where several clients’ files sit side by side: a stock folder, a showreel folder, a year of exports. Moving that material as it stands would carry the mixing into its new home.",
            [
              "With ",
              { text: "folder mapping", page: 133 },
              ", existing folder structures can be mirrored or remapped during import, which makes the import a natural point to decide where each customer’s files belong.",
            ],
          ],
        },
        {
          heading: "Brands that share an owner",
          summary: "Two brands in one group are related customers, and whether they share material is their decision, not the agency’s.",
          icon: "building",
          body: [
            "Sister brands owned by the same group may happily share some assets, or may be run as rivals internally. Treating them as one customer because they share a parent company is a common route to mixing, so confirm with the client which libraries should stay apart before anything is set up.",
          ],
        },
        {
          heading: "Showreels and credentials",
          summary: "Agencies want to show their best work, and that work crosses accounts by nature.",
          icon: "film",
          body: [
            "A credentials deck or showreel draws on work for many customers. Build it from released material that each client has agreed can be shown, and keep it as agency material, instead of pulling files out of live customer libraries where unreleased work sits close by.",
          ],
        },
        {
          heading: "Pitches that borrow from existing accounts",
          summary: "A pitch for a new customer can be tempted to reuse ideas or files made for a current one.",
          icon: "megaphone",
          body: [
            "Rejected concepts, reference imagery and mood material from one account can look like a shortcut when a similar brief arrives. Anything reused should belong to the agency or be cleared for reuse, and the pitch team should work from that cleared material rather than browsing another customer’s library.",
          ],
        },
        {
          heading: "Wanting one view of the whole agency",
          summary: "Leaders need a combined picture, but a combined picture does not require a combined library.",
          icon: "chart",
          body: [
            [
              "The instinct to gather everything in one place often comes from wanting to see the agency as a whole. ",
              { text: "Agency analytics", page: 202 },
              " help agencies understand asset activity across their client environments, which supports that overview without anyone moving customers’ assets together.",
            ],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 133 }, { kind: "pdf", page: 202 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "Two rival launch films in the same production week",
      team: "A video agency",
      situation: "A video agency is cutting launch films for two competing smartphone brands in the same week. The editors overlap, and one freelance colour grader works on both films from delivered files.",
      steps: [
        {
          heading: "Each brand has its own workspace",
          body: ["The rushes, cuts and brand material for each film sit in that brand’s own ", { text: "client workspace", page: 177 }, ", not in a shared production folder."],
        },
        {
          heading: "Cuts stay with their own film",
          body: ["Each new cut is kept as a revision of its film, and ", { text: "video version management", page: 97 }, " keeps the version history associated with that asset rather than in a folder of exports."],
        },
        {
          heading: "The grader keeps the films apart",
          body: "Grading one film to completion before opening the other, with no scratch folder shared between them, removes the easiest route for footage to cross over.",
        },
        {
          heading: "Review rounds run separately",
          body: ["Feedback on each film is gathered in that brand’s library, and ", { text: "client review", page: 72 }, " workflows keep the two clients isolated from each other."],
        },
        {
          heading: "Deliverables leave from the right account",
          body: "Each approved film is taken from its own brand’s library for delivery, so the file handed over belongs to the client receiving it.",
        },
      ],
      outcome: "Both films are delivered without either brand’s launch material becoming part of a workflow shared with its competitor, and structure, rather than the crew’s memory, does most of the work of keeping them apart.",
      link: { page: 229, label: "GetSibu for Video Agencies" },
      sources: [{ kind: "pdf", page: 177 }, { kind: "pdf", page: 97 }, { kind: "pdf", page: 72 }, { kind: "pdf", page: 167 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about client asset isolation",
      items: [
        {
          question: "How is client asset isolation different from client tenant isolation?",
          answer: [
            { text: "Client tenant isolation", page: 161 },
            " concerns the boundary around each client environment. Client asset isolation is the question a producer or account lead asks on a busy day: whether the piece of work in front of them holds only one customer’s material.",
          ],
        },
        {
          question: "Does client asset isolation extend to applications connected through the API?",
          answer: [
            "Automation deserves the same care, because a single job can move many files at once. ",
            { text: "API tenant isolation", page: 276 },
            " means API access can include tenant context, so that multi-tenant environments remain properly separated.",
          ],
        },
        {
          question: "What should an agency do if one customer’s file turns up in another customer’s library?",
          answer: "Return it to its owner’s library, find out whether it was used or shared while it was misplaced, and tell the account lead. Then look for the cause, which is more often an import, a copied folder or a habit than one person’s carelessness.",
        },
      ],
      sources: [{ kind: "pdf", page: 161 }, { kind: "pdf", page: 276 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on keeping customer libraries apart",
      variant: "compact",
      pages: [161, 324, 177, 168, 202, 229],
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
