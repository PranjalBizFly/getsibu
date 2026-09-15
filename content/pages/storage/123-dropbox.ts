/**
 * 123 · Dropbox Integration — /storage/dropbox (also serves merged 243)
 *
 * HELD draft (claim: storage-sources). Angle: Dropbox as the place where creative work changes hands (deliveries,
 * job folders, exchanges with freelancers and clients); connecting it centralises that content and improves
 * searchability. No setup steps, authentication, sync behaviour, file types, permission translation or limits.
 * page 284 owns moving off Dropbox with metadata and structure; this page owns connecting it.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how creative teams exchange and keep work in shared folders; states no GetSibu or Dropbox capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 123,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Storage & Ingestion",
      lede: "See what connecting Dropbox offers a team whose work arrives as project folders and deliveries from collaborators, and what to settle so that centralising it makes the material easier to find.",
      visual: { diagram: "connector-flow", label: "Dropbox" },
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 123 }, { kind: "pdf", page: 243 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Deliveries and job folders, centralised and searchable",
      body: [
        "Dropbox libraries can be connected to GetSibu to centralise creative assets and improve searchability. For a team that has relied on Dropbox for years, the integration helps bring the content stored there into one library.",
        "Dropbox is often where creative work changes hands. Photographers deliver selects into a folder, freelancers return artwork the same way, and agencies exchange drafts with clients in folders set up for each job. Over time the account turns into an archive arranged by who sent what and when, which records how work was exchanged rather than how anyone will look for it later.",
        "Storing by job answers one question well: where is everything for this project? It struggles with the questions that come afterwards. Which shoots featured the new packaging? Where is the illustration a freelancer made for another client two years ago? Answering them means opening folders on the strength of someone’s memory.",
        [
          "Centralising changes the unit of search from the folder to the library. Bringing assets together is meant to reduce the confusion of ",
          { text: "multiple storage locations and disconnected versions of the same file", page: 6 },
          ", and teams can ",
          { text: "search across the whole creative library", page: 16 },
          " instead of opening folders one at a time.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Dropbox libraries connected to GetSibu", "Content centralised in one library", "Better searchability", "Folders shaped by exchange, not reuse", "Search across the library, not per job"],
      },
      highlight: {
        heading: "In practice",
        body: "An agency account director needs past product photography for a pitch. Instead of opening a dozen delivery folders named after photographers and dates, she searches the central library for what the images show.",
        tags: ["Agencies", "Account teams", "Deliveries"],
      },
      glance: {
        heading: "The Dropbox integration in brief",
        facts: [
          { label: "Area", value: "Storage & Ingestion" },
          { label: "Connects", value: "Dropbox libraries" },
          { label: "Aim", value: "Centralised, more searchable assets" },
          { label: "Central library", value: "Centralised Creative Asset Library", page: 6 },
        ],
      },
      sources: [{ kind: "pdf", page: 123 }, { kind: "pdf", page: 243 }, { kind: "pdf", page: 6 }, { kind: "pdf", page: 16 }, EXPLAINS],
    },
    {
      kind: "before-after",
      id: "exchange-or-library",
      eyebrow: "What centralising changes",
      heading: "Work kept in exchange folders compared with a central library",
      beforeLabel: "Assets left in job and delivery folders",
      afterLabel: "Assets centralised in GetSibu",
      before: ["Filed by who delivered them and when", "Found by remembering the project", "Feedback sent back in separate messages", "Credits known only to whoever received the files"],
      after: ["Held in one central library", "Searched across the whole library", "Comments kept on the asset itself", "Creators able to stay associated with their work"],
      sources: [{ kind: "pdf", page: 123 }, { kind: "pdf", page: 6 }, { kind: "pdf", page: 16 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 116 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "Years of supplier deliveries turned into a library the agency can search",
      team: "An advertising agency",
      situation: "An advertising agency has received photography and illustration through Dropbox for many years, one folder per job and supplier. When a pitch calls for existing imagery, account teams ask the art buyer, the only person who remembers where things are.",
      steps: [
        {
          heading: "The Dropbox library is connected",
          body: "The agency connects its Dropbox libraries to GetSibu, centralising years of supplier work alongside its current campaigns.",
        },
        {
          heading: "The pitch team describes what it needs",
          body: ["An account manager ", { text: "describes the imagery in natural language", page: 18 }, ", such as people cooking outdoors at dusk, rather than guessing which supplier’s folder might hold it."],
        },
        {
          heading: "Repeated deliveries come to light",
          body: ["Where a photographer sent the same selects twice, ", { text: "duplicate detection", page: 40 }, " identifies the identical files, and the art buyer decides which copy the pitch should use."],
        },
        {
          heading: "Terms are checked before reuse",
          body: "Before any image goes into the pitch, the art buyer confirms what its licence allows, since supplier work is often cleared only for the job it was commissioned for.",
        },
      ],
      outcome: "The art buyer stops acting as the agency’s search engine, and past deliveries begin contributing to new pitches instead of waiting in folders nobody opens.",
      link: { page: 219, label: "GetSibu for Advertising Agencies" },
      sources: [{ kind: "pdf", page: 123 }, { kind: "pdf", page: 18 }, { kind: "pdf", page: 40 }, { kind: "pdf", page: 219 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "accordion",
      id: "decisions",
      eyebrow: "Decisions to make",
      heading: "What to settle about Dropbox content before centralising it",
      items: [
        {
          heading: "Finished deliveries or everything exchanged",
          summary: "Exchange folders often mix final work with contact sheets, alternatives and superseded drafts.",
          icon: "layers",
          body: [
            "A delivery folder may hold the chosen selects alongside every option that was considered along the way. Centralising all of it makes the library larger without necessarily making it more useful.",
            ["Knowing which folders represent finished work helps. Once material is in the library, ", { text: "asset statuses", page: 102 }, " help teams distinguish drafts, approved content and other workflow states."],
          ],
        },
        {
          heading: "Work that comes with usage terms",
          summary: "Commissioned photography and illustration are usually licensed for particular uses, and the terms rarely live in the files.",
          icon: "document",
          body: [
            "Licences for supplier work tend to sit in contracts and emails. Centralising the work without its terms makes it easier to reuse and, by the same token, easier to misuse. Record what may be done with outside material before it becomes widely discoverable.",
            ["Structured tags such as ", { text: "brand guardrail tags", page: 105 }, " can identify assets that meet specific organisational requirements, which is one way to make cleared material stand out."],
          ],
        },
        {
          heading: "Folders that belong to clients",
          summary: "Some folders in an agency’s account hold a client’s own material rather than the agency’s work.",
          icon: "briefcase",
          body: [
            "Agencies frequently work inside folders that clients created and shared with them. Before centralising, separate the agency’s work from client-owned material, and agree with each client what should become part of a library.",
            ["Where an agency looks after several clients, ", { text: "client tenant isolation", page: 161 }, " allows each client environment to remain logically isolated from the others."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 102 }, { kind: "pdf", page: 105 }, { kind: "pdf", page: 161 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about the Dropbox integration",
      items: [
        {
          question: "Why centralise creative content that is already kept safely in Dropbox?",
          answer: "Because kept and findable are different things. Content can sit perfectly well in project folders and still be out of reach for anyone who does not know which folder to open; centralising it is about searchability across the whole library.",
        },
        {
          question: "Does the Dropbox integration suit freelancers as well as agencies?",
          answer: ["The need exists at any size. ", { text: "Freelancers can use GetSibu", page: 226 }, " to organise personal creative libraries and quickly locate reusable assets, and years of client deliveries are often exactly that library."],
        },
        {
          question: "What makes Dropbox content easier to find once it is centralised?",
          answer: ["Search stops depending on the delivery folder a file happened to land in. People can ", { text: "search metadata alongside tags and extracted content", page: 23 }, ", which gives other ways in when a folder is named after a supplier and a date."],
        },
        {
          question: "Who should look after Dropbox content once it has been centralised?",
          answer: "Someone who knows how the team reuses past work, often an art buyer, producer or library manager. Suppliers and account teams know where deliveries came from, but a single owner keeps descriptions and statuses consistent.",
        },
      ],
      sources: [{ kind: "pdf", page: 123 }, { kind: "pdf", page: 226 }, { kind: "pdf", page: 23 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on centralising creative work",
      variant: "compact",
      pages: [6, 16, 18, 23, 40, 219],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
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
