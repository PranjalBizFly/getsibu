/**
 * 373 · What Is a Creative Library? — /resources/what-is-a-creative-library
 *
 * Angle (cluster: dam-fundamentals; centralisation): vendor-neutral explainer of the repository itself — what a
 * creative library holds, what each format needs to be usable, the qualities that make a repository a library and
 * how one is typically built. What Is Digital Asset Management? (361) owns the discipline; Centralised Creative
 * Asset Library (6), One Source of Truth (10) and Centralised Media Storage (150) own GetSibu's centralisation.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Vendor-neutral explanation of creative libraries; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 373,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "centered",
      eyebrow: "Resources",
      lede: "What a creative library is, what images, video, documents and audio each need to be usable in one, the qualities that separate a library from a pile of files, and how GetSibu brings a library together.",
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 373 }, { kind: "pdf", page: 6 }],
    },
    {
      kind: "definition",
      id: "definition",
      eyebrow: "Definition",
      term: "Creative library",
      answer: "A creative library is a central repository for images, videos, documents, audio and other digital content. It is where an organisation’s creative work lives once it is meant to be found and reused.",
      detail: "“Library” is a deliberate word. A store holds things; a library also arranges, describes and lends them. A creative library gathers finished assets and useful source material in one place, organises them in a way everyone understands and keeps enough context with each file that someone who did not make it can still find it, trust it and use it correctly.",
      sources: [{ kind: "pdf", page: 373 }, EXPLAINS],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "The difference between a pile of files and a library",
      body: [
        "A creative library is the collection itself: the photographs, films, decks, recordings and design files an organisation has made or licensed, held in one repository rather than scattered across the places they were created.",
        "Plenty of organisations already have the content; what they lack is the library. Files sit on the drives of whoever produced them, in project folders named after old campaigns, behind shared links that have expired and in email attachments. Each location made sense to someone at the time. Together they mean one photograph is stored several times, nobody is sure which version is current, and finding anything depends on remembering who made it.",
        [
          "Where ",
          { text: "digital asset management", page: 361 },
          " is the discipline and the software, the creative library is what that discipline looks after. Its usefulness rests on two layers over the files: ",
          { text: "asset metadata", page: 374 },
          " that describes each one, and a structure everybody shares.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["One repository for every format", "Arranged, described and lent", "Context kept with each file", "A single current copy", "Maintained, not just filled"],
      },
      highlight: {
        heading: "In practice",
        body: "Someone who has just joined the marketing team needs product photography. Rather than being told which colleague to ask, they search the library and find the current shots with credits and usage notes attached.",
        tags: ["Marketing", "Brand", "New joiners"],
      },
      glance: {
        heading: "A creative library in brief",
        facts: [
          { label: "Holds", value: "Images, video, documents, audio and more" },
          { label: "Adds to storage", value: "Structure, description and search" },
          { label: "Looked after through", value: "Digital asset management" },
          { label: "In GetSibu", value: "One Source of Truth for Creative Teams", page: 10 },
        ],
        actions: [{ kind: "route", path: "/resources", label: "More in Resources" }]
      },
      sources: [{ kind: "pdf", page: 373 }, { kind: "pdf", page: 361 }, { kind: "pdf", page: 374 }, { kind: "pdf", page: 10 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "by-format",
      eyebrow: "By format",
      heading: "What each kind of asset needs to be usable",
      tabs: [
        {
          label: "Images",
          heading: "Recognisable at a glance, findable by more than a name",
          icon: "image",
          body: [
            "Images are the easiest assets to browse and among the hardest to search by filename, because cameras name files with sequence numbers and every export multiplies sizes and crops.",
            "They need good thumbnails, descriptive tags, credit and usage information, and a way of relating variants to the original.",
          ],
          points: ["Thumbnails and descriptive tags", "Credits and usage terms"],
          link: { page: 26, label: "Searchable Image Library" },
        },
        {
          label: "Video",
          heading: "Inspectable without a full download",
          icon: "video",
          body: [
            "Video files are large, long and opaque: a single thumbnail says little about what happens in the footage. People need previews and enough description to decide whether a clip is worth opening.",
            "Cuts and revisions multiply during an edit, so keeping versions in order matters a great deal for video.",
          ],
          points: ["Previews before downloads", "Versions for each cut"],
          link: { page: 25, label: "Searchable Video Library" },
        },
        {
          label: "Documents",
          heading: "Searchable by what they say",
          icon: "document",
          body: [
            "Briefs, guidelines, decks and contracts are identified by their contents, yet usually named by date or author. A library needs the text inside them to be searchable, including text on scanned pages and slides saved as images.",
            "Documents also go out of date quietly, so a clearly current version matters.",
          ],
          points: ["Text inside files searchable", "One current version"],
          link: { page: 27, label: "Searchable Document Library" },
        },
        {
          label: "Audio",
          heading: "Kept beside the work it belongs to",
          icon: "audio",
          body: [
            "Music, voice-overs, sound effects and interview recordings are often stored apart from the images and video they accompany, which cuts them off from their context.",
            "Above all, audio needs clear licensing information, because a track cleared for one campaign may not be cleared for the next.",
          ],
          points: ["Stored beside related media", "Licence terms recorded"],
          link: { page: 28, label: "Searchable Audio Library" },
        },
      ],
      sources: [{ kind: "pdf", page: 26 }, { kind: "pdf", page: 25 }, { kind: "pdf", page: 27 }, { kind: "pdf", page: 28 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "qualities",
      eyebrow: "Key qualities",
      heading: "What turns a repository into a library",
      items: [
        {
          heading: "A place people actually use",
          summary: "A library works only if it is where people look first.",
          icon: "folder",
          body: [
            "If some teams keep working from their own drives, the library becomes one more location instead of the location. Adoption depends on the library being easier than the alternatives, not only on a rule saying people must use it.",
          ],
        },
        {
          heading: "A shared structure",
          summary: "Folders, collections and tags that mean the same thing to everyone.",
          icon: "layers",
          body: [
            ["Structure should reflect how the organisation thinks about its work — brands, products, campaigns, markets — rather than how one team happened to save files. An agreed ", { text: "asset taxonomy", page: 375 }, " keeps it consistent as more people contribute."],
          ],
        },
        {
          heading: "Context with every asset",
          summary: "Who made it, what it is for and whether it may be used.",
          icon: "tag",
          body: [
            "An asset without context invites mistakes: the wrong crop sent to print, a photograph used after its licence ended, a draft shared as final. Credits, descriptions, status and usage terms belong with the file, not in someone’s memory.",
          ],
        },
        {
          heading: "One current copy",
          summary: "Each asset has one record, with its history behind it.",
          icon: "copy",
          body: [
            "Duplicates and near-identical copies erode trust quickly. A well-kept library holds revisions inside each asset’s history and clears out redundant copies, so people stop wondering which version is right.",
          ],
        },
        {
          heading: "Curation over accumulation",
          summary: "Not everything ever made belongs in the everyday library.",
          icon: "archive",
          body: [
            "Rejected concepts, abandoned drafts and superseded material make search noisier. Archiving what is finished but worth keeping, and removing what is not, keeps the working library focused on content people should use.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 375 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "building",
      eyebrow: "In general",
      heading: "How a creative library is typically built",
      steps: [
        { heading: "Find what exists", body: "List the places creative content lives today and roughly what each one holds.", icon: "compass" },
        { heading: "Decide what belongs", body: "Agree which material should enter the library, which should be archived and which can stay behind.", icon: "filter" },
        { heading: "Bring it together", body: "Move content into one repository, keeping the metadata and folder logic worth preserving along the way.", icon: "upload", page: 376 },
        { heading: "Describe and structure", body: "Apply the taxonomy, fill gaps in descriptions and resolve duplicates, so search has something to work with.", icon: "tag" },
        { heading: "Open it to the team", body: "Give people access to the areas they need and make the library the first place they look.", icon: "users" },
        { heading: "Keep it healthy", body: "Review structure, clear clutter and archive finished work as the collection grows.", icon: "refresh" },
      ],
      sources: [{ kind: "pdf", page: 376 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "in-getsibu",
      eyebrow: "In GetSibu",
      heading: "How GetSibu shapes a creative library",
      items: [
        {
          heading: "One location from many sources",
          body: "GetSibu provides one central location for creative assets from connected drives, local infrastructure and direct uploads, reducing the confusion of multiple storage locations.",
          icon: "folder",
          points: ["Fewer disconnected versions", "Direct uploads alongside connected sources"],
          page: 6,
        },
        {
          heading: "Structure for a growing library",
          body: "Folders, tags, collections, metadata and permissions give a growing library a structured environment and a reliable source of truth.",
          icon: "layers",
          page: 4,
        },
        {
          heading: "Every format in one search",
          body: "Images, video, audio and documents can be discovered through a unified search experience that reduces dependence on folder knowledge.",
          icon: "search",
          page: 24,
        },
        {
          heading: "Browsing or pinpointing",
          body: "Library views, folders, tags, collections and search let people move between broad exploration and finding one specific asset.",
          icon: "compass",
          page: 29,
        },
        {
          heading: "Ongoing maintenance",
          body: "Maintenance helps prevent the library from becoming cluttered with duplicate, obsolete or poorly classified content.",
          icon: "refresh",
          page: 111,
        },
      ],
      sources: [{ kind: "pdf", page: 6 }, { kind: "pdf", page: 4 }, { kind: "pdf", page: 24 }, { kind: "pdf", page: 29 }, { kind: "pdf", page: 111 }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about creative libraries",
      items: [
        {
          question: "What is the difference between a creative library and an archive?",
          answer: "A creative library is the working collection people search and reuse every day. An archive keeps material that is finished but worth retaining, out of the way of everyday discovery, and many libraries include one rather than replacing it.",
        },
        {
          question: "Should work in progress live in a creative library?",
          answer: "It depends on how the team works. Some libraries hold only finished, reusable assets; others also hold drafts so that review happens in the same place. Where drafts are included, a clear status separating them from approved content keeps unfinished work from being reused.",
        },
        {
          question: "Who should look after a creative library?",
          answer: "Someone has to own it, even when many people contribute. That is often a library or DAM manager, sometimes based in brand, marketing operations or a production office, who maintains structure, taxonomy and access and keeps clutter under control.",
        },
        {
          question: "Can audio sit in the same creative library as images and video?",
          answer: ["It should, so recordings keep their context. In GetSibu, ", { text: "audio assets are managed alongside other creative formats", page: 28 }, " rather than separated from the rest of the library."],
        },
      ],
      sources: [{ kind: "pdf", page: 28 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on building a creative library",
      variant: "compact",
      pages: [6, 10, 150, 361, 375, 376],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the other DAM fundamentals." }],
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
