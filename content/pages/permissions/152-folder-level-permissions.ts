/**
 * 152 · Folder-Level Permissions — /permissions/folder-level-permissions
 *
 * Angle (cluster: access-control): the folder as the unit of access — control finer than organisation-wide
 * access, and how folder structure has to be designed for it to work. Creative Asset Permissions (151) owns the
 * overview, Default-Deny Access (154) the private-by-default model, Permission Hierarchies (178) the
 * combination with broad roles, Department Access (176) departments. Never describes how a grant is made.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of folder-based access design; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 152,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Permissions & Multi-Tenancy",
      lede: "How setting access folder by folder gives a creative library finer control than one organisation-wide rule, and how to shape folders so that control stays clear as the library grows.",
      visual: { diagram: "folder-access", focus: "folders" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 152 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Access that follows the folder structure",
      body: [
        "Folder-level permissions allow access in GetSibu to be controlled at a more detailed level than organisation-wide access. Rather than one decision covering the entire library, each folder can reflect who actually needs the material inside it.",
        "Organisation-wide access holds up while a library is small and everyone does similar work. It stops working once the library contains material with different audiences: a pitch that only the pitch team should see, a campaign under embargo, photography licensed for a single market. Creative teams already group that material into folders, which makes the folder a natural place to draw the line.",
        [
          "Folder control rarely stands alone. ",
          { text: "Permission hierarchies", page: 178 },
          " combine broad organisational roles with these more detailed controls, and ",
          { text: "creative asset permissions", page: 151 },
          " describes the wider set of controls that decide who can reach each area of the library.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["The folder as the unit of access", "Finer than organisation-wide rules", "One clear audience per folder", "Structure designed with access in mind", "Usage that confirms the design"],
      },
      highlight: {
        heading: "In practice",
        body: "An agency keeps its pitch folder limited to the pitch team, while the rest of the studio carries on working from the shared library around it.",
        tags: ["Folders", "Pitches", "Studios"],
      },
      glance: {
        heading: "Folder-level permissions in brief",
        facts: [
          { label: "Area", value: "Permissions & Multi-Tenancy" },
          { label: "Unit of access", value: "Folders" },
          { label: "Part of", value: "Creative Asset Permissions" },
          { label: "Combined in", value: "Permission Hierarchies" },
        ],
        actions: [{ kind: "route", path: "/permissions", label: "More in Permissions & Multi-Tenancy" }]
      },
      sources: [{ kind: "pdf", page: 152 }, { kind: "pdf", page: 178 }, { kind: "pdf", page: 151 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "comparison",
      eyebrow: "Side by side",
      heading: "Organisation-wide access compared with folder control",
      columns: ["Organisation-wide access", "Folder-level permissions"],
      emphasis: 1,
      rows: [
        ["Unit of decision", "The whole library", "Each folder"],
        ["Newly created folders", "Open to everyone at once", "Can stay private until access is granted"],
        ["Managers", "Reach well beyond their remit", "Scoped to specific folders or teams"],
        ["Departments", "See every department’s material", "Limited to the libraries relevant to their work"],
        ["Mixed audiences", "One compromise for everyone", "Access set area by area"],
      ],
      sources: [{ kind: "pdf", page: 152 }, { kind: "pdf", page: 154 }, { kind: "pdf", page: 155 }, { kind: "pdf", page: 176 }, { kind: "pdf", page: 151 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "design",
      eyebrow: "Step by step",
      heading: "Designing folders so their permissions make sense",
      intro: "Folder permissions are only as clear as the folder structure underneath them.",
      steps: [
        { heading: "List the audiences", body: "Write down the groups that need different material, such as the whole company, a production team, a client or a regional office.", icon: "users" },
        { heading: "Give each folder one audience", body: "Group assets so a folder serves a single audience, rather than mixing drafts meant for a few people with finished work meant for many.", icon: "folder" },
        { heading: "Split folders that mix audiences", body: "Where one folder serves several groups, divide it before assigning access, so nobody receives more than they need to reach the part that concerns them.", icon: "layers" },
        { heading: "Start with the sensitive areas", body: "Settle access for embargoed, licensed and client material first; the folders everyone may use are the easy decisions and can follow.", icon: "lock" },
        { heading: "Leave description to tags", body: "Folders are best at saying who material is for, while details such as product, colour or campaign are often better carried by hierarchical tags.", icon: "tag" },
        { heading: "Check real usage", body: "Folder access maps can show how folders are accessed across teams, which helps confirm that the structure matches how people actually work.", icon: "map", page: 173 },
      ],
      sources: [{ kind: "pdf", page: 8 }, { kind: "pdf", page: 173 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "structures",
      eyebrow: "By library structure",
      heading: "How folder permissions suit different kinds of library",
      tabs: [
        {
          label: "Markets",
          heading: "A folder for each market or region",
          icon: "globe",
          body: [
            "Brands that sell in several countries often need regional teams to work in their own material while everyone draws on a common set of approved assets.",
            [{ text: "Global brands", page: 224 }, " can organise assets across markets while keeping appropriate folder permissions and approval workflows in place."],
          ],
          points: ["Regional work kept apart", "Shared assets in a folder of their own"],
        },
        {
          label: "Campaigns",
          heading: "Campaign folders that widen at launch",
          icon: "megaphone",
          body: [
            "While a campaign is in production it usually belongs to a small group; once it launches, the finished assets need a far wider audience.",
            "Keeping drafts and finished work in separate folders lets each carry its own access, so opening the finished assets to a wider audience does not open the drafts along with them.",
          ],
          points: ["Drafts and finals in different folders", "Wider access once the work is ready"],
        },
        {
          label: "Departments",
          heading: "Several departments sharing one library",
          icon: "building",
          body: [
            "Product marketing, internal communications and HR may all rely on the same library without needing each other’s working material.",
            [{ text: "Enterprise permissions", page: 169 }, " let teams apply structured access controls across departments, projects and folders, so each group’s area can follow its own rules."],
          ],
          points: ["Departments side by side", "Projects inside departments"],
        },
        {
          label: "Migrated drives",
          heading: "Folders inherited from old shared drives",
          icon: "upload",
          body: [
            "Shared drives tend to grow by habit, with broad access and folders that hold a little of everything. Moving them as they are brings those habits along.",
            [{ text: "Migration folder mapping", page: 294 }, " gives teams the flexibility to keep their existing organisation or create a new structure, which is the natural moment to reshape folders around their audiences."],
          ],
          points: ["Keep what works", "Rebuild what mixed audiences"],
        },
      ],
      sources: [{ kind: "pdf", page: 224 }, { kind: "pdf", page: 169 }, { kind: "pdf", page: 294 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about folder-level permissions",
      items: [
        {
          question: "Should every folder in a creative library have its own permissions?",
          answer: ["Not necessarily. Set folder access where audiences genuinely differ; for groups that need the same access, ", { text: "team access management", page: 175 }, " establishes consistent permissions across the group and keeps the number of exceptions down."],
        },
        {
          question: "Do folder permissions affect who can be mentioned in a discussion?",
          answer: ["They inform it. ", { text: "Team mentions", page: 66 }, " use folder-aware autocomplete, which helps ensure that the people you mention have appropriate visibility of the asset."],
        },
        {
          question: "Are changes to folder permissions recorded?",
          answer: ["Changes to permissions can be recorded in the audit history, which creates accountability around access management. ", { text: "Permission auditing", page: 170 }, " covers this in more detail."],
        },
      ],
      sources: [{ kind: "pdf", page: 152 }, { kind: "pdf", page: 175 }, { kind: "pdf", page: 66 }, { kind: "pdf", page: 170 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on access by folder",
      variant: "compact",
      pages: [151, 154, 178, 173, 170],
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
