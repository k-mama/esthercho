import type { Metadata } from "next";
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
        image="/media/covers/books-cover.webp"
        mobileImage="/media/covers/books-cover-mobile.webp"
        alt="햇살 드는 식탁에서 검정 표지의 두꺼운 책을 펼쳐 읽는 조성연"
        objectPosition="center center"
        mobileObjectPosition="center center"
        align="right"
        shade="soft"
      />

      <section className={styles.projectSection}>
        <div className={`container ${styles.projectGrid}`}>
          <div className={styles.projectCopy}>
            <p className={styles.eyebrow}>{featuredBook.eyebrow.ko}</p>
            <h2 className={styles.title}>{featuredBook.title}</h2>
            <span className={styles.status}>{featuredBook.status.ko}</span>
            <p className={styles.deck}>{featuredBook.deck.ko}</p>
            <p className={styles.description}>
              {featuredBook.description.ko}
            </p>
            <Link className={styles.projectLink} href="/ko/notes/">
              새벽 식탁의 글 읽기
            </Link>
          </div>

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

      <section className={styles.note}>
        <div className="container">
          <p>
            표지, 출간일, 판본, 권리 정보는 실제로 확정된 뒤에만
            공개합니다.
          </p>
        </div>
      </section>
    </main>
  );
}
