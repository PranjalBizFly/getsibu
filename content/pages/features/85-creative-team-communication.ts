/**
 * 85 · Creative Team Communication — /features/creative-team-communication
 *
 * Angle (cluster: comments-feedback): communication kept close to the asset so users understand exactly what a
 * discussion relates to — the problem of reference, and the kinds of conversation beyond feedback that benefit.
 * Asset Comments (62) owns the comment itself; Team Feedback (73) owns scattered feedback; Creative Feedback
 * Management (74) owns the feedback workflow; Asset Mentions (86) owns bringing a collaborator in.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how creative teams communicate about files; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 85,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Collaboration",
      lede: "Why creative messages lose their meaning once they drift away from the file, which conversations beyond feedback belong on the asset, and how a team settles a question on the piece it concerns.",
      visual: { diagram: "timeline-review", focus: "comments" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 85 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Messages that do not have to explain what they are about",
      body: [
        "GetSibu keeps communication close to the asset, so users can understand exactly what a discussion relates to. The subject of a conversation is the file it sits on, rather than something each message has to describe.",
        "Creative conversations spend a great deal of effort simply establishing what is under discussion. “The new one”, “the version with the blue background”, “the second shot”, “that deck from last week”: each phrase asks the reader to reconstruct what the writer had in front of them. When the reader guesses wrong, the reply answers a different question, and the mistake may only come to light after someone has worked on the wrong file.",
        [
          "Feedback is the obvious case, and ",
          { text: "creative feedback management", page: 74 },
          " turns discussions attached to assets into an organised workflow. Communication is wider than feedback, though. Questions about rights, cautions about use and requests for another format all depend on the reader knowing precisely which asset they concern.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Communication close to the asset", "No guessing what a message refers to", "Context carried by where it is written", "Questions, cautions and requests", "More than feedback"],
      },
      highlight: {
        heading: "In practice",
        body: "A copywriter asks “is this the approved tagline?” directly on a banner, and nobody has to ask which banner or which campaign the question is about.",
        tags: ["Copywriters", "Designers", "Merchandisers"],
      },
      glance: {
        heading: "Communication in brief",
        facts: [
          { label: "Area", value: "Collaboration" },
          { label: "Kept", value: "Close to the asset" },
          { label: "Makes clear", value: "What each discussion relates to" },
          { label: "Starts with", value: "Asset Comments", page: 62 },
        ],
        actions: [{ kind: "route", path: "/features/collaboration", label: "More in Collaboration" }]
      },
      sources: [{ kind: "pdf", page: 85 }, { kind: "pdf", page: 74 }, { kind: "pdf", page: 62 }, EXPLAINS],
    },
    {
      kind: "layers",
      id: "context",
      eyebrow: "What position communicates",
      heading: "What a message written on the asset already makes clear",
      intro: "Each layer is context that a message sent somewhere else would have to spell out.",
      layers: [
        { label: "Which asset", body: "Comments are left directly on assets, so the file under discussion rarely needs naming, attaching or describing.", page: 62 },
        { label: "Which moment", body: "For video, a comment attached to a point on the timeline identifies the moment as well as the file.", page: 64 },
        { label: "Which issue", body: "Threaded discussions keep a conversation organised around one specific issue, so a reply is less likely to be read as an answer to something else.", page: 63 },
        { label: "Where the work stands", body: "Review status gives a clear indication of whether the asset still needs attention or has already completed the approval process.", page: 76 },
      ],
      sources: [{ kind: "pdf", page: 85 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 64 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 76 }],
    },
    {
      kind: "accordion",
      id: "beyond-feedback",
      eyebrow: "Beyond feedback",
      heading: "Conversations that belong close to an asset",
      items: [
        {
          heading: "Questions about use and rights",
          summary: "“Can we use this in paid social?” is a question about one specific file.",
          icon: "help",
          body: [
            "Usage questions tend to be asked in chat and answered from memory, which means the next person with the same question asks again. Asked on the asset, the question and its answer stay with the file they concern.",
            "The answer is worth phrasing so it still makes sense later: say what was confirmed, by whom and for which use, rather than simply “yes, fine”.",
          ],
        },
        {
          heading: "Cautions about timing",
          summary: "Some assets carry conditions that everyone handling them should know.",
          icon: "clock",
          body: [
            "“Not before the product announcement” or “only while the promotion runs” are cautions that lose their force when they live in an email the next user never saw. A short note on the asset states the condition where the file is.",
            [
              "Where content should stop being used after a certain point, ",
              { text: "expiry information", page: 104 },
              " can help teams identify it, so the condition is recorded in more than a note.",
            ],
          ],
        },
        {
          heading: "Requests for another version",
          summary: "Asking for a portrait crop or a shorter edit is clearest on the original.",
          icon: "copy",
          body: [
            "A request for a variation made on the original tells the designer or editor exactly which piece to start from, including its colours, copy and framing. Made by email, the same request often starts from whatever file the recipient finds first.",
          ],
        },
        {
          heading: "Where a file came from",
          summary: "Before asking in a group chat who made something, check the asset.",
          icon: "user",
          body: [
            [
              { text: "Asset ownership", page: 115 },
              " provides context about who created or uploaded content, which tells a colleague whom to ask about an image or recording without broadcasting the question to the whole team.",
            ],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 85 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 104 }, { kind: "pdf", page: 115 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A colour question settled on the image it concerned",
      team: "An e-commerce photography team",
      situation: "An e-commerce brand’s in-house photography team is retouching a large set of product images for a new range of shoes. The retoucher, a merchandiser and the brand manager each have views on colour and cropping.",
      steps: [
        { heading: "A question on one image", body: "The merchandiser comments on the tan colourway image that it looks more orange than the physical sample, writing on that image rather than in the team chat." },
        { heading: "The right person joins", body: ["The retoucher is unsure which reference to trust and ", { text: "mentions the brand manager", page: 86 }, ", who confirms the colour reference in the same discussion."] },
        { heading: "A look-alike left alone", body: "A side view from the same shoot looks almost identical, but because the remark sits on the three-quarter view, nobody spends time correcting an image that was never in question." },
        { heading: "The answer is acknowledged", body: "The retoucher replies in the thread that the colour will follow the confirmed reference, then starts on the correction." },
        { heading: "Another colourway, another conversation", body: "A similar question about the black colourway is asked on that image, so the answers about the two images stay apart." },
      ],
      outcome: "The team spent its messages on colour and cropping rather than on working out which image each remark referred to.",
      link: { page: 230, label: "GetSibu for E-Commerce Brands" },
      sources: [{ kind: "pdf", page: 85 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 86 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 230 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about creative team communication",
      items: [
        {
          question: "When should a message go on the asset rather than into a team chat?",
          answer: "Whenever the message would otherwise have to describe or attach the file. If you catch yourself writing “the one with…”, the message belongs on the asset.",
        },
        {
          question: "Does keeping communication close to the asset work for documents and audio?",
          answer: [
            "Yes. ",
            { text: "GetSibu is designed for collaborating on videos, images, documents and audio", page: 1 },
            ", and the problem of reference applies to all of them: a question about a deck or a voice-over carries its file with it, just as a note on a video does.",
          ],
        },
        {
          question: "What should you do when a conversation about one asset turns into a discussion about several?",
          answer: "Move the general point, such as a change of direction for a whole campaign, to the brief or planning conversation, and leave comments on the individual assets only for the changes each one needs.",
        },
      ],
      sources: [{ kind: "pdf", page: 1 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on talking about the work where it lives",
      variant: "compact",
      pages: [62, 86, 63, 73, 74, 75],
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
