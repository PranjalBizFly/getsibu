/**
 * Answers a request whose path cannot be decoded (malformed percent-encoding such as /%E0%A4%A or
 * /%ZZ) with 400 Bad Request. Without it, Next.js fails while matching the [...path] route, finds no
 * 400 page to render in the App Router and serves a 500: a client's malformed URL would be reported as
 * a server failure.
 *
 * Every path this site publishes is plain ASCII, so the matcher runs the proxy only for paths that
 * contain a percent sign. Pages stay static; no other request passes through here. Security headers
 * from next.config.ts still apply to the 400 response. Covered by npm run test:http.
 */
import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  try {
    decodeURIComponent(request.nextUrl.pathname);
  } catch {
    return new NextResponse("Bad Request", { status: 400, headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "no-store" } });
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/(.*%.*)"],
};
