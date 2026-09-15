/**
 * 45 · AI-Powered Asset Management — /features/ai-powered-asset-management
 *
 * Angle (cluster: ai-approach): the division of labour — automated analysis combined with human approval, what
 * library administration AI can take on, where people stay in charge, and the difference between approving a
 * suggestion and approving the work. AI-Aware Asset Management (9) owns the platform stance, AI Creative Workflow
 * (54) the operational layer, AI Media Automation (55) the tasks, Practical AI (60) the focus, 362 the explainer.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how library administration is divided between automation and people; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 45,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "AI",
      lede: "Where automation helps with the routine work of running a creative library, where judgement has to stay with people, and how GetSibu combines automated analysis with human approval.",
      visual: { diagram: "ingest-pipeline", focus: "processing" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 45 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Automated analysis, with people holding the final say",
      body: [
        "AI-powered asset management in GetSibu brings automated analysis and human approval together. Teams keep control of their library while AI takes on part of the repetitive administration that would otherwise consume their time.",
        "Library administration is the unglamorous work that keeps a collection usable: describing new files, filing them in the right place, spotting the copy that should not exist, keeping the vocabulary consistent, tidying up after a campaign. None of it is creative, nearly all of it is repetitive, and it often lands on whoever is least able to say no.",
        "The opposite failure is just as real. A system that labelled and rearranged assets with nobody checking would move the problem rather than solve it, because people stop using a library they cannot trust. The arrangement that works is a division of labour in which analysis handles volume and people make the decisions.",
        [
          "That stance runs through the platform, from ",
          { text: "AI-aware asset management", page: 9 },
          " to ",
          { text: "practical AI for creative teams", page: 60 },
          ", which aims AI at real library problems such as discovery, organisation, tagging, OCR and duplicate detection.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Automated analysis at volume", "Human approval of the results", "Less repetitive administration", "Control stays with the team", "Two different kinds of approval"],
      },
      highlight: {
        heading: "In practice",
        body: "After a large shoot, a library manager spends time approving and correcting suggestions in batches rather than writing descriptions, and still decides how the library is organised.",
        tags: ["Library managers", "Governance", "Administration"],
      },
      glance: {
        heading: "AI-powered management in brief",
        facts: [
          { label: "Area", value: "AI" },
          { label: "Combines", value: "Automated analysis and human approval" },
          { label: "Reduces", value: "Repetitive library administration" },
          { label: "Explained in", value: "What Is AI Asset Management?", page: 362 },
        ],
        actions: [{ kind: "route", path: "/features/ai", label: "More in AI" }]
      },
      sources: [{ kind: "pdf", page: 45 }, { kind: "pdf", page: 9 }, { kind: "pdf", page: 60 }, { kind: "pdf", page: 47 }, { kind: "pdf", page: 362 }, EXPLAINS],
    },
    {
      kind: "workflow",
      id: "lifecycle",
      eyebrow: "Across the lifecycle",
      heading: "Where automation and people meet in an asset’s life",
      stages: [
        { label: "Ingestion", body: "Files arrive from connected storage sources and direct uploads, so existing libraries come in without rebuilding the storage workflow by hand." },
        { label: "Processing", body: "Background processing indexes assets without anyone manually performing metadata or AI processing." },
        { label: "Suggestions", body: "Analysis of the media produces recommended tags and classifications for people to act on.", page: 31 },
        { label: "Decisions on suggestions", body: "Authorised users approve suggested tags in bulk, or override those that do not match the intended taxonomy.", page: 47 },
        { label: "Creative review", body: "Separately, teams can request review of the asset itself, make changes and mark it as approved.", page: 67 },
        { label: "Upkeep", body: "Ongoing maintenance helps prevent the library becoming cluttered with duplicate, obsolete or poorly classified content.", page: 111 },
      ],
      sources: [{ kind: "pdf", page: 121 }, { kind: "pdf", page: 311 }, { kind: "pdf", page: 9 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 47 }, { kind: "pdf", page: 48 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 111 }, { kind: "pdf", page: 107 }],
    },
    {
      kind: "tabs",
      id: "who-does-what",
      eyebrow: "Who does what",
      heading: "Dividing the work between AI and the team",
      tabs: [
        {
          label: "Automation",
          heading: "What automated analysis takes on",
          icon: "sparkles",
          body: [
            "Automated analysis suits work that is repetitive, high in volume and low in judgement: first descriptions of new files, text that needs extracting, copies that need noticing.",
            [{ text: "AI media automation", page: 55 }, " reduces repetitive tasks such as tagging and OCR extraction, and ", { text: "duplicate detection", page: 40 }, " identifies identical files and visually equivalent copies, including renamed or re-encoded ones."],
          ],
          points: ["First descriptions of new files", "Text and copies found with less manual searching"],
        },
        {
          label: "People",
          heading: "What stays with the team",
          icon: "users",
          body: [
            "Judgement stays human: whether a description fits the taxonomy, whether an asset is ready for use, who should be able to see a folder. Those decisions carry an accountability that no analysis can hold.",
            ["The responsibilities are set out through ", { text: "creative asset governance", page: 114 }, ", which defines who can upload, edit, approve, download and manage assets."],
          ],
          points: ["Taxonomy decisions", "Readiness and access decisions"],
        },
        {
          label: "Two approvals",
          heading: "Approving a suggestion is not approving the work",
          icon: "approval",
          body: [
            "Two kinds of approval are easy to confuse. Approving an AI suggestion confirms how an asset is described. Approving the asset confirms that the creative work itself is ready to be used.",
            ["The second belongs to ", { text: "asset approval", page: 68 }, ", where status history records whether content is awaiting review, approved or requires changes."],
          ],
          points: ["Descriptions confirmed by those who manage tags", "Creative work signed off through review"],
        },
      ],
      sources: [{ kind: "pdf", page: 55 }, { kind: "pdf", page: 40 }, { kind: "pdf", page: 114 }, { kind: "pdf", page: 68 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "control",
      eyebrow: "Considerations",
      heading: "Keeping control as automation takes on more",
      items: [
        {
          heading: "Decide who approves",
          summary: "Approval rights are a governance choice, not something to leave to chance.",
          icon: "key",
          body: [
            "Suggested tags are approved or overridden by authorised users, and bulk approval is efficient precisely because one decision covers many assets. That makes it worth agreeing who those people are before a large import begins.",
          ],
        },
        {
          heading: "Know where background work has got to",
          summary: "Automation runs out of sight, so its progress needs to be visible.",
          icon: "clock",
          body: [
            ["Work happening in the background only helps if people can tell when it is done, and the ", { text: "AI processing queue", page: 144 }, " provides status information on whether an asset is queued, processing or ready."],
          ],
        },
        {
          heading: "Check that the library is getting easier to run",
          summary: "Analytics can show whether order is holding as the library grows.",
          icon: "chart",
          body: [
            ["Growth, duplicates and inactive content, as revealed by ", { text: "library health analytics", page: 196 }, ", indicate whether the library is staying in order or whether problems are quietly building up."],
          ],
        },
        {
          heading: "Keep people on the exceptions",
          summary: "Routine files suit automation; unusual ones need a person.",
          icon: "flag",
          body: [
            "Usage restrictions, sensitive material, embargoed launches and client-specific rules are rarely visible in a file’s content. Build human review around those exceptions rather than inspecting every routine file by hand.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 31 }, { kind: "pdf", page: 144 }, { kind: "pdf", page: 196 }, { kind: "pdf", page: 47 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about AI-powered asset management",
      items: [
        {
          question: "Which library administration tasks can AI take on in GetSibu?",
          answer: ["Repetitive ones, such as suggesting tags, extracting text with OCR, helping categorise assets and identifying duplicates. ", { text: "AI asset classification", page: 42 }, " covers the categorising side."],
        },
        {
          question: "Does AI-powered asset management reduce the need for a library manager?",
          answer: "It changes the role more than it removes it. Less time goes on describing and filing files, and more on shaping the taxonomy, approving results and handling the exceptions automation cannot see.",
        },
        {
          question: "How does AI-powered asset management relate to AI-aware asset management?",
          answer: "They describe one principle from two directions. AI-aware asset management emphasises GetSibu analysing media and recommending tags and classifications; AI-powered asset management emphasises the balance of automated analysis and human approval that keeps teams in control.",
        },
      ],
      sources: [{ kind: "pdf", page: 45 }, { kind: "pdf", page: 47 }, { kind: "pdf", page: 48 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 38 }, { kind: "pdf", page: 42 }, { kind: "pdf", page: 40 }, { kind: "pdf", page: 9 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on AI and human control",
      variant: "compact",
      pages: [9, 60, 55, 67, 114, 362],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the AI approach cluster." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Turn Your Asset Library Into Intelligence",
      conversionPage: 398,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 398 }],
    },
  ],
};

export default page;
