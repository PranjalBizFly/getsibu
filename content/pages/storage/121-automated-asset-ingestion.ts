/**
 * 121 · Automated Asset Ingestion — /storage/automated-asset-ingestion
 *
 * Angle (cluster: ingestion, primary): how assets enter GetSibu from connected storage sources and direct
 * uploads without the team rebuilding its storage workflow, what ingestion covers beyond a transfer, and
 * where automation stops and team decisions begin. Siblings own the individual routes.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of ingestion practice; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 121,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Storage & Ingestion",
      lede: "Understand how assets reach GetSibu from connected storage sources and direct uploads, what happens to them on the way in, and why a team can start a library without first rebuilding the way it stores files.",
      visual: { diagram: "ingest-pipeline", focus: "sources" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 121 }, { kind: "pdf", page: 143 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Assets arrive from where they already live",
      body: [
        "GetSibu supports asset ingestion from two directions: connected storage sources and direct uploads. Because storage a team already uses can be connected, existing libraries can come into the platform without anyone manually rebuilding the whole storage workflow around it.",
        "Ingestion is a wider idea than uploading. An upload moves a file from one place to another; ingestion also covers what the receiving system does next, such as reading the information a file carries, creating a preview and preparing it to be found. A file that has been copied somewhere but never ingested is stored, yet nobody can search for it or tell what it shows without opening it.",
        "The rebuild problem is practical rather than technical. Production teams, marketing departments and agencies spend years settling where exports are saved, how deliveries are named and who writes to which location. A library that asks people to abandon those arrangements before it is useful competes with habits that still work, and the old locations tend to carry on beside it.",
        [
          "A collection that already exists is the job of ",
          { text: "bulk asset import", page: 130 },
          ", while ",
          { text: "digital asset import", page: 135 },
          " looks at how several routes can feed one library without getting in each other’s way.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Connected storage sources", "Direct uploads", "Ingestion is more than a transfer", "Storage workflows left in place", "Processing after arrival", "A library for authorised members"],
      },
      highlight: {
        heading: "In practice",
        body: "A marketing team connects the storage where years of campaign files already sit, instead of copying them into a new folder scheme, and adds occasional files from partners as direct uploads.",
        tags: ["Marketing", "Library managers", "Existing storage"],
      },
      glance: {
        heading: "Where ingestion fits",
        facts: [
          { label: "Area", value: "Storage & Ingestion" },
          { label: "Routes in", value: "Connected storage sources and direct uploads" },
          { label: "Followed by", value: "Asset Processing", page: 143 },
          { label: "Part of", value: "Creative Asset Lifecycle", page: 107 },
        ],
        actions: [{ kind: "route", path: "/storage", label: "More in Storage & Ingestion" }]
      },
      sources: [{ kind: "pdf", page: 121 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 130 }, { kind: "pdf", page: 135 }, { kind: "pdf", page: 107 }, EXPLAINS],
    },
    {
      kind: "workflow",
      id: "path-in",
      eyebrow: "From source to library",
      heading: "The route an asset takes from storage to search",
      stages: [
        { label: "Starting point", body: "An asset begins either in storage the team already uses and has connected to GetSibu, or on a person’s computer, ready to be uploaded directly." },
        { label: "Arrival", body: "The file is transferred into GetSibu, whichever route brought it there." },
        { label: "Processing", body: "Metadata extraction, thumbnail generation and AI-related processing run on the new asset, and tags can be suggested during this stage.", page: 143 },
        { label: "Indexing", body: "The metadata available for the asset is processed, adding it to an indexed representation of the library that search and organisation work from.", page: 21 },
        { label: "Availability", body: "The resulting library is made available to the team members who are authorised to use it." },
      ],
      sources: [{ kind: "pdf", page: 121 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 21 }, { kind: "pdf", page: 2 }],
    },
    {
      kind: "tabs",
      id: "roles",
      eyebrow: "Who it affects",
      heading: "What ingestion asks of the people around a library",
      surface: "muted",
      tabs: [
        {
          label: "Contributors",
          heading: "Adding work without learning a new filing system",
          icon: "upload",
          body: [
            "Designers, photographers and editors want their work to reach the library without a round of extra administration. What matters to them is that the route in is short and that they are not asked to retype what their files already record.",
            ["For a handful of files, a direct upload is the obvious choice, because ", { text: "drag and drop", page: 127 }, " needs no integration to be configured first. Material sitting in storage that has been connected does not have to be uploaded again by each person who made it."],
          ],
          points: ["A short route for a few files", "No re-uploading from connected storage"],
        },
        {
          label: "Library managers",
          heading: "Shaping what arrives instead of typing it in",
          icon: "tag",
          body: [
            ["For whoever looks after the library, ingestion sets the starting quality of every record. Details such as EXIF, XMP, file paths, creators and custom keywords ", { text: "can become part of the asset record", page: 22 }, ", so descriptions written in earlier tools are not lost at the door."],
            "Their effort shifts from data entry to judgement: checking which suggested tags belong, deciding how the structure should look and noticing when a source is bringing in material that should have stayed behind.",
          ],
          points: ["Recorded details kept with the asset", "Time spent on decisions, not data entry"],
        },
        {
          label: "IT and operations",
          heading: "Connecting storage rather than replacing it",
          icon: "server",
          body: [
            "Technical teams tend to judge a new platform by how much existing infrastructure it forces them to change, and by how many new routes they will have to look after. Keeping the list of connected locations short and documented makes both questions easier to answer.",
            ["Where assets originate in other software, the ", { text: "asset upload API", page: 262 }, " allows external applications to send files into the GetSibu environment, so an in-house tool can become one more route into the same library."],
          ],
          points: ["A documented list of connected locations", "Applications as another route in"],
          link: { page: 261, label: "GetSibu API" },
        },
      ],
      sources: [{ kind: "pdf", page: 127 }, { kind: "pdf", page: 121 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 2 }, { kind: "pdf", page: 262 }, { kind: "pdf", page: 261 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "automation",
      eyebrow: "Where automation stops",
      heading: "What runs by itself at ingestion and what stays a team decision",
      items: [
        {
          heading: "Processing needs no manual trigger",
          summary: "Reading what a file carries and preparing it for search is not left waiting for someone’s spare time.",
          icon: "zap",
          body: [
            "Once assets are imported, GetSibu can automatically process the media. That matters most on the day a large collection arrives, because cataloguing by hand is slowest exactly when the volume is highest, and a backlog started on the first day is hard to clear.",
          ],
        },
        {
          heading: "Continuous intake where material keeps coming",
          summary: "Some locations can feed the library without anyone starting each transfer.",
          icon: "refresh",
          body: [
            ["Watch folders can be scanned continuously, so that content newly added to them can enter the GetSibu workflow automatically. That suits a location receiving a regular stream of exports or deliveries. The related aim of ", { text: "automated media import", page: 129 }, " is to reduce the manual movement of files between storage locations."],
          ],
        },
        {
          heading: "Suggested tags remain open to review",
          summary: "Suggestions reduce classification work, and authorised users can still review, approve or override them.",
          icon: "sparkles",
          body: [
            ["Tags suggested during processing can be looked over like any other first draft. Teams can ", { text: "approve suggestions in bulk", page: 47 }, ", which keeps review manageable after a big arrival, and authorised users can override a tag whenever it does not match the intended taxonomy."],
          ],
        },
        {
          heading: "Choosing which sources to connect",
          summary: "Not every old location deserves a permanent place in the library.",
          icon: "database",
          body: [
            "Old project drives, personal folders and abandoned exports all hold files. Connecting everything imports the clutter with the value; connecting too little leaves useful material out of reach of search. A short inventory of locations, noting which are still written to and which are effectively archives, turns the choice into a deliberate one.",
            "Where the same project sits in more than one location, deciding beforehand which copy is the reference saves a clean-up later.",
          ],
        },
        {
          heading: "Deciding who sees newly ingested areas",
          summary: "A central library raises access questions that scattered storage often answered by accident.",
          icon: "lock",
          body: [
            ["A folder nobody could find was, in effect, private. Once material is gathered in one place, access has to be set on purpose. In GetSibu, ", { text: "new folders can remain private", page: 154 }, " until access is explicitly granted, which gives a team time to decide who belongs in a newly created area."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 2 }, { kind: "pdf", page: 128 }, { kind: "pdf", page: 129 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 47 }, { kind: "pdf", page: 48 }, { kind: "pdf", page: 154 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about automated asset ingestion",
      items: [
        {
          question: "Can a newly ingested asset be found in search straight away?",
          answer: ["Not necessarily at the moment it arrives. ", { text: "Media processing status", page: 145 }, " helps teams tell an asset that has uploaded successfully apart from one that is fully indexed and searchable."],
        },
        {
          question: "Do we have to stop using our current storage during automated asset ingestion?",
          answer: ["Not while content comes in. When ingestion is part of a move, GetSibu’s ", { text: "migration workflow", page: 292 }, " is designed to let organisations keep using existing storage while content is indexed in the background."],
        },
        {
          question: "Who decides which people can add assets during ingestion?",
          answer: ["The organisation does. ", { text: "Creative asset governance", page: 114 }, " defines who can upload, edit, approve, download and manage assets, so contribution can be opened to the people who need it and no wider."],
        },
        {
          question: "Where does ingestion sit in the life of a creative asset?",
          answer: "At the beginning. Ingestion comes first among the stages an asset’s lifecycle can include, ahead of metadata processing, AI tagging, review, approval, distribution and archival.",
        },
      ],
      sources: [{ kind: "pdf", page: 145 }, { kind: "pdf", page: 292 }, { kind: "pdf", page: 114 }, { kind: "pdf", page: 107 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on bringing assets into GetSibu",
      variant: "compact",
      pages: [127, 128, 130, 135, 143, 107],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
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
