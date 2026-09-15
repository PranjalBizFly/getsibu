/**
 * 110 · Asset Recovery — /features/asset-recovery
 *
 * Angle (cluster: asset-lifecycle): versioning and backups can support recovery when content is accidentally
 * replaced or removed (PDF 110's own wording, used once). Never describes backup frequency, restore points or
 * redundancy. Version Restore (94) owns going back on purpose; Asset Deletion (109) owns removal under policy.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of handling accidental replacement and removal in creative libraries; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 110,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Versioning & Asset Management",
      lede: "What to do when the wrong file replaces the right one or an asset disappears by mistake, who needs to be involved, and the habits that mean a team needs to recover less often.",
      visual: { diagram: "version-record", focus: "restore" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 110 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Getting content back after a replacement or removal goes wrong",
      body: [
        "In GetSibu, versioning and backups can support recovery when content has been replaced or removed by accident.",
        "Accidents in a creative library are ordinary. An editor uploads last week’s export over this week’s; a designer replaces an approved banner with a work-in-progress file of the same name; someone removes a folder they believed held only copies. What makes these incidents costly is seldom the file itself. It is the time spent working out what the correct state was, and who used the wrong one in the meantime.",
        [
          "Recovery is not the same as deciding to go back. ",
          { text: "Version restore", page: 94 },
          " covers returning to an earlier creative state on purpose, whereas recovery deals with mistakes. It also depends on habits formed earlier: an asset that has been ",
          { text: "replaced in place", page: 93 },
          " keeps its earlier versions within the asset record, which gives a wrong replacement a way back.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Accidental replacement", "Accidental removal", "Versions as a way back", "Establishing the correct state", "Prevention before recovery"],
      },
      glance: {
        heading: "Recovery in brief",
        facts: [
          { label: "Helps after", value: "Accidental replacement or removal" },
          { label: "Earlier files", value: "File Version History", page: 92 },
          { label: "Going back on purpose", value: "Version Restore", page: 94 },
          { label: "Removal rules", value: "Asset Deletion", page: 109 },
        ],
        actions: [{ kind: "route", path: "/features/asset-management", label: "More in Versioning & Asset Management" }]
      },
      sources: [{ kind: "pdf", page: 110 }, { kind: "pdf", page: 94 }, { kind: "pdf", page: 93 }, { kind: "pdf", page: 92 }, { kind: "pdf", page: 109 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "accidents",
      eyebrow: "Kinds of accident",
      heading: "Common accidents and what putting them right involves",
      items: [
        {
          heading: "The wrong file replaces the right one",
          summary: "The most frequent accident is usually the easiest to put right.",
          icon: "refresh",
          body: [
            ["Uploading the wrong export over an asset changes what everyone who opens it sees from that moment. The displaced file is the one to look for, and the asset’s ", { text: "file version history", page: 92 }, " is the record to look in."],
          ],
          points: ["The displaced file stays in the record", "The fix starts from the asset itself"],
        },
        {
          heading: "An approved file replaced by a draft",
          summary: "The real damage lies in whoever used the draft before anyone noticed.",
          icon: "approval",
          body: [
            ["Putting the right file back is half the job. The other half is being clear with colleagues about which file was actually signed off. Through ", { text: "asset approval", page: 68 }, ", content moves through a process with status history, which records whether it was awaiting review, approved or required changes."],
            "It is also worth asking who downloaded or shared the asset while the draft was current, because those copies will not correct themselves.",
          ],
        },
        {
          heading: "An asset removed by mistake",
          summary: "Removal is harder to notice, because nothing is left behind to look wrong.",
          icon: "trash",
          body: [
            "A missing asset tends to go unnoticed until someone searches for it and comes up empty. Reporting the gap to whoever manages that part of the library, with as much detail as possible about what was there, gives any recovery attempt its best start.",
            ["Because ", { text: "asset deletion", page: 109 }, " is carried out by authorised users under organisational policy and permissions, the people responsible for an area are the natural first contact."],
          ],
        },
        {
          heading: "A whole set affected at once",
          summary: "Bulk mistakes need a list of what was touched before anything else happens.",
          icon: "layers",
          body: [
            "When a batch of files is overwritten or a collection is removed, fixing assets one by one as people complain leaves gaps. Start by listing what the set contained and which pieces matter most right now, such as material in a live campaign, then work through them in that order.",
          ],
          points: ["List the affected assets first", "Put right what matters most first"],
        },
      ],
      sources: [{ kind: "pdf", page: 92 }, { kind: "pdf", page: 68 }, { kind: "pdf", page: 109 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "put-right",
      eyebrow: "Step by step",
      heading: "Putting a mistaken replacement right",
      intro: "Most of the effort goes into establishing what the asset should be; the recovery itself is the short part.",
      steps: [
        { heading: "Halt further use", body: "Let colleagues working with the asset know its current file is wrong, so nobody publishes or sends it on while it is being fixed.", icon: "flag" },
        { heading: "Establish the right version", body: "Approval history reduces confusion around which version was accepted, and that is usually the state the asset should return to.", icon: "history", page: 77 },
        { heading: "Rescue the misplaced file", body: "If the file uploaded by mistake is genuine work, such as a newer draft of something else, keep a copy of it and put it where it belongs before correcting anything.", icon: "upload" },
        { heading: "Bring that version back", body: "Restore the older version so the asset returns to the state it was in before the mistake.", icon: "restore", page: 94 },
        { heading: "Look for the same slip elsewhere", body: "A wrong upload rarely happens alone: check the other cuts, sizes or language versions handled in the same session.", icon: "search" },
        { heading: "Note the incident on the asset", body: "A short comment saying which file was wrong and that it has been corrected answers questions from anyone who took a copy in between.", icon: "message", page: 62 },
      ],
      sources: [{ kind: "pdf", page: 77 }, { kind: "pdf", page: 94 }, { kind: "pdf", page: 62 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "prevention",
      eyebrow: "Fewer accidents to recover from",
      heading: "What reduces the need for recovery in the first place",
      items: [
        { heading: "Status checked before a swap", body: "Review status gives a clear indication of whether an asset has already completed approval, which is worth checking before anyone replaces its file.", icon: "approval", page: 76, points: ["Approved work easier to recognise"] },
        { heading: "Removal under policy", body: "A written rule on what may be removed, and by whom in each area, narrows the number of people in a position to make the most serious mistakes.", icon: "key", page: 109 },
        { heading: "Archiving as the cautious option", body: "Archiving retains content that is no longer in active use, so tidying a library does not have to mean removing anything.", icon: "archive", page: 108, points: ["History kept out of daily view"] },
        { heading: "Private until granted", body: "New folders can remain private until access is explicitly granted, keeping unfinished work away from people who might overwrite it.", icon: "lock", page: 154 },
        { heading: "Editing without admin rights", body: "Editors can be given the access required to work with creative assets without receiving unnecessary administrative privileges.", icon: "user", page: 156 },
      ],
      sources: [{ kind: "pdf", page: 76 }, { kind: "pdf", page: 109 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 154 }, { kind: "pdf", page: 156 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about asset recovery",
      items: [
        {
          question: "Is asset recovery worth planning before anything goes wrong?",
          answer: "Partly. Agreeing whom to contact, and who can confirm the correct state of important assets, shortens an incident when one happens. The rest of the planning is prevention: sensible permissions and a clear policy on removal.",
        },
        {
          question: "Why is an accidental removal harder to spot than an accidental replacement?",
          answer: "A wrong replacement leaves a visibly wrong file for someone to notice. A removal leaves nothing at all, so it tends to surface only when somebody goes looking for the asset.",
        },
        {
          question: "Does asset recovery make careful deletion checks unnecessary?",
          answer: ["No. Recovery, where it is possible, is a safety net rather than a policy. Checking use and authority before ", { text: "removing assets", page: 109 }, " spares a team the disruption that even a successful recovery involves."],
        },
        {
          question: "Who should be told when an asset has been recovered?",
          answer: "Anyone likely to have relied on the wrong or missing file: the teams who work with the asset, colleagues who passed it on and, for client work, the account lead who may need to explain the correction.",
        },
      ],
      sources: [{ kind: "pdf", page: 110 }, { kind: "pdf", page: 109 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on versions, removal and getting work back",
      variant: "compact",
      pages: [94, 92, 93, 109, 108, 77],
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
