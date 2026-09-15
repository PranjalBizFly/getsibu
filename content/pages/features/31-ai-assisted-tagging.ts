/**
 * 31 · AI-Assisted Tagging — /features/ai-assisted-tagging
 *
 * Angle (cluster: ai-tagging, primary): the feature itself — tags suggested during asset processing and reviewed
 * by authorised users before they shape search and organisation. Confidence (46), bulk approval (47) and override
 * (48) each own their mechanism; Classification (42) owns categorising; 364 is the vendor-neutral explainer.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of tagging practice in creative libraries; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 31,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "AI",
      lede: "See how GetSibu can suggest tags during asset processing, what those suggestions are for, and how authorised users review, approve or override them so the library reflects your team’s judgement.",
      visual: { diagram: "ai-review", focus: "tags" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 31 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Tags suggested while each asset is processed",
      body: [
        "GetSibu can suggest tags as part of asset processing, so a team does not have to classify every file by hand before it becomes findable. The suggestions are a proposal rather than a verdict: authorised users can review them, approve them or override them.",
        "Manual tagging tends to fail quietly. The person uploading a shoot is usually the person with the least time to describe it, so files arrive with a handful of keywords or none at all, and each contributor describes the same thing in different words. The library keeps growing while the share of it anyone can actually search keeps shrinking.",
        [
          "Tagging has a close neighbour in ",
          { text: "AI asset classification", page: 42 },
          ", which helps categorise assets according to their content and available metadata. Both follow the approach described in ",
          { text: "AI-aware asset management", page: 9 },
          ": GetSibu recommends, and the team keeps control of how its library is organised. For the idea in general terms, see ",
          { text: "What Is AI Tagging?", page: 364 },
          ".",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Suggestions made during processing", "Review by authorised users", "Approve or override", "Tags as a search signal", "The team’s taxonomy stays in charge"],
      },
      highlight: {
        heading: "In practice",
        body: "A photographer’s selects arrive named only by camera numbering. Processing adds suggested tags, and a library manager checks them rather than typing a description for every frame.",
        tags: ["Library managers", "Photography", "Search"],
      },
      glance: {
        heading: "Where tag suggestions fit",
        facts: [
          { label: "Area", value: "AI" },
          { label: "Happens during", value: "Asset Processing", page: 143 },
          { label: "Reviewed by", value: "Authorised users" },
          { label: "Related", value: "AI Asset Classification", page: 42 },
        ],
        actions: [{ kind: "route", path: "/features/ai", label: "More in AI" }]
      },
      sources: [{ kind: "pdf", page: 31 }, { kind: "pdf", page: 42 }, { kind: "pdf", page: 9 }, { kind: "pdf", page: 364 }, { kind: "pdf", page: 143 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "tag-lifecycle",
      eyebrow: "Step by step",
      heading: "How a suggested tag becomes part of the library",
      intro: "A person stays involved at the point where judgement matters, without describing every file from scratch.",
      steps: [
        { heading: "The asset arrives", body: "A file enters the library from a connected storage source or a direct upload and moves on to processing.", icon: "upload" },
        { heading: "Processing runs", body: "After upload, assets pass through stages such as metadata extraction, thumbnail generation and AI-related processing.", icon: "refresh", page: 143 },
        { heading: "Tags are suggested", body: "Tag suggestions are based on the content of supported media, so they describe what the file contains rather than what it happens to be called.", icon: "sparkles" },
        { heading: "Status shows progress", body: "AI processing status tells the team whether an asset is queued, processing or ready, which avoids reviewing a file whose analysis has not finished.", icon: "clock", page: 144 },
        { heading: "People decide", body: "Authorised users keep the suggestions that fit and replace the ones that do not, so the final tags reflect the team’s judgement.", icon: "approval" },
      ],
      sources: [{ kind: "pdf", page: 121 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 383 }, { kind: "pdf", page: 144 }, { kind: "pdf", page: 31 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "roles",
      eyebrow: "Who it helps",
      heading: "What tag suggestions change for each person",
      tabs: [
        {
          label: "Contributors",
          heading: "Upload without describing everything first",
          icon: "upload",
          body: [
            "Designers, photographers and editors add work to the library between other deadlines. When suggestions cover the visible content, contributors can spend their few minutes on the details only they know.",
            ["Those details, such as the campaign a file belongs to or the person who created it, can live in the asset record as ", { text: "metadata and custom keywords", page: 22 }, "."],
          ],
          points: ["Less typing at upload", "Time left for context no analysis can supply"],
        },
        {
          label: "Reviewers",
          heading: "Check suggestions instead of writing tags",
          icon: "check",
          body: [
            "Whoever looks after the library shifts from producing tags to judging them. That is usually lighter work, and it keeps one set of eyes on the vocabulary the whole team will rely on.",
            ["Large batches can be handled with ", { text: "bulk approval of suggested tags", page: 47 }, ", and ", { text: "confidence information", page: 46 }, " indicates how strongly the system associates a tag with an asset."],
          ],
          points: ["Judgement applied where it matters", "Large batches handled together"],
          link: { page: 48, label: "AI Tag Override" },
        },
        {
          label: "Searchers",
          heading: "Find files nobody got round to tagging",
          icon: "search",
          body: [
            "For the marketer or designer looking for material, the benefit is simply that more of the library answers a search. A file that would once have been reachable only through its folder can now surface for what it shows.",
            [{ text: "AI asset discovery", page: 12 }, " helps people find files by what appears inside them rather than depending entirely on manually entered metadata, and a search that returns the right set can be kept as a ", { text: "saved search", page: 17 }, " for next time."],
          ],
          points: ["More of the library reachable by search", "Useful when the filename says nothing"],
        },
      ],
      sources: [{ kind: "pdf", page: 22 }, { kind: "pdf", page: 47 }, { kind: "pdf", page: 46 }, { kind: "pdf", page: 48 }, { kind: "pdf", page: 12 }, { kind: "pdf", page: 17 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "considerations",
      eyebrow: "Considerations",
      heading: "What suggested tags can and cannot tell you",
      items: [
        {
          heading: "Content is not context",
          summary: "Analysis can describe what an asset contains; it cannot see why the asset exists.",
          icon: "eye",
          body: [
            "A suggestion can describe what is visible in an image. It cannot know which brief a shot was commissioned for, whether a client signed it off or which markets it is cleared for, because none of that is in the file’s content.",
            ["Organisational rules need tags people apply deliberately. Brand teams, for example, can use ", { text: "brand guardrail tags", page: 105 }, " to identify assets that meet specific organisational requirements."],
          ],
        },
        {
          heading: "Agree the vocabulary first",
          summary: "Suggestions are easiest to review against an agreed set of terms.",
          icon: "tag",
          body: [
            "If one team says “packshot” and another says “product still”, the library ends up with both. Settling the preferred terms before a large import means reviewers know what a correct tag looks like.",
            ["GetSibu supports ", { text: "hierarchical tags, synonyms and inheritance", page: 8 }, ", which give that vocabulary a structure able to grow with the library."],
          ],
        },
        {
          heading: "Generic words and your own names",
          summary: "A suggestion may name the kind of thing shown, not the name your team uses for it.",
          icon: "layers",
          body: [
            "Automated analysis tends to describe things in broad, general terms, while your team may care about the product line, the collection or the name of a location.",
            "Treat general suggestions as a useful first layer and add the specific names people actually search with, so both routes lead to the file.",
          ],
        },
        {
          heading: "Review as material arrives",
          summary: "A small, regular review is lighter than a large backlog.",
          icon: "calendar",
          body: [
            "Suggestions left unchecked for months accumulate into exactly the clean-up job AI assistance was meant to avoid. Reviewing each batch soon after it lands, while the shoot or campaign is still fresh, is usually far lighter work.",
          ],
        },
        {
          heading: "See which tags people use",
          summary: "Search behaviour shows whether the vocabulary is working.",
          icon: "chart",
          body: [
            [{ text: "Tag analytics", page: 186 }, " identify frequently used or searched tags. Comparing the tags people look for with the terms reviewers keep approving shows whether the vocabulary matches the way the library is actually searched."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 105 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 186 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about AI-assisted tagging",
      items: [
        {
          question: "When does GetSibu suggest tags for a new asset?",
          answer: "While the asset is being processed, so a suggestion does not have to wait for someone to open the file and classify it by hand.",
        },
        {
          question: "Who can approve or override AI-suggested tags?",
          answer: "Authorised users. Suggestions can be reviewed, approved or overridden by the people your organisation allows to manage tags, so the AI does not have the final word on how assets are described.",
        },
        {
          question: "Do AI-suggested tags cover the context my team knows about a file?",
          answer: ["Not on their own. Suggestions are based on the content of the file, while context such as campaign or creator belongs in ", { text: "asset metadata", page: 22 }, ", which users can search alongside tags and extracted content."],
        },
        {
          question: "Can AI-assisted tagging be trusted without any review?",
          answer: ["It is designed to be reviewed. Suggested tags reduce manual classification, but a tag that does not match your intended taxonomy should be ", { text: "overridden", page: 48 }, ", and a quick check of each batch keeps the vocabulary consistent."],
        },
        {
          question: "How do AI-generated tags help people find assets later?",
          answer: ["AI-generated tags are one of the sources ", { text: "creative asset search", page: 11 }, " uses, so a file can be found by what it shows even when its filename and folder give nothing away."],
        },
      ],
      sources: [{ kind: "pdf", page: 31 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 23 }, { kind: "pdf", page: 48 }, { kind: "pdf", page: 11 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on reviewing AI tags",
      variant: "compact",
      pages: [46, 47, 48, 42, 364, 383],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the tagging cluster." }],
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
