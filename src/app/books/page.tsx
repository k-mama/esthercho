import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageCover } from "@/components/page-cover";
import { featuredBook } from "@/content/books";
import styles from "./books.module.css";

export const metadata: Metadata = {
  title: "Beyond the Garden",
  description: "Books and works in progress by Esther Cho.",
};

const facts = [
  featuredBook.details.language,
  featuredBook.details.format,
  featuredBook.details.publication,
];

export default function BooksPage() {
  return (
    <main className={styles.booksPage}>
      <PageCover
        eyebrow="BOOKS"
        title="Beyond the Garden"
        description="Books and works in progress by Esther Cho."
        image="/media/covers/books-cover-final-20260802.png"
        mobileImage="/media/covers/books-cover-final-20260802.png"
        alt="Esther Cho reading an open thick book with a black cover at a softly sunlit table with a blue porcelain mug and purple orchids"
        objectPosition="center center"
        mobileObjectPosition="center center"
        align="right"
        shade="soft"
      />

      <section className={styles.projectSection} aria-labelledby="featured-book-title">
        <div className={`container ${styles.projectHeader}`}>
          <p className={styles.eyebrow}>{featuredBook.eyebrow.en}</p>
          <div className={styles.projectTitleBlock}>
            <h2 id="featured-book-title" className={styles.title}>
              {featuredBook.title}
            </h2>
            <span className={styles.status}>{featuredBook.status.en}</span>
          </div>
          <p className={styles.deck}>{featuredBook.deck.en}</p>
        </div>

        <div className={`container ${styles.projectBody}`}>
          <figure className={styles.projectFigure}>
            <Image
              src="/media/esther/morning-table.jpg"
              alt="A breakfast prepared at Esther Cho's morning table"
              width={1200}
              height={1600}
              sizes="(max-width: 899px) 82vw, 38vw"
            />
            <figcaption>Morning table · A present-day detail</figcaption>
          </figure>

          <div className={styles.projectCopy}>
            <p className={styles.description}>{featuredBook.description.en}</p>
            <Link className={styles.projectLink} href="/notes/">
              Read from The Morning Table
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.detailsSection} aria-labelledby="project-notes-title">
        <div className={`container ${styles.detailsInner}`}>
          <h2 id="project-notes-title" className={styles.detailsHeading}>
            Project notes
          </h2>
          <dl className={styles.projectFacts}>
            {facts.map((item) => (
              <div className={styles.fact} key={item.label.en}>
                <dt>{item.label.en}</dt>
                <dd>{item.value.en}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className={styles.note}>
        <div className={`container ${styles.noteInner}`}>
          <p className={styles.noteLabel}>PUBLICATION RECORD</p>
          <p>
            Cover, publication date, editions, and rights information will be
            added only after each item is formally confirmed.
          </p>
        </div>
      </section>
    </main>
  );
}
