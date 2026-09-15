/**
 * 200 · Marketing Asset Analytics — /analytics/marketing-asset-analytics
 *
 * Angle (cluster: team-analytics): campaign content usage and library activity across the life of a campaign —
 * campaign versus evergreen material, variants, and the difference between library use and results in market.
 * GetSibu for Marketing Teams (213) owns the team's library; Creative Team Analytics (199) owns groups in general.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of campaign marketing practice; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 200,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Analytics",
      lede: "See how campaign content is used and how library activity moves around a launch, so your marketing team knows which material to carry forward, which to retire and what to brief next.",
      visual: { diagram: "library-activity", focus: "tags" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 200 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Following campaign content from brief to afterlife",
      body: [
        "Marketing teams can use asset analytics in GetSibu to understand campaign content usage and library activity. The two belong together: usage describes what became of the material a campaign produced, while activity describes how the team worked to produce it.",
        "Every campaign makes far more than any one channel shows. Hero visuals, cutdowns, social variants, sales decks and regional adaptations are created against a deadline and left behind when attention turns to the next launch. Without a view of how that content was used, each campaign is remembered selectively, and its strongest pieces are as likely to be forgotten as its weakest.",
        [
          "Analytics sit alongside the other ways marketers work in a library. ",
          { text: "Marketing collaboration", page: 82 },
          " draws on centralised campaign libraries, approvals and usage analytics together, and ",
          { text: "campaign review", page: 70 },
          " uses asset-level discussion and approval to check materials before distribution.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Campaign content usage", "Library activity around a launch", "Campaign material compared with evergreen", "Material carried into the next brief", "Retiring content when a campaign closes"],
      },
      highlight: {
        heading: "In practice",
        body: "Shortly after a launch, a campaign manager checks which adapted assets colleagues are really using before commissioning more variants of the same kind.",
        tags: ["Campaign managers", "Variants", "Launches"],
      },
      glance: {
        heading: "Marketing analytics in brief",
        facts: [
          { label: "Area", value: "Analytics" },
          { label: "Shows", value: "Campaign content usage and library activity" },
          { label: "The team’s library", value: "GetSibu for Marketing Teams", page: 213 },
          { label: "Before distribution", value: "Campaign Review", page: 70 },
        ],
        actions: [{ kind: "page", page: 181, label: "Creative Asset Analytics" }]
      },
      sources: [{ kind: "pdf", page: 200 }, { kind: "pdf", page: 82 }, { kind: "pdf", page: 70 }, { kind: "pdf", page: 213 }, EXPLAINS],
    },
    {
      kind: "timeline",
      id: "campaign-stages",
      eyebrow: "Campaign stages",
      heading: "What analytics can tell marketers as a campaign unfolds",
      items: [
        { label: "Planning", body: "Library activity is modest while briefs, references and brand material are gathered, which is expected at this stage rather than a sign that the campaign has stalled." },
        { label: "Production", body: "Library activity rises as photography, edits and design files arrive and are discussed, usually the stretch of a campaign in which new material and comments accumulate fastest." },
        { label: "Review", body: "Activity tends to gather on the assets heading for distribution, which can help confirm that discussion and sign-off happened where the material lives." },
        { label: "Launch", body: "Usage can show which finished pieces receive attention from colleagues and which variants remain underused." },
        { label: "Afterwards", body: "Usage helps a team tell material worth keeping in circulation from content that has done its job." },
      ],
      sources: [{ kind: "pdf", page: 200 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A campaign that made more variants than anyone used",
      team: "A B2B marketing team",
      situation: "A B2B marketing team produces a full set of social variants, banners and regional adaptations for every seasonal campaign. The head of marketing wants to know whether that effort is being used.",
      steps: [
        { heading: "Campaign usage is reviewed", body: "Asset analytics show the core visuals and the longer film in heavy use, while most pre-made social variants remain underused in the library." },
        { heading: "Regional marketers explain", body: "Asked about the variants, regional colleagues say they prefer adapting the core visuals for local audiences to using variants written for another market, so the ready-made versions were never a fit." },
        { heading: "Time-limited variants get an end date", body: ["Variants tied to the campaign’s offer receive ", { text: "expiry information", page: 104 }, ", which helps identify the content that should no longer be used once the offer ends."] },
        { heading: "Finished material is archived", body: ["When the campaign closes, its unused variants are ", { text: "archived", page: 108 }, ", retained as historical content rather than left among the material for the next campaign."] },
        { heading: "The next brief changes shape", body: "The team commissions fewer ready-made variants and more adaptable core visuals, the material regional colleagues had been relying on all along." },
      ],
      outcome: "The following campaign produces less unused material and more of what regional marketers actually work from, a decision grounded in how the previous content was used.",
      link: { page: 213, label: "GetSibu for Marketing Teams" },
      sources: [{ kind: "pdf", page: 200 }, { kind: "pdf", page: 104 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 213 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "tabs",
      id: "expectations",
      eyebrow: "Reading it well",
      heading: "Setting the right expectations for marketing analytics",
      tabs: [
        {
          label: "Working material",
          heading: "Briefs and references follow their own pattern",
          icon: "document",
          body: [
            "Mood boards, reference images, briefs and rough concepts are consulted constantly while a campaign is being made and hardly at all once it launches. That fall-off is the material doing its job, not a sign it failed.",
            "Keep working material distinguishable from finished content, with a tag or a folder of its own, so its natural fade does not make the whole campaign look neglected when usage is read.",
          ],
          points: ["Busy during production", "Quiet afterwards by design"],
        },
        {
          label: "Campaign or evergreen",
          heading: "Judge each kind of content against its purpose",
          icon: "calendar",
          body: [
            "Campaign content is meant to be intense and short-lived; evergreen material such as product photography and brand films is meant to be drawn on steadily for a long time. Fading use means opposite things for each.",
            "Label which is which early, so a campaign visual quietly retiring is not mistaken for a problem and an evergreen asset falling out of use is not overlooked.",
          ],
          points: ["Short-lived use can be success", "Evergreen assets should stay in use"],
        },
        {
          label: "Variant families",
          heading: "Read related versions of an idea together",
          icon: "layers",
          body: [
            "One concept may exist as a hero image, several crops and a handful of adaptations. Usage spreads across that family, so each member can look underused even when the idea itself was in heavy demand.",
            "Consider the family as a whole before judging any single piece, then ask which versions within it colleagues preferred.",
          ],
          points: ["Demand for the idea, not one file", "Versions colleagues preferred"],
        },
        {
          label: "Regional use",
          heading: "Markets reuse central material in their own way",
          icon: "globe",
          body: [
            "Where campaigns roll out across markets, regional teams often adapt central material rather than use it as delivered, so modest use of a central asset may reflect adaptation rather than rejection. Asking the markets how they work is the quickest way to tell the two apart.",
            [
              "Where content is organised by market, ",
              { text: "multi-market teams", page: 225 },
              " can separate it by region while maintaining centralised governance.",
            ],
          ],
          points: ["Adaptation can look like low use", "Regional content under central governance"],
        },
      ],
      sources: [{ kind: "pdf", page: 200 }, { kind: "pdf", page: 225 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about marketing asset analytics",
      items: [
        {
          question: "How should marketing asset analytics feed back to the people who made the content?",
          answer: "Share what colleagues relied on with the photographers, designers and editors behind it. Knowing which pieces were put to work and which were passed over helps them plan the next shoot or design round around real demand.",
        },
        {
          question: "What should a marketing team conclude when launch material goes unused?",
          answer: [
            "Find out whether it was never needed or simply never found. The first calls for a different brief next time; the second is a question of description and awareness, which ",
            { text: "asset usage analytics", page: 182 },
            " can help a team investigate.",
          ],
        },
        {
          question: "How do marketing asset analytics differ from creative team analytics?",
          answer: [
            { text: "Creative team analytics", page: 199 },
            " consider how different groups interact with the library in general. Marketing asset analytics apply that lens to campaign content and the activity around it.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 200 }, { kind: "pdf", page: 182 }, { kind: "pdf", page: 199 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on campaign content and marketing libraries",
      variant: "compact",
      pages: [213, 70, 82, 182, 104, 199],
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
