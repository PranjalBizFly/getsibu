/**
 * 104 · Expiring Creative Assets — /features/expiring-creative-assets
 *
 * Angle (clusters: asset-lifecycle; brand-control): expiry information that can help teams identify content that should
 * no longer be used after a specified period — why creative content expires, a routine for acting on it, and where the
 * decision leads. Claims no automatic enforcement, notification or retention period: only what PDF 104 and 214 state.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of why creative content expires and how teams handle it; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 104,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Versioning & Asset Management",
      lede: "Why licensed, released and promotional content carries a use-by date that the file itself never shows, and how keeping expiry information with an asset can help a team act before that date passes.",
      visual: { diagram: "version-record", focus: "lifecycle" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 104 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Knowing when content should stop being used",
      body: [
        "In GetSibu, expiry information on an asset can help teams identify content that should no longer be used once a specified period has passed.",
        "Creative content often carries a use-by date that nobody can see by looking at it. A stock photograph may be licensed for a fixed term; a model release may cover one campaign rather than every future use; a promotional banner quotes an offer that ends; a packaging shot shows a product that has since changed. The file remains perfectly usable in a technical sense long after it has become a problem to publish.",
        [
          "Expiry information brings that hidden date into what a team knows about the asset. It matters most to ",
          { text: "brand teams", page: 214 },
          ", who organise approved assets, apply brand-specific tags and manage expiry information to keep a controlled source of truth. It also feeds the later decisions in the ",
          { text: "asset lifecycle", page: 101 },
          ", such as whether expired material is archived or removed.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Expiry information on the asset", "Content that should no longer be used", "A specified period", "Licences, releases and offers", "Renew, replace, archive or remove"],
      },
      highlight: {
        heading: "In practice",
        body: "Before a regional campaign reuses last year’s lifestyle images, the brand manager checks their expiry information and finds a pair whose usage term has already ended.",
        tags: ["Brand", "Legal review", "Marketing"],
      },
      glance: {
        heading: "Expiring assets in brief",
        facts: [
          { label: "Helps identify", value: "Content that should no longer be used" },
          { label: "Based on", value: "A specified period" },
          { label: "Managed by", value: "Brand teams" },
          { label: "Often leads to", value: "Renewal, replacement, archiving or removal" },
        ],
        actions: [{ kind: "route", path: "/features/asset-management", label: "More in Versioning & Asset Management" }]
      },
      sources: [{ kind: "pdf", page: 104 }, { kind: "pdf", page: 214 }, { kind: "pdf", page: 101 }, { kind: "pdf", page: 108 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "reasons",
      eyebrow: "Common reasons",
      heading: "Where creative content gets its expiry date",
      tabs: [
        {
          label: "Usage rights",
          heading: "Licensed and commissioned work with a term",
          icon: "key",
          body: [
            "Stock imagery, music and commissioned photography frequently come with usage terms limited by time, territory or medium. The term is agreed once, often by someone outside the creative team, and forgotten long before it runs out.",
            "Recording the end of the term with the asset puts that knowledge where people choose content, rather than in a contract folder few of them ever open.",
          ],
          points: ["Stock imagery and music", "Commissioned shoots with a usage term"],
        },
        {
          label: "People",
          heading: "Releases for talent and contributors",
          icon: "user",
          body: [
            "Images and films featuring people depend on releases that may cover a particular campaign or period. When a release lapses, the content may need withdrawing even though nothing about the file has changed.",
            ["Knowing ", { text: "who created or uploaded the content", page: 115 }, " also helps a team trace the paperwork behind it."],
          ],
          points: ["Model and talent releases", "Contributor agreements"],
        },
        {
          label: "Offers and seasons",
          heading: "Promotions and campaigns that finish",
          icon: "calendar",
          body: [
            "Banners, social posts and point-of-sale material often quote prices, dates or offers. Once the promotion ends, reusing them misleads customers.",
            "Seasonal material is a milder case: not wrong after the season, just wrong for the moment, and worth marking so that it is chosen deliberately.",
          ],
        },
        {
          label: "Brand changes",
          heading: "Superseded products, logos and statements",
          icon: "flag",
          body: [
            "A packaging redesign, a discontinued product or an updated legal statement can make older content inaccurate. Here expiry is less a date in a contract than a decision the brand team takes.",
            "Setting the expiry when the change is announced gives colleagues a clear point after which the old material should be retired from use.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 104 }, { kind: "pdf", page: 115 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "routine",
      eyebrow: "Step by step",
      heading: "A routine for acting on expiry information",
      intro: "Expiry information helps only when someone looks at it and acts on what it says.",
      steps: [
        { heading: "Record it at intake", body: "Add expiry information when licensed, released or time-limited content enters the library, while the terms are still at hand.", icon: "calendar" },
        { heading: "Review it regularly", body: "At an agreed interval, the person responsible for an area of the library looks over the expiry information for the content in it.", icon: "clock" },
        { heading: "Decide each outcome", body: "Every expiring asset is renewed, replaced with new material, kept as history or removed, depending on why it expires.", icon: "flag" },
        { heading: "Retire what has ended", body: "Content worth keeping as history can be archived away from everyday discovery, and authorised users remove anything that must go, in line with organisational policy.", icon: "archive" },
        { heading: "Explain the decision", body: "A comment on the asset saying why it can no longer be used helps anyone who comes across it before it is retired.", icon: "message" },
      ],
      sources: [{ kind: "pdf", page: 104 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 109 }, { kind: "pdf", page: 62 }, EXPLAINS],
    },
    {
      kind: "before-after",
      id: "where-expiry-lives",
      eyebrow: "The difference",
      heading: "Expiry kept in contracts compared with expiry kept on the asset",
      beforeLabel: "Expiry recorded somewhere else",
      afterLabel: "Expiry information on the asset",
      before: [
        "Terms held in contracts and inboxes",
        "Images reused without anyone checking",
        "Expired content discovered after publication",
        "Withdrawals that depend on someone’s memory",
      ],
      after: [
        "The end of use known where assets are chosen",
        "Content past its period easier to identify",
        "A routine review instead of a surprise",
        "Clear calls to renew, archive or remove",
      ],
      sources: [{ kind: "pdf", page: 104 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about expiring creative assets",
      items: [
        {
          question: "Does every creative asset need expiry information?",
          answer: "No. Much of a library can be used for as long as it stays accurate. Expiry information earns its place on material whose use is limited by an agreement, a promotion or a planned change.",
        },
        {
          question: "Who should record an asset’s expiry information?",
          answer: "Whoever holds the terms when the content arrives: the person who licensed the stock, commissioned the shoot or arranged the release. Recording it later usually means searching for a contract that someone else filed.",
        },
        {
          question: "How far ahead should a team look at expiring content?",
          answer: "Far enough to act before the date passes. Renewing rights or producing replacement material takes time, so content due to expire is best reviewed while there is still room to plan the next campaign around it.",
        },
      ],
      sources: [{ kind: "pdf", page: 104 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on retiring content safely",
      variant: "compact",
      pages: [214, 101, 108, 109, 103, 105],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the neighbouring brand-control pages." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Bring Order to Creative Chaos",
      conversionPage: 399,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 399 }],
    },
  ],
};

export default page;
