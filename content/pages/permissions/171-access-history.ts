/**
 * 171 · Access History — /permissions/access-history
 *
 * Angle (cluster: access-audit, primary): information about important user interactions with the library — how people
 * use the access they have, who draws on that information and how to treat a record about colleagues responsibly.
 * Permission Auditing (170) owns changes to access; Asset Activity (118) and Asset Audit Trail (119) own the per-asset
 * record. Which interactions are included is not specified in the sources, so none are listed as part of access history.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how organisations use records of library interactions; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 171,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Permissions & Multi-Tenancy",
      lede: "What information about people’s interactions with a creative library is good for, who in an organisation draws on it, and how to handle a record about colleagues with the care it deserves.",
      visual: { diagram: "tenant-boundaries", focus: "audit" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 171 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "How people actually use the library they can reach",
      body: [
        "Access history in GetSibu provides information about important user interactions with the library. Permissions describe what someone may reach; access history concerns what people have been doing with that access.",
        "Many practical questions sit in the gap between the two. A folder open to a whole department may be used by a handful of people and ignored by the rest. A colleague who moved to another team months ago may still matter when someone asks how a particular file travelled. Permission settings cannot answer questions like these, because they only describe what is allowed.",
        [
          "Access history sits beside records with a narrower focus. At the level of a single file, views, downloads, edits and approvals can become part of an ",
          { text: "asset’s activity history", page: 118 },
          ".",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Important user interactions with the library", "How access is used, not only granted", "Context for questions about files", "A record about colleagues", "Distinct from changes to permissions"],
      },
      highlight: {
        heading: "In practice",
        body: "Before renewing an expensive photography licence, a brand team checks what information about library interactions suggests about whether those images are still in use, rather than renewing out of habit.",
        tags: ["Brand", "Legal", "Library owners"],
      },
      glance: {
        heading: "Access history in brief",
        facts: [
          { label: "Area", value: "Permissions & Multi-Tenancy" },
          { label: "Provides", value: "Information about important user interactions" },
          { label: "Changes to access", value: "Permission Auditing", page: 170 },
          { label: "Per asset", value: "Asset Activity", page: 118 },
        ],
        actions: [{ kind: "route", path: "/permissions", label: "More in Permissions & Multi-Tenancy" }]
      },
      sources: [{ kind: "pdf", page: 171 }, { kind: "pdf", page: 118 }, { kind: "pdf", page: 170 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "perspectives",
      eyebrow: "By perspective",
      heading: "What access history is useful for, depending on who asks",
      tabs: [
        {
          label: "Library owners",
          heading: "Checking whether the structure fits real use",
          icon: "folder",
          body: [
            "Library owners want to know whether the structure they designed works for the people in it. Information about how the library is used can prompt a conversation about areas that attract little attention, or material people depend on that sits outside the places designed for them.",
            [{ text: "Folder access maps", page: 173 }, " take a related view, helping organisations understand how folders are accessed across their teams."],
          ],
          points: ["Structure checked against use", "A prompt, not a verdict"],
        },
        {
          label: "Security teams",
          heading: "Context for a security concern",
          icon: "shield",
          body: [
            "Security concerns rarely arrive with an explanation attached, and acting on a guess can lock out the wrong people or miss the real cause. Information about important interactions with the library is part of the picture security teams build before deciding what to change.",
            [{ text: "Audit logs", page: 326 }, " contribute a historical record of important actions, including permissions, comments and asset changes, to the same investigation."],
          ],
          points: ["Understanding before acting", "One source among several"],
        },
        {
          label: "Brand and legal",
          heading: "Understanding how restricted material is used",
          icon: "flag",
          body: [
            "Licensed photography, embargoed material and footage with talent restrictions all come with conditions. Knowing how people have interacted with that material can help brand and legal teams judge whether the conditions are being respected.",
            [{ text: "Expiring creative assets", page: 104 }, " approach the same concern from another direction, with expiry information that can flag content no longer to be used."],
          ],
          points: ["Conditions on licensed material", "Expiry as a second signal"],
        },
        {
          label: "Team leads",
          heading: "Seeing whether material reaches its audience",
          icon: "users",
          body: [
            "For a team lead, interactions with the library can indicate whether new colleagues are finding the material meant for them. When they are not, the cause is often onboarding or folder structure rather than the colleagues themselves.",
          ],
          points: ["Onboarding that works", "Material that reaches its audience"],
        },
      ],
      sources: [{ kind: "pdf", page: 173 }, { kind: "pdf", page: 326 }, { kind: "pdf", page: 104 }, { kind: "pdf", page: 171 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "responsibly",
      eyebrow: "Considerations",
      heading: "Using a history of interactions responsibly",
      items: [
        {
          heading: "Start from a question",
          summary: "Access history is most useful when someone is trying to answer something specific.",
          icon: "help",
          body: [
            "Looking through a record of colleagues’ interactions without a purpose rarely produces insight and can feel intrusive. Begin with a question, such as how an asset left the library or whether a licensed collection is still in use, and look only as far as that question requires.",
          ],
        },
        {
          heading: "Remember that it describes people",
          summary: "A record of user interactions is information about colleagues, not only about files.",
          icon: "user",
          body: [
            "Treat access history with the care you would give any other information about staff. Agree who may consult it and for what purposes, and tell the team, so it is understood as a safeguard for the library rather than a way of watching individuals.",
          ],
        },
        {
          heading: "Read interactions in context",
          summary: "A single interaction rarely proves anything on its own.",
          icon: "eye",
          body: [
            "An interaction with sensitive material may be exactly the job someone was asked to do. Before drawing any conclusion, check what they were responsible for at the time and whether their access matched that responsibility.",
          ],
        },
        {
          heading: "Fix problems in the access itself",
          summary: "History explains what happened; permissions decide what can happen next.",
          icon: "lock",
          body: [
            [
              "If the history reveals a problem, the remedy lies in how access is set. ",
              { text: "Folder-level permissions", page: 152 },
              " allow access to be controlled more finely than organisation-wide rules, and ",
              { text: "secure asset sharing", page: 172 },
              " explains how sharing can be controlled through permissions rather than relying only on unrestricted links.",
            ],
          ],
        },
        {
          heading: "Know which record answers which question",
          summary: "Access history is not the place to look for everything that happened to one file.",
          icon: "audit",
          body: [
            [
              "For a particular file, the ",
              { text: "asset audit trail", page: 119 },
              " gives visibility into important actions performed on creative files. Going to the right record first saves time when a question is urgent.",
            ],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 152 }, { kind: "pdf", page: 172 }, { kind: "pdf", page: 119 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "An unreleased product image appears outside the company",
      team: "A consumer electronics brand team",
      situation: "An image of an unannounced product appears on a fan forum shortly before the launch. The brand team needs to understand how it left the library before deciding what to change.",
      steps: [
        { heading: "The image is traced in the library", body: "The team finds the leaked image among the launch assets and looks at that asset’s activity history." },
        { heading: "Library interactions are reviewed", body: "Information about important user interactions with the library helps the team see how the launch material was being used." },
        { heading: "The folder’s audience is checked", body: ["Because ", { text: "permission changes can be recorded", page: 170 }, " in the audit history, the team also looks at whether the launch folder was opened to more people during production than the launch plan intended."] },
        { heading: "Access is tightened for the rest of the launch", body: ["The remaining launch folders are narrowed to the people still working on them, and any new launch folder ", { text: "stays private until access is granted", page: 154 }, "."] },
      ],
      outcome: "The team narrows down how the image could have left the library and corrects the access that made it possible, instead of acting on guesswork.",
      link: { page: 223, label: "GetSibu for Enterprise Marketing" },
      sources: [{ kind: "pdf", page: 171 }, { kind: "pdf", page: 118 }, { kind: "pdf", page: 170 }, { kind: "pdf", page: 154 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about access history",
      items: [
        {
          question: "How is access history different from asset access analytics?",
          answer: [
            { text: "Asset access analytics", page: 197 },
            " provide information about how content is being viewed or used, which suits questions about the content itself. Access history centres on important user interactions with the library, which suits questions about how people use the access they hold.",
          ],
        },
        {
          question: "How does access history differ from permission auditing?",
          answer: [
            { text: "Permission auditing", page: 170 },
            " is about changes to the rules on who can reach what. Access history is about how people have interacted with the library within those rules.",
          ],
        },
        {
          question: "Which interactions does access history cover?",
          answer: "Treat that as a question to settle during evaluation. Confirm which kinds of interaction are included before building a review or investigation process that depends on one in particular.",
        },
      ],
      sources: [{ kind: "pdf", page: 171 }, { kind: "pdf", page: 197 }, { kind: "pdf", page: 170 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on records of library use",
      variant: "compact",
      pages: [170, 118, 119, 173, 197, 326],
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
