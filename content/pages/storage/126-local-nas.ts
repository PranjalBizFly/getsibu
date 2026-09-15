/**
 * 126 · Local NAS Integration — /storage/local-nas
 *
 * HELD draft (claim: storage-sources). Angle: studios keep years of work on network-attached storage in the
 * office; connecting the NAS environment brings that existing content into a searchable workflow. No setup
 * steps, authentication, sync behaviour, file types, permission translation, network requirements or limits.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how creative studios use local network storage; states no GetSibu or NAS capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 126,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Storage & Ingestion",
      lede: "See what it means for a studio to connect the network storage in its own building to GetSibu, so that years of work kept on local volumes can be found by people who were never part of those jobs.",
      visual: { diagram: "connector-flow", label: "Local NAS" },
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 126 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Work on the studio network, brought into a searchable workflow",
      body: [
        "Teams with local network storage can connect NAS environments to GetSibu and bring their existing content into a searchable workflow. For studios that have kept their work on their own hardware for years, that content is often the largest and least searchable part of what they own.",
        "Network-attached storage suits creative studios for practical reasons. Editors and designers can work on heavy files over the office network without sending them to and from the internet, the hardware sits under the studio’s own control, and capacity grows by adding drives. Job after job, finished work stays where it was made.",
        "The same arrangement makes that work hard to reach. Volumes are organised the way the people using them think, by client, job number or year, and finding something means knowing that logic. New starters and colleagues outside the studio have little chance of finding a past project’s best material unless someone who was there points the way.",
        [
          "GetSibu’s central library is designed to hold assets from ",
          { text: "local infrastructure alongside connected drives and direct uploads", page: 6 },
          ". Once content is part of a searchable workflow, the ",
          { text: "asset discovery workflow", page: 30 },
          " starts with a search instead of with knowing which volume and folder hold a file.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Local network storage connected", "NAS environments as a source", "Existing content made searchable", "Volumes organised by studio logic", "Local infrastructure in the central library"],
      },
      highlight: {
        heading: "In practice",
        body: "A motion design studio’s NAS holds every job since it opened. A new producer assembling a showreel searches for past title sequences instead of asking each senior designer which folders to try.",
        tags: ["Studios", "Producers", "Local storage"],
      },
      glance: {
        heading: "Local NAS integration in brief",
        facts: [
          { label: "Area", value: "Storage & Ingestion" },
          { label: "Connects", value: "NAS environments on the local network" },
          { label: "Brings", value: "Existing content into a searchable workflow" },
          { label: "Central library", value: "Centralised Creative Asset Library", page: 6 },
        ],
      },
      sources: [{ kind: "pdf", page: 126 }, { kind: "pdf", page: 6 }, { kind: "pdf", page: 30 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "what-changes",
      eyebrow: "What changes",
      heading: "What a searchable workflow offers work that lived on local volumes",
      items: [
        {
          heading: "Files found by what they show",
          body: "AI asset discovery helps people find files based on what appears inside them, rather than on folder names only the original team understands.",
          icon: "search",
          points: ["Less reliance on folder logic", "Helpful where many jobs look alike"],
          page: 12,
        },
        {
          heading: "Old job structures kept as context",
          body: "File paths can become part of the asset record, so the client and job names built into a studio’s folders can stay attached to each asset as information.",
          icon: "folder",
          points: ["Client and job names preserved", "Context that survives new structures"],
          page: 22,
        },
        {
          heading: "Copies spread across volumes",
          body: "Studios often duplicate jobs between volumes when drives fill up or projects reopen. Duplicate detection helps identify unnecessary copies and can support storage optimisation.",
          icon: "copy",
          points: ["Repeated jobs identified", "Storage used more deliberately"],
          page: 112,
        },
        {
          heading: "Years of jobs categorised",
          body: "AI classification helps categorise assets according to their content and available metadata, reducing the repetitive organisation work an old archive would otherwise demand.",
          icon: "tag",
          points: ["Less manual sorting of old work", "Content and metadata both used"],
          page: 42,
        },
      ],
      sources: [{ kind: "pdf", page: 12 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 112 }, { kind: "pdf", page: 42 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A post-production studio opens its archive volumes to search",
      team: "A post-production studio",
      situation: "A post-production studio has kept every client job on the network storage in its edit suites for many years. When a client wants to revisit an old campaign, or a pitch needs examples, producers depend on the senior editor’s memory of which volume holds what.",
      steps: [
        {
          heading: "The NAS environment is connected",
          body: "The studio connects its NAS environment to GetSibu, bringing the existing jobs on its volumes into a searchable workflow.",
        },
        {
          heading: "A producer searches by client",
          body: ["A producer ", { text: "searches metadata alongside tags and extracted content", page: 23 }, " using the client’s name and finds work spread across three separate volumes."],
        },
        {
          heading: "Deliverables are separated from working files",
          body: ["The producer uses ", { text: "advanced media filters", page: 19 }, " to narrow the results by format, so finished spots stand apart from the project files and renders that sit beside them."],
        },
        {
          heading: "The senior editor confirms the choice",
          body: "The senior editor still confirms which cut was the delivered version, but now reviews a shortlist instead of searching the volumes from memory.",
        },
      ],
      outcome: "Old work becomes a resource the whole studio can draw on, and one person’s memory is no longer the only index to the archive.",
      link: { page: 211, label: "GetSibu for Production Studios" },
      sources: [{ kind: "pdf", page: 126 }, { kind: "pdf", page: 23 }, { kind: "pdf", page: 19 }, { kind: "pdf", page: 211 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "accordion",
      id: "considerations",
      eyebrow: "Considerations",
      heading: "What to think through before a NAS becomes a source",
      items: [
        {
          heading: "Live projects share volumes with the archive",
          summary: "Edit suites often work directly from network storage, so jobs in progress sit next to finished work.",
          icon: "film",
          body: [
            "Projects in progress change constantly: renders are replaced, caches grow, temporary files come and go. Colleagues outside a job usually want what was finished and delivered rather than the working material of the moment, so it helps to know where each lives on the volumes.",
          ],
        },
        {
          heading: "Project files depend on their applications",
          summary: "Edit and design project files are only useful alongside the media and software they rely on.",
          icon: "layers",
          body: [
            "A timeline or a layered project refers to media stored elsewhere and needs the right application to open. Colleagues outside the studio usually want the finished exports and deliverables those projects produced, which is worth remembering when deciding what should be easy to find.",
          ],
        },
        {
          heading: "Whoever looks after the hardware",
          summary: "A studio NAS usually has an owner, even when that owner is an editor rather than IT.",
          icon: "server",
          body: [
            "Local storage is often maintained by the most technical person in the studio rather than a dedicated team. Involve them early, since they know which volumes hold what and how the studio has used them over the years.",
          ],
        },
        {
          heading: "Folder habits worth keeping, and those worth retiring",
          summary: "Years of local organisation contain useful conventions alongside leftovers.",
          icon: "folder",
          body: [
            "Job-number folders carry real meaning; folders called “old”, “misc” or “to sort” do not. Note which conventions reflect how the studio actually works before connecting, so that searching and tagging build on the useful ones.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 126 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about local NAS integration",
      items: [
        {
          question: "Why would a studio with fast local storage connect its NAS to GetSibu?",
          answer: "Quick access and easy finding are different problems. Local storage serves the people working on a job; a searchable workflow serves everyone who needs that job’s material later, including people who were never part of it.",
        },
        {
          question: "How does local NAS integration differ from uploading files directly?",
          answer: ["Direct uploads suit individual assets and small batches with no integration to configure, as with ", { text: "drag and drop upload", page: 127 }, ". Connecting a NAS environment concerns the existing body of work a studio has already accumulated on its network."],
        },
        {
          question: "Can a local NAS sit alongside other storage sources in one GetSibu library?",
          answer: ["GetSibu creates a ", { text: "unified environment", page: 150 }, " for managing creative content from multiple storage sources, so work kept on a studio’s own network can sit alongside material from elsewhere."],
        },
      ],
      sources: [{ kind: "pdf", page: 126 }, { kind: "pdf", page: 127 }, { kind: "pdf", page: 150 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on bringing local storage into the library",
      variant: "compact",
      pages: [6, 30, 12, 112, 211, 150],
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
