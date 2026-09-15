/**
 * 71 · Brand Asset Approval — /features/brand-asset-approval
 *
 * Angle (clusters: approvals, brand-control): approval gates that keep approved brand assets separate from drafts
 * and work in progress — why the separation matters, what it means for each group, and the controls around it.
 * Creative Approval Workflow (67) owns the loop, Asset Approval (68) statuses with history, Approved Asset Library
 * (103) approved-only views, Brand Collaboration (83) organisation by campaign, region or market.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how brand teams control approved material; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 71,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Collaboration",
      lede: "Why a convincing draft is a brand team’s real risk, how an approval gate keeps finished brand material apart from work in progress, and which controls work alongside the gate.",
      visual: { diagram: "version-record", focus: "lifecycle" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 71 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A gate between work in progress and approved brand assets",
      body: [
        "Brand teams can use approval gates in GetSibu to ensure that approved creative assets are separated from drafts and work-in-progress materials. An asset crosses the gate by being approved; until then it belongs on the working side.",
        "The risk a brand team worries about is rarely a poor draft. It is a convincing draft used as if it were final: a logo lockup from an early exploration in a partner presentation, an unapproved product shot on a regional website, last year’s palette in a new brochure. When drafts and finished assets sit side by side under similar names, anyone in a hurry can take the wrong one.",
        [
          "The gate itself is an approval. Work goes through the ",
          { text: "creative approval workflow", page: 67 },
          ", and only once an asset has been marked as approved does it join the material the rest of the organisation relies on.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Approval as a gate", "Approved assets apart from drafts", "Work in progress on the working side", "A trusted place for finished material", "A controlled source of truth"],
      },
      highlight: {
        heading: "In practice",
        body: "A regional marketer working from an approved-only view finds the confirmed logo files, not the exploratory sketches the design team is still refining.",
        tags: ["Brand managers", "Regional marketers", "Designers"],
      },
      glance: {
        heading: "Brand approval gates in brief",
        facts: [
          { label: "Area", value: "Collaboration" },
          { label: "Separates", value: "Approved assets from drafts and work in progress" },
          { label: "Crossed by", value: "Approval" },
          { label: "Use case", value: "GetSibu for Brand Teams", page: 214 },
        ],
        actions: [{ kind: "route", path: "/features/collaboration", label: "More in Collaboration" }]
      },
      sources: [{ kind: "pdf", page: 71 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 214 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "gate-or-no-gate",
      eyebrow: "The difference",
      heading: "Brand libraries with and without an approval gate",
      columns: ["No approval gate", "Approval gates in GetSibu"],
      emphasis: 1,
      rows: [
        ["Where drafts sit", "Beside finished files with similar names", "On the working side until approved"],
        ["What a colleague picks up", "Whichever version turns up first", "Material that has passed approval"],
        ["Telling drafts from finals", "Filenames and folder conventions", "Asset statuses that distinguish them"],
        ["When an error is spotted", "Corrected after it has been used", "Can be caught before approval"],
        ["Updating a finished asset", "A new file alongside the old one", "A new version within the same asset record"],
      ],
      sources: [{ kind: "pdf", page: 71 }, { kind: "pdf", page: 102 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 93 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "around-the-gate",
      eyebrow: "What supports it",
      heading: "Controls that work alongside the approval gate",
      items: [
        {
          heading: "Approved-only views",
          body: "Teams can create views limited to content that has completed the required review, giving colleagues a clean place to find finished brand assets.",
          icon: "check",
          points: ["A dedicated place for finished material", "Drafts kept out of that view"],
          page: 103,
        },
        {
          heading: "Brand guardrail tags",
          body: "Structured tags can identify assets that comply with specific organisational requirements, for example material cleared for a particular channel.",
          icon: "tag",
          points: ["Requirements recorded on the asset", "Found through search like other tags"],
          page: 105,
        },
        {
          heading: "Expiry information",
          body: "Expiry details can help identify content that should no longer be used after a specified period, such as imagery licensed for a limited time.",
          icon: "clock",
          points: ["Approved is not approved forever", "Time-limited material identified"],
          page: 104,
        },
        {
          heading: "Folder-level permissions",
          body: "Access can be controlled more finely than organisation-wide, which lets a brand team limit work-in-progress folders to the people producing it.",
          icon: "lock",
          points: ["Working folders kept private", "New folders private until access is granted"],
          page: 152,
        },
        {
          heading: "Organisation by campaign, region or market",
          body: "Approved assets can be maintained and organised by campaign, region or market, so each team can go straight to its part of the brand.",
          icon: "map",
          points: ["One brand, many markets", "A structure regional teams recognise"],
          page: 83,
        },
        {
          heading: "Analytics on approved assets",
          body: "Brand asset analytics help teams understand which approved assets are being accessed and reused, which can inform what to refresh and what to retire.",
          icon: "chart",
          points: ["Evidence of what people use", "A basis for refreshing the approved set"],
          page: 203,
        },
      ],
      sources: [{ kind: "pdf", page: 103 }, { kind: "pdf", page: 105 }, { kind: "pdf", page: 23 }, { kind: "pdf", page: 104 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 154 }, { kind: "pdf", page: 83 }, { kind: "pdf", page: 203 }],
    },
    {
      kind: "tabs",
      id: "who-it-helps",
      eyebrow: "Who it helps",
      heading: "What the approval gate means for each group",
      tabs: [
        {
          label: "Brand team",
          heading: "Decide what counts as approved",
          icon: "shield",
          body: [
            "For the brand team, the gate is where standards are applied. Agreeing in advance what an asset must meet before approval, such as the current logo, correct colours and approved wording, turns the gate into a consistent check rather than a matter of taste.",
            "It also gives the team one moment to stop inconsistent material, instead of chasing it once it has spread.",
          ],
          points: ["Standards applied at a single point", "Fewer corrections after publication"],
        },
        {
          label: "Designers",
          heading: "Explore freely without risk",
          icon: "palette",
          body: [
            "Designers need room for rough explorations, alternatives and unfinished ideas. With a gate in place, that material can live in the library with less risk of anyone mistaking it for final.",
            "When a piece is ready it goes through approval, rather than being quietly renamed or copied into a folder called “final”.",
          ],
          points: ["Space to explore on the working side", "No copying into final folders"],
        },
        {
          label: "Colleagues",
          heading: "Use brand material with confidence",
          icon: "users",
          body: [
            "Sales, communications and regional teams usually want one thing: the right version, without delay. A clearly approved side of the library lets them take material without checking with the brand team every time.",
            ["For PR teams, ", { text: "locating approved images and brand resources", page: 235 }, " is a daily task, and the same holds for anyone assembling presentations or partner materials."],
          ],
          points: ["The right version without asking", "Less pressure on the brand team’s inbox"],
        },
      ],
      sources: [{ kind: "pdf", page: 71 }, { kind: "pdf", page: 235 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about brand asset approval",
      items: [
        {
          question: "What should a brand team decide before introducing approval gates?",
          answer: ["Which kinds of asset need to pass a gate at all, and which can circulate without one, such as internal working references. ", { text: "Creative governance", page: 371 }, " covers the wider rules around ownership, permissions, approvals, retention and usage."],
        },
        {
          question: "How is brand asset approval different from campaign review?",
          answer: [{ text: "Campaign review", page: 70 }, " checks a set of campaign materials before distribution. Brand asset approval keeps a lasting separation between approved brand assets and everything that is still in progress."],
        },
        {
          question: "Can an approved brand asset later become unsuitable to use?",
          answer: "Yes. Licences end, products are discontinued and brand guidelines change, so approval can outlive an asset’s suitability. A periodic check of approved material keeps that side of the library trustworthy.",
        },
      ],
      sources: [{ kind: "pdf", page: 371 }, { kind: "pdf", page: 70 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on controlling approved brand material",
      variant: "compact",
      pages: [103, 67, 214, 83, 105, 68],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the closest brand-control topics." }],
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
