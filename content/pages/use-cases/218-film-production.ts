/**
 * 218 · GetSibu for Film Production — /use-cases/film-production
 *
 * Angle (cluster: uc-video-production): one film in production, run by departments — centralising camera, sound, stills
 * and production-office material, and giving each department organised access to a large and growing video library.
 * Production Studios (211) owns several productions at once; Video Teams (212) owns continuous output; Post-Production
 * (216) owns finishing rounds; Documentary (217) owns research-heavy long-form work; Video Agencies (229) owns clients.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how film productions typically organise their material; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 218,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Use Cases",
      lede: "How a film production can bring camera footage, sound, stills and paperwork from every department into one library, and give each department organised access to the part it needs.",
      visual: { diagram: "media-library", focus: "video" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 218 }, { kind: "pdf", page: 176 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Production media from every department, in one place",
      body: [
        "Film production teams can use GetSibu to centralise their production media and keep organised access to large video libraries, so material from every department sits in one environment rather than on drives that travel between them.",
        "A film is made by departments that generate very different material. Camera and sound produce the bulk of the data; the art department gathers references and set photographs; the production office handles schedules, scripts and contracts; the stills photographer builds a record for publicity. Each department tends to keep its own storage, and the cutting room ends up chasing all of them for files.",
        [
          "Centralising that material only helps if it stays well ordered. ",
          { text: "Centralised media storage", page: 150 },
          " brings content from several sources together while keeping organisational structure and access controls, ",
          { text: "department access", page: 176 },
          " limits each group to the libraries relevant to its work, and the ",
          { text: "asset infrastructure", page: 302 },
          " is designed to support large collections while maintaining search and preview performance.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Every department’s media together", "Structure that follows the production", "Access arranged by department", "Heavy footage viewed as previews", "Scripts and paperwork searchable"],
      },
      highlight: {
        heading: "In practice",
        body: "An editor who needs a set photograph of a costume for continuity finds it in the same library as the footage, rather than asking the art department to send it over.",
        tags: ["Editors", "Production office", "Heads of department"],
      },
      glance: {
        heading: "Film production in brief",
        facts: [
          { label: "Team", value: "Film production teams" },
          { label: "Typical material", value: "Camera footage, sound, stills, scripts and schedules" },
          { label: "Builds on", value: "Centralised Media Storage", page: 150 },
          { label: "Supports", value: "Large Library Performance", page: 309 },
        ],
        actions: [{ kind: "route", path: "/use-cases", label: "More in Use Cases" }]
      },
      sources: [{ kind: "pdf", page: 218 }, { kind: "pdf", page: 150 }, { kind: "pdf", page: 176 }, { kind: "pdf", page: 302 }, { kind: "pdf", page: 26 }, { kind: "pdf", page: 309 }, EXPLAINS],
    },
    {
      kind: "workflow",
      id: "stages",
      eyebrow: "By stage",
      heading: "How media builds up across a film’s production",
      stages: [
        { label: "Development and prep", body: "Scripts, location photographs and reference material arrive first. Documents can be indexed by their extracted text, so a draft script can be found by a line of dialogue as well as by its name.", page: 27 },
        { label: "Principal photography", body: "The shoot produces the heaviest material. Resumable uploads help stop a large transfer from starting over when a location connection drops.", page: 137 },
        { label: "Dailies", body: "Heads of department check each day’s footage, and edge caching reduces the distance between viewers and frequently accessed content when they watch from different places.", page: 305 },
        { label: "Editorial", body: "The edit draws on footage, sound and stills together. Camera metadata, file paths and creators carried in with the files can become part of each asset record.", page: 22 },
        { label: "Post and delivery", body: "Cuts move through review and approval, and each cut keeps its version history, so the route to the finished film stays on record.", page: 97 },
        { label: "Wrap", body: "Once the film is delivered, archiving retains production material without it interfering with discovery on the next project.", page: 108 },
      ],
      sources: [{ kind: "pdf", page: 27 }, { kind: "pdf", page: 15 }, { kind: "pdf", page: 137 }, { kind: "pdf", page: 305 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 97 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 108 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "capabilities",
      eyebrow: "What the production uses",
      heading: "What a film production uses in GetSibu",
      items: [
        {
          heading: "Folder mapping",
          body: "Drive structures from prep can be mirrored or remapped on import, so the production’s folder logic survives the move into the library.",
          icon: "folder",
          points: ["Keep the existing layout", "Or redesign it on the way in"],
          page: 133,
        },
        {
          heading: "Permission hierarchies",
          body: "Broad organisational roles combine with detailed folder-level controls, so heads of department reach their area without holding access to everything.",
          icon: "layers",
          points: ["Roles for the whole production", "Folder detail for each department"],
          page: 178,
        },
        {
          heading: "Watch folders",
          body: "Watch folders can be scanned continuously, so newly added footage can enter the workflow automatically rather than through a manual upload.",
          icon: "refresh",
          points: ["New material picked up as it lands", "Less copying by hand"],
          page: 128,
        },
        {
          heading: "High-volume ingestion",
          body: "Ingestion workflows designed around high-volume environments suit a shoot that produces large amounts of video and imagery every day.",
          icon: "upload",
          points: ["Designed for heavy intake", "Video and stills alike"],
          page: 139,
        },
        {
          heading: "Searchable stills",
          body: "Set and publicity photographs become searchable through metadata, tags, visual characteristics and extracted information.",
          icon: "camera",
          points: ["Continuity references found quickly", "Publicity stills beside the footage"],
          page: 26,
        },
        {
          heading: "Folder access analytics",
          body: "Folder access maps help show which areas of the library receive attention and how folders are accessed across teams.",
          icon: "chart",
          points: ["How folders are used across teams", "Areas receiving little attention"],
          page: 198,
        },
      ],
      sources: [{ kind: "pdf", page: 133 }, { kind: "pdf", page: 178 }, { kind: "pdf", page: 128 }, { kind: "pdf", page: 139 }, { kind: "pdf", page: 26 }, { kind: "pdf", page: 129 }, { kind: "pdf", page: 198 }, { kind: "pdf", page: 173 }],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A location shoot feeding a cutting room in another city",
      team: "A film production",
      situation: "A feature film is shooting on location while its editor works from the production base in another city. Heads of department want to see the footage, and the production office needs its paperwork in order.",
      steps: [
        {
          heading: "Footage leaves the location",
          body: ["The data team sends the day’s material through ", { text: "upload workflows that report progress", page: 136 }, ", so it knows how much is still on its way."],
        },
        {
          heading: "Heads of department watch the footage",
          body: ["The director of photography and the producer check the day’s work through ", { text: "streaming previews", page: 147 }, " from wherever they are that evening."],
        },
        {
          heading: "The editor gathers takes",
          body: "In the cutting room, the editor narrows the new footage by date and resolution to separate camera originals from lighter working files.",
        },
        {
          heading: "A scanned release is found",
          body: ["The production office locates a scanned location release by searching for the property’s name, which ", { text: "OCR", page: 38 }, " has made searchable inside the file."],
        },
        {
          heading: "A question reaches the right person",
          body: ["The editor ", { text: "mentions the script supervisor", page: 86 }, " on a clip that seems to break continuity, and the discussion stays on that clip."],
        },
      ],
      outcome: "The production works from one library in two places at once, with footage, paperwork and the questions about both kept together instead of copied between locations.",
      link: { page: 150, label: "Centralised Media Storage" },
      sources: [{ kind: "pdf", page: 136 }, { kind: "pdf", page: 147 }, { kind: "pdf", page: 19 }, { kind: "pdf", page: 38 }, { kind: "pdf", page: 15 }, { kind: "pdf", page: 86 }, { kind: "pdf", page: 62 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "accordion",
      id: "decisions",
      eyebrow: "Considerations",
      heading: "What to decide before the first day of shooting",
      items: [
        {
          heading: "How the structure mirrors the production",
          summary: "Departments, shooting days and units each suggest a different structure.",
          icon: "folder",
          body: [
            "Some productions organise material by shooting day, others by department or by unit. Changing structure halfway through a shoot is disruptive, so it pays to choose before material starts arriving.",
            [{ text: "Hierarchical tags", page: 8 }, " can carry the classifications a folder tree cannot, such as a character or location that appears across many shooting days."],
          ],
        },
        {
          heading: "Who may see unreleased footage",
          summary: "Footage from a film in production is commercially sensitive.",
          icon: "lock",
          body: [
            "Crew members and contractors need their part of the work, not the whole film. The wider footage circulates, the greater the chance of material escaping before release.",
            [{ text: "Folder-level permissions", page: 152 }, " allow access to be controlled more precisely than organisation-wide access, and ", { text: "access history", page: 171 }, " provides information about important user interactions with the library."],
          ],
        },
        {
          heading: "Originals, working files or both",
          summary: "Heavy camera originals and lighter working files serve different people.",
          icon: "layers",
          body: [
            "Editors often cut with lighter working files and return to camera originals at the end, while producers only ever need something they can watch. Deciding which files enter the shared library, and how they are labelled, avoids confusion over which is which.",
            [{ text: "Storage by category", page: 192 }, " shows how space divides between video, images, documents and audio, which helps when judging how many originals the library should hold."],
          ],
        },
        {
          heading: "Crews that change between phases",
          summary: "Access that made sense during the shoot may not be needed in post.",
          icon: "users",
          body: [
            "A film’s crew changes with each phase, and contractors who needed footage during principal photography may have finished long before the edit does.",
            [{ text: "Permission auditing", page: 170 }, " means changes to permissions can be recorded in the audit history, creating accountability around access management as the crew changes."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 8 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 171 }, { kind: "pdf", page: 192 }, { kind: "pdf", page: 170 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about GetSibu for film production",
      items: [
        {
          question: "Can a film production bring in footage it has already shot elsewhere?",
          answer: ["Yes. ", { text: "Bulk asset import", page: 130 }, " moves existing collections in without uploading each file by hand, and ", { text: "metadata preservation", page: 132 }, " keeps details such as creators, file paths and custom keywords during the move."],
        },
        {
          question: "Can scripts and production documents be searched in a film production library?",
          answer: ["Yes. ", { text: "AI document discovery", page: 53 }, " combines OCR and metadata, so production documents can be located by the information inside them rather than by their filenames."],
        },
        {
          question: "How does GetSibu handle a film production’s growing footage library?",
          answer: ["The architecture is built with large collections in mind: ", { text: "large library performance", page: 309 }, " draws on chunked I/O, edge caching and indexing, and ", { text: "scalable asset storage", page: 308 }, " supports large amounts of content and storage growth."],
        },
        {
          question: "Can heads of department on a film production see only their own material?",
          answer: ["Access can be arranged that way. ", { text: "New folders stay private", page: 154 }, " until access is explicitly granted, so a department’s area is not open to everyone else by default."],
        },
      ],
      sources: [{ kind: "pdf", page: 130 }, { kind: "pdf", page: 132 }, { kind: "pdf", page: 53 }, { kind: "pdf", page: 309 }, { kind: "pdf", page: 308 }, { kind: "pdf", page: 176 }, { kind: "pdf", page: 154 }],
    },
    {
      kind: "related",
      id: "related",
      heading: "More for productions with large video libraries",
      variant: "compact",
      pages: [150, 176, 178, 147, 211, 217],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page, and the closest production use cases." }],
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
