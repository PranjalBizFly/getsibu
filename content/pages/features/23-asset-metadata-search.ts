/**
 * 23 · Asset Metadata Search — /features/asset-metadata-search
 *
 * Angle (clusters: creative-search, indexing-metadata): metadata as a search path when the original filename and
 * folder are unknown — which recorded detail answers which memory, and what makes such a search dependable.
 * Media Metadata Management (22) owns the fields themselves, Creative Asset Indexing (21) owns entry, Creative Asset
 * Search (11) owns the full set of signals.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of searching by metadata; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 23,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Search & Discovery",
      lede: "Use what is recorded about an asset, together with its tags and extracted content, as a way in when the original filename means nothing and nobody can say which folder the file came from.",
      visual: { diagram: "search-signals", focus: "metadata" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 23 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A way in when the name and the folder tell you nothing",
      body: [
        "GetSibu lets users search available metadata alongside tags and extracted content. Creative teams therefore have several ways to reach an asset when its original filename or folder structure is unknown.",
        "Filenames and folders are the most fragile facts about a file. Cameras name images by sequence, exports are renamed for each channel, and a folder tree that suited one team is flattened or rearranged as soon as material moves. Metadata is usually written by other processes — a device at capture, a creative application on export, a previous library during cataloguing — so it often survives the changes that scramble names and locations.",
        [
          "The fields themselves are described under ",
          { text: "media metadata management", page: 22 },
          ". Searching them works best when a remembered clue is matched to the right field, combined with the other signals of ",
          { text: "creative asset search", page: 11 },
          " and weighed against what a record can and cannot prove.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Metadata as a route to an asset", "Useful when names are meaningless", "Searched with tags and extracted content", "Creators, paths and keywords as clues", "Several routes to the same file"],
      },
      highlight: {
        heading: "In practice",
        body: "A picture editor needs event photographs saved under camera-generated names. Searching for the studio recorded as their creator can bring the set back without anyone recalling where it was stored.",
        tags: ["Picture editors", "Archives", "Migrated material"],
      },
      glance: {
        heading: "Metadata search in brief",
        facts: [
          { label: "Area", value: "Search & Discovery" },
          { label: "Searches", value: "Metadata alongside tags and extracted content" },
          { label: "Most useful when", value: "The filename or folder is unknown" },
          { label: "Narrowed with", value: "Advanced Media Filters", page: 19 },
        ],
        actions: [{ kind: "route", path: "/features/search-and-discovery", label: "More in Search & Discovery" }]
      },
      sources: [{ kind: "pdf", page: 23 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 19 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "clues",
      eyebrow: "Matching a clue to a field",
      heading: "Which recorded detail answers which kind of memory",
      intro: "What someone remembers about a lost asset usually points towards one kind of metadata.",
      columns: ["Metadata worth searching", "Why it tends to work"],
      rows: [
        { label: "Who made it", cells: ["Creator", "Credits usually outlast renamed files"] },
        { label: "Which client or job", cells: ["File path", "Old folder names often held a client, job or year"] },
        { label: "How an old library labelled it", cells: ["Custom keywords", "A previous system’s terms can still match"] },
        { label: "When or with what it was shot", cells: ["EXIF", "Capture details come from the device"] },
        { label: "The caption or credit line", cells: ["XMP", "Descriptive text written by creative software"] },
        { label: "What it shows or says", cells: ["Tags and extracted content", "Reaches files whose metadata is thin"] },
      ],
      sources: [{ kind: "pdf", page: 22 }, { kind: "pdf", page: 23 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "An inherited agency archive searched without its filenames",
      team: "A marketing team",
      situation: "A marketing team has brought its creative work in-house and received the former agency’s archive. The files carry export-generated names, and the agency’s folder logic never matched how the team thinks about its work.",
      steps: [
        { heading: "The archive arrives with its record", body: ["The files come across through ", { text: "bulk asset import", page: 130 }, ". Because creators, file paths and custom keywords can be preserved during migration, the agency’s credits, folder paths and keywords arrive with the files instead of being discarded."] },
        { heading: "A request names a photographer", body: "Asked for the location photography from an earlier annual report, a coordinator searches for the photographer the agency credited rather than for a filename nobody knows." },
        { heading: "An old path supplies the job", body: "The photographer worked on several jobs, so the results are broad. Adding the job code that appears in the agency’s old folder paths leaves the images from the right report." },
        { heading: "Extracted text fills a gap", body: ["A few exported layout spreads carry no credit at all. The report’s title is printed on them, and because ", { text: "text in images can be extracted and searched", page: 15 }, ", those spreads appear as well."] },
      ],
      outcome: "The archive becomes part of the team’s everyday library even though its filenames and folders still reflect the agency’s habits, because the details recorded about each file do the finding.",
      link: { page: 213, label: "GetSibu for Marketing Teams" },
      sources: [{ kind: "pdf", page: 130 }, { kind: "pdf", page: 132 }, { kind: "pdf", page: 23 }, { kind: "pdf", page: 15 }, { kind: "pdf", page: 213 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "accordion",
      id: "dependable",
      eyebrow: "Getting reliable results",
      heading: "What makes a metadata search dependable",
      items: [
        {
          heading: "Search for the form the record uses",
          summary: "A field holds the words someone stored in it, which may not be the words you would choose.",
          icon: "search",
          body: [
            "A creator field might hold a studio’s name instead of the photographer’s; a keyword might be an internal code instead of a product name. When the obvious term finds little, try the variant the source was likely to use: initials, an agency name, an abbreviation.",
            "Knowing how one supplier or old system wrote its fields is often the quickest way to guess how it wrote the rest.",
          ],
        },
        {
          heading: "Paths follow someone else’s logic",
          summary: "A path fragment is a strong clue only if you can guess how the original folders were named.",
          icon: "folder",
          body: [
            "Old structures abbreviate: a client becomes a code, a campaign becomes a job number, a year loses its first half. A distinctive fragment such as a job number is a far better search term than a word like “final” or “images” that appears in countless paths.",
          ],
        },
        {
          heading: "Thin metadata needs another route",
          summary: "Screenshots, web exports and files that passed through many hands may have little recorded about them.",
          icon: "sparkles",
          body: [
            "For those files, the signals searched alongside metadata carry the load: extracted text covers what is printed in them, and tags describe what they show.",
            ["Where tags are missing, ", { text: "AI-assisted tagging", page: 31 }, " can put forward tags for authorised users to check, so an asset with a weak record need not stay undescribed."],
          ],
        },
        {
          heading: "Pair a clue with a filter",
          summary: "A metadata match often returns a person’s or a project’s entire output, which then needs narrowing.",
          icon: "filter",
          body: [
            ["A creator’s name may bring back years of work. ", { text: "Filters for category, format, source, resolution and date", page: 19 }, " reduce that to the files that suit the job, starting with the property you are surest of."],
          ],
        },
        {
          heading: "Metadata shows origin, not permission",
          summary: "A recorded detail says where a file came from, not whether it should be used today.",
          icon: "shield",
          body: [
            ["An agency credit or an old campaign keyword confirms provenance. It does not confirm that an asset is approved or current, which is the job of ", { text: "review status", page: 76 }, ": a clear indication of whether an asset needs attention or has completed the approval process."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 23 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 19 }, { kind: "pdf", page: 76 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about asset metadata search",
      items: [
        {
          question: "Does asset metadata search replace searching by filename?",
          answer: [
            "No. When someone knows a file’s name, searching for it remains the most direct route. Metadata earns its place when the name is meaningless or forgotten, and ",
            { text: "creative asset search", page: 11 },
            " draws on filenames and metadata together.",
          ],
        },
        {
          question: "Does asset metadata search work for every kind of file?",
          answer: [
            "It reaches whatever metadata is available, and how much that is varies by kind of file. Camera images usually carry capture details and documents often record an author, while exported footage and audio may carry little description unless someone added it. ",
            { text: "Creative file discovery", page: 24 },
            " looks at finding images, video, audio and documents through one search experience.",
          ],
        },
        {
          question: "How is searching by creator different from filtering by uploader?",
          answer: [
            "A creator made the asset; an uploader added it to the library. For agency and freelance work those are often different people, and the ",
            { text: "media search platform", page: 13 },
            " lists uploader among the filters it pairs with keywords.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 23 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 24 }, { kind: "pdf", page: 13 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on finding assets by what is recorded",
      variant: "compact",
      pages: [22, 11, 21, 13, 374, 24],
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
