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
  return src.replace(/^\/+/, "");
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

export function getImageKitUrl(path: string, options?: ImageKitUrlOptions) {
  if (!path || path.startsWith("data:") || path.startsWith("blob:")) {
    return path;
  }

  const endpoint = getImageKitEndpoint();

  if (!endpoint) {
    return path;
  }

  const assetPath = normalizeAssetPath(path);
  const endpointPath = endpoint.pathname.replace(/\/$/, "");
  const encodedPath = encodePathSegments(assetPath);
  const url = `${endpoint.origin}${endpointPath === "/" ? "" : endpointPath}/${encodedPath}`;
  const tr = buildTransformationQuery(options);

  return tr ? `${url}?tr=${tr}` : url;
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

  return getImageKitUrl(assetPath, options);
}