/**
 * 61 · Creative Team Collaboration — /features/creative-team-collaboration
 *
 * Angle (clusters: comments-feedback, team-collaboration): collaboration inside the asset library instead of in
 * separate tools — what moves into the library, what that changes, and what to settle when a team makes the move.
 * Asset Comments (62) owns the single comment, Threaded Comments (63) threads, Team Feedback (73) the scattering
 * problem, Creative Team Workspace (90) the workspace itself, and 81–84 collaboration by team.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how creative teams collaborate on files; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 61,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Collaboration",
      lede: "Why GetSibu puts discussion inside the asset library, what that changes compared with talking about files in separate tools, and which collaboration features the library brings together.",
      visual: { diagram: "timeline-review", focus: "comments" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 61 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Conversations that happen where the files are",
      body: [
        "GetSibu builds its collaboration features directly into the asset library, so a team can discuss a file without taking the conversation to a disconnected tool. The place where work is stored, found and reviewed is also the place where people talk about it.",
        "Collaboration on creative work has several distinct parts: giving feedback, asking a specialist a question, settling a disagreement, recording a decision and finding the work again later. When the files live in one place and each of those parts happens somewhere else, every exchange starts by establishing which asset it is about. Gathering the parts where the assets are makes the asset itself the shared point of reference.",
        [
          "Inside the library, that collaboration takes a few concrete forms. People leave ",
          { text: "comments directly on assets", page: 62 },
          ", reply in threads that stay with a single issue, and bring in colleagues through ",
          { text: "mentions", page: 66 },
          ". Once the discussion reaches a conclusion, an ",
          { text: "approval workflow", page: 67 },
          " lets the team mark the asset as approved.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Discussion inside the asset library", "Fewer disconnected tools", "Feedback on the work itself", "Threads, mentions and approvals together", "Permissions still decide access"],
      },
      highlight: {
        heading: "In practice",
        body: "A question about a draft poster is asked on the poster. Whoever opens that asset next can read the question and its replies, and see where the poster stands in review.",
        tags: ["Designers", "Producers", "Brand managers"],
      },
      glance: {
        heading: "Where collaboration fits",
        facts: [
          { label: "Area", value: "Collaboration" },
          { label: "Happens in", value: "The asset library" },
          { label: "Starts with", value: "Asset Comments", page: 62 },
          { label: "Shared space", value: "Creative Team Workspace", page: 90 },
        ],
        actions: [{ kind: "route", path: "/features/collaboration", label: "More in Collaboration" }]
      },
      sources: [{ kind: "pdf", page: 61 }, { kind: "pdf", page: 1 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 66 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 76 }, { kind: "pdf", page: 90 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "separate-or-inside",
      eyebrow: "The difference",
      heading: "Talking about files elsewhere, or inside the library",
      columns: ["Separate tools", "Inside the GetSibu library"],
      emphasis: 1,
      rows: [
        ["Where feedback lives", "Inboxes, chat channels and trackers", "On the asset under discussion"],
        ["Which file is meant", "Inferred from attachments and filenames", "Clear, because the comment is on the file"],
        ["Notes about video", "Rough descriptions of a moment", "Comments at points on the timeline"],
        ["Bringing someone in", "Forwarding messages and copies", "Mentions with folder-aware autocomplete"],
        ["Recording the outcome", "A reply that says “looks good”", "An approval process with status history"],
        ["Finding it again", "Searching several tools separately", "Comments included in library search"],
      ],
      sources: [{ kind: "pdf", page: 61 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 73 }, { kind: "pdf", page: 64 }, { kind: "pdf", page: 66 }, { kind: "pdf", page: 68 }, { kind: "pdf", page: 11 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "features",
      eyebrow: "What it includes",
      heading: "Collaboration features gathered in one library",
      items: [
        {
          heading: "Comments on assets",
          body: "Feedback is written on the asset itself, so the note and the work it describes stay together.",
          icon: "message",
          points: ["Attached to the creative work", "Part of what library search covers"],
          page: 62,
        },
        {
          heading: "Threads by issue",
          body: "Replies collect under the issue they belong to instead of joining one long stream of unrelated notes.",
          icon: "thread",
          points: ["One conversation per concern", "Unrelated points stay apart"],
          page: 63,
        },
        {
          heading: "Comments on video timelines",
          body: "On a video, a comment can be pinned to a specific point on the timeline, giving the note an exact place.",
          icon: "video",
          points: ["A precise location for each note", "The basis for frame-accurate review"],
          page: 64,
        },
        {
          heading: "Mentions",
          body: "Teammates can be mentioned inside an asset discussion, and folder-aware autocomplete helps keep mentions to people with appropriate visibility.",
          icon: "mention",
          points: ["Draws in the colleague who should answer", "Takes folder visibility into account"],
        },
        {
          heading: "Approvals",
          body: "Teams can request review, make the requested changes and mark an asset as approved when it is ready.",
          icon: "approval",
          points: ["The decision sits with the discussion", "Status history on each asset"],
        },
        {
          heading: "Shared views",
          body: "A recurring collection of assets can be saved as a view and shared through a URL rather than sent around as copies.",
          icon: "collection",
          points: ["No duplicate files to keep in step", "Everyone opens the same set"],
          page: 79,
        },
        {
          heading: "Discussion history",
          body: "The history of an asset’s discussion shows how its feedback evolved over time.",
          icon: "history",
          points: ["Context for earlier decisions", "Useful when work is picked up again"],
          page: 75,
        },
      ],
      sources: [{ kind: "pdf", page: 62 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 64 }, { kind: "pdf", page: 65 }, { kind: "pdf", page: 66 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 68 }, { kind: "pdf", page: 78 }, { kind: "pdf", page: 79 }, { kind: "pdf", page: 75 }],
    },
    {
      kind: "accordion",
      id: "moving-in",
      eyebrow: "Considerations",
      heading: "What to settle when discussion moves into the library",
      items: [
        {
          heading: "Use the parts that suit the work",
          summary: "Not every team needs every collaboration feature from the first day.",
          icon: "compass",
          body: [
            ["A video team will lean on ", { text: "comments at points on the timeline", page: 64 }, "; a brand team on approvals before material is used; a large review group on threads that keep issues apart and mentions that bring in the right specialist. Starting with the parts that match how the team already works makes the change easier to adopt, and ", { text: "contextual comments and approvals", page: 358 }, " reduce the need to pass asset-specific feedback between disconnected tools."],
          ],
        },
        {
          heading: "Plan who can see what first",
          summary: "Collaborating in the library does not mean opening the library to everyone.",
          icon: "lock",
          body: [
            ["GetSibu ", { text: "combines collaboration with permissions", page: 180 }, ", so people can work together without the organisation giving up control over sensitive assets."],
            "Settling which areas each group can reach before a wider circle of colleagues joins a review avoids awkward corrections later.",
          ],
        },
        {
          heading: "Treat agreement and approval as different things",
          summary: "A supportive reply in a discussion is not the same as an approved asset.",
          icon: "approval",
          body: [
            ["A comment saying “fine by me” is easy to overlook or misread weeks later. Marking the asset as approved turns that agreement into something the rest of the team can rely on, and ", { text: "review status", page: 76 }, " shows whether an asset still needs attention."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 64 }, { kind: "pdf", page: 358 }, { kind: "pdf", page: 180 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 76 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about creative team collaboration",
      items: [
        {
          question: "Is creative team collaboration the same as the creative team workspace?",
          answer: ["They overlap. The ", { text: "creative team workspace", page: 90 }, " is the shared place where teams search, review, organise and collaborate around digital assets; collaboration is the part of it concerned with discussing and deciding on the work together."],
        },
        {
          question: "Can several departments collaborate in one library without seeing each other’s folders?",
          answer: ["Yes. ", { text: "Department access", page: 176 }, " lets each department reach only the creative libraries relevant to its work, and collaboration in GetSibu is combined with those permissions."],
        },
        {
          question: "Can collaboration activity in GetSibu start work in other systems?",
          answer: ["Developers can use ", { text: "webhook automation", page: 257 }, " to trigger downstream workflows when supported events, such as comments or approvals, occur."],
        },
      ],
      sources: [{ kind: "pdf", page: 61 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 64 }, { kind: "pdf", page: 66 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 90 }, { kind: "pdf", page: 176 }, { kind: "pdf", page: 180 }, { kind: "pdf", page: 257 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on collaborating in the library",
      variant: "compact",
      pages: [62, 63, 73, 67, 90, 379],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the closest collaboration topics." }],
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
