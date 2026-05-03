type ImageKitFormat = "auto" | "webp" | "avif" | "jpg" | "jpeg" | "png" | "gif" | string;

export type ImageKitUrlOptions = {
  width?: number;
  quality?: number;
  format?: ImageKitFormat;
};

function getImageKitEndpoint() {
  const endpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT?.trim();

  if (!endpoint) {
    return null;
  }

  try {
    return new URL(endpoint.replace(/\/$/, ""));
  } catch {
    return null;
  }
}

function isAbsoluteUrl(src: string) {
  return /^https?:\/\//i.test(src);
}

function buildTransformationQuery(options?: ImageKitUrlOptions) {
  if (!options) {
    return "";
  }

  const transformations: string[] = [];

  if (typeof options.width === "number") {
    transformations.push(`w-${options.width}`);
  }

  if (typeof options.quality === "number") {
    transformations.push(`q-${options.quality}`);
  }

  if (options.format) {
    transformations.push(`f-${options.format}`);
  }

  return transformations.length > 0 ? transformations.join(",") : "";
}

function encodePathSegments(pathname: string) {
  return pathname
    .split("/")
    .filter(Boolean)
    .map((segment) => encodeURIComponent(segment))
    .join("/");
}

function normalizeAssetPath(src: string) {
  const cleaned = src.replace(/^\/+/, "");
  const fileName = cleaned.split("/").pop() ?? cleaned;

  const aliasMap: Record<string, string> = {
    "foooter11.jpg": "footer11.jpg",
    "footter16.jpg": "footer16.jpg",
    "portfoli2.jpg": "portfolio2.jpg",
    "portfoli3.jpg": "portfolio3.jpg",
  };

  const normalizedFileName = aliasMap[fileName] ?? fileName;

  if (normalizedFileName === fileName) {
    return cleaned;
  }

  return cleaned.slice(0, cleaned.length - fileName.length) + normalizedFileName;
}

function getAssetPath(src: string) {
  if (isAbsoluteUrl(src)) {
    try {
      const parsed = new URL(src);
      const endpoint = getImageKitEndpoint();

      if (!endpoint || parsed.origin !== endpoint.origin) {
        return null;
      }

      return normalizeAssetPath(parsed.pathname);
    } catch {
      return null;
    }
  }

  return normalizeAssetPath(src);
}

export function imageKitUrl(src: string, options?: ImageKitUrlOptions) {
  if (!src || src.startsWith("data:") || src.startsWith("blob:")) {
    return src;
  }

  const endpoint = getImageKitEndpoint();
  const assetPath = getAssetPath(src);

  if (!endpoint || !assetPath) {
    return src;
  }

  // Only allow ImageKit URL generation for gallery images under /Client/{client}/{event}
  // This prevents accidental conversion of static UI assets (e.g. /footer1.jpg)
  if (!assetPath.startsWith("Client/")) {
    return src;
  }

  const endpointPath = endpoint.pathname.replace(/\/$/, "");
  const encodedPath = encodePathSegments(assetPath);
  const url = `${endpoint.origin}${endpointPath === "/" ? "" : endpointPath}/${encodedPath}`;
  const tr = buildTransformationQuery(options);

  return tr ? `${url}?tr=${tr}` : url;
}