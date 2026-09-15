/**
 * 175 · Team Access Management — /permissions/team-access-management
 *
 * Angle (cluster: access-control): consistency — the same permissions for everyone in a group, and how that holds up
 * as people join, move and leave. Department Access (176) owns relevance per department; Individual Permissions (157)
 * owns exceptions; Enterprise Permissions (169) the enterprise structure. No grant mechanics or inheritance described.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Explanation of group-based access practice; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 175,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "split",
      eyebrow: "Permissions & Multi-Tenancy",
      lede: "How managing access by team keeps permissions consistent for everyone doing the same work, and how to handle the joiners, movers, leavers and temporary groups that make consistency hard to keep.",
      visual: { diagram: "folder-access", focus: "team" },
      actions: [
        { kind: "global", cta: "primary" },
      ],
      sources: [{ kind: "pdf", page: 175 }],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "One agreed set of access for everyone in a group",
      body: [
        "Team-based access allows organisations to establish consistent permissions across groups of users. The question of what a group of people needs is settled for the group as a whole, instead of being answered again for each person in it.",
        "Access granted one person at a time drifts in predictable ways. Two designers hired a year apart end up with different access because different people set it up. Someone who covered for a colleague keeps the extra folders long after the colleague returns. When the team needs a new folder, somebody has to remember every member. Each inconsistency is small, but together they make it impossible to say what the team can actually reach.",
        [
          "Team-based access is one of several ways to organise permissions. ",
          { text: "Permission hierarchies", page: 178 },
          " combine broad organisational roles with more detailed folder-level controls, and ",
          { text: "enterprise permissions", page: 169 },
          " apply structured access controls across departments, projects and folders.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Consistent permissions across a group", "Access agreed once per team", "Fewer personal exceptions", "Teams that reflect the work", "Temporary groups with an agreed end"],
      },
      highlight: {
        heading: "In practice",
        body: "A brand design team agrees one set of folders for its work, so when a colleague asks why one designer can reach the packaging archive, the answer is the team’s access rather than a forgotten personal request.",
        tags: ["Team leads", "Administrators", "Brand teams"],
      },
      glance: {
        heading: "Team access in brief",
        facts: [
          { label: "Area", value: "Permissions & Multi-Tenancy" },
          { label: "Keeps consistent", value: "Permissions across groups of users" },
          { label: "Larger unit", value: "Department Access", page: 176 },
          { label: "Exceptions", value: "Individual Permissions", page: 157 },
        ],
        actions: [{ kind: "route", path: "/permissions", label: "More in Permissions & Multi-Tenancy" }]
      },
      sources: [{ kind: "pdf", page: 175 }, { kind: "pdf", page: 178 }, { kind: "pdf", page: 169 }, { kind: "pdf", page: 176 }, { kind: "pdf", page: 157 }, EXPLAINS],
    },
    {
      kind: "timeline",
      id: "over-time",
      eyebrow: "Over time",
      heading: "A team’s access over its working life",
      items: [
        { label: "Team defined", body: "The group is named after the work it does, and the folders that work needs are agreed with the team lead." },
        { label: "Someone joins", body: "Before a newcomer is given the access the team works with, the team lead confirms that they really do the team’s work, so the group stays a meaningful unit." },
        { label: "Regular check", body: "At natural moments, such as a reorganisation or the end of a large project, the lead confirms that the team’s access still matches the work it now does." },
        { label: "Cover and secondments", body: "Treat a colleague covering for a few weeks as a temporary exception, and agree the date on which the extra access will be taken away again." },
        { label: "Someone leaves", body: "Their access is withdrawn promptly, and because the team’s permissions were agreed as a set, there are few personal grants left to track down." },
      ],
      sources: [{ kind: "pdf", page: 175 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "defining-teams",
      eyebrow: "Practical advice",
      heading: "Defining teams that keep access consistent",
      items: [
        {
          heading: "Group by the work, not the reporting line",
          summary: "For access purposes, a team is a set of people who need the same material.",
          icon: "users",
          body: [
            "Reporting lines and access needs often differ. Two people in one department may do very different work, while a designer and a copywriter from different departments may need identical access to a campaign. Grouping people by what they need to reach keeps the team definition useful.",
          ],
        },
        {
          heading: "Keep the number of teams manageable",
          summary: "Too many small teams bring back the inconsistency teams were meant to remove.",
          icon: "layers",
          body: [
            "If every campaign, shoot and request creates a new team, nobody can remember what each team is for. A small set of stable teams, with short-lived groups kept to a minimum, keeps the arrangement understandable to the people who manage it.",
          ],
        },
        {
          heading: "Give temporary teams an end",
          summary: "Groups formed for a launch or a campaign should not outlive the work.",
          icon: "calendar",
          body: [
            "When a team is formed for a particular piece of work, agree at the outset when it will be wound down. Access that suited the busiest weeks of a project rarely suits the months that follow it.",
          ],
        },
        {
          heading: "Name an owner for each team",
          summary: "Someone should be answerable for who belongs to a team and what it needs.",
          icon: "user",
          body: [
            [
              "This is usually the team lead, who knows when people arrive and leave. ",
              { text: "Manager permissions", page: 155 },
              " cover the lead’s own access to the specific folders or teams they are responsible for, while staying restricted from areas outside that responsibility.",
            ],
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 155 }, EXPLAINS],
    },
    {
      kind: "comparison",
      id: "person-versus-team",
      eyebrow: "The difference",
      heading: "Access granted person by person compared with team-based access",
      columns: ["Person by person", "Team-based access"],
      emphasis: 1,
      rows: [
        ["Two people in the same job", "Often end up with different access", "Work from consistent permissions"],
        ["A new folder for the group", "Opened to each member in turn", "Decided for the group as a whole"],
        ["A new starter", "Access pieced together from requests", "The team’s agreed access as the reference"],
        ["Explaining who can reach what", "Checking every individual", "Reading the team’s permissions"],
        ["Someone leaving", "A search through personal grants", "Fewer separate grants to undo"],
      ],
      sources: [{ kind: "pdf", page: 175 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about team access management",
      items: [
        {
          question: "What is the first step in moving from individual grants to team-based access?",
          answer: "List what people can reach today and group those who already share much the same access; those clusters are usually the teams. Differences inside a cluster then turn out to be either genuine exceptions or leftovers that can be removed.",
        },
        {
          question: "How is team access management different from department access?",
          answer: [
            "A team is any group that needs the same material, and it can be small or temporary. ",
            { text: "Department access", page: 176 },
            " concerns whole departments receiving access to only the creative libraries relevant to their work.",
          ],
        },
        {
          question: "How large should a team be for team-based access?",
          answer: "Large enough that shared access saves real effort, and small enough that everyone in it genuinely needs the same material. When members start needing noticeably different things, splitting the team is usually clearer than stretching its access to cover them all.",
        },
      ],
      sources: [{ kind: "pdf", page: 175 }, { kind: "pdf", page: 176 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on access for groups of people",
      variant: "compact",
      pages: [176, 157, 178, 169, 155],
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
