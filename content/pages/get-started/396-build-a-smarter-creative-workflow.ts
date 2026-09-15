/**
 * 396 · Build a Smarter Creative Workflow — /get-started/build-a-smarter-creative-workflow
 *
 * Angle (clusters: creative-workflow, conversion): the connected workflow from ingestion to governance, argued
 * through its handoffs: what each stage passes to the next, what the same stages cost when run in separate tools,
 * and where to start connecting. Creative Workflow Management (80) owns the upload-to-final-use journey; Creative
 * Asset Lifecycle (107) owns the stages of one asset's life.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of connected and disconnected creative workflows; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 396,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Get Started",
      lede: "How the stages of creative work, from bringing assets in to governing their use, can run as one connected workflow, what each stage hands to the next, and where disconnected tools cost a team the most effort.",
      visual: { diagram: "timeline-review", focus: "status" },
      actions: [
        { kind: "global", cta: "primary" },
        { kind: "page", page: 80, label: "Creative workflow management" },
      ],
      sources: [{ kind: "pdf", page: 396 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A workflow is only as smart as its handoffs",
      body: [
        "GetSibu connects ingestion, AI processing, organisation, search, collaboration, approvals, analytics and governance into a single workflow. The aim is practical: less of a creative team’s time spent managing files, and more of it spent producing work.",
        "A team without a connected workflow still performs every one of those stages; it simply runs them in different tools. Files arrive by transfer link, keywords live in a spreadsheet, feedback travels by email, sign-off happens in a meeting and nobody measures any of it. None of that effort is wasted, but it has to be carried by hand from one tool to the next, and whatever is dropped on the way gets done twice.",
        [
          "In a connected workflow, the output of each stage is already where the next one needs it. The same journey seen from a single asset’s point of view is described in ",
          { text: "Creative Asset Lifecycle", page: 107 },
          ", and the role of AI across it in ",
          { text: "AI Creative Workflow", page: 54 },
          ".",
        ],
      ],
      keyPoints: {
        heading: "Key ideas",
        items: ["Eight stages, one workflow", "Each stage feeds the next", "Less carrying work between tools", "Decisions recorded where they happen", "Rules applied across the whole journey"],
      },
      highlight: {
        heading: "In practice",
        body: "Rather than exporting a cut for every reviewer, an editor points reviewers to the asset, where they inspect the work, discuss changes and confirm the final version.",
        tags: ["Editors", "Reviewers"],
      },
      glance: {
        heading: "The connected workflow in brief",
        facts: [
          { label: "Area", value: "Get Started" },
          { label: "Runs from", value: "Ingestion and AI processing" },
          { label: "Runs to", value: "Approvals, analytics and governance" },
          { label: "Used by", value: "Creative, marketing, production and brand teams" },
        ],
      },
      sources: [{ kind: "pdf", page: 396 }, { kind: "pdf", page: 107 }, { kind: "pdf", page: 54 }, { kind: "pdf", page: 69 }, { kind: "pdf", page: 10 }, EXPLAINS],
    },
    {
      kind: "workflow",
      id: "handoffs",
      eyebrow: "Stage to stage",
      heading: "What each pair of stages hands to the next",
      stages: [
        { label: "Ingestion into AI processing", body: "Assets arriving from connected storage or direct uploads move on into processing, where background work indexes them without anyone having to perform metadata or AI processing by hand." },
        { label: "Organisation into search", body: "The tags and metadata added while organising become material that search can draw on, alongside filenames, extracted text and semantic information." },
        { label: "Collaboration into approval", body: "Comments left during review sit on the same asset for which approval is then requested, so the decision is taken beside the discussion that shaped it." },
        { label: "Analytics into governance", body: "Analytics on uploads, storage, contributors and tags give visibility into how the library is being used, which gives whoever sets its rules evidence to work from." },
      ],
      sources: [{ kind: "pdf", page: 121 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 311 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 23 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 181 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "tools-compared",
      eyebrow: "Side by side",
      heading: "The same stages in separate tools and in one workflow",
      columns: ["Separate tools", "One GetSibu workflow"],
      emphasis: 1,
      rows: [
        ["Moving files in", "Transfers repeated between locations", "Less manual movement of files between storage locations"],
        ["Describing assets", "Keywords typed afterwards, if at all", "Tags suggested during processing and approved in bulk"],
        ["Finding work", "Knowing which tool holds what", "Search across the entire creative library"],
        ["Giving feedback", "Notes scattered across email and chat", "Feedback kept connected to the asset"],
        ["Recording decisions", "Sign-off remembered rather than recorded", "Approval history as a record of review activity"],
        ["Seeing the flow", "No view of how work moves", "Metrics on upload, review and approval"],
      ],
      sources: [{ kind: "pdf", page: 129 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 47 }, { kind: "pdf", page: 16 }, { kind: "pdf", page: 73 }, { kind: "pdf", page: 77 }, { kind: "pdf", page: 208 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "where-to-start",
      eyebrow: "Considerations",
      heading: "Where to start connecting a creative workflow",
      items: [
        {
          heading: "Where information is typed twice",
          summary: "Retyping the same details in a second place is the clearest sign of a break.",
          icon: "copy",
          body: [
            "Look for the moments when someone copies a filename into a tracker, rewrites keywords for a second system or renames an export to match another tool’s convention. Each is a handoff that nothing carries automatically.",
            [{ text: "Automation", page: 356 }, " helps reduce the repetitive work associated with tagging, organising and locating assets, which is usually where retyping gathers."],
          ],
        },
        {
          heading: "Where approvals stall",
          summary: "Work often waits because nobody can tell what state it is in.",
          icon: "approval",
          body: [
            "A piece of work can sit finished for days because the reviewer thinks it is still in progress and the author thinks it has been sent. The delay is a missing signal, not missing effort.",
            [{ text: "Review status", page: 76 }, " gives users a clear indication of whether an asset needs attention or has already completed the approval process."],
          ],
        },
        {
          heading: "Where other systems must stay",
          summary: "A connected workflow can reach beyond the library itself.",
          icon: "plug",
          body: [
            "Project planning, publishing and production tracking may reasonably stay in their own systems. The goal is to connect them, not to pull everything into one place.",
            [{ text: "Approval events can be incorporated", page: 267 }, " into external production and workflow systems, and developers can use APIs and webhooks to automate repetitive asset management workflows."],
          ],
        },
        {
          heading: "Where the rules are decided",
          summary: "Governance works best designed into the workflow rather than added after a problem.",
          icon: "shield",
          body: [
            "Rules written after an incident tend to be broad and resented. Rules decided while the workflow is being connected can match each stage to the people responsible for it.",
            ["In GetSibu terms, ", { text: "creative asset governance", page: 114 }, " is the set of decisions about who may upload, edit, approve, download and manage assets, which maps neatly onto the stages of a workflow."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 356 }, { kind: "pdf", page: 76 }, { kind: "pdf", page: 267 }, { kind: "pdf", page: 278 }, { kind: "pdf", page: 114 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about building a smarter creative workflow",
      items: [
        {
          question: "What happens at the end of a creative workflow, once an asset is no longer needed?",
          answer: ["The end deserves the same care as the beginning. ", { text: "Asset lifecycle management", page: 101 }, " can support creative assets from initial upload to review, approval, reuse and eventual deletion, so retiring an asset is part of the same workflow rather than an afterthought."],
        },
        {
          question: "Which part of a creative workflow is a sensible first candidate for AI?",
          answer: ["Description is a sensible place to begin, because it is repetitive and easy to postpone. ", { text: "AI-powered asset management", page: 45 }, " combines automated analysis with human approval, so a team keeps control of its descriptions while AI reduces the amount of repetitive library administration."],
        },
        {
          question: "How can leaders tell whether a creative workflow is becoming more efficient?",
          answer: ["Leaders can look to ", { text: "creative operations analytics", page: 195 }, " for an understanding of how efficiently the asset library is being used, read alongside what the teams themselves report about where work still waits."],
        },
      ],
      sources: [{ kind: "pdf", page: 101 }, { kind: "pdf", page: 45 }, { kind: "pdf", page: 195 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on connecting creative work",
      variant: "compact",
      pages: [80, 107, 54, 208, 114, 101],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Start Your Creative Library",
      conversionPage: 391,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 391 }],
    },
  ],
};

export default page;
