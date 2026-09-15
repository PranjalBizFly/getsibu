/**
 * 340 · Secure Digital Asset Management — /security/secure-digital-asset-management
 *
 * Angle (cluster: security-foundations): responsible management of valuable creative assets. Protection in proportion
 * to what each kind of asset is worth, the obligations that come with holding work that belongs to or depicts other
 * people, and where responsible handling usually slips. GetSibu Security (321) owns the elements; Creative Security
 * Controls (174) owns unnecessary versus unauthorised access.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of responsible stewardship of creative assets; states no GetSibu capability beyond the cited pages and gives no legal advice." } as const;

const page: PageContent = {
  page: 340,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Security",
      lede: "What it means to look after creative assets responsibly, how to match protection to what each kind of asset is worth, and the obligations that come with holding work that belongs to, or shows, other people.",
      visual: { diagram: "folder-access", focus: "client" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 340 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Protection that matches what an asset is worth",
      body: [
        "GetSibu provides a security-oriented environment for organisations that need to manage valuable creative assets responsibly. Responsibility cuts both ways: valuable work should not reach people it is not meant for, and material meant for reuse should not be locked away so tightly that teams recreate it or keep private copies.",
        "Creative assets are valuable in unusual ways. Much of their worth lies in timing, since an unreleased campaign is at its most sensitive the day before launch and public the day after. Much of it depends on other people: a client who owns the work, a photographer who licensed it, or the people who agreed to appear in it. Losing control of such material damages relationships and reputations, not only the organisation holding it.",
        [
          "A security-oriented environment supplies the controls, and responsible management decides how to apply them. The controls, from authentication to audit logging, are set out under ",
          { text: "GetSibu security", page: 321 },
          ", while ",
          { text: "secure creative collaboration", page: 180 },
          " explains how teams can work together without sacrificing control over sensitive assets.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Protection in proportion to value", "Value that changes over time", "Work that belongs to others", "Reuse kept possible", "Responsibility that can be shown"],
      },
      highlight: {
        heading: "In practice",
        body: "A brand’s approved logo pack and its unreleased campaign film sit in the same library. Handling both responsibly means making the first easy to reach and keeping the second within a small circle until launch.",
        tags: ["Brand", "Launches", "Reuse"],
      },
      glance: {
        heading: "Responsible management in brief",
        facts: [
          { label: "Area", value: "Security" },
          { label: "Provides", value: "A security-oriented environment" },
          { label: "Suits", value: "Organisations managing valuable creative assets" },
          { label: "Controls", value: "Creative Security Controls", page: 174 },
        ],
        actions: [{ kind: "route", path: "/security", label: "More in Security" }]
      },
      sources: [{ kind: "pdf", page: 340 }, { kind: "pdf", page: 321 }, { kind: "pdf", page: 180 }, { kind: "pdf", page: 174 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "proportion",
      eyebrow: "In proportion",
      heading: "Matching protection to the kind of creative asset",
      intro: "Each kind of asset is valuable for a different reason, so each calls for a different kind of care.",
      columns: ["What makes it valuable", "How GetSibu can support responsible handling"],
      rows: [
        { label: "Approved brand assets", page: 103, cells: ["Correct, consistent use by many people", "Approved-only views of content that has completed review"] },
        { label: "Unreleased work", page: 337, cells: ["Secrecy until the moment of launch", "New content not automatically exposed to every user"] },
        { label: "Client material", page: 161, cells: ["A client’s ownership and trust", "Client environments that can remain logically isolated"] },
        { label: "Licensed content", page: 104, cells: ["Rights limited by time, place or purpose", "Expiry information for content that should stop being used"] },
        { label: "Finished campaigns", page: 108, cells: ["Reference value, and a risk of mistaken reuse", "Archiving that keeps history out of everyday discovery"] },
      ],
      sources: [{ kind: "pdf", page: 103 }, { kind: "pdf", page: 337 }, { kind: "pdf", page: 161 }, { kind: "pdf", page: 104 }, { kind: "pdf", page: 108 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "Photographs of families whose consent has limits",
      team: "A nonprofit communications team",
      situation: "A nonprofit holds photography of families it supports. Each family agreed to appear in fundraising material for a limited period, and some asked not to be shown in particular regions.",
      steps: [
        { heading: "The photographs are kept apart", body: ["The collection goes into a folder area of its own, where ", { text: "folder-level permissions", page: 152 }, " let the team control access more precisely than organisation-wide access would."] },
        { heading: "Consent terms travel with the images", body: "When each image is added, the team records when the family’s agreement ends as expiry information, and uses structured tags to note the regions where it may not appear." },
        { heading: "Accounts are protected", body: ["Everyone who can reach the collection protects their account with ", { text: "multi-factor authentication", page: 336 }, ", because the people shown are more exposed by a leak than the charity is."] },
        { heading: "Local appeals use approved selections", body: "Staff preparing local appeals are given access to a folder of selections the team has approved for their region, rather than to the whole collection." },
        { heading: "Ended agreements are acted on", body: ["When an agreement ends, the team decides under its own policy whether an image is kept out of use or removed through ", { text: "asset deletion", page: 109 }, " by an authorised user."] },
      ],
      outcome: "The charity keeps using the photographs for the purpose the families agreed to, and it can explain to any family how their images have been looked after.",
      link: { page: 238, label: "GetSibu for Nonprofits" },
      sources: [{ kind: "pdf", page: 152 }, { kind: "pdf", page: 104 }, { kind: "pdf", page: 105 }, { kind: "pdf", page: 336 }, { kind: "pdf", page: 109 }, { kind: "pdf", page: 238 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "accordion",
      id: "slips",
      eyebrow: "Considerations",
      heading: "Where responsible handling of creative assets usually slips",
      items: [
        {
          heading: "Copies made for convenience",
          summary: "Each download or attachment creates an asset nobody is looking after.",
          icon: "copy",
          body: [
            "A file saved to a laptop for a presentation, attached to an email for a partner or dropped into a personal cloud folder carries its value with it and leaves the controls behind. Responsible management reduces the reasons for copies instead of relying on people never making them.",
            [
              "The simplest reason to remove is the need to send files at all: ",
              { text: "secure asset sharing", page: 172 },
              " means sharing can follow permissions rather than depending only on unrestricted links.",
            ],
          ],
        },
        {
          heading: "Value that changes unnoticed",
          summary: "Assets become more or less sensitive as launches, contracts and licences move on.",
          icon: "clock",
          body: [
            "An embargoed image becomes public, a client relationship ends, a licence lapses. Protection chosen when an asset arrived may no longer fit it a year later. Agreeing moments to reconsider, such as a launch or the end of an engagement, keeps protection aligned with value rather than with history.",
            [
              "Those moments are easier to spot when the asset’s stages are clear: ",
              { text: "asset lifecycle management", page: 101 },
              " can support creative assets from initial upload through review, approval and reuse to eventual deletion.",
            ],
          ],
        },
        {
          heading: "Accountability nobody can demonstrate",
          summary: "Clients, rights holders and colleagues may ask how their material was handled.",
          icon: "audit",
          body: [
            [
              "Responsible management includes being able to answer. ",
              { text: "Access history", page: 171 },
              " provides information about important user interactions with the library, which gives an organisation a factual starting point when a client or rights holder asks who has worked with their material.",
            ],
            "Deciding in advance who answers such questions, and how carefully the answer is checked, avoids a hurried reply that promises more than the record shows.",
          ],
        },
        {
          heading: "Origins nobody recorded",
          summary: "Without knowing who created or supplied an asset, it is hard to know what is owed to them.",
          icon: "user",
          body: [
            [
              "A commissioned image, a client’s own photograph and a stock file carry different obligations, and reuse decisions depend on telling them apart. ",
              { text: "Asset ownership", page: 115 },
              " provides context about who created or uploaded content, which is where those decisions begin.",
            ],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 172 }, { kind: "pdf", page: 101 }, { kind: "pdf", page: 171 }, { kind: "pdf", page: 115 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about secure digital asset management",
      items: [
        {
          question: "What should an organisation ask when choosing a platform for secure digital asset management?",
          answer: "Ask how accounts are protected, how access to new and sensitive content is decided, how separate environments are kept apart, how stored credentials are protected and what record of important actions exists. Then ask which of those your organisation must configure or practise itself.",
        },
        {
          question: "What should happen to the protection of creative assets once a campaign has launched?",
          answer: [
            "It should be looked at again. Material that needed a small circle before launch can often be opened to the teams who will reuse it, and ",
            { text: "team access management", page: 175 },
            " establishes consistent permissions across those groups rather than person by person.",
          ],
        },
        {
          question: "Who is responsible for managing creative assets securely?",
          answer: "Everyone who handles them, in different ways. Administrators apply the controls, owners of the work decide who should reach it, and each person who downloads, shares or reuses an asset decides whether its value stays protected once it is in their hands.",
        },
      ],
      sources: [{ kind: "pdf", page: 175 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on looking after valuable creative work",
      variant: "compact",
      pages: [321, 174, 180, 172, 337, 338],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the closest security pages." }],
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
