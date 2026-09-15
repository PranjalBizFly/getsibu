/**
 * 321 · GetSibu Security — /security (section root)
 *
 * Angle (cluster: security-foundations, primary): the security category itself — the five elements the PDF names
 * (encryption, authentication, access control, tenant isolation, audit logging), the question each answers and
 * where different readers start. The template adds the section's areas and the list of child topics, so this page
 * has no capabilities grid of children and no related strip. "Encryption" stays generic; the only concrete
 * encryption fact is encrypted secret storage (323). Held pages 322 and 327–335 are never linked or described.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of security in creative libraries; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 321,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Security",
      lede: "Find the question each part of GetSibu security answers, from protecting the accounts people sign in with to keeping a record of important actions, and the place to start for what you need to assess.",
      visual: { diagram: "control-map" },
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 321 }, { kind: "pdf", page: 336 }, { kind: "pdf", page: 323 }, { kind: "pdf", page: 325 }, { kind: "pdf", page: 324 }, { kind: "pdf", page: 326 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Five protections designed into the platform",
      body: [
        "GetSibu builds security into its architecture through encryption, authentication, access control, tenant isolation and audit logging. Treating these as separate elements makes it easier to see what each one guards and where they depend on one another.",
        "Creative libraries hold material whose value depends on who sees it and when. An unannounced campaign, footage shot under a restrictive licence, a client’s product before its launch and the credentials that connect the library to other systems all carry different risks. An account, a folder, an integration or a shared environment can each be the place where one of those risks becomes an exposure.",
        [
          "A review that looks only at passwords, or only at folders, therefore sees part of the picture. The aim the elements share is the one described under ",
          { text: "secure digital asset management", page: 340 },
          ": an environment for organisations that need to manage valuable creative assets responsibly.",
        ],
      ],
      keyPoints: {
        heading: "The five elements",
        items: ["Encryption built into the architecture", "Authentication for people and applications", "Access control by responsibility", "Isolation between tenants", "Audit logging of important actions"],
      },
      glance: {
        heading: "Security in brief",
        facts: [
          { label: "Area", value: "Security" },
          { label: "Built into", value: "The GetSibu architecture" },
          { label: "Access control", value: "Creative Asset Permissions", page: 151 },
          { label: "Enterprise view", value: "Enterprise Asset Security", page: 338 },
        ],
      },
      sources: [{ kind: "pdf", page: 321 }, { kind: "pdf", page: 340 }, { kind: "pdf", page: 151 }, { kind: "pdf", page: 338 }, EXPLAINS],
    },
    {
      kind: "layers",
      id: "elements",
      eyebrow: "How the parts fit together",
      heading: "The question each element answers",
      intro: "Every element responds to a different way a creative library could be misused.",
      layers: [
        {
          label: "Authentication",
          body: "Is this account really being used by the person it belongs to? Multi-factor authentication adds a further layer of protection to accounts, and requests made through the API are authenticated so applications also work within security boundaries.",
          page: 336,
        },
        {
          label: "Access control",
          body: "Once someone is signed in, what may they reach and do? Role-based access control limits the actions available to users according to their organisational responsibilities, while folders that start private stop new content reaching every user by default.",
          page: 325,
        },
        {
          label: "Tenant isolation",
          body: "Where one platform serves several organisations or clients, does each stay inside its own environment? Multi-tenant organisations need strict separation between customer environments, and the GetSibu architecture is built around data access scoped to each tenant.",
          page: 324,
        },
        {
          label: "Encryption",
          body: "Can information that must stay secret be protected where it is stored? Encryption is one of the elements built into the architecture, and OAuth credentials, SMTP passwords and API tokens can be protected using encrypted secret storage.",
          page: 323,
        },
        {
          label: "Audit logging",
          body: "Can anyone look back at what happened? Audit logs keep a historical record of important actions, among them changes to permissions, comments and changes to assets.",
          page: 326,
        },
      ],
      sources: [{ kind: "pdf", page: 336 }, { kind: "pdf", page: 256 }, { kind: "pdf", page: 325 }, { kind: "pdf", page: 337 }, { kind: "pdf", page: 324 }, { kind: "pdf", page: 323 }, { kind: "pdf", page: 326 }],
    },
    {
      kind: "tabs",
      id: "readers",
      eyebrow: "By reader",
      heading: "Where different readers usually begin",
      tabs: [
        {
          label: "Security teams",
          heading: "Starting from the ways a library could be misused",
          icon: "shield",
          body: [
            "Security teams tend to work backwards from misuse: a stolen password, access far wider than anyone intended, a credential left in an old script, a change that nobody can account for. Each of those maps to one of the five elements, which makes the assessment easier to divide up.",
            ["For a view that joins the elements together, ", { text: "enterprise asset security", page: 338 }, " combines identity management, encryption, permissions, auditability and data isolation."],
          ],
          points: ["Assess one kind of misuse at a time", "Match each risk to an element"],
        },
        {
          label: "Library owners",
          heading: "Keeping sensitive work with the people it is for",
          icon: "folder",
          body: [
            "For the people who run a creative library, security mostly arrives as everyday access decisions: which teams can reach a campaign folder, when an embargoed area should open to more people and how access ends when someone moves to other work.",
            ["Those decisions go better when the rules behind them are written down. ", { text: "Creative data governance", page: 339 }, " establishes rules around access, retention, usage and asset management, which gives the settings something to follow."],
          ],
          points: ["Access decided area by area", "Rules agreed before settings"],
        },
        {
          label: "Agencies",
          heading: "Two boundaries rather than one",
          icon: "briefcase",
          body: [
            ["For an agency, security has two layers that are easy to blur. The first is the boundary between clients: ", { text: "multi-tenant digital asset management", page: 160 }, " in GetSibu is designed for organisations that need multiple isolated environments, such as agencies managing multiple clients."],
            "The second is access inside each client’s library, where questions about folders, responsibilities and records arise just as they do in any organisation. Keeping the two layers apart makes each one easier to explain.",
          ],
          points: ["Separation between client environments", "Access decisions inside each one"],
        },
        {
          label: "Developers",
          heading: "Connecting applications without widening access",
          icon: "code",
          body: [
            "Integrations act on a library with credentials of their own, often without a person watching, so they belong in any security review rather than being treated as plumbing.",
            ["With ", { text: "API tenant isolation", page: 276 }, ", API access can include tenant context, which keeps multi-tenant environments properly separated when applications connect."],
          ],
          points: ["Automated access reviewed like people", "Tenant context in API requests"],
        },
      ],
      sources: [{ kind: "pdf", page: 338 }, { kind: "pdf", page: 339 }, { kind: "pdf", page: 160 }, { kind: "pdf", page: 276 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "before-choosing",
      eyebrow: "Considerations",
      heading: "What to understand before choosing a security topic",
      items: [
        {
          heading: "The elements are meant to overlap",
          summary: "No single protection is expected to hold on its own.",
          icon: "layers",
          body: [
            "Security practice calls this defence in depth. Stronger sign-in reduces the chance that an account is misused; limits on what the account can do reduce the harm if it is; and a record of important actions helps establish what happened afterwards.",
            ["The same thinking runs through ", { text: "creative security controls", page: 174 }, ", which help protect creative assets from unnecessary or unauthorised access."],
          ],
        },
        {
          heading: "Security enforces rules that governance decides",
          summary: "Controls say how access is limited; governance says what the limits should be.",
          icon: "book",
          body: [
            "A platform can keep a folder closed, but it cannot decide on its own that the folder should be closed. That decision comes from an organisation’s rules about sensitive material, who needs it and how long access should last.",
            ["When security questions keep turning into policy questions, ", { text: "enterprise asset governance", page: 179 }, " is the place to continue: it combines roles, permissions, audit logs, authentication and organisational policies."],
          ],
        },
        {
          heading: "An organisation’s own habits are part of security",
          summary: "A platform provides the controls; the people using it decide how well they work.",
          icon: "users",
          body: [
            "Shared logins, access granted to save a request and credentials pasted into documents all weaken protections that are working exactly as designed. None of them is a platform failure, and none of them is fixed by a platform alone.",
            "A short agreement on a few habits, such as reporting a suspicious sign-in request, ending access when a project closes and keeping credentials out of shared files, often does more than any single new control.",
          ],
        },
        {
          heading: "Sharing is an access decision as well",
          summary: "How files leave the team matters as much as who can reach them inside it.",
          icon: "lock",
          body: [
            "A carefully restricted folder offers little protection if its contents are then sent onwards as open links or attachments. Any review of library security should include how work is shared.",
            ["In GetSibu, ", { text: "secure asset sharing", page: 172 }, " means asset sharing can be controlled through permissions rather than relying only on unrestricted links."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 174 }, { kind: "pdf", page: 179 }, { kind: "pdf", page: 172 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about GetSibu security",
      items: [
        {
          question: "Where should a team new to creative library security begin?",
          answer: "With the material that would do the most harm if the wrong people saw it too early, such as unreleased campaigns and client work. Then check the protections around that material: who can reach it, how their accounts are protected and whether changes to it are on record.",
        },
        {
          question: "How often should a creative library’s security be looked at again?",
          answer: ["Whenever teams, projects or client relationships change, and at a regular interval in between, because access and habits drift without anyone noticing. ", { text: "Access history", page: 171 }, " provides information about important user interactions with the library, which gives that review something concrete to start from."],
        },
        {
          question: "Is library security a concern for small creative studios?",
          answer: "Yes. A small studio can still hold confidential client work and unannounced products. It usually needs fewer people involved in access decisions, but the questions about accounts, access and records are the same.",
        },
      ],
      sources: [{ kind: "pdf", page: 171 }, EXPLAINS],
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
