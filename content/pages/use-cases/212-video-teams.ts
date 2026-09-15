/**
 * 212 · GetSibu for Video Teams — /use-cases/video-teams
 *
 * FRAMED (claim: scene-detection). The PDF paragraph for this page is withheld and never paraphrased.
 * Angle (cluster: uc-video-production): a team that turns each shoot into many edits and keeps producing — reusing
 * footage it already owns, keeping every edit's revisions in order and gathering stakeholder notes on the edit.
 * Production Studios (211) owns running several productions; Post-Production (216) owns review rounds and sign-off;
 * Documentary (217) and Film Production (218) own long-form productions. Built only from publishable facts, with
 * Video Version Management (97) as verified context.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how video teams typically work; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 212,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Use Cases",
      lede: "How a video team that turns every shoot into many edits can keep its footage reusable, its revisions in order and its stakeholders’ notes attached to the right moments.",
      visual: { diagram: "media-library", focus: "video" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 97 }, { kind: "pdf", page: 19 }, { kind: "pdf", page: 64 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "One shoot, many edits, and a library that keeps up",
      body: [
        "Video teams rarely make one video at a time. A single shoot can feed a main film, shorter edits for different channels, clips for a sales presentation and footage that turns up again months later in something else entirely.",
        "That volume of output is what makes the library hard to manage. Each edit goes through its own revisions, each revision produces another large export, and the footage underneath ends up in project folders named after whichever video came first. When nobody can find a usable shot from an earlier project, the easy answer is to film it again.",
        [
          "GetSibu lets a video team manage cuts and revisions as ",
          { text: "versions of one asset", page: 97 },
          ", with the history kept alongside it. Around those versions sit the tools the rest of the work needs: ",
          { text: "advanced media filters", page: 19 },
          " for narrowing a large collection of footage, previews for checking heavy files and ",
          { text: "frame-accurate review", page: 65 },
          " for feedback on an edit.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Footage reused across projects", "Revisions kept in each asset’s history", "Heavy files previewed by streaming", "Notes at exact moments in an edit", "Duplicate exports identified"],
      },
      highlight: {
        heading: "In practice",
        body: "Before booking a pickup shoot, an editor checks the library for a usable shot and finds one from an earlier project, filed under a different campaign.",
        tags: ["Editors", "Motion designers", "Producers"],
      },
      glance: {
        heading: "Video teams in brief",
        facts: [
          { label: "Team", value: "Video teams" },
          { label: "Typical material", value: "Footage, edits, exports and audio" },
          { label: "Builds on", value: "Video Version Management", page: 97 },
          { label: "Supports", value: "Video Timeline Comments", page: 64 },
        ],
        actions: [{ kind: "route", path: "/use-cases", label: "More in Use Cases" }]
      },
      sources: [{ kind: "pdf", page: 97 }, { kind: "pdf", page: 19 }, { kind: "pdf", page: 147 }, { kind: "pdf", page: 65 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "capabilities",
      eyebrow: "What the team uses",
      heading: "What a video team works with day to day",
      items: [
        {
          heading: "Replacement in place",
          body: "A new export of an edit replaces the old file inside the same asset while earlier versions are retained, so nobody has to decode names like “final-final”.",
          icon: "refresh",
          points: ["One asset per edit", "Earlier exports kept in the record"],
          page: 91,
        },
        {
          heading: "Revision tracking",
          body: "When several revisions exist, revision tracking helps show what changed between them and which one is the active version.",
          icon: "history",
          points: ["Useful when a reviewer cites an old export", "A clear answer to “which one is current?”"],
          page: 100,
        },
        {
          heading: "Filters for footage",
          body: "Combining filters for format, source, resolution and date reduces a large footage collection step by step, which is how a shot from an earlier project gets tracked down.",
          icon: "filter",
          points: ["Narrow by resolution or format", "Combine with keyword search"],
          page: 19,
        },
        {
          heading: "Streaming previews",
          body: "Large video files can be inspected through streaming previews before anyone pulls an original into the edit.",
          icon: "video",
          points: ["Check a clip without a full download", "Generated thumbnails for scanning results"],
          page: 147,
        },
        {
          heading: "Saved searches",
          body: "A search the team runs again and again, such as one for a product line’s footage, can be saved and shared through a URL.",
          icon: "search",
          points: ["Reusable views for recurring work", "Shared by link, not by copying files"],
          page: 17,
        },
        {
          heading: "Duplicate detection",
          body: "Exports saved twice, renamed or re-encoded can be recognised as copies through a combination of exact and perceptual hashing.",
          icon: "copy",
          points: ["Visually equivalent copies found", "Supports storage optimisation"],
          page: 40,
        },
      ],
      sources: [{ kind: "pdf", page: 91 }, { kind: "pdf", page: 100 }, { kind: "pdf", page: 19 }, { kind: "pdf", page: 13 }, { kind: "pdf", page: 147 }, { kind: "pdf", page: 146 }, { kind: "pdf", page: 17 }, { kind: "pdf", page: 40 }, { kind: "pdf", page: 112 }],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A recurring video series built from footage already in the library",
      team: "A video team",
      situation: "A video team produces a regular series of short product explainers. Each episode needs a few new shots, but much of the supporting footage could come from earlier shoots if the team could find it.",
      steps: [
        {
          heading: "Existing footage is checked first",
          body: ["Before planning a shoot, the producer runs a ", { text: "search across the library", page: 11 }, " for the products the episode covers and lists the clips worth a closer look."],
        },
        {
          heading: "Candidates are judged without downloads",
          body: "The editor watches each candidate clip through a streaming preview and only pulls the originals that make the cut.",
        },
        {
          heading: "Two copies of one clip turn up",
          body: "Duplicate detection identifies that the same clip exists under two filenames, so an authorised user removes the spare copy.",
        },
        {
          heading: "The first cut goes to stakeholders",
          body: ["Product and marketing reviewers leave notes at points on the timeline, and the editor answers their questions in a ", { text: "thread under each note", page: 63 }, "."],
        },
        {
          heading: "The episode is approved",
          body: ["Once the notes are addressed, the episode is ", { text: "marked as approved", page: 67 }, ", and its footage is ready to be found for the next one."],
        },
      ],
      outcome: "Each episode leans on footage the team already owns, and the record of edits and decisions stays with the videos rather than in a folder of numbered exports.",
      link: { page: 97, label: "Video Version Management" },
      sources: [{ kind: "pdf", page: 11 }, { kind: "pdf", page: 147 }, { kind: "pdf", page: 40 }, { kind: "pdf", page: 109 }, { kind: "pdf", page: 64 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 67 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "accordion",
      id: "decisions",
      eyebrow: "Considerations",
      heading: "Questions a video team has to settle about its library",
      items: [
        {
          heading: "Is a shorter edit a new asset or a new version?",
          summary: "Decide how cutdowns relate to the main film before the edits multiply.",
          icon: "layers",
          body: [
            "A revision replaces what came before it; a shorter edit for another channel usually lives alongside the main film instead of replacing it. Treating both the same way either buries the cutdown in the film’s history or scatters revisions across separate files.",
            ["Whichever convention the team picks, ", { text: "file version history", page: 92 }, " is the place for revisions, and older versions can be restored when a change does not work out."],
          ],
        },
        {
          heading: "Which footage is worth keeping?",
          summary: "Not every take deserves a place in the long-term library.",
          icon: "archive",
          body: [
            "Shoots generate far more material than any edit uses. Keeping everything makes future searches noisier; keeping only the selects risks losing the shot a later project needs.",
            [{ text: "Asset archiving", page: 108 }, " offers a middle path, retaining older material without letting it get in the way of everyday discovery."],
          ],
        },
        {
          heading: "How are exports described?",
          summary: "Filenames alone rarely say which edit, length or revision a file is.",
          icon: "tag",
          body: [
            "Export names get truncated, copied and edited by hand, and they drift from the truth quickly. Descriptive information that sits with the file outlasts a naming convention that lives in someone’s head.",
            ["Metadata such as creators and custom keywords ", { text: "can be searched alongside tags and extracted content", page: 23 }, ", which gives the team another way in when an export’s filename says little."],
          ],
        },
        {
          heading: "Who reviews, and from where?",
          summary: "Reviewers outside the video team often work from other offices and other schedules.",
          icon: "users",
          body: [
            "Stakeholders from marketing, product or leadership want to comment on an edit on their own time, without asking the editor to export and send yet another file.",
            [{ text: "Collaborative asset review", page: 87 }, " lets distributed reviewers take part without being in the same place, and ", { text: "team mentions", page: 66 }, " bring the right person into a note that needs their answer."],
          ],
        },
        {
          heading: "How much space does the video library take?",
          summary: "Long films delivered in several lengths and formats are heavy files.",
          icon: "database",
          body: [
            "Video tends to take up far more space than images or documents, and a team that delivers each film in several lengths and formats multiplies that weight.",
            [{ text: "Storage analytics", page: 183 }, " provide a view of how much space different asset categories consume, so the team can see how much of the library its video accounts for."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 92 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 23 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 87 }, { kind: "pdf", page: 66 }, { kind: "pdf", page: 183 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about GetSibu for video teams",
      items: [
        {
          question: "How does a video team know which edit was signed off?",
          answer: [{ text: "Approval history", page: 77 }, " provides a record of review activity and reduces confusion around which version was accepted, while ", { text: "review status", page: 76 }, " indicates whether an asset still needs attention."],
        },
        {
          question: "Does a video team’s library hold audio and stills as well as footage?",
          answer: ["Yes. ", { text: "Audio can be managed alongside other formats", page: 28 }, ", and images and documents sit in the same library, so music, stills and scripts do not need separate systems."],
        },
        {
          question: "Can a video team see which of its videos get used?",
          answer: [{ text: "Asset usage analytics", page: 182 }, " help show which assets receive attention and which remain underused, and ", { text: "production analytics", page: 201 }, " cover media activity, uploads and video-related workflows."],
        },
      ],
      sources: [{ kind: "pdf", page: 77 }, { kind: "pdf", page: 76 }, { kind: "pdf", page: 28 }, { kind: "pdf", page: 1 }, { kind: "pdf", page: 182 }, { kind: "pdf", page: 201 }],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on running a video library",
      variant: "compact",
      pages: [97, 64, 147, 19, 211, 216],
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
