import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HomeHeroVideo } from "./home-hero-video";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Esther Cho",
  description:
    "A house of stories shaped by faith, memory, food, care, and ordinary life.",
};

const houseMap = [
  ["01", "The Table", "/notes/"],
  ["02", "Stories", "/stories/"],
  ["03", "The Album", "/archive/"],
  ["04", "The Studio", "/studio/"],
  ["05", "The Library", "/books/"],
  ["06", "Esther", "/about/"],
] as const;

const tableCollections = [
  ["Morning Table", "Breakfast, Scripture, prayer, and a few lines from the day."],
  ["Table of Care", "Meals prepared for family and the people who shared her days."],
  ["Everyday Table", "Seasonal food, friends, ordinary meals, and the life around them."],
] as const;

const careShelves = [
  ["Family", "Meals, errands, hospital days, and the ordinary work of being there."],
  ["Service", "Church, mission trips, and work done without turning it into a résumé."],
  ["Friends", "People met along the way, including the stories that are simply funny."],
  ["The week", "Small routines that rarely look important until years have passed."],
] as const;

const archiveShelves = [
  ["Childhood", "Homes, gardens, school years, and early family photographs."],
  ["Family archive", "Photographs kept with names, dates, places, and what is actually known."],
  ["Places & seasons", "Rooms, landscapes, weather, objects, and the settings memory keeps."],
] as const;

