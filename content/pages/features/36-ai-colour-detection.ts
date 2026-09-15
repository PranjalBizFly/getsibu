/**
 * 36 · AI Colour Detection — /features/ai-colour-detection
 *
 * Angle (cluster: ai-vision): colour characteristics extracted from visual assets for discovery — the requests
 * where colour is the right way in, and why colour in a file is not always the colour people expect.
 * Mood (35) owns the feeling a palette contributes to; Vision Analysis (32) the umbrella; Object Detection (34)
 * what an image contains.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of colour in creative imagery; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 36,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "AI",
      lede: "How colour extracted from visual assets becomes part of discovery in GetSibu, when a colour-led search is the right approach, and why the colour in a file is not always the colour you expect.",
      visual: { diagram: "ai-review", focus: "colour" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 36 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Colour as a route into a visual library",
      body: [
        "GetSibu can extract colour information from visual assets and use it within asset discovery. Where colour is relevant to what someone needs, visual content can be searched by its colour characteristics.",
        "Colour is one of the first things people remember about an image and one of the last things anyone types as a keyword. Designers match imagery to a layout’s palette, brand teams need visuals that sit with brand colours, and seasonal campaigns lean on particular hues. Without colour information, each of those requests turns into scrolling through thumbnails.",
        "Colour is not always the right way in, though. It decides whether a photograph works behind a pale headline, and it tells you almost nothing useful about a scanned contract. Knowing when a colour-led search helps is part of using it well.",
        [
          "Colour is also often only part of what someone recalls. ",
          { text: "Mood detection", page: 35 },
          " covers the feeling a palette contributes to, and ",
          { text: "object detection", page: 34 },
          " covers what the image contains, so the same asset can be reached through more than one of its qualities.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Colour information from visual assets", "Search by colour characteristics", "Most useful when colour matters", "Colour in the file, not on set", "Exact matches confirmed by eye"],
      },
      highlight: {
        heading: "In practice",
        body: "A designer laying out a spread on a deep green background looks for photography whose colours will sit comfortably with it, instead of opening one shoot after another.",
        tags: ["Designers", "Brand", "Layouts"],
      },
      glance: {
        heading: "Colour detection in brief",
        facts: [
          { label: "Area", value: "AI" },
          { label: "Extracted from", value: "Visual assets" },
          { label: "Part of", value: "AI Vision Analysis", page: 32 },
          { label: "Used in", value: "Asset Discovery Workflow", page: 30 },
        ],
        actions: [{ kind: "route", path: "/features/ai", label: "More in AI" }]
      },
      sources: [{ kind: "pdf", page: 36 }, { kind: "pdf", page: 35 }, { kind: "pdf", page: 34 }, { kind: "pdf", page: 30 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "requests",
      eyebrow: "Where it helps",
      heading: "Requests where colour is the quickest way in",
      items: [
        {
          heading: "Layouts and palettes",
          body: "Designers fitting imagery to a page, a slide or a banner can start from the colours the layout needs rather than from a subject.",
          icon: "palette",
          points: ["Imagery that sits with a layout", "Fewer files opened just to check"],
        },
        {
          heading: "Photography collections",
          body: "Photography teams can search large image collections using tags, colours and metadata, which suits libraries built from many shoots.",
          icon: "camera",
          points: ["Colour beside tags and metadata", "Helpful across long-running shoots"],
          page: 228,
        },
        {
          heading: "Product colourways",
          body: "When a product is made in several colours, a colour-led search can help separate the imagery of one colourway from another.",
          icon: "store",
          points: ["One variant’s imagery kept together", "Variants easier to gather"],
        },
        {
          heading: "Seasonal looks",
          body: "Campaigns built around a particular palette can revisit earlier imagery that shares it before anyone books a new shoot.",
          icon: "calendar",
          points: ["Existing photography reconsidered", "A season’s palette carried across placements"],
        },
        {
          heading: "Brand palettes",
          body: "Brand teams that organise approved assets and brand-specific tags can use colour as one more way to find candidate imagery.",
          icon: "heart",
          points: ["Brand colours as a starting point", "A shortlist for brand review"],
          page: 214,
        },
        {
          heading: "Remembered details",
          body: "Natural language search lets people describe an asset by characteristics such as colour, the way they remember it, rather than by its filename.",
          icon: "search",
          points: ["“The one with the yellow wall”", "No folder knowledge needed"],
          page: 18,
        },
      ],
      sources: [{ kind: "pdf", page: 36 }, { kind: "pdf", page: 228 }, { kind: "pdf", page: 214 }, { kind: "pdf", page: 18 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "colour-shifts",
      eyebrow: "Considerations",
      heading: "Why the same colour can look different in two files",
      items: [
        {
          heading: "Lighting and white balance",
          summary: "The light a photograph was taken in shifts every colour in it.",
          icon: "eye",
          body: [
            "A white product photographed under warm indoor light and again in daylight will not look the same in the two files, and neither may match the product in your hand.",
            "Colour information describes the asset as it exists in the library, which is not always what stood in front of the camera.",
          ],
        },
        {
          heading: "Grading and retouching",
          summary: "Creative treatment changes colour on purpose.",
          icon: "sparkles",
          body: [
            "A campaign grade may push greens towards teal or warm up an entire set. In colour terms, the graded image and the untreated original can be quite different files, which is worth remembering when both are kept.",
            ["If both treatments need to stay available, ", { text: "image version management", page: 98 }, " lets teams maintain different versions of a visual asset in one structured record."],
          ],
        },
        {
          heading: "Compression and exports",
          summary: "Small web exports can lose subtle colour detail.",
          icon: "download",
          body: [
            "Heavily compressed files can band smooth gradients and flatten delicate tones. Where possible, keep high-quality masters in the library alongside the derivatives that were published, so a colour search has the best material to work from.",
          ],
        },
        {
          heading: "Memorable details versus the overall palette",
          summary: "People often remember an image by a small, vivid patch of colour.",
          icon: "image",
          body: [
            "A red door or a yellow umbrella can define a photograph in someone’s memory even when most of the frame is grey. Memory and measurement do not always agree about which colour matters, so if a colour search misses, try describing the broader palette as well.",
          ],
        },
        {
          heading: "Exact brand colours",
          summary: "Colour search builds a shortlist; brand checks still happen by eye.",
          icon: "check",
          body: [
            "Brand guidelines specify colours precisely, and print and displays reproduce them differently. Use colour characteristics to find candidates, then compare the finalists with the approved reference before anything is published.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 36 }, { kind: "pdf", page: 98 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "An autumn palette built from photography already owned",
      team: "A retail brand team",
      situation: "A retail brand team is planning an autumn promotion around rust, ochre and deep green. The creative lead would rather reuse strong existing photography than commission a new shoot.",
      steps: [
        { heading: "Colour leads the search", body: "The team searches the library for visual content with those colour characteristics, across several seasons of product and lifestyle photography." },
        { heading: "Candidates are judged by eye", body: [{ text: "Thumbnails", page: 146 }, " let the lead discard images whose colours drifted in grading, without downloading each original."] },
        { heading: "Approval is confirmed", body: ["Before anything is used, each finalist’s ", { text: "review status", page: 76 }, " shows that it has completed the approval process."] },
        { heading: "The search is kept", body: "The palette search is saved so the rest of the season’s placements can draw on the same set." },
      ],
      outcome: "The promotion runs largely on imagery the brand already owned, chosen because its colours fit rather than because someone remembered the right folder.",
      link: { page: 231, label: "GetSibu for Retail Brands" },
      sources: [{ kind: "pdf", page: 36 }, { kind: "pdf", page: 146 }, { kind: "pdf", page: 76 }, { kind: "pdf", page: 17 }, { kind: "pdf", page: 231 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about AI colour detection",
      items: [
        {
          question: "What kind of assets does AI colour detection apply to?",
          answer: ["Visual assets. For files whose value lies in their wording rather than their appearance, ", { text: "AI OCR", page: 38 }, ", which extracts text from images, documents, presentations and screenshots, is the more useful route."],
        },
        {
          question: "Does a colour match mean an image is approved for brand use?",
          answer: ["No. Colour finds candidates; it says nothing about whether an image may be used. Teams can create ", { text: "approved-only views", page: 103 }, " so users reach content that has completed the required review process."],
        },
        {
          question: "Is colour detection the same as giving tags a colour?",
          answer: ["No. Colour detection describes the colours in an asset’s visual content. Colour in a taxonomy belongs to how tags are organised, alongside the ", { text: "hierarchy, synonyms and inheritance", page: 8 }, " that structure a tagging system."],
        },
      ],
      sources: [{ kind: "pdf", page: 36 }, { kind: "pdf", page: 38 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 8 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on searching by visual qualities",
      variant: "compact",
      pages: [35, 32, 34, 228, 231, 18],
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
