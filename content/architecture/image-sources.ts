/**
 * Review of the source photos behind public/images/topics (2026-09-15).
 *
 * scripts/generate-human-images.ts builds every topic image by cropping and tinting one of a small pool of
 * existing photographs, so what a reader sees is the source photo, not the recorded prompt. Each source was
 * viewed and recorded here: a short caption scene, alt text describing what the photo shows (never repeating a
 * brand, figure or on-screen claim), the issues a reader can see, and a verdict (the worst issue).
 *
 * Only "usable" sources meet the image rules in image-inventory.ts (no company names, logos, figures, fake UI
 * or unrelated work). Keyed by the source file name without its timestamp and extension.
 */
export type Verdict = "usable" | "product-ui" | "off-topic" | "invented-figures" | "third-party-brand";
export const SOURCE_REVIEW: Record<string, { scene: string; alt: string; issues: string[]; verdict: Verdict }> = {
  team_collaboration: {
    scene: "colleagues talking through work in an open-plan office",
    alt: "Three colleagues talking around a shared table in a bright open-plan office, one holding a tablet, beside a wall screen of image thumbnails",
    issues: ["incidental laptop maker logo"],
    verdict: "usable",
  },
  remote_work_focused: {
    scene: "a person working at a laptop by a window",
    alt: "A person wearing headphones typing on a laptop at a wooden desk by a window, with plants and a notebook nearby",
    issues: [],
    verdict: "usable",
  },
  company_about_team: {
    scene: "a team working around printed diagrams",
    alt: "A group of colleagues around a table covered with printed diagrams, working on laptops in an open-plan office",
    issues: ["another company's name on the wall sign, poster and mug (BizzFly)"],
    verdict: "third-party-brand",
  },
  ai_media_hero: {
    scene: "a person reviewing video frames and photographs on two monitors",
    alt: "A person using a pen tablet in front of two monitors showing video frames, photographs and a dashboard, in a dim studio",
    issues: ["dashboard reads as a product interface"],
    verdict: "product-ui",
  },
  home_ai_search: {
    scene: "a person working at a curved monitor in a busy office",
    alt: "A person working at a curved monitor showing web search results and code, in a busy open-plan office",
    issues: ["another company's name on the wall sign (Technovate Pune)", "a web search engine's results page on screen"],
    verdict: "third-party-brand",
  },
  search_discovery_hero: {
    scene: "a person browsing a grid of image and video thumbnails",
    alt: "A person at a desk browsing a grid of image and video thumbnails with filters on a large monitor",
    issues: ["screen titled as an asset search product reads as a GetSibu interface"],
    verdict: "product-ui",
  },
  indian_search_s1: {
    scene: "a person looking at charts in an open-plan office",
    alt: "A person at a desk in an open-plan office looking at a monitor of charts and tables",
    issues: ["search-engine visibility dashboard: unrelated marketing work"],
    verdict: "off-topic",
  },
  service_web_apps: {
    scene: "a developer working at two monitors",
    alt: "A developer at two monitors showing code and an online shop page, in an open-plan office",
    issues: ["another organisation's name on wall signs (Innovation Hub Pune)", "e-commerce web development: unrelated", "incidental laptop maker logos"],
    verdict: "third-party-brand",
  },
  test_human_image: {
    scene: "a video editor colour-grading footage",
    alt: "A video editor colour-grading footage at two monitors with a control surface and pen tablet, in a studio with speakers",
    issues: [],
    verdict: "usable",
  },
  video_timeline_hero: {
    scene: "a video editor working on a timeline of clips",
    alt: "A video editor working on a timeline of clips at a monitor in a darkened edit suite with speakers",
    issues: [],
    verdict: "usable",
  },
  indian_analytics_s2: {
    scene: "colleagues discussing a presentation in a meeting room",
    alt: "Three colleagues in a glass-walled meeting room discussing a wall screen with a funnel diagram and a table",
    issues: ["marketing funnel and metric-definition slide: unrelated", "a real building's name visible outside (UB City)"],
    verdict: "third-party-brand",
  },
  practice_analytics_s2: {
    scene: "colleagues discussing a presentation at a meeting table",
    alt: "Four colleagues at a meeting table, one pointing at a screen with a funnel diagram and definitions",
    issues: ["a web analytics product named on screen (Google Analytics)", "marketing metrics: unrelated", "incidental laptop maker logos"],
    verdict: "third-party-brand",
  },
  indian_analytics_s1: {
    scene: "a person working at two monitors in an open-plan office",
    alt: "A person working at two monitors showing code and a line chart, in an open-plan office with city views",
    issues: ["another organisation's name on the mug (Pune Tech Hub)", "incidental monitor maker logo"],
    verdict: "third-party-brand",
  },
  practice_analytics_s3: {
    scene: "a person taking notes beside a report on a monitor",
    alt: "A person taking notes at a boardroom table beside a monitor and tablet showing a business report",
    issues: ["invented revenue and growth figures on screen ($14.2M, +18% YoY)"],
    verdict: "invented-figures",
  },
  discovery_process_audit: {
    scene: "a person explaining a whiteboard diagram to colleagues",
    alt: "A person explaining a hand-drawn system diagram on a whiteboard to two colleagues with laptops",
    issues: ["another company's name on the glass wall (Technovate Solutions)", "whiteboard names specific infrastructure and a detected bottleneck"],
    verdict: "third-party-brand",
  },
  home_why_bizzfly: {
    scene: "a diagram of layered cloud infrastructure",
    alt: "An illustrated diagram of layered infrastructure: clients, load balancing, services, messaging, databases and caching",
    issues: ["a container platform's logo and named technologies read as GetSibu's architecture, which is not confirmed", "made for another project"],
    verdict: "third-party-brand",
  },
  tech_testing_quality: {
    scene: "a monitor of software test results on an office desk",
    alt: "A curved monitor showing software test results on a desk, in an office with developers working behind",
    issues: ["another organisation's name on the mug (Pune Tech)", "named testing tools: unrelated software QA work"],
    verdict: "third-party-brand",
  },
  storage_ingest_hero: {
    scene: "a technician loading a drive in a server room",
    alt: "A technician inserting a drive into a storage unit beside a monitor showing transfer progress, in a server room",
    issues: ["transfer screen is generic; check it does not read as a GetSibu interface"],
    verdict: "usable",
  },
  indian_web_dev_s1: {
    scene: "a person taking notes beside website wireframes",
    alt: "A person taking notes beside a monitor showing website wireframes, in an open-plan office",
    issues: ["conversion-funnel wireframes: unrelated web design work"],
    verdict: "off-topic",
  },
  practice_web_dev_s2: {
    scene: "a person reading a report on a monitor",
    alt: "A person at a desk looking at a report on a monitor, in an office with bookshelves",
    issues: ["invented performance scores and timings on screen", "website performance audit: unrelated"],
    verdict: "invented-figures",
  },
  home_tech_engineers: {
    scene: "engineers discussing dashboards at a shared desk",
    alt: "Three engineers discussing monitoring dashboards and a service diagram at a shared desk",
    issues: ["incidental monitor maker logos"],
    verdict: "usable",
  },
  indian_web_dev_s2: {
    scene: "a person at a desk beside a report on a monitor",
    alt: "A person at a desk beside a monitor showing a website report, with a city view behind",
    issues: ["invented audit scores on screen", "another organisation's name on the mug (TechPune)"],
    verdict: "invented-figures",
  },
  practice_web_dev_s1: {
    scene: "a desk with a website design on a monitor",
    alt: "An empty desk with a monitor showing a business website design and a notebook of hand-drawn sketches",
    issues: ["fictional company name on screen (Synapse B2B)", "sample figures on screen", "unrelated web design work"],
    verdict: "third-party-brand",
  },
  indian_web_dev_s3: {
    scene: "two colleagues reviewing a decision matrix on a monitor",
    alt: "Two colleagues at a desk reviewing a decision matrix on a monitor",
    issues: ["a cloud provider's logo on screen", "other organisations' names on the mug and building (HYD Tech, T-Hub)"],
    verdict: "third-party-brand",
  },
  case_studies_audit: {
    scene: "a person typing beside an audit report on a monitor",
    alt: "A person typing at a desk beside a monitor showing a report with bar charts, in an open-plan office",
    issues: ["on-screen 'verified client outcome' benchmarks imply customer results", "department sign and mug with other names (Pune Tech)"],
    verdict: "invented-figures",
  },
  tech_accessibility_audit: {
    scene: "a person in headphones working at two monitors",
    alt: "A person in headphones working at two monitors showing checklists and colour swatches, in an open-plan office",
    issues: ["accessibility compliance results on screen: unrelated", "slogan shirt and mug"],
    verdict: "off-topic",
  },
  prof_services_advisory: {
    scene: "colleagues presenting a roadmap in a meeting room",
    alt: "Six colleagues in a meeting room, one presenting a roadmap on a wall screen",
    issues: ["another company's name on the wall sign (TechAdvisory India)", "consulting strategy roadmap: unrelated"],
    verdict: "third-party-brand",
  },
  indian_analytics_s3: {
    scene: "a person taking notes beside a dashboard in a boardroom",
    alt: "A person taking notes at a boardroom table beside a monitor showing a dashboard, with a waterfront skyline behind",
    issues: ["invented percentages and revenue charts on screen"],
    verdict: "invented-figures",
  },
  analytics_hero: {
    scene: "a person looking at charts on a curved monitor",
    alt: "A person at a curved monitor showing three charts, in a bright office with colleagues behind",
    issues: ["storage, format-mix and upload charts read as a GetSibu analytics interface"],
    verdict: "product-ui",
  },
};
