import "server-only";

import type { NextRequest } from "next/server";

const MAX_JSON_BODY_BYTES = 20_000;

export function normalizeString(value: unknown, maxLength: number): string {
  if (typeof value !== "string") {
    return "";
  }

  const compact = value.replace(/\s+/g, " ").trim();

  if (!compact) {
    return "";
  }

  return compact.slice(0, maxLength);
}

export function normalizeOptionalString(value: unknown, maxLength: number): string | null {
  const normalized = normalizeString(value, maxLength);
  return normalized || null;
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function getSpamRule(input: {
  name?: string;
  email?: string;
  message?: string;
  honeypot?: unknown;
}): string | null {
  const honeypot = typeof input.honeypot === "string" ? input.honeypot.trim() : "";

  if (honeypot.length > 0) {
    return "honeypot_filled";
  }

  const name = (input.name ?? "").toLowerCase();
  const email = (input.email ?? "").toLowerCase();
  const message = (input.message ?? "").toLowerCase();

  if (!name || !email || !message) {
    return "missing_required_fields";
  }

  const urlMatches = message.match(/https?:\/\//g) ?? [];
  if (urlMatches.length > 3) {
    return "too_many_links";
  }

  return null;
}

export function isLikelySpam(input: {
  name?: string;
  email?: string;
  message?: string;
  honeypot?: unknown;
}): boolean {
  return getSpamRule(input) !== null;
}

export function escapeForText(value: string): string {
  return value.replace(/[\r\n\t]+/g, " ").trim();
}

export function isJsonRequest(request: NextRequest): boolean {
  const contentType = request.headers.get("content-type") ?? "";
  return contentType.toLowerCase().includes("application/json");
}

export function isAllowedOrigin(request: NextRequest): boolean {
  const origin = request.headers.get("origin");

  // Native clients and some tooling may omit Origin.
  if (!origin) {
    return true;
  }

  const requestHost = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  if (!requestHost) {
    return false;
  }

  try {
    const originHost = new URL(origin).host;
    return originHost === requestHost;
  } catch {
    return false;
  }
}

export function isPayloadTooLarge(request: NextRequest): boolean {
  const contentLength = request.headers.get("content-length");

  if (!contentLength) {
    return false;
  }

  const bytes = Number.parseInt(contentLength, 10);
  if (Number.isNaN(bytes)) {
    return true;
  }

  return bytes > MAX_JSON_BODY_BYTES;
}
