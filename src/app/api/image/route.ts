import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get("path");

  if (!path || path.includes("..") || path.includes("//")) {
    return new NextResponse("Invalid path", { status: 400 });
  }

  const urlEndpoint = (process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT ?? "").replace(/\/$/, "");
  const decodedPath = decodeURIComponent(path);
  const base = new URL(urlEndpoint);
  base.pathname = [base.pathname, ...decodedPath.split("/").map(encodeURIComponent)]
    .join("/")
    .replace(/\/+/g, "/");
  const imageUrl = base.toString();

  try {
    const upstream = await fetch(imageUrl, {
      headers: { Accept: "image/*" },
      cache: "no-store",
    });

    if (!upstream.ok) {
      return new NextResponse("Image not found", { status: upstream.status });
    }

    const contentType = upstream.headers.get("content-type") ?? "image/jpeg";
    const buffer = await upstream.arrayBuffer();

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
      },
    });
  } catch {
    return new NextResponse("Upstream error", { status: 502 });
  }
}