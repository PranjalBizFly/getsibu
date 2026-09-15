/**
 * 89 · Creative Approval Management — /features/creative-approval-management
 *
 * Angle (cluster: approvals): managing the structured draft-to-approved process across the library — policy, authority,
 * proportionate scrutiny and oversight. Creative Approval Workflow (67) owns the loop for one asset; Asset Status
 * Management (102) owns the states; What Is Creative Approval? (370) owns the vendor-neutral explanation.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how organisations run approval consistently across teams; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 89,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Collaboration",
      lede: "How to run approval consistently across a whole creative library: the policy and authority behind it, scrutiny matched to the risk of each kind of work, and how to tell whether the process is working.",
      visual: { diagram: "timeline-review", focus: "status" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 89 }, { kind: "editorial", note: "Framing of approval run across teams and kinds of work." }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "One structured route to approval, applied across the library",
      body: [
        "Approval management in GetSibu creates a structured process for moving assets from draft to approved status. Where an approval workflow describes what happens to one asset, managing approval means running that route consistently across many assets, teams and kinds of work.",
        "Approval seldom fails because nobody approves anything. It fails through inconsistency: one team signs off every social post while another publishes without review, one approver checks the legal line while another assumes somebody else did, and nobody can say which rules apply to which work. The outcome is a library in which “approved” means different things depending on who happened to handle the asset.",
        [
          "Brand-critical work can add a firmer separation through ",
          { text: "brand asset approval", page: 71 },
          " gates, and ",
          { text: "What Is Creative Approval?", page: 370 },
          " explains the practice itself in vendor-neutral terms, including how review and approval differ.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Draft to approved, in a structured way", "Consistent across teams", "Scrutiny matched to risk", "Clear authority to approve", "A process that can be observed"],
      },
      highlight: {
        heading: "In practice",
        body: "A head of creative operations replaces several teams’ informal sign-off habits with one approval process and a written policy, which still lets routine social posts move faster than regulated product claims.",
        tags: ["Creative operations", "Brand", "Legal"],
      },
      glance: {
        heading: "Approval management in brief",
        facts: [
          { label: "Area", value: "Collaboration" },
          { label: "Moves assets", value: "From draft to approved status" },
          { label: "For one asset", value: "Creative Approval Workflow", page: 67 },
          { label: "Indicator", value: "Review Status", page: 76 },
        ],
        actions: [{ kind: "route", path: "/features/collaboration", label: "More in Collaboration" }]
      },
      sources: [{ kind: "pdf", page: 89 }, { kind: "pdf", page: 71 }, { kind: "pdf", page: 370 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 76 }, EXPLAINS],
    },
    {
      kind: "layers",
      id: "parts",
      eyebrow: "How it fits together",
      heading: "The parts of approval management, from policy to oversight",
      intro: "Each layer only works once the one above it has been settled.",
      layers: [
        { label: "Policy", body: "Which kinds of asset need approval, what an approval covers and which later uses deserve a fresh look." },
        { label: "Authority", body: "Who may approve. Governance defines who can upload, edit, approve, download and manage assets.", page: 114 },
        { label: "The workflow", body: "For each asset, review is requested, changes are made and the asset is marked as approved." },
        { label: "Statuses", body: "The states an asset passes through on the way from draft to approved, which tell everyone where each piece stands." },
        { label: "Access to approved work", body: "Approved-only views let users reach content that has completed the required review process.", page: 103 },
        { label: "Oversight", body: "Workflow metrics help teams understand how assets move through upload, review and approval.", page: 208 },
      ],
      sources: [{ kind: "pdf", page: 89 }, { kind: "pdf", page: 114 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 68 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 208 }, EXPLAINS],
    },
    {
      kind: "tabs",
      id: "scrutiny",
      eyebrow: "Proportionate approval",
      heading: "Matching the level of scrutiny to the work",
      tabs: [
        {
          label: "Routine",
          heading: "Everyday material built on settled patterns",
          icon: "refresh",
          body: [
            "Social posts made from approved templates, resized versions of an approved image and internal presentations rarely need the scrutiny of a launch film. A single decision-maker, often the team lead, keeps them moving.",
            "The risk to manage is drift: routine work that gradually departs from the patterns that made it routine. An occasional wider check of a sample keeps the light route honest.",
          ],
          points: ["One decision-maker", "Occasional sample checks"],
        },
        {
          label: "High visibility",
          heading: "Work that represents the organisation in public",
          icon: "megaphone",
          body: [
            "Campaign films, flagship imagery and anything that takes the brand somewhere new usually warrant a closer look: brand colleagues examining the detail in the discussion on the asset, and a senior decision-maker giving the approval. The policy should say who does each, so a senior approver is never assumed to have checked brand detail.",
          ],
          points: ["Brand detail examined in discussion", "A senior decision on approval"],
        },
        {
          label: "Regulated",
          heading: "Claims, rights and mandatory wording",
          icon: "shield",
          body: [
            "Material that makes product claims, relies on licensed content or must carry required wording needs a specialist’s review, recorded in the discussion on the asset, before anyone marks it as approved. Writing that review into the policy stops it being taken for granted.",
            ["Where permission to use content ends after a set period, ", { text: "expiry information", page: 104 }, " can help teams identify material that should no longer be used."],
          ],
          points: ["A specialist review before approval", "Time-limited content identified"],
        },
        {
          label: "Client work",
          heading: "Approval that belongs to someone outside the team",
          icon: "briefcase",
          body: [
            ["In agencies the final say usually rests with the client, and the agency records that decision on the asset. ", { text: "Client review", page: 72 }, " lets agencies maintain client-specific libraries and review workflows while keeping different clients isolated."],
          ],
          points: ["The client’s decision recorded by the agency", "Clients kept apart"],
        },
      ],
      sources: [{ kind: "pdf", page: 89 }, { kind: "pdf", page: 104 }, { kind: "pdf", page: 72 }, EXPLAINS],
    },
    {
      kind: "scenario",
      id: "scenario",
      eyebrow: "Practical use case",
      heading: "Several teams brought onto one approval process",
      team: "An insurance company’s marketing department",
      situation: "An insurance company’s marketing department has design, social, video and communications teams, each with its own way of signing off work. After a social post goes out with outdated product terms, leadership asks for one consistent approach.",
      steps: [
        { heading: "Current habits are mapped", body: "The creative operations lead asks each team how work is approved today and finds several different routes, some never written down." },
        { heading: "One policy is agreed", body: "The department decides which kinds of asset need approval, what counts as regulated content and who is authorised to approve each kind." },
        { heading: "The route moves into the library", body: ["Every team now requests review, makes changes and marks work as approved through the ", { text: "creative approval workflow", page: 67 }, ", instead of signing off in chat."] },
        { heading: "Cleared material is kept apart", body: "Social and communications colleagues take material from approved-only views rather than from team folders." },
        { heading: "The process is checked", body: "After the first few months, workflow metrics show how assets are moving through review and approval, and the lead adjusts the parts of the policy that seem to hold work up." },
      ],
      outcome: "Routine work still moves with a lighter check, but the whole department now shares one meaning of approved, and regulated material is checked by a specialist before it is approved.",
      link: { page: 223, label: "GetSibu for Enterprise Marketing" },
      sources: [{ kind: "pdf", page: 89 }, { kind: "pdf", page: 114 }, { kind: "pdf", page: 67 }, { kind: "pdf", page: 103 }, { kind: "pdf", page: 208 }, { kind: "pdf", page: 223 }, { kind: "editorial", note: "Illustrative scenario; the team is hypothetical and unnamed." }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about creative approval management",
      items: [
        {
          question: "How is creative approval management different from asset status management?",
          answer: [
            { text: "Asset status management", page: 102 },
            " helps teams distinguish drafts, approved content and other workflow states. Approval management is the structured process that moves assets between those states, together with the rules on what needs approval and who may give it.",
          ],
        },
        {
          question: "How should an organisation introduce creative approval management?",
          answer: "Pilot it with one team and one kind of work, smooth out the rough edges, then extend it. Starting everywhere at once tends to generate exceptions faster than a new policy can absorb them.",
        },
        {
          question: "What shows that creative approval management is working?",
          answer: [
            "Fewer assets used before they are approved, fewer arguments about which version was accepted and a steady flow from draft to approved. ",
            { text: "Approval history", page: 77 },
            " supports accountability and reduces confusion around the accepted version, which makes the arguments that do arise easier to settle.",
          ],
        },
        {
          question: "What should an approval policy say about approvers who are unavailable?",
          answer: "It should name a deputy for each kind of work, so approval does not wait on one person’s diary, and say which decisions cannot be delegated, such as a specialist legal check.",
        },
      ],
      sources: [{ kind: "pdf", page: 102 }, { kind: "pdf", page: 89 }, { kind: "pdf", page: 77 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on managing approvals",
      variant: "compact",
      pages: [67, 102, 77, 103, 71, 370],
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
