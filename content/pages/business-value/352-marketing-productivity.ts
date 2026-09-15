/**
 * 352 · Marketing Productivity — /business-value/marketing-productivity
 *
 * Angle (cluster: productivity): marketing time spent locating approved campaign content and supporting
 * materials — finding a file and confirming it is cleared are separate tasks — and how a marketing team can
 * build its own evidence. GetSibu for Marketing Teams (213) owns the team's library; Fast Asset Discovery (20)
 * owns urgent requests; AI Creative Operations (59) owns marketing overhead in general.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of marketing content work and how to evidence time spent; states no GetSibu capability beyond the cited pages and supplies no figures." } as const;

const page: PageContent = {
  page: 352,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "centered",
      eyebrow: "Business Value",
      lede: "Where marketing time goes in finding approved campaign content and the materials that support it, what changes when the approved version is easy to identify, and how that burden differs for campaign managers, regional marketers and content producers.",
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 352 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Finding the file is only half the task",
      body: [
        "Marketing teams can reduce the time required to locate approved campaign content and supporting creative materials. The word “approved” carries much of the weight: finding a file is one task, and confirming it is cleared for use is often a second and slower one.",
        "Marketing work depends on reuse. The same product image serves a newsletter, a partner deck and a social post; last season’s launch film becomes the reference for this season’s brief. Every reuse starts with two questions, where is it and is this the one we can use, and when the second has no quick answer, people ask around, wait or take a chance.",
        ["Supporting materials add to the load. Briefs, product sheets and presentations rarely carry filenames that describe their contents, and ", { text: "searchable document libraries", page: 27 }, " let teams locate them through extracted text, metadata and organisational tags without opening every PDF or presentation."],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Finding and confirming are separate tasks", "Approved content easy to identify", "Supporting materials found by contents", "Reuse across channels and seasons", "Different pressures in each marketing role"],
      },
      glance: {
        heading: "Marketing productivity in brief",
        facts: [
          { label: "Area", value: "Business value" },
          { label: "Time spent on", value: "Locating approved campaign content" },
          { label: "Also covers", value: "Briefs, product sheets and presentations" },
          { label: "Team view", value: "GetSibu for Marketing Teams", page: 213 },
        ],
        actions: [{ kind: "route", path: "/business-value", label: "More in Business Value" }]
      },
      sources: [{ kind: "pdf", page: 352 }, { kind: "pdf", page: 27 }, { kind: "pdf", page: 213 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "approval-record",
      eyebrow: "Side by side",
      heading: "Locating campaign content with and without an approval record",
      columns: ["Campaign drives and inboxes", "GetSibu library"],
      emphasis: 1,
      rows: [
        ["Is this version approved?", "Ask whoever ran the review", "Review status shows approved or needing attention"],
        ["Where finished work lives", "A folder named “Final” or “Approved”", "Approved-only views of reviewed content"],
        ["Drafts in circulation", "Mixed in with finished material", "Kept apart from approved assets by approval gates"],
        ["A recurring request from sales", "The same files found and sent again", "A saved search shared through a URL"],
      ],
      sources: [{ kind: "pdf", page: 76 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 71 }, { kind: "pdf", page: 17 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "by-role",
      eyebrow: "By role",
      heading: "Where locating content costs time, role by role",
      tabs: [
        {
          label: "Campaign managers",
          heading: "One campaign, requests from every direction",
          icon: "megaphone",
          body: [
            "While a campaign is live, its manager becomes the route to its material: the agency wants the latest key visual, sales want the deck, a partner wants product shots in a particular format. Each request is small, but answering them all from memory or a personal folder takes a real part of the week.",
            ["Through ", { text: "marketing collaboration", page: 82 }, ", teams can use centralised campaign libraries, approvals and usage analytics to manage creative materials, so more of those requests can be answered from the library than from the manager’s own folders."],
          ],
          points: ["Requests answered from the campaign library", "Fewer files sent from personal folders"],
        },
        {
          label: "Regional marketers",
          heading: "Adapting central material for a local market",
          icon: "globe",
          body: [
            "Regional teams sit furthest from the people who approved a campaign. They need the central version, any local adaptation that already exists and a clear sense of which one they may use, often while the people who could tell them are working different hours.",
            [{ text: "Multi-market teams", page: 225 }, " can separate content by region while maintaining centralised governance, so local material has a place of its own while the rules stay central."],
          ],
          points: ["Local material kept by region", "Governance kept central"],
        },
        {
          label: "Content producers",
          heading: "Many small pieces, made quickly",
          icon: "image",
          body: [
            "Social and content producers turn out variants at pace: crops, cut-downs and seasonal refreshes of the same core assets. Their time goes less on any single search than on the number of times a day they need the current master of something.",
            [{ text: "Social media teams", page: 234 }, " can maintain a searchable library of social content and campaign assets, which gives those repeated small searches one place to start."],
          ],
          points: ["Current masters found again and again", "Social and campaign assets in one library"],
        },
      ],
      sources: [{ kind: "pdf", page: 82 }, { kind: "pdf", page: 225 }, { kind: "pdf", page: 234 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "keeping-it-quick",
      eyebrow: "Considerations",
      heading: "Keeping approved content quick to reach",
      items: [
        {
          heading: "Record where approved content may be used",
          summary: "Approval for one use is not approval for every use.",
          icon: "shield",
          body: [
            ["An image may be cleared for social channels but not for print, or for one market but not another. When those limits live only in the approver’s memory, every reuse needs a question. ", { text: "Brand guardrail tags", page: 105 }, " let brand teams use structured tags to identify assets that comply with specific organisational requirements, which can give such conditions somewhere visible to sit."],
          ],
        },
        {
          heading: "Retire content as deliberately as you approve it",
          summary: "Outdated material that still looks approved costs time and credibility.",
          icon: "calendar",
          body: [
            ["Offers end, products change and image rights lapse. ", { text: "Asset expiry information", page: 104 }, " can help teams identify content that should no longer be used after a specified period, which makes yesterday’s campaign less likely to be mistaken for today’s."],
          ],
        },
        {
          heading: "Describe campaigns in the words requesters use",
          summary: "Sales, partners and regions rarely use marketing’s internal campaign names.",
          icon: "tag",
          body: [
            ["A campaign known internally by a code name may be “the spring range” to sales. A ", { text: "taxonomy that includes synonyms", page: 8 }, " gives the team somewhere to record both names, so the library’s vocabulary reflects how requesters actually ask."],
          ],
        },
        {
          heading: "Keep supporting materials with the campaign they explain",
          summary: "Briefs and product sheets are easier to trust when they sit beside the finished work.",
          icon: "document",
          body: [
            "A banner means more alongside the brief that shaped it and the product sheet that confirms its claims. Organising supporting documents with the campaign’s creative, rather than in a separate archive, shortens the path from “is this right?” to an answer.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 105 }, { kind: "pdf", page: 104 }, { kind: "pdf", page: 8 }, EXPLAINS],
    },
    {
      kind: "checklist",
      id: "weigh",
      eyebrow: "What to weigh",
      heading: "What to weigh in marketing productivity",
      variant: "chips",
      items: ["Requests that need an approval check", "Supporting documents that are hard to find", "Reuse across channels and markets", "Drafts that have reached partners", "Colleagues outside marketing who need assets", "Who keeps approved views current"],
      sources: [{ kind: "pdf", page: 352 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about marketing productivity",
      items: [
        {
          question: "Which marketing requests gain most from a central library?",
          answer: "Requests for the same core material: current logos, product imagery, the latest presentation. They are asked for most often and change least, so once they are clearly approved and easy to find, a steady stream of small interruptions eases.",
        },
        {
          question: "Can colleagues outside marketing find campaign content without asking the marketing team?",
          answer: ["Where they have been given access, yes. ", { text: "Department access", page: 176 }, " lets departments reach only the creative libraries relevant to their work, which keeps the material they see focused on what they need."],
        },
        {
          question: "How does marketing productivity depend on campaign review?",
          answer: [{ text: "Campaign review", page: 70 }, " is where marketing teams use asset-level discussions and approvals before distribution. The decision recorded there is what makes content quick to confirm when someone wants to reuse it later."],
        },
        {
          question: "Can a marketing team see which campaign content is being used?",
          answer: [{ text: "Marketing asset analytics", page: 200 }, " help marketing teams understand campaign content usage and library activity. Content that attracts little use is worth questioning before the next campaign asks for more of the same."],
        },
      ],
      sources: [{ kind: "pdf", page: 176 }, { kind: "pdf", page: 70 }, { kind: "pdf", page: 200 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on marketing content and approvals",
      variant: "compact",
      pages: [213, 103, 70, 200, 82, 348],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the closest marketing pages." }],
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
