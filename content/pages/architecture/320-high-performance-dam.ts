/**
 * 320 · High-Performance DAM — /architecture/high-performance-dam
 *
 * Angle (cluster: performance): the summary page — fast search, media previews, scalable storage and efficient uploads
 * combined, seen from the side of work: whole tasks, the moments that put each capability under pressure, and how to
 * judge responsiveness. GetSibu Architecture (301) owns the layers; each capability has its own page (307, 312, 313, 308).
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of responsiveness in creative libraries; states no GetSibu capability beyond the cited pages and no performance figures." } as const;

const page: PageContent = {
  page: 320,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Architecture & Performance",
      lede: "See how fast search, media previews, scalable storage and efficient uploads add up to a DAM that feels responsive, why the slowest of them sets the pace of real work, and how to judge responsiveness against your own team’s tasks.",
      visual: { diagram: "architecture-stack" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 320 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Responsiveness is a property of whole tasks",
      body: [
        "GetSibu combines fast search, media previews, scalable storage and efficient uploads to create a responsive DAM experience. Each capability serves a different moment of work, and the experience depends on all of them together.",
        "Nobody experiences a DAM one component at a time. People experience tasks: bring in a shoot, find last season’s hero image, check a cut before a meeting, hand approved files to the web team. A task moves only as quickly as its slowest step, so a library with excellent search still feels slow to the editor whose large upload keeps starting again.",
        [
          "How the platform is layered to support those capabilities is set out under ",
          { text: "GetSibu architecture", page: 301 },
          ". For a team, what counts is how those layers feel over the course of a working day, from the first upload to the last delivery.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Four capabilities, one experience", "Tasks rather than components", "The slowest step sets the pace", "Waiting that people can see", "Responsiveness as the library grows", "Judged against your own work"],
      },
      highlight: {
        heading: "In practice",
        body: "A designer finds the right product video, yet the approval meeting still starts late if nobody can watch it without downloading it first. The whole sequence decides whether the library feels quick.",
        tags: ["Designers", "Review", "Whole tasks"],
      },
      glance: {
        heading: "Responsiveness in brief",
        facts: [
          { label: "Area", value: "Architecture & Performance" },
          { label: "Combines", value: "Fast search, media previews, scalable storage, efficient uploads" },
          { label: "Aims for", value: "A responsive DAM experience" },
          { label: "Across regions", value: "Global Asset Access", page: 314 },
        ],
        actions: [{ kind: "route", path: "/architecture", label: "More in Architecture & Performance" }]
      },
      sources: [{ kind: "pdf", page: 320 }, { kind: "pdf", page: 301 }, { kind: "pdf", page: 314 }, EXPLAINS],
    },
    {
      kind: "workflow",
      id: "journey",
      eyebrow: "Across one asset’s life",
      heading: "Where each capability shows up as an asset is used",
      stages: [
        { label: "Arriving", body: "A large file travels into the library. Resumable and chunked uploads help keep that transfer reliable, so an interruption need not mean starting again from the beginning.", page: 312 },
        { label: "Getting ready", body: "Background processing indexes the asset without anyone carrying out metadata or AI work by hand, and processing status shows when it is fully searchable.", page: 311 },
        { label: "Being found", body: "Search designed around low latency is meant to let someone try several phrasings or filters in quick succession while looking for it.", page: 307 },
        { label: "Being inspected", body: "Preview generation and streaming let a reviewer look at heavy media without a full download before deciding whether it is the right asset.", page: 313 },
        { label: "Being opened elsewhere", body: "CDN delivery helps colleagues in other parts of the world reach the same previews and media quickly.", page: 304 },
        { label: "Staying part of a growing library", body: "An architecture that supports large amounts of content and storage growth keeps the asset within a collection that goes on expanding.", page: 308 },
      ],
      sources: [{ kind: "pdf", page: 312 }, { kind: "pdf", page: 137 }, { kind: "pdf", page: 311 }, { kind: "pdf", page: 145 }, { kind: "pdf", page: 307 }, { kind: "pdf", page: 313 }, { kind: "pdf", page: 306 }, { kind: "pdf", page: 304 }, { kind: "pdf", page: 308 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "pressure-moments",
      eyebrow: "When responsiveness is tested",
      heading: "Moments that put a different capability under pressure",
      tabs: [
        {
          label: "Delivery day",
          heading: "Many heavy files arriving together",
          icon: "upload",
          body: [
            ["When a shoot wraps or an agency delivers, the pressure falls on getting material in. ", { text: "Parallel uploads", page: 142 }, " can improve the efficiency of batch ingestion, and ", { text: "upload progress", page: 141 }, " indicators let people understand how many files are currently being processed."],
          ],
          points: ["Batches moving side by side", "Progress people can follow"],
        },
        {
          label: "Review round",
          heading: "Several people opening the same cuts",
          icon: "video",
          body: [
            "A review round concentrates attention on a handful of heavy assets, often opened by people in different offices within the same afternoon.",
            ["That repetition is what ", { text: "edge caching", page: 305 }, " is suited to, since it reduces the distance between users and frequently accessed content."],
          ],
          points: ["The same assets opened repeatedly", "Reviewers spread across locations"],
        },
        {
          label: "Deadline searching",
          heading: "Hunting for material against the clock",
          icon: "search",
          body: [
            ["Pitches and campaign deadlines produce bursts of exploratory searching. The ", { text: "asset discovery workflow", page: 30 }, " runs from a search through filtering and previewing to locating the correct asset."],
            "When every step in that loop answers promptly, people keep exploring instead of settling for the first acceptable result.",
          ],
          points: ["Search, filter, preview, repeat", "Better choices when looking is cheap"],
        },
        {
          label: "Years later",
          heading: "A library many times its original size",
          icon: "trend",
          body: [
            "The last test is time. A library that felt quick when it was small has to keep feeling that way after years of campaigns, archives and new teams.",
            [{ text: "Library growth reporting", page: 209 }, " helps organisations anticipate storage and operational requirements, so growth is planned for rather than discovered."],
          ],
          points: ["Responsiveness that lasts", "Growth anticipated, not discovered"],
        },
      ],
      sources: [{ kind: "pdf", page: 142 }, { kind: "pdf", page: 141 }, { kind: "pdf", page: 305 }, { kind: "pdf", page: 30 }, { kind: "pdf", page: 209 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "judging",
      eyebrow: "Judging performance",
      heading: "How to tell whether a DAM is genuinely responsive",
      items: [
        {
          heading: "Time complete tasks, not single features",
          summary: "The useful unit of performance is a finished piece of work.",
          icon: "clock",
          body: [
            "Measure the path from a request to a usable result: from “we need the approved product shot” to having it in hand, or from a delivery arriving to its assets being findable. Individual components can each look impressive while the task as a whole still drags.",
          ],
        },
        {
          heading: "Treat visible waiting differently",
          summary: "People tolerate a wait they can watch progressing.",
          icon: "eye",
          body: [
            "A transfer that shows its progress feels shorter than a silent one of the same length, and a clear status spares people from wondering whether something failed. Progress and status information therefore belong in any judgement of responsiveness, alongside speed itself.",
          ],
        },
        {
          heading: "Try it with material like yours",
          summary: "Performance depends on file types, sizes and habits that differ between teams.",
          icon: "film",
          body: [
            "A demonstration library of light images reveals little about a team that works in long footage or layered artwork. A fair trial uses a realistic sample of your own assets and the everyday requests your people make.",
          ],
        },
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about a high-performance DAM",
      items: [
        {
          question: "Does a small library need the same things from a high-performance DAM as a large one?",
          answer: "The capabilities are the same, but the pressure shifts. A small library is judged mostly on finding and checking material; as it grows, dependable uploads and room for storage growth matter just as much, because more arrives and more has to be kept.",
        },
        {
          question: "Is a high-performance DAM only a concern for video teams?",
          answer: "Video raises the stakes because files are heavy and time-based, but image and document libraries strain as they grow too. Any team whose work depends on finding and checking material quickly benefits when the whole library stays responsive.",
        },
        {
          question: "Can a team make its DAM feel faster without changing platforms?",
          answer: "Often in part. Keeping the library tidy, describing assets consistently and checking previews instead of downloading originals all reduce waiting. Limits that come from a platform’s design, though, can only be addressed by the platform.",
        },
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on each part of a responsive library",
      variant: "compact",
      pages: [301, 307, 313, 312, 308, 310],
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
