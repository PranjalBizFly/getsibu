/**
 * 336 · MFA — /security/mfa
 *
 * Angle (cluster: identity): multi-factor authentication as another layer of account protection — what a factor
 * is, why passwords alone fail in creative work, where a second factor matters and how to introduce it. Only PDF 336
 * is stated about GetSibu's MFA: no methods, enforcement details or sign-in behaviour. Never identity-provider claims (held).
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of multi-factor authentication in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 336,
  metaDescription: "What multi-factor authentication adds to the accounts that reach a creative library, where it matters most, and how to introduce it without slowing work.",
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Security",
      lede: "What a second factor adds to the accounts people use to reach a creative library, where it matters most in creative work, and how to introduce multi-factor authentication without getting in the way of that work.",
      visual: { diagram: "control-map", focus: "authentication" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 336 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A second proof that the right person is signing in",
      body: [
        "In GetSibu, multi-factor authentication adds another layer of protection to accounts. The idea, in any system, is that signing in depends on more than one kind of evidence, so that a password on its own no longer opens the account.",
        "Passwords fail in ordinary ways. They are reused across services, typed on machines other people also use, and handed over to convincing messages that imitate a familiar sign-in. Creative work multiplies these moments, with crews on location, crowded review sessions and colleagues who borrow a laptop to finish something urgent.",
        [
          "Multi-factor authentication is about people. Applications that connect to a library do not sign in the way a person does; for them, ",
          { text: "API authentication", page: 256 },
          " means requests use authenticated access so that external applications stay within appropriate security boundaries.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Another layer of account protection", "Something you know, have or are", "Passwords reused or captured", "Protection for people, not applications", "Recovery agreed in advance"],
      },
      glance: {
        heading: "MFA in brief",
        facts: [
          { label: "Area", value: "Security" },
          { label: "Adds", value: "Another layer of account protection" },
          { label: "Protects", value: "The accounts people sign in with" },
          { label: "For applications", value: "API Authentication", page: 256 },
        ],
        actions: [{ kind: "route", path: "/security", label: "More in Security" }]
      },
      sources: [{ kind: "pdf", page: 336 }, { kind: "pdf", page: 256 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "key-terms",
      eyebrow: "Key terms",
      heading: "The ideas behind multi-factor authentication",
      items: [
        {
          heading: "Factor",
          summary: "A kind of evidence that someone is who they claim to be.",
          icon: "key",
          body: [
            "Authentication factors are usually grouped into three kinds: something you know, such as a password; something you have, such as a phone or a physical security key; and something you are, such as a fingerprint. Multi-factor authentication combines evidence of at least two different kinds.",
            "Which methods a particular platform accepts is worth confirming while planning a rollout, so that guidance to the team matches what people will actually see.",
          ],
        },
        {
          heading: "Why different kinds matter",
          summary: "Two passwords are not two factors.",
          icon: "layers",
          body: [
            "The strength comes from combining evidence that fails in different ways. A stolen password does not bring the phone with it, and a lost phone does not reveal the password. Asking for two things of the same kind, such as a password and a memorable word, leaves both exposed to the same trick.",
          ],
        },
        {
          heading: "Phishing",
          summary: "Messages designed to capture sign-in details by imitating something familiar.",
          icon: "flag",
          body: [
            "Phishing imitates a trusted sign-in page or a colleague’s request in order to capture credentials. Creative teams see it as often as anyone, frequently disguised as a routine message about a shared file or a review.",
            "A second factor means a captured password is not sufficient on its own. Some attacks try to capture the second factor as well, so multi-factor authentication works best alongside caution rather than as a replacement for it.",
          ],
        },
        {
          heading: "Authentication and authorisation",
          summary: "Proving who someone is differs from deciding what they may do.",
          icon: "lock",
          body: [
            "Authentication answers who is signing in; authorisation answers what that person may reach and do once inside. Multi-factor authentication strengthens the first and leaves the second exactly as it was.",
            ["That is why it sits beside access controls rather than replacing them. ", { text: "RBAC security", page: 325 }, " covers the other half, limiting what users can perform according to their organisational responsibilities."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 336 }, { kind: "pdf", page: 325 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "contexts",
      eyebrow: "In context",
      heading: "Where a second factor matters in creative work",
      tabs: [
        {
          label: "On location",
          heading: "Signing in away from the studio",
          icon: "camera",
          body: [
            "Shoots, festivals, client offices and hotel networks all involve devices and connections nobody on the team controls. People sign in from wherever the work is, often in a hurry.",
            "The accounts used in these places frequently reach the most sensitive material of all: footage and imagery that nobody outside the production has yet seen.",
          ],
          points: ["Devices the team does not control", "Access to unseen material"],
        },
        {
          label: "New starters",
          heading: "Accounts set up in a hurry",
          icon: "user",
          body: [
            "New accounts are often created on someone’s first morning, with a temporary password passed on by message so that work can begin. A password handled that way is easily seen, saved or reused.",
            "Adding a second factor as part of joining, rather than weeks later, means a new account does not rely on that first password alone for long.",
          ],
          points: ["First passwords passed on by message", "A second factor from the start"],
        },
        {
          label: "Administrators",
          heading: "Accounts targeted for what they can change",
          icon: "key",
          body: [
            ["An administrator’s account attracts attention less for what it can see than for what it can alter. ", { text: "Organisation administrators", page: 158 }, " manage access policies, users, folders and organisational settings, so misuse of their accounts can reshape access across the library."],
          ],
          points: ["Policies, users and folders", "Changes that affect everyone"],
        },
        {
          label: "Agency clients",
          heading: "Different clients, different expectations",
          icon: "briefcase",
          body: [
            ["Some clients have firm views about how people should reach their material. In GetSibu, ", { text: "client-specific authentication options", page: 165 }, " can support organisations that need separate access controls for different customers."],
            "Where expectations vary between clients, agree them when an engagement begins rather than discovering them at the first security review.",
          ],
          points: ["Separate access controls per customer", "Expectations agreed early"],
        },
      ],
      sources: [{ kind: "pdf", page: 158 }, { kind: "pdf", page: 165 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "rollout",
      eyebrow: "Rolling it out",
      heading: "Introducing multi-factor authentication to a creative team",
      intro: "A general approach that keeps disruption low; adapt it to the way your team works.",
      steps: [
        { heading: "Explain the reason", body: "Describe what a second factor protects against in terms of the material people actually handle, before asking anyone to change how they sign in.", icon: "megaphone" },
        { heading: "Prepare exposed people first", body: "Brief the people who can see unreleased work or change access before everyone else, since their accounts matter most and their questions will shape the guidance for the rest.", icon: "shield" },
        { heading: "Retire shared logins", body: "Give each person an account of their own first; a second factor attached to a login several people share protects nobody in particular.", icon: "users" },
        { heading: "Agree how recovery works", body: "Decide who helps someone who has lost a factor and how their identity is confirmed, so that recovery never becomes the easy way in.", icon: "help" },
        { heading: "Review and adjust", body: "Once the team is used to it, look at where people struggled, such as travel or shared devices, and improve the guidance instead of granting exceptions.", icon: "refresh" },
      ],
      sources: [{ kind: "pdf", page: 336 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about MFA",
      items: [
        {
          question: "Does multi-factor authentication slow creative teams down?",
          answer: "It adds a step when signing in, and that step soon becomes routine. It is a small cost compared with dealing with an account that someone else has taken over.",
        },
        {
          question: "Is MFA enough to secure a creative library on its own?",
          answer: ["No. It makes an account harder to misuse, but it does not decide whether new content is exposed or whether important actions are on record; ", { text: "default-deny security", page: 337 }, " and ", { text: "audit logs", page: 326 }, " address those questions."],
        },
        {
          question: "Do accounts used mainly to find and view assets need a second factor?",
          answer: "Yes. Viewing is enough to leak unreleased work, so an account that mostly looks at material still deserves protection beyond a password.",
        },
      ],
      sources: [{ kind: "pdf", page: 336 }, { kind: "pdf", page: 337 }, { kind: "pdf", page: 326 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on protecting accounts and access",
      variant: "compact",
      pages: [256, 165, 325, 337, 321],
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
