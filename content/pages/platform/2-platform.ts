/**
 * 2 · The Operating System for Creative Libraries — /platform (section root)
 *
 * Angle (cluster: platform-positioning): the operating-system idea itself — storage, organisation, AI tagging,
 * search, collaboration, permissions and analytics as layers of one platform that all work on the same library.
 * The template adds the section's areas and the list of child topics, so this page has no capabilities grid of
 * children and no related strip. The homepage (1) owns the one-workspace statement; this page owns how the parts
 * depend on one another. Framed children (3, 5) are linked by title only and never paraphrased.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how creative libraries are run across separate tools; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 2,
  metaDescription: "GetSibu brings storage, organisation, AI tagging, search, collaboration, permissions and analytics into one platform: an operating system for creative work.",
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Platform",
      lede: "See how storage, organisation, AI tagging, search, collaboration, permissions and analytics fit together as one platform in GetSibu, and what changes when every one of those jobs works on the same creative library.",
      visual: { diagram: "library-search" },
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 2 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Seven library jobs running on one platform",
      body: [
        "GetSibu acts as an operating system for modern creative libraries: storage, organisation, AI tagging, search, collaboration, permissions and analytics are brought into one platform rather than spread across separate tools. Teams can connect the storage they already have or import assets, media can be processed automatically, and the resulting library is made available to the team members authorised to use it.",
        "The comparison with a computer’s operating system is a useful one. An operating system manages the shared resources every application relies on, so no single program has to. A creative library without that layer splits its resources between tools: files sit on drives, keywords live in a spreadsheet or in someone’s memory, feedback runs through email, access is granted link by link, and nobody can see how the collection as a whole is being used.",
        [
          "When those jobs share one library, the output of one becomes the input of the next. Tags suggested during processing become something search can match, discussion stays attached to the file it concerns, and folder-level permissions are set on the same library the assets sit in. Because the platform is ",
          { text: "designed API-first", page: 254 },
          ", organisations can also build their own experiences on the same underlying asset system.",
        ],
      ],
      keyPoints: {
        heading: "What the platform brings together",
        items: ["Storage and ingestion", "Organisation", "AI tagging", "Search", "Collaboration", "Permissions", "Analytics"],
      },
      highlight: {
        heading: "In practice",
        body: "A photograph that arrives from a connected source can be tagged, found, discussed and approved in the same library, without the conversation about it moving into a separate tool.",
        tags: ["Creative teams", "Library managers", "Reviewers"],
      },
      glance: {
        heading: "The platform in brief",
        facts: [
          { label: "Area", value: "Platform" },
          { label: "Brings together", value: "Storage, organisation, AI tagging, search, collaboration, permissions, analytics" },
          { label: "Starts with", value: "Automated Asset Ingestion", page: 121 },
          { label: "Architecture", value: "API-first" },
        ],
      },
      sources: [{ kind: "pdf", page: 2 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 73 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 254 }, { kind: "pdf", page: 121 }, EXPLAINS],
    },
    {
      kind: "layers",
      id: "layers",
      eyebrow: "How it fits together",
      heading: "The layers of a creative library, from files to insight",
      intro: "Each layer draws on the work of the layers beneath it, which is why they serve a team better on one platform than in separate tools.",
      layers: [
        {
          label: "Storage and ingestion",
          body: "Assets enter from connected storage sources and direct uploads, then pass through processing stages such as metadata extraction, thumbnail generation and AI-related processing.",
          page: 121,
        },
        {
          label: "AI tagging",
          body: "Tags can be suggested while assets are being processed, so teams do not have to classify every file by hand, and authorised users can review, approve or override what is suggested.",
        },
        {
          label: "Organisation",
          body: "Folders, tags, collections and metadata turn a pile of processed files into a structure that people and search can both rely on.",
        },
        {
          label: "Search",
          body: "Search uses what the lower layers have produced: filenames, metadata, extracted text, AI-generated tags, comments and semantic information, including requests described in natural language.",
          page: 11,
        },
        {
          label: "Collaboration",
          body: "Comments, threaded discussions and approvals happen on the asset that search returned, so the record of a decision stays with the work instead of in an inbox.",
        },
        {
          label: "Permissions",
          body: "Granular permissions control who can access different areas of the library, and folder-level permissions let that access be set more precisely than organisation-wide access.",
          page: 151,
        },
        {
          label: "Analytics",
          body: "Analytics give visibility into uploads, comments, storage, contributors, tags and other library activity, so the use of the collection as a whole can be seen.",
          page: 181,
        },
      ],
      sources: [{ kind: "pdf", page: 121 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 4 }, { kind: "pdf", page: 29 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 14 }, { kind: "pdf", page: 61 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 73 }, { kind: "pdf", page: 151 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 181 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "starting-points",
      eyebrow: "Before choosing a topic",
      heading: "What running a library as one platform asks of a team",
      intro: "A shared platform changes where work happens, but several decisions about the library remain the team’s to make.",
      items: [
        {
          heading: "Gathering the assets comes first",
          summary: "Search, review and access can only share a library once the assets are in one place.",
          icon: "folder",
          body: [
            "Scattered storage creates a particular kind of confusion: several copies of the same file, each in a different place, and nobody sure which one is current. Until that is settled, every later job works from an incomplete picture of the collection.",
            ["A ", { text: "centralised creative asset library", page: 6 }, " brings assets from connected drives, local infrastructure and direct uploads into one location, which is how teams can reduce the confusion of disconnected versions of the same file."],
          ],
        },
        {
          heading: "The structure is still the team’s to design",
          summary: "A platform supplies the organising tools; how folders and tags are used is a decision people make.",
          icon: "layers",
          body: [
            "Folder trees that suited a small team seldom survive growth. New campaigns, new formats and new colleagues each bend the structure a little until it no longer explains itself. Agreeing what folders stand for, and which descriptions belong in tags, is work no platform can do on a team’s behalf.",
            ["For libraries expected to grow large, ", { text: "creative asset organisation", page: 8 }, " rests on structured folders and a taxonomy of hierarchical tags, synonyms, colours and inheritance, intended to stay useful at thousands or millions of assets."],
          ],
        },
        {
          heading: "AI takes a first pass, not the final word",
          summary: "Automated tagging saves effort only when people can check and correct what it proposes.",
          icon: "sparkles",
          body: [
            "A wrong tag that nobody checks can hide an asset as effectively as having no tag at all, so the value of AI in a library depends on how easily a team can confirm or change its output.",
            ["That is the stance of ", { text: "AI-aware asset management", page: 9 }, ": GetSibu analyses media and recommends tags and classifications, and the team maintains control over how its library is organised."],
          ],
        },
        {
          heading: "Storage is where the platform starts, not where it ends",
          summary: "The difference from a shared drive lies in what happens around a file once it is stored.",
          icon: "database",
          body: [
            "A shared drive does one job well, which is keeping files available. The difficulties start with everything it was never built for: review, revisions, context and knowing what gets used.",
            ["In ", { text: "modern digital asset management", page: 7 }, ", storage is extended with AI-assisted organisation, contextual search, collaboration, approvals, version history, analytics and permission controls designed for creative workflows."],
          ],
        },
        {
          heading: "Several teams can share without seeing everything",
          summary: "One library serves many teams when access and approval govern what each person can reach and distribute.",
          icon: "users",
          body: [
            "Marketing, production and brand teams want different things from the same material, and the risk in sharing it is that the wrong version travels furthest.",
            ["A ", { text: "source of truth for creative teams", page: 10 }, " depends on two controls working together: permissions and approval workflows help ensure that users access and distribute the right content."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 6 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 9 }, { kind: "pdf", page: 7 }, { kind: "pdf", page: 10 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "One product shoot, followed through every layer",
      team: "An in-house creative team",
      situation: "An in-house creative team has just wrapped a product shoot. The photographer’s files are landing in a folder connected to the team’s library, and marketing wants selects before the launch plan is finalised.",
      steps: [
        {
          heading: "The files arrive on their own",
          body: ["The folder is a ", { text: "watch folder", page: 128 }, ", scanned continuously, so the new photographs enter the library without anyone uploading them by hand."],
        },
        {
          heading: "Processing does the first pass",
          body: "Thumbnails are generated and tags are suggested as the images are processed. The team’s library manager approves the suggestions that fit in bulk and overrides the few that use the wrong term.",
        },
        {
          heading: "Marketing finds the selects",
          body: "A marketer searches for the product and combines filters for format and date, without needing to know which folder the shoot went into.",
        },
        {
          heading: "Feedback stays on the images",
          body: "The brand lead comments on two shots and mentions the retoucher. The retouched images then go through approval, and their review status shows which ones are ready to use.",
        },
        {
          heading: "Access and activity stay visible",
          body: "Only the teams given access to the shoot’s folder can open it, and upload and storage activity in the library’s analytics reflect the new material.",
        },
      ],
      outcome: "The shoot went from delivery to approved selects inside one library, and the tags, comments and approvals it gathered along the way stayed with the images.",
      link: { page: 222, label: "GetSibu for In-House Creative Teams" },
      sources: [{ kind: "pdf", page: 128 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 146 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 47 }, { kind: "pdf", page: 48 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 19 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 66 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 76 }, { kind: "pdf", page: 154 }, { kind: "pdf", page: 175 }, { kind: "pdf", page: 184 }, { kind: "pdf", page: 183 }, { kind: "pdf", page: 222 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about GetSibu as an operating system for creative libraries",
      items: [
        {
          question: "What does it mean to call GetSibu an operating system for creative libraries?",
          answer: "It means the jobs a creative library depends on share one platform and one set of assets, instead of each living in a separate tool that holds its own partial picture of the library.",
        },
        {
          question: "Does the GetSibu platform require a team to give up its existing storage?",
          answer: "Not necessarily. Asset ingestion works from connected storage sources as well as direct uploads, and the migration workflow is designed so existing storage stays in use while content is indexed in the background.",
        },
        {
          question: "Which kinds of creative files does the GetSibu platform bring together?",
          answer: "Videos, images, documents and audio. GetSibu is designed to help teams store, organise, search, review and collaborate on all four from one central workspace, rather than keeping each format somewhere of its own.",
        },
        {
          question: "Can developers build on the same platform capabilities the GetSibu interface uses?",
          answer: ["Yes. The ", { text: "REST API", page: 253 }, " follows an API-first architecture, so developers can interact with the same platform capabilities that the interface uses."],
        },
        {
          question: "Who decides which team members can open the library once it is set up?",
          answer: "The library is made available to authorised team members. Organisation administrators manage access policies, users and folders, and new folders remain private until access is explicitly granted.",
        },
      ],
      sources: [{ kind: "pdf", page: 2 }, { kind: "pdf", page: 121 }, { kind: "pdf", page: 292 }, { kind: "pdf", page: 1 }, { kind: "pdf", page: 253 }, { kind: "pdf", page: 158 }, { kind: "pdf", page: 154 }, EXPLAINS],
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
