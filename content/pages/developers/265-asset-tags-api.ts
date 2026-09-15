/**
 * 265 · Asset Tags API — /developers/asset-tags-api
 *
 * Angle (cluster api-endpoints): asset tagging workflows integrated into custom applications — which tagging work
 * suits an application, and how tags added there stay inside the library's taxonomy. No claims about how the API
 * handles AI suggestions, hierarchy or synonyms.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of tagging practice and taxonomy governance in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 265,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "API & Developers",
      lede: "Which tagging workflows developers can usefully integrate into custom applications, how to keep the tags added there consistent with the library’s taxonomy, and how to introduce one without unsettling the way assets are organised.",
      visual: { diagram: "api-flow", focus: "tags" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 265 }, { kind: "pdf", page: 8 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Classification added where the knowledge sits",
      body: [
        "Developers can integrate asset tagging workflows into custom applications. Tagging then becomes part of a tool built around a particular job, so the people who understand an asset best can classify it where they already work.",
        "Tags are only as useful as they are consistent. A library in which one person tags “autumn campaign”, another “AW campaign” and a third nothing at all is harder to search than one with fewer, better-kept tags. Custom applications widen the circle of people and systems that can add tags, which is exactly why they must follow the same rules as everyone else.",
        [
          "In GetSibu, ",
          { text: "creative asset organisation", page: 8 },
          " rests on structured folders and scalable taxonomies with hierarchical tags, synonyms, colours and inheritance, while ",
          { text: "AI-assisted tagging", page: 31 },
          " can suggest tags during processing so that teams do not have to classify every file by hand.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Tagging workflows in custom applications", "Tags added where expertise sits", "One taxonomy for every entry point", "People accountable for classification", "Tag use watched over time"],
      },
      highlight: {
        heading: "In practice",
        body: "A rights team records usage restrictions as tags from its own clearance tool, because it understands those terms better than anyone else who opens the library.",
        tags: ["Rights teams", "Brand", "Developers"],
      },
      glance: {
        heading: "Tagging by API in brief",
        facts: [
          { label: "Area", value: "API & Developers" },
          { label: "Brings", value: "Asset tagging workflows into custom applications" },
          { label: "Taxonomy", value: "Creative Asset Organisation", page: 8 },
          { label: "Part of", value: "GetSibu API", page: 261 },
        ],
        actions: [{ kind: "route", path: "/developers", label: "More in Developers" }]
      },
      sources: [{ kind: "pdf", page: 265 }, { kind: "pdf", page: 8 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 261 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "workflows",
      eyebrow: "Where tagging fits",
      heading: "Tagging work that suits a custom application",
      tabs: [
        {
          label: "Specialists",
          heading: "Classification by the people who know most",
          icon: "user",
          body: [
            "Some tags depend on expertise the library team does not have: usage restrictions understood by a rights team, technical grades judged by a post-production supervisor, product details known to merchandisers. An application built for that group lets them tag from inside their own process.",
            ["", { text: "Brand guardrail tags", page: 105 }, " show the pattern well, since brand teams can use structured tags to identify assets that comply with specific organisational requirements."],
          ],
          points: ["Expertise applied at the source", "Structured tags for requirements"],
        },
        {
          label: "Upstream systems",
          heading: "Tags drawn from where the work was commissioned",
          icon: "workflow",
          body: [
            "A campaign planning tool already knows the campaign, market and channel a piece of work was made for. Carrying that knowledge into tags spares someone from reconstructing it months later, when memories have faded.",
            "The practical test is whether the upstream system’s terms map cleanly onto the library’s taxonomy. If they do not, fix the mapping before connecting anything.",
          ],
          points: ["Context captured at commissioning", "Terms mapped before connecting"],
        },
        {
          label: "Checking tools",
          heading: "Focused tools for occasional taggers",
          icon: "check",
          body: [
            "Classification is sometimes a task of its own: a delivery of new material to check, or older assets lacking a tag a new campaign relies on. A simple application showing one asset at a time, with only the relevant choices, suits people who tag now and then.",
            "Keep such a tool deliberately narrow. The aim is a few careful decisions per asset, not a second library.",
          ],
          points: ["One asset, a few choices", "Built for occasional use"],
        },
      ],
      sources: [{ kind: "pdf", page: 265 }, { kind: "pdf", page: 105 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "taxonomy",
      eyebrow: "Considerations",
      heading: "Keeping an application’s tags inside the taxonomy",
      items: [
        {
          heading: "Offer existing tags, not a blank box",
          summary: "Free typing is how tag vocabularies fragment.",
          icon: "tag",
          body: [
            "Present choices drawn from the agreed vocabulary rather than inviting people to type whatever comes to mind. When someone needs a tag that does not exist, send the request to whoever looks after the taxonomy instead of creating it on the spot.",
          ],
        },
        {
          heading: "Respect the hierarchy",
          summary: "A tag’s position in a hierarchy carries meaning.",
          icon: "layers",
          body: [
            "In a hierarchical taxonomy, a specific tag sits beneath a broader one, such as a product line beneath a brand. An application that ignores that structure can add tags that are valid on paper yet sit where nobody thinks to look for them.",
          ],
        },
        {
          heading: "Keep human judgement where it counts",
          summary: "Rules built into software still need someone accountable for them.",
          icon: "approval",
          body: [
            "An application that classifies by rule, such as tagging every delivery from one supplier with a product line, will sometimes be wrong. Someone should own the rules it follows and look over its work from time to time, so mistakes are caught before they spread through search.",
          ],
        },
        {
          heading: "Decide who may tag",
          summary: "Changing a tag is a form of editing.",
          icon: "lock",
          body: [
            ["Settling who may upload, edit, approve, download and manage assets is the business of ", { text: "creative asset governance", page: 114 }, ". Treat tagging through an application as seriously as editing in the library, and agree whose authority the application acts under."],
          ],
        },
        {
          heading: "Watch how tags are used",
          summary: "Usage shows whether a vocabulary is working.",
          icon: "chart",
          body: [
            ["", { text: "Tag analytics", page: 186 }, " identify frequently used or searched tags, which helps a team see whether the tags an application adds are the ones colleagues actually look for."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 114 }, { kind: "pdf", page: 186 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "introduce",
      eyebrow: "Step by step",
      heading: "Introducing a tagging workflow in a custom application",
      steps: [
        { heading: "Choose one tag family", body: "Begin with a single family of tags, such as usage restrictions or product lines, rather than the entire vocabulary.", icon: "tag" },
        { heading: "Agree the terms", body: "Settle the allowed tags and what each one means with the person responsible for the taxonomy.", icon: "book" },
        { heading: "Confirm what can be built", body: "Check in the API documentation how tagging can be carried out from an application before designing the workflow around it.", icon: "code" },
        { heading: "Pilot with specialists", body: "Let the people who hold the knowledge use it on real assets, and note wherever the choices confuse them.", icon: "users" },
        { heading: "Widen gradually", body: "Add a second family of tags only once the first is applied consistently and the people using it trust the choices on offer.", icon: "trend" },
      ],
      sources: [{ kind: "pdf", page: 273 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about the asset tags API",
      items: [
        {
          question: "Can AI-suggested tags be reviewed from a custom tagging application?",
          answer: ["Confirm that in ", { text: "API documentation", page: 273 }, " before planning around it. Within the library, suggested tags can be reviewed, approved or overridden by authorised users."],
        },
        {
          question: "Does a custom tagging application take over the library team’s role?",
          answer: "No. The library team still owns the vocabulary and its structure, while the application lets other people apply it. Keeping that division clear is what stops tags from multiplying.",
        },
        {
          question: "How should a custom tagging application handle tags the library team retires?",
          answer: "Stop offering them as soon as they are retired, so nobody keeps applying terms the taxonomy has moved away from. Agree in advance how the application’s owners will learn about such changes.",
        },
      ],
      sources: [{ kind: "pdf", page: 273 }, { kind: "pdf", page: 31 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on tags and the GetSibu API",
      variant: "compact",
      pages: [261, 8, 31, 105, 186, 264],
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
