/**
 * 322 · AES-256 Encryption — /security/aes-256-encryption (HELD: aes-256)
 *
 * Angle (cluster: security-foundations): encryption of stored data — what AES-256 at rest means, which
 * exposure it answers and where its protection ends. Secret Encryption (323) owns stored credentials;
 * GetSibu Security (321) owns the five elements together. States the claim only in PDF 322 wording.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of encryption practice in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 322,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Security",
      lede: "What AES-256 encryption of stored data protects a creative library against, where that protection ends, and how it sits beside the other controls GetSibu security is built from.",
      visual: { diagram: "control-map", focus: "encryption" },
      actions: [
        { kind: "global", cta: "primary" },
        { kind: "route", path: "/security", label: "More in Security" },
      ],
      sources: [{ kind: "pdf", page: 322 }, { kind: "pdf", page: 321 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Stored data that is unreadable without the key",
      body: [
        "GetSibu’s security positioning includes AES-256 encryption for data at rest and encrypted secrets. In general terms, data at rest is information held in storage, as distinct from data in transit, which is moving across a network from one system to another.",
        "AES, the Advanced Encryption Standard, is a symmetric cipher: one secret key both encrypts and decrypts. It is a published standard that has been examined openly for many years and is used widely by governments and industry. The number in the name is the length of the key in bits, and the longest AES variant is often the one chosen for sensitive stored information.",
        [
          "Encryption at rest answers a specific threat: someone obtaining stored data without going through the application, for instance from a discarded disk or a copied storage volume. It does not decide who may sign in or what they may open. Those questions belong to the other parts of ",
          { text: "GetSibu security", page: 321 },
          ", where encryption is one element alongside authentication, access control, tenant isolation and audit logging.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Data at rest and data in transit", "A symmetric cipher with a long key", "Where the keys are held", "Protection when storage is exposed", "No substitute for access control"],
      },
      highlight: {
        heading: "In practice",
        body: "A client’s security questionnaire asks whether stored assets are encrypted. The more revealing follow-up questions are who can use the keys and what stops a signed-in account from seeing too much, because encryption alone answers neither.",
        tags: ["Security reviews", "Agencies", "IT"],
      },
      glance: {
        heading: "Encryption at rest in brief",
        facts: [
          { label: "Area", value: "Security" },
          { label: "Positioning", value: "AES-256 for data at rest and encrypted secrets" },
          { label: "Credentials", value: "Secret Encryption", page: 323 },
          { label: "Wider design", value: "GetSibu Security", page: 321 },
        ],
      },
      sources: [{ kind: "pdf", page: 322 }, { kind: "pdf", page: 321 }, { kind: "pdf", page: 323 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "risks",
      eyebrow: "What it covers",
      heading: "Which risks encryption at rest addresses",
      intro: "Encryption protects stored data from one kind of exposure; other risks call for other controls.",
      columns: ["Does encryption at rest help?", "What else addresses it"],
      rows: [
        { label: "A storage device is lost, replaced or discarded", cells: ["Yes, provided the keys are not kept with it", "Keys held apart from the data they protect"] },
        { label: "A raw copy of stored data is taken", cells: ["Yes, for anyone unable to use the keys", "Tight limits on what can use the keys"] },
        { label: "A stolen password is used to sign in", cells: ["No: signed-in accounts are served decrypted data", "Multi-factor authentication as another layer of account protection"], page: 336 },
        { label: "A colleague reaches folders beyond their work", cells: ["No: the access goes through the system itself", "New folders that can remain private until access is granted"], page: 154 },
        { label: "Data is intercepted on a network", cells: ["No: that is data in transit", "Encryption of the connection itself"] },
      ],
      sources: [{ kind: "pdf", page: 336 }, { kind: "pdf", page: 154 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "key-terms",
      eyebrow: "Key terms",
      heading: "Terms that come up in questions about encryption",
      items: [
        {
          heading: "Data at rest and data in transit",
          summary: "Stored data and moving data face different threats and are protected separately.",
          icon: "database",
          body: [
            "Data at rest lives on disks, in databases and in object storage. Data in transit is travelling, for example from a browser to a service or between two services. A file can be well protected in one state and exposed in the other, so security reviews usually ask about both and expect a separate answer for each.",
          ],
        },
        {
          heading: "Key length",
          summary: "The number of bits in a key sets how many possible keys an attacker would face.",
          icon: "key",
          body: [
            "Each bit added to a key doubles the number of possible keys. At the longest AES key length, trying every key is far beyond any realistic computing effort, so practical attacks aim at something other than the cipher: the keys, the software around the encryption, or the accounts allowed to read decrypted data.",
          ],
        },
        {
          heading: "Key management",
          summary: "Encryption is only as strong as the protection around its keys.",
          icon: "lock",
          body: [
            "An encrypted volume whose key sits beside it offers little protection. Sound key management keeps keys in dedicated, tightly controlled systems, limits which services may use them, records their use and replaces them from time to time.",
            "A widely used pattern, often called envelope encryption, encrypts data with one key and protects that key with another held somewhere more closely guarded.",
          ],
        },
        {
          heading: "Where encryption is applied",
          summary: "Stored data can be encrypted at the level of a disk, a storage service or individual values.",
          icon: "layers",
          body: [
            "Disk-level encryption protects against the physical loss of hardware. Encryption applied within a storage or database service keeps what that service writes unreadable even when its underlying files are copied at a lower level. Encrypting particular values inside an application, such as credentials, keeps them unreadable even to parts of the system that handle the data around them. Each level closes a different gap, and they are often combined.",
          ],
        },
        {
          heading: "Why nobody notices it day to day",
          summary: "Decryption happens as part of serving authorised requests, so it is invisible in everyday work.",
          icon: "eye",
          body: [
            "When an authorised person opens a file, a system with encryption at rest decrypts what it needs while serving the request. Nobody types a key or waits for an extra step. That transparency is convenient, and it is also why encryption at rest can never be the control that decides who sees what.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 322 }, EXPLAINS],
    },
    {
      kind: "checklist",
      id: "questions",
      eyebrow: "Before you assess",
      heading: "What to ask about encryption at rest in any platform",
      variant: "list",
      items: [
        "Which stores are covered: files, databases, search indexes and any copies held elsewhere",
        "Where the keys are held, and which people or services can use them",
        "How keys are replaced, and what happens to data encrypted under earlier ones",
        "Whether credentials for connected services receive protection of their own",
        "What limits decrypted data once an account has signed in",
        "How data is protected while it travels between systems",
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about AES-256 encryption",
      items: [
        {
          question: "Is AES-256 strong enough for stored creative assets?",
          answer: "The cipher is rarely the weak point. No practical way is known to recover data protected by AES-256 by working through possible keys; real exposures tend to come from poorly guarded keys, flawed software around the encryption, or access that never needed to break it.",
        },
        {
          question: "How does encryption at rest relate to secret encryption?",
          answer: [
            "Encryption at rest concerns stored data broadly. ",
            { text: "Secret encryption", page: 323 },
            " is narrower: OAuth credentials, SMTP passwords and API tokens can be protected using encrypted secret storage. GetSibu’s positioning names both.",
          ],
        },
        {
          question: "Does encryption at rest usually make a system slower?",
          answer: "Seldom noticeably. Processors in current servers commonly include dedicated support for AES, so the work of encrypting and decrypting stored data is rarely what limits how quickly a system responds.",
        },
        {
          question: "What should an agency tell clients about encryption at rest?",
          answer: [
            "Be precise about what encryption covers, and just as clear about what keeps one client’s material away from another. ",
            { text: "Tenant isolation", page: 324 },
            " in GetSibu is designed around tenant-scoped data access. That speaks to a different worry from a stolen disk: material from another customer’s environment mixing with the client’s work.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 322 }, { kind: "pdf", page: 323 }, { kind: "pdf", page: 324 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on protecting stored data and access",
      variant: "compact",
      pages: [321, 323, 336, 324, 338],
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
