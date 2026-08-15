import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageCover } from "@/components/page-cover";
import { featuredBook } from "@/content/books";
import styles from "../../books/books.module.css";

export const metadata: Metadata = {
  title: "정원 너머",
  description: "조성연의 책과 출간을 준비 중인 작업.",
};

const facts = [
  featuredBook.details.language,
  featuredBook.details.format,
  featuredBook.details.publication,
];

export default function KoreanBooksPage() {
  return (
    <main className={styles.booksPage}>
      <PageCover
        eyebrow="책"
        title="정원 너머"
        description="조성연의 책과 출간을 준비 중인 작업."
        image="/media/covers/books-cover-final-20260802.webp"
        mobileImage="/media/covers/books-cover-final-20260802.webp"
        alt="은은한 햇살이 드는 식탁에서 검정 표지의 두꺼운 책을 펼쳐 읽는 조성연과 푸른 무늬 머그컵, 보라 난초"
        objectPosition="center center"
        mobileObjectPosition="center center"
        align="right"
        shade="soft"
      />

      <section className={styles.projectSection} aria-labelledby="featured-book-title">
        <div className={`container ${styles.projectHeader}`}>
          <p className={styles.eyebrow}>{featuredBook.eyebrow.ko}</p>
          <div className={styles.projectTitleBlock}>
            <h2 id="featured-book-title" className={styles.title}>
              {featuredBook.title}
            </h2>
            <span className={styles.status}>{featuredBook.status.ko}</span>
          </div>
          <p className={styles.deck}>{featuredBook.deck.ko}</p>
        </div>

        <div className={`container ${styles.projectBody}`}>
          <figure className={styles.projectFigure}>
            <Image
              src="/media/esther/morning-table.jpg"
              alt="조성연 작가의 아침 식탁에 놓인 아침 식사"
              width={1200}
              height={1600}
              sizes="(max-width: 899px) 82vw, 38vw"
            />
            <figcaption>아침 식탁 · 오늘</figcaption>
          </figure>

          <div className={styles.projectCopy}>
            <p className={styles.description}>{featuredBook.description.ko}</p>
            <Link className={styles.projectLink} href="/ko/notes/">
              아침 식탁의 글 읽기
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.detailsSection} aria-labelledby="project-notes-title">
        <div className={`container ${styles.detailsInner}`}>
          <h2 id="project-notes-title" className={styles.detailsHeading}>
            원고 정보
          </h2>
          <dl className={styles.projectFacts}>
            {facts.map((item) => (
              <div className={styles.fact} key={item.label.ko}>
                <dt>{item.label.ko}</dt>
                <dd>{item.value.ko}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </main>
  );
}
