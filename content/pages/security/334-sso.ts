/**
 * 334 · SSO — /security/sso (HELD: sso-scim)
 *
 * Angle (cluster: identity): single sign-on as centralised identity management — what moves to the identity
 * provider, what it changes for IT, staff, freelancers and security, and what each application still decides. MFA
 * (336) owns second factors; page 335 owns provisioning and is not linked. Framed with GetSibu Security, not with
 * per-client authentication. States the claim only in PDF 334 wording; no plan tiers or protocol versions.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "General explanation of identity management practice; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 334,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Security",
      lede: "How single sign-on moves the question of who someone is to one central identity provider, what that changes for joiners, leavers and everyday sign-in, and what an organisation still has to decide inside each application.",
      visual: { diagram: "folder-access", focus: "team" },
      actions: [
        { kind: "global", cta: "primary" },
        { kind: "route", path: "/security", label: "More in Security" },
      ],
      sources: [{ kind: "pdf", page: 334 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "One identity, managed in one place",
      body: [
        "Single sign-on provides organisations with centralised identity management. Instead of every application keeping its own usernames and passwords, people sign in through the organisation’s identity provider, and applications trust that provider’s confirmation of who they are.",
        "Without it, identity is scattered. Each tool holds a separate account, so a person removed from email may still have working passwords elsewhere, and every extra password is one more to reuse, forget or give away. Central identity turns many separate decisions into one: once the identity provider stops vouching for someone, applications relying on it stop accepting new sign-ins from that person.",
        [
          "Single sign-on works at the front door. What a signed-in person may do inside a creative library is still decided in the library, where ",
          { text: "creative asset permissions", page: 151 },
          " let organisations control who can access its different areas.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["A central identity provider", "One sign-in accepted across applications", "Sign-in stopped for leavers in one place", "Sign-in policies applied centrally", "Access inside each application decided there"],
      },
      highlight: {
        heading: "In practice",
        body: "A designer who works across a brand library, a project tracker and shared storage signs in once in the morning with her company identity, and none of those tools asks her for a separate password.",
        tags: ["IT", "Designers", "Everyday sign-in"],
      },
      glance: {
        heading: "SSO in brief",
        facts: [
          { label: "Area", value: "Security" },
          { label: "Provides", value: "Centralised identity management" },
          { label: "Inside the library", value: "Creative Asset Permissions", page: 151 },
          { label: "Wider design", value: "GetSibu Security", page: 321 },
        ],
      },
      sources: [{ kind: "pdf", page: 334 }, { kind: "pdf", page: 151 }, { kind: "pdf", page: 321 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "sign-in",
      eyebrow: "In general",
      heading: "What happens when someone signs in through single sign-on",
      intro: "The usual sequence in any application that relies on an identity provider.",
      steps: [
        { heading: "Open the application", body: "The person goes to the application, which recognises that their sign-in is handled by the organisation’s identity provider.", icon: "user" },
        { heading: "Go to the provider", body: "Rather than asking for a password of its own, the application sends the person on to the identity provider.", icon: "network" },
        { heading: "Prove who they are", body: "The identity provider checks their credentials and any further factors that its own policy requires.", icon: "key" },
        { heading: "Return with an assertion", body: "The provider hands back a signed statement of the person’s identity, which the application verifies before trusting it.", icon: "check" },
        { heading: "Work within permissions", body: "Once signed in, the person reaches only what the application’s own access rules allow them to reach.", icon: "lock" },
      ],
      sources: [{ kind: "pdf", page: 334 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "who-it-affects",
      eyebrow: "Who it affects",
      heading: "What single sign-on changes for different people",
      tabs: [
        {
          label: "IT teams",
          heading: "Joiners and leavers handled centrally",
          icon: "server",
          body: [
            "For IT, the gain is control in one place. Accounts are created and suspended in the identity provider, and rules such as password strength or an extra factor are set there once and inherited by every application relying on it.",
            "The cost is dependence. If the identity provider is unavailable, or its own administrator accounts are misused, every connected application feels it, so those accounts deserve the strongest protection the organisation has.",
          ],
          points: ["Sign-in policies set once", "Provider administrators protected above all"],
        },
        {
          label: "Creative staff",
          heading: "Fewer passwords between people and their work",
          icon: "users",
          body: [
            "Editors, designers and producers move between many tools in a day. Signing in with the identity they already use removes a stream of password resets and the temptation to reuse one password everywhere.",
            "It also means a stolen password is one account to secure rather than a scattering of them across tools nobody has listed.",
          ],
          points: ["One identity across tools", "One account to secure after a leak"],
        },
        {
          label: "Freelancers",
          heading: "People without a place in the directory",
          icon: "user",
          body: [
            "Freelancers and partner agencies often have no identity in the organisation’s directory. The options include adding them for the length of a project, issuing guest identities or keeping separate, well-protected accounts for them.",
            "Whichever route is chosen, the end of an engagement needs to be as deliberate as its start, because central identity helps only with the people it actually manages.",
          ],
          points: ["A route for people outside the directory", "Endings planned as carefully as starts"],
        },
        {
          label: "Security teams",
          heading: "Sign-in activity seen in one place",
          icon: "shield",
          body: [
            [
              "Sign-in events recorded by the identity provider give security teams one place to look for unusual activity across applications. What people then do inside a library is a separate record; in GetSibu, ",
              { text: "audit logs", page: 326 },
              " provide a historical record of important actions.",
            ],
          ],
          points: ["Sign-ins reviewed centrally", "Actions inside the library recorded separately"],
        },
      ],
      sources: [{ kind: "pdf", page: 334 }, { kind: "pdf", page: 326 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "decisions",
      eyebrow: "Considerations",
      heading: "Decisions to make before relying on single sign-on",
      items: [
        {
          heading: "Emergency access",
          summary: "Keep a way in for administrators if the identity provider fails.",
          icon: "key",
          body: [
            "If every administrator can sign in only through the identity provider, an outage or a configuration mistake can lock everyone out at the worst possible moment. A very small number of tightly protected emergency accounts, rarely used and reviewed whenever they are, avoids that trap.",
          ],
        },
        {
          heading: "Where extra factors are enforced",
          summary: "Decide whether the provider, the application or both ask for more than a password.",
          icon: "lock",
          body: [
            [
              "With single sign-on, the identity provider normally enforces extra factors at sign-in, while applications may have multi-factor options of their own. ",
              { text: "Multi-factor authentication", page: 336 },
              " adds another layer of account protection only where it is actually applied, so settle which layer is responsible and neither is assumed to cover for the other.",
            ],
          ],
        },
        {
          heading: "Which standard both sides speak",
          summary: "The identity provider and the application must support the same protocol.",
          icon: "network",
          body: [
            "Single sign-on relies on open standards that let an identity provider and an application trust each other, and more than one is in common use. Before planning a rollout, confirm that the identity provider and each application share one, and agree which details, such as names and email addresses, pass between them.",
          ],
        },
        {
          heading: "Sessions that outlast a departure",
          summary: "Disabling an identity stops new sign-ins, but open sessions may continue.",
          icon: "clock",
          body: [
            "When someone leaves, their account at the identity provider is disabled, yet sessions already open in applications can run until they expire. Knowing how long that takes, and whether sessions can be ended sooner, closes a gap central identity leaves on its own.",
          ],
        },
        {
          heading: "Matching sign-ins to existing accounts",
          summary: "People who already use an application need to arrive at the account they already have.",
          icon: "users",
          body: [
            "When single sign-on is introduced to an application people already use, each sign-in has to reach that person’s existing account rather than a new, empty one. Matching usually relies on a detail such as an email address, so addresses that have changed, been shared or been reused for someone new deserve checking before the switch.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 336 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about SSO",
      items: [
        {
          question: "Does single sign-on create a single point of failure for a creative library?",
          answer: "It concentrates risk along with control. A misused identity provider account reaches many applications, but central identity also brings one set of protections, one place to remove leavers and one record of sign-ins. Protecting the provider’s own administrators keeps that balance favourable.",
        },
        {
          question: "Is single sign-on worth it for a studio without a central identity provider?",
          answer: "Not necessarily. Single sign-on needs an identity provider to sign in through, so a studio without one would be introducing that system first, with its own cost and upkeep. A studio already running one for email and files is closer to the benefit: a single place to stop a leaver signing in.",
        },
        {
          question: "Does single sign-on cover integrations and scripts that use the library?",
          answer: [
            "Normally not. Single sign-on is designed for people signing in. Software that connects to a library uses credentials of its own, and developers ",
            { text: "authenticate API requests", page: 275 },
            " using supported authentication credentials.",
          ],
        },
        {
          question: "Where does single sign-on sit among the parts of GetSibu security?",
          answer: [
            "It belongs to authentication. ",
            { text: "GetSibu security", page: 321 },
            " is built into the architecture through encryption, authentication, access control, tenant isolation and audit logging, and identity at sign-in is one of those parts rather than the whole.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 275 }, { kind: "pdf", page: 321 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on identity and access",
      variant: "compact",
      pages: [336, 151, 275, 326, 321],
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
