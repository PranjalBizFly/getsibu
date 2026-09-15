/**
 * 314 · Global Asset Access — /architecture/global-asset-access
 *
 * Angle (cluster: previews-delivery): teams across geographical regions — the organisational side of reaching one
 * library from many markets: replacing regional copies, organising and granting access by market, and working
 * across time zones, with CDN-based delivery as the part that shortens distance. CDN Asset Delivery (304) owns how
 * delivery networks work; Cloud-Based Asset Management (303) owns access through clients and integrations. No
 * regions, locations, data residency or latency figures.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how distributed organisations share creative material; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 314,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Architecture & Performance",
      lede: "See what it takes for teams in different countries to work from one GetSibu library instead of regional copies: delivery that copes with distance, material organised by market, and access that fits each region.",
      visual: { diagram: "architecture-stack", focus: "edge" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 314 }, { kind: "pdf", page: 224 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "One library for teams that never share an office",
      body: [
        "CDN-based delivery can support GetSibu teams working across different geographical regions. For an organisation spread over several markets, delivery is one half of a broader aim: a single library that serves colleagues everywhere, not only those who happen to sit near where content is kept.",
        "Distributed organisations have traditionally dealt with distance by copying. Regional offices keep local drives of brand material, markets download campaign packs and file them away, and each subsidiary builds up a set of its own. Every copy is a snapshot that starts ageing the day it is made, so a refreshed logo can take months to displace the old one everywhere, and nobody can say with confidence which version each market is using.",
        [
          "Reaching content quickly from far away is the delivery question, examined under ",
          { text: "CDN asset delivery", page: 304 },
          ". The other half is organisation: ",
          { text: "global brands", page: 224 },
          " can organise assets across markets while maintaining appropriate folder permissions and approval workflows, so each region reaches the material meant for it.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["One library instead of regional copies", "Delivery that copes with distance", "Material organised by market", "Access shaped by region", "Work handed across time zones"],
      },
      highlight: {
        heading: "In practice",
        body: "When a brand refreshes its visual identity, the useful result is each market opening the new files from the shared library, not a round of emails asking regional offices to replace what they saved locally.",
        tags: ["Global brands", "Regional offices", "Brand assets"],
      },
      glance: {
        heading: "Global access in brief",
        facts: [
          { label: "Area", value: "Architecture & Performance" },
          { label: "Delivery", value: "CDN-based, for teams across regions" },
          { label: "Organised by", value: "Campaign, region or market" },
          { label: "Across markets", value: "GetSibu for Multi-Market Teams", page: 225 },
        ],
        actions: [{ kind: "route", path: "/architecture", label: "More in Architecture & Performance" }]
      },
      sources: [{ kind: "pdf", page: 314 }, { kind: "pdf", page: 304 }, { kind: "pdf", page: 224 }, { kind: "pdf", page: 83 }, { kind: "pdf", page: 225 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "copies-or-library",
      eyebrow: "Two ways to share across borders",
      heading: "Regional copies compared with one shared library",
      columns: ["Copies kept in each region", "One GetSibu library for every region"],
      emphasis: 1,
      rows: [
        ["Where a market looks for brand material", "A local drive or a downloaded pack", "One central library shared with other markets"],
        ["When a central asset is updated", "Every saved copy has to be replaced by hand", "Replaced in place, with earlier versions kept"],
        ["Knowing what is cleared for use", "Whatever arrived in the last pack", "Approved-only views of reviewed content"],
        ["Working with colleagues abroad", "Files emailed out and back overnight", "Comments, mentions and approvals on the same assets"],
        ["Handing over a recurring selection", "A new folder of copies for each office", "A saved view shared through a URL"],
      ],
      sources: [{ kind: "pdf", page: 6 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 88 }, { kind: "pdf", page: 79 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "positions",
      eyebrow: "Seen from different places",
      heading: "What global access asks of each part of the organisation",
      tabs: [
        {
          label: "Central brand",
          heading: "Keeping every market on current material",
          icon: "shield",
          body: [
            "A central brand team’s worry is drift: markets carrying on with superseded logos, outdated product shots or campaign assets past their intended use. With copies, the team can only issue reminders; with one library, it can change the source.",
            ["Understanding what markets actually use matters as much as publishing. ", { text: "Brand asset analytics", page: 203 }, " help brand teams see which approved assets are being accessed and reused."],
          ],
          points: ["Drift replaced by one source", "Reuse of approved assets made visible"],
        },
        {
          label: "Local markets",
          heading: "Adapting centrally made work for local use",
          icon: "globe",
          body: [
            "Market teams rarely use central assets untouched. They adapt copy lines, swap products for local ranges and add their own photography, and that local material needs a home that sits beside the master assets without being confused with them.",
            ["Multi-market teams can ", { text: "separate content by region", page: 225 }, " while governance remains central, which lets a market keep its adaptations organised without starting a parallel library of its own."],
          ],
          points: ["Local adaptations kept beside masters", "Regional separation, central governance"],
        },
        {
          label: "Dispersed teams",
          heading: "Review that passes between time zones",
          icon: "clock",
          body: [
            "When a designer finishes work just as a reviewer on another continent starts the day, feedback naturally becomes asynchronous. The work has to carry its own context, because the person who made it will not be awake to explain it.",
            ["That is where keeping review on the asset pays off. ", { text: "Collaborative asset review", page: 87 }, " helps distributed teams review creative material without anyone needing to be in the same physical location."],
          ],
          points: ["Feedback that does not need a meeting", "Context kept with the work"],
        },
        {
          label: "IT",
          heading: "Opening new markets without exposing content",
          icon: "lock",
          body: [
            "Each new office, subsidiary or market adds people and areas to a shared library. The risk in a hurried expansion is granting broad access to get a team working and never narrowing it again.",
            ["A ", { text: "default-deny model", page: 154 }, " helps here: new folders can remain private until access is explicitly granted, so an area created for a new market is not automatically visible to everyone else."],
          ],
          points: ["New areas private until granted", "Expansion without broad access"],
        },
      ],
      sources: [{ kind: "pdf", page: 203 }, { kind: "pdf", page: 225 }, { kind: "pdf", page: 87 }, { kind: "pdf", page: 154 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A campaign launched in several markets from one library",
      team: "A consumer goods brand",
      situation: "A consumer goods brand is launching a campaign across several countries. The central team produces the master film and key visuals; each market adapts them for local channels.",
      steps: [
        {
          heading: "Masters organised for every market",
          body: ["The central team ", { text: "organises the campaign’s approved assets", page: 83 }, " by campaign and market, so each country has an obvious place to start."],
        },
        {
          heading: "Drafts kept apart from finished work",
          body: ["Approval gates keep ", { text: "approved creative separate from drafts", page: 71 }, " and work in progress, so markets do not pick up an early cut by mistake."],
        },
        {
          heading: "Each market sees its own area",
          body: ["With ", { text: "folder-level permissions", page: 152 }, ", market teams are given access to the areas relevant to them rather than to the whole organisation’s library."],
        },
        {
          heading: "The film is checked far from head office",
          body: ["Teams in distant markets watch the master film through a ", { text: "streaming preview", page: 147 }, " rather than waiting for a full download before they can judge it."],
        },
        {
          heading: "Adaptations come back for comment",
          body: ["Markets add their adapted versions, and the central team leaves feedback as asset comments, then records each decision through the approval process."],
        },
      ],
      outcome: "Every market launches from the same campaign library, local adaptations sit beside the masters they came from, and the central team follows approvals in one place instead of gathering confirmations by email.",
      link: { page: 224, label: "GetSibu for Global Brands" },
      sources: [{ kind: "pdf", page: 83 }, { kind: "pdf", page: 71 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 147 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 68 }, { kind: "pdf", page: 224 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about global asset access",
      items: [
        {
          question: "Does a global library need one shared language for tags and descriptions?",
          answer: ["Not necessarily, but the choice should be deliberate. When markets describe the same material in different languages, a search in one can miss assets described in another, so teams usually agree which terms are shared. A structured ", { text: "asset taxonomy", page: 375 }, " is where that agreement is written down."],
        },
        {
          question: "What makes global asset access feel slow apart from distance?",
          answer: "Often habits rather than the network. Downloading an original to check something a preview would answer, or waiting for a colleague in another time zone to say where a file is, can cost as much time as distance does.",
        },
        {
          question: "Is global asset access only a concern for multinational companies?",
          answer: "No. A small studio with staff in more than one country, or an agency with offices in different time zones, meets the same questions of distance, copies and working hours on a smaller scale.",
        },
        {
          question: "Where should a global organisation start when bringing regional libraries together?",
          answer: ["With what each region holds and how it is organised today. A ", { text: "DAM migration strategy", page: 289 }, " begins with understanding existing storage, metadata, permissions and organisational requirements, and regional drives are part of that picture."],
        },
      ],
      sources: [{ kind: "pdf", page: 375 }, { kind: "pdf", page: 289 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on working across regions",
      variant: "compact",
      pages: [304, 224, 225, 147, 87, 154],
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
