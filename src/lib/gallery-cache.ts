export type GalleryImage = {
  path: string;
  subfolder?: string;
};

type GalleryCacheEntry = {
  cachedAt: number;
  images: GalleryImage[];
  allUrls: string[];
};

const GALLERY_CACHE_TTL_MS = 30 * 60 * 1000;

function getSessionStorage(): Storage | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    return window.sessionStorage;
  } catch {
    return null;
  }
}

function fnv1a(input: string) {
  let hash = 0x811c9dc5;

  for (let index = 0; index < input.length; index += 1) {
    hash ^= input.charCodeAt(index);
    hash = Math.imul(hash, 0x01000193);
  }

  return (hash >>> 0).toString(16).padStart(8, "0");
}

function sortedUrlsHash(allUrls: string[]) {
  const sortedUrls = [...allUrls].sort((left, right) => left.localeCompare(right));
  return fnv1a(sortedUrls.join("\u0000"));
}

function getBasePrefix(keyPrefix: string) {
  const lastSeparatorIndex = keyPrefix.lastIndexOf(":");
  return lastSeparatorIndex === -1 ? keyPrefix : keyPrefix.slice(0, lastSeparatorIndex);
}

function readEntry(storage: Storage, key: string): GalleryCacheEntry | null {
  const rawValue = storage.getItem(key);
  if (!rawValue) {
    return null;
  }

  try {
    const parsed = JSON.parse(rawValue) as Partial<GalleryCacheEntry>;
    if (!parsed || typeof parsed.cachedAt !== "number" || !Array.isArray(parsed.images)) {
      storage.removeItem(key);
      return null;
    }

    if (Date.now() - parsed.cachedAt > GALLERY_CACHE_TTL_MS) {
      storage.removeItem(key);
      return null;
    }

    const normalizedImages = (parsed.images as Array<Partial<GalleryImage> & { src?: string; filename?: string }>).flatMap((image) => {
      const path = typeof image.path === "string" ? image.path : image.src;

      if (!path) {
        return [];
      }

      const normalizedPath = path.replace(/^\/+/, "");
      const parts = normalizedPath.split("/");
      const derivedSubfolder = parts.length > 1 ? parts[parts.length - 2] : undefined;

      return [{
        path: normalizedPath,
        subfolder: typeof image.subfolder === "string" ? image.subfolder : derivedSubfolder,
      }];
    });

    return {
      cachedAt: parsed.cachedAt,
      images: normalizedImages,
      allUrls: Array.isArray(parsed.allUrls) ? (parsed.allUrls as string[]) : [],
    };
  } catch {
    storage.removeItem(key);
    return null;
  }
}

export function buildGalleryCacheKeyPrefix(basePrefix: string, allUrls: string[]) {
  return `${basePrefix}:${sortedUrlsHash(allUrls)}`;
}

export function readGalleryCache(keyPrefix: string): GalleryImage[] | null {
  const storage = getSessionStorage();
  if (!storage) {
    return null;
  }

  const entry = readEntry(storage, keyPrefix);
  return entry ? entry.images : null;
}

export function writeGalleryCache(keyPrefix: string, images: GalleryImage[], allUrls: string[]): void {
  const storage = getSessionStorage();
  if (!storage) {
    return;
  }

  try {
    const basePrefix = getBasePrefix(keyPrefix);
    const staleKeyPrefix = `${basePrefix}:`;

    for (let index = 0; index < storage.length; index += 1) {
      const key = storage.key(index);
      if (key && key.startsWith(staleKeyPrefix) && key !== keyPrefix) {
        storage.removeItem(key);
        index -= 1;
      }
    }

    const entry: GalleryCacheEntry = {
      cachedAt: Date.now(),
      images,
      allUrls: [...allUrls],
    };

    storage.setItem(keyPrefix, JSON.stringify(entry));
  } catch {
    // Silent fallback when storage is unavailable or full.
  }
}