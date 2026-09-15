/**
 * 398 · Turn Your Asset Library Into Intelligence — /get-started/turn-your-asset-library-into-intelligence (FRAMED)
 *
 * Angle (clusters: ai-intelligence, conversion): library intelligence as meaning an organisation can rely on —
 * meaning attached to content (44, 58), built up through processing and review, and kept trustworthy by people.
 * The page's own PDF paragraph, its unconfirmed claims and its list of capabilities appear nowhere, not even in
 * pieces. Intelligent Media Library (5) owns the layers of information on a file; Future of AI-Powered Creative
 * Libraries (380) owns the knowledge-environment essay.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of what makes the meaning held in an asset library dependable; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 398,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Get Started",
      lede: "What it takes for a library to hold meaning about its assets that an organisation can rely on, how that meaning builds up, and who keeps it accurate.",
      visual: { diagram: "ai-review", focus: "tags" },
      actions: [
        { kind: "global", cta: "primary" },
        { kind: "page", page: 58, label: "AI asset intelligence" },
      ],
      sources: [{ kind: "pdf", page: 44 }, { kind: "pdf", page: 58 }, { kind: "pdf", page: 45 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Meaning an organisation can rely on",
      body: [
        [
          "For an organisation, part of a library’s value lies in what it can tell people about the work it holds. Through ",
          { text: "creative intelligence", page: 44 },
          ", GetSibu can attach searchable meaning to content, and asset intelligence combines AI analysis with metadata and search capabilities to make media libraries more informative.",
        ],
        "Meaning is only useful if people trust it. A description that is usually right but occasionally wrong teaches colleagues to check everything by eye, and at that point the library saves nobody any time. The measure of an intelligent library is less how much it can say about an asset than whether what it says can be relied on.",
        [
          "Interpreting the content of visual assets is the subject of ",
          { text: "AI Media Understanding", page: 43 },
          "; keeping the resulting meaning dependable is a job for the team as much as for the platform.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Meaning attached to content", "AI analysis combined with metadata", "Trust as the real measure", "Suggestions reviewed by people", "Access that keeps pace with meaning"],
      },
      glance: {
        heading: "Library intelligence in brief",
        facts: [
          { label: "Area", value: "Get Started" },
          { label: "Built from", value: "AI analysis, metadata and search" },
          { label: "Kept accurate by", value: "Authorised users reviewing AI suggestions" },
          { label: "Background essay", value: "Future of AI-Powered Creative Libraries", page: 380 },
        ],
      },
      sources: [{ kind: "pdf", page: 44 }, { kind: "pdf", page: 58 }, { kind: "pdf", page: 43 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 380 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "building-up",
      eyebrow: "Step by step",
      heading: "How meaning builds up in a library",
      intro: "Some meaning arrives with processing; the rest is confirmed or corrected by people.",
      steps: [
        { heading: "Prepare the content", body: "Through AI media indexing, supported visual, textual and metadata signals are processed so the content is ready for discovery.", icon: "scan", page: 50 },
        { heading: "Approve suggestions in bulk", body: "Suggested tags can be approved in bulk, which makes large-scale organisation significantly faster than reviewing every file individually.", icon: "approval", page: 47 },
        { heading: "Replace what does not fit", body: "When a suggestion does not match the team’s intended taxonomy, an authorised user can override it, so the library keeps the organisation’s own terms.", icon: "tag", page: 48 },
      ],
      sources: [{ kind: "pdf", page: 50 }, { kind: "pdf", page: 47 }, { kind: "pdf", page: 48 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "trustworthy",
      eyebrow: "Considerations",
      heading: "Keeping library intelligence trustworthy",
      items: [
        {
          heading: "Suggestions are not facts",
          summary: "Analysis needs a human check before people rely on what it says.",
          icon: "approval",
          body: [
            "Automated analysis works in general terms and can misread what it sees, and a confident wrong description sends people in the wrong direction. The more a library is trusted, the more that matters.",
            ["The balance described in ", { text: "AI-powered asset management", page: 45 }, " is automated analysis paired with human approval: AI reduces the amount of repetitive library administration, and the team keeps control."],
          ],
        },
        {
          heading: "Only what is in the library can be interpreted",
          summary: "Material left on personal drives stays anonymous, however capable the library is.",
          icon: "folder",
          body: [
            "Meaning is attached to the assets a library actually holds. Photographs kept on a laptop, decks passed around by email and footage on a drive nobody connected gain nothing, so an informative library depends on collections being brought in.",
            ["Where material is still scattered, ", { text: "bringing creative assets together", page: 392 }, " is the practical first step."],
          ],
        },
        {
          heading: "Meaning goes stale as the organisation changes",
          summary: "Descriptions that were accurate when applied can mislead years later.",
          icon: "book",
          body: [
            "Products are renamed, campaigns are rebranded and teams reorganise. Tags applied under the old names still describe the assets, but no longer in the words people now use.",
            ["Reviewing the vocabulary itself from time to time, not only new suggestions, keeps what the library says current. ", { text: "What Is Asset Taxonomy?", page: 375 }, " explains the structured classification systems such a review works on."],
          ],
        },
        {
          heading: "Access decisions matter more, not less",
          summary: "Better-described material is easier to find, including material that is sensitive.",
          icon: "lock",
          body: [
            "Richer information makes every asset easier to locate, including unreleased work and confidential documents, so deciding who can open each area deserves more care as a library becomes more informative.",
            [{ text: "Creative security controls", page: 174 }, " help protect creative assets from unnecessary or unauthorised access."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 45 }, { kind: "pdf", page: 375 }, { kind: "pdf", page: 174 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about turning an asset library into intelligence",
      items: [
        {
          question: "Can an existing collection become more informative, or only new material?",
          answer: ["Existing collections often gain the most, because they hold the most material nobody described. As assets enter the library, ", { text: "creative asset indexing", page: 21 }, " processes their available metadata and prepares them for search and organisation."],
        },
        {
          question: "Is knowing which files are copies part of an informative library?",
          answer: ["Yes. Knowing which assets are really the same is part of knowing what a library holds. ", { text: "Duplicate detection", page: 368 }, " identifies files that are identical or visually equivalent, including some renamed or re-encoded copies."],
        },
        {
          question: "Does library intelligence replace the people who know the archive?",
          answer: "No. Once recorded, some of what they know can stay with the assets, which matters when they are busy or have moved on, but judging whether a piece of past work suits a new brief still needs someone who understands both.",
        },
        {
          question: "Can other systems make use of what the library holds about its assets?",
          answer: ["The ", { text: "asset metadata API", page: 264 }, " can expose asset information so external systems can work with metadata programmatically, and developers can integrate tagging workflows into custom applications."],
        },
      ],
      sources: [{ kind: "pdf", page: 21 }, { kind: "pdf", page: 368 }, { kind: "pdf", page: 264 }, { kind: "pdf", page: 265 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on making a library informative",
      variant: "compact",
      pages: [58, 44, 43, 50, 45, 380],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Start Your Creative Library",
      conversionPage: 391,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 391 }],
    },
  ],
};

export default page;
