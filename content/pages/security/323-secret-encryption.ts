/**
 * 323 · Secret Encryption — /security/secret-encryption
 *
 * Angle (cluster: security-foundations): encrypted storage of OAuth credentials, SMTP passwords and API tokens —
 * the credentials a platform holds to act on other systems, what each kind unlocks and how to look after them.
 * Never encryption of assets, "at rest", algorithms or key management; never what GetSibu sends email for.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how credentials work and how to handle them; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 323,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Security",
      lede: "Understand why the credentials a platform keeps for its connections deserve as much protection as a password, what OAuth credentials, SMTP passwords and API tokens each make possible, and how to look after them over their life.",
      visual: { diagram: "control-map", focus: "encryption" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 323 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Protecting the keys a platform holds to other systems",
      body: [
        "GetSibu can protect OAuth credentials, SMTP passwords and API tokens by keeping them in encrypted secret storage. These are not creative files but secrets: values whose purpose is to prove that a request or a connection is allowed.",
        "A secret is valuable out of all proportion to its size. A token copied from an old configuration file can act with the full reach of whatever issued it, with no sign-in and often with nobody noticing. The harm need not stay inside one platform either, because the same credential may open a mail server, a connected account or another application.",
        [
          "The idea behind encrypted secret storage, in any system, is that a stored credential should not be readable as it stands, so obtaining stored configuration is not the same as obtaining a working key. It complements ",
          { text: "API authentication", page: 256 },
          ", through which requests from external applications are authenticated and kept within appropriate security boundaries.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Secrets as keys to other systems", "OAuth credentials for delegated access", "SMTP passwords for outgoing email", "API tokens for automated requests", "Encrypted secret storage"],
      },
      glance: {
        heading: "Secret encryption in brief",
        facts: [
          { label: "Area", value: "Security" },
          { label: "Protects", value: "OAuth credentials, SMTP passwords and API tokens" },
          { label: "Through", value: "Encrypted secret storage" },
          { label: "Works alongside", value: "API Authentication", page: 256 },
        ],
        actions: [{ kind: "route", path: "/security", label: "More in Security" }]
      },
      sources: [{ kind: "pdf", page: 323 }, { kind: "pdf", page: 256 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "kinds",
      eyebrow: "Key terms",
      heading: "Three kinds of secret and what each one unlocks",
      items: [
        {
          heading: "OAuth credentials",
          summary: "Credentials that let one application act in another on someone’s behalf, without sharing their password.",
          icon: "key",
          body: [
            "OAuth is a widely used standard for delegated access. Instead of handing an application a password, a person or an administrator grants it a limited authorisation, and the application holds credentials that represent that grant.",
            "Whoever holds those credentials can act within the grant until it is withdrawn. That is why a connection should be granted only the access it genuinely needs, and why the credentials themselves need careful storage.",
          ],
          points: ["Delegated rather than shared access", "Valid until the grant is withdrawn"],
        },
        {
          heading: "SMTP passwords",
          summary: "The password that allows software to send email through an organisation’s mail server.",
          icon: "message",
          body: [
            "SMTP is the protocol mail servers use to accept outgoing messages. Software configured with an SMTP password can send email from the account it belongs to, which makes that password attractive to anyone who wants messages to look as if they came from a trusted address.",
            "A misused SMTP password rarely damages the system that held it. The damage lands on the people who receive convincing but unwanted email, and on the reputation of the organisation whose address it came from.",
          ],
          points: ["Email sent from a trusted address", "Misuse felt by recipients"],
        },
        {
          heading: "API tokens",
          summary: "Values that stand in for an identity when one application calls another’s API.",
          icon: "api",
          body: [
            "An API token is presented with each request in place of a sign-in. There is no second factor to fall back on and nobody at a keyboard to notice something odd, so a token’s protection depends almost entirely on where it is kept and who can see it.",
            ["Custom applications built on the ", { text: "developer API", page: 255 }, " to handle upload, search or collaboration rely on credentials of their own, and those deserve the same care outside the platform as inside it."],
          ],
          points: ["No sign-in to fall back on", "Protection depends on storage"],
        },
      ],
      sources: [{ kind: "pdf", page: 323 }, { kind: "pdf", page: 255 }, { kind: "pdf", page: 275 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "lifecycle",
      eyebrow: "Good practice",
      heading: "Looking after a credential from creation to retirement",
      intro: "A general routine for any credential that an integration depends on.",
      steps: [
        { heading: "Create it for one purpose", body: "Issue a separate credential for each integration, so a leak or a retirement affects a single connection rather than several at once.", icon: "key" },
        { heading: "Limit its reach", body: "Where the issuing system allows it, restrict the credential to the actions and data the integration actually uses.", icon: "lock" },
        { heading: "Keep it in protected storage", body: "Hold the credential in the platform that uses it, where secrets can be kept encrypted, instead of in scripts, chat messages or shared documents where copies multiply.", icon: "shield" },
        { heading: "Name an owner", body: "Record which person or team is responsible for each credential, so questions about it still have an answer after the original developer moves on.", icon: "user" },
        { heading: "Replace it when things change", body: "Issue a new credential and withdraw the old one when someone who knew it leaves, or when there is any sign it may have been exposed.", icon: "refresh" },
        { heading: "Retire it with the integration", body: "When a connection is no longer needed, withdraw its credential as well, rather than leaving a working key behind.", icon: "trash" },
      ],
      sources: [{ kind: "pdf", page: 323 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "teams",
      eyebrow: "Who it matters to",
      heading: "What encrypted secret storage changes for each team",
      tabs: [
        {
          label: "IT and security",
          heading: "One question in a review answered, others still open",
          icon: "shield",
          body: [
            "Credentials are among the first things anyone looks for after gaining a foothold in a system, so a security review asks early on how a platform treats the secrets it holds. Encrypted secret storage addresses that part of the review.",
            "What remains are organisational questions, and a review should put them to the people who run integrations rather than to the platform.",
          ],
          points: ["How the platform treats stored secrets", "How the organisation handles copies"],
          link: { page: 321, label: "GetSibu Security" },
        },
        {
          label: "Developers",
          heading: "Keeping credentials out of code",
          icon: "code",
          body: [
            "Credentials written directly into code end up in repositories, build logs and screenshots shared for debugging. Once there, they are very hard to account for.",
            ["Keeping secrets in storage designed for them, and loading them where they are needed, is general good practice for any application. ", { text: "API security", page: 277 }, " is an important component of protecting automated access to creative assets, and careless handling of credentials is a familiar way to undermine it."],
          ],
          points: ["No credentials in repositories", "Secrets loaded where they are needed"],
        },
        {
          label: "Agencies",
          heading: "Credentials that end with a client relationship",
          icon: "briefcase",
          body: [
            "An agency may hold credentials that reach into several clients’ systems at once. When a relationship ends, those credentials are easy to forget, and a key that still works gives a former client good reason for concern.",
            "Keeping an up-to-date list of the credentials held for each client makes the end of an engagement straightforward: every credential connected to that client can be withdrawn together, and the client can be told that it has been.",
          ],
          points: ["A list of credentials per client", "Withdrawn together when work ends"],
        },
      ],
      sources: [{ kind: "pdf", page: 323 }, { kind: "pdf", page: 321 }, { kind: "pdf", page: 277 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about secret encryption",
      items: [
        {
          question: "Can encrypted storage protect a credential that has already been copied somewhere else?",
          answer: "No. It protects the copy the platform holds. A credential already pasted into a script or a message sits outside that protection, which is why finding stray copies matters as much as where the official one is kept.",
        },
        {
          question: "How is secret encryption different from multi-factor authentication?",
          answer: ["They protect different routes in. ", { text: "Multi-factor authentication", page: 336 }, " adds another layer of protection to the accounts people use, while encrypted secret storage protects the credentials that applications and connections depend on."],
        },
        {
          question: "Does encrypting secrets settle who may set up integrations?",
          answer: "No. Encryption protects a stored value; it does not decide who may create or change a connection. Keeping that work with a small, named group, such as the developers responsible for integrations, means fewer copies of each credential to track.",
        },
      ],
      sources: [{ kind: "pdf", page: 323 }, { kind: "pdf", page: 336 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on protecting connections and accounts",
      variant: "compact",
      pages: [256, 277, 255, 336, 321],
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
