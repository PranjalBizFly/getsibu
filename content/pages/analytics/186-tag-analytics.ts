/**
 * 186 · Tag Analytics — /analytics/tag-analytics
 *
 * Angle (cluster: library-analytics): tags applied and tags searched as evidence of how the library is discovered,
 * and how that evidence feeds back into the taxonomy. Most Searched Tags (193) owns search demand on its own;
 * Creative Asset Organisation (8) owns the taxonomy capability; AI-Assisted Tagging (31) owns suggestions.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of maintaining a taxonomy from tag activity; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 186,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Analytics",
      lede: "See which tags your team uses and searches for most, what the gap between the two says about how your library is discovered, and how to feed that evidence back into the taxonomy.",
      visual: { diagram: "library-activity", focus: "tags" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 186 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Tags as evidence of how people find things",
      body: [
        "Tag analytics identify frequently used or searched tags, helping teams understand how their library is being discovered. Tags are the vocabulary a library shares, and this is the view of which parts of that vocabulary people truly rely on.",
        "Every taxonomy begins as an educated guess. Its designers choose terms that make sense to them, then colleagues arrive with their own language: “hero shot” where the taxonomy says “key visual”, or a product’s working name where the catalogue uses its official one. Before long, a few tags carry most of the load, others are applied diligently and seldom searched, and the distance between the two is where assets go missing.",
        [
          "Tag analytics sit where organisation meets search. ",
          { text: "Creative asset organisation", page: 8 },
          " can draw on hierarchical tags, synonyms, colours and inheritance, and ",
          { text: "AI-assisted tagging", page: 31 },
          " can suggest tags during asset processing; tag analytics show which of the resulting terms the team actually depends on.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Tags applied most often", "Tags searched most often", "The gap between applying and searching", "Synonyms for the words people use", "A taxonomy that keeps adapting"],
      },
      highlight: {
        heading: "In practice",
        body: "A brand team sees that one broad tag is applied to nearly everything yet rarely searched, and divides it into narrower child tags that colleagues do look for.",
        tags: ["Taxonomy", "Search", "Brand"],
      },
      glance: {
        heading: "Tag analytics in brief",
        facts: [
          { label: "Area", value: "Analytics" },
          { label: "Shows", value: "Frequently used or searched tags" },
          { label: "Search demand", value: "Most Searched Tags", page: 193 },
          { label: "Builds on", value: "Creative Asset Organisation", page: 8 },
        ],
        actions: [{ kind: "page", page: 181, label: "Creative Asset Analytics" }]
      },
      sources: [{ kind: "pdf", page: 186 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 193 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "use-and-search",
      eyebrow: "Reading the signal",
      heading: "What applying and searching together can suggest about a tag",
      columns: ["What it suggests", "A sensible response"],
      rows: [
        { label: "Applied often, searched often", cells: ["A core term the library depends on", "Keep it stable and clearly defined"] },
        { label: "Applied often, searched rarely", cells: ["A label too broad to narrow results", "Divide it into more specific child tags"] },
        { label: "Applied rarely, searched often", cells: ["Demand the tagging does not yet meet", "Apply it to the assets that match"] },
        { label: "Seldom applied or searched", cells: ["A term that may have outlived its use", "Merge it, retire it or keep it for a niche"] },
      ],
      sources: [{ kind: "pdf", page: 186 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "routine",
      eyebrow: "Step by step",
      heading: "Feeding tag analytics back into the taxonomy",
      intro: "A light routine that can be repeated keeps the vocabulary close to how colleagues search.",
      steps: [
        { heading: "Start with the busiest tags", body: "Begin with the tags used or searched most, because changes there affect the largest share of everyday discovery.", icon: "chart" },
        { heading: "Compare applying with searching", body: "Look for terms applied far more often than they are searched, and for the reverse; each kind of mismatch calls for a different fix.", icon: "filter" },
        { heading: "Add synonyms", body: "Where colleagues reach for another word, recording it as a synonym of the existing tag is usually better than creating a competing one.", icon: "text", page: 8 },
        { heading: "Restructure broad tags", body: "Hierarchical tags let a broad label sit above narrower ones, so a catch-all term can be divided into more precise ones.", icon: "layers" },
        { heading: "Correct suggestions that miss", body: "When AI suggestions keep proposing a term the team does not use, authorised users can override them to match the intended taxonomy.", icon: "sparkles", page: 48 },
        { heading: "Look again later", body: "Once the changes have settled, return to tag activity to see whether the new terms are being applied and searched.", icon: "refresh" },
      ],
      sources: [{ kind: "pdf", page: 186 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 48 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "limits",
      eyebrow: "Considerations",
      heading: "What tag activity does not show on its own",
      items: [
        {
          heading: "Search reaches beyond tags",
          summary: "People also find assets through filenames, extracted text and descriptions in their own words.",
          icon: "search",
          body: [
            "A tag that is rarely searched may still be earning its keep, because discovery draws on several sources of information at once.",
            [{ text: "Natural language asset search", page: 18 }, " lets people describe assets the way they remember them, so some discovery never passes through a tag at all."],
          ],
        },
        {
          heading: "Frequent is not the same as accurate",
          summary: "A tag that is applied everywhere can still be applied wrongly.",
          icon: "check",
          body: [
            "Frequent use shows reliance, not correctness. Spot-check the assets behind the busiest tags from time to time, especially where many people apply them.",
            ["Where tags came from AI suggestions, ", { text: "tag confidence information", page: 46 }, " helps show how strongly the system associates each tag with an asset."],
          ],
        },
        {
          heading: "Renaming breaks habits",
          summary: "Changing a term people rely on can make assets harder to find for a while.",
          icon: "megaphone",
          body: [
            "Colleagues learn the vocabulary as it stands. Announce significant changes, keep familiar terms as synonyms where that makes sense, and avoid reshaping the busiest tags in the middle of a campaign.",
          ],
        },
        {
          heading: "Some tags exist to control use",
          summary: "Guardrail tags matter for being correct, not for being popular.",
          icon: "shield",
          body: [
            [{ text: "Brand guardrail tags", page: 105 }, " identify assets that comply with specific organisational requirements. Their value lies in accurate application, even when nobody searches for them often."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 18 }, { kind: "pdf", page: 11 }, { kind: "pdf", page: 46 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 105 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about tag analytics",
      items: [
        {
          question: "In tag analytics, what separates a frequently used tag from a frequently searched one?",
          answer: "A frequently used tag has been applied to many assets; a frequently searched tag is one people often look for. Comparing the two can suggest whether the vocabulary on the assets matches the vocabulary of the people searching.",
        },
        {
          question: "How do tag analytics differ from the most-searched tags view?",
          answer: ["Tag analytics cover the tags people use as well as those they search for, which makes them a guide to the taxonomy. ", { text: "Most-searched tags", page: 193 }, " concentrate on search alone, as insight into what users are frequently looking for."],
        },
        {
          question: "Who should act on what tag analytics reveal?",
          answer: "Whoever owns the taxonomy, working with a few regular searchers from different teams. Changes to a shared vocabulary land better when the people who rely on it have had a say.",
        },
        {
          question: "Can tag analytics make library search more effective?",
          answer: "Indirectly. The analytics do not change search themselves, but the improvements they prompt, such as synonyms and more specific tags, give search better information to work with.",
        },
      ],
      sources: [{ kind: "pdf", page: 186 }, { kind: "pdf", page: 193 }, { kind: "pdf", page: 8 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on tags and discovery",
      variant: "compact",
      pages: [193, 8, 31, 48, 105, 18],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Scale Your Creative Library",
      conversionPage: 397,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 397 }],
    },
  ],
};

export default page;
