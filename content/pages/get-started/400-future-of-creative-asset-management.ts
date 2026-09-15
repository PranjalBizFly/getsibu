/**
 * 400 · The Future of Creative Asset Management — /get-started/future-of-creative-asset-management
 *
 * Angle (clusters: future-of-dam, conversion): the conversion manifesto. Storage is only the beginning; the promise is
 * that a team can move quickly without losing control of its content, because the capabilities GetSibu combines make
 * the controlled route the quick one. Future of Digital Asset Management (378) owns the direction of the category
 * (understanding content); 391–399 own starting, gathering, searching, discovering, sharing, workflow, scale,
 * intelligence and order.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of the tension between speed and control in creative work; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 400,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Get Started",
      lede: "How a creative library in which storage is only the beginning is designed for teams that need to move quickly without losing control, and what each capability GetSibu brings together adds to that balance.",
      visual: { diagram: "library-search" },
      actions: [
        { kind: "global", cta: "primary" },
        { kind: "page", page: 7, label: "Modern digital asset management" },
      ],
      sources: [{ kind: "pdf", page: 400 }, { kind: "pdf", page: 7 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Moving quickly without losing control of the work",
      body: [
        "GetSibu takes a modern approach to digital asset management in which storage is only the beginning. It brings together intelligent search, AI-assisted organisation, contextual collaboration, version control, analytics, permissions, integrations and enterprise security, so that teams who need to move quickly can do so without losing control of their content.",
        "Speed and control usually pull against each other. Under deadline, people take whatever shortcut works: a file downloaded to a laptop, a link sent from a personal account, a revision saved under a new name. Each shortcut is faster today and leaves the organisation knowing a little less about where its work is and who has it. Tighten the rules instead, and people wait for access, lose time hunting for the approved version and, before long, invent new shortcuts.",
        [
          "The way out is a library where the controlled route is also the quick one, which a store of files cannot offer on its own. How that idea extends traditional file storage is set out in ",
          { text: "modern digital asset management", page: 7 },
          ", while ",
          { text: "the future of digital asset management", page: 378 },
          " looks at where the wider category is heading.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Storage as the first step, not the last", "The quick route and the controlled route", "Capabilities that support each other", "Tools teams already use", "Control without constant gatekeeping"],
      },
      highlight: {
        heading: "In practice",
        body: "A regional marketer needs an approved product image at short notice. If finding it in the library is quicker than asking a designer to send a copy, the approved version is the one that gets used.",
        tags: ["Marketing", "Approved content"],
      },
      glance: {
        heading: "The approach in brief",
        facts: [
          { label: "Area", value: "Get Started" },
          { label: "Starts with", value: "Storage and a central library" },
          { label: "Promise", value: "Moving quickly without losing control" },
          { label: "Grounded in", value: "Creative Library Management", page: 4 },
        ],
      },
      sources: [{ kind: "pdf", page: 400 }, { kind: "pdf", page: 7 }, { kind: "pdf", page: 378 }, { kind: "pdf", page: 4 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "speed-and-control",
      eyebrow: "Speed and control",
      heading: "What each capability adds beyond storage",
      intro: "Most of these capabilities make a team quicker and more in control at the same time.",
      columns: ["Helps the team move quickly", "Helps the team keep control"],
      rows: [
        { label: "Intelligent search", page: 11, cells: ["Assets found by filename, metadata, extracted text, tags or a plain description", "Saved searches shared instead of duplicate copies"] },
        { label: "AI-assisted organisation", page: 31, cells: ["Suggested tags approved in bulk", "Authorised users review and override suggestions"] },
        { label: "Contextual collaboration", page: 62, cells: ["Feedback left directly on the asset", "Mentions with folder-aware autocomplete"] },
        { label: "Version control", page: 91, cells: ["Assets replaced in place, with earlier versions kept", "Approval history showing which version was accepted"] },
        { label: "Analytics", page: 182, cells: ["Usage analytics showing which assets receive attention", "Access analytics showing how content is viewed or used"] },
        { label: "Permissions", page: 151, cells: ["Consistent access for whole teams", "Folder-level control finer than organisation-wide access"] },
        { label: "Integrations", page: 241, cells: ["Connections to the tools teams already use", "API requests made through authenticated access"] },
        { label: "Security", page: 321, cells: ["Many client libraries run from one platform", "Tenant isolation, audit logging and account protection"] },
      ],
      sources: [{ kind: "pdf", page: 11 }, { kind: "pdf", page: 78 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 47 }, { kind: "pdf", page: 48 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 66 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 77 }, { kind: "pdf", page: 182 }, { kind: "pdf", page: 197 }, { kind: "pdf", page: 175 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 241 }, { kind: "pdf", page: 256 }, { kind: "pdf", page: 162 }, { kind: "pdf", page: 321 }, { kind: "pdf", page: 336 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "moments",
      eyebrow: "Where it shows",
      heading: "Moments when a team needs speed and control at once",
      tabs: [
        {
          label: "Launch week",
          heading: "Many people, one deadline, unreleased work",
          icon: "megaphone",
          body: [
            "In the days before a launch, the number of people touching the work jumps: designers produce extra sizes, regional teams localise assets, legal checks the claims and senior colleagues ask to see the final film. Speed matters most precisely when the material is most sensitive.",
            [
              "What helps is a library where the right people already have access and the state of each asset is plain. ",
              { text: "Review status", page: 76 },
              " gives a clear indication of whether an asset needs attention or has completed the approval process, which saves a round of messages at the worst possible moment.",
            ],
          ],
          points: ["More people at the most sensitive time", "Approval state clear without asking"],
        },
        {
          label: "New people",
          heading: "Newcomers who need the right access",
          icon: "user",
          body: [
            "A colleague from another team joins mid-campaign, or someone covers for a colleague on leave. The quick answer is to share a whole drive; the controlled answer is to work out exactly what they need, which takes time nobody has.",
            [
              "Access limited to a defined area avoids that choice. ",
              { text: "Individual permissions", page: 157 },
              " provide targeted access when organisational roles alone do not offer enough granularity, so a newcomer is not handed everything just to get started.",
            ],
          ],
          points: ["Precise access instead of a whole drive", "Access matched to the task"],
        },
        {
          label: "Reuse",
          heading: "Earlier work needed again",
          icon: "refresh",
          body: [
            "Reusing existing material is the fastest way to produce something new, and the riskiest if the asset’s licence has lapsed or a newer version exists. Teams that cannot check either tend to recreate the asset, which is slow, or reuse it blindly, which is uncontrolled.",
            [
              "Recorded context makes the safe choice the fast one. ",
              { text: "Expiring creative assets", page: 104 },
              " carry information that can help teams identify content that should no longer be used after a specified period, and revision tracking helps show which version is currently active.",
            ],
          ],
          points: ["Reuse checked before it happens", "The active version identifiable"],
        },
        {
          label: "Questions",
          heading: "Someone asks what happened to a file",
          icon: "audit",
          body: [
            "A manager or a legal colleague asks who changed an asset, or when a file was replaced. Without a record, the answer takes a round of messages and ends in a best guess; with one, it is a matter of looking.",
            [
              "The ",
              { text: "asset audit trail", page: 119 },
              " provides visibility into important actions performed on creative files, so the reply can rest on what was recorded.",
            ],
          ],
          points: ["Replies that rest on a record", "No round of messages first"],
        },
      ],
      sources: [{ kind: "pdf", page: 76 }, { kind: "pdf", page: 157 }, { kind: "pdf", page: 104 }, { kind: "pdf", page: 100 }, { kind: "pdf", page: 119 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about the future of creative asset management",
      items: [
        {
          question: "Does a team need every capability from the start to benefit from this approach to creative asset management?",
          answer: "No. A team can begin with the problem that costs it most, whether that is finding files, running reviews or controlling access, and bring in the other capabilities as the library settles and people trust it.",
        },
        {
          question: "How does collaboration change as creative asset management moves beyond storage?",
          answer: [
            "It moves closer to the work. ",
            { text: "Future of Creative Collaboration", page: 379 },
            " traces the shift towards platforms where feedback, approvals, versions and assets exist together, instead of feedback living in one tool and files in another.",
          ],
        },
        {
          question: "Do small creative teams need both speed and control, or is that an enterprise concern?",
          answer: "Small teams need both. They often feel the pressure on speed first, because each person covers several roles, and control becomes pressing as soon as client work or unreleased material arrives.",
        },
      ],
      sources: [{ kind: "pdf", page: 379 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on where creative libraries are going",
      variant: "compact",
      pages: [378, 379, 11, 151, 119, 321],
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
