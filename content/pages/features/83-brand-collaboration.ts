/**
 * 83 · Brand Collaboration — /features/brand-collaboration
 *
 * Angle (clusters: team-collaboration, brand-control): brand teams maintaining approved assets and organising them by
 * campaign, region or market — the working relationship between a central brand team and the regional and market teams
 * who use and adapt its assets. GetSibu for Brand Teams (214) owns the brand team's own controls; Brand Asset Approval
 * (71) owns the approval gate.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how central and local brand teams collaborate; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 83,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Collaboration",
      lede: "How a central brand team and the regional and market teams who adapt its work can share one set of approved assets, arranged by campaign, region or market, without losing consistency along the way.",
      visual: { diagram: "timeline-review", focus: "comments" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 83 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A consistent brand, kept by everyone who uses it",
      body: [
        "Brand teams can maintain approved assets in GetSibu and organise them by campaign, region or market. How that material is arranged decides how each group representing the brand reaches its part of it.",
        "Brand collaboration is a relationship between a central team and many local ones. The centre owns the identity and the core assets; regional and market teams adapt them to languages, products and customs the centre may know little about. The friction is familiar: markets feel the centre is slow to supply what they need, the centre discovers local variations it never saw, and both sides keep private copies to protect themselves.",
        [
          { text: "Multi-market teams", page: 225 },
          " can separate content by region while maintaining centralised governance, and ",
          { text: "global brands", page: 224 },
          " can organise assets across markets with appropriate folder permissions and approval workflows. Both describe the balance brand collaboration has to strike between local relevance and central control.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Approved assets maintained centrally", "Organised by campaign, region or market", "Local teams reach their own part", "Adaptations reviewed before use", "Central governance, local relevance"],
      },
      highlight: {
        heading: "In practice",
        body: "A market manager goes straight to the approved assets arranged for their market, while the central brand team keeps maintaining the core logo files that every market starts from.",
        tags: ["Market managers", "Central brand team", "Regional designers"],
      },
      glance: {
        heading: "Brand collaboration in brief",
        facts: [
          { label: "Area", value: "Collaboration" },
          { label: "Organised by", value: "Campaign, region or market" },
          { label: "Use case", value: "GetSibu for Brand Teams", page: 214 },
          { label: "Approved material", value: "Approved Asset Library", page: 103 },
        ],
        actions: [{ kind: "route", path: "/features/collaboration", label: "More in Collaboration" }]
      },
      sources: [{ kind: "pdf", page: 83 }, { kind: "pdf", page: 225 }, { kind: "pdf", page: 224 }, { kind: "pdf", page: 214 }, { kind: "pdf", page: 103 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "organising",
      eyebrow: "Ways to organise",
      heading: "Choosing how approved brand assets are arranged",
      tabs: [
        {
          label: "By campaign",
          heading: "When the brand speaks through launches",
          icon: "megaphone",
          body: [
            "Arranging by campaign suits brands whose visible identity shifts with each launch: seasonal ranges, product campaigns, sponsorships. Everyone working on a launch finds its approved assets together, and a campaign’s material stays recognisable as a set long after the launch.",
            "The weak point is material that outlives a campaign. Logos, product photography and templates belong in a permanent home rather than inside whichever campaign happened to produce them first.",
          ],
          points: ["Launch material kept together", "Core assets housed outside campaigns"],
        },
        {
          label: "By region",
          heading: "When teams and budgets follow geography",
          icon: "globe",
          body: [
            ["A regional arrangement suits organisations whose teams, budgets and sign-off follow geography. ", { text: "Folder-level permissions", page: 152 }, " can then mirror that structure, controlling access at a more detailed level than organisation-wide access."],
            "Regions usually contain markets with different needs, so a regional area often needs market divisions inside it before local teams find it useful.",
          ],
          points: ["Structure matched to how teams work", "Access controlled region by region"],
        },
        {
          label: "By market",
          heading: "When each market adapts the brand heavily",
          icon: "store",
          body: [
            "Arranging by market suits brands that localise a great deal: different languages, product ranges, regulations or retail partners. Each market’s adapted assets sit apart from the core set, which makes it plain which version belongs where.",
            "The risk is fragmentation, with markets producing near-identical adaptations independently. A shared home for core assets that every market starts from keeps local versions tied to the same originals.",
          ],
          points: ["Local versions clearly separated", "Core originals shared by every market"],
        },
        {
          label: "Combined",
          heading: "When one arrangement is not enough",
          icon: "layers",
          body: [
            [
              "A brand may need more than one of these at once, such as regions first with campaigns inside. ",
              { text: "Hierarchical tags", page: 8 },
              " can carry the second dimension, so an asset kept under its region can also be labelled with the campaign it serves.",
            ],
          ],
          points: ["Folders for the main structure", "Tags for the second dimension"],
        },
      ],
      sources: [{ kind: "pdf", page: 83 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 8 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "adaptation",
      eyebrow: "Step by step",
      heading: "How a market adaptation joins the approved brand set",
      intro: "Local variations are where brand consistency is most often won or lost.",
      steps: [
        { heading: "Start from the approved original", body: "The market team takes the core asset from the central brand team’s approved material, not from an old copy kept locally.", icon: "check" },
        { heading: "Adapt and add it", body: "A local designer produces the adaptation, with translated copy or a regional product, and adds it to the market’s area of the library.", icon: "upload" },
        { heading: "Ask the centre early", body: "Questions about what may change are raised as comments on the adaptation, with the brand manager who can answer brought into the discussion.", icon: "mention" },
        { heading: "Pass the approval gate", body: "The adaptation stays apart from approved assets while brand and local reviewers request changes, and joins them once it is approved.", icon: "approval", page: 71 },
        { heading: "File it where people look", body: "The approved adaptation is organised under its market and labelled with its campaign, so local and central teams can both find it.", icon: "folder" },
        { heading: "See whether it is reused", body: "Brand asset analytics help the team understand which approved assets are being accessed and reused, adaptations among them.", icon: "chart", page: 203 },
      ],
      sources: [{ kind: "pdf", page: 83 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 86 }, { kind: "pdf", page: 71 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 203 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "agreements",
      eyebrow: "Before you start",
      heading: "What central and local brand teams need to agree",
      items: [
        {
          heading: "What markets may change",
          summary: "Without a clear boundary, every adaptation turns into a negotiation.",
          icon: "flag",
          body: [
            "Most brands have fixed elements, such as logo, colour and typography, and adaptable ones, such as language, imagery of local products and calls to action. Writing the two lists down before markets start adapting saves both sides a great deal of back-and-forth.",
            ["The decision can also live on the assets themselves: ", { text: "brand guardrail tags", page: 105 }, " use structured tags to identify assets that comply with specific organisational requirements, such as those cleared for local adaptation."],
          ],
        },
        {
          heading: "Which adaptations the centre reviews",
          summary: "Local sign-off is faster and central sign-off more consistent, so many brands divide the work between them.",
          icon: "users",
          body: [
            "A common split is for markets to approve adaptations that touch only adaptable elements, and for the centre to review anything that touches the fixed ones.",
            ["Access is a separate matter. ", { text: "Manager permissions", page: 155 }, " give a market lead access to specific folders or teams while keeping them out of areas beyond their responsibilities."],
          ],
        },
        {
          heading: "How changes to core assets reach the markets",
          summary: "When the central identity changes, adaptations built on the old version need finding.",
          icon: "refresh",
          body: [
            "A refreshed logo or updated product shot makes every local adaptation of it out of date. Labelling adaptations with the campaign or core asset they came from makes them possible to find again when the original changes, so the centre can tell the right markets rather than every market.",
          ],
        },
        {
          heading: "Where local knowledge is written down",
          summary: "Markets know things about their audiences that the centre does not.",
          icon: "message",
          body: [
            ["A local restriction on an image, or the reason a phrase was changed for one country, is worth recording as a comment on the asset. Over time, the ", { text: "discussion history", page: 75 }, " lets a team understand how that feedback evolved, which can help the next designer avoid a mistake another market has already caught."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 105 }, { kind: "pdf", page: 155 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 75 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about brand collaboration",
      items: [
        {
          question: "What should a brand team do with an adaptation a market made on its own?",
          answer: [
            "Bring it into the open rather than ignoring it. Adding it to the market’s area of the library and taking it through the ",
            { text: "creative approval workflow", page: 67 },
            " lets the centre see it and ask for changes on the adaptation itself, while the market keeps the work it has already done.",
          ],
        },
        {
          question: "Who should look after the core assets every market starts from?",
          answer: [
            "The central brand team, ideally with a named person for each core set. ",
            { text: "Asset ownership", page: 115 },
            " provides context about who created or uploaded content, which gives a market a starting point when it has a question about an original.",
          ],
        },
        {
          question: "How is brand collaboration different from brand asset approval?",
          answer: "Brand asset approval is the gate that separates approved assets from drafts. Brand collaboration is the wider working relationship around those assets: how they are arranged by campaign, region or market, and how central and local teams share them.",
        },
      ],
      sources: [{ kind: "pdf", page: 67 }, { kind: "pdf", page: 115 }, { kind: "pdf", page: 71 }, { kind: "pdf", page: 83 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on sharing an approved brand",
      variant: "compact",
      pages: [214, 71, 103, 224, 225, 105],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
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
