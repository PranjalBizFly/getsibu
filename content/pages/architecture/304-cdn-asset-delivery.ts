/**
 * 304 · CDN Asset Delivery — /architecture/cdn-asset-delivery
 *
 * Angle (clusters: previews-delivery, performance): the delivery network itself — fast access to previews and media
 * around the world, how a CDN routes a request to a nearby location, which request patterns benefit, and what CDN
 * delivery does not change (search, uploads, access decisions, the stored original). Edge Caching (305) owns cache
 * hits, misses, expiry and invalidation; Streaming Previews (306) owns partial transfer; Global Asset Access (314)
 * owns teams across regions. No providers, latency figures or protocol versions.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how content delivery networks work in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 304,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Architecture & Performance",
      lede: "See what CDN delivery does for the previews and media in a GetSibu library, how a delivery network answers requests from a location near the viewer, and which parts of the experience depend on other layers.",
      visual: { diagram: "architecture-stack", focus: "edge" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 304 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Previews and media served from a network, not a single origin",
      body: [
        "CDN delivery helps GetSibu provide fast access to previews and media around the world. It belongs to the edge services layer of the platform’s architecture, the part concerned with getting content to the people who open it.",
        "A content delivery network, or CDN, is a set of servers spread across many locations, often called points of presence. Rather than every request travelling to the origin, where content is ultimately held, requests are directed to a nearby location that can answer them. Distance adds delay to every exchange between a viewer and a server, and creative media involves a great many exchanges: a page of results full of thumbnails, a reviewer moving through a long cut, a colleague opening a campaign film from another continent.",
        [
          "Delivery sits beside ",
          { text: "edge caching", page: 305 },
          ", which reduces the distance between users and the content they open often.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Origin and edge locations", "Requests answered from nearby", "Previews and media delivered", "Part of the edge services layer", "Distance as a source of delay"],
      },
      highlight: {
        heading: "In practice",
        body: "An art director and a producer in different countries open the same campaign preview. CDN delivery is there to help both of them reach it quickly, not only whoever happens to sit closest to where it is stored.",
        tags: ["Reviewers", "Distributed teams", "Previews"],
      },
      glance: {
        heading: "CDN delivery in brief",
        facts: [
          { label: "Area", value: "Architecture & Performance" },
          { label: "Delivers", value: "Previews and media" },
          { label: "Layer", value: "Edge services" },
          { label: "Across regions", value: "Global Asset Access", page: 314 },
        ],
        actions: [{ kind: "route", path: "/architecture", label: "More in Architecture & Performance" }]
      },
      sources: [{ kind: "pdf", page: 304 }, { kind: "pdf", page: 301 }, { kind: "pdf", page: 305 }, { kind: "pdf", page: 314 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "request-path",
      eyebrow: "Step by step",
      heading: "How a delivery network answers a request for a preview",
      intro: "Content delivery networks follow broadly the same sequence, whatever the platform behind them.",
      steps: [
        { heading: "A viewer opens a preview", body: "The client asks for a preview or media file by its address, exactly as it would ask any web server.", icon: "eye" },
        { heading: "The request is routed nearby", body: "The network directs the request to a location close to the viewer, typically through DNS answers or through addresses announced from many places at once.", icon: "network" },
        { heading: "The connection starts close by", body: "Setting up a secure connection takes several round trips, and completing them with a nearby location keeps each trip short.", icon: "lock" },
        { heading: "The edge answers or asks the origin", body: "A location that already holds a copy responds directly; otherwise it fetches the content from the origin, usually over the network’s own well-connected links.", icon: "server", page: 305 },
        { heading: "Media covers the short path", body: "The response travels the remaining distance to the viewer, and later requests from the same area can be answered by the same nearby location.", icon: "zap" },
      ],
      sources: [{ kind: "pdf", page: 304 }, { kind: "pdf", page: 305 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "request-patterns",
      eyebrow: "Request patterns",
      heading: "Why different kinds of media benefit from nearby delivery",
      tabs: [
        {
          label: "Result pages",
          heading: "Many small requests at once",
          icon: "image",
          body: [
            "A page of search results or a folder view can ask for a large number of small preview images together. For small files, the number of round trips matters more than the size of each transfer, so distance to the server shapes how quickly the page fills in.",
            [{ text: "Thumbnails", page: 146 }, " provide fast visual previews without requiring anyone to download the original file, which keeps each of those requests light."],
          ],
          points: ["Round trips matter more than file size", "Small previews instead of originals"],
        },
        {
          label: "Long playback",
          heading: "Sustained delivery while someone watches",
          icon: "video",
          body: [
            "Watching a long film keeps media flowing for as long as the reviewer watches, and moving to a different point starts a fresh exchange. Steady throughput and quick answers when the position changes are what count.",
            ["Serving that traffic from nearby shortens the path for each exchange. Separately, ", { text: "streaming previews", page: 306 }, " spare the reviewer from waiting for a whole file before watching."],
          ],
          points: ["Steady throughput during playback", "Quick answers when the position changes"],
        },
        {
          label: "Shared moments",
          heading: "The same content requested by many people",
          icon: "users",
          body: [
            "A launch, a company presentation or a review deadline sends many people to the same few assets within a short time. Without a delivery network, all of that demand arrives at one origin along routes of very different lengths.",
            "A CDN spreads that load across its locations, so a popular asset’s audience is served from many places rather than queueing at a single point.",
          ],
          points: ["Demand spread across locations", "Less concentrated load on the origin"],
        },
      ],
      sources: [{ kind: "pdf", page: 146 }, { kind: "pdf", page: 306 }, { kind: "pdf", page: 304 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "limits",
      eyebrow: "Considerations",
      heading: "What CDN delivery does and does not change",
      items: [
        {
          heading: "Search is a different kind of request",
          summary: "Results are specific to each query, so their speed depends mainly on the search layer.",
          icon: "search",
          body: [
            "Delivery networks are at their best with content that many people request in the same form, such as a preview image or a media file. A list of search results is assembled for one query at one moment, and the work of finding matches happens before anything is delivered.",
            ["In GetSibu that work belongs to the search layer, and the platform is designed around ", { text: "low-latency search", page: 307 }, " so users can quickly retrieve assets from large libraries."],
          ],
        },
        {
          heading: "Uploads travel the other way",
          summary: "Getting large files into a library is a reliability problem more than a delivery one.",
          icon: "upload",
          body: [
            "A CDN is built mainly to send content out to viewers. Uploads face a different challenge: a long transfer from one person’s connection that can be interrupted at any point.",
            ["For that direction, ", { text: "resumable and chunked uploads", page: 312 }, " help improve reliability when working with large creative files."],
          ],
        },
        {
          heading: "Access and delivery are separate decisions",
          summary: "A CDN decides where content is served from, not who is allowed to see it.",
          icon: "lock",
          body: [
            "Delivery networks are concerned with location and speed, while whether a person may open an asset is a matter for access rules.",
            "When assessing any asset management platform, it is reasonable to ask how its delivery of previews and media relates to the permissions that govern the library.",
          ],
        },
        {
          heading: "The origin still matters",
          summary: "A delivery network holds copies; the content itself stays in storage.",
          icon: "database",
          body: [
            "Content that nobody near a location has requested recently still has to come from the origin, and the origin is where every copy starts. A CDN improves the route to content without replacing the place it is kept.",
            ["In GetSibu, creative content can be stored using ", { text: "object-storage infrastructure with organisational partitioning", page: 318 }, "."],
          ],
        },
        {
          heading: "Measure from where your teams are",
          summary: "A test run next to the origin says little about a colleague on another continent.",
          icon: "compass",
          body: [
            "Delivery performance depends on the path between each viewer and the nearest location, so it varies by place and by network. Testing only from a head office can hide the experience of regional offices, home workers and colleagues on the road.",
            "A fair evaluation opens the same previews and media from the locations and connections a team really uses, at the times it uses them.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 307 }, { kind: "pdf", page: 317 }, { kind: "pdf", page: 312 }, { kind: "pdf", page: 318 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about CDN asset delivery",
      items: [
        {
          question: "Is CDN delivery the same thing as edge caching?",
          answer: [
            "They are closely related but not identical. A CDN is the network of locations and the routing that sends each request to a nearby one, while ",
            { text: "edge caching", page: 305 },
            " keeps copies of frequently accessed content at those locations so they can be served without returning to the origin.",
          ],
        },
        {
          question: "Does CDN delivery remove the need for a good connection?",
          answer: "No. A delivery network shortens most of the distance content travels, but the last stretch still runs over each viewer’s own connection, so a congested office line or a weak mobile signal limits what nearby delivery can achieve.",
        },
        {
          question: "Does CDN delivery help GetSibu teams working in other countries?",
          answer: [
            "CDN-based delivery can support teams working across different geographical regions. ",
            { text: "Global asset access", page: 314 },
            " looks at what that means for organisations spread across markets and offices.",
          ],
        },
        {
          question: "Does CDN delivery change how soon a new upload can be previewed?",
          answer: [
            "Delivery only comes into play once there is something to deliver. After upload, assets move through ",
            { text: "processing stages", page: 143 },
            " such as metadata extraction, thumbnail generation and AI-related processing, and processing status shows when an asset is fully indexed and searchable.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 305 }, { kind: "pdf", page: 314 }, { kind: "pdf", page: 143 }, { kind: "pdf", page: 145 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on delivering previews and media",
      variant: "compact",
      pages: [305, 306, 314, 146, 312, 318],
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
