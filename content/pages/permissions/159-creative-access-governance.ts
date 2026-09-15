/**
 * 159 · Creative Access Governance — /permissions/creative-access-governance
 *
 * Angle (cluster: governance): access governance as the continuing discipline that keeps control over sensitive
 * creative content — deciding what is sensitive, containing it, granting narrowly, sharing with control, recording
 * and reviewing. Creative Asset Governance (114) owns who can upload, edit, approve, download and manage; Enterprise
 * Asset Governance (179) the enterprise combination; Creative Data Governance (339) retention and usage rules;
 * What Is Creative Governance? (371) the explainer. Claims no review, report or alert feature.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of governing access to sensitive creative content; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 159,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Permissions & Multi-Tenancy",
      lede: "How access governance helps an organisation keep control of its sensitive creative content, treated as a continuing cycle of deciding, granting, recording and reviewing who can reach it.",
      visual: { diagram: "folder-access", focus: "folders" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 159 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Keeping sensitive creative work in the right hands over time",
      body: [
        "Access governance helps organisations maintain control over sensitive creative content. If permissions are the individual decisions about who can reach what, governance is the discipline that keeps those decisions deliberate, consistent and open to review for as long as the library exists.",
        "Creative libraries hold more sensitive material than people tend to assume. An unreleased product film, a client’s confidential rebrand, photography licensed for one territory and a pricing presentation can all sit a few folders away from assets meant for everyone. The danger is rarely one bad decision; it is the slow drift of access granted for good reasons and never looked at again.",
        [
          "Access is one strand of a wider picture. ",
          { text: "Creative asset governance", page: 114 },
          " covers who can upload, edit, approve, download and manage assets, creative data governance sets rules around access, retention, usage and asset management, and the ",
          { text: "creative governance explainer", page: 371 },
          " describes the idea in general terms.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Control over sensitive creative content", "Deliberate and consistent decisions", "Sharing held to the same rules", "Permission changes on record", "Review against real use"],
      },
      highlight: {
        heading: "In practice",
        body: "Before each launch, a brand team checks who can reach its unreleased campaign folders against the list of people still working on the launch.",
        tags: ["Brand", "Legal", "IT"],
      },
      glance: {
        heading: "Access governance in brief",
        facts: [
          { label: "Area", value: "Permissions & Multi-Tenancy" },
          { label: "Protects", value: "Sensitive creative content" },
          { label: "Wider view", value: "Creative Asset Governance" },
          { label: "At enterprise scale", value: "Enterprise Asset Governance", page: 179 },
        ],
        actions: [{ kind: "route", path: "/permissions", label: "More in Permissions & Multi-Tenancy" }]
      },
      sources: [{ kind: "pdf", page: 159 }, { kind: "pdf", page: 114 }, { kind: "pdf", page: 339 }, { kind: "pdf", page: 371 }, { kind: "pdf", page: 179 }, { kind: "pdf", page: 170 }, EXPLAINS],
    },
    {
      kind: "workflow",
      id: "cycle",
      eyebrow: "Step by step",
      heading: "A continuing cycle for governing access",
      stages: [
        { label: "Identify", body: "Agree which material counts as sensitive and why, so everyone who makes access decisions applies the same judgement." },
        { label: "Contain", body: "Keep sensitive material in its own areas, where folder-level permissions control access more precisely than organisation-wide access can.", page: 152 },
        { label: "Start closed", body: "New folders can remain private until access is explicitly granted, so sensitive work is not exposed while its area is still being set up." },
        { label: "Grant narrowly", body: "Give access for responsibilities; role-based access control limits what users can perform according to their organisational responsibilities." },
        { label: "Share with control", body: "Sharing can be governed through permissions instead of relying only on unrestricted links that travel wherever they are forwarded.", page: 172 },
        { label: "Record and review", body: "Permission changes can be recorded in the audit history, which gives each periodic review an accountable trail to follow.", page: 170 },
      ],
      sources: [{ kind: "pdf", page: 152 }, { kind: "pdf", page: 154 }, { kind: "pdf", page: 325 }, { kind: "pdf", page: 172 }, { kind: "pdf", page: 170 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "sensitive-content",
      eyebrow: "What counts as sensitive",
      heading: "Kinds of creative content that call for governed access",
      items: [
        {
          heading: "Unreleased campaigns and products",
          summary: "Work that is valuable precisely because nobody outside has seen it yet.",
          icon: "megaphone",
          body: [
            "Launch films, product photography and campaign concepts lose much of their value if they leak early, and they pass through many hands on the way to launch.",
            "Keeping them in areas of their own until launch, rather than beside finished material that many people use, keeps that circle as small as the work allows.",
          ],
        },
        {
          heading: "Client work",
          summary: "Material an agency holds on behalf of someone else, under that client’s expectations.",
          icon: "briefcase",
          body: [
            "A client expects its work to be seen only by the people working on it, and certainly never by another client.",
            ["Where client libraries share one platform, ", { text: "client tenant isolation", page: 161 }, " means each client environment can remain logically isolated from the others."],
          ],
        },
        {
          heading: "Licensed and rights-restricted material",
          summary: "Assets the organisation may use only in certain places, for certain purposes or for a certain time.",
          icon: "calendar",
          body: [
            "Stock photography, commissioned music and talent-restricted footage often carry conditions that the people browsing the library do not know about.",
            [{ text: "Expiring creative assets", page: 104 }, " address one part of this: expiry information can help teams identify content that should no longer be used after a specified period."],
          ],
        },
        {
          heading: "Embargoed announcements",
          summary: "Content that is ready long before it may be published.",
          icon: "news",
          body: [
            "Press materials, results presentations and partnership imagery are often finished days or weeks ahead of an announcement. Until then, the circle of people who can reach them should stay as small as the announcement requires.",
          ],
        },
        {
          heading: "Commercially confidential documents",
          summary: "Pricing decks, contracts and plans stored alongside creative work.",
          icon: "document",
          body: [
            "A pricing presentation kept next to the campaign it supports is convenient for the team and a risk if that folder is widely shared. Settling who can reach confidential documents before they are added, or giving them an area of their own, avoids discovering the exposure later.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 161 }, { kind: "pdf", page: 104 }, EXPLAINS],
    },
    {
      kind: "before-after",
      id: "drift",
      eyebrow: "The difference",
      heading: "Access left to drift, and access that is governed",
      beforeLabel: "Access left to accumulate",
      afterLabel: "Access under governance",
      before: ["Grants made for a project and never revisited", "Each person’s own idea of what is sensitive", "Reviews that depend on memory", "Surprises discovered just before a launch"],
      after: ["A shared understanding of what is sensitive", "Access that matches current responsibilities", "Reviews that start from recorded changes", "Sensitive areas checked at natural moments"],
      sources: [{ kind: "pdf", page: 159 }, { kind: "pdf", page: 170 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A product launch reviewed for access before it goes public",
      team: "A consumer brand team",
      situation: "A consumer brand is weeks from announcing a new product. Agencies, retail partners and several internal departments have been involved, and access to the launch material has grown along the way.",
      steps: [
        {
          heading: "The sensitive areas are named",
          body: "The brand lead lists the folders holding the unreleased film, the product photography and the retail presentation.",
        },
        {
          heading: "Recorded changes are read back",
          body: "The team reads back the permission changes recorded in the audit history to see how access widened during production.",
        },
        {
          heading: "Actual use is checked",
          body: [{ text: "Folder access maps", page: 173 }, " help the team understand how those folders have been accessed across its teams during the campaign."],
        },
        {
          heading: "Access is brought back to need",
          body: "Groups that finished their part of the work months ago no longer need the launch folders, and their access is brought into line.",
        },
      ],
      outcome: "The launch goes ahead with access matching the people still working on it, and the next review starts from a record rather than from scratch.",
      link: { page: 214, label: "GetSibu for Brand Teams" },
      sources: [{ kind: "pdf", page: 170 }, { kind: "pdf", page: 173 }, { kind: "pdf", page: 214 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about creative access governance",
      items: [
        {
          question: "Who should take part in governing access to creative content?",
          answer: ["The people who know the material and the people accountable for policy: brand or production leads who can say what is sensitive, ", { text: "organisation administrators", page: 158 }, " who manage access policies, users and folders, and legal or IT colleagues where rights or security are involved."],
        },
        {
          question: "What makes creative content sensitive enough to govern access to it?",
          answer: "Content is sensitive when the wrong audience seeing it too early, too widely or at all would cause harm, whether to a launch, a client relationship or the terms of a licence.",
        },
        {
          question: "How often should access to sensitive creative content be reviewed?",
          answer: "Tie reviews to moments that change who needs access, such as launches, project closures, contract ends and reorganisations, rather than only to a calendar.",
        },
      ],
      sources: [{ kind: "pdf", page: 158 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on governing creative content",
      variant: "compact",
      pages: [179, 339, 170, 173],
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
