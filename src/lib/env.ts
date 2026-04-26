import "server-only";

type ServerEnv = {
  RESEND_API_KEY: string;
  ADMIN_EMAIL: string;
};

type RateLimitEnv = {
  UPSTASH_REDIS_REST_URL: string;
  UPSTASH_REDIS_REST_TOKEN: string;
  RATE_LIMIT_SALT: string;
};

let cachedEnv: ServerEnv | null = null;

function getRequiredEnvVar(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing ${name}.`);
  }

  return value;
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function getServerEnv(): ServerEnv {
  if (cachedEnv) {
    return cachedEnv;
  }

  const RESEND_API_KEY = getRequiredEnvVar("RESEND_API_KEY");
  const ADMIN_EMAIL = getRequiredEnvVar("ADMIN_EMAIL");

  if (!isValidEmail(ADMIN_EMAIL)) {
    throw new Error("Invalid ADMIN_EMAIL.");
  }

  cachedEnv = {
    RESEND_API_KEY,
    ADMIN_EMAIL,
  };

  return cachedEnv;
}

export function getRateLimitEnv(): RateLimitEnv {
  const UPSTASH_REDIS_REST_URL = process.env.UPSTASH_REDIS_REST_URL?.trim();
  const UPSTASH_REDIS_REST_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN?.trim();
  const RATE_LIMIT_SALT = process.env.RATE_LIMIT_SALT?.trim() || "artistryinlove-default-salt";

  if (!UPSTASH_REDIS_REST_URL) {
    throw new Error("Missing UPSTASH_REDIS_REST_URL.");
  }

  if (!UPSTASH_REDIS_REST_TOKEN) {
    throw new Error("Missing UPSTASH_REDIS_REST_TOKEN.");
  }

  return {
    UPSTASH_REDIS_REST_URL,
    UPSTASH_REDIS_REST_TOKEN,
    RATE_LIMIT_SALT,
  };
}
