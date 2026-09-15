/**
 * 60 · Practical AI for Creative Teams — /features/practical-ai-for-creative-teams
 *
 * Angle (cluster ai-approach, primary): AI aimed at practical library problems with a workflow purpose,
 * rather than AI features for their own sake. The layer is 54, the tasks are 55, the team benefit is 59.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how to judge whether AI serves a practical purpose; vendor-neutral and claim-free beyond the cited pages." } as const;

const page: PageContent = {
  page: 60,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "AI",
      lede: "Test AI capabilities against the practical library problems they are meant to solve, and see why GetSibu aims its AI at problems with a workflow purpose rather than at features for their own sake.",
      visual: { diagram: "ingest-pipeline", focus: "processing" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 60 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "AI judged by the library problems it solves",
      body: [
        "GetSibu concentrates its AI capabilities on practical library problems: discovery, organisation, tagging, OCR, duplicate detection and media analysis. The stated alternative it avoids is adding AI features that have no purpose within a workflow.",
        "The difference is easy to see in practice. AI without a workflow purpose produces something interesting that nobody uses: a demonstration that impresses once, results nobody can check or correct, answers to questions nobody on the team was asking. Practical AI is duller to describe and more valuable to own. It shortens a search, spares someone a repetitive chore or catches a mistake, and it does so in the place where the work already happens.",
        [
          "For the wider context, ",
          { text: "How AI Changes DAM", page: 377 },
          " describes AI making visual and textual content more discoverable without every piece of metadata being entered manually, and ",
          { text: "What Is AI Asset Management?", page: 362 },
          " covers the idea in general terms.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Purpose before novelty", "Discovery and organisation", "Tagging and OCR", "Duplicate detection and media analysis", "Results used where work happens"],
      },
      highlight: {
        heading: "In practice",
        body: "A studio manager asks of every AI capability the same question: which recurring irritation in our library does this remove? If nobody can name one, it is not practical for that team.",
        tags: ["Studio managers", "Evaluation", "Library problems"],
      },
      glance: {
        heading: "Practical AI in brief",
        facts: [
          { label: "Area", value: "AI" },
          { label: "Aimed at", value: "Practical library problems" },
          { label: "Runs as", value: "AI Creative Workflow", page: 54 },
          { label: "Background", value: "What Is AI Asset Management?", page: 362 },
        ],
        actions: [{ kind: "route", path: "/features/ai", label: "More in AI" }]
      },
      sources: [{ kind: "pdf", page: 60 }, { kind: "pdf", page: 377 }, { kind: "pdf", page: 362 }, { kind: "pdf", page: 54 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "tests",
      eyebrow: "Five tests",
      heading: "Questions that separate practical AI from novelty",
      items: [
        {
          heading: "Which problem does it remove?",
          summary: "A practical capability can be described as a problem that stops happening.",
          icon: "help",
          body: [
            "“Files nobody can find”, “text trapped in scans” and “copies everywhere” are problems. “Advanced visual intelligence” is a description of technology. If a capability cannot be restated as a problem it removes, it is hard to say what it will change for the team.",
          ],
        },
        {
          heading: "Where do its results appear?",
          summary: "Output that lives outside everyday tools tends to be ignored.",
          icon: "compass",
          body: [
            ["AI results earn their keep when they reach the place people already look. In GetSibu, AI-generated tags are one of the sources ", { text: "creative asset search", page: 11 }, " draws on, so the benefit arrives through a search people were going to run anyway."],
          ],
        },
        {
          heading: "Can people correct it?",
          summary: "Any AI will sometimes be wrong; practical AI makes that cheap to fix.",
          icon: "refresh",
          body: [
            ["A capability that cannot be corrected forces a choice between trusting it blindly and ignoring it. ", { text: "AI tag override", page: 48 }, " lets authorised users replace tags that do not match the team’s intended taxonomy."],
          ],
        },
        {
          heading: "Does it fit how the organisation is arranged?",
          summary: "A capability that ignores client or department boundaries creates work instead of saving it.",
          icon: "building",
          body: [
            ["An agency working for several clients may find that each has its own requirements for AI processing. Where that is the case, ", { text: "AI key management specific to each client", page: 164 }, " can be part of a multi-tenant configuration. A practical capability is one a team can adopt without rearranging the boundaries it already relies on."],
          ],
        },
        {
          heading: "Can you tell when it has done its job?",
          summary: "Invisible work is hard to trust and hard to plan around.",
          icon: "clock",
          body: [
            ["Teams need to know whether an asset is ready before relying on it. ", { text: "Media processing status", page: 145 }, " helps distinguish between an asset that has uploaded successfully and one that is fully indexed and searchable."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 11 }, { kind: "pdf", page: 48 }, { kind: "pdf", page: 164 }, { kind: "pdf", page: 145 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "problems",
      eyebrow: "Problem by problem",
      heading: "The library problems GetSibu aims its AI at",
      intro: "Each capability is tied to a recurring problem and to the place its result is used.",
      columns: ["The everyday problem", "What the AI does", "Where the result is used"],
      rows: [
        { label: "Discovery", page: 12, cells: ["Files nobody can find by name", "Finds assets by what appears inside them", "Search"] },
        { label: "Organisation", page: 42, cells: ["Sorting every file by hand", "Helps categorise by content and metadata", "The library’s categories"] },
        { label: "Tagging", page: 31, cells: ["Sparse or missing keywords", "Suggests tags during processing", "Descriptions people review"] },
        { label: "OCR", page: 38, cells: ["Words locked inside scans and slides", "Extracts the text", "Searchable asset information"] },
        { label: "Duplicate detection", page: 40, cells: ["Copies after exports and re-encodes", "Identifies identical and equivalent files", "Library housekeeping"] },
        { label: "Media analysis", page: 34, cells: ["Qualities nobody records", "Identifies objects, mood and colour", "Discovery by visual characteristics"] },
      ],
      sources: [{ kind: "pdf", page: 60 }, { kind: "pdf", page: 12 }, { kind: "pdf", page: 42 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 38 }, { kind: "pdf", page: 40 }, { kind: "pdf", page: 34 }, { kind: "pdf", page: 35 }, { kind: "pdf", page: 36 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A studio starts with its most expensive problem",
      team: "A creative studio",
      situation: "A creative studio moving its work into GetSibu wants AI to prove useful quickly. Rather than trying everything at once, the studio lead asks which library problem costs the team most.",
      steps: [
        { heading: "The costliest problem is named", body: "Designers regularly rework files they cannot find, and the old drives are full of exported copies, so discovery and duplicates come first." },
        { heading: "The library comes in", body: ["The studio moves its existing work across with ", { text: "bulk import", page: 130 }, " instead of uploading each file by hand."] },
        { heading: "Copies are identified", body: "Duplicate detection identifies identical files and visually equivalent copies, and the studio lead decides which to keep." },
        { heading: "Searches are tried on real requests", body: "The team tests recent requests from clients against the library, checking whether material can be found by what it contains rather than by the old drive layout." },
      ],
      outcome: "The studio judges AI by the problems it removes, and each capability it relies on is tied to something the team felt every week.",
      link: { page: 220, label: "GetSibu for Creative Studios" },
      sources: [{ kind: "pdf", page: 60 }, { kind: "pdf", page: 130 }, { kind: "pdf", page: 40 }, { kind: "pdf", page: 12 }, { kind: "pdf", page: 220 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about practical AI for creative teams",
      items: [
        {
          question: "How can a team judge whether practical AI is still earning its place?",
          answer: "By returning to the problems it was meant to remove and asking whether they still happen. If searches still end in messages to colleagues, or copies keep accumulating, the capability is not yet doing its job there.",
        },
        {
          question: "Does practical AI mean using fewer AI features?",
          answer: "Not necessarily. A team can rely on many capabilities as long as each is tied to a problem it recognises; what practical AI rules out is a capability with no job in the workflow, however few or many there are.",
        },
        {
          question: "Does practical AI for creative teams remove the need for human judgement?",
          answer: ["No. GetSibu’s approach ", { text: "combines automated analysis with human approval", page: 45 }, ", so teams retain control while AI reduces repetitive library administration."],
        },
      ],
      sources: [{ kind: "pdf", page: 45 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on GetSibu’s approach to AI",
      variant: "compact",
      pages: [45, 54, 55, 59, 377, 362],
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
