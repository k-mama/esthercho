import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HomeHeroVideo } from "./home-hero-video";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Esther Cho",
  description:
    "A house of stories shaped by faith, memory, childhood, and ordinary life.",
};

export default function Home() {
  return (
    <main className={styles.home}>
      <section className={`${styles.videoHero} home-video-hero`}>
        <HomeHeroVideo />

        <div className={styles.videoHeroContent}>
          <p className={styles.videoEyebrow}>
            WELCOME TO ESTHER&apos;S HOUSE
          </p>
          <h1>A house of stories, built from memory.</h1>
          <Link href="/about/" className={styles.videoHeroLink}>
            Enter the house
          </Link>
        </div>
      </section>

      <section className={styles.homeIntro} aria-labelledby="home-intro-title">
        <div className="container">
          <p className={styles.eyebrow}>INSIDE THE HOUSE</p>
          <div className={styles.homeIntroGrid}>
            <h2 id="home-intro-title">Stories, photographs, books, and drawings.</h2>
            <div className={styles.homeIntroCopy}>
              <p>
                They are kept in separate rooms here, but they all come from the
                same life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.storyScene} aria-labelledby="home-stories-title">
        <figure className={styles.storyFigure}>
          <Image
            src="/media/covers/stories-cover.webp"
            alt="Esther Cho holding a book on a tree-lined stone wall path"
            width={1800}
            height={1059}
            sizes="100vw"
            priority
          />
        </figure>
        <div className={`container ${styles.storyCopy}`}>
          <div>
            <p className={styles.eyebrow}>STORIES</p>
            <h2 id="home-stories-title">Stories Born from Life</h2>
          </div>
          <div className={styles.storyText}>
            <p>
              A living collection of family, faith, childhood, and the small
              details that memory refuses to lose.
            </p>
            <Link href="/stories/" className={styles.textLink}>
              Enter the stories
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.estherScene} aria-labelledby="home-esther-title">
        <div className={`container ${styles.estherGrid}`}>
          <figure className={styles.estherFigure}>
            <Image
              src="/media/covers/esther-cover.webp"
              alt="Esther Cho in a navy blouse seated beneath two framed artworks"
              width={1800}
              height={1059}
              sizes="(max-width: 899px) 100vw, 46vw"
            />
          </figure>
          <div className={styles.estherCopy}>
            <p className={styles.eyebrow}>ESTHER</p>
            <h2 id="home-esther-title">The House That Became a Story</h2>
            <p>
              Meet the Korean writer and artist behind the work, and the home,
              family memory, faith, and drawing that continue to shape it.
            </p>
            <Link href="/about/" className={styles.textLink}>
              Meet Esther
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.albumScene} aria-labelledby="home-album-title">
        <figure className={styles.albumFigure}>
          <Image
            src="/media/home/childhood-house.jpg"
            alt="The house and garden connected to Esther Cho's childhood"
            width={1800}
            height={1059}
            sizes="100vw"
          />
        </figure>
        <div className={`container ${styles.albumCopy}`}>
          <div>
            <p className={styles.eyebrow}>CHILDHOOD</p>
            <h2 id="home-album-title">The Childhood Album</h2>
          </div>
          <div className={styles.albumText}>
            <p>
              Real photographs, remembered places, and family fragments remain
              visibly different from later creative reinterpretations.
            </p>
            <Link href="/archive/" className={styles.textLink}>
              Open the album
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.roomsPair} aria-label="Books and Morning Table">
        <div className={`container ${styles.roomsPairGrid}`}>
          <article className={styles.roomColumn}>
            <figure className={`${styles.roomFigure} ${styles.booksFigure}`}>
              <Image
                src="/media/covers/books-cover-final-20260802.webp"
                alt="Esther Cho reading at a softly sunlit table"
                width={1448}
                height={1086}
                sizes="(max-width: 899px) 100vw, 58vw"
              />
            </figure>
            <p className={styles.eyebrow}>BOOKS</p>
            <h2>Beyond the Garden</h2>
            <p>Books and works in progress, shown only as far as the record is confirmed.</p>
            <Link href="/books/" className={styles.textLink}>
              Visit the books
            </Link>
          </article>

          <article className={styles.roomColumn}>
            <figure className={`${styles.roomFigure} ${styles.morningFigure}`}>
              <Image
                src="/media/covers/morning-table-cover-mobile.webp"
                alt="Avocado toast, egg, grapes, and iced coffee on Esther Cho's morning table"
                width={1200}
                height={1600}
                sizes="(max-width: 899px) 100vw, 34vw"
              />
            </figure>
            <p className={styles.eyebrow}>MORNING TABLE</p>
            <h2>The Morning Table</h2>
            <p>Devotional reflections and notes from the place where ordinary mornings meet Scripture and prayer.</p>
            <Link href="/notes/" className={styles.textLink}>
              Come to the table
            </Link>
          </article>
        </div>
      </section>

      <section className={styles.studioScene} aria-labelledby="home-studio-title">
        <div className={`container ${styles.studioGrid}`}>
          <div className={styles.studioCopy}>
            <p className={styles.eyebrow}>STUDIO</p>
            <h2 id="home-studio-title">Drawn by Hand, Reborn in Light</h2>
            <p>
              Original hand-drawn work stays visible beside clearly identified
              reinterpretations. The process is part of the work; it does not
              replace the source.
            </p>
            <Link href="/studio/" className={styles.textLink}>
              Enter the studio
            </Link>
          </div>
          <figure className={styles.studioFigure}>
            <Image
              src="/media/esther/still-making-father-child-collage-20260802.png"
              alt="A paper collage based on Esther Cho's original childhood sketch"
              width={1536}
              height={1536}
              sizes="(max-width: 899px) 100vw, 42vw"
            />
          </figure>
        </div>
      </section>
    </main>
  );
}
