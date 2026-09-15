/**
 * 113 · Asset Quality Management — /features/asset-quality-management
 *
 * Angle (cluster: library-maintenance): using approval and metadata workflows to keep a library at a higher
 * quality, meaning content fit to use and described accurately. Creative Library Maintenance (111) owns clutter;
 * Asset Status Management (102) owns workflow states; Brand Guardrail Tags (105) owns requirement tags.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of quality standards for creative libraries; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 113,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Versioning & Asset Management",
      lede: "What quality means for a creative library, how approval and metadata workflows each protect a different part of it, and the standards that help a team keep the library worth trusting.",
      visual: { diagram: "media-library", focus: "image,document" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 113 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A library people can trust to be right",
      body: [
        "Teams can use GetSibu’s approval and metadata workflows to maintain a higher-quality library.",
        "In a creative library, quality is less about the resolution of the files than about whether what people find is fit to use and accurately described. A library can hold excellent work and still be poor if drafts sit beside finished pieces with nothing to tell them apart, or if half the assets carry nothing more than the filename a camera gave them. Colleagues learn fast whether a library can be trusted, and once they stop trusting it they go back to asking people for files.",
        [
          "The two workflows protect different things. The ",
          { text: "creative approval workflow", page: 67 },
          " settles whether content is ready for use, while ",
          { text: "media metadata management", page: 22 },
          " concerns the information, such as EXIF, XMP, creators and custom keywords, that can become part of the asset record.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Content fit to use", "Metadata that matches the file", "Approval workflows", "Metadata workflows", "Standards agreed in advance", "Trust in what search returns"],
      },
      highlight: {
        heading: "In practice",
        body: "A regional marketer looks for event photography and finds approved images tagged with the event and naming the photographer. They use what they find without emailing anyone to check.",
        tags: ["Marketing", "Photography", "Library managers"],
      },
      glance: {
        heading: "Quality management in brief",
        facts: [
          { label: "Relies on", value: "Approval and metadata workflows" },
          { label: "Readiness", value: "Creative Approval Workflow", page: 67 },
          { label: "Metadata", value: "Media Metadata Management", page: 22 },
          { label: "Clutter", value: "Creative Library Maintenance", page: 111 },
        ],
        actions: [{ kind: "route", path: "/features/asset-management", label: "More in Versioning & Asset Management" }]
      },
      sources: [{ kind: "pdf", page: 113 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 111 }, EXPLAINS],
    },
    {
      kind: "before-after",
      id: "managed-quality",
      eyebrow: "The difference it makes",
      heading: "Quality left to chance compared with quality managed through workflows",
      beforeLabel: "Left to chance",
      afterLabel: "Managed through workflows",
      before: ["Drafts and finished work look alike", "Tags and metadata depend on who uploaded", "AI suggestions accepted or ignored at random", "Colleagues double-check by email", "Older files with no creator or context"],
      after: ["Approved content told apart from drafts", "Agreed information added as assets arrive", "Suggested tags reviewed, approved or overridden", "Status and tags answer the question", "Creators and keywords held in the record"],
      sources: [{ kind: "pdf", page: 102 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 22 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "two-workflows",
      eyebrow: "Two workflows, one standard",
      heading: "What approval and metadata workflows each protect",
      tabs: [
        {
          label: "Approval",
          heading: "Is this ready to be used?",
          icon: "approval",
          body: [
            "An approval workflow is the quality gate for the content itself. In GetSibu it lets teams request review, make changes and mark assets as approved.",
            "For quality, the criteria matter more than the mechanics: what a reviewer checks, which kinds of content need review at all, and who is in a position to judge. A quick approval against vague criteria adds a label without adding quality.",
          ],
          points: ["Written criteria for each kind of content", "Reviewers able to judge the work"],
          link: { page: 89, label: "Creative Approval Management" },
        },
        {
          label: "Metadata",
          heading: "Can the right people find and understand it?",
          icon: "tag",
          body: [
            "Metadata quality decides whether an approved asset is ever found, and whether its context survives the people who made it. Some information arrives with the file; the rest has to come from someone who knows the work.",
            ["Where AI helps with tagging, suggestions can be ", { text: "approved in bulk", page: 47 }, " and ", { text: "overridden", page: 48 }, " when they do not fit the team’s taxonomy, so AI can speed tagging up while people keep the final say."],
          ],
          points: ["Embedded information kept with the asset", "Suggestions checked against the taxonomy"],
          link: { page: 31, label: "AI-Assisted Tagging" },
        },
        {
          label: "Together",
          heading: "Why neither workflow is enough on its own",
          icon: "layers",
          body: [
            "An approved asset nobody can find delivers nothing, and a beautifully described draft is a risk waiting to be published. Quality comes from running both: metadata checked as part of review, and approval treated as unfinished until the asset carries the information people need.",
            ["Brand teams can add a further layer, using ", { text: "structured guardrail tags", page: 105 }, " to identify assets that comply with specific organisational requirements."],
          ],
          points: ["Metadata checked during review", "Requirements marked where they matter"],
        },
      ],
      sources: [{ kind: "pdf", page: 67 }, { kind: "pdf", page: 89 }, { kind: "pdf", page: 47 }, { kind: "pdf", page: 48 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 105 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "standards",
      eyebrow: "Setting the standard",
      heading: "Quality standards that teams actually keep",
      items: [
        {
          heading: "Define the minimum information required",
          summary: "A short list of required information beats a long one nobody completes.",
          icon: "text",
          body: [
            "Agree the few details every asset of a given kind must carry: campaign, client and product for imagery; project and cut for video; edition and owner for documents. Anything beyond that is welcome but optional.",
            ["The minimum pays off in discovery, because ", { text: "asset metadata search", page: 23 }, " lets people search available metadata alongside tags and extracted content."],
          ],
          points: ["A few required details per asset type", "Everything else optional"],
        },
        {
          heading: "Use confidence to focus review",
          summary: "Not every suggested tag deserves the same scrutiny.",
          icon: "gauge",
          body: [
            ["Reviewing every AI suggestion with equal care is slow and soon abandoned. ", { text: "AI tag confidence", page: 46 }, " information helps users understand how strongly the system associates a tag with an asset, so reviewers can spend their attention where the association is weakest."],
          ],
        },
        {
          heading: "Write approval criteria down",
          summary: "Reviewers apply criteria consistently only when they share them.",
          icon: "book",
          body: [
            ["If one reviewer checks legal copy and another only looks at layout, the same approval means different things. Written criteria make approvals comparable, and ", { text: "approval history", page: 77 }, " provides a record of review activity that supports accountability when a decision is questioned."],
          ],
        },
        {
          heading: "Sample instead of auditing everything",
          summary: "A small, regular sample shows whether standards are holding.",
          icon: "search",
          body: [
            "Checking a handful of recent assets from each area on a regular basis catches drift early, such as a new contributor skipping required details or a reviewer approving without the agreed checks. A full audit of a large library is rarely finished, and its findings are out of date by the time it is.",
          ],
        },
        {
          heading: "Protect quality during a migration",
          summary: "Moving a library is when metadata is most easily lost.",
          icon: "database",
          body: [
            ["Years of careful tagging and metadata can disappear in a careless move. ", { text: "Metadata preservation", page: 132 }, " means embedded details and a team’s own keywords can be kept during migration, so the quality built up over years travels with the assets."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 23 }, { kind: "pdf", page: 46 }, { kind: "pdf", page: 77 }, { kind: "pdf", page: 132 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about asset quality management",
      items: [
        {
          question: "Does asset quality management involve checking the files themselves?",
          answer: "Partly. Technical checks, such as resolution or format for a particular channel, belong in review criteria where they matter. In a shared library, though, the problems people notice first tend to concern readiness and description rather than the files.",
        },
        {
          question: "Who should be responsible for asset quality in a shared library?",
          answer: "Several people, each for their part: contributors for describing work as they add it, reviewers for judging readiness, and a library owner for setting the standards and checking they hold.",
        },
        {
          question: "How is asset quality management different from creative library maintenance?",
          answer: ["Quality management applies standards as assets move through approval and metadata workflows. ", { text: "Creative library maintenance", page: 111 }, " is the ongoing work of keeping duplicate, obsolete and poorly classified content from cluttering the library."],
        },
        {
          question: "Can quality standards be applied to assets already in the library?",
          answer: ["Yes, gradually. Start with the assets people rely on most, which ", { text: "asset usage tracking", page: 106 }, " can help identify, and bring new material up to standard as it arrives."],
        },
      ],
      sources: [{ kind: "pdf", page: 111 }, { kind: "pdf", page: 106 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on keeping library content fit to use",
      variant: "compact",
      pages: [67, 22, 111, 46, 105, 132],
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
