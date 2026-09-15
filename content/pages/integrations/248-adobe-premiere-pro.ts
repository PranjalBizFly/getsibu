/**
 * 248 · Adobe Premiere Pro Integration — /integrations/adobe-premiere-pro
 * (HELD draft; own claim: adobe-premiere-after-effects — this page names Premiere Pro only)
 *
 * Angle: editing. Professional video workflows where media management meets the editing environment:
 * footage, cuts, versions, review and delivery. page 249 owns motion design and visual
 * effects; page 250 owns video review workflows.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of professional video editing practice; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 248,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Integrations",
      lede: "How the Premiere Pro integration relates to the work of an edit: the footage behind a cut, the versions it goes through, the review it needs and the library that keeps all of it in order.",
      visual: { diagram: "connector-flow", label: "Premiere Pro" },
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 248 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Media management and the edit, side by side",
      body: [
        "Premiere Pro integration supports professional video workflows and helps teams connect media management with editing environments. For editors, that is where keeping track of footage meets the place where a cut is actually assembled.",
        "An edit draws on far more material than ever appears in it: rushes, alternate takes, graphics, music and earlier cuts. When that material is spread across drives and project folders, time meant for editing is spent locating media and confirming it is the right version before any creative decision is made.",
        [
          "On the library side, a ",
          { text: "searchable video library", page: 25 },
          " lets videos be indexed and enriched with AI-generated information, so relevant footage can be found without manually reviewing every file, and ",
          { text: "video version management", page: 97 },
          " keeps different cuts and revisions in the version history of the asset.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Professional video workflows", "Media management meets editing", "Footage found without watching everything", "Cuts kept in one version history", "Review tied to moments in the cut"],
      },
      highlight: {
        heading: "In practice",
        body: "Asked for a new cut, an editor opens the film’s version history first, so she starts from the latest cut in its record rather than an older file on her own drive.",
        tags: ["Editors", "Assistant editors", "Producers"],
      },
      glance: {
        heading: "The Premiere Pro integration in brief",
        facts: [
          { label: "Area", value: "Integrations" },
          { label: "Supports", value: "Professional video and editing workflows" },
          { label: "Cuts and revisions", value: "Video Version Management", page: 97 },
          { label: "Feedback", value: "Video Timeline Comments", page: 64 },
        ],
      },
      sources: [{ kind: "pdf", page: 248 }, { kind: "pdf", page: 25 }, { kind: "pdf", page: 97 }, { kind: "pdf", page: 64 }, EXPLAINS],
    },
    {
      kind: "workflow",
      id: "edit-stages",
      eyebrow: "Stage by stage",
      heading: "Where media management meets each stage of an edit",
      stages: [
        { label: "Gather the footage", body: "A shoot produces a large volume of video at once, and ingestion workflows designed around high-volume asset environments suit that kind of arrival.", page: 139 },
        { label: "Find the material", body: "Editors combine keywords with filters such as format, resolution and date to narrow a large set of clips to the few worth watching.", page: 13 },
        { label: "Assemble the cut", body: "The creative work of cutting happens in the editing environment, drawing on the material the team has located." },
        { label: "Review the cut", body: "Producers and directors discuss specific moments in the video rather than describing approximate locations through messages.", page: 65 },
        { label: "Revise and version", body: "A revised cut can replace the previous one without losing the history of earlier work, because versions are maintained within the asset record.", page: 93 },
        { label: "Deliver the approved film", body: "Approved-only views let colleagues reach content that has completed the required review, so the people preparing delivery can work from the accepted film.", page: 103 },
      ],
      sources: [{ kind: "pdf", page: 139 }, { kind: "pdf", page: 13 }, { kind: "pdf", page: 248 }, { kind: "pdf", page: 65 }, { kind: "pdf", page: 93 }, { kind: "pdf", page: 103 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "editing-decisions",
      eyebrow: "Worth deciding early",
      heading: "What editing teams weigh when they connect a library",
      items: [
        {
          heading: "Is it a new version or a new asset?",
          summary: "A re-edit of the same film and a shorter cut for another channel are different kinds of change.",
          icon: "film",
          body: [
            "Editors produce many related files: revised cuts of one film, cut-downs for social channels, versions without music, versions with different end cards. Keeping all of them as versions of one asset hides the deliverables; keeping each as its own asset hides the history. Agree a convention before the first project, for instance that re-edits are versions and different deliverables are separate assets.",
            ["Whichever convention is chosen, ", { text: "creative revision tracking", page: 100 }, " helps teams understand what changed between versions and which version is currently active."],
          ],
        },
        {
          heading: "How should rushes be described?",
          summary: "Footage that nobody can describe is footage nobody reuses.",
          icon: "tag",
          body: [
            "Camera files arrive with technical names that mean nothing a month later. The descriptions that make footage findable, such as the production, the shoot day and the subject, are easiest to add while the shoot is still fresh in everyone’s mind.",
            ["With ", { text: "media metadata management", page: 22 }, ", details such as EXIF, XMP, file paths, creators and custom keywords can become part of the asset record."],
          ],
        },
        {
          heading: "Which footage stays in everyday search?",
          summary: "Material from finished projects is worth keeping, but it should not crowd current work.",
          icon: "archive",
          body: [
            "Unused takes from a past campaign can be exactly what a future edit needs, so deleting them is rarely the answer. Leaving them mixed with active projects has its own cost, because every search returns yesterday’s material alongside today’s.",
            [{ text: "Asset archiving", page: 108 }, " provides a way to retain historical content without allowing old material to interfere with everyday asset discovery."],
          ],
        },
        {
          heading: "Where does feedback on a cut come from?",
          summary: "Notes from producers, directors and other editors rarely arrive together or in the same form.",
          icon: "message",
          body: [
            "An editor reconciling notes from a call, an email and a document spends time matching remarks to moments before changing anything. Collecting feedback in one place, attached to the cut, shortens that reconciliation step.",
            ["Reviewers need not share a room either: ", { text: "collaborative asset review", page: 87 }, " helps distributed teams review creative material without everyone being in the same physical location."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 100 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 87 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A series of brand films cut from one organised collection",
      team: "A studio edit team",
      situation: "A production studio’s edit team is cutting a series of short brand films for a retail client. Footage from the shoot is extensive, and the producer reviews every cut before it goes out.",
      steps: [
        { heading: "Footage is organised in one place", body: ["The shoot’s footage is collected in GetSibu instead of on individual drives, the way ", { text: "production studios", page: 211 }, " can organise large collections of footage without relying on scattered storage folders."] },
        { heading: "The editor works in Premiere Pro", body: "With media management connected to the editing environment, the editor can give more of her time to the story of each film and less to hunting for clips." },
        { heading: "The producer comments on moments", body: ["The producer leaves notes at ", { text: "points on the timeline", page: 64 }, " where pacing drags or a shot needs replacing, and the editor asks follow-up questions in the thread beneath each note."] },
        { heading: "A revised cut replaces the old one", body: ["The new cut replaces the previous one in place. When the producer prefers the earlier ending after all, the team uses ", { text: "version restore", page: 94 }, " to return to that creative state."] },
        { heading: "The film is signed off", body: "The producer marks the film as approved, and the approved version is the one the team delivers to the client." },
      ],
      outcome: "Each film finishes with its cuts, feedback and decision attached to one asset, and the next film in the series starts from an organised collection rather than a search through drives.",
      link: { page: 211, label: "GetSibu for Production Studios" },
      sources: [{ kind: "pdf", page: 248 }, { kind: "pdf", page: 211 }, { kind: "pdf", page: 64 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 94 }, { kind: "pdf", page: 67 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about the Premiere Pro integration",
      items: [
        {
          question: "Does the Premiere Pro integration change where editing happens?",
          answer: "Editing stays in the editing environment. The integration concerns the connection between that environment and media management, which is where footage, versions and review are looked after.",
        },
        {
          question: "Can editors inspect a large video cut without downloading it first?",
          answer: [{ text: "Streaming previews", page: 306 }, " allow teams to inspect media without waiting for full downloads, which matters when a single cut is a very large file."],
        },
        {
          question: "Can music and voice-over be kept with the footage in GetSibu?",
          answer: ["Yes. ", { text: "Audio assets", page: 28 }, " can be managed alongside other creative formats, so a film’s music, voice-over and sound effects need not live apart from the footage they accompany."],
        },
        {
          question: "Which kinds of team gain most from connecting editing with a library?",
          answer: ["Teams that edit professionally and at volume, such as ", { text: "film production", page: 218 }, " teams that centralise production media, and ", { text: "video agencies", page: 229 }, " managing client footage, versions, reviews and approved deliverables."],
        },
      ],
      sources: [{ kind: "pdf", page: 248 }, { kind: "pdf", page: 306 }, { kind: "pdf", page: 28 }, { kind: "pdf", page: 218 }, { kind: "pdf", page: 229 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on managing video for editing",
      variant: "compact",
      pages: [97, 25, 65, 211, 218, 229],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
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
