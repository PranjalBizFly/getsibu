/**
 * 275 · Developer Authentication — /developers/developer-authentication
 *
 * Angle (cluster api-security): the developer's side of authentication — supported credentials handled through
 * development, testing and live use, and an integration's identity kept apart from the people who build it.
 * 256 owns authentication for applications (authentication vs authorisation, roles, credential hygiene).
 * No credential or token formats.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of credential handling in software development in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 275,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "API & Developers",
      lede: "How developers can authenticate requests to GetSibu with supported credentials from first experiment to live use, and how a developer trying requests differs from software left running on its own.",
      visual: { diagram: "api-flow", focus: "auth" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 275 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Proof of identity carried through an integration’s whole life",
      body: [
        "Developers can authenticate API requests using supported authentication credentials. The word “supported” matters: the kinds of credential a platform accepts are set by that platform, not by habits brought from elsewhere.",
        "For a developer, authentication is less a single decision than a thread running through the life of an integration. Credentials are needed on the laptop where the first request is tried, in the pipeline that checks each change and on the server that runs the finished software. Each place has different people with access and different ways for a secret to escape.",
        [
          "The view from the application’s side, including why connected software works within security boundaries, belongs to ",
          { text: "API authentication", page: 256 },
          ". Organisations running several isolated environments add one more consideration, because ",
          { text: "API access can include tenant context", page: 276 },
          " to keep those environments properly separated.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Supported authentication credentials", "Different care at each stage", "Secrets kept out of code", "Unattended software treated differently", "Authentication settled early"],
      },
      highlight: {
        heading: "In practice",
        body: "A developer keeps credentials in a local configuration file that version control ignores, so a trial script can be shared without exposing anything.",
        tags: ["Developers", "IT teams", "Integrations"],
      },
      glance: {
        heading: "Developer authentication in brief",
        facts: [
          { label: "Area", value: "API & Developers" },
          { label: "Applies to", value: "API requests" },
          { label: "Uses", value: "Supported authentication credentials" },
          { label: "Application view", value: "API Authentication", page: 256 },
        ],
        actions: [{ kind: "route", path: "/developers", label: "More in Developers" }]
      },
      sources: [{ kind: "pdf", page: 275 }, { kind: "pdf", page: 256 }, { kind: "pdf", page: 276 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "stages",
      eyebrow: "Stage by stage",
      heading: "Credentials at each stage of building an integration",
      tabs: [
        {
          label: "Development",
          heading: "Trying things out without risking the real library",
          icon: "code",
          body: [
            "Early experiments are where shortcuts happen: a credential pasted into a script, a configuration file committed by accident, a trial run against live material because it was quicker.",
            "Decide at the outset how developers keep credentials on their own machines, and keep early experiments to material nobody depends on.",
          ],
          points: ["Nothing secret pasted into scripts", "Experiments kept away from live material"],
        },
        {
          label: "Testing and builds",
          heading: "Automated checks that need access too",
          icon: "refresh",
          body: [
            "Pipelines that test an integration automatically need credentials as well. Build output and test reports tend to be shared widely, so make sure a credential can never be printed into them.",
            "Treat the pipeline’s own configuration as sensitive, since anyone able to change it can often read what it holds.",
          ],
          points: ["Nothing secret in build output", "Pipeline configuration protected"],
        },
        {
          label: "Live use",
          heading: "Credentials for the finished integration",
          icon: "server",
          body: [
            "Once an integration is live, the credentials it runs on need the most careful home. Hold them where only the running software and a few named administrators can reach them, never inside the code.",
            "Record where they are held and which software depends on them, so that anyone responding to a problem knows where to look.",
          ],
          points: ["Held outside the code", "Location and dependants recorded"],
        },
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "comparison",
      id: "identity",
      eyebrow: "Who is watching",
      heading: "A developer trying requests compared with software left running",
      intro: "Authentication calls for different handling depending on whether anyone is there to see what happens.",
      columns: ["A developer trying requests", "Software left running"],
      rows: [
        ["When a request is refused", "The developer sees it at once", "Nobody knows unless the software says so"],
        ["What a mistake affects", "Usually the experiment in hand", "Work that colleagues depend on"],
        ["What is worth writing down", "Enough to repeat the attempt, never the secret", "When refusals happened and what was affected, never the secret"],
        ["How long the need lasts", "For the length of the experiment", "For as long as the integration runs"],
        ["Who answers for it", "The developer trying things out", "A named owner, even after the builder moves on"],
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A catalogue job moves from a laptop to a server",
      team: "A retail brand’s developer",
      situation: "A developer at a retail brand has built a nightly job that reads asset information for the online product catalogue. The prototype works, but it was set up quickly on the developer’s own laptop.",
      steps: [
        { heading: "The prototype proves the idea", body: ["Running locally, the job reads the ", { text: "asset information the API can expose", page: 264 }, " and hands it to the catalogue, showing the approach is worth taking further."] },
        { heading: "Authentication is confirmed", body: ["Before going live, the developer checks ", { text: "API documentation", page: 273 }, " to confirm how an unattended job should authenticate its requests with supported credentials."] },
        { heading: "The secret leaves the code", body: "The credential is removed from the script and placed in the organisation’s secret store, from which the server reads it when the job starts." },
        { heading: "The pipeline is checked", body: "Test reports are reviewed to make sure no credential appears in them before the pipeline is opened to the rest of the web team." },
        { heading: "A refusal is traced", body: "When the first live run is refused, the developer checks the server’s configuration, finds that the credential was never supplied there and corrects it." },
      ],
      outcome: "The catalogue job runs on a server with its credential held outside the code, and nothing set up during the experiment remains part of the live integration.",
      link: { page: 231, label: "GetSibu for Retail Brands" },
      sources: [{ kind: "pdf", page: 275 }, { kind: "pdf", page: 264 }, { kind: "pdf", page: 273 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about developer authentication",
      items: [
        {
          question: "What should a developer share when asking for help with a GetSibu authentication error?",
          answer: "The error, the time it happened and what the software was trying to do, but never the credential itself. A colleague who genuinely needs the secret should reach it through the organisation’s own secret store.",
        },
        {
          question: "Should authentication be settled before the rest of a GetSibu integration is built?",
          answer: "It is worth doing first. A request that cannot authenticate tells you nothing about the rest of the design, so confirming it early keeps every later test meaningful.",
        },
        {
          question: "How does developer authentication differ from API authentication?",
          answer: ["They look at one requirement from two sides. ", { text: "API authentication", page: 256 }, " explains why external applications work within security boundaries, while developer authentication concerns handling supported credentials as an integration is built and run."],
        },
      ],
      sources: [{ kind: "pdf", page: 256 }, { kind: "pdf", page: 275 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on authenticating with GetSibu",
      variant: "compact",
      pages: [256, 273, 277, 276, 261],
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
