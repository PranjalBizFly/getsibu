/**
 * 224 · GetSibu for Global Brands — /use-cases/global-brands
 *
 * Angle (cluster: uc-marketing-brand): organising assets across markets — global masters flowing out to market teams,
 * local adaptations coming back through approval, with folder permissions deciding what each market sees. Multi-Market
 * Teams (225) owns separating content by region under central governance; Enterprise Marketing (223) owns governance
 * across functions; Brand Teams (214) owns brand controls without a market dimension.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how global brands typically work with their markets; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 224,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Use Cases",
      lede: "How a global brand can organise its assets market by market, give each local team the access it needs through folder permissions, and route local adaptations through approval before they are used.",
      visual: { diagram: "media-library", focus: "image,video" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 224 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Global assets, local markets, one brand",
      body: [
        "Global brands can use GetSibu to organise assets across the markets they operate in, while appropriate folder permissions and approval workflows govern what each market can reach and release.",
        "A global brand is produced centrally and used locally. A central team creates master campaigns, identity files and product imagery; market teams translate copy, swap in local products, meet local regulations and add material of their own. The risk runs in both directions: markets working from outdated masters, and local adaptations drifting from the brand without anyone at the centre seeing them.",
        [
          "The library has to support both movements. ",
          { text: "Brand collaboration", page: 83 },
          " includes organising approved assets by campaign, region or market, ",
          { text: "folder-level permissions", page: 152 },
          " decide which markets see which areas, and ",
          { text: "global asset access", page: 314 },
          " through CDN-based delivery can support teams spread across different geographical regions.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Master assets shared with every market", "Folders arranged by market", "Local re-exports recognised as copies", "Adaptations approved before use", "Access for teams in many countries"],
      },
      highlight: {
        heading: "In practice",
        body: "Before localising a campaign, a market team checks that it is starting from the master the centre approved, not from a file forwarded months ago.",
        tags: ["Central brand team", "Market teams", "Reviewers"],
      },
      glance: {
        heading: "Global brands in brief",
        facts: [
          { label: "Team", value: "Global brands" },
          { label: "Typical material", value: "Master campaigns, identity files, local adaptations" },
          { label: "Builds on", value: "Brand Asset Approval", page: 71 },
          { label: "Supports", value: "Creative Approval Workflow", page: 67 },
        ],
        actions: [{ kind: "route", path: "/use-cases", label: "More in Use Cases" }]
      },
      sources: [{ kind: "pdf", page: 224 }, { kind: "pdf", page: 83 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 314 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 40 }, { kind: "pdf", page: 71 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "capabilities",
      eyebrow: "What the brand uses",
      heading: "What a global brand uses to work with its markets",
      items: [
        {
          heading: "Approval workflows",
          body: "Local adaptations can be sent for review, changed and marked as approved before a market uses them.",
          icon: "approval",
          points: ["The centre reviews local work", "Approval recorded on each adaptation"],
          page: 67,
        },
        {
          heading: "Approved-only views",
          body: "Markets take master assets from views limited to content that has completed review, so local work starts from finished material.",
          icon: "check",
          points: ["Masters taken from approved content", "Drafts of global work held back"],
          page: 103,
        },
        {
          heading: "Duplicate detection",
          body: "Markets that rename or re-export a master create copies the centre never sees, and duplicate detection identifies identical files and visually equivalent copies, including renamed or re-encoded ones.",
          icon: "copy",
          points: ["Renamed masters still matched", "Supports storage optimisation"],
          page: 40,
        },
        {
          heading: "Folder access maps",
          body: "Folder access maps help organisations understand which areas of the library receive attention.",
          icon: "map",
          points: ["Areas that draw attention", "Areas that go quiet"],
          page: 198,
        },
        {
          heading: "Brand asset analytics",
          body: "Analytics on which approved assets are accessed and reused help show which global masters markets are actually adopting.",
          icon: "chart",
          points: ["Reuse of approved masters", "A signal of local adoption"],
          page: 203,
        },
      ],
      sources: [{ kind: "pdf", page: 67 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 40 }, { kind: "pdf", page: 112 }, { kind: "pdf", page: 198 }, { kind: "pdf", page: 203 }],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A global campaign adapted for local launches",
      team: "A global brand team",
      situation: "A global brand’s central team has finished a seasonal campaign. Market teams in several countries must adapt it for local launches, and the centre wants to see each adaptation before it goes out.",
      steps: [
        {
          heading: "Masters go into one global folder",
          body: "The central team places the approved master files in a global campaign folder that every market lead has been given access to.",
        },
        {
          heading: "Each market works in its own folder",
          body: "Local adaptations are uploaded to each market’s folder, which only that market’s team and the central brand team can access.",
        },
        {
          heading: "Adaptations go to review",
          body: ["Each market requests review, and the central team ", { text: "comments on the files", page: 62 }, " as each adaptation arrives."],
        },
        {
          heading: "One adaptation is sent back",
          body: ["An adaptation uses an outdated logo lockup, so the central reviewer ", { text: "mentions the market lead", page: 66 }, " in a comment and the asset is marked as requiring changes."],
        },
        {
          heading: "The corrected version is approved",
          body: ["Once fixed, the adaptation is approved, and its ", { text: "status history", page: 68 }, " records the decision for that market."],
        },
      ],
      outcome: "Every market launches the same campaign in its own form, and the central team has seen and approved each adaptation instead of discovering them afterwards.",
      link: { page: 152, label: "Folder-Level Permissions" },
      sources: [{ kind: "pdf", page: 152 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 66 }, { kind: "pdf", page: 68 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "accordion",
      id: "decisions",
      eyebrow: "Considerations",
      heading: "Decisions a global brand makes when organising markets",
      items: [
        {
          heading: "Organise by market, by campaign, or both",
          summary: "Market folders suit local teams; campaign folders suit the centre.",
          icon: "folder",
          body: [
            "Local teams think in terms of their market, while the central team thinks in campaigns. A structure that nests campaigns inside markets, or markets inside campaigns, serves one group better than the other.",
            [{ text: "Hierarchical tags", page: 8 }, " can carry whichever dimension the folders do not, so a market’s assets can still be found by campaign."],
          ],
        },
        {
          heading: "What markets may change",
          summary: "Some elements are fixed globally; others are meant to be adapted.",
          icon: "flag",
          body: [
            "Logos and core imagery are usually fixed, while copy, pricing and product selection vary. Writing this down keeps review from becoming a debate about what was allowed.",
            [{ text: "Brand guardrail tags", page: 105 }, " can identify assets that comply with specific organisational requirements, such as masters cleared for local adaptation."],
          ],
        },
        {
          heading: "How much the centre reviews",
          summary: "Reviewing every adaptation centrally can become the slowest step in a launch.",
          icon: "approval",
          body: [
            "When every market submits adaptations in the same week, a small central team can hold up a global launch. Agreeing which adaptations need central sign-off, and which a market may approve itself, keeps review focused on the work most likely to drift from the brand.",
            [{ text: "Creative asset governance", page: 114 }, " defines who can upload, edit, approve, download and manage assets, which is where that agreement belongs."],
          ],
        },
        {
          heading: "Time zones and review",
          summary: "The centre and the markets are rarely at work at the same time.",
          icon: "clock",
          body: [
            "Review that depends on meetings stalls when participants are hours apart. Written feedback that stays on the asset lets each side pick up where the other stopped.",
            [{ text: "Threaded comments", page: 63 }, " keep each issue in its own conversation, which makes a handover between time zones easier to follow."],
          ],
        },
        {
          heading: "Campaigns that end at different times",
          summary: "A global campaign can finish in one market while it still runs in another.",
          icon: "calendar",
          body: [
            "Seasons, launch dates and local promotions mean a campaign rarely ends everywhere at once. Material that is finished in one market can still be live in the next.",
            [{ text: "Expiry information", page: 104 }, " can help teams identify content that should no longer be used after a specified period."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 8 }, { kind: "pdf", page: 105 }, { kind: "pdf", page: 114 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 104 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "comparison",
      eyebrow: "Compared",
      heading: "Sending masters to markets versus a shared market library",
      columns: ["Masters sent to markets", "Markets working in GetSibu"],
      emphasis: 1,
      rows: [
        ["Getting the master", "Files emailed or sent by transfer link", "Taken from the global campaign folder"],
        ["Market access", "Whoever received the email", "Folder permissions for each market"],
        ["Local adaptations", "Seen by the centre after launch, if at all", "Reviewed and approved before use"],
        ["Updated masters", "Old versions left in inboxes", "Replaced in place with history retained"],
        ["Previews far from the centre", "Large downloads for each market", "Previews delivered through a CDN"],
      ],
      sources: [{ kind: "pdf", page: 152 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 304 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about GetSibu for global brands",
      items: [
        {
          question: "Can a global brand give each market access to only its own folders?",
          answer: ["Yes. New market folders ", { text: "stay private until access is explicitly granted", page: 154 }, ", so one market sees another’s work only if someone decides it should."],
        },
        {
          question: "Can the central brand team see which adaptations are still waiting?",
          answer: [{ text: "Review status", page: 76 }, " indicates whether an asset needs attention or has already completed the approval process, which shows the centre what remains before launch."],
        },
        {
          question: "Can a global brand see what a market changed between versions of an adaptation?",
          answer: [{ text: "Creative revision tracking", page: 100 }, " helps teams understand what changed between versions and which version is currently active."],
        },
      ],
      sources: [{ kind: "pdf", page: 154 }, { kind: "pdf", page: 76 }, { kind: "pdf", page: 100 }],
    },
    {
      kind: "related",
      id: "related",
      heading: "More for brands working across markets",
      variant: "compact",
      pages: [152, 67, 71, 203, 225, 214],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page, and the closest brand use cases." }],
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
