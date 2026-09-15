/**
 * 258 · Developer Playground — /developers/developer-playground (HELD draft; own claim: developer-playground)
 *
 * Angle (cluster: api-platform): the playground for testing API requests and understanding how
 * integrations interact with GetSibu, between reading about the API and writing code. API Documentation
 * (273) owns the reference; page 259 and page 274 own tooling direction.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how developers use interactive API testing environments in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 258,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "API & Developers",
      lede: "What a developer playground is for when building on GetSibu: trying API requests and seeing how an integration will behave with the platform before any of it becomes code that colleagues depend on.",
      visual: { diagram: "api-flow", focus: "auth" },
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 258 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Trying a request before building on it",
      body: [
        "The developer playground provides an environment for testing API requests and understanding how integrations interact with GetSibu. It sits between reading about an API and writing an integration: a place to send a request, study what comes back and adjust before committing to a design.",
        "Reference material describes what an API is meant to do. A response shows what it actually returns for a particular request. Developers learn an API fastest through that loop of asking and observing, and many integration mistakes, such as a misread field or an unexpectedly empty result, surface in minutes instead of after a release.",
        [
          "Because GetSibu is built on ",
          { text: "an API-first architecture", page: 253 },
          ", the requests a developer tests are aimed at the same platform capabilities that its own interface uses. What is learned there carries over to the integrations developers go on to build with the ",
          { text: "Developer API", page: 255 },
          ".",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Testing API requests", "Reading real responses", "How integrations interact with GetSibu", "Experiments before code", "Care with requests that change things"],
      },
      highlight: {
        heading: "In practice",
        body: "Before writing an integration, a developer sends the request she plans to rely on and finds that it needs a detail the design had not allowed for.",
        tags: ["Developers", "Integration teams", "Technical evaluators"],
      },
      glance: {
        heading: "The developer playground in brief",
        facts: [
          { label: "Area", value: "API & Developers" },
          { label: "Used for", value: "Testing API requests and integration behaviour" },
          { label: "Reference", value: "API Documentation", page: 273 },
          { label: "Related", value: "Developer Authentication", page: 275 },
        ],
      },
      sources: [{ kind: "pdf", page: 258 }, { kind: "pdf", page: 253 }, { kind: "pdf", page: 255 }, { kind: "pdf", page: 273 }, { kind: "pdf", page: 275 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "question-to-code",
      eyebrow: "Step by step",
      heading: "From a question about the API to integration code",
      intro: "A sequence that suits most first experiments, whatever the integration is for.",
      steps: [
        { heading: "Start from the task", body: "Describe the job the integration should do, such as finding assets for a product page, before choosing a single request.", icon: "compass" },
        { heading: "Look up the reference", body: "Find the relevant part of the API documentation, which provides the information required to build integrations against the platform, so the request tested matches what is described.", icon: "book", page: 273 },
        { heading: "Authenticate the request", body: "Developers authenticate API requests using supported authentication credentials; confirm early that the credentials an integration will use are accepted.", icon: "key", page: 275 },
        { heading: "Read before you change", body: "Begin with a request that only retrieves information, which shows the shape of a response without altering anything in the library.", icon: "eye" },
        { heading: "Study the response", body: "Note which details come back, what an empty or refused result looks like and anything the reference did not make obvious.", icon: "search" },
        { heading: "Carry it into code", body: "Turn what worked into the integration, and record the tested requests in its own notes as examples for colleagues and later troubleshooting.", icon: "code" },
      ],
      sources: [{ kind: "pdf", page: 273 }, { kind: "pdf", page: 275 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "testing-versus-running",
      eyebrow: "Side by side",
      heading: "Testing in a playground compared with running an integration",
      intro: "A request may look the same in both places; everything around it differs.",
      columns: ["Testing in the playground", "Running an integration"],
      rows: [
        ["Purpose", "Learning how requests and responses behave", "Doing a job repeatedly without supervision"],
        ["Who is watching", "A developer reading each response", "Nobody, unless monitoring is in place"],
        ["Number of requests", "A few, sent deliberately", "As many as the workflow demands"],
        ["When something is wrong", "Seen straight away and corrected", "Repeated until someone notices"],
        ["What it is meant to produce", "Understanding and example requests", "Results that people and other systems rely on"],
      ],
      sources: [{ kind: "pdf", page: 258 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "while-testing",
      eyebrow: "Considerations",
      heading: "What to keep in mind while testing API requests",
      items: [
        {
          heading: "Test requests are still requests",
          summary: "A request that changes something may change real content unless you know otherwise.",
          icon: "flag",
          body: [
            "Confirm whether requests sent from the playground act on live library content before trying anything that adds, alters or removes. Where possible, use an area of the library set aside for testing and material that nobody depends on.",
            "Treat any request that deletes or overwrites with the caution you would apply to doing the same thing by hand.",
          ],
        },
        {
          heading: "Credentials deserve care in experiments too",
          summary: "A credential pasted into a shared note outlives the experiment it was used for.",
          icon: "key",
          body: [
            "Experiments invite shortcuts: a credential copied into a chat to help a colleague, or left in a scratch file. Use credentials meant for testing where they exist, keep them out of shared documents and withdraw them when the experiment ends.",
            [{ text: "API security", page: 277 }, " is an important component of protecting automated access to creative assets, and that includes the access developers use while exploring."],
          ],
        },
        {
          heading: "Know which environment you are testing",
          summary: "In multi-tenant setups, a request answers for one environment at a time.",
          icon: "building",
          body: [
            "An agency developer testing requests for one client needs to be certain the results come from that client’s environment and no other. Confusing two environments during testing leads to integrations built on the wrong assumptions.",
            ["In GetSibu, ", { text: "API access can include tenant context", page: 276 }, " so that multi-tenant environments remain properly separated."],
          ],
        },
        {
          heading: "Integrations are sequences, not single calls",
          summary: "Trying requests in the order an integration will make them shows how the pieces fit.",
          icon: "workflow",
          body: [
            "An integration rarely makes one request. It might search, read the details of the assets it finds and then act on one of them. Stepping through that sequence by hand reveals which information one request needs from the previous one, and where the design has gaps.",
            ["Asset details are a common link in those sequences, because the ", { text: "asset metadata API", page: 264 }, " can expose asset information so external systems can work with metadata programmatically."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 258 }, { kind: "pdf", page: 277 }, { kind: "pdf", page: 276 }, { kind: "pdf", page: 264 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about the developer playground",
      items: [
        {
          question: "Who besides integration developers can learn from a developer playground?",
          answer: ["IT teams who support integrations and technical staff judging how an API fits their systems both learn quickly from real requests. The ", { text: "GetSibu API", page: 261 }, " provides programmatic access to the platform for developers and technology teams, not only for those writing code every day."],
        },
        {
          question: "Can a request that works in the developer playground go straight into production code?",
          answer: "It is a sound starting point rather than a finished integration. Code that runs unattended also has to cope with failed requests, unexpected responses and volumes that a single test never meets.",
        },
        {
          question: "How does the developer playground help when an existing integration misbehaves?",
          answer: "Sending the failing request by hand separates a problem with the request from a problem in the code around it. If the request behaves as expected on its own, the fault is more likely in how the integration builds or handles it.",
        },
        {
          question: "What else does GetSibu offer developers besides the developer playground?",
          answer: ["As the ", { text: "answer to whether GetSibu has an API", page: 388 }, " sets out, GetSibu is positioned as an API-first DAM that provides REST API capabilities, webhooks and developer tooling."],
        },
      ],
      sources: [{ kind: "pdf", page: 261 }, { kind: "pdf", page: 388 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on building with the GetSibu API",
      variant: "compact",
      pages: [273, 275, 255, 276, 264, 388],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Build a Smarter Creative Workflow",
      conversionPage: 396,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 396 }],
    },
  ],
};

export default page;
