/**
 * 328 · GDPR Support — /security/gdpr-support (HELD: gdpr)
 *
 * Angle (cluster: compliance): what the regulation asks of organisations holding personal data in a creative
 * library, what the two controls named in the positioning (EU-region storage, right-to-erasure workflows) are for,
 * and what stays with the organisation. States the claim only in PDF 328 wording; no legal advice; data processing
 * agreements belong to 329 and are not named here.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "General explanation of data protection practice; not legal advice, and states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 328,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Security",
      lede: "What GDPR asks of organisations that keep personal data in a creative library, what the two controls named in GetSibu’s compliance positioning are for, and which obligations stay with your own organisation whichever platform it uses.",
      visual: { diagram: "version-record", focus: "lifecycle" },
      actions: [
        { kind: "global", cta: "primary" },
        { kind: "route", path: "/security", label: "More in Security" },
      ],
      sources: [{ kind: "pdf", page: 328 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Personal data inside creative work, and the controls around it",
      body: [
        "GetSibu’s stated compliance positioning includes GDPR-related controls such as EU-region storage and right-to-erasure workflows. The General Data Protection Regulation is the data protection law of the European Union. It governs how organisations handle personal data, meaning any information that relates to a person who can be identified, directly or indirectly.",
        "A creative library holds more personal data than it first appears to. A photograph or a clip in which someone is recognisable is personal data; so is a signed release, a contributor’s name inside a file or a comment that mentions a colleague. That does not make a library unusual, but it does mean data protection questions reach the library as well as the customer database.",
        [
          "Support for GDPR means controls that help an organisation carry out its own decisions about purpose, lawful basis and retention. Those decisions belong in ",
          { text: "creative data governance", page: 339 },
          ", which establishes rules around access, retention, usage and asset management, and the protections they depend on sit within ",
          { text: "GetSibu security", page: 321 },
          " as a whole.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Personal data in images, footage and files", "Transfers beyond the European Economic Area", "EU-region storage", "Right-to-erasure workflows", "Obligations that stay with your organisation"],
      },
      highlight: {
        heading: "In practice",
        body: "A brand team hears from a model who no longer wants her campaign images used. Before anything is deleted, the team needs to know where those images sit, whether an agreement or legal reason allows them to be kept, and who takes the decision.",
        tags: ["Brand teams", "Privacy", "Talent"],
      },
      glance: {
        heading: "GDPR support in brief",
        facts: [
          { label: "Area", value: "Security" },
          { label: "Positioning", value: "GDPR-related controls" },
          { label: "Named controls", value: "EU-region storage and right-to-erasure workflows" },
          { label: "Rules behind them", value: "Creative Data Governance", page: 339 },
        ],
      },
      sources: [{ kind: "pdf", page: 328 }, { kind: "pdf", page: 339 }, { kind: "pdf", page: 321 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "controls",
      eyebrow: "What the positioning names",
      heading: "Two named controls, and the part that remains yours",
      tabs: [
        {
          label: "EU-region storage",
          heading: "Where stored data is kept",
          icon: "globe",
          body: [
            "Storing data in an EU region answers one of the questions GDPR raises about location. The regulation does not simply demand European storage. It restricts transfers of personal data to countries outside the European Economic Area unless particular conditions or safeguards apply.",
            "Keeping stored data inside the EU can make those questions simpler, though it does not settle all of them. Where support staff, subcontractors and connected services are based can matter as well, so a transfer assessment looks at every route data takes.",
          ],
          points: ["Location of stored data", "Transfers as a wider question than storage"],
        },
        {
          label: "Right to erasure",
          heading: "Removing personal data when someone asks",
          icon: "trash",
          body: [
            "The right to erasure, often called the right to be forgotten, lets people ask for their personal data to be deleted. It applies in defined circumstances, such as when the data is no longer needed for its original purpose or when consent is withdrawn, and it has exceptions.",
            "Whatever tools support it, handling an erasure request generally runs from request to decision and, where the request succeeds, to removal: locating the material, checking whether it must or may be kept, deleting it and recording what was done. Within a library, the deletion step is one where authorised users remove assets according to organisational policies and permissions.",
          ],
          points: ["Circumstances and exceptions", "Locate, decide, remove, record"],
          link: { page: 109, label: "Asset Deletion" },
        },
        {
          label: "Your organisation",
          heading: "Decisions no platform can take for you",
          icon: "building",
          body: [
            "GDPR calls the organisation that decides why and how personal data is used the controller, and a service that handles the data on its behalf a processor. The controller carries the main responsibility for having a lawful basis, telling people how their data is used and answering their requests.",
            "Deciding who plays which role is not always obvious in creative work, where agencies, freelancers and clients all handle the same material. It is worth settling early, with advice, before questions about a particular image arrive.",
          ],
          points: ["Lawful basis and transparency", "Answers to people’s requests"],
        },
      ],
      sources: [{ kind: "pdf", page: 328 }, { kind: "pdf", page: 109 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "where-personal-data-sits",
      eyebrow: "Worth mapping",
      heading: "Where personal data tends to sit in a creative library",
      intro: "A map of these places is the starting point for handling requests and deciding what to keep.",
      columns: ["Why it counts as personal data", "What to think about"],
      rows: [
        { label: "Photographs and footage of recognisable people", cells: ["The person can be identified from the image itself", "The terms on which each person agreed to appear"] },
        { label: "Releases and contracts", cells: ["They name people and record what each agreed", "Who needs to read them, and how long they are kept"] },
        { label: "File metadata", cells: ["Creators and contributors can be named inside the file", "Which fields are worth carrying into the asset record"], page: 22 },
        { label: "Comments on assets", cells: ["Feedback can name or describe colleagues, clients and people on camera", "Whether a remark belongs in an asset discussion at all"], page: 62 },
        { label: "Accounts and activity", cells: ["Records of who uploaded, viewed or approved something relate to identifiable users", "How long such records are needed, and who may read them"], page: 171 },
      ],
      sources: [{ kind: "pdf", page: 22 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 171 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "considerations",
      eyebrow: "Considerations",
      heading: "What to understand before relying on GDPR-related controls",
      items: [
        {
          heading: "Some personal data needs extra care",
          summary: "GDPR gives special protection to particular categories of information.",
          icon: "shield",
          body: [
            "The special categories include health, religious belief, ethnic origin and biometric data used to identify people. Creative work can touch them without anyone intending it, for instance in campaign photography for a health charity or a faith organisation. Material like that deserves narrower access, and handling it generally calls for a specific condition beyond an ordinary lawful basis, which is a matter for legal advice.",
          ],
        },
        {
          heading: "Erasure has limits",
          summary: "Not every request has to end in deletion.",
          icon: "flag",
          body: [
            "The right to erasure does not apply in every case. Material may need to be kept to meet a legal obligation or to establish or defend legal claims, and freedom of expression can weigh against a request. These are judgements for your data protection officer or legal adviser, not for a rule of thumb.",
          ],
        },
        {
          heading: "Copies outside the library",
          summary: "Removing an asset in one place does not remove every copy.",
          icon: "copy",
          body: [
            [
              "Creative files travel. Exports sent to printers, attachments in email and copies on personal drives all sit beyond the library’s reach, so an erasure workflow should ask where else material went. That question is easier when ",
              { text: "secure asset sharing", page: 172 },
              " has been controlled through permissions rather than relying only on unrestricted links.",
            ],
          ],
        },
        {
          heading: "Earlier versions",
          summary: "A replaced file can still show what its replacement removed.",
          icon: "history",
          body: [
            [
              "Replacing an image does not necessarily remove the person it showed. ",
              { text: "File version history", page: 92 },
              " gives teams a record of previous versions, so an erasure decision should consider the whole asset record rather than only its latest file.",
            ],
          ],
        },
        {
          heading: "Access is part of protection",
          summary: "Appropriate security for personal data includes limiting who can reach it.",
          icon: "lock",
          body: [
            [
              "GDPR asks for technical and organisational measures suited to the risk, and restricting access to people with a genuine need is among the most basic of them. ",
              { text: "Creative asset permissions", page: 151 },
              " let organisations control who can reach different areas of the library, so releases and sensitive shoots can sit in areas open only to the people who handle them.",
            ],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 172 }, { kind: "pdf", page: 92 }, { kind: "pdf", page: 151 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about GDPR support",
      items: [
        {
          question: "Can GDPR apply to an organisation based outside Europe that runs a creative library?",
          answer: "It can. GDPR may reach organisations outside the European Union that offer goods or services to people in the EU or monitor their behaviour. Whether it applies to yours is a question for your legal adviser.",
        },
        {
          question: "Is a photograph of a crowd personal data under GDPR?",
          answer: "It can be, wherever individuals in it can be identified. Whether particular images call for consent, another lawful basis or no action depends on context, so a written policy for event and street photography helps more than deciding picture by picture.",
        },
        {
          question: "Who should handle right-to-erasure requests that involve creative assets?",
          answer: "The person responsible for data protection takes the decision, working with whoever manages the library. The library team finds the material and carries out any removal; whether erasure applies is not theirs to judge alone.",
        },
        {
          question: "How long can a creative library keep images of people under GDPR?",
          answer: "GDPR sets no single period. It expects personal data to be kept no longer than its purpose requires, so each organisation decides and documents retention periods that fit its material and its agreements with the people shown.",
        },
        {
          question: "How can a team show later what happened to an erasure request?",
          answer: [
            "Keep your own note of the request, the decision and the action taken. On the platform side, ",
            { text: "audit logs", page: 326 },
            " provide a historical record of important actions, including asset changes and other platform events.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 326 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on handling personal data in a creative library",
      variant: "compact",
      pages: [339, 109, 151, 172, 326, 321],
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
