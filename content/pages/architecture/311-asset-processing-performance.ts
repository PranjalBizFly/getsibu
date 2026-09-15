/**
 * 311 · Asset Processing Performance — /architecture/asset-processing-performance
 *
 * Angle (clusters: processing, performance): background processing as a performance design — why the slow work
 * of preparing assets is separated from the moment of upload, what a queue does during bursts, and what that
 * separation asks of the people using the library. Asset Processing (143) owns the stages; AI Processing Queue
 * (144) owns the queue states; Media Processing Status (145) owns uploaded versus searchable; Creative Asset
 * Indexing (21) owns the indexed outcome. No throughput, processing times or queue durations.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of background processing as a general design pattern; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 311,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Architecture & Performance",
      lede: "Learn why GetSibu prepares assets through background processing rather than making people do metadata and AI work themselves, what that design changes when a lot of material arrives at once, and what to expect between a file arriving and an asset being ready.",
      visual: { diagram: "ingest-pipeline", focus: "processing" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 311 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Slow preparation kept apart from the people using the library",
      body: [
        "Background processing allows GetSibu to index assets without users having to perform metadata or AI processing by hand. The work that turns a file into something searchable runs as a job the platform carries out after the file has arrived, not as a chore for whoever added it.",
        "Preparing creative media can take far longer than the transfer that delivered it. If that work ran inside the upload, every upload would last as long as its slowest step, and whoever added a file would be kept waiting for work that has nothing to do with sending it.",
        [
          "The individual stages, from metadata extraction to thumbnail generation and AI-related processing, are described under ",
          { text: "asset processing", page: 143 },
          ", and the indexed picture of the library they produce under ",
          { text: "creative asset indexing", page: 21 },
          ".",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Preparation separated from the upload", "No manual metadata or AI step", "Queued, processing or ready", "Arrived is not the same as ready", "Bursts of arrivals"],
      },
      highlight: {
        heading: "In practice",
        body: "An editor adds a long master just before leaving the studio for the evening. The transfer is complete; the preparation that will make the footage findable carries on without anyone staying behind to start it.",
        tags: ["Editors", "Library managers", "Uploads"],
      },
      glance: {
        heading: "Background processing in brief",
        facts: [
          { label: "Area", value: "Architecture & Performance" },
          { label: "Removes", value: "Manual metadata and AI processing" },
          { label: "Stages", value: "Asset Processing", page: 143 },
          { label: "Queue states", value: "AI Processing Queue", page: 144 },
        ],
        actions: [{ kind: "route", path: "/architecture", label: "More in Architecture & Performance" }]
      },
      sources: [{ kind: "pdf", page: 311 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 21 }, { kind: "pdf", page: 144 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "inline-or-background",
      eyebrow: "Two designs",
      heading: "Preparing files during the upload or after it",
      intro: "Both columns describe general design patterns rather than any one product.",
      columns: ["Processing inside the upload", "Processing in the background"],
      emphasis: 1,
      rows: [
        ["When the upload counts as finished", "Only after every preparation step has run", "Once the file has arrived intact"],
        ["Effect of one slow step", "Everyone adding files waits for it", "The job takes longer while people move on"],
        ["A sudden wave of arrivals", "Contends with people searching and browsing", "Joins a queue that is worked through"],
        ["Adding a new kind of analysis", "Lengthens every future upload", "Adds work behind the upload instead"],
        ["What people need to be told", "Only whether the upload succeeded", "Whether preparation has finished as well"],
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "accordion",
      id: "design-questions",
      eyebrow: "Design questions",
      heading: "What makes background processing work well",
      items: [
        {
          heading: "A queue turns bursts into a steady flow",
          summary: "Arrivals and processing can run at different rates when a queue sits between them.",
          body: [
            "Creative material seldom arrives evenly. A shoot wraps, an agency delivers a campaign, a migration starts, and a quiet library suddenly receives more work than it can prepare at once. A queue records each job and lets processing take them in turn, so the backlog grows during the rush and shrinks afterwards instead of the whole system slowing to match the peak.",
            "The trade-off is waiting. A queue never makes work disappear; it decides where the waiting happens, and a sound design places it on jobs rather than on people.",
          ],
          icon: "workflow",
        },
        {
          heading: "Light results can come before heavy ones",
          summary: "Ordering the stages decides what becomes useful first.",
          body: [
            "Preparation steps differ greatly in cost. Reading embedded details and making a small preview image are quick; analysing content with AI models or extracting text from long documents is much heavier. Pipelines in general can be arranged so that the quick steps finish first and the slow ones follow.",
            "Whether partly prepared assets are visible, and what can be done with them before every stage has run, varies between platforms. It is a fair thing to check during an evaluation, particularly for teams that need to glance at new material soon after it lands.",
          ],
          icon: "layers",
        },
        {
          heading: "Interactive work should not compete with processing",
          summary: "Heavy jobs and the requests people are waiting on have different priorities.",
          body: [
            "Processing is demanding work that nobody watches in progress, while searches, previews and page views are light requests that someone is waiting for right now. In any system where both draw on the same capacity, a large import can make everyday searching feel sluggish for people who have nothing to do with it.",
            "Platform designs in general therefore try to stop heavy preparation from crowding out the requests people are actively waiting on. How a particular platform does so is a reasonable question to raise during an evaluation.",
          ],
          icon: "gauge",
        },
        {
          heading: "The biggest test is a large import",
          summary: "Migration puts the most preparation work into the system at one time.",
          body: [
            [
              "Moving an existing collection creates more processing than any ordinary week of uploads. GetSibu’s ",
              { text: "migration workflow", page: 292 },
              " is designed to let organisations continue using their existing storage while content is indexed in the background, so the move does not depend on the library being finished before anyone can work.",
            ],
            "When planning a migration, it helps to decide which collections matter first. The material people will look for in the first week is a better starting point than whatever happens to sit at the top of the old folder tree.",
          ],
          icon: "database",
        },
        {
          heading: "Asynchronous work has to be visible",
          summary: "When preparation happens later, people need a way to see where it has got to.",
          body: [
            "A background design moves work out of sight, and anything out of sight invites guesswork. Someone who uploaded a file a minute ago and cannot find it will assume something went wrong unless the library tells them otherwise.",
            [
              "That is why readiness needs a status of its own. In GetSibu, ",
              { text: "processing status", page: 145 },
              " helps teams distinguish between an asset that has uploaded successfully and one that is fully indexed and searchable.",
            ],
          ],
          icon: "eye",
        },
      ],
      sources: [{ kind: "pdf", page: 292 }, { kind: "pdf", page: 145 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A new product range prepared while the campaign carries on",
      team: "An e-commerce brand",
      situation: "An e-commerce brand’s studio is shooting photography for a new range all week, while the marketing team is busy running a live campaign from the same library.",
      steps: [
        {
          heading: "Exports go to a watched location",
          body: ["The studio saves its selects to a watch folder. Because ", { text: "watch folders can be scanned continuously", page: 128 }, ", each export can enter the workflow without anyone uploading it by hand."],
        },
        {
          heading: "Nobody stops to catalogue the shots",
          body: "The photographers keep shooting and the marketers keep working on the campaign. Nobody fills in fields for the new images or starts an analysis on them.",
        },
        {
          heading: "Progress is checked, not guessed",
          body: ["Before briefing the web team, the producer looks at the ", { text: "AI processing queue", page: 144 }, " to see which shots are still queued or processing and which are ready."],
        },
        {
          heading: "Suggested tags get a human pass",
          body: ["With the first batch ready, a librarian reviews the tags suggested for it, ", { text: "approves the sound ones in bulk", page: 47 }, " and overrides the few that do not match the brand’s taxonomy."],
        },
      ],
      outcome: "The new range becomes part of the searchable library over the week without pulling anyone off the campaign, and the web team is briefed on shots that are ready rather than on files that have merely arrived.",
      link: { page: 230, label: "GetSibu for E-Commerce Brands" },
      sources: [{ kind: "pdf", page: 128 }, { kind: "pdf", page: 311 }, { kind: "pdf", page: 144 }, { kind: "pdf", page: 47 }, { kind: "pdf", page: 9 }, { kind: "pdf", page: 230 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about asset processing performance",
      items: [
        {
          question: "How long does asset processing take after an upload to GetSibu?",
          answer: "There is no single duration. It varies with the kind and size of material and with how much else is arriving at the same time, so an asset’s status is a better guide than an estimate.",
        },
        {
          question: "Does a faster upload make an asset ready sooner?",
          answer: ["Only for the first part of the journey. Once a file has arrived, readiness depends on the ", { text: "processing stages", page: 143 }, " that follow, so a quicker transfer shortens the wait for arrival but not the preparation after it."],
        },
        {
          question: "How is asset processing performance different from asset processing itself?",
          answer: "Asset processing is what happens to a file: the stages it passes through. Processing performance concerns how that work is arranged around the people using the library, so that preparation does not hold them up.",
        },
        {
          question: "Does background processing matter for a small creative library?",
          answer: "Yes, though it shows most at scale. Even one long video can take a while to prepare, and nobody benefits from waiting for that before carrying on. In a small library the queue is simply short most of the time.",
        },
      ],
      sources: [{ kind: "pdf", page: 143 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on preparing assets without delay",
      variant: "compact",
      pages: [143, 144, 145, 21, 312, 320],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Scale Your Creative Library",
      conversionPage: 397,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 397 }],
    },
  ],
};

export default page;
