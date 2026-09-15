/**
 * 357 · Storage Efficiency — /business-value/storage-efficiency
 *
 * Angle (clusters: storage-analytics, productivity): efficiency as consumption a team can explain — what duplicate
 * detection and storage analytics each show, what they leave to people, and the decisions that follow.
 * Duplicate Reduction (350) owns the return from fewer copies; Duplicate Asset Management (112) owns the clean-up;
 * Storage Analytics (183) owns the category view and why storage grows.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of storage consumption and the decisions it informs; states no GetSibu capability beyond the cited pages and supplies no figures." } as const;

const page: PageContent = {
  page: 357,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "centered",
      eyebrow: "Business Value",
      lede: "How duplicate detection and storage analytics can turn a storage total that simply grows into consumption a team can explain, which decisions that understanding supports, and which stay with the people who know the work.",
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 357 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Storage spent on purpose",
      body: [
        "Duplicate detection and storage analytics can help teams better understand how their storage is being consumed. Efficiency in that sense begins with explanation: nobody can judge whether storage is well spent until they can say what the space holds and why.",
        "Storage efficiency is often read as simply using less. For a creative library that can be the wrong goal. A production company whose footage archive keeps growing may be spending its storage exactly as it should, while a modest marketing library can be wasteful if much of it is copies and material nobody opens. The distinction that matters is between consumption an organisation chooses and consumption it tolerates only because nobody can see it.",
        [
          "The return on clearing copies is examined under ",
          { text: "duplicate reduction", page: 350 },
          ", and the housekeeping itself under ",
          { text: "duplicate asset management", page: 112 },
          ". Storage efficiency sits a step earlier: seeing clearly before anyone decides what to keep or remove.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Chosen versus tolerated consumption", "Repetition made visible", "Space per asset category", "Evidence before deletion", "Decisions kept with people"],
      },
      glance: {
        heading: "Storage efficiency in brief",
        facts: [
          { label: "Area", value: "Business value" },
          { label: "Evidence from", value: "Duplicate detection and storage analytics" },
          { label: "Result", value: "Consumption the team can explain" },
          { label: "Planning", value: "Library Growth Reporting", page: 209 },
        ],
        actions: [{ kind: "route", path: "/business-value", label: "More in Business Value" }]
      },
      sources: [{ kind: "pdf", page: 357 }, { kind: "pdf", page: 350 }, { kind: "pdf", page: 112 }, { kind: "pdf", page: 209 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "evidence",
      eyebrow: "Evidence and judgement",
      heading: "What each source of evidence shows, and what it leaves to you",
      intro: "Each source answers one question well and leaves another open.",
      columns: ["What it shows", "What it leaves to people"],
      rows: [
        { label: "Storage analytics", page: 183, cells: ["How much space different asset categories consume", "Whether each share suits the work produced"] },
        { label: "Storage growth analytics", page: 149, cells: ["Historical context on how quickly the library expands", "Whether the pace reflects plans or accidents"] },
        { label: "Duplicate detection", page: 40, cells: ["Identical files and visually equivalent copies, including renamed or re-encoded ones", "Which copy stays and which serves no purpose"] },
        { label: "Asset usage analytics", page: 182, cells: ["Which assets receive attention and which remain underused", "Whether underused material still has value"] },
        { label: "Library health analytics", page: 196, cells: ["Inactive content alongside other organisational patterns", "Which patterns call for action and which are expected"] },
      ],
      sources: [{ kind: "pdf", page: 183 }, { kind: "pdf", page: 149 }, { kind: "pdf", page: 40 }, { kind: "pdf", page: 182 }, { kind: "pdf", page: 196 }, EXPLAINS],
    },
    {
      kind: "checklist",
      id: "weigh",
      eyebrow: "What to weigh",
      heading: "What to weigh when judging storage efficiency",
      variant: "chips",
      surface: "muted",
      items: [
        "Space justified by the work produced",
        "Copies with no remaining purpose",
        "Material kept only out of habit",
        "Growth expected from planned productions",
        "Who may remove assets",
        "Retention rules for finished work",
      ],
      sources: [{ kind: "pdf", page: 357 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "decisions",
      eyebrow: "Acting on the evidence",
      heading: "Decisions that follow once consumption is understood",
      items: [
        {
          heading: "Remove only what has lost its purpose",
          summary: "Deleting before understanding risks losing material that was still doing a job.",
          icon: "trash",
          body: [
            "A file that looks redundant may be the version a partner relies on, or the one carrying details recorded nowhere else. Check how an asset is used, and what is attached to it, before it goes.",
            [
              "Removal is itself a governed step: ",
              { text: "authorised users can remove assets", page: 109 },
              " according to organisational policies and permissions.",
            ],
          ],
          points: ["Usage checked first", "Removal within policy"],
        },
        {
          heading: "Treat archiving as a separate decision",
          summary: "Archiving changes what people see day to day, not what the library holds.",
          icon: "archive",
          body: [
            "Finished campaigns, past productions and superseded brand material often matter for reference, reuse or record, even when nobody opens them for long stretches.",
            [
              { text: "Asset archiving", page: 108 },
              " is a way of retaining that history without letting it interfere with everyday discovery. It is a question of what appears in everyday work rather than of space, so it should not be counted as a storage saving.",
            ],
          ],
        },
        {
          heading: "Keep what the work needs, and record why",
          summary: "A large share of storage can be the efficient choice, provided the reasoning is written down.",
          icon: "check",
          body: [
            "Some consumption is simply the cost of the organisation’s output: footage for a video-led studio, high-resolution photography for a retailer. Recording why a category is large, and who agreed it, stops each review from reopening the same question.",
          ],
        },
        {
          heading: "Agree rules for what stays",
          summary: "A written retention rule stops the same argument being had at every review.",
          icon: "shield",
          body: [
            [
              { text: "Creative data governance", page: 339 },
              " is where rules on access, retention, usage and asset management are established, and retention is the part storage reviews keep returning to. Agreeing as an organisation how long finished work, raw material and channel exports should be kept turns a recurring storage debate into a policy people can follow.",
            ],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 109 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 339 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about storage efficiency",
      items: [
        {
          question: "Is storage efficiency worth attention when space is not running out?",
          answer: "Often, because storage nobody can explain tends to signal other problems: copies that confuse people, imports that were never checked, material whose owner has moved on. Those cost time whether or not space is short.",
        },
        {
          question: "Is a migration a good moment to improve storage efficiency?",
          answer: [
            "It is one of the better ones, because every asset is being handled anyway. ",
            { text: "Digital asset migration planning", page: 290 },
            " ensures that assets, metadata and permissions are considered before the transfer begins, which is the point to ask whether old exports and forgotten copies need to come across at all.",
          ],
        },
        {
          question: "What should a storage efficiency review produce?",
          answer: "A short account a budget holder can follow: which categories hold most space and why, what was removed and why, and what the organisation expects to need next. Decisions recorded that way make the following review quicker.",
        },
      ],
      sources: [{ kind: "pdf", page: 290 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on understanding storage",
      variant: "compact",
      pages: [183, 40, 350, 112, 209, 149],
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
