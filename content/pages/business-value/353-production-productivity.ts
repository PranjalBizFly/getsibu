/**
 * 353 · Production Productivity — /business-value/production-productivity
 *
 * Angle (cluster: productivity): the production schedule — time lost reviewing large amounts of footage and
 * searching disconnected storage, traced stage by stage, with what a production team should weigh.
 * GetSibu for Production Studios (211) owns the studio library; Production Collaboration (81) owns coordination;
 * Fast Asset Discovery (20) and AI Creative Operations (59) cover production only in passing.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of production workflows and where time goes; states no GetSibu capability beyond the cited pages and supplies no figures." } as const;

const page: PageContent = {
  page: 353,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "centered",
      eyebrow: "Business Value",
      lede: "Where a production schedule loses time to reviewing footage and searching disconnected storage, what changes at each stage when footage is indexed, previewed and discussed in one library, and what a production team should weigh before counting the gain.",
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 353 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Footage outgrows the time to watch it",
      body: [
        "Production teams can reduce the time spent reviewing large amounts of footage and searching through disconnected storage. Both costs grow with the volume of material a production gathers, and neither is visible in the finished film.",
        "Productions routinely shoot far more than they use. Alternate takes, pickups, archive clips and reference material pile up across cameras, drives and delivery folders. Finding one usable shot can mean scrubbing through material someone has already watched once, on a drive that may not even be connected to the machine in front of you.",
        ["Footage review is the concern of ", { text: "searchable video libraries", page: 25 }, ", and disconnected storage the concern of a ", { text: "centralised creative asset library", page: 6 }, ". Both costs turn up at almost every stage of a production, so the gains are spread across the schedule rather than concentrated in one place."],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Footage volume outpaces viewing time", "Footage found without watching everything", "One location instead of disconnected drives", "Previews before downloads", "Feedback on specific moments in footage"],
      },
      highlight: {
        heading: "In practice",
        body: "An assistant editor asked for warehouse footage from an earlier shoot should not have to rewatch every rush to find it. The gain begins when footage can be narrowed down before anyone presses play.",
        tags: ["Editors", "Producers", "Footage"],
      },
      glance: {
        heading: "Production productivity in brief",
        facts: [
          { label: "Area", value: "Business value" },
          { label: "Main costs", value: "Footage review and disconnected storage" },
          { label: "Studio view", value: "GetSibu for Production Studios", page: 211 },
          { label: "Coordination", value: "Production Collaboration", page: 81 },
        ],
        actions: [{ kind: "route", path: "/business-value", label: "More in Business Value" }]
      },
      sources: [{ kind: "pdf", page: 353 }, { kind: "pdf", page: 25 }, { kind: "pdf", page: 6 }, { kind: "pdf", page: 211 }, { kind: "pdf", page: 81 }, EXPLAINS],
    },
    {
      kind: "timeline",
      id: "stages",
      eyebrow: "Across a production",
      heading: "Where footage review time goes, stage by stage",
      items: [
        { label: "Ingest", body: "As footage arrives it moves through processing such as metadata extraction, thumbnail generation and AI-related processing, and background processing indexes it without anyone running that processing by hand." },
        { label: "Selecting", body: "Editors looking for usable material can discover relevant footage through indexed, AI-enriched information instead of reviewing every file themselves." },
        { label: "Checking", body: "Before committing to a clip, an editor can inspect it through a streaming preview without waiting for a complete download." },
        { label: "Reviewing", body: "Directors and producers can discuss specific moments in the footage rather than describing approximate locations through messages." },
        { label: "Revising", body: "Different cuts and revisions are managed with their version history kept on the asset, so earlier cuts remain part of the same record." },
      ],
      sources: [{ kind: "pdf", page: 143 }, { kind: "pdf", page: 311 }, { kind: "pdf", page: 25 }, { kind: "pdf", page: 147 }, { kind: "pdf", page: 65 }, { kind: "pdf", page: 97 }, EXPLAINS],
    },
    {
      kind: "before-after",
      id: "storage",
      eyebrow: "Before and after",
      heading: "Handling footage before and after one library",
      beforeLabel: "Footage across disconnected storage",
      afterLabel: "Footage in one GetSibu library",
      before: ["Rushes split across drives and delivery folders", "A drive borrowed just to check its contents", "Archive clips requested from whoever filed them", "Finished productions mixed into current searches"],
      after: ["Connected drives, local infrastructure and uploads in one place", "The library searched as a whole, not drive by drive", "Search that does not rely on who stored a file", "Closed productions archived out of everyday discovery"],
      sources: [{ kind: "pdf", page: 6 }, { kind: "pdf", page: 16 }, { kind: "pdf", page: 24 }, { kind: "pdf", page: 108 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "why-footage",
      eyebrow: "Why it takes so long",
      heading: "What makes footage so slow to work with",
      items: [
        {
          heading: "Camera filenames describe the card, not the shot",
          summary: "Clip names say which card a file came from and little about what was filmed.",
          icon: "film",
          body: [
            "Rushes usually arrive named by camera and clip sequence. Until someone describes the material, the only reliable way to know what a clip contains is to watch it, which is why logging footage has long been a production task in its own right.",
            ["Whatever context does exist is worth keeping when older footage moves across: with ", { text: "metadata preservation", page: 132 }, ", details such as EXIF, XMP, creators, file paths and custom keywords can be preserved during migration."],
          ],
        },
        {
          heading: "Knowledge leaves when a crew disbands",
          summary: "Productions are temporary teams, and what they knew about the footage rarely stays behind.",
          icon: "users",
          body: [
            "Editors, assistants and producers move on at wrap. The person who remembers which day produced the usable exterior is often on another job by the time a pickup, a trailer or a later series needs it.",
            [{ text: "Asset ownership", page: 115 }, " provides context about who created or uploaded content, so the question of whom to ask still has an answer."],
          ],
        },
        {
          heading: "Footage is wanted again long after delivery",
          summary: "Material that seemed finished is often needed for promotion, anniversaries and new projects.",
          icon: "archive",
          body: [
            "A production’s value does not end with delivery. Promotional cut-downs, later seasons and archive requests all reach back into material shot for something else, and each request starts with finding it.",
            [{ text: "Film production teams", page: 218 }, " can centralise production media and maintain organised access to large video libraries, so that later search does not begin with a hunt for the right drive."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 132 }, { kind: "pdf", page: 115 }, { kind: "pdf", page: 218 }, EXPLAINS],
    },
    {
      kind: "checklist",
      id: "weigh",
      eyebrow: "What to weigh",
      heading: "What to weigh in production productivity",
      variant: "chips",
      items: ["Volume of footage per production", "Where rushes and archive live today", "Reliability of uploads from location", "How notes reach editors now", "Freelancers who need project access", "What happens to footage after wrap"],
      sources: [{ kind: "pdf", page: 353 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about production productivity",
      items: [
        {
          question: "How can editors tell when newly ingested footage is ready to search?",
          answer: [{ text: "Media processing status", page: 145 }, " helps teams distinguish between an asset that has uploaded successfully and one that is fully indexed and searchable. Checking it first avoids hunting for footage that is still being prepared."],
        },
        {
          question: "Can analytics show whether production productivity is improving?",
          answer: ["They show part of the picture. ", { text: "Production analytics", page: 201 }, " let production teams analyse media activity, uploads and video-related workflows, which is best read alongside the team’s own account of where the schedule still loses time."],
        },
        {
          question: "Is production productivity only about video files?",
          answer: ["Mostly, because footage dominates the volume, but productions also rely on scripts, stills and music. ", { text: "Audio assets", page: 28 }, " can be managed alongside other creative formats, so a production’s sound need not live apart from its pictures."],
        },
        {
          question: "Do unreliable connections on location slow production down?",
          answer: ["They can, because heavy footage takes long enough to transfer that an interruption is expensive. ", { text: "Resumable uploads", page: 137 }, " help prevent large transfers from needing to restart from the beginning after a network interruption, and ", { text: "chunked uploads", page: 138 }, " are designed for reliability with large files."],
        },
      ],
      sources: [{ kind: "pdf", page: 145 }, { kind: "pdf", page: 201 }, { kind: "pdf", page: 28 }, { kind: "pdf", page: 137 }, { kind: "pdf", page: 138 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on productions and footage",
      variant: "compact",
      pages: [211, 81, 25, 65, 201, 97],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page and the closest production pages." }],
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
