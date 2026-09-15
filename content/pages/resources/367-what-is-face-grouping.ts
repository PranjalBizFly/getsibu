/**
 * 367 · What Is Face Grouping? — /resources/what-is-face-grouping (HELD: face-grouping)
 *
 * Angle (clusters: face-grouping; ai-explainers): vendor-neutral explainer of detection, grouping and recognition,
 * with privacy, consent and biometric sensitivity treated responsibly and without legal advice. "How GetSibu applies
 * it" states the capability only in PDF 37 and 367 wording, with nothing on availability, accuracy or data handling.
 * page 37 is held and not linked.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Vendor-neutral explanation of face grouping and its privacy considerations; not legal advice, and states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 367,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "centered",
      eyebrow: "Resources",
      lede: "What face grouping is, how it differs from detecting and recognising people, why it calls for more care than most AI techniques, and how GetSibu describes the capability.",
      actions: [
        { kind: "global", cta: "primary" },
        { kind: "route", path: "/resources", label: "More in Resources" },
      ],
      sources: [{ kind: "pdf", page: 367 }, { kind: "pdf", page: 37 }],
    },
    {
      kind: "definition",
      id: "definition",
      eyebrow: "Definition",
      term: "Face grouping",
      answer: "Face grouping identifies recurring people across media collections and groups related assets together. It answers the question “which of these images show the same person?” without needing to know who that person is.",
      detail: "A system first detects faces in images or video frames, then turns each face into a numerical description of its features. Faces with sufficiently similar descriptions are placed in the same group. In grouping alone, names come from people who add them; comparing faces against a set of known, named individuals is recognition rather than grouping.",
      sources: [{ kind: "pdf", page: 367 }, EXPLAINS],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Finding the same person across a library, and why it needs care",
      body: [
        "Creative libraries are full of people: talent in campaigns, staff in corporate photography, speakers at events, customers in case studies. Finding every asset that features one of them has usually depended on someone typing a name into a caption or keyword field, and doing so consistently.",
        "Grouping by appearance removes that dependence, and that is precisely what makes it sensitive: it works from measurements of a person’s face rather than from anything that person chose to write down or share. The usefulness of a group arrives together with responsibility for how it is created, who sees it and how long it is kept.",
        [
          "Face grouping is one of several ways machine intelligence can make a library easier to understand, as ",
          { text: "What Is AI Asset Management?", page: 362 },
          " explains. Where ",
          { text: "AI tagging", page: 364 },
          " suggests general labels based on what a system detects in an asset, grouping concerns specific individuals, which is why it deserves decisions of its own.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Detection, grouping and recognition", "Face descriptions compared for similarity", "Groups without names until people add them", "Biometric data and heightened protection", "Consent, access and removal"],
      },
      highlight: {
        heading: "In practice",
        body: "A communications team preparing an annual report needs every usable photograph of its chief executive. A group of matching images is a starting point that someone who knows the people then checks, not a finished answer.",
        tags: ["Communications", "Photography", "Review"],
      },
      glance: {
        heading: "Face grouping in brief",
        facts: [
          { label: "Area", value: "Resources" },
          { label: "Works on", value: "Media collections that feature people" },
          { label: "Sensitivity", value: "Biometric data in many jurisdictions" },
          { label: "Related technique", value: "What Is AI Tagging?", page: 364 },
        ],
      },
      sources: [{ kind: "pdf", page: 362 }, { kind: "pdf", page: 364 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "key-terms",
      eyebrow: "Key terms",
      heading: "Terms that are easily confused",
      items: [
        {
          heading: "Face detection",
          summary: "Finding that a face is present, and where it is.",
          icon: "scan",
          body: [
            "Detection locates faces in an image or frame without saying anything about whose they are. Cameras and phone galleries use it to focus or crop, and it is the first step in every grouping or recognition system.",
          ],
        },
        {
          heading: "Face grouping",
          summary: "Gathering images of the same unnamed person.",
          icon: "collection",
          body: [
            "Grouping, sometimes called clustering, compares detected faces with one another and brings similar ones together. The system does not need to know who anyone is: a group is simply an unnamed person until a human attaches a name, or decides the group should not exist.",
          ],
        },
        {
          heading: "Face recognition",
          summary: "Matching a face against people who are already known.",
          icon: "user",
          body: [
            "Recognition compares a face with a reference set of named individuals, either to confirm a claimed identity or to establish who someone is. Because it attaches identities automatically, it carries more risk than grouping alone.",
          ],
        },
        {
          heading: "Face description",
          summary: "The numerical representation a system actually compares.",
          icon: "database",
          body: [
            "Systems convert each face into a list of numbers, often called an embedding or a template, that captures distinguishing features. Many legal frameworks treat these descriptions as personal data in their own right, even though nobody could look at one and see a face.",
          ],
        },
        {
          heading: "Similarity threshold",
          summary: "How alike two faces must be to share a group.",
          icon: "gauge",
          body: [
            "A strict threshold splits one person into several groups when lighting, age or angle vary; a loose one merges different people who resemble each other. No setting removes both errors, so groups are best treated as suggestions to be confirmed.",
          ],
        },
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "tabs",
      id: "responsible-use",
      eyebrow: "Privacy and consent",
      heading: "Using face grouping responsibly",
      tabs: [
        {
          label: "Consent",
          heading: "What people actually agreed to",
          icon: "check",
          body: [
            "A model release or talent contract usually covers where and how an image may be used. It may say nothing about analysing a person’s face to group their pictures, so check existing agreements before assuming they stretch that far.",
            "Where consent is relied on, it is generally expected to be informed and freely given. That is difficult to achieve with employees, who may not feel able to refuse a request from their employer.",
          ],
          points: ["Releases may not cover analysis", "Consent that is genuinely free"],
        },
        {
          label: "Sensitivity",
          heading: "Why biometric data is treated differently",
          icon: "shield",
          body: [
            "Unlike a password, a face cannot be changed if data about it is misused. Data protection laws in many places therefore put biometric data used for identification in a special or sensitive category, and some jurisdictions have laws written specifically about biometric identifiers, with requirements such as notice, consent and limits on retention.",
            "The detail differs considerably from one legal system to the next.",
          ],
          points: ["A characteristic that cannot be reset", "Rules that vary by jurisdiction"],
        },
        {
          label: "Access",
          heading: "Who is able to see the groups",
          icon: "lock",
          body: [
            [
              "A collection of every image of one person reveals more than the same images spread across folders, because it shows where they have been and with whom. Limiting such groups to the people who need them follows the same logic as ",
              { text: "creative asset permissions", page: 151 },
              ", which let organisations control who can reach different areas of a library.",
            ],
          ],
          points: ["Groups reveal patterns", "Visibility kept to those who need it"],
        },
        {
          label: "Removal",
          heading: "When someone asks to be left out",
          icon: "trash",
          body: [
            "People leave organisations, withdraw consent or ask not to be identified. Before adopting face grouping in any system, find out what can be done when such a request arrives, such as whether a person’s face descriptions can be deleted or kept out of future grouping, and decide how your organisation would respond, including what happens to their images.",
            "Having a clear answer is part of deciding whether to use face grouping in the first place.",
          ],
          points: ["Requests planned for in advance", "An answer before adoption"],
        },
        {
          label: "Fairness",
          heading: "Accuracy that differs between people",
          icon: "users",
          body: [
            "Face analysis can perform unevenly across ages, skin tones and image conditions such as poor lighting or low resolution. When the people most often misgrouped belong to one group, the burden of errors falls unfairly on them.",
            "Keep a person involved in any decision that matters, and review groups before relying on them for anything public.",
          ],
          points: ["Uneven performance across people", "Human review before reliance"],
        },
      ],
      sources: [{ kind: "pdf", page: 151 }, EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "in-getsibu",
      eyebrow: "In GetSibu",
      heading: "How GetSibu applies face grouping",
      items: [
        {
          heading: "People clustered across the library",
          body: "In GetSibu, face grouping clusters people across a creative library.",
          icon: "users",
        },
        {
          heading: "Founders and talent",
          body: "Teams can use this capability to locate multiple assets featuring the same founder or the same talent.",
          icon: "camera",
        },
        {
          heading: "Clients and other recognised people",
          body: "The same applies to locating assets that feature a particular client or another recognised person.",
          icon: "search",
        },
      ],
      sources: [{ kind: "pdf", page: 37 }, EXPLAINS],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about face grouping",
      items: [
        {
          question: "Is face grouping lawful to use in a creative library?",
          answer: "That depends on where your organisation operates, where the people pictured are, the purpose and the legal basis for processing. Some jurisdictions set specific rules for biometric data, so take advice from your legal or privacy team before using it on a library.",
        },
        {
          question: "Should face grouping be used on photographs of children?",
          answer: "Only with particular caution, if at all. Children’s personal data generally receives stronger protection, rules on who may give consent for a child vary with age and jurisdiction, and the case for grouping their images needs to clearly outweigh the risk.",
        },
        {
          question: "What should happen when face grouping puts two different people in one group?",
          answer: "Correct it before anyone relies on the group, and check whether assets were already shared or labelled on the strength of it. Mistakes like this are why groups are best reviewed by someone who knows the people involved.",
        },
        {
          question: "How is face grouping different from finding people through metadata?",
          answer: [
            "Metadata depends on someone having recorded who appears, while grouping works from appearance itself. The two sit side by side: ",
            { text: "asset metadata", page: 374 },
            " is information describing a file, including creator, format, dimensions, keywords and other contextual details.",
          ],
        },
      ],
      sources: [{ kind: "pdf", page: 374 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on AI and people in the asset library",
      variant: "compact",
      pages: [362, 364, 151, 374],
      sources: [{ kind: "editorial", note: "Links to pages cited on this page." }],
    },
    {
      kind: "cta",
      id: "cta",
      heading: "Make Every Asset Discoverable",
      conversionPage: 394,
      surface: "inverse",
      actions: [{ kind: "global", cta: "primary" }],
      sources: [{ kind: "pdf", page: 394 }],
    },
  ],
};

export default page;
