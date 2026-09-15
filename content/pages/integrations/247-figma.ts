/**
 * 247 · Figma Integration — /integrations/figma (HELD draft; own claim: figma)
 *
 * Angle: design teams creating and managing visual content in collaborative design environments, and
 * the meeting point between making visuals together and managing them once others depend on them.
 * page 248 owns editing; page 249 owns motion design; page 250 owns review.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how design teams work in collaborative design environments; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 247,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Integrations",
      lede: "What the Figma integration means for design teams whose visuals are made together in a shared design environment, and how that work relates to a library the rest of the organisation relies on.",
      visual: { diagram: "connector-flow", label: "Figma" },
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 247 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Where visuals are made and where they are kept",
      body: [
        "Figma integration supports workflows where design teams create and manage visual content in collaborative design environments. Its value lies at the meeting point of two kinds of work: making visuals together, and looking after them once other people depend on them.",
        "A collaborative design file behaves differently from a finished asset. Several people can work on the same canvas, explorations sit beside the choices that were kept, and the file goes on changing after a piece has been published. That suits the people making the work. It is harder for a colleague outside the design team who needs only the approved result and has to work out which page, frame or state is the one to use.",
        [
          "The library side of the workflow answers that colleague. ",
          { text: "Image version management", page: 98 },
          " lets marketing and design teams keep different versions of a visual asset in one structured record, and ",
          { text: "brand asset approval", page: 71 },
          " uses approval gates to separate approved creative from drafts and work in progress.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Collaborative design environments", "Visual content created by design teams", "Versions of a visual in one record", "Approved work apart from drafts", "Visuals others can find and reuse"],
      },
      highlight: {
        heading: "In practice",
        body: "A social media manager needs this month’s campaign graphic. She looks in an approved-only view of the library rather than asking a designer which frame in a busy design file is the final one.",
        tags: ["Designers", "Brand teams", "Marketing"],
      },
      glance: {
        heading: "The Figma integration in brief",
        facts: [
          { label: "Area", value: "Integrations" },
          { label: "For", value: "Design teams working on visual content" },
          { label: "Versions", value: "Image Version Management", page: 98 },
          { label: "Sign-off", value: "Brand Asset Approval", page: 71 },
        ],
      },
      sources: [{ kind: "pdf", page: 247 }, { kind: "pdf", page: 98 }, { kind: "pdf", page: 71 }, { kind: "pdf", page: 103 }, EXPLAINS],
    },
    {
      kind: "layers",
      id: "canvas-to-library",
      eyebrow: "How the parts relate",
      heading: "From a shared canvas to a visual others can reuse",
      layers: [
        { label: "The design environment", body: "Designers create together here. Alternatives, explorations and unfinished ideas live side by side and keep changing as the work develops." },
        { label: "The managed asset", body: "In the library the visual can be organised through folders, tags, collections, metadata and permissions, as part of a reliable source of truth.", page: 4 },
        { label: "Review of the visual", body: "Before a visual is used widely, creative review provides a central location to inspect the work, discuss changes and confirm the final asset.", page: 69 },
        { label: "Reuse across the organisation", body: "Colleagues find images through metadata, tags, visual characteristics and extracted information, which makes a large collection easier to reuse across campaigns.", page: 26 },
      ],
      sources: [{ kind: "pdf", page: 69 }, { kind: "pdf", page: 4 }, { kind: "pdf", page: 26 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "perspectives",
      eyebrow: "Who it helps",
      heading: "What the connection means for each group around design work",
      tabs: [
        {
          label: "Designers",
          heading: "Stay in the environment built for making",
          icon: "palette",
          body: [
            "Designers do their best work in the tool designed for it. Every detour into another system to hand over a file, rename an export or answer “which one is final?” takes attention away from the design itself.",
            ["The library can also keep a designer’s contribution visible. With ", { text: "asset attribution", page: 116 }, ", creators and contributors can remain associated with assets, preserving context as work passes between colleagues."],
          ],
          points: ["Attention kept on the design itself", "Credit and context kept with the work"],
        },
        {
          label: "Design leads",
          heading: "Decide what counts as finished",
          icon: "check",
          body: [
            "In a shared design environment, “done” is a matter of agreement rather than a property of the file. A design lead has to say when a visual has moved from exploration to something others can use.",
            "Making that state explicit in the library, instead of in a file name or a frame label, gives everyone else a reliable signal. Asset statuses exist for exactly that, distinguishing drafts, approved content and other workflow states.",
          ],
          points: ["A clear line between exploring and finished", "State recorded where colleagues look"],
          link: { page: 102, label: "Asset Status Management" },
        },
        {
          label: "Brand teams",
          heading: "Keep every use of a visual consistent",
          icon: "shield",
          body: [
            "Brand teams care less about how a visual was made than about whether it can be used. A colour variant made for one market, or a logo lock-up drawn for a single event, can easily travel further than intended.",
            ["Structured ", { text: "brand guardrail tags", page: 105 }, " can identify the assets that comply with specific organisational requirements, so the visuals that meet the rules are easier to tell apart from the ones that do not."],
          ],
          points: ["Visuals that meet requirements identified", "Variants less likely to escape their purpose"],
        },
        {
          label: "Marketing",
          heading: "Find the right visual without knowing the file",
          icon: "megaphone",
          body: [
            "Marketing and content colleagues rarely know how a design file is organised, and they should not need to. They need the approved banner, the product illustration or the event graphic, quickly and in the right version.",
            "A search that the team uses again and again, such as one campaign’s approved visuals, can be saved and shared through a URL as a reusable view.",
          ],
          points: ["No need to learn the design file’s structure", "Recurring views shared by link"],
          link: { page: 17, label: "Saved Asset Searches" },
        },
      ],
      sources: [{ kind: "pdf", page: 116 }, { kind: "pdf", page: 102 }, { kind: "pdf", page: 105 }, { kind: "pdf", page: 17 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "decisions",
      eyebrow: "Before connecting",
      heading: "Questions design teams settle when design files meet a library",
      items: [
        {
          heading: "Which stage of work belongs in the library?",
          summary: "Not every exploration needs to be managed as an asset.",
          icon: "layers",
          body: [
            "Explorations are cheap to make and numerous by nature. Treating each one as a library asset buries the visuals other people actually need. A useful test is whether anyone outside the design team will look for, reference or reuse the piece.",
            ["Being selective at the start is part of ", { text: "creative library maintenance", page: 111 }, ", which helps prevent a library from filling with duplicate, obsolete or poorly classified content."],
          ],
        },
        {
          heading: "What is the source, and what is the output?",
          summary: "A design file and a visual produced from it are related, but they are not the same thing.",
          icon: "document",
          body: [
            "The design file keeps evolving; a visual produced from it captures one state at one moment. Confusing the two leads to colleagues treating a living file as final, or to designers overwriting something that has already been used.",
            ["Recording where a visual came from helps later. File paths, creators and custom keywords are among the ", { text: "metadata that can become part of the asset record", page: 22 }, "."],
          ],
        },
        {
          heading: "How are versions of a visual handled?",
          summary: "Names such as “final-v2” are a sign that versions are being kept as separate files.",
          icon: "history",
          body: [
            ["Design work goes through many revisions, and separate copies for each one soon become impossible to tell apart. GetSibu allows teams to ", { text: "replace assets in place while retaining previous versions", page: 91 }, ", which avoids a folder of near-identical files with competing names."],
          ],
        },
        {
          heading: "Who should see unreleased design work?",
          summary: "Design environments are often shared widely inside a company, while some visuals need a smaller audience.",
          icon: "lock",
          body: [
            "Launch visuals and client work can be commercially sensitive before release, so access that suits collaboration during design may be too broad for the stored result.",
            ["In the library, ", { text: "department access", page: 176 }, " lets departments receive access to only the creative libraries relevant to their work."],
          ],
        },
        {
          heading: "How will colleagues describe what they need?",
          summary: "People outside design rarely search by file or frame name.",
          icon: "search",
          body: [
            "A marketer remembers “the teal version with the product on the left”, not what the frame was called. Planning how visuals will be found matters as much as planning where they are kept.",
            ["Here ", { text: "AI colour detection", page: 36 }, " can help: colour information can be extracted from visual assets and used as part of discovery."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 111 }, { kind: "pdf", page: 22 }, { kind: "pdf", page: 91 }, { kind: "pdf", page: 176 }, { kind: "pdf", page: 36 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about the Figma integration",
      items: [
        {
          question: "Can design teams’ visuals sit alongside video and documents in GetSibu?",
          answer: ["Yes. GetSibu is designed to help teams store, organise, search, review and collaborate on videos, images, documents and audio from ", { text: "one central workspace", page: 1 }, ", so a campaign’s graphics can be kept with its footage and copy."],
        },
        {
          question: "Where should feedback on a finished visual go when reviewers do not use Figma?",
          answer: ["On the asset in the library. ", { text: "Asset comments", page: 62 }, " keep feedback attached to the creative work being discussed, which suits reviewers who never open the design file."],
        },
        {
          question: "Can GetSibu find copies of the same visual saved more than once?",
          answer: [{ text: "AI duplicate detection", page: 40 }, " combines exact and perceptual hashing to identify identical files and visually equivalent copies, including files that have been renamed or re-encoded, which is common when one design is saved in several places."],
        },
        {
          question: "What if a design team works in a tool other than Figma?",
          answer: ["Organisations can ask for an integration through ", { text: "Custom Integrations", page: 260 }, " when a tool is not already part of the supported integration ecosystem."],
        },
      ],
      sources: [{ kind: "pdf", page: 1 }, { kind: "pdf", page: 62 }, { kind: "pdf", page: 40 }, { kind: "pdf", page: 260 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on managing design work",
      variant: "compact",
      pages: [98, 71, 102, 105, 26, 260],
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
