/**
 * HTTP status code regression tests.
 *
 *   npm run build && npm run test:http
 *
 * 1. Contact delivery (lib/forms/contact-delivery.ts) against a local endpoint: only a 2xx from the
 *    endpoint itself is a delivery; redirects are never followed; 4xx, 5xx, timeouts and refused
 *    connections fail.
 * 2. The built site, served by `next start` on a free local port: every row of
 *    content/generated/route-matrix.json answers with its status (200, 307, 308) and destination;
 *    trailing slashes 308 to the slashless URL; unknown URLs 404 with the not-found page; the search
 *    index answers GET and HEAD and refuses other methods with 405 and Allow; malformed percent-encoding
 *    is a 400 (proxy.ts); nothing is answered with a 5xx.
 */
import { spawn } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { createServer, type Server } from "node:http";
import { createRequire } from "node:module";
import type { AddressInfo } from "node:net";
import type { RouteMatrixRow } from "../types/content.ts";
import { deliverContact } from "../lib/forms/contact-delivery.ts";

const failures: string[] = [];
let checks = 0;
const expect = (condition: boolean, message: string) => {
  checks++;
  if (!condition) failures.push(message);
};

const listen = async (server: Server) => {
  await new Promise<void>((resolve) => server.listen(0, "127.0.0.1", resolve));
  return (server.address() as AddressInfo).port;
};
const close = (server: Server) => {
  server.closeAllConnections();
  return new Promise<void>((resolve) => server.close(() => resolve()));
};

/* Contact delivery -------------------------------------------------------------------------------- */

const received: Array<{ method: string; path: string; type: string; body: string }> = [];
const endpoint = createServer((req, res) => {
  let body = "";
  req.on("data", (chunk) => (body += chunk));
  req.on("end", () => {
    const path = req.url ?? "/";
    received.push({ method: req.method ?? "", path, type: req.headers["content-type"] ?? "", body });
    if (path === "/slow") return void setTimeout(() => !res.destroyed && res.writeHead(200).end(), 1_000);
    if (path === "/landing") return void res.writeHead(200, { "content-type": "text/html" }).end("<p>Landing page</p>");
    const status = Number(path.slice(1));
    res.writeHead(status, status >= 300 && status < 400 ? { location: "/landing" } : {}).end();
  });
});
const endpointPort = await listen(endpoint);
const endpointUrl = (path: string) => `http://127.0.0.1:${endpointPort}/${path}`;
const message = { firstName: "Status", lastName: "Test", email: "status-test@example.com", subject: "HTTP status", message: "Regression test message" };

for (const status of [200, 201, 202, 204]) {
  received.length = 0;
  const result = await deliverContact(endpointUrl(String(status)), message, 2_000);
  expect(result.delivered, `Contact delivery: HTTP ${status} from the endpoint must count as delivered`);
  const request = received[0];
  expect(received.length === 1 && request.method === "POST" && request.type.startsWith("application/json") && JSON.parse(request.body).message === message.message, `Contact delivery: HTTP ${status} should come from one JSON POST carrying the message`);
}
for (const status of [301, 302, 303, 307, 308]) {
  received.length = 0;
  const result = await deliverContact(endpointUrl(String(status)), message, 2_000);
  expect(!result.delivered && result.failure === `HTTP ${status}`, `Contact delivery: a ${status} redirect must be a failed delivery, got ${JSON.stringify(result)}`);
  expect(received.length === 1 && !received.some((r) => r.path === "/landing"), `Contact delivery: a ${status} redirect must not be followed (requests: ${received.map((r) => `${r.method} ${r.path}`).join(", ")})`);
}
for (const status of [400, 401, 403, 404, 405, 409, 413, 415, 422, 429, 500, 502, 503, 504]) {
  const result = await deliverContact(endpointUrl(String(status)), message, 2_000);
  expect(!result.delivered && result.failure === `HTTP ${status}`, `Contact delivery: HTTP ${status} must be a failed delivery, got ${JSON.stringify(result)}`);
}
{
  const result = await deliverContact(endpointUrl("slow"), message, 100);
  expect(!result.delivered && result.failure === "TimeoutError", `Contact delivery: an endpoint slower than the timeout must fail with TimeoutError, got ${JSON.stringify(result)}`);
}
await close(endpoint);
{
  const result = await deliverContact(endpointUrl("200"), message, 2_000);
  expect(!result.delivered, "Contact delivery: a refused connection must be a failed delivery");
}

