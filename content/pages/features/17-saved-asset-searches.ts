/**
 * 17 · Saved Asset Searches — /features/saved-asset-searches
 *
 * Angle (clusters: filters-saved-searches, sharing-views): saving a frequently used search and sharing it through
 * a URL — which searches deserve saving, how to build one worth reusing, and the recurring work it serves.
 * Advanced Media Filters (19) owns the filters themselves, Media Search Platform (13) the search experience,
 * Team Asset Sharing (78) sharing without duplicate copies, Shared Creative Views (79) recurring collections.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how teams reuse searches; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 17,
  metaDescription: "Frequently used searches can be saved in GetSibu and shared through a URL, giving teams reusable views for campaigns, clients, products and recurring work.",
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Search & Discovery",
      lede: "Turn a search your team runs again and again into a saved view colleagues can open from a URL, whether it gathers a campaign, a client, a product range or one kind of content.",
      visual: { diagram: "library-search" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 17 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Searches worth keeping, passed on by link",
      body: [
        "In GetSibu, a search that people use often can be saved and shared through a URL. That makes it easier for teams to create reusable views for campaigns, clients, products, content categories and other work that comes round again.",
        "Every team has searches it repeats. The social editor looks for this month’s campaign images; the account manager gathers material for a particular client; the product marketer pulls the latest shots of a range. Each time a search is rebuilt from memory, the mix of keywords and filters comes out a little differently, and so do the results.",
        [
          "Saving the search settles that definition once, and a URL makes it simple to hand on. ",
          { text: "Team asset sharing", page: 78 },
          " and ",
          { text: "shared creative views", page: 79 },
          " look at the sharing side of the same idea in more depth.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Save a search you repeat", "Share it through a URL", "Reusable views for recurring work", "Campaigns, clients, products, categories", "One definition instead of many rebuilds"],
      },
      highlight: {
        heading: "In practice",
        body: "Rather than rebuilding the filters for a client’s product imagery before each status meeting, an account manager opens the saved search from a bookmarked link.",
        tags: ["Account managers", "Social teams", "Brand managers"],
      },
      glance: {
        heading: "Saved searches in brief",
        facts: [
          { label: "Area", value: "Search & Discovery" },
          { label: "Shared through", value: "A URL" },
          { label: "Often refined with", value: "Advanced Media Filters", page: 19 },
          { label: "Part of", value: "Asset Discovery Workflow", page: 30 },
        ],
        actions: [{ kind: "route", path: "/features/search-and-discovery", label: "More in Search & Discovery" }]
      },
      sources: [{ kind: "pdf", page: 17 }, { kind: "pdf", page: 78 }, { kind: "pdf", page: 79 }, { kind: "pdf", page: 19 }, { kind: "pdf", page: 30 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "saving-a-search",
      eyebrow: "Step by step",
      heading: "From a one-off search to a view the team reuses",
      intro: "A saved search is only as useful as the search behind it, so the care goes in before it is kept.",
      steps: [
        { heading: "Search for the need", body: "Begin with keywords or a description that captures what the recurring request is really about.", icon: "search" },
        { heading: "Refine with filters", body: "Add the filters that make the set dependable, such as a file category, a format or a range of dates.", icon: "filter" },
        { heading: "Test the results", body: "Look through what comes back and adjust until it is a set you could hand to a colleague without explanation.", icon: "eye" },
        { heading: "Save the search", body: "Keep it, so the next person who needs this set opens it instead of rebuilding it.", icon: "collection" },
        { heading: "Share the URL", body: "Send the link to the people who keep making the same request, so they can open the view themselves.", icon: "network" },
      ],
      sources: [{ kind: "pdf", page: 17 }, { kind: "pdf", page: 13 }, { kind: "pdf", page: 19 }, { kind: "pdf", page: 30 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "recurring-work",
      eyebrow: "Where they help",
      heading: "Saved searches for different kinds of recurring work",
      tabs: [
        {
          label: "Campaigns",
          heading: "One starting point for a campaign’s material",
          icon: "megaphone",
          body: [
            "While a campaign runs, many people need its assets: designers adapting them, social teams scheduling them, regional colleagues localising them. A saved search for the campaign gives each of them the same way in.",
            "It also outlives the campaign. When the next brief asks what was done last time, the search can be reopened rather than pieced together from old messages.",
          ],
          points: ["One link for everyone working on it", "Easy to revisit for the next brief"],
          link: { page: 70, label: "Campaign Review" },
        },
        {
          label: "Clients",
          heading: "A client’s material without another folder of exports",
          icon: "briefcase",
          body: [
            "Agencies field the same client requests repeatedly: the current logos, the product photography, recent deliverables. Answering each one by exporting files into a new folder leaves copies that drift out of date.",
            "A saved search per client answers those requests from the library itself, and the link can be sent again whenever the request returns.",
          ],
          points: ["Requests answered from the library", "Fewer exported copies to manage"],
          link: { page: 84, label: "Agency Collaboration" },
        },
        {
          label: "Products",
          heading: "A product range gathered in one view",
          icon: "store",
          body: [
            "Product imagery is requested by e-commerce, retail, sales and PR, often for the same range in the same week. A keyword for the range combined with an image category produces a view each of those teams can use.",
            "Consistent tags on the range’s photography matter here, because a shared search is only as dependable as the descriptions it relies on.",
          ],
          points: ["The same view for several departments", "Consistent tags make it dependable"],
        },
        {
          label: "Content types",
          heading: "Standing views of one kind of content",
          icon: "layers",
          body: [
            "Some requests are about a kind of material rather than a project: brand templates, executive photography, event recordings, policy documents.",
            "A saved search per content category gives people a dependable place to start without anyone creating a folder for each type and deciding where every file belongs.",
          ],
          points: ["Templates, recordings, documents", "No extra folder hierarchy to maintain"],
        },
        {
          label: "Routines",
          heading: "Searches that belong to a routine",
          icon: "workflow",
          body: [
            "Other searches belong to a regular task: gathering material for a regular report, assembling a starter pack for someone joining the team, pulling together references for a recurring kind of brief.",
            "Saving them turns a routine that depends on one person’s know-how into something anyone on the team can repeat.",
          ],
          points: ["Regular tasks made repeatable", "Less reliance on one person’s memory"],
        },
      ],
      sources: [{ kind: "pdf", page: 17 }, { kind: "pdf", page: 30 }, { kind: "pdf", page: 70 }, { kind: "pdf", page: 84 }, { kind: "pdf", page: 19 }, EXPLAINS],
    },
    {
      kind: "before-after",
      id: "before-after",
      eyebrow: "What changes",
      heading: "Rebuilding a search compared with keeping it",
      beforeLabel: "Rebuilt each time",
      afterLabel: "Saved and shared",
      before: [
        "Keywords and filters recalled from memory",
        "Results that vary from one colleague to the next",
        "Files exported and sent as attachments",
        "Requests routed through whoever knows the library",
      ],
      after: [
        "The search kept as it was defined",
        "One URL passed to everyone who asks",
        "Views shared without duplicate copies of files",
        "Recurring requests answered by a link",
      ],
      sources: [{ kind: "pdf", page: 17 }, { kind: "pdf", page: 78 }, { kind: "pdf", page: 88 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about saved asset searches",
      items: [
        {
          question: "How is a saved asset search different from a folder?",
          answer: "A folder holds the files someone placed in it. A saved search keeps a search that can be repeated and shared through a URL, so it is defined by what it looks for rather than where files were put, and sharing it does not create copies of the files.",
        },
        {
          question: "How do I share a saved asset search with a colleague?",
          answer: "Saved searches are shared through a URL, so you send the link and your colleague opens the same search.",
        },
        {
          question: "Which asset searches are worth saving for a team?",
          answer: "The ones people ask for repeatedly: a campaign, a client, a product range, a type of content or a routine check. A search that is run only once rarely needs keeping.",
        },
        {
          question: "Do saved asset searches help remote teams?",
          answer: ["Yes. Shared searches are one of the ways ", { text: "remote teams collaborate", page: 88 }, " around the same assets, alongside comments, mentions and approvals."],
        },
      ],
      sources: [{ kind: "pdf", page: 17 }, { kind: "pdf", page: 78 }, { kind: "pdf", page: 88 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on reusing and sharing searches",
      variant: "compact",
      pages: [79, 78, 19, 30, 88, 13],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Stop Searching Through Folders",
      conversionPage: 393,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 393 }],
    },
  ],
};

export default page;
