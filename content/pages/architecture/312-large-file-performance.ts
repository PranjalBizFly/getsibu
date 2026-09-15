/**
 * 312 · Large File Performance — /architecture/large-file-performance
 *
 * Angle (clusters: uploads, performance): the architecture view of large-file reliability — why long transfers
 * are fragile, what an interruption costs with and without parts and resumption, and what both ends of a long
 * upload have to remember, check and tidy up. Resumable Uploads (137) and Chunked Uploads (138) own the two
 * techniques; Large Library Performance (309) owns chunked I/O as a scale consideration. No file size limits,
 * speeds or figures.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of large-file transfer in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 312,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Architecture & Performance",
      lede: "See why the heaviest creative files are the uploads most likely to go wrong, how resumable and chunked transfers help GetSibu improve their reliability, and what has to hold together at both ends of a long upload.",
      visual: { diagram: "ingest-pipeline", focus: "upload" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 312 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "When file size turns an upload into a reliability question",
      body: [
        "Resumable and chunked uploads help improve reliability when teams work with large creative files in GetSibu. The emphasis is dependability rather than raw speed: a better chance that a heavy file reaches the library intact when the connection carrying it misbehaves.",
        "Duration is what makes big files fragile. A small image crosses the network before anyone notices; a camera original, a layered artwork file or a finished master can stay in transit for so long that something along the way is likely to go wrong. When a file travels as one continuous stream, every extra minute in transit is another minute in which a single interruption can undo the lot.",
        [
          "Two techniques work on that problem from different directions. ",
          { text: "Chunked uploads", page: 138 },
          " divide the transfer of a large file into parts, and ",
          { text: "resumable uploads", page: 137 },
          " help an interrupted transfer continue rather than restart.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Longer transfers meet more interruptions", "Parts instead of one long stream", "Progress remembered between attempts", "Records that outlast a restart", "Dependability before speed"],
      },
      highlight: {
        heading: "In practice",
        body: "A layered campaign artwork file can hold weeks of design work. When it is uploaded, what matters is that the file which arrives is complete and identical to the one that was sent.",
        tags: ["Designers", "Artwork", "Integrity"],
      },
      glance: {
        heading: "Large file reliability in brief",
        facts: [
          { label: "Area", value: "Architecture & Performance" },
          { label: "Techniques", value: "Resumable and chunked uploads" },
          { label: "Improves", value: "Reliability with large creative files" },
          { label: "Upload workflows", value: "Media Upload Management", page: 136 },
        ],
        actions: [{ kind: "route", path: "/architecture", label: "More in Architecture & Performance" }]
      },
      sources: [{ kind: "pdf", page: 312 }, { kind: "pdf", page: 138 }, { kind: "pdf", page: 137 }, { kind: "pdf", page: 136 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "heavy-files",
      eyebrow: "Kinds of large file",
      heading: "What makes different creative files heavy, and why a failed upload hurts",
      columns: ["What makes it heavy", "Why a failed upload hurts"],
      rows: [
        { label: "Camera originals and rushes", cells: ["High data rates recorded over long continuous takes", "It may be the only copy until it is safely stored"] },
        { label: "Finished masters", cells: ["Full-quality exports of long pieces", "Usually needed for a review or delivery at a fixed time"] },
        { label: "Layered artwork", cells: ["Layers, embedded images and editable elements kept together", "Weeks of design work can sit in a single file"] },
        { label: "Print-ready documents", cells: ["High-resolution images placed page after page", "Often sent at the last moment before a deadline"] },
        { label: "A full day of shoot selects", cells: ["Not one heavy file but a great many large ones", "A single failure in the batch is easy to overlook"] },
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "tabs",
      id: "situations",
      eyebrow: "Who it concerns",
      heading: "Large uploads seen from four positions",
      tabs: [
        {
          label: "IT and networks",
          heading: "Corporate networks that work against long transfers",
          icon: "network",
          body: [
            "Office networks are usually tuned for everyday traffic, and long uploads can run into arrangements designed with other work in mind: VPN connections that renegotiate, security appliances that inspect traffic, and upstream capacity shared with everything else the building sends.",
            ["For IT, supporting heavy creative files often starts with checking those arrangements against how uploads really travel. In GetSibu, ", { text: "media upload management", page: 136 }, " pairs progress information with resumable transfers intended for networks that cannot be relied on."],
          ],
          points: ["Network policies checked against long transfers", "Resumable transfers for unreliable networks"],
        },
        {
          label: "Video teams",
          heading: "The same heavy upload, again and again",
          icon: "film",
          body: [
            "Each revision of a long film is another full-size file, so a video project repeats its heaviest upload many times before sign-off. Reliability matters on every round, not only on the first delivery.",
            ["Teams can keep ", { text: "different cuts and revisions", page: 97 }, " with the version history of one video asset, which keeps those repeated uploads attached to one record rather than scattered as separate files."],
          ],
          points: ["Repeated full-size uploads across a project", "Revisions kept with one asset"],
        },
        {
          label: "Agencies",
          heading: "Heavy work for several clients at once",
          icon: "briefcase",
          body: [
            "Agencies finish work in bursts before client deadlines: a campaign film with several cut-downs, high-resolution key visuals, print-ready artwork. The hour before a deadline is exactly when a transfer failing near the end does the most damage.",
            ["Agencies can maintain ", { text: "client-specific libraries", page: 72 }, " while keeping different clients isolated, so a large file goes into the library of the client it belongs to."],
          ],
          points: ["Heavy files close to deadlines", "Each upload kept within the right client"],
        },
        {
          label: "Developers",
          heading: "Software that sends files on behalf of people",
          icon: "api",
          body: [
            ["Not every large file is uploaded by a person. The ", { text: "asset upload API", page: 262 }, " allows external applications to send files into the GetSibu environment, such as a system an organisation has built for itself."],
            ["An application meets the same unreliable networks as a person, without anyone watching to try again. Before building large-file transfers into software, developers should read the ", { text: "API documentation", page: 273 }, " and plan how their software will respond when a transfer fails."],
          ],
          points: ["Unattended transfers", "Failure handling planned in advance"],
        },
      ],
      sources: [{ kind: "pdf", page: 136 }, { kind: "pdf", page: 97 }, { kind: "pdf", page: 72 }, { kind: "pdf", page: 262 }, { kind: "pdf", page: 273 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "design-choices",
      eyebrow: "Under the surface",
      heading: "What has to hold together for a large upload to be dependable",
      items: [
        {
          heading: "Progress must be recorded somewhere lasting",
          summary: "Resuming depends on a record of what arrived that outlives the interruption.",
          body: [
            "A transfer can only continue from where it stopped if something remembers where that was. The sending side needs to know which parts it has sent, and the receiving side needs a record of which parts it holds, kept somewhere that survives dropped connections and restarts.",
            "Where more than one server may receive the next part, that record has to sit somewhere all of them can read, rather than in the memory of whichever server handled the previous one.",
          ],
          icon: "history",
        },
        {
          heading: "Complete is not the same as correct",
          summary: "A dependable upload checks that what arrived matches what was sent.",
          body: [
            "Data can be damaged in transit without the connection failing. The usual safeguard is a checksum: a short value calculated from the data before sending and again after receiving, where any difference reveals a problem.",
            "Checking each part catches damage early and limits what must be resent. Checking the assembled file confirms that the parts were put back together in the right order. For masters and originals, which may be the only copy an organisation holds, correctness matters as much as arrival.",
          ],
          icon: "check",
        },
        {
          heading: "Unfinished uploads need tidying away",
          summary: "Parts from abandoned transfers take up space until something removes them.",
          body: [
            "Resumability means holding on to partial uploads in case the sender returns. Some never do: a laptop is replaced, a delivery is cancelled, someone uploads the file again from scratch. Transfer systems in general expire incomplete uploads after a period, balancing the chance of a resumption against storage used by fragments nobody will finish.",
          ],
          icon: "trash",
        },
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about large file performance",
      items: [
        {
          question: "Is it worth compressing large media files into an archive before uploading them?",
          answer: "Usually not. Video, images and audio are generally compressed already, so an archive saves little space while adding a step at each end, and it hides the individual files inside a single container.",
        },
        {
          question: "How should a team test large file uploads before an important delivery?",
          answer: "Send a file of realistic size over the connection that will really be used, interrupt it deliberately partway through, and confirm that the transfer continues and the asset goes on to be processed. A test on a fast office network says little about a delivery from location.",
        },
        {
          question: "Does a large upload need a wired connection to be reliable?",
          answer: "Not necessarily. A steadier connection shortens the time a file is exposed to trouble, but techniques for resuming exist precisely because real networks do not stay perfect. When there is a choice, the steadier route is still the kinder one for the heaviest files.",
        },
        {
          question: "Does a large file stay slow to work with after it has been uploaded?",
          answer: ["Its size matters again whenever someone wants to look at it, which is why checking heavy media without downloading it is a subject of its own: ", { text: "media preview performance", page: 313 }, "."],
        },
      ],
      sources: [{ kind: "pdf", page: 313 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on moving heavy files reliably",
      variant: "compact",
      pages: [137, 138, 136, 262, 309, 313],
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
