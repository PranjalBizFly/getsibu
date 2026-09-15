/**
 * 379 · Future of Creative Collaboration — /resources/future-of-creative-collaboration
 *
 * Angle (clusters: future-of-dam; team-collaboration): essay arguing that creative collaboration is moving onto the
 * asset — feedback, approvals, versions and assets together — because the costly failures of collaboration are
 * failures of context. Future of DAM (378) owns the category's direction, How AI Changes DAM (377) AI, Future of
 * AI-Powered Creative Libraries (380) knowledge environments; the collaboration feature pages (61–90) own GetSibu's
 * capabilities. Direction only: no dates, adoption rates, market figures or analysts.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Essay: vendor-neutral argument about the direction of creative collaboration; states no GetSibu capability beyond the cited pages and makes no predictions." } as const;

const page: PageContent = {
  page: 379,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "centered",
      eyebrow: "Resources",
      lede: "An essay on why creative collaboration is moving onto the asset itself, with feedback, approvals and versions kept together, the pressures behind that shift, and what changes for teams when the work and the conversation share one place.",
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 379 }, { kind: "pdf", page: 61 }],
    },
    {
      kind: "definition",
      id: "definition",
      eyebrow: "In short",
      term: "The future of creative collaboration",
      answer: "Creative collaboration is increasingly moving into platforms where feedback, approvals, versions and assets exist together. The work and the conversation about it are converging in one place.",
      detail: "Creative teams have long collaborated around files rather than on them: the file in one place, the feedback in email, the approval in a chat message and the latest version on somebody’s drive. Each tool did its own job well, and the price was context. The direction now is to keep those pieces attached to the asset they concern, so anyone who opens it can see what was asked, what changed and what was agreed.",
      sources: [{ kind: "pdf", page: 379 }, EXPLAINS],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Collaboration is following the asset",
      body: [
        "The argument is straightforward: many costly mistakes in creative collaboration are failures of context, not of effort. A reviewer comments on an old version. An editor misreads which moment a note refers to. A draft is published because approval was given on a different file. Each happens because the conversation and the work lived in different places.",
        "Joining those places up changes collaboration more than any single feature. When a comment belongs to the asset, it is far harder for it to drift away. When approval is recorded against a version, nobody has to reconstruct which file was signed off. When the newest version replaces the old one in place, people have less reason to circulate copies. The asset becomes the meeting point, and the history of the work gathers on it.",
        [
          "The direction rests on foundations explained elsewhere: ",
          { text: "asset versioning", page: 369 },
          " to keep states in order, ",
          { text: "creative approval", page: 370 },
          " to make decisions explicit and ",
          { text: "creative governance", page: 371 },
          " to decide who may take part.",
        ],
      ],
      keyPoints: {
        heading: "The argument",
        items: ["Failures of context, not effort", "Feedback attached to the asset", "Approval recorded against a version", "Versions instead of copies", "Work and discussion in one place"],
      },
      highlight: {
        heading: "In practice",
        body: "A brand manager, a designer and a copywriter in another city review the same banner. Their comments sit on the banner, the designer replaces it in place after the changes, and the approval names the version that went live.",
        tags: ["Brand", "Design", "Remote teams"],
      },
      glance: {
        heading: "The direction in brief",
        facts: [
          { label: "Moving from", value: "Feedback, files and approvals in separate tools" },
          { label: "Moving toward", value: "Feedback, approvals, versions and assets together" },
          { label: "Driven by", value: "Distributed teams and more reviewers" },
          { label: "In GetSibu", value: "Creative Team Workspace", page: 90 },
        ],
        actions: [{ kind: "route", path: "/resources", label: "More in Resources" }]
      },
      sources: [{ kind: "pdf", page: 379 }, { kind: "pdf", page: 369 }, { kind: "pdf", page: 370 }, { kind: "pdf", page: 371 }, { kind: "pdf", page: 90 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "forces",
      eyebrow: "Forces",
      heading: "Why collaboration is moving onto the asset",
      items: [
        {
          heading: "Teams rarely in one room",
          summary: "Creative work increasingly involves people in different places and time zones.",
          icon: "globe",
          body: [
            ["When reviewers cannot lean over a colleague’s desk and point, feedback has to be precise and self-explanatory. ", { text: "Collaborative asset review", page: 87 }, " helps distributed teams review creative material without everyone being in the same physical location."],
          ],
        },
        {
          heading: "More reviewers for each asset",
          summary: "Brand, legal, regional, client and channel stakeholders all want a say.",
          icon: "users",
          body: [
            "Every additional reviewer multiplies the messages around a piece of work. Scattered across inboxes, those messages contradict one another; gathered on the asset, they can be read together and reconciled.",
          ],
        },
        {
          heading: "Video as everyday material",
          summary: "Feedback on moving images needs a precise place in time.",
          icon: "video",
          body: [
            "A note such as “just after the logo appears” leaves room for doubt. Video pushes collaboration toward comments anchored to moments, which only works when the feedback lives with the file.",
          ],
        },
        {
          heading: "Versions that multiply",
          summary: "Fast iteration produces many near-identical files.",
          icon: "history",
          body: [
            "More channels and quicker turnarounds mean more rounds of change. Without versions held in one record, the question of which file is current eats into every review.",
          ],
        },
        {
          heading: "Handovers between people",
          summary: "A piece of work passes through several hands before it is finished.",
          icon: "workflow",
          body: [
            "Work moves between creators, editors, account teams and reviewers, sometimes several times in a day. Each handover loses something when the notes travel separately from the file; when they stay on the asset, the next person can pick up where the last one stopped.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 87 }, EXPLAINS],
    },
    {
      kind: "before-after",
      id: "shift",
      eyebrow: "The shift",
      heading: "Collaborating around copies versus on the asset",
      beforeLabel: "Around copies",
      afterLabel: "On the asset",
      before: ["Feedback in email threads and chat", "Files exported and attached to messages", "Approval given in a reply", "Several copies called “final”", "History rebuilt from memory"],
      after: ["Comments attached to the work itself", "One asset shared through the library", "Approval recorded with its version", "Earlier versions kept behind the current one", "Discussion and decisions kept with the asset"],
      sources: [{ kind: "pdf", page: 379 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "four-elements",
      eyebrow: "Four elements",
      heading: "What changes when the four elements live together",
      tabs: [
        {
          label: "Feedback",
          heading: "From messages about the work to notes on it",
          icon: "message",
          body: [
            "Feedback attached to an asset carries its own context: which file and, for video, which moment. Threads keep separate issues apart, and mentions bring in the person who needs to answer.",
            "The practical effect is fewer clarifying questions and less time spent matching comments to files.",
          ],
          points: ["Context carried with each note", "Separate issues kept apart"],
          link: { page: 74, label: "Creative Feedback Management" },
        },
        {
          label: "Approvals",
          heading: "Decisions that stay with the work",
          icon: "approval",
          body: [
            "An approval recorded on the asset states what was accepted and when, and a status others can check replaces the question of whether something has been signed off.",
            "Colleagues downstream can then work from approved material without first checking with the reviewer.",
          ],
          points: ["Decisions tied to what they approve", "Status others can check"],
          link: { page: 89, label: "Creative Approval Management" },
        },
        {
          label: "Versions",
          heading: "From parallel copies to one history",
          icon: "history",
          body: [
            "When revisions replace the asset in place and earlier states stay behind it, each round of work remains traceable instead of living in a separate file.",
            "Reviewers spend far less time asking which file is the current one.",
          ],
          points: ["Revisions without new copies", "Earlier rounds still traceable"],
          link: { page: 91, label: "Creative Asset Versioning" },
        },
        {
          label: "Assets",
          heading: "From files passed around to a shared place",
          icon: "folder",
          body: [
            "Sharing a view of the library instead of exporting files keeps everyone looking at the same material, under the same access rules.",
            "Collaboration and control stop pulling in opposite directions: colleagues in other teams can take part without receiving uncontrolled copies.",
          ],
          points: ["Shared views, not attachments", "Access still governed"],
          link: { page: 180, label: "Secure Creative Collaboration" },
        },
      ],
      sources: [{ kind: "pdf", page: 74 }, { kind: "pdf", page: 89 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 180 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "in-getsibu",
      eyebrow: "In GetSibu",
      heading: "How GetSibu brings collaboration to the asset",
      items: [
        {
          heading: "Discussion inside the library",
          body: "Collaboration features sit directly inside the asset library, so teams can discuss files without moving conversations into disconnected tools.",
          icon: "folder",
          page: 61,
        },
        {
          heading: "Threads and timeline comments",
          body: "Threaded discussions keep conversations organised around specific issues, and video comments can be attached to specific points on the timeline.",
          icon: "thread",
          page: 63,
        },
        {
          heading: "Mentions that respect visibility",
          body: "Teammates can be mentioned in asset discussions, with folder-aware autocomplete helping ensure the people mentioned have appropriate visibility.",
          icon: "mention",
          page: 66,
        },
        {
          heading: "How feedback evolved",
          body: "Asset discussion history lets teams understand how feedback developed over time.",
          icon: "history",
          page: 75,
        },
        {
          heading: "Remote teams on the same assets",
          body: "Remote teams can collaborate around the same assets through comments, mentions, approvals and shared searches.",
          icon: "globe",
          page: 88,
        },
        {
          heading: "Shared views without duplicates",
          body: "Saved searches and relevant library views can be shared without creating duplicate copies of the same files.",
          icon: "collection",
          page: 78,
        },
      ],
      sources: [{ kind: "pdf", page: 61 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 64 }, { kind: "pdf", page: 66 }, { kind: "pdf", page: 75 }, { kind: "pdf", page: 88 }, { kind: "pdf", page: 78 }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about the future of creative collaboration",
      items: [
        {
          question: "Which kinds of creative work gain most from collaborating on the asset?",
          answer: ["Work with several review rounds and several reviewers: campaign materials, packaging, deliverables for clients and video edits, where ", { text: "frame-accurate review", page: 65 }, " lets teams discuss specific moments rather than describing approximate locations through messages. A quick exchange about one internal image gains less, because there is little context to lose."],
        },
        {
          question: "Do email and chat still have a place in creative collaboration?",
          answer: "Yes, for conversation that is not about one specific asset, such as planning, scheduling and quick coordination. Feedback and decisions about a particular piece of work are better kept with that work.",
        },
        {
          question: "What gets harder when collaboration moves onto the asset?",
          answer: "Habits, mostly. People used to replying by email have to open the asset instead, and for a while some feedback will still arrive the old way. The change sticks when the asset is the easiest place to give feedback, not merely the required one.",
        },
        {
          question: "What should a team change first to collaborate on the asset?",
          answer: "Start with feedback. Moving comments out of email and onto the assets they concern gives immediate context, and approval and versioning habits are easier to adopt once the discussion already lives there.",
        },
      ],
      sources: [{ kind: "pdf", page: 65 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on collaborating around assets",
      variant: "compact",
      pages: [90, 61, 87, 73, 378, 380],
      sources: [{ kind: "editorial", note: "Links to collaboration pages cited on this page and the other essays." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "The Future of Creative Asset Management",
      conversionPage: 400,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 400 }],
    },
  ],
};

export default page;
