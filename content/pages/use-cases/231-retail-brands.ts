/**
 * 231 · GetSibu for Retail Brands — /use-cases/retail-brands
 *
 * Angle (cluster: uc-marketing-brand): product and promotional creative used by many parts of a retail organisation —
 * marketing, merchandising, store operations and online teams — on a calendar of promotions with fixed dates.
 * E-Commerce Brands (230) owns product content around listings; Marketing Teams (213) owns campaigns; Multi-Market
 * Teams (225) owns regional separation.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how retail organisations typically produce and use creative; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 231,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Use Cases",
      lede: "How a retail organisation can keep product and promotional creative in one library that marketing, merchandising, store teams and online colleagues all draw from, with a clear record of when each promotion’s material should stop being used.",
      visual: { diagram: "media-library", focus: "image,video" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 231 }, { kind: "pdf", page: 104 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Creative for the whole retail organisation, not one department",
      body: [
        "With GetSibu, a retail organisation can maintain centralised libraries for its product creative and its promotional creative, instead of a separate collection in every department.",
        "In retail, creative travels through many parts of the business. The same product photograph can appear on a shelf-edge card, in a printed leaflet, on a window poster and in an email, each produced or used by a different team. Promotions run to fixed dates, and material from an offer that has closed has a habit of lingering on a store noticeboard or in a regional folder.",
        [
          "Two things make a shared library workable at that breadth. ",
          { text: "Team access management", page: 175 },
          " establishes consistent permissions for groups such as store operations or merchandising, and ",
          { text: "asset status management", page: 102 },
          " distinguishes drafts from approved content, so departments can tell finished promotional artwork from work in progress.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Product and promotional creative together", "Access arranged by team and department", "Promotions with recorded end dates", "Corrections made once, in the asset", "A view of how material is used"],
      },
      highlight: {
        heading: "In practice",
        body: "A store operations manager preparing for a new promotion takes the approved window artwork from the library, not from an email forwarded by a colleague in another region.",
        tags: ["Retail marketing", "Merchandising", "Store operations"],
      },
      glance: {
        heading: "Retail brands in brief",
        facts: [
          { label: "Team", value: "Retail organisations with stores and online channels" },
          { label: "Typical material", value: "Product photography, promotional artwork, in-store material, campaign video" },
          { label: "Builds on", value: "Department Access", page: 176 },
          { label: "Supports", value: "Expiring Creative Assets", page: 104 },
        ],
        actions: [{ kind: "route", path: "/use-cases", label: "More in Use Cases" }]
      },
      sources: [{ kind: "pdf", page: 231 }, { kind: "pdf", page: 175 }, { kind: "pdf", page: 102 }, { kind: "pdf", page: 176 }, { kind: "pdf", page: 104 }, EXPLAINS],
    },
    {
      kind: "before-after",
      id: "before-after",
      heading: "Promotional creative before and after a shared retail library",
      beforeLabel: "Department by department",
      afterLabel: "One retail library",
      before: ["Each department keeping its own copies", "Offer artwork forwarded from store to store", "Closed promotions still in circulation", "Price corrections sent as new attachments", "Leaflets rebuilt from scratch every season"],
      after: ["Teams reaching one library with consistent access", "Approved artwork taken from approved views", "End dates recorded with promotional assets", "Corrected artwork replacing the file in place", "Earlier promotions found again and reused"],
      sources: [{ kind: "pdf", page: 175 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 104 }, { kind: "pdf", page: 93 }, { kind: "pdf", page: 16 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "departments",
      eyebrow: "By department",
      heading: "What each part of a retail business needs from the library",
      tabs: [
        {
          label: "Marketing",
          heading: "Build promotions from approved product creative",
          icon: "megaphone",
          body: [
            "Retail marketing turns product photography into offers, leaflets and campaigns on a demanding calendar. What slows it down is checking whether an image is final and suitable for the offer in hand.",
            [{ text: "Campaign review", page: 70 }, " lets the team use asset-level discussions and approvals to check promotional material before it is distributed."],
          ],
          points: ["Material checked before distribution", "Feedback left on the artwork itself"],
        },
        {
          label: "Merchandising",
          heading: "Keep product imagery true to the range",
          icon: "tag",
          body: [
            "Merchandising and buying teams know the range better than anyone: which products are arriving, which are changing and which are leaving. That makes them the natural owners of product accuracy in the library.",
            [{ text: "Brand guardrail tags", page: 105 }, " can identify assets that comply with specific organisational requirements, such as imagery checked against the current range."],
          ],
          points: ["Range knowledge recorded as tags", "Accuracy checked by those who know"],
        },
        {
          label: "Store operations",
          heading: "Reach the material meant for stores",
          icon: "store",
          body: [
            "Store and visual merchandising teams need promotional artwork, signage and display guidance, but not the drafts and unannounced launches marketing is still working on.",
            [{ text: "Department access", page: 176 }, " can give each department only the creative libraries relevant to its work, so a store team sees the promotional material intended for it."],
          ],
          points: ["Store material without the drafts", "Unannounced launches held back"],
        },
        {
          label: "Online",
          heading: "Use the same creative on the website",
          icon: "globe",
          body: [
            "Online teams use the same product photography and promotional artwork as stores, often in more places. Working from the same library avoids an online copy that slowly drifts away from what the stores display.",
            [{ text: "Centralised media storage", page: 150 }, " provides a unified environment for content from several sources while retaining organisational structure and access controls."],
          ],
          points: ["Same creative online and in store", "No parallel online collection"],
        },
      ],
      sources: [{ kind: "pdf", page: 70 }, { kind: "pdf", page: 105 }, { kind: "pdf", page: 176 }, { kind: "pdf", page: 150 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A price error found halfway through a promotion",
      team: "A retail brand",
      situation: "A retail brand runs a seasonal promotion across its stores and website. Partway through, the trading team spots a wrong price on the leaflet artwork and on the matching in-store poster.",
      steps: [
        {
          heading: "The artwork already carries its end date",
          body: ["When the promotion’s artwork was added, the marketing team recorded ", { text: "expiry information", page: 104 }, " for the day the offer closes."],
        },
        {
          heading: "The affected files are found by their text",
          body: ["The team searches for the wording around the wrong price, which ", { text: "OCR has made searchable", page: 38 }, ", and both the leaflet and the poster come up."],
        },
        {
          heading: "The correction is reviewed",
          body: ["Trading and marketing ", { text: "review the corrected artwork and mark it as approved", page: 67 }, " before anything is reprinted."],
        },
        {
          heading: "The file is replaced, not re-sent",
          body: ["The approved correction ", { text: "replaces the earlier artwork", page: 93 }, " in the same asset, and the faulty version stays in its history instead of circulating as a separate attachment."],
        },
        {
          heading: "Stores take the corrected poster",
          body: ["Store operations colleagues open the ", { text: "approved-only view", page: 103 }, " for the promotion and download the corrected poster from there."],
        },
        {
          heading: "Usage is reviewed after the offer",
          body: ["Once the promotion closes, ", { text: "asset usage tracking", page: 106 }, " shows which promotional assets were used and which stayed inactive, which informs the next season’s brief."],
        },
      ],
      outcome: "The error is corrected once, in the asset every department draws from, and the promotion ends with a clearer picture of which material the stores relied on.",
      link: { page: 104, label: "Expiring Creative Assets" },
      sources: [{ kind: "pdf", page: 104 }, { kind: "pdf", page: 38 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 93 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 106 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "capabilities",
      id: "capabilities",
      eyebrow: "What retail teams use",
      heading: "The library features a retail organisation leans on",
      items: [
        {
          heading: "Enterprise permissions",
          body: "Structured access controls can apply across departments, projects and folders, which suits an organisation with head office, regional and store teams.",
          icon: "lock",
          points: ["Departments and projects covered", "Folder detail where it is needed"],
          page: 169,
        },
        {
          heading: "Saved searches for recurring events",
          body: "The search for a promotion’s material can be saved and shared through a URL, so last year’s artwork for a recurring event can be reopened when the next one is planned.",
          icon: "search",
          points: ["A view per recurring promotion", "Shared with a link"],
          page: 17,
        },
        {
          heading: "Upload analytics",
          body: "Upload analytics show how much new content is entering the library over time, which mirrors the rhythm of a retail calendar.",
          icon: "trend",
          points: ["Seasonal intake made visible", "Input for planning busy periods"],
          page: 184,
        },
        {
          heading: "Duplicate reduction",
          body: "Duplicate detection can help cut unnecessary storage and the confusion of the same artwork being held several times by different teams.",
          icon: "copy",
          points: ["Fewer copies across departments", "Less wasted storage"],
          page: 350,
        },
        {
          heading: "Asset activity",
          body: "Views, downloads, edits and approvals can become part of an asset’s activity history, showing how a piece of promotional creative was handled.",
          icon: "audit",
          points: ["Downloads part of the history", "Edits and approvals traceable"],
          page: 118,
        },
      ],
      sources: [{ kind: "pdf", page: 169 }, { kind: "pdf", page: 17 }, { kind: "pdf", page: 184 }, { kind: "pdf", page: 350 }, { kind: "pdf", page: 118 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about GetSibu for retail brands",
      items: [
        {
          question: "Can a retail brand find the artwork from a previous year’s sale?",
          answer: ["Yes. ", { text: "Search across creative libraries", page: 16 }, " looks through the whole library rather than one folder at a time, and a date filter narrows the results to the season in question."],
        },
        {
          question: "Can a retail brand limit who works on creative for an unannounced range?",
          answer: [{ text: "Individual permissions", page: 157 }, " give targeted access where broader roles are not granular enough, so the people working on a confidential launch can be limited to that work."],
        },
        {
          question: "Can a retail brand see which departments use its creative library?",
          answer: [{ text: "Creative team analytics", page: 199 }, " provide visibility into how different groups interact with the library, which can help show whether departments beyond marketing draw on it."],
        },
        {
          question: "Can a retail brand keep in-store screen content beside its print artwork?",
          answer: ["Yes. GetSibu is designed to store and organise videos, images, documents and audio together, so in-store screen content can sit in a ", { text: "searchable video library", page: 25 }, " alongside the posters and leaflets it accompanies."],
        },
      ],
      sources: [{ kind: "pdf", page: 16 }, { kind: "pdf", page: 19 }, { kind: "pdf", page: 157 }, { kind: "pdf", page: 199 }, { kind: "pdf", page: 1 }, { kind: "pdf", page: 25 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More for retail creative and promotions",
      variant: "compact",
      pages: [104, 176, 70, 93, 230, 213],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Give Your Creative Team One Source of Truth",
      conversionPage: 395,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 395 }],
    },
  ],
};

export default page;
