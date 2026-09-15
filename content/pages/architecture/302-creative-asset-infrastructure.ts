/**
 * 302 · Creative Asset Infrastructure — /architecture/creative-asset-infrastructure
 *
 * Angle (cluster: architecture-infrastructure): infrastructure sized for large collections while keeping search
 * and previews performing — creative content as an unusual workload (heavy originals, companion files, look-alike
 * material, arrivals in waves) and search and previewing as two different kinds of work. GetSibu Architecture (301)
 * owns the layers, Scalable Asset Storage (308) storage growth, Large Library Performance (309) the named
 * considerations, High-Performance DAM (320) the summary.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of what creative content demands of infrastructure; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 302,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Architecture & Performance",
      lede: "Explore why large collections of footage, imagery and documents are demanding to host, and what GetSibu’s infrastructure is designed to keep quick for the people who search and preview them.",
      visual: { diagram: "architecture-stack" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 302 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Large collections that still have to feel quick",
      body: [
        "GetSibu’s infrastructure is designed to support large collections of creative content while maintaining search and preview performance. That sets two goals at once: holding a great deal of material, and keeping it quick to find and to look at.",
        "Creative content is an unusual workload. Single files can be very large, particularly footage and layered design work, yet people expect to judge them at a glance. Demand is uneven as well: quiet for weeks, then a launch or a review day when many people open the same material together.",
        [
          "Searching and previewing are also very different kinds of work. A search is a precise lookup against prepared information, which ",
          { text: "creative asset indexing", page: 21 },
          " builds as assets enter the library. A preview is a heavier transfer of media, where ",
          { text: "preview generation and streaming", page: 313 },
          " reduce the friction of reviewing large assets.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Very large individual files", "Look-alike material at scale", "Search and previews as separate workloads", "Bursts of demand around launches", "Performance maintained at scale"],
      },
      highlight: {
        heading: "In practice",
        body: "A production library may hold a modest number of very heavy camera files beside a vast number of light stills, and people expect to find and inspect both kinds without delay.",
        tags: ["Video", "Photography", "Large collections"],
      },
      glance: {
        heading: "Creative infrastructure in brief",
        facts: [
          { label: "Area", value: "Architecture & Performance" },
          { label: "Designed for", value: "Large collections of creative content" },
          { label: "Maintains", value: "Search and preview performance" },
          { label: "Part of", value: "GetSibu Architecture", page: 301 },
        ],
        actions: [{ kind: "route", path: "/architecture", label: "More in Architecture & Performance" }]
      },
      sources: [{ kind: "pdf", page: 302 }, { kind: "pdf", page: 21 }, { kind: "pdf", page: 313 }, { kind: "pdf", page: 301 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "by-media",
      eyebrow: "By type of media",
      heading: "What each kind of creative content asks of infrastructure",
      columns: ["What makes it demanding", "What keeps it usable in GetSibu"],
      rows: [
        { label: "Video", cells: ["Hours of footage nobody can watch in full", "Indexing and AI-generated information to find relevant footage"] },
        { label: "Images", cells: ["Large sets of visually similar files", "Thumbnails that preview without the original"] },
        { label: "Documents", cells: ["Key information locked inside pages and slides", "Extracted text that becomes searchable"] },
        { label: "Audio", cells: ["Often kept apart from the rest of the media", "Managed alongside other creative formats"] },
        { label: "Whole campaigns", cells: ["One project spread across several kinds of media", "One search experience for images, video, audio and documents"] },
      ],
      sources: [{ kind: "pdf", page: 25 }, { kind: "pdf", page: 12 }, { kind: "pdf", page: 146 }, { kind: "pdf", page: 15 }, { kind: "pdf", page: 28 }, { kind: "pdf", page: 24 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "demands",
      eyebrow: "Under the hood",
      heading: "Why creative collections are demanding to host",
      items: [
        {
          heading: "Originals are heavy and rarely need to move",
          summary: "The largest files are also the ones people least need to download just to check.",
          icon: "video",
          body: [
            "Camera originals, masters and layered artwork are often far larger than the finished files made from them. Moving them every time someone wants a look wastes bandwidth and time.",
            "Infrastructure for creative work therefore separates looking at an asset from retrieving it. A lightweight representation answers most questions, and the original is fetched when someone actually needs to work with it.",
          ],
        },
        {
          heading: "Look-alike files multiply",
          summary: "Large libraries fill up with visually similar material that is hard to tell apart by name.",
          icon: "copy",
          body: [
            "A product shoot produces many near-identical frames; a campaign leaves resized and re-exported versions of the same visual. Infrastructure that only knows filenames struggles to separate them.",
            [{ text: "AI duplicate detection", page: 40 }, " combines exact and perceptual hashing to identify identical files and visually equivalent copies, including files that have been re-encoded or renamed."],
          ],
        },
        {
          heading: "Arrivals come in waves",
          summary: "Ingest is quiet for long stretches, then suddenly very busy.",
          icon: "upload",
          body: [
            "A season’s product photography, the rushes from a long shoot or a back catalogue brought across in one move all land as large batches rather than a steady trickle. Taking in peaks like these is a different planning problem from serving an even daily load.",
            ["Teams handling large amounts of video and imagery can use ", { text: "ingestion workflows designed around high-volume asset environments", page: 139 }, "."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 40 }, { kind: "pdf", page: 139 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A media company gathers its archive into one library",
      team: "A media company",
      situation: "A media company holds years of footage, photography and documents across several storage locations, and wants one library that editors, researchers and producers can all search and inspect.",
      steps: [
        { heading: "The collection comes in bulk", body: [{ text: "Bulk asset import", page: 130 }, " moves the existing libraries across without anyone uploading files one by one."] },
        { heading: "Readiness is tracked", body: "While processing runs, the team uses processing status to tell material that has uploaded apart from material that is fully indexed and searchable." },
        { heading: "Researchers search in two ways", body: "A researcher looks for a programme by its exact title, then describes the kind of footage needed; text search and embedding-based retrieval support both methods." },
        { heading: "Producers check clips without downloads", body: [{ text: "Streaming previews", page: 306 }, " let producers inspect footage for a shortlist without waiting for full downloads of the camera files."] },
        { heading: "Colleagues elsewhere review", body: "Reviewers in other offices comment on the shortlisted clips, and nobody has to be in the same room for the review to happen." },
      ],
      outcome: "Editors, researchers and producers work from one collection they can search and preview, rather than from several storage locations that each depended on someone who knew their layout.",
      link: { page: 232, label: "GetSibu for Media Companies" },
      sources: [{ kind: "pdf", page: 232 }, { kind: "pdf", page: 130 }, { kind: "pdf", page: 145 }, { kind: "pdf", page: 317 }, { kind: "pdf", page: 14 }, { kind: "pdf", page: 306 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 87 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about creative asset infrastructure",
      items: [
        {
          question: "What does creative asset infrastructure need that ordinary file storage does not?",
          answer: [
            "Ordinary file storage mainly keeps files available. Creative assets also need preparing for search, lightweight previews and room for very large files and bursts of activity. ",
            { text: "Modern digital asset management", page: 7 },
            " in GetSibu extends storage with AI-assisted organisation, contextual search and collaboration.",
          ],
        },
        {
          question: "Is creative asset infrastructure the same thing as asset storage?",
          answer: [
            "No. Storage is one of the layers GetSibu is built around, alongside clients, edge services, APIs and search infrastructure. How the storage layer copes with expansion is the subject of ",
            { text: "scalable asset storage", page: 308 },
            ".",
          ],
        },
        {
          question: "How does GetSibu keep search usable in a very large creative collection?",
          answer: [
            "GetSibu is designed around ",
            { text: "low-latency search", page: 307 },
            " so users can quickly retrieve assets from large libraries. Library habits help too: archiving keeps historical content from interfering with everyday discovery.",
          ],
        },
        {
          question: "Which teams notice the demands of a large creative collection first?",
          answer: "Usually the teams with the heaviest or largest libraries: production and video teams, agencies holding libraries for many clients, and brand or marketing teams with years of campaign material.",
        },
      ],
      sources: [{ kind: "pdf", page: 7 }, { kind: "pdf", page: 301 }, { kind: "pdf", page: 308 }, { kind: "pdf", page: 307 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 382 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on infrastructure for large collections",
      variant: "compact",
      pages: [301, 308, 309, 313, 139, 21],
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
