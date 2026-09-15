/**
 * 88 · Remote Creative Collaboration — /features/remote-creative-collaboration
 *
 * Angle (cluster: team-collaboration): remote teams working around the same assets through comments, mentions,
 * approvals and shared searches — replacing the incidental moments an office provides, across the whole working day.
 * Collaborative Asset Review (87) owns reviewing across locations; Creative Team Workspace (90) owns the workspace.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how remote creative teams work together; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 88,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Collaboration",
      lede: "What a remote or hybrid creative team loses when colleagues no longer share an office, and how GetSibu’s collaboration tools, together with a few deliberate habits, keep everyone working on the same material.",
      visual: { diagram: "timeline-review", focus: "comments" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 88 }, { kind: "editorial", note: "Framing of what remote teams lose compared with a shared office." }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Working on the same assets from different places",
      body: [
        "Remote teams can collaborate in GetSibu around the same assets through comments, mentions, approvals and shared searches. Colleagues meet the work in the library, wherever each of them happens to be.",
        "Remote work removes the incidental parts of collaboration that an office supplies without anyone planning them. Nobody overhears that a file has been updated, leans across to ask where the latest logo is, or catches a producer in the corridor for a quick yes. Remote teams have to replace those moments deliberately, or they fill the gap with messages, calls and attachments that scatter the work further.",
        [
          "Remote access and control go together. ",
          { text: "Cloud-based architecture", page: 303 },
          " allows organisations to reach their creative libraries through supported clients, and ",
          { text: "multi-factor authentication", page: 336 },
          " adds another layer of account protection, which matters more when people sign in from many places. GetSibu also ",
          { text: "combines collaboration with permissions", page: 180 },
          ", so a dispersed team can work together without giving up control over sensitive assets.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Comments, mentions, approvals, shared searches", "The same assets wherever people work", "Office moments replaced on purpose", "Account protection away from the office", "Work that passes between locations"],
      },
      highlight: {
        heading: "In practice",
        body: "A designer working from home opens the campaign set through a shared search, asks a question on one image and mentions the copywriter, all without attaching a file to anything.",
        tags: ["Designers", "Copywriters", "Producers"],
      },
      glance: {
        heading: "Remote collaboration in brief",
        facts: [
          { label: "Area", value: "Collaboration" },
          { label: "Works through", value: "Comments, mentions, approvals and shared searches" },
          { label: "Review across locations", value: "Collaborative Asset Review", page: 87 },
          { label: "Shared space", value: "Creative Team Workspace", page: 90 },
        ],
        actions: [{ kind: "route", path: "/features/collaboration", label: "More in Collaboration" }]
      },
      sources: [{ kind: "pdf", page: 88 }, { kind: "pdf", page: 303 }, { kind: "pdf", page: 336 }, { kind: "pdf", page: 180 }, { kind: "pdf", page: 87 }, { kind: "pdf", page: 90 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "replacements",
      eyebrow: "The four tools",
      heading: "What stands in for the office moments a remote team misses",
      items: [
        { heading: "Shared searches for “where is it?”", body: "A saved search can be shared through a URL, so a colleague asking for material receives a link rather than directions through the folders.", icon: "search", points: ["Less reliance on knowing the folders", "One link for everyone who asks"], page: 17 },
        { heading: "Comments for a word at the desk", body: "Feedback left directly on an asset stays with the work, so it does not depend on catching someone at the right moment.", icon: "message", points: ["Remarks that wait for the reader", "Less lost between calls"], page: 62 },
        { heading: "Mentions for a tap on the shoulder", body: "Mentioning a teammate makes it easier to bring them into the discussion on that asset, with autocomplete that takes folder visibility into account.", icon: "mention", points: ["The right colleague involved", "Visibility considered"], page: 66 },
        { heading: "Approvals for a corridor sign-off", body: "Teams request review, make changes and mark assets as approved, so a decision taken remotely is recorded instead of remembered.", icon: "approval", points: ["Decisions written down", "No reliance on who was there"], page: 67 },
      ],
      sources: [{ kind: "pdf", page: 88 }, { kind: "pdf", page: 17 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 66 }, { kind: "pdf", page: 86 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 68 }],
    },
    {
      kind: "timeline",
      id: "day",
      eyebrow: "Illustrative",
      heading: "A remote working day around one campaign",
      items: [
        { label: "Morning, one city", body: "A producer shares a saved search of the campaign’s current assets with designers working from several locations." },
        { label: "Late morning, from home", body: "A designer is unsure about a line of product copy, comments on the layout and mentions the copywriter." },
        { label: "Afternoon, another office", body: "The copywriter answers in the thread, and the designer revises the layout and replaces it in place." },
        { label: "End of the day", body: "The producer requests review and mentions the brand lead in the discussion; the brand lead’s working day is only just beginning several time zones away." },
        { label: "Next morning", body: "The brand lead’s comments are waiting on the asset, and the layout has been marked as approved." },
      ],
      sources: [{ kind: "pdf", page: 17 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 66 }, { kind: "pdf", page: 86 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 67 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "accordion",
      id: "on-purpose",
      eyebrow: "Good practice",
      heading: "What remote creative teams need to do deliberately",
      items: [
        {
          heading: "Make the library the first place to ask",
          summary: "If asset questions go to chat first, the library turns into an archive rather than a workspace.",
          icon: "help",
          body: [
            "Remote teams rely on written norms more than office teams do, because newcomers cannot pick them up by watching. A short, written rule, such as questions about a file go on the file, gives everyone the same expectation from their first day.",
          ],
        },
        {
          heading: "Replace ambient awareness with a routine",
          summary: "Remote colleagues cannot see who is working on what by looking around the room.",
          icon: "compass",
          body: [
            ["A lightweight routine does the job instead. A short written round-up at the same point each day, with a link to the ", { text: "shared view", page: 79 }, " the team works from, gives everyone the same picture of what is moving and what is waiting."],
          ],
        },
        {
          heading: "Introduce new starters to the library, not only the tools",
          summary: "A remote hire cannot learn where things live by overhearing colleagues.",
          icon: "graduation",
          body: [
            "Walk new colleagues through one finished asset: how it was found, what was said about it and how it was approved. Seeing how one piece of work was handled teaches the team’s habits faster than a description of them.",
          ],
        },
        {
          heading: "Keep access tidy as people come and go",
          summary: "Dispersed teams change shape often, and access should follow.",
          icon: "lock",
          body: [
            ["Remote contributors often join for one project. ", { text: "Folder-level permissions", page: 152 }, " let access be controlled more finely than organisation-wide, so a contributor can be given the folders their project needs and have access reviewed when the project ends."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 88 }, { kind: "pdf", page: 79 }, { kind: "pdf", page: 152 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about remote creative collaboration",
      items: [
        {
          question: "What shows that a remote team’s collaboration has moved into the library?",
          answer: [
            "Questions about files start appearing on the files rather than in chat. ",
            { text: "Contributor analytics", page: 185 },
            " help organisations understand who is adding content and participating in library activity, which shows whether the whole team has made the move or only some of it.",
          ],
        },
        {
          question: "How can a remote team keep track of permission changes as people join and leave?",
          answer: [
            { text: "Permission auditing", page: 170 },
            " means changes to permissions can be recorded in the audit history, which creates accountability for access decisions made by people who may never meet.",
          ],
        },
        {
          question: "Do remote creative teams need different habits for video than for images?",
          answer: ["For video, mostly more precision. A note only helps when the editor can find the moment it concerns, and ", { text: "timeline comments", page: 64 }, " attach it to a specific point in the video. Images and documents rarely need more than a clear comment on the asset."],
        },
      ],
      sources: [{ kind: "pdf", page: 185 }, { kind: "pdf", page: 170 }, { kind: "pdf", page: 64 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on collaborating from different places",
      variant: "compact",
      pages: [87, 17, 66, 67, 180, 90],
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
