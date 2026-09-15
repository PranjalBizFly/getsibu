/**
 * 335 · SCIM — /security/scim (HELD: sso-scim)
 *
 * Angle (cluster: identity): automated provisioning and deprovisioning — accounts that follow the directory through
 * joining, moving and leaving, and the decisions that keep automation safe. page 334 owns sign-in and is not
 * linked; MFA (336) owns account protection. Framed with GetSibu Security. States the claim only in PDF 335 wording;
 * no plan tiers, protocol versions or claims about how groups map to permissions.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "General explanation of identity provisioning practice; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 335,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Security",
      lede: "What SCIM automates between an organisation’s directory and the applications its people use, how joining, moving and leaving flow through it, and the decisions that stop automated provisioning from creating problems of its own.",
      visual: { diagram: "folder-access", focus: "individual" },
      actions: [
        { kind: "global", cta: "primary" },
        { kind: "route", path: "/security", label: "More in Security" },
      ],
      sources: [{ kind: "pdf", page: 335 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Accounts that follow the directory, not a queue of requests",
      body: [
        "SCIM support can simplify user provisioning and deprovisioning for enterprise organisations. SCIM, the System for Cross-domain Identity Management, is an open standard that lets a directory or identity provider create, update and deactivate user accounts and groups in other applications without anyone doing it by hand.",
        "Manual account administration scales badly. Each joiner needs a request, each change of team relies on somebody remembering to adjust access, and each leaver depends on a checklist being followed in every tool. The leaver step is the easiest to miss, and a forgotten account is exactly what an intruder or a former employee with a grievance hopes to find.",
        [
          "For enterprise organisations the value is consistency at scale. ",
          { text: "Enterprise asset governance", page: 179 },
          " combines roles, permissions, audit logs, authentication and organisational policies, and none of those works well if the list of people they apply to is out of date.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["An open standard for identity data", "Accounts created from the directory", "Changes that follow people between teams", "Deprovisioning when people leave", "Access still decided in each application"],
      },
      highlight: {
        heading: "In practice",
        body: "An IT lead at a growing agency finds that three people who left last quarter still have working accounts in two tools nobody remembered. Provisioning from the directory is aimed at exactly that gap.",
        tags: ["IT", "HR", "Leavers"],
      },
      glance: {
        heading: "SCIM in brief",
        facts: [
          { label: "Area", value: "Security" },
          { label: "Simplifies", value: "Provisioning and deprovisioning" },
          { label: "Suited to", value: "Enterprise organisations" },
          { label: "Governance", value: "Enterprise Asset Governance", page: 179 },
        ],
      },
      sources: [{ kind: "pdf", page: 335 }, { kind: "pdf", page: 179 }, EXPLAINS],
    },
    {
      kind: "workflow",
      id: "lifecycle",
      eyebrow: "In general",
      heading: "Joining, moving and leaving with automated provisioning",
      intro: "How the lifecycle typically runs between a directory and the applications connected to it; what each application does at each stage varies.",
      stages: [
        { label: "Joiner", body: "A new starter is added to the directory, and an account is created in each connected application with their name, email address and group memberships." },
        { label: "Mover", body: "When someone changes team or role, their updated details and memberships reach connected applications without a separate request." },
        { label: "Absence", body: "Extended leave or a suspension can be reflected by deactivating accounts for a period, without deleting them." },
        { label: "Leaver", body: "Disabling the person in the directory deactivates their accounts in connected applications, closing access that would otherwise linger." },
        { label: "Clean-up", body: "Deactivated accounts are reviewed once work has been handed over, following the organisation’s own decisions about what to keep." },
      ],
      sources: [{ kind: "pdf", page: 335 }, EXPLAINS],
    },
    {
      kind: "before-after",
      id: "manual-automated",
      eyebrow: "The difference",
      heading: "Accounts managed by hand compared with accounts provisioned from a directory",
      beforeLabel: "Managed by hand",
      afterLabel: "Provisioned from the directory",
      before: ["A request for every new starter", "Team changes that rely on memory", "Leavers removed tool by tool, if at all", "Account lists that drift from reality", "Details retyped in each application"],
      after: ["Accounts created as people join the directory", "Membership changes passed on without requests", "Deactivation driven by the directory", "Applications in step with one source of truth", "Details kept consistent across tools"],
      sources: [{ kind: "pdf", page: 335 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "decisions",
      eyebrow: "Considerations",
      heading: "What to decide before connecting a directory",
      items: [
        {
          heading: "One source of truth",
          summary: "Settle which system is in charge of each piece of identity data.",
          icon: "database",
          body: [
            "Provisioning works best when one directory is clearly authoritative. If names, teams or email addresses can also be edited inside applications, the next update from the directory may overwrite those edits or conflict with them.",
          ],
        },
        {
          heading: "Deactivate or delete",
          summary: "Removing an account can mean suspending it or erasing it, with very different effects.",
          icon: "archive",
          body: [
            [
              "In many applications, deleting a leaver straight away can disturb the record of who made what. That record matters in a creative library, where ",
              { text: "asset attribution", page: 116 },
              " lets creators and contributors remain associated with assets. Establish how each option treats a leaver’s work, and decide how that work is handed over, before choosing.",
            ],
          ],
        },
        {
          heading: "Groups and what they mean",
          summary: "Directory groups seldom match an application’s needs exactly.",
          icon: "users",
          body: [
            "Directories often hold groups built for mailing lists or office locations. Before such groups go anywhere near access decisions, check whether they describe responsibilities an application should care about, or whether new groups are needed.",
          ],
        },
        {
          heading: "Starting with a small group",
          summary: "Automation can repeat a mistake across many accounts before anyone notices.",
          icon: "user",
          body: [
            "A connection that maps the wrong group or detail can create, change or deactivate many accounts in one pass. Connecting a limited pilot group first shows such errors while they affect a handful of people rather than the whole organisation.",
          ],
        },
        {
          heading: "Automation tied to a person",
          summary: "Deactivating someone does not always stop what their credentials set in motion.",
          icon: "plug",
          body: [
            "Integrations configured under an individual’s name, or tokens that person created, can outlive their account. Running automation under dedicated credentials instead of personal ones makes deprovisioning far more complete.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 116 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about SCIM",
      items: [
        {
          question: "How is SCIM different from single sign-on?",
          answer: "Single sign-on confirms who someone is as they sign in. SCIM keeps their account in each application created, updated and deactivated in step with the directory, so organisations frequently use the two together.",
        },
        {
          question: "Who should look after the connection between a directory and a creative library?",
          answer: "Usually IT, which runs the directory, working with whoever manages the library to agree which details the library needs. A change on either side, such as a renamed group, can quietly alter who is provisioned, so each should hear about the other’s changes before they are made.",
        },
        {
          question: "What should be tested before relying on automated deprovisioning?",
          answer: "Run a test leaver from start to finish. Check that accounts are deactivated where expected, that the work they created is still attributed and reachable by the right people, and that nothing important depended on that person alone.",
        },
        {
          question: "Does SCIM decide which folders a new starter can open?",
          answer: [
            "Provisioning and access are separate decisions. Provisioning makes sure an account exists and carries the right details, while what it can reach in a creative library is an access decision. ",
            { text: "Folder-level permissions", page: 152 },
            " allow access to be controlled at a more detailed level than organisation-wide access.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 335 }, { kind: "pdf", page: 152 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on managing who has access",
      variant: "compact",
      pages: [179, 152, 116, 336, 321],
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
