/**
 * 397 · Scale Your Creative Library — /get-started/scale-your-creative-library
 *
 * Angle (clusters: library-organisation, conversion): a growing library strains search, organisation, storage and
 * governance at once; growth comes as more content, people, teams or clients; some decisions get harder to change
 * with size. Creative Library Management (4) owns how structure changes through stages of growth; Creative Asset
 * Organisation (8) owns taxonomy design.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how creative libraries come under strain as they grow; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 397,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Get Started",
      lede: "What happens to a creative library as campaigns, video, images and documents keep accumulating, the four capabilities that growth puts under pressure, and the decisions worth making while the collection is still small enough to change easily.",
      visual: { diagram: "library-activity", focus: "storage" },
      actions: [
        { kind: "global", cta: "primary" },
        { kind: "page", page: 4, label: "Creative library management" },
      ],
      sources: [{ kind: "pdf", page: 397 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Growth strains a library in four places at once",
      body: [
        "As organisations produce more campaigns, videos, images and documents, their asset libraries become harder to manage. GetSibu provides search, organisation, storage and governance capabilities intended to support libraries through that growth.",
        "The strain of growth is gradual. A library that worked well when it was small does not fail on a particular day; finding things simply takes a little longer each month, a few more near-identical tags appear, storage rises without anyone quite knowing why, and access exceptions pile up. By the time the problem is obvious, fixing it means reorganising a large collection rather than a modest one.",
        [
          "The slow signs of strain can be made visible earlier. ",
          { text: "Library health analytics", page: 196 },
          " can reveal growth, duplicates, inactive content and other organisational patterns, which turns a vague sense that the library is getting harder to use into something a team can act on.",
        ],
      ],
      keyPoints: {
        heading: "Key ideas",
        items: ["Search that holds up in large libraries", "A vocabulary built to scale", "Room for storage to grow", "Governance for more people", "Decisions made while change is cheap"],
      },
      highlight: {
        heading: "In practice",
        body: "A search that once returned a handful of results starts returning long lists of near-identical frames. That is usually the moment a team realises its descriptions, rather than its storage, need attention.",
        tags: ["Search", "Descriptions"],
      },
      glance: {
        heading: "Scaling a library in brief",
        facts: [
          { label: "Area", value: "Get Started" },
          { label: "Under pressure", value: "Search, organisation, storage and governance" },
          { label: "Growth shows as", value: "More content, people, teams or clients" },
          { label: "Taxonomy detail", value: "Creative Asset Organisation", page: 8 },
        ],
      },
      sources: [{ kind: "pdf", page: 397 }, { kind: "pdf", page: 196 }, { kind: "pdf", page: 8 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "four-capabilities",
      eyebrow: "Four capabilities",
      heading: "What a growing library leans on",
      items: [
        {
          heading: "Search that keeps pace",
          body: "In a large collection, search replaces browsing as the main way in, and GetSibu is designed around low-latency search so assets can be retrieved quickly from large libraries.",
          icon: "search",
          points: ["Text search combined with embedding-based retrieval", "Designed with large collections in mind"],
          page: 307,
        },
        {
          heading: "Organisation that stays usable",
          body: "An unstructured tag list becomes harder to use with every term added. Hierarchical tags, synonyms, colours and inheritance give the vocabulary a structure intended to stay useful across thousands or millions of assets.",
          icon: "layers",
          points: ["Structure that deepens rather than sprawls", "Synonyms and colours within one vocabulary"],
        },
        {
          heading: "Storage that can grow",
          body: "The architecture supports large amounts of digital content and storage growth, and resumable and chunked uploads help improve reliability when working with large creative files.",
          icon: "database",
          points: ["Capacity for a growing collection", "Reliable transfers for heavy files"],
          page: 308,
        },
        {
          heading: "Governance for more people",
          body: "Enterprise teams can apply structured access controls across departments, projects and folders, so access can stay organised as the number of people using the library rises.",
          icon: "shield",
          points: ["Access by department, project and folder", "Visibility into important actions on files"],
          page: 169,
        },
      ],
      sources: [{ kind: "pdf", page: 307 }, { kind: "pdf", page: 317 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 308 }, { kind: "pdf", page: 312 }, { kind: "pdf", page: 169 }, { kind: "pdf", page: 119 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "kinds-of-growth",
      eyebrow: "Kinds of growth",
      heading: "Growth arrives in more than one shape",
      tabs: [
        {
          label: "More content",
          heading: "When volume is the pressure",
          icon: "upload",
          body: [
            "A steady rise in uploads is the most obvious kind of growth. Its effects are practical: more near-duplicates, longer result lists and a heavier load on whoever describes new material.",
            [{ text: "Duplicate asset management", page: 112 }, " helps identify unnecessary copies and can support storage optimisation, which matters more with every season of new material."],
          ],
          points: ["Unnecessary copies identified", "Description often the first thing to fall behind"],
        },
        {
          label: "More people",
          heading: "When contributors multiply",
          icon: "users",
          body: [
            "Every new contributor brings habits: their own filenames, tag choices and ideas about where things belong. A library’s conventions are tested far more by new people than by new files.",
            [{ text: "Contributor analytics", page: 185 }, " help organisations understand who is adding content and participating in library activity."],
          ],
          points: ["Conventions tested by newcomers", "Visibility of who contributes"],
        },
        {
          label: "More teams",
          heading: "When other departments join",
          icon: "building",
          body: [
            "A library started by one team eventually attracts others, each bringing material of its own and a different view of who should be able to see it.",
            [{ text: "Manager permissions", page: 155 }, " let managers receive access to specific folders or teams while remaining restricted from areas outside their responsibilities, so the lead of a department that joins later can look after its own area without reaching into everyone else’s."],
          ],
          points: ["Access scoped to a manager’s area", "No blanket access for newcomers"],
        },
        {
          label: "More clients",
          heading: "When an agency takes on clients",
          icon: "briefcase",
          body: [
            "For an agency, growth often means more client environments rather than one ever-larger library.",
            [
              { text: "Agency multi-tenancy", page: 162 },
              " lets agencies manage multiple client libraries from one platform while keeping tenants separate. Each new client then adds an environment of its own rather than more weight inside a single shared library.",
            ],
          ],
          points: ["A separate environment per client", "Growth spread across client libraries"],
        },
      ],
      sources: [{ kind: "pdf", page: 112 }, { kind: "pdf", page: 185 }, { kind: "pdf", page: 155 }, { kind: "pdf", page: 162 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A retail brand’s library after it moves into video and new markets",
      team: "A retail brand’s creative team",
      situation: "A retail brand’s creative team began with product photography for a single online shop. It now produces video for social channels, imagery for several regional sites and seasonal campaigns, and a library designed for one team is starting to strain.",
      steps: [
        { heading: "Seasonal shoots arrive in batches", body: "Each season’s photography and footage is added in large batches, where parallel upload workflows can make batch ingestion more efficient." },
        { heading: "The vocabulary gains depth", body: "The team adds regional and channel terms beneath its existing product tags rather than beside them, so the hierarchy stays readable as it grows." },
        { heading: "Suggestions are reviewed season by season", body: "Suggested tags for each new intake are approved in bulk, and those that do not match the brand’s terms are overridden." },
        { heading: "Markets get their own areas", body: ["Following the approach open to ", { text: "multi-market teams", page: 225 }, ", regional material is separated by market while governance stays central."] },
        { heading: "Storage is planned, not discovered", body: ["Before the next season, ", { text: "library growth reporting", page: 209 }, " helps the team anticipate storage and operational requirements."] },
      ],
      outcome: "The library absorbed new formats and markets gradually, with structure, access and storage adjusted along the way instead of rescued afterwards.",
      link: { page: 231, label: "GetSibu for Retail Brands" },
      sources: [{ kind: "pdf", page: 142 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 47 }, { kind: "pdf", page: 48 }, { kind: "pdf", page: 225 }, { kind: "pdf", page: 209 }, { kind: "pdf", page: 231 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "accordion",
      id: "hard-to-change",
      eyebrow: "Considerations",
      heading: "Decisions that get harder to change as a library grows",
      items: [
        {
          heading: "The top level of the taxonomy",
          summary: "Broad categories are cheap to change early and expensive later.",
          icon: "tag",
          body: [
            "Once thousands of assets carry a set of top-level terms, renaming or merging them touches everything below. The broad groups deserve the most thought while few assets depend on them.",
            ["The idea of a structured classification system is explained in ", { text: "What Is Asset Taxonomy?", page: 375 }, "."],
          ],
        },
        {
          heading: "How access is granted",
          summary: "Exceptions granted person by person become very hard to review.",
          icon: "users",
          body: [
            "Giving individuals access one request at a time feels quick, but in a large library nobody can later explain why each person can see what they see.",
            [{ text: "Team-based access", page: 175 }, " allows organisations to establish consistent permissions across groups of users, which scales better than a growing list of individual grants."],
          ],
        },
        {
          heading: "How clutter is kept down",
          summary: "A habit of small, regular tidying is easier to keep than a large clean-up.",
          icon: "refresh",
          body: [
            "Clutter grows along with the library. Obsolete files and poorly described assets that are a nuisance in a small collection become a real obstacle in a large one.",
            [{ text: "Creative library maintenance", page: 111 }, " helps prevent a library from filling with duplicate, obsolete or poorly classified content."],
          ],
        },
        {
          heading: "Where finished material goes",
          summary: "Agreeing early what happens after a campaign ends keeps older work from burying current work.",
          icon: "archive",
          body: [
            "Without a rule for what happens after a campaign ends, finished material stays in the everyday library indefinitely and every search has to wade through it.",
            [{ text: "Asset lifecycle management", page: 101 }, " can support creative assets from initial upload through review, approval and reuse to eventual deletion."],
          ],
        },
        {
          heading: "Who watches the trend",
          summary: "Someone should be looking at the direction of growth, not only the total.",
          icon: "trend",
          body: [
            "A library’s size at any moment says little. The useful questions are how fast it is growing, in which formats and for which teams.",
            ["Looking at ", { text: "monthly library analytics", page: 190 }, " rather than a single snapshot gives the person responsible a view of longer-term trends in how the library is managed and used."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 375 }, { kind: "pdf", page: 175 }, { kind: "pdf", page: 111 }, { kind: "pdf", page: 101 }, { kind: "pdf", page: 190 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about scaling a creative library",
      items: [
        {
          question: "Does a growing creative library need more people to look after it?",
          answer: ["Growth adds work, but not all of it has to be done by hand. Where ", { text: "automation reduces repetitive tagging, organising and locating", page: 356 }, ", the people looking after the library can give more time to the vocabulary, access and clean-up decisions that growth makes more important."],
        },
        {
          question: "How does AI help a creative library stay organised as it scales?",
          answer: [{ text: "AI library organisation", page: 57 }, " helps teams maintain order as the library grows, rather than requiring a major manual clean-up after every campaign."],
        },
        {
          question: "Does performance matter as much as organisation when a library grows?",
          answer: ["Both matter, because a well-organised library that is slow to search or preview still discourages use. ", { text: "High-performance DAM", page: 320 }, " describes how GetSibu combines fast search, media previews, scalable storage and efficient uploads."],
        },
      ],
      sources: [{ kind: "pdf", page: 356 }, { kind: "pdf", page: 57 }, { kind: "pdf", page: 320 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on growing a creative library",
      variant: "compact",
      pages: [4, 8, 57, 196, 308, 375],
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
