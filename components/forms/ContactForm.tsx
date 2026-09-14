"use client";

import { useActionState, useEffect, useRef, useState, type FormEvent } from "react";
import { submitContact, type ContactState } from "@/app/contact/actions";
import { CONTACT_FIELDS, CONTACT_LABELS, CONTACT_LIMITS, MESSAGE_MIN, REQUIRED, readContact, validateContact, type ContactErrors, type ContactField } from "@/lib/forms/contact";
import { Icon } from "@/components/primitives/Icon";

const AUTOCOMPLETE: Record<ContactField, string> = { firstName: "given-name", lastName: "family-name", email: "email", company: "organization", phone: "tel", subject: "off", message: "off" };
const INPUT_TYPE: Partial<Record<ContactField, string>> = { email: "email", phone: "tel" };
const newId = () => crypto.randomUUID();

/**
 * The contact form. Validation runs in the browser and again on the server with the same rules; the
 * submit button is disabled while a message is being sent; success is shown only when the configured
 * endpoint accepted the message. Errors are listed in a summary that receives focus, and each field
 * describes its own error.
 */
export function ContactForm({ privacyUrl }: { privacyUrl: string }) {
  const [state, action, pending] = useActionState<ContactState, FormData>(submitContact, { status: "idle" });
  const [clientErrors, setClientErrors] = useState<ContactErrors>({});
  const [messageLength, setMessageLength] = useState(0);
  // Created in the browser after mount (not during server rendering), renewed after each sent message.
  const [submissionId, setSubmissionId] = useState("");
  const summaryRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const errors = state.status === "invalid" ? { ...state.errors, ...clientErrors } : clientErrors;
  const errorList = CONTACT_FIELDS.filter((field) => errors[field]);

  useEffect(() => setSubmissionId(newId()), []);
  useEffect(() => {
    if (state.status === "invalid") summaryRef.current?.focus();
    if (state.status === "sent" || state.status === "failed" || state.status === "unavailable") statusRef.current?.focus();
    if (state.status === "sent") {
      formRef.current?.reset();
      setMessageLength(0);
      setSubmissionId(newId());
    }
  }, [state]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    const found = validateContact(readContact(new FormData(event.currentTarget)));
    setClientErrors(found);
    if (Object.keys(found).length) {
      event.preventDefault();
      requestAnimationFrame(() => summaryRef.current?.focus());
    }
  };

  if (state.status === "sent") {
    return (
      <div ref={statusRef} tabIndex={-1} role="status" className="rounded-lg border border-signal bg-signal-soft p-6 outline-none md:p-8">
        <p className="type-h4 flex items-center gap-2 text-fg">
          <Icon name="check" size={20} className="text-signal-strong" />
          Your message has been sent.
        </p>
        <button type="button" onClick={() => window.location.reload()} className="type-body-sm mt-4 font-semibold text-accent underline underline-offset-4">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} action={action} onSubmit={onSubmit} noValidate aria-describedby="contact-form-note" className="flex flex-col gap-6">
      <p id="contact-form-note" className="type-body-sm text-fg-muted">
        Fields marked (required) must be filled in.{" "}
        <a href={privacyUrl} className="font-medium text-accent underline underline-offset-4">
          Read the privacy notice
        </a>{" "}
        before sending.
      </p>

      {errorList.length ? (
        <div ref={summaryRef} tabIndex={-1} role="alert" aria-labelledby="contact-error-title" className="rounded-md border-2 border-danger bg-raised p-5 outline-none">
          <p id="contact-error-title" className="type-h4 text-fg">
            {errorList.length === 1 ? "There is a problem with 1 field" : `There are problems with ${errorList.length} fields`}
          </p>
          <ul className="type-body-sm mt-2 list-disc pl-5 text-fg">
            {errorList.map((field) => (
              <li key={field}>
                <a href={`#contact-${field}`} className="text-danger-strong underline underline-offset-4">
                  {errors[field]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {state.status === "failed" || state.status === "unavailable" ? (
        <div ref={statusRef} tabIndex={-1} role="alert" className="rounded-md border-2 border-danger bg-raised p-5 outline-none">
          <p className="type-h4 text-fg">{state.status === "unavailable" ? "The contact form is not available at the moment." : "Your message could not be sent."}</p>
          <p className="type-body-sm mt-1 text-fg-soft">{state.status === "unavailable" ? "Nothing was sent." : "Nothing was sent. Please try again later."}</p>
        </div>
      ) : null}

      <div className="grid gap-6 sm:grid-cols-2">
        {CONTACT_FIELDS.map((field) => {
          const error = errors[field];
          const required = REQUIRED.has(field);
          const describedBy = [error ? `contact-${field}-error` : null, field === "message" ? "contact-message-hint" : null].filter(Boolean).join(" ") || undefined;
          const common = {
            id: `contact-${field}`,
            name: field,
            required,
            "aria-invalid": error ? true : undefined,
            "aria-describedby": describedBy,
            maxLength: CONTACT_LIMITS[field],
            autoComplete: AUTOCOMPLETE[field],
            defaultValue: state.status !== "idle" ? (state.values?.[field] ?? "") : undefined,
            onInput: () => setClientErrors((current) => (current[field] ? { ...current, [field]: undefined } : current)),
            className: `type-body w-full rounded-sm border bg-raised px-3.5 py-3 text-fg placeholder:text-fg-muted focus-visible:border-accent ${error ? "border-2 border-danger" : "border-line-input"}`,
          };
          return (
            <div key={field} className={field === "message" || field === "subject" ? "sm:col-span-2" : ""}>
              <label htmlFor={common.id} className="type-body-sm flex items-baseline gap-1.5 font-semibold text-fg">
                {CONTACT_LABELS[field]}
                <span className="font-normal text-fg-muted">{required ? "(required)" : "(optional)"}</span>
              </label>
              {field === "message" ? (
                <>
                  <p id="contact-message-hint" className="type-caption mt-1 text-fg-muted">
                    Between {MESSAGE_MIN} and {CONTACT_LIMITS.message.toLocaleString("en-GB")} characters.
                  </p>
                  <textarea {...common} rows={6} onChange={(e) => setMessageLength(e.currentTarget.value.length)} className={`${common.className} mt-2 min-h-40 resize-y`} />
                  <p aria-hidden="true" className="type-caption mt-1 text-right text-fg-muted">
                    {messageLength.toLocaleString("en-GB")} / {CONTACT_LIMITS.message.toLocaleString("en-GB")}
                  </p>
                </>
              ) : (
                <input {...common} type={INPUT_TYPE[field] ?? "text"} inputMode={field === "email" ? "email" : field === "phone" ? "tel" : undefined} className={`${common.className} mt-2 min-h-12`} />
              )}
              {error ? (
                <p id={`contact-${field}-error`} className="type-body-sm mt-1.5 text-danger-strong">
                  {error}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>

      {/* Left empty by people; filled by automated submissions, which are refused. */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <input type="hidden" name="submissionId" value={submissionId} />

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={pending || !submissionId}
          className="type-button inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-accent px-6 text-accent-fg transition-colors hover:bg-accent/90 disabled:cursor-progress disabled:opacity-80"
        >
          {pending ? "Sending…" : "Send message"}
        </button>
        <p role="status" aria-live="polite" className="type-body-sm text-fg-muted">
          {pending ? "Sending your message. Please wait." : ""}
        </p>
      </div>
    </form>
  );
}
