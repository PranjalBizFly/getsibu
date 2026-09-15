/**
 * 217 · GetSibu for Documentary Teams — /use-cases/documentary-teams
 *
 * FRAMED (claim: scene-detection). The PDF paragraph for this page is withheld and never paraphrased.
 * Angle (cluster: uc-video-production): a long-running, research-heavy production whose footage, audio and
 * documents arrive in stages and must keep their context. Production Studios (211) owns review and versions for
 * studio work; Film Production (218) owns centralised production media; Video Agencies (229) owns client footage.
 * Built only from publishable facts, with Searchable Video Library (25) as verified context.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how documentary productions typically handle material; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 217,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Use Cases",
      lede: "How a documentary team can hold footage, recorded audio and research in one searchable library, with the context of each file kept alongside it for the whole production.",
      visual: { diagram: "media-library", focus: "video" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 25 }, { kind: "pdf", page: 28 }, { kind: "pdf", page: 27 }, { kind: "pdf", page: 22 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Footage that stays findable long after the shoot",
      body: [
        "Documentary productions gather material over long periods: location shoots, archive footage, recorded interviews, ambient sound and a steady stream of research. Much of it never reaches the finished film, yet any clip might be needed once the edit finds its shape, and nobody can predict which one.",
        [
          "That makes the library a working tool rather than a store. In GetSibu, videos can be indexed and enriched with AI-generated information, so a team can ",
          { text: "discover relevant footage", page: 25 },
          " without manually reviewing every file, which matters most when the material runs to many hours.",
        ],
        [
          "Footage rarely travels alone. ",
          { text: "Audio can be managed alongside the rest of the library", page: 28 },
          " instead of in a separate archive, and ",
          { text: "metadata such as creators and custom keywords", page: 22 },
          " can become part of each asset record, so the context around a clip is not lost when it passes from researcher to editor.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Footage, audio and research in one library", "AI-generated information on indexed video", "Metadata kept in the asset record", "Versions of each cut", "Access controlled folder by folder"],
      },
      highlight: {
        heading: "In practice",
        body: "An assistant editor looking for archive material from an early shoot searches the metadata and keywords that came in with the files, instead of scrolling through drives named by date.",
        tags: ["Editors", "Researchers", "Producers"],
      },
      glance: {
        heading: "Documentary teams in brief",
        facts: [
          { label: "Team", value: "Documentary teams" },
          { label: "Typical material", value: "Footage, recorded audio, research documents" },
          { label: "Builds on", value: "Searchable Video Library", page: 25 },
          { label: "Supports", value: "Video Version Management", page: 97 },
        ],
        actions: [{ kind: "route", path: "/use-cases", label: "More in Use Cases" }]
      },
      sources: [{ kind: "pdf", page: 25 }, { kind: "pdf", page: 28 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 97 }, { kind: "pdf", page: 152 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "challenges",
      eyebrow: "Recurring challenges",
      heading: "Library problems documentary productions keep meeting",
      items: [
        {
          heading: "Material arrives in stages",
          summary: "Shoots, archive material and research pile up over months, often from different crews.",
          icon: "upload",
          body: [
            "A documentary can gather material for a long time before an edit takes shape, and each batch tends to land wherever there was space at the time.",
            ["Existing collections can be brought in through ", { text: "bulk import", page: 130 }, ", and ", { text: "watch folders", page: 128 }, " can be scanned continuously so newly added content enters the GetSibu workflow automatically."],
          ],
        },
        {
          heading: "Heavy files on fragile connections",
          summary: "Location crews and remote contributors often send large media over networks that drop.",
          icon: "network",
          body: [
            "Camera originals and field recordings are large, and the crews sending them are rarely on a studio connection.",
            ["Resumable uploads help prevent a large transfer from restarting after a network interruption, and ", { text: "chunked upload workflows", page: 138 }, " are designed for reliability with large files."],
          ],
        },
        {
          heading: "Provenance lives in someone’s head",
          summary: "Where a clip came from and who shot it is easily lost when the team changes.",
          icon: "user",
          body: [
            "Documentaries depend on knowing the origin of their material. A researcher may remember that a clip came from a particular archive, but that knowledge leaves with them when they move to another project.",
            ["Asset ownership gives context about who created or uploaded content, and ", { text: "creators and contributors can remain associated", page: 116 }, " with assets through collaboration and migration."],
          ],
        },
        {
          heading: "The same clip on three drives",
          summary: "Footage copied between drives, renamed or re-exported becomes hard to tell apart.",
          icon: "copy",
          body: [
            "Over a long production, material is duplicated for safety, for sharing and for the edit. The copies drift apart in name and format, and storage fills with footage the team already has.",
            [{ text: "Duplicate detection", page: 40 }, " combines exact and perceptual hashing to identify identical files and visually equivalent copies, including files that have been re-encoded or renamed."],
          ],
        },
        {
          heading: "Cuts multiply during the edit",
          summary: "Assemblies, rough cuts and fine cuts are easy to confuse once several exist.",
          icon: "film",
          body: [
            "Long-form editing produces many intermediate cuts, and filenames stop being reliable after the third “final”.",
            ["Video teams can ", { text: "manage different cuts and revisions", page: 97 }, " while the version history stays with the asset, and an older version can be restored when the film needs to return to an earlier state."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 130 }, { kind: "pdf", page: 128 }, { kind: "pdf", page: 137 }, { kind: "pdf", page: 138 }, { kind: "pdf", page: 115 }, { kind: "pdf", page: 116 }, { kind: "pdf", page: 40 }, { kind: "pdf", page: 97 }, { kind: "pdf", page: 94 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "capabilities",
      eyebrow: "What the team uses",
      heading: "What a documentary team relies on in GetSibu",
      items: [
        {
          heading: "Filters for large result sets",
          body: "Filters for category, format, source, resolution and date can be combined to reduce a large library step by step to a relevant set of assets.",
          icon: "filter",
          points: ["Narrow by format or resolution", "Separate one shoot’s dates from another’s"],
          page: 19,
        },
        {
          heading: "Metadata search",
          body: "Available metadata can be searched alongside tags and extracted content, which helps when the original filename or folder is unknown.",
          icon: "tag",
          points: ["Creators and custom keywords as search terms", "Useful for material from earlier productions"],
          page: 23,
        },
        {
          heading: "Streaming previews",
          body: "Large media files can be inspected through streaming previews without waiting for a complete download.",
          icon: "video",
          points: ["Check a clip before pulling the original", "Thumbnails for a quick visual pass"],
          page: 147,
        },
        {
          heading: "Searchable research documents",
          body: "Documents can be indexed using extracted text, metadata and organisational tags, so research can be located without opening each PDF or presentation.",
          icon: "document",
          points: ["Text inside PDFs becomes searchable", "Research sits beside the footage it supports"],
          page: 27,
        },
        {
          heading: "Frame-accurate review",
          body: "Directors and editors can discuss specific moments in a cut rather than describing approximate locations through messages.",
          icon: "message",
          points: ["Notes tied to the moment they concern", "Replies grouped by issue"],
          page: 65,
        },
        {
          heading: "Archiving finished work",
          body: "Archiving retains historical content without letting it interfere with everyday discovery, which suits material from films that are already complete.",
          icon: "archive",
          points: ["Past productions kept, not deleted", "Current projects stay uncluttered"],
          page: 108,
        },
      ],
      sources: [{ kind: "pdf", page: 19 }, { kind: "pdf", page: 13 }, { kind: "pdf", page: 23 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 147 }, { kind: "pdf", page: 146 }, { kind: "pdf", page: 27 }, { kind: "pdf", page: 15 }, { kind: "pdf", page: 65 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 108 }],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "An archive-heavy documentary moves into the edit",
      team: "A documentary team",
      situation: "A small documentary team has finished filming and is starting the edit. Its material sits on a separate drive for each location, a folder of licensed archive clips and a researcher’s collection of PDFs.",
      steps: [
        {
          heading: "The drives come in",
          body: ["The team imports its existing drives in bulk, with ", { text: "folder structures mirrored or remapped", page: 133 }, " so each location’s material stays grouped as the editors expect."],
        },
        {
          heading: "Editing starts on what is ready",
          body: ["Processing status shows which clips have uploaded and which are ", { text: "fully indexed and searchable", page: 145 }, ", so the editor begins with material that can already be found."],
        },
        {
          heading: "Archive clips are pulled by metadata",
          body: "The assistant editor searches the creators and keywords that arrived with the archive files, then narrows the results by format and date.",
        },
        {
          heading: "A fact is checked in the research",
          body: "A producer confirms a date quoted in the voice-over by searching for a phrase that appears inside one of the research PDFs.",
        },
        {
          heading: "The rough cut is reviewed remotely",
          body: "The director and executive producer leave notes at points on the timeline from different cities, and each new cut replaces the last while earlier ones remain in the version history.",
        },
      ],
      outcome: "The edit works from one library where footage, research and review notes are found through what is recorded about them, not by remembering which drive they were copied to.",
      link: { page: 25, label: "Searchable Video Library" },
      sources: [{ kind: "pdf", page: 130 }, { kind: "pdf", page: 133 }, { kind: "pdf", page: 145 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 23 }, { kind: "pdf", page: 19 }, { kind: "pdf", page: 15 }, { kind: "pdf", page: 64 }, { kind: "pdf", page: 87 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 97 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about GetSibu for documentary teams",
      items: [
        {
          question: "Can existing footage keep its folder structure when it moves into GetSibu?",
          answer: ["Yes, if the team wants it to. Folder structures can be mirrored or remapped during import, and ", { text: "large library migration", page: 131 }, " is designed to preserve important metadata and existing folder relationships."],
        },
        {
          question: "Can unreleased documentary material be kept private inside the library?",
          answer: [{ text: "Folder-level permissions", page: 152 }, " allow access to be controlled more finely than organisation-wide access, and new folders can remain private until access is explicitly granted."],
        },
        {
          question: "How do reviewers discuss a particular moment in a long cut?",
          answer: ["Comments can be attached to ", { text: "specific points on a video timeline", page: 64 }, ", and a note that needs more discussion can grow into a threaded conversation about that one issue."],
        },
        {
          question: "Is the library only for video?",
          answer: ["No. GetSibu is designed for videos, images, documents and audio, and ", { text: "creative file discovery", page: 24 }, " searches across them, so stills, sound recordings and research can be found in the same place as the footage."],
        },
      ],
      sources: [{ kind: "pdf", page: 133 }, { kind: "pdf", page: 131 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 154 }, { kind: "pdf", page: 64 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 1 }, { kind: "pdf", page: 24 }],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on managing footage libraries",
      variant: "compact",
      pages: [25, 97, 65, 211, 218, 229],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page, and the published video and production use cases." }],
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
