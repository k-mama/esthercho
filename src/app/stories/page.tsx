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
    href: "/stories/my-father-dreamed-of-a-tiger/",
  },
  {
    number: "02",
    title: "The Youngest Daughter in Every House",
    meta: "Family · Childhood",
    href: "/stories/the-youngest-daughter-in-every-house/",
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

      <section className="stories-intro" aria-labelledby="stories-intro-title">
        <div className="container stories-intro-inner">
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
                memoir arranged once and for all. A person, place, object, season,
                or photograph can open another door.
              </p>
            </div>
          </div>
          <div className="stories-intro-line" aria-hidden="true" />
        </div>
      </section>

      <section className="stories-feature" aria-labelledby="start-here-title">
        <div className="container stories-feature-inner">
          <figure className="stories-feature-figure">
            <Image
              src="/media/home/childhood-garden.jpg"
              alt="Esther Cho smiling in a garden as a child"
              width={1800}
              height={1350}
              sizes="(max-width: 899px) 100vw, 64vw"
              priority
            />
            <figcaption>Archive photograph · Esther Cho as a child</figcaption>
          </figure>

          <div className="stories-feature-copy">
            <p className="stories-kicker">START HERE</p>
            <p className="stories-feature-number">01</p>
            <h2 id="start-here-title">My Father Dreamed of a Tiger</h2>
            <p className="stories-feature-lead">
              Before Esther was born, her father dreamed of a tiger. The baby was
              a girl. The family joke was that perhaps it had been a cat.
            </p>
            <p>
              The first story enters the archive exactly as the memory has been
              recorded so far. The quiet spaces stay quiet until something more
              returns.
            </p>
            <Link
              href="/stories/my-father-dreamed-of-a-tiger/"
              className="stories-text-link"
            >
              Read the first story
            </Link>
          </div>
        </div>
      </section>

      <section className="stories-opening" aria-labelledby="opening-collection-title">
        <div className="container">
          <header className="stories-section-heading">
            <p className="stories-kicker">OPENING COLLECTION</p>
            <h2 id="opening-collection-title">Seven doors into the story.</h2>
            <p>
              Not a table of contents. Just the first memories chosen to open the
              archive.
            </p>
          </header>

          <ol className="stories-opening-list">
            {openingCollection.map((story) => (
              <li className="stories-opening-item" key={story.number}>
                <span className="stories-opening-number">{story.number}</span>
                <div className="stories-opening-title-group">
                  <p className="stories-opening-meta">{story.meta}</p>
                  <h3>
                    {story.href ? (
                      <Link href={story.href}>{story.title}</Link>
                    ) : (
                      story.title
                    )}
                  </h3>
                </div>
                {story.href ? (
                  <Link href={story.href} className="stories-opening-action">
                    Read story <span aria-hidden="true">→</span>
                  </Link>
                ) : (
                  <span className="stories-opening-state">In the archive</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="stories-house" aria-labelledby="life-chapters-title">
        <figure className="stories-house-figure">
          <Image
            src="/media/home/childhood-house.jpg"
            alt="The house and garden connected to Esther Cho's childhood"
            width={1800}
            height={1059}
            sizes="100vw"
          />
          <figcaption className="container">
            Archive photograph · The remembered house and garden
          </figcaption>
        </figure>

        <div className="container stories-house-editorial">
          <div className="stories-house-copy">
            <p className="stories-kicker">LIFE CHAPTERS</p>
            <h2 id="life-chapters-title">A life can be read by its turning points.</h2>
            <p>
              Chronology remains underneath the archive, but memory has its own
              architecture. Some years are remembered as rooms. Others as a
              person, a season, or the moment everything changed.
            </p>
          </div>

          <ol className="stories-chapter-list">
            {lifeChapters.map((chapter, index) => (
              <li key={chapter}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {chapter}
              </li>
            ))}
          </ol>

          <figure className="stories-young-artist">
            <Image
              src="/media/esther/young-artist.jpg"
              alt="Esther Cho during her university years"
              width={1500}
              height={1125}
              sizes="(max-width: 899px) 72vw, 25vw"
            />
            <figcaption>Archive photograph · University years</figcaption>
          </figure>
        </div>
      </section>

      <section className="stories-memory" aria-labelledby="memory-collections-title">
        <div className="container stories-memory-inner">
          <div className="stories-memory-heading">
            <p className="stories-kicker">MEMORY COLLECTIONS</p>
            <h2 id="memory-collections-title">
              A memory can be found by its color, weather, or room.
            </h2>
          </div>

          <div className="stories-memory-list" aria-label="Memory collection themes">
            {memoryCollections.map((collection) => (
              <span key={collection}>{collection}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="stories-newly" aria-labelledby="newly-remembered-title">
        <div className="container stories-newly-inner">
          <div className="stories-newly-copy">
            <p className="stories-kicker">NEWLY REMEMBERED</p>
            <h2 id="newly-remembered-title">Some stories arrive years late.</h2>
            <p>
              A smell, a table, a season, or an ordinary object can bring back a
              scene that had been quiet for years. Newly remembered stories will
              be added here as they return.
            </p>
            <Link href="/archive/" className="stories-text-link">
              Follow the photographs
            </Link>
          </div>

          <figure className="stories-newly-figure">
            <Image
              src="/media/esther/morning-table.jpg"
              alt="A breakfast prepared at Esther Cho's table"
              width={1200}
              height={1600}
              sizes="(max-width: 899px) 100vw, 38vw"
            />
            <figcaption>Morning table · A present-day detail</figcaption>
          </figure>
        </div>
      </section>

      <section className="stories-happiness" aria-labelledby="happiness-title">
        <div className="container stories-happiness-inner">
          <p className="stories-kicker">THE HAPPINESS COLLECTOR</p>
          <div className="stories-happiness-grid">
            <blockquote id="happiness-title">
              “I think I may be someone who collects happiness.”
            </blockquote>
            <p>
              Difficult things happened too. What often returns first is the
              laughter. The archive does not erase pain; it keeps noticing what
              love left behind.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
