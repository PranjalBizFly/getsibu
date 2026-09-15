/**
 * 392 · Bring Your Creative Assets Together — /get-started/bring-your-creative-assets-together
 *
 * Angle (clusters: centralisation, conversion): asset types kept in different places because of habit, file size
 * and tools, brought into one environment where they are searched and managed together — for work that spans
 * formats — while keeping the boundaries that still matter. Centralised Creative Asset Library (6) owns sources
 * and disconnected versions; Creative File Discovery (24) owns one search across formats.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of why creative files end up stored by format and what combining them involves; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 392,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Get Started",
      lede: "Why creative teams end up keeping each kind of file in its own place, what changes when video, images, documents and audio share one environment, and which boundaries are still worth keeping once they do.",
      visual: { diagram: "media-library" },
      actions: [
        { kind: "global", cta: "primary" },
        { kind: "page", page: 6, label: "The centralised creative asset library" },
      ],
      sources: [{ kind: "pdf", page: 392 }, { kind: "pdf", page: 152 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Four kinds of file, too often four different homes",
      body: [
        "Instead of video on one drive, images in another folder and documents somewhere else, GetSibu creates a central environment in which teams search and manage different asset types together.",
        "Keeping formats apart costs most when someone needs every part of one piece of work. Each store has its own search, its own naming habits and its own idea of what a keyword is, so gathering a launch film, its stills, its deck and its radio edit means repeating the hunt in every place and translating between vocabularies along the way.",
        [
          "Bringing formats together matters for more than finding things. When every type sits in the same library, one set of folders, tags, collections, metadata and permissions can ",
          { text: "organise all of them", page: 4 },
          ", and ",
          { text: "audio is managed alongside the other creative formats", page: 28 },
          " rather than in an archive of its own.",
        ],
      ],
      keyPoints: {
        heading: "Key ideas",
        items: ["Formats split by habit, not by plan", "One environment for every asset type", "The same structure applied to all", "Audio kept with the work it belongs to", "Boundaries kept where they matter"],
      },
      highlight: {
        heading: "In practice",
        body: "When a launch film and its sales deck are both revised, each is replaced in place with its earlier versions kept, so both follow one versioning habit instead of two separate naming schemes.",
        tags: ["Video", "Presentations", "Versions"],
      },
      glance: {
        heading: "Formats together in brief",
        facts: [
          { label: "Area", value: "Get Started" },
          { label: "Brings together", value: "Video, images, documents and audio" },
          { label: "Organised through", value: "Folders, tags, collections, metadata and permissions" },
          { label: "Background", value: "What Is a Creative Library?", page: 373 },
        ],
      },
      sources: [{ kind: "pdf", page: 392 }, { kind: "pdf", page: 4 }, { kind: "pdf", page: 28 }, { kind: "pdf", page: 97 }, { kind: "pdf", page: 99 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 373 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "work-across-formats",
      eyebrow: "Work that spans formats",
      heading: "What a shared library does for work made of several formats",
      tabs: [
        {
          label: "Campaigns",
          heading: "Every deliverable of a campaign in one place",
          icon: "megaphone",
          body: [
            "A campaign is seldom one format. Key visuals, short cut-downs for social channels, presentations for sales teams and copy documents are produced in parallel by different people, and they are asked for again long after launch.",
            [
              "Marketing teams can ",
              { text: "maintain a central library", page: 213 },
              " for campaign assets, product imagery, videos, presentations and other marketing materials, so a later request for any part of a campaign begins in the same place.",
            ],
          ],
          points: ["Visuals, film and documents side by side", "Later requests start in one library"],
        },
        {
          label: "Productions",
          heading: "Production media held as one body of work",
          icon: "film",
          body: [
            "A production generates rushes, stills, paperwork such as scripts and schedules, and sound, often handled by separate crews. When the edit ends, those parts drift apart unless something holds them together.",
            [
              "Film production teams can ",
              { text: "centralise production media", page: 218 },
              " and maintain organised access to large video libraries, keeping the footage in the same environment as everything made around it.",
            ],
          ],
          points: ["Footage beside the paperwork", "Organised access once the edit is over"],
        },
        {
          label: "Brand",
          heading: "A brand kit that includes its guidance",
          icon: "palette",
          body: [
            "Brand material mixes logos and imagery with guideline documents and presentations. A logo is easily misused when the guidance on how to use it lives somewhere else.",
            [
              "Brand consultancies can ",
              { text: "centralise brand assets", page: 221 },
              ", presentations, references and campaign materials, which keeps the rules near the files they govern.",
            ],
          ],
          points: ["Assets and guidelines together", "References kept with the work"],
        },
        {
          label: "Events",
          heading: "An event’s whole record in a single library",
          icon: "calendar",
          body: [
            "An event leaves photography, promotional material, speaker presentations and recordings, each made by a different supplier and usually delivered by a different route.",
            [
              "Event teams can ",
              { text: "organise photography, promotional material, presentations and event recordings", page: 236 },
              ", so the organisers of the next edition inherit the full record rather than fragments of it.",
            ],
          ],
          points: ["Several suppliers, one destination", "A record the next team can use"],
        },
      ],
      sources: [{ kind: "pdf", page: 213 }, { kind: "pdf", page: 218 }, { kind: "pdf", page: 221 }, { kind: "pdf", page: 236 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "keep-in-view",
      eyebrow: "Considerations",
      heading: "What to keep in view when formats share one library",
      items: [
        {
          heading: "Access that differs by material",
          summary: "Raw footage and a finished film rarely need the same audience.",
          icon: "lock",
          body: [
            "Separate stores sometimes restricted access by accident: only the edit team could reach the edit server. Combining formats removes that accidental barrier, so access has to be decided deliberately.",
            [{ text: "Folder-level permissions", page: 152 }, " allow access to be controlled more precisely than organisation-wide access, so combining formats does not mean opening everything to everyone."],
          ],
        },
        {
          heading: "Client work kept apart",
          summary: "Agencies want formats together within a client, never mixed across clients.",
          icon: "briefcase",
          body: [
            "An agency gains from seeing a client’s film, stills and decks together, but loses a great deal if another client’s material appears in the same results.",
            [{ text: "Client asset isolation", page: 167 }, " prevents unrelated customer libraries from being mixed within the same workflow."],
          ],
        },
        {
          heading: "The weight of each format",
          summary: "Combining stores shows how much of the collection each format takes up.",
          icon: "chart",
          body: [
            "While formats live apart, nobody sees the whole picture. Once they share a library, it becomes clear how much space goes to video compared with documents or audio, which matters when planning what to keep.",
            [{ text: "Storage by category", page: 192 }, " analyses the library according to categories such as video, image, document and audio."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 152 }, { kind: "pdf", page: 167 }, { kind: "pdf", page: 192 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A fundraising appeal gathered from four separate stores",
      team: "A nonprofit communications team",
      situation: "A nonprofit’s communications team is preparing its next appeal. Last year’s photography sits on a shared drive, the appeal film came from an editing company, the leaflets and reports are in the office document system, and the radio advert was delivered by a sound studio.",
      steps: [
        { heading: "Material arrives by more than one route", body: ["Using ", { text: "digital asset import", page: 135 }, " from multiple sources, the team connects the drive it controls and uploads the files that suppliers delivered."] },
        { heading: "The paperwork becomes searchable", body: "Text is extracted from the leaflets and report PDFs, so a phrase from last year’s appeal is enough to find them." },
        { heading: "One search returns every format", body: "Once the files carry the appeal’s name in their tags, a single search brings back the photographs, the film, the documents and the radio advert together." },
        { heading: "Feedback lands on the files", body: "The director comments directly on the draft film and the new leaflet, and each is marked as approved through the approval workflow once the changes are made." },
      ],
      outcome: "The appeal now exists as one body of work, so planning the next campaign starts from what the team already holds instead of another round of collecting files.",
      link: { page: 238, label: "GetSibu for Nonprofits" },
      sources: [{ kind: "pdf", page: 135 }, { kind: "pdf", page: 121 }, { kind: "pdf", page: 15 }, { kind: "pdf", page: 24 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 238 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about bringing creative assets together",
      items: [
        {
          question: "Do formats that share a library need one shared tag vocabulary?",
          answer: "For the ideas they have in common, it helps: campaigns, products, markets and clients are worth naming the same way across film, stills and documents. Terms that matter to one format only, such as a print specification, can stay with the teams that use them.",
        },
        {
          question: "Can video in a combined library be checked without downloading it?",
          answer: ["Yes. ", { text: "Streaming previews", page: 147 }, " let people inspect large media files without waiting for complete downloads, which matters when heavy footage sits beside much lighter documents and images."],
        },
        {
          question: "Is bringing creative assets together the same as a migration?",
          answer: ["Not necessarily. Formats can be gathered gradually, one store at a time, whereas ", { text: "migrating to GetSibu", page: 281 }, " describes moving an existing library from shared drives, cloud storage or another asset management system."],
        },
        {
          question: "What happens to duplicate files when separate stores are combined?",
          answer: ["Combining stores often shows that one file was saved in several of them. ", { text: "Duplicate detection", page: 40 }, " identifies identical files and visually equivalent copies, including renamed or re-encoded ones, which helps the team work out which copies are unnecessary."],
        },
      ],
      sources: [{ kind: "pdf", page: 147 }, { kind: "pdf", page: 281 }, { kind: "pdf", page: 40 }, { kind: "pdf", page: 112 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on gathering assets into one library",
      variant: "compact",
      pages: [6, 24, 28, 4, 373],
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
