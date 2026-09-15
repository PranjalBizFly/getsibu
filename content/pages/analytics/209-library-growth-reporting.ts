/**
 * 209 · Library Growth Reporting — /analytics/library-growth-reporting
 *
 * Angle (clusters: storage-analytics, reporting): forward planning — anticipating the storage and operational
 * requirements that growth creates, from known changes and stated assumptions. Storage Growth Analytics (149) and
 * Creative Library Trends (187) look back; Weekly analytics (189) and Asset Usage Tracking (106) cover other ground.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of capacity and operational planning practice; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 209,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Analytics",
      lede: "Plan ahead for the library your organisation is about to have: the space it will need and the organising, reviewing and governing work that will arrive with the new material.",
      visual: { diagram: "library-activity", focus: "storage" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 209 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Planning for the library you will have next",
      body: [
        "Library growth reporting helps organisations anticipate storage and operational requirements. Its direction is forward: from what growth has already shown towards what the library will need before the need becomes urgent.",
        "Growth creates two kinds of requirement, and plans often cover only one. Storage is the visible kind, because it carries a cost. Operational requirements are easier to overlook: more material to describe and review, more people needing access, more areas to govern and more history to archive. A library with room for next year’s content but nobody to organise it will still let down the people searching it.",
        [
          "Looking forward depends on looking back first. ",
          { text: "Storage growth analytics", page: 149 },
          " provide historical context around how quickly the library is expanding, and ",
          { text: "creative library trends", page: 187 },
          " help organisations understand how the library changes over time.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Storage requirements ahead of need", "Operational requirements beside storage", "Known changes that drive growth", "Assumptions stated and revisited", "A planning horizon"],
      },
      highlight: {
        heading: "In practice",
        body: "Before a new market joins the library, an operations lead estimates the material it will bring and the tagging, review and access work that will come with it.",
        tags: ["Operations", "Expansion", "Planning"],
      },
      glance: {
        heading: "Growth reporting in brief",
        facts: [
          { label: "Area", value: "Analytics" },
          { label: "Anticipates", value: "Storage and operational requirements" },
          { label: "History", value: "Storage Growth Analytics", page: 149 },
          { label: "Direction", value: "Creative Library Trends", page: 187 },
        ],
        actions: [{ kind: "page", page: 181, label: "Creative Asset Analytics" }]
      },
      sources: [{ kind: "pdf", page: 209 }, { kind: "pdf", page: 149 }, { kind: "pdf", page: 187 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "requirements",
      eyebrow: "What to plan for",
      heading: "The requirements that growth brings with it",
      tabs: [
        {
          label: "Storage",
          heading: "Plan from the mix, not the total",
          icon: "database",
          body: [
            [
              "Storage is the requirement everyone expects, yet totals are a poor basis for a plan. A shift towards footage changes needs far faster than a rise in images or documents. Because ",
              { text: "storage can be analysed by category", page: 192 },
              ", such as video, image, document and audio, a plan can follow the kinds of work that are actually growing.",
            ],
          ],
          points: ["Category mix drives the plan", "Footage changes needs fastest"],
        },
        {
          label: "Organisation",
          heading: "Every new asset needs describing",
          icon: "tag",
          body: [
            [
              "More material means more tagging, more taxonomy decisions and more chances for the library to drift. ",
              { text: "AI library organisation", page: 57 },
              " helps teams maintain order as the library grows, rather than requiring a major manual clean-up after every campaign, and a plan should still leave time for people to check what is suggested.",
            ],
          ],
          points: ["Effort grows with inflow", "Review time for suggested tags"],
        },
        {
          label: "Review",
          heading: "More work waiting for decisions",
          icon: "approval",
          body: [
            [
              "Growth in production raises the volume of work reaching reviewers. If the number of people able to approve stays the same, material gathers in front of them. ",
              { text: "Creative workflow metrics", page: 208 },
              " help teams understand how assets move through upload, review and approval, which is where that pressure first appears.",
            ],
          ],
          points: ["Reviewer capacity planned in advance", "Pressure visible in the workflow"],
        },
        {
          label: "Access",
          heading: "New teams mean new boundaries",
          icon: "lock",
          body: [
            [
              "A new department, market or project brings folders to create and access to decide. ",
              { text: "Enterprise permissions", page: 169 },
              " let organisations apply structured access controls across departments, projects and folders, and each expansion adds to the administration of those controls.",
            ],
          ],
          points: ["Access decisions for every new area", "Administration that scales with structure"],
        },
        {
          label: "Ingestion",
          heading: "Large arrivals need their own plan",
          icon: "upload",
          body: [
            [
              "Some growth arrives all at once, through an acquisition, a partner archive or a consolidation of old drives. ",
              { text: "Bulk import", page: 291 },
              " allows organisations to move large quantities of media without manually uploading individual files, and the organising work that follows deserves a slot in the plan too.",
            ],
          ],
          points: ["One-off arrivals planned separately", "Follow-on organising scheduled"],
        },
      ],
      sources: [{ kind: "pdf", page: 192 }, { kind: "pdf", page: 57 }, { kind: "pdf", page: 208 }, { kind: "pdf", page: 169 }, { kind: "pdf", page: 291 }, EXPLAINS],
    },
    {
      kind: "timeline",
      id: "planning-cycle",
      eyebrow: "A planning cycle",
      heading: "How a growth plan is built and kept honest",
      items: [
        { label: "Look back", body: "Establish the pace and mix of growth so far, separating one-off imports from the routine output of the organisation." },
        { label: "List what is coming", body: "Gather the changes already known: teams or markets joining, migrations planned, formats shifting and major productions scheduled." },
        { label: "Estimate requirements", body: "Translate those changes into storage and into the organising, review, access and archiving effort each will bring." },
        { label: "State assumptions", body: "Write down what the estimate depends on, so that a surprise can be traced to the assumption that turned out wrong." },
        { label: "Revisit", body: "At an agreed interval, compare what happened with what was anticipated and carry the lessons into the next plan." },
      ],
      sources: [{ kind: "pdf", page: 209 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A video series and a partner archive planned before they arrive",
      team: "A media company",
      situation: "A media company is launching a regular video series and taking on a partner publication’s photo archive in the same year. The operations lead wants neither to arrive as a surprise.",
      steps: [
        { heading: "Past growth is separated", body: "Reviewing growth so far, the team distinguishes steady routine production from the step caused by an earlier archive import." },
        { heading: "The series is sized by format", body: "Because the series adds a continuing stream of footage, the storage plan is built around video rather than around the number of assets expected." },
        { heading: "The archive transfer is planned", body: ["Through ", { text: "digital asset migration planning", page: 290 }, ", assets, metadata and permissions are considered before the partner archive begins to move."] },
        { heading: "The plan meets real material", body: ["Once episodes begin arriving, ", { text: "upload analytics", page: 184 }, " show how much new content is entering the library, and the team compares that with what the plan assumed."] },
        { heading: "Access is ready for the new team", body: ["The series’ editorial lead receives ", { text: "manager permissions", page: 155 }, " for the new series folders, while staying restricted from areas outside that responsibility."] },
      ],
      outcome: "Both changes arrive with storage, migration planning and access already arranged, and the plan is tested against real material as soon as it starts to land.",
      link: { page: 232, label: "GetSibu for Media Companies" },
      sources: [{ kind: "pdf", page: 209 }, { kind: "pdf", page: 290 }, { kind: "pdf", page: 184 }, { kind: "pdf", page: 155 }, { kind: "pdf", page: 232 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about library growth reporting",
      items: [
        {
          question: "Should library growth reporting allow for archived material?",
          answer: [
            "Yes. ",
            { text: "Asset archiving", page: 108 },
            " retains historical content without letting it interfere with everyday discovery, but that content still occupies space long after the work is done, so a plan has to account for it.",
          ],
        },
        {
          question: "How does library growth reporting differ from storage analytics?",
          answer: [
            { text: "Storage analytics", page: 183 },
            " give a present-day view of the space each asset category takes up. Growth reporting draws on how the library has developed to anticipate what it will need, operational work included.",
          ],
        },
        {
          question: "Who relies on library growth reporting?",
          answer: [
            "Operations leads, library managers and budget holders in particular. For those weighing cost, ",
            { text: "enterprise asset management cost", page: 347 },
            " should be considered alongside storage, productivity, collaboration and administrative savings.",
          ],
        },
        {
          question: "Does library growth reporting matter for a small creative library?",
          answer: "Yes, though the operational side usually matters before storage does. A small team feels the effort of organising and reviewing new material well before space becomes a concern.",
        },
      ],
      sources: [{ kind: "pdf", page: 209 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 183 }, { kind: "pdf", page: 347 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on growth and capacity planning",
      variant: "compact",
      pages: [149, 187, 192, 208, 290, 232],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Scale Your Creative Library",
      conversionPage: 397,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 397 }],
    },
  ],
};

export default page;
