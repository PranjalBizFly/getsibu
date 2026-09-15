/**
 * 49 · AI Creative Search — /features/ai-creative-search
 *
 * Angle (clusters semantic-search, ai-discovery): the outcome for creative work — describe the asset you
 * want and receive relevant results from semantic and visual information. How a request is interpreted is
 * owned by 14 and 39; this page is about using the results in creative tasks.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how creative teams search for material; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 49,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "AI",
      lede: "Describe the asset you have in mind and work from relevant results: how AI creative search serves moodboards, reuse and campaign work, and how to turn its results into a confident creative choice.",
      visual: { diagram: "search-signals", focus: "semantic" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 49 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "From a description in your head to candidates on the page",
      body: [
        "AI creative search in GetSibu lets people describe the asset they want and receive relevant results. Those results are based on the semantic and visual information available about the library’s assets.",
        "Creative work usually begins with a picture in someone’s mind rather than a filename: a hand pouring coffee in soft morning light, a wide coastal shot with plenty of sky for a headline. The difficulty has always been translating that picture into the words a library happens to hold. When the search accepts the description itself, much less of that translation is left to the person searching.",
        [
          "Two kinds of information make that possible. ",
          { text: "Semantic search", page: 39 },
          " interprets meaning rather than exact words, while visual information such as ",
          { text: "objects", page: 34 },
          ", ",
          { text: "visual mood", page: 35 },
          " and ",
          { text: "colour", page: 36 },
          " describes what assets actually look like. The results are candidates for a creative decision, which still belongs to the people making the work.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Describe the asset you want", "Results from semantic information", "Results from visual information", "Candidates, not final choices", "Creative judgement stays human"],
      },
      highlight: {
        heading: "In practice",
        body: "A designer building a moodboard describes the kind of image the concept needs and pulls options from the library before looking anywhere else.",
        tags: ["Designers", "Art directors", "Moodboards"],
      },
      glance: {
        heading: "Creative search in brief",
        facts: [
          { label: "Area", value: "AI" },
          { label: "Starts from", value: "A description of the asset" },
          { label: "Draws on", value: "Semantic and visual information" },
          { label: "How requests are read", value: "Semantic Creative Search", page: 14 },
        ],
        actions: [{ kind: "route", path: "/features/ai", label: "More in AI" }]
      },
      sources: [{ kind: "pdf", page: 49 }, { kind: "pdf", page: 39 }, { kind: "pdf", page: 34 }, { kind: "pdf", page: 35 }, { kind: "pdf", page: 36 }, { kind: "pdf", page: 14 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "creative-tasks",
      eyebrow: "Where it helps",
      heading: "Creative tasks that start better with a description",
      items: [
        {
          heading: "Moodboards and references",
          body: "Early concept work needs breadth. Describing the look a concept is reaching for gathers a spread of existing material to react to before anyone commissions anything.",
          icon: "palette",
          points: ["Options gathered from the library first", "A wider spread than memory provides"],
        },
        {
          heading: "Reuse before a reshoot",
          body: "A new brief often asks for something the organisation already owns. Describing it gives earlier shoots a chance to answer before a new one is booked.",
          icon: "restore",
          points: ["Earlier campaigns reconsidered", "Less recreation of existing work"],
        },
        {
          heading: "Alternatives for live work",
          body: "When an image in a running campaign has to be swapped, the replacement must feel like the original. Describing the original’s qualities is a quick route to close alternatives.",
          icon: "copy",
          points: ["Replacements that keep the look", "Faster response to late changes"],
        },
        {
          heading: "Fitting a layout",
          body: "Layouts impose practical demands such as space for copy, orientation and a palette. A description can carry the visual part, and filters can handle format and resolution.",
          icon: "layers",
          points: ["Visual needs in the description", "Technical needs in filters"],
        },
        {
          heading: "Pitch and proposal material",
          body: "Pitches are assembled quickly from whatever strong material exists. Searching by description helps a team find imagery that expresses an idea without knowing where it was filed.",
          icon: "briefcase",
          points: ["Ideas illustrated at short notice", "No folder knowledge required"],
        },
      ],
      sources: [{ kind: "pdf", page: 49 }, { kind: "pdf", page: 348 }, { kind: "pdf", page: 19 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "An appeal image found by describing it",
      team: "A nonprofit communications team",
      situation: "A nonprofit communications team is designing a spring appeal around tree planting. The designer wants an image of hands placing a seedling in dark soil, and the library holds years of event and field photography.",
      steps: [
        { heading: "The designer describes the picture", body: "Rather than guessing which event folder might contain it, the designer describes the image the layout needs and receives results drawn from semantic and visual information." },
        { heading: "Thumbnails narrow the field", body: ["Candidates are compared through ", { text: "thumbnails", page: 146 }, ", which give a visual preview without downloading the original files."] },
        { heading: "Practical limits are applied", body: "Filters for resolution and date remove images too small for print and photographs from projects that have since ended." },
        { heading: "A colleague weighs in", body: ["The designer leaves a ", { text: "comment on the shortlisted asset", page: 62 }, " asking the programme lead whether the photograph suits the appeal’s message."] },
      ],
      outcome: "The appeal uses a photograph the organisation already owned, chosen from real options rather than whichever image someone happened to remember.",
      link: { page: 238, label: "GetSibu for Nonprofits" },
      sources: [{ kind: "pdf", page: 49 }, { kind: "pdf", page: 146 }, { kind: "pdf", page: 19 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 238 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "accordion",
      id: "using-results",
      eyebrow: "Considerations",
      heading: "Turning search results into a creative choice",
      items: [
        {
          heading: "Lead with what must be visible",
          summary: "Put the non-negotiable content of the image at the front of the description.",
          icon: "eye",
          body: [
            "A description often mixes essentials with preferences. Naming what has to appear first, and the atmosphere second, makes it easier to judge whether a result has missed the point or only the mood.",
          ],
        },
        {
          heading: "Relevant is not the same as approved",
          summary: "A result that fits the brief may still be a draft or unreviewed material.",
          icon: "approval",
          body: [
            ["Search surfaces what matches a description, not what is cleared for use. Where only finished material should be considered, ", { text: "approved-only views", page: 103 }, " give people access to content that has completed the required review process."],
          ],
        },
        {
          heading: "Similar is a starting point",
          summary: "The best candidate still needs to be right for the specific piece of work.",
          icon: "compass",
          body: [
            "Two photographs can match a description equally well and be very different creative choices: one quiet, one crowded; one with room for copy, one without. Treat results as a shortlist to curate, and expect the final decision to rest on qualities no description fully captures.",
          ],
        },
        {
          heading: "An empty result is information too",
          summary: "When nothing suitable appears, the library may simply not hold it.",
          icon: "search",
          body: [
            "Try a second description with different wording before concluding anything. If that also finds nothing close, the gap is useful to know: the image may genuinely need to be commissioned, and the brief can say so early.",
          ],
        },
        {
          heading: "Keep a description that worked",
          summary: "Wording that led to a strong selection is worth keeping.",
          icon: "collection",
          body: [
            ["Campaigns return to the same visual territory for months. A description that led to a strong selection can be kept as a ", { text: "saved asset search", page: 17 }, ", so the wording is not lost and the search can be repeated without reconstructing it from memory."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 103 }, { kind: "pdf", page: 17 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about AI creative search",
      items: [
        {
          question: "Who on a creative team gets most from AI creative search?",
          answer: "People who think in pictures but did not build the library’s vocabulary: designers, art directors and marketers who know the look they want and have never studied the taxonomy. Those who maintain the tags often reach assets just as quickly through the terms they chose.",
        },
        {
          question: "How is AI creative search different from semantic search?",
          answer: ["They look at one idea from different sides. ", { text: "AI semantic search", page: 39 }, " is the capability of interpreting meaning rather than exact words, and ", { text: "semantic creative search", page: 14 }, " shows how a description is read. AI creative search is about what you receive and use: relevant results based on semantic and visual information."],
        },
        {
          question: "Do I need to know who uploaded an asset to find it with AI creative search?",
          answer: ["No. Results come from what is known about the assets themselves, which reduces the dependence on ", { text: "individual team members remembering where files were stored", page: 24 }, "."],
        },
      ],
      sources: [{ kind: "pdf", page: 49 }, { kind: "pdf", page: 39 }, { kind: "pdf", page: 14 }, { kind: "pdf", page: 24 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on finding creative material by description",
      variant: "compact",
      pages: [14, 39, 35, 36, 19, 103],
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
