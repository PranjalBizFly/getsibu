/**
 * 52 · AI-Powered Image Discovery — /features/ai-powered-image-discovery
 *
 * Angle (cluster ai-discovery): locating photographs, product shots, campaign images and other visual
 * content through AI-generated metadata. Searchable Image Library (26) is the media-type page; Object
 * Detection (34) and Colour Detection (36) own individual attributes.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of image metadata and how teams look for imagery; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 52,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "AI",
      lede: "Why the details stored inside most image files say little about the picture itself, and how information generated from image content gives your team another route to the shot it needs.",
      visual: { diagram: "media-library", focus: "image" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 52 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Images described by what they show, not only how they were made",
      body: [
        "AI image discovery in GetSibu helps teams locate photographs, product shots, campaign images and other visual content. It does so through AI-generated metadata: information about an image produced by analysing the image itself.",
        "Image files already carry metadata, but mostly about their making. A camera records when a photograph was taken and with what settings; editing software adds its own details; a careful uploader might add a credit and a few keywords. Almost none of that says what is actually in the picture, which is usually what the person searching needs to know.",
        "AI-generated metadata fills that gap without displacing the rest. Capture details and credits still answer questions about where an image came from, while information drawn from its content answers questions about what it shows, and a large collection is far easier to reuse when both are there to search.",
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["AI-generated metadata", "Photographs, product shots, campaign images", "Content alongside capture details", "Reuse across campaigns", "Origin and content side by side"],
      },
      highlight: {
        heading: "In practice",
        body: "A picture editor looking for a photograph of a lighthouse with a fishing boat in front of it has no idea which photographer took it or when. The image’s own content becomes the way in.",
        tags: ["Picture editors", "Photography", "Campaigns"],
      },
      glance: {
        heading: "Image discovery in brief",
        facts: [
          { label: "Area", value: "AI" },
          { label: "Helps locate", value: "Photographs, product shots and campaign images" },
          { label: "Works through", value: "AI-generated metadata" },
          { label: "Part of", value: "AI Asset Discovery", page: 12 },
        ],
        actions: [{ kind: "route", path: "/features/ai", label: "More in AI" }]
      },
      sources: [{ kind: "pdf", page: 52 }, { kind: "pdf", page: 26 }, { kind: "pdf", page: 12 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "two-kinds-of-metadata",
      eyebrow: "Side by side",
      heading: "Recorded image metadata compared with AI-generated metadata",
      columns: ["Recorded metadata", "AI-generated metadata"],
      emphasis: 1,
      rows: [
        ["Describes", "How and when the file was made, and by whom", "What the image shows"],
        ["Comes from", "Cameras, software and the people who upload", "Analysis of the image content"],
        ["Examples", "EXIF, XMP, creators, custom keywords", "Objects, visual mood, colour"],
        ["Misses", "The subject, unless someone typed it", "Clients, rights and campaign context"],
        ["Answers", "“Whose shoot was this?”", "“Where is the photo with the red door?”"],
      ],
      sources: [{ kind: "pdf", page: 22 }, { kind: "pdf", page: 52 }, { kind: "pdf", page: 34 }, { kind: "pdf", page: 35 }, { kind: "pdf", page: 36 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "image-types",
      eyebrow: "By kind of image",
      heading: "What each kind of image asks of discovery",
      tabs: [
        {
          label: "Photographs",
          heading: "Large shoots where the best frame hides",
          icon: "camera",
          body: [
            ["Location, event and lifestyle photography produces big sets named by date or card number. The frames that later matter are often ones nobody flagged at the time. ", { text: "Photography teams", page: 228 }, " can search large image collections using tags, colours and metadata, which suits libraries built up over many shoots."],
            "AI-generated metadata can make those unremarkable frames findable, for instance through an object at the edge of the frame or its dominant colours.",
          ],
          points: ["Unflagged frames become reachable", "Setting and palette as ways in"],
        },
        {
          label: "Product shots",
          heading: "Consistent images that must still be told apart",
          icon: "store",
          body: [
            "Studio product photography is deliberately uniform: the same backdrop, the same lighting, the same angles. That consistency is good for a catalogue and hard on search, because the differences between files are small and rarely written down.",
            ["The words printed on packaging are often the clearest difference of all, and ", { text: "AI OCR", page: 38 }, " can extract text from images so that it becomes part of the searchable asset information."],
          ],
          points: ["Uniform shots with small differences", "Printed product names read from the image"],
        },
        {
          label: "Campaign images",
          heading: "Finished artwork that should be reused wisely",
          icon: "megaphone",
          body: [
            "Campaign images combine photography, typography and branding into finished pieces. Their value outlives the campaign, when a new market, a partner or a follow-up activity asks for something similar.",
            "Reuse brings a check that content analysis cannot make: whether the image may still be used, and where. That answer lives in the records and agreements around an image, not in its pixels.",
          ],
          points: ["Artwork found again after the campaign", "Rights checked before reuse"],
        },
        {
          label: "Other visuals",
          heading: "Screenshots, graphics and reference images",
          icon: "image",
          body: [
            "Libraries also collect visual material that is not photography at all: icons, illustrations, diagrams, mood references and captured screens. These files are rarely described carefully because they feel incidental, yet teams return to them constantly.",
            "Wherever such files are among the supported media, a description generated from their content is one they would otherwise rarely receive, which gives incidental visuals a better chance of being found again.",
          ],
          points: ["Incidental visuals described", "Reference material easier to return to"],
        },
      ],
      sources: [{ kind: "pdf", page: 228 }, { kind: "pdf", page: 38 }, { kind: "pdf", page: 52 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A press image found without knowing who shot it",
      team: "A PR team",
      situation: "A PR team is issuing an announcement about a new distribution centre and needs an exterior photograph at short notice. Several photographers have documented the site over the past year.",
      steps: [
        { heading: "The content leads the search", body: "A press officer searches for an exterior view of the building, reaching photographs through the AI-generated metadata describing what they show." },
        { heading: "Recorded details narrow it down", body: ["Among the matches, ", { text: "asset metadata search", page: 23 }, " helps the officer focus on files from the photographer commissioned for the opening."] },
        { heading: "Clearance is confirmed", body: "The chosen photograph’s review status shows it has completed approval, so it can go out with the announcement." },
        { heading: "The credit is traced", body: ["Because ", { text: "asset ownership", page: 115 }, " provides context about who created or uploaded content, the team knows whom to credit and whom to ask about further use."] },
      ],
      outcome: "The announcement goes out with an approved photograph and a correct credit, found from what the image shows rather than from knowing which photographer’s folder to open.",
      link: { page: 235, label: "GetSibu for PR Teams" },
      sources: [{ kind: "pdf", page: 52 }, { kind: "pdf", page: 23 }, { kind: "pdf", page: 76 }, { kind: "pdf", page: 115 }, { kind: "pdf", page: 235 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about AI-powered image discovery",
      items: [
        {
          question: "How does AI-powered image discovery relate to a searchable image library?",
          answer: ["The ", { text: "searchable image library", page: 26 }, " is the whole picture: images reachable through metadata, tags, visual characteristics and extracted information. AI-powered image discovery concentrates on one of those routes, the metadata generated from image content."],
        },
        {
          question: "Is AI-generated image metadata more useful for finding images or for choosing between them?",
          answer: "Mainly for finding them. It gets a search to the images that show the right thing; picking the strongest frame, the right expression or the version with room for copy remains an editorial judgement.",
        },
        {
          question: "Which image collections gain most from AI-powered image discovery?",
          answer: "Collections built from many sources with little recorded about their content: event galleries from several photographers, agency deliveries renamed on export, and years of web and social imagery saved in a hurry.",
        },
      ],
      sources: [{ kind: "pdf", page: 26 }, { kind: "pdf", page: 52 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on finding imagery",
      variant: "compact",
      pages: [26, 12, 22, 228, 34, 235],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Turn Your Asset Library Into Intelligence",
      conversionPage: 398,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 398 }],
    },
  ],
};

export default page;
