/**
 * 394 · Make Every Asset Discoverable — /get-started/make-every-asset-discoverable
 *
 * Angle (clusters: discovery-workflow, conversion): the information already inside images, video, documents and
 * audio, read by the library instead of retyped, so the files nobody described can be reached, and the later work
 * (reuse, reference, re-editing, credit) that depends on it. AI Asset Discovery (12) owns look-alike libraries;
 * Intelligent Media Library (5) owns the layers of information an asset gathers.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of what makes creative files findable; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 394,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Get Started",
      lede: "How the information already held in images, video, documents and audio can become something a library searches, where discoverability usually breaks down, and the future work that depends on getting it right.",
      visual: { diagram: "library-search" },
      actions: [
        { kind: "global", cta: "primary" },
        { kind: "page", page: 21, label: "How creative asset indexing works" },
      ],
      sources: [{ kind: "pdf", page: 394 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Most of what makes a file findable is already inside it",
      body: [
        "Each image, video, document and audio file already carries information that later work may need. GetSibu’s approach is to turn that information into searchable library data rather than leave it sealed inside the files.",
        "A great deal of description exists before anyone types a word. A camera writes the date and equipment into a photograph; a presentation contains its own headings; a product sheet spells out the product it describes; a design file often records who made it. The practical question for any library is whether it reads that information or waits for someone to retype it, because retyping is the step busy people skip.",
        [
          "The reading happens during ",
          { text: "asset processing", page: 143 },
          ", when uploaded files move through stages such as metadata extraction, thumbnail generation and AI-related processing. By the time someone searches, the library can draw on what the file said about itself as well as on what people added.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Information already inside each file", "Read by the library, not retyped", "Undescribed assets brought within reach", "Descriptions checked by people", "Found later, for work not yet planned"],
      },
      highlight: {
        heading: "In practice",
        body: "A photograph from an old shoot arrives without keywords, but its embedded EXIF details and creator can become part of the asset record, so a search for that photographer can still reach it.",
        tags: ["Photography", "Embedded metadata"],
      },
      glance: {
        heading: "Discoverability in brief",
        facts: [
          { label: "Area", value: "Get Started" },
          { label: "Applies to", value: "Images, video, documents and audio" },
          { label: "Draws on", value: "Metadata, extracted content, tags and comments" },
          { label: "Then used in", value: "Asset Discovery Workflow", page: 30 },
        ],
      },
      sources: [{ kind: "pdf", page: 394 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 30 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "gaps",
      eyebrow: "Where discoverability breaks",
      heading: "Gaps that keep an asset out of reach, and how each one closes",
      items: [
        {
          heading: "Images with no words anywhere near them",
          summary: "A photograph named by a camera’s numbering gives a search nothing to match.",
          icon: "image",
          body: [
            "Picture collections fill up with files named by sequence numbers, especially after large shoots. Nothing in the name says what the frame shows, and nobody has time to describe hundreds of alternates.",
            ["GetSibu can ", { text: "suggest tags during processing", page: 31 }, ". Analysis can also identify visual mood characteristics and make them searchable, so an image can carry some description before anyone writes one."],
          ],
        },
        {
          heading: "Footage nobody has time to watch",
          summary: "Video reveals its content only while it plays.",
          icon: "video",
          body: [
            "A long batch of rushes might hold the one shot a later edit needs, but checking by eye does not scale beyond a few clips.",
            [{ text: "Videos can be indexed and enriched with AI-generated information", page: 25 }, ", which lets relevant footage be discovered without someone manually reviewing every file."],
          ],
        },
        {
          heading: "Knowledge that lives in conversations",
          summary: "Some of the most useful information about an asset is said, not stored.",
          icon: "message",
          body: [
            "Why a version was chosen, which market a crop was made for and what a client objected to usually come up in review rather than in a metadata field.",
            "Because GetSibu search draws on comments as well as tags and metadata, a note left during review can later help someone else find the asset.",
          ],
        },
        {
          heading: "Descriptions in the wrong vocabulary",
          summary: "A tag that does not match the team’s words misleads as much as it helps.",
          icon: "tag",
          body: [
            "Any automatic suggestion may use a different word from the one a team prefers. A team that calls a product range by its internal name will not find assets described only in generic language.",
            "Authorised users can override tags whenever an automatically generated classification does not match the team’s intended taxonomy, which helps keep the library’s tags in line with the words colleagues actually search with.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 31 }, { kind: "pdf", page: 35 }, { kind: "pdf", page: 25 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 48 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "future-work",
      eyebrow: "Future work",
      heading: "Later jobs that depend on today’s information",
      tabs: [
        {
          label: "Reuse",
          heading: "A new campaign that could use an existing image",
          icon: "refresh",
          body: [
            "Reshoots are often booked simply because nobody could find the right frame from last time. The cost is paid in budget and in the inconsistency between old and new material.",
            [
              "Images become searchable through ",
              { text: "metadata, tags, visual characteristics and extracted information", page: 26 },
              ", which makes large collections easier to reuse across campaigns and projects.",
            ],
          ],
          points: ["Existing work found before it is recreated", "Visual characteristics as a route in"],
        },
        {
          label: "Reference",
          heading: "A brief that needs wording from an old document",
          icon: "document",
          body: [
            "New briefs lean on earlier ones: a positioning statement, an approved product description, the wording agreed for a previous launch. Those words usually sit halfway through a PDF or a deck.",
            [
              { text: "Documents can be indexed", page: 27 },
              " using extracted text, metadata and organisational tags, so important documents can be located without manually opening every PDF or presentation.",
            ],
          ],
          points: ["The words inside a document as the key", "No opening files one by one"],
        },
        {
          label: "Re-edit",
          heading: "A new cut built from old footage",
          icon: "film",
          body: [
            "Anniversary films, recaps and short cut-downs are assembled from material shot for something else, often by an editor who never saw the original rushes.",
            [
              { text: "AI media indexing", page: 50 },
              " prepares creative content for discovery by processing supported visual, textual and metadata signals, so footage shot for one purpose has a route to the edit that later needs it.",
            ],
          ],
          points: ["Footage prepared for discovery", "Old material put to new use"],
        },
        {
          label: "Credit",
          heading: "A question about who made something",
          icon: "user",
          body: [
            "When an asset is reused, someone eventually asks who shot it, who designed it or who should be credited. If that information left with the person who uploaded the file, nobody can answer.",
            [
              "Creators and contributors can ",
              { text: "remain associated with assets", page: 116 },
              ", preserving that context through collaboration and migration.",
            ],
          ],
          points: ["Credits that survive reuse", "Context kept through a migration"],
        },
      ],
      sources: [{ kind: "pdf", page: 26 }, { kind: "pdf", page: 27 }, { kind: "pdf", page: 50 }, { kind: "pdf", page: 116 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "An anniversary publication built from photographs nobody catalogued",
      team: "A corporate communications team",
      situation: "A corporate communications team is producing a publication for the company’s anniversary. It needs photographs of the early workshops, but the relevant images were imported years ago and almost none of them carry descriptions.",
      steps: [
        { heading: "Describe what is needed", body: ["An editor types a description of the photographs she has in mind, and ", { text: "semantic search", page: 39 }, " interprets its meaning rather than waiting for an exact keyword."] },
        { heading: "Use colour as a clue", body: "Many of the oldest prints are black and white, so searching by colour characteristics may help separate them from later material." },
        { heading: "Narrow the set", body: "Filters for format and date reduce the results to a set small enough to look through properly." },
        { heading: "Check before publishing", body: "Before any photograph goes into the layout, its review status shows whether it has completed the approval process or still needs attention." },
      ],
      outcome: "The publication is built from photographs the company already owned, found through what the images contain rather than through descriptions nobody ever wrote.",
      link: { page: 240, label: "GetSibu for Corporate Communications" },
      sources: [{ kind: "pdf", page: 39 }, { kind: "pdf", page: 36 }, { kind: "pdf", page: 19 }, { kind: "pdf", page: 76 }, { kind: "pdf", page: 240 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about making every asset discoverable",
      items: [
        {
          question: "How does confidence information help make assets discoverable?",
          answer: ["It helps people judge suggested descriptions before relying on them. ", { text: "AI tag confidence", page: 46 }, " information can show how strongly the system associates a tag with an asset, which is useful when deciding which suggestions deserve a closer look."],
        },
        {
          question: "How can a team spot assets that remain undiscovered?",
          answer: [{ text: "Asset usage analytics", page: 182 }, " help teams understand which assets receive attention and which remain underused. An asset that is never used may be unwanted, or it may simply be described in words nobody searches with."],
        },
        {
          question: "Is discoverability worth improving for material that is rarely used?",
          answer: "Often it is, because rare use is not the same as low value. Archive photography, old campaign films and past research tend to be wanted suddenly, for a legal query or a new brief, and then wanted quickly.",
        },
        {
          question: "Which details about an asset are still worth recording by hand?",
          answer: "Anything that has to be known rather than seen: restrictions on reuse, the agreement behind a commissioned piece or the reason a particular version was preferred. Analysis of the content cannot see those, so they are worth writing down while someone still remembers them.",
        },
      ],
      sources: [{ kind: "pdf", page: 46 }, { kind: "pdf", page: 182 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on preparing assets for discovery",
      variant: "compact",
      pages: [21, 30, 25, 26, 27, 116],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Start Your Creative Library",
      conversionPage: 391,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 391 }],
    },
  ],
};

export default page;
