/**
 * 94 · Version Restore — /features/version-restore
 *
 * Angle (cluster: versioning; resilience): returning an asset to a previous creative state — why teams go back, how to
 * restore with care, and when restoring is the wrong tool. File Version History (92) owns the record, Asset Replacement
 * (93) the swap itself, and Asset Recovery (110) accidental replacement or removal.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how creative teams revisit earlier work; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 94,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Versioning & Asset Management",
      lede: "When a team should take an asset back to an earlier creative state, why restoring an older version beats rebuilding it, and what to settle before and after going back.",
      visual: { diagram: "version-record", focus: "restore" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 94 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Going back to an earlier creative direction on purpose",
      body: [
        "With GetSibu, a team can restore an older version of an asset when it needs to return to a previous creative state.",
        "Creative work rarely moves in a straight line. A campaign visual is pushed brighter, then pulled back; an edit is tightened until it loses the pause that made it work; a deck is restructured for one audience and then wanted in its original shape. In each case the earlier state was not an error. It was a direction the team set aside and now wants again.",
        [
          "Without earlier versions, going back means rebuilding: reopening source files, guessing at settings and hoping the result matches. When the ",
          { text: "file version history", page: 92 },
          " is kept on the asset, the earlier state is a file that already exists, and going back becomes a decision to make rather than a reconstruction project.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["A previous creative state", "Restore instead of rebuild", "A deliberate decision", "Understand why it changed first", "Check the result against today"],
      },
      highlight: {
        heading: "In practice",
        body: "After a round of changes leaves a hero image flatter than before, the art director asks for the earlier grade. The team restores that version rather than trying to recreate it by eye.",
        tags: ["Art direction", "Editing", "Brand"],
      },
      glance: {
        heading: "Version restore in brief",
        facts: [
          { label: "Returns", value: "An earlier version of the asset" },
          { label: "Draws on", value: "File Version History" },
          { label: "Useful when", value: "A revision has gone further than intended" },
          { label: "Different from", value: "Asset Recovery" },
        ],
        actions: [{ kind: "route", path: "/features/asset-management", label: "More in Versioning & Asset Management" }]
      },
      sources: [{ kind: "pdf", page: 94 }, { kind: "pdf", page: 92 }, { kind: "pdf", page: 110 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "reasons",
      eyebrow: "When it helps",
      heading: "Reasons a team returns to an earlier version",
      tabs: [
        {
          label: "Direction change",
          heading: "Stakeholders prefer where the work was",
          icon: "compass",
          body: [
            "Feedback sometimes overshoots. Having seen the revision, a client or brand lead concludes that the previous direction was stronger.",
            "Restoring the earlier version takes the work back to that point without asking a designer to reverse each change by hand, which is slow and rarely exact.",
          ],
          points: ["The earlier direction back as it was", "No change-by-change reversal"],
        },
        {
          label: "A broken revision",
          heading: "A late edit fixes one thing and breaks another",
          icon: "flag",
          body: [
            "A corrected logo shifts the layout; a colour change looks right on a monitor and wrong in print; a new caption crowds the product out of frame.",
            "Going back to the version before the edit gives the team a sound file to work from while the change is redone properly.",
          ],
          points: ["A stable file while the fix is redone", "Less pressure to patch in a hurry"],
        },
        {
          label: "An earlier look",
          heading: "A previous state is wanted again later",
          icon: "calendar",
          body: [
            "Seasonal campaigns come round again, and a visual that was toned down for one launch may suit the next one exactly as it first was. If that earlier state was retained as a version, it can be brought back rather than reconstructed from an old export.",
            "The longer the gap, the more worth checking the restored file is: brand details, legal lines and product information can all have moved on in the meantime.",
          ],
          points: ["Bring back a look that was set aside", "Check older material against current details"],
        },
      ],
      sources: [{ kind: "pdf", page: 94 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "restore-steps",
      eyebrow: "Step by step",
      heading: "Restoring an older version with care",
      intro: "Most of the care goes into the decision before the restore and the check after it.",
      steps: [
        { heading: "Identify the version", body: "Work out which earlier version holds the direction the team wants back, starting from the record of the asset’s previous versions.", icon: "history" },
        { heading: "Check why it changed", body: "Asset discussion history lets a team understand how feedback evolved, which often explains why the work moved on from that version.", icon: "thread", page: 75 },
        { heading: "Agree the decision", body: "Confirm with whoever asked for the later changes, so going back does not quietly undo feedback they still expect to see.", icon: "users" },
        { heading: "Restore the version", body: "Carry out the restore once the people involved agree it is the right move.", icon: "restore" },
        { heading: "Check it against today", body: "Look over the restored file for anything that has changed since it was current, such as a logo, a legal line or a price.", icon: "check" },
      ],
      sources: [{ kind: "pdf", page: 92 }, { kind: "pdf", page: 75 }, { kind: "pdf", page: 94 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A recruitment film taken back to its earlier edit",
      team: "A corporate communications team",
      situation: "The team re-edited the recruitment film on the company website to feature a new office. Days later the office opening is postponed, and the film needs to go back to how it was.",
      steps: [
        { heading: "Understand the later edit", body: "The discussion on the film confirms that the new-office section was the only substantial change made in the latest round." },
        { heading: "Agree with the careers lead", body: ["The editor ", { text: "mentions the careers lead", page: 66 }, " in the film’s discussion to confirm that the earlier edit should return."] },
        { heading: "Restore the earlier edit", body: "The version from before the re-edit is restored, so the website film is back as it stood." },
        { heading: "Check the details", body: "The application details at the end of the film are checked against the current careers site before anyone relies on it again." },
      ],
      outcome: "The website carries the film as it was before the postponed change, brought back from the asset’s own history rather than rebuilt in the edit suite.",
      link: { page: 240, label: "GetSibu for Corporate Communications" },
      sources: [{ kind: "pdf", page: 94 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 66 }, { kind: "pdf", page: 240 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about version restore",
      items: [
        {
          question: "What does a version restore bring back?",
          answer: "Work that already exists within the asset’s history. Nothing has to be recreated from source files or old exports, because the earlier version was retained when the asset moved on.",
        },
        {
          question: "Is restoring a version the same as recovering a deleted asset?",
          answer: ["Not quite. Restoring is usually a creative decision about an asset’s direction, whereas ", { text: "asset recovery", page: 110 }, " is about content that has been accidentally replaced or removed."],
        },
        {
          question: "How do you decide which older version to restore?",
          answer: ["Start with why the work changed. ", { text: "Approval history", page: 77 }, " provides a record of review activity, which can reduce confusion about which version was accepted before the later changes."],
        },
      ],
      sources: [{ kind: "pdf", page: 386 }, { kind: "pdf", page: 110 }, { kind: "pdf", page: 77 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on going back to earlier work",
      variant: "compact",
      pages: [92, 93, 110, 75, 77, 369],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the vendor-neutral versioning explainer." }],
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
