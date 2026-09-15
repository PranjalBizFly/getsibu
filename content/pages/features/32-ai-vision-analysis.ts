/**
 * 32 · AI Vision Analysis — /features/ai-vision-analysis
 *
 * FRAMED (claim: scene-detection). The PDF paragraph for this page is withheld and never paraphrased.
 * Angle (cluster: ai-vision, primary): the umbrella — what analysing the visual content of a file means, the three
 * publishable attributes (objects 34, mood 35, colour 36) as different kinds of judgement, and where human review
 * comes in. Built only from the pages of those attributes and the tagging and search pages; nothing about video
 * segmentation or recognising people.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how visual analysis works in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 32,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "AI",
      lede: "What it means for software to read the visual content of a file, why some visual judgements are firmer than others, and how teams retain control when GetSibu combines automated analysis with human approval.",
      visual: { diagram: "ai-review" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 9 }, { kind: "pdf", page: 45 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Reading what an image shows, not what it is called",
      body: [
        "Vision analysis is the branch of AI that works from the visual content of a file. Instead of depending on a filename, a folder or keywords someone typed, it examines the image itself and describes qualities that people would otherwise have to record by hand.",
        [
          "Individual capabilities are explained on their own pages. ",
          { text: "AI object detection", page: 34 },
          " covers how GetSibu can identify objects appearing in supported media and associate them with confidence information. ",
          { text: "AI mood detection", page: 35 },
          " covers the visual mood characteristics AI analysis can identify, and ",
          { text: "AI colour detection", page: 36 },
          " covers colour information that can be extracted from visual assets.",
        ],
        "The three are different kinds of judgement. An object is either in the frame or it is not; colour is a property of the pixels; mood is an interpretation that two viewers might not share. Knowing which kind a result rests on tells you how far to trust it and how carefully to review it.",
        [
          "Whichever attribute is involved, the team stays in charge of the outcome. ",
          { text: "AI media understanding", page: 43 },
          " explains how interpreted visual content feeds search and organisation workflows.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Analysis of the visual content itself", "Concrete versus interpretive judgements", "Consistency is not correctness", "Text in images is a separate job", "People review the results"],
      },
      highlight: {
        heading: "In practice",
        body: "A brief may name an object, a mood and a colour in the same breath. Each is a separate route to the right image, and none of them depends on how the files were named.",
        tags: ["Objects", "Mood", "Colour"],
      },
      glance: {
        heading: "Vision analysis in brief",
        facts: [
          { label: "Area", value: "AI" },
          { label: "Works on", value: "Visual assets" },
          { label: "Covered in detail", value: "AI Object Detection", page: 34 },
          { label: "Human control", value: "AI-Powered Asset Management", page: 45 },
        ],
        actions: [{ kind: "route", path: "/features/ai", label: "More in AI" }]
      },
      sources: [{ kind: "pdf", page: 34 }, { kind: "pdf", page: 35 }, { kind: "pdf", page: 36 }, { kind: "pdf", page: 43 }, { kind: "pdf", page: 45 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "attributes",
      eyebrow: "Side by side",
      heading: "Three visual attributes and how they differ",
      intro: "The same image can be described in all three ways, and each description answers a different question.",
      columns: ["What it describes", "Kind of judgement", "A request it suits"],
      rows: [
        { label: "Objects", page: 34, cells: ["Things that appear in the media", "Concrete, with confidence information", "“Photos with a bicycle in them”"] },
        { label: "Mood", page: 35, cells: ["The visual feeling an asset conveys", "Interpretive: viewers can disagree", "“Something calm and hopeful”"] },
        { label: "Colour", page: 36, cells: ["Colour characteristics of a visual asset", "Descriptive: based on the colours present", "“Visuals that sit with a deep blue palette”"] },
      ],
      sources: [{ kind: "pdf", page: 34 }, { kind: "pdf", page: 35 }, { kind: "pdf", page: 36 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "roles",
      eyebrow: "Who it helps",
      heading: "How different people put visual attributes to work",
      tabs: [
        {
          label: "Designers",
          heading: "Start from the look a brief describes",
          icon: "palette",
          body: [
            "Briefs are rarely written in filenames. They ask for a warm image, a product on a plain background or something that sits comfortably with the campaign palette, and those are visual qualities before they are words.",
            ["GetSibu’s ", { text: "natural language search", page: 18 }, " lets people describe assets the way they remember them, including characteristics such as colour and subject, instead of needing the exact filename."],
          ],
          points: ["A way in that matches how briefs are written", "No need to know who stored the file"],
        },
        {
          label: "Marketers",
          heading: "Reuse imagery from earlier campaigns",
          icon: "megaphone",
          body: [
            "Marketing libraries fill with photography that was used once and then forgotten, often because it was filed under a campaign name nobody remembers.",
            ["In a ", { text: "searchable image library", page: 26 }, ", visual characteristics sit beside metadata, tags and extracted information as ways to find a picture again. ", { text: "AI-powered image discovery", page: 52 }, " applies the same thinking to photographs, product shots and campaign images."],
          ],
          points: ["Earlier shoots found by what they show", "Existing shoots considered before new ones"],
        },
        {
          label: "Library managers",
          heading: "Keep the analysis answerable to the team",
          icon: "check",
          body: [
            "Someone has to decide whether what the analysis suggests belongs in the library’s vocabulary. That role matters more as the volume of suggestions grows.",
            ["Suggested tags can be ", { text: "approved in bulk", page: 47 }, " when a batch looks right, and authorised users can ", { text: "override tags", page: 48 }, " whenever the generated classification does not match the team’s intended taxonomy."],
          ],
          points: ["Batches approved without opening every file", "Mismatches corrected by people with authority"],
        },
      ],
      sources: [{ kind: "pdf", page: 18 }, { kind: "pdf", page: 26 }, { kind: "pdf", page: 52 }, { kind: "pdf", page: 47 }, { kind: "pdf", page: 48 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "limits",
      eyebrow: "Considerations",
      heading: "Where machine vision still needs a human eye",
      items: [
        {
          heading: "Consistent is not the same as correct",
          summary: "Automated analysis tends to treat similar images alike, including when it misreads them.",
          icon: "copy",
          body: [
            "Consistency is one of the strengths of automated analysis: the tenth photograph of a set is read with the same attention as the first. The flip side is that a misreading can repeat across a whole shoot rather than appearing once.",
            "When one image in a batch has been described wrongly, look at its neighbours before approving the rest together. The same lighting, angle or styling is likely to have produced the same result.",
          ],
        },
        {
          heading: "Stylised work reads differently",
          summary: "Illustration, renders and heavy retouching are harder to describe than straightforward photography.",
          icon: "palette",
          body: [
            "Software that reads a well-lit photograph comfortably may describe a flat illustration, a collage or an abstract render less reliably, because the visual cues it relies on are exaggerated, simplified or missing. Libraries with a lot of stylised work benefit from closer review and from tags people add deliberately.",
          ],
        },
        {
          heading: "Words inside an image are a separate job",
          summary: "Printed text is read by OCR rather than described as a visual quality.",
          icon: "text",
          body: [
            ["A poster’s headline is not an object, a mood or a colour. Text visible in images, documents, presentations and screenshots is handled by ", { text: "AI OCR", page: 38 }, ", which extracts it so it can be searched."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 38 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about AI vision analysis",
      items: [
        {
          question: "Is AI vision analysis the same thing as AI-assisted tagging?",
          answer: ["They are closely linked. Vision analysis concerns what can be recognised in visual content; ", { text: "AI-assisted tagging", page: 31 }, " is how suggested tags are produced during processing and then reviewed, approved or overridden by authorised users."],
        },
        {
          question: "Does AI vision analysis make every image in a library findable?",
          answer: ["It widens the routes to an image, but it works best with the rest of the record. ", { text: "Creative asset search", page: 11 }, " also draws on filenames, metadata, OCR text and comments, so human tags and metadata still matter for anything the image itself cannot show."],
        },
        {
          question: "Can AI vision analysis get an image wrong?",
          answer: "Yes. Like any automated analysis, it can miss a subject or describe one imperfectly, which is why GetSibu pairs AI suggestions with human control: teams approve what fits and override what does not.",
        },
      ],
      sources: [{ kind: "pdf", page: 31 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 45 }, { kind: "pdf", page: 9 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on analysing visual media",
      variant: "compact",
      pages: [34, 35, 36, 43, 38, 31],
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
