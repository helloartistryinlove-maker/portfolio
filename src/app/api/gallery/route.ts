import { NextRequest, NextResponse } from "next/server";
import { FileObject, FolderObject } from "imagekit/dist/libs/interfaces/FileDetails";
import { getImageKitClient } from "@/lib/imagekit";

function isValidClientName(clientName: string) {
  return clientName.length > 0;
}

function isFileObject(item: FileObject | FolderObject): item is FileObject {
  return item.type === "file";
}

// Client -> ImageKit folder name mapping. Add entries here for every client alias.
const CLIENT_FOLDER_MAP: Record<string, string> = {
  // common aliases and variants
  "anurag-shreya": "AnuragAndShreya",
  "Anurag&Shreya": "AnuragAndShreya",
  // add more mappings as needed
};

const folders = ["Wedding", "Haldi", "Mehndi", "Sangeet", "PreWedding"];

async function listFolderFiles(folderPath: string): Promise<FileObject[]> {
  const imagekit = getImageKitClient();
  const response = await imagekit.listFiles({ path: folderPath });

  return response
    .filter(isFileObject)
    .sort((left, right) => left.filePath.localeCompare(right.filePath));
}

export async function GET(request: NextRequest) {
  const clientParam = request.nextUrl.searchParams.get("client")?.trim() ?? "";

  console.log("Client param:", clientParam);

  if (!isValidClientName(clientParam)) {
    console.warn("Missing or invalid client parameter:", clientParam);
    return NextResponse.json([]);
  }

  // Resolve via explicit map first. Support case-insensitive lookup of map keys.
  const mapped = CLIENT_FOLDER_MAP[clientParam] ?? CLIENT_FOLDER_MAP[clientParam.toLowerCase()];
  // If caller already provided the folder name (e.g. "AnuragAndShreya"), accept it.
  const folder = mapped ?? (Object.values(CLIENT_FOLDER_MAP).includes(clientParam) ? clientParam : undefined);

  if (!folder) {
    console.warn("Invalid client:, could not resolve folder for", clientParam);
    return NextResponse.json([]);
  }

  console.log("Resolved folder:", folder);

  try {
    let allFiles: FileObject[] = [];

    for (const sub of folders) {
      const files = await listFolderFiles(`/${folder}/${sub}/`);
      allFiles.push(...files);
    }

    console.log("Total files fetched:", allFiles.length);

    // Normalize response shape: array of { path: file.filePath }
    return NextResponse.json(allFiles.map((file) => ({ path: file.filePath })));
  } catch (err) {
    console.error("Error fetching gallery files for", folder, err);
    return NextResponse.json({ error: "Failed to load gallery images." }, { status: 500 });
  }
}