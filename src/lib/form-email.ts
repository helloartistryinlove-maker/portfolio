import "server-only";

import { escapeForText } from "@/lib/form-security";
import { resend } from "@/lib/resend";

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

const SENDER_EMAIL = "AIL <onboarding@resend.dev>";
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
  const result = await resend.emails.send({
    from: getSenderEmail(),
    to: RECIPIENT_EMAIL,
    replyTo: email.replyTo,
    subject: email.subject,
    text: email.text,
    html: email.html,
  });

  if (result.error) {
    throw new Error(`Resend error: ${result.error.message || "unknown"}`);
  }
}
