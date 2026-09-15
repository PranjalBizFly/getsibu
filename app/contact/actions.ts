"use server";

import { contactFormConfig } from "@/lib/forms/contact-config";
import { deliverContact } from "@/lib/forms/contact-delivery";
import { readContact, validateContact, type ContactErrors, type ContactValues } from "@/lib/forms/contact";

export interface ContactState {
  status: "idle" | "invalid" | "sent" | "failed" | "unavailable";
  errors?: ContactErrors;
  values?: Partial<ContactValues>;
}

/** Submission ids this server instance has delivered or is delivering: a repeated submit is not sent twice. */
const deliveries = new Map<string, "pending" | "sent">();
const DELIVERY_TIMEOUT_MS = 10_000;

/**
 * Validates on the server with the same rules as the browser, then delivers to the configured
 * endpoint. "sent" is returned only when the endpoint itself accepted the message (2xx; a redirect is
 * not followed and counts as a failure). Without a configured endpoint the action refuses the submission.
 */
export async function submitContact(_previous: ContactState, form: FormData): Promise<ContactState> {
  const config = contactFormConfig();
  if (!config.enabled || !config.endpoint) return { status: "unavailable" };

  const values = readContact(form);
  const errors = validateContact(values);
  if (Object.keys(errors).length) return { status: "invalid", errors, values };

  // Automated submissions fill the hidden field; they are refused, never shown as sent.
  if (String(form.get("website") ?? "")) return { status: "failed" };

  const submissionId = String(form.get("submissionId") ?? "");
  if (!/^[a-f0-9-]{36}$/.test(submissionId)) return { status: "failed" };
  const previous = deliveries.get(submissionId);
  if (previous === "sent") return { status: "sent" };
  if (previous === "pending") return { status: "failed" };
  deliveries.set(submissionId, "pending");

  const delivery = await deliverContact(config.endpoint, { ...values, submissionId, source: "contact-page", submittedAt: new Date().toISOString() }, DELIVERY_TIMEOUT_MS);
  if (!delivery.delivered) {
    deliveries.delete(submissionId);
    // Status or error name only: never log the visitor's details.
    console.error(`Contact form delivery failed: ${delivery.failure}`);
    return { status: "failed", values };
  }
  deliveries.set(submissionId, "sent");
  return { status: "sent" };
}
