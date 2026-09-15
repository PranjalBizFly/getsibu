/**
 * 59 · AI Creative Operations — /features/ai-creative-operations
 *
 * Angle (cluster ai-approach): production and marketing teams spending less time managing files and more
 * time using them in creative work. The operational layer is 54, the tasks automated are 55, the stance is 60.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how production and marketing teams spend time on file management; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 59,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "AI",
      lede: "Where production and marketing teams lose time to managing files, and how AI-assisted creative operations help move that time back into the work those files exist for.",
      visual: { diagram: "ingest-pipeline", focus: "processing" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 59 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Less effort on the files, more on the work",
      body: [
        "AI creative operations in GetSibu are about where production and marketing teams spend their effort. The intent is for them to spend less time managing files and more time using those files in actual creative work.",
        "File management is the work nobody lists in a job description. It is the producer searching three drives for the latest cut, the marketer answering “do we have a photo of…?” from memory, the designer renaming exports so a colleague can tell them apart, and everyone checking which version was approved. Each instance is small. Together they fill the gaps in a week that were meant for editing, writing and designing.",
        [
          "Reducing that overhead is the thread running through ",
          { text: "creative productivity", page: 351 },
          ": by reducing manual organisation and asset-search work, GetSibu can help teams focus on higher-value creative activities. For leaders, ",
          { text: "creative operations analytics", page: 195 },
          " help show how efficiently the organisation’s asset library is being used.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["File management as hidden work", "Production and marketing teams", "Time moved back into creative work", "Fewer requests answered from memory", "Operations seen through analytics"],
      },
      highlight: {
        heading: "In practice",
        body: "A marketer who once waited for a producer to dig out a still now finds it in the library, and the producer keeps editing.",
        tags: ["Producers", "Marketers", "Operations leads"],
      },
      glance: {
        heading: "Creative operations in brief",
        facts: [
          { label: "Area", value: "AI" },
          { label: "For", value: "Production and marketing teams" },
          { label: "Aims to reduce", value: "Time spent managing files" },
          { label: "Measured through", value: "Creative Operations Analytics", page: 195 },
        ],
        actions: [{ kind: "route", path: "/features/ai", label: "More in AI" }]
      },
      sources: [{ kind: "pdf", page: 59 }, { kind: "pdf", page: 351 }, { kind: "pdf", page: 195 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "teams",
      eyebrow: "By team",
      heading: "How the overhead looks in production and in marketing",
      tabs: [
        {
          label: "Production",
          heading: "Footage, versions and the hunt for the right file",
          icon: "film",
          body: [
            "Production overhead is dominated by volume. Shoots produce far more material than any edit uses, cuts multiply during review, and deliverables go out in many formats. Much of a coordinator’s day can disappear into locating, checking and moving files.",
            ["As described under ", { text: "production productivity", page: 353 }, ", production teams can reduce the time they spend reviewing large amounts of footage and searching through disconnected storage. ", { text: "Production collaboration", page: 81 }, " then keeps comments, versioning and timeline review on the assets themselves."],
          ],
          points: ["Less time locating footage", "Review kept on the asset"],
        },
        {
          label: "Marketing",
          heading: "Requests, approvals and campaign material",
          icon: "megaphone",
          body: [
            "Marketing overhead is dominated by requests. Partners, regions and colleagues ask for the current logo, the approved product image or last year’s launch film, and each request interrupts somebody.",
            ["With ", { text: "marketing productivity", page: 352 }, ", marketing teams can reduce the time required to locate approved campaign content and supporting creative materials, which can let more requests be answered by the person asking."],
          ],
          points: ["Approved content easier to reach", "Fewer interruptions for the creative team"],
        },
        {
          label: "Operations",
          heading: "Making the whole system more predictable",
          icon: "gauge",
          body: [
            ["Operations leads care less about any single file than about flow. ", { text: "Creative operations efficiency", page: 355 }, " holds that centralised search, metadata, approvals and analytics can make creative operations more predictable."],
            "Predictability is what lets a team plan: finding material stops depending on who happens to be available to ask.",
          ],
          points: ["Flow over individual files", "Planning based on how the library behaves"],
        },
      ],
      sources: [{ kind: "pdf", page: 353 }, { kind: "pdf", page: 81 }, { kind: "pdf", page: 352 }, { kind: "pdf", page: 355 }, EXPLAINS],
    },
    {
      kind: "before-after",
      id: "before-after",
      heading: "File-management chores before and after AI-assisted operations",
      beforeLabel: "Managing files by hand",
      afterLabel: "AI-assisted creative operations",
      before: ["Searching drive after drive for a file", "Typing descriptions for every upload", "Answering asset requests from memory", "Checking by filename which version is final"],
      after: ["One search across the creative library", "Suggested tags reviewed instead of typed", "Colleagues finding material themselves", "Previous versions retained within one asset"],
      sources: [{ kind: "pdf", page: 16 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 24 }, { kind: "pdf", page: 91 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A product launch without a stream of file requests",
      team: "An in-house brand team",
      situation: "An in-house brand team is launching a new product. Production is finishing the launch film and stills while marketing prepares channel assets, and in past launches the two groups spent the final week passing files back and forth.",
      steps: [
        { heading: "Production shares as it goes", body: ["Updated cuts are ", { text: "replaced in place", page: 93 }, ", with earlier versions kept in the asset record, so marketing no longer has to ask which file is the newest."] },
        { heading: "Marketing looks before asking", body: "Marketers search the library for the stills they need instead of messaging the producer, reaching material through suggested tags the production coordinator reviewed." },
        { heading: "Questions stay on the asset", body: ["When a still needs retouching, the marketer ", { text: "comments directly on it", page: 62 }, ", so the request is attached to the file it concerns."] },
        { heading: "Only approved work goes out", body: ["Channel teams draw from an ", { text: "approved-only view", page: 103 }, ", so drafts from the final week do not reach partners."] },
      ],
      outcome: "Launch week is spent finishing the film and the campaign, not locating, resending and double-checking files.",
      link: { page: 222, label: "GetSibu for In-House Creative Teams" },
      sources: [{ kind: "pdf", page: 93 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 47 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 222 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about AI creative operations",
      items: [
        {
          question: "Where does AI sit in creative operations alongside review and approval?",
          answer: ["AI takes on groundwork, such as suggesting tags and processing assets for search, within an ", { text: "AI creative workflow", page: 54 }, " that runs from ingestion through organisation and discovery. Reviewing, discussing and approving the work remain decisions for people."],
        },
        {
          question: "How do production and marketing share material under AI creative operations?",
          answer: ["By working from the same library. GetSibu gives creative, marketing, production and brand teams a ", { text: "shared source of truth", page: 10 }, ", with permissions and approval workflows helping ensure people use the right content."],
        },
        {
          question: "Which file-management task is usually worth tackling first in creative operations?",
          answer: ["Usually the requests that interrupt the people making the work. When colleagues can find existing material for themselves, makers get their time back, and ", { text: "faster asset discovery", page: 349 }, " can help creative professionals spend more time creating and less time searching through folders."],
        },
        {
          question: "Do AI creative operations change who is responsible for the library?",
          answer: "Not by themselves. Someone still needs to own the vocabulary, the review routine and the rules for what counts as approved; what changes is how much routine work lands on those people, not whether their roles are needed.",
        },
      ],
      sources: [{ kind: "pdf", page: 54 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 10 }, { kind: "pdf", page: 349 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on AI and creative operations",
      variant: "compact",
      pages: [351, 352, 353, 195, 54, 60],
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
