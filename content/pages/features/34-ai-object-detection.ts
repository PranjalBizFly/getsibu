/**
 * 34 · AI Object Detection — /features/ai-object-detection
 *
 * Angle (cluster: ai-vision): objects identified in supported media with confidence information, and how those
 * object tags become a route to assets in search. Vision Analysis (32) owns the umbrella of attributes, Mood (35)
 * and Colour (36) their own attributes, Tag Confidence (46) the confidence mechanism in depth.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of object detection in creative libraries; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 34,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "AI",
      lede: "What object detection adds to a creative library, why its results come with confidence information, and how object tags can open another route to the assets you need.",
      visual: { diagram: "ai-review", focus: "object" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 34 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Naming the things that appear in an asset",
      body: [
        "GetSibu can identify objects that appear in supported media and attach confidence information to each one. The resulting tags are not an end in themselves: they can later contribute to asset search and discovery.",
        "Object detection answers a plain but constant question about a file: what is in it? A retoucher needs the shots with the new bottle, a social editor wants imagery with a dog, a planner is checking which lifestyle photographs already feature a sofa. Those details are rarely in a filename, and few contributors think to type them in.",
        [
          "Detection is a judgement rather than a lookup, which is why each result carries confidence information and why people can still correct it. Once object tags exist, ",
          { text: "AI asset discovery", page: 12 },
          " helps people find files by what appears inside them, which is particularly useful in libraries full of visually similar material.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Objects identified in supported media", "Confidence information on each result", "Object tags as a route to assets", "General names versus your own names", "People confirm or correct"],
      },
      highlight: {
        heading: "In practice",
        body: "A tea brand that needs pictures with a teapot in them can start from the object rather than from shoot dates, then choose the best candidate by eye.",
        tags: ["Product imagery", "Search"],
      },
      glance: {
        heading: "Object detection in brief",
        facts: [
          { label: "Area", value: "AI" },
          { label: "Result", value: "Object tags with confidence information" },
          { label: "Part of", value: "AI Vision Analysis", page: 32 },
          { label: "Contributes to", value: "Creative Asset Search", page: 11 },
        ],
        actions: [{ kind: "route", path: "/features/ai", label: "More in AI" }]
      },
      sources: [{ kind: "pdf", page: 34 }, { kind: "pdf", page: 48 }, { kind: "pdf", page: 12 }, { kind: "pdf", page: 11 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "materials",
      eyebrow: "By material",
      heading: "What object tags do for different kinds of imagery",
      tabs: [
        {
          label: "Product imagery",
          heading: "Trace a product across many shoots",
          icon: "camera",
          body: [
            "Product photography is made in studios, on location and in styled settings, then spread across campaigns. The product is the common thread between those files, yet it is often the one thing their names leave out.",
            ["With ", { text: "AI-powered image discovery", page: 52 }, ", teams can locate photographs, product shots and campaign images through AI-generated metadata, then choose the right variant by eye."],
          ],
          points: ["Studio, location and styled shots gathered", "No reliance on how files were named"],
        },
        {
          label: "Campaign photography",
          heading: "Reuse the details a later brief asks for",
          icon: "megaphone",
          body: [
            "Campaign photographs are full of incidental objects: furniture, bicycles, food, plants, cups on a table. Months later, those details are exactly what a new brief requests.",
            ["A request that starts from an object can reach an image filed under a campaign name nobody remembers, and ", { text: "advanced media filters", page: 19 }, " then reduce the results by format, resolution or date."],
          ],
          points: ["Incidental objects become useful", "Filters narrow a broad result set"],
        },
        {
          label: "Near-identical frames",
          heading: "Separate files that look alike at a glance",
          icon: "layers",
          body: [
            "A long shoot produces many frames that differ only slightly. What distinguishes them is often a single object: a cup on the table in some frames and not in others, a prop moved between set-ups.",
            ["Where a detected object differs between otherwise similar frames, object tags can give search something to separate them by, and ", { text: "thumbnails", page: 146 }, " provide fast visual previews without downloading the original files."],
          ],
          points: ["A possible way to tell similar frames apart", "A quick visual check before download"],
        },
      ],
      sources: [{ kind: "pdf", page: 52 }, { kind: "pdf", page: 19 }, { kind: "pdf", page: 146 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "reading-tags",
      eyebrow: "Considerations",
      heading: "Reading object tags with care",
      items: [
        {
          heading: "Strong and weak associations",
          summary: "Not every detected object is equally clear in the image.",
          icon: "gauge",
          body: [
            "An object in sharp focus at the centre of a photograph gives analysis far more to work with than one at the edge of the frame, in shadow or partly covered.",
            [{ text: "Confidence information", page: 46 }, " is there to show that difference: it helps users understand how strongly the system associates a tag with an asset, so reviewers know where to look first."],
          ],
        },
        {
          heading: "The kind of thing, not your product name",
          summary: "Detection works in general terms; brand and product names come from people.",
          icon: "tag",
          body: [
            "Detection may recognise that a photograph shows a shoe. Nothing in the pixels says that the shoe is this season’s model in the new colourway, because that knowledge lives with the team.",
            ["Give those specifics a place in a structured vocabulary: ", { text: "hierarchical tags", page: 8 }, " make it possible to keep a general term and the precise names people search with in one organisation system."],
          ],
        },
        {
          heading: "Busy images carry many objects",
          summary: "A detailed photograph can hold far more objects than anyone will search for.",
          icon: "image",
          body: [
            "A street photograph or a styled interior can contain a great many recognisable things, most of them unrelated to why the image was made.",
            "When reviewing, concentrate on the objects someone is likely to search for rather than trying to perfect every entry.",
          ],
        },
        {
          heading: "Objects are one attribute among several",
          summary: "Some requests concern how an image feels or its palette, not its contents.",
          icon: "sparkles",
          body: [
            ["Object tags answer the question of what an image contains. Requests about atmosphere or palette are better served by ", { text: "mood detection", page: 35 }, " and ", { text: "colour detection", page: 36 }, ", which describe other qualities of the same asset."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 46 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 35 }, { kind: "pdf", page: 36 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "Homeware imagery found by what it shows",
      team: "An e-commerce team",
      situation: "An e-commerce team is refreshing the lifestyle imagery for its homeware range. Several seasons of shoots sit in the library, filed by season and photographer rather than by what each photograph contains.",
      steps: [
        { heading: "The search starts from an object", body: "A designer searches for images containing a lamp, instead of opening each season’s folder in turn." },
        { heading: "Closer calls get a closer look", body: "Where a lamp is small, half out of frame or partly hidden, the designer looks carefully at the photograph before adding it to the shortlist." },
        { heading: "A mistaken tag is fixed", body: ["One photograph tagged with a lamp actually shows a tall vase, so a library manager ", { text: "overrides the tag", page: 48 }, " before it misleads anyone else."] },
        { heading: "The range name is added", body: "The chosen photographs also receive a tag with the homeware range’s own name, so the next search can start from the term the team actually uses." },
      ],
      outcome: "The shortlist is built from what the photographs contain, and the library leaves the exercise a little more accurate than it was before the search began.",
      link: { page: 230, label: "GetSibu for E-Commerce Brands" },
      sources: [{ kind: "pdf", page: 34 }, { kind: "pdf", page: 48 }, { kind: "pdf", page: 4 }, { kind: "pdf", page: 230 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about AI object detection",
      items: [
        {
          question: "What does GetSibu attach to an object it detects?",
          answer: "Confidence information. An identified object comes with an indication of how strongly the system associates it with the asset, and the resulting tag can later contribute to search and discovery.",
        },
        {
          question: "Does every object tag have to be checked one file at a time?",
          answer: ["No. Teams can ", { text: "approve suggested tags in bulk", page: 47 }, ", which is far faster than reviewing every file individually, and keep their closer attention for images where a wrong object would matter most."],
        },
        {
          question: "Why might an obvious object be missing from an image’s tags?",
          answer: "Detection works from what is visible, and an object that is tiny, stylised or mostly hidden gives it little to go on. A missing tag is weak evidence that the object is absent, so a search that returns nothing is worth repeating with other words or another route.",
        },
        {
          question: "What happens when object detection tags something incorrectly?",
          answer: "Nothing about the mistake is permanent. AI recommendations can be overridden by authorised users, so a wrong object does not have to stay attached to the asset.",
        },
      ],
      sources: [{ kind: "pdf", page: 34 }, { kind: "pdf", page: 47 }, { kind: "pdf", page: 48 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on detecting what media contains",
      variant: "compact",
      pages: [46, 32, 35, 36, 52, 230],
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
