import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Esther Cho",
  description:
    "A house of stories shaped by faith, memory, childhood, and ordinary life.",
};

const rooms = [
  {
    title: "The House That Became a Story",
    eyebrow: "ESTHER",
    description:
      "Meet the Korean writer and artist behind the stories, and the real house, garden, faith, and family life that continue to shape her work.",
    href: "/about/",
    linkLabel: "Meet Esther",
    image: "/media/home/childhood-house.jpg",
    alt: "The house and garden connected to Esther Cho's childhood",
    width: 1800,
    height: 1059,
  },
  {
    title: "The Morning Table",
    eyebrow: "MORNING TABLE",
    description:
      "Devotional reflections born where prayer, food, family, and the first quiet thoughts of the day meet.",
    href: "/notes/",
    linkLabel: "Come to the table",
    image: "/media/home/morning-table.jpg",
    alt: "A breakfast prepared at Esther Cho's table",
    width: 1200,
    height: 1600,
  },
  {
    title: "The Childhood Album",
    eyebrow: "CHILDHOOD",
    description:
      "Real photographs, family fragments, drawings, and remembered places preserved without disguising new work as archive.",
    href: "/archive/",
    linkLabel: "Open the album",
    image: "/media/home/childhood-garden.jpg",
    alt: "Esther Cho smiling in a garden as a child",
    width: 1800,
    height: 1350,
  },
];

export default function Home() {
  return (
    <div className={styles.home}>
      <section className={`container ${styles.heroRoom}`}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>WELCOME TO ESTHER&apos;S HOUSE</p>
          <h1>A house of stories, built from memory.</h1>
          <p className={styles.heroSentence}>
            Faith, childhood, home, hand drawn worlds, and the quiet places
            that shape a life.
          </p>
          <div className={styles.heroLinks}>
            <Link href="/about/" className={styles.textLink}>
              Enter the house
            </Link>
            <Link href="/stories/" className={styles.textLink}>
              Read the stories
            </Link>
          </div>
        </div>

        <figure className={styles.heroFigure}>
          <Image
            src="/media/home/childhood-garden.jpg"
            alt="Esther Cho smiling in a garden as a child"
            width={1800}
            height={1350}
            sizes="(max-width: 899px) 100vw, 50vw"
            priority
          />
          <figcaption>A real childhood photograph of Esther Cho.</figcaption>
        </figure>
      </section>

      <div className={`container ${styles.roomSequence}`}>
        <article className={`${styles.paperRoom} ${styles.houseRoom}`}>
          <div className={styles.roomCopy}>
            <p className={styles.eyebrow}>{rooms[0].eyebrow}</p>
            <h2>{rooms[0].title}</h2>
            <p>{rooms[0].description}</p>
            <Link href={rooms[0].href} className={styles.textLink}>
              {rooms[0].linkLabel}
            </Link>
          </div>
          <figure className={styles.landscapeFigure}>
            <Image
              src={rooms[0].image}
              alt={rooms[0].alt}
              width={rooms[0].width}
              height={rooms[0].height}
              sizes="(max-width: 899px) 100vw, 52vw"
            />
          </figure>
        </article>

        <div className={styles.twoRoomGrid}>
          <article className={`${styles.paperRoom} ${styles.compactRoom}`}>
            <figure className={styles.portraitFigure}>
              <Image
                src={rooms[1].image}
                alt={rooms[1].alt}
                width={rooms[1].width}
                height={rooms[1].height}
                sizes="(max-width: 899px) 100vw, 38vw"
              />
            </figure>
            <div className={styles.compactCopy}>
              <p className={styles.eyebrow}>{rooms[1].eyebrow}</p>
              <h2>{rooms[1].title}</h2>
              <p>{rooms[1].description}</p>
              <Link href={rooms[1].href} className={styles.textLink}>
                {rooms[1].linkLabel}
              </Link>
            </div>
          </article>

          <article className={`${styles.paperRoom} ${styles.compactRoom}`}>
            <figure className={styles.albumFigure}>
              <Image
                src={rooms[2].image}
                alt={rooms[2].alt}
                width={rooms[2].width}
                height={rooms[2].height}
                sizes="(max-width: 899px) 100vw, 38vw"
              />
            </figure>
            <div className={styles.compactCopy}>
              <p className={styles.eyebrow}>{rooms[2].eyebrow}</p>
              <h2>{rooms[2].title}</h2>
              <p>{rooms[2].description}</p>
              <Link href={rooms[2].href} className={styles.textLink}>
                {rooms[2].linkLabel}
              </Link>
            </div>
          </article>
        </div>

        <article className={`${styles.paperRoom} ${styles.studioRoom}`}>
          <div className={styles.roomCopy}>
            <p className={styles.eyebrow}>STUDIO</p>
            <h2>Drawn by Hand, Reborn in Light</h2>
            <p>
              Original hand drawn story studies live beside clearly identified
              reinterpretations. The source remains visible, and the archive
              remains truthful.
            </p>
            <Link href="/studio/" className={styles.textLink}>
              Enter the studio
            </Link>
          </div>
          <figure className={styles.sketchFigure}>
            <Image
              src="/media/home/hand-drawn-story.jpg"
              alt="An original hand drawn story study by Esther Cho"
              width={1200}
              height={1600}
              sizes="(max-width: 899px) 100vw, 36vw"
            />
          </figure>
        </article>
      </div>

      <section className={`container ${styles.navyPause}`}>
        <p>
          This is not a catalogue. It is a house entered slowly, one remembered
          room at a time.
        </p>
      </section>
    </div>
  );
}
