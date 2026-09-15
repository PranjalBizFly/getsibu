/**
 * 233 · GetSibu for Newsrooms — /use-cases/newsrooms
 *
 * Angle (cluster: uc-communications): a visual archive consulted against the clock, organised by topic, person and event
 * through the metadata and tags the newsroom records. "Person" always means a name recorded as metadata or a tag, never
 * recognition of anyone in an image. Media Companies (232) own archive scale and structure; PR Teams (235) own
 * approved images for requests.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how newsrooms and picture desks typically describe and use archive material; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 233,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Use Cases",
      lede: "How a newsroom can keep years of coverage findable against the clock, with topics, names and events recorded as tags and metadata that anyone on the desk can search.",
      visual: { diagram: "media-library", focus: "image,video" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 233 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "An archive organised by what the newsroom records",
      body: [
        "GetSibu lets a newsroom search its visual archive and organise media by topic, person, event and whatever other metadata is available.",
        "News archives are consulted against the clock. When a story breaks, the picture desk needs earlier photographs of the same public figure, the same place or a related event, and it needs them before the story goes out. That depends on describing material consistently as it arrives: who is pictured according to the caption, what the story was about and which occasion it came from.",
        [
          "In GetSibu, that organisation comes from metadata and tags: a person’s name entered as a tag or keyword, a topic chosen from the newsroom’s vocabulary, an event recorded when the pictures came in. ",
          { text: "Custom keywords, creators and embedded metadata", page: 22 },
          " can become part of each asset record, and ",
          { text: "asset metadata search", page: 23 },
          " looks through that information alongside tags and extracted content.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Topic, person and event recorded as tags", "Names entered by the desk as metadata", "Supplied keywords kept with photographs", "Archive search under deadline", "Usage terms noted for supplied images"],
      },
      highlight: {
        heading: "In practice",
        body: "For a profile of a newly appointed minister, the picture desk searches for the minister’s name as editors have tagged it over the years.",
        tags: ["Picture desk", "Reporters", "Archivists"],
      },
      glance: {
        heading: "Newsrooms in brief",
        facts: [
          { label: "Team", value: "News organisations and picture desks" },
          { label: "Typical material", value: "News photography, video, graphics and documents" },
          { label: "Builds on", value: "Creative Asset Organisation", page: 8 },
          { label: "Supports", value: "Natural Language Asset Search", page: 18 },
        ],
        actions: [{ kind: "route", path: "/use-cases", label: "More in Use Cases" }]
      },
      sources: [{ kind: "pdf", page: 233 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 23 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 18 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "facets",
      eyebrow: "By facet",
      heading: "How topic, person and event become searchable",
      tabs: [
        {
          label: "Topic",
          heading: "Subjects that outlast a single story",
          icon: "tag",
          body: [
            "Stories come and go, but topics persist: an election, a long-running trial, a particular industry. Organising by topic lets material gathered for one story serve the next one on the same subject.",
            [{ text: "Hierarchical tags", page: 8 }, " can carry a topic structure from broad subjects down to specific issues, and a taxonomy with synonyms can record the different words reporters use for one subject."],
          ],
          points: ["Broad subjects down to specific issues", "Material reused across related stories"],
        },
        {
          label: "Person",
          heading: "Names recorded by the desk",
          icon: "user",
          body: [
            "In a newsroom archive, a person is information someone has entered: a public figure’s name applied as a tag by a picture editor or supplied as a keyword with the file. Its value depends on consistency, including one agreed spelling for names that are transliterated in several ways.",
            ["Treating names as part of the newsroom’s ", { text: "asset taxonomy", page: 375 }, ", the structured system that defines how content is grouped and labelled, keeps them consistent from one editor to the next."],
          ],
          points: ["Names entered as tags or keywords", "One agreed spelling for each name"],
        },
        {
          label: "Event",
          heading: "The occasion a picture came from",
          icon: "calendar",
          body: [
            "Events tie coverage together across formats: photographs, video and the press release from the same summit or match. Recording the event when material arrives is far easier than reconstructing it later from dates and filenames.",
            [{ text: "Advanced media filters", page: 19 }, " for categories, formats and dates can then narrow an event’s material to just the photographs or just the footage."],
          ],
          points: ["Coverage of one occasion grouped", "Narrowed by format and date"],
        },
        {
          label: "Other metadata",
          heading: "What cameras and agencies already recorded",
          icon: "database",
          body: [
            "Supplied photographs often arrive with keywords and credits already embedded, and cameras note when an image was taken. That information costs nothing to keep and is slow to recreate.",
            [{ text: "Metadata preservation", page: 132 }, " means EXIF, XMP, creators and custom keywords can be kept during migration, so an older archive’s descriptions can survive the move."],
          ],
          points: ["Embedded keywords and credits kept", "Capture details carried across"],
        },
      ],
      sources: [{ kind: "pdf", page: 8 }, { kind: "pdf", page: 375 }, { kind: "pdf", page: 19 }, { kind: "pdf", page: 132 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "challenges",
      eyebrow: "Recurring challenges",
      heading: "What a newsroom archive has to get right",
      items: [
        {
          heading: "Usage terms on supplied images",
          summary: "Agency, pool and contributor photographs come with conditions on reuse.",
          icon: "flag",
          body: [
            "Photographs from agencies, pools and freelance contributors are often licensed for particular uses or periods. An archive search does not reveal those limits unless someone recorded them.",
            [{ text: "Expiring creative assets", page: 104 }, " carry expiry information that can help a desk identify content that should no longer be used after a specified period."],
          ],
        },
        {
          heading: "Embargoed and sensitive material",
          summary: "Some material must not circulate before publication, or at all.",
          icon: "lock",
          body: [
            "Embargoed reports, images connected to ongoing legal cases and material from confidential sources need tighter handling than routine coverage.",
            ["Access can be limited folder by folder with ", { text: "folder-level permissions", page: 152 }, ", a finer control than access across the whole organisation, and ", { text: "access history", page: 171 }, " gives information about important user interactions with the library."],
          ],
        },
        {
          heading: "Searching under deadline",
          summary: "Nobody working on a breaking story has time to learn the archive’s structure.",
          icon: "clock",
          body: [
            "Reporters and producers rarely know how the archive is organised, and they should not have to. They know what they are looking for and roughly when it happened.",
            [{ text: "Natural language search", page: 18 }, " lets them describe material the way they remember it, rather than guessing the exact keywords an archivist chose."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 104 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 171 }, { kind: "pdf", page: 18 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A breaking story that needs the archive at once",
      team: "A newsroom picture desk",
      situation: "A long-serving public official announces their resignation in the middle of the afternoon. The newsroom wants a picture-led story online quickly and a fuller retrospective for the following day.",
      steps: [
        {
          heading: "The name opens the archive",
          body: "The picture editor searches for the official’s name, which editors have applied as a tag to photographs across many years of coverage.",
        },
        {
          heading: "Event tags narrow the results",
          body: "Adding the tags for the official’s swearing-in and a well-known speech narrows the results to the moments the story will mention.",
        },
        {
          heading: "An old quote is confirmed",
          body: ["A reporter checks the wording of a statement made years earlier by finding the screenshot it appears in, because ", { text: "text inside screenshots is searchable", page: 38 }, "."],
        },
        {
          heading: "The retrospective gets a shared search",
          body: ["For the next day’s piece, the desk ", { text: "saves the search", page: 17 }, " and shares its URL with the designer building the retrospective."],
        },
        {
          heading: "Today’s photographs join the archive",
          body: ["The afternoon’s photographs are uploaded and tagged with the same name and a new event tag, while ", { text: "AI-assisted tagging", page: 31 }, " suggests descriptive tags that editors can approve or override."],
        },
      ],
      outcome: "The story runs with the right archive images, and the photographs taken today are described in the same terms, ready for the next time the official is in the news.",
      link: { page: 23, label: "Asset Metadata Search" },
      sources: [{ kind: "pdf", page: 11 }, { kind: "pdf", page: 38 }, { kind: "pdf", page: 17 }, { kind: "pdf", page: 31 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "capabilities",
      id: "capabilities",
      eyebrow: "What the desk uses",
      heading: "What a newsroom relies on in GetSibu",
      items: [
        {
          heading: "Searchable image library",
          body: "News photographs become searchable through metadata, tags, visual characteristics and extracted information, which makes past coverage easier to reuse.",
          icon: "camera",
          points: ["Several routes to one photograph", "Past coverage put back to work"],
          page: 26,
        },
        {
          heading: "Searchable video library",
          body: "Footage from earlier coverage can be indexed and enriched with AI-generated information, so a clip can be found without reviewing every file.",
          icon: "video",
          points: ["Past footage discoverable", "No need to watch everything"],
          page: 25,
        },
        {
          heading: "Thumbnails for quick scanning",
          body: "Generated thumbnails let an editor scan a page of results by eye without downloading a single original.",
          icon: "image",
          points: ["Results judged at a glance", "Originals downloaded only when chosen"],
          page: 146,
        },
        {
          heading: "Mentions on a specific image",
          body: "Mentioning a colleague, such as the duty lawyer, brings them into the discussion on one image, with folder-aware autocomplete helping ensure they can see it.",
          icon: "mention",
          points: ["Questions raised on the asset", "Visibility considered when mentioning"],
          page: 66,
        },
      ],
      sources: [{ kind: "pdf", page: 26 }, { kind: "pdf", page: 25 }, { kind: "pdf", page: 146 }, { kind: "pdf", page: 66 }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about GetSibu for newsrooms",
      items: [
        {
          question: "Can a picture desk see whether an archive image went through review?",
          answer: [{ text: "Review status", page: 76 }, " gives a clear indication of whether an asset still needs attention or has already completed the approval process, a useful check before an older image is republished."],
        },
        {
          question: "Can a newsroom check a long video clip without downloading it?",
          answer: [{ text: "Streaming previews", page: 147 }, " let an editor inspect a large media file without waiting for a complete download, which helps when choosing footage close to a deadline."],
        },
        {
          question: "Can a newsroom keep graphics and video with its photographs?",
          answer: ["Yes. ", { text: "Creative file discovery", page: 24 }, " covers images, video, audio and documents in one search, so a graphic or clip from past coverage sits with the photographs from the same story."],
        },
        {
          question: "Can a newsroom see what its journalists search for most?",
          answer: [{ text: "Most-searched tags", page: 193 }, " give insight into what users frequently look for, which shows where the archive’s tagging deserves the most care."],
        },
      ],
      sources: [{ kind: "pdf", page: 76 }, { kind: "pdf", page: 147 }, { kind: "pdf", page: 24 }, { kind: "pdf", page: 193 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on organising a news archive",
      variant: "compact",
      pages: [23, 22, 8, 104, 232, 235],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Give Your Creative Team One Source of Truth",
      conversionPage: 395,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 395 }],
    },
  ],
};

export default page;
