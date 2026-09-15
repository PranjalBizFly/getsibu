/**
 * 246 · Slack Integration — /integrations/slack (HELD draft; own claim: slack)
 *
 * Angle: asset activity and notifications meeting team communication. The channel coordinates the
 * work; feedback and decisions stay on the asset. page 251 owns events reaching business
 * applications; Webhook Automation (257) owns downstream workflows built on webhook events.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how creative teams use chat alongside an asset library; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 246,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Integrations",
      lede: "What connecting Slack to GetSibu means for a creative team: library activity close to the conversations where work is coordinated, with feedback and decisions still kept on the assets they concern.",
      visual: { diagram: "connector-flow", label: "Slack" },
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 246 }, { kind: "pdf", page: 73 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Library activity beside the team’s conversation",
      body: [
        "Slack integration can connect asset activity and notifications with team communication workflows. For a creative team, that can bring activity on assets in the GetSibu library closer to the channels where people coordinate their day.",
        "A great deal of creative coordination happens in chat. Someone asks whether the new cut is ready, a designer wants to know where the approved logo lives, and a producer checks whether the client’s changes have gone in. When chat and library are unconnected, each of those questions waits for a person to go and look, then type the answer back into the channel.",
        [
          "The connection is most useful when each tool keeps its own job. The channel is good at quick coordination, while ",
          { text: "team feedback", page: 73 },
          " stays connected to the asset rather than being scattered across email, chat and project-management systems. The asset also carries its own ",
          { text: "activity history", page: 118 },
          ", so a message about it can be brief and leave the record where it already is.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Asset activity near team conversation", "Notifications in communication workflows", "Channels for coordinating work", "Feedback kept on the asset", "Decisions recorded in the library"],
      },
      highlight: {
        heading: "In practice",
        body: "A producer asks in the campaign channel whether the hero image has been signed off. Rather than retyping an answer from memory, a colleague points to the image’s review status in the library.",
        tags: ["Producers", "Designers", "Marketing"],
      },
      glance: {
        heading: "The Slack integration in brief",
        facts: [
          { label: "Area", value: "Integrations" },
          { label: "Connects", value: "Asset activity and team communication" },
          { label: "Feedback lives in", value: "Asset Comments", page: 62 },
          { label: "Other automation", value: "Webhook Automation", page: 257 },
        ],
      },
      sources: [{ kind: "pdf", page: 246 }, { kind: "pdf", page: 73 }, { kind: "pdf", page: 118 }, { kind: "pdf", page: 76 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 257 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "who-holds-what",
      eyebrow: "Who holds what",
      heading: "What a channel and the library are each suited to",
      intro: "A connected channel works best when nobody expects it to do the library’s job.",
      columns: ["A team channel in Slack", "The GetSibu library"],
      emphasis: 1,
      rows: [
        ["Day-to-day coordination", "Plans, reminders and who is on what", "Where the work itself is stored, organised and searched"],
        ["Feedback on a piece of work", "Easily buried as the conversation moves on", "Comments left directly on the asset"],
        ["Arguing one issue through", "Mixed in with unrelated messages", "A threaded discussion around that issue"],
        ["Bringing in a colleague", "A mention in a busy channel", "A mention inside the asset’s discussion"],
        ["Knowing what was accepted", "Whatever the latest message seemed to say", "Approval history kept with the asset"],
      ],
      sources: [{ kind: "pdf", page: 1 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 66 }, { kind: "pdf", page: 77 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "habits",
      eyebrow: "What to agree",
      heading: "Habits that keep a connected channel worth reading",
      items: [
        {
          heading: "Agree where feedback is written",
          summary: "Once library activity shows up in chat, it is tempting to reply there, where feedback is hardest to find again.",
          icon: "message",
          body: [
            "A reply in the channel is useful for a few minutes and then scrolls away from the work it describes. Agree as a team that comments about a layout, a cut or a document go on the asset, and that the channel is for coordinating around it.",
            ["GetSibu turns creative feedback into an organised workflow by attaching discussions directly to the relevant asset, which is the idea behind ", { text: "creative feedback management", page: 74 }, "."],
          ],
        },
        {
          heading: "Compare the channel with the folder",
          summary: "The people who can read a channel are not necessarily the people who can open a folder.",
          icon: "lock",
          body: [
            "Channel membership is often broad, while access to creative work is deliberately narrower. An unreleased campaign or a client’s material may be visible to a small group in the library and still be discussed in a channel that many more people read.",
            ["In GetSibu, ", { text: "folder-level permissions", page: 152 }, " control access more precisely than organisation-wide access, and ", { text: "new folders can remain private", page: 154 }, " until access is explicitly granted. Before a channel becomes the usual place to talk about a sensitive area, check that its membership matches who is meant to see the work."],
          ],
        },
        {
          heading: "Keep the volume useful",
          summary: "A channel that carries every small event soon teaches people to stop reading it.",
          icon: "gauge",
          body: [
            "Notifications help only while people still pay attention to them. When routine activity fills a channel, the one message someone genuinely needs is easy to miss among the rest.",
            "After the first few weeks, ask the people in the channel whether what they see still helps them coordinate. If it has become background noise, say so before the channel is ignored altogether.",
          ],
        },
        {
          heading: "Bring conclusions back to the asset",
          summary: "A decision reached in chat is not part of the asset’s record until someone puts it there.",
          icon: "history",
          body: [
            "Chat is a good place to settle a quick question and a poor place to keep the answer. When a conversation in the channel ends in a conclusion about a piece of work, write it on the asset, where colleagues who were not in the conversation will look for it.",
            ["Over time those notes add up to ", { text: "asset discussion history", page: 75 }, ", which lets teams understand how feedback evolved instead of reconstructing it from old messages."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 246 }, { kind: "pdf", page: 74 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 154 }, { kind: "pdf", page: 75 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A campaign channel that stops relaying file locations",
      team: "A marketing team",
      situation: "A marketing team coordinates a seasonal campaign in a Slack channel shared by two designers, a copywriter and the campaign lead. The campaign’s assets are kept in GetSibu.",
      steps: [
        { heading: "Chat and library are connected", body: "With the Slack integration in place, activity on the campaign’s assets and the team’s own conversation are no longer kept entirely apart." },
        { heading: "The team sets one rule", body: "Feedback about an image or a layout is left as a comment on that asset; the channel is kept for planning, deadlines and quick questions." },
        { heading: "A version question gets a pointer", body: ["When the campaign lead asks which banner is current, a designer sends her to the asset, where ", { text: "revision tracking", page: 100 }, " helps show what changed and which version is active."] },
        { heading: "A headline debate moves to the asset", body: "A disagreement about the headline starts in the channel. The copywriter opens a thread on the banner itself and mentions the designer, and the discussion continues there." },
        { heading: "The decision is marked", body: ["Once the wording is settled, the campaign lead marks the banner as approved through the ", { text: "approval workflow", page: 67 }, ", so the next person who wonders can check the asset instead of asking."] },
      ],
      outcome: "The channel remains a good place to coordinate the campaign, and anyone looking for the feedback or the decision finds it on the banner rather than somewhere in the scrollback.",
      link: { page: 213, label: "GetSibu for Marketing Teams" },
      sources: [{ kind: "pdf", page: 246 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 100 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 66 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 213 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about the Slack integration",
      items: [
        {
          question: "Does the Slack integration replace feedback left on GetSibu assets?",
          answer: ["It serves a different purpose. The integration can connect library activity with team communication, while GetSibu ", { text: "keeps communication close to the asset", page: 85 }, " so people can see exactly what a discussion relates to. Feedback about the work belongs on the asset; coordination around it can happen in the channel."],
        },
        {
          question: "How is the Slack integration different from mentioning a teammate in GetSibu?",
          answer: ["A mention reaches one person about one asset: ", { text: "team mentions", page: 66 }, " bring a colleague into the asset discussion, and folder-aware autocomplete helps ensure that person has appropriate visibility. The integration concerns the wider group, connecting library activity with the channels the team already communicates in."],
        },
        {
          question: "Can activity in GetSibu start work in systems other than Slack?",
          answer: ["Yes, by other routes. Through ", { text: "webhook automation", page: 257 }, ", webhook events can trigger downstream workflows when assets, comments, approvals or other supported events occur, and developers can use APIs and webhooks for ", { text: "developer automation", page: 278 }, " of repetitive asset management work."],
        },
        {
          question: "Can a producer follow a campaign’s assets without reading every Slack message about them?",
          answer: ["Yes. A saved view of the campaign’s assets can be shared through a URL as a ", { text: "shared creative view", page: 79 }, ", so a producer can look at the work itself rather than piecing its progress together from the conversation."],
        },
      ],
      sources: [{ kind: "pdf", page: 85 }, { kind: "pdf", page: 66 }, { kind: "pdf", page: 257 }, { kind: "pdf", page: 278 }, { kind: "pdf", page: 79 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on connecting library activity",
      variant: "compact",
      pages: [257, 278, 62, 74, 85, 79],
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
