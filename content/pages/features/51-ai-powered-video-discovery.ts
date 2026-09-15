/**
 * 51 · AI-Powered Video Discovery — /features/ai-powered-video-discovery
 *
 * FRAMED (scene-detection unconfirmed). Built on publishable facts only: indexed video enriched with
 * AI-generated information (25), discovery by what appears inside assets (12), previews (146, 147, 313),
 * versions (97), timeline comments (64) and search tools. Its own paragraph is not used or paraphrased.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how video libraries are searched and reviewed in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 51,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "AI",
      lede: "Why footage has so often waited for someone to log it before anyone could find it, what indexed video enriched with AI-generated information changes about that, and how a team confirms what a search turns up.",
      visual: { diagram: "media-library", focus: "video" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 25 }, { kind: "pdf", page: 12 }, { kind: "pdf", page: 147 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Footage that does not wait for someone to log it",
      body: [
        [
          "Finding video has long depended on what somebody wrote down about it. ",
          { text: "AI asset discovery", page: 12 },
          " sets out a different aim: helping people find files based on what appears inside them rather than depending entirely on manually entered metadata.",
        ],
        "Traditionally, footage became findable through logging: someone watched the material and noted what each clip contained. Logging is thorough but slow, it competes with the edit for the same people and the same hours, and on a busy production it is the first job to be dropped. Archives built without it can be searched only by project name, date and the memory of whoever was there.",
        [
          "In GetSibu, ",
          { text: "videos can be indexed and enriched with AI-generated information", page: 25 },
          ", which gives footage nobody logged more for a search to work with than a camera filename. That information is there to narrow a search; whether a clip is right is still decided by watching it.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Discovery that does not wait for logs", "AI-generated information on footage", "Viewing kept for likely candidates", "Previews before downloads", "Production knowledge still recorded"],
      },
      highlight: {
        heading: "In practice",
        body: "A new producer inherits several years of shoots that were never logged. Rather than scheduling days of viewing before anyone can use them, the team starts from a library search and watches only the files that look likely.",
        tags: ["Producers", "Archives", "Unlogged footage"],
      },
      glance: {
        heading: "Video discovery in brief",
        facts: [
          { label: "Area", value: "AI" },
          { label: "Works on", value: "Video in the creative library" },
          { label: "Builds on", value: "Searchable Video Library", page: 25 },
          { label: "Confirmed with", value: "Streaming Media Preview", page: 147 },
        ],
        actions: [{ kind: "route", path: "/features/ai", label: "More in AI" }]
      },
      sources: [{ kind: "pdf", page: 12 }, { kind: "pdf", page: 25 }, { kind: "pdf", page: 147 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "comparison",
      eyebrow: "Side by side",
      heading: "Footage that waits for logging compared with indexed video",
      columns: ["Footage that waits to be logged", "Indexed video in GetSibu"],
      emphasis: 1,
      rows: [
        ["When footage becomes findable", "Once someone has watched and logged it", "Once it is indexed and enriched with AI-generated information"],
        ["What a search can use", "The project name and whatever was logged", "AI-generated information alongside recorded metadata"],
        ["Shot lists and production notes", "Kept in documents somewhere else", "Documents found through the same search as the footage"],
        ["Pointing a colleague to a moment", "A timecode typed into an email", "A comment attached to a point on the timeline"],
      ],
      sources: [{ kind: "pdf", page: 25 }, { kind: "pdf", page: 23 }, { kind: "pdf", page: 24 }, { kind: "pdf", page: 64 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "request-to-footage",
      eyebrow: "Step by step",
      heading: "From a request for footage to a usable file",
      intro: "Each step removes files from consideration before anyone has to sit through them.",
      steps: [
        { heading: "Check the footage is ready", body: "Newly delivered material is worth searching only once processing has finished, and processing status tells an upload that succeeded from an asset that is fully indexed and searchable.", icon: "clock", page: 145 },
        { heading: "Search the whole library", body: "One search across the creative library reaches material from every shoot at once, instead of starting from a guess about which folder a crew used.", icon: "search", page: 16 },
        { heading: "Trim the result set", body: "Filters for format, resolution and date remove files that could never be used in this edit, whatever they show.", icon: "filter" },
        { heading: "Preview before downloading", body: "Streaming previews let the editor inspect large media files quickly, without waiting for a complete download.", icon: "video" },
        { heading: "Choose the right cut", body: "Where a video has several cuts or revisions, its version history shows them together as one asset rather than as scattered copies.", icon: "history", page: 97 },
      ],
      sources: [{ kind: "pdf", page: 145 }, { kind: "pdf", page: 16 }, { kind: "pdf", page: 19 }, { kind: "pdf", page: 147 }, { kind: "pdf", page: 97 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "video-library",
      eyebrow: "Considerations",
      heading: "Keeping a video library easy to search as it grows",
      items: [
        {
          heading: "Record production context",
          summary: "Footage content says little about the job it was shot for.",
          icon: "document",
          body: [
            ["Two interviews filmed against similar backdrops can belong to different clients and carry different usage terms. Details like these reach search when they are recorded, and ", { text: "file paths, creators and custom keywords", page: 22 }, " can become part of the asset record."],
            "Agreeing how production name, client and shoot date are recorded before footage leaves the edit pays off every time someone searches the archive later.",
          ],
        },
        {
          heading: "Separate rushes from deliverables",
          summary: "A search for finished films should not have to wade through raw takes.",
          icon: "flag",
          body: [
            ["Productions generate far more raw material than finished work, and both can match the same search. ", { text: "Asset statuses", page: 102 }, " help teams distinguish drafts, approved content and other workflow states, which makes it easier to tell a delivered film from the takes it was cut from."],
          ],
        },
        {
          heading: "Stills and sound belong nearby",
          summary: "Footage is rarely the only material a project needs.",
          icon: "audio",
          body: [
            ["Edits draw on production stills, music, voice-overs and graphics. ", { text: "Audio assets can be managed alongside other creative formats", page: 28 }, ", which keeps the supporting material for a film in the same environment as the footage."],
          ],
        },
        {
          heading: "Unreleased footage needs boundaries",
          summary: "Easier discovery raises the stakes of who can see what.",
          icon: "lock",
          body: [
            ["Material for an unannounced product or an embargoed campaign should not surface for everyone. ", { text: "Folder-level permissions", page: 152 }, " allow access to be controlled more precisely than organisation-wide access, so sensitive footage can sit in areas only the right people can open."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 22 }, { kind: "pdf", page: 102 }, { kind: "pdf", page: 28 }, { kind: "pdf", page: 152 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about AI-powered video discovery",
      items: [
        {
          question: "Can footage from projects finished years ago benefit from AI-powered video discovery?",
          answer: ["Archive footage is often where discovery helps most, because nobody remembers what those drives hold. ", { text: "Bulk import", page: 130 }, " moves large existing libraries in without uploading each file by hand, and the footage can then be searched with the rest of the library."],
        },
        {
          question: "Which teams gain most from AI-powered video discovery?",
          answer: ["Teams whose libraries are dominated by footage. ", { text: "Production teams", page: 353 }, " can reduce the time spent reviewing large amounts of footage and searching through disconnected storage."],
        },
        {
          question: "What should a team do with shot logs it already has?",
          answer: ["Keep them. Existing logs and notes hold production knowledge that no analysis of the footage can recreate, and where their details come across as metadata, such as custom keywords carried over from an earlier system, ", { text: "metadata can be searched alongside tags and extracted content", page: 23 }, "."],
        },
      ],
      sources: [{ kind: "pdf", page: 130 }, { kind: "pdf", page: 353 }, { kind: "pdf", page: 23 }, { kind: "pdf", page: 22 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on finding and working with footage",
      variant: "compact",
      pages: [25, 12, 147, 97, 64, 211],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
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
