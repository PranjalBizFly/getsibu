/**
 * 391 · Start Your Creative Library — /get-started (section root)
 *
 * Angle (clusters: ingestion, conversion): what starting a library involves — a connected source or direct
 * uploads, then processing, a first structure and discussion on the files — and the worries that delay a start.
 * The template adds the section's areas and the list of child topics, so this page has no capabilities grid of
 * children and no related strip. Child pages are linked inline where the explanation names them.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how teams typically begin a creative library; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 391,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Get Started",
      lede: "What beginning a creative library involves: how the first assets can arrive, what happens to them next, and the early choices about structure, discussion and access that make the library worth returning to.",
      visual: { diagram: "ingest-pipeline", focus: "sources" },
      actions: [
        { kind: "global", cta: "primary" },
        { kind: "page", page: 121, label: "How automated asset ingestion works" },
      ],
      sources: [{ kind: "pdf", page: 391 }, { kind: "pdf", page: 121 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 61 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A library that takes shape from its first files",
      body: [
        "GetSibu gives teams a simple way to begin: creative assets come into one searchable environment when a team connects a source that already holds files or uploads files directly, and the platform then starts building an organised library from whatever arrives.",
        "Libraries are often postponed for the wrong reason. A team assumes the folder structure, the tag vocabulary and a plan for every old drive must be settled before anything moves, and the project stalls under decisions nobody can make in the abstract. A small, real collection answers those questions faster: it shows which words people search with, where the structure needs more depth and which older material is worth bringing across.",
        [
          "What a team does next usually follows from the problem that started the conversation. Material spread across separate stores points towards ",
          { text: "bringing creative assets together", page: 392 },
          "; hours lost hunting through directories point towards ",
          { text: "no longer searching through folders", page: 393 },
          "; and a collection that has outgrown its first arrangement is a question of ",
          { text: "scaling a creative library", page: 397 },
          ".",
        ],
      ],
      keyPoints: {
        heading: "What starting involves",
        items: ["A connected source or direct uploads", "Processing before assets are searchable", "Folders and tags shaped by real use", "Conversation kept beside the files", "Access opened on purpose"],
      },
      glance: {
        heading: "Starting a library in brief",
        facts: [
          { label: "Area", value: "Get Started" },
          { label: "Ways in", value: "Connected storage sources and direct uploads" },
          { label: "After upload", value: "Asset Processing", page: 143 },
          { label: "Suits", value: "Teams starting from drives, folders or nothing at all" },
        ],
      },
      sources: [{ kind: "pdf", page: 391 }, { kind: "pdf", page: 121 }, { kind: "pdf", page: 127 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 392 }, { kind: "pdf", page: 393 }, { kind: "pdf", page: 397 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "first-steps",
      eyebrow: "Step by step",
      heading: "Five moves from a first collection to a working library",
      intro: "A practical order for the first collection; the collections that follow can take the same path.",
      steps: [
        { heading: "Pick a first collection", body: "Choose material people need now, such as a live campaign or production, rather than the oldest archive. Its value is felt at once, and it tests the structure while changes are still cheap.", icon: "compass" },
        { heading: "Bring the files in", body: "Assets can enter from connected storage sources as well as direct uploads, so nobody has to rebuild the existing storage workflow by hand before the library exists.", icon: "upload" },
        { heading: "Give the library a shape", body: "Structured folders hold the broad divisions, while hierarchical tags carry descriptions that cut across them, such as a market or a season.", icon: "folder", page: 8 },
        { heading: "Hold early reviews on the files", body: "Because collaboration features sit inside the asset library, early reviews can happen on the assets themselves, which shows reviewers that the collection is worth using.", icon: "message", page: 61 },
        { heading: "Invite the wider team", body: "Open each area to the colleagues who need it once the first collection is in order, and let their requests decide what to bring in next.", icon: "users" },
      ],
      sources: [{ kind: "pdf", page: 121 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 61 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "first-collections",
      eyebrow: "Where teams begin",
      heading: "Sensible first collections for different kinds of team",
      tabs: [
        {
          label: "Production",
          heading: "Start with the production running now",
          icon: "film",
          body: [
            "Footage from an active production is large, arrives in quantity and is wanted by several people at once, which makes it a demanding but revealing first collection.",
            [
              "GetSibu offers ",
              { text: "ingestion workflows designed around high-volume asset environments", page: 139 },
              ", and resumable uploads help prevent a large transfer from starting again after a network interruption.",
            ],
          ],
          points: ["Material people need today", "Large transfers that survive a dropped connection"],
        },
        {
          label: "Marketing",
          heading: "Start with the campaign in progress",
          icon: "megaphone",
          body: [
            "A live campaign gathers imagery, video, presentations and copy from several contributors, and it is exactly where approved and unapproved versions get confused.",
            [
              "Marketing teams can ",
              { text: "review campaign materials", page: 70 },
              " through asset-level discussions and approvals before distribution, which gives the first collection a reason to be used rather than merely filled.",
            ],
          ],
          points: ["Mixed formats from several contributors", "Review before anything goes out"],
        },
        {
          label: "Agencies",
          heading: "Start with a single client",
          icon: "briefcase",
          body: [
            "An agency that moves every client at once multiplies its decisions. Beginning with one client lets the team settle conventions it can then repeat for the rest.",
            [
              "Each ",
              { text: "client environment can remain logically isolated", page: 161 },
              ", so the assets of that first client are not mixed with the libraries added after it.",
            ],
          ],
          points: ["Conventions worked out once", "Client libraries kept apart"],
        },
        {
          label: "Freelancers",
          heading: "Start with the pieces you reuse",
          icon: "user",
          body: [
            "An independent creative seldom needs a migration project. The useful first step is gathering what gets reused: templates, selects from past shoots and logos supplied by regular clients.",
            [
              "Freelancers can use GetSibu to ",
              { text: "organise a personal creative library", page: 226 },
              " and quickly locate reusable assets, which suits a collection built from a few years of client work.",
            ],
          ],
          points: ["Reusable material first", "Templates, selects and logos together"],
        },
      ],
      sources: [{ kind: "pdf", page: 139 }, { kind: "pdf", page: 137 }, { kind: "pdf", page: 70 }, { kind: "pdf", page: 161 }, { kind: "pdf", page: 226 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "worries",
      eyebrow: "Considerations",
      heading: "Worries that delay a first library, and what answers them",
      items: [
        {
          heading: "“Our folders are too messy to move”",
          summary: "Tidying every drive beforehand is rarely necessary.",
          icon: "folder",
          body: [
            "Cleaning up years of folders before a move sounds responsible, but it tends to stall the project, because nobody can judge an old structure until they see it beside a better one.",
            ["During import, ", { text: "folder mapping", page: 133 }, " lets existing structures be mirrored or remapped, so a team can bring folders across as they are and improve them once the library is in use."],
          ],
        },
        {
          heading: "“People still depend on the old storage”",
          summary: "Starting a library does not have to mean switching everything else off.",
          icon: "server",
          body: [
            "Live work runs from today’s drives, and a start that demands a freeze is a start that keeps being put off.",
            "The migration workflow is designed to let organisations carry on using existing storage while their content is indexed in the background.",
          ],
        },
        {
          heading: "“Nobody has time to tag it all”",
          summary: "Description does not have to begin with an empty field.",
          icon: "tag",
          body: [
            "Manual tagging is the step most likely to be skipped when a library begins, and a library without descriptions is hard to search.",
            ["GetSibu can ", { text: "suggest tags during asset processing", page: 31 }, ". Authorised users then review, approve or override them, so the team corrects suggestions instead of writing every description from scratch."],
          ],
        },
        {
          heading: "“We won’t know when files are ready”",
          summary: "An upload finishing is not the same as an asset being searchable.",
          icon: "clock",
          body: [
            "Early users judge a library by their first few searches. If they look for something that has uploaded but not yet been indexed, they may decide the library does not work.",
            "Processing status helps separate an asset that uploaded successfully from one that is fully indexed and searchable, which is worth checking before the library is announced to colleagues.",
          ],
        },
        {
          heading: "“The wrong people might see things”",
          summary: "A new library does not have to start open.",
          icon: "lock",
          body: [
            "Opening a library to everyone and restricting it later is harder than the reverse, because people come to rely on access they were never meant to have.",
            ["With ", { text: "default-deny access", page: 154 }, ", new folders can remain private until access is explicitly granted, so each area opens only when someone decides it should."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 133 }, { kind: "pdf", page: 292 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 145 }, { kind: "pdf", page: 154 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about starting a creative library",
      items: [
        {
          question: "Can developers add assets to a new creative library without manual uploads?",
          answer: ["Yes. The ", { text: "asset upload API", page: 262 }, " allows external applications to send files into the GetSibu environment, which suits teams whose files are produced by other software."],
        },
        {
          question: "Does starting a creative library require an integration to be configured?",
          answer: ["No. ", { text: "Drag and drop upload", page: 127 }, " makes it easy to add individual assets or small batches without configuring an integration, which is often enough for a first collection."],
        },
        {
          question: "Can a new creative library take in files that keep arriving in the same place?",
          answer: [{ text: "Watch folder ingestion", page: 128 }, " means watch folders can be scanned continuously, so newly added content can enter the GetSibu workflow automatically. That suits teams who already save new work into one location."],
        },
      ],
      sources: [{ kind: "pdf", page: 262 }, { kind: "pdf", page: 127 }, { kind: "pdf", page: 128 }, EXPLAINS],
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
