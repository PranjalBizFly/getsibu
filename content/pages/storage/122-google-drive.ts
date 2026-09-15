/**
 * 122 · Google Drive Integration — /storage/google-drive (also serves merged 242)
 *
 * HELD draft (claim: storage-sources). Angle: Google Drive as the organisation-wide drive where creative work
 * sits among everyday documents; connecting it brings those assets into GetSibu and indexes them for
 * discovery. No setup steps, authentication, sync behaviour, file types, permission translation or limits.
 * page 283 owns moving off the drive; this page owns connecting it as a source.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how creative material accumulates in shared organisational drives; states no GetSibu or Google Drive capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 122,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Storage & Ingestion",
      lede: "What linking Google Drive to GetSibu changes for a creative team, which kinds of material gain most from it, and what to settle before a busy shared drive becomes a source for the library.",
      visual: { diagram: "connector-flow", label: "Google Drive" },
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 122 }, { kind: "pdf", page: 242 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Creative work from the drive everyone already uses",
      body: [
        "Teams can connect Google Drive to bring existing creative assets into GetSibu, and connected sources can be indexed so that people discover that content through the GetSibu experience. The integration lets an organisation connect cloud storage it already has and make the creative assets in it available through GetSibu.",
        "Google Drive often becomes a creative store by default rather than by design. It is where the rest of the organisation already works, so campaign exports land beside the brief, event photographs sit in a folder made for the event, and the final video is saved next to the budget that paid for it. Each choice is sensible; together they leave creative material spread across folders named for meetings, projects and people.",
        "A general-purpose drive is arranged around the files people create and share every day. Finding an image by what it shows, or a presentation by a phrase inside it, usually means knowing the right folder and opening files until the right one appears. That works for the person who saved the file and for almost nobody else.",
        [
          "Indexing is what changes the situation. As assets enter GetSibu, ",
          { text: "creative asset indexing", page: 21 },
          " prepares them for search and organisation, and ",
          { text: "creative asset search", page: 11 },
          " can draw on filenames, metadata, OCR, AI-generated tags and comments to find them.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Google Drive connected as a source", "Existing creative assets brought in", "Connected sources indexed for discovery", "Creative files among everyday documents", "Found by content, not only by folder"],
      },
      highlight: {
        heading: "In practice",
        body: "A marketing team whose campaign exports are scattered through departmental folders connects Google Drive, so a designer can look for last spring’s launch imagery by searching rather than by asking who created the folder.",
        tags: ["Marketing", "Designers", "Shared drives"],
      },
      glance: {
        heading: "The Google Drive integration in brief",
        facts: [
          { label: "Area", value: "Storage & Ingestion" },
          { label: "Connects", value: "Existing Google Drive storage" },
          { label: "Leads to", value: "Discovery through GetSibu" },
          { label: "Wider topic", value: "Automated Asset Ingestion", page: 121 },
        ],
      },
      sources: [{ kind: "pdf", page: 122 }, { kind: "pdf", page: 242 }, { kind: "pdf", page: 21 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 121 }, EXPLAINS],
    },
    {
      kind: "workflow",
      id: "drive-to-discovery",
      eyebrow: "Along the way",
      heading: "From a connected drive to an asset people can find",
      stages: [
        { label: "Connection", body: "Google Drive is connected to GetSibu as existing cloud storage, so the creative assets it holds can be made available through the library." },
        { label: "Arrival", body: "Existing creative assets come into GetSibu, which spares teams from manually rebuilding their entire storage workflow around a new library.", page: 121 },
        { label: "Indexing", body: "Connected content can be indexed, so search works from a prepared representation of the material instead of a drive opened folder by folder.", page: 21 },
        { label: "Discovery", body: "People find what they need through the GetSibu experience, narrowing large result sets with filters such as format and date.", page: 19 },
      ],
      sources: [{ kind: "pdf", page: 242 }, { kind: "pdf", page: 122 }, { kind: "pdf", page: 121 }, { kind: "pdf", page: 21 }, { kind: "pdf", page: 19 }],
    },
    {
      kind: "tabs",
      id: "material",
      eyebrow: "By kind of material",
      heading: "What a shared drive tends to hold, and how each becomes findable",
      tabs: [
        {
          label: "Presentations",
          heading: "Decks whose best content is on slide twelve",
          icon: "document",
          body: [
            "Pitch decks, brand presentations and campaign reviews pile up in shared drives, often in near-identical versions. What someone remembers is usually a chart or a phrase rather than a filename.",
            ["Because GetSibu ", { text: "extracts text from images, PDFs, presentations and screenshots", page: 15 }, ", words inside a deck can become searchable once it is part of the library."],
          ],
          points: ["Remembered phrases, not filenames", "Text inside decks made searchable"],
        },
        {
          label: "Photography",
          heading: "Event and product images filed by occasion",
          icon: "image",
          body: [
            "Photographs in an organisational drive tend to be grouped by the event or shoot that produced them. Years later, the request is for a kind of image, such as a team at work or a product in use, and the occasion has long been forgotten.",
            ["A ", { text: "searchable image library", page: 26 }, " makes photographs findable through metadata, tags, visual characteristics and extracted information, which suits requests that start from what a picture shows."],
          ],
          points: ["Requests by subject, not occasion", "Visual characteristics as a route in"],
        },
        {
          label: "Video",
          heading: "Films saved wherever the project happened to live",
          icon: "video",
          body: [
            "Recruitment films, product demonstrations and recorded talks usually sit in the project folder of whoever commissioned them, under a filename chosen at export.",
            ["In GetSibu, videos can be ", { text: "indexed and enriched with AI-generated information", page: 25 }, ", so relevant footage can be discovered without someone reviewing every file."],
          ],
          points: ["Films scattered by project", "Footage found without watching everything"],
        },
        {
          label: "Brand files",
          heading: "Logos and templates in several generations",
          icon: "palette",
          body: [
            "Logos, templates and guidelines get copied into folder after folder as people need them, and older versions linger long after they were replaced. The risk is less that nobody finds a logo than that somebody finds the wrong one.",
            ["Brand teams can use ", { text: "approval gates", page: 71 }, " to keep approved creative assets separate from drafts and work in progress, which gives colleagues a clearer answer than whichever copy turned up first."],
          ],
          points: ["Outdated copies still circulating", "Approved assets kept apart from drafts"],
        },
      ],
      sources: [{ kind: "pdf", page: 15 }, { kind: "pdf", page: 26 }, { kind: "pdf", page: 25 }, { kind: "pdf", page: 71 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "before-connecting",
      eyebrow: "Before you connect",
      heading: "Choices that make a connected drive worth searching",
      items: [
        {
          heading: "Which areas hold creative work",
          summary: "A drive used across an organisation holds far more than creative assets.",
          icon: "folder",
          body: [
            "Contracts, spreadsheets and meeting notes live next to campaign material. Knowing which areas actually contain creative work tells a team where useful results will come from, and which folders matter most to the people who will search.",
            "The people who produce the material usually know where it lives, so a short conversation with each team tends to be quicker than a survey of every folder.",
          ],
        },
        {
          heading: "Names that only made sense to their author",
          summary: "Folder and file names in a busy shared drive were written for the moment, not for search.",
          icon: "text",
          body: [
            "Folders called “New folder”, “Final for client” or a meeting date are common wherever many people save files. Their names tell a colleague very little, so what makes material findable has to come from the content itself and from what is recorded about it.",
            ["Details such as ", { text: "creators, file paths and custom keywords", page: 22 }, " can become part of the asset record, so even an unhelpful path can survive as a clue to where a file came from."],
          ],
        },
        {
          heading: "What each location is for from now on",
          summary: "Agreeing the job of the drive and the job of the library spares colleagues from guessing where to look.",
          icon: "map",
          body: [
            "A shared drive stays useful for everyday documents and drafts. Agree which kinds of creative material colleagues should look for through the library, and say so plainly, so nobody has to guess where a search should start.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 22 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about the Google Drive integration",
      items: [
        {
          question: "Why does indexing matter for a Google Drive full of unhelpful filenames?",
          answer: ["Because connected sources can be indexed for discovery, people are not limited to the names and folders the drive gives them. Discovery in GetSibu can also rest on ", { text: "what appears inside an asset", page: 12 }, " rather than only on metadata someone typed in."],
        },
        {
          question: "Who should be involved when a team connects a shared Google Drive?",
          answer: "Whoever looks after the drive, often IT, together with someone from each team whose creative material is stored there. Between them they know what the drive holds and which parts matter to the library.",
        },
        {
          question: "Can Google Drive be one of several storage sources for one library?",
          answer: ["GetSibu is designed to provide ", { text: "one central location", page: 6 }, " for creative assets from connected drives, local infrastructure and direct uploads, so a drive can sit alongside other sources rather than replacing them."],
        },
      ],
      sources: [{ kind: "pdf", page: 122 }, { kind: "pdf", page: 12 }, { kind: "pdf", page: 6 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on bringing existing storage into the library",
      variant: "compact",
      pages: [121, 21, 11, 6, 15, 26],
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
