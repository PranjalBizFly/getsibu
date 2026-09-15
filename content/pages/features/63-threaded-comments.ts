/**
 * 63 · Threaded Comments — /features/threaded-comments
 *
 * Angle (cluster: comments-feedback): threads that keep conversations organised by issue instead of one long
 * stream — why streams break down, the kinds of issue a review produces, and habits that keep threads focused.
 * Asset Comments (62) owns the single comment, Team Mentions (66) the mention mechanism, Creative Feedback
 * Management (74) feedback as a workflow, Asset Discussion History (75) how feedback evolved.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how threaded discussion organises creative feedback; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 63,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Collaboration",
      lede: "How threaded comments give each issue on an asset its own conversation, why a single stream of feedback breaks down, and how to keep threads focused as a review goes on.",
      visual: { diagram: "timeline-review", focus: "comments" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 63 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "One conversation per issue, not one stream for everything",
      body: [
        "Threaded discussions in GetSibu let teams keep conversations organised around specific issues, rather than piling every remark into one long stream of unrelated feedback. A reply joins the issue it answers.",
        "A stream copes while there are only a handful of remarks. Once a review picks up, it stops coping: a reply saying “agreed” could refer to any of the last six notes, a question about typography lands between two notes about colour, and anyone who arrives late must read everything to work out which points are still waiting for an answer.",
        [
          "A thread begins from a ",
          { text: "comment left on an asset", page: 62 },
          ", and the same structure suits video, where a note placed at a point on the timeline can gather its own replies.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["A thread for each issue", "Replies beside what they answer", "No stream of unrelated notes", "Easier for late joiners to follow", "Suited to timeline comments too"],
      },
      highlight: {
        heading: "In practice",
        body: "On a campaign banner, one thread debates the headline wording while another settles the choice of product image. Neither conversation interrupts the other.",
        tags: ["Reviewers", "Designers", "Account leads"],
      },
      glance: {
        heading: "Threads in brief",
        facts: [
          { label: "Area", value: "Collaboration" },
          { label: "Organised by", value: "Issue" },
          { label: "Starts from", value: "Asset Comments", page: 62 },
          { label: "Looked back on", value: "Asset Discussion History", page: 75 },
        ],
        actions: [{ kind: "route", path: "/features/collaboration", label: "More in Collaboration" }]
      },
      sources: [{ kind: "pdf", page: 63 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 64 }, { kind: "pdf", page: 75 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "stream-or-threads",
      eyebrow: "The difference",
      heading: "A single feedback stream compared with threads",
      columns: ["One long stream", "Threaded discussions"],
      emphasis: 1,
      rows: [
        ["Replying to a point", "Quote it and hope the context survives", "Reply inside that point’s thread"],
        ["Several issues at once", "Interleaved in order of arrival", "Each held in its own conversation"],
        ["Joining a review late", "Read every remark from the start", "Open the threads that concern you"],
        ["Seeing where a point landed", "Hunt for a reply that sounds final", "Follow one thread to its latest reply"],
        ["Settling the asset", "The outcome buried among remarks", "Issues discussed in threads, outcome recorded through approval"],
      ],
      sources: [{ kind: "pdf", page: 63 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 68 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "thread-types",
      eyebrow: "By issue type",
      heading: "Four kinds of thread a review produces",
      tabs: [
        {
          label: "Questions",
          heading: "When a reviewer needs information",
          icon: "help",
          body: [
            "A question thread is usually brief: someone asks whether a photograph is cleared for print, someone answers, and the point is done. Held apart from design notes, the answer stays easy to find when the same question comes up again.",
            "Where the answer depends on another colleague, ask in the thread rather than in a private message, so the reply arrives next to the question.",
          ],
          points: ["Quick to open and quick to settle", "The answer remains findable"],
        },
        {
          label: "Change requests",
          heading: "When something needs to be different",
          icon: "refresh",
          body: [
            "A change request often needs clarifying before work begins: how much larger, which alternative image, which version of the copy. The thread holds that exchange, so the person making the change finds the complete request in one place.",
            ["Once the change is made, the asset can be ", { text: "replaced in place while earlier versions are retained", page: 91 }, "."],
          ],
          points: ["Clarification before work starts", "Earlier versions kept on replacement"],
        },
        {
          label: "Disagreements",
          heading: "When reviewers want different things",
          icon: "users",
          body: [
            "Two stakeholders asking for opposite changes is ordinary in creative work. In a stream, the conflict can pass unnoticed until the designer tries to satisfy both. In a thread, the competing views sit together where the person entitled to decide can weigh them.",
            "Naming that person early helps the thread end with a decision rather than a compromise nobody requested.",
          ],
          points: ["Competing views side by side", "A named owner for the decision"],
        },
        {
          label: "Requests for input",
          heading: "When the creator needs something",
          icon: "user",
          body: [
            "Threads do not only run from reviewer to creator. A designer may need final copy, a confirmed product detail or a choice between two options before going any further.",
            "Raising each need as a thread of its own on the asset means the answer arrives beside the work it affects, rather than in a busy inbox where it has to be matched back to the right file.",
          ],
          points: ["Needs raised where the work is", "Answers arrive beside the request"],
        },
      ],
      sources: [{ kind: "pdf", page: 63 }, { kind: "pdf", page: 91 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "habits",
      eyebrow: "Considerations",
      heading: "Habits that keep threads focused",
      items: [
        {
          heading: "Open a new thread for a new issue",
          summary: "An unrelated point added to an existing thread recreates the stream problem on a small scale.",
          icon: "thread",
          body: [
            "It is tempting to add “also, the footer is wrong” to a conversation about the headline. The footer then has no discussion of its own and is easily forgotten once the headline is agreed.",
          ],
        },
        {
          heading: "Name the issue in the opening comment",
          summary: "The first comment tells everyone what the conversation is about.",
          icon: "text",
          body: [
            "Opening with the subject, for example “Headline wording on the hero banner”, lets others judge whether they need to read on. It also makes the thread recognisable when someone comes back to the asset later.",
          ],
        },
        {
          heading: "Reply inside the thread, not next to it",
          summary: "A response posted as a separate comment breaks its link to the question.",
          icon: "message",
          body: [
            "Threading only helps when replies sit under the comment they answer. Separate comments that start “re: the headline” rebuild exactly the ambiguity the thread was supposed to remove.",
          ],
        },
        {
          heading: "Finish with a clear last word",
          summary: "Whoever settles an issue should say so where it was discussed.",
          icon: "check",
          body: [
            "A final reply such as “going with option two” makes the outcome plain to every reader, including anyone who opens the asset long after the conversation.",
          ],
        },
        {
          heading: "Watch for too many threads on one draft",
          summary: "A flood of separate issues can mean the brief was unclear.",
          icon: "flag",
          body: [
            "A draft that attracts a great many separate threads may need a conversation about direction before more detailed feedback. Threads organise feedback well, but they cannot stand in for agreement about what the work is meant to achieve.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 63 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about threaded comments",
      items: [
        {
          question: "Does every issue on an asset need its own comment thread?",
          answer: "Each distinct issue benefits from one. Closely related points, such as two remarks about the same headline, can share a thread, while anything that could be settled independently is clearer on its own.",
        },
        {
          question: "How do threaded comments relate to asset approval?",
          answer: ["Threads are where individual issues are discussed; ", { text: "asset approval", page: 68 }, " is where the state of the asset is recorded, with status history showing whether it is awaiting review, approved or requires changes."],
        },
        {
          question: "How do you bring a colleague into a thread they are not yet part of?",
          answer: ["By ", { text: "mentioning them", page: 66 }, " in the discussion on the asset. Folder-aware autocomplete helps ensure that the people mentioned have appropriate visibility of the work."],
        },
      ],
      sources: [{ kind: "pdf", page: 63 }, { kind: "pdf", page: 68 }, { kind: "pdf", page: 66 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on organising asset discussions",
      variant: "compact",
      pages: [62, 66, 75, 64, 74, 85],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the closest comment topics." }],
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
