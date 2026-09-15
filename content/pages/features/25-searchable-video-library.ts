/**
 * 25 · Searchable Video Library — /features/searchable-video-library
 *
 * Angle (clusters: media-libraries, ai-discovery): video indexed and enriched with AI-generated information so
 * footage is found without reviewing every file — why footage resists searching, what people look for in each
 * kind of footage, and how candidates are checked. Video Version Management (97) owns cuts and revisions,
 * AI-Powered Video Discovery (51, framed) is not relied on; no claim about what the AI information contains.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how video teams keep and look for footage; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 25,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Search & Discovery",
      lede: "See how footage can be indexed and enriched with AI-generated information so relevant clips can be found without anyone playing through every file, and what a video library still needs from the people who shoot, cut and keep it.",
      visual: { diagram: "media-library", focus: "video" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 25 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Footage that can be found without watching it all",
      body: [
        "Videos in GetSibu can be indexed and enriched with AI-generated information, so users can discover relevant footage without manually reviewing each file.",
        "Video keeps its content locked in time. A folder of photographs can be skimmed at a glance; a folder of clips has to be played. One thumbnail stands in for minutes of material, takes from the same set-up look almost identical, and camera files arrive with names that record little beyond a card and a number. Without prepared information, the only dependable search tool is someone’s afternoon.",
        [
          "Footage is the raw material of everything else a video team does, so the way it enters the library matters. ",
          { text: "Creative asset indexing", page: 21 },
          " prepares assets for search and organisation as they arrive, and the wider idea of finding files by what they contain is developed under ",
          { text: "AI asset discovery", page: 12 },
          ".",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Video indexed as it enters", "Enriched with AI-generated information", "No need to play every clip", "Previews before downloads", "Rushes, B-roll, finished films, archive", "Describe footage, not filenames"],
      },
      highlight: {
        heading: "In practice",
        body: "An editor cutting a year-in-review film needs every clip from the spring product launch. Instead of reopening old project folders and scrubbing through each file, they search the library and preview only the likeliest candidates.",
        tags: ["Editors", "Producers", "Archive footage"],
      },
      glance: {
        heading: "Video library in brief",
        facts: [
          { label: "Area", value: "Search & Discovery" },
          { label: "Works on", value: "Footage, edits and finished films" },
          { label: "Enriched with", value: "AI-generated information" },
          { label: "Used by", value: "GetSibu for Production Studios", page: 211 },
        ],
        actions: [{ kind: "route", path: "/features/search-and-discovery", label: "More in Search & Discovery" }]
      },
      sources: [{ kind: "pdf", page: 25 }, { kind: "pdf", page: 21 }, { kind: "pdf", page: 12 }, { kind: "pdf", page: 211 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "finding-a-clip",
      eyebrow: "Finding a clip",
      heading: "Reviewing footage by hand compared with searching a video library",
      columns: ["Footage kept in project folders", "A searchable GetSibu video library"],
      emphasis: 1,
      rows: [
        ["Finding a usable clip", "Play files until one fits", "Search the information videos are enriched with"],
        ["Checking a candidate", "Download it, then watch", "Inspect it through a streaming preview"],
        ["Footage from different crews", "Separate drives and naming habits", "Searched together in one library"],
        ["Scanning a long result list", "Open each file to see what it holds", "Thumbnails as a first visual check"],
        ["Notes about footage", "Scattered across emails and shot lists", "Comments kept on the video itself"],
      ],
      sources: [{ kind: "pdf", page: 25 }, { kind: "pdf", page: 147 }, { kind: "pdf", page: 16 }, { kind: "pdf", page: 146 }, { kind: "pdf", page: 62 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "footage",
      eyebrow: "Kinds of footage",
      heading: "What people look for in each kind of footage",
      tabs: [
        {
          label: "Rushes",
          heading: "Everything the cameras recorded",
          icon: "camera",
          body: [
            "Rushes are the complete, unedited material from a shoot: every take, every false start, every stretch of waiting for the light. They make up the bulk of most video collections and are the least described, because nobody has time to log them while production is running.",
            "People go back to rushes for alternative takes, for moments an edit left out and for pickups that avoid another shoot. Indexing and enrichment can make the right files easier to reach, although choosing the take itself still means watching it.",
          ],
          points: ["The largest and least described material", "Alternative takes without another shoot"],
        },
        {
          label: "B-roll",
          heading: "Supporting footage that is reused the most",
          icon: "film",
          body: [
            "B-roll — exteriors, hands at work, a product on a table, traffic at dusk — is filmed for one piece and wanted by the next. Its value lies almost entirely in reuse, which makes being findable the whole reason for keeping it.",
            ["Describing it with tags drawn from the team’s ", { text: "taxonomy", page: 8 }, " means a request for warehouse exteriors can reach footage filmed for several unrelated projects, because tags are among the information search consults."],
          ],
          points: ["Filmed once, wanted many times", "Tags that follow the taxonomy"],
        },
        {
          label: "Finished films",
          heading: "Masters, cutdowns and review copies",
          icon: "video",
          body: [
            "Finished work multiplies into deliverables: a master, shorter edits for different channels, lighter copies for review. They share a subject and often most of a name, and the difference that matters is whether a file is the one to deliver.",
            ["Within a single edit, ", { text: "video version management", page: 97 }, " lets teams manage different cuts and revisions while keeping the version history with the asset, instead of scattering them as numbered exports."],
          ],
          points: ["Deliverables that share a subject", "Cuts kept with the asset they belong to"],
        },
        {
          label: "Archive",
          heading: "Footage from years of past work",
          icon: "archive",
          body: [
            "Archive footage is where much of a video library’s lasting value sits: a launch from a decade ago, the first factory, an event that will never be repeated. It is also where memory of what exists has faded furthest.",
            ["Much of it was filmed before anyone described footage consistently, which is why bringing it into an indexed library matters more than for recent work. Footage kept only for the record is a separate decision: ", { text: "asset archiving", page: 108 }, " retains historical content without letting old material interfere with everyday asset discovery."],
          ],
          points: ["Lasting value in old footage", "Often the least consistently described"],
        },
      ],
      sources: [{ kind: "pdf", page: 25 }, { kind: "pdf", page: 21 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 97 }, { kind: "pdf", page: 108 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A pitch reel built from past event footage",
      team: "An events company",
      situation: "An events company is pitching for the next edition of a client’s annual conference. The producer wants a short reel drawn from footage of earlier editions, filmed by different crews on different cameras.",
      steps: [
        { heading: "The footage is already in the library", body: ["Recordings and crew footage from earlier editions came in through ", { text: "bulk asset import", page: 130 }, " when the company moved them off its drives, and were indexed as they entered."] },
        { heading: "A search replaces a day of playback", body: "The producer searches for the conference and its venue, and the results draw on the information and tags attached to the videos rather than on the crews’ camera filenames." },
        { heading: "Candidates are checked by preview", body: "The likeliest clips are inspected through streaming previews, and only those that earn a place in the reel are downloaded for the edit." },
        { heading: "The draft is reviewed internally", body: "The account lead watches the draft reel and leaves notes at points on its timeline before anything is shown to the client." },
      ],
      outcome: "The reel is built from the client’s own past events, and the producer’s time goes on choosing the strongest moments rather than on hunting for footage at all.",
      link: { page: 236, label: "GetSibu for Event Companies" },
      sources: [{ kind: "pdf", page: 130 }, { kind: "pdf", page: 21 }, { kind: "pdf", page: 25 }, { kind: "pdf", page: 147 }, { kind: "pdf", page: 64 }, { kind: "pdf", page: 236 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about searchable video libraries",
      items: [
        {
          question: "Can notes left on a video help find it again later?",
          answer: [
            "They can. Comments are among the sources ",
            { text: "creative asset search", page: 11 },
            " draws on, alongside filenames, metadata and AI-generated tags, so a reviewer’s remark about a location or a preferred take becomes one more way back to the file.",
          ],
        },
        {
          question: "Can I describe the footage I need instead of naming a file?",
          answer: [
            "Yes. ",
            { text: "Natural language asset search", page: 18 },
            " lets users describe assets the way they remember them, without knowing the exact filename. For footage, the campaign it served and the terms the team tags it with are often the details most worth including.",
          ],
        },
        {
          question: "Is a searchable video library only for production teams?",
          answer: [
            "No. Marketing teams keep campaign videos in their central library, ",
            { text: "education organisations", page: 237 },
            " manage course media and recordings, and ",
            { text: "media companies", page: 232 },
            " manage large collections of video alongside image, audio and document assets.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 25 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 18 }, { kind: "pdf", page: 213 }, { kind: "pdf", page: 237 }, { kind: "pdf", page: 232 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on working with video in the library",
      variant: "compact",
      pages: [97, 147, 64, 12, 211, 24],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Stop Searching Through Folders",
      conversionPage: 393,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 393 }],
    },
  ],
};

export default page;
