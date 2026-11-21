import Link from "next/link";
import Image from "next/image";
import { type RecordedStory, type StoryLocale, recordedStories, storyHref, storyIndex, recommendedReadingOrder } from "@/content/esther-story-archive";
import { bigDreamsAuthorWish } from "@/content/big-dreams-author-wish";
import styles from "./esther-story-article.module.css";

type Props = { story: RecordedStory; locale: StoryLocale };

export function EstherStoryArticle({ story, locale }: Props) {
  const t = story[locale];
  const ko = locale === "ko";
  const next = recommendedReadingOrder[recommendedReadingOrder.indexOf(story.number as typeof recommendedReadingOrder[number]) + 1];
  const hasNext = Boolean(next);
  const nextStory = storyIndex(locale).find((candidate) => candidate.number === next);
  const nextSource = recordedStories.find((candidate) => candidate.number === next);
  const nextPreview = next === "02"
    ? (ko
      ? "약 6~7년 동안 매일 세 끼를 차렸던 식탁의 실제 사진 57장."
      : "Fifty-seven photographs from the years she prepared three meals a day.")
    : nextSource?.[locale].deck;

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
          {story.number === "04" ? (
            <p className={styles.familyPortraitCrosslink}>
              <Link href={ko ? "/ko/archive/#cheongdam-family-portrait" : "/archive/#cheongdam-family-portrait"}>
                {ko ? "그 시절 청담동 집 앞 가족사진 보기" : "See the family portrait in front of our Cheongdam-dong home"}
                <span aria-hidden="true"> →</span>
              </Link>
            </p>
          ) : null}
          {story.number === "16" ? (
            <figure className={styles.sonMemory} aria-label={ko ? "작가와 아들의 실제 어린 시절 사진" : "Authentic photographs from her son's childhood"}>
              <Image
                src="/media/esther/son-story/son-with-mother-hammock.webp"
                alt={ko ? "해먹에서 함께 쉬고 있는 조성연 작가와 어린 아들" : "Esther Cho and her young son resting together in a hammock"}
                width={1003} height={644}
                sizes="(max-width: 900px) 92vw, 720px"
              />
              <figcaption>{ko ? "어린 아들과 함께한 날. 그 말을 했던 순간을 촬영한 사진은 아닙니다." : "A day with her young son. This photograph does not depict the moment he spoke those words."}</figcaption>
              <div className={styles.sonMemoryMore}>
                <Image src="/media/esther/son-story/son-laughing-armchair.webp"
                  alt={ko ? "안락의자에 누워 웃는 어린 아들" : "Her young son smiling from an armchair"}
                  width={1183} height={775} sizes="(max-width: 700px) 90vw, 330px" />
                <Image src="/media/esther/son-story/son-blowing-bubbles.webp"
                  alt={ko ? "털모자를 쓰고 비눗방울을 부는 어린 아들" : "Her young son blowing bubbles in a winter hat"}
                  width={981} height={1316} sizes="(max-width: 700px) 90vw, 330px"/>
              </div>
            </figure>
          ) : null}
          {story.number === "16" ? (
            <figure className={styles.storyWish} aria-label={ko ? "작가가 이 그림책에 담고 싶은 마음" : "The wish Esther wants at the heart of the picture book"}>
              <figcaption className={styles.storyWishLabel}>{ko ? "작가가 이 동화의 핵심으로 삼고 싶다고 밝힌 말" : "ESTHER’S WISH FOR THIS STORY"}</figcaption>
              <blockquote lang={locale}>{bigDreamsAuthorWish[locale]}</blockquote>
              <p className={styles.storyWishTranslation} lang={ko ? "en" : "ko"}>{ko ? bigDreamsAuthorWish.en : bigDreamsAuthorWish.ko}</p>
              <p className={styles.storyWishProvenance}>{ko ? "조성연 작가가 직접 전한 말이며, 출간된 책에 인쇄된 문장은 아닙니다." : "Esther Cho shared these words about the story; they are not printed in the published book."}</p>
            </figure>
          ) : null}
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
          <p className={styles.eyebrow}>
            {story.number === "07"
              ? (ko ? "같은 시절, 학교에 관한 또 다른 이야기" : "ANOTHER MEMORY FROM HER SCHOOL YEARS")
              : (ko ? "추천 이어 읽기" : "CONTINUE THE STORY")}
          </p>
          {hasNext ? (
            <>
              <p className={styles.nextNumber}>{next}</p>
              <h2>{nextStory?.title}</h2>
              {nextPreview ? <p className={styles.nextPreview}>{nextPreview}</p> : null}
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
