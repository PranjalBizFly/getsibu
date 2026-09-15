/**
 * 229 · GetSibu for Video Agencies — /use-cases/video-agencies
 *
 * Angle (clusters: uc-video-production, uc-agencies): an agency caught between what clients hand over (footage, archive,
 * brand material) and what it hands back (approved masters and cutdowns), with cuts and review rounds in between.
 * Production Studios (211) owns running productions; Creative Agencies (215) owns tenant configuration; Advertising
 * Agencies (219) owns campaign revision rounds on key visuals. Never implies client or guest reviewer access.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how video agencies typically run client jobs; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 229,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Use Cases",
      lede: "How a video agency can take a client job from supplied footage to approved deliverables in one platform, with every cut, note and sign-off kept where the next round can find it.",
      visual: { diagram: "media-library", focus: "video" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 229 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Client footage in, approved deliverables out",
      body: [
        "For a video agency, GetSibu brings client footage, versions of each cut, reviews and approved deliverables into one platform instead of spreading them across drives, transfer links and inboxes.",
        "A video agency works between two kinds of material that must never be confused. On one side is what clients hand over: brand footage, archive clips, logos and music they have licensed. On the other is what the agency hands back: masters, cutdowns and versions for different channels. In between sit rushes, assemblies and round after round of changes, and every client expects its footage to remain its own.",
        [
          { text: "Agency multi-tenancy", page: 162 },
          " lets an agency run several client libraries from one platform while keeping the tenants separate, and ",
          { text: "video version management", page: 97 },
          " keeps each deliverable’s cuts and revisions in the version history of a single asset.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Each client’s footage kept apart", "Cuts held as versions of one asset", "Notes tied to moments in a cut", "The accepted version on record", "Deliverables distinct from drafts"],
      },
      highlight: {
        heading: "In practice",
        body: "When a client asks for the master that went out last spring, the producer checks the asset’s approval record instead of comparing export dates in a folder.",
        tags: ["Producers", "Editors", "Account leads"],
      },
      glance: {
        heading: "Video agencies in brief",
        facts: [
          { label: "Team", value: "Video and production agencies" },
          { label: "Typical material", value: "Client footage, rushes, cuts, masters and cutdowns" },
          { label: "Builds on", value: "Production Collaboration", page: 81 },
          { label: "Supports", value: "Approval History", page: 77 },
        ],
        actions: [{ kind: "route", path: "/use-cases", label: "More in Use Cases" }]
      },
      sources: [{ kind: "pdf", page: 229 }, { kind: "pdf", page: 162 }, { kind: "pdf", page: 97 }, { kind: "pdf", page: 81 }, { kind: "pdf", page: 77 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "capabilities",
      eyebrow: "What the agency uses",
      heading: "What a video agency relies on between brief and delivery",
      items: [
        {
          heading: "Chunked uploads",
          body: "Large files travel through chunked upload workflows designed for reliability, which matters when a client’s archive footage has to be brought in.",
          icon: "upload",
          points: ["Designed for heavy footage", "Reliability over long transfers"],
          page: 138,
        },
        {
          heading: "Streaming previews",
          body: "Producers and account leads can inspect client footage or a fresh cut through streaming previews, without waiting for the whole file to download.",
          icon: "eye",
          points: ["Quick checks on heavy files", "No full download first"],
          page: 147,
        },
        {
          heading: "Frame-accurate review",
          body: "Creative directors can discuss specific moments in a cut rather than describing approximate positions in a message.",
          icon: "film",
          points: ["Notes at the moment concerned", "No misread timecodes"],
          page: 65,
        },
        {
          heading: "Revision tracking",
          body: "With several cuts in circulation, revision tracking helps the team understand what changed between versions and which one is currently active.",
          icon: "refresh",
          points: ["The active cut identified", "Context on what changed"],
          page: 100,
        },
        {
          heading: "Approval management",
          body: "Each master and cutdown can follow a structured process from draft to approved status.",
          icon: "approval",
          points: ["A defined route to sign-off", "Drafts plainly not final"],
          page: 89,
        },
        {
          heading: "Approval history",
          body: "A record of review activity supports accountability and reduces confusion about which version was accepted, long after the job has closed.",
          icon: "history",
          points: ["The accepted cut on record", "Answers for later questions"],
          page: 77,
        },
      ],
      sources: [{ kind: "pdf", page: 138 }, { kind: "pdf", page: 147 }, { kind: "pdf", page: 65 }, { kind: "pdf", page: 100 }, { kind: "pdf", page: 89 }, { kind: "pdf", page: 77 }],
    },
    {
      kind: "workflow",
      id: "job-stages",
      eyebrow: "Stage by stage",
      heading: "The life of a client video job",
      stages: [
        { label: "Brief and footage", body: "The client supplies brand footage, logos and music with the brief. Client environments can have their own storage allocation and asset boundaries, so that material starts inside the client’s own space.", page: 163 },
        { label: "Assembly", body: "Editors work through the client’s footage and the new rushes together. Indexing that enriches videos with AI-generated information helps them discover usable material without watching every clip.", page: 25 },
        { label: "Internal review", body: "Before anything reaches the client, the creative director and producer review the cut, and a mention brings in the colourist or motion designer who owns a particular fix.", page: 86 },
        { label: "Client rounds", body: "Client feedback arrives in rounds and sometimes contradicts an earlier note. Asset discussion history helps the team understand how that feedback evolved over time.", page: 75 },
        { label: "Delivery", body: "Masters and cutdowns go out once approved, and asset statuses help distinguish approved content from drafts and other workflow states.", page: 102 },
        { label: "Wrap", body: "Finished jobs are archived, so their footage and cuts are retained without cluttering the searches editors run for current clients.", page: 108 },
      ],
      sources: [{ kind: "pdf", page: 163 }, { kind: "pdf", page: 25 }, { kind: "pdf", page: 86 }, { kind: "pdf", page: 75 }, { kind: "pdf", page: 102 }, { kind: "pdf", page: 108 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A brand film and its cutdowns delivered from one record",
      team: "A video agency",
      situation: "A video agency is making a brand film for a long-standing client, plus shorter cutdowns for several channels. The client has supplied archive footage from earlier campaigns, and the agency is shooting new material.",
      steps: [
        {
          heading: "Archive footage lands in the client’s space",
          body: ["The archive clips are uploaded into the client’s own environment, which ", { text: "can remain logically isolated", page: 161 }, " from the libraries of the agency’s other clients."],
        },
        {
          heading: "Old and new footage told apart",
          body: ["While building the assembly, the editor ", { text: "filters by date", page: 19 }, " to separate the client’s archive clips from the new shoot."],
        },
        {
          heading: "Notes land on the master",
          body: "The creative director watches the master cut and attaches comments at the points on the timeline that need work.",
        },
        {
          heading: "Client changes are logged on the cut",
          body: ["After each client call, the producer records the requested changes as ", { text: "comments on the asset", page: 62 }, ", and the revised edit replaces the previous file in the same asset."],
        },
        {
          heading: "Master and cutdowns are approved",
          body: ["Every deliverable goes through ", { text: "asset approval", page: 68 }, ", with status history showing whether it is approved or still requires changes."],
        },
        {
          heading: "The handover comes from approved content",
          body: ["The producer assembles the delivery from an ", { text: "approved-only view", page: 103 }, " rather than a folder of exports where drafts sit beside finals."],
        },
      ],
      outcome: "The client receives the deliverables that were approved, and the agency keeps the job’s footage, cuts, notes and sign-off together for the day the client asks for a new version.",
      link: { page: 97, label: "Video Version Management" },
      sources: [{ kind: "pdf", page: 161 }, { kind: "pdf", page: 19 }, { kind: "pdf", page: 64 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 93 }, { kind: "pdf", page: 68 }, { kind: "pdf", page: 103 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "accordion",
      id: "decisions",
      eyebrow: "Worth settling early",
      heading: "Decisions a video agency makes about client material",
      items: [
        {
          heading: "Material the client licensed",
          summary: "Music, archive clips and stock footage supplied by a client often come with limits on use.",
          icon: "clock",
          body: [
            "A track cleared for one campaign can easily find its way into a later cutdown made for another. Recording such limits when the material arrives is far easier than tracing them once a new edit is under way.",
            [{ text: "Expiry information", page: 104 }, " can help identify content that should no longer be used after a specified period, which suits licences that end on a known date."],
          ],
        },
        {
          heading: "Cutdowns as assets of their own",
          summary: "Versions suit successive revisions of one deliverable; channel edits often deserve separate assets.",
          icon: "layers",
          body: [
            "A shorter edit made for a particular channel has its own review and approval, so it is a deliverable in its own right rather than a later state of the master. Keeping it separate leaves the master’s version history about the master alone.",
            ["Tags naming the parent film keep the family findable together, and ", { text: "hierarchical tags", page: 8 }, " can carry the relationship from campaign to film to cutdown."],
          ],
        },
        {
          heading: "Requests after the job has closed",
          summary: "Clients often come back for another version long after delivery.",
          icon: "history",
          body: [
            "Months later, a client may want a new end card or the film in another length, and the producer who ran the job may have moved on.",
            [{ text: "Creative file history", page: 95 }, " provides context around how an asset has changed over time, which helps whoever picks up the request understand how the master reached its final form."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 104 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 95 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about GetSibu for video agencies",
      items: [
        {
          question: "Can a video agency meet a client’s requirement for separate access controls?",
          answer: ["Where a client insists on access controls of its own, ", { text: "client-specific authentication options", page: 165 }, " can support that separation. The details a particular client requires are worth confirming during an evaluation."],
        },
        {
          question: "Can a video agency go back to a cut the client preferred earlier?",
          answer: ["Yes. Earlier cuts stay in the asset’s history, and ", { text: "version restore", page: 94 }, " brings one back if the client decides the earlier pacing worked better."],
        },
        {
          question: "Can a video agency see asset activity across its client environments?",
          answer: [{ text: "Agency analytics", page: 202 }, " help an agency understand asset activity across its client environments, a useful input when looking at the workload of the agency as a whole."],
        },
        {
          question: "Can a video agency’s freelance editors work without administrative access?",
          answer: ["Freelancers brought in for a job can be given ", { text: "editor permissions", page: 156 }, ": enough access to work with the footage, without administrative privileges over the rest of the agency’s set-up."],
        },
      ],
      sources: [{ kind: "pdf", page: 165 }, { kind: "pdf", page: 94 }, { kind: "pdf", page: 202 }, { kind: "pdf", page: 156 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More for agencies delivering video",
      variant: "compact",
      pages: [97, 65, 77, 162, 211, 215],
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
