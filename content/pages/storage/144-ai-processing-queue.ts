/**
 * 144 · AI Processing Queue — /storage/ai-processing-queue
 *
 * Angle (cluster: processing): the queue states — queued, processing, ready — what each means for the people
 * using a library, why AI work is lined up at all, and how to plan around the states without treating them as a
 * timetable. Asset Processing (143) owns the stages; Media Processing Status (145) owns uploaded versus fully
 * indexed and searchable; Asset Processing Performance (311) owns background processing as a design.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how work queues behave in general; states no GetSibu capability beyond the cited pages and gives no timings." } as const;

const page: PageContent = {
  page: 144,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Storage & Ingestion",
      lede: "Learn what it means when an asset’s AI work is queued, processing or ready, why work of this kind is usually lined up rather than done all at once, and how to organise reviews and deadlines around each state.",
      visual: { diagram: "ingest-pipeline", focus: "processing" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 144 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Three states that place an asset in its AI work",
      body: [
        "AI processing in GetSibu provides status information, so users can understand whether an asset is queued, processing or ready. The states answer a question people would otherwise ask one another: has the AI work on this file happened yet?",
        "Queues are the usual way systems deal with work that arrives unevenly. Analysing images, reading text inside documents and preparing content for discovery all take more effort than storing a file, and uploads seldom arrive at a tidy, even rate. In general, work is lined up and taken on in turn instead of all at the moment it lands, which stops a sudden wave of uploads from overwhelming the process.",
        "For the people using a library, a queue is only as helpful as it is visible. Work hidden in the background breeds confusion, because an image uploaded moments ago that has no suggested tags looks like a fault. A visible state turns the same situation into an expectation: “queued” suggests the work is still to come rather than that something has broken.",
        [
          "AI-related processing is one of the ",
          { text: "asset processing", page: 143 },
          " stages that follow upload, next to metadata extraction and thumbnail generation, and its results can include ",
          { text: "suggested tags", page: 31 },
          " for authorised users to review.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Queued, processing or ready", "Work lined up and taken in turn", "Visible states instead of guesswork", "A state, not a schedule", "A state for each asset"],
      },
      highlight: {
        heading: "In practice",
        body: "A librarian planning an afternoon of tag review starts with the assets that are ready and leaves the queued ones for the next morning, rather than checking back on them every so often.",
        tags: ["Librarians", "Tag review", "Planning"],
      },
      glance: {
        heading: "AI queue states in brief",
        facts: [
          { label: "Area", value: "Storage & Ingestion" },
          { label: "States", value: "Queued, processing, ready" },
          { label: "Part of", value: "Asset Processing", page: 143 },
          { label: "Searchability", value: "Media Processing Status", page: 145 },
        ],
        actions: [{ kind: "route", path: "/storage", label: "More in Storage & Ingestion" }]
      },
      sources: [{ kind: "pdf", page: 144 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 145 }, EXPLAINS],
    },
    {
      kind: "workflow",
      id: "states",
      eyebrow: "The states",
      heading: "What each state means and what a person can usefully do",
      stages: [
        { label: "Queued", body: "The asset is waiting for its AI work to begin. Anything that depends on AI results for this asset is better scheduled for later than started now." },
        { label: "Processing", body: "The AI work on the asset is under way. It is a good time to turn to tasks that do not depend on the results, such as drafting the brief the asset will be used in." },
        { label: "Ready", body: "The asset’s AI processing is no longer waiting or under way, so work that relies on its results can sensibly begin." },
        { label: "Then, human review", body: "Where AI processing has produced suggested tags, teams can approve them in bulk, which keeps the review of a large arrival manageable.", page: 47 },
      ],
      sources: [{ kind: "pdf", page: 144 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 47 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "misreadings",
      eyebrow: "Reading the states",
      heading: "Common misreadings of AI queue states",
      items: [
        {
          heading: "Queued is not in itself a fault",
          summary: "Waiting is where an asset’s AI work begins.",
          icon: "clock",
          body: [
            "Every asset has to wait its turn before its AI work starts, so seeing an asset queued tells you where it stands rather than that something has gone wrong. The sensible first response is patience, not intervention.",
          ],
        },
        {
          heading: "Ready describes the AI work, not the whole asset",
          summary: "Other questions about an asset have answers of their own.",
          icon: "approval",
          body: [
            ["An asset whose AI processing is ready may still be a draft or still be awaiting sign-off. ", { text: "Review status", page: 76 }, " is what indicates whether an asset needs attention or has completed the approval process."],
          ],
        },
        {
          heading: "Ready says nothing about accuracy",
          summary: "A state reports where the work stands, not how well it went.",
          icon: "tag",
          body: [
            ["Suggestions from an asset whose AI processing is ready still deserve a look. AI recommendations are not permanent, and authorised users can ", { text: "override tags", page: 48 }, " whenever the generated classification does not match the team’s intended taxonomy."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 144 }, { kind: "pdf", page: 76 }, { kind: "pdf", page: 48 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "situations",
      eyebrow: "By situation",
      heading: "Reading queue states during different kinds of arrival",
      tabs: [
        {
          label: "A shoot delivery",
          heading: "Selects that colleagues are waiting to use",
          icon: "camera",
          body: [
            "A delivery of selects often arrives with a deadline attached. The three states describe where each asset stands but not when it will move on, so a plan in which a tag review must be finished by a set hour should leave room for assets that are still queued or processing.",
          ],
          points: ["Deadlines that allow for waiting", "No pace read into a state"],
        },
        {
          label: "A bulk import",
          heading: "An archive arriving all at once",
          icon: "archive",
          body: [
            ["When a large existing library is brought in through ", { text: "bulk asset import", page: 130 }, ", a great many assets can need AI work at the same time. Reviewing that archive in sensible portions, such as one former project or one year at a time, as its assets reach ready keeps the work from becoming a single overwhelming task."],
          ],
          points: ["Many assets waiting together", "Review in manageable portions"],
        },
        {
          label: "A migration",
          heading: "A library moved while people keep working",
          icon: "refresh",
          body: [
            ["A ", { text: "migration without downtime", page: 292 }, " is intended to keep existing storage usable while the incoming content is indexed in the background. Throughout that stretch, the state shown on an individual asset helps explain why some migrated material already carries AI results and some does not yet."],
          ],
          points: ["Old storage still in use", "Uneven results explained, not feared"],
        },
      ],
      sources: [{ kind: "pdf", page: 130 }, { kind: "pdf", page: 292 }, { kind: "pdf", page: 144 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about the AI processing queue",
      items: [
        {
          question: "Does ready in the AI processing queue mean an asset is searchable?",
          answer: ["They are separate questions. The queue concerns AI work, while ", { text: "media processing status", page: 145 }, " is what distinguishes an asset that has uploaded successfully from one that is fully indexed and searchable."],
        },
        {
          question: "What should a team do if an asset seems to stay queued in AI processing for a long time?",
          answer: "Look first at what else has arrived recently, since a large import or a busy upload day can leave many assets waiting together. If nothing like that explains it, raise it with the people who look after the library, naming the asset and when it was added.",
        },
        {
          question: "Who needs to pay attention to AI processing queue states?",
          answer: "Mostly people whose next task relies on AI results, and those looking after a large arrival of material. Colleagues adding a handful of files seldom need to think about the states at all.",
        },
      ],
      sources: [{ kind: "pdf", page: 145 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on following assets through processing",
      variant: "compact",
      pages: [143, 145, 47, 76, 311, 130],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Bring Your Creative Assets Together",
      conversionPage: 392,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 392 }],
    },
  ],
};

export default page;
