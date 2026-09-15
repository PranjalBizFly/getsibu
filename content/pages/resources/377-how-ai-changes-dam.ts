/**
 * 377 · How AI Changes DAM — /resources/how-ai-changes-dam
 *
 * Angle (clusters: ai-approach; future-of-dam): essay on the change AI brings now — the work of making assets findable
 * moves from manual metadata at upload to analysis followed by human review, so a library's findability stops
 * depending on who uploaded what. What Is AI Asset Management? (362) owns the explainer; Future of DAM (378) owns the
 * direction of the category, Future of Creative Collaboration (379) collaboration, Future of AI-Powered Creative
 * Libraries (380) libraries as knowledge environments. No predictions, dates or market figures.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Essay: vendor-neutral argument about AI in asset management; states no GetSibu capability beyond the cited pages and makes no predictions." } as const;

const page: PageContent = {
  page: 377,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "centered",
      eyebrow: "Resources",
      lede: "An essay on the practical change AI brings to asset management: the effort of making assets findable moves from typing metadata to reviewing it, and what that shift means for the people who run and use a library.",
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 377 }, { kind: "pdf", page: 45 }],
    },
    {
      kind: "definition",
      id: "definition",
      eyebrow: "In short",
      term: "How AI changes digital asset management",
      answer: "AI changes digital asset management by making visual and textual content more discoverable without requiring every piece of metadata to be entered manually. The effort of describing a library shifts from typing to reviewing.",
      detail: "Traditionally, an asset was only as findable as the description someone gave it. AI loosens that dependency: software can read the words in a scanned document, suggest labels for what an image shows and match a request by meaning. People still decide what the library says about its assets, but they start from a description rather than an empty field.",
      sources: [{ kind: "pdf", page: 377 }, EXPLAINS],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Findability no longer depends on who uploaded the file",
      body: [
        "The largest change AI brings to asset management is not one feature. It is a change in where the work of findability happens. That work used to sit with whoever uploaded a file, at the moment they were least inclined to do it. With analysis built into processing, assets can arrive with some description, whoever added them and however busy they were.",
        "The gaps in a manually described library are not random. The files least likely to be described are the ones that arrive in bulk — a whole shoot, an imported archive, a folder of scanned paperwork — and those are often the collections people most need to search later. AI closes that gap unevenly but broadly, giving visual content suggested labels and giving the text inside files a route into search.",
        [
          "The change redistributes judgement rather than removing it. Someone still has to decide whether suggested words match the organisation’s vocabulary, which is why GetSibu’s ",
          { text: "AI-aware asset management", page: 9 },
          " lets teams approve suggestions in bulk, override them when necessary and keep control of how the library is organised.",
        ],
      ],
      keyPoints: {
        heading: "The argument",
        items: ["From typing metadata to reviewing it", "A starting description for more assets", "Text inside files becomes searchable", "Search by meaning, not recall", "Judgement stays with people"],
      },
      highlight: {
        heading: "In practice",
        body: "A marketing coordinator used to be the person everyone asked for old pitch decks and brochures. Once the text inside those files is extracted, colleagues search for a phrase they remember, and the coordinator’s time goes into keeping descriptions accurate instead of answering requests.",
        tags: ["Documents", "Coordinators", "Search"],
      },
      glance: {
        heading: "The change in brief",
        facts: [
          { label: "Before", value: "Findability set by manual metadata" },
          { label: "Now", value: "Analysis first, human review second" },
          { label: "Still human", value: "Vocabulary, rights and approval" },
          { label: "Explainer", value: "What Is AI Asset Management?", page: 362 },
        ],
        actions: [{ kind: "route", path: "/resources", label: "More in Resources" }]
      },
      sources: [{ kind: "pdf", page: 377 }, { kind: "pdf", page: 9 }, { kind: "pdf", page: 362 }, EXPLAINS],
    },
    {
      kind: "before-after",
      id: "shift",
      eyebrow: "The shift",
      heading: "Where the effort of describing assets goes",
      beforeLabel: "Description by hand",
      afterLabel: "Description by analysis and review",
      before: ["Metadata typed at upload, if at all", "Bulk imports left largely undescribed", "Text in scans and slides invisible to search", "Search limited to words someone recorded", "Consistency dependent on each contributor"],
      after: ["Suggestions generated during processing", "A baseline description for undescribed files", "Extracted text added to the search index", "Requests matched by meaning as well as words", "One vocabulary applied, then checked by people"],
      sources: [{ kind: "pdf", page: 377 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "who-it-affects",
      eyebrow: "Who it affects",
      heading: "What changes for the people who use the library",
      tabs: [
        {
          label: "Library managers",
          heading: "From data entry to quality control",
          icon: "check",
          body: [
            "The work moves from filling empty fields to reviewing suggestions, correcting patterns and keeping the vocabulary coherent. Batches replace single files as the unit of work.",
            "The skill that matters most becomes judging whether the library’s descriptions are good enough, rather than writing all of them.",
          ],
          points: ["Review in batches", "Stewardship of the vocabulary"],
        },
        {
          label: "Creatives",
          heading: "Less describing, more reusing",
          icon: "palette",
          body: [
            "Designers, photographers and editors spend less time describing what they upload, and can find earlier work by describing it instead of remembering where it was saved.",
            "Material that would once have been recreated because nobody could find it becomes realistic to reuse.",
          ],
          points: ["Less manual description", "Earlier work easier to find"],
        },
        {
          label: "Marketing and brand",
          heading: "Search that matches how requests arrive",
          icon: "megaphone",
          body: [
            "Requests often arrive as descriptions — something bright, outdoors, with the new packaging — rather than as filenames. Search that interprets meaning brings the library closer to the way those requests are phrased.",
            "A brief that asks for “something like last spring’s launch, only warmer” can become the start of a search instead of a message passed from colleague to colleague.",
          ],
          points: ["Descriptive requests", "Fewer requests relayed by hand"],
        },
        {
          label: "Production",
          heading: "Large media collections become searchable",
          icon: "film",
          body: [
            "Production teams accumulate more footage and stills than anyone could describe by hand. Analysis gives that volume a first layer of searchable information, so watching everything is no longer the only way to find material.",
            "The gain is greatest for material nobody had time to log during a busy shoot.",
          ],
          points: ["Volume described as it arrives", "Less viewing just to find a clip"],
        },
      ],
      sources: [{ kind: "pdf", page: 25 }, { kind: "pdf", page: 353 }, { kind: "pdf", page: 49 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "what-stays",
      eyebrow: "What stays the same",
      heading: "What AI does not change about asset management",
      items: [
        {
          heading: "Deciding what belongs",
          summary: "Analysis describes whatever it is given, wanted or not.",
          icon: "archive",
          body: [
            "Rejected concepts, superseded drafts and material nobody should reuse get described as readily as the best work. Choosing what enters the library, and what is archived or removed, stays an editorial judgement; a well-described library full of outdated content is still a poor one.",
          ],
        },
        {
          heading: "Approval carries more weight",
          summary: "When more of the library can be found, more of what should not be used can be found too.",
          icon: "shield",
          body: [
            "Better discovery surfaces drafts, embargoed work and material with lapsed licences alongside everything else. The status that says whether an asset may be used therefore matters more as findability improves.",
          ],
        },
        {
          heading: "Existing metadata still counts",
          summary: "Descriptions that people and devices already recorded remain valuable.",
          icon: "tag",
          body: [
            ["Credits, capture details and custom keywords hold knowledge no model can infer. Metadata such as ", { text: "EXIF, XMP, creators and custom keywords", page: 22 }, " can become part of a GetSibu asset record, giving AI description something reliable to sit beside."],
          ],
        },
        {
          heading: "Structure still guides people",
          summary: "Better search does not remove the need for a navigable library.",
          icon: "folder",
          body: [
            "Folders, collections and clear ownership still help people browse, understand context and control access. AI makes a library easier to search; it does not make organisation optional.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 22 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "in-getsibu",
      eyebrow: "In GetSibu",
      heading: "How GetSibu applies AI across the library",
      items: [
        {
          heading: "Discovery from inside the asset",
          body: "AI asset discovery helps users find files based on what appears inside an asset, rather than depending entirely on manually entered metadata.",
          icon: "eye",
          page: 12,
        },
        {
          heading: "Text taken from files",
          body: "Text is extracted from images, PDFs, presentations and screenshots so that the content becomes searchable.",
          icon: "text",
          page: 15,
        },
        {
          heading: "Suggested tags, decided by people",
          body: "Tags can be suggested during asset processing and then reviewed, approved or overridden by authorised users.",
          icon: "sparkles",
          page: 31,
        },
        {
          heading: "Meaning in search",
          body: "Semantic search interprets meaning rather than relying exclusively on exact words, so people can search for creative concepts and visual descriptions.",
          icon: "search",
          page: 39,
        },
        {
          heading: "Less repetitive administration",
          body: "Automation helps reduce the repetitive work associated with tagging, organising and locating assets.",
          icon: "zap",
          page: 356,
        },
        {
          heading: "Status while analysis runs",
          body: "AI processing provides status information, so users can see whether an asset is queued, processing or ready.",
          icon: "clock",
          page: 144,
        },
      ],
      sources: [{ kind: "pdf", page: 12 }, { kind: "pdf", page: 15 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 39 }, { kind: "pdf", page: 356 }, { kind: "pdf", page: 144 }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about how AI changes DAM",
      items: [
        {
          question: "Does AI make an asset library more consistent?",
          answer: "In one sense, yes: a model uses the same words across everything it processes, which evens out description. But those words may not be the organisation’s own, and an uncorrected error repeats as widely as a correct label, so review is what turns consistency into accuracy.",
        },
        {
          question: "Which assets gain most from AI in a DAM?",
          answer: "Material that arrives in volume and was rarely described by hand: photo shoots, imported archives, footage, scanned documents and slides saved as images. Small collections that are already well described gain less.",
        },
        {
          question: "What should an organisation settle first when AI starts describing its library?",
          answer: "The review habit. Decide who checks suggestions, how often and against which vocabulary before a large import arrives, because unchecked output is far harder to correct once it has spread across a whole collection.",
        },
        {
          question: "How does AI change the way people search a DAM?",
          answer: ["People can describe what they need instead of recalling exact words. In GetSibu, ", { text: "natural language asset search", page: 18 }, " lets users search the way they remember assets, without knowing the filename."],
        },
      ],
      sources: [{ kind: "pdf", page: 18 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on AI and the asset library",
      variant: "compact",
      pages: [362, 60, 54, 59, 378, 380],
      sources: [{ kind: "editorial", note: "Links to the AI explainer, GetSibu's AI approach and the other essays." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "The Future of Creative Asset Management",
      conversionPage: 400,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 400 }],
    },
  ],
};

export default page;
