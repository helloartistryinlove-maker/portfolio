import "server-only";

import { Resend } from "resend";
import { getServerEnv } from "@/lib/env";

const { RESEND_API_KEY } = getServerEnv();

export const resend = new Resend(RESEND_API_KEY);

export const DEFAULT_FROM_EMAIL = "onboarding@resend.dev";
