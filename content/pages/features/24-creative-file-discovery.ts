/**
 * 24 · Creative File Discovery — /features/creative-file-discovery
 *
 * Angle (clusters: creative-search, media-libraries primary): one unified search across images, video, audio and
 * documents, and the reduced reliance on folder knowledge and on individuals' memory. Creative Asset Search (11)
 * owns the signals, Search Across Creative Libraries (16) owns library-wide scope, the media-type pages (25–28)
 * own each medium in depth.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how knowledge about files is held in creative teams; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 24,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Search & Discovery",
      lede: "See where knowledge of a team’s creative files tends to hide, how images, video, audio and documents can share one route to discovery, and what changes when finding a file relies less on asking the person who saved it.",
      visual: { diagram: "media-library" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 24 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "One search for every kind of creative file",
      body: [
        "GetSibu helps teams discover images, video, audio and documents through a unified search experience. The platform is designed to lessen the dependence on folder knowledge and on individual colleagues remembering where files were stored.",
        "In many creative organisations, each kind of file has a keeper. Editors hold the footage, designers hold the artwork, whoever handled the sound holds the audio, and the documents sit in a shared drive nobody quite owns. Finding anything means knowing whom to ask, and when that person is on holiday, busy or gone, the file might as well not exist. A campaign that spans all four media has four keepers and four ways of filing.",
        [
          "Where ",
          { text: "search across creative libraries", page: 16 },
          " is about reaching the whole library at once, file discovery is about mixed media: one search experience meeting every kind of file, whoever made it and whichever team usually looks after it.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Images, video, audio and documents together", "One search experience", "Less reliance on folder knowledge", "Less reliance on one person’s memory", "Each medium findable in its own way"],
      },
      highlight: {
        heading: "In practice",
        body: "A campaign manager covering for a colleague on leave needs the launch film, its stills, the voice-over and the brief. Searching for the campaign can bring back all four without anyone having to ring the colleague who is away.",
        tags: ["Cover and handover", "Campaigns", "Mixed media"],
      },
      glance: {
        heading: "File discovery in brief",
        facts: [
          { label: "Area", value: "Search & Discovery" },
          { label: "Covers", value: "Images, video, audio and documents" },
          { label: "Reduces reliance on", value: "Folder knowledge and memory" },
          { label: "Signals it draws on", value: "Creative Asset Search", page: 11 },
        ],
        actions: [{ kind: "route", path: "/features/search-and-discovery", label: "More in Search & Discovery" }]
      },
      sources: [{ kind: "pdf", page: 24 }, { kind: "pdf", page: 16 }, { kind: "pdf", page: 11 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "media",
      eyebrow: "Four kinds of file",
      heading: "How each kind of file joins the same discovery path",
      intro: "One search experience does not mean every medium is described in the same way.",
      items: [
        {
          heading: "Images",
          icon: "image",
          body: "Images become searchable through metadata, tags, visual characteristics and extracted information, so a photograph can be found by what it shows as well as by what is recorded about it.",
          points: ["Visual characteristics as well as words", "Easier to reuse across campaigns"],
          page: 26,
        },
        {
          heading: "Video",
          icon: "video",
          body: "Videos can be indexed and enriched with AI-generated information, which lets relevant footage surface without someone watching every file to check.",
          points: ["Footage found without reviewing each clip", "Streaming previews to confirm a candidate"],
          page: 25,
        },
        {
          heading: "Documents",
          icon: "document",
          body: "Documents can be indexed by extracted text, metadata and organisational tags, so a PDF or presentation can be located without opening one after another.",
          points: ["The words inside a file as a route", "Tags for the kind of document"],
          page: 27,
        },
        {
          heading: "Audio",
          icon: "audio",
          body: "Audio is managed alongside the other creative formats rather than split off into a separate system, so recordings and music share an environment with the work they belong to.",
          points: ["No separate audio store", "Found through recorded details and tags"],
          page: 28,
        },
      ],
      sources: [{ kind: "pdf", page: 26 }, { kind: "pdf", page: 25 }, { kind: "pdf", page: 147 }, { kind: "pdf", page: 27 }, { kind: "pdf", page: 28 }, { kind: "pdf", page: 23 }],
    },
    {
      kind: "accordion",
      id: "folder-knowledge",
      eyebrow: "Where knowledge used to live",
      heading: "Four places folder knowledge hides, and what takes their place",
      items: [
        {
          heading: "In the person who saved it",
          summary: "When only one colleague knows where something is, every request becomes a message to them.",
          icon: "user",
          body: [
            "Specialists turn into unofficial librarians. A senior designer fields questions about artwork from years ago; an editor is asked for footage from projects they left long since. The arrangement works until they are away, and it quietly consumes their time even when it works.",
            "A search that reaches every kind of file can let colleagues answer those questions for themselves, and leaves the specialist’s attention for decisions only they can make.",
          ],
        },
        {
          heading: "In naming conventions",
          summary: "A convention helps only the people who know it and apply it.",
          icon: "text",
          body: [
            "Codes for client, date and revision pack meaning into filenames, but conventions drift, differ between teams and are rarely followed by files that arrive from outside. A newcomer cannot decode them at all.",
            ["Discovery that draws on ", { text: "metadata, tags and extracted content", page: 23 }, " as well as filenames turns the convention into one clue among several rather than the only key."],
          ],
        },
        {
          heading: "In the shape of the folder tree",
          summary: "Knowing a structure means knowing its logic, and every team that built one used a different logic.",
          icon: "folder",
          body: [
            "One team files by client, another by year, a third by format. Someone who moves between them has to learn each arrangement before they can find anything in it, and the logic is rarely written down anywhere.",
            "A search that meets every kind of file does not ask for that apprenticeship first. Finding a file then depends less on having learnt the tree, even though the tree may still suit the people who built it.",
          ],
        },
        {
          heading: "In media-specific storage",
          summary: "When each medium lives somewhere different, the material of one project is spread across several places.",
          icon: "layers",
          body: [
            "Footage on an edit server, stills in a photo archive, sound in its own folder and decks among shared documents: each location may be tidy and still force someone to search four times to assemble one campaign.",
            ["GetSibu provides ", { text: "one central location for creative assets", page: 6 }, " from connected drives, local infrastructure and direct uploads, so teams can reduce the confusion that multiple storage locations cause."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 24 }, { kind: "pdf", page: 23 }, { kind: "pdf", page: 6 }, EXPLAINS],
    },
    {
      kind: "before-after",
      id: "before-after",
      eyebrow: "What changes",
      heading: "Finding files by knowing where, and by searching",
      beforeLabel: "Discovery by knowing where",
      afterLabel: "Discovery through one search",
      before: ["Ask whoever filed it", "Footage, artwork, sound and decks in separate places", "One campaign assembled from several searches", "Knowledge that leaves when people do"],
      after: ["Search what the library records about each file", "Images, video, audio and documents in one experience", "Different asset types searched and managed together", "Less depending on any one person’s memory"],
      link: { page: 392, label: "Bring Your Creative Assets Together" },
      sources: [{ kind: "pdf", page: 24 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 392 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about creative file discovery",
      items: [
        {
          question: "Where should a team start when its images, footage, audio and documents sit in separate places?",
          answer: [
            "With an inventory: where each medium lives today, how each is named and what information travels with it. ",
            { text: "Digital asset migration planning", page: 290 },
            " ensures that assets, metadata and permissions are considered before the transfer begins.",
          ],
        },
        {
          question: "Does creative file discovery help people outside the creative team?",
          answer: [
            "Often most of all, since colleagues who did not make the files are the least likely to know how each medium was filed. GetSibu gives creative, marketing, production and brand teams ",
            { text: "a shared source of truth", page: 10 },
            " for their digital assets, so everyone works from the same organised library.",
          ],
        },
        {
          question: "How do I narrow a creative file discovery search to a single kind of file?",
          answer: ["Filters are the usual route. ", { text: "Advanced media filters", page: 19 }, " narrow results by properties such as format and date and can be combined, so a search that returns several media can be reduced step by step to the files you need."],
        },
      ],
      sources: [{ kind: "pdf", page: 24 }, { kind: "pdf", page: 290 }, { kind: "pdf", page: 10 }, { kind: "pdf", page: 19 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on finding every kind of creative file",
      variant: "compact",
      pages: [25, 26, 27, 28, 16, 29],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Stop Searching Through Folders",
      conversionPage: 393,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 393 }],
    },
  ],
};

export default page;
