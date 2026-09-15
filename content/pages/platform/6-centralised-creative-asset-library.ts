/**
 * 6 · Centralised Creative Asset Library — /platform/centralised-creative-asset-library
 *
 * Angle (cluster: centralisation, primary): bringing connected drives, local infrastructure and direct uploads
 * into one location, the routes by which each kind of source arrives, and how consolidation reduces disconnected
 * versions of the same file. One Source of Truth (10) owns sharing across teams under permissions and approvals;
 * Centralised Media Storage (150) owns the storage view; 392 is the conversion page and is not echoed.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of why creative storage spreads and how teams consolidate it; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 6,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Platform",
      lede: "How one central library gathers creative assets from connected drives, local infrastructure and direct uploads, and why bringing storage locations together can reduce the doubt over which copy of a file is current.",
      visual: { diagram: "ingest-pipeline", focus: "sources" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 6 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Every asset in one place, whatever its origin",
      body: [
        "GetSibu provides a single central location for creative assets, whether they come from connected drives, from local infrastructure or through direct uploads. Bringing them together is intended to reduce the confusion that multiple storage locations cause, including disconnected versions of the same file.",
        "Storage spreads for understandable reasons. A production team keeps camera originals on local storage because the files are large; marketing works from a cloud drive; freelancers send work through transfer links; someone saves a final export to a laptop. Each choice made sense at the time. Together they mean the same asset exists in several places, each copy renamed or edited a little differently, and nobody can say with confidence which one is right.",
        [
          "Centralising does not require every file to arrive the same way. ",
          { text: "Digital asset import", page: 135 },
          " lets assets enter through multiple sources, giving teams flexibility in how they build the library, while ",
          { text: "centralised media storage", page: 150 },
          " looks at the same idea from the storage side: one environment across several sources that keeps organisational structure and access controls.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Connected drives", "Local infrastructure", "Direct uploads", "One location for several sources", "Fewer disconnected versions"],
      },
      highlight: {
        heading: "In practice",
        body: "When a producer asks for the latest logo files, the answer is a place in the library rather than a list of drives to check one after another.",
        tags: ["Producers", "Editors", "Marketing"],
      },
      glance: {
        heading: "Centralisation in brief",
        facts: [
          { label: "Area", value: "Platform" },
          { label: "Brings in", value: "Connected drives, local infrastructure, direct uploads" },
          { label: "Reduces", value: "Confusion over disconnected versions" },
          { label: "Background", value: "What Is a Creative Library?", page: 373 },
        ],
        actions: [{ kind: "route", path: "/platform", label: "More in Platform" }]
      },
      sources: [{ kind: "pdf", page: 6 }, { kind: "pdf", page: 135 }, { kind: "pdf", page: 150 }, { kind: "pdf", page: 373 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "ways-in",
      eyebrow: "Ways in",
      heading: "How assets from each kind of source reach the central library",
      tabs: [
        {
          label: "Connected storage",
          heading: "Connect the places files already live",
          icon: "cloud",
          body: [
            "For teams with established drives, moving everything by hand is rarely realistic. The practical route is to connect those sources so their contents can come into the library.",
            ["GetSibu supports asset ingestion from connected storage sources without the team rebuilding its storage workflow manually, and ", { text: "automated media import", page: 129 }, " reduces the manual movement of files between storage locations."],
          ],
          points: ["No rebuild of the storage workflow", "Fewer manual transfers between locations"],
        },
        {
          label: "Watch folders",
          heading: "Let new work flow in as it is saved",
          icon: "refresh",
          body: [
            "Some material arrives continuously, such as exports from an edit or selects from a photographer. Waiting for someone to upload each batch leaves a gap in which the central library is out of date.",
            ["A ", { text: "watch folder", page: 128 }, " closes that gap: GetSibu can scan it continuously, so anything newly added can enter its workflow automatically."],
          ],
          points: ["No gap between saving and arriving", "Suited to steady streams of new work"],
        },
        {
          label: "Direct uploads",
          heading: "Add a file without setting anything up",
          icon: "upload",
          body: [
            "Not every asset comes from a system. A logo sent by a partner or a single reference image from a client needs a simple way in, or it ends up in someone’s downloads folder.",
            [{ text: "Drag and drop upload", page: 127 }, " handles individual assets and small batches without configuring an integration, and upload progress indicators show how many files are still being processed."],
          ],
          points: ["One-off files still reach the library", "Progress visible during upload"],
        },
        {
          label: "Existing libraries",
          heading: "Bring a whole collection across",
          icon: "archive",
          body: [
            "When a library has built up over many years, the first step towards centralising it is a large one.",
            [{ text: "Bulk asset import", page: 130 }, " moves large existing libraries into GetSibu without uploading each file manually, and ", { text: "folder mapping", page: 133 }, " lets the previous structure be mirrored or remapped on the way in."],
          ],
          points: ["No file-by-file uploading", "Earlier folder logic kept or redesigned"],
        },
      ],
      sources: [{ kind: "pdf", page: 121 }, { kind: "pdf", page: 129 }, { kind: "pdf", page: 128 }, { kind: "pdf", page: 127 }, { kind: "pdf", page: 141 }, { kind: "pdf", page: 130 }, { kind: "pdf", page: 133 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "consolidation",
      eyebrow: "Step by step",
      heading: "Turning scattered storage into one current library",
      intro: "A practical order for consolidation, from finding every location to keeping new copies to a minimum.",
      steps: [
        { heading: "Map every location", body: "List where creative files live today, including personal drives and shared links, and note which teams depend on each one.", icon: "map" },
        { heading: "Bring the sources in", body: "Connect the sources that will stay in use and import the collections that should move, so the library reflects every location on the list.", icon: "plug" },
        { heading: "Let processing finish", body: "Imported assets pass through metadata extraction, thumbnail generation and AI-related processing, and processing status helps show which ones are fully indexed and searchable.", icon: "clock" },
        { heading: "Find the copies", body: "Duplicate detection identifies identical files and visually equivalent copies, including renamed or re-encoded ones, so the team can decide which to keep.", icon: "copy", page: 40 },
        { heading: "Keep one record per asset", body: "From then on, a revised file replaces the asset in place while earlier versions stay in its history, rather than becoming yet another copy elsewhere.", icon: "history", page: 91 },
        { heading: "Share views, not files", body: "Saved searches and library views can be shared through a URL, giving colleagues the assets they need without creating duplicate copies.", icon: "collection", page: 78 },
      ],
      sources: [{ kind: "pdf", page: 289 }, { kind: "pdf", page: 121 }, { kind: "pdf", page: 130 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 145 }, { kind: "pdf", page: 40 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 78 }, { kind: "pdf", page: 79 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "considerations",
      eyebrow: "Considerations",
      heading: "Questions to settle when centralising a creative library",
      items: [
        {
          heading: "Which sources stay, and which retire?",
          summary: "Centralising is a decision about each location, not a single switch.",
          icon: "compass",
          body: [
            "Some storage is worth keeping connected, such as a location a production workflow writes to every day. Other locations exist only because nobody tidied them and can be emptied once their contents are in the library.",
            ["Where a team is moving from an older environment, ", { text: "migration without downtime", page: 292 }, " is designed to let it keep using existing storage while content is indexed in the background."],
          ],
        },
        {
          heading: "How will people know the library is the place to look?",
          summary: "A central library only works once people stop keeping private copies.",
          icon: "users",
          body: [
            "If colleagues keep saving finals to their own drives, the old confusion returns within months. The central library has to be the easiest place to find things as well as the official one.",
            ["Search is what makes that true in practice: ", { text: "search across creative libraries", page: 16 }, " lets a team look through the entire library instead of opening folders one at a time."],
          ],
        },
        {
          heading: "Who should see each part of the library?",
          summary: "Gathering everything in one place raises the question of access.",
          icon: "lock",
          body: [
            "Scattered storage often hid sensitive material by accident: a folder nobody could find was, in effect, private. Once everything sits in one library, access has to be set on purpose.",
            [{ text: "Folder-level permissions", page: 152 }, " allow access to be controlled more precisely than organisation-wide access, and departments can receive access to only the creative libraries relevant to their work."],
          ],
        },
        {
          heading: "What will the combined library reveal?",
          summary: "Consolidation is often the first time anyone sees the whole collection at once.",
          icon: "chart",
          body: [
            "Bringing sources together shows how much material there really is, what share of it is video and how much has been sitting untouched.",
            [{ text: "Creative storage management", page: 148 }, " helps organisations understand how the library is distributed across videos, images, documents and audio, and library health analytics can reveal growth, duplicates and inactive content."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 292 }, { kind: "pdf", page: 16 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 176 }, { kind: "pdf", page: 148 }, { kind: "pdf", page: 196 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about a centralised creative asset library",
      items: [
        {
          question: "Can local infrastructure be part of a centralised creative asset library?",
          answer: "Yes. The central location GetSibu provides brings together assets from connected drives, local infrastructure and direct uploads, so material kept on local storage does not have to be left out.",
        },
        {
          question: "Can large files from location shoots reach the central library reliably?",
          answer: ["That is what ", { text: "resumable uploads", page: 137 }, " are for: when a connection drops, a large transfer need not start again from the beginning. Chunked upload workflows add reliability for big files."],
        },
        {
          question: "Is a centralised creative asset library the same as a source of truth?",
          answer: ["It is the foundation for one. Centralising puts the assets in one place; ", { text: "one source of truth for creative teams", page: 10 }, " adds the permissions and approval workflows that help people access and distribute the right content."],
        },
        {
          question: "Which kinds of creative files can share one centralised library?",
          answer: ["Videos, images, documents and audio can all be managed in one central workspace, and ", { text: "creative file discovery", page: 24 }, " provides a unified search across them, so no format needs a store of its own."],
        },
      ],
      sources: [{ kind: "pdf", page: 6 }, { kind: "pdf", page: 137 }, { kind: "pdf", page: 138 }, { kind: "pdf", page: 10 }, { kind: "pdf", page: 1 }, { kind: "pdf", page: 24 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on bringing assets into one library",
      variant: "compact",
      pages: [150, 121, 10, 91, 128, 373],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the ingestion overview." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Bring Your Creative Assets Together",
      conversionPage: 392,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 392 }],
    },
  ],
};

export default page;