/* Built site -------------------------------------------------------------------------------------- */

type Probe = { status: number; location: string | null; allow: string | null; type: string; csp: boolean; body: string };
const answered: Array<{ request: string; status: number }> = [];

async function serveBuild(): Promise<{ base: string; stop: () => void; log: () => string }> {
  const probe = createServer();
  const port = await listen(probe);
  await close(probe);
  const next = createRequire(import.meta.url).resolve("next/dist/bin/next");
  const child = spawn(process.execPath, [next, "start", "-p", String(port), "-H", "127.0.0.1"], { stdio: ["ignore", "pipe", "pipe"] });
  let output = "";
  child.stdout.on("data", (chunk) => (output += chunk));
  child.stderr.on("data", (chunk) => (output += chunk));
  const base = `http://127.0.0.1:${port}`;
  const stop = () => void child.kill();
  for (let attempt = 0; attempt < 120; attempt++) {
    if (child.exitCode !== null) break;
    try {
      await (await fetch(`${base}/robots.txt`)).arrayBuffer();
      return { base, stop, log: () => output };
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  }
  stop();
  throw new Error(`next start did not answer on ${base}:\n${output.split("\n").slice(-15).join("\n")}`);
}

if (!existsSync(".next/BUILD_ID")) {
  failures.push("No production build in .next: run npm run build first");
} else {
  const server = await serveBuild();
  const request = async (path: string, init: RequestInit = {}): Promise<Probe> => {
    const method = init.method ?? "GET";
    const response = await fetch(`${server.base}${path}`, { ...init, redirect: "manual" });
    const body = method === "HEAD" ? "" : await response.text();
    answered.push({ request: `${method} ${path}`, status: response.status });
    return { status: response.status, location: response.headers.get("location"), allow: response.headers.get("allow"), type: response.headers.get("content-type") ?? "", csp: response.headers.has("content-security-policy"), body };
  };

  try {
    // Every URL the site answers, as the route matrix says (LIVE and SAFE-LIVE 200, HELD 307, REDIRECT 307/308).
    const matrix: RouteMatrixRow[] = JSON.parse(readFileSync("content/generated/route-matrix.json", "utf8")).rows;
    const queue = [...matrix];
    await Promise.all(
      Array.from({ length: 8 }, async () => {
        for (let row = queue.shift(); row; row = queue.shift()) {
          const r = await request(row.path);
          expect(r.status === row.status, `${row.class} ${row.path}: HTTP ${r.status}, route matrix says ${row.status}`);
          if (row.destination) expect(r.location === row.destination, `${row.class} ${row.path}: redirects to ${r.location}, route matrix says ${row.destination}`);
          else expect(r.location === null, `${row.class} ${row.path}: unexpected Location ${r.location}`);
        }
      }),
    );

    const live = matrix.find((row) => row.kind === "page" && row.status === 200)!;
    const hub = matrix.find((row) => row.kind === "hub")!;
    const held = matrix.find((row) => row.class === "HELD");
    expect((await request(live.path, { method: "HEAD" })).status === 200, `HEAD ${live.path} should be 200`);
    if (held) expect((await request(held.path, { method: "HEAD" })).status === 307, `HEAD ${held.path} (held) should be 307`);

    // Trailing slashes are permanent redirects to the slashless URL.
    for (const path of [live.path, hub.path]) {
      const r = await request(`${path}/`);
      expect(r.status === 308 && r.location === path, `${path}/ should 308 to ${path}, got ${r.status} → ${r.location}`);
    }

    // Unknown URLs are real 404s with the not-found page, never redirected; there is no API.
    for (const path of ["/http-status-test-unknown", `${hub.path}/http-status-test-unknown`, "/api/http-status-test", "/caf%C3%A9", `${hub.path}%2Fhttp-status-test`]) {
      const r = await request(path);
      expect(r.status === 404, `${path} should be 404, got ${r.status}`);
      expect(r.body.includes("<title>Page not found | GetSibu</title>") && /<meta name="robots" content="noindex/.test(r.body), `${path} should render the noindex not-found page`);
    }
    expect((await request("/http-status-test-unknown", { method: "HEAD" })).status === 404, "HEAD on an unknown URL should be 404");
    expect((await request("/api/http-status-test", { method: "POST", headers: { "content-type": "application/json" }, body: "{}" })).status === 404, "POST /api/* should be 404");

    // The static search index: GET and HEAD only.
    {
      const r = await request("/search-index.json");
      expect(r.status === 200 && r.type.startsWith("application/json") && Array.isArray(JSON.parse(r.body).documents), `GET /search-index.json should be 200 JSON with documents, got ${r.status} ${r.type}`);
      expect((await request("/search-index.json", { method: "HEAD" })).status === 200, "HEAD /search-index.json should be 200");
      for (const method of ["POST", "PUT", "PATCH", "DELETE"]) {
        const refused = await request("/search-index.json", { method, headers: { "content-type": "application/json" }, body: method === "DELETE" ? undefined : "{}" });
        const allow = (refused.allow ?? "").split(",").map((m) => m.trim());
        expect(refused.status === 405 && allow.includes("GET") && allow.includes("HEAD"), `${method} /search-index.json should be 405 with Allow: GET, HEAD, got ${refused.status} Allow: ${refused.allow}`);
      }
    }
    expect((await request("/sitemap.xml")).status === 200, "GET /sitemap.xml should be 200");
    expect((await request("/robots.txt")).status === 200, "GET /robots.txt should be 200");

    // Malformed percent-encoding is the client's error: 400 with the site's security headers (proxy.ts).
    for (const path of ["/%E0%A4%A", "/%ZZ", "/%", `${hub.path}/%E0%A4%A`, `${live.path}%E0`, "/search-index.json%E0", "/_next/static/%E0%A4%A"]) {
      const r = await request(path);
      expect(r.status === 400 && r.body === "Bad Request", `${path} (malformed percent-encoding) should be 400 Bad Request, got ${r.status}`);
      expect(r.csp, `${path}: the 400 response should carry the Content-Security-Policy header`);
    }
    expect((await request("/%E0%A4%A", { method: "HEAD" })).status === 400, "HEAD with malformed percent-encoding should be 400");

    for (const a of answered) expect(a.status < 500, `${a.request} answered HTTP ${a.status}: server errors are never an expected outcome`);
    // Next.js 16.3.5 logs "Error: Internal: NoFallbackError" for every 404 from [...path] (dynamicParams = false),
    // with or without proxy.ts; the status is still a correct 404. Any other logged error fails the test.
    const serverErrors = server.log().split("\n").filter((line) => /⨯|Error:/.test(line) && !line.includes("Internal: NoFallbackError"));
    expect(serverErrors.length === 0, `next start logged errors: ${serverErrors.slice(0, 5).join(" | ")}`);
  } finally {
    server.stop();
  }
}

/* Report ------------------------------------------------------------------------------------------ */

if (failures.length) {
  console.error(`\n✖ HTTP status tests failed: ${failures.length} of ${checks} check(s)`);
  for (const f of failures.slice(0, 60)) console.error(`   ${f}`);
  if (failures.length > 60) console.error(`   … ${failures.length - 60} more`);
  process.exit(1);
}
console.log(`✔ HTTP status tests passed: ${checks} checks (contact delivery, ${answered.length} requests to the built site)`);
process.exit(0);
