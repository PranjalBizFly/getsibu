/**
 * 385 · Does GetSibu Support Video Comments? — /faq/does-getsibu-support-video-comments
 *
 * Angle (cluster: video-review): the direct yes, what surrounds a comment on the timeline, and the kinds of
 * video work where it helps most. Video Timeline Comments (64) owns the feature, Frame-Accurate Review (65)
 * the practice, Creative Review (69) the review location, Production Collaboration (81) the production view.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how video work is typically reviewed; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 385,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "centered",
      eyebrow: "FAQ",
      lede: "The short answer on commenting on video in GetSibu, what comes with a comment placed on the timeline, and the kinds of video work where precise feedback helps most.",
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 385 }],
    },
    {
      kind: "definition",
      id: "short-answer",
      eyebrow: "Short answer",
      term: "Does GetSibu Support Video Comments?",
      answer: "Yes. GetSibu supports comments attached to specific points in a video’s timeline.",
      detail: "A reviewer can place a note at the moment it concerns, giving editors and reviewers a precise location instead of an approximate description passed along in a message. Because the note is left on the asset itself, the feedback stays attached to the video being discussed.",
      sources: [{ kind: "pdf", page: 385 }, { kind: "pdf", page: 64 }, { kind: "pdf", page: 65 }, { kind: "pdf", page: 62 }],
    },
    {
      kind: "overview",
      id: "longer-answer",
      heading: "Video comments as part of review inside the library",
      body: [
        "Timeline comments are the video form of a broader capability. GetSibu puts collaboration inside the asset library, so discussion about a file does not have to move into disconnected tools, and on video that discussion can be tied to a point in time.",
        "The difference between a comment on a video and a comment at a moment is larger than it looks. A general note such as “the middle drags” opens a conversation about where the middle is. A note placed at the point in question opens a conversation about what to change.",
        [
          { text: "Video Timeline Comments", page: 64 },
          " covers how feedback attaches to the timeline, and ",
          { text: "Frame-Accurate Review", page: 65 },
          " the review practice it supports. ",
          { text: "Production Collaboration", page: 81 },
          " shows how production teams use asset comments, versioning and timeline review together to coordinate creative work.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Comments at points on the timeline", "A precise location for each note", "Feedback left on the video asset", "Review without leaving the library", "Replies, mentions and approval nearby"],
      },
      highlight: {
        heading: "In practice",
        body: "A brand manager watching a draft advert leaves one note where the logo appears too late and another where the voice-over and the text in the frame disagree. The editor opens the video and finds each note at its moment.",
        tags: ["Brand", "Editors", "Advertising"],
      },
      glance: {
        heading: "Video comments in brief",
        facts: [
          { label: "Area", value: "Collaboration" },
          { label: "Attached to", value: "Points on a video timeline" },
          { label: "General case", value: "Asset Comments", page: 62 },
          { label: "Used by", value: "Editors, reviewers and producers" },
        ],
        actions: [{ kind: "route", path: "/faq", label: "More in FAQs" }]
      },
      sources: [{ kind: "pdf", page: 385 }, { kind: "pdf", page: 61 }, { kind: "pdf", page: 64 }, { kind: "pdf", page: 65 }, { kind: "pdf", page: 81 }, { kind: "pdf", page: 62 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "around-the-comment",
      eyebrow: "What comes with it",
      heading: "What surrounds a comment on the timeline",
      items: [
        {
          heading: "Replies in a thread",
          body: "When a note needs discussion, threaded replies keep the conversation organised around that one issue instead of one long stream of unrelated feedback.",
          icon: "thread",
          page: 63,
        },
        {
          heading: "Mentions for the right person",
          body: "Teammates can be mentioned in the discussion, and folder-aware autocomplete helps ensure the people mentioned have appropriate visibility of the video.",
          icon: "mention",
          page: 66,
        },
        {
          heading: "Previews that stream",
          body: "Streaming previews let reviewers inspect large media files quickly, without waiting for a complete download before they can start watching.",
          icon: "video",
          page: 147,
        },
        {
          heading: "A central place to confirm the final",
          body: "Creative review gives a team one central location to inspect the work, discuss the changes it needs and confirm which assets are final.",
          icon: "check",
          page: 69,
        },
        {
          heading: "Approval with a status history",
          body: "The video can move through an approval process whose status history records whether it is awaiting review, approved or requires changes.",
          icon: "approval",
          page: 68,
        },
        {
          heading: "A record of the discussion",
          body: "Asset discussion history lets a team understand how the feedback on a video evolved over time, which helps when a decision is questioned later.",
          icon: "message",
          page: 75,
        },
      ],
      sources: [{ kind: "pdf", page: 63 }, { kind: "pdf", page: 66 }, { kind: "pdf", page: 147 }, { kind: "pdf", page: 69 }, { kind: "pdf", page: 68 }, { kind: "pdf", page: 75 }],
    },
    {
      kind: "tabs",
      id: "kinds-of-video-work",
      eyebrow: "Where it helps",
      heading: "Video work where a note at the moment saves the most time",
      tabs: [
        {
          label: "Campaign films",
          heading: "Many reviewers, one short film",
          icon: "megaphone",
          body: [
            "Short campaign films often collect opinions from marketing, brand, legal and leadership within a few days. Notes placed on the timeline let each reviewer raise a concern without first explaining where in the film it sits.",
            "Marketing teams can use asset-level discussions and approvals to review campaign materials before they are distributed.",
          ],
          points: ["Several reviewers, each note at its moment", "Review before distribution"],
          link: { page: 70, label: "Campaign Review" },
        },
        {
          label: "Long recordings",
          heading: "Finding the moment in a long recording",
          icon: "film",
          body: [
            "Event recordings, interviews and training videos can run long, which makes approximate feedback costly: “somewhere in the second half” can mean a great deal of scrubbing back and forth. A comment at the exact point spares the editor that search.",
          ],
          points: ["Less searching through long footage", "One note for each moment that matters"],
          link: { page: 236, label: "GetSibu for Event Companies" },
        },
        {
          label: "Client cuts",
          heading: "Rounds of changes on work for a client",
          icon: "briefcase",
          body: [
            "Agency and studio video work tends to pass through several rounds, and each round brings a new set of notes. Precise notes make it easier to confirm that every requested change was addressed before the next cut goes out.",
            "Video agencies can manage client footage, versions, reviews and approved deliverables from one platform.",
          ],
          points: ["Each requested change easy to locate", "Deliverables and reviews in one place"],
          link: { page: 229, label: "GetSibu for Video Agencies" },
        },
        {
          label: "Cut-downs",
          heading: "Shorter edits made from one main film",
          icon: "camera",
          body: [
            "A campaign film often spawns shorter and reformatted edits for different channels, and each needs checking in its own right. A note left on the timeline of the particular edit keeps a request about the square version from being applied to the widescreen original.",
          ],
          points: ["Notes kept to the right edit", "Each channel version checked on its own"],
          link: { page: 81, label: "Production Collaboration" },
        },
      ],
      sources: [{ kind: "pdf", page: 70 }, { kind: "pdf", page: 236 }, { kind: "pdf", page: 229 }, { kind: "pdf", page: 64 }, { kind: "pdf", page: 81 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Follow-up questions about video comments",
      items: [
        {
          question: "How does a round of video comments lead to an approved cut?",
          answer: [
            "Through the ",
            { text: "creative approval workflow", page: 67 },
            ": the team requests review, the editor makes the changes the comments ask for, and the video is marked as approved once they are done.",
          ],
        },
        {
          question: "Can the comments on a video help someone find it later?",
          answer: [
            "They can. Comments are among the kinds of information ",
            { text: "creative asset search", page: 11 },
            " draws on, so something a reviewer wrote about a video may help bring that video back in a later search.",
          ],
        },
        {
          question: "Can developers bring video comment activity into their own tools?",
          answer: [
            "Comment-related events can support custom collaboration workflows, and the ",
            { text: "Asset Comments API", page: 266 },
            " describes that route for developers.",
          ],
        },
        {
          question: "Where can colleagues find videos that have finished review?",
          answer: [
            "Teams can create ",
            { text: "approved-only views", page: 103 },
            ", so people looking for finished films reach content that has completed the required review process rather than cuts still collecting comments.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 67 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 266 }, { kind: "pdf", page: 103 }],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on commenting on video",
      variant: "compact",
      pages: [64, 65, 62, 63, 81, 69],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the review location page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Start Your Creative Library",
      conversionPage: 391,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 391 }],
    },
  ],
};

export default page;
