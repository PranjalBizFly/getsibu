/**
 * 44 · AI Creative Intelligence — /features/ai-creative-intelligence
 *
 * Angle (cluster: ai-intelligence): meaning — stored files becoming a more understandable information layer, with
 * searchable meaning attached to content instead of anonymous files. AI Media Understanding (43) owns interpreting
 * visual content for search and organisation workflows; AI Asset Intelligence (58) the combination of analysis,
 * metadata and search; AI Media Indexing (50) the signals; 380 the forward-looking essay.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how stored files differ from described assets; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 44,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "AI",
      lede: "What it means for a creative library to become a layer of information rather than a store of anonymous files, and how GetSibu can attach searchable meaning to the content it holds.",
      visual: { diagram: "ingest-pipeline", focus: "index" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 44 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "From anonymous files to assets that carry meaning",
      body: [
        "Creative intelligence, in GetSibu’s terms, transforms stored files into a more understandable layer of information. Instead of every asset being treated as an anonymous file, searchable meaning can be attached to what it contains.",
        "Storage on its own knows remarkably little. It can report a file’s name, type, size and the date it last changed, and nothing about the product in the photograph, the promise in the headline or the launch the video was made for. A library like that runs on memory: someone has to recall what a file is before anyone else can use it.",
        [
          "That limit is what separates keeping files from managing them. ",
          { text: "Modern digital asset management", page: 7 },
          " extends plain storage with AI-assisted organisation, contextual search and collaboration, and ",
          { text: "Make Every Asset Discoverable", page: 394 },
          " starts from the same observation: every image, video, document and audio file holds information that could be useful for future work.",
        ],
        [
          "Looking further ahead, ",
          { text: "Future of AI-Powered Creative Libraries", page: 380 },
          " considers how such libraries can become knowledge environments for an organisation’s creative content.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["An information layer over stored files", "Searchable meaning attached to content", "More than name, size and date", "Human context alongside AI analysis", "Knowledge that outlasts memory"],
      },
      highlight: {
        heading: "In practice",
        body: "A presentation saved as “Untitled deck” tells a new colleague nothing. With searchable meaning attached, including the words on its slides, it can answer a question that colleague is asking for the first time.",
        tags: ["Information layer", "Search", "Knowledge"],
      },
      glance: {
        heading: "Creative intelligence in brief",
        facts: [
          { label: "Area", value: "AI" },
          { label: "Turns", value: "Stored files into an information layer" },
          { label: "Attaches", value: "Searchable meaning to content" },
          { label: "Builds on", value: "AI Media Understanding", page: 43 },
        ],
        actions: [{ kind: "route", path: "/features/ai", label: "More in AI" }]
      },
      sources: [{ kind: "pdf", page: 44 }, { kind: "pdf", page: 7 }, { kind: "pdf", page: 394 }, { kind: "pdf", page: 380 }, { kind: "pdf", page: 43 }, EXPLAINS],
    },
    {
      kind: "before-after",
      id: "before-after",
      eyebrow: "The difference",
      heading: "One asset as an anonymous file and as understood content",
      beforeLabel: "An anonymous file",
      afterLabel: "An asset with meaning attached",
      before: ["Known by its name, size and date", "Useful only to people who remember it", "Invisible to a search for what it shows", "Its context gone when its creator moves on"],
      after: ["Described by what its content contains", "Findable by colleagues who never saw it", "Reached through meaning, not only its filename", "Context preserved in the asset record"],
      sources: [{ kind: "pdf", page: 44 }, { kind: "pdf", page: 22 }, EXPLAINS],
    },
    {
      kind: "layers",
      id: "layers",
      eyebrow: "What it is made of",
      heading: "The layers that turn a file into information",
      intro: "Meaning builds up in layers, from the stored file to what people and AI add to it.",
      layers: [
        { label: "The stored file", body: "The original asset, with its data, name and location, which on their own say little about what it shows or means." },
        { label: "Recorded metadata", body: "Details such as EXIF, XMP, file paths, creators and custom keywords, which can become part of the asset record.", page: 22 },
        { label: "Extracted text", body: "Words recovered from images, documents, presentations and screenshots and made part of the searchable asset information.", page: 38 },
        { label: "Suggested tags", body: "Tags suggested during processing from the asset’s content, which authorised users can review, approve or override.", page: 31 },
        { label: "Human context", body: "Comments left directly on the asset, so feedback stays attached to the creative work it concerns.", page: 62 },
        { label: "Searchable meaning", body: "Search that can draw on filenames, metadata, OCR, AI-generated tags, comments and semantic information in combination.", page: 11 },
      ],
      sources: [{ kind: "pdf", page: 22 }, { kind: "pdf", page: 38 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 16 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "tests",
      eyebrow: "Considerations",
      heading: "What makes an information layer worth having",
      items: [
        {
          heading: "It reaches everyday search",
          summary: "Meaning that nobody can search for changes very little.",
          icon: "search",
          body: [
            "Descriptions stored somewhere but never used add effort without adding value. The real test is whether a colleague typing an ordinary request is helped by them.",
            ["In GetSibu, ", { text: "search across creative libraries", page: 16 }, " can combine different information sources rather than depending on any single one."],
          ],
        },
        {
          heading: "People can correct it",
          summary: "An information layer is only trusted if its mistakes can be fixed.",
          icon: "check",
          body: [
            ["Meaning attached by AI will sometimes be wrong or incomplete. What matters is that the people responsible can put it right, and GetSibu ", { text: "combines automated analysis with human approval", page: 45 }, " so that teams retain control."],
          ],
        },
        {
          heading: "It survives a move",
          summary: "Context built up over years can vanish in a careless migration.",
          icon: "upload",
          body: [
            ["Accumulated meaning is valuable in its own right. When a library moves, ", { text: "metadata preservation", page: 132 }, " keeps the information associated with original files from being lost on the way."],
          ],
        },
        {
          heading: "New material joins it without extra work",
          summary: "Meaning should build up as a by-product of adding files, not as a project.",
          icon: "refresh",
          body: [
            ["New assets are brought into the layer through ", { text: "background processing", page: 311 }, ", which indexes them without anyone having to perform metadata or AI processing by hand. Until that finishes, a new file carries less meaning than it soon will."],
          ],
        },
        {
          heading: "It says something about the whole library",
          summary: "Meaning on individual assets adds up to a picture of the collection.",
          icon: "chart",
          body: [
            ["The step beyond single assets is ", { text: "AI asset intelligence", page: 58 }, ", which combines AI analysis with metadata and search capabilities to make a media library more informative as a whole."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 16 }, { kind: "pdf", page: 45 }, { kind: "pdf", page: 132 }, { kind: "pdf", page: 293 }, { kind: "pdf", page: 311 }, { kind: "pdf", page: 58 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about AI creative intelligence",
      items: [
        {
          question: "What is an anonymous file in the context of creative intelligence?",
          answer: "A file known only by technical details such as its name, type and date. Nothing about its content is recorded, so only someone who already knows what it is can find or reuse it.",
        },
        {
          question: "Do comments add to an asset’s meaning?",
          answer: ["They can. Feedback left on an asset records why it looks the way it does, which no analysis of the content can recover, and ", { text: "asset discussion history", page: 75 }, " lets teams understand how that feedback evolved."],
        },
        {
          question: "Does AI creative intelligence make manually entered metadata unnecessary?",
          answer: ["No. It reduces how much has to be typed by hand, in line with ", { text: "how AI changes DAM", page: 377 }, ", but details only people know, such as the brief or the client, still belong in the record."],
        },
        {
          question: "Where should a team start building a creative information layer?",
          answer: ["With the material people search for most and describe least, such as older campaign archives, large shoots and scanned documents. ", { text: "Bulk import", page: 130 }, " brings existing libraries in without uploading each file by hand."],
        },
      ],
      sources: [{ kind: "pdf", page: 44 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 75 }, { kind: "pdf", page: 377 }, { kind: "pdf", page: 130 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on meaning in creative libraries",
      variant: "compact",
      pages: [43, 58, 380, 394, 45, 7],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the intelligence cluster." }],
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
