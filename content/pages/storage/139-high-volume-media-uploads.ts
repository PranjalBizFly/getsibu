/**
 * 139 · High-Volume Media Uploads — /storage/high-volume-media-uploads
 *
 * Angle (cluster: uploads): volume as an operating condition — large amounts of video and imagery from many
 * contributors, arriving in surges — and what ingestion has to cope with around the transfer. Media Upload
 * Management (136) owns visibility and recovery; Chunked Uploads (138) and Large File Performance (312) own
 * single large files; Parallel Uploads (142) owns batch efficiency; Bulk Asset Import (130) owns archives.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how busy creative teams produce and ingest media; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 139,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Storage & Ingestion",
      lede: "Prepare a library for the weeks when shoots, events and launches send far more video and imagery its way than usual, and see which capabilities bear on keeping that flow of material in order.",
      visual: { diagram: "ingest-pipeline", focus: "upload" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 139 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "When the amount of media becomes the challenge",
      body: [
        "Creative teams working with large amounts of video and imagery can use GetSibu ingestion workflows designed around high-volume asset environments. The concern here is how much material a team produces and brings in, not how big any one file happens to be.",
        "Volume changes the character of ingestion. When a few files arrive each week, whoever made them can add them, check them by eye and describe them by hand. Once a studio exports hundreds of selects from one shoot day, or an events crew films on several stages at once, every step that depends on one person’s attention turns into a queue: remembering to upload, confirming what arrived, naming, describing and deciding who should see the result.",
        "High volume is seldom steady, either. Material comes in surges around shoots, launches, live events and edit deadlines, then eases off. A library that keeps up in a quiet week can fall behind in a busy one, and a backlog built during a surge usually outlasts it.",
        [
          "The workload also continues after the transfer. Each uploaded asset moves through ",
          { text: "asset processing", page: 143 },
          " stages such as metadata extraction, thumbnail generation and AI-related processing, so a surge of uploads becomes a surge of preparation, review and organisation as well.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Large amounts of video and imagery", "Workflows designed for high volume", "Surges around shoots and launches", "Many contributors at the same time", "Work after upload grows with volume"],
      },
      highlight: {
        heading: "In practice",
        body: "After a weekend covering several matches, a sports content team’s Monday question is not whether one clip arrived but whether the whole weekend’s output is in the library and ready to be found.",
        tags: ["Sports content", "Events", "Video teams"],
      },
      glance: {
        heading: "High-volume uploads in brief",
        facts: [
          { label: "Area", value: "Storage & Ingestion" },
          { label: "Suited to", value: "Large amounts of video and imagery" },
          { label: "Batch efficiency", value: "Parallel Uploads", page: 142 },
          { label: "Upload workflow", value: "Media Upload Management", page: 136 },
        ],
        actions: [{ kind: "route", path: "/storage", label: "More in Storage & Ingestion" }]
      },
      sources: [{ kind: "pdf", page: 139 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 142 }, { kind: "pdf", page: 136 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "environments",
      eyebrow: "Environments",
      heading: "Where high volumes of creative media come from",
      tabs: [
        {
          label: "Production",
          heading: "Rushes, selects and exports from every shoot day",
          icon: "film",
          body: [
            "Film and video production creates material at each stage of the work: camera originals, proxies, selects, assemblies and exports for review. A production running several units at once multiplies all of it, and each stage adds files before the previous ones have been sorted.",
            ["Production studios can use GetSibu to ", { text: "organise large collections of footage", page: 211 }, " and manage versions without relying on scattered storage folders."],
          ],
          points: ["Material added at every stage of an edit", "Several units contributing at once"],
        },
        {
          label: "Product imagery",
          heading: "Every product, every angle, every season",
          icon: "camera",
          body: [
            "Retail and e-commerce studios photograph each item from several angles and in each colourway, then reshoot when packaging or a range changes. The output is large and repetitive, so near-identical images are part of normal work rather than a sign of carelessness.",
            ["For these teams, the aim is usually one place for product images, videos, campaign assets and marketing documents, which is how ", { text: "e-commerce brands can use GetSibu", page: 230 }, "."],
          ],
          points: ["Many similar images for each product", "Reshoots whenever a range changes"],
        },
        {
          label: "Events and news",
          heading: "Coverage that is needed while it is still current",
          icon: "news",
          body: [
            "Event coverage and news photography arrive in bursts throughout a day, and their value is greatest while the moment is still current. A team cannot wait for a quiet spell to add material, because the quiet spell comes after the demand has passed."
          ],
          points: ["Bursts across a single day", "Value that fades with time"],
        },
        {
          label: "Agencies",
          heading: "Many clients’ work arriving through one team",
          icon: "briefcase",
          body: [
            "An agency’s volume is the sum of its clients’ production, and each client brings its own naming habits, deliverables and people sending files. Keeping that material apart matters as much as keeping it moving.",
            ["Agencies can ", { text: "manage multiple client libraries from one platform", page: 162 }, " while maintaining separation between tenants, so a rush of work for one client does not spill into another’s library."],
          ],
          points: ["Different habits from each client", "Separation kept between tenants"],
        },
      ],
      sources: [{ kind: "pdf", page: 211 }, { kind: "pdf", page: 230 }, { kind: "pdf", page: 162 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "demands",
      eyebrow: "What volume demands",
      heading: "Needs that grow with the amount of incoming media",
      intro: "Each item pairs a general need of busy libraries with the capability that bears on it.",
      items: [
        {
          heading: "Intake that does not rely on memory",
          body: "When output never stops, the upload somebody forgets is the file that goes missing. Watch folders can be scanned continuously so that newly added content can enter the GetSibu workflow automatically.",
          icon: "refresh",
          points: ["No separate step to forget", "Suited to constant output"],
          page: 128,
        },
        {
          heading: "Preparation without manual cataloguing",
          body: "No one can describe a surge of new assets by hand as it lands. Background processing allows assets to be indexed without users performing metadata or AI processing themselves.",
          icon: "workflow",
          points: ["Indexing that is not a chore", "Work that does not wait for spare time"],
          page: 311,
        },
        {
          heading: "Tag review that keeps pace",
          body: "Suggested tags help only if checking them is manageable. Teams can approve suggestions in bulk, which is far quicker at this scale than reviewing each file on its own.",
          icon: "approval",
          points: ["Decisions made across many assets", "Classification still in human hands"],
          page: 47,
        },
        {
          heading: "Copies caught early",
          body: "Many contributors and repeated exports tend to produce copies. Duplicate detection combines exact and perceptual hashing to find identical files and visually equivalent copies, including renamed or re-encoded ones.",
          icon: "copy",
          points: ["Re-exports recognised", "Visually equivalent copies found"],
          page: 40,
        },
        {
          heading: "Readiness that can be checked",
          body: "In a busy week, people need to know which new assets they can already rely on. Processing status helps distinguish an asset that uploaded successfully from one that is fully indexed and searchable.",
          icon: "check",
          points: ["Arrived and ready told apart", "Less guessing about new work"],
          page: 145,
        },
        {
          heading: "Surges measured, not remembered",
          body: "A peak is easier to prepare for once the last one has been measured. Upload analytics show how much new content is entering the library over time.",
          icon: "chart",
          points: ["Past peaks as a guide", "Inflow seen across a season"],
          page: 184,
        },
      ],
      sources: [{ kind: "pdf", page: 128 }, { kind: "pdf", page: 311 }, { kind: "pdf", page: 47 }, { kind: "pdf", page: 40 }, { kind: "pdf", page: 145 }, { kind: "pdf", page: 184 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "An agency gets ready for a seasonal launch surge",
      team: "An advertising agency",
      situation: "An advertising agency knows that several clients will launch seasonal campaigns within the same few weeks. Last year the launch material arrived faster than anyone could file it, and the confusion lasted well into the following month.",
      steps: [
        { heading: "Last season is reviewed first", body: "The operations lead goes through what the previous launch produced and where the delays occurred, so this year’s surge is expected rather than discovered." },
        { heading: "The archive moves in a quiet month", body: ["A new client’s back catalogue is brought in beforehand through ", { text: "bulk asset import", page: 130 }, ", so years of past campaigns are not arriving in the same weeks as fresh production."] },
        { heading: "Capacity is considered client by client", body: ["Because ", { text: "client environments can have their own storage allocation", page: 163 }, ", the lead thinks about each client’s share of the coming surge separately instead of relying on one agency-wide estimate."] },
        { heading: "Conventions are agreed before the rush", body: "Freelance photographers and editors are briefed on how to name files and to send work in batches by shoot or by day, because conventions are hard to introduce once the surge has started." },
      ],
      outcome: "The launch weeks arrive into a library that was prepared for them, and the client teams spend the busiest period choosing and delivering work rather than tidying up after it.",
      link: { page: 219, label: "GetSibu for Advertising Agencies" },
      sources: [{ kind: "pdf", page: 130 }, { kind: "pdf", page: 163 }, { kind: "pdf", page: 219 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about high-volume media uploads",
      items: [
        {
          question: "How much media counts as high volume for a creative library?",
          answer: "There is no fixed line, and a number of files that is routine for one team can overwhelm another. A more useful test is whether material arriving in a busy week is found and used that week, or quietly left for later.",
        },
        {
          question: "Are high-volume media uploads the same as uploading very large files?",
          answer: ["No. Volume concerns how many assets arrive and how often; a single very large file is a question of reliability in transit, which is where ", { text: "chunked uploads", page: 138 }, " and ", { text: "large file performance", page: 312 }, " come in."],
        },
        {
          question: "Can high volumes of media come from software rather than people uploading?",
          answer: ["Yes, where material is produced by other systems, such as a render pipeline or a product photography tool. The ", { text: "asset upload API", page: 262 }, " allows external applications to send files into the GetSibu environment, so volume need not depend on someone uploading each batch by hand."],
        },
        {
          question: "Should a high-volume team upload everything it shoots?",
          answer: ["That is a policy decision rather than a technical one. Keeping only selects makes the library easier to search, while keeping everything preserves options for later; ", { text: "storage analytics", page: 183 }, " give a view of how much space each asset category consumes, which helps that choice rest on evidence."],
        },
      ],
      sources: [{ kind: "pdf", page: 138 }, { kind: "pdf", page: 312 }, { kind: "pdf", page: 262 }, { kind: "pdf", page: 183 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on handling large amounts of media",
      variant: "compact",
      pages: [136, 142, 141, 130, 128, 145],
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
