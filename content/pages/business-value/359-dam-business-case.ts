/**
 * 359 · DAM Business Case — /business-value/dam-business-case
 *
 * Angle (cluster: roi, primary): the structure of a business case without numbers — the four arguments the PDF
 * names, the evidence each needs, the steps for assembling it and the questions to answer before a decision.
 * Creative Workflow ROI (348), Asset Discovery ROI (349) and Duplicate Reduction (350) own individual strands;
 * Why Invest in GetSibu (360) owns the platform-level argument.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how to structure a business case; states no GetSibu capability beyond the cited pages and supplies no figures." } as const;

const page: PageContent = {
  page: 359,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "centered",
      eyebrow: "Business Value",
      lede: "A way to structure the case for a digital asset management platform that finance, IT and creative leaders can each test: the arguments to make, the evidence each one needs, the effort to set against them and the questions to answer before anyone asks.",
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 359 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A case the decision makers can test",
      body: [
        "The business case for GetSibu can be built around faster discovery, improved organisation, stronger governance and more efficient collaboration. Those four arguments give a case its shape; what makes it persuasive is evidence the organisation can check for itself.",
        "DAM business cases tend to fail in one of two ways. Some list features without connecting them to anything the organisation actually struggles with. Others lead with a return borrowed from somewhere else, which nobody in the room can verify and a careful finance reader will discount. A stronger case describes current losses in the organisation’s own terms, shows which capability addresses each loss, and is candid about the effort of change.",
        [
          "Several strands of evidence are examined on their own: ",
          { text: "creative workflow ROI", page: 348 },
          " covers searching, recreating files and version confusion, ",
          { text: "duplicate reduction", page: 350 },
          " covers copies, and ",
          { text: "enterprise asset management cost", page: 347 },
          " considers cost alongside storage, productivity, collaboration and administrative savings.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Four arguments, one decision", "Evidence from your own organisation", "Effort of change set out honestly", "Objections answered in advance", "Criteria for reviewing the result"],
      },
      glance: {
        heading: "The business case in brief",
        facts: [
          { label: "Area", value: "Business value" },
          { label: "Built around", value: "Discovery, organisation, governance and collaboration" },
          { label: "Evidence from", value: "Your own baseline, not borrowed figures" },
          { label: "Platform view", value: "Why Invest in GetSibu", page: 360 },
        ],
        actions: [{ kind: "route", path: "/business-value", label: "More in Business Value" }]
      },
      sources: [{ kind: "pdf", page: 359 }, { kind: "pdf", page: 348 }, { kind: "pdf", page: 350 }, { kind: "pdf", page: 347 }, { kind: "pdf", page: 360 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "arguments",
      eyebrow: "The four arguments",
      heading: "What each argument claims and the evidence it needs",
      tabs: [
        {
          label: "Discovery",
          heading: "Time returned from searching",
          icon: "search",
          body: [
            "The discovery argument says people spend too long finding existing work and sometimes fail altogether. Its evidence is local: requests sent to colleagues, searches abandoned, work made again because nobody could locate the original.",
            [
              "The argument rests on breadth of search. GetSibu makes ",
              { text: "creative assets searchable", page: 11 },
              " through filenames, metadata, OCR, AI-generated tags, comments and semantic information, so an asset can be found by more than the name someone once gave it.",
            ],
          ],
          points: ["Requests and abandoned searches logged", "Assets recreated instead of found"],
          link: { page: 349, label: "Asset Discovery ROI" },
        },
        {
          label: "Organisation",
          heading: "A library that stays in order",
          icon: "folder",
          body: [
            "The organisation argument concerns the state of the library itself: inconsistent naming, copies nobody can explain, revisions saved as separate files and clean-up projects that never finish. Much of this evidence appears simply by opening shared folders with a colleague who did not create them.",
            [
              "GetSibu helps teams organise assets using ",
              { text: "structured folders and scalable taxonomies", page: 8 },
              ", and assets can be replaced in place while previous versions are retained, which addresses a familiar source of disorder.",
            ],
          ],
          points: ["Copies and renamed revisions found", "Clean-ups that keep recurring"],
          link: { page: 4, label: "Creative Library Management" },
        },
        {
          label: "Governance",
          heading: "Control over what is used and by whom",
          icon: "shield",
          body: [
            "The governance argument is about risk: outdated or unapproved content reaching customers, access broader than anyone intended, and questions about past actions that nobody can answer. Its evidence is incidents, near misses and audit requests that proved hard to satisfy.",
            [
              "In GetSibu, ",
              { text: "creative asset governance", page: 114 },
              " sets out who can upload, edit, approve, download and manage assets. New folders can remain private until access is explicitly granted, and audit logs provide a historical record of important actions.",
            ],
          ],
          points: ["Incidents and near misses recorded", "Access wider than intended"],
          link: { page: 179, label: "Enterprise Asset Governance" },
        },
        {
          label: "Collaboration",
          heading: "Feedback and decisions kept with the work",
          icon: "users",
          body: [
            "The collaboration argument concerns review: feedback scattered across email and chat, rounds repeated because notes were missed, and sign-off that has to be chased. Evidence comes from recent projects, traced back through the messages they generated.",
            [
              "Contextual comments and approvals reduce how much asset-specific feedback has to pass between disconnected tools, and ",
              { text: "approval history", page: 77 },
              " keeps a record of the review activity behind each decision.",
            ],
          ],
          points: ["Projects traced through their messages", "Sign-off that had to be chased"],
          link: { page: 358, label: "Collaboration Efficiency" },
        },
      ],
      sources: [{ kind: "pdf", page: 11 }, { kind: "pdf", page: 349 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 4 }, { kind: "pdf", page: 114 }, { kind: "pdf", page: 154 }, { kind: "pdf", page: 326 }, { kind: "pdf", page: 179 }, { kind: "pdf", page: 358 }, { kind: "pdf", page: 77 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "structure",
      eyebrow: "Step by step",
      heading: "Assembling a DAM business case",
      intro: "A sequence that keeps the case grounded in the organisation’s own situation.",
      steps: [
        {
          heading: "State the problem plainly",
          body: "Describe what goes wrong today in the organisation’s own words, such as missed launches, repeated shoots or brand errors, before any product is mentioned.",
          icon: "flag",
        },
        {
          heading: "Record a baseline",
          body: "Over an ordinary period, log searches that fail, work that is recreated, rounds that repeat and storage growth nobody can explain, so the case rests on observation rather than recollection.",
          icon: "clock",
        },
        {
          heading: "Match evidence to arguments",
          body: "Sort the baseline under discovery, organisation, governance and collaboration, and drop any argument the evidence does not support rather than stretching it.",
          icon: "layers",
        },
        {
          heading: "Set out the effort",
          body: "Include what implementation involves, from configuring users, folders and permissions to integrations, metadata and workflows, along with the time people need to change habits.",
          icon: "briefcase",
        },
        {
          heading: "Plan the move",
          body: "Migration planning ensures assets, metadata and permissions are considered before any transfer begins, which lets the case describe disruption honestly.",
          icon: "map",
          page: 290,
        },
        {
          heading: "Agree how success is judged",
          body: "Name the signs that would show the case was right, and when they will be checked, so the review after adoption is settled in advance rather than argued afterwards.",
          icon: "check",
        },
      ],
      sources: [{ kind: "pdf", page: 299 }, { kind: "pdf", page: 290 }, EXPLAINS],
    },
    {
      kind: "checklist",
      id: "weigh",
      eyebrow: "What to weigh",
      heading: "What to weigh in a DAM business case",
      variant: "chips",
      surface: "muted",
      items: [
        "Losses recorded in your own work",
        "Teams the library must serve",
        "Implementation and migration effort",
        "Security and access expectations",
        "Who owns the library afterwards",
        "How the result will be reviewed",
      ],
      sources: [{ kind: "pdf", page: 359 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about building a DAM business case",
      items: [
        {
          question: "Should a DAM business case compare more than one option?",
          answer: "It is stronger when it does, and one of the options should be keeping the current setup. Judge every option against the same recorded losses and the same four arguments, so the comparison turns on how each addresses the organisation’s problems rather than on the length of a feature list.",
        },
        {
          question: "What if the evidence supports only one of the four business case arguments?",
          answer: "Make the case on that argument alone. A narrow case with solid evidence is easier to approve than a broad one with gaps, and the other arguments can be revisited once the library is in use.",
        },
        {
          question: "How can a DAM business case answer worries about disrupting current work?",
          answer: [
            "By describing the transition specifically: what moves when, how teams carry on and how the result is checked. ",
            { text: "Migration verification", page: 296 },
            " helps organisations confirm that important content and metadata have transferred correctly, which gives the case a concrete answer to the fear of losing material in the move.",
          ],
        },
        {
          question: "Who should challenge a DAM business case before it goes for approval?",
          answer: "Representatives of each group it affects: finance on cost, IT and security on access and integration, and the creative, marketing or production leads whose teams will change how they work. Objections are cheaper to answer before the decision meeting than during it.",
        },
        {
          question: "How does a DAM business case differ from the case for investing in GetSibu?",
          answer: [
            "A business case is a structure an organisation fills with its own evidence. ",
            { text: "Why invest in GetSibu", page: 360 },
            " sets out the platform-level argument for bringing discovery, asset management, collaboration, analytics and security together for creative workflows.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 296 }, { kind: "pdf", page: 360 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on making the case for a DAM",
      variant: "compact",
      pages: [348, 349, 350, 347, 360, 114],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Build a Smarter Creative Workflow",
      conversionPage: 396,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 396 }],
    },
  ],
};

export default page;
