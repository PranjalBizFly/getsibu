/**
 * 93 · Asset Replacement — /features/asset-replacement
 *
 * Angle (cluster: versioning): the act of replacing a file — what the asset keeps (its earlier versions), what changes
 * (the current file), and what still needs a person’s attention around a replacement. Creative Asset Versioning (91)
 * owns the end of “final-final” names, File Version History (92) the record, Version Restore (94) going back.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of replacement practice in creative libraries; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 93,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Versioning & Asset Management",
      lede: "What happens when a new file is swapped into an existing asset, what the asset keeps from the work before it, and what a team should check before and after the swap.",
      visual: { diagram: "version-record", focus: "versions" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 93 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Swapping in a new file without erasing the work behind it",
      body: [
        "Replacing an asset in GetSibu need not cost the history of earlier work: the platform maintains versions within the asset record, so the outgoing file is kept rather than overwritten.",
        "Replacement has a poor reputation for good reason. On a file server or shared drive, saving over a file usually destroys the old one, so careful people avoid it and keep a spare copy instead. That caution is exactly how precautionary duplicates and “v2” names multiply: fear of losing work pushes a team towards clutter.",
        [
          "Once earlier versions stay with the asset, replacing becomes the safer habit rather than the risky one. ",
          { text: "Creative asset versioning", page: 91 },
          " describes why that ends the naming problem. The practical questions here are narrower: when a swap is the right move, and what still depends on someone paying attention.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Replacement is not deletion", "Versions kept in the asset record", "The current file changes", "The same piece of work, revised", "Downloaded copies stay as they were"],
      },
      highlight: {
        heading: "In practice",
        body: "An editor swaps a corrected export into a product video asset. Because the earlier export is still part of the record, there is no reason to keep a “just in case” copy on a desktop.",
        tags: ["Editors", "Designers", "Library managers"],
      },
      glance: {
        heading: "Replacement in brief",
        facts: [
          { label: "Changes", value: "The asset’s current file" },
          { label: "Keeps", value: "Earlier versions in the asset record" },
          { label: "Undo with", value: "Version Restore", page: 94 },
          { label: "Part of", value: "Creative Asset Versioning" },
        ],
        actions: [{ kind: "route", path: "/features/asset-management", label: "More in Versioning & Asset Management" }]
      },
      sources: [{ kind: "pdf", page: 93 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 94 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "overwrite-or-replace",
      eyebrow: "The difference",
      heading: "Saving over a file compared with replacing an asset",
      columns: ["Saving over a file in a folder", "Replacing an asset in GetSibu"],
      emphasis: 1,
      rows: [
        ["The outgoing file", "Usually overwritten and gone", "Held as a version in the asset record"],
        ["Habit it encourages", "Keeping a spare copy just in case", "Swapping the file without a spare"],
        ["A mistaken swap", "Fixed only if someone kept a copy", "An older version can be restored"],
        ["Where earlier work lives", "Old attachments and personal folders", "Within the asset’s own history"],
        ["Library clutter", "Grows with each precautionary copy", "One asset for the piece of work"],
      ],
      sources: [{ kind: "pdf", page: 93 }, { kind: "pdf", page: 94 }, { kind: "pdf", page: 386 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "checks",
      eyebrow: "Before and after",
      heading: "What still needs attention around a replacement",
      items: [
        {
          heading: "Is the new file ready?",
          summary: "Swapping in a work-in-progress export makes an unfinished file the one colleagues see first.",
          icon: "clock",
          body: [
            "Replacement changes what everyone who opens the asset finds. If the new file is still moving, such as an edit awaiting a final mix or a layout waiting on copy, finishing that round before the swap keeps half-done work out of circulation.",
          ],
          points: ["Finish the round, then replace", "Keep drafts out of colleagues’ way"],
        },
        {
          heading: "Is it still the same piece of work?",
          summary: "A replacement should revise what the asset is, not turn it into something else.",
          icon: "layers",
          body: [
            "A corrected end card, a sharper export or an updated price line are revisions of the same piece. A shot of a different product, or a film with a different message, is new work that happens to share a subject.",
            "Swapping new work into an existing asset leaves colleagues who knew the old piece looking at something unrelated under a familiar name. Adding it as an asset of its own keeps each record about one thing.",
          ],
          points: ["Revisions replace", "New work gets its own asset"],
        },
        {
          heading: "Copies that have already travelled",
          summary: "A replacement updates the asset, not the files people have already taken away.",
          icon: "download",
          body: [
            "Exports sitting in an email thread, a slide deck or a partner’s working folder stay exactly as they were. For material that has already been shared, the replacement is a prompt to tell those people rather than proof that they now hold the new file.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 93 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A corrected product video swapped in the day before a pitch",
      team: "An e-commerce team",
      situation: "The day before a retailer pitch, someone notices that the end card of a product video still shows an outdated product name.",
      steps: [
        { heading: "Fix and export", body: "The editor corrects the end card and exports a new file from the edit." },
        { heading: "Replace rather than add", body: "Instead of uploading “product-video-fixed” beside the original, the editor replaces the existing asset, and the earlier export stays in its record." },
        { heading: "Confirm the change", body: ["A reviewer checks the corrected video and approves it, so its ", { text: "review status", page: 76 }, " makes clear to colleagues that it has completed the approval process."] },
        { heading: "Leave a note on the asset", body: ["A ", { text: "comment on the asset", page: 62 }, " records that the end card was corrected, for anyone who downloaded the earlier export."] },
      ],
      outcome: "The pitch uses the corrected video, the earlier export remains in the record if anyone needs it, and the library gains no extra copy to confuse the next search.",
      link: { page: 230, label: "GetSibu for E-Commerce Brands" },
      sources: [{ kind: "pdf", page: 93 }, { kind: "pdf", page: 76 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 230 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about asset replacement",
      items: [
        {
          question: "Does replacing an asset delete the previous file?",
          answer: ["Not from the asset’s history. When a file is replaced, ", { text: "previous versions remain available within the asset history", page: 386 }, "."],
        },
        {
          question: "What is the difference between asset replacement and uploading a new copy?",
          answer: "Uploading a copy creates a second item that colleagues then have to tell apart from the first. Replacement keeps a single asset, with the outgoing file held among its versions.",
        },
        {
          question: "Can an asset replacement be undone?",
          answer: ["If the new file turns out to be wrong, the version it replaced can be restored, as described under ", { text: "version restore", page: 94 }, ". ", { text: "Asset recovery", page: 110 }, " covers content replaced or removed by accident more broadly."],
        },
      ],
      sources: [{ kind: "pdf", page: 386 }, { kind: "pdf", page: 93 }, { kind: "pdf", page: 94 }, { kind: "pdf", page: 110 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on replacing and restoring files",
      variant: "compact",
      pages: [91, 92, 94, 110, 76],
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
