/**
 * 96 · Campaign Asset Versioning — /features/campaign-asset-versioning
 *
 * Angle (cluster: versioning): campaign teams avoiding disconnected copies — where copies come from while many people
 * touch the same material, and how versions and shared views keep one source through a campaign. Creative Asset
 * Versioning (91) owns replace-in-place in general; 97–99 own the habits of each medium.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how campaign material is revised and shared; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 96,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Versioning & Asset Management",
      lede: "Where disconnected copies come from while a campaign is being made, and how campaign teams can keep revisions of their key visuals, films and decks as versions of the same assets from brief to launch.",
      visual: { diagram: "version-record", focus: "files" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 96 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Campaign revisions without a scatter of copies",
      body: [
        "Campaign teams working in GetSibu can keep versions of their creative files without creating separate, disconnected copies of each one.",
        "Campaigns are where copies breed fastest. Many people handle the same material in a short time: designers revise, an agency delivers another round, stakeholders download a file to mark it up, and each channel owner saves whatever they were sent. By launch week one key visual can exist in many places, and a late correction reaches only some of them.",
        [
          "A copy becomes disconnected the moment a change to the original stops reaching it. A ",
          { text: "centralised creative asset library", page: 6 },
          " reduces the confusion that disconnected versions of the same file cause, and versioning carries that into the revisions themselves. ",
          { text: "Campaign review", page: 70 },
          " can then take place on the assets rather than on attachments.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["One asset per campaign piece", "Revisions kept as versions", "Channel formats as separate assets", "Share views rather than files", "Fewer stray copies at launch"],
      },
      highlight: {
        heading: "In practice",
        body: "When the offer line on a campaign banner changes, the designer replaces the banner asset. Channel owners working from the campaign’s shared search open the corrected file, not the one they saved earlier.",
        tags: ["Campaigns", "Marketing", "Agencies"],
      },
      glance: {
        heading: "Campaign versioning in brief",
        facts: [
          { label: "Used by", value: "Campaign and marketing teams" },
          { label: "Avoids", value: "Separate disconnected copies" },
          { label: "Review", value: "Campaign Review" },
          { label: "Sharing", value: "Team Asset Sharing", page: 78 },
        ],
        actions: [{ kind: "route", path: "/features/asset-management", label: "More in Versioning & Asset Management" }]
      },
      sources: [{ kind: "pdf", page: 96 }, { kind: "pdf", page: 6 }, { kind: "pdf", page: 70 }, { kind: "pdf", page: 78 }, { kind: "pdf", page: 17 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "sources-of-copies",
      eyebrow: "Common sources",
      heading: "Where disconnected campaign copies come from",
      items: [
        {
          heading: "Attachments sent round for comment",
          summary: "Every emailed file is a copy that stops updating the moment it is sent.",
          icon: "message",
          body: [
            "Stakeholders asked for their views download the visual, annotate it and send it back, and the annotated file becomes one more candidate for “the latest”.",
            ["Leaving ", { text: "comments directly on the asset", page: 62 }, " keeps that conversation on the original instead of on a marked-up duplicate."],
          ],
          points: ["Feedback on the original", "No annotated duplicates to reconcile"],
        },
        {
          heading: "Rounds delivered by an agency",
          summary: "External rounds tend to arrive as new files with new names.",
          icon: "briefcase",
          body: [
            "When an agency returns a revised key visual, the easy move is to save it beside the last one. Replacing the existing asset with the revision keeps the rounds of that visual together in a single record.",
            "Agreeing this at the start of the relationship matters, because the agency’s own naming habits will otherwise arrive with every delivery.",
          ],
        },
        {
          heading: "Files saved per channel",
          summary: "Channel owners often keep a private copy of what they were given.",
          icon: "megaphone",
          body: [
            ["Social, web and retail teams each store the file they received so they can find it again. A ", { text: "saved search shared through a URL", page: 17 }, " gives them a reusable view of the campaign’s assets instead, and sharing saved searches and library views does not create duplicate copies of the same files."],
          ],
          points: ["One view per campaign", "Nothing to re-send after a fix"],
        },
      ],
      sources: [{ kind: "pdf", page: 62 }, { kind: "pdf", page: 96 }, { kind: "pdf", page: 93 }, { kind: "pdf", page: 17 }, { kind: "pdf", page: 78 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "copies-versus-versions",
      eyebrow: "The difference",
      heading: "A campaign run on copies compared with one run on versions",
      columns: ["Copies passed between people", "Versions in GetSibu"],
      emphasis: 1,
      rows: [
        ["A late correction", "Reaches only the copies someone updates", "Replaces the asset everyone works from"],
        ["Earlier rounds", "Spread across inboxes and drives", "Kept as versions of the same asset"],
        ["Reviewing a round", "Marked-up attachments in several inboxes", "Discussion on the asset itself"],
        ["Finding campaign material", "Asking who has the latest file", "Searching one library for the current pieces"],
        ["After launch", "Near-identical files to reconcile", "One record per campaign piece"],
      ],
      sources: [{ kind: "pdf", page: 96 }, { kind: "pdf", page: 93 }, { kind: "pdf", page: 70 }, { kind: "pdf", page: 16 }, EXPLAINS],
    },
    {
      kind: "workflow",
      id: "campaign-stages",
      eyebrow: "Campaign stages",
      heading: "How versions follow a campaign from brief to archive",
      stages: [
        { label: "First concepts", body: "Early concepts enter the library as assets, so the first round already has a home rather than living inside a presentation." },
        { label: "Review rounds", body: "Each revised round replaces its asset, and stakeholders discuss the version in front of them." },
        { label: "Sign-off", body: "Review status shows which pieces have completed the approval process and which still need attention.", page: 76 },
        { label: "Adaptation", body: "Channel formats are made from the approved piece as separate assets, each gathering its own versions from then on." },
        { label: "Live fixes", body: "Corrections after launch replace the live asset instead of adding a “fixed” file next to it." },
        { label: "After the campaign", body: "Each finished piece keeps its rounds together in one record, something to draw on when the next campaign is briefed." },
      ],
      sources: [{ kind: "pdf", page: 96 }, { kind: "pdf", page: 70 }, { kind: "pdf", page: 76 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about campaign asset versioning",
      items: [
        {
          question: "How does campaign asset versioning prevent disconnected copies?",
          answer: "Revisions replace the campaign asset that everyone works from, and earlier rounds stay as its versions, so there is far less reason to save and send a separate file for each change.",
        },
        {
          question: "How can a campaign team tell which version was approved?",
          answer: [{ text: "Approval history", page: 77 }, " provides a record of review activity that reduces confusion around which version was accepted, instead of relying on whoever forwarded the file last."],
        },
        {
          question: "What should happen to campaign assets once the campaign ends?",
          answer: ["Finished campaign material is often worth keeping for reference and reuse. ", { text: "Asset archiving", page: 108 }, " is a way to retain that historical content while keeping it out of everyday searches."],
        },
      ],
      sources: [{ kind: "pdf", page: 96 }, { kind: "pdf", page: 77 }, { kind: "pdf", page: 108 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More for campaign teams",
      variant: "compact",
      pages: [91, 70, 17, 77, 108, 213],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the marketing teams use case." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Bring Order to Creative Chaos",
      conversionPage: 399,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 399 }],
    },
  ],
};

export default page;
