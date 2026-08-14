import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageCover } from "@/components/page-cover";
import "./stories.css";

export const metadata: Metadata = {
  title: "Stories Born from Life",
  description:
    "A living collection of Esther Cho's stories shaped by childhood, family, faith, memory, and the ordinary details that remain.",
};

const openingCollection = [
  {
    number: "01",
    title: "My Father Dreamed of a Tiger",
    meta: "Father · Beginning",
  },
  {
    number: "02",
    title: "The Youngest Daughter in Every House",
    meta: "Family · Childhood",
  },
  {
    number: "03",
    title: "Back to the Yard in Clean Pajamas",
    meta: "House · Childhood",
  },
  {
    number: "04",
    title: "Our Family Restaurant",
    meta: "Family · Table",
  },
  {
    number: "05",
    title: "Mom, I'm So Happy",
    meta: "Mother · Happiness",
  },
  {
    number: "06",
    title: "July, My First Year of Middle School",
    meta: "July · Turning Point",
  },
  {
    number: "07",
    title: "The Happiness Collector",
    meta: "Memory · Now",
  },
];

const lifeChapters = [
  "Childhood",
  "The Years with Father",
  "After July",
  "School and Art",
  "Becoming a Family",
  "Becoming a Writer",
  "A Life with God",
  "The Life Now",
];

const memoryCollections = [
  "House",
  "Pale Blue",
  "Rain",
  "Early Summer",
  "Christmas",
  "Table",
  "Dawn",
  "Sunset",
  "Family",
  "Happiness",
];

export default function StoriesPage() {
  return (
    <main className="stories-page">
      <PageCover
        eyebrow="STORIES"
        title="Stories Born from Life"
        description="A living collection of family, faith, childhood, and the small details that memory refuses to lose."
        image="/media/covers/stories-cover.webp"
        mobileImage="/media/covers/stories-cover-mobile.webp"
        alt="Esther Cho holding a book on a tree-lined stone wall path"
        objectPosition="center center"
        mobileObjectPosition="center center"
        align="left"
        shade="medium"
      />

      <section className="container stories-intro" aria-labelledby="stories-intro-title">
        <p className="stories-kicker">A LIVING AUTHOR ARCHIVE</p>
        <div className="stories-intro-grid">
          <h2 id="stories-intro-title">Memory does not arrive in order.</h2>
          <div className="stories-intro-copy">
            <p>
              A story may begin with a house, a July afternoon, a clean pair of
              pajamas, or a sentence someone said decades ago.
            </p>
            <p>
              These pages grow as Esther remembers. They are not a finished
              memoir arranged once and for all, but a living collection where a
              person, place, object, season, or photograph can open another
              door.
            </p>
          </div>
        </div>
      </section>

      <section className="container stories-start" aria-labelledby="start-here-title">
        <figure className="stories-start-figure">
          <Image
            src="/media/home/childhood-garden.jpg"
            alt="Esther Cho smiling in a garden as a child"
            width={1800}
            height={1350}
            sizes="(max-width: 899px) 100vw, 56vw"
          />
          <figcaption>Archive photograph · Esther Cho as a child</figcaption>
        </figure>

        <div className="stories-start-copy">
          <p className="stories-kicker">START HERE</p>
          <h2 id="start-here-title">My Father Dreamed of a Tiger</h2>
          <p className="stories-lead">
            Before Esther was born, her father dreamed of a tiger. The baby was
            a girl. The family joke was that perhaps it had been a cat.
          </p>
          <p>
            It is a small beginning with a long shadow: expectation, affection,
            family humor, and the first chapter of a life that would keep
            turning remembered things into stories.
          </p>
          <p className="stories-note">Full story will join the opening collection.</p>
        </div>
      </section>

      <section className="stories-opening" aria-labelledby="opening-collection-title">
        <div className="container">
          <header className="stories-section-heading">
            <p className="stories-kicker">OPENING COLLECTION</p>
            <h2 id="opening-collection-title">Seven doors into the story.</h2>
            <p>
              Not a complete table of contents. Just the first memories chosen
              to open the archive.
            </p>
          </header>

          <div className="stories-opening-grid">
            {openingCollection.map((story) => (
              <article className="stories-opening-item" key={story.number}>
                <p className="stories-opening-number">{story.number}</p>
                <h3>{story.title}</h3>
                <p className="stories-opening-meta">{story.meta}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container stories-archive-rhythm" aria-labelledby="archive-rhythm-title">
        <div className="stories-archive-copy">
          <p className="stories-kicker">LIFE CHAPTERS</p>
          <h2 id="archive-rhythm-title">A life read by turning points, not only dates.</h2>
          <p>
            The story keeps its chronology, but the archive is organized around
            the seasons that changed the shape of a life.
          </p>

          <ol className="stories-chapter-list">
            {lifeChapters.map((chapter, index) => (
              <li key={chapter}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {chapter}
              </li>
            ))}
          </ol>
        </div>

        <div className="stories-archive-images" aria-label="Archive photographs across Esther Cho's life">
          <figure className="stories-archive-image stories-archive-image--house">
            <Image
              src="/media/home/childhood-house.jpg"
              alt="The house and garden connected to Esther Cho's childhood"
              width={1800}
              height={1059}
              sizes="(max-width: 899px) 100vw, 34vw"
            />
            <figcaption>The remembered house and garden.</figcaption>
          </figure>

          <figure className="stories-archive-image stories-archive-image--artist">
            <Image
              src="/media/esther/young-artist.jpg"
              alt="Esther Cho during her university years"
              width={1500}
              height={1125}
              sizes="(max-width: 899px) 100vw, 28vw"
            />
            <figcaption>Esther Cho during her university years.</figcaption>
          </figure>
        </div>
      </section>

      <section className="stories-memory" aria-labelledby="memory-collections-title">
        <div className="container stories-memory-grid">
          <div>
            <p className="stories-kicker">MEMORY COLLECTIONS</p>
            <h2 id="memory-collections-title">A memory can be found by its color, weather, or room.</h2>
          </div>

          <div className="stories-memory-list" aria-label="Memory collection themes">
            {memoryCollections.map((collection) => (
              <span key={collection}>{collection}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="container stories-newly" aria-labelledby="newly-remembered-title">
        <figure className="stories-newly-figure">
          <Image
            src="/media/esther/morning-table.jpg"
            alt="A breakfast prepared at Esther Cho's table"
            width={1200}
            height={1600}
            sizes="(max-width: 899px) 100vw, 36vw"
          />
        </figure>

        <div className="stories-newly-copy">
          <p className="stories-kicker">NEWLY REMEMBERED</p>
          <h2 id="newly-remembered-title">Some stories arrive years late.</h2>
          <p>
            Esther often remembers without warning. A smell, a table, a season,
            or an ordinary object can bring back a scene that had been quiet for
            years. Newly remembered stories will be added here as they return.
          </p>
          <Link href="/archive/" className="stories-text-link">
            Follow the photographs
          </Link>
        </div>
      </section>

      <section className="stories-happiness" aria-labelledby="happiness-title">
        <div className="container stories-happiness-inner">
          <p className="stories-kicker">THE HAPPINESS COLLECTOR</p>
          <blockquote id="happiness-title">
            “I think I may be someone who collects happiness. Difficult things
            happened too, but what comes back first is the laughter.”
          </blockquote>
          <p>
            That instinct runs through the archive: not pretending that pain
            was absent, but noticing what love left behind.
          </p>
        </div>
      </section>
    </main>
  );
}
