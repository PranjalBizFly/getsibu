/**
 * 213 · GetSibu for Marketing Teams — /use-cases/marketing-teams
 *
 * Angle (cluster: uc-marketing-brand, primary): the everyday campaign library — the mix of campaign assets,
 * product imagery, videos and presentations a marketing team produces, and how that material is found,
 * reviewed, versioned and reused. Brand Teams (214) owns approved assets, brand tags and expiry; Enterprise
 * Marketing (223) owns governance at scale; Global Brands (224) and Multi-Market Teams (225) own markets.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how marketing teams typically work; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 213,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Use Cases",
      lede: "See how a marketing team can run one library for the campaign assets, product imagery, videos and presentations it produces, then find, review and reuse that material from one launch to the next.",
      visual: { diagram: "media-library", focus: "video,image,document" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 213 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 70 }, { kind: "pdf", page: 26 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "One library for everything a campaign produces",
      body: [
        "With GetSibu, marketing teams can maintain a central library for campaign assets, product imagery, videos, presentations and the other materials their work depends on, instead of a separate home for each format.",
        "A single campaign rarely stays in one format. The same launch can involve a product photoshoot, several edits of a film for different channels, a sales presentation and a long tail of banners, often made by different people and delivered at different times. When each piece lands in its own folder, the next brief starts with a search for last season’s shots and a debate about which deck is current.",
        [
          "Keeping that material together is what makes the rest of the work easier. ",
          { text: "Campaign review", page: 70 },
          " happens on the assets themselves, ",
          { text: "saved searches", page: 17 },
          " turn a recurring request into a view colleagues can open, and ",
          { text: "asset usage analytics", page: 182 },
          " show which content receives attention and which sits underused.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Campaign material kept in one library", "Search by what the team remembers", "Review before distribution", "Versions without duplicate copies", "Usage analytics for campaign content"],
      },
      highlight: {
        heading: "In practice",
        body: "When a sales colleague asks for the latest product shots, the answer is a link to a saved search rather than a zipped folder that will be out of date by the next campaign.",
        tags: ["Campaigns", "Product imagery", "Presentations"],
      },
      glance: {
        heading: "Marketing teams in brief",
        facts: [
          { label: "Team", value: "Marketing teams" },
          { label: "Typical material", value: "Campaign assets, product imagery, videos, presentations" },
          { label: "Builds on", value: "Marketing Collaboration", page: 82 },
          { label: "Supports", value: "Campaign Review", page: 70 },
        ],
        actions: [{ kind: "route", path: "/use-cases", label: "More in Use Cases" }]
      },
      sources: [{ kind: "pdf", page: 213 }, { kind: "pdf", page: 70 }, { kind: "pdf", page: 17 }, { kind: "pdf", page: 79 }, { kind: "pdf", page: 182 }, { kind: "pdf", page: 82 }, { kind: "pdf", page: 91 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "capabilities",
      eyebrow: "What the team uses",
      heading: "The parts of GetSibu a marketing team leans on",
      items: [
        {
          heading: "A central campaign library",
          body: "Campaign files from connected drives and direct uploads come together in one location, which reduces the confusion of several storage places and disconnected versions.",
          icon: "folder",
          points: ["Images, video, documents and audio side by side", "Fewer stray copies of the same file"],
          page: 6,
        },
        {
          heading: "Search that fits how marketers remember",
          body: "Assets can be found through filenames, metadata, text inside files, AI-generated tags and comments, or by describing what is needed in natural language.",
          icon: "search",
          points: ["Useful when nobody knows the filename", "Filters for format, uploader and date"],
          page: 11,
        },
        {
          heading: "Saved searches for recurring requests",
          body: "A search the team runs for every product launch can be saved and shared through a URL, so colleagues open the same view instead of rebuilding it.",
          icon: "filter",
          points: ["Reusable views for campaigns and products", "Shared without duplicating files"],
          page: 17,
        },
        {
          heading: "Review before distribution",
          body: "Asset-level discussions and approvals let the team check campaign materials before anything goes out.",
          icon: "approval",
          points: ["Comments stay on the asset", "Review status shows what still needs attention"],
          page: 70,
        },
        {
          heading: "Approved-only views",
          body: "Views limited to approved content help colleagues pick material that has completed the required review process.",
          icon: "check",
          points: ["Statuses tell drafts from approved content", "Less risk of an early draft going out"],
          page: 103,
        },
        {
          heading: "Versions of campaign files",
          body: "Campaign files can be revised without creating separate disconnected copies, and an older version can be restored if the team needs to go back.",
          icon: "history",
          points: ["One record per asset", "No more “final-v2” filenames"],
          page: 96,
        },
        {
          heading: "Analytics on campaign content",
          body: "Asset analytics help the team understand how campaign content is used and what activity is happening in the library.",
          icon: "chart",
          points: ["Which assets get attention", "Which tags people search for"],
          page: 200,
        },
      ],
      sources: [{ kind: "pdf", page: 6 }, { kind: "pdf", page: 1 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 13 }, { kind: "pdf", page: 17 }, { kind: "pdf", page: 78 }, { kind: "pdf", page: 70 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 76 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 102 }, { kind: "pdf", page: 96 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 94 }, { kind: "pdf", page: 200 }, { kind: "pdf", page: 182 }, { kind: "pdf", page: 186 }],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A seasonal product launch assembled from one library",
      team: "A marketing team",
      situation: "A marketing team is preparing a seasonal product launch. The photography, a launch film and a sales presentation are being produced in parallel, and the sales team will need the finished material on launch day.",
      steps: [
        {
          heading: "New photography arrives",
          body: ["The photographer’s selects are added through ", { text: "drag and drop upload", page: 127 }, ", and processing prepares them for search next to last season’s product shots."],
        },
        {
          heading: "Last season’s assets are found",
          body: ["Rather than asking who stored the previous campaign, a designer searches the library and ", { text: "combines filters", page: 19 }, " for format and date to narrow the results."],
        },
        {
          heading: "The film and deck go to review",
          body: ["Stakeholders comment on the launch film and the presentation directly, and ", { text: "approval status", page: 68 }, " records whether each piece is approved or still requires changes."],
        },
        {
          heading: "A late change replaces the deck",
          body: "When the pricing slide changes, the presentation is replaced in place and the earlier version stays in the asset’s history.",
        },
        {
          heading: "The launch search is shared",
          body: "The team saves the launch search and sends its link to sales, so everyone opens the same set of assets rather than copies passed around by email.",
        },
        {
          heading: "Usage is checked afterwards",
          body: "After the launch, usage analytics show which images and films received attention, which shapes what the team plans to reshoot next season.",
        },
      ],
      outcome: "The next campaign begins from a library where last season’s assets, their versions and their review decisions are already in one place.",
      link: { page: 82, label: "Marketing Collaboration" },
      sources: [{ kind: "pdf", page: 127 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 19 }, { kind: "pdf", page: 70 }, { kind: "pdf", page: 68 }, { kind: "pdf", page: 99 }, { kind: "pdf", page: 17 }, { kind: "pdf", page: 78 }, { kind: "pdf", page: 182 }, { kind: "pdf", page: 82 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "tabs",
      id: "materials",
      eyebrow: "By material",
      heading: "How each kind of marketing material stays usable",
      tabs: [
        {
          label: "Campaign assets",
          heading: "Keep a campaign’s pieces findable after it ends",
          icon: "megaphone",
          body: [
            "Banners, social edits and print files multiply while a campaign is live, then scatter once it ends. Kept together with consistent tags, they give the next brief a starting point.",
            ["Campaign teams can ", { text: "maintain versions of creative files", page: 96 }, " inside one record, so the file that was published is not confused with an early draft of it."],
          ],
          points: ["Tags that reflect campaign and channel", "One asset record instead of parallel copies"],
          link: { page: 8, label: "Creative Asset Organisation" },
        },
        {
          label: "Product imagery",
          heading: "Reuse product shots across campaigns",
          icon: "camera",
          body: [
            "Product photography is some of the most reused material a marketing team owns, and some of the hardest to keep straight when near-identical shots exist for each colourway and angle.",
            ["Images become searchable through metadata, tags, visual characteristics and extracted information, which makes a ", { text: "large image collection", page: 26 }, " easier to reuse. ", { text: "Colour information", page: 36 }, " can also help when the brief is about a particular palette."],
          ],
          points: ["Search by colour when it matters", "Different versions of a visual in one record"],
          link: { page: 52, label: "AI-Powered Image Discovery" },
        },
        {
          label: "Videos",
          heading: "Find the right edit without watching them all",
          icon: "video",
          body: [
            "Launch films, product demos and short edits for social channels pile up fast, and a filename rarely says which cut is which.",
            ["AI-generated information added as videos are indexed helps the team locate relevant footage without opening each file. Review notes can be attached to ", { text: "specific points on the timeline", page: 64 }, ", so feedback on an edit refers to the exact moment."],
          ],
          points: ["Streaming previews for large files", "Timeline comments during review"],
          link: { page: 25, label: "Searchable Video Library" },
        },
        {
          label: "Presentations",
          heading: "Search decks by what they say",
          icon: "document",
          body: [
            "Sales decks, briefs and campaign reports hold much of a campaign’s reasoning, yet they are usually named by date or author rather than by what they contain.",
            ["Text inside presentations and PDFs can be extracted and made searchable, so a deck can be found by a phrase on one of its slides. ", { text: "Document version management", page: 99 }, " keeps earlier versions available when a presentation is replaced."],
          ],
          points: ["Found by the words on a slide", "Earlier versions kept on replacement"],
          link: { page: 27, label: "Searchable Document Library" },
        },
      ],
      sources: [{ kind: "pdf", page: 96 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 26 }, { kind: "pdf", page: 36 }, { kind: "pdf", page: 98 }, { kind: "pdf", page: 52 }, { kind: "pdf", page: 25 }, { kind: "pdf", page: 64 }, { kind: "pdf", page: 147 }, { kind: "pdf", page: 15 }, { kind: "pdf", page: 99 }, { kind: "pdf", page: 27 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about GetSibu for marketing teams",
      items: [
        {
          question: "Can product imagery, videos and presentations share one marketing library?",
          answer: ["Yes. GetSibu is designed to store and search images, video, audio and documents together, and ", { text: "creative file discovery", page: 24 }, " works across all of them, so a campaign does not need a separate system for each format."],
        },
        {
          question: "How does a marketing team locate approved campaign content?",
          answer: ["Approved-only views show content that has completed review, and ", { text: "review status", page: 76 }, " makes clear whether an asset still needs attention. Together they can reduce the time spent hunting for approved campaign material."],
        },
        {
          question: "How are campaign materials reviewed before they are distributed?",
          answer: ["Reviewers discuss the asset where it lives and the team can ", { text: "request review, make changes and mark assets as approved", page: 67 }, ". Reviewers do not need to be in the same location to take part."],
        },
        {
          question: "What can analytics tell a marketing team about its library?",
          answer: ["Marketing asset analytics show campaign content usage and library activity, while ", { text: "tag analytics", page: 186 }, " identify frequently used or searched tags, a useful signal of how colleagues look for material."],
        },
      ],
      sources: [{ kind: "pdf", page: 1 }, { kind: "pdf", page: 24 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 76 }, { kind: "pdf", page: 352 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 70 }, { kind: "pdf", page: 87 }, { kind: "pdf", page: 200 }, { kind: "pdf", page: 186 }],
    },
    {
      kind: "related",
      id: "related",
      heading: "More for marketing and campaign work",
      variant: "compact",
      pages: [70, 103, 200, 17, 214, 223],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page, and the closest sibling use cases." }],
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
