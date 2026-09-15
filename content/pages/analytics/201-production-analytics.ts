/**
 * 201 · Production Analytics — /analytics/production-analytics
 *
 * Angle (cluster: team-analytics): media activity, uploads and video-related workflows read across the phases of a
 * production. Use-case pages (211, 218, 229) own the team's library; Upload Analytics (184) owns inflow in general;
 * Creative Team Analytics (199) owns groups. No durations or cycle times are claimed.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of film and video production practice; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 201,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Analytics",
      lede: "Read a production through its media: how footage arrives from the shoot, how cuts move through review in post-production, and where the work has gone quiet before delivery.",
      visual: { diagram: "library-activity", focus: "uploads" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 201 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A production’s rhythm, traced through its media",
      body: [
        "Production teams can use GetSibu to analyse media activity, uploads and video-related workflows. Taken together, they can help trace a project while it is under way: material arriving from shoots, footage being worked into cuts and those cuts moving towards sign-off.",
        "Productions are uneven by design. Preparation generates scripts and references, a shoot delivers a flood of heavy media in a short span, post-production multiplies that into edits and exports, and delivery narrows everything to a handful of finished files. Each phase leaves a distinct pattern in the library, so a production should be read against its own schedule rather than against the steadier rhythm of a brand or marketing library.",
        [
          { text: "Production collaboration", page: 81 },
          " relies on asset comments, versioning and timeline review to coordinate creative work. Analysing media activity can suggest how much of that coordination really happens in the library, while ",
          { text: "the use case for production studios", page: 211 },
          " describes the wider library such teams work from.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Media activity through a production", "Uploads from shoots and post", "Video review activity", "Cuts and revisions as versions", "Phases with their own patterns"],
      },
      highlight: {
        heading: "In practice",
        body: "Late in the edit, a post-production supervisor notices discussion on the newest cut has gone quiet and asks whether the director has watched it before delivery gets close.",
        tags: ["Post-production", "Review", "Delivery"],
      },
      glance: {
        heading: "Production analytics in brief",
        facts: [
          { label: "Area", value: "Analytics" },
          { label: "Covers", value: "Media activity, uploads and video-related workflows" },
          { label: "Coordination", value: "Production Collaboration", page: 81 },
          { label: "Use case", value: "GetSibu for Production Studios", page: 211 },
        ],
        actions: [{ kind: "page", page: 181, label: "Creative Asset Analytics" }]
      },
      sources: [{ kind: "pdf", page: 201 }, { kind: "pdf", page: 81 }, { kind: "pdf", page: 211 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "phases",
      eyebrow: "By phase",
      heading: "What media activity looks like in each phase of a production",
      tabs: [
        {
          label: "Preparation",
          heading: "Light files, early habits",
          icon: "document",
          body: [
            "Before cameras roll, the library holds scripts, treatments, location references and schedules. Uploads are light and discussion carries most of the activity.",
            "This phase is a good test of habit. A production whose preparation material never reaches the library may well keep its footage elsewhere too, so early activity is worth checking while habits are still forming.",
          ],
          points: ["Documents and references dominate", "Early activity predicts later habits"],
        },
        {
          label: "The shoot",
          heading: "A surge of heavy media",
          icon: "camera",
          body: [
            [
              "Shoot days deliver camera originals, stills and sound in concentrated bursts, and uploads spike accordingly. Creative teams working with large amounts of video and imagery can use ",
              { text: "ingestion workflows designed for high-volume environments", page: 139 },
              ".",
            ],
            "Read uploads against the call sheet. A shoot day with little arriving is a question for the data wrangler, not a sign the day was quiet.",
          ],
          points: ["Uploads follow the call sheet", "Gaps worth querying the same day"],
        },
        {
          label: "Post-production",
          heading: "Activity shifts from arrival to iteration",
          icon: "film",
          body: [
            [
              "Once the edit begins, new footage slows and media activity turns towards cuts, revisions and discussion. ",
              { text: "Video version management", page: 97 },
              " lets teams manage different cuts and revisions while keeping the version history associated with the asset.",
            ],
            "This is where review patterns matter most: steady discussion on each new cut suggests a healthy loop, while cuts that arrive without comment may be waiting on someone.",
          ],
          points: ["Revisions replace fresh footage", "Silence on a cut can mean waiting"],
        },
        {
          label: "Delivery",
          heading: "Everything narrows to finished files",
          icon: "archive",
          body: [
            [
              "Activity concentrates on the deliverables, then falls away as the project closes. The ",
              { text: "creative asset lifecycle", page: 107 },
              " can run from ingestion and metadata processing through review, approval and distribution to archival, and delivery is where a production reaches its final stages.",
            ],
            "After wrap, occasional activity on the production’s material can mean someone is reusing it, which is worth knowing when deciding what to keep close at hand.",
          ],
          points: ["Deliverables take the attention", "Later activity signals reuse"],
        },
      ],
      sources: [{ kind: "pdf", page: 139 }, { kind: "pdf", page: 97 }, { kind: "pdf", page: 107 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A film series whose later episodes stalled in review",
      team: "A video agency",
      situation: "A video agency is editing a series of short films in parallel, with several editors sharing one library. The producer suspects the later films are slipping but cannot say where.",
      steps: [
        { heading: "Activity is read by phase", body: "Production analytics show uploads from the shoots tailing off as the edit takes over the schedule." },
        { heading: "Review activity looks uneven", body: "Looking at the cuts themselves, the producer finds steady discussion on every cut of the first films, while the later ones have new cuts and almost no comments on them." },
        { heading: "The cause turns up", body: "The creative director had started reviewing the later films from exported files sent by email, so the notes never reached the editors’ working copies." },
        { heading: "Review returns to the library", body: ["The director watches the cuts through ", { text: "streaming previews", page: 147 }, " and leaves ", { text: "comments at points on the timeline", page: 64 }, ", where editors can act on them directly."] },
        { heading: "Sign-off is recorded", body: ["Each finished film goes through approval, and ", { text: "approval history", page: 77 }, " keeps a record of the review activity that led to the accepted cut."] },
      ],
      outcome: "The later films catch up because feedback is back where editors work, and the producer can see discussion resuming on each cut instead of discovering the delay at delivery.",
      link: { page: 229, label: "GetSibu for Video Agencies" },
      sources: [{ kind: "pdf", page: 201 }, { kind: "pdf", page: 147 }, { kind: "pdf", page: 64 }, { kind: "pdf", page: 77 }, { kind: "pdf", page: 229 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "before-after",
      id: "memory-or-activity",
      eyebrow: "What changes",
      heading: "A production run on recollection compared with one read from its media",
      beforeLabel: "Recollection and inboxes",
      afterLabel: "Media activity in the library",
      before: ["Delays noticed only as delivery approaches", "Shoot material assumed to have arrived", "Notes scattered across exported files", "Cuts told apart by filename", "Wrapped projects left in working folders"],
      after: ["Quiet review spotted while there is time to act", "Uploads showing how much reached the library", "Discussion kept on the timeline of each cut", "Revisions held in one asset’s history", "Finished work moved into the archive"],
      sources: [{ kind: "pdf", page: 201 }, { kind: "pdf", page: 184 }, { kind: "pdf", page: 64 }, { kind: "pdf", page: 97 }, { kind: "pdf", page: 108 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about production analytics",
      items: [
        {
          question: "How do production analytics differ from upload analytics?",
          answer: [
            { text: "Upload analytics", page: 184 },
            " show how much new content is entering the library over time. Production analytics set uploads beside media activity and video-related workflows, so inflow can be read against the phases of a shoot and edit.",
          ],
        },
        {
          question: "Why do production analytics look so different from marketing analytics?",
          answer: [
            "Because they follow different material. ",
            { text: "Marketing asset analytics", page: 200 },
            " centre on how campaign content is used, while production analytics follow media that is still being shaped, where heavy uploads and repeated cuts signal work in progress rather than demand.",
          ],
        },
        {
          question: "Who on a production gains most from production analytics?",
          answer: "Usually the people answerable for the schedule, such as producers and post-production supervisors, who need an early sign when a phase is slipping. Editors tend to see the same signals directly in the comments and versions they work with every day.",
        },
      ],
      sources: [{ kind: "pdf", page: 201 }, { kind: "pdf", page: 184 }, { kind: "pdf", page: 200 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on production media and video review",
      variant: "compact",
      pages: [81, 211, 97, 64, 229, 184],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Scale Your Creative Library",
      conversionPage: 397,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 397 }],
    },
  ],
};

export default page;
