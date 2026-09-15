/**
 * 81 · Production Collaboration — /features/production-collaboration
 *
 * Angle (clusters: video-review, team-collaboration): how production teams combine asset comments, versioning and
 * timeline review to coordinate creative work across the life of an edit. GetSibu for Production Studios (211) owns the
 * studio library, roles and archiving; Video Timeline Comments (64) and Frame-Accurate Review (65) own the mechanism
 * and the practice of precise video notes.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how production teams collaborate on an edit; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 81,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Collaboration",
      lede: "Follow an edit from first assembly to delivery and see where comments, versions and notes on the timeline each help a director, an editor and a set of specialists stay on the same material.",
      visual: { diagram: "timeline-review", focus: "timeline" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 81 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Coordinating a production around the material itself",
      body: [
        "Production teams can use asset comments, versioning and timeline review in GetSibu to coordinate creative work. Together they give a production one place for what people think of the edit, for how it has changed, and for where in the film each note applies.",
        "Production is collaboration under time pressure between specialists who seldom share a room. A director watches in one city, an editor cuts in another, a motion designer builds titles, a sound mix arrives from outside, and a producer tries to keep everyone on the same page. The usual failure is not a shortage of notes but notes about the wrong material: feedback on yesterday’s cut applied to today’s, or two people fixing the same shot in different ways.",
        [
          "What a production can gain is time and fewer crossed wires. ",
          { text: "Production productivity", page: 353 },
          " looks at how production teams can reduce the time spent reviewing large amounts of footage and searching through disconnected storage, and ",
          { text: "GetSibu for Production Studios", page: 211 },
          " follows footage, review and versions through a studio’s library.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Comments, versions and timeline review together", "Notes clear about which cut they mean", "Specialists working on one asset", "Broad notes early, precise notes later", "Production material beyond video"],
      },
      highlight: {
        heading: "In practice",
        body: "A producer asks the director and the brand lead to leave their notes on the latest cut in the library, so the editor receives one set of comments at the points they concern instead of two emails full of timecodes.",
        tags: ["Directors", "Editors", "Producers"],
      },
      glance: {
        heading: "Production collaboration in brief",
        facts: [
          { label: "Area", value: "Collaboration" },
          { label: "Combines", value: "Asset comments, versioning and timeline review" },
          { label: "Used by", value: "GetSibu for Film Production", page: 218 },
          { label: "Across locations", value: "Collaborative Asset Review", page: 87 },
        ],
        actions: [{ kind: "route", path: "/features/collaboration", label: "More in Collaboration" }]
      },
      sources: [{ kind: "pdf", page: 81 }, { kind: "pdf", page: 353 }, { kind: "pdf", page: 211 }, { kind: "pdf", page: 218 }, { kind: "pdf", page: 87 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "tools",
      eyebrow: "What a production combines",
      heading: "The tools a production team uses together",
      items: [
        { heading: "What people think of it", body: "Directors, producers and specialists write feedback directly on the asset it concerns, whether that is a cut, a still or a title design.", icon: "message", points: ["Opinions kept with the material", "Stills and graphics as well as cuts"], page: 62 },
        { heading: "Where in the film it applies", body: "On video, a comment can be attached to a specific point on the timeline, which gives the editor a precise location for each requested change.", icon: "video", points: ["A note tied to its moment", "The note and the edit in one place"], page: 64 },
        { heading: "Which issue a reply answers", body: "Replies stay organised around the issue they answer, so a discussion about a title card does not tangle with one about pacing.", icon: "thread", points: ["Parallel conversations kept apart", "Answers beside their questions"], page: 63 },
        { heading: "How the edit has changed", body: "Video teams can manage different cuts and revisions while the version history stays associated with the asset.", icon: "layers", points: ["The edit’s history on one asset", "Earlier cuts still within reach"], page: 97 },
        { heading: "How reviewers far away watch it", body: "Streaming previews let reviewers inspect large media files without waiting for a complete download.", icon: "film", points: ["No wait for a complete download", "Useful for reviewers far from the edit"], page: 147 },
      ],
      sources: [{ kind: "pdf", page: 62 }, { kind: "pdf", page: 64 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 97 }, { kind: "pdf", page: 147 }],
    },
    {
      kind: "tabs",
      id: "phases",
      eyebrow: "Through the edit",
      heading: "How the same tools serve each phase of an edit",
      tabs: [
        {
          label: "Assembly",
          heading: "Capture the big-picture notes first",
          icon: "film",
          body: [
            "The first assembly attracts feedback about structure, story and pace. General comments on the asset suit this stage better than precise notes on the timeline, because the question is whether the film works at all, not whether a cut lands on the right frame.",
            "It is also the stage at which the fewest people should comment. Keeping the audience small, often just the director and producer, stops structural questions being drowned out by detailed notes on material that is about to change.",
          ],
          points: ["Structure before detail", "A small audience for early cuts"],
        },
        {
          label: "Rough to fine",
          heading: "Move from broad notes to exact ones",
          icon: "video",
          body: [
            "As the edit tightens, feedback narrows: this transition, that line of dialogue, the hold on the product shot. This is where notes at points on the timeline earn their place, and where a reviewer’s ability to point at the moment matters more than their ability to describe it.",
            "Reviewers outside the cutting room gain most at this stage, because a note placed at the moment saves a phone call to explain which moment they meant.",
          ],
          points: ["Precise notes as detail matters", "Fewer calls to explain a note"],
          link: { page: 65, label: "Frame-Accurate Review" },
        },
        {
          label: "Specialist passes",
          heading: "Keep grade, sound and graphics on the same asset",
          icon: "palette",
          body: [
            "Colour, sound and motion graphics are often handled by different people, sometimes at the same time. When their questions sit on the relevant asset in separate threads, one specialist’s discussion does not bury another’s.",
            ["A note that concerns one specialist’s work is the moment to ", { text: "bring that collaborator into the discussion", page: 86 }, " by mentioning them, rather than forwarding the comment."],
          ],
          points: ["Each specialism in its own thread", "The right person drawn in when needed"],
        },
        {
          label: "Delivery",
          heading: "Approve each deliverable in its own right",
          icon: "approval",
          body: [
            "Productions rarely deliver one file. A main film, shorter edits and versions for different channels each need confirming, and approving the main film does not settle whether the others are correct.",
            ["Taking every deliverable through the ", { text: "creative approval workflow", page: 67 }, " means each one is marked as approved on its own asset, so nobody has to infer the state of a cut-down from its parent."],
          ],
          points: ["Every cut-down confirmed separately", "Approval recorded on each asset"],
        },
      ],
      sources: [{ kind: "pdf", page: 62 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 64 }, { kind: "pdf", page: 65 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 86 }, { kind: "pdf", page: 66 }, { kind: "pdf", page: 67 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "habits",
      eyebrow: "Good practice",
      heading: "Production habits that keep collaboration clear",
      items: [
        {
          heading: "Say which cut you watched",
          summary: "A note is only useful when everyone knows which version it refers to.",
          icon: "eye",
          body: [
            "When cuts change daily, feedback written against yesterday’s version can send an editor backwards. Opening each comment by naming the cut it concerns makes the reference explicit, however quickly the edit moves on.",
          ],
        },
        {
          heading: "Revise the asset instead of uploading a new one",
          summary: "A fresh upload for every cut splits the story of the edit across files.",
          icon: "upload",
          body: [
            "Uploading each revision as a separate asset splits the history of the edit across several files and brings back exactly the naming problem that versioning is meant to solve. Reserve new assets for genuinely different deliverables, not for the next cut of the same one.",
          ],
        },
        {
          heading: "Agree whose notes are decisions",
          summary: "Directors, producers and brand leads can give opposing notes on the same moment.",
          icon: "users",
          body: [
            "An editor faced with two contradictory notes will either stall or guess. Settling in advance who breaks a tie, usually the director on creative questions and the producer on scope, lets the editor reply in the thread and wait for one answer.",
          ],
        },
        {
          heading: "Brief reviewers who are not film-makers",
          summary: "Brand, legal and commercial reviewers watch for different things than craft specialists.",
          icon: "help",
          body: [
            "A marketing lead or legal adviser may not know what to comment on in a rough cut, and may spend their notes on details that will change anyway. Telling them what their review is for, such as the product claims or the end card, focuses their comments on the part only they can judge.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 81 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 63 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about production collaboration",
      items: [
        {
          question: "Should comments on raw footage be handled like notes on an edit?",
          answer: "Usually not. Comments on raw footage tend to be selection notes, such as which takes are usable, and matter most before the assembly. Once an edit exists, change requests belong on the cut itself, so the editor has one place to look for them.",
        },
        {
          question: "How does production collaboration relate to frame-accurate review?",
          answer: "Frame-accurate review is one practice within it: discussing specific moments in a video rather than approximate locations. Production collaboration is the wider coordination of a team from assembly to delivery.",
        },
        {
          question: "How can a producer see which deliverables still need attention before delivery?",
          answer: [
            { text: "Review status", page: 76 },
            " gives a clear indication of whether each asset needs attention or has completed the approval process, so a producer can check every deliverable before anything is sent.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 81 }, { kind: "pdf", page: 65 }, { kind: "pdf", page: 76 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on collaborating in production",
      variant: "compact",
      pages: [64, 65, 97, 211, 218, 87],
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
