/**
 * 169 · Enterprise Permissions — /permissions/enterprise-permissions
 *
 * Angle (cluster: access-control): structuring access across three overlapping dimensions at enterprise scale —
 * permanent departments, temporary projects that cut across them, and the folders where assets actually sit.
 * Department Access (176) owns relevance per department; Team Access (175) group consistency; Permission
 * Hierarchies (178) the layering of roles and folder controls. No inheritance rules or role lists are described.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of access structures in large organisations; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 169,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Permissions & Multi-Tenancy",
      lede: "How a large organisation can structure access across its departments, the projects that cut between them and the folders where assets live, and what to decide before those three views of the organisation collide.",
      visual: { diagram: "folder-access", focus: "folders" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 169 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Access shaped by departments, projects and folders at once",
      body: [
        "Enterprise teams can apply structured access controls in GetSibu across departments, projects and folders. Each of the three describes who needs what in a different way, and a large organisation has to reconcile all of them.",
        "In a small team one structure is usually enough. In an enterprise the structures overlap. Departments are permanent and follow the organisation chart; projects are temporary and draw people from several departments; folders are where the assets actually sit, and they rarely line up neatly with either. A product launch can involve marketing, legal, product and customer service for several months, then disband, while the folders it created carry on.",
        [
          "The more people share the library, the more that structure matters. ",
          { text: "Permission hierarchies", page: 178 },
          " combine broad organisational roles with more detailed folder-level controls, and ",
          { text: "department access", page: 176 },
          " is about giving each department only the creative libraries relevant to its work.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Departments, projects and folders together", "Structure instead of one-off grants", "Projects that cut across departments", "Folders as the place access lands", "Access that survives a reorganisation"],
      },
      highlight: {
        heading: "In practice",
        body: "A product marketer belongs to the marketing department, works on the spring launch project and needs one folder of licensed photography looked after by the brand team: three separate reasons for needing material, all at the same time.",
        tags: ["IT", "Marketing operations", "Department heads"],
      },
      glance: {
        heading: "Enterprise permissions in brief",
        facts: [
          { label: "Area", value: "Permissions & Multi-Tenancy" },
          { label: "Structured across", value: "Departments, projects and folders" },
          { label: "Layered with", value: "Permission Hierarchies", page: 178 },
          { label: "Security angle", value: "RBAC Security", page: 325 },
        ],
        actions: [{ kind: "route", path: "/permissions", label: "More in Permissions & Multi-Tenancy" }]
      },
      sources: [{ kind: "pdf", page: 169 }, { kind: "pdf", page: 178 }, { kind: "pdf", page: 176 }, { kind: "pdf", page: 325 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "dimensions",
      eyebrow: "Structure",
      heading: "The dimensions an enterprise access structure has to cover",
      intro: "Each dimension changes at its own pace, which is why none of them can carry access alone.",
      columns: ["What it represents", "How long it lasts", "The access question it raises"],
      rows: [
        { label: "Departments", page: 176, cells: ["Permanent functions such as marketing, sales or HR", "As long as the organisation chart", "Which libraries does this function rely on?"] },
        { label: "Projects", cells: ["Temporary work drawing on several functions", "Until the work is delivered", "Who from each department joins, and until when?"] },
        { label: "Folders", page: 152, cells: ["The places where assets are stored", "Often longer than the project that made them", "Who should reach this material now?"] },
        { label: "Teams", page: 175, cells: ["Groups of people doing the same work", "Changes as people arrive and leave", "Which access should the whole group share?"] },
      ],
      sources: [{ kind: "pdf", page: 169 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "complications",
      eyebrow: "Considerations",
      heading: "Where enterprise access structures get complicated",
      items: [
        {
          heading: "Projects that span departments",
          summary: "Cross-functional work is where access built only around departments runs out.",
          icon: "workflow",
          body: [
            "A campaign produced by marketing, product and legal needs a shared space that none of those departments owns alone. Giving the project folders of its own, open to the people assigned from each department, avoids widening any department’s access to another department’s entire library.",
          ],
        },
        {
          heading: "Folders that outlive their projects",
          summary: "When a project ends its material usually stays, but its audience changes.",
          icon: "archive",
          body: [
            "After launch, a project folder may need to become reference material for a wider group or be set aside. Decide at the start who will own it once the project team disbands, so its access is not frozen in the shape it had during production.",
            [{ text: "Asset archiving", page: 108 }, " retains historical content without allowing old material to interfere with everyday asset discovery."],
          ],
        },
        {
          heading: "Reorganisations and mergers",
          summary: "Enterprise structures change, and access tied to the names of old departments soon stops making sense.",
          icon: "building",
          body: [
            [
              "When two departments merge or a new business unit appears, access designed around the old structure becomes misleading. Access described in terms of responsibilities carries across more easily, and ",
              { text: "RBAC security", page: 325 },
              " limits what users can perform according to their organisational responsibilities.",
            ],
          ],
        },
        {
          heading: "Specialists who serve many functions",
          summary: "Some roles need a narrow slice of several departments’ material rather than any one department’s library.",
          icon: "user",
          body: [
            [
              "A rights and licensing coordinator, a brand guardian or an in-house translator may touch the work of much of the organisation while belonging to none of the departments involved. Giving such people a whole department’s access to cover one slice of its work hands them far more than they need. ",
              { text: "Individual permissions", page: 157 },
              " offer targeted access when organisational roles alone are not granular enough.",
            ],
          ],
        },
        {
          heading: "Markets and regions",
          summary: "Global organisations add geography as a further dimension of access.",
          icon: "globe",
          body: [
            [
              "Marketing teams in different countries may belong to one department yet need quite different material. ",
              { text: "Multi-market teams", page: 225 },
              " can separate content by region while maintaining centralised governance, so geography sits alongside department when access is planned.",
            ],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 108 }, { kind: "pdf", page: 325 }, { kind: "pdf", page: 157 }, { kind: "pdf", page: 225 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "stakeholders",
      eyebrow: "Who shapes it",
      heading: "The people who shape enterprise access",
      tabs: [
        {
          label: "IT and security",
          heading: "Setting the frame and protecting accounts",
          icon: "shield",
          body: [
            "IT and security teams care that access is controlled consistently and that accounts are well protected. They usually set expectations for how people sign in and how often access is reviewed, rather than deciding who needs a particular campaign folder.",
            ["In a library many departments depend on, ", { text: "multi-factor authentication", page: 336 }, " adds another layer of account protection."],
          ],
          points: ["Consistency across departments", "Protected accounts"],
        },
        {
          label: "Administrators",
          heading: "Turning the agreed structure into access",
          icon: "key",
          body: [
            ["The remit of ", { text: "organisation administrators", page: 158 }, " takes in access policies, users, folders and organisational settings. In an enterprise they translate the agreed pattern of departments and projects into the library, and keep it current as the organisation shifts."],
          ],
          points: ["Policies, users and folders", "Structure kept up to date"],
        },
        {
          label: "Department heads",
          heading: "Deciding what their function needs",
          icon: "building",
          body: [
            "Department heads know which material their people rely on and which of their own material is sensitive. They are best placed to confirm what the department should reach, and what other departments should not see of theirs.",
          ],
          points: ["What the department relies on", "What must stay with it"],
        },
        {
          label: "Project leads",
          heading: "Assembling access for temporary teams",
          icon: "users",
          body: [
            "A project lead knows who has been assigned from each department and when their part ends. Involving project leads keeps project access accurate while the work runs, and gives one person clear responsibility for winding it down afterwards.",
          ],
          points: ["Who is assigned, and until when", "Access wound down at the end"],
          link: { page: 155, label: "Manager Permissions" },
        },
      ],
      sources: [{ kind: "pdf", page: 336 }, { kind: "pdf", page: 158 }, { kind: "pdf", page: 155 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about enterprise permissions",
      items: [
        {
          question: "Should the people who can reach a folder also be able to approve what is in it?",
          answer: [
            "Not necessarily. ",
            { text: "Creative asset governance", page: 114 },
            " defines who can upload, edit, approve, download and manage assets, and in a large organisation those are separate questions worth answering area by area rather than bundling into one decision about access.",
          ],
        },
        {
          question: "Where should an enterprise start when structuring access to a creative library?",
          answer: [
            "With the permanent structure: which departments exist and which libraries each relies on. Projects and exceptions are easier to add afterwards. For organisations moving an existing library, ",
            { text: "DAM migration strategy", page: 289 },
            " begins in the same place, with understanding existing storage, metadata, permissions and organisational requirements.",
          ],
        },
        {
          question: "How can an enterprise check that its permissions still fit the organisation?",
          answer: [
            "Compare two views. With ",
            { text: "permission auditing", page: 170 },
            ", changes to permissions can be recorded in the audit history, giving a record of how access has been reshaped, while analytics behind ",
            { text: "folder access maps", page: 173 },
            " can help show how folders are actually accessed across teams. Where either drifts from the intended structure of departments and projects, the structure needs attention.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 114 }, { kind: "pdf", page: 289 }, { kind: "pdf", page: 170 }, { kind: "pdf", page: 173 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on access across a large organisation",
      variant: "compact",
      pages: [176, 178, 175, 158, 170, 223],
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
