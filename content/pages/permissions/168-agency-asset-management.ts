/**
 * 168 · Agency Asset Management — /permissions/agency-asset-management
 *
 * Angle (clusters: multi-tenancy, uc-agencies): the asset management work an agency does for many customers — organising,
 * versioning, reviewing, delivering and archiving — with structured separation between customers and between kinds of
 * material. Agency Multi-Tenancy (162) owns running many client libraries on one platform; the use case (215) owns the team.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of agency asset management practice; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 168,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Permissions & Multi-Tenancy",
      lede: "How an agency can look after creative assets for many customers, from supplied brand kits and work in progress to approved deliverables, while keeping a structured separation between each customer’s material.",
      visual: { diagram: "tenant-boundaries", focus: "tenants" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 168 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "The asset work of an agency, one customer at a time",
      body: [
        "Agencies can manage creative assets for multiple customers in GetSibu while maintaining structured separation. The work itself is familiar asset management, organising, versioning, reviewing and delivering, but it is done for many customers at once, each with its own material and its own expectations.",
        "An agency’s library is unusual because so little of it belongs to the agency. Brand guidelines, product photography and licensed footage arrive from customers; drafts and cuts are made for them; finished deliverables go back to them. Each customer brings its own brand rules and approval habits, and a system that treats all of it as one pool leaves the separation to careful filing.",
        [
          "“Structured” is the important word: the separation is part of how the libraries are set up, not a naming convention. ",
          { text: "Client workspaces", page: 177 },
          " help agencies organise and isolate customer content, and ",
          { text: "agency multi-tenancy", page: 162 },
          " is about running those client libraries from one platform.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Assets managed for many customers", "Structured separation between customers", "Supplied material treated as the customer’s", "Work in progress apart from deliverables", "Agency-owned resources kept apart"],
      },
      highlight: {
        heading: "In practice",
        body: "An agency keeps a sportswear client’s athlete photography, a bank’s brand guidelines and a food brand’s packaging artwork in separate, structured libraries, so none of that material shares a folder tree with another customer’s work.",
        tags: ["Agencies", "Studios", "Account teams"],
      },
      glance: {
        heading: "Agency asset management in brief",
        facts: [
          { label: "Area", value: "Permissions & Multi-Tenancy" },
          { label: "Manages", value: "Creative assets for multiple customers" },
          { label: "Organising unit", value: "Client Workspace Access", page: 177 },
          { label: "Use case", value: "GetSibu for Creative Agencies", page: 215 },
        ],
        actions: [{ kind: "route", path: "/permissions", label: "More in Permissions & Multi-Tenancy" }]
      },
      sources: [{ kind: "pdf", page: 168 }, { kind: "pdf", page: 177 }, { kind: "pdf", page: 162 }, { kind: "pdf", page: 215 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "tools",
      eyebrow: "What it involves",
      heading: "Asset management tools applied inside each customer’s library",
      items: [
        {
          heading: "Tags that grow with the account",
          body: "Hierarchical tags and synonyms help build an organisation system that stays useful as a customer’s library grows from one campaign to many.",
          icon: "tag",
          points: ["Structure beyond folders", "Room for many campaigns"],
          page: 8,
        },
        {
          heading: "Revisions without renamed copies",
          body: "Assets can be replaced in place while earlier versions are retained, so a customer’s drafts build up in one record instead of a trail of files marked “final-v2”.",
          icon: "history",
          points: ["Earlier versions retained", "One record per piece of work"],
          page: 91,
        },
        {
          heading: "Review kept to the account",
          body: "Client-specific libraries and review workflows keep each customer’s feedback rounds apart from every other customer’s.",
          icon: "message",
          points: ["Feedback within the account", "Clients kept isolated"],
          page: 72,
        },
        {
          heading: "Deliverables that are ready",
          body: "Approved-only views help people reach content that has completed the required review, which marks the line between finished deliverables and work in progress.",
          icon: "approval",
          points: ["Finished work easy to find", "Drafts kept out of the way"],
          page: 103,
        },
        {
          heading: "Finished campaigns set aside",
          body: "Archiving retains a customer’s past campaigns without letting old material interfere with everyday discovery of current work.",
          icon: "archive",
          points: ["History kept for reference", "Current work uncluttered"],
          page: 108,
        },
      ],
      sources: [{ kind: "pdf", page: 8 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 72 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 108 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "material",
      eyebrow: "By material",
      heading: "Four kinds of material an agency manages for customers",
      tabs: [
        {
          label: "Supplied",
          heading: "Brand kits and material the customer provides",
          icon: "briefcase",
          body: [
            "Logos, brand guidelines, product photography and licensed footage come from the customer and remain the customer’s. They are the base for almost everything the agency makes, so they need to be easy to find and hard to misuse.",
            ["When a customer hands over an existing library, ", { text: "metadata preservation", page: 132 }, " means details such as creators and custom keywords can be kept during migration, so supplied photography arrives with its credits."],
          ],
          points: ["Owned by the customer", "The base for every piece of work"],
        },
        {
          label: "In progress",
          heading: "Drafts, cuts and concepts made for the customer",
          icon: "layers",
          body: [
            "Work in progress changes daily and is seen by fewer people. It is also where confidential ideas live: unannounced products, or a campaign direction the customer has not yet agreed.",
            ["Keeping it distinct from finished work matters, and ", { text: "asset status management", page: 102 }, " helps teams distinguish drafts, approved content and other workflow states."],
          ],
          points: ["Changes from day to day", "Seen by the people making it"],
        },
        {
          label: "Deliverables",
          heading: "Approved work that goes back to the customer",
          icon: "check",
          body: [
            "Deliverables are the assets that leave the agency: final films, approved layouts and adaptations for each channel. Errors here are the most visible of all, because a wrong version reaches the customer or the public.",
            [{ text: "Approval history", page: 77 }, " provides a record of review activity, which reduces confusion about which version was accepted."],
          ],
          points: ["The version that was accepted", "Where mistakes show most"],
        },
        {
          label: "Agency-owned",
          heading: "Templates, credentials and the agency’s own resources",
          icon: "building",
          body: [
            "Agencies also hold material that is theirs: templates, process documents, pitch decks and showreels. Unlike customer material, it is meant to be reused across accounts, so it needs a home of its own rather than a copy inside each customer’s library.",
            "Copies of a template scattered through several customer libraries drift apart as each one is edited. One maintained version, with a named person responsible for it, serves every account team better.",
          ],
          points: ["Reused across accounts by design", "One maintained version of each template"],
        },
      ],
      sources: [{ kind: "pdf", page: 132 }, { kind: "pdf", page: 102 }, { kind: "pdf", page: 77 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "good-order",
      eyebrow: "Practical advice",
      heading: "Keeping many customer libraries in good order",
      items: [
        {
          heading: "Start every customer from the same outline",
          summary: "A consistent starting structure makes each new customer library familiar from the first day.",
          icon: "folder",
          body: [
            "When every customer library begins with the same broad areas, such as brand, campaigns, work in progress and deliverables, people moving between accounts know where to look. The detail inside each area can still follow the customer’s own way of working.",
          ],
        },
        {
          heading: "Use the customer’s own terms",
          summary: "Tags and folder names should use the words the customer uses for its products and campaigns.",
          icon: "text",
          body: [
            "An internal agency nickname for a campaign means nothing to the customer and little to a new starter. Names the customer recognises make the library easier to discuss in review and easier to hand over when the account team changes.",
          ],
        },
        {
          heading: "Track conditions on supplied material",
          summary: "Licensed photography and talent footage often come with limits the studio does not see.",
          icon: "calendar",
          body: [
            ["A customer may supply images it can use only for a season or a market. ", { text: "Expiring creative assets", page: 104 }, " address part of this: expiry information can help teams identify content that should no longer be used after a specified period."],
          ],
        },
        {
          heading: "Close each campaign deliberately",
          summary: "The end of a campaign is the best moment to tidy a customer’s library.",
          icon: "refresh",
          body: [
            ["Once deliverables are approved, clear out superseded exports and confirm which versions are final. ", { text: "Creative library maintenance", page: 111 }, " helps prevent libraries from becoming cluttered with duplicate, obsolete or poorly classified content."],
          ],
        },
        {
          heading: "Know where each asset came from",
          summary: "Who created or supplied an asset decides what may be reused, handed over or removed.",
          icon: "user",
          body: [
            ["Customer-supplied, agency-made and third-party licensed files carry different rights. ", { text: "Asset ownership", page: 115 }, " provides context about who created or uploaded content, a useful starting point when those questions arise."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 104 }, { kind: "pdf", page: 111 }, { kind: "pdf", page: 115 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about agency asset management",
      items: [
        {
          question: "How can an agency keep track of each customer’s brand requirements across its assets?",
          answer: [
            "Brand rules differ from one customer to the next, so compliance with one customer’s guidelines says nothing about another’s. ",
            { text: "Brand guardrail tags", page: 105 },
            " let teams use structured tags to identify assets that comply with specific organisational requirements.",
          ],
        },
        {
          question: "How is agency asset management different from agency multi-tenancy?",
          answer: [
            { text: "Agency multi-tenancy", page: 162 },
            " concerns the platform: many client libraries operated in one place. Agency asset management is the daily work inside those libraries, from organising and versioning each customer’s files to delivering and archiving them.",
          ],
        },
        {
          question: "Who should look after each customer’s library inside an agency?",
          answer: "Usually a named person on the account team, such as a producer or project manager, who keeps the library tidy, knows what the customer has supplied and makes sure final deliverables are clearly identified.",
        },
      ],
      sources: [{ kind: "pdf", page: 105 }, { kind: "pdf", page: 162 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More for agencies managing customer assets",
      variant: "compact",
      pages: [177, 162, 72, 103, 215, 219],
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
