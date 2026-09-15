/**
 * 76 · Review Status — /features/review-status
 *
 * Angle (cluster: approvals): the indicator itself — whether an asset needs attention or has already completed the
 * approval process — and how different readers act on it. Creative Approval Workflow (67) owns the loop, Asset
 * Approval (68) the states and their history, Approval History (77) accountability and the accepted version.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how teams read and act on a review indicator; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 76,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Collaboration",
      lede: "Find out what review status tells you about an asset, how reviewers, creators, producers and wider teams can each act on it, and how to keep it worth relying on.",
      visual: { diagram: "timeline-review", focus: "status" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 76 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A plain answer to whether an asset is still outstanding",
      body: [
        "Review status gives GetSibu users a clear indication of whether an asset needs attention or has already completed the approval process. It reduces the position of a piece of work to the question most people bring to it: is anything still outstanding?",
        "That short question is asked far more often than the detailed one. A reviewer looking over a batch of drafts wants to know which are waiting; a colleague about to reuse an illustration wants to know whether it is finished. Neither needs the full story of comments and revisions to decide what to do next, yet both are stuck when the only way to find out is to ask whoever made the file.",
        [
          "For the longer story, neighbouring records take over. The ",
          { text: "creative approval workflow", page: 67 },
          " is how work is put up for review, changed and approved, while ",
          { text: "asset approval", page: 68 },
          " keeps a history of the states each asset has passed through on its way to a decision.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Needs attention, or approval complete", "The next action made obvious", "Useful to makers and users alike", "Backed by the approval record", "Only as current as the workflow"],
      },
      highlight: {
        heading: "In practice",
        body: "Before a sales pack is handed over, a marketing coordinator checks the review status of every piece in it and chases only the two that still need attention.",
        tags: ["Reviewers", "Producers", "Wider teams"],
      },
      glance: {
        heading: "Review status in brief",
        facts: [
          { label: "Area", value: "Collaboration" },
          { label: "Indicates", value: "Needs attention, or approval process complete" },
          { label: "Tied to", value: "Creative Approval Workflow", page: 67 },
          { label: "Fuller record", value: "Approval History", page: 77 },
        ],
        actions: [{ kind: "route", path: "/features/collaboration", label: "More in Collaboration" }]
      },
      sources: [{ kind: "pdf", page: 76 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 68 }, { kind: "pdf", page: 77 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "readers",
      eyebrow: "Who reads it",
      heading: "What review status tells each person who checks it",
      tabs: [
        {
          label: "Reviewers",
          heading: "See which work is still outstanding",
          icon: "eye",
          body: [
            "For a reviewer, the useful half of the signal is “needs attention”. When several pieces are in progress at once, it separates the drafts that still want a response from those already dealt with, so limited reviewing time goes where it is needed.",
            "The status says that something is outstanding, not what. Once a reviewer knows which assets still need attention, the comments and threads on each one carry the substance of what is being asked.",
          ],
          points: ["Outstanding work told apart from finished work", "The detail left to the discussion"],
        },
        {
          label: "Creators",
          heading: "See which pieces have come back to you",
          icon: "palette",
          body: [
            "A designer or editor often has several assets moving through review in parallel. Knowing which have completed the approval process, and which still need attention, shows where to spend the next hour without messaging each reviewer for an update.",
            [
              "An asset that still needs attention after a round of feedback is the prompt to read the latest comments and revise. ",
              { text: "Replacing the asset in place", page: 91 },
              " keeps its earlier versions within the record while the work moves on.",
            ],
          ],
          points: ["Fewer requests for updates", "Revisions made on the same asset"],
        },
        {
          label: "Producers",
          heading: "Know what remains before a project can deliver",
          icon: "users",
          body: [
            "Producers and project leads read review status across many assets rather than one. A delivery is ready when every piece in it has completed approval; until then, the pieces still needing attention form the list of remaining work.",
            "That list is also the most honest progress report a producer can give. Saying which pieces still need attention is more useful to a client lead or a channel team than a general assurance that the work is nearly done.",
          ],
          points: ["Remaining work visible across a set", "Progress reported piece by piece"],
        },
        {
          label: "Wider teams",
          heading: "Check before taking work forward",
          icon: "briefcase",
          body: [
            "Sales, communications and regional colleagues rarely follow a review while it runs, so for them the indicator is a quick check before reuse. Work that has completed the approval process is ready to take forward; work that still needs attention is a reason to wait or to ask.",
            "A quick look before reuse matters most for material that changes often, such as price-led promotions or product imagery for a range that is still being finalised.",
          ],
          points: ["Finished work taken forward with confidence", "Unfinished work recognised before use"],
        },
      ],
      sources: [{ kind: "pdf", page: 76 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 91 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "next-step",
      eyebrow: "Step by step",
      heading: "Turning a review status into the next step",
      intro: "The status is most useful as the start of a short routine rather than the end of one.",
      steps: [
        { heading: "Start from the set", body: "Bring together the assets that matter today, such as a campaign’s pieces or one production’s cuts, instead of opening files one by one.", icon: "collection" },
        { heading: "Separate outstanding from complete", body: "Use each asset’s review status to tell pieces with something still outstanding from pieces that are finished, so effort goes only where work remains.", icon: "flag" },
        { heading: "Find out why it is waiting", body: "For each outstanding asset, the approval record shows whether it is awaiting review or requires changes, and the comments explain what was asked.", icon: "history", page: 68 },
        { heading: "Bring in whoever can move it", body: "When a piece is waiting on one particular colleague, a mention makes it easier to bring that person into the discussion on the asset.", icon: "mention", page: 86 },
        { heading: "Revise, or approve", body: "The creator works through the requested changes, or a reviewer marks the asset as approved once it is ready.", icon: "approval" },
        { heading: "Rely on what is complete", body: "Assets that have completed approval can be passed on and reused without another round of questions about whether they are final.", icon: "check" },
      ],
      sources: [{ kind: "pdf", page: 76 }, { kind: "pdf", page: 68 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 86 }, { kind: "pdf", page: 66 }, { kind: "pdf", page: 67 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "reading-it",
      eyebrow: "What to keep in mind",
      heading: "Reading review status without being misled",
      items: [
        {
          heading: "An indicator is only as current as its record",
          summary: "Review status can reflect only the decisions that reach the asset.",
          icon: "refresh",
          body: [
            "The indicator and the team’s understanding part company whenever decisions are taken somewhere else. An asset can read as needing attention while everyone treats it as finished, or read as complete while a late request for changes sits in someone’s inbox.",
            "Before relying on review status for a delivery, confirm that recent decisions made outside the library have been recorded through the approval workflow. A few minutes of checking is cheaper than a delivery built on a stale signal.",
          ],
        },
        {
          heading: "Check close to the moment of use",
          summary: "A status read last week describes last week.",
          icon: "clock",
          body: [
            "Plans are often made from an earlier look at a set of assets: these five are done, those two are waiting. By the time the work is used, some of the waiting pieces may have completed approval while others are still outstanding.",
            "Reading review status again just before material is published, printed or handed over means the plan rests on the latest recorded decisions rather than on last week’s picture.",
          ],
        },
        {
          heading: "Use the status to shorten review meetings",
          summary: "A meeting that starts from what still needs attention spends its time on open work.",
          icon: "calendar",
          body: [
            "Review meetings often begin by walking through everything in a project, including pieces already approved. Checking review status beforehand lets the agenda cover only the assets still outstanding.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 76 }, { kind: "pdf", page: 67 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about review status",
      items: [
        {
          question: "How does review status differ from expiry information?",
          answer: [
            "They answer different questions. Review status concerns whether the approval process is complete, while ",
            { text: "expiry information", page: 104 },
            " can help teams identify content that should no longer be used after a specified period. Work that completed approval long ago can still be past its time.",
          ],
        },
        {
          question: "How does review status relate to approved-only views?",
          answer: [
            "They suit different moments. ",
            { text: "Approved-only views", page: 103 },
            " let users access content that has completed the required review process, so a colleague who wants only finished material does not have to check pieces one at a time.",
          ],
        },
        {
          question: "Which kinds of asset is review status most useful for?",
          answer: "Work that goes through approval and is then taken up by other people, such as campaign pieces, brand material and finished edits. Reference images and raw footage that nobody puts forward for review are better judged by their metadata and the discussion on them.",
        },
      ],
      sources: [{ kind: "pdf", page: 76 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 104 }, { kind: "pdf", page: 67 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on tracking where work stands",
      variant: "compact",
      pages: [67, 68, 77, 102, 103, 89],
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