export default function Home() {
  return (
    <main className={styles.home}>
      <section className={`${styles.videoHero} home-video-hero`}>
        <HomeHeroVideo />

        <div className={styles.videoHeroContent}>
          <p className={styles.videoEyebrow}>WELCOME TO ESTHER&apos;S HOUSE</p>
          <h1>A house of stories, built from memory.</h1>
          <Link href="/about/" className={styles.videoHeroLink}>
            Enter the house
          </Link>
        </div>
      </section>

      <section className={styles.threshold} aria-labelledby="house-map-title">
        <div className={`container ${styles.thresholdInner}`}>
          <div className={styles.thresholdCopy}>
            <p className={styles.eyebrow}>INSIDE THE HOUSE</p>
            <h2 id="house-map-title">
              Photographs, meals, stories, drawings, and books live here together.
            </h2>
            <p>
              Each room keeps a different kind of material. The house can grow without
              turning every new memory into another menu item.
            </p>
          </div>

          <nav className={styles.houseMap} aria-label="Rooms in Esther Cho's house">
            {houseMap.map(([number, label, href]) => (
              <Link href={href} key={number}>
                <span>{number}</span>
                <strong>{label}</strong>
                <i aria-hidden="true">↗</i>
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section className={styles.tableRoom} aria-labelledby="table-room-title">
        <div className={`container ${styles.roomHeading}`}>
          <p className={styles.eyebrow}>THE LONG TABLE</p>
          <h2 id="table-room-title">Food, Scripture, and the people gathered around them.</h2>
        </div>

        <figure className={styles.tableFigure}>
          <Image
            src="/media/esther/morning-table.jpg"
            alt="A breakfast prepared at Esther Cho's morning table"
            width={1200}
            height={1600}
            sizes="100vw"
          />
        </figure>

        <div className={`container ${styles.tableAfter}`}>
          <p className={styles.roomLead}>
            The table is not a food gallery. It is where meals, faith, family, and daily
            care have repeatedly met.
          </p>

          <div className={styles.storageRail} aria-label="Future Morning Table collections">
            {tableCollections.map(([title, description], index) => (
              <div className={styles.storageSlot} key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>

          <Link href="/notes/" className={styles.textLink}>
            Enter the Morning Table
          </Link>
        </div>
      </section>

      <section className={styles.carePassage} aria-labelledby="care-passage-title">
        <div className={`container ${styles.careGrid}`}>
          <div className={styles.careIntro}>
            <p className={styles.eyebrow}>THE PASSAGE</p>
            <h2 id="care-passage-title">Care belongs to the week, not to a separate display case.</h2>
            <p>
              These shelves are ready for the ordinary acts, trips, people, and comic
              moments that later become stories.
            </p>
            <Link href="/stories/" className={styles.textLink}>
              Read the stories
            </Link>
          </div>

          <div className={styles.careShelves}>
            {careShelves.map(([title, description], index) => (
              <div className={styles.careShelf} key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.albumRoom} aria-labelledby="album-room-title">
        <figure className={styles.albumFigure}>
          <Image
            src="/media/home/childhood-house.jpg"
            alt="The house and garden connected to Esther Cho's childhood"
            width={1800}
            height={1059}
            sizes="100vw"
          />
          <figcaption>Archive photograph · A place connected to Esther Cho&apos;s childhood</figcaption>
        </figure>

        <div className={`container ${styles.albumInterior}`}>
          <div className={styles.albumCopy}>
            <p className={styles.eyebrow}>THE ALBUM ROOM</p>
            <h2 id="album-room-title">The photograph stays evidence. The memory may keep growing.</h2>
            <p>
              Original photographs remain distinct from later interpretations. New
              captions, dates, names, and remembered details can be added without
              changing what the image is.
            </p>
          </div>

          <div className={styles.archiveCabinet}>
            {archiveShelves.map(([title, description], index) => (
              <div className={styles.cabinetDrawer} key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>

          <Link href="/archive/" className={styles.textLink}>
            Open the archive
          </Link>
        </div>
      </section>

      <section className={styles.workRoom} aria-labelledby="work-room-title">
        <div className={`container ${styles.workGrid}`}>
          <div className={styles.workCopy}>
            <p className={styles.eyebrow}>THE WORKROOM</p>
            <h2 id="work-room-title">Source first. Process visible.</h2>
            <p>
              Hand drawings, photographs, notes, and later reinterpretations stay close
              enough to compare. The newer image never replaces the source.
            </p>

            <ol className={styles.processRail} aria-label="Studio process">
              <li><span>01</span><strong>Original</strong></li>
              <li><span>02</span><strong>Working note</strong></li>
              <li><span>03</span><strong>Reinterpretation</strong></li>
            </ol>

            <Link href="/studio/" className={styles.darkLink}>
              Enter the studio
            </Link>
          </div>

          <figure className={styles.workFigure}>
            <Image
              src="/media/esther/still-making-father-child-collage-20260802.png"
              alt="A paper collage based on Esther Cho's original childhood sketch"
              width={1536}
              height={1536}
              sizes="(max-width: 899px) 100vw, 48vw"
            />
          </figure>
        </div>
      </section>

      <section className={styles.libraryRoom} aria-labelledby="library-room-title">
        <div className={`container ${styles.libraryGrid}`}>
          <figure className={styles.libraryFigure}>
            <Image
              src="/media/covers/books-cover-final-20260802.webp"
              alt="Esther Cho reading at a softly sunlit table"
              width={1448}
              height={1086}
              sizes="(max-width: 899px) 100vw, 58vw"
            />
          </figure>

          <div className={styles.libraryCopy}>
            <p className={styles.eyebrow}>THE LIBRARY</p>
            <h2 id="library-room-title">Books begin elsewhere in the house.</h2>
            <p>
              A meal, a remembered scene, a devotional note, or a drawing may eventually
              become a book. Publication information appears only when it is confirmed.
            </p>
            <Link href="/books/" className={styles.textLink}>
              Visit the books
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.sittingRoom} aria-labelledby="sitting-room-title">
        <div className={`container ${styles.sittingGrid}`}>
          <div className={styles.sittingCopy}>
            <p className={styles.eyebrow}>THE SITTING ROOM</p>
            <h2 id="sitting-room-title">Esther Cho</h2>
            <p>
              Korean writer and artist Cho Seongyeon, published globally as Esther Cho.
              The biography stays here; the rest of the house shows how the life was lived.
            </p>
            <Link href="/about/" className={styles.textLink}>
              Meet Esther
            </Link>
          </div>

          <figure className={styles.sittingFigure}>
            <Image
              src="/media/covers/esther-cover.webp"
              alt="Esther Cho seated beneath two framed artworks"
              width={1800}
              height={1059}
              sizes="(max-width: 899px) 100vw, 48vw"
            />
          </figure>
        </div>
      </section>
    </main>
  );
}
