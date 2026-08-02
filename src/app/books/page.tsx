import type { Metadata } from "next";
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

      <section className={styles.projectSection}>
        <div className={`container ${styles.projectGrid}`}>
          <div className={styles.projectCopy}>
            <p className={styles.eyebrow}>{featuredBook.eyebrow.en}</p>
            <h2 className={styles.title}>{featuredBook.title}</h2>
            <span className={styles.status}>{featuredBook.status.en}</span>
            <p className={styles.deck}>{featuredBook.deck.en}</p>
            <p className={styles.description}>
              {featuredBook.description.en}
            </p>
            <Link className={styles.projectLink} href="/notes/">
              Read from The Morning Table
            </Link>
          </div>

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
        <div className="container">
          <p>
            Cover, publication date, editions, and rights information will be
            added only after each item is formally confirmed.
          </p>
        </div>
      </section>
    </main>
  );
}
