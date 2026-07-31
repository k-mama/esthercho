import Image from "next/image";
import type { CSSProperties } from "react";
import "./page-cover.css";

interface PageCoverProps {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  alt: string;
  objectPosition?: string;
  mobileObjectPosition?: string;
  align?: "left" | "center" | "right";
  shade?: "soft" | "medium" | "strong";
  priority?: boolean;
}

export function PageCover({
  eyebrow,
  title,
  description,
  image,
  alt,
  objectPosition = "center center",
  mobileObjectPosition,
  align = "left",
  shade = "medium",
  priority = true,
}: PageCoverProps) {
  const coverStyle = {
    "--cover-position": objectPosition,
    "--cover-position-mobile": mobileObjectPosition ?? objectPosition,
  } as CSSProperties;

  return (
    <section
      className={`page-cover-shell page-cover--${align} page-cover--${shade}`}
      style={coverStyle}
    >
      <Image
        src={image}
        alt={alt}
        fill
        sizes="100vw"
        priority={priority}
        className="page-cover-image"
      />

      <div className="page-cover-content container">
        <div className="page-cover-copy">
          <p className="page-cover-eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          {description ? (
            <p className="page-cover-description">{description}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
