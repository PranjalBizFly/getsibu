/**
 * 228 · GetSibu for Photography Teams — /use-cases/photography-teams
 *
 * Angle (cluster: uc-studios-creators): very large image collections made shoot by shoot, where frames look alike and
 * camera filenames say nothing — found through tags, colour, metadata and filters. PDF 228 also names "people", which
 * relates to the blocked face-grouping claim: this page never mentions finding who appears in a photograph.
 * Creative Studios (220) owns mixed formats; Content Creators (227) own a channel's visual output.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how photography teams typically shoot, select and keyword images; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 228,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Use Cases",
      lede: "How a photography team can keep a large image collection searchable by tags, colour and metadata, so a request for one frame from years of shoots does not become an afternoon of scrolling through contact sheets.",
      visual: { diagram: "media-library", focus: "image" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 228 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Thousands of frames, and the one the brief needs",
      body: [
        "Photography teams can use GetSibu to search large image collections through the tags, colours and metadata attached to each photograph.",
        "Photography generates volume quickly. One shoot can yield frames that differ only by a moment or a slight change of angle, followed by selects, retouched versions and exports in several sizes. Camera filenames say nothing about what is in the picture, and the photographer who knows where the good frame sits is rarely the person looking for it.",
        [
          "What rescues a large collection is information attached to every image rather than knowledge held by whoever shot it. ",
          { text: "AI-powered image discovery", page: 52 },
          " helps teams locate photographs, product shots and campaign images through AI-generated metadata, and the ",
          { text: "searchable image library", page: 26 },
          " makes large collections easier to reuse across campaigns and projects.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["One vocabulary for every shoot", "Colour as a route into the archive", "Camera and keyword metadata kept", "Retouched versions in one record", "Filters for resolution and date"],
      },
      highlight: {
        heading: "In practice",
        body: "A photo editor narrows a year of product shoots to the frames one photographer uploaded last spring by filtering on uploader and date, instead of scrolling through every folder.",
        tags: ["Photographers", "Photo editors", "Retouchers"],
      },
      glance: {
        heading: "Photography teams in brief",
        facts: [
          { label: "Team", value: "In-house and studio photography teams" },
          { label: "Typical material", value: "Shoots, selects, retouched images and exports" },
          { label: "Builds on", value: "Media Metadata Management", page: 22 },
          { label: "Supports", value: "AI Colour Detection", page: 36 },
        ],
        actions: [{ kind: "route", path: "/use-cases", label: "More in Use Cases" }]
      },
      sources: [{ kind: "pdf", page: 228 }, { kind: "pdf", page: 52 }, { kind: "pdf", page: 26 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 36 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "shoot-to-library",
      eyebrow: "Step by step",
      heading: "How a shoot becomes part of a searchable collection",
      intro: "From the memory card to a frame someone outside the shoot can find.",
      steps: [
        { heading: "Upload the shoot", body: "A large batch enters the library through upload workflows with progress indicators, so the team can see how many files are still being processed.", icon: "upload", page: 141 },
        { heading: "Let processing run", body: "Each image then moves through stages such as metadata extraction, thumbnail generation and AI-related processing before it is ready to be found.", icon: "refresh", page: 143 },
        { heading: "Keep what the camera recorded", body: "EXIF and XMP written by the camera and editing software, the creator and any custom keywords can become part of each image’s record.", icon: "database", page: 22 },
        { heading: "Approve tags in bulk", body: "Reviewing suggested tags in bulk keeps a shoot full of similar frames in line with the team’s vocabulary without a file-by-file chore.", icon: "sparkles", page: 47 },
        { heading: "Keep retouches together", body: "Retouched and adjusted versions of a photograph can be maintained in one structured record instead of as separate files beside the original.", icon: "layers", page: 98 },
      ],
      sources: [{ kind: "pdf", page: 141 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 47 }, { kind: "pdf", page: 98 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "search-routes",
      eyebrow: "Search routes",
      heading: "Four ways into a large image collection",
      tabs: [
        {
          label: "Tags",
          heading: "A vocabulary the whole team shares",
          icon: "tag",
          body: [
            "Tags only help if everyone uses the same words. When one photographer writes “exterior” and another “outdoor”, a search for one term can miss work labelled with the other. Agreeing a controlled vocabulary settles this before the collection grows too large to fix easily.",
            [{ text: "Creative asset organisation", page: 8 }, " in GetSibu rests on structured folders and scalable taxonomies, with hierarchical tags, synonyms, colours and inheritance, intended to stay useful as a library reaches thousands or millions of assets."],
          ],
          points: ["Broad subjects refined into specific ones", "Agreed terms before the collection grows"],
        },
        {
          label: "Colour",
          heading: "When the brief is a palette",
          icon: "palette",
          body: [
            "Photography is often requested by colour before subject: an image that sits comfortably with a campaign’s palette, or a cool-toned background for a cover.",
            [{ text: "Colour information can be extracted", page: 36 }, " from visual assets and used in discovery, so a search can start from the palette a brief describes when that is the most useful starting point."],
          ],
          points: ["Palette-led requests answered", "Useful for covers and backgrounds"],
        },
        {
          label: "Metadata",
          heading: "What the camera and the edit recorded",
          icon: "database",
          body: [
            "Every image carries information nobody typed on purpose, from capture details written by the camera to keywords added during editing. It is often the most dependable record of when and how a photograph was made.",
            [{ text: "Asset metadata search", page: 23 }, " looks through available metadata alongside tags and extracted content, giving a route to an image when its filename and folder are unknown."],
          ],
          points: ["Capture details as search material", "Editing keywords still useful"],
        },
        {
          label: "Filters",
          heading: "Narrowing to what can actually be used",
          icon: "filter",
          body: [
            "A frame that matches the brief is no use if it is too small for print or shows a product that has since been redesigned. Practical constraints narrow a search as much as subject does.",
            ["The ", { text: "media search platform", page: 13 }, " combines keywords with filters for file category, format, uploader, resolution and date, which reduces a large result set to images that fit the job."],
          ],
          points: ["Resolution for print or screen", "Dates to isolate one season’s shoot"],
        },
      ],
      sources: [{ kind: "pdf", page: 8 }, { kind: "pdf", page: 36 }, { kind: "pdf", page: 23 }, { kind: "pdf", page: 13 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "An inherited archive brought under one vocabulary",
      team: "A photography team",
      situation: "A company’s photography team inherits an archive built over years by photographers who each keyworded in their own way. Designers keep asking for images the team knows exist but cannot surface.",
      steps: [
        {
          heading: "The archive arrives with its keywords",
          body: ["The archive is migrated with its ", { text: "metadata preserved", page: 132 }, ", so the keywords each photographer wrote into the files arrive with the images instead of disappearing."],
        },
        {
          heading: "One set of tags is agreed",
          body: "The team settles on a single hierarchy of tags and notes which of the words photographers used mean the same thing.",
        },
        {
          heading: "Suggestions are brought into line",
          body: ["Where an AI-suggested tag uses a word outside the agreed vocabulary, the team ", { text: "overrides it", page: 48 }, " so the archive ends up speaking one language."],
        },
        {
          heading: "The vocabulary is checked against demand",
          body: [{ text: "Tag analytics", page: 186 }, " identify the tags designers use and search for most, and the team makes sure each of those terms has a place in the agreed hierarchy."],
        },
        {
          heading: "An old frame meets a new brief",
          body: ["A designer needs a warm-toned landscape for a printed brochure, searches the archive by ", { text: "colour", page: 36 }, " and narrows the results with a ", { text: "resolution filter", page: 19 }, " to frames large enough for print."],
        },
      ],
      outcome: "Designers find archive photographs through one agreed vocabulary, and the photography team spends less of its week retrieving old images and more of it making new ones.",
      link: { page: 8, label: "Creative Asset Organisation" },
      sources: [{ kind: "pdf", page: 132 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 48 }, { kind: "pdf", page: 186 }, { kind: "pdf", page: 36 }, { kind: "pdf", page: 19 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about GetSibu for photography teams",
      items: [
        {
          question: "Can a photography team find images by the photographer who took them?",
          answer: ["Creators can be part of an image’s metadata, and ", { text: "asset attribution", page: 116 }, " keeps creators and contributors associated with assets through collaboration and migration."],
        },
        {
          question: "Can a photography team keep an unreleased shoot private?",
          answer: ["Yes. Under ", { text: "default-deny access", page: 154 }, ", new folders can remain private until access is explicitly granted, so a shoot for an unannounced product need not be exposed by default."],
        },
        {
          question: "Can a photography team browse a shoot without downloading full-size files?",
          answer: [{ text: "Thumbnail generation", page: 146 }, " provides visual previews without the original file being downloaded, which is how a large shoot can be looked through at speed."],
        },
        {
          question: "Can a photography team see which of its photographs get used?",
          answer: [{ text: "Asset usage analytics", page: 182 }, " help show which assets receive attention and which remain underused, a practical guide to which subjects are worth shooting again."],
        },
      ],
      sources: [{ kind: "pdf", page: 22 }, { kind: "pdf", page: 116 }, { kind: "pdf", page: 154 }, { kind: "pdf", page: 146 }, { kind: "pdf", page: 182 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on organising large image collections",
      variant: "compact",
      pages: [36, 22, 8, 98, 220, 227],
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
