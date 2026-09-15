/**
 * 26 · Searchable Image Library — /features/searchable-image-library
 *
 * Angle (clusters: media-libraries, ai-discovery): images searchable through metadata, tags, visual characteristics
 * and extracted information, for reuse across campaigns and projects — which route suits which kind of imagery,
 * how one photograph serves several campaigns, and what to check before reusing it. AI-Powered Image Discovery (52)
 * owns the AI angle, Image Version Management (98) owns versions, AI Asset Discovery (12) owns look-alike frames.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how creative teams reuse imagery; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 26,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Search & Discovery",
      lede: "Find photography again when a new brief could use it: which kinds of information lead to which kinds of image, and what to check before a picture made for one campaign appears in another.",
      visual: { diagram: "media-library", focus: "image" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 26 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Photography made once and found again for the next brief",
      body: [
        "Images in GetSibu become searchable through metadata, tags, visual characteristics and extracted information. A large collection is then easier to reuse across campaigns and projects.",
        "Images are commissioned for a moment and needed long after it. A spring launch shoot holds the pack shot the website wants in the autumn; an event gallery holds the venue photograph the press office asks for the following year. When those images cannot be found, teams reshoot, license stock or settle for something weaker, and the original work quietly loses its value.",
        [
          "Locating photographs, product shots and campaign images through AI-generated metadata is the focus of ",
          { text: "AI-powered image discovery", page: 52 },
          ". An image library is also judged by what happens after the search: deciding whether a picture made for one purpose can safely serve another.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Four routes into an image", "Metadata, tags, visual characteristics, text", "Built for reuse across campaigns", "Checks before an image is reused", "Reuse before reshooting"],
      },
      highlight: {
        heading: "In practice",
        body: "A web producer needs lifestyle photography of a product for a seasonal page. Before briefing a new shoot, they search the library and turn up unused frames from the previous year’s launch.",
        tags: ["Web producers", "Brand teams", "Photography"],
      },
      glance: {
        heading: "Image library in brief",
        facts: [
          { label: "Area", value: "Search & Discovery" },
          { label: "Searchable through", value: "Metadata, tags, visual characteristics, extracted information" },
          { label: "Built for", value: "Reuse across campaigns and projects" },
          { label: "Used by", value: "GetSibu for Photography Teams", page: 228 },
        ],
        actions: [{ kind: "route", path: "/features/search-and-discovery", label: "More in Search & Discovery" }]
      },
      sources: [{ kind: "pdf", page: 26 }, { kind: "pdf", page: 52 }, { kind: "pdf", page: 228 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "imagery",
      eyebrow: "Kinds of imagery",
      heading: "Which route tends to find which kind of image",
      tabs: [
        {
          label: "Product shots",
          heading: "Pack shots and product photography",
          icon: "store",
          body: [
            "Product photography is requested by more teams than almost any other image: e-commerce, retail, sales, PR and packaging. One product can exist as many angles, backgrounds and seasonal updates, often photographed under near-identical conditions.",
            "Tags naming the product, its range and its colourway carry most of the weight, because product photography is where a shared vocabulary pays off most visibly. A tag agreed once serves every department that asks for the same item.",
          ],
          points: ["Requested by many departments", "A shared vocabulary for products"],
        },
        {
          label: "Campaign imagery",
          heading: "Visuals made for a single campaign",
          icon: "megaphone",
          body: [
            "Campaign images carry their context in their copy and their atmosphere: a headline, an offer, a seasonal feel. Regional teams adapt them, new channels need them resized, and the next brief often starts by asking what was done last time.",
            ["Words printed on finished artwork can be reached through extracted information, and ", { text: "visual mood characteristics", page: 35 }, " can be made searchable, which suits a brief that asks for the feel of an earlier campaign rather than its name."],
          ],
          points: ["Headlines and offers inside the artwork", "Found by feel as well as by name"],
        },
        {
          label: "Event photography",
          heading: "Galleries from launches, conferences and shoots",
          icon: "camera",
          body: [
            "Events produce large galleries quickly, usually from several photographers, with filenames that follow each camera rather than the programme. Weeks later someone needs the stage during the keynote, the venue exterior or the sponsor’s banner.",
            ["Capture dates and photographer credits held as ", { text: "metadata on the asset record", page: 22 }, " can help place a frame within the event, while tags recording the session or venue give later searches a direct way in."],
          ],
          points: ["Several photographers, one event", "Sessions and venues recorded as tags"],
        },
        {
          label: "Brand imagery",
          heading: "Logos, patterns and approved photography",
          icon: "palette",
          body: [
            "Some images exist to be reused constantly: logo files, brand patterns, approved leadership photography, standard backgrounds. The risk with these is rarely failing to find them; it is finding an outdated one.",
            ["Brand teams can use ", { text: "brand guardrail tags", page: 105 }, " to identify assets that comply with specific organisational requirements, which can help colleagues tell images that meet the current standard from older ones."],
          ],
          points: ["Reused constantly", "Outdated files are the real risk"],
        },
      ],
      sources: [{ kind: "pdf", page: 26 }, { kind: "pdf", page: 4 }, { kind: "pdf", page: 38 }, { kind: "pdf", page: 35 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 105 }, EXPLAINS],
    },
    {
      kind: "workflow",
      id: "working-life",
      eyebrow: "An image’s working life",
      heading: "How one photograph can serve several campaigns",
      stages: [
        { label: "Shoot and selects", body: "A session produces far more frames than the brief needs. The selects go to the campaign; the rest are often kept just in case, and that remainder is where later reuse usually comes from." },
        { label: "Arrival", body: "Thumbnails are generated as the images are processed, giving fast visual previews of the whole shoot without anyone downloading originals.", page: 146 },
        { label: "First use", body: "The selects move through approval, and the status history records whether each one is awaiting review, approved or requires changes.", page: 68 },
        { label: "A second brief", body: "Months later another team searches for what it needs, whether a product, a setting or a mood, and can come across frames from the original shoot, including some that were never used." },
        { label: "Continued use", body: "Usage analytics help show which images keep being used and which remain inactive, which is worth knowing before the next shoot is planned.", page: 106 },
        { label: "Retirement", body: "After a rebrand, superseded photography is archived rather than deleted, so the record of earlier campaigns survives even though the images are no longer the ones to use.", page: 108 },
      ],
      sources: [{ kind: "pdf", page: 146 }, { kind: "pdf", page: 68 }, { kind: "pdf", page: 26 }, { kind: "pdf", page: 106 }, { kind: "pdf", page: 108 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "before-reuse",
      eyebrow: "Before reuse",
      heading: "Four checks before reusing an image found in search",
      items: [
        {
          heading: "Has it been approved?",
          summary: "A library holds drafts and alternatives alongside finished work.",
          icon: "approval",
          body: [
            ["An attractive frame may be one the brand team rejected. ", { text: "Review status", page: 76 }, " indicates whether an asset still needs attention or has completed approval, and teams can set up ", { text: "approved-only views", page: 103 }, " for colleagues who should only work from finished content."],
          ],
        },
        {
          heading: "Is it still within its usage terms?",
          summary: "Licensed and commissioned photography often comes with limits on time, territory or channel.",
          icon: "calendar",
          body: [
            "A photograph cleared for last year’s print campaign may not be cleared for this year’s social channels, and stock images are frequently licensed for a fixed period.",
            ["", { text: "Asset expiry information", page: 104 }, " can help teams identify content that should no longer be used after a specified period, which is the kind of check a reused image needs."],
          ],
        },
        {
          heading: "Is there a better copy of it?",
          summary: "An image lifted from a deck or a web page may be a compressed stand-in for a stronger original.",
          icon: "copy",
          body: [
            ["Images pass between teams by being pasted and re-saved, losing quality each time. ", { text: "Duplicate detection", page: 40 }, " identifies identical files and visually equivalent copies, including re-encoded or renamed ones, which can reveal that a better file of the same picture already exists."],
          ],
        },
        {
          heading: "Who should be credited?",
          summary: "Editorial, press and partner use often expects a photographer’s or agency’s name.",
          icon: "user",
          body: [
            ["Credits are easy to lose once an image has been reused a few times. ", { text: "Asset attribution", page: 116 }, " can keep creators and contributors associated with assets, so the name stays with the photograph instead of in an old email thread."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 76 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 104 }, { kind: "pdf", page: 40 }, { kind: "pdf", page: 116 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about searchable image libraries",
      items: [
        {
          question: "Can a searchable image library find photographs by colour?",
          answer: ["Where appropriate, yes. ", { text: "Colour information", page: 36 }, " can be extracted from visual assets and used in discovery, which helps when a brief is built around a palette or a particular colourway."],
        },
        {
          question: "Who adds the tags that make an image library searchable?",
          answer: ["AI and people together. ", { text: "AI-assisted tagging", page: 31 }, " proposes tags while images are processed, and authorised users keep the final say on each of them."],
        },
        {
          question: "Should resized and retouched versions of a photograph be kept together?",
          answer: ["Usually, when they are the same picture prepared for different uses. ", { text: "Image version management", page: 98 }, " lets marketing and design teams maintain different versions of a visual asset in one structured record. A crop made for a different campaign, with a different subject in focus, is often better treated as an image of its own."],
        },
        {
          question: "Why are filenames a poor way to find images?",
          answer: "Camera sequence numbers and export names say almost nothing about what a picture shows, and the same photograph is often saved under several names as it passes from team to team.",
        },
      ],
      sources: [{ kind: "pdf", page: 36 }, { kind: "pdf", page: 31 }, { kind: "pdf", page: 98 }, { kind: "pdf", page: 26 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on finding and reusing images",
      variant: "compact",
      pages: [52, 98, 36, 228, 103, 24],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Stop Searching Through Folders",
      conversionPage: 393,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 393 }],
    },
  ],
};

export default page;
