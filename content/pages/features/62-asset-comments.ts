/**
 * 62 · Asset Comments — /features/asset-comments
 *
 * Angle (cluster: comments-feedback, primary): the single comment attached to an asset — what attachment means,
 * how to write a comment someone can act on, and where a comment goes next (threads, search, approval, audit).
 * Creative Team Collaboration (61) owns collaboration in the library, Threaded Comments (63) threads, Team Feedback
 * (73) the scattering problem, Creative Team Communication (85) context clarity.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of writing and using feedback on creative files; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 62,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Collaboration",
      lede: "What an asset comment is in GetSibu, what it means for feedback to be attached to the creative work itself, and how to write comments a colleague can act on.",
      visual: { diagram: "timeline-review", focus: "comments" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 62 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A note that belongs to the file it describes",
      body: [
        "Users can leave comments directly on assets in GetSibu. The feedback is attached to the creative work being discussed, so it is kept with that asset instead of in a message about it.",
        "The difference sounds minor, yet it changes how feedback behaves. A remark in an email only makes sense while the attachment beside it is current and while everyone has the same message. A remark on the asset has neither dependency: whoever opens the asset reads the remark in the company of the work it describes.",
        [
          "A comment is also where much of the other collaboration in the library starts. Replies turn it into a ",
          { text: "threaded discussion", page: 63 },
          " about one issue, on video it can be placed at ",
          { text: "a point on the timeline", page: 64 },
          ", and a mention can draw a colleague into it.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Feedback attached to the asset", "Read alongside the work", "The start of a thread", "A signal for library search", "Part of the audit record"],
      },
      highlight: {
        heading: "In practice",
        body: "A copywriter checking a packaging image writes “the side-panel claim needs the approved wording” on the image itself, so the designer does not have to ask which file the note meant.",
        tags: ["Designers", "Copywriters", "Reviewers"],
      },
      glance: {
        heading: "Asset comments in brief",
        facts: [
          { label: "Area", value: "Collaboration" },
          { label: "Attached to", value: "The asset under discussion" },
          { label: "Grows into", value: "Threaded Comments", page: 63 },
          { label: "Looked back on", value: "Asset Discussion History", page: 75 },
        ],
        actions: [{ kind: "route", path: "/features/collaboration", label: "More in Collaboration" }]
      },
      sources: [{ kind: "pdf", page: 62 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 64 }, { kind: "pdf", page: 66 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 326 }, { kind: "pdf", page: 75 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "writing",
      eyebrow: "Writing useful comments",
      heading: "What makes an asset comment easy to act on",
      items: [
        {
          heading: "Say what you see, then what you want",
          summary: "An observation and a request are more useful together than either one alone.",
          icon: "eye",
          body: [
            "“The logo feels small” leaves the designer guessing at the fix. “The logo feels small beside the headline; try matching its height” offers something to try and the reason behind it.",
          ],
        },
        {
          heading: "Name the part of the asset",
          summary: "Where inside the file a problem sits matters as much as which file it is.",
          icon: "compass",
          body: [
            "On a layout, name the area: the headline, the second paragraph, the lower right corner. On a document or presentation, give the page or slide. Video is the exception, because the comment itself can carry its location on the timeline.",
          ],
        },
        {
          heading: "Mark preference apart from requirement",
          summary: "Reviewers help by signalling whether a note is essential or a suggestion.",
          icon: "flag",
          body: [
            "Creative feedback mixes brand rules, factual corrections and personal taste. Saying which is which helps the person making changes decide what to do first, and stops a passing preference from being treated as a condition of sign-off.",
          ],
          points: ["Corrections and brand rules first", "Suggestions labelled as suggestions"],
        },
        {
          heading: "Comment on the work, not the person",
          summary: "Feedback lands better when it describes what the asset does rather than who made it.",
          icon: "check",
          body: [
            "“This layout is confusing” invites a defensive reply; “the eye goes to the footer before the offer” describes an effect the designer can change. Because the comment stays on the asset, a neutral and specific tone also helps colleagues who read it without having been part of the review.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 62 }, { kind: "pdf", page: 64 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "after-the-comment",
      eyebrow: "Beyond the note",
      heading: "Where an asset comment goes from here",
      items: [
        {
          heading: "To the person who can answer",
          body: "Mentioning a teammate in the discussion pulls them in, while folder-aware autocomplete helps keep suggestions to people with appropriate visibility.",
          icon: "mention",
          points: ["No forwarding of messages", "Visibility taken into account"],
          page: 66,
        },
        {
          heading: "Into search",
          body: "Comments are among the sources GetSibu search draws on, together with filenames, metadata, OCR, AI-generated tags and semantic information.",
          icon: "search",
          points: ["An asset found by what was said about it", "Helpful when the filename says little"],
          page: 11,
        },
        {
          heading: "Towards a decision",
          body: "Once the feedback has been addressed, the asset can go through an approval workflow and be marked as approved.",
          icon: "approval",
          points: ["Discussion first, decision after", "Both on the same asset"],
          page: 67,
        },
        {
          heading: "Into custom workflows",
          body: "For developers, comment-related events can support custom collaboration workflows.",
          icon: "api",
          points: ["Built on the GetSibu API", "For teams with their own tools"],
          page: 266,
        },
      ],
      sources: [{ kind: "pdf", page: 66 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 266 }, { kind: "pdf", page: 261 }],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "Packaging feedback left where the artwork is",
      team: "An in-house design team",
      situation: "An in-house design team is updating packaging artwork for a product range. The brand manager, a copywriter and the product manager all need to check it, each on a different schedule.",
      steps: [
        { heading: "Reviewers comment when they can", body: "The brand manager leaves notes on the packaging asset first thing, the copywriter adds her own after lunch, and nobody waits for a meeting." },
        { heading: "Each note names its panel", body: "Comments say where on the pack each point applies, such as the front logo or the side-panel claim, so the designer has fewer follow-up questions to ask." },
        { heading: "A wording question is raised", body: ["The copywriter is unsure about an ingredient claim and ", { text: "mentions the product manager", page: 86 }, ", who replies beneath her comment."] },
        { heading: "The designer works from the artwork", body: "Instead of a compiled list in an email, the designer reads each note on the asset it concerns and makes the changes." },
        { heading: "The discussion is found again", body: "Months later, a colleague searching for that ingredient claim finds the packaging asset through the comments made about it." },
      ],
      outcome: "The reasoning behind the packaging stays with the artwork, where a colleague can come across it later instead of digging through old messages.",
      link: { page: 222, label: "GetSibu for In-House Creative Teams" },
      sources: [{ kind: "pdf", page: 62 }, { kind: "pdf", page: 86 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 222 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about asset comments",
      items: [
        {
          question: "Are comments on assets part of the audit logs?",
          answer: [{ text: "Audit logs", page: 326 }, " provide a historical record of important actions, and comments are named among them alongside permissions and asset changes, so commenting forms part of the platform’s record as well as the discussion."],
        },
        {
          question: "How do asset comments relate to team feedback as a whole?",
          answer: ["Comments are the means of keeping a single piece of feedback on the work it concerns. ", { text: "Team feedback", page: 73 }, " looks at the wider problem they address: feedback scattered across email, chat and project-management systems."],
        },
        {
          question: "Should every piece of feedback on a creative file be an asset comment?",
          answer: "Feedback about the file itself works best as a comment on it. A discussion that spans many assets, such as a change in campaign direction, may need its own brief, with comments on individual assets for the specific changes that follow.",
        },
      ],
      sources: [{ kind: "pdf", page: 62 }, { kind: "pdf", page: 326 }, { kind: "pdf", page: 73 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on commenting on assets",
      variant: "compact",
      pages: [63, 64, 66, 75, 85, 73],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the closest comment topics." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Build a Smarter Creative Workflow",
      conversionPage: 396,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 396 }],
    },
  ],
};

export default page;
