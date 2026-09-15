/**
 * 35 · AI Mood Detection — /features/ai-mood-detection
 *
 * Angle (cluster: ai-vision): visual mood as searchable information, so creative material can be found by the
 * feeling a brief intends. Covers mood as an interpretive attribute, working from a brief's mood words to a
 * shortlist, and the ambiguity of mood vocabulary. Colour (36) owns palette; Vision Analysis (32) the umbrella.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how creative teams describe and choose imagery by mood; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 35,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "AI",
      lede: "How GetSibu’s AI can pick up the visual mood of creative material, and how a team can use it to find imagery by the feeling a brief is after rather than by its subject alone.",
      visual: { diagram: "ai-review", focus: "mood" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 35 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Finding material by the feeling it conveys",
      body: [
        "In GetSibu, AI analysis can identify the visual mood characteristics of creative material and turn them into information people can search. A team can then look for assets according to the visual feeling it intends, rather than only by what they depict.",
        "Mood is how creative people actually talk about imagery. A brief asks for something optimistic, quiet, energetic or intimate long before it names a subject, and two photographs of the same product can suit entirely different campaigns because of how they feel. Light, colour temperature, contrast, composition and the space around a subject all shape that impression.",
        [
          "Mood rarely works alone. ",
          { text: "Colour detection", page: 36 },
          " covers the palette that often carries part of a mood, and ",
          { text: "AI creative search", page: 49 },
          " lets people describe the asset they want and receive results based on available semantic and visual information.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Visual mood as searchable information", "The feeling a brief intends", "Mood is not the same as subject", "Interpretation rather than measurement", "A shared mood vocabulary"],
      },
      highlight: {
        heading: "In practice",
        body: "Two photographs of the same armchair, one bright and airy, the other dark and dramatic, belong in different campaigns. Mood information can give a search a way to tell them apart.",
        tags: ["Briefs", "Campaigns", "Photography"],
      },
      glance: {
        heading: "Mood detection in brief",
        facts: [
          { label: "Area", value: "AI" },
          { label: "Describes", value: "The visual feeling of creative material" },
          { label: "Part of", value: "AI Vision Analysis", page: 32 },
          { label: "Pairs with", value: "AI Semantic Search", page: 39 },
        ],
        actions: [{ kind: "route", path: "/features/ai", label: "More in AI" }]
      },
      sources: [{ kind: "pdf", page: 35 }, { kind: "pdf", page: 36 }, { kind: "pdf", page: 49 }, { kind: "pdf", page: 39 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "brief-to-shortlist",
      eyebrow: "From brief to shortlist",
      heading: "Turning a brief’s feeling into a set of options",
      intro: "A mood-led search works better as a short sequence than as one hopeful query.",
      steps: [
        { heading: "Find the mood words", body: "Read the brief for the words that say how the work should feel, and note any that colleagues might interpret differently.", icon: "document" },
        { heading: "Search by the feeling", body: "Start from the intended feeling itself, since mood characteristics identified by AI analysis are part of what the library can search.", icon: "search" },
        { heading: "Add what is fixed", body: "Combine the mood with what the brief does not leave open, using filters for category, format, resolution or date to reduce the set.", icon: "filter", page: 19 },
        { heading: "Judge candidates together", body: "Look at the likeliest images side by side, because the feel of a picture is easier to judge against its neighbours than on its own.", icon: "eye" },
        { heading: "Share the shortlist", body: "Save the search and share its URL, so the creative lead judges exactly the same set of options.", icon: "users", page: 17 },
      ],
      sources: [{ kind: "pdf", page: 35 }, { kind: "pdf", page: 19 }, { kind: "pdf", page: 17 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "briefs",
      eyebrow: "By brief",
      heading: "How mood shapes different kinds of creative work",
      tabs: [
        {
          label: "Campaigns",
          heading: "Hold a campaign to one emotional register",
          icon: "megaphone",
          body: [
            "A campaign usually commits to a tone, whether reassuring, urgent or playful. An image that contradicts it stands out even when its subject is exactly right.",
            ["Gathering candidates by mood helps the team assemble material that belongs together, and ", { text: "campaign review", page: 70 }, " is where stakeholders check the selection through asset-level discussions and approvals before distribution."],
          ],
          points: ["One tone across every placement", "Off-tone images noticed earlier"],
        },
        {
          label: "Social content",
          heading: "Match the feel of a feed",
          icon: "image",
          body: [
            "Social teams think in sequences: how one post sits beside the last, and whether a week of content feels coherent. The feel of an image counts as much as its content.",
            ["A ", { text: "searchable library of social content", page: 234 }, " makes it easier to return to existing material with the right feel instead of commissioning more."],
          ],
          points: ["Posts that sit well together", "Existing material reused before new shoots"],
        },
        {
          label: "Brand",
          heading: "Express a brand’s personality in imagery",
          icon: "heart",
          body: [
            "Brand guidelines often describe a personality — confident, understated, warm — that imagery has to express. Choosing a picture is therefore a question of mood as much as of logos and layout.",
            ["Mood helps with that spirit, while the formal rules are better carried by ", { text: "brand guardrail tags", page: 105 }, ", which identify assets that meet specific organisational requirements."],
          ],
          points: ["Personality as a search criterion", "Formal requirements kept in structured tags"],
        },
      ],
      sources: [{ kind: "pdf", page: 70 }, { kind: "pdf", page: 234 }, { kind: "pdf", page: 105 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "ambiguity",
      eyebrow: "Considerations",
      heading: "Why mood is harder to pin down than an object",
      items: [
        {
          heading: "Words for feelings vary",
          summary: "What one person calls moody, another calls gloomy.",
          icon: "message",
          body: [
            "Mood vocabulary is personal and cultural. A team that uses fresh, clean and bright interchangeably will find it hard to review mood information consistently until it agrees what each word means.",
            ["A small shared set of mood terms, recorded in the team’s ", { text: "asset taxonomy", page: 375 }, ", gives reviewers a common reference point."],
          ],
        },
        {
          heading: "Palette hints at mood without deciding it",
          summary: "Colour contributes to how an image feels, but the two are not interchangeable.",
          icon: "palette",
          body: [
            "Warm colours often read as inviting and cool ones as restful, yet a warm palette can feel tense and a blue one joyful. Treat colour as a clue to mood rather than a substitute for it.",
          ],
        },
        {
          heading: "Context changes the feeling",
          summary: "The same image can land differently beside different words.",
          icon: "layers",
          body: [
            "An empty street at dawn can feel peaceful in a travel campaign and lonely in a charity appeal. Mood information describes the image; how it lands depends on where it is used and what surrounds it.",
            "That is a reason to keep a person in the final choice, however good the shortlist.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 375 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about AI mood detection",
      items: [
        {
          question: "Is AI mood detection objective?",
          answer: ["No analysis of mood can be, because mood is an interpretation. Treat mood information as a starting point, review it against how your team describes its work, and ", { text: "override tags", page: 48 }, " that do not fit the intended taxonomy."],
        },
        {
          question: "Can a mood be described in a search alongside a subject?",
          answer: ["You can describe it that way. ", { text: "Semantic search", page: 39 }, " interprets meaning rather than relying only on exact words, which allows searches for creative concepts and visual descriptions, and a description can mention both what an image shows and how it should feel."],
        },
        {
          question: "Should a team still record subject and campaign if mood information is available?",
          answer: ["Yes. Mood says how material feels, not what it shows or which campaign it belongs to. Users can ", { text: "search available metadata", page: 23 }, " alongside tags and extracted content, so each kind of information adds its own route to an asset."],
        },
      ],
      sources: [{ kind: "pdf", page: 35 }, { kind: "pdf", page: 48 }, { kind: "pdf", page: 39 }, { kind: "pdf", page: 23 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on describing imagery with AI",
      variant: "compact",
      pages: [36, 32, 34, 39, 49, 70],
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
