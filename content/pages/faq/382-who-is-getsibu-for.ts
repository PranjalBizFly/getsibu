/**
 * 382 · Who Is GetSibu For? — /faq/who-is-getsibu-for
 *
 * Angle (cluster: platform-positioning): the audiences GetSibu is designed for, read as a shared condition
 * (a large creative library) rather than a list of sectors, plus the people inside an organisation who work
 * in it. The homepage lists the teams; the use-case pages (211–240) own each team's detail.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how creative organisations work with shared libraries; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 382,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "centered",
      eyebrow: "FAQ",
      lede: "Which organisations GetSibu is designed for, what their creative libraries have in common, and the people inside those organisations who work with it from day to day.",
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 382 }],
    },
    {
      kind: "definition",
      id: "short-answer",
      eyebrow: "Short answer",
      term: "Who Is GetSibu For?",
      answer: "GetSibu is designed for production teams, marketing teams, agencies, brand teams, creative studios and other organisations that manage large creative libraries.",
      detail: "They have in common a growing collection of videos, images, documents and audio, one that can quickly run into thousands of files. GetSibu provides a structured environment in which that collection can be organised through folders, tags, collections, metadata and permissions.",
      sources: [{ kind: "pdf", page: 382 }, { kind: "pdf", page: 4 }, EXPLAINS],
    },
    {
      kind: "overview",
      id: "longer-answer",
      heading: "A fit defined by the library rather than the sector",
      body: [
        "The teams named in the answer look different on the surface. A production studio thinks in footage and cuts, a brand team in approved logos and guidelines, an agency in client accounts. Each of them depends on a shared collection that many people add to, search, discuss and reuse.",
        "Shared dependence is where general-purpose storage starts to strain. Contributors multiply, formats mix, revisions pile up, and access has to differ from one group to the next. As a library gets busier, more of a team’s week goes into finding files, confirming versions and asking who may use what.",
        [
          "The size of the organisation is less decisive than it sounds. ",
          { text: "Freelancers", page: 226 },
          " can use GetSibu to organise a personal creative library and locate reusable assets, while ",
          { text: "enterprise marketing teams", page: 223 },
          " can combine asset governance, permissions, search, approvals and analytics across many groups.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Large, shared creative libraries", "Many contributors and reviewers", "Mixed formats in one collection", "Access that differs by group", "From freelancers to enterprises"],
      },
      highlight: {
        heading: "In practice",
        body: "A studio, a brand team and an agency may never compare notes, yet each spends time asking the same questions: where the file is, whether it is the latest, and who is allowed to use it.",
        tags: ["Studios", "Brand teams", "Agencies"],
      },
      glance: {
        heading: "Who it serves, in brief",
        facts: [
          { label: "Common thread", value: "Managing a large creative library" },
          { label: "Teams named", value: "Production, marketing, agency, brand, studio" },
          { label: "Follows on from", value: "What Is GetSibu?", page: 381 },
        ],
        actions: [{ kind: "route", path: "/faq", label: "More in FAQs" }]
      },
      sources: [{ kind: "pdf", page: 382 }, { kind: "pdf", page: 226 }, { kind: "pdf", page: 223 }, { kind: "pdf", page: 381 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "shared-pressures",
      eyebrow: "What they share",
      heading: "Library pressures behind the teams in the answer",
      intro: "Each team named in the answer arrives with its own version of the same problem.",
      items: [
        {
          heading: "Footage at production scale",
          body: "Production studios bring large collections of footage that need organising, reviewing with frame-specific feedback and versioning, without relying on scattered storage folders.",
          icon: "film",
          points: ["Cuts and revisions", "Feedback on exact moments"],
          page: 211,
        },
        {
          heading: "Campaign material from every channel",
          body: "Marketing teams can keep campaign assets, product imagery, videos, presentations and other marketing material together in one central library.",
          icon: "megaphone",
          points: ["Product imagery beside video", "Presentations kept with creative"],
          page: 213,
        },
        {
          heading: "Clients who must stay apart",
          body: "Creative agencies can use multi-tenant capabilities to look after several clients while each client’s library stays separated from the rest.",
          icon: "briefcase",
          points: ["Separation between clients", "Several libraries on one platform"],
          page: 215,
        },
        {
          heading: "Approved work to protect",
          body: "Brand teams can organise approved assets, apply brand-specific tags and manage expiry information, keeping a controlled source of truth for everyone who uses the brand.",
          icon: "shield",
          page: 214,
        },
        {
          heading: "Every discipline in one place",
          body: "Creative studios can manage images, videos, audio and documents together in one searchable environment, instead of a separate home for each craft.",
          icon: "palette",
          page: 220,
        },
        {
          heading: "Collections that keep growing",
          body: "Media companies can manage large collections of video, image, audio and document assets, where the archive itself is part of the value.",
          icon: "archive",
          page: 232,
        },
      ],
      sources: [{ kind: "pdf", page: 211 }, { kind: "pdf", page: 213 }, { kind: "pdf", page: 215 }, { kind: "pdf", page: 162 }, { kind: "pdf", page: 214 }, { kind: "pdf", page: 220 }, { kind: "pdf", page: 232 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "inside-the-organisation",
      eyebrow: "Inside the organisation",
      heading: "The people who work in GetSibu day to day",
      tabs: [
        {
          label: "Contributors",
          heading: "Adding work as projects move along",
          icon: "upload",
          body: [
            "Photographers, designers, editors and copywriters add material while projects are still under way. They can add files directly by drag and drop, and each upload then moves through processing such as metadata extraction and thumbnail generation.",
          ],
          points: ["Drag and drop for small batches", "Processing after upload"],
          link: { page: 127, label: "Drag and Drop Upload" },
        },
        {
          label: "Library managers",
          heading: "Looking after how assets are described",
          icon: "tag",
          body: [
            "Someone usually takes responsibility for the shape of the library. Instead of typing tags for every file, that person can work through AI suggestions, and approving suggested tags in bulk makes large-scale organisation far quicker than checking assets one at a time.",
          ],
          points: ["Suggestions reviewed rather than typed", "Bulk approval for large batches"],
          link: { page: 47, label: "AI Tag Approval" },
        },
        {
          label: "Reviewers",
          heading: "Signing off where the work sits",
          icon: "approval",
          body: [
            "Creative leads, brand managers and producers spend much of their time judging other people’s work. Review status gives them a clear indication of whether an asset still needs attention or has already completed approval, and their comments stay attached to the asset under discussion.",
          ],
          points: ["Status that shows what is outstanding", "Comments kept on the asset"],
          link: { page: 76, label: "Review Status" },
        },
        {
          label: "Administrators",
          heading: "Deciding who can reach what",
          icon: "lock",
          body: [
            "Access policies, users, folders and organisational settings are the business of organisation administrators. Because new folders can remain private until access is explicitly granted, adding a sensitive project does not expose it to every user.",
          ],
          points: ["Access policies and users", "Private until access is granted"],
          link: { page: 158, label: "Organisation Admin Controls" },
        },
        {
          label: "Developers",
          heading: "Connecting the library to other software",
          icon: "code",
          body: [
            "Technology teams belong in the audience too. GetSibu offers a developer-oriented foundation for organisations that want asset management inside their existing software environments, and developers can use the API to bring upload, search and other supported workflows into custom applications.",
          ],
          points: ["Programmatic access to the library", "Custom applications on the asset system"],
          link: { page: 280, label: "GetSibu for Developers" },
        },
      ],
      sources: [{ kind: "pdf", page: 127 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 47 }, { kind: "pdf", page: 76 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 158 }, { kind: "pdf", page: 154 }, { kind: "pdf", page: 337 }, { kind: "pdf", page: 280 }, { kind: "pdf", page: 255 }, { kind: "pdf", page: 261 }, { kind: "pdf", page: 279 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about who GetSibu is for",
      items: [
        {
          question: "Can organisations outside the creative and media industries use GetSibu?",
          answer: [
            "They can. ",
            { text: "Education teams", page: 237 },
            " can manage course media, presentations, recordings and visual resources, and ",
            { text: "nonprofits", page: 238 },
            " can centralise campaign imagery, event content, documents and communications assets.",
          ],
        },
        {
          question: "Does GetSibu suit a creative library that is growing quickly?",
          answer: [
            "Growth is part of what it is for. ",
            { text: "Scale Your Creative Library", page: 397 },
            " sets out the search, organisation, storage and governance capabilities GetSibu provides as more campaigns, videos, images and documents make a library harder to manage.",
          ],
        },
        {
          question: "Who should lead a GetSibu implementation?",
          answer: [
            "Whoever will be accountable for the library is a natural choice, working alongside IT. ",
            { text: "DAM implementation", page: 299 },
            " involves configuring users, folders, permissions, integrations, metadata and workflows, so it helps to involve the people who understand each of those areas.",
          ],
        },
        {
          question: "Does GetSibu suit organisations that need strict control over access?",
          answer: [
            "Access control is central to it. ",
            { text: "Enterprise asset governance", page: 179 },
            " combines roles, permissions, audit logs, authentication and organisational policies, and enterprise teams can apply structured access controls across departments, projects and folders.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 237 }, { kind: "pdf", page: 238 }, { kind: "pdf", page: 397 }, { kind: "pdf", page: 299 }, { kind: "pdf", page: 179 }, { kind: "pdf", page: 169 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on the teams GetSibu serves",
      variant: "compact",
      pages: [381, 213, 211, 215, 222, 280],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the closest use cases." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Start Your Creative Library",
      conversionPage: 391,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 391 }],
    },
  ],
};

export default page;
