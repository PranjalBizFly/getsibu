/**
 * 82 · Marketing Collaboration — /features/marketing-collaboration
 *
 * Angle (cluster: team-collaboration): how marketing teams collaborate through centralised campaign libraries,
 * approvals and usage analytics — the many groups who make, clear and use campaign material, and the loop back into
 * the next brief. GetSibu for Marketing Teams (213) owns the library and its materials; Campaign Review (70) owns the
 * checks before distribution.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how marketing groups collaborate on campaign material; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 82,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Collaboration",
      lede: "See who takes part in marketing collaboration, from campaign managers and product marketers to channel teams and marketing operations, and how a shared library, recorded approvals and evidence of use connect their work.",
      visual: { diagram: "timeline-review", focus: "comments" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 82 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Making, clearing and learning from campaign material together",
      body: [
        "Marketing teams can use centralised campaign libraries, approvals and usage analytics in GetSibu to manage their creative materials. Each supports a different conversation: where the material is, whether it is cleared, and whether anyone is using it.",
        "Marketing collaboration tends to involve a long list of groups. Product marketers supply the facts, designers and content producers make the material, brand colleagues check it, and social, regional and sales teams put it to use, often while the next campaign is already being planned. Every group has its own question, and without a common source they answer one another by email.",
        [
          "Larger organisations add governance to the mix: ",
          { text: "enterprise marketing teams", page: 223 },
          " can combine asset governance, permissions, search, approvals and analytics. The practical gain can be time: ",
          { text: "marketing productivity", page: 352 },
          " is about reducing the time required to locate approved campaign content and supporting creative materials.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Centralised campaign libraries", "Approvals that clear material for use", "Usage analytics behind the next brief", "Many marketing groups, one source", "Makers and users in the same loop"],
      },
      glance: {
        heading: "Marketing collaboration in brief",
        facts: [
          { label: "Area", value: "Collaboration" },
          { label: "Built on", value: "Campaign libraries, approvals and usage analytics" },
          { label: "Use case", value: "GetSibu for Marketing Teams", page: 213 },
          { label: "Before launch", value: "Campaign Review", page: 70 },
        ],
        actions: [{ kind: "route", path: "/features/collaboration", label: "More in Collaboration" }]
      },
      sources: [{ kind: "pdf", page: 82 }, { kind: "pdf", page: 223 }, { kind: "pdf", page: 352 }, { kind: "pdf", page: 213 }, { kind: "pdf", page: 70 }, EXPLAINS],
    },
    {
      kind: "layers",
      id: "layers",
      eyebrow: "How it fits together",
      heading: "What marketing collaboration rests on",
      intro: "Each layer answers a question that the next one depends on.",
      layers: [
        { label: "A centralised campaign library", body: "The groups that make, check and use campaign material draw on one library, so a product correction and a regional request concern the same file." },
        { label: "Discussion on the assets", body: "Product, brand and channel colleagues raise points on the piece they concern, so a designer is not left reconciling notes that arrived by different routes." },
        { label: "Approvals", body: "The approval workflow marks the handover from the groups who make and check material to the groups who put it to use.", page: 67 },
        { label: "Usage analytics", body: "Once material is in circulation, analytics help the team understand which assets receive attention and which remain underused.", page: 182 },
      ],
      sources: [{ kind: "pdf", page: 82 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 182 }],
    },
    {
      kind: "tabs",
      id: "seats",
      eyebrow: "Who takes part",
      heading: "How marketing collaboration looks from each seat",
      tabs: [
        {
          label: "Campaign managers",
          heading: "Keep many contributors working on one set",
          icon: "megaphone",
          body: [
            "A campaign manager spends less time making material than keeping contributors aligned on the same brief, the same assets and the same dates. With the campaign’s material in one library, that alignment starts from a shared set rather than from several people’s folders.",
            ["As launch approaches, ", { text: "review status", page: 76 }, " tells the campaign manager which pieces still need attention and which have completed approval."],
          ],
          points: ["Contributors aligned on one set", "Outstanding pieces visible before launch"],
        },
        {
          label: "Product marketing",
          heading: "Correct the facts where the material is",
          icon: "document",
          body: [
            "Product marketers are often the reviewers who catch an outdated specification or a claim that has changed. Writing each correction as a comment on the asset keeps it beside the work the designer is about to change, rather than in a spreadsheet of fixes that has to be matched to files.",
            ["When a designer is unsure about a detail, ", { text: "mentioning the product marketer", page: 86 }, " makes it easier to bring the person who knows the answer into the discussion on that asset."],
          ],
          points: ["Corrections kept beside the work", "Questions answered by the person who knows"],
        },
        {
          label: "Channel teams",
          heading: "Take what is cleared, and say what is missing",
          icon: "globe",
          body: [
            "Social, email, retail and regional colleagues use campaign material more than anyone, yet they are often the quietest collaborators. Taking assets from approved-only views spares them from checking with the campaign team each time.",
            "A comment on an approved asset is a sensible place to ask for an adaptation or to point out a missing format, because the request stays attached to the piece it refers to.",
          ],
          points: ["Cleared material without asking", "Requests attached to the right piece"],
        },
        {
          label: "Marketing operations",
          heading: "Find the patterns in what gets used",
          icon: "chart",
          body: [
            [
              { text: "Asset performance insights", page: 204 },
              " help teams identify patterns in asset usage, and ",
              { text: "most-searched tags", page: 193 },
              " give insight into what colleagues are frequently looking for.",
            ],
            "Read together, they can suggest whether the library holds what colleagues go looking for, which is a more useful starting point for planning than a list of what was produced.",
          ],
          points: ["Usage patterns across campaigns", "Searches that reveal unmet needs"],
        },
      ],
      sources: [{ kind: "pdf", page: 82 }, { kind: "pdf", page: 76 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 86 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 204 }, { kind: "pdf", page: 193 }, EXPLAINS],
    },
    {
      kind: "before-after",
      id: "before-after",
      heading: "Marketing collaboration before and after a shared campaign library",
      beforeLabel: "Scattered campaign work",
      afterLabel: "Collaborating in GetSibu",
      before: [
        "Product corrections sent round in a spreadsheet",
        "Regional teams keeping private copies of campaign files",
        "Sign-off given in a meeting and never written down",
        "Unused assets noticed only when someone happens to ask",
        "Every channel asking the designer for the latest file",
      ],
      after: [
        "Corrections written on the assets they concern",
        "Channel teams drawing on one campaign library",
        "Approval recorded on each campaign asset",
        "Usage analytics showing what went unused",
        "Colleagues reaching approved content without asking",
      ],
      sources: [{ kind: "pdf", page: 82 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 68 }, { kind: "pdf", page: 182 }, { kind: "pdf", page: 103 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about marketing collaboration",
      items: [
        {
          question: "How is marketing collaboration different from campaign review?",
          answer: "Campaign review is one moment within it: checking campaign materials before distribution. Marketing collaboration spans the whole cycle, from making material in a shared library to learning from how it was used.",
        },
        {
          question: "Should product marketers approve campaign material or only comment on it?",
          answer: [
            "That is for the team’s governance to settle, because ",
            { text: "creative asset governance", page: 114 },
            " is where the right to approve is defined, alongside the rights to upload, edit and download. One common arrangement has product marketers confirm facts in comments while a campaign lead gives the approval.",
          ],
        },
        {
          question: "What should a marketing team agree before collaborating in one library?",
          answer: "Which kinds of material need approval and who gives it, how campaigns are tagged so colleagues can find them, and where requests for adaptations or missing formats should be made.",
        },
      ],
      sources: [{ kind: "pdf", page: 70 }, { kind: "pdf", page: 114 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on marketing and campaign collaboration",
      variant: "compact",
      pages: [213, 70, 182, 103, 223, 88],
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
