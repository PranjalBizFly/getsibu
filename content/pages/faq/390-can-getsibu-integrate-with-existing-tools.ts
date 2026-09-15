/**
 * 390 · Can GetSibu Integrate With Existing Tools? — /faq/can-getsibu-integrate-with-existing-tools
 *
 * FRAMED: the PDF answer names integrations GetSibu has not confirmed. The verified answer is built from
 * GetSibu Integrations (241), Automated Asset Ingestion (121), Developer API (255), Custom Integrations (260)
 * and Migrate to GetSibu (281). No tool, provider or service is named anywhere on the page.
 * Angle: the routes by which GetSibu fits around an existing workflow, and how to map your own tools first.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Practical explanation of planning integrations in general; names no tool and states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 390,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "centered",
      eyebrow: "FAQ",
      lede: "How GetSibu fits around the tools a team already works with: bringing assets in, building on the API, requesting what is missing and moving an existing library across.",
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 241 }, { kind: "pdf", page: 121 }, { kind: "pdf", page: 255 }, { kind: "pdf", page: 260 }, { kind: "pdf", page: 281 }],
    },
    {
      kind: "definition",
      id: "short-answer",
      eyebrow: "Short answer",
      term: "Can GetSibu Integrate With Existing Tools?",
      answer: [
        "Yes. GetSibu ",
        { text: "connects with the tools teams already use", page: 241 },
        ", so organisations do not need to completely rebuild their existing creative workflow. Assets can be ingested from connected storage sources as well as through direct uploads.",
      ],
      detail: "Developers can use the API to build asset upload, search, collaboration and other supported workflows into custom applications. Organisations can also request integrations for tools that are not already part of the supported set, and migration capabilities help teams move existing libraries from shared drives, cloud storage or other asset management systems.",
      sources: [{ kind: "pdf", page: 241 }, { kind: "pdf", page: 121 }, { kind: "pdf", page: 255 }, { kind: "pdf", page: 260 }, { kind: "pdf", page: 281 }],
    },
    {
      kind: "overview",
      id: "longer-answer",
      heading: "Fitting into a workflow instead of replacing it",
      body: [
        "Creative teams rarely arrive at a DAM with a blank slate. They have places where files already live, applications where work is made and published, and systems that track projects and sign-off. The useful question is less whether a platform integrates in general and more whether it can take part in the particular flows a team depends on.",
        [
          "Integration also runs deeper than individual connections. GetSibu offers ",
          { text: "a developer-oriented foundation", page: 280 },
          " for organisations that want asset management inside their existing software environments, and its ",
          { text: "cloud-based architecture", page: 303 },
          " lets organisations reach their creative libraries through supported clients and integrations.",
        ],
        [
          "Integrations are rarely a project of their own. ",
          { text: "DAM implementation", page: 299 },
          " treats them as one part of configuring a library, next to users, folders, permissions, metadata and workflows, which is a good reason to map your tools early.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Tools teams already use", "Connected storage and direct uploads", "An API for custom applications", "Requests for missing integrations", "Migration from existing systems"],
      },
      highlight: {
        heading: "In practice",
        body: "Before asking whether a platform integrates, write down the few places your files pass through in an ordinary week. That short list turns a vague question into specific ones you can check.",
        tags: ["Planning", "IT", "Operations"],
      },
      glance: {
        heading: "Integration routes in brief",
        facts: [
          { label: "Area", value: "Integrations" },
          { label: "For developers", value: "Developer API", page: 255 },
          { label: "Missing a tool", value: "Custom Integrations", page: 260 },
          { label: "Moving a library", value: "Migrate to GetSibu", page: 281 },
        ],
        actions: [{ kind: "route", path: "/faq", label: "More in FAQs" }]
      },
      sources: [{ kind: "pdf", page: 280 }, { kind: "pdf", page: 303 }, { kind: "pdf", page: 299 }, { kind: "pdf", page: 255 }, { kind: "pdf", page: 260 }, { kind: "pdf", page: 281 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "routes-in",
      eyebrow: "Routes in",
      heading: "Ways GetSibu can work alongside what you have",
      items: [
        {
          heading: "Folders that keep feeding the library",
          body: "Watch folders can be scanned continuously, so content newly added to them can enter the GetSibu workflow automatically.",
          icon: "folder",
          points: ["Suits a steady stream of new material"],
          page: 128,
        },
        {
          heading: "Existing storage during a move",
          body: "The migration workflow is designed so organisations can go on using their existing storage while content is indexed in the background.",
          icon: "refresh",
          page: 292,
        },
        {
          heading: "Structure and metadata carried over",
          body: "Existing folder structures can be mirrored or remapped during import. Metadata such as EXIF, XMP, creators and custom keywords can be preserved during migration.",
          icon: "map",
          page: 133,
        },
        {
          heading: "Connections kept within security boundaries",
          body: "API requests use authenticated access, so external applications can interact with the platform within appropriate security boundaries.",
          icon: "lock",
          page: 256,
        },
        {
          heading: "Large libraries without file-by-file uploads",
          body: "Bulk import helps an organisation move a large existing library into GetSibu without uploading each file individually.",
          icon: "download",
          page: 130,
        },
      ],
      sources: [{ kind: "pdf", page: 128 }, { kind: "pdf", page: 292 }, { kind: "pdf", page: 133 }, { kind: "pdf", page: 132 }, { kind: "pdf", page: 256 }, { kind: "pdf", page: 130 }],
    },
    {
      kind: "process",
      id: "map-your-tools",
      eyebrow: "Plan it",
      heading: "Mapping your tools before connecting anything",
      intro: "Work through these in order, and involve whoever runs each tool along the way.",
      steps: [
        { heading: "List where files live", body: "Note every shared location, storage service and inbox that holds creative files today, and roughly what each one contains.", icon: "database" },
        { heading: "Trace how work moves", body: "Follow a typical asset from brief to publication and write down each tool it passes through, including review and sign-off.", icon: "workflow" },
        { heading: "Mark the direction of flow", body: "For each tool, decide whether assets or information need to come into the library, go out of it, or travel both ways.", icon: "network" },
        { heading: "Check what is supported", body: "Compare the list with the GetSibu integrations overview to see which of those flows are already accounted for.", icon: "plug", page: 241 },
        { heading: "Hand over what remains", body: "Pass the flows that are left to the people who will build or request those connections, using the list from the earlier steps as their brief.", icon: "code" },
      ],
      sources: [{ kind: "pdf", page: 241 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Follow-up questions about connecting GetSibu to existing tools",
      items: [
        {
          question: "What should a team understand before connecting or moving an existing library?",
          answer: [
            "Its current storage, metadata, permissions and organisational requirements. ",
            { text: "DAM Migration Strategy", page: 289 },
            " starts from exactly that understanding, because it shapes which connections and transfers are worth making.",
          ],
        },
        {
          question: "Can a small batch of files be added without setting up any integration?",
          answer: [
            "Yes. ",
            { text: "Drag and drop upload", page: 127 },
            " is meant for adding individual assets or small batches without configuring an integration first.",
          ],
        },
        {
          question: "What should be checked once a library has been brought into GetSibu?",
          answer: [
            "Confirm that everything arrived as expected. ",
            { text: "Migration verification", page: 296 },
            " helps organisations check that important content and metadata transferred correctly, and processing status shows when assets are fully indexed and searchable.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 289 }, { kind: "pdf", page: 127 }, { kind: "pdf", page: 296 }, { kind: "pdf", page: 145 }],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on connecting GetSibu",
      variant: "compact",
      pages: [241, 260, 255, 281, 121, 256],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Start Your Creative Library",
      conversionPage: 391,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 391 }],
    },
  ],
};

export default page;
