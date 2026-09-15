/**
 * 172 · Secure Asset Sharing — /permissions/secure-asset-sharing
 *
 * Angle (cluster: secure-collaboration): sharing controlled through permissions rather than relying only on unrestricted
 * links — why open links lose control, what changes when recipients need access, and a routine for sharing quickly.
 * No public links, link expiry, passwords or external guest access are described. Secure Creative Collaboration (180)
 * owns collaboration as a whole; Creative Security Controls (174) the wider set of controls.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of how file sharing loses or keeps control; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 172,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Permissions & Multi-Tenancy",
      lede: "Why sharing creative work through permissions keeps more control than relying on links alone, what changes when the people receiving work need access to it, and how to share quickly without widening access more than necessary.",
      visual: { diagram: "folder-access", focus: "individual" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 172 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Sharing that follows who is allowed to see the work",
      body: [
        "In GetSibu, asset sharing can be controlled through permissions rather than relying only on unrestricted links. The question of who can open a piece of work can then be answered by access to the library rather than by who happens to hold a link.",
        "An unrestricted link is convenient because it asks nothing of the person receiving it, and that is also its weakness. Once sent, it can be forwarded, pasted into a group chat or saved in a document that travels far beyond the original message. The sender cannot tell who has opened it, and there is little to undo except hoping the link is forgotten. For finished material meant for the public that may be acceptable; for unreleased campaigns, client work or licensed assets it rarely is.",
        [
          "Because sharing follows access, the way folders are arranged decides how easily work can be shared. ",
          { text: "Folder-level permissions", page: 152 },
          " allow access to be controlled at a more detailed level than organisation-wide access, so one area can be opened to a new audience without opening its neighbours.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Sharing controlled through permissions", "Less reliance on unrestricted links", "Recipients who hold access", "Folders arranged around their audience", "Access narrowed again when work ends"],
      },
      highlight: {
        heading: "In practice",
        body: "A brand manager wants a regional team to use a new set of campaign photography. Rather than sending a link that could travel anywhere, the regional team is given access to the folder where that photography lives.",
        tags: ["Brand", "Regional teams", "Marketing"],
      },
      glance: {
        heading: "Secure sharing in brief",
        facts: [
          { label: "Area", value: "Permissions & Multi-Tenancy" },
          { label: "Controlled by", value: "Permissions" },
          { label: "Avoids", value: "Relying only on unrestricted links" },
          { label: "Part of", value: "Secure Creative Collaboration", page: 180 },
        ],
        actions: [{ kind: "route", path: "/permissions", label: "More in Permissions & Multi-Tenancy" }]
      },
      sources: [{ kind: "pdf", page: 172 }, { kind: "pdf", page: 152 }, { kind: "pdf", page: 180 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "link-versus-permissions",
      eyebrow: "The difference",
      heading: "An unrestricted link compared with sharing through permissions",
      columns: ["Unrestricted link", "Sharing through permissions"],
      emphasis: 1,
      rows: [
        ["Who can open the work", "Whoever the link reaches", "People given access to that area"],
        ["Ending someone’s access", "Difficult once the link has spread", "A change to their permissions"],
        ["Checking who can see it", "No reliable answer once forwarded", "Answered by the area’s permissions"],
        ["Later revisions", "Whichever copy was sent at the time", "Versions kept within the asset record"],
        ["Best suited to", "Finished material meant to travel", "Unreleased, client and licensed work"],
      ],
      sources: [{ kind: "pdf", page: 172 }, { kind: "pdf", page: 93 }, EXPLAINS],
    },
    {
      kind: "process",
      id: "sharing-routine",
      eyebrow: "Step by step",
      heading: "Sharing an asset with someone new through permissions",
      intro: "A routine that keeps sharing quick without widening access beyond what the work needs.",
      steps: [
        { heading: "Name who needs it", body: "Identify the person or group that needs the asset, and what for, before thinking about how to get it to them.", icon: "users" },
        { heading: "Check where it lives", body: "Look at the folder the asset sits in; if that folder also holds material the recipient should not see, consider placing the asset somewhere with the right audience.", icon: "folder" },
        { heading: "Give access at group level", body: "When a whole team needs the asset, team-based access establishes the same permissions across that group instead of one person at a time.", icon: "lock", page: 175 },
        { heading: "Point them to it", body: "Tell the recipient where the asset sits in the library; where a conversation is needed, mentions make it easier to bring them into the asset’s own discussion.", icon: "mention" },
        { heading: "Narrow access afterwards", body: "When their part of the work is done, bring their access back to what their role requires rather than leaving it open indefinitely.", icon: "refresh" },
      ],
      sources: [{ kind: "pdf", page: 175 }, { kind: "pdf", page: 86 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "open-links",
      eyebrow: "Considerations",
      heading: "Why teams still reach for open links, and what to do instead",
      items: [
        {
          heading: "Deadlines",
          summary: "Sending a link feels faster than arranging access when time is short.",
          icon: "clock",
          body: [
            "The time saved is real but small, and it is repaid with interest if the link travels. Agreeing in advance who can grant access to each area keeps the permissions route quick at the moments it matters most.",
          ],
        },
        {
          heading: "Partners outside the organisation",
          summary: "External partners are a common reason for sending a link, and the recipients a forwarded link most easily escapes from.",
          icon: "briefcase",
          body: [
            "Agencies, printers and other suppliers often need particular files for a short period, and what happens to a file once it reaches their systems is outside the organisation’s control. Decide deliberately which finished files are suitable to send at all, keep unreleased work where permissions apply, and agree with each partner how long received files will be kept.",
          ],
        },
        {
          heading: "Material meant for a wide audience",
          summary: "Some assets are designed to be widely used, and deciding that is still a decision.",
          icon: "approval",
          body: [
            [
              "Approved logos or press photography may be intended for many people. Even then, one known place beats scattered copies, and ",
              { text: "approved-only views", page: 103 },
              " let users reach content that has completed the required review process.",
            ],
          ],
        },
        {
          heading: "Large media files",
          summary: "People sometimes send links simply because a file is too big to attach.",
          icon: "video",
          body: [
            [
              "Inside the library, ",
              { text: "streaming previews", page: 147 },
              " help people inspect large media files without waiting for complete downloads, which removes one reason to export a copy and send it on.",
            ],
          ],
        },
        {
          heading: "Habits from shared drives",
          summary: "Teams used to drive links will keep sending them unless the alternative is explained.",
          icon: "refresh",
          body: [
            "Show colleagues how to point someone to an asset inside the library, and explain why it matters. A short conversation when the library is introduced prevents a parallel system of links from growing up beside it.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 103 }, { kind: "pdf", page: 147 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about secure asset sharing",
      items: [
        {
          question: "Does secure asset sharing mean links are never used?",
          answer: "The point is not to rely only on unrestricted links. Permissions carry the control, and teams decide which material, if any, is suitable for wider distribution.",
        },
        {
          question: "What should a team do when an open link to sensitive work has already been sent?",
          answer: "Assume the work may have been seen by anyone the link could have reached, tell the people responsible for that material, and agree how similar work will be shared through permissions next time.",
        },
        {
          question: "How does secure asset sharing relate to secure creative collaboration?",
          answer: [
            "Sharing is one part of working together. ",
            { text: "Secure creative collaboration", page: 180 },
            " covers the wider combination of collaboration and permissions that lets teams work on sensitive assets without giving up control.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 172 }, { kind: "pdf", page: 180 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on sharing creative work safely",
      variant: "compact",
      pages: [180, 175, 152, 103, 147, 174],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Give Your Creative Team One Source of Truth",
      conversionPage: 395,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 395 }],
    },
  ],
};

export default page;
