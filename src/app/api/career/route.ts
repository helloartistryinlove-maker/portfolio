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
import { buildCareerEmail, sendFormEmail } from "@/lib/form-email";
import { enforceRateLimit } from "@/lib/rate-limit";

type CareerPayload = {
  name: string;
  email: string;
  phone?: string;
  role: string;
  portfolioLink?: string;
  experience?: string;
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

    if (!(await enforceRateLimit(request, "career"))) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    }

    const body = (await request.json()) as Partial<CareerPayload>;

    const name = normalizeString(body.name, 100);
    const email = normalizeString(body.email, 200).toLowerCase();
    const phone = normalizeOptionalString(body.phone, 40);
    const role = normalizeString(body.role, 120);
    const portfolioLink = normalizeOptionalString(body.portfolioLink, 300);
    const experience = normalizeOptionalString(body.experience, 1500);
    const message = normalizeString(body.message, 4000);
    const website = normalizeOptionalString(body.website ?? body.company, 120);

    if (!name || !email || !role || !message) {
      return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    if (portfolioLink && !/^https?:\/\//i.test(portfolioLink)) {
      return NextResponse.json({ error: "Portfolio link must start with http:// or https://." }, { status: 400 });
    }

    const spamRule = getSpamRule({ name, email, message, honeypot: website });

    if (spamRule) {
      return NextResponse.json({ error: "Unable to process this submission." }, { status: 400 });
    }

    const outboundEmail = buildCareerEmail({
      name,
      email,
      phone,
      role,
      portfolioLink,
      experience,
      message,
    });

    await sendFormEmail(outboundEmail);

    return NextResponse.json({ success: true, message: "Request accepted." }, { status: 200 });
  } catch (error) {
    console.error("[/api/career] submit failed", {
      message: error instanceof Error ? error.message : "Unknown error",
    });

    return NextResponse.json(
      { error: "Unable to submit your application right now. Please try again shortly." },
      { status: 500 },
    );
  }
}
