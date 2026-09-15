/**
 * 365 · What Is Scene Detection? — /resources/what-is-scene-detection (HELD: scene-detection)
 *
 * Angle (clusters: scene-detection; ai-explainers): vendor-neutral explainer of how software finds shot boundaries,
 * groups shots into scenes and where it struggles. "How GetSibu applies it" states the capability only in PDF 33 and
 * 365 wording (plus PDF 55), with nothing on availability, accuracy or data handling. page 33 is held
 * and not linked.
 */
import type { PageContent } from "../../../types/content.ts";

const EXPLAINS = { kind: "editorial", note: "Vendor-neutral explanation of scene detection; states no GetSibu capability beyond the cited pages." } as const;

const page: PageContent = {
  page: 365,
  lastReviewed: "2026-09-15",
  sections: [
    {
      kind: "hero",
      id: "hero",
      layout: "centered",
      eyebrow: "Resources",
      lede: "What scene detection is, how software finds the boundaries between shots and groups them into scenes, where the technique struggles, and how GetSibu describes applying it to video.",
      actions: [
        { kind: "global", cta: "primary" },
        { kind: "route", path: "/resources", label: "More in Resources" },
      ],
      sources: [{ kind: "pdf", page: 365 }, { kind: "pdf", page: 33 }],
    },
    {
      kind: "definition",
      id: "definition",
      eyebrow: "Definition",
      term: "Scene detection",
      answer: "Scene detection identifies distinct sections or scenes within video content so users can navigate large files more efficiently. It turns one continuous file into parts that can be recognised and jumped to.",
      detail: "Most approaches start by finding shot boundaries, the points where one continuous camera take gives way to the next, by comparing frames for sudden or gradual change. Shots can then be grouped into scenes, stretches of video that belong together by place, time or action, and each section is marked with its position in the file and often a representative frame.",
      sources: [{ kind: "pdf", page: 365 }, EXPLAINS],
    },
    {
      kind: "overview",
      id: "overview",
      heading: "Why long video is hard to find your way around",
      body: [
        "Video is the hardest material in a creative library to navigate. A photograph can be judged at a glance and a document can be skimmed, but the only way to know what happens deep into a long interview is to go there and watch.",
        "Scene detection gives that timeline a structure. Instead of one long bar to scrub along, a file gains a sequence of sections, each with a starting point and usually a thumbnail, which people can scan much as a photographer scans a contact sheet. Finding a moment becomes a matter of choosing rather than watching.",
        [
          "It sits among several techniques that make media easier to work with. ",
          { text: "AI tagging", page: 364 },
          " suggests labels based on what a system detects in an asset, and ",
          { text: "OCR in DAM", page: 366 },
          " converts visible text into searchable information. Scene detection deals with time instead: it divides a file rather than describing it.",
        ],
      ],
      keyPoints: {
        heading: "Key concepts",
        items: ["Shot boundaries and scenes", "Hard cuts and gradual transitions", "Representative frames", "Sections with positions in the file", "Navigation instead of scrubbing"],
      },
      highlight: {
        heading: "In practice",
        body: "An editor looking for the reveal in a long product film runs an eye along a row of section thumbnails, spots the moment the packaging opens and starts playback from there.",
        tags: ["Editors", "Video", "Review"],
      },
      glance: {
        heading: "Scene detection in brief",
        facts: [
          { label: "Area", value: "Resources" },
          { label: "Works on", value: "Video" },
          { label: "Produces", value: "Sections marked by their position in the file" },
          { label: "Wider topic", value: "What Is AI Asset Management?", page: 362 },
        ],
      },
      sources: [{ kind: "pdf", page: 364 }, { kind: "pdf", page: 366 }, { kind: "pdf", page: 362 }, EXPLAINS],
    },
    {
      kind: "accordion",
      id: "key-terms",
      eyebrow: "Key terms",
      heading: "The vocabulary of finding structure in video",
      items: [
        {
          heading: "Shot",
          summary: "A continuous run of frames from a single camera take.",
          icon: "camera",
          body: [
            "A shot begins when the camera starts recording, or when an edit brings in new footage, and ends at the next cut. Raw rushes may be one long shot; a finished edit can contain hundreds of them.",
          ],
        },
        {
          heading: "Scene",
          summary: "A group of shots that belong together by place, time or action.",
          icon: "film",
          body: [
            "In film language a scene is a unit of story. A conversation in a kitchen may cut between several camera angles and still be one scene, so detecting scenes in this sense depends on meaning as well as on visual change.",
            "Everyday tools often use the two words loosely, and some features called scene detection actually find shots.",
          ],
        },
        {
          heading: "Hard cut",
          summary: "An instant change from one shot to the next.",
          icon: "scan",
          body: [
            "Hard cuts are the easiest boundaries to find. The frames on either side usually differ sharply in colour, brightness and composition, which a comparison between neighbouring frames picks up readily.",
          ],
        },
        {
          heading: "Gradual transition",
          summary: "Dissolves, fades and wipes that blend one shot into another.",
          icon: "layers",
          body: [
            "A transition spreads the change across many frames, so no single pair looks very different. Finding one means examining change over a window of frames rather than frame by frame, and transitions remain a frequent cause of missed or misplaced boundaries.",
          ],
        },
        {
          heading: "Representative frame",
          summary: "A still chosen to stand for a whole section.",
          icon: "image",
          body: [
            "Each detected section is usually shown by one frame, often called a keyframe. Choosing it well matters, because the first frame of a section is frequently black or blurred by movement, so systems may take one from the middle or the frame most typical of the section.",
          ],
        },
        {
          heading: "False boundary",
          summary: "Change inside a shot that looks like a cut.",
          icon: "flag",
          body: [
            "Camera flashes, fast pans, sudden lighting changes and objects passing close to the lens can all suggest a boundary where there is none. Detectors trade sensitivity against these false alarms, and the right trade differs between a music video and a slow interview.",
          ],
        },
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "process",
      id: "how-it-works",
      eyebrow: "Step by step",
      heading: "How scene detection works in general",
      intro: "A simplified sequence shared by many approaches; individual systems differ in the detail.",
      steps: [
        { heading: "Read the frames", body: "The video is decoded frame by frame, often at reduced resolution or sampled at intervals to keep the work manageable.", icon: "video" },
        { heading: "Measure change", body: "Each frame is compared with its neighbours using signals such as colour distribution, edges or features learned by a model.", icon: "scan" },
        { heading: "Mark the boundaries", body: "Where change passes a threshold, or follows the pattern of a transition, a boundary is recorded with its position in the file.", icon: "flag" },
        { heading: "Group the shots", body: "Neighbouring shots that look alike or share a setting and subject can be joined into longer sections.", icon: "layers" },
        { heading: "Pick a frame for each", body: "A representative still is chosen for every section, so people can recognise it without pressing play.", icon: "image" },
      ],
      sources: [EXPLAINS],
    },
    {
      kind: "capabilities",
      id: "in-getsibu",
      eyebrow: "In GetSibu",
      heading: "How GetSibu applies scene detection",
      items: [
        {
          heading: "Video broken into structured scenes",
          body: "In GetSibu, scene detection automatically breaks video into structured scenes.",
          icon: "film",
        },
        {
          heading: "Important sections within reach",
          body: "Users can move between important sections of a video instead of repeatedly scrubbing through the entire file.",
          icon: "compass",
        },
        {
          heading: "One less repetitive task",
          body: "Scene identification is one of the repetitive tasks that GetSibu’s AI automation reduces, alongside tagging and OCR extraction.",
          icon: "sparkles",
          page: 55,
        },
      ],
      sources: [{ kind: "pdf", page: 33 }, { kind: "pdf", page: 55 }],
    },
    {
      kind: "faq",
      id: "faq",
      heading: "Questions about scene detection",
      items: [
        {
          question: "Is scene detection the same as object detection?",
          answer: [
            "No. Scene detection divides a video in time, finding where sections begin and end, while object detection describes what appears. ",
            { text: "AI object detection", page: 34 },
            " in GetSibu can identify objects appearing in supported media and associate them with confidence information.",
          ],
        },
        {
          question: "Does scene detection work equally well on every kind of video?",
          answer: "In general, it does best on edited footage with clear cuts. Long continuous takes, animation, screen recordings and footage full of flashes or rapid movement give it less to go on or more to misread, so results for those deserve a closer look.",
        },
        {
          question: "Can scene detection help with reviewing a cut?",
          answer: [
            "It can make a long cut quicker to move around before anyone writes feedback. Leaving the feedback is a separate step, and ",
            { text: "video timeline comments", page: 64 },
            " can be attached to specific points on the timeline.",
          ],
        },
        {
          question: "Does scene detection replace logging footage by hand?",
          answer: "It takes over the most mechanical part, marking where shots change, but not the editorial part. Notes on performance, quality, usable takes and story still come from people who have watched the material.",
        },
      ],
      sources: [{ kind: "pdf", page: 34 }, { kind: "pdf", page: 64 }, EXPLAINS],
    },
    {
      kind: "related",
      id: "related",
      heading: "More on AI and video in the asset library",
      variant: "compact",
      pages: [362, 364, 366, 34, 64],
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
