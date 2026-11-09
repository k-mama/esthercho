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
    coverCaption: "FRONT COVER",
    backCoverAlt: "Back cover artwork showing a black dog in a red cape and the book barcode",
    backCoverCaption: "BACK COVER",
    firstVideoEyebrow: "A 10-SECOND GLIMPSE",
    firstVideoTitle: "A little world of wonder.",
    firstVideoDescription:
      "Step into Big Dreams in Every Color, where a child's imagination makes room for the impossible.",
    videoLabel: "Watch the 10-second Big Dreams in Every Color book trailer",
    videoCaption: "BIG DREAMS IN EVERY COLOR",
    secondVideoEyebrow: "ANOTHER 10-SECOND STORY",
    secondVideoTitle: "Little hearts. Big dreams.",
    secondVideoDescription:
      "A little boy imagines becoming a brave black dog. Sometimes the impossible dreams are the ones we remember.",
    secondVideoLabel: "Watch Little Hearts, Big Dreams, a second 10-second picture book trailer",
    secondVideoCaption: "LITTLE HEARTS · BIG DREAMS",
    thirdVideoEyebrow: "A 16-SECOND LITTLE ADVENTURE",
    thirdVideoTitle: "Around the world. Home for dinner.",
    thirdVideoDescription:
      "A yellow car, one very big plan, and a child's wonderfully simple idea of adventure.",
    thirdVideoLabel: "Watch the yellow car adventure from Big Dreams in Every Color",
    thirdVideoCaption: "THE YELLOW CAR · BIG DREAMS IN EVERY COLOR",
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
    coverCaption: "앞표지",
    backCoverAlt: "빨간 망토를 두른 검은 강아지와 바코드가 그려진 그림책 뒷표지",
    backCoverCaption: "뒷표지",
    firstVideoEyebrow: "첫 번째 10초 이야기",
    firstVideoTitle: "상상이 피어나는 작은 세상.",
    firstVideoDescription:
      "무엇이든 꿈꿀 수 있는 아이들의 세계. Big Dreams in Every Color를 10초 동안 만나보세요.",
    videoLabel: "Big Dreams in Every Color 그림책 10초 홍보영상",
    videoCaption: "BIG DREAMS IN EVERY COLOR",
    secondVideoEyebrow: "또 하나의 10초 이야기",
    secondVideoTitle: "작은 마음, 커다란 꿈.",
    secondVideoDescription:
      "커다란 검은 강아지가 되고 싶다는 아이의 꿈. 이루어질 수 없어도 오래 기억하고 싶은 상상입니다.",
    secondVideoLabel: "작은 마음, 커다란 꿈 — Big Dreams in Every Color 두 번째 10초 홍보영상",
    secondVideoCaption: "작은 마음 · 커다란 꿈",
    thirdVideoEyebrow: "16초의 작은 모험",
    thirdVideoTitle: "세계를 한 바퀴 돌고, 저녁엔 집으로.",
    thirdVideoDescription:
      "노란 자동차를 타고 떠나는 아이의 커다란 계획. 상상 속에서는 어디든 갈 수 있으니까요.",
    thirdVideoLabel: "Big Dreams in Every Color 노란 자동차 모험 영상",
    thirdVideoCaption: "노란 자동차 · 커다란 꿈",
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

          <figure className={styles.coverFigure}>
            <Image
              src={`${assetBase}/back-cover.webp`}
              alt={content.backCoverAlt}
              width={1000}
              height={1501}
              sizes="(max-width: 600px) 43vw, (max-width: 899px) 38vw, 22vw"
              className={styles.coverImage}
            />
            <figcaption>{content.backCoverCaption}</figcaption>
          </figure>
        </div>
      </div>

      <div className={`container ${styles.trailers}`}>
        <div className={styles.trailerRow}>
          <div className={styles.trailerCopy}>
            <p className={styles.eyebrow}>{content.firstVideoEyebrow}</p>
            <h3>{content.firstVideoTitle}</h3>
            <p>{content.firstVideoDescription}</p>
          </div>

          <figure className={styles.trailerFigure}>
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

        <div className={styles.trailerRow}>
          <div className={styles.trailerCopy}>
            <p className={styles.eyebrow}>{content.secondVideoEyebrow}</p>
            <h3>{content.secondVideoTitle}</h3>
            <p>{content.secondVideoDescription}</p>
          </div>

          <figure className={styles.trailerFigure}>
            <video
              className={styles.video}
              controls
              playsInline
              preload="none"
              poster={`${assetBase}/birdsong-poster.webp`}
              aria-label={content.secondVideoLabel}
              width={720}
              height={1280}
            >
              <source src={`${assetBase}/birdsong.mp4`} type="video/mp4" />
              {content.fallback}
            </video>
            <figcaption>{content.secondVideoCaption}</figcaption>
          </figure>
        </div>

        <div className={styles.trailerRow}>
          <div className={styles.trailerCopy}>
            <p className={styles.eyebrow}>{content.thirdVideoEyebrow}</p>
            <h3>{content.thirdVideoTitle}</h3>
            <p>{content.thirdVideoDescription}</p>
          </div>

          <figure className={styles.trailerFigure}>
            <video
              className={styles.video}
              controls
              playsInline
              preload="none"
              poster={`${assetBase}/yellow-car-poster.webp`}
              aria-label={content.thirdVideoLabel}
              width={720}
              height={1280}
            >
              <source src={`${assetBase}/yellow-car.mp4`} type="video/mp4" />
              {content.fallback}
            </video>
            <figcaption>{content.thirdVideoCaption}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
