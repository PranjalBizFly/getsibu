/**
 * 303 · Cloud-Based Asset Management — /architecture/cloud-based-asset-management
 *
 * Angle (cluster: architecture-infrastructure): the access model of a cloud-based library — organisations reach
 * their creative libraries through supported clients and integrations rather than through folders tied to one
 * network, and what changes when asset management moves to the cloud. Global Asset Access (314) owns teams across
 * regions, GetSibu Integrations (241) owns the integrations themselves. No hosting providers, regions or
 * maintenance claims; the list of supported clients is not enumerated.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of cloud-based access to creative libraries in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 303,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Architecture & Performance",
      lede: "See what managing a creative library in the cloud involves: the supported clients and integrations through which GetSibu is reached, and what changes compared with folders tied to one office network.",
      visual: { diagram: "architecture-stack", focus: "clients" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 303 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A library people connect to, wherever they work",
      body: [
        "GetSibu’s cloud-based architecture allows organisations to access their creative libraries through supported clients and integrations. In this model the library is a service that people and software connect to, rather than a set of folders sitting on one office network.",
        "Shared drives tie a library to a place. Access depends on being on the right network, sync tools spread copies across laptops that slowly fall out of step, and colleagues away from the main office end up with either broad access or files sent by email. As teams spread across homes, studios and time zones, those workarounds multiply.",
        [
          "Once a library can be reached from anywhere, deciding who may reach what becomes a deliberate act. GetSibu provides ",
          { text: "granular permissions", page: 151 },
          " to control access to different areas of the creative library, and ",
          { text: "asset sharing can be controlled through permissions", page: 172 },
          " rather than relying only on unrestricted links.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Supported clients and integrations", "One library instead of synced copies", "Applications connecting through the API", "Access decided by permissions", "Content from more than one kind of source"],
      },
      highlight: {
        heading: "In practice",
        body: "An editor in the studio, a producer working from home and a colleague in a regional office all work in one library, each seeing only the areas they have been given.",
        tags: ["Remote teams", "Regional offices", "Studios"],
      },
      glance: {
        heading: "Cloud-based access in brief",
        facts: [
          { label: "Area", value: "Architecture & Performance" },
          { label: "Access through", value: "Supported clients and integrations" },
          { label: "Controlled by", value: "Creative Asset Permissions", page: 151 },
          { label: "Builds on", value: "GetSibu Architecture", page: 301 },
        ],
        actions: [{ kind: "route", path: "/architecture", label: "More in Architecture & Performance" }]
      },
      sources: [{ kind: "pdf", page: 303 }, { kind: "pdf", page: 151 }, { kind: "pdf", page: 172 }, { kind: "pdf", page: 154 }, { kind: "pdf", page: 301 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "clients",
      eyebrow: "Ways in",
      heading: "Three routes by which people and software reach the library",
      tabs: [
        {
          label: "The interface",
          heading: "A shared workspace for the people using the library",
          icon: "users",
          body: [
            "One client is the GetSibu interface itself: a shared workspace where teams search, review, organise and collaborate around digital assets.",
            "Because GetSibu is designed API-first, developers can interact with the same platform capabilities that the interface uses. The interface is one way into the platform rather than the only one.",
          ],
          points: ["Search, review, organisation and collaboration", "Capabilities shared with the API"],
          link: { page: 90, label: "Creative Team Workspace" },
        },
        {
          label: "Custom applications",
          heading: "Software an organisation builds for itself",
          icon: "code",
          body: [
            "Some organisations want creative assets to appear inside systems they already run, such as a product catalogue, an intranet or an internal production tool.",
            [
              "The API allows organisations to ",
              { text: "build custom applications around the GetSibu asset infrastructure", page: 279 },
              ". Those requests are authenticated with supported credentials, so the applications can work within appropriate security boundaries.",
            ],
          ],
          points: ["Custom applications on the asset infrastructure", "Authenticated API requests"],
        },
        {
          label: "Integrations",
          heading: "Connections to the tools teams already use",
          icon: "plug",
          body: [
            "Creative work already runs through a set of tools, and an integration lets those tools reach the library instead of asking people to copy files between them.",
            [
              "GetSibu connects with existing tools so organisations need not rebuild their creative workflow from scratch, and teams can ",
              { text: "request custom integrations", page: 260 },
              " for tools outside the supported ecosystem.",
            ],
          ],
          points: ["Existing workflows kept in place", "Custom integrations on request"],
          link: { page: 241, label: "GetSibu Integrations" },
        },
      ],
      sources: [{ kind: "pdf", page: 90 }, { kind: "pdf", page: 253 }, { kind: "pdf", page: 279 }, { kind: "pdf", page: 275 }, { kind: "pdf", page: 256 }, { kind: "pdf", page: 241 }, { kind: "pdf", page: 260 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "drives-versus-cloud",
      eyebrow: "Side by side",
      heading: "Folders on a network compared with a cloud-based library",
      columns: ["Shared drives and synced folders", "Cloud-based GetSibu library"],
      emphasis: 1,
      rows: [
        ["Keeping everyone aligned", "Synced copies that drift apart", "One shared source of truth"],
        ["Finding a file", "Browsing folder paths from memory", "Search across the entire creative library"],
        ["Checking a long video", "Copying the whole file across the network first", "Streaming previews without full downloads"],
        ["Connecting other software", "Scripts that depend on folder paths", "Programmatic access through an API"],
        ["Protecting accounts", "Often reliant on being on the right network", "Multi-factor authentication as an added layer"],
      ],
      sources: [{ kind: "pdf", page: 10 }, { kind: "pdf", page: 16 }, { kind: "pdf", page: 306 }, { kind: "pdf", page: 261 }, { kind: "pdf", page: 336 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "considerations",
      eyebrow: "Considerations",
      heading: "What changes when asset management moves to the cloud",
      items: [
        {
          heading: "Connections become part of the workflow",
          summary: "Large media now travels over networks that the organisation does not control.",
          icon: "network",
          body: [
            "When a library is reached over the internet, the quality of each person’s connection matters more than it did on an office network, and very large originals are the first to feel it.",
            ["Thumbnails give a visual preview without downloading the original file, and ", { text: "resumable uploads", page: 137 }, " help prevent large transfers from starting again from the beginning after a network interruption."],
          ],
        },
        {
          heading: "Content can come from more than one source",
          summary: "A central library does not require every asset to arrive by the same route.",
          icon: "folder",
          body: [
            "Libraries are rarely built from a single place: some material sits on existing drives, some on servers in an office, and new work is added as it is made.",
            ["GetSibu provides one central location for creative assets drawn from ", { text: "connected drives, local infrastructure and direct uploads", page: 6 }, ", so management is brought together even when content arrives by different routes."],
          ],
        },
        {
          heading: "Distance still matters",
          summary: "People reach a cloud-based library from wherever they are, near to or far from the infrastructure serving it.",
          icon: "globe",
          body: [
            "People reach a cloud-based library from wherever they happen to be, and the further content has to travel, the more a large preview or file makes itself felt.",
            [{ text: "CDN-based delivery", page: 314 }, " can support teams working across different geographical regions."],
          ],
        },
        {
          heading: "Decisions about content stay with the organisation",
          summary: "Moving management to the cloud changes where a library is reached from, not who decides about its content.",
          icon: "building",
          body: [
            "Which teams may see which areas, how long material is kept and what counts as approved for use remain questions for the organisation, wherever its people happen to be working.",
            ["Writing those decisions down is the work of ", { text: "creative data governance", page: 339 }, ", which establishes rules around access, retention, usage and asset management."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 146 }, { kind: "pdf", page: 137 }, { kind: "pdf", page: 6 }, { kind: "pdf", page: 314 }, { kind: "pdf", page: 339 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about cloud-based asset management",
      items: [
        {
          question: "Can a remote creative team collaborate in a cloud-based GetSibu library?",
          answer: [
            "Yes. ",
            { text: "Remote teams can collaborate", page: 88 },
            " around the same assets through comments, mentions, approvals and shared searches.",
          ],
        },
        {
          question: "Can one cloud-based GetSibu platform hold separate libraries for several clients?",
          answer: [
            "GetSibu is designed for organisations that need ",
            { text: "multiple isolated environments", page: 160 },
            ", such as agencies managing several clients, and client-specific authentication options can support separate access controls for different customers.",
          ],
        },
        {
          question: "Where should developers start when connecting software to a cloud-based GetSibu library?",
          answer: ["With the ", { text: "API documentation", page: 273 }, ", which provides the information developers need to build integrations against the platform."],
        },
        {
          question: "How is cloud-based asset management different from syncing files to a cloud drive?",
          answer: "A synced drive copies files to each computer and tries to keep those copies in step. A cloud-based asset library keeps one managed collection and puts the work around each file, such as search, previews, permissions and discussion, in the same place.",
        },
      ],
      sources: [{ kind: "pdf", page: 88 }, { kind: "pdf", page: 160 }, { kind: "pdf", page: 165 }, { kind: "pdf", page: 273 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on reaching a library from anywhere",
      variant: "compact",
      pages: [301, 241, 279, 314, 88, 151],
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
