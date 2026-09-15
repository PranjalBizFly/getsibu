/**
 * 55 · AI Media Automation — /features/ai-media-automation
 *
 * Angle (cluster ai-approach): the repetitive tasks automation reduces — tagging and OCR extraction, with
 * classification, duplicate identification and processing work from their own pages. Two items in the PDF
 * list are unconfirmed claims and are deliberately left out.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of which library tasks suit automation in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 55,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "AI",
      lede: "A practical inventory of the repetitive media chores automation can take on in GetSibu, from first tags to extracted text, and a way to decide which tasks belong with automation and which stay with people.",
      visual: { diagram: "ingest-pipeline", focus: "processing" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 55 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 38 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "The chores that repeat with every file",
      body: [
        "AI automation in GetSibu reduces repetitive work on media. Tagging and OCR extraction are two of the tasks where that reduction is felt.",
        "Every asset entering a library brings the same small obligations: describe it, record any text it contains, put it in the right category, check that it is not a copy of something already there. Each chore takes moments, which is exactly why they are neglected. Multiplied across a shoot or a migration, those moments become days of work that nobody has scheduled.",
        [
          "Automation can turn much of that work into a by-product of adding files. The broader case is made in ",
          { text: "asset management efficiency", page: 356 },
          ", where automation helps reduce the repetitive work of tagging, organising and locating assets. The balance with human approval is covered under ",
          { text: "AI-powered asset management", page: 45 },
          ".",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Repetitive tasks reduced", "Tagging without starting from scratch", "Text extracted rather than retyped", "Less work at every upload", "People keep the judgement calls"],
      },
      highlight: {
        heading: "In practice",
        body: "A set of exported presentation slides arrives with numbered filenames. Nobody retypes their headings or invents keywords for them; the extracted text and suggested tags give the team something to check instead.",
        tags: ["Library managers", "Contributors", "Processing"],
      },
      glance: {
        heading: "Media automation in brief",
        facts: [
          { label: "Area", value: "AI" },
          { label: "Reduces", value: "Repetitive tasks such as tagging and OCR extraction" },
          { label: "Balanced by", value: "AI-Powered Asset Management", page: 45 },
          { label: "Business value", value: "Asset Management Efficiency", page: 356 },
        ],
        actions: [{ kind: "route", path: "/features/ai", label: "More in AI" }]
      },
      sources: [{ kind: "pdf", page: 55 }, { kind: "pdf", page: 356 }, { kind: "pdf", page: 45 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "tasks",
      eyebrow: "What gets automated",
      heading: "Repetitive media tasks and what replaces them",
      items: [
        {
          heading: "First tags",
          body: "Instead of an uploader inventing keywords, tags are suggested during asset processing and reviewed by authorised users.",
          icon: "tag",
          points: ["A starting description for every file", "Review in place of typing"],
          page: 31,
        },
        {
          heading: "Text recovery",
          body: "Words in images, documents, presentations and screenshots are extracted by OCR, so nobody copies them out by hand to make a file searchable.",
          icon: "text",
          points: ["No retyping of slide or scan text", "Words searchable once processed"],
          page: 38,
        },
        {
          heading: "Sorting into categories",
          body: "Classification helps categorise assets by their content and available metadata, cutting down the repetitive part of organisation.",
          icon: "layers",
          points: ["Fewer files placed one by one", "Categories still defined by the team"],
          page: 42,
        },
        {
          heading: "Spotting copies",
          body: "Exact and perceptual hashing identify identical files and visually equivalent copies, a comparison that is impractical to make by eye across a large library.",
          icon: "copy",
          points: ["Renamed copies caught", "Re-encoded copies caught"],
          page: 40,
        },
        {
          heading: "Preparing previews and metadata",
          body: "Processing stages such as metadata extraction and thumbnail generation happen after upload, rather than as steps someone performs.",
          icon: "image",
          points: ["Visual previews without downloads", "Recorded details read from the file"],
          page: 143,
        },
        {
          heading: "Moving files in",
          body: "Automated media import reduces the manual movement of files between storage locations before any of the other work can begin.",
          icon: "upload",
          points: ["Less copying between locations", "Material ready for processing sooner"],
          page: 129,
        },
      ],
      sources: [{ kind: "pdf", page: 31 }, { kind: "pdf", page: 38 }, { kind: "pdf", page: 42 }, { kind: "pdf", page: 40 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 146 }, { kind: "pdf", page: 129 }],
    },
    {
      kind: "accordion",
      id: "what-to-automate",
      eyebrow: "Deciding the split",
      heading: "Which tasks suit automation and which stay manual",
      items: [
        {
          heading: "High volume, low judgement",
          summary: "The best candidates are chores that repeat identically for every file.",
          icon: "zap",
          body: [
            "Recording the text in a scan, noticing a duplicate or proposing a first description are the same operation whether it is the first file or the ten-thousandth. Tasks like these reward automation because consistency matters more than insight.",
          ],
        },
        {
          heading: "Rules that live outside the file",
          summary: "Anything decided by contracts, policies or brand rules needs a person.",
          icon: "flag",
          body: [
            ["Whether an image may still be used, or meets a brand requirement, cannot be read from its content. Those decisions belong to structures people maintain, such as ", { text: "expiry information", page: 104 }, " that helps identify content which should no longer be used after a specified period."],
          ],
        },
        {
          heading: "Results that need a second look",
          summary: "Automated output is a proposal until someone responsible accepts it.",
          icon: "eye",
          body: [
            ["Suggested tags and classifications save effort only if the team trusts them, and trust comes from review. Where many suggestions are sound, ", { text: "approving them in bulk", page: 47 }, " keeps that review proportionate to the volume."],
          ],
        },
        {
          heading: "Automation a team builds itself",
          summary: "Some repetitive work is specific to one organisation’s systems.",
          icon: "code",
          body: [
            ["Beyond what AI processing covers, ", { text: "developer automation", page: 278 }, " lets developers use APIs and webhooks to automate repetitive asset management workflows particular to their organisation."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 104 }, { kind: "pdf", page: 47 }, { kind: "pdf", page: 278 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A daily flow of social content processed without a tagging shift",
      team: "A social media team",
      situation: "A social media team produces graphics and photo sets every day. Until now, one person spent part of each afternoon naming, describing and filing the day’s output.",
      steps: [
        { heading: "Exports land in a watched location", body: ["Finished pieces are saved to a ", { text: "watch folder", page: 128 }, ", which is scanned continuously so new content enters the workflow."] },
        { heading: "Processing does the first pass", body: "Suggested tags give each graphic and photograph a first description, and the words set in graphics are extracted so campaign lines can be searched later." },
        { heading: "Reposts are recognised", body: "Several graphics were saved a second time under new names; duplicate detection identifies them as copies of existing files." },
        { heading: "A short review replaces the afternoon", body: "The team member who used to type descriptions now approves well-matched suggestions and corrects the few that use the wrong campaign term." },
      ],
      outcome: "The daily archive stays described and searchable, and the time once spent filing goes back into planning content.",
      link: { page: 234, label: "GetSibu for Social Media Teams" },
      sources: [{ kind: "pdf", page: 128 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 38 }, { kind: "pdf", page: 40 }, { kind: "pdf", page: 47 }, { kind: "pdf", page: 48 }, { kind: "pdf", page: 234 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about AI media automation",
      items: [
        {
          question: "Where does AI media automation make the most visible difference first?",
          answer: "Usually in the chores nobody was doing at all. Work that was skipped under pressure, such as describing every frame of a shoot or recording the text in scanned material, shows the clearest change, because the starting point was nothing rather than a slower manual version.",
        },
        {
          question: "How can a team tell when automated media processing has finished?",
          answer: ["Check the ", { text: "AI processing queue", page: 144 }, ", which provides status information showing whether an asset is queued, processing or ready."],
        },
        {
          question: "Does AI media automation help with an existing library, not just new uploads?",
          answer: ["Yes. ", { text: "Bulk asset import", page: 130 }, " helps organisations move large existing libraries in without uploading each file by hand. On the platform, importing assets and automatically processing media belong to the same flow."],
        },
        {
          question: "Is automation worthwhile for a small creative team?",
          answer: "Often it matters more. Small teams rarely have anyone whose job is describing files, so the chores simply do not get done unless they happen as part of adding content.",
        },
      ],
      sources: [{ kind: "pdf", page: 144 }, { kind: "pdf", page: 130 }, { kind: "pdf", page: 2 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on automating library work",
      variant: "compact",
      pages: [31, 38, 40, 45, 356, 278],
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
