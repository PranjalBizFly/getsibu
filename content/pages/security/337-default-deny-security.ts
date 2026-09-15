/**
 * 337 · Default-Deny Security — /security/default-deny-security
 *
 * Angle (clusters: access-control, security-foundations): the security rationale for a closed default. Why failing
 * closed is the safer error, what it contains when new content is created, how to check it holds, and what it leaves
 * to other controls. Default-Deny Access (154) owns the day-to-day working model of folders that start private.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of default-deny as a security principle and of general review practice; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 337,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Security",
      lede: "Why a library that starts new content closed is the safer security design, which risks a closed default contains at the moment work is created, and how to confirm that it holds before you rely on it.",
      visual: { diagram: "control-map", focus: "access" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 337 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A safe answer for the moments nobody decides",
      body: [
        "Default-deny folder access ensures that new content is not automatically exposed to every user. In GetSibu, a new folder can stay private until someone grants access to it.",
        "Every access control has a default: the outcome that applies when nobody has made a choice. In a busy creative library that happens constantly. Folders are created late at night before a shoot, by someone in their first week or in the rush before a pitch, and the person creating them is thinking about the work, not about who else might see it. A security design cannot depend on that moment going right every time.",
        [
          "A closed default turns the risk of forgetting to restrict into the risk of forgetting to share. How teams work day to day with folders that start private is the subject of ",
          { text: "default-deny access", page: 154 },
          "; the security question is what the closed starting point protects against, and what it leaves to controls such as the limits on actions described in ",
          { text: "RBAC security", page: 325 },
          ".",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["New content closed until access is granted", "Failing safe rather than failing open", "Need to know from the first file", "Less reach for a misused account", "Wider access only through deliberate grants"],
      },
      glance: {
        heading: "Default-deny security in brief",
        facts: [
          { label: "Area", value: "Security" },
          { label: "Protects", value: "New content from automatic exposure" },
          { label: "Starting state", value: "Private until access is granted" },
          { label: "Day-to-day model", value: "Default-Deny Access", page: 154 },
        ],
        actions: [{ kind: "route", path: "/security", label: "More in Security" }]
      },
      sources: [{ kind: "pdf", page: 337 }, { kind: "pdf", page: 154 }, { kind: "pdf", page: 325 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "principles",
      eyebrow: "Security principles",
      heading: "Why a closed default is the safer failure",
      items: [
        {
          heading: "Failing closed as a security principle",
          summary: "When a decision is missing, a safe design denies rather than allows.",
          icon: "shield",
          body: [
            "Security engineering has long preferred designs that deny access when nobody has decided, because that kind of failure announces itself. A person who cannot open a folder asks for access; material exposed by an open default produces no error and no complaint.",
            "The preference matters most for work that cannot be unseen once it has travelled, such as a draft campaign or a client’s unreleased product. Default-deny applies it at the point where new content is created.",
          ],
          points: ["Missing access announces itself", "Exposure makes no noise"],
        },
        {
          heading: "Need to know, from the first file",
          summary: "Access should follow the work, including for content that has only just arrived.",
          icon: "users",
          body: [
            "The principle of least privilege says people should reach what their work requires and nothing more. Libraries often apply it during periodic tidy-ups, which leaves the newest and frequently most sensitive material outside the principle until the next review comes round.",
            [
              "A closed default applies need to know when content is created instead. It pairs naturally with access scoped to responsibilities: ",
              { text: "manager permissions", page: 155 },
              " give access to specific folders or teams while areas outside a manager’s responsibilities stay restricted.",
            ],
          ],
          points: ["Least privilege applied to new work", "No gap until the next review"],
        },
        {
          heading: "Less for a misused account to reach",
          summary: "An account is only as dangerous as what it can open.",
          icon: "lock",
          body: [
            "Reused passwords, unlocked laptops and convincing imitations of sign-in pages mean that, sooner or later, some account will be used by the wrong person. Under an open default, that account reaches each folder created after the compromise as well as the material that existed before it.",
            [
              "When new content is not automatically exposed to every user, a misused account does not gain access to new work merely by existing. Making misuse less likely in the first place is a separate layer: ",
              { text: "multi-factor authentication", page: 336 },
              " adds another layer of account protection.",
            ],
          ],
          points: ["Smaller reach for the wrong person", "Paired with stronger sign-in"],
        },
        {
          heading: "Grants that leave a trace",
          summary: "When access has to be given, each widening of it is an act somebody performed.",
          icon: "audit",
          body: [
            "Under an open default, broad visibility is nobody’s decision, so there is nothing to review and nobody to ask about it. Under a closed default, the audience for a new folder grows through grants, and a grant is an event with a time and a person behind it.",
            "That makes access accountable, because every widening has someone who can be asked why it was needed.",
          ],
        },
        {
          heading: "What a closed default leaves to other controls",
          summary: "Default-deny decides who can reach new content, and nothing beyond that.",
          icon: "layers",
          body: [
            "It does not limit what people can do once access has been granted, and it cannot follow a file after someone with access sends a copy elsewhere. Those risks belong to role-based limits and to the way work is shared.",
            "Treating default-deny as one layer among several keeps expectations accurate. It closes the gap at the moment of creation; the other controls cover what happens afterwards.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 337 }, { kind: "pdf", page: 155 }, { kind: "pdf", page: 336 }, { kind: "pdf", page: 325 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "verify",
      eyebrow: "Before you rely on it",
      heading: "Checking that a closed default really holds",
      intro: "A general routine for a security review of any library that describes itself as default-deny.",
      steps: [
        { heading: "Map where content starts", body: "List the ways material enters the library, such as new project folders, direct uploads and imports from connected storage, so the check covers every route and not only the most common one.", icon: "map" },
        { heading: "Create a test folder", body: "Using an account that is allowed to create folders, add a new folder containing a harmless sample file and grant nobody access to it.", icon: "folder" },
        { heading: "Look from an ordinary account", body: "Ask a colleague with no grant to that folder to try to open it, and confirm that they cannot, which is what a private folder should mean in practice.", icon: "eye" },
        { heading: "Grant one team and recheck", body: "Give access to a single team, confirm that its members can now open the folder, and confirm that people outside the team still cannot.", icon: "users" },
        { heading: "Repeat after big changes", body: "Run the same check after a reorganisation, a large import or a change to how teams are set up, when assumptions about access are most likely to be out of date.", icon: "refresh" },
      ],
      sources: [{ kind: "pdf", page: 337 }, { kind: "pdf", page: 121 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A newly acquired studio joins while its acquisition is still secret",
      team: "A consumer brand’s creative operations team",
      situation: "A consumer brand has bought a small design studio and is adding the studio’s staff to its creative library over a single week. At the same time, a confidential campaign announcing the acquisition is being prepared.",
      steps: [
        { heading: "Many accounts arrive at once", body: ["Administrators add the studio’s designers as users; ", { text: "organisation admin controls", page: 158 }, " let them manage users, folders and access policies alongside the brand’s existing teams."] },
        { heading: "The announcement work starts closed", body: "Folders for the announcement film and press imagery are created while the new accounts are still being added. They start private, so neither the incoming studio nor the wider organisation is given access automatically." },
        { heading: "A small circle is granted", body: ["Access is granted to the core launch team and, through ", { text: "individual permissions", page: 157 }, ", to one studio designer whose work the announcement needs."] },
        { heading: "The studio settles in elsewhere", body: ["Treated as a department, the studio receives ", { text: "access to the libraries relevant to its work", page: 176 }, ", and the acquisition material stays outside that access."] },
        { heading: "The circle is checked before launch", body: ["Before the announcement, the security lead reviews the ", { text: "permission changes recorded in the audit history", page: 170 }, " for the campaign folders, and they match the grants the campaign lead asked for."] },
      ],
      outcome: "The acquisition is announced on the brand’s own schedule, and a week of adding new accounts never required anyone to go back and close folders that had opened by default.",
      link: { page: 223, label: "GetSibu for Enterprise Marketing" },
      sources: [{ kind: "pdf", page: 158 }, { kind: "pdf", page: 337 }, { kind: "pdf", page: 157 }, { kind: "pdf", page: 176 }, { kind: "pdf", page: 170 }, { kind: "pdf", page: 223 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about default-deny security",
      items: [
        {
          question: "Does default-deny security make sense for a small team that shares most of its work?",
          answer: "Yes. Even where most folders end up shared, a closed start means the few things that must stay narrow, such as a pitch for a rival brand or confidential staff photography, do not depend on someone remembering to restrict them.",
        },
        {
          question: "How does default-deny security relate to tenant isolation?",
          answer: [
            "They guard different boundaries. Default-deny concerns new content inside one organisation, while ",
            { text: "tenant isolation", page: 324 },
            " concerns the strict separation between whole customer environments, which the GetSibu architecture is designed around through tenant-scoped data access.",
          ],
        },
        {
          question: "Who should decide when a private folder opens to more people under default-deny?",
          answer: "The person accountable for the material in it, such as the campaign or production lead, rather than whoever happens to hold administrative rights. Keeping that decision with the owner of the work makes each grant easier to justify when it is reviewed later.",
        },
      ],
      sources: [{ kind: "pdf", page: 324 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on protecting new content",
      variant: "compact",
      pages: [154, 325, 336, 170, 324, 321],
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
