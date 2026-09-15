/**
 * 208 · Creative Workflow Metrics — /analytics/creative-workflow-metrics
 *
 * Angle (clusters: reporting, creative-workflow): how assets move through upload, review and approval — where they
 * gather, where they return for changes and where friction sits between stages. No durations or cycle-time measures
 * are claimed. Creative Workflow Management (80) owns the workflow itself; KPIs (207) own choosing indicators.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of creative review and approval practice; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 208,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Analytics",
      lede: "See how creative assets travel from arrival to a decision, where they gather between stages and what that reveals about the way your team reviews and approves work.",
      visual: { diagram: "library-activity", focus: "uploads" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 208 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Following assets from upload to approval",
      body: [
        "Workflow metrics help teams understand how assets move through upload, review and approval processes. Their subject is movement: not how much the library holds, but how material travels from arrival to a decision.",
        "Creative work spends much of its life waiting rather than moving. A cut sits ready while its reviewer is at a shoot, a design is agreed in a meeting but never marked approved, a batch of photography arrives before anyone has agreed who should look at it. Delays of this kind are rarely dramatic. They build up in the gaps between stages, where nobody is obviously responsible.",
        [
          "The stages belong to a wider workflow. ",
          { text: "Creative workflow management", page: 80 },
          " supports the movement of assets from upload through organisation, review, approval and final use, and the ",
          { text: "creative approval workflow", page: 67 },
          " lets teams request review, make changes and mark assets as approved.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Movement rather than volume", "Upload, review and approval", "Where assets gather", "Repeated rounds of changes", "Friction between stages"],
      },
      highlight: {
        heading: "In practice",
        body: "A studio manager notices new material piling up between upload and review, and finds that nobody had agreed who picks up newly arrived work.",
        tags: ["Studio managers", "Handovers", "Review"],
      },
      glance: {
        heading: "Workflow metrics in brief",
        facts: [
          { label: "Area", value: "Analytics" },
          { label: "Follows", value: "How assets move through upload, review and approval" },
          { label: "Workflow", value: "Creative Workflow Management", page: 80 },
          { label: "Approval", value: "Creative Approval Workflow", page: 67 },
        ],
        actions: [{ kind: "page", page: 181, label: "Creative Asset Analytics" }]
      },
      sources: [{ kind: "pdf", page: 208 }, { kind: "pdf", page: 80 }, { kind: "pdf", page: 67 }, EXPLAINS],
    },
    {
      kind: "workflow",
      id: "stages",
      eyebrow: "Stage by stage",
      heading: "Where an asset goes, and what to watch at each point",
      stages: [
        { label: "Upload", body: "Material arrives in the library. Watch whether it arrives when the plan expects, because late arrival squeezes every stage that follows." },
        { label: "Processing", body: "After upload, assets move through stages such as metadata extraction, thumbnail generation and AI-related processing, so preparation sits between arriving and being ready to review.", page: 143 },
        { label: "Review", body: "Colleagues inspect the work, discuss changes and confirm final assets in a central location. An asset that reaches review and draws no discussion is often waiting on someone.", page: 69 },
        { label: "Changes", body: "Work returns for revision and comes back to review. Keeping those rounds on the same asset, rather than as new files, is what lets the loop be seen at all." },
        { label: "Approval", body: "Approval management creates a structured process for moving assets from draft to approved status. Watch whether decisions depend on one person whose absence halts everything.", page: 89 },
        { label: "Final use", body: "Approved work is put to use. Approved material that nobody uses raises a fair question about whether review is approving the right things." },
      ],
      sources: [{ kind: "pdf", page: 143 }, { kind: "pdf", page: 69 }, { kind: "pdf", page: 89 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "Event material that kept waiting for one approver",
      team: "An events company’s creative team",
      situation: "An events company’s creative team produces promotional material for a busy calendar of events. Approvals keep arriving at the last moment, and designers are frustrated.",
      steps: [
        { heading: "Movement is examined", body: "Workflow metrics show assets moving from upload into review without difficulty, then gathering there with no decision recorded." },
        { heading: "The pattern is traced", body: ["The team’s ", { text: "approval history", page: 77 }, " shows nearly every asset passing through one event director, whose schedule is dominated by the events themselves."] },
        { heading: "Responsibility is shared out", body: "As a working rule, the team agrees that brand material goes to the brand lead and event-specific material to the relevant event manager." },
        { heading: "The right reviewer is brought in", body: ["Designers ", { text: "mention the relevant reviewer", page: 86 }, " in each asset’s discussion, bringing the right collaborator into the conversation about that piece."] },
        { heading: "Drafts are visible before each event", body: ["Ahead of every event, the team checks ", { text: "asset statuses", page: 102 }, " to see which pieces are still drafts and which are approved."] },
      ],
      outcome: "Material stops gathering in front of one person, and fewer approvals are left until the final days before an event.",
      link: { page: 236, label: "GetSibu for Event Companies" },
      sources: [{ kind: "pdf", page: 208 }, { kind: "pdf", page: 77 }, { kind: "pdf", page: 86 }, { kind: "pdf", page: 102 }, { kind: "pdf", page: 236 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "accordion",
      id: "measuring-flow",
      eyebrow: "Considerations",
      heading: "Measuring workflow without pressuring creative work",
      items: [
        {
          heading: "Waiting can be deliberate",
          summary: "An asset resting in review may be receiving careful thought.",
          icon: "clock",
          body: [
            "Senior stakeholders sometimes need to see a piece alongside others, or sleep on a decision. Distinguish work that is waiting for attention from work that is being considered, and ask before chasing either.",
          ],
        },
        {
          heading: "Rounds of changes tell a story",
          summary: "How often work returns for revision says as much as whether it was approved.",
          icon: "history",
          body: [
            [
              "Several rounds on one asset often trace back to a brief that left too much open or reviewers who disagreed with each other. ",
              { text: "File version history", page: 92 },
              " gives teams a record of previous versions, which makes the path of those rounds visible when the team reflects on a project.",
            ],
          ],
        },
        {
          heading: "Processing is not part of review",
          summary: "Separate technical readiness from human decisions.",
          icon: "server",
          body: [
            [
              "An asset that has uploaded may still be being prepared. ",
              { text: "Media processing status", page: 145 },
              " helps teams distinguish an asset that has uploaded successfully from one that is fully indexed and searchable, so a technical step is not mistaken for a reviewer’s delay.",
            ],
          ],
        },
        {
          heading: "Approval has to keep its meaning",
          summary: "Pressure to move faster can turn approval into a formality.",
          icon: "approval",
          body: [
            [
              "If the only goal is fewer assets waiting, approvals become rubber stamps and the approved library loses its value. ",
              { text: "Creative asset governance", page: 114 },
              " defines who can upload, edit, approve, download and manage assets, and that definition matters more than the speed of any single decision.",
            ],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 92 }, { kind: "pdf", page: 145 }, { kind: "pdf", page: 114 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about creative workflow metrics",
      items: [
        {
          question: "Do creative workflow metrics show how long approvals take?",
          answer: "They concern how assets move through upload, review and approval. If precise timings matter to your team, confirm what the analytics include during an evaluation rather than assuming a particular measure is available.",
        },
        {
          question: "How do creative workflow metrics relate to review status?",
          answer: [
            { text: "Review status", page: 76 },
            " tells a colleague whether one asset still needs attention or has completed approval. The metrics are about the flow of many assets instead: where work gathers and how smoothly it passes from one stage to the next.",
          ],
        },
        {
          question: "How do creative workflow metrics relate to digital asset KPIs?",
          answer: [
            "Movement through the workflow can become an objective in its own right, in which case related measures may join a team’s ",
            { text: "digital asset KPIs", page: 207 },
            ". Comments are one candidate, since review taking place on assets is part of that movement.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 208 }, { kind: "pdf", page: 76 }, { kind: "pdf", page: 207 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on review, approval and workflow",
      variant: "compact",
      pages: [80, 67, 77, 89, 207, 236],
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
