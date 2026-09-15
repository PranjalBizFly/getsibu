/**
 * 100 · Creative Revision Tracking — /features/creative-revision-tracking
 *
 * Angle (cluster: versioning): reading revisions — what changed between versions, which version is currently active,
 * and why the change was made. File Version History (92) owns the record itself, Creative File History (95) the wider
 * context of an asset over time, and Approval History (77) the review record.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how teams follow revisions; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 100,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Versioning & Asset Management",
      lede: "Why “what changed?” and “which one is in use?” are separate questions about any revised asset, the records that help a team answer them, and the habits that keep a revision understandable months later.",
      visual: { diagram: "version-record", focus: "versions" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 100 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Knowing what changed, and which file is in use",
      body: [
        "Revision tracking in GetSibu helps teams understand what changed from one version of an asset to the next, and which of those versions is currently active.",
        "The two questions fail in different ways. “Which one is active?” goes wrong when copies multiply and nobody is sure which file is current, so people use whatever they downloaded last. “What changed?” goes wrong even when the current file is obvious: two versions of a layout can look alike, and the reason for the difference, a legal correction or a stakeholder’s preference, is invisible in the file.",
        [
          "Tracking starts with how revisions arrive. When teams ",
          { text: "replace assets in place", page: 91 },
          " instead of saving copies, there is a single line of versions to follow; when copies multiply, there is nothing coherent to track at all.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["What changed between versions", "Which version is active", "Reasons recorded beside the work", "One line of versions to follow", "Revisions legible months later"],
      },
      highlight: {
        heading: "In practice",
        body: "An account manager asks why the latest banner drops a product. A note on the banner asset records that it was pulled for stock reasons, so nobody puts it back by mistake.",
        tags: ["Agencies", "Designers", "Account teams"],
      },
      glance: {
        heading: "Revision tracking in brief",
        facts: [
          { label: "Helps answer", value: "What changed, and which version is active" },
          { label: "Earlier files", value: "File Version History" },
          { label: "Accepted version", value: "Approval History" },
          { label: "Why it changed", value: "Asset Discussion History" },
        ],
        actions: [{ kind: "route", path: "/features/asset-management", label: "More in Versioning & Asset Management" }]
      },
      sources: [{ kind: "pdf", page: 100 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 92 }, { kind: "pdf", page: 77 }, { kind: "pdf", page: 75 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "questions",
      eyebrow: "Two questions, and a third",
      heading: "What revision tracking helps a team work out",
      tabs: [
        {
          label: "Which is active?",
          heading: "Settle which version is current",
          icon: "check",
          body: [
            "Once a revision replaces an asset, the version in use is the current one, and earlier versions sit behind it rather than beside it. That removes the everyday doubt of choosing between similar files.",
            "For colleagues outside the team, this is usually the only question that matters. They want the version in use, not the story of how it got there.",
          ],
          points: ["The current version, not the newest download", "The question most colleagues ask"],
        },
        {
          label: "What changed?",
          heading: "Understand the difference between two versions",
          icon: "eye",
          body: [
            "Some changes jump out; many do not. A tightened line of copy, a nudged crop or a swapped product is easy to miss when two versions are compared by eye.",
            "The dependable way to know what changed is a short written account, left on the asset where the next reader will look, rather than a hunt for differences.",
          ],
          points: ["Small changes are easy to overlook", "A short note beats a search for differences"],
        },
        {
          label: "Why did it change?",
          heading: "Keep the reason next to the revision",
          icon: "thread",
          body: [
            "A revision without a stated reason invites someone to undo it. Reasons usually live in feedback: the request that prompted a change and the discussion that refined it.",
            [{ text: "Asset discussion history", page: 75 }, " lets teams understand how that feedback evolved, so the thinking behind a revision can be traced once the moment has passed."],
          ],
          points: ["Feedback explains the revision", "Reasons traceable after the event"],
        },
      ],
      sources: [{ kind: "pdf", page: 100 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 75 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "records",
      eyebrow: "In GetSibu",
      heading: "The records that help a team read a revision",
      intro: "Each of these records answers a different part of the story of a change.",
      items: [
        { heading: "Version record", body: "Previous versions are kept with the asset as a record, and an older version can be restored when required.", icon: "history", points: ["Earlier versions kept on record"], page: 92 },
        { heading: "Comments on the asset", body: "Users can leave comments directly on an asset, the natural place to describe what a revision altered.", icon: "message", points: ["What changed, in words"] },
        { heading: "Threaded discussion", body: "Threads keep conversations organised around specific issues, which makes it easier to see which request a revision responded to.", icon: "thread", points: ["One issue, one conversation"] },
        { heading: "Status history", body: "An asset moving through approval gathers a status history showing whether it was awaiting review, approved or required changes.", icon: "flag", points: ["Where the asset stood in review"], page: 68 },
        { heading: "Activity history", body: "Edits, along with views, downloads and approvals, can become part of the asset’s activity history.", icon: "audit", points: ["What has happened to the asset"], page: 118 },
      ],
      sources: [{ kind: "pdf", page: 92 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 68 }, { kind: "pdf", page: 118 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "Similar banners and a client who asks what changed",
      team: "An advertising agency",
      situation: "An agency is several rounds into a display banner for a client. The client’s new marketing manager notices that the running banner differs from an earlier round she was once sent, and asks what changed and whether the right one is live.",
      steps: [
        { heading: "Confirm the active version", body: "The account lead opens the banner asset. Its current version is the round the agency supplied most recently, not a file saved somewhere on the client’s side." },
        { heading: "Find what was accepted", body: ["The ", { text: "approval history", page: 77 }, " provides a record of review activity showing which version the previous manager accepted."] },
        { heading: "Read how the feedback evolved", body: "The discussion on the asset records the requests behind the later rounds: a softer headline first, then a new product image." },
        { heading: "Explain instead of reopening", body: "The account lead walks the new manager through the changes and their reasons, and the manager agrees the current banner reflects decisions already made." },
      ],
      outcome: "A question that could have reopened the campaign is answered from the asset’s own record in one conversation.",
      link: { page: 219, label: "GetSibu for Advertising Agencies" },
      sources: [{ kind: "pdf", page: 100 }, { kind: "pdf", page: 77 }, { kind: "pdf", page: 75 }, { kind: "pdf", page: 219 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about creative revision tracking",
      items: [
        {
          question: "Should every small change to a creative file become a new version?",
          answer: "Not every save. A change that alters what colleagues should use deserves a version; interim saves nobody else needs usually do not, because a history crowded with trivial rounds is harder to read.",
        },
        {
          question: "Who should explain what a revision changed?",
          answer: "The person who made it, because they know exactly what was altered. Whoever asked for the change is best placed to say why, so the clearest records usually carry both.",
        },
        {
          question: "How is revision tracking different from file version history?",
          answer: ["The ", { text: "file version history", page: 92 }, " is the record of earlier versions. Revision tracking is about reading that record well: understanding the differences between versions and which one is in use."],
        },
      ],
      sources: [{ kind: "pdf", page: 100 }, { kind: "pdf", page: 92 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on following revisions",
      variant: "compact",
      pages: [92, 75, 77, 68, 118, 219],
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
