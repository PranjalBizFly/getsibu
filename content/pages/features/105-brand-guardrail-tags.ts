/**
 * 105 · Brand Guardrail Tags — /features/brand-guardrail-tags
 *
 * Angle (cluster: brand-control): structured tags that identify assets meeting specific organisational requirements —
 * what a guardrail tag is for, how the taxonomy supports it, how to design a vocabulary people apply consistently, and
 * where tags stop and approval takes over. Brand Asset Approval (71) owns gates; Expiring Creative Assets (104) expiry.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how brand teams mark and maintain requirements on assets; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 105,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Versioning & Asset Management",
      lede: "How brand teams can use structured tags to mark which assets meet specific organisational requirements, how to design a guardrail vocabulary that people apply consistently, and where tags stop and approval takes over.",
      visual: { diagram: "folder-access", focus: "team" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 105 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Tags that show an asset meets the rules",
      body: [
        "With GetSibu, brand teams can use structured tags to identify the assets that comply with specific organisational requirements.",
        "Brand guidelines describe what good looks like, but a guidelines document cannot tell a colleague whether this particular image follows them. Requirements also multiply: the current logo, approved colours, legal wording for a regulated market, accessibility checks on video, clearance for use beyond one region. Without a visible marker, each requirement turns into a question for the brand team, asked again for every asset.",
        [
          "A guardrail tag is that marker. Because it belongs to a ",
          { text: "structured taxonomy", page: 8 },
          ", it can be organised as carefully as the requirements behind it. A tag records a judgement rather than making one, though, so guardrail tags work best alongside a review process that decides whether content is ready.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Structured tags for requirements", "A tag records a check", "A controlled guardrail vocabulary", "Hierarchy, synonyms and inheritance", "Paired with approval"],
      },
      highlight: {
        heading: "In practice",
        body: "A regional marketer needs imagery that meets a regulated market’s rules. Searching for that market’s guardrail tag narrows the choice to assets the brand team has already checked.",
        tags: ["Brand", "Regional marketing", "Legal review"],
      },
      glance: {
        heading: "Guardrail tags in brief",
        facts: [
          { label: "Used by", value: "Brand teams" },
          { label: "Identifies", value: "Assets meeting organisational requirements" },
          { label: "Built on", value: "Creative Asset Organisation" },
          { label: "Works with", value: "Brand Asset Approval" },
        ],
        actions: [{ kind: "route", path: "/features/asset-management", label: "More in Versioning & Asset Management" }]
      },
      sources: [{ kind: "pdf", page: 105 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 214 }, { kind: "pdf", page: 71 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "structured-tags",
      eyebrow: "In GetSibu",
      heading: "What a structured taxonomy brings to brand guardrails",
      items: [
        { heading: "Hierarchical tags", body: "Tags can be arranged in a hierarchy, so a broad guardrail such as a region can sit above the narrower requirements of each market within it.", icon: "layers", points: ["Broad rules above specific ones"] },
        { heading: "Synonyms, colours and inheritance", body: "These are part of the same taxonomy. Agreeing how the team uses them for guardrail tags keeps those tags recognisable next to descriptive ones.", icon: "palette", points: ["A convention agreed once", "Applied the same way by everyone"] },
        { heading: "Brand-specific tagging", body: "Applying brand-specific tags is part of how brand teams keep a controlled source of truth, next to organising approved assets.", icon: "tag" },
        { heading: "Organised by market", body: "Brand teams can keep approved assets organised by campaign, region or market, the axes along which many guardrails differ.", icon: "globe", page: 83 },
        { heading: "Found through search", body: "Metadata can be searched alongside tags and extracted content, so a guardrail tag becomes a route into the library.", icon: "search", points: ["Guardrails combined with other search terms"], page: 23 },
      ],
      sources: [{ kind: "pdf", page: 8 }, { kind: "pdf", page: 214 }, { kind: "pdf", page: 83 }, { kind: "pdf", page: 23 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "designing-tags",
      eyebrow: "What to consider",
      heading: "Designing guardrail tags that people apply consistently",
      items: [
        {
          heading: "Name the check, not the opinion",
          summary: "“On-brand” invites debate; “Current logo lock-up” can be verified.",
          icon: "check",
          body: [
            "Guardrail tags work when anyone can confirm them. Names such as “Current logo lock-up”, “Legal copy reviewed” or “Cleared for print” describe a check someone actually made.",
            "Names like “Good” or “Brand-approved”, without a defined meaning behind them, drift into opinions that different people apply differently.",
          ],
          points: ["Verifiable names", "A written definition for each tag"],
        },
        {
          heading: "Keep the vocabulary controlled",
          summary: "A guardrail list that anyone can extend soon stops being a guardrail.",
          icon: "lock",
          body: [
            ["Agree who looks after the guardrail list, and keep it short enough to remember. ", { text: "Creative asset governance", page: 114 }, " defines who can upload, edit, approve, download and manage assets; the same thinking applies to who maintains a vocabulary that others rely on."],
          ],
        },
        {
          heading: "Separate guardrails from descriptions",
          summary: "“Beach” and “Cleared for retail partners” are different kinds of information.",
          icon: "tag",
          body: [
            ["Descriptive tags say what an asset shows; guardrail tags say what it may be used for. ", { text: "AI-assisted tagging", page: 31 }, " can suggest tags during processing, and those suggestions can be reviewed, approved or overridden by authorised users."],
            "Keeping the two kinds apart in the taxonomy stops a suggested description from being mistaken for a check that someone carried out.",
          ],
        },
        {
          heading: "Plan for requirements that change",
          summary: "When a guideline is updated, yesterday’s tag may no longer mean what it did.",
          icon: "refresh",
          body: [
            "A logo refresh or new legal wording changes what meeting the requirement involves. Retiring the old tag, rather than quietly redefining it, keeps older assets from appearing to pass a check they never had.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 114 }, { kind: "pdf", page: 31 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A guardrail tag for a market with strict wording rules",
      team: "A global brand team",
      situation: "A brand team supports marketers across several markets. One market requires specific wording on any product imagery used in advertising, and regional colleagues keep asking which images qualify.",
      steps: [
        { heading: "Turn the requirement into a tag", body: "The brand team adds a guardrail tag for that market’s wording rule, placed under the market in the tag hierarchy." },
        { heading: "Check and tag the imagery", body: "As product images go through review, those carrying the correct wording receive the tag, and the rest are noted for revision." },
        { heading: "Let marketers find them", body: "Regional marketers search for the tag together with a product name and see imagery the brand team has already checked." },
        { heading: "Share a standing view", body: ["The brand team ", { text: "saves that search and shares its URL", page: 17 }, " with the market’s marketing team, so each brief starts from checked material."] },
        { heading: "See whether it is used", body: ["Later, ", { text: "tag analytics", page: 186 }, " show the guardrail tag among the frequently searched tags, a sign that colleagues rely on it."] },
      ],
      outcome: "Marketers in that market stop asking whether an image is usable, because the answer now travels with the asset.",
      link: { page: 224, label: "GetSibu for Global Brands" },
      sources: [{ kind: "pdf", page: 105 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 23 }, { kind: "pdf", page: 17 }, { kind: "pdf", page: 186 }, { kind: "pdf", page: 224 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about brand guardrail tags",
      items: [
        {
          question: "Do brand guardrail tags replace brand approval?",
          answer: ["No, they work alongside it. ", { text: "Brand asset approval", page: 71 }, " uses approval gates to keep approved creative assets separate from drafts and work in progress; a guardrail tag adds which particular requirement an asset has been checked against."],
        },
        {
          question: "Who should apply brand guardrail tags?",
          answer: "The people who carry out the check, such as the legal reviewer who confirms the wording or the brand manager who confirms the logo. The tag and the decision then have the same owner.",
        },
        {
          question: "How are brand guardrail tags different from expiry information?",
          answer: ["A guardrail tag marks that an asset meets a requirement, while ", { text: "expiry information", page: 104 }, " can help identify content that should no longer be used after a specified period. One records a check; the other, a limit on use."],
        },
      ],
      sources: [{ kind: "pdf", page: 71 }, { kind: "pdf", page: 104 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on brand control",
      variant: "compact",
      pages: [214, 71, 104, 103, 224],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the approved asset library." }],
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
