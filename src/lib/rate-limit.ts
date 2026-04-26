import "server-only";

import { createHash } from "node:crypto";
import type { NextRequest } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { getRateLimitEnv } from "@/lib/env";

type RouteKey = "contact" | "career";

let redisClient: Redis | null = null;
let contactLimiter: Ratelimit | null = null;
let careerLimiter: Ratelimit | null = null;

function getRedisClient(): Redis {
  if (redisClient) {
    return redisClient;
  }

  const { UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN } = getRateLimitEnv();

  redisClient = new Redis({
    url: UPSTASH_REDIS_REST_URL,
    token: UPSTASH_REDIS_REST_TOKEN,
  });

  return redisClient;
}

function getLimiter(routeKey: RouteKey): Ratelimit {
  const redis = getRedisClient();

  if (routeKey === "contact") {
    if (!contactLimiter) {
      contactLimiter = new Ratelimit({
        redis,
        limiter: Ratelimit.slidingWindow(5, "10 m"),
        prefix: "ratelimit:contact",
      });
    }
    return contactLimiter;
  }

  if (!careerLimiter) {
    careerLimiter = new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(5, "10 m"),
      prefix: "ratelimit:career",
    });
  }

  return careerLimiter;
}

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const ip = forwarded.split(",")[0]?.trim();
    if (ip) {
      return ip;
    }
  }

  return "unknown";
}

function hashClientId(ip: string): string {
  const { RATE_LIMIT_SALT } = getRateLimitEnv();

  return createHash("sha256")
    .update(`${RATE_LIMIT_SALT}:${ip}`)
    .digest("hex");
}

export async function enforceRateLimit(request: NextRequest, routeKey: RouteKey): Promise<boolean> {
  try {
    const limiter = getLimiter(routeKey);
    const ip = getClientIp(request);
    const identifier = hashClientId(ip);
    const result = await limiter.limit(identifier);
    return result.success;
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("[rate-limit] Falling back to allow in non-production", {
        routeKey,
        message: error instanceof Error ? error.message : String(error),
      });
      return true;
    }

    throw error;
  }
}
