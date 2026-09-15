/**
 * 345 · Creative Team Pricing — /pricing/creative-team-pricing
 *
 * Angle (cluster: pricing-plans): the two measures a creative team can base its plan choice on, made practical: sizing
 * a library honestly and describing collaboration requirements as groups of people who take part in different ways.
 * No plans, prices or figures, and no suggestion that features differ by plan. DAM Pricing for Agencies (346) owns
 * client-by-client factors; Enterprise Asset Management Cost (347) owns cost against savings.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Practical guidance on describing a creative team's library and collaboration needs; states no GetSibu capability beyond the cited pages, names no plan or price and supplies no figures." } as const;

const page: PageContent = {
  page: 345,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "centered",
      eyebrow: "Pricing",
      lede: "A practical way for a creative team to describe the things its choice of plan can rest on: how large its library really is, and how its people actually work together around that material.",
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 345 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "The measures that describe what a creative team needs",
      body: [
        "Creative teams can choose a GetSibu plan according to the size of their library and their collaboration requirements. Both measures sound simple, and both are regularly misjudged until someone looks at them closely.",
        "Library size is more than a file count. Years of footage and a large archive of product photographs can be equally demanding in different ways, and every collection also holds duplicates, abandoned drafts and material nobody needs to bring across. Collaboration requirements are just as easy to misread: a team that looks small may involve many reviewers and colleagues in other departments, while in a large department relatively few people may add or change material.",
        [
          "Agencies weigh factors of their own, set out in ",
          { text: "DAM pricing for agencies", page: 346 },
          ", and larger organisations set cost against savings in ",
          { text: "enterprise asset management cost", page: 347 },
          ". For a creative team inside one organisation, a clear picture of size and collaboration is the ground both of those conversations stand on.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Library size beyond a file count", "Heavy formats and light ones", "Material worth leaving behind", "Contributors, reviewers and users", "How collaboration really happens"],
      },
      highlight: {
        heading: "In practice",
        body: "A design team assumed its library was mostly images, until a rough count by format showed that the video drafts kept from past campaigns took up far more of the collection.",
        tags: ["Design teams", "Formats"],
      },
      glance: {
        heading: "Team pricing factors in brief",
        facts: [
          { label: "Area", value: "Pricing" },
          { label: "Based on", value: "Library size and collaboration requirements" },
          { label: "Suits", value: "Creative teams within one organisation" },
          { label: "Wider view", value: "GetSibu Pricing", page: 341 },
        ],
        actions: [{ kind: "route", path: "/pricing", label: "More in Pricing" }]
      },
      sources: [{ kind: "pdf", page: 345 }, { kind: "pdf", page: 346 }, { kind: "pdf", page: 347 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "sizing",
      eyebrow: "Step by step",
      heading: "Sizing a creative library before choosing a plan",
      intro: "A short exercise that gives any pricing conversation firmer ground.",
      steps: [
        { heading: "List every location", body: "Write down where creative files live today, including shared drives, personal folders, supplier deliveries and old project archives, since the forgotten locations are often the largest.", icon: "map" },
        { heading: "Group by format", body: "Estimate how much of the collection is video, images, documents and audio, because heavy formats shape a library’s size far more than their share of the file count suggests.", icon: "layers" },
        { heading: "Allow for duplicates", body: "Expect the same work to exist in several places. Once assets are in a library, duplicate detection can identify identical files and visually equivalent copies, including renamed or re-encoded ones.", icon: "copy", page: 40 },
        { heading: "Decide what stays behind", body: "Agree which older material is worth bringing across and which can remain where it is, so the size you plan around reflects the library you intend to use.", icon: "archive" },
        { heading: "Estimate what new work adds", body: "Look at a typical campaign or production and note roughly what it produces, because a library has to hold the material still to come as well as the archive.", icon: "trend" },
        { heading: "Check against real data", body: "Once assets are in the library, storage analytics give a view of how much space different asset categories consume, which shows how close the original estimate was.", icon: "chart", page: 183 },
      ],
      sources: [{ kind: "pdf", page: 345 }, { kind: "pdf", page: 40 }, { kind: "pdf", page: 183 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "collaboration",
      eyebrow: "Collaboration requirements",
      heading: "The groups of people a collaboration requirement includes",
      tabs: [
        {
          label: "Contributors",
          heading: "People who add and change material",
          icon: "upload",
          body: [
            "Contributors are the designers, editors, photographers and producers who upload work and revise it. They are usually the easiest group to count, and the group whose habits most affect how the library grows and stays in order.",
            [
              "Once the library is running, ",
              { text: "contributor analytics", page: 185 },
              " help an organisation understand who is adding content and taking part in library activity, a useful check on the original description.",
            ],
          ],
          points: ["Usually the easiest group to count", "Shape how the library grows"],
        },
        {
          label: "Reviewers",
          heading: "People whose decisions move work forward",
          icon: "approval",
          body: [
            "Reviewers include creative leads, brand managers and legal or product colleagues who may never upload anything but whose sign-off every piece of work waits for. Teams often leave them out when describing collaboration, then rediscover them when the first approval stalls.",
            [
              "Their part is easier to describe once the approval route is written down, and ",
              { text: "creative approval management", page: 89 },
              " creates a structured process for moving assets from draft to approved status.",
            ],
          ],
          points: ["Often left out of descriptions", "Named by the approval route"],
        },
        {
          label: "Users",
          heading: "People who find and use finished work",
          icon: "users",
          body: [
            "Sales teams, regional marketers and communications colleagues may only ever need approved material, yet they can be the largest group of all. What they need is to reach the right version quickly, not to create anything.",
            [
              "For this group, an ",
              { text: "approved asset library", page: 103 },
              " lets teams create approved-only views, so people can reach content that has completed the required review process.",
            ],
          ],
          points: ["Can be the largest group", "Need finished, approved work"],
        },
        {
          label: "Occasional",
          heading: "Colleagues who join for a project",
          icon: "calendar",
          body: [
            "A colleague seconded for a launch, or a team from another department brought in for a project, collaborates closely for a short time and then moves on. They are easy to overlook in a description of the team and important to plan for, because their involvement needs a clear beginning and end.",
            [
              "Where a role alone would give them too much, ",
              { text: "individual permissions", page: 157 },
              " provide targeted access for a single person.",
            ],
          ],
          points: ["Short, close involvement", "Access with a clear end"],
        },
      ],
      sources: [{ kind: "pdf", page: 345 }, { kind: "pdf", page: 185 }, { kind: "pdf", page: 89 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 157 }, EXPLAINS],
    },
    {
      kind: "checklist",
      id: "weigh",
      eyebrow: "What to weigh",
      heading: "What to weigh when describing a creative team’s needs",
      variant: "chips",
      items: ["Formats that dominate the library", "Archive worth bringing across", "Material each campaign produces", "People who upload and revise", "Reviewers outside the core team", "Colleagues who only use approved work", "Colleagues who join for a project", "How often work goes to review"],
      sources: [{ kind: "pdf", page: 345 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about creative team pricing",
      items: [
        {
          question: "Should library size or collaboration needs carry more weight in creative team pricing?",
          answer: "It depends on the shape of the team. A small group holding years of footage is defined mainly by its library, while a large marketing team reusing a modest set of approved files is defined mainly by how its people collaborate. Describe both, and the description will show which one dominates.",
        },
        {
          question: "How precise does a creative library size estimate need to be before choosing a plan?",
          answer: "Precise enough to tell a small library from a large one, and a collection dominated by documents from one dominated by video. Knowing which formats lead and what will be left behind matters more than an exact total.",
        },
        {
          question: "What should a creative team ask before choosing a plan?",
          answer: "Ask what the plan is based on, how a change in the library or in the people involved would be handled, and what bringing existing material into the library will involve. Keep the answers beside your own description of the team so each can be checked against it.",
        },
      ],
      sources: [{ kind: "pdf", page: 345 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on sizing and pricing a creative library",
      variant: "compact",
      pages: [341, 346, 347, 183, 40, 89],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
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
