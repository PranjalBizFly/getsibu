/**
 * 3 · AI-Powered Digital Asset Management — /platform/ai-powered-digital-asset-management
 *
 * FRAMED (claims: scene-detection, face-grouping). The PDF paragraph for this page is withheld and never
 * paraphrased. Angle (cluster: platform-positioning): why AI belongs in DAM — the repetitive library work that
 * outgrows a team, taken task by task, and what to ask of any AI in a library. AI-Aware Asset Management (9) owns
 * the recommend-and-decide stance; Practical AI (60) owns the workflow-purpose focus; 362 and 377 own the
 * vendor-neutral explainers. Built only from publishable facts on the AI feature pages.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of manual library work and the role of AI in asset management; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 3,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Platform",
      lede: "Why artificial intelligence belongs in digital asset management: the repetitive library work it can take on, where it sits in the asset workflow, and what to ask of AI that is meant to serve a creative team.",
      visual: { diagram: "ai-review", focus: "tags" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 45 }, { kind: "pdf", page: 54 }, { kind: "pdf", page: 377 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "The library work that grows faster than any team",
      body: [
        "AI-powered digital asset management uses automated analysis to take on the repetitive administration a library creates, while people keep the final say. In GetSibu, that pairing of automated analysis with human approval is how AI is applied: teams retain control and spend less of their time on library chores.",
        "Every file that enters a library needs describing before anyone else can find it. A photographer’s selects need keywords, a scanned brochure needs its text captured, and a batch of exports needs checking against files already stored. When a shoot or a campaign delivers hundreds of files at once, that work queues up, and whatever is not described soon after arrival tends never to be described at all.",
        [
          "This is the problem AI addresses. ",
          { text: "How AI changes DAM", page: 377 },
          " comes down to making visual and textual content discoverable without every piece of metadata being typed in by hand, and GetSibu treats AI as ",
          { text: "an operational layer across the asset workflow", page: 54 },
          " rather than an isolated feature. For a vendor-neutral grounding in the term, ",
          { text: "What Is AI Asset Management?", page: 362 },
          " covers the basics.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Automated analysis, human approval", "Less metadata typed by hand", "Text read from inside files", "Search by meaning", "Copies found by hashing", "Order kept as the library grows"],
      },
      highlight: {
        heading: "In practice",
        body: "After a large delivery, the team reviews tags that have already been suggested instead of writing keywords for each file from a blank page.",
        tags: ["Library managers", "Creative teams"],
      },
      glance: {
        heading: "AI in the library, in brief",
        facts: [
          { label: "Area", value: "Platform" },
          { label: "Works during", value: "Asset processing", page: 143 },
          { label: "Controlled through", value: "AI Tag Approval", page: 47 },
          { label: "Stance", value: "AI-Aware Asset Management", page: 9 },
        ],
        actions: [{ kind: "route", path: "/platform", label: "More in Platform" }]
      },
      sources: [{ kind: "pdf", page: 45 }, { kind: "pdf", page: 377 }, { kind: "pdf", page: 54 }, { kind: "pdf", page: 362 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 47 }, { kind: "pdf", page: 9 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "manual-and-ai",
      eyebrow: "Manual work, compared",
      heading: "Library tasks with and without AI assistance",
      intro: "The same jobs exist in every creative library; what changes is who, or what, does the first pass.",
      columns: ["Done entirely by hand", "With AI in GetSibu"],
      emphasis: 1,
      rows: [
        ["Describing new files", "Keywords typed for each upload, when there is time", "Tags suggested during processing for authorised users to review"],
        ["Sorting into categories", "Repeated after every campaign", "Classification by content and available metadata"],
        ["Text inside files", "Retyped, or left out of search", "Extracted from images, documents, presentations and screenshots"],
        ["Matching a request", "Only the exact words someone entered", "Search that interprets meaning, not only exact words"],
        ["Finding copies", "Spotted by eye, if at all", "Exact and perceptual hashing, including renamed or re-encoded files"],
        ["Keeping order over time", "Clean-up projects after the fact", "AI-assisted organisation as the library grows"],
      ],
      sources: [{ kind: "pdf", page: 31 }, { kind: "pdf", page: 42 }, { kind: "pdf", page: 38 }, { kind: "pdf", page: 39 }, { kind: "pdf", page: 40 }, { kind: "pdf", page: 57 }, EXPLAINS],
    },
    {
      kind: "workflow",
      id: "ai-across-workflow",
      eyebrow: "Across the workflow",
      heading: "Where AI does its work as an asset moves through the library",
      stages: [
        { label: "Ingestion", body: "Once a file has uploaded, AI-related processing runs as one of its processing stages, alongside metadata extraction and thumbnail generation." },
        { label: "Queue", body: "The AI processing queue reports whether each asset is queued, processing or ready, so a team can tell which new files have been analysed.", page: 144 },
        { label: "Organisation", body: "Suggested tags and classifications arrive for people to check, which turns describing a batch of files into reviewing one." },
        { label: "Discovery", body: "Tags, extracted text and semantic information become part of what search can match, which is where the earlier analysis pays off." },
        { label: "Maintenance", body: "Duplicate detection helps identify unnecessary copies, so the library does not quietly fill with the same file saved several times." },
      ],
      sources: [{ kind: "pdf", page: 54 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 144 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 9 }, { kind: "pdf", page: 42 }, { kind: "pdf", page: 34 }, { kind: "pdf", page: 38 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 112 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "questions-to-ask",
      eyebrow: "Considerations",
      heading: "What to ask of AI in any asset management system",
      intro: "These questions apply to any digital asset management platform you are evaluating.",
      items: [
        {
          heading: "Does each AI capability solve a named problem?",
          summary: "AI earns its place when it removes a specific piece of library work.",
          icon: "compass",
          body: [
            "A long list of AI features says little by itself. The better test is whether each one maps to a job your team currently does by hand, such as tagging, finding text in scanned files or clearing out copies.",
            ["GetSibu’s stated focus is ", { text: "practical AI for creative teams", page: 60 }, ": discovery, organisation, tagging, OCR, duplicate detection and media analysis, each tied to a workflow purpose rather than added for its own sake."],
          ],
        },
        {
          heading: "Can people check and correct the output?",
          summary: "Suggestions nobody can review become errors nobody can see.",
          icon: "approval",
          body: [
            "Automated labels are sometimes wrong, and a wrong tag misleads search without announcing itself. AI in a DAM should leave a clear route for people to confirm or change what it proposes.",
            ["In GetSibu, AI recommendations are not permanent: authorised users can ", { text: "override tags", page: 48 }, " whenever the generated classification does not match the team’s intended taxonomy."],
          ],
        },
        {
          heading: "Does the system show how sure it is?",
          summary: "Confidence information helps reviewers decide where to look first.",
          icon: "gauge",
          body: [
            "An AI suggestion is a judgement with a degree of certainty, not a fact. Systems that expose that certainty let reviewers spend their attention where it is most needed.",
            ["Generated tags in GetSibu can include ", { text: "confidence information", page: 46 }, " that shows how strongly the system associates a tag with an asset."],
          ],
        },
        {
          heading: "Does the analysis improve search, or only add labels?",
          summary: "The value of analysis shows up when someone looks for an asset.",
          icon: "search",
          body: [
            "Labels that never help anyone find anything are clutter. The point of analysis is that its output becomes findable: an object in a photograph, a phrase inside a PDF, the meaning behind a loosely worded request.",
            [{ text: "AI media understanding", page: 43 }, " makes what GetSibu interprets in visual assets available through search and organisation workflows, and ", { text: "AI document discovery", page: 53 }, " combines OCR and metadata so documents can be found by what they contain."],
          ],
        },
        {
          heading: "What does AI still leave to your team?",
          summary: "Judgement about purpose, context and preference remains a human job.",
          icon: "users",
          body: [
            "Analysis can describe what is visible in a file and read what is written on it. It cannot know which campaign a photograph was commissioned for, why a draft was rejected or which image the brand team prefers.",
            "That context still comes from people, through metadata, comments and approvals. A realistic plan for AI in a library gives it the repetitive first pass and leaves those decisions with the team.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 60 }, { kind: "pdf", page: 48 }, { kind: "pdf", page: 46 }, { kind: "pdf", page: 43 }, { kind: "pdf", page: 53 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about AI-powered digital asset management",
      items: [
        {
          question: "Why use AI in digital asset management at all?",
          answer: "Because describing and sorting files grows with every delivery. AI can take on the repetitive first pass, so not every piece of metadata has to be entered manually and the team’s time goes into reviewing rather than typing.",
        },
        {
          question: "Does AI-powered DAM remove the need for manual tagging altogether?",
          answer: ["Not entirely. Suggestions are there for people to confirm or correct, and some context is known only to the team. With ", { text: "AI-assisted tagging", page: 31 }, ", suggested tags can be reviewed, approved or overridden by authorised users."],
        },
        {
          question: "Is AI-powered DAM only worthwhile for very large libraries?",
          answer: ["Scale makes the benefit most visible: ", { text: "AI asset discovery", page: 12 }, " is particularly useful when a library holds thousands of visually similar files. A smaller library can still benefit from suggested tags early on, because organising from the start is easier than cleaning up later."],
        },
        {
          question: "How does AI-powered DAM relate to AI-aware asset management?",
          answer: ["One describes what AI takes on in a library; the other describes who decides. In ", { text: "AI-aware asset management", page: 9 }, ", the platform recommends tags and classifications, and the people responsible for the library keep control of how it is organised."],
        },
      ],
      sources: [{ kind: "pdf", page: 377 }, { kind: "pdf", page: 45 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 12 }, { kind: "pdf", page: 57 }, { kind: "pdf", page: 9 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on AI in the creative library",
      variant: "compact",
      pages: [9, 31, 60, 43, 362, 377],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Give Your Creative Team One Source of Truth",
      conversionPage: 395,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 395 }],
    },
  ],
};

export default page;
