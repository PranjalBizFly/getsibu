/**
 * 239 · GetSibu for Internal Communications — /use-cases/internal-communications
 *
 * Angle (cluster: uc-communications): inward-facing — the assets behind employee communications (leadership messages,
 * town hall recordings, cascade packs, intranet imagery) and approved organisational media used by managers,
 * departments and sites, often sensitive until the moment of release. Corporate Communications (240) addresses the public;
 * In-House Creative Teams (222) own creative self-service; Education Teams (237) own teaching material.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how internal communications teams typically work with employees, managers and leaders; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 239,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Use Cases",
      lede: "How an internal communications team can manage the assets behind employee communications and keep approved organisational media ready for the managers, departments and sites that talk to staff.",
      visual: { diagram: "media-library", focus: "video,image,document" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 239 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Communicating with employees from approved material",
      body: [
        "GetSibu gives internal communications teams a place to manage the assets behind employee communications, together with the organisation’s approved media.",
        "Internal communications draws on many kinds of material: leadership video messages, town hall recordings, intranet imagery, newsletter graphics, posters for offices and sites, and the slides managers use to cascade news to their teams. Much of it is sensitive until the moment it is shared, and much of it is used by people outside the communications team, such as managers and department heads who need the approved version without having to ask for it.",
        [
          "That combination of sensitivity and wide use is what the library has to handle. ",
          { text: "Secure creative collaboration", page: 180 },
          " combines collaboration with permissions, so the team can work on an announcement with leaders and HR without losing control of it, and ",
          { text: "approved-only views", page: 103 },
          " keep the organisation’s logos, templates and photography in the form that has been through review.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Leadership messages and town hall recordings", "Cascade packs for managers", "Approved organisational media on hand", "Sensitive announcements held back", "Access by department and site"],
      },
      highlight: {
        heading: "In practice",
        body: "A site manager preparing a team briefing opens the approved slide template and current office photography, instead of recycling a presentation from several years ago.",
        tags: ["Internal communications", "People managers", "HR partners"],
      },
      glance: {
        heading: "Internal communications in brief",
        facts: [
          { label: "Team", value: "Internal and employee communications teams" },
          { label: "Typical material", value: "Leadership videos, town hall recordings, intranet imagery and templates" },
          { label: "Builds on", value: "Department Access", page: 176 },
          { label: "Supports", value: "Manager Permissions", page: 155 },
        ],
        actions: [{ kind: "route", path: "/use-cases", label: "More in Use Cases" }]
      },
      sources: [{ kind: "pdf", page: 239 }, { kind: "pdf", page: 180 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 176 }, { kind: "pdf", page: 155 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "audiences",
      eyebrow: "By audience",
      heading: "What each internal audience needs from the library",
      tabs: [
        {
          label: "All employees",
          heading: "Material for company-wide messages",
          icon: "users",
          body: [
            "Company-wide messages appear on the intranet, in email and on screens in offices and sites. The assets behind them should be consistent wherever staff meet them, and refreshed before they go stale.",
            [{ text: "Asset usage tracking", page: 106 }, " helps show which assets are being used and which remain inactive, a practical prompt for refreshing imagery employees have seen too often."],
          ],
          points: ["Consistent assets across channels", "Inactive imagery identified"],
        },
        {
          label: "Managers",
          heading: "Packs for cascading news",
          icon: "user",
          body: [
            "When news cascades through managers, each one needs the same slides, talking points and video at the same moment, and nothing that is still in draft.",
            [{ text: "Team access management", page: 175 }, " establishes consistent permissions across a group of users, so every manager in a cascade can reach the same pack."],
          ],
          points: ["The same pack for every manager", "Drafts kept out of the cascade"],
        },
        {
          label: "Leadership",
          heading: "Messages reviewed before release",
          icon: "video",
          body: [
            "Leadership videos and town hall recordings are checked carefully before release, often by several people in different offices who each care about different parts of the message.",
            [{ text: "Collaborative asset review", page: 87 }, " helps distributed teams review creative material without needing everyone in the same physical location."],
          ],
          points: ["Review across offices", "Messages checked before staff see them"],
        },
        {
          label: "Departments",
          heading: "Local communications from central material",
          icon: "building",
          body: [
            "HR, IT and individual sites run their own communications, but they draw on the organisation’s templates, logos and photography. Giving them the central material directly avoids home-made versions.",
            [{ text: "Department access", page: 176 }, " lets departments receive access to only the creative libraries relevant to their work."],
          ],
          points: ["Central templates for local use", "Each department sees its own area"],
        },
      ],
      sources: [{ kind: "pdf", page: 106 }, { kind: "pdf", page: 175 }, { kind: "pdf", page: 87 }, { kind: "pdf", page: 176 }, EXPLAINS],
    },
    {
      kind: "before-after",
      id: "before-after",
      heading: "Employee communications before and after a shared library",
      beforeLabel: "Scattered across inboxes",
      afterLabel: "Managed in one library",
      before: ["Leadership videos sent as heavy attachments", "Old intranet photography reused for years", "Cascade slides forwarded from manager to manager", "Drafts and final messages in one shared folder", "Unclear which version was signed off"],
      after: ["Recordings checked through streaming previews", "Current photography taken from approved views", "Cascade packs reached through team access", "Drafts distinguished from approved messages", "Approval history kept for each message"],
      sources: [{ kind: "pdf", page: 147 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 175 }, { kind: "pdf", page: 102 }, { kind: "pdf", page: 77 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "An organisational change announced in stages",
      team: "An internal communications team",
      situation: "An organisation is restructuring two departments. The internal communications team must brief senior leaders first, then people managers, then all employees, and no material can reach a group before its turn.",
      steps: [
        {
          heading: "The pack starts in a closed folder",
          body: ["The announcement pack is prepared in a new folder that ", { text: "stays private until access is explicitly granted", page: 337 }, ", so nobody outside the core team sees it by default."],
        },
        {
          heading: "The leadership video is marked up",
          body: ["The chief executive’s recorded message is reviewed with ", { text: "comments at points on the timeline", page: 64 }, ", where the HR director flags a sentence to record again."],
        },
        {
          heading: "The staff FAQ keeps changing",
          body: ["The staff questions document is revised as new questions arrive, and ", { text: "revision tracking", page: 100 }, " helps show which version is currently active."],
        },
        {
          heading: "Managers are brought in",
          body: ["The day before the announcement, people managers receive ", { text: "access to the pack’s folder", page: 155 }, " while every other area of the change programme stays restricted."],
        },
        {
          heading: "Every access change is on record",
          body: ["As access widens to department communications leads on the day, ", { text: "permission auditing", page: 170 }, " means each change can be recorded in the audit history."],
        },
        {
          heading: "Attention is checked afterwards",
          body: ["A week later, ", { text: "folder access maps", page: 173 }, " show how the pack’s folders were accessed across teams, which suggests where a follow-up is needed."],
        },
      ],
      outcome: "Each group received the material at its stage, and the team has a record of how access to the announcement was widened, step by step.",
      link: { page: 155, label: "Manager Permissions" },
      sources: [{ kind: "pdf", page: 337 }, { kind: "pdf", page: 154 }, { kind: "pdf", page: 64 }, { kind: "pdf", page: 100 }, { kind: "pdf", page: 155 }, { kind: "pdf", page: 170 }, { kind: "pdf", page: 173 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "capabilities",
      id: "capabilities",
      eyebrow: "What internal comms uses",
      heading: "What an internal communications team relies on",
      items: [
        {
          heading: "Conversation beside the asset",
          body: "Discussion stays close to the asset, so whoever reads a comment on a draft poster or script knows exactly what it relates to.",
          icon: "message",
          points: ["No guessing which draft is meant", "Feedback where the work is"],
          page: 85,
        },
        {
          heading: "Asset activity dashboard",
          body: "A visual overview of important library interactions gives the team a quick sense of what is happening around its material.",
          icon: "gauge",
          points: ["Library interactions at a glance", "A starting point for questions"],
          page: 191,
        },
        {
          heading: "Organisation admin controls",
          body: "Administrators can manage access policies, users, folders and organisational settings, which matters when the audience changes with every reorganisation.",
          icon: "key",
          points: ["Policies and users in one place", "Folders kept in step with the organisation"],
          page: 158,
        },
        {
          heading: "A discovery workflow for occasional users",
          body: "Finding an asset runs from a search through filtering and previewing to the right file, which suits managers who only visit the library now and then.",
          icon: "search",
          points: ["Search, filter, preview", "No need to know the folder structure"],
          page: 30,
        },
        {
          heading: "An asset lifecycle",
          body: "An asset’s life can take in ingestion, metadata processing, AI tagging, review, approval, distribution and archival, which is a useful frame for campaigns that are meant to end.",
          icon: "workflow",
          points: ["Review and approval built into the path", "Archival as a normal stage"],
          page: 107,
        },
      ],
      sources: [{ kind: "pdf", page: 85 }, { kind: "pdf", page: 191 }, { kind: "pdf", page: 158 }, { kind: "pdf", page: 30 }, { kind: "pdf", page: 107 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about GetSibu for internal communications",
      items: [
        {
          question: "Can managers open an internal communications pack without searching for each file?",
          answer: ["Yes. The search that gathers a pack can be ", { text: "saved and shared through a URL", page: 17 }, ", giving managers a reusable view instead of a list of files to track down."],
        },
        {
          question: "Can internal communications see how different groups use the library?",
          answer: [{ text: "Creative team analytics", page: 199 }, " provide visibility into how different groups interact with the library, which can show whether groups beyond the communications team are drawing on the library."],
        },
        {
          question: "Can an internal communications team keep audio messages and podcasts for employees?",
          answer: ["Yes. ", { text: "Audio assets can be managed", page: 28 }, " alongside video, images and documents, so an internal podcast episode sits with the slides and imagery from the same campaign."],
        },
        {
          question: "How does an internal communications team stop outdated organisational photography piling up?",
          answer: [{ text: "Creative library maintenance", page: 111 }, " is the ongoing work that keeps a library clear of duplicate, obsolete or poorly classified content, and it is easier as a regular habit than as an occasional purge."],
        },
      ],
      sources: [{ kind: "pdf", page: 17 }, { kind: "pdf", page: 199 }, { kind: "pdf", page: 28 }, { kind: "pdf", page: 111 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More for communicating with employees",
      variant: "compact",
      pages: [155, 103, 176, 87, 222, 240],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
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
