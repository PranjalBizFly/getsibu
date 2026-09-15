/**
 * 274 · OpenAPI Specification — /developers/openapi-specification (HELD draft; own claim: openapi)
 *
 * Angle (cluster: api-platform): an OpenAPI specification for understanding endpoints and generating
 * compatible tooling — what such a description contains, what developers do with it and how to use it
 * well. Keeps the PDF hedge ("positioned around"); no specification version, endpoints or payloads.
 * page 259 owns client libraries; API Documentation (273) owns the reference as a whole.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of the OpenAPI standard and API specifications in general; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 274,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "API & Developers",
      lede: "What a machine-readable API description contains, what developers can build and check with one, and how to use it well when evaluating or integrating with GetSibu.",
      visual: { diagram: "architecture-stack", focus: "api" },
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 274 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A description of the API that software can read",
      body: [
        "GetSibu’s API is positioned around an OpenAPI specification so developers can understand endpoints and generate compatible tooling. The specification is a description of the API in a structured format that people and programs can both read.",
        "OpenAPI is an open standard for describing HTTP APIs. A specification written to it sets out the operations an API offers, the inputs each one accepts, the shape of the data sent and returned, and how requests are authenticated. It describes the API from the outside, without being part of the software that runs it, which is why a whole ecosystem of tools can work from the same document.",
        [
          "The API it describes is the one behind ",
          { text: "GetSibu’s API-first design", page: 254 },
          ", which allows organisations to build custom experiences around the underlying asset system. A precise, shared description of that API helps those experiences to be planned and checked before anyone builds them.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["A machine-readable API description", "Operations, inputs and data shapes", "Understanding endpoints", "Generating compatible tooling", "One description, many uses"],
      },
      highlight: {
        heading: "In practice",
        body: "An architect evaluating an asset platform opens its specification in a viewer she already uses and has a structured map of the API before reading any explanatory guides.",
        tags: ["Developers", "Architects", "Technical evaluators"],
      },
      glance: {
        heading: "The OpenAPI specification in brief",
        facts: [
          { label: "Area", value: "API & Developers" },
          { label: "Positioning", value: "An API positioned around an OpenAPI specification" },
          { label: "Purpose", value: "Understanding endpoints and generating tooling" },
          { label: "Design", value: "API-First DAM", page: 254 },
        ],
      },
      sources: [{ kind: "pdf", page: 274 }, { kind: "pdf", page: 254 }, EXPLAINS],
    },
    {
      kind: "layers",
      id: "contents",
      eyebrow: "Inside a specification",
      heading: "What an OpenAPI specification describes",
      intro: "The parts found in most specifications written to the standard.",
      layers: [
        { label: "General information", body: "The API’s title and version, along with the server addresses requests are sent to, which tell tools where to direct their calls." },
        { label: "Paths and operations", body: "Each endpoint and the operations available on it, such as retrieving or creating a resource, with a summary of what each operation does." },
        { label: "Parameters", body: "The inputs an operation accepts, whether in the address, the query string or the headers, and which of them are required." },
        { label: "Request and response bodies", body: "The structure of the data that travels in each direction, defined by schemas that name every field, its type and its constraints." },
        { label: "Security schemes", body: "How requests prove who is making them, described as a scheme; an actual credential has no place in a specification." },
        { label: "Reusable components", body: "Shared definitions that many operations refer to, so a structure used throughout the API is described once and kept consistent." },
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "uses",
      eyebrow: "What it is used for",
      heading: "What developers can do with an API specification",
      intro: "Tools differ in quality and in which versions of the standard they support; these are the common uses.",
      items: [
        { heading: "Browse the API", icon: "book", body: "Rendering the specification in a viewer gives a structured, searchable map of what the API offers, one operation at a time.", points: ["Every operation in one place", "Inputs and outputs side by side"] },
        { heading: "Generate client code", icon: "code", body: "Code generators can produce client libraries and data types from the description, so several languages share a single source.", points: ["Types that match the API", "Less hand-written request code"] },
        { heading: "Mock the API", icon: "server", body: "A mock server built from the specification returns example responses, letting interface and integration work begin before connecting to the real platform.", points: ["Work starts in parallel", "No live data touched"] },
        { heading: "Validate traffic", icon: "check", body: "Requests and responses can be checked against the schemas during testing, catching a malformed call before it reaches real use.", points: ["Mistakes caught in testing", "Clear messages about what failed"] },
        { heading: "Compare versions", icon: "history", body: "Comparing two versions of a specification highlights operations and fields that were added, changed or removed.", points: ["Changes visible before upgrading", "Breaking changes easier to spot"] },
        { heading: "Test the contract", icon: "approval", body: "Automated tests can confirm that an integration still matches the behaviour the specification describes, run each time the integration changes.", points: ["Drift noticed early", "Confidence when code changes"] },
      ],
      sources: [{ kind: "pdf", page: 274 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "using-well",
      eyebrow: "Considerations",
      heading: "Using an API specification well",
      items: [
        {
          heading: "A description is not a permission",
          summary: "A specification lists what an API offers; the access behind each request decides what actually succeeds.",
          icon: "key",
          body: [
            "An operation appearing in a specification does not mean every caller may use it. Whether a request succeeds depends on who is making it and what that identity is allowed to reach.",
            ["Developers ", { text: "authenticate API requests", page: 275 }, " using supported authentication credentials. In any specification written to the standard, security schemes explain how authentication works without holding a secret of their own."],
          ],
        },
        {
          heading: "Examples illustrate shape, not content",
          summary: "Example values show what a field looks like, not what a real library will return.",
          icon: "document",
          body: [
            "Specifications often include sample values so that a response is easier to picture. Real responses carry the names, descriptions and structure of an actual library, which can be far messier. Test with realistic material before treating an example as representative.",
          ],
        },
        {
          heading: "Prose still carries the intent",
          summary: "A schema says what an operation accepts; it rarely says when or why to use it.",
          icon: "book",
          body: [
            "The order in which operations should be called, the workflows they belong to and the edge cases worth planning for seldom fit inside a formal description.",
            ["Read the specification alongside ", { text: "API documentation", page: 273 }, ", where developers find what they need to build integrations against the platform."],
          ],
        },
        {
          heading: "Generated tooling still needs review",
          summary: "Generators follow a description faithfully, including its gaps.",
          icon: "eye",
          body: [
            "Code produced from a specification is only as clear as the descriptions it was built from. Review generated code before relying on it, particularly its error handling, and treat anything it leaves unexplained as a question to answer rather than an assumption to make.",
          ],
        },
        {
          heading: "Coverage checked against real tasks",
          summary: "A specification is a quick way to check whether an API supports the work you have in mind.",
          icon: "search",
          body: [
            ["Evaluators can list the tasks an integration must perform and look for the operations each one needs. For GetSibu, developers can use the API to ", { text: "integrate asset upload, search, collaboration and other supported workflows", page: 255 }, " into custom applications, which makes those workflows a sensible place to begin the check."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 275 }, { kind: "pdf", page: 273 }, { kind: "pdf", page: 255 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about the OpenAPI specification",
      items: [
        {
          question: "Which version of OpenAPI does GetSibu’s specification follow?",
          answer: "Check the specification itself, which declares the version of the standard it is written to. Tools vary in the versions they support, so confirm that your generators and viewers handle that version before building on them.",
        },
        {
          question: "Do developers need to know OpenAPI to use the GetSibu API?",
          answer: ["No. Developers can work with the ", { text: "REST API", page: 253 }, " without ever opening the specification. Familiarity with the format pays off later, when generating tooling, validating requests or comparing versions."],
        },
        {
          question: "Can an OpenAPI specification support a security review of an integration?",
          answer: ["It helps. Listing the operations an integration will call makes it easier to judge whether the access requested matches the task, and ", { text: "API security", page: 277 }, " forms an important part of protecting the automated access that integrations rely on."],
        },
        {
          question: "Does an API specification show how tenant separation is enforced?",
          answer: ["A specification describes requests, not the guarantees behind them. For keeping environments apart, GetSibu API access can carry ", { text: "tenant context", page: 276 }, ", and it is worth confirming how that context is supplied before building for several clients."],
        },
      ],
      sources: [{ kind: "pdf", page: 274 }, { kind: "pdf", page: 253 }, { kind: "pdf", page: 277 }, { kind: "pdf", page: 276 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on understanding the GetSibu API",
      variant: "compact",
      pages: [273, 253, 254, 255, 275, 277],
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
