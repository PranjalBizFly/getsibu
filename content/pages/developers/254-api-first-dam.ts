/**
 * 254 · API-First DAM — /developers/api-first-dam
 *
 * Angle (cluster: api-platform): API-first as positioning — organisations building custom experiences around the
 * GetSibu asset system for audiences the library interface is not designed for (clients, colleagues elsewhere in
 * the organisation, the products it runs, people who supply files), and what building them commits you to.
 * REST API (253) owns the architecture the interface uses; Developer API (255) which workflows developers
 * integrate; Custom Asset Applications (279) whole applications. No endpoints, versions, client libraries or code.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of API-first design and custom experiences in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 254,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "API & Developers",
      lede: "See which audiences beyond the library team a purpose-built experience can serve, what building one commits an organisation to, and how a retail brand might go about it.",
      visual: { diagram: "api-flow" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 254 }, { kind: "pdf", page: 166 }, { kind: "pdf", page: 279 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Experiences built around the asset system, not around one interface",
      body: [
        "GetSibu is designed as an API-first digital asset management platform, which allows organisations to build custom experiences around the underlying asset system instead of routing every audience through a single interface.",
        "A DAM’s own interface is designed for the people who look after and work in the library every day. Plenty of people who need assets never manage anything, and for them a purpose-built experience that shows only what they need can be easier than learning a full asset management workspace.",
        [
          "An experience can be as small as a single task or as large as a whole tool. At the larger end, ",
          { text: "custom asset applications", page: 279 },
          " are built around the GetSibu asset infrastructure, and ",
          { text: "GetSibu for Developers", page: 280 },
          " sets out the developer-oriented foundation for organisations bringing asset management into their existing software.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["API-first by design", "Experiences built for one audience", "Client-facing and white-label approaches", "Ownership of what you build", "Governance kept in the library"],
      },
      glance: {
        heading: "API-first DAM in brief",
        facts: [
          { label: "Area", value: "API & Developers" },
          { label: "Positioning", value: "API-first digital asset management" },
          { label: "Architecture", value: "REST API", page: 253 },
          { label: "Built for", value: "Custom experiences around the asset system" },
        ],
        actions: [{ kind: "route", path: "/developers", label: "More in Developers" }]
      },
      sources: [{ kind: "pdf", page: 254 }, { kind: "pdf", page: 279 }, { kind: "pdf", page: 280 }, { kind: "pdf", page: 253 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "audiences",
      eyebrow: "Who experiences are for",
      heading: "Custom experiences for audiences beyond the library team",
      tabs: [
        {
          label: "Clients",
          heading: "A client-facing experience under the agency’s own name",
          icon: "briefcase",
          body: [
            ["Agencies often want clients to reach their assets without being shown the tooling behind the service. ", { text: "White-label asset management", page: 166 }, " is an approach agencies can use for client-facing asset management experiences."],
            "Presentation matters less than separation. Client environments in GetSibu can remain logically isolated, so assets from one client are not mixed with another client’s library.",
          ],
          points: ["Presented as the agency’s own service", "Each client environment kept apart"],
        },
        {
          label: "Colleagues",
          heading: "Approved material for people who never manage the library",
          icon: "users",
          body: [
            "Sales teams and regional offices need finished assets, not the drafts, statuses and discussions around them. An experience built for them can present a narrow slice of the library in terms they already recognise.",
            ["Inside GetSibu, teams can create ", { text: "approved-only views", page: 103 }, " so users reach content that has completed the required review, which is a useful model when deciding what any custom experience should show."],
          ],
          points: ["Finished assets, not work in progress", "Language the audience already uses"],
        },
        {
          label: "Products",
          heading: "Asset information inside the systems you run",
          icon: "store",
          body: [
            "Organisations that publish products, courses or listings often keep descriptions in one system and imagery in another, with someone reconciling the two by hand.",
            ["Because the ", { text: "API can expose asset information", page: 264 }, ", those systems can work with metadata programmatically instead of relying on details pasted between tools."],
          ],
          points: ["Metadata used by other systems", "Fewer details copied by hand"],
        },
        {
          label: "Contributors",
          heading: "A simple way in for people who supply files",
          icon: "upload",
          body: [
            "Photographers, freelancers and partner studios deliver material but have no reason to learn how a library is organised. An experience built around one task, handing over files, suits them better than a full workspace.",
            ["The ", { text: "asset upload API", page: 262 }, " allows external applications to send files into the GetSibu environment, which is the starting point for that kind of experience."],
          ],
          points: ["One task: handing over files", "No library structure to learn"],
        },
      ],
      sources: [{ kind: "pdf", page: 166 }, { kind: "pdf", page: 161 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 264 }, { kind: "pdf", page: 262 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "commitments",
      eyebrow: "Considerations",
      heading: "What building your own experience commits you to",
      items: [
        {
          heading: "Owning what you build",
          summary: "Whatever an organisation builds, it maintains.",
          icon: "user",
          body: [
            "A custom experience is a product in its own right. Someone has to fix it, adapt it when the audience’s needs change and retire it when nobody uses it any more. Plan for that before the first release rather than after it.",
          ],
        },
        {
          heading: "Showing no more than the audience needs",
          summary: "A custom experience should never reveal assets its audience has no reason to see.",
          icon: "lock",
          body: [
            ["Design around the narrowest set of assets the audience needs. The experience’s requests are authenticated with ", { text: "supported authentication credentials", page: 275 }, ", and those credentials deserve the same care as an administrator’s password."],
          ],
        },
        {
          heading: "Serving several clients from shared tooling",
          summary: "One experience used by many clients must not blur their libraries.",
          icon: "building",
          body: [
            ["Agencies tempted to build a single portal for every client should design the separation in from the first sketch. ", { text: "API access can include tenant context", page: 276 }, ", so multi-tenant environments stay properly separated when software, not a person, is making the request."],
          ],
        },
        {
          heading: "Designing for the audience, not the library",
          summary: "The structure that suits the people who organise assets rarely suits anyone else.",
          icon: "compass",
          body: [
            "Folder hierarchies and tag vocabularies are built by and for the people who organise a library. A custom experience earns its place by translating them into the words its audience uses: product names for a web team, campaign names for a regional office.",
          ],
        },
        {
          heading: "Keeping decisions in the library",
          summary: "A custom experience works best as a window onto decisions, not a second place to make them.",
          icon: "approval",
          body: [
            ["Review, approval and organisation belong where the library’s rules apply. ", { text: "Creative asset governance", page: 114 }, " defines who can upload, edit, approve, download and manage assets, and an experience that bypasses those decisions undermines them."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 275 }, { kind: "pdf", page: 276 }, { kind: "pdf", page: 114 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A retail brand gives store managers their own way in",
      team: "A retail brand",
      situation: "A retail brand’s marketing team manages in-store promotional material in GetSibu. Store managers need current posters and display artwork but have no reason to learn the library.",
      steps: [
        {
          heading: "The need is narrowed",
          body: "The marketing team finds that store managers want one thing: approved in-store material for the current season, in their own market.",
        },
        {
          heading: "Approval stays in GetSibu",
          body: ["Sign-off continues inside the library, where the team uses ", { text: "brand asset approval", page: 71 }, " gates to keep approved creative assets separate from drafts and work in progress."],
        },
        {
          heading: "Developers build a store finder",
          body: ["The brand’s developers use the ", { text: "asset search API", page: 263 }, " to add a simple search to the internal tool store managers already open every morning."],
        },
        {
          heading: "Store managers shape the next release",
          body: "Managers ask for installation guides beside the posters, so the team adds those documents to what the finder shows in its next version.",
        },
      ],
      outcome: "Store managers look for in-store material from a tool they already use, while the marketing team keeps review and organisation in one library.",
      link: { page: 231, label: "GetSibu for Retail Brands" },
      sources: [{ kind: "pdf", page: 71 }, { kind: "pdf", page: 263 }, { kind: "pdf", page: 231 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about API-first DAM",
      items: [
        {
          question: "Does an API-first DAM mean an organisation has to build something?",
          answer: ["No. Building is an option rather than a requirement. A team can work through the GetSibu interface alone and turn to the ", { text: "Developer API", page: 255 }, " only when a particular audience or system needs something the interface is not the right place for."],
        },
        {
          question: "Does building custom experiences replace the GetSibu interface?",
          answer: ["No. The interface remains ", { text: "the shared workspace", page: 90 }, " where teams search, review, organise and collaborate around assets. Custom experiences sit beside it for audiences with narrower needs."],
        },
        {
          question: "How should an API-first DAM be evaluated differently?",
          answer: ["Assess it twice: once as a workspace for the library team, and once as a foundation for the experiences you might build, checking the tasks those experiences need against the ", { text: "API documentation", page: 273 }, "."],
        },
      ],
      sources: [{ kind: "pdf", page: 255 }, { kind: "pdf", page: 90 }, { kind: "pdf", page: 273 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on building with GetSibu",
      variant: "compact",
      pages: [253, 279, 255, 166, 280, 388],
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
