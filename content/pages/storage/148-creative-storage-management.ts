/**
 * 148 · Creative Storage Management — /storage/creative-storage-management
 *
 * Angle (cluster: storage-analytics): storage management — using how the library is distributed across videos,
 * images, documents and audio to set decisions that suit each kind of media and the organisation, with an owner
 * for each. Storage Analytics (183) owns space per category and its drivers; Storage by Category (192) owns the
 * categories themselves; Storage Growth Analytics (149) owns history; Library Growth Reporting (209) owns
 * planning ahead; Storage Efficiency (357) owns consumption and what to keep, archive or remove.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how organisations manage creative storage; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 148,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Storage & Ingestion",
      lede: "Turn a clear view of how your library divides across videos, images, documents and audio into storage decisions that suit each kind of media and the organisation responsible for it.",
      visual: { diagram: "library-activity", focus: "storage" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 148 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Managing storage begins with the mix a library holds",
      body: [
        "Storage analytics in GetSibu help organisations understand how their library is distributed across videos, images, documents and audio. For creative storage management, that distribution works as a map: it shows what kind of material the organisation is really looking after before anyone decides what to do about it.",
        "A single storage policy rarely suits a creative library. Rules about what to bring in, what to keep close at hand and what to retire mean different things for a finished film, a product shoot, a strategy deck and a licensed music track, and a rule written with one of them in mind tends to be too strict or too loose for the others.",
        "Storage management is therefore partly a matter of ownership. The people who understand footage are seldom the people who understand brand decks, and decisions about what to bring in, what to keep in view and what to retire are sounder when each kind of media has someone accountable for it.",
        [
          "Neighbouring views answer other questions: ",
          { text: "storage analytics", page: 183 },
          " show how much space each asset category consumes, ",
          { text: "storage growth analytics", page: 149 },
          " give historical context on how quickly the library is expanding, and ",
          { text: "storage efficiency", page: 357 },
          " looks at how duplicate detection and storage analytics can help teams understand consumption.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Distribution across four media types", "Different rules for different media", "An owner for each kind of media", "Decisions from ingestion to archive", "Management shaped by the organisation"],
      },
      glance: {
        heading: "Storage management in brief",
        facts: [
          { label: "Area", value: "Storage & Ingestion" },
          { label: "Starts from", value: "Distribution across videos, images, documents and audio" },
          { label: "Category detail", value: "Storage by Category", page: 192 },
          { label: "Who may manage assets", value: "Creative Asset Governance", page: 114 },
        ],
        actions: [{ kind: "route", path: "/storage", label: "More in Storage & Ingestion" }]
      },
      sources: [{ kind: "pdf", page: 148 }, { kind: "pdf", page: 183 }, { kind: "pdf", page: 149 }, { kind: "pdf", page: 357 }, { kind: "pdf", page: 192 }, { kind: "pdf", page: 114 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "organisations",
      eyebrow: "By organisation",
      heading: "How storage management changes with the kind of organisation",
      tabs: [
        {
          label: "In-house team",
          heading: "One library serving several departments",
          icon: "building",
          body: [
            "An in-house library often serves marketing, brand, product and internal communications at once, and each values different material. Much of storage management here is agreement between departments: whose archive can move out of everyday view, and whose material has to stay close at hand.",
            "The distribution helps keep those conversations factual, since it shows what share of the library each kind of media represents rather than leaving it to impressions.",
          ],
          points: ["Agreement between departments", "Shares discussed with evidence"],
        },
        {
          label: "Production",
          heading: "Footage that outweighs everything else",
          icon: "film",
          body: [
            "Where video makes up the bulk of what is stored, a small number of decisions carries most of the weight: which stages of footage enter the library, and what happens to material once a project closes.",
            ["Production teams can also ", { text: "analyse media activity, uploads and video-related workflows", page: 201 }, ", which puts storage decisions next to how the footage is actually being worked on."],
          ],
          points: ["A few decisions with large effects", "Storage read beside production activity"],
        },
        {
          label: "Agency",
          heading: "Storage held on clients’ behalf",
          icon: "briefcase",
          body: [
            "An agency manages storage partly for its clients, and expectations differ from one client to the next. A project ending for one client says nothing about what another needs kept, so decisions work best with each client’s own contacts involved.",
            ["For a sense of how each client’s material is being worked on, agencies can use analytics to ", { text: "understand asset activity across client environments", page: 202 }, "."],
          ],
          points: ["Expectations that vary by client", "Activity read across client environments"],
        },
        {
          label: "Brand team",
          heading: "Small files with large consequences",
          icon: "shield",
          body: [
            "Brand libraries hold material that is modest in size but high in consequence: logos, guidelines and approved imagery. Their storage question is less about space than about keeping current versions easy to reach and superseded ones out of the way.",
            ["Brand teams can use analytics to see ", { text: "which approved assets are being accessed and reused", page: 203 }, ", which shows what must stay prominent."],
          ],
          points: ["Consequence rather than size", "Current material kept prominent"],
        },
      ],
      sources: [{ kind: "pdf", page: 148 }, { kind: "pdf", page: 201 }, { kind: "pdf", page: 202 }, { kind: "pdf", page: 203 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "by-media",
      eyebrow: "By media type",
      heading: "Storage questions that differ for each kind of media",
      intro: "The questions are general to creative libraries; the answers belong to each organisation.",
      columns: ["What to bring in", "What to keep in everyday view", "Usually best decided by"],
      rows: [
        { label: "Video", cells: ["Originals, selects or finished cuts", "Live projects and approved deliverables", "Head of production or post-production"] },
        { label: "Images", cells: ["Every frame, or selects and retouched finals", "Approved imagery and current campaigns", "Photography or brand lead"] },
        { label: "Documents", cells: ["Finals only, or working drafts as well", "Current decks, guidelines and briefs", "The department that owns the content"] },
        { label: "Audio", cells: ["Final mixes, stems or raw recordings", "Material still cleared for use", "Producer or whoever manages licences"] },
      ],
      sources: [{ kind: "pdf", page: 148 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "An events company gives each kind of media an owner",
      team: "An events company",
      situation: "An events company has just brought several years of event work into one library. Its first look at how the library is distributed shows far more video than anyone expected, and the document share turns out, on inspection, to be swollen by old presentation drafts.",
      steps: [
        { heading: "Owners are named", body: "The operations lead asks the head of video, the photography lead and the account director to take responsibility for video, images and documents, with a producer looking after audio." },
        { heading: "A rule for incoming footage", body: "For future events, the head of video agrees that selects and finished edits enter the library while raw multi-camera recordings stay in production storage until each project closes." },
        { heading: "Licensed music gets an end date", body: ["Tracks licensed for a single campaign are given ", { text: "expiry information", page: 104 }, ", which helps the team identify content that should no longer be used once the period has passed."] },
        { heading: "Old drafts leave everyday view", body: ["Superseded presentation drafts are ", { text: "archived", page: 108 }, ", keeping them for reference without letting them crowd everyday searches."] },
        { heading: "Authority is written down", body: "The company records who may manage and remove assets in each area, so decisions about stored material follow the agreed owners rather than whoever notices space running low." },
      ],
      outcome: "Storage decisions stop falling to whoever happens to be under pressure, and each kind of media is looked after by someone who understands its value.",
      link: { page: 236, label: "GetSibu for Event Companies" },
      sources: [{ kind: "pdf", page: 104 }, { kind: "pdf", page: 108 }, { kind: "pdf", page: 109 }, { kind: "pdf", page: 236 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about creative storage management",
      items: [
        {
          question: "How is creative storage management different from storage by category?",
          answer: [{ text: "Storage by category", page: 192 }, " is the breakdown itself: storage analysed across video, image, document and audio. Creative storage management is what an organisation decides to do in light of that breakdown, and who makes those decisions."],
        },
        {
          question: "Is creative storage management a job for IT or for creative teams?",
          answer: "Both, for different parts of it. People who look after infrastructure understand capacity and cost, while creative leads know which material still matters, so decisions about what a library holds work best with both in the room.",
        },
        {
          question: "Can creative storage management be handled separately for each client?",
          answer: ["Where a multi-tenant setup is used, yes: ", { text: "client environments can have their own storage allocation", page: 163 }, " and asset boundaries, so each client’s storage can be considered on its own terms."],
        },
      ],
      sources: [{ kind: "pdf", page: 192 }, { kind: "pdf", page: 163 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on understanding and managing storage",
      variant: "compact",
      pages: [183, 192, 149, 357, 108, 163],
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
