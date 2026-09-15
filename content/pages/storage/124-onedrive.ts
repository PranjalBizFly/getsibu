/**
 * 124 · OneDrive Integration — /storage/onedrive (also serves merged 244)
 *
 * HELD draft (claim: storage-sources). Angle: OneDrive as workplace storage where employees save creative
 * material by default, connected as another source for the central GetSibu library. No setup steps,
 * authentication, sync behaviour, file types, permission translation or limits.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how creative material accumulates in workplace storage across an organisation; states no GetSibu or OneDrive capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 124,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Storage & Ingestion",
      lede: "Understand what it means to connect OneDrive, often an organisation’s default work storage, to the central GetSibu library, and why it tends to be one source among several rather than the whole picture.",
      visual: { diagram: "connector-flow", label: "OneDrive" },
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 124 }, { kind: "pdf", page: 244 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Work storage as one more source for the creative library",
      body: [
        "OneDrive provides another source for creative content that can be connected to the central GetSibu library. The integration allows organisations to incorporate Microsoft cloud storage into their creative library workflow.",
        "Where everyday work runs on the same family of workplace tools, OneDrive is frequently where employees save by default. That makes it a quiet home for a surprising amount of creative material: photographs from last year’s conference, a product video commissioned by a regional office, a presentation template someone improved and never shared. The storage was provided for general work, and creative files simply joined everything else.",
        "Because it is personal and team work storage, it is rarely the only place creative content lives. The same organisation may keep campaign material in shared areas, footage on studio storage and agency deliveries somewhere else again. Connecting OneDrive is less about one location than about making sure a meaningful share of the organisation’s creative work is not left out of the library.",
        [
          "GetSibu is built so that assets can enter ",
          { text: "through multiple sources", page: 135 },
          ", and ",
          { text: "centralised media storage", page: 150 },
          " is designed as a unified environment for the creative content those sources hold.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["OneDrive as another content source", "Connected to the central library", "Work storage in the creative workflow", "Creative files saved by habit, not design", "One source among several"],
      },
      highlight: {
        heading: "In practice",
        body: "An internal communications manager knows the best photographs of a site opening sit in a colleague’s work storage. With OneDrive connected as a source, those images can belong to the central library instead of arriving as an email attachment on request.",
        tags: ["Internal communications", "Photography", "Work storage"],
      },
      glance: {
        heading: "The OneDrive integration in brief",
        facts: [
          { label: "Area", value: "Storage & Ingestion" },
          { label: "Connects", value: "OneDrive as a content source" },
          { label: "Feeds", value: "The central GetSibu library" },
          { label: "Alongside", value: "Digital Asset Import", page: 135 },
        ],
      },
      sources: [{ kind: "pdf", page: 124 }, { kind: "pdf", page: 244 }, { kind: "pdf", page: 135 }, { kind: "pdf", page: 150 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "what-the-library-adds",
      eyebrow: "What connection adds",
      heading: "What the library offers material that lived in work storage",
      intro: "Work storage keeps files safe; a creative library is where they can be found, described and reused.",
      items: [
        {
          heading: "Search beyond one person’s files",
          body: "In work storage, a file is easiest to find for whoever saved it. Searching across the entire creative library lets colleagues reach material without knowing who saved it or where.",
          icon: "search",
          points: ["No need to know who saved it", "One search instead of asking around"],
          page: 16,
        },
        {
          heading: "A description where there was none",
          body: "Files saved to work storage rarely carry descriptive keywords. GetSibu can suggest tags during processing, and authorised users can review, approve or override them.",
          icon: "tag",
          points: ["Suggested tags for undescribed files", "Reviewed by authorised users"],
          page: 31,
        },
        {
          heading: "Approved material kept apart from drafts",
          body: "Work storage holds every stage of a file’s life side by side. In the library, teams can create approved-only views, so colleagues pick from content that has been through the required review.",
          icon: "approval",
          points: ["Final versions separated from drafts", "Review completed before reuse"],
          page: 103,
        },
        {
          heading: "Context about who made what",
          body: "Files in work storage are tied to whoever saved them. In GetSibu, creators and contributors can remain associated with assets, preserving context during collaboration and migration.",
          icon: "user",
          points: ["Credit kept with the asset", "Someone to ask about the work"],
          page: 116,
        },
      ],
      sources: [{ kind: "pdf", page: 16 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 116 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "before-connecting",
      eyebrow: "Before connecting",
      heading: "Questions to answer about creative work in employees’ storage",
      items: [
        {
          heading: "Personal storage or shared team areas",
          summary: "Creative material in an individual’s storage raises different questions from material in a team’s shared space.",
          icon: "users",
          body: [
            "Files in an employee’s own storage were saved on the assumption that few people would see them. Before relying on that material in a shared library, talk to the people whose storage it is: agree which areas are genuinely team material, and ask individuals to point out creative work of lasting value rather than treating everything they saved as fair game.",
          ],
        },
        {
          heading: "When people change roles or leave",
          summary: "Work storage is tied to people, and people move on.",
          icon: "history",
          body: [
            "What happens to a departing employee’s storage is set by the organisation’s own policies. The harder loss is usually knowledge: what a file shows, who commissioned it and where it was used. Capturing that while its owner is still around to explain it is far easier than reconstructing it afterwards.",
          ],
        },
        {
          heading: "Whoever manages work storage",
          summary: "IT usually governs this storage, so connecting it is a decision to share with them.",
          icon: "server",
          body: [
            [
              "The team responsible for workplace software sets policies on sharing, retention and access for that storage. Bringing them in early avoids surprises, and ",
              { text: "DAM implementation", page: 299 },
              " already involves configuring users, folders, permissions, integrations, metadata and workflows.",
            ],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 299 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "departments",
      eyebrow: "By department",
      heading: "Where creative content in work storage usually comes from",
      tabs: [
        {
          label: "Communications",
          heading: "Photography and video gathered from across the organisation",
          icon: "megaphone",
          body: [
            "Corporate and internal communications teams collect material produced all over an organisation: site openings, leadership updates, awards, employee stories. Much of it reaches them from colleagues who saved it in their own storage first.",
            ["Corporate communications teams can ", { text: "maintain a central source of truth", page: 240 }, " for presentations, photography, videos and public-facing assets."],
          ],
          points: ["Material from colleagues, not a studio", "Public-facing assets in one place"],
        },
        {
          label: "Marketing",
          heading: "Regional and product material made outside the central team",
          icon: "store",
          body: [
            "Regional marketers and product managers commission material locally and save it where they save everything else. The central marketing team often learns it exists only when someone asks for it.",
            ["Marketing teams can ", { text: "keep a central library", page: 213 }, " for campaign assets, product imagery, videos, presentations and other marketing materials."],
          ],
          points: ["Locally made material surfaced", "Campaign and product assets together"],
        },
        {
          label: "Learning",
          heading: "Training recordings and course material",
          icon: "graduation",
          body: [
            "Onboarding videos, recorded workshops and course slides are creative assets too, and they are regularly reused in recruitment and employer branding. They tend to stay with whoever produced them.",
            ["The same kind of material is at the heart of ", { text: "GetSibu for Education Teams", page: 237 }, ": course media, presentations, recordings and visual resources."],
          ],
          points: ["Recordings reused beyond training", "Course media kept findable"],
        },
        {
          label: "IT",
          heading: "Storage that is already provided and governed",
          icon: "shield",
          body: [
            "For IT, work storage is familiar ground: it is provided, secured and covered by existing policy. Incorporating it into the creative library workflow means starting from storage IT already understands rather than from an unfamiliar one.",
            ["Around the library itself, ", { text: "enterprise governance", page: 179 }, " combines roles, permissions, audit logs, authentication and organisational policies."],
          ],
          points: ["Familiar storage, existing policy", "Governance for the library as a whole"],
        },
      ],
      sources: [{ kind: "pdf", page: 240 }, { kind: "pdf", page: 213 }, { kind: "pdf", page: 237 }, { kind: "pdf", page: 179 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about the OneDrive integration",
      items: [
        {
          question: "Why connect OneDrive when colleagues already share files through it?",
          answer: "Sharing a file with named colleagues is not the same as making it findable by people who do not know it exists. The central library is where material from work storage can be searched and described alongside the rest of the organisation’s creative content.",
        },
        {
          question: "What does OneDrive add when a library already draws on other sources?",
          answer: ["Often the work of people outside creative teams. A ", { text: "centralised creative asset library", page: 6 }, " brings together assets from connected drives, local infrastructure and direct uploads, and employees’ work storage tends to hold pieces that studio storage and shared campaign areas never received."],
        },
        {
          question: "Which teams gain most from connecting OneDrive to GetSibu?",
          answer: "Teams whose creative material is produced across the organisation rather than by one central studio, such as communications, marketing and learning teams, together with the colleagues who reuse that material without knowing who made it.",
        },
      ],
      sources: [{ kind: "pdf", page: 124 }, { kind: "pdf", page: 6 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on connecting sources across an organisation",
      variant: "compact",
      pages: [150, 135, 6, 240, 213, 299],
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
