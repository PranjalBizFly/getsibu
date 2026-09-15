/**
 * 199 · Creative Team Analytics — /analytics/creative-team-analytics
 *
 * Angle (cluster: team-analytics, primary): how different groups interact with one shared library — the roles
 * groups play, the handovers between them and the moments when group interaction changes. Makes no claim beyond
 * "visibility into how different groups interact". Team angles live on 200–203; operations on 195; leaders on 210.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how groups share a creative library in practice; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 199,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Analytics",
      lede: "Gain visibility into how the different groups in your organisation interact with one shared creative library, and learn to read what differences between those groups can and cannot tell you.",
      visual: { diagram: "library-activity", focus: "uploads" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 199 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "One library, many groups using it differently",
      body: [
        "Team analytics in GetSibu provide visibility into how different groups interact with the library. A single shared library serves photographers, editors, marketers, brand managers and regional colleagues at once, and each group relates to it in its own way.",
        "A library-wide picture averages those differences away. Some groups mostly supply material, some mostly draw on it and some mostly review what others produce. A library that looks lively overall can still be failing one group entirely, and that group is often the least likely to say so, because it has simply returned to its own folders.",
        [
          "Groups also shape how a library is governed. ",
          { text: "Team access management", page: 175 },
          " allows organisations to establish consistent permissions across groups of users, and ",
          { text: "contributor analytics", page: 185 },
          " complement the group view by showing which individuals add content and take part in library activity.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Groups that supply material", "Groups that draw on it", "Groups that review and decide", "Handovers between groups", "A group drifting away"],
      },
      highlight: {
        heading: "In practice",
        body: "A creative director sees that the social team barely interacts with the library, and learns it has been taking assets once and keeping private copies ever since.",
        tags: ["Creative directors", "Adoption", "Groups"],
      },
      glance: {
        heading: "Team analytics in brief",
        facts: [
          { label: "Area", value: "Analytics" },
          { label: "Shows", value: "How different groups interact with the library" },
          { label: "Individual view", value: "Contributor Analytics", page: 185 },
          { label: "Operations lens", value: "Creative Operations Analytics", page: 195 },
        ],
        actions: [{ kind: "page", page: 181, label: "Creative Asset Analytics" }]
      },
      sources: [{ kind: "pdf", page: 199 }, { kind: "pdf", page: 175 }, { kind: "pdf", page: 185 }, { kind: "pdf", page: 195 }, EXPLAINS],
    },
    {
      kind: "workflow",
      id: "handovers",
      eyebrow: "Handovers",
      heading: "How material passes between groups in a shared library",
      stages: [
        { label: "Makers supply", body: "Photographers, editors and designers bring in finished and working material. Their interaction is mostly contribution, and its rhythm follows shoots and projects." },
        { label: "Reviewers decide", body: "Creative leads and brand managers inspect what arrived and move it towards a decision. Assets can pass through an approval process with status history, recording whether content awaits review, is approved or requires changes.", page: 68 },
        { label: "Campaign teams adapt", body: "Marketing and channel teams look for approved material and shape it for their audiences. Their interaction is mostly searching, choosing and taking." },
        { label: "Colleagues reuse", body: "Sales, communications and other markets draw on finished work. Teams can share saved searches and library views with them without creating duplicate copies of the files.", page: 78 },
        { label: "Stewards maintain", body: "Library managers keep tags, structure and archives in order, touching a little of everything rather than a lot of any one area." },
      ],
      sources: [{ kind: "pdf", page: 68 }, { kind: "pdf", page: 78 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "moments",
      eyebrow: "Moments of change",
      heading: "When group interaction is most worth watching",
      tabs: [
        {
          label: "A group joins",
          heading: "Has a newly added department made the library its own?",
          icon: "users",
          body: [
            "Bringing another department into a library is the start of adoption, not the end of it. Its early interaction can suggest whether people are browsing out of curiosity or have begun working from the library as a matter of habit.",
            [
              "A narrow pattern is not always a problem. ",
              { text: "Department access", page: 176 },
              " lets departments receive access to only the creative libraries relevant to their work, so a group that joined to reach one kind of material may be well served while touching little else.",
            ],
          ],
          points: ["Curiosity compared with habit", "Narrow use can be by design"],
        },
        {
          label: "Teams merge",
          heading: "Two sets of habits in one group",
          icon: "refresh",
          body: [
            "When teams are combined, each arrives with its own naming, tagging and filing conventions. Interaction afterwards can hint at whether the merged group is settling on shared ways of working or carrying on as two groups under one name.",
            "Agreeing a common vocabulary early prevents the library from holding two parallel versions of the same organisation system.",
          ],
          points: ["Conventions converging or not", "One vocabulary for one group"],
        },
        {
          label: "Groups spread out",
          heading: "Colleagues in different places, one set of assets",
          icon: "globe",
          body: [
            [
              "Groups split across offices or working remotely tend to lean on the library more than colleagues who share a room, since there is no desk to walk over to. ",
              { text: "Remote creative collaboration", page: 88 },
              " can take place around the same assets through comments, mentions, approvals and shared searches.",
            ],
            "Interaction from a distributed group is therefore a reasonable test of whether collaboration really lives in the library or still runs through side channels.",
          ],
          points: ["Distance raises reliance on the library", "A test of where collaboration lives"],
        },
        {
          label: "A group goes quiet",
          heading: "Fading interaction deserves a conversation",
          icon: "flag",
          body: [
            "A group that used to interact regularly and gradually stops has usually found a workaround: a personal drive, an old shared folder, a chat channel full of attachments. The library has become less convenient than the alternative for some reason.",
            "Ask the group directly. The answer is often small and fixable, such as an unfamiliar tag, a missing view or a folder nobody told them about.",
          ],
          points: ["Workarounds replace the library", "Small causes, simple fixes"],
        },
      ],
      sources: [{ kind: "pdf", page: 176 }, { kind: "pdf", page: 88 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "fair-reading",
      eyebrow: "Considerations",
      heading: "Reading group patterns with care",
      items: [
        {
          heading: "Working groups rarely match the org chart",
          summary: "The people who use material together may sit in several departments.",
          icon: "network",
          body: [
            "A launch can involve product marketing, a film crew, a regional team and an agency, all working on the same assets for a few months. Thinking only in departmental terms can hide the group that matters most for a particular piece of work.",
          ],
        },
        {
          heading: "Small groups can carry large responsibilities",
          summary: "Light interaction is not a measure of importance.",
          icon: "shield",
          body: [
            "Legal, leadership communications and compliance colleagues may interact with the library rarely yet depend on finding exactly the right file when they do. Serve them with clear approval states and a dependable place to look, rather than judging them by volume.",
          ],
        },
        {
          heading: "Each group speaks its own dialect",
          summary: "Different words for the same thing keep groups apart in search.",
          icon: "text",
          body: [
            [
              "One group’s “hero image” is another’s “key visual”. Synonyms exist in a taxonomy precisely to relate different words for one idea, and GetSibu’s organisation system can draw on ",
              { text: "hierarchical tags and synonyms", page: 8 },
              ". Agreeing which terms are equivalent is a conversation between the groups, not a choice to impose on them.",
            ],
            [
              "Makers may describe footage by shoot and take while marketers look for product and mood, and ",
              { text: "most-searched tags", page: 193 },
              " provide insight into what users are frequently looking for, which is a practical place to start that conversation.",
            ],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 193 }, { kind: "pdf", page: 8 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about creative team analytics",
      items: [
        {
          question: "How do creative team analytics differ from folder access analytics?",
          answer: [
            { text: "Folder access analytics", page: 198 },
            " show which areas of the library receive attention. Team analytics start from the people instead, so the question becomes which groups are taking part rather than which folders are busy.",
          ],
        },
        {
          question: "How does creative team analytics relate to the analytics pages for particular teams?",
          answer: [
            "Team analytics concern groups of every kind, while ",
            { text: "marketing asset analytics", page: 200 },
            ", ",
            { text: "production analytics", page: 201 },
            ", ",
            { text: "agency analytics", page: 202 },
            " and ",
            { text: "brand asset analytics", page: 203 },
            " look at what analytics mean for one kind of team.",
          ],
        },
        {
          question: "How should creative team analytics be read after a reorganisation?",
          answer: "Carefully for a while. When groups are split or combined, the patterns from before and after describe different sets of people, so let the new groups settle before comparing one period with another.",
        },
      ],
      sources: [{ kind: "pdf", page: 199 }, { kind: "pdf", page: 198 }, { kind: "pdf", page: 200 }, { kind: "pdf", page: 201 }, { kind: "pdf", page: 202 }, { kind: "pdf", page: 203 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on groups and the shared library",
      variant: "compact",
      pages: [185, 175, 195, 200, 201, 203],
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
