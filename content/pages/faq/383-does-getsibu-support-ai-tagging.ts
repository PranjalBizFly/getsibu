/**
 * 383 · Does GetSibu Support AI Tagging? — /faq/does-getsibu-support-ai-tagging
 *
 * Angle (cluster: ai-tagging): the direct yes, what that yes includes, and what an evaluator should check
 * when trying it on their own library. AI-Assisted Tagging (31) owns the feature, What Is AI Tagging? (364)
 * the concept, AI-Aware Asset Management (9) the stance, and 46–48 confidence, approval and override.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Practical advice on evaluating AI tagging in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 383,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "centered",
      eyebrow: "FAQ",
      lede: "The direct answer on AI tagging in GetSibu, what that answer includes, and what to look at when you try suggested tags on your own material.",
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 383 }],
    },
    {
      kind: "definition",
      id: "short-answer",
      eyebrow: "Short answer",
      term: "Does GetSibu Support AI Tagging?",
      answer: "Yes. GetSibu provides AI-assisted tagging, which can suggest tags based on the content of supported media.",
      detail: "GetSibu can suggest tags during asset processing, so a team does not have to classify every new file by hand. Authorised users can review, approve or override those suggestions.",
      sources: [{ kind: "pdf", page: 383 }, { kind: "pdf", page: 31 }],
    },
    {
      kind: "overview",
      id: "longer-answer",
      heading: "Why “assisted” is the important word in the answer",
      body: [
        "The answer says “assisted” for a reason. GetSibu’s approach to AI combines automated analysis with human approval, so teams keep control while spending less time on repetitive library administration.",
        "For anyone evaluating the feature, the practical question is less whether tags appear and more whether they save work. Suggestions earn their place when they cover material nobody would otherwise have tagged, when they use words people genuinely search for, and when checking them takes less effort than writing them.",
        [
          "The capability is described on ",
          { text: "AI-Assisted Tagging", page: 31 },
          ", and the principle that AI recommends while teams stay in charge is set out under ",
          { text: "AI-Aware Asset Management", page: 9 },
          ".",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Tags suggested from content", "Supported media", "Review by authorised users", "Confidence information on suggested tags", "Tags that feed search"],
      },
      highlight: {
        heading: "In practice",
        body: "Once a folder of event photography has been processed, the person responsible for the library checks and corrects the suggested tags rather than describing each photograph from scratch.",
        tags: ["Library managers", "Photography", "Events"],
      },
      glance: {
        heading: "The yes, summarised",
        facts: [
          { label: "Area", value: "AI" },
          { label: "Happens during", value: "Asset Processing", page: 143 },
          { label: "Decided by", value: "Authorised users" },
          { label: "Concept explained", value: "What Is AI Tagging?", page: 364 },
        ],
        actions: [{ kind: "route", path: "/faq", label: "More in FAQs" }]
      },
      sources: [{ kind: "pdf", page: 383 }, { kind: "pdf", page: 45 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 9 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 364 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "what-the-yes-includes",
      eyebrow: "What the yes includes",
      heading: "Confidence, analysis and search behind suggested tags",
      items: [
        {
          heading: "Confidence information",
          body: "AI-generated tags can carry confidence information that indicates how strongly the system associates each tag with an asset.",
          icon: "gauge",
          points: ["A signal for where to look closely"],
          page: 46,
        },
        {
          heading: "Objects in supported media",
          body: "Objects that appear in supported media can be identified, and the resulting tags can later contribute to search and discovery.",
          icon: "scan",
          page: 34,
        },
        {
          heading: "Visual mood",
          body: "Mood characteristics can be identified and made available as searchable information, for finding material by the feeling it is meant to convey.",
          icon: "sparkles",
          page: 35,
        },
        {
          heading: "Colour",
          body: "Colour information can be extracted from visual assets and used in discovery, so people can look for visual content by its colour characteristics when that helps.",
          icon: "palette",
          page: 36,
        },
        {
          heading: "Classification",
          body: "Beyond individual tags, AI classification helps sort assets into categories according to their content and available metadata, cutting repetitive manual organisation.",
          icon: "layers",
          page: 42,
        },
        {
          heading: "A route into search",
          body: "AI-generated tags are one of the kinds of information GetSibu search draws on, next to filenames, metadata, OCR text and comments.",
          icon: "search",
          page: 11,
        },
      ],
      sources: [{ kind: "pdf", page: 46 }, { kind: "pdf", page: 34 }, { kind: "pdf", page: 35 }, { kind: "pdf", page: 36 }, { kind: "pdf", page: 42 }, { kind: "pdf", page: 11 }],
    },
    {
      kind: "accordion",
      id: "trying-it",
      eyebrow: "Before you rely on it",
      heading: "What to check when trying AI tagging on your library",
      items: [
        {
          heading: "Your own formats and subjects",
          summary: "The answer refers to supported media, so test with the material your team actually holds.",
          icon: "image",
          body: [
            "General statements about AI tagging say little about a particular library. Pick a sample that reflects yours: product shots, event photography, lifestyle imagery, graphics and whatever else makes up most of your uploads.",
            "Note which files receive useful suggestions and which receive few, and treat that as the realistic picture for your team rather than an average from elsewhere.",
          ],
        },
        {
          heading: "Review effort at your volume",
          summary: "Checking suggestions should cost less time than writing tags would have.",
          icon: "approval",
          page: 47,
          body: [
            "Estimate how much new material arrives in a typical week and who will check it. Teams can approve suggested tags in bulk, which is intended to make large-scale organisation much faster than reviewing every file individually.",
          ],
        },
        {
          heading: "Fit with your vocabulary",
          summary: "Suggested words need to match the terms your team searches with.",
          icon: "tag",
          page: 8,
          body: [
            "A suggestion can be accurate and still unhelpful if it uses a word nobody searches for. Agree your preferred terms, including the synonyms colleagues use for the same thing, before judging how well the suggestions fit them.",
          ],
        },
        {
          heading: "Timing after upload",
          summary: "Suggestions depend on processing, so make sure an asset is ready before judging it.",
          icon: "clock",
          page: 144,
          body: [
            "AI processing provides status information showing whether an asset is queued, processing or ready. Judging a file whose analysis has not finished gives a misleading impression of what tagging provides.",
          ],
        },
        {
          heading: "Evidence from searches",
          summary: "The real test of tags comes when people start looking for things.",
          icon: "chart",
          page: 186,
          body: [
            "Once a trial library is in use, tag analytics identify frequently used or searched tags. Comparing what is applied with what is searched can suggest whether the vocabulary a team keeps matches the words people type.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 383 }, { kind: "pdf", page: 47 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 144 }, { kind: "pdf", page: 186 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Follow-up questions about AI tagging in GetSibu",
      items: [
        {
          question: "Will files imported from our existing storage receive tag suggestions too?",
          answer: [
            "They can. GetSibu is designed to import assets and process media automatically, and ",
            { text: "background processing", page: 311 },
            " means nobody has to run metadata or AI processing on imported files by hand.",
          ],
        },
        {
          question: "What happens to the keywords our files already carry when they move into GetSibu?",
          answer: [
            "They need not be lost. ",
            { text: "Metadata preservation", page: 132 },
            " keeps information such as EXIF, XMP, creators and custom keywords during migration, and search can use that metadata alongside AI-generated tags.",
          ],
        },
        {
          question: "Can AI tagging for an agency client use that client’s own AI key?",
          answer: [
            "Where it is required, multi-tenant configurations can support ",
            { text: "client-specific AI key management", page: 164 },
            ". Whether a given client needs that arrangement is a question for the agency and the client to settle together.",
          ],
        },
        {
          question: "Can AI tagging be part of a custom application?",
          answer: [
            "Developers can integrate asset tagging workflows into custom applications through the ",
            { text: "Asset Tags API", page: 265 },
            ".",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 2 }, { kind: "pdf", page: 311 }, { kind: "pdf", page: 132 }, { kind: "pdf", page: 23 }, { kind: "pdf", page: 164 }, { kind: "pdf", page: 265 }],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on AI tagging",
      variant: "compact",
      pages: [31, 364, 46, 47, 48, 9],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the tag review pages." }],
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
