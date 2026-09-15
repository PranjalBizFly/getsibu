/**
 * 65 · Frame-Accurate Review — /features/frame-accurate-review
 *
 * Angle (cluster: video-review): the practice of discussing exact moments in video instead of describing
 * approximate locations — which moments need that precision and how a review runs when feedback is anchored.
 * Video Timeline Comments (64) owns the mechanism (comments attached to timeline points); Creative Review (69)
 * owns the review space; Production Collaboration (81) owns production teams.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of video review practice and editing; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 65,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Collaboration",
      lede: "Which moments in a video edit need exact rather than approximate feedback, why written descriptions of timing let reviewers down, and how review in GetSibu is anchored to the timeline.",
      visual: { diagram: "timeline-review", focus: "comments" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 65 }, { kind: "pdf", page: 64 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Discussing the moment itself, not a description of it",
      body: [
        "With frame-accurate review, creative teams discuss specific moments in a video instead of describing approximate locations through messages. Everyone taking part is talking about the same instant of the same cut.",
        "Video is a rapid succession of frames, and many of the decisions that matter in an edit play out within a handful of them: where a cut lands, when a title appears, whether a product shot holds long enough to register. Phrases such as “around the middle” or “just after the music changes” cannot carry that precision, and each viewer interprets them against their own memory of the film.",
        [
          "The mechanism underneath is the ",
          { text: "video timeline comment", page: 64 },
          ", a note attached to a specific point on the timeline. Frame-accurate review is the working habit built on it: anchoring every remark about timing to the moment it concerns, so that ",
          { text: "production teams", page: 81 },
          " can coordinate creative work around moments rather than guesses.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Specific moments, not rough locations", "Feedback anchored to the timeline", "Timing decisions made precisely", "Fewer misread descriptions", "Review from different locations"],
      },
      highlight: {
        heading: "In practice",
        body: "Rather than writing “the logo comes in too early near the end”, a reviewer comments at the moment the logo appears, and the editor begins at that exact point.",
        tags: ["Editors", "Directors", "Motion designers"],
      },
      glance: {
        heading: "Where frame-accurate review fits",
        facts: [
          { label: "Area", value: "Collaboration" },
          { label: "Works on", value: "Video assets" },
          { label: "Built on", value: "Video Timeline Comments", page: 64 },
          { label: "Used by", value: "GetSibu for Production Studios", page: 211 },
        ],
        actions: [{ kind: "route", path: "/features/collaboration", label: "More in Collaboration" }]
      },
      sources: [{ kind: "pdf", page: 65 }, { kind: "pdf", page: 64 }, { kind: "pdf", page: 81 }, { kind: "pdf", page: 211 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "moments",
      eyebrow: "Where precision matters",
      heading: "Moments where approximate feedback fails",
      items: [
        {
          heading: "Cuts and transitions",
          summary: "An edit that lands slightly early or late changes how a sequence feels.",
          icon: "film",
          body: [
            "The rhythm of an edit depends on exactly where one shot ends and the next begins. A note that a cut “feels abrupt” can only be acted on when the editor knows which cut, and most sequences contain several that could match the description.",
          ],
        },
        {
          heading: "Titles and on-screen text",
          summary: "Text has to appear, hold and leave at the right points.",
          icon: "text",
          body: [
            "Name straps, legal lines and end cards must stay readable for long enough and must not collide with other elements. Reviewers checking them need to point to the moment a line appears or disappears, not to a general stretch of the film.",
          ],
        },
        {
          heading: "Sound against picture",
          summary: "A mismatch between what is heard and what is seen is noticed almost at once.",
          icon: "audio",
          body: [
            "A voice slightly out of step with a speaker, or a sound effect that trails the action, is obvious to viewers yet hard to put into words. Tying the note to the exact moment removes the guesswork for whoever fixes it.",
          ],
        },
        {
          heading: "Faults that last an instant",
          summary: "Some problems are so brief they are easy to miss a second time.",
          icon: "scan",
          body: [
            "A stray frame from another shot, a flicker in a graded sequence or a blemish in a render may be visible only fleetingly. If the note just says it happened “somewhere in the second half”, finding the fault can take longer than fixing it.",
          ],
        },
        {
          heading: "Product and brand moments",
          summary: "Commercial work often depends on exactly when something is on screen.",
          icon: "eye",
          body: [
            "How long a product stays visible, when a logo arrives and whether a pack shot is sharp at the moment it counts are all questions of timing. Brand and marketing reviewers can raise them as precisely as the editor needs.",
          ],
        },
        {
          heading: "Continuity between shots",
          summary: "Small inconsistencies only show where two shots meet.",
          icon: "layers",
          body: [
            "A prop that shifts, a change in light or a costume detail that differs between takes reveals itself at one particular cut. A precise note lets the editor judge quickly whether another take will solve it.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 65 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "approximate-or-exact",
      eyebrow: "The difference",
      heading: "Approximate descriptions and frame-accurate review side by side",
      columns: ["Locations described in messages", "Frame-accurate review in GetSibu"],
      emphasis: 1,
      rows: [
        ["Pointing to an issue", "Phrases such as “near the end”", "A comment at that point on the timeline"],
        ["The editor’s first task", "Scrub through the cut to find it", "Begin where the comment is attached"],
        ["Notes on similar shots", "Easily confused with one another", "Each held at its own point"],
        ["Watching the cut", "Exported copies sent around", "Streaming previews without a full download"],
        ["Clarifying a note", "A new message that refers to the old one", "A reply in the thread on that moment"],
        ["Reviewers in several places", "Timings compared across emails", "One asset, discussed at the same moments"],
      ],
      sources: [{ kind: "pdf", page: 65 }, { kind: "pdf", page: 64 }, { kind: "pdf", page: 147 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 87 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A short commercial checked moment by moment",
      team: "An agency video team",
      situation: "An agency video team is finishing a short commercial for a retail client. Final checks involve the director, a brand reviewer and the colleague responsible for the legal line on the end card.",
      steps: [
        { heading: "Reviewers watch in the library", body: ["Each reviewer opens the commercial through a ", { text: "streaming preview", page: 147 }, ", without waiting for the full file to download."] },
        { heading: "Timing notes go on the moments", body: "The brand reviewer comments where the pack shot comes in, asking for it to hold a little longer, and the director marks a transition that lands too early." },
        { heading: "The end card is checked exactly", body: "The colleague checking the legal line comments at the moment it appears, noting that it leaves the screen before it can be read." },
        { heading: "The editor starts from the marked points", body: "The editor goes directly to each marked moment, adjusts the timing and replies in each thread to say what has changed." },
        { heading: "The revised cut returns for review", body: ["Once the timing is adjusted, the editor requests review again, and ", { text: "review status", page: 76 }, " shows whether the commercial still needs attention."] },
      ],
      outcome: "Every timing change traces back to a note at a specific moment, and nobody had to reconcile three different descriptions of where the pack shot began.",
      link: { page: 229, label: "GetSibu for Video Agencies" },
      sources: [{ kind: "pdf", page: 147 }, { kind: "pdf", page: 64 }, { kind: "pdf", page: 65 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 76 }, { kind: "pdf", page: 229 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about frame-accurate review",
      items: [
        {
          question: "What does frame-accurate mean in video review?",
          answer: "A video is a sequence of still pictures called frames. Frame-accurate feedback refers to a moment precisely enough to identify the picture in question, rather than a stretch of the film around it.",
        },
        {
          question: "Which kinds of video work gain most from frame-accurate review?",
          answer: ["Any video where a requested change depends on exactly when something happens. ", { text: "Production studios", page: 211 }, " can add frame-specific feedback as part of reviewing their video assets, and agencies checking commercials for clients face the same need."],
        },
        {
          question: "Can frame-accurate review work when reviewers are in different locations?",
          answer: ["Yes. ", { text: "Collaborative asset review", page: 87 }, " is intended to help distributed teams review creative material without everyone being in the same physical place."],
        },
        {
          question: "Does frame-accurate review replace watching the whole film together?",
          answer: "No. A complete viewing is still the best way to judge pacing and overall effect. Frame-accurate feedback is how the specific points raised during that viewing are recorded and acted on.",
        },
      ],
      sources: [{ kind: "pdf", page: 65 }, { kind: "pdf", page: 211 }, { kind: "pdf", page: 87 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on reviewing video precisely",
      variant: "compact",
      pages: [64, 81, 211, 87, 69, 385],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the closest video review topics." }],
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
