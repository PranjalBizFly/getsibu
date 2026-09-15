/**
 * 286 · Metadata Migration — /migration/metadata-migration
 *
 * Angle (cluster: metadata-preservation): the migration workstream for metadata — which kinds of metadata can be
 * retained, and how a team decides which of its existing fields matter. Metadata Preservation (132) owns the ingestion
 * view, Migration Metadata Preservation (293) owns why metadata must not disappear, Media Metadata Management (22)
 * owns everyday metadata on the record.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how teams review and prioritise metadata fields before a migration; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 286,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Migration",
      lede: "Find out which kinds of metadata a move to GetSibu can retain, how to judge which of your existing fields deserve to come along, and how to plan for details that sit outside the usual kinds.",
      visual: { diagram: "migration-map", focus: "metadata" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 286 }, { kind: "pdf", page: 132 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Carrying the fields that matter, and knowing which ones those are",
      body: [
        [
          "Metadata such as EXIF, XMP, creators and custom keywords can be retained when a library migrates to GetSibu, and ",
          { text: "metadata preservation", page: 132 },
          " also names file paths among the details that can be kept. Together they give a migration team a concrete set of metadata kinds to plan around.",
        ],
        "Existing libraries rarely hold tidy metadata. Some fields were filled in with care for years, others served one project and were abandoned, and a few were repurposed for something their name no longer describes. Moving everything without judgement carries the noise along with the value, while moving too little discards knowledge that nobody can rebuild.",
        [
          "Choosing which fields matter is a workstream in its own right, finished before any transfer starts. The broader case for keeping information intact through a move is set out under ",
          { text: "migration metadata preservation", page: 293 },
          ".",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["EXIF, XMP, creators and custom keywords", "File paths as a record of origin", "A field inventory before transfer", "Usage decides what matters", "Gaps planned for, not discovered", "Decisions written down"],
      },
      highlight: {
        heading: "In practice",
        body: "A photography team lists every field in its old catalogue and finds that credits and keywords are used daily, while a “shoot code” field was abandoned long ago. Credits and keywords go into the plan; the shoot code is noted and left behind.",
        tags: ["Photography", "Library managers", "Planning"],
      },
      glance: {
        heading: "Metadata migration in brief",
        facts: [
          { label: "Area", value: "Migration" },
          { label: "Can be retained", value: "EXIF, XMP, creators and custom keywords" },
          { label: "Also preserved", value: "File paths", page: 132 },
          { label: "Confirmed by", value: "Migration Verification", page: 296 },
        ],
        actions: [{ kind: "route", path: "/migration", label: "More in Migration" }]
      },
      sources: [{ kind: "pdf", page: 286 }, { kind: "pdf", page: 132 }, { kind: "pdf", page: 293 }, { kind: "pdf", page: 296 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "field-review",
      eyebrow: "Step by step",
      heading: "Deciding which metadata fields are worth migrating",
      intro: "A field-by-field review turns “keep the metadata” into decisions someone can check.",
      steps: [
        { heading: "List every field", body: "Document every field the old system or file set uses, including custom fields that someone added for a single project and never removed.", icon: "document" },
        { heading: "See what is filled in", body: "Check which fields are populated and which appear in the searches, filters and reports people depend on; a field that is mostly empty is a weak candidate.", icon: "chart" },
        { heading: "Ask the people involved", body: "Library managers, producers and whoever answers for rights each know fields the others overlook, such as credit lines, licence notes or campaign codes.", icon: "users" },
        { heading: "Match against named kinds", body: "Set each valued field beside the kinds of metadata that can be retained, such as EXIF, XMP, creators, file paths and custom keywords, and list separately any field whose route is not yet clear.", icon: "tag" },
        { heading: "Tidy values at the source", body: "Retire codes nobody can explain and fill obvious gaps while the data is still in one place, instead of repairing them across a bigger library later.", icon: "filter" },
        { heading: "Record the outcome", body: "Write down what is kept, changed and left behind, so the records that arrive can be compared with an agreed list.", icon: "check", page: 296 },
      ],
      sources: [{ kind: "pdf", page: 286 }, { kind: "pdf", page: 132 }, { kind: "pdf", page: 296 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "field-kinds",
      eyebrow: "Field by field",
      heading: "How each kind of retained metadata earns its place",
      items: [
        {
          heading: "EXIF",
          summary: "Capture details written by a camera or phone.",
          icon: "camera",
          body: [
            "EXIF matters when a question is about how or when something was captured: the date of a shoot, the device, the settings chosen. For product and reportage photography those details can decide which image is usable, while exported social graphics may carry little or nothing. Judge how much weight EXIF deserves by the type of asset.",
          ],
        },
        {
          heading: "XMP",
          summary: "Descriptive and rights information stored by creative applications.",
          icon: "text",
          body: [
            "XMP is where captions, credits, keywords and custom schemas often sit, so it tends to hold the most human effort. Open a sample of files from different periods and tools before planning; it is common to find fields filled in by a workflow that was retired long ago.",
          ],
        },
        {
          heading: "Creators",
          summary: "Who made the work, which is not always who uploaded it.",
          icon: "user",
          body: [
            ["Creator details protect credit and tell colleagues who to ask about a piece of work. With ", { text: "asset attribution", page: 116 }, ", creators and contributors can remain associated with assets through a migration. Settle one form of each name first, or an agency name, a full name and a set of initials will look like three separate people."],
          ],
        },
        {
          heading: "Custom keywords",
          summary: "The vocabulary a team built for its own work.",
          icon: "tag",
          body: [
            ["Custom keywords usually encode what the organisation cares about most: products, campaigns, clients and markets. They are also often the least consistent field. Bring them across, then treat the move as the moment to align them with a ", { text: "scalable taxonomy", page: 8 }, " built from hierarchical tags and synonyms."],
          ],
        },
        {
          heading: "File paths",
          summary: "Where a file used to live, kept as information about it.",
          icon: "folder",
          body: [
            ["An old path can hold a client, a year or a status that nobody recorded anywhere else. Its value rises when folders are being ", { text: "remapped during the move", page: 287 }, ", since the path is then the remaining trace of how the previous structure described the file."],
          ],
        },
        {
          heading: "Information beyond the named kinds",
          summary: "The kinds above are examples, and some valued details may be stored elsewhere.",
          icon: "help",
          body: [
            "Internal ratings, usage notes or workflow states held only in an old system’s database are typical cases. Give them their own line in the plan and confirm how each will be handled, rather than assuming it will travel in the same way as a camera’s capture details or a creator field.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 286 }, { kind: "pdf", page: 132 }, { kind: "pdf", page: 116 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 287 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "who-decides",
      eyebrow: "Who decides",
      heading: "The people who know which metadata fields matter",
      tabs: [
        {
          label: "Library managers",
          heading: "A view of the whole field list",
          icon: "database",
          body: [
            "Whoever looks after the library can see which fields are populated, which duplicate each other under different names and which were invented for a single campaign. In a metadata migration their role is to propose the list and defend it against both hoarding and haste.",
          ],
          points: ["Field usage across the collection", "Duplicated and abandoned fields"],
        },
        {
          label: "Searchers",
          heading: "The details people reach for",
          icon: "search",
          body: [
            "Designers, producers and marketers seldom think in field names, but they know how they look for work: by campaign, by product, by photographer. Watching someone find a few real assets reveals more than asking them to rank a list of fields.",
            ["After the move, ", { text: "asset metadata search", page: 23 }, " lets them use those same details when a filename or folder is unknown."],
          ],
          points: ["Search habits as evidence", "Campaign, product and creator in practice"],
        },
        {
          label: "Rights and brand",
          heading: "The fields that prevent misuse",
          icon: "shield",
          body: [
            "Credit lines, licence notes, usage restrictions and embargo details can look minor in a spreadsheet and be decisive in practice. Whoever answers for rights and brand should review the list for information that stops an asset being used wrongly, even when it is rarely searched.",
          ],
          points: ["Rarely searched, highly consequential", "Restrictions worth planning for explicitly"],
        },
      ],
      sources: [{ kind: "pdf", page: 23 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about metadata migration",
      items: [
        {
          question: "How can a team test its metadata migration plan before the main transfer?",
          answer: "Move a small set of files chosen for awkward metadata, such as older XMP, unusual custom keywords and inconsistent creator names, then open what arrived and see whether each chosen field came through as intended. Surprises found at this scale cost little to resolve.",
        },
        {
          question: "What if two old fields hold the same information in a metadata migration?",
          answer: "Treat them as one field in the plan. Fields named “Photographer” and “Credit” often record the same thing entered by different teams, so decide which one wins and how conflicting values are settled before either comes across.",
        },
        {
          question: "Is a metadata migration worth the effort for a small library?",
          answer: "Usually. The review depends more on how many fields exist than on how many files there are, and a small collection’s credits and keywords are just as hard to reconstruct once they are gone.",
        },
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on carrying metadata across",
      variant: "compact",
      pages: [132, 293, 296, 116, 8, 287],
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
