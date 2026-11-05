import Image from "next/image";
import Link from "next/link";
import styles from "./book-launch.module.css";

type Locale = "en" | "ko";
type Placement = "home" | "books";

const amazonUrl = "https://www.amazon.com/dp/B0HQ9Z7SRD";
const assetBase = "/media/books/big-dreams";

const copy = {
  en: {
    eyebrow: "NEW PICTURE BOOK · NOW AVAILABLE",
    byline: "Sung Yeon Cho · AMAZING TIGER",
    description:
      "A big black dog, soft green grass, a yellow car, a blue sea, an orange sunset. Five children follow their imaginations, until a small bedtime question brings the dreaming home.",
    buy: "Buy on Amazon",
    explore: "Discover the book",
    coverAlt: "Front cover of Big Dreams in Every Color by Sung Yeon Cho",
    coverCaption: "THE BOOK",
    videoLabel: "Watch the 10-second Big Dreams in Every Color book trailer",
    videoCaption: "A 10-SECOND GLIMPSE",
    fallback: "Your browser does not support video playback.",
  },
  ko: {
    eyebrow: "새로 나온 그림책 · 출간",
    byline: "조성연 · AMAZING TIGER",
    description:
      "커다란 검은 강아지, 부드러운 초록 잔디, 노란 자동차, 파란 바다, 주황빛 노을. 다섯 아이의 상상은 잠자리의 작은 질문으로 이어집니다.",
    buy: "아마존에서 구매하기",
    explore: "책 자세히 보기",
    coverAlt: "조성연 작가의 그림책 Big Dreams in Every Color 앞표지",
    coverCaption: "책 표지",
    videoLabel: "Big Dreams in Every Color 그림책 10초 홍보영상",
    videoCaption: "10초 홍보영상",
    fallback: "이 브라우저에서는 영상을 재생할 수 없습니다.",
  },
} as const;

export function BookLaunch({ locale, placement }: { locale: Locale; placement: Placement }) {
  const content = copy[locale];
  const sectionId = placement === "books" ? "new-release" : "book-launch-home";
  const titleId = `${sectionId}-title`;

  return (
    <section
      className={styles.launch}
      id={sectionId}
      aria-labelledby={titleId}
    >
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>{content.eyebrow}</p>
          <h2 id={titleId} className={styles.title}>
            Big Dreams <span>in Every Color</span>
          </h2>
          <p className={styles.byline}>{content.byline}</p>
          <p className={styles.description}>{content.description}</p>
          <div className={styles.actions}>
            <a
              className={styles.buyLink}
              href={amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {content.buy} <span aria-hidden="true">↗</span>
            </a>
            {placement === "home" && (
              <Link
                className={styles.moreLink}
                href={locale === "ko" ? "/ko/books/#new-release" : "/books/#new-release"}
              >
                {content.explore} <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>
        </div>

        <div className={styles.media}>
          <figure className={styles.coverFigure}>
            <Image
              src={`${assetBase}/cover.webp`}
              alt={content.coverAlt}
              width={1232}
              height={1850}
              sizes="(max-width: 600px) 43vw, (max-width: 899px) 38vw, 22vw"
              className={styles.coverImage}
            />
            <figcaption>{content.coverCaption}</figcaption>
          </figure>
          <figure className={styles.videoFigure}>
            <video
              className={styles.video}
              controls
              playsInline
              preload="none"
              poster={`${assetBase}/trailer-poster.webp`}
              aria-label={content.videoLabel}
              width={1080}
              height={1920}
            >
              <source src={`${assetBase}/trailer.mp4`} type="video/mp4" />
              {content.fallback}
            </video>
            <figcaption>{content.videoCaption}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
