/**
 * 10 · One Source of Truth for Creative Teams — /platform/one-source-of-truth-for-creative-teams
 *
 * Angle (cluster: centralisation): a shared source of truth across creative, marketing, production and brand
 * teams, made trustworthy by permissions and approval workflows — what each team gains, how content earns the
 * status of the version everyone uses, and a change that reaches every team at once. Centralised Creative Asset
 * Library (6) owns bringing sources together; 395 is the conversion page and is not echoed.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how several creative teams share one set of assets; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 10,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Platform",
      lede: "How creative, marketing, production and brand teams can work from one organised library, with permissions and approval workflows deciding who reaches which assets and which content is ready to distribute.",
      visual: { diagram: "folder-access", focus: "team" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 10 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Every team working from the same assets",
      body: [
        "GetSibu gives creative, marketing, production and brand teams a shared source of truth for their digital assets. Everyone works from the same organised library, and permissions and approval workflows help make sure people access and distribute the right content.",
        "A source of truth is the one place whose version wins when copies disagree, and creative organisations often have several candidates. The design team’s folder holds the master files, marketing keeps exports in a campaign drive, a regional office downloaded its own set some time ago, and a partner is still using a logo from before the rebrand. Every one of those copies was correct once.",
        [
          "A shared library only becomes the source of truth if people can trust it on two counts: that what they find is the approved version, and that what they can see is what they are meant to see. ",
          { text: "Creative approval workflows", page: 67 },
          " deal with the first; ",
          { text: "creative asset permissions", page: 151 },
          " deal with the second.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["One library shared across teams", "Approved content marked as such", "Access controlled by area", "The right version distributed", "Decisions recorded with the asset"],
      },
      highlight: {
        heading: "In practice",
        body: "A campaign manager asks which logo is current. The answer is whatever the library holds, not the file attached to an email from last season.",
        tags: ["Brand", "Marketing", "Production"],
      },
      glance: {
        heading: "Source of truth in brief",
        facts: [
          { label: "Area", value: "Platform" },
          { label: "Shared by", value: "Creative, marketing, production and brand teams" },
          { label: "Governed by", value: "Permissions and approval workflows" },
          { label: "Starts from", value: "Centralised Creative Asset Library", page: 6 },
        ],
        actions: [{ kind: "route", path: "/platform", label: "More in Platform" }]
      },
      sources: [{ kind: "pdf", page: 10 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 151 }, { kind: "pdf", page: 6 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "by-team",
      eyebrow: "By team",
      heading: "What a shared source of truth gives each team",
      tabs: [
        {
          label: "Creative",
          heading: "Master files that stay authoritative",
          icon: "palette",
          body: [
            "Designers and editors make the originals, and they bear the cost when an outdated export circulates with their work on it.",
            [{ text: "Asset ownership", page: 115 }, " gives context about who created or uploaded content, and asset attribution keeps creators and contributors associated with their assets as the work passes between teams."],
          ],
          points: ["Creators credited with their work", "Ownership context kept with the asset"],
          link: { page: 222, label: "GetSibu for In-House Creative Teams" },
        },
        {
          label: "Marketing",
          heading: "Approved campaign content without the hunt",
          icon: "megaphone",
          body: [
            "Marketing teams reuse creative work constantly, which leaves them the most exposed to a draft slipping into a campaign by mistake.",
            [{ text: "Approved-only views", page: 103 }, " let users reach content that has completed the required review process, so the material a campaign draws on has already been through review."],
          ],
          points: ["Views limited to approved content", "Drafts kept out of campaign material"],
          link: { page: 213, label: "GetSibu for Marketing Teams" },
        },
        {
          label: "Production",
          heading: "One record of cuts, reviews and decisions",
          icon: "film",
          body: [
            "Production work generates many revisions and plenty of feedback, often from people in different places.",
            ["Production teams can coordinate through asset comments, versioning and timeline review, and ", { text: "approval history", page: 77 }, " keeps a record of review activity that reduces confusion over which version was accepted."],
          ],
          points: ["Feedback kept on the footage", "A record of the accepted version"],
          link: { page: 211, label: "GetSibu for Production Studios" },
        },
        {
          label: "Brand",
          heading: "Control over what goes out",
          icon: "shield",
          body: [
            "Brand teams answer for consistency but seldom control every place their assets are used.",
            ["Approval gates keep approved creative separate from drafts and work in progress, and ", { text: "expiry information", page: 104 }, " helps identify content that should no longer be used after a specified period."],
          ],
          points: ["Drafts kept apart from approved work", "Expiry for time-limited content"],
          link: { page: 214, label: "GetSibu for Brand Teams" },
        },
      ],
      sources: [{ kind: "pdf", page: 115 }, { kind: "pdf", page: 116 }, { kind: "pdf", page: 222 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 213 }, { kind: "pdf", page: 81 }, { kind: "pdf", page: 77 }, { kind: "pdf", page: 211 }, { kind: "pdf", page: 71 }, { kind: "pdf", page: 104 }, { kind: "pdf", page: 214 }, EXPLAINS],
    },
    {
      kind: "workflow",
      id: "earning-trust",
      eyebrow: "How content earns trust",
      heading: "From upload to the version every team uses",
      stages: [
        { label: "Uploaded", body: "New work enters the shared library, where asset statuses help distinguish drafts and other workflow states from approved content, so new work can be told apart from final work." },
        { label: "Reviewed", body: "Reviewers discuss the asset where it sits, and the approval workflow lets the team request review, make changes and mark the asset approved." },
        { label: "Approved", body: "Status history records whether content is awaiting review, approved or requires changes, so the decision is on record for anyone who opens the asset.", page: 68 },
        { label: "Shared", body: "Sharing is controlled through permissions rather than relying only on unrestricted links, so approved content reaches the people it is meant for.", page: 172 },
        { label: "Reused", body: "Analytics show which approved assets are being accessed and reused, which tells the brand team whether the source of truth is actually being used.", page: 203 },
      ],
      sources: [{ kind: "pdf", page: 102 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 68 }, { kind: "pdf", page: 172 }, { kind: "pdf", page: 203 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A product rename that reaches every team at once",
      team: "A brand and marketing group",
      situation: "A company renames one of its product lines. New packaging photography, a revised launch film and updated sales material must replace the old versions for brand, marketing and production teams across several regions.",
      steps: [
        {
          heading: "Production replaces the film",
          body: ["The editor replaces the old film in place, so its ", { text: "version history", page: 92 }, " keeps the earlier cut while revision tracking shows which version is now active."],
        },
        {
          heading: "Brand approves the photography",
          body: "The brand team reviews the new packaging shots, asks for two changes and marks the final images as approved.",
        },
        {
          heading: "Regional teams get access",
          body: "Folder-level permissions open the launch folder to the regional marketing teams, while unreleased material elsewhere in the library stays restricted.",
        },
        {
          heading: "Marketing works from approved content",
          body: "Marketers building the launch take images and film from an approved-only view rather than from their own downloads, so what they use is the content that has completed review.",
        },
        {
          heading: "The old material is retired",
          body: ["Assets showing the previous product name are ", { text: "archived", page: 108 }, ", which keeps them available as history without cluttering everyday searches."],
        },
      ],
      outcome: "Every team moved to the renamed product together, because each one was working from the same library instead of reconciling its own copies.",
      link: { page: 224, label: "GetSibu for Global Brands" },
      sources: [{ kind: "pdf", page: 91 }, { kind: "pdf", page: 92 }, { kind: "pdf", page: 100 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 154 }, { kind: "pdf", page: 176 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 224 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about one source of truth for creative teams",
      items: [
        {
          question: "What turns a shared creative library into a source of truth rather than shared storage?",
          answer: "Trust in what it holds. Shared storage keeps files; a source of truth also shows which version is approved and controls who can reach each area, so people can use what they find without checking somewhere else first.",
        },
        {
          question: "Can different teams see different parts of one source of truth?",
          answer: ["Yes. ", { text: "Team access management", page: 175 }, " establishes consistent permissions across groups of users, and departments can be given access to only the creative libraries relevant to their work."],
        },
        {
          question: "How does a shared source of truth help stop outdated assets being distributed?",
          answer: "No library can prevent every misuse, but review status, approved-only views and expiry information can help make the current version easier to find and outdated content easier to identify.",
        },
        {
          question: "Can an agency keep a separate source of truth for each client?",
          answer: [{ text: "Client tenant isolation", page: 161 }, " keeps each client environment logically isolated, so assets from one client are not mixed with another client’s library."],
        },
      ],
      sources: [{ kind: "pdf", page: 10 }, { kind: "pdf", page: 175 }, { kind: "pdf", page: 176 }, { kind: "pdf", page: 76 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 104 }, { kind: "pdf", page: 161 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on sharing one library across teams",
      variant: "compact",
      pages: [6, 67, 151, 103, 77, 373],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the creative library explainer." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Bring Your Creative Assets Together",
      conversionPage: 392,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 392 }],
    },
  ],
};

export default page;
