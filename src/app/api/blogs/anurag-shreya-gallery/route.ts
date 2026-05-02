import { NextResponse } from "next/server";
import { ANURAG_SHREYA_MANIFEST } from "@/data/anurag-shreya-manifest";

// This API no longer reads the filesystem at runtime.
// It returns the static manifest so the client can perform controlled selection/shuffle.
export async function GET() {
  try {
    return NextResponse.json({
      clientId: "anurag-shreya",
      manifest: ANURAG_SHREYA_MANIFEST,
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to return manifest" }, { status: 500 });
  }
}
