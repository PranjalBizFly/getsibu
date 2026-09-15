/**
 * 180 · Secure Creative Collaboration — /permissions/secure-creative-collaboration
 *
 * Angle (cluster: secure-collaboration, primary): collaboration combined with permissions — why control is usually lost when
 * collaboration moves out of the library, and how each kind of collaboration keeps control inside it. Secure Asset Sharing
 * (172) owns sharing; Creative Security Controls (174) owns the controls. Nothing is said about client or guest access,
 * notifications, who can see comments or what happens when a mentioned person lacks access.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how collaboration and access control interact; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 180,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Permissions & Multi-Tenancy",
      lede: "How comments, mentions, reviews and approvals can involve the right people without loosening control over sensitive creative work, and why that control is usually lost when collaboration leaves the library.",
      visual: { diagram: "folder-access", focus: "team" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 180 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Working together without opening everything up",
      body: [
        "GetSibu combines collaboration with permissions so teams can work together without sacrificing control over sensitive assets. The two are often treated as opposites: collaboration invites people in, while permissions keep people out.",
        "In creative work the tension is real. A campaign needs input from strategy, design, legal and production, often at short notice. When involving someone in the library feels slow, the conversation moves elsewhere: files go into email, feedback into chat and sign-off into a quick reply. Control is lost at exactly the moment the work is most sensitive, not because anyone chose to lose it, but because the controlled route felt like the slow one.",
        [
          "Keeping collaboration inside the library is what lets permissions keep applying. ",
          { text: "Creative team collaboration", page: 61 },
          " provides collaboration features directly inside the asset library, and ",
          { text: "secure asset sharing", page: 172 },
          " explains how sharing can be controlled through permissions rather than relying only on unrestricted links.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Collaboration inside the asset library", "Permissions that keep applying", "Mentions aware of folder visibility", "Feedback that stays with the asset", "Control kept over sensitive work"],
      },
      glance: {
        heading: "Secure collaboration in brief",
        facts: [
          { label: "Area", value: "Permissions & Multi-Tenancy" },
          { label: "Combines", value: "Collaboration and permissions" },
          { label: "Sharing", value: "Secure Asset Sharing", page: 172 },
          { label: "Controls", value: "Creative Security Controls", page: 174 },
        ],
        actions: [{ kind: "route", path: "/permissions", label: "More in Permissions & Multi-Tenancy" }]
      },
      sources: [{ kind: "pdf", page: 180 }, { kind: "pdf", page: 61 }, { kind: "pdf", page: 172 }, { kind: "pdf", page: 174 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "by-activity",
      eyebrow: "By activity",
      heading: "How control holds in each kind of collaboration",
      tabs: [
        {
          label: "Discussing",
          heading: "Feedback that does not leave the library",
          icon: "message",
          body: [
            "When feedback is written on the asset, the conversation about an unreleased film is not copied into inboxes nobody controls.",
            [{ text: "Asset comments", page: 62 }, " keep feedback attached to the creative work under discussion, and ", { text: "threaded comments", page: 63 }, " keep each issue in a conversation of its own."],
          ],
          points: ["Feedback kept on the asset", "One thread per issue"],
        },
        {
          label: "Mentioning",
          heading: "Bringing in people who can see the work",
          icon: "mention",
          body: [
            ["The autocomplete behind ", { text: "team mentions", page: 66 }, " is folder-aware, helping to make sure the colleagues named in an asset discussion have appropriate visibility."],
            "That makes it less likely that a discussion about sensitive material draws in someone who cannot, or should not, see it.",
          ],
          points: ["Folder-aware autocomplete", "Discussions kept to the right audience"],
        },
        {
          label: "Approving",
          heading: "Decisions recorded where the work lives",
          icon: "approval",
          body: [
            ["Approval workflows let teams request review, make changes and mark assets as approved, and ", { text: "approval history", page: 77 }, " provides a record of that review activity."],
            "A decision recorded on the asset is harder to dispute than an approving reply buried in a chat thread.",
          ],
          points: ["Sign-off on the asset", "A record of review activity"],
        },
        {
          label: "Reviewing video",
          heading: "Precise feedback without clips sent elsewhere",
          icon: "video",
          body: [
            "Describing a moment in an unreleased film by message invites screenshots and exported clips, and each one is a copy outside the library.",
            [{ text: "Frame-accurate review", page: 65 }, " allows creative teams to discuss specific moments in video rather than describing approximate locations through messages."],
          ],
          points: ["Specific moments discussed on the video", "Fewer screenshots in circulation"],
        },
        {
          label: "Client work",
          heading: "Reviews for each client kept apart",
          icon: "briefcase",
          body: [
            ["For agencies, ", { text: "client review", page: 72 }, " means maintaining client-specific libraries and review workflows while different clients stay isolated from one another."],
          ],
          points: ["Client libraries kept separate", "Review within each account"],
        },
      ],
      sources: [{ kind: "pdf", page: 62 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 66 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 77 }, { kind: "pdf", page: 65 }, { kind: "pdf", page: 72 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "outside-versus-inside",
      eyebrow: "The difference",
      heading: "Collaborating outside the library compared with inside it",
      columns: ["Email, chat and shared drives", "Collaboration with permissions in GetSibu"],
      emphasis: 1,
      rows: [
        ["Where feedback lives", "Spread across inboxes and chats", "Connected to the asset"],
        ["Bringing someone in", "Forwarding files and threads", "A mention in the asset’s discussion"],
        ["Sign-off", "A reply saying it looks fine", "Approval with status history"],
        ["Looking back later", "Searching old messages", "Discussion history kept with the asset"],
      ],
      sources: [{ kind: "pdf", page: 73 }, { kind: "pdf", page: 86 }, { kind: "pdf", page: 68 }, { kind: "pdf", page: 75 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "An unannounced financial product reviewed by several functions",
      team: "A bank’s marketing team",
      situation: "A bank’s marketing team is preparing a campaign film for a product that has not been announced. Brand, legal and compliance colleagues all need to review it before launch, but the wider marketing department must not see it yet.",
      steps: [
        { heading: "The campaign starts private", body: ["The campaign’s folder ", { text: "stays private until access is granted", page: 154 }, ", so the wider department does not see the film before launch."] },
        { heading: "Reviewers receive targeted access", body: ["The legal reviewer and a compliance colleague each receive ", { text: "targeted access", page: 157 }, " to the campaign folder only, not to the marketing library as a whole."] },
        { heading: "Feedback lands on the film", body: ["Legal leaves ", { text: "comments at points on the timeline", page: 64 }, " where wording needs to change, so the editor sees each point against the frame it concerns."] },
        { heading: "The right colleague is brought in", body: "When a disclaimer raises a compliance question, the brand manager mentions the compliance colleague in the film’s discussion rather than forwarding the file." },
        { heading: "The decision is recorded", body: "Once the changes are made, the film is marked as approved, and its status history records the decision." },
      ],
      outcome: "Everyone who needed to review the film took part, and the unreleased material stayed with that group inside the library instead of travelling through email attachments.",
      link: { page: 223, label: "GetSibu for Enterprise Marketing" },
      sources: [{ kind: "pdf", page: 154 }, { kind: "pdf", page: 157 }, { kind: "pdf", page: 64 }, { kind: "pdf", page: 86 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 68 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about secure creative collaboration",
      items: [
        {
          question: "What should a team agree before a sensitive review starts?",
          answer: "Who takes part, where the discussion will happen, who can approve the work and what happens to reviewers’ access once the decision is made. Settling those points in advance stops the review drifting into email the first time a deadline tightens.",
        },
        {
          question: "How does secure creative collaboration work for remote teams?",
          answer: [
            { text: "Remote creative collaboration", page: 88 },
            " lets distributed teams work around the same assets through comments, mentions, approvals and shared searches, so they have less reason to pass files between themselves.",
          ],
        },
        {
          question: "Where does secure creative collaboration fit within governance?",
          answer: [
            "It is the everyday side of governance. ",
            { text: "Enterprise asset governance", page: 179 },
            " sets out roles, permissions, audit logs, authentication and policies, and secure collaboration is how teams work well within those controls.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 88 }, { kind: "pdf", page: 179 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on collaborating under control",
      variant: "compact",
      pages: [172, 174, 66, 72, 179, 61],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
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
