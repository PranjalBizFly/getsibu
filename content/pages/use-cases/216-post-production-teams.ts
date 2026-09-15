/**
 * 216 · GetSibu for Post-Production Teams — /use-cases/post-production-teams
 *
 * FRAMED (claim: scene-detection). The PDF paragraph for this page is withheld and never paraphrased.
 * Angle (cluster: uc-video-production): finishing work — rounds of notes on successive renders, knowing which version
 * each note concerns, and a record of what was finally signed off. Production Studios (211) owns running several
 * productions; Video Teams (212) owns footage reuse and continuous output; Film Production (218) owns a film's
 * departments during production. Built only from publishable facts, with Video Version Management (97) as verified context.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how post-production work typically runs; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 216,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Use Cases",
      lede: "How a post-production team can take a project through round after round of notes and renders while keeping the current version clear, the discussion on the asset and the approval on record.",
      visual: { diagram: "media-library", focus: "video" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 97 }, { kind: "pdf", page: 100 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 68 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Keeping track of rounds, renders and sign-off",
      body: [
        "Post-production is where a project goes through the most versions in the least time. Picture edits, colour passes, sound mixes and effects shots each produce new renders, and every render prompts another round of notes from directors, producers and clients.",
        "The hard part is rarely making the change. It is knowing which render is current, whether a note has already been dealt with, and which file was actually signed off when the delivery date arrives. Answers scattered across email threads and file names do not survive a busy week in the suite.",
        [
          "GetSibu keeps much of that context with the asset. Different cuts and revisions can be managed as ",
          { text: "one asset’s versions", page: 97 },
          ", ",
          { text: "revision tracking", page: 100 },
          " helps show which version is currently active, and ",
          { text: "asset discussion history", page: 75 },
          " lets the team understand how feedback on the asset evolved over time.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Rounds of notes on each render", "The active version clearly identified", "The accepted version on record", "Re-encoded copies recognised", "Sound files beside the picture"],
      },
      highlight: {
        heading: "In practice",
        body: "When a producer asks why a shot changed, the editor points to the discussion history on the asset instead of searching old emails.",
        tags: ["Editors", "Producers", "Directors"],
      },
      glance: {
        heading: "Post-production teams in brief",
        facts: [
          { label: "Team", value: "Post-production teams" },
          { label: "Typical material", value: "Renders, cuts, sound mixes and delivery documents" },
          { label: "Builds on", value: "Video Version Management", page: 97 },
          { label: "Supports", value: "Creative Approval Management", page: 89 },
        ],
        actions: [{ kind: "route", path: "/use-cases", label: "More in Use Cases" }]
      },
      sources: [{ kind: "pdf", page: 97 }, { kind: "pdf", page: 100 }, { kind: "pdf", page: 75 }, { kind: "pdf", page: 89 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "round",
      eyebrow: "Step by step",
      heading: "A round of notes from render to sign-off",
      intro: "The same loop repeats for every pass, from the first cut to the final delivery.",
      steps: [
        { heading: "Upload the render", body: "Resumable and chunked uploads help large renders arrive reliably, even over a connection that drops.", icon: "upload", page: 312 },
        { heading: "Replace in place", body: "The new render replaces the previous file within the same asset, and the history of earlier work is kept in the asset record.", icon: "refresh", page: 93 },
        { heading: "Note the exact moment", body: "Reviewers attach comments to points on the timeline, each one tied to the moment it concerns.", icon: "message", page: 64 },
        { heading: "Discuss in threads", body: "Follow-up questions go into a thread under the original note, which keeps one discussion per issue.", icon: "thread", page: 63 },
        { heading: "Request approval", body: "When the changes are in, the team requests review and the asset moves towards approval.", icon: "approval", page: 67 },
        { heading: "Record the decision", body: "Status history shows whether the render is awaiting review, approved or needs changes.", icon: "check", page: 68 },
      ],
      sources: [{ kind: "pdf", page: 312 }, { kind: "pdf", page: 137 }, { kind: "pdf", page: 93 }, { kind: "pdf", page: 64 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 68 }],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "The last changes before a delivery deadline",
      team: "A post-production team",
      situation: "A post-production team is finishing a brand film. The picture is locked, but the colour pass and the sound mix are still drawing notes from the director, the producer and the client.",
      steps: [
        {
          heading: "Everyone watches the same render",
          body: ["The director and producer each watch the current render through ", { text: "streaming previews", page: 306 }, ", without waiting for a full download of the file."],
        },
        {
          heading: "A note seems already dealt with",
          body: "The producer passes on a client question about a shot the team believes it has already changed. The editor checks the asset’s version history to confirm which render is active, then answers in the thread.",
        },
        {
          heading: "The sound mix is revised",
          body: ["An updated mix replaces the previous file, and ", { text: "audio sits in the same library", page: 28 }, " as the picture it belongs to."],
        },
        {
          heading: "A duplicate render is caught",
          body: ["A re-exported render with a new filename turns out to match an existing one, because ", { text: "duplicate detection", page: 40 }, " identifies visually equivalent copies even after re-encoding."],
        },
        {
          heading: "Sign-off is on record",
          body: ["Once the client has agreed, the producer marks the final render as approved, and ", { text: "approval history", page: 77 }, " keeps a record of the review activity behind the version that was accepted."],
        },
        {
          heading: "Deliverables are easy to find",
          body: ["The approved files appear in an ", { text: "approved-only view", page: 103 }, ", separate from the renders that led to them."],
        },
      ],
      outcome: "The team delivers knowing which render was approved and why, and the notes, versions and decisions remain on the asset if the client comes back with a change later.",
      link: { page: 77, label: "Approval History" },
      sources: [{ kind: "pdf", page: 306 }, { kind: "pdf", page: 92 }, { kind: "pdf", page: 100 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 28 }, { kind: "pdf", page: 40 }, { kind: "pdf", page: 77 }, { kind: "pdf", page: 103 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "accordion",
      id: "decisions",
      eyebrow: "Considerations",
      heading: "Decisions that keep finishing work under control",
      items: [
        {
          heading: "Who is entitled to sign off",
          summary: "Many people give notes; far fewer should be able to sign off.",
          icon: "approval",
          body: [
            "Directors, producers, agency teams and clients all have views on a render, but a delivery needs one clear decision from the people entitled to make it.",
            [{ text: "Creative asset governance", page: 114 }, " sets out who can upload, edit, approve, download and manage assets, so the right to approve is a deliberate choice rather than a side effect of who was copied in."],
          ],
        },
        {
          heading: "How reviewers are brought into a note",
          summary: "A question left for the wrong person stalls the whole round.",
          icon: "mention",
          body: [
            "Mentioning the colourist on a grading note is faster than forwarding a thread and hoping it reaches them.",
            [{ text: "Team mentions", page: 66 }, " bring a named colleague into the discussion on an asset, and folder-aware autocomplete helps make sure that person has appropriate visibility of it."],
          ],
        },
        {
          heading: "Where the delivery paperwork lives",
          summary: "Specifications, cue sheets and clearances matter as much as the final file.",
          icon: "document",
          body: [
            "Deliverables come with documents: technical specifications, music cue sheets and clearance paperwork. When those sit in a different system from the renders, checking a delivery means working in two places at once.",
            ["Documents can be indexed by extracted text, metadata and tags in a ", { text: "searchable document library", page: 27 }, ", and ", { text: "document version management", page: 99 }, " keeps earlier versions when a specification is updated."],
          ],
        },
        {
          heading: "What happens to a job once it is delivered",
          summary: "Material that answers questions during a job mostly adds noise afterwards.",
          icon: "archive",
          body: [
            "During a job, earlier renders answer questions about what changed. Once the project is delivered, the whole job matters far less day to day than the work that follows it.",
            [{ text: "Asset lifecycle management", page: 101 }, " covers an asset from upload through review, approval and reuse to eventual deletion, and ", { text: "asset archiving", page: 108 }, " retains a finished job’s material without letting it interfere with everyday discovery."],
          ],
        },
        {
          heading: "Reviewers in other places",
          summary: "Directors and producers are rarely in the suite for every pass.",
          icon: "globe",
          body: [
            "Directors and producers often review from elsewhere, and remote review only works when everyone is looking at the same version.",
            [{ text: "Global asset access", page: 314 }, " through CDN-based delivery can support teams working across different geographical regions."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 114 }, { kind: "pdf", page: 66 }, { kind: "pdf", page: 27 }, { kind: "pdf", page: 99 }, { kind: "pdf", page: 101 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 314 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about GetSibu for post-production teams",
      items: [
        {
          question: "Can notes on a render help find it again later?",
          answer: ["Yes. ", { text: "Creative asset search", page: 11 }, " includes comments among the information it searches, so a note about a particular shot can lead back to the asset months afterwards."],
        },
        {
          question: "Can a post-production team return to an earlier cut or mix?",
          answer: ["Yes. ", { text: "Version restore", page: 94 }, " takes an asset back to a previous version when the team needs to return to an earlier creative state."],
        },
        {
          question: "Can a post-production team search every job at once instead of project by project?",
          answer: ["Yes. Teams can ", { text: "search across their entire creative library", page: 16 }, " rather than opening folders one at a time, so a mix, a render or a cue sheet can be found without knowing which job folder holds it."],
        },
      ],
      sources: [{ kind: "pdf", page: 11 }, { kind: "pdf", page: 94 }, { kind: "pdf", page: 16 }],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on finishing and approving video",
      variant: "compact",
      pages: [97, 77, 100, 312, 211, 229],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page, and the closest video use cases." }],
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
