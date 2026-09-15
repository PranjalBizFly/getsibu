/**
 * 156 · Editor Permissions — /permissions/editor-permissions
 *
 * Angle (cluster: access-control): the line between creative work and administration — editors get the access
 * their work requires without unnecessary administrative privileges. Manager Permissions (155) owns scope by
 * remit, Individual Permissions (157) exceptions, Organisation Admin Controls (158) the administrative side.
 * Lists GetSibu activities an organisation weighs for editors without claiming what editor access includes.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of separating creative work from administration; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 156,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Permissions & Multi-Tenancy",
      lede: "How editor permissions give the people who work on creative assets the access their work needs, without also handing them the administrative privileges that shape how the library is run.",
      visual: { diagram: "folder-access", focus: "individual" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 156 }, { kind: "pdf", page: 158 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Room for the creative work, without the keys to the library",
      body: [
        "Editors in GetSibu can be given the access required to work with creative assets without receiving unnecessary administrative privileges. Working access and administrative access do not have to arrive together.",
        "Creative teams have long blurred that line. The person who needs to replace a file or tidy a set of tags is often given full control, because it saves a second request. Over time the library gathers many people who can change policies, add users or restructure folders, and very few who remember why they were given that power.",
        [
          "The administrative side belongs to ",
          { text: "organisation admin controls", page: 158 },
          ", which cover access policies, users, folders and organisational settings. Keeping it with fewer people follows the same principle as ",
          { text: "creative security controls", page: 174 },
          ", which help protect creative assets from unnecessary or unauthorised access.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Access to work with creative assets", "Administration kept separate", "Fewer people who can reshape the library", "Less exposure to accidental changes", "Access matched to the creative task"],
      },
      highlight: {
        heading: "In practice",
        body: "A retoucher working through a product shoot has what the job requires, while adding users or changing access policies need not be part of their access at all.",
        tags: ["Editors", "Designers", "Retouchers"],
      },
      glance: {
        heading: "Editor permissions in brief",
        facts: [
          { label: "Area", value: "Permissions & Multi-Tenancy" },
          { label: "Gives", value: "Access to work with creative assets" },
          { label: "Avoids", value: "Unnecessary administrative privileges" },
          { label: "Administration", value: "Organisation Admin Controls" },
        ],
        actions: [{ kind: "route", path: "/permissions", label: "More in Permissions & Multi-Tenancy" }]
      },
      sources: [{ kind: "pdf", page: 156 }, { kind: "pdf", page: 158 }, { kind: "pdf", page: 174 }, EXPLAINS],
    },
    {
      kind: "before-after",
      id: "before-after",
      eyebrow: "The difference",
      heading: "Editors with admin rights, and editors without",
      beforeLabel: "Editors given administrative privileges",
      afterLabel: "Editors given working access",
      before: ["Many people able to change access policies", "Folders restructured by whoever is busiest", "Users added outside any agreed process", "No clear owner for an access change"],
      after: ["Access to the creative assets the work needs", "Administration left with organisation administrators", "Fewer people able to reshape the library", "Permission changes on record in the audit history"],
      sources: [{ kind: "pdf", page: 156 }, { kind: "pdf", page: 158 }, { kind: "pdf", page: 170 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "creative-work",
      eyebrow: "The creative work",
      heading: "Kinds of creative work editor access may need to cover",
      intro: "Governance defines who can upload, edit, approve, download and manage assets, so which of these an organisation’s editors take on is its own decision.",
      items: [
        {
          heading: "Adding new work",
          body: "Files can be uploaded directly through drag and drop, whether a single asset or a small batch, without configuring an integration.",
          icon: "upload",
          points: ["Individual files or small batches", "No integration to set up"],
          page: 127,
        },
        {
          heading: "Replacing and versioning",
          body: "Assets can be replaced in place while previous versions are retained, which helps retire the “final-v2” habit.",
          icon: "history",
          points: ["One asset record per piece of work", "Earlier versions kept"],
          page: 91,
        },
        {
          heading: "Organising with tags",
          body: "Structured folders and hierarchical tags help an organisation system stay useful as the library grows, which depends on people applying them carefully.",
          icon: "tag",
          points: ["Structure beyond folders", "Consistent labels across the team"],
        },
        {
          heading: "Correcting AI suggestions",
          body: "Authorised users can override AI-generated tags whenever the classification does not match the team’s intended taxonomy.",
          icon: "sparkles",
          points: ["Suggestions are not permanent", "The taxonomy stays the team’s own"],
          page: 48,
        },
        {
          heading: "Discussing the work",
          body: "Comments left directly on assets keep feedback attached to the creative work being discussed.",
          icon: "message",
          points: ["Feedback on the asset itself", "Less reliance on email threads"],
        },
        {
          heading: "Taking part in approval",
          body: "Approval workflows let teams request review, make changes and mark assets as approved.",
          icon: "approval",
          points: ["Review requested on the asset", "Changes made before sign-off"],
        },
      ],
      sources: [{ kind: "pdf", page: 114 }, { kind: "pdf", page: 127 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 48 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 67 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "deciding",
      eyebrow: "Considerations",
      heading: "Deciding what an editor’s access should cover",
      items: [
        {
          heading: "Start from the work, not the job title",
          summary: "“Editor” means different things in a video studio, a brand team and a publishing department.",
          icon: "palette",
          body: [
            "A video editor may spend the day replacing cuts, a brand designer may mostly organise and tag, and a copy editor may only comment. Describe what each group actually does before settling what editor access should allow, rather than copying a definition from another organisation.",
          ],
        },
        {
          heading: "Treat removal as its own decision",
          summary: "Editing an asset and deleting it carry very different consequences.",
          icon: "trash",
          body: [
            ["With ", { text: "asset deletion", page: 109 }, ", authorised users can remove assets according to organisational policies and permissions. Deciding separately who should be able to remove material keeps a routine tidy-up from turning into a lost file."],
          ],
        },
        {
          heading: "Resist “just make me an admin”",
          summary: "The request is usually about one blocked task, not a need to run the library.",
          icon: "shield",
          body: [
            "When an editor asks for administrative rights, find out what they were trying to do. The answer is usually a specific piece of access they lack, which can be solved without widening who controls policies, users and settings.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 109 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about editor permissions",
      items: [
        {
          question: "Should an editor approve the assets they have produced?",
          answer: "That is a governance choice. For routine internal material it may be fine; for brand-critical or client-facing work, a second pair of eyes before anything is marked as approved usually gives more confidence.",
        },
        {
          question: "How do editor permissions relate to folder-level permissions?",
          answer: ["They answer different questions. Editor access concerns the kind of work someone can do, while ", { text: "folder-level permissions", page: 152 }, " decide which areas of the library that access applies to. A designer may need working access to one brand’s material and none to another’s."],
        },
        {
          question: "Should freelance and permanent editors have the same access?",
          answer: ["Not automatically. The work may be identical, but a freelancer’s access is usually narrower in scope and worth reviewing when the engagement ends. ", { text: "Individual permissions", page: 157 }, " cover targeted access where organisational roles alone are not granular enough."],
        },
      ],
      sources: [{ kind: "pdf", page: 152 }, { kind: "pdf", page: 157 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on access for creative work",
      variant: "compact",
      pages: [158, 114, 152, 155, 109, 67],
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
