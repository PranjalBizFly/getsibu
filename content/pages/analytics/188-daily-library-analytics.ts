/**
 * 188 · Daily Library Analytics — /analytics/daily-library-analytics
 *
 * Angle (cluster: analytics-cadence): the short-term view of uploads, comments and storage activity — what it is
 * good for (operational checks on recent activity) and how to read a single day without over-reading it.
 * Weekly (189) owns the broader perspective on growth and usage, Monthly (190) longer-term trends, and
 * Creative Library Trends (187) change over time. Claims nothing beyond the three signals PDF 188 names.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of reading short-term library activity; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 188,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Analytics",
      lede: "What a short-term view of uploads, comments and storage activity tells you about your library, and how to read a single day of activity without drawing long-term conclusions from it.",
      visual: { diagram: "library-activity", focus: "cadence" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 188 }, { kind: "pdf", page: 181 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A short-term read on what the library is doing",
      body: [
        "Daily analytics in GetSibu provide a short-term view of three kinds of library activity: uploads, comments and storage. They answer a narrow, practical question about what has been happening recently, rather than where the library is heading.",
        "Activity in a creative library is uneven. A shoot wraps and a large batch of footage arrives; a campaign goes into review and discussion picks up; an import finishes and storage jumps. Seen day by day, each of those events stands out on its own, which makes the view useful for operational checks and much less useful for judging long-term direction.",
        [
          "The daily view is one slice of ",
          { text: "creative asset analytics", page: 181 },
          ", which also covers contributors, tags and other activity. When a question needs more distance, ",
          { text: "weekly library analytics", page: 189 },
          " offer a broader perspective on growth and usage, and ",
          { text: "creative library trends", page: 187 },
          " show how the library changes over time.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["A short-term view of activity", "New content entering the library", "Discussion on assets", "Storage activity", "Longer views for context"],
      },
      highlight: {
        heading: "In practice",
        body: "After a shoot is delivered, the daily view is a quick way for a library manager to confirm the arrival shows up in uploads and storage activity.",
        tags: ["Uploads", "Comments", "Storage"],
      },
      glance: {
        heading: "Where the daily view fits",
        facts: [
          { label: "Area", value: "Analytics" },
          { label: "Shows", value: "Uploads, comments and storage activity" },
          { label: "Part of", value: "Creative Asset Analytics", page: 181 },
          { label: "Broader view", value: "Weekly Library Analytics", page: 189 },
        ],
      },
      sources: [{ kind: "pdf", page: 188 }, { kind: "pdf", page: 181 }, { kind: "pdf", page: 189 }, { kind: "pdf", page: 187 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "signals",
      eyebrow: "What it shows",
      heading: "Three signals in the daily view",
      items: [
        {
          heading: "Uploads",
          body: "Upload activity shows new content entering the library, which is where shoots, imports and handovers show up.",
          icon: "upload",
          points: ["Confirms a delivery has started to arrive", "Makes quiet days as visible as busy ones"],
          page: 184,
        },
        {
          heading: "Comments",
          body: "Comment activity reflects discussion on assets, because feedback is left directly on the creative work it concerns rather than in separate tools.",
          icon: "message",
          points: ["A sign that review is under way", "Tied to assets, not to inboxes"],
          page: 62,
        },
        {
          heading: "Storage activity",
          body: "Storage activity shows short-term movement in the space the library uses, so a large import or a burst of video is easy to spot.",
          icon: "database",
          points: ["A few large files can outweigh many small ones", "Storage by category gives the breakdown"],
          page: 183,
        },
      ],
      sources: [{ kind: "pdf", page: 188 }, { kind: "pdf", page: 184 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 73 }, { kind: "pdf", page: 183 }, { kind: "pdf", page: 192 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "The day a production’s footage lands",
      team: "A production team",
      situation: "A production team has just wrapped a location shoot. The crew is sending footage and stills into the library while the edit team waits to start.",
      steps: [
        {
          heading: "Footage starts arriving",
          body: ["The day’s uploads reflect the delivery, and ", { text: "upload progress", page: 141 }, " shows how many files are still being processed."],
        },
        {
          heading: "Storage moves with it",
          body: "Storage activity rises as the large video files land, which matches what the team expects from a day of camera originals.",
        },
        {
          heading: "The editors begin",
          body: ["As assets are ", { text: "indexed and prepared for search", page: 21 }, ", the editors start pulling selects from the new material."],
        },
        {
          heading: "Feedback picks up",
          body: "Comment activity for the day reflects the notes the director and producer leave on the first selects.",
        },
        {
          heading: "The busy day is put in context",
          body: "Later, the weekly view sets that single busy day against the library’s broader growth and usage, so nobody mistakes one delivery for a trend.",
        },
      ],
      outcome: "The team uses the daily view for what it does well, confirming that a burst of activity happened as planned, and leaves questions about growth to the longer views.",
      link: { page: 201, label: "Production Analytics" },
      sources: [{ kind: "pdf", page: 188 }, { kind: "pdf", page: 141 }, { kind: "pdf", page: 21 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 189 }, { kind: "pdf", page: 201 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "accordion",
      id: "reading",
      eyebrow: "Considerations",
      heading: "Reading a single day without over-reading it",
      items: [
        {
          heading: "Expect uneven days",
          summary: "Creative work arrives in bursts, so daily figures swing.",
          icon: "calendar",
          body: [
            "A day with no uploads is not a problem if the team was editing, and a day with a spike is not growth if it was one delivery. Production schedules, campaign deadlines and holidays all shape what a single day looks like.",
            "Read the daily view against what you know happened, and treat a surprise as a prompt to look closer rather than as a conclusion.",
          ],
        },
        {
          heading: "Read the three signals together",
          summary: "Uploads, comments and storage tell a fuller story side by side than one at a time.",
          icon: "layers",
          body: [
            "Many uploads with little storage movement often point to small files such as images or documents. A sharp storage rise from only a few uploads usually means large files such as video.",
            "Comments rising while uploads stay flat often means a team is reviewing material that is already in the library.",
          ],
        },
        {
          heading: "An upload is not yet a searchable asset",
          summary: "Content that has arrived may still be processing.",
          icon: "clock",
          body: [
            ["An asset can upload successfully and still be working through processing. ", { text: "Media processing status", page: 145 }, " distinguishes a file that has arrived from one that is fully indexed and searchable, which matters when a team is waiting for new material."],
          ],
        },
        {
          heading: "Comments are a signal, not a score",
          summary: "More discussion is not automatically better or worse.",
          icon: "thread",
          body: [
            "A burst of comments can mean a review is moving well or that a piece of work needs many changes. The level of activity alone cannot say which.",
            ["Pair it with ", { text: "review status", page: 76 }, ", which indicates whether an asset needs attention or has already completed the approval process."],
          ],
        },
        {
          heading: "Step out before deciding",
          summary: "Short-term data suits checks; decisions about capacity need a longer horizon.",
          icon: "trend",
          body: [
            ["Questions such as whether more storage will be needed belong to ", { text: "library growth reporting", page: 209 }, ", which helps organisations anticipate storage and operational requirements. ", { text: "Monthly library analytics", page: 190 }, " help identify longer-term trends in asset management."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 188 }, { kind: "pdf", page: 207 }, { kind: "pdf", page: 145 }, { kind: "pdf", page: 76 }, { kind: "pdf", page: 209 }, { kind: "pdf", page: 190 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about daily library analytics",
      items: [
        {
          question: "What activity does the daily library analytics view cover?",
          answer: ["It gives a short-term view of uploads, comments and storage activity. Other measures, such as ", { text: "contributor analytics", page: 185 }, " and ", { text: "tag analytics", page: 186 }, ", sit elsewhere in library analytics."],
        },
        {
          question: "When is daily analytics more useful than weekly analytics?",
          answer: "Daily figures suit recent, operational questions, such as whether a delivery has arrived or a review has started. Weekly analytics give a broader perspective on growth and usage, which is better for spotting a pattern.",
        },
        {
          question: "Why are comments included in daily library analytics?",
          answer: ["Comments are left directly on assets, so their activity is a short-term indication of review and discussion in the library. ", { text: "Feedback stays connected to the asset", page: 73 }, " rather than scattering across email and chat."],
        },
        {
          question: "Can daily analytics show which asset types are using storage?",
          answer: ["The daily view shows storage activity over the short term. For a breakdown across video, image, document and audio, use ", { text: "storage by category", page: 192 }, "."],
        },
        {
          question: "Is a day with no uploads in the library a problem?",
          answer: "Usually not. Libraries grow in bursts around shoots, campaigns and imports, so a quiet day is only worth investigating if the team expected material to arrive.",
        },
      ],
      sources: [{ kind: "pdf", page: 188 }, { kind: "pdf", page: 185 }, { kind: "pdf", page: 186 }, { kind: "pdf", page: 189 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 73 }, { kind: "pdf", page: 192 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on reading library activity",
      variant: "compact",
      pages: [181, 189, 190, 187, 184, 192],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the other analytics cadences." }],
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
