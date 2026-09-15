/**
 * 79 · Shared Creative Views — /features/shared-creative-views
 *
 * Angle (cluster: sharing-views): recurring collections of assets shared through a URL as a common reference a group
 * works from over time. Saved Asset Searches (17) owns saving a search; Team Asset Sharing (78) owns avoiding
 * duplicate copies.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how groups use a shared reference set in creative work; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 79,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Collaboration",
      lede: "See how a saved view lets a recurring collection of assets travel as a URL, and how a group can use that link as its common reference in meetings, handovers and planning.",
      visual: { diagram: "search-signals", focus: "comments" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 79 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "One collection of assets the whole group can open",
      body: [
        "Saved views in GetSibu let a recurring collection of assets be shared through a URL. Collaboration becomes easier because everyone involved is pointed at the same set of material.",
        "A great deal of creative collaboration keeps returning to the same groups of assets: this season’s product imagery, one client’s current deliverables, the footage for a series in production. Without a shared reference, each person reconstructs the set their own way. A conversation about “the new product shots” then involves several slightly different collections, and nobody notices until someone asks about an image the others have never seen.",
        [
          "A shared view gives the group one reference. It builds on ",
          { text: "saved asset searches", page: 17 },
          ", which make a frequently used search reusable, and it puts ",
          { text: "team asset sharing", page: 78 },
          " into practice, since colleagues pass on the view rather than copies of the files. Once everyone is looking at the same assets, the conversation itself belongs in ",
          { text: "comments on those assets", page: 62 },
          ".",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Recurring collections of assets", "Shared through a URL", "One reference for the whole group", "Conversations about the same set", "A link that fits into briefs and plans"],
      },
      highlight: {
        heading: "In practice",
        body: "Before a campaign planning session, a social media lead sends the team one view of the campaign’s assets, so planning starts from a single collection rather than from several private folders.",
        tags: ["Social teams", "Producers", "Account teams"],
      },
      glance: {
        heading: "Shared views in brief",
        facts: [
          { label: "Area", value: "Collaboration" },
          { label: "Shares", value: "Recurring collections of assets" },
          { label: "Travels as", value: "A URL" },
          { label: "Search side", value: "Saved Asset Searches", page: 17 },
        ],
        actions: [{ kind: "route", path: "/features/collaboration", label: "More in Collaboration" }]
      },
      sources: [{ kind: "pdf", page: 79 }, { kind: "pdf", page: 17 }, { kind: "pdf", page: 78 }, { kind: "pdf", page: 62 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "moments",
      eyebrow: "Where it helps",
      heading: "Moments when a shared view keeps a group together",
      tabs: [
        {
          label: "Review meetings",
          heading: "Start everyone on the same collection",
          icon: "calendar",
          body: [
            "A recurring review meeting loses its first minutes to establishing what is being looked at. When the organiser circulates one view beforehand, every participant arrives having opened the same assets, whether they are in the room or joining from elsewhere.",
            "Sent again afterwards, the same link lets anyone who missed the meeting open the view the meeting worked from, rather than a description of it.",
          ],
          points: ["No time spent agreeing what is on the table", "The same set for those who missed it"],
        },
        {
          label: "Handovers",
          heading: "Pass on the collections, not a guided tour",
          icon: "users",
          body: [
            "When work moves from a production team to a marketing team, or someone covers for a colleague on leave, the hardest thing to transfer is knowing where the relevant material is. Links to the views the previous owner relied on carry that knowledge in a form the next person can use straight away.",
            "The person covering also starts from the set their colleague would have used, so the work does not drift simply because someone new went looking for the files.",
          ],
          points: ["Working context handed over as links", "Less dependence on one person’s memory"],
        },
        {
          label: "Briefs and plans",
          heading: "Put the link where the work is planned",
          icon: "document",
          body: [
            "Because a shared view travels as a URL, it can sit in the places a team already reads: a creative brief, a production schedule, a meeting invitation. People follow it from the document that told them about the work, instead of searching the library separately.",
            "The pairing also helps later. Someone rereading the brief after the project has finished can follow the same link back into the library, rather than asking who remembers where the material was kept.",
          ],
          points: ["The collection one step from the brief", "Works wherever a link can be written"],
        },
      ],
      sources: [{ kind: "pdf", page: 79 }, EXPLAINS],
    },
    {
      kind: "workflow",
      id: "life-of-a-view",
      eyebrow: "Over time",
      heading: "How a shared view stays useful from first link to retirement",
      stages: [
        { label: "Spot the recurring collection", body: "Notice a set of assets that several people keep needing together, week after week or project after project." },
        { label: "Define it once", body: "Save the search that gathers that set, so the collection is described in one place rather than in several people’s heads." },
        { label: "Share it where people look", body: "Send the URL to the group and add it to the brief or plan that the collection supports." },
        { label: "Work from it together", body: "Colleagues open the same collection and discuss individual pieces in the comments on each asset." },
        { label: "Replace it when the need changes", body: "If the set no longer matches the work, save a revised search and circulate its link, rather than letting people build private variations." },
        { label: "Let it go when the work ends", body: "Stop circulating views for needs that have finished, and keep only those a future project is likely to reopen." },
      ],
      sources: [{ kind: "pdf", page: 79 }, { kind: "pdf", page: 17 }, { kind: "pdf", page: 62 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "worth-sharing",
      eyebrow: "Good practice",
      heading: "Making a shared view worth passing on",
      items: [
        {
          heading: "Say what the link gathers",
          summary: "A URL on its own does not tell the recipient what they are about to open or why.",
          icon: "text",
          body: [
            "When you send a view, add a sentence describing the collection and what it is for: “current imagery for the spring range, for social planning”. The recipient knows at once whether it is the set they need, and the description survives when the link is forwarded.",
          ],
        },
        {
          heading: "Keep one view to one recurring need",
          summary: "A catch-all collection is harder to discuss than several focused ones.",
          icon: "filter",
          body: [
            "It is tempting to create one broad view that serves everyone. In practice, a collection that mixes a campaign’s social assets with its print work and its raw photography gives each group more to scroll past and makes conversations less precise.",
            "Focused views, each serving one group’s recurring work, are easier to name, to share and to retire when that work finishes.",
          ],
        },
        {
          heading: "Keep feedback on the assets, not about the view",
          summary: "The view is the way in; the discussion belongs to the individual pieces.",
          icon: "message",
          body: [
            ["Feedback such as “the third image in the set looks dated” is ambiguous once the set is rebuilt or seen in a different order. Writing it on the image itself, and using a ", { text: "threaded discussion", page: 63 }, " when it needs replies, keeps the point attached to the work it concerns."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 79 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 63 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about shared creative views",
      items: [
        {
          question: "Who should look after a shared creative view that several teams rely on?",
          answer: "Usually whoever leads the recurring work it supports. Shared views tend to outlive the person who created them, so a named owner decides when the collection should change and tells the group when a replacement link is in use.",
        },
        {
          question: "How do shared creative views differ from saved asset searches?",
          answer: "Saved asset searches are about keeping a search you run often. Shared creative views look at the same idea from the collaboration side: the saved collection becomes a common reference a group passes around and works from.",
        },
        {
          question: "Does a shared creative view mean the assets in it are approved?",
          answer: [
            "Not in itself. Sharing a view says nothing about whether the pieces in it have been signed off, which remains a decision about each asset. ",
            { text: "Review status", page: 76 },
            " indicates whether an asset still needs attention or has completed the approval process.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 79 }, { kind: "pdf", page: 17 }, { kind: "pdf", page: 76 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on sharing collections of assets",
      variant: "compact",
      pages: [78, 17, 62, 76, 88, 80],
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
