import { NextRequest, NextResponse } from "next/server";
import {
  isAllowedOrigin,
  isJsonRequest,
  getSpamRule,
  isPayloadTooLarge,
  isValidEmail,
  normalizeOptionalString,
  normalizeString,
} from "@/lib/form-security";
import { buildContactEmail, sendFormEmail } from "@/lib/form-email";
import { enforceRateLimit } from "@/lib/rate-limit";

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  eventType?: string;
  message: string;
  website?: string;
  company?: string;
};

export async function POST(request: NextRequest) {
  try {
    if (!isAllowedOrigin(request)) {
      return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
    }

    if (!isJsonRequest(request)) {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    if (isPayloadTooLarge(request)) {
      return NextResponse.json({ error: "Request is too large." }, { status: 413 });
    }

    if (!(await enforceRateLimit(request, "contact"))) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    }

    const body = (await request.json()) as Partial<ContactPayload>;

    const name = normalizeString(body.name, 100);
    const email = normalizeString(body.email, 200).toLowerCase();
    const phone = normalizeOptionalString(body.phone, 40);
    const eventType = normalizeOptionalString(body.eventType, 120);
    const message = normalizeString(body.message, 4000);
    const website = normalizeOptionalString(body.website ?? body.company, 120);

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const spamRule = getSpamRule({ name, email, message, honeypot: website });

    if (spamRule) {
      return NextResponse.json({ error: "Unable to process this submission." }, { status: 400 });
    }

    const outboundEmail = buildContactEmail({
      name,
      email,
      phone,
      eventType,
      message,
    });

    await sendFormEmail(outboundEmail);

    return NextResponse.json({ success: true, message: "Request accepted." }, { status: 200 });
  } catch (error) {
    console.error("[/api/contact] submit failed", {
      message: error instanceof Error ? error.message : "Unknown error",
    });

    return NextResponse.json(
      { error: "Unable to send your message right now. Please try again shortly." },
      { status: 500 },
    );
  }
}
