/**
 * 151 · Creative Asset Permissions — /permissions/creative-asset-permissions
 *
 * Angle (cluster: access-control): the overview of granular permissions across library areas — why one library
 * needs different access for different areas, which controls make that possible, and what to settle before
 * setting them. Folder-Level Permissions (152) owns folder granularity, Default-Deny Access (154) the access
 * model for new folders, the role pages (155–158) each responsibility, Permission Hierarchies (178) the
 * combination of roles and folders. Never presents a role list.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of access control practice in creative libraries; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 151,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Permissions & Multi-Tenancy",
      lede: "An introduction to how GetSibu permissions decide who can reach each area of a creative library, and to the folder, team and individual controls that make that access granular.",
      visual: { diagram: "folder-access", focus: "folders" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 151 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 175 }, { kind: "pdf", page: 157 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Deciding who can reach each part of the library",
      body: [
        "GetSibu provides granular permissions, so an organisation can control who can access the different areas of its creative library instead of giving everyone the same view of everything.",
        "A creative library rarely serves a single audience. One system can hold a campaign that has not launched, footage shot under a restrictive licence, a client’s confidential product imagery and a set of approved logos meant for the whole company. Treating all of that alike forces an awkward choice: lock the library down so tightly that people cannot find what they need, or open it so widely that unreleased work travels further than it should.",
        [
          "Permissions also shape how people work together inside the library. Team mentions use folder-aware autocomplete, which helps people bring in colleagues who have appropriate visibility of an asset, and GetSibu pairs ",
          { text: "collaboration with permissions", page: 180 },
          " so a team can work on sensitive material without losing control of it.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Access decided area by area", "Folder-level control", "New folders private until granted", "Scoped access for managers and editors", "Targeted grants for individuals", "Permission changes on record"],
      },
      highlight: {
        heading: "In practice",
        body: "A marketing department can open its approved brand assets to the wider organisation while next season’s campaign folder stays limited to the people producing it.",
        tags: ["Folders", "Teams", "Individuals"],
      },
      glance: {
        heading: "Permissions in brief",
        facts: [
          { label: "Area", value: "Permissions & Multi-Tenancy" },
          { label: "Controls", value: "Who can access each area of the library" },
          { label: "Finer control", value: "Folder-Level Permissions" },
          { label: "Security angle", value: "RBAC Security" },
        ],
        actions: [{ kind: "route", path: "/permissions", label: "More in Permissions & Multi-Tenancy" }]
      },
      sources: [{ kind: "pdf", page: 151 }, { kind: "pdf", page: 66 }, { kind: "pdf", page: 180 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 325 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "controls",
      eyebrow: "What it covers",
      heading: "The controls that make access granular",
      intro: "Together these describe how access to a creative library can be shaped around the people who use it.",
      items: [
        {
          heading: "Folder-level permissions",
          body: "Access can be controlled folder by folder, which is a more detailed level than a single rule for the whole organisation.",
          icon: "folder",
          points: ["Different access for different folders", "Suits libraries that serve many audiences"],
          page: 152,
        },
        {
          heading: "Private new folders",
          body: "A newly created folder can remain private until access is explicitly granted, so fresh content is not exposed automatically.",
          icon: "lock",
          points: ["Nothing new is shared by default", "Opening a folder is a deliberate step"],
          page: 154,
        },
        {
          heading: "Scoped access for managers",
          body: "Managers can receive access to the specific folders or teams they look after while staying restricted from areas outside their responsibilities.",
          icon: "briefcase",
          points: ["Responsibility defines the scope", "Other areas stay out of reach"],
          page: 155,
        },
        {
          heading: "Working access for editors",
          body: "Editors can be given the access they need to work with creative assets without taking on administrative privileges they have no use for.",
          icon: "palette",
          points: ["Room to do the creative work", "No unnecessary administration"],
          page: 156,
        },
        {
          heading: "Targeted individual access",
          body: "When organisational roles alone are not precise enough, an individual user can receive access aimed at exactly what they need.",
          icon: "user",
          points: ["Handles the exceptions", "Avoids widening a whole role"],
          page: 157,
        },
        {
          heading: "Organisation administration",
          body: "Organisation administrators manage access policies, users, folders and organisational settings.",
          icon: "building",
          points: ["Clear responsibility for access policy", "Users, folders and settings looked after"],
          page: 158,
        },
        {
          heading: "Team and department access",
          body: "Team-based access establishes consistent permissions across a group of users, and departments can be limited to the creative libraries relevant to their work.",
          icon: "users",
          points: ["The same access for everyone in a group", "Departments see what concerns them"],
          page: 175,
        },
      ],
      sources: [{ kind: "pdf", page: 152 }, { kind: "pdf", page: 154 }, { kind: "pdf", page: 155 }, { kind: "pdf", page: 156 }, { kind: "pdf", page: 157 }, { kind: "pdf", page: 158 }, { kind: "pdf", page: 175 }, { kind: "pdf", page: 176 }],
    },
    {
      kind: "accordion",
      id: "considerations",
      eyebrow: "Considerations",
      heading: "What to settle before setting permissions",
      items: [
        {
          heading: "Map the areas before the people",
          summary: "Access is easier to reason about once the library’s areas reflect who they are for.",
          icon: "map",
          body: [
            "Start by asking which parts of the library have different audiences: material for everyone, work in production, client work, licensed or embargoed content. When those areas are clear, most permission decisions follow from them.",
            "GetSibu helps teams organise assets using structured folders and scalable taxonomies, so the structure that makes assets findable can also make access easier to understand.",
          ],
        },
        {
          heading: "Grant for responsibilities, not convenience",
          summary: "Broad access handed out to save a request is the hardest kind to take back.",
          icon: "shield",
          body: [
            "Giving someone access to everything is quick, but it quietly turns every future folder into shared material. Access that matches what a person is responsible for stays understandable as the team changes.",
            [{ text: "Role-based access control", page: 325 }, " follows the same principle from a security perspective: it limits what users can perform according to their organisational responsibilities."],
          ],
        },
        {
          heading: "Expect exceptions and keep them visible",
          summary: "Freelancers, secondments and one-off projects rarely fit a neat structure.",
          icon: "flag",
          body: [
            "Exceptions are normal in creative work. The risk is not the exception itself but forgetting it exists once the project ends.",
            "Permission hierarchies let organisations combine broad organisational roles with more detailed folder-level controls. Writing down why each exception exists, and when it should be looked at again, keeps it from outliving its purpose.",
          ],
        },
        {
          heading: "Decide how sharing should work",
          summary: "A link that anyone can forward is a permission decision too.",
          icon: "network",
          body: [
            "Once a file has been sent as an open link, nobody can say for certain who has seen it. Teams handling unreleased or client material usually want sharing to follow the same rules as the library.",
            ["With ", { text: "secure asset sharing", page: 172 }, ", sharing can be controlled through permissions rather than relying only on unrestricted links."],
          ],
        },
        {
          heading: "Plan how access will be reviewed",
          summary: "Permissions drift unless someone can see how they changed.",
          icon: "audit",
          body: [
            [{ text: "Permission auditing", page: 170 }, " means changes to permissions can be recorded in the audit history, creating accountability around access management. Access history adds information about important user interactions with the library."],
          ],
        },
        {
          heading: "Remember what permissions do not decide",
          summary: "Access says who can reach an asset, not whether the asset is ready to use.",
          icon: "approval",
          body: [
            "A person may be allowed into a folder that still holds drafts. Whether something is fit to publish is a review question, not an access question.",
            "That is why GetSibu pairs permissions with approval workflows, which together help ensure that people access and distribute the right content.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 8 }, { kind: "pdf", page: 325 }, { kind: "pdf", page: 178 }, { kind: "pdf", page: 172 }, { kind: "pdf", page: 170 }, { kind: "pdf", page: 171 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 10 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A creative library opened up to the wider company",
      team: "An in-house creative team",
      situation: "An in-house creative team has kept its library to itself for years. Sales, regional marketing and an outside agency now want access, but an unreleased campaign and some licensed photography must stay contained.",
      steps: [
        {
          heading: "The areas come first",
          body: "The team arranges the library into folders by audience: approved brand assets, campaigns in production and licensed photography.",
        },
        {
          heading: "Groups get consistent access",
          body: "Sales and regional marketing receive the same permissions on the approved brand assets as groups, rather than person by person.",
        },
        {
          heading: "The campaign stays with its makers",
          body: "Access to the campaign in production remains limited to the people producing it, and a folder added for the launch film starts out private.",
        },
        {
          heading: "The agency reaches one folder",
          body: "The agency’s producer receives targeted access to the single folder their team contributes to, without joining a broader role.",
        },
      ],
      outcome: "One library now serves several audiences, and each group reaches the areas meant for it without the creative team handing out files on request.",
      link: { page: 222, label: "GetSibu for In-House Creative Teams" },
      sources: [{ kind: "pdf", page: 8 }, { kind: "pdf", page: 175 }, { kind: "pdf", page: 154 }, { kind: "pdf", page: 157 }, { kind: "pdf", page: 222 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about creative asset permissions",
      items: [
        {
          question: "What does “granular” mean for creative asset permissions?",
          answer: "It means access can differ from one area of the library to another instead of being the same for the whole organisation. The more closely those areas match the audiences for the work, the more precisely access can follow who each piece is for.",
        },
        {
          question: "How do creative asset permissions relate to asset governance?",
          answer: ["Permissions are one part of it. ", { text: "Creative asset governance", page: 114 }, " defines who can upload, edit, approve, download and manage assets, while permissions control who can reach the different areas of the library."],
        },
        {
          question: "Can creative asset permissions keep one department’s work away from another?",
          answer: ["Yes. ", { text: "Enterprise permissions", page: 169 }, " let teams apply structured access controls across departments, projects and folders, so a department’s material does not have to be visible to the rest of the organisation."],
        },
        {
          question: "When should an organisation plan its permissions?",
          answer: ["Before assets move in, ideally. Migration planning considers assets, metadata and permissions before a transfer begins, and ", { text: "DAM implementation", page: 299 }, " involves configuring users, folders and permissions alongside metadata and workflows."],
        },
      ],
      sources: [{ kind: "pdf", page: 114 }, { kind: "pdf", page: 169 }, { kind: "pdf", page: 290 }, { kind: "pdf", page: 299 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on controlling library access",
      variant: "compact",
      pages: [178, 170, 172, 325],
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
