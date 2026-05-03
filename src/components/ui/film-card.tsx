"use client";

import Link from "next/link";
import { YouTubeThumbnail } from "./youtube-thumbnail";

type FilmCardProps = {
  slug: string;
  title: string;
  kicker: string;
  videoId: string;
};

export function FilmCard({ slug, title, kicker, videoId }: FilmCardProps) {
  return (
    <Link href={`/films/${slug}`} className="film-card" aria-label={`Open ${title}`}>
      <YouTubeThumbnail videoId={videoId} title={title} />

      <div className="film-card-meta">
        <p className="film-card-kicker">{kicker}</p>
        <h2>{title}</h2>
      </div>
    </Link>
  );
}
