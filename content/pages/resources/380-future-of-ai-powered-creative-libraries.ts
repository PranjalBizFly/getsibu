/**
 * 380 · Future of AI-Powered Creative Libraries — /resources/future-of-ai-powered-creative-libraries
 *
 * Angle (clusters: future-of-dam; ai-intelligence): essay on the library as an organisation's creative memory — a
 * knowledge environment that holds what the organisation knows about its work (meaning, history, decisions, usage)
 * as well as the work, and the human foundations that make it trustworthy. Future of DAM (378) owns the category's
 * direction, How AI Changes DAM (377) the present shift in effort, Future of Creative Collaboration (379)
 * collaboration; AI Media Understanding (43), AI Creative Intelligence (44) and AI Asset Intelligence (58) own
 * GetSibu's capabilities. Direction only: no dates, adoption rates, market figures or analysts.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Essay: vendor-neutral argument about AI-powered creative libraries; states no GetSibu capability beyond the cited pages and makes no predictions." } as const;

const page: PageContent = {
  page: 380,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "centered",
      eyebrow: "Resources",
      lede: "An essay on how an AI-powered creative library can become the organisation’s creative memory, holding what is known about its work as well as the work, and on the foundations people have to put in place first.",
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 380 }, { kind: "pdf", page: 58 }],
    },
    {
      kind: "definition",
      id: "definition",
      eyebrow: "In short",
      term: "AI-powered creative libraries",
      answer: "AI-powered creative libraries can become more than storage systems by acting as intelligent knowledge environments for an organisation’s creative content. The library begins to hold what the organisation knows about its work, not only the work.",
      detail: "A conventional library returns files. A knowledge environment can also help answer questions about them: what the organisation already has on a subject, how a piece of work came to look the way it does, which version was accepted and what people actually use. AI contributes the reading of content at scale; the rest comes from the history, decisions and signals a library gathers over time.",
      sources: [{ kind: "pdf", page: 380 }, EXPLAINS],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A library that remembers what the organisation knows",
      body: [
        "Creative organisations tend to have a memory problem. Knowledge about its work — why a campaign looked as it did, who shot the footage, which version the client accepted, which images keep being reused — lives in people’s heads and inboxes. When those people move on, the files stay and the knowledge leaves with them.",
        "The idea behind an AI-powered creative library is that this knowledge can live with the content. Analysis gives assets searchable meaning. Metadata, discussion, versions and approvals record their story. Activity in the library adds evidence of what people actually rely on. Together they turn a repository into something closer to institutional memory: a place people can ask, not only browse.",
        [
          "The word “can” carries weight: a library becomes a knowledge environment only when its foundations are sound. The wider direction of the category is traced in ",
          { text: "Future of Digital Asset Management", page: 378 },
          ", and in GetSibu, ",
          { text: "asset intelligence", page: 58 },
          " combines AI analysis with metadata and search capabilities to make media libraries more informative.",
        ],
      ],
      keyPoints: {
        heading: "The argument",
        items: ["Knowledge kept with content", "Meaning added by analysis", "History from discussion and approval", "Signals from real usage", "Foundations set by people"],
      },
      highlight: {
        heading: "In practice",
        body: "A new brand manager wants to know why the packaging photography changed a few seasons ago. Instead of tracking down the former art director, they open the assets and read the discussion, the versions and the approval that settled it.",
        tags: ["Brand", "Creative leadership", "New joiners"],
      },
      glance: {
        heading: "The idea in brief",
        facts: [
          { label: "Moving from", value: "Storage of creative files" },
          { label: "Moving toward", value: "A knowledge environment for creative content" },
          { label: "Built from", value: "Analysis, context and usage signals" },
          { label: "Related essay", value: "How AI Changes DAM", page: 377 },
        ],
        actions: [{ kind: "route", path: "/resources", label: "More in Resources" }]
      },
      sources: [{ kind: "pdf", page: 380 }, { kind: "pdf", page: 378 }, { kind: "pdf", page: 58 }, { kind: "pdf", page: 377 }, EXPLAINS],
    },
    {
      kind: "layers",
      id: "layers",
      eyebrow: "How it is built",
      heading: "The layers that turn a library into a knowledge environment",
      intro: "Each layer adds a kind of knowledge the one beneath it cannot supply.",
      layers: [
        { label: "Files", body: "The content itself: images, video, documents and audio, held in one place without stray duplicates." },
        { label: "Descriptions", body: "Metadata, keywords and extracted text that say what each asset is, who made it and what it contains." },
        { label: "Meaning", body: "AI-generated information about what content shows or is about, so it can be found by description.", page: 43 },
        { label: "Context", body: "Comments, versions and approvals that record how an asset came about and what was decided about it." },
        { label: "Signals", body: "Patterns of use and search, pointing to the assets that prove their worth.", page: 182 },
      ],
      sources: [{ kind: "pdf", page: 380 }, { kind: "pdf", page: 43 }, { kind: "pdf", page: 182 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "questions",
      eyebrow: "What it answers",
      heading: "Questions a knowledge environment helps people answer",
      tabs: [
        {
          label: "What exists",
          heading: "“Do we already have something like this?”",
          icon: "search",
          body: [
            "A question every creative organisation keeps asking is whether suitable material already exists. Answering it well can prevent reshoots, redesigns and licence purchases for content the organisation already owns.",
            "It depends on assets being findable by meaning, not only by the words someone happened to type.",
          ],
          points: ["Less recreated work", "Found by description"],
        },
        {
          label: "What happened",
          heading: "“How did this come to look like this?”",
          icon: "history",
          body: [
            "Decisions leave traces: the comments that asked for a change, the versions that followed and the approval that closed the discussion. Kept with the asset, they explain a piece of work to someone who was not there.",
            "That matters most when teams change and a past decision is questioned.",
          ],
          points: ["Reasoning kept with the work", "Useful when teams change"],
        },
        {
          label: "What is used",
          heading: "“Which assets actually earn their place?”",
          icon: "chart",
          body: [
            "Records of use show which content people return to, which sits untouched and which words they search with. It is knowledge that is hard to gather any other way.",
            "It informs what to produce next, what to archive and where the library’s descriptions fall short of how people look.",
          ],
          points: ["Reused and neglected content", "The words people search with"],
        },
        {
          label: "What is allowed",
          heading: "“Can I use this, here, now?”",
          icon: "shield",
          body: [
            "Knowledge is only useful if it includes limits: approval status, expiry dates and the rights attached to an asset.",
            "A knowledge environment that surfaces an asset without its status invites exactly the mistakes a library should prevent.",
          ],
          points: ["Status beside knowledge", "Rights and expiry kept in view"],
        },
      ],
      sources: [{ kind: "pdf", page: 380 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "foundations",
      eyebrow: "Considerations",
      heading: "What it takes for a library to become a knowledge environment",
      items: [
        {
          heading: "Descriptions people can trust",
          summary: "Knowledge built on unchecked suggestions is not knowledge.",
          icon: "check",
          body: [
            ["Generated information needs checking before people rely on it. In GetSibu, teams can ", { text: "approve suggested tags in bulk", page: 47 }, " and override those that do not fit, which helps keep descriptions dependable as they multiply."],
          ],
        },
        {
          heading: "Context that is actually captured",
          summary: "History exists only if discussion and decisions happen on the asset.",
          icon: "message",
          body: [
            ["If feedback still travels by email and approval by chat, the library holds files without their story. The knowledge layer depends on collaboration habits as much as on technology, a shift traced in ", { text: "Future of Creative Collaboration", page: 379 }, "."],
          ],
        },
        {
          heading: "Provenance preserved",
          summary: "Where content came from is knowledge that disappears easily.",
          icon: "user",
          body: [
            ["Creators, capture details and original keywords are quickly lost when files move between systems. Keeping ", { text: "creators and contributors associated with assets", page: 116 }, " preserves that context through collaboration and migration."],
          ],
        },
        {
          heading: "Permissions that shape knowledge",
          summary: "Not everyone should learn everything the library knows.",
          icon: "lock",
          body: [
            "Unreleased work, client material and sensitive discussion must stay visible only to the right people. A knowledge environment should inherit the access rules of its library, so governance comes before openness.",
          ],
        },
        {
          heading: "Knowledge that stays current",
          summary: "An organisation’s memory needs pruning as well as growth.",
          icon: "archive",
          body: [
            "Superseded assets and outdated guidance mislead as easily as they inform. Archiving finished material and retiring expired content keeps the environment’s answers relevant.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 47 }, { kind: "pdf", page: 48 }, { kind: "pdf", page: 116 }, { kind: "pdf", page: 379 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "in-getsibu",
      eyebrow: "In GetSibu",
      heading: "How GetSibu builds toward a more informative library",
      items: [
        {
          heading: "Content prepared for discovery",
          body: "AI media indexing prepares creative content for intelligent discovery by processing supported visual, textual and metadata signals.",
          icon: "sparkles",
          page: 50,
        },
        {
          heading: "Visual content found through AI metadata",
          body: "AI image discovery helps teams locate photographs, product shots, campaign images and other visual content through AI-generated metadata.",
          icon: "image",
          page: 52,
        },
        {
          heading: "A record of changes and interactions",
          body: "Asset history gives users a record of the relevant changes and interactions around each asset.",
          icon: "history",
          page: 117,
        },
        {
          heading: "Tags people use and search for",
          body: "Tag analytics identify frequently used or searched tags, helping teams understand how their library is being discovered.",
          icon: "tag",
          page: 186,
        },
        {
          heading: "Reporting that informs decisions",
          body: "Creative library reporting turns analytics into information that can support operational decisions.",
          icon: "chart",
          page: 205,
        },
        {
          heading: "Collaboration with control",
          body: "Collaboration is combined with permissions, so teams can work together without sacrificing control over sensitive assets.",
          icon: "lock",
          page: 180,
        },
      ],
      sources: [{ kind: "pdf", page: 50 }, { kind: "pdf", page: 52 }, { kind: "pdf", page: 117 }, { kind: "pdf", page: 186 }, { kind: "pdf", page: 205 }, { kind: "pdf", page: 180 }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about AI-powered creative libraries",
      items: [
        {
          question: "How is a knowledge environment different from an intranet or wiki?",
          answer: "An intranet or wiki holds what people write about the work, kept apart from the work itself. A knowledge environment keeps that understanding attached to the assets it concerns, so the explanation and the file cannot quietly drift apart.",
        },
        {
          question: "How is an AI-powered creative library different from a DAM with AI tagging?",
          answer: "Tagging is one input among several. A library with tags can find files; a knowledge environment can also help explain them, because what was discussed, decided and used is kept alongside what the files contain.",
        },
        {
          question: "How does a creative library build up knowledge over time?",
          answer: "Gradually, and mostly through use. Analysis and imported metadata give a starting point from the outset, while discussion, approvals and patterns of use accumulate only as people work in the library, which is why moving everyday collaboration into it early matters.",
        },
        {
          question: "Does an AI-powered creative library remove the need for human expertise?",
          answer: "No. It can hold on to what experts knew, but people still interpret it: they set the vocabulary, review suggestions, make approval decisions and judge what the library’s signals mean.",
        },
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on intelligent creative libraries",
      variant: "compact",
      pages: [58, 43, 44, 377, 378, 379],
      sources: [{ kind: "editorial", note: "Links to the AI intelligence pages cited on this page and the other essays." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Turn Your Asset Library Into Intelligence",
      conversionPage: 398,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 398 }],
    },
  ],
};

export default page;
