/**
 * 354 · Agency Efficiency — /business-value/agency-efficiency
 *
 * Angle (clusters: uc-agencies, productivity): the non-billable overhead of keeping a separate system per client,
 * which grows with the roster rather than the work, and how an agency judges the gain of one structured platform
 * from its own accounts. Agency Multi-Tenancy (162) owns how tenants are run; Agency Asset Management (168) owns
 * the asset work inside each library; GetSibu for Creative Agencies (215) owns the use case.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how agency overhead arises and how to assess it; states no GetSibu capability beyond the cited pages and supplies no figures." } as const;

const page: PageContent = {
  page: 354,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "centered",
      eyebrow: "Business Value",
      lede: "Why a separate system for every client becomes overhead that grows with the roster rather than with the work, what running client libraries on one structured platform changes, and how the gain differs between advertising, video and consultancy work.",
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 354 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Overhead that grows with every client won",
      body: [
        "Agencies can manage multiple client libraries from a structured platform instead of maintaining separate disconnected systems. The efficiency argument turns on what those separate systems cost to keep running, and on who inside the agency ends up paying for it.",
        "Agency time divides into work a client pays for and work that keeps the agency running. Maintaining a system for each account sits firmly in the second group: setting up structure, keeping access lists current, learning each system’s quirks and tracing where a past deliverable went. That overhead rises with the number of clients rather than with the volume of creative work, so a busier roster can leave less capacity for the work itself.",
        [
          "A structured platform changes what a new account adds. Client libraries run as ",
          { text: "separate tenants on one platform", page: 162 },
          ", with ",
          { text: "each client environment able to remain logically isolated", page: 161 },
          " from the others, so a new account joins a platform the agency already runs instead of requiring a system of its own.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Overhead that scales with the roster", "Upkeep no client pays for", "Client libraries on one platform", "Isolation kept between clients", "Access kept current account by account"],
      },
      glance: {
        heading: "Agency efficiency in brief",
        facts: [
          { label: "Area", value: "Business value" },
          { label: "Replaces", value: "Separate, disconnected systems per client" },
          { label: "Use case", value: "GetSibu for Creative Agencies", page: 215 },
          { label: "Cost view", value: "DAM Pricing for Agencies", page: 346 },
        ],
        actions: [{ kind: "route", path: "/business-value", label: "More in Business Value" }]
      },
      sources: [{ kind: "pdf", page: 354 }, { kind: "pdf", page: 162 }, { kind: "pdf", page: 161 }, { kind: "pdf", page: 215 }, { kind: "pdf", page: 346 }, EXPLAINS],
    },
    {
      kind: "before-after",
      id: "system-by-system",
      eyebrow: "What changes",
      heading: "Agency operations run system by system, or on one platform",
      beforeLabel: "A separate system per client",
      afterLabel: "Client libraries on one GetSibu platform",
      before: [
        "A new system to stand up for each new client",
        "Review spread across whatever tools each client uses",
        "Access managed differently in every system",
        "Past deliverables traced system by system",
      ],
      after: [
        "A new client environment on the existing platform",
        "Review kept inside each client’s own library",
        "Granular permissions for areas of each library",
        "Search across a client’s entire creative library",
      ],
      sources: [{ kind: "pdf", page: 354 }, { kind: "pdf", page: 160 }, { kind: "pdf", page: 72 }, { kind: "pdf", page: 151 }, { kind: "pdf", page: 16 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "agency-types",
      eyebrow: "By kind of agency",
      heading: "How the gain shows up in different kinds of agency",
      tabs: [
        {
          label: "Advertising",
          heading: "Many campaigns, many rounds of revision",
          icon: "megaphone",
          body: [
            "Advertising agencies run live campaigns for several clients at once, and every campaign produces adaptations, new formats and revised copy. When each client’s work sits in a system of its own, knowing which revision is current depends on remembering how that particular system handles versions.",
            [
              { text: "Advertising agencies", page: 219 },
              " can organise campaign assets, collaborate on revisions and maintain client-specific libraries in GetSibu. Replacing an asset while its previous versions are retained is part of the same platform whichever client a campaign belongs to.",
            ],
          ],
          points: ["Revisions handled one way across accounts", "Client-specific libraries kept separate"],
        },
        {
          label: "Video",
          heading: "Heavy footage for several clients",
          icon: "film",
          body: [
            "Video agencies handle some of the heaviest material an agency can hold, and moving footage between systems is slow enough that people start keeping local copies to avoid it. Those copies then need looking after as well, usually by whoever happened to make them.",
            [
              { text: "Video agencies", page: 229 },
              " can manage client footage, versions, reviews and approved deliverables from one platform. ",
              { text: "Streaming previews", page: 147 },
              " help people inspect large media files without waiting for complete downloads, which weakens one of the reasons for copying footage out of the library.",
            ],
          ],
          points: ["Footage, versions and deliverables together", "Previews instead of local copies"],
        },
        {
          label: "Consultancies",
          heading: "Presentations and references for every engagement",
          icon: "briefcase",
          body: [
            "Brand consultancies work largely in documents: strategy decks, research, reference boards and guidelines. A new engagement often needs material from an earlier phase with the same client, which is hard to retrieve when that phase lived in a different system.",
            [
              { text: "Brand consultancies", page: 221 },
              " can centralise brand assets, presentations, references and campaign materials. ",
              { text: "Searchable documents", page: 27 },
              " can be located through extracted text, metadata and organisational tags, so an earlier deck can be found by what it says.",
            ],
          ],
          points: ["Earlier phases easier to retrieve", "Decks found by their contents"],
        },
      ],
      sources: [{ kind: "pdf", page: 219 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 229 }, { kind: "pdf", page: 147 }, { kind: "pdf", page: 221 }, { kind: "pdf", page: 27 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "measuring",
      eyebrow: "Hidden upkeep",
      heading: "Where agency upkeep accumulates",
      items: [
        {
          heading: "Arrangements that outlive their purpose",
          summary: "Systems set up for a pitch or a single project tend to stay open long after the work ends.",
          icon: "map",
          body: [
            "Alongside each client’s main system, agencies accumulate smaller arrangements: a shared folder for a pitch, a transfer space for one shoot, a review tool a client preferred for a season. Each needs its access kept current and someone who remembers it exists.",
            "Listing them account by account shows how much of that upkeep is repeated from one client to the next, and who has been quietly carrying it.",
          ],
          points: ["Every system, including forgotten ones", "The person who looks after each"],
        },
        {
          heading: "A client’s existing folder logic",
          summary: "Every client library arrives organised in its own way, and rebuilding that by hand is work nobody bills for.",
          icon: "folder",
          body: [
            "Some clients hand over tidy archives; others hand over years of folders named by whoever happened to create them. Recreating either structure manually in a new system is slow, and it is exactly the kind of setup work that never appears on an invoice.",
            [
              { text: "Folder mapping", page: 133 },
              " lets existing folder structures be mirrored or remapped during import, so a client’s own arrangement need not be rebuilt by hand.",
            ],
          ],
        },
        {
          heading: "Access lists that drift",
          summary: "Freelancers and account teams change, and each change has to reach every place the client’s work lives.",
          icon: "users",
          body: [
            "Freelancers join for a campaign and leave, and account teams are reshuffled. In separate systems each change has to be made, and remembered, wherever that client’s material sits, which is how former contributors keep access long after a project ends.",
            [
              "Checking access is easier when changes leave a record: with ",
              { text: "permission auditing", page: 170 },
              ", changes to permissions can be recorded in the audit history, creating accountability around access management.",
            ],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 133 }, { kind: "pdf", page: 170 }, EXPLAINS],
    },
    {
      kind: "checklist",
      id: "weigh",
      eyebrow: "What to weigh",
      heading: "What to weigh when judging agency efficiency",
      variant: "chips",
      items: [
        "Client systems maintained today",
        "Non-billable time spent on upkeep",
        "Access changes as teams rotate",
        "Clients with their own access requirements",
        "Effort of bringing each library across",
        "Tools built around individual clients",
      ],
      sources: [{ kind: "pdf", page: 354 }, { kind: "pdf", page: 165 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about agency efficiency",
      items: [
        {
          question: "Does agency efficiency depend on offering clients a white-label experience?",
          answer: [
            "No. ",
            { text: "White-label asset management", page: 166 },
            " is an approach agencies can use for client-facing asset management experiences, which is a decision about how clients see the agency’s work. The efficiency argument rests on running client libraries from one structured platform either way.",
          ],
        },
        {
          question: "Can an agency move existing client work onto one platform without pausing live accounts?",
          answer: [
            "That is the intention of ",
            { text: "migration without downtime", page: 292 },
            ": the workflow is designed to let organisations keep using existing storage while content is indexed in the background.",
          ],
        },
        {
          question: "Is agency efficiency worth pursuing for an agency with few clients?",
          answer: "Usually, since in a small agency the upkeep lands on producers and designers rather than on a dedicated operations role. The case is also simpler to make before the roster grows and each new account adds to the problem.",
        },
        {
          question: "How does agency efficiency relate to the cost of a DAM for agencies?",
          answer: [
            "They answer different questions. Efficiency concerns the upkeep an agency stops carrying; ",
            { text: "DAM pricing for agencies", page: 346 },
            " concerns what the platform costs, with agencies evaluating GetSibu on the number of clients, users, storage requirements and multi-tenant needs. A sound decision sets one beside the other.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 166 }, { kind: "pdf", page: 292 }, { kind: "pdf", page: 346 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on running client work efficiently",
      variant: "compact",
      pages: [162, 215, 346, 202, 219, 229],
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
