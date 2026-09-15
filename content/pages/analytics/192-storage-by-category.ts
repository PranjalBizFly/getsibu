/**
 * 192 · Storage by Category — /analytics/storage-by-category
 *
 * Angle (cluster: storage-analytics): the category breakdown itself — what video, image, document and audio each
 * hold in a creative library, why each behaves differently in storage and how to use the breakdown in a storage
 * review. Storage Analytics (183) owns what drives consumption overall; Storage Growth Analytics (149) owns growth;
 * Library Growth Reporting (209) owns planning; Creative Storage Management (148) owns the management practice.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how asset categories behave in creative library storage; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 192,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Analytics",
      lede: "A closer look at the categories storage can be analysed by, from video and image to document and audio: what each one typically holds in a creative library, and what its share of storage can tell your team.",
      visual: { diagram: "library-activity", focus: "storage" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 192 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Four categories, four different storage stories",
      body: [
        "Storage in GetSibu can be analysed according to categories such as video, image, document and audio. Each category corresponds to a different kind of creative work, which makes the breakdown far easier to act on than a single total.",
        "The categories differ in more than file size. They are made by different people, arrive at different points in a project, are revised in different ways and are kept for different reasons. A growing video share might reflect a new content strategy; a growing document share might mean decks, research and contracts are being kept in the library instead of on laptops. Reading the breakdown well starts with knowing what normally sits in each category.",
        [
          "The breakdown supports wider decisions about storage. ",
          { text: "Storage analytics", page: 183 },
          " are the wider view this breakdown belongs to, and in ",
          { text: "creative storage management", page: 148 },
          " the same distribution across videos, images, documents and audio helps organisations understand how a library is spread.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Video footage, cuts and deliverables", "Photography, design files and exports", "Presentations, PDFs and briefs", "Music, voice and sound", "Shares that shift with the work"],
      },
      highlight: {
        heading: "In practice",
        body: "When its document category starts to grow, a brand consultancy realises that strategy decks and research now live in the shared library rather than on individual laptops.",
        tags: ["Consultancies", "Documents", "Adoption"],
      },
      glance: {
        heading: "Storage by category in brief",
        facts: [
          { label: "Area", value: "Analytics" },
          { label: "Categories", value: "Video, image, document and audio" },
          { label: "Wider view", value: "Storage Analytics", page: 183 },
          { label: "Growth context", value: "Storage Growth Analytics", page: 149 },
        ],
        actions: [{ kind: "page", page: 181, label: "Creative Asset Analytics" }]
      },
      sources: [{ kind: "pdf", page: 192 }, { kind: "pdf", page: 183 }, { kind: "pdf", page: 148 }, { kind: "pdf", page: 149 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "categories",
      eyebrow: "By category",
      heading: "What each category holds and why its storage behaves as it does",
      tabs: [
        {
          label: "Video",
          heading: "Footage, cuts and deliverables",
          icon: "video",
          body: [
            "Video in a creative library runs from camera originals and archive footage to edits, cutdowns and finished deliverables. Long durations and high resolutions make individual files large, and a single production can leave a trail of related files behind it.",
            [{ text: "Streaming media previews", page: 147 }, " help people inspect large media files without waiting for complete downloads, which matters most in the category where files are heaviest."],
          ],
          points: ["Relatively few files, a large share of space", "Growth that follows production schedules"],
          link: { page: 97, label: "Video Version Management" },
        },
        {
          label: "Image",
          heading: "Photography, design files and exports",
          icon: "image",
          body: [
            "Images range from raw photography and layered design files to lightweight exports for the web. The category tends to hold many files whose sizes vary enormously, depending on whether each is a master or a derivative.",
            [{ text: "Image version management", page: 98 }, " keeps different versions of a visual in one structured record, so revisions of a key visual sit together rather than as scattered separate files."],
          ],
          points: ["Many files of widely varying size", "Masters and exports side by side"],
        },
        {
          label: "Document",
          heading: "Presentations, PDFs and working papers",
          icon: "document",
          body: [
            "Documents cover brand guidelines, strategy decks, briefs, contracts, scripts and reports. Most are light, although presentations with embedded media can be surprisingly heavy, and growth here often reflects changing habits as much as production.",
            [{ text: "Document version management", page: 99 }, " allows documents and presentations to be replaced while historical versions are retained, so a deck’s revisions stay in one record rather than in a folder of competing copies."],
          ],
          points: ["Light files, occasionally heavy decks", "Growth that can signal adoption"],
        },
        {
          label: "Audio",
          heading: "Music, voice recordings and sound",
          icon: "audio",
          body: [
            "Audio includes music tracks, voice-over recordings, interview sound and effects. It is easily forgotten in storage plans because it is so often kept apart from the rest of a project.",
            ["Managing ", { text: "audio alongside other creative formats", page: 28 }, " maintains a central media environment instead of a separate sound archive, and brings that material into the same breakdown as everything else."],
          ],
          points: ["Often missing from storage plans", "Kept with the projects it belongs to"],
        },
      ],
      sources: [{ kind: "pdf", page: 192 }, { kind: "pdf", page: 147 }, { kind: "pdf", page: 97 }, { kind: "pdf", page: 98 }, { kind: "pdf", page: 99 }, { kind: "pdf", page: 28 }, EXPLAINS],
    },
    {
      kind: "workflow",
      id: "storage-review",
      eyebrow: "Putting it to use",
      heading: "Using the category breakdown in a storage review",
      stages: [
        { label: "Record the current mix", body: "Note how storage divides across the categories today, so that later changes have a reference point." },
        { label: "Connect it to the work", body: "Relate each share to what the organisation produces; a video-led studio and a document-heavy consultancy look very different, and both can be entirely healthy." },
        { label: "Find the category that moved", body: "When overall storage changes, establish which category accounts for the change before investigating anything else." },
        { label: "Look inside that category", body: "Filter the library to that category and look for the productions, imports or stray copies behind the change." },
        { label: "Revisit after large projects", body: "Look at the breakdown again once a big production or import is complete, so its effect on the mix is understood before the next plan is made." },
      ],
      sources: [{ kind: "pdf", page: 192 }, { kind: "pdf", page: 19 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "reading",
      eyebrow: "Considerations",
      heading: "Reading a category breakdown with care",
      items: [
        {
          heading: "A large share is not a problem in itself",
          summary: "Category shares reflect the kind of work, not its quality.",
          icon: "gauge",
          body: [
            "A production company whose storage is dominated by video is doing exactly what production companies do. Compare the breakdown with the organisation’s creative output before treating any share as excessive.",
          ],
        },
        {
          heading: "Categories group formats, not purposes",
          summary: "A single category can hold assets of very different value.",
          icon: "layers",
          body: [
            "An image category holds irreplaceable photography masters next to disposable social exports; a document category keeps signed agreements beside rough notes. The breakdown shows where space goes, while knowledge of the library says which parts of that space matter most.",
          ],
        },
        {
          heading: "Shares say little about direction",
          summary: "The category with a modest share today may be the one growing fastest.",
          icon: "trend",
          body: [
            ["A snapshot of the split cannot show momentum. ", { text: "Storage growth analytics", page: 149 }, " provide historical context around how quickly the library is expanding, which puts the current division into perspective."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 192 }, { kind: "pdf", page: 149 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about storage by category",
      items: [
        {
          question: "Which categories can creative library storage be analysed by?",
          answer: "Categories such as video, image, document and audio, which between them cover the main kinds of material a creative library holds.",
        },
        {
          question: "How does storage by category relate to finding duplicate files?",
          answer: ["The breakdown shows where space goes, which can suggest where to look first. Identifying copies is the job of ", { text: "AI duplicate detection", page: 40 }, ", which combines exact and perceptual hashing to find identical files and visually equivalent copies."],
        },
        {
          question: "Should storage planning treat each asset category differently?",
          answer: ["Planning should respect how each category behaves. Footage tends to arrive in large bursts tied to productions, while documents and images usually grow more evenly, and ", { text: "library growth reporting", page: 209 }, " helps organisations anticipate the requirements that follow."],
        },
        {
          question: "Is a storage breakdown by category useful for a team that works mostly in one format?",
          answer: "Yes. Even a photography team keeps documents such as licences, briefs and model releases, and the smaller categories are where unexpected growth is easiest to overlook.",
        },
      ],
      sources: [{ kind: "pdf", page: 192 }, { kind: "pdf", page: 40 }, { kind: "pdf", page: 209 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on storage across asset types",
      variant: "compact",
      pages: [183, 149, 148, 209, 28, 40],
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
