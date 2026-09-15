/**
 * 114 · Creative Asset Governance — /features/creative-asset-governance
 *
 * Angle (cluster: governance, primary): who can upload, edit, approve, download and manage assets, governed action
 * by action. Creative Access Governance (159) owns control over sensitive content; Enterprise Asset Governance (179)
 * the organisation-wide combination; What Is Creative Governance? (371) the explainer.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of governing actions on creative assets; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 114,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Versioning & Asset Management",
      lede: "How to decide who can upload, edit, approve, download and manage creative assets, why each of those actions deserves its own decision, and how to keep the rules light enough that people follow them.",
      visual: { diagram: "folder-access", focus: "team" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 114 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Deciding who can do what with creative assets",
      body: [
        "Governance in GetSibu defines who can upload, edit, approve, download and manage assets.",
        "Those five actions carry very different risks, which is why treating them all as a single question of access rarely works. Letting a regional marketer download approved imagery is low in risk and high in value; letting the same person replace the master logo is the reverse. A library where everyone can do everything is easy to set up and hard to trust, while one where only a few people can do anything becomes a bottleneck that colleagues quietly work around.",
        [
          "Governing actions on assets is one layer of a wider structure. ",
          { text: "Enterprise asset governance", page: 179 },
          " combines roles, permissions, audit logs, authentication and organisational policies across an organisation, and ",
          { text: "What Is Creative Governance?", page: 371 },
          " explains the idea in general terms.",
        ],
      ],
      keyPoints: {
        heading: "The five governed actions",
        items: ["Upload", "Edit", "Approve", "Download", "Manage", "A different risk for each action"],
      },
      highlight: {
        heading: "In practice",
        body: "A legal reviewer holds the right to approve product claims for a regulated market but has no reason to upload or edit anything. Keeping those rights separate leaves the reviewer’s role clear and the content with the people who make it.",
        tags: ["Legal review", "Regulated markets", "Governance"],
      },
      glance: {
        heading: "Asset governance in brief",
        facts: [
          { label: "Defines", value: "Who can upload, edit, approve, download and manage" },
          { label: "Area", value: "Versioning & Asset Management" },
          { label: "Sensitive content", value: "Creative Access Governance", page: 159 },
          { label: "Organisation-wide", value: "Enterprise Asset Governance", page: 179 },
        ],
        actions: [{ kind: "route", path: "/features/asset-management", label: "More in Versioning & Asset Management" }]
      },
      sources: [{ kind: "pdf", page: 114 }, { kind: "pdf", page: 179 }, { kind: "pdf", page: 371 }, { kind: "pdf", page: 159 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "five-actions",
      eyebrow: "Action by action",
      heading: "What each governed action puts at stake",
      tabs: [
        {
          label: "Upload",
          heading: "Deciding what enters the library, and where",
          icon: "upload",
          body: [
            "Upload rights shape what colleagues will later find. Rights that are too broad fill a library quickly and unevenly; rights that are too narrow leave work stranded on personal drives because adding it is a chore.",
            ["Placement matters as much as permission. When a new area is set up for confidential work, ", { text: "default-deny access", page: 154 }, " means new folders can remain private until access is explicitly granted, so adding material there does not expose it to everyone."],
          ],
          points: ["Wide enough to keep work off personal drives", "Placed so new work is not over-exposed"],
        },
        {
          label: "Edit",
          heading: "Changing an asset changes it for everyone",
          icon: "text",
          body: [
            "Editing reaches beyond the file. Replacing it, correcting its metadata and adjusting its tags all alter what every later user sees, so edit rights belong with people who understand the asset and why it is the way it is.",
            [{ text: "Editor permissions", page: 156 }, " let people work with creative assets without receiving unnecessary administrative privileges, which helps keep the ability to change content apart from the ability to change the library around it."],
          ],
          points: ["Edits affect every later user", "Content rights kept apart from admin rights"],
        },
        {
          label: "Approve",
          heading: "The decision other people rely on",
          icon: "approval",
          body: [
            "Approval has the widest reach of the five, because colleagues who never saw the work will use it on the strength of that decision. The right to approve should follow accountability for the content: a brand lead for identity assets, a legal reviewer for regulated claims.",
            [{ text: "Creative approval management", page: 89 }, " provides a structured process for moving assets from draft to approved status."],
          ],
          points: ["Approval follows accountability", "A decision others act on unseen"],
        },
        {
          label: "Download",
          heading: "The point where an asset leaves the library",
          icon: "download",
          body: [
            "A downloaded file is beyond the library’s reach: it can be forwarded, altered or kept long after the asset has been retired. That makes download rights worth a deliberate decision for licensed, embargoed and confidential material.",
            ["Sharing is easier to govern when it stays inside the library, and ", { text: "secure asset sharing", page: 172 }, " can be controlled through permissions rather than relying only on unrestricted links."],
          ],
          points: ["Copies escape later corrections", "Share access rather than files"],
        },
        {
          label: "Manage",
          heading: "Rights over the library itself",
          icon: "key",
          body: [
            "Management covers the structure around assets: folders, access and the removal of content. Few people need it, and every additional person holding those rights is one more whose mistakes affect everyone else.",
            [{ text: "Organisation admin controls", page: 158 }, " allow administrators to manage access policies, users, folders and organisational settings, while removing assets is left to authorised users acting within policy."],
          ],
          points: ["The smallest group of the five", "Structure, access and removal"],
        },
      ],
      sources: [{ kind: "pdf", page: 154 }, { kind: "pdf", page: 156 }, { kind: "pdf", page: 89 }, { kind: "pdf", page: 172 }, { kind: "pdf", page: 158 }, { kind: "pdf", page: 109 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "Regional teams given the right actions, not blanket access",
      team: "An enterprise marketing department",
      situation: "An enterprise marketing department shares one library between a central brand team and several regional teams. A region overwrote a master template, and draft campaign imagery turned up in a partner presentation.",
      steps: [
        {
          heading: "Start from the five actions",
          body: "The brand operations lead lists, for each area of the library, who needs to upload, edit, approve, download and manage, rather than starting from job titles.",
        },
        {
          heading: "Give regions their own areas",
          body: ["With ", { text: "department access", page: 176 }, ", each regional team receives access to the creative libraries relevant to its own work, including an area for local material."],
        },
        {
          heading: "Keep the masters with brand designers",
          body: "Regional teams keep the ability to download approved templates, while edit rights on the master versions stay with the central brand designers.",
        },
        {
          heading: "Scope managers to their regions",
          body: ["Regional leads get ", { text: "manager permissions", page: 155 }, " for their own folders and teams, and remain restricted from areas outside their responsibilities."],
        },
        {
          heading: "Apply the rules team by team",
          body: "Setting access for teams rather than person by person gives everyone in a region the same consistent permissions.",
        },
      ],
      outcome: "Regions still move quickly with approved material, the master templates stay intact, and drafts are far less likely to travel beyond the areas where they are being worked on.",
      link: { page: 223, label: "GetSibu for Enterprise Marketing" },
      sources: [{ kind: "pdf", page: 114 }, { kind: "pdf", page: 176 }, { kind: "pdf", page: 155 }, { kind: "pdf", page: 175 }, { kind: "pdf", page: 223 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "accordion",
      id: "principles",
      eyebrow: "Keeping it workable",
      heading: "Principles that keep asset governance usable day to day",
      items: [
        {
          heading: "Grant actions, not only visibility",
          summary: "Seeing an asset and changing it are separate decisions.",
          icon: "eye",
          body: [
            "It is tempting to decide who can reach an area and stop there. Asking separately who may change, approve or remove what sits in that area avoids handing the power to alter content to everyone who only needs to look.",
            [{ text: "Role-based access control", page: 325 }, " limits what users can perform according to their organisational responsibilities, the same principle expressed through roles."],
          ],
          points: ["Visibility as one decision", "Changing, approving and removing as others"],
        },
        {
          heading: "Keep making and approving apart",
          summary: "An approval carries more weight when someone other than the maker gives it.",
          icon: "approval",
          body: [
            ["Small teams sometimes cannot avoid self-approval, but where possible the person judging readiness should not be the person who produced the work. For brand-critical material, ", { text: "brand asset approval", page: 71 }, " uses approval gates to separate approved creative assets from drafts and work in progress."],
          ],
        },
        {
          heading: "Mirror the shape of the organisation",
          summary: "Rules are easier to follow when they match how teams are really organised.",
          icon: "building",
          body: [
            ["Broad rules for the organisation, narrower ones for departments and projects, and individual exceptions only where needed. ", { text: "Permission hierarchies", page: 178 }, " combine broad organisational roles with more detailed folder-level controls, and ", { text: "individual permissions", page: 157 }, " provide targeted access where roles alone are not granular enough."],
          ],
        },
        {
          heading: "Explain the rules where people meet them",
          summary: "People route around rules they do not understand.",
          icon: "help",
          body: [
            "A short, plain note for each area saying who approves its content and whom to ask for edit rights saves a stream of questions, and it stops colleagues assuming that a missing right is a mistake to be worked around.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 325 }, { kind: "pdf", page: 71 }, { kind: "pdf", page: 178 }, { kind: "pdf", page: 157 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about creative asset governance",
      items: [
        {
          question: "How does creative asset governance differ from creative access governance?",
          answer: ["One is concerned with what people can do to assets, the other with protecting what is sensitive. ", { text: "Creative access governance", page: 159 }, " helps organisations keep control over sensitive creative content, and that sensitivity is often the reason an action such as download needs a careful decision."],
        },
        {
          question: "Who should set the rules of creative asset governance?",
          answer: "The people accountable for the content, such as brand, legal and team leads, should decide the rules. Administrators then apply them, which keeps the decisions with those who understand the risks.",
        },
        {
          question: "How much asset governance does a small creative team need?",
          answer: "Less, but not none. A clear approver, a short list of people who can remove content and sensible defaults for new areas cover most of the risk; the five actions still apply in a lighter form.",
        },
        {
          question: "What should happen to governance rights when someone changes role?",
          answer: ["Review what they can do across the five actions and remove what the new role does not need. ", { text: "Permission auditing", page: 170 }, " means changes to permissions can be recorded in the audit history, which supports accountability for that review."],
        },
      ],
      sources: [{ kind: "pdf", page: 159 }, { kind: "pdf", page: 170 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on governing creative assets",
      variant: "compact",
      pages: [159, 179, 371, 156, 158, 223],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Bring Order to Creative Chaos",
      conversionPage: 399,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 399 }],
    },
  ],
};

export default page;
