/**
 * 250 · Frame.io Integration — /integrations/frame-io (HELD draft; own claim: frame-io)
 *
 * Angle (clusters: video-review, creative-tool-integrations): connecting a professional video review
 * workflow with central asset management. Review is a stage a cut passes through; the library looks
 * after footage, versions and the approved film before and after it. Timeline Comments (64) and
 * Frame-Accurate Review (65) own review inside GetSibu; page 248 owns editing.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of professional video review practice; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 250,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Integrations",
      lede: "How a professional video review workflow in Frame.io relates to central asset management in GetSibu, and what a video team should settle about where cuts, decisions and approved films belong once each round of review is over.",
      visual: { diagram: "connector-flow", label: "Frame.io" },
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 250 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Where review happens and where the film is kept",
      body: [
        "Frame.io integration can help connect professional video review workflows with central asset management. The two meet different needs: review is a stage that a cut passes through, while asset management looks after the footage, the versions and the finished film for as long as the organisation needs them.",
        "Professional review is intense and time-bound. A cut goes out, producers and directors respond, the editor revises, and the round repeats until someone signs off. When the last round closes, the questions change from “what needs fixing?” to “which file was approved, and where will people find it next year?” A workspace designed around the first set of questions is not necessarily where the second set gets answered.",
        [
          "Some teams review inside the library itself, where ",
          { text: "creative review", page: 69 },
          " provides a central location to inspect work, discuss changes and confirm final assets. Others run review in a dedicated workflow and rely on the library for everything around it, including a ",
          { text: "file version history", page: 92 },
          " that records previous versions and allows older ones to be restored when required.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Professional video review workflows", "Central asset management", "Review as a stage, not a store", "An agreed home for the approved film", "Feedback that outlasts the round"],
      },
      highlight: {
        heading: "In practice",
        body: "A video agency agrees that review rounds with its client run in Frame.io, while the film’s asset in GetSibu stays the place colleagues go for the approved cut once review is over.",
        tags: ["Producers", "Editors", "Video agencies"],
      },
      glance: {
        heading: "The Frame.io integration in brief",
        facts: [
          { label: "Area", value: "Integrations" },
          { label: "Connects", value: "Video review workflows and central asset management" },
          { label: "Review in GetSibu", value: "Creative Review", page: 69 },
          { label: "Versions", value: "File Version History", page: 92 },
        ],
      },
      sources: [{ kind: "pdf", page: 250 }, { kind: "pdf", page: 69 }, { kind: "pdf", page: 92 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "responsibilities",
      eyebrow: "Who looks after what",
      heading: "What a review round and central asset management each look after",
      intro: "Keeping these responsibilities distinct is what stops review material from becoming a second, unofficial library.",
      columns: ["During a review round", "In central asset management"],
      rows: [
        { label: "Time span", cells: ["As long as the round stays open", "From initial upload through review, approval and reuse to eventual deletion"] },
        { label: "The main question", cells: ["What should change in this cut?", "Which version is approved, and where is it kept?"] },
        { label: "Who takes part", cells: ["The people giving and acting on feedback", "Colleagues whose access is set by granular permissions"] },
        { label: "Earlier cuts", cells: ["Compared while a decision is being reached", "Kept as versions within the film’s asset record"] },
        { label: "Once work is signed off", cells: ["The round comes to an end", "Approved-only views lead colleagues to reviewed content"] },
      ],
      sources: [{ kind: "pdf", page: 101 }, { kind: "pdf", page: 151 }, { kind: "pdf", page: 93 }, { kind: "pdf", page: 103 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "decisions",
      eyebrow: "Worth agreeing",
      heading: "Decisions that shape how review and the library connect",
      items: [
        {
          heading: "Which system records the sign-off?",
          summary: "A film approved in one place and still pending in another leaves colleagues unsure which to believe.",
          icon: "approval",
          body: [
            "A review workflow and an asset library can each hold something that looks like a decision. Agree for each project which record counts as the sign-off, so colleagues know where to check instead of comparing two places.",
            ["If the library holds the decision, an asset in GetSibu can move through an approval process with ", { text: "status history", page: 68 }, " that shows whether it is awaiting review, approved or requires changes."],
          ],
        },
        {
          heading: "How is a cut identified on both sides?",
          summary: "A reviewer’s “latest cut” and the editor’s latest export are not always the same file.",
          icon: "film",
          body: [
            "Review rounds generate their own labels, and file names tend to multiply as exports are repeated. Agree one way of naming a cut that both the review workflow and the library can use, such as the project, the deliverable and a revision label.",
            ["In the library, ", { text: "replacing an asset in place while keeping its earlier versions", page: 91 }, " helps prevent names such as “final-v2” and “final-final” from standing in for a proper record."],
          ],
        },
        {
          heading: "What happens to feedback when the round closes?",
          summary: "Review notes explain why a film ended up the way it did.",
          icon: "history",
          body: [
            "Months later someone asks why a shot was dropped or a title reworded. If nobody knows where that reasoning was recorded, it is hard to recover, and a re-edit may undo a decision that was made for good reason.",
            ["Agree where the key conclusions should live once the round is over. Where they are kept with the film, ", { text: "asset discussion history", page: 75 }, " lets teams understand how feedback evolved over time."],
          ],
        },
        {
          heading: "Who should see unreleased cuts?",
          summary: "The audience for a review round is often different from the audience for the footage behind it.",
          icon: "lock",
          body: [
            "A round may include an external director or a client, while alternate takes and raw footage are meant for a much smaller group. Treat each invitation to review as an access decision, not a convenience.",
            ["Inside GetSibu, ", { text: "secure asset sharing", page: 172 }, " can be controlled through permissions rather than relying only on unrestricted links."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 68 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 75 }, { kind: "pdf", page: 172 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A client launch film that finishes review with one record",
      team: "A video agency",
      situation: "A video agency is producing a launch film for a client. Its producers run review rounds with the client in Frame.io, and the agency keeps each client’s footage and deliverables in GetSibu.",
      steps: [
        { heading: "Material sits in the client’s library", body: ["The footage and cuts live in a client-specific library, as ", { text: "client review", page: 72 }, " allows, with the client’s material kept isolated from the agency’s other clients."] },
        { heading: "Rounds run in Frame.io", body: "The producer shares each cut with the client in Frame.io, where the feedback rounds take place until the client is ready to sign off." },
        { heading: "The team agrees the record", body: "Before the first round, the producer and the account lead agree that the client’s sign-off is the decision that counts, and that it will be recorded against the film’s asset in GetSibu." },
        { heading: "Each revision becomes a version", body: ["Every revised cut replaces the previous one in the film’s asset, so ", { text: "earlier work is kept in the asset record", page: 93 }, " instead of in a trail of loose exports."] },
        { heading: "The decision is marked in the library", body: ["Once the client has signed off, the film is marked as approved through the ", { text: "creative approval workflow", page: 67 }, ", and colleagues making cut-downs start from that version."] },
      ],
      outcome: "The client reviews in the workflow the agency chose for it, and the project ends with the film’s versions and its approval kept together in the client’s library.",
      link: { page: 229, label: "GetSibu for Video Agencies" },
      sources: [{ kind: "pdf", page: 250 }, { kind: "pdf", page: 72 }, { kind: "pdf", page: 93 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 229 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about the Frame.io integration",
      items: [
        {
          question: "Does GetSibu have video review features of its own alongside the Frame.io integration?",
          answer: ["Yes. ", { text: "Video timeline comments", page: 64 }, " can be attached to specific points on the timeline, and ", { text: "frame-accurate review", page: 65 }, " lets creative teams discuss specific moments in video rather than describing approximate locations through messages."],
        },
        {
          question: "How should a team choose between reviewing video in Frame.io and reviewing in the library?",
          answer: ["Start from where the reviewers already work and how many tools they are willing to use. Whichever route is chosen, each round should end with a clear decision and an agreed home for the approved film. Reviewing in the library itself means ", { text: "contextual comments and approvals", page: 358 }, " reduce the need to carry asset-specific feedback across disconnected tools."],
        },
        {
          question: "What should an agency keep apart when clients review films through Frame.io?",
          answer: ["Each client’s material and each client’s reviewers. In GetSibu, ", { text: "client asset isolation", page: 167 }, " prevents unrelated customer libraries from being mixed within the same workflow; apply the same care to who is invited into each round."],
        },
        {
          question: "How long should Frame.io review material be kept after a film is delivered?",
          answer: ["Decide as part of your wider governance rather than case by case. ", { text: "Creative data governance", page: 339 }, " establishes rules around access, retention, usage and asset management, and review material is one more kind of content those rules should cover."],
        },
      ],
      sources: [{ kind: "pdf", page: 64 }, { kind: "pdf", page: 65 }, { kind: "pdf", page: 358 }, { kind: "pdf", page: 167 }, { kind: "pdf", page: 339 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on reviewing and keeping video",
      variant: "compact",
      pages: [69, 64, 65, 92, 72, 229],
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
