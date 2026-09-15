/**
 * 56 · AI Asset Recommendations — /features/ai-asset-recommendations
 *
 * FRAMED (auto-collections unconfirmed). Built only on publishable facts: AI analyses media and recommends
 * tags and classifications (9); suggestions reviewed, approved in bulk or overridden (31, 47, 48);
 * confidence (46); classification (42); order as the library grows (57). Its own paragraph and claim are
 * not used or paraphrased.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how recommendations from automated analysis are handled in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 56,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "AI",
      lede: "What an AI recommendation about an asset actually is, how it differs from other things AI produces, and how your team acts on recommendations while keeping the decisions about its library.",
      visual: { diagram: "ai-review", focus: "tags" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 9 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 57 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Proposals about an asset, waiting for a decision",
      body: [
        "GetSibu analyses media and recommends tags and classifications it judges meaningful. Those recommendations are proposals: teams can approve them in bulk, override them when necessary and keep control over how the library is organised.",
        "A recommendation sits between two things people already understand. It is more than raw data, because it proposes a conclusion about the asset. It is less than a decision, because nobody responsible has agreed to it yet. Keeping that middle status clear is what lets a team benefit from AI without handing over its judgement.",
        [
          "The two kinds of recommendation do different jobs. Tags are ",
          { text: "suggested during asset processing", page: 31 },
          " to describe what an asset contains, while ",
          { text: "classification", page: 42 },
          " helps categorise assets by their content and available metadata. Acted on consistently, both support ",
          { text: "AI library organisation", page: 57 },
          ", which helps teams maintain order as the library grows.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Recommended tags", "Recommended classifications", "A proposal, not a decision", "Confidence information on tags", "Approve in bulk or override"],
      },
      highlight: {
        heading: "In practice",
        body: "A library manager reads recommendations the way an editor reads a first draft: most of it can stand, some needs rewording, and the final version carries the editor’s name.",
        tags: ["Library managers", "Reviewers", "Taxonomy"],
      },
      glance: {
        heading: "Recommendations in brief",
        facts: [
          { label: "Area", value: "AI" },
          { label: "Recommends", value: "Tags and classifications" },
          { label: "Acted on by", value: "Authorised users" },
          { label: "Principle", value: "AI-Aware Asset Management", page: 9 },
        ],
        actions: [{ kind: "route", path: "/features/ai", label: "More in AI" }]
      },
      sources: [{ kind: "pdf", page: 9 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 42 }, { kind: "pdf", page: 57 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "kinds-of-output",
      eyebrow: "Telling outputs apart",
      heading: "Recommendations compared with other things AI produces",
      intro: "Each kind of output asks something different of the person who meets it.",
      columns: ["What it is", "What it asks of you"],
      rows: [
        { label: "A recommended tag", page: 31, cells: ["A proposed description of what an asset contains", "Keep it, correct it or look closer"] },
        { label: "A recommended classification", page: 42, cells: ["A proposed category based on content and metadata", "Check it against the agreed categories"] },
        { label: "Confidence information", page: 46, cells: ["How strongly a tag is associated with an asset", "Use it to decide where to look first"] },
        { label: "Extracted text", page: 38, cells: ["Words read from inside a file by OCR", "Search with the words the file contains"] },
        { label: "An identified duplicate", page: 40, cells: ["An identical file or visually equivalent copy", "Decide which copy the library should keep"] },
      ],
      sources: [{ kind: "pdf", page: 31 }, { kind: "pdf", page: 42 }, { kind: "pdf", page: 46 }, { kind: "pdf", page: 38 }, { kind: "pdf", page: 40 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A client’s brand archive described through recommendations",
      team: "A brand consultancy",
      situation: "A brand consultancy takes on a client whose brand material has accumulated for years: logos, photography, presentations and campaign references. Very little of it is described consistently.",
      steps: [
        { heading: "Recommendations arrive with processing", body: "As the archive is processed, tags and classifications are recommended for the supported material, giving the team a first description to work from." },
        { heading: "Classifications are checked first", body: ["The consultancy compares the recommended ", { text: "classifications", page: 42 }, " with the categories it has agreed with the client and corrects any classification that does not fit them."] },
        { heading: "Sound tags are accepted together", body: ["Where a group of assets has tag recommendations that fit, a strategist ", { text: "approves them in bulk", page: 47 }, "."] },
        { heading: "The client’s vocabulary wins", body: ["The client calls its product imagery “hero shots”; wherever recommendations use a different term, the team ", { text: "overrides the tags", page: 48 }, " so the archive speaks the client’s language."] },
      ],
      outcome: "The archive gains consistent descriptions the consultancy has checked, and the client’s own terms, not the analysis’s, decide how its material is labelled.",
      link: { page: 221, label: "GetSibu for Brand Consultancies" },
      sources: [{ kind: "pdf", page: 9 }, { kind: "pdf", page: 42 }, { kind: "pdf", page: 47 }, { kind: "pdf", page: 48 }, { kind: "pdf", page: 221 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "accordion",
      id: "control",
      eyebrow: "Keeping control",
      heading: "Making recommendations serve the team’s decisions",
      items: [
        {
          heading: "Recommendations reflect content, not intent",
          summary: "Analysis sees what an asset shows, never why it was made.",
          icon: "eye",
          body: [
            "A recommendation can say that a photograph shows a kitchen. It cannot know that the photograph was commissioned for a spring promotion, cleared only for one market or superseded by a reshoot. Treat recommendations as the content half of the description and expect people to supply the purpose half.",
          ],
        },
        {
          heading: "Decide who may accept them",
          summary: "Accepting recommendations shapes how everyone else finds assets.",
          icon: "users",
          body: [
            ["Suggested tags are reviewed, approved or overridden by authorised users, so it matters who holds that authority. ", { text: "Organisation admin controls", page: 158 }, " are where administrators manage access policies, users and organisational settings."],
          ],
        },
        {
          heading: "Rejecting a recommendation is useful work",
          summary: "Each correction keeps the library aligned with its own terms.",
          icon: "refresh",
          body: [
            "Overriding a poor recommendation can feel like wasted effort, but it is the moment the team’s vocabulary is defended. A library where every recommendation was accepted unread would drift steadily towards generic words nobody on the team uses.",
          ],
        },
        {
          heading: "Check that recommendations are helping",
          summary: "Accepted descriptions, read again months later, are the honest test.",
          icon: "chart",
          body: [
            "Pick a handful of assets described through accepted recommendations and ask a colleague who was not involved whether the descriptions still make sense. If they do, the review routine is working; if the terms feel generic or dated, the team’s vocabulary needs attention before the next large intake.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 31 }, { kind: "pdf", page: 158 }, { kind: "pdf", page: 48 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about AI asset recommendations",
      items: [
        {
          question: "Are AI asset recommendations the same as AI-assisted tagging?",
          answer: ["They overlap. ", { text: "AI-assisted tagging", page: 31 }, " covers recommended tags; recommendations as a whole also include classifications, which place an asset in a category rather than describe it."],
        },
        {
          question: "What makes an AI asset recommendation worth accepting?",
          answer: "It describes what the asset actually shows, in a term the team already uses, at the level of detail people search with. A recommendation that meets only the first of those is a starting point for a correction rather than a tag to keep.",
        },
        {
          question: "Why might two similar assets receive different AI recommendations?",
          answer: ["Small differences in content or recorded detail can lead analysis to different conclusions. A tighter crop may lose the object that prompted a tag, and ", { text: "classification", page: 42 }, " draws on available metadata as well as content, so a file carrying a creator and keywords may be categorised with more context than a bare export."],
        },
      ],
      sources: [{ kind: "pdf", page: 31 }, { kind: "pdf", page: 42 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on acting on AI suggestions",
      variant: "compact",
      pages: [9, 57, 42, 46, 47, 48],
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
