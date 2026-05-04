import "server-only";

import { escapeForText } from "@/lib/form-security";
import { resend } from "@/lib/resend";
import { getServerEnv } from "@/lib/env";

type ContactEmailInput = {
  name: string;
  email: string;
  phone: string | null;
  eventType: string | null;
  message: string;
};

type CareerEmailInput = {
  name: string;
  email: string;
  phone: string | null;
  role: string;
  portfolioLink: string | null;
  experience: string | null;
  message: string;
};

type OutboundEmail = {
  subject: string;
  text: string;
  html: string;
  replyTo: string;
};

const { ADMIN_EMAIL } = getServerEnv();

const SENDER_EMAIL = `Artistry In Love <${ADMIN_EMAIL}>`;
// Receive emails in gmail inbox, not on the verified domain (which has no mailbox)
const RECIPIENT_EMAIL = "hello.artistryinlove@gmail.com";

function getSenderEmail(): string {
  return SENDER_EMAIL;
}

function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatOptional(value: string | null): string {
  return value ? escapeForText(value) : "Not provided";
}

function textSection(title: string, value: string): string {
  return `${title}:\n${value}`;
}

function htmlRow(label: string, value: string): string {
  return `<p style="margin:0 0 10px;"><strong>${esc(label)}:</strong> ${esc(value)}</p>`;
}

export function buildContactEmail(input: ContactEmailInput): OutboundEmail {
  const name = escapeForText(input.name);
  const email = escapeForText(input.email);
  const phone = formatOptional(input.phone);
  const eventType = formatOptional(input.eventType);
  const message = escapeForText(input.message);

  return {
    subject: `New Contact Inquiry - ${name}`,
    replyTo: email,
    text: [
      "New Contact Inquiry",
      "===================",
      "",
      textSection("Name", name),
      textSection("Email", email),
      textSection("Phone", phone),
      textSection("Event Type", eventType),
      "",
      textSection("Message", message),
    ].join("\n"),
    html: [
      '<div style="font-family:Arial,sans-serif;line-height:1.6;color:#111;">',
      '<h2 style="margin:0 0 14px;">New Contact Inquiry</h2>',
      htmlRow("Name", name),
      htmlRow("Email", email),
      htmlRow("Phone", phone),
      htmlRow("Event Type", eventType),
      '<hr style="border:none;border-top:1px solid #ddd;margin:16px 0;"/>',
      `<p style="margin:0 0 8px;"><strong>Message:</strong></p><p style="margin:0;white-space:pre-wrap;">${esc(message)}</p>`,
      "</div>",
    ].join(""),
  };
}

export function buildCareerEmail(input: CareerEmailInput): OutboundEmail {
  const name = escapeForText(input.name);
  const email = escapeForText(input.email);
  const phone = formatOptional(input.phone);
  const role = escapeForText(input.role);
  const portfolioLink = input.portfolioLink ? escapeForText(input.portfolioLink) : null;
  const experience = formatOptional(input.experience);
  const message = escapeForText(input.message);

  const portfolioHtml = portfolioLink
    ? `<a href="${esc(portfolioLink)}" target="_blank" rel="noreferrer">${esc(portfolioLink)}</a>`
    : "Not provided";

  return {
    subject: `New Career Application - ${name}`,
    replyTo: email,
    text: [
      "New Career Application",
      "======================",
      "",
      textSection("Name", name),
      textSection("Email", email),
      textSection("Phone", phone),
      textSection("Role", role),
      textSection("Portfolio", portfolioLink ?? "Not provided"),
      "",
      textSection("Experience", experience),
      "",
      textSection("Message", message),
    ].join("\n"),
    html: [
      '<div style="font-family:Arial,sans-serif;line-height:1.6;color:#111;">',
      '<h2 style="margin:0 0 14px;">New Career Application</h2>',
      htmlRow("Name", name),
      htmlRow("Email", email),
      htmlRow("Phone", phone),
      htmlRow("Role", role),
      `<p style="margin:0 0 10px;"><strong>Portfolio:</strong> ${portfolioHtml}</p>`,
      '<hr style="border:none;border-top:1px solid #ddd;margin:16px 0;"/>',
      `<p style="margin:0 0 8px;"><strong>Experience:</strong></p><p style="margin:0 0 12px;white-space:pre-wrap;">${esc(experience)}</p>`,
      `<p style="margin:0 0 8px;"><strong>Message:</strong></p><p style="margin:0;white-space:pre-wrap;">${esc(message)}</p>`,
      "</div>",
    ].join(""),
  };
}

export async function sendFormEmail(email: OutboundEmail): Promise<void> {
  // Validate reply-to (user email) before using it
  const isValidEmail = (value?: string | null) => {
    if (!value) return false;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const fromEmail = getSenderEmail();
  const userEmail = email.replyTo;

  const payload: Record<string, unknown> = {
    from: fromEmail,
    to: RECIPIENT_EMAIL,
    subject: email.subject,
    text: email.text,
    html: email.html,
  };

  // Debug logs (temporary) to verify headers before sending
  // eslint-disable-next-line no-console
  console.log("FROM:", "hello@artistryinlove.com");
  // eslint-disable-next-line no-console
  console.log("TO:", "hello.artistryinlove@gmail.com");
  // eslint-disable-next-line no-console
  console.log("REPLY_TO:", userEmail);

  if (isValidEmail(email.replyTo)) {
    // Use reply_to so replies go to the user, but keep FROM on the verified domain
    // include both variants to be resilient to SDK differences
    // @ts-ignore
    payload.reply_to = email.replyTo;
    // @ts-ignore
    payload.replyTo = email.replyTo;
  }

  const result = await resend.emails.send(payload as any);

  if ((result as any).error) {
    throw new Error(`Resend error: ${(result as any).error.message || "unknown"}`);
  }
}
