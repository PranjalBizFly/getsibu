/**
 * 41 · AI Auto Collections — /features/ai-auto-collections
 *
 * HELD draft (claim: auto-collections). Angle: GetSibu can propose collections from patterns it identifies
 * across the library, and users approve them. States the capability only in the PDF wording; nothing about
 * which patterns are used, when proposals appear, how collections are edited or who may approve them.
 * AI Asset Recommendations (56) owns suggestions in general; AI Library Organisation (57) owns ongoing order.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of collections and of judging proposed groupings in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 41,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "AI",
      lede: "See how GetSibu can propose collections based on patterns across the library, how users can judge which suggestions to approve, and where approved groupings sit beside folders, tags and saved searches.",
      visual: { diagram: "ai-review", focus: "approve" },
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 41 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Groupings proposed by the library, decided by people",
      body: [
        "GetSibu can propose collections based on patterns it identifies across the library. Users can approve these suggestions and use them to create more organised asset groupings.",
        "A collection gathers assets that belong together for a purpose, whether or not they share a folder: imagery for a product launch, logos cleared for partners, a season’s strongest photography. Building one by hand means someone has to notice the need, search for candidates and gather them, which is why many useful collections are never made at all.",
        "A pattern is not the same thing as a purpose, though. Software can notice that assets have something in common; only the team knows whether that common thread is something people will ever look for. Approval is where that judgement is applied.",
        [
          "Collections are one of the ways a GetSibu library is organised, alongside ",
          { text: "folders, tags, metadata and permissions", page: 4 },
          ". Collection creation is also among the repetitive tasks that ",
          { text: "AI media automation", page: 55 },
          " reduces.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Collections proposed from library patterns", "Users approve the suggestions", "A pattern is not a purpose", "Collections beside folders and tags", "Groupings nobody had time to build"],
      },
      highlight: {
        heading: "In practice",
        body: "After a busy season, a brand manager reviews a proposed grouping of product photography spread across several shoots, approves it and gives the team a collection nobody had found time to assemble.",
        tags: ["Brand", "Library managers", "Photography"],
      },
      glance: {
        heading: "Proposed collections in brief",
        facts: [
          { label: "Area", value: "AI" },
          { label: "Proposes", value: "Collections from patterns across the library" },
          { label: "Decided by", value: "Users who approve the suggestions" },
          { label: "Serves", value: "AI Library Organisation", page: 57 },
        ],
      },
      sources: [{ kind: "pdf", page: 41 }, { kind: "pdf", page: 4 }, { kind: "pdf", page: 55 }, { kind: "pdf", page: 57 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "judging-a-proposal",
      eyebrow: "Step by step",
      heading: "Judging a proposed collection before approving it",
      intro: "Each step is a human judgement about whether a suggestion deserves approval.",
      steps: [
        { heading: "Start from the candidate", body: "The starting point is a grouping drawn from the library, rather than an empty collection someone has to fill.", icon: "sparkles" },
        { heading: "Test the purpose", body: "Ask who would open this grouping and when. A proposal nobody can imagine using is not worth approving, however coherent it looks.", icon: "help" },
        { heading: "Look at the contents", body: "Check whether the assets it gathers suit the purpose you have in mind, and note anything a colleague would expect to find there.", icon: "eye" },
        { heading: "Compare with what exists", body: "Check that the proposal does not repeat a folder, saved search or collection colleagues already rely on.", icon: "copy" },
        { heading: "Approve what earns it", body: "Reserve approval for proposals that pass these checks, so every collection the team adopts has a reason to exist.", icon: "approval" },
        { heading: "Tell the people it serves", body: "Let the team that needs the collection know it exists, so it replaces the private lists and email attachments they were relying on.", icon: "users" },
      ],
      sources: [{ kind: "pdf", page: 41 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "by-hand-or-proposed",
      eyebrow: "Two ways to a collection",
      heading: "Assembling a collection by hand compared with approving a proposal",
      columns: ["Collections assembled by hand", "Proposed collections"],
      emphasis: 1,
      rows: [
        ["Where the idea comes from", "Someone notices a need", "A pattern identified across the library"],
        ["Work involved", "Searching for and gathering each asset", "Judging a suggestion, then using it to organise"],
        ["Who has the final say", "Whoever built it", "The users who approve it"],
        ["Groupings that get made", "Only those someone finds time for", "Candidates drawn from the whole library"],
        ["Main risk", "Useful groupings never built", "Approving groupings nobody opens"],
      ],
      sources: [{ kind: "pdf", page: 41 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "considerations",
      eyebrow: "What to consider",
      heading: "Keeping proposed collections useful rather than numerous",
      items: [
        {
          heading: "A coherent grouping can still be pointless",
          summary: "Assets that share something are not automatically assets anyone needs together.",
          icon: "help",
          body: [
            "Whether a common thread matters depends on how people actually look for material. A tidy grouping of every image with a clear blue sky may never be opened, while an untidy-looking set of material from one product launch may be exactly what the next brief needs.",
          ],
        },
        {
          heading: "Collections, folders and saved searches do different jobs",
          summary: "Each way of grouping assets has its own strengths, and a collection should not duplicate the others.",
          icon: "layers",
          body: [
            [
              "Folders tend to express where material belongs and who is responsible for it. ",
              { text: "Saved searches", page: 17 },
              " can be shared through a URL as reusable views for campaigns, clients and products. A collection earns its place as a purposeful selection that spans several folders and is not simply the answer to one search.",
            ],
          ],
        },
        {
          heading: "An approved collection is not approved content",
          summary: "Approving a grouping says it is useful; it says nothing about whether each asset in it is ready for use.",
          icon: "approval",
          body: [
            [
              "A proposed set of launch imagery may mix final images with drafts and rejected alternatives. Before a collection becomes the place people pick material from, check where its assets stand: ",
              { text: "review status", page: 76 },
              " indicates whether an asset needs attention or has already completed the approval process.",
            ],
          ],
        },
        {
          heading: "Proposals matter most where structure is thin",
          summary: "Areas that arrived in bulk often have folders but few purposeful groupings.",
          icon: "compass",
          body: [
            "An imported archive or years of event photography usually sits in folders arranged by date or by project, with little that reflects how material is reused. Reviewing proposals there can add the most, while carefully curated areas may need few new collections.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 17 }, { kind: "pdf", page: 76 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about AI auto collections",
      items: [
        {
          question: "Do AI auto collections replace folders in a library?",
          answer: ["No. ", { text: "Library navigation", page: 29 }, " runs through views, folders, tags, collections and search, so an approved collection adds another route through the library rather than replacing its folder structure."],
        },
        {
          question: "Who in a team should review AI auto collection proposals?",
          answer: "Someone who knows how colleagues look for material, often the library manager or whoever looks after the taxonomy, ideally checking with the teams a collection would serve before approving it.",
        },
        {
          question: "Where do AI auto collections help a growing library?",
          answer: ["In keeping order without a major clean-up after every campaign, which is the aim of ", { text: "AI library organisation", page: 57 }, ". Judging proposals as part of routine library upkeep, rather than in one large exercise, lets structure keep pace with the material."],
        },
      ],
      sources: [{ kind: "pdf", page: 41 }, { kind: "pdf", page: 29 }, { kind: "pdf", page: 57 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on organising a library with AI",
      variant: "compact",
      pages: [57, 55, 4, 29, 17, 76],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
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
