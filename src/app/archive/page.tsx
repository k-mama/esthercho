import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageCover } from "@/components/page-cover";
import "./archive.css";

export const metadata: Metadata = {
  title: "The Childhood Album",
  description:
    "Esther Cho's childhood photographs, remembered places, family traces, and the small things that stayed.",
};

export default function ArchivePage() {
  return (
    <main className="childhood-page">
      <PageCover
        eyebrow="CHILDHOOD"
        title="The Childhood Album"
        description="Photographs, family traces, drawings, and things remembered."
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
            <h2 id="childhood-intro-title">Childhood photographs.</h2>
            <div className="childhood-intro-copy">
              <p>
                It begins simply: a house, a garden, a child standing outside.
              </p>
              <p>
                The photographs are kept as they are. Time has already done
                enough to them.
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
          <figcaption className="container">The childhood house and garden</figcaption>
        </figure>

        <div className="container childhood-house-copy">
          <div>
            <p className="childhood-kicker">THE HOUSE</p>
            <h2 id="childhood-house-title">Sometimes the house comes back first.</h2>
          </div>
          <div className="childhood-house-copy-text">
            <p>
              A window, a yard, a staircase, the shape of a garden. Years later,
              a place can return before the story around it does.
            </p>
            <p>
              This was where a child stood and family life happened. Memory
              still finds its way back there.
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
            <figcaption>Esther Cho as a child</figcaption>
          </figure>

          <div className="childhood-garden-copy">
            <p className="childhood-kicker">THE CHILD</p>
            <h2 id="childhood-garden-title">A child in the garden.</h2>
            <p>
              Someone wanted to keep this moment. The photograph does not need
              to do anything more.
            </p>
          </div>
        </div>
      </section>

      <section className="childhood-fragments" aria-labelledby="childhood-fragments-title">
        <div className="container childhood-fragments-inner">
          <div>
            <p className="childhood-kicker">WITHOUT A PICTURE</p>
            <h2 id="childhood-fragments-title">Some memories have no photograph.</h2>
          </div>
          <div className="childhood-fragments-copy">
            <p>
              A sentence. A family joke. The sound of a clock. A table. A summer
              evening. The feeling of wanting to go home.
            </p>
            <p>
              They can stay incomplete. What is not remembered does not need to
              be filled in.
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
            <p className="childhood-kicker">WHAT IS ORIGINAL</p>
            <h2 id="childhood-principle-title">Old photographs stay old photographs.</h2>
          </div>
          <div className="childhood-principle-copy">
            <p>
              When a later image is reconstructed or reimagined from memory, it
              is identified as a later work rather than presented as a historical
              photograph.
            </p>
            <Link href="/stories/" className="childhood-link">
              Read the stories
            </Link>
          </div>
        </div>
      </section>

      <section className="childhood-ending" aria-labelledby="childhood-ending-title">
        <div className="container childhood-ending-inner">
          <p className="childhood-kicker">ONE MORE PAGE</p>
          <h2 id="childhood-ending-title">Some photographs wait a long time for their story.</h2>
        </div>
      </section>
    </main>
  );
}
