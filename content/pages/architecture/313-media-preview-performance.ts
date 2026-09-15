/**
 * 313 · Media Preview Performance — /architecture/media-preview-performance
 *
 * Angle (clusters: previews-delivery, performance): review friction — the many small costs between wanting to
 * look at a large asset and being able to judge it — and how preview generation and streaming each remove part
 * of it. Streaming Previews (306) owns how streaming works; Asset Thumbnail Generation (146) and Streaming Media
 * Preview (147) own the library features; CDN Asset Delivery (304) owns delivery. No preview formats, sizes or
 * speeds are claimed.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of review friction and preview practice in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 313,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Architecture & Performance",
      lede: "Find out where the effort in reviewing heavy media really goes, and how preview generation and streaming in GetSibu help reduce it for the people taking part in a review, from creative leads to occasional reviewers.",
      visual: { diagram: "ingest-pipeline", focus: "preview" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 313 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Taking the effort out of looking at heavy media",
      body: [
        "In GetSibu, preview generation and streaming reduce the friction of reviewing large assets. Friction means everything standing between wanting to look at a piece of work and being able to judge it: the waiting, the software, the disk space and the detours.",
        "It is seldom one large obstacle. Review friction is a string of small costs, such as a download started and abandoned, a file that will not open without a particular application, or a long scrub to reach the part in question. Each cost is paid by every reviewer, on every asset, in every round of changes, and multiplied that way, small delays decide whether people inspect work properly or approve what they have barely seen.",
        [
          "Preview generation and streaming do different jobs. In general, generation prepares something light to look at ahead of time, while streaming delivers time-based media as it is watched, a mechanism set out under ",
          { text: "streaming previews", page: 306 },
          ". The library-side experience of the second is ",
          { text: "streaming media preview", page: 147 },
          ".",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Friction as many small costs", "Preparation done before review", "Delivery while media plays", "Costs multiplied by reviewers and rounds", "Occasional reviewers helped most"],
      },
      highlight: {
        heading: "In practice",
        body: "A marketing director checking campaign films between meetings will not install editing software or wait for downloads. Low friction is what turns that short gap into a real review instead of a postponed one.",
        tags: ["Stakeholders", "Video", "Review"],
      },
      glance: {
        heading: "Preview performance in brief",
        facts: [
          { label: "Area", value: "Architecture & Performance" },
          { label: "Reduces", value: "Friction in reviewing large assets" },
          { label: "Through", value: "Preview generation and streaming" },
          { label: "Delivery", value: "CDN Asset Delivery", page: 304 },
        ],
        actions: [{ kind: "route", path: "/architecture", label: "More in Architecture & Performance" }]
      },
      sources: [{ kind: "pdf", page: 313 }, { kind: "pdf", page: 306 }, { kind: "pdf", page: 147 }, { kind: "pdf", page: 304 }, EXPLAINS],
    },
    {
      kind: "workflow",
      id: "friction-points",
      eyebrow: "Along a review",
      heading: "Where friction collects when large assets are reviewed",
      intro: "Every review of heavy media passes through much the same moments, and each can be quick or slow.",
      stages: [
        {
          label: "Spotting the candidates",
          body: "Before anything can be judged, a reviewer has to pick out the right few from a folder of heavy files whose names say little. Thumbnails give a fast visual preview without anyone downloading the originals.",
          page: 146,
        },
        {
          label: "Opening the one that matters",
          body: "Camera originals and layered artwork often need specialist software, and occasional reviewers seldom have it. Previews are meant to take that dependency out of the moment of review, so which formats can be previewed is worth checking against your own material.",
        },
        {
          label: "Reaching the relevant part",
          body: "Much review is about specific moments in footage. Being able to discuss a particular moment, rather than describing roughly where it is in a message, saves both sides a search.",
          page: 65,
        },
        {
          label: "Recording where it stands",
          body: "After looking, someone has to say whether the work is ready. Review status gives a clear indication of whether an asset still needs attention or has completed approval.",
          page: 76,
        },
        {
          label: "Going round again",
          body: "Most work returns for another round after changes. Every friction point in the loop is paid once more, which is why small delays matter far more over a project than in a single viewing.",
        },
      ],
      sources: [{ kind: "pdf", page: 146 }, { kind: "pdf", page: 65 }, { kind: "pdf", page: 76 }, { kind: "pdf", page: 313 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "choices",
      eyebrow: "What decides the difference",
      heading: "Choices that determine how much friction previews remove",
      items: [
        {
          heading: "Prepare once, look many times",
          summary: "Generation moves the cost of making something viewable from every viewing to a single job.",
          body: [
            "Without generated previews, each reviewer does the preparation personally: downloading, converting or opening the original in an application that can read it. With them, the work happens once and every later look benefits.",
            ["The arithmetic favours generation most where many people review the same asset repeatedly. In GetSibu, ", { text: "thumbnail generation", page: 143 }, " is among the processing stages an asset moves through after upload, so the preparation sits in the pipeline rather than with the reviewer."],
          ],
          icon: "refresh",
        },
        {
          heading: "Stills and documents carry friction too",
          summary: "Large assets are not only videos.",
          body: [
            "A high-resolution photograph, a layered design file or a long presentation can be as awkward to open as a clip. The friction shows up as slow opening, unsupported formats and files copied to a laptop just to be checked and then forgotten there.",
            "For material like this, a prepared preview is usually what spares a reviewer from opening the original at all.",
          ],
          icon: "image",
        },
        {
          heading: "Occasional reviewers feel it most",
          summary: "Lower friction widens who can realistically take part in a review.",
          body: [
            "Everyday users develop workarounds; people who review now and then do not. Product owners, legal reviewers and senior stakeholders often lack specialist software and fast connections, and they have the least patience for a slow start.",
            ["When looking is easy, their review can happen on the work itself rather than on a screenshot in an email. ", { text: "Collaborative asset review", page: 87 }, " helps distributed teams review creative material without everyone being in the same place."],
          ],
          icon: "users",
        },
      ],
      sources: [{ kind: "pdf", page: 143 }, { kind: "pdf", page: 87 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "roles",
      eyebrow: "Who notices",
      heading: "What lower review friction changes for each role",
      tabs: [
        {
          label: "Creative leads",
          heading: "Moving quickly between many pieces of work",
          icon: "compass",
          body: [
            "A creative lead may look at dozens of assets in a morning across several projects. For them, friction is mostly the time spent between assets: opening, waiting, closing, finding the next.",
            ["Keeping feedback on the asset helps as much as speed does. ", { text: "Asset comments", page: 62 }, " keep notes attached to the creative work being discussed, so a lead’s remarks do not have to be gathered from messages later."],
          ],
          points: ["Time between assets matters most", "Notes left where the work is"],
        },
        {
          label: "Makers",
          heading: "Getting reviewers onto the current version",
          icon: "palette",
          body: [
            "Editors and designers want feedback on what they have just made, not on an earlier export that a reviewer happened to have saved.",
            ["GetSibu lets teams ", { text: "replace an asset in place while retaining previous versions", page: 91 }, ", which avoids the chain of files named “final”, “final-v2” and “final-final” that sends reviewers to the wrong one."],
          ],
          points: ["Feedback on the current version", "One asset instead of a chain of exports"],
        },
        {
          label: "Producers",
          heading: "Keeping review rounds to schedule",
          icon: "calendar",
          body: [
            "Producers measure friction in days. A review round that stalls because a stakeholder could not open a file pushes every later step back, and that delay compounds across rounds.",
            ["Lower friction does not remove the need to chase decisions, but it removes an excuse for not having looked. Using ", { text: "creative review", page: 69 }, " as the central place to inspect work, discuss changes and confirm final assets keeps each round in one location."],
          ],
          points: ["Fewer stalled rounds", "Review, discussion and confirmation together"],
        },
      ],
      sources: [{ kind: "pdf", page: 62 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 69 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about media preview performance",
      items: [
        {
          question: "How can a team find out where its own review friction comes from?",
          answer: "Follow one review round from start to finish and note every wait or detour: files that would not open, downloads abandoned partway, messages asking where a moment is. The detour that recurs across reviewers is the one to address first.",
        },
        {
          question: "Does preview performance still matter once an asset has been approved?",
          answer: "Yes. Approved material goes on to be reused, and each reuse begins with someone checking that they have the right asset, so light previews keep saving effort long after sign-off.",
        },
        {
          question: "Why can reviewing previews still feel slow for colleagues abroad?",
          answer: ["A preview that is quick to open next to where it is stored can still be slow at a distance, because every request has further to travel. ", { text: "Global asset access", page: 314 }, " looks at how delivery supports teams in different regions."],
        },
      ],
      sources: [{ kind: "pdf", page: 314 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on reviewing large media quickly",
      variant: "compact",
      pages: [147, 306, 146, 304, 87, 69],
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
