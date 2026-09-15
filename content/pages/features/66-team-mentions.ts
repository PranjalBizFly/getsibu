/**
 * 66 · Team Mentions — /features/team-mentions
 *
 * Angle (clusters: comments-feedback, mentions — the mechanism): mentions with folder-aware autocomplete, so the
 * people mentioned have appropriate visibility — how mentions relate to folder permissions, default-deny folders
 * and client isolation. Asset Mentions (86) owns the purpose (bringing the right collaborator in); Asset Comments
 * (62) and Threaded Comments (63) own the discussion itself.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of mentions and access in creative libraries; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 66,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Collaboration",
      lede: "How mentions bring teammates into a discussion on an asset, why GetSibu’s autocomplete takes folder visibility into account, and what that means for work kept in restricted or private folders.",
      visual: { diagram: "folder-access", focus: "team" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 66 }, { kind: "pdf", page: 152 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Mentioning the people who can actually see the work",
      body: [
        "In GetSibu, users can mention teammates inside asset discussions. Autocomplete for those mentions is folder-aware, which helps ensure that the people a user mentions have appropriate visibility of the asset.",
        "A mention is a request for someone’s attention on one specific piece of work, and it only helps if that person can open the work. Naming a colleague who has no access to the folder cannot achieve that, because the work is out of their reach, and the usual workaround of sending them a copy takes the file outside the controls that were protecting it.",
        [
          "That is why mentions and permissions belong together. Access can be controlled with ",
          { text: "folder-level permissions", page: 152 },
          ", and new folders can remain private until access is explicitly granted, so the group of people who can sensibly be mentioned varies from one folder to the next.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Mentions inside asset discussions", "Folder-aware autocomplete", "Visibility set by folder permissions", "No need to forward copies", "Suited to restricted work"],
      },
      highlight: {
        heading: "In practice",
        body: "On an unreleased product film kept in a restricted folder, a producer mentions the colourist. Folder-aware autocomplete helps keep that mention to colleagues who have access to the folder.",
        tags: ["Producers", "Restricted folders", "Reviewers"],
      },
      glance: {
        heading: "Team mentions in brief",
        facts: [
          { label: "Area", value: "Collaboration" },
          { label: "Used in", value: "Asset discussions" },
          { label: "Purpose", value: "Asset Mentions", page: 86 },
          { label: "Works with", value: "Secure Creative Collaboration", page: 180 },
        ],
        actions: [{ kind: "route", path: "/features/collaboration", label: "More in Collaboration" }]
      },
      sources: [{ kind: "pdf", page: 66 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 154 }, { kind: "pdf", page: 86 }, { kind: "pdf", page: 180 }, EXPLAINS],
    },
    {
      kind: "layers",
      id: "behind-a-mention",
      eyebrow: "How it fits together",
      heading: "What sits behind a mention",
      intro: "A mention connects the conversation on an asset to the access rules of the folder that holds it.",
      layers: [
        { label: "The discussion", body: "A comment or thread on an asset, where someone wants a colleague’s input on that particular piece of work." },
        { label: "The mention", body: "The teammate named in the discussion, drawn into a conversation about this asset rather than about the project in general." },
        { label: "Folder-aware autocomplete", body: "The help offered while naming a teammate, aware of the folder in which the asset sits." },
        { label: "The folder", body: "Where the asset is kept, and a level at which access can be controlled more finely than organisation-wide access." },
        { label: "Access to the folder", body: "Team, department and individual permissions, combined with broader organisational roles, which together decide who has visibility." },
      ],
      sources: [{ kind: "pdf", page: 62 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 86 }, { kind: "pdf", page: 66 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 175 }, { kind: "pdf", page: 176 }, { kind: "pdf", page: 157 }, { kind: "pdf", page: 178 }],
    },
    {
      kind: "tabs",
      id: "situations",
      eyebrow: "By situation",
      heading: "How folder visibility shapes mentions in different situations",
      tabs: [
        {
          label: "Team folders",
          heading: "When the whole team works in one area",
          icon: "users",
          body: [
            "In a folder the entire team can reach, mentions tend to work the way people expect: the colleagues involved in the project can usually be drawn into a discussion about its assets.",
            "Team-based access sets consistent permissions across a group of users, which keeps the circle of people who can be mentioned predictable from one asset to the next.",
          ],
          points: ["A predictable circle of teammates", "Suited to everyday project work"],
          link: { page: 175, label: "Team Access Management" },
        },
        {
          label: "Restricted work",
          heading: "When a project is confidential",
          icon: "lock",
          body: [
            "Unreleased products, sensitive campaigns and embargoed announcements often sit in folders with a deliberately small audience. This is where awareness of the folder matters most, because so few people have visibility of the work.",
            "When a colleague outside that audience genuinely needs to take part, the answer is a deliberate change to their access, never a copy of the file.",
          ],
          points: ["Small audiences by design", "Access changed on purpose, not bypassed"],
          link: { page: 157, label: "Individual Permissions" },
        },
        {
          label: "New folders",
          heading: "When a folder has only just been created",
          icon: "folder",
          body: [
            "Under a default-deny model, a new folder can remain private until access is explicitly granted, rather than being exposed to everyone. Early in a project, very few people may have visibility yet.",
            "If a colleague you meant to involve cannot see the work, access to the folder is the first thing to check.",
          ],
          points: ["Private until access is granted", "Check access before anything else"],
          link: { page: 154, label: "Default-Deny Access" },
        },
        {
          label: "Client work",
          heading: "When an agency keeps clients apart",
          icon: "building",
          body: [
            ["Agencies often need each client’s material kept strictly separate. In GetSibu, ", { text: "client environments can remain logically isolated", page: 161 }, ", so one client’s assets are not mixed with another client’s library."],
            "Good practice is for discussions about a client’s assets to involve only the people assigned to that client.",
          ],
          points: ["Client libraries kept separate", "Discussions stay with the client team"],
        },
      ],
      sources: [{ kind: "pdf", page: 175 }, { kind: "pdf", page: 66 }, { kind: "pdf", page: 157 }, { kind: "pdf", page: 154 }, { kind: "pdf", page: 161 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "using-mentions",
      eyebrow: "Considerations",
      heading: "Using team mentions well",
      items: [
        {
          heading: "Mention someone for a reason",
          summary: "A mention should ask something specific of the person named.",
          icon: "mention",
          body: [
            "Asking the colour specialist whether the product colour matches the physical sample gives them a clear task. A mention with no request attached leaves them reading the whole discussion to work out why they were included.",
          ],
        },
        {
          heading: "Mention on the asset the question concerns",
          summary: "A mention on the wrong asset sends a colleague to the wrong work.",
          icon: "compass",
          body: [
            ["Because mentions live inside asset discussions, the asset is part of the request. When a question genuinely spans several assets, mention the person on each one that matters, or share a ", { text: "saved view", page: 79 }, " of the whole set."],
          ],
        },
        {
          heading: "Fix access instead of working around it",
          summary: "When the right person lacks visibility, change their access rather than sending the file.",
          icon: "key",
          body: [
            "Exporting a copy for someone outside the folder undoes the protection the folder provided, and the copy will miss every later change.",
            ["", { text: "Organisation administrators", page: 158 }, " can manage access policies, users and folders, and managers can be given access to the specific folders or teams they are responsible for."],
          ],
        },
        {
          heading: "Mention fewer people, more precisely",
          summary: "Naming everyone dilutes the request.",
          icon: "user",
          body: [
            "When several people are mentioned for the same question, each may assume someone else will answer. Naming the one person best placed to respond, and adding others only when their view is needed, tends to produce a clearer reply.",
          ],
        },
        {
          heading: "Remember mentions become part of the record",
          summary: "What people were asked, and how they answered, stays with the asset.",
          icon: "history",
          body: [
            ["Mentions and the replies they prompt belong to the asset’s discussion, and ", { text: "asset discussion history", page: 75 }, " helps the team understand later how that feedback evolved."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 66 }, { kind: "pdf", page: 79 }, { kind: "pdf", page: 158 }, { kind: "pdf", page: 155 }, { kind: "pdf", page: 75 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about team mentions",
      items: [
        {
          question: "Is mentioning a teammate the same as sharing the asset with them?",
          answer: ["They do different jobs. A mention brings a teammate into a discussion about an asset. Sharing concerns access, and ", { text: "secure asset sharing", page: 172 }, " can be controlled through permissions rather than relying only on unrestricted links."],
        },
        {
          question: "How do team mentions differ from asset mentions?",
          answer: ["They describe the same capability from two sides. Team mentions are about how folder-aware autocomplete relates mentions to visibility; ", { text: "asset mentions", page: 86 }, " are about the purpose, bringing the right collaborator into an asset-specific discussion."],
        },
        {
          question: "How can a colleague be given access so they can join a discussion on a restricted asset?",
          answer: "Access is a question of permissions. Folder-level permissions control access at a more detailed level than organisation-wide access, and individual users can receive targeted access when organisational roles alone are not granular enough.",
        },
      ],
      sources: [{ kind: "pdf", page: 66 }, { kind: "pdf", page: 86 }, { kind: "pdf", page: 172 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 157 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on mentions and visibility",
      variant: "compact",
      pages: [86, 63, 152, 180, 154, 75],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the sibling mentions topic." }],
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
