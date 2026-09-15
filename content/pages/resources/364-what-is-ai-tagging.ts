/**
 * 364 · What Is AI Tagging? — /resources/what-is-ai-tagging
 *
 * Angle (cluster: ai-tagging; ai-explainers): vendor-neutral explainer of how a model turns what it detects into
 * suggested labels — confidence, thresholds, vocabulary alignment and review — and why tagging by hand breaks
 * down at volume. AI-Assisted Tagging (31) owns the feature, AI Asset Classification (42) classification,
 * AI Tag Confidence (46), AI Tag Approval (47) and AI Tag Override (48) their steps, FAQ 383 the yes answer.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Vendor-neutral explanation of AI tagging practice; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 364,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "centered",
      eyebrow: "Resources",
      lede: "How AI tagging turns what a model detects in a file into suggested labels, what confidence scores and vocabularies have to do with it, why review still matters, and how GetSibu handles suggested tags.",
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 364 }, { kind: "pdf", page: 31 }],
    },
    {
      kind: "definition",
      id: "definition",
      eyebrow: "Definition",
      term: "AI tagging",
      answer: "AI tagging automatically suggests labels based on what the system detects in an asset. Those labels give a file a description before anyone has written one by hand.",
      detail: "A trained model examines the content of a file, recognises things it has learned to identify, such as objects, colours or visual style, and returns candidate tags with a score for each. Tags can then work like any other keyword in search, filters and organisation, and a person checks whether they fit.",
      sources: [{ kind: "pdf", page: 364 }, EXPLAINS],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Why large libraries stop being tagged by hand",
      body: [
        "AI tagging gives each incoming file a set of suggested descriptive labels. Suggested is the important word: a model proposes, and the people responsible for the library decide which labels stay.",
        "Manual tagging fails in predictable ways. It is slow, so large imports go untagged. It depends on the person, so one designer writes “aerial”, another “drone shot” and a third nothing at all. The result is a library whose search quality depends on who uploaded what.",
        [
          "AI tagging addresses volume and consistency, not judgement. A model applies the same vocabulary to every file it sees, which makes it a strong first pass. Whether its words match the organisation’s own terms is still a human decision, and it is why an ",
          { text: "asset taxonomy", page: 375 },
          " and a review step matter more once tagging is automated, not less.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Labels suggested from detected content", "A confidence score per suggestion", "Review before tags are trusted", "Alignment with a controlled vocabulary", "Consistency across large imports"],
      },
      highlight: {
        heading: "In practice",
        body: "A model is sure a photograph shows a dog and much less sure it was taken in a park. The reviewer confirms the first label quickly and looks properly at the second, which is where mistaken tags tend to hide.",
        tags: ["Confidence", "Review", "Images"],
      },
      glance: {
        heading: "AI tagging in brief",
        facts: [
          { label: "Area", value: "AI" },
          { label: "Produces", value: "Suggested labels with confidence" },
          { label: "Depends on", value: "Human review and a clear vocabulary" },
          { label: "Feature page", value: "AI-Assisted Tagging", page: 31 },
        ],
        actions: [{ kind: "route", path: "/resources", label: "More in Resources" }]
      },
      sources: [{ kind: "pdf", page: 364 }, { kind: "pdf", page: 375 }, { kind: "pdf", page: 31 }, EXPLAINS],
    },
    {
      kind: "before-after",
      id: "shift",
      eyebrow: "The shift",
      heading: "What changes when tags are suggested rather than typed",
      beforeLabel: "Tagging by hand",
      afterLabel: "Reviewing suggested tags",
      before: ["Tags depend on who uploaded the file", "Large imports arrive with no keywords", "Synonyms and spellings vary by person", "Tagging competes with deadline work"],
      after: ["Files start with suggested labels", "The same model vocabulary applied throughout", "Effort moves from typing to checking", "Coverage evens out across the library"],
      sources: [{ kind: "pdf", page: 364 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "key-terms",
      eyebrow: "Key terms",
      heading: "Concepts behind a suggested tag",
      items: [
        {
          heading: "Detection",
          summary: "A model recognises patterns it was trained on and names them.",
          icon: "scan",
          body: [
            "Image models are trained on large collections of pictures paired with labels or captions, until they associate visual patterns with words. Shown a new file, they report the labels whose patterns they recognise. A model suggests from what it has learned, which is why it may know “bicycle” but not the name of your product line.",
          ],
        },
        {
          heading: "Confidence score",
          summary: "A value expressing how strongly the model associates a label with the asset.",
          icon: "gauge",
          body: [
            "Confidence is not accuracy. A high score reflects the model’s own certainty, which can be misplaced, and says nothing about whether the label suits your purposes. Scores are most useful for sorting: high-confidence suggestions can often be checked quickly, while low-confidence ones deserve a closer look.",
          ],
        },
        {
          heading: "Threshold",
          summary: "The confidence level below which suggestions are hidden or discarded.",
          icon: "filter",
          body: [
            "Set it too low and the library fills with noisy tags; set it too high and useful labels never appear. The right level depends on how tags are used, since broad discovery tolerates more noise than a keyword set people rely on to find approved brand material.",
          ],
        },
        {
          heading: "Vocabulary mapping",
          summary: "Resolving a model’s generic words to the terms an organisation has agreed.",
          icon: "book",
          body: [
            "Models produce generic words; organisations need their own. Mapping model output to a controlled vocabulary, so that “mug” and “cup” both resolve to the approved term, keeps AI tags consistent with the tags people add by hand.",
          ],
        },
        {
          heading: "Tagging, classification and text extraction",
          summary: "Three techniques that add searchable information in different ways.",
          icon: "layers",
          body: [
            ["Tagging lists what an asset shows, while ", { text: "AI asset classification", page: 42 }, " places it in broader categories. ", { text: "Optical character recognition", page: 366 }, " reports the text written in a file without interpreting what it depicts."],
          ],
        },
        {
          heading: "Human review",
          summary: "The step where people approve, reject or replace suggestions.",
          icon: "approval",
          body: [
            "Review turns suggestions into metadata a team can trust. It works best on groups of similar assets at once, and when corrections are fed back into the vocabulary, the same mistake becomes easier to catch the next time it appears.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 42 }, { kind: "pdf", page: 366 }, EXPLAINS],
    },
    {
      kind: "workflow",
      id: "tag-life",
      eyebrow: "In general",
      heading: "The life of a suggested tag",
      stages: [
        { label: "Analysed", body: "After upload, the file’s content is examined by one or more models as part of processing." },
        { label: "Suggested", body: "Candidate labels are attached to the asset, each carrying its own confidence score." },
        { label: "Reviewed", body: "A person keeps the labels that fit, removes those that do not and adds what no model could know." },
        { label: "Refined", body: "Patterns in the corrections show where the vocabulary or the threshold needs adjusting." },
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "in-getsibu",
      eyebrow: "In GetSibu",
      heading: "How GetSibu applies AI tagging",
      items: [
        {
          heading: "Suggested during processing",
          body: "GetSibu can suggest tags while assets are processed, so teams are not left to classify every file manually.",
          icon: "sparkles",
          points: ["Based on the content of supported media", "Reviewed by authorised users"],
          page: 31,
        },
        {
          heading: "Objects, mood and colour",
          body: "Objects appearing in supported media can be identified, visual mood characteristics can become searchable information, and colour information can be extracted from visual assets.",
          icon: "eye",
          points: ["Object tags feed search", "Colour and mood as search terms"],
          page: 34,
        },
        {
          heading: "Confidence information",
          body: "AI-generated tags can include confidence information that helps users understand how strongly the system associates a tag with an asset.",
          icon: "gauge",
          page: 46,
        },
        {
          heading: "Approval in bulk",
          body: "Teams can approve suggested tags in bulk, making large-scale organisation significantly faster than reviewing every file individually.",
          icon: "approval",
          page: 47,
        },
        {
          heading: "Tags people search for",
          body: "Tag analytics identify frequently used or searched tags, helping teams understand how their library is being discovered.",
          icon: "chart",
          page: 186,
        },
      ],
      sources: [{ kind: "pdf", page: 31 }, { kind: "pdf", page: 383 }, { kind: "pdf", page: 34 }, { kind: "pdf", page: 35 }, { kind: "pdf", page: 36 }, { kind: "pdf", page: 46 }, { kind: "pdf", page: 47 }, { kind: "pdf", page: 186 }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about AI tagging",
      items: [
        {
          question: "How accurate is AI tagging?",
          answer: "It varies with the model, the material and the vocabulary you expect. Common subjects in clear images tend to be labelled well, while specialist products, brand-specific terms and abstract ideas are harder, so accuracy is best judged on a sample of your own library.",
        },
        {
          question: "What is the difference between AI tagging and manual tagging?",
          answer: "Manual tags record what a person knows, including context no model can see. AI tags record what a model detects, consistently and at volume. A practical balance is AI for the first pass and people for what only they know.",
        },
        {
          question: "Should every AI-suggested tag be reviewed individually?",
          answer: "Not necessarily. A practical approach is to review in batches sorted by confidence, and to look most closely at tags that drive important decisions, such as the keywords used to find approved brand assets.",
        },
        {
          question: "What happens when an AI-suggested tag is wrong?",
          answer: ["It can be corrected. In GetSibu, ", { text: "AI tag override", page: 48 }, " lets authorised users replace a tag that does not match the team’s intended taxonomy, so a model’s mistake does not become a lasting part of the record."],
        },
      ],
      sources: [{ kind: "pdf", page: 48 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on AI-assisted tagging",
      variant: "compact",
      pages: [31, 46, 47, 48, 42, 383],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the matching FAQ." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Make Every Asset Discoverable",
      conversionPage: 394,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 394 }],
    },
  ],
};

export default page;
