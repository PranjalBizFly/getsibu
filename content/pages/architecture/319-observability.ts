/**
 * 319 · Observability — /architecture/observability
 *
 * Angle (cluster: architecture-infrastructure): what observability means for the people who run a platform — the
 * signals it is built from, how operators move from symptom to cause, and how it differs from the analytics, audit
 * logs and processing status a library's own users work with. Makes no claim of customer-facing status pages,
 * dashboards or alerts, and names no tools or standards.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Vendor-neutral explanation of observability practice; states no GetSibu capability beyond the cited pages and nothing about customer-facing monitoring." } as const;

const page: PageContent = {
  page: 319,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Architecture & Performance",
      lede: "Understand what observability means for the people who run a platform such as GetSibu, the signals it rests on, and how it differs from the analytics and audit records that a library’s own users work with.",
      visual: { diagram: "architecture-stack" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 319 }, { kind: "pdf", page: 181 }, { kind: "pdf", page: 326 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Seeing how a running platform behaves from the inside",
      body: [
        "Observability allows platform operators to monitor application and infrastructure behaviour. Its audience is specific: the people responsible for running the platform, rather than the teams working in a creative library.",
        "The term comes from control theory, where a system counts as observable if its internal state can be worked out from what it emits. In software it means a platform produces enough information about its own behaviour for operators to answer questions about it, including questions nobody anticipated when it was built. Monitoring checks for conditions chosen in advance; observability supports investigating the ones nobody foresaw.",
        "Application behaviour is what the software does: requests answered, errors raised, jobs completed. Infrastructure behaviour is what it runs on: capacity in use, network conditions, the health of the machines and services beneath. Problems often cross that line, which is why the two are watched together.",
        [
          "The need grows with the shape of a system. When work passes through several layers, and a ",
          { text: "stateless API architecture", page: 316 },
          " can support horizontal scaling across many interchangeable servers, no single machine holds the whole story of a request.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["For platform operators, not library users", "Application and infrastructure behaviour", "Questions nobody anticipated", "Metrics, logs and traces", "Work followed across layers", "Separate from analytics and audit logs"],
      },
      highlight: {
        heading: "In practice",
        body: "In a layered platform, a search that feels slow could be delayed in the search layer, on the network or by a busy moment elsewhere. Observability is what lets operators tell those apart from evidence instead of guessing.",
        tags: ["Platform operators", "Diagnosis", "Layers"],
      },
      glance: {
        heading: "Observability in brief",
        facts: [
          { label: "Area", value: "Architecture & Performance" },
          { label: "Used by", value: "Platform operators" },
          { label: "Watches", value: "Application and infrastructure behaviour" },
          { label: "Spans", value: "GetSibu Architecture", page: 301 },
        ],
        actions: [{ kind: "route", path: "/architecture", label: "More in Architecture & Performance" }]
      },
      sources: [{ kind: "pdf", page: 319 }, { kind: "pdf", page: 316 }, { kind: "pdf", page: 301 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "signals",
      eyebrow: "The raw material",
      heading: "The signals that observability is built from",
      items: [
        {
          heading: "Metrics: measurements over time",
          summary: "Quantities sampled continuously reveal trends and sudden changes.",
          icon: "chart",
          body: [
            "Metrics record quantities at regular intervals: how many requests arrive, how long they take, how much capacity is in use, how many jobs are waiting. They are compact, so they can be kept for long periods and compared across weeks or seasons.",
            "Their weakness is detail. A metric shows that something changed, and only rarely why.",
          ],
        },
        {
          heading: "Logs: individual events in detail",
          summary: "Records of single events carry the specifics that metrics leave out.",
          icon: "document",
          body: [
            "Logs are written as things happen: a request received, an error raised, a job finished. Structured logs, with consistent named fields, can be searched and grouped rather than read line by line.",
            "Logs answer the questions metrics raise, but in a busy platform their sheer volume means they have to be filtered, sampled or summarised to stay useful.",
          ],
        },
        {
          heading: "Traces: one request’s journey",
          summary: "A trace links the steps a single piece of work takes through many services.",
          icon: "workflow",
          body: [
            "A trace follows one request end to end, recording each step as a span with its start, duration and outcome. When an upload or a search passes through several layers, the trace shows where the time went and where an error began.",
            "Identifiers passed along from service to service are what allow those steps to be stitched back into a single story.",
          ],
        },
        {
          heading: "Shared context between signals",
          summary: "Signals become far more useful when they point at one another.",
          icon: "network",
          body: [
            "A sudden change in a metric should lead to logs from the same moment, and those logs to traces of the requests affected. That only works if all three carry common context, such as a request identifier and the name of the service that produced them.",
            "Building that context in from the start is much easier than trying to add it in the middle of an incident.",
          ],
        },
        {
          heading: "Care over what gets recorded",
          summary: "Operational records should describe behaviour without collecting sensitive content.",
          icon: "shield",
          body: [
            "Telemetry can easily capture more than it needs: query text, file names, details about people. Sound practice in general is to record what is necessary to understand behaviour, keep sensitive values out, and limit who can see operational records and for how long.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 319 }, EXPLAINS],
    },
    {
      kind: "matrix",
      id: "not-to-be-confused",
      eyebrow: "Not to be confused",
      heading: "Observability compared with records a library’s users work with",
      intro: "Each of these describes activity, which is why they are easily mixed up.",
      columns: ["Who it serves", "What it describes", "What it is for"],
      rows: [
        { label: "Observability", cells: ["Platform operators", "Application and infrastructure behaviour", "Keeping the platform running well"] },
        { label: "Creative asset analytics", page: 181, cells: ["Organisations using the library", "Uploads, comments, storage, contributors, tags and other library activity", "Understanding how the library is used"] },
        { label: "Audit logs", page: 326, cells: ["Organisations accountable for their library", "Important actions, including permissions, comments and asset changes", "A historical record of what was done"] },
        { label: "Processing status", page: 145, cells: ["People adding and finding assets", "Uploaded successfully or fully indexed and searchable", "Knowing when an asset is ready"] },
      ],
      sources: [{ kind: "pdf", page: 319 }, { kind: "pdf", page: 181 }, { kind: "pdf", page: 326 }, { kind: "pdf", page: 145 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "symptom-to-cause",
      eyebrow: "During an investigation",
      heading: "How operators move from a symptom to its cause",
      intro: "A general pattern shared by platforms built from several layers.",
      steps: [
        { heading: "Notice the change", body: "A metric moves outside its usual range, such as responses slowing or a queue of waiting jobs growing.", icon: "gauge" },
        { heading: "Narrow it down", body: "Break the measurement down by layer, operation and time to find where the change is concentrated and when it began.", icon: "filter" },
        { heading: "Follow affected work", body: "Examine traces of requests from that window to see which step in their journey accounts for the extra time or the errors.", icon: "workflow" },
        { heading: "Read the detail", body: "Look at logs from the responsible service at that moment to find the specific condition, such as a dependency that stopped answering.", icon: "document" },
        { heading: "Confirm the fix", body: "After a change is made, watch the same signals to establish that behaviour has returned to normal rather than assuming it has.", icon: "check" },
        { heading: "Improve the view", body: "Note which signal would have revealed the problem sooner and add it, so the next investigation starts further ahead.", icon: "history" },
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about observability",
      items: [
        {
          question: "Is observability built into software or added afterwards?",
          answer: "Mostly built in. Application signals come from instrumentation, code in the software that records measurements, events and trace context as it runs, while infrastructure signals are usually gathered from the machines and services underneath.",
        },
        {
          question: "Why does observability matter to people who work in a library rather than run it?",
          answer: "Because problems that operators cannot see are slow to find. People working in a library feel observability indirectly, through issues that are diagnosed from evidence rather than by trial and error.",
        },
        {
          question: "What should an IT team ask a DAM vendor about observability?",
          answer: "How problems are noticed, how they are traced across layers, and what operational data is kept about activity in your library, who can see it and for how long. The answers show whether operations are run from evidence and how carefully operational records are handled.",
        },
        {
          question: "Does collecting observability data slow a platform down?",
          answer: "Gathering telemetry has a cost, which is why platforms generally sample traces, summarise high-volume logs and choose metrics with care. Well-designed instrumentation keeps that overhead modest compared with the time it saves when something goes wrong.",
        },
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on how the platform is run and built",
      variant: "compact",
      pages: [301, 316, 315, 181, 326, 145],
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
