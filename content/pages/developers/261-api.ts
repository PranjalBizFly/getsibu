/**
 * 261 · GetSibu API — /developers/api
 *
 * Angle (cluster api-platform, primary): the overview of programmatic access for developers and technology teams —
 * the forms that access takes, what every request depends on, and the terms used across the API topics.
 * 253 owns the interface-as-client idea, 254 custom experiences, 255 the workflows integrated.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of programmatic access in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 261,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "API & Developers",
      lede: "A starting point for developers and technology teams: the forms programmatic access to GetSibu can take, what each request relies on, and the vocabulary that runs through the API topics.",
      visual: { diagram: "api-flow" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 261 }, { kind: "pdf", page: 275 }, { kind: "pdf", page: 276 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Software taking part in the work of the library",
      body: [
        "The GetSibu API provides programmatic access to the digital asset platform for developers and technology teams. Rather than a person carrying out every action by hand, software can join in: sending files into the library, finding assets and working with the information kept about them.",
        "That matters because a creative library rarely stands on its own. Files are produced in editing and design tools, product and campaign details sit in business systems, and finished work leaves through websites and distribution channels. Every hand-off that depends on somebody copying something across can be forgotten, delayed or done a little differently each time.",
        [
          "GetSibu is ",
          { text: "designed as an API-first platform", page: 253 },
          ", so software reaches the same capabilities the interface relies on. From there the subject divides: the ",
          { text: "Developer API", page: 255 },
          " is about bringing individual workflows into applications a team already has, while ",
          { text: "custom asset applications", page: 279 },
          " are complete tools built around the asset infrastructure.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Programmatic access to the platform", "Developers and technology teams", "Authenticated requests", "Tenant context where it applies", "Events as well as requests", "Documentation before building"],
      },
      highlight: {
        heading: "In practice",
        body: "A technology team lists the library routines people repeat every week and marks the ones software could carry out, well before anyone chooses what to build.",
        tags: ["Developers", "IT teams", "Planning"],
      },
      glance: {
        heading: "The GetSibu API in brief",
        facts: [
          { label: "Area", value: "API & Developers" },
          { label: "Intended for", value: "Developers and technology teams" },
          { label: "Design", value: "API-First DAM", page: 254 },
          { label: "Requests", value: "API Authentication", page: 256 },
        ],
        actions: [{ kind: "route", path: "/developers", label: "More in Developers" }]
      },
      sources: [{ kind: "pdf", page: 261 }, { kind: "pdf", page: 262 }, { kind: "pdf", page: 263 }, { kind: "pdf", page: 264 }, { kind: "pdf", page: 253 }, { kind: "pdf", page: 254 }, { kind: "pdf", page: 255 }, { kind: "pdf", page: 256 }, { kind: "pdf", page: 279 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "forms",
      eyebrow: "Forms of access",
      heading: "Shapes programmatic access tends to take",
      intro: "These forms differ in how long they run and how much looking after they need.",
      items: [
        { heading: "One-off scripts", body: "A short program does a single job, such as sending a closed project’s finished files into the library, and is retired once that job is done.", icon: "code", points: ["Written for one task", "Nothing left running afterwards"], page: 262 },
        { heading: "Scheduled jobs", body: "A job runs at set times to keep another system in step with the library, for instance reading the asset information that a catalogue or intranet depends on.", icon: "clock", points: ["Runs on a timetable", "Keeps another system current"], page: 264 },
        { heading: "Features in existing software", body: "A library capability appears inside a tool people already open every day, so they stop switching applications to reach it.", icon: "plug", points: ["Search or upload where people work", "One workflow at a time"], page: 255 },
        { heading: "Event-driven services", body: "A small service waits for activity in the library and begins work elsewhere when it happens, instead of checking on a timetable.", icon: "webhook", points: ["Starts when something happens", "No repeated checking"], page: 257 },
        { heading: "Routine automation", body: "Asset management routines that follow the same steps every time are handed over to software that combines APIs and webhooks.", icon: "workflow", points: ["Repetitive steps taken off people", "Rules written down once"], page: 278 },
        { heading: "Complete applications", body: "A purpose-built tool is designed around the asset infrastructure for one department or process whose needs are particular to it.", icon: "layers", points: ["A product in its own right", "Needs an owner for its whole life"], page: 279 },
      ],
      sources: [{ kind: "pdf", page: 262 }, { kind: "pdf", page: 264 }, { kind: "pdf", page: 255 }, { kind: "pdf", page: 257 }, { kind: "pdf", page: 278 }, { kind: "pdf", page: 279 }, EXPLAINS],
    },
    {
      kind: "layers",
      id: "request-path",
      eyebrow: "Behind each request",
      heading: "What every programmatic request relies on",
      intro: "Whatever form the access takes, the same foundations stand behind it.",
      layers: [
        { label: "Credentials", body: "Developers can authenticate API requests using supported authentication credentials, and every integration depends on handling them with care.", page: 275 },
        { label: "Tenant context", body: "Where an organisation runs several isolated environments, API access can include tenant context so those environments remain properly separated.", page: 276 },
        { label: "The API layer", body: "The layer that receives requests is designed to scale independently, in support of application and integration workloads.", page: 315 },
        { label: "The wider platform", body: "Requests are answered by a layered architecture in which the API sits among clients, edge services, search infrastructure and storage.", page: 301 },
      ],
      sources: [{ kind: "pdf", page: 275 }, { kind: "pdf", page: 276 }, { kind: "pdf", page: 315 }, { kind: "pdf", page: 301 }],
    },
    {
      kind: "accordion",
      id: "terms",
      eyebrow: "Key terms",
      heading: "Words that recur across the API topics",
      items: [
        {
          heading: "Programmatic access",
          summary: "Software, rather than a person, carries out an action on the platform.",
          icon: "code",
          body: [
            "The action might be identical to one a colleague performs by hand. What differs is that nobody watches it happen, so the rules it runs within have to be settled in advance.",
            ["For that reason, API requests to GetSibu use ", { text: "authenticated access", page: 256 }, ", keeping external applications within appropriate security boundaries."],
          ],
        },
        {
          heading: "Credentials",
          summary: "What software presents so that its requests can be authenticated.",
          icon: "key",
          body: [
            "Credentials do for software what a password does for a person, and they deserve at least the same care. Platforms differ in the kinds they accept, so nothing should be assumed from another product.",
            ["The ", { text: "API documentation", page: 273 }, " is where developers find the information required to build integrations against the platform."],
          ],
        },
        {
          heading: "Tenant",
          summary: "An isolated environment on a shared platform, such as the library of one client.",
          icon: "building",
          body: [
            ["Agencies and similar organisations often need several environments that must never mix. ", { text: "Multi-tenant digital asset management", page: 160 }, " is GetSibu’s design for organisations in that position."],
          ],
        },
        {
          heading: "Webhook",
          summary: "A message the platform sends to software that asked to hear when something happens.",
          icon: "webhook",
          body: [
            ["A request travels from your software to the platform; a webhook travels the other way. GetSibu offers webhooks alongside its REST API capabilities and developer tooling, and ", { text: "Webhooks", page: 252 }, " explains the mechanism in general terms."],
          ],
        },
        {
          heading: "Asset information",
          summary: "The technical and descriptive details kept alongside a file.",
          icon: "database",
          body: [
            ["Other systems often need those details more than the file itself: a print catalogue wants a caption, and a rights register wants the name of whoever made the work. That is the territory of the ", { text: "asset metadata API", page: 264 }, "."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 256 }, { kind: "pdf", page: 273 }, { kind: "pdf", page: 160 }, { kind: "pdf", page: 388 }, { kind: "pdf", page: 264 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about the GetSibu API",
      items: [
        {
          question: "Who besides developers gets involved when software is connected to the GetSibu API?",
          answer: "Usually anyone responsible for systems that touch the library: IT teams running scheduled jobs, platform teams maintaining internal tools and security teams reviewing what connects. Developers build the connections, while decisions about them tend to involve all three.",
        },
        {
          question: "Is the GetSibu API only worth using for large engineering projects?",
          answer: "No. A single developer writing a short script uses programmatic access just as much as a team building a complete application. What changes with size is how much care the result needs once it is running.",
        },
        {
          question: "What should happen when a GetSibu API script has done its job?",
          answer: ["Switch it off on purpose. Stop it running, remove it from wherever it was scheduled and leave a note of what it did, so nobody later has to guess whether it still touches the library. ", { text: "API security", page: 277 }, " explains why forgotten automated access deserves attention."],
        },
        {
          question: "Where should a team begin before building on the GetSibu API?",
          answer: ["With the task rather than the technology: describe what should happen and which system sets it off. Then turn to ", { text: "API documentation", page: 273 }, " to confirm how that task can be built."],
        },
      ],
      sources: [{ kind: "pdf", page: 261 }, { kind: "pdf", page: 277 }, { kind: "pdf", page: 273 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on building with the GetSibu API",
      variant: "compact",
      pages: [255, 279, 273, 253, 276, 388],
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
