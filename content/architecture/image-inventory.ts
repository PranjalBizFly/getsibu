/**
 * Image Architecture & Inventory Rules (all 400 GetSibu topics).
 *
 * Core Directives:
 * 1. ONE IMAGE = ONE USE ONLY across the entire website (zero reuse).
 * 2. Every single topic (1-400) has a dedicated, topic-tailored hero visual.
 * 3. All image assets are optimized WebP.
 * 4. Alt text describes the actual visual concept naturally and in context (no keywords, no "hero image").
 * 5. Strictly NO fabricated claims, metrics, percentages, customer names, certifications or fake UI text.
 * 6. Visual style is modern, professional, editorial B2B digital product aesthetic (Sky9 presentation reference).
 */
import type { CategoryId } from "../../types/content.ts";

export interface GeneratedImageSpec {
  path: string;
  filename: string;
  pageUrl: string;
  topicNumber: number;
  topic: string;
  section: string;
  purpose: string;
  prompt: string;
  alt: string;
  dimensions: { width: number; height: number };
  format: "webp";
  uniquenessStatus: "unique";
  usedCount: 1;
}

/** Converts a page title or concept to a clean URL-safe filename slug. */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[—–]/g, "-")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/** Visual medium and aesthetic guidelines by category, centered on realistic human subjects. */
export const CATEGORY_IMAGE_STYLE: Record<CategoryId, {
  humanSubject: string;
  environment: string;
  elements: string[];
  lighting: string;
  palette: string;
}> = {
  home: {
    humanSubject: "Diverse creative director and media operations team collaborating over video and image assets",
    environment: "Premium modern creative studio workstation and library overview",
    elements: ["creative professionals at collaborative desk", "high-resolution digital media previews", "organized video and photography assets"],
    lighting: "Soft ambient daylight with warm subtle studio key lighting",
    palette: "Deep indigo (#2B296E), restrained olive accents (#97AC3B), crisp whites and neutral darks",
  },
  platform: {
    humanSubject: "Video editor and creative technologist operating professional post-production editing suites",
    environment: "High-end post-production suite and creative tech environment",
    elements: ["editor with headphones focusing on timeline", "multi-format media workflows", "collaborative creative terminals"],
    lighting: "Clean balanced directional lighting, architectural aesthetic",
    palette: "Navy ground, indigo surfaces, focused olive highlights",
  },
  "search-discovery": {
    humanSubject: "Digital asset archivist and media librarian organizing and filtering high-resolution video and photo libraries",
    environment: "Digital archive workstation and discovery environment",
    elements: ["media specialist at ultra-wide display", "visual asset grid", "metadata categorization tools"],
    lighting: "Focused task lighting, high clarity, crisp contrast",
    palette: "Deep navy, neutral slate, precise olive focus points",
  },
  ai: {
    humanSubject: "Creative director and machine learning media specialist inspecting visual asset classification and tags",
    environment: "Modern media analysis workspace and visual computing lab",
    elements: ["creative professional reviewing tagged video footage", "subtle feature highlighting on visual subjects", "tag approval workflow"],
    lighting: "Editorial cinematic lighting, clear depth of field, NO sci-fi neon or glowing brains",
    palette: "Editorial studio tones, subtle indigo and olive cues",
  },
  collaboration: {
    humanSubject: "Creative team members and remote colleagues conducting an interactive video review and feedback session",
    environment: "Collaborative video review and editorial post-production suite",
    elements: ["colleagues discussing video cut", "timecode annotations", "creative feedback notes on footage"],
    lighting: "Warm contemporary creative studio ambience",
    palette: "Warm charcoal, deep indigo, restrained olive accents",
  },
  "asset-management": {
    humanSubject: "Creative operations manager and brand designer organizing multi-version production assets",
    environment: "Master asset archival and version governance workspace",
    elements: ["brand specialist reviewing asset version stacks", "media lifecycle stages", "structured collection organization"],
    lighting: "Clean diffuse daylight, uncluttered architectural composition",
    palette: "Muted indigo, stone grey, olive verification markers",
  },
  "storage-ingestion": {
    humanSubject: "Digital imaging technician (DIT) and broadcast studio engineer managing multi-camera media ingestion",
    environment: "Enterprise media ingestion hub and multi-source connector terminal",
    elements: ["technician connecting professional storage drives", "secure asset transfer flow", "multi-format camera ingestion"],
    lighting: "Crisp industrial studio lighting, high precision",
    palette: "Technical navy, cool graphite, subtle olive indicator",
  },
  "permissions-multi-tenancy": {
    humanSubject: "Enterprise IT administrator and creative studio operations lead configuring client workspace access",
    environment: "Client workspace boundaries and governance control room",
    elements: ["administrator reviewing access hierarchy", "isolated client workspace views", "secure tenant partitions"],
    lighting: "Structured architectural light, calm and authoritative",
    palette: "Deep indigo, secure slate, subtle olive boundaries",
  },
  analytics: {
    humanSubject: "Marketing analytics lead and creative operations director analyzing library utilization and asset engagement",
    environment: "Creative operations intelligence and library utilization desk",
    elements: ["analyst examining storage utilization patterns", "format distribution visuals", "team upload activity metrics"],
    lighting: "Modern bright studio ambience",
    palette: "Indigo base, clean neutral white ground, olive trend curves",
  },
  "use-cases": {
    humanSubject: "Authentic creative industry professionals (agency art directors, broadcast journalists, e-commerce studio photographers)",
    environment: "Authentic professional industry setting: post house, agency, e-commerce studio, brand archive, or newsroom",
    elements: ["photographers and editors working with genuine production equipment", "commercial photo backdrops", "color grading monitors"],
    lighting: "Realistic documentary editorial lighting",
    palette: "Naturalistic, true-to-life tones with brand harmony",
  },
  integrations: {
    humanSubject: "Creative tools specialist and integration developer configuring workflow bridges between creative suites and storage",
    environment: "Creative workflow bridge and ecosystem connection hub",
    elements: ["specialist syncing cloud storage and creative software plugins", "workflow test setup", "connected creative workstation"],
    lighting: "Clean modern tech office lighting",
    palette: "Balanced slate and indigo with crisp olive connections",
  },
  developers: {
    humanSubject: "Software engineer and API developer writing and testing media processing webhooks at a modern workstation",
    environment: "Modern software engineering desk for creative tools",
    elements: ["developer at dual-monitor desk with code terminal", "API webhook payload testing", "clean architecture reference"],
    lighting: "Low-glare focused desk lighting",
    palette: "Dark theme terminal palette, indigo, olive syntax accents",
  },
  migration: {
    humanSubject: "Digital media migration lead and asset manager mapping legacy server directories into structured taxonomy",
    environment: "Structured library transition and metadata mapping station",
    elements: ["team validating batch metadata transformation", "legacy folder transition plan", "unified asset library"],
    lighting: "Clarity-focused neutral daylight",
    palette: "Transitioning stone grey into deep indigo and olive",
  },
  "architecture-performance": {
    humanSubject: "Cloud infrastructure architect and performance engineer reviewing high-speed media delivery pipelines",
    environment: "High-throughput cloud media infrastructure visualization",
    elements: ["cloud architect monitoring edge preview caching", "high-speed streaming distribution overview"],
    lighting: "Crisp structural technical lighting",
    palette: "Precision navy, cobalt, subtle olive nodes",
  },
  "security-compliance": {
    humanSubject: "Compliance officer and enterprise security lead conducting an asset security and audit log inspection",
    environment: "Enterprise digital trust and compliance inspection center",
    elements: ["security lead inspecting encrypted asset repositories", "tamper-evident audit logs", "access verification checkpoints"],
    lighting: "Calm, authoritative, clean security environment",
    palette: "Deep protective navy, crisp white, restrained olive trust accents",
  },
  "pricing-plans": {
    humanSubject: "Creative agency partners and studio founders discussing workspace tiers and seat allocations",
    environment: "Bright open collaborative conference room",
    elements: ["agency leaders in discussion", "structured tier documentation", "collaborative planning tablets"],
    lighting: "Bright welcoming daylight",
    palette: "Clean paper white, indigo headers, olive action points",
  },
  "business-value": {
    humanSubject: "Executive creative director and business stakeholder presenting creative ROI and team productivity workflows",
    environment: "Executive creative operations planning suite",
    elements: ["executive presenting media workflow efficiency", "cross-team productivity strategy", "modern glass boardroom"],
    lighting: "Warm executive architectural lighting",
    palette: "Sophisticated navy, platinum, olive growth cues",
  },
  resources: {
    humanSubject: "Creative team members engaged in a collaborative hands-on learning and onboarding workshop",
    environment: "Creative asset management knowledge base and workshop space",
    elements: ["mentors and designers reviewing media taxonomy guides", "metadata schema reference cards", "interactive learning session"],
    lighting: "Clear editorial study lighting",
    palette: "Paper white, charcoal type, indigo and olive highlights",
  },
  faq: {
    humanSubject: "Professional creative specialist working with quiet focus on a laptop in an inviting contemporary office",
    environment: "Modern creative studio lounge and individual focus booth",
    elements: ["individual working productively on laptop", "natural posture and authentic expression", "clean minimal workspace"],
    lighting: "Clean diffuse softbox lighting",
    palette: "Minimalist neutral palette with indigo and olive accents",
  },
  conversion: {
    humanSubject: "Excited creative team onboarding into their new central asset library with engaged body language",
    environment: "Vibrant creative agency onboarding space",
    elements: ["team members actively organizing new projects", "laptop and desktop media ingestion", "ready creative assets"],
    lighting: "Vibrant inviting daylight, forward-looking aesthetic",
    palette: "Fresh clean whites, energetic olive accents, solid indigo ground",
  },
};

