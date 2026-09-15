/**
 * 285 · S3 Migration — /migration/s3-migration
 *
 * HELD draft (claim: storage-sources). Angle: a large library held in S3 becoming part of the GetSibu environment;
 * the collection was built for software, so engineering and creative owners must share the planning.
 * page 125 owns S3 as an ongoing storage source; Large Library Migration (131) owns scale in
 * general. Nothing about setup, credentials, transfer mechanics, duration, limits or migration support.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how object-storage collections are organised and what that means for a migration; states no GetSibu or S3 capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 285,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Migration",
      lede: "Plan how a large library held in S3 becomes part of the GetSibu environment, with the people who run the storage and the people who will use the library agreeing scope, structure and descriptions before the volume moves.",
      visual: { diagram: "migration-map", focus: "import" },
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 285 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A store built for software, joining a creative environment",
      body: [
        "Large libraries stored in S3 can become part of the GetSibu environment. Where object storage has been the place media quietly accumulates, that is a change of role: from a store that applications write to, towards a library that people search and work in.",
        "S3 migrations differ from drive migrations in who understands the collection. A shared drive is known by the people who saved into it; a bucket is known by the engineers who designed its key scheme and by the systems that fill it. The creative teams who will use the library may never have looked inside, so the knowledge needed to plan sits with people who will not use the result.",
        "Scale shapes everything else. When a collection holds years of pipeline output, archived footage or recorded content, nobody can review it by eye, and decisions about scope, order and checking have to be made about categories of material rather than individual files.",
        [
          "Two topics set out the general practice. ",
          { text: "Large library migration", page: 131 },
          " is about big creative libraries moving while important metadata and folder relationships are preserved, and ",
          { text: "digital asset migration planning", page: 290 },
          " makes sure assets, metadata and permissions are considered before the transfer begins.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Large libraries stored in S3", "Part of the GetSibu environment", "From application store to library", "Knowledge held by engineers", "Decisions by category, not by file"],
      },
      highlight: {
        heading: "In practice",
        body: "A broadcaster’s archive team and its platform engineers go through a sample of the bucket together and agree which rendition should represent each programme before anything moves.",
        tags: ["Broadcast", "Engineering", "Archives"],
      },
      glance: {
        heading: "S3 migration in brief",
        facts: [
          { label: "Area", value: "Migration" },
          { label: "Starts from", value: "Large libraries stored in S3" },
          { label: "Becomes", value: "Part of the GetSibu environment" },
          { label: "At this scale", value: "Large Library Migration", page: 131 },
        ],
      },
      sources: [{ kind: "pdf", page: 285 }, { kind: "pdf", page: 131 }, { kind: "pdf", page: 290 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "ownership",
      eyebrow: "Shared ownership",
      heading: "Who brings what to each decision in an S3 migration",
      intro: "The move works when those who run the storage and those who will use the library each own the decisions they are best placed to make.",
      columns: ["Engineering or operations", "Library owner and creative teams"],
      rows: [
        { label: "Scope", cells: ["Which buckets and prefixes hold media, and what else sits beside it", "Which material people will actually look for"] },
        { label: "Structure", cells: ["How the collection is organised today, and why", "Whether that arrangement is mirrored or remapped for browsing"] },
        { label: "Descriptions", cells: ["Where descriptive information about each file is kept", "Which details matter enough to carry across"] },
        { label: "Order", cells: ["Which parts other systems still rely on", "Which collections people need first"] },
        { label: "Checking", cells: ["Counts that show what was in scope", "Samples that show assets arrived usable and findable"] },
        { label: "Afterwards", cells: ["What the systems that wrote to the bucket do next", "Where colleagues look for material from now on"] },
      ],
      sources: [{ kind: "pdf", page: 285 }, { kind: "pdf", page: 287 }, { kind: "pdf", page: 286 }, { kind: "pdf", page: 296 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "considerations",
      eyebrow: "Considerations",
      heading: "What makes a large S3 library different to move",
      items: [
        {
          heading: "Descriptions kept outside the files",
          summary: "Applications often record titles, owners and dates in their own databases rather than in the media itself.",
          icon: "database",
          body: [
            "A video platform or product system may know each file’s title, course or rights status while the file carries almost nothing. Plan how that knowledge will stay connected to the files, because once the move is under way the link is easy to lose.",
          ],
        },
        {
          heading: "Objects nobody has opened in years",
          summary: "Large buckets hold material whose value no one currently knows.",
          icon: "archive",
          body: [
            [
              "Pipeline storage keeps intermediate renders, superseded encodes and test output long after anyone needed them. Excluding clearly obsolete categories before the move is cheaper than finding them later, and ",
              { text: "library health analytics", page: 196 },
              " can afterwards reveal duplicates, inactive content and other patterns in what did come across.",
            ],
          ],
        },
        {
          heading: "Several renditions of the same work",
          summary: "Media pipelines usually store more than one version of each file for different uses.",
          icon: "copy",
          body: [
            "One film may exist as a master and several encodes for different screens. People searching a library generally want one asset per piece of work, not every rendition, so decide which version represents the work and whether the others need to come across at all.",
          ],
        },
        {
          heading: "Systems that keep writing",
          summary: "The applications that fill a bucket do not pause because a migration has started.",
          icon: "refresh",
          body: [
            [
              "Render queues, upload services and platforms may add files throughout the move, so agree what the migration covers and decide how material added afterwards will be handled. During the transition, GetSibu’s ",
              { text: "migration workflow", page: 292 },
              " is designed to let organisations keep using existing storage while content is indexed in the background.",
            ],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 196 }, { kind: "pdf", page: 292 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "Years of course recordings brought into one library",
      team: "An online learning company",
      situation: "An online learning company has stored course videos, lecture recordings and slide exports in S3 for years, organised by its video platform’s internal identifiers. Course designers who want to reuse an old lecture have to ask engineers to find it.",
      steps: [
        {
          heading: "Engineers explain the collection",
          body: "The platform team documents which prefixes hold course media, what the identifiers mean and where titles and instructors are recorded.",
        },
        {
          heading: "The content team sets the scope",
          body: "Course designers choose the recordings and slide exports worth reusing, and leave test encodes and superseded renditions out.",
        },
        {
          heading: "Descriptions are written into the files",
          body: ["Before the move, engineers add course titles and instructor names to each file’s embedded metadata, the kind of detail that ", { text: "can be retained during migration", page: 286 }, "."],
        },
        {
          heading: "Recent courses move first",
          body: "The most requested recordings come across first, with older courses following once the first batch has been checked.",
        },
        {
          heading: "Designers test what they need",
          body: ["Course designers search for lectures they already know, while ", { text: "migration verification", page: 296 }, " helps confirm that important content and metadata transferred correctly."],
        },
      ],
      outcome: "Course designers reuse past lectures without filing a request with engineering, and the video platform’s storage is no longer the only place that knows what the company has recorded.",
      link: { page: 237, label: "GetSibu for Education Teams" },
      sources: [{ kind: "pdf", page: 285 }, { kind: "pdf", page: 286 }, { kind: "pdf", page: 296 }, { kind: "pdf", page: 237 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about S3 migration",
      items: [
        {
          question: "Is an S3 migration a good moment to reduce how much media is kept?",
          answer: ["It is a natural moment to leave out test output and redundant renditions. Once the library is in use, ", { text: "storage analytics", page: 183 }, " show how much space different asset categories consume, which helps keep it in proportion."],
        },
        {
          question: "How is an S3 migration different from using S3 as a storage source?",
          answer: "Using S3 as a source connects the collection to the library. A migration decides that the collection becomes part of the GetSibu environment, which raises questions of scope, descriptions and what the writing systems do afterwards.",
        },
        {
          question: "Who should own an S3 library once it has moved into GetSibu?",
          answer: "A library owner on the creative or content side rather than the engineers who looked after the bucket. Engineering stays involved wherever applications still produce material, but everyday decisions about structure and description belong with the people who use the library.",
        },
      ],
      sources: [{ kind: "pdf", page: 285 }, { kind: "pdf", page: 183 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on moving large collections",
      variant: "compact",
      pages: [131, 290, 286, 292, 296, 196],
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
