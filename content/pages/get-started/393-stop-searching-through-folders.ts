/**
 * 393 · Stop Searching Through Folders — /get-started/stop-searching-through-folders
 *
 * Angle (clusters: creative-search, conversion): folder paths make the finder reconstruct the filer's logic;
 * AI-assisted search, metadata discovery and semantic retrieval let people search by what they remember, and a team
 * can change the habit without abandoning folders, which keep their job for structure and access. Creative File
 * Discovery (24) owns where folder knowledge hides; Natural Language Asset Search (18) owns memory cues.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of folder-based and search-based finding in creative teams; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 393,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Get Started",
      lede: "Why finding a file by its folder path means reconstructing somebody else’s filing logic, three routes for searching by what you remember instead, and how a team can change the habit without giving up its folders.",
      visual: { diagram: "search-signals", focus: "semantic" },
      actions: [
        { kind: "global", cta: "primary" },
        { kind: "page", page: 11, label: "How creative asset search works" },
      ],
      sources: [{ kind: "pdf", page: 393 }, { kind: "pdf", page: 29 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Filing happens once; finding happens again and again",
      body: [
        "Creative professionals should not have to memorise complicated folder structures to reach important files. GetSibu provides AI-assisted search, metadata discovery and semantic retrieval, so people can look for an asset using the details they genuinely recall.",
        "Folder hunting puts the effort in the wrong place. A file is filed once, by someone who knows the work well, and looked for many times, often by people who were never involved. Every trip through directories asks the person looking to think like the person who filed, and each mismatch costs another folder opened, another message to a colleague, or a file made again because nobody found the first one.",
        [
          "Folders do not vanish from a searchable library; they stop being the only way in. ",
          { text: "Searching across creative libraries", page: 16 },
          " reaches the entire library rather than one folder at a time, which is the change that matters most to whoever is doing the looking.",
        ],
      ],
      keyPoints: {
        heading: "Key ideas",
        items: ["Filed once, looked for many times", "Search with what you remember", "Three routes: AI, metadata, meaning", "Folders kept for structure and access", "Repeated searches saved, not retyped"],
      },
      highlight: {
        heading: "In practice",
        body: "A producer recalls an old pitch deck only by a slogan printed on its slides. Searching for the slogan finds it, because text in presentations is extracted, even though the deck was filed under a project code nobody remembers.",
        tags: ["Presentations", "Extracted text"],
      },
      glance: {
        heading: "Searching instead of browsing",
        facts: [
          { label: "Area", value: "Get Started" },
          { label: "Routes", value: "AI-assisted search, metadata discovery, semantic retrieval" },
          { label: "Folders still used for", value: "Structure, browsing and access" },
          { label: "Suits", value: "Anyone looking for work they did not file" },
        ],
      },
      sources: [{ kind: "pdf", page: 393 }, { kind: "pdf", page: 16 }, { kind: "pdf", page: 15 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "routes",
      eyebrow: "Three routes",
      heading: "Three ways to reach a file without knowing its folder",
      tabs: [
        {
          label: "AI-assisted search",
          heading: "When you remember what was in it",
          icon: "sparkles",
          body: [
            "Visual memory often outlasts everything else. People recall the object on the table in a product shot long after they have forgotten which drive or year it was saved under.",
            [
              { text: "AI creative search", page: 49 },
              " lets users describe the asset they want and receive relevant results based on available semantic and visual information. Objects identified in supported media can also contribute to search as tags.",
            ],
          ],
          points: ["Start from the subject", "Visual detail as a clue"],
        },
        {
          label: "Metadata discovery",
          heading: "When you remember where it came from",
          icon: "tag",
          body: [
            "Some memories concern circumstance rather than content: who shot it, what equipment was used, which keywords the supplier attached when it was delivered.",
            [
              "Details recorded with a file, from EXIF and XMP to creators and custom keywords, can be carried into its asset record. ",
              { text: "Searching that metadata", page: 23 },
              " offers a route to the file that has nothing to do with where it happens to be stored.",
            ],
          ],
          points: ["Creator, equipment and keywords as clues", "A route independent of location"],
        },
        {
          label: "Semantic retrieval",
          heading: "When you can only describe it",
          icon: "search",
          body: [
            "Sometimes a description is all anyone has: a bright kitchen, a family breakfast, something close to an earlier launch. A keyword search struggles, because none of those words may appear anywhere in the file’s record.",
            [
              { text: "Semantic creative search", page: 14 },
              " interprets a request according to available embeddings and AI-generated media information, instead of relying only on exact keyword matches.",
            ],
          ],
          points: ["Describe it in your own words", "Meaning matched, not only keywords"],
        },
      ],
      sources: [{ kind: "pdf", page: 49 }, { kind: "pdf", page: 34 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 23 }, { kind: "pdf", page: 14 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "change-the-habit",
      eyebrow: "Changing the habit",
      heading: "Moving a team from folder hunting to search",
      intro: "Search replaces a habit, so the switch concerns people as much as files.",
      steps: [
        { heading: "Show what search reaches", body: "Explain that search can draw on filenames, metadata, OCR, AI-generated tags, comments and semantic information, so colleagues stop assuming that only a filename will do.", icon: "search", page: 11 },
        { heading: "Start with newcomers", body: "New starters have no folder memory to fall back on, which makes them the easiest colleagues to begin with search; show them the routes before they learn the paths.", icon: "user" },
        { heading: "Answer requests with a search", body: "When someone asks where a file is, reply with the search that finds it rather than a folder path, so the method travels along with the answer.", icon: "message" },
        { heading: "Save the searches people repeat", body: "Frequent searches can be saved and shared through a URL, turning a weekly hunt into a reusable view for a campaign, client or product.", icon: "collection", page: 17 },
      ],
      sources: [{ kind: "pdf", page: 11 }, { kind: "pdf", page: 17 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "folders-still-matter",
      eyebrow: "Considerations",
      heading: "Why folders still matter once the hunting stops",
      items: [
        {
          heading: "Folders carry access",
          summary: "Permissions are often easiest to reason about folder by folder.",
          icon: "lock",
          body: [
            "Taking search as the way to find files says nothing about who may see them. Access still needs a shape, and a folder is a natural unit for deciding it.",
            [{ text: "Folder-level permissions", page: 152 }, " allow access to be controlled more finely than organisation-wide access, which keeps access decisions tied to a structure people recognise."],
          ],
        },
        {
          heading: "Browsing still has its uses",
          summary: "Not every task begins with something specific to search for.",
          icon: "compass",
          body: [
            "Someone gathering inspiration, or checking what a finished campaign produced, may have no particular file in mind. Wandering a well-kept structure suits that kind of task better than any query.",
            [{ text: "Creative library navigation", page: 29 }, " supports moving between broad exploration of the library and highly specific asset discovery."],
          ],
        },
        {
          heading: "Folders mark boundaries",
          summary: "A structure divided by client or department shows where one body of work ends.",
          icon: "briefcase",
          body: [
            "Even when nobody opens them to look for a file, top-level folders tell people whose material they are dealing with, which matters most in agencies and large organisations.",
            [{ text: "Client-specific workspaces", page: 177 }, " help agencies organise and isolate customer content."],
          ],
        },
        {
          heading: "Sometimes the path really is quicker",
          summary: "Going straight to a folder you use every day is perfectly reasonable.",
          icon: "folder",
          body: [
            "The aim is not to forbid browsing. A designer who opens the same project folder every morning should carry on doing so; search earns its place for everything outside that familiar territory, including the work of colleagues and of years gone by.",
          ],
        },
        {
          heading: "Search depends on good descriptions",
          summary: "Moving away from paths shifts the work towards what is recorded about each asset.",
          icon: "tag",
          body: [
            "Once people stop relying on location, the quality of tags and metadata decides what they find. A vocabulary with one agreed term per idea helps stop searches splitting across spelling variants and synonyms.",
            [{ text: "Hierarchical tags, synonyms, colours and inheritance", page: 8 }, " are designed to keep an organisation system useful even when a library grows to thousands or millions of assets."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 152 }, { kind: "pdf", page: 29 }, { kind: "pdf", page: 177 }, { kind: "pdf", page: 8 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about searching instead of browsing folders",
      items: [
        {
          question: "What should someone do when a search finds nothing?",
          answer: "Describe the file another way, by what it shows, where it came from or what it was for, since each route draws on different information. If it still does not appear, tell whoever looks after the library: a missing description affects everyone who searches for the same thing.",
        },
        {
          question: "Does searching instead of browsing mean colleagues stop asking each other?",
          answer: "No, and it should not. Colleagues remain the best source of judgement, such as which of two suitable shots a client preferred. What search removes is the need to ask where a file lives.",
        },
        {
          question: "Is search practical on a very large library, or only on a small one?",
          answer: ["GetSibu is designed around ", { text: "low-latency search", page: 307 }, " so users can retrieve assets quickly from large libraries, and when a result set is long, ", { text: "keywords can be combined with filters", page: 13 }, " for category, format, uploader, resolution and date."],
        },
      ],
      sources: [{ kind: "pdf", page: 307 }, { kind: "pdf", page: 13 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on finding files by what you remember",
      variant: "compact",
      pages: [11, 16, 23, 14, 49, 29],
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
