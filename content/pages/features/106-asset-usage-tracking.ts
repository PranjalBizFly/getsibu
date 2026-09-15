/**
 * 106 · Asset Usage Tracking — /features/asset-usage-tracking
 *
 * Angle (cluster: usage-tracking): which assets are used and which stay inactive, read as an asset-management
 * decision about each asset's next step (keep, refresh, archive, remove). Asset Usage Analytics (182) owns
 * attention and under-use across the library; this page is not an analytics dashboard.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of using asset usage in lifecycle decisions; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 106,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Versioning & Asset Management",
      lede: "How to tell the assets your team still relies on from the ones that have gone quiet, and how to turn that knowledge into a decision about each asset: keep it in front of people, refresh it, archive it or remove it.",
      visual: { diagram: "library-activity", focus: "cadence" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 106 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 109 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Using activity and inactivity to decide an asset’s next step",
      body: [
        "In GetSibu, usage analytics help teams understand which assets are being used and which remain inactive. As a practice, usage tracking treats that understanding as evidence for a decision: what should happen to an asset next.",
        "Libraries are usually organised by folder and upload date, and neither says whether anyone still needs a file. An asset can be approved, well described and perfectly current yet sit untouched for a long time, while another has been superseded and keeps getting picked up. Both situations stay invisible until someone looks at use, and both lead to poor decisions when nobody does.",
        [
          "Use is one input among several, and it answers a different question from its neighbours. An asset’s ",
          { text: "workflow status", page: 102 },
          " says whether it has been signed off and ",
          { text: "expiry information", page: 104 },
          " whether its period has passed; neither says whether anyone still reaches for it. For the same signal seen across the whole library, ",
          { text: "asset usage analytics", page: 182 },
          " look at attention and under-use.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Assets in use", "Assets that remain inactive", "Use read with status and expiry", "Active use of retired content", "Keep, refresh, archive or remove"],
      },
      glance: {
        heading: "Usage tracking in brief",
        facts: [
          { label: "Area", value: "Versioning & Asset Management" },
          { label: "Helps show", value: "Which assets are used and which remain inactive" },
          { label: "Informs", value: "Asset Lifecycle Management", page: 101 },
          { label: "Library-wide view", value: "Asset Usage Analytics", page: 182 },
        ],
        actions: [{ kind: "route", path: "/features/asset-management", label: "More in Versioning & Asset Management" }]
      },
      sources: [{ kind: "pdf", page: 106 }, { kind: "pdf", page: 102 }, { kind: "pdf", page: 104 }, { kind: "pdf", page: 182 }, { kind: "pdf", page: 101 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "use-and-state",
      eyebrow: "Reading the signal",
      heading: "What use and inactivity suggest, depending on the asset",
      intro: "The same level of use calls for a different decision depending on what the asset is and where it stands.",
      columns: ["What it usually suggests", "A sensible next step"],
      rows: [
        { label: "In use, approved and current", cells: ["The asset is doing its job", "Keep its tags, status and current version accurate"] },
        { label: "In use but superseded or past its period", cells: ["People are reaching for the wrong file", "Point them to the replacement, then retire the old asset"] },
        { label: "Inactive, approved and still valid", cells: ["Good material that people are not finding", "Keep it, and find out why it is being missed"] },
        { label: "Inactive and no longer relevant", cells: ["Content that has served its purpose", "Archive it as history, or remove it under policy"] },
        { label: "Inactive draft", cells: ["Work that never reached a decision", "Ask whoever uploaded it whether it goes to review or leaves"] },
      ],
      sources: [{ kind: "pdf", page: 106 }, { kind: "pdf", page: 102 }, { kind: "pdf", page: 104 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 109 }, { kind: "pdf", page: 115 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "New packaging photography that nobody was using",
      team: "A food brand’s design team",
      situation: "A food brand has redesigned its packaging, and new product photography was approved soon afterwards. A few weeks on, the design lead wants to know whether colleagues have actually moved over to the new images.",
      steps: [
        {
          heading: "Usage analytics raise a question",
          body: "Usage analytics suggest that the previous pack shots are still in use, while much of the new photography remains inactive.",
        },
        {
          heading: "The cause turns out to be access",
          body: ["The new photography went into a newly created folder, and ", { text: "new folders can remain private", page: 154 }, " until access is explicitly granted. Nobody had granted it to the marketing or retail teams, so the old shots were all they could reach."],
        },
        {
          heading: "The right teams are given access",
          body: ["The design lead arranges access to the folder for the teams that use product imagery and sends them a ", { text: "saved search", page: 17 }, " for the new range."],
        },
        {
          heading: "The old shots are moved aside",
          body: ["Expiry information goes on the old pack shots, and they are ", { text: "archived", page: 108 }, " so they no longer compete with the new photography in everyday discovery."],
        },
        {
          heading: "Use is checked again",
          body: "When the design lead looks at usage analytics again, the new photography is the material in use, which is the pattern the team set out to reach.",
        },
      ],
      outcome: "Marketing and retail material moves to the current packaging, and the old photography is kept as history instead of being deleted or left in circulation.",
      link: { page: 231, label: "GetSibu for Retail Brands" },
      sources: [{ kind: "pdf", page: 106 }, { kind: "pdf", page: 154 }, { kind: "pdf", page: 17 }, { kind: "pdf", page: 104 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 231 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "accordion",
      id: "before-acting",
      eyebrow: "Judgement calls",
      heading: "What to weigh before acting on an inactive asset",
      items: [
        {
          heading: "Seasonal and cyclical content",
          summary: "Some material is quiet for most of the year by design.",
          icon: "calendar",
          body: [
            "Festive campaigns, annual event photography and trade-show material are needed at the same point in each cycle and ignored in between. Judging them on recent use alone would retire exactly the assets a team will want back.",
            "Tagging such content by season or event makes its quiet spells easy to recognise when someone reviews the library.",
          ],
          points: ["Expect gaps between cycles", "Mark the season or event"],
        },
        {
          heading: "Reference and record material",
          summary: "Some assets exist to be consulted occasionally, not used often.",
          icon: "archive",
          body: [
            ["Earlier editions of brand guidelines, signed-off campaign masters and record copies may be opened only when a question comes up. Low use is expected, and for material like this ", { text: "asset archiving", page: 108 }, " is usually a better fit than removal."],
          ],
        },
        {
          heading: "Assets that belong to a set",
          summary: "An unused alternative is often inactive because its sibling was chosen.",
          icon: "collection",
          body: [
            "A shoot produces several takes of each set-up, and a campaign picks one. The others look idle, yet they are the natural first stop when the chosen image needs replacing or a new format calls for a different crop.",
            "Judge alternatives at the level of the set rather than one by one, and keep or retire them together.",
          ],
          points: ["Decide for the whole set", "Alternatives as a reserve for later needs"],
        },
        {
          heading: "Who makes the call",
          summary: "Usage points to a decision, but somebody still has to own it.",
          icon: "user",
          body: [
            ["Archiving or removing content is a decision for the people accountable for that part of the library, not for whoever happens to notice a quiet file. Where removal is right, ", { text: "asset deletion", page: 109 }, " is carried out by authorised users according to organisational policies and permissions."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 108 }, { kind: "pdf", page: 109 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about asset usage tracking",
      items: [
        {
          question: "When is a good moment to act on asset usage tracking?",
          answer: "When what people ought to be using changes: after a campaign ends, when a product or identity is replaced, and before part of the library is reorganised. Those are the points at which idle assets and wrongly busy ones tend to build up.",
        },
        {
          question: "Should signs of use shape what a team carries into a new library?",
          answer: ["Where the current system gives any indication of use, yes: material people still rely on deserves the most care in the move, and long-idle folders deserve a question before they are copied across unexamined. A ", { text: "DAM migration strategy", page: 289 }, " begins with understanding existing storage, metadata, permissions and organisational requirements, and use belongs in that picture."],
        },
        {
          question: "How does asset usage tracking relate to asset lifecycle management?",
          answer: ["Whether an asset is still used is one of the clearest signs of where it stands in its life. ", { text: "Asset lifecycle management", page: 101 }, " covers the span from initial upload to eventual deletion, and usage helps decide when an asset is ready to move on."],
        },
        {
          question: "Does heavy use mean an asset is good?",
          answer: ["Not on its own. An asset can be busy because it is excellent or simply because it is the easiest thing to find. Quality is better judged on the work itself: teams can use ", { text: "approval and metadata workflows", page: 113 }, " to maintain a higher-quality library, whatever the popularity of individual files."],
        },
      ],
      sources: [{ kind: "pdf", page: 106 }, { kind: "pdf", page: 289 }, { kind: "pdf", page: 101 }, { kind: "pdf", page: 113 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on deciding what happens to an asset",
      variant: "compact",
      pages: [182, 101, 102, 104, 108, 109],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
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
