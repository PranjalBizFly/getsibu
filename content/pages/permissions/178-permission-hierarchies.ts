/**
 * 178 · Permission Hierarchies — /permissions/permission-hierarchies
 *
 * Angle (cluster: access-control): combining broad organisational roles with detailed folder-level controls — why layering
 * beats either extreme and how to keep each layer’s job clear. No inheritance or precedence rules are described; the page
 * tells readers to confirm how layers interact. No role list. Role-Based Access Control (153, framed) owns roles.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of layered access design; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 178,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Permissions & Multi-Tenancy",
      lede: "Why combining broad organisational roles with detailed folder controls is easier to live with than relying on either one alone, and how to keep the job of each layer clear as a library grows.",
      visual: { diagram: "folder-access", focus: "folders" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 178 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Broad roles above, folder detail beneath",
      body: [
        "Hierarchical permissions allow organisations to combine broad organisational roles with more detailed folder-level controls. The broad layer describes what people generally do; the detailed layer deals with particular areas of the library.",
        "Organisations tend to try one extreme first. Roles alone are simple but blunt: a role that suits everyday work says little about who belongs in the confidential launch folder. Folder controls alone are precise but exhausting: every folder needs its own list of people, and nobody can see the overall pattern. A hierarchy uses each where it is strongest, so the broad layer stays simple and detail appears only in the areas that need it.",
        [
          "Each layer is a topic in its own right. ",
          { text: "Role-based access control", page: 153 },
          " explains organising access around responsibilities, ",
          { text: "folder-level permissions", page: 152 },
          " cover control finer than organisation-wide access, and ",
          { text: "enterprise permissions", page: 169 },
          " apply structured access controls across departments, projects and folders.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Broad organisational roles", "Detailed folder-level controls", "A clear job for each layer", "Detail only where it is needed", "Access someone can explain"],
      },
      highlight: {
        heading: "In practice",
        body: "A marketing organisation settles its everyday library through a few broad roles and reserves folder-level decisions for the product launch area, whose audience is the launch team rather than the department.",
        tags: ["Administrators", "Library owners", "Marketing"],
      },
      glance: {
        heading: "Permission hierarchies in brief",
        facts: [
          { label: "Area", value: "Permissions & Multi-Tenancy" },
          { label: "Combines", value: "Broad roles and folder-level controls" },
          { label: "Broad layer", value: "Role-Based Access Control", page: 153 },
          { label: "Detailed layer", value: "Folder-Level Permissions", page: 152 },
        ],
        actions: [{ kind: "route", path: "/permissions", label: "More in Permissions & Multi-Tenancy" }]
      },
      sources: [{ kind: "pdf", page: 178 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 169 }, EXPLAINS],
    },
    {
      kind: "layers",
      id: "levels",
      eyebrow: "Layer by layer",
      heading: "Levels at which access decisions can be made",
      intro: "Each level answers a different question about who should reach what.",
      layers: [
        { label: "Organisation", body: "Organisation administrators can manage access policies, users, folders and organisational settings for the organisation as a whole.", page: 158 },
        { label: "Broad roles", body: "Role-based access control limits what users can perform according to their organisational responsibilities.", page: 325 },
        { label: "Groups", body: "Team-based access allows organisations to establish consistent permissions across groups of users.", page: 175 },
        { label: "Folders", body: "Folder-level permissions allow access to be controlled at a more detailed level than organisation-wide access, for areas whose audience is particular to them.", page: 152 },
        { label: "Individuals", body: "Individual users can receive targeted access when organisational roles alone do not provide enough granularity.", page: 157 },
      ],
      sources: [{ kind: "pdf", page: 158 }, { kind: "pdf", page: 325 }, { kind: "pdf", page: 175 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 157 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "flat-versus-layered",
      eyebrow: "The difference",
      heading: "One flat layer of access compared with a hierarchy",
      columns: ["Roles only, or folders only", "Roles combined with folder controls"],
      emphasis: 1,
      rows: [
        ["Everyday access", "Too blunt, or too laborious", "Handled by broad roles"],
        ["Sensitive areas", "Open to a whole role, or listed person by person", "Given folder-level detail"],
        ["Explaining one person’s access", "A rule that is too wide, or dozens of small ones", "A role and any folder-level detail"],
        ["After a reorganisation", "Every folder revisited, or roles stretched to fit", "Roles revised, folder detail kept where it matters"],
      ],
      sources: [{ kind: "pdf", page: 178 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "readable",
      eyebrow: "Practical advice",
      heading: "Keeping a permission hierarchy readable",
      items: [
        {
          heading: "Decide which layer answers which question",
          summary: "Each level should have a clear purpose that everyone managing access understands.",
          icon: "layers",
          body: [
            "A common split is that roles cover what people do, folder controls cover sensitive areas that need an audience of their own, and individual access covers genuine exceptions. When everyone who grants access works to the same split, decisions made by different people still fit together.",
          ],
        },
        {
          heading: "Add detail only where it earns its place",
          summary: "Folder-level controls are for areas that genuinely differ from the broad rule.",
          icon: "folder",
          body: [
            "If most folders carry their own detailed controls, the hierarchy has quietly turned back into folder-by-folder management. Keep the detail for embargoed, client, licensed or otherwise sensitive material, and keep everything else as simple as the broad layer allows.",
          ],
        },
        {
          heading: "Test it from one person’s point of view",
          summary: "A good hierarchy lets you explain what a single colleague can reach.",
          icon: "user",
          body: [
            "Pick a colleague and walk through their access level by level: their role, their team, any folders with extra detail and any individual grants. If that explanation runs to more than a few sentences, the structure is probably more complicated than it needs to be.",
          ],
        },
        {
          heading: "Confirm how the layers interact",
          summary: "Layered access only works if the people managing it know how the layers combine.",
          icon: "help",
          body: [
            "Before designing around a hierarchy, confirm how broad roles and folder-level controls work together in your own setup, and write it down for everyone who grants access. Assumptions carried over from a previous system are a frequent source of surprises.",
          ],
        },
        {
          heading: "Revisit the broad layer when work changes",
          summary: "Roles that no longer match the work push more and more detail into the layers below.",
          icon: "refresh",
          body: [
            [
              "A steady growth in folder-level exceptions often means the roles above them are out of date. ",
              { text: "Creative access governance", page: 159 },
              " helps organisations maintain control over sensitive creative content, and that includes revisiting the structure itself, not only its exceptions.",
            ],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 159 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about permission hierarchies",
      items: [
        {
          question: "Do permission hierarchies suit small creative teams?",
          answer: "A small team with a handful of folders may need very little layering. The value of a hierarchy grows with the number of people, folders and sensitive areas, so it is worth sketching the layers before the library becomes large.",
        },
        {
          question: "Who should maintain a permission hierarchy?",
          answer: "Usually a small group of administrators working from written rules, with the owners of sensitive areas deciding the folder-level detail for their own material. That split keeps the broad layer consistent and the detail accurate.",
        },
        {
          question: "Is a permission hierarchy the same as a folder tree?",
          answer: "No. A folder tree organises where assets live, while a permission hierarchy organises how access is decided. The two should be designed together, but they answer different questions.",
        },
      ],
      sources: [{ kind: "pdf", page: 178 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on layering access",
      variant: "compact",
      pages: [153, 152, 169, 175, 157, 325],
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
