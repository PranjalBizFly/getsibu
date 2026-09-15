/**
 * 97 · Video Version Management — /features/video-version-management
 *
 * Angle (cluster: versioning): the cuts and revisions of a film — where video versions come from in an edit, what is
 * different about versioning moving images (shifting timecodes, cutdowns, heavy exports, near-identical cuts), and a
 * review through several cuts. Image (98) and Document (99) Version Management own their media.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of video editing and review practice; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 97,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Versioning & Asset Management",
      lede: "How video teams can keep rough cuts, fine cuts and finishing fixes as versions of one film, and what makes versioning moving images different from versioning a still image or a deck.",
      visual: { diagram: "media-library", focus: "video" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 97 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Cuts and revisions kept with the film they belong to",
      body: [
        "Video teams can use GetSibu to manage the different cuts and revisions of a piece, while the version history stays associated with the video asset itself.",
        "Video piles up versions in a way other media do not. An edit passes through recognisable stages, each watched by different people, and once the picture is locked the changes carry on in the grade, the sound mix, graphics and captions. Every one of those produces a heavy new export, usually named after the stage it came from: “RC2”, “FC_notes”, “LOCK_mix_B”.",
        [
          "Holding those exports as versions of one asset means reviewers rarely have to ask where the current cut lives. ",
          { text: "Production collaboration", page: 81 },
          " describes how production teams can use asset comments, versioning and timeline review to coordinate this kind of work.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Cuts and revisions as versions", "History kept with the video asset", "Cutdowns as separate assets", "Timecodes shift between cuts", "Sign-off tied to the right cut"],
      },
      highlight: {
        heading: "In practice",
        body: "After the colourist’s pass, the graded export replaces the locked cut on the same asset. A producer opening the film afterwards gets the graded film, not an export that has already been superseded.",
        tags: ["Editors", "Producers", "Video agencies"],
      },
      glance: {
        heading: "Video versioning in brief",
        facts: [
          { label: "Works on", value: "Video assets" },
          { label: "Keeps", value: "Version history with the asset" },
          { label: "Coordinated through", value: "Production Collaboration" },
          { label: "Used by", value: "Editors, producers and video teams" },
        ],
        actions: [{ kind: "route", path: "/features/asset-management", label: "More in Versioning & Asset Management" }]
      },
      sources: [{ kind: "pdf", page: 97 }, { kind: "pdf", page: 81 }, { kind: "pdf", page: 211 }, EXPLAINS],
    },
    {
      kind: "workflow",
      id: "edit-stages",
      eyebrow: "Edit stages",
      heading: "Where the versions of a film come from",
      intro: "Stage names vary from team to team; the pattern of repeated exports does not.",
      stages: [
        { label: "Assembly", body: "The first string-out of selected footage. Rarely shared widely, but a sensible starting point for the asset’s history." },
        { label: "Rough cut", body: "Structure and story take shape and wider review begins, with each round of changes producing an export that replaces the last." },
        { label: "Fine cut", body: "Pacing is refined through precise notes, and frame-accurate review lets the team discuss exact moments instead of approximate locations.", page: 65 },
        { label: "Picture lock", body: "The edit is fixed. The cut at this point is often the one that sign-off and later questions refer back to." },
        { label: "Finishing", body: "Grade, mix and graphics work keeps revising the locked picture, each pass arriving as another version rather than a separate file." },
        { label: "Delivery", body: "Masters go out to their destinations, and the film’s record now holds the route from the first assembly to the delivered cut." },
      ],
      sources: [{ kind: "pdf", page: 97 }, { kind: "pdf", page: 65 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "video-considerations",
      eyebrow: "What to consider",
      heading: "What makes versioning video different",
      items: [
        {
          heading: "Timecodes move between cuts",
          summary: "Feedback about a moment belongs to the cut it was written against.",
          icon: "clock",
          body: [
            "When an edit is tightened, everything after the change shifts. A moment noted in one cut can sit somewhere else in the next, or be gone entirely.",
            "Notes that say which cut they were written against, and describe the moment as well as its position (“the harbour shot before the title”), still make sense after the edit has moved things around.",
          ],
          points: ["Name the cut a note refers to", "Describe the moment, not only its timecode"],
        },
        {
          heading: "Cutdowns are separate films",
          summary: "A shorter edit for social channels will be used alongside the main film, not instead of it.",
          icon: "film",
          body: [
            "Trailers, teasers, vertical edits and shorter edits for paid media each have their own reviews and their own fixes. Kept as separate assets, each can gather its own cuts without burying the main film behind a newer, shorter file.",
          ],
        },
        {
          heading: "Review exports and delivery masters",
          summary: "The file reviewers watch and the file that gets delivered are often not the same.",
          icon: "video",
          body: [
            "Teams commonly review a lighter export and deliver a high-quality master. Agreeing whether an asset’s versions follow the review exports, the masters or both avoids a history that mixes the two without explanation.",
            "Whichever convention a team picks, writing it down matters more than which one it is, because the next editor will read the history with that assumption.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 97 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A brand film through successive cuts",
      team: "An in-house video team",
      situation: "An in-house video team is editing a brand film. The marketing lead, a legal reviewer and the brand manager all need to review each cut, and none of them works in the edit suite.",
      steps: [
        { heading: "The rough cut goes up", body: "The editor adds the rough cut as the film’s asset, named for the film rather than the stage." },
        { heading: "Notes land on the timeline", body: ["Each reviewer leaves notes ", { text: "attached to points on the timeline", page: 64 }, " where something needs attention, naming the cut they watched."] },
        { heading: "The fine cut replaces it", body: "Once the changes are made, the fine cut replaces the rough cut on the same asset, which keeps the rough cut in the film’s version history." },
        { heading: "The locked cut is approved", body: ["The marketing lead approves the locked cut, and the ", { text: "asset approval", page: 68 }, " status history records it as approved rather than awaiting review."] },
      ],
      outcome: "The film is delivered with its earlier cuts held in one asset’s history and its approval on record, instead of a folder of stage-named exports.",
      link: { page: 211, label: "GetSibu for Production Studios" },
      sources: [{ kind: "pdf", page: 97 }, { kind: "pdf", page: 64 }, { kind: "pdf", page: 68 }, { kind: "pdf", page: 211 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about video version management",
      items: [
        {
          question: "What should become a new version of a video asset?",
          answer: "A revised export of the same film, such as a new cut, a finishing pass on the grade or mix, or a corrected graphic, each taking the place of the export before it.",
        },
        {
          question: "How can a team tell which of two near-identical cuts was approved?",
          answer: ["When cuts differ by a few frames, memory is unreliable. The ", { text: "approval history", page: 77 }, " is a record of review activity, which helps a team settle which cut was the one accepted."],
        },
        {
          question: "Can a long cut be reviewed without downloading the file?",
          answer: [{ text: "Preview generation and streaming", page: 313 }, " reduce the friction of reviewing large assets, so a reviewer can inspect a new cut without first pulling down the whole export."],
        },
      ],
      sources: [{ kind: "pdf", page: 97 }, { kind: "pdf", page: 77 }, { kind: "pdf", page: 313 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on versioning and reviewing video",
      variant: "compact",
      pages: [64, 65, 81, 147, 229, 77],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Bring Order to Creative Chaos",
      conversionPage: 399,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 399 }],
    },
  ],
};

export default page;
