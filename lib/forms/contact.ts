/**
 * The contact form's fields and validation, shared by the browser and the server action so both
 * accept and reject exactly the same input. Fields mirror the official site's contact form; nothing
 * about where messages go is defined here (see lib/forms/contact-config.ts).
 */

export const CONTACT_FIELDS = ["firstName", "lastName", "email", "company", "phone", "subject", "message"] as const;
export type ContactField = (typeof CONTACT_FIELDS)[number];
export type ContactValues = Record<ContactField, string>;
export type ContactErrors = Partial<Record<ContactField, string>>;

export const CONTACT_LIMITS = {
  firstName: 100,
  lastName: 100,
  email: 254,
  company: 150,
  phone: 30,
  subject: 150,
  message: 5000,
} as const satisfies Record<ContactField, number>;

export const MESSAGE_MIN = 5;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE = /^[+()0-9\s-]{6,30}$/;

export const CONTACT_LABELS: Record<ContactField, string> = {
  firstName: "First name",
  lastName: "Last name",
  email: "Work email",
  company: "Company",
  phone: "Phone",
  subject: "Subject",
  message: "Message",
};

export const REQUIRED: ReadonlySet<ContactField> = new Set(["firstName", "lastName", "email", "subject", "message"]);

/** Reads and trims the form's values. */
export function readContact(form: FormData): ContactValues {
  return Object.fromEntries(CONTACT_FIELDS.map((field) => [field, String(form.get(field) ?? "").trim()])) as ContactValues;
}

/** Field errors in field order; an empty object means the input is valid. */
export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};
  for (const field of CONTACT_FIELDS) {
    const value = values[field];
    if (REQUIRED.has(field) && !value) errors[field] = `Enter your ${CONTACT_LABELS[field].toLowerCase()}.`;
    else if (value.length > CONTACT_LIMITS[field]) errors[field] = `${CONTACT_LABELS[field]} must be ${CONTACT_LIMITS[field].toLocaleString("en-GB")} characters or fewer.`;
  }
  if (!errors.email && values.email && !EMAIL.test(values.email)) errors.email = "Enter an email address in the format name@company.com.";
  if (!errors.phone && values.phone && !PHONE.test(values.phone)) errors.phone = "Enter a phone number using digits, spaces, brackets, + or -.";
  if (!errors.message && values.message && values.message.length < MESSAGE_MIN) errors.message = `Message must be at least ${MESSAGE_MIN} characters.`;
  return errors;
}
