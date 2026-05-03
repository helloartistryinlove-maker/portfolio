/**
 * YouTube Utility Functions
 * Handles YouTube video ID extraction and thumbnail generation with smart fallbacks
 */

/**
 * Extract YouTube video ID from various URL formats
 * Supports:
 * - youtube.com/watch?v={ID}
 * - youtu.be/{ID}
 * - youtube.com/embed/{ID}
 * - youtube.com/v/{ID}
 * - youtube.com/watch?v={ID}&...
 */
export function getYouTubeId(url: string): string | null {
  if (!url) return null;

  // youtu.be short link
  const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (shortMatch) return shortMatch[1];

  // youtube.com/watch?v=...
  const watchMatch = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  if (watchMatch) return watchMatch[1];

  // youtube.com/embed/...
  const embedMatch = url.match(/\/embed\/([a-zA-Z0-9_-]{11})/);
  if (embedMatch) return embedMatch[1];

  // youtube.com/v/...
  const vMatch = url.match(/\/v\/([a-zA-Z0-9_-]{11})/);
  if (vMatch) return vMatch[1];

  // Direct ID (11 chars, alphanumeric, hyphen, underscore)
  if (/^[a-zA-Z0-9_-]{11}$/.test(url)) {
    return url;
  }

  return null;
}

/**
 * Thumbnail quality hierarchy
 * maxresdefault (1280x720) - best, not always available
 * sddefault (640x480) - standard, usually available
 * hqdefault (480x360) - high quality, always available
 */
export type YouTubeThumbnailQuality = "maxresdefault" | "sddefault" | "hqdefault";

const THUMBNAIL_QUALITY_ORDER: YouTubeThumbnailQuality[] = ["maxresdefault", "sddefault", "hqdefault"];

/**
 * Generate YouTube thumbnail URL
 * Prefers maxresdefault, falls back to sddefault, then hqdefault
 */
export function getYouTubeThumbnailUrl(videoId: string, quality: YouTubeThumbnailQuality = "maxresdefault"): string {
  if (!videoId) return "";
  return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
}

/**
 * Get thumbnail URL with fallback quality levels
 * Returns primary URL; client-side error handling will switch to fallbacks
 */
export function getYouTubeThumbnailWithFallbacks(videoId: string): {
  primary: string;
  fallbacks: string[];
} {
  if (!videoId) return { primary: "", fallbacks: [] };

  const primary = getYouTubeThumbnailUrl(videoId, "maxresdefault");
  const fallbacks = [
    getYouTubeThumbnailUrl(videoId, "sddefault"),
    getYouTubeThumbnailUrl(videoId, "hqdefault"),
  ];

  return { primary, fallbacks };
}

/**
 * Generate YouTube embed URL with customizable options
 */
export interface YouTubeEmbedOptions {
  autoplay?: boolean;
  mute?: boolean;
  controls?: boolean;
  modestbranding?: boolean;
  rel?: boolean;
  fs?: boolean;
  cc_load_policy?: boolean;
}

export function getYouTubeEmbedUrl(
  videoId: string,
  options: YouTubeEmbedOptions = {}
): string {
  const defaults: YouTubeEmbedOptions = {
    autoplay: true,
    mute: false,
    controls: true,
    modestbranding: true,
    rel: false,
    fs: true,
    cc_load_policy: false,
  };

  const merged = { ...defaults, ...options };
  const params = new URLSearchParams({
    autoplay: merged.autoplay ? "1" : "0",
    mute: merged.mute ? "1" : "0",
    controls: merged.controls ? "1" : "0",
    modestbranding: merged.modestbranding ? "1" : "0",
    rel: merged.rel ? "1" : "0",
    fs: merged.fs ? "1" : "0",
    cc_load_policy: merged.cc_load_policy ? "1" : "0",
  });

  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
}
