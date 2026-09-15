/**
 * 176 · Department Access — /permissions/department-access
 *
 * Angle (cluster: access-control): relevance — deciding which creative libraries each department needs and keeping it to
 * those, while common material is still shared. Enterprise Permissions (169) owns the departments/projects/folders
 * structure; Team Access Management (175) owns consistency within groups. No grant mechanics or search behaviour described.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of department-level access practice; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 176,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Permissions & Multi-Tenancy",
      lede: "How to decide which creative libraries each department needs, keep every department to the libraries that concern it, and still share the common material the whole organisation relies on.",
      visual: { diagram: "folder-access", focus: "team" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 176 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Each department reaching the libraries that concern it",
      body: [
        "Departments in GetSibu can receive access to only the creative libraries relevant to their work. Relevance, rather than seniority or proximity, is what decides what a department can reach.",
        "Departments differ enormously in what they need from a shared library: some produce most of its content, some only draw on finished work, and some hold material that has to stay close. Opening everything to every department buries the light users in material that does not concern them, and exposes the departments whose work is sensitive, such as an unannounced product or a restructuring announcement.",
        [
          "Department access is one level of a larger arrangement. ",
          { text: "Enterprise permissions", page: 169 },
          " apply structured access controls across departments, projects and folders, and ",
          { text: "creative library management", page: 4 },
          " describes the structured environment of folders, tags, collections, metadata and permissions through which a library is organised.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Only the libraries relevant to the work", "Relevance decides access", "Departments that make and departments that use", "A common area for shared brand material", "Sensitive departmental work kept close"],
      },
      highlight: {
        heading: "In practice",
        body: "The HR department reaches recruitment imagery and the organisation’s core brand assets, but not the product team’s launch folders, which have nothing to do with hiring.",
        tags: ["HR", "Marketing", "Sales"],
      },
      glance: {
        heading: "Department access in brief",
        facts: [
          { label: "Area", value: "Permissions & Multi-Tenancy" },
          { label: "Gives", value: "Access to relevant creative libraries only" },
          { label: "Wider structure", value: "Enterprise Permissions", page: 169 },
          { label: "Within departments", value: "Team Access Management", page: 175 },
        ],
        actions: [{ kind: "route", path: "/permissions", label: "More in Permissions & Multi-Tenancy" }]
      },
      sources: [{ kind: "pdf", page: 176 }, { kind: "pdf", page: 169 }, { kind: "pdf", page: 4 }, { kind: "pdf", page: 175 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "by-department",
      eyebrow: "By department",
      heading: "What counts as relevant differs from one department to the next",
      tabs: [
        {
          label: "Marketing",
          heading: "The department that makes most of the material",
          icon: "megaphone",
          body: [
            "Marketing usually produces campaigns, product imagery and video, and it needs its working files as much as its finished assets. Its own libraries are often the most sensitive part of the organisation’s creative material in the weeks before a launch.",
          ],
          points: ["Working files and finished assets", "Sensitive until launch"],
          link: { page: 213, label: "GetSibu for Marketing Teams" },
        },
        {
          label: "Sales",
          heading: "Finished material that is ready to use",
          icon: "store",
          body: [
            "Sales teams want current presentations, product imagery and case material they can put in front of customers. Drafts and superseded versions are a liability to them, because an outdated slide in a pitch does more harm than a missing one.",
            [{ text: "Approved-only views", page: 103 }, " let users access content that has completed the required review process, which is often exactly the slice of the library sales needs."],
          ],
          points: ["Current and approved", "No working files"],
        },
        {
          label: "HR and comms",
          heading: "People-related material that calls for discretion",
          icon: "users",
          body: [
            "Recruitment campaigns, employee photography and internal announcements are relevant to HR and internal communications. Some of that material concerns colleagues who expect it to be handled carefully, and some must stay private until an announcement is made.",
          ],
          points: ["Employee imagery handled with care", "Announcements held until ready"],
          link: { page: 239, label: "GetSibu for Internal Communications" },
        },
        {
          label: "Legal",
          heading: "Access for review rather than for everything",
          icon: "document",
          body: [
            "Legal teams typically need particular campaigns, contracts or licensed material at particular moments, often shortly before something is published. Their relevant library is narrow but important, and it tends to change with each review they are asked to carry out.",
          ],
          points: ["Specific material at specific moments", "Access that follows the review"],
        },
      ],
      sources: [{ kind: "pdf", page: 103 }, { kind: "pdf", page: 213 }, { kind: "pdf", page: 239 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "deciding",
      eyebrow: "Step by step",
      heading: "Deciding which libraries a department receives",
      steps: [
        { heading: "List the libraries", body: "Write down the main areas of the creative library, such as brand, campaigns, product, internal communications and archive.", icon: "collection" },
        { heading: "Mark who makes and who uses", body: "For each area, note which departments create material in it and which only draw on what is finished.", icon: "users" },
        { heading: "Separate the common core", body: "Identify the material nearly every department needs, such as logos and brand guidelines, and give it an area of its own.", icon: "layers" },
        { heading: "Agree each department’s set", body: "With each department head, confirm the libraries relevant to the department and anything that must stay out of its reach.", icon: "building" },
        { heading: "Open new areas deliberately", body: "New folders can remain private until access is explicitly granted, so a department reaches a new area once it has been judged relevant.", icon: "lock", page: 154 },
        { heading: "Check against real use", body: "Folder access maps help show how folders are accessed across teams, which is a practical test of whether each department’s set still fits.", icon: "map", page: 173 },
      ],
      sources: [{ kind: "pdf", page: 154 }, { kind: "pdf", page: 173 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "edge-cases",
      eyebrow: "Edge cases",
      heading: "Department access in less tidy situations",
      items: [
        {
          heading: "Shared services that work for everyone",
          summary: "A central design studio or video unit produces work for every department.",
          icon: "workflow",
          body: [
            "A shared studio needs the working areas of each department it supports, which makes it unlike any single department. Treating it as a group of its own, with access to the areas where it produces work, is clearer than giving it each department’s full access in turn.",
          ],
        },
        {
          heading: "Departments that merge or split",
          summary: "When the organisation chart changes, what counts as relevant changes too.",
          icon: "refresh",
          body: [
            "It is tempting to give a newly merged department the combined access of both predecessors. Starting again from the list of libraries is usually quicker to reason about than untangling two histories of access, and it avoids carrying over access neither half still needs.",
          ],
        },
        {
          heading: "Sensitive work inside a department",
          summary: "Being relevant to a department does not make material relevant to everyone in it.",
          icon: "lock",
          body: [
            "Employee relations files within HR, or unannounced results within corporate communications, call for a smaller circle than the department as a whole. Treat relevance to the department as the starting point for access, not the final word, and give that material an area with its own, narrower audience.",
          ],
        },
        {
          heading: "Material that becomes relevant later",
          summary: "Some libraries matter to a department only at a particular moment.",
          icon: "calendar",
          body: [
            "Sales may not need a campaign until launch day, while legal needs it before. Plan when access should widen, instead of granting it early for convenience and leaving unreleased work open for longer than necessary.",
          ],
        },
        {
          heading: "Requests to see everything",
          summary: "A department asking for the whole library usually has a specific need behind the request.",
          icon: "help",
          body: [
            "When a department asks for full access, find out what it could not find. The answer is normally one or two libraries it should have been given from the start.",
          ],
        },
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about department access",
      items: [
        {
          question: "What should a department do when it needs material held in another department’s library?",
          answer: "Ask the department that owns the material rather than looking for a way round. The need is often narrower than it first sounds, and a single area of that library, agreed with its owner, usually covers it.",
        },
        {
          question: "Can departments share common brand assets while their own libraries stay separate?",
          answer: [
            "Yes, and the shared area is worth treating as a library in its own right. ",
            { text: "Folder-level permissions", page: 152 },
            " allow access to be controlled at a more detailed level than organisation-wide access, and a common area works best when one team owns it and decides what belongs there.",
          ],
        },
        {
          question: "What should happen to department access when someone moves department?",
          answer: "Start from the new department’s libraries rather than adding them to the old ones. Handing over what the person looked after in the old department first means nothing they were responsible for is left without an owner.",
        },
        {
          question: "Who should approve a change to a department’s access?",
          answer: [
            "The department head for what the department needs, together with whoever is responsible for the area being opened. A change like this can be recorded in the audit history, as ",
            { text: "permission auditing", page: 170 },
            " explains.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 176 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 170 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on access across departments",
      variant: "compact",
      pages: [169, 175, 103, 173, 213, 239],
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
