import Link from "next/link";
import Image from "next/image";
import { type RecordedStory, type StoryLocale, storyHref, recordedStories } from "@/content/esther-story-archive";
import styles from "./esther-story-article.module.css";

type Props = { story: RecordedStory; locale: StoryLocale };

export function EstherStoryArticle({ story, locale }: Props) {
  const t = story[locale];
  const ko = locale === "ko";
  const next = String(Number(story.number) + 1).padStart(2, "0");
  const hasNext = Number(next) <= 18;
  const nextStory = recordedStories.find((candidate) => candidate.number === next);

  return (
    <main className={`${styles.page} ${ko ? styles.korean : ""}`} lang={locale}>
      <section className={`container ${styles.hero}`} aria-labelledby="story-title">
        <Link className={styles.back} href={ko ? "/ko/stories/" : "/stories/"}>
          {ko ? "← 이야기로 돌아가기" : "← Back to stories"}
        </Link>
        <div className={styles.heroGrid}>
          <p className={styles.bigNumber} aria-hidden="true">{story.number}</p>
          <div>
            <p className={styles.eyebrow}>
              {ko ? `이야기 ${story.number}` : `STORY ${story.number}`} <span aria-hidden="true">·</span> {story.theme[locale]}
            </p>
            <h1 id="story-title">{t.title}</h1>
            <p className={styles.deck}>{t.deck}</p>
          </div>
        </div>
      </section>

      <section className={`container ${styles.reading}`} aria-label={ko ? "이야기 본문" : "Story text"}>
        <article className={styles.prose}>
          {t.paragraphs.map((paragraph, index) => (
            <p key={index} className={index === 0 ? styles.opening : undefined}>
              {paragraph}
            </p>
          ))}
          {story.number === "16" ? (
            <div className={styles.bookConnection}>
              <Link
                className={styles.bookCoverLink}
                href={ko ? "/ko/books/#new-release" : "/books/#new-release"}
                aria-label={ko ? "『내 꿈은 말이지?』 영어판 표지와 책 정보 보기" : "See Big Dreams in Every Color and its editions"}
              >
                <Image
                  src="/media/books/big-dreams/cover.webp"
                  alt={ko ? "아들이 커다란 검은 강아지가 되는 꿈을 말한 데서 시작한 그림책 Big Dreams in Every Color 영어판 표지" : "Cover of Big Dreams in Every Color, the revised picture book inspired by Esther's son"}
                  width={1232}
                  height={1850}
                  sizes="(max-width: 600px) 43vw, 210px"
                />
              </Link>
              <div>
                <p className={styles.bookLabel}>{ko ? "이 이야기에서 태어난 그림책" : "THE BOOK THAT GREW FROM HIS WORDS"}</p>
                <p className={styles.bookTitle}>Big Dreams in Every Color</p>
                <Link className={styles.bookLink} href={ko ? "/ko/books/#new-release" : "/books/#new-release"}>
                  {ko ? "그림책과 다국어판 보기" : "Explore the picture book and its editions"}
                  <span aria-hidden="true"> →</span>
                </Link>
              </div>
            </div>
          ) : null}
          {story.number === "01" ? (
            <figure className={styles.archivePhoto}>
              <Image src="/media/esther/childhood-garden.jpg" alt={ko ? "어린 시절 정원에서 찍은 조성연의 실제 사진" : "A real archival photograph of Esther Cho as a child in a garden"} width={1800} height={1350} sizes="(max-width: 900px) 90vw, 620px" />
              <figcaption>{ko ? "어린 시절의 실제 사진입니다. 태몽을 재현한 사진은 아닙니다." : "An actual photograph from Esther's childhood, not a reconstruction of the dream."}</figcaption>
            </figure>
          ) : null}
        </article>
      </section>

      <nav className={styles.navigation} aria-label={ko ? "다음 이야기" : "Continue reading"}>
        <div className={`container ${styles.navigationInner}`}>
          <p className={styles.eyebrow}>{ko ? "기억의 다음 페이지" : "KEEP READING"}</p>
          {hasNext ? (
            <>
              <p className={styles.nextNumber}>{next}</p>
              <h2>{nextStory ? nextStory[locale].title : (ko ? "삼시세끼, 미슐랭 3스타 셰프처럼" : "Three Meals a Day")}</h2>
              <Link className={styles.nextLink} href={storyHref(locale, next)}>
                {ko ? `${next}번으로 이어 읽기` : `Continue to story ${next}`} <span aria-hidden="true">→</span>
              </Link>
            </>
          ) : (
            <Link className={styles.nextLink} href={ko ? "/ko/stories/" : "/stories/"}>
              {ko ? "이야기 목록으로" : "Return to the collection"} <span aria-hidden="true">→</span>
            </Link>
          )}
        </div>
      </nav>
    </main>
  );
}
