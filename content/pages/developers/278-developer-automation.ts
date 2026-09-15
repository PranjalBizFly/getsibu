/**
 * 278 · Developer Automation — /developers/developer-automation
 *
 * Angle (cluster workflow-automation): developers using APIs and webhooks together to automate repetitive asset
 * management routines — which routines, what each draws on, and how to judge whether one is worth automating.
 * 257 owns webhook-triggered workflows; 255 owns integrating single workflows into applications.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of automating routine work in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 278,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "API & Developers",
      lede: "Which repetitive asset management work developers can hand to software built on GetSibu’s APIs and webhooks, how to judge whether a routine deserves automating, and how the pieces come together in practice.",
      visual: { diagram: "api-flow" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 278 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Routine library work handed over to software",
      body: [
        [
          "Developers can use APIs and webhooks to automate repetitive asset management workflows. Requests let software carry out steps such as sending files or reading asset information, while ",
          { text: "webhook events can start downstream workflows", page: 257 },
          " when assets, comments, approvals or other supported events occur.",
        ],
        "Repetition hides in plain sight. Downloading approved files to upload them somewhere else, retyping a product code as a tag, copying a credit onto a website: each takes a minute, happens again and again, and is quietly prone to error. None of it calls for creative judgement, which makes it a natural job for software and a poor use of a skilled person’s attention.",
        [
          "Not every routine needs a developer. ",
          { text: "Automated media import", page: 129 },
          " reduces manual movement of files between storage locations, and ",
          { text: "watch folders", page: 128 },
          " can be scanned continuously so new content enters the workflow automatically. Developer automation fits where a routine runs through other software and needs logic of its own.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["APIs and webhooks together", "Repetitive workflows handed to software", "Judgement kept with people", "Built-in routes considered first", "Upkeep weighed against the saving"],
      },
      highlight: {
        heading: "In practice",
        body: "A library manager keeps a note of every task done twice in exactly the same way. The list becomes the starting point for the developers’ automation plans.",
        tags: ["Library managers", "Developers", "Operations"],
      },
      glance: {
        heading: "Developer automation in brief",
        facts: [
          { label: "Area", value: "API & Developers" },
          { label: "Uses", value: "APIs and webhooks" },
          { label: "Event-driven part", value: "Webhook Automation", page: 257 },
          { label: "Complete tools", value: "Custom Asset Applications", page: 279 },
        ],
        actions: [{ kind: "route", path: "/developers", label: "More in Developers" }]
      },
      sources: [{ kind: "pdf", page: 278 }, { kind: "pdf", page: 257 }, { kind: "pdf", page: 262 }, { kind: "pdf", page: 264 }, { kind: "pdf", page: 129 }, { kind: "pdf", page: 128 }, { kind: "pdf", page: 279 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "routines",
      eyebrow: "Routines and building blocks",
      heading: "Repetitive routines and what automating them draws on",
      intro: "Each routine pairs a starting point with the API capability it depends on.",
      columns: ["What starts it", "What it relies on"],
      rows: [
        { label: "Delivering finished files", cells: ["Work exported or delivered in another system", "External applications sending files into the library"], page: 262 },
        { label: "Classifying from known context", cells: ["A record in a planning or product system", "Tagging workflows built into an application"], page: 265 },
        { label: "Keeping another system current", cells: ["A schedule the team sets", "Asset information exposed for other systems"], page: 264 },
        { label: "Moving work on after sign-off", cells: ["An approval recorded in the library", "Approval events in production and workflow systems"], page: 267 },
        { label: "Checking what already exists", cells: ["A request for new material", "Asset search integrated into a workflow"], page: 263 },
      ],
      sources: [{ kind: "pdf", page: 262 }, { kind: "pdf", page: 265 }, { kind: "pdf", page: 264 }, { kind: "pdf", page: 267 }, { kind: "pdf", page: 263 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "worth-it",
      eyebrow: "Considerations",
      heading: "Judging whether a routine is worth automating",
      items: [
        {
          heading: "It follows the same steps every time",
          summary: "Routines full of exceptions are hard to automate well.",
          icon: "workflow",
          body: ["If the people doing a task keep saying “it depends”, its rules are not yet settled. Settle them first, or automate only the part that never varies."],
        },
        {
          heading: "Mistakes are easy to spot and undo",
          summary: "Start where an error is cheap to correct.",
          icon: "restore",
          body: ["Updating a record that can be corrected tomorrow is a safer first project than anything that publishes or removes material. Build confidence on routines whose mistakes are visible and reversible."],
        },
        {
          heading: "Judgement stays with people",
          summary: "Automation should remove chores, not decisions.",
          icon: "approval",
          body: [["", { text: "AI-powered asset management", page: 45 }, " pairs automated analysis with human approval, and that balance is worth copying: let software prepare and move work, and leave approvals and creative choices with the people accountable for them."]],
        },
        {
          heading: "Its inputs can be trusted",
          summary: "An automation is only as dependable as the data it starts from.",
          icon: "database",
          body: ["A campaign name spelt three ways in a planning system becomes three inconsistent tags once software copies it across. Tidy the source, or add a check, before automating anything that depends on it."],
        },
        {
          heading: "The saving outlasts the upkeep",
          summary: "Every automation needs looking after, so the routine must justify it.",
          icon: "gauge",
          body: [["Automations break when tools, folders or processes change. Weigh the effort of the routine against the effort of keeping its automation working, and favour routines that are frequent, stable and tedious. Done well, ", { text: "automation helps reduce repetitive work", page: 356 }, " associated with tagging, organising and locating assets."]],
        },
      ],
      sources: [{ kind: "pdf", page: 45 }, { kind: "pdf", page: 356 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "Course recordings handled without weekly copying",
      team: "An education team",
      situation: "A university media team records lectures and prepares course visuals. Every week, staff upload recordings, tag each one with its course code and copy details into the learning platform by hand.",
      steps: [
        { heading: "The routine is written down", body: "The team lists its weekly steps and confirms they are identical for every course apart from the course code and the lecturer." },
        { heading: "Recordings are sent in", body: ["When the recording system finishes a lecture, a small service sends the file through the ", { text: "asset upload API", page: 262 }, " instead of waiting for a member of staff."] },
        { heading: "Course codes become tags", body: ["The service takes the course code from the timetable system and applies it through a ", { text: "tagging workflow", page: 265 }, " built into the application, using the library’s agreed vocabulary."] },
        { heading: "People keep the checks", body: "A member of the media team still reviews each week’s recordings before anything is shared with students, because quality questions need a person." },
        { heading: "Course pages stay current", body: ["A scheduled job reads the ", { text: "asset information the API can expose", page: 264 }, " and updates course pages with details of the latest recordings."] },
      ],
      outcome: "Staff no longer spend part of every week copying and tagging, and that time goes into preparing course visuals instead.",
      link: { page: 237, label: "GetSibu for Education Teams" },
      sources: [{ kind: "pdf", page: 262 }, { kind: "pdf", page: 265 }, { kind: "pdf", page: 264 }, { kind: "pdf", page: 237 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about developer automation",
      items: [
        {
          question: "When does developer automation need webhooks rather than scheduled requests alone?",
          answer: ["When a routine should begin because something happened rather than because a certain time came round. ", { text: "Webhook automation", page: 257 }, " covers starting work from library activity, while scheduled requests suit routines that only need to run periodically."],
        },
        {
          question: "How can a team tell that an automation built on the GetSibu API is still working?",
          answer: "Give it a visible result, such as an updated record or a new task, and check that the result keeps appearing. An automation that has stopped looks exactly like a quiet week.",
        },
        {
          question: "What should a developer automation do when a step fails partway through?",
          answer: "Stop and report which items it finished and which it did not, so a person can complete the rest without doing anything twice. Carrying on quietly after a failure is how half-finished work goes unnoticed.",
        },
      ],
      sources: [{ kind: "pdf", page: 257 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on automating asset management",
      variant: "compact",
      pages: [257, 262, 265, 264, 279, 356],
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
