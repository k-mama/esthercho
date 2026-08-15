import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HomeHeroVideo } from "./home-hero-video";
import styles from "./page.module.css";
import polish from "./home-polish.module.css";

export const metadata: Metadata = {
  title: "Esther Cho",
  description:
    "A house of stories shaped by faith, memory, food, care, and ordinary life.",
};

const rooms = [
  ["Morning Table", "/notes/"],
  ["Stories", "/stories/"],
  ["Childhood", "/archive/"],
  ["Studio", "/studio/"],
  ["Books", "/books/"],
  ["Esther", "/about/"],
] as const;

export default function Home() {
  return (
    <main className={`${styles.home} ${polish.home}`}>
      <section className={`${styles.videoHero} home-video-hero`}>
        <HomeHeroVideo />

        <div className={styles.videoHeroContent}>
          <p className={styles.videoEyebrow}>WELCOME TO ESTHER&apos;S HOUSE</p>
          <h1>A house of stories, built from memory.</h1>
          <Link href="#inside" className={styles.videoHeroLink}>
            Enter the house
          </Link>
        </div>
      </section>

      <section className={`${styles.threshold} ${polish.foyer}`} id="inside" aria-labelledby="house-title">
        <div className={`container ${styles.thresholdInner}`}>
          <div className={styles.thresholdCopy}>
            <p className={styles.eyebrow}>INSIDE ESTHER&apos;S HOUSE</p>
            <h2 id="house-title">Meals, photographs, drawings, and stories live here together.</h2>
            <p>
              A breakfast can sit beside a verse. A childhood photograph can open a story
              decades later. Different records keep finding one another inside the same life.
            </p>
          </div>

          <nav className={`${styles.roomLinks} ${polish.roomLinks}`} aria-label="Rooms in Esther Cho's house">
            {rooms.map(([label, href], index) => (
              <Link href={href} key={href}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{label}</strong>
                <i aria-hidden="true">↗</i>
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section className={`${styles.scene} ${styles.tableScene} ${polish.table}`} aria-labelledby="table-title">
        <div className={`container ${styles.sceneGrid}`}>
          <div className={styles.sceneCopy}>
            <p className={styles.eyebrow}>MORNING TABLE</p>
            <h2 id="table-title">The table is where ordinary care becomes visible.</h2>
            <p>
              Breakfast, Scripture, family meals, and the dishes prepared for people she
              loves belong to the same lived rhythm.
            </p>
            <Link href="/notes/" className={styles.textLink}>
              Go to Morning Table
            </Link>
          </div>

          <figure className={`${styles.sceneMedia} ${styles.tableMedia} ${polish.tableMedia}`}>
            <Image
              src="/media/esther/morning-table.jpg"
              alt="Breakfast at Esther Cho's morning table"
              width={1200}
              height={1600}
              sizes="(max-width: 899px) 100vw, 46vw"
              priority={false}
            />
          </figure>
        </div>
      </section>

      <section className={`${styles.scene} ${styles.memoryScene} ${polish.memory}`} aria-labelledby="memory-title">
        <div className={`container ${styles.sceneGrid} ${styles.reverseScene}`}>
          <div className={styles.memoryCollage} aria-label="Esther Cho childhood archive photographs">
            <figure className={`${styles.memoryPrimary} ${polish.memoryPrimary}`}>
              <Image
                src="/media/esther/childhood-garden.jpg"
                alt="A garden from Esther Cho's childhood archive"
                width={1800}
                height={1200}
                sizes="(max-width: 899px) 92vw, 48vw"
              />
            </figure>
            <figure className={`${styles.memorySecondary} ${polish.memorySecondary}`}>
              <Image
                src="/media/esther/childhood-house.jpg"
                alt="A house from Esther Cho's childhood archive"
                width={1200}
                height={900}
                sizes="(max-width: 899px) 44vw, 20vw"
              />
            </figure>
          </div>

          <div className={styles.sceneCopy}>
            <p className={styles.eyebrow}>MEMORY</p>
            <h2 id="memory-title">Some photographs remember before words do.</h2>
            <p>
              Childhood homes, gardens, family photographs, names, places, and small details
              return slowly. The image stays what it was; the story beside it can keep growing.
            </p>
            <Link href="/archive/" className={styles.textLink}>
              Open the childhood archive
            </Link>
          </div>
        </div>
      </section>

      <section className={`${styles.scene} ${styles.careScene} ${polish.care}`} aria-labelledby="care-title">
        <div className={`container ${styles.careLayout}`}>
          <div className={styles.sceneCopy}>
            <p className={styles.eyebrow}>STORIES OF CARE</p>
            <h2 id="care-title">Care is not a separate achievement. It is part of the week.</h2>
            <p>
              Family, church, service trips, friends, errands, laughter, and the people
              who needed a little room in her day become stories without being turned into
              a résumé.
            </p>
            <Link href="/stories/" className={styles.textLink}>
              Read the stories
            </Link>
          </div>

          <figure className={`${styles.sceneMedia} ${styles.careMedia} ${polish.careMedia}`}>
            <Image
              src="/media/esther/bangladesh-service.jpg"
              alt="A photograph from Esther Cho's service archive in Bangladesh"
              width={1200}
              height={800}
              sizes="(max-width: 899px) 100vw, 54vw"
            />
            <figcaption>Service archive · Bangladesh</figcaption>
          </figure>
        </div>
      </section>

      <section className={`${styles.scene} ${styles.studioScene} ${polish.studio}`} aria-labelledby="studio-title">
        <div className={`container ${styles.sceneGrid}`}>
          <div className={styles.sceneCopy}>
            <p className={styles.eyebrow}>THE STUDIO</p>
            <h2 id="studio-title">Her hand stays visible.</h2>
            <p>
              Original drawings and later collages live close together. New work may extend
              an image, but the source is never disguised.
            </p>
            <Link href="/studio/" className={styles.textLink}>
              Enter the studio
            </Link>
          </div>

          <div className={styles.studioCollage} aria-label="Collage built from Esther Cho's original sketch">
            <figure className={`${styles.studioPrimary} ${polish.studioPrimary}`}>
              <Image
                src="/media/esther/still-making-father-child-collage-20260802.png"
                alt="A collage built from Esther Cho's original childhood sketch"
                width={1536}
                height={1536}
                sizes="(max-width: 899px) 82vw, 34vw"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className={`${styles.closingRoom} ${polish.closing}`} aria-labelledby="closing-title">
        <div className={`container ${styles.closingInner}`}>
          <p className={styles.eyebrow}>KEEP WALKING</p>
          <h2 id="closing-title">Some of these stories eventually become books.</h2>
          <div className={styles.closingLinks}>
            <Link href="/books/">Books <span aria-hidden="true">→</span></Link>
            <Link href="/about/">Meet Esther <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
