/**
 * Sends one contact message to the configured endpoint (lib/forms/contact-config.ts) as a JSON POST.
 * Called only by the contact server action; it reads no configuration itself.
 *
 * Delivered means the endpoint itself answered 2xx. Redirects are not followed: fetch would turn a
 * 301, 302 or 303 into a GET without the message, whose 200 proves nothing, and would re-send the
 * visitor's details to another URL on a 307 or 308. A 3xx is a failed delivery like any other non-2xx.
 */
export type ContactDelivery = { delivered: true } | { delivered: false; failure: string };

export async function deliverContact(endpoint: string, message: Record<string, string>, timeoutMs: number): Promise<ContactDelivery> {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "content-type": "application/json", accept: "application/json" },
      body: JSON.stringify(message),
      signal: AbortSignal.timeout(timeoutMs),
      cache: "no-store",
      redirect: "manual",
    });
    return response.ok ? { delivered: true } : { delivered: false, failure: `HTTP ${response.status}` };
  } catch (error) {
    return { delivered: false, failure: error instanceof Error ? error.name : "unknown error" };
  }
}
