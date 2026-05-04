export type GalleryImage = { path: string; subfolder: string; filename: string };

export function shuffleArray<T>(arr: T[]): T[] {
  const copy = arr.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function pickSubsetFromFolder(files: string[]): { selected: string[]; skipped: string[] } {
  if (!files || files.length === 0) return { selected: [], skipped: [] };
  if (files.length === 1) return { selected: [...files], skipped: [] };

  const ratio = 0.55 + Math.random() * 0.2; // between 0.55 - 0.75
  let selectedCount = Math.max(1, Math.floor(files.length * ratio));
  if (selectedCount > files.length - 1) selectedCount = files.length - 1;

  const shuffled = shuffleArray(files);
  const selected = shuffled.slice(0, selectedCount);
  const selectedSet = new Set(selected);
  const skipped = files.filter((f) => !selectedSet.has(f));

  return { selected, skipped };
}

export function buildCombinedSelected(manifest: Record<string, string[]>) {
  const combined: GalleryImage[] = [];
  const selectedBySubfolder: Record<string, string[]> = {};
  const skippedBySubfolder: Record<string, string[]> = {};

  for (const [sub, files] of Object.entries(manifest)) {
    const { selected, skipped } = pickSubsetFromFolder(files);
    selectedBySubfolder[sub] = selected;
    skippedBySubfolder[sub] = skipped;

    for (const f of selected) {
      const filename = f.split('/').pop() ?? f;
      combined.push({ path: f, subfolder: sub, filename });
    }
  }

  return {
    combined: shuffleArray(combined),
    selectedBySubfolder,
    skippedBySubfolder,
  };
}
