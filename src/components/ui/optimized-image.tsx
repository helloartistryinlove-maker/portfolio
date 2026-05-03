import Image, { type ImageProps } from "next/image";

const PUBLIC_IMAGES_PATTERN = /^\/images(?:\/|$)/;

type OptimizedImageProps = Omit<ImageProps, "unoptimized">;

function isLocalPublicImagesSource(src: ImageProps["src"]) {
  if (typeof src === "string") {
    return PUBLIC_IMAGES_PATTERN.test(src);
  }

  if (src && typeof src === "object" && "src" in src && typeof src.src === "string") {
    return PUBLIC_IMAGES_PATTERN.test(src.src);
  }

  return false;
}

export function OptimizedImage({ src, ...props }: OptimizedImageProps) {
  return <Image src={src} unoptimized={!isLocalPublicImagesSource(src)} {...props} />;
}