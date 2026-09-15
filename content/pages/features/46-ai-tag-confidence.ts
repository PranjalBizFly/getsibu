/**
 * 46 · AI Tag Confidence — /features/ai-tag-confidence
 *
 * Angle (cluster ai-tagging): what confidence information tells a reviewer and how it directs review
 * effort. Approval in bulk (47), override (48) and the tagging feature itself (31) are covered elsewhere.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how reviewers use confidence information in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 46,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "AI",
      lede: "Learn what the confidence information on an AI-generated tag tells you, what it cannot tell you, and how reviewers use it to decide which suggestions need a closer look.",
      visual: { diagram: "ai-review", focus: "confidence" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 46 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A measure of how strongly a tag belongs",
      body: [
        "In GetSibu, AI-generated tags can carry confidence information. It helps users understand how strongly the system associates a particular tag with a particular asset, so a suggestion arrives with some sense of how sure the analysis was.",
        "Without that signal, every suggestion looks equally authoritative. A reviewer facing a long list of proposed tags has no way to tell a clear-cut match from a borderline guess except by opening each asset and judging for themselves, which is the slow, file-by-file work AI assistance was meant to reduce.",
        [
          "Confidence matters most when someone is deciding what to keep. Tags are ",
          { text: "suggested during asset processing", page: 31 },
          ", and ",
          { text: "object detection", page: 34 },
          " is one source of them, associating objects identified in supported media with confidence information.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Strength of association, not proof", "Attached to AI-generated tags", "A guide for where to look", "Borderline suggestions deserve a person", "Patterns across a batch"],
      },
      highlight: {
        heading: "In practice",
        body: "A reviewer working through a new batch confirms the strongly associated tags quickly, then opens the assets whose suggestions were uncertain and decides those one by one.",
        tags: ["Reviewers", "Library managers", "Tagging"],
      },
      glance: {
        heading: "Tag confidence in brief",
        facts: [
          { label: "Area", value: "AI" },
          { label: "Describes", value: "How strongly a tag is associated with an asset" },
          { label: "Comes with", value: "AI-Assisted Tagging", page: 31 },
          { label: "Informs", value: "AI Tag Approval", page: 47 },
        ],
        actions: [{ kind: "route", path: "/features/ai", label: "More in AI" }]
      },
      sources: [{ kind: "pdf", page: 46 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 34 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "reading-confidence",
      eyebrow: "Reading the signal",
      heading: "What confidence information does and does not mean",
      items: [
        {
          heading: "It describes the association",
          summary: "Confidence expresses how firmly the analysis links a tag to an asset.",
          icon: "gauge",
          body: [
            "The information answers one narrow question: how strongly does the system connect this label with this file? A tag with a strong association is one the analysis had plenty of evidence for; a weak one is closer to a possibility worth checking.",
            "That is useful precisely because it is narrow. It gives a reviewer a way to rank their attention without claiming anything beyond the relationship between one tag and one asset.",
          ],
        },
        {
          heading: "It is not a verdict on fit",
          summary: "A strongly associated tag can still be the wrong word for your library.",
          icon: "flag",
          body: [
            "Analysis can be firmly convinced that a photograph shows a car and still be unhelpful if your taxonomy distinguishes estates from hatchbacks. Strength of association and fitness for your vocabulary are separate questions.",
            ["When a confident suggestion does not match the team’s intended taxonomy, it is still a candidate for an ", { text: "override by an authorised user", page: 48 }, "."],
          ],
        },
        {
          heading: "A weak association is not a wrong tag",
          summary: "Uncertain suggestions are prompts for a person, not rejections.",
          icon: "eye",
          body: [
            "Subjects that are small, partly hidden, stylised or unusual tend to leave analysis less sure of itself, even when the suggestion turns out to be right. Discarding every weak suggestion unseen would throw away some accurate tags along with the poor ones.",
            "The sensible reading is that a weakly associated tag has not yet earned trust on its own, so someone who knows the material should look at the asset before deciding.",
          ],
        },
        {
          heading: "Different attributes, different certainty",
          summary: "Some kinds of tag are naturally harder to be sure about than others.",
          icon: "layers",
          body: [
            "An object in the frame is a fairly concrete judgement. Qualities such as the feeling of an image are interpretations that people themselves disagree on, so a reviewer may reasonably look harder at interpretive suggestions than at concrete ones.",
            [{ text: "AI vision analysis", page: 32 }, " looks more closely at the difference between concrete and interpretive judgements about visual content."],
          ],
        },
        {
          heading: "Patterns say something about the library",
          summary: "Repeated uncertainty on one kind of asset is worth noticing.",
          icon: "trend",
          body: [
            "If a particular type of material keeps producing weakly associated suggestions, the cause may be the material rather than the analysis: low-resolution exports, heavily filtered images or subjects with no clear visual cue.",
            "Noticing that pattern tells a team where tags chosen by people and good metadata will matter most, and where suggestions alone are unlikely to carry the description.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 46 }, { kind: "pdf", page: 48 }, { kind: "pdf", page: 32 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "review-pass",
      eyebrow: "Step by step",
      heading: "Learning how far to rely on confidence for your material",
      intro: "Confidence becomes useful once a team knows how it lines up with its own judgement.",
      steps: [
        { heading: "Sample both ends", body: "From one batch, open a handful of assets whose suggestions are strongly associated and a handful whose suggestions are weakly associated.", icon: "eye" },
        { heading: "Compare with the asset", body: "Note how often each group describes what is really there, and separately how often it uses words the team would choose.", icon: "check" },
        { heading: "Agree a review habit", body: "Decide how closely strongly associated suggestions need checking before they are approved in bulk, so every reviewer works to the same standard.", icon: "users", page: 47 },
        { heading: "Sample again when material changes", body: "A new kind of shoot, a new product range or files from a different source are reasons to repeat the check rather than assume the old habit still holds.", icon: "refresh" },
      ],
      sources: [{ kind: "pdf", page: 46 }, { kind: "pdf", page: 47 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A festival photography batch reviewed in order of certainty",
      team: "An events team",
      situation: "An events team uploads a large set of photographs from a music festival. The images range from clear stage portraits to dim, crowded shots taken after dark.",
      steps: [
        { heading: "The batch finishes processing", body: ["Once ", { text: "AI processing status", page: 144 }, " shows the photographs as ready rather than queued or processing, the coordinator begins the review."] },
        { heading: "Settled suggestions go first", body: "Stage, crowd and instrument tags on the well-lit photographs carry strong associations, and a coordinator approves those together." },
        { heading: "Night shots get a closer look", body: "Suggestions on the darker images are less certain, so the coordinator opens them and keeps only the tags that match what is actually visible." },
        { heading: "Local names are added by hand", body: ["The analysis cannot know what the festival calls each stage, so the team records those names with tags from ", { text: "its own taxonomy", page: 8 }, "."] },
      ],
      outcome: "Review time goes where the analysis was unsure, and the festival archive ends up with tags the team has checked rather than tags it merely received.",
      link: { page: 236, label: "GetSibu for Event Companies" },
      sources: [{ kind: "pdf", page: 144 }, { kind: "pdf", page: 46 }, { kind: "pdf", page: 47 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 236 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about AI tag confidence",
      items: [
        {
          question: "Should every reviewer treat AI tag confidence in the same way?",
          answer: "As a starting point, yes, so that reviews stay consistent. Beyond that, expertise counts: someone who knows a product range well can settle borderline suggestions on it quickly, while a newcomer may reasonably look closer even at strongly associated ones.",
        },
        {
          question: "Does AI tag confidence apply to tags a person has chosen?",
          answer: "Confidence information belongs to AI-generated tags, where it describes how strongly the system associates a tag with an asset. A tag chosen by a colleague reflects that person’s judgement rather than a strength of association produced by analysis.",
        },
        {
          question: "Is AI tag confidence the same thing as a review decision?",
          answer: ["No. Confidence is produced by the analysis before anyone has looked at the asset, while keeping or replacing a tag is a decision for ", { text: "authorised users reviewing suggestions", page: 31 }, "."],
        },
      ],
      sources: [{ kind: "pdf", page: 46 }, { kind: "pdf", page: 31 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on reviewing suggested tags",
      variant: "compact",
      pages: [31, 47, 48, 34, 32, 364],
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
