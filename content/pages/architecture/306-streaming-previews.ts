/**
 * 306 · Streaming Previews — /architecture/streaming-previews
 *
 * Angle (cluster: previews-delivery): the architecture view — why streaming avoids full downloads, what travels over
 * the network instead (initial portions, buffering, seeking), and the design choices behind previews that stream.
 * Streaming Media Preview (147) owns inspecting large media in the library; Media Preview Performance (313) owns
 * review friction; CDN Asset Delivery (304) and Edge Caching (305) own delivery. No formats, codecs, bitrates or
 * claims that GetSibu uses a particular streaming method.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how media streaming works in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 306,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Architecture & Performance",
      lede: "Understand why a streaming preview lets someone start inspecting a large media file without waiting for it to download, what travels over the network instead, and how streaming relates to other parts of GetSibu’s architecture.",
      visual: { diagram: "ingest-pipeline", focus: "preview" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 306 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Watching the part you need instead of fetching the whole file",
      body: [
        "Streaming previews allow teams to inspect media without waiting for full downloads. Behind that capability sits a question of delivery: what travels over the network, and in what order.",
        "A download has to arrive in full, or very nearly, before a file can be opened with confidence. With a camera original or a long master, that means a large transfer before anyone can judge a single shot. Streaming reverses the order: the player asks for a small portion of the media, starts playing once enough has arrived, and keeps requesting more while playback continues.",
        [
          "Preview generation and streaming together ",
          { text: "reduce the friction of reviewing large assets", page: 313 },
          ", and the library-side view of the same idea is ",
          { text: "streaming media preview", page: 147 },
          ".",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Portions requested as playback continues", "Playback before the file completes", "Seeking requests a new position", "A playable version prepared first", "Each portion an ordinary request"],
      },
      highlight: {
        heading: "In practice",
        body: "A reviewer opening a long campaign film on an ordinary office connection can begin watching once the first portions arrive, rather than after the whole file has travelled.",
        tags: ["Reviewers", "Video", "Long media"],
      },
      glance: {
        heading: "Streaming previews in brief",
        facts: [
          { label: "Area", value: "Architecture & Performance" },
          { label: "Avoids", value: "Waiting for full downloads" },
          { label: "Works on", value: "Large media files" },
          { label: "Review friction", value: "Media Preview Performance", page: 313 },
        ],
        actions: [{ kind: "route", path: "/architecture", label: "More in Architecture & Performance" }]
      },
      sources: [{ kind: "pdf", page: 306 }, { kind: "pdf", page: 313 }, { kind: "pdf", page: 147 }, EXPLAINS],
    },
    {
      kind: "before-after",
      id: "download-or-stream",
      eyebrow: "Download or stream",
      heading: "Checking a large file by download compared with streaming",
      beforeLabel: "Download first",
      afterLabel: "Streaming preview",
      before: [
        "The whole file arrives before anything can be judged",
        "A slow connection delays even a quick look",
        "An interruption near the end can leave nothing usable",
        "Every viewer transfers the entire file",
      ],
      after: [
        "Viewing starts once the first portions arrive",
        "A slower connection shows up as a longer wait for the buffer",
        "A brief interruption usually costs a pause",
        "Each viewer receives what they watch, plus a buffer",
      ],
      sources: [{ kind: "pdf", page: 306 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "sequence",
      eyebrow: "Under the hood",
      heading: "What happens between opening a preview and watching it",
      intro: "Streaming systems differ in detail, but most follow a sequence close to this one.",
      steps: [
        { heading: "A playable version exists", body: "Streaming starts from a version of the media that players can handle, usually prepared in advance rather than at the moment someone starts watching.", icon: "film" },
        { heading: "The player asks for the beginning", body: "Instead of requesting the file as a whole, the player asks for an initial portion, typically a byte range from the start of the file.", icon: "download" },
        { heading: "Playback starts from a buffer", body: "Once enough media has arrived to play smoothly, playback begins while the next portions are fetched just ahead of the playhead.", icon: "video" },
        { heading: "Seeking fetches a new position", body: "Moving to a later moment requests the portion at that point, so the media in between never has to travel.", icon: "clock" },
        { heading: "Portions arrive from nearby", body: "Each portion is an ordinary request, which is why streaming benefits from delivery networks that answer requests close to the viewer.", icon: "globe", page: 304 },
      ],
      sources: [{ kind: "pdf", page: 304 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "design-choices",
      eyebrow: "Considerations",
      heading: "Mechanics that shape how a streamed preview behaves",
      items: [
        {
          heading: "A preview is lighter than the original",
          summary: "What plays well over a network is rarely the file a camera or an edit suite produced.",
          icon: "image",
          body: [
            "Camera originals and masters often use formats and data rates that are impractical to play over a network, and they carry more detail than inspection needs. A preview trades some of that fidelity for something that plays readily wherever the reviewer happens to be.",
          ],
        },
        {
          heading: "Seeking depends on knowing where each moment sits",
          summary: "Before it can jump ahead, a player needs a map of the file.",
          icon: "map",
          body: [
            "To reach a particular moment, a player has to work out which part of the file holds it, and many video formats carry an index for exactly that purpose.",
            "When the index sits at the end of the file, the player must fetch the end before it can play the beginning. That is why media prepared for streaming generally places it at the start.",
          ],
        },
        {
          heading: "Buffering trades a quick start against steady playback",
          summary: "How much a player gathers before playing decides how soon it starts and how often it stops.",
          icon: "gauge",
          body: [
            "A player that begins after very little has arrived starts sooner but is more likely to pause if the connection falters. One that gathers more first starts later and plays more steadily.",
            "The balance is a choice made in the player, and it matters most on connections whose quality varies from moment to moment.",
          ],
        },
        {
          heading: "Streaming is a way of delivering, not of protecting",
          summary: "A stream still sends media to the viewer’s device.",
          icon: "lock",
          body: [
            "Streaming avoids saving a finished copy just to take a look, but the portions being watched still reach the viewer’s device and are held there, at least briefly, while they play.",
            "It should not be mistaken for a protection measure. Who may see a piece of content is a question for access control, which is a separate subject from how media travels.",
          ],
        },
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about streaming previews",
      items: [
        {
          question: "Is a streaming preview the same as a live stream?",
          answer: "No. A live stream carries events as they happen, whereas a streaming preview plays media that already exists, which is why a viewer can pause, go back or move ahead through it.",
        },
        {
          question: "What is a byte range request?",
          answer: "A request for a specific stretch of a file, identified by where the stretch starts and ends, rather than for the whole file. A server that supports such requests answers with only the stretch asked for.",
        },
        {
          question: "Why do streaming previews matter more for video than for still images?",
          answer: "Still images are usually small enough to open whole, and a single frame shows everything there is to see. Video only reveals its content over time and is often very large, so the gap between waiting for a download and starting to watch is far wider.",
        },
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on previewing large media",
      variant: "compact",
      pages: [147, 313, 304, 305, 314],
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
