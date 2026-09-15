/**
 * 325 · RBAC Security — /security/rbac-security
 *
 * Angle (clusters: access-control, security-foundations): the security case for limiting what users can perform —
 * which actions deserve the tightest limits, the principles behind limiting them and how limits contain a misused
 * account. 153 (framed) owns roles as a concept and 151 permissions in general. No role list anywhere.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of access-control security principles; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 325,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Security",
      lede: "Why limiting what each account can do matters as much as limiting what it can see, which actions in a creative library deserve the tightest limits, and how those limits contain the harm when an account is misused.",
      visual: { diagram: "control-map", focus: "access" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 325 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Limits on actions, not only on visibility",
      body: [
        "In GetSibu, role-based access control limits what users can perform according to their organisational responsibilities. For security, the key word is perform: the question is not only which assets a person can see, but what they are able to do to those assets and to the library around them.",
        "Seeing and acting carry very different risks. Someone who can view a campaign folder could leak its contents. Someone who can change who has access to that folder, replace its master files or remove them can cause far more lasting damage, and so can anyone who happens to be using their account. Limiting actions narrows both the mistakes a person can make and the harm an intruder can do with a stolen login.",
        [
          "Organising access around responsibilities is explained as a concept in ",
          { text: "role-based access control", page: 153 },
          ". The security question is narrower: which actions are worth restricting, and why restricting them protects the library even when other defences fail.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Actions limited by responsibility", "Seeing compared with changing", "Administrative privilege kept narrow", "Containing a misused account", "Separation of duties"],
      },
      glance: {
        heading: "RBAC security in brief",
        facts: [
          { label: "Area", value: "Security" },
          { label: "Limits", value: "What users can perform" },
          { label: "Based on", value: "Organisational responsibilities" },
          { label: "The concept", value: "Role-Based Access Control", page: 153 },
        ],
        actions: [{ kind: "route", path: "/security", label: "More in Security" }]
      },
      sources: [{ kind: "pdf", page: 325 }, { kind: "pdf", page: 153 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "sensitive-actions",
      eyebrow: "Sensitive actions",
      heading: "Actions in a creative library that deserve the tightest limits",
      columns: ["Why it matters for security", "What GetSibu provides"],
      rows: [
        { label: "Changing access", page: 170, cells: ["One change can open sensitive work to many people at once", "Permission changes can be recorded in the audit history"] },
        { label: "Removing assets", page: 109, cells: ["Removal can destroy work or obscure what happened", "Removal by authorised users according to policies and permissions"] },
        { label: "Downloading", page: 114, cells: ["A downloaded copy leaves every library control behind", "Governance that defines who can download"] },
        { label: "Approving content", page: 68, cells: ["Sign-off releases work for use beyond the team", "An approval process with status history"] },
        { label: "Administration", page: 156, cells: ["Administrative reach extends across users and folders", "Creative work without unnecessary administrative privileges"] },
      ],
      sources: [{ kind: "pdf", page: 170 }, { kind: "pdf", page: 109 }, { kind: "pdf", page: 114 }, { kind: "pdf", page: 68 }, { kind: "pdf", page: 156 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "principles",
      eyebrow: "Principles",
      heading: "Security principles behind limiting actions",
      items: [
        {
          heading: "Contain the harm of a misused account",
          summary: "Plan on the basis that, sooner or later, some account will be used by the wrong person.",
          icon: "shield",
          body: [
            "Passwords are reused, laptops are left unlocked and messages designed to capture a login are convincing. Limits on actions do not stop that happening; they decide how much an intruder can do once it has.",
            ["The two defences work as a pair. ", { text: "Multi-factor authentication", page: 336 }, " adds another layer of account protection, making misuse less likely, while limits on actions make the misuse that still happens less damaging."],
          ],
        },
        {
          heading: "Separate duties that check one another",
          summary: "The person who makes a change should not always be the person who can sign it off.",
          icon: "users",
          body: [
            "Separation of duties, a control long used in finance, suits creative work well. When producing work and signing it off are responsibilities held by different people, and changes to access are looked at by someone other than the person who made them, a single mistake or a single dishonest act is much more likely to be noticed.",
            "Small teams cannot always divide duties this neatly. Where one person must hold several responsibilities, a second person looking over important changes afterwards brings back some of that check.",
          ],
        },
        {
          heading: "Keep administration apart from everyday work",
          summary: "The accounts used for daily creative tasks are the ones most exposed to everyday risks.",
          icon: "lock",
          body: [
            "Everyday accounts open emails, follow links and handle files from outside the organisation. When such an account also carries wide administrative powers, an ordinary slip can have organisation-wide consequences.",
            "Keeping administrative responsibilities off the accounts used for everyday creative work limits how far any routine slip can spread.",
          ],
        },
        {
          heading: "Plan for misuse by people with legitimate access",
          summary: "Not every misuse comes from outside; limits on actions also bound what a valid account can do on purpose.",
          icon: "user",
          body: [
            "Someone leaving on bad terms, or tempted to take work elsewhere, already has a valid login, so stronger sign-in does nothing to stop them. What limits the harm is how little their account can do beyond their own work: an account that can view one campaign cannot remove the brand’s master files or widen access to other areas.",
            ["Scoping abilities by responsibility is what makes that true in practice. ", { text: "Manager permissions", page: 155 }, " show the principle at work: access to specific folders or teams while areas outside those responsibilities stay restricted."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 336 }, { kind: "pdf", page: 155 }, { kind: "pdf", page: 325 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A retoucher’s password may have been exposed mid-season",
      team: "A fashion brand’s studio",
      situation: "A retoucher in a fashion brand’s in-house studio reports that their personal email account has been taken over, and that the password they used for the brand’s library may have been exposed with it.",
      steps: [
        { heading: "The account is made safe first", body: ["The retoucher changes the password at once and tells an ", { text: "organisation administrator", page: 158 }, ", who treats the account as possibly misused until the check is done."] },
        { heading: "The limits are confirmed", body: ["The administrator confirms what the account could do: work on assets in the collection’s retouching folder, without ", { text: "administrative privileges", page: 156 }, " and without the ability to change access to that folder."] },
        { heading: "The record is consulted", body: "Audit logs keep a historical record of important actions, including permission changes, comments and asset changes, so the administrator looks at what was recorded for the period the password may have been known to someone else." },
        { heading: "The check is narrowed", body: "The recorded actions all match work the retoucher recognises inside that one folder, which lets the check concentrate there rather than across the whole library." },
        { heading: "Work resumes within the same limits", body: "With the account secured, the retoucher returns to the folder with the abilities they had before, and no more." },
      ],
      outcome: "Because the account could act only inside one folder and without administrative reach, a possibly stolen password led to a focused check instead of a review of the entire library.",
      link: { page: 214, label: "GetSibu for Brand Teams" },
      sources: [{ kind: "pdf", page: 158 }, { kind: "pdf", page: 156 }, { kind: "pdf", page: 325 }, { kind: "pdf", page: 326 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about RBAC security",
      items: [
        {
          question: "How does RBAC security differ from folder-level permissions?",
          answer: [{ text: "Folder-level permissions", page: 152 }, " decide which areas of the library an account can reach, at a finer level than organisation-wide access. Role-based limits concern what the account can do once it is there. A secure setup needs an answer to both."],
        },
        {
          question: "Which accounts should be able to change permissions in a creative library?",
          answer: ["As few as is practical, each belonging to someone responsible for access policy. In GetSibu, ", { text: "organisation administrators", page: 158 }, " manage access policies, users, folders and organisational settings."],
        },
        {
          question: "Should connected applications be limited in the same way as people?",
          answer: ["Yes. An integration acts without anyone watching, so what its credentials allow deserves the same scrutiny as a person’s account. ", { text: "API authentication", page: 256 }, " means external applications interact with the platform within appropriate security boundaries."],
        },
      ],
      sources: [{ kind: "pdf", page: 152 }, { kind: "pdf", page: 158 }, { kind: "pdf", page: 256 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on limiting what accounts can do",
      variant: "compact",
      pages: [153, 156, 170, 336, 326],
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
