/**
 * 234 · GetSibu for Social Media Teams — /use-cases/social-media-teams
 *
 * Angle (cluster: uc-marketing-brand): a searchable library for social content and incoming campaign assets under a
 * constant publishing rhythm — fast additions, fast retrieval, approved campaign material and assets kept after the
 * post goes out. Marketing Teams (213) owns the campaign library; Content Creators (227) own a channel's visual search;
 * Multi-Market Teams (225) owns regions. GetSibu is never described as publishing or scheduling posts.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how social media teams typically produce and reuse content; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 234,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Use Cases",
      lede: "How a social media team that posts every day can keep the assets behind its posts, its recurring series and the campaign material it receives in a library it can search as fast as it works.",
      visual: { diagram: "media-library", focus: "image,video" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 234 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A library that keeps pace with a daily posting rhythm",
      body: [
        "Social teams can use GetSibu to maintain a searchable library of the social content they produce and the campaign assets they are given.",
        "Social media runs to a constant rhythm: something goes out every day, often several times, on platforms that each want their own formats. The assets behind those posts are made quickly, used once and forgotten, which is exactly why they are hard to find when a throwback, a repeated follower question or a relaunch calls for them. Meanwhile campaign material keeps arriving from brand and marketing colleagues, and the social team has to be sure it is posting the approved version.",
        [
          "Speed of retrieval is what a social team notices first. ",
          { text: "Natural language asset search", page: 18 },
          " lets someone describe an asset the way they remember it, and ",
          { text: "saved asset searches", page: 17 },
          " turn a recurring content category, such as a weekly series, into a reusable view the whole team can open through a URL.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Assets kept after the post goes out", "Recurring series as saved searches", "Approved campaign material identified", "Quick additions in small batches", "Library activity by day and week"],
      },
      highlight: {
        heading: "In practice",
        body: "When a follower asks about a product featured months ago, the community manager describes the original image and finds it, instead of scrolling back through the feed to save a compressed copy.",
        tags: ["Social media managers", "Community managers", "Content designers"],
      },
      glance: {
        heading: "Social media teams in brief",
        facts: [
          { label: "Team", value: "Social media and community teams" },
          { label: "Typical material", value: "Post graphics, short videos, campaign assets and templates" },
          { label: "Builds on", value: "Team Asset Sharing", page: 78 },
          { label: "Supports", value: "Daily Library Analytics", page: 188 },
        ],
        actions: [{ kind: "route", path: "/use-cases", label: "More in Use Cases" }]
      },
      sources: [{ kind: "pdf", page: 234 }, { kind: "pdf", page: 18 }, { kind: "pdf", page: 17 }, { kind: "pdf", page: 78 }, { kind: "pdf", page: 188 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "capabilities",
      eyebrow: "What social teams use",
      heading: "What a social team uses to keep up",
      items: [
        {
          heading: "Drag and drop upload",
          body: "A few finished post graphics can go straight into the library by drag and drop between other tasks, with no integration to configure.",
          icon: "upload",
          points: ["Small batches between posts", "Nothing to set up first"],
          page: 127,
        },
        {
          heading: "Approved-only views",
          body: "Campaign material from brand and marketing can be taken from views limited to content that has completed the required review.",
          icon: "approval",
          points: ["Approved versions for posting", "Drafts stay with the people making them"],
          page: 103,
        },
        {
          heading: "Comments on the asset",
          body: "A quick note on a graphic or caption card can be left on the asset itself, so feedback stays connected to it rather than scattered across chat.",
          icon: "message",
          points: ["Feedback attached to the graphic", "No scrolling back through chat"],
          page: 73,
        },
        {
          heading: "Review status",
          body: "Review status indicates whether a piece still needs attention or has completed approval, which matters when the posting slot is close.",
          icon: "check",
          points: ["Ready or not, clearly shown", "Fewer last-minute checks"],
          page: 76,
        },
        {
          heading: "Duplicate detection",
          body: "The same graphic saved by two people under different names can be identified as a copy, including files that were re-encoded along the way.",
          icon: "copy",
          points: ["Copies from several colleagues spotted", "Less clutter in results"],
          page: 40,
        },
        {
          heading: "Expiry information",
          body: "Posts tied to an offer, a partnership or a licensed track can carry expiry information that helps identify when their assets should no longer be used.",
          icon: "calendar",
          points: ["Time-limited content identified", "Partnership assets with end dates"],
          page: 104,
        },
      ],
      sources: [{ kind: "pdf", page: 127 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 73 }, { kind: "pdf", page: 76 }, { kind: "pdf", page: 40 }, { kind: "pdf", page: 104 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "challenges",
      eyebrow: "Recurring challenges",
      heading: "What a social team manages alongside the posting calendar",
      items: [
        {
          heading: "Keeping assets once the post is live",
          summary: "After publishing, the source files behind a post tend to vanish.",
          icon: "archive",
          body: [
            "A designer exports a graphic, it gets posted, and the working file stays on a laptop or in a chat attachment. Weeks later the same graphic is needed with one word changed, and nobody can find the original.",
            [{ text: "Image version management", page: 98 }, " keeps different versions of a visual in one structured record, so the posted graphic and its later variant belong together."],
          ],
        },
        {
          heading: "One idea, many formats",
          summary: "Each platform wants its own proportions and lengths.",
          icon: "layers",
          body: [
            "A single campaign idea can become a square image, a vertical video and a landscape banner. Treated as unrelated files, the set is almost impossible to gather again for a relaunch.",
            ["A campaign tag applied to every format keeps the set findable together, and a ", { text: "structured taxonomy", page: 8 }, " has room for channel and format as well as campaign."],
          ],
        },
        {
          heading: "Throwbacks and reposts",
          summary: "Old content is a resource only if it can be found and is still cleared for use.",
          icon: "history",
          body: [
            "Anniversaries, recurring events and follower questions all bring earlier posts back. The difficulty is finding the original assets and knowing whether the music, footage or partner branding in them can be used again.",
            ["Short videos from past posts can be ", { text: "indexed with AI-generated information", page: 25 }, ", so they are discoverable without watching each one again."],
          ],
        },
        {
          heading: "Library analytics are not engagement analytics",
          summary: "Reach and likes live on the platforms; the library shows how assets are handled internally.",
          icon: "chart",
          body: [
            "Engagement is measured by the social platforms themselves. An asset library answers different questions: how much content the team adds, what it looks for and which assets it keeps returning to.",
            [{ text: "Daily library analytics", page: 188 }, " give a short-term view of uploads, comments on assets and storage activity, while ", { text: "weekly analytics", page: 189 }, " offer a broader perspective on growth and usage."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 98 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 25 }, { kind: "pdf", page: 188 }, { kind: "pdf", page: 189 }, { kind: "pdf", page: 182 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A campaign week on top of the regular series",
      team: "A social media team",
      situation: "A social media team is covering a product campaign alongside its usual weekly series. Brand has delivered the campaign assets, and the team also wants to revive a popular post from last year.",
      steps: [
        {
          heading: "The campaign set arrives as a link",
          body: ["The social lead opens the ", { text: "shared view", page: 79 }, " the brand team sent, so everyone on the team works from the same set of campaign assets."],
        },
        {
          heading: "Last year’s graphic is found by its headline",
          body: ["For the revival, a designer searches for the headline printed on last year’s graphic, which ", { text: "OCR-powered search", page: 15 }, " can find inside the image."],
        },
        {
          heading: "The week’s clips go in",
          body: ["The video editor adds the short edits and checks their ", { text: "processing status", page: 144 }, " to see whether each is queued, processing or ready."],
        },
        {
          heading: "A typo is caught before posting",
          body: ["The social lead ", { text: "mentions the designer", page: 86 }, " on a caption card with a typo, and the corrected card replaces the first one in the same asset."],
        },
        {
          heading: "The week is read back in the library",
          body: ["On Friday, ", { text: "most-searched tags", page: 193 }, " show what the team looked for most often, which points to a tag the weekly series has been missing."],
        },
      ],
      outcome: "The week’s posts go out from assets the team could actually find, and the new material stays in the library for the next time someone needs it.",
      link: { page: 17, label: "Saved Asset Searches" },
      sources: [{ kind: "pdf", page: 79 }, { kind: "pdf", page: 15 }, { kind: "pdf", page: 144 }, { kind: "pdf", page: 86 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 193 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about GetSibu for social media teams",
      items: [
        {
          question: "Can a social media team work from the same library as brand and marketing?",
          answer: ["Yes. GetSibu gives creative, marketing, production and brand teams a ", { text: "shared source of truth", page: 10 }, ", and permissions and approval workflows help ensure that people access and distribute the right content."],
        },
        {
          question: "Can a social media team find imagery that matches a campaign’s mood?",
          answer: [{ text: "AI mood detection", page: 35 }, " can identify visual mood characteristics and make them searchable, which helps when a brief describes a feeling rather than a subject."],
        },
        {
          question: "Can freelancers who make content for a social team be given limited access?",
          answer: ["Yes. ", { text: "Individual permissions", page: 157 }, " provide targeted access when organisational roles alone are not granular enough, which suits a freelancer producing one series."],
        },
        {
          question: "Can a social media team keep templates and short videos in the same place as images?",
          answer: ["Yes. A ", { text: "centralised creative asset library", page: 6 }, " brings creative assets together in one location, which reduces the confusion of several storage places and disconnected versions of one file."],
        },
      ],
      sources: [{ kind: "pdf", page: 10 }, { kind: "pdf", page: 35 }, { kind: "pdf", page: 157 }, { kind: "pdf", page: 6 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More for teams publishing every day",
      variant: "compact",
      pages: [17, 18, 103, 188, 213, 227],
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
