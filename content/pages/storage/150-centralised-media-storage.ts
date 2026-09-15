/**
 * 150 · Centralised Media Storage — /storage/centralised-media-storage
 *
 * Angle (cluster: centralisation): the storage view — one environment for content from multiple storage sources
 * that keeps organisational structure and access controls, and what it takes for centralising not to flatten
 * either. Centralised Creative Asset Library (6) owns gathering sources into one location and reducing disconnected
 * versions; Storage Architecture (318) owns object storage and partitioning; Client Tenant Isolation (161) and
 * Per-Client Storage (163) own separation between clients. Named storage providers are held and never mentioned.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how organisations centralise creative storage without losing structure or access; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 150,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Storage & Ingestion",
      lede: "See what it takes to manage creative content from several storage sources as one environment without flattening it, so that the structure people navigate by and the boundaries around sensitive work still hold.",
      visual: { diagram: "ingest-pipeline", focus: "sources" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 150 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "One environment that keeps its shape",
      body: [
        "GetSibu creates a unified environment for managing creative content from multiple storage sources while retaining organisational structure and access controls. Content comes together without being poured into a single undifferentiated space.",
        "Centralising storage tends to go wrong in one of two ways. The first flattens structure: files from several drives are copied into one place, and the folder arrangements that told people where things belonged are lost or tangled together. The second flattens access: once everything sits in one location it is either visible to everyone, or restrictions are rebuilt in a hurry and applied unevenly. Either failure can leave a single location harder to use than the scattered storage it replaced.",
        "Keeping structure and access is what separates a unified environment from a bigger shared drive. People keep the landmarks they navigate by, and the environment still has boundaries around confidential launches, client work and other sensitive material.",
        [
          "The same aim seen from the library side is the ",
          { text: "centralised creative asset library", page: 6 },
          ", which brings assets from connected drives, local infrastructure and direct uploads into one location to reduce confusion over disconnected versions.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Multiple storage sources, one environment", "Organisational structure retained", "Access controls retained", "More than a bigger shared drive", "Structure and access decided together"],
      },
      glance: {
        heading: "Centralised storage in brief",
        facts: [
          { label: "Area", value: "Storage & Ingestion" },
          { label: "Brings together", value: "Content from multiple storage sources" },
          { label: "Retains", value: "Organisational structure and access controls" },
          { label: "Library view", value: "Centralised Creative Asset Library", page: 6 },
        ],
        actions: [{ kind: "route", path: "/storage", label: "More in Storage & Ingestion" }]
      },
      sources: [{ kind: "pdf", page: 150 }, { kind: "pdf", page: 6 }, EXPLAINS],
    },
    {
      kind: "layers",
      id: "what-holds-together",
      eyebrow: "How it fits together",
      heading: "What a unified storage environment holds together",
      intro: "From where content comes from to who can reach it, each layer does a different job.",
      layers: [
        {
          label: "Sources",
          body: "Content can arrive from connected storage sources and from direct uploads, so the environment spans locations a team already uses instead of replacing all of them in one step.",
          page: 121,
        },
        {
          label: "Stored content",
          body: "Beneath the library, creative content can be held on object-storage infrastructure with organisational partitioning, which divides what is stored according to the organisation it belongs to.",
          page: 318,
        },
        {
          label: "Structure",
          body: "Existing folder structures can be mirrored or remapped during import, so the arrangement people depend on is either kept or deliberately redesigned rather than lost along the way.",
          page: 133,
        },
        {
          label: "Access",
          body: "Access can be set folder by folder rather than only for the whole organisation, and a newly created folder can stay private until someone is explicitly given access to it.",
          page: 152,
        },
        {
          label: "Client separation",
          body: "Where one platform serves several clients, each client environment can remain logically isolated, so a unified environment does not mean one client’s library mixed with another’s.",
          page: 161,
        },
        {
          label: "Oversight",
          body: "Storage analytics help show how the combined library is distributed across videos, images, documents and audio, a picture that was hard to assemble while content sat in separate places.",
          page: 148,
        },
      ],
      sources: [{ kind: "pdf", page: 121 }, { kind: "pdf", page: 318 }, { kind: "pdf", page: 133 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 154 }, { kind: "pdf", page: 161 }, { kind: "pdf", page: 148 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "roles",
      eyebrow: "Who it helps",
      heading: "What one environment changes for the people around it",
      tabs: [
        {
          label: "Team members",
          heading: "Familiar landmarks and a single place to search",
          icon: "users",
          body: [
            "For the people who use the material, the value of kept structure is that little has to be relearned on the first day: where folders were mirrored, the client, campaign and department folders they remember are still there.",
            ["What changes is reach. Teams can ", { text: "search across the entire creative library", page: 16 }, " rather than first working out which of several drives to look in and then opening folders one at a time."],
          ],
          points: ["No relearning on day one", "One search instead of several drives"],
        },
        {
          label: "Library managers",
          heading: "One structure to maintain instead of several",
          icon: "folder",
          body: [
            "Separate stores each drift in their own way, with duplicated folders, inconsistent names and empty areas nobody removes. Maintaining one environment turns several tidy-ups into a single, ongoing piece of work.",
            ["GetSibu provides a ", { text: "structured environment", page: 4 }, " in which assets can be organised through folders, tags, collections, metadata and permissions, so structure is not carried by folders alone."],
          ],
          points: ["Drift managed in one place", "Folders supported by tags and metadata"],
        },
        {
          label: "IT and security",
          heading: "Fewer separate places to govern",
          icon: "shield",
          body: [
            "Every separate store is another set of accounts, sharing settings and exceptions to review. Bringing content into one environment reduces how many places need that attention, provided access is reviewed with care from the outset.",
            [{ text: "Organisation administrators", page: 158 }, " can manage access policies, users, folders and organisational settings, which gives those decisions a clear home."],
          ],
          points: ["Fewer stores to review", "Access policy managed centrally"],
        },
      ],
      sources: [{ kind: "pdf", page: 16 }, { kind: "pdf", page: 4 }, { kind: "pdf", page: 158 }, { kind: "pdf", page: 150 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "decisions",
      eyebrow: "Decisions to make",
      heading: "Keeping structure and access intact while centralising",
      items: [
        {
          heading: "Which structure wins when sources disagree",
          summary: "Two drives rarely organise the same work in the same way.",
          icon: "layers",
          body: [
            "One source may file by client and year, another by internal job number. Before content comes together, decide which arrangement becomes the reference and how the other maps onto it, because an environment holding both logics leaves people unsure which one to follow.",
            ["When that choice is part of a wider move, ", { text: "migration folder mapping", page: 294 }, " gives teams the flexibility to maintain existing organisation or create a new structure."],
          ],
        },
        {
          heading: "An owner for every sensitive area",
          summary: "Access is easier to keep right when someone is accountable for each area.",
          icon: "lock",
          body: [
            "Confidential launches, client work and legal material each need someone who decides who belongs there. Agreeing those owners before content moves, in a short written list, means questions about access have an answer waiting instead of being settled under deadline pressure.",
          ],
        },
        {
          heading: "Old access is not automatically a good guide",
          summary: "Access on long-lived drives often reflects history rather than current need.",
          icon: "key",
          body: [
            "Shared drives collect access that nobody remembers granting: former project members, departed contractors, whole departments added for one urgent request. Centralising is a natural moment to ask who needs each area now, rather than treating an old sharing list as the answer.",
            ["A ", { text: "permission hierarchy", page: 178 }, " helps by combining broad organisational roles with more detailed folder-level controls, so the exceptions that remain are deliberate."],
          ],
        },
        {
          heading: "Folders for boundaries, tags for description",
          summary: "Not every way of classifying content belongs in the folder tree.",
          icon: "tag",
          body: [
            ["Folders are best kept for the distinctions that also decide access, such as client or department. Descriptive labels like product line, season or subject fit better in a taxonomy of ", { text: "hierarchical tags", page: 8 }, ", which keeps the folder tree shallow enough to protect with clear permissions."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 294 }, { kind: "pdf", page: 178 }, { kind: "pdf", page: 8 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about centralised media storage",
      items: [
        {
          question: "Does centralised media storage mean every team can see everything?",
          answer: ["No. Access controls are part of what the unified environment keeps, and ", { text: "departments can receive access", page: 176 }, " to only the creative libraries relevant to their work."],
        },
        {
          question: "Should every storage source be centralised at the same time?",
          answer: ["Rarely. Bringing sources in one at a time, starting with the most used, lets structure and access be checked before the next arrives. During a move, ", { text: "migration without downtime", page: 292 }, " is intended to keep existing storage usable while content is indexed in the background."],
        },
        {
          question: "What happens to meaningful folder names from the original storage?",
          answer: ["Whatever the new arrangement, the old location need not be forgotten: ", { text: "file paths are among the metadata", page: 132 }, " that can be preserved during migration, so a folder name that once identified a client or campaign stays attached to the asset as context."],
        },
      ],
      sources: [{ kind: "pdf", page: 176 }, { kind: "pdf", page: 292 }, { kind: "pdf", page: 132 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on bringing storage together",
      variant: "compact",
      pages: [6, 318, 133, 152, 161, 148],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Bring Your Creative Assets Together",
      conversionPage: 392,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 392 }],
    },
  ],
};

export default page;
