/**
 * 48 · AI Tag Override — /features/ai-tag-override
 *
 * Angle (cluster ai-tagging): overriding AI tags that do not match the team's intended taxonomy — the
 * kinds of mismatch, when to override and what repeated overrides reveal. Approval (47) and confidence
 * (46) are siblings.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of taxonomy practice and tag correction in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 48,
  metaDescription: "AI recommendations in GetSibu are not permanent: authorised users can override tags whenever the automatic classification does not match the team’s taxonomy.",
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "AI",
      lede: "Understand why AI-generated tags stay open to correction, the typical ways a suggestion can miss your taxonomy, and how overriding those tags keeps a library speaking your team’s language.",
      visual: { diagram: "ai-review", focus: "override" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 48 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "The team’s vocabulary has the final word",
      body: [
        "In GetSibu, AI recommendations are not permanent. Whenever an automatically generated classification does not match the taxonomy a team intends to use, authorised users can override the tag.",
        "A taxonomy is an agreement about words. It records that the team says “lifestyle” rather than “people using the product”, that one product line has its own name, and that a campaign is filed under its internal code. A description generated from what an asset shows does not carry that agreement and may use general words, so even a sensible suggestion can be the wrong word for a particular library.",
        [
          "Left uncorrected, those mismatches split the library in two: some assets described in the team’s terms, others in the analysis’s. Overriding is how the two are brought back together, against the structure described in ",
          { text: "What Is Asset Taxonomy?", page: 375 },
          " and the ",
          { text: "hierarchical tags and synonyms", page: 8 },
          " a team uses to organise its work.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Recommendations are not permanent", "The intended taxonomy as the reference", "Overrides by authorised users", "General terms versus the team’s terms", "Recurring overrides reveal gaps"],
      },
      highlight: {
        heading: "In practice",
        body: "A suggestion describes a photograph as “office”. The team files that material as “workspace”, so a library manager overrides the tag and the image joins the rest of the set.",
        tags: ["Taxonomy", "Library managers", "Search"],
      },
      glance: {
        heading: "Tag override in brief",
        facts: [
          { label: "Area", value: "AI" },
          { label: "Used when", value: "A tag does not match the intended taxonomy" },
          { label: "Done by", value: "Authorised users" },
          { label: "Measured against", value: "Creative Asset Organisation", page: 8 },
        ],
        actions: [{ kind: "route", path: "/features/ai", label: "More in AI" }]
      },
      sources: [{ kind: "pdf", page: 48 }, { kind: "pdf", page: 375 }, { kind: "pdf", page: 8 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "mismatches",
      eyebrow: "Kinds of mismatch",
      heading: "Five ways a suggestion can miss the taxonomy",
      intro: "Each calls for a slightly different judgement about whether and how to correct it.",
      columns: ["What happened", "Why it matters", "What the correction restores"],
      rows: [
        { label: "Too general", cells: ["“Shoe” where the team names the model", "Searches for the model miss the file", "The specific term people search with"] },
        { label: "Another word for it", cells: ["“Product photo” where the team says “packshot”", "One kind of asset split across two terms", "A single agreed term"] },
        { label: "Wrong category", cells: ["An event photograph classed as product imagery", "The asset is missing where people browse for it", "Placement the team would choose"] },
        { label: "Misidentified", cells: ["A vase described as a lamp", "The asset surfaces in the wrong searches", "A description of what is really there"] },
        { label: "True but beside the point", cells: ["A background detail tagged as if it were the subject", "Results fill with loosely related assets", "Tags that reflect why the asset exists"] },
      ],
      sources: [{ kind: "pdf", page: 48 }, { kind: "pdf", page: 42 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "Outdoor gear imagery brought into line with product names",
      team: "An e-commerce team",
      situation: "An e-commerce team selling outdoor equipment uploads a season of product and lifestyle photography. Its taxonomy names every product line, but the suggested tags describe items in everyday words such as “backpack” and “jacket”.",
      steps: [
        { heading: "The suggestions are read against the taxonomy", body: "Once processing is complete, a merchandiser compares the suggested tags with the team’s list of product lines and approved terms." },
        { heading: "General terms are corrected", body: "Where a suggestion names only the kind of item, an authorised user overrides it with the product line the team actually searches for." },
        { heading: "A misplaced set is fixed", body: ["A batch of lifestyle shots has been treated as studio product imagery, so its ", { text: "classification", page: 42 }, " is corrected to match how the team groups its material."] },
        { heading: "A pattern is noticed", body: "The same everyday word has to be overridden on asset after asset in one product range, so the team adds it to its taxonomy notes as a known alternative for the product line." },
        { heading: "Search behaviour is checked", body: ["Later, ", { text: "most searched tags", page: 193 }, " show whether people are looking for the product line names the team chose."] },
      ],
      outcome: "The season’s photography is described in the same terms as the product catalogue, and the team now knows which everyday words colleagues outside merchandising are likely to reach for.",
      link: { page: 230, label: "GetSibu for E-Commerce Brands" },
      sources: [{ kind: "pdf", page: 48 }, { kind: "pdf", page: 42 }, { kind: "pdf", page: 193 }, { kind: "pdf", page: 230 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "accordion",
      id: "overriding-well",
      eyebrow: "Considerations",
      heading: "Making overrides consistent rather than personal",
      items: [
        {
          heading: "Override against a written reference",
          summary: "Corrections are only consistent if everyone corrects towards the same list.",
          icon: "book",
          body: [
            "Two reviewers with different habits can each override conscientiously and still leave the library inconsistent. A short written list of preferred terms, with the words they replace, gives every correction the same target.",
          ],
        },
        {
          heading: "Tell incomplete from incorrect",
          summary: "A correct general tag may only need a specific one beside it.",
          icon: "tag",
          body: [
            "A suggestion of “dog” on a photograph of a particular breed is not wrong; it is simply less precise than the team needs. Whether to override it or keep it alongside a precise term depends on how the taxonomy is structured.",
            "Where broad and narrow terms are meant to coexist, keeping the general word can help people who search broadly, while the specific tag serves those who know exactly what they want.",
          ],
        },
        {
          heading: "Treat repeated overrides as a signal",
          summary: "Correcting the same suggestion again and again points to a vocabulary gap.",
          icon: "trend",
          body: [
            "If the same suggested word needs overriding across many assets, it is probably how people outside the core team describe that material too. That is worth recording as an alternative term, and worth considering when naming new categories.",
            "A list of such words is also useful to whoever writes briefs or names new product lines, because it records how the material is described beyond the team that owns the taxonomy.",
          ],
        },
        {
          heading: "Revisit tags when the taxonomy changes",
          summary: "A renamed product or a rebrand can turn approved tags into mismatches.",
          icon: "refresh",
          body: [
            "Taxonomies evolve. When a product line is renamed or a campaign structure changes, tags that were right last year can stop matching the intended vocabulary.",
            "Because approved tags remain open to correction, a change in the taxonomy can be followed by a deliberate review of the areas it affects, starting with the material people search for most.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 48 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about AI tag override",
      items: [
        {
          question: "Is every AI tag override a sign that the analysis got it wrong?",
          answer: "Not always. Many overrides replace a reasonable general word with the team’s own term, which says more about how specific the taxonomy is than about the analysis. A misidentified subject is the kind of override that points to a genuine error.",
        },
        {
          question: "Is it worth overriding an AI tag on an old asset nobody seems to use?",
          answer: "Usually, if the correction is quick. Archive material is often exactly what a future brief turns up, and a mismatched tag is what would stop it being found then.",
        },
        {
          question: "Who should make AI tag overrides that affect many assets?",
          answer: ["Someone who owns the taxonomy or works closely with it. Correcting one photograph carries little risk, but replacing a term across a product range changes what many colleagues will find, so it deserves the care of an edit to the taxonomy itself. ", { text: "Creative asset governance", page: 114 }, " is where an organisation settles who may edit and manage its assets."],
        },
        {
          question: "Why does overriding a mismatched AI tag matter for search?",
          answer: ["Because tags are one of the signals ", { text: "creative asset search", page: 11 }, " draws on. A corrected tag lets an asset surface for the terms your team actually uses."],
        },
      ],
      sources: [{ kind: "pdf", page: 48 }, { kind: "pdf", page: 114 }, { kind: "pdf", page: 11 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on keeping tags on your terms",
      variant: "compact",
      pages: [375, 8, 42, 47, 46, 193],
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
