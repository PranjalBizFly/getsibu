/**
 * 9 · AI-Aware Asset Management — /platform/ai-aware-asset-management
 *
 * Angle (clusters: ai-tagging, ai-approach): the platform stance that AI recommends and people decide — the path
 * from a recommendation to a decision the library keeps, the three ways a team handles suggestions, and how to set
 * up review so control stays with the team. AI-Assisted Tagging (31) owns the feature; AI Tag Confidence (46),
 * AI Tag Approval (47) and AI Tag Override (48) own each mechanism in depth; AI-Powered DAM (3) owns why AI belongs
 * in a library.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of reviewing AI output in a creative library; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 9,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Platform",
      lede: "How GetSibu lets AI recommend tags and classifications while your team decides what the library keeps: approving suggestions in bulk, overriding the ones that miss, and staying in control of how assets are organised.",
      visual: { diagram: "ai-review", focus: "approve" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 9 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "AI proposes, the team decides",
      body: [
        "AI-aware asset management is how GetSibu puts AI to work in a library without handing the library over to it. The platform analyses media and recommends tags and classifications it judges meaningful; teams can approve those suggestions in bulk, override them when necessary and keep control over how their library is organised.",
        "The distinction matters because a tag is a decision about how an asset will be found. When software applies labels that nobody checks, errors spread quietly: a mislabelled asset drops out of the searches it belongs in, and a vocabulary the team worked hard to agree fills with near-duplicates. When people must tag everything by hand, the opposite happens and the work never keeps pace with what arrives.",
        [
          "AI-aware management sits between those extremes. It relies on AI for volume, through ",
          { text: "AI-assisted tagging", page: 31 },
          " and ",
          { text: "AI asset classification", page: 42 },
          ", and keeps judgement with the people responsible for the library, in line with GetSibu’s wider approach of ",
          { text: "combining automated analysis with human approval", page: 45 },
          ".",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Recommendations, not final decisions", "Tags and classifications", "Approval in bulk", "Overrides whenever needed", "Confidence as a guide", "The team’s taxonomy in charge"],
      },
      highlight: {
        heading: "In practice",
        body: "After a large import, a library manager accepts a batch of well-matched suggestions together and corrects the handful that use the wrong term.",
        tags: ["Library managers", "Authorised reviewers"],
      },
      glance: {
        heading: "AI-aware management in brief",
        facts: [
          { label: "Area", value: "Platform" },
          { label: "AI provides", value: "Recommended tags and classifications" },
          { label: "People provide", value: "Approval and overrides" },
          { label: "Background", value: "What Is AI Tagging?", page: 364 },
        ],
        actions: [{ kind: "route", path: "/platform", label: "More in Platform" }]
      },
      sources: [{ kind: "pdf", page: 9 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 42 }, { kind: "pdf", page: 45 }, { kind: "pdf", page: 364 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "recommendation-to-decision",
      eyebrow: "Step by step",
      heading: "From an AI recommendation to a decision the library keeps",
      steps: [
        { heading: "Media is analysed", body: "As an asset is processed, AI examines its content; objects appearing in supported media, for example, can be identified and associated with confidence information.", icon: "scan" },
        { heading: "Tags are recommended", body: "Suggested tags arrive during processing, so classification begins without anyone describing each file from scratch.", icon: "tag" },
        { heading: "Confidence guides attention", body: "Confidence information shows how strongly the system associates a tag with an asset, which helps reviewers decide where to look closely.", icon: "gauge", page: 46 },
        { heading: "Good matches approved together", body: "Suggested tags can be approved in bulk, which makes organising a large library much faster than reviewing every file individually.", icon: "approval", page: 47 },
        { heading: "Mismatches overridden", body: "Where a tag does not fit the team’s intended taxonomy, an authorised user can override it, because AI recommendations are not permanent.", icon: "refresh", page: 48 },
        { heading: "The result helps search", body: "Tags can then contribute to asset search and discovery, so the effort spent reviewing pays off each time someone looks for an asset.", icon: "search" },
      ],
      sources: [{ kind: "pdf", page: 9 }, { kind: "pdf", page: 34 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 46 }, { kind: "pdf", page: 47 }, { kind: "pdf", page: 48 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "three-decisions",
      eyebrow: "Three decisions",
      heading: "Accept, correct or look closer: handling suggestions",
      tabs: [
        {
          label: "Accept in bulk",
          heading: "When suggestions fit, accept them together",
          icon: "check",
          body: [
            "Reviewing suggestions one file at a time defeats the purpose of AI in a large library. Where a batch of assets shares obvious characteristics, such as a product shoot against one backdrop, the suggestions are easy to check as a group.",
            "The skill lies in choosing sensible batches: assets from one source, one shoot or one campaign, where a quick scan is enough to confirm the recommendations make sense.",
          ],
          points: ["Batches from one shoot or campaign", "A quick scan before accepting"],
        },
        {
          label: "Override",
          heading: "When a suggestion is wrong, replace it",
          icon: "refresh",
          body: [
            "AI describes what it detects, which is not always what the team means. It may choose a generic term where the taxonomy has a specific one, or a label that is accurate but not how the organisation talks about its work.",
            ["Overriding is how the team’s vocabulary wins. The ", { text: "creative asset organisation", page: 8 }, " a team has designed, with its hierarchy and synonyms, is the standard every suggestion is measured against."],
          ],
          points: ["Generic terms swapped for the team’s own", "The taxonomy as the reference"],
        },
        {
          label: "Look closer",
          heading: "When confidence is weak, check before deciding",
          icon: "eye",
          body: [
            "A suggestion with weak confidence is a prompt for a person to look at the asset, not a verdict in either direction.",
            "Weak suggestions also say something about the library. If one kind of asset keeps producing uncertain tags, it may need a clearer category, or better metadata from the people who upload it.",
          ],
          points: ["Weak confidence means a human check", "Repeated uncertainty points to gaps"],
        },
      ],
      sources: [{ kind: "pdf", page: 9 }, { kind: "pdf", page: 47 }, { kind: "pdf", page: 48 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 46 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "setting-up",
      eyebrow: "Considerations",
      heading: "Setting up AI-aware tagging so control stays with the team",
      items: [
        {
          heading: "Decide who reviews suggestions",
          summary: "Suggestions deserve reviewers who understand the vocabulary.",
          icon: "users",
          body: [
            "Approval is a responsibility, not a formality. The people reviewing suggestions should know the vocabulary well enough to spot a term that is accurate but wrong for the organisation.",
            ["The same thinking already applies to the library itself: ", { text: "creative asset governance", page: 114 }, " is where an organisation defines who can upload, edit, approve, download and manage assets."],
          ],
        },
        {
          heading: "Agree the vocabulary first",
          summary: "Suggestions are easier to judge against a taxonomy that already exists.",
          icon: "book",
          body: [
            "Without an agreed set of terms, every suggestion turns into a debate. With one, reviewing becomes a matter of checking fit.",
            [{ text: "What Is Asset Taxonomy?", page: 375 }, " explains the structure a vocabulary needs, and ", { text: "tag analytics", page: 186 }, " can show which tags are frequently used or searched."],
          ],
        },
        {
          heading: "Treat classifications and tags differently",
          summary: "Categories and descriptive tags answer different questions.",
          icon: "layers",
          body: [
            "A classification places an asset in a category, such as a type of content, while tags describe what it contains. Both can be recommended and both deserve review, but mistakes in each have different effects.",
            "A wrong category can hide an asset from everyone browsing that part of the library, while a wrong tag tends to affect particular searches. Reviewers can weigh their attention accordingly.",
          ],
        },
        {
          heading: "Review little and often",
          summary: "Small, regular reviews stop suggestions from piling up.",
          icon: "calendar",
          body: [
            "A backlog of unreviewed suggestions is a backlog of uncertain metadata. Reviewing after each import or shoot keeps tags current and the effort manageable.",
            [{ text: "AI library organisation", page: 57 }, " is meant to help teams maintain order as the library grows, rather than facing a major manual clean-up after every campaign."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 31 }, { kind: "pdf", page: 114 }, { kind: "pdf", page: 375 }, { kind: "pdf", page: 186 }, { kind: "pdf", page: 9 }, { kind: "pdf", page: 57 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about AI-aware asset management",
      items: [
        {
          question: "What does “AI-aware” mean in AI-aware asset management?",
          answer: "It means the platform treats AI analysis as a source of recommendations, while the organisation of the library remains a decision the team makes and can change.",
        },
        {
          question: "Does reviewing AI suggestions slow down tagging in AI-aware asset management?",
          answer: "It need not. Because suggested tags can be approved in bulk, a batch that fits can be accepted together, leaving closer attention for the suggestions that need correcting.",
        },
        {
          question: "How is AI-aware asset management different from AI-assisted tagging?",
          answer: [{ text: "AI-assisted tagging", page: 31 }, " is the feature that suggests tags during processing. AI-aware asset management is the wider stance behind it: AI recommends tags and classifications, and people keep the final say over how the library is organised."],
        },
        {
          question: "Who reviews AI suggestions in AI-aware asset management?",
          answer: "Authorised users. Suggested tags can be reviewed, approved or overridden by the people an organisation has given that authority, which keeps decisions about the library with its own team.",
        },
      ],
      sources: [{ kind: "pdf", page: 9 }, { kind: "pdf", page: 47 }, { kind: "pdf", page: 31 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on keeping people in control of AI",
      variant: "compact",
      pages: [31, 46, 47, 48, 45, 364],
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
