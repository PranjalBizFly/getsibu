/**
 * 211 · GetSibu for Production Studios — /use-cases/production-studios
 *
 * Angle (cluster: uc-video-production, primary): the studio as an operation running several productions at once —
 * keeping each production's footage organised and private, reviewing cuts with frame-specific feedback, versioning,
 * and closing a production cleanly at wrap. Video Teams (212) owns footage reuse across continuous output;
 * Post-Production (216) owns revision rounds and sign-off; Documentary (217) owns long research-heavy productions;
 * Film Production (218) owns one film's departments; Video Agencies (229) owns client footage.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how production studios typically run their storage; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 211,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Use Cases",
      lede: "How a studio running several productions at once can keep each one’s footage organised, reviewed and versioned in one library, without the storage folders that multiply with every shoot.",
      visual: { diagram: "media-library", focus: "video" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 211 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "One library for every production on the studio’s slate",
      body: [
        "Production studios can use GetSibu to organise large collections of footage, review video assets and leave frame-specific feedback, while versions are managed inside each asset rather than across scattered storage folders.",
        "A studio’s storage problem is rarely a single production. Several projects tend to be at different stages at once: one in pre-production, one shooting, one in the edit and one waiting on final notes. Each brings its own drives, its own freelancers and its own naming habits, and before long the studio’s footage is spread across folders that only the people who created them can navigate.",
        [
          "Bringing that material together changes what the studio can do with it. A ",
          { text: "centralised creative asset library", page: 6 },
          " gathers content from connected drives and direct uploads, ",
          { text: "folder-level permissions", page: 152 },
          " let each production’s material be controlled separately from the rest, and footage from finished work can be retained without crowding the projects still in progress.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Footage from every production together", "Access controlled production by production", "Feedback tied to exact moments", "Cuts kept as versions of one asset", "Finished productions archived, not lost"],
      },
      highlight: {
        heading: "In practice",
        body: "A producer joining a project mid-edit is given that production’s folders, while the studio’s other work stays out of view.",
        tags: ["Producers", "Editors", "Studio managers"],
      },
      glance: {
        heading: "Production studios in brief",
        facts: [
          { label: "Team", value: "Production studios" },
          { label: "Typical material", value: "Footage, cuts, stills and production documents" },
          { label: "Builds on", value: "Production Collaboration", page: 81 },
          { label: "Supports", value: "Frame-Accurate Review", page: 65 },
        ],
        actions: [{ kind: "route", path: "/use-cases", label: "More in Use Cases" }]
      },
      sources: [{ kind: "pdf", page: 211 }, { kind: "pdf", page: 6 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 81 }, { kind: "pdf", page: 65 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "roles",
      eyebrow: "Who it helps",
      heading: "What the studio library does for each role",
      tabs: [
        {
          label: "Studio managers",
          heading: "Run several productions without mixing them",
          icon: "building",
          body: [
            "Whoever runs the studio’s infrastructure balances two needs: everyone should find what they need, and nobody should stumble into another production’s unreleased material.",
            [
              { text: "Organisation admin controls", page: 158 },
              " cover access policies, users, folders and organisational settings. ",
              { text: "Storage analytics", page: 183 },
              " show how much space each asset category consumes, which is useful when footage from several shoots arrives close together.",
            ],
          ],
          points: ["Policies and folders managed centrally", "Space used by each asset category"],
          link: { page: 175, label: "Team Access Management" },
        },
        {
          label: "Producers",
          heading: "See your production, not the whole studio",
          icon: "briefcase",
          body: [
            "Producers usually carry one or two projects and need full visibility of those, without administrative control over everything else the studio is making.",
            [
              "Access of the kind ",
              { text: "manager permissions", page: 155 },
              " describe, to specific folders or teams with areas outside a person’s responsibilities restricted, suits a producer. Within their own production, ",
              { text: "review status", page: 76 },
              " indicates which cuts still need attention and which have completed approval.",
            ],
          ],
          points: ["Access matched to the producer’s projects", "Outstanding reviews visible on each asset"],
          link: { page: 68, label: "Asset Approval" },
        },
        {
          label: "Editors",
          heading: "Work on the footage without admin overhead",
          icon: "film",
          body: [
            "Editors, including freelancers hired for a single project, need the footage and the feedback. They do not need control over the studio’s permissions.",
            [
              { text: "Editor permissions", page: 156 },
              " provide the access required to work with creative assets without unnecessary administrative privileges, and ",
              { text: "streaming previews", page: 147 },
              " let an editor inspect a large clip before committing to a full download.",
            ],
          ],
          points: ["Freelancers limited to their production", "Large clips checked before download"],
          link: { page: 97, label: "Video Version Management" },
        },
      ],
      sources: [{ kind: "pdf", page: 158 }, { kind: "pdf", page: 183 }, { kind: "pdf", page: 175 }, { kind: "pdf", page: 155 }, { kind: "pdf", page: 76 }, { kind: "pdf", page: 68 }, { kind: "pdf", page: 156 }, { kind: "pdf", page: 147 }, { kind: "pdf", page: 97 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "capabilities",
      eyebrow: "What the studio uses",
      heading: "What a production studio relies on in GetSibu",
      items: [
        {
          heading: "Timeline comments",
          body: "Notes attach to points on a video’s timeline, which gives the editor an exact location for every change a director asks for.",
          icon: "message",
          points: ["No timecodes typed into emails", "Replies grouped into threads by issue"],
          page: 64,
        },
        {
          heading: "Versions of every cut",
          body: "Assemblies, rough cuts and later revisions can be managed as versions of the same asset, so the history of an edit stays attached to it.",
          icon: "history",
          points: ["One asset per edit", "No “final_v3_fixed” filenames"],
          page: 97,
        },
        {
          heading: "Duplicate detection",
          body: "Exact and perceptual hashing help identify identical and visually equivalent copies, including footage re-encoded or renamed on its way between drives.",
          icon: "copy",
          points: ["Copies found despite new filenames", "Supports storage optimisation"],
          page: 40,
        },
        {
          heading: "Thumbnails for every clip",
          body: "Generated thumbnails give a quick visual preview of footage without anyone downloading the original file.",
          icon: "image",
          points: ["Scan a shoot’s clips by eye", "No download needed to preview"],
          page: 146,
        },
        {
          heading: "Metadata in the asset record",
          body: "EXIF, XMP, file paths, creators and custom keywords can become part of each asset record, preserving where a clip came from.",
          icon: "tag",
          points: ["Camera and file details kept", "Keywords usable in search"],
          page: 22,
        },
        {
          heading: "Production analytics",
          body: "Production teams can analyse media activity, uploads and video-related workflows in the library.",
          icon: "chart",
          points: ["Upload activity over time", "Video workflows in view"],
          page: 201,
        },
      ],
      sources: [{ kind: "pdf", page: 64 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 97 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 40 }, { kind: "pdf", page: 112 }, { kind: "pdf", page: 146 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 23 }, { kind: "pdf", page: 201 }, { kind: "pdf", page: 184 }],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "Opening, running and closing a production in the studio library",
      team: "A production studio",
      situation: "A studio has two productions in the edit when a new commercial shoot begins. A freelance editor is joining for the new project, and the studio wants that work kept apart from everything else until it wraps.",
      steps: [
        {
          heading: "A closed area for the new shoot",
          body: ["The studio creates folders for the commercial, which ", { text: "stay private until access is explicitly granted", page: 154 }, ", so nobody on the other productions sees the material by default."],
        },
        {
          heading: "Footage lands in batches",
          body: ["Camera files arrive through ", { text: "parallel uploads", page: 142 }, " while the crew is still on location, and each clip moves through processing stages such as metadata extraction and thumbnail generation."],
        },
        {
          heading: "The director marks up the first assembly",
          body: "Watching the assembly, the director leaves notes at the moments that need work, and the freelance editor replies in the same threads.",
        },
        {
          heading: "An earlier cut comes back",
          body: ["When the director prefers the pacing of a previous cut, the editor ", { text: "restores that version", page: 94 }, " rather than rebuilding it from memory."],
        },
        {
          heading: "The production wraps",
          body: ["Once the commercial is approved, its material is ", { text: "archived", page: 108 }, ", which retains it without getting in the way of everyday discovery on current projects."],
        },
      ],
      outcome: "The studio adds a production and closes it again without touching the access of its other projects, and the finished commercial’s footage, notes and versions stay together for whenever they are needed.",
      link: { page: 65, label: "Frame-Accurate Review" },
      sources: [{ kind: "pdf", page: 154 }, { kind: "pdf", page: 142 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 64 }, { kind: "pdf", page: 65 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 94 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 108 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "before-after",
      id: "before-after",
      eyebrow: "Before and after",
      heading: "From storage folders to a studio library",
      beforeLabel: "Scattered storage folders",
      afterLabel: "One studio library",
      before: ["A drive, or several, for each production", "Access granted wherever it was quickest", "Director’s notes sent as timecodes by email", "“final_v3” beside “final_v3_fixed”", "Finished projects cluttering current searches"],
      after: ["Every production’s footage in one library", "Access decided folder by folder", "Notes attached to points on the timeline", "Cuts held as versions of one asset", "Past productions archived out of the way"],
      sources: [{ kind: "pdf", page: 6 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 64 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 108 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about GetSibu for production studios",
      items: [
        {
          question: "Can a production studio keep each production’s footage separate in one library?",
          answer: ["Yes. Folder-level permissions control access more finely than organisation-wide access, and ", { text: "team access management", page: 175 }, " lets the studio apply consistent permissions to the group of people working on each production."],
        },
        {
          question: "Can freelance editors work on a studio production without seeing other projects?",
          answer: [{ text: "Individual permissions", page: 157 }, " give targeted access when organisational roles alone are not granular enough, which suits contributors who join for a single project."],
        },
        {
          question: "What happens to a production studio’s footage when a project wraps?",
          answer: ["It can be archived, which keeps historical content available without letting it interfere with everyday discovery. Where organisational policy calls for removal, ", { text: "asset deletion", page: 109 }, " is available to authorised users."],
        },
        {
          question: "Can a studio see how much of its storage goes to video footage?",
          answer: [{ text: "Storage by category", page: 192 }, " breaks storage down across video, image, document and audio, and ", { text: "storage growth analytics", page: 149 }, " give historical context on how quickly the library is expanding."],
        },
      ],
      sources: [{ kind: "pdf", page: 152 }, { kind: "pdf", page: 175 }, { kind: "pdf", page: 157 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 109 }, { kind: "pdf", page: 192 }, { kind: "pdf", page: 149 }],
    },
    {
      kind: "related",
      id: "related",
      heading: "More for studios managing footage",
      variant: "compact",
      pages: [65, 97, 152, 201, 218, 229],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page, and the closest video and production use cases." }],
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
