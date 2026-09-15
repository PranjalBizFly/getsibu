/**
 * 249 · Adobe After Effects Integration — /integrations/adobe-after-effects
 * (HELD draft; own claim: adobe-premiere-after-effects — this page names After Effects only)
 *
 * Angle: motion design and visual effects. New imagery built from many elements (stills, footage,
 * sound, storyboards), approved brand parts, licensed material and the iterations of each shot.
 * page 248 owns editing footage into cuts; page 250 owns video review workflows.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of motion design and visual-effects practice; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 249,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Integrations",
      lede: "What the After Effects integration means for motion designers and visual-effects artists, whose work is assembled from many separate elements that each need to be current, approved and easy to find.",
      visual: { diagram: "connector-flow", label: "After Effects" },
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 249 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "The many elements behind a moving image",
      body: [
        "After Effects integration supports motion design and visual-effects workflows. That work builds new imagery out of existing material, so every animated sequence or finished shot depends on elements that have to be found, trusted and kept in order.",
        "An animated end card can combine a logo, brand colours, an illustration, a music sting and a short piece of footage. A visual-effects shot adds background plates, reference images and elements carried over from earlier shots. If any one of those is outdated, unapproved or the wrong version, the mistake often shows up only when the render is reviewed, after the time spent producing it.",
        [
          "The library is where those elements can be relied on. GetSibu brings videos, images, documents and audio into ",
          { text: "one central workspace", page: 1 },
          ", and ",
          { text: "approved-only views", page: 103 },
          " let people reach content that has completed the required review process.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Motion design and visual-effects workflows", "New imagery built from many elements", "Approved parts ready to reuse", "Plates and references kept findable", "Movement judged at the frame"],
      },
      highlight: {
        heading: "In practice",
        body: "A visual-effects artist needs a clean background plate. She describes the footage she remembers and narrows the results by resolution, instead of scrolling through a shared drive of unnamed clips.",
        tags: ["Motion designers", "VFX artists", "Brand teams"],
      },
      glance: {
        heading: "The After Effects integration in brief",
        facts: [
          { label: "Area", value: "Integrations" },
          { label: "Supports", value: "Motion design and visual-effects workflows" },
          { label: "Approved elements", value: "Approved Asset Library", page: 103 },
          { label: "Review", value: "Frame-Accurate Review", page: 65 },
        ],
      },
      sources: [{ kind: "pdf", page: 249 }, { kind: "pdf", page: 1 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 18 }, { kind: "pdf", page: 13 }, { kind: "pdf", page: 65 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "elements",
      eyebrow: "What the work draws on",
      heading: "The material a motion design library has to hold well",
      items: [
        { heading: "Stills and illustrations", icon: "image", page: 26, body: "Images become searchable through metadata, tags, visual characteristics and extracted information, so a product still or illustration can be found for the next sequence.", points: ["Style frames and product stills", "Found by what they show"] },
        { heading: "Footage and plates", icon: "video", page: 25, body: "Videos can be indexed and enriched with AI-generated information, which makes background plates and supporting footage discoverable without watching each clip.", points: ["Plates for compositing", "Supporting footage for sequences"] },
        { heading: "Music and sound", icon: "audio", page: 28, body: "Audio assets can be managed alongside other creative formats, keeping stings and sound design near the visuals they belong to.", points: ["Stings and sound effects", "Kept with the visuals"] },
        { heading: "Storyboards and scripts", icon: "document", page: 27, body: "Documents can be indexed using extracted text, metadata and organisational tags, so the storyboard for a sequence can be located without opening every PDF or presentation.", points: ["Boards, scripts and briefs", "Found by the words inside"] },
        { heading: "Mood and feel", icon: "sparkles", page: 35, body: "AI analysis can identify visual mood characteristics and make them searchable, which helps when a brief asks for material with a particular feeling.", points: ["Reference that matches a brief", "Searchable visual feeling"] },
        { heading: "Renders and their copies", icon: "copy", page: 40, body: "Duplicate detection combines exact and perceptual hashing to catch identical files and visually equivalent copies, including re-encoded ones, which render outputs often produce.", points: ["The same render saved twice", "Re-encoded copies identified"] },
      ],
      sources: [{ kind: "pdf", page: 26 }, { kind: "pdf", page: 25 }, { kind: "pdf", page: 28 }, { kind: "pdf", page: 27 }, { kind: "pdf", page: 35 }, { kind: "pdf", page: 40 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "kinds-of-work",
      eyebrow: "Different kinds of motion work",
      heading: "How motion graphics, visual effects and review each rely on the library",
      tabs: [
        {
          label: "Motion graphics",
          heading: "Animation assembled from brand parts",
          icon: "palette",
          body: [
            "Animated logos, lower thirds, end cards and short social pieces reuse the same small set of brand parts in many combinations. A slightly wrong logo or an old colour treatment is then repeated in every piece built from it.",
            "Structured brand guardrail tags can identify the assets that comply with specific organisational requirements, which gives motion designers a way to tell the approved logo versions and colour treatments from the rest.",
          ],
          points: ["Brand parts reused across many pieces", "Approved brand elements easier to identify"],
          link: { page: 105, label: "Brand Guardrail Tags" },
        },
        {
          label: "Visual effects",
          heading: "Shots built on plates and references",
          icon: "layers",
          body: [
            "A visual-effects shot draws on background plates, clean passes, reference photography and lighting references, often gathered long before anyone works on the shot. When that material is scattered, artists end up recreating references that already exist somewhere.",
            ["Camera information matters here as much as the pictures. Details such as ", { text: "EXIF, XMP and custom keywords", page: 22 }, " can become part of the asset record, keeping the technical context a compositor relies on with each plate."],
          ],
          points: ["Plates kept with their camera details", "References found rather than recreated"],
        },
        {
          label: "Review",
          heading: "Judging movement at the right frame",
          icon: "eye",
          body: [
            "Motion work is judged in motion. The timing of an ease, a flicker on a single frame or a title that lands a beat too late are hard to describe in an email and easy to point at in the video itself.",
            "Frame-accurate review allows creative teams to discuss specific moments in video, which suits animation, where the whole point of a note is often a single moment.",
          ],
          points: ["Notes tied to exact moments", "Less guesswork about timing feedback"],
          link: { page: 65, label: "Frame-Accurate Review" },
        },
      ],
      sources: [{ kind: "pdf", page: 105 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 65 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A launch animation built from approved parts",
      team: "An in-house motion team",
      situation: "An in-house motion design team is producing a launch animation for a new product, followed by shorter social versions. Two animators, a product marketer and the brand lead are involved.",
      steps: [
        { heading: "Elements come from the library", body: "The animators search the library for the approved product stills, last year’s logo animation and the campaign’s music instead of asking colleagues to send files." },
        { heading: "The animation is built in After Effects", body: "With the integration supporting their motion design workflow, the animators concentrate on timing and movement in the environment they already know." },
        { heading: "The first render gets comments", body: ["The product marketer leaves ", { text: "comments at points on the timeline", page: 64 }, " where a feature appears too briefly, and mentions the brand lead about the colour of the logo."] },
        { heading: "The animation is approved", body: "Once the timing notes are resolved, the brand lead marks the launch animation as approved." },
        { heading: "Social versions reuse the same parts", body: "The shorter social versions are assembled from the same approved stills, logo animation and music, rather than from exported copies of the launch film." },
      ],
      outcome: "The animation, the elements it used and the decisions behind it stay together in the library, so the next campaign can start from approved parts instead of rebuilding them.",
      link: { page: 222, label: "GetSibu for In-House Creative Teams" },
      sources: [{ kind: "pdf", page: 249 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 64 }, { kind: "pdf", page: 66 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 222 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about the After Effects integration",
      items: [
        {
          question: "How can a motion design team avoid using stock material past its licence?",
          answer: ["Record the licence terms when the material enters the library. ", { text: "Expiring creative assets", page: 104 }, " carry expiry information that can help teams identify content that should no longer be used after a specified period."],
        },
        {
          question: "How does motion design change what a team needs from its library?",
          answer: "Editing mostly selects and arranges footage into a cut. Motion design and visual effects build new imagery from many elements, so the library questions shift towards approved parts, licensing and the iterations of each shot or animation.",
        },
        {
          question: "Can motion design elements be organised in a structured taxonomy?",
          answer: ["Yes. ", { text: "Creative asset organisation", page: 8 }, " in GetSibu uses structured folders and scalable taxonomies with hierarchical tags, synonyms, colours and inheritance, so logo animations, backgrounds and sound effects can each have a clear place."],
        },
        {
          question: "Which GetSibu use cases involve motion design work?",
          answer: ["Motion work appears in many teams, including ", { text: "creative studios", page: 220 }, " that manage images, videos, audio and documents in one searchable environment, and ", { text: "social media teams", page: 234 }, " maintaining a searchable library of social content and campaign assets."],
        },
      ],
      sources: [{ kind: "pdf", page: 104 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 220 }, { kind: "pdf", page: 234 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on managing motion design material",
      variant: "compact",
      pages: [103, 105, 104, 65, 40, 220],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Build a Smarter Creative Workflow",
      conversionPage: 396,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 396 }],
    },
  ],
};

export default page;
