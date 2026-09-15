/**
 * 19 · Advanced Media Filters — /features/advanced-media-filters
 *
 * Angle (cluster: filters-saved-searches, primary): the filters themselves — categories, formats, sources,
 * resolutions and dates — what each is good for, and how to combine them progressively without filtering out
 * the right file. Media Search Platform (13) owns the search experience as a whole (keywords with filters,
 * uploader), Saved Asset Searches (17) owns saving and sharing a combination.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of filtering practice in media libraries; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 19,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Search & Discovery",
      lede: "Narrow a large creative library step by step with filters for category, format, source, resolution and date, and combine them so that the assets left at the end are the ones that genuinely fit.",
      visual: { diagram: "search-signals", focus: "metadata" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 19 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Reducing a large library to a relevant set",
      body: [
        "GetSibu filters can narrow results by category, format, source, resolution and date. Combined, they can reduce a large library, stage by stage, to a relevant collection of assets.",
        "Search is good at finding candidates and less good at judging fit. A keyword for a product might match hundreds of assets, of which only some are photographs, fewer are large enough for print, and fewer still are recent. Those properties are not matters of interpretation. They are facts about each file, and filters are the direct way to apply them.",
        [
          "Filters narrow what a query returns. On the ",
          { text: "media search platform", page: 13 },
          " they are paired with keywords, and they form the filtering stage of the ",
          { text: "asset discovery workflow", page: 30 },
          ", between the first search and the preview that confirms a choice.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Category, format, source, resolution, date", "Filters combine", "Narrowing in stages", "Facts about files, not interpretation", "Filters paired with a search"],
      },
      highlight: {
        heading: "In practice",
        body: "A print designer searching for a campaign visual keeps only images, then only formats suited to print, then only the largest resolutions, and chooses from what is left.",
        tags: ["Print", "Video", "Web"],
      },
      glance: {
        heading: "Media filters in brief",
        facts: [
          { label: "Area", value: "Search & Discovery" },
          { label: "Narrows by", value: "Category, format, source, resolution, date" },
          { label: "Prepared by", value: "Creative Asset Indexing", page: 21 },
          { label: "Works with", value: "Natural Language Asset Search", page: 18 },
        ],
        actions: [{ kind: "route", path: "/features/search-and-discovery", label: "More in Search & Discovery" }]
      },
      sources: [{ kind: "pdf", page: 19 }, { kind: "pdf", page: 13 }, { kind: "pdf", page: 30 }, { kind: "pdf", page: 21 }, { kind: "pdf", page: 18 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "filters",
      eyebrow: "Five filters",
      heading: "What each filter is good for",
      items: [
        {
          heading: "Category",
          body: "Separates the broad kinds of media, such as video, image, document and audio, so a request for footage is not buried under stills.",
          icon: "layers",
          points: ["A natural first filter", "Removes the wrong kind of media"],
        },
        {
          heading: "Format",
          body: "Distinguishes file types within a category, which matters when a deliverable needs a particular kind of file rather than any copy of the image or film.",
          icon: "document",
          points: ["Vector artwork rather than raster copies", "The file type a destination accepts"],
        },
        {
          heading: "Source",
          body: "Narrows results by source. In a library that gathers assets from connected storage and direct uploads, where a file came from can be a useful thing to narrow by.",
          icon: "cloud",
          points: ["Where a file came from", "Useful when assets arrive in several ways"],
        },
        {
          heading: "Resolution",
          body: "Keeps only files with enough resolution for the job, so a print layout or a large display is not handed a copy made for previews.",
          icon: "gauge",
          points: ["Print and large formats", "Preview-sized copies left out"],
        },
        {
          heading: "Date",
          body: "Limits results to a period, which is often how people remember a shoot, a delivery or a campaign.",
          icon: "calendar",
          points: ["A season or a launch window", "Recent material only"],
        },
      ],
      sources: [{ kind: "pdf", page: 19 }, { kind: "pdf", page: 192 }, { kind: "pdf", page: 6 }, { kind: "pdf", page: 121 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "narrowing",
      eyebrow: "Step by step",
      heading: "Narrowing a library one filter at a time",
      intro: "Order matters less than direction: each filter should remove only what you are sure you do not want.",
      steps: [
        { heading: "Start from a wide set", body: "Begin with a keyword, a description or the library as a whole, and expect the first set of results to be too large.", icon: "search" },
        { heading: "Apply the certain filter", body: "Choose the filter you are most sure of, usually the kind of media, and apply it before anything subtler.", icon: "check" },
        { heading: "Add technical needs", body: "Where the use demands it, add format and resolution so that every remaining file could actually be used.", icon: "gauge" },
        { heading: "Narrow by time or origin", body: "Use date or source to reach the delivery, shoot or period you have in mind.", icon: "calendar" },
        { heading: "Stop and review", body: "Once the set is small enough to scan, preview the candidates rather than filtering further and risking the loss of the right file.", icon: "eye" },
        { heading: "Keep the search", body: "If the same search will be needed again, save it and share it through a URL.", icon: "collection", page: 17 },
      ],
      sources: [{ kind: "pdf", page: 19 }, { kind: "pdf", page: 30 }, { kind: "pdf", page: 17 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "considerations",
      eyebrow: "Considerations",
      heading: "Filtering mistakes and how to avoid them",
      items: [
        {
          heading: "Over-filtering hides the right file",
          summary: "Every filter is an assumption about the asset you want.",
          icon: "filter",
          body: [
            "If the file was delivered a week earlier than you think, or exported in an unexpected format, a filter that seemed safe quietly excludes it. The results look complete and simply do not contain the answer.",
            "When a filtered set runs dry, remove the least certain filter first, before changing the keyword.",
          ],
        },
        {
          heading: "A filter is only as good as the record behind it",
          summary: "Dates and other properties depend on accurate information about each file.",
          icon: "database",
          body: [
            "A date can reflect when a file was created, when it was changed or when it entered the library, and after a migration those can be far apart. It is worth agreeing which of them your team means when it filters by date.",
            ["Preserving ", { text: "metadata such as EXIF and XMP during migration", page: 132 }, " helps keep that information meaningful once a library has moved."],
          ],
        },
        {
          heading: "Filters and tags answer different questions",
          summary: "Filters describe the file; tags describe what it shows or what it is for.",
          icon: "tag",
          body: [
            "Format, resolution and date are properties of the file itself. Whether an image shows a product in use, or belongs to a particular campaign, is a question for tags, metadata and search.",
            ["The two work well together: search for the content, and filter for the properties. ", { text: "AI-assisted tagging", page: 31 }, " helps supply the descriptive side without anyone classifying every file by hand."],
          ],
        },
        {
          heading: "Resolution needs depend on the channel",
          summary: "The right threshold changes with where an asset will appear.",
          icon: "gauge",
          body: [
            "Social placements, web pages, presentations, print and large-format display each tolerate different minimum sizes. Always choosing the largest file wastes time in transfer and editing when a smaller one would do.",
            "Filtering by resolution works best when a team agrees what counts as usable for each channel it publishes to.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 19 }, { kind: "pdf", page: 132 }, { kind: "pdf", page: 31 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about advanced media filters",
      items: [
        {
          question: "Which advanced media filters does GetSibu provide?",
          answer: ["Filters for categories, formats, sources, resolutions and dates. When searching, the ", { text: "media search platform", page: 13 }, " also lets keywords be combined with filters such as uploader."],
        },
        {
          question: "Can several advanced media filters be applied at the same time?",
          answer: "Yes. Filters can be combined, and each one added reduces the set further, which is how a large library is narrowed to a relevant collection.",
        },
        {
          question: "Is it better to search or to filter first when looking for media?",
          answer: "Either can work. A search is the better start when you know what the asset shows; filters are the better start when you know what kind of file you need. Many requests end up using both.",
        },
      ],
      sources: [{ kind: "pdf", page: 19 }, { kind: "pdf", page: 13 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on narrowing search results",
      variant: "compact",
      pages: [13, 17, 30, 21, 18],
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
