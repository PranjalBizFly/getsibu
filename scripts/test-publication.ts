/**
 * Tests the republish workflow without publishing anything.
 *
 *   npm run test:publication
 *
 * GetSibu confirms a claim → claims.ts is updated → the page becomes eligible for publication. This
 * runs the real pipeline (build-inventory, compose-pages, validate-inventory) into temporary
 * directories with simulated claim statuses (scripts/pipeline-env.ts) and checks that publication,
 * redirects, the sitemap flag, search, navigation, metadata and composition all follow the claims
 * register — and that the real content/generated files are untouched.
 */
import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import type { Inventory, RouteMatrixRow } from "../types/content.ts";

const failures: string[] = [];
let checks = 0;
const expect = (condition: boolean, message: string) => {
  checks++;
  if (!condition) failures.push(message);
};

const fingerprint = () =>
  createHash("sha256")
    .update(readdirSync("content/generated").sort().map((f) => readFileSync(join("content/generated", f), "utf8").replace(/"generatedAt": "[^"]+"/, "")).join("|"))
    .digest("hex");
const before = fingerprint();

type Scenario = { name: string; claims?: Record<string, string>; topology?: string; compose: boolean };
function run(scenario: Scenario) {
  const dir = mkdtempSync(join(tmpdir(), `getsibu-${scenario.name}-`));
  const env: NodeJS.ProcessEnv = { ...process.env, GETSIBU_GENERATED_DIR: dir };
  if (scenario.claims) {
    writeFileSync(join(dir, "claims.json"), JSON.stringify(scenario.claims));
    env.GETSIBU_CLAIM_OVERRIDES = join(dir, "claims.json");
  }
  if (scenario.topology) env.GETSIBU_APP_TOPOLOGY = scenario.topology;
  const steps = ["scripts/build-inventory.ts", ...(scenario.compose ? ["scripts/compose-pages.ts", "scripts/validate-inventory.ts"] : [])];
  const outputs: Record<string, { status: number | null; out: string }> = {};
  for (const step of steps) {
    const result = spawnSync(process.execPath, [step], { env, encoding: "utf8" });
    outputs[step] = { status: result.status, out: `${result.stdout}${result.stderr}` };
    expect(result.status === 0, `[${scenario.name}] ${step} exited ${result.status}: ${result.stderr.split("\n").slice(-6).join(" ")}`);
    if (result.status !== 0) break;
  }
  const read = <T>(file: string): T => JSON.parse(readFileSync(join(dir, file), "utf8"));
  const inventory = read<Inventory>("inventory.json");
  const search = read<{ documents: Array<{ id: string; path: string }> }>("search-index.json");
  const matrix = read<{ rows: RouteMatrixRow[] }>("route-matrix.json").rows;
  const composed = scenario.compose ? read<{ pages: Record<string, unknown> }>("page-sections.json").pages : null;
  const cleanup = () => rmSync(dir, { recursive: true, force: true });
  return { inventory, search, matrix, composed, outputs, cleanup };
}

const page = (inv: Inventory, n: number) => inv.pages.find((p) => p.number === n)!;
const row = (matrix: RouteMatrixRow[], path: string) => matrix.find((r) => r.path === path);
function expectHeld(name: string, r: ReturnType<typeof run>, n: number) {
  const p = page(r.inventory, n);
  expect(p.publication === "held", `[${name}] page ${n} (${p.title}) should be held, is ${p.publication}`);
  expect(!p.seo.sitemap && p.seo.robots === "noindex,follow", `[${name}] held page ${n} must be noindex and out of the sitemap`);
  expect(!r.search.documents.some((d) => d.id === `page-${n}`), `[${name}] held page ${n} must not be searchable`);
  expect(r.inventory.redirects.some((x) => x.source === p.path && !x.permanent), `[${name}] held page ${n} needs a temporary redirect`);
  expect(row(r.matrix, p.path)?.class === "HELD", `[${name}] route matrix should classify ${p.path} as HELD`);
  if (r.composed) expect(!(String(n) in r.composed), `[${name}] held page ${n} must not be composed`);
}
function expectPublished(name: string, r: ReturnType<typeof run>, n: number) {
  const p = page(r.inventory, n);
  expect(p.publication === "published" && !p.needsVerification, `[${name}] page ${n} (${p.title}) should be published, is ${p.publication}`);
  expect(p.seo.sitemap && p.seo.robots === "index,follow", `[${name}] published page ${n} must be indexable and in the sitemap`);
  expect(r.search.documents.some((d) => d.id === `page-${n}`), `[${name}] published page ${n} must be searchable`);
  expect(!r.inventory.redirects.some((x) => x.source === p.path), `[${name}] published page ${n} must not redirect`);
  expect(row(r.matrix, p.path)?.class === "LIVE" && row(r.matrix, p.path)?.status === 200, `[${name}] route matrix should classify ${p.path} as LIVE 200`);
  expect(p.contextPage === null && p.seo.description.startsWith(p.keyStatement.slice(0, 30)), `[${name}] published page ${n} should describe itself from its own PDF statement`);
  if (r.composed) expect(String(n) in r.composed, `[${name}] published page ${n} must be composed`);
}

// 1. Today's register: the held pages stay held.
const baseline = run({ name: "baseline", compose: false });
for (const n of [247, 122, 269, 334, 335, 342, 33]) expectHeld("baseline", baseline, n);
expect(baseline.inventory.pages.filter((p) => p.status === "canonical" && p.publication === "held").length === 41, "[baseline] expected 41 held pages");
expect(row(baseline.matrix, "/integrations/google-drive")?.status === 307, "[baseline] /integrations/google-drive should skip its held canonical with a 307");
expect(!row(baseline.matrix, "/storage/google-drive")?.navigation, "[baseline] Google Drive must not be in navigation while held");
baseline.cleanup();

// 2. Figma confirmed: its page publishes; FAQ 390 still depends on other claims and stays framed.
const figma = run({ name: "figma-confirmed", claims: { figma: "client-confirmed" }, compose: true });
expectPublished("figma-confirmed", figma, 247);
expect(page(figma.inventory, 390).publication === "framed", "[figma-confirmed] FAQ 390 still names other unconfirmed integrations and must stay framed");
expectHeld("figma-confirmed", figma, 248);
figma.cleanup();

// 3. Storage sources confirmed: connectors publish, aliases return to 308, navigation links appear.
const storage = run({ name: "storage-confirmed", claims: { "storage-sources": "client-confirmed" }, compose: true });
for (const n of [122, 123, 124, 125, 126, 283, 284, 285]) expectPublished("storage-confirmed", storage, n);
expect(row(storage.matrix, "/integrations/google-drive")?.status === 308 && row(storage.matrix, "/integrations/google-drive")?.destination === "/storage/google-drive", "[storage-confirmed] /integrations/google-drive should 308 to /storage/google-drive");
expect(!!row(storage.matrix, "/storage/google-drive")?.navigation, "[storage-confirmed] Google Drive should appear in navigation once live");
storage.cleanup();

// 4. Decision-held pages follow their claim: webhook events confirmed publishes 269–272.
const webhooks = run({ name: "webhooks-confirmed", claims: { "webhook-events": "client-confirmed" }, compose: false });
for (const n of [269, 270, 271, 272, 252, 268]) expectPublished("webhooks-confirmed", webhooks, n);
webhooks.cleanup();

// 5. SSO/SCIM confirmed: 334/335 publish; the SSO FAQ still states plan claims, so it becomes framed, not published.
const sso = run({ name: "sso-confirmed", claims: { "sso-scim": "client-confirmed" }, compose: false });
expectPublished("sso-confirmed", sso, 334);
expectPublished("sso-confirmed", sso, 335);
expect(page(sso.inventory, 389).publication === "framed", "[sso-confirmed] FAQ 389 still states plan claims and should be framed");
sso.cleanup();

// 6. A claim that becomes blocked again holds its page again.
const revoked = run({ name: "ocr-revoked", claims: { ocr: "conflicting" }, compose: false });
expect(revoked.inventory.pages.filter((p) => p.claims.includes("ocr") && p.status === "canonical").every((p) => p.publication !== "published"), "[ocr-revoked] pages stating OCR must stop being published");
expectHeld("ocr-revoked", revoked, 38);
revoked.cleanup();

// 7. App topology: renaming the marketing analytics section clears the /analytics collision.
const renamed = run({ name: "analytics-renamed", topology: "marketing-analytics-renamed", compose: true });
expect(!renamed.inventory.pages.some((p) => p.path === "/analytics" || p.path.startsWith("/analytics/")) && !renamed.inventory.indexes.some((i) => i.path.startsWith("/analytics")), "[analytics-renamed] no marketing path may remain under /analytics");
expect(renamed.inventory.indexes.some((i) => i.path === "/features/analytics"), "[analytics-renamed] the analytics hub should move to /features/analytics");
expect(!renamed.outputs["scripts/validate-inventory.ts"]?.out.includes("app route collisions"), "[analytics-renamed] the collision warning should be gone");
renamed.cleanup();
const undecided = run({ name: "topology-undecided", compose: true });
expect(!!undecided.outputs["scripts/validate-inventory.ts"]?.out.includes("Launch dependency: app route collisions"), "[undecided] the collision must be reported as a launch dependency");
undecided.cleanup();

// 8. Overrides can never touch the real build.
const refusedEnv: NodeJS.ProcessEnv = { ...process.env, GETSIBU_CLAIM_OVERRIDES: "x.json" };
delete refusedEnv.GETSIBU_GENERATED_DIR;
const refused = spawnSync(process.execPath, ["scripts/build-inventory.ts"], { env: refusedEnv, encoding: "utf8" });
expect(refused.status !== 0 && `${refused.stderr}`.includes("only allowed"), "Claim overrides against content/generated must be refused");
expect(fingerprint() === before, "content/generated must be unchanged by the test");

if (failures.length) {
  console.error(`✖ Publication workflow: ${failures.length} of ${checks} checks failed`);
  for (const f of failures) console.error(`   ${f}`);
  process.exit(1);
}
console.log(`✔ Publication workflow: ${checks} checks passed (8 scenarios; content/generated unchanged)`);
