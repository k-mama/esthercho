import Link from "next/link";
import Image from "next/image";
import { type RecordedStory, type StoryLocale, storyHref } from "@/content/esther-story-archive";
import styles from "./esther-story-article.module.css";

type Props = { story: RecordedStory; locale: StoryLocale };

export function EstherStoryArticle({ story, locale }: Props) {
  const t = story[locale];
  const ko = locale === "ko";
  const next = String(Number(story.number) + 1).padStart(2, "0");
  const hasNext = Number(next) <= 18;

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
          {story.number === "01" ? (
            <figure className={styles.archivePhoto}>
              <Image src="/media/esther/childhood-garden.jpg" alt={ko ? "어린 시절 정원에서 찍은 조성연의 실제 사진" : "A real archival photograph of Esther Cho as a child in a garden"} width={1800} height={1350} sizes="(max-width: 900px) 90vw, 620px" />
              <figcaption>{ko ? "어린 시절의 실제 사진입니다. 태몽을 재현한 사진은 아닙니다." : "An actual photograph from Esther's childhood, not a reconstruction of the dream."}</figcaption>
            </figure>
          ) : null}
        </article>
        <aside className={styles.marginNote} aria-label={ko ? "기록 안내" : "Archive note"}>
          <span className={styles.marginLine} aria-hidden="true" />
          <p>{ko ? "조성연의 실제 회고를 바탕으로 편집한 이야기입니다. 확인되지 않은 장면은 덧붙이지 않았습니다." : "Edited from Esther Cho's own recollections. No undocumented scenes have been added."}</p>
        </aside>
      </section>

      <nav className={styles.navigation} aria-label={ko ? "다음 이야기" : "Continue reading"}>
        <div className={`container ${styles.navigationInner}`}>
          <p className={styles.eyebrow}>{ko ? "기억의 다음 페이지" : "KEEP READING"}</p>
          {hasNext ? (
            <>
              <p className={styles.nextNumber}>{next}</p>
              <h2>{ko ? "다음 이야기로" : "The next story"}</h2>
              <Link className={styles.nextLink} href={storyHref(locale, next)}>
                {ko ? `${next}번 이야기 읽기` : `Read story ${next}`} <span aria-hidden="true">→</span>
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
