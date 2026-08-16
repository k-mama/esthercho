import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./story-detail.css";

export const metadata: Metadata = {
  title: "My Father Dreamed of a Tiger",
  description:
    "The first memory fragment in Esther Cho's living story archive: a tiger dream, a daughter, and a family joke that became the opening line.",
};

const tags = ["Father", "Beginning", "Family", "Childhood"];

export default function TigerDreamStoryPage() {
  return (
    <main className="story-detail-page">
      <section className="container story-detail-hero" aria-labelledby="story-title">
        <Link href="/stories/" className="story-detail-back">
          Stories
        </Link>

        <p className="story-detail-kicker">STORY 01 · BEGINNING</p>
        <h1 id="story-title">My Father Dreamed of a Tiger</h1>
        <p className="story-detail-deck">
          Before Esther was born, her father dreamed of a tiger.
        </p>
      </section>

      <section className="container story-detail-grid">
        <article className="story-detail-copy">
          <p className="story-detail-opening">
            Before I was born, my father dreamed of a tiger.
          </p>

          <p>The baby who arrived was a girl.</p>

          <blockquote>“It must have been a cat.”</blockquote>

          <p>
            That is the whole fragment Esther has recorded so far. It is small,
            specific, and complete enough to open the archive without pretending
            that more has already been remembered.
          </p>

          <p>
            This website keeps stories in that form when necessary. A memory may
            begin as three lines, then grow later when another detail returns. The
            earlier fragment remains part of the record.
          </p>

          <div className="story-detail-tags" aria-label="Related memory tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </article>

        <figure className="story-detail-figure">
          <Image
            src="/media/esther/childhood-garden.jpg"
            alt="Esther Cho smiling in a garden as a child"
            width={1800}
            height={1350}
            sizes="(max-width: 899px) 100vw, 42vw"
            priority
          />
          <figcaption>
            Archive photograph · Esther Cho as a child. The photograph is not a
            reconstruction of the dream.
          </figcaption>
        </figure>
      </section>

      <section className="story-detail-note">
        <div className="container story-detail-note-inner">
          <p className="story-detail-kicker">ARCHIVE NOTE</p>
          <p>
            The Stories section is a living author archive. New details can be
            added as Esther remembers them; archival photographs and later
            reinterpretations remain clearly identified as different kinds of
            material.
          </p>
        </div>
      </section>

      <section className="container story-detail-next" aria-labelledby="next-story-title">
        <p className="story-detail-kicker">NEXT IN THE OPENING COLLECTION</p>
        <h2 id="next-story-title">The Youngest Daughter in Every House</h2>
        <p>At home she was the oldest child. In other houses, she kept becoming the youngest daughter.</p>
        <Link
          href="/stories/the-youngest-daughter-in-every-house/"
          className="story-detail-link"
        >
          Read the next story
        </Link>
      </section>
    </main>
  );
}
