/**
 * 341 · GetSibu Pricing — /pricing (section root, FRAMED)
 *
 * Framed: the PDF paragraph states plans and a pricing model that are not confirmed, so it is neither quoted nor
 * paraphrased, and no plan, price, trial, seat, quota or usage allowance is named. The page explains how to evaluate
 * the cost of a creative asset library, using the publishable pages 345 (library size and collaboration), 346
 * (agency factors), 347 (cost alongside savings), 359 (business case) and 360 (why invest). Section root: the
 * template lists the child topics, so there is no related strip and no list of child pages.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how organisations evaluate the cost of a creative asset library; states no GetSibu capability beyond the cited pages, names no plan or price and supplies no figures." } as const;

const page: PageContent = {
  page: 341,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "centered",
      eyebrow: "Pricing",
      lede: "How to think about the cost of a creative asset library before any figures are discussed: what to establish about your own team first, how the questions change for agencies, and how to set cost against what a library saves.",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 345 }, { kind: "pdf", page: 346 }, { kind: "pdf", page: 347 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Understanding your own needs before comparing prices",
      body: [
        "The cost of a creative asset library is easiest to judge once an organisation knows what it needs the library to do, and hardest to judge from a figure on its own. What is paid for a platform is only one part of the picture, and the other parts tend to sit in other budgets and other people’s time.",
        [
          "The questions differ from one kind of organisation to another. ",
          { text: "Creative team pricing", page: 345 },
          " looks at a team inside one organisation, ",
          { text: "DAM pricing for agencies", page: 346 },
          " at agencies serving several clients, and ",
          { text: "enterprise asset management cost", page: 347 },
          " at weighing cost across a large organisation, where a ",
          { text: "DAM business case", page: 359 },
          " brings the evidence together for the people who approve the spend.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Describe the library before comparing prices", "Moving-in effort counts as cost", "Upkeep counts as cost", "The cost of staying put", "A business case built on evidence"],
      },
      glance: {
        heading: "Pricing questions in brief",
        facts: [
          { label: "Area", value: "Pricing" },
          { label: "Starts from", value: "A description of your own needs" },
          { label: "Weighed against", value: "Savings in storage, productivity, collaboration and administration" },
          { label: "Case for investment", value: "Why Invest in GetSibu", page: 360 },
        ],
      },
      sources: [{ kind: "pdf", page: 345 }, { kind: "pdf", page: 346 }, { kind: "pdf", page: 347 }, { kind: "pdf", page: 359 }, { kind: "pdf", page: 360 }, EXPLAINS],
    },
    {
      kind: "layers",
      id: "evaluation-layers",
      eyebrow: "How the questions fit together",
      heading: "The layers of a creative library cost evaluation",
      intro: "Each layer builds on the one before, so the early answers shape the later questions.",
      layers: [
        { label: "Fit", body: "What the library must do for the people who use it: the kinds of material it holds, and how people contribute to that material, review it and reuse it." },
        { label: "Structure", body: "Whether the organisation needs separate environments, as agencies serving several clients often do, and what each of those environments must provide." },
        { label: "Value", body: "What changes once the library is in use, such as less time lost to searching and recreating files and less confusion over versions, set against what the library costs." },
        { label: "Case", body: "How the evidence is put to the people who approve the spend, built around faster discovery, improved organisation, stronger governance and more efficient collaboration." },
      ],
      sources: [{ kind: "pdf", page: 345 }, { kind: "pdf", page: 346 }, { kind: "pdf", page: 348 }, { kind: "pdf", page: 359 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "before-comparing",
      eyebrow: "Before comparing",
      heading: "What to understand before comparing DAM prices",
      items: [
        {
          heading: "Compare descriptions, not headline figures",
          summary: "Prices are only comparable when they describe the same library and the same work.",
          icon: "search",
          body: [
            "Before setting offers side by side, check that each is answering the same description of your needs: your library, your people and what the library must do for them. Differences in what is included, from the effort of moving in to the work of keeping the library organised, can make a lower figure the more expensive choice once the work is done.",
          ],
        },
        {
          heading: "Count the people who look after the library",
          summary: "A library needs an owner, and the owner’s time is part of its cost.",
          icon: "user",
          body: [
            "Someone has to look after the structure, answer colleagues’ questions and keep descriptions consistent as material arrives. Leaving that time out of a comparison makes every option look cheaper than it will be, and naming the owner early is part of an honest estimate.",
          ],
        },
        {
          heading: "Count the effort of moving in",
          summary: "A library’s cost includes the work of bringing existing material into it.",
          icon: "upload",
          body: [
            [
              "Moving files, keeping their metadata, mapping folders and helping people change habits all take time, whichever platform is chosen. Planning keeps that effort manageable: ",
              { text: "DAM migration strategy", page: 289 },
              " begins with understanding existing storage, metadata, permissions and organisational requirements.",
            ],
          ],
        },
        {
          heading: "Count the cost of staying put",
          summary: "Doing nothing has a price too, even when no invoice arrives.",
          icon: "trend",
          body: [
            [
              "Scattered storage, duplicated files and time lost searching are real costs that simply sit in other budgets. The argument on the other side is set out in ",
              { text: "Why Invest in GetSibu", page: 360 },
              ": one platform combining AI-powered discovery, centralised asset management, collaboration, analytics and security for creative workflows.",
            ],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 289 }, { kind: "pdf", page: 360 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about weighing the cost of a creative library",
      items: [
        {
          question: "How can the cost of a creative asset library be justified to decision-makers?",
          answer: [
            "With evidence from your own teams rather than borrowed figures. ",
            { text: "Creative workflow ROI", page: 348 },
            " looks at time lost to searching, recreating files and version confusion, and ",
            { text: "asset discovery ROI", page: 349 },
            " at how faster discovery can help creative professionals spend more of their time creating.",
          ],
        },
        {
          question: "How can a small team keep a cost evaluation in proportion?",
          answer: "Keep the description short and concentrate on the work the library must support now, such as finding approved files or running reviews. A small team gains little from modelling far ahead, and the time an oversized evaluation takes is a cost in itself.",
        },
        {
          question: "Who should take part in evaluating the cost of a creative asset library?",
          answer: "The budget holder, plus the people who know how material is really used: a producer who reviews every cut, a regional marketer who needs approved files at short notice, and whoever will administer the library. Estimates made by budget holders alone tend to miss requirements that only emerge in daily work.",
        },
      ],
      sources: [{ kind: "pdf", page: 348 }, { kind: "pdf", page: 349 }, EXPLAINS],
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
