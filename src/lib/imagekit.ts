import "server-only";

import ImageKit from "imagekit";

let cachedClient: ImageKit | null = null;

function getRequiredEnvVar(name: string): string {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`Missing ${name}.`);
  }

  return value;
}

export function getImageKitClient() {
  if (cachedClient) {
    return cachedClient;
  }

  const publicKey = getRequiredEnvVar("IMAGEKIT_PUBLIC_KEY");
  const privateKey = getRequiredEnvVar("IMAGEKIT_PRIVATE_KEY");
  const urlEndpoint = getRequiredEnvVar("NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT").replace(/\/$/, "");

  cachedClient = new ImageKit({
    publicKey,
    privateKey,
    urlEndpoint,
  });

  return cachedClient;
}