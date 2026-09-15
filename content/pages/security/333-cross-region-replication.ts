/**
 * 333 · Cross-Region Replication — /security/cross-region-replication (HELD: cross-region-replication)
 *
 * Angle (cluster: resilience): keeping a continuously updated copy of data in a separate region — what it protects
 * against, how it differs from caching and from backups, and its trade-offs. page 331 and
 * page 332 are separate claims and not named here. States the claim only in PDF 333 wording;
 * no plan tiers, region names or figures.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "General explanation of replication practice; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 333,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Security",
      lede: "What copying data to a second, distant region protects against, how replication differs from caching and from backups, and the trade-offs that come with keeping live data in more than one place.",
      visual: { diagram: "architecture-stack" },
      actions: [
        { kind: "global", cta: "primary" },
        { kind: "route", path: "/security", label: "More in Security" },
      ],
      sources: [{ kind: "pdf", page: 333 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A second region to continue from when the first one fails",
      body: [
        "Business-level infrastructure can include cross-region replication for additional resilience. Replication keeps a copy of data continuously updated in another location; cross-region means that location is a separate geographic region, far enough away that an event affecting one is unlikely to affect the other.",
        "Cloud infrastructure is organised into regions for good reasons, and those reasons cut both ways. Running within one region keeps a service fast and simple to operate, yet a regional power failure, network fault or natural disaster can put every copy held there out of reach at once. A copy maintained elsewhere gives the service somewhere to carry on from.",
        [
          "For a creative library the stakes are practical. Footage, campaign masters and years of approved work may exist nowhere else in organised form, and teams relying on ",
          { text: "global asset access", page: 314 },
          " may need them from many places. Replication concerns whether that data survives a regional failure; how quickly it reaches people is a separate matter for delivery and caching.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["A continuously updated copy elsewhere", "Regions far enough apart", "Resilience rather than speed", "Synchronous and asynchronous copying", "No substitute for recovery arrangements"],
      },
      highlight: {
        heading: "In practice",
        body: "A production company working to a broadcaster’s deadline asks what would happen to its library if a whole hosting region went offline. Replication answers the part about the data surviving; how soon work resumes is a further question.",
        tags: ["Production", "IT", "Security reviews"],
      },
      glance: {
        heading: "Cross-region replication in brief",
        facts: [
          { label: "Area", value: "Security" },
          { label: "Purpose", value: "Additional resilience" },
          { label: "Copies held", value: "In a separate region" },
          { label: "Wider design", value: "GetSibu Security", page: 321 },
        ],
      },
      sources: [{ kind: "pdf", page: 333 }, { kind: "pdf", page: 314 }, { kind: "pdf", page: 321 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "copies-compared",
      eyebrow: "Easily confused",
      heading: "Three reasons data is held in more than one place",
      intro: "Each arrangement copies data for a different purpose, and none of them does the others’ job.",
      columns: ["Main purpose", "What is copied", "What it does not do"],
      rows: [
        { label: "Edge caching and CDN delivery", cells: ["Faster access for people far from the origin", "Frequently accessed content such as previews and media", "Hold an authoritative copy of the library"], page: 304 },
        { label: "Cross-region replication", cells: ["Carrying on after a regional failure", "Data kept continuously up to date in another region", "Undo mistakes, which are copied along with everything else"] },
        { label: "Backups in general", cells: ["Returning data to an earlier, intact state", "Copies taken and kept apart from live data", "Keep a service running while its region is down"] },
      ],
      sources: [{ kind: "pdf", page: 304 }, { kind: "pdf", page: 305 }, { kind: "pdf", page: 333 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "trade-offs",
      eyebrow: "Considerations",
      heading: "Trade-offs that come with a second region",
      items: [
        {
          heading: "Synchronous or asynchronous copying",
          summary: "Waiting for both regions protects every change; not waiting keeps things quick.",
          icon: "refresh",
          body: [
            "Synchronous replication confirms a change only once both regions hold it, so nothing confirmed is lost, at the cost of waiting on a distant region for every write. Asynchronous replication confirms locally and copies shortly afterwards, which is faster but means the latest changes can be missing if the first region fails at the wrong moment.",
          ],
        },
        {
          heading: "Replication lag",
          summary: "The gap in time between the original and its copy.",
          icon: "clock",
          body: [
            "With asynchronous copying, the second region always trails slightly behind the first. How far behind it runs, and how closely that gap is watched, decides how much recent work could be absent after switching regions.",
          ],
        },
        {
          heading: "Mistakes travel too",
          summary: "A faithful copy reproduces deletion and corruption as faithfully as good data.",
          icon: "copy",
          body: [
            "Replication does exactly what it is asked to do: keep the copy identical to the original. If data is deleted or damaged in one region, the change reaches the other soon afterwards, so replication sits beside separate recovery arrangements rather than replacing them.",
          ],
        },
        {
          heading: "Where data is allowed to be",
          summary: "A second region is a second location, with legal and contractual consequences.",
          icon: "globe",
          body: [
            [
              "Contracts or laws can require particular data to stay within certain countries, and a replica elsewhere may conflict with them. The location of every copy therefore belongs in the rules set through ",
              { text: "creative data governance", page: 339 },
              ", which establishes rules around access, retention, usage and asset management, and not only in infrastructure plans.",
            ],
          ],
        },
        {
          heading: "Failover that has been rehearsed",
          summary: "A second region helps only if moving work to it actually succeeds.",
          icon: "workflow",
          body: [
            "Switching to another region involves decisions, configuration and people. Rehearsals show whether the replica is complete, how long a switch takes and how the service returns to the original region once it recovers.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 339 }, EXPLAINS],
    },
    {
      kind: "workflow",
      id: "regional-failure",
      eyebrow: "In general",
      heading: "How a switch to a second region generally unfolds",
      intro: "A typical sequence for any service replicated across regions; how and when each step happens differs between services.",
      stages: [
        { label: "Normal running", body: "The primary region serves people while changes are copied to a second region some distance away." },
        { label: "Regional failure", body: "An outage makes the primary region unreachable, whether through power, networking or damage to facilities." },
        { label: "Decision to switch", body: "Operators confirm that the problem is regional and not momentary, then choose to continue from the replica." },
        { label: "Service from the replica", body: "Work carries on from the replicated data, less any changes that had not yet been copied across if copying was asynchronous." },
        { label: "Return", body: "When the original region recovers, the two are brought back into step and service moves back in a controlled way." },
      ],
      sources: [{ kind: "pdf", page: 333 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about cross-region replication",
      items: [
        {
          question: "How does cross-region replication relate to recovery objectives?",
          answer: "Two measures are common. The recovery point objective is how much recent data an organisation can afford to lose, and the recovery time objective is how long it can wait to resume work. Replication mainly helps the first; the speed of resuming depends on the plan for switching regions.",
        },
        {
          question: "What happens to replicated data when a service ends?",
          answer: "It should fall under the same commitments as the original. When a contract ends or data has to be deleted, ask how and when every copy is removed, including copies in a second region and any backups taken from them, and keep the answer with your other data-processing records.",
        },
        {
          question: "Should replicated copies follow the same access rules as the original?",
          answer: [
            "Yes. A replica holds the same material and deserves the same protection, including separation between customers, so ask how ",
            { text: "tenant isolation", page: 324 },
            " applies to every copy rather than to the primary one alone.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 324 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on where creative data is held and served",
      variant: "compact",
      pages: [321, 314, 304, 305, 339, 324],
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
