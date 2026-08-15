import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageCover } from "@/components/page-cover";
import "./archive.css";

export const metadata: Metadata = {
  title: "The Childhood Album",
  description:
    "A quiet archive of Esther Cho's childhood photographs, remembered places, family traces, and the ordinary details that survived time.",
};

export default function ArchivePage() {
  return (
    <main className="childhood-page">
      <PageCover
        eyebrow="CHILDHOOD"
        title="The Childhood Album"
        description="Childhood photographs, family records, drawings, and preserved memories."
        image="/media/covers/childhood-cover.jpg"
        alt="Esther Cho smiling in the garden as a child"
        objectPosition="42% center"
        mobileObjectPosition="38% center"
        align="right"
        shade="medium"
      />

      <section className="childhood-intro" aria-labelledby="childhood-intro-title">
        <div className="container">
          <p className="childhood-kicker">THE ALBUM OPENS</p>
          <div className="childhood-intro-grid">
            <h2 id="childhood-intro-title">A life leaves small things behind.</h2>
            <div className="childhood-intro-copy">
              <p>
                A house. A garden. A child standing in the light. The beginning
                of an archive is rarely grand.
              </p>
              <p>
                These photographs are kept for what they are: pieces of a real
                life, with their age and imperfections still visible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="childhood-house" aria-labelledby="childhood-house-title">
        <figure className="childhood-house-figure">
          <Image
            src="/media/home/childhood-house.jpg"
            alt="The house and garden connected to Esther Cho's childhood"
            width={1800}
            height={1059}
            sizes="100vw"
            priority
          />
          <figcaption className="container">
            Archive photograph · The remembered house and garden
          </figcaption>
        </figure>

        <div className="container childhood-house-copy">
          <div>
            <p className="childhood-kicker">A PLACE REMEMBERED</p>
            <h2 id="childhood-house-title">The album begins with a house.</h2>
          </div>
          <div className="childhood-house-copy-text">
            <p>
              Houses hold more than rooms. Years later, a window, a yard, a
              staircase, or the shape of a garden can return before the rest of
              the story does.
            </p>
            <p>
              On this site, places are not used as nostalgic decoration. They
              are part of the record: where a child stood, where family life
              unfolded, and where memory still knows how to find its way back.
            </p>
          </div>
        </div>
      </section>

      <section className="childhood-garden" aria-labelledby="childhood-garden-title">
        <div className="container childhood-garden-inner">
          <figure className="childhood-garden-figure">
            <Image
              src="/media/home/childhood-garden.jpg"
              alt="Esther Cho smiling in a garden as a child"
              width={1800}
              height={1350}
              sizes="(max-width: 899px) 100vw, 64vw"
            />
            <figcaption>Archive photograph · Esther Cho as a child</figcaption>
          </figure>

          <div className="childhood-garden-copy">
            <p className="childhood-kicker">A CHILD IN THE FRAME</p>
            <h2 id="childhood-garden-title">Not a symbol. A person.</h2>
            <p>
              The photographs do not need to become illustrations for a lesson.
              They can remain ordinary and specific: a face, a season, a place,
              a moment someone once thought worth keeping.
            </p>
          </div>
        </div>
      </section>

      <section className="childhood-fragments" aria-labelledby="childhood-fragments-title">
        <div className="container childhood-fragments-inner">
          <div>
            <p className="childhood-kicker">BEYOND THE PHOTOGRAPH</p>
            <h2 id="childhood-fragments-title">Not every memory left a picture.</h2>
          </div>
          <div className="childhood-fragments-copy">
            <p>
              Some scenes survive only as a sentence, a family joke, the sound
              of a clock, a table, a summer evening, or the feeling of wanting to
              go home.
            </p>
            <p>
              Those fragments belong in the archive too. When they become
              stories, the missing parts are not invented simply to make the
              memory look complete.
            </p>
          </div>
        </div>
      </section>

      <section
        className="childhood-archive-principle"
        aria-labelledby="childhood-principle-title"
      >
        <div className="container childhood-principle-inner">
          <div>
            <p className="childhood-kicker">ARCHIVE PRINCIPLE</p>
            <h2 id="childhood-principle-title">The record and the reimagining stay distinct.</h2>
          </div>
          <div className="childhood-principle-copy">
            <p>
              Original photographs are presented as archival material. When a
              later image is reconstructed or reimagined from memory, it is
              identified separately rather than allowed to pass as historical
              evidence.
            </p>
            <p>
              The aim is not to make the past prettier. It is to let a real life
              remain recognizable inside the design.
            </p>
            <Link href="/stories/" className="childhood-link">
              Enter the stories
            </Link>
          </div>
        </div>
      </section>

      <section className="childhood-ending" aria-labelledby="childhood-ending-title">
        <div className="container childhood-ending-inner">
          <p className="childhood-kicker">THE ALBUM STAYS OPEN</p>
          <h2 id="childhood-ending-title">More can return later.</h2>
          <p>
            The childhood archive is allowed to remain unfinished. A photograph
            can wait years for the story that belongs beside it.
          </p>
        </div>
      </section>
    </main>
  );
}
