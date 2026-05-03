import { NextRequest, NextResponse } from "next/server";
import { FileObject, FolderObject } from "imagekit/dist/libs/interfaces/FileDetails";
import { getImageKitClient } from "@/lib/imagekit";

function isValidClientName(clientName: string) {
  return clientName.length > 0 && !/[\\/]/.test(clientName);
}

function isFileObject(item: FileObject | FolderObject): item is FileObject {
  return item.type === "file";
}

const folders = [
  "AnuragAndShreya/Haldi",
  "AnuragAndShreya/Mehndi",
  "AnuragAndShreya/Sangeet",
  "AnuragAndShreya/Wedding",
  "AnuragAndShreya/BrideEntry",
];

async function listFolderImageUrls(folderPath: string): Promise<string[]> {
  const imagekit = getImageKitClient();
  const response = await imagekit.listFiles({ path: folderPath });

  return response
    .filter(isFileObject)
    .sort((left, right) => left.filePath.localeCompare(right.filePath))
    .map((file) => {
      const cleanPath = file.filePath.startsWith("/") ? file.filePath.slice(1) : file.filePath;
      return `/api/image?path=${encodeURIComponent(cleanPath)}`;
    });
}

export async function GET(request: NextRequest) {
  const clientName = request.nextUrl.searchParams.get("client")?.trim() ?? "";

  if (!isValidClientName(clientName)) {
    return NextResponse.json({ error: "Missing or invalid client parameter." }, { status: 400 });
  }

  try {
    const result = await Promise.all(folders.map((folder) => listFolderImageUrls(folder)));
    const responseBody = Object.fromEntries(
      folders.map((folder, index) => {
        const folderName = folder.split("/").pop() ?? folder;
        console.log("[blog-gallery]", folder, result[index].length);
        return [folderName, result[index]] as const;
      }),
    );

    return NextResponse.json(responseBody);
  } catch {
    return NextResponse.json({ error: "Failed to load gallery images." }, { status: 500 });
  }
}