/**
 * 260 · Custom Integrations — /integrations/custom-integrations
 *
 * Angle (cluster: integrations-overview): the gap — a tool the team relies on is not part of the supported
 * integration ecosystem. Covers choosing between requesting an integration, building on the API, acting on
 * webhook events or simply moving files in, and how to describe a request clearly. GetSibu Integrations (241)
 * owns the overall routes. Never says which tools are supported, never promises a turnaround, never names a tool.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of planning and requesting integrations in general; names no tool and states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 260,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Integrations",
      lede: "What to do when a tool your team depends on is not connected to GetSibu: when to request an integration, how to describe the need clearly, and what developers can build on the platform instead.",
      visual: { diagram: "connector-flow", label: "Your tools" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 260 }, { kind: "pdf", page: 279 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "A gap between the library and a tool the team relies on",
      body: [
        "Organisations using GetSibu can request integrations for tools that sit outside its supported integration ecosystem. A request is how an organisation raises a gap between the library and a part of its workflow that the library does not yet reach.",
        "Every creative organisation collects a few tools that others use differently or not at all: a production tracker adapted over the years, a regional publishing system, a specialist service for licences or translations. No catalogue of maintained connections can anticipate every one of them, so the useful question is what a team does when its workflow runs through one.",
        [
          "Requesting is one answer; building is another. The API allows organisations to create ",
          { text: "custom asset applications", page: 279 },
          " around the GetSibu asset infrastructure, which suits connections shaped around one organisation’s own way of working.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Tools outside the supported ecosystem", "Needs described as flows", "Building on the API instead", "An owner for every connection", "Today’s workaround kept running"],
      },
      glance: {
        heading: "Custom integrations in brief",
        facts: [
          { label: "Area", value: "Integrations" },
          { label: "Starts from", value: "A tool outside the supported ecosystem" },
          { label: "Alternative", value: "Custom Asset Applications", page: 279 },
          { label: "Part of", value: "GetSibu Integrations", page: 241 },
        ],
        actions: [{ kind: "route", path: "/integrations", label: "More in Integrations" }]
      },
      sources: [{ kind: "pdf", page: 260 }, { kind: "pdf", page: 279 }, { kind: "pdf", page: 241 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "routes",
      eyebrow: "Choosing a route",
      heading: "Request, build or use a route that already exists",
      intro: "The right answer depends on what the tool has to do with the library, not on the tool’s name.",
      items: [
        {
          heading: "Request an integration",
          summary: "Suits a tool at the centre of the workflow that the organisation would rather not connect by itself.",
          icon: "plug",
          body: [
            "Asking for an integration is the natural route when a tool matters to how work gets done and there is no appetite for building and maintaining a connection in-house. It suits organisations that would rather describe what they need than design a connection and look after it themselves.",
          ],
        },
        {
          heading: "Build on the API",
          summary: "Suits connections specific to one organisation’s own systems.",
          icon: "code",
          body: [
            ["When the flow is particular to your organisation, developers can use the ", { text: "Developer API", page: 255 }, " to integrate asset upload, search, collaboration and other supported workflows into that software."],
            "Building gives control over what the connection does, within what the API supports, and in return the organisation takes on its upkeep.",
          ],
        },
        {
          heading: "Let events prompt the tool",
          summary: "Suits a tool that only needs to act when something happens in the library.",
          icon: "webhook",
          body: [
            ["Some tools need a prompt rather than a full connection. With ", { text: "webhook automation", page: 257 }, ", webhook events can trigger downstream workflows when assets, comments, approvals or other supported events occur."],
            "A small service in between can translate each event into whatever the receiving tool understands, which is often less work than a two-way integration.",
          ],
        },
        {
          heading: "Move the tool’s files in",
          summary: "When a tool only produces files, getting them into the library may be all that is required.",
          icon: "upload",
          body: [
            ["For a steady flow of output, the ", { text: "asset upload API", page: 262 }, " allows external applications to send files into the GetSibu environment."],
            ["For occasional exports, ", { text: "drag and drop upload", page: 127 }, " adds individual assets or small batches without configuring an integration at all."],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 260 }, { kind: "pdf", page: 255 }, { kind: "pdf", page: 257 }, { kind: "pdf", page: 262 }, { kind: "pdf", page: 127 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "describe",
      eyebrow: "Step by step",
      heading: "Describing an integration request clearly",
      intro: "A clear request describes a need; the design of the connection can follow from it.",
      steps: [
        { heading: "Explain the tool’s role", body: "Say what the tool is for in your workflow and who works in it, rather than giving only its product name.", icon: "briefcase" },
        { heading: "Describe what moves", body: "State what needs to travel, whether files, descriptive information, review status or a combination, and in which direction it goes.", icon: "network" },
        { heading: "Say what sets it off", body: "Explain which activity should start the flow, such as new work being saved or a decision being made, and how soon the other side needs to know.", icon: "zap" },
        { heading: "Set out the access involved", body: "List the parts of the library the connection would touch, and who should be able to see whatever it brings in.", icon: "lock" },
        { heading: "Record the workaround", body: "Describe how the work gets done without the connection, so the effort it would save is visible to everyone reading the request.", icon: "history" },
        { heading: "Name a contact", body: "Put forward one person who understands the workflow and can answer questions about it as the request is discussed.", icon: "user" },
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "A licensing service that sits outside the library",
      team: "An advertising agency",
      situation: "An advertising agency tracks image and music licences in a specialist licensing service. Producers check terms there, then look for the matching assets in GetSibu, and the two sometimes disagree.",
      steps: [
        {
          heading: "The gap is written down",
          body: "The operations lead describes the flow the agency needs: when licence terms change, producers working in the library should not have to check a second system to find out.",
        },
        {
          heading: "A request goes in",
          body: "The agency sends that description to GetSibu as a request for an integration with the licensing service, naming the operations lead as its contact.",
        },
        {
          heading: "Expiry lives with the assets",
          body: ["While the request is open, the team keeps ", { text: "asset expiry information", page: 104 }, " on licensed material, which helps producers identify content that should no longer be used after a specified period."],
        },
        {
          heading: "Developers cover the urgent part",
          body: ["The agency’s developers use the ", { text: "asset metadata API", page: 264 }, " to build an internal report that lists each licence beside the asset information the API exposes."],
        },
        {
          heading: "Producers work from approved material",
          body: ["Producers look for usable material in an ", { text: "approved-only view", page: 103 }, ", which gives access to content that has completed the agency’s required review, licence check included."],
        },
      ],
      outcome: "Producers can see expiry in the library and licence details in one report, and the request for a full connection sets out exactly what that connection should do.",
      link: { page: 219, label: "GetSibu for Advertising Agencies" },
      sources: [{ kind: "pdf", page: 260 }, { kind: "pdf", page: 104 }, { kind: "pdf", page: 264 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 219 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about custom integrations",
      items: [
        {
          question: "How can we tell whether a tool is already covered before requesting a custom integration?",
          answer: ["Ask about the tool when you describe the need, rather than assuming either way. ", { text: "Can GetSibu Integrate With Existing Tools?", page: 390 }, " is a starting point for that question."],
        },
        {
          question: "How soon will a requested custom integration be available?",
          answer: "Do not assume a date. Ask about timing when you raise the request, and plan the workflow so that it keeps running whether or not the connection arrives soon.",
        },
        {
          question: "What if a tool only needs to find assets in the library, not exchange files with it?",
          answer: ["That may be a smaller job than a full integration. Applications can ", { text: "integrate asset search", page: 263 }, " into custom interfaces and workflows, and ", { text: "API documentation", page: 273 }, " provides the information developers need to build against the platform."],
        },
      ],
      sources: [{ kind: "pdf", page: 263 }, { kind: "pdf", page: 273 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on connecting GetSibu to your tools",
      variant: "compact",
      pages: [241, 255, 279, 257, 273, 390],
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