/** Constructs a topic-specific, compliance-checked prompt for Gemini image generation featuring realistic human subjects. */
export function buildGeminiPrompt(topic: string, category: CategoryId, purpose: string, sectionKind: string): string {
  const style = CATEGORY_IMAGE_STYLE[category] || CATEGORY_IMAGE_STYLE.platform;
  return [
    `Professional B2B editorial photograph with realistic human subjects for "${topic}".`,
    `Human subjects: ${style.humanSubject}.`,
    `Scene purpose: ${purpose}.`,
    `Context: ${style.environment}.`,
    `Visual elements: ${style.elements.join(", ")}.`,
    `Lighting and mood: ${style.lighting}.`,
    `Color aesthetic: Harmonious with modern brand palette (${style.palette}).`,
    `Composition: Clean, balanced, photographic depth of field, natural candid posture, high-end editorial product website aesthetic.`,
    `STRICT NEGATIVE CONSTRAINTS: Realistic human subjects only, NO illustrations, NO 3D renders, NO cartoonish robots, NO AI cyborgs, NO readable text, NO fake company names, NO fake logos, NO fake metrics or percentages, NO glowing sci-fi neon, NO cheesy corporate handshakes, NO generic stock photo smiles, NO watermarks, NO cluttered compositions.`,
  ].join(" ");
}

/** Generates naturally written, accessible, descriptive alt text for a topic visual. */
export function buildAltText(topic: string, category: CategoryId, purpose: string, sectionKind: string): string {
  const prefix = sectionKind === "hero" ? "Visual representation of" : "Supporting visual showing";
  return `${prefix} ${topic.toLowerCase()}: ${purpose}, designed for creative and marketing teams managing digital media libraries.`;
}
