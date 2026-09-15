/**
 * 214 · GetSibu for Brand Teams — /use-cases/brand-teams
 *
 * Angle (clusters: uc-marketing-brand, brand-control): keeping a brand's approved set trustworthy — approval gates that
 * separate drafts, guardrail tags that encode brand requirements, expiry for time-limited material, and analytics on
 * what colleagues reuse. Marketing Teams (213) owns the everyday campaign library; Enterprise Marketing (223) owns
 * governance at scale; Global Brands (224) and Multi-Market Teams (225) own markets and regions.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how brand teams typically control their assets; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 214,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Use Cases",
      lede: "How a brand team can keep a controlled set of approved assets, mark what meets its requirements, retire material when its time is up, and see which approved assets colleagues actually reuse.",
      visual: { diagram: "media-library", focus: "image,document" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 214 }, { kind: "pdf", page: 203 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A brand library colleagues can take from without checking first",
      body: [
        "Brand teams can use GetSibu to organise approved assets, apply tags specific to their brand, record expiry information and keep a controlled source of truth for everyone who represents the brand.",
        "Much of a brand team’s work in a library is preventing the wrong file from being used. Logos in outdated colours, photography whose licence has lapsed and visuals from a previous positioning stay in circulation long after the brand moves on, because a stray copy is easier to find than the current version.",
        [
          "Control, in that sense, means making the right asset the easiest one to reach. GetSibu gives teams ",
          { text: "a shared source of truth", page: 10 },
          " in which permissions and approval workflows help people access and distribute the right content, and ",
          { text: "brand asset analytics", page: 203 },
          " help the team understand which approved assets are being accessed and reused, a test of whether its source of truth is the one colleagues really use.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Approved assets apart from drafts", "Tags that encode brand requirements", "Expiry for time-limited content", "Reuse visible through analytics", "Retired material archived"],
      },
      highlight: {
        heading: "In practice",
        body: "A colleague in sales who needs the logo takes it from the approved set, so the file in their presentation is the one the brand team signed off.",
        tags: ["Brand managers", "Designers", "Brand guidelines"],
      },
      glance: {
        heading: "Brand teams in brief",
        facts: [
          { label: "Team", value: "Brand teams" },
          { label: "Typical material", value: "Logos, brand photography, templates, guidelines" },
          { label: "Builds on", value: "Brand Collaboration", page: 83 },
          { label: "Supports", value: "Approved Asset Library", page: 103 },
        ],
        actions: [{ kind: "route", path: "/use-cases", label: "More in Use Cases" }]
      },
      sources: [{ kind: "pdf", page: 214 }, { kind: "pdf", page: 10 }, { kind: "pdf", page: 203 }, { kind: "pdf", page: 83 }, { kind: "pdf", page: 103 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "capabilities",
      eyebrow: "What the team uses",
      heading: "The controls a brand team works with",
      items: [
        {
          heading: "Approval gates",
          body: "Approval gates keep signed-off brand creative apart from drafts and work in progress, so an unfinished logo lockup stays out of circulation.",
          icon: "approval",
          points: ["Drafts kept out of the approved set", "Decisions recorded in status history"],
          page: 71,
        },
        {
          heading: "Approved-only views",
          body: "People outside the brand team can be directed to a view of content that has completed the required review, instead of deciding for themselves which file looks final.",
          icon: "check",
          points: ["One place to take assets from", "No judging whether a file is a draft"],
          page: 103,
        },
        {
          heading: "Brand guardrail tags",
          body: "Structured tags identify assets that comply with specific organisational requirements, such as the current guidelines or the rules of a sub-brand.",
          icon: "flag",
          points: ["Requirements recorded as tags", "Compliance becomes searchable"],
          page: 105,
        },
        {
          heading: "Expiry information",
          body: "Expiry information helps identify content that should no longer be used after a specified period, which suits licensed photography and time-bound campaigns.",
          icon: "calendar",
          points: ["Licensed imagery with an end date", "Campaign assets that run out"],
          page: 104,
        },
        {
          heading: "A structured taxonomy",
          body: "Hierarchical tags with synonyms, colours and inheritance let the brand’s own vocabulary organise the library as it grows.",
          icon: "tag",
          points: ["Synonyms for the names people use", "Hierarchy for sub-brands and ranges"],
          page: 8,
        },
        {
          heading: "Tag override",
          body: "When an AI suggestion does not match the brand’s taxonomy, authorised users can override it.",
          icon: "sparkles",
          points: ["AI suggestions stay under brand control", "Classification in the brand’s own terms"],
          page: 48,
        },
        {
          heading: "Asset statuses",
          body: "Statuses distinguish drafts, approved content and other workflow states, so a brand asset’s state need not be a matter of guesswork.",
          icon: "layers",
          points: ["Draft, approved and more", "A clear state for each asset"],
          page: 102,
        },
      ],
      sources: [{ kind: "pdf", page: 71 }, { kind: "pdf", page: 68 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 105 }, { kind: "pdf", page: 23 }, { kind: "pdf", page: 104 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 48 }, { kind: "pdf", page: 102 }],
    },
    {
      kind: "before-after",
      id: "before-after",
      eyebrow: "Before and after",
      heading: "What changes when brand files have one controlled home",
      beforeLabel: "Brand files in circulation",
      afterLabel: "A controlled brand library",
      before: ["“Can you send me the logo?” emails", "Old colourways still in presentations", "Licensed imagery reused past its term", "Drafts forwarded as final artwork"],
      after: ["Colleagues take logos from the approved set", "Superseded assets archived out of circulation", "Expired content identifiable in the library", "Only signed-off artwork in approved views"],
      sources: [{ kind: "pdf", page: 103 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 104 }, { kind: "pdf", page: 71 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A brand refresh that retires the old identity",
      team: "A brand team",
      situation: "A brand team is launching a refreshed visual identity. New logos, colours and templates are ready, but the previous identity is still spread through the library and in use across the company.",
      steps: [
        {
          heading: "The new identity passes approval",
          body: ["The new logo files and templates go through the ", { text: "creative approval workflow", page: 67 }, " and are marked as approved once the team signs them off."],
        },
        {
          heading: "Tags record what is current",
          body: "The team applies its guardrail tag for the new guidelines to the approved files, so colleagues can search specifically for assets that meet them.",
        },
        {
          heading: "Old assets get an end date",
          body: "Files from the previous identity that must stay usable during the transition receive expiry information, identifying when they should no longer be used.",
        },
        {
          heading: "Analytics show lingering use",
          body: "Brand asset analytics help show which old-identity files are still being accessed, so the team reminds colleagues that the refreshed files are ready.",
        },
        {
          heading: "The old identity is archived",
          body: ["After the transition, the retired assets are ", { text: "archived", page: 108 }, ", keeping them on record without leaving them in everyday results."],
        },
      ],
      outcome: "Everyday searches lead colleagues to the refreshed identity, and the old one stays on record for reference rather than in circulation.",
      link: { page: 105, label: "Brand Guardrail Tags" },
      sources: [{ kind: "pdf", page: 67 }, { kind: "pdf", page: 105 }, { kind: "pdf", page: 104 }, { kind: "pdf", page: 203 }, { kind: "pdf", page: 108 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "accordion",
      id: "decisions",
      eyebrow: "Considerations",
      heading: "What a brand team should settle before tightening control",
      items: [
        {
          heading: "What “approved” means",
          summary: "Approval needs a definition before it needs a workflow.",
          icon: "check",
          body: [
            "Approved for internal use, approved for external use and approved for one campaign are different things. If the team has not agreed which it means, the approved view becomes a matter of opinion.",
            [{ text: "Review status", page: 76 }, " indicates whether an asset still needs attention or has completed approval, which only helps if everyone reads the status the same way."],
          ],
        },
        {
          heading: "Which requirements become tags",
          summary: "Guardrail tags work best for rules that are simply true or false for an asset.",
          icon: "tag",
          body: [
            "“Uses the current logo” and “cleared for external use” are clear conditions; “on brand” is a judgement. Tagging the first kind gives colleagues something reliable to search for.",
            [{ text: "Tag analytics", page: 186 }, " identify frequently used or searched tags, which can show whether colleagues are actually looking for the conditions the team encoded."],
          ],
        },
        {
          heading: "Where expiry dates come from",
          summary: "Licences, campaigns and embargoes each set their own limits.",
          icon: "calendar",
          body: [
            "Photography licences, talent agreements and campaign windows each define how long an asset may be used. The brand team rarely holds all of those dates, so capturing them when an asset enters the library matters.",
            [{ text: "Asset ownership", page: 115 }, " gives context about who created or uploaded content, which tells the team whom to ask when a date is missing."],
          ],
        },
        {
          heading: "Who is allowed to approve",
          summary: "A controlled library depends on a short, deliberate list of approvers.",
          icon: "shield",
          body: [
            "If anyone can approve, approval stops meaning anything. Brand teams usually want a small group of approvers and a wider group who can contribute.",
            [{ text: "Creative approval management", page: 89 }, " creates a structured process for moving assets from draft to approved status, and governance defines who is able to approve."],
          ],
        },
        {
          heading: "Keeping templates current",
          summary: "Templates change more often than logos, and saved copies linger.",
          icon: "document",
          body: [
            "A colleague who saved last year’s presentation template keeps using it long after the brand has updated the layout.",
            ["Replacing the template in place with ", { text: "creative asset versioning", page: 91 }, " keeps one current file, while earlier versions remain in its history rather than as separate copies."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 76 }, { kind: "pdf", page: 186 }, { kind: "pdf", page: 115 }, { kind: "pdf", page: 89 }, { kind: "pdf", page: 114 }, { kind: "pdf", page: 91 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about GetSibu for brand teams",
      items: [
        {
          question: "Can a brand team keep work in progress away from the rest of the company?",
          answer: [{ text: "Folder-level permissions", page: 152 }, " control access more finely than organisation-wide access, and ", { text: "new folders can remain private", page: 154 }, " until access is explicitly granted, so drafts can stay within the brand team."],
        },
        {
          question: "Can colleagues ask the brand team about an asset without sending an email?",
          answer: ["Yes. ", { text: "Asset mentions", page: 86 }, " make it easier to bring the right collaborator into an asset-specific discussion, so a question such as whether a logo suits print can be asked on the logo itself."],
        },
        {
          question: "Can a brand team see whether approved assets are actually reused?",
          answer: ["Beyond knowing which approved assets are reused, ", { text: "asset usage tracking", page: 106 }, " helps teams understand which assets remain inactive, a prompt to retire or promote them."],
        },
        {
          question: "How does a brand team find a logo when nobody knows the filename?",
          answer: [{ text: "Asset metadata search", page: 23 }, " lets people search available metadata alongside tags and extracted content, which gives several ways in when the filename or folder is unknown."],
        },
      ],
      sources: [{ kind: "pdf", page: 152 }, { kind: "pdf", page: 154 }, { kind: "pdf", page: 86 }, { kind: "pdf", page: 106 }, { kind: "pdf", page: 23 }],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on brand control",
      variant: "compact",
      pages: [71, 103, 104, 105, 203, 213],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page, and the closest marketing use case." }],
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
