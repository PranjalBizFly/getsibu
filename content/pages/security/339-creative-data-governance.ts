/**
 * 339 · Creative Data Governance — /security/creative-data-governance
 *
 * Angle (cluster: governance): data governance as rules for access, retention, usage and asset management, applied
 * to creative data: the files and the information that surrounds them (metadata, discussion, versions, activity).
 * Creative Asset Governance (114) owns who can upload, edit, approve, download and manage; Creative Access Governance
 * (159) owns control over sensitive content; What Is Creative Governance? (371) owns the vendor-neutral explainer.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of data governance practice for creative libraries; states no GetSibu capability beyond the cited pages and gives no retention periods." } as const;

const page: PageContent = {
  page: 339,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Security",
      lede: "How to set rules for who can reach creative data, how long it is kept, what it may be used for and how it is looked after, why those rules must reach beyond the files themselves, and the judgements each rule involves.",
      visual: { diagram: "version-record", focus: "lifecycle" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 339 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Rules for creative data, not only for creative files",
      body: [
        "Data governance establishes rules around access, retention, usage and asset management. In a creative library, the word data deserves attention, because it covers far more than finished files.",
        "Around every asset sits information with a life of its own. Embedded metadata can name the photographer and the camera. Comments can mention a product that has not been announced. Earlier versions can contain a claim that legal later removed, and records of activity can show who looked at what. A rule that only considers files leaves all of that ungoverned, and some of it is more sensitive than the asset it describes.",
        [
          "Data governance sits beside two narrower practices. ",
          { text: "Creative asset governance", page: 114 },
          " defines who can upload, edit, approve, download and manage assets, while ",
          { text: "creative access governance", page: 159 },
          " concentrates on keeping control of sensitive creative content.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Access, retention, usage and management", "Information around files as well as files", "A named owner for each rule", "Periods decided by the organisation", "Rules that can be checked afterwards"],
      },
      highlight: {
        heading: "In practice",
        body: "Before a product is announced, a team agrees that its code name may appear in discussion on assets but not in filenames or tags that many colleagues will see.",
        tags: ["Unreleased products", "Metadata", "Discussion"],
      },
      glance: {
        heading: "Data governance in brief",
        facts: [
          { label: "Area", value: "Security" },
          { label: "Sets rules for", value: "Access, retention, usage and asset management" },
          { label: "Covers", value: "Files and the information around them" },
          { label: "Explainer", value: "What Is Creative Governance?", page: 371 },
        ],
        actions: [{ kind: "route", path: "/security", label: "More in Security" }]
      },
      sources: [{ kind: "pdf", page: 339 }, { kind: "pdf", page: 114 }, { kind: "pdf", page: 159 }, { kind: "pdf", page: 371 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "four-rules",
      eyebrow: "The four areas",
      heading: "What each kind of data governance rule has to settle",
      tabs: [
        {
          label: "Access",
          heading: "Who may reach which data, and until when",
          icon: "lock",
          body: [
            "An access rule names a body of data, the people or teams who may reach it and the events that change that, such as a launch, the end of a contract or a move to another role. Writing the ending into the rule matters as much as the beginning, because access granted for a project tends to outlast it.",
            [
              "Applying the rule is where permissions come in. ",
              { text: "Folder-level permissions", page: 152 },
              " allow access to be controlled at a more detailed level than organisation-wide access, so a rule about one client or one campaign can be applied to that material alone.",
            ],
          ],
          points: ["A named body of data and audience", "An end point written into the rule"],
        },
        {
          label: "Retention",
          heading: "How long material is kept, and in what state",
          icon: "archive",
          body: [
            "Retention rules balance two risks. Keeping everything indefinitely preserves history but leaves old, sensitive or superseded material within reach; removing it too readily loses the record of how work was made and what was agreed. The right period depends on contracts, licences and the value of the history, so it is a decision for the organisation rather than something to leave to habit.",
            [
              "Retention need not be a choice between keeping and deleting. ",
              { text: "Asset archiving", page: 108 },
              " provides a way to retain historical content without letting old material interfere with everyday discovery, and authorised users can remove assets according to organisational policies and permissions.",
            ],
          ],
          points: ["Keep, archive or remove", "Periods set by the organisation"],
        },
        {
          label: "Usage",
          heading: "What material may be used for, and where",
          icon: "flag",
          body: [
            "Usage rules capture conditions that people browsing a library cannot see: a licence limited to certain markets, a release covering advertising but not packaging, an embargo until an announcement, or a brand requirement for a particular context. The rule protects nobody if the condition sits in a contract folder nobody opens instead of alongside the asset.",
            [
              "Two structured records help. ",
              { text: "Expiring creative assets", page: 104 },
              " carry expiry information that can help teams identify content that should no longer be used after a specified period, and ",
              { text: "brand guardrail tags", page: 105 },
              " let brand teams identify assets that meet specific organisational requirements.",
            ],
          ],
          points: ["Conditions recorded with the asset", "Expiry and guardrail information"],
        },
        {
          label: "Management",
          heading: "How data is kept accurate, attributed and tidy",
          icon: "database",
          body: [
            "Asset management rules cover the care of the library itself: which information is required for each asset, how items are named and tagged, who is recorded as the creator, and how duplicates and obsolete material are dealt with. Poorly kept data is a governance problem as well as a nuisance, because a usage or retention rule cannot be applied to assets nobody can identify.",
            [
              "Keeping that care going matters more than a single tidy-up. ",
              { text: "Creative library maintenance", page: 111 },
              " helps prevent a library from filling with duplicate, obsolete or poorly classified content, which is exactly the material other rules struggle to reach.",
            ],
          ],
          points: ["Required information agreed", "Duplicates and obsolete material handled"],
        },
      ],
      sources: [{ kind: "pdf", page: 339 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 109 }, { kind: "pdf", page: 104 }, { kind: "pdf", page: 105 }, { kind: "pdf", page: 111 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "beyond-files",
      eyebrow: "Beyond the files",
      heading: "Creative data that governance rules often overlook",
      intro: "Each kind of information around an asset raises its own governance question.",
      columns: ["Why it can be sensitive", "The question a rule should answer"],
      rows: [
        { label: "Embedded metadata", page: 22, cells: ["Can reveal creators, equipment and working details", "Which details are worth keeping when files are imported"] },
        { label: "Comments and discussion", page: 75, cells: ["Often name unannounced products or client concerns", "Who takes part, and how long the history matters"] },
        { label: "Earlier versions", page: 92, cells: ["May hold wording or imagery later withdrawn", "Who may bring back a version that was withdrawn"] },
        { label: "Activity records", page: 118, cells: ["Show who viewed, downloaded, edited or approved", "Who may read them, and for what purpose"] },
        { label: "Usage information", page: 182, cells: ["Shows which work receives attention and which is ignored", "How findings are shared without blaming individuals"] },
      ],
      sources: [{ kind: "pdf", page: 22 }, { kind: "pdf", page: 75 }, { kind: "pdf", page: 92 }, { kind: "pdf", page: 118 }, { kind: "pdf", page: 182 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "judgements",
      eyebrow: "Judgements",
      heading: "Trade-offs behind a workable data governance policy",
      items: [
        {
          heading: "Central rules and local needs",
          summary: "One policy has to allow for markets, clients and teams that genuinely differ.",
          icon: "globe",
          body: [
            "Rules written only at the centre ignore the licence that covers one country or the client who insists on a stricter arrangement. Rules written only locally drift apart until nobody can say what the policy is. A short central policy with room for documented local additions avoids both problems.",
            [
              "Organisations spread across regions meet this early: ",
              { text: "multi-market teams", page: 225 },
              " can separate content by region while maintaining centralised governance.",
            ],
          ],
        },
        {
          heading: "Broad classes or detailed labels",
          summary: "A simple classification gets applied; a detailed one fits better but is applied unevenly.",
          icon: "tag",
          body: [
            "Rules usually refer to kinds of material rather than to individual assets, so a policy needs a way of saying which kind each asset is. A few broad classes, such as public, internal and confidential, are easy for everyone to apply consistently, but they push very different material under the same rule.",
            "Detailed labels fit the material better, yet people apply them unevenly and the rules built on them become hard to follow. A workable policy tends to start broad and adds a narrower class only where a real obligation calls for one.",
          ],
        },
        {
          heading: "Material that leaves the library",
          summary: "Copies downloaded or sent elsewhere fall outside most rules.",
          icon: "download",
          body: [
            "Once a file has been downloaded and forwarded, access, retention and usage rules no longer reach it. A data governance policy should say which kinds of material may leave the library at all, and in what form.",
            "Naming the forms in which material may leave, such as a finished file rather than layered working files, keeps the most sensitive versions inside the library, where the other rules still apply.",
          ],
        },
        {
          heading: "Rules that can be checked",
          summary: "A rule nobody can verify tends to lapse quietly.",
          icon: "audit",
          body: [
            [
              "Each rule is stronger when it names the evidence that shows it is being followed. For access and management rules, the ",
              { text: "asset audit trail", page: 119 },
              " provides visibility into important actions performed on creative files.",
            ],
            "For usage rules, the evidence is more often a periodic look at material approaching the end of its permitted use, carried out by whoever owns the rule.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 225 }, { kind: "pdf", page: 119 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about creative data governance",
      items: [
        {
          question: "Should a creative data governance policy fix how long each kind of material is kept?",
          answer: "It should say how those lengths of time are decided and who decides them, even where they differ from one kind of material to another. Timescales borrowed from another organisation rarely fit, because they depend on your own contracts, licences and need for history.",
        },
        {
          question: "How does creative data governance relate to security controls?",
          answer: [
            "Governance supplies the rules and security controls carry them out. ",
            { text: "Creative security controls", page: 174 },
            " help protect creative assets from unnecessary or unauthorised access, but only a governance rule can say which access counts as unnecessary.",
          ],
        },
        {
          question: "Who should write the rules for creative data governance?",
          answer: "The people who understand the obligations and the material together: brand and production leads for usage, legal colleagues for licences and agreements, and IT or security for access. One owner then keeps the rules consistent and current as circumstances change.",
        },
        {
          question: "How can a team tell whether usage rules for creative data are being followed?",
          answer: [
            "Start with what is actually in use. ",
            { text: "Asset usage tracking", page: 106 },
            " helps teams understand which assets are being used and which remain inactive, which shows where a check against licence conditions is most worth making.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 174 }, { kind: "pdf", page: 106 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on governing creative content",
      variant: "compact",
      pages: [114, 159, 371, 179, 104, 108],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the closest governance pages." }],
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
