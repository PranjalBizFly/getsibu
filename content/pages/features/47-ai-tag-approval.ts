/**
 * 47 · AI Tag Approval — /features/ai-tag-approval
 *
 * Angle (cluster ai-tagging): approving suggested tags in bulk at library scale — when a batch approval
 * makes sense, what it confirms and what to check first. Confidence (46) and override (48) are siblings.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of reviewing tags at scale; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 47,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "AI",
      lede: "See how approving suggested tags in bulk lets a team organise a large library without inspecting every file, when a batch approval is the right call, and what to check before making one.",
      visual: { diagram: "ai-review", focus: "approve" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 47 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "One decision that covers many assets",
      body: [
        "GetSibu lets teams approve suggested tags in bulk. Organising assets at scale becomes much faster than it would be if someone had to review each file on its own.",
        "Human review of AI suggestions only works if it can keep pace with what arrives. A single shoot can produce hundreds of frames, and a migrated archive can hold years of material. If every suggestion needs its own decision, review becomes a queue that never empties, and teams start skipping it altogether, which defeats the reason for having people check suggestions in the first place.",
        [
          "Bulk approval is a middle course between leaving suggestions unchecked and checking every file by hand. Tags are ",
          { text: "suggested during processing", page: 31 },
          ", a reviewer confirms the ones that fit across a group of assets, and anything that does not fit the taxonomy can be ",
          { text: "overridden by an authorised user", page: 48 },
          ".",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Approval across a group of assets", "Review that keeps pace with volume", "Exceptions handled before approving", "A sample checked, not every file", "Tags stay open to correction"],
      },
      highlight: {
        heading: "In practice",
        body: "After a product shoot against a single backdrop, a library manager checks a handful of frames, removes the one suggestion that uses the wrong term and approves the rest of the set together.",
        tags: ["Library managers", "Product photography", "Imports"],
      },
      glance: {
        heading: "Bulk tag approval in brief",
        facts: [
          { label: "Area", value: "AI" },
          { label: "Acts on", value: "Suggested tags across many assets" },
          { label: "Guided by", value: "AI Tag Confidence", page: 46 },
          { label: "Paired with", value: "AI Tag Override", page: 48 },
        ],
        actions: [{ kind: "route", path: "/features/ai", label: "More in AI" }]
      },
      sources: [{ kind: "pdf", page: 47 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 48 }, { kind: "pdf", page: 46 }, EXPLAINS],
    },
    {
      kind: "before-after",
      id: "before-after",
      heading: "Reviewing a large import file by file, and in bulk",
      beforeLabel: "One file at a time",
      afterLabel: "Approval in bulk",
      before: ["Every asset opened before its tags count", "Review falls behind the uploads", "Reviewers tire and start skimming", "Unchecked suggestions pile up"],
      after: ["Consistent groups confirmed together", "Review keeps up with new material", "Attention saved for the exceptions", "One set of terms applied across a group"],
      sources: [{ kind: "pdf", page: 47 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "situations",
      eyebrow: "When it helps",
      heading: "Where bulk approval earns its place, and where it does not",
      tabs: [
        {
          label: "Migrations",
          heading: "An archive arriving all at once",
          icon: "archive",
          body: [
            ["A migration is the moment when the volume of suggestions is at its highest. ", { text: "Bulk import", page: 130 }, " can bring a large existing library across without uploading each file, and the tags suggested for that library then need a decision."],
            "Working through the archive one coherent group of material at a time, such as a single shoot, a product range or a year of campaigns, keeps each decision meaningful. The first job is choosing that order, usually starting with the material colleagues will look for soonest.",
          ],
          points: ["Coherent groups reviewed in turn", "The backlog tackled in sections"],
        },
        {
          label: "High volume",
          heading: "Production that never pauses",
          icon: "film",
          body: [
            ["Teams producing large amounts of video and imagery work with ", { text: "ingestion designed around high-volume environments", page: 139 }, ". For them, review has to become a routine part of each delivery rather than a separate project."],
            "Approving each delivery’s suggestions soon after it lands keeps the effort small and the material fresh in the reviewer’s mind.",
          ],
          points: ["Review folded into each delivery", "No quarter-end tagging marathon"],
        },
        {
          label: "Small uploads",
          heading: "When individual review is simply quicker",
          icon: "upload",
          body: [
            ["Not every addition is large. Someone adding a few files through ", { text: "drag and drop upload", page: 127 }, " can check each suggestion in less time than it takes to plan a batch."],
            "Mixed uploads are the other exception. An upload that combines event photographs, product shots and logo files shares nothing that a group decision could rely on, so it is better split up or reviewed item by item.",
          ],
          points: ["A few files checked directly", "Mixed material split before approval"],
        },
      ],
      sources: [{ kind: "pdf", page: 130 }, { kind: "pdf", page: 139 }, { kind: "pdf", page: 127 }, { kind: "pdf", page: 47 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "before-approving",
      eyebrow: "What to check",
      heading: "Before approving a batch of suggested tags",
      items: [
        {
          heading: "Processing has finished",
          summary: "A batch still being processed is not ready for a decision.",
          icon: "clock",
          body: [
            ["An asset that has uploaded is not necessarily one whose analysis is complete. ", { text: "Media processing status", page: 145 }, " distinguishes the two, so check it before treating a group’s suggestions as final."],
          ],
        },
        {
          heading: "A sample looks right",
          summary: "Opening a few representative assets tests the whole group.",
          icon: "eye",
          body: [
            "Pick assets from the start, middle and end of the batch, plus any that look unusual in the thumbnails. If their suggestions are sound, the rest of a consistent group is likely to be sound too.",
            "If the sample turns up several problems, the batch is probably less uniform than it seemed and should be split before anything is approved.",
          ],
        },
        {
          heading: "The exceptions are out",
          summary: "Deal with what does not belong before approving what does.",
          icon: "filter",
          body: [
            ["Weakly associated suggestions and terms that clash with the taxonomy are the usual exceptions. ", { text: "Confidence information", page: 46 }, " helps find the first kind; the second is corrected with an override. Deal with both first, so the approval covers only suggestions someone would stand behind."],
          ],
        },
        {
          heading: "Context is recorded separately",
          summary: "Approving descriptive tags does not capture who, why or where an asset can be used.",
          icon: "document",
          body: [
            ["A batch approval confirms how assets are described. Details such as the creator, campaign or client are a matter for the asset record, of which ", { text: "creators and custom keywords", page: 22 }, " can become part, separately from the tags."],
            "Usage restrictions deserve the same care: nothing in a photograph’s content says whether its licence has expired.",
          ],
        },
        {
          heading: "The right people approve",
          summary: "A decision that covers many assets needs someone who knows the vocabulary well.",
          icon: "users",
          body: [
            ["Because one approval affects many files, it is worth deciding in advance who makes it. ", { text: "Creative asset governance", page: 114 }, " is where an organisation sets out who can upload, edit, approve, download and manage assets."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 145 }, { kind: "pdf", page: 46 }, { kind: "pdf", page: 48 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 114 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about AI tag approval",
      items: [
        {
          question: "Is bulk tag approval the same as accepting AI tags automatically?",
          answer: ["No. A person still makes the decision; bulk approval lets that one decision cover many assets. ", { text: "AI-powered asset management", page: 45 }, " combines automated analysis with human approval, and approving in bulk helps keep the human part practical at volume."],
        },
        {
          question: "What makes a group of assets consistent enough for one tag approval?",
          answer: "Shared subject, conditions and purpose: frames from one shoot against one backdrop, or one product range photographed the same way. A group defined only by date or by who uploaded it often mixes very different material and hides the exceptions.",
        },
        {
          question: "How can a team tell whether its bulk tag approvals are working?",
          answer: ["By watching what happens afterwards. Approved tags that keep needing correction suggest the groups were less consistent than they looked, and ", { text: "tag analytics", page: 186 }, ", which identify frequently used or searched tags, help show whether the approved terms are the ones people look for."],
        },
      ],
      sources: [{ kind: "pdf", page: 47 }, { kind: "pdf", page: 45 }, { kind: "pdf", page: 186 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on approving and correcting tags",
      variant: "compact",
      pages: [46, 48, 31, 130, 9, 364],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Turn Your Asset Library Into Intelligence",
      conversionPage: 398,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 398 }],
    },
  ],
};

export default page;
