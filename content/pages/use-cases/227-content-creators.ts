/**
 * 227 · GetSibu for Content Creators — /use-cases/content-creators
 *
 * Angle (cluster: uc-studios-creators): a channel's back catalogue of videos, designed thumbnails, images and documents,
 * where output is visually repetitive by design and material is remembered by how it looks — found by visual
 * characteristics. Freelancers (226) own reusable assets across client jobs; Social Media Teams (234) own an
 * organisation's publishing rhythm and campaign assets.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how content creators typically produce and keep material; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 227,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Use Cases",
      lede: "How a content creator can keep every video, thumbnail, image and document behind a channel in one library, and find material again by how it looks rather than by the name it was exported under.",
      visual: { diagram: "media-library", focus: "video,image,document" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 227 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A channel’s back catalogue, searchable by how it looks",
      body: [
        "Content creators can use GetSibu to organise their videos, thumbnails, images and documents, and to find content according to its visual characteristics.",
        "Creator output is repetitive by design. A recurring series keeps the same set, the same framing and the same thumbnail layout from one upload to the next, so dozens of files look almost alike and carry camera-generated or hastily typed names. What a creator actually remembers about an old video is usually visual: the thumbnail with the yellow background, the graphic with the oversized arrow, the title card lettered in bold white type.",
        [
          "That gap between memory and filenames is what ",
          { text: "AI asset discovery", page: 12 },
          " addresses. It helps people find files by what appears inside them rather than relying entirely on manually entered metadata, which is particularly useful in large collections of visually similar files. ",
          { text: "AI media understanding", page: 43 },
          " then makes the interpreted content of visual assets available through search and organisation.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Videos, thumbnails, images and documents together", "Material found by colour, mood and objects", "Words on a thumbnail as a search term", "Earlier thumbnail designs retained", "Partner briefs kept beside the videos"],
      },
      highlight: {
        heading: "In practice",
        body: "Planning a follow-up to an old video, a creator looks for its thumbnail by the colours it used, not by an upload date they have long forgotten.",
        tags: ["Solo creators", "Editors", "Channel managers"],
      },
      glance: {
        heading: "Content creators in brief",
        facts: [
          { label: "Team", value: "Content creators and small channel teams" },
          { label: "Typical material", value: "Videos, designed thumbnails, images, scripts and briefs" },
          { label: "Builds on", value: "AI Asset Discovery", page: 12 },
          { label: "Supports", value: "Searchable Image Library", page: 26 },
        ],
        actions: [{ kind: "route", path: "/use-cases", label: "More in Use Cases" }]
      },
      sources: [{ kind: "pdf", page: 227 }, { kind: "pdf", page: 12 }, { kind: "pdf", page: 43 }, { kind: "pdf", page: 26 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "materials",
      eyebrow: "By material",
      heading: "How each kind of creator material stays findable",
      tabs: [
        {
          label: "Videos",
          heading: "Long recordings you do not have to rewatch",
          icon: "video",
          body: [
            "A creator’s video folder mixes finished uploads with raw recordings, alternate takes and cutaway footage that could serve a future video. Watching everything again to find one usable moment is rarely realistic.",
            ["Videos can be ", { text: "indexed and enriched with AI-generated information", page: 25 }, " so relevant footage is discoverable without reviewing every file, and ", { text: "streaming previews", page: 147 }, " let you check a long recording without waiting for a complete download."],
          ],
          points: ["Raw footage ready for reuse", "Checked before any download"],
        },
        {
          label: "Thumbnails",
          heading: "Designs that differ in small ways",
          icon: "image",
          body: [
            "Thumbnails get tested, redesigned and refreshed, so a single video can gather several near-identical designs. Kept as loose files, they make it hard to tell which design was used and which was abandoned.",
            [{ text: "Image version management", page: 98 }, " keeps different versions of a visual in one structured record, so the design that went out and the alternatives tested beside it stay together instead of drifting apart in a downloads folder."],
          ],
          points: ["Every design in one record", "Tested alternatives kept alongside"],
        },
        {
          label: "Images",
          heading: "Stills, screenshots and on-screen graphics",
          icon: "camera",
          body: [
            "Beyond thumbnails, creators collect product photos, screenshots, overlays and graphics that appear inside their videos. These are exactly the files that get exported twice, renamed and scattered across projects.",
            ["A ", { text: "searchable image library", page: 26 }, " makes images findable through metadata, tags, visual characteristics and extracted information, while ", { text: "duplicate detection", page: 40 }, " can recognise the same graphic saved under two names."],
          ],
          points: ["Overlays reused across videos", "Copies found despite new names"],
        },
        {
          label: "Documents",
          heading: "Scripts, briefs and media kits",
          icon: "document",
          body: [
            "The business side of a channel runs on documents: scripts, sponsorship briefs, media kits and partners’ brand guidelines. They usually sit in email attachments, a long way from the videos they concern.",
            ["A ", { text: "searchable document library", page: 27 }, " indexes documents by extracted text, metadata and organisational tags, and ", { text: "document version management", page: 99 }, " keeps earlier drafts when a script is replaced."],
          ],
          points: ["Briefs next to the videos", "Earlier script drafts retained"],
        },
      ],
      sources: [{ kind: "pdf", page: 25 }, { kind: "pdf", page: 147 }, { kind: "pdf", page: 98 }, { kind: "pdf", page: 26 }, { kind: "pdf", page: 40 }, { kind: "pdf", page: 27 }, { kind: "pdf", page: 99 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "visual-search",
      eyebrow: "Finding by look",
      heading: "The visual signals a creator can search by",
      items: [
        {
          heading: "Colour",
          body: "Colour characteristics drawn from visual assets become part of discovery, which suits creators whose thumbnails follow a recognisable palette.",
          icon: "palette",
          points: ["A series’ palette as a search route", "Helpful for keeping a look consistent"],
          page: 36,
        },
        {
          heading: "Mood",
          body: "AI analysis can pick out the visual mood of material and make it searchable, useful when an intro or montage needs imagery with a particular feeling.",
          icon: "eye",
          points: ["Material found by intended feeling", "Useful for intros and montages"],
          page: 35,
        },
        {
          heading: "Objects",
          body: "When you remember what was in the frame rather than when it was made, object detection offers a way in: objects in supported media can be identified and then contribute to search.",
          icon: "scan",
          points: ["Tags for what appears in an image", "Confidence information attached"],
          page: 34,
        },
        {
          heading: "Descriptions",
          body: "Search that interprets meaning, not just exact words, lets a creator type a description of the visual they are after.",
          icon: "search",
          points: ["Describe rather than recall", "Concepts as search terms"],
          page: 39,
        },
        {
          heading: "Your own terms",
          body: "If a suggested tag misnames a recurring prop or set, it can be overridden so the library speaks the creator’s language.",
          icon: "tag",
          points: ["Series names instead of generic labels", "Corrections whenever needed"],
          page: 48,
        },
      ],
      sources: [{ kind: "pdf", page: 36 }, { kind: "pdf", page: 35 }, { kind: "pdf", page: 34 }, { kind: "pdf", page: 39 }, { kind: "pdf", page: 48 }],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "Refreshing the look of a long-running series",
      team: "A content creator",
      situation: "A creator is giving a long-running series a new visual identity. Before designing anything, they want every old thumbnail from the series in front of them, along with a sponsor’s guidelines that limit what can change.",
      steps: [
        {
          heading: "Old thumbnails gathered by colour",
          body: "The series has always used a bright yellow background, so the creator searches by that colour and gathers most of the old thumbnails in one set of results.",
        },
        {
          heading: "The stragglers found by their titles",
          body: ["A few early thumbnails used a different colour. Searching for the series name lettered on them finds those too, because ", { text: "text inside images is searchable", page: 15 }, "."],
        },
        {
          heading: "The sponsor’s rules are checked",
          body: "A phrase from the sponsor’s guidelines about logo placement leads straight to the PDF, so the creator can confirm what the partner requires before sketching.",
        },
        {
          heading: "New designs replace the old",
          body: ["Each refreshed thumbnail replaces the previous design in the same asset, so if the new look falls flat, the creator can ", { text: "restore the earlier version", page: 94 }, "."],
        },
      ],
      outcome: "The series changes its look without losing its history: old and new thumbnail designs sit in the same records, and the sponsor’s limits were checked before the first sketch.",
      link: { page: 36, label: "AI Colour Detection" },
      sources: [{ kind: "pdf", page: 36 }, { kind: "pdf", page: 15 }, { kind: "pdf", page: 27 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 94 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about GetSibu for content creators",
      items: [
        {
          question: "How do GetSibu’s generated thumbnails differ from the thumbnails a content creator designs?",
          answer: [{ text: "Generated thumbnails", page: 146 }, " are previews that let you see any asset without downloading the original. A thumbnail you design for a video is an image asset in its own right, with its own tags and versions."],
        },
        {
          question: "Can a content creator keep raw recordings apart from finished uploads?",
          answer: ["Yes, with a little structure. Folders can separate the two, and ", { text: "asset status management", page: 102 }, " helps distinguish drafts from approved content and other workflow states."],
        },
        {
          question: "Can a content creator’s editor work in the same library?",
          answer: [{ text: "Editor permissions", page: 156 }, " give an editor the access needed to work with creative assets without administrative privileges, and ", { text: "asset comments", page: 62 }, " keep notes about a cut attached to the video itself."],
        },
        {
          question: "Can a content creator see how much storage raw video takes up?",
          answer: [{ text: "Storage analytics", page: 183 }, " show how much space each asset category consumes, which makes the weight of raw recordings visible next to images and documents."],
        },
      ],
      sources: [{ kind: "pdf", page: 146 }, { kind: "pdf", page: 102 }, { kind: "pdf", page: 156 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 183 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on finding creator material by its look",
      variant: "compact",
      pages: [12, 36, 98, 146, 220, 226],
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
