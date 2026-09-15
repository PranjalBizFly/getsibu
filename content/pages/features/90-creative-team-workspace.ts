/**
 * 90 · Creative Team Workspace — /features/creative-team-workspace
 *
 * Angle (clusters: team-collaboration, creative-workflow): the shared workspace itself — one place where a team can
 * search, review, organise and collaborate around digital assets, what "shared" means, and how to set one up that people
 * use. Creative Team Collaboration (61) owns collaboration features in the library; One Source of Truth (10) owns the
 * shared-library outcome.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how creative teams set up and use a shared workspace; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 90,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Collaboration",
      lede: "What changes when a team’s searching, reviewing, organising and collaborating move into one shared workspace in GetSibu, and how to set that workspace up so people choose to work in it.",
      visual: { diagram: "timeline-review", focus: "comments" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 90 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "One place to search, review, organise and collaborate",
      body: [
        "GetSibu provides a shared workspace where teams can search, review, organise and collaborate around their digital assets. The four activities happen in one environment and on the same material, rather than each in a tool of its own.",
        "Creative work involves all four, and they are often spread across separate places. Files are organised on a drive, found through a colleague’s memory, reviewed over email and discussed in chat. Every move between those places sheds context: the reviewer does not see how the file was organised, the person searching does not see the discussion, and whoever organised the drive never learns what others failed to find.",
        [
          "Shared does not mean uniform. ",
          { text: "Creative asset permissions", page: 151 },
          " let organisations control who can access different areas of the library, so colleagues work in one environment while reaching the areas relevant to them. With everything in one place, ",
          { text: "a shared source of truth", page: 10 },
          " becomes possible, with everyone working from the same organised library.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Search, review, organise, collaborate", "One environment for the whole team", "Shared, with access by area", "Context kept between activities", "A workspace people choose to use"],
      },
      highlight: {
        heading: "In practice",
        body: "A designer finds last year’s event photography, reads the discussion that shaped the final selection and files the new shoot in the same folder structure, all within the workspace.",
        tags: ["Designers", "Producers", "Library managers"],
      },
      glance: {
        heading: "The workspace in brief",
        facts: [
          { label: "Area", value: "Collaboration" },
          { label: "Brings together", value: "Search, review, organisation and collaboration" },
          { label: "Across locations", value: "Remote Creative Collaboration", page: 88 },
          { label: "Flow of work", value: "Creative Workflow Management", page: 80 },
        ],
        actions: [{ kind: "route", path: "/features/collaboration", label: "More in Collaboration" }]
      },
      sources: [{ kind: "pdf", page: 90 }, { kind: "pdf", page: 151 }, { kind: "pdf", page: 10 }, { kind: "pdf", page: 88 }, { kind: "pdf", page: 80 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "activities",
      eyebrow: "Inside the workspace",
      heading: "The activities a workspace brings together, and what each relies on",
      columns: ["What the team does", "What GetSibu provides"],
      rows: [
        { label: "Search", cells: ["Finds assets by what they contain or what people remember about them", "Search through filenames, metadata, OCR, AI-generated tags, comments and semantic information"], page: 11 },
        { label: "Review", cells: ["Inspects work, discusses changes and confirms final assets", "A central location for creative review"], page: 69 },
        { label: "Organise", cells: ["Gives every asset a place and a consistent description", "Structured folders and scalable taxonomies"], page: 8 },
        { label: "Collaborate", cells: ["Talks about the work without leaving it", "Collaboration features directly inside the asset library"], page: 61 },
        { label: "Move around", cells: ["Switches between broad browsing and precise finding", "Library views, folders, tags, collections and search"], page: 29 },
      ],
      sources: [{ kind: "pdf", page: 90 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 69 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 61 }, { kind: "pdf", page: 29 }],
    },
    {
      kind: "before-after",
      id: "before-after",
      heading: "A team’s working week before and after a shared workspace",
      beforeLabel: "Activities in separate places",
      afterLabel: "One shared workspace",
      before: [
        "Files on drives, feedback in inboxes, decisions in chat",
        "Finding an asset depends on who remembers it",
        "Reviewers commenting on exported copies",
        "A folder structure only its creator follows",
        "New colleagues learning several tools at once",
      ],
      after: [
        "Search, review, organisation and discussion together",
        "Assets found through search and navigation",
        "Review carried out on the assets themselves",
        "Folders and tags the team shares",
        "One environment to learn",
      ],
      sources: [{ kind: "pdf", page: 90 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 29 }, { kind: "pdf", page: 69 }, { kind: "pdf", page: 8 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "setting-up",
      eyebrow: "Before inviting everyone",
      heading: "Setting up a workspace a team will actually use",
      items: [
        {
          heading: "Agree a structure before the bulk arrives",
          summary: "A workspace inherits the habits of whoever fills it first.",
          icon: "folder",
          body: [
            "If the first large upload lands in an improvised structure, everyone who follows copies it. Agreeing the top levels of folders and the main tag groups beforehand is far easier than reorganising thousands of assets later.",
            ["Teams bringing in an existing library do not have to start from nothing: with ", { text: "folder mapping", page: 133 }, ", existing folder structures can be mirrored or remapped during import."],
          ],
        },
        {
          heading: "Build around the requests people already make",
          summary: "The questions a team hears every week show what the workspace must make easy.",
          icon: "search",
          body: [
            "List the files colleagues ask for most often and check that each can be found in a couple of obvious ways. A workspace that answers the common requests well earns the habit; one that makes them harder sends people back to asking by message.",
            ["Once the workspace is in use, ", { text: "tag analytics", page: 186 }, " identify frequently used or searched tags, which shows whether the organisation matches the way people look."],
          ],
        },
        {
          heading: "Decide what is private and what is shared",
          summary: "A shared workspace still needs quieter corners for unfinished or sensitive work.",
          icon: "lock",
          body: [
            ["Early explorations, confidential projects and personnel material rarely belong in front of everyone. A ", { text: "default-deny model", page: 154 }, " keeps new folders private until access is explicitly granted, which makes it safer to create a space first and open it deliberately."],
          ],
        },
        {
          heading: "Give each activity an owner",
          summary: "Search, organisation, review and collaboration each need someone looking after them.",
          icon: "users",
          body: [
            "Workspaces decline when everybody is responsible for them. A library manager who keeps the taxonomy tidy, a lead who sets review habits and a team member who answers “where should this go?” questions keep the workspace coherent as it grows.",
          ],
        },
        {
          heading: "Look at how different groups use it",
          summary: "Uneven use shows where the workspace is not yet serving a team.",
          icon: "chart",
          body: [
            [{ text: "Creative team analytics", page: 199 }, " provide visibility into how different groups interact with the library. A group that rarely appears is a prompt to ask what it still does elsewhere, and why."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 133 }, { kind: "pdf", page: 186 }, { kind: "pdf", page: 154 }, { kind: "pdf", page: 199 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about the creative team workspace",
      items: [
        {
          question: "Does a shared workspace mean every team must organise its assets the same way?",
          answer: "Only where their work meets. A common structure at that level keeps search and navigation dependable for everyone; within their own areas, teams can be given more freedom, provided the shared layers stay intact.",
        },
        {
          question: "What should stay outside a shared creative team workspace?",
          answer: "Files that are not creative assets and never will be, such as timesheets or unrelated contracts, and conversations that are not about a particular piece of work. Keeping them out stops search results and asset discussions filling with material nobody is looking for.",
        },
        {
          question: "How should a creative team workspace sit alongside a project management tool?",
          answer: "Side by side, each doing its own job. Project tools track tasks, owners and dates; the workspace holds the assets and what was said and decided about them, with tasks pointing to the shared views of the assets they concern.",
        },
      ],
      sources: [{ kind: "pdf", page: 79 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on working in one shared space",
      variant: "compact",
      pages: [61, 80, 88, 29, 10, 151],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Build a Smarter Creative Workflow",
      conversionPage: 396,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 396 }],
    },
  ],
};

export default page;
