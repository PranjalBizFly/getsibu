/**
 * Where the content pipeline reads and writes, and its test-only overrides.
 *
 * Normal runs (npm run inventory, prebuild, verify:build) use content/generated and the real claims
 * register. scripts/test-publication.ts runs the same scripts into a temporary directory by setting
 * GETSIBU_GENERATED_DIR, optionally with:
 *
 *   GETSIBU_CLAIM_OVERRIDES  path to a JSON file { "<claim id>": "client-confirmed" | "site-stated" | … }
 *   GETSIBU_APP_TOPOLOGY     an AppTopology (content/architecture/route-decisions.ts)
 *
 * Overrides are refused when the output directory is content/generated, so they can never change
 * what the site builds or publish an unverified claim.
 */
import { existsSync, mkdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import type { ClaimStatus } from "../types/content.ts";
import { CLAIMS } from "../content/architecture/claims.ts";

const DEFAULT_DIR = "content/generated";
// An empty value means the default: never the working directory.
export const GENERATED_DIR = process.env.GETSIBU_GENERATED_DIR || DEFAULT_DIR;
const testRun = resolve(GENERATED_DIR) !== resolve(DEFAULT_DIR);

if (!testRun && (process.env.GETSIBU_CLAIM_OVERRIDES || process.env.GETSIBU_APP_TOPOLOGY)) {
  throw new Error("Claim and topology overrides are only allowed with GETSIBU_GENERATED_DIR outside content/generated");
}
if (testRun && !existsSync(GENERATED_DIR)) mkdirSync(GENERATED_DIR, { recursive: true });

/** A file in the generated directory. */
export const generated = (file: string) => join(GENERATED_DIR, file);

if (process.env.GETSIBU_CLAIM_OVERRIDES) {
  const overrides: Record<string, ClaimStatus> = JSON.parse(readFileSync(process.env.GETSIBU_CLAIM_OVERRIDES, "utf8"));
  for (const [id, status] of Object.entries(overrides)) {
    const claim = CLAIMS.find((c) => c.id === id);
    if (!claim) throw new Error(`GETSIBU_CLAIM_OVERRIDES: unknown claim "${id}"`);
    claim.status = status;
  }
}
