/**
 * 86 · Asset Mentions — /features/asset-mentions
 *
 * Angle (clusters: comments-feedback, mentions — the purpose): choosing which collaborator to bring into an
 * asset-specific discussion, and why the asset and its open question decide who that is. Team Mentions (66) owns the
 * mechanism (folder-aware autocomplete and visibility) and the etiquette of mentioning.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how teams decide whom to involve in a discussion about creative work; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 86,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Collaboration",
      lede: "How to choose the collaborator an asset’s discussion actually needs, whether that is the owner of a fact, the person who cleared a licence, a specialist or a decision-maker, and bring them in with a mention.",
      visual: { diagram: "timeline-review", focus: "comments" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 86 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Choosing who a discussion about this asset needs",
      body: [
        "Mentions in GetSibu make it easier to bring the right collaborator into a discussion about a specific asset. The weight falls on “right”: the person able to answer the question this particular piece of work has raised.",
        "Discussions stall for want of one person more often than for want of ideas. A designer wonders whether a product claim is still accurate; an editor is unsure whether a music track has been cleared; a reviewer wants to know whether a photograph reflects the latest brand guidance. The people already in the conversation can speculate, or they can bring in the colleague who knows. Bringing someone in is quicker, but only once somebody has worked out who that colleague is.",
        [
          "The mechanics of a mention belong to ",
          { text: "team mentions", page: 66 },
          ". Choosing the person is the part that depends on the asset: what it shows, the stage it has reached and who has already worked on it.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["The right collaborator for the question", "Discussions about one specific asset", "Knowledge rather than seniority", "Working out who knows", "One person for each question"],
      },
      highlight: {
        heading: "In practice",
        body: "On a pack shot for a new flavour, a designer mentions the food technologist rather than putting the question to the product team at large, because the open question is whether the ingredients pictured match the recipe.",
        tags: ["Designers", "Specialists", "Reviewers"],
      },
      glance: {
        heading: "Asset mentions in brief",
        facts: [
          { label: "Area", value: "Collaboration" },
          { label: "Purpose", value: "Bringing the right collaborator into an asset discussion" },
          { label: "Happens in", value: "Threaded Comments", page: 63 },
          { label: "Communication", value: "Creative Team Communication", page: 85 },
        ],
        actions: [{ kind: "route", path: "/features/collaboration", label: "More in Collaboration" }]
      },
      sources: [{ kind: "pdf", page: 86 }, { kind: "pdf", page: 66 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 85 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "who",
      eyebrow: "Choosing the collaborator",
      heading: "Who to bring in, depending on what the asset raises",
      tabs: [
        {
          label: "Facts",
          heading: "When the question is whether something is true",
          icon: "document",
          body: [
            "Specifications, ingredient lists, performance statements and product names belong to the people who own those facts: product managers, technical specialists, sometimes legal advisers. A designer can compare wording with the brief, but only the owner of the fact can say whether it is still correct.",
            "Mention that owner on the asset carrying the claim and quote the exact wording in doubt, so the answer applies to what is actually shown.",
          ],
          points: ["The owner of the fact, not the maker of the layout", "The exact wording quoted"],
        },
        {
          label: "Rights",
          heading: "When the question is whether it can be used",
          icon: "key",
          body: [
            "Licensed photography, music, fonts and stock footage all come with conditions. The collaborator to involve is whoever arranged or recorded the licence, which is not always the person who made the asset.",
            "If nobody in the discussion knows who that was, ask whoever brought the material into the project before widening the search. They can usually name the person who dealt with the rights.",
          ],
          points: ["Whoever arranged the licence", "The trail followed from the contributor"],
        },
        {
          label: "Craft",
          heading: "When the question needs a specialist’s eye",
          icon: "eye",
          body: [
            "Colour accuracy, audio levels, retouching and animation timing can only be judged properly by someone who does that work. Mentioning the colourist or sound designer on the specific asset gives them the exact material and the exact doubt, rather than a vague request to look over the project.",
          ],
          points: ["The exact material and the exact doubt", "Specialists involved only where needed"],
        },
        {
          label: "Decisions",
          heading: "When the discussion needs authority, not information",
          icon: "approval",
          body: [
            "Some threads are not missing a fact but a decision: two reviewers want different things, or a change would alter the brief. The person to bring in is whoever is entitled to decide, and the mention works best when it sets out the options rather than the whole history.",
            ["Once the decision is made, the asset can continue through the ", { text: "creative approval workflow", page: 67 }, "."],
          ],
          points: ["The person entitled to decide", "Options presented, not history"],
        },
      ],
      sources: [{ kind: "pdf", page: 86 }, { kind: "pdf", page: 67 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "question-to-answer",
      eyebrow: "Step by step",
      heading: "From an open question to the right person’s answer",
      steps: [
        { heading: "Name the question", body: "Put what is actually unknown about this asset into one sentence before deciding whom to ask.", icon: "help" },
        { heading: "Work out who knows", body: "Start with the creators and contributors, who can remain associated with the asset, then think about who owns the subject of the question.", icon: "user", page: 116 },
        { heading: "Mention them where it arose", body: "Bring that person into the discussion from the comment that raises the question, rather than asking them separately somewhere else.", icon: "mention" },
        { heading: "Keep the answer in the thread", body: "The reply belongs under the comment that raised the question, where the people working on the asset can act on it.", icon: "thread" },
      ],
      sources: [{ kind: "pdf", page: 86 }, { kind: "pdf", page: 116 }, { kind: "pdf", page: 63 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A launch video with three questions and three different answerers",
      team: "A consumer electronics marketing team",
      situation: "A marketing team at a consumer electronics company is finishing a launch video. Several open questions have gathered in the comments, and the editor cannot settle any of them alone.",
      steps: [
        { heading: "The questions are sorted", body: "The producer reads the discussion on the video and separates the open questions into a fact, a rights query and a decision." },
        { heading: "The claim goes to its owner", body: ["A line about water resistance has a comment ", { text: "at its point on the timeline", page: 64 }, ", and the producer mentions the product engineer, who confirms the wording that can be used."] },
        { heading: "The music goes to whoever cleared it", body: "Nobody is sure of the track’s licence, so the producer mentions the colleague who supplied the audio, who confirms the terms in the same thread." },
        { heading: "The end card goes to the decision-maker", body: "Reviewers are split between two end cards, so the marketing director is mentioned with both options set out in one comment and picks one." },
        { heading: "The editor finishes the cut", body: "With each thread answered, the editor revises the video and review is requested again." },
      ],
      outcome: "Three colleagues joined the discussion for one question each, and the editor worked from answers given by the people entitled to give them rather than from a round of guesses.",
      link: { page: 213, label: "GetSibu for Marketing Teams" },
      sources: [{ kind: "pdf", page: 86 }, { kind: "pdf", page: 64 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 213 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about asset mentions",
      items: [
        {
          question: "Should the creator of an asset be mentioned in every discussion about it?",
          answer: "Not by default. Mention the creator when the question is one only they can answer, such as how a file was produced or which source it used; otherwise the discussion on the asset is already the place they work from.",
        },
        {
          question: "Should one comment mention several people with different questions?",
          answer: "It is usually clearer to split it. A separate comment for each question lets each person answer their own part in its own thread, instead of everyone replying to a mixture.",
        },
        {
          question: "What if the right collaborator for an asset has moved on?",
          answer: ["Ask whoever took over that area of responsibility, and make sure the answer is written on the asset. Over time the ", { text: "asset discussion history", page: 75 }, " then holds the knowledge instead of one person."],
        },
      ],
      sources: [{ kind: "pdf", page: 86 }, { kind: "pdf", page: 63 }, { kind: "pdf", page: 75 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on bringing people into asset discussions",
      variant: "compact",
      pages: [66, 62, 63, 85, 116, 75],
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
