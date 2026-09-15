/**
 * 108 · Asset Archiving — /features/asset-archiving
 *
 * Angle (cluster: asset-lifecycle): retaining historical content without letting it clutter everyday discovery;
 * the choice between keeping content current, archiving it or removing it, and what makes an archive useful later.
 * Asset Deletion (109) owns removal under policy and permissions; Asset Recovery (110) owns getting content back.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of archiving practice in creative libraries; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 108,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Versioning & Asset Management",
      lede: "How to choose between keeping content current, archiving it and removing it, what to add to finished work before it is archived, and how one team kept past campaigns without letting them get in the way of everyday discovery.",
      visual: { diagram: "version-record", focus: "lifecycle" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 108 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Keeping the past without letting it crowd the present",
      body: [
        "Archiving in GetSibu gives teams a way to retain historical content while stopping old material from interfering with everyday asset discovery.",
        "Every creative library accumulates finished work: past campaigns, retired product photography, earlier brand identities, films that have run their course. Left where it is, that material competes with current work whenever someone looks for something, and sooner or later a colleague picks up an out-of-date file because it looked right. Deleted, it takes with it the reference material, the evidence of what was published and the raw material for future projects. Archiving is meant to avoid both outcomes.",
        [
          "It is one of several choices at the end of an asset’s working life. ",
          { text: "Expiry information", page: 104 },
          " can help identify content that should no longer be used, ",
          { text: "asset usage tracking", page: 106 },
          " helps show which assets remain inactive, and when content should go altogether, ",
          { text: "asset deletion", page: 109 },
          " is the route instead.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Historical content retained", "Everyday discovery kept current", "An alternative to deletion", "Context recorded before archiving", "Archiving as a deliberate decision"],
      },
      highlight: {
        heading: "In practice",
        body: "When a brand refresh goes live, the previous identity’s logos and templates are archived. Designers stop meeting them in daily work, and the organisation keeps the record of how its identity evolved.",
        tags: ["Brand", "Campaigns", "Library managers"],
      },
      glance: {
        heading: "Archiving in brief",
        facts: [
          { label: "Retains", value: "Historical content" },
          { label: "Protects", value: "Everyday asset discovery" },
          { label: "Alternative to", value: "Asset Deletion", page: 109 },
          { label: "Often prompted by", value: "Expiring Creative Assets", page: 104 },
        ],
        actions: [{ kind: "route", path: "/features/asset-management", label: "More in Versioning & Asset Management" }]
      },
      sources: [{ kind: "pdf", page: 108 }, { kind: "pdf", page: 104 }, { kind: "pdf", page: 106 }, { kind: "pdf", page: 109 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "three-choices",
      eyebrow: "At the end of active use",
      heading: "Keep it current, archive it or remove it",
      tabs: [
        {
          label: "Keep current",
          heading: "When older content is still part of today’s work",
          icon: "check",
          body: [
            "Age alone is a poor reason to archive. Brand photography that still represents the organisation, product shots of products still on sale and templates people use every week may be years old and entirely current.",
            ["The test is whether people should still be reaching for the asset. If they should, it belongs where they look first, and ", { text: "approved-only views", page: 103 }, " let colleagues reach content that has completed the required review process."],
          ],
          points: ["Age is not the test", "Whether it should still be used is"],
        },
        {
          label: "Archive",
          heading: "When content has a history but no current job",
          icon: "archive",
          body: [
            "Finished campaigns, superseded identities, delivered client projects, footage from past productions and earlier editions of guidelines rarely need to be seen day to day. They are still valuable: as reference for new work, as a record of what went out, and as material for retrospectives, anniversaries and case studies.",
            "Client work needs particular thought: what an agency may keep once a project ends is often set by the client agreement rather than by the agency’s own preference.",
          ],
          points: ["Reference for future work", "A record of what was published"],
        },
        {
          label: "Remove",
          heading: "When content should not survive",
          icon: "trash",
          body: [
            "Some material has no historical value worth keeping: mistaken uploads, unnecessary copies of files that already exist, and test exports nobody meant to share. Archiving these only moves clutter somewhere less visible.",
            ["For those, ", { text: "asset deletion", page: 109 }, " is the honest choice, and ", { text: "duplicate asset management", page: 112 }, " helps identify unnecessary copies in the first place."],
          ],
          points: ["Mistaken uploads and test exports", "Copies of files that already exist"],
        },
      ],
      sources: [{ kind: "pdf", page: 103 }, { kind: "pdf", page: 109 }, { kind: "pdf", page: 112 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "useful-archive",
      eyebrow: "Archives worth opening",
      heading: "What makes archived work useful when someone needs it",
      items: [
        {
          heading: "Context added while memories are fresh",
          summary: "The people who know a campaign best are rarely around when its archive is opened.",
          icon: "tag",
          body: [
            ["Record the essentials before archiving work: the campaign, client, market and what each piece was used for. A consistent ", { text: "tag taxonomy", page: 8 }, " helps, because a campaign or season tag applied the same way every time gives a future reader a reliable way in."],
          ],
          points: ["Campaign, client and market", "What each piece was used for"],
        },
        {
          heading: "Evidence of what was approved",
          summary: "Questions about old work are usually questions about sign-off.",
          icon: "approval",
          body: [
            ["When a past campaign is queried, the useful answer is the approved piece, not a draft that happened to be saved alongside it. ", { text: "Approval history", page: 77 }, " provides a record of review activity that reduces confusion about which version was accepted, and it is worth making sure the approved piece is clearly marked before a campaign is set aside."],
          ],
        },
        {
          heading: "The names of the people who made it",
          summary: "Credits and rights questions often arrive long after a project ends.",
          icon: "users",
          body: [
            ["A request to reuse an old photograph soon turns into a question about the photographer, the model and the terms. Through ", { text: "asset attribution", page: 116 }, ", creators and contributors can remain associated with assets, which keeps that trail from going cold."],
          ],
        },
        {
          heading: "A note on why it was archived",
          summary: "Without a reason, archived work invites being reused at the wrong moment.",
          icon: "message",
          body: [
            ["“Replaced by the new identity”, “campaign ended” and “music licence lapsed” lead to very different decisions about reuse. A short ", { text: "comment on the asset", page: 62 }, " keeps that reason attached to the work it concerns."],
          ],
        },
        {
          heading: "Access that still fits the content",
          summary: "Sensitive work stays sensitive after its campaign is over.",
          icon: "lock",
          body: [
            ["Archived material can include confidential client projects, unreleased directions and rights-restricted footage. ", { text: "Creative access governance", page: 159 }, " helps organisations keep control over sensitive creative content, and finished work deserves the same care as work in progress."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 8 }, { kind: "pdf", page: 77 }, { kind: "pdf", page: 116 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 159 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "Recruitment campaigns kept out of the way but not lost",
      team: "A university communications team",
      situation: "A university communications team runs a new student recruitment campaign each cycle. Material from earlier campaigns keeps surfacing when colleagues look for current films and photography.",
      steps: [
        {
          heading: "Context goes on first",
          body: "When a campaign ends, its films, photography and prospectus files are tagged with the campaign name and intake, and the lead pieces get a comment noting which campaign replaced them.",
        },
        {
          heading: "The campaign is archived",
          body: "The team archives the material, and colleagues looking for recruitment content stop running into the previous campaign during everyday discovery.",
        },
        {
          heading: "An unexpected request arrives",
          body: "Some time later, the university plans a publication marking a milestone and asks for imagery from past campaigns.",
        },
        {
          heading: "The history is still there",
          body: "Because earlier campaigns were archived rather than deleted, the photography has been retained, and the campaign and intake tags added before archiving tell the team where each image came from.",
        },
      ],
      outcome: "Current recruitment material stays easy to find, and the milestone publication draws on campaign imagery that deletion would have taken away.",
      link: { page: 237, label: "GetSibu for Education Teams" },
      sources: [{ kind: "pdf", page: 108 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 237 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about asset archiving",
      items: [
        {
          question: "How is asset archiving different from asset deletion?",
          answer: ["The difference is whether the organisation means to keep the work. An archived asset stays part of its history; a deleted one is meant to be gone, which is why ", { text: "deletion", page: 109 }, " is reserved for authorised users acting under organisational policies and permissions."],
        },
        {
          question: "Should drafts and alternative takes be archived with the final pieces?",
          answer: "Only those that explain the final work or could plausibly be wanted again, such as the direction a client nearly chose. Rejected drafts kept in bulk make an archive slower to use without adding much history.",
        },
        {
          question: "Is archiving a substitute for a retention policy?",
          answer: ["No. Archiving takes finished work out of everyday discovery; how long each kind of content is kept, and when it should finally go, is a matter for ", { text: "creative data governance", page: 339 }, ", which establishes rules around access, retention, usage and asset management."],
        },
      ],
      sources: [{ kind: "pdf", page: 108 }, { kind: "pdf", page: 109 }, { kind: "pdf", page: 339 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on retiring and retaining content",
      variant: "compact",
      pages: [104, 106, 109, 112, 77, 116],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
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
