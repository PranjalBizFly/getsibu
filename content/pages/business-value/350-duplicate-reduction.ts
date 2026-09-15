/**
 * 350 · Duplicate Reduction — /business-value/duplicate-reduction
 *
 * Angle (clusters: duplicate-detection, roi): the business result of fewer copies — less unnecessary storage
 * consumption and less confusion — and what makes the reduction last rather than a one-off clean-up.
 * AI Duplicate Detection (40) owns the hashing technique; Duplicate Asset Management (112) owns the housekeeping.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of why copies accumulate and what reducing them is worth; states no GetSibu capability beyond the cited pages and supplies no figures." } as const;

const page: PageContent = {
  page: 350,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "centered",
      eyebrow: "Business Value",
      lede: "What fewer duplicate assets can return to a creative organisation, why the storage and confidence returns land in different places, and which everyday habits decide whether copies stay down.",
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 350 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Two returns from fewer copies",
      body: [
        "Duplicate detection can help reduce unnecessary storage consumption and eliminate confusion caused by multiple copies. The two returns land in different places: storage is an operating cost someone budgets for, while confusion is paid for in rework and mistakes that rarely reach a budget line.",
        "The storage return is the easier of the two to show a budget holder, since every unnecessary copy is space paid for without adding anything. How much it amounts to depends on the material: libraries built on footage feel it far more than collections of logos and documents.",
        "The confusion return is harder to see. It shows up at handover: a partner receives an outdated logo, a campaign runs an image cleared for a different use, a correction reaches one file but not its twins. Putting any of those right can easily cost more than the space the copy ever took up.",
        ["How copies are recognised is explained under ", { text: "AI duplicate detection", page: 40 }, ", and the housekeeping of judging and clearing them under ", { text: "duplicate asset management", page: 112 }, ". Reduction is the result those two make possible, and it only lasts if fewer copies are made in the first place."],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Less unnecessary storage consumption", "Less doubt about which copy counts", "Returns that land in different places", "Everyday habits that create copies"],
      },
      highlight: {
        heading: "In practice",
        body: "A copy that is never made needs no detection, no judgement and no removal. That is why the lasting part of duplicate reduction lies in the habits that create copies.",
        tags: ["Habits", "Prevention"],
      },
      glance: {
        heading: "Duplicate reduction in brief",
        facts: [
          { label: "Area", value: "Business value" },
          { label: "Returns", value: "Storage and confidence in the right copy" },
          { label: "Technique", value: "AI Duplicate Detection", page: 40 },
          { label: "Housekeeping", value: "Duplicate Asset Management", page: 112 },
        ],
        actions: [{ kind: "route", path: "/business-value", label: "More in Business Value" }]
      },
      sources: [{ kind: "pdf", page: 350 }, { kind: "pdf", page: 40 }, { kind: "pdf", page: 112 }, EXPLAINS],
    },
    {
      kind: "before-after",
      id: "reasons",
      eyebrow: "What changes",
      heading: "Why copies get made, and what gives each reason less force",
      beforeLabel: "Reasons copies get made",
      afterLabel: "What GetSibu offers instead",
      before: ["A revision saved beside the original", "Files emailed around, then uploaded again", "A copy kept because the original is hard to find", "Work duplicated into each team’s folder"],
      after: ["Campaign versions kept without disconnected copies", "Library views shared without duplicating files", "Originals found through metadata, tags and extracted content", "Teams working from the same organised library"],
      sources: [{ kind: "pdf", page: 96 }, { kind: "pdf", page: 78 }, { kind: "pdf", page: 23 }, { kind: "pdf", page: 10 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "Product photography brought back to one record per shot",
      team: "An e-commerce brand",
      situation: "An e-commerce brand keeps product photography in the studio’s folders, on the marketing drive and among the web team’s exports. A retoucher corrected the colour of a popular product, but only one of its copies was updated, and a partner was sent an old one.",
      steps: [
        { heading: "The locations come together", body: ["The brand brings its folders and drives into ", { text: "one central library", page: 6 }, ", so every copy of a shot now sits in the same place rather than in separate systems."] },
        { heading: "Copies are identified", body: "Duplicate detection identifies identical files and visually equivalent copies, including web exports that were renamed or re-encoded along the way." },
        { heading: "The team decides what stays", body: "For each product, the photography lead keeps the corrected image and retains a separate export only where a channel genuinely needs one." },
        { heading: "Unneeded copies are removed", body: ["Authorised users ", { text: "remove the remaining copies", page: 109 }, " in line with the brand’s policies and permissions."] },
        { heading: "Material for partners comes from approved content", body: ["Colleagues preparing images for partners take them from an ", { text: "approved-only view", page: 103 }, ", rather than from whichever copy they happened to have saved."] },
        { heading: "The next retouch joins the same asset", body: ["When another correction arrives, ", { text: "image version management", page: 98 }, " keeps the different versions of the visual in one structured record."] },
      ],
      outcome: "Each product has one image the brand relies on, the library no longer holds the same photograph in several places, and the next correction lands in the record colleagues already use.",
      link: { page: 230, label: "GetSibu for E-Commerce Brands" },
      sources: [{ kind: "pdf", page: 6 }, { kind: "pdf", page: 40 }, { kind: "pdf", page: 109 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 98 }, { kind: "pdf", page: 230 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "checklist",
      id: "weigh",
      eyebrow: "What to weigh",
      heading: "What to weigh when valuing fewer copies",
      variant: "chips",
      items: ["How much storage heavy video takes", "Copies that serve a real purpose", "Wrong-copy mistakes in past campaigns", "Effort of judging each set of matches", "Habits that keep creating copies", "Imports planned from older drives"],
      sources: [{ kind: "pdf", page: 350 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about duplicate reduction",
      items: [
        {
          question: "How can duplicate reduction be presented to a budget holder?",
          answer: ["As two separate lines. One is space: ", { text: "storage analytics", page: 183 }, " provide a view of how much space different asset categories consume, which puts copies of heavy media in context. The other is incidents, described plainly, where a wrong copy caused rework or reached a partner. Keeping them apart stops the easier one to quantify from standing in for the whole return."],
        },
        {
          question: "Does duplicate reduction mean keeping fewer versions?",
          answer: ["No. A version and a duplicate are different things. ", { text: "Asset replacement", page: 93 }, " maintains versions within the asset record, whereas a duplicate is a separate file holding the same content, and reduction is concerned with the second."],
        },
        {
          question: "Where does duplicate reduction fit in a DAM business case?",
          answer: ["It offers both a cost argument and a risk argument. In a ", { text: "DAM business case", page: 359 }, ", fewer copies support the argument for improved organisation and the argument for stronger governance over what gets distributed."],
        },
      ],
      sources: [{ kind: "pdf", page: 183 }, { kind: "pdf", page: 93 }, { kind: "pdf", page: 359 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on copies, storage and confidence",
      variant: "compact",
      pages: [40, 112, 357, 368, 230, 348],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the closest duplicate and return-on-investment pages." }],
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
