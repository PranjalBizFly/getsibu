/**
 * 101 · Asset Lifecycle Management — /features/asset-lifecycle-management
 *
 * Angle (cluster: asset-lifecycle, primary): managing the span from initial upload to review, approval, reuse and
 * eventual deletion — the decision that closes each stage, the policy questions behind them and who owns them.
 * Creative Asset Lifecycle (107) enumerates the stages; 102 statuses, 104 expiry, 108 archiving, 109 deletion.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of lifecycle practice in creative libraries; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 101,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Versioning & Asset Management",
      lede: "What managing a creative asset from initial upload to eventual deletion involves, the decision that moves it from one stage to the next, and who usually owns each of those decisions.",
      visual: { diagram: "version-record", focus: "lifecycle" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 101 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Managing an asset from its first upload to its last day",
      body: [
        "GetSibu can support the lifecycle of a creative asset across its whole span: initial upload, then review, approval and reuse, and finally deletion.",
        "Every asset has a lifecycle whether or not anyone manages it. Left alone, the stages blur: drafts get reused because they were easy to find, approved work goes unused because nobody knew it existed, and files that should have been retired stay in circulation for years. Managing the lifecycle means making each transition a deliberate decision rather than an accident.",
        [
          "The stages themselves are set out under ",
          { text: "creative asset lifecycle", page: 107 },
          ", from ingestion and metadata processing through to archival. Managing them is a matter of governance, and ",
          { text: "creative asset governance", page: 114 },
          " defines who can upload, edit, approve, download and manage assets, which in turn shapes how an asset moves.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Upload, review, approval, reuse, deletion", "Each transition a decision", "A clear owner for every stage", "Reuse as a managed stage", "Deletion under policy and permissions"],
      },
      highlight: {
        heading: "In practice",
        body: "A library manager notices approved campaign images being ignored while old drafts keep circulating. The fix is not more storage but a clearer route from approval to reuse.",
        tags: ["Library managers", "Brand", "Operations"],
      },
      glance: {
        heading: "Lifecycle management in brief",
        facts: [
          { label: "Spans", value: "Initial upload to eventual deletion" },
          { label: "Stages in detail", value: "Creative Asset Lifecycle" },
          { label: "Rules", value: "Creative Asset Governance" },
          { label: "Workflow states", value: "Asset Status Management" },
        ],
        actions: [{ kind: "route", path: "/features/asset-management", label: "More in Versioning & Asset Management" }]
      },
      sources: [{ kind: "pdf", page: 101 }, { kind: "pdf", page: 107 }, { kind: "pdf", page: 114 }, { kind: "pdf", page: 102 }, EXPLAINS],
    },
    {
      kind: "timeline",
      id: "stages",
      eyebrow: "Stage by stage",
      heading: "Five stages and the question that closes each one",
      items: [
        { label: "Upload", body: "Files arrive and move through processing such as metadata extraction and thumbnail generation. Closing question: is this ready for others to see, or still work in progress?" },
        { label: "Review", body: "Colleagues inspect the work and discuss changes in one central place. Closing question: does it need another round, or is it ready for a decision?" },
        { label: "Approval", body: "The team marks the asset as approved once the requested changes are made. Closing question: is it approved for use, and for which purposes?" },
        { label: "Reuse", body: "Approved work is found and used again across campaigns, channels and teams. Closing question: is it still in use, and should it be?" },
        { label: "Deletion", body: "Content that has genuinely reached the end of its use is removed in line with the organisation’s rules. Closing question: has it truly reached the end, or should it be kept as history?" },
      ],
      sources: [{ kind: "pdf", page: 101 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 69 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 109 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "policy-questions",
      eyebrow: "What to consider",
      heading: "Decisions a lifecycle policy should settle",
      items: [
        {
          heading: "When work in progress becomes visible",
          summary: "Not every upload is ready to be seen by the whole team.",
          icon: "lock",
          body: [
            "Libraries fill with drafts when there is no agreed moment at which work is shared. A common pattern keeps early work in restricted folders until it is ready for review.",
            "A default-deny approach suits that pattern, because new folders can remain private until access is explicitly granted.",
          ],
          points: ["Agree when drafts are shared", "Keep early work in restricted folders"],
        },
        {
          heading: "What an approval permits",
          summary: "Approval says an asset can be used, but not always where or for how long.",
          icon: "approval",
          body: [
            "An image cleared for a social campaign may not be cleared for print; a presentation approved for internal use may not be meant for customers.",
            [{ text: "Asset statuses", page: 102 }, " help distinguish drafts, approved content and other workflow states, and ", { text: "expiry information", page: 104 }, " can help identify content that should no longer be used after a specified period."],
          ],
        },
        {
          heading: "How reuse is encouraged",
          summary: "Approved work only pays off if people can find it and trust it.",
          icon: "refresh",
          body: [
            ["Reuse is the stage where lifecycle management most often fails without anyone noticing. ", { text: "Approved-only views", page: 103 }, " let people reach content that has completed the required review, and saved searches turn recurring requests into reusable views that can be shared."],
          ],
        },
        {
          heading: "Archive or delete?",
          summary: "The end of active use is not necessarily the end of an asset.",
          icon: "archive",
          body: [
            ["Some content keeps historical or legal value long after it stops being used. ", { text: "Archiving", page: 108 }, " retains it without letting it interfere with everyday discovery, whereas deletion removes it."],
            "Which applies to which kind of content, and who decides, belongs in the organisation’s data governance rules on access, retention, usage and asset management.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 154 }, { kind: "pdf", page: 102 }, { kind: "pdf", page: 104 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 17 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 339 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "roles",
      eyebrow: "Who does what",
      heading: "Lifecycle responsibilities by role",
      tabs: [
        {
          label: "Contributors",
          heading: "Bring work in ready to be managed",
          icon: "upload",
          body: [
            "Designers, photographers and editors begin the lifecycle. What they add at the start, a descriptive name and useful keywords, decides how smoothly the asset moves through every later stage.",
            "Details such as creators and custom keywords can become part of the asset record, which gives reviewers and future users context from day one.",
          ],
          points: ["Descriptive names and keywords", "Drafts shared only when ready"],
        },
        {
          label: "Approvers",
          heading: "Turn review into a clear decision",
          icon: "check",
          body: [
            "Reviewers and approvers close the middle stages. A decision recorded on the asset, rather than in an email, is what lets everyone downstream trust its status.",
            [{ text: "Approval history", page: 77 }, " provides a record of review activity that supports accountability for those decisions."],
          ],
          points: ["Decisions recorded where the asset lives", "Accountability for what was approved"],
        },
        {
          label: "Library managers",
          heading: "Keep the later stages moving",
          icon: "gauge",
          body: [
            "Library managers look after reuse and retirement: noticing what is used, what sits idle and what has passed its useful life.",
            [{ text: "Usage analytics", page: 182 }, " help teams see which assets receive attention and which remain underused, a prompt either to promote good work or to retire it."],
          ],
          points: ["Promote approved work that is overlooked", "Retire what has passed its useful life"],
        },
      ],
      sources: [{ kind: "pdf", page: 22 }, { kind: "pdf", page: 77 }, { kind: "pdf", page: 182 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about asset lifecycle management",
      items: [
        {
          question: "How is asset lifecycle management different from the creative asset lifecycle?",
          answer: "The creative asset lifecycle describes the stages an asset can pass through. Lifecycle management is the practice of governing them: the rules, owners and decisions at each transition.",
        },
        {
          question: "Who should be able to delete assets at the end of their lifecycle?",
          answer: ["Only people the organisation has authorised. ", { text: "Asset deletion", page: 109 }, " is carried out by authorised users according to organisational policies and permissions."],
        },
        {
          question: "Why does reuse count as a stage in an asset’s lifecycle?",
          answer: "Because approved work that nobody finds has not delivered its value. Treating reuse as a stage prompts a team to make approved assets easy to locate, and to notice when they stop being used.",
        },
      ],
      sources: [{ kind: "pdf", page: 101 }, { kind: "pdf", page: 107 }, { kind: "pdf", page: 109 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on managing assets over time",
      variant: "compact",
      pages: [107, 114, 104, 108, 109],
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
