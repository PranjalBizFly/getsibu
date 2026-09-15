/**
 * 225 · GetSibu for Multi-Market Teams — /use-cases/multi-market-teams
 *
 * Angle (cluster: uc-marketing-brand): separating content by region while governance stays central — regional content
 * that must stay in its region for rights, regulatory or product reasons, under one model for access, vocabulary,
 * approval and accountability. Global Brands (224) owns global masters adapted by markets; Enterprise Marketing (223)
 * owns governance across marketing functions; E-Commerce (230), Retail (231) and Social Media (234) own their own material.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of why teams working across regions separate content; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 225,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Use Cases",
      lede: "How a team working across several regions can keep each region’s content separate while one central set of rules decides who can upload, approve and use it.",
      visual: { diagram: "media-library" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 225 }, { kind: "pdf", page: 114 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Separate by region, governed from the centre",
      body: [
        "Multi-market teams can use GetSibu to separate content by region while governance stays centralised, so each region manages its own material without inventing its own rules.",
        "Regions differ for good reasons. Products are sold in some territories and not others, imagery may be licensed for one territory only, regulations shape what a promotion can say, and seasonal calendars run in opposite directions on either side of the equator. Mixing all of that in one pool invites someone to use an asset where it does not belong.",
        [
          "Separating regions completely creates the opposite problem: each builds its own conventions, tags and approval habits, and the organisation loses a consistent view. The workable balance is separate content under shared governance. In GetSibu, ",
          { text: "governance", page: 114 },
          " covers who may upload, edit, approve, download and manage assets, and ",
          { text: "permission hierarchies", page: 178 },
          " let organisation-wide roles sit above the folder-level controls for each region.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Content separated region by region", "One governance model for all regions", "A shared vocabulary for tags", "Regional leads limited to their region", "Accountability across the organisation"],
      },
      highlight: {
        heading: "In practice",
        body: "A promotion licensed for one territory stays in that region’s folders, while the tagging scheme and approval rules it follows are the same as everywhere else.",
        tags: ["Regional teams", "Central operations", "Governance"],
      },
      glance: {
        heading: "Multi-market teams in brief",
        facts: [
          { label: "Team", value: "Multi-market teams" },
          { label: "Typical material", value: "Regional campaigns, product imagery, local documents" },
          { label: "Builds on", value: "Folder-Level Permissions", page: 152 },
          { label: "Supports", value: "Audit Logs", page: 326 },
        ],
        actions: [{ kind: "route", path: "/use-cases", label: "More in Use Cases" }]
      },
      sources: [{ kind: "pdf", page: 225 }, { kind: "pdf", page: 114 }, { kind: "pdf", page: 178 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 326 }, EXPLAINS],
    },
    {
      kind: "layers",
      id: "layers",
      eyebrow: "Structure",
      heading: "The layers that keep regions apart and rules shared",
      layers: [
        { label: "Organisation", body: "Organisation administrators manage access policies, users, folders and settings for the whole library.", page: 158 },
        { label: "Shared rules", body: "Data governance sets the rules on access, retention, usage and asset management that apply to every region.", page: 339 },
        { label: "Regional folders", body: "Each region’s content sits in folders that stay private until access is explicitly granted.", page: 154 },
        { label: "Regional teams", body: "Team-based access gives each region’s group of users a consistent set of permissions.", page: 175 },
        { label: "Regional leads", body: "A lead can be given access to their region’s folders or teams while staying restricted from the rest.", page: 155 },
        { label: "Individuals", body: "Targeted access covers the specialist whose needs do not fit the regional team’s pattern.", page: 157 },
      ],
      sources: [{ kind: "pdf", page: 158 }, { kind: "pdf", page: 339 }, { kind: "pdf", page: 154 }, { kind: "pdf", page: 175 }, { kind: "pdf", page: 155 }, { kind: "pdf", page: 157 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "Bringing a newly added region into the library",
      team: "A multi-market team",
      situation: "A company that already runs its marketing library for several regions is expanding into a new one. The new regional team needs to start quickly, but central operations wants it working to the same rules as everyone else.",
      steps: [
        {
          heading: "A closed area for the region",
          body: "Central operations creates the new region’s folders, which start private, and gives the regional team and its lead the same pattern of access every other region has.",
        },
        {
          heading: "Existing material comes in",
          body: ["The region’s existing assets arrive through ", { text: "bulk import", page: 291 }, ", and ", { text: "folder mapping", page: 294 }, " replaces their old structure with the one the other regions use."],
        },
        {
          heading: "The shared vocabulary applies",
          body: ["The imported assets are organised with the organisation’s existing tags, and AI suggestions that do not fit are ", { text: "overridden", page: 48 }, " rather than left to create a regional dialect."],
        },
        {
          heading: "The set-up is on record",
          body: ["The ", { text: "audit logs", page: 326 }, " keep a historical record of important actions, including permission changes, so central operations can check the new region’s set-up later."],
        },
        {
          heading: "Activity shows the region is live",
          body: ["After a few weeks, ", { text: "contributor analytics", page: 185 }, " show members of the new regional team among the people adding content."],
        },
      ],
      outcome: "The new region runs its own content from the first week, inside the same governance model as every other region rather than a parallel one.",
      link: { page: 178, label: "Permission Hierarchies" },
      sources: [{ kind: "pdf", page: 154 }, { kind: "pdf", page: 175 }, { kind: "pdf", page: 155 }, { kind: "pdf", page: 291 }, { kind: "pdf", page: 294 }, { kind: "pdf", page: 48 }, { kind: "pdf", page: 326 }, { kind: "pdf", page: 185 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "comparison",
      id: "comparison",
      eyebrow: "Compared",
      heading: "Regions left to themselves versus separation with shared rules",
      columns: ["Each region on its own", "Regions in one governed library"],
      emphasis: 1,
      rows: [
        ["Where content lives", "A separate system per region", "Regional folders within one library"],
        ["Vocabulary", "Tags invented region by region", "One hierarchical taxonomy with synonyms"],
        ["Approvals", "Local habits, rarely recorded", "Approval with status history"],
        ["Oversight", "Reports assembled by hand", "Team analytics across the library"],
      ],
      sources: [{ kind: "pdf", page: 152 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 68 }, { kind: "pdf", page: 199 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "reasons",
      eyebrow: "Why regions differ",
      heading: "The reasons content has to stay in its region",
      tabs: [
        {
          label: "Licensed imagery",
          heading: "Keep territory-limited assets in their territory",
          icon: "lock",
          body: [
            "Photography, music and talent agreements are often licensed for particular territories or periods. Keeping such assets within their region’s folders stops them being picked up elsewhere by mistake.",
            "Noting the territory on the asset itself, in its tags or keywords, also tells anyone who can see it where it may and may not be used.",
          ],
          points: ["Rights limited by territory", "Territory noted on the asset"],
          link: { page: 105, label: "Brand Guardrail Tags" },
        },
        {
          label: "Local regulation",
          heading: "Let regional review reflect local rules",
          icon: "approval",
          body: [
            "Advertising and product claims are regulated differently from one jurisdiction to another, so a promotion approved in one region may need changes before it can run in the next.",
            [{ text: "Approval history", page: 77 }, " keeps a record of review activity on each asset, which helps reduce confusion about which version was accepted."],
          ],
          points: ["Review by people who know local rules", "Decisions kept on the asset"],
          link: { page: 67, label: "Creative Approval Workflow" },
        },
        {
          label: "Seasonal calendars",
          heading: "Plan for seasons that fall at different times",
          icon: "calendar",
          body: [
            "Seasonal campaigns fall at different times of year across hemispheres and cultures, so one region’s finished campaign can be useful to another months later.",
            [{ text: "Saved asset searches", page: 17 }, " let a region keep a reusable view of material it has access to, ready for when its own season arrives."],
          ],
          points: ["Past campaigns reused on a local calendar", "Views saved for later"],
          link: { page: 79, label: "Shared Creative Views" },
        },
        {
          label: "Central reporting",
          heading: "See the organisation without merging content",
          icon: "chart",
          body: [
            "Central teams still need a view of the organisation as a whole, even when no region can see another’s content.",
            [{ text: "Asset access analytics", page: 197 }, " provide information about how content is being viewed or used, a picture the centre can work from without moving any region’s material."],
          ],
          points: ["Content stays in its region", "Usage understood centrally"],
          link: { page: 205, label: "Creative Library Reporting" },
        },
      ],
      sources: [{ kind: "pdf", page: 22 }, { kind: "pdf", page: 105 }, { kind: "pdf", page: 77 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 17 }, { kind: "pdf", page: 79 }, { kind: "pdf", page: 197 }, { kind: "pdf", page: 205 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about GetSibu for multi-market teams",
      items: [
        {
          question: "What should a multi-market team decide centrally, and what regionally?",
          answer: "Decide centrally what has to be consistent everywhere: the taxonomy, the approval rules and the pattern of access. Leave to the regions what depends on local knowledge, such as which assets suit the market, local copy and regulatory checks.",
        },
        {
          question: "Who should own the shared taxonomy in a multi-market team?",
          answer: ["One central owner, with a named contact in each region who can propose new terms. A single ", { text: "asset taxonomy", page: 375 }, " stays coherent only when someone is responsible for saying yes or no to changes."],
        },
        {
          question: "How should a multi-market team handle content that several regions share?",
          answer: ["Keep one copy in an area every relevant region can reach, rather than a copy in each region’s folders. ", { text: "Duplicate detection", page: 40 }, " helps find the copies that already exist, including renamed or re-encoded ones."],
        },
      ],
      sources: [{ kind: "pdf", page: 375 }, { kind: "pdf", page: 40 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on governing content across regions",
      variant: "compact",
      pages: [178, 152, 114, 326, 224, 223],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page, and the closest marketing use cases." }],
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
